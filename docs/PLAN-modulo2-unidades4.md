# Project Plan: Módulo 2 (English File Elementary 4A, 4B, 4C)

## 1. Contexto y Objetivos
Desarrollar el contenido completo del **Módulo 2** de *English File Elementary*, abarcando las unidades **4A, 4B y 4C** de forma interactiva e integral:
- **4A**: Whose is this? / Possessive 's / Family vocabulary / /ð/ sound.
- **4B**: Prepositions of time (at, in, on) and place / Daily routine vocabulary / Sentence stress.
- **4C**: Adverbs & expressions of frequency / Word order / Vowel sounds.
- **Grammar Bank 4** & **Vocabulary Bank 4** completos con ejercicios interactivos y síntesis de voz (UK/US).

---

## 2. Desglose de Tareas

### Tarea 1: Estructura HTML y Vistas (`A1/modulo2/index.html`)
- [ ] Implementar Sidebar con navegación: Dashboard, Lecciones 4A-4C, Grammar Bank 4, Vocabulary Bank 4, Fonética, Banco de Ejercicios, Certificado.
- [ ] Selectores de acento (British/American) y control de velocidad.
- [ ] Vistas y plantillas de tarjetas para lecciones y ejercicios interactivos.

### Tarea 2: Diseño y Estilos CSS (`A1/modulo2/style.css`)
- [ ] Adaptar sistema de diseño Dark Mode moderno con variables CSS, transiciones suaves y micro-animaciones.
- [ ] Estilos para tablas gramaticales, tarjetas interactivas de vocabulario, reproductores de audio y generador visual de certificado.

### Tarea 3: Base de Datos y Lógica JavaScript (`A1/modulo2/app.js`)
- [ ] Base de datos de lecciones: 4A, 4B, 4C con teoría explicada, tablas y ejemplos.
- [ ] Banco de vocabulario con transcripción fonética y pronunciación TTS con Web Speech API.
- [ ] Banco de ejercicios interactivos (selección múltiple, rellenar huecos, ordenar palabras "scramble", dictado de audio).
- [ ] Evaluador, contador de puntos, barra de progreso global persistente en `localStorage`.

### Tarea 4: Enlaces e Integración
- [ ] Añadir acceso al Módulo 2 en `A1/index.html` y en el portal principal `index.html`.

---

## 3. Asignación de Roles / Agentes
- **`project-planner`**: Planificación de alcance y estructura académica.
- **`frontend-specialist`**: Implementación de interfaz, maquetación visual y componentes.
- **`clean-code`**: Asegurar código modular, modularización limpia y sin redundancias.
- **`verify-changes`**: Verificación interactiva del portal, audio y ejercicios.
