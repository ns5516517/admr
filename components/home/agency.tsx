import { Badge } from "../ui/badge";
import {
	BookOpen,
	Building2,
	Cinema,
	Disc2,
	Dot,
	FileCheck,
	MapPin,
	Printer,
	RadioReceiverIcon,
	SlidersHorizontal,
	SquareText,
	Tv2,
	TvMinimalPlayIcon,
} from "lucide-react";
import agency from "@/public/agency.webp";
import SectionHeader from "../shared/section-title";
import SectionImg from "../shared/section-img";

const Agency = () => {
	return (
		<>
			<section className="bg-secondary 2xl:pt-20 xl:pt-16 lg:pt-12 md:pt-8 pt-6">
				<div className="container mx-auto px-2.5 flex flex-col 2xl:gap-20 xl:gap-16 lg:gap-12 gap-8">
					<div className="flex flex-col gap-7">
						<SectionHeader
							title={{
								label: "RELEASING AGENCY",
								div: { className: "text-background" },
							}}
							description={{
								label:
									"End-to-end advertising booking, material coordination, and certified release management across nationwide multi-channel publishing networks with flawless execution fidelity.",
								p: { className: "text-secondary-foreground/80" },
							}}
							button={{className: "text-primary"}}
						/>

						<div className="flex flex-col gap-4 max-sm:hidden">
							<span className="text-background font-bold text-sm">
								RELEASING INFRASTRUCTURE:
							</span>
							<div className="grid sm:grid-cols-2 gap-3.5">
								<div className="flex items-start gap-3 p-4 bg-card/10 rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<SquareText className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-background font-bold text-sm">
											Newspaper Releases
										</div>
										<p className="text-xs font-normal text-secondary-foreground/70">
											Front-page, display, and tender notifications.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-card/10 rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<BookOpen className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-background font-bold text-sm">
											Magazine Ad Releases
										</div>
										<p className="text-xs font-normal text-secondary-foreground/70">
											Glossy luxury, trade & niche monthly formats.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-card/10 rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<TvMinimalPlayIcon className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-background font-bold text-sm">
											Commercial Broadcast
										</div>
										<p className="text-xs font-normal text-secondary-foreground/70">
											TV spot clearance, timing & flight scheduling.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-card/10 rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<MapPin className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-background font-bold text-sm">
											Multi-City Synchrony
										</div>
										<p className="text-xs font-normal text-secondary-foreground/70">
											Simultaneous multi-metro print & outdoor launches.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-card/10 rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<SlidersHorizontal className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-background font-bold text-sm">
											Material Coordination
										</div>
										<p className="text-xs font-normal text-secondary-foreground/70">
											Strict compliance checks with all media houses.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-card/10 rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<FileCheck className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-background font-bold text-sm">
											Proof of Publication
										</div>
										<p className="text-xs font-normal text-secondary-foreground/70">
											Tear sheets, broadcast logs & legal certifications.
										</p>
									</div>
								</div>
							</div>
						</div>

						<SectionImg src={agency} />
					</div>
				</div>
			</section>
		</>
	);
};

export default Agency;
