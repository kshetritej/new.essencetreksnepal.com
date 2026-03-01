import { TripData } from "@/app/types/trip-data";
import { decodeHtmlEntities } from "@/lib/html-decoder";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface TripItineraryProps {
  trip: TripData;
}

export function TripItinerary({ trip }: TripItineraryProps) {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-4">
        <div
          id="overview"
          className="mt-4"
          dangerouslySetInnerHTML={{
            __html: decodeHtmlEntities(trip.shortDescription),
          }}
        />
        <div
          id="highlights"
          className=" w-full
            prose-li:before:mask-[url('/icons/highlight.png')]
            prose-li:before:rotate-360
             "
          dangerouslySetInnerHTML={{
            __html: decodeHtmlEntities(trip.highlights[0]),
          }}
        />
        <div
          id=""
          dangerouslySetInnerHTML={{
            __html: decodeHtmlEntities(trip.fullDescription),
          }}
        />
      </div>
      <div id="itinerary">
        <h2 className="font-bold text-2xl my-4">Detailed Itinerary</h2>
        <Accordion type="single" collapsible defaultValue="1">
          <div className="flex flex-col gap-1 relative border-b">
            {trip.itinerary.map((day, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger className="rounded-none font-bold text-xl hover:no-underline cursor-pointer">
                  {day.title}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <div
                    className="text-base"
                    dangerouslySetInnerHTML={{ __html: day.description }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  );
}
