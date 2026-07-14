"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Arrow from "./Arrow";
import { orbField } from "@/lib/orbField";

const MARQUEE_ITEMS = [
  "Recruitment",
  "Employer of Record",
  "Staff Offshoring",
  "Tech & Non-Tech Roles",
  "Fintech & Compliance Hiring",
  "Global Payroll",
  "Dedicated Teams",
  "Every Region, Every Role",
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated gradient orb field , airy navy + orange drift.
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

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-aurora"></div>
        <canvas className="orb-canvas" id="heroCanvas" ref={canvasRef}></canvas>
        <div className="hero-grid-dots"></div>
      </div>
      <div className="wrap hero-inner">
        <span className="eyebrow reveal">ClearKanvas Global</span>
        <h1 className="hero-h1 reveal">
          The right people,
          <br />
          <span className="rotor-accent">anywhere</span> in the world.
        </h1>
        <p className="hero-sub reveal">
          ClearKanvas Global finds your people, employs them compliantly, and runs the day to
          day, so you can grow into any market without setting up in one. 25+ years in
          recruitment, 5+ years in Employer of Record and offshore staffing.
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
          <li><strong>25+ years</strong> in recruitment</li>
          <li><strong>5+ years</strong> in EOR and offshoring</li>
          <li><strong>2 offices</strong> (Pakistan, USA)</li>
          <li><strong>6 regions</strong> of talent</li>
        </ul>
      </div>
      {/* Marquee of functions , items doubled for a seamless loop */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track" id="marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div className="marquee-item" key={idx}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
