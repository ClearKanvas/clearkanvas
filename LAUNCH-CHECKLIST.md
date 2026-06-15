# ClearKanvas: Launch Readiness Checklist

The rule for going live: everything *shown* on the site must be real. Anything not
ready should be *removed*, not left as a placeholder.

Status legend: 🔴 blocker (fix before live) · 🟡 fix soon (not day-one critical) · ✅ done

---

## 🔴 Blockers, must be resolved before going live

- [ ] **Contact form delivers email.**
  The form works and validates, but only logs unless `RESEND_API_KEY` is set. Need: a
  Resend account (free), a verified sender, and the env vars from `.env.example` added in
  Vercel. A live site with a dead contact form loses leads.

- [ ] **Footer social link.**
  The LinkedIn icon in `components/Footer.tsx` points to `#`. Add the real URL or remove
  the icon. (The email icon already points to `mailto:hello@clearkanvas.com`.)

- [ ] **Confirm the contact inboxes exist.**
  `hello@clearkanvas.com` (general) and `sales@clearkanvas.com` (new business) are both
  referenced on the Contact page. Make sure both exist and are monitored, or remove `sales@`.

## 🟡 Decide: fill in OR remove (do not leave as placeholder)

- [ ] **Leadership** (`/about/leadership`) currently shows placeholder partner cards
  (monogram avatars, "Bio coming soon"). Provide names, titles, bios, and photos, or keep
  the placeholder note for launch.
- [ ] **Where we operate** (Contact + `/about/global-presence`) lists Pakistan, Bahrain,
  Dubai with generic notes ("Primary delivery center", "Regional presence"). Add real
  cities when available; a city plus contact email is acceptable.
- [ ] **Legal pages** (`/privacy-policy`, `/terms-of-use`, `/cookie-policy`) contain
  standard starter copy, not legal advice. Have counsel review before relying on them,
  especially as the form collects personal data across jurisdictions.

## ✅ Already done / launch-ready

- [x] Global layout: 5-item nav, Services mega menu (3 groups + flagship tile), rebuilt footer
- [x] Homepage, 8 sections per the structure doc (hero, positioning, services, flagship, why us, process, markets, CTA)
- [x] All 8 service detail pages (shared template, copy from the Services doc)
- [x] Industries landing with 7 sector cards
- [x] How We Work: Engagement Models, Process (animated line-draw), Why ClearKanvas, Why Pakistan
- [x] About: Our Story, Mission/Vision/Values, Leadership (placeholder), Global Presence
- [x] Contact page + form (Country field, one business day, operate vs serve locations)
- [x] Privacy, Terms, and Cookie pages (clears the footer links)
- [x] "Global Business Services" term absent from the live site
- [x] No em or en dashes anywhere in the source (standing rule)
- [x] Motion system sitewide: reveals, stagger, hover, magnetic buttons, card tilt, page-transition fade, animated-gradient heros, scroll progress
- [x] Reduced-motion honored sitewide
- [x] Favicon (`app/icon.svg`) and OG share image (`app/opengraph-image.tsx`)
- [x] P&C and Managed Services routes redirect to their new homes

## Can wait, launch WITHOUT these, add later

- Per-service Lottie icons, animated world map, GCC flow graphic, any real video (motion spec defers these)
- Real client testimonials (section removed until you have them)
- Insights / blog and Careers
- Analytics (Google Analytics / Plausible), nice at launch, not a blocker

---

## Go-live steps

1. Resolve the blockers above (Resend, social link, confirm inboxes).
2. Fill or remove the 🟡 placeholders.
3. Run `next build` locally to confirm a clean production build (stop the dev server first).
4. `vercel` then `vercel --prod` to deploy.
5. Connect your domain in the Vercel dashboard (add DNS records at your registrar).
6. Test on the live domain: every link, the contact form (confirm the email arrives), and mobile.
7. Announce.

## The launch trigger

Go live when: contact form emails you + no visible placeholders or broken links + inboxes confirmed.
