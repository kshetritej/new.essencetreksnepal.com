"use client";
import { useEffect, useRef, useState } from "react";
import TripCard from "./card/trip-card";
import { Button } from "./ui/button";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

export default function PackagesBlock({
  count,
  category,
}: {
  count: number;
  category: string;
}) {
  const [packages, setPackages] = useState([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function getPackages() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/activity?category=${category}&limit=${count}`,
          { cache: "no-store" },
        );
        const json = await res.json();
        setPackages(json.data);
      } catch (err) {
        console.error("Failed to fetch packages:", err);
      }
    }
    getPackages();
  }, [count, category]);

  const scroll = (dir: "prev" | "next") => {
    scrollRef.current?.scrollBy({
      left: dir === "next" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <div className="my-8">
      <div className="relative">
        <Button
          onClick={() => scroll("prev")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-4 rounded-full cursor-pointer"
        >
          <LucideChevronLeft />
        </Button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-auto max-w-screen scrollbar-hide"
        >
          {packages?.map((pkg, index) => (
            <TripCard key={index} trip={pkg} />
          ))}
        </div>

        <Button
          onClick={() => scroll("next")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-4 rounded-full cursor-pointer"
        >
          <LucideChevronRight />
        </Button>
      </div>
    </div>
  );
}
