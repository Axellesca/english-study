/* ==========================================================================
   Diccionario — datos iniciales: WH Questions (A1)
   Estático puro: este archivo debe cargarse ANTES que app.js.
   Estructura extensible: cada entrada { id, term, pron?, tipo, significado,
   uso, estructura, ejemplos: [{ en, es }], errorComun, nivel }.
   Tipos iniciales: 'WH' (core) y 'HOW' (variantes con how).
   ========================================================================== */

const DICCIONARIO_ENTRIES = [
  {
    id: "what",
    term: "What",
    pron: "uat",
    tipo: "WH",
    significado: "Qué / cuál: pregunta abierta por cosas, acciones o información.",
    uso: "Pedí información general cuando hay infinitas respuestas posibles.",
    estructura: "What + do/does + sujeto + verbo…?",
    ejemplos: [
      { en: "What do you do?", es: "¿A qué te dedicás?" },
      { en: "What time is it?", es: "¿Qué hora es?" },
      { en: "What did you say?", es: "¿Qué dijiste?" }
    ],
    errorComun: "No olvides el auxiliar: ✗ “What you want?” → ✓ “What do you want?”.",
    nivel: "A1"
  },
  {
    id: "who",
    term: "Who",
    pron: "ju",
    tipo: "WH",
    significado: "Quién / quiénes: pregunta por personas (sujeto de la oración).",
    uso: "Preguntá quién hace algo; who ya es el sujeto, no necesita auxiliar.",
    estructura: "Who + verbo…? (sin do/does cuando who es sujeto)",
    ejemplos: [
      { en: "Who lives here?", es: "¿Quién vive acá?" },
      { en: "Who called you?", es: "¿Quién te llamó?" },
      { en: "Who is she?", es: "¿Quién es ella?" }
    ],
    errorComun: "Con who sujeto no va auxiliar: ✗ “Who does live here?” → ✓ “Who lives here?”.",
    nivel: "A1"
  },
  {
    id: "whom",
    term: "Whom",
    pron: "jum",
    tipo: "WH",
    significado: "A quién: forma formal de who cuando es objeto de la oración.",
    uso: "Usalo en escritura formal o después de preposición; en charla informal vale who.",
    estructura: "Whom + auxiliar + sujeto + verbo…?",
    ejemplos: [
      { en: "Whom did you invite?", es: "¿A quién invitaste?" },
      { en: "To whom should I write?", es: "¿A quién debería escribirle?" }
    ],
    errorComun: "Después de preposición en formal va whom: ✗ “To who…” → ✓ “To whom…”.",
    nivel: "A1"
  },
  {
    id: "whose",
    term: "Whose",
    pron: "jus",
    tipo: "WH",
    significado: "De quién: pregunta por posesión o pertenencia.",
    uso: "Preguntá de quién es algo, siempre seguido del objeto en cuestión.",
    estructura: "Whose + sustantivo + …?",
    ejemplos: [
      { en: "Whose bag is this?", es: "¿De quién es este bolso?" },
      { en: "Whose keys are these?", es: "¿De quién son estas llaves?" }
    ],
    errorComun: "No lo confundas con who's (= who is): ✗ “Who's bag…?” → ✓ “Whose bag…?”.",
    nivel: "A1"
  },
  {
    id: "which",
    term: "Which",
    pron: "uich",
    tipo: "WH",
    significado: "Qué / cuál: pregunta entre opciones cerradas y limitadas.",
    uso: "Elegí entre alternativas concretas; con respuestas abiertas usá what.",
    estructura: "Which + (sustantivo) + …?",
    ejemplos: [
      { en: "Which colour do you prefer, red or blue?", es: "¿Qué color preferís, rojo o azul?" },
      { en: "Which bus goes downtown?", es: "¿Qué colectivo va al centro?" }
    ],
    errorComun: "Con opciones a la vista va which: ✗ “What bus, this or that?” → ✓ “Which bus…?”.",
    nivel: "A1"
  },
  {
    id: "where",
    term: "Where",
    pron: "uer",
    tipo: "WH",
    significado: "Dónde: pregunta por lugar, ubicación u origen.",
    uso: "Ubicá personas, objetos o lugares en el espacio.",
    estructura: "Where + do/does + sujeto + verbo…?",
    ejemplos: [
      { en: "Where do you live?", es: "¿Dónde vivís?" },
      { en: "Where is the station?", es: "¿Dónde está la estación?" },
      { en: "Where are you from?", es: "¿De dónde sos?" }
    ],
    errorComun: "No olvides el auxiliar: ✗ “Where you live?” → ✓ “Where do you live?”.",
    nivel: "A1"
  },
  {
    id: "when",
    term: "When",
    pron: "uen",
    tipo: "WH",
    significado: "Cuándo: pregunta por momento, fecha u horario.",
    uso: "Ubicá acciones y eventos en el tiempo.",
    estructura: "When + do/does + sujeto + verbo…?",
    ejemplos: [
      { en: "When do you get up?", es: "¿A qué hora te levantás?" },
      { en: "When is your birthday?", es: "¿Cuándo es tu cumpleaños?" }
    ],
    errorComun: "Con verbo pleno va auxiliar: ✗ “When you arrive?” → ✓ “When do you arrive?”.",
    nivel: "A1"
  },
  {
    id: "why",
    term: "Why",
    pron: "uai",
    tipo: "WH",
    significado: "Por qué: pregunta por el motivo o la causa.",
    uso: "Pedí razones; la respuesta típica empieza con because.",
    estructura: "Why + do/does + sujeto + verbo…?",
    ejemplos: [
      { en: "Why are you late?", es: "¿Por qué llegás tarde?" },
      { en: "Why did she leave?", es: "¿Por qué se fue?" },
      { en: "Because it was raining.", es: "Porque estaba lloviendo." }
    ],
    errorComun: "Evitá el calco “for what”: ✗ “For what are you crying?” → ✓ “Why are you crying?”.",
    nivel: "A1"
  },
  {
    id: "how",
    term: "How",
    pron: "jau",
    tipo: "WH",
    significado: "Cómo: pregunta por modo, estado o medio.",
    uso: "Preguntá cómo es algo, cómo está alguien o cómo se hace.",
    estructura: "How + do/does + sujeto + verbo…?",
    ejemplos: [
      { en: "How are you?", es: "¿Cómo estás?" },
      { en: "How do you spell your name?", es: "¿Cómo se escribe tu nombre?" }
    ],
    errorComun: "Con verbo pleno va auxiliar: ✗ “How you say…?” → ✓ “How do you say…?”.",
    nivel: "A1"
  },
  {
    id: "how-much",
    term: "How much",
    pron: "jau mach",
    tipo: "HOW",
    significado: "Cuánto/a: cantidad de algo incontable, o precio.",
    uso: "Usalo con sustantivos incontables (money, sugar, time) y para preguntar precios.",
    estructura: "How much + sustantivo incontable…? / How much is/are…?",
    ejemplos: [
      { en: "How much sugar do you want?", es: "¿Cuánta azúcar querés?" },
      { en: "How much is this shirt?", es: "¿Cuánto cuesta esta remera?" },
      { en: "How much time do we have?", es: "¿Cuánto tiempo tenemos?" }
    ],
    errorComun: "Money es incontable: ✗ “How many money…?” → ✓ “How much money…?”.",
    nivel: "A1"
  },
  {
    id: "how-many",
    term: "How many",
    pron: "jau meni",
    tipo: "HOW",
    significado: "Cuántos/as: cantidad de cosas contables (en plural).",
    uso: "Usalo con sustantivos contables en plural que podés contar uno por uno.",
    estructura: "How many + sustantivo plural + …?",
    ejemplos: [
      { en: "How many brothers do you have?", es: "¿Cuántos hermanos tenés?" },
      { en: "How many people came?", es: "¿Cuánta gente vino?" }
    ],
    errorComun: "Con plural contable va many: ✗ “How much people…?” → ✓ “How many people…?”.",
    nivel: "A1"
  },
  {
    id: "how-often",
    term: "How often",
    pron: "jau often",
    tipo: "HOW",
    significado: "Cada cuánto: pregunta por la frecuencia de un hábito.",
    uso: "Preguntá cuán seguido pasa algo; la respuesta usa adverbios como always o twice a week.",
    estructura: "How often + do/does + sujeto + verbo…?",
    ejemplos: [
      { en: "How often do you exercise?", es: "¿Cada cuánto hacés ejercicio?" },
      { en: "How often does it rain here?", es: "¿Cada cuánto llueve acá?" }
    ],
    errorComun: "La pregunta abre con how often: ✗ “You how often cook?” → ✓ “How often do you cook?”.",
    nivel: "A1"
  },
  {
    id: "how-long",
    term: "How long",
    pron: "jau long",
    tipo: "HOW",
    significado: "Cuánto tiempo: pregunta por la duración de algo.",
    uso: "Medí duraciones; para algo que sigue pasando usá present perfect (have/has).",
    estructura: "How long + have/has + sujeto + participio…?",
    ejemplos: [
      { en: "How long have you lived here?", es: "¿Hace cuánto vivís acá?" },
      { en: "How long does it take?", es: "¿Cuánto tarda?" }
    ],
    errorComun: "Duración que continúa: ✗ “How long are you here?” → ✓ “How long have you been here?”.",
    nivel: "A1"
  },
  {
    id: "how-far",
    term: "How far",
    pron: "jau far",
    tipo: "HOW",
    significado: "A qué distancia / qué tan lejos: pregunta por distancia.",
    uso: "Preguntá qué tan lejos queda un lugar de otro.",
    estructura: "How far + is/are + lugar…?",
    ejemplos: [
      { en: "How far is the beach?", es: "¿A qué distancia está la playa?" },
      { en: "How far is it from here?", es: "¿Qué tan lejos queda de acá?" }
    ],
    errorComun: "Distancia se pregunta con far: ✗ “How distance is it?” → ✓ “How far is it?”.",
    nivel: "A1"
  },
  {
    id: "how-old",
    term: "How old",
    pron: "jau old",
    tipo: "HOW",
    significado: "Cuántos años: pregunta por la edad de alguien.",
    uso: "Preguntá edades con how old + be; evitá traducir literal “what is your age”.",
    estructura: "How old + is/are + sujeto…?",
    ejemplos: [
      { en: "How old are you?", es: "¿Cuántos años tenés?" },
      { en: "How old is your sister?", es: "¿Cuántos años tiene tu hermana?" },
      { en: "I'm twenty years old.", es: "Tengo veinte años." }
    ],
    errorComun: "La edad se dice con be: ✗ “I have twenty years” → ✓ “I'm twenty (years old)”.",
    nivel: "A1"
  }
];
