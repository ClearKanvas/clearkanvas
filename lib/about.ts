// Brand statements for the About section. Kept broad and evergreen so they hold
// as the business grows. Rendered on /about (summary) and /about/purpose-values.

export interface Statement {
  /** Label, e.g. "Our purpose". */
  k: string;
  /** The statement itself. */
  v: string;
  /** Symbolic image in /public/values (no people). */
  img: string;
  /** Alt text describing the symbol. */
  alt: string;
}

export const PMV: Statement[] = [
  {
    k: "Our purpose",
    v: "To turn complexity into clarity, so businesses can grow without limits.",
    img: "/values/purpose.jpg",
    alt: "A compass resting on a map",
  },
  {
    k: "Our mission",
    v: "We give companies what they need to grow across borders: the right people, the right capabilities, and a partner who owns the outcome.",
    img: "/values/mission.jpg",
    alt: "A trail climbing toward a mountain summit",
  },
  {
    k: "Our vision",
    v: "A world where no company is held back by borders, distance, or complexity.",
    img: "/values/vision.jpg",
    alt: "A lighthouse shining under a star filled sky",
  },
];

export interface Value {
  t: string;
  d: string;
  /** Symbolic image in /public/values (no people). */
  img: string;
  /** Alt text describing the symbol. */
  alt: string;
}

export const VALUES: Value[] = [
  {
    t: "Clarity",
    d: "We turn the complex into the simple, in everything we build and every conversation we have.",
    img: "/values/clarity.jpg",
    alt: "A single water droplet on a still surface",
  },
  {
    t: "Excellence",
    d: "Good enough is never the standard. We deliver work we are proud to put our name to.",
    img: "/values/excellence.jpg",
    alt: "The polished gears of a mechanical watch movement",
  },
  {
    t: "Integrity",
    d: "We do what is right, especially when no one is watching.",
    img: "/values/integrity.jpg",
    alt: "A balance scale weighing a single chess piece",
  },
  {
    t: "Partnership",
    d: "We own what we promise. Our clients' success is the only measure that matters.",
    img: "/values/partnership.jpg",
    alt: "A heavy rope knotted tight around a rail",
  },
];

/**
 * Our Story, as supplied by the founder. First entry renders as the lead
 * paragraph. Edit here, not in the page component.
 */
export const STORY: string[] = [
  "Every business starts with a vision and a clear canvas to build it on. Too often, the work of running the business is what slows that vision down.",
  "ClearKanvas Global was founded to fix that. We are a business services partner led by operators who have run finance, talent, technology, and operations at scale, delivered from a base in Pakistan that changes the economics. Those four functions are where growing companies lose the most time and the most focus, so those four are where we go deep.",
  "We do not just advise. We build, and we run, and we own the outcome. That is how complexity becomes clarity.",
  "We also believe good work should create opportunity. By connecting our clients with Pakistan's exceptional talent, we deliver world-class results for businesses and lasting, meaningful work for the people who power them.",
  "That is what ClearKanvas Global is here to do: give companies stronger foundations, unlock what they could not staff before, and help them build a future defined by clarity, excellence, and growth.",
];

/** Intro copy for the dedicated Purpose & Values page. */
export const PMV_INTRO =
  "Four services, one standard. These are the statements we hold ourselves to, and the principles behind every engagement.";
