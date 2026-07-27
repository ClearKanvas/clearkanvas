// Media Production, an emerging ClearKanvas Group line. Copy is taken verbatim
// from the founder's "CK Media Production , Website Copy" doc. Tense is kept as
// "we are building" / "launching" until the line is operating with a portfolio,
// then it switches to present tense and a portfolio section is added. See the
// note in that doc. Kept out of SERVICES/SERVICE_NAV on purpose so the homepage
// "four ways" framing and the four core service pages are unaffected.

export interface Capability {
  num: string;
  title: string;
}

export const MEDIA_PRODUCTION = {
  slug: "media-production",
  eyebrow: "ClearKanvas Group",
  /** Honest signal while the line is still being built. */
  tag: "Launching 2026",
  headline: "Media Production",
  subhead:
    "Creative and visual production, built on the same standard of delivery as everything we do.",
  intro:
    "Our name has always pointed to a canvas. As ClearKanvas grows into a group of specialist businesses, we are building a dedicated Media Production line to bring creative and visual production in-house, delivered through its own team and its own standards. It begins with our own brand and our clients' content, and expands from there into a full creative-services offering.",
  buildingHeading: "The capabilities we are building in-house",
  capabilities: [
    { num: "01", title: "Video production, from concept to final cut" },
    { num: "02", title: "Branded and marketing content for digital and social channels" },
    { num: "03", title: "Motion graphics and animation" },
    { num: "04", title: "Post-production and editing" },
    { num: "05", title: "Creative direction and visual storytelling" },
  ] as Capability[],
  whoHeading: "Reliability and craft, in one place",
  whoText:
    "Businesses that want the reliability of a delivery partner and the craft of a creative studio in one place, without managing multiple vendors.",
  closingHeading: "Launching as part of ClearKanvas Group.",
  closingSupporting: "To talk about creative production for your brand, get in touch.",
  cta: "Get in touch",
  /** Five symbolic, people-free images for the cinematic hero slideshow. */
  heroSlides: [
    "/slides/mp-camera.jpg",
    "/slides/mp-edit.jpg",
    "/slides/mp-motion.jpg",
    "/slides/mp-lens.jpg",
    "/slides/mp-clap.jpg",
  ],
};
