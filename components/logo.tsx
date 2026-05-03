import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="font-bold text-lg px-4 md:px-0fa">
      <Link href={"/"} className="flex gap-1 items-center text-white">
        <Image
          src={siteConfig.logo}
          alt="Essence Treks Nepal Logo"
          width={40}
          height={40}
          className="rounded-full object-cover h-auto w-auto"
        />
        <span className="uppercase text-black text-xs md:hidden">
          Essence Treks <br /> Nepal
        </span>
        <span className="uppercase text-black text-xl hidden md:block">
          Essence Treks Nepal
        </span>
      </Link>
    </div>
  );
}
