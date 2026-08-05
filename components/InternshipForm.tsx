"use client";

import { useEffect, useRef, useState } from "react";
import {
  INTERNSHIP_POSITIONS,
  CURRENT_STATUS_OPTIONS,
  UNPAID_OPTIONS,
  EST_OPTIONS,
  COMMIT_OPTIONS,
  HEARD_OPTIONS,
  CONSENT_TEXT,
} from "@/lib/internships";

const MAX_CV_MB = 5;
const MAX_PIC_MB = 5;
const MAX_LONG = 1000;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

type Status = "idle" | "submitting" | "success" | "error";

// Sectioned like the Google Form. All fields stay mounted (hidden steps use
// display:none) so file selections and inputs persist as you move between steps.
const STEPS = [
  "Personal",
  "Education",
  "Role",
  "Logistics",
  "Resume & Portfolio",
  "About you",
  "Consent",
];

export default function InternshipForm({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [step, setStep] = useState(0);
  const [why, setWhy] = useState("");
  const [fit, setFit] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setError("");
    setStep(0);
    setWhy("");
    setFit("");
    const t = setTimeout(() => firstFieldRef.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const val = (name: string) => {
    const el = formRef.current?.elements.namedItem(name) as
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | null;
    return el ? String(el.value || "").trim() : "";
  };
  const file = (name: string) => {
    const el = formRef.current?.elements.namedItem(name) as HTMLInputElement | null;
    return el && el.files && el.files.length > 0 ? el.files[0] : null;
  };

  // Required fields per step; returns an error message or "" if valid.
  const validateStep = (s: number): string => {
    if (s === 0) {
      for (const [k, label] of [
        ["fullName", "your full name"],
        ["phone", "your phone / WhatsApp number"],
        ["email", "your email address"],
        ["country", "your country"],
        ["city", "your city"],
      ] as const) {
        if (!val(k)) return `Please add ${label}.`;
      }
      if (!EMAIL_RE.test(val("email"))) return "Please enter a valid email address.";
    }
    if (s === 1) {
      for (const [k, label] of [
        ["university", "your university / institution"],
        ["degreeProgram", "your degree program"],
        ["currentStatus", "your current status"],
        ["gradYear", "your graduation year"],
        ["cgpa", "your CGPA"],
      ] as const) {
        if (!val(k)) return `Please add ${label}.`;
      }
    }
    if (s === 2 && !val("position")) return "Please choose the position you are applying for.";
    if (s === 3) {
      for (const [k, label] of [
        ["unpaidOk", "your answer about the unpaid basis"],
        ["estAvailability", "your EST availability"],
        ["commit3Months", "whether you can commit the full 3 months"],
      ] as const) {
        if (!val(k)) return `Please answer: ${label}.`;
      }
    }
    if (s === 4) {
      const cv = file("resume");
      if (!cv) return "Please attach your resume (PDF or DOCX).";
      if (!/\.(pdf|docx)$/i.test(cv.name)) return "Resume must be a PDF or DOCX file.";
      if (cv.size > MAX_CV_MB * 1024 * 1024) return `Resume must be under ${MAX_CV_MB} MB.`;
      const pic = file("picture");
      if (pic) {
        if (!/\.(png|jpe?g)$/i.test(pic.name)) return "Professional picture must be a PNG or JPG.";
        if (pic.size > MAX_PIC_MB * 1024 * 1024) return `Picture must be under ${MAX_PIC_MB} MB.`;
      }
    }
    if (s === 5 && !val("whyJoin")) return "Please tell us why you want to join.";
    return "";
  };

  const next = () => {
    const msg = validateStep(step);
    if (msg) {
      setError(msg);
      return;
    }
    setError("");
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    // Validate every step before sending (in case someone jumps ahead).
    for (let s = 0; s < STEPS.length; s++) {
      const msg = validateStep(s);
      if (msg) {
        setStep(s);
        setError(msg);
        return;
      }
    }
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    if (!data.get("consent")) {
      setError("Please confirm the consent statement to submit.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/internships", { method: "POST", body: data });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const show = (i: number) => ({ display: step === i ? "block" : "none" });
  const isLast = step === STEPS.length - 1;

  return (
    <div className="af-overlay" role="dialog" aria-modal="true" aria-label="Apply for Internships" onMouseDown={onClose}>
      <div className="af-dialog" onMouseDown={(e) => e.stopPropagation()}>
        <button type="button" className="af-close" aria-label="Close" onClick={onClose}>
          &times;
        </button>

        {status === "success" ? (
          <div className="af-success">
            <h3>Application received.</h3>
            <p>
              Thanks for applying to the ClearKanvas Global Summer Internship Program 2026. We
              appreciate you taking the time to apply. If your application is a fit for the current
              intake, our team will reach out.
            </p>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="af-title">Apply for Internships</h3>
            <p className="af-sub">
              Summer Internship Program 2026. Step {step + 1} of {STEPS.length}: {STEPS[step]}
            </p>

            <form className="af-form" ref={formRef} onSubmit={onSubmit} noValidate>
              {/* STEP 1: Personal */}
              <div style={show(0)}>
                <div className="af-row">
                  <label className="af-field">
                    <span>Full name *</span>
                    <input ref={firstFieldRef} name="fullName" type="text" autoComplete="name" />
                  </label>
                  <label className="af-field">
                    <span>Phone / WhatsApp number *</span>
                    <input name="phone" type="tel" autoComplete="tel" />
                  </label>
                </div>
                <div className="af-row">
                  <label className="af-field">
                    <span>Email address *</span>
                    <input name="email" type="email" autoComplete="email" />
                  </label>
                  <label className="af-field">
                    <span>LinkedIn profile link</span>
                    <input name="linkedin" type="url" placeholder="https://" />
                  </label>
                </div>
                <div className="af-row">
                  <label className="af-field">
                    <span>Country *</span>
                    <input name="country" type="text" />
                  </label>
                  <label className="af-field">
                    <span>City *</span>
                    <input name="city" type="text" />
                  </label>
                </div>
              </div>

              {/* STEP 2: Education */}
              <div style={show(1)}>
                <div className="af-row">
                  <label className="af-field">
                    <span>University / institution *</span>
                    <input name="university" type="text" />
                  </label>
                  <label className="af-field">
                    <span>Degree program *</span>
                    <input name="degreeProgram" type="text" placeholder="e.g. BS Computer Science" />
                  </label>
                </div>
                <div className="af-row">
                  <label className="af-field">
                    <span>Current status *</span>
                    <select name="currentStatus" defaultValue="">
                      <option value="" disabled>Select</option>
                      {CURRENT_STATUS_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </label>
                  <label className="af-field">
                    <span>Graduation year *</span>
                    <input name="gradYear" type="text" placeholder="e.g. 2026" />
                  </label>
                </div>
                <label className="af-field">
                  <span>CGPA *</span>
                  <input name="cgpa" type="text" placeholder="e.g. 3.4 / 4.0" />
                </label>
              </div>

              {/* STEP 3: Role */}
              <div style={show(2)}>
                <label className="af-field">
                  <span>Which position are you applying for? *</span>
                  <select name="position" defaultValue="">
                    <option value="" disabled>Select a position</option>
                    {INTERNSHIP_POSITIONS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </label>
                <label className="af-field">
                  <span>Second choice position (optional)</span>
                  <select name="secondChoice" defaultValue="">
                    <option value="">None</option>
                    {INTERNSHIP_POSITIONS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </label>
              </div>

              {/* STEP 4: Logistics */}
              <div style={show(3)}>
                <label className="af-field">
                  <span>This is an unpaid internship. Are you okay with proceeding on this basis? *</span>
                  <select name="unpaidOk" defaultValue="">
                    <option value="" disabled>Select</option>
                    {UNPAID_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label className="af-field">
                  <span>Are you available to work in the EST time zone for this internship? *</span>
                  <select name="estAvailability" defaultValue="">
                    <option value="" disabled>Select</option>
                    {EST_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label className="af-field">
                  <span>Can you commit to the full 3-month duration? *</span>
                  <select name="commit3Months" defaultValue="">
                    <option value="" disabled>Select</option>
                    {COMMIT_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </label>
              </div>

              {/* STEP 5: Resume & Portfolio */}
              <div style={show(4)}>
                <label className="af-field">
                  <span>Upload your resume (PDF or DOCX, max {MAX_CV_MB} MB) *</span>
                  <input name="resume" type="file" accept=".pdf,.docx" />
                </label>
                <label className="af-field">
                  <span>Upload your professional picture (PNG or JPG, optional)</span>
                  <input name="picture" type="file" accept=".png,.jpg,.jpeg" />
                </label>
                <label className="af-field">
                  <span>Portfolio / GitHub / Behance link (optional)</span>
                  <input name="portfolio" type="url" placeholder="https://" />
                </label>
              </div>

              {/* STEP 6: About you */}
              <div style={show(5)}>
                <label className="af-field">
                  <span>Why do you want to join ClearKanvas Global? *</span>
                  <textarea
                    name="whyJoin"
                    rows={4}
                    maxLength={MAX_LONG}
                    value={why}
                    onChange={(e) => setWhy(e.target.value)}
                  />
                  <span className="af-count">{why.length}/{MAX_LONG}</span>
                </label>
                <label className="af-field">
                  <span>What makes you a good fit for this role?</span>
                  <textarea
                    name="goodFit"
                    rows={4}
                    maxLength={MAX_LONG}
                    value={fit}
                    onChange={(e) => setFit(e.target.value)}
                  />
                  <span className="af-count">{fit.length}/{MAX_LONG}</span>
                </label>
                <label className="af-field">
                  <span>How did you hear about us?</span>
                  <select name="heardAbout" defaultValue="">
                    <option value="">Select</option>
                    {HEARD_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </label>
              </div>

              {/* STEP 7: Consent */}
              <div style={show(6)}>
                <label className="af-check">
                  <input type="checkbox" name="consent" value="Yes" />
                  <span>{CONSENT_TEXT}</span>
                </label>
              </div>

              {error && <p className="af-error">{error}</p>}

              <div className="af-steps-nav">
                {step > 0 && (
                  <button type="button" className="btn btn-ghost" onClick={back}>
                    Back
                  </button>
                )}
                {!isLast ? (
                  <button type="button" className="btn btn-primary af-next" onClick={next}>
                    Next
                  </button>
                ) : (
                  <button className="btn btn-primary af-next" type="submit" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Submit application"}
                  </button>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
