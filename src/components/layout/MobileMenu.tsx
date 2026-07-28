"use client";

import { BRAND, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

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
      <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-[2px] px-3 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted hover:bg-[rgba(7,135,255,0.08)] hover:text-white"
          >
            {link.label}
          </a>
        ))}
        <a
          href={BRAND.phoneHref}
          className="rounded-[2px] px-3 py-3 text-sm font-semibold text-bright"
          onClick={onClose}
        >
          Call {BRAND.phone}
        </a>
        <div className="pt-2">
          <Button href="#quote" showArrow className="w-full" onClick={onClose}>
            Get My Free Quote
          </Button>
        </div>
      </nav>
    </div>
  );
}
