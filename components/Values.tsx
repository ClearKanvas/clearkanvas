import type { ReactNode } from "react";

const VALUES: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: (
      <svg className="vsvg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="#0F1E3D" strokeWidth="1.6" />
        <rect x="9" y="9" width="6" height="6" rx="1" fill="#FF6A2B" />
      </svg>
    ),
    title: "Expertise by default",
    desc: "You work with people who have led finance and HR functions at scale, not a junior pool with an impressive title.",
  },
  {
    icon: (
      <svg className="vsvg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="3.2" stroke="#0F1E3D" strokeWidth="1.6" />
        <circle cx="16" cy="11" r="2.4" stroke="#FF6A2B" strokeWidth="1.6" />
        <path d="M4 19c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="#0F1E3D" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Operators, not just advisors",
    desc: "We do not hand you a deck and leave. We design the solution, then run it.",
  },
  {
    icon: (
      <svg className="vsvg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="#0F1E3D" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#FF6A2B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "A real cost advantage",
    desc: "Pakistan gives you high-quality talent at a fraction of in-house cost, with strong English and useful time-zone overlap for the UK and GCC.",
  },
  {
    icon: (
      <svg className="vsvg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 18V8M10 18V5M16 18v-7M22 18" stroke="#0F1E3D" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="16" cy="11" r="1.8" fill="#FF6A2B" />
      </svg>
    ),
    title: "A partner, not a vendor",
    desc: "We build around your business, stay close, and measure ourselves on your outcomes.",
  },
];

export default function Values() {
  return (
    <section className="section values" id="about">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Why ClearKanvas Global</span>
          <h2>Why companies choose ClearKanvas Global</h2>
        </div>
        <div className="val-grid" data-stagger>
          {VALUES.map((v) => (
            <div className="val" key={v.title}>
              <div className="vmark">{v.icon}</div>
              <div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
