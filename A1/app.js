/**
 * English File Elementary Study Portal - Core Application Logic
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

// COURSE DATA REPRESENTING FILES 1A to 2C
const lessonsDatabase = {
  "1A": {
    title: "1A: Hello",
    theory: `
      <div class="theory-block">
        <h3>1. Pronombres Sujeto (Subject Pronouns)</h3>
        <p>Los pronombres de sujeto sustituyen a las personas o cosas que realizan la acción de la oración:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Singular</th><th>Plural</th></tr></thead>
            <tbody>
              <tr><td><strong>I</strong> (Yo)</td><td><strong>We</strong> (Nosotros/as)</td></tr>
              <tr><td><strong>You</strong> (Tú/Usted)</td><td><strong>You</strong> (Vosotros/as / Ustedes)</td></tr>
              <tr><td><strong>He</strong> (Él) / <strong>She</strong> (Ella) / <strong>It</strong> (Ello/Objeto/Animal)</td><td><strong>They</strong> (Ellos/as)</td></tr>
            </tbody>
          </table>
        </div>
        <p>⚠️ <strong>Nota:</strong> "I" siempre se escribe con mayúscula. "It" se usa para cosas individuales, y "They" para plurales de personas o cosas.</p>
      </div>
      <div class="theory-block">
        <h3>2. Verbo be - Afirmativo (be positive)</h3>
        <p>El verbo <em>to be</em> (ser/estar) tiene tres formas en el presente afirmativo: <strong>am, is, are</strong>. Normalmente se usan contracciones en el inglés hablado:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Sujeto</th><th>Forma Completa</th><th>Contracción</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>I</td><td><strong>am</strong></td><td><strong>I'm</strong></td><td>I'm a teacher. <em>(Soy profesor)</em></td></tr>
              <tr><td>He / She / It</td><td><strong>is</strong></td><td><strong>He's / She's / It's</strong></td><td>She's in London. <em>(Ella está en Londres)</em></td></tr>
              <tr><td>You / We / They</td><td><strong>are</strong></td><td><strong>You're / We're / They're</strong></td><td>We're fine. <em>(Estamos bien)</em></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    vocab: [
      { english: "Monday", translation: "Lunes", phonetic: "/ˈmʌn.deɪ/" },
      { english: "Tuesday", translation: "Martes", phonetic: "/ˈtjuːz.deɪ/" },
      { english: "Wednesday", translation: "Miércoles", phonetic: "/ˈwenz.deɪ/" },
      { english: "Thursday", translation: "Jueves", phonetic: "/ˈθɜːz.deɪ/" },
      { english: "Friday", translation: "Viernes", phonetic: "/ˈfraɪ.deɪ/" },
      { english: "Saturday", translation: "Sábado", phonetic: "/ˈsæt.ə.deɪ/" },
      { english: "Sunday", translation: "Domingo", phonetic: "/ˈsʌn.deɪ/" },
      { english: "zero", translation: "cero", phonetic: "/ˈzɪə.rəʊ/" },
      { english: "ten", translation: "diez", phonetic: "/ten/" },
      { english: "twelve", translation: "doce", phonetic: "/twelv/" },
      { english: "fifteen", translation: "quince", phonetic: "/ˌfɪfˈtiːn/" },
      { english: "twenty", translation: "veinte", phonetic: "/ˈtwen.ti/" }
    ],
    exercises: [
      { question: "Complete with the correct pronoun: Sara is from Rome. ___ is Italian.", type: "input", answer: "she", placeholder: "He/She/It", explanation: "Usamos 'She' porque Sara es femenino singular." },
      { question: "Complete with 'be': I ___ from Madrid.", type: "input", answer: "am", placeholder: "am/is/are", explanation: "La conjugación del verbo be para 'I' es 'am' o contraction 'I'm'." },
      { question: "Select the correct option: He ___ my brother.", options: ["am", "is", "are"], type: "choice", correct: 1, explanation: "Para 'He' (tercera persona singular) la forma correcta es 'is'." },
      { question: "Order the words to form a correct sentence:", pool: ["is", "He", "teacher", "a"], correct: ["He", "is", "a", "teacher"], type: "scramble", explanation: "La estructura afirmativa es: Sujeto + Verbo be + Complemento." },
      { question: "Listening Dictation: Listen and write the number you hear.", type: "listening", speakText: "fifteen", answer: "15", explanation: "La palabra pronunciada es 'fifteen', que equivale al número 15." }
    ]
  },
  "1B": {
    title: "1B: One World",
    theory: `
      <div class="theory-block">
        <h3>1. Verbo be - Negativo (be negative)</h3>
        <p>Para negar con el verbo <em>to be</em>, agregamos <strong>not</strong> después del verbo:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Sujeto</th><th>Forma Completa</th><th>Contracciones comunes</th></tr></thead>
            <tbody>
              <tr><td>I</td><td>I <strong>am not</strong></td><td><strong>I'm not</strong></td></tr>
              <tr><td>He / She / It</td><td>He/She/It <strong>is not</strong></td><td><strong>He isn't / She isn't / It isn't</strong> <br><em>o: He's not / She's not / It's not</em></td></tr>
              <tr><td>You / We / They</td><td>You/We/They <strong>are not</strong></td><td><strong>You aren't / We aren't / They aren't</strong> <br><em>o: You're not / We're not / They're not</em></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="theory-block">
        <h3>2. Verbo be - Preguntas y Respuestas Cortas (be questions & short answers)</h3>
        <p>Para hacer preguntas, invertimos el orden del sujeto y el verbo be (<strong>Be + Sujeto + ?</strong>). No usamos contracciones en las respuestas cortas afirmativas:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Pregunta</th><th>Respuesta Corta (+)</th><th>Respuesta Corta (-)</th></tr></thead>
            <tbody>
              <tr><td><strong>Am I</strong> late?</td><td>Yes, you are.</td><td>No, you aren't.</td></tr>
              <tr><td><strong>Is she</strong> Chinese?</td><td>Yes, she is. <em>(No: Yes, she's)</em></td><td>No, she isn't.</td></tr>
              <tr><td><strong>Are they</strong> in London?</td><td>Yes, they are.</td><td>No, they aren't.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    vocab: [
      { english: "Argentina", translation: "Argentina", phonetic: "/ˌɑː.dʒənˈtiː.nə/" },
      { english: "Argentinian", translation: "argentino/a", phonetic: "/ˌɑː.dʒənˈtɪn.i.ən/" },
      { english: "Brazil", translation: "Brasil", phonetic: "/brəˈzɪl/" },
      { english: "Brazilian", translation: "brasileño/a", phonetic: "/brəˈzɪl.jən/" },
      { english: "Spain", translation: "España", phonetic: "/speɪn/" },
      { english: "Spanish", translation: "español/a", phonetic: "/ˈspæn.ɪʃ/" },
      { english: "thirty", translation: "treinta", phonetic: "/ˈθɜː.ti/" },
      { english: "fifty", translation: "cincuenta", phonetic: "/ˈfɪf.ti/" },
      { english: "eighty", translation: "ochenta", phonetic: "/ˈeɪ.ti/" },
      { english: "a hundred", translation: "cien", phonetic: "/ə ˈhʌn.drəd/" }
    ],
    exercises: [
      { question: "Make it negative: 'They are late.'", type: "input", answer: "they aren't late", placeholder: "Write the negative sentence", explanation: "Se puede usar 'They aren't late' o 'They're not late'." },
      { question: "Complete the question: ___ you from Spain?", type: "input", answer: "are", placeholder: "Am/Is/Are", explanation: "Para el sujeto 'you', usamos el auxiliar interrogativo 'Are'." },
      { question: "Select correct response: Is he Brazilian?", options: ["Yes, he's.", "Yes, he is.", "Yes, he am."], type: "choice", correct: 1, explanation: "En respuestas cortas afirmativas, no se permiten contracciones: Yes, he is." },
      { question: "Order words to make a question:", pool: ["they", "Are", "ready", "?"], correct: ["Are", "they", "ready", "?"], type: "scramble", explanation: "Pregunta: Verbo be + Sujeto + Adjetivo + ?" },
      { question: "Listening Dictation: Listen and write the number.", type: "listening", speakText: "fifty-six", answer: "56", explanation: "El audio deletrea 'fifty-six' que es 56." }
    ]
  },
  "1C": {
    title: "1C: What’s Your Email?",
    theory: `
      <div class="theory-block">
        <h3>1. Adjetivos Posesivos (Possessive Adjectives)</h3>
        <p>Los adjetivos posesivos van antes de un sustantivo e indican a quién le pertenece algo. No cambian si el sustantivo es plural:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Sujeto</th><th>Posesivo</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>I</td><td><strong>my</strong></td><td>This is <strong>my</strong> email. <em>(Este es mi correo)</em></td></tr>
              <tr><td>you</td><td><strong>your</strong></td><td>What is <strong>your</strong> name? <em>(¿Cuál es tu nombre?)</em></td></tr>
              <tr><td>he</td><td><strong>his</strong></td><td>It's <strong>his</strong> key. <em>(Es su llave - de él)</em></td></tr>
              <tr><td>she</td><td><strong>her</strong></td><td>This is <strong>her</strong> car. <em>(Es su coche - de ella)</em></td></tr>
              <tr><td>it</td><td><strong>its</strong></td><td>Oxford is famous for <strong>its</strong> university. <em>(su universidad - de Oxford)</em></td></tr>
              <tr><td>we</td><td><strong>our</strong></td><td>Welcome to <strong>our</strong> house. <em>(Bienvenidos a nuestra casa)</em></td></tr>
              <tr><td>they</td><td><strong>their</strong></td><td>What are <strong>their</strong> names? <em>(¿Cuáles son sus nombres? - de ellos/as)</em></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    vocab: [
      { english: "Open your books", translation: "Abran sus libros", phonetic: "/ˈəʊ.pən jɔː buːks/" },
      { english: "Close the door", translation: "Cierra la puerta", phonetic: "/kləʊz ðə dɔː/" },
      { english: "Listen and repeat", translation: "Escucha y repite", phonetic: "/ˈlɪs.ən ænd rɪˈpiːt/" },
      { english: "How do you spell it?", translation: "¿Cómo se deletrea?", phonetic: "/haʊ duː juː spel ɪt/" },
      { english: "I don't understand", translation: "No entiendo", phonetic: "/aɪ dəʊnt ˌʌn.dəˈstænd/" },
      { english: "Can you repeat that, please?", translation: "¿Puede repetir eso, por favor?", phonetic: "/kæn juː rɪˈpiːt ðæt pliːz/" }
    ],
    exercises: [
      { question: "Complete: John is here. This is ___ jacket.", type: "input", answer: "his", placeholder: "my/your/his/her...", explanation: "Usamos 'his' porque John es masculino (He)." },
      { question: "Complete: We are students. ___ teacher is Mr. Green.", type: "input", answer: "our", placeholder: "my/your/his/her...", explanation: "Usamos 'our' porque el sujeto es 'We' (nosotros)." },
      { question: "Select correct adjective: The dog wants ___ toy.", options: ["her", "its", "their"], type: "choice", correct: 1, explanation: "Usamos 'its' para posesivos relacionados a animales o cosas en singular." },
      { question: "Order the words: '¿Cómo te llamas?'", pool: ["your", "name", "What", "is", "?"], correct: ["What", "is", "your", "name", "?"], type: "scramble", explanation: "Estructura de pregunta: Wh-word + be + possessive + noun + ?" },
      { question: "Listening Dictation: Listen to the spellings and write the word.", type: "listening", speakText: "h, e, l, l, o", answer: "hello", explanation: "Se deletrea H-E-L-L-O." }
    ]
  },
  "2A": {
    title: "2A: Are You Tidy or Untidy?",
    theory: `
      <div class="theory-block">
        <h3>1. Singular and Plural Nouns</h3>
        <p>En inglés usamos <strong>a</strong> o <strong>an</strong> antes de sustantivos singulares contables. <strong>A</strong> va con sonidos de consonante y <strong>an</strong> con sonidos de vocal.</p>
        <p>Para formar el plural, seguimos estas reglas ortográficas generales:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Regla</th><th>Singular</th><th>Plural</th></tr></thead>
            <tbody>
              <tr><td>Regla general: Añadir <strong>-s</strong></td><td>a book</td><td>book<strong>s</strong></td></tr>
              <tr><td>Terminados en -ch, -sh, -s, -x: Añadir <strong>-es</strong></td><td>a watch</td><td>watch<strong>es</strong></td></tr>
              <tr><td>Consonante + -y: Cambia a <strong>-ies</strong></td><td>a dictionary</td><td>dictionar<strong>ies</strong></td></tr>
              <tr><td>Plurales Irregulares comunes</td><td>a child / man / woman / person</td><td><strong>children / men / women / people</strong></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="theory-block">
        <h3>2. El artículo definido: The</h3>
        <p>Usamos <strong>the</strong> cuando nos referimos a algo específico ya conocido por el hablante y oyente. Es el mismo para singular y plural: <em>the book / the books</em>.</p>
      </div>
    `,
    vocab: [
      { english: "a key", translation: "una llave", phonetic: "/ə kiː/" },
      { english: "a watch", translation: "un reloj de pulsera", phonetic: "/ə wɒtʃ/" },
      { english: "a laptop", translation: "una computadora portátil", phonetic: "/ə ˈlæp.tɒp/" },
      { english: "headphones", translation: "auriculares (plural)", phonetic: "/ˈhed.fəʊnz/" },
      { english: "glasses", translation: "lentes / gafas (plural)", phonetic: "/ˈɡlɑː.sɪz/" },
      { english: "an umbrella", translation: "un paraguas", phonetic: "/ən ʌmˈbrel.ə/" }
    ],
    exercises: [
      { question: "Complete with a/an: She has ___ expensive watch.", type: "input", answer: "an", placeholder: "a/an", explanation: "Usamos 'an' porque 'expensive' empieza con sonido de vocal." },
      { question: "Write the plural of 'city':", type: "input", answer: "cities", placeholder: "plural form", explanation: "Termina en consonante + 'y', por lo que cambia a '-ies'." },
      { question: "Select the correct plural of 'man':", options: ["mans", "men", "mens"], type: "choice", correct: 1, explanation: "'Man' es un sustantivo irregular y su plural es 'men'." },
      { question: "Order the words to form: '¿Dónde están mis llaves?'", pool: ["are", "Where", "keys", "my", "?"], correct: ["Where", "are", "my", "keys", "?"], type: "scramble", explanation: "Pregunta: Wh-word + be + possessive + noun + ?" },
      { question: "Listening Dictation: Write the object you hear.", type: "listening", speakText: "umbrella", answer: "umbrella", explanation: "La palabra es 'umbrella'." }
    ]
  },
  "2B": {
    title: "2B: Made in the UK",
    theory: `
      <div class="theory-block">
        <h3>1. Reglas de los Adjetivos (Adjectives rules)</h3>
        <p>Los adjetivos describen sustantivos. En inglés, siguen dos reglas muy importantes:</p>
        <p>📌 <strong>Regla 1: Posición.</strong> Los adjetivos van **antes del sustantivo** o **después del verbo be**.</p>
        <ul>
          <li><em>It's a <strong>red</strong> car. (Antes del sustantivo)</em></li>
          <li><em>The car is <strong>red</strong>. (Después del verbo be)</em></li>
        </ul>
        <p>📌 <strong>Regla 2: Invariables.</strong> Los adjetivos nunca añaden "-s" en plural.</p>
        <ul>
          <li><em>They are <strong>old</strong> keys. (No: olds keys)</em></li>
        </ul>
      </div>
      <div class="theory-block">
        <h3>2. Modificadores: very y quite</h3>
        <p>Van antes del adjetivo para graduar su intensidad:</p>
        <ul>
          <li><strong>quite</strong> (bastante): <em>It's quite cold. (Hace bastante frío)</em></li>
          <li><strong>very</strong> (muy): <em>She is very rich. (Ella es muy rica)</em></li>
        </ul>
      </div>
    `,
    vocab: [
      { english: "cheap", translation: "barato", phonetic: "/tʃiːp/" },
      { english: "expensive", translation: "caro", phonetic: "/ɪkˈspen.sɪv/" },
      { english: "easy", translation: "fácil", phonetic: "/ˈiː.zi/" },
      { english: "difficult", translation: "difícil", phonetic: "/ˈdɪf.ɪ.kəlt/" },
      { english: "dirty", translation: "sucio", phonetic: "/ˈdɜː.ti/" },
      { english: "clean", translation: "limpio", phonetic: "/kliːn/" }
    ],
    exercises: [
      { question: "Translate or correct: 'Son libros caros.' -> They are ___ ___.", type: "input", answer: "expensive books", placeholder: "two words", explanation: "El adjetivo 'expensive' va antes del sustantivo y no lleva 's' aunque sea plural." },
      { question: "Complete: The exam is ___ (bastante) easy.", type: "input", answer: "quite", placeholder: "modifier", explanation: "El modificador que significa 'bastante' es 'quite'." },
      { question: "Select the correct sentence:", options: ["They are bigs houses.", "They are big houses.", "They houses are big."], type: "choice", correct: 1, explanation: "Los adjetivos no se pluralizan ('big houses' es la forma correcta)." },
      { question: "Order the words to form: 'Es un auto muy rápido.'", pool: ["fast", "a", "car", "It's", "very"], correct: ["It's", "a", "very", "fast", "car"], type: "scramble", explanation: "Estructura: Sujeto + be + a + modificador + adjetivo + sustantivo." },
      { question: "Listening Dictation: Write the adjective you hear.", type: "listening", speakText: "dangerous", answer: "dangerous", explanation: "La palabra pronunciada es 'dangerous'." }
    ]
  },
  "2C": {
    title: "2C: Slow Down!",
    theory: `
      <div class="theory-block">
        <h3>1. Imperativos (Imperatives)</h3>
        <p>Los imperativos se usan para dar órdenes directas, instrucciones o consejos. Usamos la forma base del verbo sin sujeto:</p>
        <ul>
          <li><strong>Afirmativo:</strong> Verbo Base + Complemento. <br><em>Example: <strong>Open</strong> the window. (Abre la ventana) / <strong>Slow</strong> down. (Reduce la velocidad)</em></li>
          <li><strong>Negativo:</strong> Don't + Verbo Base + Complemento. <br><em>Example: <strong>Don't</strong> eat that! (No te comas eso) / <strong>Don't</strong> smoke here. (No fumes aquí)</em></li>
        </ul>
      </div>
      <div class="theory-block">
        <h3>2. Sugerencias con: Let's</h3>
        <p>Para hacer sugerencias incluyendo a uno mismo, usamos <strong>Let's</strong> (let us) seguido del verbo en forma base:</p>
        <ul>
          <li><strong>Let's go</strong> to the cinema. <em>(Vamos al cine)</em></li>
          <li><strong>Let's not stop</strong> here. <em>(No nos detengamos aquí - negativo)</em></li>
        </ul>
      </div>
    `,
    vocab: [
      { english: "hungry", translation: "hambriento/a (tener hambre)", phonetic: "/ˈhʌŋ.ɡri/" },
      { english: "thirsty", translation: "sediento/a (tener sed)", phonetic: "/ˈθɜː.sti/" },
      { english: "tired", translation: "cansado/a", phonetic: "/taɪəd/" },
      { english: "cold", translation: "frío (tener frío)", phonetic: "/kəʊld/" },
      { english: "angry", translation: "enojado/a", phonetic: "/ˈæŋ.ɡri/" },
      { english: "frightened", translation: "asustado/a", phonetic: "/ˈfraɪ.tənd/" }
    ],
    exercises: [
      { question: "Complete the imperative negation: ___ drive fast! The road is wet.", type: "input", answer: "don't", placeholder: "Do/Don't", explanation: "Para imperativos negativos usamos 'Don't' al principio." },
      { question: "Complete for suggestion: It's late. ___ go home.", type: "input", answer: "let's", placeholder: "Let's/Let", explanation: "Usamos 'Let's' para proponer hacer una acción juntos." },
      { question: "Select the correct phrase:", options: ["No smoke here.", "Not smoke here.", "Don't smoke here."], type: "choice", correct: 2, explanation: "El imperativo negativo correcto es 'Don't' + verbo base." },
      { question: "Order the words to make a suggestion: 'No paremos aquí.'", pool: ["not", "Let's", "stop", "here"], correct: ["Let's", "not", "stop", "here"], type: "scramble", explanation: "La forma negativa de una propuesta es: Let's + not + verbo + complemento." },
      { question: "Listening Dictation: What is the feeling spoken?", type: "listening", speakText: "thirsty", answer: "thirsty", explanation: "La palabra pronunciada es 'thirsty' (tener sed)." }
    ]
  },
  "RC12": {
    title: "1 & 2 Revise and Check",
    theory: `
      <div class="theory-block">
        <h3>Repaso General: Files 1 & 2</h3>
        <p>Esta sección resume los conceptos evaluados en el examen de revisión de los módulos 1 y 2:</p>
        <ul>
          <li><strong>Gramática:</strong> El verbo <em>be</em> en todos sus formatos, los pronombres sujeto, adjetivos posesivos, sustantivos singulares y plurales con sus artículos, la sintaxis de los adjetivos y el uso de imperativos y sugerencias con <em>let's</em>.</li>
          <li><strong>Vocabulario:</strong> Días de la semana, números 0-100, países y nacionalidades, lenguaje del salón, cosas personales y cotidianas, adjetivos calificativos y colores, así como la terminología de sentimientos.</li>
          <li><strong>Pronunciación:</strong> Entonación de preguntas, pronunciación de plurales (-s, -es, -ies), sonidos de vocales largas y cortas, y fonemas consonánticos básicos.</li>
        </ul>
      </div>
    `,
    vocab: [
      { english: "Welcome", translation: "Bienvenido/a", phonetic: "/ˈwel.kəm/" },
      { english: "Goodbye", translation: "Adiós", phonetic: "/ˌɡʊdˈbaɪ/" },
      { english: "Excuse me", translation: "Disculpe", phonetic: "/ɪkˈskjuːz ˌmiː/" },
      { english: "Thank you", translation: "Gracias", phonetic: "/θæŋk juː/" }
    ],
    exercises: [
      { question: "Grammar: They ___ from Paris, they are from Lyon.", type: "input", answer: "aren't", placeholder: "am not/isn't/aren't", explanation: "Con 'They' y para indicar contradicción, usamos el be negativo 'aren't'." },
      { question: "Grammar: She is a student. ___ name is Maria.", type: "input", answer: "her", placeholder: "possessive", explanation: "Posesivo femenino singular es 'her'." },
      { question: "Grammar: Write the plural of 'baby':", type: "input", answer: "babies", placeholder: "plural", explanation: "Termina en consonante + y, por ende cambia a 'babies'." },
      { question: "Grammar: Choose correct option: ___ go to the park.", options: ["Let's not", "Don't lets", "No let's"], type: "choice", correct: 0, explanation: "'Let's not' es la negación correcta para sugerencias." },
      { question: "Vocabulary: The opposite of 'expensive' is:", type: "input", answer: "cheap", placeholder: "adjective", explanation: "El opuesto de costoso/caro es barato ('cheap')." },
      { question: "Vocabulary: Your mother and father are your ___.", type: "input", answer: "parents", placeholder: "family word", explanation: "Padre y madre juntos son 'parents'." },
      { question: "Vocabulary: Choose correct spelling:", options: ["Wensday", "Wednesday", "Wednesdey"], type: "choice", correct: 1, explanation: "La ortografía correcta es 'Wednesday'." },
      { question: "Pronunciation: Select word with a different vowel sound:", options: ["cat", "bag", "day"], type: "choice", correct: 2, explanation: "'Cat' y 'bag' tienen el sonido /æ/, mientras que 'day' tiene el diptongo /eɪ/." },
      { question: "Pronunciation: Select word with different plural sound (/ɪz/):", options: ["watches", "classes", "keys"], type: "choice", correct: 2, explanation: "'Watches' y 'classes' terminan en el sonido /ɪz/. 'Keys' termina en /z/." },
      { question: "Listening Dictation: Spell this word.", type: "listening", speakText: "c, l, a, s, s", answer: "class", explanation: "C-L-A-S-S deletrea 'class'." }
    ]
  }
};

// GRAMMAR BANK 1, 2, AND 3 DATA
const grammarBankDatabase = {
  "1": {
    theory: `
      <h3>Grammar Bank 1 (Files 1A, 1B, 1C)</h3>
      <p><strong>1A: Verb be positive (+) & Subject Pronouns:</strong></p>
      <ul>
        <li>Singular: <em>I'm, you're, he's, she's, it's</em></li>
        <li>Plural: <em>we're, you're, they're</em></li>
        <li>El pronombre <em>you</em> se usa tanto para singular como plural.</li>
      </ul>
      <p style="margin-top: 1rem;"><strong>1B: Verb be negative (-) & questions (?):</strong></p>
      <ul>
        <li>Para negar: Sujeto + be + not (contracciones: <em>isn't, aren't</em>).</li>
        <li>Para preguntar: Be + Sujeto + Complemento + ?.</li>
        <li>Respuestas cortas: <em>Yes, I am. / No, I'm not. / Yes, he is. / No, he isn't.</em></li>
      </ul>
      <p style="margin-top: 1rem;"><strong>1C: Possessive Adjectives:</strong></p>
      <ul>
        <li>Acompañan a sustantivos: <em>my, your, his, her, its, our, their</em>.</li>
        <li><em>his</em> = de él (masculino). <em>her</em> = de ella (femenino). <em>their</em> = de ellos/as (plural).</li>
      </ul>
    `,
    questions: [
      { question: "Complete: They ___ in the classroom, they are in the library.", type: "input", answer: "aren't", explanation: "be negativo para they es aren't." },
      { question: "Complete: ___ she from Italy? Yes, she is.", type: "input", answer: "is", explanation: "be interrogativo para she es Is." },
      { question: "Select correct response: Are you a student?", options: ["Yes, I'm.", "Yes, I am.", "Yes, am I."], type: "choice", correct: 1, explanation: "No se usa contracción en respuestas cortas afirmativas." },
      { question: "Complete: This is my friend. ___ name is Lucas.", type: "input", answer: "his", explanation: "Posesivo masculino singular es his." },
      { question: "Complete: We are sisters. ___ parents are doctors.", type: "input", answer: "our", explanation: "Posesivo para we es our." },
      { question: "Select correct option: Where ___ you from?", options: ["am", "is", "are"], type: "choice", correct: 2, explanation: "Verbo be para 'you' es 'are'." },
      { question: "Translate or correct: 'Ella no es de Canadá.' -> She ___ from Canada.", type: "input", answer: "isn't", explanation: "Contracción de 'is not' es 'isn't'." },
      { question: "Order the words to form a question:", pool: ["is", "your", "What", "phone number", "?"], correct: ["What", "is", "your", "phone number", "?"], type: "scramble", explanation: "Pregunta: What + is + your + phone number + ?" },
      { question: "Complete: This is my cat. ___ name is Fluffy.", type: "input", answer: "its", explanation: "Posesivo para un animal singular es 'its'." },
      { question: "Complete: I am French, but ___ husband is English.", type: "input", answer: "my", explanation: "Como hablo de mí (I am French), el posesivo correspondiente es my." }
    ]
  },
  "2": {
    theory: `
      <h3>Grammar Bank 2 (Files 2A, 2B, 2C)</h3>
      <p><strong>2A: Singular & Plural Nouns; a/an, the:</strong></p>
      <ul>
        <li><em>a</em> antes de sonido consonante (<em>a key</em>), <em>an</em> antes de sonido vocal (<em>an identity card</em>).</li>
        <li>Plurales: Añadir <em>-s</em> (keys), <em>-es</em> tras ch/sh/s/x (watches), <em>-ies</em> tras consonante + y (countries).</li>
        <li><em>The</em> se usa para sustantivos singulares o plurales específicos.</li>
      </ul>
      <p style="margin-top: 1rem;"><strong>2B: Adjectives:</strong></p>
      <ul>
        <li>Van antes de un sustantivo (<em>a cheap watch</em>) o tras el verbo be (<em>it is cheap</em>).</li>
        <li>Los adjetivos en inglés NO llevan plural: <em>expensive cars</em>.</li>
        <li>Modificadores: <em>very</em> (muy), <em>quite</em> (bastante).</li>
      </ul>
      <p style="margin-top: 1rem;"><strong>2C: Imperatives & Let's:</strong></p>
      <ul>
        <li>Imperativos afirmativos: verbo base (<em>Slow down!</em>).</li>
        <li>Imperativos negativos: <em>Don't</em> + verbo base (<em>Don't talk!</em>).</li>
        <li>Propuestas: <em>Let's</em> (Let's go) o <em>Let's not</em> (Let's not stop) + verbo base.</li>
      </ul>
    `,
    questions: [
      { question: "Complete: I need ___ dictionary.", type: "input", answer: "a", explanation: "dictionary empieza con sonido consonante, por ende lleva 'a'." },
      { question: "Write the plural of 'country':", type: "input", answer: "countries", explanation: "Consonante + 'y' cambia a 'countries'." },
      { question: "Select correct plural for 'woman':", options: ["womans", "women", "womens"], type: "choice", correct: 1, explanation: "El plural de 'woman' es 'women' (irregular)." },
      { question: "Complete: It's an ___ (interesante) book.", type: "input", answer: "interesting", explanation: "Interesting se escribe antes del sustantivo y va precedido de 'an'." },
      { question: "Select correct sentence:", options: ["The classes are difficults.", "The classes are difficult.", "The classes is difficult."], type: "choice", correct: 1, explanation: "Adjetivos no se pluralizan y 'classes' es plural, requiere 'are'." },
      { question: "Complete the imperative negation: ___ shout! The baby is sleeping.", type: "input", answer: "don't", explanation: "Negación imperativa usa Don't." },
      { question: "Complete the suggestion: It's sunny. ___ go for a walk.", type: "input", answer: "let's", explanation: "Usamos Let's para sugerir una actividad conjunta." },
      { question: "Order the words to make an imperative:", pool: ["your", "Open", "books", "please"], correct: ["Open", "your", "books", "please"], type: "scramble", explanation: "Imperativo: Verbo + posesivo + sustantivo + please." },
      { question: "Complete: We have two ___ (niños).", type: "input", answer: "children", explanation: "El plural de child es children." },
      { question: "Select correct option: The car is ___ cheap.", options: ["quite", "quites", "very quite"], type: "choice", correct: 0, explanation: "El modificador correcto es 'quite'." }
    ]
  },
  "3": {
    theory: `
      <h3>Grammar Bank 3 (Files 3A, 3B, 3C)</h3>
      <p><strong>3A: Present Simple (+) and (-) (I/you/we/they & he/she/it):</strong></p>
      <ul>
        <li>Para I/you/we/they: verbo en forma base (<em>I live in London, we don't have a car</em>).</li>
        <li>Para he/she/it (tercera persona): añadir <em>-s / -es / -ies</em> al verbo en afirmativas.</li>
        <li>Negación tercera persona: <strong>doesn't + verbo en forma base (sin -s)</strong>.</li>
        <li>Negación otras personas: <strong>don't + verbo base</strong>.</li>
      </ul>
      <p style="margin-top: 1rem;"><strong>3B: Present Simple (?):</strong></p>
      <ul>
        <li>Preguntas con I/you/we/they: <strong>Do + Sujeto + Verbo base + ?</strong></li>
        <li>Preguntas con he/she/it: <strong>Does + Sujeto + Verbo base (¡sin -s!) + ?</strong></li>
      </ul>
      <p style="margin-top: 1rem;"><strong>3C: Word Order in Questions:</strong></p>
      <ul>
        <li>Orden estándar (ASI): <strong>Auxiliar (Do/Does) + Sujeto + Infinitivo</strong>.</li>
        <li>Orden con pronombre interrogativo (QUASI): <strong>Question Word (What/Where/Who) + Auxiliar + Sujeto + Infinitivo</strong>.</li>
      </ul>
    `,
    questions: [
      { question: "Complete Present Simple: She ___ (live) in a big flat.", type: "input", answer: "lives", explanation: "En 3ª persona afirmativa agregamos -s: lives." },
      { question: "Complete negation: He ___ (not / like) football.", type: "input", answer: "doesn't like", explanation: "Tercera persona requiere 'doesn't' y verbo en base." },
      { question: "Complete: Where ___ you work?", type: "input", answer: "do", explanation: "Auxiliar para you es do." },
      { question: "Complete: ___ your mother speak English?", type: "input", answer: "does", explanation: "Auxiliar para 'your mother' (she) es Does." },
      { question: "Select correct option: What does he want?", options: ["He wants a coffee.", "He want a coffee.", "He does wants a coffee."], type: "choice", correct: 0, explanation: "En afirmativas de tercera persona el verbo lleva -s (wants)." },
      { question: "Complete: They ___ (not / study) on Sundays.", type: "input", answer: "don't study", explanation: "Negación para 'they' es 'don't' + verbo base." },
      { question: "Complete: Does he ___ (have) a car?", type: "input", answer: "have", explanation: "En preguntas, el verbo va en forma base (have), no 'has'." },
      { question: "Order the words to make a question:", pool: ["she", "Where", "live", "does", "?"], correct: ["Where", "does", "she", "live", "?"], type: "scramble", explanation: "Estructura QUASI: Question word + Auxiliar + Sujeto + Verbo." },
      { question: "Complete: My brother ___ (watch) television after dinner.", type: "input", answer: "watches", explanation: "Verbo terminado en ch añade -es en tercera persona: watches." },
      { question: "Select correct sentence:", options: ["What do you do on weekends?", "What does you do on weekends?", "What you do on weekends?"], type: "choice", correct: 0, explanation: "Estructura correcta: Question word + do + you + verb base." }
    ]
  }
};

// INTERACTIVE EXERCISES DATABASE (AgendaWeb & PDF content)
const exercisesDatabase = {
  "be": [
    {
      "question": "I ___ (be) a student.",
      "answer": "am"
    },
    {
      "question": "He ___ (be) my brother.",
      "answer": "is"
    },
    {
      "question": "They ___ (be) from Spain.",
      "answer": "are"
    },
    {
      "question": "We ___ (be) very happy today.",
      "answer": "are"
    },
    {
      "question": "She ___ (be, negative) at home right now.",
      "answer": [
        "isn't",
        "is not"
      ]
    },
    {
      "question": "___ (be) you from Argentina?",
      "answer": "are"
    },
    {
      "question": "It ___ (be) a beautiful day.",
      "answer": "is"
    },
    {
      "question": "You ___ (be, negative) late for class.",
      "answer": [
        "aren't",
        "are not"
      ]
    },
    {
      "question": "___ (be) he your English teacher?",
      "answer": "is"
    },
    {
      "question": "I ___ (be, negative) tired.",
      "answer": [
        "am not",
        "i'm not"
      ]
    },
    {
      "question": "We ___ (be, negative) ready yet.",
      "answer": [
        "aren't",
        "are not"
      ]
    },
    {
      "question": "Where ___ (be) the keys of the classroom?",
      "answer": "are"
    },
    {
      "question": "This dictionary ___ (be) very heavy.",
      "answer": "is"
    },
    {
      "question": "Mary and Paul ___ (be) married.",
      "answer": "are"
    },
    {
      "question": "How old ___ (be) Sofia?",
      "answer": "is"
    },
    {
      "question": "John ___ (be) in the garden.",
      "answer": "is"
    },
    {
      "question": "John ___ (be, negative) tired today.",
      "answer": [
        "isn't",
        "is not"
      ]
    },
    {
      "question": "My father ___ (be) in the garden.",
      "answer": "is"
    },
    {
      "question": "My father ___ (be, negative) tired today.",
      "answer": [
        "isn't",
        "is not"
      ]
    },
    {
      "question": "My sister ___ (be) in the garden.",
      "answer": "is"
    },
    {
      "question": "My sister ___ (be, negative) tired today.",
      "answer": [
        "isn't",
        "is not"
      ]
    },
    {
      "question": "The dog ___ (be) in the garden.",
      "answer": "is"
    },
    {
      "question": "The dog ___ (be, negative) tired today.",
      "answer": [
        "isn't",
        "is not"
      ]
    },
    {
      "question": "London ___ (be) in the garden.",
      "answer": "is"
    },
    {
      "question": "London ___ (be, negative) tired today.",
      "answer": [
        "isn't",
        "is not"
      ]
    },
    {
      "question": "The car ___ (be) in the garden.",
      "answer": "is"
    },
    {
      "question": "The car ___ (be, negative) tired today.",
      "answer": [
        "isn't",
        "is not"
      ]
    },
    {
      "question": "The teacher ___ (be) in the garden.",
      "answer": "is"
    },
    {
      "question": "The teacher ___ (be, negative) tired today.",
      "answer": [
        "isn't",
        "is not"
      ]
    },
    {
      "question": "Peter ___ (be) in the garden.",
      "answer": "is"
    },
    {
      "question": "Peter ___ (be, negative) tired today.",
      "answer": [
        "isn't",
        "is not"
      ]
    },
    {
      "question": "Laura ___ (be) in the garden.",
      "answer": "is"
    },
    {
      "question": "Laura ___ (be, negative) tired today.",
      "answer": [
        "isn't",
        "is not"
      ]
    },
    {
      "question": "Mr. Green ___ (be) in the garden.",
      "answer": "is"
    },
    {
      "question": "Mr. Green ___ (be, negative) tired today.",
      "answer": [
        "isn't",
        "is not"
      ]
    },
    {
      "question": "My parents ___ (be) from London.",
      "answer": "are"
    },
    {
      "question": "My parents ___ (be, negative) ready.",
      "answer": [
        "aren't",
        "are not"
      ]
    },
    {
      "question": "My brothers ___ (be) from London.",
      "answer": "are"
    },
    {
      "question": "My brothers ___ (be, negative) ready.",
      "answer": [
        "aren't",
        "are not"
      ]
    },
    {
      "question": "The children ___ (be) from London.",
      "answer": "are"
    },
    {
      "question": "The children ___ (be, negative) ready.",
      "answer": [
        "aren't",
        "are not"
      ]
    },
    {
      "question": "The windows ___ (be) from London.",
      "answer": "are"
    },
    {
      "question": "The windows ___ (be, negative) ready.",
      "answer": [
        "aren't",
        "are not"
      ]
    },
    {
      "question": "Mary and I ___ (be) from London.",
      "answer": "are"
    },
    {
      "question": "Mary and I ___ (be, negative) ready.",
      "answer": [
        "aren't",
        "are not"
      ]
    },
    {
      "question": "These books ___ (be) from London.",
      "answer": "are"
    },
    {
      "question": "These books ___ (be, negative) ready.",
      "answer": [
        "aren't",
        "are not"
      ]
    },
    {
      "question": "The keys ___ (be) from London.",
      "answer": "are"
    },
    {
      "question": "The keys ___ (be, negative) ready.",
      "answer": [
        "aren't",
        "are not"
      ]
    },
    {
      "question": "The dogs ___ (be) from London.",
      "answer": "are"
    },
    {
      "question": "The dogs ___ (be, negative) ready.",
      "answer": [
        "aren't",
        "are not"
      ]
    },
    {
      "question": "The students ___ (be) from London.",
      "answer": "are"
    },
    {
      "question": "The students ___ (be, negative) ready.",
      "answer": [
        "aren't",
        "are not"
      ]
    },
    {
      "question": "Those cars ___ (be) from London.",
      "answer": "are"
    },
    {
      "question": "Those cars ___ (be, negative) ready.",
      "answer": [
        "aren't",
        "are not"
      ]
    },
    {
      "question": "___ (be) john at work?",
      "answer": "is"
    },
    {
      "question": "___ (be) my father at work?",
      "answer": "is"
    },
    {
      "question": "___ (be) my sister at work?",
      "answer": "is"
    },
    {
      "question": "___ (be) the dog at work?",
      "answer": "is"
    },
    {
      "question": "___ (be) london at work?",
      "answer": "is"
    },
    {
      "question": "___ (be) the car at work?",
      "answer": "is"
    },
    {
      "question": "___ (be) the teacher at work?",
      "answer": "is"
    },
    {
      "question": "___ (be) peter at work?",
      "answer": "is"
    },
    {
      "question": "___ (be) my parents open?",
      "answer": "are"
    },
    {
      "question": "___ (be) my brothers open?",
      "answer": "are"
    },
    {
      "question": "___ (be) the children open?",
      "answer": "are"
    },
    {
      "question": "___ (be) the windows open?",
      "answer": "are"
    },
    {
      "question": "___ (be) mary and i open?",
      "answer": "are"
    },
    {
      "question": "___ (be) these books open?",
      "answer": "are"
    },
    {
      "question": "___ (be) the keys open?",
      "answer": "are"
    }
  ],
  "pronouns": [
    {
      "question": "Lucas is from Brazil. ___ (pronoun) speaks Portuguese.",
      "answer": "he"
    },
    {
      "question": "The keys are on the table. ___ (pronoun) are gold.",
      "answer": "they"
    },
    {
      "question": "Anna and I are friends. ___ (pronoun) study English together.",
      "answer": "we"
    },
    {
      "question": "Where is the dictionary? ___ (pronoun) is in the school bag.",
      "answer": "it"
    },
    {
      "question": "Are ___ (pronoun) ready, Peter?",
      "answer": "you"
    },
    {
      "question": "My sisters are teachers. ___ (pronoun) work in Madrid.",
      "answer": "they"
    },
    {
      "question": "Hello, I am John. ___ (pronoun) am from New York.",
      "answer": "i"
    },
    {
      "question": "This cat is very cute. ___ (pronoun) is sleeping on the chair.",
      "answer": "it"
    },
    {
      "question": "Sofia is very tidy. ___ (pronoun) has a clean room.",
      "answer": "she"
    },
    {
      "question": "Tom and Mike, can ___ (pronoun) help me with these boxes?",
      "answer": "you"
    },
    {
      "question": "My parents are at home. ___ (pronoun) are watching television.",
      "answer": "they"
    },
    {
      "question": "We are late! ___ (pronoun) need to run.",
      "answer": "we"
    },
    {
      "question": "Excuse me, are ___ (pronoun) the new teacher?",
      "answer": "you"
    },
    {
      "question": "The dog wants food. ___ (pronoun) is hungry.",
      "answer": "it"
    },
    {
      "question": "Elena is happy because ___ (pronoun) passed the test.",
      "answer": "she"
    },
    {
      "question": "David is happy. ___ (pronoun) is smiling.",
      "answer": "he"
    },
    {
      "question": "My father is happy. ___ (pronoun) is smiling.",
      "answer": "he"
    },
    {
      "question": "My brother is happy. ___ (pronoun) is smiling.",
      "answer": "he"
    },
    {
      "question": "The doctor is happy. ___ (pronoun) is smiling.",
      "answer": "he"
    },
    {
      "question": "The waiter is happy. ___ (pronoun) is smiling.",
      "answer": "he"
    },
    {
      "question": "The actor is happy. ___ (pronoun) is smiling.",
      "answer": "he"
    },
    {
      "question": "Mr. Green is happy. ___ (pronoun) is smiling.",
      "answer": "he"
    },
    {
      "question": "Tom is happy. ___ (pronoun) is smiling.",
      "answer": "he"
    },
    {
      "question": "Peter is happy. ___ (pronoun) is smiling.",
      "answer": "he"
    },
    {
      "question": "The boy is happy. ___ (pronoun) is smiling.",
      "answer": "he"
    },
    {
      "question": "Maria is at home. ___ (pronoun) is reading a book.",
      "answer": "she"
    },
    {
      "question": "Laura is at home. ___ (pronoun) is reading a book.",
      "answer": "she"
    },
    {
      "question": "My mother is at home. ___ (pronoun) is reading a book.",
      "answer": "she"
    },
    {
      "question": "My sister is at home. ___ (pronoun) is reading a book.",
      "answer": "she"
    },
    {
      "question": "The nurse is at home. ___ (pronoun) is reading a book.",
      "answer": "she"
    },
    {
      "question": "The waitress is at home. ___ (pronoun) is reading a book.",
      "answer": "she"
    },
    {
      "question": "The actress is at home. ___ (pronoun) is reading a book.",
      "answer": "she"
    },
    {
      "question": "Mrs. Smith is at home. ___ (pronoun) is reading a book.",
      "answer": "she"
    },
    {
      "question": "Sarah is at home. ___ (pronoun) is reading a book.",
      "answer": "she"
    },
    {
      "question": "The girl is at home. ___ (pronoun) is reading a book.",
      "answer": "she"
    },
    {
      "question": "The book is here. ___ (pronoun) is very useful.",
      "answer": "it"
    },
    {
      "question": "The dog is here. ___ (pronoun) is very useful.",
      "answer": "it"
    },
    {
      "question": "The cat is here. ___ (pronoun) is very useful.",
      "answer": "it"
    },
    {
      "question": "The key is here. ___ (pronoun) is very useful.",
      "answer": "it"
    },
    {
      "question": "The car is here. ___ (pronoun) is very useful.",
      "answer": "it"
    },
    {
      "question": "The table is here. ___ (pronoun) is very useful.",
      "answer": "it"
    },
    {
      "question": "London is here. ___ (pronoun) is very useful.",
      "answer": "it"
    },
    {
      "question": "The school is here. ___ (pronoun) is very useful.",
      "answer": "it"
    },
    {
      "question": "The dictionary is here. ___ (pronoun) is very useful.",
      "answer": "it"
    },
    {
      "question": "The computer is here. ___ (pronoun) is very useful.",
      "answer": "it"
    },
    {
      "question": "The books are old. ___ (pronoun) are from England.",
      "answer": "they"
    },
    {
      "question": "The dogs are old. ___ (pronoun) are from England.",
      "answer": "they"
    },
    {
      "question": "The keys are old. ___ (pronoun) are from England.",
      "answer": "they"
    },
    {
      "question": "My parents are old. ___ (pronoun) are from England.",
      "answer": "they"
    },
    {
      "question": "My brothers are old. ___ (pronoun) are from England.",
      "answer": "they"
    },
    {
      "question": "Sofia and Maria are old. ___ (pronoun) are from England.",
      "answer": "they"
    },
    {
      "question": "The students are old. ___ (pronoun) are from England.",
      "answer": "they"
    },
    {
      "question": "The teachers are old. ___ (pronoun) are from England.",
      "answer": "they"
    },
    {
      "question": "The cars are old. ___ (pronoun) are from England.",
      "answer": "they"
    },
    {
      "question": "The houses are old. ___ (pronoun) are from England.",
      "answer": "they"
    },
    {
      "question": "John and I are students. ___ (pronoun) study in Oxford.",
      "answer": "we"
    },
    {
      "question": "My brother and I are students. ___ (pronoun) study in Oxford.",
      "answer": "we"
    },
    {
      "question": "My sister and I are students. ___ (pronoun) study in Oxford.",
      "answer": "we"
    },
    {
      "question": "My friends and I are students. ___ (pronoun) study in Oxford.",
      "answer": "we"
    },
    {
      "question": "My family and I are students. ___ (pronoun) study in Oxford.",
      "answer": "we"
    }
  ],
  "possessive": [
    {
      "question": "I have a car. ___ (possessive) car is blue.",
      "answer": "my"
    },
    {
      "question": "He has a sister. ___ (possessive) name is Laura.",
      "answer": "his"
    },
    {
      "question": "She lives with ___ (possessive) husband in London.",
      "answer": "her"
    },
    {
      "question": "We study in London. ___ (possessive) school is very big.",
      "answer": "our"
    },
    {
      "question": "They have two children. ___ (possessive) school is near here.",
      "answer": "their"
    },
    {
      "question": "The dog is playing with ___ (possessive) ball.",
      "answer": "its"
    },
    {
      "question": "What is ___ (possessive) name? (informal your)",
      "answer": "your"
    },
    {
      "question": "I want to clean ___ (possessive) bedroom today.",
      "answer": "my"
    },
    {
      "question": "John is reading ___ (possessive) favorite book.",
      "answer": "his"
    },
    {
      "question": "They forgot ___ (possessive) keys in the classroom.",
      "answer": "their"
    },
    {
      "question": "Oxford is famous for ___ (possessive) ancient university.",
      "answer": "its"
    },
    {
      "question": "We love ___ (possessive) English classes.",
      "answer": "our"
    },
    {
      "question": "She needs ___ (possessive) glasses to read the board.",
      "answer": "her"
    },
    {
      "question": "Do you like ___ (possessive) new job?",
      "answer": "your"
    },
    {
      "question": "The boys are washing ___ (possessive) dirty hands.",
      "answer": "their"
    },
    {
      "question": "I have a laptop. ___ (possessive) laptop is very nice.",
      "answer": "my"
    },
    {
      "question": "I have a watch. ___ (possessive) watch is very nice.",
      "answer": "my"
    },
    {
      "question": "I have a key. ___ (possessive) key is very nice.",
      "answer": "my"
    },
    {
      "question": "I have a bag. ___ (possessive) bag is very nice.",
      "answer": "my"
    },
    {
      "question": "I have a dog. ___ (possessive) dog is very nice.",
      "answer": "my"
    },
    {
      "question": "I have a cat. ___ (possessive) cat is very nice.",
      "answer": "my"
    },
    {
      "question": "I have a house. ___ (possessive) house is very nice.",
      "answer": "my"
    },
    {
      "question": "I have a room. ___ (possessive) room is very nice.",
      "answer": "my"
    },
    {
      "question": "He has a laptop. ___ (possessive) laptop is very nice.",
      "answer": "his"
    },
    {
      "question": "He has a watch. ___ (possessive) watch is very nice.",
      "answer": "his"
    },
    {
      "question": "He has a key. ___ (possessive) key is very nice.",
      "answer": "his"
    },
    {
      "question": "He has a bag. ___ (possessive) bag is very nice.",
      "answer": "his"
    },
    {
      "question": "He has a dog. ___ (possessive) dog is very nice.",
      "answer": "his"
    },
    {
      "question": "He has a cat. ___ (possessive) cat is very nice.",
      "answer": "his"
    },
    {
      "question": "He has a house. ___ (possessive) house is very nice.",
      "answer": "his"
    },
    {
      "question": "He has a room. ___ (possessive) room is very nice.",
      "answer": "his"
    },
    {
      "question": "She has a laptop. ___ (possessive) laptop is very nice.",
      "answer": "her"
    },
    {
      "question": "She has a watch. ___ (possessive) watch is very nice.",
      "answer": "her"
    },
    {
      "question": "She has a key. ___ (possessive) key is very nice.",
      "answer": "her"
    },
    {
      "question": "She has a bag. ___ (possessive) bag is very nice.",
      "answer": "her"
    },
    {
      "question": "She has a dog. ___ (possessive) dog is very nice.",
      "answer": "her"
    },
    {
      "question": "She has a cat. ___ (possessive) cat is very nice.",
      "answer": "her"
    },
    {
      "question": "She has a house. ___ (possessive) house is very nice.",
      "answer": "her"
    },
    {
      "question": "She has a room. ___ (possessive) room is very nice.",
      "answer": "her"
    },
    {
      "question": "It has a laptop. ___ (possessive) laptop is very nice.",
      "answer": "its"
    },
    {
      "question": "It has a watch. ___ (possessive) watch is very nice.",
      "answer": "its"
    },
    {
      "question": "It has a key. ___ (possessive) key is very nice.",
      "answer": "its"
    },
    {
      "question": "It has a bag. ___ (possessive) bag is very nice.",
      "answer": "its"
    },
    {
      "question": "It has a dog. ___ (possessive) dog is very nice.",
      "answer": "its"
    },
    {
      "question": "It has a cat. ___ (possessive) cat is very nice.",
      "answer": "its"
    },
    {
      "question": "It has a house. ___ (possessive) house is very nice.",
      "answer": "its"
    },
    {
      "question": "It has a room. ___ (possessive) room is very nice.",
      "answer": "its"
    },
    {
      "question": "We have a laptop. ___ (possessive) laptop is very nice.",
      "answer": "our"
    },
    {
      "question": "We have a watch. ___ (possessive) watch is very nice.",
      "answer": "our"
    },
    {
      "question": "We have a key. ___ (possessive) key is very nice.",
      "answer": "our"
    },
    {
      "question": "We have a bag. ___ (possessive) bag is very nice.",
      "answer": "our"
    },
    {
      "question": "We have a dog. ___ (possessive) dog is very nice.",
      "answer": "our"
    },
    {
      "question": "We have a cat. ___ (possessive) cat is very nice.",
      "answer": "our"
    },
    {
      "question": "We have a house. ___ (possessive) house is very nice.",
      "answer": "our"
    },
    {
      "question": "We have a room. ___ (possessive) room is very nice.",
      "answer": "our"
    },
    {
      "question": "They have a laptop. ___ (possessive) laptop is very nice.",
      "answer": "their"
    },
    {
      "question": "They have a watch. ___ (possessive) watch is very nice.",
      "answer": "their"
    },
    {
      "question": "They have a key. ___ (possessive) key is very nice.",
      "answer": "their"
    },
    {
      "question": "They have a bag. ___ (possessive) bag is very nice.",
      "answer": "their"
    },
    {
      "question": "They have a dog. ___ (possessive) dog is very nice.",
      "answer": "their"
    }
  ],
  "plurals": [
    {
      "question": "I have ___ (a/an) orange on the table.",
      "answer": "an"
    },
    {
      "question": "We need ___ (a/an) key to open the main door.",
      "answer": "a"
    },
    {
      "question": "Can you see ___ (a/an) umbrella over there?",
      "answer": "an"
    },
    {
      "question": "What is the plural of 'class'? ___",
      "answer": "classes"
    },
    {
      "question": "What is the plural of 'country'? ___",
      "answer": "countries"
    },
    {
      "question": "What is the plural of 'watch'? ___",
      "answer": "watches"
    },
    {
      "question": "What is the plural of 'man'? ___",
      "answer": "men"
    },
    {
      "question": "What is the plural of 'child'? ___",
      "answer": "children"
    },
    {
      "question": "What is the plural of 'woman'? ___",
      "answer": "women"
    },
    {
      "question": "What is the plural of 'person'? ___",
      "answer": "people"
    },
    {
      "question": "What is the plural of 'dictionary'? ___",
      "answer": "dictionaries"
    },
    {
      "question": "He has ___ (a/an) identity card in his pocket.",
      "answer": "an"
    },
    {
      "question": "Look at ___ (the) sky, it is blue.",
      "answer": "the"
    },
    {
      "question": "What is the plural of 'city'? ___",
      "answer": "cities"
    },
    {
      "question": "What is the plural of 'box'? ___",
      "answer": "boxes"
    },
    {
      "question": "What is the plural of 'pen'? ___",
      "answer": "pens"
    },
    {
      "question": "What is the plural of 'phone'? ___",
      "answer": "phones"
    },
    {
      "question": "What is the plural of 'desk'? ___",
      "answer": "desks"
    },
    {
      "question": "What is the plural of 'bag'? ___",
      "answer": "bags"
    },
    {
      "question": "What is the plural of 'coin'? ___",
      "answer": "coins"
    },
    {
      "question": "What is the plural of 'photo'? ___",
      "answer": "photos"
    },
    {
      "question": "What is the plural of 'key'? ___",
      "answer": "keys"
    },
    {
      "question": "What is the plural of 'book'? ___",
      "answer": "books"
    },
    {
      "question": "What is the plural of 'file'? ___",
      "answer": "files"
    },
    {
      "question": "What is the plural of 'boy'? ___",
      "answer": "boys"
    },
    {
      "question": "What is the plural of 'glass'? ___",
      "answer": "glasses"
    },
    {
      "question": "What is the plural of 'brush'? ___",
      "answer": "brushes"
    },
    {
      "question": "What is the plural of 'sandwich'? ___",
      "answer": "sandwiches"
    },
    {
      "question": "What is the plural of 'match'? ___",
      "answer": "matches"
    },
    {
      "question": "What is the plural of 'baby'? ___",
      "answer": "babies"
    },
    {
      "question": "What is the plural of 'family'? ___",
      "answer": "families"
    },
    {
      "question": "What is the plural of 'activity'? ___",
      "answer": "activities"
    },
    {
      "question": "What is the plural of 'party'? ___",
      "answer": "parties"
    },
    {
      "question": "What is the plural of 'day'? ___",
      "answer": "days"
    },
    {
      "question": "What is the plural of 'way'? ___",
      "answer": "ways"
    },
    {
      "question": "What is the plural of 'toy'? ___",
      "answer": "toys"
    },
    {
      "question": "What is the plural of 'play'? ___",
      "answer": "plays"
    },
    {
      "question": "Complete with a/an: I have ___ apple.",
      "answer": "an"
    },
    {
      "question": "Complete with a/an: I have ___ elephant.",
      "answer": "an"
    },
    {
      "question": "Complete with a/an: I have ___ email.",
      "answer": "an"
    },
    {
      "question": "Complete with a/an: I have ___ office.",
      "answer": "an"
    },
    {
      "question": "Complete with a/an: I have ___ actor.",
      "answer": "an"
    },
    {
      "question": "Complete with a/an: I have ___ actress.",
      "answer": "an"
    },
    {
      "question": "Complete with a/an: I have ___ engineer.",
      "answer": "an"
    },
    {
      "question": "Complete with a/an: I have ___ easy exercise.",
      "answer": "an"
    },
    {
      "question": "Complete with a/an: I have ___ old watch.",
      "answer": "an"
    },
    {
      "question": "Complete with a/an: I have ___ expensive key.",
      "answer": "an"
    },
    {
      "question": "Complete with a/an: She is ___ car.",
      "answer": "a"
    },
    {
      "question": "Complete with a/an: She is ___ house.",
      "answer": "a"
    },
    {
      "question": "Complete with a/an: She is ___ teacher.",
      "answer": "a"
    },
    {
      "question": "Complete with a/an: She is ___ student.",
      "answer": "a"
    },
    {
      "question": "Complete with a/an: She is ___ doctor.",
      "answer": "a"
    },
    {
      "question": "Complete with a/an: She is ___ lawyer.",
      "answer": "a"
    },
    {
      "question": "Complete with a/an: She is ___ nurse.",
      "answer": "a"
    },
    {
      "question": "Complete with a/an: She is ___ cheap car.",
      "answer": "a"
    },
    {
      "question": "Complete with a/an: She is ___ big house.",
      "answer": "a"
    },
    {
      "question": "Complete with a/an: She is ___ nice dog.",
      "answer": "a"
    }
  ],
  "adjectives": [
    {
      "question": "The opposite of 'cheap' is ___ (adjective).",
      "answer": "expensive"
    },
    {
      "question": "The opposite of 'easy' is ___ (adjective).",
      "answer": "difficult"
    },
    {
      "question": "The opposite of 'dirty' is ___ (adjective).",
      "answer": "clean"
    },
    {
      "question": "The opposite of 'fast' is ___ (adjective).",
      "answer": "slow"
    },
    {
      "question": "The opposite of 'beautiful' is ___ (adjective).",
      "answer": "ugly"
    },
    {
      "question": "The opposite of 'big' is ___ (adjective).",
      "answer": "small"
    },
    {
      "question": "It is an ___ ___ (expensive / car) -> 'auto caro' (two words).",
      "answer": "expensive car"
    },
    {
      "question": "They are ___ ___ (dirty / keys) -> 'llaves sucias' (two words).",
      "answer": "dirty keys"
    },
    {
      "question": "The exam is ___ ___ (quite / difficult) -> 'bastante difícil' (two words).",
      "answer": "quite difficult"
    },
    {
      "question": "He is a ___ ___ (very / good) teacher -> 'muy buen' (two words).",
      "answer": "very good"
    },
    {
      "question": "The opposite of 'good' is ___.",
      "answer": "bad"
    },
    {
      "question": "The opposite of 'safe' is ___.",
      "answer": "dangerous"
    },
    {
      "question": "The opposite of 'cold' is ___.",
      "answer": [
        "hot",
        "warm"
      ]
    },
    {
      "question": "An elephant is a ___ ___ (big / animal) -> 'animal grande' (two words).",
      "answer": "big animal"
    },
    {
      "question": "A Ferrari is a ___ ___ ___ (very / fast / car) -> 'auto muy rápido' (three words).",
      "answer": "very fast car"
    },
    {
      "question": "The opposite of 'expensive' is ___ (adjective).",
      "answer": "cheap"
    },
    {
      "question": "The opposite of 'cheap' is ___ (adjective).",
      "answer": "expensive"
    },
    {
      "question": "The opposite of 'difficult' is ___ (adjective).",
      "answer": "easy"
    },
    {
      "question": "The opposite of 'easy' is ___ (adjective).",
      "answer": "difficult"
    },
    {
      "question": "The opposite of 'clean' is ___ (adjective).",
      "answer": "dirty"
    },
    {
      "question": "The opposite of 'dirty' is ___ (adjective).",
      "answer": "clean"
    },
    {
      "question": "The opposite of 'slow' is ___ (adjective).",
      "answer": "fast"
    },
    {
      "question": "The opposite of 'fast' is ___ (adjective).",
      "answer": "slow"
    },
    {
      "question": "The opposite of 'ugly' is ___ (adjective).",
      "answer": "beautiful"
    },
    {
      "question": "The opposite of 'beautiful' is ___ (adjective).",
      "answer": "ugly"
    },
    {
      "question": "The opposite of 'small' is ___ (adjective).",
      "answer": "big"
    },
    {
      "question": "The opposite of 'big' is ___ (adjective).",
      "answer": "small"
    },
    {
      "question": "The opposite of 'bad' is ___ (adjective).",
      "answer": "good"
    },
    {
      "question": "The opposite of 'good' is ___ (adjective).",
      "answer": "bad"
    },
    {
      "question": "The opposite of 'dangerous' is ___ (adjective).",
      "answer": "safe"
    },
    {
      "question": "The opposite of 'safe' is ___ (adjective).",
      "answer": "dangerous"
    },
    {
      "question": "The opposite of 'hot' is ___ (adjective).",
      "answer": "cold"
    },
    {
      "question": "The opposite of 'cold' is ___ (adjective).",
      "answer": "hot"
    },
    {
      "question": "The opposite of 'old' is ___ (adjective).",
      "answer": "new"
    },
    {
      "question": "The opposite of 'new' is ___ (adjective).",
      "answer": "old"
    },
    {
      "question": "The opposite of 'poor' is ___ (adjective).",
      "answer": "rich"
    },
    {
      "question": "The opposite of 'rich' is ___ (adjective).",
      "answer": "poor"
    },
    {
      "question": "The opposite of 'dry' is ___ (adjective).",
      "answer": "wet"
    },
    {
      "question": "The opposite of 'wet' is ___ (adjective).",
      "answer": "dry"
    },
    {
      "question": "The opposite of 'dark' is ___ (adjective).",
      "answer": "light"
    },
    {
      "question": "The opposite of 'light' is ___ (adjective).",
      "answer": "dark"
    },
    {
      "question": "The opposite of 'sad' is ___ (adjective).",
      "answer": "happy"
    },
    {
      "question": "The opposite of 'happy' is ___ (adjective).",
      "answer": "sad"
    },
    {
      "question": "The opposite of 'wrong' is ___ (adjective).",
      "answer": "right"
    },
    {
      "question": "The opposite of 'right' is ___ (adjective).",
      "answer": "wrong"
    },
    {
      "question": "The opposite of 'tidy' is ___ (adjective).",
      "answer": "untidy"
    },
    {
      "question": "The opposite of 'untidy' is ___ (adjective).",
      "answer": "tidy"
    }
  ],
  "present-simple": [
    {
      "question": "She ___ (live) in a big flat in London.",
      "answer": "lives"
    },
    {
      "question": "They ___ (not / study) Spanish on Sundays.",
      "answer": [
        "don't study",
        "do not study"
      ]
    },
    {
      "question": "He ___ (watch) television in the evening.",
      "answer": "watches"
    },
    {
      "question": "We ___ (have) lunch together at 1:00.",
      "answer": "have"
    },
    {
      "question": "___ (do/does) you play the guitar?",
      "answer": "do"
    },
    {
      "question": "___ (do/does) she speak English with her friends?",
      "answer": "does"
    },
    {
      "question": "Where ___ (do/does) they live?",
      "answer": "do"
    },
    {
      "question": "What time ___ (do/does) he go to bed?",
      "answer": "does"
    },
    {
      "question": "My brother ___ (not / like) cats.",
      "answer": [
        "doesn't like",
        "does not like"
      ]
    },
    {
      "question": "I ___ (study) English every day at school.",
      "answer": "study"
    },
    {
      "question": "My parents ___ (work) in a big hospital.",
      "answer": "work"
    },
    {
      "question": "She ___ (not / read) books or newspapers.",
      "answer": [
        "doesn't read",
        "does not read"
      ]
    },
    {
      "question": "Does your mother ___ (have) a car?",
      "answer": "have"
    },
    {
      "question": "Do they ___ (want) a coffee?",
      "answer": "want"
    },
    {
      "question": "John ___ (do) his homework after dinner.",
      "answer": "does"
    },
    {
      "question": "The class ___ (finish) at 5:00 PM.",
      "answer": "finishes"
    },
    {
      "question": "We ___ (not / eat) fast food often.",
      "answer": [
        "don't eat",
        "do not eat"
      ]
    },
    {
      "question": "She ___ (wear) glasses to read.",
      "answer": "wears"
    },
    {
      "question": "What ___ (do/does) you want for breakfast?",
      "answer": "do"
    },
    {
      "question": "He ___ (go) to the cinema on Saturdays.",
      "answer": "goes"
    },
    {
      "question": "She ___ (live) English at home.",
      "answer": "lives"
    },
    {
      "question": "They ___ (live) in Manchester.",
      "answer": "live"
    },
    {
      "question": "He ___ (not / live) very often.",
      "answer": [
        "doesn't live",
        "does not live"
      ]
    },
    {
      "question": "We ___ (not / live) on weekends.",
      "answer": [
        "don't live",
        "do not live"
      ]
    },
    {
      "question": "___ (do/does) your father live here?",
      "answer": "does"
    },
    {
      "question": "___ (do/does) they live a dog?",
      "answer": "do"
    },
    {
      "question": "She ___ (study) English at home.",
      "answer": "studies"
    },
    {
      "question": "They ___ (study) in Manchester.",
      "answer": "study"
    },
    {
      "question": "He ___ (not / study) very often.",
      "answer": [
        "doesn't study",
        "does not study"
      ]
    },
    {
      "question": "We ___ (not / study) on weekends.",
      "answer": [
        "don't study",
        "do not study"
      ]
    },
    {
      "question": "___ (do/does) your father study here?",
      "answer": "does"
    },
    {
      "question": "___ (do/does) they study a dog?",
      "answer": "do"
    },
    {
      "question": "She ___ (work) English at home.",
      "answer": "works"
    },
    {
      "question": "They ___ (work) in Manchester.",
      "answer": "work"
    },
    {
      "question": "He ___ (not / work) very often.",
      "answer": [
        "doesn't work",
        "does not work"
      ]
    },
    {
      "question": "We ___ (not / work) on weekends.",
      "answer": [
        "don't work",
        "do not work"
      ]
    },
    {
      "question": "___ (do/does) your father work here?",
      "answer": "does"
    },
    {
      "question": "___ (do/does) they work a dog?",
      "answer": "do"
    },
    {
      "question": "She ___ (watch) English at home.",
      "answer": "watches"
    },
    {
      "question": "They ___ (watch) in Manchester.",
      "answer": "watch"
    },
    {
      "question": "He ___ (not / watch) very often.",
      "answer": [
        "doesn't watch",
        "does not watch"
      ]
    },
    {
      "question": "We ___ (not / watch) on weekends.",
      "answer": [
        "don't watch",
        "do not watch"
      ]
    },
    {
      "question": "___ (do/does) your father watch here?",
      "answer": "does"
    },
    {
      "question": "___ (do/does) they watch a dog?",
      "answer": "do"
    },
    {
      "question": "She ___ (have) English at home.",
      "answer": "has"
    },
    {
      "question": "They ___ (have) in Manchester.",
      "answer": "have"
    },
    {
      "question": "He ___ (not / have) very often.",
      "answer": [
        "doesn't have",
        "does not have"
      ]
    },
    {
      "question": "We ___ (not / have) on weekends.",
      "answer": [
        "don't have",
        "do not have"
      ]
    },
    {
      "question": "___ (do/does) your father have here?",
      "answer": "does"
    },
    {
      "question": "___ (do/does) they have a dog?",
      "answer": "do"
    },
    {
      "question": "She ___ (play) English at home.",
      "answer": "plays"
    },
    {
      "question": "They ___ (play) in Manchester.",
      "answer": "play"
    },
    {
      "question": "He ___ (not / play) very often.",
      "answer": [
        "doesn't play",
        "does not play"
      ]
    },
    {
      "question": "We ___ (not / play) on weekends.",
      "answer": [
        "don't play",
        "do not play"
      ]
    },
    {
      "question": "___ (do/does) your father play here?",
      "answer": "does"
    },
    {
      "question": "___ (do/does) they play a dog?",
      "answer": "do"
    },
    {
      "question": "She ___ (want) English at home.",
      "answer": "wants"
    },
    {
      "question": "They ___ (want) in Manchester.",
      "answer": "want"
    },
    {
      "question": "He ___ (not / want) very often.",
      "answer": [
        "doesn't want",
        "does not want"
      ]
    },
    {
      "question": "We ___ (not / want) on weekends.",
      "answer": [
        "don't want",
        "do not want"
      ]
    },
    {
      "question": "___ (do/does) your father want here?",
      "answer": "does"
    },
    {
      "question": "___ (do/does) they want a dog?",
      "answer": "do"
    },
    {
      "question": "She ___ (like) English at home.",
      "answer": "likes"
    },
    {
      "question": "They ___ (like) in Manchester.",
      "answer": "like"
    },
    {
      "question": "He ___ (not / like) very often.",
      "answer": [
        "doesn't like",
        "does not like"
      ]
    },
    {
      "question": "We ___ (not / like) on weekends.",
      "answer": [
        "don't like",
        "do not like"
      ]
    },
    {
      "question": "___ (do/does) your father like here?",
      "answer": "does"
    },
    {
      "question": "___ (do/does) they like a dog?",
      "answer": "do"
    },
    {
      "question": "She ___ (speak) English at home.",
      "answer": "speaks"
    },
    {
      "question": "They ___ (speak) in Manchester.",
      "answer": "speak"
    }
  ],
  "reading": [
    {
      "question": "What is Felix Nuttel's profession? He is a ___.",
      "answer": "pilot"
    },
    {
      "question": "Felix crashes his plane in ___ (country).",
      "answer": "france"
    },
    {
      "question": "The plane crashed into a large ___.",
      "answer": "tree"
    },
    {
      "question": "Who is the girl who finds Felix? Her name is ___.",
      "answer": "monica"
    },
    {
      "question": "Monica's family lives on a ___.",
      "answer": "farm"
    },
    {
      "question": "Felix wants to fly home to ___ (country).",
      "answer": "england"
    },
    {
      "question": "Does Felix die in the crash? ___ (yes/no).",
      "answer": "no"
    },
    {
      "question": "What stopped working in Felix's plane? The ___.",
      "answer": "engine"
    },
    {
      "question": "Felix was flying home from ___ (country in Africa).",
      "answer": "egypt"
    },
    {
      "question": "Monica and Felix speak ___ (language) together.",
      "answer": "english"
    },
    {
      "question": "Monica's family are ___ (farmers/doctors).",
      "answer": "farmers"
    },
    {
      "question": "Felix returns to England by ___ (train/plane).",
      "answer": "train"
    },
    {
      "question": "Felix Nuttel's plane is ___ (small/large).",
      "answer": "small"
    },
    {
      "question": "Is Felix's head hurting after the crash? ___ (yes/no).",
      "answer": "yes"
    },
    {
      "question": "Who is Monica's father? He is ___.",
      "answer": "hector"
    },
    {
      "question": "Monica is ___ (French/English).",
      "answer": "french"
    },
    {
      "question": "Felix stays at Monica's house for a few ___.",
      "answer": "days"
    },
    {
      "question": "Monica's father, Hector, takes Felix to the ___ (train station).",
      "answer": "station"
    },
    {
      "question": "Is Flying Home an A1 reader? ___ (yes/no).",
      "answer": "yes"
    },
    {
      "question": "Felix is a young man. ___ (true/false)",
      "answer": "true"
    },
    {
      "question": "Text: 'My name is Sarah. I am 25. I live in London and I work in a bank.' -> Where does Sarah live? ___",
      "answer": "london"
    },
    {
      "question": "Text: 'My name is Sarah. I am 25. I live in London and I work in a bank.' -> What is Sarah's job? She works in a ___.",
      "answer": "bank"
    },
    {
      "question": "Text: 'My name is Sarah. I am 25. I live in London and I work in a bank.' -> How old is Sarah? ___",
      "answer": "25"
    },
    {
      "question": "Text: 'Mike has a busy routine. He gets up at 6:30, has breakfast, and goes to work by train.' -> What time does Mike get up? ___",
      "answer": "6:30"
    },
    {
      "question": "Text: 'Mike has a busy routine. He gets up at 6:30, has breakfast, and goes to work by train.' -> How does Mike go to work? By ___.",
      "answer": "train"
    },
    {
      "question": "Text: 'Mr. and Mrs. Smith live in a large house in Manchester. They have three children and a dog.' -> Where do the Smiths live? ___",
      "answer": "manchester"
    },
    {
      "question": "Text: 'Mr. and Mrs. Smith live in a large house in Manchester. They have three children and a dog.' -> How many children do they have? ___",
      "answer": "three"
    },
    {
      "question": "Text: 'Mr. and Mrs. Smith live in a large house in Manchester. They have three children and a dog.' -> What animal do they have? A ___.",
      "answer": "dog"
    },
    {
      "question": "Text: 'On Saturdays, Helen plays tennis with her sister and reads books.' -> Who does Helen play tennis with? Her ___.",
      "answer": "sister"
    },
    {
      "question": "Text: 'On Saturdays, Helen plays tennis with her sister and reads books.' -> What does Helen do besides tennis? She reads ___.",
      "answer": "books"
    },
    {
      "question": "Text: 'David is from Canada, but he lives in Paris. He speaks English and French.' -> Where is David from? ___",
      "answer": "canada"
    },
    {
      "question": "Text: 'David is from Canada, but he lives in Paris. He speaks English and French.' -> Where does David live now? ___",
      "answer": "paris"
    },
    {
      "question": "Text: 'David is from Canada, but he lives in Paris. He speaks English and French.' -> What languages does David speak? English and ___.",
      "answer": "french"
    },
    {
      "question": "Text: 'My school is very old. It has 20 classrooms, a library, and a beautiful garden.' -> How many classrooms are there? ___",
      "answer": "20"
    },
    {
      "question": "Text: 'My school is very old. It has 20 classrooms, a library, and a beautiful garden.' -> What is outside? A beautiful ___.",
      "answer": "garden"
    },
    {
      "question": "Text: 'Julia gets up early. She goes for a run, has breakfast, and then studies French at 9:00.' -> What language does Julia study? ___",
      "answer": "french"
    },
    {
      "question": "Text: 'Julia gets up early. She goes for a run, has breakfast, and then studies French at 9:00.' -> What time does she study? At ___.",
      "answer": "9:00"
    },
    {
      "question": "Text: 'We have a nice flat in Rome. It is quite small, but very clean.' -> Where is the flat? In ___.",
      "answer": "rome"
    },
    {
      "question": "Text: 'We have a nice flat in Rome. It is quite small, but very clean.' -> Is the flat large or small? It is ___.",
      "answer": "small"
    },
    {
      "question": "Text: 'We have a nice flat in Rome. It is quite small, but very clean.' -> Is the flat clean? ___ (yes/no).",
      "answer": "yes"
    }
  ],
  "listening-ex": [
    {
      "question": "Escucha el número y escríbelo: ___",
      "speakText": "fifteen",
      "answer": [
        "15",
        "fifteen"
      ],
      "type": "listening"
    },
    {
      "question": "Escucha el número y escríbelo: ___",
      "speakText": "fifty",
      "answer": [
        "50",
        "fifty"
      ],
      "type": "listening"
    },
    {
      "question": "Escucha el número y escríbelo: ___",
      "speakText": "eighty-two",
      "answer": [
        "82",
        "eighty-two"
      ],
      "type": "listening"
    },
    {
      "question": "Escucha el número y escríbelo: ___",
      "speakText": "thirty-three",
      "answer": [
        "33",
        "thirty-three"
      ],
      "type": "listening"
    },
    {
      "question": "Escucha el número y escríbelo: ___",
      "speakText": "a hundred",
      "answer": [
        "100",
        "a hundred",
        "one hundred"
      ],
      "type": "listening"
    },
    {
      "question": "Escucha el número y escríbelo: ___",
      "speakText": "twelve",
      "answer": [
        "12",
        "twelve"
      ],
      "type": "listening"
    },
    {
      "question": "Escucha el número y escríbelo: ___",
      "speakText": "seventy-four",
      "answer": [
        "74",
        "seventy-four"
      ],
      "type": "listening"
    },
    {
      "question": "Escucha el número y escríbelo: ___",
      "speakText": "nineteen",
      "answer": [
        "19",
        "nineteen"
      ],
      "type": "listening"
    },
    {
      "question": "Escucha el número y escríbelo: ___",
      "speakText": "ninety",
      "answer": [
        "90",
        "ninety"
      ],
      "type": "listening"
    },
    {
      "question": "Escucha el número y escríbelo: ___",
      "speakText": "forty-eight",
      "answer": [
        "48",
        "forty-eight"
      ],
      "type": "listening"
    },
    {
      "question": "Escucha el deletreo y escribe la palabra: ___",
      "speakText": "h, e, l, l, o",
      "answer": "hello",
      "type": "listening"
    },
    {
      "question": "Escucha el deletreo y escribe la palabra: ___",
      "speakText": "p, i, l, o, t",
      "answer": "pilot",
      "type": "listening"
    },
    {
      "question": "Escucha el deletreo y escribe la palabra: ___",
      "speakText": "u, m, b, r, e, l, l, a",
      "answer": "umbrella",
      "type": "listening"
    },
    {
      "question": "Escucha el deletreo y escribe la palabra: ___",
      "speakText": "c, o, u, n, t, r, y",
      "answer": "country",
      "type": "listening"
    },
    {
      "question": "Escucha el deletreo y escribe la palabra: ___",
      "speakText": "t, e, a, c, h, e, r",
      "answer": "teacher",
      "type": "listening"
    },
    {
      "question": "Escucha el deletreo y escribe la palabra: ___",
      "speakText": "f, a, m, i, l, y",
      "answer": "family",
      "type": "listening"
    },
    {
      "question": "Escucha el deletreo y escribe la palabra: ___",
      "speakText": "a, d, d, r, e, s, s",
      "answer": "address",
      "type": "listening"
    },
    {
      "question": "Escucha el deletreo y escribe la palabra: ___",
      "speakText": "w, e, d, n, e, s, d, a, y",
      "answer": "wednesday",
      "type": "listening"
    },
    {
      "question": "Escucha el deletreo y escribe la palabra: ___",
      "speakText": "s, c, h, o, o, l",
      "answer": "school",
      "type": "listening"
    },
    {
      "question": "Escucha el deletreo y escribe la palabra: ___",
      "speakText": "g, l, a, s, s, e, s",
      "answer": "glasses",
      "type": "listening"
    },
    {
      "question": "Escucha la instrucción y escríbela: ___",
      "speakText": "Open your books",
      "answer": "open your books",
      "type": "listening"
    },
    {
      "question": "Escucha la instrucción y escríbela: ___",
      "speakText": "Close the door",
      "answer": "close the door",
      "type": "listening"
    },
    {
      "question": "Escucha la instrucción y escríbela: ___",
      "speakText": "Listen and repeat",
      "answer": "listen and repeat",
      "type": "listening"
    },
    {
      "question": "Escucha la instrucción y escríbela: ___",
      "speakText": "Turn off your phone",
      "answer": "turn off your phone",
      "type": "listening"
    },
    {
      "question": "Escucha la instrucción y escríbela: ___",
      "speakText": "Stand up",
      "answer": "stand up",
      "type": "listening"
    },
    {
      "question": "Escucha la instrucción y escríbela: ___",
      "speakText": "Sit down",
      "answer": "sit down",
      "type": "listening"
    },
    {
      "question": "Escucha la instrucción y escríbela: ___",
      "speakText": "Look at the board",
      "answer": "look at the board",
      "type": "listening"
    },
    {
      "question": "Escucha la oración y escríbela: ___",
      "speakText": "I'm from Spain",
      "answer": [
        "i'm from spain",
        "i am from spain"
      ],
      "type": "listening"
    },
    {
      "question": "Escucha la oración y escríbela: ___",
      "speakText": "She is a doctor",
      "answer": "she is a doctor",
      "type": "listening"
    },
    {
      "question": "Escucha la oración y escríbela: ___",
      "speakText": "He plays the guitar",
      "answer": "he plays the guitar",
      "type": "listening"
    },
    {
      "question": "Escucha la oración y escríbela: ___",
      "speakText": "They live in a flat",
      "answer": "they live in a flat",
      "type": "listening"
    },
    {
      "question": "Escucha la oración y escríbela: ___",
      "speakText": "What's your name?",
      "answer": "what's your name?",
      "type": "listening"
    },
    {
      "question": "Escucha la oración y escríbela: ___",
      "speakText": "Where do you work?",
      "answer": "where do you work?",
      "type": "listening"
    },
    {
      "question": "Escucha la oración y escríbela: ___",
      "speakText": "Have a nice day",
      "answer": "have a nice day",
      "type": "listening"
    },
    {
      "question": "Escucha la oración y escríbela: ___",
      "speakText": "See you tomorrow",
      "answer": "see you tomorrow",
      "type": "listening"
    },
    {
      "question": "Escucha la oración y escríbela: ___",
      "speakText": "Excuse me, please",
      "answer": "excuse me, please",
      "type": "listening"
    },
    {
      "question": "Escucha la oración y escríbela: ___",
      "speakText": "Thank you very much",
      "answer": "thank you very much",
      "type": "listening"
    },
    {
      "question": "Escucha la oración y escríbela: ___",
      "speakText": "Let's go home",
      "answer": "let's go home",
      "type": "listening"
    },
    {
      "question": "Escucha la oración y escríbela: ___",
      "speakText": "Don't drive fast",
      "answer": "don't drive fast",
      "type": "listening"
    },
    {
      "question": "Escucha la oración y escríbela: ___",
      "speakText": "We are very happy",
      "answer": "we are very happy",
      "type": "listening"
    }
  ]
};

// VOCABULARY BANK DATA CATEGORIES
const vocabularyBankDatabase = {
  "days": [
    { english: "Monday", translation: "Lunes", phonetic: "/ˈmʌn.deɪ/" },
    { english: "Tuesday", translation: "Martes", phonetic: "/ˈtjuːz.deɪ/" },
    { english: "Wednesday", translation: "Miércoles", phonetic: "/ˈwenz.deɪ/" },
    { english: "Thursday", translation: "Jueves", phonetic: "/ˈθɜːz.deɪ/" },
    { english: "Friday", translation: "Viernes", phonetic: "/ˈfraɪ.deɪ/" },
    { english: "Saturday", translation: "Sábado", phonetic: "/ˈsæt.ə.deɪ/" },
    { english: "Sunday", translation: "Domingo", phonetic: "/ˈsʌn.deɪ/" },
    { english: "one", translation: "uno", phonetic: "/wʌn/" },
    { english: "two", translation: "dos", phonetic: "/tuː/" },
    { english: "five", translation: "cinco", phonetic: "/faɪv/" },
    { english: "twelve", translation: "doce", phonetic: "/twelv/" },
    { english: "twenty-one", translation: "veintiuno", phonetic: "/ˌtwen.ti ˈwʌn/" },
    { english: "thirty", translation: "treinta", phonetic: "/ˈθɜː.ti/" },
    { english: "forty", translation: "cuarenta", phonetic: "/ˈfɔː.ti/" },
    { english: "fifty", translation: "cincuenta", phonetic: "/ˈfɪf.ti/" },
    { english: "a hundred", translation: "cien", phonetic: "/ə ˈhʌn.drəd/" }
  ],
  "countries": [
    { english: "Argentina", translation: "Argentina", phonetic: "/ˌɑː.dʒənˈtiː.nə/" },
    { english: "Argentinian", translation: "argentino/a", phonetic: "/ˌɑː.dʒənˈtɪn.i.ən/" },
    { english: "Brazil", translation: "Brasil", phonetic: "/brəˈzɪl/" },
    { english: "Brazilian", translation: "brasileño/a", phonetic: "/brəˈzɪl.jən/" },
    { english: "Canada", translation: "Canadá", phonetic: "/ˈkæn.ə.də/" },
    { english: "Canadian", translation: "canadiense", phonetic: "/kəˈneɪ.di.ən/" },
    { english: "China", translation: "China", phonetic: "/ˈtʃaɪ.nə/" },
    { english: "Chinese", translation: "chino/a", phonetic: "/ˌtʃaɪˈniːz/" },
    { english: "England", translation: "Inglaterra", phonetic: "/ˈɪŋ.ɡlənd/" },
    { english: "English", translation: "inglés/esa", phonetic: "/ˈɪŋ.ɡlɪʃ/" },
    { english: "Germany", translation: "Alemania", phonetic: "/ˈdʒɜː.mə.ni/" },
    { english: "German", translation: "alemán/ana", phonetic: "/ˈdʒɜː.mən/" },
    { english: "Japan", translation: "Japón", phonetic: "/dʒəˈpæn/" },
    { english: "Japanese", translation: "japonés/esa", phonetic: "/ˌdʒæp.ənˈiːz/" },
    { english: "Mexico", translation: "México", phonetic: "/ˈmek.sɪ.kə/" },
    { english: "Mexican", translation: "mexicano/a", phonetic: "/ˈmek.sɪ.kən/" },
    { english: "Spain", translation: "España", phonetic: "/speɪn/" },
    { english: "Spanish", translation: "español/a", phonetic: "/ˈspæn.ɪʃ/" },
    { english: "the United States", translation: "Estados Unidos", phonetic: "/ðə juːˌnaɪ.tɪd ˈsteɪts/" },
    { english: "American", translation: "estadounidense", phonetic: "/əˈmer.ɪ.kən/" }
  ],
  "classroom": [
    { english: "Open your books", translation: "Abran sus libros", phonetic: "/ˈəʊ.pən jɔː buːks/" },
    { english: "Close the door", translation: "Cierra la puerta", phonetic: "/kləʊz ðə dɔː/" },
    { english: "Look at the board", translation: "Mira la pizarra", phonetic: "/lʊk æt ðə bɔːd/" },
    { english: "Listen and repeat", translation: "Escucha y repite", phonetic: "/ˈlɪs.ən ænd rɪˈpiːt/" },
    { english: "Stand up", translation: "Ponte de pie", phonetic: "/stænd ʌp/" },
    { english: "Sit down", translation: "Siéntate", phonetic: "/sɪt daʊn/" },
    { english: "Turn off your phone", translation: "Apaga tu teléfono", phonetic: "/tɜːn ɒf jɔː fəʊn/" },
    { english: "I don't understand", translation: "No entiendo", phonetic: "/aɪ dəʊnt ˌʌn.dəˈstænd/" },
    { english: "How do you spell it?", translation: "¿Cómo se deletrea?", phonetic: "/haʊ duː juː spel ɪt/" },
    { english: "Can you repeat that, please?", translation: "¿Puede repetir eso, por favor?", phonetic: "/kæn juː rɪˈpiːt ðæt pliːz/" },
    { english: "What page is it?", translation: "¿Qué página es?", phonetic: "/wɒt peɪdʒ ɪz ɪt/" },
    { english: "How do you say... in English?", translation: "¿Cómo se dice... en inglés?", phonetic: "/haʊ duː juː seɪ... ɪn ˈɪŋ.ɡlɪʃ/" }
  ],
  "things": [
    { english: "a book", translation: "un libro", phonetic: "/ə bʊk/" },
    { english: "a key", translation: "una llave", phonetic: "/ə kiː/" },
    { english: "a watch", translation: "un reloj de pulsera", phonetic: "/ə wɒtʃ/" },
    { english: "a dictionary", translation: "un diccionario", phonetic: "/ə ˈdɪk.ʃən.ər.i/" },
    { english: "a phone", translation: "un teléfono", phonetic: "/ə fəʊn/" },
    { english: "a laptop", translation: "una laptop", phonetic: "/ə ˈlæp.tɒp/" },
    { english: "a photo", translation: "una foto", phonetic: "/ə ˈfəʊ.təʊ/" },
    { english: "an umbrella", translation: "un paraguas", phonetic: "/ən ʌmˈbrel.ə/" },
    { english: "a credit card", translation: "una tarjeta de crédito", phonetic: "/ə ˈkred.ɪt ˌkɑːd/" },
    { english: "a bag", translation: "una bolsa / cartera", phonetic: "/ə bæɡ/" },
    { english: "a coin", translation: "una moneda", phonetic: "/ə kɔɪ/" },
    { english: "glasses", translation: "lentes / gafas", phonetic: "/ˈɡlɑː.sɪz/" },
    { english: "headphones", translation: "auriculares", phonetic: "/ˈhed.fəʊnz/" },
    { english: "a piece of paper", translation: "un trozo de papel", phonetic: "/ə piːs ɒv ˈpeɪ.pər/" },
    { english: "tissues", translation: "pañuelos de papel", phonetic: "/ˈtɪʃ.uːz/" }
  ],
  "adjectives": [
    { english: "cheap", translation: "barato", phonetic: "/tʃiːp/" },
    { english: "expensive", translation: "caro", phonetic: "/ɪkˈspen.sɪv/" },
    { english: "easy", translation: "fácil", phonetic: "/ˈiː.zi/" },
    { english: "difficult", translation: "difícil", phonetic: "/ˈdɪf.ɪ.kəlt/" },
    { english: "dirty", translation: "sucio", phonetic: "/ˈdɜː.ti/" },
    { english: "clean", translation: "limpio", phonetic: "/kliːn/" },
    { english: "fast", translation: "rápido", phonetic: "/fɑːst/" },
    { english: "slow", translation: "lento", phonetic: "/sləʊ/" },
    { english: "good", translation: "bueno", phonetic: "/ɡʊd/" },
    { english: "bad", translation: "malo", phonetic: "/bæd/" },
    { english: "beautiful", translation: "hermoso / bello", phonetic: "/ˈbjuː.tɪ.fəl/" },
    { english: "ugly", translation: "feo", phonetic: "/ˈʌɡ.li/" },
    { english: "big", translation: "grande", phonetic: "/bɪɡ/" },
    { english: "small", translation: "pequeño", phonetic: "/smɔːl/" },
    { english: "black", translation: "negro", phonetic: "/blæk/" },
    { english: "white", translation: "blanco", phonetic: "/waɪt/" }
  ],
  "verbs": [
    { english: "eat fast food", translation: "comer comida rápida", phonetic: "/iːt fɑːst fuːd/" },
    { english: "live in a flat", translation: "vivir en un departamento", phonetic: "/lɪv ɪn ə flæt/" },
    { english: "have a cat", translation: "tener un gato", phonetic: "/hæv ə kæt/" },
    { english: "watch TV", translation: "ver televisión", phonetic: "/wɒtʃ ˌtiːˈviː/" },
    { english: "play the guitar", translation: "tocar la guitarra", phonetic: "/pleɪ ðə ɡɪˈtɑːr/" },
    { english: "speak English", translation: "hablar inglés", phonetic: "/spiːk ˈɪŋ.ɡlɪʃ/" },
    { english: "study German", translation: "estudiar alemán", phonetic: "/ˈstʌd.i ˈdʒɜː.mən/" },
    { english: "read a book", translation: "leer un libro", phonetic: "/riːd ə bʊk/" },
    { english: "want a new car", translation: "querer un coche nuevo", phonetic: "/wɒnt ə njuː kɑːr/" },
    { english: "do homework", translation: "hacer los deberes / tarea", phonetic: "/duː ˈhəʊm.wɜːk/" },
    { english: "go to the cinema", translation: "ir al cine", phonetic: "/ɡəʊ tuː ðə ˈsɪn.ə.mə/" },
    { english: "listen to music", translation: "escuchar música", phonetic: "/ˈlɪs.ən tuː ˈmjuː.zɪk/" },
    { english: "wear glasses", translation: "usar lentes / anteojos", phonetic: "/weər ˈɡlɑː.sɪz/" },
    { english: "take an umbrella", translation: "llevar un paraguas", phonetic: "/teɪk ən ʌmˈbrel.ə/" }
  ],
  "jobs": [
    { english: "actor", translation: "actor / actriz", phonetic: "/ˈæk.tər/" },
    { english: "administrator", translation: "administrador/a", phonetic: "/ədˈmɪn.ɪ.streɪ.tər/" },
    { english: "builder", translation: "constructor / albañil", phonetic: "/ˈbɪl.dər/" },
    { english: "chef", translation: "cocinero / chef", phonetic: "/ʃef/" },
    { english: "doctor", translation: "médico/a / doctor/a", phonetic: "/ˈdɒk.tər/" },
    { english: "engineer", translation: "ingeniero/a", phonetic: "/ˌen.dʒɪˈnɪər/" },
    { english: "flight attendant", translation: "auxiliar de vuelo / azafata", phonetic: "/ˈflaɪt əˌten.dənt/" },
    { english: "journalist", translation: "periodista", phonetic: "/ˈdʒɜː.nə.lɪst/" },
    { english: "lawyer", translation: "abogado/a", phonetic: "/ˈlɔɪ.ər/" },
    { english: "nurse", translation: "enfermero/a", phonetic: "/nɜːs/" },
    { english: "police officer", translation: "oficial de policía", phonetic: "/pəˈliːs ˌɒf.ɪ.sər/" },
    { english: "receptionist", translation: "recepcionista", phonetic: "/rɪˈsep.ʃən.ɪst/" },
    { english: "shop assistant", translation: "vendedor/a de tienda", phonetic: "/ˈʃɒp əˌsɪs.tənt/" },
    { english: "taxi driver", translation: "taxista", phonetic: "/ˈtæk.si ˌdraɪ.vər/" },
    { english: "teacher", translation: "profesor/a / maestro/a", phonetic: "/ˈtiː.tʃər/" },
    { english: "waiter", translation: "mesero / camarero", phonetic: "/ˈweɪ.tər/" }
  ],
  "family": [
    { english: "parents", translation: "padres (padre y madre)", phonetic: "/ˈpeə.rənts/" },
    { english: "mother", translation: "madre", phonetic: "/ˈmʌð.ər/" },
    { english: "father", translation: "padre", phonetic: "/ˈfɑː.ðər/" },
    { english: "children", translation: "hijos / niños (plural)", phonetic: "/ˈtʃɪl.drən/" },
    { english: "son", translation: "hijo", phonetic: "/sʌn/" },
    { english: "daughter", translation: "hija", phonetic: "/ˈdɔː.tər/" },
    { english: "brother", translation: "hermano", phonetic: "/ˈbrʌð.ər/" },
    { english: "sister", translation: "hermana", phonetic: "/ˈsɪs.tər/" },
    { english: "husband", translation: "esposo / marido", phonetic: "/ˈhʌz.bənd/" },
    { english: "wife", translation: "esposa / mujer", phonetic: "/waɪf/" },
    { english: "grandfather", translation: "abuelo", phonetic: "/ˈɡræn.fɑː.ðər/" },
    { english: "grandmother", translation: "abuela", phonetic: "/ˈɡræn.mʌð.ər/" },
    { english: "uncle", translation: "tío", phonetic: "/ˈʌŋ.kl̩/" },
    { english: "aunt", translation: "tía", phonetic: "/ɑːnt/" },
    { english: "nephew", translation: "sobrino", phonetic: "/ˈnef.juː/" },
    { english: "niece", translation: "sobrina", phonetic: "/niːs/" },
    { english: "cousin", translation: "primo/a", phonetic: "/ˈkʌz.ən/" }
  ]
};

// PRONUNCIATION SOUNDS DATA
const soundsDatabase = {
  vowels: {
    short: [
      { ipa: "ɪ", word: "fish", audio: "fish" },
      { ipa: "e", word: "egg", audio: "egg" },
      { ipa: "æ", word: "cat", audio: "cat" },
      { ipa: "ʌ", word: "cup", audio: "cup" },
      { ipa: "ɒ", word: "clock", audio: "clock" },
      { ipa: "ʊ", word: "bull", audio: "bull" },
      { ipa: "ə", word: "computer", audio: "computer" }
    ],
    long: [
      { ipa: "iː", word: "tree", audio: "tree" },
      { ipa: "ɑː", word: "car", audio: "car" },
      { ipa: "ɔː", word: "horse", audio: "horse" },
      { ipa: "uː", word: "boot", audio: "boot" },
      { ipa: "ɜː", word: "bird", audio: "bird" }
    ],
    diphthongs: [
      { ipa: "eɪ", word: "train", audio: "train" },
      { ipa: "aɪ", word: "bike", audio: "bike" },
      { ipa: "ɔɪ", word: "boy", audio: "boy" },
      { ipa: "əʊ", word: "phone", audio: "phone" },
      { ipa: "aʊ", word: "house", audio: "house" },
      { ipa: "ɪə", word: "ear", audio: "ear" },
      { ipa: "eə", word: "chair", audio: "chair" }
    ]
  },
  consonants: {
    unvoiced: [
      { ipa: "p", word: "parrot", audio: "parrot" },
      { ipa: "t", word: "tie", audio: "tie" },
      { ipa: "k", word: "key", audio: "key" },
      { ipa: "f", word: "flower", audio: "flower" },
      { ipa: "θ", word: "thumb", audio: "thumb" },
      { ipa: "s", word: "snake", audio: "snake" },
      { ipa: "ʃ", word: "shower", audio: "shower" },
      { ipa: "tʃ", word: "chess", audio: "chess" }
    ],
    voiced: [
      { ipa: "b", word: "bag", audio: "bag" },
      { ipa: "d", word: "dog", audio: "dog" },
      { ipa: "ɡ", word: "girl", audio: "girl" },
      { ipa: "v", word: "vase", audio: "vase" },
      { ipa: "ð", word: "mother", audio: "mother" },
      { ipa: "z", word: "zebra", audio: "zebra" },
      { ipa: "ʒ", word: "television", audio: "television" },
      { ipa: "dʒ", word: "jazz", audio: "jazz" }
    ],
    other: [
      { ipa: "m", word: "monkey", audio: "monkey" },
      { ipa: "n", word: "nose", audio: "nose" },
      { ipa: "ŋ", word: "singer", audio: "singer" },
      { ipa: "h", word: "house", audio: "house" },
      { ipa: "l", word: "leg", audio: "leg" },
      { ipa: "r", word: "red", audio: "red" },
      { ipa: "w", word: "witch", audio: "witch" },
      { ipa: "j", word: "yacht", audio: "yacht" }
    ]
  },
  alphabet: [
    { letter: "A", ipa: "/eɪ/" }, { letter: "B", ipa: "/biː/" }, { letter: "C", ipa: "/siː/" },
    { letter: "D", ipa: "/diː/" }, { letter: "E", ipa: "/iː/" }, { letter: "F", ipa: "/ef/" },
    { letter: "G", ipa: "/dʒiː/" }, { letter: "H", ipa: "/eɪtʃ/" }, { letter: "I", ipa: "/aɪ/" },
    { letter: "J", ipa: "/dʒeɪ/" }, { letter: "K", ipa: "/keɪ/" }, { letter: "L", ipa: "/el/" },
    { letter: "M", ipa: "/em/" }, { letter: "N", ipa: "/en/" }, { letter: "O", ipa: "/əʊ/" },
    { letter: "P", ipa: "/piː/" }, { letter: "Q", ipa: "/kjuː/" }, { letter: "R", ipa: "/ɑː/" },
    { letter: "S", ipa: "/es/" }, { letter: "T", ipa: "/tiː/" }, { letter: "U", ipa: "/juː/" },
    { letter: "V", ipa: "/viː/" }, { letter: "W", ipa: "/ˈdʌb.ljuː/" }, { letter: "X", ipa: "/eks/" },
    { letter: "Y", ipa: "/waɪ/" }, { letter: "Z", ipa: "/zed/" }
  ]
};

// SPELLING DICTATION ITEMS
const spellingDictations = [
  { spelling: "j, o, h, n", word: "john" },
  { spelling: "m, a, r, y", word: "mary" },
  { spelling: "s, p, a, i, n", word: "spain" },
  { spelling: "c, h, i, c, k, e, n", word: "chicken" },
  { spelling: "u, m, b, r, e, l, l, a", word: "umbrella" },
  { spelling: "a, d, d, r, e, s, s", word: "address" },
  { spelling: "w, e, d, n, e, s, d, a, y", word: "wednesday" }
];

// STATE MANAGEMENT
const app = {
  activePage: 'dashboard-page',
  
  // Progress states persistent in localStorage
  progress: {
    lessonsCompleted: {
      "1A": false, "1B": false, "1C": false, 
      "2A": false, "2B": false, "2C": false,
      "RC12": false
    },
    scores: {
      "1A": 0, "1B": 0, "1C": 0,
      "2A": 0, "2B": 0, "2C": 0,
      "RC12": 0,
      "GB1": 0, "GB2": 0, "GB3": 0
    },
    vocabGamesCompleted: {
      "days": false, "countries": false, "classroom": false,
      "things": false, "adjectives": false, "verbs": false,
      "jobs": false, "family": false
    }
  },
  
  totalPoints: 0,
  accuracyRate: 0,
  
  // Current session logic variables
  activeLessonId: "1A",
  activeLessonTab: "lesson-theory",
  
  // Lesson Quiz active question
  lessonQuizIndex: 0,
  lessonQuizAnswersCorrect: 0,
  lessonQuizSubmitted: false,
  lessonScrambleSelected: [],
  
  // Grammar Bank active question
  grammarBankUnit: "1",
  grammarQuizIndex: 0,
  grammarAnswersCorrect: 0,
  grammarSubmitted: false,
  grammarScrambleSelected: [],
  
  // Vocabulary bank active state
  activeVocabCategory: "days",
  activeVocabMode: "list",
  activeVocabCardIdx: 0,
  
  // Vocab Matching Game
  vocabGameSelectedCard: null,
  vocabGameAttempts: 0,
  vocabGameErrors: 0,
  vocabGameCards: [],
  
  // Spelling dictation state
  activeSpellingIndex: 0,
  
  // Exercises active state
  activeExerciseCategory: "be",
  
  // Web Speech controls
  selectedAccent: 'en-GB',
  voiceRate: 0.9,
  
  init() {
    this.loadProgress();
    this.bindEvents();
    this.updateProgressTrackers();
    this.renderRoadmap();
    this.loadSpellingDictation();
    this.navigateTo('dashboard-page');
    
    // Set Issue Date
    const certDate = document.getElementById('cert-issue-date');
    if (certDate) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      certDate.innerText = new Date().toLocaleDateString('es-ES', options);
    }
    
    // Load default spelling target
    this.activeSpellingIndex = Math.floor(Math.random() * spellingDictations.length);
  },
  
  bindEvents() {
    // Nav menu switching
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        this.navigateTo(target);
      });
    });
    
    // Audio options selectors
    const voiceSelector = document.getElementById('voice-accent-selector');
    if (voiceSelector) {
      voiceSelector.addEventListener('change', (e) => {
        // Map option values to valid BCP-47 language tags
        this.selectedAccent = e.target.value === 'en-UK' ? 'en-GB' : 'en-US';
      });
    }
    
    const voiceSpeed = document.getElementById('voice-speed-slider');
    if (voiceSpeed) {
      voiceSpeed.addEventListener('change', (e) => {
        this.voiceRate = parseFloat(e.target.value);
      });
    }
    
    // Certificate Name synchronizer
    const nameInput = document.getElementById('cert-name-input');
    const certDisplayName = document.getElementById('cert-display-name');
    if (nameInput && certDisplayName) {
      nameInput.addEventListener('input', (e) => {
        certDisplayName.innerText = e.target.value.trim() || "Estudiante de Inglés";
      });
    }
  },
  
  navigateTo(pageId) {
    this.activePage = pageId;
    
    // Toggle navigation highlights
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.getAttribute('data-target') === pageId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    // Toggle views visibility
    document.querySelectorAll('.page-section').forEach(section => {
      if (section.id === pageId) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
    
    // Reset/Render states on load
    if (pageId === 'grammar-page') {
      this.loadGrammarBank(this.grammarBankUnit);
    } else if (pageId === 'vocabulary-page') {
      this.renderVocabularyData();
      this.selectVocabularyBank(this.activeVocabCategory);
    } else if (pageId === 'pronunciation-page') {
      this.renderAlphabet();
      this.renderPhoneticsChart();
    } else if (pageId === 'certificate-page') {
      this.evaluateCertificateStatus();
    } else if (pageId === 'lessons-page') {
      // Load lesson content via its own dedicated method (non-recursive)
      this.loadLessonContent(this.activeLessonId);
    } else if (pageId === 'exercises-page') {
      this.selectExerciseCategory(this.activeExerciseCategory);
    }
  },
  
  loadProgress() {
    const data = localStorage.getItem('english_file_elem_progress');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        if (parsed.scores) {
          this.progress = parsed;
        }
      } catch (e) {
        console.error("Failed to parse progress data:", e);
      }
    }
  },
  
  saveProgress() {
    localStorage.setItem('english_file_elem_progress', JSON.stringify(this.progress));
  },
  
  updateProgressTrackers() {
    // Calculate total score and averages
    let scoreSum = 0;
    let maxPossibleScore = 0;
    
    // 7 lessons (5 questions each = 35) + 3 grammar banks (10 questions each = 30)
    // Revise check is 10 questions.
    // Total quiz count is: 6 * 5 = 30 + 10 = 40 (lessons). 3 * 10 = 30 (grammar). Total = 70.
    const keys = Object.keys(this.progress.scores);
    keys.forEach(k => {
      scoreSum += this.progress.scores[k];
      if (k === 'RC12') maxPossibleScore += 10;
      else if (k.startsWith('GB')) maxPossibleScore += 10;
      else maxPossibleScore += 5;
    });
    
    this.totalPoints = scoreSum * 10; // 10 points per correct answer
    this.accuracyRate = maxPossibleScore > 0 ? Math.round((scoreSum / maxPossibleScore) * 100) : 0;
    
    // Update general progress bar & counters
    const percentFill = document.getElementById('overall-progress-fill');
    const percentText = document.getElementById('overall-progress-text');
    const scoreVal = document.getElementById('score-counter');
    const accuracyVal = document.getElementById('accuracy-counter');
    const circleProgress = document.getElementById('circle-progress');
    const dashboardPercentage = document.getElementById('dashboard-percentage');
    
    if (percentFill) percentFill.style.width = `${this.accuracyRate}%`;
    if (percentText) percentText.innerText = `${this.accuracyRate}%`;
    if (scoreVal) scoreVal.innerText = this.totalPoints;
    if (accuracyVal) accuracyVal.innerText = `${this.accuracyRate}%`;
    if (circleProgress) circleProgress.setAttribute('stroke-dasharray', `${this.accuracyRate}, 100`);
    if (dashboardPercentage) dashboardPercentage.textContent = `${this.accuracyRate}%`;
  },
  
  renderRoadmap() {
    document.querySelectorAll('.roadmap-card').forEach(card => {
      const lesson = card.getAttribute('data-lesson');
      const footer = card.querySelector('.roadmap-footer');
      const statusInd = card.querySelector('.status-indicator');
      
      const isCompleted = this.progress.lessonsCompleted[lesson];
      card.setAttribute('data-completed', isCompleted);
      
      if (isCompleted) {
        statusInd.className = "status-indicator icon-completed";
        statusInd.innerHTML = "✅ Aprobado (" + this.progress.scores[lesson] + ")";
      } else {
        statusInd.className = "status-indicator icon-unlocked";
        statusInd.innerHTML = "🔓 Disponible";
      }
    });
  },
  
  // LESSON MANAGEMENT VIEWS
  loadLesson(lessonId) {
    this.activeLessonId = lessonId;
    
    // Switch to lessons page directly (no recursive navigateTo call)
    this.activePage = 'lessons-page';
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-target') === 'lessons-page');
    });
    document.querySelectorAll('.page-section').forEach(section => {
      section.classList.toggle('active', section.id === 'lessons-page');
    });
    
    
    // Render the actual lesson content
    this.loadLessonContent(lessonId);
  },
  
  loadLessonContent(lessonId) {
    const lesson = lessonsDatabase[lessonId];
    if (!lesson) {
      console.error('Lesson not found:', lessonId);
      return;
    }
    
    // Header title
    document.getElementById('active-lesson-title').innerText = lesson.title;
    
    // Theory tab setup
    const theoryContent = document.getElementById('lesson-theory');
    if (theoryContent) theoryContent.innerHTML = lesson.theory;
    
    // Vocabulary tab setup
    const vocabContent = document.getElementById('lesson-vocab');
    let html = `
      <div class="card">
        <h3>Vocabulario Clave</h3>
        <p>Aprende las frases del vocabulario principal. Haz clic en el botón de reproducción para escuchar su pronunciación.</p>
        <div class="vocab-list-grid" style="margin-top: 1.5rem;">
    `;
    
    lesson.vocab.forEach(v => {
      html += `
        <div class="vocab-item-card">
          <div class="vocab-term-block">
            <span class="vocab-english">${v.english}</span>
            <span class="vocab-translation">${v.translation}</span>
            <span class="vocab-phonetic">${v.phonetic}</span>
          </div>
          <button class="speaker-btn" title="Pronounce" onclick="app.speak('${v.english.replace(/'/g, "\\'")}')"> 
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px; height:18px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          </button>
        </div>
      `;
    });
    
    html += `</div></div>`;
    if (vocabContent) vocabContent.innerHTML = html;
    
    // Quiz tab reset
    this.lessonQuizIndex = 0;
    this.lessonQuizAnswersCorrect = 0;
    this.lessonQuizSubmitted = false;
    this.switchLessonTab('lesson-theory');
    this.renderLessonQuestion();
  },
  
  switchLessonTab(tabId) {
    this.activeLessonTab = tabId;
    document.querySelectorAll('#lessons-page .tab-btn').forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    document.querySelectorAll('#lessons-page .tab-content').forEach(c => {
      if (c.id === tabId) {
        c.style.display = 'block';
      } else {
        c.style.display = 'none';
      }
    });
  },
  
  // LESSON QUIZ INTERACTION
  renderLessonQuestion() {
    const lesson = lessonsDatabase[this.activeLessonId];
    const question = lesson.exercises[this.lessonQuizIndex];
    const totalQ = lesson.exercises.length;
    
    // Reset buttons
    document.getElementById('btn-submit-lesson-quiz').style.display = 'inline-flex';
    document.getElementById('btn-next-lesson-quiz').style.display = 'none';
    
    // Reset feedback
    const feedbackBox = document.getElementById('lesson-quiz-feedback');
    feedbackBox.style.display = 'none';
    feedbackBox.className = "quiz-feedback";
    
    // Update headers
    document.getElementById('lesson-quiz-indicator').innerText = `Pregunta ${this.lessonQuizIndex + 1} de ${totalQ}`;
    document.getElementById('lesson-quiz-score').innerText = `Aciertos: ${this.lessonQuizAnswersCorrect}`;
    
    const quizArea = document.getElementById('lesson-quiz-area');
    quizArea.innerHTML = ''; // Clear
    
    this.lessonQuizSubmitted = false;
    
    // Question text and audio prompt
    const qTextEl = document.createElement('div');
    qTextEl.className = "question-text";
    
    if (question.type === 'listening') {
      qTextEl.innerHTML = `
        <span>${question.question}</span>
        <button class="speaker-btn" title="Listen" onclick="app.speak('${question.speakText}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px; height:18px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        </button>
      `;
    } else {
      qTextEl.innerHTML = `
        <span>${question.question}</span>
        <button class="speaker-btn" title="Listen sentence" onclick="app.speak('${question.question.replace(/___/g, "blank").replace(/\[.*?\]/g, "")}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px; height:18px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        </button>
      `;
    }
    quizArea.appendChild(qTextEl);
    
    // Render interaction structure
    if (question.type === 'input' || question.type === 'listening') {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
        <input type="text" id="lesson-quiz-input" class="blank-input" style="width: 280px;" placeholder="${question.placeholder || 'Escribe aquí...'}" autocomplete="off">
      `;
      quizArea.appendChild(wrapper);
      
      setTimeout(() => {
        const input = document.getElementById('lesson-quiz-input');
        if (input) input.focus();
      }, 100);
      
    } else if (question.type === 'choice') {
      const optionsList = document.createElement('div');
      optionsList.className = "options-list";
      
      question.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerHTML = `<span>${opt}</span><div class="option-icon"></div>`;
        btn.onclick = () => this.selectLessonOption(btn, idx);
        optionsList.appendChild(btn);
      });
      quizArea.appendChild(optionsList);
      this.selectedLessonOptionIdx = null;
      
    } else if (question.type === 'scramble') {
      this.lessonScrambleSelected = [];
      const scrambleWrapper = document.createElement('div');
      scrambleWrapper.innerHTML = `
        <div class="scramble-slots" id="l-scramble-slots">
          <span style="color:var(--text-muted); font-size:0.85rem;" id="l-scramble-placeholder">Haz clic abajo para ordenar...</span>
        </div>
        <div class="scramble-pool" id="l-scramble-pool"></div>
      `;
      quizArea.appendChild(scrambleWrapper);
      
      const poolContainer = document.getElementById('l-scramble-pool');
      // Shuffle pool
      const shuffled = [...question.pool].sort(() => Math.random() - 0.5);
      shuffled.forEach(word => {
        const chip = document.createElement('div');
        chip.className = "word-chip";
        chip.innerText = word;
        chip.onclick = () => this.handleLessonScrambleClick(chip, word);
        poolContainer.appendChild(chip);
      });
    }
  },
  
  selectLessonOption(btnElement, index) {
    if (this.lessonQuizSubmitted) return;
    this.selectedLessonOptionIdx = index;
    
    document.querySelectorAll('#lesson-quiz-area .option-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    btnElement.classList.add('selected');
  },
  
  handleLessonScrambleClick(chip, word) {
    if (this.lessonQuizSubmitted) return;
    const slots = document.getElementById('l-scramble-slots');
    const pool = document.getElementById('l-scramble-pool');
    const placeholder = document.getElementById('l-scramble-placeholder');
    
    if (chip.parentNode.id === 'l-scramble-pool') {
      if (placeholder) placeholder.style.display = 'none';
      slots.appendChild(chip);
      this.lessonScrambleSelected.push(word);
    } else {
      pool.appendChild(chip);
      this.lessonScrambleSelected = this.lessonScrambleSelected.filter(w => w !== word);
      if (this.lessonScrambleSelected.length === 0 && placeholder) {
        placeholder.style.display = 'block';
      }
    }
  },
  
  submitLessonQuiz() {
    if (this.lessonQuizSubmitted) return;
    
    const lesson = lessonsDatabase[this.activeLessonId];
    const question = lesson.exercises[this.lessonQuizIndex];
    let isCorrect = false;
    
    const quizCard = document.querySelector('#lesson-exercises .card');
    
    if (question.type === 'input' || question.type === 'listening') {
      const input = document.getElementById('lesson-quiz-input');
      if (!input || !input.value.trim()) {
        alert("Por favor escribe tu respuesta.");
        return;
      }
      this.lessonQuizSubmitted = true;
      const userVal = input.value.trim().toLowerCase();
      const answerVal = question.answer.toLowerCase();
      
      if (userVal === answerVal) {
        isCorrect = true;
        input.style.borderColor = "var(--color-success-light)";
      } else {
        isCorrect = false;
        input.style.borderColor = "var(--color-error)";
      }
    } else if (question.type === 'choice') {
      if (this.selectedLessonOptionIdx === null) {
        alert("Por favor selecciona una opción.");
        return;
      }
      this.lessonQuizSubmitted = true;
      const btns = document.querySelectorAll('#lesson-quiz-area .option-btn');
      
      if (this.selectedLessonOptionIdx === question.correct) {
        isCorrect = true;
        btns[this.selectedLessonOptionIdx].classList.add('correct');
      } else {
        isCorrect = false;
        btns[this.selectedLessonOptionIdx].classList.add('incorrect');
        btns[question.correct].classList.add('correct');
      }
    } else if (question.type === 'scramble') {
      if (this.lessonScrambleSelected.length < question.correct.length) {
        alert("Ordena todas las palabras primero.");
        return;
      }
      this.lessonQuizSubmitted = true;
      let matches = 0;
      question.correct.forEach((w, idx) => {
        if (this.lessonScrambleSelected[idx] === w) matches++;
      });
      isCorrect = (matches === question.correct.length);
      const slots = document.getElementById('l-scramble-slots');
      slots.style.borderColor = isCorrect ? "var(--color-success-light)" : "var(--color-error)";
    }
    
    // Scoring & UI Feedback
    const feedbackBox = document.getElementById('lesson-quiz-feedback');
    const fbTitle = document.getElementById('lesson-feedback-title');
    const fbText = document.getElementById('lesson-feedback-text');
    
    feedbackBox.style.display = 'block';
    
    if (isCorrect) {
      this.lessonQuizAnswersCorrect++;
      feedbackBox.className = "quiz-feedback correct";
      fbTitle.innerText = "¡Excelente! Correcto 🌟";
      AudioSynth.playCorrect();
      quizCard.classList.add('animation-correct');
    } else {
      feedbackBox.className = "quiz-feedback incorrect";
      fbTitle.innerText = "Respuesta Incorrecta ❌";
      AudioSynth.playError();
      quizCard.classList.add('animation-shake');
      
      let sol = "";
      if (question.type === 'choice') sol = question.options[question.correct];
      else if (question.type === 'scramble') sol = question.correct.join(" ");
      else sol = question.answer;
      
      fbTitle.innerHTML += `<span style="display:block; font-size:0.9rem; font-weight:500; margin-top:0.25rem;">Solución: <strong style="color:var(--color-success-light);">${sol}</strong></span>`;
    }
    fbText.innerText = question.explanation;
    
    setTimeout(() => {
      quizCard.classList.remove('animation-correct', 'animation-shake');
    }, 600);
    
    document.getElementById('btn-submit-lesson-quiz').style.display = 'none';
    document.getElementById('btn-next-lesson-quiz').style.display = 'inline-flex';
  },
  
  nextLessonQuiz() {
    this.lessonQuizIndex++;
    const lesson = lessonsDatabase[this.activeLessonId];
    if (this.lessonQuizIndex < lesson.exercises.length) {
      this.renderLessonQuestion();
    } else {
      this.finishLessonQuiz();
    }
  },
  
  finishLessonQuiz() {
    const lessonId = this.activeLessonId;
    const score = this.lessonQuizAnswersCorrect;
    const totalQ = lessonsDatabase[lessonId].exercises.length;
    const passThreshold = totalQ * 0.8; // 80% passing
    
    if (score > this.progress.scores[lessonId]) {
      this.progress.scores[lessonId] = score;
    }
    
    if (score >= passThreshold) {
      this.progress.lessonsCompleted[lessonId] = true;
      AudioSynth.playSuccess();
      alert(`¡Felicitaciones! Has completado el módulo ${lessonId} con una puntuación de ${score}/${totalQ}.`);
    } else {
      alert(`Has obtenido ${score}/${totalQ}. Intenta obtener al menos un 80% (${Math.ceil(passThreshold)} respuestas correctas) para aprobar el módulo.`);
    }
    
    this.saveProgress();
    this.updateProgressTrackers();
    this.renderRoadmap();
    this.navigateTo('dashboard-page');
  },
  
  // GRAMMAR BANK LOGIC
  loadGrammarBank(unit) {
    this.grammarBankUnit = unit;
    
    // Theory Text Inject
    const theoryContent = document.getElementById('grammar-bank-theory-content');
    theoryContent.innerHTML = grammarBankDatabase[unit].theory;
    
    // Reset Quiz state
    this.grammarQuizIndex = 0;
    this.grammarAnswersCorrect = 0;
    this.grammarSubmitted = false;
    
    this.renderGrammarBankQuestion();
  },
  
  renderGrammarBankQuestion() {
    const bank = grammarBankDatabase[this.grammarBankUnit];
    const question = bank.questions[this.grammarQuizIndex];
    const totalQ = bank.questions.length;
    
    // Reset buttons
    document.getElementById('btn-submit-grammar-bank').style.display = 'inline-flex';
    document.getElementById('btn-next-grammar-bank').style.display = 'none';
    
    // Reset feedback
    const feedbackBox = document.getElementById('grammar-bank-feedback');
    feedbackBox.style.display = 'none';
    feedbackBox.className = "quiz-feedback";
    
    // Update labels
    document.getElementById('grammar-bank-indicator').innerText = `Pregunta ${this.grammarQuizIndex + 1} de ${totalQ}`;
    document.getElementById('grammar-bank-score').innerText = `Aciertos: ${this.grammarAnswersCorrect}`;
    
    const exerciseArea = document.getElementById('grammar-bank-exercise-area');
    exerciseArea.innerHTML = '';
    
    this.grammarSubmitted = false;
    
    // Question text
    const qText = document.createElement('div');
    qText.className = "question-text";
    qText.innerHTML = `
      <span>${question.question}</span>
      <button class="speaker-btn" title="Listen" onclick="app.speak('${question.question.replace(/___/g, "blank").replace(/\[.*?\]/g, "")}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px; height:18px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
      </button>
    `;
    exerciseArea.appendChild(qText);
    
    // Interactions
    if (question.type === 'input') {
      const wrap = document.createElement('div');
      wrap.innerHTML = `<input type="text" id="grammar-bank-input" class="blank-input" placeholder="Tu respuesta..." autocomplete="off">`;
      exerciseArea.appendChild(wrap);
      
      setTimeout(() => {
        const inp = document.getElementById('grammar-bank-input');
        if (inp) inp.focus();
      }, 100);
      
    } else if (question.type === 'choice') {
      const optionsList = document.createElement('div');
      optionsList.className = "options-list";
      
      question.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerHTML = `<span>${opt}</span><div class="option-icon"></div>`;
        btn.onclick = () => this.selectGrammarOption(btn, idx);
        optionsList.appendChild(btn);
      });
      exerciseArea.appendChild(optionsList);
      this.selectedGrammarOptionIdx = null;
      
    } else if (question.type === 'scramble') {
      this.grammarScrambleSelected = [];
      const wrap = document.createElement('div');
      wrap.innerHTML = `
        <div class="scramble-slots" id="g-scramble-slots">
          <span style="color:var(--text-muted); font-size:0.85rem;" id="g-scramble-placeholder">Ordena haciendo clic abajo...</span>
        </div>
        <div class="scramble-pool" id="g-scramble-pool"></div>
      `;
      exerciseArea.appendChild(wrap);
      
      const poolContainer = document.getElementById('g-scramble-pool');
      const shuffled = [...question.pool].sort(() => Math.random() - 0.5);
      shuffled.forEach(w => {
        const chip = document.createElement('div');
        chip.className = "word-chip";
        chip.innerText = w;
        chip.onclick = () => this.handleGrammarScrambleClick(chip, w);
        poolContainer.appendChild(chip);
      });
    }
  },
  
  selectGrammarOption(btn, idx) {
    if (this.grammarSubmitted) return;
    this.selectedGrammarOptionIdx = idx;
    
    document.querySelectorAll('#grammar-bank-exercise-area .option-btn').forEach(b => {
      b.classList.remove('selected');
    });
    btn.classList.add('selected');
  },
  
  handleGrammarScrambleClick(chip, w) {
    if (this.grammarSubmitted) return;
    const slots = document.getElementById('g-scramble-slots');
    const pool = document.getElementById('g-scramble-pool');
    const placeholder = document.getElementById('g-scramble-placeholder');
    
    if (chip.parentNode.id === 'g-scramble-pool') {
      if (placeholder) placeholder.style.display = 'none';
      slots.appendChild(chip);
      this.grammarScrambleSelected.push(w);
    } else {
      pool.appendChild(chip);
      this.grammarScrambleSelected = this.grammarScrambleSelected.filter(word => word !== w);
      if (this.grammarScrambleSelected.length === 0 && placeholder) {
        placeholder.style.display = 'block';
      }
    }
  },
  
  submitGrammarBankAnswer() {
    if (this.grammarSubmitted) return;
    
    const bank = grammarBankDatabase[this.grammarBankUnit];
    const question = bank.questions[this.grammarQuizIndex];
    let isCorrect = false;
    
    const quizCard = document.querySelector('.grammar-practice-card');
    
    if (question.type === 'input') {
      const input = document.getElementById('grammar-bank-input');
      if (!input || !input.value.trim()) {
        alert("Escribe una respuesta.");
        return;
      }
      this.grammarSubmitted = true;
      const userVal = input.value.trim().toLowerCase();
      const answerVal = question.answer.toLowerCase();
      isCorrect = (userVal === answerVal);
      input.style.borderColor = isCorrect ? "var(--color-success-light)" : "var(--color-error)";
    } else if (question.type === 'choice') {
      if (this.selectedGrammarOptionIdx === null) {
        alert("Selecciona una opción.");
        return;
      }
      this.grammarSubmitted = true;
      const btns = document.querySelectorAll('#grammar-bank-exercise-area .option-btn');
      
      if (this.selectedGrammarOptionIdx === question.correct) {
        isCorrect = true;
        btns[this.selectedGrammarOptionIdx].classList.add('correct');
      } else {
        isCorrect = false;
        btns[this.selectedGrammarOptionIdx].classList.add('incorrect');
        btns[question.correct].classList.add('correct');
      }
    } else if (question.type === 'scramble') {
      if (this.grammarScrambleSelected.length < question.correct.length) {
        alert("Ordena todas las palabras.");
        return;
      }
      this.grammarSubmitted = true;
      let matches = 0;
      question.correct.forEach((w, idx) => {
        if (this.grammarScrambleSelected[idx] === w) matches++;
      });
      isCorrect = (matches === question.correct.length);
      const slots = document.getElementById('g-scramble-slots');
      slots.style.borderColor = isCorrect ? "var(--color-success-light)" : "var(--color-error)";
    }
    
    // UI feedback
    const feedbackBox = document.getElementById('grammar-bank-feedback');
    const fbTitle = document.getElementById('grammar-feedback-title');
    const fbText = document.getElementById('grammar-feedback-text');
    
    feedbackBox.style.display = 'block';
    
    if (isCorrect) {
      this.grammarAnswersCorrect++;
      feedbackBox.className = "quiz-feedback correct";
      fbTitle.innerText = "¡Excelente! Correcto 🌟";
      AudioSynth.playCorrect();
      quizCard.classList.add('animation-correct');
    } else {
      feedbackBox.className = "quiz-feedback incorrect";
      fbTitle.innerText = "Respuesta Incorrecta ❌";
      AudioSynth.playError();
      quizCard.classList.add('animation-shake');
      
      let sol = "";
      if (question.type === 'choice') sol = question.options[question.correct];
      else if (question.type === 'scramble') sol = question.correct.join(" ");
      else sol = question.answer;
      
      fbTitle.innerHTML += `<span style="display:block; font-size:0.9rem; font-weight:500; margin-top:0.25rem;">Solución: <strong style="color:var(--color-success-light);">${sol}</strong></span>`;
    }
    fbText.innerText = question.explanation;
    
    setTimeout(() => {
      quizCard.classList.remove('animation-correct', 'animation-shake');
    }, 600);
    
    document.getElementById('btn-submit-grammar-bank').style.display = 'none';
    document.getElementById('btn-next-grammar-bank').style.display = 'inline-flex';
  },
  
  nextGrammarBankQuestion() {
    this.grammarQuizIndex++;
    const bank = grammarBankDatabase[this.grammarBankUnit];
    if (this.grammarQuizIndex < bank.questions.length) {
      this.renderGrammarBankQuestion();
    } else {
      this.finishGrammarBank();
    }
  },
  
  finishGrammarBank() {
    const key = `GB${this.grammarBankUnit}`;
    const score = this.grammarAnswersCorrect;
    const totalQ = grammarBankDatabase[this.grammarBankUnit].questions.length;
    
    if (score > this.progress.scores[key]) {
      this.progress.scores[key] = score;
    }
    
    alert(`Has finalizado Grammar Bank ${this.grammarBankUnit} con ${score}/${totalQ} correctas.`);
    
    this.saveProgress();
    this.updateProgressTrackers();
    this.navigateTo('dashboard-page');
  },
  
  // VOCABULARY BANK MANAGEMENT
  selectVocabularyBank(category) {
    this.activeVocabCategory = category;
    
    document.querySelectorAll('.vocab-cat-btn').forEach(btn => {
      if (btn.getAttribute('data-vocab') === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    this.renderVocabularyData();
  },
  
  switchVocabMode(mode) {
    this.activeVocabMode = mode;
    
    document.querySelectorAll('.vocab-mode-selector .mode-btn').forEach(btn => {
      if (btn.id === `btn-vocab-mode-${mode}`) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    document.querySelectorAll('.vocab-mode-content').forEach(c => {
      if (c.id === `vocab-content-${mode}`) {
        c.style.display = 'block';
      } else {
        c.style.display = 'none';
      }
    });
    
    if (mode === 'flashcards') {
      this.activeVocabCardIdx = 0;
      this.renderVocabCard();
    } else if (mode === 'game') {
      this.resetVocabMatchingGame();
    }
  },
  
  renderVocabularyData() {
    const terms = vocabularyBankDatabase[this.activeVocabCategory];
    
    // List render
    const listContainer = document.getElementById('vocab-content-list');
    let html = `<div class="vocab-list-grid">`;
    terms.forEach(t => {
      html += `
        <div class="vocab-item-card">
          <div class="vocab-term-block">
            <span class="vocab-english">${t.english}</span>
            <span class="vocab-translation">${t.translation}</span>
            <span class="vocab-phonetic">${t.phonetic}</span>
          </div>
          <button class="speaker-btn" onclick="app.speak('${t.english}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px; height:16px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          </button>
        </div>
      `;
    });
    html += `</div>`;
    listContainer.innerHTML = html;
    
    // Flashcard deck reset
    this.activeVocabCardIdx = 0;
    
    // Switch to active view mode
    this.switchVocabMode(this.activeVocabMode);
  },
  
  // Vocab Flashcard rendering
  renderVocabCard() {
    const terms = vocabularyBankDatabase[this.activeVocabCategory];
    const card = terms[this.activeVocabCardIdx];
    
    const element = document.getElementById('vocab-flashcard-element');
    if (element) element.classList.remove('flipped');
    
    document.getElementById('vcard-front-text').innerText = card.english;
    document.getElementById('vcard-back-text').innerText = card.translation;
    document.getElementById('vcard-back-phonetic').innerText = card.phonetic;
    
    document.getElementById('vocab-card-counter').innerText = `${this.activeVocabCardIdx + 1} de ${terms.length}`;
  },
  
  flipVocabCard() {
    const element = document.getElementById('vocab-flashcard-element');
    if (element) element.classList.toggle('flipped');
  },
  
  nextVocabCard() {
    const terms = vocabularyBankDatabase[this.activeVocabCategory];
    this.activeVocabCardIdx = (this.activeVocabCardIdx + 1) % terms.length;
    this.renderVocabCard();
  },
  
  prevVocabCard() {
    const terms = vocabularyBankDatabase[this.activeVocabCategory];
    this.activeVocabCardIdx = (this.activeVocabCardIdx - 1 + terms.length) % terms.length;
    this.renderVocabCard();
  },
  
  speakVocabCard() {
    const terms = vocabularyBankDatabase[this.activeVocabCategory];
    const card = terms[this.activeVocabCardIdx];
    this.speak(card.english);
  },
  
  // Vocabulary matching game logic
  resetVocabMatchingGame() {
    const terms = vocabularyBankDatabase[this.activeVocabCategory];
    
    // Choose 6 random terms to play
    const shuffledTerms = [...terms].sort(() => Math.random() - 0.5).slice(0, 6);
    
    this.vocabGameAttempts = 0;
    this.vocabGameErrors = 0;
    this.vocabGameSelectedCard = null;
    
    document.getElementById('game-attempts-val').innerText = 0;
    document.getElementById('game-errors-val').innerText = 0;
    
    // Separate English and Spanish lists, shuffle them separately
    const englishCards = shuffledTerms.map((t, idx) => ({ id: idx, text: t.english, type: 'english' }));
    const spanishCards = shuffledTerms.map((t, idx) => ({ id: idx, text: t.translation, type: 'spanish' }));
    
    const combinedCards = [...englishCards, ...spanishCards].sort(() => Math.random() - 0.5);
    
    const container = document.getElementById('vocab-matching-grid-container');
    container.innerHTML = '';
    
    combinedCards.forEach(c => {
      const div = document.createElement('div');
      div.className = "match-card";
      div.innerText = c.text;
      div.setAttribute('data-id', c.id);
      div.setAttribute('data-type', c.type);
      div.onclick = () => this.handleMatchCardClick(div);
      container.appendChild(div);
    });
  },
  
  handleMatchCardClick(cardEl) {
    if (cardEl.classList.contains('matched') || cardEl.classList.contains('selected')) return;
    
    cardEl.classList.add('selected');
    
    if (cardEl.getAttribute('data-type') === 'english') {
      this.speak(cardEl.innerText);
    }
    
    if (!this.vocabGameSelectedCard) {
      // First card clicked
      this.vocabGameSelectedCard = cardEl;
    } else {
      // Second card clicked
      const card1 = this.vocabGameSelectedCard;
      const card2 = cardEl;
      
      const id1 = card1.getAttribute('data-id');
      const id2 = card2.getAttribute('data-id');
      const type1 = card1.getAttribute('data-type');
      const type2 = card2.getAttribute('data-type');
      
      this.vocabGameAttempts++;
      document.getElementById('game-attempts-val').innerText = this.vocabGameAttempts;
      
      if (id1 === id2 && type1 !== type2) {
        // Correct Match!
        setTimeout(() => {
          card1.classList.remove('selected');
          card2.classList.remove('selected');
          card1.classList.add('matched');
          card2.classList.add('matched');
          AudioSynth.playCorrect();
          
          this.checkVocabMatchingGameCompletion();
        }, 300);
      } else {
        // Incorrect match
        this.vocabGameErrors++;
        document.getElementById('game-errors-val').innerText = this.vocabGameErrors;
        AudioSynth.playError();
        
        setTimeout(() => {
          card1.classList.remove('selected');
          card2.classList.remove('selected');
          card1.classList.add('animation-shake');
          card2.classList.add('animation-shake');
          
          setTimeout(() => {
            card1.classList.remove('animation-shake');
            card2.classList.remove('animation-shake');
          }, 500);
        }, 300);
      }
      this.vocabGameSelectedCard = null;
    }
  },
  
  checkVocabMatchingGameCompletion() {
    const cards = document.querySelectorAll('#vocab-matching-grid-container .match-card');
    let matchedCount = 0;
    cards.forEach(c => {
      if (c.classList.contains('matched')) matchedCount++;
    });
    
    if (matchedCount === cards.length) {
      setTimeout(() => {
        AudioSynth.playSuccess();
        alert(`¡Felicidades! Completaste el juego de emparejar con ${this.vocabGameErrors} errores.`);
        
        // Mark vocab category completed
        this.progress.vocabGamesCompleted[this.activeVocabCategory] = true;
        this.saveProgress();
        this.updateProgressTrackers();
      }, 500);
    }
  },
  
  // PRONUNCIATION CHARTS & ALPHABET
  renderAlphabet() {
    const grid = document.getElementById('alphabet-grid-container');
    grid.innerHTML = '';
    
    soundsDatabase.alphabet.forEach(item => {
      const card = document.createElement('div');
      card.className = "alphabet-card";
      card.innerHTML = `
        <div class="letter-name">${item.letter}</div>
        <div class="letter-ipa">${item.ipa}</div>
      `;
      card.onclick = () => this.speakLetter(item.letter);
      grid.appendChild(card);
    });
  },
  
  renderPhoneticsChart() {
    const renderList = (dataList, containerId, isVowel) => {
      const el = document.getElementById(containerId);
      el.innerHTML = '';
      dataList.forEach(item => {
        const card = document.createElement('div');
        card.className = "phoneme-card";
        card.innerHTML = `
          <div class="phoneme-symbol">/${item.ipa}/</div>
          <div class="phoneme-example">${item.word}</div>
        `;
        card.onclick = () => this.speakPhoneme(item.ipa, item.word, isVowel);
        el.appendChild(card);
      });
    };
    
    // Vowels
    renderList(soundsDatabase.vowels.short, 'short-vowels-grid', true);
    renderList(soundsDatabase.vowels.long, 'long-vowels-grid', true);
    renderList(soundsDatabase.vowels.diphthongs, 'diphthongs-grid', true);
    
    // Consonants
    renderList(soundsDatabase.consonants.unvoiced, 'unvoiced-consonants-grid', false);
    renderList(soundsDatabase.consonants.voiced, 'voiced-consonants-grid', false);
    renderList(soundsDatabase.consonants.other, 'other-consonants-grid', false);
  },
  
  switchPronTab(ptabId) {
    document.querySelectorAll('#pronunciation-page .tab-btn').forEach(btn => {
      if (btn.getAttribute('data-ptab') === ptabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    document.querySelectorAll('#pronunciation-page .pron-tab-content').forEach(c => {
      if (c.id === ptabId) {
        c.style.display = 'block';
      } else {
        c.style.display = 'none';
      }
    });
  },
  
  // Alphabet Spelling Dictation Test
  loadSpellingDictation() {
    document.getElementById('spelling-test-input').value = '';
    const fb = document.getElementById('spelling-test-feedback');
    fb.style.display = 'none';
    fb.className = 'spelling-feedback';
  },
  
  playSpellingTarget() {
    const item = spellingDictations[this.activeSpellingIndex];
    // Speak spelling letters sequentially with pauses
    this.speak(item.spelling);
  },
  
  checkSpellingTest() {
    const userVal = document.getElementById('spelling-test-input').value.trim().toLowerCase();
    const target = spellingDictations[this.activeSpellingIndex];
    
    const fb = document.getElementById('spelling-test-feedback');
    fb.style.display = 'block';
    
    if (userVal === target.word) {
      fb.className = "spelling-feedback correct";
      fb.innerHTML = `<h4>¡Correcto! 🌟</h4><p>Deletreaste correctamente la palabra <strong>${target.word}</strong>.</p>`;
      AudioSynth.playCorrect();
      
      // Load next random spelling after short delay
      setTimeout(() => {
        this.activeSpellingIndex = Math.floor(Math.random() * spellingDictations.length);
        this.loadSpellingDictation();
      }, 2000);
    } else {
      fb.className = "spelling-feedback incorrect";
      fb.innerHTML = `<h4>Incorrecto ❌</h4><p>Vuelve a escuchar el deletreo e inténtalo de nuevo.</p>`;
      AudioSynth.playError();
    }
  },
  
  // CERTIFICATE EVALUATOR
  evaluateCertificateStatus() {
    this.updateProgressTrackers();
    const locked = document.getElementById('cert-locked-panel');
    const unlocked = document.getElementById('cert-unlocked-panel');
    
    if (this.accuracyRate >= 80) {
      locked.style.display = 'none';
      unlocked.style.display = 'block';
    } else {
      locked.style.display = 'block';
      unlocked.style.display = 'none';
      
      const fillBar = document.getElementById('cert-progress-fill-bar');
      const textVal = document.getElementById('cert-progress-status-val');
      
      if (fillBar) fillBar.style.width = `${this.accuracyRate}%`;
      if (textVal) textVal.innerText = `Progreso actual: ${this.accuracyRate}% / 80%`;
    }
  },
  
  printCertificate() {
    const inp = document.getElementById('cert-name-input');
    const display = document.getElementById('cert-display-name');
    if (inp && display) {
      display.innerText = inp.value.trim() || "Estudiante de Inglés";
    }
    window.print();
  },
  
  // AUDIO ANCHOR ENGINE (Text to Speech Web API)
  speak(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Cancel active speaches
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = this.selectedAccent;
      
      // Find voices matching accent
      const voices = window.speechSynthesis.getVoices();
      let matchVoice = null;
      if (this.selectedAccent === 'en-GB') {
        matchVoice = voices.find(v => v.lang.startsWith('en-GB') || (v.lang.startsWith('en') && v.name.includes('Google UK')));
      } else {
        matchVoice = voices.find(v => v.lang.startsWith('en-US') || (v.lang.startsWith('en') && v.name.includes('Google US')));
      }
      
      if (!matchVoice) {
        matchVoice = voices.find(v => v.lang.startsWith('en'));
      }
      
      utterance.voice = matchVoice;
      utterance.rate = this.voiceRate;
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("Speech Synthesis not supported by the browser.");
    }
  },
  
  speakLetter(letter) {
    // Letters are spoken individually
    this.speak(letter);
  },
  
  speakPhoneme(ipa, word, isVowel) {
    // Solo pronuncia la palabra directamente
    this.speak(word);
  },

  // EXERCISES PAGE LOGIC
  selectExerciseCategory(category) {
    this.activeExerciseCategory = category;
    
    document.querySelectorAll('#exercises-page .tab-btn').forEach(btn => {
      if (btn.getAttribute('data-excat') === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Set title
    const titles = {
      "be": "Ejercicios de Verbo Be (am / is / are)",
      "pronouns": "Ejercicios de Pronombres Sujeto",
      "possessive": "Ejercicios de Adjetivos Posesivos",
      "plurals": "Ejercicios de Plurales y Artículos",
      "adjectives": "Ejercicios de Adjetivos y Colores",
      "present-simple": "Ejercicios de Present Simple (Do / Does / -s)",
      "flying-home": "Comprensión Lectora: Flying Home (PDF Reader)"
    };
    document.getElementById('ex-category-title').innerText = titles[category] || "Ejercicios";
    
    this.renderExercises();
  },
  
  renderExercises() {
    const list = exercisesDatabase[this.activeExerciseCategory];
    const container = document.getElementById('exercises-dynamic-list');
    container.innerHTML = '';
    
    list.forEach((ex, idx) => {
      const itemRow = document.createElement('div');
      itemRow.className = "exercise-item-row";
      
      // Parse the question, split "___" and insert text input
      const parts = ex.question.split("___");
      
      const questionWrapper = document.createElement('div');
      questionWrapper.className = "exercise-question-wrapper";
      
      if (ex.type === "listening") {
        // Prepend speaker button for listening exercises
        const speakBtn = document.createElement('button');
        speakBtn.className = "speaker-btn";
        speakBtn.style.marginRight = "0.75rem";
        speakBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px; height:16px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;
        speakBtn.onclick = () => this.speak(ex.speakText);
        questionWrapper.appendChild(speakBtn);
      }

      if (parts.length > 1) {
        questionWrapper.appendChild(document.createTextNode(`${idx + 1}. `));
        parts.forEach((part, pidx) => {
          questionWrapper.appendChild(document.createTextNode(part));
          if (pidx < parts.length - 1) {
            const input = document.createElement('input');
            input.type = "text";
            input.className = "exercise-input-blank";
            input.setAttribute('data-idx', idx);
            input.setAttribute('autocomplete', 'off');
            questionWrapper.appendChild(input);
          }
        });
      } else {
        questionWrapper.appendChild(document.createTextNode(`${idx + 1}. `));
        questionWrapper.appendChild(document.createTextNode(ex.question));
        const input = document.createElement('input');
        input.type = "text";
        input.className = "exercise-input-blank";
        input.setAttribute('data-idx', idx);
        input.setAttribute('autocomplete', 'off');
        questionWrapper.appendChild(input);
      }
      
      const feedback = document.createElement('span');
      feedback.className = "exercise-feedback-icon";
      feedback.id = `ex-feedback-${idx}`;
      
      itemRow.appendChild(questionWrapper);
      itemRow.appendChild(feedback);
      container.appendChild(itemRow);
    });
    
    // Reset indicators
    document.getElementById('exercises-score').innerText = `Completados: 0/${list.length}`;
  },
  
  checkAllExercises() {
    const category = this.activeExerciseCategory;
    const list = exercisesDatabase[category];
    let correctCount = 0;
    
    list.forEach((ex, idx) => {
      const inputs = document.querySelectorAll(`#exercises-dynamic-list input[data-idx="${idx}"]`);
      const feedback = document.getElementById(`ex-feedback-${idx}`);
      
      let allInputsCorrect = true;
      let hasValue = false;
      
      inputs.forEach(input => {
        const val = input.value.trim().toLowerCase();
        if (val) hasValue = true;
        
        const correctAnswers = Array.isArray(ex.answer) 
          ? ex.answer.map(a => a.toLowerCase()) 
          : [ex.answer.toLowerCase()];
          
        if (correctAnswers.includes(val)) {
          input.style.borderColor = "var(--color-success-light)";
        } else {
          allInputsCorrect = false;
          input.style.borderColor = "var(--color-error)";
        }
      });
      
      if (hasValue && allInputsCorrect) {
        correctCount++;
        feedback.innerHTML = `✅`;
        feedback.style.color = "var(--color-success-light)";
      } else if (hasValue) {
        feedback.innerHTML = `❌`;
        feedback.style.color = "var(--color-error)";
      } else {
        feedback.innerHTML = ``;
      }
    });
    
    document.getElementById('exercises-score').innerText = `Aciertos: ${correctCount}/${list.length}`;
    
    if (correctCount === list.length) {
      AudioSynth.playSuccess();
      alert("¡Felicidades! Todos los ejercicios de esta categoría están correctos. 🌟");
    } else if (correctCount > 0) {
      AudioSynth.playCorrect();
    } else {
      AudioSynth.playError();
    }
  },
  
  resetCategoryExercises() {
    const inputs = document.querySelectorAll('#exercises-dynamic-list input');
    inputs.forEach(input => {
      input.value = '';
      input.style.borderColor = 'var(--glass-border)';
    });
    
    const feedbacks = document.querySelectorAll('#exercises-dynamic-list .exercise-feedback-icon');
    feedbacks.forEach(fb => {
      fb.innerHTML = '';
    });
    
    const list = exercisesDatabase[this.activeExerciseCategory];
    document.getElementById('exercises-score').innerText = `Completados: 0/${list.length}`;
  }
};

// Start application when DOM loads
window.addEventListener('DOMContentLoaded', () => {
  app.init();
});

// Safari/Chrome Web speech voice arrays trigger
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    // Triggers browsers to load voices arrays
  };
}
