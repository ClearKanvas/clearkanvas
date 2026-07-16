import type { Orb } from "./orbField";

export interface ServiceStep {
  title: string;
  desc: string;
}

/** Region + delivery model row (used by EOR coverage). */
export interface CoverageRow {
  region: string;
  note: string;
}

/** A specialized recruitment domain (fintech & compliance). */
export interface SpecializedDomain {
  domain: string;
  desc: string;
}

export interface Service {
  slug: string;
  num: string;
  name: string;
  /** Headline experience stat, e.g. "25+ years". */
  experience: string;
  /** Italic one-line promise shown under the title. */
  promise: string;
  /** Short label used on grids and the homepage service cards. */
  summary: string;
  /** Hero subheadline on the detail page. */
  heroTag: string;
  /** Opening paragraph on the detail page. */
  intro: string;
  /** "What we do" , the sub-services / roles, shown as a clean grid. */
  subServices: string[];
  /** "How we do it" , the process steps. */
  how: ServiceStep[];
  /** "What you gain" , outcome statements. */
  gains: string[];
  /** "What's included" , concrete deliverables. */
  whatsIncluded: string[];
  /** "Why ClearKanvas Global" , short block. */
  why: string;
  /** Symbolic background image (no people) for the "What you gain" band. */
  bandImg?: string;
  /** Simple region coverage list (recruitment, offshoring). */
  regions?: string[];
  /** Region + delivery model coverage (EOR). */
  coverage?: CoverageRow[];
  /** Technical roles (recruitment). */
  rolesTech?: string[];
  /** Non-technical roles (recruitment). */
  rolesNonTech?: string[];
  /** Fintech & compliance domains (recruitment). */
  specialized?: SpecializedDomain[];
  /** Flagship service gets extra emphasis. */
  flagship?: boolean;
  /** Per-service orb palette for the animated hero background. */
  orbs: Orb[];
}

// Shared orb preset , tuned per service so each hero feels distinct but on-brand.
const navyOrange = (shift = 0): Orb[] => [
  { bx: 0.16, by: 0.3, r: 380, ax: 74, ay: 48, sx: 0.13, sy: 0.1, ph: 0.0 + shift, c: "15,30,61", a: 0.18 },
  { bx: 0.86, by: 0.22, r: 330, ax: 62, ay: 50, sx: 0.11, sy: 0.14, ph: 1.7 + shift, c: "255,106,43", a: 0.16 },
  { bx: 0.74, by: 0.82, r: 340, ax: 66, ay: 54, sx: 0.1, sy: 0.12, ph: 3.1 + shift, c: "15,30,61", a: 0.12 },
  { bx: 0.3, by: 0.78, r: 300, ax: 70, ay: 46, sx: 0.12, sy: 0.09, ph: 4.4 + shift, c: "255,106,43", a: 0.1 },
];

