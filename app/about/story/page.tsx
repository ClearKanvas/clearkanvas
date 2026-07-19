import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";
import { STORY } from "@/lib/about";

export const metadata: Metadata = {
  title: "Our Story | ClearKanvas Global",
  description:
    "ClearKanvas Global helps companies hire the right people anywhere in the world, through recruitment, Employer of Record, and staff offshoring.",
};

export default function StoryPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero
          eyebrow="Our Story"
          title="Our story"
          crumbs={[{ href: "/about", label: "About" }, { label: "Our Story" }]}
        />
        <section className="section">
          <div className="wrap wrap-narrow">
            <div className="prose reveal">
              {STORY.map((para, i) => (
                <p className={i === 0 ? "prose-lead" : undefined} key={para.slice(0, 40)}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>Tell us who you need.</h2>
            <p>We will find them, employ them, and run it for you. A real person replies within one business day.</p>
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
