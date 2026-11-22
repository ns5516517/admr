import Link from "next/link";
import Logo from "./logo";

const footerLinkGroups = [
	[
		{ label: "Media Buying", href: "/#media-buying" },
		{ label: "Releasing Agency", href: "/#releasing-agency" },
		{ label: "Digital Marketing", href: "/#digital-marketing" },
		{ label: "Media PR", href: "/#media-pr" },
		{ label: "Case Studies", href: "/case-studies" },
	],
	[
		{ label: "Privacy Architecture", href: "/privacy-architecture" },
		{ label: "Terms of Engagement", href: "/terms-of-engagement" },
	],
];

const linkClassName =
	"inline-block rounded-sm py-1 text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function SiteFooter() {
	return (
		<footer className="dark bg-surface pt-6 pb-4 text-foreground md:pt-8 md:pb-5 lg:pt-12 xl:pt-16 2xl:pt-20">
			<div className="container mx-auto px-2.5">
				<div className="grid gap-6 pb-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:items-center md:gap-10 md:pb-8 lg:gap-12 lg:pb-10">
					<div className="space-y-2">
						<Link
							href="/"
							aria-label="ADMR Technologies home"
							className="inline-flex w-fit rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
						>
							<Logo aria-hidden="true" focusable="false" />
						</Link>
						<p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
							Integrated media, advertising, and digital marketing solutions.
							Providing end-to-end strategic planning, premium placements,
							verified releasing, and brand elevation.
						</p>
					</div>
					<nav aria-label="Footer navigation" className="space-y-1 text-sm font-bold tracking-wide uppercase">
						{footerLinkGroups.map((links) => (
							<ul key={links[0].href} className="flex flex-wrap items-center gap-x-6 gap-y-1">
								{links.map(({ label, href }) => (
									<li key={href}>
										<Link href={href} className={linkClassName}>{label}</Link>
									</li>
								))}
							</ul>
						))}
					</nav>
				</div>
				<div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-4 text-xs text-muted-foreground">
					<p className="uppercase">
						© 2026 ADMR Technologies. Architectural Media &amp; Intelligence.
						All rights reserved.
					</p>
					<ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
						<li className="inline-flex items-center gap-2">
							<span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-success" />
							All Media Networks Operational
						</li>
						<li>ISO 9001:2015 Certified Media Partner</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
