"use client";

import { useEffect, useRef } from "react";

/**
 * Muted, looping background video for a section. Plays via JS (not the autoPlay
 * attribute) so it can respect prefers-reduced-motion: reduced-motion users get
 * the static section background instead. Mirrors the hero/orb pattern used
 * elsewhere on the site.
 */
export default function SectionVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className="section-video"
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
