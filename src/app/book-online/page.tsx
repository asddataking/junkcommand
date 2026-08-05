import { CalendarDays, Camera, Clock3, MapPin } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Book Online", href: "/book-online" },
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const TIME_SLOTS = [
  "8–10 AM",
  "10 AM–12 PM",
  "12–2 PM",
  "2–4 PM",
  "4–6 PM",
] as const;

export const metadata = buildPageMetadata({
  title: "Book Junk Removal Online | Junk Command Port Huron",
  description:
    "Book junk removal online with Junk Command. Request a preferred date and time, share your address, upload photos, and get a free quote for Port Huron & SE Michigan.",
  path: "/book-online",
});

export default function BookOnlinePage() {
  return (
    <SiteShell>
      <JsonLd data={getBreadcrumbSchema(crumbs)} />

      <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,135,255,0.16),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Schedule Your Haul
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
            BOOK JUNK REMOVAL ONLINE
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Tell us what you need hauled, share your preferred date and time
            window, and upload photos for a faster quote. Junk Command confirms
            pricing and locks your appointment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#quote" showArrow>
              Start Booking Form
            </Button>
            <Button href={BRAND.phoneHref} variant="secondary">
              Prefer to Call? {BRAND.phone}
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              How Booking Works
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
              THREE STEPS TO A CLEAR SPACE
            </h2>
          </div>

          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Camera,
                title: "Share details & photos",
                body: "Describe the junk, add your service address, and upload photos so we can quote accurately before we arrive.",
              },
              {
                icon: CalendarDays,
                title: "Pick a preferred window",
                body: "Note your preferred date and time in the details field. We confirm availability when we send your quote.",
              },
              {
                icon: Clock3,
                title: "We show up & haul",
                body: "Approve the price, we load everything, and leave the area broom-clean — usually in one visit.",
              },
            ].map((step, index) => (
              <li
                key={step.title}
                className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5 glow-border"
              >
                <step.icon className="size-6 text-bright" aria-hidden />
                <p className="mt-3 font-display text-3xl text-bright">
                  0{index + 1}
                </p>
                <h3 className="mt-1 font-display text-xl tracking-[0.08em] text-white">
                  {step.title.toUpperCase()}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-card p-5 glow-border sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
                Preferred Schedule
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-white">
                CALENDAR PREVIEW
              </h2>
              <p className="mt-2 text-sm text-muted">
                Prefer a specific day? Share your preferred window in the
                booking form below — we will confirm availability with your
                estimate.
              </p>

              <div className="mt-6 grid grid-cols-7 gap-1 text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-muted sm:text-xs">
                {DAYS.map((day) => (
                  <div key={day} className="py-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 28 }, (_, i) => {
                  const day = i + 1;
                  const highlight = day === 12 || day === 13 || day === 18;
                  return (
                    <div
                      key={day}
                      className={`rounded-[2px] py-2.5 ${
                        highlight
                          ? "border border-bright bg-[rgba(7,135,255,0.15)] text-bright"
                          : "border border-transparent bg-[#080B0F] text-white"
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Popular time windows
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <span
                      key={slot}
                      className="rounded-[2px] border border-[rgba(0,135,255,0.3)] px-3 py-1.5 text-xs text-white"
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-[#080B0F] p-5 sm:p-6">
                <MapPin className="size-6 text-bright" aria-hidden />
                <h2 className="mt-3 font-display text-2xl tracking-[0.08em] text-white">
                  SERVICE ADDRESS REQUIRED
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Include the full pickup address so we can check route timing
                  and access. Apartment or HOA notes help us arrive prepared.
                </p>
              </div>
              <div className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-[#080B0F] p-5 sm:p-6">
                <Camera className="size-6 text-bright" aria-hidden />
                <h2 className="mt-3 font-display text-2xl tracking-[0.08em] text-white">
                  PHOTOS = FASTER QUOTES
                </h2>
                <p className="mt-2 text-sm text-muted">
                  The booking form supports photo uploads. A few clear pictures
                  of the pile and access path usually get you pricing the same
                  day — often within minutes.
                </p>
              </div>
              <div className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-[#080B0F] p-5 sm:p-6">
                <CalendarDays className="size-6 text-bright" aria-hidden />
                <h2 className="mt-3 font-display text-2xl tracking-[0.08em] text-white">
                  NOTE DATE &amp; TIME
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Prefer Thursday after 1 PM or Saturday morning? Note that in
                  the form so we can confirm the closest available window with
                  your estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteForm />

      <CtaBanner
        title="OR CALL TO BOOK NOW"
        description={`Speak with Junk Command directly at ${BRAND.phone} to check availability.`}
        primaryHref={BRAND.phoneHref}
        primaryLabel={`Call ${BRAND.phone}`}
        secondaryHref="#quote"
        secondaryLabel="Use the Form"
      />
    </SiteShell>
  );
}
