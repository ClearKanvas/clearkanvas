import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CareersMain from "@/components/CareersMain";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clearkanvas.com";

export const metadata: Metadata = {
  title: "Careers | ClearKanvas Global",
  description:
    "Build your career at ClearKanvas Global. Join a global talent company placing people across six regions, with mentorship, global clients, and a clear path to grow.",
  alternates: { canonical: "/careers" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers` },
  ],
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Nav />
      <main id="top">
        <CareersMain />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
