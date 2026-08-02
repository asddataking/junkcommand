"use client";

import { FileText, MessageSquare, Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";

const actions = [
  {
    href: BRAND.phoneHref,
    label: "Call",
    icon: Phone,
  },
  {
    href: BRAND.smsHref,
    label: "Text",
    icon: MessageSquare,
  },
  {
    href: "/#quote",
    label: "Get Instant Quote",
    icon: FileText,
  },
] as const;

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[rgba(0,135,255,0.35)] bg-[#020305]/95 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3">
        {actions.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className="flex flex-col items-center justify-center gap-1 px-2 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[rgba(7,135,255,0.12)] hover:text-bright"
          >
            <Icon className="size-4 text-bright" aria-hidden />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
