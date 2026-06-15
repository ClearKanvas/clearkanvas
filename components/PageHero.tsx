"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { orbField } from "@/lib/orbField";
import type { Orb } from "@/lib/orbField";

const DEFAULT_ORBS: Orb[] = [
  { bx: 0.18, by: 0.3, r: 380, ax: 74, ay: 48, sx: 0.13, sy: 0.1, ph: 0.6, c: "15,30,61", a: 0.18 },
  { bx: 0.84, by: 0.24, r: 330, ax: 62, ay: 50, sx: 0.11, sy: 0.14, ph: 2.0, c: "255,106,43", a: 0.16 },
  { bx: 0.74, by: 0.8, r: 340, ax: 66, ay: 54, sx: 0.1, sy: 0.12, ph: 3.4, c: "15,30,61", a: 0.12 },
];

export type Crumb = { href?: string; label: string };

/** Reusable animated-gradient page hero, matching the service-page pattern. */
export default function PageHero({
  eyebrow,
  title,
  tagline,
  intro,
  crumbs,
  orbs = DEFAULT_ORBS,
}: {
  eyebrow: string;
  title: string;
  tagline?: string;
  intro?: string;
  crumbs?: Crumb[];
  orbs?: Orb[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return orbField(canvasRef.current, orbs, "source-over");
  }, [orbs]);

  return (
    <section className="svc-hero">
      <div className="svc-hero-bg" aria-hidden="true">
        <div className="hero-aurora"></div>
        <canvas className="orb-canvas" ref={canvasRef}></canvas>
      </div>
      <div className="wrap svc-hero-inner">
        {crumbs && crumbs.length > 0 && (
          <nav className="crumb reveal" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span className="crumb-part" key={c.label}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                {i < crumbs.length - 1 && <span aria-hidden="true"> / </span>}
              </span>
            ))}
          </nav>
        )}
        <span className="eyebrow reveal">{eyebrow}</span>
        <h1 className="reveal">{title}</h1>
        {tagline && <p className="svc-hero-tag reveal">{tagline}</p>}
        {intro && <p className="svc-hero-intro reveal">{intro}</p>}
      </div>
    </section>
  );
}
