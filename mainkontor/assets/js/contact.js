/* Mainkontor — Kontaktformular
   Validierung, Honeypot, Webhook-POST (config.js) mit Demo-Fallback. */
(function () {
  "use strict";

  var form = document.getElementById("kontakt-form");
  if (!form) { return; }

  var cfg = window.MAINKONTOR || {};
  var statusEl = form.querySelector(".form__status");
  var submitBtn = form.querySelector("[type=submit]");
  var successTpl = document.getElementById("form-success");

  function setError(field, message) {
    var wrap = form.querySelector('[data-field="' + field + '"]');
    if (!wrap) { return; }
    var out = wrap.querySelector(".field__error");
    var input = wrap.querySelector("input, textarea");
    if (out) { out.textContent = message || ""; }
    if (input) {
      if (message) { input.setAttribute("aria-invalid", "true"); }
      else { input.removeAttribute("aria-invalid"); }
    }
  }

  function validEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function validate(data) {
    var ok = true;
    setError("name", ""); setError("email", ""); setError("message", ""); setError("consent", "");
    if (!data.name) { setError("name", "Bitte nennen Sie uns Ihren Namen."); ok = false; }
    if (!data.email) { setError("email", "Bitte geben Sie eine E-Mail-Adresse an."); ok = false; }
    else if (!validEmail(data.email)) { setError("email", "Diese E-Mail-Adresse scheint nicht zu stimmen."); ok = false; }
    if (!data.message || data.message.length < 10) { setError("message", "Bitte beschreiben Sie Ihr Anliegen in ein, zwei Sätzen."); ok = false; }
    if (!data.consent) { setError("consent", "Ohne diese Zustimmung dürfen wir Ihre Anfrage nicht bearbeiten."); ok = false; }
    return ok;
  }

  function setStatus(msg, kind) {
    if (!statusEl) { return; }
    statusEl.textContent = msg || "";
    statusEl.style.color = kind === "error" ? "var(--oxblood)" : "var(--green-deep)";
  }

  function showSuccess(demo) {
    if (successTpl) {
      var node = successTpl.content.cloneNode(true);
      if (demo) {
        var note = node.querySelector("[data-demo-note]");
        if (note) { note.hidden = false; }
      }
      form.replaceChildren(node);
    } else {
      setStatus("Vielen Dank — Ihre Anfrage ist eingegangen.", "ok");
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Honeypot: bots fill hidden fields; humans don't.
    var hp = form.querySelector('input[name="website"]');
    if (hp && hp.value.trim() !== "") { showSuccess(false); return; }

    var data = {
      name: (form.elements.name.value || "").trim(),
      company: (form.elements.company.value || "").trim(),
      email: (form.elements.email.value || "").trim(),
      topic: (form.elements.topic.value || "").trim(),
      message: (form.elements.message.value || "").trim(),
      consent: !!form.elements.consent.checked
    };

    if (!validate(data)) {
      setStatus("Bitte prüfen Sie die markierten Felder.", "error");
      var firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) { firstInvalid.focus(); }
      return;
    }
    setStatus("", "ok");

    var payload = {
      name: data.name,
      company: data.company,
      email: data.email,
      topic: data.topic,
      message: data.message,
      consent: data.consent,
      submittedAt: new Date().toISOString(),
      source: (cfg.source || "mainkontor-website"),
      userAgent: navigator.userAgent
    };

    // Demo-Modus: kein Endpoint konfiguriert.
    if (!cfg.contactEndpoint) {
      submitBtn.setAttribute("aria-disabled", "true");
      setTimeout(function () { showSuccess(true); }, 450);
      return;
    }

    // Live-Modus: JSON-POST an den konfigurierten Webhook.
    submitBtn.setAttribute("aria-disabled", "true");
    var original = submitBtn.textContent;
    submitBtn.textContent = "Wird gesendet …";
    setStatus("Ihre Anfrage wird übermittelt …", "ok");

    fetch(cfg.contactEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        if (!res.ok) { throw new Error("HTTP " + res.status); }
        showSuccess(false);
      })
      .catch(function () {
        submitBtn.removeAttribute("aria-disabled");
        submitBtn.textContent = original;
        setStatus(
          "Die Übermittlung ist gerade nicht möglich. Bitte versuchen Sie es erneut oder schreiben Sie an kontakt@mainkontor.example.",
          "error"
        );
      });
  });
})();
