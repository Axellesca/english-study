/**
 * English File Elementary - Módulo 3
 * Contenido puro: lecciones (7B, 7C, RC7) + bancos modulares del File 7.
 * No contiene lógica de UI. Cargar ANTES de app.js.
 */

// ---------------------------------------------------------------------------
// LECCIONES
// ---------------------------------------------------------------------------
const LESSONS = {
  "7B": {
    title: "7B: Wrong name, wrong place (Past Simple: Regular Verbs)",
    module: 7,
    theory: `
      <div class="theory-block">
        <h3>1. El pasado simple con verbos regulares (+ -ed)</h3>
        <p>Para hablar de acciones pasadas con <strong>verbos regulares</strong> añadimos <strong>-ed</strong> al infinitivo. La forma es <strong>igual para todas las personas</strong>: no cambia con el sujeto.</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Infinitivo</th><th>Pasado</th><th>Ejemplo</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td>ask</td><td><strong>asked</strong></td><td>She <strong>asked</strong> for a taxi.</td><td>Ella pidió un taxi.</td></tr>
              <tr><td>decide</td><td><strong>decided</strong></td><td>We <strong>decided</strong> to go to Ibiza.</td><td>Decidimos irnos a Ibiza.</td></tr>
              <tr><td>reply</td><td><strong>replied</strong></td><td>He <strong>replied</strong> to my email.</td><td>Él respondió a mi email.</td></tr>
              <tr><td>want</td><td><strong>wanted</strong></td><td>They <strong>wanted</strong> to go to Trinidad.</td><td>Querían ir a Trinidad.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 El pasado simple <strong>no cambia con el sujeto</strong>: <em>I worked</em> · <em>she worked</em> · <em>they worked</em>. Todas las formas son iguales.
        </div>
      </div>

      <div class="theory-block">
        <h3>2. Cómo se escribe el -ed</h3>
        <p>No todos los verbos solo añaden <strong>-ed</strong>. Estas son las cuatro reglas oficiales:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Verbo</th><th>Regla</th><th>Pasado</th></tr></thead>
            <tbody>
              <tr><td>watch · play</td><td>+ <strong>-ed</strong></td><td>watched · played</td></tr>
              <tr><td>arrive · travel</td><td>+ <strong>-d</strong> (después de vocal + <em>e</em>)</td><td>arrived · travelled</td></tr>
              <tr><td>study · try</td><td>consonante + <strong>y → -ied</strong></td><td>studied · tried</td></tr>
              <tr><td>stop · plan</td><td>vocal + consonante → <strong>duplicar</strong> + -ed</td><td>stopped · planned</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ <em>study → studied</em> (la <em>y</em> se convierte en <em>ie</em>), pero <em>play → played</em> (la <em>y</em> precededida de vocal solo añade <em>d</em>). Y ojo con la doble consonante: <em>stop → stopped</em>, <em>plan → planned</em>.
        </div>
      </div>

      <div class="theory-block">
        <h3>3. Negativos y preguntas: did / didn't</h3>
        <p>Para hablar del pasado usamos el auxiliar <strong>did</strong>. En negativo usamos <strong>didn't</strong> y en pregunta <strong>Did</strong>, y <strong>después del auxiliar el verbo va siempre en forma base</strong> (infinitivo).</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Tipo</th><th>Estructura</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td><strong>+</strong> afirmativo</td><td>Sujeto + verbo <strong>-ed</strong> + resto</td><td>I <strong>booked</strong> the flights yesterday.</td></tr>
              <tr><td><strong>−</strong> negativo</td><td>Sujeto + <strong>didn't</strong> + verbo base</td><td>I <strong>didn't play</strong> tennis yesterday.</td></tr>
              <tr><td><strong>?</strong> pregunta</td><td><strong>Did</strong> + sujeto + verbo base</td><td><strong>Did</strong> you <strong>play</strong> tennis yesterday?</td></tr>
              <tr><td>Respuesta corta</td><td>Yes, + sujeto + <strong>did</strong> · No, + sujeto + <strong>didn't</strong></td><td>Yes, I <strong>did</strong>. / No, I <strong>didn't</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ Después de <em>did</em> / <em>didn't</em> el verbo va en <strong>forma base</strong>: <em>Did you <strong>go</strong> home?</em> ✅ · <em>Did you <strong>went</strong> home?</em> ❌ · <em>I didn't <strong>went</strong>.</em> ❌
        </div>
      </div>

      <div class="theory-block">
        <h3>4. Expresiones de tiempo en pasado</h3>
        <p>La unidad trae diez expresiones clave para situar una acción en el pasado:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Expresión</th><th>Ejemplo</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td><strong>yesterday morning</strong></td><td>We talked about a holiday <strong>yesterday morning</strong>.</td><td>Ayer por la mañana hablamos de unas vacaciones.</td></tr>
              <tr><td><strong>last night</strong></td><td>I called a taxi <strong>last night</strong>.</td><td>Anoche llamé un taxi.</td></tr>
              <tr><td><strong>last month</strong></td><td>We booked a hotel <strong>last month</strong>.</td><td>El mes pasado reservamos un hotel.</td></tr>
              <tr><td><strong>three days ago</strong></td><td>She arrived <strong>three days ago</strong>.</td><td>Ella llegó hace tres días.</td></tr>
              <tr><td><strong>five minutes ago</strong></td><td>The flight landed <strong>five minutes ago</strong>.</td><td>El vuelo aterrizó hace cinco minutos.</td></tr>
              <tr><td><strong>last week</strong></td><td>I played a computer game <strong>last week</strong>.</td><td>La semana pasada jugué a un videojuego.</td></tr>
              <tr><td><strong>last summer</strong></td><td>We walked more than 5 km <strong>last summer</strong>.</td><td>El verano pasado caminamos más de 5 km.</td></tr>
              <tr><td><strong>the day before yesterday</strong></td><td>I posted a photo online <strong>the day before yesterday</strong>.</td><td>Anteayer publiqué una foto en línea.</td></tr>
              <tr><td><strong>a year ago</strong></td><td>I downloaded a song <strong>a year ago</strong>.</td><td>Descargué una canción hace un año.</td></tr>
              <tr><td><strong>in 2017</strong></td><td>They travelled by bus <strong>in 2017</strong>.</td><td>Viajaron en bus en 2017.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 Decimos <strong>last week</strong>, <strong>last month</strong>, <strong>last year</strong> <strong>sin "the"</strong>: <em>the last week</em> ❌ → <em>last week</em> ✅. Con "the" sí: <em>the day before yesterday</em>, <em>the last Friday</em>.
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ <em>last</em> + periodo no lleva "the", pero <strong>ago</strong> siempre va con número y sin "the": <em>two days ago</em> ✅ · <em>the two days ago</em> ❌.
        </div>
      </div>

      <div class="theory-block">
        <h3>5. Pronunciación de la terminación -ed</h3>
        <p>La "e" de <strong>-ed</strong> normalmente no se pronuncia. El sonido depende de la última letra del verbo:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Sonido</th><th>Ejemplos</th><th>Regla</th></tr></thead>
            <tbody>
              <tr><td><strong>/d/</strong></td><td>called /ˈkɔːld/ · arrived /əˈraɪvd/ · played /pleɪd/</td><td>Después de un sonido <strong>sonoro</strong> (vocales, l, m, n, r, v...)</td></tr>
              <tr><td><strong>/t/</strong></td><td>walked /wɔːkt/ · stopped /stɒpt/ · cooked /kʊkt/</td><td>Después de un sonido <strong>sordo</strong> (p, k, f, s, sh, th...)</td></tr>
              <tr><td><strong>/ɪd/</strong></td><td>wanted /ˈwɒntɪd/ · decided /dɪˈsaɪdɪd/ · painted /ˈpeɪntɪd/</td><td>Solo después de <strong>/t/</strong> o <strong>/d/</strong></td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ <em>walked</em> se dice /wɔːkt/ (no /wɔːkɪd/), pero <em>wanted</em> sí lleva el sonido /ɪd/: /ˈwɒntɪd/.
        </div>
      </div>

      <div class="theory-block">
        <h3>6. La historia de la unidad: dos errores de viaje</h3>
        <p>Dos historias reales sobre un problema con una reserva de vuelos:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Historia</th><th>Qué pasó</th><th>Palabras clave</th></tr></thead>
            <tbody>
              <tr><td><strong>Adam e India</strong> (Manchester → Ibiza)</td><td>El padrastro de India reservó los vuelos con Ryanair usando el nombre <em>"Adam West"</em> (el actor de Batman). Adam cambió su apellido para arreglarlo, pero necesitaba un pasaporte nuevo: £220, el doble del vuelo.</td><td>stepfather · surname · passport · ticket · flight</td></tr>
              <tr><td><strong>Kevin y Jeanette</strong> (Caribe)</td><td>Buscaron vuelos en línea, dejaron el coche en el parking, caminaron a la terminal y llegaron al aeropuerto de Birmingham… pero no pudieron hacer el check-in.</td><td>airport · terminal · check in · car park</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Comprensión de la lectura:</strong></p>
        <ul>
          <li>Where did Adam and India want to fly to? → <strong>To Ibiza</strong>, on holiday.</li>
          <li>Why did the stepfather look on Facebook? → Because he <strong>didn't know Adam's surname</strong>.</li>
          <li>What was the problem? → He booked the tickets in the name <strong>"Adam West"</strong>, but Adam's real name was <strong>Adam Armstrong</strong>.</li>
          <li>How much did it cost to fix the mistake? → <strong>£220</strong>, double the cost of the flight.</li>
        </ul>
      </div>
    `,
    vocab: [
      { english: "yesterday morning", translation: "ayer por la mañana", phonetic: "/ˈjestədeɪ ˈmɔːnɪŋ/" },
      { english: "last night", translation: "anoche", phonetic: "/lɑːst naɪt/" },
      { english: "last month", translation: "el mes pasado", phonetic: "/lɑːst mʌnθ/" },
      { english: "three days ago", translation: "hace tres días", phonetic: "/θriː deɪz əˈɡəʊ/" },
      { english: "five minutes ago", translation: "hace cinco minutos", phonetic: "/faɪv ˈmɪnɪts əˈɡəʊ/" },
      { english: "last week", translation: "la semana pasada", phonetic: "/lɑːst wiːk/" },
      { english: "last summer", translation: "el verano pasado", phonetic: "/lɑːst ˈsʌmə/" },
      { english: "the day before yesterday", translation: "anteayer", phonetic: "/ðə deɪ bɪˈfɔː ˈjestədeɪ/" },
      { english: "a year ago", translation: "hace un año", phonetic: "/ə jɪə əˈɡəʊ/" },
      { english: "in 2017", translation: "en 2017", phonetic: "/ɪn ˌtwɔːˈtiːˈsevən/" },
      { english: "ask", translation: "pedir / preguntar", phonetic: "/ɑːsk/" },
      { english: "decide", translation: "decidir", phonetic: "/dɪˈsaɪd/" },
      { english: "reply", translation: "responder", phonetic: "/rɪˈplaɪ/" },
      { english: "want", translation: "querer", phonetic: "/wɒnt/" },
      { english: "book", translation: "reservar", phonetic: "/bʊk/" },
      { english: "travel", translation: "viajar", phonetic: "/ˈtrævl/" },
      { english: "change", translation: "cambiar", phonetic: "/tʃeɪndʒ/" },
      { english: "need", translation: "necesitar", phonetic: "/niːd/" },
      { english: "arrive", translation: "llegar", phonetic: "/əˈraɪv/" },
      { english: "call", translation: "llamar", phonetic: "/kɔːl/" },
      { english: "talk", translation: "hablar", phonetic: "/tɔːk/" },
      { english: "check", translation: "revisar / registrar", phonetic: "/tʃek/" },
      { english: "look", translation: "mirar / buscar", phonetic: "/lʊk/" },
      { english: "play", translation: "jugar", phonetic: "/pleɪ/" },
      { english: "watch", translation: "mirar (TV)", phonetic: "/wɒtʃ/" },
      { english: "work", translation: "trabajar", phonetic: "/wɜːk/" },
      { english: "study", translation: "estudiar", phonetic: "/ˈstʌdi/" },
      { english: "cook", translation: "cocinar", phonetic: "/kʊk/" },
      { english: "live", translation: "vivir", phonetic: "/lɪv/" },
      { english: "start", translation: "empezar", phonetic: "/stɑːt/" },
      { english: "stop", translation: "parar", phonetic: "/stɒp/" },
      { english: "finish", translation: "terminar", phonetic: "/ˈfɪnɪʃ/" },
      { english: "paint", translation: "pintar", phonetic: "/peɪnt/" },
      { english: "walk", translation: "caminar", phonetic: "/wɔːk/" },
      { english: "download", translation: "descargar", phonetic: "/ˌdaʊnˈləʊd/" },
      { english: "post", translation: "publicar", phonetic: "/pəʊst/" },
      { english: "stepfather", translation: "padrastro", phonetic: "/ˈstepˌfɑːðə/" },
      { english: "girlfriend", translation: "novia", phonetic: "/ˈɡɜːlˌfrend/" },
      { english: "surname", translation: "apellido", phonetic: "/ˈsɜːneɪm/" },
      { english: "passport", translation: "pasaporte", phonetic: "/ˈpɑːspɔːt/" },
      { english: "ticket", translation: "billete / entrada", phonetic: "/ˈtɪkɪt/" },
      { english: "flight", translation: "vuelo", phonetic: "/flaɪt/" },
      { english: "airport", translation: "aeropuerto", phonetic: "/ˈeəpɔːt/" },
      { english: "mistake", translation: "error", phonetic: "/mɪˈsteɪk/" }
    ],
    exercises: [
      { question: "Complete with the past simple: We ___ a hotel last month. (book)", type: "input", answer: "booked", placeholder: "verb + -ed", explanation: "El verbo regular 'book' en pasado es 'booked': We booked a hotel last month." },
      { question: "Choose the correct question: ___ you watch football on TV yesterday?", options: ["Did", "Do"], type: "choice", correct: 0, explanation: "En pasado usamos el auxiliar Did + verbo base: Did you watch football on TV yesterday?" },
      { question: "Choose the correct negative: I ___ play tennis yesterday.", options: ["didn't played", "didn't play"], type: "choice", correct: 1, explanation: "didn't ya va seguido del verbo en forma base: I didn't play tennis yesterday." },
      { question: "Order the words to form a correct sentence:", pool: ["booked", "I", "the", "flights", "yesterday"], correct: ["I", "booked", "the", "flights", "yesterday"], type: "scramble", explanation: "Orden afirmativo en pasado: Sujeto + verbo -ed + complemento: I booked the flights yesterday." },
      { question: "Listening: Listen and type the sentence you hear.", type: "listening", speakText: "We arrived at the airport at ten", answer: "we arrived at the airport at ten", explanation: "La frase hablada es 'We arrived at the airport at ten' (verbo regular en pasado + expresión de tiempo)." }
    ]
  },

  "7C": {
    title: "7C: Happy New Year? (Past Simple: Irregular Verbs)",
    module: 7,
    theory: `
      <div class="theory-block">
        <h3>1. Verbos irregulares en pasado</h3>
        <p>Muchos verbos muy frecuentes <strong>no</strong> añaden -ed: cambian de forma. Son los verbos irregulares, y hay que memorizarlos:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Infinitivo</th><th>Pasado</th><th>Infinitivo</th><th>Pasado</th></tr></thead>
            <tbody>
              <tr><td>buy /baɪ/</td><td><strong>bought</strong> /bɔːt/</td><td>put on /pʊt ɒn/</td><td><strong>put on</strong> /pʊt ɒn/</td></tr>
              <tr><td>can /kæn/</td><td><strong>could</strong> /kʊd/</td><td>say /seɪ/</td><td><strong>said</strong> /sed/</td></tr>
              <tr><td>come /kʌm/</td><td><strong>came</strong> /keɪm/</td><td>take /teɪk/</td><td><strong>took</strong> /tʊk/</td></tr>
              <tr><td>drink /drɪŋk/</td><td><strong>drank</strong> /dræŋk/</td><td>think /θɪŋk/</td><td><strong>thought</strong> /θɔːt/</td></tr>
              <tr><td>feel /fiːl/</td><td><strong>felt</strong> /felt/</td><td>wear /weə/</td><td><strong>wore</strong> /wɔː/</td></tr>
              <tr><td>find /faɪnd/</td><td><strong>found</strong> /faʊnd/</td><td>get /ɡet/</td><td><strong>got</strong> /ɡɒt/</td></tr>
              <tr><td>go /ɡəʊ/</td><td><strong>went</strong> /went/</td><td>have /hæv/</td><td><strong>had</strong> /hæd/</td></tr>
              <tr><td>know /nəʊ/</td><td><strong>knew</strong> /njuː/</td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 Fíjate en los que se parecen: <em>come → came</em> · <em>go → went</em> · <em>see → saw</em> (irregular) · <em>take → took</em> · <em>think → thought</em> · <em>wear → wore</em>. Casi todos suenan distintos.
        </div>
      </div>

      <div class="theory-block">
        <h3>2. Negativos y preguntas con verbos irregulares</h3>
        <p>El auxiliar es el mismo: <strong>did</strong> / <strong>didn't</strong>. Después del auxiliar, el verbo va <strong>siempre en forma base</strong>, incluso si es irregular.</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Tipo</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td><strong>+</strong> afirmativo</td><td>I <strong>went</strong> to Iceland in December.</td></tr>
              <tr><td><strong>−</strong> negativo</td><td>I <strong>didn't go</strong> to New York.</td></tr>
              <tr><td><strong>?</strong> pregunta</td><td><strong>Did</strong> you <strong>go</strong> to a party? Who <strong>did</strong> you <strong>go</strong> with?</td></tr>
              <tr><td>Respuesta corta</td><td>Yes, I <strong>did</strong>. / No, I <strong>didn't</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ El pasado irregular (<em>went</em>, <em>had</em>, <em>got</em>) <strong>solo</strong> aparece en frases afirmativas: <em>Did you <strong>went</strong> home?</em> ❌ → <em>Did you <strong>go</strong> home?</em> ✅
        </div>
      </div>

      <div class="theory-block">
        <h3>3. Orden de palabras: ASI y QuASI</h3>
        <p>En preguntas con pasado, el auxiliar va en un lugar fijo:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Tipo</th><th>Estructura</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td><strong>ASI</strong></td><td>Auxiliary + Subject + Infinitive</td><td><strong>Did</strong> you <strong>go</strong> shopping yesterday?</td></tr>
              <tr><td><strong>QuASI</strong></td><td>Question word + Auxiliary + Subject + Infinitive</td><td><strong>Where did</strong> you <strong>go</strong>?</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 <strong>ASI</strong> = Did + sujeto + verbo base. <strong>QuASI</strong> = palabra interrogativa + Did + sujeto + verbo base. En las dos, el verbo final va en <strong>forma base</strong>.
        </div>
      </div>

      <div class="theory-block">
        <h3>4. Los verbos go, have y get</h3>
        <p>Estos tres verbos forma muchísimas frases del día a día:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Verbo</th><th>Expresiones</th></tr></thead>
            <tbody>
              <tr><td><strong>go</strong></td><td>go <strong>by bus</strong> / by car / by plane · go <strong>for a walk</strong> · go <strong>home</strong> (from school) · go <strong>out</strong> (on Friday night) · go <strong>shopping</strong> · go <strong>to a restaurant</strong> · go <strong>to bed</strong> (late) · go <strong>to church</strong> (or to mosque) · go <strong>to the beach</strong> · go <strong>back</strong> (to work) · go <strong>on holiday</strong></td></tr>
              <tr><td><strong>have</strong></td><td>have <strong>a car</strong> (or a bike) · have <strong>long hair</strong> · have <strong>breakfast</strong> (or lunch, dinner) · have <strong>a drink</strong> · have <strong>a good time</strong> · have <strong>a sandwich</strong> · have <strong>a shower</strong> (or a bath, a swim)</td></tr>
              <tr><td><strong>get</strong></td><td>get <strong>a newspaper</strong> (= buy or obtain) · get <strong>a taxi</strong> (= take) · get <strong>an email</strong> (= receive) · get <strong>dressed</strong> · get <strong>home</strong> (= arrive) · get <strong>to the airport</strong> (= arrive) · get <strong>up</strong> (early, late)</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 En pasado, <em>go → went</em>, <em>have → had</em>, <em>get → got</em>: <em>Yesterday, I <strong>got up</strong> early. I <strong>had</strong> breakfast in a café. I <strong>went</strong> shopping.</em>
        </div>
      </div>

      <div class="theory-block">
        <h3>5. can → could</h3>
        <p>El pasado simple de <strong>can</strong> es <strong>could</strong>, y ahí no usamos did:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Tipo</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td><strong>+</strong> afirmativo</td><td>We <strong>could</strong> see the whole city from the plane.</td></tr>
              <tr><td><strong>−</strong> negativo</td><td>I <strong>couldn't</strong> see him.</td></tr>
              <tr><td><strong>?</strong> pregunta</td><td><strong>Could</strong> you wear jeans when you were at school?</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ Nunca <em>I didn't can see him</em> ❌: con can usamos <strong>could / couldn't</strong> directamente: <em>I <strong>couldn't</strong> see him</em> ✅.
        </div>
      </div>

      <div class="theory-block">
        <h3>6. Pronunciación: acento de frase en preguntas</h3>
        <p>En las preguntas el acento cae en la <strong>palabra interrogativa</strong> y en el <strong>verbo principal</strong>:</p>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Pregunta</th><th>Dónde va el acento</th></tr></thead>
            <tbody>
              <tr><td><strong>What year</strong> did it happen?</td><td>en <strong>WHAT</strong> y en <strong>HAPPEN</strong></td></tr>
              <tr><td><strong>Where</strong> were you?</td><td>en <strong>WHERE</strong> y en <strong>YOU</strong></td></tr>
              <tr><td><strong>Who</strong> did you go with?</td><td>en <strong>WHO</strong> y en <strong>GO</strong></td></tr>
              <tr><td><strong>What time</strong> did you go to bed?</td><td>en <strong>WHAT TIME</strong> y en <strong>BED</strong></td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ No marques el auxiliar: <em>Did you GO to bed?</em> suena forzado — el <em>did</em> es débil y se apoya en el resto de la frase.
        </div>
      </div>
    `,
    vocab: [
      { english: "go", translation: "ir", phonetic: "/ɡəʊ/" },
      { english: "by bus", translation: "en autobús", phonetic: "/baɪ bʌs/" },
      { english: "car", translation: "coche / auto", phonetic: "/kɑː/" },
      { english: "plane", translation: "avión", phonetic: "/pleɪn/" },
      { english: "for a walk", translation: "a walk / dar un paseo", phonetic: "/fɔː ə wɔːk/" },
      { english: "home", translation: "casa (a casa)", phonetic: "/həʊm/" },
      { english: "from school", translation: "desde el colegio", phonetic: "/frɒm skuːl/" },
      { english: "go out", translation: "salir (a divertirse)", phonetic: "/ɡəʊ aʊt/" },
      { english: "on Friday night", translation: "el viernes por la noche", phonetic: "/ɒn ˈfraɪdeɪ naɪt/" },
      { english: "shopping", translation: "compras", phonetic: "/ˈʃɒpɪŋ/" },
      { english: "to a restaurant", translation: "a un restaurante", phonetic: "/tə ə ˈrestrɒnt/" },
      { english: "to bed", translation: "a la cama", phonetic: "/tə bed/" },
      { english: "late", translation: "tarde", phonetic: "/leɪt/" },
      { english: "to church", translation: "a la iglesia", phonetic: "/tə tʃɜːtʃ/" },
      { english: "to mosque", translation: "a la mezquita", phonetic: "/tə mɒsk/" },
      { english: "to the beach", translation: "a la playa", phonetic: "/tə ðə biːtʃ/" },
      { english: "back", translation: "de vuelta / atrás", phonetic: "/bæk/" },
      { english: "to work", translation: "al trabajo", phonetic: "/tə wɜːk/" },
      { english: "on holiday", translation: "de vacaciones", phonetic: "/ɒn ˈhɒlədeɪ/" },
      { english: "have", translation: "tener", phonetic: "/hæv/" },
      { english: "a bike", translation: "una bici", phonetic: "/ə baɪk/" },
      { english: "long hair", translation: "pelo largo", phonetic: "/lɒŋ heə/" },
      { english: "breakfast", translation: "desayuno", phonetic: "/ˈbrekfəst/" },
      { english: "lunch", translation: "almuerzo", phonetic: "/lʌntʃ/" },
      { english: "dinner", translation: "cena", phonetic: "/ˈdɪnə/" },
      { english: "a drink", translation: "una bebida", phonetic: "/ə drɪŋk/" },
      { english: "a good time", translation: "buen rato", phonetic: "/ə ɡʊd taɪm/" },
      { english: "a sandwich", translation: "un sándwich", phonetic: "/ə ˈsænwɪdʒ/" },
      { english: "a shower", translation: "una ducha", phonetic: "/ə ˈʃaʊə/" },
      { english: "a bath", translation: "un baño", phonetic: "/ə bɑːθ/" },
      { english: "a swim", translation: "un baño (en la pileta)", phonetic: "/ə swɪm/" },
      { english: "get", translation: "obtener / conseguir", phonetic: "/ɡet/" },
      { english: "a newspaper", translation: "un periódico", phonetic: "/ə ˈnjuːzpeɪpə/" },
      { english: "a taxi", translation: "un taxi", phonetic: "/ə ˈtæksi/" },
      { english: "an email", translation: "un email", phonetic: "/ən ˈiːmeɪl/" },
      { english: "dressed", translation: "vestido", phonetic: "/drest/" },
      { english: "to the airport", translation: "al aeropuerto", phonetic: "/tə ði ˈeəpɔːt/" },
      { english: "get up", translation: "levantarse", phonetic: "/ɡet ʌp/" },
      { english: "by", translation: "por (medio de)", phonetic: "/baɪ/" },
      { english: "for", translation: "para", phonetic: "/fɔː/" },
      { english: "from", translation: "de / desde", phonetic: "/frɒm/" },
      { english: "in", translation: "en", phonetic: "/ɪn/" },
      { english: "on", translation: "en (días)", phonetic: "/ɒn/" },
      { english: "to", translation: "a / hacia", phonetic: "/tuː/" },
      { english: "the", translation: "el / la (artículo)", phonetic: "/ðə/" },
      { english: "a", translation: "un / una", phonetic: "/ə/" },
      { english: "Friday", translation: "viernes", phonetic: "/ˈfraɪdeɪ/" },
      { english: "school", translation: "colegio / escuela", phonetic: "/skuːl/" },
      { english: "restaurant", translation: "restaurante", phonetic: "/ˈrestrɒnt/" },
      { english: "church", translation: "iglesia", phonetic: "/tʃɜːtʃ/" },
      { english: "mosque", translation: "mezquita", phonetic: "/mɒsk/" },
      { english: "beach", translation: "playa", phonetic: "/biːtʃ/" },
      { english: "work", translation: "trabajo", phonetic: "/wɜːk/" },
      { english: "holiday", translation: "vacaciones", phonetic: "/ˈhɒlədeɪ/" },
      { english: "drink", translation: "bebida", phonetic: "/drɪŋk/" },
      { english: "good", translation: "bueno", phonetic: "/ɡʊd/" },
      { english: "time", translation: "tiempo / vez", phonetic: "/taɪm/" },
      { english: "swim", translation: "nadar / baño", phonetic: "/swɪm/" },
      { english: "airport", translation: "aeropuerto", phonetic: "/ˈeəpɔːt/" }
    ],
    exercises: [
      { question: "Complete with the past simple of 'go': They ___ to a party.", type: "input", answer: "went", placeholder: "verb in the past", explanation: "El pasado irregular de go es went: They went to a party." },
      { question: "Choose the correct question: ___ you go shopping yesterday?", options: ["Did", "Do"], type: "choice", correct: 0, explanation: "En pasado el auxiliar es Did + verbo base: Did you go shopping yesterday?" },
      { question: "Choose the correct negative: She ___ go to New York.", options: ["didn't go", "didn't went"], type: "choice", correct: 0, explanation: "didn't va seguido del verbo en forma base: She didn't go to New York." },
      { question: "Order the words to form a correct sentence:", pool: ["a", "time", "had", "We", "good"], correct: ["We", "had", "a", "good", "time"], type: "scramble", explanation: "El pasado irregular de have es had: We had a good time." },
      { question: "Listening: Listen and type the sentence you hear.", type: "listening", speakText: "I got up early and had breakfast", answer: "i got up early and had breakfast", explanation: "La frase hablada es 'I got up early and had breakfast' (got + have en pasado)." }
    ]
  },

  "RC7": {
    title: "7 Revise & Check (Unidades 7B–7C)",
    module: 7,
    theory: `
      <div class="theory-block">
        <h3>Repaso Integral del File 7</h3>
        <p>El <strong>File 7</strong> completa el pasado simple. La 7A (que ya estudiaste en el Módulo 2) abrió el bloque con <em>was / were</em>; ahora cierras el File con los verbos regulares, los irregulares y el vocabulario para hablar del pasado:</p>
        <ul>
          <li><strong>7A — past simple of be</strong>: <em>was</em> / <em>were</em>, negativos <em>wasn't / weren't</em>, preguntas y respuestas cortas, <em>be born</em> y <strong>formación de palabras</strong> (write → writer).</li>
          <li><strong>7B — verbos regulares</strong>: + <em>-ed</em> con las cuatro reglas de escritura, <em>did / didn't</em> + verbo base y las <strong>expresiones de tiempo pasado</strong> (last week, three days ago, in 2017).</li>
          <li><strong>7C — verbos irregulares</strong>: <em>go → went</em>, <em>have → had</em>, <em>get → got</em>, el orden <strong>ASI</strong> y <strong>QuASI</strong>, y <em>can → could</em>.</li>
          <li><strong>Pronunciación</strong>: la terminación <em>-ed</em> (/d/, /t/, /ɪd/) y el <strong>acento de frase</strong>.</li>
        </ul>
      </div>
      <div class="theory-block">
        <h3>Revisión de las tres estructuras</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Unidad</th><th>Pregunta clave</th><th>Estructura</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td><strong>7A</strong></td><td>¿Estado o identidad en el pasado?</td><td>be: <strong>was/were</strong> · <strong>wasn't/weren't</strong></td><td>She <strong>wasn't</strong> in class yesterday.</td></tr>
              <tr><td><strong>7B</strong></td><td>¿Qué pasó?</td><td>verbo regular + <strong>-ed</strong> · <strong>did/didn't</strong> + base</td><td>We <strong>booked</strong> a hotel last month.</td></tr>
              <tr><td><strong>7C</strong></td><td>¿Qué hiciste?</td><td>verbo irregular · <strong>Did</strong> + base · <strong>could</strong></td><td>They <strong>went</strong> to a party.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rule-highlight-box">
          💡 <strong>did / didn't</strong> + verbo base · <strong>was / were</strong> y <strong>could / couldn't</strong> llevan la marca del pasado ellos mismos · el pasado irregular solo aparece en frases afirmativas.
        </div>
        <div class="rule-highlight-box warning">
          ⚠️ <em>Did you went home?</em> ❌ → <em>Did you <strong>go</strong> home?</em> ✅ · <em>I didn't went.</em> ❌ → <em>I <strong>didn't go</strong>.</em> ✅ · <em>She didn't was tired.</em> ❌ → <em>She <strong>was</strong> tired.</em> ✅
        </div>
      </div>
      <div class="theory-block">
        <h3>Vocabulario para contar tu pasado</h3>
        <div class="table-wrapper">
          <table class="grammar-table">
            <thead><tr><th>Para hablar de…</th><th>Expresiones clave</th></tr></thead>
            <tbody>
              <tr><td>Cuándo pasó</td><td>yesterday morning · last night · last week · last month · last summer · three days ago · five minutes ago · a year ago · in 2017</td></tr>
              <tr><td>Tu vida</td><td>go out · go shopping · go for a walk · go on holiday · have breakfast · have a good time · get up · get dressed · get home</td></tr>
              <tr><td>Tu trabajo</td><td>writer · singer · composer · dancer · director · inventor · artist · novelist</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    vocab: [
      { english: "was / were", translation: "era / eran (pasado de be)", phonetic: "/wɒz/ · /wɜː/" },
      { english: "booked", translation: "reservó (pasado de book)", phonetic: "/bʊkt/" },
      { english: "went", translation: "fue (pasado de go)", phonetic: "/went/" },
      { english: "had", translation: "tuvo (pasado de have)", phonetic: "/hæd/" },
      { english: "got", translation: "conseguí / obtuve (pasado de get)", phonetic: "/ɡɒt/" },
      { english: "didn't", translation: "no (pasado) + verbo base", phonetic: "/ˈdɪdnt/" },
      { english: "last week", translation: "la semana pasada", phonetic: "/lɑːst wiːk/" },
      { english: "three days ago", translation: "hace tres días", phonetic: "/θriː deɪz əˈɡəʊ/" },
      { english: "a good time", translation: "un buen rato", phonetic: "/ə ɡʊd taɪm/" },
      { english: "get up", translation: "levantarse", phonetic: "/ɡet ʌp/" }
    ],
    exercises: [
      { question: "Complete with was or were: The Beatles ___ famous in the 1960s.", type: "input", answer: "were", placeholder: "was / were", explanation: "Sujeto 'they' → were: The Beatles were famous in the 1960s." },
      { question: "Choose the correct question: ___ she play the piano yesterday?", options: ["Did", "Does"], type: "choice", correct: 0, explanation: "Pasado → Did + verbo base: Did she play the piano yesterday?" },
      { question: "Select the correct negative: They ___ at the concert last night.", options: ["wasn't", "weren't"], type: "choice", correct: 1, explanation: "Con 'they' el negativo en pasado es weren't: They weren't at the concert last night." },
      { question: "Order the words (7C: no fui):", pool: ["I", "went", "to", "Iceland"], correct: ["I", "went", "to", "Iceland"], type: "scramble", explanation: "El pasado irregular de go es went: I went to Iceland." },
      { question: "Listening: Listen and type the phrase you hear.", type: "listening", speakText: "I had a good time", answer: "i had a good time", explanation: "La frase hablada es 'I had a good time' (have en pasado = had)." }
    ]
  }
};

// ---------------------------------------------------------------------------
// BANCOS MODULARES (Grammar / Vocabulary / Exercises por módulo)
// ---------------------------------------------------------------------------
const BANKS = {
  grammar: {
    7: {
      label: "Grammar Bank 7 (7B-7C)",
      theory: `
        <div class="theory-block">
          <h3>Grammar Bank 7B: past simple — regular verbs</h3>
          <p>• <strong>I booked the flights yesterday.</strong><br>
          • <strong>We arrived at the airport at 10.00 this morning.</strong><br>
          • <strong>When I was young I watched TV every night.</strong><br>
          • <strong>I worked as a waiter every weekend when I was at university.</strong><br>
          • <strong>Contraction: didn't = did not.</strong><br>
          • <strong>Regular verbs in the past</strong> end in -ed, e.g. <em>worked, lived, played</em>.<br>
          • <strong>The past simple is the same for all persons</strong> (I, you, she, etc.).<br>
          • <strong>We use did / didn't + infinitive</strong> for past simple questions and negatives. <strong>Did</strong> is the past of do.</p>
        </div>
        <div class="theory-block">
          <h3>Las cuatro reglas del -ed</h3>
          <div class="table-wrapper">
            <table class="grammar-table">
              <thead><tr><th>infinitivo</th><th>past</th><th>spelling</th></tr></thead>
              <tbody>
                <tr><td>watch · play</td><td>watched · played</td><td>add <strong>-ed</strong></td></tr>
                <tr><td>arrive</td><td>arrived</td><td>add <strong>-d</strong></td></tr>
                <tr><td>study</td><td>studied</td><td>consonant + y: <strong>y → -ied</strong></td></tr>
                <tr><td>stop</td><td>stopped</td><td>one vowel + one consonant: <strong>double consonant + -ed</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p>• <strong>+</strong> <em>I / You / He / She / It / We / They <strong>worked</strong> yesterday.</em><br>
          • <strong>−</strong> <em>I / You / He / She / It / We / They <strong>didn't work</strong> yesterday.</em><br>
          • <strong>?</strong> <em>Did <strong>work</strong> yesterday?</em> → <em>Yes, I did. / No, I didn't.</em></p>
        </div>
        <div class="theory-block">
          <h3>Grammar Bank 7C: past simple — irregular verbs</h3>
          <p>• Some verbs are <strong>irregular</strong> in the past and change their form, e.g. <em>go → went, have → had</em>.<br>
          • We only use the irregular past form in <strong>+</strong> sentences: <em>I <strong>bought</strong> a bag last night.</em><br>
          • We use the <strong>infinitive after did / didn't</strong>: <em>Did you <strong>go</strong> out last night?</em> <strong>NOT</strong> <em>Did you went…?</em><br>
          • Remember word order in questions: <strong>ASI</strong> (Auxiliary, Subject, Infinitive), e.g. <em>Did you go shopping yesterday?</em> · <strong>QuASI</strong> (Question word, Auxiliary, Subject, Infinitive), e.g. <em>Where did you go?</em></p>
        </div>
        <div class="theory-block">
          <h3>Tabla de verbos irregulares</h3>
          <div class="table-wrapper">
            <table class="grammar-table">
              <thead><tr><th>infinitivo</th><th>past</th><th>infinitivo</th><th>past</th></tr></thead>
              <tbody>
                <tr><td>buy</td><td><strong>bought</strong></td><td>put on</td><td><strong>put on</strong></td></tr>
                <tr><td>come</td><td><strong>came</strong></td><td>say</td><td><strong>said</strong></td></tr>
                <tr><td>feel</td><td><strong>felt</strong></td><td>take</td><td><strong>took</strong></td></tr>
                <tr><td>find</td><td><strong>found</strong></td><td>think</td><td><strong>thought</strong></td></tr>
                <tr><td>get</td><td><strong>got</strong></td><td>wear</td><td><strong>wore</strong></td></tr>
                <tr><td>go</td><td><strong>went</strong></td><td>drink</td><td><strong>drank</strong></td></tr>
                <tr><td>have</td><td><strong>had</strong></td><td>know</td><td><strong>knew</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p>• <strong>can / could</strong>: the past simple of <em>can</em> is <em>could</em>. We add <em>not</em> to make negatives and reverse the subject and verb to make questions: <em>We <strong>could</strong> see the whole city from the plane.</em> · <em>I <strong>couldn't</strong> see him.</em> · <em><strong>Could</strong> you wear jeans when you were at school?</em></p>
        </div>
      `,
      exercises: [
        { question: "7B.a: Complete with the past simple: We ___ at the airport at 10.00 this morning.", type: "input", answer: "arrived", placeholder: "verb + -ed", explanation: "Verbo regular arrive → arrived (se añade -d tras vocal + e)." },
        { question: "7B.b: Select: I ___ as a waiter every weekend when I was at university.", options: ["worked", "work"], type: "choice", correct: 0, explanation: "Afirmativo en pasado: worked (el pasado simple no cambia con el sujeto)." },
        { question: "7B.c: Select the correct question: ___ you watch TV every night?", options: ["Did", "Do"], type: "choice", correct: 0, explanation: "Did + verbo base: Did you watch TV every night?" },
        { question: "7B.d: Complete with the past simple of study: She ___ for an exam.", type: "input", answer: "studied", placeholder: "verb + -ed", explanation: "consonante + y → -ied: study → studied." },
        { question: "7B.e: Select the correct negative: He ___ play tennis yesterday.", options: ["didn't played", "didn't play"], type: "choice", correct: 1, explanation: "didn't + verbo en forma base: didn't play." },
        { question: "7C.a: Complete with the irregular past of go: I ___ to Iceland in December.", type: "input", answer: "went", placeholder: "irregular verb", explanation: "go → went." },
        { question: "7C.b: Select the correct question: Who ___ you go with?", options: ["did", "doed"], type: "choice", correct: 0, explanation: "QuASI: Question word + Auxiliary (did) + Subject + Infinitive: Who did you go with?" },
        { question: "7C.c: Select the correct negative of can: I ___ see him.", options: ["didn't can see him", "couldn't see him"], type: "choice", correct: 1, explanation: "El pasado de can es could: I couldn't see him (sin didn't)." },
        { question: "7C.d: Complete with the irregular past of have: They ___ a fantastic New Year's Eve.", type: "input", answer: "had", placeholder: "irregular verb", explanation: "have → had." },
        { question: "7C.e: Complete with the past simple of get: I ___ up early.", type: "input", answer: "got", placeholder: "irregular verb", explanation: "get → got: I got up early." }
      ]
    }
  },

  vocab: {
    7: {
      label: "Vocabulary Bank 7 (7B-7C)",
      categories: [
        { key: "pastTime", label: "Past Time Expressions (7B)" },
        { key: "regularVerbs", label: "Regular Verbs in the Past (7B)" },
        { key: "goHaveGet", label: "go, have, get (7C)" }
      ],
      data: {
        pastTime: [
          { english: "yesterday morning", translation: "ayer por la mañana", phonetic: "/ˈjestədeɪ ˈmɔːnɪŋ/" },
          { english: "last night", translation: "anoche", phonetic: "/lɑːst naɪt/" },
          { english: "last month", translation: "el mes pasado", phonetic: "/lɑːst mʌnθ/" },
          { english: "three days ago", translation: "hace tres días", phonetic: "/θriː deɪz əˈɡəʊ/" },
          { english: "five minutes ago", translation: "hace cinco minutos", phonetic: "/faɪv ˈmɪnɪts əˈɡəʊ/" },
          { english: "last week", translation: "la semana pasada", phonetic: "/lɑːst wiːk/" },
          { english: "last summer", translation: "el verano pasado", phonetic: "/lɑːst ˈsʌmə/" },
          { english: "the day before yesterday", translation: "anteayer", phonetic: "/ðə deɪ bɪˈfɔː ˈjestədeɪ/" },
          { english: "a year ago", translation: "hace un año", phonetic: "/ə jɪə əˈɡəʊ/" },
          { english: "in 2017", translation: "en 2017", phonetic: "/ɪn ˌtwɔːˈtiːˈsevən/" }
        ],
        regularVerbs: [
          { english: "ask", translation: "pedir / preguntar", phonetic: "/ɑːsk/" },
          { english: "decide", translation: "decidir", phonetic: "/dɪˈsaɪd/" },
          { english: "reply", translation: "responder", phonetic: "/rɪˈplaɪ/" },
          { english: "want", translation: "querer", phonetic: "/wɒnt/" },
          { english: "book", translation: "reservar", phonetic: "/bʊk/" },
          { english: "travel", translation: "viajar", phonetic: "/ˈtrævl/" },
          { english: "change", translation: "cambiar", phonetic: "/tʃeɪndʒ/" },
          { english: "need", translation: "necesitar", phonetic: "/niːd/" },
          { english: "arrive", translation: "llegar", phonetic: "/əˈraɪv/" },
          { english: "call", translation: "llamar", phonetic: "/kɔːl/" },
          { english: "talk", translation: "hablar", phonetic: "/tɔːk/" },
          { english: "check", translation: "revisar / registrar", phonetic: "/tʃek/" },
          { english: "look", translation: "mirar / buscar", phonetic: "/lʊk/" },
          { english: "play", translation: "jugar", phonetic: "/pleɪ/" },
          { english: "watch", translation: "mirar (TV)", phonetic: "/wɒtʃ/" },
          { english: "work", translation: "trabajar", phonetic: "/wɜːk/" },
          { english: "study", translation: "estudiar", phonetic: "/ˈstʌdi/" },
          { english: "cook", translation: "cocinar", phonetic: "/kʊk/" },
          { english: "live", translation: "vivir", phonetic: "/lɪv/" },
          { english: "start", translation: "empezar", phonetic: "/stɑːt/" },
          { english: "stop", translation: "parar", phonetic: "/stɒp/" },
          { english: "finish", translation: "terminar", phonetic: "/ˈfɪnɪʃ/" },
          { english: "paint", translation: "pintar", phonetic: "/peɪnt/" },
          { english: "walk", translation: "caminar", phonetic: "/wɔːk/" },
          { english: "download", translation: "descargar", phonetic: "/ˌdaʊnˈləʊd/" },
          { english: "post", translation: "publicar", phonetic: "/pəʊst/" },
          { english: "use", translation: "usar", phonetic: "/juːz/" },
          { english: "like", translation: "gustar", phonetic: "/laɪk/" }
        ],
        goHaveGet: [
          { english: "go", translation: "ir", phonetic: "/ɡəʊ/" },
          { english: "by bus", translation: "en autobús", phonetic: "/baɪ bʌs/" },
          { english: "by car", translation: "en coche", phonetic: "/baɪ kɑː/" },
          { english: "by plane", translation: "en avión", phonetic: "/baɪ pleɪn/" },
          { english: "for a walk", translation: "a dar un paseo", phonetic: "/fɔː ə wɔːk/" },
          { english: "home (from school)", translation: "a casa (desde el colegio)", phonetic: "/həʊm/" },
          { english: "out (on Friday night)", translation: "a salir (el viernes por la noche)", phonetic: "/aʊt/" },
          { english: "shopping", translation: "de compras", phonetic: "/ˈʃɒpɪŋ/" },
          { english: "to a restaurant", translation: "a un restaurante", phonetic: "/tə ə ˈrestrɒnt/" },
          { english: "to bed (late)", translation: "a la cama (tarde)", phonetic: "/tə bed/" },
          { english: "to church (or to mosque)", translation: "a la iglesia (o a la mezquita)", phonetic: "/tə tʃɜːtʃ/" },
          { english: "to the beach", translation: "a la playa", phonetic: "/tə ðə biːtʃ/" },
          { english: "back (to work)", translation: "de vuelta (al trabajo)", phonetic: "/bæk/" },
          { english: "on holiday", translation: "de vacaciones", phonetic: "/ɒn ˈhɒlədeɪ/" },
          { english: "have", translation: "tener", phonetic: "/hæv/" },
          { english: "a car (or a bike)", translation: "un coche (o una bici)", phonetic: "/ə kɑː/" },
          { english: "long hair", translation: "pelo largo", phonetic: "/lɒŋ heə/" },
          { english: "breakfast (or lunch, dinner)", translation: "desayuno (o almuerzo, cena)", phonetic: "/ˈbrekfəst/" },
          { english: "a drink", translation: "una bebida", phonetic: "/ə drɪŋk/" },
          { english: "a good time", translation: "un buen rato", phonetic: "/ə ɡʊd taɪm/" },
          { english: "a sandwich", translation: "un sándwich", phonetic: "/ə ˈsænwɪdʒ/" },
          { english: "a shower (or a bath, a swim)", translation: "una ducha (o un baño, un baño en la pileta)", phonetic: "/ə ˈʃaʊə/" },
          { english: "get", translation: "obtener / conseguir", phonetic: "/ɡet/" },
          { english: "a newspaper", translation: "un periódico", phonetic: "/ə ˈnjuːzpeɪpə/" },
          { english: "a taxi", translation: "un taxi", phonetic: "/ə ˈtæksi/" },
          { english: "an email", translation: "un email", phonetic: "/ən ˈiːmeɪl/" },
          { english: "dressed", translation: "vestido", phonetic: "/drest/" },
          { english: "home (= arrive)", translation: "a casa (llegar)", phonetic: "/həʊm/" },
          { english: "to the airport (= arrive)", translation: "al aeropuerto (llegar)", phonetic: "/tə ði ˈeəpɔːt/" },
          { english: "up (early, late)", translation: "a levantarse (temprano, tarde)", phonetic: "/ʌp/" }
        ]
      }
    }
  },

  exercises: {
    7: {
      label: "Banco de Ejercicios (Unidades 7B-7C)",
      categories: [
        { key: "regularVerbs", label: "Past Simple: Regular Verbs (7B)" },
        { key: "irregularVerbs", label: "Past Simple: Irregular Verbs (7C)" }
      ],
      data: {
        regularVerbs: [
          { q: "We ___ a hotel last month. (book)", opt: ["booked", "book"], c: 0 },
          { q: "He ___ a new passport. (need)", opt: ["needed", "needed"], c: 0 },
          { q: "___ you watch TV every night? (Did / Do)", opt: ["Did", "Do"], c: 0 },
          { q: "They ___ tennis yesterday. (didn't / played)", opt: ["didn't play", "didn't played"], c: 0 },
          { q: "She ___ for an exam. (study)", opt: ["studied", "studyed"], c: 0 }
        ],
        irregularVerbs: [
          { q: "I ___ to Iceland in December. (go)", opt: ["went", "goed"], c: 0 },
          { q: "They ___ a good time. (have)", opt: ["had", "hade"], c: 0 },
          { q: "We ___ up early. (get)", opt: ["got", "geted"], c: 0 },
          { q: "___ you go to a party? (Did / Do)", opt: ["Did", "Do"], c: 0 },
          { q: "I ___ see him. (couldn't / didn't can)", opt: ["couldn't", "didn't can"], c: 0 }
        ]
      }
    }
  }
};

// Back-compat aliases (por si algo aún referencia los nombres viejos)
const lessonsDatabase = LESSONS;
const grammarBank7Database = BANKS.grammar[7];
const vocabBank7Data = BANKS.vocab[7].data;
