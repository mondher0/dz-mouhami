import AboutUs from "../components/home/AboutUs";
import ContactUs from "../components/home/ContactUs";
import HomeHero from "../components/home/HomeHero";
import LoyerSection from "../components/home/LoyerSection";
import OurServices from "../components/home/OurServices";
import TopRatedLoyers from "../components/home/TopRatedLoyers";
import { baseUrl } from "../lib/utils";

export default async function Home() {
  const getTopRatedLoyers = async () => {
    try {
      const response = await fetch(`${baseUrl}lawyers/highest_rated?limit=4`, {
        cache: "no-cache",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const topRatedLoyers = await getTopRatedLoyers();
  return (
    <>
      <HomeHero />
      <AboutUs />
      <OurServices />
      <TopRatedLoyers topRatedLoyers={topRatedLoyers} />
      <LoyerSection />
      <ContactUs />
    </>
  );
}
