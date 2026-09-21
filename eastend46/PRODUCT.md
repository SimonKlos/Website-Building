# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS One-Pager mit `assets/`-Ordner (Video, self-hosted Fonts, CSS, JS). Kein
Build-Schritt. Wegen des Video-Heros KEIN Single-File.

## Users

Primär (extern): Inhaber:innen, Geschäftsführungen und Gesellschafter mittelständischer Unternehmen
sowie deren Berater, die (a) **strategische/finanzielle Beratung** oder (b) einen **Beteiligungs-/
Kapitalpartner** suchen. Sekundär: Transaktionspartner, Family Offices, Ko-Investoren.
Situation: Erstrecherche, will in Sekunden Seriosität, Leistungsspektrum (Beratung + Beteiligung)
und einen diskreten Kontaktweg erkennen.
Interne Zielgruppe dieser Version: ein potenzieller Kunde, dem Design + Funktionsumfang als Demo
gezeigt werden.

## Product Purpose

Repräsentative Website für die **„EastEnd46 Beratungs- und Beteiligungsgesellschaft"** (kurz
**„EastEnd46"**) aus Frankfurt. Sie stellt das Haus als **Beratungs- UND Beteiligungsgesellschaft**
dar (zwei gleichwertige Leistungsfelder), vermittelt Seriosität/Diskretion und ermöglicht über ein
Kontaktformular die Erstaufnahme. Erfolg dieser Version = Design + Funktion überzeugen als Basis für
eine spätere kundenspezifische Fassung.

## Positioning

Frankfurter Haus, das **Beratung und Beteiligung** unter einem Dach verbindet: strategische/
transaktionsnahe Beratung einerseits, unternehmerische Beteiligungen andererseits — diskret,
langfristig, partnerschaftlich. Kein aggressiver Investment-Pitch; das Leistungsversprechen ist
Vertrauen und Kontinuität. (Die Person/Gründer tritt bewusst in den Hintergrund.)

## Operating Context

Wird am Desktop und mobil gelesen, oft neben etablierten Beratungs-/Beteiligungshäusern als
Vergleichsmaßstab. Frankfurt/Ostend als Verortung; „EastEnd" = englische Entsprechung von „Ostend".

## Capabilities and Constraints

- One-Pager mit festem Menü + Scroll-Spy; deutschsprachig. Sektionen: Start (Video-Hero), Über,
  **Leistungen (zweigeteilt: Beratung + Beteiligung)**, Ansatz/Prinzipien, Kontakt; dazu
  Impressum/Datenschutz (Platzhalter). **KEINE Person-Sektion, KEINE Portfolio-Sektion.**
- **Video-Hero:** vollflächige Frankfurt-Skyline-Animation als `<video>` (autoplay, muted, loop,
  playsinline) mit Poster-Fallback und `prefers-reduced-motion`-Rücksicht. In dieser Version eine
  **selbst erzeugte, lizenzfreie** Skyline-Animation; ein Swap-Slot erlaubt später einen echten
  Drohnen-Clip (`assets/video/skyline.*`).
- **Kontaktformular mit konfigurierbarem Webhook** (`window.EASTEND.contactEndpoint`, leer = Demo),
  Validierung, Anti-Spam-Honeypot, DSGVO-Consent (Platzhalter). Keine Secrets im Client.

## Brand Commitments

- **Name (Platzhalter/Demo):** „EastEnd46 Beratungs- und Beteiligungsgesellschaft", kurz „EastEnd46".
- **Logo:** saubere **Wortmarke + dezente Marke** (Monogramm „E46" / Ost-Kompass-Motiv), als SVG
  code-generiert.
- **Design (gepinnt):** clean, hell, premium-institutionell/professionell; Frankfurt-Skyline als
  Leitmotiv; ruhig, nicht laut; kein thematischer Fußball-/Sportbezug (klar abgesetzt von der
  Ostend-Site). Sprache: Deutsch, Sie, seriös.

## Evidence on Hand

**Keine realen Inhalte.** Name (real im Handelsregister, hier aber als Demo behandelt), Leistungen,
Zahlen und Texte sind **generische Platzhalter** und als solche erkennbar zu halten. Keine
erfundenen belastbaren Behauptungen (reale Mandate, Referenzen, Renditen, AuM). Rechtstexte sind
Platzhalter.

## Product Principles

1. **Seriosität in Sekunden.** Ruhiges, helles, professionelles Auftreten; Vertrauen vor Effekt.
2. **Zwei Leistungsfelder, ein Haus.** Beratung und Beteiligung gleichwertig und klar getrennt
   darstellen, ohne aggressiven Pitch.
3. **Diskretion & Langfristigkeit** als Haltung.
4. **Person im Hintergrund.** Das Haus, nicht eine Einzelperson, trägt die Darstellung.
5. **Ehrliche Platzhalter.** Alles Generische bleibt als Platzhalter kenntlich.
