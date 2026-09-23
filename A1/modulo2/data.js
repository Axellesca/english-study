/**
 * English File Elementary - Módulo 2
 * Contenido puro: lecciones (4A–4C, 5A–5C, RC4, RC5) + bancos modulares.
 * No contiene lógica de UI. Cargar ANTES de app.js.
 */

// ---------------------------------------------------------------------------
// LECCIONES
// ---------------------------------------------------------------------------
const LESSONS = {
  "4A": {
    title: "4A: Who's that? Whose is this?",
    module: 4,
    theory: `
      <div class="theory-block">
        <h3>1. Possessive 's (Genitivo Posesivo)</h3>
        <p>En inglés usamos <strong>'s</strong> después de una persona para indicar pertenencia (quién es el dueño o su relación familiar):</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Estructura</th><th>Ejemplo</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td>Persona singular + <strong>'s</strong></td><td>This is <strong>Sarah's</strong> bag.</td><td>Este es el bolso de Sarah.</td></tr>
              <tr><td>Persona singular + <strong>'s</strong></td><td>He is <strong>Mark's</strong> father.</td><td>Él es el padre de Mark.</td></tr>
              <tr><td>Plural regular (-s) + <strong>'</strong></td><td>These are my <strong>parents'</strong> car.</td><td>Este es el auto de mis padres.</td></tr>
              <tr><td>Plural irregular + <strong>'s</strong></td><td>Those are <strong>children's</strong> toys.</td><td>Esos son los juguetes de los niños.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ <strong>Cuidado:</strong> No confundas <em>Sarah's my sister</em> (Sarah <strong>is</strong> my sister) con <em>Sarah's husband</em> (El esposo <strong>de</strong> Sarah).
        </div>
      </div>

      <div class="theory-block">
        <h3>2. Whose...? vs. Who's...?</h3>
        <p>Ambas palabras suenan exactamente igual (/huːz/), pero tienen significados y funciones muy diferentes:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Palabra</th><th>Función</th><th>Ejemplo</th><th>Respuesta típica</th></tr></thead>
            <tbody>
              <tr><td><strong>Whose</strong></td><td>¿De quién? (Pregunta por posesión)</td><td><strong>Whose</strong> phone is this?</td><td>It's <strong>David's</strong>. / It's <strong>mine</strong>.</td></tr>
              <tr><td><strong>Who's</strong></td><td>¿Quién es / está? (Who + is / has)</td><td><strong>Who's</strong> that woman?</td><td><strong>She's</strong> our new teacher.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="theory-block">
        <h3>3. Possessive Adjectives vs. Possessive Pronouns</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Pronombre Sujeto</th><th>Adjetivo Posesivo (+ sustantivo)</th><th>Pronombre Posesivo (solo)</th></tr></thead>
            <tbody>
              <tr><td>I</td><td><strong>my</strong> book</td><td>It's <strong>mine</strong>.</td></tr>
              <tr><td>You</td><td><strong>your</strong> car</td><td>It's <strong>yours</strong>.</td></tr>
              <tr><td>He</td><td><strong>his</strong> watch</td><td>It's <strong>his</strong>.</td></tr>
              <tr><td>She</td><td><strong>her</strong> keys</td><td>They're <strong>hers</strong>.</td></tr>
              <tr><td>It</td><td><strong>its</strong> food</td><td>(rarely used alone)</td></tr>
              <tr><td>We</td><td><strong>our</strong> house</td><td>It's <strong>ours</strong>.</td></tr>
              <tr><td>They</td><td><strong>their</strong> bags</td><td>They're <strong>theirs</strong>.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    vocab: [
      { english: "mother", translation: "madre / mamá", phonetic: "/ˈmʌð.ər/" },
      { english: "father", translation: "padre / papá", phonetic: "/ˈfɑː.ðər/" },
      { english: "parents", translation: "padres (padre y madre)", phonetic: "/ˈpeə.rənts/" },
      { english: "husband", translation: "esposo / marido", phonetic: "/ˈhʌz.bənd/" },
      { english: "wife", translation: "esposa / mujer", phonetic: "/waɪf/" },
      { english: "son", translation: "hijo", phonetic: "/sʌn/" },
      { english: "daughter", translation: "hija", phonetic: "/ˈdɔː.tər/" },
      { english: "brother", translation: "hermano", phonetic: "/ˈbrʌð.ər/" },
      { english: "sister", translation: "hermana", phonetic: "/ˈsɪs.tər/" },
      { english: "grandfather", translation: "abuelo", phonetic: "/ˈɡrænˌfɑː.ðər/" },
      { english: "grandmother", translation: "abuela", phonetic: "/ˈɡrænˌmʌð.ər/" },
      { english: "uncle", translation: "tío", phonetic: "/ˈʌŋ.kl/" },
      { english: "aunt", translation: "tía", phonetic: "/ɑːnt/" },
      { english: "cousin", translation: "primo / prima", phonetic: "/ˈkʌz.n/" }
    ],
    exercises: [
      { question: "Complete with the possessive: This is Jack. That is ___ car. (Jack)", type: "input", answer: "Jack's", placeholder: "Name's", explanation: "Usamos el nombre de la persona con 's para indicar posesión: Jack's car." },
      { question: "Choose the correct word: ___ that handsome boy over there?", options: ["Whose", "Who's"], type: "choice", correct: 1, explanation: "Who's significa 'Who is' (¿Quién es ese chico?)." },
      { question: "Choose the correct word: ___ jacket is this on the chair?", options: ["Whose", "Who's"], type: "choice", correct: 0, explanation: "Whose significa '¿De quién?'." },
      { question: "Complete: She is my mother's sister. She is my ___.", type: "input", answer: "aunt", placeholder: "family member", explanation: "La hermana de tu madre es tu tía (aunt)." },
      { question: "Order the words to form a correct sentence:", pool: ["is", "Peter's", "This", "sister"], correct: ["This", "is", "Peter's", "sister"], type: "scramble", explanation: "Estructura: This is + Persona's + sustantivo." }
    ]
  },

  "4B": {
    title: "4B: Daily Routine & Prepositions of Time",
    module: 4,
    theory: `
      <div class="theory-block">
        <h3>1. Prepositions of Time: in, on, at</h3>
        <p>Reglas fundamentales de uso para indicar momentos en el tiempo:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Preposición</th><th>Cuándo se usa</th><th>Ejemplos</th></tr></thead>
            <tbody>
              <tr><td><strong>IN</strong></td><td>Partes del día, meses, años, estaciones</td><td><strong>in</strong> the morning, <strong>in</strong> the afternoon, <strong>in</strong> July, <strong>in</strong> 2026, <strong>in</strong> summer</td></tr>
              <tr><td><strong>ON</strong></td><td>Días de la semana, fechas exactas, días específicos</td><td><strong>on</strong> Monday, <strong>on</strong> Friday evening, <strong>on</strong> 15th March, <strong>on</strong> my birthday</td></tr>
              <tr><td><strong>AT</strong></td><td>Horas precisas, la noche, festivales / festivos</td><td><strong>at</strong> 7:30, <strong>at</strong> night, <strong>at</strong> midnight, <strong>at</strong> the weekend (UK), <strong>at</strong> Christmas</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 <strong>Nota cultural:</strong> En inglés británico se dice <em>at the weekend</em>; en inglés americano se prefiere <em>on the weekend</em>.
        </div>
      </div>

      <div class="theory-block">
        <h3>2. Prepositions of Place: at, in, to</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Preposición</th><th>Uso</th><th>Ejemplos</th></tr></thead>
            <tbody>
              <tr><td><strong>at</strong></td><td>Lugares específicos, eventos, casa / trabajo</td><td>at home, at work, at school, at the airport</td></tr>
              <tr><td><strong>in</strong></td><td>Dentro de espacios cerrados, ciudades, países</td><td>in bed, in London, in Spain, in a café</td></tr>
              <tr><td><strong>to</strong></td><td>Movimiento / dirección hacia un lugar</td><td>go <strong>to</strong> work, walk <strong>to</strong> school (¡Ojo: go home sin 'to'!)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    vocab: [
      { english: "wake up", translation: "despertarse", phonetic: "/weɪk ʌp/" },
      { english: "get up", translation: "levantarse de la cama", phonetic: "/ɡet ʌp/" },
      { english: "have breakfast", translation: "desayunar", phonetic: "/hæv ˈbrek.fəst/" },
      { english: "take a shower", translation: "ducharse", phonetic: "/teɪk ə ˈʃaʊ.ər/" },
      { english: "go to work", translation: "ir al trabajo", phonetic: "/ɡəʊ tuː wɜːk/" },
      { english: "have lunch", translation: "almorzar / comer", phonetic: "/hæv lʌntʃ/" },
      { english: "finish work", translation: "terminar de trabajar", phonetic: "/ˈfɪn.ɪʃ wɜːk/" },
      { english: "get home", translation: "llegar a casa", phonetic: "/ɡet həʊm/" },
      { english: "make dinner", translation: "preparar la cena", phonetic: "/meɪk ˈdɪn.ər/" },
      { english: "have dinner", translation: "cenar", phonetic: "/hæv ˈdɪn.ər/" },
      { english: "watch TV", translation: "ver la televisión", phonetic: "/wɒtʃ ˌtiːˈviː/" },
      { english: "go to bed", translation: "irse a dormir / acostarse", phonetic: "/ɡəʊ tuː bed/" }
    ],
    exercises: [
      { question: "Complete with the correct preposition: I usually get up ___ 7:00 am.", type: "input", answer: "at", placeholder: "in/on/at", explanation: "Usamos 'at' para horas exactas (at 7:00)." },
      { question: "Complete: We don't work ___ Sundays.", type: "input", answer: "on", placeholder: "in/on/at", explanation: "Usamos 'on' para días de la semana (on Sundays)." },
      { question: "Select the correct option: She loves reading ___ the evening.", options: ["at", "in", "on"], type: "choice", correct: 1, explanation: "Partes del día usan 'in' (in the morning/afternoon/evening), excepto 'at night'." },
      { question: "Order the words to describe the routine:", pool: ["shower", "takes", "He", "a", "morning", "every"], correct: ["He", "takes", "a", "shower", "every", "morning"], type: "scramble", explanation: "He takes a shower every morning." },
      { question: "Listening: Listen and type the daily activity you hear.", type: "listening", speakText: "have breakfast", answer: "have breakfast", explanation: "La frase hablada es 'have breakfast' (desayunar)." }
    ]
  },

  "4C": {
    title: "4C: Frequency Adverbs & Everyday Habits",
    module: 4,
    theory: `
      <div class="theory-block">
        <h3>1. Adverbs of Frequency (Adverbios de Frecuencia)</h3>
        <p>Indican con qué regularidad realizamos una acción:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Porcentaje</th><th>Adverbio</th><th>Traducción</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>100%</td><td><strong>always</strong></td><td>siempre</td><td>I <strong>always</strong> have coffee in the morning.</td></tr>
              <tr><td>~85%</td><td><strong>usually / normally</strong></td><td>habitualmente / normalmente</td><td>He <strong>usually</strong> finishes work at 6:00.</td></tr>
              <tr><td>~70%</td><td><strong>often</strong></td><td>a menudo / frecuentemente</td><td>They <strong>often</strong> play football.</td></tr>
              <tr><td>~50%</td><td><strong>sometimes</strong></td><td>a veces</td><td>We <strong>sometimes</strong> eat pizza for dinner.</td></tr>
              <tr><td>~15%</td><td><strong>hardly ever</strong></td><td>casi nunca</td><td>She <strong>hardly ever</strong> drinks alcohol.</td></tr>
              <tr><td>0%</td><td><strong>never</strong></td><td>nunca</td><td>I <strong>never</strong> go to bed before 11:00.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="theory-block">
        <h3>2. Word Order with Frequency Adverbs (Reglas de Posición)</h3>
        <div class="rule-highlight-box">
          <strong>Regla 1:</strong> Con verbos principales normales, el adverbio va <strong>ANTES</strong> del verbo principal.<br>
          <em>Ejemplo:</em> Subject + <strong>Adverb</strong> + Verb → I <strong>always get up</strong> early.
        </div>
        <div class="rule-highlight-box">
          <strong>Regla 2:</strong> Con el verbo <strong>be</strong> (am/is/are), el adverbio va <strong>DESPUÉS</strong> de be.<br>
          <em>Ejemplo:</em> Subject + <strong>be</strong> + Adverb → She <strong>is never</strong> late.
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ <strong>Regla 3:</strong> <em>Never</em> y <em>hardly ever</em> ya son negativos por sí mismos. No se usan con verbos en negativo (NO: <em>I don't never go</em> ❌).
        </div>
      </div>

      <div class="theory-block">
        <h3>3. Expressions of Frequency (Expresiones al final)</h3>
        <p>Expresiones como <em>every day, once a week, twice a month, three times a year</em> se colocan al <strong>final</strong> de la frase:</p>
        <p>• I go to the gym <strong>three times a week</strong>.<br>• She visits her grandparents <strong>once a month</strong>.</p>
      </div>
    `,
    vocab: [
      { english: "always", translation: "siempre (100%)", phonetic: "/ˈɔːl.weɪz/" },
      { english: "usually", translation: "habitualmente (~85%)", phonetic: "/ˈjuː.ʒu.ə.li/" },
      { english: "often", translation: "a menudo (~70%)", phonetic: "/ˈɒf.n/" },
      { english: "sometimes", translation: "a veces (~50%)", phonetic: "/ˈsʌm.taɪmz/" },
      { english: "hardly ever", translation: "casi nunca (~15%)", phonetic: "/ˌhɑːd.li ˈev.ər/" },
      { english: "never", translation: "nunca (0%)", phonetic: "/ˈnev.ər/" },
      { english: "every day", translation: "todos los días", phonetic: "/ˈev.ri deɪ/" },
      { english: "once a week", translation: "una vez por semana", phonetic: "/wʌns ə wiːk/" },
      { english: "twice a month", translation: "dos veces al mes", phonetic: "/twaɪs ə mʌnθ/" },
      { english: "three times a year", translation: "tres veces al año", phonetic: "/θriː taɪmz ə jɪər/" }
    ],
    exercises: [
      { question: "Reorder with the adverb: Mark is late for work. (never)", type: "input", answer: "Mark is never late for work", placeholder: "Sentence...", explanation: "Con el verbo 'to be', el adverbio va después: Mark is never late for work." },
      { question: "Choose the correct order: I ___ at 7:00.", options: ["get up always", "always get up", "get always up"], type: "choice", correct: 1, explanation: "El adverbio va antes del verbo principal: 'always get up'." },
      { question: "Complete: He goes to English class ___ (2 veces) a week.", type: "input", answer: "twice", placeholder: "once/twice/three times", explanation: "'Twice' significa dos veces." },
      { question: "Order the words to form a correct sentence:", pool: ["hardly", "ever", "She", "coffee", "drinks"], correct: ["She", "hardly", "ever", "drinks", "coffee"], type: "scramble", explanation: "She hardly ever drinks coffee." },
      { question: "Listening: Listen and write the adverb of frequency.", type: "listening", speakText: "usually", answer: "usually", explanation: "El adverbio pronunciado es 'usually'." }
    ]
  },

  // -------------------------------------------------------------------------
  // UNIDAD 5A — Comparatives & Superlatives
  // -------------------------------------------------------------------------
  "5A": {
    title: "5A: Comparatives & Superlatives",
    module: 5,
    theory: `
      <div class="theory-block">
        <h3>1. Comparative adjectives (Más... que)</h3>
        <p>Para comparar dos cosas usamos la forma <strong>comparativa</strong>:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Regla</th><th>Adjetivo</th><th>Comparativo</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>1 sílaba → <strong>-er</strong></td><td>tall</td><td>tall<strong>er</strong></td><td>Anna is <strong>taller than</strong> Tom.</td></tr>
              <tr><td>Consonante + vocal + consonante → dobla la final</td><td>big</td><td>big<strong>ger</strong></td><td>London is <strong>bigger than</strong> Oxford.</td></tr>
              <tr><td>Termina en -y → -ier</td><td>happy</td><td>happ<strong>ier</strong></td><td>She is <strong>happier than</strong> yesterday.</td></tr>
              <tr><td>2+ sílabas → <strong>more</strong></td><td>expensive</td><td><strong>more</strong> expensive</td><td>This phone is <strong>more expensive than</strong> mine.</td></tr>
              <tr><td>Irregulares</td><td>good / bad / far</td><td><strong>better / worse / farther</strong></td><td>Today is <strong>better than</strong> yesterday.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 Siempre usamos <strong>than</strong> después del comparativo: <em>bigger than, better than</em>.
        </div>
      </div>

      <div class="theory-block">
        <h3>2. Superlative adjectives (El más...)</h3>
        <p>Cuando comparamos <strong>tres o más</strong> usamos el <strong>superlativo</strong> con <strong>the</strong>:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Adjetivo</th><th>Superlativo</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>tall</td><td>the tall<strong>est</strong></td><td>He is <strong>the tallest</strong> boy in the class.</td></tr>
              <tr><td>big</td><td>the big<strong>gest</strong></td><td>Russia is <strong>the biggest</strong> country.</td></tr>
              <tr><td>happy</td><td>the happ<strong>iest</strong></td><td>She is <strong>the happiest</strong> girl I know.</td></tr>
              <tr><td>expensive</td><td><strong>the most</strong> expensive</td><td>It is <strong>the most expensive</strong> car.</td></tr>
              <tr><td>good / bad / far</td><td><strong>the best / worst / farthest</strong></td><td>That was <strong>the best</strong> day ever.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ No decimos <em>more taller</em> ni <em>the most tallest</em>. Solo una forma de comparación a la vez.
        </div>
      </div>

      <div class="theory-block">
        <h3>3. Irregular comparisons (Formas irregulares)</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Adjetivo</th><th>Comparativo</th><th>Superlativo</th></tr></thead>
            <tbody>
              <tr><td>good</td><td>better</td><td>the best</td></tr>
              <tr><td>bad</td><td>worse</td><td>the worst</td></tr>
              <tr><td>far</td><td>farther / further</td><td>the farthest / furthest</td></tr>
              <tr><td>little</td><td>less</td><td>the least</td></tr>
              <tr><td>many / much</td><td>more</td><td>the most</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    vocab: [
      { english: "taller", translation: "más alto", phonetic: "/ˈtɔː.lər/" },
      { english: "shorter", translation: "más bajo / más corto", phonetic: "/ˈʃɔː.tər/" },
      { english: "older", translation: "más viejo", phonetic: "/ˈəʊ.lər/" },
      { english: "younger", translation: "más joven", phonetic: "/ˈjʌŋ.ɡər/" },
      { english: "bigger", translation: "más grande", phonetic: "/ˈbɪɡ.ər/" },
      { english: "smaller", translation: "más pequeño", phonetic: "/ˈsmɔː.lər/" },
      { english: "cheaper", translation: "más barato", phonetic: "/ˈtʃiː.pər/" },
      { english: "more expensive", translation: "más caro", phonetic: "/mɔːr ɪkˈspen.sɪv/" },
      { english: "better", translation: "mejor", phonetic: "/ˈbet.ər/" },
      { english: "worse", translation: "peor", phonetic: "/wɜːs/" },
      { english: "the best", translation: "el mejor", phonetic: "/ðə best/" },
      { english: "the worst", translation: "el peor", phonetic: "/ðə wɜːst/" },
      { english: "the cheapest", translation: "el más barato", phonetic: "/ðə ˈtʃiː.pɪst/" },
      { english: "the most popular", translation: "el más popular", phonetic: "/ðə məʊst ˈpɒp.jə.lər/" }
    ],
    exercises: [
      { question: "Complete the comparative: My house is ___ (big) than yours.", type: "input", answer: "bigger", placeholder: "comparative", explanation: "Big → bigger (consonant+vowel+consonante dobla la g)." },
      { question: "Choose: This film is ___ than the last one.", options: ["good", "better", "best"], type: "choice", correct: 1, explanation: "Good es irregular: good → better (comparativo)." },
      { question: "Complete the superlative: She is ___ (happy) student in the class.", type: "input", answer: "the happiest", placeholder: "the + superlative", explanation: "Happy → the happiest (y → i + -est, con the)." },
      { question: "Choose: That was ___ weather I've ever seen!", options: ["the bad", "the worst", "worse"], type: "choice", correct: 1, explanation: "Bad es irregular: el superlativo es the worst." },
      { question: "Order the words:", pool: ["is", "the", "This", "expensive", "most", "car"], correct: ["This", "is", "the", "most", "expensive", "car"], type: "scramble", explanation: "Estructura: This is the most expensive car." }
    ]
  },

  // -------------------------------------------------------------------------
  // UNIDAD 5B — Past Simple
  // -------------------------------------------------------------------------
  "5B": {
    title: "5B: Past Simple (Regular & Irregular)",
    module: 5,
    theory: `
      <div class="theory-block">
        <h3>1. Past Simple Regular (Verbos regulares + -ed)</h3>
        <p>Para formar el pasado de verbos regulares añadimos <strong>-ed</strong>:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Base</th><th>Past (+ -ed)</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>work</td><td>work<strong>ed</strong></td><td>I <strong>worked</strong> yesterday.</td></tr>
              <tr><td>play</td><td>play<strong>ed</strong></td><td>They <strong>played</strong> football.</td></tr>
              <tr><td>watch</td><td>watch<strong>ed</strong></td><td>She <strong>watched</strong> TV.</td></tr>
              <tr><td>stop (C+V+C)</td><td>st<strong>opp</strong>ed</td><td>He <strong>stopped</strong> the car.</td></tr>
              <tr><td>study (y → ied)</td><td>stud<strong>ied</strong></td><td>We <strong>studied</strong> English.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 Pronunciación de <strong>-ed</strong>: /t/ (worked), /d/ (played), /ɪd/ (wanted, needed).
        </div>
      </div>

      <div class="theory-block">
        <h3>2. Past Simple Irregular (Verbos irregulares)</h3>
        <p>Muchos verbos comunes son irregulares y hay que memorizarlos:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Base</th><th>Past</th><th>Traducción</th></tr></thead>
            <tbody>
              <tr><td>go</td><td><strong>went</strong></td><td>fui / fue</td></tr>
              <tr><td>have</td><td><strong>had</strong></td><td>tuve</td></tr>
              <tr><td>eat</td><td><strong>ate</strong></td><td>comí</td></tr>
              <tr><td>see</td><td><strong>saw</strong></td><td>vi</td></tr>
              <tr><td>come</td><td><strong>came</strong></td><td>vine</td></tr>
              <tr><td>take</td><td><strong>took</strong></td><td>tomé</td></tr>
              <tr><td>buy</td><td><strong>bought</strong></td><td>compré</td></tr>
              <tr><td>write</td><td><strong>wrote</strong></td><td>escribí</td></tr>
              <tr><td>read</td><td><strong>read</strong> /red/</td><td>leí</td></tr>
              <tr><td>is / am</td><td><strong>was</strong></td><td>era / estaba</td></tr>
              <tr><td>are</td><td><strong>were</strong></td><td>eran / estaban</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="theory-block">
        <h3>3. Negativo y Preguntas con DID</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Forma</th><th>Estructura</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>Afirmativo</td><td>Sujeto + <strong>verbo en pasado</strong></td><td>She <strong>worked</strong> late.</td></tr>
              <tr><td>Negativo</td><td>Sujeto + <strong>didn't</strong> + base</td><td>She <strong>didn't work</strong> late.</td></tr>
              <tr><td>Pregunta</td><td><strong>Did</strong> + sujeto + base?</td><td><strong>Did</strong> she <strong>work</strong> late?</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ Con <strong>did / didn't</strong> el verbo principal queda en <strong>forma base</strong> (NO: <em>didn't worked</em> ❌).
        </div>
      </div>

      <div class="theory-block">
        <h3>4. Expresiones de tiempo (Time expressions)</h3>
        <p>El past simple suele acompañarse de expresiones como:</p>
        <p>• <strong>yesterday</strong> (ayer) · <strong>last night / week / month</strong> (la noche/semana/mes pasada)<br>
        • <strong>two days ago</strong> (hace dos días) · <strong>when I was young</strong> (cuando era joven)<br>
        • <strong>this morning</strong> (esta mañana — si ya pasó)</p>
      </div>
    `,
    vocab: [
      { english: "went", translation: "fui / fue (go)", phonetic: "/went/" },
      { english: "had", translation: "tuve / tuvo (have)", phonetic: "/hæd/" },
      { english: "ate", translation: "comí / comió (eat)", phonetic: "/et/" },
      { english: "saw", translation: "vi / vio (see)", phonetic: "/sɔː/" },
      { english: "came", translation: "vine / vino (come)", phonetic: "/keɪm/" },
      { english: "took", translation: "tomé / tomó (take)", phonetic: "/tʊk/" },
      { english: "bought", translation: "compré / compró (buy)", phonetic: "/bɔːt/" },
      { english: "wrote", translation: "escribí / escribió (write)", phonetic: "/rəʊt/" },
      { english: "yesterday", translation: "ayer", phonetic: "/ˈjes.tə.deɪ/" },
      { english: "last week", translation: "la semana pasada", phonetic: "/lɑːst wiːk/" },
      { english: "two days ago", translation: "hace dos días", phonetic: "/tuː deɪz əˈɡəʊ/" },
      { english: "worked", translation: "trabajé / trabajó (work)", phonetic: "/wɜːkt/" },
      { english: "played", translation: "jugué / jugó (play)", phonetic: "/pleɪd/" },
      { english: "didn't", translation: "no (did not)", phonetic: "/ˈdɪd.ənt/" }
    ],
    exercises: [
      { question: "Complete: Yesterday I ___ (go) to the cinema.", type: "input", answer: "went", placeholder: "past form", explanation: "Go es irregular: go → went." },
      { question: "Choose the correct form: She ___ (didn't went / didn't go) home.", options: ["didn't went", "didn't go"], type: "choice", correct: 1, explanation: "Con didn't el verbo va en base: didn't go." },
      { question: "Make negative: They played football. → They ___ football.", type: "input", answer: "didn't play", placeholder: "didn't + base", explanation: "Negativo: didn't + forma base del verbo." },
      { question: "Order the words:", pool: ["Did", "you", "buy", "milk", "?"], correct: ["Did", "you", "buy", "milk", "?"], type: "scramble", explanation: "Pregunta: Did + sujeto + verbo base + complemento + ?" },
      { question: "Listening: Listen and write the past form of 'see'.", type: "listening", speakText: "saw", answer: "saw", explanation: "See es irregular: see → saw." }
    ]
  },

  // -------------------------------------------------------------------------
  // UNIDAD 5C — Going to (future)
  // -------------------------------------------------------------------------
  "5C": {
    title: "5C: Future with Going to (Planes)",
    module: 5,
    theory: `
      <div class="theory-block">
        <h3>1. Be going to (Planes e intenciones)</h3>
        <p>Usamos <strong>am / is / are + going to + verbo</strong> para hablar de planes o intenciones futuras y de predicciones basadas en evidencia actual:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Sujeto</th><th>be</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>I</td><td><strong>am</strong></td><td>I <strong>am going to travel</strong> next summer.</td></tr>
              <tr><td>He / She / It</td><td><strong>is</strong></td><td>She <strong>is going to study</strong> medicine.</td></tr>
              <tr><td>You / We / They</td><td><strong>are</strong></td><td>We <strong>are going to move</strong> house.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 <strong>Contracciones:</strong> I'm going to · He's going to · We're going to (muy comunes en habla).
        </div>
      </div>

      <div class="theory-block">
        <h3>2. Preguntas y respuestas cortas</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Pregunta</th><th>Respuesta (+)</th><th>Respuesta (-)</th></tr></thead>
            <tbody>
              <tr><td><strong>What are you going to do</strong> tomorrow?</td><td>I<strong>'m going to visit</strong> my grandma.</td><td>I<strong>'m not going to do</strong> anything.</td></tr>
              <tr><td><strong>Is she going to come</strong> to the party?</td><td>Yes, she <strong>is</strong>.</td><td>No, she <strong>isn't</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Estructura de pregunta: <strong>Wh- + am/is/are + sujeto + going to + verbo base?</strong></p>
      </div>

      <div class="theory-block">
        <h3>3. Going to vs. Will</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Uso</th><th>Forma</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>Plan / decisión ya tomada</td><td><strong>going to</strong></td><td>I<strong>'m going to buy</strong> a new car. <em>(lo decidí)</em></td></tr>
              <tr><td>Decisión espontánea ahora</td><td><strong>will</strong></td><td>I<strong>'ll help</strong> you! <em>(decido ahora)</em></td></tr>
              <tr><td>Predicción con evidencia</td><td><strong>going to</strong></td><td>Look at those clouds! It<strong>'s going to rain</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ En el futuro con <strong>going to</strong> el verbo principal siempre queda en <strong>forma base</strong>: <em>going to eat</em> (NO: <em>going to ate</em> ❌).
        </div>
      </div>

      <div class="theory-block">
        <h3>4. Expresiones de futuro (Future time expressions)</h3>
        <p>• <strong>tomorrow</strong> (mañana) · <strong>next week / month / year</strong> (la próxima semana/mes/año)<br>
        • <strong>this weekend</strong> (este fin de semana) · <strong>in two days</strong> (en dos días)<br>
        • <strong>soon</strong> (pronto) · <strong>tonight</strong> (esta noche)</p>
      </div>
    `,
    vocab: [
      { english: "going to travel", translation: "voy a viajar", phonetic: "/ˈɡəʊ.ɪŋ tuː ˈtræv.əl/" },
      { english: "going to study", translation: "voy a estudiar", phonetic: "/ˈɡəʊ.ɪŋ tuː ˈstʌd.i/" },
      { english: "going to work", translation: "voy a trabajar", phonetic: "/ˈɡəʊ.ɪŋ tuː wɜːk/" },
      { english: "going to buy", translation: "voy a comprar", phonetic: "/ˈɡəʊ.ɪŋ tuː baɪ/" },
      { english: "going to cook", translation: "voy a cocinar", phonetic: "/ˈɡəʊ.ɪŋ tuː kʊk/" },
      { english: "going to visit", translation: "voy a visitar", phonetic: "/ˈɡəʊ.ɪŋ tuː ˈvɪz.ɪt/" },
      { english: "tomorrow", translation: "mañana", phonetic: "/təˈmɒr.əʊ/" },
      { english: "next week", translation: "la próxima semana", phonetic: "/nekst wiːk/" },
      { english: "this weekend", translation: "este fin de semana", phonetic: "/ðɪs ˌwiːkˈend/" },
      { english: "tonight", translation: "esta noche", phonetic: "/təˈnaɪt/" },
      { english: "soon", translation: "pronto", phonetic: "/suːn/" },
      { english: "in two days", translation: "en dos días", phonetic: "/ɪn tuː deɪz/" }
    ],
    exercises: [
      { question: "Complete: I ___ going to (be) a doctor when I grow up.", type: "input", answer: "am", placeholder: "am/is/are", explanation: "Con 'I' usamos 'am': I am going to be." },
      { question: "Choose: ___ she going to learn Spanish?", options: ["Is", "Are", "Am"], type: "choice", correct: 0, explanation: "Con 'she' usamos 'Is': Is she going to...?" },
      { question: "Make a question: What / you / going to / do / tomorrow → ___ ?", type: "input", answer: "What are you going to do tomorrow", placeholder: "Question...", explanation: "Estructura: Wh- + are + sujeto + going to + do + complemento?" },
      { question: "Order the words:", pool: ["going", "We're", "to", "move", "house"], correct: ["We're", "going", "to", "move", "house"], type: "scramble", explanation: "We're going to move house." },
      { question: "Listening: Listen and complete: I'm going to ___ (a new job).", type: "listening", speakText: "get", answer: "get", explanation: "La palabra es 'get': I'm going to get a new job." }
    ]
  },

  // -------------------------------------------------------------------------
  // REVIEWS
  // -------------------------------------------------------------------------
  "RC4": {
    title: "4 Revise & Check (Unidades 4A–4C)",
    module: 4,
    theory: `
      <div class="theory-block">
        <h3>Repaso Integral Unidades 4A, 4B, 4C</h3>
        <p>Has alcanzado la sección de consolidación. Aquí pondrás a prueba todo lo aprendido:</p>
        <ul>
          <li>Genitivo posesivo ('s) y preguntas con <em>Whose / Who's</em>.</li>
          <li>Miembros de la familia y adjetivos/pronombres posesivos.</li>
          <li>Preposiciones de tiempo (<em>in, on, at</em>) y rutinas diarias.</li>
          <li>Adverbios de frecuencia y su correcta colocación en la oración.</li>
        </ul>
      </div>
    `,
    vocab: [
      { english: "whose", translation: "¿de quién?", phonetic: "/huːz/" },
      { english: "cousin", translation: "primo/a", phonetic: "/ˈkʌz.n/" },
      { english: "routine", translation: "rutina", phonetic: "/ruːˈtiːn/" },
      { english: "midnight", translation: "medianoche", phonetic: "/ˈmɪd.naɪt/" },
      { english: "hardly ever", translation: "casi nunca", phonetic: "/ˌhɑːd.li ˈev.ər/" }
    ],
    exercises: [
      { question: "Who is your mother's brother? He is my ___.", type: "input", answer: "uncle", placeholder: "Word", explanation: "El hermano de tu madre es tu tío (uncle)." },
      { question: "Select correct: What time do you have dinner ___ night?", options: ["in", "on", "at"], type: "choice", correct: 2, explanation: "La expresión correcta es 'at night'." },
      { question: "Select correct: ___ coat is this? - It's Emma's.", options: ["Who's", "Whose"], type: "choice", correct: 1, explanation: "Whose significa '¿De quién es?'." },
      { question: "Reorder: We are late for the train. (never) → We ___ late for the train.", type: "input", answer: "are never", placeholder: "words", explanation: "Con el verbo be, el adverbio va después: 'are never'." },
      { question: "Complete: I brush my teeth ___ day. (todos los días)", type: "input", answer: "every", placeholder: "every/all", explanation: "'every day' significa todos los días." }
    ]
  },

  "RC5": {
    title: "5 Revise & Check (Unidades 5A–5C)",
    module: 5,
    theory: `
      <div class="theory-block">
        <h3>Repaso Integral Unidades 5A, 5B, 5C</h3>
        <p>Consolidación de todo lo aprendido en el bloque 5:</p>
        <ul>
          <li>Comparativos y superlativos (<em>bigger, the best</em>) e irregulares.</li>
          <li>Past simple regular (+ -ed) e irregular (<em>went, saw, bought</em>).</li>
          <li>Negativos y preguntas con <strong>did / didn't</strong>.</li>
          <li>Futuro con <strong>be going to</strong>: planes, predicciones y preguntas.</li>
        </ul>
      </div>
    `,
    vocab: [
      { english: "better", translation: "mejor", phonetic: "/ˈbet.ər/" },
      { english: "the worst", translation: "el peor", phonetic: "/ðə wɜːst/" },
      { english: "went", translation: "fui (go)", phonetic: "/went/" },
      { english: "bought", translation: "compré (buy)", phonetic: "/bɔːt/" },
      { english: "going to", translation: "voy a...", phonetic: "/ˈɡəʊ.ɪŋ tuː/" },
      { english: "yesterday", translation: "ayer", phonetic: "/ˈjes.tə.deɪ/" }
    ],
    exercises: [
      { question: "Complete: This bag is ___ (expensive) than that one.", type: "input", answer: "more expensive", placeholder: "comparative", explanation: "Adjetivo de 2+ sílabas: more expensive than." },
      { question: "Choose: Last night I ___ (went / go) to a restaurant.", options: ["went", "go"], type: "choice", correct: 0, explanation: "'Last night' indica pasado: went." },
      { question: "Complete negative: She ___ (didn't liked / didn't like) the film.", type: "input", answer: "didn't like", placeholder: "didn't + base", explanation: "Con didn't el verbo va en base: didn't like." },
      { question: "Select: We ___ going to paint the kitchen.", options: ["is", "are", "am"], type: "choice", correct: 1, explanation: "Con 'We' usamos 'are': We're going to..." },
      { question: "Order: the / tallest / He / is / boy", pool: ["the", "tallest", "He", "is", "boy"], correct: ["He", "is", "the", "tallest", "boy"], type: "scramble", explanation: "Superlativo con the: He is the tallest boy." }
    ]
  }
};

// ---------------------------------------------------------------------------
// BANCOS MODULARES (Grammar / Vocabulary / Exercises por módulo)
// ---------------------------------------------------------------------------
const BANKS = {
  grammar: {
    4: {
      label: "Grammar Bank 4",
      theory: `
        <div class="theory-block">
          <h3>Grammar Bank 4A: Possessive 's & Whose</h3>
          <p>• Usamos <strong>'s</strong> para posesión con personas: <em>Amy's car, my brother's house</em>.<br>
          • Con nombres terminados en -s añadimos solo apóstrofe o 's: <em>James' / James's dog</em>.<br>
          • <strong>Whose</strong> pregunta por posesión: <em>Whose keys are these?</em><br>
          • <strong>Who's</strong> = Who is / Who has: <em>Who's that girl?</em></p>
        </div>
        <div class="theory-block">
          <h3>Grammar Bank 4B: Prepositions of time & place</h3>
          <p>• <strong>at</strong>: horas (at 5:00), at night, at the weekend, at Christmas.<br>
          • <strong>in</strong>: meses (in May), años (in 2026), partes del día (in the afternoon).<br>
          • <strong>on</strong>: días (on Tuesday), fechas (on 4th July), on my birthday.<br>
          • <strong>to</strong>: movimiento hacia un destino (go to school, drive to London).</p>
        </div>
        <div class="theory-block">
          <h3>Grammar Bank 4C: Position of adverbs of frequency</h3>
          <p>• Van <strong>antes</strong> de los verbos ordinarios: <em>They often watch movies</em>.<br>
          • Van <strong>después</strong> del verbo <em>be</em>: <em>I am always happy</em>.<br>
          • En preguntas van después del sujeto: <em>Do you usually sleep well?</em><br>
          • <em>hardly ever</em> y <em>never</em> tienen valor negativo propio.</p>
        </div>
      `,
      exercises: [
        { question: "4A.a: Write the possessive: This is the phone of Luke → This is ___ phone.", type: "input", answer: "Luke's", placeholder: "Luke's", explanation: "The phone of Luke = Luke's phone." },
        { question: "4A.b: Select: (Whose / Who's) that tall man with Sarah?", options: ["Whose", "Who's"], type: "choice", correct: 1, explanation: "Who's = Who is." },
        { question: "4A.c: Are those your (parents' / parent's) suitcases? (plural)", options: ["parents'", "parent's"], type: "choice", correct: 0, explanation: "Plural regular añade sólo el apóstrofe final: parents'." },
        { question: "4B.a: Complete: The class starts ___ 9:15 am.", type: "input", answer: "at", placeholder: "in/on/at", explanation: "Horas exactas llevan 'at'." },
        { question: "4B.b: Complete: My birthday is ___ November.", type: "input", answer: "in", placeholder: "in/on/at", explanation: "Meses solos llevan 'in'." },
        { question: "4B.c: Complete: Let's meet ___ Friday afternoon.", type: "input", answer: "on", placeholder: "in/on/at", explanation: "Días específicos llevan 'on'." },
        { question: "4C.a: Order: He / finishes / early / never → He ___ early.", type: "input", answer: "never finishes", placeholder: "adverb + verb", explanation: "El adverbio va antes del verbo: never finishes." },
        { question: "4C.b: Order: Are / late / you / always / ? → Are you ___ ?", type: "input", answer: "always late", placeholder: "adverb + adj", explanation: "Con be en pregunta: Are + sujeto + adverbio + late." },
        { question: "4C.c: Complete: They eat fish three ___ a week (veces).", type: "input", answer: "times", placeholder: "word", explanation: "'three times a week' = 3 veces por semana." },
        { question: "4C.d: Select: She (is never / never is) tired after work.", options: ["is never", "never is"], type: "choice", correct: 0, explanation: "El adverbio va después de 'is'." }
      ]
    },
    5: {
      label: "Grammar Bank 5",
      theory: `
        <div class="theory-block">
          <h3>Grammar Bank 5A: Comparatives & Superlatives</h3>
          <p>• 1 sílaba → <strong>-er / -est</strong>: tall → taller → the tallest.<br>
          • C+V+C dobla la final: big → bigger → the biggest.<br>
          • 2+ sílabas → <strong>more / the most</strong>: expensive → more expensive → the most expensive.<br>
          • Irregulares: good → better → the best · bad → worse → the worst.<br>
          • Comparativo usa <strong>than</strong>; superlativo usa <strong>the</strong>.</p>
        </div>
        <div class="theory-block">
          <h3>Grammar Bank 5B: Past Simple</h3>
          <p>• Regulares: base + <strong>-ed</strong> (worked, played).<br>
          • Irregulares: go → went, see → saw, buy → bought (memorizar).<br>
          • Negativo: <strong>didn't</strong> + base (didn't go, NOT didn't went).<br>
          • Pregunta: <strong>Did</strong> + sujeto + base? (Did she work?).<br>
          • Expresiones: yesterday, last week, two days ago.</p>
        </div>
        <div class="theory-block">
          <h3>Grammar Bank 5C: Be going to</h3>
          <p>• Planes: <strong>am/is/are + going to + base</strong> (I'm going to travel).<br>
          • Pregunta: Wh- + am/is/are + sujeto + going to + base?<br>
          • going to = plan / evidencia; will = decisión espontánea.<br>
          • Contracciones: I'm, He's, We're going to...</p>
        </div>
      `,
      exercises: [
        { question: "5A.a: Complete: This book is (good) than the other one.", type: "input", answer: "better", placeholder: "better", explanation: "good → better (comparativo irregular)." },
        { question: "5A.b: Select: She is (the happy / the happiest) person here.", options: ["the happy", "the happiest"], type: "choice", correct: 1, explanation: "Superlativo: the happiest (y → i + -est)." },
        { question: "5A.c: Complete: London is (big) than Oxford.", type: "input", answer: "bigger", placeholder: "bigger", explanation: "big → bigger (doble g)." },
        { question: "5B.a: Complete: I (go) to school by bus yesterday.", type: "input", answer: "went", placeholder: "past", explanation: "go → went (irregular)." },
        { question: "5B.b: Select: He (didn't went / didn't go) home.", options: ["didn't went", "didn't go"], type: "choice", correct: 1, explanation: "didn't + base: didn't go." },
        { question: "5B.c: Complete: They (play) tennis last Sunday.", type: "input", answer: "played", placeholder: "past", explanation: "play → played (regular + -ed)." },
        { question: "5C.a: Complete: We (be) going to cook dinner tonight.", type: "input", answer: "are", placeholder: "am/is/are", explanation: "Con 'We' usamos 'are'." },
        { question: "5C.b: Select: (Is / Are) you going to come to the party?", options: ["Is", "Are"], type: "choice", correct: 1, explanation: "Con 'you' usamos 'Are'." },
        { question: "5C.c: Complete: She is going to (study) medicine.", type: "input", answer: "study", placeholder: "base form", explanation: "going to + verbo en base: going to study." }
      ]
    }
  },

  vocab: {
    4: {
      label: "Vocabulary Bank 4",
      categories: [
        { key: "family", label: "The Family" },
        { key: "routine", label: "Daily Routine" },
        { key: "frequency", label: "Frequency & Time" },
        { key: "prepositions", label: "Prepositions (Time/Place)" }
      ],
      data: {
        family: [
          { english: "mother", translation: "madre", phonetic: "/ˈmʌð.ər/" },
          { english: "father", translation: "padre", phonetic: "/ˈfɑː.ðər/" },
          { english: "son", translation: "hijo", phonetic: "/sʌn/" },
          { english: "daughter", translation: "hija", phonetic: "/ˈdɔː.tər/" },
          { english: "brother", translation: "hermano", phonetic: "/ˈbrʌð.ər/" },
          { english: "sister", translation: "hermana", phonetic: "/ˈsɪs.tər/" },
          { english: "husband", translation: "marido / esposo", phonetic: "/ˈhʌz.bənd/" },
          { english: "wife", translation: "mujer / esposa", phonetic: "/waɪf/" },
          { english: "grandfather", translation: "abuelo", phonetic: "/ˈɡrænˌfɑː.ðər/" },
          { english: "grandmother", translation: "abuela", phonetic: "/ˈɡrænˌmʌð.ər/" },
          { english: "uncle", translation: "tío", phonetic: "/ˈʌŋ.kl/" },
          { english: "aunt", translation: "tía", phonetic: "/ɑːnt/" },
          { english: "cousin", translation: "primo/a", phonetic: "/ˈkʌz.n/" },
          { english: "nephew", translation: "sobrino", phonetic: "/ˈnef.juː/" },
          { english: "niece", translation: "sobrina", phonetic: "/niːs/" }
        ],
        routine: [
          { english: "wake up", translation: "despertarse", phonetic: "/weɪk ʌp/" },
          { english: "get up", translation: "levantarse", phonetic: "/ɡet ʌp/" },
          { english: "have breakfast", translation: "desayunar", phonetic: "/hæv ˈbrek.fəst/" },
          { english: "take a shower", translation: "ducharse", phonetic: "/teɪk ə ˈʃaʊ.ər/" },
          { english: "get dressed", translation: "vestirse", phonetic: "/ɡet drest/" },
          { english: "go to work", translation: "ir al trabajo", phonetic: "/ɡəʊ tuː wɜːk/" },
          { english: "start work", translation: "empezar a trabajar", phonetic: "/stɑːt wɜːk/" },
          { english: "have lunch", translation: "almorzar", phonetic: "/hæv lʌntʃ/" },
          { english: "finish work", translation: "terminar el trabajo", phonetic: "/ˈfɪn.ɪʃ wɜːk/" },
          { english: "get home", translation: "llegar a casa", phonetic: "/ɡet həʊm/" },
          { english: "cook dinner", translation: "cocinar la cena", phonetic: "/kʊk ˈdɪn.ər/" },
          { english: "have dinner", translation: "cenar", phonetic: "/hæv ˈdɪn.ər/" },
          { english: "watch TV", translation: "ver la tele", phonetic: "/wɒtʃ ˌtiːˈviː/" },
          { english: "go to sleep", translation: "dormirse", phonetic: "/ɡəʊ tuː sliːp/" }
        ],
        frequency: [
          { english: "always", translation: "siempre (100%)", phonetic: "/ˈɔːl.weɪz/" },
          { english: "usually", translation: "habitualmente (85%)", phonetic: "/ˈjuː.ʒu.ə.li/" },
          { english: "often", translation: "a menudo (70%)", phonetic: "/ˈɒf.n/" },
          { english: "sometimes", translation: "a veces (50%)", phonetic: "/ˈsʌm.taɪmz/" },
          { english: "hardly ever", translation: "casi nunca (15%)", phonetic: "/ˌhɑːd.li ˈev.ər/" },
          { english: "never", translation: "nunca (0%)", phonetic: "/ˈnev.ər/" },
          { english: "every day", translation: "cada día", phonetic: "/ˈev.ri deɪ/" },
          { english: "once a week", translation: "una vez por semana", phonetic: "/wʌns ə wiːk/" },
          { english: "twice a week", translation: "dos veces por semana", phonetic: "/twaɪs ə wiːk/" },
          { english: "three times a month", translation: "tres veces al mes", phonetic: "/θriː taɪmz ə mʌnθ/" }
        ],
        prepositions: [
          { english: "in the morning", translation: "por la mañana", phonetic: "/ɪn ðə ˈmɔː.nɪŋ/" },
          { english: "in the evening", translation: "por la tarde/noche", phonetic: "/ɪn ðiː ˈiːv.nɪŋ/" },
          { english: "at night", translation: "de noche", phonetic: "/æt naɪt/" },
          { english: "at the weekend", translation: "el fin de semana", phonetic: "/æt ðə ˌwiːkˈend/" },
          { english: "at noon", translation: "al mediodía", phonetic: "/æt nuːn/" },
          { english: "at midnight", translation: "a medianoche", phonetic: "/æt ˈmɪd.naɪt/" },
          { english: "on Friday night", translation: "el viernes por la noche", phonetic: "/ɒn ˈfraɪ.deɪ naɪt/" },
          { english: "on weekdays", translation: "días laborables", phonetic: "/ɒn ˈwiːk.deɪz/" }
        ]
      }
    },
    5: {
      label: "Vocabulary Bank 5",
      categories: [
        { key: "describing", label: "Describing / Comparing" },
        { key: "past", label: "Past Simple Verbs" },
        { key: "plans", label: "Plans & Future" }
      ],
      data: {
        describing: [
          { english: "taller", translation: "más alto", phonetic: "/ˈtɔː.lər/" },
          { english: "shorter", translation: "más bajo", phonetic: "/ˈʃɔː.tər/" },
          { english: "older", translation: "más viejo", phonetic: "/ˈəʊ.lər/" },
          { english: "younger", translation: "más joven", phonetic: "/ˈjʌŋ.ɡər/" },
          { english: "bigger", translation: "más grande", phonetic: "/ˈbɪɡ.ər/" },
          { english: "smaller", translation: "más pequeño", phonetic: "/ˈsmɔː.lər/" },
          { english: "cheaper", translation: "más barato", phonetic: "/ˈtʃiː.pər/" },
          { english: "more expensive", translation: "más caro", phonetic: "/mɔːr ɪkˈspen.sɪv/" },
          { english: "better", translation: "mejor", phonetic: "/ˈbet.ər/" },
          { english: "worse", translation: "peor", phonetic: "/wɜːs/" },
          { english: "the best", translation: "el mejor", phonetic: "/ðə best/" },
          { english: "the worst", translation: "el peor", phonetic: "/ðə wɜːst/" },
          { english: "the cheapest", translation: "el más barato", phonetic: "/ðə ˈtʃiː.pɪst/" },
          { english: "the most popular", translation: "el más popular", phonetic: "/ðə məʊst ˈpɒp.jə.lər/" }
        ],
        past: [
          { english: "went", translation: "fui (go)", phonetic: "/went/" },
          { english: "had", translation: "tuve (have)", phonetic: "/hæd/" },
          { english: "ate", translation: "comí (eat)", phonetic: "/et/" },
          { english: "saw", translation: "vi (see)", phonetic: "/sɔː/" },
          { english: "came", translation: "vine (come)", phonetic: "/keɪm/" },
          { english: "took", translation: "tomé (take)", phonetic: "/tʊk/" },
          { english: "bought", translation: "compré (buy)", phonetic: "/bɔːt/" },
          { english: "wrote", translation: "escribí (write)", phonetic: "/rəʊt/" },
          { english: "worked", translation: "trabajé (work)", phonetic: "/wɜːkt/" },
          { english: "played", translation: "jugué (play)", phonetic: "/pleɪd/" },
          { english: "studied", translation: "estudié (study)", phonetic: "/ˈstʌd.id/" },
          { english: "didn't", translation: "no (did not)", phonetic: "/ˈdɪd.ənt/" },
          { english: "yesterday", translation: "ayer", phonetic: "/ˈjes.tə.deɪ/" },
          { english: "last week", translation: "la semana pasada", phonetic: "/lɑːst wiːk/" }
        ],
        plans: [
          { english: "going to travel", translation: "voy a viajar", phonetic: "/ˈɡəʊ.ɪŋ tuː ˈtræv.əl/" },
          { english: "going to study", translation: "voy a estudiar", phonetic: "/ˈɡəʊ.ɪŋ tuː ˈstʌd.i/" },
          { english: "going to work", translation: "voy a trabajar", phonetic: "/ˈɡəʊ.ɪŋ tuː wɜːk/" },
          { english: "going to buy", translation: "voy a comprar", phonetic: "/ˈɡəʊ.ɪŋ tuː baɪ/" },
          { english: "going to cook", translation: "voy a cocinar", phonetic: "/ˈɡəʊ.ɪŋ tuː kʊk/" },
          { english: "going to visit", translation: "voy a visitar", phonetic: "/ˈɡəʊ.ɪŋ tuː ˈvɪz.ɪt/" },
          { english: "tomorrow", translation: "mañana", phonetic: "/təˈmɒr.əʊ/" },
          { english: "next week", translation: "la próxima semana", phonetic: "/nekst wiːk/" },
          { english: "this weekend", translation: "este fin de semana", phonetic: "/ðɪs ˌwiːkˈend/" },
          { english: "tonight", translation: "esta noche", phonetic: "/təˈnaɪt/" },
          { english: "soon", translation: "pronto", phonetic: "/suːn/" },
          { english: "in two days", translation: "en dos días", phonetic: "/ɪn tuː deɪz/" }
        ]
      }
    }
  },

  exercises: {
    4: {
      label: "Banco de Ejercicios (Unidades 4)",
      categories: [
        { key: "possessives", label: "Posesivos & Whose" },
        { key: "prepositions", label: "Preposiciones de Tiempo" },
        { key: "frequency", label: "Adverbios de Frecuencia" }
      ],
      data: {
        possessives: [
          { q: "This is (Emma / Emma's) dictionary.", opt: ["Emma", "Emma's"], c: 1 },
          { q: "(Whose / Who's) keys are on the kitchen table?", opt: ["Whose", "Who's"], c: 0 },
          { q: "Is he (your sister's / your sisters') boyfriend?", opt: ["your sister's", "your sisters'"], c: 0 },
          { q: "(Who's / Whose) calling at this time of night?", opt: ["Who's", "Whose"], c: 0 }
        ],
        prepositions: [
          { q: "I usually wake up ___ 6:45 am.", opt: ["in", "on", "at"], c: 2 },
          { q: "We always go on vacation ___ August.", opt: ["in", "on", "at"], c: 0 },
          { q: "She has a piano lesson ___ Tuesdays.", opt: ["in", "on", "at"], c: 1 },
          { q: "They never go out ___ night.", opt: ["in", "on", "at"], c: 2 }
        ],
        frequency: [
          { q: "I (always get up / get up always) early on weekdays.", opt: ["always get up", "get up always"], c: 0 },
          { q: "He (is never / never is) angry.", opt: ["is never", "never is"], c: 0 },
          { q: "We (hardly ever drink / drink hardly ever) coffee.", opt: ["hardly ever drink", "drink hardly ever"], c: 0 },
          { q: "Do you (often go / go often) to the cinema?", opt: ["often go", "go often"], c: 0 }
        ]
      }
    },
    5: {
      label: "Banco de Ejercicios (Unidades 5)",
      categories: [
        { key: "comparatives", label: "Comparatives & Superlatives" },
        { key: "past", label: "Past Simple" },
        { key: "goingto", label: "Going to (Future)" }
      ],
      data: {
        comparatives: [
          { q: "My bag is (heavy / heavier / the heaviest) than yours.", opt: ["heavy", "heavier", "the heaviest"], c: 1 },
          { q: "She is (the good / the best) student in class.", opt: ["the good", "the best"], c: 1 },
          { q: "This is (more cheaper / cheaper / cheap) than that one.", opt: ["more cheaper", "cheaper", "cheap"], c: 1 },
          { q: "It was (worse / the worst / bad) day ever! (superlative)", opt: ["worse", "the worst", "bad"], c: 1 }
        ],
        past: [
          { q: "Yesterday we (go / went / gone) to the park.", opt: ["go", "went", "gone"], c: 1 },
          { q: "He (didn't watched / didn't watch) TV last night.", opt: ["didn't watched", "didn't watch"], c: 1 },
          { q: "(Did / Do) you buy the tickets?", opt: ["Did", "Do"], c: 0 },
          { q: "They (played / play) football two days ago.", opt: ["played", "play"], c: 0 }
        ],
        goingto: [
          { q: "I (am / is / are) going to cook dinner.", opt: ["am", "is", "are"], c: 0 },
          { q: "(Is / Are) they going to travel next month?", opt: ["Is", "Are"], c: 1 },
          { q: "She is going to (studying / study) at university.", opt: ["studying", "study"], c: 1 },
          { q: "We (are not / isn't) going to come tomorrow.", opt: ["are not", "isn't"], c: 0 }
        ]
      }
    }
  }
};

// Back-compat aliases (por si algo aún referencia los nombres viejos)
const lessonsDatabase = LESSONS;
const grammarBank4Database = BANKS.grammar[4];
const vocabBank4Data = BANKS.vocab[4].data;
