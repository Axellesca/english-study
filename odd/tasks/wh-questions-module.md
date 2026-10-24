# ODD Feature: WH Questions Mastery Module

## Objective
Crear un módulo interactivo completo y exhaustivo dedicado al dominio total de las WH Questions en inglés: significado de cada palabra y combinación, anatomía y fórmulas estructurales (Q-A-S-M), preguntas de sujeto vs objeto, preposiciones al final (stranding), reglas para preguntar y responder naturalmente, laboratorio interactivo de construcción de oraciones, simulador de diálogos y banco de práctica con corrector explicativo.

## Why
El usuario necesita un módulo integral que enseñe todas las formas de usar las WH Questions: estructura, cómo entenderlas, cómo armarlas, cómo preguntar, cómo responder, qué significa cada cosa, todo.

## Scope
- Nuevo directorio `wh-questions/` con:
  - `index.html`: Estructura semántica, accesible (WCAG 2.2 AA), bilingüe con soporte TTS.
  - `style.css`: Warm Study Journal (Fraunces + Nunito, terracota/teal), responsive, componentes interactivos de construcción por bloques.
  - `data.js`: Base de conocimiento completa (9 WH words + How family + What combinations, 6 fórmulas maestras, subject vs object, prepositions, Q&A patterns, 12 retos de construcción interactiva, 10 diálogos situacionales, 25 ejercicios con corrector pedagógico).
  - `app.js`: Lógica de navegación entre vistas, buscador/filtrado, laboratorio interactivo con validación sintáctica de ranuras (slot builder), reproductor de pronunciación nativa (Web Speech API), comprobador de ejercicios con feedback explicativo y persistencia de progreso en `localStorage`.
- `index.html` (portal principal): Tarjeta destacada en la sección "Talleres de Especialidad / Grammar Workshop" enlazando a `wh-questions/index.html`.
- Integración visual y enlaces cruzados con `Diccionario`, `Cambridge_Grammar` y `A1`.

## Constraints
- Pure static (sin bundlers ni dependencias externas más allá de fuentes y CSS compartido).
- Cargar `data.js` antes que `app.js`.
- Respetar `css/shared-theme.css`.
- Convención de commits: Conventional Commits, sin atribución AI.
- Explicaciones pedagógicas en español claro y cálido; ejemplos y terminología técnica en inglés.

## Checklist
- [x] T1: Diseñar y documentar la arquitectura del módulo (este doc ODD).
- [x] T2: Crear `wh-questions/data.js` con todo el contenido pedagógico exhaustivo (21 fichas WH, 6 fórmulas maestras, Sujeto vs Objeto, Preposiciones al final, 12 retos interactivos, 4 diálogos, 25 ejercicios y cheat sheet).
- [x] T3: Crear `wh-questions/style.css` con diseño Warm Study Journal, responsive, bloques Q-A-S-M y paleta terracota/teal.
- [x] T4: Crear `wh-questions/index.html` con las 8 secciones interactivas.
- [x] T5: Crear `wh-questions/app.js` con interactividad, constructor visual de ranuras, audio TTS y persistencia en localStorage.
- [x] T6: Agregar tarjeta en portal `index.html` bajo Grammar Workshop.
- [x] T7: Verificación sintáctica (`node --check`), consistencia de datos y prueba funcional.
- [ ] T8: Commit de unidad de trabajo.
