import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import CTA from "@/components/cta";
import { outfit } from "@/lib/font";

export const metadata: Metadata = {
  title: "Essence Treks",
  description: "Created by Growfore Solution",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Navigation />
        {children}
        <Analytics />
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
