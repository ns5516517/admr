"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const links = [
	{ label: "Home", href: "/" },
	{ label: "Media Buying", href: "/#media-buying" },
	{ label: "Digital Marketing", href: "/#digital-marketing" },
	{ label: "Releasing Agency", href: "/#releasing-agency" },
	{ label: "Media PR", href: "/#media-pr" },
	{ label: "Locations", href: "/#locations-heading" },
	{ label: "Start a Campaign", href: "/#campaign-heading" },
];

function SocialIcons() {
	return (
		<div
			className="flex items-center gap-1 sm:gap-2"
			aria-label="Social profiles coming soon"
		>
			{[
				{
					name: "Facebook",
					content: (
						<>
							<circle cx="12" cy="12" r="9" />
							<path d="M14.5 7H13a2 2 0 0 0-2 2v10m-3-7h6" />
						</>
					),
				},
				{
					name: "LinkedIn",
					content: (
						<>
							<rect x="3" y="3" width="18" height="18" rx="4" />
							<path d="M7.5 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
						</>
					),
				},
				{
					name: "Instagram",
					content: (
						<>
							<rect x="3" y="3" width="18" height="18" rx="5" />
							<circle cx="12" cy="12" r="4" />
							<path d="M17.5 6.5h.01" />
						</>
					),
				},
				{
					name: "X",
					content: (
						<>
							<rect x="3" y="3" width="18" height="18" rx="4" />
							<path d="m7 7 10 10m0-10L7 17M7 7h3l7 10h-3Z" />
						</>
					),
				},
			].map(({ name, content }) => (
				<span
					key={name}
					role="link"
					aria-disabled="true"
					aria-label={`${name} profile coming soon`}
					title={`${name} profile coming soon`}
					className="grid size-8 place-items-center text-foreground/90"
				>
					<svg
						width="17"
						height="17"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						{content}
					</svg>
				</span>
			))}
		</div>
	);
}

export default function SiteHeader() {
	const [open, setOpen] = useState(false);
	return (
		<header className="dark relative z-10 flex h-16 shrink-0 items-center justify-between border-t-2 border-secondary-foreground bg-background bg-linear-to-r from-primary/25 via-background to-background px-2 text-foreground sm:px-3">
			<div className="flex items-center gap-2 sm:gap-3">
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger
						render={
							<Button
								variant="ghost"
								size="icon"
								className="size-9 rounded-md hover:bg-foreground/10"
								aria-label="Open navigation menu"
							/>
						}
					>
						<span aria-hidden="true" className="flex w-4 flex-col gap-1.5">
							<span className="h-px w-3.5 bg-current" />
							<span className="h-px w-4 bg-current" />
							<span className="h-px w-2 bg-current" />
						</span>
					</SheetTrigger>
					<SheetContent
						side="left"
						className="dark border-border bg-background text-foreground"
						data-lenis-prevent=""
					>
						<SheetHeader>
							<SheetTitle>
								<Logo aria-label="ADMR Technologies" />
							</SheetTitle>
						</SheetHeader>
						<nav
							aria-label="Main navigation"
							className="flex flex-col gap-1 px-4 pb-6"
						>
							{links.map(({ label, href }) => (
								<Link
									key={href}
									href={href}
									onClick={() => setOpen(false)}
									className="rounded-lg px-3 py-3 text-base font-semibold hover:bg-muted focus-visible:outline-2 focus-visible:outline-primary"
								>
									{label}
								</Link>
							))}
						</nav>
					</SheetContent>
				</Sheet>
				<Link
					href="/"
					aria-label="ADMR Technologies home"
					className="rounded-sm focus-visible:outline-2 focus-visible:outline-primary"
				>
					<Logo className="h-auto w-21 sm:w-25" aria-hidden="true" />
				</Link>
			</div>
			<SocialIcons />
		</header>
	);
}
