export type Chapter = {
  name: string;
  description: string;
  /** Set when the chapter has its own page at /chapters/[slug];
   *  the landing-page card becomes a link only when present. */
  slug?: string;
  /** Position on the static world map, in percent of the map container.
   *  Derived from equirectangular projection of the city's lat/lon, so the
   *  same data can later drive Google Maps markers. */
  x: number;
  y: number;
};

export const chapters: Chapter[] = [
  {
    name: "New York",
    description:
      "Where it all started. An 8-person dinner has grown into our largest community.",
    slug: "new-york",
    x: 29.4,
    y: 33,
  },
  {
    name: "San Francisco",
    description:
      "Founders, funders, and climate talent connecting across the Bay Area.",
    slug: "san-francisco",
    x: 16,
    y: 35,
  },
  {
    name: "Los Angeles",
    description:
      "From mobility to adaptive infrastructure, LA spans every corner of climate.",
    slug: "los-angeles",
    x: 17.2,
    y: 37.5,
  },
  {
    name: "Seattle",
    description:
      "Clean energy, software, and policy people building the Pacific Northwest scene.",
    slug: "seattle",
    x: 16,
    y: 28.5,
  },
  {
    name: "San Diego",
    description:
      "Coastal resilience meets climate tech in our southernmost West Coast chapter.",
    slug: "san-diego",
    x: 17.5,
    y: 39.5,
  },
  {
    name: "Washington, D.C.",
    description:
      "Policy powerhouses and technologists shaping climate action in the capital.",
    slug: "washington-dc",
    x: 28.6,
    y: 34.5,
  },
  {
    name: "Boston",
    description:
      "Researchers, students, and founders bridging lab breakthroughs and city streets.",
    slug: "boston",
    x: 30.3,
    y: 31.5,
  },
  {
    name: "London",
    description:
      "Our first international chapter, connecting Europe's climate tech ecosystem.",
    slug: "london",
    x: 49.9,
    y: 25.5,
  },
];

export type ChapterFeature = {
  title: string;
  description: string;
  icon: "events" | "founders" | "investors" | "network" | "mentorship" | "innovation";
};

export const chapterFeatures: ChapterFeature[] = [
  {
    title: "Local events",
    description:
      "General meetups, field trips, panels, and dinners. Each chapter runs in-person events on its own cadence.",
    icon: "events",
  },
  {
    title: "Founder community",
    description:
      "Meet founders building urban climate solutions and swap notes with people who have been there before.",
    icon: "founders",
  },
  {
    title: "Investor connections",
    description:
      "Connect with great investors looking to support groundbreaking climate ideas with capital.",
    icon: "investors",
  },
  {
    title: "Networking",
    description:
      "At any given event you'll meet scientists, energy pros, artists, policymakers, entrepreneurs, and activists.",
    icon: "network",
  },
  {
    title: "Mentorship",
    description:
      "Experienced climate professionals help newcomers find their footing, and often their first climate job.",
    icon: "mentorship",
  },
  {
    title: "Climate innovation",
    description:
      "Work alongside people testing, iterating, and accelerating climate technologies in real cities.",
    icon: "innovation",
  },
];
