import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

type CtaBannerProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
};

export function CtaBanner({
  eyebrow = "Take Command",
  title,
  description = "Get a free quote in minutes — call, text photos, or book online.",
  primaryHref = "/#quote",
  primaryLabel = "Get My Free Quote",
  secondaryHref = BRAND.phoneHref,
  secondaryLabel = `Call ${BRAND.phone}`,
  className = "",
}: CtaBannerProps) {
  return (
    <section
      className={`relative overflow-hidden border-y border-[rgba(0,135,255,0.25)] bg-[#080B0F] py-14 sm:py-16 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,135,255,0.16),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-[0.06em] text-white sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-muted">{description}</p>
        ) : null}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primaryHref} showArrow>
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="secondary">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
