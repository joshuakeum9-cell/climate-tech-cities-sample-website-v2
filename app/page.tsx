import Link from "next/link";
import { Button } from "@/components/Button";
import { GeoIcon } from "@/components/GeoIcon";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Wave } from "@/components/Wave";
import { chapters } from "@/lib/chapters";
import { START_A_CHAPTER_FORM_URL } from "@/lib/links";

const darkFeatures = [
  {
    icon: "events" as const,
    title: "In-person events",
    description:
      "Discover climate tech events in your city. Attend one of our meetups, promote your own, or go to one of dozens of other events listed on our newsletter.",
  },
  {
    icon: "community" as const,
    title: "Local community",
    description:
      "Join a community of people working on climate where you live. Share knowledge, build friendships, and grow the local ecosystem together.",
  },
  {
    icon: "resources" as const,
    title: "City resources",
    description:
      "Navigate the dozens of groups and organizations working on climate in your city and find out how they can help your project or how you can get involved.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 sm:px-10 md:grid-cols-2 md:py-24">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-6 h-40 w-64 rounded-[48%_52%_60%_40%/55%_45%_55%_45%] bg-forest"
            />
            <PlaceholderImage
              variant="people"
              alt="Group photo of Climate Tech Cities community members"
              className="relative aspect-[4/3] w-full rounded-md"
            />
          </div>
          <div className="max-w-xl">
            <h1 className="text-4xl leading-tight font-medium sm:text-5xl">
              Climate tech events, resources, and community
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed">
              We&apos;re the largest place-based climate tech community in the
              world -{" "}
              <a
                href="#"
                className="underline decoration-1 underline-offset-4"
              >
                connect
              </a>{" "}
              with others working on climate in your city.
            </p>
            <div className="mt-8">
              <Button href="#">Join the community</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Startup and Talent Network */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-10 md:grid-cols-[1fr_2fr] md:py-24">
          <div>
            <h2 className="mb-10 text-3xl font-medium">
              Startup and Talent Network
            </h2>
            <div className="flex flex-col items-start gap-3">
              <span className="rounded bg-paper px-4 py-3 text-[15px] font-semibold">
                Climate Tech Cities
              </span>
              <span className="text-sm font-bold">x</span>
              <span className="rounded bg-paper px-4 py-3 text-[15px] font-semibold tracking-widest">
                STREETLIFE VENTURES
              </span>
            </div>
          </div>
          <div className="max-w-2xl">
            <p className="text-[17px] leading-relaxed">
              Climate Tech Cities and{" "}
              <a href="#" className="underline underline-offset-4">
                Streetlife Ventures
              </a>{" "}
              are launching new platforms to support climate founders, funders,
              and career transitioners!
            </p>
            <p className="mt-5 text-[17px] leading-relaxed">
              Streetlife Ventures invests in the $5 trillion market opportunity
              at the intersection of cities and climate. With 30+ years of
              urban experience and a 25,000+ member platform of climate
              founders, operators, policymakers, and emerging talent, we help
              build and scale the companies shaping more sustainable cities.
              The firm invests in pre-seed and seed startups across buildings,
              energy, mobility and logistics, waste and water, and adaptive
              infrastructure.
            </p>
            <p className="mt-5 text-[17px] leading-relaxed">
              Beyond capital, Streetlife partners with cities, real estate
              developers, and infrastructure groups to de-risk urban climate
              solutions and accelerate startups&apos; path to
              commercialization. Our mission: to advance cities, investing in
              the people and places they call home.
            </p>
            <p className="mt-5 text-[17px] leading-relaxed">
              We&apos;re the ultimate optimists and are excited to work with
              great companies raising money for their groundbreaking ideas,
              great investors looking to support with capital, and great talent
              living the mantra that every job is a climate job. Let&apos;s
              build the future we want to live in!
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="pill" href="#">
                I&apos;m a climate startup looking to raise
              </Button>
              <Button variant="pill" href="#">
                I&apos;m a climate talent looking to transition
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-5 px-5 py-16 sm:px-10 md:grid-cols-4">
          {(["people", "scene", "people", "scene"] as const).map(
            (variant, i) => (
              <PlaceholderImage
                key={i}
                variant={variant}
                alt="Community event photo"
                tone={i % 2 ? "cream" : "leaf"}
                className="aspect-square w-full rounded-md"
              />
            ),
          )}
        </div>
      </section>

      {/* Big-tent statement */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-5 py-12 sm:px-10 md:grid-cols-[3fr_2fr] md:py-20">
          <h2 className="text-3xl leading-snug font-medium sm:text-4xl">
            Climate Tech Cities brings together entrepreneurs, activists,
            scientists, investors, artists, policymakers, academics,
            jobseekers, and climate leaders in cities around the world.
          </h2>
          <div className="md:pt-3">
            <p className="text-[16px] leading-relaxed">
              We are a big-tent organization that connects professionals across
              industries to take climate action in their own streets and
              neighborhoods. We send weekly newsletters and host topical
              panels, happy hours, site visits to infrastructure projects, and
              more.
            </p>
            <p className="mt-5 text-[16px] leading-relaxed">
              Since 2021, we have welcomed newcomers and old hands in climate
              to work on, share, and grow as we build solutions towards a
              decarbonized future.{" "}
              <Link
                href="/chapters"
                className="underline decoration-1 underline-offset-4 hover:text-coral"
              >
                Join your local chapter today!
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Discover, Subscribe, Engage */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-10">
          <h2 className="mb-10 text-3xl font-medium">
            Discover, Subscribe, Engage.
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4">
            {chapters.map((chapter, i) => (
              <div key={chapter.name}>
                <PlaceholderImage
                  variant="skyline"
                  alt={`${chapter.name} skyline placeholder`}
                  tone={(["leaf", "cream", "lavender"] as const)[i % 3]}
                  className="aspect-[4/3] w-full rounded-md"
                />
                <p className="mt-3 text-[16px]">{chapter.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href={START_A_CHAPTER_FORM_URL}>Start a Chapter</Button>
            <Button href="/chapters">Learn More About Our Chapters</Button>
          </div>
        </div>
      </section>

      {/* Dark feature band */}
      <Wave fill="#25331a" />
      <section className="bg-forest text-cream">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-16 sm:px-10 md:grid-cols-3 md:py-20">
          {darkFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <GeoIcon name={feature.icon} dark className="h-20 w-20" />
              <h2 className="mt-6 text-xl font-medium">{feature.title}</h2>
              <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-cream/90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Wave fill="#25331a" flip />

      {/* Newsletter */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-16 sm:px-10 md:grid-cols-2 md:py-24">
          <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
            <PlaceholderImage
              variant="scene"
              alt="Community gathering photo"
              tone="lavender"
              className="absolute left-0 top-0 h-44 w-44 rounded-full sm:h-52 sm:w-52"
            />
            <PlaceholderImage
              variant="skyline"
              alt="City skyline photo"
              tone="leaf"
              className="absolute bottom-0 right-0 h-48 w-48 rounded-full sm:h-56 sm:w-56"
            />
          </div>
          <div>
            <h2 className="text-3xl font-medium">Sign up for our newsletter</h2>
            <p className="mt-4 text-[16px] leading-relaxed">
              Sign up to get weekly updates about climate tech events,
              resources, and community.
            </p>
            <form className="mt-7 flex max-w-md flex-wrap gap-3">
              <label className="sr-only" htmlFor="newsletter-email">
                Email Address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email Address"
                className="min-w-0 flex-1 rounded-[3px] border border-line bg-cream px-4 py-2.5 text-[15px] placeholder:text-forest/50 focus:border-forest focus:outline-none"
              />
              <Button type="submit">Sign Up</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
