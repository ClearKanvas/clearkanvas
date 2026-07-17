"use client";

import Image from "next/image";

/**
 * Cross-fading background slideshow. Expects exactly 3 images (the CSS timing is
 * tuned for a 3-image cycle). Sits behind a section's content with an overlay on
 * top for legibility. Respects prefers-reduced-motion (shows the first image only).
 */
export default function Slideshow({ images }: { images: string[] }) {
  const total = images.length * 6; // 6s per image
  return (
    <div className="slideshow" aria-hidden="true">
      {images.map((src, i) => (
        <div
          className="slide"
          key={`${src}-${i}`}
          style={{ animationDuration: `${total}s`, animationDelay: `${i * 6}s` }}
        >
          <Image src={src} alt="" fill sizes="100vw" />
        </div>
      ))}
    </div>
  );
}
