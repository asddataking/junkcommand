import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BRAND, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service | Junk Command",
  description:
    "Terms of service for Junk Command junk removal in Port Huron and St. Clair County — quotes, scheduling, payments, and website use.",
  path: "/terms",
});

const UPDATED = "July 28, 2026";

export default function TermsPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <SiteShell>
      <JsonLd data={getBreadcrumbSchema(crumbs)} />
      <section className="border-b border-[rgba(0,135,255,0.2)]">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-2 font-display text-4xl tracking-[0.06em] text-white sm:text-5xl">
            TERMS OF SERVICE
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: {UPDATED}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-10 px-4 py-12 text-muted sm:px-6 lg:px-8">
        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            AGREEMENT
          </h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the
            Junk Command website at {SITE_URL} and the junk removal services we
            provide in Port Huron, St. Clair County, and surrounding areas. By
            using our site, submitting a quote request, or booking service, you
            agree to these Terms. If you do not agree, do not use the site or
            hire us.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            SERVICES
          </h2>
          <p>
            Junk Command provides junk removal, cleanouts, and related haul-away
            services. Scope of work for a specific job is defined by the quote
            we provide based on information and photos you share, plus any
            on-site confirmation before loading begins. We may refuse items that
            are hazardous, restricted, or unsafe to handle.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            QUOTES AND PRICING
          </h2>
          <p>
            Quotes are estimates based on volume, access, and materials
            described or shown. Prices are typically confirmed before loading.
            If the actual load differs materially from what was quoted — for
            example, additional piles, heavier items, or restricted access not
            disclosed — we will discuss adjusted pricing before proceeding. You
            may decline additional work.
          </p>
          <p>
            Minimum charges and volume tiers may apply. Posted starting prices
            on the website are informational and may change. The price agreed
            for your job controls.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            CUSTOMER RESPONSIBILITIES
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Provide accurate contact and property access information</li>
            <li>Identify items that must stay versus items to remove</li>
            <li>
              Disclose stairs, long carries, pets, locked gates, or HOA rules
              that affect the job
            </li>
            <li>
              Ensure you have authority to authorize removal from the property
            </li>
            <li>
              Remove or secure cash, jewelry, medications, firearms, and other
              valuables before our arrival
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            PROHIBITED AND RESTRICTED ITEMS
          </h2>
          <p>
            We do not haul certain hazardous or regulated materials (examples may
            include asbestos, unidentified chemicals, explosives, medical waste,
            and other items barred by disposal facilities). If restricted items
            are discovered, they may be left on site and you remain responsible
            for lawful disposal. Ask when you book if you are unsure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            SCHEDULING AND ACCESS
          </h2>
          <p>
            Arrival windows are estimates and may shift due to weather, traffic,
            prior job duration, or emergencies. Same-day service is not
            guaranteed and depends on routing. You agree to provide reasonable
            access to the items and parking as needed for safe loading.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            PAYMENT
          </h2>
          <p>
            Payment is due as agreed when the job is booked or completed unless
            we arrange otherwise in writing. We may charge for returned payments
            or unpaid balances. Title to removed items transfers to Junk Command
            upon loading unless we agree that items are being transported for
            donation on your behalf under a separate understanding.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            PROPERTY CARE AND LIABILITY
          </h2>
          <p>
            We take reasonable care to protect floors, doorways, and landscaping
            while performing the job. You should point out fragile surfaces or
            concerns before work begins. Our liability for property damage
            arising from our negligence is limited to direct repair costs for
            damage we cause, except where Michigan law requires otherwise. We
            are not responsible for pre-existing damage, hidden conditions, or
            items you instruct us to discard that you later wish you had kept.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            WEBSITE USE
          </h2>
          <p>
            Content on this website is for general information. We may update
            services, pricing examples, and availability without notice. You may
            not misuse the site, attempt unauthorized access, scrape content in
            a way that harms our systems, or submit false quote information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            THIRD-PARTY TOOLS
          </h2>
          <p>
            Forms, messaging, and scheduling may use third-party platforms
            (including CRM tools such as GoHighLevel). Your use of those
            communications is also subject to our Privacy Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            DISCLAIMERS
          </h2>
          <p>
            Except as expressly stated, services and website content are provided
            &quot;as is&quot; to the fullest extent permitted by law. We do not
            warrant uninterrupted website availability. Blog articles are
            educational and are not legal, environmental, or financial advice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            INDEMNITY
          </h2>
          <p>
            You agree to indemnify and hold Junk Command harmless from claims
            arising out of your breach of these Terms, inaccurate information you
            provide, or your lack of authority to authorize removal from a
            property — except to the extent caused by our gross negligence or
            willful misconduct.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            GOVERNING LAW
          </h2>
          <p>
            These Terms are governed by the laws of the State of Michigan,
            without regard to conflict-of-law rules. Disputes will be resolved in
            courts located in St. Clair County, Michigan, unless applicable law
            requires otherwise.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            CHANGES
          </h2>
          <p>
            We may revise these Terms periodically. The updated date above
            reflects the latest version. Material changes apply going forward
            from posting. Continued use of the site or booking of services after
            changes constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl tracking-[0.06em] text-white">
            CONTACT
          </h2>
          <p>
            Junk Command ·{" "}
            <a href={BRAND.emailHref} className="text-bright hover:text-white">
              {BRAND.email}
            </a>{" "}
            ·{" "}
            <a href={BRAND.phoneHref} className="text-bright hover:text-white">
              {BRAND.phone}
            </a>
          </p>
        </section>
      </article>
    </SiteShell>
  );
}
