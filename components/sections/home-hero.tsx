import Image from "next/image";
import { Button } from "../ui/button";

export default function HomeHero() {
  return (
    <div className="relative w-full h-[70vh]">
      <Image
        src="/assets/home.jpg"
        alt="homeimg"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 px-4 flex flex-col items-center justify-center bg-black/20 text-white">
        <div className="max-w-3xl flex flex-col items-center justify-center text-center gap-4">
          <h1 className="text-3xl md:text-5xl mb-6 text-center">
            Seamless Journeys. <br />
            Unforgettable Adventures.
          </h1>
          <p>
            Experience the height of elegance paired with heartfelt local
            connections—where every curated moment feels exclusive yet deeply
            personal.
          </p>

          <div className="btn-group flex gap-4 items-center">
            <Button variant={"secondary"}>Start Planning </Button>
            <Button> Book a Discovery Call</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
