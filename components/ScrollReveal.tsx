"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal behavior, mirroring the prototype's IntersectionObserver:
 * - `.reveal` elements fade/slide in once.
 * - `[data-stagger]` containers stagger their children by 90ms each.
 * Renders nothing; operates on the DOM after mount.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll(".reveal").forEach((n) => io.observe(n));

    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
      const kids = Array.prototype.slice
        .call(group.children)
        .filter((c: Element) => !c.classList.contains("proc-line")) as HTMLElement[];
      kids.forEach((k, idx) => {
        k.style.transitionDelay = idx * 90 + "ms";
      });
      io.observe(group);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
