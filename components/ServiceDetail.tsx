"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Arrow from "./Arrow";
import { orbField } from "@/lib/orbField";
import { SERVICES, type Service } from "@/lib/services";

export default function ServiceDetail({ service }: { service: Service }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return orbField(canvasRef.current, service.orbs, "source-over");
  }, [service.orbs]);

  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const firstWord = service.name.split(/[ &,]/)[0].toLowerCase();

  return (
    <>
      {/* HERO */}
      <section className="svc-hero">
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="hero-aurora"></div>
          <canvas className="orb-canvas" ref={canvasRef}></canvas>
        </div>
        <div className="wrap svc-hero-inner">
          <nav className="crumb reveal" aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span>{service.name}</span>
          </nav>
          <div className="svc-hero-top reveal">
            <span className="svc-hero-num">{service.num}</span>
            {service.flagship && <span className="svc-flag">Flagship</span>}
          </div>
          <h1 className="reveal">{service.name}</h1>
          <p className="svc-hero-tag reveal">{service.promise}</p>
          <p className="svc-hero-intro reveal">{service.intro}</p>
          <div className="hero-cta reveal">
            <Link className="btn btn-primary" href="/contact">
              Talk to us about {firstWord} <Arrow size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO , sub-services grid */}
      <section className="section">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">What we do</span>
            <h2>Everything the function needs, run for you</h2>
          </div>
          <div className="sub-grid" data-stagger>
            {service.subServices.map((s) => (
              <span className="sub-item" key={s}>
                <span className="sub-tick" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.5l4 4 10-10" stroke="#FF6A2B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DO IT , steps */}
      <section className="section engage">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">How we do it</span>
            <h2>A clear way of working</h2>
          </div>
          <div className="engage-grid" data-stagger>
            {service.how.map((step, i) => (
              <div className="engage-step" key={step.title}>
                <span className="engage-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GAIN , outcomes navy band */}
      <section className="section svc-outcomes">
        <div className="wrap">
          <div className="head center reveal">
            <span className="eyebrow on-navy">What you gain</span>
            <h2>The outcomes that matter</h2>
          </div>
          <div className="outcome-row" data-stagger>
            {service.gains.map((o) => (
              <div className="outcome" key={o}>
                <span className="outcome-tick" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.5l4 4 10-10" stroke="#FF6A2B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p>{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLEARKANVAS */}
      <section className="section">
        <div className="wrap">
          <div className="why-block reveal">
            <span className="eyebrow">Why ClearKanvas Global</span>
            <p className="why-lead">{service.why}</p>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="section other-section">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Explore more</span>
            <h2>Other ways we can help</h2>
          </div>
          <div className="other-grid" data-stagger>
            {others.map((s) => (
              <Link className="other-card" href={`/services/${s.slug}`} key={s.slug}>
                <span className="svc-num">{s.num}</span>
                <h3>{s.name}</h3>
                <p>{s.summary}</p>
                <span className="learn-static">
                  Learn more <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band cta-band-static">
        <div className="wrap cta-inner reveal">
          <h2>Ready to talk about {service.name}?</h2>
          <p>Tell us where the complexity is and we will show you how we can help.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">
              Book a discovery call <Arrow size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
