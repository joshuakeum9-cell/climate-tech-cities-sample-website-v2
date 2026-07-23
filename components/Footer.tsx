import { Logo } from "./Logo";
import { START_A_CHAPTER_FORM_URL, VOLUNTEER_FORM_URL } from "@/lib/links";

const footerColumns = [
  {
    heading: "Startup and Talent Network",
    links: [
      { label: "Climate startups looking to raise", href: "#" },
      { label: "Climate talent looking to transition", href: "#" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Start a Chapter", href: START_A_CHAPTER_FORM_URL },
      { label: "Volunteer", href: VOLUNTEER_FORM_URL },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-cream">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
        </div>
        {footerColumns.map((col) => (
          <div key={col.heading}>
            <h2 className="mb-4 text-[15px] font-bold">{col.heading}</h2>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li
                  key={link.label}
                  className="flex items-start gap-2 text-[15px]"
                >
                  <span aria-hidden="true" className="mt-[2px] select-none">
                    •
                  </span>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="underline decoration-1 underline-offset-4 hover:text-coral"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
