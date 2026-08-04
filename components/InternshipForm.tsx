"use client";

import { useEffect, useRef, useState } from "react";
import { APPLICATION_TAXONOMY, APPLICATION_CATEGORIES } from "@/lib/careers";
import { INTERNSHIP_AVAILABILITY, INTERNSHIP_WORK_MODE } from "@/lib/internships";

const MAX_CV_MB = 5;
const MAX_ANSWER = 500;

type Status = "idle" | "submitting" | "success" | "error";

export default function InternshipForm({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [specialization, setSpecialization] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const specializations =
    APPLICATION_TAXONOMY.find((t) => t.category === category)?.specializations ?? [];

  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setError("");
    setAnswer("");
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
    if (!/\.(pdf|docx)$/i.test(cv.name)) {
      setError("CV must be a PDF or DOCX file.");
      return;
    }
    if (cv.size > MAX_CV_MB * 1024 * 1024) {
      setError(`CV must be under ${MAX_CV_MB} MB.`);
      return;
    }
    if (!category) {
      setError("Please choose the area you are applying for.");
      return;
    }
    if (!specialization) {
      setError("Please choose your area of interest.");
      return;
    }

    // Required academic and program-fit fields.
    const need: [string, string][] = [
      ["university", "your university or institution"],
      ["degree", "your degree and field of study"],
      ["cgpa", "your CGPA or grade"],
      ["gradYear", "your expected graduation year"],
      ["startDate", "your earliest start date"],
      ["commit3Months", "whether you can commit the full three months"],
    ];
    for (const [key, label] of need) {
      if (!String(data.get(key) || "").trim()) {
        setError(`Please add ${label}.`);
        return;
      }
    }
    if (!data.get("unpaidAck")) {
      setError("Please confirm you understand this is an unpaid, learning-based internship.");
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

  return (
    <div className="af-overlay" role="dialog" aria-modal="true" aria-label="Internship application" onMouseDown={onClose}>
      <div className="af-dialog" ref={dialogRef} onMouseDown={(e) => e.stopPropagation()}>
        <button type="button" className="af-close" aria-label="Close" onClick={onClose}>
          &times;
        </button>

        {status === "success" ? (
          <div className="af-success">
            <h3>Application received.</h3>
            <p>
              Thanks for your interest in the ClearKanvas Global Internship Program. We appreciate
              you taking the time to apply. If your application is a fit for the current intake, our
              team will reach out.
            </p>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="af-title">Apply for the Internship Program</h3>
            <p className="af-sub">
              A learning-based, unpaid internship of about three months. A few minutes to apply.
            </p>

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

              <div className="af-row">
                <label className="af-field">
                  <span>Area applying for *</span>
                  <select
                    name="category"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      setSpecialization("");
                    }}
                    required
                  >
                    <option value="" disabled>Select an area</option>
                    {APPLICATION_CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <label className="af-field">
                  <span>Area of interest *</span>
                  <select
                    name="specialization"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    required
                    disabled={!category}
                  >
                    <option value="" disabled>
                      {category ? "Select your interest" : "Choose an area first"}
                    </option>
                    {specializations.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </label>
              </div>

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
                    <span>Expected graduation year *</span>
                    <input name="gradYear" type="text" placeholder="e.g. 2027 (or graduated)" />
                  </label>
                </div>
                <div className="af-row">
                  <label className="af-field">
                    <span>Current year / semester</span>
                    <input name="studyStatus" type="text" placeholder="e.g. Final year, 7th semester" />
                  </label>
                  <label className="af-field">
                    <span>Earliest start date *</span>
                    <input name="startDate" type="date" />
                  </label>
                </div>
                <div className="af-row">
                  <label className="af-field">
                    <span>Can you commit the full 3 months? *</span>
                    <select name="commit3Months" defaultValue="" required>
                      <option value="" disabled>Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </label>
                  <label className="af-field">
                    <span>Availability</span>
                    <select name="availability" defaultValue="">
                      <option value="" disabled>Select</option>
                      {INTERNSHIP_AVAILABILITY.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="af-row">
                  <label className="af-field">
                    <span>Preferred mode</span>
                    <select name="workMode" defaultValue="">
                      <option value="" disabled>Select</option>
                      {INTERNSHIP_WORK_MODE.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </label>
                  <label className="af-field">
                    <span>Location (city)</span>
                    <input name="location" type="text" placeholder="City" />
                  </label>
                </div>
                <div className="af-row">
                  <label className="af-field">
                    <span>Any scheduling conflicts? (exams, classes)</span>
                    <input name="conflicts" type="text" placeholder="Optional" />
                  </label>
                  <label className="af-field">
                    <span>Portfolio / GitHub (optional)</span>
                    <input name="portfolio" type="url" placeholder="https://" />
                  </label>
                </div>
                <label className="af-field">
                  <span>How did you hear about us?</span>
                  <input name="source" type="text" placeholder="Optional" />
                </label>
              </div>

              <label className="af-field">
                <span>CV (PDF or DOCX, max {MAX_CV_MB} MB) *</span>
                <input name="cv" type="file" accept=".pdf,.docx" required />
              </label>

              <label className="af-field">
                <span>In two or three sentences, why this internship? *</span>
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

              <label className="af-check">
                <input type="checkbox" name="unpaidAck" value="Yes" />
                <span>
                  I understand this is an unpaid, learning-based internship for approximately three
                  months.
                </span>
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
