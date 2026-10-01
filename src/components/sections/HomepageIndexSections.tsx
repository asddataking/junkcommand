import Link from "next/link";
import { pagesInGroup } from "@/data/indexing";
import { BRAND } from "@/lib/constants";
import { FreeEstimateButton } from "@/components/forms/FreeEstimateButton";
import { PhoneLink } from "@/components/forms/PhoneLink";

const SERVICE_PAGES = pagesInGroup("services");
const AREA_PAGES = pagesInGroup("areas");
const COMPANY_PAGES = pagesInGroup("company");

export function HomepageIndexSections() {
  return (
    <>
      <section
        id="local-guide"
        aria-labelledby="local-guide-heading"
        className="scroll-mt-24 border-b border-[rgba(0,135,255,0.15)] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Port Huron &amp; St. Clair County
          </p>
          <h2
            id="local-guide-heading"
            className="mt-3 font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"
          >
            LOCAL JUNK REMOVAL, NOT A FRANCHISE SCRIPT
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Junk Command is a veteran-owned junk hauler based in Port Huron,
              Michigan. We run furniture, appliances, garage cleanouts, estate
              cleanouts, hot tubs, and renovation debris across the Blue Water
              Area — Port Huron, Fort Gratiot, Marysville, Kimball Township, St.
              Clair, Marine City, and Smiths Creek, plus Romeo, Imlay City, and
              Lapeer on the western and north Macomb routes. This is a
              service-area business. We come to your driveway. There is no
              public storefront to visit and no street address published on
              these pages.
            </p>
            <p>
              The weekly cart will not take a sofa, a dead refrigerator, or a
              garage that has been used as storage since the last polar vortex.
              Bulk pickup calendars are slow, and a dumpster sitting on a
              Marysville or Fort Gratiot apron for a week is more hassle than
              most households want. We price by how much space the load takes in
              the truck. Curbside Command starts at $99 when qualifying items
              are already outside. Full-service Command starts at $129 when we
              carry items out of the house, basement, or garage. You get a free
              estimate from photos and you approve the number before we load.
            </p>
            <p>
              What we haul is ordinary household and light commercial junk:
              sofas, mattresses, appliances, boxed clutter, estate contents,
              garage overflow, hot tubs, and mixed construction debris that is
              not hazardous. What we do not haul is fuel, wet paint, asbestos,
              propane tanks, and medical waste. If you are unsure, send a photo.
              Same-day or next-day windows may be available when the job fits a
              route already moving through town.
            </p>
            <p>
              Call or text{" "}
              <a
                href={BRAND.phoneHref}
                className="font-semibold text-bright hover:text-white"
              >
                {BRAND.phone}
              </a>{" "}
              or use the free estimate button. The pages below are the ones we
              keep in search — every other old URL forwards here or to the
              closest matching service or city page.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <FreeEstimateButton
              ctaPosition="homepage_local_guide"
              pageType="homepage"
            >
              Get a Free Estimate
            </FreeEstimateButton>
            <PhoneLink
              ctaPosition="homepage_local_guide_phone"
              pageType="homepage"
              className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-[rgba(0,135,255,0.55)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-bright hover:bg-[rgba(7,135,255,0.08)]"
            >
              Call {BRAND.phone}
            </PhoneLink>
          </div>
        </div>
      </section>

      <section
        id="kept-service-list"
        aria-labelledby="kept-services-heading"
        className="scroll-mt-24 border-b border-[rgba(0,135,255,0.15)] bg-[#080B0F] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Services
          </p>
          <h2
            id="kept-services-heading"
            className="mt-3 font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"
          >
            JUNK REMOVAL SERVICES WE KEEP IN SEARCH
          </h2>
          <p className="mt-4 max-w-3xl text-muted">
            These are the service pages with real local detail for Port Huron
            and St. Clair County. The homepage is the junk-removal hub. Open a
            page for what you need hauled, how volume pricing works, and FAQs.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PAGES.map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className="flex h-full items-center rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#020305] px-4 py-4 text-sm font-semibold text-white transition-colors hover:border-bright hover:text-bright"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="kept-area-list"
        aria-labelledby="kept-areas-heading"
        className="scroll-mt-24 border-b border-[rgba(0,135,255,0.15)] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Service Areas
          </p>
          <h2
            id="kept-areas-heading"
            className="mt-3 font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"
          >
            CITIES WE SERVE FROM PORT HURON
          </h2>
          <p className="mt-4 max-w-3xl text-muted">
            Indexed city pages cover the stops we already run from Port Huron —
            the Blue Water core plus Marine City, Smiths Creek, Romeo, Imlay
            City, and Lapeer. Nearby towns still get service; older thin URLs
            redirect to the closest kept page.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {AREA_PAGES.map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className="flex h-full items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-card px-4 py-4 text-center text-sm font-semibold text-white transition-colors hover:border-bright hover:text-bright"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
            {COMPANY_PAGES.map((page) => (
              <li key={page.path}>
                <Link href={page.path} className="text-bright hover:text-white">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
