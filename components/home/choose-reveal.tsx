"use client";

import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";
import { easeInOut, motion, useScroll, useTransform, type MotionValue } from "motion/react";
import "./choose-reveal.css";

const RevealProgress = createContext<MotionValue<number> | null>(null);
const cardOrder = [0, 3, 4, 1, 5, 6, 2];

export function ChooseReveal({
	heading,
	texture,
	children,
}: {
	heading: ReactNode;
	texture: ReactNode;
	children: ReactNode;
}) {
	const section = useRef<HTMLElement>(null);
	const track = useRef<HTMLDivElement>(null);
	const { scrollYProgress: progress } = useScroll({
		target: track,
		offset: ["start start", "end start"],
	});

	const circleTransform = useTransform(progress, [0, 0.06, 0.31], [
		"scale(0)", "scale(0.018)", "scale(1)",
	], { ease: easeInOut });
	const circleOpacity = useTransform(progress, [0.32, 0.36], [1, 0]);
	const surfaceOpacity = useTransform(progress, [0.28, 0.32], [0, 1]);
	const glowOpacity = useTransform(progress, [0.35, 0.49], [0, 1]);
	const glowTransform = useTransform(progress, [0.35, 0.49], [
		"translate(8%, -8%)", "translate(0%, 0%)",
	], { ease: easeInOut });
	const textureOpacity = useTransform(progress, [0.75, 0.9], [0, 1]);
	const headingOpacity = useTransform(progress, [0.74, 0.87], [0, 1]);

	useEffect(() => {
		const element = section.current;
		if (!element) return;
		element.setAttribute("data-choose-motion", "");
		return () => element.removeAttribute("data-choose-motion");
	}, []);

	return (
		<RevealProgress.Provider value={progress}>
			<section ref={section} className="choose-reveal relative bg-surface">
				<div ref={track} aria-hidden="true" className="choose-reveal-track pointer-events-none absolute inset-x-0 top-0" />
				<div className="choose-reveal-panel dark relative isolate overflow-clip text-foreground 2xl:py-20 xl:py-16 lg:py-12 md:py-8 py-6">
					<motion.div
						aria-hidden="true"
						className="choose-reveal-circle pointer-events-none absolute rounded-full bg-surface"
						style={{ transform: circleTransform, opacity: circleOpacity }}
					/>
					<motion.div
						aria-hidden="true"
						className="choose-reveal-surface pointer-events-none absolute inset-0 bg-surface"
						style={{ opacity: surfaceOpacity }}
					/>
					<motion.div aria-hidden="true" className="choose-reveal-final pointer-events-none absolute inset-0" style={{ opacity: textureOpacity }}>
						{texture}
					</motion.div>
					<motion.div
						aria-hidden="true"
						className="choose-reveal-final pointer-events-none absolute -top-80 -right-80 z-1 size-157 rounded-full bg-secondary-foreground blur-[230px]"
						style={{ opacity: glowOpacity, transform: glowTransform }}
					/>
					<div className="@container/choose container mx-auto px-2.5 flex flex-col 2xl:gap-20 xl:gap-16 lg:gap-12 gap-8 relative z-2">
						<motion.div className="choose-reveal-final" style={{ opacity: headingOpacity }}>{heading}</motion.div>
						{children}
					</div>
				</div>
				<div aria-hidden="true" className="choose-reveal-runway" />
				<noscript>
					<style>{".choose-reveal-panel { position: relative !important; } .choose-reveal-runway { display: none; }"}</style>
				</noscript>
			</section>
		</RevealProgress.Provider>
	);
}

export function ChooseRevealCard({
	index,
	className,
	children,
}: {
	index: number;
	className: string;
	children: ReactNode;
}) {
	const progress = useContext(RevealProgress)!;
	const placeholderStart = 0.51 + cardOrder[index] * 0.03;
	const revealStart = 0.76 + index * 0.018;
	const placeholderOpacity = useTransform(
		progress,
		[placeholderStart, placeholderStart + 0.045, revealStart, revealStart + 0.1],
		[0, 1, 1, 0],
	);
	const cardOpacity = useTransform(progress, [revealStart, revealStart + 0.1], [0, 1]);

	return (
		<div className={className}>
			<motion.div className="choose-reveal-final col-start-1 row-start-1 grid min-w-0" style={{ opacity: cardOpacity }}>
				{children}
			</motion.div>
			<motion.div
				aria-hidden="true"
				className="choose-reveal-placeholder pointer-events-none col-start-1 row-start-1 rounded-2xl bg-card"
				style={{ opacity: placeholderOpacity }}
			/>
		</div>
	);
}
