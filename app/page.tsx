import type { Metadata } from "next";
import Agency from "@/components/home/agency";
import Banner from "@/components/home/banner";
import Campaign from "@/components/home/campaign";
import Choose from "@/components/home/choose";
import Discipline from "@/components/home/discipline";
import HomeIntro from "@/components/home/home-intro";
import HomeSectionStack from "@/components/home/home-section-stack";
import Locations from "@/components/home/locations";
import Marketing from "@/components/home/marketing";
import Media from "@/components/home/media";
import { siteOpenGraph, siteUrl } from "@/lib/site-metadata";

export const metadata: Metadata = siteUrl
	? {
			alternates: { canonical: siteUrl },
			openGraph: { ...siteOpenGraph, url: siteUrl },
		}
	: {};

export default function Home() {
	return (
		<>
			<HomeIntro />
			<Banner />
			<div className="choose-curtain">
			<HomeSectionStack
				sections={[
					{
						id: "media-buying",
						surface: "surface",
						content: <Discipline />,
					},
					{
						id: "digital-marketing",
						content: <Marketing />,
					},
					{
						id: "releasing-agency",
						surface: "secondary",
						content: <Agency />,
					},
					{ id: "media-pr", content: <Media /> },
				]}
			/>
			<Choose />
			</div>
			<Locations />
			<Campaign />
		</>
	);
}
