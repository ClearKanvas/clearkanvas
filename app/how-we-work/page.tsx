import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";
import { HOW_WE_WORK_NAV } from "@/lib/services";

export const metadata: Metadata = {
  title: "How We Work | ClearKanvas Global",
  alternates: { canonical: "/how-we-work" },
  description:
    "Four ways to engage, one clear process, and the reasons companies choose ClearKanvas Global and our delivery base in Pakistan.",
};

const BLURB: Record<string, string> = {
  "Engagement Models": "Four ways to engage, one standard of quality.",
  "Our Process": "A clear path from first call to a function that just runs.",
  "Why ClearKanvas Global": "The reasons companies choose us over a vendor or a hire.",
  "Why Pakistan": "A serious delivery advantage, not just a cheaper one.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero
          eyebrow="How We Work"
          title="How we work with you"
          tagline="Clear models, a proven process, and a partner that owns the outcome."
          intro="From the way you engage us to the way we deliver, everything is designed to be simple to start and built to scale. Explore how we work below."
        />
        <section className="section">
          <div className="wrap">
            <div className="index-grid" data-stagger>
              {HOW_WE_WORK_NAV.map((item) => (
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
            <h2>Ready to start?</h2>
            <p>Tell us what you are trying to build and we will show you the cleanest way to get there.</p>
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
