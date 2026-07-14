import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BrandFilm from "@/components/BrandFilm";
import Regions from "@/components/Regions";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
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
        {/* 1 Hero , global positioning across the 3 core services */}
        <Hero />
        {/* 2 Core services (3 cards) */}
        <Services />
        {/* 3 Brand film (video-ready band) */}
        <BrandFilm />
        {/* 4 Regions we cover (offices vs markets served) */}
        <Regions />
        {/* 4 Industry partners */}
        <Partners />
        {/* 5 Team + offices */}
        <Team />
        {/* 6 FAQ */}
        <Faq />
        {/* 7 Final CTA */}
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
