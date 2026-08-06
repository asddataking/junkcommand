import { z } from "zod";
import { SERVICE_TYPES } from "@/data/curbside-pricing";

export const quoteSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[\d\s()+.-]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  serviceAddress: z.string().min(5, "Enter your service address"),
  serviceType: z.enum(SERVICE_TYPES, {
    error: "Select a service type",
  }),
  itemDescription: z
    .string()
    .min(3, "Describe the items you need removed"),
  preferredDay: z.string().min(1, "Share a preferred pickup day"),
  accessNotes: z.string().min(1, "Add access notes or write N/A"),
  details: z.string().optional(),
  estimateRange: z.string().optional(),
  recommendedService: z.string().optional(),
  /** Backward-compatible alias for GHL mapping */
  junkType: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  pageUrl: z.string().optional(),
  submittedAt: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;

export const partnerSchema = z.object({
  businessName: z.string().min(2, "Enter your business name"),
  contactName: z.string().min(2, "Enter a contact name"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[\d\s()+.-]+$/, "Enter a valid phone number"),
  businessType: z.string().min(2, "Select a business type"),
  estimatedReferrals: z.string().min(1, "Select estimated referrals"),
  message: z.string().optional(),
  pageUrl: z.string().optional(),
  submittedAt: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

export type PartnerFormValues = z.infer<typeof partnerSchema>;
