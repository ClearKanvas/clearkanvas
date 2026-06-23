import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import Services from "@/components/Services";
import Flagship from "@/components/Flagship";
import Values from "@/components/Values";
import Process from "@/components/Process";
import Markets from "@/components/Markets";
import Faq from "@/components/Faq";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { FAQS } from "@/lib/faq";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* 1 Hero */}
        <Hero />
        {/* 2 Positioning strip */}
        <Positioning />
        {/* 3 What we do (8 services) */}
        <Services />
        {/* 4 Flagship spotlight (GCC) */}
        <Flagship />
        {/* 5 Why ClearKanvas Global (4 pillars) */}
        <Values />
        {/* 6 How we work teaser */}
        <Process />
        {/* 7 Markets we serve */}
        <Markets />
        {/* 8 FAQ */}
        <Faq />
        {/* 9 Final CTA */}
        <ClosingCTA />
      </main>
      <Footer />
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
    </>
  );
}
