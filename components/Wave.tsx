/** Organic wavy divider used between sections, matching the site's
 *  hand-drawn section transitions. Renders in the color of the section
 *  it introduces; place directly above that section. */
export function Wave({
  fill,
  flip = false,
  className = "",
}: {
  fill: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-14 w-full sm:h-20 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        d="M0,64 C180,20 360,8 560,34 C760,60 900,86 1100,64 C1260,46 1360,28 1440,40 L1440,90 L0,90 Z"
        fill={fill}
      />
    </svg>
  );
}
