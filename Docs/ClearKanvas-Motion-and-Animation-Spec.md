# ClearKanvas Website: Motion & Animation Spec

This defines the motion for every page so the site feels premium and consistent. Hand it to Claude Code when building the animation layer. The copy and structure live in `ClearKanvas-Website-Structure-and-Copy.md`; this file governs how it moves.

## The principle: a system, not video everywhere

Premium feel comes from restraint and consistency, not from a video on every screen. Real background video is heavy, slows the site, hurts SEO, and looks busy when overused. So the plan is:

1. A **motion system** applied to every page (reveals, stagger, hover, transitions). This does 80 percent of the premium work and costs almost nothing in performance.
2. **One feature moment per page**, a "video-like" motion graphic that is usually a Lottie animation or animated gradient, not a video file.
3. **Real video** used in at most one or two places, and only if a clip is genuinely worth showing.

Fast, subtle, purposeful. Nothing bounces, spins, or makes the visitor wait.

## Asset types and when to use each

- **CSS animated gradient / mesh:** for hero and section backgrounds. Zero file weight, always smooth. The default for "ambient motion."
- **Lottie (vector motion graphic):** looks like a polished explainer clip, loops, tiny file size, recolorable to your brand. This is your main "video-like" tool. Source from LottieFiles and recolor, or commission custom.
- **Animated SVG (line-draw):** for diagrams like the process steps and the world map. Crisp at any size, light.
- **Looping muted video (MP4 + WebM):** use rarely (home hero at most). Always compressed, lazy-loaded, with a still poster image. Never autoplay with sound.

## The motion system (every page inherits this)

- **Entrance reveals:** as each section enters the viewport, content fades and rises about 16 to 24 pixels.
- **Stagger:** grouped items (service cards, sector cards, value statements, model cards) reveal one after another, roughly 60 to 100ms apart.
- **Page hero pattern:** every page hero has a subtle animated gradient background and a heading that reveals on load. This single repeated pattern is what makes all pages feel premium and related.
- **Hover micro-interactions:** cards lift with a soft shadow and an accent line; buttons shift color and lift; links underline smoothly; icons nudge or draw.
- **Mega menu:** opens with a quick fade and height transition; its columns stagger in.
- **Page transitions:** a fast cross-fade between routes so navigation feels like an app, not reloads.
- **Timing:** 300 to 600ms, ease-out, everywhere. Consistency is the point.
- **Reduced motion:** if the visitor has `prefers-reduced-motion` set, disable all transforms and just show content. Required for accessibility and quality.

## Page-by-page plan

### Home
The richest page. Feature moment is the hero.
- **Hero:** animated gradient or mesh background (optionally a compressed ambient loop later), headline reveals word by word, CTAs fade in, a subtle scroll cue at the bottom. This is the site's signature moment.
- **Positioning strip:** fades in on scroll; if you add client logos, a slow horizontal marquee.
- **What we do (8 cards):** staggered reveal; hover lift, accent line, and a small icon motion.
- **Flagship GCC spotlight:** a Lottie or animated diagram showing the "build your team" or Build-Operate-Transfer flow; the text slides in beside it.
- **Why ClearKanvas (4 pillars):** staggered reveal with icons that draw in; count-up animation on any numbers.
- **How we work teaser:** the four-step line draws itself as it enters view.
- **Markets:** animated world map with location dots that pulse in sequence.
- **Final CTA band:** slow shifting gradient background; button lifts on hover.

### Services (landing)
- **Hero:** standard animated-gradient hero with heading reveal.
- **The 8 service cards or rows:** stagger in on scroll; hover lift and accent.

### Service detail pages (template for all 8)
Same template so breadth reads as intentional, with a per-service accent so each feels distinct.
- **Hero:** gradient background plus a small service-specific Lottie or animated icon (a different one per service: a ledger for Finance, a chart for FP&A, a team for GCC, and so on).
- **Sections:** "What we do," "How we do it," "What you gain," "Why ClearKanvas" each reveal on scroll.
- **Sub-services grid:** staggered reveal, hover micro-interaction.
- **Process or steps:** if the page shows steps, they reveal in sequence.
- **CTA:** standard band.

### Industries (landing)
- **Hero:** standard animated-gradient hero.
- **The 7 sector cards:** stagger in; each with an icon that animates on hover.
- **Closing "do not see your industry" CTA:** gentle fade with a button micro-interaction.

### How We Work
- **Engagement Models:** four model cards stagger in, each with a small animated icon.
- **Our Process:** the strongest motion graphic on the site. An animated SVG line draws between Discover, Design, Build, and Operate, with each step revealing in sequence as you scroll. This is your best "explainer" moment.
- **Why ClearKanvas:** pillars reveal with icon draw-in; count-up on any stats.
- **Why Pakistan:** an animated map or time-zone graphic (Lottie or SVG) showing the overlap with your markets; count-up on talent or cost figures.

### About
- **Our Story:** text reveals as you scroll; optionally a vertical timeline that draws in.
- **Mission, Vision & Values:** values stagger in with icons that draw.
- **Leadership:** cards fade and stagger (placeholder avatars for now); hover reveals the LinkedIn link.
- **Global Presence:** the same animated world map component as the home Markets section, with delivery locations and served markets marked distinctly and dots pulsing in sequence.

### Contact
- **Hero:** standard animated-gradient hero, lighter.
- **Form:** fields fade in on load; the submit button has a hover and a loading micro-interaction; a small success animation on submit.
- **Locations:** the operating-location cards stagger in; an optional animated map pin.

## Performance and accessibility rules (non-negotiable)
- One heavy asset per page maximum. Prefer Lottie and CSS gradients over video.
- Lazy-load any Lottie or video; always give video a poster image.
- Keep any video compressed and short; provide WebM and MP4.
- Honor `prefers-reduced-motion` site-wide.
- Test Core Web Vitals after the animation layer is added; motion must not push the largest content paint past a couple of seconds.

## Launch now vs add later
- **Launch:** the full motion system (reveals, stagger, hover, transitions), animated-gradient heros on every page, and the process line-draw. This alone makes the whole site feel premium.
- **Add later:** per-service Lottie icons, the animated world map, the GCC flow graphic, and any real video. These are the slow-to-produce pieces; add them once content is live.

## What to tell Claude Code
Build the reusable motion system first (FadeIn, Stagger, hover-lift, animated-gradient Hero, page-transition wrapper), then apply it to every page per the plan above. Add Lottie (`lottie-react`) only when placing the feature graphics. Do not add other animation libraries without asking. Respect `prefers-reduced-motion` in every component.
