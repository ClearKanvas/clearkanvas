import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import InternshipMain from "@/components/InternshipMain";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clearkanvas.com";

export const metadata: Metadata = {
  title: "Internship Program | ClearKanvas Global",
  description:
    "A learning-based, unpaid internship of about three months at ClearKanvas Global. Hands-on, mentored work with a global talent company, for final-year students and recent graduates.",
  alternates: { canonical: "/careers/internships" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers` },
    { "@type": "ListItem", position: 3, name: "Internship Program", item: `${SITE_URL}/careers/internships` },
  ],
};

export default function InternshipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Nav />
      <main id="top">
        <InternshipMain />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
