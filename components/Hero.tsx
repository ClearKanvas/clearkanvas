"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import Arrow from "./Arrow";
import { orbField } from "@/lib/orbField";

// Crisp vector icons (scale sharp at any DPI), one per marquee item.
const I = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  code: (
    <>
      <path d="M8 6l-5 6 5 6" />
      <path d="M16 6l5 6-5 6" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
    </>
  ),
  team: (
    <>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3.5" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.3A4 4 0 0 1 16 11" />
    </>
  ),
};

const MARQUEE_ITEMS: { label: string; icon: ReactNode }[] = [
  { label: "Recruitment", icon: I.target },
  { label: "Employer of Record", icon: I.shield },
  { label: "Staff Offshoring", icon: I.users },
  { label: "Tech & Non-Tech Roles", icon: I.code },
  { label: "Fintech & Compliance Hiring", icon: I.lock },
  { label: "Dedicated Teams", icon: I.team },
  { label: "Every Region, Every Role", icon: I.globe },
];

const TRUST = [
  { n: 25, suf: "+", unit: "years", label: "in recruitment" },
  { n: 5, suf: "+", unit: "years", label: "in EOR and offshoring" },
  { n: 2, suf: "", unit: "offices", label: "Pakistan and USA" },
  { n: 6, suf: "", unit: "regions", label: "of talent" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Animated gradient orb field , airy navy + orange drift (the aurora).
  useEffect(() => {
    return orbField(
      canvasRef.current,
      [
        { bx: 0.16, by: 0.24, r: 400, ax: 78, ay: 50, sx: 0.13, sy: 0.1, ph: 0.0, c: "15,30,61", a: 0.2 },
        { bx: 0.84, by: 0.18, r: 340, ax: 64, ay: 52, sx: 0.11, sy: 0.14, ph: 1.7, c: "255,106,43", a: 0.18 },
        { bx: 0.8, by: 0.74, r: 360, ax: 68, ay: 58, sx: 0.1, sy: 0.12, ph: 3.1, c: "15,30,61", a: 0.13 },
        { bx: 0.24, by: 0.82, r: 300, ax: 72, ay: 48, sx: 0.14, sy: 0.09, ph: 4.4, c: "255,106,43", a: 0.12 },
        { bx: 0.5, by: 0.46, r: 460, ax: 48, ay: 38, sx: 0.08, sy: 0.11, ph: 2.2, c: "15,30,61", a: 0.07 },
      ],
      "source-over",
    );
  }, []);

  // Cursor spotlight (follows the pointer) + count-up stats on view.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMove = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      hero.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    if (!reduce) hero.addEventListener("pointermove", onMove);

    const nums = Array.from(hero.querySelectorAll<HTMLElement>(".ht-count"));
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

    return () => {
      hero.removeEventListener("pointermove", onMove);
      io.disconnect();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-aurora"></div>
        <canvas className="orb-canvas" id="heroCanvas" ref={canvasRef}></canvas>
        <div className="hero-grid-dots"></div>
        <div className="hero-spot"></div>
      </div>
      <div className="wrap hero-inner">
        <span className="eyebrow reveal">ClearKanvas Global</span>
        <h1 className="hero-h1 reveal">
          The right people, <span className="rotor-accent">anywhere</span> in the world.
        </h1>
        <p className="hero-sub reveal">
          ClearKanvas Global finds your people, employs them compliantly, and runs the day to
          day, so you can grow into any market without setting up in one.
        </p>
        <div className="hero-cta reveal">
          <Link className="btn btn-primary" href="/contact">
            Book a Discovery Call <Arrow size={15} />
          </Link>
          <Link className="btn btn-ghost" href="/#regions">
            See regions we cover
          </Link>
        </div>
        <ul className="hero-trust reveal" aria-label="Key facts">
          {TRUST.map((t) => (
            <li key={t.label}>
              <span className="ht-num">
                <span className="ht-count" data-to={t.n}>{t.n}</span>
                {t.suf} {t.unit}
              </span>
              <span className="ht-lbl">{t.label}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Marquee of services , items doubled for a seamless loop */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track" id="marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div className="marquee-item" key={idx}>
              <svg
                className="marquee-ico"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {item.icon}
              </svg>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
