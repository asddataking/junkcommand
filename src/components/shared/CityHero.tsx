"use client";

import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { MapPin } from "lucide-react";

type CityHeroProps = {
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  breadcrumbs: BreadcrumbItem[];
  county: string;
};

export function CityHero({
  eyebrow,
  h1,
  intro,
  image,
  imageAlt,
  breadcrumbs,
  county,
}: CityHeroProps) {
  const isPortraitHero = image.includes("junk-command-hero");
  const backdropClass = isPortraitHero
    ? "object-cover object-[center_28%] opacity-40"
    : "object-cover object-[42%_40%] opacity-40";
  const frameClass = isPortraitHero
    ? "object-cover object-[center_20%]"
    : "object-cover object-[38%_36%]";

  return (
    <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.25)]">
      <div className="absolute inset-0">
        <MediaImage
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={backdropClass}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020305] via-[#020305]/88 to-[#020305]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-transparent to-[#020305]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(7,135,255,0.22),transparent_55%)]" />
        <DotPattern
          width={24}
          height={24}
          cr={1}
          className="opacity-25 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <div>
          <BlurFade delay={0.02} inView={false}>
            <Breadcrumbs items={breadcrumbs} />
          </BlurFade>
          <BlurFade delay={0.06} inView={false}>
            <AnimatedShinyText className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              <MapPin className="size-3.5" aria-hidden />
              {eyebrow}
            </AnimatedShinyText>
          </BlurFade>
          <BlurFade delay={0.1} inView={false}>
            <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-5xl lg:text-6xl">
              {h1}
            </h1>
          </BlurFade>
          <BlurFade delay={0.14} inView={false}>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
              {county}
            </p>
            <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
              {intro}
            </p>
          </BlurFade>
          <BlurFade delay={0.2} inView={false}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ShimmerButton href="/book-online">Get My Free Quote</ShimmerButton>
              <Button href={BRAND.phoneHref} variant="secondary">
                Call {BRAND.phone}
              </Button>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.16} direction="left" inView={false} className="hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.45)] shadow-[0_0_40px_rgba(7,135,255,0.18)]">
            <MediaImage
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="40vw"
              className={frameClass}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020305]/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-black/65 px-4 py-3 backdrop-blur-sm">
              <p className="font-display text-xl tracking-[0.1em] text-white">
                LOCAL CREW
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-bright">
                Serving {county}
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
