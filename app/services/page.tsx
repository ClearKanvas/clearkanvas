import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Arrow from "@/components/Arrow";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | ClearKanvas Global",
  alternates: { canonical: "/services" },
  description:
    "Recruitment, Employer of Record (EOR), Talent Offshoring, and Training & Leadership Retreats. Engage ClearKanvas Global for one service or all four.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="section svc-index-hero">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">Services</span>
              <h1 className="svc-index-title">
                Recruitment, Employer of Record, Talent Offshoring, and Leadership Training
              </h1>
              <p>
                Four ways to build and lead your team: find talent, employ it compliantly, run a
                dedicated offshore team, and develop the leaders who guide it. Start with one
                service or use all four. Either way, we own the outcome.
              </p>
            </div>
          </div>
        </section>

        <section className="section svc-index-list">
          <div className="wrap">
            <div className="index-grid" data-stagger>
              {SERVICES.map((s) => (
                <Link
                  className={`index-card${s.flagship ? " index-card-flag" : ""}`}
                  href={`/services/${s.slug}`}
                  key={s.slug}
                  data-tilt
                >
                  <div className="svc-head">
                    <span className="svc-num">{s.num}</span>
                    {s.flagship && <span className="svc-flag">Flagship</span>}
                  </div>
                  <h2>{s.name}</h2>
                  <p className="index-tag">{s.summary}</p>
                  <span className="learn-static">
                    Explore {s.name.split(/[ &,]/)[0]} <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>Not sure which service to start with?</h2>
            <p>Tell us who you need and we will point you to the right team.</p>
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
