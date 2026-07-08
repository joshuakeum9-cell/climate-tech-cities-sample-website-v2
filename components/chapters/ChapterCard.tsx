import Link from "next/link";
import type { Chapter } from "@/lib/chapters";
import { PlaceholderImage } from "@/components/PlaceholderImage";

const tones = ["leaf", "lavender", "cream"] as const;

/** Cards link to /chapters/[slug] only when the chapter has a page
 *  (a `slug` in lib/chapters.ts); the rest stay purely visual. */
export function ChapterCard({
  chapter,
  index,
}: {
  chapter: Chapter;
  index: number;
}) {
  const card = (
    <article>
      <PlaceholderImage
        variant="skyline"
        alt={`${chapter.name} chapter placeholder image`}
        tone={tones[index % tones.length]}
        className="aspect-[4/3] w-full rounded-md"
      />
      <h3
        className={`mt-4 text-[17px] font-semibold ${
          chapter.slug
            ? "underline decoration-1 underline-offset-4 group-hover:text-coral"
            : ""
        }`}
      >
        {chapter.name}
      </h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-forest-soft">
        {chapter.description}
      </p>
    </article>
  );

  if (chapter.slug) {
    return (
      <Link
        href={`/chapters/${chapter.slug}`}
        className="group block"
        aria-label={`${chapter.name} chapter page`}
      >
        {card}
      </Link>
    );
  }

  return card;
}
