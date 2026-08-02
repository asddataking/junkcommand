import type { Metadata } from "next";
import { Bebas_Neue, Inter, Oswald } from "next/font/google";
import Script from "next/script";
import {
  getFaqSchema,
  getLocalBusinessSchema,
  getOrganizationSchema,
  getReviewSchema,
  getServiceSchema,
  getWebSiteSchema,
} from "@/lib/schema";
import { getHomepageFaqs } from "@/data/faqs";
import {
  SITE_URL,
  SOCIAL_SHARE_IMAGE,
  SOCIAL_SHARE_IMAGE_ALT,
  SOCIAL_SHARE_IMAGE_HEIGHT,
  SOCIAL_SHARE_IMAGE_WIDTH,
} from "@/lib/constants";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-9ZVZX7M7FJ";

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

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Junk Removal Port Huron, MI | Curbside Pickup From $99 | Junk Command",
  description:
    "Affordable junk removal in Port Huron and the Blue Water Area. Curbside pickup starts at $99 and full-service removal starts at $129. Send photos for a confirmed price.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Junk Removal Port Huron, MI | Curbside Pickup From $99 | Junk Command",
    description:
      "Affordable junk removal in Port Huron and the Blue Water Area. Curbside pickup starts at $99 and full-service removal starts at $129. Send photos for a confirmed price.",
    siteName: "Junk Command",
    images: [
      {
        url: SOCIAL_SHARE_IMAGE,
        width: SOCIAL_SHARE_IMAGE_WIDTH,
        height: SOCIAL_SHARE_IMAGE_HEIGHT,
        alt: SOCIAL_SHARE_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Port Huron, MI | Curbside Pickup From $99 | Junk Command",
    description:
      "Curbside junk pickup from $99 and full-service from $129 in Port Huron & the Blue Water Area.",
    images: [SOCIAL_SHARE_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const reviewSchema = getReviewSchema();
  const schemas = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getLocalBusinessSchema(),
    getServiceSchema(),
    getFaqSchema(getHomepageFaqs()),
    ...(reviewSchema ? [reviewSchema] : []),
  ];

  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} ${oswald.variable} h-full`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
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
