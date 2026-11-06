import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { AreasWeServe } from "@/components/shared/AreasWeServe";
import { Button } from "@/components/ui/Button";
import { FreeEstimateButton } from "@/components/forms/FreeEstimateButton";
import { BRAND, SITE_URL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Port Huron Trash & Bulk Pickup", href: "/port-huron-trash-bulk-pickup" },
];

const pageFaqs = [
  {
    question: "Does Port Huron city trash pickup take bulky junk?",
    answer:
      "The City of Port Huron’s residential refuse program includes limited bulky items with regular curbside collection. The city’s published rule is typically one bulk item per household per week when the item is at the curb and follows current set-out rules. Confirm details on the City of Port Huron refuse collection page. That program is for residents inside the city limits — not Fort Gratiot Township, Marysville, or Kimball Township, which have their own haulers.",
  },
  {
    question: "When should I call a junk hauler instead of waiting for city bulk pickup?",
    answer:
      "Call Junk Command for large volumes, appliances that still need to come out of the house, construction debris, garage or estate cleanouts, and same-week timing. City bulk programs are built for a limited curb item on the regular trash cycle. They are not a whole-garage or remodel solution.",
  },
  {
    question: "What is Smiths Creek Landfill?",
    answer:
      "Smiths Creek Landfill is St. Clair County’s municipal landfill, operated by the county Environmental Services Department on Smiths Creek Road in the Smiths Creek community of Kimball Township. It accepts municipal solid waste from commercial haulers and the public. Hours and accepted materials are on the county landfill page. We haul to responsible disposal — you do not have to trailer a load there yourself.",
  },
  {
    question: "How much does Junk Command charge if the city cart is not enough?",
    answer:
      "Curbside Command starts at $99 when qualifying items are already outside. Full-service Command starts at $129 when we carry items out of the home, garage, or basement. Larger piles are quoted by truck volume from photos. You approve the price before we load.",
  },
];

export const metadata = buildPageMetadata({
  title: "Port Huron Trash & Bulk Pickup vs Junk Removal | Junk Command",
  description:
    "When Port Huron city trash or bulk pickup covers a curb item, and when to call Junk Command for large volumes, appliances, construction debris, cleanouts, or same-week hauling in St. Clair County.",
  path: "/port-huron-trash-bulk-pickup",
});

export default function PortHuronTrashBulkPickupPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getBreadcrumbSchema(crumbs),
          getFaqSchema(pageFaqs, {
            id: `${SITE_URL}/port-huron-trash-bulk-pickup#faq`,
          }),
        ]}
      />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(7,135,255,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            City Cart vs. Junk Hauler
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            PORT HURON TRASH &amp; BULK PICKUP
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            City trash and bulk pickup can handle a limited curb item on the
            regular refuse cycle. A junk hauler is for the jobs that do not fit
            that program: large volumes, appliances still inside, construction
            debris, cleanouts, and same-week timing. Junk Command is the
            Port Huron crew for those loads.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <FreeEstimateButton
              ctaPosition="bulk_pickup_hero"
              pageType="bulk_pickup"
            >
              Get a Free Estimate
            </FreeEstimateButton>
            <Button href={BRAND.phoneHref} variant="secondary">
              Call {BRAND.phone}
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-display text-3xl tracking-[0.06em] text-white">
              WHEN CITY CURBSIDE OR BULK PICKUP COVERS IT
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                The{" "}
                <a
                  href="https://www.porthuron.org/government/departments/public_works/programs/refuse_collection.php"
                  className="text-bright hover:text-white"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  City of Port Huron refuse collection program
                </a>{" "}
                is for residential properties inside city limits. The city’s
                contracted hauler collects regular trash, recycling, and —
                when the item is already at the curb and follows current rules
                — limited bulky items such as a mattress, appliance, or piece
                of furniture. The published city rule is typically one bulk
                item per household per week. Set-out times and collection days
                are on the city’s page; we do not copy those schedules here
                because they change.
              </p>
              <p>
                That program is a good fit when you have a single bulky item,
                it is already outside, and you can wait for the next regular
                refuse day. Neighboring communities are not on the Port Huron
                city contract.{" "}
                <Link href="/service-areas/fort-gratiot" className="text-bright hover:text-white">
                  Fort Gratiot Township
                </Link>{" "}
                has its own township-wide hauler and a limited bulk-item rule.{" "}
                <Link href="/service-areas/marysville" className="text-bright hover:text-white">
                  Marysville
                </Link>{" "}
                collects bulky items with regular city trash.{" "}
                <Link href="/service-areas/st-clair" className="text-bright hover:text-white">
                  St. Clair
                </Link>{" "}
                and{" "}
                <Link href="/service-areas/marine-city" className="text-bright hover:text-white">
                  Marine City
                </Link>{" "}
                each use a city contractor with their own bulky-item process.{" "}
                <Link href="/service-areas/kimball-township" className="text-bright hover:text-white">
                  Kimball Township
                </Link>{" "}
                does not run a township-wide trash contract — residents hire a
                licensed hauler. Confirm current rules with the city or
                township, not with a search snippet.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl tracking-[0.06em] text-white">
              WHEN TO CALL A JUNK HAULER INSTEAD
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                Call Junk Command when the city cart is not the right tool:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-white">
                <li>
                  <span className="font-semibold">Large volumes</span> — more
                  than one bulky item, a packed garage, or a pile that would
                  take weeks of “one item per pickup.”
                </li>
                <li>
                  <span className="font-semibold">Appliances still inside</span>{" "}
                  — a refrigerator in a kitchen or basement that has to be
                  carried out, not already sitting at the curb.{" "}
                  <Link href="/appliance-removal" className="text-bright hover:text-white">
                    Appliance removal
                  </Link>{" "}
                  is a full-service job.
                </li>
                <li>
                  <span className="font-semibold">Construction debris</span> —
                  drywall, lumber, cabinets, and remodel scrap are often
                  outside residential bulk rules. See{" "}
                  <Link
                    href="/construction-debris-removal"
                    className="text-bright hover:text-white"
                  >
                    construction debris removal
                  </Link>
                  .
                </li>
                <li>
                  <span className="font-semibold">Cleanouts</span> — garage,
                  estate, rental, or whole-house contents.{" "}
                  <Link href="/garage-cleanout" className="text-bright hover:text-white">
                    Garage cleanouts
                  </Link>{" "}
                  and{" "}
                  <Link href="/estate-cleanout" className="text-bright hover:text-white">
                    estate cleanouts
                  </Link>{" "}
                  are the usual booking.
                </li>
                <li>
                  <span className="font-semibold">Same-week timing</span> — a
                  closing, a move, or a listing that cannot wait for the next
                  city bulk cycle.
                </li>
              </ul>
              <p>
                Furniture that will not wait at the curb is{" "}
                <Link href="/furniture-removal" className="text-bright hover:text-white">
                  furniture removal
                </Link>
                . Dead spas are{" "}
                <Link href="/hot-tub-removal" className="text-bright hover:text-white">
                  hot tub removal
                </Link>
                . Light commercial leftovers are{" "}
                <Link
                  href="/commercial-junk-removal"
                  className="text-bright hover:text-white"
                >
                  commercial junk removal
                </Link>
                .
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl tracking-[0.06em] text-white">
              SMITHS CREEK LANDFILL
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                St. Clair County’s landfill is{" "}
                <a
                  href="https://www.stclaircounty.org/offices/landfill/general.aspx?meid=619"
                  className="text-bright hover:text-white"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Smiths Creek Landfill
                </a>
                , on Smiths Creek Road in the Smiths Creek community of Kimball
                Township. The county Environmental Services Department operates
                it. Public and commercial access is available for acceptable
                municipal solid waste. Hours, accepted materials, and household
                hazardous-waste notes belong on the county page — we do not
                republish them here.
              </p>
              <p>
                You can trailer a load there yourself if that is the right
                fit. Most households calling Junk Command do not want to rent
                a trailer, sort at the scale house, or make a second trip.
                We haul the junk; county disposal is still Smiths Creek for
                the St. Clair County loads.{" "}
                <Link href="/service-areas/smiths-creek" className="text-bright hover:text-white">
                  Smiths Creek junk removal
                </Link>{" "}
                is the local service page if the property is in 48074.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl tracking-[0.06em] text-white">
              PRICING IF YOU BOOK THE CREW
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Junk Command prices by how much space the load takes in the
              truck. Curbside Command starts at $99 when qualifying items are
              already outside. Full-service Command starts at $129 when we
              carry items out. Photos get you a free estimate. You approve the
              price before we load. We do not invent per-item city fees or
              landfill gate rates on this page.
            </p>
          </div>

          <AreasWeServe heading="Areas we serve" />

          <div>
            <h2 className="font-display text-3xl tracking-[0.06em] text-white">
              PORT HURON TRASH &amp; BULK FAQS
            </h2>
            <div className="mt-6">
              <FaqAccordion items={pageFaqs} idPrefix="bulk-pickup" />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="NEED MORE THAN ONE CURB ITEM GONE?"
        description="Send photos for a confirmed price — curbside from $99, full-service from $129 in Port Huron."
      />
    </SiteShell>
  );
}