export const SERVICES: Service[] = [
  {
    slug: "recruitment",
    num: "01",
    name: "Recruitment",
    experience: "25+ years",
    promise: "Hire the person, not the paperwork.",
    summary:
      "We source, screen, and place the right people for any role, tech or non-tech, in any region. You only meet candidates who genuinely fit.",
    heroTag:
      "For over 25 years our founding team has sourced, screened, and placed the right people across tech and non-tech roles, in every region we serve. You meet only genuine contenders, and you pay only when you hire.",
    intro:
      "Great hiring is not about volume, it is about fit. We work your requirement hard before you ever see a CV, so the shortlist that lands on your desk is short for a reason: every name on it can actually do the job. From a single critical hire to an entire team, we place people who stay.",
    regions: ["GCC", "MENA", "Europe", "North America", "APAC", "LATAM"],
    rolesTech: [
      "Software Engineering (frontend, backend, full-stack, mobile)",
      "DevOps & Cloud Engineering",
      "Data Engineering, Data Science & AI/ML",
      "QA & Test Engineering",
      "Product & UI/UX Design",
      "Prompt Engineering",
    ],
    rolesNonTech: [
      "Sales & Business Development",
      "Marketing & Growth",
      "Operations & Customer Support",
      "Finance & Accounting",
      "HR & People Operations",
    ],
    specialized: [
      { domain: "SaaS", desc: "Sales, customer success, and engineering talent for SaaS businesses." },
      { domain: "IT", desc: "Infrastructure, support, and technical staffing across industries." },
      { domain: "Payments", desc: "Talent for payment processors, fintechs, and payment infrastructure providers." },
      { domain: "IDV", desc: "People who know identity verification systems and operations." },
      { domain: "AML", desc: "Compliance analysts and anti-money-laundering operations talent." },
      { domain: "KYC", desc: "Know Your Customer analysts and onboarding compliance talent." },
    ],
    subServices: [
      "Software Engineering",
      "DevOps & Cloud",
      "Data, AI & ML",
      "QA & Test",
      "Product & UI/UX",
      "Prompt Engineering",
      "Sales & Business Development",
      "Marketing & Growth",
      "Finance & Accounting",
      "HR & People Operations",
      "SaaS & Payments",
      "IDV, AML & KYC",
    ],
    how: [
      { title: "Requirement scoping", desc: "We learn the role, the must-have skills, the timeline, and what good looks like for you." },
      { title: "Sourcing & screening", desc: "We source from our global network and screen candidates before anyone reaches your inbox." },
      { title: "Shortlisting", desc: "You get a curated shortlist within an agreed turnaround." },
      { title: "Interviews", desc: "We coordinate interviews and gather structured feedback." },
      { title: "Offer & onboarding", desc: "We support the offer, negotiation, acceptance, and first weeks." },
      { title: "Post-placement support", desc: "A replacement guarantee window and ongoing check-ins." },
    ],
    gains: [
      "A shortlist that is short for a reason.",
      "A strong hit rate: most shortlists we present go on to a hire.",
      "No placement, no fee, our interests stay aligned with yours.",
      "A replacement guarantee window if a hire does not work out.",
    ],
    whatsIncluded: [
      "Precision screening against your must-have skills and experience.",
      "A focused shortlist, typically 3 to 5 fully assessed candidates per role.",
      "A strong submission-to-hire success rate, because we screen hard before we submit.",
      "Post-placement support, onboarding help, and a replacement guarantee window.",
    ],
    why: "25+ years of combined experience, a specialist edge in fintech and compliance hiring, and a no placement, no fee model that keeps our interests aligned with yours: we only win when you hire someone who stays.",
    bandImg: "/bands/recruitment.jpg",
    flagship: true,
    orbs: navyOrange(0.4),
  },
  {
    slug: "employer-of-record",
    num: "02",
    name: "Employer of Record",
    experience: "5+ years",
    promise: "Employ anyone, anywhere, compliantly.",
    summary:
      "Hire talent in markets where you have no legal entity. We become the compliant legal employer and handle contracts, payroll, and HR.",
    heroTag:
      "Hire the person you want in a country where you have no legal entity. ClearKanvas becomes their legal employer of record and takes on the contracts, payroll, tax, and compliance, so the hire is legitimate from day one and the risk never lands on you.",
    intro:
      "Opening a legal entity in a new country is slow, expensive, and hard to unwind. EOR removes that barrier entirely. You choose the talent, we employ them properly under local law, and you get a fully compliant team member without the cost or commitment of setting up abroad. 5+ years of combined EOR and compliant-employment experience stands behind every engagement.",
    coverage: [
      { region: "Pakistan", note: "Direct EOR, ClearKanvas is the legal employer." },
      { region: "GCC", note: "Direct and partner-supported EOR." },
      { region: "MENA & Europe", note: "Partner-supported EOR." },
      { region: "North America", note: "Partner-supported EOR via PlayRoll and Deel." },
      { region: "APAC & LATAM", note: "Partner-supported EOR reaching well over 180 countries through our PlayRoll network." },
    ],
    subServices: [
      "Local-law employment contracts",
      "Payroll processing",
      "Statutory tax filing",
      "Benefits & leave administration",
      "Onboarding & termination",
      "Ongoing compliance monitoring",
    ],
    how: [
      { title: "You choose the talent", desc: "You pick the person you want to hire, in any market we cover." },
      { title: "We become the legal employer", desc: "We put them on a locally compliant contract, correctly and quickly." },
      { title: "We run payroll, compliance & HR", desc: "You manage the work. We manage everything else." },
    ],
    gains: [
      "Hire without opening a local entity.",
      "Fully compliant from day one.",
      "One accountable partner, not a vendor patchwork.",
      "Payroll, tax, and HR handled for you.",
    ],
    whatsIncluded: [
      "Locally compliant employment contracts drafted for the hire's country.",
      "Monthly payroll processing and statutory tax filing.",
      "Benefits and leave administration.",
      "A dedicated point of contact for onboarding, HR queries, and offboarding.",
      "Ongoing compliance monitoring as local labor regulations change.",
    ],
    why: "Direct employment where we operate, and a trusted partner network everywhere else, so you get one accountable partner instead of a patchwork of vendors. We keep your hires compliant while you focus on the work.",
    bandImg: "/bands/eor.jpg",
    orbs: navyOrange(1.6),
  },
  {
    slug: "staff-offshoring",
    num: "03",
    name: "Staff Offshoring",
    experience: "5+ years",
    promise: "Your dedicated team, without the overhead.",
    summary:
      "A dedicated, full time team member who works only for you, inside your tools and hours, while we handle HR, payroll, and retention.",
    heroTag:
      "A full time professional who works exclusively for you, inside your tools and on your hours, as part of your team. We handle sourcing, employment, payroll, and retention, so you get the person and none of the admin.",
    intro:
      "Offshoring is not a freelancer and it is not a placement. It is a dedicated team member, embedded in your workflows for the long term, who happens to be employed and supported by us. You get continuity, focus, and a genuine extension of your team, at a fraction of the cost and effort of hiring locally. 5+ years of combined offshoring and staff augmentation experience sits behind every engagement.",
    regions: ["North America", "Europe", "GCC", "MENA", "APAC"],
    subServices: [
      "Software Developers",
      "DevOps & Cloud Engineers",
      "QA Engineers",
      "UI/UX & Product Designers",
      "Customer Support",
      "Operations",
    ],
    how: [
      { title: "Role & team-fit scoping", desc: "We learn your stack, the seniority you need, and your working hours." },
      { title: "Candidate selection", desc: "You interview and approve the dedicated team member." },
      { title: "Deployment", desc: "They are onboarded directly into your tools and workflows." },
      { title: "Ongoing management", desc: "We handle HR, payroll, and retention. You manage the daily work." },
    ],
    gains: [
      "A dedicated hire, fully managed.",
      "The continuity of a full-time team member.",
      "HR, payroll, and retention handled for you.",
      "A replacement guarantee window if the fit is not right.",
    ],
    whatsIncluded: [
      "A dedicated, full time resource working only for you, inside your tools and workflows.",
      "Candidate screening and technical vetting before deployment.",
      "HR management, local payroll, and retention handled on our side.",
      "A replacement guarantee window if the fit is not right.",
      "Ongoing performance check-ins between you, us, and the deployed team member.",
    ],
    why: "You get the continuity of a full time hire and the ease of a managed service. We keep the person supported, paid, and retained, so you keep the output without the employment burden.",
    bandImg: "/bands/offshoring.jpg",
    orbs: navyOrange(2.8),
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

// =========================================================
// Navigation model (drives the Services menu + footer).
// Derived from SERVICES so the list stays in one place.
// =========================================================
export type ServiceGroup = "Our Services";

export interface ServiceNav {
  slug: string;
  name: string;
  /** One-line descriptor shown under the link in the menu. */
  menuDesc: string;
  /** Shorter label for the footer column. */
  shortName: string;
  group: ServiceGroup;
  flagship?: boolean;
}

export const SERVICE_GROUPS: ServiceGroup[] = ["Our Services"];

export const SERVICE_NAV: ServiceNav[] = [
  { slug: "recruitment", name: "Recruitment", shortName: "Recruitment", menuDesc: "Source, screen, and place the right people", group: "Our Services", flagship: true },
  { slug: "employer-of-record", name: "Employer of Record", shortName: "Employer of Record", menuDesc: "Employ talent compliantly, anywhere", group: "Our Services" },
  { slug: "staff-offshoring", name: "Staff Offshoring", shortName: "Staff Offshoring", menuDesc: "A dedicated team, fully managed", group: "Our Services" },
];

export const FLAGSHIP_SERVICE = SERVICE_NAV.find((s) => s.flagship)!;

export const servicesByGroup = (group: ServiceGroup): ServiceNav[] =>
  SERVICE_NAV.filter((s) => s.group === group);

// =========================================================
// Regions we serve (coverage, not offices). Used by the
// homepage Regions section and the footer.
// =========================================================
export interface RegionRow {
  region: string;
  coverage: string;
  /** Background image (no people) in /public/regions. */
  img: string;
  /** Representative country flag codes (files in /public/flags). */
  flags: string[];
}

export const REGIONS: RegionRow[] = [
  { region: "GCC", coverage: "UAE, Saudi Arabia, Bahrain, Qatar, Kuwait, Oman", img: "/regions/gcc.jpg", flags: ["ae", "sa", "bh", "qa", "kw", "om"] },
  { region: "MENA", coverage: "Middle East and North Africa", img: "/regions/mena.jpg", flags: ["eg", "ma", "jo", "tn", "lb"] },
  { region: "Europe", coverage: "United Kingdom, Western and Eastern Europe", img: "/regions/europe.jpg", flags: ["gb", "de", "fr", "nl", "es", "pl"] },
  { region: "North America", coverage: "United States, Canada", img: "/regions/north-america.jpg", flags: ["us", "ca"] },
  { region: "APAC", coverage: "Asia-Pacific markets", img: "/regions/apac.jpg", flags: ["sg", "au", "in", "jp", "ph"] },
  { region: "LATAM", coverage: "Latin America", img: "/regions/latam.jpg", flags: ["br", "mx", "ar", "co", "cl"] },
];

// =========================================================
// Offices (real legal entities). Pakistan + USA only.
// =========================================================
export interface Office {
  country: string;
  entity: string;
  role: string;
  /** Country flag code (file in /public/flags). */
  flag: string;
}

export const OFFICES: Office[] = [
  { country: "Pakistan", entity: "ClearKanvas Global (Pakistan)", role: "Delivery hub: recruitment, offshoring, and training operations", flag: "pk" },
  { country: "United States", entity: "ClearKanvas Global LLC (Virginia)", role: "Commercial entity for client contracting and billing", flag: "us" },
];

// =========================================================
// Industry partners, grouped by category. Logos supplied later.
// =========================================================
export interface PartnerGroup {
  category: string;
  partners: string;
  enables: string;
}

export const PARTNER_GROUPS: PartnerGroup[] = [
  { category: "EOR & Payroll", partners: "PlayRoll, Deel", enables: "Compliant global payroll and employment reaching well over 180 countries." },
  { category: "Workspace & Infrastructure", partners: "CalmKaaj", enables: "Workspace and operational infrastructure for our teams." },
  { category: "Sourcing & ATS", partners: "Workable, Greenhouse, LinkedIn Recruiter", enables: "Sourcing and applicant tracking at scale." },
  { category: "Academic", partners: "NUST", enables: "University training and internship pipeline." },
  { category: "Compliance & Verification", partners: "Background check and identity verification providers", enables: "Vetted, compliant onboarding for regulated roles." },
];

// About sub-navigation.
export const ABOUT_NAV = [
  { href: "/about/story", label: "Our Story" },
  { href: "/#team", label: "Team & Offices" },
];
