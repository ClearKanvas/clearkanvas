# ClearKanvas Global: Brand Reference

Tagline: "The right people, anywhere in the world."

The single source of truth for these tokens is [app/globals.css](app/globals.css) (`:root`)
and the font setup in [app/layout.tsx](app/layout.tsx). If you change a value, change it there;
this file is documentation.

## Core brand colors

| Color | Hex | RGB |
|---|---|---|
| Orange (primary accent) | `#FF6A2B` | 255, 106, 43 |
| Navy (primary dark) | `#0F1E3D` | 15, 30, 61 |
| Warm off-white (base surface) | `#F7F6F2` | 247, 246, 242 |

## Full palette

| Token (CSS var) | Hex / value | Used for |
|---|---|---|
| `--orange` | `#FF6A2B` | Buttons, accent words (e.g. "anywhere"), CK mark, link hover |
| `--orange-ink` | `#E4561B` | Button and link hover (darker orange) |
| `--navy` | `#0F1E3D` | Headings, primary dark text, dark UI |
| `--navy-deep` | `#0A1124` | Footer background, darkest sections |
| `--slate` | `#2A3550` | Default body text |
| `--muted` | `#6B7690` | Secondary text, labels, captions |
| `--bg` | `#FFFFFF` | Page background |
| `--bg-warm` | `#F7F6F2` | Warm section and card backgrounds |
| `--line` | `#E7E4DB` | Hairline borders/dividers on light |
| `--line-2` | `rgba(15,30,61,0.08)` | Faint dividers on light |
| `--navy-line` | `rgba(255,255,255,0.10)` | Dividers on navy backgrounds |

## Typography

**One typeface across the whole site: Hanken Grotesk.** A warm humanist sans loaded via
`next/font/google` (self-hosted at build) as a single variable, `--font-sans`. Hierarchy comes
from size and weight, not from a second family. There is no serif display face.

| Role | Font | Notes |
|---|---|---|
| Display / headings | **Hanken Grotesk** | Headlines, CK wordmark, eyebrows, lead paragraphs; heavier weights for display |
| Body / UI | **Hanken Grotesk** | Body copy, buttons, labels |

Fallback stack: `"Hanken Grotesk", system-ui, sans-serif`

Both tokens resolve to the same font:
- Display var: `--display: var(--font-sans), "Hanken Grotesk", system-ui, sans-serif`
- Body var: `--body: var(--font-sans), "Hanken Grotesk", system-ui, sans-serif`

## Other design tokens

| Token | Value |
|---|---|
| Radius, small | `8px` |
| Radius, medium | `14px` |
| Radius, large | `22px` |
| Radius, pill | `999px` |
| Card shadow | `0 1px 2px rgba(15,30,61,0.04), 0 10px 30px -18px rgba(15,30,61,0.25)` |
| Lift shadow | `0 18px 50px -22px rgba(15,30,61,0.40)` |
| Nav shadow | `0 8px 30px -18px rgba(15,30,61,0.28)` |
| Motion easing | `cubic-bezier(0.22, 0.61, 0.36, 1)` (ease-out) |

## Logo / icon

- Favicon and share-image mark: orange rounded square (`#FF6A2B`) with white "CK".
- Full logo: `public/logo.png`.
