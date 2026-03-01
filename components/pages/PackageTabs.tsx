"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "../ui/button";
import {
  CheckCircle2,
  MapPin,
  Calendar,
  Sun,
  XCircle,
  Mountain,
  Compass,
  Star,
  MessageCircle,
} from "lucide-react";
import type { PackageData } from "./package";

type SectionId =
  | "overview"
  | "highlights"
  | "itinerary"
  | "includes"
  | "excludes"
  | "map"
  | "best-seasons"
  | "packing"
  | "faqs";

const SECTIONS: { id: SectionId; label: string; icon: React.ReactNode }[] = [
  { id: "overview", label: "Overview", icon: <Mountain className="h-4 w-4" /> },
  {
    id: "highlights",
    label: "Highlights",
    icon: <Star className="h-4 w-4" />,
  },
  {
    id: "itinerary",
    label: "Itinerary",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    id: "includes",
    label: "Includes",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  {
    id: "excludes",
    label: "Excludes",
    icon: <XCircle className="h-4 w-4" />,
  },
  { id: "map", label: "Map", icon: <MapPin className="h-4 w-4" /> },
  {
    id: "best-seasons",
    label: "Best Seasons",
    icon: <Sun className="h-4 w-4" />,
  },
  {
    id: "packing",
    label: "Packing",
    icon: <Compass className="h-4 w-4" />,
  },
  { id: "faqs", label: "FAQs", icon: <MessageCircle className="h-4 w-4" /> },
];

export default function PackageTabs() {
  const [activeSection, setActiveSection] = useState<SectionId>("overview");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const navRef = useRef<HTMLDivElement>(null);

  const setSectionRef = useCallback(
    (id: string) => (el: HTMLDivElement | null) => {
      sectionRefs.current[id] = el;
    },
    [],
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionIds = SECTIONS.map((s) => s.id);

    sectionIds.forEach((id) => {
      const el = sectionRefs.current[id];
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    const activeBtn = navRef.current.querySelector(
      `[data-section="${activeSection}"]`,
    );
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSection]);

  const scrollToSection = (id: SectionId) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        id="scrollbar-hide"
        ref={navRef}
        className="flex  gap-2 mb-8 bg-background pb-4 border-b border-border overflow-x-scroll sticky top-0  z-10 pt-4"
      >
        {SECTIONS.map((section) => (
          <Button
            key={section.id}
            data-section={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${
                activeSection === section.id
                  ? "bg-primary text-white shadow-sm hover:bg-primary/70"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }
            `}
          >
            {section.icon}
            {section.label}
          </Button>
        ))}
      </div>
    </>
  );
}
