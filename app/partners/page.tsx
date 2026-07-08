import type { Metadata } from "next";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Our Partners | Climate Tech Cities",
};

const partners = [
  "My Climate Journey",
  "Work on Climate",
  "Climatebase",
  "SOSV",
  "Climate Draft",
  "Newlab",
  "Climate Reality",
];

export default function PartnersPage() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-10 md:py-28">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="max-w-xl">
            <h1 className="text-4xl font-medium sm:text-5xl">
              It&apos;s a big tent
            </h1>
            <p className="mt-8 text-[19px] leading-relaxed sm:text-[21px]">
              Our chapters bring together experienced climate professionals
              with newcomers to build a strong network across sectors that
              helps people expand their work within climate. At any given
              event, you&apos;ll meet scientists, energy pros, artists,
              policymakers, entrepreneurs, activists, and investors. We&apos;re
              a big tent community for anyone working in or interested in a
              climate-adjacent field.
            </p>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-6 h-56 w-56 rounded-[55%_45%_60%_40%/50%_60%_40%_50%] bg-lavender"
            />
            <PlaceholderImage
              variant="people"
              alt="Rooftop community event at sunset"
              tone="cream"
              className="relative mx-auto aspect-[3/4] w-full max-w-md rounded-md"
            />
          </div>
        </div>

        <ul className="mt-24 flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
          {partners.map((name) => (
            <li
              key={name}
              className="text-lg font-bold tracking-wide text-forest/80"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
