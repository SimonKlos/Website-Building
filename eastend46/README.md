# EastEnd46 — Website (Demo)

Statische Demo-/Pitch-Website für die **EastEnd46 Beratungs- und Beteiligungsgesellschaft** aus
Frankfurt — ein cleanes, helles, professionelles Auftreten für ein Haus, das **Beratung und
Beteiligung** verbindet. Gebaut mit dem **Impeccable**-Design-Skill.

> **Hinweis:** Alle Inhalte sind bewusst **generische Platzhalter** und als solche gekennzeichnet
> (Badges „Demo"/„Platzhalter"). Impressum und Datenschutz sind unverbindliche Vorlagen. Es werden
> keine belastbaren Behauptungen (Mandate, Referenzen, Zahlen) getroffen.

## Design-Welt
Hell, ruhig, premium-institutionell; ein committetes Institutions-Blau, ein sehr sparsamer warm-
metallischer Sekundärakzent (unterscheidet „Beteiligung" von „Beratung"), großzügiger Weißraum,
Libre Franklin. Frankfurt-Skyline-**Video** als Leitmotiv im Hero. Klar abgesetzt von den beiden
anderen Sites im Repo (Mainkontor = warmes Kontorbuch; Ostend = Sport/Broadcast).

## Aufbau
One-Pager `index.html` + `assets/` (Video, Schriften, CSS, JS). Sektionen: Start (Video-Hero) ·
Über · Leistungen (Beratung + Beteiligung) · Ansatz · Kontakt; dazu Impressum/Datenschutz. Festes
Menü oben + Scroll-Spy. **Keine Person-, keine Portfolio-Sektion.**

## Der Hero-Video-Slot  ⚑ wichtig
Aktuell läuft eine **selbst erzeugte, lizenzfreie** Skyline-Animation als Platzhalter
(`assets/video/skyline.webm`, VP8) mit Poster-Standbild (`assets/img/skyline-poster.jpg`).
Sie ist ein **Platzhalter** — für den finalen Look einen echten Frankfurt-Drohnen-Clip einsetzen:

1. Clip als **`assets/video/skyline.mp4`** (H.264, für Safari/iOS) und optional `.webm` (VP9)
   ablegen.
2. In `index.html` im `<video>` die auskommentierte MP4-Quelle aktivieren:
   `<source src="assets/video/skyline.mp4" type="video/mp4">` (vor der WebM-Quelle).
3. Ein neues Poster-Standbild als `assets/img/skyline-poster.jpg` hinterlegen.

`prefers-reduced-motion` wird respektiert (dann nur Poster, kein Autoplay).

### Gute, lizenzfreie Quellen für Skyline-/Drohnen-Videos
_(in dieser Build-Umgebung waren die Seiten gesperrt — bitte selbst herunterladen)_
- **Mixkit** — kostenlos, ohne Wasserzeichen, keine Attribution nötig; hat u. a. einen
  Frankfurt-Aerial-Clip: https://mixkit.co/free-stock-video/frankfurt-city-skyline-in-the-morning-aerial-view-27095/ · https://mixkit.co/free-stock-video/drone/
- **Pexels** — kostenlos (Attribution erwünscht): https://www.pexels.com/video/frankfurt-hessen-germany-27642210/
- **Coverr** — kostenlos: https://coverr.co/stock-video-footage/drone
- Alternativen: **Videvo**, **Pixabay** (jeweils Lizenz prüfen).
Empfehlung: kurzer (6–12 s), ruhiger Loop, 1080p, H.264-MP4 + WebM, Zielgröße < ~4 MB; dunklere
Blue-Hour-Aufnahme trägt den weißen Hero-Text am besten.

## Lokal ansehen
Wegen des Videos über einen kleinen Server öffnen:
```bash
python3 -m http.server 8000   # dann http://localhost:8000/index.html
```

## Kontaktformular an einen Workflow/Agenten anbinden
In `assets/js/config.js` die URL setzen:
```js
window.EASTEND = { contactEndpoint: "https://<ihr-webhook>/kontakt", source: "eastend46-website" };
```
Leer (`""`) = Demo-Modus (validiert, versendet nichts). Gesetzt = JSON-`POST`. Payload:
`{ name, company, email, topic, message, consent, submittedAt, source, userAgent }`. **CORS:** der
Endpoint muss die Herkunft erlauben (Access-Control-Allow-Origin + OPTIONS-Preflight), außer gleiche
Domain. Keine Secrets im Client; Honeypot ist eingebaut.

## Noch offen / vom Kunden
Echte Inhalte (Leistungstexte), finaler Firmenname/Logo-Feinschliff, echter Drohnen-Clip,
verbindliche Rechtstexte, Webhook-Endpoint.
