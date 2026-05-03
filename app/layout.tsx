import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Analytics } from "@vercel/analytics/next";
import { outfit } from "@/lib/font";
import { siteConfig } from "@/lib/siteConfig";
import Footer from "@/components/footer";
import Cta from "@/components/cta";
import BackToTop from "@/components/back-to-top";
import FloatingWhatsAppIcon from "@/components/floating-whatsapp";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Essence Treks",
  description: "Created by Growfore Solution",
  openGraph: {
    siteName: siteConfig.name,
  },
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
        <TooltipProvider>
          <Navigation />
          {children}
          <Analytics />
          <Cta />
          <BackToTop />
          <Footer />
          {/*<ChatWidget />*/}
          <FloatingWhatsAppIcon />
        </TooltipProvider>
      </body>
    </html>
  );
}
