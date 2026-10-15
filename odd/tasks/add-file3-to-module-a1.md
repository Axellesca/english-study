# Add File 3 (3A-3C) al módulo A1

## Objetivo
Completar el módulo A1, que hoy cubre los Files 1A–2C, agregando los Files 3A, 3B y 3C de English File Elementary 4th Edition. Solo contenido y wiring: **no se toca `style.css`**.

## Contexto
Módulo A1 = `A1/index.html` + `A1/app.js` (Files 1A–2C + RC12).
Módulo 2 = `A1/modulo2/` (Files 4A–5C + RC4 + RC5).
**El File 3 es el único File sin implementar.** Mismo patrón que el File 5 (infraestructura lista, contenido faltante).

### Temas reales del File 3 (EF4e)
Verificado contra el índice del Student Book 4e (`test.vot-tac.ru/english-file-elementary-students-book-workbook-teacher-s-guide-4th-ed/`) y el Teacher's Guide (`studylib.net/doc/27360526/...`):

| Unidad | Título del libro | Grammar | Vocabulary |
| --- | --- | --- | --- |
| 3A | Britain: the good and the bad | present simple + and – | verb phrases |
| 3B | 9 to 5 | present simple ? | jobs, telling the time |
| 3C | Love me, love my dog | word order in questions | question words |

Secuencia del libro: `... C Slow down! · Revise and Check 1&2 · A Britain: the good and the bad · B 9 to 5 · C Love me, love my dog · Practical English Episode 2 · A Family photos ...`

### Hallazgo relevante
- `grammarBankDatabase["3"]` **ya existe** y ya cubre los tres temas correctos (present simple +/-, present simple ?, word order in questions).
- `vocabularyBankDatabase` ya tiene `verbs` (verb phrases) y `jobs`.
- Faltan las categorías `questions` (question words) y `time` (telling the time).

## Specs
- **S1**: 3A, 3B y 3C existen en `lessonsDatabase` con `title`, `theory`, `vocab`, `exercises` (5 ejercicios cada una: input / choice / scramble / listening).
- **S2**: Los títulos de las lecciones usan los títulos del libro, igual que 1A–2C.
- **S3**: `progress.lessonsCompleted` y `progress.scores` incluyen 3A, 3B, 3C.
- **S4**: El roadmap de `A1/index.html` tiene 3 tarjetas `data-lesson="3A|3B|3C"` con el mismo markup que las existentes.
- **S5**: El banco de vocabulario gana `questions` y `time`, con sus botones en el HTML y su entrada en `vocabGamesCompleted`.
- **S6**: El test RC12 cubre también el File 3 (decisión del usuario: "Ampliarlo a 1-3"). Pasa de 10 a 15 preguntas.
- **S7**: `maxPossibleScore` de RC12 se deriva de `lessonsDatabase.RC12.exercises.length` en vez del número fijo 10, para que no vuelva a desincronizarse.
- **S8**: La **clave de almacenamiento `RC12` no cambia** (solo el título visible), para no perder el progreso ya guardado en localStorage.
- **S9**: Copy actualizado: meta/título/OG, tarjeta RC12, certificado, y la tarjeta del módulo en el `index.html` raíz, que hoy dicen "1A - 2C".
- **S10**: `A1/style.css` sin modificar.

## Contenido por escribir

