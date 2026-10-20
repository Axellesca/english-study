# Modulo 2 — File 6 (6A/6B/6C + RC6)

**Objetivo**: Agregar File 6 completo al Módulo 2 (`A1/modulo2`): lecciones 6A, 6B, 6C y RC6 con teoría/vocab/ejercicios + Grammar/Vocabulary/Exercise Bank 6 + wiring de progreso + labels de portales.
**Branch**: `main` (patrón del repo: work-unit commits en main; push/PR solo con autorización explícita del usuario).
**Delivery**: stacked-to-main (3 slices ≈ 940 cambios); strategy precedent = commits de unidad en main como todo Módulo 1/2 previo.
**Test runner**: `node tests/structural-check.js` + `node --check` + aserciones `node -e` (vm) sobre los objetos LESSONS/BANKS.

## Specs

- **S1**: Usuario pide literal: "dentro del modulo2 agregues las lecciones del 6A 6B y 6C junto a las del 4A-5C, no solo las lecciones, si no todo el contenido de esas secciones". Alcance: LESSONS + RC6 + BANKS[6] + progreso + labels.
- **S2**: Contenido fiel al syllabus oficial English File Elementary 4th ed (fuentes verificadas en Log): 6A "A North African story" (grammar: object pronouns; vocab: words in a story; pron: /aɪ/, /ɪ/, /iː/), 6B "The third Friday in June" (grammar: like + verb -ing; vocab: ordinal numbers/the date; pron: /ð/ y /θ/ + decir fechas), 6C "Making music" (grammar: revisión be or do?; vocab: music; pron: /j/ + dar opiniones).
- **S3**: Vocabulario con listas oficiales verificadas (langeek EF wordlists): 6A = 16 story words (arrive, comfortable, decide, desert, inside, into, leave, mountain, palace, sell, strange, surprised, through, toward, valuable, village) + 7 object pronouns; 6B = ordinales 1°→31° (26 ítems: first…twenty-first, twenty-second, twenty-third, twenty-fourth, thirtieth, thirty-first) + frases de fecha; 6C = 10 instrumentos/música (accordion, bass guitar, drum, instrument, keyboard, musician, piano, saxophone, trumpet, violin) + frases (sing, dance, band, opiniones). Cada ítem `{english, translation, phonetic}`.
- **S4**: RC6 "6 Revise & Check (Unidades 6A–6C)" espeja el patrón RC4/RC5 (theory consolidada + 5 ejercicios con los 5 tipos: input, choice, input, choice/scramble, listening).
- **S5**: `BANKS.grammar[6]`, `BANKS.vocab[6]`, `BANKS.exercises[6]` replican exactamente la forma de la clave `5` (grammar: label/theory/exercises; vocab: label/categories[{key,label}]/data; exercises: label/categories/data con `{q,opt,c}`). Botones de módulo en index.html: `data-gmod="6"`, `data-vmod="6"`, `data-exmod="6"`.
- **S6**: app.js wiring: `PROGRESS_GROUPS.units6 = ['6A','6B','6C','RC6','gb6']`; `defaultProgress()` suma `"6A","6B","6C","RC6","gb6"`; `updateStatsUI()` calcula units6Pct y escribe `#progress-units6`; `nextGrammarBankQuestion` flagKey resuelve `gb6` para módulo 6; `renderPhonemes` agrega tarjetas /aɪ/ /ɪ/ /iː/ /j/.
- **S7**: Labels/copy: modulo2/index.html (meta/title/OG, sidebar "Units 4A-6C", nav "Lecciones (4A - 6C)", "Grammar Banks 4-6", "Vocabulary Banks 4-6", fila "Unidades 6", dashboard/intro/roadmap/cert texts; cert-badge "Units 4A - 6C"; código "EF-ELEM-MOD2-4A6C"; pronunciación con 4 sonidos nuevos); root index.html card `#card-a1-mod2` (título "(4A - 6C)", "12 lecciones", "Grammar Banks 4-6", desc ampliada); A1/index.html L89 "Módulo 2 (4A-6C)".
- **S8**: Checks: `node tests/structural-check.js` PASS (12 claves LESSONS); `node --check` data.js/app.js sin error; aserción vm de orden de chips `4A..5C,6A,6B,6C,RC4,RC5,RC6`; conteos vocab (sobrepasan 0 en cada categoría); sin regresiones (no se renombran clases/IDs consumidas por JS).
- **S9 (asunción)**: el libro agrupa Revise & Check 5&6, pero el módulo usa su convención de RC por file (RC4, RC5) → se aplica RC6 = repaso 6A–6C (consistente con el patrón existente del portal).

## Tasks

| ID | S# | Route | Status | Commit |
|----|----|-------|--------|--------|
| T1 | S2,S3 | inline | pending | — |
| T2 | S4 | inline | pending | — |
| T3 | S5 | inline | pending | — |
| T4 | S6 | inline | pending | — |
| T5 | S7 | inline | pending | — |
| T6 | S8 | inline | pending | — |

## Log

- **L1** (2026-10-19): Pedido original del usuario (verbatim): "dentro del modulo2 agregues las lecciones del 6A 6B y 6C junto a las del 4A-5C, no solo las lecciones, si no todo el contenido de esas secciones"
- **L2** (2026-10-19): Fuentes oficiales verificadas para File 6: KTU `https://www.ktu.edu.tr/dosyalar/ydyo_945fa.pdf` (tabla 6A/6B/6C), OUP CEFR map `EF4e-A1-A2-CEFR-Map.pdf` (títulos y grammar focus), langeek EF wordlists subcategories 1598 (6A), 1599 (6B), 1601 (6C) — vocab oficial extraído tal cual. Photocopiables EF4e (studylib) para actividades: 6A object pronouns; 6B love/like/don't mind/don't like/hate + -ing (verbs: cook, do, eat, get up, go, have, listen, live, look for, shop, sit, swim, wait, watch); 6C be or do? (Glastonbury/Proms).
- **L3** (2026-10-19): webfetch sobre PDFs OUP devuelve bytes crudos (no extrae texto) → usar websearch/langeek HTML. Decisión de orden de chips: 6A-6C insertados entre 5C y RC4; RC6 después de RC5 (unidades agrupadas, reviews al final).
- **L4** (2026-10-19): Estado de git al iniciar: main @ 11ff2be; working tree solo con `.atl/skill-registry.md` modificado (cache local, no se commitea). Estrategia delivery confirmada por precedencia del repo (commit 11ff2be etc. en main).
- **L5** (2026-10-19) RED: `node -e` aserción `"6A" exists in LESSONS` → false (FAIL esperado); structural-check baseline PASS con 8 claves. contraste: la misma aserción da true tras implementar (GREEN).
