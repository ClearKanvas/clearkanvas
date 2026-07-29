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

// Two-level expertise taxonomy for the application form. The applicant first
// picks a `category` ("Role applying for"), which then reveals the matching
// `specializations` ("Area of expertise"). The ATS uses the category as the
// candidate's Drive subfolder; the specialization is stored as a sheet column.
//
// This is the single source of truth. The category list MUST stay identical to
// the CATEGORIES list in the Apps Script (ATS) so folder names line up. To edit
// any label, add, or remove an area, change it here only; the form updates
// automatically.
export interface ExpertiseArea {
  /** Top-level function. Becomes the "Role applying for" option and Drive subfolder. */
  category: string;
  /** Sub-specializations shown once this category is chosen. */
  specializations: string[];
}

export const APPLICATION_TAXONOMY: ExpertiseArea[] = [
  {
    category: "Human Resources & Recruitment",
    specializations: [
      "Talent Acquisition",
      "Technical Recruitment",
      "Executive Search",
      "Sourcing",
      "Recruitment Coordination / Ops",
      "RPO Delivery",
      "HR Operations",
      "HR Business Partnering",
      "Learning & Development",
      "Organizational Development",
      "Employee Relations",
      "Compensation & Benefits",
      "HRIS / People Analytics",
      "Talent Management",
      "Diversity, Equity & Inclusion",
      "HR Generalist",
    ],
  },
  {
    category: "Finance & Accounting",
    specializations: [
      "Bookkeeping / Financial Accounting",
      "Management Accounting / FP&A",
      "Accounts Payable",
      "Accounts Receivable",
      "Payroll",
      "Tax",
      "Audit & Assurance",
      "Treasury",
      "Financial Analysis",
      "Controller / Finance Leadership",
    ],
  },
  {
    category: "Software & Technology",
    specializations: [
      "Frontend Engineering",
      "Backend Engineering",
      "Full-Stack Engineering",
      "Mobile Engineering",
      "DevOps / Cloud / SRE",
      "QA / Test Automation",
      "Data Engineering",
      "Data Science / ML / AI",
      "Product Management",
      "UI / UX Design",
      "IT Support / SysAdmin",
      "Cybersecurity",
    ],
  },
  {
    category: "Sales & Business Development",
    specializations: [
      "SDR / Inside Sales",
      "Account Executive",
      "Business Development",
      "Account Management",
      "Sales Operations",
      "Partnerships",
      "Pre-Sales / Solutions",
    ],
  },
  {
    category: "Marketing & Creative",
    specializations: [
      "Digital / Performance Marketing",
      "Content & Copywriting",
      "SEO / SEM",
      "Social Media",
      "Brand & Communications",
      "Graphic Design",
      "Video / Motion",
      "Product Marketing",
      "Marketing Analytics",
    ],
  },
  {
    category: "Operations & Administration",
    specializations: [
      "Project / Program Management",
      "Business Operations",
      "Executive Assistant / Admin",
      "Office Management",
      "Supply Chain / Procurement",
      "Process Improvement",
    ],
  },
  {
    category: "Customer Support & Success",
    specializations: [
      "Customer Support",
      "Customer Success",
      "Technical Support",
      "Onboarding / Implementation",
      "Support Operations",
    ],
  },
  {
    category: "Other / General",
    specializations: [
      "General Application",
      "Internship / Fresh Graduate",
      "Not sure yet",
    ],
  },
];

// Category names only (drives the "Role applying for" select and the Drive
// subfolder). MUST match the CATEGORIES list in the Apps Script.
export const APPLICATION_CATEGORIES = APPLICATION_TAXONOMY.map((t) => t.category);
