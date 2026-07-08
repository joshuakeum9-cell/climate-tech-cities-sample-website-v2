import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChapterHero } from "@/components/chapters/ChapterHero";
import {
  NewsletterCTA,
  StartChapterCTA,
} from "@/components/chapters/ChapterCTA";
import { EventCard } from "@/components/chapters/EventCard";
import { OrganizerCard } from "@/components/chapters/OrganizerCard";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ResourceSidebar } from "@/components/chapters/ResourceSidebar";
import { chapterPages, getChapterPage } from "@/lib/chapter-pages";
import { getResourcePagesForCity } from "@/lib/resource-pages";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return chapterPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const page = getChapterPage((await params).slug);
  if (!page) return {};
  return {
    title: `${page.city} Chapter | Climate Tech Cities`,
    description: page.narrative[0]?.slice(0, 155),
  };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = getChapterPage(slug);
  if (!page) notFound();

  const [lede, ...restOfNarrative] = page.narrative;

  // Sidebar rows link to the city's resource pages where they exist;
  // otherwise fall back to the placeholder category labels.
  const cityResourcePages = getResourcePagesForCity(slug);
  const sidebarItems = cityResourcePages.length
    ? cityResourcePages.map((rp) => ({
        label: rp.sidebarLabel,
        href: `/chapters/${slug}/${rp.categorySlug}`,
      }))
    : page.resourceCategories.map((label) => ({ label }));

  return (
    <>
      <ChapterHero city={page.city} lede={lede} />

      {/* About the chapter: full-width cream band, echoing how the homepage
          separates major sections (e.g. Startup and Talent Network).
          The title-plus-content composition is centered as one unit: the
          narrow wrapper is centered in the band, the title sets the left
          edge, and the indented content below sets the right edge. */}
      <section aria-labelledby="chapter-about" className="bg-cream">
        <div className="mx-auto max-w-[1060px] px-5 py-16 sm:px-10 md:py-24">
          <h2 id="chapter-about" className="text-4xl font-medium">
            About the {page.city} Chapter
          </h2>
          <div className="mt-12 grid items-start gap-12 md:grid-cols-[260px_1fr] md:gap-16 md:pl-12">
            <PlaceholderImage
              variant="scene"
              alt={`${page.city} chapter logo placeholder`}
              tone="lavender"
              label={`${page.city} Chapter Logo`}
              className="aspect-square w-full max-w-[260px] rounded-md"
            />
            <div className="space-y-6">
              {restOfNarrative.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-[16px] leading-[1.8]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 pb-24 pt-16 sm:px-10 md:pt-20 lg:grid-cols-[320px_1fr] lg:gap-16">
        {/* Sidebar: left on desktop, below main content on mobile */}
        <div className="order-2 lg:order-1">
          <ResourceSidebar city={page.city} items={sidebarItems} />
        </div>

        <div className="order-1 space-y-20 lg:order-2">
          <NewsletterCTA city={page.city} url={page.newsletterUrl} />

          {/* Events */}
          <section aria-labelledby="chapter-events">
            <h2
              id="chapter-events"
              className="scroll-mt-24 text-3xl font-medium"
            >
              Events
            </h2>

            {page.upcomingEvents.length > 0 && (
              <>
                <h3 className="mt-8 text-xl font-medium">Upcoming Events</h3>
                <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {page.upcomingEvents.map((event, i) => (
                    <EventCard key={event.title} event={event} index={i} />
                  ))}
                </div>
              </>
            )}

            {page.pastEvents.length > 0 && (
              <>
                <h3 className="mt-10 text-xl font-medium">Past Events</h3>
                <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {page.pastEvents.map((event, i) => (
                    <EventCard key={event.title} event={event} index={i + 1} />
                  ))}
                </div>
              </>
            )}
          </section>

          {/* Organizers */}
          <section aria-labelledby="chapter-organizers">
            <h2 id="chapter-organizers" className="text-3xl font-medium">
              Organizers
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">
              Every chapter is powered by volunteers who plan events, write the
              newsletter, and grow the local community.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
              {page.organizers.map((organizer, i) => (
                <OrganizerCard key={i} organizer={organizer} index={i} />
              ))}
            </div>
          </section>
        </div>
      </div>

      <StartChapterCTA />
    </>
  );
}
