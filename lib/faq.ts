export interface Faq {
  q: string;
  a: string;
}

// Single source of truth for the homepage FAQ section and its FAQPage JSON-LD.
export const FAQS: Faq[] = [
  {
    q: "What does ClearKanvas Global do?",
    a: "We help companies build and lead great teams, through four services: Recruitment, Employer of Record (EOR), Talent Offshoring, and Training & Leadership Retreats. We find your talent, employ them compliantly, run the day to day, and develop your leaders. Start with one service or use all four.",
  },
  {
    q: "Which regions do you cover?",
    a: "Our offices are in Pakistan and the United States, and we recruit, employ, and deploy talent across the GCC, MENA, Europe, North America, APAC, and LATAM.",
  },
  {
    q: "What is the difference between Recruitment, EOR, and Talent Offshoring?",
    a: "Recruitment places a permanent hire on your payroll. EOR lets you employ someone in a country where you have no legal entity, with us as the compliant legal employer. Talent Offshoring gives you a dedicated full time team member who works only for you while we handle their employment.",
  },
  {
    q: "What roles do you recruit for?",
    a: "Technical roles (engineering, DevOps, data, AI/ML, QA, design, prompt engineering), non-technical roles (sales, marketing, operations, finance, HR), and specialized fintech and compliance roles (SaaS, Payments, IDV, AML, KYC).",
  },
  {
    q: "How does your recruitment pricing work?",
    a: "We work on fixed, agreed-upfront pricing: one fee, no surprises, and every hire is backed by a 90-day replacement guarantee. We will share the specifics on a short discovery call.",
  },
  {
    q: "Can you employ someone for us in a country where we have no entity?",
    a: "Yes. That is exactly what our EOR service does. We become the legal employer of record and handle contracts, payroll, tax, and compliance under local law.",
  },
  {
    q: "How do we get started?",
    a: "Tell us who you need through our contact form, email hello@clearkanvas.com, or call +92 309 6661176. A real person replies within one business day, usually with a short discovery call.",
  },
];
