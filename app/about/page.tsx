import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";
import { ABOUT_NAV } from "@/lib/services";
import { PMV } from "@/lib/about";

export const metadata: Metadata = {
  title: "About | ClearKanvas Global",
  alternates: { canonical: "/about" },
  description:
    "The story, purpose, people, and global presence behind ClearKanvas Global.",
};

const BLURB: Record<string, string> = {
  "Our Story": "Why we built ClearKanvas Global, and who we serve.",
  "Purpose & Values": "Our purpose, mission, vision, and the values behind every engagement.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero
          eyebrow="About"
          title="Global talent, delivered by people you can name"
          tagline="Recruitment, EOR, and offshoring, backed by real entities in Pakistan and the USA."
          intro="ClearKanvas Global helps companies hire the right people anywhere in the world. Get to know our story and the team behind it."
          bgImg="/about-clarity.jpg"
        />
        <section className="section">
          <div className="wrap">
            <div className="index-grid" data-stagger>
              {ABOUT_NAV.map((item) => (
                <Link className="index-card" href={item.href} key={item.href} data-tilt>
                  <h2>{item.label}</h2>
                  <p className="index-tag">{BLURB[item.label]}</p>
                  <span className="learn-static">
                    Read more <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* Purpose, Mission, Vision */}
        <section className="section">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">What we stand for</span>
              <h2>What we stand for, whatever we build</h2>
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
            <div className="reveal" style={{ marginTop: "28px" }}>
              <Link className="learn-static" href="/about/purpose-values">
                Read our purpose and values <Arrow />
              </Link>
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
