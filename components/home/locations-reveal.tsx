"use client";

import createGlobe, { type Globe } from "cobe";
import {
	createContext,
	useContext,
	useEffect,
	useRef,
	type ReactNode,
} from "react";
import {
	motion,
	useMotionValue,
	useScroll,
	useTransform,
	easeInOut,
	transform,
	type MotionValue,
} from "motion/react";
import "./locations-reveal.css";

const Progress = createContext<MotionValue<number> | null>(null);
const places = [
	{
		id: "noida",
		name: "Noida (UP)",
		location: [28.57, 77.32] as [number, number],
		start: 0.21,
	},
	{
		id: "lucknow",
		name: "Lucknow",
		location: [26.85, 80.95] as [number, number],
		start: 0.32,
	},
	{
		id: "ahmedabad",
		name: "Ahmedabad",
		location: [23.02, 72.57] as [number, number],
		start: 0.43,
	},
];
const focusPhi = (longitude: number) =>
	Math.PI * 1.5 - (longitude * Math.PI) / 180;
const radians = (degrees: number) => (degrees * Math.PI) / 180;

function GlobeLabel({
	place,
	progress,
}: {
	place: (typeof places)[number];
	progress: MotionValue<number>;
}) {
	const opacity = useTransform(
		progress,
		[place.start, place.start + 0.055],
		[0, 1],
	);
	return (
		<motion.span
			data-globe-label={place.id}
			className="locations-globe-label bg-foreground text-background"
			style={{ opacity }}
		>
			{place.name}
		</motion.span>
	);
}

// Resolve the site's semantic colors to RGB tuples for COBE's WebGL uniforms.
function readColor(
	element: HTMLElement,
	token: string,
): [number, number, number] {
	const probe = document.createElement("span");
	probe.style.color = `var(--${token})`;
	element.append(probe);
	const color = getComputedStyle(probe).color;
	probe.remove();
	const context = document.createElement("canvas").getContext("2d")!;
	context.fillStyle = color;
	context.fillRect(0, 0, 1, 1);
	const [r, g, b] = context.getImageData(0, 0, 1, 1).data;
	return [r / 255, g / 255, b / 255];
}

