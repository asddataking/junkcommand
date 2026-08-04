import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation";
import { sendToGoHighLevel } from "@/lib/ghl";

export const runtime = "nodejs";

/**
 * POST /api/quote
 *
 * Accepts multipart form data (quote fields + optional photos).
 * Validates with Zod, then forwards to GoHighLevel via GHL_WEBHOOK_URL.
 * Photos currently forward as metadata only.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const serviceType = String(formData.get("serviceType") ?? "");
    const raw = {
      fullName: String(formData.get("fullName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      serviceAddress: String(formData.get("serviceAddress") ?? ""),
      serviceType,
      itemDescription: String(formData.get("itemDescription") ?? ""),
      preferredDay: String(formData.get("preferredDay") ?? ""),
      accessNotes: String(formData.get("accessNotes") ?? ""),
      details: String(formData.get("details") ?? "") || undefined,
      estimateRange: String(formData.get("estimateRange") ?? "") || undefined,
      recommendedService:
        String(formData.get("recommendedService") ?? "") || undefined,
      junkType: serviceType || String(formData.get("junkType") ?? "") || undefined,
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

    const ghlResult = await sendToGoHighLevel({
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      email: parsed.data.email,
      serviceAddress: parsed.data.serviceAddress,
      serviceType: parsed.data.serviceType,
      junkType: parsed.data.serviceType,
      itemDescription: parsed.data.itemDescription,
      preferredDay: parsed.data.preferredDay,
      accessNotes: parsed.data.accessNotes,
      details: parsed.data.details,
      estimateRange: parsed.data.estimateRange,
      recommendedService: parsed.data.recommendedService,
      photoCount: photos.length,
      photoNames: photos.map((file) => file.name),
      utm_source: parsed.data.utm_source,
      utm_medium: parsed.data.utm_medium,
      utm_campaign: parsed.data.utm_campaign,
      utm_term: parsed.data.utm_term,
      utm_content: parsed.data.utm_content,
      pageUrl: parsed.data.pageUrl,
      submittedAt: parsed.data.submittedAt,
    });

    if (!ghlResult.ok) {
      console.error("[quote] GHL webhook error:", ghlResult.error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We received your request but could not sync CRM. Please call 810-242-0429.",
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
