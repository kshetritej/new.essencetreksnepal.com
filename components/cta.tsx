import { Button } from "./ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-slate-900 text-white py-16 px-6 border-b border-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for Your Adventure?</h2>
        <p className="text-slate-300 mb-8">
          Let&apos;s create your next unforgettable journey together.
        </p>
        <Link href={"/contact"}>
          <Button className="bg-primary/60 hover:bg-primary/70 text-white font-semibold px-8 py-3 rounded transition">
            Start Planning
          </Button>
        </Link>
      </div>
    </section>
  );
}
