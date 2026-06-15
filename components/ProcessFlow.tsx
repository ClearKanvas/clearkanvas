"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  { num: "1", title: "Discover", desc: "We learn your business, your goals, and where the friction is." },
  { num: "2", title: "Design", desc: "We shape the right model, scope, and team, and agree how success is measured." },
  { num: "3", title: "Build", desc: "We recruit, set up, and embed into your tools and ways of working." },
  { num: "4", title: "Operate & optimize", desc: "We run the function on a steady cadence, report openly, and keep improving it." },
];

/**
 * Vertical process timeline whose connecting line draws itself top to bottom as
 * the section enters view, with each step revealing in sequence. Honors
 * reduced-motion by showing the final state immediately.
 */
export default function ProcessFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`pflow${active ? " in" : ""}`} ref={ref}>
      <div className="pflow-line" aria-hidden="true">
        <span className="pflow-line-fill"></span>
      </div>
      <ol className="pflow-steps">
        {STEPS.map((s, i) => (
          <li className="pflow-step" key={s.num} style={{ transitionDelay: `${i * 220}ms` }}>
            <span className="pflow-dot">{s.num}</span>
            <div className="pflow-body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
