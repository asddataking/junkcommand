import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { GhlFormEmbed } from "@/components/forms/GhlFormEmbed";

const benefits = [
  "Confirmed price from photos",
  "Curbside from $99",
  "Full-service from $129",
  "No surprise charges before loading",
] as const;

type QuoteFormProps = {
  title?: string;
  description?: string;
  benefitItems?: readonly string[];
};

export function QuoteForm({
  title = "CONFIRM YOUR PRICE WITH PHOTOS",
  description = "Request a free estimate below. We will review your details and photos, then confirm pricing before pickup.",
  benefitItems = benefits,
}: QuoteFormProps = {}) {
  const titleLines = title.includes("\n")
    ? title.split("\n")
    : title.includes(" WITH ")
      ? [title.split(" WITH ")[0], `WITH ${title.split(" WITH ").slice(1).join(" WITH ")}`]
      : [title];

  return (
    <section
      id="quote"
      className="relative scroll-mt-24 overflow-hidden border-y border-[rgba(0,135,255,0.15)] bg-[#080B0F] py-16 sm:py-20"
    >
      <DotPattern
        width={20}
        height={20}
        cr={0.8}
        className="pointer-events-none opacity-20 [mask-image:linear-gradient(to_right,white,transparent)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14 lg:px-8">
        <BlurFade>
          <h2 className="font-display text-4xl tracking-[0.06em] text-white sm:text-5xl">
            {titleLines.length > 1 ? (
              <>
                {titleLines[0]}
                <br />
                <span className="text-bright">{titleLines[1]}</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="mt-4 text-muted">{description}</p>
          <ul className="mt-8 space-y-3">
            {benefitItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.08em] text-white"
              >
                <CheckCircle2 className="size-5 shrink-0 text-bright" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <ArrowRight
            className="mt-8 hidden size-16 text-bright/80 lg:block"
            aria-hidden
          />
        </BlurFade>

        <BlurFade delay={0.1}>
          <GhlFormEmbed />
        </BlurFade>
      </div>
    </section>
  );
}
