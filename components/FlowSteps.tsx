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
  // Up to 4 steps lay out as a horizontal row on wider screens; longer flows
  // stay as a vertical timeline so they always fit without sideways scrolling.
  const layout = n <= 4 ? "flow flow-row" : "flow";

  return (
    <div
      ref={ref}
      className={layout}
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
