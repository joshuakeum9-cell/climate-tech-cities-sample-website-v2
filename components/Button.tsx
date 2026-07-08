import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "boxed" | "pill" | "pill-solid";
  type?: "button" | "submit";
  className?: string;
};

const styles = {
  boxed:
    "border border-forest bg-paper px-6 py-2.5 text-[15px] text-forest rounded-[3px] hover:bg-forest hover:text-paper",
  pill: "rounded-full border border-forest bg-transparent px-6 py-2.5 text-[14px] text-forest hover:bg-forest hover:text-paper",
  "pill-solid":
    "rounded-full border border-forest bg-forest px-6 py-2.5 text-[14px] text-paper hover:bg-forest-soft",
} as const;

export function Button({
  children,
  href,
  variant = "boxed",
  type = "button",
  className = "",
}: ButtonProps) {
  const cls = `inline-block text-center transition-colors ${styles[variant]} ${className}`;
  if (href) {
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
}
