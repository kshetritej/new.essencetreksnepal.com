"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import GoogleRatingBadge from "../google-rating-badge";

const OldHeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const bannerImages = [
    "/images/banner1.webp",
    "/images/banner2.webp",
    "/images/banner3.webp",
    "/images/banner4.jpeg",
    "/images/banner5.jpg",
    "/images/banner6.webp",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Blurred side overlays - hidden on mobile */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-20 backdrop-blur-sm"></div>
      <div className="hidden md:block absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black/90 via-black/50 to-transparent z-20 backdrop-blur-sm"></div>

      {/* Main overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10" />

      {/* Background Image */}
      <motion.div
        key={currentBanner}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={bannerImages[currentBanner]}
          alt="Majestic Himalayas - Essence Treks Nepal"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          style={{
            filter: "brightness(1.05) contrast(1.1) saturate(1.1)",
          }}
          sizes="100vw"
        />
      </motion.div>

      <div className="relative z-30 flex flex-col items-start justify-center h-full text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/*<span className={cn(satisfy.className, "font-bold text-xl")}>
            Since 2016 - Nepal&apos;s trusted Trekking Experts
          </span>*/}
          <div className="bg-black/20 backdrop-blur-md w-fit p-2 rounded-3xl flex gap-4 text-white">
            <GoogleRatingBadge />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-shadow-lg leading-tight">
            Discover Nepal&apos;s Hidden Treasures
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-2xl text-shadow font-light text-shadow-md">
            Experience the magic of the Himalayas with our expert guides and
            unforgettable adventures
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 "
          >
            <Link href="/booking">
              <Button>Start Your Adventure</Button>
            </Link>
            <Link href="/contact">
              <Button variant={"outline"} className="bg-transparent">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Banner Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
              currentBanner === index ? "bg-white scale-110" : "bg-white/50"
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OldHeroSection;
