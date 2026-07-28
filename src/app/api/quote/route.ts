import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation";
import { sendToGoHighLevel } from "@/lib/ghl";

export const runtime = "nodejs";

/**
 * POST /api/quote
 *
 * Accepts multipart form data (quote fields + optional photos).
 * Validates with Zod, then forwards to GoHighLevel via GHL_WEBHOOK_URL.
 *
 * GHL webhook setup:
 * 1. In GoHighLevel, create a Workflow with an inbound webhook trigger
 * 2. Copy the webhook URL
 * 3. Set GHL_WEBHOOK_URL in .env.local (local) and Vercel env vars (prod)
 * 4. Map payload fields to GHL contact custom fields as needed
 *
 * Photo handling (recommended production flow):
 * - Upload photos to S3 / Cloudflare R2 / Uploadthing
 * - Attach resulting URLs to the GHL contact note or custom fields
 * - This route currently forwards photo metadata (names/count) only
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const raw = {
      fullName: String(formData.get("fullName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      serviceAddress: String(formData.get("serviceAddress") ?? ""),
      junkType: String(formData.get("junkType") ?? ""),
      details: String(formData.get("details") ?? "") || undefined,
      utm_source: String(formData.get("utm_source") ?? "") || undefined,
      utm_medium: String(formData.get("utm_medium") ?? "") || undefined,
      utm_campaign: String(formData.get("utm_campaign") ?? "") || undefined,
      utm_term: String(formData.get("utm_term") ?? "") || undefined,
      utm_content: String(formData.get("utm_content") ?? "") || undefined,
      pageUrl: String(formData.get("pageUrl") ?? "") || undefined,
      submittedAt:
        String(formData.get("submittedAt") ?? "") || new Date().toISOString(),
    };

    const parsed = quoteSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid form data",
          issues: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const photos = formData
      .getAll("photos")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    // TODO: upload `photos` to object storage and include public URLs in GHL payload
    const ghlResult = await sendToGoHighLevel({
      ...parsed.data,
      photoCount: photos.length,
      photoNames: photos.map((file) => file.name),
    });

    if (!ghlResult.ok) {
      console.error("[quote] GHL webhook error:", ghlResult.error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We received your request but could not sync CRM. Please call 810-336-5865.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[quote] Unexpected error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to process quote request. Please try again.",
      },
      { status: 500 },
    );
  }
}
