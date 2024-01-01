import AboutUs from "@/components/home/AboutUs";
import HomeHero from "@/components/home/HomeHero";
import LoyerSection from "@/components/home/LoyerSection";
import OurServices from "@/components/home/OurServices";
import TopRatedLoyers from "@/components/home/TopRatedLoyers";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutUs />
      <OurServices />
      <TopRatedLoyers />
      <LoyerSection />
    </>
  );
}
