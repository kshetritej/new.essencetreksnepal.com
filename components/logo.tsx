import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="font-bold text-lg">
      <Link href={"/"}>{siteConfig.name}</Link>
    </div>
  );
}
