"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ShineBorder } from "@/components/magicui/shine-border";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  slug: string;
  icon: LucideIcon;
};

export function ServiceCard({
  title,
  description,
  image,
  slug,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="group relative flex min-h-56 flex-col justify-end overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-card transition-transform duration-300 hover:-translate-y-1 hover:border-bright glow-border sm:min-h-72"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(2,3,5,0.15) 0%, rgba(2,3,5,0.55) 45%, rgba(2,3,5,0.95) 100%), url('${image}')`,
        }}
        aria-hidden
      />
      <ShineBorder
        shineColor={["#0787ff", "#18a0ff", "#0787ff"]}
        duration={14}
        borderWidth={1}
        className="opacity-50"
      />
      <div className="relative z-10 space-y-2 p-5">
        <Icon
          className="size-6 text-bright drop-shadow-[0_0_10px_rgba(24,160,255,0.55)]"
          aria-hidden
        />
        <h3 className="font-display text-2xl leading-none tracking-[0.08em] text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </Link>
  );
}
