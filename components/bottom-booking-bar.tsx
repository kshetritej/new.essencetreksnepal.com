"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LucideSend } from "lucide-react";

interface BottomBookingBarProps {
  price: number;
  slug: string;
  title: string;
}

export function BottomBookingBar({ price, slug, title }: BottomBookingBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground line-clamp-1 max-w-[200px]">
            {title}
          </span>
          <span className="text-xl font-bold text-primary">
            US ${price}
            <span className="text-xs font-normal text-muted-foreground">/person</span>
          </span>
        </div>
        <Link href={"/booking?q=" + slug}>
          <Button className="font-semibold shadow-sm">
            <LucideSend className="size-4" />
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
