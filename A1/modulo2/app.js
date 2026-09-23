/**
 * English File Elementary - Módulo 2 (Units 4A–4C, 5A–5C)
 * Lógica de UI, voz, ejercicios y progreso.
 * Contenido en data.js (LESSONS + BANKS) — cargar ANTES de este archivo.
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

// Progress groups: which lesson keys belong to which unit block
const PROGRESS_GROUPS = {
  units4: ['4A', '4B', '4C', 'RC4', 'gb4'],
  units5: ['5A', '5B', '5C', 'RC5', 'gb5']
};

// Default flat progress for migration / reset
function defaultProgress() {
  return {
    "4A": false, "4B": false, "4C": false, "RC4": false, "gb4": false,
    "5A": false, "5B": false, "5C": false, "RC5": false, "gb5": false
  };
}

// Accuracy tracker: { lessonKey: { attempts, correct } }
function defaultAccuracy() {
  return {};
}

// Micro-habit messages shown on lesson completion
const MICRO_HABITS = [
  "Repasá esta lección mañana un rato corto — la repetición espaciada fija el contenido. 🧠",
  "Si erraste algo, volvé a la pestaña Teoría y leé solo esa regla (2 minutos). 📖",
  "Explicale una idea de esta lección a alguien (o en voz alta) — enseñar es estudiar. 🗣️",
  "Anotá 3 palabras nuevas en un post-it y pegalas donde las veas todos los días. ✍️",
  "Dormir bien ayuda a consolidar la memoria de hoy. ¡Descansá! 😴",
  "Hacé el quiz de nuevo en 1–2 días para medir si de verdad lo retuviste. 🔁"
];

// MASTER APP OBJECT
const app = {
  state: {
    activePage: 'dashboard-page',
    activeLesson: '4A',
    lessonTab: 'lesson-theory',
    lessonQuizIndex: 0,
    lessonQuizScore: 0,
    grammarModule: 4,
    grammarQuizIndex: 0,
    grammarQuizScore: 0,
    vocabModule: 4,
    selectedVocabCat: 'family',
    vocabMode: 'list',
    vocabCardIndex: 0,
    matchingSelection: null,
    matchingAttempts: 0,
    matchingErrors: 0,
    voiceAccent: 'en-GB',
    voiceSpeed: 0.9,
    exerciseModule: 4,
    exerciseCategory: 'possessives',
    userScore: 0,
    progress: defaultProgress(),
    accuracy: defaultAccuracy()
  },

  init() {
    this.loadPersistedProgress();
    this.setupEventListeners();
    this.updateStatsUI();
    this.renderRoadmap();
    this.loadLesson('4A');
    this.loadGrammarBank(4);
    this.selectVocabularyBank('family', 4);
    this.renderPhonemes();
    this.selectExerciseCategory('possessives', 4);
    this.updateSmartReview();
    this.runStructuralSelfCheck();
  },

  // -------------------------------------------------------------------------
  // PERSISTENCE
  // -------------------------------------------------------------------------
  loadPersistedProgress() {
    try {
      const saved = localStorage.getItem('ef_modulo2_progress');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Migrate legacy flat progress: merge into defaults so new keys appear
        const base = defaultProgress();
        const legacy = parsed.progress || {};
        for (const k of Object.keys(base)) {
          if (typeof legacy[k] === 'boolean') base[k] = legacy[k];
        }
        this.state.progress = base;
        this.state.userScore = parsed.score || 0;
        this.state.accuracy = parsed.accuracy || defaultAccuracy();
      }
    } catch (e) { console.warn("Could not load progress", e); }
  },

  saveProgress() {
    try {
      localStorage.setItem('ef_modulo2_progress', JSON.stringify({
        progress: this.state.progress,
        score: this.state.userScore,
        accuracy: this.state.accuracy
      }));
    } catch (e) { console.warn("Could not save progress", e); }
  },

  exportProgress() {
    try {
      const payload = {
        version: 2,
        exportedAt: new Date().toISOString(),
        progress: this.state.progress,
        score: this.state.userScore,
        accuracy: this.state.accuracy
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'english-file-modulo2-progreso.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.warn("Export failed", e);
      alert("No se pudo exportar el progreso.");
    }
  },

  importProgress(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!parsed || typeof parsed !== 'object') throw new Error("Invalid JSON");
        const base = defaultProgress();
        const incoming = parsed.progress || {};
        for (const k of Object.keys(base)) {
          if (typeof incoming[k] === 'boolean') base[k] = incoming[k];
        }
        this.state.progress = base;
        this.state.userScore = typeof parsed.score === 'number' ? parsed.score : 0;
        this.state.accuracy = (parsed.accuracy && typeof parsed.accuracy === 'object') ? parsed.accuracy : defaultAccuracy();
        this.saveProgress();
        this.updateStatsUI();
        this.renderRoadmap();
        this.renderLessonSelector();
        this.updateSmartReview();
        alert("Progreso importado correctamente. ✅");
      } catch (e) {
        console.warn("Import failed", e);
        alert("Archivo inválido. Se espera un JSON exportado desde este módulo.");
      }
    };
    reader.readAsText(file);
  },

  // -------------------------------------------------------------------------
  // EVENT LISTENERS & NAV
  // -------------------------------------------------------------------------
  setupEventListeners() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        if (target) this.navigateTo(target);
      });
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
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

    // Export / Import
    const exportBtn = document.getElementById('btn-export-progress');
    if (exportBtn) exportBtn.addEventListener('click', () => this.exportProgress());

    const importInput = document.getElementById('import-progress-file');
    if (importInput) {
      importInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        this.importProgress(file);
        e.target.value = '';
      });
    }

    const importBtn = document.getElementById('btn-import-progress');
    if (importBtn) {
      importBtn.addEventListener('click', () => {
        const input = document.getElementById('import-progress-file');
        if (input) input.click();
      });
    }

    // Smart review
    const reviewBtn = document.getElementById('btn-smart-review');
    if (reviewBtn) {
      reviewBtn.addEventListener('click', () => this.startSmartReview());
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
    if (pageId === 'dashboard-page') {
      this.updateSmartReview();
      this.renderRoadmap();
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

  // -------------------------------------------------------------------------
  // STATS / PROGRESS UI
  // -------------------------------------------------------------------------
  pctForKeys(keys) {
    if (!keys || !keys.length) return 0;
    const done = keys.filter(k => this.state.progress[k]).length;
    return Math.round((done / keys.length) * 100);
  },

  updateStatsUI() {
    const allKeys = Object.keys(this.state.progress);
    const totalPct = this.pctForKeys(allKeys);
    const units4Pct = this.pctForKeys(PROGRESS_GROUPS.units4);
    const units5Pct = this.pctForKeys(PROGRESS_GROUPS.units5);

    const fillBar = document.getElementById('overall-progress-fill');
    if (fillBar) fillBar.style.width = totalPct + '%';

    const textVal = document.getElementById('overall-progress-text');
    if (textVal) textVal.innerText = totalPct + '%';

    const dashText = document.getElementById('dashboard-percentage');
    if (dashText) dashText.textContent = totalPct + '%';

    const dashCircle = document.getElementById('circle-progress');
    if (dashCircle) dashCircle.setAttribute('stroke-dasharray', `${totalPct}, 100`);

    const scoreCount = document.getElementById('score-counter');
    if (scoreCount) scoreCount.innerText = this.state.userScore;

    const accCount = document.getElementById('accuracy-counter');
    if (accCount) accCount.innerText = totalPct + '%';

    // Grouped percentages
    const g4 = document.getElementById('progress-units4');
    if (g4) g4.innerText = units4Pct + '%';
    const g5 = document.getElementById('progress-units5');
    if (g5) g5.innerText = units5Pct + '%';
    const gT = document.getElementById('progress-total');
    if (gT) gT.innerText = totalPct + '%';

    this.saveProgress();
  },

  renderRoadmap() {
    document.querySelectorAll('.roadmap-card').forEach(card => {
      const lessonKey = card.getAttribute('data-lesson');
      const statusSpan = card.querySelector('.status-indicator');
      if (statusSpan && this.state.progress[lessonKey]) {
        statusSpan.classList.add('completed');
        statusSpan.innerHTML = "✓ Completado";
      } else if (statusSpan && lessonKey && !this.state.progress[lessonKey]) {
        statusSpan.classList.remove('completed');
        statusSpan.innerHTML = "Pendiente";
      }
    });
  },

  // -------------------------------------------------------------------------
  // SMART REVIEW
  // -------------------------------------------------------------------------
  updateSmartReview() {
    const box = document.getElementById('smart-review-box');
    const textEl = document.getElementById('smart-review-text');
    const btn = document.getElementById('btn-smart-review');
    if (!box || !textEl) return;

    const suggestion = this.computeWeakestLesson();
    if (!suggestion) {
      box.style.display = 'none';
      return;
    }
    box.style.display = 'block';
    textEl.innerHTML = suggestion.html;
    if (btn) btn.dataset.lesson = suggestion.key;
  },

  computeWeakestLesson() {
    const lessonKeys = Object.keys(LESSONS).filter(k => !k.startsWith('RC'));
    const scored = [];

    for (const key of lessonKeys) {
      const acc = this.state.accuracy[key];
      const completed = this.state.progress[key];
      if (acc && acc.attempts > 0) {
        const pct = Math.round((acc.correct / acc.attempts) * 100);
        scored.push({ key, pct, attempts: acc.attempts, rank: pct });
      } else if (!completed) {
        // Never attempted → high priority for practice
        scored.push({ key, pct: null, attempts: 0, rank: -1 });
      }
    }

    if (!scored.length) return null;

    // Prefer lowest accuracy among attempted; else first unattempted
    scored.sort((a, b) => {
      if (a.rank === -1 && b.rank === -1) return 0;
      if (a.rank === -1) return -1;
      if (b.rank === -1) return 1;
      return a.rank - b.rank;
    });

    const top = scored[0];
    const title = LESSONS[top.key] ? LESSONS[top.key].title : top.key;
    if (top.pct === null) {
      return {
        key: top.key,
        html: `Todavía no intentaste <strong>${title}</strong>. Es un buen momento para arrancarla.`
      };
    }
    return {
      key: top.key,
      html: `Tu lección más floja es <strong>${title}</strong> con <strong>${top.pct}%</strong> de aciertos (${top.attempts} intentos). ¡Dale una repasada!`
    };
  },

  startSmartReview() {
    const btn = document.getElementById('btn-smart-review');
    const key = btn && btn.dataset.lesson;
    if (key && LESSONS[key]) {
      this.loadLesson(key);
    }
  },

  // -------------------------------------------------------------------------
  // LESSONS
  // -------------------------------------------------------------------------
  loadLesson(lessonKey) {
    const data = LESSONS[lessonKey];
    if (!data) return;

    this.state.activeLesson = lessonKey;
    this.state.lessonQuizIndex = 0;
    this.state.lessonQuizScore = 0;

    this.renderLessonSelector();

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

  renderLessonSelector() {
    const nav = document.getElementById('lesson-switcher');
    if (!nav) return;
    const keys = Object.keys(LESSONS);
    nav.innerHTML = keys.map(key => {
      const active = key === this.state.activeLesson ? ' active' : '';
      const done = this.state.progress[key] ? ' completed' : '';
      return `<button type="button" class="lesson-chip${active}${done}" data-lesson="${key}" aria-pressed="${active ? 'true' : 'false'}">${key}</button>`;
    }).join('');
    nav.querySelectorAll('.lesson-chip').forEach(chip => {
      chip.addEventListener('click', () => this.loadLesson(chip.getAttribute('data-lesson')));
    });
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

  trackAnswer(lessonKey, correct) {
    if (!this.state.accuracy[lessonKey]) {
      this.state.accuracy[lessonKey] = { attempts: 0, correct: 0 };
    }
    this.state.accuracy[lessonKey].attempts++;
    if (correct) this.state.accuracy[lessonKey].correct++;
    this.saveProgress();
  },

  renderCurrentLessonQuiz() {
    const data = LESSONS[this.state.activeLesson];
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
    const data = LESSONS[this.state.activeLesson];
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
      const val = input.value.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
      const ans = quiz.answer.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
      isCorrect = (val === ans);
    } else if (quiz.type === 'scramble') {
      const chips = document.querySelectorAll('#scramble-target-zone .scramble-chip');
      const constructed = Array.from(chips).map(c => c.innerText.trim());
      isCorrect = JSON.stringify(constructed) === JSON.stringify(quiz.correct);
    }

    this.trackAnswer(this.state.activeLesson, isCorrect);

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
    const data = LESSONS[this.state.activeLesson];
    this.state.lessonQuizIndex++;

    if (this.state.lessonQuizIndex < data.exercises.length) {
      this.renderCurrentLessonQuiz();
    } else {
      // Finished all quiz
      AudioSynth.playSuccess();
      this.state.progress[this.state.activeLesson] = true;
      this.state.userScore += 20; // completion bonus
      this.updateStatsUI();
      this.renderRoadmap();
      this.renderLessonSelector();
      this.updateSmartReview();

      const quizArea = document.getElementById('lesson-quiz-area');
      const feedback = document.getElementById('lesson-quiz-feedback');
      const submitBtn = document.getElementById('btn-submit-lesson-quiz');
      const nextBtn = document.getElementById('btn-next-lesson-quiz');

      // Micro-habit: random reinforcement tip
      const tip = MICRO_HABITS[Math.floor(Math.random() * MICRO_HABITS.length)];

      if (quizArea) {
        quizArea.innerHTML = `
          <div style="text-align:center; padding: 2rem 0;">
            <h2 style="font-family:var(--font-title); font-size:1.8rem; margin-bottom:1rem;">¡Lección Completada! 🎓</h2>
            <p style="color:var(--text-secondary); margin-bottom:0.75rem;">Puntuación obtenida: <strong>${this.state.lessonQuizScore} de ${data.exercises.length}</strong> aciertos.</p>
            <div class="rule-highlight-box" style="text-align:left; max-width:520px; margin:0 auto 1.5rem auto;">
              💡 <strong>Hábito de estudio:</strong> ${tip}
            </div>
            <button class="btn btn-primary" onclick="app.navigateTo('dashboard-page')">Volver al Roadmap</button>
          </div>
        `;
      }
      if (feedback) feedback.style.display = 'none';
      if (submitBtn) submitBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
    }
  },

  // -------------------------------------------------------------------------
  // GRAMMAR BANK (modular 4 / 5)
  // -------------------------------------------------------------------------
  loadGrammarBank(moduleNum) {
    const mod = moduleNum || this.state.grammarModule;
    this.state.grammarModule = mod;
    const bank = BANKS.grammar[mod];
    if (!bank) return;

    // Update module switcher active state
    document.querySelectorAll('.grammar-mod-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.getAttribute('data-gmod'), 10) === mod);
    });

    const titleEl = document.getElementById('grammar-bank-title');
    if (titleEl) titleEl.innerText = bank.label;
    const theoryHeading = document.getElementById('grammar-theory-heading');
    if (theoryHeading) theoryHeading.innerText = `Teoría Oficial ${bank.label}`;
    const practiceHeading = document.getElementById('grammar-practice-heading');
    if (practiceHeading) practiceHeading.innerText = `Práctica ${bank.label}`;

    const theoryContent = document.getElementById('grammar-bank-theory-content');
    if (theoryContent) theoryContent.innerHTML = bank.theory;
    this.state.grammarQuizIndex = 0;
    this.state.grammarQuizScore = 0;
    this.renderCurrentGrammarQuiz();
  },

  renderCurrentGrammarQuiz() {
    const bank = BANKS.grammar[this.state.grammarModule];
    if (!bank) return;
    const quiz = bank.exercises[this.state.grammarQuizIndex];
    if (!quiz) return;

    const indicator = document.getElementById('grammar-bank-indicator');
    const scoreBadge = document.getElementById('grammar-bank-score');
    const area = document.getElementById('grammar-bank-exercise-area');
    const feedback = document.getElementById('grammar-bank-feedback');
    const submitBtn = document.getElementById('btn-submit-grammar-bank');
    const nextBtn = document.getElementById('btn-next-grammar-bank');

    if (indicator) indicator.innerText = `Pregunta ${this.state.grammarQuizIndex + 1} de ${bank.exercises.length}`;
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
    const bank = BANKS.grammar[this.state.grammarModule];
    const quiz = bank.exercises[this.state.grammarQuizIndex];
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
      const val = input.value.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
      const ans = quiz.answer.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
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
    const bank = BANKS.grammar[this.state.grammarModule];
    this.state.grammarQuizIndex++;
    if (this.state.grammarQuizIndex < bank.exercises.length) {
      this.renderCurrentGrammarQuiz();
    } else {
      AudioSynth.playSuccess();
      const flagKey = this.state.grammarModule === 5 ? 'gb5' : 'gb4';
      this.state.progress[flagKey] = true;
      this.updateStatsUI();

      const area = document.getElementById('grammar-bank-exercise-area');
      const feedback = document.getElementById('grammar-bank-feedback');
      const submitBtn = document.getElementById('btn-submit-grammar-bank');
      const nextBtn = document.getElementById('btn-next-grammar-bank');

      if (area) {
        area.innerHTML = `
          <div style="text-align:center; padding: 2rem 0;">
            <h2 style="font-family:var(--font-title); font-size:1.6rem; margin-bottom:0.75rem;">¡${bank.label} Finalizado! 🏆</h2>
            <p style="color:var(--text-secondary); margin-bottom:1.5rem;">Puntaje: <strong>${this.state.grammarQuizScore} de ${bank.exercises.length}</strong>.</p>
            <button class="btn btn-primary" onclick="app.navigateTo('dashboard-page')">Volver al Inicio</button>
          </div>
        `;
      }
      if (feedback) feedback.style.display = 'none';
      if (submitBtn) submitBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
    }
  },

  // -------------------------------------------------------------------------
  // VOCABULARY BANK (modular 4 / 5)
  // -------------------------------------------------------------------------
  selectVocabularyBank(category, moduleNum) {
    const mod = moduleNum || this.state.vocabModule;
    this.state.vocabModule = mod;
    const bank = BANKS.vocab[mod];
    if (!bank) return;

    // Module switcher
    document.querySelectorAll('.vocab-mod-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.getAttribute('data-vmod'), 10) === mod);
    });

    const titleEl = document.getElementById('vocab-bank-title');
    if (titleEl) titleEl.innerText = bank.label;

    // Rebuild category tabs
    const tabsHost = document.getElementById('vocab-category-tabs');
    if (tabsHost) {
      tabsHost.innerHTML = bank.categories.map((c, i) => `
        <button class="tab-btn vocab-cat-btn ${i === 0 ? 'active' : ''}" data-vocab="${c.key}"
          onclick="app.selectVocabularyBank('${c.key}', ${mod})">${c.label}</button>
      `).join('');
    }

    // If requested category not in this module (or null), fall back to first
    const catKeys = bank.categories.map(c => c.key);
    const cat = (category && catKeys.includes(category)) ? category : catKeys[0];
    this.state.selectedVocabCat = cat;

    // Ensure active class on correct button after rebuild
    document.querySelectorAll('.vocab-cat-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-vocab') === cat);
    });

    this.renderVocabList();
    this.initVocabFlashcards();
    this.resetVocabMatchingGame();
  },

  currentVocabItems() {
    const bank = BANKS.vocab[this.state.vocabModule];
    if (!bank) return [];
    return bank.data[this.state.selectedVocabCat] || [];
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
    const items = this.currentVocabItems();
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
    const items = this.currentVocabItems();
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
    const items = this.currentVocabItems();
    const card = items[this.state.vocabCardIndex];
    if (card) this.speakText(card.english);
  },

  prevVocabCard() {
    const items = this.currentVocabItems();
    if (this.state.vocabCardIndex > 0) {
      this.state.vocabCardIndex--;
      this.renderCurrentFlashcard();
    }
  },

  nextVocabCard() {
    const items = this.currentVocabItems();
    if (this.state.vocabCardIndex < items.length - 1) {
      this.state.vocabCardIndex++;
      this.renderCurrentFlashcard();
    }
  },

  resetVocabMatchingGame() {
    this.state.matchingSelection = null;
    this.state.matchingAttempts = 0;
    this.state.matchingErrors = 0;

    const items = this.currentVocabItems().slice(0, 6);
    const tiles = [];

    items.forEach((item, idx) => {
      tiles.push({ id: idx, text: item.english, type: 'en' });
      tiles.push({ id: idx, text: item.translation, type: 'es' });
    });

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
        AudioSynth.playCorrect();
        first.classList.remove('selected');
        first.classList.add('matched');
        second.classList.add('matched');
        this.state.matchingSelection = null;
        this.state.userScore += 5;
        this.updateStatsUI();

        const remaining = document.querySelectorAll('#vocab-matching-grid-container .match-tile:not(.matched)');
        if (remaining.length === 0) {
          AudioSynth.playSuccess();
        }
      } else {
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

  // -------------------------------------------------------------------------
  // PHONETICS
  // -------------------------------------------------------------------------
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

  // -------------------------------------------------------------------------
  // EXERCISES BANK (modular 4 / 5)
  // -------------------------------------------------------------------------
  selectExerciseCategory(cat, moduleNum) {
    const mod = moduleNum || this.state.exerciseModule;
    this.state.exerciseModule = mod;
    const bank = BANKS.exercises[mod];
    if (!bank) return;

    document.querySelectorAll('.ex-mod-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.getAttribute('data-exmod'), 10) === mod);
    });

    const titleEl = document.getElementById('exercises-bank-title');
    if (titleEl) titleEl.innerText = bank.label;

    // Rebuild category tabs
    const tabsHost = document.getElementById('exercise-category-tabs');
    if (tabsHost) {
      tabsHost.innerHTML = bank.categories.map((c, i) => `
        <button class="tab-btn ex-mod-cat-btn ${i === 0 ? 'active' : ''}" data-excat="${c.key}"
          onclick="app.selectExerciseCategory('${c.key}', ${mod})">${c.label}</button>
      `).join('');
    }

    const catKeys = bank.categories.map(c => c.key);
    const category = (cat && catKeys.includes(cat)) ? cat : catKeys[0];
    this.state.exerciseCategory = category;

    document.querySelectorAll('#exercise-category-tabs .ex-mod-cat-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-excat') === category);
    });

    const exList = document.getElementById('exercises-dynamic-list');
    const title = document.getElementById('ex-category-title');
    const scoreSpan = document.getElementById('exercises-score');

    const exercises = bank.data[category] || [];
    const catLabel = (bank.categories.find(c => c.key === category) || {}).label || category;
    if (title) title.innerText = `Ejercicios: ${catLabel}`;
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

  // -------------------------------------------------------------------------
  // CERTIFICATE
  // -------------------------------------------------------------------------
  renderCertificateStatus() {
    const totalPct = this.pctForKeys(Object.keys(this.state.progress));

    const lockedPanel = document.getElementById('cert-locked-panel');
    const unlockedPanel = document.getElementById('cert-unlocked-panel');
    const fillBar = document.getElementById('cert-progress-fill-bar');
    const statusVal = document.getElementById('cert-progress-status-val');

    if (totalPct >= 80) {
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
      if (fillBar) fillBar.style.width = totalPct + '%';
      if (statusVal) statusVal.innerText = `Progreso actual: ${totalPct}% / 80% requerido`;
    }
  },

  printCertificate() {
    const nameInput = document.getElementById('cert-name-input');
    const displayName = document.getElementById('cert-display-name');
    if (nameInput && displayName) {
      displayName.innerText = nameInput.value.trim() || "Estudiante de Inglés";
    }
    window.print();
  },

  // -------------------------------------------------------------------------
  // STRUCTURAL SELF-CHECK (runtime, console-only)
  // -------------------------------------------------------------------------
  runStructuralSelfCheck() {
    if (typeof LESSONS === 'undefined') {
      console.error('LESSONS is missing — data.js not loaded before app.js.');
      return;
    }
    const missing = [];
    document.querySelectorAll('[data-lesson]').forEach(el => {
      const k = el.getAttribute('data-lesson');
      if (k && !LESSONS[k]) missing.push(k);
    });
    if (missing.length) {
      console.error('Structural check FAILED — data-lesson without LESSONS entry:', missing);
    } else {
      console.log('Structural check OK — all data-lesson keys exist in LESSONS.');
    }
  }
};

// Auto initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
