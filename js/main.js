/* =====================================================================
   Le Grand Atlas du Royaume de Clover — interactions
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- Icônes SVG (injectées via data-ico="nom") ---------- */
  const I = {
    pin:    '<path d="M12 21s-6.5-5.5-6.5-10A6.5 6.5 0 0 1 18.5 11C18.5 15.5 12 21 12 21Z"/><circle cx="12" cy="11" r="2.4"/>',
    anvil:  '<path d="M3 7h7v2c0 1.6 1.4 3 3 3h2l3-3 2 1-3 4H8a5 5 0 0 1-5-5V7Z"/><path d="M8 18h8M10 18v2M14 18v2"/>',
    arrow:  '<path d="M5 12h14M13 6l6 6-6 6"/>',
    gem:    '<path d="M6 3h12l3 6-9 12L3 9l3-6Z"/><path d="M3 9h18M9 3 7 9l5 12M15 3l2 6-5 12"/>',
    skull:  '<path d="M12 3a8 8 0 0 0-5 14v2.5A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5V17A8 8 0 0 0 12 3Z"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/>',
    fish:   '<path d="M3 12c4-5 11-6 16-3-1.5 1-1.5 5 0 6-5 3-12 2-16-3Z"/><path d="M3 12c-1-1-1-3 0-4M19 9.5l3-2.5v10l-3-2.5"/><circle cx="9" cy="11" r=".9"/>',
    leaf:   '<path d="M4 20C3 12 9 4 20 4c0 11-8 17-16 16Z"/><path d="M4 20C8 15 12 12 17 10"/>',
    book:   '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M19 19H6a2 2 0 0 0-2 2"/><path d="M9 7h6M9 10h6"/>',
    sparkle:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7Z"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"/><path d="m9 12 2 2 4-4"/>',
    crown:  '<path d="M3 8l3.5 3L12 5l5.5 6L21 8l-1.5 9h-15L3 8Z"/><path d="M4.5 17h15"/>',
    heart:  '<path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10Z"/>',
    users:  '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.5a3 3 0 0 1 0 5M21 20a6 6 0 0 0-4-5.6"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6"/>',
    bolt:   '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
    flame:  '<path d="M12 22c4 0 6-2.6 6-6 0-4-3-5-2-9-3 1-4 3-4 5-1-1-1-2-1-4-2 1.5-5 4-5 8 0 3.4 2 6 6 6Z"/>',
    drop:   '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>',
    snow:   '<path d="M12 2v20M4 7l16 10M20 7 4 17"/><path d="M12 6l2-2M12 6l-2-2M12 18l2 2M12 18l-2 2"/>',
    mountain:'<path d="M3 20 10 7l4 6 2-3 5 10H3Z"/><path d="m8.5 11 1.5 2"/>',
    map:    '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/>',
    scroll: '<path d="M6 4h11a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 0-2-2Z"/><path d="M5 4a2 2 0 0 0-2 2v2h4"/><path d="M11 9h5M11 12h5"/>',
    spark2: '<path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"/>',
    compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    eye:    '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>'
  };
  document.querySelectorAll("[data-ico]").forEach(function (el) {
    const name = el.getAttribute("data-ico");
    if (!I[name]) return;
    el.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
      'stroke-linecap="round" stroke-linejoin="round" width="1em" height="1em">' +
      I[name] + "</svg>";
  });

  /* ---------- Menu mobile ---------- */
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      const open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  /* ---------- Apparition au scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 70 + "ms";
    io.observe(el);
  });

  /* ---------- Filtres (chips) ---------- */
  document.querySelectorAll("[data-filter-group]").forEach(function (group) {
    const targetSel = group.getAttribute("data-target");
    const items = document.querySelectorAll(targetSel);
    group.querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        group.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-on"));
        chip.classList.add("is-on");
        const val = chip.getAttribute("data-value");
        items.forEach(function (it) {
          const cats = (it.getAttribute("data-cat") || "").split(" ");
          const show = val === "all" || cats.includes(val);
          it.classList.toggle("is-hidden", !show);
        });
      });
    });
  });

  /* ---------- Année ---------- */
  document.querySelectorAll("[data-year]").forEach(
    (el) => (el.textContent = new Date().getFullYear())
  );
})();
