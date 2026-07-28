"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-[rgba(0,135,255,0.25)] bg-[#020305]/95 backdrop-blur-md"
          : "border-transparent bg-[#020305]"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={BRAND.phoneHref}
            className="text-sm font-semibold text-bright hover:text-white"
          >
            {BRAND.phone}
          </a>
          <Button href="#quote" showArrow>
            Get My Free Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.45)] p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
