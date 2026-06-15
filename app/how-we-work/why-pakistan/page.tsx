import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Why Pakistan | ClearKanvas",
  description:
    "A serious delivery advantage, not just a cheaper one. A large, English-speaking talent pool with strong skills and useful time-zone overlap.",
};

const POINTS = [
  { k: "A deep talent pool", v: "A large, young, English-speaking workforce with strong finance, technology, and operations skills." },
  { k: "A real cost advantage", v: "High-quality delivery at a meaningful cost advantage to the US and UK." },
  { k: "Time-zone overlap", v: "Real-time collaboration with the UK and the Gulf during your working day." },
  { k: "Follow-the-sun", v: "A full working-day handoff to North America when you need it." },
];

export default function WhyPakistanPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero
          eyebrow="Why Pakistan"
          title="Why Pakistan"
          tagline="A serious delivery advantage, not just a cheaper one."
          intro="Pakistan offers a large, young, English-speaking talent pool with strong finance, technology, and operations skills, at a meaningful cost advantage to the US and UK. Time-zone overlap supports real-time collaboration with the UK and the Gulf, and a full working-day handoff to North America. We turn that advantage into a managed, reliable capability for you."
          crumbs={[{ href: "/how-we-work", label: "How We Work" }, { label: "Why Pakistan" }]}
        />
        <section className="section">
          <div className="wrap">
            <div className="cap-grid" data-stagger>
              {POINTS.map((p, i) => (
                <article className="cap-card" key={p.k} data-tilt>
                  <span className="cap-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.k}</h3>
                  <p>{p.v}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>Put that advantage to work.</h2>
            <p>Tell us what you want to build and we will show you how we deliver it from Pakistan.</p>
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
