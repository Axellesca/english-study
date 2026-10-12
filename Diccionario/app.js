/* ==========================================================================
   Diccionario — app.js (estático puro, sin dependencias)
   Requiere: data.js cargado ANTES (const DICCIONARIO_ENTRIES).
   Render de fichas + buscador en vivo + filtros por tipo + contador.
   ========================================================================== */

(function () {
  "use strict";

  var grid = document.getElementById("entries-grid");
  var searchInput = document.getElementById("search-input");
  var counter = document.getElementById("results-count");
  var emptyState = document.getElementById("empty-state");
  var emptyQuery = document.getElementById("empty-query");
  var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
  var navItems = Array.prototype.slice.call(document.querySelectorAll("[data-filter-link]"));

  var activeFilter = "Todas";

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function entryCard(entry) {
    var pron = entry.pron
      ? '<span class="entry-pron" title="Pronunciación aproximada">/' + esc(entry.pron) + "/</span>"
      : "";
    var examples = entry.ejemplos
      .map(function (ex) {
        return (
          '<li class="example"><span class="example-en">' + esc(ex.en) + "</span>" +
          '<span class="example-es">' + esc(ex.es) + "</span></li>"
        );
      })
      .join("");

    return (
      '<article class="entry-card" data-id="' + esc(entry.id) + '">' +
        '<header class="entry-head">' +
          '<div class="entry-title-row">' +
            '<h2 class="entry-term">' + esc(entry.term) + "</h2>" +
            pron +
          "</div>" +
          '<div class="entry-pills">' +
            '<span class="type-pill ' + (entry.tipo === "HOW" ? "how-pill" : "wh-pill") + '">' + esc(entry.tipo) + "</span>" +
            '<span class="level-tag">' + esc(entry.nivel) + "</span>" +
          "</div>" +
        "</header>" +
        '<p class="entry-meaning"><strong>Significado:</strong> ' + esc(entry.significado) + "</p>" +
        '<p class="entry-use"><strong>Uso:</strong> ' + esc(entry.uso) + "</p>" +
        '<div class="entry-structure"><span class="structure-label">Estructura</span><code>' + esc(entry.estructura) + "</code></div>" +
        '<div class="entry-examples"><span class="examples-label">Ejemplos</span><ul>' + examples + "</ul></div>" +
        '<p class="entry-warning"><span aria-hidden="true">⚠️</span> <strong>Ojo:</strong> ' + esc(entry.errorComun) + "</p>" +
      "</article>"
    );
  }

  function setFilter(value) {
    activeFilter = value;
    chips.forEach(function (chip) {
      var on = chip.getAttribute("data-filter") === value;
      chip.classList.toggle("active", on);
      chip.setAttribute("aria-pressed", on ? "true" : "false");
    });
    navItems.forEach(function (item) {
      item.classList.toggle("active", item.getAttribute("data-filter-link") === value);
    });
    applyFilters();
  }

  function applyFilters() {
    var q = searchInput.value.trim().toLowerCase();
    var total = DICCIONARIO_ENTRIES.length;
    var shown = DICCIONARIO_ENTRIES.filter(function (entry) {
      var matchesFilter = activeFilter === "Todas" || entry.tipo === activeFilter;
      if (!matchesFilter) return false;
      if (!q) return true;
      var haystack = (entry.term + " " + entry.significado + " " + entry.uso).toLowerCase();
      return haystack.indexOf(q) !== -1;
    });

    grid.innerHTML = shown.map(entryCard).join("");

    if (shown.length === 0) {
      grid.hidden = true;
      emptyState.hidden = false;
      emptyQuery.textContent = searchInput.value.trim();
      counter.textContent = "0 de " + total + " fichas";
    } else {
      grid.hidden = false;
      emptyState.hidden = true;
      counter.textContent =
        shown.length === total
          ? total + " fichas"
          : shown.length + " de " + total + " fichas";
    }
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      setFilter(chip.getAttribute("data-filter"));
    });
  });

  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      setFilter(item.getAttribute("data-filter-link"));
    });
  });

  searchInput.addEventListener("input", applyFilters);

  applyFilters();
})();
