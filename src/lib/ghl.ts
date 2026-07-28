/**
 * GoHighLevel (GHL) integration helpers.
 *
 * Connect your webhook:
 * 1. Create a GHL inbound webhook / workflow trigger
 * 2. Set GHL_WEBHOOK_URL in your environment (.env.local / Vercel)
 * 3. POST quote payloads from /api/quote to that URL
 *
 * Typical GHL follow-ups after a successful webhook:
 * - Add / update contact in CRM
 * - Trigger SMS automation (quote acknowledgment)
 * - Trigger email notification to the crew
 * - Add contact to a pipeline stage (e.g. "New Quote Request")
 * - Upload photos to cloud storage, then attach URLs to the contact note
 */

export type GhlQuotePayload = {
  fullName: string;
  phone: string;
  email: string;
  serviceAddress: string;
  junkType: string;
  details?: string;
  photoCount?: number;
  photoNames?: string[];
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  pageUrl?: string;
  submittedAt?: string;
};

export async function sendToGoHighLevel(
  payload: GhlQuotePayload,
): Promise<{ ok: boolean; status?: number; error?: string }> {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    // Placeholder: no webhook configured yet
    console.info(
      "[GHL] GHL_WEBHOOK_URL not set — skipping webhook. Payload:",
      payload,
    );
    return { ok: true };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        error: `GHL webhook failed with ${res.status}`,
      };
    }

    return { ok: true, status: res.status };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown GHL error",
    };
  }
}
