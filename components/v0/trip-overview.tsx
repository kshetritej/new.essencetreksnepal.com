import { TripData } from "@/app/types/trip-data";
import Image from "next/image";
import {
  LucideClock,
  LucideGauge,
  LucideStar,
  LucideUsers,
  LucideMapPin,
  LucideIcon,
} from "lucide-react";
import PricingCardSidebar from "../card/pricing-card";

interface TripOverviewProps {
  trip: TripData;
}
export function TripOverview({ trip }: TripOverviewProps) {
  return (
    <div className="space-y-8 mt-4">
      <div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
          {trip.title}
        </h1>
        {/*<div className="flex items-center gap-2">
          <span className="text-2xl">
            <LucideStar size={16} />
          </span>
          <p className="text-sm"> Recommended by {trip?.ratings?.recommendedPercentage || "99"}% of
            travelers
          </p>
        </div>*/}
      </div>

      {/* AT A GLANCE Section */}
      <div>
        <div className="font-bold mb-2">AT A GLANCE</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 bg-primary/10 p-4 rounded-sm">
          {/* Duration */}
          <GlanceItem
            text="Duration"
            icon={LucideClock}
            value={trip.duration}
          />
          <GlanceItem
            text="Trip Grade"
            icon={LucideGauge}
            value={trip.difficultyLevel}
          />
          <GlanceItem
            text="Group Size"
            icon={LucideUsers}
            value={String(trip.guestCapacity) ?? "-"}
          />
          <GlanceItem
            text="Start"
            icon={LucideMapPin}
            value={trip.meetingPoint ?? "-"}
          />
          <GlanceItem
            text="End"
            icon={LucideMapPin}
            value={trip.dropOffPoint ?? "-"}
          />
        </div>
      </div>

      <div className="md:hidden">
        <PricingCardSidebar
          price={trip.price}
          maxPrice={trip.price * 0.2}
          title={trip.title}
        />
      </div>
    </div>
  );
}

function GlanceItem({
  icon: Icon,
  text,
  value,
}: {
  icon: LucideIcon;
  text: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="size-8" strokeWidth={1} />
      <div>
        <p className="text-slate-600 text-sm font-medium">{text}</p>
        <p className="font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
