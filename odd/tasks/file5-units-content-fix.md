# Fix contenido File 5 (5A–5C) — Módulo 2

## Objetivo
Alinear el contenido de las unidades 5A, 5B y 5C (y todo lo derivado: RC5, Grammar Bank 5, Vocabulary Bank 5, banco de ejercicios, textos de portada) con los temas reales del **File 5 de English File Elementary**, sin tocar el diseño.

## Problema
El módulo 2 usa la numeración del libro correctamente para 4A–4C (File 4: posesivos, preposiciones de tiempo, adverbios de frecuencia), pero el contenido de 5A–5C fue inventado y no corresponde al File 5:

| Unidad | Contenido actual (incorrecto) | Contenido real del File 5 |
| --- | --- | --- |
| 5A | Comparatives & Superlatives | **can / can't** (habilidades) — "Vote for me!" |
| 5B | Past Simple (Regular & Irregular) | **Present continuous: be + verb + -ing** — "A quiet life?" |
| 5C | Future with Going to | **Present simple or present continuous?** — "A city for all seasons" |

Consecuencia: el alumno estudia gramática que no corresponde al File 5 y el módulo se desalinea del libro/syllabus.

## Por qué
Verificado contra el contenido oficial (OUP table of contents EF4e/EF5e A1-A2 y Teacher's Guide):
- `https://www.oup.es/wp-content/uploads/2024/10/EF4e-A1A2-tabcont.pdf` → "70 A Vote for me! can / can't · verb phrases: buy a newspaper, etc. · sentence stress | 70 B A quiet life? present continuous: be + verb + -ing · noise: verbs and verb phrases /ŋ/ | 72 C A city for all seasons present simple or present continuous? · the weather and seasons"
- `https://studylib.net/doc/27787301/1-englishfile-4e-elementary-photocopiables` → "5A can / can't · 5B present continuous: be + verb + -ing · 5C present simple or present continuous?" (p.190–192)
- Vocab Bank 5: "more verb phrases; the weather". Pronunciation: "can/can't; /n/ and /ŋ/".

## Alcance autorizado
Solo contenido. **Prohibido tocar `style.css` o la estructura de `app.js`** — el diseño es lo que el usuario quiere conservar.

Archivos a modificar:
- `A1/modulo2/data.js` — `LESSONS["5A"]`, `["5B"]`, `["5C"]`, `["RC5"]`, `BANKS.grammar[5]`, `BANKS.vocab[5]`, `BANKS.exercises[5]`
- `A1/modulo2/index.html` — meta description/OG, subtítulos, tarjetas del roadmap 5A/5B/5C/RC5, texto del certificado
- `index.html` (raíz) — `card-desc` de la tarjeta "Elementary (4A - 5C)"

Fuera de alcance: 4A–4C, RC4, `style.css`, `app.js`, `Cambridge_Grammar/`, `A1/present-simple/`.

## Contenido por escribir

### 5A — can / can't (habilidades)
- `title`: "5A: can / can't (Habilidades)"
- Teoría: verbo `can` + verbo base (sin *to*); todas las personas; `can't` = `cannot`; `can` para pedir permiso (`Can I...?`) y `can` para hablar de habilidad vs. conocer/vivir; `can't` para la habilidad negativa: cero (`I can't drive`).
- Advertencia clave: **no conjuga** (`cans`, `canned` ❌), **sin *to*** (`can to swim` ❌).
- Vocab: verb phrases `buy a newspaper`, `drive a car`, `play the guitar`, `cook`, `speak three languages`, `use a computer`, `swim`, `ride a bike`, `type`, `send an email` + respuestas: `Yes, I can. / No, I can't.`
- Pronunciación incluida en teoría: *sentence stress* en frases de habilidad.
- 5 ejercicios: input / choice / scramble / listening.

### 5B — Present continuous (be + verb + -ing)
- `title`: "5B: Present Continuous (be + verbo + -ing)"
- Teoría: afirmativo `am/is/are + V-ing`; negativo `+ not`; pregunta `Am/Is/Are + sujeto + V-ing?`; contracciones (`I'm not`, `She's watching`); reglas de ortografía `-ing`: `+ing`, quitar `e` (`write→writing`), doblar consonante C+V+C (`run→running`, `swim→swimming`), `ie→y` (`lie→lying`).
- Advertencia: se usa para **ahora / esta semana / temporalmente**, NO para rutinas ni para pasado.
- Vocab: verb phrases + `noise: verbs and verb phrases`; `get up`, `have a shower`, `have breakfast`, `watch TV`, `listen to music`, `read a magazine`, `study English`, `work in an office`, `meet friends`, `clean the house`.
- Pronunciación incluida en teoría: sonido final `/ŋ/` (`running`, `swimming`, `listening`).
- 5 ejercicios.

### 5C — Present simple or present continuous?
- `title`: "5C: Present Simple or Present Continuous?"
- Teoría: tabla de contraste (uso / ejemplo / marcador temporal).
  - Simple = rutinas, hechos, horarios, opiniones → `usually`, `every day`, `on Mondays`
  - Continuous = ahora, esta semana, cambio, temporal → `now`, `at the moment`, `Look!`, `Listen!`
- Puntos clave: negación `doesn't + base` vs `isn't + V-ing`; pregunta `Do/Does` vs `Is/Are`; error típico `He is living in London` (rutina → `lives`).
- Vocab: **the weather and seasons** + `places in London`: `sunny`, `cloudy`, `rainy`, `windy`, `snowy`, `foggy`, `hot`, `cold`, `warm`, `cool`, `wet`, `dry`, `spring`, `summer`, `autumn/fall`, `winter`; `It's raining`, `It's snowing`, `The sun is shining`; `it`, `the city centre`, `the river`, `the park`, `the station`.
- 5 ejercicios.

### RC5 — Revise & Check
Repaso coherente de 5A/5B/5C (can/can't, present continuous, simple vs continuous). Conservar la forma del bloque actual.

### Banks
- `BANKS.grammar[5]`: 3 bloques (5A can/can't, 5B present continuous, 5C simple vs continuous) + 9 ejercicios etiquetados `5A.a`, `5B.a`, …
- `BANKS.vocab[5]`: 3 categorías con `key` + `label` + `data` coherentes (`abilities`, `now`/`gerund`, `weather`).
- `BANKS.exercises[5]`: 3 categorías con el shape exacto existente `{ q, opt, c }` (4 ítems cada una).

## Restricciones técnicas
- Mantener el shape exacto de datos que consume `app.js`: `theory` (HTML con `theory-block`, `table-wrapper`, `grammar-table`, `rule-highlight-box`), `vocab` (`{english, translation, phonetic}`), `exercises` (tipos `input`, `choice`, `scramble`, `listening`; `choice` usa `options` + `correct` (índice); `scramble` usa `pool` + `correct` (array)).
- No cambiar claves `key:` de `categories` sin actualizarlas también en `data`.
- Textos de artefacto en **inglés/español profesional neutro** (el proyecto ya es bilingüe así); nada de voseo ni jerga en el contenido.
- Emojis ya usados en el archivo (💡 ⚠️) — se permiten igual.
- No romper comillas: todo el `theory` va dentro de template literals con backticks.

## Tareas
- [ ] T1 — Reescribir `LESSONS["5A"]`, `["5B"]`, `["5C"]`, `["RC5"]` en `data.js`
- [ ] T2 — Reescribir `BANKS.grammar[5]`, `BANKS.vocab[5]`, `BANKS.exercises[5]` en `data.js`
- [ ] T3 — Actualizar textos de `A1/modulo2/index.html` (meta, subtítulos, roadmap 5A/5B/5C/RC5, certificado)
- [ ] T4 — Actualizar `card-desc` del módulo 2 en `index.html` raíz
- [ ] T5 — Verificar: sintaxis JS válida, sin referencias a los temas viejos, render real en navegador

## Verificación
- `node --check A1/modulo2/data.js` (si node disponible; si no, verificación en navegador)
- Búsqueda de residuales: `rg -i "comparativ|superlativ|past simple|going to" A1/modulo2 A1/../index.html` → debe dar 0 resultados (salvo menciones legítimas fuera del alcance)
- Abrir `A1/modulo2/index.html` y recorrer Lecciones 5A → 5B → 5C → RC5, Grammar Bank 5, Vocabulary Bank 5, banco de ejercicios 5: sin errores de consola, theory renderiza tablas, ejercicios se pueden responder.

## Riesgo / presupuesto
~400 líneas de contenido (aditivo sobre estructura idéntica). Se mantiene **una sola unidad de trabajo** porque el contenido de las tres unidades es acoplado y el diseño no puede fragmentarse. Heurística de 400 líneas por tarea: se supera levemente,justificado por acoplamiento de contenido; no es motivo de reescritura por tamaño.

## Rutas de ejecución
T1+T2 → delegado (writer único sobre `data.js`, archivo no trivial con ~400 líneas de contenido nuevo).
T3+T4 → delegado (mismo writer, cierre de copy en 2 HTML).
T5 → verificación en navegador.

## Estado
- [ ] T1
- [ ] T2
- [ ] T3
- [ ] T4
- [ ] T5
