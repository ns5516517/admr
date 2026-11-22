import React from "react";
import SectionHeader from "../shared/section-title";
import SectionImg from "../shared/section-img";
import mark from "@/public/mark.webp";
import { Globe2, LucideIcon, TrendingUp } from "lucide-react";
import { cn } from "cn";

type MarkCardProps = {
	icon?: LucideIcon;
	title: string;
	description?: string;
	items: string[];
	iconClass?: string;
};

function MarkCard({
	items,
	title,
	description,
	icon: Icon,
	iconClass,
}: MarkCardProps) {
	return (
		<>
			<div className="p-4 rounded-xl border border-accent bg-surface/50 flex flex-col gap-2">
				<div className="flex items-center gap-3">
					<span className="shrink-0 size-5">
						{Icon && <Icon className={cn("size-full", iconClass)} />}
					</span>
					<div className="text-base font-bold text-foreground">{title}</div>
				</div>
				<p className="font-normal text-xs text-muted-foreground">
					{description}
				</p>
				<div className="flex items-center gap-2 *:whitespace-nowrap flex-wrap">
					{items.map((item, i) => (
						<div
							className="h-6.5 grid place-items-center rounded-lg border border-accent font-semibold text-foreground/70 text-xs bg-background px-2.5"
							key={i}
						>
							{item}
						</div>
					))}
				</div>
			</div>
		</>
	);
}

const Marketing = () => {
	return (
		<>
			<section id="digital-marketing" className="bg-background 2xl:pt-20 xl:pt-16 lg:pt-12 md:pt-8 pt-6">
				<div className="container mx-auto px-2.5 flex flex-col 2xl:gap-20 xl:gap-16 lg:gap-12 gap-8">
					<div className="flex flex-col gap-7">
						<SectionHeader
							title={{ label: "DIGITAL MARKETING" }}
							description={{
								label:
									"Performance-driven digital marketing solutions designed to increase brand awareness, generate verified sales opportunities and rapidly scale acquisition velocity.",
							}}
							button={{ className: "text-secondary" }}
						/>

						<div className="grid sm:grid-cols-2 gap-4">
							<MarkCard
								items={[
									"Google Search & PMax",
									"Meta (Insta & FB)",
									"YouTube In-Stream",
									"LinkedIn B2B",
									"Dynamic Retargeting",
								]}
								title="Pillar A: Performance Marketing"
								description="Optimized down-funnel acquisition targeting immediate return-on-ad-spend (ROAS)."
								icon={TrendingUp}
                                iconClass="text-violet-600"
							/>
							<MarkCard
								items={[
									"Google Display (GDN)",
									"Taboola & Outbrain",
									"Programmatic OTT",
									"Geofenced Audience Stacks",
									"Influencer Collaborations",
								]}
								title="Pillar B: Branding & Awareness"
								description="Omnipresent digital authority and top-of-mind market saturation."
								icon={Globe2}
                                iconClass={'text-secondary'}
							/>
						</div>

						<SectionImg src={mark} />
					</div>
				</div>
			</section>
		</>
	);
};

export default Marketing;
