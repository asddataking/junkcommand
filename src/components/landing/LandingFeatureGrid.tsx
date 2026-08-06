import Link from "next/link";

type Feature = {
  title: string;
  description: string;
};

export function LandingFeatureGrid({
  title,
  intro,
  features,
}: {
  title?: string;
  intro?: string;
  features: Feature[];
}) {
  return (
    <section className="border-t border-[rgba(0,135,255,0.15)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title ? (
          <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            {title}
          </h2>
        ) : null}
        {intro ? (
          <p className="mt-4 max-w-3xl text-muted">{intro}</p>
        ) : null}
        <ul
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${title || intro ? "mt-8" : ""}`}
        >
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5"
            >
              <h3 className="font-heading text-lg text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function LandingRemovalCta({
  title,
  description,
  href,
  linkLabel,
}: {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <section className="border-t border-[rgba(0,135,255,0.15)] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F] p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-3xl text-muted">{description}</p>
          <Link
            href={href}
            className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.08em] text-bright hover:text-white"
          >
            {linkLabel} →
          </Link>
        </div>
      </div>
    </section>
  );
}
