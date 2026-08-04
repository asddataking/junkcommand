"use client";

import Link from "next/link";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      className="border-t border-[rgba(0,135,255,0.25)] bg-[#080B0F] lg:hidden"
    >
      <nav
        className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
        aria-label="Mobile"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-[2px] px-3 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted hover:bg-[rgba(7,135,255,0.08)] hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/veteran-owned"
          onClick={onClose}
          className="rounded-[2px] px-3 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-bright hover:bg-[rgba(7,135,255,0.08)] hover:text-white"
        >
          Veteran Owned
        </Link>
        <a
          href={BRAND.phoneHref}
          className="rounded-[2px] px-3 py-3 text-sm font-semibold text-bright"
          onClick={onClose}
        >
          Call {BRAND.phone}
        </a>
        <div className="pt-2">
          <ShimmerButton href="/#quote" className="w-full" onClick={onClose}>
            Get My Free Quote
          </ShimmerButton>
        </div>
      </nav>
    </div>
  );
}
