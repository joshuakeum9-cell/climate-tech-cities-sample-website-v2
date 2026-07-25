import type { ChapterEvent } from "@/lib/chapter-pages";
import { SceneImage } from "@/components/CityImage";

const tones = ["leaf", "cream", "lavender"] as const;

/** Maps the event image hint to the scene illustration that shows what a
 *  real photo in this slot should depict. */
const scenes = {
  people: "meetup",
  scene: "panel",
  skyline: "sitevisit",
} as const;

export function EventCard({
  event,
  index,
}: {
  event: ChapterEvent;
  index: number;
}) {
  return (
    <article className="overflow-hidden rounded-md border border-line bg-paper">
      <SceneImage
        scene={scenes[event.imageVariant]}
        alt={`Illustration for ${event.title}`}
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
