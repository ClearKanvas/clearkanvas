import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Mission, Vision & Values | ClearKanvas Global",
  description:
    "Our purpose, mission, vision, and the values that guide how ClearKanvas Global works.",
};

const PMV = [
  {
    k: "Our purpose",
    v: "We clear the operational noise that holds great companies back.",
  },
  {
    k: "Our mission",
    v: "We give high-growth companies the operational backbone of a global enterprise, built to scale across borders.",
  },
  {
    k: "Our vision",
    v: "To become the global standard for what a business services partner can be.",
  },
];

const VALUES = [
  { t: "Clarity", d: "We turn the complex into the simple, in every solution and every conversation." },
  { t: "Excellence", d: "Good enough is never the standard. We deliver work we are proud to sign." },
  { t: "Integrity", d: "We do what is right, especially when no one is watching." },
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
              <h2>What we stand for</h2>
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
