import grid from "@/public/grid.webp";
import { cn } from "@/lib/utils";
import {
	ArrowRightLeft,
	BadgeDollarSign,
	BriefcaseBusiness,
	ChartNoAxesCombined,
	Fingerprint,
	ListChecks,
	Network,
	type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { ChooseReveal, ChooseRevealCard } from "./choose-reveal";

type ChooseCardProps = {
	icon: LucideIcon;
	label: string;
	title: string;
	description: string;
	variant?: "featured" | "wide";
	tags?: string[];
	status?: string;
};

function ChooseCard({
	index,
	icon: Icon,
	label,
	title,
	description,
	variant,
	tags,
	status,
}: ChooseCardProps & { index: number }) {
	return (
		<ChooseRevealCard
			index={index}
			className={cn(
				"choose-card @container/card grid min-w-0",
				variant === "featured" && "@min-[30rem]/choose:col-span-2",
				variant === "wide" && "col-span-full",
			)}
		>
			<article
				className={cn(
					"flex h-full min-w-0 flex-col items-start gap-4 rounded-2xl border border-border border-t-ring bg-card p-4 text-card-foreground @min-[18rem]/card:p-6 @min-[28rem]/card:p-8",
					variant === "featured" &&
						"bg-radial-[at_bottom_right] from-primary/20 via-card to-card",
					variant === "wide" &&
						"@min-[38rem]/card:flex-row @min-[38rem]/card:items-center",
				)}
			>
				<span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary @min-[18rem]/card:size-12">
					<Icon aria-hidden="true" className="size-5" />
				</span>
				<div className="choose-card-content min-w-0 flex-1">
					<p className="choose-card-detail text-xs font-bold tracking-wider uppercase text-primary">
						{label}
					</p>
					<h4 className="mt-2 text-lg leading-tight font-bold wrap-break-word @min-[18rem]/card:text-xl">
						{title}
					</h4>
					<p className="choose-card-detail mt-2 text-sm leading-relaxed text-muted-foreground">
						{description}
					</p>
					{tags && (
						<ul aria-label="Industries" className="choose-card-chips mt-3 flex flex-wrap gap-2">
							{tags.map((tag) => (
								<li
									key={tag}
									className="rounded-md bg-primary/15 px-2.5 py-1 text-xs"
								>
									{tag}
								</li>
							))}
						</ul>
					)}
				</div>
				{status && (
					<span className="choose-card-status inline-flex shrink-0 items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs font-semibold text-success">
						<span
							aria-hidden="true"
							className="size-1.5 rounded-full bg-current"
						/>
						{status}
					</span>
				)}
			</article>
		</ChooseRevealCard>
	);
}

const cards: ChooseCardProps[] = [
	{
		icon: Network,
		label: "01 / Architecture",
		title: "One-Stop Marketing Solution",
		description:
			"Consolidate your brand ecosystem under one roof. Strategic media buying, verified physical releases, algorithmic digital acquisition, and corporate PR handled without fragmented vendors.",
		variant: "featured",
	},
	{
		icon: ArrowRightLeft,
		label: "02 / Integration",
		title: "360° Media Approach",
		description:
			"Synchronizing traditional legacy power (TV, Print, OOH) with agile high-growth digital algorithms for total presence.",
	},
	{
		icon: Fingerprint,
		label: "03 / Precision",
		title: "Customized Strategies",
		description:
			"Every dollar deployed reflects bespoke operational models configured around explicit enterprise bottom-line goals.",
	},
	{
		icon: BadgeDollarSign,
		label: "04 / Value",
		title: "Cost-Effective Solutions",
		description:
			"Deep network inventory volume grants us unyielding leverage to guarantee industry-leading ad placement rates.",
	},
	{
		icon: ListChecks,
		label: "05 / Reliability",
		title: "End-to-End Execution",
		description:
			"From preliminary flight planning and ad clearance to on-air verification and forensic tear-sheet post-audits.",
	},
	{
		icon: BriefcaseBusiness,
		label: "06 / Domain Mastery",
		title: "Multi-Industry Expertise",
		description:
			"Proven track records across high-stakes industries demanding unique market penetration dynamics.",
		variant: "featured",
		tags: [
			"Real Estate",
			"Retail & FMCG",
			"Corporate Enterprises",
			"Healthcare & Pharma",
			"Higher Education",
			"Hospitality & Luxury",
		],
	},
	{
		icon: ChartNoAxesCombined,
		label: "07 / Accountability",
		title: "Performance & Total Transparency",
		description:
			"Granular analytical auditing, verified media delivery logs, and concrete ROI metrics delivered every single cycle.",
		variant: "wide",
		status: "Live telemetry ready",
	},
];

const Choose = () => {
	return (
		<ChooseReveal
			texture={<Image src={grid} alt="" fill sizes="100vw" className="opacity-54 grayscale" />}
			heading={
				<div className="flex flex-col gap-4 max-w-3xl mx-auto">
					<span className="font-bold text-sm text-primary text-center">
						ENTERPRISE EDGE & PROVEN AUTHORITY
					</span>
					<h3 className="font-extrabold text-center 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl">
						WHY CHOOSE <span className="italic text-primary">ADMR</span>{" "}
						TECHNOLOGIES?
					</h3>
					<p className="md:text-lg text-base font-normal text-muted-foreground text-center">
						Our core architectural pillars synthesize planning, aggressive
						negotiation, and rigorous cross-platform tracking into one
						seamless partner engagement.
					</p>
				</div>
			}
		>
			<div className="choose-card-grid grid grid-cols-1 gap-4 @min-[30rem]/choose:grid-cols-2 @min-[42rem]/choose:grid-cols-4">
				{cards.map((card, index) => (
					<ChooseCard key={card.label} index={index} {...card} />
				))}
			</div>
		</ChooseReveal>
	);
};

export default Choose;
