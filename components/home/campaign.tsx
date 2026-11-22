import globe from "@/public/globe.png";
import { Building2, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import CampaignBrief from "./campaign-brief";

export default function Campaign() {
	return (
		<section aria-labelledby="campaign-heading" className="bg-surface text-foreground">
			<div className="relative aspect-2/1 min-h-36 max-h-144 overflow-hidden mx-auto">
				<Image
					src={globe}
					alt="Globe marking Ahmedabad, Uttar Pradesh, and Lucknow"
					fill
					sizes="100vw"
					className="object-cover object-top"
				/>
			</div>
			<div className="container mx-auto grid items-start gap-8 px-2.5 py-6 md:py-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 lg:py-12 xl:gap-16 xl:py-16 2xl:gap-20 2xl:py-20">
				<div className="flex flex-col gap-5">
					<header className="space-y-3">
						<p className="text-xs font-extrabold tracking-widest text-secondary uppercase">
							Strategic Engagement
						</p>
						<h2 id="campaign-heading" className="text-2xl leading-tight font-extrabold tracking-tight md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
							Initiate <span className="text-primary italic">Campaign</span> Deployment.
						</h2>
						<p className="max-w-prose text-sm leading-relaxed text-muted-foreground md:text-base">
							Whether deploying national television buys, city-wide outdoor
							takeovers, performance campaigns, or an executive PR announcement,
							our media directors can help plan your campaign.
						</p>
					</header>

					<address className="border-t border-border pt-5 not-italic">
						<dl className="grid gap-4 text-sm">
							<div className="space-y-1">
								<dt className="flex items-center gap-3 text-xs font-bold tracking-wide text-muted-foreground uppercase">
									<Building2 aria-hidden="true" className="size-4 shrink-0 text-primary" />
									Corporate Headquarters
								</dt>
								<dd className="pl-7 font-semibold">Anthurium, 124A, Sector 73, Noida</dd>
							</div>
							<div className="space-y-1">
								<dt className="flex items-center gap-3 text-xs font-bold tracking-wide text-muted-foreground uppercase">
									<Mail aria-hidden="true" className="size-4 shrink-0 text-primary" />
									Direct Media Desk
								</dt>
								<dd className="pl-7 font-semibold wrap-anywhere">
									<a href="mailto:support@admrtechnologies.co" className="hover:underline">support@admrtechnologies.co</a>
								</dd>
							</div>
							<div className="space-y-1">
								<dt className="flex items-center gap-3 text-xs font-bold tracking-wide text-muted-foreground uppercase">
									<PhoneCall aria-hidden="true" className="size-4 shrink-0 text-primary" />
									Central IVR / Mobile
								</dt>
								<dd className="pl-7 font-semibold">
									<a href="tel:+919998277782" className="hover:underline">+91 99982 77782</a>
								</dd>
							</div>
						</dl>
					</address>
				</div>
				<CampaignBrief />
			</div>
		</section>
	);
}
