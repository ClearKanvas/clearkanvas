"use client";

import { useEffect, useRef, useState } from "react";

const MAX_CV_MB = 5;
const MAX_ANSWER = 500;

type Status = "idle" | "submitting" | "success" | "error";

export default function ApplicationForm({
  open,
  onClose,
  role,
  roleOptions,
}: {
  open: boolean;
  onClose: () => void;
  role: string;
  roleOptions: string[];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [answer, setAnswer] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Reset transient state and focus the first field when opened.
  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setError("");
    setAnswer("");
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
              {role === "Talent Network" ? "Join the talent network" : "Apply"}
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

              <label className="af-field">
                <span>Role applying for *</span>
                <select name="role" defaultValue={role} required>
                  {roleOptions.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </label>

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
