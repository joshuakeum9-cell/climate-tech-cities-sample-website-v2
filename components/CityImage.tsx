/** Illustrated stand-ins for photography, drawn in the CTC palette.
 *
 *  These are deliberate artwork rather than grey placeholder boxes: each one
 *  shows the kind of image that belongs in the slot (a recognizable city
 *  skyline, a meetup scene, a panel) so a real photo can be sourced to match
 *  and dropped in later. */

type Tone = "leaf" | "lavender" | "cream" | "forest";

const SKY: Record<Tone, string> = {
  leaf: "#e0e8d2",
  lavender: "#f0e2ff",
  cream: "#f5f4e9",
  forest: "#25331a",
};

const INK = "#25331a";
const MID = "#6f8258";
const LIGHT = "#c8dcb0";
const CORAL = "#ef653a";

export type CitySlug =
  | "new-york"
  | "london"
  | "boston"
  | "san-francisco"
  | "los-angeles"
  | "washington-dc"
  | "san-diego"
  | "seattle";

/** City skylines, drawn from each city's most recognizable silhouette. */
function Skyline({ city }: { city: CitySlug }) {
  switch (city) {
    case "new-york": // Empire State + Chrysler + One WTC
      return (
        <g>
          <rect x="14" y="150" width="26" height="70" fill={MID} />
          <rect x="44" y="120" width="20" height="100" fill={INK} />
          <path d="M96 60 L104 60 L104 44 L100 30 L96 44 Z" fill={INK} />
          <rect x="88" y="60" width="24" height="160" fill={INK} />
          <rect x="82" y="96" width="36" height="124" fill={INK} />
          <path d="M140 78 L152 52 L164 78 Z" fill={MID} />
          <rect x="140" y="78" width="24" height="142" fill={MID} />
          <path d="M188 96 L200 40 L206 96 Z" fill={INK} />
          <rect x="186" y="96" width="26" height="124" fill={INK} />
          <rect x="222" y="140" width="24" height="80" fill={MID} />
          <rect x="252" y="166" width="20" height="54" fill={LIGHT} />
        </g>
      );
    case "london": // Big Ben + The Shard + London Eye
      return (
        <g>
          <rect x="16" y="160" width="26" height="60" fill={MID} />
          <path d="M60 92 L70 66 L80 92 Z" fill={INK} />
          <rect x="60" y="92" width="20" height="128" fill={INK} />
          <rect x="56" y="104" width="28" height="16" fill={LIGHT} />
          <circle cx="132" cy="140" r="38" fill="none" stroke={MID} strokeWidth="5" />
          <circle cx="132" cy="140" r="6" fill={MID} />
          <rect x="128" y="140" width="8" height="80" fill={MID} />
          <path d="M196 62 L214 220 L178 220 Z" fill={INK} />
          <rect x="236" y="150" width="24" height="70" fill={MID} />
          <rect x="266" y="172" width="18" height="48" fill={LIGHT} />
        </g>
      );
    case "boston": // Custom House tower + Hancock
      return (
        <g>
          <rect x="18" y="164" width="26" height="56" fill={LIGHT} />
          <path d="M74 80 L84 58 L94 80 Z" fill={INK} />
          <rect x="72" y="80" width="24" height="140" fill={INK} />
          <rect x="66" y="96" width="36" height="18" fill={MID} />
          <rect x="124" y="72" width="34" height="148" fill={MID} />
          <rect x="170" y="112" width="26" height="108" fill={INK} />
          <rect x="208" y="146" width="28" height="74" fill={LIGHT} />
          <rect x="246" y="170" width="22" height="50" fill={MID} />
        </g>
      );
    case "san-francisco": // Golden Gate + Transamerica
      return (
        <g>
          <path d="M0 150 Q80 108 160 150" fill="none" stroke={CORAL} strokeWidth="4" />
          <rect x="42" y="96" width="10" height="124" fill={CORAL} />
          <rect x="140" y="96" width="10" height="124" fill={CORAL} />
          <path d="M47 108 L47 150 M97 130 L97 150 M145 108 L145 150" stroke={CORAL} strokeWidth="3" />
          <rect x="0" y="150" width="200" height="5" fill={CORAL} />
          <path d="M212 66 L228 220 L196 220 Z" fill={INK} />
          <rect x="244" y="150" width="24" height="70" fill={MID} />
          <rect x="274" y="176" width="18" height="44" fill={LIGHT} />
        </g>
      );
    case "los-angeles": // Palms + downtown + port cranes
      return (
        <g>
          <path d="M28 220 L28 140" stroke={MID} strokeWidth="6" />
          <path d="M28 140 q-20 -14 -30 -4 M28 140 q20 -14 30 -4 M28 140 q-8 -22 -22 -26 M28 140 q8 -22 22 -26" stroke={MID} strokeWidth="5" fill="none" />
          <rect x="86" y="108" width="26" height="112" fill={INK} />
          <rect x="120" y="86" width="22" height="134" fill={INK} />
          <rect x="150" y="126" width="26" height="94" fill={MID} />
          <path d="M212 220 L212 100 L268 100" stroke={CORAL} strokeWidth="5" fill="none" />
          <path d="M212 118 L246 100" stroke={CORAL} strokeWidth="4" />
          <rect x="262" y="100" width="6" height="34" fill={CORAL} />
        </g>
      );
    case "washington-dc": // Capitol dome + Washington Monument
      return (
        <g>
          <path d="M64 220 L64 132 L112 132 L112 220 Z" fill={MID} />
          <path d="M72 132 q16 -46 32 0 Z" fill={INK} />
          <rect x="84" y="72" width="8" height="16" fill={INK} />
          <path d="M52 220 L52 156 L64 156 M124 220 L124 156 L112 156" stroke={MID} strokeWidth="5" fill="none" />
          <path d="M178 220 L182 84 L194 60 L206 84 L210 220 Z" fill={INK} />
          <rect x="244" y="158" width="24" height="62" fill={LIGHT} />
        </g>
      );
    case "san-diego": // Coronado bridge + sailboat + coastline
      return (
        <g>
          <path d="M0 156 Q90 100 210 148" fill="none" stroke={MID} strokeWidth="5" />
          <rect x="60" y="132" width="7" height="88" fill={MID} />
          <rect x="140" y="120" width="7" height="100" fill={MID} />
          <path d="M236 176 L236 96 L282 168 Z" fill={INK} />
          <path d="M232 176 L232 120 L204 176 Z" fill={MID} />
          <path d="M0 196 q40 -12 80 0 t80 0 t80 0 t60 0" stroke={LIGHT} strokeWidth="5" fill="none" />
          <path d="M0 214 q40 -12 80 0 t80 0 t80 0 t60 0" stroke={LIGHT} strokeWidth="5" fill="none" />
        </g>
      );
    case "seattle": // Space Needle + Rainier + firs
      return (
        <g>
          <path d="M8 168 L48 112 L74 148 L96 122 L140 168 Z" fill={LIGHT} />
          <path d="M186 220 L192 128 L180 128 L198 96 L216 128 L204 128 L210 220 Z" fill={INK} />
          <ellipse cx="198" cy="96" rx="34" ry="10" fill={INK} />
          <rect x="194" y="60" width="8" height="30" fill={INK} />
          <path d="M252 220 L252 176 L238 176 L252 140 L266 176 L252 176" fill={MID} />
          <path d="M286 220 L286 186 L274 186 L286 156 L298 186 L286 186" fill={MID} />
        </g>
      );
  }
}

