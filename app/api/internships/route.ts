import { NextResponse } from "next/server";
import { INTERNSHIP_COHORT } from "@/lib/internships";

export const runtime = "nodejs";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const MAX_PIC_BYTES = 5 * 1024 * 1024;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/**
 * Internship application endpoint (Summer Internship Program).
 *
 * Mirrors the founder's Google Form. Validates the submission, then forwards it
 * (with the resume, and optional professional picture, as base64) to the same
 * Google Apps Script Web App as the careers form (CAREERS_WEBHOOK_URL), tagged
 * applicationType "Internship" and source "Website". The script routes it to the
 * "Internships" sheet tab, saves the resume and picture to their own Drive
 * folders, and sends the internship acknowledgment. See docs/careers-ats-Code.gs.md.
 */
export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const g = (k: string) => String(form.get(k) || "").trim();

  const fields = {
    fullName: g("fullName"),
    phone: g("phone"),
    email: g("email"),
    linkedin: g("linkedin"),
    country: g("country"),
    city: g("city"),
    university: g("university"),
    degreeProgram: g("degreeProgram"),
    currentStatus: g("currentStatus"),
    gradYear: g("gradYear"),
    cgpa: g("cgpa"),
    position: g("position"),
    secondChoice: g("secondChoice"),
    unpaidOk: g("unpaidOk"),
    estAvailability: g("estAvailability"),
    commit3Months: g("commit3Months"),
    portfolio: g("portfolio"),
    whyJoin: g("whyJoin"),
    goodFit: g("goodFit"),
    heardAbout: g("heardAbout"),
    consent: form.get("consent") ? "Yes" : "",
  };

  // Required fields (match the form's required questions).
  const required: [keyof typeof fields, string][] = [
    ["fullName", "full name"],
    ["phone", "phone / WhatsApp number"],
    ["email", "email address"],
    ["country", "country"],
    ["city", "city"],
    ["university", "university / institution"],
    ["degreeProgram", "degree program"],
    ["currentStatus", "current status"],
    ["gradYear", "graduation year"],
    ["cgpa", "CGPA"],
    ["position", "position applying for"],
    ["unpaidOk", "unpaid basis answer"],
    ["estAvailability", "EST availability"],
    ["commit3Months", "3-month commitment"],
    ["whyJoin", "why you want to join"],
  ];
  for (const [k, label] of required) {
    if (!fields[k]) {
      return NextResponse.json({ error: `Please complete: ${label}.` }, { status: 400 });
    }
  }
  if (!EMAIL_RE.test(fields.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!fields.consent) {
    return NextResponse.json({ error: "Please confirm the consent statement." }, { status: 400 });
  }

  const resume = form.get("resume");
  if (!(resume instanceof File) || resume.size === 0) {
    return NextResponse.json({ error: "Please attach your resume." }, { status: 400 });
  }
  if (!/\.(pdf|docx)$/i.test(resume.name)) {
    return NextResponse.json({ error: "Resume must be a PDF or DOCX file." }, { status: 400 });
  }
  if (resume.size > MAX_CV_BYTES) {
    return NextResponse.json({ error: "Resume must be under 5 MB." }, { status: 400 });
  }

  // Optional professional picture.
  const picture = form.get("picture");
  let picturePayload: { name: string; type: string; base64: string } | null = null;
  if (picture instanceof File && picture.size > 0) {
    if (!/\.(png|jpe?g)$/i.test(picture.name)) {
      return NextResponse.json({ error: "Professional picture must be a PNG or JPG." }, { status: 400 });
    }
    if (picture.size > MAX_PIC_BYTES) {
      return NextResponse.json({ error: "Picture must be under 5 MB." }, { status: 400 });
    }
    const pbuf = Buffer.from(await picture.arrayBuffer());
    picturePayload = {
      name: picture.name,
      type: picture.type || "application/octet-stream",
      base64: pbuf.toString("base64"),
    };
  }

  const webhook = process.env.CAREERS_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      { error: "Applications are not enabled yet. Please email your CV to careers@clearkanvas.com." },
      { status: 503 },
    );
  }

  try {
    const buf = Buffer.from(await resume.arrayBuffer());
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.CAREERS_WEBHOOK_SECRET ?? "",
        applicationType: "Internship",
        source: "Website",
        cohort: INTERNSHIP_COHORT,
        ...fields,
        cvName: resume.name,
        cvType: resume.type || "application/octet-stream",
        cvBase64: buf.toString("base64"),
        pictureName: picturePayload?.name ?? "",
        pictureType: picturePayload?.type ?? "",
        pictureBase64: picturePayload?.base64 ?? "",
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
