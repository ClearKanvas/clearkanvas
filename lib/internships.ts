// Content and config for the ClearKanvas Internship Program page and form.
// Keep all copy here so it can be edited without touching components.
//
// The program is a learning-focused, unpaid internship of about three months.
// No pay figures anywhere (per project rules); "unpaid, learning-based" is stated
// plainly so expectations are clear before anyone applies.

// Master switch. Set to false to close applications: the page then shows a
// "currently closed" state instead of the form.
export const INTERNSHIPS_OPEN = true;

// Stamped on every application row and used as the Drive subfolder name, so each
// intake is grouped for easy review and archival. Change per intake if you want
// separate folders (e.g. "Internship Program 2026").
export const INTERNSHIP_COHORT = "Internship Program";

export const INTERNSHIP = {
  eyebrow: "Internship Program",
  headline: "Learn the work by doing the work.",
  subhead: "A learning-based internship with a global talent company.",
  intro:
    "Our internship is a hands-on, learning-focused program of about three months. It is unpaid, " +
    "and it is built around one thing: giving you real exposure to how a global talent company " +
    "operates, with mentorship from people who do this every day. You work on live problems, not " +
    "filler tasks, and you leave with skills, a reference, and a clearer sense of your own path.",

  // "What you'll gain" cards.
  gainsHeading: "What you will take away",
  gains: [
    { title: "Real, mentored work", desc: "Hands-on tasks alongside operators, not a coffee run. You see how the work actually gets done." },
    { title: "Global exposure", desc: "Insight into how we serve clients across regions, from Pakistan outward." },
    { title: "A skill you can name", desc: "Focused learning in your chosen area, so you finish with something concrete on your CV." },
    { title: "A genuine reference", desc: "Honest feedback throughout, and a reference from people who saw your work up close." },
  ],

  // Who it's for.
  whoHeading: "Who it is for",
  whoText:
    "Students in their final years and recent graduates who want to learn fast and are ready to " +
    "commit to the full program. You do not need experience. You do need curiosity, reliability, " +
    "and a real interest in the area you pick.",

  // How it works (kept short and honest).
  stepsHeading: "How it works",
  steps: [
    { title: "Apply", desc: "A short form, your CV, and a few questions about your studies and availability." },
    { title: "Review", desc: "We read every application and reply either way." },
    { title: "Conversation", desc: "A short call to understand your goals and see if it is a fit." },
    { title: "Start learning", desc: "If matched, you join the program and get to work with your mentor." },
  ],

  closingHeading: "Ready to learn with us?",
  closingSupporting:
    "Applications for the Internship Program are open. It takes a few minutes, and we reply to " +
    "everyone.",

  // Shown when INTERNSHIPS_OPEN is false.
  closedHeading: "Applications are currently closed.",
  closedSupporting:
    "The Internship Program is not accepting applications right now. If you would like to be " +
    "considered for the next intake, you can still send your CV through our main careers page.",
};

// Availability options for the internship form.
export const INTERNSHIP_AVAILABILITY = ["Full-time", "Part-time"];
export const INTERNSHIP_WORK_MODE = ["Remote", "Onsite", "Hybrid"];
