"use client";

import { Menu, X } from "lucide-react";
import { MobileMenuItem } from "./mobile-menu-item";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction, useEffect } from "react";

type MenuItem = {
  id: string;
  label: string;
  url: string;
  children: MenuItem[];
};

interface MobileMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onNavigate: () => void;
}

export function MobileMenu({
  items,
  isOpen,
  setIsOpen,
  onNavigate,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger button */}
      <Button
        variant={"ghost"}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="md:hidden hover:bg-gray-100 rounded-lg transition-colors"
      >
        {isOpen ? <X size={24} className="" /> : <Menu className="size-8" />}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[calc(var(--nav-height,54px))] bottom-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-down panel */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[calc(var(--nav-height,54px))] bg-white border-t border-gray-200 z-50 overflow-y-auto max-h-[calc(100vh-112px)]">
          {items.map((item) => (
            <MobileMenuItem key={item.id} item={item} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </>
  );
}