### 3A — Britain: the good and the bad
`title: "3A: Britain: the Good and the Bad"`. Teoría:
- Afirmativo: I/you/we/they + verbo base; he/she/it + verbo + **-s**
- Ortografía de la -s: +s (work→works), +es tras ch/sh/s/x/o (watch→watches, go→goes), -ies tras consonante + y (study→studies, fly→flies)
- Negativo: **don't** + base (I/you/we/they) · **doesn't** + base (he/she/it)
- Excepción: `have` → `has` (`she has a car`)
- Marcadores: every day, usually, always, on Mondays, twice a week
- Warnings: `doesn't` + base (NO `doesn't like`) · la -s solo en afirmativo
- Pronunciación incluida: **/ɜː/ vs /ə/** (`work /wɜːk/` vs `about /əˈbaʊt/`, `first /fɜːst/` vs `again /əˈɡen/`)
- Vocab (verb phrases, verb only + full phrase): `live`, `work`, `study`, `play`, `sleep`, `cook`, `work in a bank`, `live in a small town`, `eat takeaway food`, `wear a uniform`, `speak English`

### 3B — 9 to 5
`title: "3B: 9 to 5"`. Teoría:
- Pregunta: **Do** + I/you/we/they + verbo base + ? · **Does** + he/she/it + verbo base + ? (SIN -s)
- Respuestas cortas: Yes, I do. / No, I don't. / Yes, she does. / No, she doesn't.
- Preguntas con WH-: **What/Where/When/Why + do/does + sujeto + verbo base?**
- `What time do you start?`
- Warnings: `Does she work?` NO `Does she works?` · en la respuesta corta afirmativa no hay `does` (`Yes, she does.`)
- Pronunciación incluida: **linking** — `nine to five` → /naɪn.təˈfaɪv/, `an hour and a half`
- Vocab (jobs + telling the time): `teacher`, `nurse`, `waiter`, `mechanic`, `receptionist`, `shop assistant`, `police officer`, `hairdresser`, `farmer`, `bus driver`, `o'clock`, `half past`, `quarter past`, `quarter to`, `five to`, `ten past`

### 3C — Love me, love my dog
`title: "3C: Love Me, Love My Dog"`. Teoría:
- Orden **ASI**: Auxiliar + Sujeto + Verbo → `Do you speak Spanish?`
- Orden **QUASI**: Question word + Auxiliar + Sujeto + Verbo → `Where do you live?`
- Con el verbo `be` NO hay auxiliar: `Where is she from?` / `How old are you?`
- Errores típicos: `Where you live?` ❌ · `What he does?` ❌ · el auxiliar siempre es `do/does/is/are`, nunca el verbo principal
- Vocab (question words): `What`, `Where`, `Who`, `Whose`, `When`, `Why`, `How`, `How much`, `How many`, `What time`

### RC12 extendido (10 → 15)
Renombrar el título visible a "1, 2 & 3 Revise and Check" (la clave `RC12` se mantiene, ver S8). Agregar 5 preguntas: 3 de gramática (present simple -s, negación con don't, pregunta con Do), 1 de vocabulario (job = mechanic), 1 de vocabulario (quarter past).

## Restricciones técnicas
- Shape de lección: `{ title, theory, vocab: [{english, translation, phonetic}], exercises: [...] }`.
- `choice` → `options` + `correct` (índice). `scramble` → `pool` + `correct` (array). `listening` → `speakText` + `answer`. `input` → `answer` + `placeholder`.
- `theory` es un template literal con backticks: nada de backticks sueltos ni `${` dentro.
- HTML de teoría: `theory-block`, `h3`, `table-wrapper`, `table.grammar-table`, `rule-highlight-box`, `rule-highlight-box warning`. Misma densidad visual que 1A–2C.
- Español profesional neutro en explicaciones, inglés en ejemplos. Sin voseo ni jerga en los artefactos.
- `.gitignore` no se toca.
- **No modificar `A1/style.css`.**

## Tareas
- [ ] T1 — `lessonsDatabase`: agregar 3A, 3B, 3C
- [ ] T2 — RC12: título visible, teoría y 5 preguntas nuevas
- [ ] T3 — `vocabularyBankDatabase`: categorías `questions` y `time`; `vocabGamesCompleted`
- [ ] T4 — `progress.lessonsCompleted` / `progress.scores` con 3A-3C
- [ ] T5 — `updateProgressTrackers`: derivar el máximo de RC12 + corregir el comentario de conteo
- [ ] T6 — `A1/index.html`: 3 tarjetas de roadmap, 2 botones de vocabulario, copy (meta, título, OG, RC12, certificado)
- [ ] T7 — `index.html` raíz: tarjeta del módulo A1
- [ ] T8 — Verificación

## Verificación
- `node --check A1/app.js` → PASS
- One-liner node: `lessonsDatabase` tiene 1A,1B,1C,2A,2B,2C,3A,3B,3C,RC12; `vocabularyBankDatabase` incluye `questions` y `time`; `RC12.exercises.length === 15`; cada botón `data-vocab` del HTML existe como clave en `vocabularyBankDatabase`; cada `data-lesson` del HTML existe como clave en `lessonsDatabase` y en `progress.lessonsCompleted`.
- `git diff --stat` → `A1/style.css` ausente.
- Cálculo de scoring: con todo aprobado, `accuracyRate` debe dar 100.

## Riesgo
**Risk: item 3 (contrato compartido)** — se edita `updateProgressTrackers`, que es compartido por todas las lecciones, y el cambio de máximo de RC12 altera el cálculo de accuracy de los usuarios que ya tengan progreso guardado. Mitigación: el máximo se deriva del propio dataset en vez de una constante, y la clave `RC12` no cambia.

## Estado
- [x] T1 — `lessonsDatabase` gana 3A, 3B, 3C (4 bloques de teoría, 12/14/10 vocab, 5 ejercicios c/u)
- [x] T2 — RC12: título visible "1, 2 & 3 Revise and Check", teoría ampliada, 10 → 15 preguntas. Clave `RC12` intacta (S8).
- [x] T3 — `vocabularyBankDatabase`: `questions` (12) y `time` (12); `vocabGamesCompleted` actualizado
- [x] T4 — `progress.lessonsCompleted` y `progress.scores` con 3A-3C
- [x] T5 — `updateProgressTrackers`: el máximo de RC12 se deriva de `lessonsDatabase.RC12.exercises.length`; comentario de conteo corregido (9 lecciones + 15 review + 30 grammar = 90)
- [x] T6 — `A1/index.html`: 3 tarjetas de roadmap, 2 botones de vocabulario, meta/título/OG, tarjeta RC12, certificado
- [x] T7 — `index.html` raíz: tarjeta del módulo A1 ("Elementary (1A - 3C)", 10 lecciones)
- [x] T8 — verificación

## Evidencia

**Verificación ejecutada:**
- `node --check A1/app.js` → PASS
- Script `verify-file3.js` (node, 42 aserciones) → TODO OK:
  - los 10 `data-lesson` del HTML existen en `lessonsDatabase` **y** en `progress.lessonsCompleted`
  - los 10 `data-vocab` del HTML existen en `vocabularyBankDatabase` **y** en `vocabGamesCompleted`
  - orden de tarjetas: `1A,1B,1C,2A,2B,2C,3A,3B,3C,RC12`
  - las 13 claves de `scores` resuelven
  - shape de ejercicios válido en las 10 lecciones (choice con índice en rango, scramble es permutación real, listening con `speakText`+`answer`, input con `answer`)
  - todo `phonetic` entre `/ /`
  - encoding intacto, sin caracteres CJK ni de reemplazo
  - `maxPossibleScore` = 90 (9×5 + 15 + 3×10) y con todo aprobado `accuracyRate` = 100
- `git diff --stat` → `A1/style.css` **ausente** del diff. Diseño intacto.

**Pendiente de verificación en navegador:** el recorrido visual de 3A → 3B → 3C → RC12 y las dos pestañas nuevas de vocabulario. Estructuralmente validado; falta el render real.

## Nota de compatibilidad
Ampliar el test RC12 de 10 a 15 preguntas cambia el denominador de `accuracyRate`. A un alumno que ya tenga `RC12` guardado con, por ejemplo, 8/10, su accuracy baja por el solo hecho de que ahora hay más preguntas que responder. Es inherente a extender un test ya aplicado; la clave de almacenamiento no cambió, así que el progreso previo no se borra.

## Commits
`feat(a1): add File 3 units 3A-3C and extend the review test`

Rollback: `git revert` de ese commit. No toca `Diccionario/`, que es un módulo independiente agregado en paralelo.

Nota de sincronización: al momento de commitear, `origin/main` ya había avanzado con 12 commits del módulo `Diccionario/` (`bae5421` … `91dacc9`). Ese trabajo **no** se solapa con este: los únicos archivos compartidos son `index.html` y `odd/tasks/`, y en `index.html` el diff de este trabajo toca solo la tarjeta del módulo A1 (líneas ~490-500), sin alterar la tarjeta del Diccionario.