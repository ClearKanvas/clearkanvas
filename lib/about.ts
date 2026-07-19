// Brand statements for the About section. Kept broad and evergreen so they hold
// as the business grows. Rendered on /about (summary) and /about/purpose-values.

export interface Statement {
  /** Label, e.g. "Our purpose". */
  k: string;
  /** The statement itself. */
  v: string;
}

export const PMV: Statement[] = [
  { k: "Our purpose", v: "To turn complexity into clarity, so businesses can grow without limits." },
  { k: "Our mission", v: "We give companies what they need to grow across borders: the right people, the right capabilities, and a partner who owns the outcome." },
  { k: "Our vision", v: "A world where no company is held back by borders, distance, or complexity." },
];

export interface Value {
  t: string;
  d: string;
}

export const VALUES: Value[] = [
  { t: "Clarity", d: "We turn the complex into the simple, in everything we build and every conversation we have." },
  { t: "Excellence", d: "Good enough is never the standard. We deliver work we are proud to put our name to." },
  { t: "Integrity", d: "We do what is right, especially when no one is watching." },
  { t: "Partnership", d: "We own what we promise. Our clients' success is the only measure that matters." },
];

/** Intro copy for the dedicated Purpose & Values page. */
export const PMV_INTRO =
  "Four services, one standard. These are the statements we hold ourselves to, and the principles behind every engagement.";
