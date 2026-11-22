import {
	Building2,
	Goal,
	Rocket,
	Rss,
	SquareText,
	User2Icon,
} from "lucide-react";
import media from "@/public/media.webp";
import SectionHeader from "../shared/section-title";
import SectionImg from "../shared/section-img";


const Media = () => {
	return (
		<>
			<section className="bg-primary/24 2xl:pt-20 xl:pt-16 lg:pt-12 md:pt-8 pt-6">
				<div className="container mx-auto px-2.5 flex flex-col 2xl:gap-20 xl:gap-16 lg:gap-12 gap-8">
					<div className="flex flex-col gap-7">
						<SectionHeader
							title={{
								label: "MEDIA PR (PUBLIC RELATIONS)",
							}}
							description={{
								label:
									"Strategic media relations, executive narrative cultivation, and brand authority services designed to command public trust and top-tier editorial prestige.",
								p: { className: "text-accent-foreground" },
							}}
							button={{ className: "text-secondary" }}
						/>

						<div className="flex flex-col gap-4 max-sm:hidden">
							<span className="text-foreground font-bold text-sm">
								PUBLIC RELATIONS SPECTRUM:
							</span>
							<div className="grid sm:grid-cols-2 gap-3.5">
								<div className="flex items-start gap-3 p-4 bg-card/30 rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<Rss className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-foreground font-bold text-sm">
											Press Release Wire
										</div>
										<p className="text-xs font-normal text-accent-foreground">
											Direct syndication across global & tier-1 editorial desks.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-card/30 rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<SquareText className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-foreground font-bold text-sm">
											Leading Publications
										</div>
										<p className="text-xs font-normal text-accent-foreground">
											High-credibility features in business and finance press.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-card/30 rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<Building2 className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-foreground font-bold text-sm">
											Corporate PR
										</div>
										<p className="text-xs font-normal text-accent-foreground">
											Investor communications & enterprise positioning.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-card/30 rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<Rocket className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-foreground font-bold text-sm">
											Launch Strategies
										</div>
										<p className="text-xs font-normal text-accent-foreground">
											High-voltage reveals for novel ventures and IP.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-card/30 rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<User2Icon className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-foreground font-bold text-sm">
											Leadership Profiling
										</div>
										<p className="text-xs font-normal text-accent-foreground">
											Positioning Founders & C-Suite as visionaries.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-card/30 rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<Goal className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-foreground font-bold text-sm">
											Crisis Communication
										</div>
										<p className="text-xs font-normal text-accent-foreground">
											Rapid narrative containment and reputation shielding.
										</p>
									</div>
								</div>
							</div>
						</div>

						<SectionImg src={media} />
					</div>
				</div>
			</section>
		</>
	);
};

export default Media;
