import type { Orb } from "./orbField";

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  num: string;
  name: string;
  /** Short one-liner for the nav menu and SEO description. */
  summary: string;
  flagship?: boolean;
  /** Hero: headline, subline, CTA label. */
  hero: { headline: string; subline: string; cta: string };
  /** "The Problem" section. */
  problem: {
    heading: string;
    intro?: string;
    cards: ServiceStep[];
    /** Dark stat callout panel (e.g. recruitment). */
    stat?: { big: string; small: string };
    /** Single emphasized hook line (e.g. EOR). */
    hook?: string;
  };
  /** "What's Included" section. */
  included: { heading: string; items: ServiceStep[] };
  /** "How It Works" section (rendered as the animated flow). */
  process: { heading: string; steps: ServiceStep[] };
  /** "Why ClearKanvas" section (optional, recruitment only in the current copy). */
  why?: { heading: string; items: ServiceStep[] };
  /** Closing CTA. */
  closing: { heading: string; supporting?: string; cta: string };
  /** Symbolic background image (no people) for the closing CTA band. */
  bandImg: string;
  /** Warm, people-free hero image shown beside the headline (landing section). */
  heroImg: string;
  /** Three lively/symbolic images for the "What's Included" background slideshow. */
  slides: string[];
  /**
   * Five symbolic, people-free images for the hero background slideshow. Each set
   * is chosen for that service: search and reach for recruitment, law and entity
   * for EOR, infrastructure and Pakistan for offshoring, retreat and growth for
   * training.
   */
  heroSlides: string[];
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
    summary:
      "End-to-end recruitment for companies building teams anywhere in the world. We find, vet, and deliver people you can trust.",
    flagship: true,
    hero: {
      headline: "Hire proven talent. Wherever you need it.",
      subline:
        "End-to-end recruitment for companies building teams anywhere in the world. We find, vet, and deliver people you can trust with your business.",
      cta: "Book a Discovery Call",
    },
    problem: {
      heading: "The Hiring Problem",
      intro: "Six things go wrong when companies hire across borders. We built our practice to fix all of them.",
      cards: [
        { title: "Hiring takes too long", desc: "Open roles sit empty for weeks, stalling projects and burning out teams." },
        { title: "Wrong hires are expensive", desc: "A bad match means restarting the search and absorbing the sunk cost." },
        { title: "Talent shortage", desc: "Specialized roles have far more demand than qualified supply." },
        { title: "Multiple vendors to manage", desc: "Juggling agencies fragments accountability and slows decisions." },
        { title: "High agency fees", desc: "Premium rates, no guaranteed results." },
        { title: "Poor communication", desc: "Hiring managers left guessing on pipeline status." },
      ],
      stat: {
        big: "30% of annual salary",
        small: "The estimated cost of a single wrong hire in lost productivity, re-hiring, and team disruption.",
      },
    },
    included: {
      heading: "Everything between the job description and day one.",
      items: [
        { title: "Role scoping and salary benchmarking", desc: "We define the role and show you what the market pays." },
        { title: "Sourcing and multi-stage screening", desc: "Technical, communication, and culture checks before you see a CV." },
        { title: "Curated shortlists, not CV dumps", desc: "Three to five candidates with our honest recommendation." },
        { title: "Offer management", desc: "We handle both sides so offers land and start dates hold." },
        { title: "90-day replacement guarantee", desc: "If a hire doesn't work out, we replace them. No debate, no fee." },
      ],
    },
    process: {
      heading: "From brief to hire in four steps.",
      steps: [
        { title: "Discover", desc: "A 30-minute call to understand the role and what great looks like." },
        { title: "Source and screen", desc: "We search, assess, and pressure-test against your bar." },
        { title: "Shortlist", desc: "Interview only the candidates worth your time." },
        { title: "Hire", desc: "We manage the offer, the paperwork, and the first 90 days." },
      ],
    },
    why: {
      heading: "Why companies choose us.",
      items: [
        { title: "Operators, not resellers", desc: "Led by HR leaders with 15+ years across 15+ countries." },
        { title: "Local depth, global standards", desc: "We know the markets you hire in, and deliver to board-level standards." },
        { title: "Compliance built in", desc: "Entity, payroll, and contract risks flagged before they become penalties." },
        { title: "Fixed pricing", desc: "One fee, agreed upfront. No surprises." },
      ],
    },
    closing: {
      heading: "Tell us the role. We'll show you the market.",
      supporting: "Your next hire is already out there. We know where to look.",
      cta: "Book a Discovery Call",
    },
    bandImg: "/bands/recruitment.jpg",
    heroImg: "/heroes/recruitment.jpg",
    slides: ["/regions/north-america.jpg", "/regions/gcc.jpg", "/regions/apac.jpg"],
    heroSlides: [
      "/bands/recruitment.jpg",
      "/slides/rec-search.jpg",
      "/slides/rec-board.jpg",
      "/slides/rec-city.jpg",
      "/values/purpose.jpg",
    ],
    orbs: navyOrange(0.4),
  },
  {
    slug: "employer-of-record",
    num: "02",
    name: "Employer of Record",
    summary:
      "Employ your people in Pakistan legally, without setting up an entity. Payroll, contracts, benefits, and compliance handled.",
    hero: {
      headline: "Hire in Pakistan. Without an entity.",
      subline:
        "We employ your people in Pakistan legally on your behalf, so global companies can build a team here without setting one up. Payroll, contracts, benefits, and compliance handled. You manage the work, we manage the risk.",
      cta: "Get a Compliance Check",
    },
    problem: {
      heading: "Paying contractors abroad isn't a strategy. It's exposure.",
      cards: [
        { title: "Misclassification risk", desc: "Long-term contractors are employees in the eyes of regulators." },
        { title: "Permanent establishment risk", desc: "Direct hiring can trigger local tax obligations you didn't plan for." },
        { title: "No local contracts", desc: "Unenforceable agreements leave your IP and confidentiality unprotected." },
        { title: "Payroll complexity", desc: "Local tax, social security, and benefits rules change and carry penalties." },
      ],
      hook: "Most companies discover their compliance gap only when it becomes a penalty.",
    },
    included: {
      heading: "Full legal employment, minus the entity.",
      items: [
        { title: "Compliant employment contracts", desc: "Locally enforceable, with IP and confidentiality protection." },
        { title: "Payroll and tax filing", desc: "Salaries, withholdings, and statutory contributions on time, every month." },
        { title: "Benefits administration", desc: "Health coverage, leave, and statutory benefits managed end to end." },
        { title: "HR support", desc: "Onboarding, documentation, and offboarding handled locally." },
        { title: "Ongoing compliance", desc: "We track regulatory changes so you never fall behind." },
      ],
    },
    process: {
      heading: "Compliant in days, not months.",
      steps: [
        { title: "Assess", desc: "We review your current setup and flag every risk." },
        { title: "Contract", desc: "Your people move onto compliant local employment agreements." },
        { title: "Run", desc: "We handle payroll, benefits, and filings each month." },
        { title: "Report", desc: "One invoice, one point of contact, full visibility." },
      ],
    },
    closing: {
      heading: "Already paying people in Pakistan? Let's make it safe.",
      cta: "Get a Compliance Check",
    },
    bandImg: "/bands/eor.jpg",
    heroImg: "/heroes/eor.jpg",
    slides: ["/regions/gcc.jpg", "/regions/europe.jpg", "/regions/apac.jpg"],
    heroSlides: [
      "/slides/eor-columns.jpg",
      "/slides/eor-contract.jpg",
      "/bands/eor.jpg",
      "/slides/eor-tower.jpg",
      "/slides/eor-facade.jpg",
    ],
    orbs: navyOrange(1.6),
  },
  {
    slug: "staff-offshoring",
    num: "03",
    name: "Talent Offshoring",
    summary:
      "Build a dedicated offshore team in Pakistan that works as an extension of yours. We recruit, employ, house, and support them.",
    hero: {
      headline: "Your team. Our ground game.",
      subline:
        "Build a dedicated offshore team in Pakistan that works as an extension of yours. We recruit, employ, house, and support them. You direct the work.",
      cta: "Plan Your Team",
    },
    problem: {
      heading: "Scaling headcount shouldn't mean scaling overhead.",
      cards: [
        { title: "Costs climbing", desc: "Onshore salaries make growth math impossible for many functions." },
        { title: "Freelancers don't scale", desc: "No loyalty, no continuity, no institutional knowledge." },
        { title: "BPOs dilute quality", desc: "Shared teams and high churn mean your work is nobody's priority." },
        { title: "Building alone is slow", desc: "Entity setup, office, hiring, and compliance take a year you don't have." },
      ],
    },
    included: {
      heading: "A dedicated team, fully operational.",
      items: [
        { title: "Dedicated staff", desc: "Your people, working only for you, on your tools and hours." },
        { title: "Full employment infrastructure", desc: "Contracts, payroll, benefits, and HR through our EOR backbone." },
        { title: "Workspace and equipment", desc: "Office, hardware, and IT support if you want them in one place." },
        { title: "Performance management", desc: "On-ground oversight, engagement, and retention support." },
        { title: "Scale on demand", desc: "Add or restructure roles as your needs change." },
      ],
    },
    process: {
      heading: "From plan to productive team.",
      steps: [
        { title: "Design", desc: "We map the roles, costs, and structure with you." },
        { title: "Build", desc: "We recruit and onboard your dedicated team." },
        { title: "Run", desc: "We manage employment and operations. You manage the work." },
        { title: "Grow", desc: "Scale up as the model proves itself." },
      ],
    },
    closing: {
      heading: "Same team quality. A fraction of the cost.",
      supporting: "Pakistan offers a deep pool of skilled, university-educated professionals, so you get senior-level work at a fraction of onshore cost.",
      cta: "Plan Your Team",
    },
    bandImg: "/bands/offshoring.jpg",
    heroImg: "/heroes/offshoring.jpg",
    slides: ["/regions/apac.jpg", "/regions/latam.jpg", "/regions/north-america.jpg"],
    heroSlides: [
      "/slides/off-pakistan.jpg",
      "/slides/off-data.jpg",
      "/bands/offshoring.jpg",
      "/slides/off-clocks.jpg",
      "/slides/off-fiber.jpg",
    ],
    orbs: navyOrange(2.8),
  },
  {
    slug: "training-leadership-retreats",
    num: "04",
    name: "Training & Leadership Retreats",
    summary:
      "Practical training programs and immersive leadership retreats, designed and delivered by seasoned operators.",
    hero: {
      headline: "Develop the leaders your growth depends on.",
      subline:
        "Practical training programs and immersive leadership retreats, designed and delivered by operators who have built and led teams across 15+ countries.",
      cta: "Design Your Program",
    },
    problem: {
      heading: "Promoted into leadership. Never trained for it.",
      cards: [
        { title: "Managers by accident", desc: "Great performers promoted without the skills to lead people." },
        { title: "Generic training fails", desc: "Off-the-shelf workshops don't stick and don't fit your context." },
        { title: "Culture drifts", desc: "Growing and distributed teams lose alignment without deliberate work." },
        { title: "Retention suffers", desc: "People leave managers, not companies." },
      ],
    },
    included: {
      heading: "Built for your people, not off a shelf.",
      items: [
        { title: "Leadership development programs", desc: "Multi-week cohorts on managing people, performance, and change." },
        { title: "Manager essentials training", desc: "Feedback, difficult conversations, delegation, and coaching." },
        { title: "Leadership retreats", desc: "Offsite experiences that align leadership teams around strategy and culture." },
        { title: "Team workshops", desc: "Focused sessions on communication, collaboration, and ways of working." },
        { title: "Follow-through", desc: "Post-program coaching and measurement so learning becomes behavior." },
      ],
    },
    process: {
      heading: "Diagnose, design, deliver, embed.",
      steps: [
        { title: "Diagnose", desc: "We assess your team's real gaps, not assumed ones." },
        { title: "Design", desc: "A program built around your business, roles, and culture." },
        { title: "Deliver", desc: "Facilitated by senior HR practitioners, not career trainers." },
        { title: "Embed", desc: "Coaching and check-ins that make it stick." },
      ],
    },
    closing: {
      heading: "Your best people are ready to lead. Get them ready.",
      cta: "Design Your Program",
    },
    bandImg: "/bands/training.jpg",
    heroImg: "/heroes/training.jpg",
    slides: ["/heroes/training.jpg", "/about-clarity.jpg", "/bands/training.jpg"],
    heroSlides: [
      "/slides/tr-peaks.jpg",
      "/bands/training.jpg",
      "/slides/tr-lodge.jpg",
      "/slides/tr-books.jpg",
      "/slides/tr-sunrise.jpg",
    ],
    orbs: navyOrange(4.0),
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
  { slug: "recruitment", name: "Recruitment", shortName: "Recruitment", menuDesc: "Find, vet, and deliver proven talent", group: "Our Services", flagship: true },
  { slug: "employer-of-record", name: "Employer of Record", shortName: "Employer of Record", menuDesc: "Employ talent in Pakistan, no entity needed", group: "Our Services" },
  { slug: "staff-offshoring", name: "Talent Offshoring", shortName: "Talent Offshoring", menuDesc: "A dedicated Pakistan team, fully run", group: "Our Services" },
  { slug: "training-leadership-retreats", name: "Training & Leadership Retreats", shortName: "Training & Retreats", menuDesc: "Develop the leaders your growth needs", group: "Our Services" },
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
  { region: "APAC", coverage: "Asia-Pacific markets", img: "/regions/apac.jpg", flags: ["sg", "au", "jp", "ph"] },
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

// Only confirmed partners are shown for now; more will be added later.
export const PARTNER_GROUPS: PartnerGroup[] = [
  { category: "Workspace & Infrastructure", partners: "CalmKaaj", enables: "Workspace and operational infrastructure for our teams." },
];

// About sub-navigation.
export const ABOUT_NAV = [
  { href: "/about/story", label: "Our Story" },
  { href: "/about/purpose-values", label: "Purpose & Values" },
];
