import { siteConfig } from "@/lib/siteConfig";
import Logo from "./logo";
import Link from "next/link";
import { title } from "process";

const quickLinks = [
  { title: "Home", link: "/" },
  { title: "Trekkings", link: "#" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

const socials = [
  { title: "Facebook", value: siteConfig.socials.facebook },
  { title: "Instagram", value: siteConfig.socials.instagram },
  { title: "Youtube", value: siteConfig.socials.youtube },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo />
            <p className="text-slate-400 text-sm">{siteConfig.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => {
                return (
                  <li key={link.link + index}>
                    <Link
                      href={link.link}
                      className="text-slate-400 hover:text-white transition"
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phoneNumbers[0].phone}</li>
              <li>{siteConfig.fullAddress}</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              {socials.map((social, index) => {
                return (
                  <li key={social.value + index}>
                    <Link
                      href={social.value}
                      className="text-slate-400 hover:text-primary transition"
                    >
                      {social.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear() + " "}
            {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
