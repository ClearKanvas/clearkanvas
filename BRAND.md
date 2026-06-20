# ClearKanvas Global: Brand Reference

Tagline: "Where complexity becomes clarity."

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
| `--orange` | `#FF6A2B` | Buttons, accent words ("clarity", "world-class"), CK mark, link hover |
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

Both are Google Fonts, loaded via `next/font` (self-hosted at build).

| Role | Font | Notes |
|---|---|---|
| Display / headings | **Schibsted Grotesk** | Headlines, CK wordmark, eyebrows; weights up to 800 |
| Body / UI | **Inter Tight** | Body copy, buttons, labels |

Fallback stack: `system-ui, sans-serif`

- Display var: `--display: var(--font-display), "Schibsted Grotesk", system-ui, sans-serif`
- Body var: `--body: var(--font-body), "Inter Tight", system-ui, sans-serif`

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
