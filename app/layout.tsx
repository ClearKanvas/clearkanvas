import type { Metadata } from "next";
import { Schibsted_Grotesk, Inter_Tight } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import Interactions from "@/components/Interactions";

// Variable fonts , loading without an explicit `weight` exposes the full
// axis range, matching the prototype's 400 to 900 / 400 to 700 usage.
const display = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clearkanvas.com";
const TITLE = "ClearKanvas Global: Where complexity becomes clarity";
const DESCRIPTION =
  "ClearKanvas Global is your partner for finance, talent, technology, and operations. Expert teams that run as an extension of yours, serving clients in the USA, Pakistan, and Bahrain, and growing into new markets.";

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
      slogan: "Where complexity becomes clarity.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot 1-E, Lower Ground Floor, Ali Plaza, Blue Area",
        addressLocality: "Islamabad",
        addressCountry: "PK",
      },
      areaServed: ["US", "PK", "BH"],
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
      <body className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <ScrollProgress />
        <Interactions />
        {children}
      </body>
    </html>
  );
}
