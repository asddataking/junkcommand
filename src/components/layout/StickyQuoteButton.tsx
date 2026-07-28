"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";

/** Desktop sticky quote CTA — hidden on mobile (MobileActionBar covers that). */
export function StickyQuoteButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Link
      href="/book-online"
      className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-[2px] bg-primary px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_0_28px_rgba(7,135,255,0.45)] transition-colors hover:bg-bright md:inline-flex"
    >
      <FileText className="size-4" aria-hidden />
      Free Quote
    </Link>
  );
}
