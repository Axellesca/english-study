/**
 * Cambridge Grammar module — UI logic
 * Content lives in data.js (BOOK_META + UNITS). Load data.js BEFORE this file.
 */

const AudioSynth = {
  ctx: null,
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  },
  playCorrect() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.08);
      osc.frequency.setValueAtTime(783.99, now + 0.16);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) { /* silent */ }
  },
  playError() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.setValueAtTime(120, now + 0.1);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) { /* silent */ }
  }
};

const STORAGE_KEY = 'cambridge-grammar-progress-v1';

function defaultProgress() {
  const p = {};
  (typeof UNITS !== 'undefined' ? UNITS : []).forEach((u) => {
    p[u.unit] = { viewed: false, exercisesDone: 0, exercisesCorrect: 0 };
  });
  return p;
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const saved = JSON.parse(raw);
    const base = defaultProgress();
    Object.keys(base).forEach((k) => {
      if (saved[k]) base[k] = Object.assign(base[k], saved[k]);
    });
    return base;
  } catch (e) {
    return defaultProgress();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) { /* ignore */ }
}

let progress = defaultProgress();
let currentUnit = null;
let currentTab = 'theory';

function $(sel) {
  return document.querySelector(sel);
}

function $all(sel) {
  return Array.from(document.querySelectorAll(sel));
}

/* ---------- Navigation ---------- */

function navigateTo(targetId) {
  $all('.page-section').forEach((s) => s.classList.remove('active'));
  $all('.nav-item').forEach((n) => n.classList.remove('active'));
  const section = document.getElementById(targetId);
  if (section) section.classList.add('active');
  const nav = $all('.nav-item').find((n) => n.getAttribute('data-target') === targetId);
  if (nav) nav.classList.add('active');
  window.scrollTo(0, 0);
}

function partOf(unit) {
  // BOOK_META.parts like "Part I: Kinds of words"
  const map = {
    1: 'I', 2: 'I', 3: 'I', 4: 'I', 5: 'I', 6: 'I', 7: 'I', 8: 'I',
    9: 'II', 10: 'II', 11: 'II', 12: 'II', 13: 'II', 14: 'II',
    15: 'III', 16: 'III', 17: 'III',
  };
  return map[unit] || '';
}

/* ---------- Dashboard ---------- */