function LocationGlobe({ progress }: { progress: MotionValue<number> }) {
	const host = useRef<HTMLDivElement>(null);
	const canvas = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const element = host.current;
		const surface = canvas.current;
		if (!element || !surface) return;
		let globe: Globe | undefined;
		let repaint = 0;
		let drag: { id: number; x: number; y: number; phi: number; theta: number; touch: boolean } | undefined;
		let phiOffset = 0;
		let thetaOffset = 0;
		const listeners = new AbortController();
		const interactive = () => preference.matches || progress.get() >= 0.995;
		const endDrag = () => {
			if (drag && surface.hasPointerCapture(drag.id)) surface.releasePointerCapture(drag.id);
			drag = undefined;
			element.removeAttribute("data-dragging");
		};
		const preference = matchMedia("(prefers-reduced-motion: reduce)");
		const stops = [0, 0.15, 0.27, 0.38, 0.49, 0.59, 0.72, 1];
		const draw = () => {
			if (!globe) return;
			const enabled = interactive() && element.hasAttribute("data-webgl-ready");
			element.toggleAttribute("data-globe-interactive", enabled);
			surface.tabIndex = enabled ? 0 : -1;
			if (!enabled) {
				endDrag();
				phiOffset = 0;
				thetaOffset = 0;
			}
			const p = preference.matches ? 1 : progress.get();
			const phi = transform(
				p,
				stops,
				[
					2.2,
					3,
					focusPhi(77.32),
					focusPhi(80.95),
					focusPhi(72.57),
					focusPhi(77),
					focusPhi(77),
					focusPhi(77),
				],
				{ ease: easeInOut },
			);
			const theta = transform(
				p,
				stops,
				[
					0.05,
					0.25,
					radians(28.57),
					radians(26.85),
					radians(23.02),
					0.42,
					0.42,
					0.42,
				],
				{ ease: easeInOut },
			);
			const scale = transform(
				p,
				[0, 0.15, 0.24, 0.5, 0.59, 0.72, 1],
				[0, 0.78, 1.14, 1.14, 1.1, 1.14, 1.14],
				{ ease: easeInOut },
			);
			globe.update({ phi: phi + phiOffset, theta: Math.max(-1.3, Math.min(1.3, theta + thetaOffset)), scale });
			const visibility = getComputedStyle(document.documentElement);
			for (const place of places) {
				const anchor = element.querySelector<HTMLElement>(
					`[style*="anchor-name: --cobe-${place.id}"], [style*="anchor-name:--cobe-${place.id}"]`,
				);
				const label = element.querySelector<HTMLElement>(
					`[data-globe-label="${place.id}"]`,
				);
				if (anchor && label) {
					label.style.left = anchor.style.left;
					label.style.top = anchor.style.top;
					label.style.visibility = visibility.getPropertyValue(`--cobe-visible-${place.id}`).trim() ? "visible" : "hidden";
				}
			}
		};
		const initialize = () => {
			clearTimeout(repaint);
			// COBE owns a wrapper around the canvas. Restore the canvas after destroying an old instance.
			globe?.destroy();
			const wrapper = surface.parentElement;
			if (wrapper && wrapper !== element) {
				element.append(surface);
				wrapper.remove();
			}
			const width = element.clientWidth;
			const ratio = Math.min(window.devicePixelRatio || 1, 2);
			const base = readColor(element, "background");
			const marker = readColor(element, "primary");
			globe = createGlobe(surface, {
				width,
				height: width,
				devicePixelRatio: ratio,
				phi: focusPhi(77),
				theta: 0.42,
				dark: 0,
				diffuse: 1.2,
				mapSamples: width < 500 ? 18000 : 32000,
				mapBrightness: 5,
				mapBaseBrightness: 0,
				baseColor: base,
				glowColor: readColor(element, "surface"),
				markerColor: marker,
				markerElevation: 0.03,
				markers: places.map(({ id, location }) => ({
					id,
					location,
					size: 0.018,
				})),
				arcs: [
					{ from: places[0].location, to: places[1].location },
					{ from: places[0].location, to: places[2].location },
				],
				arcColor: marker,
				arcWidth: 0.5,
				arcHeight: 0.12,
			});
			const available = !!element.querySelector('[style*="anchor-name"]');
			element.toggleAttribute("data-webgl-ready", available);
			draw();
			// Render again when COBE's embedded map texture has loaded.
			repaint = window.setTimeout(draw, 250);
		};
		initialize();
		surface.addEventListener("pointerdown", (event) => {
			if (!interactive() || !element.hasAttribute("data-webgl-ready") || !event.isPrimary || event.button !== 0) return;
			drag = { id: event.pointerId, x: event.clientX, y: event.clientY, phi: phiOffset, theta: thetaOffset, touch: event.pointerType === "touch" };
			surface.setPointerCapture(event.pointerId);
			element.setAttribute("data-dragging", "");
		}, { signal: listeners.signal });
		surface.addEventListener("pointermove", (event) => {
			if (!drag || drag.id !== event.pointerId) return;
			phiOffset = drag.phi + (event.clientX - drag.x) / 240;
			if (!drag.touch) thetaOffset = Math.max(-1.7, Math.min(0.8, drag.theta + (event.clientY - drag.y) / 300));
			draw();
		}, { signal: listeners.signal });
		for (const name of ["pointerup", "pointercancel", "lostpointercapture"]) {
			surface.addEventListener(name, endDrag, { signal: listeners.signal });
		}
		surface.addEventListener("keydown", (event) => {
			if (!interactive()) return;
			if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home"].includes(event.key)) return;
			event.preventDefault();
			if (event.key === "Home") { phiOffset = 0; thetaOffset = 0; }
			if (event.key === "ArrowLeft") phiOffset -= 0.1;
			if (event.key === "ArrowRight") phiOffset += 0.1;
			if (event.key === "ArrowUp") thetaOffset = Math.max(-1.7, thetaOffset - 0.1);
			if (event.key === "ArrowDown") thetaOffset = Math.min(0.8, thetaOffset + 0.1);
			draw();
		}, { signal: listeners.signal });
		const resize = new ResizeObserver(initialize);
		resize.observe(element);
		const unsubscribe = progress.on("change", draw);
		preference.addEventListener("change", draw);
		let dark = document.documentElement.classList.contains("dark");
		const theme = new MutationObserver(() => {
			const next = document.documentElement.classList.contains("dark");
			if (next !== dark) {
				dark = next;
				initialize();
			}
		});
		theme.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});
		return () => {
			endDrag();
			listeners.abort();
			clearTimeout(repaint);
			resize.disconnect();
			theme.disconnect();
			unsubscribe();
			preference.removeEventListener("change", draw);
			globe?.destroy();
			const wrapper = surface.parentElement;
			if (wrapper && wrapper !== element) {
				element.append(surface);
				wrapper.remove();
			}
		};
	}, [progress]);

	return (
		<div
			ref={host}
			className="locations-globe"
			role="group"
			aria-label="Globe showing Noida in Uttar Pradesh, Lucknow, and Ahmedabad"
		>
			<canvas ref={canvas} role="img" aria-label="Rotate globe by dragging or using arrow keys. Press Home to reset the view." />
			{places.map((place) => (
				<GlobeLabel key={place.id} place={place} progress={progress} />
			))}
			<div className="locations-globe-fallback text-secondary">
				Noida ? Lucknow ? Ahmedabad
			</div>
		</div>
	);
}

