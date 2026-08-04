import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Phone, MessageSquare, CalendarDays } from "lucide-react";

export function SidebarCta({
  title = "Ready to Clear It?",
  description = "Call, text photos, or book online for a free junk removal quote.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <aside className="rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-[#080B0F] p-5 glow-border lg:sticky lg:top-24">
      <h2 className="font-display text-2xl tracking-[0.08em] text-white">{title}</h2>
      <p className="mt-2 text-sm text-muted">{description}</p>
      <div className="mt-5 space-y-3">
        <Button href="/#quote" showArrow className="w-full">
          Free Quote
        </Button>
        <a
          href={BRAND.phoneHref}
          className="flex items-center gap-3 rounded-[2px] border border-[rgba(0,135,255,0.35)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-bright hover:text-bright"
        >
          <Phone className="size-4 text-bright" aria-hidden />
          {BRAND.phone}
        </a>
        <a
          href={BRAND.smsHref}
          className="flex items-center gap-3 rounded-[2px] border border-[rgba(0,135,255,0.35)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-bright hover:text-bright"
        >
          <MessageSquare className="size-4 text-bright" aria-hidden />
          Text Photos
        </a>
        <Link
          href="/book-online"
          className="flex items-center gap-3 rounded-[2px] border border-[rgba(0,135,255,0.35)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-bright hover:text-bright"
        >
          <CalendarDays className="size-4 text-bright" aria-hidden />
          Book Online
        </Link>
      </div>
    </aside>
  );
}
