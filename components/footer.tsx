import { siteConfig } from "@/lib/siteConfig";
import { LucideMail, LucideMap, LucidePhone } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import { getFooterItems } from "@/lib/api";

export default async function Footer() {
  const footerItems = await getFooterItems();

  const socials = [
    {
      name: "Facebook",
      url: siteConfig.socials.facebook,
      icon: <FaFacebook className="size-4 md:size-8" />,
    },
    {
      name: "YouTube",
      url: siteConfig.socials.youtube,
      icon: <FaYoutube className="size-4 md:size-8" />,
    },
    {
      name: "TikTok",
      url: siteConfig.socials.tiktok,
      icon: <FaTiktok className="size-4 md:size-8" />,
    },
  ];

  return (
    <div className="bg-linear-to-t from-black to-black/90">
      <div className="flex  flex-col-reverse gap-8 lg:grid lg:grid-cols-4 container mx-auto text-white py-12 px-4">
        {footerItems.data.items.map(
          (item: {
            url: string;
            label: string;
            children?: { url: string; label: string }[];
          }) => (
            <div key={item.url + item.label}>
              <Link href={`/${item.url}`}>
                <h3 className="font-black text-xl">{item.label}</h3>
              </Link>
              {item.children && item.children.length > 0 && (
                <ul className="flex gap-2 flex-col mt-2">
                  {item.children.map(
                    (subItem: { url: string; label: string }) => (
                      <Link
                        key={subItem.url + subItem.label}
                        href={`/${subItem.url}`}
                      >
                        <li>{subItem.label}</li>
                      </Link>
                    ),
                  )}
                </ul>
              )}
            </div>
          ),
        )}

        <div className="flex flex-col gap-4">
          <h3 className="font-black text-xl">Essence Treks Nepal</h3>
          <div className="flex items-start md:items-center gap-4">
            <div>
              <LucideMap className="size-4 md:size-6 text-white" />{" "}
            </div>
            {siteConfig.fullAddress}
          </div>
          <div className="flex items-center gap-4">
            <div>
              <LucidePhone className="size-4 md:size-6 text-white" />{" "}
            </div>
            {siteConfig.phoneNumbers[0].phone}
          </div>
          <div className="flex items-center gap-4">
            <div>
              <LucideMail className="size-4 md:size-6 text-white" />{" "}
            </div>
            {siteConfig.email}
          </div>
        </div>
      </div>
      <div className="bg-amber-50">
        <div className="container mx-auto py-8 grid md:grid-cols-2 gap-4 px-4 text-center items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <div className="font-black text-lg">Find us on</div>
            <div className="flex gap-4 mt-4">
              {socials.map((social, index) => {
                return (
                  <Link target="_blank" href={social.url} key={index}>
                    {social.icon}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="font-black text-lg">Associated With</div>
            <div className="flex gap-4 mt-4">
              {[
                "/associations/taan.avif",
                "/associations/nepal-government.avif",
                "/associations/nma.avif",
                "/associations/ntb.avif",
                "/associations/keep.avif",
              ].map((image, index) => {
                return (
                  <Image
                    alt={`Association ${index + 1}`}
                    src={image}
                    height={20}
                    width={20}
                    key={index}
                    className="object-contain w-12"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="p-4 items-center text-center border-t">
          &copy;Copyright {siteConfig.name}. {siteConfig.established} -{" "}
          {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
}
