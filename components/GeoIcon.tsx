/** Geometric shape-cluster icons in the style of the dark feature band on
 *  the home page (circle clusters, quartered circles, triangle + square). */
export function GeoIcon({
  name,
  className = "h-16 w-16",
  dark = false,
}: {
  name:
    | "events"
    | "founders"
    | "investors"
    | "network"
    | "mentorship"
    | "innovation"
    | "community"
    | "resources";
  className?: string;
  dark?: boolean;
}) {
  const primary = dark ? "#c8dcb0" : "#25331a";
  const secondary = dark ? "#f5f4e9" : "#c8dcb0";
  const accent = dark ? "#e2bdff" : "#ef653a";

  switch (name) {
    case "events":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <circle cx="22" cy="20" r="11" fill={primary} />
          <circle cx="42" cy="20" r="11" fill={primary} />
          <circle cx="22" cy="42" r="11" fill={primary} />
          <circle cx="42" cy="42" r="11" fill={accent} />
        </svg>
      );
    case "community":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path d="M32 8 A24 24 0 0 1 56 32 L32 32 Z" fill={primary} />
          <path d="M56 32 A24 24 0 0 1 32 56 L32 32 Z" fill={secondary} />
          <path d="M32 56 A24 24 0 0 1 8 32 L32 32 Z" fill={primary} />
          <path d="M8 32 A24 24 0 0 1 32 8 L32 32 Z" fill={secondary} />
        </svg>
      );
    case "resources":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path d="M32 6 L52 30 L12 30 Z" fill={primary} />
          <rect x="14" y="34" width="24" height="24" fill={secondary} />
          <circle cx="46" cy="46" r="12" fill={primary} />
        </svg>
      );
    case "founders":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <circle cx="32" cy="18" r="12" fill={primary} />
          <path d="M32 32 L50 58 L14 58 Z" fill={accent} />
        </svg>
      );
    case "investors":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect x="10" y="34" width="12" height="24" fill={secondary} />
          <rect x="26" y="22" width="12" height="36" fill={primary} />
          <rect x="42" y="8" width="12" height="50" fill={accent} />
        </svg>
      );
    case "network":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <line x1="16" y1="16" x2="48" y2="30" stroke={primary} strokeWidth="3" />
          <line x1="48" y1="30" x2="22" y2="50" stroke={primary} strokeWidth="3" />
          <line x1="16" y1="16" x2="22" y2="50" stroke={primary} strokeWidth="3" />
          <circle cx="16" cy="16" r="9" fill={primary} />
          <circle cx="48" cy="30" r="9" fill={accent} />
          <circle cx="22" cy="50" r="9" fill={secondary} />
        </svg>
      );
    case "mentorship":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <circle cx="22" cy="26" r="14" fill={primary} />
          <circle cx="44" cy="40" r="10" fill={accent} />
        </svg>
      );
    case "innovation":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <circle cx="32" cy="26" r="16" fill={accent} />
          <rect x="24" y="44" width="16" height="6" fill={primary} />
          <rect x="26" y="52" width="12" height="5" fill={primary} />
        </svg>
      );
  }
}
