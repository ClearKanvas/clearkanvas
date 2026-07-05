"use client";

import { useEffect, useState } from "react";

/**
 * TEMPORARY live font preview. Renders only when the URL contains ?fonts
 * (so normal visitors never see it). Lets you flip between candidate type
 * pairings on the real site; the choice is stored so it follows you across
 * pages. Remove this component (and the candidate fonts in layout.tsx +
 * the data-font blocks in globals.css) once a pairing is chosen.
 */

const PRESETS = [
  { id: "current", label: "Current", note: "Schibsted + Inter" },
  { id: "editorial", label: "Editorial", note: "Fraunces + Hanken" },
  { id: "sans", label: "Sans refresh", note: "Bricolage + Hanken" },
  { id: "serifbody", label: "Serif body", note: "Bricolage + Newsreader" },
] as const;

const KEY = "ckFont";

function apply(id: string) {
  const root = document.documentElement;
  if (id === "current") root.removeAttribute("data-font");
  else root.setAttribute("data-font", id);
}

export default function FontSwitcher() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string>("current");

  useEffect(() => {
    const stored = localStorage.getItem(KEY) || "current";
    apply(stored);
    setActive(stored);
    if (new URLSearchParams(window.location.search).has("fonts")) setVisible(true);
  }, []);

  function choose(id: string) {
    apply(id);
    setActive(id);
    localStorage.setItem(KEY, id);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        zIndex: 9999,
        background: "#0F1E3D",
        color: "#fff",
        borderRadius: 14,
        padding: 14,
        width: 224,
        boxShadow: "0 18px 50px -18px rgba(0,0,0,0.6)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          marginBottom: 10,
        }}
      >
        Font preview
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {PRESETS.map((p) => {
          const on = active === p.id;
          return (
            <button
              key={p.id}
              onClick={() => choose(p.id)}
              style={{
                textAlign: "left",
                cursor: "pointer",
                border: on ? "1.5px solid #FF6A2B" : "1.5px solid rgba(255,255,255,0.14)",
                background: on ? "rgba(255,106,43,0.16)" : "transparent",
                color: "#fff",
                borderRadius: 9,
                padding: "8px 10px",
                transition: "border-color .15s, background .15s",
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 600 }}>{p.label}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 1 }}>
                {p.note}
              </div>
            </button>
          );
        })}
      </div>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 10, lineHeight: 1.4 }}>
        Only visible to you (?fonts). Pick one and tell me.
      </div>
    </div>
  );
}
