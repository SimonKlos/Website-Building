/* =====================================================================
   EastEnd46 — zentrale Konfiguration
   Kontaktformular: `contactEndpoint` auf einen Webhook/HTTP-Endpoint setzen
   (n8n / Zapier / Make / eigener Agent). Leer ("") = DEMO-Modus (validiert +
   Erfolgsbestätigung, versendet nichts).

   Payload (application/json): { name, company, email, topic, message,
   consent, submittedAt (ISO), source, userAgent }.
   CORS: Der POST kommt aus dem Browser — Endpoint muss die Herkunft erlauben
   (Access-Control-Allow-Origin + OPTIONS-Preflight), außer gleiche Domain.
   Keine Secrets im Client.
   ===================================================================== */
window.EASTEND = { contactEndpoint: "", source: "eastend46-website" };
