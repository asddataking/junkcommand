import { NextResponse } from "next/server";
import { partnerSchema } from "@/lib/validation";
import { sendPartnerToGoHighLevel } from "@/lib/ghl";

export const runtime = "nodejs";

/**
 * POST /api/partner
 *
 * Accepts partner application form data and forwards to GoHighLevel.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const raw = {
      businessName: String(formData.get("businessName") ?? ""),
      contactName: String(formData.get("contactName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      businessType: String(formData.get("businessType") ?? ""),
      estimatedReferrals: String(formData.get("estimatedReferrals") ?? ""),
      message: String(formData.get("message") ?? "") || undefined,
      pageUrl: String(formData.get("pageUrl") ?? "") || undefined,
      submittedAt:
        String(formData.get("submittedAt") ?? "") || new Date().toISOString(),
      utm_source: String(formData.get("utm_source") ?? "") || undefined,
      utm_medium: String(formData.get("utm_medium") ?? "") || undefined,
      utm_campaign: String(formData.get("utm_campaign") ?? "") || undefined,
    };

    const parsed = partnerSchema.safeParse(raw);
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

    const ghlResult = await sendPartnerToGoHighLevel({
      formType: "partner_application",
      businessName: parsed.data.businessName,
      contactName: parsed.data.contactName,
      fullName: parsed.data.contactName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      businessType: parsed.data.businessType,
      estimatedReferrals: parsed.data.estimatedReferrals,
      message: parsed.data.message,
      serviceType: "Partner Application",
      junkType: "Partner Application",
      pageUrl: parsed.data.pageUrl,
      submittedAt: parsed.data.submittedAt,
      utm_source: parsed.data.utm_source,
      utm_medium: parsed.data.utm_medium,
      utm_campaign: parsed.data.utm_campaign,
    });

    if (!ghlResult.ok) {
      console.error("[partner] GHL webhook error:", ghlResult.error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We received your application but could not sync CRM. Please call 810-242-0429.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[partner] Unexpected error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to process partner application. Please try again.",
      },
      { status: 500 },
    );
  }
}
