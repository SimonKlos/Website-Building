# Ostend Beteiligungen — Website (Demo)

Statische Demo-/Pitch-Website für eine private Beteiligungsgesellschaft aus Frankfurt, die als
**Business Angel / Growth-Investor** in **Sport, Fußball, Medien und Software** in diesem Umfeld
investiert (kleinere Tickets, für einen einzelnen Kapitalgeber stemmbar — kein Fonds, bewusst kein
Deep-Tech). Gebaut mit dem **Impeccable**-Design-Skill.

> **Hinweis:** „Ostend Beteiligungen", die Person, die Portfolio-Firmen und alle Zahlen sind
> erfundene **Platzhalter** und als solche gekennzeichnet (Badges „Demo"/„Platzhalter"). Impressum
> und Datenschutz sind unverbindliche Vorlagen.

## Design-Welt
„Taktiktafel & Analytics" — heller, kühler Grund mit Blautönen, Blueprint-Spielfeld-/Taktik-Geometrie
und einer Sport-Analytics-Dashboard-Sprache (KPI-Kacheln, tabulare Ziffern). Fußball-/Broadcast-
Emotion (Scoreboard-Bug, Live-Punkt, Trikotnummern in der „Aufstellung") nur punktuell. Klar
abgesetzt von der warmen Kontorbuch-Welt der Mainkontor-Site. Schriften: Barlow Semi Condensed
(Headlines/Labels/Scoreboard) + Barlow (Fließtext/Ziffern).

## Deliverable
- **`ostend-onepager.html`** — die komplette Website als **eine einzige, in sich geschlossene Datei**
  (CSS, JS und Schriften inline). Durchscrollbar, mit festem Menü oben (Anker + Scroll-Spy).
  Funktioniert ohne den `assets/`-Ordner — eine Datei zum Verschicken/Öffnen.
- **`index.html` + `assets/`** — Quellfassung derselben Seite (getrennte CSS/JS/Fonts) zur Pflege.
  Aus ihr wird die Single-File-Fassung erzeugt.

## Sektionen
Start · Strategie · Investmentfokus · **Portfolio** (bisherige Investments als „Aufstellung", 3
Referenz-Karten) · Person · Kontakt; dazu Impressum/Datenschutz (Platzhalter) im selben File.

## Lokal ansehen
Kein Build-Schritt. Entweder `ostend-onepager.html` direkt öffnen, oder die Quellfassung per Server:

```bash
python3 -m http.server 8000   # dann http://localhost:8000/index.html
```

## Kontaktformular an einen Workflow/Agenten anbinden
Im inline-`<script>` von `ostend-onepager.html` (bzw. in `assets/js/config.js` der Quelle) die URL
setzen:

```js
window.OSTEND = { contactEndpoint: "https://<ihr-webhook>/pitch", source: "ostend-website" };
```

- **Leer** (`""`) = Demo-Modus: validiert und zeigt eine Erfolgsbestätigung, versendet aber nichts.
- **Gesetzt** = JSON-`POST` an die URL. Payload: `{ name, company, email, stage, sector, message,
  consent, submittedAt, source, userAgent }`.
- **CORS:** Der Endpoint muss die Herkunft erlauben (`Access-Control-Allow-Origin` + OPTIONS-
  Preflight), außer er liegt auf derselben Domain. Keine Secrets im Client; Anti-Spam-Honeypot ist
  eingebaut.

## Was der Kunde noch liefert / anpasst
Echter Name + finales Wappen/Logo, reale Person (Vita, Foto, Zitat), echte Portfolio-Firmen und
Eckwerte, verbindliche Impressums-/Datenschutztexte, Webhook-Endpoint.
