---
name: Ostend Beteiligungen
description: Tactic-board & analytics dashboard for a Frankfurt business-angel — calm blueprint, punctual broadcast accents.
colors:
  ground: "#eef3fb"
  surface: "#ffffff"
  panel-tint: "#e3ecfa"
  ink: "#0e1a2b"
  ink-secondary: "#38465b"
  ink-tertiary: "#566579"
  line: "#ccd9ee"
  line-strong: "#b3c5e2"
  pitch-blue: "#1256d6"
  pitch-blue-deep: "#0b3a9c"
  pitch-blue-bright: "#2f7bff"
  navy: "#0e1a2b"
  navy-2: "#17273c"
  live-dot: "#18c26a"
  chip: "#d8e5fb"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 1.7rem + 4.8vw, 5.6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.6rem + 2.4vw, 3.3rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.3rem + 1vw, 2.05rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.16vw, 1.08rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(0.72rem, 0.69rem + 0.12vw, 0.78rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
  figure:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontWeight: 700
    fontFeature: "'tnum' 1, 'lnum' 1"
rounded:
  sm: "4px"
  pill: "999px"
spacing:
  gutter: "clamp(1.15rem, 4vw, 3rem)"
  stack: "1rem"
  stack-lg: "2rem"
  section: "clamp(3.25rem, 6vw, 5.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.pitch-blue}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.pitch-blue-deep}"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.pitch-blue}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.4rem"
  chip:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.pitch-blue-deep}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.85rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "1.5rem"
  kpi-tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "1.25rem 1.25rem 1.1rem"
  input:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 0.8rem"
  scoreboard-bug:
    backgroundColor: "{colors.navy}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
---

# Design System: Ostend Beteiligungen

## Overview

**Creative North Star: "The Tactic Board & the Analytics Desk"**

Ostend reads teams the way a coach reads the tactic board: analysis first, emotion punctual. The system is a calm, cool, light-mode dashboard built over a faint blueprint of a football pitch. Deep navy ink sits on a cool paper ground; white cards float on thin cornflower borders and soft, low shadows. A single committed pitch-blue carries whole regions — links, meters, timeline numerals, the primary CTA, the crest — so the eye always knows where the play is going. Broadcast energy (the dark navy scoreboard "bug", the tiny green live dot, the ticker strip) appears only as an accent; it never becomes the room.

Density is that of a sober fact sheet dressed as a match program. Figures are tabular and quiet; headlines are condensed and confident; the sport vocabulary (Aufstellung, 4-3-3, Saison, positions) is playful but stays under the trust-first tone the product demands. This is deliberately not the loud sport-hype hero, and deliberately not the generic VC portfolio grid — it rejects both. It is also emphatically not the warm ledger world of the sibling Mainkontor site: where that world is paper and ink, this one is blueprint and blue.

The world is light only. There is no dark theme; `color-scheme: light` is declared and every surface is engineered for a cool-white ground.

