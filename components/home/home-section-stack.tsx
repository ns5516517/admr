"use client";

import { Fragment, useEffect, useRef, type ReactNode } from "react";
import "./home-section-stack.css";

export default function HomeSectionStack({
	sections,
	followingSection,
}: {
	sections: { id: string; content: ReactNode }[];
	followingSection: ReactNode;
}) {
	const stack = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!stack.current) return;

		const panels = stack.current.querySelectorAll<HTMLElement>(":scope > .home-section-stack-panel");
		const observer = new ResizeObserver((entries) => {
			for (const { target, borderBoxSize, contentRect } of entries) {
				if (target instanceof HTMLElement) {
					const height = borderBoxSize?.[0]?.blockSize ?? contentRect.height;
					target.style.setProperty("--home-section-height", `${height}px`);
				}
			}
		});
		panels.forEach((panel) => observer.observe(panel));
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={stack} className="home-section-stack">
			{sections.map(({ id, content }) => (
				<Fragment key={id}>
					{/* Keep fragment navigation anchored to the section's normal flow position. */}
					<div id={id} />
					<div className="home-section-stack-panel">{content}</div>
				</Fragment>
			))}
			{followingSection}
		</div>
	);
}
