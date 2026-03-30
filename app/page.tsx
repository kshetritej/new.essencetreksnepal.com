import { FeaturedTrip } from "@/components/featured-trip";
import CategorySection from "@/components/sections/category-section";
import FeaturedSections from "@/components/sections/featuered-sections";
import HomeHero from "@/components/sections/home-hero";
import OldHeroSection from "@/components/sections/old-hero";
import WhySection from "@/components/sections/why-section";
import Testimonials from "@/components/testimonials";

export default async function Homepage() {
  let data;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/featured?includeActivity=true`,
    );

    data = await res.json();
  } catch (error) {
    console.log("Error: ", error);
    return;
  }

  const featured = data?.data;
  const featuredWithoutTOM = featured.featuredTags.filter(
    (tag: any) => tag.slug !== "trip-of-the-month",
  );
  const firstFeatured = featuredWithoutTOM.slice(0, 1);
  const secondFeatured = featuredWithoutTOM.slice(1, 3);

  return (
    <>
      {/*<HomeHero />*/}
      <OldHeroSection />
      <CategorySection />
      <FeaturedSections featuredTags={firstFeatured} />
      <WhySection />
      <FeaturedTrip />
      <Testimonials />
      <FeaturedSections featuredTags={secondFeatured} />
    </>
  );
}
