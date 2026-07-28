"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { BRAND, JUNK_TYPES } from "@/lib/constants";
import { quoteSchema, type QuoteFormValues } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { PhotoUploader } from "@/components/forms/PhotoUploader";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";
import { DotPattern } from "@/components/magicui/dot-pattern";

const benefits = [
  "No Obligation",
  "Upfront Pricing",
  "Fast Scheduling",
  "Satisfaction Guaranteed",
] as const;

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#020305] px-3 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-bright focus:shadow-[0_0_0_1px_rgba(24,160,255,0.4)]";

function readUtmParams() {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
      pageUrl: "",
    };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_term: params.get("utm_term") ?? "",
    utm_content: params.get("utm_content") ?? "",
    pageUrl: window.location.href,
  };
}

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      serviceAddress: "",
      junkType: undefined,
      details: "",
      ...readUtmParams(),
      submittedAt: "",
    },
  });

  useEffect(() => {
    const utm = readUtmParams();
    setValue("utm_source", utm.utm_source);
    setValue("utm_medium", utm.utm_medium);
    setValue("utm_campaign", utm.utm_campaign);
    setValue("utm_term", utm.utm_term);
    setValue("utm_content", utm.utm_content);
    setValue("pageUrl", utm.pageUrl);
  }, [setValue]);

  const onSubmit = handleSubmit(async (values) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const formData = new FormData();
      const payload: QuoteFormValues = {
        ...values,
        submittedAt: new Date().toISOString(),
      };

      Object.entries(payload).forEach(([key, value]) => {
        if (value != null && value !== "") {
          formData.append(key, String(value));
        }
      });

      photos.forEach((file) => formData.append("photos", file));

      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      reset();
      setPhotos([]);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your quote. Please call us.",
      );
    }
  });

  if (status === "success") {
    return (
      <section id="quote" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="glow-border-strong rounded-[2px] bg-card p-8 text-center sm:p-10">
            <CheckCircle2 className="mx-auto size-12 text-bright" aria-hidden />
            <h2 className="mt-4 font-display text-4xl tracking-[0.08em] text-white">
              QUOTE REQUEST RECEIVED
            </h2>
            <p className="mt-3 text-muted">
              We&apos;ll text you back fast with pricing and availability. Need
              it sooner? Call or text {BRAND.phone}.
            </p>
            <Button
              className="mt-6"
              onClick={() => setStatus("idle")}
              variant="secondary"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="quote"
      className="relative scroll-mt-24 overflow-hidden border-y border-[rgba(0,135,255,0.15)] bg-[#080B0F] py-16 sm:py-20"
    >
      <DotPattern
        width={20}
        height={20}
        cr={0.8}
        className="opacity-20 [mask-image:linear-gradient(to_right,white,transparent)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:px-8">
        <BlurFade>
          <h2 className="font-display text-4xl tracking-[0.06em] text-white sm:text-5xl">
            NEED JUNK GONE?
            <br />
            <span className="text-bright">GET YOUR FREE QUOTE</span>
          </h2>
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
        <form
          onSubmit={onSubmit}
          className="relative space-y-4 overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-[#020305] p-5 sm:p-7"
          noValidate
        >
          <ShineBorder
            shineColor={["#0787ff", "#18a0ff", "#0787ff"]}
            duration={12}
            borderWidth={1}
            className="opacity-60"
          />
          <BorderBeam size={100} duration={8} colorFrom="#18a0ff" colorTo="#0787ff" />
          <div className="relative z-10 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
              >
                Full Name
              </label>
              <input
                id="fullName"
                autoComplete="name"
                placeholder="Full Name"
                className={fieldClass}
                {...register("fullName")}
              />
              {errors.fullName ? (
                <p className="mt-1 text-xs text-red-400">
                  {errors.fullName.message}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone Number"
                className={fieldClass}
                {...register("phone")}
              />
              {errors.phone ? (
                <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
              ) : null}
            </div>
          </div>

          <div className="relative z-10 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Email Address"
                className={fieldClass}
                {...register("email")}
              />
              {errors.email ? (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="serviceAddress"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
              >
                Address
              </label>
              <input
                id="serviceAddress"
                autoComplete="street-address"
                placeholder="Address"
                className={fieldClass}
                {...register("serviceAddress")}
              />
              {errors.serviceAddress ? (
                <p className="mt-1 text-xs text-red-400">
                  {errors.serviceAddress.message}
                </p>
              ) : null}
            </div>
          </div>

          <div className="relative z-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Upload Photos (Optional)
            </p>
            <PhotoUploader files={photos} onChange={setPhotos} />
          </div>

          <div className="relative z-10">
            <label
              htmlFor="junkType"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
            >
              What type of junk needs removed?
            </label>
            <select
              id="junkType"
              className={fieldClass}
              defaultValue=""
              {...register("junkType")}
            >
              <option value="" disabled>
                Select junk type
              </option>
              {JUNK_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.junkType ? (
              <p className="mt-1 text-xs text-red-400">
                {errors.junkType.message}
              </p>
            ) : null}
          </div>

          <div className="relative z-10">
            <label
              htmlFor="details"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
            >
              Details
            </label>
            <textarea
              id="details"
              rows={3}
              className={`${fieldClass} resize-y`}
              placeholder="Access notes, preferred timing..."
              {...register("details")}
            />
          </div>

          <input type="hidden" {...register("utm_source")} />
          <input type="hidden" {...register("utm_medium")} />
          <input type="hidden" {...register("utm_campaign")} />
          <input type="hidden" {...register("utm_term")} />
          <input type="hidden" {...register("utm_content")} />
          <input type="hidden" {...register("pageUrl")} />
          <input type="hidden" {...register("submittedAt")} />

          {status === "error" ? (
            <div
              role="alert"
              className="relative z-10 rounded-[2px] border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-200"
            >
              {errorMessage}
            </div>
          ) : null}

          <ShimmerButton
            type="submit"
            className="relative z-10 w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden />
                Sending...
              </>
            ) : (
              <>
                Get My Free Quote
                <ArrowRight className="size-4" aria-hidden />
              </>
            )}
          </ShimmerButton>
          <p className="relative z-10 text-center text-xs text-muted">
            Your information is 100% secure and never shared.
          </p>
        </form>
        </BlurFade>
      </div>
    </section>
  );
}
