import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { GeoIcon } from "@/components/GeoIcon";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Wave } from "@/components/Wave";
import { ChapterCard } from "@/components/chapters/ChapterCard";
import { WorldMap } from "@/components/chapters/WorldMap";
import { chapterFeatures, chapters } from "@/lib/chapters";
import { START_A_CHAPTER_FORM_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Chapters | Climate Tech Cities",
  description:
    "Find your local Climate Tech Cities chapter. In-person climate tech communities in cities around the world.",
};

export default function ChaptersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 sm:px-10 md:grid-cols-2 md:py-24">
          <div className="max-w-xl">
            <p className="text-[15px]">Chapters</p>
            <h1 className="mt-3 text-4xl leading-tight font-medium sm:text-5xl">
              Find your local climate community
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed">
              Our chapters bring the climate tech ecosystem to your city. Each
              one is a volunteer-led, in-person community where scientists,
              founders, investors, artists, and policymakers meet to share
              knowledge and build towards a decarbonized future, right where
              they live.
            </p>
            <div className="mt-8">
              <Button href="#chapter-cities">Explore chapters</Button>
            </div>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-6 h-44 w-64 rounded-[52%_48%_44%_56%/48%_56%_44%_52%] bg-leaf"
            />
            <PlaceholderImage
              variant="people"
              alt="Chapter members at a local meetup"
              tone="cream"
              className="relative aspect-[4/3] w-full rounded-md"
            />
          </div>
        </div>
      </section>

      {/* What happens in our chapters */}
      <Wave fill="#f5f4e9" />
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-10 md:py-20">
          <h2 className="text-3xl font-medium">
            What happens in our chapters
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed">
            Every chapter runs on its own cadence, but wherever you join,
            here&apos;s what you can expect.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {chapterFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-md border border-line bg-paper p-7"
              >
                <GeoIcon name={feature.icon} className="h-14 w-14" />
                <h3 className="mt-5 text-[18px] font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-forest-soft">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Wave fill="#f5f4e9" flip />

      {/* Global chapters map */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-10 md:py-16">
          <div className="grid items-end gap-6 md:grid-cols-[2fr_1fr]">
            <h2 className="text-3xl font-medium">
              A global network of chapters
            </h2>
            <p className="text-[15px] leading-relaxed md:pb-1">
              Eight cities and counting. Don&apos;t see yours?{" "}
              <a
                href={START_A_CHAPTER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Start a chapter
              </a>
              .
            </p>
          </div>
          <div className="mt-10">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* Chapter cards */}
      <section id="chapter-cities" className="bg-paper scroll-mt-20">
        <div className="mx-auto max-w-[1400px] px-5 pb-24 pt-4 sm:px-10">
          <h2 className="mb-10 text-3xl font-medium">Our chapters</h2>
          <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {chapters.map((chapter, i) => (
              <ChapterCard key={chapter.name} chapter={chapter} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
