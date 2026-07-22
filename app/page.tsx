import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Regions from "@/components/Regions";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
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
        {/* 1 Hero , global positioning */}
        <Hero />
        {/* 2 Core services (4 cards) */}
        <Services />
        {/* 3 Regions we cover (offices vs markets served) */}
        <Regions />
        {/* 4 Industry partners */}
        <Partners />
        {/* 5 Offices */}
        <Team />
        {/* 6 Final CTA */}
        <ClosingCTA />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
