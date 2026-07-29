import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/**
 * Careers application endpoint.
 *
 * Validates the submission, then forwards it (with the CV as base64) to a Google
 * Apps Script Web App set in CAREERS_WEBHOOK_URL. That script appends a row to the
 * Applications sheet, saves the CV to Drive, and sends the acknowledgment / team
 * emails. See docs/careers-form-setup.md for the script and setup.
 *
 * Until CAREERS_WEBHOOK_URL is configured, the endpoint returns 503 so no
 * application is silently lost.
 */
export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const linkedin = String(form.get("linkedin") || "").trim();
  const role = String(form.get("role") || "").trim();
  const domain = String(form.get("domain") || "").trim();
  const answer = String(form.get("answer") || "").trim();
  // Optional academic fields (only present for student / recent-grad applicants).
  const studentOrGrad = form.get("studentOrGrad") ? "Yes" : "";
  const university = String(form.get("university") || "").trim();
  const degree = String(form.get("degree") || "").trim();
  const cgpa = String(form.get("cgpa") || "").trim();
  const gradYear = String(form.get("gradYear") || "").trim();
  const studyStatus = String(form.get("studyStatus") || "").trim();
  const availability = String(form.get("availability") || "").trim();
  const location = String(form.get("location") || "").trim();
  const portfolio = String(form.get("portfolio") || "").trim();
  const cv = form.get("cv");

  if (!name || !email || !role || !answer) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (answer.length > 500) {
    return NextResponse.json({ error: "Your answer is too long (max 500 characters)." }, { status: 400 });
  }
  if (!(cv instanceof File) || cv.size === 0) {
    return NextResponse.json({ error: "Please attach your CV." }, { status: 400 });
  }
  if (!/\.(pdf|docx)$/i.test(cv.name)) {
    return NextResponse.json({ error: "CV must be a PDF or DOCX file." }, { status: 400 });
  }
  if (cv.size > MAX_CV_BYTES) {
    return NextResponse.json({ error: "CV must be under 5 MB." }, { status: 400 });
  }

  const webhook = process.env.CAREERS_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      { error: "Applications are not enabled yet. Please email your CV to hello@clearkanvas.com." },
      { status: 503 },
    );
  }

  try {
    const buf = Buffer.from(await cv.arrayBuffer());
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // Shared secret so only this site can write to the sheet. The Apps Script
        // Web App has to be open to "Anyone", so the secret is what actually
        // guards it. Set CAREERS_WEBHOOK_SECRET to the same value in both places.
        secret: process.env.CAREERS_WEBHOOK_SECRET ?? "",
        name,
        email,
        phone,
        linkedin,
        role,
        domain,
        studentOrGrad,
        university,
        degree,
        cgpa,
        gradYear,
        studyStatus,
        availability,
        location,
        portfolio,
        answer,
        cvName: cv.name,
        cvType: cv.type || "application/octet-stream",
        cvBase64: buf.toString("base64"),
      }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch {
    return NextResponse.json(
      { error: "We could not submit your application right now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
