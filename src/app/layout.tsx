import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import {
  getFaqSchema,
  getLocalBusinessSchema,
  getReviewSchema,
  getServiceSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Junk Removal Port Huron MI | Junk Command",
  description:
    "Junk Command provides fast, professional junk removal in Port Huron, Marysville, Fort Gratiot, and St. Clair County. Same-day options, upfront pricing. Call 810-336-5865.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Junk Removal Port Huron MI | Junk Command",
    description:
      "Take command of your clutter. Professional junk removal across Port Huron and St. Clair County. Free quotes. Call 810-336-5865.",
    siteName: "Junk Command",
    images: [
      {
        url: "/images/junk-command-hero.webp",
        width: 1200,
        height: 630,
        alt: "Junk Command junk removal crew in Port Huron, MI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Port Huron MI | Junk Command",
    description:
      "Fast junk removal in Port Huron & St. Clair County. Free quotes. Call 810-336-5865.",
    images: ["/images/junk-command-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = [
    getLocalBusinessSchema(),
    getServiceSchema(),
    getFaqSchema(),
    getReviewSchema(),
  ];

  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} h-full`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {schemas.map((schema, index) => (
          <script
            // eslint-disable-next-line react/no-danger
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
