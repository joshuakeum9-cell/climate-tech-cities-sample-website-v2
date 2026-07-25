import Link from "next/link";
import { Button } from "@/components/Button";
import { CitySkyline, type CitySlug } from "@/components/CityImage";

/** Hero for an individual chapter page: breadcrumb, city title, a short hook
 *  from the city narrative, and a primary newsletter CTA with a quiet jump
 *  to the events section. */
export function ChapterHero({
  city,
  slug,
  lede,
  newsletterUrl,
}: {
  city: string;
  slug: CitySlug;
  lede: string;
  newsletterUrl?: string;
}) {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 sm:px-10 md:grid-cols-2 md:py-24">
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
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button href={newsletterUrl ?? "#"}>
              Subscribe to the Newsletter
            </Button>
            <a
              href="#chapter-events"
              className="text-[15px] underline decoration-1 underline-offset-4 hover:text-coral"
            >
              See upcoming events →
            </a>
          </div>
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-6 h-44 w-64 rounded-[48%_52%_60%_40%/55%_45%_55%_45%] bg-lavender"
          />
          <CitySkyline
            city={slug}
            alt={`Illustration of the ${city} skyline`}
            tone="cream"
            className="relative aspect-[4/3] w-full rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
