import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { decodeHtmlEntities } from "@/lib/html-decoder";

export type AdditionalInfoItem = {
  title: string;
  description: string;
};

export const AdditionalInfoRenderer = ({
  item,
  index,
}: {
  item: AdditionalInfoItem;
  index: number;
}) => {
  return (
    <>
      <h3>{item.title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: decodeHtmlEntities(item.description),
        }}
      />
    </>
  );
};
