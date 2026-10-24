/**
 * WH Questions Mastery Module — Application Logic
 * Navigation, Renderers, Interactive Sentence Builder, TTS Audio & Quiz.
 */

(function () {
  'use strict';

  // --- STATE ---
  const state = {
    currentTab: 'view-brujula',
    currentFilter: 'all',
    currentChallengeIndex: 0,
    builderSlots: { wh: '', aux: '', subj: '', verb: '', comp: '' },
    quizAnswers: {}, // { [exId]: { selected: string, isCorrect: boolean } }
    dialogueAnswers: {}, // { [dialogueId-stepIndex]: isCorrect }
    completedChallenges: new Set()
  };

  // --- LOCAL STORAGE KEY ---
  const STORAGE_KEY = 'wh_questions_mastery_state';

  // Load state from localStorage
  function loadPersistedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.quizAnswers) state.quizAnswers = parsed.quizAnswers;
        if (parsed.completedChallenges) {
          state.completedChallenges = new Set(parsed.completedChallenges);
        }
      }
    } catch (e) {
      console.warn('Could not load localStorage progress:', e);
    }
  }

  function savePersistedState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        quizAnswers: state.quizAnswers,
        completedChallenges: Array.from(state.completedChallenges)
      }));
    } catch (e) {
      console.warn('Could not save localStorage progress:', e);
    }
  }

  // --- TEXT-TO-SPEECH (TTS) ---
  function playAudio(text) {
    if (!('speechSynthesis' in window)) {
      alert('Tu navegador no soporta síntesis de voz.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.88; // Natural, clear educational pace
    utterance.pitch = 1.0;
    
    // Attempt to pick a natural English voice if available
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
    if (enVoice) utterance.voice = enVoice;

    window.speechSynthesis.speak(utterance);
  }

  // Make playAudio globally available for inline onclicks if needed
  window.playWhAudio = playAudio;

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    loadPersistedState();
    setupNavigation();
    setupMobileSidebar();
    
    renderBrujulaCards('all');
    renderFormulas();
    renderAdvancedPatterns();
    renderQAPatterns();
    renderBuilderChallenge(state.currentChallengeIndex);
    renderDialogues();
    renderQuiz();
    renderCheatSheet();
    
    updateOverallProgress();
  });

  // --- NAVIGATION ---
  function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-target]');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        switchView(targetId);
        
        // Auto-close mobile sidebar if open
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('open')) {
          sidebar.classList.remove('open');
        }
      });
    });

    // Chip filters in Brújula view
    const filterChips = document.querySelectorAll('.chip-filter[data-filter]');
    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const filterVal = chip.getAttribute('data-filter');
        state.currentFilter = filterVal;
        renderBrujulaCards(filterVal);
      });
    });
  }

  function switchView(targetViewId) {
    state.currentTab = targetViewId;
    
    // Update nav active classes
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.getAttribute('data-target') === targetViewId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Show active section
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active');
    });
    const activeSection = document.getElementById(targetViewId);
    if (activeSection) {
      activeSection.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function setupMobileSidebar() {
    const menuBtn = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('sidebar');
    if (menuBtn && sidebar) {
      menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }
  }

  // --- 1. RENDER BRÚJULA WH CARDS ---
  function renderBrujulaCards(filter) {
    const grid = document.getElementById('wh-cards-container');
    if (!grid) return;

    let list = WH_DATA.words;
    if (filter === 'core') {
      list = list.filter(w => w.category === 'core');
    } else if (filter === 'how_family') {
      list = list.filter(w => w.category === 'how_family');
    } else if (filter === 'what_family') {
      list = list.filter(w => w.category === 'what_family');
    }

    grid.innerHTML = list.map(item => `
      <div class="wh-card" id="card-${item.id}">
        <div class="wh-card-top">
          <div class="wh-word-badge">
            <span class="wh-title">${escapeHtml(item.word)}</span>
            <span class="wh-translation">${escapeHtml(item.translation)}</span>
          </div>
          <span class="wh-target-pill">${escapeHtml(item.target)}</span>
        </div>

        <div class="wh-concept-box">
          ${escapeHtml(item.concept)}
        </div>

        <div class="wh-formula-box">
          📐 ${escapeHtml(item.formula)}
        </div>

        <div class="wh-examples-list">
          ${item.examples.map(ex => `
            <div class="example-item">
              <div class="example-text">
                <span class="example-en">${escapeHtml(ex.en)}</span>
                <span class="example-es">${escapeHtml(ex.es)}</span>
              </div>
              <button class="btn-tts" title="Escuchar pronunciación nativa" onclick="playWhAudio('${escapeAttr(ex.audio)}')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
              </button>
            </div>
          `).join('')}
        </div>

        <div class="wh-card-drawer">
          <div class="wh-drawer-section">
            <span class="wh-drawer-label">💡 Cómo responder:</span>
            <span>${escapeHtml(item.howToAnswer.short)} — <em>${escapeHtml(item.howToAnswer.tip)}</em></span>
          </div>

          <div class="wh-trap-box">
            <strong>⚠️ Trampa clásica:</strong><br>
            ❌ <span style="text-decoration:line-through;">${escapeHtml(item.commonMistake.wrong)}</span><br>
            ✅ <strong>${escapeHtml(item.commonMistake.right)}</strong><br>
            <span style="font-size:0.75rem; opacity:0.9;">${escapeHtml(item.commonMistake.why)}</span>
          </div>

          <div class="wh-tip-box">
            <strong>🧠 Tip Senior:</strong> ${escapeHtml(item.architectTip)}
          </div>
        </div>
      </div>
    `).join('');
  }

  // --- 2. RENDER ANATOMÍA & FORMULAS ---
  function renderFormulas() {
    const container = document.getElementById('formulas-container');
    if (!container) return;

    container.innerHTML = WH_DATA.qasm.formulas.map(f => `
      <div class="formula-card">
        <div class="formula-card-top">
          <h3 class="formula-title">${escapeHtml(f.title)}</h3>
          <span class="formula-tense-badge">${escapeHtml(f.tense)}</span>
        </div>

        <p class="formula-rule-text">${escapeHtml(f.rule)}</p>

        <div class="formula-visual-banner">
          ${escapeHtml(f.pattern)}
        </div>

        <table class="formula-breakdown-table">
          <thead>
            <tr>
              ${f.slots.map(s => `<th>${escapeHtml(s)}</th>`).join('')}
              <th>Audio</th>
            </tr>
          </thead>
          <tbody>
            ${f.examples.map(ex => `
              <tr>
                ${ex.parts.map(p => `<td>${escapeHtml(p)}</td>`).join('')}
                <td>
                  <button class="btn-tts" onclick="playWhAudio('${escapeAttr(ex.q)}')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="formula-trap-alert">
          <strong>🚨 Cuidado con el error típico:</strong> ${escapeHtml(f.trap)}
        </div>
      </div>
    `).join('');
  }

  // --- 3. RENDER ADVANCED PATTERNS (Subject vs Object & Preposition Stranding) ---
  function renderAdvancedPatterns() {
    const deepDiveContainer = document.getElementById('subject-deepdive-container');
    if (deepDiveContainer) {
      deepDiveContainer.innerHTML = WH_DATA.advancedPatterns.subjectVsObject.deepDive.map(item => `
        <div style="background:var(--bg-canvas); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.25rem;">
          <h4 style="margin:0 0 0.5rem; font-size:1.05rem; color:var(--text-main);">${escapeHtml(item.scenario)}</h4>
          <p style="font-size:0.9rem; margin-bottom:1rem; color:var(--text-secondary);"><strong>Hecho original:</strong> <em>"${escapeHtml(item.statement)}"</em></p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
            <div style="background:#ffffff; border:1px solid var(--accent-primary-border); border-radius:var(--radius-sm); padding:0.85rem;">
              <span style="font-size:0.7rem; font-weight:700; color:var(--accent-primary); text-transform:uppercase;">Pregunta de OBJETO (usa auxiliar)</span>
              <p style="font-size:1rem; font-weight:700; margin:0.35rem 0;">${escapeHtml(item.qObject.q)}</p>
              <p style="font-size:0.8rem; color:var(--text-muted); margin:0 0 0.5rem;">${escapeHtml(item.qObject.translation)}</p>
              <p style="font-size:0.8rem; color:var(--text-secondary); margin:0;"><strong>Explicación:</strong> ${escapeHtml(item.qObject.explanation)}</p>
            </div>

            <div style="background:#ffffff; border:1px solid rgba(15, 118, 110, 0.35); border-radius:var(--radius-sm); padding:0.85rem;">
              <span style="font-size:0.7rem; font-weight:700; color:var(--accent-teal); text-transform:uppercase;">Pregunta de SUJETO (¡SIN auxiliar!)</span>
              <p style="font-size:1rem; font-weight:700; margin:0.35rem 0;">${escapeHtml(item.qSubject.q)}</p>
              <p style="font-size:0.8rem; color:var(--text-muted); margin:0 0 0.5rem;">${escapeHtml(item.qSubject.translation)}</p>
              <p style="font-size:0.8rem; color:var(--text-secondary); margin:0;"><strong>Explicación:</strong> ${escapeHtml(item.qSubject.explanation)}</p>
            </div>
          </div>
        </div>
      `).join('');
    }

    const prepContainer = document.getElementById('prep-grid-container');
    if (prepContainer) {
      prepContainer.innerHTML = WH_DATA.advancedPatterns.prepositionStranding.examples.map(ex => `
        <div class="prep-card">
          <div>
            <div class="prep-q">${formatPrepHiglight(ex.question, ex.prep)}</div>
            <div class="prep-es">${escapeHtml(ex.naturalEs)}</div>
          </div>
          <button class="btn-tts" onclick="playWhAudio('${escapeAttr(ex.question)}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:15px;height:15px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          </button>
        </div>
      `).join('');
    }
  }

  function formatPrepHiglight(sentence, prep) {
    const parts = sentence.split(new RegExp(`(\\b${prep}\\?|\\b${prep}\\b)`, 'i'));
    return parts.map(p => {
      if (p.toLowerCase().includes(prep.toLowerCase())) {
        return `<span class="prep-highlight">${escapeHtml(p)}</span>`;
      }
      return escapeHtml(p);
    }).join('');
  }

  // --- 4. RENDER QA PATTERNS ---
  function renderQAPatterns() {
    const container = document.getElementById('qa-grid-container');
    if (!container) return;

    container.innerHTML = WH_DATA.qaPatterns.matrix.map(item => `
      <div class="qa-card">
        <div class="qa-header">
          <span class="qa-wh-pill">${escapeHtml(item.wh)}</span>
          <span class="qa-question-sample">"${escapeHtml(item.asked)}"</span>
          <button class="btn-tts" style="margin-left:auto;" onclick="playWhAudio('${escapeAttr(item.asked)}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:15px;height:15px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          </button>
        </div>

        <div class="qa-body">
          <div class="qa-responses-box">
            <div class="qa-box-title">Respuestas cortas y naturales recomendadas</div>
            <div class="qa-answers-pills">
              ${item.naturalAnswers.map(ans => `
                <div class="ans-pill">
                  <span>✔</span>
                  <span>"${escapeHtml(ans)}"</span>
                  <button class="btn-tts" style="margin-left:auto; width:26px; height:26px;" onclick="playWhAudio('${escapeAttr(ans)}')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  </button>
                </div>
              `).join('')}
            </div>
            <p style="font-size:0.8rem; color:var(--text-muted); margin:0.6rem 0 0;"><strong>Fórmula de respuesta:</strong> ${escapeHtml(item.howToAnswer)}</p>
          </div>

          <div style="background:#fffbeb; border:1px solid #fef3c7; border-radius:var(--radius-sm); padding:1rem; font-size:0.82rem; color:#92400e; display:flex; flex-direction:column; justify-content:center;">
            <strong>⚠️ Evitá sonar poco natural:</strong>
            <p style="margin:0.4rem 0 0; line-height:1.45;">${escapeHtml(item.avoid)}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  // --- 5. INTERACTIVE SENTENCE BUILDER ---
  function renderBuilderChallenge(index) {
    const total = WH_DATA.builderChallenges.length;
    if (index < 0) index = 0;
    if (index >= total) index = total - 1;
    state.currentChallengeIndex = index;

    // Reset current slot assembly
    state.builderSlots = { wh: '', aux: '', subj: '', verb: '', comp: '' };

    const challenge = WH_DATA.builderChallenges[index];
    
    // Header info
    document.getElementById('challenge-counter').textContent = `Reto ${index + 1} de ${total}`;
    document.getElementById('challenge-cat-badge').textContent = challenge.category;
    document.getElementById('challenge-prompt').textContent = challenge.promptEs;

    // Prev / Next button state
    document.getElementById('btn-prev-challenge').disabled = (index === 0);
    document.getElementById('btn-next-challenge').disabled = (index === total - 1);

    // Hide any previous feedback
    const fb = document.getElementById('builder-feedback');
    fb.className = 'builder-feedback-alert';
    fb.innerHTML = '';
    fb.style.display = 'none';

    // Update slots in DOM
    renderBuilderDropZones();

    // Render word chips bank
    renderBuilderChips(challenge);
  }

  function renderBuilderDropZones() {
    const track = document.getElementById('builder-slots-track');
    if (!track) return;

    const slotsMeta = [
      { key: 'wh', label: '1. Palabras WH (Q)', type: 'wh' },
      { key: 'aux', label: '2. Auxiliar / Be (A)', type: 'aux' },
      { key: 'subj', label: '3. Sujeto (S)', type: 'subj' },
      { key: 'verb', label: '4. Verbo Principal (M)', type: 'verb' },
      { key: 'comp', label: '5. Complemento (C)', type: 'comp' }
    ];

    track.innerHTML = slotsMeta.map(s => {
      const val = state.builderSlots[s.key];
      const isFilled = (val !== '');
      return `
        <div class="slot-drop-zone ${isFilled ? 'filled' : ''}" data-slot-type="${s.type}" data-slot-key="${s.key}" onclick="handleSlotZoneClick('${s.key}')">
          <span class="slot-label-small">${s.label}</span>
          <span class="slot-content-text">${isFilled ? escapeHtml(val) : '<span style="opacity:0.35;">[ vacío ]</span>'}</span>
        </div>
      `;
    }).join('');
  }

  function renderBuilderChips(challenge) {
    const bank = document.getElementById('builder-chips-bank');
    if (!bank) return;

    bank.innerHTML = challenge.slots.map(s => {
      const slotLabelMap = {
        wh: 'Opciones WH',
        aux: 'Auxiliares / Be',
        subj: 'Sujetos',
        verb: 'Verbos',
        comp: 'Complementos'
      };

      const options = s.options.filter(opt => opt !== ""); // filter empty optional slots
      if (options.length === 0) return '';

      return `
        <div class="bank-group">
          <span class="bank-group-label">${slotLabelMap[s.slot] || s.slot}</span>
          <div class="chips-row">
            ${options.map(opt => {
              const isSelected = (state.builderSlots[s.slot] === opt);
              return `
                <button type="button" class="word-chip ${isSelected ? 'selected' : ''}" onclick="selectWordChip('${s.slot}', '${escapeAttr(opt)}')">
                  ${escapeHtml(opt)}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  // Chip selection handler
  window.selectWordChip = function(slotKey, value) {
    if (state.builderSlots[slotKey] === value) {
      // Unselect if clicked again
      state.builderSlots[slotKey] = '';
    } else {
      state.builderSlots[slotKey] = value;
    }
    renderBuilderDropZones();
    renderBuilderChips(WH_DATA.builderChallenges[state.currentChallengeIndex]);
  };

  // Click on drop zone to clear that slot
  window.handleSlotZoneClick = function(slotKey) {
    if (state.builderSlots[slotKey]) {
      state.builderSlots[slotKey] = '';
      renderBuilderDropZones();
      renderBuilderChips(WH_DATA.builderChallenges[state.currentChallengeIndex]);
    }
  };

  // Reset challenge builder
  window.resetCurrentChallenge = function() {
    state.builderSlots = { wh: '', aux: '', subj: '', verb: '', comp: '' };
    renderBuilderDropZones();
    renderBuilderChips(WH_DATA.builderChallenges[state.currentChallengeIndex]);
    const fb = document.getElementById('builder-feedback');
    fb.style.display = 'none';
  };

  // Check Challenge Answer
  window.checkBuilderAnswer = function() {
    const challenge = WH_DATA.builderChallenges[state.currentChallengeIndex];
    const fb = document.getElementById('builder-feedback');
    
    // Assemble the assembled string
    const assembledParts = [
      state.builderSlots.wh,
      state.builderSlots.aux,
      state.builderSlots.subj,
      state.builderSlots.verb,
      state.builderSlots.comp
    ].filter(Boolean);

    const assembledSentence = assembledParts.join(' ').trim().toLowerCase().replace(/\s+/g, ' ');
    const targetClean = challenge.targetSentence.toLowerCase().trim().replace(/\s+/g, ' ');

    // Also check slot by slot for precise diagnostics
    let isMatch = true;
    let diagnosticIssue = '';

    for (const s of challenge.slots) {
      const userVal = state.builderSlots[s.slot] || '';
      if (userVal.toLowerCase() !== s.correct.toLowerCase()) {
        isMatch = false;
        if (!diagnosticIssue) {
          if (s.slot === 'aux' && userVal === '') {
            diagnosticIssue = 'Falta el auxiliar necesario para conjugar esta pregunta.';
          } else if (s.slot === 'verb' && userVal.endsWith('s')) {
            diagnosticIssue = '¡Ojo con la "s"! El auxiliar ya absorbió la tercera persona; el verbo debe ir en forma base limpia.';
          } else if (s.slot === 'verb' && userVal.endsWith('ed')) {
            diagnosticIssue = '¡Cuidado! El auxiliar DID ya absorbió el tiempo pasado; el verbo principal va en presente base.';
          }
        }
      }
    }

    if (isMatch || assembledSentence === targetClean) {
      fb.className = 'builder-feedback-alert success';
      fb.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.5rem; font-weight:700; margin-bottom:0.4rem;">
          <span style="font-size:1.3rem;">🎉</span> ¡Excelente! Oración perfectamente construida:
        </div>
        <p style="font-size:1.1rem; font-weight:700; margin:0.25rem 0 0.5rem; color:#14532d;">
          "${escapeHtml(challenge.targetSentence)}"
          <button class="btn-tts" style="display:inline-flex; vertical-align:middle; width:28px; height:28px; margin-left:0.5rem;" onclick="playWhAudio('${escapeAttr(challenge.targetSentence)}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          </button>
        </p>
        <p style="margin:0; font-size:0.86rem; color:#166534;"><strong>Explicación pedagógica:</strong> ${escapeHtml(challenge.explanation)}</p>
      `;
      fb.style.display = 'block';

      // Mark challenge completed
      state.completedChallenges.add(challenge.id);
      savePersistedState();
      updateOverallProgress();
    } else {
      fb.className = 'builder-feedback-alert error';
      fb.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.5rem; font-weight:700; margin-bottom:0.4rem;">
          <span style="font-size:1.3rem;">🤔</span> Aún no está del todo bien:
        </div>
        <p style="margin:0 0 0.4rem; font-size:0.9rem;">${diagnosticIssue ? escapeHtml(diagnosticIssue) : 'Revisa las ranuras. Recuerda la regla madre Q-A-S-M (Question word + Auxiliary + Subject + Main Verb).'}</p>
        <p style="margin:0; font-size:0.82rem; opacity:0.9;">Presiona cualquier palabra seleccionada en el banco para cambiarla o ajustarla.</p>
      `;
      fb.style.display = 'block';
    }
  };

  // Nav buttons for builder
  window.prevChallenge = function() {
    if (state.currentChallengeIndex > 0) {
      renderBuilderChallenge(state.currentChallengeIndex - 1);
    }
  };

  window.nextChallenge = function() {
    if (state.currentChallengeIndex < WH_DATA.builderChallenges.length - 1) {
      renderBuilderChallenge(state.currentChallengeIndex + 1);
    }
  };

  // --- 6. RENDER DIALOGUES ---
  function renderDialogues() {
    const container = document.getElementById('dialogues-list-container');
    if (!container) return;

    container.innerHTML = WH_DATA.dialogues.map(d => `
      <div class="dialogue-card" id="dialogue-${d.id}">
        <div class="dialogue-header">
          <span class="dialogue-avatar">${d.avatar}</span>
          <div class="dialogue-title-box">
            <h3>${escapeHtml(d.situation)}</h3>
            <span class="dialogue-partner-label">Interlocutor: ${escapeHtml(d.partner)}</span>
          </div>
        </div>

        <div class="dialogue-exchanges">
          ${d.exchange.map((ex, stepIdx) => {
            if (ex.speaker !== 'You') {
              return `
                <div class="dialogue-bubble-row">
                  <div class="bubble partner">
                    <strong>${escapeHtml(ex.speaker)}:</strong> "${escapeHtml(ex.text)}"
                    <button class="btn-tts" style="width:24px; height:24px; margin-left:0.4rem; display:inline-flex; vertical-align:middle;" onclick="playWhAudio('${escapeAttr(ex.text)}')">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                    </button>
                  </div>
                </div>
              `;
            } else {
              const answered = state.dialogueAnswers[`${d.id}-${stepIdx}`];
              return `
                <div class="dialogue-bubble-row" style="margin-left:1.5rem;">
                  <span style="font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:0.25rem; display:block;">Tu turno de responder:</span>
                  <div class="dialogue-options-list" id="opts-${d.id}-${stepIdx}">
                    ${ex.options.map((opt, optIdx) => `
                      <button type="button" class="dialogue-opt-btn" onclick="handleDialogueChoice('${d.id}', ${stepIdx}, ${optIdx}, ${opt.correct}, '${escapeAttr(opt.feedback)}')">
                        ${escapeHtml(opt.text)}
                      </button>
                    `).join('')}
                  </div>
                  <div class="dialogue-feedback-box" id="fb-${d.id}-${stepIdx}"></div>
                </div>
              `;
            }
          }).join('')}
        </div>
      </div>
    `).join('');
  }

  window.handleDialogueChoice = function(dialogueId, stepIdx, optIdx, isCorrect, feedbackText) {
    const parent = document.getElementById(`opts-${dialogueId}-${stepIdx}`);
    const fbBox = document.getElementById(`fb-${dialogueId}-${stepIdx}`);
    if (!parent || !fbBox) return;

    const btns = parent.querySelectorAll('.dialogue-opt-btn');
    btns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === optIdx) {
        btn.classList.add(isCorrect ? 'correct' : 'wrong');
      }
    });

    fbBox.style.display = 'block';
    if (isCorrect) {
      fbBox.style.background = 'var(--color-success-subtle)';
      fbBox.style.color = '#14532d';
      fbBox.innerHTML = `<strong>✔ ¡Muy bien!</strong> ${escapeHtml(feedbackText)}`;
      state.dialogueAnswers[`${dialogueId}-${stepIdx}`] = true;
    } else {
      fbBox.style.background = 'var(--color-error-subtle)';
      fbBox.style.color = '#7f1d1d';
      fbBox.innerHTML = `<strong>✖ Cuidado:</strong> ${escapeHtml(feedbackText)}`;
    }

    updateOverallProgress();
  };

  // --- 7. RENDER QUIZ (25 EXERCISES) ---
  function renderQuiz() {
    const container = document.getElementById('quiz-cards-container');
    if (!container) return;

    container.innerHTML = WH_DATA.exercises.map((ex, idx) => {
      const stored = state.quizAnswers[ex.id];
      const isAnswered = Boolean(stored);

      return `
        <div class="quiz-card" id="quiz-card-${ex.id}">
          <div class="quiz-card-top">
            <span class="quiz-card-number">Pregunta ${idx + 1} de 25</span>
            <span class="quiz-level-pill">Nivel ${ex.level} · ${escapeHtml(ex.category)}</span>
          </div>

          <div class="quiz-question-text">${escapeHtml(ex.question)}</div>

          <div class="quiz-options-group" id="quiz-options-${ex.id}">
            ${ex.options.map(opt => {
              let optClass = '';
              if (isAnswered) {
                if (opt === ex.answer) optClass = 'correct';
                else if (stored.selected === opt && !stored.isCorrect) optClass = 'wrong';
              }
              return `
                <div class="quiz-option-label ${optClass}" onclick="handleQuizAnswer('${ex.id}', '${escapeAttr(opt)}')">
                  <input type="radio" name="quiz-${ex.id}" ${stored && stored.selected === opt ? 'checked' : ''} ${isAnswered ? 'disabled' : ''}>
                  <span>${escapeHtml(opt)}</span>
                </div>
              `;
            }).join('')}
          </div>

          <div class="quiz-explanation-box" id="quiz-exp-${ex.id}" style="${isAnswered ? 'display:block;' : 'display:none;'}">
            <strong>Explicación:</strong> ${escapeHtml(ex.explanation)}
          </div>
        </div>
      `;
    }).join('');

    updateQuizScoreHeader();
  }

  window.handleQuizAnswer = function(exId, selectedOption) {
    if (state.quizAnswers[exId]) return; // Already answered

    const ex = WH_DATA.exercises.find(e => e.id === exId);
    if (!ex) return;

    const isCorrect = (selectedOption === ex.answer);
    state.quizAnswers[exId] = { selected: selectedOption, isCorrect };

    // Save and re-render this card
    savePersistedState();
    
    const cardOptions = document.getElementById(`quiz-options-${exId}`);
    const expBox = document.getElementById(`quiz-exp-${exId}`);

    if (cardOptions) {
      const labels = cardOptions.querySelectorAll('.quiz-option-label');
      labels.forEach(lbl => {
        const text = lbl.querySelector('span').textContent.trim();
        const input = lbl.querySelector('input');
        input.disabled = true;
        if (text === ex.answer) {
          lbl.classList.add('correct');
        } else if (text === selectedOption && !isCorrect) {
          lbl.classList.add('wrong');
        }
      });
    }

    if (expBox) {
      expBox.style.display = 'block';
    }

    updateQuizScoreHeader();
    updateOverallProgress();
  };

  function updateQuizScoreHeader() {
    const total = WH_DATA.exercises.length;
    const answered = Object.keys(state.quizAnswers).length;
    const correctCount = Object.values(state.quizAnswers).filter(a => a.isCorrect).length;
    
    const indicator = document.getElementById('quiz-score-header');
    if (indicator) {
      indicator.innerHTML = `Respondidas: <strong>${answered}/${total}</strong> | Aciertos: <strong>${correctCount}</strong> (${answered ? Math.round((correctCount / answered) * 100) : 0}%)`;
    }
  }

  // --- 8. RENDER CHEAT SHEET ---
  function renderCheatSheet() {
    const tbody = document.getElementById('cheat-sheet-tbody');
    if (!tbody) return;

    tbody.innerHTML = WH_DATA.cheatSheet.map(item => `
      <tr>
        <td><span class="cheat-wh-badge">${escapeHtml(item.wh)}</span></td>
        <td><strong>${escapeHtml(item.meaning)}</strong></td>
        <td>${escapeHtml(item.use)}</td>
        <td><span class="cheat-qasm-code">${escapeHtml(item.qasm)}</span></td>
        <td style="color:#b91c1c; font-size:0.82rem;">⚠️ ${escapeHtml(item.trap)}</td>
      </tr>
    `).join('');
  }

  // Print Cheat Sheet
  window.printCheatSheet = function() {
    window.print();
  };

  // --- OVERALL PROGRESS TRACKER ---
  function updateOverallProgress() {
    const totalItems = WH_DATA.exercises.length + WH_DATA.builderChallenges.length;
    const quizDone = Object.keys(state.quizAnswers).length;
    const builderDone = state.completedChallenges.size;
    const doneCount = quizDone + builderDone;

    const percentage = Math.min(100, Math.round((doneCount / totalItems) * 100));

    // Update in DOM
    const bar = document.getElementById('sidebar-progress-fill');
    const text = document.getElementById('sidebar-progress-percent');
    const pointsCounter = document.getElementById('sidebar-points');

    if (bar) bar.style.width = `${percentage}%`;
    if (text) text.textContent = `${percentage}%`;
    
    // Points calculation: 10 pts per quiz correct answer, 20 pts per challenge completed
    const quizPoints = Object.values(state.quizAnswers).filter(a => a.isCorrect).length * 10;
    const challengePoints = builderDone * 20;
    const totalScore = quizPoints + challengePoints;

    if (pointsCounter) pointsCounter.textContent = totalScore;
  }

  // Helper escape functions
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(str) {
    if (!str) return '';
    return String(str)
      .replace(/'/g, "\\'")
      .replace(/"/g, '&quot;');
  }

})();
