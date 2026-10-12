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
  },
  {
    id: "a-an",
    term: "A / An",
    pron: "ei / an",
    tipo: "ART",
    significado: "Un / una: artículo indefinido para nombrar algo por primera vez (singular contable).",
    uso: "Presentá algo nuevo o no específico; a antes de sonido consonante, an antes de sonido vocal.",
    estructura: "A/An + sustantivo singular contable",
    ejemplos: [
      { en: "I saw a dog.", es: "Vi un perro." },
      { en: "She is an engineer.", es: "Ella es ingeniera." }
    ],
    errorComun: "Se elige por sonido, no por letra: ✗ “a apple” → ✓ “an apple”; ✗ “an university” → ✓ “a university”.",
    nivel: "A1"
  },
  {
    id: "the",
    term: "The",
    pron: "de",
    tipo: "ART",
    significado: "El / la / los / las: artículo definido para algo ya conocido, único o claro por contexto.",
    uso: "Hablá de algo ya mencionado, único (the sun) o evidente para los dos.",
    estructura: "The + sustantivo",
    ejemplos: [
      { en: "The book is on the table.", es: "El libro está sobre la mesa." },
      { en: "I love the beach.", es: "Amo la playa." }
    ],
    errorComun: "En generalidades (plural o incontable) no lleva the: ✗ “The dogs are loyal” → ✓ “Dogs are loyal”.",
    nivel: "A1"
  },
  {
    id: "and",
    term: "And",
    pron: "and",
    tipo: "CONN",
    significado: "Y / e: suma ideas, palabras u oraciones del mismo valor.",
    uso: "Uní dos elementos; en listas la coma antes de and es opcional.",
    estructura: "Idea + and + idea",
    ejemplos: [
      { en: "I like tea and coffee.", es: "Me gustan el té y el café." },
      { en: "She sings and dances.", es: "Ella canta y baila." }
    ],
    errorComun: "Dos sujetos con and piden verbo plural: ✗ “My brother and I was there” → ✓ “My brother and I were there”.",
    nivel: "A1"
  },
  {
    id: "but",
    term: "But",
    pron: "bat",
    tipo: "CONN",
    significado: "Pero: une dos ideas opuestas o con contraste.",
    uso: "Presentá el contraste; but ya lo incluye, no lo combines con although.",
    estructura: "Idea + , + but + idea contraria",
    ejemplos: [
      { en: "It's cheap, but it's good.", es: "Es barato, pero es bueno." },
      { en: "I called, but nobody answered.", es: "Llamé, pero nadie contestó." }
    ],
    errorComun: "Elegí uno solo: ✗ “But although it rains…” → ✓ “But it rains…” o “Although it rains…”.",
    nivel: "A1"
  },
  {
    id: "or",
    term: "Or",
    pron: "or",
    tipo: "CONN",
    significado: "O / u: ofrece alternativas u opciones.",
    uso: "Presentá opciones; en preguntas con or se responde eligiendo, no con yes/no.",
    estructura: "Opción + or + opción",
    ejemplos: [
      { en: "Tea or coffee?", es: "¿Té o café?" },
      { en: "Hurry up or you'll be late.", es: "Apurate o vas a llegar tarde." }
    ],
    errorComun: "Respondé con la opción: “Tea or coffee?” ✗ “Yes” → ✓ “Coffee, please”.",
    nivel: "A1"
  },
  {
    id: "because",
    term: "Because",
    pron: "bicos",
    tipo: "CONN",
    significado: "Porque: introduce la causa o el motivo de algo.",
    uso: "Respondé a why o explicá por qué pasa algo; because une dos ideas.",
    estructura: "Oración + because + motivo",
    ejemplos: [
      { en: "I'm tired because I worked a lot.", es: "Estoy cansado porque trabajé mucho." },
      { en: "She left because it was late.", es: "Ella se fue porque era tarde." }
    ],
    errorComun: "Because no va solo como oración: ✗ “Because I was tired.” → ✓ “I stayed home because I was tired”.",
    nivel: "A1"
  },
  {
    id: "so",
    term: "So",
    pron: "sou",
    tipo: "CONN",
    significado: "Así que / entonces: marca consecuencia. Antes de adjetivo significa “tan”.",
    uso: "Uní causa y resultado; so va entre las dos ideas.",
    estructura: "Causa + , + so + consecuencia",
    ejemplos: [
      { en: "It rained, so we stayed home.", es: "Llovió, así que nos quedamos en casa." },
      { en: "I'm so happy!", es: "¡Estoy tan contento!" }
    ],
    errorComun: "So necesita el verbo: ✗ “I so tired” → ✓ “I'm so tired”.",
    nivel: "A1"
  },
  {
    id: "also",
    term: "Also",
    pron: "olsou",
    tipo: "CONN",
    significado: "También: suma información (posición media, tono neutro).",
    uso: "Agregá un dato extra; also va antes del verbo principal o después de be.",
    estructura: "Sujeto + also + verbo",
    ejemplos: [
      { en: "She also speaks French.", es: "Ella también habla francés." },
      { en: "I'm a teacher and I'm also a writer.", es: "Soy profe y también escritor." }
    ],
    errorComun: "Also no cierra la oración como too: ✗ “I like it also” → ✓ “I also like it” o “I like it too”.",
    nivel: "A1"
  },
  {
    id: "too",
    term: "Too",
    pron: "tu",
    tipo: "CONN",
    significado: "También (al final de la oración) / demasiado (antes de adjetivo o adverbio).",
    uso: "Sumá “yo también” al final; para excesos usá too + adjetivo.",
    estructura: "Oración + too. / Too + adjetivo",
    ejemplos: [
      { en: "Me too!", es: "¡Yo también!" },
      { en: "It's too cold.", es: "Hace demasiado frío." }
    ],
    errorComun: "En negaciones no va too: ✗ “I don't like it too” → ✓ “I don't like it either”.",
    nivel: "A1"
  },
  {
    id: "either",
    term: "Either",
    pron: "aider",
    tipo: "CONN",
    significado: "Tampoco (en negaciones) / o… o… (either… or… para dos opciones).",
    uso: "En frases negativas either reemplaza a too; con or ofrece dos caminos.",
    estructura: "Negación + either. / Either + A + or + B",
    ejemplos: [
      { en: "I don't like it either.", es: "A mí tampoco me gusta." },
      { en: "You can have either tea or coffee.", es: "Podés tomar o té o café." }
    ],
    errorComun: "Either… or… siempre de a pares: ✗ “You can have either tea” → ✓ “either tea or coffee”.",
    nivel: "A1"
  },
  {
    id: "then",
    term: "Then",
    pron: "den",
    tipo: "CONN",
    significado: "Después / entonces: ordena pasos en una secuencia.",
    uso: "Contá historias o instrucciones con first…, then…",
    estructura: "First… + then…",
    ejemplos: [
      { en: "First we cooked, then we ate.", es: "Primero cocinamos, después comimos." },
      { en: "I studied and then I slept.", es: "Estudié y después dormí." }
    ],
    errorComun: "Then (tiempo) no es than (comparación): ✗ “bigger then” → ✓ “bigger than”.",
    nivel: "A1"
  },
  {
    id: "however",
    term: "However",
    pron: "jauéver",
    tipo: "CONN",
    significado: "Sin embargo: marca contraste en tono formal.",
    uso: "Uní ideas opuestas al escribir; however suele ir entre comas o tras punto.",
    estructura: "Idea. However, + idea contraria.",
    ejemplos: [
      { en: "It's late. However, we can try.", es: "Es tarde. Sin embargo, podemos intentar." },
      { en: "The hotel was expensive. However, it was excellent.", es: "El hotel era caro. Sin embargo, era excelente." }
    ],
    errorComun: "However no pega dos oraciones con una coma: ✗ “…late, however we…” → ✓ “…late. However, we…”.",
    nivel: "A1"
  },
  {
    id: "although",
    term: "Although",
    pron: "oldou",
    tipo: "CONN",
    significado: "Aunque: concede un dato antes del contraste principal.",
    uso: "Presentá algo sorprendente y después lo principal; although + oración completa.",
    estructura: "Although + oración, + oración principal",
    ejemplos: [
      { en: "Although it was raining, we went out.", es: "Aunque llovía, salimos." },
      { en: "Although he's rich, he's not happy.", es: "Aunque es rico, no es feliz." }
    ],
    errorComun: "Although pide oración, no sustantivo: ✗ “Although the rain, we went” → ✓ “Although it was raining, we went”.",
    nivel: "A1"
  }
];
