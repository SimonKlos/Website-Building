/* Mainkontor — Navigation, Reveal-Motion, Jahr im Footer */
(function () {
  "use strict";

  /* --- Mobile navigation toggle ------------------------------------ */
  var toggle = document.querySelector(".nav-toggle__btn");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.querySelector("[data-label]").textContent = open ? "Menü" : "Schließen";
    });
    // close on link click (mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.getAttribute("data-open") === "true") {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
        toggle.querySelector("[data-label]").textContent = "Menü";
      }
    });
  }

  /* --- Footer year -------------------------------------------------- */
  var yr = document.querySelector("[data-year]");
  if (yr) { yr.textContent = String(new Date().getFullYear()); }

  /* --- Reveal on scroll (one authored moment) ---------------------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reduce || !("IntersectionObserver" in window) || items.length === 0) {
    items.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var delay = Number(el.getAttribute("data-reveal-delay") || 0);
        setTimeout(function () { el.classList.add("is-in"); }, delay);
        io.unobserve(el);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();
