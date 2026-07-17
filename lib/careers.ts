// Content layer for the Careers page (per the founder's Careers Page Copy doc).
// No pricing or pay figures. No stock photos (design uses brand color blocks).

export interface CareerValue {
  /** Icon key resolved in the component. */
  icon: "globe" | "users" | "spark" | "clock";
  title: string;
  desc: string;
}

export interface HiringStep {
  title: string;
  desc: string;
}

// Section 2: Why Work Here , "What you actually get."
export const CAREER_VALUES: CareerValue[] = [
  { icon: "globe", title: "Global exposure", desc: "Work directly with clients in the US, the Gulf, and beyond, from Pakistan." },
  { icon: "users", title: "Learn from operators", desc: "Mentorship from leaders with 15+ years across 15+ countries." },
  { icon: "spark", title: "Real ownership", desc: "Early-stage means your work shapes the company, not a ticket queue." },
  { icon: "clock", title: "Flexibility that works", desc: "Remote-first, with hours built around client time zones, not face time." },
];

// Section 4: How We Hire , "Four steps. No black hole."
export const HIRING_STEPS: HiringStep[] = [
  { title: "Apply", desc: "Five minutes. CV plus one short question. No login, no portal." },
  { title: "Intro call", desc: "30 minutes with us within one week of applying." },
  { title: "Working session", desc: "A practical exercise close to the real job. No trick questions." },
  { title: "Offer", desc: "Clear terms, fast decision, honest feedback either way." },
];

export const HIRING_PROMISE =
  "We reply to every applicant. We're a talent company. Anything less would be malpractice.";

// Value shown in the role dropdown for open applications with no specific role.
export const TALENT_NETWORK_OPTION = "Talent Network";
