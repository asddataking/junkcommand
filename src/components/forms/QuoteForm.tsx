"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { SERVICE_TYPES } from "@/data/curbside-pricing";
import { quoteSchema, type QuoteFormValues } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { PhotoUploader } from "@/components/forms/PhotoUploader";
import { useLaunchSoonModal } from "@/components/ui/LaunchSoonModal";
import { useHomepageBookingOptional } from "@/components/home/HomepageBookingContext";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";
import { DotPattern } from "@/components/magicui/dot-pattern";

const benefits = [
  "Confirmed price from photos",
  "Curbside from $99",
  "Full-service from $129",
  "No surprise charges before loading",
] as const;

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-[6px] border border-[rgba(0,135,255,0.35)] bg-[#020305] px-3 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-bright focus:shadow-[0_0_0_1px_rgba(24,160,255,0.4)]";

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
  const { openModal } = useLaunchSoonModal();
  const booking = useHomepageBookingOptional();
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
      serviceType: undefined,
      itemDescription: "",
      preferredDay: "",
      accessNotes: "",
      details: "",
      estimateRange: "",
      recommendedService: "",
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

  useEffect(() => {
    if (!booking?.prefill) return;
    const { prefill } = booking;
    setValue("serviceType", prefill.serviceType);
    setValue("itemDescription", prefill.itemDescription);
    setValue("details", prefill.details);
    setValue("estimateRange", prefill.estimateRange ?? "");
    setValue("recommendedService", prefill.recommendedService ?? "");
  }, [booking, booking?.prefill, setValue]);

  const onSubmit = handleSubmit(async (values) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const formData = new FormData();
      const payload: QuoteFormValues = {
        ...values,
        junkType: values.serviceType,
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
      booking?.clearPrefill();
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
          <div className="glow-border-strong rounded-[8px] bg-card p-8 text-center sm:p-10">
            <CheckCircle2 className="mx-auto size-12 text-bright" aria-hidden />
            <h2 className="mt-4 font-display text-4xl tracking-[0.08em] text-white">
              QUOTE REQUEST RECEIVED
            </h2>
            <p className="mt-3 text-muted">
              We will review your photos and text a confirmed price before
              pickup. Need it sooner? Call or text {BRAND.phone}.
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
      <button
        type="button"
        onClick={openModal}
        className="absolute inset-0 z-30 cursor-pointer"
        aria-label="Get your curbside price — launching soon, stay tuned"
      />
      <DotPattern
        width={20}
        height={20}
        cr={0.8}
        className="pointer-events-none opacity-20 [mask-image:linear-gradient(to_right,white,transparent)]"
      />
      <div className="pointer-events-none relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14 lg:px-8">
        <BlurFade>
          <h2 className="font-display text-4xl tracking-[0.06em] text-white sm:text-5xl">
            CONFIRM YOUR PRICE
            <br />
            <span className="text-bright">WITH PHOTOS</span>
          </h2>
          <p className="mt-4 text-muted">
            We will review your photos and text a confirmed price before pickup.
            Do not expect an instant guaranteed price from the online estimator.
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
          <form
            onSubmit={onSubmit}
            className="relative space-y-4 overflow-hidden rounded-[10px] border border-[rgba(0,135,255,0.4)] bg-[#020305] p-5 sm:p-7"
            noValidate
            aria-hidden
            tabIndex={-1}
          >
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

            {booking?.prefill ? (
              <div className="relative z-10 rounded-[6px] border border-bright/40 bg-bright/10 px-4 py-3 text-sm text-white">
                <p className="font-semibold text-bright">Estimator summary applied</p>
                <p className="mt-1 text-muted">
                  {booking.prefill.estimateRange
                    ? `Preliminary estimate: ${booking.prefill.estimateRange}. `
                    : null}
                  Add photos, contact info, and access notes below.
                </p>
              </div>
            ) : null}

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
                  Mobile Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Mobile Phone"
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
                  Pickup Address
                </label>
                <input
                  id="serviceAddress"
                  autoComplete="street-address"
                  placeholder="Pickup Address"
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
              <label
                htmlFor="serviceType"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
              >
                Service Type
              </label>
              <select
                id="serviceType"
                className={fieldClass}
                defaultValue=""
                {...register("serviceType")}
              >
                <option value="" disabled>
                  Select service type
                </option>
                {SERVICE_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.serviceType ? (
                <p className="mt-1 text-xs text-red-400">
                  {errors.serviceType.message}
                </p>
              ) : null}
            </div>

            <div className="relative z-10">
              <label
                htmlFor="itemDescription"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
              >
                Item Description
              </label>
              <textarea
                id="itemDescription"
                rows={2}
                className={`${fieldClass} resize-y`}
                placeholder="Couch, mattress, garage pile..."
                {...register("itemDescription")}
              />
              {errors.itemDescription ? (
                <p className="mt-1 text-xs text-red-400">
                  {errors.itemDescription.message}
                </p>
              ) : null}
            </div>

            <div className="relative z-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                Photo Upload
              </p>
              <p className="mb-3 text-xs text-muted">
                Upload two to four clear photos showing the entire item or pile
                and the path to where we will park.
              </p>
              <PhotoUploader files={photos} onChange={setPhotos} />
            </div>

            <div className="relative z-10 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="preferredDay"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
                >
                  Preferred Pickup Day
                </label>
                <input
                  id="preferredDay"
                  placeholder="e.g. Thursday afternoon"
                  className={fieldClass}
                  {...register("preferredDay")}
                />
                {errors.preferredDay ? (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.preferredDay.message}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="accessNotes"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
                >
                  Access Notes
                </label>
                <input
                  id="accessNotes"
                  placeholder="Gate code, curb only, stairs..."
                  className={fieldClass}
                  {...register("accessNotes")}
                />
                {errors.accessNotes ? (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.accessNotes.message}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="relative z-10">
              <label
                htmlFor="details"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
              >
                Estimate / Extra Details
              </label>
              <textarea
                id="details"
                rows={3}
                className={`${fieldClass} resize-y`}
                placeholder="Estimator summary or anything else we should know"
                {...register("details")}
              />
            </div>

            <input type="hidden" {...register("estimateRange")} />
            <input type="hidden" {...register("recommendedService")} />
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
                className="relative z-10 rounded-[6px] border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-200"
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
              We confirm the final price before loading anything. Your information
              is secure and never shared.
            </p>
          </form>
        </BlurFade>
      </div>
    </section>
  );
}