**Key Characteristics:**
- Cool paper ground (#eef3fb) with floating white cards and thin cornflower borders.
- One committed pitch-blue (#1256d6) that carries entire regions, not just tap targets.
- Condensed Barlow Semi Condensed headlines over Barlow body with tabular figures.
- Punctual broadcast accents: navy scoreboard bug, sparse green live dot.
- Blueprint tactic geometry (pitch lines, formation dots) as low-opacity structure.
- Gently rounded 4px corners; pill radius reserved for chips, tags, and the bug.

## Colors

A cool, blue-dominant palette: one saturated pitch-blue accent over a narrow range of cool neutrals, with deep navy as both text ink and the dark broadcast surface.

### Primary
- **Pitch Blue** (#1256d6): The one committed accent. Carries links, the primary button, meter fills, timeline and stat numerals, chip dots, the crest, the highlighted hero word, focus rings, selection, and caret. Its saturation is the signal of "the play is here."
- **Pitch Blue Deep** (#0b3a9c): Pressed/hover state of the accent and the ink for chip and tag text; the darker anchor of gradient fills (player card tops, meter).
- **Pitch Blue Bright** (#2f7bff): Highlight-only end of the meter gradient; never used as a text or fill color on its own.

### Neutral
- **Cool Paper Ground** (#eef3fb): The page background; the recessed fill inside form inputs.
- **Card White** (#ffffff): All cards, panels, KPI tiles, the lineup and manager cards, the form body.
- **Panel Tint** (#e3ecfa): Meter track, tag background, the portrait placeholder field.
- **Deep Navy Ink** (#0e1a2b): Primary text, headings; doubles as the dark surface for the scoreboard bug, ticker, form head, and footer.
- **Navy-2** (#17273c): Divider inside dark navy surfaces (ticker cells, footer bottom rule).
- **Tinted Secondary Ink** (#38465b): Lead paragraphs, body copy inside cards, secondary text.
- **Tertiary Ink** (#566579): Labels, captions, notes, muted meta — holds AA on white and on the paper ground.
- **Line** (#ccd9ee): Default hairline border on cards, tiles, and row dividers.
- **Line Strong** (#b3c5e2): Emphasis divider (first row / group top), input border, scrollbar thumb.
- **Chip Fill** (#d8e5fb): Background of hero chips and the demo badge.

### Tertiary
- **Live Green** (#18c26a): The scoreboard live dot only, ringed by a soft green halo. Reserved exclusively for the pulse of "live"; it appears at most once or twice per screen.

### Named Rules
**The One Committed Blue Rule.** There is exactly one accent hue. Pitch-blue (#1256d6) and its deep/bright siblings are the only chromatic voice; no second accent color is ever introduced. The blue may flood whole regions (a gradient card top, a filled button, a run of numerals) — the discipline is hue, not quantity.

**The Punctual Broadcast Rule.** Navy scoreboard/ticker surfaces and the green live dot are accents, never structure. If broadcast chrome starts to organize a section rather than punctuate it, the tactic-board calm has been lost.

## Typography

**Display Font:** Barlow Semi Condensed (with Arial Narrow, system-ui fallback)
**Body Font:** Barlow (with system-ui, -apple-system, Segoe UI, Roboto, Arial fallback)

**Character:** Barlow Semi Condensed gives every heading, label, button, stat, and scoreboard the tight, jersey-lettering confidence of a broadcast graphics package; Barlow carries running prose and — with tabular, lining numerals — the "data desk" voice for every figure. The condensed/regular pairing is the entire type identity; no third face is used.

### Hierarchy
- **Display** (700, clamp 2.7–5.6rem, line-height 0.98): The hero headline only. Tight leading, slight negative tracking, balanced wrap.
- **Headline** (700, clamp 2.1–3.3rem, line-height 1.04): Section H2 openers ("Wohin der Ball läuft.").
- **Title** (700, clamp 1.5–2.05rem, line-height 1.04): H3s, the pull quote, sub-section headings.
- **Body** (400, clamp 1–1.08rem, line-height 1.6): Running copy, capped at 66ch (leads at 44–60ch). Lead paragraphs step up to `--s1` in tinted secondary ink.
- **Label** (600, clamp 0.72–0.78rem, letter-spacing 0.14em, UPPERCASE): The `.kicker` micro-label used inside tiles, panels, form heads, and coordinate rows; plus nav links, button text, captions.
- **Figure** (700, Barlow, tabular + lining nums): Any number — KPI values, stat lines, timeline numerals, vita years, ticket ranges — carries `.num` for tabular figures.

### Named Rules
**The Tabular Figure Rule.** Every displayed number uses tabular lining numerals (`font-variant-numeric: tabular-nums lining-nums`). Figures are data, and data columns align.

**The Label-Not-Eyebrow Rule.** The uppercase condensed micro-label (`.kicker`) is an in-context field/tile label (Phase, Ticket, E-Mail), never a standalone eyebrow floated above a section heading. Section openers use the numbered scoreboard-bug pill instead (see Components → Segment Divider).

## Layout

A single centered column governs the page: `--wrap` 74rem (narrow variant 58rem) with a fluid gutter (`clamp(1.15rem, 4vw, 3rem)`). Sections breathe on a fluid vertical rhythm (`clamp(3.25rem, 6vw, 5.5rem)` top and bottom). Content stacks use two rhythm steps: `1rem` (`.stack`) and `2rem` (`.stack-lg`).

The page is one scrolling document with a sticky, blurred header (min-height 4.4rem) and scroll-spy nav. Signature grids: the hero is an asymmetric `1.5fr / 1fr` split (headline vs. aside), the lineup is a fixed 3-column grid, KPI tiles and focus/gets grids are `auto-fit` with `minmax(~13–15rem, 1fr)`, and person/contact split roughly `0.85fr / 1.3fr`. Breakpoints collapse each multi-column grid to a single column between 52rem and 54rem; the nav becomes a fixed dropdown panel below 56rem; the footer steps 3→2→1 columns at 46rem and 30rem.

## Elevation & Depth

Depth is soft and structural-light: surfaces float a little above the cool ground on diffuse, downward, low-opacity navy shadows, reinforced by thin borders rather than heavy contrast. There is no hard offset shadow and no neobrutalist edge — the world is quiet. Shadows are ambient (they describe the card sitting on paper), not reactive glows; the only state-driven motion is a 1px button lift on hover.

### Shadow Vocabulary
- **Card Rest** (`box-shadow: 0 6px 16px -10px rgba(14,26,43,.30)`): The default lift under cards, panels, KPI tiles, buttons, the bug, and lineup cards.
- **Panel Deep** (`box-shadow: 0 14px 34px -20px rgba(14,26,43,.35)`): The slightly deeper lift for the largest surfaces (form, manager card) and the mobile nav dropdown.
- **Focus Ring** (`box-shadow: 0 0 0 3px color-mix(in srgb, var(--blue) 22%, transparent)`): The blue halo on focused inputs (paired with a solid blue border); `:focus-visible` elsewhere uses a 2px blue outline at 2px offset.
- **Live Halo** (`box-shadow: 0 0 0 3px color-mix(in srgb, var(--live) 30%, transparent)`): The green ring around the scoreboard live dot.

### Named Rules
**The Quiet Lift Rule.** Cards rest on diffuse, negative-spread navy shadows plus a hairline border — never a hard offset block shadow. Depth whispers; the pitch blue does the shouting.

## Shapes

Gently rounded 4px corners (`--radius`) are the house radius for every rectangular surface: cards, panels, KPI tiles, buttons, inputs, the scoreboard bug, lineup cards, the ticker. The pill radius (999px / 99px) is reserved for genuinely capsule objects — hero chips, sector tags, the segment-divider bug, the demo badge, the meter track, and the position tag on player cards. Borders are thin (1px) cornflower hairlines, stepping to `--line-strong` for emphasis dividers and to a 2px top rule on the first row of a ruled group. The recurring geometry motif is the blueprint pitch: thin, low-opacity blue field lines, center circle, penalty boxes, dashed pass-trajectories, and formation dots, used as a background structure behind the hero and as the grid inside the portrait placeholder.

## Components

### Buttons
- **Shape:** Gently rounded (4px), condensed uppercase label (600, letter-spacing 0.04em), arrow glyph optional.
- **Primary:** White text on pitch-blue with a `--blue-deep` border and the Card Rest shadow; padding 0.8rem 1.4rem.
- **Hover / Focus:** Background deepens to `--blue-deep` and the button lifts `translateY(-1px)` over a 0.16s ease; active returns to 0.
- **Ghost:** Blue text, transparent fill, `--line-strong` border, no shadow; hover tints the fill with 8% blue and shifts border/text to blue.
- **Disabled:** `aria-disabled="true"` drops opacity to 0.55, removes lift and shadow.
- **Text link ("tick"):** Condensed uppercase blue link with an animated `→` that slides 3px on hover.

### Chips
- **Style:** Pill (999px) chip-fill background, `--blue-deep` text, 22%-blue border, condensed 600 at 0.85rem; optional leading blue dot (`.chip__dot`).
- **Use:** Hero fact chips (phase, sector, region). Static, non-interactive facts — not filters.
- **Tag variant:** Sector tags use the same pill but panel-tint fill and `--line` border (quieter, denser).

### Cards / Containers
- **Corner Style:** 4px radius.
- **Background:** Card white; panel tint for recessed sub-fills.
- **Shadow Strategy:** Card Rest by default; Panel Deep for form and manager card (see Elevation).
- **Border:** 1px `--line` hairline.
- **Internal Padding:** 1.5rem (`.panel`); KPI tiles 1.25rem.

### Inputs / Fields
- **Style:** Recessed — cool-paper-ground fill inside white form, `--line-strong` 1px border, 4px radius, Barlow 1rem. Labels are uppercase condensed micro-labels in secondary ink with a blue required asterisk.
- **Focus:** Border shifts to solid pitch-blue plus the 3px blue Focus Ring halo (outline removed).
- **Error:** `:user-invalid` border turns to a muted red (#c0392b), matched by a small condensed error message; the red is used only for validation, never decoratively.
- **Select:** Custom inline blue chevron SVG, appearance reset.

### Navigation
- **Style:** Sticky blurred header (`backdrop-filter: saturate(140%) blur(8px)` over 85% ground), condensed uppercase links in secondary ink.
- **States:** Hover darkens to ink; `aria-current="page"` gives `--blue-deep` text and a 2px blue bottom border.
- **Mobile (≤56rem):** Inline CTA hides, a bordered condensed toggle appears, and the nav becomes a fixed white dropdown panel with the Panel Deep shadow, animating opacity/translate.

### Scoreboard Bug (signature)
A two-cell broadcast "bug": a navy left cell (white condensed 700 label, optional green live dot with halo) butted against a white right cell holding a tabular value. 4px radius, hairline navy border, Card Rest shadow. Punctual only — the hero's "OSTEND · SAISON '19—" bug is the reference use.

### Segment Divider (signature)
Each section opens with `.matchhead`: a hairline rule that fades in from transparent to `--line-strong`, terminated by a right-aligned navy pill "bug" (`matchhead__fol`) carrying the numbered segment label (e.g. "01 · Strategie", "03 · Aufstellung 4-3-3"). This is section chrome — a scoreboard tab on a rule — explicitly NOT an eyebrow/kicker floated above the heading.

### KPI Tiles & Meters (signature)
White tile, 4px radius, hairline border, Card Rest shadow: uppercase condensed micro-label, a large condensed tabular value (2rem) with an optional smaller unit, a note line, and an optional meter. The meter is a pill track (panel tint, hairline border, 0.5rem tall) with a left-to-right `--blue → --blue-bright` gradient fill.

### Portfolio "Aufstellung" Lineup Cards (signature)
Three player cards on a 3-column grid, each an `article.player`: a blue-gradient top (`160deg, --blue → --blue-deep`, white text) carrying a giant tabular jersey number (3.4rem), a pill position tag top-right on a translucent white fill, the club/company name, and a meta line; below, a white body with description and a 3-column `.statline` (centered blue-deep tabular values over tiny uppercase keys) divided by a hairline top rule. The jersey-number/position motif is the portfolio's whole visual conceit.

### Blueprint Pitch & Crest (signature)
- **Pitch SVG:** A low-opacity (~0.09–0.55) blue football-pitch blueprint — outline, halfway line, center circle, penalty boxes, dashed pass trajectories, movement dots — placed behind the hero (and echoed as a grid in the portrait placeholder). Structure, not illustration; fades further on mobile.
- **Crest:** A shield "OB" monogram in three lockups: solid pitch-blue with white inner stroke + wordmark (header), white outline on navy (footer), and blue shield with a white check (form success). Barlow Semi Condensed lettering inside.

## Do's and Don'ts

### Do:
- **Do** keep pitch-blue (#1256d6) as the only accent hue; let it carry whole regions (button, meter, numerals, gradient tops).
- **Do** set every displayed number in tabular lining figures (`.num`).
- **Do** open each section with the numbered scoreboard-bug segment divider, right-aligned on a fading rule.
- **Do** float white 4px cards on the cool ground with a hairline border and the soft Card Rest / Panel Deep shadows.
- **Do** keep broadcast chrome (navy bug, green live dot, ticker) punctual — one or two touches per screen.
- **Do** pair condensed Barlow Semi Condensed headings/labels with Barlow body; no third typeface.
- **Do** downplay hard financial criteria: phase/ticket/sector read as chips and calm tiles, never as loud EBITDA cards.

### Don't:
- **Don't** introduce a second accent color, or let green appear as anything but the live dot.
- **Don't** use hard offset/block shadows or heavy borders — depth stays diffuse and quiet.
- **Don't** float a standalone uppercase kicker/eyebrow above a heading; the segment-divider bug is the section marker.
- **Don't** ship a dark theme; this world is light-only (`color-scheme: light`).
- **Don't** let the sport/broadcast metaphor turn loud or reißerisch — the tactic-board calm and trust-first tone win.
- **Don't** use red for anything but form validation.
