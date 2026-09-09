/* Ostend — Kontaktformular: Validierung, Honeypot, Webhook-POST + Demo-Fallback */
(function () {
  "use strict";
  var form = document.getElementById("kontakt-form");
  if (!form) { return; }

  var cfg = window.OSTEND || {};
  var statusEl = form.querySelector(".form__status");
  var submitBtn = form.querySelector("[type=submit]");
  var successTpl = document.getElementById("form-success");

  function setError(field, message) {
    var wrap = form.querySelector('[data-field="' + field + '"]');
    if (!wrap) { return; }
    var out = wrap.querySelector(".field__error");
    var input = wrap.querySelector("input, textarea");
    if (out) { out.textContent = message || ""; }
    if (input) { message ? input.setAttribute("aria-invalid", "true") : input.removeAttribute("aria-invalid"); }
  }
  function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  function validate(d) {
    var ok = true;
    setError("name", ""); setError("email", ""); setError("message", ""); setError("consent", "");
    if (!d.name) { setError("name", "Bitte nennen Sie uns Ihren Namen."); ok = false; }
    if (!d.email) { setError("email", "Bitte geben Sie eine E-Mail-Adresse an."); ok = false; }
    else if (!validEmail(d.email)) { setError("email", "Diese E-Mail-Adresse scheint nicht zu stimmen."); ok = false; }
    if (!d.message || d.message.length < 10) { setError("message", "Ein, zwei Sätze zu Ihrem Vorhaben genügen."); ok = false; }
    if (!d.consent) { setError("consent", "Ohne diese Zustimmung dürfen wir Ihre Anfrage nicht bearbeiten."); ok = false; }
    return ok;
  }
  function setStatus(msg, kind) {
    if (!statusEl) { return; }
    statusEl.textContent = msg || "";
    statusEl.style.color = kind === "error" ? "#c0392b" : "var(--blue-deep)";
  }
  function showSuccess(demo) {
    if (successTpl) {
      var node = successTpl.content.cloneNode(true);
      if (demo) { var n = node.querySelector("[data-demo-note]"); if (n) { n.hidden = false; } }
      form.replaceChildren(node);
    } else { setStatus("Danke — Ihre Anfrage ist eingegangen.", "ok"); }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var hp = form.querySelector('input[name="website"]');
    if (hp && hp.value.trim() !== "") { showSuccess(false); return; }

    var d = {
      name: (form.elements.name.value || "").trim(),
      company: (form.elements.company.value || "").trim(),
      email: (form.elements.email.value || "").trim(),
      stage: (form.elements.stage.value || "").trim(),
      sector: (form.elements.sector.value || "").trim(),
      message: (form.elements.message.value || "").trim(),
      consent: !!form.elements.consent.checked
    };
    if (!validate(d)) {
      setStatus("Bitte prüfen Sie die markierten Felder.", "error");
      var first = form.querySelector('[aria-invalid="true"]'); if (first) { first.focus(); }
      return;
    }
    setStatus("", "ok");

    var payload = {
      name: d.name, company: d.company, email: d.email, stage: d.stage, sector: d.sector,
      message: d.message, consent: d.consent,
      submittedAt: new Date().toISOString(),
      source: (cfg.source || "ostend-website"),
      userAgent: navigator.userAgent
    };

    if (!cfg.contactEndpoint) {
      submitBtn.setAttribute("aria-disabled", "true");
      setTimeout(function () { showSuccess(true); }, 420);
      return;
    }
    submitBtn.setAttribute("aria-disabled", "true");
    var original = submitBtn.textContent;
    submitBtn.textContent = "Wird gesendet …";
    setStatus("Ihre Anfrage wird übermittelt …", "ok");
    fetch(cfg.contactEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (res) { if (!res.ok) { throw new Error("HTTP " + res.status); } showSuccess(false); })
      .catch(function () {
        submitBtn.removeAttribute("aria-disabled"); submitBtn.textContent = original;
        setStatus("Übermittlung gerade nicht möglich. Bitte erneut versuchen oder an kontakt@ostend-beteiligungen.example schreiben.", "error");
      });
  });
})();
