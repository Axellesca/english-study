# Feature: Auditoría + Rediseño Frontend del Portal English File

## Objetivo
Encontrar y corregir errores del portal estático (HTML/CSS/JS vanilla) y rediseñar el frontend para que sea más lindo, coherente y amigable para aprender inglés (A1).

## Problema / Por qué
- El usuario reporta que el frontend no es atractivo ni amigable para estudiar.
- La auditoría halló bugs reales (acento de voz roto, markdown literal, HTML inválido, a11y rota).

## Alcance
- 4 vistas: portada `index.html`, `A1/`, `A1/modulo2/`, `A1/present-simple/`.
- CSS: `css/shared-theme.css` + 1 style.css por vista.
- Fixes puntuales en `A1/app.js` (acento de voz).
- NO se renombran clases/IDs que consulta JS.

## Fuerza de trabajo
- Subagentes NO disponibles en este runtime (fallo del proveedor: "free tier can only be used from within OpenCode"). Ruta: **direct inline**.
- Ruta declarada por tarea: inline (trigger de delegación no ejecutable).

## Sistema de diseño (dirección comprometida)
- Estética: **Warm Study Journal** — papel crema, tinta profunda, acentos coral/teal/oro. Cálida, legible, motivadora (no dark-mode genérico).
- Tipografía: **Fraunces** (display) + **Nunito** (body). Sin Inter/Roboto.
- Objetivo de aprendizaje: jerarquía clara, progreso visible, CTAs obvios, microcopy alentador en español.

## Checklist de tareas

### T1 — Fixes de bugs (inline)
- [x] T1.1 `A1/app.js`: acento `en-UK` → usar valor del select (`en-GB`/`en-US`) directo
- [x] T1.2 Quitar markdown `**` literal de HTML (15 lugares) → `<strong>`
- [x] T1.3 `A1/app.js` theory 2B: `**` → `<strong>`
- [x] T1.4 `present-simple/app.js`: preguntas con `**` → `<strong>` (o dejar y mostrar bien)
- [x] T1.5 HTML inválido: `<li>` sin `<ul>` en modulo2 y present-simple → envolver en `<ul>`
- [x] T1.6 Quitar atributo inválido `font-family="var(--font-title)"` (5 lugares en present-simple)
- [x] T1.7 Portal: Escape solo cierra modal si está abierto
- [x] T1.8 Enlazar PDFs huérfanos de `A1/pdfs/` en la pestaña Lecturas (o books section)

### T2 — Sistema de diseño compartido
- [x] T2.1 Reescribir `css/shared-theme.css` con tokens Warm Study Journal + componentes base (btn, card, form, focus-visible, reduced-motion)

### T3 — Portada
- [x] T3.1 Rediseñar `index.html` (hero, tarjetas de módulo, books, modal) con nueva tipografía/colores

### T4 — Módulo 1 (A1)
- [x] T4.1 Rediseñar `A1/style.css` (sidebar, cards, quiz, roadmap, cert) manteniendo clases JS
- [x] T4.2 Ajustar microcopy/HTML de `A1/index.html` donde haga falta (sin romper IDs)

### T5 — Módulo 2
- [x] T5.1 Rediseñar `A1/modulo2/style.css` con misma dirección visual (acento teal propio)

### T6 — Present Simple
- [x] T6.1 Rediseñar `A1/present-simple/style.css` + fixes de HTML de T1

### T7 — Verificación
- [x] T7.1 Sintaxis JS (`node -e new Function`) → OK en los 3 app.js
- [x] T7.2 Buscar `**` residuales, `outline: none` sin focus-visible, links rotos → 0 residuales (solo comentarios `/**`), 0 `outline:none`, 5 PDFs enlazados
- [x] T7.3 Chequeo de clases JS críticas presentes (nav-item, page-section, roadmap-card, etc.) → todas presentes en las 3 vistas

## Criterios de aceptación
- Cero markdown `**` visible en páginas. ✅
- Selector British realmente usa voz en-GB. ✅ (`selectedAccent = e.target.value === 'en-US' ? 'en-US' : 'en-GB'`)
- Focus visible en todos los controles interactivos. ✅ (`:focus-visible` en shared-theme + locales)
- HTML de nav válido (`ul/li`). ✅
- Visual coherente entre las 4 vistas con tipografía Fraunces/Nunito y paleta cálida. ✅
- Toda la navegación JS existente sigue funcionando (mismos IDs/clases). ✅

## Progreso
- [x] Auditoría completa
- [x] T1–T7
- [x] Smoke visual (browser-automation): 4 vistas, 0 console errors, 0 failed requests
- [x] Fixes post-smoke:
  - [x] `A1/modulo2/style.css`: `.page-title` gradiente blanco invisible → gradiente tinta
  - [x] `A1/index.html`: markdown `*be*` → `<em>be</em>` (roadmap 1A/1B)
  - [x] `A1/present-simple/index.html`: `*To Be*` → `<em>To Be</em>`
  - [x] `A1/present-simple/app.js`: explanation `*después*` → `después` (se muestra con innerText)
- [x] Re-verificación post-fix: título Módulo 2 legible, roadmap con itálicas reales, 4× HTTP 200, 0 console errors

## Commits (work units en `feat/warm-study-journal-redesign`)
| Commit | Unidad | Authored lines (+/-) |
|--------|--------|----------------------|
| `53a1c15` | feat(design): shared Warm Study Journal tokens (`css/shared-theme.css`) | 150 / 0 |
| `400791f` | feat(portal): redesign landing (`index.html`) | 219 / 172 |
| `a2d72d3` | feat(a1): Module 1 redesign + voice/markdown/PDF fixes | 260 / 123 |
| `82ffbaf` | feat(modulo2): Module 2 teal redesign + a11y/list fixes | 151 / 112 |
| `6b920a8` | feat(present-simple): unit redesign + content fixes | 189 / 158 |
| `59201c3` | chore: record ODD audit and redesign task checklist | docs |
| `318a96c` | chore: track agent skills and ignore codegraph | docs |
| (post-smoke) | fix(design): correct invisible module title gradient and residual markdown | ~6 / ~4 |

**Focused test:** `node -e` parse of the 3 `app.js` → OK · greps: 0 residual `**`/`*word*`, 0 white text gradients, 0 `outline:none`, 0 Inter/Outfit/Roboto, 5/5 PDFs linked.
**Runtime harness:** static multi-page site; verification = structural greps + JS parse + browser-automation smoke screenshots.
**Rollback boundary:** each commit is self-contained by module.
**Delivery:** feature total >400 authored lines — if a PR is opened later, split by work-unit commits (chained/stacked) or record maintainer `size:exception`. Push of the original 7 commits to `origin/main` completed earlier this session; this post-smoke fix commit is local pending user push confirmation.