/** Skyline image for a given city. */
export function CitySkyline({
  city,
  alt,
  tone = "cream",
  className = "",
}: {
  city: CitySlug;
  alt: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`overflow-hidden ${className}`}
      style={{ backgroundColor: SKY[tone] }}
    >
      <svg
        viewBox="0 0 300 220"
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full"
        aria-hidden="true"
      >
        <Skyline city={city} />
      </svg>
    </div>
  );
}

type SceneName = "meetup" | "panel" | "portrait" | "sitevisit";

/** Community scenes: what the photo in this slot should show. */
function SceneArt({ name }: { name: SceneName }) {
  switch (name) {
    case "meetup": // standing group, drinks, string lights
      return (
        <g>
          <path d="M0 40 q40 22 80 0 t80 0 t80 0 t60 0" stroke={MID} strokeWidth="2" fill="none" />
          {[30, 70, 110, 150, 190, 230, 270].map((x, i) => (
            <circle key={x} cx={x} cy={46 + (i % 2) * 6} r="4" fill={CORAL} />
          ))}
          {[
            [42, 132], [92, 124], [146, 134], [200, 122], [252, 132],
          ].map(([x, y], i) => (
            <g key={x} fill={i % 2 ? MID : INK}>
              <circle cx={x} cy={y} r="17" />
              <path d={`M${x - 28} 220 q0 -58 28 -58 q28 0 28 58 Z`} />
            </g>
          ))}
        </g>
      );
    case "panel": // seated audience facing a speaker
      return (
        <g>
          <g fill={INK}>
            <circle cx="52" cy="96" r="16" />
            <path d="M28 190 q0 -56 24 -56 q24 0 24 56 Z" />
          </g>
          <rect x="90" y="150" width="4" height="70" fill={MID} />
          {[130, 172, 214, 256].map((x, i) => (
            <g key={x} fill={i % 2 ? MID : LIGHT}>
              <circle cx={x} cy={140} r="15" />
              <path d={`M${x - 23} 220 q0 -50 23 -50 q23 0 23 50 Z`} />
            </g>
          ))}
        </g>
      );
    case "portrait":
      return (
        <g fill={MID}>
          <circle cx="150" cy="86" r="40" />
          <path d="M74 220 q0 -74 76 -74 q76 0 76 74 Z" />
        </g>
      );
    case "sitevisit": // hard-hat group in front of infrastructure
      return (
        <g>
          <rect x="180" y="70" width="46" height="150" fill={LIGHT} />
          <rect x="234" y="104" width="34" height="116" fill={MID} />
          <path d="M176 70 L226 70 L214 50 L188 50 Z" fill={MID} />
          {[46, 96, 140].map((x, i) => (
            <g key={x} fill={i === 1 ? INK : MID}>
              <circle cx={x} cy={128} r="16" />
              <path d={`M${x - 12} 116 a12 12 0 0 1 24 0 Z`} fill={CORAL} />
              <path d={`M${x - 25} 220 q0 -54 25 -54 q25 0 25 54 Z`} />
            </g>
          ))}
        </g>
      );
  }
}

