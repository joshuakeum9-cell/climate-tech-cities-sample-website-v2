import type { ChapterEvent } from "@/lib/chapter-pages";
import { PlaceholderImage } from "@/components/PlaceholderImage";

const tones = ["leaf", "cream", "lavender"] as const;

export function EventCard({
  event,
  index,
}: {
  event: ChapterEvent;
  index: number;
}) {
  return (
    <article className="overflow-hidden rounded-md border border-line bg-paper">
      <PlaceholderImage
        variant={event.imageVariant}
        alt={`${event.title} placeholder image`}
        tone={tones[index % tones.length]}
        className="aspect-[3/2] w-full"
      />
      <div className="p-5">
        <h4 className="text-[16px] font-semibold">{event.title}</h4>
        <p className="mt-2 text-[14px] leading-relaxed text-forest-soft">
          {event.description}
        </p>
        <dl className="mt-4 space-y-1 text-[13px] text-forest-soft">
          <div className="flex gap-2">
            <dt className="font-semibold">When:</dt>
            <dd>{event.date}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold">Where:</dt>
            <dd>{event.location}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
