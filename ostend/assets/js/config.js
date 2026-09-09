/* =====================================================================
   Ostend Beteiligungen — zentrale Konfiguration
   ---------------------------------------------------------------------
   Kontaktformular-Anbindung: `contactEndpoint` auf einen Webhook/HTTP-
   Endpoint setzen (n8n / Zapier / Make / eigener Agent). Das Formular
   sendet dann bei Absenden ein JSON-POST an diese URL.

   Leer ("") = DEMO-Modus: validiert und zeigt eine Erfolgsbestätigung,
   versendet aber nichts.

   Erwartetes JSON (Content-Type: application/json):
     { name, company, email, stage, sector, message, consent,
       submittedAt (ISO), source, userAgent }

   CORS: Der POST kommt aus dem Browser — der Endpoint muss die Herkunft
   erlauben (Access-Control-Allow-Origin + OPTIONS-Preflight), außer er
   liegt auf derselben Domain. Keine Secrets im Client ablegen.
   ===================================================================== */
window.OSTEND = {
  contactEndpoint: "",
  source: "ostend-website"
};
