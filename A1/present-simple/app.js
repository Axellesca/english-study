/**
 * Present Simple Learning App - Core Logic
 */

// Audio Synthesis Engine using Web Audio API (No dependencies)
const AudioSynth = {
  ctx: null,
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    // resume if suspended (needed in some browsers on user interaction)
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
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) { console.log("Audio play error", e); }
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
    } catch (e) { console.log("Audio play error", e); }
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
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.6);
    } catch (e) { console.log("Audio play error", e); }
  }
};

// Quiz database (6 categories, 10 questions each)
const quizDatabase = [
  {
    name: "Tercera Persona Singular",
    description: "Añade -s, -es o -ies según las reglas de He/She/It.",
    type: "input",
    questions: [
      {
        question: "She __________ (work) at a hospital.",
        placeholder: "works",
        answer: "works",
        explanation: "Para 'She' (ella), el verbo regular simplemente añade '-s': work + s = works."
      },
      {
        question: "He __________ (go) to the university on Tuesdays.",
        placeholder: "goes",
        answer: "goes",
        explanation: "Verbos terminados en 'o' añaden '-es' en tercera persona: go + es = goes."
      },
      {
        question: "My cat __________ (sleep) all day long.",
        placeholder: "sleeps",
        answer: "sleeps",
        explanation: "'My cat' equivale a 'It' (eso), por lo que se añade '-s' al final del verbo."
      },
      {
        question: "She __________ (study) English every night.",
        placeholder: "studies",
        answer: "studies",
        explanation: "Verbo terminado en consonante + 'y' (study) cambia la 'y' por '-ies': studies."
      },
      {
        question: "He __________ (wash) his hands before dinner.",
        placeholder: "washes",
        answer: "washes",
        explanation: "Verbos terminados en 'sh' añaden '-es' en tercera persona: wash + es = washes."
      },
      {
        question: "The baby __________ (cry) when she is tired.",
        placeholder: "cries",
        answer: "cries",
        explanation: "Verbo terminado en consonante + 'y' (cry) cambia la 'y' por '-ies': cries."
      },
      {
        question: "He __________ (watch) documentaries in the evening.",
        placeholder: "watches",
        answer: "watches",
        explanation: "Verbos terminados en 'ch' añaden '-es' en tercera persona: watch + es = watches."
      },
      {
        question: "She __________ (have) a beautiful white house.",
        placeholder: "has",
        answer: "has",
        explanation: "El verbo 'have' es irregular en tercera persona y cambia a 'has'."
      },
      {
        question: "My father __________ (buy) groceries on Saturdays.",
        placeholder: "buys",
        answer: "buys",
        explanation: "Si termina en vocal + 'y' (buy), solo añadimos '-s': buys (no cambia a 'buies')."
      },
      {
        question: "Mr. Davis __________ (teach) mathematics at high school.",
        placeholder: "teaches",
        answer: "teaches",
        explanation: "Verbos terminados en 'ch' añaden '-es' en tercera persona: teach + es = teaches."
      }
    ]
  },
  {
    name: "Completar Espacios",
    description: "Completa la oración conjugando el verbo en su forma correcta.",
    type: "input",
    questions: [
      {
        question: "They __________ (live) in a beautiful city.",
        placeholder: "live",
        answer: "live",
        explanation: "Para el sujeto plural 'They' (Ellos), el verbo en afirmativo se mantiene en su forma base (infinitivo sin 'to')."
      },
      {
        question: "I __________ (not / drink) coffee in the morning.",
        placeholder: "don't drink",
        answer: "don't drink",
        explanation: "Para negar con 'I', usamos el auxiliar 'don't' seguido del verbo en infinitivo: don't drink."
      },
      {
        question: "__________ you __________ (speak) French?",
        placeholder: "Do you speak",
        answer: "Do,speak", // Handled by splitting or checking multiple blanks
        isMultiInput: true,
        explanation: "Para preguntas con 'you', usamos el auxiliar 'Do' al inicio y el verbo principal en forma base."
      },
      {
        question: "He __________ (not / drive) to work; he takes the train.",
        placeholder: "doesn't drive",
        answer: "doesn't drive",
        explanation: "Para negar con 'He' (tercera persona), usamos 'doesn't' y el verbo principal vuelve a su forma base (sin -s)."
      },
      {
        question: "We __________ (play) soccer on weekends.",
        placeholder: "play",
        answer: "play",
        explanation: "Con 'We' (Nosotros), el verbo afirmativo se escribe en forma base: play."
      },
      {
        question: "__________ she __________ (have) any siblings?",
        placeholder: "Does she have",
        answer: "Does,have",
        isMultiInput: true,
        explanation: "Para preguntas con 'She', usamos el auxiliar 'Does' al inicio y el verbo principal vuelve a la forma base 'have'."
      },
      {
        question: "The supermarket __________ (close) at 10 PM.",
        placeholder: "closes",
        answer: "closes",
        explanation: "'The supermarket' es 'It'. El verbo regular añade '-s' al final: closes."
      },
      {
        question: "We __________ (not / watch) scary movies.",
        placeholder: "don't watch",
        answer: "don't watch",
        explanation: "Negación para 'We' usa el auxiliar 'don't' y el verbo en infinitivo."
      },
      {
        question: "__________ they __________ (study) together?",
        placeholder: "Do they study",
        answer: "Do,study",
        isMultiInput: true,
        explanation: "Pregunta para 'They' requiere auxiliar 'Do' al inicio y el verbo 'study' en forma base."
      },
      {
        question: "My brother __________ (do) his homework in his room.",
        placeholder: "does",
        answer: "does",
        explanation: "'My brother' es 'He'. El verbo 'do' en tercera persona añade '-es': does."
      }
    ]
  },
  {
    name: "Auxiliares (Do / Does)",
    description: "Elige el auxiliar de Present Simple correcto en opción múltiple.",
    type: "choice",
    questions: [
      {
        question: "__________ your mother speak Italian?",
        options: ["Do", "Does", "Is", "Are"],
        correct: 1,
        explanation: "'Your mother' equivale a 'She'. El auxiliar de pregunta para He/She/It es 'Does'."
      },
      {
        question: "We __________ want to buy a new computer right now.",
        options: ["don't", "doesn't", "aren't", "not"],
        correct: 0,
        explanation: "Para el sujeto 'We', la negación del Present Simple se forma con el auxiliar 'don't'."
      },
      {
        question: "Where __________ they go during summer vacations?",
        options: ["do", "does", "are", "is"],
        correct: 0,
        explanation: "Para preguntas informativas (WH-questions) con el sujeto 'they', el auxiliar es 'do'."
      },
      {
        question: "Jane __________ like to eat fish.",
        options: ["don't", "doesn't", "isn't", "no"],
        correct: 1,
        explanation: "'Jane' es 'She', por lo tanto, la negación correcta requiere el auxiliar 'doesn't'."
      },
      {
        question: "What __________ you do for a living?",
        options: ["do", "does", "are", "is"],
        correct: 0,
        explanation: "La pregunta típica 'What do you do...?' requiere el auxiliar 'do' para el sujeto 'you'."
      },
      {
        question: "__________ they live near your house?",
        options: ["Do", "Does", "Are", "Is"],
        correct: 0,
        explanation: "Para hacer una pregunta con el sujeto plural 'they', se utiliza el auxiliar 'Do'."
      },
      {
        question: "I __________ know the answer to this question.",
        options: ["doesn't", "don't", "am not", "not"],
        correct: 1,
        explanation: "Para 'I' (yo), la negación correcta en Present Simple es 'don't'."
      },
      {
        question: "Why __________ he look so tired today?",
        options: ["do", "does", "is", "are"],
        correct: 1,
        explanation: "'He' es tercera persona singular, por lo tanto, el auxiliar de pregunta es 'does'."
      },
      {
        question: "My parents __________ drink coffee at night.",
        options: ["doesn't", "aren't", "don't", "not"],
        correct: 2,
        explanation: "'My parents' es plural (They). Para negar en plural, se utiliza 'don't'."
      },
      {
        question: "__________ it rain a lot in London during winter?",
        options: ["Does", "Do", "Is", "Are"],
        correct: 0,
        explanation: "'It' requiere el auxiliar de pregunta singular 'Does'."
      }
    ]
  },
  {
    name: "Ordenar Palabras",
    description: "Reordena las palabras haciendo clic en ellas para formar oraciones correctas.",
    type: "scramble",
    questions: [
      {
        question: "Reordena para formar: 'Ella habla inglés muy bien.'",
        pool: ["speaks", "well", "She", "English", "very"],
        correct: ["She", "speaks", "English", "very", "well"],
        explanation: "Estructura afirmativa: Sujeto (She) + Verbo conjugado (speaks) + Objeto (English) + Adverbio (very well)."
      },
      {
        question: "Reordena para formar: 'Ellos hacen sus deberes diariamente.'",
        pool: ["their", "homework", "do", "daily", "They"],
        correct: ["They", "do", "their", "homework", "daily"],
        explanation: "Estructura afirmativa: Sujeto (They) + Verbo (do) + Posesivo/Objeto (their homework) + Expresión temporal (daily)."
      },
      {
        question: "Reordena para formar la pregunta: '¿Él cocina la cena?'",
        pool: ["cook", "dinner", "Does", "he", "?"],
        correct: ["Does", "he", "cook", "dinner", "?"],
        explanation: "Estructura interrogativa: Auxiliar (Does) + Sujeto (he) + Verbo en forma base (cook) + Objeto (dinner) + ?"
      },
      {
        question: "Reordena para formar: 'Nosotros no trabajamos los lunes.'",
        pool: ["Mondays", "work", "on", "don't", "We"],
        correct: ["We", "don't", "work", "on", "Mondays"],
        explanation: "Estructura negativa: Sujeto (We) + Auxiliar (don't) + Verbo (work) + Expresión de tiempo (on Mondays)."
      },
      {
        question: "Reordena para formar: 'Mi padre siempre se levanta temprano.'",
        pool: ["father", "always", "gets", "early", "up", "My"],
        correct: ["My", "father", "always", "gets", "up", "early"],
        explanation: "Los adverbios de frecuencia (always) van antes del verbo (gets up). Estructura: Sujeto + Adverbio + Verbo + Adjetivo."
      },
      {
        question: "Reordena para formar: 'Ella no ve películas de terror.'",
        pool: ["doesn't", "watch", "scary", "movies", "She"],
        correct: ["She", "doesn't", "watch", "scary", "movies"],
        explanation: "Estructura negativa: Sujeto (She) + Auxiliar (doesn't) + Verbo base (watch) + Objeto (scary movies)."
      },
      {
        question: "Reordena para formar la pregunta: '¿Juegas al tenis a menudo?'",
        pool: ["often", "play", "tennis", "you", "Do", "?"],
        correct: ["Do", "you", "often", "play", "tennis", "?"],
        explanation: "El adverbio 'often' va antes del verbo principal 'play'. Pregunta: Auxiliar (Do) + Sujeto (you) + Adverbio (often) + Verbo (play) + Objeto (tennis) + ?"
      },
      {
        question: "Reordena para formar: 'Los gatos no duermen por la noche.'",
        pool: ["Cats", "sleep", "don't", "at", "night"],
        correct: ["Cats", "don't", "sleep", "at", "night"],
        explanation: "Estructura: Sujeto (Cats) + Auxiliar negativo (don't) + Verbo base (sleep) + Prep. frase (at night)."
      },
      {
        question: "Reordena para formar la pregunta: '¿Él escucha música?'",
        pool: ["music", "listen", "to", "Does", "he", "?"],
        correct: ["Does", "he", "listen", "to", "music", "?"],
        explanation: "Estructura interrogativa: Auxiliar (Does) + Sujeto (he) + Verbo base prep. (listen to) + Objeto (music) + ?"
      },
      {
        question: "Reordena para formar: 'Ella usualmente bebe leche por la mañana.'",
        pool: ["usually", "drinks", "milk", "in", "morning", "She", "the"],
        correct: ["She", "usually", "drinks", "milk", "in", "the", "morning"],
        explanation: "Estructura: Sujeto + Adverbio (usually) + Verbo (drinks) + Objeto (milk) + Expresión temporal (in the morning)."
      }
    ]
  },
  {
    name: "Verbo 'To Be' vs. Acción",
    description: "Distingue cuándo usar am/is/are frente a verbos de acción y sus auxiliares.",
    type: "choice",
    questions: [
      {
        question: "She __________ a teacher; she works at the school.",
        options: ["is", "does", "has", "am"],
        correct: 0,
        explanation: "Usamos el verbo To Be 'is' para describir una profesión o estado permanente de 'She' (Ella es)."
      },
      {
        question: "Where __________ you from?",
        options: ["do", "are", "is", "does"],
        correct: 1,
        explanation: "Para preguntar por procedencia con 'you', usamos el verbo To Be 'are'."
      },
      {
        question: "They __________ have a car, they walk everywhere.",
        options: ["aren't", "don't", "doesn't", "isn't"],
        correct: 1,
        explanation: "'Have' es un verbo de acción. Para negar un verbo de acción con 'they', usamos 'don't'. 'Aren't' no puede preceder a un verbo base."
      },
      {
        question: "My parents __________ very tired after work.",
        options: ["are", "do", "does", "is"],
        correct: 0,
        explanation: "'Tired' (cansado) es un adjetivo. Para estados usamos el verbo To Be ('are' porque 'my parents' es plural)."
      },
      {
        question: "__________ he happy with his new job?",
        options: ["Is", "Does", "Do", "Are"],
        correct: 0,
        explanation: "'Happy' (feliz) es un adjetivo. No usamos auxiliares do/does con adjetivos; usamos To Be: 'Is he happy?'"
      },
      {
        question: "He __________ study at this school; he goes to another one.",
        options: ["isn't", "doesn't", "don't", "not"],
        correct: 1,
        explanation: "'Study' es un verbo de acción. La negación para 'He' con verbo de acción es 'doesn't'."
      },
      {
        question: "I __________ not a doctor, I am a nurse.",
        options: ["am", "do", "does", "are"],
        correct: 0,
        explanation: "Para describirse a sí mismo ('I'), la forma del verbo To Be es 'am'."
      },
      {
        question: "Why __________ you sad today?",
        options: ["do", "does", "are", "is"],
        correct: 2,
        explanation: "'Sad' (triste) es un adjetivo. Usamos 'are' para preguntar un estado emocional a 'you'."
      },
      {
        question: "__________ they live in Argentina?",
        options: ["Are", "Do", "Does", "Is"],
        correct: 1,
        explanation: "'Live' (vivir) es un verbo de acción. Preguntamos con el auxiliar 'Do' para 'they'. 'Are they live...' es incorrecto."
      },
      {
        question: "She __________ not like pizza.",
        options: ["does", "is", "are", "do"],
        correct: 0,
        explanation: "'Like' es un verbo. La negación se hace con 'does' + 'not' (doesn't) para 'She'."
      }
    ]
  },
  {
    name: "Corrector de Errores",
    description: "Identifica y escribe correctamente el error de la oración (ej. corregir un verbo o un auxiliar).",
    type: "input",
    questions: [
      {
        question: "Encuentra el error y escribe el verbo corregido:<br><em>'She **play** tennis every Friday.'</em>",
        placeholder: "plays",
        answer: "plays",
        explanation: "El sujeto es 'She' (tercera persona singular), por lo que el verbo debe llevar '-s': plays."
      },
      {
        question: "Encuentra el error y escribe el auxiliar corregido:<br><em>'He **don't** like milk.'</em>",
        placeholder: "doesn't",
        answer: "doesn't",
        explanation: "La negación para 'He' es 'doesn't' (does not), no 'don't'."
      },
      {
        question: "Encuentra el error y escribe el auxiliar corregido:<br><em>'**Do** she speak English?'</em>",
        placeholder: "Does",
        answer: "does", // lowercase check
        explanation: "Para preguntar en tercera persona ('she'), usamos el auxiliar 'Does'."
      },
      {
        question: "Encuentra el error y escribe la palabra corregida:<br><em>'My brother **studys** math.'</em>",
        placeholder: "studies",
        answer: "studies",
        explanation: "El verbo 'study' termina en consonante + 'y'. Al conjugarlo con 'My brother' (He), la 'y' cambia a 'i' y se añade 'es': studies."
      },
      {
        question: "Encuentra el error y escribe el verbo corregido:<br><em>'They **does** their homework.'</em>",
        placeholder: "do",
        answer: "do",
        explanation: "El sujeto es 'They' (plural), por lo que el verbo debe ir en su forma base: do."
      },
      {
        question: "Encuentra el error y escribe el verbo corregido:<br><em>'She doesn't **plays** video games.'</em>",
        placeholder: "play",
        answer: "play",
        explanation: "Cuando usamos el auxiliar negativo 'doesn't', el verbo principal debe ir en su forma base sin la '-s': play."
      },
      {
        question: "Encuentra el error y escribe la palabra correcta:<br><em>'**Are** you like coffee?'</em>",
        placeholder: "Do",
        answer: "do",
        explanation: "'Like' es un verbo de acción, por lo que necesita el auxiliar 'Do' para hacer preguntas, no el verbo 'Are'."
      },
      {
        question: "Encuentra el error y escribe la frase corregida (posición):<br><em>'He **always is** late.'</em>",
        placeholder: "is always",
        answer: "is always",
        explanation: "Los adverbios de frecuencia van *después* del verbo To Be ('is'), por lo tanto, lo correcto es 'is always'."
      },
      {
        question: "Encuentra el error y escribe el verbo corregido:<br><em>'We **lives** in a small house.'</em>",
        placeholder: "live",
        answer: "live",
        explanation: "El sujeto es 'We' (Nosotros), por lo que el verbo no lleva la '-s' de la tercera persona singular."
      },
      {
        question: "Encuentra el error y escribe el verbo corregido:<br><em>'Does he **works** here?'</em>",
        placeholder: "work",
        answer: "work",
        explanation: "En la pregunta, el auxiliar 'Does' ya marca la tercera persona, por lo que el verbo debe ir en su forma base 'work'."
      }
    ]
  }
];

