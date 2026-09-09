---
name: Mainkontor Beteiligungen
description: A private equity holding company's website rendered as an entry in a bound commercial ledger.
colors:
  paper: "#e7ddc8"
  paper-2: "#ede4d1"
  paper-edge: "#d8ccb0"
  ink: "#1f1b16"
  ink-soft: "#4a4034"
  ink-faint: "#5c5140"
  rule: "#c3b596"
  rule-strong: "#a99a78"
  green: "#244b3b"
  green-deep: "#1a3a2d"
  green-tint: "#d9d9be"
  oxblood: "#7a2318"
  gold: "#9a7b2e"
  footer-ink: "#d9ceb4"
  footer-muted: "#a9bcae"
typography:
  display:
    fontFamily: "\"Caslon Display\", \"Caslon Text\", \"Iowan Old Style\", Georgia, serif"
    fontSize: "clamp(2.7rem, 1.9rem + 4.2vw, 5.2rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "\"Caslon Display\", \"Caslon Text\", Georgia, serif"
    fontSize: "clamp(2rem, 1.6rem + 2.2vw, 3.2rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "\"Caslon Text\", \"Iowan Old Style\", Georgia, serif"
    fontSize: "clamp(1.5rem, 1.3rem + 1vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.005em"
  body:
    fontFamily: "\"Caslon Text\", \"Iowan Old Style\", \"Palatino Linotype\", Georgia, serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.075rem)"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"kern\" 1, \"liga\" 1, \"onum\" 1"
  lead:
    fontFamily: "\"Caslon Text\", \"Iowan Old Style\", Georgia, serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.5vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "clamp(0.72rem, 0.68rem + 0.2vw, 0.8rem)"
    fontWeight: 600
    letterSpacing: "0.16em"
  register:
    fontFamily: "Archivo, \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    letterSpacing: "0.02em"
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
rounded:
  hairline: "1px"
  square: "0"
spacing:
  stack: "1rem"
  stack-lg: "2rem"
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  section: "clamp(3.5rem, 7vw, 6.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.paper-2}"
    rounded: "{rounded.hairline}"
    padding: "0.85rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.green-deep}"
    textColor: "{colors.paper-2}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.green}"
    rounded: "{rounded.hairline}"
    padding: "0.85rem 1.5rem"
  card-register:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: "0.7rem 0.8rem"
---

# Design System: Mainkontor Beteiligungen

## Overview

**Creative North Star: "The Bound Ledger"**

The site is a kept book, not a fund prospectus. Every surface behaves like a page in a commercial register: a warm manila working-paper ground carries faint horizontal booking lines behind all content, sections open as numbered entries ("No. 01") in their own folio gutter, figures sit in tabular columns, and a double hairline rules off each section break. Authority comes from bookkeeping discipline rather than marketing gloss — the impression is substance, discretion, and a nameable person standing behind the entries.

The palette is restrained-to-committed: a single warm paper ground, iron-gall near-black ink, and exactly one committed accent (a deep bottle green) that carries whole regions — the footer, CTA bands, buttons treated as ink stamps, and the folio numbers. A reserved oxblood appears only as a seal color, for required-field marks, validation, and the placeholder "Beispiel/Demo" stamps. The world is deliberately light-mode only; there is no dark variant and none is intended.

Type is two-voiced: a Caslon serif with book gravity carries entries, headings, and running prose, while an Archivo sans with tabular figures and tracked uppercase supplies the "register voice" for labels, folio numbers, figures, nav, and buttons. The build refuses the two anti-references named in its direction: the navy-skyline / handshake PE hero, and the generic cream-plus-italic editorial serif look.

