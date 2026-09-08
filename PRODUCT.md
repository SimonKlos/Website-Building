# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS, kein Build-Schritt (vom Nutzer bestätigt). Grund: eine schlanke, übergabe- und
hostingfreundliche Demo-/Pitch-Seite, die später gezielt für einen konkreten Kunden angepasst wird.

## Users

Primär (extern, die Seite überzeugt sie):
- **Verkäufer / Nachfolger im Mittelstand** — Inhaber:innen bzw. Familien, die ihr Unternehmen ganz
  oder teilweise übergeben wollen und einen verlässlichen, unternehmerischen Partner statt eines
  renditegetriebenen Fonds suchen.
- **M&A-Berater, Corporate-Finance-Boutiquen, Steuerberater/Anwälte** als Deal-Vermittler, die eine
  passende Adresse für eine Beteiligungssituation suchen.
- **Ko-Investoren / Family Offices**, die punktuell mitinvestieren.

Situation: Erstrecherche vor der Kontaktaufnahme; sie wollen schnell verstehen, wer dahintersteht,
wie investiert wird und ob die eigene Situation zum Fokus passt — und dann diskret Kontakt aufnehmen.

Interne Zielgruppe dieser konkreten Version: **ein potenzieller Kunde (der Frankfurter Unternehmer)**,
dem Design und Funktionsumfang als Demo gezeigt werden.

## Product Purpose

Eine repräsentative Website für eine **private Beteiligungsgesellschaft** eines Unternehmers aus
Frankfurt. Sie stellt (1) die **Investmentstrategie**, (2) den **Investmentfokus** und (3) die
**Person dahinter** dar und ermöglicht (4) über ein **Kontaktformular** die diskrete Erstaufnahme.
Erfolg dieser Version = die Demo überzeugt gestalterisch und funktional so, dass der Kunde sie als
Basis für eine maßgeschneiderte Version freigibt.

## Positioning

Unternehmergeführtes, **privates Beteiligungskapital aus Frankfurt** — kein klassischer Fonds mit
festem Laufzeit-/Exit-Druck. Die unterscheidbare Position: das eigene Kapital und die operative
Unternehmererfahrung einer benennbaren Person statt anonymer Fondsstruktur; langfristiger,
partnerschaftlicher Horizont; Entscheidungen direkt, schnell und ohne Investmentkomitee-Kaskade.

## Operating Context

Bewertungsumfeld der Nutzer: Nachfolge-/Verkaufsprozesse im Mittelstand, oft vertraulich und über
Berater angebahnt. Die Website ist die erste seriöse Kontaktfläche und ein Vertrauensanker; sie wird
am Desktop und mobil gelesen, häufig neben Wettbewerbs-Websites etablierter Beteiligungsgesellschaften
(z. B. DBAG, DPE) als Vergleichsmaßstab.

## Capabilities and Constraints

- Fünf deutschsprachige Seiten mit gemeinsamem Header/Footer und Designsystem: Start, Strategie,
  Investmentfokus, Person, Kontakt.
- **Kontaktformular mit konfigurierbarem Webhook**: Submit baut ein JSON-Payload und sendet es per
  `POST` an eine zentral konfigurierbare Endpoint-URL, damit später ein Workflow/Agent angebunden
  werden kann. Ohne konfigurierten Endpoint läuft ein sauberer Demo-Erfolgs-State (kein Versand).
  Client-Validierung, Anti-Spam-Honeypot, DSGVO-Consent-Checkbox (Platzhalter-Text). Keine Secrets
  im Client.
- Statisch, kein Backend, kein Build-Schritt; muss auf beliebigem Static-Hosting laufen.

## Brand Commitments

- **Name (Dummy/Platzhalter, vom Nutzer gewählt):** „Mainkontor Beteiligungen". Zentral austauschbar
  gehalten.
- **Logo:** als Code/SVG umzusetzen (Wortmarke + Monogramm), kein Rasterbild.
- Sprache: Deutsch, Sie-Ansprache, seriös und diskret.
- Frankfurt / Rhein-Main als Verortung.

## Evidence on Hand

**Keine realen Inhalte.** Dies ist eine Demo: Firmenname, Vita der Person, Zahlen, Branchen, Track
Record und Portfolio sind **Platzhalter** und als solche erkennbar zu halten. Zukünftige Arbeit darf
daraus **keine belastbaren Behauptungen** machen (keine erfundenen Kunden, Renditen, verwalteten
Vermögen, Referenzdeals). Rechtstexte (Impressum, Datenschutz) sind Platzhalter; verbindliche Fassung
liefert der Kunde. Reale Fakten zu Person und Strategie liefert der Nutzer später nach.

## Product Principles

1. **Vertrauen vor Lautstärke.** Diskretion, Klarheit und Substanz schlagen Marketing-Effekte; die
   Zielgruppe entscheidet über Vertrauen.
2. **Die Person ist das Differenzierungsmerkmal.** Der benennbare Unternehmer, nicht eine anonyme
   Fondsmechanik, trägt die Positionierung.
3. **Passung sofort erkennbar machen.** Investmentfokus so darstellen, dass Verkäufer/Berater in
   Sekunden sehen, ob ihre Situation passt.
4. **Ehrliche Platzhalter.** Alles Erfundene bleibt als Beispiel kenntlich; nichts wird als
   belastbare Referenz ausgegeben.
5. **Anschlussfähig halten.** Inhalte (Name, Person, Fokus) und das Formular-Backend sind so
   strukturiert, dass die spätere kundenspezifische Anpassung und die Agent-/Workflow-Anbindung
   leichtfallen.
