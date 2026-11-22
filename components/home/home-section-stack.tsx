"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import "./home-section-stack.css";

type StackSection = {
	id: string;
	surface?: "surface" | "background" | "secondary";
	content: ReactNode;
};

export default function HomeSectionStack({ sections }: { sections: StackSection[] }) {
	const stack = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = stack.current;
		if (!container) return;

		const panels = Array.from(container.querySelectorAll<HTMLElement>(":scope > .home-section-stack-panel"));
		const headings = panels.flatMap((panel) => {
			const header = panel.querySelector<HTMLElement>("[data-section-stack-header]");
			const slot = header?.querySelector<HTMLElement>("[data-section-title-slot]");
			const action = header?.querySelector<HTMLElement>("[data-section-action-slot]");
			const anchor = panel.querySelector<HTMLElement>(".home-section-stack-anchor");
			return header && slot && action && anchor ? [{ header, slot, action, anchor, pinAt: 0, titleOffset: 0 }] : [];
		});
		const last = headings.at(-1);
		if (!last) return;

		const pinnedHeadings = headings.slice(0, -1);
		const preference = matchMedia("(prefers-reduced-motion: reduce)");
		let measurement = 0;

		const update = () => {
			const y = window.scrollY;
			for (const { header, pinAt } of pinnedHeadings) {
				if (preference.matches || y < pinAt) {
					header.removeAttribute("data-stack-position");
				} else {
					const position = y < last.pinAt ? "fixed" : "released";
					if (header.dataset.stackPosition !== position) header.dataset.stackPosition = position;
				}
			}
		};

		const measure = () => {
			// Measure in normal flow so wrapped titles can resize even while pinned.
			pinnedHeadings.forEach(({ header }) => header.removeAttribute("data-stack-position"));
			const y = window.scrollY;
			const styles = getComputedStyle(container);
			const padding = parseFloat(styles.getPropertyValue("--home-section-title-padding")) || 0;
			const showActions = styles.getPropertyValue("--home-section-stack-actions").trim() !== "0";
			container.toggleAttribute("data-stack-actions", showActions);
			const bounds = container.getBoundingClientRect();
			const viewportWidth = document.documentElement.clientWidth;
			const geometry = headings.map((heading) => ({
				heading,
				titleRect: heading.slot.getBoundingClientRect(),
				actionRect: heading.action.getBoundingClientRect(),
				headerRect: heading.header.getBoundingClientRect(),
			}));
			let inset = 0;

			container.style.setProperty("--home-section-stack-width", `${bounds.width}px`);
			for (const { heading, titleRect, actionRect, headerRect } of geometry) {
				const { header, anchor } = heading;
				const top = inset + padding;
				const rowHeight = showActions ? Math.max(titleRect.height, actionRect.height) : titleRect.height;
				heading.pinAt = y + titleRect.top - top;
				heading.titleOffset = titleRect.top - headerRect.top;
				header.style.setProperty("--home-section-title-height", `${titleRect.height}px`);
				header.style.setProperty("--home-section-title-width", `${titleRect.width}px`);
				header.style.setProperty("--home-section-title-left", `${titleRect.left}px`);
				header.style.setProperty("--home-section-title-bleed", `${titleRect.left - bounds.left}px`);
				header.style.setProperty("--home-section-title-top", `${top}px`);
				header.style.setProperty("--home-section-title-row-height", `${rowHeight}px`);
				header.style.setProperty("--home-section-header-width", `${headerRect.width}px`);
				header.style.setProperty("--home-section-action-right", `${viewportWidth - headerRect.right}px`);
				header.style.setProperty("--home-section-action-height", `${actionRect.height}px`);
				header.style.setProperty("--home-section-action-width", `${actionRect.width}px`);
				anchor.style.setProperty("--home-section-anchor-inset", `${inset}px`);
				inset += rowHeight + 2 * padding;
			}

			// All fixed titles return to document-relative positioning at the Media PR boundary.
			for (const { header, pinAt, titleOffset } of pinnedHeadings) {
				const release = Math.max(0, last.pinAt - pinAt);
				header.style.setProperty("--home-section-title-release", `${release}px`);
				header.style.setProperty("--home-section-action-release", `${release + titleOffset}px`);
			}
			update();
		};

		function scheduleMeasure() {
			cancelAnimationFrame(measurement);
			measurement = requestAnimationFrame(measure);
		}

		measure();
		const hashTarget = headings.find(({ anchor }) => `#${anchor.id}` === location.hash)?.anchor;
		if (!preference.matches && hashTarget && Math.abs(hashTarget.getBoundingClientRect().top) < 1) {
			hashTarget.scrollIntoView();
		}

		const observer = new ResizeObserver(scheduleMeasure);
		observer.observe(container);
		panels.forEach((panel) => observer.observe(panel));
		headings.forEach(({ slot, action }) => {
			observer.observe(slot);
			observer.observe(action);
		});
		window.addEventListener("resize", scheduleMeasure);
		window.addEventListener("scroll", update, { passive: true });
		preference.addEventListener("change", scheduleMeasure);

		return () => {
			cancelAnimationFrame(measurement);
			observer.disconnect();
			window.removeEventListener("resize", scheduleMeasure);
			window.removeEventListener("scroll", update);
			preference.removeEventListener("change", scheduleMeasure);
			container.removeAttribute("data-stack-actions");
			pinnedHeadings.forEach(({ header }) => header.removeAttribute("data-stack-position"));
		};
	}, [sections]);

	return (
		<div ref={stack} className="home-section-stack">
			{sections.map(({ id, surface = "background", content }) => (
				<div
					key={id}
					className="home-section-stack-panel"
					style={{ "--home-section-stack-surface": `var(--${surface})` } as CSSProperties}
				>
					<div id={id} className="home-section-stack-anchor" />
					{content}
				</div>
			))}
		</div>
	);
}
