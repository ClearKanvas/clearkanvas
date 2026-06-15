"use client";

import { useEffect } from "react";

/**
 * Global premium pointer interactions, mounted once in the layout:
 *  - `.btn-primary` buttons gently follow the cursor (magnetic).
 *  - `[data-tilt]` cards tilt in 3D toward the cursor.
 * Both are disabled on touch / coarse pointers and under reduced-motion.
 * A MutationObserver re-binds elements added by client-side navigation.
 */
export default function Interactions() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const attachMagnetic = (el: HTMLElement) => {
      const strength = 0.3;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${mx * strength}px, ${my * strength}px)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    };

    const attachTilt = (el: HTMLElement) => {
      const max = 6; // degrees
      el.addEventListener("pointerenter", () => {
        el.style.transition = "transform .1s linear";
      });
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg) translateY(-6px)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transition = "";
        el.style.transform = "";
      });
    };

    let scheduled = false;
    const bind = () => {
      scheduled = false;
      document.querySelectorAll<HTMLElement>(".btn-primary:not([data-mag])").forEach((el) => {
        el.dataset.mag = "1";
        attachMagnetic(el);
      });
      document.querySelectorAll<HTMLElement>("[data-tilt]:not([data-tiltset])").forEach((el) => {
        el.dataset.tiltset = "1";
        attachTilt(el);
      });
    };

    bind();
    const mo = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(bind);
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);

  return null;
}
