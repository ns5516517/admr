import Agency from "@/components/home/agency";
import Banner from "@/components/home/banner";
import Campaign from "@/components/home/campaign";
import Choose from "@/components/home/choose";
import Discipline from "@/components/home/discipline";
import Locations from "@/components/home/locations";
import Marketing from "@/components/home/marketing";
import Media from "@/components/home/media";

export default function Home() {
  return (
    <>
    <Banner />
    <Discipline />
    <Marketing />
    <Agency />
    <Media />
    <Choose />
    <Locations />
    <Campaign />
    </>
  );
}
