"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Chapters", href: "/chapters" },
  { label: "Our Partners", href: "/partners" },
  { label: "Our Programs", href: "/programs" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:px-10">
        <Link href="/" aria-label="Climate Tech Cities home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] text-forest transition-opacity hover:opacity-100 ${
                  active
                    ? "underline decoration-1 underline-offset-8"
                    : "opacity-80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          <span className="h-0.5 w-6 bg-forest" />
          <span className="h-0.5 w-6 bg-forest" />
          <span className="h-0.5 w-6 bg-forest" />
        </button>
      </div>

      {open && (
        <nav
          aria-label="Main mobile"
          className="border-t border-line bg-paper px-5 pb-6 pt-2 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-[17px] text-forest"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
