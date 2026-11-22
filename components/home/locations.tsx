import anthurium from "@/public/anthurium-noida.jpg";
import { LocationsReveal, LocationRevealCard } from "./locations-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	ArrowRight,
	Building2,
	Landmark,
	Mail,
	Network,
	Newspaper,
	Phone,
	Presentation,
	ShieldCheck,
	type LucideIcon,
} from "lucide-react";
import Image from "next/image";

const phone = "+91 99982 77782";
const phoneHref = "tel:+919998277782";
const email = "support@admrtechnologies.co";

const capabilities = [
	{ label: "Digital Command Center", icon: Network },
	{ label: "Pan-India Print Bureau", icon: Newspaper },
	{ label: "Executive Boardrooms", icon: Presentation },
];

type RegionalHub = {
	name: string;
	corridor: string;
	description: string;
	centralNode: string;
	stage: string;
	icon: LucideIcon;
};

const hubs: RegionalHub[] = [
	{
		name: "Lucknow Regional Hub",
		corridor: "Northern Media Growth Corridor",
		description:
			"Dedicated regional bureau for state-level PR, vernacular publication syndication, and campaign execution across Uttar Pradesh and Uttarakhand.",
		centralNode: "Integrated to Noida HQ",
		stage: "Site architecture and team finalized",
		icon: Building2,
	},
	{
		name: "Ahmedabad Regional Hub",
		corridor: "Western Commercial Corridor",
		description:
			"Western industrial and corporate advertising desk managing outdoor media scheduling, cinema media circuits, and state campaign rollouts.",
		centralNode: "Western Grid Coordination",
		stage: "Commercial licensing and setup stage",
		icon: Landmark,
	},
];

function LocationIcon({ icon: Icon }: { icon: LucideIcon }) {
	return (
		<span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
			<Icon aria-hidden="true" className="size-4" />
		</span>
	);
}

function RegionalHubCard({
	name,
	corridor,
	description,
	centralNode,
	stage,
	icon,
}: RegionalHub) {
	return (
		<Card
			role="article"
			className="min-w-0 gap-4 rounded-2xl border border-border p-4 shadow-none ring-0 sm:p-6"
		>
			<div className="flex flex-wrap items-center justify-between gap-2">
				<LocationIcon icon={icon} />
				<Badge variant="outline" className="bg-primary/10">
					<span
						aria-hidden="true"
						className="size-1.5 rounded-full bg-primary"
					/>
					Coming soon
				</Badge>
			</div>
			<div className="space-y-1">
				<p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
					{corridor}
				</p>
				<h3 className="text-lg leading-tight font-bold tracking-tight sm:text-xl">
					{name}
				</h3>
			</div>
			<p className="text-sm leading-relaxed text-muted-foreground max-sm:hidden">
				{description}
			</p>
			<dl className="grid gap-2 border-t border-border pt-3 text-sm">
				<div className="flex flex-wrap justify-between gap-x-3">
					<dt className="text-muted-foreground">Direct routing</dt>
					<dd>
						<a
							href={phoneHref}
							className="font-semibold text-secondary hover:underline"
						>
							IVR: {phone}
						</a>
					</dd>
				</div>
				<div className="flex flex-wrap justify-between gap-x-3">
					<dt className="text-muted-foreground">Central node</dt>
					<dd className="font-semibold">{centralNode}</dd>
				</div>
			</dl>
			<p className="mt-auto flex items-start gap-2 pt-2 text-xs font-semibold">
				<ShieldCheck
					aria-hidden="true"
					className="size-4 shrink-0 text-primary"
				/>
				{stage}
			</p>
		</Card>
	);
}

