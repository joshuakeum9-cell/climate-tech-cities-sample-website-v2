import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { VOLUNTEER_FORM_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "About | Climate Tech Cities",
};

const stats = [
  { value: "8", label: "cities (and counting!)", tone: "bg-lavender" },
  { value: "25,000+", label: "community members", tone: "bg-leaf" },
  { value: "200+", label: "monthly events", tone: "bg-coral" },
];

const team = [
  { name: "Alec Turnbull", role: "Co Founder" },
  { name: "Sonam Velani", role: "Co Founder" },
  { name: "Clara Zou", role: "Operations" },
  { name: "Edoardo Italia", role: "Events" },
  { name: "Ian Go", role: "Tech" },
  { name: "Kathy Zhang", role: "Editorial" },
  { name: "Lisa Mallner", role: "Events" },
  { name: "Makenzie George", role: "Partnerships" },
  { name: "Michael Henderson", role: "Tech" },
  { name: "Rafid Ahmed", role: "Tech" },
  { name: "Samantha Grassle", role: "Partnerships" },
  { name: "Sarang Mani", role: "Partnerships" },
  { name: "Tamar Honig", role: "Editorial" },
  { name: "Petya Georgieva Miller", role: "Marketing" },
  { name: "Ariel Simon", role: "Design" },
];

export default function AboutPage() {
  return (
    <>
      {/* Clean text-only About Us section, per design feedback: no hero
          photography. Left-aligned to match how every other page opens
          (Home, Chapters, Partners, Programs); the centered treatment is
          reserved for closing CTA bands. */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 pt-16 sm:px-10 md:pt-24">
          <p className="text-[15px]">About Us</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-tight font-medium sm:text-5xl">
            A global network of local communities
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed">
            We&apos;re all about showing off how building for climate is about
            making new, better futures. People are out there doing amazing work
            in every sector you can imagine; we&apos;re the glue that brings
            them together: connecting fashion designers, fusion physicists,
            policy powerhouses, and everyone else in between.
          </p>
        </div>
      </section>

      {/* Our impact */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-20 sm:px-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium">Our impact</h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed">
              Since starting out in 2021, we&apos;ve continued to create events
              that welcome newcomers and old hands in climate to work on,
              share, and grow as we build towards a decarbonized future.
            </p>
            <div className="mt-7">
              <Button href="#">Learn more</Button>
            </div>
          </div>
          <ul className="space-y-6">
            {stats.map((stat) => (
              <li key={stat.label} className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className={`h-10 w-10 shrink-0 rounded ${stat.tone}`}
                />
                <span className="text-[17px]">
                  <strong className="font-bold">{stat.value}</strong>{" "}
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Community stats highlight */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1000px] px-5 pb-20 sm:px-10">
          <div className="rounded-[40px_60px_50px_40px/60px_40px_60px_50px] bg-cream px-8 py-12 sm:px-14">
            <p className="text-2xl leading-relaxed font-medium sm:text-3xl">
              <mark className="bg-lavender px-1">60%</mark> of our community
              already works in climate,{" "}
              <mark className="bg-leaf px-1">28%</mark> are actively looking to
              transition their careers, and{" "}
              <mark className="bg-coral px-1 text-paper">12%</mark> are just
              curious to meet people and learn more.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[14px]">
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="h-3 w-3 rounded-sm bg-lavender" />
                Work in climate
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="h-3 w-3 rounded-sm bg-leaf" />
                Transitioning into climate
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="h-3 w-3 rounded-sm bg-coral" />
                Do not work in climate
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Submit events + global network */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] space-y-14 px-5 pb-20 sm:px-10">
          <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
            <h2 className="text-2xl font-medium">Submit Events</h2>
            <p className="text-[16px] leading-relaxed">
              We know all of you are cooking up great events across cities that
              highlight the latest and greatest in our collective effort to
              save our city, and our planet. We would love to spread the word.
              Please{" "}
              <a href="#" className="underline underline-offset-4">
                share
              </a>{" "}
              any event details and we&apos;ll add them to the list!
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
            <h2 className="text-2xl font-medium">
              A Global Network of Local Communities
            </h2>
            <p className="text-[16px] leading-relaxed">
              We are expanding! We started as an 8-person dinner and now have
              over 9,000 members in our community. We&apos;ve had people
              across the world reach out to us to start their own chapters, so
              we&apos;re launching a new Climate Tech Cities organization this
              year! If you have friends interested in becoming chapter leads,
              please share the word. Here&apos;s to a global network of local
              communities making a positive impact!
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 pb-24 sm:px-10">
          <h2 className="mb-12 text-center text-3xl font-medium">
            Meet the Team
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
            {team.map((member, i) => (
              <div key={member.name} className="text-center">
                <PlaceholderImage
                  variant="portrait"
                  alt={`Portrait of ${member.name}`}
                  tone={(["cream", "leaf", "lavender"] as const)[i % 3]}
                  className="mx-auto aspect-square w-full max-w-[240px] rounded-md"
                />
                <h3 className="mt-4 text-[16px] font-semibold">
                  {member.name} <span className="font-normal">| {member.role}</span>
                </h3>
                <p className="mx-auto mt-2 max-w-[260px] text-[13px] leading-relaxed text-forest-soft">
                  Placeholder bio: passionate about building local climate
                  communities and connecting people across the ecosystem.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[900px] px-5 py-16 text-center sm:px-10 md:py-24">
          <h2 className="text-3xl font-medium sm:text-4xl">
            Come Build the Global Community
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed">
            Climate Tech Cities runs on volunteers. Our chapters, newsletters,
            events, and city guides are all built by people who care about
            growing the climate community where they live. Whether you want to
            run events, write, build partnerships, or help behind the scenes,
            come work with us and help build the global community.
          </p>
          <div className="mt-8">
            <Button href={VOLUNTEER_FORM_URL}>Volunteer With Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
