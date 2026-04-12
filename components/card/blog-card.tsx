import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function BlogCard({ blog }: any) {
  const { title, slug, content, coverImage, createdAt } = blog;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/blogs/${slug}`}>
      <Card className="flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-200 pt-0">
        {/* Cover Image */}
        {coverImage && (
          <div className="aspect-video overflow-hidden bg-muted">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${coverImage}`}
              alt={title}
              width={200}
              height={200}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        <CardHeader className="space-y-2 pb-2">
          <h3 className="text-lg font-semibold leading-snug group-hover:underline line-clamp-2">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="pb-2 flex-1">
          <p
            className="text-sm text-muted-foreground line-clamp-3"
            dangerouslySetInnerHTML={{
              __html: content.substring(0, 250) + "...",
            }}
          />
        </CardContent>

        <Separator />

        <CardFooter className="pt-3 pb-3 flex items-center justify-between text-xs text-muted-foreground">
          {/* Author + Date */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
