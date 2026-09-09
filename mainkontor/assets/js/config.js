/* =====================================================================
   Mainkontor Beteiligungen — zentrale Konfiguration
   ---------------------------------------------------------------------
   Kontaktformular-Anbindung:
   Trage unter `contactEndpoint` die URL eines Webhooks/HTTP-Endpoints ein,
   der die Formular-Einsendungen entgegennimmt (z. B. ein n8n-/Zapier-/Make-
   Webhook oder ein eigener Agent-/Workflow-Endpoint). Das Formular sendet
   dann bei Absenden ein JSON-POST an diese URL.

   Solange der Wert leer ("") ist, läuft die Seite im DEMO-Modus:
   das Formular validiert und zeigt eine Erfolgsbestätigung, versendet aber
   nichts. So bleibt die Demo ohne Backend voll bedienbar.

   Erwartetes JSON-Payload (Content-Type: application/json):
     {
       "name":        String,   // Ansprechpartner
       "company":     String,   // Unternehmen (optional)
       "email":       String,
       "topic":       String,   // Anliegen (Nachfolge / Wachstum / …)
       "message":     String,
       "consent":     Boolean,  // Datenschutz-Zustimmung
       "submittedAt": String,   // ISO-8601 Zeitstempel
       "source":      String,   // "mainkontor-website" + Seite
       "userAgent":   String
     }

   Der Endpoint sollte HTTP 2xx zurückgeben. Keine Secrets/Tokens hier
   ablegen — dieser Code läuft im Browser des Besuchers. Authentifizierung
   gehört auf die Server-/Workflow-Seite (z. B. ein signierter Webhook-Pfad).

   CORS: Da der POST aus dem Browser kommt, muss der Endpoint die Herkunft
   der Website erlauben (Header `Access-Control-Allow-Origin` sowie eine
   Antwort auf die OPTIONS-Preflight-Anfrage). Liegt der Endpoint auf
   derselben Domain wie die Website, entfällt das.
   ===================================================================== */
window.MAINKONTOR = {
  // Beispiel: "https://hooks.example.com/mainkontor/kontakt"
  contactEndpoint: "",

  // Optionaler Anzeigename für die Absender-Quelle im Payload.
  source: "mainkontor-website"
};
