"use client";

import { useEffect, useRef, useState } from "react";
import { orbField } from "@/lib/orbField";

/**
 * Homepage brand-film band.
 *
 * TO GO LIVE WITH A REAL FILM:
 *   1. Drop the file in /public (e.g. /public/brand-film.mp4, plus .webm if you have one).
 *   2. Optionally add a poster still (e.g. /public/brand-film-poster.jpg).
 *   3. Set the two constants below. The placeholder state disappears automatically.
 *
 * The film plays on click only. It never autoplays and never plays sound unprompted,
 * which is what keeps a video section feeling professional rather than intrusive.
 */
const BRAND_FILM_SRC = ""; // e.g. "/brand-film.mp4"
const BRAND_FILM_POSTER = ""; // e.g. "/brand-film-poster.jpg"

export default function BrandFilm() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const hasFilm = BRAND_FILM_SRC !== "";

  // Ambient aurora behind the placeholder / poster.
  useEffect(() => {
    return orbField(
      canvasRef.current,
      [
        { bx: 0.2, by: 0.3, r: 380, ax: 70, ay: 46, sx: 0.12, sy: 0.1, ph: 0.4, c: "255,106,43", a: 0.16 },
        { bx: 0.82, by: 0.28, r: 340, ax: 60, ay: 50, sx: 0.1, sy: 0.13, ph: 1.9, c: "15,30,61", a: 0.24 },
        { bx: 0.7, by: 0.8, r: 360, ax: 66, ay: 54, sx: 0.09, sy: 0.11, ph: 3.2, c: "255,106,43", a: 0.1 },
        { bx: 0.28, by: 0.78, r: 320, ax: 72, ay: 46, sx: 0.12, sy: 0.09, ph: 4.5, c: "15,30,61", a: 0.2 },
      ],
      "source-over",
    );
  }, []);

  const onPlay = () => {
    if (!hasFilm) return;
    const v = videoRef.current;
    if (!v) return;
    setPlaying(true);
    void v.play();
  };

  return (
    <section className="section film-section">
      <div className="wrap">
        <div className="head center reveal">
          <span className="eyebrow">See how we work</span>
          <h2>One partner, from first brief to a working team.</h2>
        </div>
        <div className={`film-frame reveal${playing ? " playing" : ""}`}>
          <div className="film-bg" aria-hidden="true">
            <canvas className="orb-canvas" ref={canvasRef}></canvas>
          </div>

          {hasFilm && (
            <video
              ref={videoRef}
              className="film-video"
              src={BRAND_FILM_SRC}
              poster={BRAND_FILM_POSTER || undefined}
              controls={playing}
              playsInline
              preload="none"
            />
          )}

          {!playing && (
            <button
              type="button"
              className="film-play"
              onClick={onPlay}
              aria-label={hasFilm ? "Play brand film" : "Brand film coming soon"}
            >
              <span className="film-play-ring">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="film-play-label">{hasFilm ? "Play the film" : "Brand film"}</span>
              <span className="film-play-sub">{hasFilm ? "About 60 seconds" : "Coming soon"}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
