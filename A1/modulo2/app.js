/**
 * English File Elementary - Módulo 2 (Units 4A, 4B, 4C)
 * Logic, Datasets, Speech Synthesis, Interactive Exercises & Progress
 */

// Audio Synthesis for feedback sounds (Correct, Incorrect, Success)
const AudioSynth = {
  ctx: null,
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },
  playCorrect() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) { console.log("Audio Synth error:", e); }
  },
  playError() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.setValueAtTime(120, now + 0.1);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) { console.log("Audio Synth error:", e); }
  },
  playSuccess() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.65);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.65);
    } catch (e) { console.log("Audio Synth error:", e); }
  }
};

// DATABASE OF LESSONS 4A, 4B, 4C
const lessonsDatabase = {
  "4A": {
    title: "4A: Who's that? Whose is this?",
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

  "RC4": {
    title: "4 Revise & Check (Examen Módulo 2)",
    theory: `
      <div class="theory-block">
        <h3>Repaso Integral Módulo 2 (4A, 4B, 4C)</h3>
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
  }
};

// GRAMMAR BANK 4 DATABASE
const grammarBank4Database = {
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
};

// VOCABULARY CATEGORIES DATABASE (Vocabulary Bank 4)
const vocabBank4Data = {
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
};

// MASTER APP OBJECT
const app = {
  state: {
    activePage: 'dashboard-page',
    activeLesson: '4A',
    lessonTab: 'lesson-theory',
    lessonQuizIndex: 0,
    lessonQuizScore: 0,
    grammarQuizIndex: 0,
    grammarQuizScore: 0,
    selectedVocabCat: 'family',
    vocabMode: 'list',
    vocabCardIndex: 0,
    matchingSelection: null,
    matchingAttempts: 0,
    matchingErrors: 0,
    voiceAccent: 'en-GB',
    voiceSpeed: 0.9,
    exerciseCategory: 'possessives',
    userScore: 0,
    progress: {
      "4A": false,
      "4B": false,
      "4C": false,
      "RC4": false,
      "gb4": false
    }
  },

  init() {
    this.loadPersistedProgress();
    this.setupEventListeners();
    this.updateStatsUI();
    this.renderRoadmap();
    this.loadLesson('4A');
    this.loadGrammarBank();
    this.selectVocabularyBank('family');
    this.renderPhonemes();
    this.selectExerciseCategory('possessives');
  },

  loadPersistedProgress() {
    try {
      const saved = localStorage.getItem('ef_modulo2_progress');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state.progress = parsed.progress || this.state.progress;
        this.state.userScore = parsed.score || 0;
      }
    } catch(e) { console.warn("Could not load progress", e); }
  },

  saveProgress() {
    try {
      localStorage.setItem('ef_modulo2_progress', JSON.stringify({
        progress: this.state.progress,
        score: this.state.userScore
      }));
    } catch(e) { console.warn("Could not save progress", e); }
  },

  setupEventListeners() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        if (target) this.navigateTo(target);
      });
    });

    const accentSel = document.getElementById('voice-accent-selector');
    if (accentSel) {
      accentSel.addEventListener('change', (e) => {
        this.state.voiceAccent = e.target.value;
      });
    }

    const speedSlider = document.getElementById('voice-speed-slider');
    if (speedSlider) {
      speedSlider.addEventListener('input', (e) => {
        this.state.voiceSpeed = parseFloat(e.target.value);
      });
    }
  },

  navigateTo(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));

    const page = document.getElementById(pageId);
    if (page) page.classList.add('active');

    const nav = document.querySelector(`.nav-item[data-target="${pageId}"]`);
    if (nav) nav.classList.add('active');

    this.state.activePage = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (pageId === 'certificate-page') {
      this.renderCertificateStatus();
    }
  },

  speakText(text) {
    if (!('speechSynthesis' in window)) {
      alert("Tu navegador no soporta síntesis de voz.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this.state.voiceAccent;
    utterance.rate = this.state.voiceSpeed;
    window.speechSynthesis.speak(utterance);
  },

  updateStatsUI() {
    const totalItems = Object.keys(this.state.progress).length;
    const completedItems = Object.values(this.state.progress).filter(Boolean).length;
    const percentage = Math.round((completedItems / totalItems) * 100);

    const fillBar = document.getElementById('overall-progress-fill');
    if (fillBar) fillBar.style.width = percentage + '%';

    const textVal = document.getElementById('overall-progress-text');
    if (textVal) textVal.innerText = percentage + '%';

    const dashText = document.getElementById('dashboard-percentage');
    if (dashText) dashText.textContent = percentage + '%';

    const dashCircle = document.getElementById('circle-progress');
    if (dashCircle) dashCircle.setAttribute('stroke-dasharray', `${percentage}, 100`);

    const scoreCount = document.getElementById('score-counter');
    if (scoreCount) scoreCount.innerText = this.state.userScore;

    const accCount = document.getElementById('accuracy-counter');
    if (accCount) accCount.innerText = percentage + '%';

    this.saveProgress();
  },

  renderRoadmap() {
    document.querySelectorAll('.roadmap-card').forEach(card => {
      const lessonKey = card.getAttribute('data-lesson');
      const statusSpan = card.querySelector('.status-indicator');
      if (statusSpan && this.state.progress[lessonKey]) {
        statusSpan.classList.add('completed');
        statusSpan.innerHTML = "✓ Completado";
      }
    });
  },

  loadLesson(lessonKey) {
    const data = lessonsDatabase[lessonKey];
    if (!data) return;

    this.state.activeLesson = lessonKey;
    this.state.lessonQuizIndex = 0;
    this.state.lessonQuizScore = 0;

    const titleEl = document.getElementById('active-lesson-title');
    if (titleEl) titleEl.innerText = data.title;

    // Render Theory
    const theoryEl = document.getElementById('lesson-theory');
    if (theoryEl) theoryEl.innerHTML = data.theory;

    // Render Vocab
    const vocabEl = document.getElementById('lesson-vocab');
    if (vocabEl) {
      let html = '<div class="vocab-grid">';
      data.vocab.forEach(v => {
        html += `
          <div class="vocab-card">
            <div class="vocab-info">
              <span class="vocab-english">${v.english}</span>
              <span class="vocab-trans">${v.translation}</span>
              <span class="vocab-phonetic">${v.phonetic}</span>
            </div>
            <button class="speaker-btn" onclick="app.speakText('${v.english.replace(/'/g, "\\'")}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            </button>
          </div>
        `;
      });
      html += '</div>';
      vocabEl.innerHTML = html;
    }

    // Render First Exercise
    this.renderCurrentLessonQuiz();
    this.navigateTo('lessons-page');
    this.switchLessonTab('lesson-theory');
  },

  switchLessonTab(tabId) {
    this.state.lessonTab = tabId;
    document.querySelectorAll('.tab-btn[data-tab]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });
    document.querySelectorAll('.tab-content').forEach(content => {
      content.style.display = content.id === tabId ? 'block' : 'none';
    });
  },

  renderCurrentLessonQuiz() {
    const data = lessonsDatabase[this.state.activeLesson];
    if (!data || !data.exercises.length) return;

    const quiz = data.exercises[this.state.lessonQuizIndex];
    const indicator = document.getElementById('lesson-quiz-indicator');
    const scoreBadge = document.getElementById('lesson-quiz-score');
    const quizArea = document.getElementById('lesson-quiz-area');
    const feedback = document.getElementById('lesson-quiz-feedback');
    const submitBtn = document.getElementById('btn-submit-lesson-quiz');
    const nextBtn = document.getElementById('btn-next-lesson-quiz');

    if (indicator) indicator.innerText = `Pregunta ${this.state.lessonQuizIndex + 1} de ${data.exercises.length}`;
    if (scoreBadge) scoreBadge.innerText = `Aciertos: ${this.state.lessonQuizScore}`;
    if (feedback) feedback.style.display = 'none';
    if (submitBtn) submitBtn.style.display = 'inline-flex';
    if (nextBtn) nextBtn.style.display = 'none';

    let html = `<div class="quiz-question-title">${quiz.question}</div>`;

    if (quiz.type === 'choice') {
      html += '<div class="quiz-options-list">';
      quiz.options.forEach((opt, idx) => {
        html += `<button class="quiz-opt-btn" onclick="app.selectQuizOption(this, ${idx})">${opt}</button>`;
      });
      html += '</div>';
    } else if (quiz.type === 'input') {
      html += `<input type="text" class="quiz-input-field" id="lesson-quiz-input" placeholder="${quiz.placeholder || 'Escribe tu respuesta...'}" autocomplete="off">`;
    } else if (quiz.type === 'scramble') {
      html += `
        <div class="scramble-target" id="scramble-target-zone"></div>
        <div class="scramble-pool" id="scramble-pool-zone">
          ${quiz.pool.map(word => `<span class="scramble-chip" onclick="app.moveScrambleChip(this)">${word}</span>`).join('')}
        </div>
      `;
    } else if (quiz.type === 'listening') {
      html += `
        <button class="btn btn-primary" style="margin-bottom:1rem;" onclick="app.speakText('${quiz.speakText}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
          Escuchar Audio
        </button>
        <input type="text" class="quiz-input-field" id="lesson-quiz-input" placeholder="Escribe lo que escuchas..." autocomplete="off">
      `;
    }

    if (quizArea) quizArea.innerHTML = html;
  },

  selectQuizOption(btn, index) {
    document.querySelectorAll('.quiz-opt-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    btn.dataset.selectedIndex = index;
  },

  moveScrambleChip(chip) {
    const targetZone = document.getElementById('scramble-target-zone');
    const poolZone = document.getElementById('scramble-pool-zone');
    if (chip.parentElement === targetZone) {
      poolZone.appendChild(chip);
    } else {
      targetZone.appendChild(chip);
    }
  },

  submitLessonQuiz() {
    const data = lessonsDatabase[this.state.activeLesson];
    const quiz = data.exercises[this.state.lessonQuizIndex];
    let isCorrect = false;

    if (quiz.type === 'choice') {
      const selected = document.querySelector('.quiz-opt-btn.selected');
      if (!selected) {
        alert("Por favor, selecciona una opción.");
        return;
      }
      const selIndex = parseInt(selected.dataset.selectedIndex, 10);
      isCorrect = selIndex === quiz.correct;
      selected.classList.add(isCorrect ? 'correct' : 'incorrect');
    } else if (quiz.type === 'input' || quiz.type === 'listening') {
      const input = document.getElementById('lesson-quiz-input');
      if (!input || !input.value.trim()) {
        alert("Por favor, introduce una respuesta.");
        return;
      }
      const val = input.value.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
      const ans = quiz.answer.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
      isCorrect = (val === ans);
    } else if (quiz.type === 'scramble') {
      const chips = document.querySelectorAll('#scramble-target-zone .scramble-chip');
      const constructed = Array.from(chips).map(c => c.innerText.trim());
      isCorrect = JSON.stringify(constructed) === JSON.stringify(quiz.correct);
    }

    const feedback = document.getElementById('lesson-quiz-feedback');
    const feedbackTitle = document.getElementById('lesson-feedback-title');
    const feedbackText = document.getElementById('lesson-feedback-text');
    const submitBtn = document.getElementById('btn-submit-lesson-quiz');
    const nextBtn = document.getElementById('btn-next-lesson-quiz');

    if (isCorrect) {
      AudioSynth.playCorrect();
      this.state.lessonQuizScore++;
      this.state.userScore += 10;
      feedback.className = 'quiz-feedback correct';
      feedbackTitle.innerText = "¡Excelente! Respuesta correcta 🎉";
    } else {
      AudioSynth.playError();
      feedback.className = 'quiz-feedback incorrect';
      feedbackTitle.innerText = "Respuesta incorrecta 💡";
    }

    feedbackText.innerText = quiz.explanation || "Revisa la estructura gramatical en la pestaña de teoría.";
    feedback.style.display = 'block';
    if (submitBtn) submitBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'inline-flex';

    this.updateStatsUI();
  },

  nextLessonQuiz() {
    const data = lessonsDatabase[this.state.activeLesson];
    this.state.lessonQuizIndex++;

    if (this.state.lessonQuizIndex < data.exercises.length) {
      this.renderCurrentLessonQuiz();
    } else {
      // Finished all quiz
      AudioSynth.playSuccess();
      this.state.progress[this.state.activeLesson] = true;
      this.updateStatsUI();
      this.renderRoadmap();

      const quizArea = document.getElementById('lesson-quiz-area');
      const feedback = document.getElementById('lesson-quiz-feedback');
      const submitBtn = document.getElementById('btn-submit-lesson-quiz');
      const nextBtn = document.getElementById('btn-next-lesson-quiz');

      if (quizArea) {
        quizArea.innerHTML = `
          <div style="text-align:center; padding: 2rem 0;">
            <h2 style="font-family:var(--font-title); font-size:1.8rem; margin-bottom:1rem;">¡Lección Completada! 🎓</h2>
            <p style="color:var(--text-secondary); margin-bottom:1.5rem;">Puntuación obtenida: <strong>${this.state.lessonQuizScore} de ${data.exercises.length}</strong> aciertos.</p>
            <button class="btn btn-primary" onclick="app.navigateTo('dashboard-page')">Volver al Roadmap</button>
          </div>
        `;
      }
      if (feedback) feedback.style.display = 'none';
      if (submitBtn) submitBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
    }
  },

  // GRAMMAR BANK 4
  loadGrammarBank() {
    const theoryContent = document.getElementById('grammar-bank-theory-content');
    if (theoryContent) theoryContent.innerHTML = grammarBank4Database.theory;
    this.state.grammarQuizIndex = 0;
    this.state.grammarQuizScore = 0;
    this.renderCurrentGrammarQuiz();
  },

  renderCurrentGrammarQuiz() {
    const quiz = grammarBank4Database.exercises[this.state.grammarQuizIndex];
    if (!quiz) return;

    const indicator = document.getElementById('grammar-bank-indicator');
    const scoreBadge = document.getElementById('grammar-bank-score');
    const area = document.getElementById('grammar-bank-exercise-area');
    const feedback = document.getElementById('grammar-bank-feedback');
    const submitBtn = document.getElementById('btn-submit-grammar-bank');
    const nextBtn = document.getElementById('btn-next-grammar-bank');

    if (indicator) indicator.innerText = `Pregunta ${this.state.grammarQuizIndex + 1} de ${grammarBank4Database.exercises.length}`;
    if (scoreBadge) scoreBadge.innerText = `Aciertos: ${this.state.grammarQuizScore}`;
    if (feedback) feedback.style.display = 'none';
    if (submitBtn) submitBtn.style.display = 'inline-flex';
    if (nextBtn) nextBtn.style.display = 'none';

    let html = `<div class="quiz-question-title">${quiz.question}</div>`;

    if (quiz.type === 'choice') {
      html += '<div class="quiz-options-list">';
      quiz.options.forEach((opt, idx) => {
        html += `<button class="quiz-opt-btn" onclick="app.selectGrammarOption(this, ${idx})">${opt}</button>`;
      });
      html += '</div>';
    } else {
      html += `<input type="text" class="quiz-input-field" id="grammar-quiz-input" placeholder="${quiz.placeholder || 'Escribe...'}" autocomplete="off">`;
    }

    if (area) area.innerHTML = html;
  },

  selectGrammarOption(btn, index) {
    document.querySelectorAll('#grammar-bank-exercise-area .quiz-opt-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    btn.dataset.selectedIndex = index;
  },

  submitGrammarBankAnswer() {
    const quiz = grammarBank4Database.exercises[this.state.grammarQuizIndex];
    let isCorrect = false;

    if (quiz.type === 'choice') {
      const selected = document.querySelector('#grammar-bank-exercise-area .quiz-opt-btn.selected');
      if (!selected) {
        alert("Selecciona una opción.");
        return;
      }
      const selIdx = parseInt(selected.dataset.selectedIndex, 10);
      isCorrect = selIdx === quiz.correct;
      selected.classList.add(isCorrect ? 'correct' : 'incorrect');
    } else {
      const input = document.getElementById('grammar-quiz-input');
      if (!input || !input.value.trim()) {
        alert("Introduce tu respuesta.");
        return;
      }
      const val = input.value.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
      const ans = quiz.answer.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
      isCorrect = (val === ans);
    }

    const feedback = document.getElementById('grammar-bank-feedback');
    const feedbackTitle = document.getElementById('grammar-feedback-title');
    const feedbackText = document.getElementById('grammar-feedback-text');
    const submitBtn = document.getElementById('btn-submit-grammar-bank');
    const nextBtn = document.getElementById('btn-next-grammar-bank');

    if (isCorrect) {
      AudioSynth.playCorrect();
      this.state.grammarQuizScore++;
      this.state.userScore += 10;
      feedback.className = 'quiz-feedback correct';
      feedbackTitle.innerText = "¡Correcto! 🌟";
    } else {
      AudioSynth.playError();
      feedback.className = 'quiz-feedback incorrect';
      feedbackTitle.innerText = "Incorrecto 💡";
    }

    feedbackText.innerText = quiz.explanation;
    feedback.style.display = 'block';
    if (submitBtn) submitBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'inline-flex';

    this.updateStatsUI();
  },

  nextGrammarBankQuestion() {
    this.state.grammarQuizIndex++;
    if (this.state.grammarQuizIndex < grammarBank4Database.exercises.length) {
      this.renderCurrentGrammarQuiz();
    } else {
      AudioSynth.playSuccess();
      this.state.progress["gb4"] = true;
      this.updateStatsUI();

      const area = document.getElementById('grammar-bank-exercise-area');
      const feedback = document.getElementById('grammar-bank-feedback');
      const submitBtn = document.getElementById('btn-submit-grammar-bank');
      const nextBtn = document.getElementById('btn-next-grammar-bank');

      if (area) {
        area.innerHTML = `
          <div style="text-align:center; padding: 2rem 0;">
            <h2 style="font-family:var(--font-title); font-size:1.6rem; margin-bottom:0.75rem;">¡Grammar Bank 4 Finalizado! 🏆</h2>
            <p style="color:var(--text-secondary); margin-bottom:1.5rem;">Puntaje: <strong>${this.state.grammarQuizScore} de ${grammarBank4Database.exercises.length}</strong>.</p>
            <button class="btn btn-primary" onclick="app.navigateTo('dashboard-page')">Volver al Inicio</button>
          </div>
        `;
      }
      if (feedback) feedback.style.display = 'none';
      if (submitBtn) submitBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
    }
  },

  // VOCABULARY BANK 4
  selectVocabularyBank(category) {
    this.state.selectedVocabCat = category;
    document.querySelectorAll('.vocab-cat-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-vocab') === category);
    });
    this.renderVocabList();
    this.initVocabFlashcards();
    this.resetVocabMatchingGame();
  },

  switchVocabMode(mode) {
    this.state.vocabMode = mode;
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-vocab-mode-${mode}`);
    if (activeBtn) activeBtn.classList.add('active');

    document.querySelectorAll('.vocab-mode-content').forEach(c => c.style.display = 'none');
    const content = document.getElementById(`vocab-content-${mode}`);
    if (content) content.style.display = 'block';
  },

  renderVocabList() {
    const listContainer = document.getElementById('vocab-content-list');
    const items = vocabBank4Data[this.state.selectedVocabCat] || [];
    if (!listContainer) return;

    let html = '<div class="vocab-grid">';
    items.forEach(v => {
      html += `
        <div class="vocab-card">
          <div class="vocab-info">
            <span class="vocab-english">${v.english}</span>
            <span class="vocab-trans">${v.translation}</span>
            <span class="vocab-phonetic">${v.phonetic}</span>
          </div>
          <button class="speaker-btn" onclick="app.speakText('${v.english.replace(/'/g, "\\'")}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          </button>
        </div>
      `;
    });
    html += '</div>';
    listContainer.innerHTML = html;
  },

  initVocabFlashcards() {
    this.state.vocabCardIndex = 0;
    this.renderCurrentFlashcard();
  },

  renderCurrentFlashcard() {
    const items = vocabBank4Data[this.state.selectedVocabCat] || [];
    if (!items.length) return;

    const card = items[this.state.vocabCardIndex];
    const frontText = document.getElementById('vcard-front-text');
    const backText = document.getElementById('vcard-back-text');
    const backPhonetic = document.getElementById('vcard-back-phonetic');
    const counter = document.getElementById('vocab-card-counter');
    const cardEl = document.getElementById('vocab-flashcard-element');

    if (cardEl) cardEl.classList.remove('flipped');
    if (frontText) frontText.innerText = card.english;
    if (backText) backText.innerText = card.translation;
    if (backPhonetic) backPhonetic.innerText = card.phonetic;
    if (counter) counter.innerText = `${this.state.vocabCardIndex + 1} de ${items.length}`;
  },

  flipVocabCard() {
    const cardEl = document.getElementById('vocab-flashcard-element');
    if (cardEl) cardEl.classList.toggle('flipped');
  },

  speakVocabCard() {
    const items = vocabBank4Data[this.state.selectedVocabCat] || [];
    const card = items[this.state.vocabCardIndex];
    if (card) this.speakText(card.english);
  },

  prevVocabCard() {
    const items = vocabBank4Data[this.state.selectedVocabCat] || [];
    if (this.state.vocabCardIndex > 0) {
      this.state.vocabCardIndex--;
      this.renderCurrentFlashcard();
    }
  },

  nextVocabCard() {
    const items = vocabBank4Data[this.state.selectedVocabCat] || [];
    if (this.state.vocabCardIndex < items.length - 1) {
      this.state.vocabCardIndex++;
      this.renderCurrentFlashcard();
    }
  },

  resetVocabMatchingGame() {
    this.state.matchingSelection = null;
    this.state.matchingAttempts = 0;
    this.state.matchingErrors = 0;

    const items = (vocabBank4Data[this.state.selectedVocabCat] || []).slice(0, 6);
    const tiles = [];

    items.forEach((item, idx) => {
      tiles.push({ id: idx, text: item.english, type: 'en' });
      tiles.push({ id: idx, text: item.translation, type: 'es' });
    });

    // Shuffle
    tiles.sort(() => Math.random() - 0.5);

    const grid = document.getElementById('vocab-matching-grid-container');
    if (grid) {
      grid.innerHTML = tiles.map(t => `
        <div class="match-tile" data-id="${t.id}" data-type="${t.type}" onclick="app.handleMatchingClick(this)">
          ${t.text}
        </div>
      `).join('');
    }

    const attemptsEl = document.getElementById('game-attempts-val');
    const errorsEl = document.getElementById('game-errors-val');
    if (attemptsEl) attemptsEl.innerText = "0";
    if (errorsEl) errorsEl.innerText = "0";
  },

  handleMatchingClick(tile) {
    if (tile.classList.contains('matched') || tile.classList.contains('selected')) return;

    if (!this.state.matchingSelection) {
      this.state.matchingSelection = tile;
      tile.classList.add('selected');
      if (tile.dataset.type === 'en') this.speakText(tile.innerText);
    } else {
      const first = this.state.matchingSelection;
      const second = tile;
      this.state.matchingAttempts++;

      if (first.dataset.id === second.dataset.id && first.dataset.type !== second.dataset.type) {
        // MATCH!
        AudioSynth.playCorrect();
        first.classList.remove('selected');
        first.classList.add('matched');
        second.classList.add('matched');
        this.state.matchingSelection = null;
        this.state.userScore += 5;
        this.updateStatsUI();

        // Check if all matched
        const remaining = document.querySelectorAll('#vocab-matching-grid-container .match-tile:not(.matched)');
        if (remaining.length === 0) {
          AudioSynth.playSuccess();
        }
      } else {
        // MISMATCH
        AudioSynth.playError();
        second.classList.add('selected');
        this.state.matchingErrors++;
        setTimeout(() => {
          first.classList.remove('selected');
          second.classList.remove('selected');
          this.state.matchingSelection = null;
        }, 600);
      }

      const attemptsEl = document.getElementById('game-attempts-val');
      const errorsEl = document.getElementById('game-errors-val');
      if (attemptsEl) attemptsEl.innerText = this.state.matchingAttempts;
      if (errorsEl) errorsEl.innerText = this.state.matchingErrors;
    }
  },

  // PHONETICS & SOUNDS
  renderPhonemes() {
    const phonemes = [
      { sym: "/ð/", word: "mother / this", type: "consonant" },
      { sym: "/θ/", word: "thumb / thanks", type: "consonant" },
      { sym: "/s/", word: "snake / hats", type: "consonant" },
      { sym: "/z/", word: "zebra / dogs", type: "consonant" },
      { sym: "/ɪz/", word: "boxes / watches", type: "consonant" },
      { sym: "/æ/", word: "cat / family", type: "vowel" },
      { sym: "/ʌ/", word: "up / brother", type: "vowel" },
      { sym: "/ɜː/", word: "bird / early", type: "vowel" }
    ];

    const grid = document.getElementById('phonemes-module-grid');
    if (grid) {
      grid.innerHTML = phonemes.map(p => `
        <div class="phoneme-card" onclick="app.speakText('${p.word.split('/')[0].trim()}')">
          <span class="phoneme-symbol">${p.sym}</span>
          <span class="phoneme-word">${p.word}</span>
        </div>
      `).join('');
    }
  },

  // EXERCISES BANK PAGE
  selectExerciseCategory(cat) {
    this.state.exerciseCategory = cat;
    document.querySelectorAll('.scrollable-tabs .tab-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-excat') === cat);
    });

    const exList = document.getElementById('exercises-dynamic-list');
    const title = document.getElementById('ex-category-title');
    const scoreSpan = document.getElementById('exercises-score');

    let exercises = [];
    if (cat === 'possessives') {
      title.innerText = "Ejercicios: Possessive 's & Whose / Who's";
      exercises = [
        { q: "This is (Emma / Emma's) dictionary.", opt: ["Emma", "Emma's"], c: 1 },
        { q: "(Whose / Who's) keys are on the kitchen table?", opt: ["Whose", "Who's"], c: 0 },
        { q: "Is he (your sister's / your sisters') boyfriend?", opt: ["your sister's", "your sisters'"], c: 0 },
        { q: "(Who's / Whose) calling at this time of night?", opt: ["Who's", "Whose"], c: 0 }
      ];
    } else if (cat === 'prepositions') {
      title.innerText = "Ejercicios: Preposiciones de Tiempo (in, on, at)";
      exercises = [
        { q: "I usually wake up ___ 6:45 am.", opt: ["in", "on", "at"], c: 2 },
        { q: "We always go on vacation ___ August.", opt: ["in", "on", "at"], c: 0 },
        { q: "She has a piano lesson ___ Tuesdays.", opt: ["in", "on", "at"], c: 1 },
        { q: "They never go out ___ night.", opt: ["in", "on", "at"], c: 2 }
      ];
    } else if (cat === 'frequency') {
      title.innerText = "Ejercicios: Adverbios de Frecuencia y Posición";
      exercises = [
        { q: "I (always get up / get up always) early on weekdays.", opt: ["always get up", "get up always"], c: 0 },
        { q: "He (is never / never is) angry.", opt: ["is never", "never is"], c: 0 },
        { q: "We (hardly ever drink / drink hardly ever) coffee.", opt: ["hardly ever drink", "drink hardly ever"], c: 0 },
        { q: "Do you (often go / go often) to the cinema?", opt: ["often go", "go often"], c: 0 }
      ];
    }

    if (scoreSpan) scoreSpan.innerText = `Total: ${exercises.length}`;

    if (exList) {
      exList.innerHTML = exercises.map((item, idx) => `
        <div class="card" style="margin-bottom:1rem; padding:1.25rem;">
          <p style="font-weight:600; margin-bottom:0.75rem;">${idx + 1}. ${item.q}</p>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            ${item.opt.map((o, oIdx) => `
              <button class="btn btn-outline btn-sm ex-bank-opt" data-correct="${oIdx === item.c}" onclick="app.checkExBankItem(this)">${o}</button>
            `).join('')}
          </div>
        </div>
      `).join('');
    }
  },

  checkExBankItem(btn) {
    const isCorrect = btn.dataset.correct === 'true';
    const parent = btn.parentElement;
    parent.querySelectorAll('.ex-bank-opt').forEach(b => {
      b.disabled = true;
      if (b.dataset.correct === 'true') {
        b.style.background = 'rgba(16, 185, 129, 0.3)';
        b.style.borderColor = 'var(--color-success)';
      }
    });

    if (isCorrect) {
      AudioSynth.playCorrect();
      btn.style.background = 'rgba(16, 185, 129, 0.4)';
      this.state.userScore += 5;
    } else {
      AudioSynth.playError();
      btn.style.background = 'rgba(239, 68, 68, 0.4)';
    }
    this.updateStatsUI();
  },

  // CERTIFICATE PAGE
  renderCertificateStatus() {
    const totalItems = Object.keys(this.state.progress).length;
    const completed = Object.values(this.state.progress).filter(Boolean).length;
    const pct = Math.round((completed / totalItems) * 100);

    const lockedPanel = document.getElementById('cert-locked-panel');
    const unlockedPanel = document.getElementById('cert-unlocked-panel');
    const fillBar = document.getElementById('cert-progress-fill-bar');
    const statusVal = document.getElementById('cert-progress-status-val');

    if (pct >= 80) {
      if (lockedPanel) lockedPanel.style.display = 'none';
      if (unlockedPanel) unlockedPanel.style.display = 'block';

      const dateEl = document.getElementById('cert-issue-date');
      if (dateEl) {
        const today = new Date();
        dateEl.innerText = today.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
      }
    } else {
      if (lockedPanel) lockedPanel.style.display = 'block';
      if (unlockedPanel) unlockedPanel.style.display = 'none';
      if (fillBar) fillBar.style.width = pct + '%';
      if (statusVal) statusVal.innerText = `Progreso actual: ${pct}% / 80% requerido`;
    }
  },

  printCertificate() {
    const nameInput = document.getElementById('cert-name-input');
    const displayName = document.getElementById('cert-display-name');
    if (nameInput && displayName) {
      displayName.innerText = nameInput.value.trim() || "Estudiante de Inglés";
    }
    window.print();
  }
};

// Auto initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
