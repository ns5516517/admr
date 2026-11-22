import { ArrowRight, Calendar, DotIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Banner = () => {
	return (
		<section className="bg-foreground text-background 2xl:py-20 xl:py-16 lg:py-12 md:py-8 py-5 relative overflow-clip">
			<div className="absolute size-101.25 -top-30 -left-30 blur-[240px] bg-primary" />
			<div className="absolute size-101.25 -translate-1/2 top-1/2 -left-20 blur-[240px] bg-secondary" />
			<div className="container mx-auto px-3 relative">
				<div className="flex flex-col gap-12">
					<div className="flex flex-col gap-5">
						<Badge
							className="uppercase whitespace-normal bg-muted/13 text-background hover:bg-muted/15 hover:text-background [&>svg]:size-5! h-8.5 px-4 font-extrabold tracking-wider"
							variant={"ghost"}
						>
							<DotIcon className="stroke-6 text-primary" />
							ONE COMPANY. FOUR VERTICALS. COMPLETE MARKETING SOLUTIONS.
						</Badge>
						<div className="flex flex-col gap-4">
							<h1 className="font-extrabold 2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl">
								Architecting{" "}
								<span className="font-medium italic bg-primary/22 [text-box:trim-both_cap_text] text-[oklch(from_var(--primary)_l_calc(c*0.41)_h)]">
									High-Impact
								</span>
							</h1>
							<h2 className="font-extrabold 2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl text-primary">
								Media, Advertising & Performance
							</h2>
							<p className="2xl:text-2xl lg:text-xl md:text-lg text-sm text-background/70 max-w-210.75">
								ADMR Technologies is an integrated media and marketing solutions
								powerhouse delivering end-to-end impact across global and
								regional media landscapes. From strategic buys and physical
								releases to high-velocity digital conversions and prestige PR.
							</p>
						</div>
						<div className="flex flex-wrap gap-2">
							<Button size={"2xl"} className={"font-extrabold"}>
								EXPLORE OUR VERTICALS
								<ArrowRight />
							</Button>
							<Button
								size={"2xl"}
								className={"font-extrabold"}
								variant={"off-white"}
							>
								<Calendar />
								SCHEDULE CONSULTATION
							</Button>
						</div>
					</div>
					<div className="border-t grid md:grid-cols-4 grid-cols-2 gap-4 border-t-primary/40 pt-10">
						<div>
							<span className="text-chart-1 xl:text-5xl lg:text-4xl md:text-3xl text-2xl flex items-center font-extrabold">
								500 <span className="text-primary text-2xl">+</span>
							</span>
							<p className="font-bold text-xs text-[oklch(from_var(--secondary)_0.5544_0.0407_257.42)]">CAMPAIGNS DELIVERED</p>
						</div>
						<div>
							<span className="text-chart-1 xl:text-5xl lg:text-4xl md:text-3xl text-2xl flex items-center font-extrabold">
								360 <span className="text-primary text-2xl">°</span>
							</span>
							<p className="font-bold text-xs text-[oklch(from_var(--secondary)_0.5544_0.0407_257.42)]">OMNICHANNEL DELIVERY</p>
						</div>
						<div>
							<span className="text-chart-1 xl:text-5xl lg:text-4xl md:text-3xl text-2xl flex items-center font-extrabold">
								99.4 <span className="text-primary text-2xl">%</span>
							</span>
							<p className="font-bold text-xs text-[oklch(from_var(--secondary)_0.5544_0.0407_257.42)]">RELEASE PRECISION RATE</p>
						</div>
						<div>
							<span className="text-chart-1 xl:text-5xl lg:text-4xl md:text-3xl text-2xl flex items-center font-extrabold">
								18<span className="text-primary text-2xl">x</span>
							</span>
							<p className="font-bold text-xs text-[oklch(from_var(--secondary)_0.5544_0.0407_257.42)]">AVERAGE MEDIA AMPLIFICATION</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
