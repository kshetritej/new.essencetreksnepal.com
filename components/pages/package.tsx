import Image from "next/image";
import PackageTabs from "./PackageTabs";
import PricingCardSidebar from "../card/pricing-card";

export type ItineraryItem = {
  day: number;
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type AdditionalInfo = {
  title: string;
  description: string;
};

export type PackageData = {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  locations: string[];
  keywords: string[];
  inclusions: string[];
  exclusions: string[];
  price: number;
  duration: string;
  guestCapacity: number;
  images: string[];
  itinerary: ItineraryItem[];
  meetingPoint: string;
  dropOffPoint: string;
  whatToBring: string[];
  additionalInfo: AdditionalInfo[];
  difficultyLevel: string;
  faqs: FAQ[];
  averageRating: number;
  reviewCount: number;
  banner?: string;
  highlightsHtml?: string;
  faqsHtml?: string;
  bestSeason?: string;
  accommodation?: string;
  transportation?: string;
  tripGrade?: string;
};

interface PackageProps {
  data: PackageData;
}

export default function Package({ data }: PackageProps) {
  const primaryImage = data.images?.[0];
  const basePrice = data.price;
  const maxPrice = Math.round(basePrice * 1.31);

  return (
    <div className="w-full min-h-screen bg-background">
      <section className="relative w-full min-h-105 md:min-h-130 overflow-hidden">
        <Image
          src={primaryImage}
          alt={data.title}
          fill
          priority
          className="object-cover object-center transition-transform duration-700 hover:scale-105"
          sizes="100vw"
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold  leading-tight text-shadow-2xs">
          {data.title}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
          <div className="min-w-0">
            <PackageTabs />
          </div>

          <div className="lg:sticky lg:top-8 h-fit">
            <PricingCardSidebar
              price={basePrice}
              maxPrice={maxPrice}
              title={data.title}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