// Flashcards database (12 cards)
const flashcardsDatabase = [
  { front: "I work every day.", back: "Yo trabajo todos los días.", grammar: "Sujeto plural/primera persona (I) + Verbo en forma base." },
  { front: "He works every day.", back: "Él trabaja todos los días.", grammar: "Tercera persona singular (He) requiere agregar '-s' al verbo." },
  { front: "She doesn't speak French.", back: "Ella no habla francés.", grammar: "Negativo en 3ª persona usa 'doesn't' + verbo en forma base (sin -s)." },
  { front: "Do you play tennis?", back: "¿Juegas al tenis?", grammar: "Pregunta con 'you' requiere auxiliar 'Do' al principio." },
  { front: "Does she play tennis?", back: "¿Juega ella al tenis?", grammar: "Pregunta con 'she' requiere auxiliar 'Does' al principio. Verbo en base." },
  { front: "They don't live here.", back: "Ellos no viven aquí.", grammar: "Negativo con 'They' usa 'don't' + verbo en forma base." },
  { front: "The water boils at 100°C.", back: "El agua hierve a 100°C.", grammar: "Verdad general. 'Water' es incontable (It) -> verbo boil + s." },
  { front: "I am always happy.", back: "Yo siempre estoy feliz.", grammar: "El adverbio de frecuencia (always) va después del verbo To Be (am)." },
  { front: "He usually watches TV.", back: "Él usualmente ve la televisión.", grammar: "Adverbio antes del verbo. Verbo 'watch' termina en 'ch' -> añade '-es'." },
  { front: "We are from Spain.", back: "Nosotros somos de España.", grammar: "Verbo To Be (are) para el sujeto 'We'." },
  { front: "Is he your teacher?", back: "¿Es él tu profesor?", grammar: "Pregunta con verbo To Be coloca el verbo al principio sin auxiliar." },
  { front: "The train leaves at 8 PM.", back: "El tren sale a las 8 PM.", grammar: "Horarios programados. 'The train' (It) -> verbo leave + s." }
];

