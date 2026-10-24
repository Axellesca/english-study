/**
 * WH Questions Mastery Module — Knowledge Base
 * Complete educational dataset for mastering WH questions in English.
 */

const WH_DATA = {
  // 1. All WH Words & Combinations
  words: [
    // --- CORE 9 ---
    {
      id: "who",
      word: "Who",
      category: "core",
      translation: "¿Quién? / ¿A quién?",
      target: "Personas (Sujeto u Objeto)",
      summary: "Se utiliza para preguntar por la identidad de una persona o varias personas.",
      concept: "Pregunta siempre por seres humanos (o mascotas tratadas como familia). Puede cumplir el rol de Sujeto (quién realiza la acción) o de Objeto (quién recibe la acción).",
      formula: "Who + (auxiliar) + sujeto + verbo?  O  Who + verbo conjugado? (cuando es sujeto)",
      examples: [
        { en: "Who is your teacher?", es: "¿Quién es tu profesor?", audio: "Who is your teacher?", note: "Verbo BE: no necesita auxiliar DO." },
        { en: "Who do you live with?", es: "¿Con quién vives?", audio: "Who do you live with?", note: "Pregunta de objeto: preposición 'with' al final." },
        { en: "Who called you yesterday?", es: "¿Quién te llamó ayer?", audio: "Who called you yesterday?", note: "Pregunta de sujeto: 'Who' hizo la llamada, no lleva 'did'." }
      ],
      howToAnswer: {
        short: "Carlos. / My brother.",
        full: "I live with my parents. / Maria called me.",
        tip: "Si te preguntan con 'Who... with?', responde con la persona o 'With + persona' (ej: 'With my sister')."
      },
      commonMistake: {
        wrong: "With who do you live?",
        right: "Who do you live with?",
        why: "En inglés cotidiano y moderno la preposición NUNCA abre la pregunta; se coloca al final (Preposition Stranding)."
      },
      architectTip: "¡Ojo al piojo! Distinguí 'Who called you?' (¿Quién te llamó? -> 'Who' es sujeto, sin auxiliar) de 'Who did you call?' (¿A quién llamaste vos? -> 'Who' es objeto, necesita 'did')."
    },
    {
      id: "whom",
      word: "Whom",
      category: "core",
      translation: "¿A quién? / ¿Con quién? (Formal)",
      target: "Personas exclusivamente como OBJETO",
      summary: "Versión formal y tradicional de 'Who' cuando la persona es el objeto de un verbo o de una preposición.",
      concept: "Gramaticalmente solo puede reemplazar al objeto gramatical (him, her, them). En inglés hablado moderno ha sido casi totalmente absorbido por 'Who', pero sigue vigente en contextos formales, académicos y cartas oficiales.",
      formula: "Preposition + whom + aux + sujeto + verbo?  O  Whom + aux + sujeto + verbo + prep?",
      examples: [
        { en: "Whom did you invite to the conference?", es: "¿A quién invitaste a la conferencia?", audio: "Whom did you invite to the conference?", note: "Formal: 'whom' es el objeto de 'invite'." },
        { en: "To whom should I address this letter?", es: "¿A quién debo dirigir esta carta?", audio: "To whom should I address this letter?", note: "Estilo ultra-formal: preposición al inicio." },
        { en: "Whom were you speaking with?", es: "¿Con quién estabas hablando?", audio: "Whom were you speaking with?", note: "Híbrido formal con preposición al final." }
      ],
      howToAnswer: {
        short: "The director. / Dr. Smith.",
        full: "I invited the whole department to the conference.",
        tip: "La respuesta gramaticalmente equivalente siempre utiliza pronombres objeto (him, her, them)."
      },
      commonMistake: {
        wrong: "Whom is at the door?",
        right: "Who is at the door?",
        why: "'Whom' JAMÁS puede ser el sujeto que ejecuta la acción del verbo. Si responde a 'He/She', es WHO. Si responde a 'Him/Her', es WHOM."
      },
      architectTip: "Regla mnemotécnica infalible: Reemplazá mentalmente por 'he' o 'him'. Si la respuesta suena a 'him' (termina con M), la pregunta lleva 'whoM' (termina con M)."
    },
    {
      id: "what",
      word: "What",
      category: "core",
      translation: "¿Qué? / ¿Cuál?",
      target: "Cosas, acciones, ideas, conceptos o selección abierta",
      summary: "Pregunta por información general, cosas inanimadas, actividades o elecciones ilimitadas.",
      concept: "El comodín de la información. Se usa para preguntar por un objeto, una profesión ('What do you do?'), una definición o una elección dentro de un universo abierto e ilimitado de posibilidades.",
      formula: "What + aux + sujeto + verbo?  O  What + verbo? (como sujeto)",
      examples: [
        { en: "What are you doing tonight?", es: "¿Qué estás haciendo esta noche?", audio: "What are you doing tonight?", note: "Present Continuous: acción actual/plan." },
        { en: "What is your email address?", es: "¿Cuál es tu correo electrónico?", audio: "What is your email address?", note: "En español decimos 'cuál', pero en inglés es 'What' porque la opción es abierta." },
        { en: "What happened here?", es: "¿Qué pasó aquí?", audio: "What happened here?", note: "'What' como sujeto de la acción: sin auxiliar did." }
      ],
      howToAnswer: {
        short: "Nothing special. / My keys.",
        full: "I'm studying for my exam.",
        tip: "Si preguntan 'What do you do?', la respuesta natural es tu profesión ('I'm an engineer'), no lo que estás haciendo en el segundo exacto."
      },
      commonMistake: {
        wrong: "Which is your name?",
        right: "What is your name?",
        why: "Típico error de traducción directa del español '¿Cuál es tu nombre?'. Usamos 'What' porque los nombres son un conjunto infinito y abierto."
      },
      architectTip: "Pensá en 'What' como un menú sin límites. Si tenés mil millones de opciones posibles, la pregunta es WHAT. Si tenés 2 o 3 opciones en la mano, es WHICH."
    },
    {
      id: "which",
      word: "Which",
      category: "core",
      translation: "¿Cuál? / ¿Cuáles? (Entre opciones limitadas)",
      target: "Selección entre un grupo delimitado o conocido",
      summary: "Pregunta para elegir entre un número reducido y específico de alternativas.",
      concept: "A diferencia de 'What' (universo abierto), 'Which' presupone que tanto el que pregunta como el que responde conocen el grupo cerrado de opciones disponibles delante de ellos.",
      formula: "Which (+ sustantivo) + aux + sujeto + verbo?",
      examples: [
        { en: "Which color do you prefer, blue or black?", es: "¿Cuál color prefieres, azul o negro?", audio: "Which color do you prefer, blue or black?", note: "Elección explícita entre 2 opciones." },
        { en: "Which bus goes to the city center?", es: "¿Cuál autobús va al centro de la ciudad?", audio: "Which bus goes to the city center?", note: "'Which + noun' como sujeto: sin auxiliar do/does." },
        { en: "Which of these jackets is yours?", es: "¿Cuál de estas chaquetas es la tuya?", audio: "Which of these jackets is yours?", note: "Uso con 'of' para señalar un grupo específico." }
      ],
      howToAnswer: {
        short: "The blue one. / Bus 42.",
        full: "I prefer the blue one, thanks.",
        tip: "En inglés se utiliza mucho el pronombre 'one' / 'ones' para no repetir el sustantivo ('The red one')."
      },
      commonMistake: {
        wrong: "What of these two do you want?",
        right: "Which of these two do you want?",
        why: "Cuando el conjunto está acotado (aquí hay solo dos), 'Which' es obligatorio."
      },
      architectTip: "Visualizalo como un puntero: 'Which' apunta con el dedo a un grupo de elementos en la mesa. Si no hay elementos en la mesa y preguntás al aire, usás 'What'."
    },
    {
      id: "where",
      word: "Where",
      category: "core",
      translation: "¿Dónde? / ¿Adónde?",
      target: "Lugares, posiciones, procedencia y destinos",
      summary: "Pregunta por la ubicación espacial, origen o dirección de algo o alguien.",
      concept: "Engloba tanto el '¿dónde?' estático (posición) como el '¿adónde?' dinámico (hacia dónde). En inglés no existe una palabra separada para 'adónde'; se usa 'Where' más el verbo de movimiento, y a veces la preposición correspondiente.",
      formula: "Where + aux + sujeto + verbo?  O  Where + be + sujeto?",
      examples: [
        { en: "Where do you work?", es: "¿Dónde trabajas?", audio: "Where do you work?", note: "Present Simple: lugar habitual." },
        { en: "Where are you from?", es: "¿De dónde eres?", audio: "Where are you from?", note: "Origen: preposición 'from' al final." },
        { en: "Where did she put the documents?", es: "¿Dónde puso ella los documentos?", audio: "Where did she put the documents?", note: "Past Simple: auxiliar 'did' + verbo base 'put'." }
      ],
      howToAnswer: {
        short: "In Buenos Aires. / At home. / To Spain.",
        full: "I work at an IT company in Córdoba.",
        tip: "Prestá muchísima atención a las preposiciones de lugar: IN (dentro de ciudades, países, habitaciones), AT (puntos específicos, instituciones, eventos), ON (superficies, calles)."
      },
      commonMistake: {
        wrong: "From where are you?",
        right: "Where are you from?",
        why: "En español ponemos 'De' adelante. En inglés natural, la preposición de origen 'from' viaja siempre al final absoluto de la pregunta."
      },
      architectTip: "Para destino ('¿Adónde vas?'), los nativos dicen simplemente 'Where are you going?', sin agregar 'to' obligatoriamente, aunque 'Where are you flying to?' es perfecto para enfatizar el destino final."
    },
    {
      id: "when",
      word: "When",
      category: "core",
      translation: "¿Cuándo?",
      target: "Tiempo general, fechas, momentos, períodos",
      summary: "Pregunta por el momento temporal en que ocurre, ocurrió o ocurrirá una acción.",
      concept: "Cubre cualquier escala temporal: un año, un mes, una fecha, una época o un momento relativo ('When you finish'). Para horas exactas de reloj, se prefiere 'What time'.",
      formula: "When + aux + sujeto + verbo?",
      examples: [
        { en: "When is your birthday?", es: "¿Cuándo es tu cumpleaños?", audio: "When is your birthday?", note: "Con verbo BE." },
        { en: "When did you arrive in London?", es: "¿Cuándo llegaste a Londres?", audio: "When did you arrive in London?", note: "Past Simple con 'did'." },
        { en: "When does the train leave?", es: "¿Cuándo sale el tren?", audio: "When does the train leave?", note: "Horario programado: Present Simple con valor de futuro." }
      ],
      howToAnswer: {
        short: "Next Friday. / In October. / On Monday.",
        full: "My birthday is on July 14th.",
        tip: "Regla de oro de preposiciones temporales: ON para días y fechas (on Monday, on May 5th), IN para meses y años (in July, in 2024), AT para horas (at 8:30)."
      },
      commonMistake: {
        wrong: "When did you born?",
        right: "When were you born?",
        why: "'Born' no es un verbo activo en inglés moderno sino un participio; se utiliza con el verbo pasivo 'to be born' en pasado: 'were you born'."
      },
      architectTip: "Diferenciá 'When' de 'What time'. 'When' puede responderse con 'Tomorrow' o 'Next month'. 'What time' te exige una hora de reloj precisa."
    },
    {
      id: "why",
      word: "Why",
      category: "core",
      translation: "¿Por qué?",
      target: "Razones, motivos, causas, justificaciones y propósitos",
      summary: "Indaga el motivo o la causa detrás de un hecho, decisión o estado.",
      concept: "Busca la causalidad. La respuesta estándar es la conjunción 'Because' (porque...) para oraciones completas, o la estructura de infinitivo con 'To + verbo' cuando la razón es un propósito u objetivo.",
      formula: "Why + aux + sujeto + verbo?  O  Why + be + sujeto + adjetivo?",
      examples: [
        { en: "Why are you studying English?", es: "¿Por qué estás estudiando inglés?", audio: "Why are you studying English?", note: "Motivación o propósito." },
        { en: "Why did they cancel the flight?", es: "¿Por qué cancelaron el vuelo?", audio: "Why did they cancel the flight?", note: "Causa de un evento pasado." },
        { en: "Why is the door open?", es: "¿Por qué está abierta la puerta?", audio: "Why is the door open?", note: "Pregunta sobre un estado presente." }
      ],
      howToAnswer: {
        short: "Because it's raining. / To get a better job.",
        full: "I'm studying English because I want to work remotely.",
        tip: "Para propósitos, 'To + infinitivo' es infinitamente más natural y elegante que decir 'For to...' (error grave)."
      },
      commonMistake: {
        wrong: "Why you don't like coffee?",
        right: "Why don't you like coffee?",
        why: "Olvidar la inversión del auxiliar negativo. Las preguntas negativas también exigen auxiliar antes del sujeto: 'Why don't you...'."
      },
      architectTip: "Doble cara: 'Why' pregunta por la causa ('¿Por qué pasó?'). Si respondés con una acción futura que buscás lograr, usá 'To + verbo' (Infinitive of purpose): 'Why are you here? — To help you'."
    },
    {
      id: "whose",
      word: "Whose",
      category: "core",
      translation: "¿De quién? / ¿De quiénes?",
      target: "Posesión y pertenencia",
      summary: "Pregunta por el dueño o poseedor de un objeto, cualidad o responsabilidad.",
      concept: "Indica siempre propiedad. Puede usarse como determinante seguido inmediatamente de un sustantivo ('Whose car is this?') o como pronombre solitario ('Whose is this car?').",
      formula: "Whose + sustantivo + be + demostrativo?  O  Whose + be + sustantivo?",
      examples: [
        { en: "Whose phone is ringing?", es: "¿De quién es el teléfono que está sonando?", audio: "Whose phone is ringing?", note: "'Whose phone' actúa como sujeto del verbo 'is ringing'." },
        { en: "Whose keys are these?", es: "¿De quién son estas llaves?", audio: "Whose keys are these?", note: "Plural con 'are' y 'these'." },
        { en: "Whose turn is it?", es: "¿De quién es el turno?", audio: "Whose turn is it?", note: "Expresión cotidiana muy frecuente." }
      ],
      howToAnswer: {
        short: "Mine. / It's John's. / My brother's.",
        full: "These keys are mine. / It's Sarah's phone.",
        tip: "Se responde con pronombres posesivos (mine, yours, his, hers, ours, theirs) o con el genitivo sajón ('s)."
      },
      commonMistake: {
        wrong: "Who's car is that?",
        right: "Whose car is that?",
        why: "'Who's' es la contracción de 'Who is' (¿Quién es?) o 'Who has'. 'Whose' es la palabra interrogativa de posesión. Suenan exactamente igual (homófonos), pero significan cosas opuestas."
      },
      architectTip: "Truco de oro para no dudar: si podés reemplazar la palabra por 'Who is' y la frase tiene sentido ('¿Quién es...?'), entonces escribís WHO'S. Si no tiene sentido ('¿Quién es auto es este?'), es WHOSE."
    },
    {
      id: "how",
      word: "How",
      category: "core",
      translation: "¿Cómo?",
      target: "Modo, manera, estado, método o proceso",
      summary: "Pregunta por la manera en que se realiza una acción o por el estado de salud y ánimo de alguien.",
      concept: "El único término interrogativo esencial que no empieza con 'Wh-'. Es el gran explorador de métodos y procesos ('¿cómo funciona esto?'), estados ('¿cómo estás?') y medios de transporte.",
      formula: "How + aux + sujeto + verbo?  O  How + be + sujeto?",
      examples: [
        { en: "How do you spell your surname?", es: "¿Cómo se deletrea tu apellido?", audio: "How do you spell your surname?", note: "Método o proceso con Present Simple." },
        { en: "How does this machine work?", es: "¿Cómo funciona esta máquina?", audio: "How does this machine work?", note: "Funcionamiento con 'does'." },
        { en: "How was your flight?", es: "¿Cómo estuvo tu vuelo?", audio: "How was your flight?", note: "Evaluación de un evento pasado con BE." }
      ],
      howToAnswer: {
        short: "By bus. / Very well, thanks. / Carefully.",
        full: "I usually go to work by subway.",
        tip: "Para medios de transporte se responde con 'By + transporte' (by train, by car, by plane), pero a pie es 'On foot'."
      },
      commonMistake: {
        wrong: "How do you call this in English?",
        right: "What do you call this in English?",
        why: "En español decimos '¿Cómo se llama esto?'. En inglés se pregunta 'WHAT do you call this?' porque la respuesta es un sustantivo (un nombre), no un modo de actuar."
      },
      architectTip: "'How' pregunta por el MODO (adverbio o método). Por eso, cuando querés saber el NOMBRE de algo, preguntás con WHAT ('What is your name?'), nunca con HOW."
    },

    // --- LA FAMILIA HOW ---
    {
      id: "how-much",
      word: "How much",
      category: "how_family",
      translation: "¿Cuánto? / ¿Cuánta? / ¿Cuánto cuesta?",
      target: "Sustantivos incontables y precios",
      summary: "Pregunta por cantidades de cosas que no se pueden contar una por una (agua, dinero, tiempo) o por el costo de algo.",
      concept: "Se combina con sustantivos incontables en singular ('How much water/coffee/time...?') o de forma aislada con el verbo BE para consultar precios ('How much is this shirt?').",
      formula: "How much + sustantivo incontable + aux + sujeto + verbo?  O  How much is/are...?",
      examples: [
        { en: "How much is this jacket?", es: "¿Cuánto cuesta esta chaqueta?", audio: "How much is this jacket?", note: "Precio en singular." },
        { en: "How much time do we have?", es: "¿Cuánto tiempo tenemos?", audio: "How much time do we have?", note: "'Time' como concepto incontable." },
        { en: "How much coffee do you drink per day?", es: "¿Cuánto café bebes por día?", audio: "How much coffee do you drink per day?", note: "Líquido incontable." }
      ],
      howToAnswer: {
        short: "$45. / Not much. / Two cups.",
        full: "It costs forty-five dollars. / We have twenty minutes.",
        tip: "Para precios se responde con 'It is $...' o 'It costs $...'."
      },
      commonMistake: {
        wrong: "How much dollars do you have?",
        right: "How many dollars do you have?  /  How much money do you have?",
        why: "'Money' es incontable (How much money), pero 'dollars' es una unidad contable en plural (How many dollars)."
      },
      architectTip: "Regla del almacenero: ¿Podés decir 'dos dineros'? No, es incontable (much). ¿Podés decir 'dos billetes/dólares'? Sí, es contable (many)."
    },
    {
      id: "how-many",
      word: "How many",
      category: "how_family",
      translation: "¿Cuántos? / ¿Cuántas?",
      target: "Sustantivos contables en plural",
      summary: "Pregunta por el número exacto o aproximado de personas, objetos o elementos contables.",
      concept: "Va SIEMPRE seguido de un sustantivo en PLURAL ('How many books / brothers / cars...?'). Nunca pongas un sustantivo en singular después de 'How many'.",
      formula: "How many + sustantivo plural + aux + sujeto + verbo?  O  How many + be + there...?",
      examples: [
        { en: "How many languages do you speak?", es: "¿Cuántos idiomas hablas?", audio: "How many languages do you speak?", note: "'Languages' en plural contable." },
        { en: "How many people were at the party?", es: "¿Cuántas personas había en la fiesta?", audio: "How many people were at the party?", note: "'People' es el plural irregular de 'person'." },
        { en: "How many days are there in February?", es: "¿Cuántos días hay en febrero?", audio: "How many days are there in February?", note: "Con la estructura de existencia 'there are'." }
      ],
      howToAnswer: {
        short: "Three. / About twenty. / None.",
        full: "I speak two languages: Spanish and English.",
        tip: "Si no hay ninguno, la respuesta natural y precisa es 'None' (no 'zero' en conversación común)."
      },
      commonMistake: {
        wrong: "How many person work here?",
        right: "How many people work here?",
        why: "El sustantivo SIEMPRE debe estar en plural. El plural de 'person' es 'people'."
      },
      architectTip: "La regla de oro: después de 'How many' poné SIEMPRE la 's' o el plural irregular del sustantivo antes de poner el auxiliar ('How many students DO you have?')."
    },
    {
      id: "how-often",
      word: "How often",
      category: "how_family",
      translation: "¿Con qué frecuencia? / ¿Cada cuánto?",
      target: "Frecuencia de hábitos y rutinas",
      summary: "Pregunta por la regularidad o repetición con la que se realiza una actividad.",
      concept: "Es el motor del Present Simple para hablar de rutinas. Se responde típicamente con adverbios de frecuencia (always, usually, sometimes, never) o con expresiones de frecuencia (once a week, twice a month, every day).",
      formula: "How often + do/does + sujeto + verbo base?",
      examples: [
        { en: "How often do you go to the gym?", es: "¿Con qué frecuencia vas al gimnasio?", audio: "How often do you go to the gym?", note: "Pregunta estándar de rutina." },
        { en: "How often does he check his email?", es: "¿Cada cuánto revisa él su correo?", audio: "How often does he check his email?", note: "3ra persona singular con 'does'." },
        { en: "How often do trains run on Sundays?", es: "¿Con qué frecuencia pasan los trenes los domingos?", audio: "How often do trains run on Sundays?", note: "Frecuencia de transporte público." }
      ],
      howToAnswer: {
        short: "Twice a week. / Every day. / Rarely.",
        full: "I usually go to the gym three times a week.",
        tip: "Recordá la serie: once (1 vez), twice (2 veces), three times (3 veces), four times (4 veces)."
      },
      commonMistake: {
        wrong: "How often times do you practice?",
        right: "How often do you practice?  O  How many times do you practice?",
        why: "'How often' ya significa 'con qué frecuencia'; no lleva la palabra 'times' adentro. Si querés usar 'times', la fórmula es 'How many times'."
      },
      architectTip: "Pronunciación: La 't' en 'often' puede pronunciarse ('of-ten') o ser muda ('of-en'). Ambas son 100% correctas y naturales en inglés nativo."
    },
    {
      id: "how-long",
      word: "How long",
      category: "how_family",
      translation: "¿Cuánto tiempo? / ¿De qué longitud?",
      target: "Duración temporal o longitud física de un objeto",
      summary: "Pregunta por la duración de un evento, proceso o período temporal, o por la medida física lineal.",
      concept: "En el 90% de los casos se refiere al tiempo que dura algo ('How long does the movie last?'). Con Present Perfect mide la antigüedad de una situación ('How long have you lived here?'). También puede medir metros/centímetros de una mesa o río.",
      formula: "How long + aux + sujeto + verbo?  O  How long does it take (to...)?",
      examples: [
        { en: "How long is the meeting?", es: "¿Cuánto tiempo dura la reunión?", audio: "How long is the meeting?", note: "Duración con verbo BE." },
        { en: "How long does it take to get to the airport?", es: "¿Cuánto tiempo se tarda en llegar al aeropuerto?", audio: "How long does it take to get to the airport?", note: "Estructura impersonal 'it takes'." },
        { en: "How long have you lived in this city?", es: "¿Cuánto tiempo hace que vives en esta ciudad?", audio: "How long have you lived in this city?", note: "Present Perfect con 'for / since'." }
      ],
      howToAnswer: {
        short: "About an hour. / For three years. / Since 2019.",
        full: "It takes about 45 minutes by taxi.",
        tip: "Con Present Perfect se responde con 'For + duración' (for 2 months) o 'Since + momento inicial' (since Monday)."
      },
      commonMistake: {
        wrong: "How much time is the flight?",
        right: "How long is the flight?",
        why: "Aunque 'How much time' se entiende, los angloparlantes nativos usan 'How long' para preguntar la duración de un viaje, película o evento."
      },
      architectTip: "Memorizá la frase clave: 'How long does it take?'. Es la fórmula más común en viajes y trabajo para preguntar '¿Cuánto se tarda?'."
    },
    {
      id: "how-far",
      word: "How far",
      category: "how_family",
      translation: "¿A qué distancia? / ¿Cuán lejos?",
      target: "Distancia física entre dos puntos",
      summary: "Pregunta por los kilómetros, millas o tiempo de viaje que separan un lugar de otro.",
      concept: "Se construye habitualmente con el pronombre impersonal 'it' y la preposición 'from... to...'.",
      formula: "How far is it from [A] to [B]?  O  How far is [lugar]?",
      examples: [
        { en: "How far is the beach from here?", es: "¿A qué distancia está la playa de aquí?", audio: "How far is the beach from here?", note: "Distancia desde el punto actual." },
        { en: "How far is it from New York to Boston?", es: "¿Cuán lejos queda de Nueva York a Boston?", audio: "How far is it from New York to Boston?", note: "Estructura 'How far is it from... to...'." },
        { en: "How far can you run without stopping?", es: "¿Qué distancia puedes correr sin parar?", audio: "How far can you run without stopping?", note: "Con verbo modal 'can'." }
      ],
      howToAnswer: {
        short: "About 5 kilometers. / A 10-minute walk.",
        full: "It's about 200 miles away from here.",
        tip: "En inglés es muy común responder distancias en minutos a pie o en auto: 'It's a ten-minute walk' o 'It's 20 minutes by car'."
      },
      commonMistake: {
        wrong: "What distance is the hotel?",
        right: "How far is the hotel?",
        why: "'What distance' suena técnico y robótico. El 100% de las conversaciones cotidianas usan 'How far'."
      },
      architectTip: "La respuesta clásica en inglés usa 'It's': 'It's about 2 miles' o 'It's not very far'."
    },
    {
      id: "how-old",
      word: "How old",
      category: "how_family",
      translation: "¿Cuántos años? / ¿Qué edad?",
      target: "Edad de personas, animales o antigüedad de objetos y edificios",
      summary: "Pregunta por los años cumplidos de una persona o por la antigüedad de algo.",
      concept: "¡Cuidado supremo para hispanohablantes! En inglés no 'tenemos' años; en inglés 'somos' viejos. Por eso se usa con el verbo TO BE, nunca con HAVE.",
      formula: "How old + be (am/is/are/was/were) + sujeto?",
      examples: [
        { en: "How old are you?", es: "¿Cuántos años tienes?", audio: "How old are you?", note: "La pregunta clásica con verbo BE." },
        { en: "How old is your sister?", es: "¿Qué edad tiene tu hermana?", audio: "How old is your sister?", note: "3ra persona con 'is'." },
        { en: "How old is this historical building?", es: "¿Qué antigüedad tiene este edificio histórico?", audio: "How old is this historical building?", note: "Antigüedad de un objeto/edificio." }
      ],
      howToAnswer: {
        short: "25. / Twenty-five years old.",
        full: "I am 25 years old.  /  She is 30.",
        tip: "O decís solo el número ('I am 25'), o decís la frase completa ('I am 25 years old'). Nunca digas 'I have 25 years'."
      },
      commonMistake: {
        wrong: "How many years do you have?",
        right: "How old are you?",
        why: "Literal traducción del español. En inglés es un gravísimo error gramatical decir 'How many years do you have'."
      },
      architectTip: "Grabátelo en piedra: En inglés la edad es un ESTADO (to be), no una POSESIÓN (to have). 'I am 30', 'He is 40'."
    },
    {
      id: "how-fast",
      word: "How fast",
      category: "how_family",
      translation: "¿A qué velocidad? / ¿Cuán rápido?",
      target: "Velocidad y rapidez de movimiento",
      summary: "Pregunta por los km/h, millas por hora o ritmo con el que se mueve algo.",
      concept: "Modifica al adverbio 'fast' para medir la velocidad de vehículos, personas o procesos informáticos.",
      formula: "How fast + aux + sujeto + verbo?  O  How fast can...?",
      examples: [
        { en: "How fast can this car go?", es: "¿A qué velocidad puede ir este auto?", audio: "How fast can this car go?", note: "Velocidad máxima con 'can'." },
        { en: "How fast were you driving?", es: "¿A qué velocidad estabas conduciendo?", audio: "How fast were you driving?", note: "Past Continuous: pregunta policial típica." },
        { en: "How fast does internet work here?", es: "¿Cuán rápido funciona internet aquí?", audio: "How fast does internet work here?", note: "Velocidad de conexión." }
      ],
      howToAnswer: {
        short: "100 km/h. / Very fast.",
        full: "I was driving at 60 miles per hour.",
        tip: "Para velocidades exactas se usa la preposición AT: 'at 80 km/h'."
      },
      commonMistake: {
        wrong: "To what speed were you going?",
        right: "How fast were you going?  O  What speed were you going at?",
        why: "'How fast' es la forma natural y directa en inglés."
      },
      architectTip: "Para dimensiones siempre se usa 'How + Adjetivo': How fast (velocidad), How tall (altura de personas), How high (altura de montañas/aviones), How deep (profundidad), How heavy (peso)."
    },
    {
      id: "how-come",
      word: "How come",
      category: "how_family",
      translation: "¿Cómo es que...? / ¿Por qué? (Informal)",
      target: "Sorpresa o curiosidad por un hecho inesperado",
      summary: "Forma coloquial de preguntar 'Why', pero con una regla gramatical crucial: ¡NO invierte el orden de la oración!",
      concept: "Expresa sorpresa ante una situación que no encaja con lo esperado. Lo fascinante es que se estructura como una oración AFIRMATIVA ordinaria (Sujeto + Verbo), sin auxiliar 'do/does/did'.",
      formula: "How come + sujeto + verbo conjugado?",
      examples: [
        { en: "How come you are not at work today?", es: "¿Cómo es que no estás en el trabajo hoy?", audio: "How come you are not at work today?", note: "Orden afirmativo: 'you are', NO 'are you'." },
        { en: "How come she didn't call you?", es: "¿Cómo es que ella no te llamó?", audio: "How come she didn't call you?", note: "Equivalente informal de 'Why didn't she call you?'." },
        { en: "How come you know him?", es: "¿Cómo es que lo conoces?", audio: "How come you know him?", note: "Sin auxiliar 'do': 'you know'." }
      ],
      howToAnswer: {
        short: "I was feeling sick. / Long story.",
        full: "I'm off today because it's a national holiday.",
        tip: "Se responde exactamente igual que a una pregunta con 'Why' (explicando el motivo)."
      },
      commonMistake: {
        wrong: "How come did you miss the flight?",
        right: "How come you missed the flight?",
        why: "'How come' NO usa inversión auxiliar. El verbo se conjuga en pasado ('you missed') directamente como en una afirmación."
      },
      architectTip: "¡Esta es una joya de examen avanzado! Después de 'How come', el orden de las palabras es idéntico al de una oración positiva normal: Sujeto + Verbo."
    },

    // --- COMBINACIONES WHAT ---
    {
      id: "what-time",
      word: "What time",
      category: "what_family",
      translation: "¿A qué hora?",
      target: "Horas exactas de reloj",
      summary: "Pregunta por el momento específico del reloj en que ocurre un evento.",
      concept: "A diferencia de 'When' (que admite días, años o épocas), 'What time' exige una hora precisa (números y minutos).",
      formula: "What time + be + sujeto?  O  What time + aux + sujeto + verbo?",
      examples: [
        { en: "What time is it?", es: "¿Qué hora es?", audio: "What time is it?", note: "La pregunta básica para consultar la hora." },
        { en: "What time does the supermarket close?", es: "¿A qué hora cierra el supermercado?", audio: "What time does the supermarket close?", note: "Horario de comercio con 'does'." },
        { en: "What time did you wake up this morning?", es: "¿A qué hora te despertaste esta mañana?", audio: "What time did you wake up this morning?", note: "Evento puntual en pasado." }
      ],
      howToAnswer: {
        short: "At 7:30. / Around nine.",
        full: "The store closes at 9:00 PM.",
        tip: "Las horas exactas se introducen SIEMPRE con la preposición 'AT' ('at five o'clock', 'at 8:15')."
      },
      commonMistake: {
        wrong: "At what hour does it start?",
        right: "What time does it start?",
        why: "'At what hour' es una traducción literal y arcaica del español. En inglés moderno se dice 'What time'."
      },
      architectTip: "Para consultar la hora: 'What time is it?' o 'What's the time?'. Ambas son impecables."
    },
    {
      id: "what-kind-of",
      word: "What kind / type / sort of",
      category: "what_family",
      translation: "¿Qué tipo de? / ¿Qué clase de?",
      target: "Categorías, géneros, estilos o clasificaciones",
      summary: "Pregunta por la variedad o clase dentro de una categoría más amplia.",
      concept: "'Kind', 'type' y 'sort' son sinónimos casi exactos en este contexto. 'What kind of' es el más común en inglés general; 'What type of' suena un toque más técnico/formal.",
      formula: "What kind of + sustantivo + aux + sujeto + verbo?",
      examples: [
        { en: "What kind of music do you like?", es: "¿Qué tipo de música te gusta?", audio: "What kind of music do you like?", note: "Gustos personales en Present Simple." },
        { en: "What type of computer do you need?", es: "¿Qué tipo de computadora necesitas?", audio: "What type of computer do you need?", note: "Clasificación de producto." },
        { en: "What sort of person is he?", es: "¿Qué clase de persona es él?", audio: "What sort of person is he?", note: "Carácter con 'sort of'." }
      ],
      howToAnswer: {
        short: "Rock and jazz. / A lightweight laptop.",
        full: "I mostly listen to indie rock.",
        tip: "La respuesta suele ser un adjetivo o una subclase ('horror movies', 'vegetarian food')."
      },
      commonMistake: {
        wrong: "What kind music do you like?",
        right: "What kind of music do you like?",
        why: "La preposición 'of' es obligatoria para conectar la palabra clasificadora con el sustantivo."
      },
      architectTip: "En plural podés decir: 'What kinds of sports do you play?'. El sustantivo 'kinds' adopta el plural sin problema."
    },
    {
      id: "what-like",
      word: "What ... like?",
      category: "what_family",
      translation: "¿Cómo es...? (Descripción general)",
      target: "Descripción de personalidad, clima, experiencia o apariencia de un lugar",
      summary: "Pregunta por una descripción general de las cualidades, ambiente o naturaleza de algo o alguien.",
      concept: "¡Trampa monumental para hispanohablantes! En español preguntamos '¿Cómo es París?' o '¿Cómo es tu nuevo jefe?'. En inglés NUNCA se usa HOW para eso; se usa 'What is [X] like?'. Aquí 'like' NO es el verbo gustar, sino una preposición que significa 'como / similar a'.",
      formula: "What + be (am/is/are/was/were) + sujeto + like?",
      examples: [
        { en: "What is London like?", es: "¿Cómo es Londres?", audio: "What is London like?", note: "Descripción del ambiente y la ciudad." },
        { en: "What was the weather like yesterday?", es: "¿Cómo estuvo el clima ayer?", audio: "What was the weather like yesterday?", note: "Clima pasado con 'was'." },
        { en: "What is your new boss like?", es: "¿Cómo es tu nuevo jefe (su personalidad)?", audio: "What is your new boss like?", note: "Personalidad / carácter." }
      ],
      howToAnswer: {
        short: "It's big and vibrant. / Very friendly. / Cold and rainy.",
        full: "London is historic, busy and fascinating.",
        tip: "Se responde con adjetivos descriptivos ('She is generous', 'It was awesome'). Nunca respondas con 'like'."
      },
      commonMistake: {
        wrong: "How is London?",
        right: "What is London like?",
        why: "'How is London?' suena a que estás preguntando por la salud o el estado momentáneo de una persona llamada London. Para conocer cómo es un lugar o persona en general, es 'What is it like?'."
      },
      architectTip: "Diferenciá las 3 preguntas hermanas:\n1. 'What does he look like?' = Su apariencia física (alto, rubio).\n2. 'What is he like?' = Su personalidad (simpático, estricto).\n3. 'What does he like?' = Sus gustos y pasatiempos (le gusta el cine)."
    },
    {
      id: "what-for",
      word: "What ... for?",
      category: "what_family",
      translation: "¿Para qué? / ¿Con qué propósito?",
      target: "Propósito, finalidad o utilidad de una cosa o acción",
      summary: "Equivalente conversacional a 'Why', pero enfocado específicamente en la finalidad práctica.",
      concept: "La preposición 'for' se sitúa al final de la oración. Pregunta literalmente '¿Para qué sirve esto?' o '¿Con qué intención hiciste eso?'.",
      formula: "What + be + sujeto + for?  O  What + aux + sujeto + verbo + for?",
      examples: [
        { en: "What is this red button for?", es: "¿Para qué sirve este botón rojo?", audio: "What is this red button for?", note: "Propósito de un dispositivo." },
        { en: "What did you do that for?", es: "¿Para qué hiciste eso?", audio: "What did you do that for?", note: "Intención de una acción pasada." },
        { en: "What do you need this password for?", es: "¿Para qué necesitas esta contraseña?", audio: "What do you need this password for?", note: "Finalidad con 'need'." }
      ],
      howToAnswer: {
        short: "It's for emergencies. / To restart the system.",
        full: "This button is used for stopping the engine.",
        tip: "Se responde habitualmente con 'It's for + verbo-ing / sustantivo' o con 'To + verbo base'."
      },
      commonMistake: {
        wrong: "For what is this tool?",
        right: "What is this tool for?",
        why: "Nuevamente, la preposición 'for' va al final, no al inicio."
      },
      architectTip: "'What... for?' busca la utilidad o el propósito ('¿Para qué?'). 'Why' indaga la causa o el antecedente ('¿Por qué?'). Ambos se tocan, pero 'What for' es más instrumental."
    }
  ],

  // 2. The Master Anatomy & Formulas (Q-A-S-M & 6 Structural Patterns)
  qasm: {
    title: "La Regla de Oro: Q-A-S-M (o ASI)",
    explanation: "En español conjugamos el verbo principal con tanta información que no necesitamos auxiliares ('¿Vives en Córdoba?'). En inglés, el verbo casi no cambia ('live'), por lo que el idioma necesita obligatoriamente un **auxiliar** que funcione como semáforo para el cerebro: le avisa quién actúa y en qué tiempo verbal ocurre la acción.",
    acronym: [
      { letter: "Q", name: "Question Word", color: "terracotta", role: "Palabra interrogativa", examples: "What, Where, When, Why, Who..." },
      { letter: "A", name: "Auxiliary / Be", color: "teal", role: "Verbo auxiliar o forma de BE", examples: "do, does, did, can, are, is, have..." },
      { letter: "S", name: "Subject", color: "indigo", role: "El sujeto que realiza la acción", examples: "you, she, your brother, they..." },
      { letter: "M", name: "Main Verb", color: "forest", role: "Verbo principal (en forma base)", examples: "live, work, go, see, understand..." }
    ],
    formulas: [
      {
        id: "f-be",
        title: "1. Con el Verbo TO BE (Presente y Pasado)",
        tense: "Presente / Pasado Simple con BE",
        rule: "El verbo BE es autosuficiente: no necesita 'do' ni 'did'. Él mismo actúa como auxiliar e invierte su posición con el sujeto.",
        pattern: "WH + BE (am / is / are / was / were) + SUJETO + COMPLEMENTO?",
        slots: ["WH", "BE", "SUJETO", "COMPLEMENTO"],
        examples: [
          { q: "Where are you from?", parts: ["Where", "are", "you", "from?"] },
          { q: "Why was he late yesterday?", parts: ["Why", "was", "he", "late yesterday?"] },
          { q: "What is your phone number?", parts: ["What", "is", "your phone number", "—"] }
        ],
        trap: "Nunca digas 'Where do you are?'. El verbo BE y el auxiliar DO se repelen como imanes opuestos; jamás van juntos en una misma cláusula simple."
      },
      {
        id: "f-present-simple",
        title: "2. Presente Simple (con DO y DOES)",
        tense: "Present Simple",
        rule: "Se usa DO para (I, you, we, they) y DOES para (he, she, it). El verbo principal va SIEMPRE en forma infinitiva base.",
        pattern: "WH + DO / DOES + SUJETO + VERBO BASE + COMPLEMENTO?",
        slots: ["WH", "DO/DOES", "SUJETO", "VERBO BASE", "COMPLEMENTO"],
        examples: [
          { q: "Where do you work?", parts: ["Where", "do", "you", "work", "—"] },
          { q: "What time does she finish her shift?", parts: ["What time", "does", "she", "finish", "her shift?"] },
          { q: "Why do they study German?", parts: ["Why", "do", "they", "study", "German?"] }
        ],
        trap: "¡Cuidado con la 's'! DOES es el 'ladrón de la S'. Como DOES ya tiene la 's', el verbo principal queda limpio: 'Where does she LIVE?' (NUNCA 'Where does she lives?')."
      },
      {
        id: "f-past-simple",
        title: "3. Pasado Simple (con DID)",
        tense: "Past Simple",
        rule: "Para todas las personas gramaticales se usa el auxiliar DID. El verbo principal va SIEMPRE en su forma presente base.",
        pattern: "WH + DID + SUJETO + VERBO BASE + COMPLEMENTO?",
        slots: ["WH", "DID", "SUJETO", "VERBO BASE", "COMPLEMENTO"],
        examples: [
          { q: "When did you buy that laptop?", parts: ["When", "did", "you", "buy", "that laptop?"] },
          { q: "Where did they go on vacation?", parts: ["Where", "did", "they", "go", "on vacation?"] },
          { q: "Why did she leave so early?", parts: ["Why", "did", "she", "leave", "so early?"] }
        ],
        trap: "DID es el 'ladrón del pasado'. Si ya pusiste DID, tu verbo NO puede ir en pasado: 'Where did you GO?' (NUNCA 'Where did you went?')."
      },
      {
        id: "f-modals",
        title: "4. Con Verbos Modales (CAN, SHOULD, COULD, WILL...)",
        tense: "Modals & Future",
        rule: "El verbo modal ocupa la casilla del auxiliar. No cambia de forma según la persona y el verbo principal queda en forma base pura.",
        pattern: "WH + MODAL + SUJETO + VERBO BASE + COMPLEMENTO?",
        slots: ["WH", "MODAL", "SUJETO", "VERBO BASE", "COMPLEMENTO"],
        examples: [
          { q: "What can I do for you?", parts: ["What", "can", "I", "do", "for you?"] },
          { q: "Where should we go tonight?", parts: ["Where", "should", "we", "go", "tonight?"] },
          { q: "How will they solve this problem?", parts: ["How", "will", "they", "solve", "this problem?"] }
        ],
        trap: "Nunca pongas 'to' después del modal: 'Where should we go?' (NO 'Where should we to go?')."
      },
      {
        id: "f-continuous",
        title: "5. Tiempos Continuos (Present & Past Continuous)",
        tense: "Continuous (-ING)",
        rule: "BE actúa como auxiliar conjugado (am/is/are/was/were) y el verbo principal lleva obligatoriamente la terminación -ING.",
        pattern: "WH + BE + SUJETO + VERBO-ING + COMPLEMENTO?",
        slots: ["WH", "BE", "SUJETO", "VERBO-ING", "COMPLEMENTO"],
        examples: [
          { q: "What are you watching right now?", parts: ["What", "are", "you", "watching", "right now?"] },
          { q: "Where was she driving at that time?", parts: ["Where", "was", "she", "driving", "at that time?"] },
          { q: "Who are they talking to?", parts: ["Who", "are", "they", "talking", "to?"] }
        ],
        trap: "No confundas el presente continuo ('What are you doing?') con el presente simple de hábitos ('What do you do?')."
      },
      {
        id: "f-perfect",
        title: "6. Presente Perfecto (con HAVE y HAS)",
        tense: "Present Perfect",
        rule: "HAVE o HAS ocupan el casillero de auxiliar. El verbo principal va en Participio Pasado (3ra columna de verbos irregulares o -ed).",
        pattern: "WH + HAVE / HAS + SUJETO + PARTICIPIO PASADO + COMPLEMENTO?",
        slots: ["WH", "HAVE/HAS", "SUJETO", "PARTICIPIO", "COMPLEMENTO"],
        examples: [
          { q: "Where have you been all day?", parts: ["Where", "have", "you", "been", "all day?"] },
          { q: "What has he done to the car?", parts: ["What", "has", "he", "done", "to the car?"] },
          { q: "How long have they worked here?", parts: ["How long", "have", "they", "worked", "here?"] }
        ],
        trap: "Si la acción ocurrió en un momento cerrado y específico del pasado (yesterday, in 2020), no uses Present Perfect: usá Past Simple con DID."
      }
    ]
  },

  // 3. The 2 Big Exceptions: Subject Questions & Preposition Stranding
  advancedPatterns: {
    subjectVsObject: {
      title: "La Gran Batalla: Subject Questions vs Object Questions",
      coreConcept: "Esta es la distinción que separa a un principiante de alguien que realmente comprende la lógica profunda del inglés.",
      table: [
        {
          feature: "¿Quién es la palabra WH?",
          object: "El OBJETO (quien recibe la acción)",
          subject: "El SUJETO (quien realiza la acción)"
        },
        {
          feature: "¿Lleva auxiliar (DO/DOES/DID)?",
          object: "SÍ, 100% OBLIGATORIO",
          subject: "NO, ESTRICTAMENTE PROHIBIDO"
        },
        {
          feature: "¿Cómo se conjuga el verbo?",
          object: "En forma base limpia (el auxiliar absorbe el tiempo)",
          subject: "Se conjuga DIRECTAMENTE en pasado o con -s"
        },
        {
          feature: "Ejemplo clásico en pasado",
          object: "Who did you call? (Vos llamaste a alguien)",
          subject: "Who called you? (Alguien te llamó a vos)"
        },
        {
          feature: "Pregunta con 'What'",
          object: "What did you say? (Vos dijiste algo)",
          subject: "What happened? (Algo ocurrió)"
        }
      ],
      deepDive: [
        {
          scenario: "Escenario A: Quién hizo la llamada",
          statement: "Peter called Sarah.",
          qObject: {
            q: "Who did Peter call?",
            translation: "¿A quién llamó Peter?",
            answer: "Sarah.",
            explanation: "Peter es el sujeto. Como ya tenemos sujeto ('Peter'), la palabra 'Who' busca el objeto. Por lo tanto, el auxiliar 'did' es OBLIGATORIO."
          },
          qSubject: {
            q: "Who called Sarah?",
            translation: "¿Quién llamó a Sarah?",
            answer: "Peter.",
            explanation: "No sabemos quién hizo la llamada: 'Who' ocupa el lugar del sujeto. Como 'Who' es el sujeto, NO lleva 'did' y el verbo se conjuga en pasado ('called')."
          }
        },
        {
          scenario: "Escenario B: El auto y el accidente",
          statement: "A tree hit the red car.",
          qObject: {
            q: "What did the tree hit?",
            translation: "¿Qué golpeó el árbol?",
            answer: "The red car.",
            explanation: "El árbol es el sujeto conocido. 'What' busca el objeto impactado -> necesita 'did'."
          },
          qSubject: {
            q: "What hit the red car?",
            translation: "¿Qué golpeó al auto rojo?",
            answer: "A tree.",
            explanation: "'What' es la entidad que provocó el golpe -> actúa de sujeto, NO lleva 'did'."
          }
        }
      ],
      goldenRule: "Regla mnemotécnica del Senior: Si la palabra WH reemplaza a quien REALIZA el verbo, no uses auxiliar; conjugá el verbo como en una afirmación ('Who broke this?'). Si el sujeto ya está en la frase ('you', 'she', 'John'), el auxiliar es obligatorio ('Who did you see?')."
    },

    prepositionStranding: {
      title: "Preposiciones al Final (Preposition Stranding)",
      coreConcept: "En español las preposiciones viajan al inicio ('¿De dónde vienes?', '¿Con quién hablas?'). En inglés hablado moderno, las preposiciones quedan 'varadas' (stranded) al final de la pregunta.",
      examples: [
        { question: "Where are you from?", literalEs: "¿Dónde eres de?", naturalEs: "¿De dónde eres?", prep: "from" },
        { question: "Who are you talking to?", literalEs: "¿Quién estás hablando a?", naturalEs: "¿Con quién estás hablando?", prep: "to" },
        { question: "What are you listening to?", literalEs: "¿Qué estás escuchando a?", naturalEs: "¿Qué estás escuchando?", prep: "to" },
        { question: "What are you looking for?", literalEs: "¿Qué estás buscando por?", naturalEs: "¿Qué estás buscando?", prep: "for" },
        { question: "Who did you go with?", literalEs: "¿Quién fuiste con?", naturalEs: "¿Con quién fuiste?", prep: "with" },
        { question: "What is this story about?", literalEs: "¿Qué es esta historia sobre?", naturalEs: "¿De qué trata esta historia?", prep: "about" }
      ],
      comparison: {
        modern: "Who did you give the keys to?",
        formalArchaic: "To whom did you give the keys?",
        verdict: "Ambas son gramaticalmente correctas, pero en la vida real, el 99% de los nativos utiliza la forma moderna con la preposición al final. Abrir con 'To whom' suena a tribunal del siglo XIX."
      }
    }
  },

  // 4. How to Ask & How to Answer (The Conversational Logic)
  qaPatterns: {
    title: "Matriz de Preguntas y Respuestas Naturales",
    intro: "Aprender a preguntar es solo la mitad de la batalla. La otra mitad es saber cómo responder con precisión y naturalidad, evitando sonar como un robot de libro de texto.",
    matrix: [
      {
        wh: "Why",
        asked: "Why are you taking an umbrella?",
        howToAnswer: "Because + oración completa  O  To + verbo base (propósito)",
        naturalAnswers: ["Because it's raining.", "To stay dry."],
        avoid: "Evitá responder con 'For + verbo-ing' para propósitos personales (NO digas 'For stay dry')."
      },
      {
        wh: "What time",
        asked: "What time does the movie start?",
        howToAnswer: "At + hora exacta de reloj",
        naturalAnswers: ["At 8:15.", "At half past eight."],
        avoid: "No digas 'In 8:15' ni 'On 8:15'. Las horas exactas siempre llevan AT."
      },
      {
        wh: "When",
        asked: "When is the project due?",
        howToAnswer: "On + día/fecha  |  In + mes/año  |  Next week / Tomorrow",
        naturalAnswers: ["On Monday.", "In December.", "Next Friday."],
        avoid: "Recordá: 'on' para días específicos, 'in' para períodos amplios."
      },
      {
        wh: "How long",
        asked: "How long have you lived in London?",
        howToAnswer: "For + duración acumulada  |  Since + punto de partida",
        naturalAnswers: ["For five years.", "Since 2019."],
        avoid: "No uses 'since' con duraciones (NO 'since 5 years'). Usa 'for 5 years'."
      },
      {
        wh: "How often",
        asked: "How often do you travel abroad?",
        howToAnswer: "Adverbio de frecuencia  |  Expresión temporal (Once/Twice a...)",
        naturalAnswers: ["Once a year.", "Rarely.", "Every summer."],
        avoid: "No digas 'one time a year'; la palabra nativa es 'once'. Para 2 veces es 'twice'."
      },
      {
        wh: "Whose",
        asked: "Whose umbrella is this?",
        howToAnswer: "Pronombre posesivo (mine/hers)  |  Nombre + 's",
        naturalAnswers: ["It's mine.", "It's Laura's."],
        avoid: "No digas 'It's of Laura'. En inglés la posesión se marca con el genitivo 's."
      },
      {
        wh: "Which",
        asked: "Which laptop do you recommend?",
        howToAnswer: "The + adjetivo + ONE / ONES",
        naturalAnswers: ["The silver one.", "The one with 16GB of RAM."],
        avoid: "No repitas el sustantivo entero tres veces; usá 'one' para referirte al elemento elegido."
      }
    ],
    intonation: {
      rule: "Fonética y Entonación de las WH Questions",
      explanation: "A diferencia de las preguntas de 'Yes/No' que suben de tono al final (↗ rising intonation: 'Are you ready? ↗'), las **WH Questions tienen entonación descendente (↘ falling intonation)**. El pico de voz se da en la palabra WH o en el verbo, y la melodía cae suavemente al final.",
      example: "Where do you LIVE? ↘  (No cantes hacia arriba al final; terminá con un tono seguro y descendente)."
    }
  },

  // 5. Interactive Builder Challenges (12 Challenges)
  builderChallenges: [
    {
      id: "bc-1",
      title: "Reto 1: Rutina de Presente Simple",
      promptEs: "¿Dónde vive tu hermano?",
      targetSentence: "Where does your brother live?",
      category: "Present Simple",
      slots: [
        { slot: "wh", correct: "Where", options: ["Where", "What", "When", "Which"] },
        { slot: "aux", correct: "does", options: ["does", "do", "is", "did"] },
        { slot: "subj", correct: "your brother", options: ["your brother", "he brother", "you brother"] },
        { slot: "verb", correct: "live", options: ["live", "lives", "living"] },
        { slot: "comp", correct: "", options: ["", "now", "there"] }
      ],
      explanation: "'Your brother' equivale a HE (tercera persona), por lo que requiere el auxiliar DOES. Al usar DOES, el verbo principal queda en forma base 'live', sin la 's'."
    },
    {
      id: "bc-2",
      title: "Reto 2: Pregunta con Verbo BE",
      promptEs: "¿Por qué llegaste tarde a la clase?",
      targetSentence: "Why were you late for class?",
      category: "Past BE",
      slots: [
        { slot: "wh", correct: "Why", options: ["Why", "How", "When", "What"] },
        { slot: "aux", correct: "were", options: ["were", "did", "was", "are"] },
        { slot: "subj", correct: "you", options: ["you", "your", "they"] },
        { slot: "verb", correct: "late", options: ["late", "lately", "delay"] },
        { slot: "comp", correct: "for class?", options: ["for class?", "to class?", "at class?"] }
      ],
      explanation: "Con el adjetivo 'late' se utiliza el verbo TO BE en pasado. Con el sujeto 'you', la forma correcta es 'were'. No se usa 'did'."
    },
    {
      id: "bc-3",
      title: "Reto 3: Pregunta de Sujeto en Pasado",
      promptEs: "¿Quién rompió la ventana?",
      targetSentence: "Who broke the window?",
      category: "Subject Question",
      slots: [
        { slot: "wh", correct: "Who", options: ["Who", "Whom", "Whose", "What"] },
        { slot: "aux", correct: "", options: ["", "did", "does", "was"] },
        { slot: "subj", correct: "", options: ["", "the person", "someone"] },
        { slot: "verb", correct: "broke", options: ["broke", "break", "broken", "did break"] },
        { slot: "comp", correct: "the window?", options: ["the window?", "to the window?", "window?"] }
      ],
      explanation: "¡Atención! 'Who' es el sujeto que cometió la acción. Al ser una PREGUNTA DE SUJETO, NO lleva auxiliar 'did' y el verbo se conjuga directamente en pasado simple ('broke')."
    },
    {
      id: "bc-4",
      title: "Reto 4: Preposición al Final",
      promptEs: "¿Con quién estás hablando?",
      targetSentence: "Who are you talking to?",
      category: "Preposition Stranding",
      slots: [
        { slot: "wh", correct: "Who", options: ["Who", "With who", "Whom", "What"] },
        { slot: "aux", correct: "are", options: ["are", "do", "is", "have"] },
        { slot: "subj", correct: "you", options: ["you", "he", "they"] },
        { slot: "verb", correct: "talking", options: ["talking", "talk", "talked"] },
        { slot: "comp", correct: "to?", options: ["to?", "with to?", "at?", "for?"] }
      ],
      explanation: "En inglés moderno la preposición 'to' (o 'with') viaja al final absoluto de la pregunta: 'Who are you talking to?'."
    },
    {
      id: "bc-5",
      title: "Reto 5: Descripción general con 'What ... like?'",
      promptEs: "¿Cómo es el clima en Londres?",
      targetSentence: "What is the weather like in London?",
      category: "What ... like?",
      slots: [
        { slot: "wh", correct: "What", options: ["What", "How", "Which", "Where"] },
        { slot: "aux", correct: "is", options: ["is", "does", "are", "be"] },
        { slot: "subj", correct: "the weather", options: ["the weather", "weather", "it weather"] },
        { slot: "verb", correct: "like", options: ["like", "likes", "looking"] },
        { slot: "comp", correct: "in London?", options: ["in London?", "at London?", "to London?"] }
      ],
      explanation: "Para preguntar por la descripción o características de algo (el clima, una ciudad) se utiliza la estructura 'What + is + sujeto + like?'. Nunca se usa 'How is the weather like?'."
    },
    {
      id: "bc-6",
      title: "Reto 6: Frecuencia de Hábitos",
      promptEs: "¿Cada cuánto vas al gimnasio?",
      targetSentence: "How often do you go to the gym?",
      category: "How Family",
      slots: [
        { slot: "wh", correct: "How often", options: ["How often", "How much", "How many", "How long"] },
        { slot: "aux", correct: "do", options: ["do", "does", "are", "did"] },
        { slot: "subj", correct: "you", options: ["you", "your", "they"] },
        { slot: "verb", correct: "go", options: ["go", "goes", "going"] },
        { slot: "comp", correct: "to the gym?", options: ["to the gym?", "at the gym?", "gym?"] }
      ],
      explanation: "'How often' pregunta por frecuencia. Requiere el auxiliar 'do' para el sujeto 'you' y el verbo base 'go'."
    },
    {
      id: "bc-7",
      title: "Reto 7: Posesión con 'Whose'",
      promptEs: "¿De quién es esta campera?",
      targetSentence: "Whose jacket is this?",
      category: "Possession",
      slots: [
        { slot: "wh", correct: "Whose", options: ["Whose", "Who's", "Who", "Whom"] },
        { slot: "aux", correct: "jacket", options: ["jacket", "is", "car", "are"] },
        { slot: "subj", correct: "is", options: ["is", "are", "does", "was"] },
        { slot: "verb", correct: "this?", options: ["this?", "these?", "that?", "it?"] },
        { slot: "comp", correct: "", options: ["", "here?", "mine?"] }
      ],
      explanation: "'Whose' indica posesión (no confundir con 'Who's' = Who is). Se acompaña directamente del sustantivo 'jacket' y luego el verbo 'is this?'."
    },
    {
      id: "bc-8",
      title: "Reto 8: Duración con 'How long'",
      promptEs: "¿Cuánto dura la película?",
      targetSentence: "How long does the movie last?",
      category: "How Family",
      slots: [
        { slot: "wh", correct: "How long", options: ["How long", "How much", "What time", "When"] },
        { slot: "aux", correct: "does", options: ["does", "is", "do", "has"] },
        { slot: "subj", correct: "the movie", options: ["the movie", "movie", "it movie"] },
        { slot: "verb", correct: "last?", options: ["last?", "lasts?", "lasting?", "duration?"] },
        { slot: "comp", correct: "", options: ["", "time?", "hours?"] }
      ],
      explanation: "'How long' indaga la duración en el tiempo. Como 'the movie' es 3ra persona singular (it), el auxiliar es 'does' y el verbo 'last' queda en forma base."
    },
    {
      id: "bc-9",
      title: "Reto 9: Elección entre opciones limitadas",
      promptEs: "¿Cuál de estos dos autos prefieres?",
      targetSentence: "Which car do you prefer?",
      category: "Choice",
      slots: [
        { slot: "wh", correct: "Which", options: ["Which", "What", "Whose", "How"] },
        { slot: "aux", correct: "car do", options: ["car do", "car does", "do", "car is"] },
        { slot: "subj", correct: "you", options: ["you", "your", "they"] },
        { slot: "verb", correct: "prefer?", options: ["prefer?", "prefers?", "preferring?"] },
        { slot: "comp", correct: "", options: ["", "best?", "more?"] }
      ],
      explanation: "Cuando las opciones están acotadas y visibles, se usa 'Which' en lugar de 'What'."
    },
    {
      id: "bc-10",
      title: "Reto 10: Objeto en Pasado con DID",
      promptEs: "¿A qué hora te despertaste ayer?",
      targetSentence: "What time did you wake up yesterday?",
      category: "Past Simple",
      slots: [
        { slot: "wh", correct: "What time", options: ["What time", "When", "How time", "Which hour"] },
        { slot: "aux", correct: "did", options: ["did", "do", "were", "was"] },
        { slot: "subj", correct: "you", options: ["you", "your", "he"] },
        { slot: "verb", correct: "wake up", options: ["wake up", "woke up", "woken up"] },
        { slot: "comp", correct: "yesterday?", options: ["yesterday?", "tomorrow?", "today?"] }
      ],
      explanation: "El auxiliar 'did' indica que la acción es en pasado. Por eso el verbo frasal debe quedar en su forma presente base 'wake up', jamás 'woke up'."
    },
    {
      id: "bc-11",
      title: "Reto 11: Pregunta de Sujeto con 'What'",
      promptEs: "¿Qué pasó anoche?",
      targetSentence: "What happened last night?",
      category: "Subject Question",
      slots: [
        { slot: "wh", correct: "What", options: ["What", "Which", "Why", "How"] },
        { slot: "aux", correct: "", options: ["", "did", "does", "was"] },
        { slot: "subj", correct: "", options: ["", "it", "thing"] },
        { slot: "verb", correct: "happened", options: ["happened", "happen", "did happen"] },
        { slot: "comp", correct: "last night?", options: ["last night?", "yesterday night?", "night?"] }
      ],
      explanation: "'What' es el sujeto que ejecutó el acontecimiento. No lleva auxiliar 'did'; el verbo 'happened' se conjuga directamente con -ed."
    },
    {
      id: "bc-12",
      title: "Reto 12: Pregunta con Modal 'Can'",
      promptEs: "¿Dónde puedo comprar boletos de tren?",
      targetSentence: "Where can I buy train tickets?",
      category: "Modal Verbs",
      slots: [
        { slot: "wh", correct: "Where", options: ["Where", "When", "How", "What"] },
        { slot: "aux", correct: "can", options: ["can", "do", "could", "may"] },
        { slot: "subj", correct: "I", options: ["I", "me", "my"] },
        { slot: "verb", correct: "buy", options: ["buy", "to buy", "buying"] },
        { slot: "comp", correct: "train tickets?", options: ["train tickets?", "for train tickets?", "tickets train?"] }
      ],
      explanation: "El verbo modal 'can' se ubica directamente en la posición de auxiliar. El verbo principal 'buy' va en infinitivo sin 'to'."
    }
  ],

  // 6. Conversational Dialogues (Situational Practice)
  dialogues: [
    {
      id: "d-1",
      situation: "En una cafetería en Londres (Coffee Shop)",
      partner: "Barista",
      avatar: "☕",
      exchange: [
        { speaker: "Barista", text: "Good morning! What can I get for you today?" },
        {
          speaker: "You",
          options: [
            { text: "A medium flat white and a croissant, please.", correct: true, feedback: "¡Perfecto! Respuesta directa, natural y cortés con 'please'." },
            { text: "Yes, I can.", correct: false, feedback: "Error: 'What can I get...?' es una pregunta abierta, no una pregunta de Yes/No." },
            { text: "Because I am hungry.", correct: false, feedback: "Error: No te preguntaron 'Why', sino 'What'." }
          ]
        },
        { speaker: "Barista", text: "Great. Which milk would you like: whole, skimmed, or oat?" },
        {
          speaker: "You",
          options: [
            { text: "Oat milk, please.", correct: true, feedback: "¡Excelente! Respondiste a una pregunta de opción cerrada con 'Which'." },
            { text: "Yes, I like milk.", correct: false, feedback: "'Which' te pide elegir una alternativa específica entre las presentadas." }
          ]
        }
      ]
    },
    {
      id: "d-2",
      situation: "Entrevista laboral (Job Interview)",
      partner: "Interviewer",
      avatar: "💼",
      exchange: [
        { speaker: "Interviewer", text: "Thank you for coming. Why are you interested in this position?" },
        {
          speaker: "You",
          options: [
            { text: "Because your company works with cutting-edge tech and I want to grow as an engineer.", correct: true, feedback: "¡Impecable! Estructura de causa y motivación con 'Because'." },
            { text: "At 9 o'clock tomorrow.", correct: false, feedback: "Eso responde a 'What time', no a 'Why'." },
            { text: "Yes, I am very interested.", correct: false, feedback: "Respuesta incompleta: 'Why' exige explicar el motivo o propósito." }
          ]
        },
        { speaker: "Interviewer", text: "How long have you been working with JavaScript and PHP?" },
        {
          speaker: "You",
          options: [
            { text: "For about five years, building web applications.", correct: true, feedback: "¡Brillante! 'How long' con Present Perfect se responde con 'For + duración'." },
            { text: "Yes, I work very fast.", correct: false, feedback: "Confundiste 'How long' (tiempo) con 'How fast' o habilidad." }
          ]
        }
      ]
    },
    {
      id: "d-3",
      situation: "En el mostrador del aeropuerto (Airport Check-in)",
      partner: "Agent",
      avatar: "✈️",
      exchange: [
        { speaker: "Agent", text: "Good afternoon. Where are you flying today?" },
        {
          speaker: "You",
          options: [
            { text: "To Chicago, with a layover in Miami.", correct: true, feedback: "¡Genial! Destino espacial claro para 'Where'." },
            { text: "With my family.", correct: false, feedback: "Eso responde a 'Who are you traveling with?'." },
            { text: "At 3:30 PM.", correct: false, feedback: "Eso responde a 'What time is your flight?'." }
          ]
        },
        { speaker: "Agent", text: "How many bags are you checking in?" },
        {
          speaker: "You",
          options: [
            { text: "Just one suitcase and this backpack as carry-on.", correct: true, feedback: "¡Exacto! 'How many' cuenta unidades contables (bags)." },
            { text: "It costs $50.", correct: false, feedback: "Eso respondería a 'How much is it?'." }
          ]
        }
      ]
    },
    {
      id: "d-4",
      situation: "Haciendo amigos / Conociendo a un colega (Socializing)",
      partner: "Alex",
      avatar: "👋",
      exchange: [
        { speaker: "Alex", text: "Nice to meet you! How long have you lived in this neighborhood?" },
        {
          speaker: "You",
          options: [
            { text: "Since last year. I moved here in November.", correct: true, feedback: "¡Perfecto! 'Since + punto temporal' es la respuesta clásica para 'How long'." },
            { text: "In my apartment.", correct: false, feedback: "Eso responde a 'Where do you live?'." }
          ]
        },
        { speaker: "Alex", text: "Awesome! What do you like doing on weekends around here?" },
        {
          speaker: "You",
          options: [
            { text: "I usually go running in the park and visit local coffee shops.", correct: true, feedback: "¡Excelente! 'What do you like doing' pregunta por actividades y pasatiempos." },
            { text: "I am fine, thanks.", correct: false, feedback: "Confundiste la pregunta con 'How are you?'." }
          ]
        }
      ]
    }
  ],

  // 7. Practice Exercises (25 Questions across 4 Levels)
  exercises: [
    // --- Nivel 1: Identificar la palabra WH correcta ---
    {
      id: "ex-1",
      level: 1,
      category: "Identificación de WH",
      question: "_____ is your favorite day of the week? — Friday, definitely!",
      options: ["Which / What", "Where", "Who", "How long"],
      answer: "Which / What",
      explanation: "Pregunta por una preferencia entre días. 'What' o 'Which' son los indicados para identificar una opción o cosa."
    },
    {
      id: "ex-2",
      level: 1,
      category: "Identificación de WH",
      question: "_____ did you put my car keys? — On the kitchen table.",
      options: ["Where", "When", "Why", "Whose"],
      answer: "Where",
      explanation: "La respuesta ('On the kitchen table') señala un lugar físico, por lo que la pregunta exige 'Where'."
    },
    {
      id: "ex-3",
      level: 1,
      category: "Identificación de WH",
      question: "_____ jacket is this on the chair? — It's David's.",
      options: ["Whose", "Who's", "Who", "Whom"],
      answer: "Whose",
      explanation: "La respuesta indica pertenencia con genitivo ('David's'). La palabra interrogativa de posesión es 'Whose' (sin apóstrofe)."
    },
    {
      id: "ex-4",
      level: 1,
      category: "Identificación de WH",
      question: "_____ coffee do you drink in the morning? — Just one cup.",
      options: ["How much", "How many", "How often", "How long"],
      answer: "How much",
      explanation: "'Coffee' es un sustantivo incontable. Las cantidades incontables se preguntan con 'How much'."
    },
    {
      id: "ex-5",
      level: 1,
      category: "Identificación de WH",
      question: "_____ books did you buy at the fair? — Three novel books.",
      options: ["How many", "How much", "How often", "How long"],
      answer: "How many",
      explanation: "'Books' es un sustantivo plural contable; se pregunta obligatoriamente con 'How many'."
    },
    {
      id: "ex-6",
      level: 1,
      category: "Identificación de WH",
      question: "_____ are you crying? — Because I just watched a very sad movie.",
      options: ["Why", "When", "Where", "How come"],
      answer: "Why",
      explanation: "La respuesta comienza con 'Because' explicando una causa emocional; la pregunta correspondiente es 'Why'."
    },
    {
      id: "ex-7",
      level: 1,
      category: "Identificación de WH",
      question: "_____ bus goes to the train station: number 4 or number 12?",
      options: ["Which", "What", "Whose", "Where"],
      answer: "Which",
      explanation: "Se presenta una elección explícita entre un conjunto reducido de dos opciones concretas (4 ó 12). La palabra correcta es 'Which'."
    },

    // --- Nivel 2: Detective de Errores Sintácticos (Q-A-S-M) ---
    {
      id: "ex-8",
      level: 2,
      category: "Corrección de Sintaxis",
      question: "¿Cuál de las siguientes oraciones es TOTALMENTE CORRECTA?",
      options: [
        "Where does your sister works?",
        "Where does your sister work?",
        "Where your sister works?",
        "Where do your sister work?"
      ],
      answer: "Where does your sister work?",
      explanation: "'Your sister' es tercera persona singular (requiere DOES). Al estar presente el auxiliar DOES, el verbo principal pierde la 's' y queda en forma base ('work')."
    },
    {
      id: "ex-9",
      level: 2,
      category: "Corrección de Sintaxis",
      question: "¿Cuál oración en pasado simple tiene la estructura correcta?",
      options: [
        "What time did you woke up today?",
        "What time did you wake up today?",
        "What time you woke up today?",
        "What time did you waking up today?"
      ],
      answer: "What time did you wake up today?",
      explanation: "El auxiliar 'did' absorbe el tiempo pasado. El verbo principal debe mantenerse en su forma base 'wake up', no en 'woke'."
    },
    {
      id: "ex-10",
      level: 2,
      category: "Corrección de Sintaxis",
      question: "¿Cómo se pregunta correctamente la edad en inglés?",
      options: [
        "How many years do you have?",
        "How much years are you?",
        "How old are you?",
        "How old do you have?"
      ],
      answer: "How old are you?",
      explanation: "En inglés la edad se concibe como un estado con el verbo TO BE: 'How old are you?'. Decir 'How many years do you have' es una traducción errónea del español."
    },
    {
      id: "ex-11",
      level: 2,
      category: "Corrección de Sintaxis",
      question: "¿Cuál pregunta con verbo TO BE está bien construida?",
      options: [
        "Why do you were absent yesterday?",
        "Why were you absent yesterday?",
        "Why you was absent yesterday?",
        "Why did you be absent yesterday?"
      ],
      answer: "Why were you absent yesterday?",
      explanation: "El verbo TO BE nunca se combina con 'do' ni 'did' en preguntas simples. BE se invierte directamente con el sujeto: 'Why were you absent?'."
    },
    {
      id: "ex-12",
      level: 2,
      category: "Corrección de Sintaxis",
      question: "Encuentra la pregunta correcta con 'How often':",
      options: [
        "How often times do you visit your grandparents?",
        "How often do you visit your grandparents?",
        "How often does you visit your grandparents?",
        "How often you visit your grandparents?"
      ],
      answer: "How often do you visit your grandparents?",
      explanation: "'How often' no lleva la palabra 'times' adentro. Con el sujeto 'you' el auxiliar es 'do' seguido del verbo base 'visit'."
    },

    // --- Nivel 3: Subject vs Object Questions ---
    {
      id: "ex-13",
      level: 3,
      category: "Subject vs Object",
      question: "Situación: Alguien te envió un regalo sorpresa. Quieres saber quién fue el remitente. ¿Qué preguntas?",
      options: [
        "Who did send you this gift?",
        "Who sent you this gift?",
        "Who did you send this gift?",
        "Whom sent you this gift?"
      ],
      answer: "Who sent you this gift?",
      explanation: "'Who' es el sujeto que ejecutó el envío. Al ser una pregunta de sujeto, NO lleva 'did' y el verbo se conjuga en pasado ('sent')."
    },
    {
      id: "ex-14",
      level: 3,
      category: "Subject vs Object",
      question: "Situación: Tu amigo se entrevistó con un famoso actor. Quieres saber a qué actor conoció. ¿Qué preguntas?",
      options: [
        "Who did you meet?",
        "Who met you?",
        "Who you met?",
        "What did meet you?"
      ],
      answer: "Who did you meet?",
      explanation: "El sujeto que fue a la entrevista es 'you'. La palabra 'Who' busca el objeto (a quién conoció). Por lo tanto, el auxiliar 'did' es indispensable."
    },
    {
      id: "ex-15",
      level: 3,
      category: "Subject vs Object",
      question: "Escuchas un ruido fuerte en el salón y preguntas qué ocurrió. ¿Cuál es la forma correcta?",
      options: [
        "What did happen?",
        "What happened?",
        "What was happen?",
        "What does happened?"
      ],
      answer: "What happened?",
      explanation: "'What' actúa como el sujeto del acontecimiento. La fórmula correcta es 'What happened?', sin auxiliar 'did'."
    },
    {
      id: "ex-16",
      level: 3,
      category: "Subject vs Object",
      question: "¿Quién vive en esa casa grande? (Sujeto desconocido en presente). ¿Cuál es la forma correcta?",
      options: [
        "Who does live in that big house?",
        "Who lives in that big house?",
        "Who live in that big house?",
        "Who do live in that big house?"
      ],
      answer: "Who lives in that big house?",
      explanation: "Al no tener auxiliar, 'Who' se conjuga en tercera persona singular afirmativa: 'Who lives in that big house?'."
    },

    // --- Nivel 4: Preposiciones al final & Combinaciones Especiales ---
    {
      id: "ex-17",
      level: 4,
      category: "Preposiciones al Final",
      question: "Quieres saber con quién fue María al cine anoche. ¿Cuál es la forma natural y moderna?",
      options: [
        "With who did Maria go to the cinema?",
        "Who did Maria go to the cinema with?",
        "To who did Maria go to the cinema?",
        "Who went Maria to the cinema with?"
      ],
      answer: "Who did Maria go to the cinema with?",
      explanation: "En inglés cotidiano, la preposición 'with' viaja al final absoluto de la pregunta: 'Who did Maria go to the cinema with?'."
    },
    {
      id: "ex-18",
      level: 4,
      category: "Preposiciones al Final",
      question: "¿De qué trata este nuevo libro? ¿Cuál es la estructura correcta?",
      options: [
        "What is this new book about?",
        "About what is this new book?",
        "What does this new book about?",
        "How is this new book about?"
      ],
      answer: "What is this new book about?",
      explanation: "La preposición 'about' queda al final de la cláusula con el verbo BE: 'What is this book about?'."
    },
    {
      id: "ex-19",
      level: 4,
      category: "What ... like?",
      question: "Quieres saber si tu nuevo profesor es simpático o estricto (su personalidad). ¿Qué preguntas?",
      options: [
        "How is your new teacher?",
        "What does your new teacher like?",
        "What is your new teacher like?",
        "What does your new teacher look like?"
      ],
      answer: "What is your new teacher like?",
      explanation: "'What is [someone] like?' pregunta específicamente por la personalidad o carácter de una persona."
    },
    {
      id: "ex-20",
      level: 4,
      category: "What ... like?",
      question: "Quieres saber si el nuevo profesor es alto, rubio o lleva anteojos (su apariencia física). ¿Qué preguntas?",
      options: [
        "What is your teacher like?",
        "What does your teacher look like?",
        "How is your teacher looking?",
        "What looks your teacher like?"
      ],
      answer: "What does your teacher look like?",
      explanation: "'What does [someone] look like?' indaga la apariencia física visible."
    },
    {
      id: "ex-21",
      level: 4,
      category: "How come",
      question: "Tu colega no vino a la reunión importante y le preguntas con sorpresa de forma coloquial. ¿Cuál es correcta?",
      options: [
        "How come didn't you attend the meeting?",
        "How come you didn't attend the meeting?",
        "How come did you not attend the meeting?",
        "Why come you didn't attend the meeting?"
      ],
      answer: "How come you didn't attend the meeting?",
      explanation: "'How come' mantiene el orden afirmativo natural de las palabras (Sujeto + Verbo), sin inversión auxiliar."
    },
    {
      id: "ex-22",
      level: 4,
      category: "Duración y Distancia",
      question: "¿A qué distancia está el aeropuerto desde aquí?",
      options: [
        "How long is the airport from here?",
        "How far is the airport from here?",
        "What distance is the airport from here?",
        "How much distance is the airport?"
      ],
      answer: "How far is the airport from here?",
      explanation: "Para distancias físicas se usa 'How far'. 'How long' se reserva para duración de tiempo."
    },
    {
      id: "ex-23",
      level: 4,
      category: "Respuestas Precisas",
      question: "Si te preguntan: 'How long have you studied English?', ¿cuál es la respuesta gramaticalmente perfecta?",
      options: [
        "Since three years.",
        "For three years.",
        "During three years.",
        "At three years."
      ],
      answer: "For three years.",
      explanation: "Las duraciones acumuladas de tiempo se introducen con 'FOR'. 'Since' solo se usa con fechas de inicio específicas (since 2021)."
    },
    {
      id: "ex-24",
      level: 4,
      category: "Respuestas Precisas",
      question: "Si te preguntan: 'Why did you call the technician?', ¿cuál respuesta es la más natural?",
      options: [
        "For to repair the printer.",
        "To repair the printer.",
        "For repairing the printer.",
        "Because repairing the printer."
      ],
      answer: "To repair the printer.",
      explanation: "Para expresar el propósito de una acción se utiliza el infinitivo con 'TO' ('To repair...'). 'For to' es un error grave en inglés."
    },
    {
      id: "ex-25",
      level: 4,
      category: "Entonación Fonética",
      question: "¿Qué curva de entonación tienen las WH Questions en inglés estándar?",
      options: [
        "Entonación ascendente (la voz sube al final como en Yes/No questions)",
        "Entonación descendente (la voz cae suavemente al final)",
        "Entonación totalmente plana y monótona",
        "Entonación cantada aleatoria"
      ],
      answer: "Entonación descendente (la voz cae suavemente al final)",
      explanation: "Las WH Questions tienen 'falling intonation' ↘. La melodía de la voz desciende suavemente al cerrar la pregunta."
    }
  ],

  // 8. Printable / Quick Reference Cheat Sheet Data
  cheatSheet: [
    { wh: "Who", meaning: "¿Quién?", use: "Personas", qasm: "Who did you meet?  /  Who called?", trap: "No uses 'did' en preguntas de sujeto." },
    { wh: "Whom", meaning: "¿A quién?", use: "Personas (Objeto formal)", qasm: "Whom did you invite?", trap: "Formal. Reemplazable por Who en habla común." },
    { wh: "What", meaning: "¿Qué? / ¿Cuál?", use: "Cosas / Conjunto abierto", qasm: "What do you want?  /  What happened?", trap: "'What is your name?', no 'Which'." },
    { wh: "Which", meaning: "¿Cuál? / ¿Cuáles?", use: "Opciones limitadas", qasm: "Which one do you prefer?", trap: "Exige un conjunto cerrado conocido." },
    { wh: "Where", meaning: "¿Dónde? / ¿Adónde?", use: "Lugar / Destino", qasm: "Where do you live?  /  Where are you from?", trap: "Preposición 'from' al final." },
    { wh: "When", meaning: "¿Cuándo?", use: "Tiempo / Fechas", qasm: "When is your birthday?", trap: "Para horas de reloj se usa 'What time'." },
    { wh: "Why", meaning: "¿Por qué?", use: "Causa / Motivo", qasm: "Why did you say that?", trap: "Responde con 'Because' o 'To + verbo'." },
    { wh: "Whose", meaning: "¿De quién?", use: "Posesión", qasm: "Whose keys are these?", trap: "No confundir con 'Who's' (Who is)." },
    { wh: "How", meaning: "¿Cómo?", use: "Modo / Proceso / Estado", qasm: "How does it work?  /  How are you?", trap: "'What do you call this?', no 'How do you call'." },
    { wh: "How much", meaning: "¿Cuánto/a? / Precio", use: "Incontables / Costo", qasm: "How much is it?  /  How much time...?", trap: "Para contables plurales es 'How many'." },
    { wh: "How many", meaning: "¿Cuántos/as?", use: "Contables en plural", qasm: "How many brothers do you have?", trap: "Sustantivo siempre en plural después." },
    { wh: "How often", meaning: "¿Cada cuánto?", use: "Frecuencia / Rutinas", qasm: "How often do you exercise?", trap: "Sin la palabra 'times' adentro." },
    { wh: "How long", meaning: "¿Cuánto tiempo?", use: "Duración / Antigüedad", qasm: "How long does the movie last?", trap: "Responde con 'for' o 'since'." },
    { wh: "How far", meaning: "¿A qué distancia?", use: "Distancia física", qasm: "How far is it from here?", trap: "No digas 'What distance'." },
    { wh: "How old", meaning: "¿Qué edad?", use: "Edad / Antigüedad", qasm: "How old are you?", trap: "Usa el verbo TO BE, nunca HAVE." },
    { wh: "How come", meaning: "¿Cómo es que...?", use: "Sorpresa / Coloquial", qasm: "How come you are not here?", trap: "¡No invierte el orden del sujeto y verbo!" },
    { wh: "What time", meaning: "¿A qué hora?", use: "Hora de reloj", qasm: "What time does it start?", trap: "Se responde con 'At [hora]'." },
    { wh: "What ... like?", meaning: "¿Cómo es?", use: "Descripción / Cualidad", qasm: "What is London like?", trap: "No uses HOW para descripciones generales." },
    { wh: "What ... for?", meaning: "¿Para qué?", use: "Propósito práctico", qasm: "What is this tool for?", trap: "Preposición 'for' al final." }
  ]
};
