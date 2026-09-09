/* Ostend — Navigation, Reveal, Scroll-Spy, Footer-Jahr */
(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle__btn");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.querySelector("[data-label]").textContent = open ? "Menü" : "Schließen";
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.getAttribute("data-open") === "true") {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
        toggle.querySelector("[data-label]").textContent = "Menü";
      }
    });
  }

  /* Footer year */
  var yr = document.querySelector("[data-year]");
  if (yr) { yr.textContent = String(new Date().getFullYear()); }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Reveal on scroll */
  var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-in"); });
  } else {
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
  }

  /* Scroll-spy: highlight active chapter in the menu */
  var ids = ["start", "strategie", "investmentfokus", "portfolio", "person", "kontakt"];
  var links = {};
  ids.forEach(function (id) {
    var a = document.querySelector('#primary-nav a[href="#' + id + '"]');
    if (a) { links[id] = a; }
  });
  var sections = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    var visible = {};
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      var current = null;
      ids.forEach(function (id) { if (visible[id]) { current = id; } });
      Object.keys(links).forEach(function (id) {
        if (id === current) { links[id].setAttribute("aria-current", "page"); }
        else { links[id].removeAttribute("aria-current"); }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }
})();
