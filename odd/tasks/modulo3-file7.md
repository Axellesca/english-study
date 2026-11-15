# Módulo 3 — File 7 completo (7B, 7C, RC7 + Bank 7)

**Objetivo**: Crear el Módulo 3 (`A1/modulo3/`) con el resto del File 7 de English File Elementary 4th ed: lecciones **7B** ("Wrong name, wrong place"), **7C** ("Happy New Year?") y **RC7**, con teoría/vocab/ejercicios + Grammar/Vocabulary/Exercise Bank 7 + wiring de progreso + card en los portales.
**Branch**: `main` (precedente del repo: work-unit commits en main; push solo con autorización explícita del usuario).
**Delivery**: work-unit commits (slice-1 módulo nuevo; slice-2 portales + test; slice-3 docs). El volumen es alto porque el módulo se crea desde cero replicando el esqueleto del Módulo 2 (patrón del repo: `A1/present-simple/`, `Cambridge_Grammar/`).
**Test runner**: `node tests/structural-check.js` (extendido a los 2 módulos) + `node --check` + aserciones `node` (vm) scratch + browser-automation headless.

## Specs

- **S1**: Decisión del usuario (verbatim): "7B,7C, ETC Es el modulo siguiente, hasta aca llega el modulo 2" y luego la opción elegida "File 7 completo: 7B, 7C, RC7". Alcance: Módulo 3 nuevo con 7B + 7C + RC7; la 7A **permanece en el Módulo 2** (el Módulo 2 cierra en 7A).
- **S2**: Contenido fiel al syllabus oficial (fuentes en Log): **7B "Wrong name, wrong place"** — G: *past simple: regular verbs*; V: *past time expressions*; P: *-ed endings* (SB p.56-57). **7C "Happy New Year?"** — G: *past simple: irregular verbs*; V: *go, have, get*; P: *sentence stress* (SB p.58-59). **Grammar Bank 7** (SB p.136).
- **S3**: Teoría de 7B en 6 bloques: verbos regulares + -ed · las 4 reglas de escritura (-ed, -d, y→ied, doble consonante) · did/didn't + verbo base con + / − / ? y respuestas cortas · las 10 expresiones de tiempo pasado oficiales · pronunciación de -ed (/d/, /t/, /ɪd/) · la historia de la unidad (Adam e India / Ryanair / "Adam West" / £220) con preguntas de comprensión.
- **S4**: Teoría de 7C en 6 bloques: los 15 verbos irregulares oficiales con IPA · did/didn't con irregulares · orden **ASI** y **QuASI** · las frases **go / have / get** del Vocabulary Bank (p.160) · **can → could** · acento de frase en preguntas (What year / Where / Who / What time).
- **S5**: Vocabulario: 7B = 44 ítems (10 expresiones de tiempo + 26 verbos regulares + 8 de la historia); 7C = 59 ítems (wordlist oficial langeek subcategory 1603 + las frases del Vocabulary Bank); RC7 = 10 ítems de repaso. Todos `{english, translation, phonetic}`.
- **S6**: Ejercicios: 5 por lección con los tipos input / choice / scramble / listening y `explanation` en español. Las respuestas tipo `input` evitan contracciones con apóstrofo (el comparador del app no las normaliza).
- **S7**: Banks: `BANKS.grammar[7]` ("Grammar Bank 7 (7B-7C)", 4 bloques de teoría oficial + 10 ejercicios), `BANKS.vocab[7]` ("Vocabulary Bank 7 (7B-7C)", 3 categorías: pastTime 10 / regularVerbs 28 / goHaveGet 30), `BANKS.exercises[7]` ("Banco de Ejercicios (Unidades 7B-7C)", 2 categorías de 5 ítems).
- **S8**: `A1/modulo3/app.js` con wiring propio: `PROGRESS_GROUPS.units7 = ['7B','7C','RC7','gb7']`, `defaultProgress` con esas 4 claves, `localStorage` **propio** (`ef_modulo3_progress`), export `english-file-modulo3-progreso.json`, `flagKey = 'gb' + grammarModule`, `#progress-units7`, y 5 tarjetas fonéticas del módulo (/d/, /t/, /ɪd/, /ɒ/, ˈ).
- **S9**: `A1/modulo3/index.html` con identidad propia (logo M3, "Módulo 3 (Units 7B-7C)", enlace de vuelta al Módulo 2, certificado `EF-ELEM-MOD3-7B7C`, nav "Grammar Bank 7" / "Vocabulary Bank 7") y `style.css` con acento violeta propio (`--color-primary: #5b21b6`), para que el módulo se distinga del teal del Módulo 2.
- **S10**: Portales: card "A1 · Módulo 3" (`#card-a1-mod3`, "Elementary (7B - 7C)", "3 lecciones", "Grammar Bank 7", pill/dot violeta + hover propio) en `index.html` raíz; link "Módulo 3 (7B-7C)" en el hub `A1/index.html`; variables `--accent-violet` en `css/shared-theme.css`.
- **S11**: `tests/structural-check.js` extendido para verificar los dos módulos (mismo criterio: todo `data-lesson` del HTML existe en su LESSONS). El Módulo 2 debe seguir pasando idéntico.
- **S12**: Checks: `node tests/structural-check.js` PASS (2 módulos: 16 lecciones, 16 cards); `node --check` data.js/app.js del Módulo 3; aserciones vm de contenido y wiring (83/83); browser headless: 0 errores de consola, 0 requests fallidos, 15/15 ejercicios de lección correctos, Grammar Bank 7 = 10/10, progreso 100%, `localStorage` con 7B/7C/RC7/gb7 y **sin fuga de estado** del Módulo 2.

