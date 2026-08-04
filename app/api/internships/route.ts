import { NextResponse } from "next/server";
import { INTERNSHIP_COHORT } from "@/lib/internships";

export const runtime = "nodejs";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/**
 * Internship application endpoint.
 *
 * Validates the submission, then forwards it (with the CV as base64) to the same
 * Google Apps Script Web App as the main careers form (CAREERS_WEBHOOK_URL),
 * tagged with applicationType "Internship". The script routes internship rows to
 * the "Internships" sheet tab and a cohort/function Drive subfolder, and sends
 * the internship-specific acknowledgment. See docs/careers-ats-Code.gs.md.
 */
export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const get = (k: string) => String(form.get(k) || "").trim();

  const name = get("name");
  const email = get("email");
  const phone = get("phone");
  const linkedin = get("linkedin");
  const category = get("category");
  const specialization = get("specialization");
  const university = get("university");
  const degree = get("degree");
  const cgpa = get("cgpa");
  const gradYear = get("gradYear");
  const studyStatus = get("studyStatus");
  const startDate = get("startDate");
  const commit3Months = get("commit3Months");
  const availability = get("availability");
  const workMode = get("workMode");
  const location = get("location");
  const conflicts = get("conflicts");
  const portfolio = get("portfolio");
  const source = get("source");
  const unpaidAck = form.get("unpaidAck") ? "Yes" : "";
  const answer = get("answer");
  const cv = form.get("cv");

  if (
    !name || !email || !category || !specialization || !university || !degree ||
    !cgpa || !gradYear || !startDate || !commit3Months || !answer
  ) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!unpaidAck) {
    return NextResponse.json(
      { error: "Please confirm you understand this is an unpaid, learning-based internship." },
      { status: 400 },
    );
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
      { error: "Applications are not enabled yet. Please email your CV to careers@clearkanvas.com." },
      { status: 503 },
    );
  }

  try {
    const buf = Buffer.from(await cv.arrayBuffer());
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.CAREERS_WEBHOOK_SECRET ?? "",
        applicationType: "Internship",
        cohort: INTERNSHIP_COHORT,
        name,
        email,
        phone,
        linkedin,
        category,
        specialization,
        university,
        degree,
        cgpa,
        gradYear,
        studyStatus,
        startDate,
        commit3Months,
        availability,
        workMode,
        location,
        conflicts,
        portfolio,
        source,
        unpaidAck,
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
