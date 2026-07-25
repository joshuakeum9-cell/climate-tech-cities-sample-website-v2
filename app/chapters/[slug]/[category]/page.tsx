import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CitySkyline, SceneImage, type CitySlug } from "@/components/CityImage";
import { ResourceSidebar } from "@/components/chapters/ResourceSidebar";
import {
  getResourcePage,
  getResourcePagesForCity,
  resourcePages,
} from "@/lib/resource-pages";

type Params = { slug: string; category: string };

export function generateStaticParams(): Params[] {
  return resourcePages.map((page) => ({
    slug: page.citySlug,
    category: page.categorySlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, category } = await params;
  const page = getResourcePage(slug, category);
  if (!page) return {};
  return {
    title: `${page.title} | ${page.city} | Climate Tech Cities`,
    description: page.introLead,
  };
}

export default async function ResourceCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, category } = await params;
  const page = getResourcePage(slug, category);
  if (!page) notFound();

  const sidebarItems = getResourcePagesForCity(slug).map((rp) => ({
    label: rp.sidebarLabel,
    href: `/chapters/${slug}/${rp.categorySlug}`,
    active: rp.categorySlug === category,
  }));
  sidebarItems.push({
    label: "Events",
    href: `/chapters/${slug}#chapter-events`,
    active: false,
  });

  return (
    <div className="bg-cream">
      {/* Hero: stylized title left, city subtitle, illustration top right */}
      <section className="mx-auto max-w-[1400px] px-5 pt-14 sm:px-10 md:pt-20">
        <p className="text-[15px]">
          <Link
            href="/chapters"
            className="underline decoration-1 underline-offset-4 hover:text-coral"
          >
            Chapters
          </Link>{" "}
          <span aria-hidden="true">/</span>{" "}
          <Link
            href={`/chapters/${page.citySlug}`}
            className="underline decoration-1 underline-offset-4 hover:text-coral"
          >
            {page.city}
          </Link>{" "}
          <span aria-hidden="true">/</span> {page.sidebarLabel}
        </p>
        <div className="mt-8 grid items-start gap-10 md:grid-cols-[3fr_2fr]">
          <div>
            <h1 className="max-w-xl text-5xl leading-[1.05] font-medium sm:text-6xl">
              {page.title}
            </h1>
            <p className="mt-5 text-2xl">{page.city}</p>
          </div>
          <SceneImage
            scene="meetup"
            alt={`Illustration of a ${page.city} community event`}
            tone="lavender"
            className="aspect-[4/3] w-full max-w-md rounded-md md:justify-self-end"
          />
        </div>
      </section>

      {/* Sidebar + content */}
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 pb-20 pt-16 sm:px-10 md:pt-24 lg:grid-cols-[300px_1fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <ResourceSidebar city={page.city} items={sidebarItems} />
        </div>

        <div className="order-1 lg:order-2">
          <div className="max-w-3xl space-y-6">
            <p className="text-2xl leading-snug font-medium sm:text-3xl">
              {page.introLead}
            </p>
            <p className="text-[18px] leading-relaxed">{page.introBody}</p>
          </div>

          <div className="mt-16 space-y-16">
            {page.groups.map((group, groupIndex) => (
              <section
                key={groupIndex}
                aria-label={group.heading ?? `Group ${groupIndex + 1}`}
              >
                <div className="max-w-2xl">
                  {group.heading && (
                    <h2 className="mb-10 text-3xl font-medium">
                      {group.heading}
                    </h2>
                  )}
                  <div className="space-y-12">
                    {group.orgs.map((org) => (
                      <article key={org.name}>
                        <h3 className="text-[19px] font-semibold">
                          {org.url ? (
                            <a
                              href={org.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-1 underline-offset-4 transition-colors hover:text-coral"
                            >
                              {org.name}
                            </a>
                          ) : (
                            org.name
                          )}
                        </h3>
                        {(org.type || org.focus) && (
                          <p className="mt-1.5 text-[13px] uppercase tracking-wide text-forest/55">
                            {[org.type, org.focus].filter(Boolean).join(" · ")}
                          </p>
                        )}
                        <p className="mt-3 text-[16px] leading-[1.8]">
                          {org.body}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
                {group.photoBreakAfter && (
                  <CitySkyline
                    city={page.citySlug as CitySlug}
                    alt={`Illustration of the ${page.city} skyline`}
                    tone="leaf"
                    className="mt-16 h-44 w-full rounded-md sm:h-56"
                  />
                )}
              </section>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href={`/chapters/${page.citySlug}`}
              className="text-[15px] underline decoration-1 underline-offset-4 hover:text-coral"
            >
              ← Back to the {page.city} chapter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
