"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Arrow from "./Arrow";
import { orbField } from "@/lib/orbField";
import { SERVICES, type Service } from "@/lib/services";

function Tick({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4 4 10-10" stroke="#FF6A2B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServiceDetail({ service }: { service: Service }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return orbField(canvasRef.current, service.orbs, "source-over");
  }, [service.orbs]);

  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 2);
  const firstWord = service.name.split(/[ &,]/)[0].toLowerCase();
  const isRecruitment = service.slug === "recruitment";

  const coverHeading =
    service.slug === "employer-of-record"
      ? "What EOR covers"
      : service.slug === "staff-offshoring"
        ? "Roles we typically offshore"
        : "Any role, any domain";

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
            <span className="svc-hero-exp">{service.experience}</span>
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

      {/* COVERAGE , regions (recruitment/offshoring) or delivery model (EOR) */}
      {(service.regions || service.coverage) && (
        <section className="section">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">Global reach</span>
              <h2>Where we deliver {service.name.toLowerCase()}</h2>
            </div>
            {service.coverage ? (
              <div className="cov-rows reveal">
                {service.coverage.map((c) => (
                  <div className="cov-row" key={c.region}>
                    <span className="cov-r">{c.region}</span>
                    <span className="cov-m">{c.note}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="cov-chips reveal" data-stagger>
                {service.regions!.map((r) => (
                  <span className="cov-chip" key={r}>{r}</span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ROLES / WHAT WE COVER */}
      <section className="section engage">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">What we cover</span>
            <h2>{coverHeading}</h2>
          </div>

          {isRecruitment && service.rolesTech && service.rolesNonTech ? (
            <>
              <div className="roles-cols reveal">
                <div className="role-col">
                  <h3>Technical roles</h3>
                  <div className="role-list">
                    {service.rolesTech.map((r) => (
                      <span className="sub-item" key={r}>
                        <span className="sub-tick"><Tick /></span>
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="role-col">
                  <h3>Non-technical roles</h3>
                  <div className="role-list">
                    {service.rolesNonTech.map((r) => (
                      <span className="sub-item" key={r}>
                        <span className="sub-tick"><Tick /></span>
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {service.specialized && (
                <div className="spec-block reveal">
                  <div className="spec-head">
                    <span className="spec-eyebrow">Our specialty</span>
                    <h3>Fintech &amp; Compliance recruitment</h3>
                    <p>This is our sharpest edge, and a genuine differentiator against generic agencies.</p>
                  </div>
                  <div className="spec-grid" data-stagger>
                    {service.specialized.map((s) => (
                      <div className="spec-card" key={s.domain}>
                        <span className="spec-d">{s.domain}</span>
                        <p>{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="sub-grid" data-stagger>
              {service.subServices.map((s) => (
                <span className="sub-item" key={s}>
                  <span className="sub-tick"><Tick /></span>
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* HOW IT WORKS , steps */}
      <section className="section">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">How it works</span>
            <h2>A clear, repeatable process</h2>
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

      {/* WHAT'S INCLUDED */}
      <section className="section">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">What&apos;s included</span>
            <h2>What you get</h2>
          </div>
          <div className="incl-grid reveal" data-stagger>
            {service.whatsIncluded.map((w) => (
              <div className="incl-item" key={w}>
                <Tick size={18} />
                <span>{w}</span>
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
                <span className="outcome-tick"><Tick size={22} /></span>
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
          <p>Tell us who you need and we will show you how we can help.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">
              Book a Discovery Call <Arrow size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
