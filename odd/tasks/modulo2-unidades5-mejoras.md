# Feature: Unidades 5A–5C + Mejoras de Sistema (Módulo 2)

## Objetivo
Agregar las lecciones 5A, 5B y 5C al Módulo 2 y aplicar las mejoras de sistema propuestas: contenido separado, bancos modulares, progreso agrupado con export/import, micro-hábitos, repaso inteligente y test estructural.

## Problema / Por qué
- El Módulo 2 solo cubre 4A–4C; el syllabus Elementary continúa con 5A–5C.
- `app.js` mezcla datos (~400 líneas) con lógica; difícil de mantener.
- Progreso plano sin % por bloque ni backup; sin señal de "qué repasar".
- Riesgo de cards rotas si `data-lesson` no existe en `lessonsDatabase`.

## Alcance
- Nuevas lecciones: **5A** (Comparatives & Superlatives), **5B** (Past Simple), **5C** (Going to) + **RC5**.
- Extraer todo el contenido a `A1/modulo2/data.js` (lecciones + bancos).
- Bancos modulares `BANKS.grammar[4|5]`, `BANKS.vocab[4|5]`, `BANKS.exercises[4|5]`.
- Progreso agrupado `units4` / `units5` + migración de localStorage legado.
- Export / import de progreso (JSON download/upload).
- Micro-hábito al completar lección (microcopy de refuerzo).
- Modo repaso inteligente (lecciones con menor % de aciertos).
- Test estructural Node: claves `data-lesson` ⊆ `lessonsDatabase`.
- Actualizar HTML: roadmap, labels, meta, sidebar, Grammar/Vocab/Exercises banks, certificado.

## Fuerza de trabajo
- Subagentes no disponibles → **direct inline**.
- Ruta declarada por tarea: inline (trigger de delegación no ejecutable).

## Checklist de tareas

### T1 — Feature doc ODD
- [x] T1.1 Crear este documento con checklist y criteria

### T2 — Contenido 5A–5C + RC5 en `data.js`
- [x] T2.1 Crear `A1/modulo2/data.js` con `LESSONS` (4A–4C, 5A–5C, RC4, RC5)
- [x] T2.2 Grammar Bank 5 (comparatives, past, going to)
- [x] T2.3 Vocabulary Bank 5 (describing, past verbs, plans)
- [x] T2.4 Exercise categories 5 (comparatives, past, goingto)

### T3 — Lógica modular en `app.js`
- [x] T3.1 Eliminar datos inline; importar de `data.js`
- [x] T3.2 Bancos modulares con selector 4/5
- [x] T3.3 Progreso agrupado units4/units5 + migración localStorage
- [x] T3.4 Export / import de progreso
- [x] T3.5 Micro-hábito al completar lección
- [x] T3.6 Repaso inteligente (menor accuracy → suggestion)

### T4 — HTML `index.html`
- [x] T4.1 Script `data.js` antes de `app.js`
- [x] T4.2 Roadmap cards 5A–5C + RC5
- [x] T4.3 Labels/meta/sidebar: Units 4A–5C
- [x] T4.4 Grammar/Vocab/Exercises banks con selector de módulo
- [x] T4.5 Botones export/import progreso + botón repaso inteligente
- [x] T4.6 Certificado: menciona 4A–5C

### T5 — Test estructural
- [x] T5.1 `tests/structural-check.js`: data-lesson ⊆ LESSONS keys

### T6 — Verificación
- [x] T6.1 `node -e` parse de `data.js` + `app.js`
- [x] T6.2 HTTP 200 en las 4 vistas
- [x] T6.3 Structural check pasa
- [x] T6.4 Smoke browser: 0 console errors, roadmap 8 cards, load 5A/5B/5C/RC5 ok, banks 4↔5 ok

## Criterios de aceptación
- Roadmap muestra 4A, 4B, 4C, 5A, 5B, 5C, RC4, RC5 (8 cards) sin cards rotas.
- Clic en 5A/5B/5C carga teoría, vocabulario y quiz correctos.
- Grammar/Vocab/Exercises banks permiten alternar módulo 4 ↔ 5.
- Progreso muestra % de Unidades 4, Unidades 5 y Total.
- Export descarga JSON; import restaura progreso.
- Al completar una lección aparece microcopy de refuerzo.
- Repaso inteligente sugiere la lección con menor accuracy.
- `node tests/structural-check.js` → exit 0.
- 0 console errors en smoke de las 4 vistas.

## Commits (work units)
| Commit | Unidad | Authored lines (+/-) |
|--------|--------|----------------------|
| (pending) | feat(modulo2): add units 5A-5C with modular data banks and progress tools | data.js ~828 new; app.js ~411/425; index.html ~118/36; style.css ~69/1; tests/structural-check + feature doc — >400 total |

**Focused test:** `node tests/structural-check.js` + JS parse + HTTP 200 + browser smoke (0 console errors).
**Runtime harness:** static site; verification = structural + smoke.
**Rollback boundary:** `data.js` nuevo; `app.js`/`index.html`/`style.css` edits reversibles por módulo.
**Delivery:** >400 authored lines — si se abre PR, encadenar por work-unit o `size:exception`.
**Route:** delegated direct no aplicable (subagentes no disponibles) → direct inline con trigger de delegación no ejecutable.