function renderDashboard() {
  const grid = $('#units-grid');
  if (!grid || typeof UNITS === 'undefined') return;
  const totalEx = UNITS.reduce((s, u) => s + u.exercises.length, 0);
  const doneEx = Object.values(progress).reduce((s, u) => s + (u.exercisesDone || 0), 0);
  const viewed = Object.values(progress).filter((u) => u.viewed).length;
  const pct = UNITS.length ? Math.round((viewed / UNITS.length) * 100) : 0;

  const pctEl = $('#dashboard-percentage');
  if (pctEl) pctEl.textContent = pct + '%';
  const circle = document.getElementById('circle-progress');
  if (circle) circle.setAttribute('stroke-dasharray', pct + ', 100');
  const sidePct = $('#overall-progress-text');
  if (sidePct) sidePct.textContent = pct + '%';
  const sideFill = document.getElementById('overall-progress-fill');
  if (sideFill) sideFill.style.width = pct + '%';
  const statsEl = $('#dashboard-stats');
  if (statsEl) {
    statsEl.innerHTML =
      `<span class="meta-item"><span class="meta-dot"></span> ${viewed}/${UNITS.length} unidades vistas</span>` +
      `<span class="meta-item">${doneEx}/${totalEx} ejercicios</span>` +
      `<span class="meta-item">17 unidades · 3 partes</span>`;
  }

  grid.innerHTML = UNITS.map((u) => {
    const st = progress[u.unit] || { viewed: false, exercisesDone: 0 };
    const done = st.viewed ? ' viewed' : '';
    return `
      <button type="button" class="unit-card${done}" data-unit="${u.unit}" onclick="openUnit(${u.unit})">
        <div class="unit-card-top">
          <span class="unit-num">U${u.unit}</span>
          <span class="unit-part">Part ${partOf(u.unit)}</span>
        </div>
        <div class="unit-title">${escapeHtml(u.title)}</div>
        <div class="unit-meta">
          <span>${u.lessons.length} lecciones</span>
          <span>${u.exercises.length} ejercicios</span>
          <span>${u.tips.length} tips</span>
        </div>
        ${st.viewed ? '<span class="unit-badge">Vista</span>' : ''}
      </button>`;
  }).join('');
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ---------- Unit view ---------- */

function openUnit(unitNum) {
  const u = (typeof UNITS !== 'undefined' ? UNITS : []).find((x) => x.unit === unitNum);
  if (!u) return;
  currentUnit = u;
  if (!progress[u.unit]) progress[u.unit] = { viewed: false, exercisesDone: 0, exercisesCorrect: 0 };
  progress[u.unit].viewed = true;
  saveProgress();

  $('#unit-heading').textContent = `U${u.unit}: ${u.title}`;
  $('#unit-subtitle').textContent = `${u.part || ''} · PDF pp. ${u.startPage}${u.pdfPages && u.pdfPages.answers ? ' (respuestas p. ' + u.pdfPages.answers + ')' : ''}`;
  const pdfLink = $('#unit-pdf-link');
  if (pdfLink && typeof BOOK_META !== 'undefined') {
    pdfLink.href = BOOK_META.pdf;
    pdfLink.onclick = null;
  }

  setUnitTab('theory');
  navigateTo('unit-page');
  renderDashboard();
}

function setUnitTab(tab) {
  currentTab = tab;
  $all('.tab-btn').forEach((b) => {
    b.classList.toggle('active', b.getAttribute('data-tab') === tab);
  });
  $all('#unit-page .tab-panel').forEach((p) => p.classList.remove('active'));
  const panel = document.getElementById('tab-' + tab);
  if (panel) panel.classList.add('active');
  if (currentUnit) {
    if (tab === 'theory') renderTheory();
    else if (tab === 'practice') renderPractice();
    else if (tab === 'exercises') renderExercises();
    else if (tab === 'tips') renderTips();
  }
}

function renderTheory() {
  const root = $('#tab-theory');
  if (!currentUnit) { root.innerHTML = ''; return; }
  const lessons = currentUnit.lessons || [];
  root.innerHTML = `
    <div class="theory-intro card">
      <h3>${escapeHtml(currentUnit.title)}</h3>
      <p>Teoría extraída de las lecciones de la Unidad ${currentUnit.unit} del libro Cambridge.</p>
    </div>
    ${lessons.map((l, i) => `
      <article class="card theory-block" id="lesson-${l.n}-${i}">
        <h3>${l.n ? 'Lesson ' + l.n + ': ' : ''}${escapeHtml(l.title)}</h3>
        <div class="theory-body">${l.html}</div>
      </article>
    `).join('')}
  `;
}

function renderPractice() {
  const root = $('#tab-practice');
  if (!currentUnit) { root.innerHTML = ''; return; }
  const practice = currentUnit.practice || [];
  if (!practice.length) {
    root.innerHTML = '<div class="card"><p>No hay bloques de práctica extraídos para esta unidad. Consultá el PDF.</p></div>';
    return;
  }
  root.innerHTML = practice.map((p, idx) => `
    <section class="card practice-block" data-code="${escapeHtml(p.code)}">
      <header class="practice-header">
        <span class="card-tag">Test yourself ${escapeHtml(p.code)}</span>
        ${p.sample ? `<p class="practice-sample"><em>Sample: ${escapeHtml(p.sample)}</em></p>` : ''}
      </header>
      ${p.instruction ? `<p class="practice-instruction">${escapeHtml(p.instruction)}</p>` : ''}
      <p class="practice-label">Getting started — respondé y compará con las respuestas:</p>
      <ol class="practice-items">
        ${p.items.map((it) => `
          <li>
            <span class="practice-prompt">${escapeHtml(it.text)}</span>
            <button type="button" class="btn btn-outline btn-sm reveal-ans" data-ans="${escapeHtml(p.answers[it.n] || '')}" ${p.answers[it.n] ? '' : 'disabled'}>
              Ver respuesta
            </button>
            <span class="ans-slot" hidden></span>
          </li>
        `).join('')}
      </ol>
    </section>
  `).join('');

  root.querySelectorAll('.reveal-ans').forEach((btn) => {
    btn.addEventListener('click', () => {
      const slot = btn.parentElement.querySelector('.ans-slot');
      const ans = btn.getAttribute('data-ans');
      if (!slot || !ans) return;
      slot.hidden = false;
      slot.textContent = 'Respuesta: ' + ans;
      btn.disabled = true;
      btn.classList.add('revealed');
    });
  });
}

function renderExercises() {
  const root = $('#tab-exercises');
  if (!currentUnit) { root.innerHTML = ''; return; }
  const exs = currentUnit.exercises || [];
  if (!exs.length) {
    root.innerHTML = '<div class="card"><p>Sin ejercicios extraídos. Probá la pestaña Práctica o el PDF.</p></div>';
    return;
  }
  const st = progress[currentUnit.unit] || { exercisesDone: 0, exercisesCorrect: 0 };
  root.innerHTML = `
    <div class="card ex-summary">
      <strong>Progreso:</strong>
      <span id="ex-progress">${st.exercisesDone}/${exs.length}</span>
      acertados: <span id="ex-correct">${st.exercisesCorrect}</span>
      <p class="ex-hint">Ejercicios convertidos de Test yourself / Getting started del libro.</p>
    </div>
    ${exs.map((ex, i) => {
      const id = `ex-${currentUnit.unit}-${i}`;
      if (ex.type === 'choice') {
        return `
          <div class="card exercise-card" data-index="${i}" data-type="choice" data-correct="${ex.correct}">
            ${ex.instruction ? `<p class="ex-instruction">${escapeHtml(ex.instruction)}</p>` : ''}
            <p class="ex-q"><span class="ex-num">${i + 1}.</span> ${escapeHtml(ex.q)}</p>
            <div class="ex-options" role="group">
              ${ex.options.map((o, oi) => `
                <button type="button" class="ex-option" data-oi="${oi}">${escapeHtml(o)}</button>
              `).join('')}
            </div>
            <div class="ex-feedback" hidden></div>
          </div>`;
      }
      const disabled = ex.answer ? '' : 'disabled';
      return `
        <div class="card exercise-card" data-index="${i}" data-type="input" data-answer="${escapeHtml(ex.answer || '')}">
          ${ex.instruction ? `<p class="ex-instruction">${escapeHtml(ex.instruction)}</p>` : ''}
          <p class="ex-q"><span class="ex-num">${i + 1}.</span> ${escapeHtml(ex.q)}</p>
          <div class="ex-input-row">
            <input type="text" class="ex-input" placeholder="Tu respuesta" aria-label="Respuesta ejercicio ${i + 1}" ${disabled}>
            <button type="button" class="btn btn-primary btn-sm check-input" ${disabled}>Comprobar</button>
          </div>
          ${ex.answer ? '' : '<p class="ex-note">Sin clave automática — verificá en el PDF o Práctica.</p>'}
          <div class="ex-feedback" hidden></div>
        </div>`;
    }).join('')}
  `;

  root.querySelectorAll('.exercise-card').forEach((card) => {
    if (card.dataset.type === 'choice') {
      card.querySelectorAll('.ex-option').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (card.dataset.done === '1') return;
          const oi = Number(btn.dataset.oi);
          const correct = Number(card.dataset.correct);
          const fb = card.querySelector('.ex-feedback');
          const ok = oi === correct;
          card.dataset.done = '1';
          card.querySelectorAll('.ex-option').forEach((b) => {
            b.disabled = true;
            if (Number(b.dataset.oi) === correct) b.classList.add('correct');
          });
          if (!ok) btn.classList.add('wrong');
          fb.hidden = false;
          fb.className = 'ex-feedback ' + (ok ? 'ok' : 'bad');
          fb.textContent = ok ? '¡Correcto!' : 'Incorrecto — la respuesta marcada en verde es la del libro.';
          recordExercise(ok);
        });
      });
    } else {
      const checkBtn = card.querySelector('.check-input');
      const input = card.querySelector('.ex-input');
      if (!checkBtn || !input) return;
      const run = () => {
        if (card.dataset.done === '1') return;
        const ans = (card.dataset.answer || '').trim().toLowerCase();
        const val = input.value.trim().toLowerCase();
        const fb = card.querySelector('.ex-feedback');
        if (!val) return;
        const ok = ans && (val === ans || ans.includes(val) || val.includes(ans));
        card.dataset.done = '1';
        input.disabled = true;
        checkBtn.disabled = true;
        fb.hidden = false;
        fb.className = 'ex-feedback ' + (ok ? 'ok' : 'bad');
        fb.textContent = ok
          ? '¡Correcto!'
          : (ans ? 'Respuesta del libro: ' + card.dataset.answer : 'Sin clave — compará con el PDF.');
        recordExercise(ok);
      };
      checkBtn.addEventListener('click', run);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') run();
      });
    }
  });
}

