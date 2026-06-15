import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ProcessFlow from "@/components/ProcessFlow";
import Arrow from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Our Process | ClearKanvas",
  description:
    "A clear path from first call to a function that just runs: Discover, Design, Build, and Operate & optimize.",
};

export default function ProcessPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero
          eyebrow="Our Process"
          title="Our process"
          tagline="A clear path from first call to a function that just runs."
          crumbs={[{ href: "/how-we-work", label: "How We Work" }, { label: "Our Process" }]}
        />
        <section className="section">
          <div className="wrap wrap-narrow">
            <ProcessFlow />
          </div>
        </section>
        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>Ready for step one?</h2>
            <p>It starts with a short conversation. Tell us where the friction is.</p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/contact">
                Book a discovery call <Arrow size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
