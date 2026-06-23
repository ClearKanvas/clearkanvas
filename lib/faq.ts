export interface Faq {
  q: string;
  a: string;
}

// Single source of truth for the homepage FAQ section and its FAQPage JSON-LD.
export const FAQS: Faq[] = [
  {
    q: "What does ClearKanvas Global do?",
    a: "ClearKanvas Global builds and runs the finance, talent, technology, and operations functions that growing companies struggle to staff well. We do not just advise. We design the solution, then run it as an extension of your team. Engage us for one service or an entire offshore capability.",
  },
  {
    q: "Where is ClearKanvas Global based, and where do you operate?",
    a: "We operate in the USA, Pakistan, and Bahrain, with our primary delivery center in Islamabad, Pakistan. We serve clients across these markets and are growing into new ones.",
  },
  {
    q: "What services do you offer?",
    a: "Eight, across three areas. Finance and performance: Finance & Accounting, and Reporting & Business Intelligence. People and operations: Global Capability Centers & Offshore Teams, HR & Talent, and Customer Experience & BPO. Technology and change: AI & Intelligent Automation, Technology & Digital, and Advisory & Transformation.",
  },
  {
    q: "Can I hire just one service, or build a full team?",
    a: "Both. You can engage us for a single function, such as bookkeeping or customer support, or use our flagship model to stand up a dedicated offshore team in Pakistan that works to your standards, in your tools, on your hours. Either way, we own the outcome.",
  },
  {
    q: "How is ClearKanvas Global different from a typical outsourcing provider?",
    a: "Most providers hand you a deck or rent you seats. We advise, build, and run. The people who scope your engagement are the people accountable for it, so you get judgment from the first call, not just throughput once the contract is signed.",
  },
  {
    q: "Why deliver from Pakistan?",
    a: "Pakistan offers a large, skilled, English-speaking talent pool at a meaningful cost advantage to Western markets, with time-zone overlap with the Gulf and a full working-day handoff to North America. We turn that into a managed, reliable capability, not a race to the cheapest seat.",
  },
  {
    q: "How do we get started?",
    a: "Tell us what you are trying to build through our contact form, or email hello@clearkanvas.com or call +92 309 6661176. A real person replies within one business day, usually starting with a short discovery call.",
  },
];
