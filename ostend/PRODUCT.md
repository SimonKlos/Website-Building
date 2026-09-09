# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static single-file HTML/CSS/JS (One-Pager, eine in sich geschlossene Datei; CSS, JS und Schriften
inline). Kein Build-Schritt, überall hostbar/verschickbar. Quell-Assets zusätzlich unter
`ostend/assets/` für die Pflege.

## Users

Primär (extern, die Seite überzeugt sie):
- **Gründer:innen / Founder** von jungen Unternehmen in **Sport, Fußball, Medien und Software** in
  diesem Umfeld (SportsTech, Fan-Engagement, Streaming/Media, Vereins-/Liga-Software, Sport-Daten/
  Analytics), die **Wachstums-/Angel-Kapital** und einen unternehmerischen Partner suchen.
- **Vereine, Verbände, Medien- und Reha-/Fitness-Akteure**, die einen Kapital-/Sparringspartner suchen.
- **Ko-Investoren / andere Angels**, die bei kleineren Runden mitgehen.

Situation: Erstrecherche vor der Kontaktaufnahme; sie wollen schnell erkennen, ob Ticketgröße,
Sektor und Arbeitsweise passen — und dann unkompliziert Kontakt aufnehmen.

Interne Zielgruppe dieser Version: **ein potenzieller Kunde (der Frankfurter Unternehmer)**, dem
Design und Funktionsumfang als Demo gezeigt werden.

## Product Purpose

Repräsentative Website für die **private Beteiligungsgesellschaft** eines Frankfurter Unternehmers,
die als **Business Angel / Growth-Investor** in kleinere Runden geht. Sie stellt (1) die
**Strategie**, (2) den **Investmentfokus**, (3) das **bisherige Portfolio** (Referenzen), (4) die
**Person** dar und ermöglicht (5) über ein **Kontaktformular** die Erstaufnahme. Erfolg dieser
Version = die Demo überzeugt gestalterisch und funktional als Basis für eine maßgeschneiderte Fassung.

## Positioning

Unternehmergeführtes, **privates Beteiligungskapital eines Einzelnen** — **kleinere Tickets**,
Business-Angel- und **Growth-/Venture-nah**, für einen einzelnen Kapitalgeber stemmbar (kein Fonds,
keine Fondsmechanik). Schwerpunkt **Sport / Fußball / Medien und Software in diesem Umfeld**. Bewusst
**nicht** Deep-Tech oder kapitalintensive Frühphasen-Wetten — anschlussfähige, verständliche
Geschäftsmodelle mit operativer Substanz. Der Vorteil: eine benennbare Person mit Netzwerk und
Branchennähe statt anonymer Fonds.

## Operating Context

Nutzer prüfen die Seite am Desktop und mobil, oft neben Angel-/VC-Profilen und Programm-Seiten.
Sie ist die erste seriöse Kontaktfläche und ein Vertrauens-/Passungs-Check. Frankfurt/Ostend als
Verortung (Ostend = aufstrebendes Viertel, EZB-Nähe).

## Capabilities and Constraints

- One-Pager mit festem Menü + Scroll-Spy; deutschsprachig. Sektionen: Start, Strategie,
  Investmentfokus, **Portfolio (bisherige Investments, 3 Referenzen, kreativ dargestellt)**, Person,
  Kontakt; dazu Impressum/Datenschutz (Platzhalter) im selben File.
- **Kontaktformular mit konfigurierbarem Webhook** (JSON-`POST`, leer = Demo-Erfolg), Validierung,
  Anti-Spam-Honeypot, DSGVO-Consent (Platzhalter). Keine Secrets im Client. Gleiche Funktionen wie
  die Mainkontor-Site (Namespace `window.OSTEND`).
- Single-File-Deliverable: läuft ohne `assets/`-Ordner (alles inline).

## Brand Commitments

- **Name (Dummy/Platzhalter):** „Ostend Beteiligungen". Unternehmer aus Frankfurt.
- **Design (gepinnt):** heller Grund, **Blautöne**; Bildsprache aus **Fußball/Sport/Broadcast-Medien
  und Software/Daten** (Matchday-/Broadcast-Grafik: Lower-Thirds, Ticker/Scoreboard, Spielfeld-/
  Taktik-Geometrie, große Ziffern/Stat-Overlays). Klar unterscheidbar von der warmen Kontorbuch-Welt
  der Mainkontor-Site.
- Sprache: Deutsch, Sie-Ansprache; seriös, aber energischer/moderner als Mainkontor.

## Evidence on Hand

**Keine realen Inhalte.** Firmenname, Vita, Portfolio-Firmen, Zahlen und Ticketgrößen sind
**Platzhalter** und als solche erkennbar zu halten. Keine erfundenen belastbaren Behauptungen
(reale Kunden, Renditen, verwaltetes Vermögen, konkrete Deals). Rechtstexte sind Platzhalter.

## Product Principles

1. **Passung in Sekunden.** Ticketgröße, Sektor und Arbeitsweise sofort erkennbar machen.
2. **Person + Branchennähe schlagen Fondslogik.** Der benennbare Unternehmer mit Netzwerk im Sport-/
   Medienumfeld ist das Differenzierungsmerkmal.
3. **Growth statt Wette.** Verständliche, tragfähige Modelle; nicht „zu wild", kein Deep-Tech.
4. **Ehrliche Platzhalter.** Alles Erfundene bleibt als Beispiel kenntlich.
5. **Energie mit Haltung.** Sport-/Broadcast-Sprache darf lebendig sein, ohne ins Reißerische zu
   kippen — Vertrauen bleibt das Ziel.
