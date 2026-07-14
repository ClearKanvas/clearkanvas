"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import type { ServiceStep } from "@/lib/services";

/**
 * Animated "how it works" explainer. Renders the process steps as a connected
 * flow: an orange progress line draws across the track when the section scrolls
 * into view, and each numbered node activates in sequence as the line reaches it.
 * Respects prefers-reduced-motion (shows the completed state, no animation).
 */
export default function FlowSteps({ steps }: { steps: ServiceStep[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("in", "reduce");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const n = steps.length;

  return (
    <div
      ref={ref}
      className="flow"
      style={{ ["--flow-n" as string]: String(n) } as CSSProperties}
    >
      <div className="flow-track" aria-hidden="true">
        <span className="flow-fill"></span>
      </div>
      <ol className="flow-steps">
        {steps.map((step, i) => (
          <li
            className="flow-step"
            key={step.title}
            style={{ ["--i" as string]: String(i) } as CSSProperties}
          >
            <span className="flow-node">
              <span className="flow-num">{String(i + 1).padStart(2, "0")}</span>
            </span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
