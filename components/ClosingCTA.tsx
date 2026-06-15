"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Arrow from "./Arrow";
import { orbField } from "@/lib/orbField";

export default function ClosingCTA() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Dark closing CTA: orange + blue glow (additive blend).
  useEffect(() => {
    return orbField(
      canvasRef.current,
      [
        { bx: 0.16, by: 0.78, r: 360, ax: 72, ay: 54, sx: 0.12, sy: 0.1, ph: 0.5, c: "255,106,43", a: 0.26 },
        { bx: 0.86, by: 0.2, r: 330, ax: 60, ay: 52, sx: 0.1, sy: 0.13, ph: 2.4, c: "60,110,220", a: 0.22 },
        { bx: 0.55, by: 0.52, r: 400, ax: 46, ay: 40, sx: 0.08, sy: 0.11, ph: 4.0, c: "255,106,43", a: 0.1 },
      ],
      "lighter",
    );
  }, []);

  return (
    <section className="section cta-band" id="contact">
      <canvas className="orb-canvas" id="ctaCanvas" aria-hidden="true" ref={canvasRef}></canvas>
      <div className="wrap cta-inner reveal">
        <h2>Let us take the complexity off your plate.</h2>
        <p>
          Tell us what you are trying to build. We will show you the fastest, cleanest way
          to get there.
        </p>
        <div className="hero-cta">
          <Link className="btn btn-primary" href="/contact">
            Book a discovery call <Arrow size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
