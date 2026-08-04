"use client";

import { useState } from "react";
import Link from "next/link";
import Arrow from "./Arrow";
import FlowSteps from "./FlowSteps";
import InternshipForm from "./InternshipForm";
import { INTERNSHIP as I, INTERNSHIPS_OPEN } from "@/lib/internships";

export default function InternshipMain() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="svc-hero">
        <div className="wrap svc-hero-inner">
          <nav className="crumb reveal" aria-label="Breadcrumb">
            <Link href="/careers">Careers</Link>
            <span aria-hidden="true"> / </span>
            <span>{I.eyebrow}</span>
          </nav>
          <span className="eyebrow reveal">{I.eyebrow}</span>
          <h1 className="reveal">{I.headline}</h1>
          <p className="svc-hero-tag reveal">{I.subhead}</p>
          {INTERNSHIPS_OPEN && (
            <div className="hero-cta reveal">
              <button className="btn btn-primary" onClick={() => setFormOpen(true)}>
                Apply for the internship <Arrow size={15} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="wrap wrap-narrow">
          <p className="prose-lead reveal">{I.intro}</p>
        </div>
      </section>

      {/* WHAT YOU WILL GAIN */}
      <section className="section engage">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">The program</span>
            <h2>{I.gainsHeading}</h2>
          </div>
          <div className="cr-values intern-grid" data-stagger>
            {I.gains.map((g) => (
              <div className="cr-value" key={g.title}>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="section">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Who it is for</span>
            <h2>{I.whoHeading}</h2>
            <p>{I.whoText}</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section engage">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">The process</span>
            <h2>{I.stepsHeading}</h2>
          </div>
          <FlowSteps steps={I.steps} />
        </div>
      </section>

      {/* CLOSING */}
      <section className="section cta-band cta-band-static">
        <div className="wrap cta-inner reveal">
          {INTERNSHIPS_OPEN ? (
            <>
              <h2>{I.closingHeading}</h2>
              <p>{I.closingSupporting}</p>
              <div className="hero-cta">
                <button className="btn btn-primary" onClick={() => setFormOpen(true)}>
                  Apply for the internship <Arrow size={15} />
                </button>
              </div>
            </>
          ) : (
            <>
              <h2>{I.closedHeading}</h2>
              <p>{I.closedSupporting}</p>
              <div className="hero-cta">
                <Link className="btn btn-ghost" href="/careers">
                  Go to Careers <Arrow size={15} />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <InternshipForm open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
