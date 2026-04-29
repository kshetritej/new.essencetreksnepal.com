"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import { siteConfig } from "@/lib/siteConfig";
import Logo from "./logo";
import { BsWhatsapp } from "react-icons/bs";
import { Button } from "./ui/button";

type MenuItem = {
  id: string;
  label: string;
  url: string;
  children: MenuItem[];
  parentId?: string | null;
  depth?: number;
};

const hasChildren = (item: MenuItem) =>
  Array.isArray(item.children) && item.children.length > 0;

function DesktopMenuItem({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <li
      className="group py-4"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.url || "#"}
        className="flex items-center gap-1 px-4 font-semibold hover:text-primary transition-colors"
      >
        {item.label}
        {hasChildren(item) && (
          <ChevronDown size={16} className="transition-transform" />
        )}
      </Link>

      {hasChildren(item) && isOpen && (
        <div className="absolute left-0 right-0 top-24 w-screen z-50">
          <div className="max-w-7xl mx-auto px-8 py-12 bg-accent mt-5 rounded-b-xl">
            <div className="flex gap-8">
              {item.children.map((child) => (
                <div key={child.id}>
                  <div className="mb-4">
                    {hasChildren(child) ? (
                      <span className="font-semibold text-gray-900 block pb-2 hover:text-primary hover:underline">
                        {child.label}
                      </span>
                    ) : (
                      <Link
                        href={child.url || "#"}
                        className="text-lg font-semibold text-gray-900 hover:text-primary hover:underline transition-colors block pb-2"
                      >
                        {child.label}
                      </Link>
                    )}
                  </div>
                  {hasChildren(child) && (
                    <ul className="space-y-3">
                      {child.children.map((subChild) => (
                        <li key={subChild.id}>
                          <Link
                            href={subChild.url || "#"}
                            className="underline text-gray-700 hover:text-primary hover:underline transition-colors"
                          >
                            {subChild.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

interface MenuControllerProps {
  items: MenuItem[];
}

export function MenuController({ items }: MenuControllerProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav>
      {/* Top bar */}
      <div className="hidden  bg-white px-4 md:px-8 py-3 md:flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-8 text-xs md:text-sm">
        <div className="container px-4 md:px-12 mx-auto flex items-end gap-4 justify-end">
          <Link
            href={`https://api.whatsapp.com/send/?phone=${siteConfig.whatsAppNumber}&type=phone_number&app_absent=0`}
            target="_blank"
            className="flex items-center gap-2 hover:text-primary transition-colors font-bold"
          >
            <BsWhatsapp className="text-primary size-6" />
            <span className="hidden sm:inline">
              {siteConfig.phoneNumbers[0].phone}
            </span>
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 hover:text-primary transition-colors font-bold"
          >
            <Mail className="text-primary size-6" />
            <span className="hidden sm:inline">info@essencetreksnepal.com</span>
          </Link>
        </div>
      </div>

      {/* Main bar */}
      <div>
        <div className="container mx-auto px-4 md:px-8 py-1 flex items-center justify-between ">
          <div className="shrink-0">
            <Logo />
          </div>
          <div className="flex  items-center justify-between gap-2 md:gap-8">
            <div className="hidden md:flex items-center gap-2">
              <ul className="flex gap-2">
                {items.map((item) => (
                  <DesktopMenuItem key={item.id} item={item} />
                ))}
              </ul>
            </div>

            <Link href="/booking">
              <Button size={"sm"}>Book Now</Button>
            </Link>
            <MobileMenu
              items={items}
              isOpen={isMobileMenuOpen}
              setIsOpen={setIsMobileMenuOpen}
              onNavigate={handleNavClick}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
