import Link from "next/link";
import { PlaceholderImage } from "@/components/PlaceholderImage";

/** Hero for an individual chapter page: eyebrow, city title, lede paragraph
 *  from the city narrative, and supporting placeholder imagery. */
export function ChapterHero({ city, lede }: { city: string; lede: string }) {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 sm:px-10 md:grid-cols-2 md:py-28">
        <div className="max-w-xl">
          <p className="text-[15px]">
            <Link
              href="/chapters"
              className="underline decoration-1 underline-offset-4 hover:text-coral"
            >
              Chapters
            </Link>{" "}
            <span aria-hidden="true">/</span> {city}
          </p>
          <h1 className="mt-3 text-4xl leading-tight font-medium sm:text-5xl">
            {city}
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed">{lede}</p>
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-6 h-44 w-64 rounded-[48%_52%_60%_40%/55%_45%_55%_45%] bg-lavender"
          />
          <PlaceholderImage
            variant="skyline"
            alt={`${city} chapter placeholder image`}
            tone="cream"
            className="relative aspect-[4/3] w-full rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
