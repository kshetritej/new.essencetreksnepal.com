import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <div
      style={{
        background: "url(/assets/serene-rolling-hills.webp)",
        objectFit: "cover",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative bg-cover overflow-hidden h-[60vh] object-cover bottom w-full p-8 flex flex-col items-center justify-center gap-4"
    >
      <div className="w-full h-[60vh] absolute top-0 left-0 bg-black/20" />
      <div className=" text-xl md:text-3xl max-w-3xl text-center font-medium text-white text-shadow-2xs z-9">
        An invitation to experience the Himalayas through altitude and awe.
        Explore terrain, depth, and the quiet art of the mountains.
      </div>
      <Link href={"/booking"} className="z-9">
        <Button variant={"secondary"} size={"lg"}>
          Book Now
        </Button>
      </Link>
    </div>
  );
}