// Application state management
const app = {
  activePage: 'dashboard-page',
  
  // Progress states (stored in localStorage if wanted, resetable)
  progress: {
    scores: [0, 0, 0, 0, 0, 0], // Score out of 10 for each category
    completed: [false, false, false, false, false, false]
  },
  
  totalPoints: 0,
  successRate: 0,
  
  // Current active quiz states
  activeCategory: null,
  activeQuestionIndex: 0,
  selectedOption: null,
  answersSubmitted: false,
  correctAnswersCount: 0,
  
  // Word scramble active states
  scrambleSelectedWords: [],
  
  // Flashcards state
  activeFlashcardIndex: 0,
  
  init() {
    this.loadProgress();
    this.bindEvents();
    this.updateDashboardStats();
    this.navigateTo('dashboard-page');
    this.renderCategoryBadges();
    
    // Set date on certificate
    const certDateEl = document.getElementById('cert-date');
    if (certDateEl) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      certDateEl.innerText = new Date().toLocaleDateString('es-ES', options);
    }
  },
  
  bindEvents() {
    // Nav bar clicks
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        this.navigateTo(target);
      });
    });
    
    // Student name input change binding
    const nameInput = document.getElementById('student-name-input');
    const certName = document.getElementById('cert-student-name');
    if (nameInput && certName) {
      nameInput.addEventListener('input', (e) => {
        certName.innerText = e.target.value || "Estudiante de Inglés";
      });
    }
  },
  
  navigateTo(pageId) {
    this.activePage = pageId;
    
    // Update active nav link
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      if (item.getAttribute('data-target') === pageId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    // Update pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      if (page.id === pageId) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
    
    // If navigating to certificate page, check lock state
    if (pageId === 'certificate-page') {
      this.checkCertificateStatus();
    }
    
    // Reset flashcard state if entering flashcards
    if (pageId === 'flashcards-page') {
      this.activeFlashcardIndex = 0;
      this.renderFlashcard();
    }
  },
  
  loadProgress() {
    const saved = localStorage.getItem('present_simple_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.scores && parsed.completed) {
          this.progress = parsed;
        }
      } catch (e) {
        console.error("Error loading progress", e);
      }
    }
  },
  
  saveProgress() {
    localStorage.setItem('present_simple_progress', JSON.stringify(this.progress));
  },
  
  calculateOverallProgress() {
    // Maximum possible score is 60 (6 categories * 10)
    let totalScore = 0;
    this.progress.scores.forEach(s => totalScore += s);
    
    this.totalPoints = totalScore * 10; // 10 points per correct answer
    
    // Calculate percentage
    const maxScore = 60;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    // Calculate success rate based on completed categories
    let completedCount = 0;
    let completedScoreSum = 0;
    this.progress.completed.forEach((c, idx) => {
      if (c) {
        completedCount++;
        completedScoreSum += this.progress.scores[idx];
      }
    });
    
    this.successRate = completedCount > 0 ? Math.round((completedScoreSum / (completedCount * 10)) * 100) : 0;
    
    return percentage;
  },
  
  updateDashboardStats() {
    const progressPercentage = this.calculateOverallProgress();
    
    // Update progress bar
    const fillBar = document.getElementById('overall-progress-bar');
    const textPercent = document.getElementById('progress-percentage');
    if (fillBar) fillBar.style.width = `${progressPercentage}%`;
    if (textPercent) textPercent.innerText = `${progressPercentage}%`;
    
    // Update Score Board
    const scoreVal = document.getElementById('user-total-score');
    if (scoreVal) scoreVal.innerText = this.totalPoints;
    
    // Update Dashboard widgets
    let completedCount = 0;
    this.progress.completed.forEach(c => { if(c) completedCount++; });
    
    const exDoneEl = document.getElementById('stat-exercises-done');
    const successRateEl = document.getElementById('stat-success-rate');
    const statPointsEl = document.getElementById('stat-points');
    
    if (exDoneEl) exDoneEl.innerText = `${completedCount}/6`;
    if (successRateEl) successRateEl.innerText = `${this.successRate}%`;
    if (statPointsEl) statPointsEl.innerText = this.totalPoints;
  },
  
  renderCategoryBadges() {
    quizDatabase.forEach((cat, idx) => {
      const badge = document.getElementById(`badge-cat-${idx}`);
      if (badge) {
        if (this.progress.completed[idx]) {
          badge.className = "badge-status status-completed";
          badge.innerText = `Completado (${this.progress.scores[idx]}/10)`;
        } else {
          badge.className = "badge-status status-unlocked";
          badge.innerText = "Disponible";
        }
      }
    });
  },
  
  checkCertificateStatus() {
    const progressPercentage = this.calculateOverallProgress();
    const lockedState = document.getElementById('cert-locked-state');
    const unlockedState = document.getElementById('cert-unlocked-state');
    
    // 80% progress unlocks the certificate
    if (progressPercentage >= 80) {
      if (lockedState) lockedState.style.display = 'none';
      if (unlockedState) unlockedState.style.display = 'block';
    } else {
      if (lockedState) lockedState.style.display = 'block';
      if (unlockedState) unlockedState.style.display = 'none';
      
      // Update progress bar on lock screen
      const certProgressFill = document.getElementById('cert-progress-fill');
      const certProgressText = document.getElementById('cert-progress-text');
      if (certProgressFill) certProgressFill.style.width = `${progressPercentage}%`;
      if (certProgressText) certProgressText.innerText = `Progreso: ${progressPercentage}% / 80%`;
    }
  },
  
  // QUIZ LOGIC
  startQuiz(categoryIndex) {
    this.activeCategory = categoryIndex;
    this.activeQuestionIndex = 0;
    this.correctAnswersCount = 0;
    this.selectedOption = null;
    this.answersSubmitted = false;
    
    // UI Screen toggle
    document.getElementById('exercise-selection').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('active-quiz').style.display = 'block';
    
    // Set Title
    document.getElementById('active-quiz-title').innerText = quizDatabase[categoryIndex].name;
    
    this.renderQuestion();
  },
  
  exitQuiz() {
    document.getElementById('active-quiz').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('exercise-selection').style.display = 'block';
    this.navigateTo('practice-page');
    this.updateDashboardStats();
    this.renderCategoryBadges();
  },
  
  renderQuestion() {
    const category = quizDatabase[this.activeCategory];
    const question = category.questions[this.activeQuestionIndex];
    
    // Reset buttons
    document.getElementById('btn-submit-answer').style.display = 'inline-flex';
    document.getElementById('btn-next-question').style.display = 'none';
    
    // Reset feedback
    const feedbackBox = document.getElementById('feedback-box');
    feedbackBox.style.display = 'none';
    feedbackBox.className = "feedback-box";
    
    // Set progress headers
    document.getElementById('quiz-progress-text').innerText = `Pregunta ${this.activeQuestionIndex + 1} de 10`;
    document.getElementById('quiz-score-badge').innerText = `Aciertos: ${this.correctAnswersCount}`;
    
    // Question text and audio icon
    const questionTextEl = document.getElementById('question-text');
    
    // Create clean speaking sentence (removing underscores and parenthetical verbs for speech)
    const rawSentence = question.question.replace(/__________/g, "blank").replace(/\([^)]+\)/g, "");
    
    questionTextEl.innerHTML = `
      ${question.question}
      <button class="speaker-btn" title="Escuchar Oración" onclick="app.speakText('${rawSentence.replace(/'/g, "\\'")}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px; height:18px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
      </button>
    `;
    
    const container = document.getElementById('quiz-interaction-container');
    container.innerHTML = ''; // Clear
    
    this.answersSubmitted = false;
    this.selectedOption = null;
    
    // Render interaction based on quiz type
    if (category.type === 'choice') {
      const optionsList = document.createElement('div');
      optionsList.className = 'options-list';
      
      question.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
          <span>${opt}</span>
          <div class="option-icon"></div>
        `;
        btn.onclick = () => this.selectOption(idx);
        optionsList.appendChild(btn);
      });
      container.appendChild(optionsList);
      
    } else if (category.type === 'input') {
      const inputWrapper = document.createElement('div');
      inputWrapper.style.display = 'flex';
      inputWrapper.style.flexDirection = 'column';
      inputWrapper.style.gap = '1rem';
      
      if (question.isMultiInput) {
        // Multi blank input (e.g. Do / speak)
        const inputsCount = question.answer.split(',').length;
        let htmlContent = `<div style="display:flex; gap:1rem; align-items:center;">`;
        for (let i = 0; i < inputsCount; i++) {
          htmlContent += `
            <input type="text" id="blank-input-${i}" class="blank-input" placeholder="Espacio ${i+1}" autocomplete="off">
          `;
          if (i < inputsCount - 1) {
            htmlContent += `<span style="color:var(--text-secondary); font-weight:600;">+</span>`;
          }
        }
        htmlContent += `</div>`;
        inputWrapper.innerHTML = htmlContent;
      } else {
        // Single blank input
        inputWrapper.innerHTML = `
          <input type="text" id="blank-input-0" class="blank-input" style="width: 250px; text-align: left;" placeholder="${question.placeholder || 'Escribe tu respuesta...'}" autocomplete="off">
        `;
      }
      
      container.appendChild(inputWrapper);
      
      // Autofocus first input
      setTimeout(() => {
        const firstInput = document.getElementById('blank-input-0');
        if (firstInput) firstInput.focus();
      }, 100);
      
    } else if (category.type === 'scramble') {
      this.scrambleSelectedWords = [];
      
      const scrambleWrapper = document.createElement('div');
      scrambleWrapper.innerHTML = `
        <div class="scramble-slots" id="scramble-slots-container">
          <!-- Chips selected will go here -->
          <span style="color:var(--text-muted); font-size:0.9rem; align-self:center; margin-left:0.5rem;" id="scramble-placeholder">Haz clic en las palabras de abajo para formar la oración...</span>
        </div>
        <div class="scramble-pool" id="scramble-pool-container">
          <!-- Pool of words -->
        </div>
      `;
      container.appendChild(scrambleWrapper);
      
      const poolContainer = document.getElementById('scramble-pool-container');
      
      // Shuffle pool copy
      const shuffled = [...question.pool].sort(() => Math.random() - 0.5);
      
      shuffled.forEach((word, idx) => {
        const chip = document.createElement('div');
        chip.className = 'word-chip';
        chip.innerText = word;
        chip.setAttribute('data-word-idx', idx);
        chip.onclick = () => this.handleScrambleClick(chip, word);
        poolContainer.appendChild(chip);
      });
    }
  },
  
  selectOption(optionIndex) {
    if (this.answersSubmitted) return;
    
    this.selectedOption = optionIndex;
    
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach((btn, idx) => {
      if (idx === optionIndex) {
        btn.classList.add('selected');
      } else {
        btn.classList.remove('selected');
      }
    });
  },
  
  handleScrambleClick(chipElement, word) {
    if (this.answersSubmitted) return;
    
    const slots = document.getElementById('scramble-slots-container');
    const placeholder = document.getElementById('scramble-placeholder');
    
    if (chipElement.parentNode.id === 'scramble-pool-container') {
      // Move to slots
      if (placeholder) placeholder.style.display = 'none';
      slots.appendChild(chipElement);
      this.scrambleSelectedWords.push(word);
    } else {
      // Move back to pool
      const pool = document.getElementById('scramble-pool-container');
      pool.appendChild(chipElement);
      this.scrambleSelectedWords = this.scrambleSelectedWords.filter(w => w !== word);
      
      if (this.scrambleSelectedWords.length === 0 && placeholder) {
        placeholder.style.display = 'block';
      }
    }
  },
  
  submitAnswer() {
    if (this.answersSubmitted) return;
    
    const category = quizDatabase[this.activeCategory];
    const question = category.questions[this.activeQuestionIndex];
    let isCorrect = false;
    
    const quizCard = document.querySelector('#active-quiz .card');
    
    if (category.type === 'choice') {
      if (this.selectedOption === null) {
        alert("Por favor, selecciona una opción.");
        return;
      }
      
      this.answersSubmitted = true;
      const btns = document.querySelectorAll('.option-btn');
      
      if (this.selectedOption === question.correct) {
        isCorrect = true;
        btns[this.selectedOption].classList.add('correct');
      } else {
        isCorrect = false;
        btns[this.selectedOption].classList.add('incorrect');
        btns[question.correct].classList.add('correct'); // Show correct
      }
      
    } else if (category.type === 'input') {
      if (question.isMultiInput) {
        // Multi blank checking
        const inputsCount = question.answer.split(',').length;
        const answers = question.answer.split(',').map(a => a.trim().toLowerCase());
        let correctBlanks = 0;
        
        for (let i = 0; i < inputsCount; i++) {
          const val = document.getElementById(`blank-input-${i}`).value.trim().toLowerCase();
          if (val === answers[i]) {
            correctBlanks++;
            document.getElementById(`blank-input-${i}`).style.borderColor = 'var(--color-success)';
          } else {
            document.getElementById(`blank-input-${i}`).style.borderColor = 'var(--color-error)';
          }
        }
        
        isCorrect = (correctBlanks === inputsCount);
      } else {
        // Single blank checking
        const val = document.getElementById('blank-input-0').value.trim().toLowerCase();
        const correctAns = question.answer.trim().toLowerCase();
        
        if (val === correctAns) {
          isCorrect = true;
          document.getElementById('blank-input-0').style.borderColor = 'var(--color-success)';
        } else {
          isCorrect = false;
          document.getElementById('blank-input-0').style.borderColor = 'var(--color-error)';
        }
      }
      this.answersSubmitted = true;
      
    } else if (category.type === 'scramble') {
      if (this.scrambleSelectedWords.length < question.correct.length) {
        alert("Por favor, ordena todas las palabras primero.");
        return;
      }
      
      this.answersSubmitted = true;
      
      // Check sequence match
      let matches = 0;
      question.correct.forEach((word, idx) => {
        if (this.scrambleSelectedWords[idx] === word) {
          matches++;
        }
      });
      
      isCorrect = (matches === question.correct.length);
      const slotsContainer = document.getElementById('scramble-slots-container');
      if (isCorrect) {
        slotsContainer.style.borderColor = 'var(--color-success)';
      } else {
        slotsContainer.style.borderColor = 'var(--color-error)';
      }
    }
    
    // Handle scoring and feedback
    const feedbackBox = document.getElementById('feedback-box');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackDesc = document.getElementById('feedback-desc');
    
    if (isCorrect) {
      this.correctAnswersCount++;
      feedbackBox.className = "feedback-box correct";
      feedbackTitle.innerText = "¡Excelente! Correcto 🌟";
      AudioSynth.playCorrect();
      quizCard.classList.add('animation-correct');
    } else {
      feedbackBox.className = "feedback-box incorrect";
      feedbackTitle.innerText = "Respuesta Incorrecta ❌";
      AudioSynth.playError();
      quizCard.classList.add('animation-shake');
      
      // Present correct answer text
      let correctText = "";
      if (category.type === 'choice') {
        correctText = question.options[question.correct];
      } else if (category.type === 'input') {
        correctText = question.answer.replace(/,/g, " / ");
      } else if (category.type === 'scramble') {
        correctText = question.correct.join(" ");
      }
      
      feedbackTitle.innerHTML += `<span style="display:block; font-size:0.95rem; font-weight:500; margin-top:0.25rem; color:#fff;">Respuesta correcta: <strong style="color:var(--color-success);">${correctText}</strong></span>`;
    }
    
    // Set explanation
    feedbackDesc.innerText = question.explanation;
    
    // Remove animation classes after delay so they can repeat
    setTimeout(() => {
      quizCard.classList.remove('animation-correct', 'animation-shake');
    }, 600);
    
    // Toggle footer buttons
    document.getElementById('btn-submit-answer').style.display = 'none';
    document.getElementById('btn-next-question').style.display = 'inline-flex';
  },
  
  nextQuestion() {
    this.activeQuestionIndex++;
    if (this.activeQuestionIndex < 10) {
      this.renderQuestion();
    } else {
      this.showQuizResults();
    }
  },
  
  showQuizResults() {
    document.getElementById('active-quiz').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    const categoryIndex = this.activeCategory;
    const score = this.correctAnswersCount;
    const percentage = Math.round((score / 10) * 100);
    const pointsGained = score * 10;
    
    // Update active score if it's higher than the previous one
    if (score > this.progress.scores[categoryIndex]) {
      this.progress.scores[categoryIndex] = score;
    }
    
    // 8 out of 10 completes the category
    if (score >= 8) {
      this.progress.completed[categoryIndex] = true;
      AudioSynth.playSuccess();
      
      document.getElementById('results-icon').innerText = "🏆";
      document.getElementById('results-headline').innerText = "¡Módulo Aprobado! 🎉";
      document.getElementById('results-message').innerText = "¡Increíble trabajo! Has superado con éxito esta categoría de Present Simple.";
    } else {
      document.getElementById('results-icon').innerText = "✍️";
      document.getElementById('results-headline').innerText = "Sigue Practicando";
      document.getElementById('results-message').innerText = "No has alcanzado el 80% mínimo de aciertos para completar la categoría. ¡Vuelve a intentarlo para mejorar!";
    }
    
    this.saveProgress();
    
    // Render results
    document.getElementById('results-score-num').innerText = `${score}/10`;
    document.getElementById('results-percentage').innerText = `${percentage}%`;
    document.getElementById('results-points-gained').innerText = `+${pointsGained}`;
    
    document.getElementById('btn-results-action').innerText = score >= 8 ? "Practicar Otra Vez" : "Reintentar Ejercicio";
    
    this.updateDashboardStats();
    this.renderCategoryBadges();
  },
  
  retryQuiz() {
    this.startQuiz(this.activeCategory);
  },
  
  // FLASHCARDS ENGINE
  renderFlashcard() {
    const card = flashcardsDatabase[this.activeFlashcardIndex];
    const cardElement = document.getElementById('flashcard-element');
    
    // Reset flip
    if (cardElement) cardElement.classList.remove('flipped');
    
    // Set card texts
    const frontText = document.getElementById('flash-front-text');
    const backText = document.getElementById('flash-back-text');
    const backGrammar = document.getElementById('flash-back-grammar');
    
    if (frontText) frontText.innerText = card.front;
    if (backText) backText.innerText = card.back;
    if (backGrammar) backGrammar.innerText = card.grammar;
    
    // Update counter
    const counter = document.getElementById('flashcard-counter');
    if (counter) counter.innerText = `${this.activeFlashcardIndex + 1} de ${flashcardsDatabase.length}`;
  },
  
  flipCard() {
    const cardElement = document.getElementById('flashcard-element');
    if (cardElement) cardElement.classList.toggle('flipped');
  },
  
  nextCard() {
    this.activeFlashcardIndex = (this.activeFlashcardIndex + 1) % flashcardsDatabase.length;
    this.renderFlashcard();
  },
  
  prevCard() {
    this.activeFlashcardIndex = (this.activeFlashcardIndex - 1 + flashcardsDatabase.length) % flashcardsDatabase.length;
    this.renderFlashcard();
  },
  
  speakFlashcard() {
    const card = flashcardsDatabase[this.activeFlashcardIndex];
    this.speakText(card.front);
  },
  
  // SPEECH SYNTHESIS HELPER
  speakText(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop current speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      
      // Try to find a premium English voice
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google'));
      const defaultEnglish = voices.find(v => v.lang.startsWith('en'));
      
      utterance.voice = englishVoice || defaultEnglish || null;
      utterance.rate = 0.9; // Slightly slower for clear A1 learning
      window.speechSynthesis.speak(utterance);
    } else {
      console.log("Speech synthesis not supported in this browser.");
    }
  },
  
  // PRINT CERTIFICATE
  printCertificate() {
    const nameInput = document.getElementById('student-name-input');
    const certName = document.getElementById('cert-student-name');
    if (nameInput && certName) {
      certName.innerText = nameInput.value.trim() || "Estudiante de Inglés";
    }
    window.print();
  }
};

// Initialize app when DOM loads
window.addEventListener('DOMContentLoaded', () => {
  app.init();
});

// Ensure voices are loaded for SpeechSynthesis
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    // triggers browser to load voice array
  };
}
