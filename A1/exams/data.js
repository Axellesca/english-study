/**
 * English File Elementary - Examen A1 (Módulos 1 y 2)
 * Contenido puro: generadores de gramática, frases para listening,
 * consignas de writing y prompts de speaking.
 * Cobertura: Módulo 1 (1A–3C) + Módulo 2 (4A–7A).
 * No contiene lógica de UI. Cargar ANTES de app.js.
 */

/* ==========================================================================
   Helpers de construcción (las opciones se barajan en cada generación,
   así el mismo tipo de pregunta nunca cae en la misma posición)
   ========================================================================== */
function shuffleOptions(options) {
  const a = options.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function choice(correctText, distractors, question, explanation) {
  // Siempre 4 opciones únicas: la correcta + 3 distractores sin repetir
  const seen = new Set([correctText]);
  const uniq = [];
  (distractors || []).forEach(d => {
    if (d !== correctText && !seen.has(d)) {
      seen.add(d);
      uniq.push(d);
    }
  });
  const options = shuffleOptions([correctText].concat(uniq.slice(0, 3)));
  // Red de seguridad: si faltaran distractores, se completa para mantener 4 opciones
  while (options.length < 4) options.push('—');
  return {
    question,
    options,
    correct: options.indexOf(correctText),
    explanation
  };
}

function rand(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const EXAM_CONTENT = {

  /* ========================================================================
     GRAMMAR — un generador por unidad (19 unidades)
     Cada build() sortea sus propios parámetros: variantes infinitas.
     ======================================================================== */
  grammar: {
    generators: [

      /* ---------- MÓDULO 1 ---------- */

      {
        id: 'be-affirmative', unit: '1A',
        build() {
          const subs = [
            { s: 'I', be: 'am', wrong: ['is', 'are', 'be', 'was'] },
            { s: 'He', be: 'is', wrong: ['am', 'are', 'be', 'was'] },
            { s: 'She', be: 'is', wrong: ['am', 'are', 'be', 'was'] },
            { s: 'We', be: 'are', wrong: ['am', 'is', 'be', 'was'] },
            { s: 'They', be: 'are', wrong: ['am', 'is', 'be', 'was'] }
          ];
          const comps = ['a teacher', 'in London', 'at home', 'from Rome', 'very happy', 'on holiday'];
          const sub = rand(subs);
          const comp = rand(comps);
          return choice(sub.be, sub.wrong,
            `Complete: ${sub.s} ___ ${comp}.`,
            `Con ${sub.s} usamos "${sub.be}": ${sub.s} ${sub.be} ${comp}. El verbo be en presente es am / is / are.`);
        }
      },

      {
        id: 'be-question', unit: '1B',
        build() {
          const items = [
            { q: 'Am I late?', be: 'am', wrong: ['is', 'are', 'be'] },
            { q: 'Is she Chinese?', be: 'is', wrong: ['am', 'are', 'be'] },
            { q: 'Are they in London?', be: 'are', wrong: ['am', 'is', 'be'] }
          ];
          const it = rand(items);
          return choice(it.be, it.wrong.filter(x => x !== it.be),
            `Complete the question: ${it.q} (___)`,
            `La pregunta con be invierte el orden: ${it.q} (is / am / are). La respuesta corta es "Yes, she is." / "No, she's not."`);
        }
      },

      {
        id: 'be-negative', unit: '1B',
        build() {
          const items = [
            { s: 'He', neg: "isn't", wrong: ["aren't", "don't", 'am not'] },
            { s: 'They', neg: "aren't", wrong: ["isn't", "don't", "amn't"] },
            { s: 'She', neg: "isn't", wrong: ["aren't", "don't", "amn't"] }
          ];
          const it = rand(items);
          return choice(it.neg, it.wrong.filter(x => x !== it.neg),
            `Complete the negative: ${it.s} ___ from Spain.`,
            `El negativo de be es "isn't / aren't": ${it.s} ${it.neg} from Spain. Nunca uses "don't" con el verbo be.`);
        }
      },

      {
        id: 'possessive-adjective', unit: '1C',
        build() {
          const items = [
            { owner: 'I', adj: 'my', wrong: ['your', 'his', 'her', 'our'] },
            { owner: 'You', adj: 'your', wrong: ['my', 'his', 'her', 'our'] },
            { owner: 'He', adj: 'his', wrong: ['my', 'your', 'her', 'our'] },
            { owner: 'She', adj: 'her', wrong: ['my', 'your', 'his', 'our'] }
          ];
          const it = rand(items);
          const thing = rand(['email', 'key', 'bag', 'name', 'phone']);
          return choice(it.adj, it.wrong,
            `Complete: This is ${it.owner.toLowerCase()} ___ ${thing}.`,
            `Los adjetivos posesivos acompañan al sustantivo: my / your / his / her. "This is ${it.owner.toLowerCase()} ${it.adj} ${thing}".`);
        }
      },

      {
        id: 'a-an', unit: '2A',
        build() {
          const vowels = ['expensive watch', 'umbrella', 'orange', 'apple', 'old key', 'English book', 'hour'];
          const cons = ['laptop', 'book', 'key', 'glasses', 'dictionary', 'car', 'watch'];
          const useVowel = Math.random() > 0.5;
          const noun = useVowel ? rand(vowels) : rand(cons);
          const art = useVowel ? 'an' : 'a';
          return choice(art, useVowel ? ['a', 'the', '—'] : ['an', 'the', '—'],
            `Complete: She has ___ ${noun}.`,
            `"${art} ${noun}": delante de sonido vocal (a, e, i, o, u) usamos "an"; en los demás casos "a".`);
        }
      },

      {
        id: 'plural', unit: '2A',
        build() {
          const items = [
            { sing: 'a watch', plur: 'watches', wrong: ['watch', 'watchies', 'watchs', 'watcheses'] },
            { sing: 'a dictionary', plur: 'dictionaries', wrong: ['dictionaryy', 'dictionarys', 'dictionary', 'dictionarie'] },
            { sing: 'a key', plur: 'keys', wrong: ['key', 'keyies', 'keys', 'keyes'] },
            { sing: 'a child', plur: 'children', wrong: ['child', 'childies', 'childs', 'childrens'] },
            { sing: 'a person', plur: 'people', wrong: ['person', 'personies', 'persons', 'peoples'] },
            { sing: 'a man', plur: 'men', wrong: ['man', 'manies', 'mans', 'mens'] }
          ];
          const it = rand(items);
          return choice(it.plur, it.wrong,
            `Complete: These are ___ (${it.sing}).`,
            `Plural de "${it.sing}": ${it.plur}. Ojo con las reglas: -s, -es (watch → watches), -ies (dictionary → dictionaries) e irregulares (child → children, person → people).`);
        }
      },

      {
        id: 'adjective', unit: '2B',
        build() {
          const adj = rand(['cheap', 'expensive', 'easy', 'difficult', 'dirty', 'clean', 'old', 'new']);
          const wrong = [adj + 's', 'old-' + adj, adj + "'"];
          return choice(adj, wrong,
            `Complete: These are ___ (${adj}) keys.`,
            `Los adjetivos no cambian de forma y van antes del sustantivo: "These are ${adj} keys" (nunca "olds keys" ni "old keys" con -s).`);
        }
      },

      {
        id: 'modifier', unit: '2B',
        build() {
          const adj = rand(['cold', 'rich', 'difficult', 'easy', 'tired']);
          const mod = rand(['very', 'quite']);
          const other = mod === 'very' ? 'quite' : 'very';
          return choice(mod, [other, 'too much', 'a lot of'],
            `Complete: It's ___ ${adj}.`,
            `"${mod} ${adj}" es correcto: "very" intensifica y "quite" matiza. Con adjectives siempre en este orden: It's ${mod} ${adj}.`);
        }
      },

      {
        id: 'imperative-negative', unit: '2C',
        build() {
          const items = [
            { v: 'eat that', corr: "Don't eat that!", wrong: ['Not eat that!', 'Do not eat that!', "Doesn't eat that!"] },
            { v: 'smoke here', corr: "Don't smoke here.", wrong: ['Not smoke here.', 'Do not smoke here.', "Doesn't smoke here."] },
            { v: 'touch that', corr: "Don't touch that!", wrong: ['Not touch that.', 'Do not touch that.', "Doesn't touch that!"] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong,
            `Complete the negative imperative: (${it.v})`,
            `El imperativo negativo usa "Don't" + verbo base: "${it.corr}"`);
        }
      },

      {
        id: 'lets', unit: '2C',
        build() {
          const items = [
            { v: 'go to the cinema', corr: "Let's go to the cinema.", wrong: ["Let's to the cinema.", 'Let us goes to the cinema.', "Let's going to the cinema."] },
            { v: 'not stop here', corr: "Let's not stop here.", wrong: ["Let's to not stop here.", "Let's don't stop here.", 'Let not stop here.'] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong,
            `Complete the suggestion: (${it.v})`,
            `Para sugerir: "Let's" + verbo base. Para sugerir NO: "Let's not" + verbo base.`);
        }
      },

      {
        id: 'present-simple-s', unit: '3A',
        build() {
          const items = [
            { s: 'She', v: 'watch', corr: 'watches', wrong: ['watch', 'watchies', 'watchs', 'watchses'] },
            { s: 'He', v: 'study', corr: 'studies', wrong: ['study', 'studys', 'studyes', 'studys'] },
            { s: 'They', v: 'live', corr: 'live', wrong: ['lives', 'livs', 'liveses', 'livess'] },
            { s: 'My brother', v: 'work', corr: 'works', wrong: ['work', 'works', 'workes', 'workss'] }
          ];
          const it = rand(items);
          const wrong = it.wrong.filter(x => x !== it.corr).slice(0, 3);
          return choice(it.corr, wrong,
            `Complete: ${it.s} ___ (${it.v}) in a small town.`,
            `En 3ª persona singular (he / she / it) el verbo lleva -s: "${it.s} ${it.corr}". Con consonante + y: study → studies.`);
        }
      },

      {
        id: 'present-simple-negative', unit: '3A',
        build() {
          const items = [
            { s: 'He', corr: "doesn't wear", wrong: ["don't wear", "doesn't wears", "not wear"] },
            { s: 'We', corr: "don't eat", wrong: ["doesn't eat", "don't eats", "not eat"] },
            { s: 'She', corr: "doesn't live", wrong: ["don't live", "doesn't lives", "not live"] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Complete the negative: ${it.s} ___ (${it.v || 'live'}) a uniform.`,
            `Negativo del presente simple: "don't" + verbo base; en 3ª singular "doesn't" + verbo base (sin -s).`);
        }
      },

      {
        id: 'do-does-question', unit: '3B',
        build() {
          const items = [
            { s: 'you', corr: 'Do', wrong: ['Does', 'Are', 'Is'] },
            { s: 'she', corr: 'Does', wrong: ['Do', 'Are', 'Is'] },
            { s: 'they', corr: 'Do', wrong: ['Does', 'Are', 'Is'] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Complete the question: ${it.s === 'you' ? '___ you start at nine?' : '___ ' + it.s + ' work on Fridays?'}`,
            `Para preguntar con el verbo principal usamos "Do" (I/you/we/they) y "Does" (he/she/it). Después del auxiliar va el verbo en forma base.`);
        }
      },

      {
        id: 'short-answer', unit: '3B',
        build() {
          const items = [
            { q: 'Do you start at nine?', corr: 'Yes, I do.', wrong: ['Yes, I does.', 'Yes, I am.', 'Yes, I is.'] },
            { q: 'Does she work on Fridays?', corr: 'No, she doesn’t.', wrong: ['No, she don’t.', 'No, she not.', 'No, she doesn’t work.'] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong,
            `Complete the short answer: "${it.q}"`,
            `La respuesta corta repite el auxiliar: "Yes, I do." / "No, she doesn’t." (con be sería "Yes, she is.").`);
        }
      },

      {
        id: 'quasi', unit: '3C',
        build() {
          const items = [
            { wh: 'Where', corr: 'do', wrong: ['does', 'are', 'is'] },
            { wh: 'What', corr: 'do', wrong: ['does', 'are', 'is'] },
            { wh: 'Who', corr: 'does', wrong: ['do', 'are', 'is'] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Complete the question (QuASI): ${it.wh} ___ you live?`,
            `QuASI = Question word + Auxiliary + Subject + Infinitive: "${it.wh} do you live?"`);
        }
      },

      {
        id: 'asi', unit: '3C',
        build() {
          const items = [
            { s: 'you', corr: 'do', wrong: ['does', 'are', 'is'] },
            { s: 'they', corr: 'do', wrong: ['does', 'are', 'is'] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Complete the question (ASI): ${it.s === 'you' ? '___ you speak Spanish?' : '___ they live in London?'}`,
            `ASI = Auxiliary + Subject + Infinitive: "${it.s === 'you' ? 'Do you speak Spanish?' : 'Do they live in London?'}"`);
        }
      },

      {
        id: 'question-words', unit: '3C',
        build() {
          const items = [
            { q: '___ do you go to work?', corr: 'How', wrong: ['What', 'Where', 'Who'] },
            { q: '___ is she from?', corr: 'Where', wrong: ['What', 'Who', 'When'] },
            { q: '___ does she work with?', corr: 'Who', wrong: ['What', 'Where', 'Why'] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Complete: ${it.q}`,
            `Cada pregunta WH pide una información distinta: How (cómo), Where (dónde), Who (quién), What (qué), When (cuándo), Why (por qué).`);
        }
      },

      /* ---------- MÓDULO 2 ---------- */

      {
        id: 'possessive-s', unit: '4A',
        build() {
          const names = ['Jack', 'Sarah', 'Mark', 'Ana', 'Pedro', 'Lucía'];
          const n = rand(names);
          return choice(n + "'s", ["'" + n, n + "'", n],
            `Complete with the possessive: This is Jack. That is ___ car. (${n})`,
            `Para indicar posesión con una persona usamos el nombre + 's: "${n}'s car" (el "'s" va pegado y con apóstrofo).`);
        }
      },

      {
        id: 'whose-whos', unit: '4A',
        build() {
          const items = [
            { q: '___ jacket is this on the chair?', corr: 'Whose', wrong: ["Who's", 'Which', 'What'] },
            { q: '___ that handsome boy over there?', corr: "Who's", wrong: ['Whose', 'Which', 'What'] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Choose the correct word: ${it.q}`,
            `"Whose" pregunta por posesión (¿de quién?); "Who's" = who is (¿quién es?). Se pronuncian igual: /huːz/.`);
        }
      },

      {
        id: 'preposition-time', unit: '4B',
        build() {
          const items = [
            { q: 'We have a meeting ___ Monday morning.', corr: 'on', wrong: ['in', 'at', 'for'] },
            { q: 'My birthday is ___ May.', corr: 'in', wrong: ['on', 'at', 'for'] },
            { q: 'The film starts ___ 8 o’clock.', corr: 'at', wrong: ['in', 'on', 'for'] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Complete with the right preposition: ${it.q}`,
            `Preposiciones de tiempo: "in" + meses/años (in May, in 2020), "on" + días (on Monday), "at" + hora (at 8 o'clock).`);
        }
      },

      {
        id: 'frequency-adverb', unit: '4C',
        build() {
          const adverbs = [
            { adv: 'always', corr: 'always goes' }, { adv: 'usually', corr: 'usually goes' },
            { adv: 'often', corr: 'often goes' }, { adv: 'sometimes', corr: 'sometimes goes' },
            { adv: 'never', corr: 'never goes' }
          ];
          const it = rand(adverbs);
          const verbs = ['goes to school by bus', 'has lunch at one o’clock', 'watches TV in the evening'];
          const v = rand(verbs);
          return choice(it.corr, ['go ' + v, 'goes ' + it.adv, it.adv + ' go'],
            `Complete: She ___ (${v}).`,
            `El adverbio de frecuencia va ANTES del verbo principal: "She ${it.corr}".`);
        }
      },

      {
        id: 'can-cant', unit: '5A',
        build() {
          const items = [
            { s: 'He', v: 'swim', corr: 'can', wrong: ['cans', "can't", 'is'] },
            { s: 'They', v: 'come', corr: "can't", wrong: ['can', 'cans', 'are'] },
            { s: 'I', v: 'help', corr: 'can', wrong: ["can't", 'cans', 'am'] }
          ];
          const it = rand(items);
          const context = it.s === 'He' ? 'He ___ swim very well.' : (it.s === 'They' ? 'They ___ come to the party tonight.' : 'I ___ help you with that.');
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Complete: ${context}`,
            `"Can" + verbo base para hablar de habilidad; "can't" = no puede. Con "can" el verbo nunca lleva -s.`);
        }
      },

      {
        id: 'present-continuous', unit: '5B',
        build() {
          const items = [
            { s: 'Look! It', corr: 'is raining', wrong: ['rains', 'rain', 'is rain'] },
            { s: 'She', corr: 'is watching TV', wrong: ['watches TV', 'watch TV', 'is watch TV'] },
            { s: 'They', corr: 'are waiting', wrong: ['wait', 'waits', 'is waiting'] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Complete: ${it.s} ___ now.`,
            `Presente continuo: am/is/are + verbo + -ing para lo que está pasando ahora.`);
        }
      },

      {
        id: 'simple-vs-continuous', unit: '5C',
        build() {
          const items = [
            { corr: 'usually goes', wrong: ['is usually going', 'usually go', 'usually going'] },
            { corr: 'is currently working', wrong: ['currently works', 'currently work', 'current works'] }
          ];
          const it = rand(items);
          const stem = it.corr.startsWith('usually')
            ? 'She ___ to work by bus. (every day)'
            : 'He ___ at the bank at the moment.';
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Complete: ${stem}`,
            `Para una rutina o un hecho permanente usamos el presente simple (she usually goes); para algo temporal en este momento, el continuo (he is currently working).`);
        }
      },

      {
        id: 'object-pronoun', unit: '6A',
        build() {
          const items = [
            { s: 'I love', obj: 'her', wrong: ['she', 'hers', 'he'] },
            { s: 'Can you help', obj: 'us', wrong: ['we', 'our', 'ours'] },
            { s: "I can't find", obj: 'them', wrong: ['they', 'their', 'theirs'] }
          ];
          const it = rand(items);
          return choice(it.obj, it.wrong.filter(x => x !== it.obj),
            `Complete with the object pronoun: ${it.s} ___.`,
            `Después del verbo va el pronombre objeto: me, you, him, her, it, us, them. "I love her" (no "I love she").`);
        }
      },

      {
        id: 'like-ing', unit: '6B',
        build() {
          const items = [
            { v: 'swim', corr: 'swimming', wrong: ['to swim', 'swims', 'swam'] },
            { v: 'cook', corr: 'cooking', wrong: ['to cook', 'cooks', 'cooked'] },
            { v: 'get up', corr: 'getting up', wrong: ['to get up', 'get up', 'got up'] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Complete: They enjoy ___ (${it.v}).`,
            `Con like / love / enjoy / don't mind / hate siempre va el verbo en -ing, nunca con "to".`);
        }
      },

      {
        id: 'ordinals', unit: '6B',
        build() {
          const items = [
            { n: '3rd', corr: 'third', wrong: ['three', 'thirdly', 'threeth'] },
            { n: '2nd', corr: 'second', wrong: ['two', 'secund', 'twoth'] },
            { n: '9th', corr: 'ninth', wrong: ['nine', 'nineth', 'ninetth'] },
            { n: '12th', corr: 'twelfth', wrong: ['twelveth', 'twelvth', 'twelve'] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Write the ordinal in words: the ${it.n} → the ___`,
            `Los ordinales: first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth...`);
        }
      },

      {
        id: 'be-or-do', unit: '6C',
        build() {
          const items = [
            { q: '___ you like jazz?', corr: 'Do', wrong: ['Are', 'Is', 'Does'] },
            { q: '___ your brother a musician?', corr: 'Is', wrong: ['Do', 'Are', 'Does'] },
            { q: '___ they live in a village?', corr: 'Do', wrong: ['Are', 'Is', 'Does'] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Choose the correct question: ${it.q}`,
            `"Be" para estados e identidad (Are you tired? Is he a musician?); "do/does" para acciones (Do they live...?).`);
        }
      },

      {
        id: 'was-were', unit: '7A',
        build() {
          const items = [
            { s: 'She', corr: "wasn't", wrong: ["weren't", 'was', 'isnt'] },
            { s: 'They', corr: 'were', wrong: ['was', 'are', 'is'] },
            { s: 'He', corr: 'was', wrong: ['were', 'is', 'are'] }
          ];
          const it = rand(items);
          const stem = it.s === 'She' ? 'She ___ in class yesterday.' : (it.s === 'They' ? 'The Beatles ___ famous in the 1960s.' : 'He ___ a famous painter.');
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Complete: ${stem}`,
            `Pasado de be: "was" con I/he/she/it y "were" con you/we/they. El negativo es "wasn't / weren't".`);
        }
      },

      {
        id: 'word-formation', unit: '7A',
        build() {
          const items = [
            { v: 'write', corr: 'writer', wrong: ['writter', 'writeing', 'writes'] },
            { v: 'sing', corr: 'singer', wrong: ['singger', 'singar', 'sings'] },
            { v: 'act', corr: 'actor', wrong: ['acter', 'actar', 'acts'] },
            { v: 'direct', corr: 'director', wrong: ['directer', 'directar', 'directs'] },
            { v: 'invent', corr: 'inventor', wrong: ['inventer', 'inventar', 'invents'] }
          ];
          const it = rand(items);
          return choice(it.corr, it.wrong.filter(x => x !== it.corr),
            `Complete with the profession: A person who ___s is a ___. (${it.v})`,
            `Al verbo le añadimos -er u -or para formar la profesión: ${it.v} → ${it.corr}.`);
        }
      }
    ]
  },

  /* ========================================================================
     LISTENING — frases para dictar (TTS) + traducción
     ======================================================================== */
  listening: {
    items: [
      { unit: '1A', text: "I'm a teacher.", translation: 'Soy profesor.' },
      { unit: '1A', text: "We're fine, thank you.", translation: 'Estamos bien, gracias.' },
      { unit: '1B', text: "Is she Chinese?", translation: '¿Es china?' },
      { unit: '1B', text: "No, they aren't in London.", translation: 'No, no están en Londres.' },
      { unit: '1C', text: "This is my email.", translation: 'Este es mi email.' },
      { unit: '1C', text: "How do you spell it?", translation: '¿Cómo se escribe?' },
      { unit: '2A', text: "She has an expensive watch.", translation: 'Ella tiene un reloj caro.' },
      { unit: '2A', text: "These are my new keys.", translation: 'Estas son mis llaves nuevas.' },
      { unit: '2B', text: "The car is very expensive.", translation: 'El auto es muy caro.' },
      { unit: '2B', text: "It's quite difficult.", translation: 'Es bastante difícil.' },
      { unit: '2C', text: "Don't eat that!", translation: '¡No comas eso!' },
      { unit: '2C', text: "Let's go to the cinema.", translation: 'Vamos al cine.' },
      { unit: '3A', text: "She works in a bank.", translation: 'Ella trabaja en un banco.' },
      { unit: '3A', text: "We don't eat takeaway food.", translation: 'No comemos comida para llevar.' },
      { unit: '3B', text: "Do you start at nine?", translation: '¿Empezás a las nueve?' },
      { unit: '3B', text: "What time do you start work?", translation: '¿A qué hora empezás a trabajar?' },
      { unit: '3C', text: "Where do you live?", translation: '¿Dónde vivís?' },
      { unit: '3C', text: "How old are you?", translation: '¿Cuántos años tenés?' },
      { unit: '4A', text: "This is Jack's car.", translation: 'Este es el auto de Jack.' },
      { unit: '4A', text: "Whose jacket is this?", translation: '¿De quién es esta chaqueta?' },
      { unit: '4B', text: "We have a meeting on Monday morning.", translation: 'Tenemos una reunión el lunes por la mañana.' },
      { unit: '4B', text: "The film starts at eight o'clock.", translation: 'La película empieza a las ocho.' },
      { unit: '4C', text: "She always goes to school by bus.", translation: 'Ella siempre va al colegio en autobús.' },
      { unit: '4C', text: "He sometimes works at the weekend.", translation: 'Él a veces trabaja el fin de semana.' },
      { unit: '5A', text: "He can't swim very well.", translation: 'Él no sabe nadar muy bien.' },
      { unit: '5A', text: "My sister can play the guitar.", translation: 'Mi hermana puede tocar la guitarra.' },
      { unit: '5B', text: "Look! It's raining.", translation: '¡Mirá! Está lloviendo.' },
      { unit: '5B', text: "They are waiting for the bus.", translation: 'Están esperando el autobús.' },
      { unit: '5C', text: "She usually goes to work by bus.", translation: 'Ella suele ir al trabajo en autobús.' },
      { unit: '5C', text: "It's cold and sunny today.", translation: 'Hoy está frío y soleado.' },
      { unit: '6A', text: "I love them, but they don't love me.", translation: 'Los quiero, pero ellos no me quieren.' },
      { unit: '6A', text: "Can you help us, please?", translation: '¿Nos podés ayudar, por favor?' },
      { unit: '6B', text: "They love swimming in the sea.", translation: 'Les encanta nadar en el mar.' },
      { unit: '6B', text: "The party is on the seventeenth of June.", translation: 'La fiesta es el diecisiete de junio.' },
      { unit: '6C', text: "Do you like classical music?", translation: '¿Te gusta la música clásica?' },
      { unit: '6C', text: "I think it's fantastic.", translation: 'Me parece fantástico.' },
      { unit: '7A', text: "Vincent van Gogh was an artist.", translation: 'Vincent van Gogh era un artista.' },
      { unit: '7A', text: "She wasn't in class yesterday.", translation: 'Ella no estaba en clase ayer.' }
    ]
  },

  /* ========================================================================
     WRITING — consignas con modelo y elementos clave evaluables
     ======================================================================== */
  writing: {
    tasks: [
      {
        id: 'w1', unit: '3A',
        prompt: 'Escribí UNA frase en presente simple sobre tu rutina diaria usando "usually" o "always".',
        hint: 'Recordá: el adverbio va antes del verbo principal.',
        model: 'I always get up at seven and have breakfast with my family.',
        keyPoints: [
          { label: 'Adverbio de frecuencia (usually / always / often / sometimes)', patterns: ['usually|always|often|sometimes'] },
          { label: 'Verbo en 3ª persona con -s si el sujeto es he/she/it', patterns: ['\\b(he|she|it)\\s+[a-z]+s\\b', '\\b(my|i|we|they|you)\\s+[a-z]+\\b'] },
          { label: 'Oración completa con punto final', patterns: ['[a-zA-Z].*(\\.|\\?|!)'] }
        ]
      },
      {
        id: 'w2', unit: '3B',
        prompt: 'Escribí UNA pregunta para tu compañero/a del trabajo usando "Do" o "Does" + una WH-question.',
        hint: 'Ej.: "What time do you start work?"',
        model: 'What time do you start work?',
        keyPoints: [
          { label: 'Empieza con una palabra WH (what, where, when, who, why, how)', patterns: ['^(what|where|when|who|why|how)\\b'] },
          { label: 'Usa Do/Does como auxiliar', patterns: ['\\b(do|does)\\b'] },
          { label: 'Termina en signo de pregunta', patterns: ['\\?'] }
        ]
      },
      {
        id: 'w3', unit: '4A',
        prompt: 'Escribí UNA frase para indicar de quién es un objeto, usando el apóstrofo \'s.',
        hint: 'Ej.: "This is Sarah\'s bag."',
        model: "This is Sarah's bag, not mine.",
        keyPoints: [
          { label: "Apóstrofo 's de posesión", patterns: ["[A-Za-z]+'s"] },
          { label: 'Oración completa', patterns: ['[a-zA-Z].*(\\.|\\?|!)'] }
        ]
      },
      {
        id: 'w4', unit: '5A',
        prompt: 'Escribí DOS frases sobre tus habilidades y las de un amigo/a usando "can" y "can\'t".',
        hint: 'Ej.: "I can play the guitar, but I can\'t swim."',
        model: "I can play the guitar, but I can't swim. My friend can swim, but he can't play an instrument.",
        keyPoints: [
          { label: 'Usa "can"', patterns: ['\\bcan\\b'] },
          { label: 'Usa "can\'t" (o "cannot")', patterns: ["can't|cannot"] },
          { label: 'Verbo en forma base después de can', patterns: ['\\bcan\\s+[a-z]+\\b'] }
        ]
      },
      {
        id: 'w5', unit: '5B',
        prompt: 'Escribí UNA frase en presente continuo sobre lo que está pasando ahora mismo.',
        hint: 'Ej.: "Look! It\'s raining."',
        model: "Look! They're waiting for the bus.",
        keyPoints: [
          { label: 'Verbo auxiliar am/is/are', patterns: ['\\b(am|is|are)\\b'] },
          { label: 'Verbo en -ing', patterns: ['[a-z]+ing\\b'] }
        ]
      },
      {
        id: 'w6', unit: '6B',
        prompt: 'Escribí UNA frase con "like / love / enjoy" + verbo en -ing sobre algo que te gusta hacer.',
        hint: 'Recordá: con like nunca va "to".',
        model: 'I love swimming in the sea in summer.',
        keyPoints: [
          { label: 'Verbo de gusto (like, love, enjoy, don\'t mind, hate)', patterns: ['\\b(like|love|enjoy|don\'t mind|hate)\\b'] },
          { label: 'El segundo verbo en -ing (sin "to")', patterns: ['\\b(like|love|enjoy|don\'t mind|hate)\\s+[a-z]+ing\\b'] }
        ]
      },
      {
        id: 'w7', unit: '6A',
        prompt: 'Escribí UNA frase con un pronombre objeto (me, you, him, her, it, us, them).',
        hint: 'Ej.: "I love them."',
        model: 'Can you help us, please?',
        keyPoints: [
          { label: 'Pronombre objeto después del verbo', patterns: ['\\b(help|love|like|meet|see|find|call|need)\\s+(me|you|him|her|it|us|them)\\b'] },
          { label: 'Oración completa', patterns: ['[a-zA-Z].*(\\.|\\?|!)'] }
        ]
      },
      {
        id: 'w8', unit: '7A',
        prompt: 'Escribí UNA frase en pasado con "was" o "were" describiendo dónde estuviste el fin de semana pasado.',
        hint: 'Ej.: "We were at the beach last summer."',
        model: 'We were at the beach last weekend.',
        keyPoints: [
          { label: 'Pasado de be (was / were)', patterns: ['\\b(was|were)\\b'] },
          { label: 'Expresión de tiempo pasado', patterns: ['last |yesterday|ago|\\b20[0-2][0-9]\\b'] }
        ]
      },
      {
        id: 'w9', unit: '2C',
        prompt: 'Escribí UN imperativo negativo y UN imperativo afirmativo (una instrucción que le darías a alguien).',
        hint: 'Ej.: "Don\'t smoke here. Open the window."',
        model: "Don't eat that! Open your books, please.",
        keyPoints: [
          { label: 'Imperativo negativo con "Don\'t"', patterns: ["don't"] },
          { label: 'Imperativo afirmativo (verbo base al inicio)', patterns: ["^(open|close|listen|look|take|put|write|read|turn|sit|stand|don.t)"] }
        ]
      },
      {
        id: 'w10', unit: '4B',
        prompt: 'Escribí UNA frase usando la preposición de tiempo correcta (in / on / at).',
        hint: 'Ej.: "I was born in 1990." / "The class starts at nine." / "I work on Mondays."',
        model: 'The exam is on Friday at ten in the morning.',
        keyPoints: [
          { label: 'Preposición de tiempo (in / on / at)', patterns: ['\\b(in|on|at)\\b'] },
          { label: 'Oración completa', patterns: ['[a-zA-Z].*(\\.|\\?|!)'] }
        ]
      }
    ]
  },

  /* ========================================================================
     SPEAKING — prompts de preparación con frases clave y criterios
     ======================================================================== */
  speaking: {
    prompts: [
      {
        id: 's1', unit: '1A/1B',
        question: 'Presentate a vos mismo/a en unos 30 segundos: nombre, de dónde sos y a qué te dedicás.',
        keyPhrases: ['My name is...', 'I am from...', 'I live in...', 'I work as a... / I study...'],
        model: 'My name is Alex. I am from Argentina and I live in Buenos Aires. I work as a teacher and I study English in the evenings.',
        criteria: [
          'Digo mi nombre y de dónde soy',
          'Digo dónde vivo',
          'Digo a qué me dedico (trabajo o estudio)',
          'Hablo al menos 30 segundos sin quedarme bloqueado'
        ]
      },
      {
        id: 's2', unit: '1C/2A',
        question: 'Contá qué cosas tenés en tu casa o en tu mochila. Usá "have" y "a / an".',
        keyPhrases: ['I have a...', 'I have got...', 'I don\'t have a...'],
        model: 'I have got a laptop, a watch and some headphones. I don\'t have an umbrella because I live near the office.',
        criteria: [
          'Uso "a / an" correctamente',
          'Uso el plural (-s) cuando hay más de uno',
          'Nombro al menos 3 objetos',
          'Hablo entre 30 y 60 segundos'
        ]
      },
      {
        id: 's3', unit: '3A',
        question: 'Describí tu rutina de un día normal: a qué te levantás, qué hacés y a qué hora volvés.',
        keyPhrases: ['I usually get up at...', 'First, I...', 'Then I...', 'After work, I...'],
        model: 'I usually get up at seven. First, I have breakfast with my family. Then I go to work by bus. After work, I cook dinner and I watch TV.',
        criteria: [
          'Uso el presente simple con "usually" o "every day"',
          'Encadeno con First / Then / After that',
          'Digo al menos 4 acciones de mi rutina',
          'Uso bien la hora (at seven, at half past nine)'
        ]
      },
      {
        id: 's4', unit: '3B/3C',
        question: 'Hablá de tu trabajo o de tus estudios: horario, tareas y compañeros.',
        keyPhrases: ['I start work at...', 'I work with...', 'My job is...', 'Do you...? / Where do you...?'],
        model: 'I start work at nine and I finish at five. My job is quite difficult but I like it. I work with a small team.',
        criteria: [
          'Digo mi horario de trabajo o estudio',
          'Describo mi tarea con adjetivos (easy / difficult / interesting)',
          'Hablo de mis compañeros',
          'Hago al menos una pregunta al final'
        ]
      },
      {
        id: 's5', unit: '4A/4B',
        question: 'Describí a tu familia: cómo es, dónde vive y qué le gusta hacer.',
        keyPhrases: ['This is my...', 'He/She is...', 'My ... is from...', 'He/She likes...'],
        model: 'This is my sister. She is from Córdoba and she lives with my parents. She is very kind and she likes cooking.',
        criteria: [
          'Uso el apóstrofo \'s o "my" para hablar de mi familia',
          'Describo al menos dos personas',
          'Uso "he / she is" con adjectives',
          'Hablo 40 segundos o más'
        ]
      },
      {
        id: 's6', unit: '4C/5A',
        question: 'Contá qué te gusta hacer y qué no podés hacer. Usá "can", "can\'t" y "love / like + -ing".',
        keyPhrases: ['I can...', 'I can\'t...', 'I love + -ing', 'I don\'t like + -ing'],
        model: 'I love cooking and I can play the guitar, but I can\'t swim. I don\'t like getting up early on Mondays.',
        criteria: [
          'Uso "can" y "can\'t" con verbos en forma base',
          'Uso love / like + verbo en -ing',
          'Digo al menos 3 actividades',
          'Mantengo la pronunciación clara'
        ]
      },
      {
        id: 's7', unit: '5C/6B',
        question: 'Hablá de tu tiempo libre: qué hacés los fines de semana, con quién y cuándo.',
        keyPhrases: ['On Saturdays, I...', 'I usually...', 'I go...', 'I don\'t like...'],
        model: 'On Saturdays, I usually go out with my friends. We have lunch at a restaurant and then we go shopping. I don\'t like going to the gym on Sunday mornings.',
        criteria: [
          'Uso expresiones de día (on Saturdays, on Sunday mornings)',
          'Describo planes con "usually / sometimes / never"',
          'Hablo de un plan con un amigo',
          'Incluyo una opinión (like / don\'t like + -ing)'
        ]
      },
      {
        id: 's8', unit: '6C',
        question: 'Contá qué te parece el curso de inglés y por qué. Usá "What do you think of...?" y "I think...".',
        keyPhrases: ['What do you think of...?', 'I think it is...', 'It\'s really...', 'I don\'t think...'],
        model: 'I think the course is really interesting. What do you think of the listening exercises? I don\'t think they are easy, but they are useful.',
        criteria: [
          'Uso "I think" para dar una opinión',
          'Hago una pregunta con "What do you think of...?',
          'Uso un adjetivo de opinión (interesting, difficult, useful, boring)',
          'Doy una opinión negativa con "I don\'t think"'
        ]
      },
      {
        id: 's9', unit: '7A',
        question: 'Contá de una foto vieja tuya o de alguien que conocés: dónde estabas, con quién y qué pasó.',
        keyPhrases: ['This is me...', 'I was...', 'I was with...', 'It was...'],
        model: 'This is me at my grandmother\'s house. I was with my family and we had a big lunch. It was a really happy day.',
        criteria: [
          'Describo la foto ("This is me...")',
          'Uso "was / were" para el pasado',
          'Digo con quién estaba',
          'Describo el lugar o el día'
        ]
      }
    ]
  }
};