export function LocationsReveal({ children }: { children: ReactNode }) {
	const section = useRef<HTMLElement>(null);
	const track = useRef<HTMLDivElement>(null);
	const cards = useRef<HTMLDivElement>(null);
	const finalY = useMotionValue(0);
	const initialY = useMotionValue(0);
	const { scrollYProgress: progress } = useScroll({
		target: track,
		offset: ["start start", "end start"],
	});
	const y = useTransform(() =>
		transform(
			progress.get(),
			[0, 0.57, 0.72, 1],
			[initialY.get(), initialY.get(), finalY.get(), finalY.get()],
			{ ease: easeInOut },
		),
	);
	const headingOpacity = useTransform(progress, [0.68, 0.8], [0, 1]);

	useEffect(() => {
		const element = section.current;
		const content = cards.current;
		if (!element || !content) return;
		const measure = () => {
			const width = Math.min(element.clientWidth, 1200);
			initialY.set(Math.max(0, (window.innerHeight - width) / 2));
			finalY.set(content.offsetHeight);
		};
		measure();
		element.setAttribute("data-locations-motion", "");
		const resize = new ResizeObserver(measure);
		resize.observe(content);
		resize.observe(element);
		window.addEventListener("resize", measure);
		return () => {
			resize.disconnect();
			window.removeEventListener("resize", measure);
			element.removeAttribute("data-locations-motion");
		};
	}, [finalY, initialY]);

	return (
		<Progress.Provider value={progress}>
			<section
				ref={section}
				aria-labelledby="locations-heading"
				className="locations-reveal relative bg-surface"
			>
				<div
					ref={track}
					aria-hidden="true"
					className="locations-reveal-track"
				/>
				<div className="locations-reveal-stage">
					<div ref={cards} className="locations-reveal-cards">
						<motion.header
							className="locations-heading locations-final mx-auto flex max-w-3xl flex-col gap-3 px-2.5 pt-6 text-center sm:gap-4 md:pt-8 lg:pt-12 xl:pt-16 2xl:pt-20"
							style={{ opacity: headingOpacity }}
						>
							<h2
								id="locations-heading"
								className="text-2xl leading-tight font-extrabold tracking-tight text-secondary md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
							>
								Strategic Locations{" "}
								<span className="text-primary">Across India</span>
							</h2>
							<p className="text-base leading-relaxed text-foreground md:text-lg">
								Unified physical infrastructure powering integrated media
								buying, multi-city releasing, and PR across key enterprise and
								growth corridors.
							</p>
						</motion.header>
						{children}
					</div>
					<div className="locations-globe-space" aria-hidden="true" />
					<motion.div className="locations-globe-position" style={{ y }}>
						<LocationGlobe progress={progress} />
					</motion.div>
				</div>
				<div className="locations-reveal-runway" aria-hidden="true" />
			</section>
		</Progress.Provider>
	);
}

export function LocationRevealCard({
	index,
	className = "",
	children,
}: {
	index: number;
	className?: string;
	children: ReactNode;
}) {
	const progress = useContext(Progress)!;
	const start = 0.72 + index * 0.04;
	const shellOpacity = useTransform(
		progress,
		[start, start + 0.04, 0.91, 1],
		[0, 1, 1, 0],
	);
	const opacity = useTransform(
		progress,
		[0.87 + index * 0.02, 0.95 + index * 0.02],
		[0, 1],
	);
	return (
		<div className={`locations-card-shell grid min-w-0 ${className}`}>
			<motion.div
				className="locations-final col-start-1 row-start-1 grid min-w-0"
				style={{ opacity }}
			>
				{children}
			</motion.div>
			<motion.div
				aria-hidden="true"
				className="locations-placeholder pointer-events-none col-start-1 row-start-1 rounded-2xl bg-muted"
				style={{ opacity: shellOpacity }}
			/>
		</div>
	);
}
