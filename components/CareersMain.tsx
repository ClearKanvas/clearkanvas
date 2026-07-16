"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import Arrow from "./Arrow";
import FlowSteps from "./FlowSteps";
import BrandFilm from "./BrandFilm";
import { orbField } from "@/lib/orbField";
import {
  CAREER_STATS,
  CAREER_VALUES,
  CAREER_TEAMS,
  CAREER_GALLERY,
  CAREER_BENEFITS,
  HIRING_PROCESS,
  type CareerValue,
} from "@/lib/careers";

// Crisp vector icons, one per value.
const ICONS: Record<CareerValue["icon"], ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3.5" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.3A4 4 0 0 1 16 11" />
    </>
  ),
  growth: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M21 7v6M21 7h-6" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7-4.35-9.5-8.5C1 8.5 2.5 5 6 5c2 0 3 1.2 4 2.5C11 6.2 12 5 14 5c3.5 0 5 3.5 3.5 6.5C19 15.65 12 20 12 20z" />
    </>
  ),
};

// Background video for the "Teams you can join" band.
// TO GO LIVE: drop a short, silent, compressed MP4 loop (ideally under ~5MB) in
// /public, then set the path here. An optional poster still shows before it plays
// and for reduced-motion viewers. Until a path is set, the band falls back to a
// clean navy gradient, so it never looks broken.
const TEAMS_BG_VIDEO = ""; // e.g. "/careers-teams-bg.mp4"
const TEAMS_BG_POSTER = ""; // e.g. "/careers-teams-bg.jpg"

const CAREERS_ORBS = [
  { bx: 0.18, by: 0.28, r: 400, ax: 76, ay: 50, sx: 0.12, sy: 0.1, ph: 0.5, c: "255,106,43", a: 0.16 },
  { bx: 0.85, by: 0.22, r: 340, ax: 62, ay: 52, sx: 0.11, sy: 0.14, ph: 2.1, c: "15,30,61", a: 0.18 },
  { bx: 0.76, by: 0.8, r: 350, ax: 66, ay: 56, sx: 0.1, sy: 0.12, ph: 3.5, c: "255,106,43", a: 0.1 },
  { bx: 0.26, by: 0.82, r: 300, ax: 72, ay: 46, sx: 0.13, sy: 0.09, ph: 4.6, c: "15,30,61", a: 0.12 },
];

