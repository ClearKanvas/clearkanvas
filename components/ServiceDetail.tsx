"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Arrow from "./Arrow";
import FlowSteps from "./FlowSteps";
import Slideshow from "./Slideshow";
import { orbField } from "@/lib/orbField";
import { type Service } from "@/lib/services";

function Tick({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4 4 10-10" stroke="#FF6A2B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServiceDetail({ service }: { service: Service }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // With a hero slideshow the aurora canvas is skipped, so the photos stay crisp.
  const hasSlides = service.heroSlides.length > 0;

  useEffect(() => {
    if (hasSlides) return;
    return orbField(canvasRef.current, service.orbs, "source-over");
  }, [service.orbs, hasSlides]);

  return (
    <>
      {/* HERO */}
      <section className={`svc-hero${hasSlides ? " svc-hero-cine" : ""}`}>
        <div className="svc-hero-bg" aria-hidden="true">
          {hasSlides ? (
            <Slideshow images={service.heroSlides} />
          ) : (
            <>
              <div className="hero-aurora"></div>
              <canvas className="orb-canvas" ref={canvasRef}></canvas>
            </>
          )}
        </div>
        <div className="wrap svc-hero-inner">
          <nav className="crumb reveal" aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span aria-hidden="true"> / </span>
            <span>{service.name}</span>
          </nav>
          {service.flagship && <span className="svc-flag reveal">Flagship</span>}
          <h1 className="reveal">{service.hero.headline}</h1>
          <p className="svc-hero-tag reveal">{service.hero.subline}</p>
          <div className="hero-cta reveal">
            <Link className="btn btn-primary" href="/contact">
              {service.hero.cta} <Arrow size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section engage">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">The problem</span>
            <h2>{service.problem.heading}</h2>
            {service.problem.intro && <p>{service.problem.intro}</p>}
          </div>
          <div className="prob-grid" data-stagger>
            {service.problem.cards.map((c) => (
              <div className="prob-card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
          {service.problem.stat && (
            <div className="prob-stat reveal">
              <span className="prob-stat-big">{service.problem.stat.big}</span>
              <p className="prob-stat-small">{service.problem.stat.small}</p>
            </div>
          )}
          {service.problem.hook && <p className="prob-hook reveal">{service.problem.hook}</p>}
        </div>
      </section>

      {/* WHAT'S INCLUDED , slideshow behind the content */}
      <section className="section wi-section">
        <Slideshow images={service.slides} />
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow on-navy">What&apos;s included</span>
            <h2>{service.included.heading}</h2>
          </div>
          <div className="wi-grid" data-stagger>
            {service.included.items.map((i) => (
              <div className="wi-item" key={i.title}>
                <span className="wi-tick"><Tick /></span>
                <div>
                  <h3>{i.title}</h3>
                  <p>{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section engage">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">How it works</span>
            <h2>{service.process.heading}</h2>
          </div>
          <FlowSteps steps={service.process.steps} />
        </div>
      </section>

      {/* WHY CLEARKANVAS (optional) */}
      {service.why && (
        <section className="section">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">Why ClearKanvas</span>
              <h2>{service.why.heading}</h2>
            </div>
            <div className="why-grid" data-stagger>
              {service.why.items.map((i) => (
                <div className="why-card" key={i.title}>
                  <h3>{i.title}</h3>
                  <p>{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CLOSING CTA */}
      <section className="section cta-band cta-band-static">
        <div className="cta-bg" aria-hidden="true">
          <Image src={service.bandImg} alt="" fill sizes="100vw" />
        </div>
        <div className="wrap cta-inner reveal">
          <h2>{service.closing.heading}</h2>
          {service.closing.supporting && <p>{service.closing.supporting}</p>}
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">
              {service.closing.cta} <Arrow size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
