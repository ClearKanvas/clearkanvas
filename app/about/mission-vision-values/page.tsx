import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Mission, Vision & Values | ClearKanvas",
  description:
    "Our purpose, mission, vision, and the values that guide how ClearKanvas works.",
};

const PMV = [
  {
    k: "Our purpose",
    v: "To take the operational complexity off ambitious companies, so they can focus on what only they can do.",
  },
  {
    k: "Our mission",
    v: "To give growing businesses across North America, the UK, Europe, and the Gulf access to world-class finance, talent, technology, and operations, delivered by senior people at a cost that makes sense.",
  },
  {
    k: "Our vision",
    v: "To be the partner ambitious companies trust most, known for clarity, quality, and ownership.",
  },
];

const VALUES = [
  { t: "Clarity over complexity", d: "We make the complicated simple, in our work and in how we communicate." },
  { t: "We run what we recommend", d: "Advice without execution is just opinion. We own the outcome." },
  { t: "Senior, always", d: "Real expertise at the table, not just on the proposal." },
  { t: "Outcomes, not hours", d: "We measure ourselves by the results we create for you." },
  { t: "Long-term by design", d: "Your success is the only sustainable version of ours." },
  { t: "Integrity and discretion", d: "We handle your business, your data, and your people with care." },
];

export default function MvvPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero
          eyebrow="Mission, Vision & Values"
          title="Purpose, mission and values"
          crumbs={[{ href: "/about", label: "About" }, { label: "Mission, Vision & Values" }]}
        />
        <section className="section">
          <div className="wrap">
            <div className="pmv-grid" data-stagger>
              {PMV.map((x) => (
                <div className="pmv-card" key={x.k}>
                  <span className="pmv-k">{x.k}</span>
                  <p>{x.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section values">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">Our values</span>
              <h2>How we work, in six lines</h2>
            </div>
            <div className="vlist-grid" data-stagger>
              {VALUES.map((v) => (
                <div className="vlist-card" key={v.t}>
                  <h3>{v.t}</h3>
                  <p>{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>Work with a team that means it.</h2>
            <p>Tell us what you are trying to build and we will show you how we can help.</p>
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
