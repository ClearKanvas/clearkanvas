import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";
import { ABOUT_NAV } from "@/lib/services";

export const metadata: Metadata = {
  title: "About | ClearKanvas Global",
  description:
    "The story, purpose, people, and global presence behind ClearKanvas Global.",
};

const BLURB: Record<string, string> = {
  "Our Story": "Why we built a third option for growing companies.",
  "Mission, Vision & Values": "What we are here to do, and how we work.",
  Leadership: "The founding partners behind ClearKanvas Global.",
  "Global Presence": "Where we serve, and where we deliver.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero
          eyebrow="About"
          title="A partner built by operators"
          tagline="Experts who advise, build, and run, so complexity becomes clarity."
          intro="ClearKanvas Global clears the operational noise that holds great companies back. Get to know our story, our purpose, the people behind it, and where we work."
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
        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>Let us take the complexity off your plate.</h2>
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
