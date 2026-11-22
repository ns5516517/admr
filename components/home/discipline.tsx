import { Badge } from "../ui/badge";
import {
	Building2,
	Cinema,
	Disc2,
	Dot,
	Printer,
	RadioReceiverIcon,
	Tv2,
} from "lucide-react";
import dis from "@/public/dis.webp";
import SectionHeader from "../shared/section-title";
import SectionImg from "../shared/section-img";

const Discipline = () => {
	return (
		<>
			<section className="bg-surface 2xl:pt-20 xl:pt-16 lg:pt-12 md:pt-8 pt-6">
				<div className="container mx-auto px-2.5 flex flex-col 2xl:gap-20 xl:gap-16 lg:gap-12 gap-8">
					<div className="flex flex-col justify-center items-center md:gap-4 gap-2">
						<Badge
							className="font-bold shadow h-6.5 px-3 [&_svg]:text-primary"
							variant={"accent"}
						>
							<Dot className="stroke-10" />
							MULTI-AXIS 3D GYROSCOPE ACTIVE
						</Badge>
						<h3 className="font-extrabold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-secondary">
							Four Disciplines.{" "}
							<span className="italic text-primary">Unified Mastery.</span>
						</h3>
						<p className="xl:text-2xl lg:text-xl md:text-lg font-normal text-accent-foreground max-w-182.5 text-center">
							Bridging traditional heavyweight release channels with algorithmic
							digital targeting and strategic authority engineering.
						</p>
					</div>

					<div className="flex flex-col gap-7">
						<SectionHeader
							title={{ label: " MEDIA BUYING" }}
							description={{
								label:
									"Strategic media planning and buying to ensure maximum brand visibility, audience reach, and cost-effective advertising across dominant domestic and multinational channels.",
							}}
						/>

						<div className="flex flex-col gap-4 max-sm:hidden">
							<span className="text-secondary font-bold text-sm">
								CAPABILITIES MATRIX:
							</span>
							<div className="grid sm:grid-cols-2 gap-3.5">
								<div className="flex items-start gap-3 p-4 bg-background rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<Tv2 className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-foreground font-bold text-sm">
											TV Media Buying
										</div>
										<p className="text-xs font-normal text-accent-foreground">
											National, regional & local prime-time channels.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-background rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<Printer className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-foreground font-bold text-sm">
											Print Media Buying
										</div>
										<p className="text-xs font-normal text-accent-foreground">
											Leading daily publications & trade journals.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-background rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<Cinema className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-foreground font-bold text-sm">
											Cinema Advertising
										</div>
										<p className="text-xs font-normal text-accent-foreground">
											On-screen theatre multiplex & foyer takeover.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-background rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<RadioReceiverIcon className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-foreground font-bold text-sm">
											Radio Media Buying
										</div>
										<p className="text-xs font-normal text-accent-foreground">
											FM broadcast waves & regional sonic spots.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-background rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<Building2 className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-foreground font-bold text-sm">
											Outdoor Media (OOH)
										</div>
										<p className="text-xs font-normal text-accent-foreground">
											Hoardings, unipoles, airports & rapid transit.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-4 bg-background rounded-xl shadow-2xl shadow-foreground/2">
									<span className="size-5 grid place-items-center">
										<Disc2 className="stroke-primary" />
									</span>
									<div className="flex flex-col gap-0.5">
										<div className="text-foreground font-bold text-sm">
											Digital Media Buying
										</div>
										<p className="text-xs font-normal text-accent-foreground">
											Google, Meta, YouTube & high-intent ad auctions.
										</p>
									</div>
								</div>
							</div>
						</div>

						<SectionImg src={dis} />
					</div>
				</div>
			</section>
		</>
	);
};

export default Discipline;
