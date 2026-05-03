import { satisfy } from "@/lib/font";
import { cn } from "@/lib/utils";
import FeaturedScroll from "../featured-scroll";
import { decodeHtmlEntities } from "@/lib/html-decoder";

export default async function FeaturedSections({
  featuredTags,
}: {
  featuredTags: any;
}) {
  return (
    <div className="relative flex flex-col gap-4 justify-start container mx-auto mt-12 p-2">
      {featuredTags.map((tag: any, index: number) => (
        <div key={index} className="space-y-4 min-h-[70vh]">
          {/* Server-rendered title & description */}
          <div className="flex flex-col items-start justify-start gap-4">
            <div
              className={cn(
                "md:max-w-3xl text-base md:text-xl font-semibold text-primary text-shadow-2xs text-center",
                satisfy.className,
              )}
            >
              {tag.name.split("::")[1] || ""}
            </div>
            <div className="text-2xl md:text-3xl font-black uppercase">
              {tag.name.split("::")[0] || tag.name}
            </div>
            <div
              className="text-base md:text-xl max-w-5xl"
              dangerouslySetInnerHTML={{
                __html: decodeHtmlEntities(tag.description),
              }}
            />
          </div>

          {/* Client-rendered cards & buttons */}
          <FeaturedScroll activities={tag.activity} />
        </div>
      ))}
    </div>
  );
}
