import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  country?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const country = body.country?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  // Mirror the client-side validation as the authoritative check.
  if (!name || !EMAIL_RE.test(email) || !message) {
    return NextResponse.json(
      { error: "Please provide your name, a valid email, and a message." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "hello@clearkanvas.com";
  // Resend requires a verified sender; falls back to their onboarding address.
  const from = process.env.CONTACT_FROM_EMAIL ?? "ClearKanvas Global <onboarding@resend.dev>";

  const subject = `New enquiry from ${name}${company ? ` (${company})` : ""}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    country ? `Country: ${country}` : null,
    "",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  // Without a configured provider, log the submission so local dev still works.
  if (!apiKey) {
    console.info("[contact] no RESEND_API_KEY set , submission not emailed:\n" + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, reply_to: email, subject, text }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend error:", res.status, detail);
      return NextResponse.json(
        { error: "We could not send your message. Please email us directly." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json(
      { error: "We could not send your message. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
