"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { BRAND, JUNK_TYPES } from "@/lib/constants";
import { quoteSchema, type QuoteFormValues } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { PhotoUploader } from "@/components/forms/PhotoUploader";

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
    <section id="quote" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Free Quote
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-5xl">
            GET MY FREE QUOTE
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Tell us what you need hauled. Upload photos for a faster, more
            accurate estimate.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="glow-border mt-10 space-y-5 rounded-[2px] bg-card p-6 sm:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
              >
                Full Name *
              </label>
              <input
                id="fullName"
                autoComplete="name"
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
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                className={fieldClass}
                {...register("phone")}
              />
              {errors.phone ? (
                <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
              ) : null}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={fieldClass}
                {...register("email")}
              />
              {errors.email ? (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="junkType"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
              >
                Type of Junk *
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
          </div>

          <div>
            <label
              htmlFor="serviceAddress"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
            >
              Service Address *
            </label>
            <input
              id="serviceAddress"
              autoComplete="street-address"
              className={fieldClass}
              {...register("serviceAddress")}
            />
            {errors.serviceAddress ? (
              <p className="mt-1 text-xs text-red-400">
                {errors.serviceAddress.message}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="details"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
            >
              Details
            </label>
            <textarea
              id="details"
              rows={4}
              className={`${fieldClass} resize-y`}
              placeholder="Describe the junk, access notes, preferred timing..."
              {...register("details")}
            />
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Photos (optional)
            </p>
            <PhotoUploader files={photos} onChange={setPhotos} />
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
              className="rounded-[2px] border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-200"
            >
              {errorMessage}
            </div>
          ) : null}

          <Button
            type="submit"
            showArrow
            className="w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden />
                Sending...
              </>
            ) : (
              "Get My Free Quote"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
