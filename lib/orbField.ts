/* Animated gradient orb field , premium hero/CTA background.
   Ported verbatim from the design bundle (ClearKanvas Global Homepage.html). */

export interface Orb {
  bx: number; // base x (fraction of width)
  by: number; // base y (fraction of height)
  r: number; // radius
  ax: number; // x amplitude
  ay: number; // y amplitude
  sx: number; // x speed
  sy: number; // y speed
  ph: number; // phase offset
  c: string; // "r,g,b"
  a: number; // alpha at center
}

/**
 * Renders a drifting field of radial-gradient orbs onto a canvas.
 * Returns a cleanup function that cancels the animation and removes listeners.
 */
export function orbField(
  canvas: HTMLCanvasElement | null,
  orbs: Orb[],
  blend: GlobalCompositeOperation = "source-over",
): () => void {
  if (!canvas) return () => {};
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w = 0,
    h = 0,
    dpr = 1,
    raf: number | null = null;

  function resize() {
    const r = canvas!.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas!.width = Math.max(1, Math.round(r.width * dpr));
    h = canvas!.height = Math.max(1, Math.round(r.height * dpr));
  }

  function frame(t: number) {
    ctx!.clearRect(0, 0, w, h);
    ctx!.globalCompositeOperation = blend;
    const time = t / 1000;
    for (let i = 0; i < orbs.length; i++) {
      const o = orbs[i];
      const x = o.bx * w + Math.sin(time * o.sx + o.ph) * o.ax * dpr;
      const y = o.by * h + Math.cos(time * o.sy + o.ph) * o.ay * dpr;
      const rad = o.r * dpr;
      const g = ctx!.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, `rgba(${o.c},${o.a})`);
      g.addColorStop(1, `rgba(${o.c},0)`);
      ctx!.fillStyle = g;
      ctx!.beginPath();
      ctx!.arc(x, y, rad, 0, Math.PI * 2);
      ctx!.fill();
    }
    // Honor reduced-motion: render a single static frame, don't loop.
    if (!reduce) raf = requestAnimationFrame(frame);
  }

  const onResize = () => {
    resize();
    if (reduce) {
      if (raf) cancelAnimationFrame(raf);
      frame(0);
    }
  };

  resize();
  window.addEventListener("resize", onResize, { passive: true });
  if (reduce) {
    frame(0);
  } else {
    raf = requestAnimationFrame(frame);
  }

  return () => {
    window.removeEventListener("resize", onResize);
    if (raf) cancelAnimationFrame(raf);
  };
}
