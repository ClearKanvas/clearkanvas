// Content layer for the Careers page. Copy lives here so it can be edited
// without touching the component. No pricing or pay figures (standing rule).

export interface CareerStat {
  n: number;
  suf: string;
  unit: string;
  label: string;
}

export interface CareerValue {
  /** Icon key resolved in the component. */
  icon: "globe" | "shield" | "users" | "growth" | "building" | "heart";
  title: string;
  desc: string;
}

export interface CareerTeam {
  name: string;
  desc: string;
}

export interface GalleryItem {
  label: string;
  /** Optional real image in /public. When absent, a branded placeholder tile shows. */
  img?: string;
}

export interface HiringStep {
  title: string;
  desc: string;
}

export const CAREER_STATS: CareerStat[] = [
  { n: 6, suf: "", unit: "regions", label: "of clients to work with" },
  { n: 25, suf: "+", unit: "years", label: "of experience to learn from" },
  { n: 2, suf: "", unit: "offices", label: "Pakistan and USA" },
];

export const CAREER_VALUES: CareerValue[] = [
  {
    icon: "globe",
    title: "Global exposure",
    desc: "Work with clients across the GCC, MENA, Europe, North America, APAC, and LATAM, from your first project.",
  },
  {
    icon: "shield",
    title: "Serious craft",
    desc: "Recruit and deliver for demanding fintech, SaaS, and compliance clients, the work most firms cannot touch.",
  },
  {
    icon: "users",
    title: "Real mentorship",
    desc: "Learn beside a founding team with over 25 years of combined recruitment and delivery experience.",
  },
  {
    icon: "growth",
    title: "A clear path",
    desc: "Grow from intern to recruiter to team lead, with real responsibility handed to you early.",
  },
  {
    icon: "building",
    title: "Modern workspace",
    desc: "A hybrid setup with dedicated CalmKaaj workspaces, so you choose where you do your best work.",
  },
  {
    icon: "heart",
    title: "People first",
    desc: "Small teams, visible impact, and a low-ego culture that backs you to do the work well.",
  },
];

export const CAREER_TEAMS: CareerTeam[] = [
  { name: "Recruitment", desc: "Source, screen, and place talent for clients around the world." },
  { name: "Delivery and Offshoring", desc: "Engineers, designers, and QA who work embedded in client teams." },
  { name: "Fintech and Compliance", desc: "Analysts and recruiters for SaaS, Payments, IDV, AML, and KYC roles." },
  { name: "Operations and Support", desc: "Keep every engagement running smoothly, from first brief to onboarding." },
  { name: "People and Talent", desc: "Hire, onboard, and grow the ClearKanvas team itself." },
  { name: "Internships (NUST)", desc: "Early-career programs and pipelines with our university partners." },
];

export const CAREER_GALLERY: GalleryItem[] = [
  { label: "Islamabad office" },
  { label: "The delivery floor" },
  { label: "Team offsite" },
  { label: "Onboarding day" },
  { label: "Workspace" },
  { label: "Celebrating a win" },
];

export const HIRING_PROCESS: HiringStep[] = [
  { title: "Apply", desc: "Send your CV or introduce yourself through our talent network." },
  { title: "Intro call", desc: "A short conversation to understand your experience and what you are looking for." },
  { title: "Skills review", desc: "A practical assessment or portfolio review relevant to the role." },
  { title: "Meet the team", desc: "Interviews with the people you would actually work alongside." },
  { title: "Offer", desc: "A clear offer, with answers to every question before you decide." },
  { title: "Onboard", desc: "A structured first few weeks so you start with real momentum." },
];

export const CAREER_BENEFITS: string[] = [
  "Competitive compensation, reviewed as you grow",
  "Hybrid working with dedicated CalmKaaj workspaces",
  "Mentorship from a senior founding team",
  "Exposure to global clients and specialized domains",
  "A clear, merit-based path to advance",
  "Health and wellbeing support",
  "A collaborative, low-ego team culture",
  "Support for certifications and continued learning",
];
