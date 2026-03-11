import React from "react";

import Breadcrumbs from "./Breadcrumbs";
import TrekHeader from "./TrekHeader";
import TrekHero from "./TrekHero";
import BookingCard from "./BookingCard";

import TripOverview from "./TripOverview";
import Highlights from "./Highlights";
import AtAGlanceTable from "./AtAGlanceTable";
import TripInformation from "./TripInformation";
import Reviews from "./Reviews";
import ExploreMore from "./ExploreMore";

import { TREK_DETAIL } from "./mockData";

import { Mountain, Gauge, Users, MapPin } from "lucide-react";

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-5 text-center shadow-sm">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-sky-50">
        {icon}
      </div>

      <div className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </div>

      <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}

export default function TrekDetailPage() {
  const d = TREK_DETAIL;

  return (
    <main className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6">
        <Breadcrumbs items={d.breadcrumbs} />

        <div className="mt-2">
          <TrekHeader
            title={d.title}
            days={d.days}
            rating={d.rating}
            reviewCount={d.reviewCount}
          />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <TrekHero />
          </div>

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-6">
              <BookingCard />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-[calc(66.666%_-_12px)]">
          <StatCard
            icon={<Mountain className="h-5 w-5 text-sky-600" />}
            label="Max Altitude"
            value={d.maxAltitude}
          />
          <StatCard
            icon={<Gauge className="h-5 w-5 text-sky-600" />}
            label="Difficulty"
            value={d.difficulty}
          />
          <StatCard
            icon={<Users className="h-5 w-5 text-sky-600" />}
            label="Group Size"
            value={d.groupSize}
          />
          <StatCard
            icon={<MapPin className="h-5 w-5 text-sky-600" />}
            label="Start/End"
            value={d.startEnd}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="space-y-10">
              <TripOverview text={d.overview} />
              <Highlights items={d.highlights} />
              <AtAGlanceTable rows={d.atAGlance} />
              <TripInformation info={d.tripInformation} />
              <Reviews reviews={d.reviews} />
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4" />
        </div>

        <div className="mt-10">
          <ExploreMore items={d.moreAdventures} />
        </div>
      </div>
    </main>
  );
}
