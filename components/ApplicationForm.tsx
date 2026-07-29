"use client";

import { useEffect, useRef, useState } from "react";
import { APPLICATION_TAXONOMY, APPLICATION_CATEGORIES, TALENT_NETWORK_OPTION } from "@/lib/careers";

const MAX_CV_MB = 5;
const MAX_ANSWER = 500;

type Status = "idle" | "submitting" | "success" | "error";

export default function ApplicationForm({
  open,
  onClose,
  posting,
}: {
  open: boolean;
  onClose: () => void;
  /** The specific open posting the applicant clicked Apply on, or Talent Network. */
  posting: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [answer, setAnswer] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  // Two-level expertise cascade: category drives the specialization options.
  const [category, setCategory] = useState("");
  const [specialization, setSpecialization] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const specializations =
    APPLICATION_TAXONOMY.find((t) => t.category === category)?.specializations ?? [];

  // A specific posting is only recorded when the applicant came from an open
  // role; the talent network / general entry point has no posting attached.
  const appliedPosting = posting === TALENT_NETWORK_OPTION ? "" : posting;

  // Reset transient state and focus the first field when opened.
  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setError("");
    setAnswer("");
    setIsStudent(false);
    setCategory("");
    setSpecialization("");
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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    const cv = data.get("cv") as File | null;
    if (!cv || cv.size === 0) {
      setError("Please attach your CV (PDF or DOCX).");
      return;
    }
    const okType = /\.(pdf|docx)$/i.test(cv.name);
    if (!okType) {
      setError("CV must be a PDF or DOCX file.");
      return;
    }
    if (cv.size > MAX_CV_MB * 1024 * 1024) {
      setError(`CV must be under ${MAX_CV_MB} MB.`);
      return;
    }

    if (!category) {
      setError("Please choose the role you are applying for.");
      return;
    }
    if (!specialization) {
      setError("Please choose your area of expertise.");
      return;
    }

    // When applying as a student / recent grad, the academic basics are required
    // so the database stays filterable (university, degree, CGPA, grad year).
    if (isStudent) {
      const need = [
        ["university", "your university"],
        ["degree", "your degree and field of study"],
        ["cgpa", "your CGPA or grade"],
        ["gradYear", "your graduation year"],
      ];
      for (const [key, label] of need) {
        if (!String(data.get(key) || "").trim()) {
          setError(`Please add ${label}.`);
          return;
        }
      }
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/careers", { method: "POST", body: data });
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

  return (
    <div className="af-overlay" role="dialog" aria-modal="true" aria-label="Application form" onMouseDown={onClose}>
      <div className="af-dialog" ref={dialogRef} onMouseDown={(e) => e.stopPropagation()}>
        <button type="button" className="af-close" aria-label="Close" onClick={onClose}>
          &times;
        </button>

        {status === "success" ? (
          <div className="af-success">
            <h3>Application received.</h3>
            <p>
              Thanks for applying. We reply to every applicant, so you will hear from us. If your
              background fits a live or upcoming role, we will be in touch.
            </p>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="af-title">
              {appliedPosting ? `Apply: ${appliedPosting}` : "Apply"}
            </h3>
            <p className="af-sub">Five minutes. CV plus one short question. No login, no portal.</p>

            <form className="af-form" onSubmit={onSubmit} noValidate>
              <div className="af-row">
                <label className="af-field">
                  <span>Full name *</span>
                  <input ref={firstFieldRef} name="name" type="text" required autoComplete="name" />
                </label>
                <label className="af-field">
                  <span>Email *</span>
                  <input name="email" type="email" required autoComplete="email" />
                </label>
              </div>

              <div className="af-row">
                <label className="af-field">
                  <span>Phone</span>
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
                <label className="af-field">
                  <span>LinkedIn URL</span>
                  <input name="linkedin" type="url" placeholder="https://" />
                </label>
              </div>

              {appliedPosting && <input type="hidden" name="appliedPosting" value={appliedPosting} />}

              <div className="af-row">
                <label className="af-field">
                  <span>Role applying for *</span>
                  <select
                    name="category"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      setSpecialization("");
                    }}
                    required
                  >
                    <option value="" disabled>Select a function</option>
                    {APPLICATION_CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <label className="af-field">
                  <span>Area of expertise *</span>
                  <select
                    name="specialization"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    required
                    disabled={!category}
                  >
                    <option value="" disabled>
                      {category ? "Select your area" : "Choose a role first"}
                    </option>
                    {specializations.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="af-check">
                <input
                  type="checkbox"
                  name="studentOrGrad"
                  value="Yes"
                  checked={isStudent}
                  onChange={(e) => setIsStudent(e.target.checked)}
                />
                <span>I&apos;m a student or recent graduate (internship / entry level)</span>
              </label>

              {isStudent && (
                <div className="af-student">
                  <div className="af-row">
                    <label className="af-field">
                      <span>University / institution *</span>
                      <input name="university" type="text" />
                    </label>
                    <label className="af-field">
                      <span>Degree &amp; field of study *</span>
                      <input name="degree" type="text" placeholder="e.g. BS Computer Science" />
                    </label>
                  </div>
                  <div className="af-row">
                    <label className="af-field">
                      <span>CGPA / grade *</span>
                      <input name="cgpa" type="text" placeholder="e.g. 3.4 / 4.0" />
                    </label>
                    <label className="af-field">
                      <span>Graduation year *</span>
                      <input name="gradYear" type="text" placeholder="e.g. 2026 (or expected)" />
                    </label>
                  </div>
                  <div className="af-row">
                    <label className="af-field">
                      <span>Current year / semester (if studying)</span>
                      <input name="studyStatus" type="text" placeholder="e.g. Final year, 7th semester" />
                    </label>
                    <label className="af-field">
                      <span>Availability</span>
                      <input name="availability" type="text" placeholder="e.g. From June, full-time, 3 months" />
                    </label>
                  </div>
                  <div className="af-row">
                    <label className="af-field">
                      <span>Location</span>
                      <input name="location" type="text" placeholder="City, and remote or onsite" />
                    </label>
                    <label className="af-field">
                      <span>Portfolio / GitHub (optional)</span>
                      <input name="portfolio" type="url" placeholder="https://" />
                    </label>
                  </div>
                </div>
              )}

              <label className="af-field">
                <span>CV (PDF or DOCX, max {MAX_CV_MB} MB) *</span>
                <input name="cv" type="file" accept=".pdf,.docx" required />
              </label>

              <label className="af-field">
                <span>In two or three sentences, why this role? *</span>
                <textarea
                  name="answer"
                  required
                  rows={4}
                  maxLength={MAX_ANSWER}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
                <span className="af-count">{answer.length}/{MAX_ANSWER}</span>
              </label>

              {error && <p className="af-error">{error}</p>}

              <button className="btn btn-primary af-submit" type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Submit application"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
