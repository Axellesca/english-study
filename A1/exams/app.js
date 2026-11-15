/**
 * English File Elementary - Examen A1 (Módulos 1 y 2)
 * Motor del examen: generación dinámica de ejercicios, corrección por sección
 * y seguimiento de resultados.
 * Contenido en data.js (EXAM_CONTENT) — cargar ANTES de este archivo.
 */

/* ==========================================================================
   Utilidades
   ========================================================================== */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample(arr, n) {
  return shuffle(arr).slice(0, n);
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function normalizeText(str) {
  return String(str || '')
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()[\]"'?¿¡]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ==========================================================================
   Constantes del examen
   ========================================================================== */
const SECTION_META = {
  grammar: { title: 'Grammar', icon: '📐', desc: 'Elegí la forma correcta. Cada pregunta viene de una unidad distinta del curso.' },
  listening: { title: 'Listening', icon: '🎧', desc: 'Escuchá la frase y escribí lo que oíste. Revisá con el botón de audio.' },
  writing: { title: 'Writing', icon: '✍️', desc: 'Escribí tu respuesta. El corrector te dice qué elementos te faltan y te muestra un modelo.' },
  speaking: { title: 'Speaking', icon: '🎤', desc: 'Prepará y practicá tu respuesta en voz alta. Se autoevalúa con una lista de criterios.' }
};

const SECTION_ORDER = ['grammar', 'listening', 'writing', 'speaking'];

const COUNTS = {
  grammar: 10,
  listening: 5,
  writing: 3,
  speaking: 3
};

const STORAGE_KEY = 'ef_exams_history';

/* ==========================================================================
   Estado
   ========================================================================== */
const exam = {
  state: {
    sections: {},
    submitted: {},
    scores: {},
    accent: 'en-GB',
    speed: 0.9,
    attempt: 0
  },

  init() {
    this.setupControls();
    this.generateExam();
    this.renderHistory();
  },

  setupControls() {
    const accentSel = document.getElementById('voice-accent-selector');
    if (accentSel) {
      accentSel.addEventListener('change', (e) => {
        this.state.accent = e.target.value;
      });
    }
    const speedSlider = document.getElementById('voice-speed-slider');
    if (speedSlider) {
      speedSlider.addEventListener('input', (e) => {
        this.state.speed = parseFloat(e.target.value);
      });
    }
    const newBtn = document.getElementById('btn-new-exam');
    if (newBtn) newBtn.addEventListener('click', () => this.generateExam());
  },

  /* ------------------------------------------------------------------------
     GENERACIÓN DINÁMICA
     ------------------------------------------------------------------------ */
  generateExam() {
    this.state.attempt += 1;
    this.state.submitted = {};
    this.state.scores = {};

    // Grammar: 10 generadores distintos (sin repetir)
    const gens = shuffle(EXAM_CONTENT.grammar.generators).slice(0, COUNTS.grammar);
    this.state.sections.grammar = gens.map((g, idx) => {
      const q = g.build();
      return {
        id: g.id + '-' + idx,
        unit: g.unit,
        question: q.question,
        options: q.options,
        correct: q.correct,
        explanation: q.explanation,
        answer: null
      };
    });

    // Listening: 5 frases al azar
    this.state.sections.listening = sample(EXAM_CONTENT.listening.items, COUNTS.listening).map((it, idx) => ({
      id: 'ls-' + idx,
      unit: it.unit,
      text: it.text,
      translation: it.translation || '',
      answer: null
    }));

    // Writing: 3 consignas al azar
    this.state.sections.writing = sample(EXAM_CONTENT.writing.tasks, COUNTS.writing).map((t, idx) => ({
      id: 'wr-' + idx,
      unit: t.unit,
      prompt: t.prompt,
      hint: t.hint || '',
      model: t.model,
      keyPoints: t.keyPoints,
      answer: null,
      results: null
    }));

    // Speaking: 3 prompts al azar
    this.state.sections.speaking = sample(EXAM_CONTENT.speaking.prompts, COUNTS.speaking).map((p, idx) => ({
      id: 'sp-' + idx,
      unit: p.unit,
      question: p.question,
      keyPhrases: p.keyPhrases || [],
      model: p.model,
      criteria: p.criteria || [],
      answer: null,
      checks: {},
      revealed: false
    }));

    this.renderAll();
  },

  regenerateSection(section) {
    const n = SECTION_ORDER.indexOf(section);
    // Se regenera la sección y se corren hacia atrás las ya enviadas (el puntaje global cambia)
    for (let i = n; i < SECTION_ORDER.length; i++) {
      const s = SECTION_ORDER[i];
      this.state.submitted[s] = false;
      delete this.state.scores[s];
    }
    const backup = {
      grammar: EXAM_CONTENT.grammar.generators,
      listening: { items: EXAM_CONTENT.listening.items },
      writing: { tasks: EXAM_CONTENT.writing.tasks },
      speaking: { prompts: EXAM_CONTENT.speaking.prompts }
    };
    if (section === 'grammar') {
      const gens = shuffle(backup.grammar).slice(0, COUNTS.grammar);
      this.state.sections.grammar = gens.map((g, idx) => {
        const q = g.build();
        return { id: g.id + '-' + idx, unit: g.unit, question: q.question, options: q.options, correct: q.correct, explanation: q.explanation, answer: null };
      });
    } else if (section === 'listening') {
      this.state.sections.listening = sample(backup.listening.items, COUNTS.listening).map((it, idx) => ({
        id: 'ls-' + idx, unit: it.unit, text: it.text, translation: it.translation || '', answer: null
      }));
    } else if (section === 'writing') {
      this.state.sections.writing = sample(backup.writing.tasks, COUNTS.writing).map((t, idx) => ({
        id: 'wr-' + idx, unit: t.unit, prompt: t.prompt, hint: t.hint || '', model: t.model, keyPoints: t.keyPoints, answer: null, results: null
      }));
    } else if (section === 'speaking') {
      this.state.sections.speaking = sample(backup.speaking.prompts, COUNTS.speaking).map((p, idx) => ({
        id: 'sp-' + idx, unit: p.unit, question: p.question, keyPhrases: p.keyPhrases || [], model: p.model, criteria: p.criteria || [], answer: null, checks: {}, revealed: false
      }));
    }
    this.renderAll();
  },

  /* ------------------------------------------------------------------------
     RENDER
     ------------------------------------------------------------------------ */
  renderAll() {
    SECTION_ORDER.forEach((s) => this.renderSection(s));
    this.renderSummary();
  },

  renderSection(section) {
    const host = document.getElementById('section-' + section);
    if (!host) return;
    const items = this.state.sections[section] || [];
    const submitted = !!this.state.submitted[section];

    let html = `
      <div class="exam-section-header">
        <div class="exam-section-title">
          <span class="exam-section-icon">${SECTION_META[section].icon}</span>
          <div>
            <h2>${SECTION_META[section].title}</h2>
            <p>${SECTION_META[section].desc}</p>
          </div>
        </div>
        <div class="exam-section-actions">
          <button type="button" class="btn btn-outline btn-sm" onclick="exam.regenerateSection('${section}')" title="Generar otra versión de esta sección">🔄 Otra versión</button>
          <span class="exam-section-score" id="score-${section}">${submitted ? this.state.scores[section].label : 'Sin enviar'}</span>
        </div>
      </div>
      <div class="exam-items">`;

    if (section === 'grammar') {
      items.forEach((q, i) => {
        html += `
        <div class="exam-item" data-item="${q.id}">
          <div class="exam-item-head">
            <span class="exam-num">${i + 1}</span>
            <span class="exam-unit-tag">${q.unit}</span>
          </div>
          <p class="exam-question">${escapeHtml(q.question)}</p>
          <div class="exam-options">
            ${q.options.map((o, oi) => `
              <button type="button" class="exam-option" data-qidx="${i}" data-oidx="${oi}" onclick="exam.selectOption(this)">${escapeHtml(o)}</button>
            `).join('')}
          </div>
          <div class="exam-feedback" id="fb-${q.id}" style="display:none;"></div>
        </div>`;
      });
    } else if (section === 'listening') {
      items.forEach((q, i) => {
        html += `
        <div class="exam-item" data-item="${q.id}">
          <div class="exam-item-head">
            <span class="exam-num">${i + 1}</span>
            <span class="exam-unit-tag">${q.unit}</span>
          </div>
          <div class="exam-audio-row">
            <button type="button" class="btn btn-primary btn-sm" onclick="exam.speak('${escapeHtml(q.text.replace(/'/g, "\\'"))}')">🔊 Escuchar</button>
            <span class="exam-audio-hint">Escuchá y escribí lo que oíste (sin necesidad de mayúsculas ni signos).</span>
          </div>
          <input type="text" class="quiz-input-field" id="in-${q.id}" placeholder="Escribí la frase que escuchaste..." autocomplete="off">
          <div class="exam-feedback" id="fb-${q.id}" style="display:none;"></div>
        </div>`;
      });
    } else if (section === 'writing') {
      items.forEach((q, i) => {
        html += `
        <div class="exam-item" data-item="${q.id}">
          <div class="exam-item-head">
            <span class="exam-num">${i + 1}</span>
            <span class="exam-unit-tag">${q.unit}</span>
          </div>
          <p class="exam-question">${escapeHtml(q.prompt)}</p>
          ${q.hint ? `<p class="exam-hint">💡 ${escapeHtml(q.hint)}</p>` : ''}
          <textarea class="quiz-input-field exam-textarea" id="in-${q.id}" rows="3" placeholder="Escribí tu respuesta..."></textarea>
          <div class="exam-feedback" id="fb-${q.id}" style="display:none;"></div>
        </div>`;
      });
    } else if (section === 'speaking') {
      items.forEach((q, i) => {
        html += `
        <div class="exam-item" data-item="${q.id}">
          <div class="exam-item-head">
            <span class="exam-num">${i + 1}</span>
            <span class="exam-unit-tag">${q.unit}</span>
          </div>
          <p class="exam-question">${escapeHtml(q.question)}</p>
          <div class="exam-audio-row">
            <button type="button" class="btn btn-primary btn-sm" onclick="exam.speak('${escapeHtml(q.question.replace(/'/g, "\\'"))}')">🔊 Escuchar la consigna</button>
          </div>
          <div class="exam-keyphrases">
            ${q.keyPhrases.map(k => `<span class="exam-chip">${escapeHtml(k)}</span>`).join('')}
          </div>
          <div class="exam-criteria">
            ${q.criteria.map((c, ci) => `
              <label class="exam-criterion">
                <input type="checkbox" id="chk-${q.id}-${ci}" onclick="exam.toggleCriterion('${q.id}', ${ci}, this)">
                <span>${escapeHtml(c)}</span>
              </label>
            `).join('')}
          </div>
          <button type="button" class="btn btn-outline btn-sm" onclick="exam.revealModel('${q.id}')">👁 Ver respuesta modelo</button>
          <div class="exam-feedback" id="fb-${q.id}" style="display:none;"></div>
        </div>`;
      });
    }

    html += `</div>
      <div class="exam-submit-row">
        <button type="button" class="btn btn-primary" id="submit-${section}" onclick="exam.submitSection('${section}')">Comprobar ${SECTION_META[section].title}</button>
        <button type="button" class="btn btn-outline btn-sm" id="reopen-${section}" onclick="exam.reopenSection('${section}')">↩ Corregir respuestas</button>
        <span class="exam-submit-note" id="note-${section}">${submitted ? 'Sección corregida. Podés reabrirla, cambiar tus respuestas y volver a enviarla.' : 'Cuando termines, enviá la sección para ver las correcciones.'}</span>
      </div>`;

    host.innerHTML = html;
  },

  renderSummary() {
    const host = document.getElementById('exam-summary');
    if (!host) return;
    let done = 0;
    let html = '';
    SECTION_ORDER.forEach((s) => {
      const submitted = !!this.state.submitted[s];
      if (submitted) done++;
      const score = submitted ? this.state.scores[s] : null;
      html += `
        <div class="summary-pill ${submitted ? 'done' : ''}">
          <span class="summary-pill-icon">${SECTION_META[s].icon}</span>
          <span class="summary-pill-name">${SECTION_META[s].title}</span>
          <span class="summary-pill-score">${submitted ? score.label : '—'}</span>
        </div>`;
    });
    const total = this.state.scores.__total;
    host.innerHTML = html + `
      <div class="summary-pill summary-total ${total ? 'done' : ''}">
        <span class="summary-pill-icon">🏁</span>
        <span class="summary-pill-name">Total</span>
        <span class="summary-pill-score">${total ? total.label : '—'}</span>
      </div>`;

    this.renderSidebar(done);
  },

  renderSidebar(doneCount) {
    const attemptEl = document.getElementById('exam-attempt');
    if (attemptEl) attemptEl.textContent = String(this.state.attempt);

    const doneEl = document.getElementById('sections-done');
    if (doneEl) doneEl.textContent = doneCount + '/4';

    const subs = SECTION_ORDER.filter(s => this.state.submitted[s]);
    const avg = subs.length ? Math.round(subs.reduce((a, s) => a + this.state.scores[s].pct, 0) / subs.length) : 0;
    const fill = document.getElementById('overall-progress-fill');
    if (fill) fill.style.width = avg + '%';

    const bestEl = document.getElementById('best-score');
    if (bestEl) {
      let history = [];
      try { history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch (e) { history = []; }
      const best = history.reduce((max, h) => Math.max(max, h.total || 0), 0);
      bestEl.textContent = best ? best + '%' : '—';
    }
  },

  /* ------------------------------------------------------------------------
     INTERACCIÓN
     ------------------------------------------------------------------------ */
  selectOption(btn) {
    const wrap = btn.closest('.exam-item');
    wrap.querySelectorAll('.exam-option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    btn.dataset.selected = 'true';
  },

  toggleCriterion(itemId, idx, box) {
    const item = this.state.sections.speaking.find(x => x.id === itemId);
    if (!item) return;
    item.checks[idx] = box.checked;
  },

  revealModel(itemId) {
    const item = this.state.sections.speaking.find(x => x.id === itemId);
    if (!item) return;
    item.revealed = true;
    const fb = document.getElementById('fb-' + itemId);
    if (fb) {
      fb.style.display = 'block';
      fb.className = 'exam-feedback info';
      fb.innerHTML = `
        <p class="fb-title">Respuesta modelo</p>
        <p class="fb-text">${escapeHtml(item.model)}</p>`;
    }
  },

  speak(text) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = this.state.accent === 'en-US' ? 'en-US' : 'en-GB';
      u.rate = this.state.speed;
      const voices = window.speechSynthesis.getVoices() || [];
      const v = voices.find(x => x.lang && x.lang.replace('_', '-').startsWith(this.state.accent));
      if (v) u.voice = v;
      window.speechSynthesis.speak(u);
    } catch (e) {
      console.log('TTS error:', e);
    }
  },

  reopenSection(section) {
    // Reabre la sección corregida para poder cambiar las respuestas y reenviarlas
    this.resetSectionUI(section);
    this.state.submitted[section] = false;
    delete this.state.scores[section];
    delete this.state.scores.__total;
    const scoreEl = document.getElementById('score-' + section);
    if (scoreEl) scoreEl.textContent = 'Sin enviar';
    const note = document.getElementById('note-' + section);
    if (note) note.textContent = 'Sección reabierta: corregí tus respuestas y volvé a enviar.';
    this.renderSummary();
  },

  /* ------------------------------------------------------------------------
     CORRECCIÓN POR SECCIÓN
     ------------------------------------------------------------------------ */
  resetSectionUI(section) {
    // Al reenviar, se reabre la sección para poder corregir las respuestas
    document.querySelectorAll(`#section-${section} .exam-option`).forEach(b => {
      b.disabled = false;
      b.classList.remove('correct', 'incorrect');
    });
    document.querySelectorAll(`#section-${section} .exam-feedback`).forEach(fb => {
      fb.style.display = 'none';
    });
    const inputs = document.querySelectorAll(`#section-${section} .quiz-input-field`);
    inputs.forEach(inp => { inp.disabled = false; });
  },

  submitSection(section) {
    const items = this.state.sections[section] || [];
    this.resetSectionUI(section);

    if (section === 'grammar') {
      let correct = 0;
      items.forEach((q) => {
        const fb = document.getElementById('fb-' + q.id);
        const chosen = document.querySelector(`[data-item="${q.id}"] .exam-option.selected`);
        const picked = chosen ? parseInt(chosen.dataset.oidx, 10) : -1;
        q.answer = picked;
        const ok = picked === q.correct;
        if (ok) correct++;
        const box = document.querySelector(`[data-item="${q.id}"]`);
        box.querySelectorAll('.exam-option').forEach((b, bi) => {
          b.disabled = true;
          if (bi === q.correct) b.classList.add('correct');
          else if (bi === picked) b.classList.add('incorrect');
        });
        if (fb) {
          fb.style.display = 'block';
          fb.className = 'exam-feedback ' + (ok ? 'ok' : 'error');
          fb.innerHTML = `
            <p class="fb-title">${ok ? '✔ ¡Correcto!' : '✘ Incorrecto'}</p>
            <p class="fb-text"><strong>Respuesta correcta:</strong> ${escapeHtml(q.options[q.correct])}</p>
            <p class="fb-text">${escapeHtml(q.explanation)}</p>`;
        }
      });
      this.finishSection(section, correct, items.length);
      return;
    }

    if (section === 'listening') {
      let correct = 0;
      items.forEach((q) => {
        const input = document.getElementById('in-' + q.id);
        const val = input ? input.value : '';
        q.answer = val;
        const ok = normalizeText(val) === normalizeText(q.text);
        if (ok) correct++;
        if (input) input.disabled = true;
        const fb = document.getElementById('fb-' + q.id);
        if (fb) {
          fb.style.display = 'block';
          fb.className = 'exam-feedback ' + (ok ? 'ok' : 'error');
          fb.innerHTML = `
            <p class="fb-title">${ok ? '✔ ¡Correcto!' : '✘ No coincide'}</p>
            <p class="fb-text"><strong>La frase era:</strong> ${escapeHtml(q.text)}</p>
            ${q.translation ? `<p class="fb-text">${escapeHtml(q.translation)}</p>` : ''}
            <button type="button" class="btn btn-outline btn-sm" onclick="exam.speak('${escapeHtml(q.text.replace(/'/g, "\\'"))}')">🔊 Escuchar de nuevo</button>`;
        }
      });
      this.finishSection(section, correct, items.length);
      return;
    }

    if (section === 'writing') {
      let totalPoints = 0;
      let gotPoints = 0;
      items.forEach((q) => {
        const input = document.getElementById('in-' + q.id);
        const val = input ? input.value : '';
        q.answer = val;
        const checks = q.keyPoints.map(kp => {
          const ok = kp.patterns.some(p => new RegExp(p, 'i').test(val));
          totalPoints++;
          if (ok) gotPoints++;
          return { label: kp.label, ok, hint: kp.hint || '' };
        });
        q.results = checks;
        const fb = document.getElementById('fb-' + q.id);
        if (fb) {
          fb.style.display = 'block';
          fb.className = 'exam-feedback ' + (checks.every(c => c.ok) ? 'ok' : 'warn');
          fb.innerHTML = `
            <p class="fb-title">${checks.every(c => c.ok) ? '✔ ¡Todo correcto!' : '⚠ Revisá tu respuesta'}</p>
            <ul class="fb-list">
              ${checks.map(c => `<li class="${c.ok ? 'ok' : 'miss'}">${c.ok ? '✔' : '✘'} ${escapeHtml(c.label)}${c.ok ? '' : (c.hint ? ' — ' + escapeHtml(c.hint) : '')}</li>`).join('')}
            </ul>
            <p class="fb-text"><strong>Respuesta modelo:</strong> ${escapeHtml(q.model)}</p>`;
        }
      });
      this.finishSection(section, gotPoints, totalPoints);
      return;
    }

    if (section === 'speaking') {
      let got = 0;
      let total = 0;
      items.forEach((q) => {
        total += q.criteria.length;
        const achieved = q.criteria.filter((c, ci) => q.checks[ci]).length;
        got += achieved;
        const fb = document.getElementById('fb-' + q.id);
        if (fb && !q.revealed) {
          fb.style.display = 'block';
          fb.className = 'exam-feedback info';
          fb.innerHTML = `
            <p class="fb-title">Autoevaluación: ${achieved} de ${q.criteria.length} criterios logrados</p>
            <p class="fb-text">Usá el botón "Ver respuesta modelo" para comparar tu respuesta con una posible.</p>`;
        }
      });
      this.finishSection(section, got, total);
    }
  },

  finishSection(section, correct, total) {
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    this.state.submitted[section] = true;
    this.state.scores[section] = {
      correct,
      total,
      pct,
      label: `${correct}/${total}`
    };

    // Total general (media ponderada de las secciones enviadas)
    const subs = SECTION_ORDER.filter(s => this.state.submitted[s]);
    if (subs.length === SECTION_ORDER.length) {
      const sum = subs.reduce((acc, s) => acc + this.state.scores[s].pct, 0);
      const avg = Math.round(sum / subs.length);
      this.state.scores.__total = { correct: avg, total: 100, pct: avg, label: avg + '%' };
      this.saveAttempt();
    } else {
      delete this.state.scores.__total;
    }

    const scoreEl = document.getElementById('score-' + section);
    if (scoreEl) scoreEl.textContent = this.state.scores[section].label;
    const note = document.getElementById('note-' + section);
    if (note) note.textContent = 'Corregido. Podés volver a enviar la sección para rehacerla.';
    this.renderSummary();
  },

  /* ------------------------------------------------------------------------
     HISTORIAL
     ------------------------------------------------------------------------ */
  saveAttempt() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY) || '[]';
      const history = JSON.parse(raw);
      history.unshift({
        date: new Date().toISOString(),
        attempt: this.state.attempt,
        scores: SECTION_ORDER.map(s => ({
          section: s,
          label: this.state.scores[s].label,
          pct: this.state.scores[s].pct
        })),
        total: this.state.scores.__total ? this.state.scores.__total.pct : 0
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 10)));
      this.renderHistory();
    } catch (e) {
      console.log('History error:', e);
    }
  },

  renderHistory() {
    const host = document.getElementById('exam-history');
    if (!host) return;
    let history = [];
    try {
      history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) { history = []; }
    if (!history.length) {
      host.innerHTML = '<p class="history-empty">Todavía no hay intentos guardados. Enviá las cuatro secciones para registrar tu primer resultado.</p>';
      return;
    }
    host.innerHTML = history.map(h => {
      const d = new Date(h.date);
      const date = d.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' }) + ' ' +
                   d.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
      return `
        <div class="history-row">
          <span class="history-date">${date}</span>
          <span class="history-scores">${h.scores.map(s => `<span class="history-chip">${SECTION_META[s.section].icon} ${s.label}</span>`).join('')}</span>
          <span class="history-total">${h.total}%</span>
        </div>`;
    }).join('');
  }
};

document.addEventListener('DOMContentLoaded', () => exam.init());
