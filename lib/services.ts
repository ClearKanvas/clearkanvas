import type { Orb } from "./orbField";

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  num: string;
  name: string;
  /** Italic one-line promise shown under the title. */
  promise: string;
  /** Short label used on grids and the "other services" cards. */
  summary: string;
  /** Opening paragraph on the detail page. */
  intro: string;
  /** "What we do" , the sub-services, shown as a clean grid. */
  subServices: string[];
  /** "How we do it" , 3 to 4 steps. */
  how: ServiceStep[];
  /** "What you gain" , 3 to 4 outcome statements. */
  gains: string[];
  /** "Why ClearKanvas Global" , short block. */
  why: string;
  /** Flagship model gets extra emphasis. */
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
    slug: "finance-accounting",
    num: "01",
    name: "Finance & Accounting",
    promise: "Build a finance function that is accurate, compliant, and ready to scale.",
    summary: "Run your finance back office end to end.",
    intro:
      "When your finances are accurate and up to date, every decision gets easier. We run the full finance back office for you, with the discipline of a dedicated team, so your books are always current, your obligations are always met, and you always know where you stand.",
    subServices: [
      "Bookkeeping & General Ledger",
      "Accounts Payable",
      "Accounts Receivable",
      "Bank & Credit Card Reconciliations",
      "Payroll Processing",
      "Month-End & Year-End Close",
      "Financial & Management Reporting",
      "Budgeting & Forecasting Support",
      "Tax Preparation Support",
      "Audit Support",
      "CFO Support",
      "Finance Process Automation",
    ],
    how: [
      { title: "Diagnose", desc: "We start with a short diagnostic of your current books, tools, and pain points." },
      { title: "Standardize", desc: "We standardize your chart of accounts and close calendar, and document every recurring process." },
      { title: "Run & report", desc: "We run your books on a fixed cadence with built-in review and sign-off, and keep you visible through a shared reporting rhythm." },
    ],
    gains: [
      "Clean books you can trust.",
      "A close that lands on time every month.",
      "Fewer surprises at tax and audit.",
      "Senior financial perspective without a full-time hire.",
    ],
    why: "Our finance practice is led by people who have sat in FP&A and controller seats, not just data-entry roles. You get judgment, not just throughput, which is why this is our anchor service.",
    orbs: navyOrange(0.4),
  },
  {
    slug: "fpa-reporting-bi",
    num: "02",
    name: "Reporting & Business Intelligence",
    promise: "Turn financial data into decisions, not just statements.",
    summary: "Turn data into decisions.",
    intro:
      "Numbers only matter when they change what you do next. We turn your financial and operational data into a single, trusted view of performance, so faster and better-informed decisions become the norm rather than a monthly scramble.",
    subServices: [
      "Management Reporting Packs",
      "KPI Dashboards & Reporting",
      "Executive & Board Reporting",
      "Budget vs Actual & Variance Analysis",
      "Cash Flow Forecasting",
      "Financial Modelling",
      "Power BI Dashboard Development",
      "Excel Automation",
      "Data Visualization",
      "Self-Service BI",
      "Data Cleaning & Transformation",
    ],
    how: [
      { title: "Agree the metrics", desc: "We agree the handful of metrics that actually move your business." },
      { title: "Connect & automate", desc: "We connect them to your source systems and automate the pull, so reporting stops being a monthly fire drill." },
      { title: "Design for decisions", desc: "We design dashboards a busy founder or board can read in sixty seconds, and pair every number with the so-what." },
    ],
    gains: [
      "A single, trusted view of performance.",
      "Faster, better-informed decisions.",
      "Board and investor reporting that looks like a company twice your size.",
      "Analysis with a point of view, not just charts.",
    ],
    why: "This is where our background shows. We do not just visualize data, we interpret it. You get analysis with a point of view, built by people who understand what the numbers mean for strategy.",
    orbs: navyOrange(1.0),
  },
  {
    slug: "global-capability-centers",
    num: "03",
    name: "Global Capability Centers & Offshore Teams",
    promise:
      "Build your own offshore team in Pakistan without the cost, risk, or complexity of setting up an entity.",
    summary: "Build your own offshore team.",
    intro:
      "Sometimes you do not want help with tasks, you want a team. Our flagship model lets you stand up a dedicated team in Pakistan that works as an extension of yours: to your standards, in your tools, on your hours. Most providers rent you seats. We build you a capability.",
    subServices: [
      "Dedicated Offshore Teams",
      "Shared Service Centers",
      "Virtual Captive Centers",
      "Build-Operate-Transfer (BOT)",
      "Managed Operations",
      "Back Office Operations",
    ],
    how: [
      { title: "Scope", desc: "We scope the roles and skills you need and hire to your standards." },
      { title: "Embed", desc: "We embed the team into your tools, processes, and working hours. You direct the work; we handle recruitment, infrastructure, compliance, HR, and day-to-day management." },
      { title: "Transfer (optional)", desc: "When you are ready, our Build-Operate-Transfer path lets you take full ownership of the team." },
    ],
    gains: [
      "A high-quality team at a meaningful cost advantage.",
      "Live in weeks rather than months.",
      "None of the legal, payroll, or office overhead of an entity abroad.",
      "Retention, quality, and culture managed in, not bolted on.",
    ],
    why: "Most providers rent you seats. We build you a capability. Our model is designed by HR and operations leaders who have run large teams across multiple countries, so retention, quality, and culture are managed in, not bolted on.",
    flagship: true,
    orbs: navyOrange(1.6),
  },
  {
    slug: "hr-talent",
    num: "04",
    name: "HR & Talent Solutions",
    promise: "Find, manage, and scale exceptional talent globally.",
    summary: "Find and manage talent globally.",
    intro:
      "Great companies are built by great people. We plug into your hiring and people processes at whatever depth you need, from filling a single role to running your entire talent engine, so quality stays high as volume grows. This is also home for HR compliance and startup HR setup.",
    subServices: [
      "Recruitment Process Outsourcing (RPO)",
      "Staff Augmentation",
      "Payroll Administration",
      "HR Administration & Shared Services",
      "Employee Onboarding Support",
      "Talent Acquisition Support",
      "Employer Branding Support",
      "Performance Management Support",
      "HR Compliance & Setup",
      "Startup HR Setup",
      "Fractional HR Leadership",
    ],
    how: [
      { title: "Plug in", desc: "We plug into your hiring and people processes at whatever depth you need, from a single role to your entire talent engine." },
      { title: "Standardize", desc: "We use structured sourcing, clear scorecards, and a consistent candidate experience so quality stays high as volume grows." },
      { title: "Scale", desc: "We scale the people backbone with you, without you adding internal headcount." },
    ],
    gains: [
      "Faster hiring and lower cost per hire.",
      "Smoother onboarding.",
      "An HR backbone that scales without internal headcount.",
      "Enterprise-grade HR thinking applied at your size.",
    ],
    why: "Our HR practice is led by a senior people leader with experience across teams of tens of thousands of employees in many countries. You get enterprise-grade HR thinking applied to a company your size.",
    orbs: navyOrange(2.2),
  },
  {
    slug: "customer-experience",
    num: "05",
    name: "Customer Experience & BPO",
    promise: "Reliable support and back-office execution that keeps your operation moving.",
    summary: "Support and back office that delivers.",
    intro:
      "Every customer interaction is a chance to build trust or lose it. We become an extension of your brand, responsive and consistent across every channel, and we treat support and back office as a brand experience, not a cost center.",
    subServices: [
      "Email, Live Chat & Voice Support",
      "Customer Success Support",
      "Order & Transaction Processing",
      "CRM Administration",
      "Ticket Management",
      "Data Entry",
      "Document Processing",
      "Virtual Assistants",
      "Administrative Support",
    ],
    how: [
      { title: "Learn", desc: "We learn your product, tone, and standards, and document them into playbooks." },
      { title: "Staff", desc: "We staff trained agents who work inside your systems." },
      { title: "Measure", desc: "We track quality and response times against agreed targets and report on them openly, so service stays consistent as you grow." },
    ],
    gains: [
      "Happier customers and faster response times.",
      "Consistent service quality as you scale.",
      "Your internal team freed from repetitive work.",
      "Support that represents your brand well.",
    ],
    why: "We treat support and back office as a brand experience, not a cost center. Our people are trained to represent you well, and our managed model means quality is our responsibility, not yours.",
    orbs: navyOrange(2.8),
  },
  {
    slug: "ai-automation",
    num: "06",
    name: "AI & Intelligent Automation",
    promise: "Automate repetitive work and put your data to work with AI.",
    summary: "Automate the repetitive work.",
    intro:
      "The best automation is grounded in real work. We map the manual, repetitive steps in your workflows, find where automation pays off fastest, and build practical solutions that fit your existing tools, starting small and proving the return before we expand.",
    subServices: [
      "AI Workflow Automation",
      "AI Chatbots",
      "Document Automation & Data Extraction",
      "AI Reporting & Financial Analysis",
      "AI Process Optimization",
      "Generative AI Consulting",
      "AI Integration Support",
    ],
    how: [
      { title: "Map", desc: "We map the manual, repetitive steps in your workflows and identify where automation pays off fastest." },
      { title: "Prove", desc: "We start small with a clear use case and prove the return." },
      { title: "Expand", desc: "Once it works, we expand automation across the processes that benefit most." },
    ],
    gains: [
      "Lower processing cost and fewer errors.",
      "Faster turnaround.",
      "A team that spends time on judgment, not data shuffling.",
      "Automation grounded in real processes, not hype.",
    ],
    why: "We apply AI to real business processes we already run, in finance, support, and operations, so our automation is grounded in what actually works, not hype.",
    orbs: navyOrange(3.4),
  },
  {
    slug: "technology-digital",
    num: "07",
    name: "Technology & Digital Services",
    promise: "Technology that supports growth and operational excellence.",
    summary: "Engineers and build teams.",
    intro:
      "You should not have to choose between speed and quality on technology. We provide vetted engineers and technical teams who integrate into your workflow, or deliver projects end to end against a clear scope, with regular checkpoints and full transparency.",
    subServices: [
      "IT Staff Augmentation",
      "Software Development",
      "Web & Mobile Development",
      "Cloud Support",
      "QA Testing",
      "DevOps Support",
      "Helpdesk & Managed IT",
    ],
    how: [
      { title: "Match or scope", desc: "We provide vetted engineers who integrate into your workflow, or scope a project to deliver end to end." },
      { title: "Deliver", desc: "We deliver against clear milestones with regular checkpoints and full transparency." },
      { title: "Flex", desc: "We flex capacity up or down as your roadmap shifts." },
    ],
    gains: [
      "Strong technical talent without local hiring cost and lead time.",
      "Capacity that flexes with your roadmap.",
      "Regular delivery checkpoints and transparency.",
      "Solutions that fit the whole business, not just IT.",
    ],
    why: "Technology sits alongside our finance, HR, and operations capabilities, so we can deliver solutions that work for the whole business, not just the IT corner of it.",
    orbs: navyOrange(4.0),
  },
  {
    slug: "advisory-transformation",
    num: "08",
    name: "Advisory & Transformation",
    promise: "Reshape how your business runs, then make the change stick.",
    summary: "Reshape how you run.",
    intro:
      "A strategy you cannot execute is just a slide deck. We assess how work flows through your organization today, design a leaner operating model, and, because we also run finance, HR, and operations, we can stand up the new model and operate it.",
    subServices: [
      "Process Improvement",
      "Shared Services Consulting",
      "Finance Transformation",
      "Operating Model Design",
      "Digital Transformation",
      "Outsourcing Advisory",
    ],
    how: [
      { title: "Assess", desc: "We assess how work flows through your organization today and find where time and money leak." },
      { title: "Design", desc: "We design a leaner operating model and a credible path from current state to target." },
      { title: "Run", desc: "Because we also run finance, HR, and operations, we can stand up the new model and operate it." },
    ],
    gains: [
      "A clearer operating model.",
      "Lower running cost.",
      "A credible path from current state to target.",
      "A partner who can execute as well as advise.",
    ],
    why: "Most consultants advise and leave. We advise, build, and run. That continuity is where the value actually lands.",
    orbs: navyOrange(4.6),
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

// =========================================================
// Navigation model (drives the Services mega menu + footer).
// Derived from SERVICES so the list stays in one place.
// =========================================================
export type ServiceGroup =
  | "Finance & Performance"
  | "People & Operations"
  | "Technology & Change";

export interface ServiceNav {
  slug: string;
  name: string;
  /** One-line descriptor shown under the link in the mega menu. */
  menuDesc: string;
  /** Shorter label for the footer column. */
  shortName: string;
  group: ServiceGroup;
  flagship?: boolean;
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  "Finance & Performance",
  "People & Operations",
  "Technology & Change",
];

export const SERVICE_NAV: ServiceNav[] = [
  { slug: "finance-accounting", name: "Finance & Accounting", shortName: "Finance & Accounting", menuDesc: "Run your finance back office end to end", group: "Finance & Performance" },
  { slug: "fpa-reporting-bi", name: "Reporting & Business Intelligence", shortName: "Reporting & BI", menuDesc: "Turn data into decisions", group: "Finance & Performance" },
  { slug: "global-capability-centers", name: "Global Capability Centers", shortName: "Global Capability Centers", menuDesc: "Build your own offshore team", group: "People & Operations", flagship: true },
  { slug: "hr-talent", name: "HR & Talent Solutions", shortName: "HR & Talent", menuDesc: "Find and manage talent globally", group: "People & Operations" },
  { slug: "customer-experience", name: "Customer Experience & BPO", shortName: "Customer Experience & BPO", menuDesc: "Support and back office that delivers", group: "People & Operations" },
  { slug: "ai-automation", name: "AI & Intelligent Automation", shortName: "AI & Automation", menuDesc: "Automate the repetitive work", group: "Technology & Change" },
  { slug: "technology-digital", name: "Technology & Digital Services", shortName: "Technology", menuDesc: "Engineers and build teams", group: "Technology & Change" },
  { slug: "advisory-transformation", name: "Advisory & Transformation", shortName: "Advisory", menuDesc: "Reshape how you run", group: "Technology & Change" },
];

export const FLAGSHIP_SERVICE = SERVICE_NAV.find((s) => s.flagship)!;

export const servicesByGroup = (group: ServiceGroup): ServiceNav[] =>
  SERVICE_NAV.filter((s) => s.group === group);

// Industries. `slug` anchors are shared by the nav dropdown and the landing page.
export const industrySlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export interface Industry {
  name: string;
  desc: string;
}

export const INDUSTRY_DETAILS: Industry[] = [
  {
    name: "Technology & SaaS",
    desc: "Fast-growing software companies that need finance, support, and engineering capacity without slowing down. We help you scale operations as fast as you scale the product.",
  },
  {
    name: "Professional Services",
    desc: "Agencies, consultancies, law firms, and accounting practices that run on billable time. We take the back office (bookkeeping, payroll, admin, reporting) off your team so they can focus on clients.",
  },
  {
    name: "Financial Services & Fintech",
    desc: "Firms that live and die by accuracy and compliance. We bring disciplined bookkeeping, reconciliations, reporting, and process control to a sector where mistakes are expensive.",
  },
  {
    name: "E-commerce & Retail",
    desc: "High-volume, always-on businesses. We handle order processing, customer support, finance operations, and data work so your team can focus on growth and margin.",
  },
  {
    name: "Healthcare & Life Sciences",
    desc: "A sector with heavy administrative and back-office demand. We support finance, HR, and operations with the care and confidentiality the field requires.",
  },
  {
    name: "Real Estate & Property",
    desc: "Owners, managers, and developers with complex bookkeeping and reporting needs. We keep the numbers clean across entities, properties, and portfolios.",
  },
  {
    name: "Manufacturing & Logistics",
    desc: "Operations-heavy businesses where back-office efficiency drives the bottom line. We support finance, reporting, and process work that keeps the engine running.",
  },
];

// Names only, for the nav dropdown + footer.
export const INDUSTRIES: string[] = INDUSTRY_DETAILS.map((i) => i.name);

// How We Work + About sub-navigation (pages built in Phases 5 and 6).
export const HOW_WE_WORK_NAV = [
  { href: "/how-we-work/engagement-models", label: "Engagement Models" },
  { href: "/how-we-work/process", label: "Our Process" },
  { href: "/how-we-work/why-clearkanvas", label: "Why ClearKanvas Global" },
  { href: "/how-we-work/why-pakistan", label: "Why Pakistan" },
];

export const ABOUT_NAV = [
  { href: "/about/story", label: "Our Story" },
  { href: "/about/mission-vision-values", label: "Mission, Vision & Values" },
  { href: "/about/leadership", label: "Leadership" },
  { href: "/about/global-presence", label: "Global Presence" },
];
