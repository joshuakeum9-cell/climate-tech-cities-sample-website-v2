import Link from "next/link";

export type SidebarItem = {
  label: string;
  /** When set, the row renders as a real link to the resource page.
   *  When absent, the row is a non-clickable placeholder (used for cities
   *  whose resource pages don't exist yet). */
  href?: string;
  /** Highlights the row for the page the user is currently on */
  active?: boolean;
};

const chevron = (
  <svg
    viewBox="0 0 8 14"
    className="h-3 w-2 shrink-0 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
    aria-hidden="true"
  >
    <path
      d="M1 1 L7 7 L1 13"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const rowClass =
  "group flex items-center justify-between gap-3 rounded-[3px] px-2 py-2 text-[15px] transition-colors hover:bg-paper";

/** Sidebar navigation module for a chapter's resource categories.
 *  The title establishes the city context once; the categories beneath it
 *  are generic and indented to read as children of the title. */
export function ResourceSidebar({
  city,
  items,
}: {
  city: string;
  items: SidebarItem[];
}) {
  const hasLinks = items.some((item) => item.href);

  return (
    <aside aria-label={`${city} resources`} className="lg:sticky lg:top-24">
      <div className="rounded-md bg-cream px-6 py-6">
        <h2 className="text-[17px] font-semibold">{city} Resources</h2>
        <ul className="mt-4 space-y-1 pl-3">
          {items.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={`${rowClass} ${item.active ? "bg-paper" : ""}`}
                >
                  <span
                    className={
                      item.active
                        ? "font-semibold text-coral"
                        : "transition-colors group-hover:text-coral"
                    }
                  >
                    {item.label}
                  </span>
                  {chevron}
                </Link>
              ) : (
                <div className={`${rowClass} cursor-pointer`}>
                  <span className="transition-colors group-hover:text-coral">
                    {item.label}
                  </span>
                  {chevron}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {!hasLinks && (
        <p className="mt-3 px-1 text-[12px] text-forest/50">
          Detailed resource pages coming soon.
        </p>
      )}
    </aside>
  );
}
