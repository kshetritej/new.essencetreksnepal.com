import { satisfy } from "@/lib/font";
import { cn } from "@/lib/utils";
import TestimonialCard from "./testimonial-card";
import { Button } from "./ui/button";
import Image from "next/image";
import { ChevronRight, LucideCircle, LucideStar } from "lucide-react";
import Link from "next/link";

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  content: string;
}

export default async function Testimonials() {
  const res = await fetch(`${process.env.API_BASE_URL}/testimonial`, {
    cache: "force-cache",
  });
  const testimonials = await res.json();

  return (
    <div className="relative text-white my-12 py-12 px-4 min-h-[40vh] overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "url(/assets/mountain-bg.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
        }}
      />
      <div className="absolute inset-0 bg-blue-900/80 z-0 pointer-events-none" />
      <div className="relative z-20">
        <div className="text-xl md:text-3xl text-center font-black uppercase">
          What Our Trekkers Say
        </div>
        <div
          className={cn(
            "text-xl md:text-xl font-semibold  text-center",
            satisfy.className,
          )}
        >
          Read about the experiences of our trekkers who have explored the
          majestic Himalayas with us
        </div>
        <div className="flex gap-4 max-w-7xl mx-auto overflow-x-scroll py-4">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <TestimonialCard
              rating={testimonial.rating}
              key={testimonial.author + index}
              name={testimonial.author}
              review={testimonial.content}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto py-8 flex justify-between flex-wrap gap-4">
          <div className="flex gap-8 flex-wrap">
            <Link
              href={
                "https://www.tripadvisor.ie/Attraction_Review-g293891-d34042144-Reviews-Essence_Treks-Pokhara_Gandaki_Zone_Western_Region.html"
              }
              target="_blank"
            >
              <div className="flex gap-4">
                <Image
                  src={"/assets/tripadvisoricon.png"}
                  width={40}
                  height={100}
                  alt=""
                  className="object-contain h-auto w-auto"
                />
                <div>
                  <p className="font-bold text-lg md:text-xl">Tripadvisor</p>
                  <div className="flex gap-1 items-center font-bold">
                    {Array.from({ length: 5 }).map((_, l) => (
                      <LucideCircle
                        key={l}
                        fill="green"
                        className="size-4"
                        stroke="green"
                      />
                    ))}
                    Reviews 5/5
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href={
                "https://www.google.com/search?sca_esv=ae95eeef493796b7&sxsrf=ANbL-n7LBYQTXDVhf4DZYFqZtmmCtiS0eg:1773915236506&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWW69MEiZvU5e10x2mJ4gcivbI3k1hbjGYLhzGj-V2cm6KV2fnoNne5TGw9saosfyIF9gOofvJHEbem49cx5s80sWpCVz_pf71VEmfNsGGUuwCbhXOmvSVzLsX9eK7O-H8EYlWrd2P0NIYnI2YewziZckUBXc&q=Essence+Tours+and+Travels+%26+Treks+and+Expedition+Pvt.+LTD.+Reviews&sa=X&ved=2ahUKEwjYkKKc3auTAxV83TgGHYcrLMsQ0bkNegQIVRAH&biw=1462&bih=837&dpr=2"
              }
              target="_blank"
            >
              <div className="flex gap-4">
                <Image
                  src={"/assets/googleicon.png"}
                  width={40}
                  height={100}
                  alt=""
                  className="object-contain h-auto w-auto"
                />
                <div>
                  <p className="font-bold text-lg md:text-xl">Google</p>
                  <div className="flex gap-1 items-center font-bold">
                    {Array.from({ length: 5 }).map((_, l) => (
                      <LucideStar
                        key={l}
                        fill="orange"
                        className="size-4"
                        stroke="orange"
                      />
                    ))}
                    Reviews 4.9/5
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <Link href={"/about-us"}>
            <Button className="w-fit rounded-xs font-bold">
              More about us <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
