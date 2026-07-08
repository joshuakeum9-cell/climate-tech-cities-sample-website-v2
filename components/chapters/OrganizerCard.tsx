import type { Organizer } from "@/lib/chapter-pages";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export function OrganizerCard({
  organizer,
  index,
}: {
  organizer: Organizer;
  index: number;
}) {
  return (
    <div className="text-center">
      <PlaceholderImage
        variant="portrait"
        alt={`Portrait placeholder for ${organizer.name}`}
        tone={(["cream", "leaf", "lavender"] as const)[index % 3]}
        className="mx-auto aspect-square w-full max-w-[180px] rounded-md"
      />
      <h4 className="mt-3 text-[15px] font-semibold">{organizer.name}</h4>
      <p className="mt-0.5 text-[13px] text-forest-soft">{organizer.role}</p>
    </div>
  );
}
