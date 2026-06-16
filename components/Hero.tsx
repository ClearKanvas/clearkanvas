"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Arrow from "./Arrow";
import { orbField } from "@/lib/orbField";

const MARQUEE_ITEMS = [
  "Talent Acquisition",
  "HR Shared Services",
  "Training & Development",
  "Bookkeeping & Reporting",
  "Accounts Payable",
  "Payroll Coordination",
  "Customer Support",
  "Back Office Administration",
  "Dedicated Teams",
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
          Build a <span className="rotor-accent">world-class</span> business function.
          <br />
          Without building it alone.
        </h1>
        <p className="hero-sub reveal">
          Where complexity becomes clarity. ClearKanvas Global brings the right expertise to
          your finance, talent, technology, and operations, so your teams scale without the
          overhead. Trusted by clients in the USA, Pakistan, and Bahrain, and growing into new
          markets.
        </p>
        <div className="hero-cta reveal">
          <Link className="btn btn-primary" href="/contact">
            Book a discovery call <Arrow size={15} />
          </Link>
          <Link className="btn btn-ghost" href="/services">
            Explore our services
          </Link>
        </div>
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