## Tasks

| ID | S# | Route | Status | Commit |
|----|----|-------|--------|--------|
| T1 | S2,S3 | inline | done (7B: 6 bloques, 44 vocab) | slice-1 |
| T2 | S2,S4 | inline | done (7C: 6 bloques, 59 vocab) | slice-1 |
| T3 | S5,S6 | inline | done (RC7 + 5 ejercicios por lección) | slice-1 |
| T4 | S7 | inline | done (Banks 7) | slice-1 |
| T5 | S8,S9 | inline | done (app.js + index.html + style.css propios) | slice-1 |
| T6 | S10 | inline | done (portales + tema violeta) | slice-2 |
| T7 | S11 | inline | done (structural-check para 2 módulos) | slice-2 |
| T8 | S12 | inline | done (83/83 + browser 0 errores) | slice-1/2 |

## Log

- **L1** (2026-11-15): Pedido original del usuario (verbatim): "7B,7C, ETC Es el modulo siguiente, hasta aca llega el modulo 2" → confirmación de que el Módulo 2 cierra en 7A y 7B/7C pertenecen al módulo siguiente.
- **L2** (2026-11-15) Decisión de alcance (respuesta del usuario a la pregunta de opciones): "File 7 completo: 7B, 7C, RC7".
- **L3** (2026-11-15) Fuentes oficiales verificadas. (a) `book/English File Elementary Students Book.pdf` (escaneado, sin capa de texto) → pypdf + Pillow extraen las imágenes y se leen visualmente: págs. impresas 56-57 (7B), 58-59 (7C), 136 (Grammar Bank 7) y 160 (Vocabulary Bank "go, have, get"). Offset PDF↔página impresa = +1. (b) langeek EF Elementary 4th ed, subcategory 1603 = Lesson 7C (45 entradas oficiales). (c) Grammar Bank 7 (p.136) ya leído en la sesión anterior: 7A was/were, 7B verbos regulares + did/didn't + reglas de escritura, 7C verbos irregulares + ASI/QuASI + can/could.
- **L4** (2026-11-15) Contenido oficial confirmado: 7B = "Wrong name, wrong place" (G past simple: regular verbs · V past time expressions · P -ed endings) con las 4 reglas de escritura (watch/play +ed · arrive +d · study y→ied · stop double+ed), las 10 expresiones de tiempo (yesterday morning, last night, last month, three days ago, five minutes ago, last week, last summer, the day before yesterday, a year ago, in 2017) y la regla "last week" SIN "the"; 7C = "Happy New Year?" (G past simple: irregular verbs · V go, have, get · P sentence stress) con los 15 irregulares del libro y las frases del Vocabulary Bank p.160.
- **L5** (2026-11-15) Route declaration: tarea grande (módulo nuevo). Ruta: **inline** — el "module skeleton" es una copia del patrón ya probado del Módulo 2 (repo sin build ni bundler: cada módulo es autocontenido, precedente `A1/present-simple/` y `Cambridge_Grammar/`). El contenido autorado es una sola unidad de comportamiento (File 7), sin razón de Writer trigger (no hay unidades paralelas ni backstop de contexto). Riesgo de tamaño aceptado y documentado: el 80% del diff es scaffolding replicado, no líneas autorales nuevas.
- **L6** (2026-11-15) Implementado: `A1/modulo3/` (data.js, app.js, index.html, style.css). `data.js` nuevo con LESSONS 7B/7C/RC7 + BANKS{grammar,vocab,exercises}[7]. `app.js` con storage y export propios, `units7` = 7B/7C/RC7/gb7, 5 fonemas del módulo. `index.html` reescrito con identidad propia y certificado `EF-ELEM-MOD2`→`EF-ELEM-MOD3-7B7C`. `style.css`: acento violeta (#5b21b6 / #8b5cf6) en lugar del teal del Módulo 2.
- **L7** (2026-11-15) Verificación: `node --check` OK en data.js y app.js; `node tests/structural-check.js` PASS en ambos módulos (Módulo 2 idéntico: 13 claves; Módulo 3: 3 claves); aserciones vm scratch **83/83 PASS** (contenido, wiring, HTML, portales, test). Browser headless (`http://localhost/ingles/A1/modulo3/index.html`): **0 errores de consola, 0 requests fallidos**; los 15 ejercicios de las 3 lecciones correctos; Grammar Bank 7 "Puntaje: 10 de 10"; Vocabulary Bank 7 con 3 pestañas (10 + 28 + 30 tarjetas); Banco de Ejercicios 7 con 2 pestañas; progreso "Unidades 7 = 100%"; `ef_modulo3_progress` con 7B/7C/RC7/gb7 en true y **sin** `ef_modulo2_progress` (módulos aislados). Screenshot: layout correcto con la identidad violeta del módulo.
- **L8** (2026-11-15) Nota de QA: la aserción "7C covers go/have/get phrases" falló en la primera corrida por comparar contra HTML con markup (`go <strong>out</strong>`); se corrigió el aserción (strip de tags), no el contenido. Sin cambios de contenido derivados.
- **L9** (2026-11-15) Delivery: 3 work-unit commits en `main` (slice-1 módulo nuevo `A1/modulo3/`; slice-2 portales + tema + test; slice-3 este feature doc). `.atl/skill-registry.md` queda sin commit (cache local). Sin push (solo con autorización explícita del usuario).
