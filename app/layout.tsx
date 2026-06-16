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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clearkanvas.com";
const TITLE = "ClearKanvas Global: Where complexity becomes clarity";
const DESCRIPTION =
  "ClearKanvas Global is your partner for finance, talent, technology, and operations. Senior specialists and teams that run as an extension of yours, serving the US, Canada, UK, Europe, and the Gulf.";

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
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
        <ScrollProgress />
        <Interactions />
        {children}
      </body>
    </html>
  );
}
