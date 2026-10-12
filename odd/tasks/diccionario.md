# ODD Feature: Diccionario

## Objective
Crear un apartado Diccionario en el portal: referencia rápida de palabras importantes y estructuras gramaticales, con buscador y fichas bilingües. Contenido inicial: WH Questions.

## Why
El usuario pidió un apartado Diccionario (significados + gramática) y empezar con las WH Questions como primera entrada.

## Scope
- Nuevo módulo `Diccionario/` con `index.html`, `data.js`, `app.js`, `style.css` (patrón `Cambridge_Grammar/`).
- `index.html` portal: nueva tarjeta + sección enlazando a `Diccionario/index.html`.
- Contenido inicial `data.js`: 9 WH core (What, Who, Whom, Whose, Which, Where, When, Why, How) + variantes How (much/many/often/long/far/old) con: significado ES, uso, estructura, 2-3 ejemplos EN+ES, error común.
- Buscador en vivo + filtro por tipo (Todas / WH / How-… / Gramática / Vocabulario) + estructura extensible para futuras entradas.
- Tanda 2: artículos A/An + The (tipo ART) y 11 conectores And, But, Or, Because, So, Also, Too, Either, Then, However, Although (tipo CONN). Chips y nav Artículos/Conectores; app.js sin cambios (filtro genérico por tipo).
- Tanda 3 (13 fichas): preposiciones In/On/At (PREP), pronombres sujeto/objeto/posesivos ×4 (PRON), presente simple Do-Does/Don't-Doesn't/-s (VERB), there is-are + negación/pregunta + some-any (EXIST). Chips y nav ×4; app.js sin cambios.
- UI español rioplatense, teoría bilingüe; artefactos técnicos en inglés donde aplique.

## Constraints
- No renombrar clases/IDs críticos JS (`.nav-item`, `data-target`, `.page-section`, `[data-tab]` si se reutilizan).
- Estático puro, sin build. `data.js` antes que `app.js`. Reutilizar `css/shared-theme.css` (Warm Study Journal: Fraunces + Nunito, terracota/teal).
- No tocar diseño existente de otros módulos; solo agregar tarjeta en portal.
- Rama feature desde `main` (estamos en default branch). Un work-unit commit con Conventional Commits, sin atribución AI.

## Checklist
- [x] T1: Scaffold `Diccionario/` (index + style + data + app) navegable, 0 errores consola
- [x] T2: Datos WH Questions completos y render de ficha (significado, estructura, ejemplos, error común)
- [x] T3: Buscador + filtros + tarjeta portal `index.html` (`#card-diccionario`)
- [ ] T4: Verificación funcional + work-unit commit en rama feature
- [x] T4: Verificación parent + work-unit commit `32d1415` en `feature/diccionario`
- [x] T5: Tanda 2 — 13 fichas ART/CONN + chips/nav Artículos y Conectores en `Diccionario/index.html`
- [x] T6: Verificación + work-unit commit tanda 2 (`bae5421`)
- [x] T7: Tanda 3 — 13 fichas PREP/PRON/VERB/EXIST + 4 chips/nav + textos portal (41 fichas)
- [x] T8: Verificación + work-unit commit tanda 3 (`119d2e6`)

## Authorized scope
Archivos autorizados: `Diccionario/` (nuevo), `index.html` (solo bloque tarjeta Diccionario), `odd/tasks/diccionario.md` (este doc). Nada fuera de esto.

## Acceptance criteria
- `Diccionario/index.html` abre, buscador filtra al escribir, filtros por tipo funcionan, cada ficha muestra significado/estructura/ejemplos.
- Tarjeta portal navega al módulo.
- `node --check Diccionario/data.js` y `app.js` PASS (si node disponible); si no, apertura HTTP sin errores JS.
- Un commit work-unit en rama `feature/diccionario` con identidad registrada abajo.

## Route
Delegated direct. Trigger evidence: 4 archivos nuevos no triviales + 1 edición portal = writer trigger (2+ ficheros). Explore ya hecho inline (portal + Cambridge_Grammar + theme, batch acotado).
Tanda 2 (T5): direct inline. Trigger evidence: 3 ediciones mecánicas ya comprendidas (append data.js con schema conocido + chips/nav con patrón existente + 2 strings del portal); app.js sin cambios. Lectura previa acotada a 3 llamadas (app.js, index.html, cola de data.js).
Tanda 3 (T7): direct inline, misma evidencia (append 13 fichas + 4 chips/nav + textos; app.js intacto; 2 llamadas previas: cola de data.js + rama).

## Delivery forecast
Nuevos archivos ~700-900 líneas authored (index ~150, style ~350, data ~200, app ~150). Supera heurístico 400 por ser módulo nuevo coherente — no se divide artificialmente. Estrategia: `single-pr` (una rama feature, un work-unit commit; push/PR decisión del usuario).

## Test-first
Excepción documentada: sitio estático sin runner determinista para UI. Sin RED/GREEN aplicable. Verificación proporcional: apertura HTTP + `node --check` + smoke buscador/filtros.

## Checks
- `node --check Diccionario/data.js`
- `node --check Diccionario/app.js`
- Abrir `Diccionario/index.html` vía http://127.0.0.1/ingles/Diccionario/ y portal, 0 errores consola
- Buscar "where" filtra 1 ficha; filtro WH muestra 9+

## Progress
- 2026-10-12: doc creado, pendiente T1.
- 2026-10-12: T1-T3 implementados por writer. Evidencia: `node --check Diccionario/data.js` PASS (exit 0, sin salida); `node --check Diccionario/app.js` PASS (exit 0, sin salida); smoke de datos vía node: entries:15, WH:9, HOW:6, invalid:0, dupIds:0. T4 (rama `feature/diccionario` + work-unit commit + hash) pendiente del parent: los git actions son parent-owned y el worker no stagea/commitea.

- 2026-10-12: T4 cerrado por parent. Spot check: `node --check Diccionario/data.js` PASS, `node --check Diccionario/app.js` PASS; tarjeta `#card-diccionario` + sección "Referencia rápida" verificadas en portal. Commit work-unit `32d1415` (5 files, 838 insertions; `.atl/skill-registry.md` excluido a propósito).
- 2026-10-12: Tanda 2 implementada inline. Evidencia: `node --check Diccionario/data.js` PASS; conteo total:28 WH:9 HOW:6 ART:2 CONN:11, dupIds:0, sinCampos:0; tarjeta portal en 28 fichas. Commits `bae5421` + `d7d20ad`.
- 2026-10-12: Tanda 3 implementada inline (4 puntos juntos pedidos por el usuario). Evidencia: `node --check Diccionario/data.js` PASS; total:41 WH:9 HOW:6 ART:2 CONN:11 PREP:3 PRON:4 VERB:3 EXIST:3, dupIds:0, sinCampos:0; 4 chips + 4 nav verificados por grep; tarjeta portal en 41 fichas. T8 (commit) pendiente.

## Commits
| Commit | Message |
|--------|---------|
| 32d1415 | feat(diccionario): add Diccionario module with WH Questions + portal card |
| bae5421 | feat(diccionario): add articles and connectors batch with ART/CONN filters |
| 119d2e6 | feat(diccionario): add prepositions pronouns present-simple there-is-are batch |
