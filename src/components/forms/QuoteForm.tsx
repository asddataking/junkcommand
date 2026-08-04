import Script from "next/script";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";

const GHL_FORM_ID = "yw2y86G2nD6Vmzn2HjN2";
const GHL_IFRAME_ID = `inline-${GHL_FORM_ID}`;
const GHL_FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`;

const benefits = [
  "Confirmed price from photos",
  "Curbside from $99",
  "Full-service from $129",
  "No surprise charges before loading",
] as const;

export function QuoteForm() {
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
            CONFIRM YOUR PRICE
            <br />
            <span className="text-bright">WITH PHOTOS</span>
          </h2>
          <p className="mt-4 text-muted">
            Request a free estimate below. We will review your details and
            photos, then confirm pricing before pickup.
          </p>
          <ul className="mt-8 space-y-3">
            {benefits.map((item) => (
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
          <div className="relative overflow-hidden rounded-[10px] border border-[rgba(0,135,255,0.4)] bg-[#020305] p-2 sm:p-3">
            <ShineBorder
              shineColor={["#0787ff", "#18a0ff", "#0787ff"]}
              duration={12}
              borderWidth={1}
              className="opacity-60"
            />
            <BorderBeam
              size={100}
              duration={8}
              colorFrom="#18a0ff"
              colorTo="#0787ff"
            />
            <div className="relative z-10 min-h-[720px] w-full overflow-hidden rounded-[8px]">
              <iframe
                src={GHL_FORM_SRC}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "8px",
                }}
                id={GHL_IFRAME_ID}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Free Estimate"
                data-height="undefined"
                data-layout-iframe-id={GHL_IFRAME_ID}
                data-form-id={GHL_FORM_ID}
                title="Free Estimate"
                className="absolute inset-0 h-full min-h-[720px] w-full"
              />
            </div>
          </div>
        </BlurFade>
      </div>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
