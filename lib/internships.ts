// Content, options, and config for the ClearKanvas Internship Program.
// This mirrors the founder's Google Form (Summer Internship Program 2026) so the
// website "Apply for Internships" form and the Google Form stay identical.
// Keep all copy and option lists here so they can be edited without touching
// components. The general careers form is separate and must not be changed
// (see the internship-form-separate project note).

// Master switch. false -> the page shows a "closed" state instead of the form.
export const INTERNSHIPS_OPEN = true;

// Stamped on every row and used as the Drive subfolder name, so each intake is
// grouped for review and archival. Change per intake.
export const INTERNSHIP_COHORT = "Summer Internship Program 2026";

// The 53 positions (First choice, and Second choice uses the same list).
// MUST match the Google Form's dropdown exactly.
export const INTERNSHIP_POSITIONS = [
  "Business Development Trainee",
  "Business Analyst",
  "Research & Development (R&D)",
  "Recruitment/Talent Acquisition",
  "Global Recruitment/Talent Acquisition",
  "HR",
  "Administration",
  "Finance",
  "AI & Data Science",
  "AI Automation",
  "Machine Learning Engineer",
  "Data Analyst",
  "Software Engineer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "MEAN Stack Developer",
  "React.js Developer",
  "Angular Developer",
  "Flutter Developer",
  "Java / Spring Boot Developer",
  "Python Developer (Django / Flask)",
  "PHP / Laravel Developer",
  ".NET Core MVC Developer",
  "Ruby on Rails Developer",
  "WordPress Developer",
  "Drupal Developer",
  "Shopify Developer",
  "Magento 2 Developer",
  "Android Developer (Java/Kotlin)",
  "iOS Developer",
  "DevOps Engineer",
  "Cyber Security Analyst",
  "Network & System Engineer",
  "QA Engineer (Manual)",
  "QA Engineer (Automation)",
  "Graphic Designing",
  "Video Editor",
  "UI/UX Designer",
  "Digital Marketing Executive",
  "SEO Specialist",
  "Social Media Marketing Executive",
  "Technical Content Writer",
  "Copywriter",
  "Content Strategist",
  "Business Development Executive",
  "Lead Generation Specialist",
  "Customer Success Executive",
  "Sales Executive",
  "Project Manager",
  "Product Owner",
  "Presales Consultant",
  "Legal Associate",
  "Employee Engagement Executive",
];

export const CURRENT_STATUS_OPTIONS = [
  "Final-Year Student",
  "Fresh Graduate",
  "Recent Graduate (within 1 year)",
  "Other",
];

export const UNPAID_OPTIONS = [
  "Yes, I understand and am okay with this",
  "No, I am specifically looking for a paid position",
];

export const EST_OPTIONS = [
  "Yes, fully available",
  "Partially, some overlap possible",
  "No",
];

export const COMMIT_OPTIONS = ["Yes", "No", "Not sure yet"];

export const HEARD_OPTIONS = [
  "LinkedIn",
  "University",
  "Referral",
  "Social Media",
  "ClearKanvas Website",
  "Other",
];

// Consent checkbox text. TODO: confirm the exact wording from the Google Form
// (the screenshot was truncated); edit this line to match.
export const CONSENT_TEXT =
  "I confirm the information above is accurate and I consent to ClearKanvas Global storing and processing my data for recruitment purposes.";

export const INTERNSHIP = {
  eyebrow: "Internship Program",
  headline: "Summer Internship Program 2026",
  subhead: "Lahore and Islamabad. Remote (EST time zone). 3 months.",
  intro:
    "We are excited to welcome passionate students and fresh graduates to join the ClearKanvas " +
    "Global Summer Internship Program 2026: hands-on experience, mentorship from industry " +
    "professionals, and exposure to international projects. This is a learning-focused, unpaid " +
    "internship of about three months.",

  gainsHeading: "What you will take away",
  gains: [
    { title: "Real, mentored work", desc: "Hands-on tasks alongside professionals, with exposure to international projects." },
    { title: "Global exposure", desc: "See how we serve clients across regions, working to an EST schedule." },
    { title: "A skill you can name", desc: "Focused learning in your chosen area, so you finish with something concrete on your CV." },
    { title: "A genuine reference", desc: "Honest feedback throughout, and a reference from people who saw your work up close." },
  ],

  whoHeading: "Who it is for",
  whoText:
    "Final-year students and recent graduates who want to learn fast and can commit to the full " +
    "three months on an EST schedule. You do not need experience, just curiosity, reliability, " +
    "and a real interest in the area you pick.",

  stepsHeading: "How it works",
  steps: [
    { title: "Apply", desc: "Complete the short application with your details, CV, and position choices." },
    { title: "Review", desc: "We read every application and reply either way." },
    { title: "Conversation", desc: "A short call to understand your goals and see if it is a fit." },
    { title: "Start learning", desc: "If matched, you join the program and get to work with your mentor." },
  ],

  closingHeading: "Ready to learn with us?",
  closingSupporting: "Applications for the Summer Internship Program 2026 are open. It takes a few minutes.",

  closedHeading: "Applications are currently closed.",
  closedSupporting:
    "The Internship Program is not accepting applications right now. To be considered for the next " +
    "intake, you can still send your CV through our main careers page.",
};
