---
name: EastEnd46
description: Frankfurter Beratungs- und Beteiligungsgesellschaft — helle, institutionelle Ruhe mit Skyline-Video-Leitmotiv.
colors:
  bg: "#f5f8fc"
  bg-card: "#ffffff"
  bg-panel: "#eef3fa"
  ink: "#0f1b2e"
  ink-2: "#43516a"
  ink-3: "#5a6880"
  line: "#dde5f0"
  line-2: "#c6d2e4"
  accent: "#1c4fd1"
  accent-deep: "#123a97"
  accent-interactive: "#2a63e6"
  accent-soft: "#e7eefc"
  gold: "#a9863f"
  navy: "#0c1626"
typography:
  display:
    fontFamily: "Libre Franklin, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(2.7rem, 1.85rem + 4.2vw, 4.9rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Libre Franklin, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.55rem + 2.2vw, 3.15rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Libre Franklin, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1.28rem + 1.05vw, 2.05rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Libre Franklin, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(1.16rem, 1.07rem + 0.42vw, 1.38rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Libre Franklin, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.16vw, 1.075rem)"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
    fontFeature: "\"kern\" 1, \"liga\" 1"
  label:
    fontFamily: "Libre Franklin, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(0.74rem, 0.71rem + 0.12vw, 0.8rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.16em"
rounded:
  sm: "3px"
  pill: "99px"
spacing:
  gutter: "clamp(1.15rem, 4vw, 3.25rem)"
  section: "5.25rem"
  wrap: "75rem"
  wrap-narrow: "56rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.5rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.5rem"
  button-ghost-hover:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-deep}"
  button-light:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.5rem"
  card-service:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "2rem 1.9rem 1.9rem"
  input-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.72rem 0.8rem"
  input-field-focus:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
---

# Design System: EastEnd46

## Overview

**Creative North Star: "The Frankfurt House of Quiet Standing"**

EastEnd46 is a light, institutional corporate world executed straight — the played-straight category norm of a serious advisory and equity house, held to craft level. It opens on a full-bleed Frankfurt-skyline video, then settles into airy, text-forward calm. The register is trust before effect: cool light air, deep-navy ink, a single committed institutional blue, and generous Libre Franklin type on a fluid scale. Nothing shouts; the restraint is the message. Hairlines, a near-square 3px radius, and soft structural elevation carry the whole surface — no glow, no gimmick, no loud PE-hero theatrics.