**Key Characteristics:**
- Warm manila ground (#e7ddc8) with a fixed repeating booking-line grid behind everything.
- One committed green accent; oxblood strictly a seal/marking color.
- Numbered ledger entries with a real folio index column, not decorative eyebrows.
- Serif for gravity, tabular sans for the register/figure voice.
- Near-square corners (1px), thin ruled borders, no rounded cards.
- Light mode only.

## Colors

A warm two-material palette: aged ledger paper and iron-gall ink, with one committed green and a single reserved oxblood.

### Primary
- **Kontor Green** (#244b3b): The one committed accent. Carries CTA bands, solid "stamp" buttons, folio numbers, entry top-rules, links, focus rings, selection, caret, and accent-color. It is the site's single voice of emphasis.
- **Kontor Green Deep** (#1a3a2d): The full-region green — the site footer field and button hover/pressed state. The darker seat the green settles into.
- **Green Tint** (#d9d9be): An aged green wash for panel heads (register head, form head), signaling a titled section within a card.

### Secondary
- **Seal Oxblood** (#7a2318): Reserved strictly for marking — the placeholder demo badge/stamp, required-field asterisks, and invalid-input borders and error text. Never used as a general accent or for emphasis.

### Neutral
- **Ledger Paper** (#e7ddc8): The page ground; deliberately manila, not cream. Also input field fill.
- **Panel Paper** (#ede4d1): Lifted panels and cards (register, form, portrait, criteria cells).
- **Page Edge** (#d8ccb0): Insets and page-edge tones.
- **Iron-Gall Ink** (#1f1b16): Primary text.
- **Ink Soft** (#4a4034): Secondary text, tinted rather than gray.
- **Ink Faint** (#5c5140): Captions and tertiary text; holds AA on paper.
- **Ledger Rule** (#c3b596): Standard hairline row and section rules.
- **Ledger Rule Strong** (#a99a78): Heavier borders, panel outlines, double-rule, scrollbar thumb.
- **Brass** (#9a7b2e): A sparing gold hairline detail token.
- **Footer Ink** (#d9ceb4) / **Footer Muted** (#a9bcae): Text and muted labels on the deep-green footer field.

### Named Rules
**The One Voice Rule.** Green is the only accent that carries emphasis. If a surface needs to shout, it does it in green, never by introducing a second hue.

**The Oxblood-Is-A-Seal Rule.** Oxblood only marks: placeholder stamps, required fields, and errors. It never decorates, never fills a CTA, never becomes a second accent.

## Typography

**Display Font:** Caslon Display (Libre Caslon Display, self-hosted) with Caslon Text / Iowan Old Style / Georgia fallback.
**Body Font:** Caslon Text (Libre Caslon Text) with Iowan Old Style / Palatino Linotype / Georgia fallback.
**Label/Register Font:** Archivo (variable, self-hosted) with Helvetica Neue / Arial fallback.

**Character:** A book-weight Caslon carries all prose and headings with old-style figures and true italics; Archivo supplies the clerical "register voice" — tabular lining figures and tracked uppercase — wherever the ledger counts, labels, or stamps something. The two never blur: serif narrates, sans records.

### Hierarchy
- **Display** (Caslon Display, 400, clamp 2.7–5.2rem, lh 1.08, -0.02em): Page H1 and the hero title (which pushes larger, clamp 2.6–5.4rem). Balanced wrapping, tight tracking.
- **Headline** (Caslon Display, 400, clamp 2–3.2rem, lh 1.08): Section H2s and the pull-quote.
- **Title** (Caslon Text, 700, clamp 1.5–2rem): H3 subsection heads.
- **Subtitle** (Caslon Text, 700, clamp 1.2–1.45rem): H4.
- **Lead** (Caslon Text, 400, clamp 1.2–1.45rem, lh 1.5): Opening paragraphs under a masthead or hero.
- **Body** (Caslon Text, 400, clamp 1–1.075rem, lh 1.6, old-style figures): Running prose, capped at a 68ch measure.
- **Label** (Archivo, 600, clamp 0.72–0.8rem, 0.16em, uppercase, ink-soft): The register voice — panel heads, meta lines, section kickers-as-column-labels.
- **Register figure** (Archivo, 600, ~1.15rem, tabular lining figures): Key/value figures in register, criteria, coords, vita.

### Named Rules
**The Two-Voice Rule.** Serif for anything that reads as sentences; Archivo (tabular, tracked, uppercase) for anything that counts, labels, or stamps. A number that matters is set in tabular figures.

**The Old-Style-Prose Rule.** Body prose uses old-style figures (`onum`); tabular lining figures (`tnum lnum`) are reserved for the register voice, so inline dates in a sentence and columnar figures in a panel read differently on purpose.

## Layout

Content sits in a centered wrap at max 74rem (a 60rem narrow variant exists), with a fluid gutter (`clamp(1.25rem, 4vw, 3rem)`). Prose is measured at 68ch. Vertical rhythm is section-based: `.section` pads `clamp(3.5rem, 7vw, 6.5rem)` block, with a tighter variant. Simple stacks space children at 1rem / 2rem.

The signature spatial device is the **entry grid**: a two-column grid of a fixed folio gutter (5.5rem, or 3.5rem in the hero variant) plus a `1fr` body, so the "No. 0X" index and its body align like a ledger booking line. Card grids (criteria, situations, prose) use `auto-fit minmax(...)` responsive tracks. Full-bleed color bands use static padding (`4rem 1.75rem`) so content stays clearly inset from the color field on every edge.

Behind everything, `body` carries a fixed `repeating-linear-gradient` of faint horizontal booking lines (~2.19rem pitch, `rgba(122,102,66,.09)`), attachment fixed, so the paper stays ruled as the page scrolls.

Responsive breakpoints are expressed in rem and collapse multi-column layouts to single-column: the entry grid drops its gutter at 40rem, the hero at 54rem, person/contact at 52rem, footer at 46rem then 30rem, and the header switches to a fixed dropdown nav at 56rem.

## Elevation & Depth

Mostly flat and paper-honest: depth comes from ruled borders, tonal paper layering (ground → panel → tint head), and the booking-line grid — not from ambient shadow. Two soft shadows exist, used only to lift discrete objects a little off the page.

### Shadow Vocabulary
- **Page lift** (`box-shadow: 0 1px 0 #ede4d1, 0 18px 40px -28px rgba(31,27,22,.55)`): The mobile nav dropdown; a page floating over the sheet below.
- **Object lift** (`box-shadow: 0 12px 30px -20px rgba(31,27,22,.5)`): Register panel, form, portrait plate, and the solid stamp button — the tactile documents and stamps.

### Named Rules
**The Paper-Flat Rule.** Surfaces are flat and ruled by default. A shadow only appears to lift a discrete physical object (a panel, a stamp, the dropdown) off the sheet — never to decorate a flat text region.

## Shapes

Near-square throughout: the corner radius is a 1px hairline (`--rounded: 1px`) on every button, card, panel, badge, and input — enough to soften a pixel edge, never enough to read as "rounded." Structure is drawn with thin lines: single hairline rules (`#c3b596`), strong rules (`#a99a78`) for panel outlines and first/last rows, and a double-hairline divider (a border-top plus an offset box-shadow) as the book's section break. Panels are outlined boxes with a tinted head and ruled key/value rows. The recurring silhouette is the ruled ledger row.

## Components

### Buttons
The button is an **inked stamp**.
- **Shape:** Effectively square (1px radius), Archivo 600, uppercase, 0.12em tracking, padding `0.85rem 1.5rem`.
- **Primary:** Solid Kontor Green (#244b3b) fill, paper text (#ede4d1), green-deep border, object-lift shadow. Often carries a trailing "→" glyph.
- **Hover / Focus:** Hover deepens to green-deep and lifts `translateY(-1px)`; active returns to 0. Focus-visible shows a 2px green outline offset 2px.
- **Ghost:** Transparent fill, green text, strong-rule border; hover tints background ~8% green and greens the border. Used as the quieter secondary action.
- **Tick link:** A tertiary action — Archivo uppercase with a strong-rule bottom border that gains a green border and widening gap on hover; no fill.

### Cards / Containers
- **Corner Style:** 1px hairline.
- **Background:** Panel paper (#ede4d1) body with a green-tint (#d9d9be) head band.
- **Shadow:** Object-lift (see Elevation) for register/form/portrait.
- **Border:** 1px strong-rule outline; head divided by a 2px strong rule; rows by single hairlines, last row unruled.
- **Internal Padding:** ~0.9–1.5rem; figures right-aligned in the register voice.

### Inputs / Fields
- **Style:** Serif text on paper fill (#e7ddc8), 1px strong-rule border, 1px radius; label is Archivo 600. Native selects are re-skinned with an inline green chevron SVG to match.
- **Focus:** Border shifts to green with a 3px green-at-22% glow ring (`box-shadow`).
- **Error / Required:** `:user-invalid` and required marks turn oxblood; error text is Archivo oxblood.

### Navigation
Sticky header on a translucent paper backdrop (`color-mix` 88% paper) with `backdrop-filter: saturate(120%) blur(6px)` and a bottom hairline. Nav links are Archivo 500, ink-soft, with a 2px transparent bottom border that turns green for `aria-current="page"`. Below 56rem the primary CTA hides, a bordered "Menü" toggle appears, and the nav becomes a fixed paper dropdown driven by `data-open`.

### Ledger Entry (signature)
The defining device. A numbered booking entry: a folio gutter (`.entry__no`, "No. 0X" in Archivo tabular green with a 2px green top-rule and a small category caption) beside a body with its own hairline top-rule. The hero variant (`.entry--hero`) keeps the folio marker but drops the rule slicing the H1 and narrows the gutter so the display title keeps its measure. The number is a real index column, explicitly not a decorative eyebrow.

### Register / Ledger List / Criteria / Situations (signature family)
A family of ledger readouts sharing the tinted-head + ruled-row grammar: `.register` (key/value figure panel), `.ledger-list` (numbered rule-separated principle rows), `.criteria` (1px-gap bordered cell grid with display-size figures), `.situations` (green top-rule cards), `.vita`/`.coords` (labeled ruled rows). All lead figures in the tabular register voice and green folio numbers.

### Placeholder marking (system convention)
Because all content ships as demo data, the system carries an explicit marking convention that is part of the design, not the content: **`.demo-badge`** (small oxblood-outlined uppercase stamp, e.g. "Beispiel") and **`.demo-note`** (Archivo ink-faint note above a hairline). Any fabricated figure or claim wears one of these so nothing reads as a real reference.

### Monogram seal (signature)
An inline-SVG "MK" monogram in a dashed double ring, used at wordmark scale in header/footer and enlarged on the contact success state. Authored as code (currentColor), never a raster.

## Do's and Don'ts

### Do:
- **Do** keep green as the single accent that carries emphasis and whole regions (footer, CTA bands, stamps).
- **Do** set every figure that matters in the Archivo tabular register voice, and every folio/index number in green.
- **Do** open sections as numbered ledger entries and rule them with the hairline / double-hairline vocabulary.
- **Do** keep corners near-square (1px) and draw structure with thin ruled borders on paper.
- **Do** mark every fabricated figure or claim with `.demo-badge` / `.demo-note`.
- **Do** render the logo/monogram and portrait as inline SVG.

### Don't:
- **Don't** introduce a second accent hue or use oxblood as anything but a seal/marking color.
- **Don't** add a dark mode or a cream ground; the world is warm-manila, light-only.
- **Don't** round corners into pill/card radii or drop shadows onto flat text regions.
- **Don't** ship the navy-skyline/handshake PE hero or the cream-plus-italic editorial serif look — both are explicit anti-references.
- **Don't** treat placeholder copy or example figures as product truth in future work.
