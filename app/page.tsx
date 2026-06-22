import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import Services from "@/components/Services";
import Flagship from "@/components/Flagship";
import Values from "@/components/Values";
import Process from "@/components/Process";
import Markets from "@/components/Markets";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
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
        {/* 8 Final CTA */}
        <ClosingCTA />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