function recordExercise(ok) {
  if (!currentUnit) return;
  const st = progress[currentUnit.unit];
  st.exercisesDone = (st.exercisesDone || 0) + 1;
  if (ok) st.exercisesCorrect = (st.exercisesCorrect || 0) + 1;
  saveProgress();
  const p = $('#ex-progress');
  const c = $('#ex-correct');
  if (p) p.textContent = `${st.exercisesDone}/${currentUnit.exercises.length}`;
  if (c) c.textContent = String(st.exercisesCorrect || 0);
  if (ok) AudioSynth.playCorrect();
  else AudioSynth.playError();
}

function renderTips() {
  const root = $('#tab-tips');
  if (!currentUnit) { root.innerHTML = ''; return; }
  const tips = currentUnit.tips || [];
  if (!tips.length) {
    root.innerHTML = '<div class="card"><p>Sin Quick tips extraídos para esta unidad.</p></div>';
    return;
  }
  root.innerHTML = `
    <div class="tips-header card">
      <h3>Quick tips — U${currentUnit.unit}: ${escapeHtml(currentUnit.title)}</h3>
      <p>Sugerencias del libro para identificar y aplicar la regla.</p>
    </div>
    ${tips.map((t, i) => `
      <article class="card tip-card">
        <span class="tip-code">${escapeHtml(t.code || 'Tip ' + (i + 1))}</span>
        <p>${escapeHtml(t.text)}</p>
      </article>
    `).join('')}
  `;
}

/* ---------- Wire up ---------- */

document.addEventListener('DOMContentLoaded', () => {
  progress = loadProgress();

  $all('.nav-item[data-target]').forEach((item) => {
    item.addEventListener('click', () => navigateTo(item.getAttribute('data-target')));
  });

  $all('.tab-btn[data-tab]').forEach((btn) => {
    btn.addEventListener('click', () => setUnitTab(btn.getAttribute('data-tab')));
  });

  const back = $('#btn-back-dashboard');
  if (back) back.addEventListener('click', () => { renderDashboard(); navigateTo('dashboard-page'); });

  const startBtn = $('#btn-start-first');
  if (startBtn) startBtn.addEventListener('click', () => openUnit(1));

  const resetBtn = $('#btn-reset-progress');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      progress = defaultProgress();
      saveProgress();
      renderDashboard();
    });
  }

  renderDashboard();
  navigateTo('dashboard-page');
});
