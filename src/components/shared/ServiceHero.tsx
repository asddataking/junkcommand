import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/shared/Breadcrumbs";

type ServiceHeroProps = {
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  breadcrumbs: BreadcrumbItem[];
  startingPrice?: string;
};

export function ServiceHero({
  eyebrow,
  h1,
  intro,
  image,
  imageAlt,
  breadcrumbs,
  startingPrice,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.25)]">
      <div className="absolute inset-0">
        <MediaImage
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020305] via-[#020305]/92 to-[#020305]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(7,135,255,0.22),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Breadcrumbs items={breadcrumbs} />
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-5xl lg:text-6xl">
          {h1}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{intro}</p>
        {startingPrice ? (
          <p className="mt-3 text-sm font-semibold text-bright">
            Starting at {startingPrice}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/book-online" showArrow>
            Get My Free Quote
          </Button>
          <Button href={BRAND.phoneHref} variant="secondary">
            Call {BRAND.phone}
          </Button>
          <Button href={BRAND.smsHref} variant="ghost">
            Text Photos
          </Button>
        </div>
      </div>
    </section>
  );
}
