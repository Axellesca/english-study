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
  // UNIDAD 5A — can / can't (habilidades)
  // -------------------------------------------------------------------------
  "5A": {
    title: "5A: can / can't (Habilidades)",
    module: 5,
    theory: `
      <div class="theory-block">
        <h3>1. can / can't: ability (Habilidad)</h3>
        <p>Usamos <strong>can</strong> para hablar de lo que una persona es capaz de hacer. La estructura es siempre la misma: <strong>can + verbo en forma base</strong>.</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Forma</th><th>Estructura</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>Afirmativo</td><td>Sujeto + <strong>can</strong> + verbo base</td><td>She <strong>can swim</strong>.</td></tr>
              <tr><td>Negativo</td><td>Sujeto + <strong>can't</strong> + verbo base</td><td>He <strong>can't drive</strong>.</td></tr>
              <tr><td>Pregunta</td><td><strong>Can</strong> + sujeto + verbo base?</td><td><strong>Can</strong> you <strong>play</strong> the guitar?</td></tr>
              <tr><td>Respuesta corta (+)</td><td>Yes, + sujeto + <strong>can</strong></td><td>Yes, I <strong>can</strong>.</td></tr>
              <tr><td>Respuesta corta (−)</td><td>No, + sujeto + <strong>can't</strong></td><td>No, I <strong>can't</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 <strong>can't</strong> es la forma corta de <strong>cannot</strong>. Las dos son correctas, pero en conversación y escritura informal se usa casi siempre <em>can't</em>.
        </div>
      </div>

      <div class="theory-block">
        <h3>2. Una sola forma para todas las personas</h3>
        <p>A diferencia de otros verbos, <strong>can</strong> es igual para <em>I, you, he, she, it, we</em> y <em>they</em>. No cambia nunca.</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Sujeto</th><th>Afirmativo</th><th>Negativo</th></tr></thead>
            <tbody>
              <tr><td>I / you / we / they</td><td>I <strong>can</strong> type.</td><td>I <strong>can't</strong> type.</td></tr>
              <tr><td>he / she / it</td><td>She <strong>can</strong> cook.</td><td>She <strong>can't</strong> cook.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ <strong>can</strong> <em>no se conjuga</em>: nunca <em>cans, caned, canning</em>. Y <strong>no lleva <em>to</em></strong>: <em>She can play</em> ✅ · <em>She can to play</em> ❌ · <em>She cans play</em> ❌.
        </div>
      </div>

      <div class="theory-block">
        <h3>3. can para pedir permiso</h3>
        <p>Con <strong>Can I...? / Can we...?</strong> pedimos permiso. La respuesta esperada es <em>Yes, you can</em> o <em>Sorry, you can't</em>.</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Pregunta</th><th>Respuesta</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td><strong>Can I</strong> use your phone?</td><td>Yes, you can. / Sorry, you can't.</td><td>¿Puedo usar tu teléfono?</td></tr>
              <tr><td><strong>Can I</strong> open the window?</td><td>Of course you can.</td><td>¿Puedo abrir la ventana?</td></tr>
              <tr><td><strong>Can we</strong> have a break?</td><td>Sorry, you can't. We're very busy.</td><td>¿Podemos hacer una pausa?</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 <strong>Can I...?</strong> = <em>¿Puedo...?</em> (petición amable) · <strong>Could I...?</strong> = <em>¿Podrías...?</em> (más educado y formal).
        </div>
      </div>

      <div class="theory-block">
        <h3>4. Habilidad (can) vs. conocimiento y experiencia (know, live)</h3>
        <p>No confundas <strong>can</strong> (habilidad para hacer algo) con <strong>know</strong> (tener la información) ni con <strong>live</strong> (residir):</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Pregunta</th><th>Respuesta correcta</th><th>Equivalente en español</th></tr></thead>
            <tbody>
              <tr><td>Do you <strong>know</strong> Japanese?</td><td>Yes, I know a little Japanese.</td><td>¿Sabes japonés? (tener el conocimiento)</td></tr>
              <tr><td>Can you <strong>speak</strong> Japanese?</td><td>Yes, I can speak Japanese.</td><td>¿Hablas japonés? (tener la habilidad)</td></tr>
              <tr><td>Do you <strong>live</strong> in Lima?</td><td>Yes, I live in Lima.</td><td>¿Vives en Lima? (residir)</td></tr>
              <tr><td>Can you <strong>ride</strong> a bike?</td><td>Not at the moment.</td><td>¿Sabes andar en bicicleta? (habilidad)</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ <strong>can</strong> expresa habilidad, no información ni localización: <em>She can speak five languages</em> ✅ · <em>She knows five languages</em> ❌ (usa <em>speaks</em>). Tampoco <em>I can live in Paris</em> ❌ → <em>I live in Paris</em> ✅.
        </div>
      </div>

      <div class="theory-block">
        <h3>5. Pronunciación: sentence stress</h3>
        <p>En las frases de habilidad el <strong>acento principal cae sobre el verbo</strong> (normalmente el primer elemento de contenido), no sobre el sujeto.</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Frase</th><th>Silabeo</th><th>Acento</th></tr></thead>
            <tbody>
              <tr><td>I can <strong>swim</strong>.</td><td>› I can ˈswim</td><td>stress on <em>swim</em></td></tr>
              <tr><td>She can <strong>play</strong> the guitar.</td><td>› She can ˈplay the guiˌtar</td><td>stress on <em>play</em></td></tr>
              <tr><td>Can you <strong>type</strong>?</td><td>› Can you ˈtype</td><td>stress on <em>type</em></td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>can</strong> (afirmativo) se pronuncia /kæn/ y <strong>can't</strong> /kɑːnt/ (la <em>a</em> se alarga y suena como la de <em>car</em>).</p>
      </div>
    `,
    vocab: [
      { english: "buy a newspaper", translation: "comprar un periódico", phonetic: "/baɪ ə ˈnjuːz.peɪ.pər/" },
      { english: "drive a car", translation: "conducir un carro", phonetic: "/draɪv ə kɑːr/" },
      { english: "play the guitar", translation: "tocar la guitarra", phonetic: "/pleɪ ðə ɡɪˈtɑːr/" },
      { english: "cook", translation: "cocinar", phonetic: "/kʊk/" },
      { english: "speak three languages", translation: "hablar tres idiomas", phonetic: "/spiːk θriː ˈlæŋ.ɡwɪ.dʒɪz/" },
      { english: "use a computer", translation: "usar una computadora", phonetic: "/juːz ə kəmˈpjuː.tər/" },
      { english: "swim", translation: "nadar", phonetic: "/swɪm/" },
      { english: "ride a bike", translation: "andar en bicicleta", phonetic: "/raɪd ə baɪk/" },
      { english: "type", translation: "escribir a máquina / teclear", phonetic: "/taɪp/" },
      { english: "send an email", translation: "enviar un correo electrónico", phonetic: "/send ən ˈiː.meɪl/" },
      { english: "Yes, I can.", translation: "Sí, puedo.", phonetic: "/jes aɪ kæn/" },
      { english: "No, I can't.", translation: "No, no puedo.", phonetic: "/nəʊ aɪ kɑːnt/" },
      { english: "Can I open the window?", translation: "¿Puedo abrir la ventana?", phonetic: "/kæn aɪ ˈəʊ.pən ðə ˈwɪn.dəʊ/" },
      { english: "of course", translation: "por supuesto", phonetic: "/əv kɔːs/" }
    ],
    exercises: [
      { question: "Complete: She can ___ (play) the guitar very well.", type: "input", answer: "play", placeholder: "verb", explanation: "can + verbo en forma base: can play (sin to y sin -s)." },
      { question: "Choose the correct option: He ___ drive.", options: ["cans", "can", "can to"], type: "choice", correct: 1, explanation: "can no se conjuga y nunca lleva 'to'." },
      { question: "Make it negative: I can swim. → I ___ swim.", type: "input", answer: "can't", placeholder: "can't", explanation: "La forma negativa de can es can't (= cannot)." },
      { question: "Order the words to ask for permission:", pool: ["I", "the", "window", "Can", "open", "?"], correct: ["Can", "I", "open", "the", "window", "?"], type: "scramble", explanation: "Para pedir permiso: Can + sujeto + verbo base + complemento + ?" },
      { question: "Listening: Listen and type the ability you hear.", type: "listening", speakText: "speak three languages", answer: "speak three languages", explanation: "La frase hablada es 'speak three languages' (hablar tres idiomas)." }
    ]
  },

  // -------------------------------------------------------------------------
  // UNIDAD 5B — Present continuous (be + verbo + -ing)
  // -------------------------------------------------------------------------
  "5B": {
    title: "5B: Present Continuous (be + verbo + -ing)",
    module: 5,
    theory: `
      <div class="theory-block">
        <h3>1. ¿Cuándo usamos el present continuous?</h3>
        <p>El <strong>present continuous</strong> describe una acción que está <strong>en este momento</strong> o que es <strong>temporal</strong> (durante un periodo corto). Nunca describe el pasado ni las rutinas permanentes.</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Marcador temporal</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td><strong>now</strong> / <strong>at the moment</strong> / <strong>Look!</strong></td><td>Look! It's <strong>raining</strong>.</td></tr>
              <tr><td><strong>this week</strong> / <strong>this morning</strong></td><td>This week I'm <strong>studying</strong> every evening.</td></tr>
              <tr><td>Temporal / cambio de planes</td><td>I'm <strong>working</strong> from home this month.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ No lo usamos para rutinas (<em>I work in an office</em> ✅) ni para acciones ya terminadas: <em>Yesterday I worked late</em> ❌ es un tiempo verbal distinto.
        </div>
      </div>

      <div class="theory-block">
        <h3>2. Las tres formas</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Forma</th><th>Estructura</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>Afirmativo</td><td>am / is / are + verbo + <strong>-ing</strong></td><td>I <strong>am reading</strong> a magazine.</td></tr>
              <tr><td>Negativo</td><td>am / is / are + <strong>not</strong> + verbo + <strong>-ing</strong></td><td>She <strong>isn't watching</strong> TV.</td></tr>
              <tr><td>Pregunta</td><td>Am / Is / Are + sujeto + verbo + <strong>-ing</strong>?</td><td><strong>Are</strong> you <strong>listening</strong> to music?</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 <strong>Contracciones:</strong> I'm · he's · she's · we're · they're · isn't · aren't.<br>
          <em>I'm not cleaning the house.</em> · <em>They aren't meeting friends.</em>
        </div>
      </div>

      <div class="theory-block">
        <h3>3. El verbo <em>be</em> según el sujeto</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Sujeto</th><th>be (+ not)</th><th>Pregunta</th></tr></thead>
            <tbody>
              <tr><td>I</td><td><strong>am</strong> / am not</td><td>Am I ...?</td></tr>
              <tr><td>he / she / it</td><td><strong>is</strong> / <strong>isn't</strong></td><td>Is he ...?</td></tr>
              <tr><td>you / we / they</td><td><strong>are</strong> / <strong>aren't</strong></td><td>Are you ...?</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ El error más común: <em>He have a shower</em> ❌ → <em>He's <strong>having</strong> a shower</em> ✅. Con <em>I</em> nunca usamos <em>is</em>: <em>I <strong>am</strong> getting up</em>.
        </div>
      </div>

      <div class="theory-block">
        <h3>4. Ortografía de la forma -ing</h3>
        <p>Hay cuatro reglas para formar el gerundio. Solo una se aplica a cada verbo:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Regla</th><th>Ejemplos</th></tr></thead>
            <tbody>
              <tr><td>Se añade <strong>-ing</strong> directamente</td><td>read → read<strong>ing</strong> · work → work<strong>ing</strong> · play → play<strong>ing</strong></td></tr>
              <tr><td>Se <strong>quita la -e</strong> final</td><td>write → writ<strong>ing</strong> · make → mak<strong>ing</strong> · dance → danc<strong>ing</strong></td></tr>
              <tr><td><strong>Dobla la consonante</strong> (C + vocal + C)</td><td>run → runn<strong>ing</strong> · swim → swimm<strong>ing</strong> · sit → sitt<strong>ing</strong></td></tr>
              <tr><td><strong>ie → y</strong></td><td>lie → ly<strong>ing</strong> · die → dy<strong>ing</strong></td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 El patrón <strong>C + vocal + C</strong> significa que la última letra es consonante, la anterior es vocal y la de antes también es consonante. En <em>run</em> (r-u-n) y <em>swim</em> (s-wi-m) se cumple, por eso la consonante final se dobla.
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ Errores frecuentes: <em>runing</em> ❌ → <em>running</em> ✅ · <em>writeing</em> ❌ → <em>writing</em> ✅ · <em>lying</em> es <em>lie</em> (mentir/estar acostado) y <em>laying</em> ❌ no existe aquí.
        </div>
      </div>

      <div class="theory-block">
        <h3>5. Pronunciación: el sonido /ŋ/</h3>
        <p>La terminación <strong>-ing</strong> se pronuncia siempre con la consonante nasal velar /ŋ/, como la de <em>sing</em> o <em>thing</em>, nunca /n/ + /g/.</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Palabra</th><th>Transcripción</th><th>Al final de la palabra</th></tr></thead>
            <tbody>
              <tr><td>running</td><td>/ˈrʌn.ɪŋ/</td><td>Sí: /ŋ/</td></tr>
              <tr><td>swimming</td><td>/ˈswɪm.ɪŋ/</td><td>Sí: /ŋ/</td></tr>
              <tr><td>listening</td><td>/ˈlɪs.ən.ɪŋ/</td><td>Sí: /ŋ/</td></tr>
              <tr><td>meeting</td><td>/ˈmiː.tɪŋ/</td><td>Sí: /ŋ/</td></tr>
              <tr><td>English</td><td>/ˈɪŋ.ɡlɪʃ/</td><td>No: /ŋ/ + /ɡ/</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    vocab: [
      { english: "get up", translation: "levantarse", phonetic: "/ɡet ʌp/" },
      { english: "have a shower", translation: "ducharse", phonetic: "/hæv ə ˈʃaʊ.ər/" },
      { english: "have breakfast", translation: "desayunar", phonetic: "/hæv ˈbrek.fəst/" },
      { english: "watch TV", translation: "ver la televisión", phonetic: "/wɒtʃ ˌtiːˈviː/" },
      { english: "listen to music", translation: "escuchar música", phonetic: "/ˈlɪs.ən tə ˈmjuː.zɪk/" },
      { english: "read a magazine", translation: "leer una revista", phonetic: "/riːd ə ˌmæɡ.əˈziːn/" },
      { english: "study English", translation: "estudiar inglés", phonetic: "/ˈstʌd.i ˈɪŋ.ɡlɪʃ/" },
      { english: "work in an office", translation: "trabajar en una oficina", phonetic: "/wɜːk ɪn ən ˈɒf.ɪs/" },
      { english: "meet friends", translation: "quedar con amigos", phonetic: "/miːt frendz/" },
      { english: "clean the house", translation: "limpiar la casa", phonetic: "/kliːn ðə haʊs/" },
      { english: "is studying", translation: "está estudiando", phonetic: "/ɪz ˈstʌd.i.ɪŋ/" },
      { english: "are listening", translation: "están escuchando", phonetic: "/ɑː ˈlɪs.ən.ɪŋ/" },
      { english: "I'm not working", translation: "no estoy trabajando", phonetic: "/aɪm nɒt ˈwɜː.kɪŋ/" },
      { english: "at the moment", translation: "en este momento / ahora mismo", phonetic: "/ət ðə ˈməʊ.mənt/" }
    ],
    exercises: [
      { question: "Complete: Look! It ___ (rain) at the moment.", type: "input", answer: "is raining", placeholder: "is + -ing", explanation: "Presente continuo: It is raining. No se usa el pasado 'rained'." },
      { question: "Choose the correct option: We ___ (are meeting / are meet) friends now.", options: ["are meeting", "are meet"], type: "choice", correct: 0, explanation: "El verbo va en -ing después de 'are'." },
      { question: "Make it negative: She is watching TV. → She ___ watching TV.", type: "input", answer: "isn't", placeholder: "isn't", explanation: "Negación con 'be': is + not se contrae en isn't." },
      { question: "Order the words (write → writing):", pool: ["is", "He", "writing", "an", "email"], correct: ["He", "is", "writing", "an", "email"], type: "scramble", explanation: "Se quita la -e: write → writing. Orden: sujeto + is + -ing + complemento." },
      { question: "Listening: Listen and type the action you hear.", type: "listening", speakText: "listening to music", answer: "listening to music", explanation: "La frase hablada es 'listening to music' (escuchando música)." }
    ]
  },

  // -------------------------------------------------------------------------
  // UNIDAD 5C — Present simple or present continuous?
  // -------------------------------------------------------------------------
  "5C": {
    title: "5C: Present Simple or Present Continuous?",
    module: 5,
    theory: `
      <div class="theory-block">
        <h3>1. La decisión clave</h3>
        <p>La pregunta que resuelve casi todo es: <strong>¿es una rutina o está pasando ahora?</strong> Si es una rutina, usamos <strong>present simple</strong>. Si está pasando en este momento o es temporal, usamos <strong>present continuous</strong>.</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Uso</th><th>Present simple</th><th>Present continuous</th></tr></thead>
            <tbody>
              <tr><td>Rutinas y hechos</td><td>I <strong>work</strong> in an office.</td><td>—</td></tr>
              <tr><td>Ahora mismo</td><td>—</td><td>I <strong>am working</strong> in an office.</td></tr>
              <tr><td>Horarios</td><td>The shop <strong>opens</strong> at nine.</td><td>—</td></tr>
              <tr><td>Esta semana (temporal)</td><td>—</td><td>This week I <strong>am working</strong> from home.</td></tr>
              <tr><td>Opiniones y hechos generales</td><td>Water <strong>boils</strong> at 100°C.</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="theory-block">
        <h3>2. Marcadores temporales: la mejor pista</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Marcador</th><th>Tiempo verbal</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td><strong>usually, always, often, sometimes, never</strong></td><td>Present simple</td><td>She <strong>usually gets</strong> up at seven.</td></tr>
              <tr><td><strong>every day, on Mondays, twice a week</strong></td><td>Present simple</td><td>They <strong>go</strong> to the gym <strong>every day</strong>.</td></tr>
              <tr><td><strong>now, at the moment, Look!, Listen!</strong></td><td>Present continuous</td><td>Listen! The baby <strong>is crying</strong>.</td></tr>
              <tr><td><strong>this week, this month, today</strong></td><td>Present continuous</td><td>I'm <strong>studying</strong> English <strong>this month</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 Cambio de rutina o de planes: también usamos el continuous. <em>I usually cycle to work, but <strong>today I'm taking</strong> the bus.</em>
        </div>
      </div>

      <div class="theory-block">
        <h3>3. Negaciones y preguntas: no se mezclan</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Tiempo verbal</th><th>Negativo</th><th>Pregunta</th></tr></thead>
            <tbody>
              <tr><td>Present simple</td><td>Sujeto + <strong>doesn't</strong> + verbo base</td><td><strong>Do / Does</strong> + sujeto + verbo base?</td></tr>
              <tr><td>Present continuous</td><td>Sujeto + <strong>isn't / aren't</strong> + verbo + <strong>-ing</strong></td><td><strong>Is / Are</strong> + sujeto + verbo + <strong>-ing</strong>?</td></tr>
            </tbody>
          </table>
        </div>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Frase</th><th>Negativo</th><th>Pregunta</th></tr></thead>
            <tbody>
              <tr><td>live (routine)</td><td>He <strong>doesn't live</strong> in London.</td><td><strong>Does</strong> he <strong>live</strong> in London?</td></tr>
              <tr><td>live (ahora)</td><td>He <strong>isn't living</strong> in London now.</td><td><strong>Is</strong> he <strong>living</strong> in London now?</td></tr>
              <tr><td>work (rutina)</td><td>They <strong>don't work</strong> on Sundays.</td><td><strong>Do</strong> they <strong>work</strong> on Sundays?</td></tr>
              <tr><td>work (ahora)</td><td>They <strong>aren't working</strong> today.</td><td><strong>Are</strong> they <strong>working</strong> today?</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ Nunca mezcles las dos estructuras: <em>He isn't lives in London</em> ❌ · <em>He doesn't living in London</em> ❌. Además, con <strong>doesn't</strong> el verbo va en <strong>forma base</strong> sin <em>-s</em>: <em>He doesn't <strong>work</strong></em> (no <em>works</em>).
        </div>
      </div>

      <div class="theory-block">
        <h3>4. El error típico: la rutina expresada como continuous</h3>
        <p>El error más frecuente de esta unidad es usar el continuous para algo que es permanente. La presencia de <em>now</em> o <em>at the moment</em> es obligatoria en ese caso.</p>
        <div class="rule-highlight-box warning">
          ⚠️ <em>He <strong>is living</strong> in London.</em> ❌ (es su domicilio permanente) → <em>He <strong>lives</strong> in London.</em> ✅<br>
          &nbsp;&nbsp;&nbsp;&nbsp;<em>She <strong>is working</strong> in a bank.</em> ❌ → <em>She <strong>works</strong> in a bank.</em> ✅<br>
          &nbsp;&nbsp;&nbsp;&nbsp;En cambio sí es correcto si hay un marcador temporal: <em>She <strong>is working</strong> in a bank <strong>this week</strong>.</em> ✅
        </div>
        <div class="rule-highlight-box">
          💡 Verbos que casi siempre van en present simple: <em>live, work, study, own, belong</em> (propiedad permanente) y los verbos de estado: <em>know, like, love, want, need, believe, belong, seem</em>. Los verbos de estado <strong>no tienen forma -ing</strong>.
        </div>
      </div>

      <div class="theory-block">
        <h3>5. The weather and Seasons</h3>
        <p>Para hablar del clima usamos el verbo <strong>it</strong> y casi siempre el present continuous, porque el clima cambia en este momento:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Frase</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td>It's <strong>raining</strong>.</td><td>Está lloviendo.</td></tr>
              <tr><td>It's <strong>snowing</strong>.</td><td>Está nevando.</td></tr>
              <tr><td><strong>The sun is shining</strong>.</td><td>El sol brilla.</td></tr>
              <tr><td>It's <strong>cloudy</strong> / <strong>foggy</strong>.</td><td>Está nublado / con niebla.</td></tr>
              <tr><td>It's <strong>windy</strong> in October.</td><td> Hace viento en octubre.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Las <strong>estaciones</strong> (<em>spring, summer, autumn, winter</em>) llevan siempre preposición: <em>in spring, in summer, in autumn, in winter</em>. Se usan con el present simple.</p>
        <div class="rule-highlight-box warning">
          ⚠️ Nunca usamos el gerundio con las estaciones: <em>It's raining <strong>in autumn</strong></em> ✅ · <em>It's raininging in autumn</em> ❌ · <em>It's rain in autumn</em> ❌.
        </div>
      </div>
    `,
    vocab: [
      { english: "sunny", translation: "soleado", phonetic: "/ˈsʌn.i/" },
      { english: "cloudy", translation: "nublado", phonetic: "/ˈklaʊ.di/" },
      { english: "rainy", translation: "lluvioso", phonetic: "/ˈreɪ.ni/" },
      { english: "windy", translation: "ventoso", phonetic: "/ˈwɪn.di/" },
      { english: "snowy", translation: "nevado", phonetic: "/ˈsnəʊ.i/" },
      { english: "foggy", translation: "con niebla", phonetic: "/ˈfɒɡ.i/" },
      { english: "hot", translation: "caluroso", phonetic: "/hɒt/" },
      { english: "cold", translation: "frío", phonetic: "/kəʊld/" },
      { english: "warm", translation: "templado", phonetic: "/wɔːm/" },
      { english: "cool", translation: "fresco", phonetic: "/kuːl/" },
      { english: "wet", translation: "húmedo / mojado", phonetic: "/wet/" },
      { english: "dry", translation: "seco", phonetic: "/draɪ/" },
      { english: "spring", translation: "primavera", phonetic: "/sprɪŋ/" },
      { english: "summer", translation: "verano", phonetic: "/ˈsʌm.ər/" },
      { english: "autumn", translation: "otoño", phonetic: "/ˈɔː.təm/" },
      { english: "winter", translation: "invierno", phonetic: "/ˈwɪn.tər/" },
      { english: "It's raining.", translation: "Está lloviendo.", phonetic: "/ɪts ˈreɪ.nɪŋ/" },
      { english: "The sun is shining.", translation: "El sol brilla.", phonetic: "/ðə sʌn ɪz ˈʃaɪ.nɪŋ/" },
      { english: "the city centre", translation: "el centro de la ciudad", phonetic: "/ðə ˈsɪt.i sentər/" },
      { english: "the river", translation: "el río", phonetic: "/ðə ˈrɪv.ər/" },
      { english: "the park", translation: "el parque", phonetic: "/ðə pɑːk/" },
      { english: "the station", translation: "la estación", phonetic: "/ðə ˈsteɪ.ʃən/" }
    ],
    exercises: [
      { question: "Choose the correct tense: My sister ___ (live) in Madrid.", options: ["is living", "lives"], type: "choice", correct: 1, explanation: "Es un hecho permanente, sin marcador temporal: present simple (lives)." },
      { question: "Complete: Look! It ___ (rain) again.", type: "input", answer: "is raining", placeholder: "is + -ing", explanation: "'Look!' señala que algo pasa ahora: present continuous, is raining." },
      { question: "Make it negative: They usually work on Saturdays. → They ___ work on Saturdays.", type: "input", answer: "don't", placeholder: "don't / doesn't", explanation: "Present simple negativo con 'they' + don't + verbo base." },
      { question: "Order the words (it's snowing):", pool: ["winter", "snowing", "It's", "in"], correct: ["It's", "snowing", "in", "winter"], type: "scramble", explanation: "The weather va con 'it' + gerundio y la estación con preposición 'in'." },
      { question: "Listening: Listen and type the verb phrase you hear.", type: "listening", speakText: "is shining", answer: "is shining", explanation: "La frase hablada es 'is shining' (The sun is shining)." }
    ]
  },

  // -------------------------------------------------------------------------
  // UNIDAD 6A — object pronouns (A North African story)
  // -------------------------------------------------------------------------
  "6A": {
    title: "6A: Object Pronouns (A North African Story)",
    module: 6,
    theory: `
      <div class="theory-block">
        <h3>1. Object pronouns: los pronombres objeto</h3>
        <p>Los <strong>object pronouns</strong> van <strong>después del verbo</strong> o después de una <strong>preposición</strong>, cuando la persona o cosa recibe la acción: <em>I love him. / Can you help me? / Look at them!</em></p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Sujeto (hace la acción)</th><th>Objeto (recibe la acción)</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td><strong>I</strong></td><td><strong>me</strong></td><td>Can you help <strong>me</strong>?</td></tr>
              <tr><td><strong>you</strong></td><td><strong>you</strong></td><td>I love <strong>you</strong>.</td></tr>
              <tr><td><strong>he</strong></td><td><strong>him</strong></td><td>I want to meet <strong>him</strong>.</td></tr>
              <tr><td><strong>she</strong></td><td><strong>her</strong></td><td>I see <strong>her</strong> every day.</td></tr>
              <tr><td><strong>it</strong></td><td><strong>it</strong></td><td>I like <strong>it</strong> a lot.</td></tr>
              <tr><td><strong>we</strong></td><td><strong>us</strong></td><td>She helps <strong>us</strong>.</td></tr>
              <tr><td><strong>they</strong></td><td><strong>them</strong></td><td>I can't find <strong>them</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 El <strong>sujeto</strong> hace la acción y el <strong>objeto</strong> la recibe: <em>I love him</em> = yo (sujeto) amo ~ él (objeto). Es la misma idea que el genitivo <em>'s</em> del 4A, pero con personas.
        </div>
      </div>

      <div class="theory-block">
        <h3>2. Después del verbo: verb + object pronoun</h3>
        <p>Con verbos como <strong>like, love, want, know, find, see, meet, call, help</strong>, el pronombre objeto va justo después del verbo:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>✅ Correcto</th><th>❌ Incorrecto</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td>I love <strong>him</strong>.</td><td>I love <em>he</em>.</td><td>Lo amo.</td></tr>
              <tr><td>She likes <strong>us</strong>.</td><td>She likes <em>we</em>.</td><td>Le caemos bien.</td></tr>
              <tr><td>Do you remember <strong>her</strong>?</td><td>Do you remember <em>she</em>?</td><td>¿Te acuerdas de ella?</td></tr>
              <tr><td>I can't find <strong>them</strong>.</td><td>I can't find <em>they</em>.</td><td>No los encuentro.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ Error típico: usar el pronombre sujeto en posición de objeto. <em>I love he</em> ❌ → <em>I love <strong>him</strong></em> ✅ · <em>I like she</em> ❌ → <em>I like <strong>her</strong></em> ✅.
        </div>
      </div>

      <div class="theory-block">
        <h3>3. Después de preposiciones: to, at, for, with...</h3>
        <p>Las preposiciones <strong>to, at, for, with, about, from</strong> van SIEMPRE seguidas de pronombre objeto:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Expresión</th><th>Ejemplo</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td><strong>to + objeto</strong></td><td>Write <strong>to me</strong> soon.</td><td>Escríbeme pronto.</td></tr>
              <tr><td><strong>at + objeto</strong></td><td>Look <strong>at them</strong>!</td><td>¡Míralos!</td></tr>
              <tr><td><strong>for + objeto</strong></td><td>It's <strong>for me</strong>.</td><td>Es para mí.</td></tr>
              <tr><td><strong>with + objeto</strong></td><td>Come <strong>with us</strong>.</td><td>Ven con nosotros.</td></tr>
              <tr><td><strong>about + objeto</strong></td><td>Don't talk <strong>about him</strong>.</td><td>No hables de él.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 <strong>you</strong> es igual como sujeto y como objeto, singular y plural: <em>I love you</em> (a ti / a ustedes). El plural se entiende por contexto: <em>Can I ask you something?</em>
        </div>
      </div>

      <div class="theory-block">
        <h3>4. Respuestas rápidas con me</h3>
        <p>En conversación, las reacciones cortas usan pronombre objeto: <strong>Me too</strong> (= yo también), <strong>Not me!</strong> (= yo no), <strong>It's me</strong> (= soy yo):</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Situación</th><th>Respuesta</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td>"I love this song."</td><td><strong>Me too</strong>!</td><td>Yo también.</td></tr>
              <tr><td>"Who broke the cup?"</td><td><strong>Not me</strong>!</td><td>¡Yo no!</td></tr>
              <tr><td>"Who's calling?"</td><td><strong>It's me</strong>.</td><td>Soy yo.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ En las respuestas cortas <strong>nunca</strong> decimos <em>I too</em> ❌ ni <em>Is me</em> ❌. Siempre con objeto: <strong>Me too</strong> ✅ · <strong>It's me</strong> ✅.
        </div>
      </div>

      <div class="theory-block">
        <h3>5. Pronunciación: /aɪ/, /ɪ/ y /iː/</h3>
        <p>Tres sonidos de vocal que en español se confunden y en inglés son muy distintos:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Símbolo</th><th>Suena como</th><th>Palabras del módulo</th></tr></thead>
            <tbody>
              <tr><td><strong>/aɪ/</strong></td><td>"ai" (como <em>die</em>)</td><td>like /laɪk/ · arrive /əˈraɪv/ · decide /dɪˈsaɪd/ · inside /ˌɪnˈsaɪd/</td></tr>
              <tr><td><strong>/ɪ/</strong></td><td>"i" corta y relajada</td><td>him /hɪm/ · village /ˈvɪlɪdʒ/ · it /ɪt/</td></tr>
              <tr><td><strong>/iː/</strong></td><td>"ii" larga y tensa (como <em>see</em>)</td><td>leave /liːv/ · three /θriː/ · me /miː/</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ /ɪ/ y /iː/ distinguen palabras: <em>ship /ʃɪp/</em> (barco) ≠ <em>sheep /ʃiːp/</em> (oveja). El /iː/ es más largo y tenso: <em>leave /liːv/</em> suena "liiiv" — no lo cortes como <em>live /lɪv/</em> (vivir).
        </div>
      </div>
    `,
    vocab: [
      { english: "me", translation: "me / a mí (objeto)", phonetic: "/miː/" },
      { english: "you (object)", translation: "te / a ti (objeto)", phonetic: "/juː/" },
      { english: "him", translation: "lo / a él", phonetic: "/hɪm/" },
      { english: "her", translation: "la / a ella", phonetic: "/hɜː/" },
      { english: "it (object)", translation: "lo, la (objeto)", phonetic: "/ɪt/" },
      { english: "us", translation: "nos / a nosotros", phonetic: "/ʌs/" },
      { english: "them", translation: "los, las / a ellos", phonetic: "/ðem/" },
      { english: "arrive", translation: "llegar (a un lugar)", phonetic: "/əˈraɪv/" },
      { english: "comfortable", translation: "cómodo/a", phonetic: "/ˈkʌmftəbl/" },
      { english: "decide", translation: "decidir", phonetic: "/dɪˈsaɪd/" },
      { english: "desert", translation: "desierto", phonetic: "/ˈdezət/" },
      { english: "inside", translation: "dentro (de)", phonetic: "/ˌɪnˈsaɪd/" },
      { english: "into", translation: "dentro de / hacia dentro", phonetic: "/ˈɪntu/" },
      { english: "leave", translation: "irse / dejar", phonetic: "/liːv/" },
      { english: "mountain", translation: "montaña", phonetic: "/ˈmaʊntən/" },
      { english: "palace", translation: "palacio", phonetic: "/ˈpæləs/" },
      { english: "sell", translation: "vender", phonetic: "/sel/" },
      { english: "strange", translation: "extraño/a", phonetic: "/streɪndʒ/" },
      { english: "surprised", translation: "sorprendido/a", phonetic: "/səˈpraɪzd/" },
      { english: "through", translation: "a través de", phonetic: "/θruː/" },
      { english: "toward", translation: "hacia", phonetic: "/təˈwɔːd/" },
      { english: "valuable", translation: "valioso/a", phonetic: "/ˈvæljuəbl/" },
      { english: "village", translation: "pueblo / aldea", phonetic: "/ˈvɪlɪdʒ/" }
    ],
    exercises: [
      { question: "Complete: I love Kate, but she doesn't love ___ (I).", type: "input", answer: "me", placeholder: "pronoun", explanation: "Verbo + pronombre objeto: love me. 'I' es sujeto, no objeto." },
      { question: "Choose the correct option: I can't find ___ anywhere.", options: ["he", "him"], type: "choice", correct: 1, explanation: "Después del verbo find va el pronombre objeto: him." },
      { question: "Complete with a pronoun: I like this song very much. → I like ___ very much.", type: "input", answer: "it", placeholder: "pronoun", explanation: "'this song' = it (cosa, objeto)." },
      { question: "Order the words to ask for help:", pool: ["help", "me", "you", "Can", "?"], correct: ["Can", "you", "help", "me", "?"], type: "scramble", explanation: "Can + sujeto + verbo base + objeto + ?: Can you help me?" },
      { question: "Listening: Listen and type the phrase you hear.", type: "listening", speakText: "Look at them", answer: "look at them", explanation: "La frase hablada es 'Look at them' (preposición + pronombre objeto)." }
    ]
  },

  // -------------------------------------------------------------------------
  // UNIDAD 6B — like + -ing, ordinales y fechas (The third Friday in June)
  // -------------------------------------------------------------------------
  "6B": {
    title: "6B: Like + Verb -ing & Dates (The Third Friday in June)",
    module: 6,
    theory: `
      <div class="theory-block">
        <h3>1. Expresar gustos: like / love / don't mind / don't like / hate + -ing</h3>
        <p>Para decir cuánto nos gusta hacer algo, usamos la <strong>escalera de preferencias</strong>. El segundo verbo SIEMPRE va terminado en <strong>-ing</strong>:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Nivel</th><th>Estructura</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>❤️ Encanta</td><td><strong>love</strong> + -ing</td><td>I <strong>love cooking</strong> for my family.</td></tr>
              <tr><td>👍 Gusta</td><td><strong>like</strong> + -ing</td><td>She <strong>likes going</strong> to the cinema.</td></tr>
              <tr><td>😐 No molesta</td><td><strong>(don't mind)</strong> + -ing</td><td>We <strong>don't mind waiting</strong>.</td></tr>
              <tr><td>👎 No gusta</td><td><strong>don't like</strong> + -ing</td><td>I <strong>don't like shopping</strong> on Saturdays.</td></tr>
              <tr><td>❌ Odia</td><td><strong>hate</strong> + -ing</td><td>They <strong>hate getting up</strong> early.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 El segundo verbo SIEMPRE va en -ing: <em>I love cook</em> ❌ → <em>I love <strong>cooking</strong></em> ✅. (En este nivel no usamos <em>love + to + verbo</em>.)
        </div>
      </div>

      <div class="theory-block">
        <h3>2. La forma -ing con todas las personas</h3>
        <p>El <strong>-ing</strong> se forma con las reglas ortográficas del 5B (write → writing, swim → swimming, like → liking) y no cambia nunca:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Sujeto</th><th>Afirmativo</th><th>Negativo</th></tr></thead>
            <tbody>
              <tr><td>I</td><td>I <strong>love swimming</strong>.</td><td>I <strong>don't like running</strong>.</td></tr>
              <tr><td>he / she / it</td><td>He <strong>likes dancing</strong>.</td><td>He <strong>doesn't like waiting</strong>.</td></tr>
              <tr><td>you / we / they</td><td>They <strong>love singing</strong>.</td><td>We <strong>don't mind cooking</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ Con he/she/it negamos con <strong>doesn't</strong>: <em>He doesn't like waiting</em> ✅ · <em>He doesn't likes waiting</em> ❌ · <em>He don't like waiting</em> ❌.
        </div>
      </div>

      <div class="theory-block">
        <h3>3. Números ordinales (1° – 31°)</h3>
        <p>Los ordinales se abrevian con las dos últimas letras del nombre: <strong>1st, 2nd, 3rd, 4th, 5th...</strong> Sirven para fechas y posiciones:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Número</th><th>Ordinal</th><th>Abreviatura</th><th>Número</th><th>Ordinal</th><th>Abreviatura</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>first</td><td>1st</td><td>12</td><td>twelfth</td><td>12th</td></tr>
              <tr><td>2</td><td>second</td><td>2nd</td><td>20</td><td>twentieth</td><td>20th</td></tr>
              <tr><td>3</td><td>third</td><td>3rd</td><td>21</td><td>twenty-first</td><td>21st</td></tr>
              <tr><td>4</td><td>fourth</td><td>4th</td><td>22</td><td>twenty-second</td><td>22nd</td></tr>
              <tr><td>5</td><td>fifth</td><td>5th</td><td>23</td><td>twenty-third</td><td>23rd</td></tr>
              <tr><td>8</td><td>eighth</td><td>8th</td><td>30</td><td>thirtieth</td><td>30th</td></tr>
              <tr><td>9</td><td>ninth</td><td>9th</td><td>31</td><td>thirty-first</td><td>31st</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ Trampas de ortografía: <em>eight → eighth</em> (solo una "t") · <em>nine → ninth</em> (pierde la "e") · <em>five → fifth</em> y <em>twelve → twelfth</em> (terminan en <em>-fth</em>) · <em>twenty → twentieth</em> (la "y" pasa a "ieth").
        </div>
      </div>

      <div class="theory-block">
        <h3>4. Decir y escribir fechas</h3>
        <p>Para decir la fecha usamos <strong>the + ordinal + of + mes</strong> (o mes + the + ordinal); significan lo mismo. El título de esta unidad es un buen ejemplo: <em>the third Friday in June</em> = el tercer viernes de junio (cantidades de viernes dentro del mes, no la fecha).</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Escrito</th><th>Se dice</th><th>Significa</th></tr></thead>
            <tbody>
              <tr><td>17.06</td><td><strong>the</strong> seventeenth <strong>of</strong> June</td><td>el 17 de junio</td></tr>
              <tr><td>1.10</td><td><strong>the</strong> first <strong>of</strong> October</td><td>el 1 de octubre</td></tr>
              <tr><td>21.03</td><td><strong>the</strong> twenty-first <strong>of</strong> March</td><td>el 21 de marzo</td></tr>
              <tr><td>1977</td><td>nineteen seventy-seven</td><td>en 1977 (años: de dos en dos)</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 Los ordinales de fecha siempre llevan <strong>the</strong> delante y los meses SIEMPRE van con mayúscula: <em>June, March, October</em>.
        </div>
      </div>

      <div class="theory-block">
        <h3>5. Pronunciación: /ð/ y /θ/ (decir la fecha)</h3>
        <p>Cada fecha junta los dos sonidos "th": <strong>the</strong> se pronuncia con voz (/ð/) y los ordinales <em>third, fourth, fifth, eighth, tenth</em>... con la lengua entre los dientes PERO sin voz (/θ/):</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Símbolo</th><th>Sonido</th><th>Palabras del módulo</th></tr></thead>
            <tbody>
              <tr><td><strong>/ð/</strong></td><td>con vibración (como <em>mother</em>)</td><td>the /ðə/ · this · the date /ðə deɪt/ · them /ðem/</td></tr>
              <tr><td><strong>/θ/</strong></td><td>sin vibración (como <em>think</em>)</td><td>third /θɜːd/ · fourth /fɔːθ/ · fifth /fɪfθ/ · eighth /ˈeɪtθ/ · month /mʌnθ/</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          🔊 <em>the fifth</em> = /ðə fɪfθ/ → cambia el "motor" a la mitad: <strong>the</strong> vibra y <strong>fifth</strong> no.
        </div>
      </div>
    `,
    vocab: [
      { english: "first", translation: "primero/a (1°)", phonetic: "/fɜːst/" },
      { english: "second", translation: "segundo (2°)", phonetic: "/ˈsekənd/" },
      { english: "third", translation: "tercero (3°)", phonetic: "/θɜːd/" },
      { english: "fourth", translation: "cuarto (4°)", phonetic: "/fɔːθ/" },
      { english: "fifth", translation: "quinto (5°)", phonetic: "/fɪfθ/" },
      { english: "sixth", translation: "sexto (6°)", phonetic: "/sɪksθ/" },
      { english: "seventh", translation: "séptimo (7°)", phonetic: "/ˈsevnθ/" },
      { english: "eighth", translation: "octavo (8°)", phonetic: "/ˈeɪtθ/" },
      { english: "ninth", translation: "noveno (9°)", phonetic: "/naɪnθ/" },
      { english: "tenth", translation: "décimo (10°)", phonetic: "/tenθ/" },
      { english: "eleventh", translation: "undécimo (11°)", phonetic: "/ɪˈlevnθ/" },
      { english: "twelfth", translation: "duodécimo (12°)", phonetic: "/twelfθ/" },
      { english: "thirteenth", translation: "decimotercero (13°)", phonetic: "/ˌθɜːˈtiːnθ/" },
      { english: "fourteenth", translation: "decimocuarto (14°)", phonetic: "/ˌfɔːˈtiːnθ/" },
      { english: "fifteenth", translation: "decimoquinto (15°)", phonetic: "/ˌfɪfˈtiːnθ/" },
      { english: "sixteenth", translation: "decimosexto (16°)", phonetic: "/ˌsɪksˈtiːnθ/" },
      { english: "seventeenth", translation: "decimoséptimo (17°)", phonetic: "/ˌsevnˈtiːnθ/" },
      { english: "eighteenth", translation: "decimoctavo (18°)", phonetic: "/ˌeɪˈtiːnθ/" },
      { english: "nineteenth", translation: "decimonoveno (19°)", phonetic: "/ˌnaɪnˈtiːnθ/" },
      { english: "twentieth", translation: "vigésimo (20°)", phonetic: "/ˈtwentiəθ/" },
      { english: "twenty-first", translation: "vigesimoprimero (21°)", phonetic: "/ˌtwentiˈfɜːst/" },
      { english: "twenty-second", translation: "vigesimosegundo (22°)", phonetic: "/ˌtwentiˈsekənd/" },
      { english: "twenty-third", translation: "vigesimotercero (23°)", phonetic: "/ˌtwentiˈθɜːd/" },
      { english: "twenty-fourth", translation: "vigesimocuarto (24°)", phonetic: "/ˌtwentiˈfɔːθ/" },
      { english: "thirtieth", translation: "trigésimo (30°)", phonetic: "/ˈθɜːtiəθ/" },
      { english: "thirty-first", translation: "trigésimo primero (31°)", phonetic: "/ˌθɜːtiˈfɜːst/" },
      { english: "the first of October", translation: "el 1 de octubre", phonetic: "/ðə ˈfɜːst əv ɒkˈtəʊbə/" },
      { english: "the third Friday in June", translation: "el tercer viernes de junio", phonetic: "/ðə ˈθɜːd ˈfraɪdeɪ ɪn dʒuːn/" },
      { english: "What's the date today?", translation: "¿Qué fecha es hoy?", phonetic: "/wɒts ðə deɪt təˈdeɪ/" },
      { english: "I love going to the cinema.", translation: "Me encanta ir al cine.", phonetic: "/aɪ ˈlʌv ˈɡəʊɪŋ tə ðə ˈsɪnəmə/" },
      { english: "I don't mind cooking.", translation: "No me importa cocinar.", phonetic: "/aɪ dəʊnt ˈmaɪnd ˈkʊkɪŋ/" },
      { english: "She hates shopping.", translation: "Odia ir de compras.", phonetic: "/ʃiː ˈheɪts ˈʃɒpɪŋ/" }
    ],
    exercises: [
      { question: "Complete: I love ___ (cook) for my friends.", type: "input", answer: "cooking", placeholder: "verb + -ing", explanation: "like/love/hate + verbo -ing: love cooking." },
      { question: "Choose the correct option: We don't mind ___ (wait) for the bus.", options: ["wait", "waiting", "waits"], type: "choice", correct: 1, explanation: "Después de don't mind el verbo va en -ing: don't mind waiting." },
      { question: "Write the ordinal: My birthday is on the 4th of July → the ___ of July.", type: "input", answer: "fourth", placeholder: "ordinal", explanation: "4 = fourth (cuarto)." },
      { question: "Order the words (a date in the title of this unit):", pool: ["third", "in", "June", "Friday", "the"], correct: ["the", "third", "Friday", "in", "June"], type: "scramble", explanation: "The third Friday in June = el tercer viernes de junio." },
      { question: "Listening: Listen and type the sentence you hear.", type: "listening", speakText: "She loves cooking", answer: "she loves cooking", explanation: "La frase hablada es 'She loves cooking' (like + -ing)." }
    ]
  },

  // -------------------------------------------------------------------------
  // UNIDAD 6C — revisión be or do? + música (Making music)
  // -------------------------------------------------------------------------
  "6C": {
    title: "6C: Revision — Be or Do? (Making Music)",
    module: 6,
    theory: `
      <div class="theory-block">
        <h3>1. Revisión: ¿preguntar con be o con do?</h3>
        <p>Para hacer preguntas correctas decide si la información es un <strong>estado</strong> (be) o una <strong>acción</strong> (do/does):</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Pregunta</th><th>Respuesta</th><th>¿Por qué?</th></tr></thead>
            <tbody>
              <tr><td><strong>Are</strong> you tired?</td><td>Yes, I am.</td><td>Estado (adjetivo) → be</td></tr>
              <tr><td><strong>Do</strong> you play an instrument?</td><td>Yes, I do.</td><td>Acción con verbo → do</td></tr>
              <tr><td><strong>Is</strong> she a musician?</td><td>Yes, she is.</td><td>Profesión con noun → be</td></tr>
              <tr><td><strong>Does</strong> she like classical music?</td><td>Yes, she does.</td><td>Verbo principal (like) → does</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 Regla rápida: si en la afirmación dirías <em>I am / you are / he is</em>, pregunta con <em>be</em>. Si dirías <em>I play, she likes</em> (un verbo), pregunta con <em>do/does</em>.
        </div>
      </div>

      <div class="theory-block">
        <h3>2. Preguntas con be (identidad, estado, lugar)</h3>
        <p>Estructura: <strong>(Wh-) + am/is/are + sujeto</strong> — igual que en el Módulo 1 (1A) pero ahora con temas de música:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Pregunta con be</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td><strong>Are</strong> you a musician?</td><td>¿Eres músico?</td></tr>
              <tr><td><strong>Where</strong> <strong>are</strong> you from?</td><td>¿De dónde eres?</td></tr>
              <tr><td><strong>What's</strong> the date today?</td><td>¿Qué fecha es hoy?</td></tr>
              <tr><td><strong>Is</strong> the concert at nine?</td><td>¿El concierto es a las nueve?</td></tr>
              <tr><td><strong>Who's</strong> your favourite singer?</td><td>¿Quién es tu cantante favorito?</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ Con be el resto puede ser <em>adjetivo</em> (tired), <em>noun</em> (a musician) o <em>lugar</em> (from New York), pero NUNCA un verbo con otra acción: <em>Do you a musician?</em> ❌ → <em>Are you a musician?</em> ✅.
        </div>
      </div>

      <div class="theory-block">
        <h3>3. Preguntas con do / does (acciones y rutinas)</h3>
        <p>Estructura: <strong>(Wh-) + do/does + sujeto + verbo en forma base</strong> — la misma máquina del present simple (4C/5C) con temas de música:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Pregunta con do/does</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td><strong>Do</strong> you sing?</td><td>¿Cantas?</td></tr>
              <tr><td><strong>Do</strong> you like jazz?</td><td>¿Te gusta el jazz?</td></tr>
              <tr><td><strong>Does</strong> he play the piano?</td><td>¿Toca él el piano?</td></tr>
              <tr><td><strong>Where</strong> <strong>does</strong> she play?</td><td>¿Dónde toca ella?</td></tr>
              <tr><td><strong>What</strong> <strong>does</strong> your brother listen to?</td><td>¿Qué escucha tu hermano?</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ Con he/she/it usamos <strong>does</strong> + verbo en base: <em>Does she <strong>play</strong>...?</em> ✅ · <em>Does she <strong>plays</strong>...?</em> ❌.
        </div>
      </div>

      <div class="theory-block">
        <h3>4. Dar opiniones: What do you think of...?</h3>
        <p>Para opinar sobre música, bandas o canciones preguntamos <strong>What do you think of...?</strong> y respondemos con <strong>I think</strong> + sujeto + <strong>is/are</strong> + <strong>adjetivo</strong>:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Pregunta</th><th>Opinión</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td>What do you think of classical music?</td><td><strong>I think</strong> it<strong>'s</strong> relaxing.</td><td>Me parece relajante.</td></tr>
              <tr><td>What do you think of that new band?</td><td><strong>I think</strong> they<strong>'re</strong> fantastic.</td><td>Me parecen fantásticos.</td></tr>
              <tr><td>What do you think of the saxophone?</td><td>I <strong>don't</strong> like it very much.</td><td>No me gusta mucho.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 Adjetivos útiles para opiniones: <em>fantastic · great · relaxing · boring · terrible · slow · fast · loud</em>.
        </div>
      </div>

      <div class="theory-block">
        <h3>5. Pronunciación: el sonido /j/ (la "y")</h3>
        <p>Varias palabras del módulo esconden el sonido semi-vocálico <strong>/j/</strong> (como la "y" de <em>yes</em>):</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Palabra</th><th>Transcripción</th><th>Nota</th></tr></thead>
            <tbody>
              <tr><td>yes</td><td>/jes/</td><td>/j/ al inicio</td></tr>
              <tr><td>you</td><td>/juː/</td><td>/j/ + vocal larga</td></tr>
              <tr><td>year</td><td>/jɪə/</td><td>/j/ + diftongo</td></tr>
              <tr><td>music</td><td>/ˈmjuːzɪk/</td><td><strong>mu- = /mjuː/</strong> (m + y)</td></tr>
              <tr><td>musician</td><td>/mjuˈzɪʃn/</td><td>same /mju/-</td></tr>
              <tr><td>beautiful</td><td>/ˈbjuːtɪfl/</td><td><strong>beau- = /bjuː/</strong> (b + y)</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ <em>music</em> no se pronuncia "mu" español: di <strong>m-yu</strong> = /ˈmjuːzɪk/. Igual con <em>musician</em> y <em>beautiful</em>.
        </div>
      </div>
    `,
    vocab: [
      { english: "accordion", translation: "acordeón", phonetic: "/əˈkɔːdiən/" },
      { english: "bass guitar", translation: "bajo (eléctrico)", phonetic: "/ˌbeɪs ɡɪˈtɑː/" },
      { english: "drum", translation: "tambor", phonetic: "/drʌm/" },
      { english: "instrument", translation: "instrumento", phonetic: "/ˈɪnstrəmənt/" },
      { english: "keyboard", translation: "teclado (musical)", phonetic: "/ˈkiːbɔːd/" },
      { english: "musician", translation: "músico/a", phonetic: "/mjuˈzɪʃn/" },
      { english: "piano", translation: "piano", phonetic: "/piˈænəʊ/" },
      { english: "saxophone", translation: "saxofón", phonetic: "/ˈsæksəfəʊn/" },
      { english: "trumpet", translation: "trompeta", phonetic: "/ˈtrʌmpɪt/" },
      { english: "violin", translation: "violín", phonetic: "/ˌvaɪəˈlɪn/" },
      { english: "sing", translation: "cantar", phonetic: "/sɪŋ/" },
      { english: "dance", translation: "bailar", phonetic: "/dɑːns/" },
      { english: "song", translation: "canción", phonetic: "/sɒŋ/" },
      { english: "band", translation: "banda / grupo", phonetic: "/bænd/" },
      { english: "concert", translation: "concierto", phonetic: "/ˈkɒnsət/" },
      { english: "classical music", translation: "música clásica", phonetic: "/ˌklæsɪkl ˈmjuːzɪk/" },
      { english: "What do you think of...?", translation: "¿Qué piensas de...?", phonetic: "/wɒt duː juː ˈθɪŋk ɒv/" },
      { english: "I think it's fantastic.", translation: "Me parece fantástico.", phonetic: "/aɪ ˈθɪŋk ɪts fænˈtæstɪk/" }
    ],
    exercises: [
      { question: "Complete the question: ___ you like classical music? (be/do)", type: "input", answer: "do", placeholder: "be or do?", explanation: "like es un verbo → pregunta con Do: Do you like classical music?" },
      { question: "Choose the correct question:", options: ["Where are you from?", "Where do you from?"], type: "choice", correct: 0, explanation: "Estado/lugar con be: Where are you from? (do necesita verbo: Where do you LIVE?)" },
      { question: "Complete: ___ she play the piano? — Yes, she does.", type: "input", answer: "Does", placeholder: "Do / Does", explanation: "Con she usamos Does + verbo en base: Does she play...?" },
      { question: "Order the words to ask about music:", pool: ["play", "Do", "the", "you", "piano", "?"], correct: ["Do", "you", "play", "the", "piano", "?"], type: "scramble", explanation: "Do + sujeto + verbo base + complemento + ?: Do you play the piano?" },
      { question: "Listening: Listen and type the question you hear.", type: "listening", speakText: "Do you like jazz", answer: "do you like jazz", explanation: "La pregunta hablada es 'Do you like jazz?' (do + verbo en base)." }
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
          <li><strong>can / can't</strong> para hablar de habilidades: <em>can + verbo base</em>, sin <em>to</em> y sin conjugar.</li>
          <li><strong>Present continuous</strong> (am/is/are + <em>-ing</em>) para el ahora y lo temporal, con las reglas de ortografía del gerundio.</li>
          <li><strong>Present simple</strong> para rutinas, horarios y hechos, frente al <strong>continuous</strong> para lo que pasa ahora.</li>
          <li><strong>The weather and seasons</strong> con <em>it's raining, it's snowing, the sun is shining</em>.</li>
        </ul>
      </div>
      <div class="theory-block">
        <h3>Revisión de las tres estructuras</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Unidad</th><th>Pregunta clave</th><th>Estructura</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td><strong>5A</strong></td><td>¿Puede hacerlo?</td><td>can / can't + verbo base</td><td>He <strong>can swim</strong>. / He <strong>can't drive</strong>.</td></tr>
              <tr><td><strong>5B</strong></td><td>¿Lo está haciendo ahora?</td><td>am/is/are + not + verbo + <strong>-ing</strong></td><td>She <strong>is reading</strong> a magazine.</td></tr>
              <tr><td><strong>5C</strong></td><td>¿Es rutina o es ahora?</td><td>Simple: <em>work</em> · Continuous: <strong>is working</strong></td><td>He <strong>works</strong> at home. / He <strong>is working</strong> at the moment.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 <strong>No mezcles las estructuras:</strong> <em>He isn't works here</em> ❌ → <em>He <strong>doesn't work</strong> here</em> ✅ · <em>He doesn't working here</em> ❌ → <em>He <strong>isn't working</strong> here</em> ✅
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ <strong>can</strong> sin <em>to</em> y sin <em>-s</em> · <strong>continuous</strong> con <em>-ing</em> · <strong>doesn't</strong> siempre con verbo base.
        </div>
      </div>
    `,
    vocab: [
      { english: "speak three languages", translation: "hablar tres idiomas", phonetic: "/spiːk θriː ˈlæŋ.ɡwɪ.dʒɪz/" },
      { english: "play the guitar", translation: "tocar la guitarra", phonetic: "/pleɪ ðə ɡɪˈtɑːr/" },
      { english: "Yes, I can.", translation: "Sí, puedo.", phonetic: "/jes aɪ kæn/" },
      { english: "is listening to music", translation: "está escuchando música", phonetic: "/ɪz ˈlɪs.ən.ɪŋ tə ˈmjuː.zɪk/" },
      { english: "are working", translation: "están trabajando", phonetic: "/ɑː ˈwɜː.kɪŋ/" },
      { english: "at the moment", translation: "en este momento", phonetic: "/ət ðə ˈməʊ.mənt/" },
      { english: "It's raining.", translation: "Está lloviendo.", phonetic: "/ɪts ˈreɪ.nɪŋ/" },
      { english: "every day", translation: "todos los días", phonetic: "/ˈev.ri deɪ/" }
    ],
    exercises: [
      { question: "Complete: My brother ___ (play) the drums, but he can't play the piano.", type: "input", answer: "can play", placeholder: "can + base", explanation: "can + verbo en forma base: can play." },
      { question: "Select correct: ___ your sister ___ a magazine at the moment?", options: ["Is / reading", "Is / reads", "Does / reading"], type: "choice", correct: 0, explanation: "'At the moment' pide present continuous: Is your sister reading...?" },
      { question: "Complete negative: They ___ (not / work) in an office on Sundays.", type: "input", answer: "don't work", placeholder: "don't + base", explanation: "Rutina con 'they': don't + verbo base." },
      { question: "Select: Look! The sun ___ (shine).", options: ["is shining", "shines", "shine"], type: "choice", correct: 0, explanation: "'Look!' + el clima: present continuous con -ing." },
      { question: "Order the words (swim → swimming):", pool: ["is", "He", "swimming", "in", "the", "river"], correct: ["He", "is", "swimming", "in", "the", "river"], type: "scramble", explanation: "Orden correcto: He + is + swimming + in + the river (C+V+C dobla la m)." }
    ]
  },

  "RC6": {
    title: "6 Revise & Check (Unidades 6A–6C)",
    module: 6,
    theory: `
      <div class="theory-block">
        <h3>Repaso Integral Unidades 6A, 6B, 6C</h3>
        <p>Consolidación de todo lo aprendido en el bloque 6:</p>
        <ul>
          <li><strong>Object pronouns</strong> (6A): <em>me, you, him, her, it, us, them</em> después de verbos (I love him) y de preposiciones (Look at them!).</li>
          <li><strong>like + verbo -ing</strong> (6B): la escalera love / like / don't mind / don't like / hate + <em>cooking</em>, <em>waiting</em>...</li>
          <li><strong>Ordinales y fechas</strong> (6B): the first → the thirty-first; fechas con <em>the + ordinal + of + mes</em> (the seventeenth of June).</li>
          <li><strong>Revisión: be or do?</strong> (6C): estados con <em>be</em> (Are you tired?), acciones con <em>do/does</em> (Does she play?).</li>
          <li><strong>Dar opiniones</strong> (6C): <em>What do you think of...?</em> → <em>I think it's fantastic.</em></li>
        </ul>
      </div>
      <div class="theory-block">
        <h3>Revisión de las tres estructuras</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Unidad</th><th>Pregunta clave</th><th>Estructura</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td><strong>6A</strong></td><td>¿Quién recibe la acción?</td><td>verbo / preposición + <strong>object pronoun</strong></td><td>I love <strong>him</strong>. / It's <strong>for me</strong>.</td></tr>
              <tr><td><strong>6B</strong></td><td>¿Te gusta hacer algo?</td><td>love / like / hate + <strong>verbo -ing</strong></td><td>She <strong>likes dancing</strong>. / They <strong>hate waiting</strong>.</td></tr>
              <tr><td><strong>6C</strong></td><td>¿Estado o acción?</td><td>be: <strong>Is/Are</strong> she...? · do: <strong>Do/Does</strong> she...</td><td>Are you tired? / Do you sing?</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 <strong>Object pronouns</strong> después del verbo · <strong>like + -ing</strong> nunca con infinitivo con to · <strong>does</strong> siempre con verbo en forma base.
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ <em>I love he</em> ❌ → <em>I love <strong>him</strong></em> ✅ · <em>He doesn't likes</em> ❌ → <em>He <strong>doesn't like</strong></em> ✅ · <em>Does she plays?</em> ❌ → <em>Does she <strong>play</strong>?</em> ✅
        </div>
      </div>
    `,
    vocab: [
      { english: "him", translation: "lo / a él (objeto)", phonetic: "/hɪm/" },
      { english: "them", translation: "los / a ellos", phonetic: "/ðem/" },
      { english: "I love him.", translation: "Lo amo.", phonetic: "/aɪ ˈlʌv hɪm/" },
      { english: "I don't mind waiting.", translation: "No me importa esperar.", phonetic: "/aɪ dəʊnt ˈmaɪnd ˈweɪtɪŋ/" },
      { english: "the seventeenth of June", translation: "el 17 de junio", phonetic: "/ðə ˌsevnˈtiːnθ əv dʒuːn/" },
      { english: "the second", translation: "el segundo (2°)", phonetic: "/ðə ˈsekənd/" },
      { english: "Do you play the piano?", translation: "¿Tocas el piano?", phonetic: "/duː juː ˌpleɪ ðə piˈænəʊ/" },
      { english: "play the drums", translation: "tocar la batería", phonetic: "/pleɪ ðə drʌmz/" }
    ],
    exercises: [
      { question: "Complete with an object pronoun: I like Anna, but I don't see ___ very often.", type: "input", answer: "her", placeholder: "pronoun", explanation: "Después del verbo see va el pronombre objeto: her (refiere a Anna)." },
      { question: "Select the correct form: My friends love ___ football.", options: ["play", "playing"], type: "choice", correct: 1, explanation: "love + verbo -ing: love playing." },
      { question: "Select: ___ your brother like classical music?", options: ["Do", "Does", "Is"], type: "choice", correct: 1, explanation: "Tercera persona + verbo (like) → Does: Does your brother like...?" },
      { question: "Write in words: the 2nd of May = the ___ of May.", type: "input", answer: "second", placeholder: "ordinal", explanation: "2 = second (segundo)." },
      { question: "Order the words (6B: no molesta):", pool: ["I", "waiting", "don't", "mind"], correct: ["I", "don't", "mind", "waiting"], type: "scramble", explanation: "don't mind + -ing: I don't mind waiting." }
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
          <h3>Grammar Bank 5A: can / can't</h3>
          <p>• Habilidad: <strong>can</strong> + verbo en <strong>forma base</strong> (can swim, can play).<br>
          • Negativo: <strong>can't</strong> (= cannot) + forma base (can't drive).<br>
          • Pregunta: <strong>Can</strong> + sujeto + forma base? (Can you type?).<br>
          • Respuesta: Yes, I <strong>can</strong>. / No, I <strong>can't</strong>.<br>
          • <strong>can</strong> es igual para todas las personas y <strong>no se conjuga</strong>; además <strong>no lleva <em>to</em></strong>.<br>
          • <strong>Can I...?</strong> pide permiso; <strong>Can I...?</strong> es la habilidad, <strong>Do I know...?</strong> el conocimiento y <strong>Do I live...?</strong> la residencia.</p>
        </div>
        <div class="theory-block">
          <h3>Grammar Bank 5B: Present continuous</h3>
          <p>• Afirmativo: <strong>am/is/are</strong> + verbo + <strong>-ing</strong> (I'm listening).<br>
          • Negativo: am/is/are + <strong>not</strong> + verbo + <strong>-ing</strong> (She <em>isn't watching</em> TV, They <em>aren't working</em>).<br>
          • Pregunta: <strong>Am/Is/Are</strong> + sujeto + <strong>-ing</strong>? (Are you working?).<br>
          • Contracciones: I'm · he's · aren't · isn't.<br>
          • Ortografía: +ing · quita la -e (write → writing) · dobla C+V+C (run → running) · ie → y (lie → lying).<br>
          • Uso: ahora, esta semana, temporalmente. Pronunciación de <strong>-ing</strong> = /ŋ/.</p>
        </div>
        <div class="theory-block">
          <h3>Grammar Bank 5C: Present simple or present continuous?</h3>
          <p>• <strong>Simple</strong> = rutina, horario, hecho, opinión: <em>usually, every day, on Mondays</em> → I <strong>work</strong> here.<br>
          • <strong>Continuous</strong> = ahora, esta semana, cambio: <em>now, at the moment, Look!, Listen!</em> → I <strong>am working</strong> here.<br>
          • Negativo simple: <strong>doesn't</strong> + base (doesn't work). Negativo continuous: <strong>isn't / aren't</strong> + <strong>-ing</strong>.<br>
          • Pregunta simple: <strong>Do/Does</strong> + base. Pregunta continuous: <strong>Is/Are</strong> + <strong>-ing</strong>.<br>
          • Error típico: <em>He is living in London</em> ❌ → <em>He <strong>lives</strong> in London</em> ✅ (sin marcador temporal).<br>
          • Weather: it's raining, it's snowing, the sun is shining. Seasons: in spring, in summer, in autumn, in winter.</p>
        </div>
      `,
      exercises: [
        { question: "5A.a: Complete: She (can / cans) (drive / to drive) a car.", type: "input", answer: "can drive", placeholder: "can + base", explanation: "can + verbo en forma base: can drive (sin to y sin -s)." },
        { question: "5A.b: Select: He (can't / doesn't) play the guitar.", options: ["can't", "doesn't"], type: "choice", correct: 0, explanation: "Habilidad negativa: can't + forma base." },
        { question: "5A.c: Complete the short answer: - Do you speak French? - Yes, I ___.", type: "input", answer: "can", placeholder: "can / can't", explanation: "Respuesta corta afirmativa: Yes, I can." },
        { question: "5B.a: Select: Look! They ___ right now. (It is 3 p.m.)", options: ["aren't working", "don't work"], type: "choice", correct: 0, explanation: "'Look!' + hora concreta pide present continuous negativo: aren't working." },
        { question: "5B.b: Select the correct form: (runing / running / run) — He is ___ now.", options: ["runing", "running", "run"], type: "choice", correct: 1, explanation: "C+V+C (r-u-n): se dobla la n → running." },
        { question: "5B.c: Complete: She's (write / writing / writting) an email at the moment.", type: "input", answer: "writing", placeholder: "-ing form", explanation: "Se quita la -e final: write → writing." },
        { question: "5C.a: Complete: My parents (don't live / aren't living) in a small town.", type: "input", answer: "don't live", placeholder: "don't + base", explanation: "Hecho permanente y sin marcador: present simple con don't + base." },
        { question: "5C.b: Select: It's cold and it's ___ (snow / snows / snowing).", options: ["snow", "snows", "snowing"], type: "choice", correct: 2, explanation: "El clima va con 'it' + gerundio: it's snowing." },
        { question: "5C.c: Complete: Look! It ___ (snow) in the mountains.", type: "input", answer: "is snowing", placeholder: "is + -ing", explanation: "El clima va con 'it' + gerundio: it's snowing." }
      ]
    },
    6: {
      label: "Grammar Bank 6",
      theory: `
        <div class="theory-block">
          <h3>Grammar Bank 6A: Object pronouns</h3>
          <p>• Los <strong>object pronouns</strong> van después de un <strong>verbo</strong> o de una <strong>preposición</strong>: <em>I love him. / Can you help me? / Look at them! / It's for me.</em><br>
          • Tabla sujeto → objeto: <strong>I → me · you → you · he → him · she → her · it → it · we → us · they → them</strong>.<br>
          • Errores típicos: <em>I love he</em> ❌ → <em>I love <strong>him</strong></em> ✅ · <em>It's for I</em> ❌ → <em>It's for <strong>me</strong></em> ✅.<br>
          • Reacciones cortas con objeto: <em>Me too</em> (= yo también) · <em>Not me</em> (= yo no) · <em>It's me</em> (= soy yo).</p>
        </div>
        <div class="theory-block">
          <h3>Grammar Bank 6B: Like + -ing, ordinales y fechas</h3>
          <p>• <strong>like / love / don't mind / don't like / hate</strong> + <strong>verbo -ing</strong>: <em>I love cooking. We don't mind waiting.</em><br>
          • Con he/she/it negamos con <strong>doesn't</strong>: <em>He doesn't like waiting.</em><br>
          • Ordinales: <em>1st first, 2nd second, 3rd third... 20th twentieth, 21st twenty-first, 31st thirty-first</em>.<br>
          • Trampas: <em>eight → eighth</em> · <em>nine → ninth</em> · <em>five → fifth</em> · <em>twelve → twelfth</em> · <em>twenty → twentieth</em>.<br>
          • Fechas: <em>the + ordinal + of + mes</em> o <em>mes + the + ordinal</em>: <em>the seventeenth of June = June the seventeenth</em>.<br>
          • Años de dos en dos: <em>1977 → nineteen seventy-seven</em>.</p>
        </div>
        <div class="theory-block">
          <h3>Grammar Bank 6C: Revisión — be or do?</h3>
          <p>• <strong>be</strong> para estados, identidad y lugar: <em>Are you tired? Is she a musician? What's the date today?</em><br>
          • <strong>do/does</strong> para acciones con verbo principal: <em>Do you sing? Does he play the piano?</em><br>
          • <strong>does</strong> siempre con verbo en forma base: <em>Does she play...?</em> ✅ · <em>Does she plays...?</em> ❌.<br>
          • Opiniones: <em>What do you think of...?</em> → <em>I think it's relaxing / fantastic.</em></p>
        </div>
      `,
      exercises: [
        { question: "6A.a: Complete: I love Kate, but she doesn't love ___ (I).", type: "input", answer: "me", placeholder: "pronoun", explanation: "Después del verbo love va el pronombre objeto: me." },
        { question: "6A.b: Select: I can't find (he / him) anywhere.", options: ["he", "him"], type: "choice", correct: 1, explanation: "Verbo + object pronoun: find him." },
        { question: "6A.c: Complete: Can you help ___ (we) with these suitcases?", type: "input", answer: "us", placeholder: "pronoun", explanation: "we (sujeto) → us (objeto) después del verbo help." },
        { question: "6A.d: Complete: Look at ___ (they)!", type: "input", answer: "them", placeholder: "pronoun", explanation: "Después de la preposición at va el objeto: them." },
        { question: "6B.a: Complete: I love ___ (cook) for my family.", type: "input", answer: "cooking", placeholder: "verb + -ing", explanation: "like/love/hate + verbo -ing: love cooking." },
        { question: "6B.b: Select: She doesn't mind (wait / waiting).", options: ["wait", "waiting"], type: "choice", correct: 1, explanation: "Después de don't mind el verbo va en -ing: mind waiting." },
        { question: "6B.c: Write the date in words: 21.03 → the twenty-first of ___.", type: "input", answer: "march", placeholder: "month", explanation: "Estructura de fecha: the + ordinal + of + mes → the twenty-first of March." },
        { question: "6C.a: Select: (Do / Are) you like classical music?", options: ["Do", "Are"], type: "choice", correct: 0, explanation: "like es un verbo → pregunta con Do: Do you like...?" },
        { question: "6C.b: Complete: ___ she play the piano? — Yes, she does.", type: "input", answer: "Does", placeholder: "Do / Does", explanation: "Tercera persona (she) → Does + verbo base." },
        { question: "6C.c: Select the correct question: (Where do you live? / Where you live?)", options: ["Where do you live?", "Where you live?"], type: "choice", correct: 0, explanation: "Pregunta con do/does necesita el auxiliar: Where DO you live?" }
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
        { key: "abilities", label: "Abilities (can / can't)" },
        { key: "continuous", label: "Now (Present Continuous)" },
        { key: "weather", label: "Weather & Seasons" }
      ],
      data: {
        abilities: [
          { english: "buy a newspaper", translation: "comprar un periódico", phonetic: "/baɪ ə ˈnjuːz.peɪ.pər/" },
          { english: "drive a car", translation: "conducir un carro", phonetic: "/draɪv ə kɑːr/" },
          { english: "play the guitar", translation: "tocar la guitarra", phonetic: "/pleɪ ðə ɡɪˈtɑːr/" },
          { english: "cook", translation: "cocinar", phonetic: "/kʊk/" },
          { english: "speak three languages", translation: "hablar tres idiomas", phonetic: "/spiːk θriː ˈlæŋ.ɡwɪ.dʒɪz/" },
          { english: "use a computer", translation: "usar una computadora", phonetic: "/juːz ə kəmˈpjuː.tər/" },
          { english: "swim", translation: "nadar", phonetic: "/swɪm/" },
          { english: "ride a bike", translation: "andar en bicicleta", phonetic: "/raɪd ə baɪk/" },
          { english: "type", translation: "escribir a máquina / teclear", phonetic: "/taɪp/" },
          { english: "send an email", translation: "enviar un correo electrónico", phonetic: "/send ən ˈiː.meɪl/" },
          { english: "Yes, I can.", translation: "Sí, puedo.", phonetic: "/jes aɪ kæn/" },
          { english: "No, I can't.", translation: "No, no puedo.", phonetic: "/nəʊ aɪ kɑːnt/" },
          { english: "Can I open the window?", translation: "¿Puedo abrir la ventana?", phonetic: "/kæn aɪ ˈəʊ.pən ðə ˈwɪn.dəʊ/" },
          { english: "of course", translation: "por supuesto", phonetic: "/əv kɔːs/" }
        ],
        continuous: [
          { english: "get up", translation: "levantarse", phonetic: "/ɡet ʌp/" },
          { english: "have a shower", translation: "ducharse", phonetic: "/hæv ə ˈʃaʊ.ər/" },
          { english: "have breakfast", translation: "desayunar", phonetic: "/hæv ˈbrek.fəst/" },
          { english: "watch TV", translation: "ver la televisión", phonetic: "/wɒtʃ ˌtiːˈviː/" },
          { english: "listen to music", translation: "escuchar música", phonetic: "/ˈlɪs.ən tə ˈmjuː.zɪk/" },
          { english: "read a magazine", translation: "leer una revista", phonetic: "/riːd ə ˌmæɡ.əˈziːn/" },
          { english: "study English", translation: "estudiar inglés", phonetic: "/ˈstʌd.i ˈɪŋ.ɡlɪʃ/" },
          { english: "work in an office", translation: "trabajar en una oficina", phonetic: "/wɜːk ɪn ən ˈɒf.ɪs/" },
          { english: "meet friends", translation: "quedar con amigos", phonetic: "/miːt frendz/" },
          { english: "clean the house", translation: "limpiar la casa", phonetic: "/kliːn ðə haʊs/" },
          { english: "is studying", translation: "está estudiando", phonetic: "/ɪz ˈstʌd.i.ɪŋ/" },
          { english: "are working", translation: "están trabajando", phonetic: "/ɑː ˈwɜː.kɪŋ/" },
          { english: "I'm not washing", translation: "no estoy lavando", phonetic: "/aɪm nɒt ˈwɒʃ.ɪŋ/" },
          { english: "at the moment", translation: "en este momento / ahora mismo", phonetic: "/ət ðə ˈməʊ.mənt/" },
          { english: "Look!", translation: "¡Mira!", phonetic: "/lʊk/" }
        ],
        weather: [
          { english: "sunny", translation: "soleado", phonetic: "/ˈsʌn.i/" },
          { english: "cloudy", translation: "nublado", phonetic: "/ˈklaʊ.di/" },
          { english: "rainy", translation: "lluvioso", phonetic: "/ˈreɪ.ni/" },
          { english: "windy", translation: "ventoso", phonetic: "/ˈwɪn.di/" },
          { english: "snowy", translation: "nevado", phonetic: "/ˈsnəʊ.i/" },
          { english: "foggy", translation: "con niebla", phonetic: "/ˈfɒɡ.i/" },
          { english: "hot", translation: "caluroso", phonetic: "/hɒt/" },
          { english: "cold", translation: "frío", phonetic: "/kəʊld/" },
          { english: "warm", translation: "templado", phonetic: "/wɔːm/" },
          { english: "cool", translation: "fresco", phonetic: "/kuːl/" },
          { english: "wet", translation: "húmedo / mojado", phonetic: "/wet/" },
          { english: "dry", translation: "seco", phonetic: "/draɪ/" },
          { english: "It's raining.", translation: "Está lloviendo.", phonetic: "/ɪts ˈreɪ.nɪŋ/" },
          { english: "It's snowing.", translation: "Está nevando.", phonetic: "/ɪts ˈsnəʊ.ɪŋ/" },
          { english: "The sun is shining.", translation: "El sol brilla.", phonetic: "/ðə sʌn ɪz ˈʃaɪ.nɪŋ/" },
          { english: "spring", translation: "primavera", phonetic: "/sprɪŋ/" },
          { english: "summer", translation: "verano", phonetic: "/ˈsʌm.ər/" },
          { english: "autumn", translation: "otoño", phonetic: "/ˈɔː.təm/" },
          { english: "winter", translation: "invierno", phonetic: "/ˈwɪn.tər/" },
          { english: "it", translation: "ello (referente al clima)", phonetic: "/ɪt/" },
          { english: "the city centre", translation: "el centro de la ciudad", phonetic: "/ðə ˈsɪt.i sen.tər/" },
          { english: "the river", translation: "el río", phonetic: "/ðə ˈrɪv.ər/" },
          { english: "the park", translation: "el parque", phonetic: "/ðə pɑːk/" },
          { english: "the station", translation: "la estación", phonetic: "/ðə ˈsteɪ.ʃən/" }
        ]
      }
    },
    6: {
      label: "Vocabulary Bank 6",
      categories: [
        { key: "story", label: "Words in a Story (6A)" },
        { key: "ordinals", label: "Ordinals & Dates (6B)" },
        { key: "music", label: "Music (6C)" }
      ],
      data: {
        story: [
          { english: "arrive", translation: "llegar (a un lugar)", phonetic: "/əˈraɪv/" },
          { english: "comfortable", translation: "cómodo/a", phonetic: "/ˈkʌmftəbl/" },
          { english: "decide", translation: "decidir", phonetic: "/dɪˈsaɪd/" },
          { english: "desert", translation: "desierto", phonetic: "/ˈdezət/" },
          { english: "inside", translation: "dentro (de)", phonetic: "/ˌɪnˈsaɪd/" },
          { english: "into", translation: "dentro de / hacia dentro", phonetic: "/ˈɪntu/" },
          { english: "leave", translation: "irse / dejar", phonetic: "/liːv/" },
          { english: "mountain", translation: "montaña", phonetic: "/ˈmaʊntən/" },
          { english: "palace", translation: "palacio", phonetic: "/ˈpæləs/" },
          { english: "sell", translation: "vender", phonetic: "/sel/" },
          { english: "strange", translation: "extraño/a", phonetic: "/streɪndʒ/" },
          { english: "surprised", translation: "sorprendido/a", phonetic: "/səˈpraɪzd/" },
          { english: "through", translation: "a través de", phonetic: "/θruː/" },
          { english: "toward", translation: "hacia", phonetic: "/təˈwɔːd/" },
          { english: "valuable", translation: "valioso/a", phonetic: "/ˈvæljuəbl/" },
          { english: "village", translation: "pueblo / aldea", phonetic: "/ˈvɪlɪdʒ/" }
        ],
        ordinals: [
          { english: "first (1st)", translation: "primero (1°)", phonetic: "/fɜːst/" },
          { english: "second (2nd)", translation: "segundo (2°)", phonetic: "/ˈsekənd/" },
          { english: "third (3rd)", translation: "tercero (3°)", phonetic: "/θɜːd/" },
          { english: "fourth (4th)", translation: "cuarto (4°)", phonetic: "/fɔːθ/" },
          { english: "fifth (5th)", translation: "quinto (5°)", phonetic: "/fɪfθ/" },
          { english: "sixth (6th)", translation: "sexto (6°)", phonetic: "/sɪksθ/" },
          { english: "seventh (7th)", translation: "séptimo (7°)", phonetic: "/ˈsevnθ/" },
          { english: "eighth (8th)", translation: "octavo (8°)", phonetic: "/ˈeɪtθ/" },
          { english: "ninth (9th)", translation: "noveno (9°)", phonetic: "/naɪnθ/" },
          { english: "tenth (10th)", translation: "décimo (10°)", phonetic: "/tenθ/" },
          { english: "eleventh (11th)", translation: "undécimo (11°)", phonetic: "/ɪˈlevnθ/" },
          { english: "twelfth (12th)", translation: "duodécimo (12°)", phonetic: "/twelfθ/" },
          { english: "thirteenth (13th)", translation: "decimotercero (13°)", phonetic: "/ˌθɜːˈtiːnθ/" },
          { english: "fourteenth (14th)", translation: "decimocuarto (14°)", phonetic: "/ˌfɔːˈtiːnθ/" },
          { english: "fifteenth (15th)", translation: "decimoquinto (15°)", phonetic: "/ˌfɪfˈtiːnθ/" },
          { english: "sixteenth (16th)", translation: "decimosexto (16°)", phonetic: "/ˌsɪksˈtiːnθ/" },
          { english: "seventeenth (17th)", translation: "decimoséptimo (17°)", phonetic: "/ˌsevnˈtiːnθ/" },
          { english: "eighteenth (18th)", translation: "decimoctavo (18°)", phonetic: "/ˌeɪˈtiːnθ/" },
          { english: "nineteenth (19th)", translation: "decimonoveno (19°)", phonetic: "/ˌnaɪnˈtiːnθ/" },
          { english: "twentieth (20th)", translation: "vigésimo (20°)", phonetic: "/ˈtwentiəθ/" },
          { english: "twenty-first (21st)", translation: "vigesimoprimero (21°)", phonetic: "/ˌtwentiˈfɜːst/" },
          { english: "twenty-second (22nd)", translation: "vigesimosegundo (22°)", phonetic: "/ˌtwentiˈsekənd/" },
          { english: "twenty-third (23rd)", translation: "vigesimotercero (23°)", phonetic: "/ˌtwentiˈθɜːd/" },
          { english: "twenty-fourth (24th)", translation: "vigesimocuarto (24°)", phonetic: "/ˌtwentiˈfɔːθ/" },
          { english: "thirtieth (30th)", translation: "trigésimo (30°)", phonetic: "/ˈθɜːtiəθ/" },
          { english: "thirty-first (31st)", translation: "trigésimo primero (31°)", phonetic: "/ˌθɜːtiˈfɜːst/" }
        ],
        music: [
          { english: "accordion", translation: "acordeón", phonetic: "/əˈkɔːdiən/" },
          { english: "bass guitar", translation: "bajo (eléctrico)", phonetic: "/ˌbeɪs ɡɪˈtɑː/" },
          { english: "drum", translation: "tambor", phonetic: "/drʌm/" },
          { english: "instrument", translation: "instrumento", phonetic: "/ˈɪnstrəmənt/" },
          { english: "keyboard", translation: "teclado (musical)", phonetic: "/ˈkiːbɔːd/" },
          { english: "musician", translation: "músico/a", phonetic: "/mjuˈzɪʃn/" },
          { english: "piano", translation: "piano", phonetic: "/piˈænəʊ/" },
          { english: "saxophone", translation: "saxofón", phonetic: "/ˈsæksəfəʊn/" },
          { english: "trumpet", translation: "trompeta", phonetic: "/ˈtrʌmpɪt/" },
          { english: "violin", translation: "violín", phonetic: "/ˌvaɪəˈlɪn/" },
          { english: "sing", translation: "cantar", phonetic: "/sɪŋ/" },
          { english: "dance", translation: "bailar", phonetic: "/dɑːns/" },
          { english: "song", translation: "canción", phonetic: "/sɒŋ/" },
          { english: "band", translation: "banda / grupo", phonetic: "/bænd/" },
          { english: "concert", translation: "concierto", phonetic: "/ˈkɒnsət/" },
          { english: "classical music", translation: "música clásica", phonetic: "/ˌklæsɪkl ˈmjuːzɪk/" }
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
        { key: "abilities", label: "Abilities (can / can't)" },
        { key: "continuous", label: "Present Continuous" },
        { key: "contrast", label: "Simple vs. Continuous" }
      ],
      data: {
        abilities: [
          { q: "She (can / can to) ride a bike.", opt: ["can", "can to"], c: 0 },
          { q: "He (cans / can't) cook, but he (can / cans) bake.", opt: ["cans", "can't", "can", "cans"], c: 1 },
          { q: "Do you (know / can) speak German?", opt: ["know", "can"], c: 1 },
          { q: "- Can you type? - Yes, I (can / do).", opt: ["can", "do"], c: 0 }
        ],
        continuous: [
          { q: "Look! The children (play / are playing) in the garden.", opt: ["play", "are playing"], c: 1 },
          { q: "He is (runing / running / run) right now.", opt: ["runing", "running", "run"], c: 1 },
          { q: "She isn't (write / writing) an email at the moment.", opt: ["write", "writing"], c: 1 },
          { q: "(Is / Are) your friends working tonight?", opt: ["Is", "Are"], c: 1 }
        ],
        contrast: [
          { q: "My brother (lives / is living) in Lima.", opt: ["lives", "is living"], c: 0 },
          { q: "Listen! Someone (is calling / calls) from the hall.", opt: ["is calling", "calls"], c: 0 },
          { q: "She (doesn't works / doesn't work) on Sundays.", opt: ["doesn't works", "doesn't work"], c: 1 },
          { q: "It's (snows / snowing) in the mountains.", opt: ["snows", "snowing"], c: 1 }
        ]
      }
    },
    6: {
      label: "Banco de Ejercicios (Unidades 6)",
      categories: [
        { key: "pronouns", label: "Pronombres Objeto (6A)" },
        { key: "preferences", label: "Like + -ing (6B)" },
        { key: "dates", label: "Ordinales & Fechas (6B)" },
        { key: "beOrDo", label: "Revisión: be or do? (6C)" }
      ],
      data: {
        pronouns: [
          { q: "I love Sarah, but she doesn't love (I / me).", opt: ["I", "me"], c: 1 },
          { q: "Look at (they / them)! They're laughing.", opt: ["they", "them"], c: 1 },
          { q: "Where are my keys? I can't find (it / them).", opt: ["it", "them"], c: 1 },
          { q: "This song is beautiful. Do you like (it / them)?", opt: ["it", "them"], c: 0 },
          { q: "Our friends visit (we / us) every weekend.", opt: ["we", "us"], c: 1 }
        ],
        preferences: [
          { q: "I love (cook / cooking) at the weekend.", opt: ["cook", "cooking"], c: 1 },
          { q: "He likes (watch / watching) football on TV.", opt: ["watch", "watching"], c: 1 },
          { q: "We don't mind (get up / getting up) early.", opt: ["get up", "getting up"], c: 1 },
          { q: "She hates (shop / shopping) on Saturdays.", opt: ["shop", "shopping"], c: 1 },
          { q: "They like (swim / swimming) in the sea.", opt: ["swim", "swimming"], c: 1 }
        ],
        dates: [
          { q: "Write in words: 3rd → (three / third).", opt: ["three", "third"], c: 1 },
          { q: "The correct way to say 4.2 is: (the fourth of February / the four of February).", opt: ["the fourth of February", "the four of February"], c: 0 },
          { q: "The correct way to say 21.06 is: (the twenty-first of June / the twenty-one of June).", opt: ["the twenty-first of June", "the twenty-one of June"], c: 0 },
          { q: "The ordinal number after 'fourth' is: (fifth / five).", opt: ["fifth", "five"], c: 0 }
        ],
        beOrDo: [
          { q: "___ you like jazz? (Do / Are)", opt: ["Do", "Are"], c: 0 },
          { q: "(Does / Is) she play the violin?", opt: ["Does", "Is"], c: 0 },
          { q: "(Are / Do) you tired? — Yes, I am.", opt: ["Are", "Do"], c: 0 },
          { q: "(Is / Does) your brother a musician?", opt: ["Is", "Does"], c: 0 },
          { q: "(Do / Are) your parents live in a village?", opt: ["Do", "Are"], c: 0 }
        ]
      }
    }
  }
};

// Back-compat aliases (por si algo aún referencia los nombres viejos)
const lessonsDatabase = LESSONS;
const grammarBank4Database = BANKS.grammar[4];
const vocabBank4Data = BANKS.vocab[4].data;
