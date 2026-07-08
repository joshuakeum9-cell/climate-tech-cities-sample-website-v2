import { Button } from "@/components/Button";
import { Wave } from "@/components/Wave";
import { START_A_CHAPTER_FORM_URL } from "@/lib/links";

/** Substack newsletter CTA. Links to the chapter's Substack when the city
 *  has one in lib/chapter-pages.ts; falls back to a placeholder otherwise. */
export function NewsletterCTA({
  city,
  url = "#",
}: {
  city: string;
  url?: string;
}) {
  return (
    <div className="rounded-md bg-cream px-7 py-8 sm:px-10">
      <h3 className="text-2xl font-medium">Stay in the Loop</h3>
      <p className="mt-3 max-w-lg text-[15px] leading-relaxed">
        The {city} chapter newsletter lists events in the climate tech
        community, announces opportunities, and reports on local climate
        issues.
      </p>
      <div className="mt-6">
        <Button href={url}>Subscribe on Substack</Button>
      </div>
    </div>
  );
}

/** Full-width "Start a Chapter" band, styled like the home page's dark
 *  feature band. Placeholder behavior for now: no form is connected. */
export function StartChapterCTA() {
  return (
    <>
      <Wave fill="#25331a" />
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-[900px] px-5 py-14 text-center sm:px-10">
          <h2 className="text-3xl font-medium">
            Don&apos;t See Your City?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-cream/90">
            We provide the playbooks, support, and infrastructure to help you
            bring together the climate tech community where you live.
          </p>
          <div className="mt-8">
            <a
              href={START_A_CHAPTER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-[3px] border border-cream px-6 py-2.5 text-[15px] text-cream transition-colors hover:bg-cream hover:text-forest"
            >
              Start a Chapter
            </a>
          </div>
        </div>
      </section>
      <Wave fill="#25331a" flip />
    </>
  );
}
