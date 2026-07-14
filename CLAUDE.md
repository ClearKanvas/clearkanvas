# ClearKanvas Website: Project Guide for Claude Code

## What this is
The marketing website for ClearKanvas Global, a talent partner that helps companies hire the
right people anywhere in the world. Three core services: Recruitment (flagship), Employer of
Record (EOR), and Staff Offshoring. We find talent, employ it compliantly, and can run the day
to day, so clients grow into any market without setting up in one. Clients are served across the
GCC, MENA, Europe, North America, APAC, and LATAM, delivered from Pakistan.

Tagline: "The right people, anywhere in the world."

Note: the site was repositioned from an earlier 8-service Global Business Services (GBS) model.
Ignore the old GBS framing; the three services above are the current business.

## Offices vs markets (honesty guardrail, do not blur)
- Offices (only two): Pakistan (delivery hub) and the United States (ClearKanvas Global LLC,
  incorporated in Virginia). These are the only locations we call offices.
- Markets served (never call these offices): GCC, MENA, Europe, North America, APAC, LATAM.
  Bahrain and the wider Gulf are markets we serve, not offices.
- State confidently: "25+ years in recruitment across our founding team", "5+ years delivering
  EOR and offshore staffing". Do not publish hard percentage claims (e.g. 99% match) unless the
  user confirms they are backable.

## Where the content lives
All final information architecture and copy is in the repo:
- `docs/ClearKanvas-3Service-Copy.md` (the source of truth: positioning, homepage, the 3 service
  pages, FAQ, nav/footer copy).
- Structured content layer: `lib/services.ts` (the 3 services, regions, offices, partners, nav),
  `lib/faq.ts` (homepage FAQ).

Use the copy from these files exactly as written. Do not paraphrase it, shorten it, or rewrite
it unless asked. (The older `docs/ClearKanvas-Website-Structure-and-Copy.md` and
`docs/ClearKanvas-Services.md` describe the retired 8-service model; do not use them.)

## Tech stack
Next.js (App Router) + React + TypeScript. Styling is plain CSS with custom-property design
tokens in `app/globals.css` (not Tailwind). Deployed on Vercel. One typeface across the whole
site: Hanken Grotesk, loaded via `next/font/google` as `--font-sans`. See `BRAND.md` for tokens.

## Standing rules (apply to everything)
1. Never use em dashes or en dashes anywhere, in copy, comments, or content. Use commas, colons,
   periods, or parentheses instead.
2. Reuse the existing design tokens, fonts, colors, and components. Do not introduce a new design
   system, color palette, or second font. If a needed token is missing, ask before choosing one.
3. No pricing figures anywhere (no rates, no "50% of first month"). Pricing is always "book a
   discovery call for a tailored quote".
4. Keep all page copy in the structured content layer (`lib/*`) so text can be edited without
   touching components.
5. Ask before deleting or renaming any existing page or component.
6. After each phase, run the dev server, confirm the build compiles, and commit to git with a
   clear message.
7. Respect `prefers-reduced-motion` in all animations: if set, show content with no transforms.
8. Avoid the word "Specialist" in labels and CTAs (user preference). Prefer "Book a Discovery
   Call", "Request Talent", "Talk to our team".

## Navigation
Services (dropdown: Recruitment, Employer of Record, Staff Offshoring), Regions, About (Our
Story, Team & Offices), Contact, and a "Request Talent" button (top right, accent color).
No Insights or Careers yet.

## Site structure
- Homepage sections: Hero + trust bar, three service cards, Regions we cover, Recruitment
  highlight, Partners, Team & Offices, FAQ, closing CTA.
- Service detail pages: one shared template (`components/ServiceDetail.tsx`) driven by
  `lib/services.ts`, generating `/services/recruitment`, `/services/employer-of-record`,
  `/services/staff-offshoring`.
- About: `/about` (Story blurb, Purpose/Mission/Vision, Values) and `/about/story`.
- Contact: `/contact`.

## Animation
Custom canvas orb-field aurora hero background, cursor spotlight, gradient shimmer accent, and
count-up stats (all in `components/Hero.tsx` / `lib/orbField.ts`), plus scroll reveals via
`components/ScrollReveal.tsx`. Keep durations 300 to 600ms, ease-out. Do not add animation
libraries without asking. Respect `prefers-reduced-motion` everywhere.

## Placeholders to leave for Taimur to fill
- Team member names, titles, bios, photos, and LinkedIn links.
- Partner logos (partners are named in the copy; logos supplied later).
- Office addresses, phone numbers, and emails on the Contact page and footer.
