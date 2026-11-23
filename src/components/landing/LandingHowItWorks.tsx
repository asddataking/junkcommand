import { Button } from "@/components/ui/Button";
import type { LandingHeroCta } from "@/components/landing/LandingHero";

type Step = {
  title: string;
  description: string;
};

export function LandingHowItWorks({
  title = "HOW IT WORKS",
  steps,
  ctas,
}: {
  title?: string;
  steps: Step[];
  ctas?: LandingHeroCta[];
}) {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
          {title}
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5"
            >
              <span className="font-display text-3xl text-bright">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-heading text-lg text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
        {ctas?.length ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {ctas.map((cta) => (
              <Button
                key={cta.label}
                href={cta.href}
                variant={cta.variant ?? "primary"}
                showArrow={cta.showArrow}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
