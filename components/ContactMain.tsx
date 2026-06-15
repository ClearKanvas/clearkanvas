"use client";

import { useEffect, useRef, useState } from "react";
import Arrow from "./Arrow";
import { orbField } from "@/lib/orbField";

const COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "Europe",
  "United Arab Emirates",
  "Bahrain",
  "Pakistan",
  "Other",
];

// Markets we serve (clients), shown in the info panel.
const MARKETS = ["United States", "Canada", "United Kingdom", "Europe"];

// Where we operate (delivery + on-the-ground presence). City and email are
// placeholders to be confirmed; a city plus contact email is acceptable for now.
const OPERATE = [
  { country: "Pakistan", note: "Primary delivery center" },
  { country: "Bahrain", note: "Regional presence" },
  { country: "Dubai, UAE", note: "Regional presence" },
];

const NEXT_STEPS = [
  { title: "We reply within one business day", desc: "A real person reads your message and gets back to you, with no automated runaround." },
  { title: "A short intro call", desc: "We listen first: the function, where the pain is, and what good looks like for you." },
  { title: "A clear proposal", desc: "Scope, team shape, and how we would run it, agreed up front with no surprises." },
];

export default function ContactMain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  // Animated gradient orb field for the contact hero.
  useEffect(() => {
    return orbField(
      canvasRef.current,
      [
        { bx: 0.16, by: 0.3, r: 380, ax: 74, ay: 48, sx: 0.13, sy: 0.1, ph: 0.0, c: "15,30,61", a: 0.18 },
        { bx: 0.86, by: 0.22, r: 330, ax: 62, ay: 50, sx: 0.11, sy: 0.14, ph: 1.7, c: "255,106,43", a: 0.16 },
        { bx: 0.78, by: 0.8, r: 340, ax: 66, ay: 54, sx: 0.1, sy: 0.12, ph: 3.1, c: "15,30,61", a: 0.12 },
      ],
      "source-over",
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const get = (n: string) =>
      (form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement | null)?.value.trim() ?? "";
    const name = get("name");
    const email = get("email");
    const message = get("message");
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const next = { name: !name, email: !okEmail, message: !message };
    setErrors(next);

    if (next.name || next.email || next.message) {
      const firstErr = form.querySelector<HTMLElement>(".field.err input, .field.err textarea");
      firstErr?.focus();
      return;
    }

    setServerError(null);
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: get("company"),
          country: get("country"),
          message,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const clearErr = (key: keyof typeof errors) =>
    setErrors((prev) => (prev[key] ? { ...prev, [key]: false } : prev));

  return (
    <>
      {/* HERO */}
      <section className="c-hero">
        <div className="c-hero-bg" aria-hidden="true">
          <div className="hero-aurora"></div>
          <canvas className="orb-canvas" id="contactCanvas" ref={canvasRef}></canvas>
        </div>
        <div className="wrap c-hero-inner">
          <span className="eyebrow reveal">Contact</span>
          <h1 className="reveal">Let us take the complexity off your plate.</h1>
          <p className="reveal">
            Tell us what you are trying to build and we will get back to you within one business day.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <div className="wrap">
        <div className="contact-grid" id="contact-form">
          {/* Form */}
          <div className="form-card reveal">
            <h2>Send us a message</h2>
            <p className="lede">No long forms. Just enough for us to point you to the right team.</p>

            {!submitted && (
              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="frow">
                  <div className={`field${errors.name ? " err" : ""}`}>
                    <label htmlFor="name">
                      Full name <span className="req">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Doe"
                      autoComplete="name"
                      onInput={() => clearErr("name")}
                    />
                    <span className="msg">Please enter your name.</span>
                  </div>
                  <div className={`field${errors.email ? " err" : ""}`}>
                    <label htmlFor="email">
                      Work email <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      autoComplete="email"
                      onInput={() => clearErr("email")}
                    />
                    <span className="msg">Please enter a valid email.</span>
                  </div>
                </div>
                <div className="frow">
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      autoComplete="organization"
                    />
                    <span className="msg"></span>
                  </div>
                  <div className="field">
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" className="field-select" defaultValue="">
                      <option value="">Select a country</option>
                      {COUNTRIES.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                    <span className="msg"></span>
                  </div>
                </div>
                <div className={`field full${errors.message ? " err" : ""}`}>
                  <label htmlFor="message">
                    How can we help? <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what you are trying to build, and where the complexity lives today."
                    onInput={() => clearErr("message")}
                  ></textarea>
                  <span className="msg">Please add a short message.</span>
                </div>
                <div className="form-actions">
                  <button className="btn btn-primary btn-lg" type="submit" disabled={sending}>
                    {sending ? "Sending…" : "Send message"} <Arrow />
                  </button>
                  <span className="note" style={serverError ? { color: "#D6452B" } : undefined}>
                    {serverError ?? "We will only use your details to respond to your enquiry."}
                  </span>
                </div>
              </form>
            )}

            <div className={`success${submitted ? " show" : ""}`}>
              <div className="tick">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12.5l4 4 10-10"
                    stroke="#FF6A2B"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Thanks, your message is on its way.</h3>
              <p>
                We will be in touch within one business day. In the meantime, feel free to email us
                directly at{" "}
                <a
                  className="v-link"
                  style={{ color: "var(--orange-ink)", fontWeight: 600 }}
                  href="mailto:hello@clearkanvas.com"
                >
                  hello@clearkanvas.com
                </a>
                .
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="info-stack">
            <div className="info-card reveal">
              <p className="ttl">Reach us directly</p>
              <div className="contact-line">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="#0F1E3D" strokeWidth="1.6" />
                    <path d="M4.5 7l7.5 5.2L19.5 7" stroke="#FF6A2B" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="k">General enquiries</div>
                  <a className="v v-link" href="mailto:hello@clearkanvas.com">
                    hello@clearkanvas.com
                  </a>
                </div>
              </div>
              <div className="contact-line">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="#0F1E3D" strokeWidth="1.6" />
                    <path d="M4.5 7l7.5 5.2L19.5 7" stroke="#FF6A2B" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="k">New business and sales</div>
                  <a className="v v-link" href="mailto:sales@clearkanvas.com">
                    sales@clearkanvas.com
                  </a>
                </div>
              </div>
              <div className="contact-line">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="#0F1E3D" strokeWidth="1.6" />
                    <path d="M4.5 7l7.5 5.2L19.5 7" stroke="#FF6A2B" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="k">Partnerships</div>
                  <a className="v v-link" href="mailto:partnerships@clearkanvas.com">
                    partnerships@clearkanvas.com
                  </a>
                </div>
              </div>
              <div className="contact-line">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="8" stroke="#0F1E3D" strokeWidth="1.6" />
                    <path d="M12 7v5l3.5 2" stroke="#FF6A2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="k">Hours</div>
                  <div className="v muted">Monday to Friday, across time zones</div>
                </div>
              </div>
            </div>

            {/* Where we operate , delivery + on-the-ground presence */}
            <div className="info-card reveal">
              <p className="ttl">Where we operate</p>
              <div className="office-list">
                {OPERATE.map((o) => (
                  <div className="contact-line" key={o.country}>
                    <div className="ic">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z"
                          stroke="#0F1E3D"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="10" r="2.4" fill="#FF6A2B" />
                      </svg>
                    </div>
                    <div>
                      <div className="k">{o.country}</div>
                      <div className="v muted">{o.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card reveal">
              <p className="ttl">Markets we serve</p>
              <div className="markets-mini">
                {MARKETS.map((m) => (
                  <span className="mk-pill" key={m}>
                    <span className="d"></span>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What happens next */}
        <div className="next-steps reveal">
          <p className="ttl">What happens after you reach out</p>
          <div className="next-steps-grid" data-stagger>
            {NEXT_STEPS.map((s, i) => (
              <div className="next-step" key={s.title}>
                <span className="engage-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
