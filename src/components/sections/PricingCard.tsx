"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";
import {
  formatStartingPrice,
  type PricingItem,
} from "@/data/pricing";
import { MediaImage } from "@/components/ui/MediaImage";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ShineBorder } from "@/components/magicui/shine-border";

type PricingCardProps = {
  item: PricingItem;
  priority?: boolean;
};

export function PricingCard({ item, priority = false }: PricingCardProps) {
  if (item.isCtaCard) {
    return (
      <Link
        href="#quote"
        className="group relative flex h-full min-h-[17.5rem] flex-col justify-between overflow-hidden rounded-[2px] border border-bright/50 bg-[rgba(7,135,255,0.12)] p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-bright hover:shadow-[0_0_28px_rgba(7,135,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright"
        aria-label="Get a free upfront quote for something else"
      >
        <ShineBorder
          shineColor={["#0787ff", "#18a0ff", "#0787ff"]}
          duration={14}
          borderWidth={1}
          className="opacity-50"
        />
        <div className="relative z-10">
          <span className="inline-flex size-11 items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-[#020305] text-bright">
            <MessageSquare className="size-5" aria-hidden />
          </span>
          <h3 className="mt-5 font-display text-2xl tracking-[0.08em] text-white sm:text-3xl">
            {item.ctaTitle ?? item.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {item.ctaDescription}
          </p>
        </div>
        <p className="relative z-10 mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-bright">
          Get My Free Quote →
        </p>
      </Link>
    );
  }

  return (
    <Link
      href="#quote"
      className="group relative flex h-full min-h-[17.5rem] flex-col overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-[#080B0F] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-bright hover:shadow-[0_0_28px_rgba(7,135,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright"
      aria-label={`Get a quote for ${item.name} removal, starting at ${formatStartingPrice(item.startingPrice)}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <MediaImage
          src={item.image}
          alt={item.alt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 22vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#020305] via-[#020305]/55 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end gap-1 px-4 pb-4 pt-2">
        <h3 className="font-display text-xl tracking-[0.08em] text-white sm:text-2xl">
          {item.name}
        </h3>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          Starting at
        </p>
        <p className="font-display text-3xl tracking-[0.06em] text-bright drop-shadow-[0_0_12px_rgba(24,160,255,0.45)]">
          $
          <NumberTicker
            value={item.startingPrice}
            className="font-display text-3xl tracking-[0.06em] text-bright"
          />
        </p>
      </div>
    </Link>
  );
}