The palette is a light cool ground (#f5f8fc) with white cards, banded by deep-navy dark sections (hero backdrop, form header, footer). One institutional blue (#1c4fd1) is the sole voiced accent, with a deep and an interactive sibling for states. A single warm brass (#a9863f) appears only to distinguish Beteiligung (equity) from Beratung (advisory) — never decoratively. The world deliberately carries no person and no portfolio section: the house stands, the individual recedes.

Density is low and deliberate: 5.25rem section rhythm, a 75rem max wrap, and body copy capped near 66ch. Motion is minimal — a slow reveal on scroll, a breathing scroll cue — and every motion honors `prefers-reduced-motion` (the hero swaps autoplay video for its poster).

**Key Characteristics:**
- Light cool ground + white cards, banded by deep-navy sections
- One institutional blue as the only accent; brass strictly for the equity/advisory distinction
- Single family (Libre Franklin variable) on a fluid clamp scale with tabular figures
- 3px radius, hairlines, and soft blurred structural shadows — no glow
- Full-bleed skyline video hero with scrim, poster, and reduced-motion fallback

## Colors

A cool, light institutional palette: pale blue-grey air, near-white cards, deep-navy ink, one blue voice, one whisper of brass.

### Primary
- **Institutional Blue** (#1c4fd1): The single committed accent. Carries primary buttons, links, focus rings, section hairline rules, active nav underline, diamond bullets, selection highlight. The one voice of the system.
- **Institutional Blue Deep** (#123a97): Button hover/border, kicker labels, pressed and emphasis states.
- **Interactive Blue** (#2a63e6): Reserved brighter interactive tone in the ramp.
- **Accent Soft** (#e7eefc): Tinted fill for advisory service icon, ghost-button hover, demo badges.

### Secondary
- **Warm Brass** (#a9863f): Used only to mark the Beteiligung (equity) column apart from Beratung — its icon tint (#f4ecdd ground), diamond bullets, and the `--gold` rule variant. Never a general decorative accent.

### Neutral
- **Cool Ground** (#f5f8fc): The default page background; the light air the world breathes in.
- **Card White** (#ffffff): Cards, service tiles, form body, and light-banded sections.
- **Panel Tint** (#eef3fa): Faint panel fill for hovers and quiet surfaces.
- **Deep Navy Ink** (#0f1b2e): Primary text and headings.
- **Ink Secondary** (#43516a): Lead paragraphs, body-secondary, nav labels.
- **Ink Tertiary** (#5a6880): Captions, placeholders, footnotes (AA on white/ground).
- **Hairline** (#dde5f0): Default borders and dividers.
- **Hairline Strong** (#c6d2e4): Input borders, top-rule accents, stronger dividers.
- **Dark Navy** (#0c1626): Hero backdrop, form header band, footer — the dark counterweight.

### Named Rules
**The One Voice Rule.** Institutional Blue is the only voiced accent. If a surface needs a second color to feel finished, it is over-decorated — subtract instead of adding a hue.

**The Brass-For-Meaning Rule.** Warm brass appears only where it carries meaning: distinguishing Beteiligung from Beratung. It is never used to decorate, warm up, or accent a surface for its own sake.

## Typography

**Display / Body / Label Font:** Libre Franklin (variable, weights 400–700), self-hosted, with a `system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif` fallback.

**Character:** One family only, in the Franklin-Gothic institutional line — steady, legible, unshowy. Headings run tight (negative tracking, 1.1 line-height, balanced wrap); body runs open at 1.62. Tabular figures on numeric facts and principle numerals.

### Hierarchy
- **Display** (700, clamp 2.7→4.9rem, lh 1.1, tracking −0.025em): The single `<h1>` — the hero positioning line, in white over the scrim.
- **Headline** (700, clamp 2→3.15rem, lh 1.1, tracking −0.015em): Section `<h2>` titles.
- **Title** (700, clamp 1.5→2.05rem): Service and section `<h3>`.
- **Subtitle** (700, clamp 1.16→1.38rem): `<h4>` and inline aside headings.
- **Lead** (400, clamp 1.16→1.38rem, lh 1.5, ink-2): Section intro paragraphs, hero subline.
- **Body** (400, clamp 1→1.075rem, lh 1.62, max 66ch): Default running text.
- **Label** (600, clamp 0.74→0.8rem, tracking 0.16em, uppercase, accent-deep): Small meta labels — form-header tags, coordinate row labels, fact keys, footer column heads.

### Named Rules
**The Single-Family Rule.** One family (Libre Franklin) carries everything. Hierarchy comes from size, weight (400/600/700), and tracking — never from a second typeface or a default system stack.

**The Tabular Figures Rule.** Numeric facts and principle numerals use `font-variant-numeric: tabular-nums` so figures align in a column.

## Layout

A single centered column governs the page: `.wrap` at 75rem max (56rem for the narrow legal pages), with a fluid inline gutter `clamp(1.15rem, 4vw, 3.25rem)` widening to 3.25rem at ≥48rem. Vertical rhythm is a steady 5.25rem top/bottom section padding. Content stacks use owl-selector spacing (`>*+*`): 1rem standard, 2rem large.

Signature grids: the About and Contact areas use an asymmetric two-column split (`minmax(0,1fr) / minmax(0,1.05–1.08fr)`); Leistungen is an even 1fr/1fr Beratung/Beteiligung split; Ansatz is a 3-column principle grid; the facts strip is a 3-up hairline-gapped grid. All collapse to one column at the 52rem (services/two/contact) and 46rem (principles/footer) breakpoints. A fixed 4.6rem light header sits above; anchored sections carry `scroll-margin-top` equal to the header so scroll-spy lands cleanly.

## Elevation & Depth

The system is near-flat, lifted only by soft structural shadows — real offset+blur, never glow. Cards and the form sit slightly above the ground; the header uses a translucent blurred band; depth otherwise comes from tonal banding (cool ground vs. white cards vs. dark navy sections) and hairline borders.

### Shadow Vocabulary
- **Structural** (`box-shadow: 0 18px 44px -26px rgba(15,27,46,.34)`): The contact form and the mobile nav drawer — the most-lifted surfaces.
- **Structural Small** (`box-shadow: 0 8px 22px -14px rgba(15,27,46,.28)`): Service cards at rest — a quiet lift off the ground.
- **Focus Ring** (`box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent)`): Input focus only — a soft blue halo paired with a solid accent border.

### Named Rules
**The No-Glow Rule.** Shadows are downward, navy-tinted, and blurred to read as light from above. No colored glows, no hard offset shadows — the focus ring is the only soft blue halo, and it is a state, not decoration.

## Shapes

Near-square corners at a uniform 3px radius (`--radius`) on buttons, cards, inputs, icon chips, and badges — crisp and institutional, never soft. Pills (99px) appear only on the small demo badge. Structure is drawn with 1–2px hairlines (#dde5f0 / #c6d2e4): section rules are a 3.25rem × 2px accent bar; principle and coordinate rows carry a 2px top rule; the facts strip is a 1px-gap hairline grid. Diamond bullets (0.5rem square rotated 45° with a 1px radius) mark service lists — blue for Beratung, brass for Beteiligung.

## Components

### Buttons
- **Shape:** Near-square (3px radius), inline-flex with a 0.55rem gap for trailing arrows.
- **Primary:** White text on Institutional Blue (#1c4fd1) with an accent-deep 1px border, 0.8rem × 1.5rem padding, weight 600.
- **Hover / Focus:** Background to accent-deep (#123a97), `translateY(-1px)` on a 0.16s cubic-bezier(.2,.7,.2,1); returns to 0 on active. Focus-visible: 2px accent outline, 2px offset.
- **Ghost:** Accent text, transparent fill, hairline-strong border; hover fills accent-soft with an accent border.
- **Light:** Ink on white (for the dark hero) — hover to panel tint.
- **Tick link:** Borderless accent text with a `→` that slides 3px right on hover.

### Cards / Containers
- **Corner Style:** 3px radius.
- **Background:** White (#ffffff) on the cool ground.
- **Shadow Strategy:** Structural Small at rest (see Elevation).
- **Border:** 1px hairline (#dde5f0).
- **Internal Padding:** 2rem 1.9rem 1.9rem. Each service card leads with a 2.6rem rounded icon chip (accent-soft/accent-deep for Beratung, brass ground for Beteiligung) and a diamond-bulleted list.

### Inputs / Fields
- **Style:** Ground-tinted fill (#f5f8fc), 1px hairline-strong border (#c6d2e4), 3px radius, 0.72rem × 0.8rem padding, full width. Labels are 600/0.9rem ink-2 with an accent required-asterisk. Placeholders in ink-3.
- **Focus:** Accent border plus a 3px soft-blue halo ring; no outline.
- **Error:** Border to #c0392b on `:user-invalid`, with a live-region error line. Select uses a custom accent chevron; a honeypot field is visually hidden.

### Navigation
- **Style:** Fixed, light, translucent header — `color-mix(bg 92%, transparent)` with `saturate(140%) blur(10px)` backdrop and a hairline bottom border. Nav links are 600/0.95rem ink-2.
- **States:** Hover to ink; the active (scroll-spy) link is accent-deep with a 2px accent underline that wipes in left-to-right (`right: 100% → 0`). Mobile (≤56rem): links collapse into a toggled white drawer with structural shadow; the primary CTA hides and reappears inside the drawer.

### Logomark & Wordmark (signature)
An "E" monogram: a rounded-square (6.5 radius on a 32-grid) filled with the accent, holding a white "E" of stacked bars. Paired with the "EastEnd**46**" wordmark (46 in accent) over a 0.72rem uppercase "Beratung & Beteiligung" sub-label. Reused in the header, footer, and the form success state (there rendered as a checkmark).

### Contact Form (signature)
A lifted white card (Structural shadow, 3px radius) with a dark-navy header band carrying two blue-tinted uppercase labels ("Kontaktaufnahme" / "Vertraulich"). Body is a 1.05rem-gap field stack over a full-width primary submit; webhook-driven, with a templated success panel and a demo note when no endpoint is configured.

## Do's and Don'ts

### Do:
- **Do** keep Institutional Blue (#1c4fd1) the single accent voice — buttons, links, rules, focus, active nav, bullets.
- **Do** reserve brass (#a9863f) strictly for the Beteiligung/Beratung distinction.
- **Do** hold every corner to the 3px radius and draw structure with 1–2px hairlines.
- **Do** lift surfaces only with the navy-tinted offset+blur shadows; keep the page near-flat and tonally banded.
- **Do** honor `prefers-reduced-motion`: poster instead of autoplay, no reveal transitions, no scroll cue.
- **Do** set all headings in Libre Franklin with tight negative tracking; use tabular figures for numeric facts.

### Don't:
- **Don't** introduce a second accent hue or a warm decorative color; if a surface needs another color to feel done, subtract instead.
- **Don't** use glows, colored shadows, or hard offset shadows — the soft blue focus ring is the only halo, and it is a state.
- **Don't** round corners softly or exceed 3px (the 99px pill is only for the demo badge).
- **Don't** add a second typeface or fall back to a default system stack for display type.
- **Don't** add a person or portfolio section — the house stands, the individual recedes.
- **Don't** let the video hero play without a scrim, poster, and reduced-motion fallback.
