export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="2" y="2" width="26" height="26" rx="2" fill="#e2bdff" />
      <rect x="2" y="24" width="10" height="12" fill="#ef653a" />
      <rect x="12" y="12" width="9" height="26" fill="#c8dcb0" />
      <rect x="21" y="6" width="11" height="32" fill="#25331a" />
      <rect x="32" y="20" width="6" height="18" fill="#c8dcb0" />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span
        className={`text-[13px] font-semibold leading-[1.15] ${
          inverted ? "text-paper" : "text-forest"
        }`}
      >
        Climate
        <br />
        Tech
        <br />
        Cities
      </span>
    </span>
  );
}
