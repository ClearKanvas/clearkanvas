import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Slideshow from "@/components/Slideshow";
import Arrow from "@/components/Arrow";
import { MEDIA_PRODUCTION as M } from "@/lib/media";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clearkanvas.com";

export const metadata: Metadata = {
  title: "Media Production | ClearKanvas Global",
  alternates: { canonical: "/services/media-production" },
  description:
    "Media Production is a new ClearKanvas Group line, launching soon: video, branded content, motion graphics, post-production, and creative direction, built to our standard of delivery.",
};

export default function MediaProductionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Media Production",
    description: M.subhead,
    url: `${SITE_URL}/services/media-production`,
    serviceType: "Media Production",
    provider: { "@type": "Organization", name: "ClearKanvas Global", url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="top">
        {/* HERO , cinematic slideshow */}
        <section className="svc-hero svc-hero-cine">
          <div className="svc-hero-bg" aria-hidden="true">
            <Slideshow images={M.heroSlides} />
          </div>
          <div className="wrap svc-hero-inner">
            <nav className="crumb reveal" aria-label="Breadcrumb">
              <Link href="/services">Services</Link>
              <span aria-hidden="true"> / </span>
              <span>{M.headline}</span>
            </nav>
            <div className="mp-eyebrow-row reveal">
              <span className="eyebrow">{M.eyebrow}</span>
              <span className="svc-flag">{M.tag}</span>
            </div>
            <h1 className="reveal">{M.headline}</h1>
            <p className="svc-hero-tag reveal">{M.subhead}</p>
            <div className="hero-cta reveal">
              <Link className="btn btn-primary" href="/contact">
                {M.cta} <Arrow size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* INTRO , the narrative */}
        <section className="section">
          <div className="wrap wrap-narrow">
            <p className="prose-lead reveal">{M.intro}</p>
          </div>
        </section>

        {/* WHAT WE ARE BUILDING , capabilities */}
        <section className="section engage">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">What we are building</span>
              <h2>{M.buildingHeading}</h2>
            </div>
            <div className="cap-grid" data-stagger>
              {M.capabilities.map((c) => (
                <div className="cap-card" key={c.num}>
                  <span className="cap-num">{c.num}</span>
                  <h3>{c.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="section">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">Who it&apos;s for</span>
              <h2>{M.whoHeading}</h2>
              <p>{M.whoText}</p>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>{M.closingHeading}</h2>
            <p>{M.closingSupporting}</p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/contact">
                {M.cta} <Arrow size={15} />
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
