import { z } from "zod";
import { JUNK_TYPES } from "./constants";

export const quoteSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[\d\s()+.-]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  serviceAddress: z.string().min(5, "Enter your service address"),
  junkType: z.enum(JUNK_TYPES, {
    error: "Select a type of junk",
  }),
  details: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  pageUrl: z.string().optional(),
  submittedAt: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
