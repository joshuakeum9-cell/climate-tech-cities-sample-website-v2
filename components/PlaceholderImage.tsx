type Variant = "people" | "skyline" | "portrait" | "scene";

type PlaceholderImageProps = {
  variant?: Variant;
  alt: string;
  className?: string;
  /** Accent tint behind the silhouette */
  tone?: "leaf" | "lavender" | "cream";
  /** Text shown inside the placeholder block */
  label?: string;
};

const tones = {
  leaf: "bg-leaf-soft",
  lavender: "bg-lavender/40",
  cream: "bg-cream",
} as const;

function Silhouette({ variant }: { variant: Variant }) {
  const fill = "rgb(37 51 26 / 0.28)";
  switch (variant) {
    case "people":
      return (
        <svg viewBox="0 0 120 60" className="w-3/4" aria-hidden="true">
          {[18, 44, 70, 96].map((x, i) => (
            <g key={x} fill={fill}>
              <circle cx={x} cy={22 + (i % 2) * 3} r="7" />
              <path
                d={`M${x - 11} 60 q0 -16 11 -16 q11 0 11 16 Z`}
              />
            </g>
          ))}
        </svg>
      );
    case "portrait":
      return (
        <svg viewBox="0 0 60 60" className="w-1/2" aria-hidden="true">
          <g fill={fill}>
            <circle cx="30" cy="22" r="11" />
            <path d="M10 60 q0 -22 20 -22 q20 0 20 22 Z" />
          </g>
        </svg>
      );
    case "skyline":
      return (
        <svg viewBox="0 0 120 60" className="w-3/4" aria-hidden="true">
          <g fill={fill}>
            <rect x="6" y="26" width="14" height="34" />
            <rect x="24" y="14" width="16" height="46" />
            <rect x="44" y="32" width="12" height="28" />
            <rect x="60" y="8" width="18" height="52" />
            <rect x="82" y="24" width="14" height="36" />
            <rect x="100" y="36" width="12" height="24" />
          </g>
        </svg>
      );
    case "scene":
      return (
        <svg viewBox="0 0 120 60" className="w-3/4" aria-hidden="true">
          <g fill={fill}>
            <circle cx="24" cy="18" r="9" />
            <path d="M4 60 q0 -14 12 -14 h60 q10 0 10 14 Z" />
            <rect x="88" y="10" width="26" height="50" rx="2" />
          </g>
        </svg>
      );
  }
}

export function PlaceholderImage({
  variant = "scene",
  alt,
  className = "",
  tone = "leaf",
  label = "Placeholder Image",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex flex-col items-center justify-center gap-2 overflow-hidden ${tones[tone]} ${className}`}
    >
      <Silhouette variant={variant} />
      <span className="px-3 text-center text-[11px] uppercase tracking-wide text-forest/50">
        {label}
      </span>
    </div>
  );
}
