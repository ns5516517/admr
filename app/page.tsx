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

export default function Home() {
  return (
    <>
      <HomeIntro />
      <Banner />
      <HomeSectionStack
        sections={[
          { id: "media-buying", content: <Discipline /> },
          { id: "digital-marketing", content: <Marketing /> },
          { id: "releasing-agency", content: <Agency /> },
          { id: "media-pr", content: <Media /> },
        ]}
        followingSection={<Choose />}
      />
      <Locations />
      <Campaign />
    </>
  );
}
