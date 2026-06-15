# ClearKanvas Website: Project Guide for Claude Code

## What this is
The marketing website for ClearKanvas, a Global Business Services (GBS) partner offering finance, talent, technology, and operations services to clients across the US, Canada, UK, Europe, and the Gulf, delivered from Pakistan.

Tagline: "Where complexity becomes clarity."

## Where the content lives
All final information architecture and copy is in the repo:
- `docs/ClearKanvas-Website-Structure-and-Copy.md` (site map, navigation, page-by-page copy)
- `docs/ClearKanvas-Services.md` (full copy for the 8 service detail pages)

Use the copy from these files exactly as written. Do not paraphrase it, shorten it, or rewrite it unless asked.

## Tech stack
Next.js, Tailwind CSS, deployed on Vercel. Confirm the routing convention (App Router or Pages Router) and the existing Tailwind config by reading the repo before building.

## Standing rules (apply to everything)
1. Never use em dashes or en dashes anywhere, in copy, comments, or content. Use commas, colons, periods, or parentheses instead.
2. Reuse the existing design tokens, fonts, colors, and components. Do not introduce a new design system or color palette. If brand colors or fonts are not yet in the Tailwind config, ask before choosing any.
3. Keep all page copy in a structured content layer (a `/content` or `/data` file per page) so text can be edited without touching components.
4. Ask before deleting or renaming any existing page or component.
5. After each phase, run the dev server, confirm the build compiles, and commit to git with a clear message.
6. Respect `prefers-reduced-motion` in all animations: if set, show content with no transforms.

## Navigation (5 items)
Services (mega menu), Industries, How We Work, About, Contact (button, top right, accent color). No Insights or Careers yet.

## Build phases (build one at a time, stop and show me after each)
1. Global layout: header with 5-item nav, Services mega menu, footer
2. Homepage, section by section (8 sections in the order in the doc)
3. The 8 service detail pages (one shared template, then content per service)
4. Industries landing page with 7 sector cards
5. How We Work (Engagement Models, Process, Why ClearKanvas, Why Pakistan)
6. About (Our Story, Mission/Vision/Values, Leadership placeholder, Global Presence)
7. Contact page and form

## Animation (add as a layer after the structural build)
Use Framer Motion for entrance and scroll reveals, Tailwind transitions for hover micro-interactions, and Lottie for motion graphics. Create reusable FadeIn and Stagger components and apply them site-wide. Keep durations 300 to 600ms, ease-out. Animated gradient hero for launch; no video yet. Do not add libraries beyond framer-motion (and lottie-react when needed) without asking.

## Placeholders to leave for Taimur to fill
- Leadership names, titles, bios, and photos
- Office addresses, phone numbers, and emails on the Contact page and footer
