import { Button } from "./ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <div
      style={{
        background: "url(/assets/hiker.webp)",
        objectFit: "cover",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="relative bg-cover overflow-hidden h-[60vh] object-cover bottom w-full p-8 flex flex-col items-center justify-center gap-4"
    >
      <div className="w-full h-[60vh] absolute top-0 left-0 bg-black/80" />
      <div className="max-w-3xl text-center font-medium text-white text-shadow-2xs z-9 text-sm md:text-base">
        <div className="font-black uppercase text-4xl md:text-6xl text-white text-shadow-2xs mb-4">
          find your essence.
        </div>
        An invitation to experience the Himalayas through altitude and awe.
        Explore terrain, depth, and the quiet art of the mountains.
      </div>
      <Link href={"/booking"} className="z-9">
        <Button size={"lg"}>Book Now</Button>
      </Link>
    </div>
  );
}
