import { satisfy } from "@/lib/font";
import { cn } from "@/lib/utils";
import FeaturedScroll from "../featured-scroll";

export default async function FeaturedSections({
  featuredTags,
}: {
  featuredTags: any;
}) {
  return (
    <div className="relative flex flex-col gap-4 justify-center container mx-auto mt-12 p-2">
      {featuredTags.map((tag: any, index: number) => (
        <div key={index} className="space-y-4 min-h-[70vh]">
          {/* Server-rendered title & description */}
          <div className="flex flex-col items-center justify-center">
            <div
              className={cn(
                "md:max-w-3xl text-xl md:text-2xl font-semibold text-primary text-shadow-2xs text-center",
                satisfy.className,
              )}
            >
              {tag.description.substring(0, 28)}
            </div>
            <div className="text-2xl md:text-3xl font-black uppercase">
              {tag.name}
            </div>
          </div>

          {/* Client-rendered cards & buttons */}
          <FeaturedScroll activities={tag.activity} />
        </div>
      ))}
    </div>
  );
}