export default function CareersMain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const teamsVideoRef = useRef<HTMLVideoElement>(null);
  const hasTeamsBg = TEAMS_BG_VIDEO !== "";

  // Aurora hero background.
  useEffect(() => {
    return orbField(canvasRef.current, CAREERS_ORBS, "source-over");
  }, []);

  // Play the teams background video, unless the viewer prefers reduced motion
  // (then the poster / navy gradient shows instead).
  useEffect(() => {
    const v = teamsVideoRef.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    void v.play().catch(() => {});
  }, []);

  // Count-up on the hero stats when they scroll into view.
  useEffect(() => {
    const root = statsRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nums = Array.from(root.querySelectorAll<HTMLElement>(".cr-count"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          const to = Number(el.dataset.to || "0");
          if (reduce) {
            el.textContent = String(to);
          } else {
            const start = performance.now();
            const step = (now: number) => {
              const p = Math.min(1, (now - start) / 1100);
              const e = 1 - Math.pow(1 - p, 3);
              el.textContent = String(Math.round(to * e));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.6 },
    );
    nums.forEach((n) => io.observe(n));
    return () => io.disconnect();
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
          <nav className="crumb reveal" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Careers</span>
          </nav>
          <span className="eyebrow reveal">Careers</span>
          <h1 className="reveal">Build your career where the world hires.</h1>
          <p className="svc-hero-tag reveal">
            Join a global talent company that places people across six regions, and grow with
            clients in fintech, SaaS, and beyond.
          </p>
          <div className="hero-cta reveal">
            <Link className="btn btn-primary" href="/contact">
              Join our talent network <Arrow size={15} />
            </Link>
            <a className="btn btn-ghost" href="#how-we-hire">
              See how we hire
            </a>
          </div>
          <div className="cr-stats reveal" ref={statsRef}>
            {CAREER_STATS.map((s) => (
              <div className="cr-stat" key={s.label}>
                <span className="cr-stat-num">
                  <span className="cr-count" data-to={s.n}>{s.n}</span>
                  {s.suf} {s.unit}
                </span>
                <span className="cr-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="section">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Why ClearKanvas</span>
            <h2>Work that grows you, from day one.</h2>
            <p>
              We are a talent company, so we take our own people seriously. Here is what your work
              life looks like with us.
            </p>
          </div>
          <div className="cr-values" data-stagger>
            {CAREER_VALUES.map((v) => (
              <div className="cr-value" key={v.title}>
                <span className="cr-value-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[v.icon]}
                  </svg>
                </span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE AT CLEARKANVAS , film band */}
      <BrandFilm
        eyebrow="Life at ClearKanvas"
        heading="A look inside the team."
        label="Life at ClearKanvas"
        sub="Coming soon"
      />

      {/* GALLERY */}
      <section className="section">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Inside ClearKanvas</span>
            <h2>Where the work happens.</h2>
          </div>
          <div className="cr-gallery" data-stagger>
            {CAREER_GALLERY.map((g) => (
              <figure className="cr-tile" key={g.label}>
                {g.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={g.img} alt={g.label} loading="lazy" />
                ) : (
                  <span className="cr-tile-ph" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <circle cx="9" cy="10" r="1.6" />
                      <path d="M4 17l5-4 4 3 3-2 4 3" />
                    </svg>
                  </span>
                )}
                <figcaption>{g.label}</figcaption>
              </figure>
            ))}
          </div>
          <p className="cr-note reveal">Photos of our offices and team are on the way.</p>
        </div>
      </section>

      {/* TEAMS YOU CAN JOIN */}
      <section className="section cr-teams-section">
        <div className="cr-teams-bg" aria-hidden="true">
          {hasTeamsBg && (
            <video
              ref={teamsVideoRef}
              src={TEAMS_BG_VIDEO}
              poster={TEAMS_BG_POSTER || undefined}
              muted
              loop
              playsInline
              preload="metadata"
            />
          )}
        </div>
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow on-navy">Where you fit</span>
            <h2>Teams you can join.</h2>
          </div>
          <div className="cr-teams" data-stagger>
            {CAREER_TEAMS.map((t) => (
              <div className="cr-team" key={t.name}>
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HIRE */}
      <section className="section" id="how-we-hire">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">How we hire</span>
            <h2>A clear, respectful process.</h2>
            <p>You always know where you stand and what happens next.</p>
          </div>
          <FlowSteps steps={HIRING_PROCESS} />
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="section">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">What we offer</span>
            <h2>The support behind the work.</h2>
          </div>
          <div className="incl-grid reveal" data-stagger>
            {CAREER_BENEFITS.map((b) => (
              <div className="incl-item" key={b}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12.5l4 4 10-10" stroke="#FF6A2B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES / TALENT NETWORK */}
      <section className="section svc-outcomes">
        <div className="wrap">
          <div className="head center reveal">
            <span className="eyebrow on-navy">Open roles</span>
            <h2>We are always meeting good people.</h2>
          </div>
          <div className="cr-roles reveal">
            <p>
              We do not have public listings live just yet. When we do, they will appear here.
              In the meantime, we would still love to hear from you. Tell us what you do and where
              you want to grow, and we will keep you in mind as roles open.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/contact">
                Introduce yourself <Arrow size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band cta-band-static">
        <div className="wrap cta-inner reveal">
          <h2>Do not see your role? Reach out anyway.</h2>
          <p>Send your CV to hello@clearkanvas.com or introduce yourself through our contact form. A real person replies within one business day.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">
              Get in touch <Arrow size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
