"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Arrow from "./Arrow";
import { orbField } from "@/lib/orbField";
import { INDUSTRY_DETAILS, industrySlug } from "@/lib/services";

// Distinct line-icon per sector, drawn in brand colors.
const ICONS: Record<string, React.ReactNode> = {
  "technology-and-saas": (
    <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="13" rx="2" stroke="#0F1E3D" strokeWidth="1.6" /><path d="M8 21h8M9 9l-2 2 2 2M15 9l2 2-2 2" stroke="#FF6A2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  "professional-services": (
    <svg viewBox="0 0 24 24" fill="none"><path d="M4 8h16v11H4z" stroke="#0F1E3D" strokeWidth="1.6" /><path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="#FF6A2B" strokeWidth="1.6" strokeLinecap="round" /></svg>
  ),
  "financial-services-and-fintech": (
    <svg viewBox="0 0 24 24" fill="none"><path d="M4 10l8-5 8 5M5 10v8h14v-8" stroke="#0F1E3D" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 13v3" stroke="#FF6A2B" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
  "e-commerce-and-retail": (
    <svg viewBox="0 0 24 24" fill="none"><path d="M5 7h14l-1.2 9.5a2 2 0 0 1-2 1.5H8.2a2 2 0 0 1-2-1.5L5 7z" stroke="#0F1E3D" strokeWidth="1.6" strokeLinejoin="round" /><path d="M9 7a3 3 0 0 1 6 0" stroke="#FF6A2B" strokeWidth="1.6" strokeLinecap="round" /></svg>
  ),
  "healthcare-and-life-sciences": (
    <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.7-7 10-7 10z" stroke="#0F1E3D" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 9v4M10 11h4" stroke="#FF6A2B" strokeWidth="1.6" strokeLinecap="round" /></svg>
  ),
  "real-estate-and-property": (
    <svg viewBox="0 0 24 24" fill="none"><path d="M4 20V10l8-5 8 5v10" stroke="#0F1E3D" strokeWidth="1.6" strokeLinejoin="round" /><path d="M10 20v-5h4v5" stroke="#FF6A2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  "manufacturing-and-logistics": (
    <svg viewBox="0 0 24 24" fill="none"><path d="M3 20V9l5 3V9l5 3V6l8 4v10z" stroke="#0F1E3D" strokeWidth="1.6" strokeLinejoin="round" /><path d="M17 14v3" stroke="#FF6A2B" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
};

export default function IndustriesMain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return orbField(
      canvasRef.current,
      [
        { bx: 0.18, by: 0.3, r: 380, ax: 74, ay: 48, sx: 0.13, sy: 0.1, ph: 0.6, c: "15,30,61", a: 0.18 },
        { bx: 0.84, by: 0.24, r: 330, ax: 62, ay: 50, sx: 0.11, sy: 0.14, ph: 2.0, c: "255,106,43", a: 0.16 },
        { bx: 0.74, by: 0.8, r: 340, ax: 66, ay: 54, sx: 0.1, sy: 0.12, ph: 3.4, c: "15,30,61", a: 0.12 },
      ],
      "source-over",
    );
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="svc-hero">
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="hero-aurora"></div>
          <canvas className="orb-canvas" ref={canvasRef}></canvas>
        </div>
        <div className="wrap svc-hero-inner">
          <span className="eyebrow reveal">Industries</span>
          <h1 className="reveal">Industries we serve</h1>
          <p className="svc-hero-tag reveal">
            Deep enough to be useful. Broad enough to support your whole operation.
          </p>
          <p className="svc-hero-intro reveal">
            Good operations are not generic. We bring sector context to the way we run your
            finance, support, and back office, so the work fits how your business actually
            behaves. We serve clients at every stage, from funded startups to established
            mid-market companies, across the sectors below and beyond.
          </p>
        </div>
      </section>

      {/* SECTOR CARDS */}
      <section className="section">
        <div className="wrap">
          <div className="ind-grid" data-stagger>
            {INDUSTRY_DETAILS.map((ind) => {
              const slug = industrySlug(ind.name);
              return (
                <article className="ind-card" id={slug} key={slug} data-tilt>
                  <span className="ind-icon" aria-hidden="true">
                    {ICONS[slug]}
                  </span>
                  <h2>{ind.name}</h2>
                  <p>{ind.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section cta-band cta-band-static">
        <div className="wrap cta-inner reveal">
          <h2>Do not see your industry?</h2>
          <p>
            We work across sectors. If you have a function that needs running well, we can
            help.
          </p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">
              Talk to us <Arrow size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
