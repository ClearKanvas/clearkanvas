import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import ScrollProgress from "@/components/ScrollProgress";
import Interactions from "@/components/Interactions";

// Single typeface site-wide: Hanken Grotesk (warm humanist sans). Loaded as a
// variable font, hierarchy comes from size + weight, not from mixing families.
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clearkanvas.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const TITLE = "ClearKanvas Global: Global Recruitment, EOR & Staff Offshoring";
const DESCRIPTION =
  "ClearKanvas Global helps companies hire the right people anywhere in the world: recruitment, Employer of Record (EOR), and staff offshoring. 25+ years in recruitment, 5+ years in EOR and offshore staffing, across the GCC, MENA, Europe, North America, and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s",
  },
  description: DESCRIPTION,
  applicationName: "ClearKanvas Global",
  openGraph: {
    type: "website",
    siteName: "ClearKanvas Global",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Add the token from Google Search Console as GOOGLE_SITE_VERIFICATION in Vercel.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

// Organization + WebSite structured data (helps Google understand the brand,
// powers rich results and local/knowledge-panel signals).
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "ClearKanvas Global",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description: DESCRIPTION,
      email: "hello@clearkanvas.com",
      telephone: "+92 309 6661176",
      slogan: "The right people, anywhere in the world.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot 1-E, Lower Ground Floor, Ali Plaza, Blue Area",
        addressLocality: "Islamabad",
        addressCountry: "PK",
      },
      areaServed: ["GCC", "MENA", "Europe", "North America", "APAC", "LATAM", "Pakistan", "United States"],
      sameAs: [
        "https://www.linkedin.com/company/clearkanvas-global/",
        "https://www.facebook.com/share/1BGMJ9UgF2/?mibextid=wwXIfr",
        "https://www.instagram.com/clearkanvasglobal",
        "https://www.threads.com/@clearkanvasglobal",
        "https://x.com/clearkanvas",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "ClearKanvas Global",
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={sans.variable} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <ScrollProgress />
        <Interactions />
        {children}
        <Analytics />
      </body>
      {/* Google Analytics 4 loads only once NEXT_PUBLIC_GA_ID is set in Vercel. */}
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
