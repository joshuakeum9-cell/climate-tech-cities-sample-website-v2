import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs | Climate Tech Cities",
};

type Program = {
  title: string;
  tagline?: string;
  paragraphs: string[];
};

const programs: Program[] = [
  {
    title: "Newsletters",
    tagline: "Everything happening in climate tech in your city.",
    paragraphs: [
      "Each city chapter has its own newsletter sent out on a regular basis, listing events in the climate tech community, announcing opportunities, and reporting on local climate issues. The newsletter is an easy way to demonstrate the breadth of climate and to invite people across sectors to expand their horizons.",
    ],
  },
  {
    title: "Resources",
    tagline: "The guide to climate tech organizations in your city.",
    paragraphs: [
      "Starting in climate can be overwhelming, and keeping up with the changing landscape is hard even for seasoned professionals. In our city guides, we break down the different organizations, companies, and policy players in your area. Our aim is to provide a simple, centralized resource for getting up-to-speed on the climate work happening in every city.",
    ],
  },
  {
    title: "Events",
    tagline: "In-person events to expand the community.",
    paragraphs: [
      "We run regular events in each city to bring people together across sectors. While other groups may focus on a specific industry, like energy or agriculture, we cut across sectors, bringing together people from all backgrounds. We run general meetups, field trips, panels, dinners, and more. Each city runs in-person events on their own cadence, with some having multiple events per month and others just one per quarter.",
    ],
  },
  {
    title: "Venture Funding",
    paragraphs: [
      "Streetlife Ventures invests at the intersection of cities x climate. We support founders building urban climate solutions across a variety of sectors: buildings, energy, mobility and logistics, waste and water, and adaptive infrastructure.",
      "Click here if you're a startup looking to raise funds.",
    ],
  },
  {
    title: "Catalytic Ecosystem",
    paragraphs: [
      "We connect startups to government and philanthropic partners providing non-dilutive financing to help de-risk technologies and accelerate commercialization.",
    ],
  },
  {
    title: "Urban Deployment Sites",
    paragraphs: [
      "We work with founders to test, iterate, and accelerate climate technologies, in partnership with a broad network of cities, real estate developers, infrastructure groups, and OEMs.",
    ],
  },
  {
    title: "Talent Network",
    paragraphs: [
      "Our mantra: Every job is a climate job! Join the Streetlife Ventures Talent Network to learn about new opportunities in climate and get connected to jobs across the ecosystem.",
      "Click here if you're interested in transitioning to a climate job.",
    ],
  },
  {
    title: "Playbooks",
    tagline: "Start your own climate community.",
    paragraphs: [
      "We provide playbooks for anyone looking to start their own climate community events. These playbooks include what has worked for us in the past and best practices about running events and bringing people together. Our aim is to catalyze local climate communities beyond our own work and to share and provide support to anyone who wants to organize and bring together people in climate tech.",
    ],
  },
  {
    title: "Support",
    tagline: "Infrastructure to make it easy to build an ecosystem.",
    paragraphs: [
      "Building a climate tech ecosystem is a lot of work, and we know it first hand! Our goal is to make it easier. We provide the infrastructure to bring together people for in-person events, from playbooks, to help finding and securing venues, to promoting the event. We provide the basic resources to get an ecosystem started and to expand the work being done on climate tech worldwide.",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-[1300px] gap-16 px-5 py-20 sm:px-10 md:grid-cols-[1fr_2fr] md:py-28">
        <div>
          <h1 className="text-4xl font-medium">What we do</h1>
          <div className="mt-24 hidden flex-col items-start gap-3 md:flex">
            <span className="rounded bg-cream px-4 py-3 text-[15px] font-semibold">
              Climate Tech Cities
            </span>
            <span className="text-sm font-bold">x</span>
            <span className="rounded bg-cream px-4 py-3 text-[15px] font-semibold tracking-widest">
              STREETLIFE VENTURES
            </span>
          </div>
        </div>

        <div className="max-w-2xl space-y-14">
          {programs.map((program) => (
            <article key={program.title}>
              <h2 className="flex items-center gap-4 text-2xl font-medium">
                <svg
                  viewBox="0 0 20 12"
                  className="h-3 w-5 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M2 10 L10 2 L18 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                {program.title}
              </h2>
              <div className="mt-5 pl-9">
                {program.tagline && (
                  <p className="text-[15px] font-bold">{program.tagline}</p>
                )}
                {program.paragraphs.map((text) => (
                  <p
                    key={text.slice(0, 32)}
                    className="mt-4 text-[15px] leading-relaxed"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
