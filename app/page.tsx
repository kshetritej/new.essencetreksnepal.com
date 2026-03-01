import FeaturedSections from "@/components/sections/featuered-sections";
import HomeHero from "@/components/sections/home-hero";
import WhySection from "@/components/sections/why-section";

export default function Homepage() {
  return (
    <>
      <HomeHero />
      <WhySection />
      <FeaturedSections />
    </>
  );
}
