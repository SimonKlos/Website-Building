# Mainkontor Beteiligungen — Website (Demo)

Statische Demo-/Pitch-Website für eine private Beteiligungsgesellschaft aus Frankfurt.
Gebaut mit dem **Impeccable**-Design-Skill (visuelle Welt: *Kontorbuch / Handelsregister*).
Ziel dieser Version: **Design und Funktionen** zeigen — die Inhalte sind bewusst Platzhalter
(Dummy-Name, Dummy-Profil, illustrative Investment-Eckwerte) und werden später gezielt für den
konkreten Kunden ersetzt.

> **Hinweis:** „Mainkontor Beteiligungen" ist ein erfundener Platzhalter-Name. Alle Zahlen, Vita-,
> Branchen- und Kontaktangaben sind Beispielwerte und als solche gekennzeichnet (Badges „Demo" /
> „Platzhalter"). Impressum und Datenschutz sind unverbindliche Vorlagen.

## Struktur

```
index.html            Start (Hero als erster Buchungseintrag + Kennzahlen-Register)
strategie.html        Investmentstrategie
investmentfokus.html  Investmentfokus (Suchraster, Situationen, Branchen)
person.html           Die Person dahinter (Dummy-Profil)
kontakt.html          Kontakt + Formular (Webhook-fähig)
impressum.html        Impressum (Platzhalter)
datenschutz.html      Datenschutz (Platzhalter)
assets/css/main.css   Designsystem (Tokens, Typografie, Komponenten)
assets/js/config.js   Zentrale Konfiguration (Kontakt-Endpoint)
assets/js/main.js     Navigation, Scroll-Reveal, Footer-Jahr
assets/js/contact.js  Formular: Validierung, Honeypot, Webhook-POST + Demo-Fallback
assets/fonts/         Selbstgehostete Schriften (Libre Caslon, Archivo)
```

## Lokal ansehen

Kein Build-Schritt nötig. Einen kleinen Webserver starten (wegen der Schriften/`fetch` nicht direkt
per `file://` öffnen):

```bash
python3 -m http.server 8000
# dann http://localhost:8000/ öffnen
```

## Kontaktformular an einen Workflow/Agenten anbinden

In `assets/js/config.js` die `contactEndpoint`-URL setzen:

```js
window.MAINKONTOR = { contactEndpoint: "https://<ihr-webhook>/kontakt", source: "mainkontor-website" };
```

- **Leer** (`""`) = Demo-Modus: Formular validiert und zeigt eine Erfolgsbestätigung, versendet aber
  nichts.
- **Gesetzt** = das Formular sendet bei Absenden ein JSON-`POST` (`Content-Type: application/json`)
  an die URL. Ein n8n-/Zapier-/Make-Webhook oder ein eigener Agent-Endpoint kann das direkt
  verarbeiten.

Payload:

```json
{
  "name": "…", "company": "…", "email": "…", "topic": "…", "message": "…",
  "consent": true, "submittedAt": "2026-01-01T12:00:00.000Z",
  "source": "mainkontor-website", "userAgent": "…"
}
```

**Wichtig:** Der Endpoint muss CORS erlauben (Header `Access-Control-Allow-Origin` + Antwort auf die
OPTIONS-Preflight-Anfrage), außer er liegt auf derselben Domain wie die Website. Keine Secrets im
Client hinterlegen — Authentifizierung gehört auf die Endpoint-/Workflow-Seite (z. B. ein signierter
Webhook-Pfad). Ein Anti-Spam-Honeypot-Feld ist eingebaut.

## Was der Kunde noch liefert / anpasst

- Echter Firmenname + finales Logo (aktuell Wortmarke „Mainkontor" + SVG-Monogramm-Siegel „MK").
- Reale Vita, Foto und Zitat der Person; echte Investment-Eckwerte und Branchen.
- Verbindliche Impressums- und Datenschutztexte.
- Webhook-Endpoint für das Kontaktformular.
