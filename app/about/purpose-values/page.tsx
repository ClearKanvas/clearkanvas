import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";
import { PMV, VALUES, PMV_INTRO } from "@/lib/about";

export const metadata: Metadata = {
  title: "Purpose & Values | ClearKanvas Global",
  alternates: { canonical: "/about/purpose-values" },
  description:
    "The purpose, mission, vision, and values behind ClearKanvas Global: clarity, excellence, integrity, and partnership.",
};

export default function PurposeValuesPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero
          eyebrow="Purpose & Values"
          title="What we stand for, whatever we build"
          intro={PMV_INTRO}
          crumbs={[{ href: "/about", label: "About" }, { label: "Purpose & Values" }]}
          bgImg="/about-clarity.jpg"
        />

        {/* Purpose, Mission, Vision */}
        <section className="section pv-stack" id="purpose">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">Purpose, mission, vision</span>
              <h2>Why we exist, and where we are going</h2>
            </div>
            <div className="pmv-grid" data-stagger>
              {PMV.map((x) => (
                <div className="pmv-card" key={x.k}>
                  <div className="pmv-media">
                    <Image src={x.img} alt={x.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 975px) 50vw, 33vw" />
                  </div>
                  <div className="pmv-body">
                    <span className="pmv-k">{x.k}</span>
                    <p>{x.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section values" id="values">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">Our values</span>
              <h2>The principles behind every engagement</h2>
            </div>
            <div className="vlist-grid" data-stagger>
              {VALUES.map((v) => (
                <div className="vlist-card" key={v.t}>
                  <div className="vlist-media">
                    <Image src={v.img} alt={v.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 975px) 50vw, 25vw" />
                  </div>
                  <div className="vlist-body">
                    <h3>{v.t}</h3>
                    <p>{v.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>Tell us who you need.</h2>
            <p>We will find them, employ them, and run it for you.</p>
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
