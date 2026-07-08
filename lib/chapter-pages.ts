/** City-specific content for individual chapter pages.
 *  Adding a new chapter page = adding one entry here (plus a matching
 *  `slug` on the chapter in lib/chapters.ts). No component changes needed. */

export type ChapterEvent = {
  title: string;
  description: string;
  date: string;
  location: string;
  imageVariant: "people" | "scene" | "skyline";
};

export type Organizer = {
  name: string;
  role: string;
};

export type ChapterPage = {
  slug: string;
  city: string;
  /** Chapter newsletter (Substack) URL for the Stay in the Loop CTA */
  newsletterUrl?: string;
  /** Narrative paragraphs, sourced verbatim from the City Narratives sheet */
  narrative: string[];
  upcomingEvents: ChapterEvent[];
  pastEvents: ChapterEvent[];
  organizers: Organizer[];
  /** Sidebar navigation categories. The sidebar title supplies the city
   *  context, so these stay generic. Each will eventually link to a dedicated
   *  resource page (e.g. /chapters/new-york/universities); until those pages
   *  exist the sidebar renders them as non-clickable placeholders. */
  resourceCategories: string[];
};

/** Standard resource categories shared by every chapter page. */
export const standardResourceCategories: string[] = [
  "Universities",
  "Incubators & Accelerators",
  "Resources & Public Programs",
  "Industry Partners",
  "Capital Partners",
];

const placeholderOrganizers: Organizer[] = Array.from({ length: 6 }, () => ({
  name: "Name Placeholder",
  role: "Role Placeholder",
}));

export const chapterPages: ChapterPage[] = [
  {
    slug: "new-york",
    city: "New York",
    newsletterUrl: "https://nyc.climatetechcities.com/",
    narrative: [
      "New York is where climate tech meets the balance sheet. The city's emissions story is unusually concentrated in its buildings, a far larger share than in most major cities, and that single fact reshapes everything a founder should understand about building here. The problem to solve isn't abstract; it's the pre-war co-op, the Midtown office tower, the aging boiler and steam riser. New York has written that reality into law with the most consequential building-performance standards in the country, and in doing so it created a real, deadline-driven market for deep retrofits, heat pumps, thermal storage, envelope work, and the software that manages compliance.",
      "Walk a single square mile and you can find the person who owns the building, the one who financed it, and the one who insures it. Here the physical problem sits next door to the deepest pool of capital on earth, and a founder's first customer, project financier, and strategic partner may all end up in the same room. The city's fintech and capital-markets depth is turning toward decarbonization: project finance, PACE lending, insurance and risk analytics, carbon and REC markets, the plumbing that moves money into retrofits at scale.",
      "Columbia, Cornell Tech, and NYU do more than run labs. They feed talent into finance, real estate, and the machinery of urban systems, so the engineers and analysts who understand the buildings are already inside the industries that own them. Around them, the city's economic development apparatus has built genuine prototyping and pilot space, giving hardware founders somewhere to build and test inside a dense urban grid.",
      "New York is also a frontline adaptation city. It is a coastal metropolis built on estuary and fill, and it has already lived through what climate risk looks like when a storm surge meets Lower Manhattan. The city is now reengineering its shoreline, and that work throws off durable demand for flood defense, resilient infrastructure, nature-based coastal systems, and the risk data that underwrites all of it.",
      "For years New York has been better at financing and deploying climate tech than at inventing the hardware itself. But for a founder whose product touches buildings, grids, water, capital, or risk, no place puts you closer to the system, or to the operators who actually run it.",
    ],
    upcomingEvents: [
      {
        title: "Monthly Climate Tech Meetup",
        description:
          "Sample event. Our regular general meetup for anyone working in or curious about climate.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    pastEvents: [
      {
        title: "Climate Careers Panel",
        description:
          "Sample event. Transitioners hear from people who made the jump into climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Buildings Decarbonization Field Trip",
        description:
          "Sample event. A hands-on visit to a deep retrofit project in the city.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Founders & Funders Dinner",
        description:
          "Sample event. A small dinner connecting early-stage founders with climate investors.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
      {
        title: "Coastal Resilience Walking Tour",
        description:
          "Sample event. Exploring the shoreline infrastructure reshaping the city's edge.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Grid & Energy Storage Meetup",
        description:
          "Sample event. Talks and networking around the local energy transition.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Climate Tech Holiday Social",
        description:
          "Sample event. An end-of-year gathering for the whole chapter community.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    organizers: placeholderOrganizers,
    resourceCategories: standardResourceCategories,
  },
];

export function getChapterPage(slug: string): ChapterPage | undefined {
  return chapterPages.find((page) => page.slug === slug);
}