function HeadquartersCard() {
	return (
		<div className="@container/headquarters col-span-full min-w-0 @min-[58rem]/locations:col-span-1 @min-[58rem]/locations:row-span-2">
			<Card
				role="article"
				className="h-full gap-4 rounded-2xl border border-border p-4 shadow-none ring-0 sm:p-6"
			>
				<div className="relative aspect-3/2 overflow-hidden rounded-xl bg-muted">
					<Image
						src={anthurium}
						alt="Anthurium Digital Workspaces building in Noida Sector 73"
						fill
						sizes="(min-width: 1536px) 720px, (min-width: 1024px) 52vw, 100vw"
						placeholder="blur"
						className="object-cover"
					/>
					<div className="absolute inset-x-2 top-2 flex flex-wrap justify-between gap-2 sm:inset-x-3 sm:top-3">
						<Badge
							variant="outline"
							className="h-auto min-h-5 max-w-full whitespace-normal bg-card text-card-foreground"
						>
							<Building2 aria-hidden="true" className="shrink-0 text-primary" />
							Anthurium Business Park · Sector 73
						</Badge>
						<Badge>
							<span
								aria-hidden="true"
								className="size-1.5 rounded-full bg-current"
							/>
							Active HQ
						</Badge>
					</div>
				</div>

				<div className="space-y-2">
					<div className="flex flex-wrap items-center gap-2">
						<Badge variant="outline" className="bg-primary/10 text-secondary">
							Flagship command
						</Badge>
						<span className="text-xs font-semibold text-muted-foreground">
							National Operations Hub
						</span>
					</div>
					<h3 className="text-lg leading-tight font-bold tracking-tight sm:text-xl">
						Corporate Headquarters — Noida (NCR)
					</h3>
					<p className="text-sm leading-relaxed text-muted-foreground">
						Houses our central media planning cluster, editorial PR command
						desk, and automated pan-India release pipelines.
					</p>
				</div>

				<div className="grid gap-2 @min-[32rem]/headquarters:grid-cols-2">
					<div className="flex min-w-0 items-start gap-2.5 rounded-lg border border-border bg-muted/50 p-2.5 @min-[32rem]/headquarters:col-span-2">
						<LocationIcon icon={Building2} />
						<div className="min-w-0">
							<p className="text-xs text-muted-foreground">Office address</p>
							<address className="text-sm font-semibold not-italic">
								Anthurium, 124A, Sector 73, Noida – 201301 (U.P.), India
							</address>
						</div>
					</div>
					<div className="flex min-w-0 items-start gap-2.5 rounded-lg border border-border bg-muted/50 p-2.5">
						<LocationIcon icon={Phone} />
						<div className="min-w-0">
							<p className="text-xs text-muted-foreground">
								Central IVR / Mobile
							</p>
							<p className="text-sm font-semibold">
								<a href={phoneHref} className="hover:underline">
									{phone}
								</a>
							</p>
						</div>
					</div>
					<div className="flex min-w-0 items-start gap-2.5 rounded-lg border border-border bg-muted/50 p-2.5">
						<LocationIcon icon={Mail} />
						<div className="min-w-0">
							<p className="text-xs text-muted-foreground">
								Official correspondence
							</p>
							<p className="text-sm font-semibold wrap-anywhere text-secondary">
								<a href={`mailto:${email}`} className="hover:underline">
									{email}
								</a>
							</p>
						</div>
					</div>
				</div>

				<div className="space-y-2">
					<p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
						On-site capabilities
					</p>
					<ul className="flex flex-wrap gap-2">
						{capabilities.map(({ label, icon: Icon }) => (
							<li key={label}>
								<Badge
									variant="outline"
									className="h-auto min-h-5 rounded-md bg-muted/50 whitespace-normal"
								>
									<Icon aria-hidden="true" className="shrink-0" />
									{label}
								</Badge>
							</li>
						))}
					</ul>
				</div>

				<footer className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
					<p className="flex items-start gap-2 text-xs text-muted-foreground">
						<ShieldCheck
							aria-hidden="true"
							className="size-4 shrink-0 text-primary"
						/>
						ISO 27001 certified command infrastructure
					</p>
					<Button
						nativeButton={false}
						render={
							<a href={`mailto:${email}?subject=Request%20a%20consultation`} />
						}
						className="min-h-10 w-full rounded-lg font-bold @min-[28rem]/headquarters:w-auto"
					>
						Request Consultation
						<ArrowRight aria-hidden="true" data-icon="inline-end" />
					</Button>
				</footer>
			</Card>
		</div>
	);
}

export default function Locations() {
	return (
		<LocationsReveal>
			<div className="@container/locations container mx-auto px-2.5 py-6 md:py-8 lg:py-12 xl:py-16 2xl:py-20">
				<div className="grid gap-4 @min-[40rem]/locations:grid-cols-2 @min-[58rem]/locations:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] @min-[58rem]/locations:grid-rows-2 lg:gap-6">
					<LocationRevealCard index={0} className="col-span-full @min-[58rem]/locations:col-span-1 @min-[58rem]/locations:row-span-2">
						<HeadquartersCard />
					</LocationRevealCard>
					{hubs.map((hub, index) => (
						<LocationRevealCard key={hub.name} index={index + 1}>
							<RegionalHubCard {...hub} />
						</LocationRevealCard>
					))}
				</div>
			</div>
		</LocationsReveal>
	);
}
