"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { PARTNER_BUSINESS_TYPES } from "@/data/partners";

const REFERRAL_OPTIONS = [
  "1–2",
  "3–5",
  "6–10",
  "11–20",
  "20+",
  "Not sure yet",
] as const;

type PartnerApplicationFormProps = {
  defaultBusinessType?: string;
};

export function PartnerApplicationForm({
  defaultBusinessType = "",
}: PartnerApplicationFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("pageUrl", window.location.href);
    formData.set("submittedAt", new Date().toISOString());

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        body: formData,
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ?? "Unable to submit. Please call 810-242-0429.",
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Unable to submit. Please call 810-242-0429.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-[#020305] p-6 sm:p-8">
        <h3 className="font-heading text-xl text-white">Application received</h3>
        <p className="mt-3 text-sm text-muted">
          Thanks for your interest in the Junk Command Partner Program. We will
          follow up soon to coordinate referrals across Port Huron and the Blue
          Water Area.
        </p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => setStatus("idle")}
        >
          Submit another
        </Button>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 w-full rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#020305] px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-muted/70 focus:border-bright";
  const labelClass = "block text-xs font-semibold uppercase tracking-[0.12em] text-muted";

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-[#020305] p-5 sm:p-6"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Business Name
          <input
            name="businessName"
            required
            minLength={2}
            className={fieldClass}
            autoComplete="organization"
          />
        </label>
        <label className={labelClass}>
          Contact Name
          <input
            name="contactName"
            required
            minLength={2}
            className={fieldClass}
            autoComplete="name"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Email
          <input
            name="email"
            type="email"
            required
            className={fieldClass}
            autoComplete="email"
          />
        </label>
        <label className={labelClass}>
          Phone
          <input
            name="phone"
            type="tel"
            required
            minLength={10}
            className={fieldClass}
            autoComplete="tel"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Business Type
          <select
            name="businessType"
            required
            defaultValue={defaultBusinessType}
            className={fieldClass}
          >
            <option value="" disabled>
              Select type
            </option>
            {PARTNER_BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Estimated Referrals Per Month
          <select
            name="estimatedReferrals"
            required
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Select range
            </option>
            {REFERRAL_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className={labelClass}>
        Message
        <textarea
          name="message"
          rows={4}
          className={fieldClass}
          placeholder="Tell us about your customers and how you typically refer junk removal or hauling jobs."
        />
      </label>

      {status === "error" ? (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <Button type="submit" showArrow disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </Button>
    </form>
  );
}