/** Square slot for a city's chapter logo. Uses the CTC color-block motif so
 *  it reads as a brand mark rather than a photo; swap for the real chapter
 *  logo when one exists. */
export function ChapterLogoSlot({
  city,
  className = "",
}: {
  city: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${city} chapter logo placeholder`}
      className={`flex flex-col items-center justify-center gap-4 bg-paper ring-1 ring-line ${className}`}
    >
      <svg viewBox="0 0 120 100" className="w-1/2" aria-hidden="true">
        <rect x="4" y="6" width="66" height="66" rx="3" fill="#f0e2ff" />
        <rect x="4" y="60" width="24" height="34" fill={CORAL} />
        <rect x="28" y="28" width="24" height="66" fill={LIGHT} />
        <rect x="52" y="14" width="28" height="80" fill={INK} />
        <rect x="80" y="46" width="16" height="48" fill={LIGHT} />
      </svg>
      <span className="px-3 text-center text-[11px] uppercase tracking-wide text-forest/50">
        {city} Chapter Logo
      </span>
    </div>
  );
}

export function SceneImage({
  scene,
  alt,
  tone = "leaf",
  className = "",
}: {
  scene: SceneName;
  alt: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`overflow-hidden ${className}`}
      style={{ backgroundColor: SKY[tone] }}
    >
      <svg
        viewBox="0 0 300 220"
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full"
        aria-hidden="true"
      >
        <SceneArt name={scene} />
      </svg>
    </div>
  );
}
