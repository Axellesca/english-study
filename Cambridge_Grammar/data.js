/**
 * Cambridge English Grammar — Understanding the Basics
 * Altenberg & Vago (Cambridge University Press)
 * Content extracted from book/Cambridge_English_Grammar.pdf
 * Spanish theory summaries (theoryEsHtml) + English book text.
 * Pure content — no UI logic. Load BEFORE app.js.
 */

const BOOK_META = {
  title: "English Grammar: Understanding the Basics",
  authors: "Evelyn P. Altenberg & Robert M. Vago",
  publisher: "Cambridge University Press",
  pdf: "../book/Cambridge_English_Grammar.pdf",
  parts: ["Part I: Kinds of words", "Part II: Kinds of phrases", "Part III: Getting started with sentences"],
};

const UNITS = [
 {
  "unit": 1,
  "title": "Nouns",
  "part": "Part I: Kinds of words",
  "startPage": 16,
  "pdfPages": {
   "theory": [
    16,
    31
   ],
   "answers": 33
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Los sustantivos (nouns) nombran personas, lugares, cosas o ideas. En esta unidad aprendés a identificarlos y a clasificarlos por tipo.</p></div>\n<div class=\"theory-es-section\"><h4>1. ¿Cómo identifico un sustantivo?</h4><p>Poné <strong>the</strong> delante de la palabra. Si suena como una unidad completa (<em>the boy</em>, <em>the chair</em>), es sustantivo. Si no suena bien (*<em>the very</em>, *<em>the walked</em>), no lo es. Otro test: <strong>his</strong> + palabra (<em>his repair</em>).</p></div>\n<div class=\"theory-es-section\"><h4>2. Concreto vs. abstracto</h4><p>Los <strong>concretos</strong> se perciben con los sentidos (<em>glass</em>, <em>newspaper</em>). Los <strong>abstractos</strong> son conceptos que no se tocan ni se ven (<em>love</em>, <em>honesty</em>, <em>marriage</em>).</p></div>\n<div class=\"theory-es-section\"><h4>3. Singular y plural</h4><p>Singular = uno; plural = más de uno. Plural regular: sumar <strong>-s / -es</strong> (<em>box → boxes</em>). Plural irregular: cambio de vocal (<em>man → men</em>), <strong>-ren/-en</strong> (<em>child → children</em>), sin cambio (<em>sheep → sheep</em>), o <strong>f → ves</strong> (<em>knife → knives</em>).</p></div>\n<div class=\"theory-es-section\"><h4>4. Animado vs. inanimado</h4><p>Lo <strong>animado</strong> está vivo (personas, animales). Lo <strong>inanimado</strong> no. Cuidado con frases raras como <em>The postcard saw the mailman</em>: un postcard no puede ver.</p></div>\n<div class=\"theory-es-section\"><h4>5. Contable vs. no contable</h4><p><strong>Count (C):</strong> admite plural y <em>many / fewer</em> (<em>cars, many cars</em>). <strong>Noncount (NC):</strong> no se pluraliza normalmente y va con <em>much / less</em> (<em>rice, water, information</em>). Algunas palabras pueden ser las dos según el contexto (<em>sugar</em>).</p></div>\n<div class=\"theory-es-section\"><h4>6. Propio vs. común</h4><p><strong>Proper:</strong> nombre propio, siempre con mayúscula (<em>Paris, Mary, IBM</em>). <strong>Common:</strong> nombre genérico (<em>girl, city</em>). Test: ¿lo escribirías con mayúscula siempre?</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> En los ejercicios del libro, marcá SG/PL, C/NC, REG/IRREG, proper/common o animate/inanimate según la consigna de cada Test yourself.</div>",
  "lessons": [
   {
    "n": 1,
    "title": "Identifying nouns",
    "html": "<p>Nouns are commonly defined as words that refer to a person, place, thing, or idea.\nHow can you identify a noun?\nQuick tip 1.1\nIf you can put the word the in front of a word and it sounds like a unit, the word\nis a noun.\nFor example, the boy sounds like a unit, so boy is a noun. The chair sounds like a unit, so\nchair\nis a noun. Compare these nouns to *</p>\n<p>the very\n,*\nthe walked\n,*\nthe because\n.\nVery\n,\nwalked</p>\n<p>,\nand\nbecause\nare not nouns.While you can easily put\nthe\nand\nvery\ntogether (for example,\nthe very tall boy)\n,\nthe very\n, by itself, does not work as a unit while\nthe chair\ndoes. So,\nchair\nis\nan o u n ;\nvery\nis not. (There is one kind of noun that cannot always have\nthe\nin front of it;\nsee\nLesson 6\nlater in this unit.)\nTest yourself 1.1\nWhich of the following words are nouns? See if they sound like a unit when you put them here:\nthe . Check the appropriate column.\nNoun Not a noun\nSample: always .............\nGetting started (answers on p. 20)\n1. tree ................... ...................\n2. when ................... ...................\n3. beds ................... ...................\n4. glass ................... ...................\n5. said ................... ...................\nMore practice (answers on the website)\n6. slowly ................... ...................\n7. factory ................... ...................\n8. ticket ................... ...................\n9. boxes ................... ...................\n10. almost ................... ...................\nTest yourself 1.2\nUnderline the nouns in these phrases. Test each word to see if it sounds like a unit when you put it\nhere:\nthe .\nSample: all my friends\nGetting started\n(answers on p. 20)\n1. your red sweater\n2. those boxes\n3. a few men\n4. many digital photos\n5. his very interesting article\n3</p>\n<p>More practice (answers on the website)\n6. their carpets\n7. a hand-painted plate\n8. the court stenographer\n9. our psychology professor\n10. two interesting museums\n4\nUNIT 1: NOUNS</p>"
   },
   {
    "n": 2,
    "title": "Concrete and abstract nouns",
    "html": "<p>Here' s an unusual sentence: He smelled the marriage .What makes this sentence unusual is\nthat we don't generally think of the noun\nmarriage\nas something that can be smelled. Some\nnouns are\nconcrete\n: they can be perceived by our senses ^ they are things that we can see,\nhear, smell, taste, or touch.Those nouns that are not concrete are\nabstract\n.\nMarriage\nis some-\nthing abstract, so it' s odd to say it' s being perceived by one of our senses, our sense of smell.\nThe nouns in\nLesson 1\nwere all concrete nouns. Other nouns, such as\nmarriage\n,a r e\nabstract; this means that they refer to things that you cannot perceive with your senses,\nt h i n g sy o uc a n n o ts e e ,s m e l l ,f e e l ,t a s t e ,o rt o u c h .H e r ea r es o m em o r ec oncretea n d\nabstract nouns:\nConcrete Abstract\nnewspaper love\nheel honesty\nglass culture\njewelry mind\nQuick tip 2.1\nConcrete nouns refer to things we can perceive with one of our senses. Abstract nouns\ncannot be perceived by our senses.\nTest yourself 2.1\nDecide if each noun is concrete or abstract.\nSample: discussion abstract\nGetting started\n(answers on p. 20)\n1. mufln ....................................................\n2. violin ....................................................\n3. freedom ....................................................\n4. elegance ....................................................\n5. train ....................................................\nMore practice (answers on the website)\n6. friend ......................................................\n7. friendliness ......................................................\n8. economics ......................................................\n9. dormitory ......................................................\n10. capitalism ......................................................\nTest yourself 2.2\nWhich of the following words are nouns? See if they sound like a unit when you put them here:\nthe .The nouns will all be abstract nouns. Check the appropriate column.\nNoun Not a noun\nSample: confusion\n ...................\n5</p>\n<p>Getting started (answers on p. 20)\n1. concept ................... ...................\n2. shockingly ................... ...................\n3. wrote ................... ...................\n4. conversation ................... ...................\n5. interview ................... ...................\nMore practice (answers on the website)\n6. ran ................... ...................\n7. secret ................... ...................\n8. her ................... ...................\n9. death ................... ...................\n10. job ................... ...................\nAn abstract noun is sometimes easier to identify if you create a sentence with it. For example,\nthe happiness\nis a unit, as can be seen in\nThe happiness on her face delighted him\n.Thus,\nhappi-\nness\nis a noun. Here are some other abstract nouns in sentences; the nouns are underlined.\n1. It was not the complaint which bothered him.\n2. They were attempting to stop the abuse.\n3. The joy which they felt was obvious.\nAnother easy way to identify a noun, especially an abstract noun, is to put the word\nhis\n(or other words like it ^ see\nLesson 21\n) in front of it and see if it sounds like a unit. For exam-\nple,\nhis complaint\n,\nhis happiness\n,\nhis concern\nall are units; therefore,\ncomplaint\n,\nhappiness\n,\nand\nconcern\nare nouns.\nQuick tip 2.2\nIf you can put his in front of a word and it sounds like a unit, the word is a noun.\nTest yourself 2.3\nWhich of the following words are nouns? See if they sound like a unit when you put them here:\nhis .The nouns will all be abstract nouns. Check the appropriate column.\nNoun Not a noun\nSample: obligation\n ...................\nGetting started (answers on p. 20)\n1. jumped ................... ...................\n2. appropriate ................... ...................\n3. popularity ................... ...................\n4. emotions ................... ...................\n5. real ................... ...................\nMore practice (answers on the website)\n6. closed ................... ...................\n7. celebration ................... ...................\n8. their ................... ...................\n9. news ................... ...................\n10. spoken ................... ...................\nTest yourself 2.4\nWhich of the following words are nouns? These are a mix of concrete and abstract nouns. Check the\nappropriate column.\nNoun Not a noun\nSample: while ...................\nUNIT 1: NOUNS\n6</p>\n<p>Getting started (answers on p. 21)\n1. repair ................... ...................\n2. intelligence ................... ...................\n3. a ................... ...................\n4. skis ................... ...................\n5. us ................... ...................\nMore practice (answers on the website)\n6. obstruction ................... ...................\n7. pounds ................... ...................\n8. disgraceful ................... ...................\n9. complicated .................. …</p>\n<p>It' s important to realize that the same word can often be used as more than one part of</p>\n<p>speech. For example,</p>\n<p>repair</p>\n<p>can be used as a noun (example:</p>\n<p>The repair was relatively inex-</p>\n<p>pensive</p>\n<p>), as an adjective (example:</p>\n<p>The repair manual was not very helpful</p>\n<p>), or as a verb</p>\n<p>(example:</p>\n<p>He needs to repair the washing machine</p>\n<p>).We'll talk about verbs and adjectives in</p>\n<p>Units 2</p>\n<p>and 4, respectively.</p>"
   },
   {
    "n": 3,
    "title": "Singular and plural nouns",
    "html": "<p>What' s the didierence between cat and cats ?T h en o u n cat is used when it refers to only one\ncat; its form is\nsingular\n. The noun\ncats\nis used when it represents more than one cat; its\nform is\nplural\n.Thus, the singular and plural forms tell us about\nnumber\n. Below are some\nnouns in their singular and plural forms.\nSingular Plural\nbox\nboxes\nbed\nbeds\nkite\nkites\nday\ndays\ncountry countries\nman\nmen\nchild children\nTest yourself 3.1\nUnderline each noun in the sentences below and indicate whether it is singular (SG) or plural (PL).\nT h e r em a yb em o r et h a no n en o u ni nas entence .\nSample: They used her computer (SG) to download the files (PL).\nGetting started\n(answers on p. 21)\n1. He had a few good ideas.\n2. The boys spoke in a quiet whisper.\n3. The tourists greeted the queen with attitudes\nof respect.\n4. My neighbor is a neurologist.\n5 . T h ee xterminatorf o u n db u g si nt h eo fl c e .\nMore practice\n(answers on the website)\n6. Sharks live in water.\n7. Yesterday, I caught a big t rout.\n8. There are many beautiful homes on this block.\n9. Visitors to this country must obtain visas.\n10. His cousin fought in a brutal battle to free\nninety hostages.\nRegular and irregular plurals\nUsually, we pluralize a noun by adding an' 's' ' to it, as in books ; these nouns are called regu-\nlar\n.There are a handful of nouns that are pluralized in other ways; these nouns are called\nirregular\n.\nIrregular nouns form their plural in didierent ways. Here are some common patterns:\n1. changing a vowel:\nman\n/\nmen\n,f o re x a m p l e\n2. adding ''ren'' or ''en'':\nchild\n/\nchildren\n,f o re x a m p l e\n3. adding nothing:\nfish\n/\nfish\n,f o re x a m p l e\n4 . changing '' f '' t o '' v '' andthenadding ''s'':\nknife\n/\nknives\n,f o re xample\nTest yourself 3.2\nUnderline each plural noun in the sentences below and indicate if it is regular (REG) or irregular\n(IRREG) in terms of how it is pluralized.\nSample: The women (IRREG) received their education at some exclusive schools (REG).\n9</p>\n<p>Getting started (answers on p. 21)\n1. The doctor treated most of the patients who\nwere waiting.\n2. The geese crossed the road near my car.\n3 . S h es e tat r a pt oc a t c ht h em i c et h a th a d\ninvaded her kitchen.\n4. Y ou will have to feed the oxen most\nafternoons.\n5. Whenever I travel to the countryside,\nI see many sheep, ducks, deer, and\ncows.\n More practice (answers on the website)\n6. Those husbands and wives lead interesting\nlives.\n7. Her feet have grown since last year.\n8 . T h eb a c kw i n d o wo fm ya partment\noverlooks about a dozen roofs.\n9. The salesmen surrounded me in the\nshowroom.\n1 0 . Kennethh a dt ob u yt w ob o t t l e so f\ndisinfectant to get rid of the lice in his\nbathroom.\nTo enhance your understanding\nWhat is the plural of the ''word'' blun ? Even though you've probably never seen this\nnonsense word, you're likely to say its plural is\nbluns\n. That's because we don't have to\nmemorize the ending of regular plurals; we simply use our plural formation rule: ''add\ns\n.''\nBut the forms for irregular plural words, like\nchildren\nand\nmen</p>\n<p>, need to be memorized since\nthey don't follow a consistent pattern.\nTo further enhance your understanding\nEarlier we said that we usually pluralize a noun in English by adding an ''s'' to it. There's\nactually more to it than that, when one examines the pronunciation of regular nouns more\nclosely.\nHere are some regular English nouns:\nAB\ncat dog\nlip bee\nmyth car\nlaugh deal\nSay each word in column A out loud, adding its plural ending. (Don't whisper, or this\nwon't work.) You'll notice that, as you expect, you're adding an [s] sound to each word.\n(Symbols in square brackets [ ] indicate sounds rather than letters.) Now say each word in\ncolumn B out loud, adding its plural ending. If you listen carefully, you'll notice that you're\nnot adding an [s] sound to each word to make it plural. You're actually adding a [z] sound!\n(If English is not your native language, you may not be doing this.)\nIt turns out that we learned, when we were acquiring English as children, that it is the last\nsound\n, and not\nletter\n, of a regular noun that determines whether we add [s] or [z]. Some\nsounds (voiced sounds) are made with our vocal cords vibrating, like the strings of a guitar.\nTry this: hold your hand touching your throat, about where a man's Adam's apple is, while\nyou say and hold a [v] sound ([v v v v v\n...</p>\n<p>]). You'll feel the vibration of your vocal cords.\nUNIT 1: NOUNS\n10</p>\n<p>Other sounds (voiceless sounds) are made with our vocal cords not vibrating. Now touch\nyour hand to your throat again and this time say and hold an [f] sound ([f f f f f\n...</p>\n<p>]); you will\nnotice the lack of vibration.\nSo how do we know whether to say the plural with an [s] or [z] sound? If the last sound of\na word is a voiceless sound, we add an [s] sound to make it plural. If the last sound of a word\nis a voiced sound, we add a [z] sound to make it plural. This is not a rule that someone has\never taught us, but part of our unconscious knowledge o …</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 4,
    "title": "Animate and inanimate nouns",
    "html": "<p>Take a look at the following sentence:\n1.\nThe postcard saw the mailman\n.\nWhat's strange about this sentence? What's strange is that we don't expect a postcard,\nwhich is not alive, to be able to see something; only things that are alive have the ability\nto see. Nouns that refer to things that are alive are called\nanimate\n, while nouns that refer\nto things that are not alive are called\ninanimate\n.\nPostcard\nis an inanimate noun and\nusing it as an animate one makes for a very unusual sentence.\nQuick tip 4.1\nAnimate nouns refer to things that are alive; inanimate nouns refer to things that are\nnot alive.\nTest yourself 4.1\nDecide if each noun is animate or inanimate.\nSample: apple inanimate\nGetting started\n(answers on p. 21)\n1. word ..................................................\n2. lizard ..................................................\n3. glasses ..................................................\n4. calendar ..................................................\n5. baby ..................................................\nMore practice (answers on the website)\n6. criminal ......................................................\n7. furniture ......................................................\n8. doctor ......................................................\n9. mouse\n......................................................\n10. truck ......................................................\nNow take a look at the following sentence:\n2. The dog wrote a best-selling novel.\nAgain, there' s something strange here.W e know that\ndog\nis animate. However, only a special\ntype of animate noun has the ability to write a best-selling novel: a\nhuman\nnoun. The follow-\ning sentence is fine, since\nteacher\nis a human animate noun:\nMy teacher wrote a best-selling\nnovel\n. On the other hand, since\ndog\nis a\nnonhuman\nanimate noun, sentence 2 does not sound\nright.\nTo summarize: nouns may be human animate\n(teacher\n), nonhuman animate (\ndog\n), or\ninanimate (\npostcard\n).\nTest yourself 4.2\nDecide if each noun is animate or inanimate. If a noun is animate, decide if it is human or nonhuman.\nSample: chair inanimate\n12</p>\n<p>Getting started (answers on p. 21)\n1. dinner ..........................................................\n2. pet ..........................................................\n3. friend ..........................................................\n4. child ..........................................................\n5. spider ..........................................................\nMore practice (answers on the website)\n6. tablecloth ..............................................................\n7. recipes ..............................................................\n8. assassin ..............................................................\n9. shark ..............................................................\n10. freedom ..............................................................</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 5,
    "title": "Count and noncount nouns",
    "html": "<p>Let' s take a closer look at the noun hand . Notice that you can say the following:\nthe hand a hand hands\nHere are some other nouns which demonstrate the same pattern:\nthe store a store stores\nthe idea an idea ideas\nthe tissue a tissue tissues\nLet' s compare\nhand\nto the noun\nfurniture\n.A sw i t h\nhand\n,w ec a ns a y\nthe furniture\n.B u tw e\ncan't say *\na furniture\nor *\nfurnitures\n.H e r ea r es o m eo t h e rn o u n sw h i c hd emonstratet h e\nsame pattern as\nfurniture\n:\nthe dust *a dust *dusts\nthe energy *an energy *energies\nthe biology *a biology *biologies\nT h u s ,t h e r ea r es o m en o u n st h a tc a nb ec o u n t e d ,a n ds ow ec a nu s e\na\nor\nan\nwith them and\ncan also make them plural.These nouns are called, appropriately,\ncount\nnouns.\nHand\nis a\ncount noun. So are\nstore\n,\nidea\n,a n d\ntissue\n.\nThere are other nouns that typically are not counted, and so we do not use\na\nor\nan\nwith\nthem and do not typically make them plural. These nouns are called, also appropriately,\nnoncount\nnouns. ( Another name for a noncount noun is a\nmass\nnoun.)\nFurniture\nis a non-\ncount noun. So are\ndust\n,\nenergy\n,a n d\nbiology\n.\nY ou may well be saying to yourself,' 'W ait a minute. I can count furniture. I can say some-\nthing like: three couches and three chairs make six pieces of furniture. ' 'And of course,\nyou' d be right. But notice that in this sentence, the words\ncouch\nand\nchair\nc a nb em a d ep l u -\nral, but not the word\nfurniture\n.A n dt h ew o r d\npiece\nc a nb em a d ep l u r a l ,b u t ,a g a i n ,n o tt h e\nword\nfurniture\n.\nQuick tip 5.1\nIf you can pluralize a noun in a sentence, it is functioning as a count noun.\nNote that a noun is considered to be a count noun if it c a nb em a d ep l u r a l ,e v e ni f\nit' s not plural in a particular sentence. Thus, in the sentence\nIa t eac o o k i e\n,\ncookie\nis\na count noun because one could pluralize it to cookies without changing its basic\nmeaning.\nTest yourself 5.1\nFor each underlined noun in the sentences below, indicate if it is count (C) or noncount (NC). Use\nthe plural test to help you.\n14</p>\n<p>Sample: Her hairstyle (C) clearly revealed her face.\nGetting started\n(answers on p. 22)\n1. The lights ( ) of the city ( )\ntwinkled.\n2. I love eating rice ( ).\n3. His anger ( ) was barely under\ncontrol.\n4. Her job ( ) was rather demanding.\n5. Many types of information ( ) are\navailable at the library ( ).\nMore practice\n(answers on the website)\n6. The police ( ) will be here in a moment.\n7. He leaned on the handle ( ) and cursed.\n8. I was so thirsty, I needed three glasses\n() o f water ( ).\n9. How much money ( ) do you make in\nan hour ( )?\n10. By 11 P.M., the train-station ( ) was\nnearly empty.\nThere is also another good way to decide if a noun is count or noncount.Take a look at the\nuse of the words\nmuch\nand\nmany\nin the following sentences.\n1. He has many children.\n2. That man has many interests.\n3. That will take too much time.\n4. They have many lights on in the house.\n5. We have much furniture in our store.\n6. I wonder how much wealth is in SiliconV alley.\nAs you may have noticed,\nmany\nis used with count nouns,\nmuch\nis used with noncount\nnouns.\nQuick tip 5.2\nIf you can use many with a noun (when it is pluralized), it's a count noun. If you can use\nmuch\nwith a noun, it's a\nnoncount noun\n.\nAnd we have still another way to distinguish count from noncount nouns:\n7. He has fewer children than I do.\n8. That man has fewer interests than he used to.\n9. That will take less time than I thought.\n10. They have fewer lights on in the house.\n11. We have less furniture in our store.\n12. I don't have less money in my purse than you have.\nAs you've probably figured out from these examples, we use\nfewer\nwith count nouns and\nless\nwith noncount nouns.\nQuick tip 5.3\nIf you can use fewer with a noun (when it is pluralized), it's a count noun . If you can use less\nwith a noun, it's a\nnoncount noun\n.</p>\n<p>Test yourself 5.2\nFor each underlined noun in the sentences below, indicate if it is being used as a count (C) or\nnoncount (NC) noun in that sentence. Use the plural,\nmuch/many\n,o r</p>\n<p>fewer/less\ntests to help you.\nSample: Their new album (C) was a huge hit.\nGetting started\n(answers on p. 22)\n1. Algebra ( ) was one of my worst\nsubjects ( ) in high school ( ).\n2. I had no idea that there were various\ntheories ( ), such as Euclidean\nand fractal.\n3. The smoke ( ) rose through the\nchimney ( ).\n4. Bread ( ) is a staple in many\nsocieties ( ).\n5. She decided to push the issue ( )\nfurther.\nMore practice\n(answers on the website)\n6. People ( ) are funny sometimes.\n7. The government ( ) of the United\nStates has three branches ( ).\n8. Senators ( ) can spend money\n( ) unnecessarily.\n9. It takes e di o r t( )t og e tag o o d\ngrade ( ) in Mr . Goodman' s\nclass ( ).\n10. The reporters ( ) wrote the story\n() .\nTo enhance your understanding\nMany nouns can be used as either count nouns or as noncount nouns, depending on how\nthey are being used in a speciﬁc sentence. Let's look at the following sentence containing\nthe word\nsugar\n:\n13. The sugar is spilling onto the ﬂoor.\nIn this sentence, is\nsugar\nbeing used as a count or noncount noun? Would you say:\nThe\nsugars are spilling onto the ﬂoor\n?o r\nMany sugars are spilling onto the ﬂoor\n? Probably not.\nSo\nsugar\n, in sentence 13, is a noncount noun.\nNow take a look at another sentence with\nsugar\n:\n14. This gourmet shop has sugars I've never even heard of.\nIn this sentence, is\nsugar\nbeing used as a count or noncount noun? First, notice that\nsugar\nhere is pluralized. Second, notice that you can say\nThis gourmet shop has many sugars I've\nnever even heard of\n.S o\nsugar\n, in sentence 14, is a count noun. In terms of meaning, what is\nimportant here is that the sentence is talking about different types of sugars, say, brown\nsugar, white sugar, confectioners' sugar, etc.\nAnd one more sentence type with\nsugar\n:\n15. The sugar that works best in this recipe is brown sugar.\nHere,\nsugar\n, while not pluralized, could be pluralized and refers, in fact, to a kind\nof sugar. For example, you could say:\nThe sugars that work best in this recipe\nare brown sugar and white sugar\n. For these reasons,\nsugar\nis being used here as a count\nnoun.\nHere are some more examples of sentences with nouns which, like\nsugar\n, are typically\nused as noncount nouns but can also be used as count nouns.\n16a. I like to drink milk. (\nmilk\nused as noncount noun)\n16b. That store has milks with different kinds of ﬂavoring: chocolate, vanilla, mocha,\nand strawberry. (\nmilks\nused as count noun)\nUNIT 1: NOUNS\n16</p>\n<p>16c. The milk that is the healthiest is nonfat milk. ( milk used as count noun)\n17a. A plentiful supply of water is important for a community's survival. (\nwater\nused\nas noncount noun)\n17b. There are different kinds of gourmet waters on the market these days. (\nwaters\nused as count noun)\n17c. The water I usually order in restaurants is imported. (\nwater\nused as count noun)\n17</p>\n<p>Contenido en el PDF del libro.</p>"
   }
  ],
  "tips": [
   {
    "code": "1.1",
    "text": "If you can put the word the in front of a word and it sounds like a unit, the word is a noun. For example, the boy sounds like a unit, so boy is a noun. The chair sounds like a unit, so chair is a noun. Compare these nouns to * the very ,* the walked ,* the because . Very , walked , and because are not nouns.While you can easily put the and very together (for example, the very tall boy) , the very , by itself, does not work as a unit while the chair does. So, chair is an o u n ; very is not. (There is one kind of noun that cannot always have the in front of it; see Lesson 6 later in this unit.)"
   },
   {
    "code": "2.1",
    "text": "Concrete nouns refer to things we can perceive with one of our senses. Abstract nouns cannot be perceived by our senses."
   },
   {
    "code": "2.2",
    "text": "If you can put his in front of a word and it sounds like a unit, the word is a noun."
   },
   {
    "code": "4.1",
    "text": "Animate nouns refer to things that are alive; inanimate nouns refer to things that are not alive."
   },
   {
    "code": "5.1",
    "text": "If you can pluralize a noun in a sentence, it is functioning as a count noun. Note that a noun is considered to be a count noun if it c a nb em a d ep l u r a l ,e v e ni f it' s not plural in a particular sentence. Thus, in the sentence Ia t eac o o k i e , cookie is a count noun because one could pluralize it to cookies without changing its basic meaning."
   },
   {
    "code": "5.2",
    "text": "If you can use many with a noun (when it is pluralized), it's a count noun. If you can use much with a noun, it's a noncount noun . And we have still another way to distinguish count from noncount nouns: 7. He has fewer children than I do. 8. That man has fewer interests than he used to. 9. That will take less time than I thought. 10. They have fewer lights on in the house. 11. We have less furniture in our store. 12. I don't have less money in my purse than you have. As you've probably figured out from these examples, we use fewer with count nouns and less with noncount nouns."
   },
   {
    "code": "5.3",
    "text": "If you can use fewer with a noun (when it is pluralized), it's a count noun . If you can use less with a noun, it's a noncount noun ."
   }
  ],
  "practice": [
   {
    "code": "1.1",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: the . Check the appropriate column. Noun Not a noun",
    "sample": "Sample: always .............",
    "items": [
     {
      "n": 1,
      "text": "tree",
      "answer": "tree"
     },
     {
      "n": 2,
      "text": "when",
      "answer": "when"
     },
     {
      "n": 3,
      "text": "beds",
      "answer": "beds"
     },
     {
      "n": 4,
      "text": "glass",
      "answer": "glass"
     },
     {
      "n": 5,
      "text": "said",
      "answer": "said"
     }
    ],
    "answers": {
     "1": "tree",
     "2": "when",
     "3": "beds",
     "4": "glass",
     "5": "said"
    }
   },
   {
    "code": "1.2",
    "instruction": "Underline the nouns in these phrases. Test each word to see if it sounds like a unit when you put it here: the .",
    "sample": "Sample: all my friends",
    "items": [
     {
      "n": 1,
      "text": "your red sweater",
      "answer": "your red sweater"
     },
     {
      "n": 2,
      "text": "those boxes",
      "answer": "those boxes"
     },
     {
      "n": 3,
      "text": "a few men",
      "answer": "a few men"
     },
     {
      "n": 4,
      "text": "many digital photos",
      "answer": "many digital photos"
     },
     {
      "n": 5,
      "text": "his very interesting article 3",
      "answer": "his very interesting article"
     }
    ],
    "answers": {
     "1": "your red sweater",
     "2": "those boxes",
     "3": "a few men",
     "4": "many digital photos",
     "5": "his very interesting article"
    }
   },
   {
    "code": "2.1",
    "instruction": "Decide if each noun is concrete or abstract.",
    "sample": "Sample: discussion abstract",
    "items": [
     {
      "n": 1,
      "text": "mufln",
      "answer": "mu⁄n concrete"
     },
     {
      "n": 2,
      "text": "violin",
      "answer": "violin concrete"
     },
     {
      "n": 3,
      "text": "freedom",
      "answer": "freedom abstract"
     },
     {
      "n": 4,
      "text": "elegance",
      "answer": "elegance abstract"
     },
     {
      "n": 5,
      "text": "train",
      "answer": "train concrete"
     }
    ],
    "answers": {
     "1": "mu⁄n concrete",
     "2": "violin concrete",
     "3": "freedom abstract",
     "4": "elegance abstract",
     "5": "train concrete"
    }
   },
   {
    "code": "2.2",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: the .The nouns will all be abstract nouns. Check the appropriate column. Noun Not a noun",
    "sample": "Sample: confusion ................... 5",
    "items": [
     {
      "n": 1,
      "text": "concept",
      "answer": "concept"
     },
     {
      "n": 2,
      "text": "shockingly",
      "answer": "shockingly"
     },
     {
      "n": 3,
      "text": "wrote",
      "answer": "wrote"
     },
     {
      "n": 4,
      "text": "conversation",
      "answer": "conversation"
     },
     {
      "n": 5,
      "text": "interview",
      "answer": "interview"
     }
    ],
    "answers": {
     "1": "concept",
     "2": "shockingly",
     "3": "wrote",
     "4": "conversation",
     "5": "interview"
    }
   },
   {
    "code": "2.3",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: his .The nouns will all be abstract nouns. Check the appropriate column. Noun Not a noun",
    "sample": "Sample: obligation ...................",
    "items": [
     {
      "n": 1,
      "text": "jumped",
      "answer": "jumped"
     },
     {
      "n": 2,
      "text": "appropriate",
      "answer": "appropriate"
     },
     {
      "n": 3,
      "text": "popularity",
      "answer": "popularity"
     },
     {
      "n": 4,
      "text": "emotions",
      "answer": "emotions"
     },
     {
      "n": 5,
      "text": "real",
      "answer": "real 20"
     }
    ],
    "answers": {
     "1": "jumped",
     "2": "appropriate",
     "3": "popularity",
     "4": "emotions",
     "5": "real 20"
    }
   },
   {
    "code": "2.4",
    "instruction": "Which of the following words are nouns? These are a mix of concrete and abstract nouns. Check the appropriate column. Noun Not a noun",
    "sample": "Sample: while ...................",
    "items": [],
    "answers": {
     "1": "repair",
     "2": "intelligence",
     "3": "a",
     "4": "skis",
     "5": "us"
    }
   },
   {
    "code": "2.5",
    "instruction": "Underline the nouns in the sentences below. In this exercise, the nouns will all have the or his in front of them. Some will be concrete and some will be abstract. Some sentences have more than one noun.",
    "sample": "Sample: His answer wasn't helpful.",
    "items": [
     {
      "n": 1,
      "text": "She read the play over again.",
      "answer": "She read the play over again"
     },
     {
      "n": 2,
      "text": "The actions became monotonous.",
      "answer": "The actions became monotonous"
     },
     {
      "n": 3,
      "text": "He felt that his marriage, his relationship with her, was strong.",
      "answer": "He felt that his marriage, his relationship with her, was strong"
     },
     {
      "n": 4,
      "text": "The time had finally come to confess the truth.",
      "answer": "The time had finally come to confess the truth"
     },
     {
      "n": 5,
      "text": "He's the boy who delivers the paper.",
      "answer": "He’s the boy who delivers the paper"
     }
    ],
    "answers": {
     "1": "She read the play over again",
     "2": "The actions became monotonous",
     "3": "He felt that his marriage, his relationship with her, was strong",
     "4": "The time had finally come to confess the truth",
     "5": "He’s the boy who delivers the paper"
    }
   },
   {
    "code": "2.6",
    "instruction": "Underline the nouns in the sentences below. In this exercise, the nouns will not all have the or his in front of them. Just test each word to see if it can be a noun.",
    "sample": "Sample: The repair of my camera went smoothly.",
    "items": [
     {
      "n": 1,
      "text": "I wrote every word of the letter.",
      "answer": "I wrote every word of the letter"
     },
     {
      "n": 2,
      "text": "The house was near the city.",
      "answer": "The house was near the city"
     },
     {
      "n": 3,
      "text": "Why did he get on an elevator?",
      "answer": "Why did he get on an elevator?"
     },
     {
      "n": 4,
      "text": "She has my phone.",
      "answer": "She has my phone"
     },
     {
      "n": 5,
      "text": "Y our younger brother was busy.",
      "answer": "Your younger brother was busy"
     }
    ],
    "answers": {
     "1": "I wrote every word of the letter",
     "2": "The house was near the city",
     "3": "Why did he get on an elevator?",
     "4": "She has my phone",
     "5": "Your younger brother was busy"
    }
   },
   {
    "code": "3.1",
    "instruction": "Underline each noun in the sentences below and indicate whether it is singular (SG) or plural (PL). T h e r em a yb em o r et h a no n en o u ni nas entence .",
    "sample": "Sample: They used her computer (SG) to download the files (PL).",
    "items": [
     {
      "n": 1,
      "text": "He had a few good ideas.",
      "answer": "He had a few good ideas (PL)"
     },
     {
      "n": 2,
      "text": "The boys spoke in a quiet whisper.",
      "answer": "The boys (PL) spoke in a quiet whisper (SG)"
     },
     {
      "n": 3,
      "text": "The tourists greeted the queen with attitudes of respect.",
      "answer": "The tourists (PL) greeted the queen (SG) with attitudes (PL) of respect (SG)"
     },
     {
      "n": 4,
      "text": "My neighbor is a neurologist. 5 . T h ee xterminatorf o u n db u g si nt h eo fl c e .",
      "answer": "My neighbor (SG) is a neurologist (SG)"
     }
    ],
    "answers": {
     "1": "He had a few good ideas (PL)",
     "2": "The boys (PL) spoke in a quiet whisper (SG)",
     "3": "The tourists (PL) greeted the queen (SG) with attitudes (PL) of respect (SG)",
     "4": "My neighbor (SG) is a neurologist (SG)",
     "5": "The exterminator (SG) found bugs (PL) in the office (SG)"
    }
   },
   {
    "code": "3.2",
    "instruction": "Underline each plural noun in the sentences below and indicate if it is regular (REG) or irregular (IRREG) in terms of how it is pluralized.",
    "sample": "Sample: The women (IRREG) received their education at some exclusive schools (REG). 9",
    "items": [
     {
      "n": 1,
      "text": "The doctor treated most of the patients who were waiting.",
      "answer": "The doctor treated most of the patients (REG) who were waiting"
     },
     {
      "n": 2,
      "text": "The geese crossed the road near my car. 3 . S h es e tat r a pt oc a t c ht h em i c et h a th a d invaded her kitchen.",
      "answer": "The geese (IRREG) crossed the road near my car"
     },
     {
      "n": 4,
      "text": "Y ou will have to feed the oxen most afternoons.",
      "answer": "You will have to feed the oxen (IRREG) most afternoons (REG)"
     },
     {
      "n": 5,
      "text": "Whenever I travel to the countryside, I see many sheep, ducks, deer, and cows.",
      "answer": "Whenever I travel to the countryside, I see many sheep (IRREG), ducks (REG), deer (IRREG), and cows (REG)"
     }
    ],
    "answers": {
     "1": "The doctor treated most of the patients (REG) who were waiting",
     "2": "The geese (IRREG) crossed the road near my car",
     "3": "She set a trap to catch the mice (IRREG) that had invaded her kitchen",
     "4": "You will have to feed the oxen (IRREG) most afternoons (REG)",
     "5": "Whenever I travel to the countryside, I see many sheep (IRREG), ducks (REG), deer (IRREG), and cows (REG)"
    }
   },
   {
    "code": "4.1",
    "instruction": "Decide if each noun is animate or inanimate.",
    "sample": "Sample: apple inanimate",
    "items": [
     {
      "n": 1,
      "text": "word",
      "answer": "word inanimate"
     },
     {
      "n": 2,
      "text": "lizard",
      "answer": "lizard animate"
     },
     {
      "n": 3,
      "text": "glasses",
      "answer": "glasses inanimate"
     },
     {
      "n": 4,
      "text": "calendar",
      "answer": "calendar inanimate"
     },
     {
      "n": 5,
      "text": "baby",
      "answer": "baby animate"
     }
    ],
    "answers": {
     "1": "word inanimate",
     "2": "lizard animate",
     "3": "glasses inanimate",
     "4": "calendar inanimate",
     "5": "baby animate"
    }
   },
   {
    "code": "4.2",
    "instruction": "Decide if each noun is animate or inanimate. If a noun is animate, decide if it is human or nonhuman.",
    "sample": "Sample: chair inanimate 12",
    "items": [
     {
      "n": 1,
      "text": "dinner",
      "answer": "dinner inanimate"
     },
     {
      "n": 2,
      "text": "pet",
      "answer": "pet nonhuman animate"
     },
     {
      "n": 3,
      "text": "friend",
      "answer": ""
     },
     {
      "n": 4,
      "text": "child",
      "answer": ""
     },
     {
      "n": 5,
      "text": "spider",
      "answer": ""
     }
    ],
    "answers": {
     "1": "dinner inanimate",
     "2": "pet nonhuman animate"
    }
   },
   {
    "code": "5.1",
    "instruction": "For each underlined noun in the sentences below, indicate if it is count (C) or noncount (NC). Use the plural test to help you. 14",
    "sample": "Sample: Her hairstyle (C) clearly revealed her face.",
    "items": [
     {
      "n": 1,
      "text": "The lights  of the city  twinkled.",
      "answer": "The lights (C) of the city (C) twinkled"
     },
     {
      "n": 2,
      "text": "I love eating rice .",
      "answer": "I love eating rice (NC)"
     },
     {
      "n": 3,
      "text": "His anger  was barely under control.",
      "answer": "His anger (NC) was barely under control"
     },
     {
      "n": 4,
      "text": "Her job  was rather demanding.",
      "answer": "Her job (C) was rather demanding"
     },
     {
      "n": 5,
      "text": "Many types of information  are available at the library .",
      "answer": "Many types of information (NC) are available at the library (C)"
     }
    ],
    "answers": {
     "1": "The lights (C) of the city (C) twinkled",
     "2": "I love eating rice (NC)",
     "3": "His anger (NC) was barely under control",
     "4": "Her job (C) was rather demanding",
     "5": "Many types of information (NC) are available at the library (C)"
    }
   },
   {
    "code": "5.2",
    "instruction": "For each underlined noun in the sentences below, indicate if it is being used as a count (C) or noncount (NC) noun in that sentence. Use the plural, much/many ,o r fewer/less tests to help you.",
    "sample": "Sample: Their new album (C) was a huge hit.",
    "items": [
     {
      "n": 1,
      "text": "Algebra  was one of my worst subjects  in high school .",
      "answer": "Algebra (NC) was one of my worst subjects (C) in high school (C)"
     },
     {
      "n": 2,
      "text": "I had no idea that there were various theories , such as Euclidean and fractal.",
      "answer": "I had no idea that there were various theories (C), such as Euclidean and fractal"
     },
     {
      "n": 3,
      "text": "The smoke  rose through the chimney .",
      "answer": "The smoke (NC) rose through the chimney (C)"
     },
     {
      "n": 4,
      "text": "Bread  is a staple in many societies .",
      "answer": "Bread (NC) is a staple in many societies (C)"
     },
     {
      "n": 5,
      "text": "She decided to push the issue  further.",
      "answer": "She decided to push the issue (C) further"
     }
    ],
    "answers": {
     "1": "Algebra (NC) was one of my worst subjects (C) in high school (C)",
     "2": "I had no idea that there were various theories (C), such as Euclidean and fractal",
     "3": "The smoke (NC) rose through the chimney (C)",
     "4": "Bread (NC) is a staple in many societies (C)",
     "5": "She decided to push the issue (C) further"
    }
   }
  ],
  "exercises": [
   {
    "q": "tree",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "1.1",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: the . Check the appropriate column. Noun Not a noun",
    "answer": "tree",
    "explanation": "Respuesta del libro: tree"
   },
   {
    "q": "when",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "1.1",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: the . Check the appropriate column. Noun Not a noun",
    "answer": "when",
    "explanation": "Respuesta del libro: when"
   },
   {
    "q": "beds",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "1.1",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: the . Check the appropriate column. Noun Not a noun",
    "answer": "beds",
    "explanation": "Respuesta del libro: beds"
   },
   {
    "q": "glass",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "1.1",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: the . Check the appropriate column. Noun Not a noun",
    "answer": "glass",
    "explanation": "Respuesta del libro: glass"
   },
   {
    "q": "said",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "1.1",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: the . Check the appropriate column. Noun Not a noun",
    "answer": "said",
    "explanation": "Respuesta del libro: said"
   },
   {
    "q": "your red sweater",
    "type": "input",
    "answer": "your red sweater",
    "source": "1.2",
    "instruction": "Underline the nouns in these phrases. Test each word to see if it sounds like a unit when you put it here: the .",
    "explanation": "Respuesta del libro: your red sweater"
   },
   {
    "q": "those boxes",
    "type": "input",
    "answer": "those boxes",
    "source": "1.2",
    "instruction": "Underline the nouns in these phrases. Test each word to see if it sounds like a unit when you put it here: the .",
    "explanation": "Respuesta del libro: those boxes"
   },
   {
    "q": "a few men",
    "type": "input",
    "answer": "a few men",
    "source": "1.2",
    "instruction": "Underline the nouns in these phrases. Test each word to see if it sounds like a unit when you put it here: the .",
    "explanation": "Respuesta del libro: a few men"
   },
   {
    "q": "many digital photos",
    "type": "input",
    "answer": "many digital photos",
    "source": "1.2",
    "instruction": "Underline the nouns in these phrases. Test each word to see if it sounds like a unit when you put it here: the .",
    "explanation": "Respuesta del libro: many digital photos"
   },
   {
    "q": "his very interesting article 3",
    "type": "input",
    "answer": "his very interesting article",
    "source": "1.2",
    "instruction": "Underline the nouns in these phrases. Test each word to see if it sounds like a unit when you put it here: the .",
    "explanation": "Respuesta del libro: his very interesting article"
   },
   {
    "q": "mufln",
    "type": "choice",
    "options": [
     "concrete",
     "abstract"
    ],
    "correct": 0,
    "source": "2.1",
    "instruction": "Decide if each noun is concrete or abstract.",
    "answer": "mu⁄n concrete",
    "explanation": "Respuesta del libro: mu⁄n concrete"
   },
   {
    "q": "violin",
    "type": "choice",
    "options": [
     "concrete",
     "abstract"
    ],
    "correct": 0,
    "source": "2.1",
    "instruction": "Decide if each noun is concrete or abstract.",
    "answer": "violin concrete",
    "explanation": "Respuesta del libro: violin concrete"
   },
   {
    "q": "freedom",
    "type": "choice",
    "options": [
     "concrete",
     "abstract"
    ],
    "correct": 1,
    "source": "2.1",
    "instruction": "Decide if each noun is concrete or abstract.",
    "answer": "freedom abstract",
    "explanation": "Respuesta del libro: freedom abstract"
   },
   {
    "q": "elegance",
    "type": "choice",
    "options": [
     "concrete",
     "abstract"
    ],
    "correct": 1,
    "source": "2.1",
    "instruction": "Decide if each noun is concrete or abstract.",
    "answer": "elegance abstract",
    "explanation": "Respuesta del libro: elegance abstract"
   },
   {
    "q": "train",
    "type": "choice",
    "options": [
     "concrete",
     "abstract"
    ],
    "correct": 0,
    "source": "2.1",
    "instruction": "Decide if each noun is concrete or abstract.",
    "answer": "train concrete",
    "explanation": "Respuesta del libro: train concrete"
   },
   {
    "q": "concept",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "2.2",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: the .The nouns will all be abstract nouns. Check the appropriate column. Noun Not a noun",
    "answer": "concept",
    "explanation": "Respuesta del libro: concept"
   },
   {
    "q": "shockingly",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "2.2",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: the .The nouns will all be abstract nouns. Check the appropriate column. Noun Not a noun",
    "answer": "shockingly",
    "explanation": "Respuesta del libro: shockingly"
   },
   {
    "q": "wrote",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "2.2",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: the .The nouns will all be abstract nouns. Check the appropriate column. Noun Not a noun",
    "answer": "wrote",
    "explanation": "Respuesta del libro: wrote"
   },
   {
    "q": "conversation",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "2.2",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: the .The nouns will all be abstract nouns. Check the appropriate column. Noun Not a noun",
    "answer": "conversation",
    "explanation": "Respuesta del libro: conversation"
   },
   {
    "q": "interview",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "2.2",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: the .The nouns will all be abstract nouns. Check the appropriate column. Noun Not a noun",
    "answer": "interview",
    "explanation": "Respuesta del libro: interview"
   },
   {
    "q": "jumped",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "2.3",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: his .The nouns will all be abstract nouns. Check the appropriate column. Noun Not a noun",
    "answer": "jumped",
    "explanation": "Respuesta del libro: jumped"
   },
   {
    "q": "appropriate",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "2.3",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: his .The nouns will all be abstract nouns. Check the appropriate column. Noun Not a noun",
    "answer": "appropriate",
    "explanation": "Respuesta del libro: appropriate"
   },
   {
    "q": "popularity",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "2.3",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: his .The nouns will all be abstract nouns. Check the appropriate column. Noun Not a noun",
    "answer": "popularity",
    "explanation": "Respuesta del libro: popularity"
   },
   {
    "q": "emotions",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "2.3",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: his .The nouns will all be abstract nouns. Check the appropriate column. Noun Not a noun",
    "answer": "emotions",
    "explanation": "Respuesta del libro: emotions"
   },
   {
    "q": "real",
    "type": "choice",
    "options": [
     "noun",
     "not a noun"
    ],
    "correct": 0,
    "source": "2.3",
    "instruction": "Which of the following words are nouns? See if they sound like a unit when you put them here: his .The nouns will all be abstract nouns. Check the appropriate column. Noun Not a noun",
    "answer": "real 20",
    "explanation": "Respuesta del libro: real 20"
   },
   {
    "q": "She read the play over again.",
    "type": "choice",
    "options": [
     "concrete",
     "abstract"
    ],
    "correct": 0,
    "source": "2.5",
    "instruction": "Underline the nouns in the sentences below. In this exercise, the nouns will all have the or his in front of them. Some will be concrete and some will be abstract. Some sentences have more than one noun.",
    "answer": "She read the play over again",
    "explanation": "Respuesta del libro: She read the play over again"
   },
   {
    "q": "The actions became monotonous.",
    "type": "choice",
    "options": [
     "concrete",
     "abstract"
    ],
    "correct": 0,
    "source": "2.5",
    "instruction": "Underline the nouns in the sentences below. In this exercise, the nouns will all have the or his in front of them. Some will be concrete and some will be abstract. Some sentences have more than one noun.",
    "answer": "The actions became monotonous",
    "explanation": "Respuesta del libro: The actions became monotonous"
   },
   {
    "q": "He felt that his marriage, his relationship with her, was strong.",
    "type": "input",
    "answer": "He felt that his marriage, his relationship with her, was strong",
    "source": "2.5",
    "instruction": "Underline the nouns in the sentences below. In this exercise, the nouns will all have the or his in front of them. Some will be concrete and some will be abstract. Some sentences have more than one noun.",
    "explanation": "Respuesta del libro: He felt that his marriage, his relationship with her, was strong"
   },
   {
    "q": "The time had finally come to confess the truth.",
    "type": "input",
    "answer": "The time had finally come to confess the truth",
    "source": "2.5",
    "instruction": "Underline the nouns in the sentences below. In this exercise, the nouns will all have the or his in front of them. Some will be concrete and some will be abstract. Some sentences have more than one noun.",
    "explanation": "Respuesta del libro: The time had finally come to confess the truth"
   },
   {
    "q": "He's the boy who delivers the paper.",
    "type": "choice",
    "options": [
     "concrete",
     "abstract"
    ],
    "correct": 0,
    "source": "2.5",
    "instruction": "Underline the nouns in the sentences below. In this exercise, the nouns will all have the or his in front of them. Some will be concrete and some will be abstract. Some sentences have more than one noun.",
    "answer": "He’s the boy who delivers the paper",
    "explanation": "Respuesta del libro: He’s the boy who delivers the paper"
   },
   {
    "q": "I wrote every word of the letter.",
    "type": "input",
    "answer": "I wrote every word of the letter",
    "source": "2.6",
    "instruction": "Underline the nouns in the sentences below. In this exercise, the nouns will not all have the or his in front of them. Just test each word to see if it can be a noun.",
    "explanation": "Respuesta del libro: I wrote every word of the letter"
   },
   {
    "q": "The house was near the city.",
    "type": "input",
    "answer": "The house was near the city",
    "source": "2.6",
    "instruction": "Underline the nouns in the sentences below. In this exercise, the nouns will not all have the or his in front of them. Just test each word to see if it can be a noun.",
    "explanation": "Respuesta del libro: The house was near the city"
   },
   {
    "q": "Why did he get on an elevator?",
    "type": "input",
    "answer": "Why did he get on an elevator?",
    "source": "2.6",
    "instruction": "Underline the nouns in the sentences below. In this exercise, the nouns will not all have the or his in front of them. Just test each word to see if it can be a noun.",
    "explanation": "Respuesta del libro: Why did he get on an elevator?"
   },
   {
    "q": "She has my phone.",
    "type": "input",
    "answer": "She has my phone",
    "source": "2.6",
    "instruction": "Underline the nouns in the sentences below. In this exercise, the nouns will not all have the or his in front of them. Just test each word to see if it can be a noun.",
    "explanation": "Respuesta del libro: She has my phone"
   },
   {
    "q": "Y our younger brother was busy.",
    "type": "input",
    "answer": "Your younger brother was busy",
    "source": "2.6",
    "instruction": "Underline the nouns in the sentences below. In this exercise, the nouns will not all have the or his in front of them. Just test each word to see if it can be a noun.",
    "explanation": "Respuesta del libro: Your younger brother was busy"
   },
   {
    "q": "He had a few good ideas.",
    "type": "choice",
    "options": [
     "SG",
     "PL"
    ],
    "correct": 1,
    "source": "3.1",
    "instruction": "Underline each noun in the sentences below and indicate whether it is singular (SG) or plural (PL). T h e r em a yb em o r et h a no n en o u ni nas entence .",
    "answer": "He had a few good ideas (PL)",
    "explanation": "Respuesta del libro: He had a few good ideas (PL)"
   },
   {
    "q": "The boys spoke in a quiet whisper.",
    "type": "input",
    "answer": "The boys (PL) spoke in a quiet whisper (SG)",
    "source": "3.1",
    "instruction": "Underline each noun in the sentences below and indicate whether it is singular (SG) or plural (PL). T h e r em a yb em o r et h a no n en o u ni nas entence .",
    "explanation": "Respuesta del libro: The boys (PL) spoke in a quiet whisper (SG)"
   },
   {
    "q": "The tourists greeted the queen with attitudes of respect.",
    "type": "input",
    "answer": "The tourists (PL) greeted the queen (SG) with attitudes (PL) of respect (SG)",
    "source": "3.1",
    "instruction": "Underline each noun in the sentences below and indicate whether it is singular (SG) or plural (PL). T h e r em a yb em o r et h a no n en o u ni nas entence .",
    "explanation": "Respuesta del libro: The tourists (PL) greeted the queen (SG) with attitudes (PL) of respect (SG)"
   },
   {
    "q": "My neighbor is a neurologist. 5 . T h ee xterminatorf o u n db u g si nt h eo fl c e .",
    "type": "input",
    "answer": "My neighbor (SG) is a neurologist (SG)",
    "source": "3.1",
    "instruction": "Underline each noun in the sentences below and indicate whether it is singular (SG) or plural (PL). T h e r em a yb em o r et h a no n en o u ni nas entence .",
    "explanation": "Respuesta del libro: My neighbor (SG) is a neurologist (SG)"
   },
   {
    "q": "The doctor treated most of the patients who were waiting.",
    "type": "choice",
    "options": [
     "REG",
     "IRREG"
    ],
    "correct": 0,
    "source": "3.2",
    "instruction": "Underline each plural noun in the sentences below and indicate if it is regular (REG) or irregular (IRREG) in terms of how it is pluralized.",
    "answer": "The doctor treated most of the patients (REG) who were waiting",
    "explanation": "Respuesta del libro: The doctor treated most of the patients (REG) who were waiting"
   }
  ],
  "answerKeys": {
   "1.1": {
    "1": "tree",
    "2": "when",
    "3": "beds",
    "4": "glass",
    "5": "said"
   },
   "1.2": {
    "1": "your red sweater",
    "2": "those boxes",
    "3": "a few men",
    "4": "many digital photos",
    "5": "his very interesting article"
   },
   "2.1": {
    "1": "mu⁄n concrete",
    "2": "violin concrete",
    "3": "freedom abstract",
    "4": "elegance abstract",
    "5": "train concrete"
   },
   "2.2": {
    "1": "concept",
    "2": "shockingly",
    "3": "wrote",
    "4": "conversation",
    "5": "interview"
   },
   "2.3": {
    "1": "jumped",
    "2": "appropriate",
    "3": "popularity",
    "4": "emotions",
    "5": "real 20"
   },
   "2.4": {
    "1": "repair",
    "2": "intelligence",
    "3": "a",
    "4": "skis",
    "5": "us"
   },
   "2.5": {
    "1": "She read the play over again",
    "2": "The actions became monotonous",
    "3": "He felt that his marriage, his relationship with her, was strong",
    "4": "The time had finally come to confess the truth",
    "5": "He’s the boy who delivers the paper"
   },
   "2.6": {
    "1": "I wrote every word of the letter",
    "2": "The house was near the city",
    "3": "Why did he get on an elevator?",
    "4": "She has my phone",
    "5": "Your younger brother was busy"
   },
   "3.1": {
    "1": "He had a few good ideas (PL)",
    "2": "The boys (PL) spoke in a quiet whisper (SG)",
    "3": "The tourists (PL) greeted the queen (SG) with attitudes (PL) of respect (SG)",
    "4": "My neighbor (SG) is a neurologist (SG)",
    "5": "The exterminator (SG) found bugs (PL) in the office (SG)"
   },
   "3.2": {
    "1": "The doctor treated most of the patients (REG) who were waiting",
    "2": "The geese (IRREG) crossed the road near my car",
    "3": "She set a trap to catch the mice (IRREG) that had invaded her kitchen",
    "4": "You will have to feed the oxen (IRREG) most afternoons (REG)",
    "5": "Whenever I travel to the countryside, I see many sheep (IRREG), ducks (REG), deer (IRREG), and cows (REG)"
   },
   "4.1": {
    "1": "word inanimate",
    "2": "lizard animate",
    "3": "glasses inanimate",
    "4": "calendar inanimate",
    "5": "baby animate"
   },
   "4.2": {
    "1": "dinner inanimate",
    "2": "pet nonhuman animate"
   },
   "5.1": {
    "1": "The lights (C) of the city (C) twinkled",
    "2": "I love eating rice (NC)",
    "3": "His anger (NC) was barely under control",
    "4": "Her job (C) was rather demanding",
    "5": "Many types of information (NC) are available at the library (C)"
   },
   "5.2": {
    "1": "Algebra (NC) was one of my worst subjects (C) in high school (C)",
    "2": "I had no idea that there were various theories (C), such as Euclidean and fractal",
    "3": "The smoke (NC) rose through the chimney (C)",
    "4": "Bread (NC) is a staple in many societies (C)",
    "5": "She decided to push the issue (C) further"
   },
   "6.1": {
    "1": "seattle proper",
    "2": "crater lake national park proper",
    "3": "tissues common",
    "4": "sofa common",
    "5": "pepsi cola proper"
   },
   "7.1": {
    "1": "defend",
    "2": "include",
    "3": "largest",
    "4": "how",
    "5": "learn",
    "6": "sightsee",
    "7": "unbelievably",
    "8": "look",
    "9": "grow",
    "10": "ambitious"
   },
   "7.2": {
    "1": "John should study",
    "2": "John studied",
    "3": "John is studying",
    "4": "John studies. You certainly can’t say, *John should studied ,o r John to studied , so how do we know that studied is a verb? To test the word, you have to see if it can follow should or to in a di¡erent form, not necessarily in the form that you see in a particular sentence. For example, if you see John studied ,a s ky ourselfi ft h e r e ’ sad i ¡ e r e n tf o r mo f studied that can follow should or to .I nt h i sc a s et h e r ei s : John should study or John decided to study .S o study and all its forms are verbs. The form of the verb that follows should or to is called the base form or infinitive form .T heterminfinitive is used to refer either to the base form alone (for example, study ), or to the to +b a s ef o r m( f o re xample , to study ). Let's put each of these verbs into its base form.The base form is underlined",
    "5": "working: (should, to) work 6 . believed :( should ,t o )believe",
    "6": "can usually sleep late",
    "7": "written: (should, to) write 8 . w o r e :( should ,t o )wear 9 . throws :( should ,t o )throw",
    "8": "would like guidance",
    "9": "could never build",
    "10": "shall do UNIT 2: VERBS 24 Lesson 8: The verb base Sometimes a verb changes its form. Let's look at the following sentences. The verb is underlined in each one"
   },
   "8.1": {
    "1": "wrote:",
    "2": "talking:",
    "3": "thought:",
    "4": "considered:",
    "5": "seen:",
    "6": "investigates:",
    "7": "spoken :",
    "8": "married:",
    "9": "decides:",
    "10": "found:"
   }
  }
 },
 {
  "unit": 2,
  "title": "Verbs",
  "part": "Part I: Kinds of words",
  "startPage": 36,
  "pdfPages": {
   "theory": [
    36,
    52
   ],
   "answers": 54
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Los verbos suelen expresar acción o estado. Acá aprendés a reconocerlos y sus tipos: base, de acción / de enlace, transitivos / intransitivos y phrasal verbs.</p></div>\n<div class=\"theory-es-section\"><h4>1. Identificar verbos</h4><p>Test 1: si podés poner <strong>should</strong> delante y la frase suena completa (<em>should leave</em>, <em>should discover</em>), es verbo. Test 2: <strong>to</strong> + palabra (<em>to sail</em>).</p></div>\n<div class=\"theory-es-section\"><h4>2. La forma base</h4><p>La base es el infinitivo sin <em>to</em> (<em>leave, sail</em>). De esa base salen tiempos y participios (<em>left, sailed</em>).</p></div>\n<div class=\"theory-es-section\"><h4>3. Acción vs. enlace</h4><p><strong>Action:</strong> algo pasa (<em>run, write</em>). <strong>Linking:</strong> no es acción; enlazan el sujeto con una identidad o estado (<em>be, seem, become</em>): <em>She is a doctor</em>.</p></div>\n<div class=\"theory-es-section\"><h4>4. Transitivo vs. intransitivo</h4><p><strong>Transitivo:</strong> necesita objeto (<em>She read</em> <em>the play</em>). <strong>Intransitivo:</strong> no lo necesita (<em>The actions became monotonous</em> — <em>become</em> aquí no lleva objeto directo).</p></div>\n<div class=\"theory-es-section\"><h4>5. Phrasal verbs</h4><p>Verbo + partícula con sentido propio (<em>look up = buscar</em>, <em>turn off = apagar</em>). La partícula a veces se separa: <em>We looked up the answer / We looked the answer up</em>.</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> Si la consigna pide subrayar verbos, aplicá should / to. Si pide acción o enlace, preguntate si hay movimiento real o solo se describe el sujeto.</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>3. friend human animate\n4. child human animate\n5. spider nonhuman animate\nTest yourself 5.1\n1. The lights (C) of the city (C) twinkled.\n2. I love eating rice (NC).\n3. His anger (NC) was barely under control.\n4. Her job (C) was rather demanding.\n5. Many types of information (NC) are available at the library (C).\nTest yourself 5.2\n1. Algebra (NC) was one of my worst subjects (C) in high school (C).\n2. I had no idea that there were various theories (C), such as Euclidean and fractal.\n3. The smoke (NC) rose through the chimney (C).\n4. Bread (NC) is a staple in many societies (C).\n5. She decided to push the issue (C) further.\nTest yourself 6.1\n1. seattle proper\n2. crater lake national park proper\n3. tissues common\n4. sofa common\n5. pepsi cola proper\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.\nUNIT 1: NOUNS\n22</p>"
   },
   {
    "n": 7,
    "title": "Identifying verbs",
    "html": "<p>What' s a verb? V erbs are words that usually express an action. Here are two easy ways to\nidentify a verb; you can use either one.\nQuick tip 7.1\nIf a word can have should in front of it and the phrase sounds complete, the word is a\nverb. Examples:\nshould leave\n,\nshould sail\n,\nshould discover</p>\n<p>,\nshould complain\n.\nLeave\n,\nsail\n,\ndiscover</p>\n<p>, and\ncomplain\nare all verbs.\nQuick tip 7.2\nIf a word can have to in front of it and the phrase sounds complete, it's a verb. Examples: to\nleave\n,\nto sail\n,\nto discover</p>\n<p>,\nto complain\n.\nLeave\n,\nsail\n,\ndiscover</p>\n<p>, and\ncomplain\nare all verbs.\n(Note that we're not talking here about\ntwo\n,\ntoo\n, or the\nto\nthat indicates direction, as in\nLet's go to the park\n.)\nH e r ea r es o m ee xampleso fv e r b s . Y o uc a ns e et h a tt h e ya l lm e e tt h et e s tw i t h should and\nthe test with\nto\n.\ngo:\nshould go\nto go\ntell: should tell to tell\ndisagree: should disagree to disagree\nspell: should spell to spell\nIn contrast, the following words do not pass the\nshould\nor\nto\ntest:\ncodiee: *should codiee\n*to codiee\nbeautiful: *should beautiful *to beautiful\nhardly: *should hardly *to hardly\nunder: *should under\n*to under\nThus,\ncodiee\n,\nbeautiful\n,\nhardly\n,a n d\nunder\nare not verbs.\nTest yourself 7.1\nWhich of the following words are verbs? See if they sound like a complete unit when you put the\nword here:\nshould or to . Check the appropriate column.\nVerb Not a verb\nSample: characteristic ...................\n23</p>\n<p>Getting started (answers on p. 41)\n1. defend ................... ...................\n2. include ................... ...................\n3. largest ................... ...................\n4. how ................... ...................\n5. learn ................... ...................\nMore practice (answers on the website)\n6. sightsee ................... ...................\n7. unbelievably ................... ...................\n8. look ................... ...................\n9. grow ................... ...................\n10. ambitious ................... ...................\nTest yourself 7.2\nUnderline the verbs in these phrases. Test each word to see if it sounds like a complete unit when\nyou put the word here:\nshould or to .\nSample: should really think\nGetting started\n(answers on p. 41)\n1. must not worry\n2. might keep\n3. wish for peace\n4. may sometimes cook\n5. will travel\nMore practice\n(answers on the website)\n6. can usually sleep late\n7. won't go home\n8. would like guidance\n9. could never build\n10. shall do\nUNIT 2: VERBS\n24</p>"
   },
   {
    "n": 8,
    "title": "The verb base",
    "html": "<p>Sometimes a verb changes its form. Let' s look at the following sentences. The verb is\nunderlined in each one.\n1. John should study.\n2. John studied.\n3. John is studying.\n4. John studies.\nY ou certainly can't say,\n*John should studied\n,o r\nJohn to studied\n, so how do we know that\nstudied\nis a verb? To test the word, you have to see if it can follow\nshould\nor\nto\nin a didierent\nform, not necessarily in the form that you see in a particular sentence. For example, if\nyou see\nJohn studied\n,a s ky ourselfi ft h e r e ' sad i di e r e n tf o r mo f\nstudied\nthat can follow\nshould\nor\nto\n.I nt h i sc a s et h e r ei s :\nJohn should study or John decided to study .S o study and\nall its forms are verbs. The form of the verb that follows\nshould\nor\nto\nis called the\nbase\nform\nor\ninfinitive\nform\n.T heterm\ninfinitive\nis used to refer either to the base form alone\n(for example,\nstudy\n), or to the\nto\n+b a s ef o r m( f o re x a m p l e ,\nto study\n).\nLet' s put each of these verbs into its base form.The base form is underlined.\n5. working: (should, to) work\n6 . believed :( s h o u l d ,t o )believe\n7. written: (should, to) write\n8 . w o r e :( s h o u l d ,t o )wear\n9 . t h r o w s :( s h o u l d ,t o )throw\nTest yourself 8.1\nPut each of the verbs below into its base form. Simply find the form that follows should or to .\nSample: grew: grow\nGetting started\n(answers on p. 41)\n1. wrote: .....................................................\n2. talking: .....................................................\n3. thought: .....................................................\n4. considered: .....................................................\n5. seen: .....................................................\nMore practice (answers on the website)\n6. investigates: ......................................................\n7. spoken : ......................................................\n8. married: ......................................................\n9. decides: ......................................................\n10. found: ......................................................\nTest yourself 8.2\nWhich of the following words are verbs? Y ou may have to put some into their base form in order to be\nsure. Remember also that a verb usually indicates an action.\nVerb Not a verb\nSample: ffew\n ...................\n25</p>\n<p>Getting started (answers on p. 41)\n1. danced ................... ...................\n2. sofa ................... ...................\n3. large ................... ...................\n4. gave ................... ...................\n5. stares ................... ...................\nMore practice (answers on the website)\n6. pushed ................... ...................\n7. goodness ................... ...................\n8. at ................... ...................\n9. carries ................... ...................\n10. them ................... ...................\nTest yourself 8.3\nUnderline the verbs in each of the sentences below, using the should or to tests to help you.Y ou may\nhave to put some verbs into their base forms in order to be sure. Remember also that a verb usually\nindicates an action.\nSample: She grabbed his arm.\nGetting started\n(answers on p. 41)\n1. The host greeted us cordially.\n2. She should say that again.\n3. Jonathan walked over to the\ncar.\n4. He washes dishes every evening.\n5. Y ou can't speakVietnamese.\nMore practice\n(answers on the website)\n6. My neighbor ffew to Chicago.\n7 . T h ec hildrenw a n t e ds o m ec a n d y .\n8 . Tomorroww em i g h tg ot ot h em u s e u m .\n9. The censor usually objects to the same seven\nwords.\n10. In the afternoon I bought a present for my son.\nUNIT 2: VERBS\n26</p>"
   },
   {
    "n": 9,
    "title": "Action verbs and linking verbs",
    "html": "<p>The verbs we have looked at so far, such as go , sing ,a n d revise , all indicate actions. In fact,\nthey're called\naction verbs\n. However, there are other verbs which don't indicate actions.\nThese are most commonly called\nlinking verbs\n. One example of such a verb is the word\nseem\n,a si nt h es entences ,\nYo useem tired , They've seemed busy lately . Don't worry, though:\nseem\nstill follows our\nshould\nor\nto\nrules:\nHarry should seem surprised at times ; Yo u d o n' t\nwant to seem arrogant, do you? So even though seem isn't indicating an action, it' s easy to\nidentify it as a verb. Other examples of linking verbs are\nresemble\nand\nbecome\n.L inking\nverbs express a relationship between the noun or pronoun that comes before the linking\nverb and whatever follows it. (For pronouns, see\nUnit 7\n.)\nTest yourself 9.1\nWhich of the following words are verbs? See if each sounds like a complete unit when you put the\nword here:\nshould or to . Check the appropriate column. All the verbs will be linking\nverbs.Y ou may have to put some in their base form to be sure.\nVerb\nNot a verb\nSample: appear\n ...................\nGetting started (answers on p. 42)\n1. tasted ................... ...................\n2. friendly ................... ...................\n3. shady ................... ...................\n4. be ................... ...................\n5. got ................... ...................\nMore practice (answers on the website)\n6. look ................... ...................\n7. huge ................... ...................\n8. seven ................... ...................\n9. ocean ................... ...................\n10. sound ................... ...................\nTest yourself 9.2\nUnderline the verbs in these sentences.Test each word to see if it sounds like a complete unit when\nyou put the word here:\nshould or to . All the verbs will be linking verbs.Y ou may have to\nput some in their base form to be sure.\nSample: She looked happy.\nGetting started\n(answers on p. 42)\n1. Barry will feel awful about it.\n2. Melissa resembles her mother.\n3. Zack sounded extremely\nangry.\n4. The fish tasted undercooked.\n5. Y ou were not home early.\nMore practice\n(answers on the website)\n6. The final exam proved diflcult.\n7. That dinner smells so good!\n8 . T h efi r e fi g h t e r sr e m a i na tt h es t a t i o na l l\nnight long.\n9. They stayed indoors throughout their ordeal.\n10. By noon the weather turned nice.\n27</p>\n<p>The most common linking verb is the verb be ,o f t e nc a l l e dt h e copula .Y ou can see didierent\nforms of the verb\nbe\nin the following sentences.\n1. I am happy.\n2. Y ouare happy.\n3. He is happy.\n4. I was happy.\n5. Y ouwere happy.\n6. I have been happy.\n7. He is being happy.\nNotice how didierent these forms are from the base form of\nbe\n.I nf a c t ,\nbe\nis the most\nirregular verb in the English language: it has more forms than any other verb. But you\ncan still use the\nshould\nor\nto\ntest to identify\nbe\nas a verb:\nYo ushould be happy , They decided\nto be happy . For convenience, the forms of be are indicated in Quick tip 9.1 .\nQuick tip 9.1\nThe forms of the irregular verb be are: am , are , is , was , were , be , been , being .\nNote that be and become are two didierent verbs. Here are the forms of become : become ,\nbecomes\n,\nbecame\n,\nbecoming\n.\nTest yourself 9.3\nUnderline the forms of be in each of the sentences below. Some sentences may contain more than\none form of\nbe\n.\nSample: It is a privilege to meet you.\nGetting started\n(answers on p. 42)\n1. Paul was in power at that moment.\n2. They are absolutely correct in their thinking.\n3. Y our suitcases were in the overhead\ncompartment during the ffight.\n4. Christina has been wanting to go to Europe\nfor a long time.\n5. What is wrong with being a good student?\nMore practice\n(answers on the website)\n6. The situation is getting out of hand.\n7. My niece wants to be a psychiatrist when\nshe grows up.\n8. The problem is being corrected as we\nspeak.\n9. History might be being made right now.\n10. I am happy to show you around town.\nOften, forms of the verb\nb\ne are said and written as contractions, as in these sentences:\n8. I 'm happy. (verb = am)\n9. He 's happy. (verb = is)\n10. We're happy. (verb = are)\n11. He 's being happy. (verb = is)\nThese are all still sentences with\nbe\n.\nFor more on the ve rb\nbe\n,s e eL e s s o n s3 4a n d3 5 .\nTest yourself 9.4\nUnderline the forms of be in each of the sentences below. Some will be written as contractions.\nSample: It ' s unusual to see rain at this time of the year.\nUNIT 2: VERBS\n28</p>\n<p>Getting started (answers on p. 42)\n1. They're usually home by now.\n2. Are you worried about\nanything?\n3. I heard that the ffight was late.\n4. We're honored by your presence.\n5. It's too bad that the Y ankees lost last\nnight.\n More practice (answers on the website)\n6. I think she' s my husband' s new boss.\n7. The tyrant will certainly be accused of\ncrimes against humanity.\n8. Y ou're a real good friend.\n9. I'm afraid to tell you the truth.\n10. It has been far too long since we l …</p>\n<p>Getting started (answers on p. 43)\n1. The car spun out of control.\n2. Don't talk during the movie.\n3. The doctor tied a strip of gauze around her\nhand.\n4. Maxine spent too much money.\n5. They saw the play last Sunday.\n More practice (answers on the website)\n6. Molly received a reply to her letter.\n7. He ate on the stoop of the front porch.\n8. Grandma held the kitten in her lap.\n9. She never says anything.\n10. They wash the windows regularly.\nTest yourself 9.8\nIdentify the verb in each of the following sentences.Y ou may have to put some in their base forms\na n dt e s te a c hw o r dw i t h\nshould\nor\nto\nin order to be sure of your answer. Each sentence has only one\nverb.The verbs in this exercise will be either action or linking verbs.\nSample: Bridget spent hours in the dusty old bookstore.\nGetting started\n(answers on p. 43)\n1. That was the best meal in the world.\n2. I understand your point.\n3. Maybe they know each other well.\n4. She is fromWisconsin.\n5. Those ffowers smell heavenly.\nMore practice\n(answers on the website)\n6. It seemed late.\n7. Johnny packed all our things.\n8. Mother is always right about that.\n9. She went down to the basement.\n10. I felt wonderful about my decision.\nHow can you determine if a verb is being used as an action verb or a linking verb? There\nare a number of didierences between them. One way is to think of a linking verb as an\nequal sign (=). For example:\n12. Harry resembles his brother.\nHarry = his brother.\n13. Y ou are bored.\nY ou = bored.\n14. That strange looking vegetable tastes awful.\nThat strange looking vegetable = awful.\nResembles\n,\nare\n,a n d\ntastes\nare each being used here as linking verbs.\nAnother way to identify a linking verb is to see if you can substitute a form of\nbe\nfor it,\nand leave the meaning basically the same. For example, take the sentence\nJohn seems\ninterested in the conversation\n.W ecansubstituteaformof\nbe\n,s p e c i fi c a l l y ,\nis\n,f o r\nseems\n:\nJohn is interested in the conversation\n.T h u s ,\nseems\nis a linking verb in the sentence\nJohn\nseems interested in the conversation\n.Take a look at some more examples.\n15. After a while, the hotel became dingy.\nAfter a while, the hotel was dingy.\n16. Annie and Janine look surprised.\nAnnie and Janine are surprised.\nUNIT 2: VERBS\n30</p>\n<p>1 7 . Althoughi nh i se ighties ,h eremains youthful-looking.\nAlthough in his eighties, he is youthful-looking.\nThus,\nbecame\n,\nlook\n,a n d\nremains\nare being used as linking verbs in these sentences.\nRemember that\nbe\nand its forms can also be used as linking verbs. While\nQuick tip\n9.2\nbelow isn't foolproof, it will usually help you identify whether a verb is an action or link-\ning verb.\nQuick tip 9.2\nIf you can substitute a form of be for a verb and the meaning of the sentence is basically\nthe same, the verb is probably being used as a linking verb. The verb\nbe\nand its forms\nare also linking verbs.\nAnother way to identify a linking verb is to see if you can substitute a form of the word\nseem\nfor it, and leave the meaning basically the same. For example, in the sentence,\nThe\nhot shower felt soothing\n,w ec a ns ubstituteaf o r mo f\nseem\nfor\nfelt\n, and leave the sentence\nlargely unchanged:\nThe hot shower seemed soothing\n. Note the following examples:\n18a. After a while, the hotel became dingy.\n18b. After a while, the hotel seemed dingy.\n19a. Annie and Janine look surprised.\n19b. Annie and Janine seem surprised.\n20a. Although in his eighties, he remains youthful-looking.\n20b. Although in his eighties, he seems youthful-looking.\nThus,\nbecame\n,\nlook\n,a n d\nremains\nare being used as linking verbs in these sentences. Again,\nwhile\nQuick tip\n9.3\nbelow also isn't foolproof, it will help you identify whether a verb is an\naction or linking verb.\nQuick tip 9.3\nIf you can substitute a form of seem for a verb and the meaning of the sentence is basically\nthe same, the verb is probably being used as a linking verb.\nTest yourself 9.9\nDecide if the underlined verbs in the sentences below are action or linking verbs. In this exercise, if\nit' s a form of\nbe\n, it' s being used as a linking verb. If it' s not a form of\nbe\n,u s et h e\nbe\nor\nseem\nsubstitution\ntests to see if the verb is being used as a linking verb.\nAction Linking\nSample: She laughed at all his jokes.\n ...................\nGetting started (answers on p. 43)\n1. The Czar was a person of high rank. ................... ...................\n2. That dog barks a lot. ................... ...................\n3. Mr. Kelly watched the traflc below his window. ................... ...................\n4. Y ou havebeen a terrific friend to me over the years. ................... ...................\n5. I love the way the pillows feel so cozy in this hotel. ................... ...................</p>\n<p>More practice (answers on the website)\n6. Jimmy is always eager to answer any questions. ................... ...................\n7. Finding a healthy meal on the menu proved easy. ................... ...................\n8. He ' s not as smart as he led me to believe. ................... ...................\n9. We could hear the neighbors arguing for hours. ................... ...................\n10. That sounds good to me. ................... ...................\nTest yourself 9.10\nUnderline the verb in each sentence below and decide if it' s being used as an action or linking verb.\nIn this exercise, if the verb is a form of\nbe\n, it' s being used as a linking verb. If it' s not a form of\nbe\n,u s e\nthe\nbe\nor\nseem\nsubstitution tests to see if the verb is being used as a linking verb.\nAction Linking\nSample: The policeman gave him a ticket.\n ...................\nGetting started (answers on p. 43)\n1. They became best friends. ................... ...................\n2. It is not nearly the same as mine. ................... ...................\n3. Unfortunately, I forgot your birthday this year. ................... ...................\n4. I went to the corner bakery. ................... ...................\n5. Mark remains a legend to this day. ................... ...................\nMore practice (answers on the website)\n6. Trigonometry bores me. ................... ...................\n7. Babies often get hungry. ................... ...................\n8 . N oo n eg o taCo nt h em i d t e r me x a m . ................... ...................\n9. It's much ado about nothing. ................... ...................\n10. He made such a fuss over a minor mistake. ................... ...................\nHopefully you now have a good sense of the didierence between action and linking\nverbs. However, there are some verbs that can be used as either an action verb or a linking\nverb, depending on the sentence that it' s in. Compare, for example, the following two sen-\ntences with\nfeel\n:\n21. Mary felt tired.\n22. Mary felt the softness of the material.\nIn sentence 21,\nfelt\nis being used as a linking verb. Note that\nMary = tired\n;\nMary is tired\n,\nMary seems tired\nall make sense here. In sentence 22, Mary is doing an action. Also, one\ncan't think of it as:\n*Mary = the softness of the material\n,\n*Mary was the softness of the mate-\nrial\n,o r\n*Mary seemed the softness of the material\n.T h a t i s , thinkingof\nfelt\nas an equal sign\nor substituting a form of\nbe\nor\nseem\nfor\nfelt\nclearly doesn't work here.Thus, in sentence 22,\nfelt\nis being used as an action verb.\nUNIT 2: VERBS\n32</p>\n<p>H e r ea r eaf e wm o r ee xamples :\n23. The dinner at that restaurant tasted delicious. (linking verb)\n(The dinner at that restaurant was delicious.)\n24. I tasted the soup. (action verb)\n(*I was the soup.)\n25. The ffowers smelled heavenly. (linking verb)\n(The ffowers are heavenly . )\n26. She smelled the fire before she saw it. (action verb)\n(*She was the fire before she saw it.)\nTest yourself 9.11\nUnderline the verb in each sentence below and decide if it' s being used as an action or linking verb.\nAction\nLinking\nSample: The crowd grew angry . ...................\nGetting started (answers on p. 43)\n1. He grew potatoes on his farm. ................... ...................\n2. I looked at the mess all around me. ................... ...................\n3. Stephen looks happy today. ................... ...................\n4. In reality, exceptions rarely prove the rule. ................... ...................\n5. Learning the rule proved diflcult. ................... ...................\nMore practice (answers on the website)\n6. I got nervous before my blood test. ................... ...................\n7. I got a spasm in my ar m. ................... ...................\n8. The idea of having a pizza sounds real good. ................... ...................\n9. Last night a burglar sounded the alarm. ................... ...................\n10. Y ou rarely become a star overnight. ................... ...................\nTo enhance your understanding\nAnother important difference between action and linking verbs is that a linking verb can be\nfollowed by just an adjective, while an action verb cannot:\n27. She is tired. ( TIred is an adjective.)\n28. The mayor looked victorious. ( Victorious is an adjective.)\n29. *She washed tired.\n30. *The mayor voted victorious.\nAs you can see,\nis\nand\nlooked\nare linking verbs in these sentences;\nwashed\nand\nvoted\nare\naction verbs. However, since we haven't yet talked about adjectives (see\nLesson 16</p>\n<p>), just\nkeep this in mind as another difference between the two types of verbs.</p>\n<p>Quick tip 9.4\nLinking verbs are followed or modiﬁed by adjectives , while action verbs are followed or\nmodiﬁed by\nadverbs\n.\nTest yourself 9.12 – Grand ﬁnale\nIf you can do this exercise, you've achieved a basic understanding of nouns and verbs.\nIn each sentence below, underline the nouns and put a squiggly line under each verb. Each\nsentence has only one verb but may have more than one noun.\nSample: The judges were unanimous in their decision.\nGetting started\n(answers on p. 43)\n1. Their daughter announced her engagement\nlater.\n2. The surgeon washed his hands.\n3. The pianist was diligent.\n4. The young boy gritted his teeth.\n5. Her assistant is always late.\nMore practice\n(answers on the website)\n6. The mayor explained his position.\n7. The t rain came early.\n8. Three other customers placed orders that\nday.\n9. Her friend was helpful.\n10. That hot meal tastes great.\nTo further enhance your understanding\nCompare the following two sentences:\n31a. She looked careful. (\ncareful\nis an adjective)\n31b. She looked carefully. (\ncarefully\nis an adverb)\nCan you sense the difference? In sentence 31a the verb\nlooked\nis a linking verb, followed\nby the adjective\ncareful\n; the basic meaning of the sentence is\nShe looked like she was a\ncareful person\n. In contrast, in sentence 31b\nlooked\nis an action verb, followed by the adverb\ncarefully\n(adverbs will be discussed in\nLesson 27</p>\n<p>); the basic meaning of this sentence\nis\nShe looked around in a careful manner\n.\nQuick tip\n9.4\nidentiﬁes yet another difference\nbetween linking verbs and action verbs.\nUNIT 2: VERBS\n34</p>"
   },
   {
    "n": 10,
    "title": "Transitive and intransitive verbs",
    "html": "<p>Take a look at the following questions, each with an action verb.\n1. What did you write?\n2. Who did you annoy?\n3. What did you throw?\nThese are all perfectly fine questions and easy to answer, e.g.\nI wrote a letter\n,\nIa n n o y e dm y\nneighbor\n,\nI threw a ball\n.\nNow compare the first group of questions to the next group, each of which also has an\naction verb.\n4. *What did you\nsleep\n?\n5. *What did you\ndie\n?\n6. *Who did you\narrive\n?\nThese questions are all strange and can't really be answered. That' s because the verbs in\nthis second group are verbs that do not act on anything.\nThus, you can see that there are two kinds of verbs. One kind, such as\nwrite\n,\nannoy\n,a n d\nthrow\n, acts upon something. The noun (or noun phrase; see Lesson 28) that the verb acts\nupon is called the\ndirect object\nof the sentence. (Y ou'll learn more about direct objects in\nLesson 39\n.) Those verbs that act on something are called\ntransitive\nverbs. Typically, in\nstatements, a transitive verb is followed by the noun (or noun phrase) that it is acting upon.\nOther verbs, such as\nsleep\n,\ndie\n,a n d\narrive\n, do not act upon something. In fact, these verbs\ncan't have a direct object. Notice that you can't say, for example:\n*I usually sleep the dog\n,\n*\nThey'll arrive the book\n.Those verbs that do not act on something and appear in sentences\nthat do not have a direct object are called\nintransitive\nverbs.\nQuick tip 10.1\nAction verbs that act upon something are called transitive verbs. Action verbs that do not\nact upon something are called\nintransitive verbs\n.\nQuick tip 10.2\nIf a verb (in any of its forms) can be put in one of the following slots, it is transitive: (a) What\ndid you ? (b) Who did you ? If a verb cannot be put in one of these slots, it is\nintransitive.\nSo, which of the following verbs are transitive and which intransitive?\n7. What did you discover?\n8. *What did you struggle?\n9. Who did you meet?\n10. *What did you laugh?\nSince sentences 7 and 9 are fine questions,\ndiscover\nand\nmeet\nare transitive verbs. Since sen-\ntences 8 and 10 are not acceptable questions,\nstruggle\nand\nlaugh\nare intransitive verbs. Note\n35</p>\n<p>that although you can say something like, What did you struggle with? or, What did you laugh\nat?\n, you can't ask the questions as they are stated above, and so the verbs are intransitive.\nThere' s also another way to decide if a verb is transitive or intransitive:\nQuick tip 10.3\nIf a verb (in one of its forms) can be put in one of the following slots, it is transitive:\n(a) He something. (b) He someone.\nQuick tip 10.4\nIf a verb (in one of its forms) can be put in the following slot, it is intransitive:\nHe .\nLet' s use these Quick tips to decide which of the following verbs are transitive and\nwhich are intransitive:\n11. He discovered something.\n12. He met someone.\n13. He struggled.\n14. He laughed.\nQuick tip\n10.3\nhelps identify the verb\ndiscovered\nin sentence 11 and the verb\nmet\nin sentence\n12 as transitive.\nQuick tip\n10.4\nhelps identify the verb\nstruggled\nin sentence 13 and the verb\nlaughed\nin sentence 14 as intranstive.\nTest yourself 10.1\nDecide if each of the verbs below is transitive or intransitive. Use Quick tips 9.2 , 9.3 and 9.4 to help\nyou decide.\nTransitive Intransitive\nSample: mention\n ...................\nGetting started (answers on p. 44)\n1. tell ................... ...................\n2. rise ................... ...................\n3. raise ................... ...................\n4. fall ................... ...................\n5. publish ................... ...................\nMore practice (answers on the website)\n6. proclaim ................... ...................\n7. vanish ................... ...................\n8. omit ................... ...................\n9. cry ................... ...................\n10. remove ................... ...................\nNow take a look at a few more sentences :\n15a. I ate.\n15b. I ate dinner.\n16a. She dances well.\n16b. She dances the tango well.\n17a. The audience left.\n17b. The audience left the theater.\nUNIT 2: VERBS\n36</p>\n<p>Yo ucanseethatthereareverbs , suchaseat , dance ,a n d leave , that can be used as either\ntransitive or intransitive verbs.\nQuick tip 10.5\nSome verbs can be either transitive or transitive. These can occur in both of the following\nslots: (a) He something / someone. (b) He .\nTest yourself 10.2\nDecide if each of the verbs below is transitive, intransitive, or either. Use Quick tips 10.2 , 10.3 , 10.4 ,\nand 10.5 to help you decide.\nTransitive Intransitive Either\nSample: play ................... ...................\nGetting started (answers on p. 44)\n1. beat ................... ................... ...................\n2. cough ................... ................... ...................\n3. relax ................... ................... ...................\n4. drive ................... ................... ...................\n5. entertain ................... ................... ...................\nMore practice (answers on the website)\n6. seek ................... ...... …</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 11,
    "title": "Phrasal verbs",
    "html": "<p>W h i l em o s tv e r b sa r es i n g l ew o r d s ,s o m ea r e phrasal : they contain two words. In phrasal</p>\n<p>verbs, the first word is a verb and the second word is called a</p>\n<p>particle</p>\n<p>.H e r ea r es o m e</p>\n<p>examples, with the phrasal verbs underlined:</p>\n<p>1. She looked up the answer.</p>\n<p>2. W e will just drop odi the files.</p>\n<p>3. The professor pointed out the correct answer.</p>\n<p>Notice that the meaning of a phrasal verb is often similar to the meaning of a single verb:</p>\n<p>4. She looked up the answer.</p>\n<p>She researched the answer.</p>\n<p>5. We will just drop odi the files.</p>\n<p>We w i l l ju stdeliver the files.</p>\n<p>6. The professor pointed out the correct answer.</p>\n<p>The professor identified the correct answer.</p>\n<p>Quick tip 11.1</p>\n<p>If you can substitute a single verb for a verb and the word following it, you probably have a</p>\n<p>phrasal verb</p>\n<p>. For example, you can say,</p>\n<p>She pointed out the truth to us or She showed the</p>\n<p>truth to us. Point out is a</p>\n<p>phrasal verb</p>\n<p>.</p>\n<p>W e can also still identify phrasal verbs using our to or should Quick</p>\n<p>tips</p>\n<p>:</p>\n<p>to look up should look up</p>\n<p>to warm up should warm up</p>\n<p>to point out should point out</p>\n<p>Test yourself 11.1</p>\n<p>Each of the sentences below contains a phrasal verb. Underline the phrasal verb, using the verb</p>\n<p>substitution tip and the</p>\n<p>to and should tips to help you.</p>\n<p>Sample: The lecturer summed up his main points.</p>\n<p>Getting started</p>\n<p>(answers on p. 44)</p>\n<p>1. He fixed up the lighting in the hall.</p>\n<p>2. They read over the document many times.</p>\n<p>3. Y ou dream up the most amazing things.</p>\n<p>4. Ron takes out the garbage every Monday night.</p>\n<p>5. I will pay odi my mortgage in fifteen years.</p>"
   }
  ],
  "tips": [
   {
    "code": "7.1",
    "text": "If a word can have should in front of it and the phrase sounds complete, the word is a verb. Examples: should leave , should sail , should discover , should complain . Leave , sail , discover , and complain are all verbs."
   },
   {
    "code": "7.2",
    "text": "If a word can have to in front of it and the phrase sounds complete, it's a verb. Examples: to leave , to sail , to discover , to complain . Leave , sail , discover , and complain are all verbs. (Note that we're not talking here about two , too , or the to that indicates direction, as in Let's go to the park .) H e r ea r es o m ee xampleso fv e r b s . Y o uc a ns e et h a tt h e ya l lm e e tt h et e s tw i t h should and the test with to . go: should go to go tell: should tell to tell disagree: should disagree to disagree spell: should spell to spell In contrast, the following words do not pass the should or to test: codiee: *should…"
   },
   {
    "code": "9.1",
    "text": "The forms of the irregular verb be are: am , are , is , was , were , be , been , being . Note that be and become are two didierent verbs. Here are the forms of become : become , becomes , became , becoming ."
   },
   {
    "code": "9.2",
    "text": "below isn't foolproof, it will usually help you identify whether a verb is an action or link- ing verb."
   },
   {
    "code": "9.2",
    "text": "If you can substitute a form of be for a verb and the meaning of the sentence is basically the same, the verb is probably being used as a linking verb. The verb be and its forms are also linking verbs. Another way to identify a linking verb is to see if you can substitute a form of the word seem for it, and leave the meaning basically the same. For example, in the sentence, The hot shower felt soothing ,w ec a ns ubstituteaf o r mo f seem for felt , and leave the sentence largely unchanged: The hot shower seemed soothing . Note the following examples: 18a. After a while, the hotel became dingy. 18b. After a while, the hotel seemed dingy.…"
   },
   {
    "code": "9.3",
    "text": "below also isn't foolproof, it will help you identify whether a verb is an action or linking verb."
   },
   {
    "code": "9.3",
    "text": "If you can substitute a form of seem for a verb and the meaning of the sentence is basically the same, the verb is probably being used as a linking verb."
   },
   {
    "code": "9.4",
    "text": "Linking verbs are followed or modiﬁed by adjectives , while action verbs are followed or modiﬁed by adverbs ."
   },
   {
    "code": "9.4",
    "text": "identiﬁes yet another difference between linking verbs and action verbs."
   },
   {
    "code": "10.1",
    "text": "Action verbs that act upon something are called transitive verbs. Action verbs that do not act upon something are called intransitive verbs ."
   },
   {
    "code": "10.2",
    "text": "If a verb (in any of its forms) can be put in one of the following slots, it is transitive: (a) What did you ? (b) Who did you ? If a verb cannot be put in one of these slots, it is intransitive. So, which of the following verbs are transitive and which intransitive? 7. What did you discover? 8. *What did you struggle? 9. Who did you meet? 10. *What did you laugh? Since sentences 7 and 9 are fine questions, discover and meet are transitive verbs. Since sen- tences 8 and 10 are not acceptable questions, struggle and laugh are intransitive verbs. Note 35 that although you can say something like, What did you struggle with? or, What did you…"
   },
   {
    "code": "10.3",
    "text": "If a verb (in one of its forms) can be put in one of the following slots, it is transitive: (a) He something. (b) He someone."
   },
   {
    "code": "10.4",
    "text": "If a verb (in one of its forms) can be put in the following slot, it is intransitive: He . Let' s use these"
   },
   {
    "code": "10.3",
    "text": "helps identify the verb discovered in sentence 11 and the verb met in sentence 12 as transitive."
   },
   {
    "code": "10.4",
    "text": "helps identify the verb struggled in sentence 13 and the verb laughed in sentence 14 as intranstive."
   },
   {
    "code": "10.5",
    "text": "Some verbs can be either transitive or transitive. These can occur in both of the following slots: (a) He something / someone. (b) He ."
   },
   {
    "code": "11.1",
    "text": "If you can substitute a single verb for a verb and the word following it, you probably have a phrasal verb . For example, you can say, She pointed out the truth to us or She showed the truth to us. Point out is a phrasal verb . W e can also still identify phrasal verbs using our to or should Quick tips : to look up should look up to warm up should warm up to point out should point out"
   }
  ],
  "practice": [
   {
    "code": "5.1",
    "instruction": "1. The lights (C) of the city (C) twinkled. 2. I love eating rice (NC). 3. His anger (NC) was barely under control. 4. Her job (C) was rather demanding. 5. Many types of information (NC) are available at the library (C).",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "5.2",
    "instruction": "1. Algebra (NC) was one of my worst subjects (C) in high school (C). 2. I had no idea that there were various theories (C), such as Euclidean and fractal. 3. The smoke (NC) rose through the chimney (C). 4. Bread (NC) is a staple in many societies (C). 5. She decided to push the issue (C) further.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "6.1",
    "instruction": "1. seattle proper 2. crater lake national park proper 3. tissues common 4. sofa common 5. pepsi cola proper FOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "7.1",
    "instruction": "Which of the following words are verbs? See if they sound like a complete unit when you put the word here: should or to . Check the appropriate column. Verb Not a verb",
    "sample": "Sample: characteristic ................... 23",
    "items": [
     {
      "n": 1,
      "text": "defend",
      "answer": "defend"
     },
     {
      "n": 2,
      "text": "include",
      "answer": "include"
     },
     {
      "n": 3,
      "text": "largest",
      "answer": "largest"
     },
     {
      "n": 4,
      "text": "how",
      "answer": "how"
     },
     {
      "n": 5,
      "text": "learn",
      "answer": "learn"
     }
    ],
    "answers": {
     "1": "defend",
     "2": "include",
     "3": "largest",
     "4": "how",
     "5": "learn"
    }
   },
   {
    "code": "7.2",
    "instruction": "Underline the verbs in these phrases. Test each word to see if it sounds like a complete unit when you put the word here: should or to .",
    "sample": "Sample: should really think",
    "items": [
     {
      "n": 1,
      "text": "must not worry",
      "answer": "must not worry"
     },
     {
      "n": 2,
      "text": "might keep",
      "answer": "might keep"
     },
     {
      "n": 3,
      "text": "wish for peace",
      "answer": "wish for peace"
     },
     {
      "n": 4,
      "text": "may sometimes cook",
      "answer": "may sometimes cook"
     },
     {
      "n": 5,
      "text": "will travel",
      "answer": "will travel"
     }
    ],
    "answers": {
     "1": "must not worry",
     "2": "might keep",
     "3": "wish for peace",
     "4": "may sometimes cook",
     "5": "will travel"
    }
   },
   {
    "code": "8.1",
    "instruction": "Put each of the verbs below into its base form. Simply find the form that follows should or to .",
    "sample": "Sample: grew: grow",
    "items": [
     {
      "n": 1,
      "text": "wrote:",
      "answer": "wrote: write"
     },
     {
      "n": 2,
      "text": "talking:",
      "answer": "talking: talk"
     },
     {
      "n": 3,
      "text": "thought:",
      "answer": "thought: t hink"
     },
     {
      "n": 4,
      "text": "considered:",
      "answer": "considered: consider"
     },
     {
      "n": 5,
      "text": "seen:",
      "answer": "seen: see"
     }
    ],
    "answers": {
     "1": "wrote: write",
     "2": "talking: talk",
     "3": "thought: t hink",
     "4": "considered: consider",
     "5": "seen: see"
    }
   },
   {
    "code": "8.2",
    "instruction": "Which of the following words are verbs? Y ou may have to put some into their base form in order to be sure. Remember also that a verb usually indicates an action. Verb Not a verb",
    "sample": "Sample: ffew ................... 25",
    "items": [
     {
      "n": 1,
      "text": "danced",
      "answer": "danced"
     },
     {
      "n": 2,
      "text": "sofa",
      "answer": "sofa"
     },
     {
      "n": 3,
      "text": "large",
      "answer": "large"
     },
     {
      "n": 4,
      "text": "gave",
      "answer": "gave"
     },
     {
      "n": 5,
      "text": "stares",
      "answer": "stares"
     }
    ],
    "answers": {
     "1": "danced",
     "2": "sofa",
     "3": "large",
     "4": "gave",
     "5": "stares"
    }
   },
   {
    "code": "8.3",
    "instruction": "Underline the verbs in each of the sentences below, using the should or to tests to help you.Y ou may have to put some verbs into their base forms in order to be sure. Remember also that a verb usually indicates an action.",
    "sample": "Sample: She grabbed his arm.",
    "items": [
     {
      "n": 1,
      "text": "The host greeted us cordially.",
      "answer": "The host greeted us cordially"
     },
     {
      "n": 2,
      "text": "She should say that again.",
      "answer": "She should say that again"
     },
     {
      "n": 3,
      "text": "Jonathan walked over to the car.",
      "answer": "Jonathan walked over to the car"
     },
     {
      "n": 4,
      "text": "He washes dishes every evening.",
      "answer": "He washes dishes every evening"
     },
     {
      "n": 5,
      "text": "Y ou can't speakVietnamese.",
      "answer": "You can’tspeakVietnamese. 41"
     }
    ],
    "answers": {
     "1": "The host greeted us cordially",
     "2": "She should say that again",
     "3": "Jonathan walked over to the car",
     "4": "He washes dishes every evening",
     "5": "You can’tspeakVietnamese. 41"
    }
   },
   {
    "code": "9.1",
    "instruction": "Which of the following words are verbs? See if each sounds like a complete unit when you put the word here: should or to . Check the appropriate column. All the verbs will be linking verbs.Y ou may have to put some in their base form to be sure. Verb Not a verb",
    "sample": "Sample: appear ...................",
    "items": [
     {
      "n": 1,
      "text": "tasted",
      "answer": "tasted"
     },
     {
      "n": 2,
      "text": "friendly",
      "answer": "friendly"
     },
     {
      "n": 3,
      "text": "shady",
      "answer": "shady"
     },
     {
      "n": 4,
      "text": "be",
      "answer": "be"
     },
     {
      "n": 5,
      "text": "got",
      "answer": "got"
     }
    ],
    "answers": {
     "1": "tasted",
     "2": "friendly",
     "3": "shady",
     "4": "be",
     "5": "got"
    }
   },
   {
    "code": "9.2",
    "instruction": "Underline the verbs in these sentences.Test each word to see if it sounds like a complete unit when you put the word here: should or to . All the verbs will be linking verbs.Y ou may have to put some in their base form to be sure.",
    "sample": "Sample: She looked happy.",
    "items": [
     {
      "n": 1,
      "text": "Barry will feel awful about it.",
      "answer": "Barry will feel awful about it"
     },
     {
      "n": 2,
      "text": "Melissa resembles her mother.",
      "answer": "Melissa resembles her mother"
     },
     {
      "n": 3,
      "text": "Zack sounded extremely angry.",
      "answer": "Zack sounded extremely angry"
     },
     {
      "n": 4,
      "text": "The fish tasted undercooked.",
      "answer": "The fish tasted undercooked"
     },
     {
      "n": 5,
      "text": "Y ou were not home early.",
      "answer": "Youwere not home early"
     }
    ],
    "answers": {
     "1": "Barry will feel awful about it",
     "2": "Melissa resembles her mother",
     "3": "Zack sounded extremely angry",
     "4": "The fish tasted undercooked",
     "5": "Youwere not home early"
    }
   },
   {
    "code": "9.3",
    "instruction": "Underline the forms of be in each of the sentences below. Some sentences may contain more than one form of be .",
    "sample": "Sample: It is a privilege to meet you.",
    "items": [
     {
      "n": 1,
      "text": "Paul was in power at that moment.",
      "answer": "Paul was in power at that moment"
     },
     {
      "n": 2,
      "text": "They are absolutely correct in their thinking.",
      "answer": "They are absolutely correct in their thinking"
     },
     {
      "n": 3,
      "text": "Y our suitcases were in the overhead compartment during the ffight.",
      "answer": "Your suitcases were in the overhead compartment during the £ight"
     },
     {
      "n": 4,
      "text": "Christina has been wanting to go to Europe for a long time.",
      "answer": "Christina has b e e nw antingt og ot oE u r o p ef o ral o n gt i m e"
     },
     {
      "n": 5,
      "text": "What is wrong with being a good student?",
      "answer": "What is wrong with being a good student?"
     }
    ],
    "answers": {
     "1": "Paul was in power at that moment",
     "2": "They are absolutely correct in their thinking",
     "3": "Your suitcases were in the overhead compartment during the £ight",
     "4": "Christina has b e e nw antingt og ot oE u r o p ef o ral o n gt i m e",
     "5": "What is wrong with being a good student?"
    }
   },
   {
    "code": "9.4",
    "instruction": "Underline the forms of be in each of the sentences below. Some will be written as contractions.",
    "sample": "Sample: It ' s unusual to see rain at this time of the year.",
    "items": [],
    "answers": {
     "1": "They ’re usually home by now",
     "2": "Are you worried about anything?",
     "3": "I heard that the £ight was late",
     "4": "W e’re honored by your presence",
     "5": "It ’ s too bad that theY ankees lost last night"
    }
   },
   {
    "code": "9.5",
    "instruction": "Which of these words is a verb? See if it sounds like a complete unit when you put the word here: should or to . Check the appropriate column. Some of the verbs are linking verbs and some are action verbs. All the verbs will be in their base forms. Verb Not a verb",
    "sample": "Sample: run ...................",
    "items": [
     {
      "n": 1,
      "text": "resemble",
      "answer": "resemble"
     },
     {
      "n": 2,
      "text": "become",
      "answer": "become"
     },
     {
      "n": 3,
      "text": "this",
      "answer": "this"
     },
     {
      "n": 4,
      "text": "be",
      "answer": "be"
     },
     {
      "n": 5,
      "text": "new",
      "answer": "new"
     }
    ],
    "answers": {
     "1": "resemble",
     "2": "become",
     "3": "this",
     "4": "be",
     "5": "new"
    }
   },
   {
    "code": "9.6",
    "instruction": "Which of these words is a verb? Y ou may have to put some in their base forms in order to be sure. Some are linking verbs. Verb Not a verb",
    "sample": "Sample: orange ...................",
    "items": [
     {
      "n": 1,
      "text": "appeared",
      "answer": "appeared"
     },
     {
      "n": 2,
      "text": "attends",
      "answer": "attends"
     },
     {
      "n": 3,
      "text": "whenever",
      "answer": "whenever"
     },
     {
      "n": 4,
      "text": "was",
      "answer": "was"
     },
     {
      "n": 5,
      "text": "heard",
      "answer": "heard UNIT 2: VERBS 42"
     }
    ],
    "answers": {
     "1": "appeared",
     "2": "attends",
     "3": "whenever",
     "4": "was",
     "5": "heard UNIT 2: VERBS 42"
    }
   },
   {
    "code": "9.7",
    "instruction": "Underline the verb in each of the following sentences.Y ou may have to put some in their base forms a n dt e s te a c hw o r dw i t h should or to i no r d e rt ob es u r eo fy o u ra n s w e r .E a c hs entenceh a so n l yo n e v e r b .T h ev e r b si nt h i se xercisea r ea l la c t i o nv e r b s .",
    "sample": "Sample: He bakes cookies for his son' s birthday.",
    "items": [],
    "answers": {
     "1": "The car spun out of control",
     "2": "Don’t talk during the movie",
     "3": "The doctor tied a strip of gauze around her hand",
     "4": "Maxine spent too much money",
     "5": "They saw the play last Sunday"
    }
   },
   {
    "code": "9.8",
    "instruction": "Identify the verb in each of the following sentences.Y ou may have to put some in their base forms a n dt e s te a c hw o r dw i t h should or to in order to be sure of your answer. Each sentence has only one verb.The verbs in this exercise will be either action or linking verbs.",
    "sample": "Sample: Bridget spent hours in the dusty old bookstore.",
    "items": [
     {
      "n": 1,
      "text": "That was the best meal in the world.",
      "answer": "That was the best meal in the world"
     },
     {
      "n": 2,
      "text": "I understand your point.",
      "answer": "I understand your point"
     },
     {
      "n": 3,
      "text": "Maybe they know each other well.",
      "answer": "Maybe they know each other well"
     },
     {
      "n": 4,
      "text": "She is fromWisconsin.",
      "answer": "She is fromWisconsin"
     },
     {
      "n": 5,
      "text": "Those ffowers smell heavenly.",
      "answer": "Those £owers smell heavenly"
     }
    ],
    "answers": {
     "1": "That was the best meal in the world",
     "2": "I understand your point",
     "3": "Maybe they know each other well",
     "4": "She is fromWisconsin",
     "5": "Those £owers smell heavenly"
    }
   },
   {
    "code": "9.9",
    "instruction": "Decide if the underlined verbs in the sentences below are action or linking verbs. In this exercise, if it' s a form of be , it' s being used as a linking verb. If it' s not a form of be ,u s et h e be or seem substitution tests to see if the verb is being used as a linking verb. Action Linking",
    "sample": "Sample: She laughed at all his jokes. ...................",
    "items": [
     {
      "n": 1,
      "text": "The Czar was a person of high rank.",
      "answer": "The Czar was a person of high rank"
     },
     {
      "n": 2,
      "text": "That dog barks a lot.",
      "answer": "That dog barks a lot"
     },
     {
      "n": 3,
      "text": "Mr. Kelly watched the traflc below his window.",
      "answer": "Mr. Kelly watched the tra⁄c below his window"
     },
     {
      "n": 4,
      "text": "Y ou havebeen a terrific friend to me over the years.",
      "answer": "You havebeen a terrific friend to me over the years"
     },
     {
      "n": 5,
      "text": "I love the way the pillows feel so cozy in this hotel.",
      "answer": "I love the way the pillows feel so cozy in this hotel"
     }
    ],
    "answers": {
     "1": "The Czar was a person of high rank",
     "2": "That dog barks a lot",
     "3": "Mr. Kelly watched the tra⁄c below his window",
     "4": "You havebeen a terrific friend to me over the years",
     "5": "I love the way the pillows feel so cozy in this hotel"
    }
   },
   {
    "code": "9.10",
    "instruction": "Underline the verb in each sentence below and decide if it' s being used as an action or linking verb. In this exercise, if the verb is a form of be , it' s being used as a linking verb. If it' s not a form of be ,u s e the be or seem substitution tests to see if the verb is being used as a linking verb. Action Linking",
    "sample": "Sample: The policeman gave him a ticket. ...................",
    "items": [
     {
      "n": 1,
      "text": "They became best friends.",
      "answer": "They became best friends"
     },
     {
      "n": 2,
      "text": "It is not nearly the same as mine.",
      "answer": "It is not nearly the same as mine"
     },
     {
      "n": 3,
      "text": "Unfortunately, I forgot your birthday this year.",
      "answer": "Unfortunately, I forgot your birthday this year"
     },
     {
      "n": 4,
      "text": "I went to the corner bakery.",
      "answer": "I went to the corner bakery"
     },
     {
      "n": 5,
      "text": "Mark remains a legend to this day.",
      "answer": "Mark remains a legend to this day"
     }
    ],
    "answers": {
     "1": "They became best friends",
     "2": "It is not nearly the same as mine",
     "3": "Unfortunately, I forgot your birthday this year",
     "4": "I went to the corner bakery",
     "5": "Mark remains a legend to this day"
    }
   },
   {
    "code": "9.11",
    "instruction": "Underline the verb in each sentence below and decide if it' s being used as an action or linking verb. Action Linking",
    "sample": "Sample: The crowd grew angry . ...................",
    "items": [
     {
      "n": 1,
      "text": "He grew potatoes on his farm.",
      "answer": "He grew potatoes on his farm"
     },
     {
      "n": 2,
      "text": "I looked at the mess all around me.",
      "answer": "I looked at the mess all around me"
     },
     {
      "n": 3,
      "text": "Stephen looks happy today.",
      "answer": "Stephen looks happy today"
     },
     {
      "n": 4,
      "text": "In reality, exceptions rarely prove the rule.",
      "answer": "In reality, exceptions rarely prove the rule"
     },
     {
      "n": 5,
      "text": "Learning the rule proved diflcult.",
      "answer": "Learning the rule proved di⁄cult"
     }
    ],
    "answers": {
     "1": "He grew potatoes on his farm",
     "2": "I looked at the mess all around me",
     "3": "Stephen looks happy today",
     "4": "In reality, exceptions rarely prove the rule",
     "5": "Learning the rule proved di⁄cult"
    }
   },
   {
    "code": "10.1",
    "instruction": "Decide if each of the verbs below is transitive or intransitive. Use Quick tips 9.2 , 9.3 and 9.4 to help you decide. Transitive Intransitive",
    "sample": "Sample: mention ...................",
    "items": [
     {
      "n": 1,
      "text": "tell",
      "answer": "tell"
     },
     {
      "n": 2,
      "text": "rise",
      "answer": "rise"
     },
     {
      "n": 3,
      "text": "raise",
      "answer": "raise"
     },
     {
      "n": 4,
      "text": "fall",
      "answer": "fall"
     },
     {
      "n": 5,
      "text": "publish",
      "answer": "publish"
     }
    ],
    "answers": {
     "1": "tell",
     "2": "rise",
     "3": "raise",
     "4": "fall",
     "5": "publish"
    }
   },
   {
    "code": "10.2",
    "instruction": "Decide if each of the verbs below is transitive, intransitive, or either. Use Quick tips 10.2 , 10.3 , 10.4 , and 10.5 to help you decide. Transitive Intransitive Either",
    "sample": "Sample: play ................... ...................",
    "items": [
     {
      "n": 1,
      "text": "beat",
      "answer": "beat"
     },
     {
      "n": 2,
      "text": "cough",
      "answer": "cough"
     },
     {
      "n": 3,
      "text": "relax",
      "answer": "relax"
     },
     {
      "n": 4,
      "text": "drive",
      "answer": "drive"
     },
     {
      "n": 5,
      "text": "entertain",
      "answer": "entertain"
     }
    ],
    "answers": {
     "1": "beat",
     "2": "cough",
     "3": "relax",
     "4": "drive",
     "5": "entertain"
    }
   },
   {
    "code": "10.3",
    "instruction": "In the sentences below, decide if the underlined verb is being used as a transitive or intransitive verb. Use",
    "sample": "",
    "items": [],
    "answers": {
     "1": "Greg opened the newspaper",
     "2": "I can read it later",
     "3": "Don’t worry!",
     "4": "On Sundays, I usually stay at home",
     "5": "It’s advisable to wash your hands before eating"
    }
   },
   {
    "code": "11.1",
    "instruction": "Each of the sentences below contains a phrasal verb. Underline the phrasal verb, using the verb substitution tip and the to and should tips to help you.",
    "sample": "Sample: The lecturer summed up his main points.",
    "items": [
     {
      "n": 1,
      "text": "He fixed up the lighting in the hall.",
      "answer": "He fixed up the lighting in the hall"
     },
     {
      "n": 2,
      "text": "They read over the document many times.",
      "answer": "They read over the document many times"
     },
     {
      "n": 3,
      "text": "Y ou dream up the most amazing things.",
      "answer": "Youdream up the most amazing things"
     },
     {
      "n": 4,
      "text": "Ron takes out the garbage every Monday night.",
      "answer": "Ron takes out the garbage every Monday night"
     },
     {
      "n": 5,
      "text": "I will pay odi my mortgage in fifteen years. 38",
      "answer": "I will pay o¡ my mortgage in fifteen years"
     }
    ],
    "answers": {
     "1": "He fixed up the lighting in the hall",
     "2": "They read over the document many times",
     "3": "Youdream up the most amazing things",
     "4": "Ron takes out the garbage every Monday night",
     "5": "I will pay o¡ my mortgage in fifteen years"
    }
   }
  ],
  "exercises": [
   {
    "q": "defend",
    "type": "input",
    "answer": "defend",
    "source": "7.1",
    "instruction": "Which of the following words are verbs? See if they sound like a complete unit when you put the word here: should or to . Check the appropriate column. Verb Not a verb",
    "explanation": "Respuesta del libro: defend"
   },
   {
    "q": "include",
    "type": "input",
    "answer": "include",
    "source": "7.1",
    "instruction": "Which of the following words are verbs? See if they sound like a complete unit when you put the word here: should or to . Check the appropriate column. Verb Not a verb",
    "explanation": "Respuesta del libro: include"
   },
   {
    "q": "largest",
    "type": "input",
    "answer": "largest",
    "source": "7.1",
    "instruction": "Which of the following words are verbs? See if they sound like a complete unit when you put the word here: should or to . Check the appropriate column. Verb Not a verb",
    "explanation": "Respuesta del libro: largest"
   },
   {
    "q": "how",
    "type": "input",
    "answer": "how",
    "source": "7.1",
    "instruction": "Which of the following words are verbs? See if they sound like a complete unit when you put the word here: should or to . Check the appropriate column. Verb Not a verb",
    "explanation": "Respuesta del libro: how"
   },
   {
    "q": "learn",
    "type": "input",
    "answer": "learn",
    "source": "7.1",
    "instruction": "Which of the following words are verbs? See if they sound like a complete unit when you put the word here: should or to . Check the appropriate column. Verb Not a verb",
    "explanation": "Respuesta del libro: learn"
   },
   {
    "q": "must not worry",
    "type": "input",
    "answer": "must not worry",
    "source": "7.2",
    "instruction": "Underline the verbs in these phrases. Test each word to see if it sounds like a complete unit when you put the word here: should or to .",
    "explanation": "Respuesta del libro: must not worry"
   },
   {
    "q": "might keep",
    "type": "input",
    "answer": "might keep",
    "source": "7.2",
    "instruction": "Underline the verbs in these phrases. Test each word to see if it sounds like a complete unit when you put the word here: should or to .",
    "explanation": "Respuesta del libro: might keep"
   },
   {
    "q": "wish for peace",
    "type": "input",
    "answer": "wish for peace",
    "source": "7.2",
    "instruction": "Underline the verbs in these phrases. Test each word to see if it sounds like a complete unit when you put the word here: should or to .",
    "explanation": "Respuesta del libro: wish for peace"
   },
   {
    "q": "may sometimes cook",
    "type": "input",
    "answer": "may sometimes cook",
    "source": "7.2",
    "instruction": "Underline the verbs in these phrases. Test each word to see if it sounds like a complete unit when you put the word here: should or to .",
    "explanation": "Respuesta del libro: may sometimes cook"
   },
   {
    "q": "will travel",
    "type": "input",
    "answer": "will travel",
    "source": "7.2",
    "instruction": "Underline the verbs in these phrases. Test each word to see if it sounds like a complete unit when you put the word here: should or to .",
    "explanation": "Respuesta del libro: will travel"
   },
   {
    "q": "wrote:",
    "type": "input",
    "answer": "wrote: write",
    "source": "8.1",
    "instruction": "Put each of the verbs below into its base form. Simply find the form that follows should or to .",
    "explanation": "Respuesta del libro: wrote: write"
   },
   {
    "q": "talking:",
    "type": "input",
    "answer": "talking: talk",
    "source": "8.1",
    "instruction": "Put each of the verbs below into its base form. Simply find the form that follows should or to .",
    "explanation": "Respuesta del libro: talking: talk"
   },
   {
    "q": "thought:",
    "type": "input",
    "answer": "thought: t hink",
    "source": "8.1",
    "instruction": "Put each of the verbs below into its base form. Simply find the form that follows should or to .",
    "explanation": "Respuesta del libro: thought: t hink"
   },
   {
    "q": "considered:",
    "type": "input",
    "answer": "considered: consider",
    "source": "8.1",
    "instruction": "Put each of the verbs below into its base form. Simply find the form that follows should or to .",
    "explanation": "Respuesta del libro: considered: consider"
   },
   {
    "q": "seen:",
    "type": "input",
    "answer": "seen: see",
    "source": "8.1",
    "instruction": "Put each of the verbs below into its base form. Simply find the form that follows should or to .",
    "explanation": "Respuesta del libro: seen: see"
   },
   {
    "q": "danced",
    "type": "input",
    "answer": "danced",
    "source": "8.2",
    "instruction": "Which of the following words are verbs? Y ou may have to put some into their base form in order to be sure. Remember also that a verb usually indicates an action. Verb Not a verb",
    "explanation": "Respuesta del libro: danced"
   },
   {
    "q": "sofa",
    "type": "input",
    "answer": "sofa",
    "source": "8.2",
    "instruction": "Which of the following words are verbs? Y ou may have to put some into their base form in order to be sure. Remember also that a verb usually indicates an action. Verb Not a verb",
    "explanation": "Respuesta del libro: sofa"
   },
   {
    "q": "large",
    "type": "input",
    "answer": "large",
    "source": "8.2",
    "instruction": "Which of the following words are verbs? Y ou may have to put some into their base form in order to be sure. Remember also that a verb usually indicates an action. Verb Not a verb",
    "explanation": "Respuesta del libro: large"
   },
   {
    "q": "gave",
    "type": "input",
    "answer": "gave",
    "source": "8.2",
    "instruction": "Which of the following words are verbs? Y ou may have to put some into their base form in order to be sure. Remember also that a verb usually indicates an action. Verb Not a verb",
    "explanation": "Respuesta del libro: gave"
   },
   {
    "q": "stares",
    "type": "input",
    "answer": "stares",
    "source": "8.2",
    "instruction": "Which of the following words are verbs? Y ou may have to put some into their base form in order to be sure. Remember also that a verb usually indicates an action. Verb Not a verb",
    "explanation": "Respuesta del libro: stares"
   },
   {
    "q": "The host greeted us cordially.",
    "type": "input",
    "answer": "The host greeted us cordially",
    "source": "8.3",
    "instruction": "Underline the verbs in each of the sentences below, using the should or to tests to help you.Y ou may have to put some verbs into their base forms in order to be sure. Remember also that a verb usually indicates an action.",
    "explanation": "Respuesta del libro: The host greeted us cordially"
   },
   {
    "q": "She should say that again.",
    "type": "input",
    "answer": "She should say that again",
    "source": "8.3",
    "instruction": "Underline the verbs in each of the sentences below, using the should or to tests to help you.Y ou may have to put some verbs into their base forms in order to be sure. Remember also that a verb usually indicates an action.",
    "explanation": "Respuesta del libro: She should say that again"
   },
   {
    "q": "Jonathan walked over to the car.",
    "type": "input",
    "answer": "Jonathan walked over to the car",
    "source": "8.3",
    "instruction": "Underline the verbs in each of the sentences below, using the should or to tests to help you.Y ou may have to put some verbs into their base forms in order to be sure. Remember also that a verb usually indicates an action.",
    "explanation": "Respuesta del libro: Jonathan walked over to the car"
   },
   {
    "q": "He washes dishes every evening.",
    "type": "input",
    "answer": "He washes dishes every evening",
    "source": "8.3",
    "instruction": "Underline the verbs in each of the sentences below, using the should or to tests to help you.Y ou may have to put some verbs into their base forms in order to be sure. Remember also that a verb usually indicates an action.",
    "explanation": "Respuesta del libro: He washes dishes every evening"
   },
   {
    "q": "Y ou can't speakVietnamese.",
    "type": "input",
    "answer": "You can’tspeakVietnamese. 41",
    "source": "8.3",
    "instruction": "Underline the verbs in each of the sentences below, using the should or to tests to help you.Y ou may have to put some verbs into their base forms in order to be sure. Remember also that a verb usually indicates an action.",
    "explanation": "Respuesta del libro: You can’tspeakVietnamese. 41"
   },
   {
    "q": "tasted",
    "type": "input",
    "answer": "tasted",
    "source": "9.1",
    "instruction": "Which of the following words are verbs? See if each sounds like a complete unit when you put the word here: should or to . Check the appropriate column. All the verbs will be linking verbs.Y ou may have to put some in their base form to be ",
    "explanation": "Respuesta del libro: tasted"
   },
   {
    "q": "friendly",
    "type": "input",
    "answer": "friendly",
    "source": "9.1",
    "instruction": "Which of the following words are verbs? See if each sounds like a complete unit when you put the word here: should or to . Check the appropriate column. All the verbs will be linking verbs.Y ou may have to put some in their base form to be ",
    "explanation": "Respuesta del libro: friendly"
   },
   {
    "q": "shady",
    "type": "input",
    "answer": "shady",
    "source": "9.1",
    "instruction": "Which of the following words are verbs? See if each sounds like a complete unit when you put the word here: should or to . Check the appropriate column. All the verbs will be linking verbs.Y ou may have to put some in their base form to be ",
    "explanation": "Respuesta del libro: shady"
   },
   {
    "q": "got",
    "type": "input",
    "answer": "got",
    "source": "9.1",
    "instruction": "Which of the following words are verbs? See if each sounds like a complete unit when you put the word here: should or to . Check the appropriate column. All the verbs will be linking verbs.Y ou may have to put some in their base form to be ",
    "explanation": "Respuesta del libro: got"
   },
   {
    "q": "Barry will feel awful about it.",
    "type": "input",
    "answer": "Barry will feel awful about it",
    "source": "9.2",
    "instruction": "Underline the verbs in these sentences.Test each word to see if it sounds like a complete unit when you put the word here: should or to . All the verbs will be linking verbs.Y ou may have to put some in their base form to be sure.",
    "explanation": "Respuesta del libro: Barry will feel awful about it"
   },
   {
    "q": "Melissa resembles her mother.",
    "type": "input",
    "answer": "Melissa resembles her mother",
    "source": "9.2",
    "instruction": "Underline the verbs in these sentences.Test each word to see if it sounds like a complete unit when you put the word here: should or to . All the verbs will be linking verbs.Y ou may have to put some in their base form to be sure.",
    "explanation": "Respuesta del libro: Melissa resembles her mother"
   },
   {
    "q": "Zack sounded extremely angry.",
    "type": "input",
    "answer": "Zack sounded extremely angry",
    "source": "9.2",
    "instruction": "Underline the verbs in these sentences.Test each word to see if it sounds like a complete unit when you put the word here: should or to . All the verbs will be linking verbs.Y ou may have to put some in their base form to be sure.",
    "explanation": "Respuesta del libro: Zack sounded extremely angry"
   },
   {
    "q": "The fish tasted undercooked.",
    "type": "input",
    "answer": "The fish tasted undercooked",
    "source": "9.2",
    "instruction": "Underline the verbs in these sentences.Test each word to see if it sounds like a complete unit when you put the word here: should or to . All the verbs will be linking verbs.Y ou may have to put some in their base form to be sure.",
    "explanation": "Respuesta del libro: The fish tasted undercooked"
   },
   {
    "q": "Y ou were not home early.",
    "type": "input",
    "answer": "Youwere not home early",
    "source": "9.2",
    "instruction": "Underline the verbs in these sentences.Test each word to see if it sounds like a complete unit when you put the word here: should or to . All the verbs will be linking verbs.Y ou may have to put some in their base form to be sure.",
    "explanation": "Respuesta del libro: Youwere not home early"
   },
   {
    "q": "Paul was in power at that moment.",
    "type": "input",
    "answer": "Paul was in power at that moment",
    "source": "9.3",
    "instruction": "Underline the forms of be in each of the sentences below. Some sentences may contain more than one form of be .",
    "explanation": "Respuesta del libro: Paul was in power at that moment"
   },
   {
    "q": "They are absolutely correct in their thinking.",
    "type": "input",
    "answer": "They are absolutely correct in their thinking",
    "source": "9.3",
    "instruction": "Underline the forms of be in each of the sentences below. Some sentences may contain more than one form of be .",
    "explanation": "Respuesta del libro: They are absolutely correct in their thinking"
   },
   {
    "q": "Y our suitcases were in the overhead compartment during the ffight.",
    "type": "input",
    "answer": "Your suitcases were in the overhead compartment during the £ight",
    "source": "9.3",
    "instruction": "Underline the forms of be in each of the sentences below. Some sentences may contain more than one form of be .",
    "explanation": "Respuesta del libro: Your suitcases were in the overhead compartment during the £ight"
   },
   {
    "q": "Christina has been wanting to go to Europe for a long time.",
    "type": "input",
    "answer": "Christina has b e e nw antingt og ot oE u r o p ef o ral o n gt i m e",
    "source": "9.3",
    "instruction": "Underline the forms of be in each of the sentences below. Some sentences may contain more than one form of be .",
    "explanation": "Respuesta del libro: Christina has b e e nw antingt og ot oE u r o p ef o ral o n gt i m e"
   },
   {
    "q": "What is wrong with being a good student?",
    "type": "input",
    "answer": "What is wrong with being a good student?",
    "source": "9.3",
    "instruction": "Underline the forms of be in each of the sentences below. Some sentences may contain more than one form of be .",
    "explanation": "Respuesta del libro: What is wrong with being a good student?"
   },
   {
    "q": "resemble",
    "type": "choice",
    "options": [
     "action",
     "linking"
    ],
    "correct": 0,
    "source": "9.5",
    "instruction": "Which of these words is a verb? See if it sounds like a complete unit when you put the word here: should or to . Check the appropriate column. Some of the verbs are linking verbs and some are action verbs. All the verbs will be in their bas",
    "answer": "resemble",
    "explanation": "Respuesta del libro: resemble"
   }
  ],
  "answerKeys": {
   "11.3": {
    "1": "Eat up your dinner!",
    "2": "The girls will put the puzzles away",
    "3": "I understand that concept",
    "4": "Birds £y south for the winter",
    "5": "The elderly woman got o¡ the bus with great di⁄culty."
   },
   "7.1": {
    "1": "defend",
    "2": "include",
    "3": "largest",
    "4": "how",
    "5": "learn"
   },
   "7.2": {
    "1": "must not worry",
    "2": "might keep",
    "3": "wish for peace",
    "4": "may sometimes cook",
    "5": "will travel"
   },
   "8.1": {
    "1": "wrote: write",
    "2": "talking: talk",
    "3": "thought: t hink",
    "4": "considered: consider",
    "5": "seen: see"
   },
   "8.2": {
    "1": "danced",
    "2": "sofa",
    "3": "large",
    "4": "gave",
    "5": "stares"
   },
   "8.3": {
    "1": "The host greeted us cordially",
    "2": "She should say that again",
    "3": "Jonathan walked over to the car",
    "4": "He washes dishes every evening",
    "5": "You can’tspeakVietnamese. 41"
   },
   "9.1": {
    "1": "tasted",
    "2": "friendly",
    "3": "shady",
    "4": "be",
    "5": "got"
   },
   "9.2": {
    "1": "Barry will feel awful about it",
    "2": "Melissa resembles her mother",
    "3": "Zack sounded extremely angry",
    "4": "The fish tasted undercooked",
    "5": "Youwere not home early"
   },
   "9.3": {
    "1": "Paul was in power at that moment",
    "2": "They are absolutely correct in their thinking",
    "3": "Your suitcases were in the overhead compartment during the £ight",
    "4": "Christina has b e e nw antingt og ot oE u r o p ef o ral o n gt i m e",
    "5": "What is wrong with being a good student?"
   },
   "9.4": {
    "1": "They ’re usually home by now",
    "2": "Are you worried about anything?",
    "3": "I heard that the £ight was late",
    "4": "W e’re honored by your presence",
    "5": "It ’ s too bad that theY ankees lost last night"
   },
   "9.5": {
    "1": "resemble",
    "2": "become",
    "3": "this",
    "4": "be",
    "5": "new"
   },
   "9.6": {
    "1": "appeared",
    "2": "attends",
    "3": "whenever",
    "4": "was",
    "5": "heard UNIT 2: VERBS 42"
   },
   "9.7": {
    "1": "The car spun out of control",
    "2": "Don’t talk during the movie",
    "3": "The doctor tied a strip of gauze around her hand",
    "4": "Maxine spent too much money",
    "5": "They saw the play last Sunday"
   },
   "9.8": {
    "1": "That was the best meal in the world",
    "2": "I understand your point",
    "3": "Maybe they know each other well",
    "4": "She is fromWisconsin",
    "5": "Those £owers smell heavenly"
   },
   "9.9": {
    "1": "The Czar was a person of high rank",
    "2": "That dog barks a lot",
    "3": "Mr. Kelly watched the tra⁄c below his window",
    "4": "You havebeen a terrific friend to me over the years",
    "5": "I love the way the pillows feel so cozy in this hotel"
   },
   "9.10": {
    "1": "They became best friends",
    "2": "It is not nearly the same as mine",
    "3": "Unfortunately, I forgot your birthday this year",
    "4": "I went to the corner bakery",
    "5": "Mark remains a legend to this day"
   },
   "9.11": {
    "1": "He grew potatoes on his farm",
    "2": "I looked at the mess all around me",
    "3": "Stephen looks happy today",
    "4": "In reality, exceptions rarely prove the rule",
    "5": "Learning the rule proved di⁄cult"
   },
   "9.12": {
    "1": "Their daughter announced her engagement later",
    "2": "The surgeon washed his hands",
    "3": "The pianist was diligent",
    "4": "The young boy gritted his teeth",
    "5": "Her assistant is always late. Anwser keys: Unit 2 43"
   },
   "10.1": {
    "1": "tell",
    "2": "rise",
    "3": "raise",
    "4": "fall",
    "5": "publish"
   },
   "10.2": {
    "1": "beat",
    "2": "cough",
    "3": "relax",
    "4": "drive",
    "5": "entertain"
   },
   "10.3": {
    "1": "Greg opened the newspaper",
    "2": "I can read it later",
    "3": "Don’t worry!",
    "4": "On Sundays, I usually stay at home",
    "5": "It’s advisable to wash your hands before eating"
   },
   "11.1": {
    "1": "He fixed up the lighting in the hall",
    "2": "They read over the document many times",
    "3": "Youdream up the most amazing things",
    "4": "Ron takes out the garbage every Monday night",
    "5": "I will pay o¡ my mortgage in fifteen years"
   },
   "11.2": {
    "1": "Mr. Parker helped out his neighbors",
    "2": "You should call the agency up",
    "3": "Those children put on a show",
    "4": "What brought this reaction about?",
    "5": "The hurricane tore the roofs of many houses o¡"
   },
   "12.1": {
    "1": "The last week of the month was a busy one in the store",
    "2": "Summer was a special time for Melissa",
    "3": "There's an unusual idea floating around",
    "4": "I turned a corner in the long hall",
    "5": "A dirty spoon had fallen to the floor",
    "7": "Jackie turned off the road too soon",
    "8": "Your mother’ s favorite actor appeared in the show we saw last night. 9 . Ap e a ri sj u s ta st a s t ya sa na p p l e ,a sf a ra s Ia mc oncerned",
    "10": "The guys bought two cans of paint: an orange one and a beige one. 46 What’ s the difference between a and an ? See if you notice a pattern when you look at these examples: a red tablecloth an ancient right a situation an interesting message a boring lecture an intruder The articles a and an have the same meaning and use.The only difference between them is that a is used when the next word begins with a consonant sound, while an is used when the next word begins with a vowel sound"
   },
   "12.2": {
    "1": "Awaiter walked to the table. 2 . T h et rainerc a l m e dt h ed o gd o w n",
    "3": "He argued about the bill for hours",
    "4": "I usually eat a sandwich and a cookie for lunch",
    "5": "She watches TVevery night",
    "6": "The train appeared suddenly",
    "7": "Diane put the chicken in the salad",
    "8": "The repairman did not finish his job",
    "9": "Children like cake",
    "10": "Nowadays Elena takes skiing lessons at least once a week. To enhance your understanding What about a uniform and an hour ? Do these contradict what we’ve said about when to use a and an ? It certainly looks like a is being used before a vowel, and an is being used before a consonant. But in fact, that’s not the case. These phrases follow the rule perfectly. Remember that a is used when the next word begins with a consonant sound. The first letter of the next word doesn’t matter; only its first sound matters. So what’s the first sound of the word uniform ? Say it out loud and listen carefully. You will hear that the first sound of the word is the sound [y], as in yes . We really say ‘‘y-uniform’’ (and also ‘‘y-unicorn,’’ ‘‘y-usual,’’ etc.). Since ‘‘y,’’ a consonant, is the first sound, we use a before uniform . What’s the firstsound of the word hour ? Say the word out loud, and you will notice that in fact we don’t pronounce the letter ‘‘h.’’ Rather, hour begins with a vowel sound, as in the word our , and so we say an hour . Thus, apparent exceptions, like a uniform and an hour , are not exceptions at all. Lesson 12: Articles 47"
   }
  }
 },
 {
  "unit": 3,
  "title": "Determiners",
  "part": "Part I: Kinds of words",
  "startPage": 58,
  "pdfPages": {
   "theory": [
    58,
    66
   ],
   "answers": 68
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Los determinantes van delante del sustantivo y lo definen: artículos, demostrativos, posesivos y cuantificadores.</p></div>\n<div class=\"theory-es-section\"><h4>1. Artículos</h4><p><strong>a/an</strong> = indefinido singular contable (<em>a book</em>). <strong>the</strong> = definido, cuando el oyente ya sabe de cuál hablás (<em>the final exam</em>). Nombres no contables y plurales indefinidos suelen ir sin artículo (<em>I need water</em>).</p></div>\n<div class=\"theory-es-section\"><h4>2. Demostrativos</h4><p>Singular: <strong>this / that</strong>. Plural: <strong>these / those</strong>. Delante de un sustantivo funcionan como determinantes (<em>this morning</em>); solos, como pronombres (<em>I want this</em>).</p></div>\n<div class=\"theory-es-section\"><h4>3. Posesivos</h4><p><strong>Adjetivos posesivos</strong> + sustantivo: <em>my, your, his, her, its, our, their</em>. <strong>Pronombres posesivos</strong> solos: <em>mine, yours, his, hers, ours, theirs</em>. También <strong>'s</strong> en nombres (<em>the teacher's book</em>) y posesivos de propios (<em>Paris's</em> / estilo de la casa).</p></div>\n<div class=\"theory-es-section\"><h4>4. Cuantificadores</h4><p>Indican cantidad: <em>some, any, many, much, few, little, all, both, each, every, no</em>. Regla clave: <strong>many/much/few/little</strong> contrastan con contables vs. no contables.</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> Antes de cada hueco en el ejercicio, preguntá: ¿el sustantivo es contable singular, contable plural o no contable? Eso decide a/an, the o cero artículo.</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>Test yourself 10.1\nTransitive Intransitive\n1. tell\n ...................\n2. rise ...................\n3. raise\n ...................\n4. fall ...................\n5. publish\n ...................\nTest yourself 10.2\nTransitive Intransitive Either\n1. beat\n ................... ...................\n2. cough ...................\n ...................\n3. relax ...................\n ...................\n4. drive ................... ...................\n5. entertain ................... ...................\nTest yourself 10.3\nTransitive Intransitive\n1. Greg opened the newspaper.\n ...................\n2. I can read it later.\n ...................\n3. Don't worry! ...................\n4. On Sundays, I usually stay at home. ...................\n5. It's advisable to wash your hands before eating.\n ...................\nTest yourself 11.1\n1. He fixed up the lighting in the hall.\n2. They read over the document many times.\n3. Y oudream up the most amazing things.\n4. Ron takes out the garbage every Monday night.\n5. I will pay odi my mortgage in fifteen years.\nTest yourself 11.2\n1. Mr. Parker helped out his neighbors.\n2. Y ou should call the agency up.\n3. Those children put on a show.\n4. What brought this reaction about?\n5. The hurricane tore the roofs of many houses odi.\nTest yourself 11.3\n1. Eat up your dinner!\n2. The girls will put the puzzles away.\n3. I understand that concept.\n4. Birds ffy south for the winter.\n5. The elderly woman got odi the bus with great diflculty.\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.\nUNIT 2: VERBS\n44</p>\n<p>UNIT 3: DETERMINERS\nDeterminers are words that can occur directly before a noun, tell us a bit more about that\nnoun, and introduce it. The determiners are underlined in the sentences below, with the\nfollowing noun in bold:\n1. I milked the cow .\n2. It is Harry' s turn .\n3. They bought that house .\n4. John has more money .\nThese sentences have examples of the four major types of determiners: articles, posses-\nsives, demonstratives, and quantifiers. Generally, a noun will have only one of these\ndeterminer types in front of it. W e'll be disc\nussing each of these four types in this unit,\nstarting with articles, the easiest and most common.\n45</p>"
   },
   {
    "n": 12,
    "title": "Articles",
    "html": "<p>How can you identify an article ?\nIt doesn't get any easier than this!\nQuick tip 12.1\nThere are only three articles in English: the , a and an .\nArticles give us information about a noun; they indicate whether or not the noun is a\nspecific one known to both the speaker and listener. Take a look at these examples to see\nwhat we mean:\n1. I bought a red car. (The listener doesn't know anything about the red car.)\n2. The red car was on sale. (The listener knows which car the speaker is talking\nabout.)\nThe\nis commonly called the\ndefinite article\n;\na\nand\nan\nare called\nindefinite articles\n.\nThe definite article may be used with both singular and plural nouns, but the indefinite\narticles only with singular nouns, as we can see in the following examples:\nthe idea the ideas\nan apple * an apples\na revolution * a revolutions\nTest yourself 12.1\nUnderline the articles in each of the sentences below. A sentence may have more than one article.\nSample:W e watched av i d e ol a s tn i g h t .\nGetting started\n(answers on p. 55)\n1. The last week of the month was a busy one in\nthe store.\n2. Summer was a special time for\nMelissa.\n3. There' s an unusual idea floating\naround.\n4. I turned a corner in the long hall.\n5. A dirty spoon had fallen to the\nfloor.\nMore practice\n(answers on the website)\n6 . I nt h em i d d l eo ft h en i g h t ,Ih e a r das trange\nnoise.\n7. Jackie turned off the road too soon.\n8. Y our mother' s favorite actor appeared in the\nshow we saw last night.\n9 . Ap e a ri sj u s ta st a s t ya sa na p p l e ,a sf a ra s\nIa mc oncerned .\n10. The guys bought two cans of paint: an\norange one and a beige one.\n46</p>\n<p>What' s the difference between a and an ? See if you notice a pattern when you look\nat these examples:\na red tablecloth an ancient right\na situation\nan interesting message\na boring lecture an intruder\nThe articles\na\nand\nan\nhave the same meaning and use.The only difference between them is\nthat\na\nis used when the next word begins with a consonant sound, while\nan\nis used when\nthe next word begins with a vowel sound.\nTest yourself 12.2\nFor each sentence, underline each article with a solid line, each noun with a double underline, and\neach verb with a squiggly line. Some sentences have more than one article and noun; some have no\narticle. If you can answer these questions, you have achieved a solid understanding of how to\nidentify articles, nouns, and verbs, three of the most common parts of speech!\nSample: A pilot spoke to the crew.\nGetting started\n(answers on p. 55)\n1. Awaiter walked to the table.\n2 . T h et r a i n e rc a l m e dt h ed o gd o w n .\n3. He argued about the bill for hours.\n4. I usually eat a sandwich and a cookie\nfor lunch.\n5. She watches TVevery night.\nMore practice\n(answers on the website)\n6. The train appeared suddenly.\n7. Diane put the chicken in the salad.\n8. The repairman did not finish his job.\n9. Children like cake.\n10. Nowadays Elena takes skiing lessons at\nleast once a week.\nTo enhance your understanding\nWhat about a uniform and an hour ? Do these contradict what we've said about when to use\na\nand\nan</p>\n<p>? It certainly looks like\na\nis being used before a vowel, and\nan\nis being used before a\nconsonant. But in fact, that's not the case. These phrases follow the rule perfectly.\nRemember that\na\nis used when the next word begins with a consonant sound. The first\nletter of the next word doesn't matter; only its first sound matters.\nSo what's the first sound of the word\nuniform\n? Say it out loud and listen carefully. You will\nhear that the first sound of the word is the sound [y], as in yes . We really say ''y-uniform''\n(and also ''y-unicorn,'' ''y-usual,'' etc.). Since ''y,'' a consonant, is the first sound, we use\na\nbefore\nuniform\n.\nWhat's the firstsound of the word hour ? Say the word out loud, and you will notice that in\nfact we don't pronounce the letter ''h.'' Rather,\nhour\nbegins with a vowel sound, as in the\nword\nour\n, and so we say an hour .\nThus, apparent exceptions, like\na uniform\nand\nan hour\n, are not exceptions at all.</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 13,
    "title": "Demonstratives",
    "html": "<p>Here' s another easy category. There are only four demonstratives : this , that , these ,\nand\nthose\n.\nQuick tip 13.1\nThere are only four demonstratives in English: this , that , these , and those .\nNotice again that, just like articles, each of these can occur directly before a noun: this\ntable\n,\nthese tables\n,\nthat idea\n,\nthose ideas\n. Demonstratives are words that ' 'point' ' to some-\nthing or someone.\nTest yourself 13.1\nUnderline the demonstrative in each of the sentences below.\nSample: Those performers were all also composers.\nGetting started\n(answers on p. 55)\n1. Y ou can use this book.\n2. Those speeches he gave were impressive.\n3. They don't speak that language.\n4. Kirsten sold all these items.\n5. This side of the Atlantic Ocean is more\nfamiliar to me.\nMore practice\n(answers on the website)\n6. She likes to listen to that song.\n7. Those mistakes will catch up with Andrew\none day.\n8. I don't like these pictures.\n9. That man is a technician.\n10. Lots of people like topatronize this restaurant.\nTest yourself 13.2\nUnderline the determiners in the sentences below.They will be either articles or demonstratives.\nSample: There were shops selling a variety of those handmade items.\nGetting started\n(answers on p. 55)\n1. On top of the pile of fabrics was a sleeping cat.\n2. That leader met with the residents of the\nvillage.\n3. This taxi is heading toward a large shopping\nmall.\n4. The instructor chose a very informative\ntextbook.\n5. These pants won't fit in those drawers.\nMore practice\n(answers on the website)\n6 . T h ea udiencei st i r e do fa l lt h o s el a m ej o k e s .\n7. Once in a while I think of my childhood\nfriends.\n8. Those pedestrians better keep to the right\nof the main road.\n9. This work is the brainchild of a madman.\n1 0 . W ef o u n dt h i sp i e c eo fp a p e ro nt h et o ps h e l f\nof a dusty bookcase.\n48</p>\n<p>Test yourself 13.3\nIdentify each determiner in the sentences below by underlining it with a solid line if it is a\ndemonstrative and with a squiggly line if it is an article.\nSample: Larry is holding this meeting at the hotel.\nGetting started\n(answers on p. 55)\n1. Are you looking for a better job?\n2. That movie follows a young family after they\nimmigrate to this country.\n3. Jane met an Englishman there whom she\nlater married.\n4. The weather was so wonderful at the beach.\n5. All those cups of coffee won't help you get\na good night' s rest.\nMore practice\n(answers on the website)\n6. I recognize this soccer player as a big star\nfrom Italy.\n7. Playing a game of chess in this park always\ninterests me.\n8. Those students who did the exercises in the\ntext will likely pass the final.\n9. The garbage is piling up on the sidewalk.\n10. This lesson is a piece of cake, isn't it?</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 14,
    "title": "Possessives",
    "html": "<p>Possessives are words that indicate ownership or belonging.The possessives are under-\nlined in the sentences below.\n1. I sold my car.\n2. B e t t y ' sn eighbori sa na rchitect .\nThe possessive in sentence 1 is called a\npossessive pronoun\n; the possessive in sentence 2\nis called a\npossessive proper noun\n. Notice that, just like articles and demonstratives,\npossessive pronouns and possessive proper nouns can appear directly before a noun.\nW e'll discuss each of these separately.\nPossessive pronouns\nThere are just a few possessive pronouns that function as determiners. These are com-\nmonly referred to as\npossessive pronouns\nwith determiner function\nor\npossessive\nadjectives\n. W e will call them simply\ndeterminer possessive pronouns\n.( F o ra nother\nfunction of possessive pronouns, see\nLesson 24\n.)\nQuick tip 14.1\nThe determiner possessive pronouns are: my, your, his, her, its, our, their .\nTest yourself 14.1\nUnderline the determiner possessive pronoun in each of the sentences below.\nSample: My school won the state championship last year.\nGetting started\n(answers on p. 55)\n1. His face always shows what he's thinking.\n2. They go to their house in the mountains\nevery summer.\n3. It took three days for your letter to get here.\n4. W e liked her mother.\n5. Our product is superior to what you have\nto offer.\nMore practice\n(answers on the website)\n6. The price of the stock I am considering\nbuying does not reflect its true worth.\n7. Would you like to take a ride in your new car?\n8. Friends, I will be counting on your votes.\n9. The children went to the movies together\nwith their father.\n10. Matt does not share his feelings easily.\nPossessive proper nouns\nThe possessive proper nouns are underlined in this next sentence:\n3. I saw Mary's cat chaseMrs. Smith' s dog, which ran acrossJim' s yard.\n50</p>\n<p>Remember, names do not have to be names of just people. For example, London 's , America's ,\nand\nIBM's\nare each possessive proper nouns:\nLondon's bridges\n,\nAmerica's highways\n,\nIBM's\nproducts\n.( S e e\nLesson 6\nto remind yourself about proper nouns.)\nTest yourself 14.2\nUnderline the possessive proper noun in each of the sentences below.\nSample:\nGoneWith theWind\n's castwasamazing .\nGetting started\n(answers on p. 56)\n1. Leah' s eyes met those of the man at the\ncounter.\n2. It was Harry's turn to say something.\n3. They were impressed by Rome' s restaurants.\n4. Mickey Mouse' s picture is hanging on\nmy wall.\n5. John always wanted to visit Harvard' s campus.\nMore practice\n(answers on the website)\n6. France' s soccer team lost to another team.\n7 . M a c y ' sw o m e n ' sd epartmenti so nt h et h i r d\nfloor.\n8. Mrs. Johnson' s office is located directly\nabove mine.\n9. After dinner, we went up to Beth' s apartment.\n10. I never get tired of The Beatles'songs.\nTest yourself 14.3\nUnderline the possessive determiner in each of the sentences below. The determiner will either\nbe a possessive pronoun or a possessive proper noun.\nSample: Y our committee is meeting tomorrow.\nGetting started\n(answers on p. 56)\n1. She suggested that it was all Martin' s fault.\n2. Why don't you give it to your daughter?\n3. That was a breathtaking view of NewY ork's\nskyline.\n4. He bought a souvenir for his son.\n5. The Adamses did not care for their new\nneighbors.\nMore practice\n(answers on the website)\n6. The public was eagerly awaiting Congress' s\nnew energy policy.\n7. My apartment is either too hot or too cold.\n8. Abraham Lincoln' s life was interesting.\n9. Our crew prepared to dock.\n10. On Thursday afternoon, the actor was\npracticing his lines.\nTo enhance your understanding\nWhile possessive proper nouns can function as determiners, possessive common nouns\n(see\nLesson 6</p>\n<p>), for example\nthe girl's hat , are considered to be adjectives. (See Lesson 16\nfor more about adjectives.) This is because possessive common nouns, but not possessive\nproper nouns, can have a determiner in front of them – keeping in mind that a noun will\ngenerally have just one determiner introducing it. See the following examples:\n4. The girl's hat is new. (girl's = possessive common noun)\n5. *The Mary's hat is new. (Mary's = possessive proper noun)</p>\n<p>Test yourself 14.4\nFor each determiner below, indicate if it is an article (e.g. the , an ), demonstrative (e.g. this , those ),\npossessive pronoun (e.g.\nyour\n,\nour\n), or possessive proper noun (e.g.\nMary's\n,\nLondon 's\n).\nSample: Law and Order' s possessive proper noun\nGetting started\n(answers on p. 56)\n1. their ....................................................\n2. an ....................................................\n3. George's ....................................................\n4. those ....................................................\n5. its ....................................................\nMore practice (answers on the website)\n6. the ..............................................\n7. San Francisco's ..............................................\n8. this ..............................................\n9. my ..............................................\n10. a ..............................................\nTest yourself 14.5\nUnderline the determiner in each of the sentences be low. It will either be an article, demonstrative,\npossessive pronoun, or possessive proper noun. Some sentences may contain more than one\ndeterminer.\nSample: The room contained a sofa, ac h a i r ,a n d ,o nthe wall, Melinda's portrait.\nGetting started\n(answers on p. 56)\n1. She knew what her mother had done for\nthe family.\n2. There wasn't much information in his\nletters.\n3. These books are clearly the best.\n4. Rosa' s husband put a surprise in her lunch\nbox.\n5. Jerry's uncle likes to drink a glass of wine\nwith his dinner.\nMore practice\n(answers on the website)\n6. This actress should get an Oscar for her\nperformance in that movie.\n7. The doctor' s secretary usually walks a mile\non her lunch break.\n8. Those children love to take a dip in their\nnew pool in the backyard.\n9. On her way to work, Maggie' s car broke down.\n10. Jet Blue' s crew served dinner while I was\nsleeping.\nUNIT 3: DETERMINERS\n52</p>"
   }
  ],
  "tips": [
   {
    "code": "12.1",
    "text": "There are only three articles in English: the , a and an . Articles give us information about a noun; they indicate whether or not the noun is a specific one known to both the speaker and listener. Take a look at these examples to see what we mean: 1. I bought a red car. (The listener doesn't know anything about the red car.) 2. The red car was on sale. (The listener knows which car the speaker is talking about.) The is commonly called the definite article ; a and an are called indefinite articles . The definite article may be used with both singular and plural nouns, but the indefinite articles only with singular nouns, as we can see in the…"
   },
   {
    "code": "13.1",
    "text": "There are only four demonstratives in English: this , that , these , and those . Notice again that, just like articles, each of these can occur directly before a noun: this table , these tables , that idea , those ideas . Demonstratives are words that ' 'point' ' to some- thing or someone."
   },
   {
    "code": "14.1",
    "text": "The determiner possessive pronouns are: my, your, his, her, its, our, their ."
   }
  ],
  "practice": [
   {
    "code": "10.1",
    "instruction": "Transitive Intransitive 1. tell ................... 2. rise ................... 3. raise ................... 4. fall ................... 5. publish ...................",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "10.2",
    "instruction": "Transitive Intransitive Either 1. beat ................... ................... 2. cough ................... ................... 3. relax ................... ................... 4. drive ................... ................... 5. entertain ................... ...................",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "10.3",
    "instruction": "Transitive Intransitive 1. Greg opened the newspaper. ................... 2. I can read it later. ................... 3. Don't worry! ................... 4. On Sundays, I usually stay at home. ................... 5. It's advisable to wash your hands before eating. ...................",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "11.1",
    "instruction": "1. He fixed up the lighting in the hall. 2. They read over the document many times. 3. Y oudream up the most amazing things. 4. Ron takes out the garbage every Monday night. 5. I will pay odi my mortgage in fifteen years.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "11.2",
    "instruction": "1. Mr. Parker helped out his neighbors. 2. Y ou should call the agency up. 3. Those children put on a show. 4. What brought this reaction about? 5. The hurricane tore the roofs of many houses odi.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "11.3",
    "instruction": "1. Eat up your dinner! 2. The girls will put the puzzles away. 3. I understand that concept. 4. Birds ffy south for the winter. 5. The elderly woman got odi the bus with great diflculty. FOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "12.1",
    "instruction": "Underline the articles in each of the sentences below. A sentence may have more than one article.",
    "sample": "Sample:W e watched av i d e ol a s tn i g h t .",
    "items": [
     {
      "n": 1,
      "text": "The last week of the month was a busy one in the store.",
      "answer": "The last week of the month was ab u s yo n ei nthe store"
     },
     {
      "n": 2,
      "text": "Summer was a special time for Melissa.",
      "answer": "Summer was as pecialt i m ef o rM elissa"
     },
     {
      "n": 3,
      "text": "There' s an unusual idea floating around.",
      "answer": "There's an unusual idea floating around"
     },
     {
      "n": 4,
      "text": "I turned a corner in the long hall.",
      "answer": "I turned ac o r n e ri nthe long hall"
     },
     {
      "n": 5,
      "text": "A dirty spoon had fallen to the floor.",
      "answer": "Ad i r t ys p o o nh a df a l l e nt othe floor"
     }
    ],
    "answers": {
     "1": "The last week of the month was ab u s yo n ei nthe store",
     "2": "Summer was as pecialt i m ef o rM elissa",
     "3": "There's an unusual idea floating around",
     "4": "I turned ac o r n e ri nthe long hall",
     "5": "Ad i r t ys p o o nh a df a l l e nt othe floor"
    }
   },
   {
    "code": "12.2",
    "instruction": "For each sentence, underline each article with a solid line, each noun with a double underline, and each verb with a squiggly line. Some sentences have more than one article and noun; some have no article. If you can answer these questions, you have achieved a solid understanding of how to identify articles, nouns, and verbs, three of the most common parts of speech!",
    "sample": "Sample: A pilot spoke to the crew.",
    "items": [
     {
      "n": 1,
      "text": "Awaiter walked to the table. 2 . T h et r a i n e rc a l m e dt h ed o gd o w n .",
      "answer": "Awaiter walked to the table"
     },
     {
      "n": 3,
      "text": "He argued about the bill for hours.",
      "answer": "He argued about the bill for hours"
     },
     {
      "n": 4,
      "text": "I usually eat a sandwich and a cookie for lunch.",
      "answer": "I usually eat a sandwich and a cookie for lunch"
     },
     {
      "n": 5,
      "text": "She watches TVevery night.",
      "answer": "She watchesTVevery night"
     }
    ],
    "answers": {
     "1": "Awaiter walked to the table",
     "2": "The trainer calmed the dog down",
     "3": "He argued about the bill for hours",
     "4": "I usually eat a sandwich and a cookie for lunch",
     "5": "She watchesTVevery night"
    }
   },
   {
    "code": "13.1",
    "instruction": "Underline the demonstrative in each of the sentences below.",
    "sample": "Sample: Those performers were all also composers.",
    "items": [
     {
      "n": 1,
      "text": "Y ou can use this book.",
      "answer": "You can use this book"
     },
     {
      "n": 2,
      "text": "Those speeches he gave were impressive.",
      "answer": "Those speeches he gave were impressive"
     },
     {
      "n": 3,
      "text": "They don't speak that language.",
      "answer": "They don’t speak that language"
     },
     {
      "n": 4,
      "text": "Kirsten sold all these items.",
      "answer": "Kirsten sold all these items"
     },
     {
      "n": 5,
      "text": "This side of the Atlantic Ocean is more familiar to me.",
      "answer": "This side of the Atlantic Ocean is more familiar to me"
     }
    ],
    "answers": {
     "1": "You can use this book",
     "2": "Those speeches he gave were impressive",
     "3": "They don’t speak that language",
     "4": "Kirsten sold all these items",
     "5": "This side of the Atlantic Ocean is more familiar to me"
    }
   },
   {
    "code": "13.2",
    "instruction": "Underline the determiners in the sentences below.They will be either articles or demonstratives.",
    "sample": "Sample: There were shops selling a variety of those handmade items.",
    "items": [
     {
      "n": 1,
      "text": "On top of the pile of fabrics was a sleeping cat.",
      "answer": "On top of the pile of fabrics was as leepingc a t"
     },
     {
      "n": 2,
      "text": "That leader met with the residents of the village.",
      "answer": "That leader met with the residents of the village"
     },
     {
      "n": 3,
      "text": "This taxi is heading toward a large shopping mall.",
      "answer": "This taxi is heading toward a large shopping mall"
     },
     {
      "n": 4,
      "text": "The instructor chose a very informative textbook.",
      "answer": "The instructor chose a very informative textbook"
     },
     {
      "n": 5,
      "text": "These pants won't fit in those drawers.",
      "answer": "These pants won’t fit in those drawers"
     }
    ],
    "answers": {
     "1": "On top of the pile of fabrics was as leepingc a t",
     "2": "That leader met with the residents of the village",
     "3": "This taxi is heading toward a large shopping mall",
     "4": "The instructor chose a very informative textbook",
     "5": "These pants won’t fit in those drawers"
    }
   },
   {
    "code": "13.3",
    "instruction": "Identify each determiner in the sentences below by underlining it with a solid line if it is a demonstrative and with a squiggly line if it is an article.",
    "sample": "Sample: Larry is holding this meeting at the hotel.",
    "items": [
     {
      "n": 1,
      "text": "Are you looking for a better job?",
      "answer": "Are you looking for a better job?"
     },
     {
      "n": 2,
      "text": "That movie follows a young family after they immigrate to this country.",
      "answer": "That movie follows a young family after they immigrate to this country"
     },
     {
      "n": 3,
      "text": "Jane met an Englishman there whom she later married.",
      "answer": "Jane met an Englishman there whom she later married"
     },
     {
      "n": 4,
      "text": "The weather was so wonderful at the beach.",
      "answer": "The weather was so wonderful at the beach"
     },
     {
      "n": 5,
      "text": "All those cups of coffee won't help you get a good night' s rest.",
      "answer": "All those cups of coffee won’t help you get a good night’ s rest"
     }
    ],
    "answers": {
     "1": "Are you looking for a better job?",
     "2": "That movie follows a young family after they immigrate to this country",
     "3": "Jane met an Englishman there whom she later married",
     "4": "The weather was so wonderful at the beach",
     "5": "All those cups of coffee won’t help you get a good night’ s rest"
    }
   },
   {
    "code": "14.1",
    "instruction": "Underline the determiner possessive pronoun in each of the sentences below.",
    "sample": "Sample: My school won the state championship last year.",
    "items": [
     {
      "n": 1,
      "text": "His face always shows what he's thinking.",
      "answer": "His face always shows what he’s thinking"
     },
     {
      "n": 2,
      "text": "They go to their house in the mountains every summer.",
      "answer": "They go to their house in the mountains every summer. 55"
     },
     {
      "n": 3,
      "text": "It took three days for your letter to get here.",
      "answer": "It took three days for your letter to get here"
     },
     {
      "n": 4,
      "text": "W e liked her mother.",
      "answer": "We liked her mother"
     },
     {
      "n": 5,
      "text": "Our product is superior to what you have to offer.",
      "answer": "Our product is superior to what you have to offer"
     }
    ],
    "answers": {
     "1": "His face always shows what he’s thinking",
     "2": "They go to their house in the mountains every summer. 55",
     "3": "It took three days for your letter to get here",
     "4": "We liked her mother",
     "5": "Our product is superior to what you have to offer"
    }
   },
   {
    "code": "14.2",
    "instruction": "Underline the possessive proper noun in each of the sentences below.",
    "sample": "Sample: GoneWith theWind 's castwasamazing .",
    "items": [
     {
      "n": 1,
      "text": "Leah' s eyes met those of the man at the counter.",
      "answer": "Leah’ s eyes met those of the man at the counter"
     },
     {
      "n": 2,
      "text": "It was Harry's turn to say something.",
      "answer": "It was Harry’ s turn to say something"
     },
     {
      "n": 3,
      "text": "They were impressed by Rome' s restaurants.",
      "answer": "They were impressed by Rome’s restaurants"
     },
     {
      "n": 4,
      "text": "Mickey Mouse' s picture is hanging on my wall.",
      "answer": "Mickey Mouse’ s picture is hanging on my wall"
     },
     {
      "n": 5,
      "text": "John always wanted to visit Harvard' s campus.",
      "answer": "John always wanted to visit Harvard’s campus"
     }
    ],
    "answers": {
     "1": "Leah’ s eyes met those of the man at the counter",
     "2": "It was Harry’ s turn to say something",
     "3": "They were impressed by Rome’s restaurants",
     "4": "Mickey Mouse’ s picture is hanging on my wall",
     "5": "John always wanted to visit Harvard’s campus"
    }
   },
   {
    "code": "14.3",
    "instruction": "Underline the possessive determiner in each of the sentences below. The determiner will either be a possessive pronoun or a possessive proper noun.",
    "sample": "Sample: Y our committee is meeting tomorrow.",
    "items": [
     {
      "n": 1,
      "text": "She suggested that it was all Martin' s fault.",
      "answer": "She suggested that it was all Martin’s fault"
     },
     {
      "n": 2,
      "text": "Why don't you give it to your daughter?",
      "answer": "Why don’t you give it to your daughter?"
     },
     {
      "n": 3,
      "text": "That was a breathtaking view of NewY ork's skyline.",
      "answer": "That was a breathtaking view of New Y ork’s skyline"
     },
     {
      "n": 4,
      "text": "He bought a souvenir for his son.",
      "answer": "He bought a souvenir for his son"
     },
     {
      "n": 5,
      "text": "The Adamses did not care for their new neighbors.",
      "answer": "The Adamses did not care for their new neighbors"
     }
    ],
    "answers": {
     "1": "She suggested that it was all Martin’s fault",
     "2": "Why don’t you give it to your daughter?",
     "3": "That was a breathtaking view of New Y ork’s skyline",
     "4": "He bought a souvenir for his son",
     "5": "The Adamses did not care for their new neighbors"
    }
   },
   {
    "code": "14.4",
    "instruction": "For each determiner below, indicate if it is an article (e.g. the , an ), demonstrative (e.g. this , those ), possessive pronoun (e.g. your , our ), or possessive proper noun (e.g. Mary's , London 's ).",
    "sample": "Sample: Law and Order' s possessive proper noun",
    "items": [
     {
      "n": 1,
      "text": "their",
      "answer": "their possessive pronoun"
     },
     {
      "n": 2,
      "text": "an",
      "answer": "an article"
     },
     {
      "n": 3,
      "text": "George's",
      "answer": "George’s possessive proper noun"
     },
     {
      "n": 4,
      "text": "those",
      "answer": "those demonstrative"
     },
     {
      "n": 5,
      "text": "its",
      "answer": "its possessive pronoun"
     }
    ],
    "answers": {
     "1": "their possessive pronoun",
     "2": "an article",
     "3": "George’s possessive proper noun",
     "4": "those demonstrative",
     "5": "its possessive pronoun"
    }
   },
   {
    "code": "14.5",
    "instruction": "Underline the determiner in each of the sentences be low. It will either be an article, demonstrative, possessive pronoun, or possessive proper noun. Some sentences may contain more than one determiner.",
    "sample": "Sample: The room contained a sofa, ac h a i r ,a n d ,o nthe wall, Melinda's portrait.",
    "items": [
     {
      "n": 1,
      "text": "She knew what her mother had done for the family.",
      "answer": "She knew what her mother had done for the family"
     },
     {
      "n": 2,
      "text": "There wasn't much information in his letters.",
      "answer": "There wasn’t much information in his letters"
     },
     {
      "n": 3,
      "text": "These books are clearly the best.",
      "answer": "These books are clearly the best"
     },
     {
      "n": 4,
      "text": "Rosa' s husband put a surprise in her lunch box.",
      "answer": "Rosa’s husband putas urprisei nher lunch box"
     },
     {
      "n": 5,
      "text": "Jerry's uncle likes to drink a glass of wine with his dinner.",
      "answer": "Jerry’ s uncle likes to drinka glass of wine with his dinner"
     }
    ],
    "answers": {
     "1": "She knew what her mother had done for the family",
     "2": "There wasn’t much information in his letters",
     "3": "These books are clearly the best",
     "4": "Rosa’s husband putas urprisei nher lunch box",
     "5": "Jerry’ s uncle likes to drinka glass of wine with his dinner"
    }
   }
  ],
  "exercises": [
   {
    "q": "The last week of the month was a busy one in the store.",
    "type": "input",
    "answer": "The last week of the month was ab u s yo n ei nthe store",
    "source": "12.1",
    "instruction": "Underline the articles in each of the sentences below. A sentence may have more than one article.",
    "explanation": "Respuesta del libro: The last week of the month was ab u s yo n ei nthe store"
   },
   {
    "q": "Summer was a special time for Melissa.",
    "type": "input",
    "answer": "Summer was as pecialt i m ef o rM elissa",
    "source": "12.1",
    "instruction": "Underline the articles in each of the sentences below. A sentence may have more than one article.",
    "explanation": "Respuesta del libro: Summer was as pecialt i m ef o rM elissa"
   },
   {
    "q": "There' s an unusual idea floating around.",
    "type": "input",
    "answer": "There's an unusual idea floating around",
    "source": "12.1",
    "instruction": "Underline the articles in each of the sentences below. A sentence may have more than one article.",
    "explanation": "Respuesta del libro: There's an unusual idea floating around"
   },
   {
    "q": "I turned a corner in the long hall.",
    "type": "input",
    "answer": "I turned ac o r n e ri nthe long hall",
    "source": "12.1",
    "instruction": "Underline the articles in each of the sentences below. A sentence may have more than one article.",
    "explanation": "Respuesta del libro: I turned ac o r n e ri nthe long hall"
   },
   {
    "q": "A dirty spoon had fallen to the floor.",
    "type": "input",
    "answer": "Ad i r t ys p o o nh a df a l l e nt othe floor",
    "source": "12.1",
    "instruction": "Underline the articles in each of the sentences below. A sentence may have more than one article.",
    "explanation": "Respuesta del libro: Ad i r t ys p o o nh a df a l l e nt othe floor"
   },
   {
    "q": "Awaiter walked to the table. 2 . T h et r a i n e rc a l m e dt h ed o gd o w n .",
    "type": "input",
    "answer": "Awaiter walked to the table",
    "source": "12.2",
    "instruction": "For each sentence, underline each article with a solid line, each noun with a double underline, and each verb with a squiggly line. Some sentences have more than one article and noun; some have no article. If you can answer these questions,",
    "explanation": "Respuesta del libro: Awaiter walked to the table"
   },
   {
    "q": "He argued about the bill for hours.",
    "type": "input",
    "answer": "He argued about the bill for hours",
    "source": "12.2",
    "instruction": "For each sentence, underline each article with a solid line, each noun with a double underline, and each verb with a squiggly line. Some sentences have more than one article and noun; some have no article. If you can answer these questions,",
    "explanation": "Respuesta del libro: He argued about the bill for hours"
   },
   {
    "q": "I usually eat a sandwich and a cookie for lunch.",
    "type": "input",
    "answer": "I usually eat a sandwich and a cookie for lunch",
    "source": "12.2",
    "instruction": "For each sentence, underline each article with a solid line, each noun with a double underline, and each verb with a squiggly line. Some sentences have more than one article and noun; some have no article. If you can answer these questions,",
    "explanation": "Respuesta del libro: I usually eat a sandwich and a cookie for lunch"
   },
   {
    "q": "She watches TVevery night.",
    "type": "input",
    "answer": "She watchesTVevery night",
    "source": "12.2",
    "instruction": "For each sentence, underline each article with a solid line, each noun with a double underline, and each verb with a squiggly line. Some sentences have more than one article and noun; some have no article. If you can answer these questions,",
    "explanation": "Respuesta del libro: She watchesTVevery night"
   },
   {
    "q": "Y ou can use this book.",
    "type": "input",
    "answer": "You can use this book",
    "source": "13.1",
    "instruction": "Underline the demonstrative in each of the sentences below.",
    "explanation": "Respuesta del libro: You can use this book"
   },
   {
    "q": "Those speeches he gave were impressive.",
    "type": "input",
    "answer": "Those speeches he gave were impressive",
    "source": "13.1",
    "instruction": "Underline the demonstrative in each of the sentences below.",
    "explanation": "Respuesta del libro: Those speeches he gave were impressive"
   },
   {
    "q": "They don't speak that language.",
    "type": "input",
    "answer": "They don’t speak that language",
    "source": "13.1",
    "instruction": "Underline the demonstrative in each of the sentences below.",
    "explanation": "Respuesta del libro: They don’t speak that language"
   },
   {
    "q": "Kirsten sold all these items.",
    "type": "input",
    "answer": "Kirsten sold all these items",
    "source": "13.1",
    "instruction": "Underline the demonstrative in each of the sentences below.",
    "explanation": "Respuesta del libro: Kirsten sold all these items"
   },
   {
    "q": "This side of the Atlantic Ocean is more familiar to me.",
    "type": "input",
    "answer": "This side of the Atlantic Ocean is more familiar to me",
    "source": "13.1",
    "instruction": "Underline the demonstrative in each of the sentences below.",
    "explanation": "Respuesta del libro: This side of the Atlantic Ocean is more familiar to me"
   },
   {
    "q": "On top of the pile of fabrics was a sleeping cat.",
    "type": "input",
    "answer": "On top of the pile of fabrics was as leepingc a t",
    "source": "13.2",
    "instruction": "Underline the determiners in the sentences below.They will be either articles or demonstratives.",
    "explanation": "Respuesta del libro: On top of the pile of fabrics was as leepingc a t"
   },
   {
    "q": "That leader met with the residents of the village.",
    "type": "input",
    "answer": "That leader met with the residents of the village",
    "source": "13.2",
    "instruction": "Underline the determiners in the sentences below.They will be either articles or demonstratives.",
    "explanation": "Respuesta del libro: That leader met with the residents of the village"
   },
   {
    "q": "This taxi is heading toward a large shopping mall.",
    "type": "input",
    "answer": "This taxi is heading toward a large shopping mall",
    "source": "13.2",
    "instruction": "Underline the determiners in the sentences below.They will be either articles or demonstratives.",
    "explanation": "Respuesta del libro: This taxi is heading toward a large shopping mall"
   },
   {
    "q": "The instructor chose a very informative textbook.",
    "type": "input",
    "answer": "The instructor chose a very informative textbook",
    "source": "13.2",
    "instruction": "Underline the determiners in the sentences below.They will be either articles or demonstratives.",
    "explanation": "Respuesta del libro: The instructor chose a very informative textbook"
   },
   {
    "q": "These pants won't fit in those drawers.",
    "type": "input",
    "answer": "These pants won’t fit in those drawers",
    "source": "13.2",
    "instruction": "Underline the determiners in the sentences below.They will be either articles or demonstratives.",
    "explanation": "Respuesta del libro: These pants won’t fit in those drawers"
   },
   {
    "q": "Are you looking for a better job?",
    "type": "input",
    "answer": "Are you looking for a better job?",
    "source": "13.3",
    "instruction": "Identify each determiner in the sentences below by underlining it with a solid line if it is a demonstrative and with a squiggly line if it is an article.",
    "explanation": "Respuesta del libro: Are you looking for a better job?"
   },
   {
    "q": "That movie follows a young family after they immigrate to this country.",
    "type": "input",
    "answer": "That movie follows a young family after they immigrate to this country",
    "source": "13.3",
    "instruction": "Identify each determiner in the sentences below by underlining it with a solid line if it is a demonstrative and with a squiggly line if it is an article.",
    "explanation": "Respuesta del libro: That movie follows a young family after they immigrate to this country"
   },
   {
    "q": "Jane met an Englishman there whom she later married.",
    "type": "input",
    "answer": "Jane met an Englishman there whom she later married",
    "source": "13.3",
    "instruction": "Identify each determiner in the sentences below by underlining it with a solid line if it is a demonstrative and with a squiggly line if it is an article.",
    "explanation": "Respuesta del libro: Jane met an Englishman there whom she later married"
   },
   {
    "q": "The weather was so wonderful at the beach.",
    "type": "input",
    "answer": "The weather was so wonderful at the beach",
    "source": "13.3",
    "instruction": "Identify each determiner in the sentences below by underlining it with a solid line if it is a demonstrative and with a squiggly line if it is an article.",
    "explanation": "Respuesta del libro: The weather was so wonderful at the beach"
   },
   {
    "q": "All those cups of coffee won't help you get a good night' s rest.",
    "type": "input",
    "answer": "All those cups of coffee won’t help you get a good night’ s rest",
    "source": "13.3",
    "instruction": "Identify each determiner in the sentences below by underlining it with a solid line if it is a demonstrative and with a squiggly line if it is an article.",
    "explanation": "Respuesta del libro: All those cups of coffee won’t help you get a good night’ s rest"
   },
   {
    "q": "His face always shows what he's thinking.",
    "type": "input",
    "answer": "His face always shows what he’s thinking",
    "source": "14.1",
    "instruction": "Underline the determiner possessive pronoun in each of the sentences below.",
    "explanation": "Respuesta del libro: His face always shows what he’s thinking"
   },
   {
    "q": "They go to their house in the mountains every summer.",
    "type": "input",
    "answer": "They go to their house in the mountains every summer. 55",
    "source": "14.1",
    "instruction": "Underline the determiner possessive pronoun in each of the sentences below.",
    "explanation": "Respuesta del libro: They go to their house in the mountains every summer. 55"
   },
   {
    "q": "It took three days for your letter to get here.",
    "type": "input",
    "answer": "It took three days for your letter to get here",
    "source": "14.1",
    "instruction": "Underline the determiner possessive pronoun in each of the sentences below.",
    "explanation": "Respuesta del libro: It took three days for your letter to get here"
   },
   {
    "q": "W e liked her mother.",
    "type": "input",
    "answer": "We liked her mother",
    "source": "14.1",
    "instruction": "Underline the determiner possessive pronoun in each of the sentences below.",
    "explanation": "Respuesta del libro: We liked her mother"
   },
   {
    "q": "Our product is superior to what you have to offer.",
    "type": "input",
    "answer": "Our product is superior to what you have to offer",
    "source": "14.1",
    "instruction": "Underline the determiner possessive pronoun in each of the sentences below.",
    "explanation": "Respuesta del libro: Our product is superior to what you have to offer"
   },
   {
    "q": "Leah' s eyes met those of the man at the counter.",
    "type": "input",
    "answer": "Leah’ s eyes met those of the man at the counter",
    "source": "14.2",
    "instruction": "Underline the possessive proper noun in each of the sentences below.",
    "explanation": "Respuesta del libro: Leah’ s eyes met those of the man at the counter"
   },
   {
    "q": "It was Harry's turn to say something.",
    "type": "input",
    "answer": "It was Harry’ s turn to say something",
    "source": "14.2",
    "instruction": "Underline the possessive proper noun in each of the sentences below.",
    "explanation": "Respuesta del libro: It was Harry’ s turn to say something"
   },
   {
    "q": "They were impressed by Rome' s restaurants.",
    "type": "input",
    "answer": "They were impressed by Rome’s restaurants",
    "source": "14.2",
    "instruction": "Underline the possessive proper noun in each of the sentences below.",
    "explanation": "Respuesta del libro: They were impressed by Rome’s restaurants"
   },
   {
    "q": "Mickey Mouse' s picture is hanging on my wall.",
    "type": "input",
    "answer": "Mickey Mouse’ s picture is hanging on my wall",
    "source": "14.2",
    "instruction": "Underline the possessive proper noun in each of the sentences below.",
    "explanation": "Respuesta del libro: Mickey Mouse’ s picture is hanging on my wall"
   },
   {
    "q": "John always wanted to visit Harvard' s campus.",
    "type": "input",
    "answer": "John always wanted to visit Harvard’s campus",
    "source": "14.2",
    "instruction": "Underline the possessive proper noun in each of the sentences below.",
    "explanation": "Respuesta del libro: John always wanted to visit Harvard’s campus"
   },
   {
    "q": "She suggested that it was all Martin' s fault.",
    "type": "input",
    "answer": "She suggested that it was all Martin’s fault",
    "source": "14.3",
    "instruction": "Underline the possessive determiner in each of the sentences below. The determiner will either be a possessive pronoun or a possessive proper noun.",
    "explanation": "Respuesta del libro: She suggested that it was all Martin’s fault"
   },
   {
    "q": "Why don't you give it to your daughter?",
    "type": "input",
    "answer": "Why don’t you give it to your daughter?",
    "source": "14.3",
    "instruction": "Underline the possessive determiner in each of the sentences below. The determiner will either be a possessive pronoun or a possessive proper noun.",
    "explanation": "Respuesta del libro: Why don’t you give it to your daughter?"
   },
   {
    "q": "That was a breathtaking view of NewY ork's skyline.",
    "type": "input",
    "answer": "That was a breathtaking view of New Y ork’s skyline",
    "source": "14.3",
    "instruction": "Underline the possessive determiner in each of the sentences below. The determiner will either be a possessive pronoun or a possessive proper noun.",
    "explanation": "Respuesta del libro: That was a breathtaking view of New Y ork’s skyline"
   },
   {
    "q": "He bought a souvenir for his son.",
    "type": "input",
    "answer": "He bought a souvenir for his son",
    "source": "14.3",
    "instruction": "Underline the possessive determiner in each of the sentences below. The determiner will either be a possessive pronoun or a possessive proper noun.",
    "explanation": "Respuesta del libro: He bought a souvenir for his son"
   },
   {
    "q": "The Adamses did not care for their new neighbors.",
    "type": "input",
    "answer": "The Adamses did not care for their new neighbors",
    "source": "14.3",
    "instruction": "Underline the possessive determiner in each of the sentences below. The determiner will either be a possessive pronoun or a possessive proper noun.",
    "explanation": "Respuesta del libro: The Adamses did not care for their new neighbors"
   },
   {
    "q": "their",
    "type": "input",
    "answer": "their possessive pronoun",
    "source": "14.4",
    "instruction": "For each determiner below, indicate if it is an article (e.g. the , an ), demonstrative (e.g. this , those ), possessive pronoun (e.g. your , our ), or possessive proper noun (e.g. Mary's , London 's ).",
    "explanation": "Respuesta del libro: their possessive pronoun"
   }
  ],
  "answerKeys": {
   "15.3": {
    "1": "Chicago’ s architecture is diverse",
    "2": "I know that man and his wife",
    "3": "She packed several dresses into her suitcase",
    "4": "He had traveled to few places over the years",
    "5": "Each child at the party brought ag i f t ."
   },
   "12.1": {
    "1": "The last week of the month was ab u s yo n ei nthe store",
    "2": "Summer was as pecialt i m ef o rM elissa",
    "3": "There's an unusual idea floating around",
    "4": "I turned ac o r n e ri nthe long hall",
    "5": "Ad i r t ys p o o nh a df a l l e nt othe floor"
   },
   "12.2": {
    "1": "Awaiter walked to the table",
    "2": "The trainer calmed the dog down",
    "3": "He argued about the bill for hours",
    "4": "I usually eat a sandwich and a cookie for lunch",
    "5": "She watchesTVevery night"
   },
   "13.1": {
    "1": "You can use this book",
    "2": "Those speeches he gave were impressive",
    "3": "They don’t speak that language",
    "4": "Kirsten sold all these items",
    "5": "This side of the Atlantic Ocean is more familiar to me"
   },
   "13.2": {
    "1": "On top of the pile of fabrics was as leepingc a t",
    "2": "That leader met with the residents of the village",
    "3": "This taxi is heading toward a large shopping mall",
    "4": "The instructor chose a very informative textbook",
    "5": "These pants won’t fit in those drawers"
   },
   "13.3": {
    "1": "Are you looking for a better job?",
    "2": "That movie follows a young family after they immigrate to this country",
    "3": "Jane met an Englishman there whom she later married",
    "4": "The weather was so wonderful at the beach",
    "5": "All those cups of coffee won’t help you get a good night’ s rest"
   },
   "14.1": {
    "1": "His face always shows what he’s thinking",
    "2": "They go to their house in the mountains every summer. 55",
    "3": "It took three days for your letter to get here",
    "4": "We liked her mother",
    "5": "Our product is superior to what you have to offer"
   },
   "14.2": {
    "1": "Leah’ s eyes met those of the man at the counter",
    "2": "It was Harry’ s turn to say something",
    "3": "They were impressed by Rome’s restaurants",
    "4": "Mickey Mouse’ s picture is hanging on my wall",
    "5": "John always wanted to visit Harvard’s campus"
   },
   "14.3": {
    "1": "She suggested that it was all Martin’s fault",
    "2": "Why don’t you give it to your daughter?",
    "3": "That was a breathtaking view of New Y ork’s skyline",
    "4": "He bought a souvenir for his son",
    "5": "The Adamses did not care for their new neighbors"
   },
   "14.4": {
    "1": "their possessive pronoun",
    "2": "an article",
    "3": "George’s possessive proper noun",
    "4": "those demonstrative",
    "5": "its possessive pronoun"
   },
   "14.5": {
    "1": "She knew what her mother had done for the family",
    "2": "There wasn’t much information in his letters",
    "3": "These books are clearly the best",
    "4": "Rosa’s husband putas urprisei nher lunch box",
    "5": "Jerry’ s uncle likes to drinka glass of wine with his dinner"
   },
   "15.1": {
    "1": "There is n ow r i t e rw h oi sa sf a m o u sa sS hakespeare",
    "2": "Enough money was raised to build a new wing on the hospital",
    "3": "I don’t take much sugar in my coffee",
    "4": "With little effort, I solved the crossword puzzle",
    "5": "All experiments test hypotheses"
   },
   "15.2": {
    "1": "Main Street’s possessive proper noun",
    "2": "your possessive pronoun",
    "3": "few quantifier",
    "4": "those demonstrative",
    "5": "the article UNIT 3: DETERMINERS 56"
   },
   "16.1": {
    "1": "yellow",
    "2": "wonderful",
    "3": "these",
    "4": "quickly",
    "5": "unreliable",
    "6": "is",
    "7": "pure",
    "8": "on",
    "9": "creative",
    "10": "almost 58"
   },
   "16.2": {
    "1": "The strange robots marched towards the city",
    "2": "It was the last day of school",
    "3": "We tugged at the enormous gate",
    "4": "The billowing smoke alerted us to the fire",
    "5": "The sudden sandstorm forced t h es urprisedb atherst of l e et h e beach",
    "6": "He is a tall boy",
    "7": "My best friend loves chocolate cake",
    "8": "The house had a low roof",
    "9": "Large cars are harder to drive than small cars. Let's make sure that each of the underlined words above passes the adjective test, that is, that it can appear between the and a noun",
    "10": "tall: the tall boy",
    "11": "best: the best movie",
    "12": "chocolate: the chocolate bar",
    "13": "low: the low ceiling",
    "14": "large: the large window",
    "15": "small: the small window. As you can see, each of these words passes the adjective test. Notice also that each of these words describes a characteristic of a noun"
   },
   "16.3": {
    "1": "Evenings were a special time for the family",
    "2": "The next week was a busy one in the store",
    "3": "There's an unusual idea floating around",
    "4": "I turned a corner in the long hall",
    "5": "A dirty fork had fallen to the floor",
    "6": "I wrote a boring letter",
    "7": "Mary’ s younger brother was already there",
    "8": "The American flag was behind Edward’ s desk",
    "9": "I could see his face in the red light from the exit sign",
    "10": "We gathered the important facts from those dusty books. What do you notice about the underlined adjectives in the phrases below?",
    "16": "the delicious rich cake",
    "17": "my tall, red-haired, entertaining friend",
    "18": "a bright, colorful, blue, striped pattern As you can see, a noun can have more than one adjective modifying it. In fact, there is no limit to the number of adjectives that can modify a noun (except the patience and toler- ance of the listener!)"
   },
   "16.4": {
    "1": "They went off to see an old, gloomy, historic mansioni ns outhernE ngland",
    "2": "She had anticipated his sudden arrival",
    "3": "Angela ignored his annoying, persistent questions",
    "5": "We wouldn’t want to cross this wide, busy street, would we?",
    "6": "You should heed the advice of wise men and women",
    "7": "Wild animals can be dangerous",
    "8": "The lovely young lady read one of her favorite novels on her comfortable sofa",
    "9": "Why did you buy this outdated computer in the first place?",
    "10": "The Dodgers’ frustrated manager benched his brash young pitcher. Remember that sometimes a word can function as one word category, or part of speech, in one sentence, and as another word category in another sentence (see Lesson 2 ). For example, let’ s look at the word cream . In the sentence I brought the cream , cream is a noun. But in the sentence That’s a cream cake , cream is an adjective, telling us more about the noun cake"
   },
   "16.5": {
    "1": "The window ledge is too narrow for a plant",
    "2": "That window is stuck shut",
    "3": "This has been a chilly spring",
    "4": "I’m enjoying this spring weather",
    "5": "The morning hours are not my best",
    "6": "I drink two cups of coffee each morning",
    "7": "In most public restaurants, it is forbidden to smoke a cigarette",
    "8": "Cigarette smokers must go for X-ray tests regularly",
    "9": "My nephew was looking for travel companions",
    "10": "Foreign travel can be both exhausting and exhilarating"
   },
   "16.6": {
    "1": "He goes to a day school",
    "2": "I work during the day",
    "3": "The defendant will shock them when they hear his response",
    "4": "It was a terrible shock",
    "5": "I will voice my opinion if I want to",
    "6": "The singer had a wonderful voice",
    "7": "Some people cal l the lary n x a voice box",
    "8": "Some languages have both formal and informal terms of address",
    "9": "I don’t wish to address this question at this time",
    "10": "Did you put my information in your address book?"
   }
  }
 },
 {
  "unit": 4,
  "title": "Adjectives",
  "part": "Part I: Kinds of words",
  "startPage": 71,
  "pdfPages": {
   "theory": [
    71,
    74
   ],
   "answers": 76
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Los adjetivos describen sustantivos (tamaño, color, cualidad) y suelen ir antes del sustantivo o después de verbos como be / seem.</p></div>\n<div class=\"theory-es-section\"><h4>1. ¿Dónde van los adjetivos?</h4><p>Antes del sustantivo: <em>a tall building</em>. Después de verbos de enlace: <em>The building is tall</em>. En inglés el adjetivo <strong>no</strong> concuerda en número ni género (*<em>a tall buildings</em>).</p></div>\n<div class=\"theory-es-section\"><h4>2. Identificar adjetivos</h4><p>Si podés ponerla entre <strong>the</strong> y el sustantivo, o si responde a <em>What kind of…?</em>, es adjetivo. Cuidado: muchas palabras son adjetivos <em>y</em> sustantivos según el contexto (<em>repair</em> como nombre o verbo).</p></div>\n<div class=\"theory-es-section\"><h4>3. Orden y comparación (apoyo)</h4><p>El libro se centra en identificar adjetivos; en el portal (English File) ya cubrís comparativos y superlativos (<em>bigger, the biggest</em>). Acá el foco es función gramatical, no de graduación.</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> En Test yourself de la U4, clasificá si la palabra describe al sustantivo en esa frase concreta.</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>Test yourself 15.3\n1. Chicago' s architecture is diverse.\n2. I know that man and his wife.\n3. She packed several dresses into her suitcase.\n4. He had traveled to few places over the years.\n5. Each child at the party brought ag i f t .\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.\nAnswer keys: Unit 3\n57</p>"
   },
   {
    "n": 16,
    "title": "Identifying adjectives",
    "html": "<p>An adjective is a word that refers to a characteristic of a noun. How can you identify an\nadjective?\nIf you can put a word between\nthe\nand a noun (like\nboy\n,o r\nidea\n), then that word is an\nadjective.\nQuick tip 16.1\nIf you can put a word between the and a noun (for example, the boy) , then that\nword is an\nadjective\n.\nFor example, since we can say the tall boy , tall is an adjective. Similarly, we can say the\nsilly boy\n,\nthe interesting boy\n,a n d\nthe young boy\n.T herefore ,\nsilly\n,\ninteresting\n,a n d\nyoung\nare\nall adjectives.\nA number of adjectives, all used in the phrase\nthe boy are listed below. The\nadjectives are underlined:\n1. the brilliant boy\n2. the embarrassed boy\n3. the blonde boy\n4. the hungry boy\n5. the delightful boy\nCompare these phrases to *</p>\n<p>the very boy\n,*\nthe a boy\n,a n d*\nthe talk boy\n.\nVe ry\n,\na\n,a n d\ntalk\nare\nnot adjectives.\nWhat do adjectives actually do? Adjectives always tell us something about a noun.\nAnother way of saying this is that they modify a noun. In the phrases we've just looked at,\nthe underlined adjectives tell us something about, or modify, the noun\nboy\n.\nTest yourself 16.1\nWhich of the following words are adjectives? See if they sound right when you put them here:\nthe thing . Check the appropriate column.\nAdjective Not an adjective\nSample: have ...................\nGetting started (answers on p. 63)\n1. yellow ................... ...................\n2. wonderful ................... ...................\n3. these ................... ...................\n4. quickly ................... ...................\n5. unreliable ................... ...................\nMore practice (answers on the website)\n6. is ................... ...................\n7. pure ................... ...................\n8. on ................... ...................\n9. creative ................... ...................\n10. almost ................... ...................\n58</p>\n<p>Test yourself 16.2\nUnderline the adjectives in the sentences below. In each case, the adjective will be between the and a\nnoun. A sentence may have more than one adjective.\nSample: She has been the strong leader of this company for years.\nGetting started\n(answers on p. 63)\n1. The strange robots marched towards\nthe city.\n2. It was the last day of school.\n3. We tugged at the enormous gate.\n4. The billowing smoke alerted us to\nthe fire.\n5. The sudden sandstorm forced\nt h es urprisedb a t h e r st of l e et h e\nbeach.\nMore practice\n(answers on the website)\n6. She received the exciting news in the noisy\nrestaurant.\n7. The blind beggar was sitting at the busy\ncorner.\n8. Jeremy did not get the subtle humor of\nthe play.\n9. The poor people of the world outnumber the\nrich ones.\n10. Keep your hands off the hot stove!\nAs we've said, a good way to decide if a word is an adjective is to see if it can be placed\nbetween\nthe\nand a noun. But that doesn't mean that that' s the only place where an adjec-\ntive can occur; it' s just a way to test a word to see if it' s an adjective.\nH e r ea r es o m es entencesw h e r et h ea djectivei si nad ifferentp l a c e .I ne a c hc a s e ,t h e\nadjective is underlined.\n6. He is a tall boy.\n7. My best friend loves chocolate cake.\n8. The house had a low roof.\n9. Large cars are harder to drive than small cars.\nLet' s make sure that each of the underlined words above passes the adjective test, that is,\nthat it can appear between\nthe\nand a noun.\n10. tall: the tall boy\n11. best: the best movie\n12. chocolate: the chocolate bar\n13. low: the low ceiling\n14. large: the large window\n15. small: the small window.\nAs you can see, each of these words passes the adjective test. Notice also that each of these\nwords describes a characteristic of a noun.\nTest yourself 16.3\nUse the adjective test to find the adjectives in each of the sentences below. A sentence may have\nmore than one adjective.\nSample: It took a long time to arrive at our next destination.</p>\n<p>Getting started (answers on p. 63)\n1. Evenings were a special time for\nthe family.\n2. The next week was a busy one in\nthe store.\n3. There' s an unusual idea floating\naround.\n4. I turned a corner in the long hall.\n5. A dirty fork had fallen to the floor.\n More practice (answers on the website)\n6. I wrote a boring letter.\n7. Mary' s younger brother was already there.\n8. The American flag was behind Edward' s\ndesk.\n9. I could see his face in the red light from the\nexit sign.\n10. We gathered the important facts from those\ndusty books.\nWhat do you notice about the underlined adjectives in the phrases below?\n16. the delicious rich cake\n17. my tall, red-haired, entertaining friend\n18. a bright, colorful, blue, striped pattern\nAs you can see, a noun can have more than one adjective modifying it. In fact, there is no\nlimit to the number of adjectives that can modify a noun (except the patience and toler-\nance of the listener!).\nTest yourself 16.4\nUnderlinet h ea djectivesi ne a c ho ft h es entencesb e l o w .S o m eo ft h en o u n sw i l lb em odifiedb ym o r e\nthan one adjective.\nSample: She ate all the crisp, crunchy chips.\nGetting started\n(answers on p. 63)\n1. They went off to see an old, gloomy, historic\nmansioni ns outhernE n g l a n d .\n2. She had anticipated his sudden arrival.\n3. Angela ignored his annoying, persistent\nquestions.\n4 . Im u s tg e tr i do fm yd ecrepit ,b a n g e d - u pl i t t l e\nold car.\n5. We wouldn't want to cross this wide, busy\nstreet, would we?\nMore practice\n(answers on the website)\n6. Y ou should heed the advice of wise men and\nwomen.\n7. Wild animals can be dangerous.\n8. The lovely young lady read one of her\nfavorite novels on her comfortable sofa.\n9. Why did you buy this outdated computer in\nthe first place?\n10. The Dodgers' frustrated manager benched\nhis brash young pitcher.\nRemember that sometimes a word can function as one word category, or part of speech, in\none sentence, and as another word category in another sentence (see\nLesson 2\n). For\nexample, let' s look at the word\ncream\n. In the sentence\nI brought the cream\n,\ncream\nis a noun.\nBut in the sentence\nThat's a cream cake\n,\ncream\nis an adjective, telling us more about the\nnoun\ncake\n.\nTest yourself 16.5\nIn each of the sentences below, decide if the underlined words are functioning as nouns or adjectives.\nSample: That copy isn't legible. adjective\nUNIT 4: ADJECTIVES\n60</p>"
   }
  ],
  "tips": [
   {
    "code": "16.1",
    "text": "If you can put a word between the and a noun (for example, the boy) , then that word is an adjective . For example, since we can say the tall boy , tall is an adjective. Similarly, we can say the silly boy , the interesting boy ,a n d the young boy .T herefore , silly , interesting ,a n d young are all adjectives. A number of adjectives, all used in the phrase the boy are listed below. The adjectives are underlined: 1. the brilliant boy 2. the embarrassed boy 3. the blonde boy 4. the hungry boy 5. the delightful boy Compare these phrases to * the very boy ,* the a boy ,a n d* the talk boy . Ve ry , a ,a n d talk are not adjectives. What do…"
   }
  ],
  "practice": [
   {
    "code": "15.3",
    "instruction": "1. Chicago' s architecture is diverse. 2. I know that man and his wife. 3. She packed several dresses into her suitcase. 4. He had traveled to few places over the years. 5. Each child at the party brought ag i f t . FOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "16.1",
    "instruction": "Which of the following words are adjectives? See if they sound right when you put them here: the thing . Check the appropriate column. Adjective Not an adjective",
    "sample": "Sample: have ...................",
    "items": [
     {
      "n": 1,
      "text": "yellow",
      "answer": "yellow"
     },
     {
      "n": 2,
      "text": "wonderful",
      "answer": "wonderful"
     },
     {
      "n": 3,
      "text": "these",
      "answer": "these"
     },
     {
      "n": 4,
      "text": "quickly",
      "answer": "quickly"
     },
     {
      "n": 5,
      "text": "unreliable",
      "answer": "unreliable"
     }
    ],
    "answers": {
     "1": "yellow",
     "2": "wonderful",
     "3": "these",
     "4": "quickly",
     "5": "unreliable"
    }
   },
   {
    "code": "16.2",
    "instruction": "Underline the adjectives in the sentences below. In each case, the adjective will be between the and a noun. A sentence may have more than one adjective.",
    "sample": "Sample: She has been the strong leader of this company for years.",
    "items": [
     {
      "n": 1,
      "text": "The strange robots marched towards the city.",
      "answer": "The strange robots marched towards the city"
     },
     {
      "n": 2,
      "text": "It was the last day of school.",
      "answer": "It was the last day of school"
     },
     {
      "n": 3,
      "text": "We tugged at the enormous gate.",
      "answer": "We tugged at the enormous gate"
     },
     {
      "n": 4,
      "text": "The billowing smoke alerted us to the fire.",
      "answer": "The billowing smoke alerted us to the fire"
     },
     {
      "n": 5,
      "text": "The sudden sandstorm forced t h es urprisedb a t h e r st of l e et h e beach.",
      "answer": "The sudden sandstorm forced the surprised bathers to flee the beach"
     }
    ],
    "answers": {
     "1": "The strange robots marched towards the city",
     "2": "It was the last day of school",
     "3": "We tugged at the enormous gate",
     "4": "The billowing smoke alerted us to the fire",
     "5": "The sudden sandstorm forced the surprised bathers to flee the beach"
    }
   },
   {
    "code": "16.3",
    "instruction": "Use the adjective test to find the adjectives in each of the sentences below. A sentence may have more than one adjective.",
    "sample": "Sample: It took a long time to arrive at our next destination.",
    "items": [],
    "answers": {
     "1": "Evenings were a special time for the family",
     "2": "The next week was a busy one in the store",
     "3": "There's an unusual idea floating around",
     "4": "I turned a corner in the long hall",
     "5": "A dirty fork had fallen to the floor"
    }
   },
   {
    "code": "16.4",
    "instruction": "Underlinet h ea djectivesi ne a c ho ft h es entencesb e l o w .S o m eo ft h en o u n sw i l lb em odifiedb ym o r e than one adjective.",
    "sample": "Sample: She ate all the crisp, crunchy chips.",
    "items": [
     {
      "n": 1,
      "text": "They went off to see an old, gloomy, historic mansioni ns outhernE n g l a n d .",
      "answer": "They went off to see an old, gloomy, historic mansion in southern England"
     },
     {
      "n": 2,
      "text": "She had anticipated his sudden arrival.",
      "answer": "She had anticipated his sudden arrival"
     },
     {
      "n": 3,
      "text": "Angela ignored his annoying, persistent questions. 4 . Im u s tg e tr i do fm yd ecrepit ,b a n g e d - u pl i t t l e old car.",
      "answer": "Angela ignored his annoying, persistent questions"
     },
     {
      "n": 5,
      "text": "We wouldn't want to cross this wide, busy street, would we?",
      "answer": "We wouldn’t want to cross this wide, busy street, would we?"
     }
    ],
    "answers": {
     "1": "They went off to see an old, gloomy, historic mansion in southern England",
     "2": "She had anticipated his sudden arrival",
     "3": "Angela ignored his annoying, persistent questions",
     "4": "I must get rid of my decrepit, banged-up little old car",
     "5": "We wouldn’t want to cross this wide, busy street, would we?"
    }
   },
   {
    "code": "16.5",
    "instruction": "In each of the sentences below, decide if the underlined words are functioning as nouns or adjectives.",
    "sample": "Sample: That copy isn't legible. adjective",
    "items": [],
    "answers": {
     "1": "The window ledge is too narrow for a plant. adjective",
     "2": "That window is stuck shut. noun",
     "3": "This has been a chilly spring. noun",
     "4": "I’m enjoying this spring weather. adjective",
     "5": "The morning hours are not my best. adjective"
    }
   }
  ],
  "exercises": [
   {
    "q": "yellow",
    "type": "input",
    "answer": "yellow",
    "source": "16.1",
    "instruction": "Which of the following words are adjectives? See if they sound right when you put them here: the thing . Check the appropriate column. Adjective Not an adjective",
    "explanation": "Respuesta del libro: yellow"
   },
   {
    "q": "wonderful",
    "type": "input",
    "answer": "wonderful",
    "source": "16.1",
    "instruction": "Which of the following words are adjectives? See if they sound right when you put them here: the thing . Check the appropriate column. Adjective Not an adjective",
    "explanation": "Respuesta del libro: wonderful"
   },
   {
    "q": "these",
    "type": "input",
    "answer": "these",
    "source": "16.1",
    "instruction": "Which of the following words are adjectives? See if they sound right when you put them here: the thing . Check the appropriate column. Adjective Not an adjective",
    "explanation": "Respuesta del libro: these"
   },
   {
    "q": "quickly",
    "type": "input",
    "answer": "quickly",
    "source": "16.1",
    "instruction": "Which of the following words are adjectives? See if they sound right when you put them here: the thing . Check the appropriate column. Adjective Not an adjective",
    "explanation": "Respuesta del libro: quickly"
   },
   {
    "q": "unreliable",
    "type": "input",
    "answer": "unreliable",
    "source": "16.1",
    "instruction": "Which of the following words are adjectives? See if they sound right when you put them here: the thing . Check the appropriate column. Adjective Not an adjective",
    "explanation": "Respuesta del libro: unreliable"
   },
   {
    "q": "The strange robots marched towards the city.",
    "type": "input",
    "answer": "The strange robots marched towards the city",
    "source": "16.2",
    "instruction": "Underline the adjectives in the sentences below. In each case, the adjective will be between the and a noun. A sentence may have more than one adjective.",
    "explanation": "Respuesta del libro: The strange robots marched towards the city"
   },
   {
    "q": "It was the last day of school.",
    "type": "input",
    "answer": "It was the last day of school",
    "source": "16.2",
    "instruction": "Underline the adjectives in the sentences below. In each case, the adjective will be between the and a noun. A sentence may have more than one adjective.",
    "explanation": "Respuesta del libro: It was the last day of school"
   },
   {
    "q": "We tugged at the enormous gate.",
    "type": "input",
    "answer": "We tugged at the enormous gate",
    "source": "16.2",
    "instruction": "Underline the adjectives in the sentences below. In each case, the adjective will be between the and a noun. A sentence may have more than one adjective.",
    "explanation": "Respuesta del libro: We tugged at the enormous gate"
   },
   {
    "q": "The billowing smoke alerted us to the fire.",
    "type": "input",
    "answer": "The billowing smoke alerted us to the fire",
    "source": "16.2",
    "instruction": "Underline the adjectives in the sentences below. In each case, the adjective will be between the and a noun. A sentence may have more than one adjective.",
    "explanation": "Respuesta del libro: The billowing smoke alerted us to the fire"
   },
   {
    "q": "The sudden sandstorm forced t h es urprisedb a t h e r st of l e et h e beach.",
    "type": "input",
    "answer": "The sudden sandstorm forced the surprised bathers to flee the beach",
    "source": "16.2",
    "instruction": "Underline the adjectives in the sentences below. In each case, the adjective will be between the and a noun. A sentence may have more than one adjective.",
    "explanation": "Respuesta del libro: The sudden sandstorm forced the surprised bathers to flee the beach"
   },
   {
    "q": "They went off to see an old, gloomy, historic mansioni ns outhernE n g l a n d .",
    "type": "input",
    "answer": "They went off to see an old, gloomy, historic mansion in southern England",
    "source": "16.4",
    "instruction": "Underlinet h ea djectivesi ne a c ho ft h es entencesb e l o w .S o m eo ft h en o u n sw i l lb em odifiedb ym o r e than one adjective.",
    "explanation": "Respuesta del libro: They went off to see an old, gloomy, historic mansion in southern England"
   },
   {
    "q": "She had anticipated his sudden arrival.",
    "type": "input",
    "answer": "She had anticipated his sudden arrival",
    "source": "16.4",
    "instruction": "Underlinet h ea djectivesi ne a c ho ft h es entencesb e l o w .S o m eo ft h en o u n sw i l lb em odifiedb ym o r e than one adjective.",
    "explanation": "Respuesta del libro: She had anticipated his sudden arrival"
   },
   {
    "q": "Angela ignored his annoying, persistent questions. 4 . Im u s tg e tr i do fm yd ecrepit ,b a n g e d - u pl i t t l e old car.",
    "type": "input",
    "answer": "Angela ignored his annoying, persistent questions",
    "source": "16.4",
    "instruction": "Underlinet h ea djectivesi ne a c ho ft h es entencesb e l o w .S o m eo ft h en o u n sw i l lb em odifiedb ym o r e than one adjective.",
    "explanation": "Respuesta del libro: Angela ignored his annoying, persistent questions"
   },
   {
    "q": "We wouldn't want to cross this wide, busy street, would we?",
    "type": "input",
    "answer": "We wouldn’t want to cross this wide, busy street, would we?",
    "source": "16.4",
    "instruction": "Underlinet h ea djectivesi ne a c ho ft h es entencesb e l o w .S o m eo ft h en o u n sw i l lb em odifiedb ym o r e than one adjective.",
    "explanation": "Respuesta del libro: We wouldn’t want to cross this wide, busy street, would we?"
   }
  ],
  "answerKeys": {
   "16.1": {
    "1": "yellow",
    "2": "wonderful",
    "3": "these",
    "4": "quickly",
    "5": "unreliable"
   },
   "16.2": {
    "1": "The strange robots marched towards the city",
    "2": "It was the last day of school",
    "3": "We tugged at the enormous gate",
    "4": "The billowing smoke alerted us to the fire",
    "5": "The sudden sandstorm forced the surprised bathers to flee the beach"
   },
   "16.3": {
    "1": "Evenings were a special time for the family",
    "2": "The next week was a busy one in the store",
    "3": "There's an unusual idea floating around",
    "4": "I turned a corner in the long hall",
    "5": "A dirty fork had fallen to the floor"
   },
   "16.4": {
    "1": "They went off to see an old, gloomy, historic mansion in southern England",
    "2": "She had anticipated his sudden arrival",
    "3": "Angela ignored his annoying, persistent questions",
    "4": "I must get rid of my decrepit, banged-up little old car",
    "5": "We wouldn’t want to cross this wide, busy street, would we?"
   },
   "16.5": {
    "1": "The window ledge is too narrow for a plant. adjective",
    "2": "That window is stuck shut. noun",
    "3": "This has been a chilly spring. noun",
    "4": "I’m enjoying this spring weather. adjective",
    "5": "The morning hours are not my best. adjective"
   },
   "16.6": {
    "1": "He goes to a day school. adjective",
    "2": "I work during the day. noun 63",
    "3": "The defendant will shock them when they hear his response. verb",
    "4": "It was a terrible shock. noun",
    "5": "I will voice my opinion if I want to. verb"
   },
   "16.7": {
    "1": "A light rain fell. determiner^a djective^n o u n^v e r b",
    "2": "Ernie’ s friend likes a good argument. determiner^n o u n^v e r b^d eterminer^a djective^n o u n",
    "3": "His employee received that small bonus. determiner ^ noun ^ verb ^ determiner ^ adjective ^ noun",
    "4": "Some big cars take premium gasoline. determiner ^ adjective ^ noun ^ verb ^ adjective ^ noun",
    "5": "This question deserves a serious answer. determiner ^ noun ^ verb ^ determiner ^ adjective ^ noun"
   },
   "17.1": {
    "1": "Let's go into the dining room",
    "2": "It was the dumbest thing he did in his entire life",
    "3": "Felice was having dinner on the patio",
    "5": "I looked for you during the intermission",
    "6": "W e were flying over Europe",
    "7": "Lenore looked beneath the rock. 8 . S h ef o u n dt h ep o to fg o l d",
    "9": "Is it over the rainbow ?",
    "10": "He appeared at the right place at the right time"
   },
   "17.2": {
    "1": "A uniformed guard stood near the massive entryway",
    "2": "She leaned out the window and waved to the large crowd",
    "3": "The older woman from Chicago had already left",
    "4": "She staggered into the store",
    "5": "Carissa sat at the computer in a large room",
    "6": "Are you going to the prom with Stan?",
    "7": "Mike always gives a nice present to his wife on her birthday",
    "8": "Please don’t ask how my day at the office was!",
    "9": "I couldn’t open the door of my car without my key",
    "10": "Let's meet at or near midnight"
   },
   "17.3": {
    "1": "Jean walked around the grounds of the magnificent estate",
    "2": "His friend pounded him on the back",
    "3": "The puppy gazed at him expectantly",
    "4": "I want to go home. (infinitive: to + verb)",
    "5": "I went to Chicago. (preposition: to + noun) UNIT 5: PREPOSITIONS 66"
   }
  }
 },
 {
  "unit": 5,
  "title": "Prepositions",
  "part": "Part I: Kinds of words",
  "startPage": 78,
  "pdfPages": {
   "theory": [
    78,
    79
   ],
   "answers": 81
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Las preposiciones relacionan un sustantivo o pronombre con el resto de la frase: lugar, tiempo, dirección o relación abstracta.</p></div>\n<div class=\"theory-es-section\"><h4>1. Estructura</h4><p>Preposición + sustantivo/pronombre = frase preposicional (<em>in the store</em>, <em>for a friend</em>). El pronombre va en forma de objeto: <em>with</em> <em>her</em>, no *<em>with she</em>.</p></div>\n<div class=\"theory-es-section\"><h4>2. Las más frecuentes</h4><p><strong>Lugar:</strong> <em>in, on, at, near, under, between, across</em>. <strong>Tiempo:</strong> <em>in, on, at</em>. <strong>Dirección:</strong> <em>to, into, onto</em>. <strong>Abstractas:</strong> <em>of, for, with, about</em>.</p></div>\n<div class=\"theory-es-section\"><h4>3. Cuidado con over / under</h4><p>En el libro, Test yourself de preposiciones pide ubicar la relación correcta en la oración. Contrastá <em>between A and B</em> (entre dos) vs. <em>among</em> (entre varios).</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> Si hay dos huecos, pensá la preposición que completa la frase completa, no la palabra suelta: <em>She eats lunch <strong>with</strong> a methodical thoroughness</em>.</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>3. The defendant will shock them when they hear his response. verb\n4. It was a terrible shock. noun\n5. I will voice my opinion if I want to. verb\nTest yourself 16.7\n1. A light rain fell.\ndeterminer^a djective^n o u n^v e r b\n2. Ernie' s friend likes a good argument.\ndeterminer^n o u n^v e r b^d eterminer^a djective^n o u n\n3. His employee received that small bonus.\ndeterminer ^ noun ^ verb ^ determiner ^ adjective ^ noun\n4. Some big cars take premium gasoline.\ndeterminer ^ adjective ^ noun ^ verb ^ adjective ^ noun\n5. This question deserves a serious answer.\ndeterminer ^ noun ^ verb ^ determiner ^ adjective ^ noun\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.\nUNIT 4: ADJECTIVES\n64</p>"
   },
   {
    "n": 17,
    "title": "Identifying prepositions",
    "html": "<p>What is a preposition ? The prepositions are underlined in the following sentences.\n1 . S h em a d en o t e son the paper.\n2. My office is between the post office and the laundromat.\n3. I'll meet you after work.\nQuick tip 17.1\nPrepositions are words, usually small, that typically indicate information about direction,\nlocation, or time. There is only a small number of prepositions in English. Some commonly\nused examples are\nat\n,\nfrom</p>\n<p>,\nin\n,\non</p>\n<p>, and\nto\n.\nT h ef ollowinga r ec o m m o np repositions :\nabout beneath into throughout\nabove beside like\ntill\nacross between near to\nafter beyond of\ntoward(s)\nagainst by\noff\nunder\nalong despite on\nuntil\namong down onto up\naround during out\nupon\nat\nfor\nover with\nbefore from since within\nbehind in\nthrough without\nbelow\nQuick tip 17.2\nIf you can put a word in one of the empty slots in one of the following sentences, the word is\na preposition:\nI walked the table . It happened that time .\nThis tip will help you identify many, though not all, prepositions.\nTest yourself 17.1\nUnderlinet h ep repositionsi nt h es entencesb e l o w . T h e r em a yb em o r et h a no n e .U s et h eQ uick\ntips\nand the list of prepositions to help you.\nSample: My friends are going with me.\n65</p>"
   }
  ],
  "tips": [
   {
    "code": "17.1",
    "text": "Prepositions are words, usually small, that typically indicate information about direction, location, or time. There is only a small number of prepositions in English. Some commonly used examples are at , from , in , on , and to . T h ef ollowinga r ec o m m o np repositions : about beneath into throughout above beside like till across between near to after beyond of toward(s) against by off under along despite on until among down onto up around during out upon at for over with before from since within behind in through without below"
   },
   {
    "code": "17.2",
    "text": "If you can put a word in one of the empty slots in one of the following sentences, the word is a preposition: I walked the table . It happened that time . This tip will help you identify many, though not all, prepositions."
   }
  ],
  "practice": [
   {
    "code": "17.1",
    "instruction": "1. Let’s go into the dining room. 2. It was the dumbest thing he did in his entire life. 3. Felice was having dinner on the patio. 4. She ran to the candy store. 5. I looked for you during the interm",
    "sample": "",
    "items": [
     {
      "n": 1,
      "text": "Let’s go into the dining room.",
      "answer": "Let's go into the dining room"
     },
     {
      "n": 2,
      "text": "It was the dumbest thing he did in his entire life.",
      "answer": "It was the dumbest thing he did in his entire life"
     },
     {
      "n": 3,
      "text": "Felice was having dinner on the patio.",
      "answer": "Felice was having dinner on the patio"
     },
     {
      "n": 4,
      "text": "She ran to the candy store.",
      "answer": "She ran to the candy store"
     },
     {
      "n": 5,
      "text": "I looked for you during the intermission.",
      "answer": "I looked for you during the intermission"
     }
    ],
    "answers": {
     "1": "Let's go into the dining room",
     "2": "It was the dumbest thing he did in his entire life",
     "3": "Felice was having dinner on the patio",
     "4": "She ran to the candy store",
     "5": "I looked for you during the intermission"
    }
   },
   {
    "code": "17.2",
    "instruction": "",
    "sample": "There's a smallhouse near the field .",
    "items": [
     {
      "n": 1,
      "text": "A uniformed guard stood near the massive entryway.",
      "answer": "A uniformed guard stood near the massive entryway"
     },
     {
      "n": 2,
      "text": "She leaned out the window and waved to the large crowd.",
      "answer": "She leaned out the window and waved to the large crowd"
     },
     {
      "n": 3,
      "text": "The older woman from Chicago had already left.",
      "answer": "The older woman from Chicago had already left"
     },
     {
      "n": 4,
      "text": "She staggered into the store.",
      "answer": "She staggered into the store"
     },
     {
      "n": 5,
      "text": "Carissa sat at the computer in a large room.",
      "answer": "Carissa sat at the computer in a large room"
     }
    ],
    "answers": {
     "1": "A uniformed guard stood near the massive entryway",
     "2": "She leaned out the window and waved to the large crowd",
     "3": "The older woman from Chicago had already left",
     "4": "She staggered into the store",
     "5": "Carissa sat at the computer in a large room"
    }
   },
   {
    "code": "17.3",
    "instruction": "",
    "sample": "I’ll buy us a large bucket of chicken.",
    "items": [
     {
      "n": 1,
      "text": "Jean walked around the grounds of the magnificent estate.",
      "answer": "Jean walked around the grounds of the magnificient state"
     },
     {
      "n": 2,
      "text": "His friend pounded him on the back.",
      "answer": "His friend pounded him on the back"
     },
     {
      "n": 3,
      "text": "The puppy gazed at him expectantly.",
      "answer": "The puppy gazed at him expectantly"
     },
     {
      "n": 4,
      "text": "The loud music in that store bothered Jamie.",
      "answer": "The loud music in that store bothered Jamie"
     },
     {
      "n": 5,
      "text": "He has hot coffee before class. To enhance your understanding Don’t confuse the two types of to :",
      "answer": "He has hot coffee before class."
     }
    ],
    "answers": {
     "1": "Jean walked around the grounds of the magnificient state",
     "2": "His friend pounded him on the back",
     "3": "The puppy gazed at him expectantly",
     "4": "The loud music in that store bothered Jamie",
     "5": "He has hot coffee before class."
    }
   }
  ],
  "exercises": [
   {
    "q": "Let's go into the dining room.",
    "type": "input",
    "answer": "Let's go into the dining room",
    "source": "17.1",
    "instruction": "",
    "explanation": "Respuesta del libro: Let's go into the dining room"
   },
   {
    "q": "It was the dumbest thing he did in his entire life.",
    "type": "input",
    "answer": "It was the dumbest thing he did in his entire life",
    "source": "17.1",
    "instruction": "",
    "explanation": "Respuesta del libro: It was the dumbest thing he did in his entire life"
   },
   {
    "q": "Felice was having dinner on the patio. 4 . She ran to the candy store .",
    "type": "input",
    "answer": "Felice was having dinner on the patio",
    "source": "17.1",
    "instruction": "",
    "explanation": "Respuesta del libro: Felice was having dinner on the patio"
   },
   {
    "q": "I looked for you during the intermission.",
    "type": "input",
    "answer": "I looked for you during the intermission",
    "source": "17.1",
    "instruction": "",
    "explanation": "Respuesta del libro: I looked for you during the intermission"
   },
   {
    "q": "A uniformed guard stood near the massive entryway.",
    "type": "input",
    "answer": "A uniformed guard stood near the massive entryway",
    "source": "17.2",
    "instruction": "",
    "explanation": "Respuesta del libro: A uniformed guard stood near the massive entryway"
   },
   {
    "q": "She leaned out the window and waved to the large crowd.",
    "type": "input",
    "answer": "She leaned out the window and waved to the large crowd",
    "source": "17.2",
    "instruction": "",
    "explanation": "Respuesta del libro: She leaned out the window and waved to the large crowd"
   },
   {
    "q": "The older woman from Chicago had already left.",
    "type": "input",
    "answer": "The older woman from Chicago had already left",
    "source": "17.2",
    "instruction": "",
    "explanation": "Respuesta del libro: The older woman from Chicago had already left"
   },
   {
    "q": "She staggered into the store.",
    "type": "input",
    "answer": "She staggered into the store",
    "source": "17.2",
    "instruction": "",
    "explanation": "Respuesta del libro: She staggered into the store"
   },
   {
    "q": "Carissa sat at the computer in a large room.",
    "type": "input",
    "answer": "Carissa sat at the computer in a large room",
    "source": "17.2",
    "instruction": "",
    "explanation": "Respuesta del libro: Carissa sat at the computer in a large room"
   },
   {
    "q": "Jean walked around the grounds of the magnificent estate.",
    "type": "input",
    "answer": "Jean walked around the grounds of the magnificient state",
    "source": "17.3",
    "instruction": "",
    "explanation": "Respuesta del libro: Jean walked around the grounds of the magnificient state"
   },
   {
    "q": "His friend pounded him on the back.",
    "type": "input",
    "answer": "His friend pounded him on the back",
    "source": "17.3",
    "instruction": "",
    "explanation": "Respuesta del libro: His friend pounded him on the back"
   },
   {
    "q": "The puppy gazed at him expectantly.",
    "type": "input",
    "answer": "The puppy gazed at him expectantly",
    "source": "17.3",
    "instruction": "",
    "explanation": "Respuesta del libro: The puppy gazed at him expectantly"
   },
   {
    "q": "The loud music in that store bothered Jamie.",
    "type": "input",
    "answer": "The loud music in that store bothered Jamie",
    "source": "17.3",
    "instruction": "",
    "explanation": "Respuesta del libro: The loud music in that store bothered Jamie"
   },
   {
    "q": "He has hot coffee before class. To enhance your understanding Don’t confuse the two types of to :",
    "type": "input",
    "answer": "He has hot coffee before class.",
    "source": "17.3",
    "instruction": "",
    "explanation": "Respuesta del libro: He has hot coffee before class."
   },
   {
    "q": "Let’s go into the dining room.",
    "type": "input",
    "answer": "Let's go into the dining room",
    "source": "17.1",
    "instruction": "1. Let’s go into the dining room. 2. It was the dumbest thing he did in his entire life. 3. Felice was having dinner on the patio. 4. She ran to the candy store. 5. I looked for you during the interm",
    "explanation": "Respuesta del libro: Let's go into the dining room"
   },
   {
    "q": "It was the dumbest thing he did in his entire life.",
    "type": "input",
    "answer": "It was the dumbest thing he did in his entire life",
    "source": "17.1",
    "instruction": "1. Let’s go into the dining room. 2. It was the dumbest thing he did in his entire life. 3. Felice was having dinner on the patio. 4. She ran to the candy store. 5. I looked for you during the interm",
    "explanation": "Respuesta del libro: It was the dumbest thing he did in his entire life"
   },
   {
    "q": "Felice was having dinner on the patio.",
    "type": "input",
    "answer": "Felice was having dinner on the patio",
    "source": "17.1",
    "instruction": "1. Let’s go into the dining room. 2. It was the dumbest thing he did in his entire life. 3. Felice was having dinner on the patio. 4. She ran to the candy store. 5. I looked for you during the interm",
    "explanation": "Respuesta del libro: Felice was having dinner on the patio"
   },
   {
    "q": "She ran to the candy store.",
    "type": "input",
    "answer": "She ran to the candy store",
    "source": "17.1",
    "instruction": "1. Let’s go into the dining room. 2. It was the dumbest thing he did in his entire life. 3. Felice was having dinner on the patio. 4. She ran to the candy store. 5. I looked for you during the interm",
    "explanation": "Respuesta del libro: She ran to the candy store"
   },
   {
    "q": "I looked for you during the intermission.",
    "type": "input",
    "answer": "I looked for you during the intermission",
    "source": "17.1",
    "instruction": "1. Let’s go into the dining room. 2. It was the dumbest thing he did in his entire life. 3. Felice was having dinner on the patio. 4. She ran to the candy store. 5. I looked for you during the interm",
    "explanation": "Respuesta del libro: I looked for you during the intermission"
   },
   {
    "q": "A uniformed guard stood near the massive entryway.",
    "type": "input",
    "answer": "A uniformed guard stood near the massive entryway",
    "source": "17.2",
    "instruction": "1. Auniformed guard stood near the massive entryway. 2. She leaned out the window and waved to the large crowd. 3. The older woman from Chicago had already left. 4. She staggered into the store. 5. C",
    "explanation": "Respuesta del libro: A uniformed guard stood near the massive entryway"
   },
   {
    "q": "She leaned out the window and waved to the large crowd.",
    "type": "input",
    "answer": "She leaned out the window and waved to the large crowd",
    "source": "17.2",
    "instruction": "1. Auniformed guard stood near the massive entryway. 2. She leaned out the window and waved to the large crowd. 3. The older woman from Chicago had already left. 4. She staggered into the store. 5. C",
    "explanation": "Respuesta del libro: She leaned out the window and waved to the large crowd"
   },
   {
    "q": "The older woman from Chicago had already left.",
    "type": "input",
    "answer": "The older woman from Chicago had already left",
    "source": "17.2",
    "instruction": "1. Auniformed guard stood near the massive entryway. 2. She leaned out the window and waved to the large crowd. 3. The older woman from Chicago had already left. 4. She staggered into the store. 5. C",
    "explanation": "Respuesta del libro: The older woman from Chicago had already left"
   },
   {
    "q": "She staggered into the store.",
    "type": "input",
    "answer": "She staggered into the store",
    "source": "17.2",
    "instruction": "1. Auniformed guard stood near the massive entryway. 2. She leaned out the window and waved to the large crowd. 3. The older woman from Chicago had already left. 4. She staggered into the store. 5. C",
    "explanation": "Respuesta del libro: She staggered into the store"
   },
   {
    "q": "Carissa sat at the computer in a large room.",
    "type": "input",
    "answer": "Carissa sat at the computer in a large room",
    "source": "17.2",
    "instruction": "1. Auniformed guard stood near the massive entryway. 2. She leaned out the window and waved to the large crowd. 3. The older woman from Chicago had already left. 4. She staggered into the store. 5. C",
    "explanation": "Respuesta del libro: Carissa sat at the computer in a large room"
   },
   {
    "q": "Jean walked around the grounds of the magnificient state.",
    "type": "input",
    "answer": "Jean walked around the grounds of the magnificient state",
    "source": "17.3",
    "instruction": "1. Jean walked around the grounds of the magnificient state. 2. His friend pounded him on the back. 3. The puppy gazed at him expectantly. 4. The loud music in that store bothered Jamie. 5. He has ho",
    "explanation": "Respuesta del libro: Jean walked around the grounds of the magnificient state"
   },
   {
    "q": "His friend pounded him on the back.",
    "type": "input",
    "answer": "His friend pounded him on the back",
    "source": "17.3",
    "instruction": "1. Jean walked around the grounds of the magnificient state. 2. His friend pounded him on the back. 3. The puppy gazed at him expectantly. 4. The loud music in that store bothered Jamie. 5. He has ho",
    "explanation": "Respuesta del libro: His friend pounded him on the back"
   },
   {
    "q": "The puppy gazed at him expectantly.",
    "type": "input",
    "answer": "The puppy gazed at him expectantly",
    "source": "17.3",
    "instruction": "1. Jean walked around the grounds of the magnificient state. 2. His friend pounded him on the back. 3. The puppy gazed at him expectantly. 4. The loud music in that store bothered Jamie. 5. He has ho",
    "explanation": "Respuesta del libro: The puppy gazed at him expectantly"
   },
   {
    "q": "The loud music in that store bothered Jamie.",
    "type": "input",
    "answer": "The loud music in that store bothered Jamie",
    "source": "17.3",
    "instruction": "1. Jean walked around the grounds of the magnificient state. 2. His friend pounded him on the back. 3. The puppy gazed at him expectantly. 4. The loud music in that store bothered Jamie. 5. He has ho",
    "explanation": "Respuesta del libro: The loud music in that store bothered Jamie"
   },
   {
    "q": "He has hot coffee before class. FOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE. 68",
    "type": "input",
    "answer": "He has hot coffee before class.",
    "source": "17.3",
    "instruction": "1. Jean walked around the grounds of the magnificient state. 2. His friend pounded him on the back. 3. The puppy gazed at him expectantly. 4. The loud music in that store bothered Jamie. 5. He has ho",
    "explanation": "Respuesta del libro: He has hot coffee before class."
   }
  ],
  "answerKeys": {
   "17.1": {
    "1": "Let's go into the dining room",
    "2": "It was the dumbest thing he did in his entire life",
    "3": "Felice was having dinner on the patio",
    "4": "She ran to the candy store",
    "5": "I looked for you during the intermission"
   },
   "17.2": {
    "1": "A uniformed guard stood near the massive entryway",
    "2": "She leaned out the window and waved to the large crowd",
    "3": "The older woman from Chicago had already left",
    "4": "She staggered into the store",
    "5": "Carissa sat at the computer in a large room"
   },
   "17.3": {
    "1": "Jean walked around the grounds of the magnificient state",
    "2": "His friend pounded him on the back",
    "3": "The puppy gazed at him expectantly",
    "4": "The loud music in that store bothered Jamie",
    "5": "He has hot coffee before class."
   },
   "18.1": {
    "1": "You can hide between trips and make believe you’re innocent",
    "2": "W as it near here or over there?",
    "3": "Roger looked around but he didn’t see anything",
    "4": "They’ll eat chicken or turkey for dinner",
    "5": "Mr. Joseph pulled out three letters and handed one to each of the men",
    "6": "He wants to work through the night but I don’t. 7 . T h eg enerals e n tt h ed ispatcht ot h ea r m y and the navy",
    "8": "He went to the cloister or to the small chapel nearby",
    "9": "Maud is not hungry, nor is her sister thirsty",
    "10": "He’ll come over or he’ll call"
   },
   "18.2": {
    "1": "Mr. Eagle was called away on business, so Mrs. Broxton took his place at the meeting. 2 . H e ’ dh e a r do fi t ,b u th ed i d n ’ tl i k et h ei d e a",
    "3": "Erin felt real excitement and enthusiasm",
    "4": "It was raining hard, yet we went to the ball game",
    "5": "The airline attendant asked,‘‘Would you like co¡ee or tea?’ ’",
    "6": "The color TV was too expensive, so Nancy didn’t buy it",
    "7": "Do you swear to tell the truth, nothing but the truth?",
    "8": "At one time my favorite band was Katrina and theW aves",
    "9": "Sammy wanted to go skydiving, but his parents didn’t let him",
    "10": "For me, going to Paris is always a treat, for I love its architecture"
   },
   "18.3": {
    "1": "I’ll be near or between the stacks",
    "2": "He came up with a quick and e¡ective remedy",
    "3": "I hope you won’t worry or brood too much about it",
    "4": "This trip will be expensive but worthwhile. 5 . Ia ma to rn e a rab reakthrough . Lesson 18: Coordinating conjunctions 71",
    "6": "Don’t you hate to eat and run?",
    "7": "What size shirt are you looking for: small or large?",
    "8": "They came and went in a hurry. 9 . A ts e v e ni nt h em orningT a m a r ai ss luggishy e te ⁄ c i e n t",
    "10": "It is not advisable to drink and drive at the same time"
   },
   "18.4": {
    "7": "They live down south when the weather gets cold",
    "1": "She continued arguing until everyone finally agreed with her",
    "2": "They live down south when the weather gets cold",
    "3": "Jack will buy a house once he gets a job",
    "4": "She listened to his comments politely, even though they sounded silly",
    "5": "They stopped talking when it was Eleanor’ s turn. Subordinating conjunctions connect sentences; however, the two parts that are con- nected are not of equal value in terms of the meaning of the whole sentence. There is a main sentence with a subpart; the subordinating conjunction connects the subpart to the main sentence. Here are sentences 1 through 5 again, but this time with the main sen- tences in bold",
    "6": "She continued arguing until everyone finally agreed with her",
    "8": "Jack will buy a house once he gets a job",
    "9": "She listened to his comments politely , even though they sounded silly",
    "10": "They stopped talking when it was Eleanor’ s turn. Quick tip 19.1 Subordinating conjunctions connect a sentence with another sentence, which is a subpart of it. The subpart sentence is called a dependent clause (or subordinate clause ). In the following sentence, the subordinating conjunction is underlined and the dependent clause is in italics: Nick decided to try to escape, although he knew his chances were slim . The common subordinating conjunctions are listed below. after even though than whenever although how that where as if though wherever as if in order that till whether as though once unless which because rather than until while before since what who even if so (that) when why You can see that sometimes a subordinating conjunction consists of more than one word"
   },
   "19.1": {
    "1": "I’ll leave the note here because I’m in a hurry",
    "2": "Nick had coached him thoroughly, even though they hadn’t had much time",
    "3": "He could see the faint glow of a pipe that Dr.W alters had lit",
    "4": "You should stay here since they obviously need you",
    "5": "She hasn’t called here although she’ d said she would",
    "7": "You were behaving as if you were the boss",
    "8": "They were determined to go for a walk, unless it was going to rain",
    "9": "Kevin should think twice before he speaks",
    "10": "I am going to finish this job even if it takes hours. Here are the same sentences we saw earlier, but this time with the dependent clauses in italics; the subordinating conjunctions are still underlined",
    "11": "She continued arguing until everyone finally agreed with her",
    "12": "They live down south when the weather gets cold",
    "13": "Jack will buy a house once he gets a job",
    "14": "She listened to his comments politely, even though they sounded silly",
    "15": "They stopped talking when it was Eleanor’s turn . Notice that the subordinating conjunction is always the first word of the dependent clause. Quick tip 19.2 The subordinating conjunction is always the ﬁrst word of the dependent clause . In all of the examples we’ve looked at so far, the dependent clause has come after the main sentence. But sometimes the dependent clause comes before the main sentence. In the following examples, the subordinating conjunctions are underlined, and the main sentences are in bold:",
    "16": "If he knew the truth, her father would throw the doll away",
    "17": "When I brought my first paycheck home, I wanted to frame it",
    "18": "Once he gets a job, Jack will buy a house",
    "19": "When it was Eleanor’ s turn, they stopped talking . Notice that sentences 18 and 19 are the same as sentences 13 and 15, except that in senten- ces 18 and 19 the subordinating conjunction and the rest of the dependent clause come beforet h em a i ns entencer a t h e rt h a na f t e ri t"
   }
  }
 },
 {
  "unit": 6,
  "title": "Conjunctions",
  "part": "Part I: Kinds of words",
  "startPage": 82,
  "pdfPages": {
   "theory": [
    82,
    90
   ],
   "answers": 92
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Las conjunciones conectan palabras, frases u oraciones. El libro las divide en coordinantes, subordinantes y correlativas.</p></div>\n<div class=\"theory-es-section\"><h4>1. Coordinantes (FANBOYS)</h4><p><strong>for, and, nor, but, or, yet, so</strong>. Unen elementos del mismo rango: <em>I saw Mary <strong>and</strong> John</em>. Entre dos oraciones completas: <em>They take life seriously <strong>but</strong> are still fun</em>.</p></div>\n<div class=\"theory-es-section\"><h4>2. Subordinantes</h4><p><strong>because, although, when, if, while, since, that</strong>… Introducen una clause dependiente: <em>I thought <strong>that</strong> he was crazy</em>; <em>Turn right <strong>when</strong> you get to the corner</em>.</p></div>\n<div class=\"theory-es-section\"><h4>3. Correlativas</h4><p>Pares que van juntos: <strong>either…or</strong>, <strong>neither…nor</strong>, <strong>both…and</strong>, <strong>not only…but also</strong>. Ej.: <em>Either I cook <strong>or</strong> we order take-out</em>.</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> Si une dos elementos nominales, suele ser coordinante simple (and/or). Si una parte no es oración completa, mirá correlativas o subordinantes.</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>Answer keys: Test yourself, Getting started\nquestions – Unit 5\nTest yourself 17.1\n1. Let's go into the dining room.\n2. It was the dumbest thing he did in his entire life.\n3. Felice was having dinner on the patio.\n4. She ran to the candy store.\n5. I looked for you during the intermission.\nTest yourself 17.2\n1. Auniformed guard stood near the massive entryway.\n2. She leaned out the window and waved to the large crowd.\n3. The older woman from Chicago had already left.\n4. She staggered into the store.\n5. Carissa sat at the computer in a large room.\nTest yourself 17.3\n1. Jean walked around the grounds of the magnificient state.\n2. His friend pounded him on the back.\n3. The puppy gazed at him expectantly.\n4. The loud music in that store bothered Jamie.\n5. He has hot coffee before class.\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.\n68</p>\n<p>UNIT 6: CONJUNCTIONS\n1. I saw Mary at the store.\n2. I saw Mary and John at the store.\n3. I saw Mary and John and Harry at the store.\n4. I saw Mary and John and Harry and Melissa at the store.\n5. I saw Mary and John and Harry and Melissa and ten other people at the store.\n6. I saw\n...\nWel l , you g e t t he ide a .\nWhat are conjunctions? Conjunctions are connectors.They are words, such as and, that\njoin words, phrases and sentences together. Some other conjunctions are underlined in\nthe sentences below.\n7. He didn't respond much, just occasionally said ''yes''or ' 'no. ' '\n8. They take life seriously but are still fun to be around.\n9. I thought that he was crazy.\n1 0 . A d a ml e f tt h er o o mbefore Tabitha could say another thing.\n11. Just turn right when you get to the corner.\nThere are didierent kinds of conjunctions.W e'll look at coordinating conjunctions first.\n69</p>"
   },
   {
    "n": 18,
    "title": "Coordinating conjunctions",
    "html": "<p>Coordinating conjunctions connect any two units that are the same type. For example,\nthey can connect two sentences, two nouns, two verbs, two determiners, two preposi-\ntions, or two adjectives.\nQuick tip 18.1\nThere are three common coordinating conjunctions in English. They are: and , or , and but .\nFour less common ones are\nfor\n,\nso\n,\nyet\n, and\nnor\n.\nQuick tip 18.2\nA commonly used way to remember the coordinating conjunctions is to think of FANBOYS:\nF(\nfor\n), A (\nand</p>\n<p>), N (\nnor\n), B (\nbut\n), O (\nor\n), Y (\nyet\n), S (\nso\n).\nBut given that and , or ,a n d but are the most common, you'll be in good shape if you just\nremember those.\nThe coordinating conjunctions in the sentences below are underlined.\n1.\nYo uaskedmyfriend\n, and then the other two came as well .\n2.\nIg o or he goes .\n3.\nIt wasn't darkbut the moon was out .\nIn these sentences, you can see that the coordinating conjunction has a complete sentence\non either side of it. (The sentences on either side are in bold.) Thus, the conjunction in\nthese examples is connecting two sentences.\nIn the next group of sentences, you can see that the coordinating conjunction has\na noun on either side of it. Thus, the conjunction is joining two nouns. The nouns are\nin bold.\n4. The children had\nmilk and cookies .\n5. People study\nmedicine or dentistry when they enroll at that institution.\nIn the next sentences, the coordinating conjunction is joining two adjectives.The adjec-\ntives are in bold.\n6. That restaurant is known for\nhealthy and nutritious food.\n7. I'm buying either the\nstriped or paisley wallpaper.\nTest yourself 18.1\nUnderline the coordinating conjunction in each sentence below. Remember that the coordinating\nconjunctions are:\nand\n,\nor\n,\nbut\n,\nfor\n,\nso\n,\nyet\n,\nnor\n.\nSample: The old carpet was worn out but the furniture looked relatively new.\n70</p>\n<p>Getting started (answers on p. 79)\n1. Y ou can hide between trips and make believe\nyou're innocent.\n2. W as it near here or over there?\n3. Roger looked around but he didn't see\nanything.\n4. They'll eat chicken or turkey for\ndinner.\n5. Mr. Joseph pulled out three letters and\nhanded one to each of the men.\n More practice (answers on the website)\n6. He wants to work through the night but I\ndon't.\n7 . T h eg e n e r a ls e n tt h ed ispatcht ot h ea r m y\nand the navy.\n8. He went to the cloister or to the small chapel\nnearby.\n9. Maud is not hungry, nor is her sister\nthirsty.\n10. He'll come over or he'll call.\nTest yourself 18.2\nUnderline the coordinating conjunction in each sentence below. Then decide if the conjunction is\njoining two sentences or two nouns. In this exercise, if there is not a complete sentence on either\nside of the conjunction, it is joining two nouns.\nSample: Mary decided to have either soup or salad. nouns\nGetting started\n(answers on p. 79)\n1. Mr. Eagle was called away on business, so\nMrs. Broxton took his place at the\nmeeting. ..................................................\n2 . H e ' dh e a r do fi t ,b u th ed i d n ' tl i k et h ei d e a .\n.................................................................\n3. Erin felt real excitement and\nenthusiasm. ............................................\n4. It was raining hard, yet we went to the ball\ngame. .......................................................\n5. The airline attendant asked,''Would you like\ncodiee or tea?' ' ...........................................\nMore practice\n(answers on the website)\n6. The color TV was too expensive, so Nancy\ndidn't buy it. ............................................\n7. Do you swear to tell the truth, nothing but\nthe truth? ................................................\n8. At one time my favorite band was\nKatrina\nand theW aves\n. ..........................................\n9. Sammy wanted to go skydiving, but his\nparents didn't let him. ..............................\n10. For me, going to Paris is always a treat, for\nI love its architecture. ..............................\nTest yourself 18.3\nUnderline the coordinating conjunction in each sentence below. Then decide if the conjunction is\njoining two verbs, two adjectives, or two prepositions.\nSample: That is a diflcult but worthwhile lesson. adjectives\nGetting started\n(answers on p. 79)\n1. I'll be near or between the stacks. ................................................................................................\n2. He came up with a quick and ediective remedy. ................................................................................................\n3. I hope you won't worry or brood too much about it. ................................................................................................\n4. This trip will be expensive but worthwhile. ................................................................................................\n5 . Ia ma to rn e a rab reakthrough . ................................................................................................</p>\n<p>More practice (answers on the website)\n6. Don't you hate to eat and run? ................................................................................................\n7. What size shirt are you looking for: small or large? ................................................................................................\n8. They came and went in a hurry. ................................................................................................\n9 . A ts e v e ni nt h em o r n i n gT a m a r ai ss luggishy e te fl c i e n t .................................................................................................\n10. It is not advisable to drink and drive at the same time. ................................................................................................\nTest yourself 18.4\nW r i t ed o w nt h es e v e nc oordinatingc onjunctions .( RememberF A N B O Y S . )A n s w e r so np .7 9 .\n1. ......................................\n2. ......................................\n3. ......................................\n4. ......................................\n5. ......................................\n6. ......................................\n7. ......................................\n72\nUNIT 6: CONJUNCTIONS</p>"
   },
   {
    "n": 19,
    "title": "Subordinating conjunctions",
    "html": "<p>Another kind of conjunction is called a subordinating conjunction .H e r ea r es o m e\nexamples of sentences with subordinating conjunctions. The subordinating conjunc-\ntions are underlined.\n1. She continued arguing until everyone finally agreed with her.\n2. They live down south when the weather gets cold.\n3. Jack will buy a house once he gets a job.\n4. She listened to his comments politely, even though they sounded silly.\n5. They stopped talking when it was Eleanor' s turn.\nSubordinating conjunctions connect sentences; however, the two parts that are con-\nnected are not of equal value in terms of the meaning of the whole sentence. There is a\nmain sentence with a subpart; the subordinating conjunction connects the subpart to\nthe main sentence. Here are sentences 1 through 5 again, but this time with the main sen-\ntences in bold.\n6.\nShe continued arguing until everyone finally agreed with her.\n7.\nThey live down south when the weather gets cold.\n8.\nJack will buy a house once he gets a job.\n9.\nShe listened to his comments politely\n, even though they sounded silly.\n10.\nThey stopped talking when it was Eleanor' s turn.\nQuick tip 19.1\nSubordinating conjunctions connect a sentence with another sentence, which is a\nsubpart of it. The subpart sentence is called a\ndependent\nclause\n(or\nsubordinate\nclause\n). In the following sentence, the subordinating conjunction is underlined and\nthe dependent\nclause\nis in italics: Nick decided to try to escape, although he knew\nhis chances were slim\n.\nThe common subordinating conjunctions are listed below.\nafter even though than whenever\nalthough how that where\nas if though wherever\nas if in order that till whether\nas though once unless which\nbecause rather than until while\nbefore since what who\neven if so (that) when why\nY ou can see that sometimes a subordinating conjunction consists of more than one word.\nTest yourself 19.1\nUnderline the subordinating conjunctions in the sentences below. Use the list above to help you.\n73</p>\n<p>Sample: She was so tired that she didn't bother brushing her teeth.\nGetting started\n(answers on p. 79)\n1. I'll leave the note here because I'm in a hurry.\n2. Nick had coached him thoroughly, even\nthough they hadn't had much time.\n3. He could see the faint glow of a pipe that\nDr.W alters had lit.\n4. Y ou should stay here since they obviously\nneed you.\n5. She hasn't called here although she' d said\nshe would.\nMore practice\n(answers on the website)\n6 . J a k ew o u l db ef r e eo n c eh er e a c h e dt h e\nfence.\n7. Y ou were behaving as if you were the boss.\n8. They were determined to go for a walk,\nunless it was going to rain.\n9. Kevin should think twice before he\nspeaks.\n10. I am going to finish this job even if it takes\nhours.\nHere are the same sentences we saw earlier, but this time with the dependent clauses in\nitalics; the subordinating conjunctions are still underlined.\n11. She continued arguing until everyone finally agreed with her .\n12. They live down south when the weather gets cold .\n13. Jack will buy a house once he gets a job .\n14. She listened to his comments politely, even though they sounded silly .\n15. They stopped talking when it was Eleanor's turn .\nNotice that the subordinating conjunction is always the first word of the dependent\nclause.\nQuick tip 19.2\nThe subordinating conjunction is always the ﬁrst word of the dependent clause .\nIn all of the examples we've looked at so far, the dependent clause has come after the\nmain sentence. But sometimes the dependent clause comes before the main sentence. In\nthe following examples, the subordinating conjunctions are underlined, and the main\nsentences are in bold:\n16. If he knew the truth, her father would throw the doll away .\n17. When I brought my first paycheck home, I wanted to frame it .\n18. Once he gets a job, Jack will buy a house .\n19. When it was Eleanor' s turn, they stopped talking .\nNotice that sentences 18 and 19 are the same as sentences 13 and 15, except that in senten-\nces 18 and 19 the subordinating conjunction and the rest of the dependent clause come\nb e f o r et h em a i ns entencer a t h e rt h a na f t e ri t .\nTest yourself 19.2\nUnderline the subordinating conjunction in each of the sentences below. In each of these sentences,\nthe dependent clause comes before the main sentence.\nSample: Although he was not happily married, he remained faithful to his wife.\nUNIT 6: CONJUNCTIONS\n74</p>\n<p>Getting started (answers on p. 80)\n1. Even though he calmed down, he did not go\nback to the table immediately.\n2. While I enjoy being in the yard, I hate mowing\nthe lawn.\n3. Unless there' s a heavy downpour, I'm going\non that trip.\n4. Why anyone would swim in ice cold water,\nI just don't understand.\n5. Whether you are right or wrong, I will\nsupport you.\n More practice (answers on the website)\n6. Wherever we travel, we always have fun\ntogether.\n7. As I was looking for my keys, I noticed a\npackage in front of the door.\n8. Just after they crossed the river, the\ndrawbridge opened up.\n9. Before anyone cou …</p>\n<p>More practice (answers on the website)\n6. If you can understand this, you are a genius!\n7. Because you are a dear friend, I will share\nthis with you.\n8. Some people are aggressive yet polite.\n9. Her administrative assistant will work on\nthat project until it is completed.\n10. I rely on Joe to fix my computer, for he is an\nelectronics expert.\nTo enhance your understanding\nDon't confuse conjunctions with prepositions. Some words may function as either:\n20a. I've been working hard, for I hope to be promoted. (Coordinating conjunction:\nconnects two sentences.)\n20b. I've been working hard for IBM. (Preposition: introduces a noun.)\n21a. John left before they served dinner. (Subordinating conjunction: connects two\nsentences.)\n21b. John left before dinner. (Preposition: introduces a noun.)\nUNIT 6: CONJUNCTIONS\n76</p>"
   }
  ],
  "tips": [
   {
    "code": "18.1",
    "text": "There are three common coordinating conjunctions in English. They are: and , or , and but . Four less common ones are for , so , yet , and nor ."
   },
   {
    "code": "18.2",
    "text": "A commonly used way to remember the coordinating conjunctions is to think of FANBOYS: F( for ), A ( and ), N ( nor ), B ( but ), O ( or ), Y ( yet ), S ( so ). But given that and , or ,a n d but are the most common, you'll be in good shape if you just remember those. The coordinating conjunctions in the sentences below are underlined. 1. Yo uaskedmyfriend , and then the other two came as well . 2. Ig o or he goes . 3. It wasn't darkbut the moon was out . In these sentences, you can see that the coordinating conjunction has a complete sentence on either side of it. (The sentences on either side are in bold.) Thus, the conjunction in these…"
   },
   {
    "code": "19.1",
    "text": "Subordinating conjunctions connect a sentence with another sentence, which is a subpart of it. The subpart sentence is called a dependent clause (or subordinate clause ). In the following sentence, the subordinating conjunction is underlined and the dependent clause is in italics: Nick decided to try to escape, although he knew his chances were slim . The common subordinating conjunctions are listed below. after even though than whenever although how that where as if though wherever as if in order that till whether as though once unless which because rather than until while before since what who even if so (that) when why Y ou can see that…"
   },
   {
    "code": "19.2",
    "text": "The subordinating conjunction is always the ﬁrst word of the dependent clause . In all of the examples we've looked at so far, the dependent clause has come after the main sentence. But sometimes the dependent clause comes before the main sentence. In the following examples, the subordinating conjunctions are underlined, and the main sentences are in bold: 16. If he knew the truth, her father would throw the doll away . 17. When I brought my first paycheck home, I wanted to frame it . 18. Once he gets a job, Jack will buy a house . 19. When it was Eleanor' s turn, they stopped talking . Notice that sentences 18 and 19 are the same as…"
   }
  ],
  "practice": [
   {
    "code": "17.1",
    "instruction": "1. Let's go into the dining room. 2. It was the dumbest thing he did in his entire life. 3. Felice was having dinner on the patio. 4. She ran to the candy store. 5. I looked for you during the intermission.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "17.2",
    "instruction": "1. A uniformed guard stood near the massive entryway. 2. She leaned out the window and waved to the large crowd. 3. The older woman from Chicago had already left. 4. She staggered into the store. 5. Carissa sat at the computer in a large room.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "17.3",
    "instruction": "1. Jean walked around the grounds of the magnificient state. 2. His friend pounded him on the back. 3. The puppy gazed at him expectantly. 4. The loud music in that store bothered Jamie. 5. He has hot coffee before class. FOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE. 68",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "18.1",
    "instruction": "Underline the coordinating conjunction in each sentence below. Remember that the coordinating conjunctions are: and , or , but , for , so , yet , nor .",
    "sample": "Sample: The old carpet was worn out but the furniture looked relatively new. 70",
    "items": [
     {
      "n": 1,
      "text": "Y ou can hide between trips and make believe you're innocent.",
      "answer": ""
     },
     {
      "n": 2,
      "text": "W as it near here or over there?",
      "answer": "W as it near here or over there?"
     },
     {
      "n": 3,
      "text": "Roger looked around but he didn't see anything.",
      "answer": "Roger looked around but he didn’t see anything"
     },
     {
      "n": 4,
      "text": "They'll eat chicken or turkey for dinner.",
      "answer": "They’ll eat chicken or turkey for dinner"
     },
     {
      "n": 5,
      "text": "Mr. Joseph pulled out three letters and handed one to each of the men.",
      "answer": "Mr. Joseph pulled out three letters and handed one to each of the men"
     }
    ],
    "answers": {
     "2": "W as it near here or over there?",
     "3": "Roger looked around but he didn’t see anything",
     "4": "They’ll eat chicken or turkey for dinner",
     "5": "Mr. Joseph pulled out three letters and handed one to each of the men"
    }
   },
   {
    "code": "18.2",
    "instruction": "Underline the coordinating conjunction in each sentence below. Then decide if the conjunction is joining two sentences or two nouns. In this exercise, if there is not a complete sentence on either side of the conjunction, it is joining two nouns.",
    "sample": "Sample: Mary decided to have either soup or salad. nouns",
    "items": [
     {
      "n": 1,
      "text": "Mr. Eagle was called away on business, so Mrs. Broxton took his place at the meeting.  2 . H e ' dh e a r do fi t ,b u th ed i d n ' tl i k et h ei d e a .",
      "answer": "Mr. Eagle was called away on business, so Mrs. Broxton took his place at the meeting. sentences"
     },
     {
      "n": 3,
      "text": "Erin felt real excitement and enthusiasm.",
      "answer": "Erin felt real excitement and enthusiasm. nouns"
     },
     {
      "n": 4,
      "text": "It was raining hard, yet we went to the ball game.",
      "answer": "It was raining hard, y e tw ew e n tt ot h eb a l lg a m e .sentences"
     },
     {
      "n": 5,
      "text": "The airline attendant asked,''Would you like codiee or tea?' '",
      "answer": "The airline attendant asked,‘‘Would you like co¡ee or tea?’ ’ nouns"
     }
    ],
    "answers": {
     "1": "Mr. Eagle was called away on business, so Mrs. Broxton took his place at the meeting. sentences",
     "2": "He’ d heard of it,but he didn’t like the idea. sentences",
     "3": "Erin felt real excitement and enthusiasm. nouns",
     "4": "It was raining hard, y e tw ew e n tt ot h eb a l lg a m e .sentences",
     "5": "The airline attendant asked,‘‘Would you like co¡ee or tea?’ ’ nouns"
    }
   },
   {
    "code": "18.3",
    "instruction": "Underline the coordinating conjunction in each sentence below. Then decide if the conjunction is joining two verbs, two adjectives, or two prepositions.",
    "sample": "Sample: That is a diflcult but worthwhile lesson. adjectives",
    "items": [
     {
      "n": 1,
      "text": "I'll be near or between the stacks.",
      "answer": "I’ll be near or between the stacks. prepositions"
     },
     {
      "n": 2,
      "text": "He came up with a quick and ediective remedy.",
      "answer": "He came up with a quick and e¡ective remedy. adjectives"
     },
     {
      "n": 3,
      "text": "I hope you won't worry or brood too much about it.",
      "answer": "I hope you won’t worry or brood too much about it. verbs"
     },
     {
      "n": 4,
      "text": "This trip will be expensive but worthwhile.  5 . Ia ma to rn e a rab reakthrough .",
      "answer": "This trip will be expensive but worthwhile. adjectives"
     }
    ],
    "answers": {
     "1": "I’ll be near or between the stacks. prepositions",
     "2": "He came up with a quick and e¡ective remedy. adjectives",
     "3": "I hope you won’t worry or brood too much about it. verbs",
     "4": "This trip will be expensive but worthwhile. adjectives",
     "5": "I am at or near a breakthrough. prepositions"
    }
   },
   {
    "code": "18.4",
    "instruction": "W r i t ed o w nt h es e v e nc oordinatingc onjunctions .( RememberF A N B O Y S . )A n s w e r so np .7 9 . 1. ...................................... 2. ...................................... 3. ...................................... 4. ...................................... 5. ...................................... 6. ...................................... 7. ...................................",
    "sample": "",
    "items": [],
    "answers": {
     "1": "F or",
     "2": "A nd",
     "3": "N or",
     "4": "B ut",
     "5": "O r",
     "6": "Y et",
     "7": "S o"
    }
   },
   {
    "code": "19.1",
    "instruction": "Underline the subordinating conjunctions in the sentences below. Use the list above to help you. 73",
    "sample": "Sample: She was so tired that she didn't bother brushing her teeth.",
    "items": [
     {
      "n": 1,
      "text": "I'll leave the note here because I'm in a hurry.",
      "answer": "I’ll leave the note here because I’m in a hurry"
     },
     {
      "n": 2,
      "text": "Nick had coached him thoroughly, even though they hadn't had much time.",
      "answer": "Nick had coached him thoroughly, even though they hadn’t had much time"
     },
     {
      "n": 3,
      "text": "He could see the faint glow of a pipe that Dr.W alters had lit.",
      "answer": "He could see the faint glow of a pipe that Dr.W alters had lit"
     },
     {
      "n": 4,
      "text": "Y ou should stay here since they obviously need you.",
      "answer": "You should stay here since they obviously need you"
     },
     {
      "n": 5,
      "text": "She hasn't called here although she' d said she would.",
      "answer": "She hasn’t called here although she’ d said she would. 79"
     }
    ],
    "answers": {
     "1": "I’ll leave the note here because I’m in a hurry",
     "2": "Nick had coached him thoroughly, even though they hadn’t had much time",
     "3": "He could see the faint glow of a pipe that Dr.W alters had lit",
     "4": "You should stay here since they obviously need you",
     "5": "She hasn’t called here although she’ d said she would. 79"
    }
   },
   {
    "code": "19.2",
    "instruction": "Underline the subordinating conjunction in each of the sentences below. In each of these sentences, the dependent clause comes before the main sentence.",
    "sample": "Sample: Although he was not happily married, he remained faithful to his wife.",
    "items": [],
    "answers": {
     "1": "Even though he calmed down, he did not go back to the table immediately",
     "2": "While I enjoy being in the yard, I hate mowing the lawn",
     "3": "Unless there’ s a heavy downpour, I’m going on that trip",
     "4": "Why anyone would swim in ice cold water, I just don’t understand",
     "5": "Whether you are right or wrong, I will support you"
    }
   },
   {
    "code": "19.3",
    "instruction": "Underline the subordinating conjunction in each of the sentences below. In some of them, the dependent clause will be after the main sentence; in others, it will come before the main sentence. Again, use the list of subordinating conjunctions to help you.",
    "sample": "Sample: I work at the mall when I'm home for the holidays. (S)",
    "items": [
     {
      "n": 1,
      "text": "Sally spent a lot of time with the babysitter, because her mother had to work.",
      "answer": "Sally spent a lot of time with the babysitter, because her mother had to work"
     },
     {
      "n": 2,
      "text": "Since you're always busy, I decided to go to the movies without you.",
      "answer": "Since you’re always busy, I decided to go to the movies without you"
     },
     {
      "n": 3,
      "text": "After he read the article, he decided not to argue any further.",
      "answer": "After he read the article, he decided not to argue any further"
     },
     {
      "n": 4,
      "text": "We will move to Seattle, unless you can convince me not to.",
      "answer": "We will move to Seattle, unlessy o uc a nc onvincem en o tt o"
     },
     {
      "n": 5,
      "text": "As if speaking Igbo wasn't enough, this professor speaksY oruba as well.",
      "answer": "As if speaking Igbo wasn’t enough, this professor speaksY oruba as well"
     },
     {
      "n": 1,
      "text": "I'm the owner and editor of the local newspaper.",
      "answer": "Sally spent a lot of time with the babysitter, because her mother had to work"
     },
     {
      "n": 2,
      "text": "Before Megan helped him, George would have to prove his loyalty.",
      "answer": "Since you’re always busy, I decided to go to the movies without you"
     },
     {
      "n": 3,
      "text": "There' s more than one career that he' s interested in.",
      "answer": "After he read the article, he decided not to argue any further"
     },
     {
      "n": 4,
      "text": "They painted her house while she was at work.",
      "answer": "We will move to Seattle, unlessy o uc a nc onvincem en o tt o"
     },
     {
      "n": 5,
      "text": "I arrived early but I still wasn't the first in line.",
      "answer": "As if speaking Igbo wasn’t enough, this professor speaksY oruba as well"
     }
    ],
    "answers": {
     "1": "Sally spent a lot of time with the babysitter, because her mother had to work",
     "2": "Since you’re always busy, I decided to go to the movies without you",
     "3": "After he read the article, he decided not to argue any further",
     "4": "We will move to Seattle, unlessy o uc a nc onvincem en o tt o",
     "5": "As if speaking Igbo wasn’t enough, this professor speaksY oruba as well"
    }
   }
  ],
  "exercises": [
   {
    "q": "Y ou can hide between trips and make believe you're innocent.",
    "type": "input",
    "answer": "",
    "source": "18.1",
    "instruction": "Underline the coordinating conjunction in each sentence below. Remember that the coordinating conjunctions are: and , or , but , for , so , yet , nor .",
    "explanation": ""
   },
   {
    "q": "W as it near here or over there?",
    "type": "input",
    "answer": "W as it near here or over there?",
    "source": "18.1",
    "instruction": "Underline the coordinating conjunction in each sentence below. Remember that the coordinating conjunctions are: and , or , but , for , so , yet , nor .",
    "explanation": "Respuesta del libro: W as it near here or over there?"
   },
   {
    "q": "Roger looked around but he didn't see anything.",
    "type": "input",
    "answer": "Roger looked around but he didn’t see anything",
    "source": "18.1",
    "instruction": "Underline the coordinating conjunction in each sentence below. Remember that the coordinating conjunctions are: and , or , but , for , so , yet , nor .",
    "explanation": "Respuesta del libro: Roger looked around but he didn’t see anything"
   },
   {
    "q": "They'll eat chicken or turkey for dinner.",
    "type": "input",
    "answer": "They’ll eat chicken or turkey for dinner",
    "source": "18.1",
    "instruction": "Underline the coordinating conjunction in each sentence below. Remember that the coordinating conjunctions are: and , or , but , for , so , yet , nor .",
    "explanation": "Respuesta del libro: They’ll eat chicken or turkey for dinner"
   },
   {
    "q": "Mr. Joseph pulled out three letters and handed one to each of the men.",
    "type": "input",
    "answer": "Mr. Joseph pulled out three letters and handed one to each of the men",
    "source": "18.1",
    "instruction": "Underline the coordinating conjunction in each sentence below. Remember that the coordinating conjunctions are: and , or , but , for , so , yet , nor .",
    "explanation": "Respuesta del libro: Mr. Joseph pulled out three letters and handed one to each of the men"
   },
   {
    "q": "Mr. Eagle was called away on business, so Mrs. Broxton took his place at the meeting.  2 . H e ' dh e a r do fi t ,b u th ed i d n ' tl i k et h ei d e a .",
    "type": "input",
    "answer": "Mr. Eagle was called away on business, so Mrs. Broxton took his place at the meeting. sentences",
    "source": "18.2",
    "instruction": "Underline the coordinating conjunction in each sentence below. Then decide if the conjunction is joining two sentences or two nouns. In this exercise, if there is not a complete sentence on either side of the conjunction, it is joining two ",
    "explanation": "Respuesta del libro: Mr. Eagle was called away on business, so Mrs. Broxton took his place at the meeting. sentences"
   },
   {
    "q": "Erin felt real excitement and enthusiasm.",
    "type": "input",
    "answer": "Erin felt real excitement and enthusiasm. nouns",
    "source": "18.2",
    "instruction": "Underline the coordinating conjunction in each sentence below. Then decide if the conjunction is joining two sentences or two nouns. In this exercise, if there is not a complete sentence on either side of the conjunction, it is joining two ",
    "explanation": "Respuesta del libro: Erin felt real excitement and enthusiasm. nouns"
   },
   {
    "q": "It was raining hard, yet we went to the ball game.",
    "type": "input",
    "answer": "It was raining hard, y e tw ew e n tt ot h eb a l lg a m e .sentences",
    "source": "18.2",
    "instruction": "Underline the coordinating conjunction in each sentence below. Then decide if the conjunction is joining two sentences or two nouns. In this exercise, if there is not a complete sentence on either side of the conjunction, it is joining two ",
    "explanation": "Respuesta del libro: It was raining hard, y e tw ew e n tt ot h eb a l lg a m e .sentences"
   },
   {
    "q": "The airline attendant asked,''Would you like codiee or tea?' '",
    "type": "input",
    "answer": "The airline attendant asked,‘‘Would you like co¡ee or tea?’ ’ nouns",
    "source": "18.2",
    "instruction": "Underline the coordinating conjunction in each sentence below. Then decide if the conjunction is joining two sentences or two nouns. In this exercise, if there is not a complete sentence on either side of the conjunction, it is joining two ",
    "explanation": "Respuesta del libro: The airline attendant asked,‘‘Would you like co¡ee or tea?’ ’ nouns"
   },
   {
    "q": "I'll be near or between the stacks.",
    "type": "input",
    "answer": "I’ll be near or between the stacks. prepositions",
    "source": "18.3",
    "instruction": "Underline the coordinating conjunction in each sentence below. Then decide if the conjunction is joining two verbs, two adjectives, or two prepositions.",
    "explanation": "Respuesta del libro: I’ll be near or between the stacks. prepositions"
   },
   {
    "q": "He came up with a quick and ediective remedy.",
    "type": "input",
    "answer": "He came up with a quick and e¡ective remedy. adjectives",
    "source": "18.3",
    "instruction": "Underline the coordinating conjunction in each sentence below. Then decide if the conjunction is joining two verbs, two adjectives, or two prepositions.",
    "explanation": "Respuesta del libro: He came up with a quick and e¡ective remedy. adjectives"
   },
   {
    "q": "I hope you won't worry or brood too much about it.",
    "type": "input",
    "answer": "I hope you won’t worry or brood too much about it. verbs",
    "source": "18.3",
    "instruction": "Underline the coordinating conjunction in each sentence below. Then decide if the conjunction is joining two verbs, two adjectives, or two prepositions.",
    "explanation": "Respuesta del libro: I hope you won’t worry or brood too much about it. verbs"
   },
   {
    "q": "This trip will be expensive but worthwhile.  5 . Ia ma to rn e a rab reakthrough .",
    "type": "input",
    "answer": "This trip will be expensive but worthwhile. adjectives",
    "source": "18.3",
    "instruction": "Underline the coordinating conjunction in each sentence below. Then decide if the conjunction is joining two verbs, two adjectives, or two prepositions.",
    "explanation": "Respuesta del libro: This trip will be expensive but worthwhile. adjectives"
   },
   {
    "q": "I'll leave the note here because I'm in a hurry.",
    "type": "input",
    "answer": "I’ll leave the note here because I’m in a hurry",
    "source": "19.1",
    "instruction": "Underline the subordinating conjunctions in the sentences below. Use the list above to help you. 73",
    "explanation": "Respuesta del libro: I’ll leave the note here because I’m in a hurry"
   },
   {
    "q": "Nick had coached him thoroughly, even though they hadn't had much time.",
    "type": "input",
    "answer": "Nick had coached him thoroughly, even though they hadn’t had much time",
    "source": "19.1",
    "instruction": "Underline the subordinating conjunctions in the sentences below. Use the list above to help you. 73",
    "explanation": "Respuesta del libro: Nick had coached him thoroughly, even though they hadn’t had much time"
   },
   {
    "q": "He could see the faint glow of a pipe that Dr.W alters had lit.",
    "type": "input",
    "answer": "He could see the faint glow of a pipe that Dr.W alters had lit",
    "source": "19.1",
    "instruction": "Underline the subordinating conjunctions in the sentences below. Use the list above to help you. 73",
    "explanation": "Respuesta del libro: He could see the faint glow of a pipe that Dr.W alters had lit"
   },
   {
    "q": "Y ou should stay here since they obviously need you.",
    "type": "input",
    "answer": "You should stay here since they obviously need you",
    "source": "19.1",
    "instruction": "Underline the subordinating conjunctions in the sentences below. Use the list above to help you. 73",
    "explanation": "Respuesta del libro: You should stay here since they obviously need you"
   },
   {
    "q": "She hasn't called here although she' d said she would.",
    "type": "input",
    "answer": "She hasn’t called here although she’ d said she would. 79",
    "source": "19.1",
    "instruction": "Underline the subordinating conjunctions in the sentences below. Use the list above to help you. 73",
    "explanation": "Respuesta del libro: She hasn’t called here although she’ d said she would. 79"
   },
   {
    "q": "Sally spent a lot of time with the babysitter, because her mother had to work.",
    "type": "input",
    "answer": "Sally spent a lot of time with the babysitter, because her mother had to work",
    "source": "19.3",
    "instruction": "Underline the subordinating conjunction in each of the sentences below. In some of them, the dependent clause will be after the main sentence; in others, it will come before the main sentence. Again, use the list of subordinating conjunctio",
    "explanation": "Respuesta del libro: Sally spent a lot of time with the babysitter, because her mother had to work"
   },
   {
    "q": "Since you're always busy, I decided to go to the movies without you.",
    "type": "input",
    "answer": "Since you’re always busy, I decided to go to the movies without you",
    "source": "19.3",
    "instruction": "Underline the subordinating conjunction in each of the sentences below. In some of them, the dependent clause will be after the main sentence; in others, it will come before the main sentence. Again, use the list of subordinating conjunctio",
    "explanation": "Respuesta del libro: Since you’re always busy, I decided to go to the movies without you"
   },
   {
    "q": "After he read the article, he decided not to argue any further.",
    "type": "input",
    "answer": "After he read the article, he decided not to argue any further",
    "source": "19.3",
    "instruction": "Underline the subordinating conjunction in each of the sentences below. In some of them, the dependent clause will be after the main sentence; in others, it will come before the main sentence. Again, use the list of subordinating conjunctio",
    "explanation": "Respuesta del libro: After he read the article, he decided not to argue any further"
   },
   {
    "q": "We will move to Seattle, unless you can convince me not to.",
    "type": "input",
    "answer": "We will move to Seattle, unlessy o uc a nc onvincem en o tt o",
    "source": "19.3",
    "instruction": "Underline the subordinating conjunction in each of the sentences below. In some of them, the dependent clause will be after the main sentence; in others, it will come before the main sentence. Again, use the list of subordinating conjunctio",
    "explanation": "Respuesta del libro: We will move to Seattle, unlessy o uc a nc onvincem en o tt o"
   },
   {
    "q": "As if speaking Igbo wasn't enough, this professor speaksY oruba as well.",
    "type": "input",
    "answer": "As if speaking Igbo wasn’t enough, this professor speaksY oruba as well",
    "source": "19.3",
    "instruction": "Underline the subordinating conjunction in each of the sentences below. In some of them, the dependent clause will be after the main sentence; in others, it will come before the main sentence. Again, use the list of subordinating conjunctio",
    "explanation": "Respuesta del libro: As if speaking Igbo wasn’t enough, this professor speaksY oruba as well"
   },
   {
    "q": "I'm the owner and editor of the local newspaper.",
    "type": "input",
    "answer": "Sally spent a lot of time with the babysitter, because her mother had to work",
    "source": "19.3",
    "instruction": "Underline the subordinating conjunction in each of the sentences below. In some of them, the dependent clause will be after the main sentence; in others, it will come before the main sentence. Again, use the list of subordinating conjunctio",
    "explanation": "Respuesta del libro: Sally spent a lot of time with the babysitter, because her mother had to work"
   },
   {
    "q": "Before Megan helped him, George would have to prove his loyalty.",
    "type": "input",
    "answer": "Since you’re always busy, I decided to go to the movies without you",
    "source": "19.3",
    "instruction": "Underline the subordinating conjunction in each of the sentences below. In some of them, the dependent clause will be after the main sentence; in others, it will come before the main sentence. Again, use the list of subordinating conjunctio",
    "explanation": "Respuesta del libro: Since you’re always busy, I decided to go to the movies without you"
   },
   {
    "q": "There' s more than one career that he' s interested in.",
    "type": "input",
    "answer": "After he read the article, he decided not to argue any further",
    "source": "19.3",
    "instruction": "Underline the subordinating conjunction in each of the sentences below. In some of them, the dependent clause will be after the main sentence; in others, it will come before the main sentence. Again, use the list of subordinating conjunctio",
    "explanation": "Respuesta del libro: After he read the article, he decided not to argue any further"
   },
   {
    "q": "They painted her house while she was at work.",
    "type": "input",
    "answer": "We will move to Seattle, unlessy o uc a nc onvincem en o tt o",
    "source": "19.3",
    "instruction": "Underline the subordinating conjunction in each of the sentences below. In some of them, the dependent clause will be after the main sentence; in others, it will come before the main sentence. Again, use the list of subordinating conjunctio",
    "explanation": "Respuesta del libro: We will move to Seattle, unlessy o uc a nc onvincem en o tt o"
   },
   {
    "q": "I arrived early but I still wasn't the first in line.",
    "type": "input",
    "answer": "As if speaking Igbo wasn’t enough, this professor speaksY oruba as well",
    "source": "19.3",
    "instruction": "Underline the subordinating conjunction in each of the sentences below. In some of them, the dependent clause will be after the main sentence; in others, it will come before the main sentence. Again, use the list of subordinating conjunctio",
    "explanation": "Respuesta del libro: As if speaking Igbo wasn’t enough, this professor speaksY oruba as well"
   }
  ],
  "answerKeys": {
   "18.1": {
    "2": "W as it near here or over there?",
    "3": "Roger looked around but he didn’t see anything",
    "4": "They’ll eat chicken or turkey for dinner",
    "5": "Mr. Joseph pulled out three letters and handed one to each of the men"
   },
   "18.2": {
    "1": "Mr. Eagle was called away on business, so Mrs. Broxton took his place at the meeting. sentences",
    "2": "He’ d heard of it,but he didn’t like the idea. sentences",
    "3": "Erin felt real excitement and enthusiasm. nouns",
    "4": "It was raining hard, y e tw ew e n tt ot h eb a l lg a m e .sentences",
    "5": "The airline attendant asked,‘‘Would you like co¡ee or tea?’ ’ nouns"
   },
   "18.3": {
    "1": "I’ll be near or between the stacks. prepositions",
    "2": "He came up with a quick and e¡ective remedy. adjectives",
    "3": "I hope you won’t worry or brood too much about it. verbs",
    "4": "This trip will be expensive but worthwhile. adjectives",
    "5": "I am at or near a breakthrough. prepositions"
   },
   "18.4": {
    "1": "F or",
    "2": "A nd",
    "3": "N or",
    "4": "B ut",
    "5": "O r",
    "6": "Y et",
    "7": "S o"
   },
   "19.1": {
    "1": "I’ll leave the note here because I’m in a hurry",
    "2": "Nick had coached him thoroughly, even though they hadn’t had much time",
    "3": "He could see the faint glow of a pipe that Dr.W alters had lit",
    "4": "You should stay here since they obviously need you",
    "5": "She hasn’t called here although she’ d said she would. 79"
   },
   "19.2": {
    "1": "Even though he calmed down, he did not go back to the table immediately",
    "2": "While I enjoy being in the yard, I hate mowing the lawn",
    "3": "Unless there’ s a heavy downpour, I’m going on that trip",
    "4": "Why anyone would swim in ice cold water, I just don’t understand",
    "5": "Whether you are right or wrong, I will support you"
   },
   "19.3": {
    "1": "Sally spent a lot of time with the babysitter, because her mother had to work",
    "2": "Since you’re always busy, I decided to go to the movies without you",
    "3": "After he read the article, he decided not to argue any further",
    "4": "We will move to Seattle, unlessy o uc a nc onvincem en o tt o",
    "5": "As if speaking Igbo wasn’t enough, this professor speaksY oruba as well"
   },
   "19.4": {
    "1": "I’m the owner and editor of the local newspaper. (C)",
    "2": "Before Megan helped him, George would have to prove his loyalty. (S)",
    "3": "There's more than one career that he’ s interested in. (S)",
    "4": "They painted her house while she was at work. (S)",
    "5": "I arrived early but I still wasn’t the first in line. (C)"
   },
   "20.1": {
    "1": "Neither you nor your friends are likely to win that ra¥e",
    "2": "Both Laurette and Denise have been working towards that goal",
    "3": "If my neighbor decides to plant bushes there, then I’ll do some landscaping on my side of the fence as well",
    "4": "Neither Don’ s commentsnor his actions surprised me",
    "5": "This athlete is likely to win either a gold or a silver medal"
   },
   "20.2": {
    "1": "They were pleased with the plan and happy about the decision. (C)",
    "2": "I’ll see you when you get here. (S)",
    "3": "They’re worried because she hasn’t been feeling well lately. (S)",
    "4": "Our encounter was short but sweet. (C)",
    "5": "If you tell the truth, then I won’t get upset. (CORR)"
   },
   "21.1": {
    "1": "I crossed the piazza and headed towards the church",
    "2": "Unfortunately, it was closed",
    "3": "They simply stood there, waiting for me",
    "4": "Y esterday, she went shopping",
    "5": "W e should get together sometime. 82",
    "6": "He is the grandson of an immigrant from Italy",
    "7": "W e often dream about important things",
    "8": "You have been to their house for dinner",
    "9": "They often have interesting discussions",
    "10": "Last night they drove to San Francisco. Object pronouns 7a. Karen bought the red car. 7b. Karen bought it. 8a. The prize was given to Steve and Bill. 8b. The prize was given to them. 9a. I’m watching the baby. 9b. I’m watching her. The underlined nouns in the sentences above are not subjects. Rather, they are objects : they either follow the main verb or they follow a preposition. (For more on objects, see Unit 13 .) Pronouns that replace objects, like those underlined in sentences 7b, 8b, and 9b above, are called object pronouns . There are only seven object pronouns; they are listed in Quick tip 21.2 . Quick tip 21.2 The object pronouns are: me, you , her , him , it , us , them . You can see that two pronouns, you and it , are particularly hardworking: they can function as either subject or object pronouns"
   },
   "21.2": {
    "1": "Mary heard him",
    "2": "The detective watched us suspiciously",
    "3": "Stop bothering me!",
    "4": "Steven sat down between him and her",
    "5": "Do the students understand it?",
    "6": "My friends have never heard of them",
    "7": "Barry gave her a present",
    "8": "Harry’ s cousin lives near them",
    "9": "Most competitors were envious of him",
    "10": "A strange man is standing next to you and me"
   },
   "21.3": {
    "1": "them",
    "2": "he",
    "3": "I",
    "4": "us",
    "5": "her",
    "6": "they",
    "7": "she",
    "8": "me",
    "9": "him",
    "10": "we"
   },
   "21.4": {
    "1": "John Smith sawJohn Smith in the mirror",
    "2": "My friends were talking among my friends. 3 . S a m ’ so n l yc a tw a sg roomingS a m ’ so n l yc a t . T h e s es entencesa r es trangeb ecauset h e y ’ r em issingreflexive pronouns ,t h o s ep r o - nouns that end in -self or -selves . As you can see from the sentences below, we use reflexive pronouns whenever we refer to the same person or thing more than once in the same basic sentence. Sentences 1^3 should be stated like this:",
    "3": "It is brighter than that other lamp",
    "4": "John Smith saw himself in the mirror",
    "5": "My best friends were talking among themselves. 6 . S a m ’ so n l yc a tw a sg roomingherself. Here are some more examples, first without and then with a reflexive pronoun. 7a. The boy washed the boy. 7b. The boy washed himself. 8a. Tom and Harry watchedTom and Harry on the video. 8b. Tom and Harry watched themselves on the video. 9a. You can see you doing that. 9b. You can see yourself doing that. Notice that if we hear, for example, T h eb o yw a s h e dt h eb o y ,w ithoutar eflexivepronoun, then we assume that someone’ s talking about two different boys. Similarly, the sentence He shaved him suggests that the person (a male) who did the shaving and the person (a male) who received the shaving are not the same. The reflexive pronoun lets the listener know that the speaker is referring to the same person or thing. Quick tip 22.1 lists the reflexive pronouns. They’re easy to identify because they all end in -self or -selves ( Quick tip 22.2 ). Quick tip 22.1 The reflexive pronouns are: myself , yourself , himself , herself , itself , ourselves , yourselves, themselves . Quick tip 22.2 All the reflexive pronouns end in -self ( singular )o r -selves ( plural )",
    "6": "They were hiding in the bushes",
    "7": "I am g iving it to you",
    "8": "He went too far this time",
    "9": "Theresa’ s parents worried about her",
    "10": "She hears from him often. You know that when you’re talking about yourself, you use the pronouns I or me ,a n d when you’re talking about a group of people, you use the pronouns they or them .T h a t i s , we choose different pronouns depending on the person or thing the pronouns refer to. Pronouns that vary in this way are called personal pronouns .S ubjecta n do b j e c tp r o - nouns are types of personal pronouns; see Lessons 22 and 24 for two other kinds. Personal pronouns that refer to the speaker in a conversation, like I and we ,a r ec alledfirst person pronouns .Those that refer to the listener, like you ,a r ec alledsecond person pronouns . And those that refer to anyone or anything else, like he or they ,a r ec alledthird person pronouns . In addition, pronouns that refer to only one person or thing, like I and he ,a r ec alledsin- gular pronouns ; those that refer to more than one person or thing, like we and they ,a r e called plural pronouns . Here’ s a complete breakdown of the subject and object pronouns: Subject Object First person singular I me Second person singular you you Third person singular he, she, it him, her, it First person plural we us Second person plural you you Third person plural they them UNIT 7: PRONOUNS 84 Lesson 22: Reflexive pronouns Do the following sentences seem strange to you?"
   }
  }
 },
 {
  "unit": 7,
  "title": "Pronouns",
  "part": "Part I: Kinds of words",
  "startPage": 94,
  "pdfPages": {
   "theory": [
    94,
    110
   ],
   "answers": 112
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Los pronombres reemplazan sustantivos o frases nominales. La U7 cubre sujeto/objeto, reflexivos, demostrativos, posesivos, interrogativos y relativos.</p></div>\n<div class=\"theory-es-section\"><h4>1. Sujeto vs. objeto</h4><p><strong>Sujeto</strong> (hace la acción): <em>I, you, he, she, it, we, they</em>. <strong>Objeto</strong> (recibe la acción): <em>me, you, him, her, it, us, them</em>. <em>She saw <strong>him</strong></em>.</p></div>\n<div class=\"theory-es-section\"><h4>2. Reflexivos</h4><p>Cuando el sujeto y el objeto son la misma persona: <em>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</em>. <em>Harry saw <strong>himself</strong> in the mirror</em>.</p></div>\n<div class=\"theory-es-section\"><h4>3. Demostrativos y posesivos</h4><p><strong>Demostrativos:</strong> <em>this/that/these/those</em> solos. <strong>Posesivos nominales:</strong> <em>mine, yours, his, hers, ours, theirs</em> (sin sustantivo después).</p></div>\n<div class=\"theory-es-section\"><h4>4. Interrogativos</h4><p><strong>who, whom, whose, what, which</strong> para preguntar. <em>Who delivered the paper?</em></p></div>\n<div class=\"theory-es-section\"><h4>5. Relativos</h4><p><strong>who/whom/which/that/whose</strong> introducen clause de relativo: <em>He's the boy <strong>who</strong> delivers the paper</em>. Enlazan la cláusula al sustantivo anterior.</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> Mirá la posición: antes de un verbo transitivo → sujeto; después del verbo o de preposición → objeto.</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>Test yourself 19.2\n1. Even though he calmed down, he did not go back to the table immediately.\n2. While I enjoy being in the yard, I hate mowing the lawn.\n3. Unless there' s a heavy downpour, I'm going on that trip.\n4. Why anyone would swim in ice cold water, I just don't understand.\n5. Whether you are right or wrong, I will support you.\nTest yourself 19.3\n1. Sally spent a lot of time with the babysitter, because her mother had to work.\n2. Since you're always busy, I decided to go to the movies without you.\n3. After he read the article, he decided not to argue any further.\n4. We will move to Seattle, u n l e s sy o uc a nc onvincem en o tt o .\n5. As if speaking Igbo wasn't enough, this professor speaksY oruba as well.\nTest yourself 19.4\n1. I'm the owner and editor of the local newspaper. (C)\n2. Before Megan helped him, George would have to prove his loyalty. (S)\n3. There' s more than one career that he' s interested in. (S)\n4. They painted her house while she was at work. (S)\n5. I arrived early but I still wasn't the first in line. (C)\nTest yourself 20.1\n1. Neither you nor your friends are likely to win that ra¥e.\n2. Both Laurette and Denise have been working towards that goal.\n3. If my neighbor decides to plant bushes there, then I'll do some landscaping on my side of the\nfence as well.\n4. Neither Don' s commentsnor his actions surprised me.\n5. This athlete is likely to win either a gold or a silver medal.\nTest yourself 20.2\n1. They were pleased with the plan and happy about the decision. (C)\n2. I'll see you when you get here. (S)\n3. They're worried because she hasn't been feeling well lately. (S)\n4. Our encounter was short but sweet. (C)\n5. If you tell the truth, then I won't get upset. (CORR)\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.\nUNIT 6: CONJUNCTIONS\n80</p>\n<p>UNIT 7: PRONOUNS\nAs Melissa entered the door of the dimly lit Cathedral, Melissa held tightly to Melissa's backpack.\nSuddenly, Melissa thought that Melissa saw a shadow moving. ''This is scary, '' whispered\nMelissa to Melissa\n.\nWhat' s strange about the sentences in the above text? What is strange is that they're\nmissing\npronouns\n, words that replace nouns in a sentence. Y ou'll probably agree that\nthese next sentences are a vast improvement on the first version:\nAs Melissa entered the door of the dimly lit Cathedral, she held tightly to her backpack. Suddenly,\nshe thought that she saw a shadow moving . ''This is scary, '' whispered Melissa toherself .\nW e may never find out what happens to Melissa, but replacing Melissa with pronouns\nlike\nshe\nand\nher\nmakes her far more palatable.\nAs far as pronouns go, there' s bad news and there' s good news.The bad news is that there\nare a number of different kinds of pronouns.The good news is that there are only a few pro-\nnouns of each type. Look at the pronouns themselves and get a feel for the kinds of words\nthey are. Some of the types may have long labels, but the pronouns themselves are usually\nshort words.\n81</p>"
   },
   {
    "n": 21,
    "title": "Subject and object pronouns",
    "html": "<p>Subject pronouns\nLet' s look at the following sentences:\n1a. Diplomats travel extensively.\n1b. They travel extensively.\n2a. Professor Susan Fields chaired the meeting.\n2b. She chaired the meeting.\n3a. Ben plays cards every week.\n3b. He plays cards every week.\nNotice that in each sentence pair, the underlined pronoun replaces the underlined\nnoun.The underlined noun is doing the action in the sentence and comes before the verb.\nThis kind of noun is called the\nsubject\nof the sentence and the pronoun that replaces it is\ncalled a\nsubject pronoun\n.\nNow let' s examine these sentences:\n4a. Biology is her favorite subject.\n4b. It is her favorite subject.\n5a. Bob seems happy.\n5b. He seems happy.\n6a. Mrs. Peters becomes agitated easily.\n6b. She becomes agitated easily.\nNotice again that in each sentence pair, the underlined pronoun replaces the underlined\nnoun. Here, the underlined nouns come before linking verbs (see\nLesson 9\n); although\nthey are not performing an action, they are still considered to be subjects. Again, the pro-\nnoun that replaces the subject is a subject pronoun.\nThere are only seven subject pronouns; they are listed in\nQuick tip\n21.1\n.\nQuick tip 21.1\nThe subject pronouns are: I , you , he , she , it , we , they .\nTest yourself 21.1\nUnderline the subject pronouns in the sentences below.\nSample: W e wandered around town, looking for a place to have lunch.\nGetting started\n(answers on p. 99)\n1. I crossed the piazza and headed towards the\nchurch.\n2. Unfortunately, it was closed.\n3. They simply stood there, waiting for me.\n4. Y esterday, she went shopping.\n5. W e should get together sometime.\n82</p>\n<p>More practice (answers on the website)\n6. He is the grandson of an immigrant from\nItaly.\n7. W e often dream about important things.\n8. Y ou have been to their house for dinner.\n9. They often have interesting discussions.\n10. Last night they drove to San Francisco.\nObject pronouns\n7a. Karen bought the red car.\n7b. Karen bought it.\n8a. The prize was given to Steve and Bill.\n8b. The prize was given to them.\n9a. I'm watching the baby.\n9b. I'm watching her.\nThe underlined nouns in the sentences above are\nnot\nsubjects. Rather, they are\nobjects\n:\nthey either follow the main verb or they follow a preposition. (For more on objects, see\nUnit 13\n.) Pronouns that replace objects, like those underlined in sentences 7b, 8b, and 9b\nabove, are called\nobject pronouns\n.\nThere are only seven object pronouns; they are listed in\nQuick tip\n21.2\n.\nQuick tip 21.2\nThe object pronouns are: me, you , her , him , it , us , them .\nY ou can see that two pronouns, you and it , are particularly hardworking: they can\nfunction as either subject or object pronouns.\nTest yourself 21.2\nUnderline the object pronouns in each of the sentences below.There may be more than one pronoun\nin a sentence.\nSample: Churchill called them to a meeting.\nGetting started\n(answers on p. 99)\n1. Mary heard him.\n2. The detective watched us\nsuspiciously.\n3. Stop bothering me!\n4. Steven sat down between him and her.\n5. Do the students understand it?\nMore practice\n(answers on the website)\n6. My friends have never heard of them.\n7. Barry gave her a present.\n8. Harry' s cousin lives near them.\n9. Most competitors were envious of him.\n10. A strange man is standing next to you\nand me.\nTest yourself 21.3\nDecide if each pronoun below is a subject or object pronoun.\nSample: we subject</p>\n<p>Getting started (answers on p. 99)\n1. them ...................\n2. he ...................\n3. I ...................\n4. us ...................\n5. her ...................\nMore practice (answers on the website)\n6. they ...................\n7. she ...................\n8. me ...................\n9. him ...................\n10. we ...................\nTest yourself 21.4\nUnderline the pronouns in each of the sentences below. Identify each either as a subject pronoun or\nan object pronoun. Keep in mind that the pronouns\nyou\nand\nit\ncan be either subject or object pro-\nnouns, depending on how they are being used.There may be more than one pronoun in a sentence.\nSample: Yo ureallydidit right. (subject; object)\nGetting started\n(answers on p. 99)\n1. The clerk had been sent to work with him.\n2. The research required them to work closely\ntogether.\n3. It is brighter than that other lamp.\n4. If you know the answer, please tell me.\n5. We will be moving near you.\nMore practice\n(answers on the website)\n6. They were hiding in the bushes.\n7. I am g iving it to you.\n8. He went too far this time.\n9. Theresa' s parents worried\nabout her.\n10. She hears from him often.\nY ou know that when you're talking about yourself, you use the pronouns\nI\nor\nme\n,a n d\nwhen you're talking about a group of people, you use the pronouns\nthey\nor\nthem\n.T h a t i s ,\nwe choose different pronouns depending on the person or thing the pronouns refer to.\nPronouns that vary in this way are called\npersonal pronouns\n.S u b j e c ta n do b j e c tp r o -\nnouns are types of personal pronouns; see\nLessons 22\nand 24 for two other kinds.\nPersonal pronouns that refer to the speaker in a conversation, like\nI\nand\nwe\n,a r ec a l l e d\nfirst person pronouns\n.Those that refer to the listener, like\nyou\n,a r ec a l l e d\nsecond person\npronouns\n. And those that refer to anyone or anything else, like\nhe\nor\nthey\n,a r ec a l l e d\nthird person pronouns\n.\nIn addition, pronouns that refer to only one person or thing, like\nI\nand\nhe\n,a r ec a l l e d\nsin-\ngular pronouns\n; those that refer to more than one person or thing, like\nwe\nand\nthey\n,a r e\ncalled\nplural pronouns\n.\nHere' s a complete breakdown of the subject and object pronouns:\nSubject Object\nFirst person singular I me\nSecond person singular you you\nThird person singular he, she, it him, her, it\nFirst person plural we us\nSecond person plural you you\nThird person plural they them\nUNIT 7: PRONOUNS\n84</p>"
   },
   {
    "n": 22,
    "title": "Reflexive pronouns",
    "html": "<p>Do the following sentences seem strange to you?\n1. John Smith sawJohn Smith in the mirror.\n2. My friends were talking among my friends.\n3 . S a m ' so n l yc a tw a sg roomingS a m ' so n l yc a t .\nT h e s es entencesa r es t r a n g eb e c a u s et h e y ' r em issing\nreflexive pronouns\n,t h o s ep r o -\nnouns that end in\n-self\nor\n-selves\n. As you can see from the sentences below, we use reflexive\npronouns whenever we refer to the same person or thing more than once in the same\nbasic sentence. Sentences 1^3 should be stated like this:\n4. John Smith saw himself in the mirror.\n5. My best friends were talking among themselves.\n6 . S a m ' so n l yc a tw a sg roomingherself.\nHere are some more examples, first without and then with a reflexive pronoun.\n7a. The boy washed the boy.\n7b. The boy washed himself.\n8a. Tom and Harry watchedTom and Harry on the video.\n8b. Tom and Harry watched themselves on the video.\n9a. Y ou can see you doing that.\n9b. Y ou can see yourself doing that.\nNotice that if we hear, for example,\nT h eb o yw a s h e dt h eb o y\n,w i t h o u tar eflexive\npronoun, then we assume that someone' s talking about two different boys. Similarly,\nthe sentence\nHe shaved him\nsuggests that the person (a male) who did the shaving\nand the person (a male) who received the shaving are not the same. The reflexive\npronoun lets the listener know that the speaker is referring to the same person or\nthing.\nQuick tip\n22.1\nlists the reflexive pronouns. They're easy to identify because they all end\nin\n-self\nor\n-selves\n(\nQuick tip\n22.2\n).\nQuick tip 22.1\nThe reflexive pronouns are: myself , yourself , himself , herself , itself , ourselves , yourselves,\nthemselves\n.\nQuick tip 22.2\nAll the reflexive pronouns end in -self ( singular )o r -selves ( plural ).\nTest yourself 22.1\nUnderline the reflexive pronouns in each of the sentences below.\nSample: That computer is so smart it can repair itself.\n85</p>\n<p>Getting started (answers on p. 99)\n1. John was a person who always pushed\nhimself to the limit.\n2. W atch yourself !\n3. W e prided ourselves on being silly.\n4. The directors of that company can blame no\none but themselves.\n5. I see myself as a successful writer someday.\n More practice (answers on the website)\n6. All of you should be ashamed of yourselves!\n7. Rosanna treated herself to a lavish vacation.\n8. I wish my car started itself in the dead of\nwinter.\n9. W ould everyone in the room please identify\nhimself ?\n10. Y ou should take better care of yourself !\nTest yourself 22.2\nUnderline the reflexive, subject, and object pronouns in each of the sentences below. Label each as\nreflexive, subject, or object. Some sentences will have more than one pronoun.\nSample: Greta' s perseverance benefitted both herself and the rest of the staff. (reflexive)\nGetting started\n(answers on p. 99)\n1. I have found that I can do it when the room is\nquiet.\n2. He noticed that she often immersed herself in\nab o o k .\n3. We have known her for years.\n4. Some guests told us that they forced\nthemselvest og e tu pa t6A.M.\n5. Y ou don't need to explain yourself to me.\nMore practice\n(answers on the website)\n6. Mr. Ballantine said that he appreciated us.\n7. If you want to leave, please let me know.\n8. Who among us wants to commit himself to\nanother year of service?\n9. Jay's wife promised herself never to do it\nagain.\n 10. Reflexive pronouns are easy to identify,\ndon't you agree?\nUNIT 7: PRONOUNS\n86</p>"
   },
   {
    "n": 23,
    "title": "Demonstrative pronouns",
    "html": "<p>Do you remember the underlined words in the sentences below?\n1. Are you sure you want this?\n2. W e agreed about that.\n3. I'm not sure I like these.\n4. Those look delicious.\nIn\nLesson 13\nwe talked about the use of demonstratives before a noun, for example:\nthis dog\n,\nthat idea\n,\nthese songs\n,\nthose curtains\n. That is, we talked about demonstratives\nused as determiners. But demonstratives can also be used without a noun following\nthem, as you can see from sentences 1^4. In these cases, because the demonstrative\nreplaces a noun (or noun phrase), it is called a\ndemonstrative pronoun\n.F o re x a m p l e ,\nin sentence 1, the demonstrative pronoun\nthis\ncan be replacing a noun such as\nspaghetti\nor\nmagazines\n.\nIt' s easy to remember demonstrative prono\nu n s ,b e c a u s et h e r ea r eo n l yf o u ro ft h e m ;\nthey are listed in\nQuick tip\n23.1\n.\nQuick tip 23.1\nThere are only four demonstrative pronouns: this , that , these , and those .\nIt might help you remember the word' 'demonstrative' ' if you think of these words as ' 'dem-\nonstrating' 'something, in a way, pointing to something.\nTest yourself 23.1\nUnderlinet h ed emonstrativep r o n o u ni ne a c ho ft h es entencesb e l o w .\nSample: Lenny wasn't sure he really wanted those.\nGetting started\n(answers on p. 100)\n1. That wasn't really Hannah's job, but I\nappreciate her doing it anyway.\n2. Natasha really likes these.\n3. He wasn't good at riddles but managed to\nsolve those.\n4. I never thought it would come to this.\n5. These are very difficult times.\nMore practice\n(answers on the website)\n6. Those were the good old days.\n7. Sean thought he would never\nsee that.\n8. This is absolutely unacceptable.\n9. Mrs.W allace would rather buy these.\n10. That is the funniest thing I've ever seen.\nTest yourself 23.2\nDecide if each pronoun below is a subject, object, reflexive, or demonstrative pronoun.\nSample: she subject\n87</p>\n<p>Getting started (answers on p. 100)\n1. yourselves ......................................\n2. those ......................................\n3. me ......................................\n4. we ......................................\n5. itself ......................................\nMore practice (answers on the website)\n6. them ......................................\n7. that ......................................\n8. us ......................................\n9. herself ......................................\n10. these ......................................\nTest yourself 23.3\nUnderline the pronouns in each of the sentences below. Label each as demonstrative, subject,\nobject, or reflexive. Some sentences will have more than one pronoun.\nSample: Did you spill that on yourself ? (subject; demonstrative; reflexive)\nGetting started\n(answers on p. 100)\n1. We were angry at ourselves. .....................................................................................................................................................................\n2. He asked us to explain this. ......................................................................................................................................................................\n3. It works just as well at home. ..................................................................................................................................................................\n4. They sent these to us. .....................................................................................................................................................................................\n5. The baseball player dusted himself off. ..........................................................................................................................................\nMore practice (answers on the website)\n6. Y ou should do this for yourself. ..........................................................................................................................................................\n7. This reminds me of why I should respect myself. ................................................................................................................\n8. That is the way they should behave themselves. .................................................................................................................\n9. W e excused ourselves right after dinner. ...................................................................................................................................\n10. It could bother them. ..................................................................................................................................................................................\nUNIT 7: PRONOUNS\n88</p>"
   },
   {
    "n": 24,
    "title": "Possessive pronouns",
    "html": "<p>Y ou won't be surprised to learn that possessive pronouns are pronouns that indicate pos-\nsession, or ownership. Some possessive pronouns are underlined here:\n1. Mr. Smith explained his ideas to the audience.\n2. I wish I could accept their invitation.\n3. That suitcase isn't mine.\n4. Y ours was the best essay in the class.\nIf you look closely, you'll notice that the possessive pronouns in sentences 1^4 fall into\ntwo groups.The ones in sentences 1and 2 are followed by a noun:\nhis ideas\n,\ntheir invitation\n.\nThe ones in sentences 3 and 4 are not followed by a noun; rather, they stand on their own\nin the sentence.We'll talk about each kind separately.\nThe possessive pronouns in sentences 1 and 2 may look familiar to you. That' s because\nthey were described in\nLesson 14\n, as part of our discussion of determiners. Like articles\n(\na\n,\nan\n,\nthe\n), possessive pronouns which function as determiners can occur in the slot\nhouse (for example, his house, our house , your house ). Since they function as deter-\nminers, you can understand why they are followed by a noun. In\nQuick tip\n14.1\nwe called\nthese determiner possessive pronouns and provided the full list. W e repeat them here:\nmy, your , his, her , its, our , their\n.\nTest yourself 24.1\nUnderline the determiner possessive pronoun in each of the sentences below. Remember: deter-\nminer possessive pronouns are followed by nouns.\nSample: Many of our ideas back then were equally absurd.\nGetting started\n(answers on p. 100)\n1. The woman hid her feelings well.\n2. He was younger than his wife.\n3. Mr. and Mrs. Bradford adored\ntheir son.\n4. Thomas and Natalie were the best students\nin my class.\n5. Y our eyes look very tired.\nMore practice\n(answers on the website)\n6. The salesman' s car does not show its age.\n7. We should just pack up our things and get out\nof here.\n8. I took a look at your face and I knew\nimmediately that you were honest.\n9. My daughter is very good about brushing\nher teeth regularly.\n10. Gamblers are secretive about their losses.\nNow on to the possessive pronouns in sentences 3 and 4, the kind that can stand alone in a\nsentence. Here are some more examples:\n5. The Greens' tent came loose in the storm but ours remained secure.\n6. Yo urswasthefirstcardInoticed .\n7. The scientist hurried from that laboratory to mine.\n89</p>\n<p>These possessive pronouns replace a whole noun (actually, a whole noun phrase, but we\nhaven't gotten to that yet; see\nLesson 28\n). And since the word\nnominal\nmeans ''noun-like, ''\nthese pronouns are sometimes called\npossessive pronouns\nwith nominal function\n.W e\nwill simply call them\nnominal possessive pronouns\n.\nQuick tip 24.1\nNominal possessive pronouns replace a whole noun (or noun phrase). For example, instead\nof saying\nThat book is Sally's book we can simply say, That book is hers . The nominal\npossessive pronouns\nare:\nmine\n,\nyours\n,\nhis</p>\n<p>,\nhers\n,\nits\n,\nours\n,\ntheirs\n.\nNotice that the pronouns his and its can function either as determiner possessive pro-\nnouns (see\nQuick tip\n14.1\n) or as nominal possessive pronouns (see\nQuick tip\n24.1\n).\nTest yourself 24.2\nUnderline the nominal possessive pronoun in each of the sentences below.\nSample: Pete and Cathy are convinced the idea was theirs.\nGetting started\n(answers on p. 100)\n1. The rattlesnake is his.\n2. The mother needs her nourishment and the\nbaby needs hers also.\n3. Y ours is the room on the left.\n4. The computer on the table\nis mine.\n5. Ours is the next house on the block.\nMore practice\n(answers on the website)\n6. Theirs will probably be the best dog in the\nshow.\n7. Hiring the band is not Dave' s responsibility ^\nit is yours.\n8. Whatever the neighbors want to haul away is\ntheirs for the taking.\n9. Most people' s experience is probably\nsimilar to hers.\n10. His is not the only opinion that matters.\nTest yourself 24.3\nDecide if each possessive pronoun below is a determiner or a nominal possessive pronoun.\nSample: yours nominal\nTo enhance your understanding\nDon't confuse possessive pronouns with contracted pronouns:\n8a. It's (= it is) a wonderful day. (contracted pronoun)\n8b. Its positives outweigh its negatives. (determiner possessive pronoun)\n9a. You're (= you are) absolutely right. (contracted pronoun)\n9b. Your shoelaces are untied. (determiner possessive pronoun)\n10a. They're (= they are) leaving. (contracted pronoun)\n10b. Their leaving early was unexpected. (determiner possessive pronoun)\nAs you can see, the contracted pronoun is always written with an apostrophe.\nUNIT 7: PRONOUNS\n90</p>\n<p>Getting started (answers on p. 100)\n1. my ......................................\n2. theirs ......................................\n3. mine ......................................\n4. your ......................................\n5. her ......................................\nMore practice (answers on the website)\n6. our ......................................\n7. their ......................................\n8. ours ......................................\n9. hers ......................................\n10. his .......... …</p>\n<p>Test yourself 24.6 – Grand finale\nUnderline the pronouns in each of the sentences be low. Label each as determiner possessive, nomi-\nnal possessive, subject, object, demonstrative, or reflexive. Some sentences will have more than\none pronoun.\nSample: They were convinced that she would do a great job for them. (subject; subject; object)\nGetting started\n(answers on p. 101)\n1. Their employees were working during lunch. ....................................................................................................................\n2. He asked us for the answer. ........ ..........................................................................................................................................................\n3. It made a huge difference to her and to her friends. ........................................................................................................\n4. She looked at herself in the rearview mirror of my car. ..............................................................................................\n5. Some guy introduced himself and gave me his business card. ..............................................................................\nMore practice (answers on the website)\n6. Y ou shouldn't compare your accomplishments to theirs. ........................... ................................................................\n7. The candidates presented themselves and their positions to us. .........................................................................\n8. Are all these hers or mine? ..................................................................................................................................................................\n9. Y ou should thank him for bringing that to your attention. ........................... .............................................................\n10. W e saved this for last because of its complexity and because the opportunity\npresented itself to include all pronoun types in it ^ but the final judgment is yours!\n.........................................................................................................................................................................................................................................\nUNIT 7: PRONOUNS\n92</p>"
   },
   {
    "n": 25,
    "title": "Interrogative pronouns",
    "html": "<p>What do you notice about the underlined words in the following sentences?\n1. Who went first?\n2. What was the man carrying?\n3. W h i c hd i dy o ub u y?\nY ou undoubtedly recognize them as question words.They are called\ninterrogative pro-\nnouns\n;w el i s tt h e mi n\nQuick tip\n25.1\n.\nQuick tip 25.1\nInterrogative pronouns are question words. The interrogative pronouns are: how, what ,\nwhen, where, which</p>\n<p>,\nwho\n,\nwhom\n,\nwhose</p>\n<p>,\nwhy\n. Look for the question mark to help find\nthem.\nY ou may be wondering why these are considered to be pronouns. Like other pronouns,\ninterrogative pronouns represent something else, often a noun. They represent missing\ninformation, information that's in the answer to a question:\n4a. Who went first?\n4b. Harry went first.\n5a. What was the man carrying?\n5b. The man was carrying a camera.\n6a. W h i c hd i dy o ub u y?\n6b. I bought the red car.\nSince, when we ask a question, we don't yet know what the answer will be, we have no\nchoice but to use a question word, or interrogative pronoun, to represent the information\nwe are asking about.\nTest yourself 25.1\nUnderline the interrogative pronoun in each of the sentences below.\nSample: Why is his approach so exciting?\nGetting started\n(answers on p. 101)\n1. To whom did you send the package?\n2. Whose is it?\n3. What can the producer do about it?\n4. How can I believe you are telling\nthe truth?\n5. Where have you been?\nTo enhance your understanding\nDon't confuse the following – they sound the same:\n7a. Who's (= who is) there?\n7b. Whose party are we going to?\n93</p>\n<p>More practice (answers on the website)\n6. When did you come home last night?\n7 . W h yi si ts od a r ki nt h i sr o o m ?\n8. Which do you prefer?\n9. Who gave you permission to open that box?\n10. From whom did you get this call?\nTest yourself 25.2\nDecide if each pronoun below is an interrogative pronoun ( who , what ), demonstrative pronoun\n(\nthis\n,\nthese\n,e t c . ) ,o b j e c tp r o n o u n(\nme\n,\nus\n,e t c . ) ,o rr eflexivep r o n o u n(\nmyself\n,\nourselves\n,e t c . ) .\nSample: myself reflexive\nGetting started\n(answers on p. 101)\n1. herself ......................................\n2. which ......................................\n3. who ......................................\n4. those ......................................\n5. him ......................................\nMore practice (answers on the website)\n6. itself ......................................\n7. how ......................................\n8. what ......................................\n9. us ......................................\n10. whom ......................................\nTest yourself 25.3\nUnderline the interrogative, possessive, and subject pronouns in each of the sentences below. Label\neach as interrogative (\nwhat\n,\nwho\n, etc.), determiner possessive (\nmy\n,\nour\n, etc.), nominal possessive\n(\nmine\n,\nours\n,e t c . ) ,o rs u b j e c t(\nI\n,\nwe\n, etc.). Some sentences will have more than one pronoun.\n(Remember that interrogative pronouns are used in questions, so look for that question mark to\nhelp you.)\nSample: What are you looking for? (interrogative; subject)\nGetting started\n(answers on p. 101)\n1. Where did your friend hide the ball? ........ ....................................................................................................................................\n2. Which does Jack like: coffee or tea? ............................................................................................................................... ...............\n3. Ours was the only entry in the contest. ............................................................................................................................... ......\n4. We kept our promise. .................................................................................................................................................................................\n5. Y our business is yours alone. ........ .....................................................................................................................................................\nMore practice (answers on the website)\n6. Why didn't you wash your car? .........................................................................................................................................................\n7 . H et h o u g h tt h a tt h eb r o w nc o a tw a sh i s ................................................................................................................................ ....\n8. The bicycle is mine, not hers. .............................................................................................................................................................\n9. I mailed my package to Korea. ..........................................................................................................................................................\n10. When will he arrive? ............................................................................................................. …</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 26,
    "title": "Relative pronouns",
    "html": "<p>H e r ea r es o m es entencesw i t hi nterrogativep ronouns ,l i k et h eo n e sy o u ' v ea l r e a d ys e e ni n\nLesson 25\n.The interrogative pronouns are underlined.\n1. Who was laughing?\n2. Whose is this?\nNow look at the following sentences, which contain the same underlined words. How are\nthese sentences different from sentences 1and 2?\n3. I like the woman who lives next door.\n4. He' s the engineer whose life was disrupted by a messy divorce.\nY ou've probably noticed that, unlike sentences 1 and 2 above, sentences 3 and 4 are not\nquestions.The same pronouns are being used, but not to ask a question. Instead, these pro-\nnouns are used in sentences 3 and 4 to replace a noun that' s already mentioned earlier in\nthe sentence.When used this way, these pronouns are called\nrelative pronouns</p>\n<p>.They are\nlisted in\nQuick tip\n26.1\nQuick tip 26.1\nThe common relative pronouns are: that, which, who, whom, whose . They refer back to a\nnoun in the sentence.\nTest yourself 26.1\nUnderline the relative pronoun in each of the sentences below.\nSample: The prominent oil man who bought that house is not a generous man.\nGetting started\n(answers on p. 102)\n1. John' s is the essay that was the most\nwell-written.\n2. His wife was the woman whom he loved the\nmost.\n3. There is no one who can make me laugh more\nthan you.\n4. Danny bought a gift which appealed to him.\n5. Last week I met the man whose cousin\nmarried my friend.\nMore practice\n(answers on the website)\n6. In general, Sharon is nice to people whom\nshe meets.\n7. I will stand on the line which is shorter.\n8. The person who leaves last should turn the\nlights off.\n9 . S h es a wt h ej o u r n e yw h i c hs h eh a d\nundertaken stretch out before her.\n10. Anna leaves a good impression on\nemployers who interview her.\nLet' s look at sentences 3 and 4 more closely.\n3. I like the woman who lives next door.\n96</p>"
   }
  ],
  "tips": [
   {
    "code": "21.1",
    "text": "The subject pronouns are: I , you , he , she , it , we , they ."
   },
   {
    "code": "21.2",
    "text": "The object pronouns are: me, you , her , him , it , us , them . Y ou can see that two pronouns, you and it , are particularly hardworking: they can function as either subject or object pronouns."
   },
   {
    "code": "22.1",
    "text": "lists the reflexive pronouns. They're easy to identify because they all end in -self or -selves ("
   },
   {
    "code": "22.1",
    "text": "The reflexive pronouns are: myself , yourself , himself , herself , itself , ourselves , yourselves, themselves ."
   },
   {
    "code": "22.2",
    "text": "All the reflexive pronouns end in -self ( singular )o r -selves ( plural )."
   },
   {
    "code": "23.1",
    "text": "There are only four demonstrative pronouns: this , that , these , and those . It might help you remember the word' 'demonstrative' ' if you think of these words as ' 'dem- onstrating' 'something, in a way, pointing to something."
   },
   {
    "code": "14.1",
    "text": "we called these determiner possessive pronouns and provided the full list. W e repeat them here: my, your , his, her , its, our , their ."
   },
   {
    "code": "24.1",
    "text": "Nominal possessive pronouns replace a whole noun (or noun phrase). For example, instead of saying That book is Sally's book we can simply say, That book is hers . The nominal possessive pronouns are: mine , yours , his , hers , its , ours , theirs . Notice that the pronouns his and its can function either as determiner possessive pro- nouns (see"
   },
   {
    "code": "14.1",
    "text": ") or as nominal possessive pronouns (see"
   },
   {
    "code": "25.1",
    "text": "Interrogative pronouns are question words. The interrogative pronouns are: how, what , when, where, which , who , whom , whose , why . Look for the question mark to help find them. Y ou may be wondering why these are considered to be pronouns. Like other pronouns, interrogative pronouns represent something else, often a noun. They represent missing information, information that's in the answer to a question: 4a. Who went first? 4b. Harry went first. 5a. What was the man carrying? 5b. The man was carrying a camera. 6a. W h i c hd i dy o ub u y? 6b. I bought the red car. Since, when we ask a question, we don't yet know what the answer will be,…"
   },
   {
    "code": "26.1",
    "text": "The common relative pronouns are: that, which, who, whom, whose . They refer back to a noun in the sentence."
   }
  ],
  "practice": [
   {
    "code": "19.2",
    "instruction": "1. Even though he calmed down, he did not go back to the table immediately. 2. While I enjoy being in the yard, I hate mowing the lawn. 3. Unless there' s a heavy downpour, I'm going on that trip. 4. Why anyone would swim in ice cold water, I just don't understand. 5. Whether you are right or wrong, I will support you.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "19.3",
    "instruction": "1. Sally spent a lot of time with the babysitter, because her mother had to work. 2. Since you're always busy, I decided to go to the movies without you. 3. After he read the article, he decided not to argue any further. 4. We will move to Seattle, u n l e s sy o uc a nc onvincem en o tt o . 5. As if speaking Igbo wasn't enough, this professor speaksY oruba as well.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "19.4",
    "instruction": "1. I'm the owner and editor of the local newspaper. (C) 2. Before Megan helped him, George would have to prove his loyalty. (S) 3. There' s more than one career that he' s interested in. (S) 4. They painted her house while she was at work. (S) 5. I arrived early but I still wasn't the first in line. (C)",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "20.1",
    "instruction": "1. Neither you nor your friends are likely to win that ra¥e. 2. Both Laurette and Denise have been working towards that goal. 3. If my neighbor decides to plant bushes there, then I'll do some landscaping on my side of the fence as well. 4. Neither Don' s commentsnor his actions surprised me. 5. This athlete is likely to win either a gold or a silver medal.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "20.2",
    "instruction": "1. They were pleased with the plan and happy about the decision. (C) 2. I'll see you when you get here. (S) 3. They're worried because she hasn't been feeling well lately. (S) 4. Our encounter was short but sweet. (C) 5. If you tell the truth, then I won't get upset. (CORR) FOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "21.1",
    "instruction": "Underline the subject pronouns in the sentences below.",
    "sample": "Sample: W e wandered around town, looking for a place to have lunch.",
    "items": [
     {
      "n": 1,
      "text": "I crossed the piazza and headed towards the church.",
      "answer": "I crossed the piazza and headed towards the church"
     },
     {
      "n": 2,
      "text": "Unfortunately, it was closed.",
      "answer": "Unfortunately, it was closed"
     },
     {
      "n": 3,
      "text": "They simply stood there, waiting for me.",
      "answer": "They simply stood there, waiting for me"
     },
     {
      "n": 4,
      "text": "Y esterday, she went shopping.",
      "answer": "Y esterday, she went shopping"
     },
     {
      "n": 5,
      "text": "W e should get together sometime. 82",
      "answer": "W e should get together sometime"
     }
    ],
    "answers": {
     "1": "I crossed the piazza and headed towards the church",
     "2": "Unfortunately, it was closed",
     "3": "They simply stood there, waiting for me",
     "4": "Y esterday, she went shopping",
     "5": "W e should get together sometime"
    }
   },
   {
    "code": "21.2",
    "instruction": "Underline the object pronouns in each of the sentences below.There may be more than one pronoun in a sentence.",
    "sample": "Sample: Churchill called them to a meeting.",
    "items": [
     {
      "n": 1,
      "text": "Mary heard him.",
      "answer": "Mary heard him"
     },
     {
      "n": 2,
      "text": "The detective watched us suspiciously.",
      "answer": "The detectives watched us suspiciously"
     },
     {
      "n": 3,
      "text": "Stop bothering me!",
      "answer": "Stop bothering me!"
     },
     {
      "n": 4,
      "text": "Steven sat down between him and her.",
      "answer": "Steven sat down between him and her"
     },
     {
      "n": 5,
      "text": "Do the students understand it?",
      "answer": "Do the students understand it?"
     }
    ],
    "answers": {
     "1": "Mary heard him",
     "2": "The detectives watched us suspiciously",
     "3": "Stop bothering me!",
     "4": "Steven sat down between him and her",
     "5": "Do the students understand it?"
    }
   },
   {
    "code": "21.3",
    "instruction": "Decide if each pronoun below is a subject or object pronoun.",
    "sample": "Sample: we subject",
    "items": [],
    "answers": {
     "1": "them object",
     "2": "he subject",
     "3": "I subject",
     "4": "us object",
     "5": "her object"
    }
   },
   {
    "code": "21.4",
    "instruction": "Underline the pronouns in each of the sentences below. Identify each either as a subject pronoun or an object pronoun. Keep in mind that the pronouns you and it can be either subject or object pro- nouns, depending on how they are being used.There may be more than one pronoun in a sentence.",
    "sample": "Sample: Yo ureallydidit right. (subject; object)",
    "items": [
     {
      "n": 1,
      "text": "The clerk had been sent to work with him.",
      "answer": "The clerk had been sent to work with him. (object)"
     },
     {
      "n": 2,
      "text": "The research required them to work closely together.",
      "answer": "The research required them to work closely together. (object)"
     },
     {
      "n": 3,
      "text": "It is brighter than that other lamp.",
      "answer": "It is brighter than that other lamp. (subject)"
     },
     {
      "n": 4,
      "text": "If you know the answer, please tell me.",
      "answer": "If you know the answer, please tell me. (subject; object)"
     },
     {
      "n": 5,
      "text": "We will be moving near you.",
      "answer": "We willbemo v i ng n e a ryou. (subject; object)"
     }
    ],
    "answers": {
     "1": "The clerk had been sent to work with him. (object)",
     "2": "The research required them to work closely together. (object)",
     "3": "It is brighter than that other lamp. (subject)",
     "4": "If you know the answer, please tell me. (subject; object)",
     "5": "We willbemo v i ng n e a ryou. (subject; object)"
    }
   },
   {
    "code": "22.1",
    "instruction": "Underline the reflexive pronouns in each of the sentences below.",
    "sample": "Sample: That computer is so smart it can repair itself. 85",
    "items": [
     {
      "n": 1,
      "text": "John was a person who always pushed himself to the limit.",
      "answer": "John was a person who always pushed himself to the limit"
     },
     {
      "n": 2,
      "text": "W atch yourself !",
      "answer": "W atchyourself !"
     },
     {
      "n": 3,
      "text": "W e prided ourselves on being silly.",
      "answer": "We prided ourselves on being sillly"
     },
     {
      "n": 4,
      "text": "The directors of that company can blame no one but themselves.",
      "answer": "The directors of that company can blame no one but themselves"
     },
     {
      "n": 5,
      "text": "I see myself as a successful writer someday.",
      "answer": "I see myself as a successful writer someday"
     }
    ],
    "answers": {
     "1": "John was a person who always pushed himself to the limit",
     "2": "W atchyourself !",
     "3": "We prided ourselves on being sillly",
     "4": "The directors of that company can blame no one but themselves",
     "5": "I see myself as a successful writer someday"
    }
   },
   {
    "code": "22.2",
    "instruction": "Underline the reflexive, subject, and object pronouns in each of the sentences below. Label each as reflexive, subject, or object. Some sentences will have more than one pronoun.",
    "sample": "Sample: Greta' s perseverance benefitted both herself and the rest of the staff. (reflexive)",
    "items": [
     {
      "n": 1,
      "text": "I have found that I can do it when the room is quiet.",
      "answer": "I have found that Ic a nd oit when the room is quiet. (subject; subject; object) 99"
     },
     {
      "n": 2,
      "text": "He noticed that she often immersed herself in ab o o k .",
      "answer": "He noticed that she often immersed herself in a book. (subject; subject; reflexive)"
     },
     {
      "n": 3,
      "text": "We have known her for years.",
      "answer": "We h ave k no w nher for years. (subject; object)"
     },
     {
      "n": 4,
      "text": "Some guests told us that they forced themselvest og e tu pa t6A.M.",
      "answer": "Some guests told us that they forced themselves to get up at 6 A.M. (object; subject; reflexive)"
     },
     {
      "n": 5,
      "text": "Y ou don't need to explain yourself to me.",
      "answer": "You don’t need to explainyourself to me. (subject; reflexive; object)"
     }
    ],
    "answers": {
     "1": "I have found that Ic a nd oit when the room is quiet. (subject; subject; object) 99",
     "2": "He noticed that she often immersed herself in a book. (subject; subject; reflexive)",
     "3": "We h ave k no w nher for years. (subject; object)",
     "4": "Some guests told us that they forced themselves to get up at 6 A.M. (object; subject; reflexive)",
     "5": "You don’t need to explainyourself to me. (subject; reflexive; object)"
    }
   },
   {
    "code": "23.1",
    "instruction": "Underlinet h ed emonstrativep r o n o u ni ne a c ho ft h es entencesb e l o w .",
    "sample": "Sample: Lenny wasn't sure he really wanted those.",
    "items": [
     {
      "n": 1,
      "text": "That wasn't really Hannah's job, but I appreciate her doing it anyway.",
      "answer": "That wasn’t really Hannah’s job, but I appreciate her doing it anyway"
     },
     {
      "n": 2,
      "text": "Natasha really likes these.",
      "answer": "Natasha really likes these"
     },
     {
      "n": 3,
      "text": "He wasn't good at riddles but managed to solve those.",
      "answer": "He wasn’t good at riddles but managed to solve those"
     },
     {
      "n": 4,
      "text": "I never thought it would come to this.",
      "answer": "I never thought it would come to this"
     },
     {
      "n": 5,
      "text": "These are very difficult times.",
      "answer": "These are very difficult times"
     }
    ],
    "answers": {
     "1": "That wasn’t really Hannah’s job, but I appreciate her doing it anyway",
     "2": "Natasha really likes these",
     "3": "He wasn’t good at riddles but managed to solve those",
     "4": "I never thought it would come to this",
     "5": "These are very difficult times"
    }
   },
   {
    "code": "23.2",
    "instruction": "Decide if each pronoun below is a subject, object, reflexive, or demonstrative pronoun.",
    "sample": "Sample: she subject 87",
    "items": [
     {
      "n": 1,
      "text": "yourselves",
      "answer": "yourselves reflexive"
     },
     {
      "n": 2,
      "text": "those",
      "answer": "those demonstrative"
     },
     {
      "n": 3,
      "text": "me",
      "answer": "me object"
     },
     {
      "n": 4,
      "text": "we",
      "answer": "we subject"
     },
     {
      "n": 5,
      "text": "itself",
      "answer": "itself reflexive"
     }
    ],
    "answers": {
     "1": "yourselves reflexive",
     "2": "those demonstrative",
     "3": "me object",
     "4": "we subject",
     "5": "itself reflexive"
    }
   },
   {
    "code": "23.3",
    "instruction": "Underline the pronouns in each of the sentences below. Label each as demonstrative, subject, object, or reflexive. Some sentences will have more than one pronoun.",
    "sample": "Sample: Did you spill that on yourself ? (subject; demonstrative; reflexive)",
    "items": [
     {
      "n": 1,
      "text": "We were angry at ourselves.",
      "answer": "We we r e a ng r y atourselves. (subject; reflexive)"
     },
     {
      "n": 2,
      "text": "He asked us to explain this.",
      "answer": "He asked us to explain this. (subject; object; demonstrative)"
     },
     {
      "n": 3,
      "text": "It works just as well at home.",
      "answer": "It works just as well at home. (subject)"
     },
     {
      "n": 4,
      "text": "They sent these to us.",
      "answer": "They sent these to us. (subject; demonstrative; object)"
     },
     {
      "n": 5,
      "text": "The baseball player dusted himself off.",
      "answer": "The baseball player dusted himself off. (reflexive)"
     }
    ],
    "answers": {
     "1": "We we r e a ng r y atourselves. (subject; reflexive)",
     "2": "He asked us to explain this. (subject; object; demonstrative)",
     "3": "It works just as well at home. (subject)",
     "4": "They sent these to us. (subject; demonstrative; object)",
     "5": "The baseball player dusted himself off. (reflexive)"
    }
   },
   {
    "code": "24.1",
    "instruction": "Underline the determiner possessive pronoun in each of the sentences below. Remember: deter- miner possessive pronouns are followed by nouns.",
    "sample": "Sample: Many of our ideas back then were equally absurd.",
    "items": [
     {
      "n": 1,
      "text": "The woman hid her feelings well.",
      "answer": "The woman hid her feelings well"
     },
     {
      "n": 2,
      "text": "He was younger than his wife.",
      "answer": "He was younger than his wife"
     },
     {
      "n": 3,
      "text": "Mr. and Mrs. Bradford adored their son.",
      "answer": "Mr. and Mrs. Bradford adored their son"
     },
     {
      "n": 4,
      "text": "Thomas and Natalie were the best students in my class.",
      "answer": "Thomas and Natalie were the best students in my class"
     },
     {
      "n": 5,
      "text": "Y our eyes look very tired.",
      "answer": "Your eyes look very tired"
     }
    ],
    "answers": {
     "1": "The woman hid her feelings well",
     "2": "He was younger than his wife",
     "3": "Mr. and Mrs. Bradford adored their son",
     "4": "Thomas and Natalie were the best students in my class",
     "5": "Your eyes look very tired"
    }
   },
   {
    "code": "24.2",
    "instruction": "Underline the nominal possessive pronoun in each of the sentences below.",
    "sample": "Sample: Pete and Cathy are convinced the idea was theirs.",
    "items": [
     {
      "n": 1,
      "text": "The rattlesnake is his.",
      "answer": "The rattlesnake is his"
     },
     {
      "n": 2,
      "text": "The mother needs her nourishment and the baby needs hers also.",
      "answer": "The mother needs her nourishment and the baby needs hers also"
     },
     {
      "n": 3,
      "text": "Y ours is the room on the left.",
      "answer": "Yours is the room on the left"
     },
     {
      "n": 4,
      "text": "The computer on the table is mine.",
      "answer": "The computer on the table is mine"
     },
     {
      "n": 5,
      "text": "Ours is the next house on the block.",
      "answer": "Ours is the next house on the block"
     }
    ],
    "answers": {
     "1": "The rattlesnake is his",
     "2": "The mother needs her nourishment and the baby needs hers also",
     "3": "Yours is the room on the left",
     "4": "The computer on the table is mine",
     "5": "Ours is the next house on the block"
    }
   },
   {
    "code": "24.3",
    "instruction": "Decide if each possessive pronoun below is a determiner or a nominal possessive pronoun.",
    "sample": "Sample: yours nominal",
    "items": [],
    "answers": {
     "1": "my determiner",
     "2": "theirs nominal",
     "3": "mine nominal",
     "4": "your determiner",
     "5": "her determiner UNIT 7: PRONOUNS 100"
    }
   },
   {
    "code": "24.4",
    "instruction": "Underline the possessive pronoun in each of the sentences below.Then indicate if it functions as a determiner or a nominal possessive pronoun.",
    "sample": "Sample: Jack' s trip was good, but not nearly as exciting as theirs. (determiner)",
    "items": [
     {
      "n": 1,
      "text": "Listening to music might interfere with your ability to concentrate.",
      "answer": "Listening to music might interfere with your ability to concentrate. (determiner)"
     },
     {
      "n": 2,
      "text": "Some of the CDs are ours.  3 . T h ep risonerw a so r d e r e dt oh a n do v e rh i st h i n g s .",
      "answer": "Some of those CDs are ours. (nominal) 3 . T h ep risonerw a so rderedt oh a n do v e rhis things. (determiner)"
     },
     {
      "n": 4,
      "text": "In my opinion, you should apologize.",
      "answer": "In my opinion, you should apologize. (determiner)"
     },
     {
      "n": 5,
      "text": "Hers is the only dissenting voice in the room.",
      "answer": "Hers is the only dissenting voice in the room. (nominal)"
     }
    ],
    "answers": {
     "1": "Listening to music might interfere with your ability to concentrate. (determiner)",
     "2": "Some of those CDs are ours. (nominal) 3 . T h ep risonerw a so rderedt oh a n do v e rhis things. (determiner)",
     "4": "In my opinion, you should apologize. (determiner)",
     "5": "Hers is the only dissenting voice in the room. (nominal)"
    }
   },
   {
    "code": "24.5",
    "instruction": "Decide if each pronoun below is a determiner possessive pronoun ( my , our , etc.), nominal possessive pronoun ( mine , ours ,e t c . ) ,s u b j e c tp r o n o u n( I , we ,e t c . ) ,o b j e c tp r o n o u n( me , us ,e t c . ) ,r eflexivep r o - noun ( myself , ourselves , etc.), or demonstrative pronoun ( this , these ,e t c . ) .",
    "sample": "Sample: that demonstrative",
    "items": [
     {
      "n": 1,
      "text": "their",
      "answer": "their determiner possessive"
     },
     {
      "n": 2,
      "text": "them",
      "answer": "them object"
     },
     {
      "n": 3,
      "text": "yourselves",
      "answer": "yourselves reflexive"
     },
     {
      "n": 4,
      "text": "we",
      "answer": "we subject"
     },
     {
      "n": 5,
      "text": "hers",
      "answer": "hers nominal possessive"
     }
    ],
    "answers": {
     "1": "their determiner possessive",
     "2": "them object",
     "3": "yourselves reflexive",
     "4": "we subject",
     "5": "hers nominal possessive"
    }
   },
   {
    "code": "25.1",
    "instruction": "Underline the interrogative pronoun in each of the sentences below.",
    "sample": "Sample: Why is his approach so exciting?",
    "items": [
     {
      "n": 1,
      "text": "To whom did you send the package?",
      "answer": "To whom did you send the package?"
     },
     {
      "n": 2,
      "text": "Whose is it?",
      "answer": "Whose is it?"
     },
     {
      "n": 3,
      "text": "What can the producer do about it?",
      "answer": "What can the producer do about it?"
     },
     {
      "n": 4,
      "text": "How can I believe you are telling the truth?",
      "answer": "How can I believe you are telling the truth?"
     },
     {
      "n": 5,
      "text": "Where have you been?",
      "answer": "Where have you been?"
     }
    ],
    "answers": {
     "1": "To whom did you send the package?",
     "2": "Whose is it?",
     "3": "What can the producer do about it?",
     "4": "How can I believe you are telling the truth?",
     "5": "Where have you been?"
    }
   },
   {
    "code": "25.2",
    "instruction": "Decide if each pronoun below is an interrogative pronoun ( who , what ), demonstrative pronoun ( this , these ,e t c . ) ,o b j e c tp r o n o u n( me , us ,e t c . ) ,o rr eflexivep r o n o u n( myself , ourselves ,e t c . ) .",
    "sample": "Sample: myself reflexive",
    "items": [
     {
      "n": 1,
      "text": "herself",
      "answer": "herself reflexive"
     },
     {
      "n": 2,
      "text": "which",
      "answer": "which interrogative"
     },
     {
      "n": 3,
      "text": "who",
      "answer": "who interrogative"
     },
     {
      "n": 4,
      "text": "those",
      "answer": "those demonstrative"
     },
     {
      "n": 5,
      "text": "him",
      "answer": "him object"
     }
    ],
    "answers": {
     "1": "herself reflexive",
     "2": "which interrogative",
     "3": "who interrogative",
     "4": "those demonstrative",
     "5": "him object"
    }
   },
   {
    "code": "25.3",
    "instruction": "Underline the interrogative, possessive, and subject pronouns in each of the sentences below. Label each as interrogative ( what , who , etc.), determiner possessive ( my , our , etc.), nominal possessive ( mine , ours ,e t c . ) ,o rs u b j e c t( I , we , etc.). Some sentences will have more than one pronoun. (Remember that interrogative pronouns are used in questions, so look for that question ",
    "sample": "Sample: What are you looking for? (interrogative; subject)",
    "items": [
     {
      "n": 1,
      "text": "Where did your friend hide the ball?",
      "answer": "Where did your friend hide the ball? (interrogative; determiner possessive)"
     },
     {
      "n": 2,
      "text": "Which does Jack like: coffee or tea?",
      "answer": "Which does Jack like: coffee or tea? (interrogative)"
     },
     {
      "n": 3,
      "text": "Ours was the only entry in the contest.",
      "answer": "Ours was the only entry in the contest. (nominal possessive)"
     },
     {
      "n": 4,
      "text": "We kept our promise.",
      "answer": "We ke p tour promise. (subject; determiner possessive)"
     },
     {
      "n": 5,
      "text": "Y our business is yours alone.",
      "answer": "Your business isyours alone. (determiner possessive; nominal possessive)"
     }
    ],
    "answers": {
     "1": "Where did your friend hide the ball? (interrogative; determiner possessive)",
     "2": "Which does Jack like: coffee or tea? (interrogative)",
     "3": "Ours was the only entry in the contest. (nominal possessive)",
     "4": "We ke p tour promise. (subject; determiner possessive)",
     "5": "Your business isyours alone. (determiner possessive; nominal possessive)"
    }
   },
   {
    "code": "25.4",
    "instruction": "Underline the pronouns in each of the sentences below. Don't worry about what kind of pronoun each is. Some sentences will have more than one pronoun.",
    "sample": "Sample: What will they buy at his store?",
    "items": [
     {
      "n": 1,
      "text": "Y ou keep hurting yourself when you go skiing. 2 . W es h o u l dg e ti tt ot h e ma ss o o na s possible.",
      "answer": "Yo ukeephurtingyourself when you go skiing"
     },
     {
      "n": 3,
      "text": "Who was Bill thinking of sending them to?",
      "answer": "Who was Bill thinking of sending them to?"
     },
     {
      "n": 4,
      "text": "She has a great opportunity to advance herself in her company.",
      "answer": "She has a great opportunity to advance herself in her company"
     },
     {
      "n": 5,
      "text": "When will your great novel be finished?",
      "answer": "When will your great novel be finished?"
     }
    ],
    "answers": {
     "1": "Yo ukeephurtingyourself when you go skiing",
     "2": "We s ho u ld g e tit to them as soon as possible",
     "3": "Who was Bill thinking of sending them to?",
     "4": "She has a great opportunity to advance herself in her company",
     "5": "When will your great novel be finished?"
    }
   },
   {
    "code": "26.1",
    "instruction": "Underline the relative pronoun in each of the sentences below.",
    "sample": "Sample: The prominent oil man who bought that house is not a generous man.",
    "items": [
     {
      "n": 1,
      "text": "John' s is the essay that was the most well-written.",
      "answer": "John’s is the essay that was the most well written"
     },
     {
      "n": 2,
      "text": "His wife was the woman whom he loved the most.",
      "answer": "His wife was the woman whom he loved the most"
     },
     {
      "n": 3,
      "text": "There is no one who can make me laugh more than you.",
      "answer": "There is no one who can make me laugh more than you"
     },
     {
      "n": 4,
      "text": "Danny bought a gift which appealed to him.",
      "answer": "Danny bought a gift which appealed to him"
     },
     {
      "n": 5,
      "text": "Last week I met the man whose cousin married my friend.",
      "answer": "Last week I met the man whose cousin married my friend"
     }
    ],
    "answers": {
     "1": "John’s is the essay that was the most well written",
     "2": "His wife was the woman whom he loved the most",
     "3": "There is no one who can make me laugh more than you",
     "4": "Danny bought a gift which appealed to him",
     "5": "Last week I met the man whose cousin married my friend"
    }
   }
  ],
  "exercises": [
   {
    "q": "I crossed the piazza and headed towards the church.",
    "type": "input",
    "answer": "I crossed the piazza and headed towards the church",
    "source": "21.1",
    "instruction": "Underline the subject pronouns in the sentences below.",
    "explanation": "Respuesta del libro: I crossed the piazza and headed towards the church"
   },
   {
    "q": "Unfortunately, it was closed.",
    "type": "input",
    "answer": "Unfortunately, it was closed",
    "source": "21.1",
    "instruction": "Underline the subject pronouns in the sentences below.",
    "explanation": "Respuesta del libro: Unfortunately, it was closed"
   },
   {
    "q": "They simply stood there, waiting for me.",
    "type": "input",
    "answer": "They simply stood there, waiting for me",
    "source": "21.1",
    "instruction": "Underline the subject pronouns in the sentences below.",
    "explanation": "Respuesta del libro: They simply stood there, waiting for me"
   },
   {
    "q": "Y esterday, she went shopping.",
    "type": "input",
    "answer": "Y esterday, she went shopping",
    "source": "21.1",
    "instruction": "Underline the subject pronouns in the sentences below.",
    "explanation": "Respuesta del libro: Y esterday, she went shopping"
   },
   {
    "q": "W e should get together sometime. 82",
    "type": "input",
    "answer": "W e should get together sometime",
    "source": "21.1",
    "instruction": "Underline the subject pronouns in the sentences below.",
    "explanation": "Respuesta del libro: W e should get together sometime"
   },
   {
    "q": "Mary heard him.",
    "type": "input",
    "answer": "Mary heard him",
    "source": "21.2",
    "instruction": "Underline the object pronouns in each of the sentences below.There may be more than one pronoun in a sentence.",
    "explanation": "Respuesta del libro: Mary heard him"
   },
   {
    "q": "The detective watched us suspiciously.",
    "type": "input",
    "answer": "The detectives watched us suspiciously",
    "source": "21.2",
    "instruction": "Underline the object pronouns in each of the sentences below.There may be more than one pronoun in a sentence.",
    "explanation": "Respuesta del libro: The detectives watched us suspiciously"
   },
   {
    "q": "Stop bothering me!",
    "type": "input",
    "answer": "Stop bothering me!",
    "source": "21.2",
    "instruction": "Underline the object pronouns in each of the sentences below.There may be more than one pronoun in a sentence.",
    "explanation": "Respuesta del libro: Stop bothering me!"
   },
   {
    "q": "Steven sat down between him and her.",
    "type": "input",
    "answer": "Steven sat down between him and her",
    "source": "21.2",
    "instruction": "Underline the object pronouns in each of the sentences below.There may be more than one pronoun in a sentence.",
    "explanation": "Respuesta del libro: Steven sat down between him and her"
   },
   {
    "q": "Do the students understand it?",
    "type": "input",
    "answer": "Do the students understand it?",
    "source": "21.2",
    "instruction": "Underline the object pronouns in each of the sentences below.There may be more than one pronoun in a sentence.",
    "explanation": "Respuesta del libro: Do the students understand it?"
   },
   {
    "q": "The clerk had been sent to work with him.",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 1,
    "source": "21.4",
    "instruction": "Underline the pronouns in each of the sentences below. Identify each either as a subject pronoun or an object pronoun. Keep in mind that the pronouns you and it can be either subject or object pro- nouns, depending on how they are being use",
    "answer": "The clerk had been sent to work with him. (object)",
    "explanation": "Respuesta del libro: The clerk had been sent to work with him. (object)"
   },
   {
    "q": "The research required them to work closely together.",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 1,
    "source": "21.4",
    "instruction": "Underline the pronouns in each of the sentences below. Identify each either as a subject pronoun or an object pronoun. Keep in mind that the pronouns you and it can be either subject or object pro- nouns, depending on how they are being use",
    "answer": "The research required them to work closely together. (object)",
    "explanation": "Respuesta del libro: The research required them to work closely together. (object)"
   },
   {
    "q": "It is brighter than that other lamp.",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "21.4",
    "instruction": "Underline the pronouns in each of the sentences below. Identify each either as a subject pronoun or an object pronoun. Keep in mind that the pronouns you and it can be either subject or object pro- nouns, depending on how they are being use",
    "answer": "It is brighter than that other lamp. (subject)",
    "explanation": "Respuesta del libro: It is brighter than that other lamp. (subject)"
   },
   {
    "q": "If you know the answer, please tell me.",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "21.4",
    "instruction": "Underline the pronouns in each of the sentences below. Identify each either as a subject pronoun or an object pronoun. Keep in mind that the pronouns you and it can be either subject or object pro- nouns, depending on how they are being use",
    "answer": "If you know the answer, please tell me. (subject; object)",
    "explanation": "Respuesta del libro: If you know the answer, please tell me. (subject; object)"
   },
   {
    "q": "We will be moving near you.",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "21.4",
    "instruction": "Underline the pronouns in each of the sentences below. Identify each either as a subject pronoun or an object pronoun. Keep in mind that the pronouns you and it can be either subject or object pro- nouns, depending on how they are being use",
    "answer": "We willbemo v i ng n e a ryou. (subject; object)",
    "explanation": "Respuesta del libro: We willbemo v i ng n e a ryou. (subject; object)"
   },
   {
    "q": "John was a person who always pushed himself to the limit.",
    "type": "input",
    "answer": "John was a person who always pushed himself to the limit",
    "source": "22.1",
    "instruction": "Underline the reflexive pronouns in each of the sentences below.",
    "explanation": "Respuesta del libro: John was a person who always pushed himself to the limit"
   },
   {
    "q": "W atch yourself !",
    "type": "input",
    "answer": "W atchyourself !",
    "source": "22.1",
    "instruction": "Underline the reflexive pronouns in each of the sentences below.",
    "explanation": "Respuesta del libro: W atchyourself !"
   },
   {
    "q": "W e prided ourselves on being silly.",
    "type": "input",
    "answer": "We prided ourselves on being sillly",
    "source": "22.1",
    "instruction": "Underline the reflexive pronouns in each of the sentences below.",
    "explanation": "Respuesta del libro: We prided ourselves on being sillly"
   },
   {
    "q": "The directors of that company can blame no one but themselves.",
    "type": "input",
    "answer": "The directors of that company can blame no one but themselves",
    "source": "22.1",
    "instruction": "Underline the reflexive pronouns in each of the sentences below.",
    "explanation": "Respuesta del libro: The directors of that company can blame no one but themselves"
   },
   {
    "q": "I see myself as a successful writer someday.",
    "type": "input",
    "answer": "I see myself as a successful writer someday",
    "source": "22.1",
    "instruction": "Underline the reflexive pronouns in each of the sentences below.",
    "explanation": "Respuesta del libro: I see myself as a successful writer someday"
   },
   {
    "q": "I have found that I can do it when the room is quiet.",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "22.2",
    "instruction": "Underline the reflexive, subject, and object pronouns in each of the sentences below. Label each as reflexive, subject, or object. Some sentences will have more than one pronoun.",
    "answer": "I have found that Ic a nd oit when the room is quiet. (subject; subject; object) 99",
    "explanation": "Respuesta del libro: I have found that Ic a nd oit when the room is quiet. (subject; subject; object) 99"
   },
   {
    "q": "He noticed that she often immersed herself in ab o o k .",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "22.2",
    "instruction": "Underline the reflexive, subject, and object pronouns in each of the sentences below. Label each as reflexive, subject, or object. Some sentences will have more than one pronoun.",
    "answer": "He noticed that she often immersed herself in a book. (subject; subject; reflexive)",
    "explanation": "Respuesta del libro: He noticed that she often immersed herself in a book. (subject; subject; reflexive)"
   },
   {
    "q": "We have known her for years.",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "22.2",
    "instruction": "Underline the reflexive, subject, and object pronouns in each of the sentences below. Label each as reflexive, subject, or object. Some sentences will have more than one pronoun.",
    "answer": "We h ave k no w nher for years. (subject; object)",
    "explanation": "Respuesta del libro: We h ave k no w nher for years. (subject; object)"
   },
   {
    "q": "Some guests told us that they forced themselvest og e tu pa t6A.M.",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "22.2",
    "instruction": "Underline the reflexive, subject, and object pronouns in each of the sentences below. Label each as reflexive, subject, or object. Some sentences will have more than one pronoun.",
    "answer": "Some guests told us that they forced themselves to get up at 6 A.M. (object; subject; reflexive)",
    "explanation": "Respuesta del libro: Some guests told us that they forced themselves to get up at 6 A.M. (object; subject; reflexive)"
   },
   {
    "q": "Y ou don't need to explain yourself to me.",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "22.2",
    "instruction": "Underline the reflexive, subject, and object pronouns in each of the sentences below. Label each as reflexive, subject, or object. Some sentences will have more than one pronoun.",
    "answer": "You don’t need to explainyourself to me. (subject; reflexive; object)",
    "explanation": "Respuesta del libro: You don’t need to explainyourself to me. (subject; reflexive; object)"
   },
   {
    "q": "That wasn't really Hannah's job, but I appreciate her doing it anyway.",
    "type": "input",
    "answer": "That wasn’t really Hannah’s job, but I appreciate her doing it anyway",
    "source": "23.1",
    "instruction": "Underlinet h ed emonstrativep r o n o u ni ne a c ho ft h es entencesb e l o w .",
    "explanation": "Respuesta del libro: That wasn’t really Hannah’s job, but I appreciate her doing it anyway"
   },
   {
    "q": "Natasha really likes these.",
    "type": "input",
    "answer": "Natasha really likes these",
    "source": "23.1",
    "instruction": "Underlinet h ed emonstrativep r o n o u ni ne a c ho ft h es entencesb e l o w .",
    "explanation": "Respuesta del libro: Natasha really likes these"
   },
   {
    "q": "He wasn't good at riddles but managed to solve those.",
    "type": "input",
    "answer": "He wasn’t good at riddles but managed to solve those",
    "source": "23.1",
    "instruction": "Underlinet h ed emonstrativep r o n o u ni ne a c ho ft h es entencesb e l o w .",
    "explanation": "Respuesta del libro: He wasn’t good at riddles but managed to solve those"
   },
   {
    "q": "I never thought it would come to this.",
    "type": "input",
    "answer": "I never thought it would come to this",
    "source": "23.1",
    "instruction": "Underlinet h ed emonstrativep r o n o u ni ne a c ho ft h es entencesb e l o w .",
    "explanation": "Respuesta del libro: I never thought it would come to this"
   },
   {
    "q": "These are very difficult times.",
    "type": "input",
    "answer": "These are very difficult times",
    "source": "23.1",
    "instruction": "Underlinet h ed emonstrativep r o n o u ni ne a c ho ft h es entencesb e l o w .",
    "explanation": "Respuesta del libro: These are very difficult times"
   },
   {
    "q": "yourselves",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "23.2",
    "instruction": "Decide if each pronoun below is a subject, object, reflexive, or demonstrative pronoun.",
    "answer": "yourselves reflexive",
    "explanation": "Respuesta del libro: yourselves reflexive"
   },
   {
    "q": "those",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "23.2",
    "instruction": "Decide if each pronoun below is a subject, object, reflexive, or demonstrative pronoun.",
    "answer": "those demonstrative",
    "explanation": "Respuesta del libro: those demonstrative"
   },
   {
    "q": "itself",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "23.2",
    "instruction": "Decide if each pronoun below is a subject, object, reflexive, or demonstrative pronoun.",
    "answer": "itself reflexive",
    "explanation": "Respuesta del libro: itself reflexive"
   },
   {
    "q": "We were angry at ourselves.",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "23.3",
    "instruction": "Underline the pronouns in each of the sentences below. Label each as demonstrative, subject, object, or reflexive. Some sentences will have more than one pronoun.",
    "answer": "We we r e a ng r y atourselves. (subject; reflexive)",
    "explanation": "Respuesta del libro: We we r e a ng r y atourselves. (subject; reflexive)"
   },
   {
    "q": "He asked us to explain this.",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "23.3",
    "instruction": "Underline the pronouns in each of the sentences below. Label each as demonstrative, subject, object, or reflexive. Some sentences will have more than one pronoun.",
    "answer": "He asked us to explain this. (subject; object; demonstrative)",
    "explanation": "Respuesta del libro: He asked us to explain this. (subject; object; demonstrative)"
   },
   {
    "q": "It works just as well at home.",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "23.3",
    "instruction": "Underline the pronouns in each of the sentences below. Label each as demonstrative, subject, object, or reflexive. Some sentences will have more than one pronoun.",
    "answer": "It works just as well at home. (subject)",
    "explanation": "Respuesta del libro: It works just as well at home. (subject)"
   },
   {
    "q": "They sent these to us.",
    "type": "choice",
    "options": [
     "subject",
     "object"
    ],
    "correct": 0,
    "source": "23.3",
    "instruction": "Underline the pronouns in each of the sentences below. Label each as demonstrative, subject, object, or reflexive. Some sentences will have more than one pronoun.",
    "answer": "They sent these to us. (subject; demonstrative; object)",
    "explanation": "Respuesta del libro: They sent these to us. (subject; demonstrative; object)"
   },
   {
    "q": "The baseball player dusted himself off.",
    "type": "input",
    "answer": "The baseball player dusted himself off. (reflexive)",
    "source": "23.3",
    "instruction": "Underline the pronouns in each of the sentences below. Label each as demonstrative, subject, object, or reflexive. Some sentences will have more than one pronoun.",
    "explanation": "Respuesta del libro: The baseball player dusted himself off. (reflexive)"
   },
   {
    "q": "The woman hid her feelings well.",
    "type": "input",
    "answer": "The woman hid her feelings well",
    "source": "24.1",
    "instruction": "Underline the determiner possessive pronoun in each of the sentences below. Remember: deter- miner possessive pronouns are followed by nouns.",
    "explanation": "Respuesta del libro: The woman hid her feelings well"
   },
   {
    "q": "He was younger than his wife.",
    "type": "input",
    "answer": "He was younger than his wife",
    "source": "24.1",
    "instruction": "Underline the determiner possessive pronoun in each of the sentences below. Remember: deter- miner possessive pronouns are followed by nouns.",
    "explanation": "Respuesta del libro: He was younger than his wife"
   }
  ],
  "answerKeys": {
   "26.3": {
    "1": "What can I do about it? (interrogative)",
    "2": "Adam is the person whom you need to talk to. (relative)",
    "3": "I fixed the clock that was broken. (relative)",
    "4": "The police will find the person who committed this crime. (relative)",
    "5": "When will the show start? (interrogative)"
   },
   "21.1": {
    "1": "I crossed the piazza and headed towards the church",
    "2": "Unfortunately, it was closed",
    "3": "They simply stood there, waiting for me",
    "4": "Y esterday, she went shopping",
    "5": "W e should get together sometime"
   },
   "21.2": {
    "1": "Mary heard him",
    "2": "The detectives watched us suspiciously",
    "3": "Stop bothering me!",
    "4": "Steven sat down between him and her",
    "5": "Do the students understand it?"
   },
   "21.3": {
    "1": "them object",
    "2": "he subject",
    "3": "I subject",
    "4": "us object",
    "5": "her object"
   },
   "21.4": {
    "1": "The clerk had been sent to work with him. (object)",
    "2": "The research required them to work closely together. (object)",
    "3": "It is brighter than that other lamp. (subject)",
    "4": "If you know the answer, please tell me. (subject; object)",
    "5": "We willbemo v i ng n e a ryou. (subject; object)"
   },
   "22.1": {
    "1": "John was a person who always pushed himself to the limit",
    "2": "W atchyourself !",
    "3": "We prided ourselves on being sillly",
    "4": "The directors of that company can blame no one but themselves",
    "5": "I see myself as a successful writer someday"
   },
   "22.2": {
    "1": "I have found that Ic a nd oit when the room is quiet. (subject; subject; object) 99",
    "2": "He noticed that she often immersed herself in a book. (subject; subject; reflexive)",
    "3": "We h ave k no w nher for years. (subject; object)",
    "4": "Some guests told us that they forced themselves to get up at 6 A.M. (object; subject; reflexive)",
    "5": "You don’t need to explainyourself to me. (subject; reflexive; object)"
   },
   "23.1": {
    "1": "That wasn’t really Hannah’s job, but I appreciate her doing it anyway",
    "2": "Natasha really likes these",
    "3": "He wasn’t good at riddles but managed to solve those",
    "4": "I never thought it would come to this",
    "5": "These are very difficult times"
   },
   "23.2": {
    "1": "yourselves reflexive",
    "2": "those demonstrative",
    "3": "me object",
    "4": "we subject",
    "5": "itself reflexive"
   },
   "23.3": {
    "1": "We we r e a ng r y atourselves. (subject; reflexive)",
    "2": "He asked us to explain this. (subject; object; demonstrative)",
    "3": "It works just as well at home. (subject)",
    "4": "They sent these to us. (subject; demonstrative; object)",
    "5": "The baseball player dusted himself off. (reflexive)"
   },
   "24.1": {
    "1": "The woman hid her feelings well",
    "2": "He was younger than his wife",
    "3": "Mr. and Mrs. Bradford adored their son",
    "4": "Thomas and Natalie were the best students in my class",
    "5": "Your eyes look very tired"
   },
   "24.2": {
    "1": "The rattlesnake is his",
    "2": "The mother needs her nourishment and the baby needs hers also",
    "3": "Yours is the room on the left",
    "4": "The computer on the table is mine",
    "5": "Ours is the next house on the block"
   },
   "24.3": {
    "1": "my determiner",
    "2": "theirs nominal",
    "3": "mine nominal",
    "4": "your determiner",
    "5": "her determiner UNIT 7: PRONOUNS 100"
   },
   "24.4": {
    "1": "Listening to music might interfere with your ability to concentrate. (determiner)",
    "2": "Some of those CDs are ours. (nominal) 3 . T h ep risonerw a so rderedt oh a n do v e rhis things. (determiner)",
    "4": "In my opinion, you should apologize. (determiner)",
    "5": "Hers is the only dissenting voice in the room. (nominal)"
   },
   "24.5": {
    "1": "their determiner possessive",
    "2": "them object",
    "3": "yourselves reflexive",
    "4": "we subject",
    "5": "hers nominal possessive"
   },
   "24.6": {
    "1": "Their employees were working during lunch. (determiner possessive)",
    "2": "He asked us for the answer. (subject; object)",
    "3": "It made a huge difference to her and to her friends. (subject; object; determiner possessive)",
    "4": "She looked at herself in the rearview mirror of my car. (subject; reflexive; determiner possessive)",
    "5": "Some guy introduced himself and gave me his business card. (reflexive; object; determiner possessive)"
   },
   "25.1": {
    "1": "To whom did you send the package?",
    "2": "Whose is it?",
    "3": "What can the producer do about it?",
    "4": "How can I believe you are telling the truth?",
    "5": "Where have you been?"
   },
   "25.2": {
    "1": "herself reflexive",
    "2": "which interrogative",
    "3": "who interrogative",
    "4": "those demonstrative",
    "5": "him object"
   },
   "25.3": {
    "1": "Where did your friend hide the ball? (interrogative; determiner possessive)",
    "2": "Which does Jack like: coffee or tea? (interrogative)",
    "3": "Ours was the only entry in the contest. (nominal possessive)",
    "4": "We ke p tour promise. (subject; determiner possessive)",
    "5": "Your business isyours alone. (determiner possessive; nominal possessive)"
   },
   "25.4": {
    "1": "Yo ukeephurtingyourself when you go skiing",
    "2": "We s ho u ld g e tit to them as soon as possible",
    "3": "Who was Bill thinking of sending them to?",
    "4": "She has a great opportunity to advance herself in her company",
    "5": "When will your great novel be finished?"
   },
   "26.1": {
    "1": "John’s is the essay that was the most well written",
    "2": "His wife was the woman whom he loved the most",
    "3": "There is no one who can make me laugh more than you",
    "4": "Danny bought a gift which appealed to him",
    "5": "Last week I met the man whose cousin married my friend"
   },
   "26.2": {
    "1": "They are men who are ambitious. (men)",
    "2": "The salesman noticed the potatoes that he planted. (potatoes)",
    "3": "It is worth buying stocks which increase in value. (stocks)",
    "4": "The guests whom we invited a week ago just arrived. (guests)",
    "5": "The flight that was supposed to leave at 5 is still delayed. (flight)"
   },
   "27.1": {
    "1": "She returned the book and quietly left",
    "2": "I’m leaving for Europe tomorrow",
    "3": "That horse is an unusually calm animal",
    "4": "The train came to a stop suddenly",
    "5": "That remark was too shocking",
    "6": "Why don’t you call her sometimes?",
    "7": "We were told to handle the merchandise carefully",
    "8": "The doctor informed his patient that his prognosis was very good",
    "9": "The Morgans are not leaving today",
    "10": "Unexpectedly, the principal ordered everyone into the auditorium. Many, though not all, adverbs end in -ly ( rapidly , innocently , sweetly , etc.). However, some adjectives also end in - ly , for example lovely , friendly .I t ’ se a s yt od istinguisht h e m . Just remember that the adjectives can go in the slot the boy : the lovely boy , the friendlyboy . While adverbs can go before the adjective, for example the extremely friendly boy ( extremely is an adverb), adverbs cannot occupy the slot directly before the noun. That is, one cannot say, *the extremely boy or *the innocently boy ,s o extremely and innocently are not adjectives; they must be adverbs. Note that some nouns, for example the £ower lily ,e n di n -ly a sw e l l .A n dj u s tt oa d dal ittlemore spice to the recipe, there are some words that can be used either as adverbs or as adjectives: 6a. That is a pretty easy book. ( Pretty is similar to the word very here, and is an adverb of degree.) 6b. That is a pretty child. ( Pretty is an adjective.) 7a. You drive too fast. ( Fa st t e l l su sm o r ea b o u tt h ev e r b drive ,s oi ti sa na d v e r b . ) 7b. This actor’ s delivery was too fast. ( Fa st t e l l su sm o r ea b o u tt h en o u n delivery , so it is an adjective.) UNIT 8: ADVERBS 104"
   },
   "27.2": {
    "1": "happily",
    "2": "ugly",
    "3": "clearly",
    "4": "gently",
    "5": "manly",
    "6": "predictably",
    "7": "nearly",
    "8": "proudly",
    "9": "barely",
    "10": "silly"
   },
   "27.3": {
    "1": "He was busily writing a letter when the doorbell rang",
    "2": "That is a very hilly road",
    "3": "They fell hopelessly in love at first sight",
    "4": "I never realized that you have such curly hair",
    "5": "The soprano gave a masterly performance",
    "6": "Mr. Sawyer is paid weekly",
    "7": "She undoubtedly deserves top honors",
    "8": "This lady eerily resembles my grandmother",
    "9": "Janet fully concurs with her husband’ s decision",
    "10": "Your new house is very lovely"
   },
   "27.4": {
    "1": "Excitedly, the men dragged the heavy sack to the clearing",
    "2": "I’ve checked on the situation very thoroughly",
    "3": "Adam waited inside",
    "4": "The old fellow left town yesterday",
    "5": "Afterwards, he regretted his actions. Lesson 27: Identifying adverbs 105"
   }
  }
 },
 {
  "unit": 8,
  "title": "Adverbs",
  "part": "Part I: Kinds of words",
  "startPage": 116,
  "pdfPages": {
   "theory": [
    116,
    118
   ],
   "answers": 120
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Los adverbios modifican verbos, adjetivos u otros adverbios: frecuencia, manera, tiempo, lugar y grado.</p></div>\n<div class=\"theory-es-section\"><h4>1. ¿Qué modifican?</h4><p><em>She <strong>always</strong> arrives early</em> (modifica al verbo). <em>He spoke <strong>very</strong> clearly</em> (modifica al adverbio). <em>A <strong>really</strong> good idea</em> (modifica al adjetivo).</p></div>\n<div class=\"theory-es-section\"><h4>2. Frecuencia</h4><p><em>always, usually, often, sometimes, rarely, never</em>. En español muchas veces se traducen con presente, no con futuro: <em>She often walks</em>.</p></div>\n<div class=\"theory-es-section\"><h4>3. Manner (-ly)</h4><p>Muchos adverbios de manera son adjetivo + <strong>-ly</strong>: <em>quick → quickly</em>. Cuidado con adjetivos que parecen adverbios: <em>fast, hard, early</em> no llevan -ly en este uso.</p></div>\n<div class=\"theory-es-section\"><h4>4. Orden en la oración</h4><p>Sujeto + adverbio de frecuencia + verbo principal: <em>I <strong>never</strong> forget</em>. Con be: <em>She is <strong>always</strong> late</em> (después de be).</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> En U8 el Test yourself pide identificar adverbios y su tipo (frecuencia, manera, etc.). Preguntá: ¿modifica al verbo, al adjetivo o a la frase entera?</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>Test yourself 25.4\n1. Yo ukeephurtingyourself when you go skiing.\n2. We s ho u ld g e tit to them as soon as possible.\n3. Who was Bill thinking of sending them to?\n4. She has a great opportunity to advance herself in her company.\n5. When will your great novel be finished?\nTest yourself 26.1\n1. John's is the essay that was the most well written.\n2. His wife was the woman whom he loved the most.\n3. There is no one who can make me laugh more than you.\n4. Danny bought a gift which appealed to him.\n5. Last week I met the man whose cousin married my friend.\nTest yourself 26.2\n1. They are men who are ambitious. (men)\n2. The salesman noticed the potatoes that he planted. (potatoes)\n3. It is worth buying stocks which increase in value. (stocks)\n4. The guests whom we invited a week ago just arrived. (guests)\n5. The flight that was supposed to leave at 5 is still delayed. (flight)\nTest yourself 26.3\n1. What can I do about it? (interrogative)\n2. Adam is the person whom you need to talk to. (relative)\n3. I fixed the clock that was broken. (relative)\n4. The police will find the person who committed this crime. (relative)\n5. When will the show start? (interrogative)\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.\nUNIT 7: PRONOUNS\n102</p>"
   },
   {
    "n": 27,
    "title": "Identifying adverbs",
    "html": "<p>W e've saved adverbs for last because they can be a bit tricky. Adverbs do lots of didierent\nthings and can be in lots of didierent places in a sentence. In fact, the chances are, if you\ndon't know what else a word is, it' s probably an adverb.\nThe adverbs are underlined in the sentences below:\n1. I live here. (information about location)\n2. My brother is arriving today. (information about time)\n3. She dances gracefully. (information about manner)\n4. That child is very sweet. (degree information about an adjective, in this case,\nabout\nsweet\n)\n5. She works extremely eflciently. (degree information about another adverb, in\nthis case, about\neflciently\n)\nQuick tip 27.1\nAdverbs generally indicate information about location, time, degree, and manner. They\nprovide extra information about the action in a sentence, about adjectives and about other\nadverbs.\nQuick tip 27.2\nIf you don't know what else a word is (and you've eliminated the other parts of speech), it's\nprobably an\nadverb\n.\nWhile unfortunately, we can't give you a simple rule that will help you identify adverbs\n100 percent of the time, the tips below will help you correctly identify adverbs in many\ncases.\nQuick tip 27.3\nCan the word go in the following slot? Mary slept . If so, it's probably an adverb. For\nexample,\nMary slept peacefully . Peacefully is an adverb.\nQuick tip 27.4\nCan the word go in the following slot? , I gave / will give my speech .I fs o ,i t ' s\nprobably an adverb. For example, Yesterday, I gave my speech. Yesterday is an\nadverb\n.O r : Tomorrow, I will give my speech. Tomorrow is an adverb .\n103</p>\n<p>Quick tip 27.5\nCan the word go in the following slot? He is happy . If so, it's probably an adverb. For\nexample,\nHe is very happy . Very is an adverb.\nQuick tip 27.6\nDoes the word end in the sufﬁx -ly ? Is it an adjective? If it ends in -ly and it's not an\nadjective, it's probably an adverb (e.g.\nhopefully\n,\nhappily\n,\nunusually\n).\nTest yourself 27.1\nUnderline the adverbs in each of the sentences below.\nSample: They had deliberately been silent when they entered the room.\nGetting started\n(answers on p. 107)\n1. She returned the book and quietly\nleft.\n2. I'm leaving for Europe tomorrow.\n3. That horse is an unusually calm\nanimal.\n4. The train came to a stop suddenly.\n5. That remark was too shocking.\nMore practice\n(answers on the website)\n6. Why don't you call her sometimes?\n7. We were told to handle the merchandise\ncarefully.\n8. The doctor informed his patient that his\nprognosis was very good.\n9. The Morgans are not leaving today.\n10. Unexpectedly, the principal ordered\neveryone into the auditorium.\nMany, though not all, adverbs end in -ly (\nrapidly\n,\ninnocently\n,\nsweetly\n, etc.). However, some\nadjectives also end in -\nly\n, for example\nlovely\n,\nfriendly\n.I t ' se a s yt od istinguisht h e m .\nJust remember that the adjectives can go in the slot\nthe boy : the lovely boy , the\nfriendlyboy .\nWhile adverbs can go before the adjective, for example\nthe extremely friendly boy\n(\nextremely\nis an adverb), adverbs cannot occupy the slot directly before the noun. That is,\none cannot say,\n*the extremely boy\nor\n*the innocently boy\n,s o\nextremely\nand\ninnocently\nare\nnot adjectives; they must be adverbs.\nNote that some nouns, for example the ffower\nlily\n,e n di n\n-ly\na sw e l l .A n dj u s tt oa d dal i t t l e\nmore spice to the recipe, there are some words that can be used either as adverbs or as\nadjectives:\n6a. That is a pretty easy book. ( Pretty is similar to the word very here, and is an\nadverb of degree.)\n6b. That is a pretty child. ( Pretty is an adjective.)\n7a. Y ou drive too fast. ( Fa st t e l l su sm o r ea b o u tt h ev e r b drive ,s oi ti sa na d v e r b . )\n7b. This actor' s delivery was too fast. ( Fa st t e l l su sm o r ea b o u tt h en o u n delivery ,\nso it is an adjective.)\nUNIT 8: ADVERBS\n104</p>"
   }
  ],
  "tips": [
   {
    "code": "27.1",
    "text": "Adverbs generally indicate information about location, time, degree, and manner. They provide extra information about the action in a sentence, about adjectives and about other adverbs."
   },
   {
    "code": "27.2",
    "text": "If you don't know what else a word is (and you've eliminated the other parts of speech), it's probably an adverb . While unfortunately, we can't give you a simple rule that will help you identify adverbs 100 percent of the time, the tips below will help you correctly identify adverbs in many cases."
   },
   {
    "code": "27.3",
    "text": "Can the word go in the following slot? Mary slept . If so, it's probably an adverb. For example, Mary slept peacefully . Peacefully is an adverb."
   },
   {
    "code": "27.4",
    "text": "Can the word go in the following slot? , I gave / will give my speech .I fs o ,i t ' s probably an adverb. For example, Yesterday, I gave my speech. Yesterday is an adverb .O r : Tomorrow, I will give my speech. Tomorrow is an adverb . 103"
   },
   {
    "code": "27.5",
    "text": "Can the word go in the following slot? He is happy . If so, it's probably an adverb. For example, He is very happy . Very is an adverb."
   },
   {
    "code": "27.6",
    "text": "Does the word end in the sufﬁx -ly ? Is it an adjective? If it ends in -ly and it's not an adjective, it's probably an adverb (e.g. hopefully , happily , unusually )."
   }
  ],
  "practice": [
   {
    "code": "25.4",
    "instruction": "1. Yo ukeephurtingyourself when you go skiing. 2. We s ho u ld g e tit to them as soon as possible. 3. Who was Bill thinking of sending them to? 4. She has a great opportunity to advance herself in her company. 5. When will your great novel be finished?",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "26.1",
    "instruction": "1. John's is the essay that was the most well written. 2. His wife was the woman whom he loved the most. 3. There is no one who can make me laugh more than you. 4. Danny bought a gift which appealed to him. 5. Last week I met the man whose cousin married my friend.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "26.2",
    "instruction": "1. They are men who are ambitious. (men) 2. The salesman noticed the potatoes that he planted. (potatoes) 3. It is worth buying stocks which increase in value. (stocks) 4. The guests whom we invited a week ago just arrived. (guests) 5. The flight that was supposed to leave at 5 is still delayed. (flight)",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "26.3",
    "instruction": "1. What can I do about it? (interrogative) 2. Adam is the person whom you need to talk to. (relative) 3. I fixed the clock that was broken. (relative) 4. The police will find the person who committed this crime. (relative) 5. When will the show start? (interrogative) FOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "27.1",
    "instruction": "Underline the adverbs in each of the sentences below.",
    "sample": "Sample: They had deliberately been silent when they entered the room.",
    "items": [
     {
      "n": 1,
      "text": "She returned the book and quietly left.",
      "answer": "She returned the book and quietly left"
     },
     {
      "n": 2,
      "text": "I'm leaving for Europe tomorrow.",
      "answer": "I’m leaving for Europe tomorrow"
     },
     {
      "n": 3,
      "text": "That horse is an unusually calm animal.",
      "answer": "That horse is an unusually calm animal"
     },
     {
      "n": 4,
      "text": "The train came to a stop suddenly.",
      "answer": "The train came to a stop suddenly"
     },
     {
      "n": 5,
      "text": "That remark was too shocking.",
      "answer": "That remark was too shocking"
     }
    ],
    "answers": {
     "1": "She returned the book and quietly left",
     "2": "I’m leaving for Europe tomorrow",
     "3": "That horse is an unusually calm animal",
     "4": "The train came to a stop suddenly",
     "5": "That remark was too shocking"
    }
   }
  ],
  "exercises": [
   {
    "q": "She returned the book and quietly left.",
    "type": "input",
    "answer": "She returned the book and quietly left",
    "source": "27.1",
    "instruction": "Underline the adverbs in each of the sentences below.",
    "explanation": "Respuesta del libro: She returned the book and quietly left"
   },
   {
    "q": "I'm leaving for Europe tomorrow.",
    "type": "input",
    "answer": "I’m leaving for Europe tomorrow",
    "source": "27.1",
    "instruction": "Underline the adverbs in each of the sentences below.",
    "explanation": "Respuesta del libro: I’m leaving for Europe tomorrow"
   },
   {
    "q": "That horse is an unusually calm animal.",
    "type": "input",
    "answer": "That horse is an unusually calm animal",
    "source": "27.1",
    "instruction": "Underline the adverbs in each of the sentences below.",
    "explanation": "Respuesta del libro: That horse is an unusually calm animal"
   },
   {
    "q": "The train came to a stop suddenly.",
    "type": "input",
    "answer": "The train came to a stop suddenly",
    "source": "27.1",
    "instruction": "Underline the adverbs in each of the sentences below.",
    "explanation": "Respuesta del libro: The train came to a stop suddenly"
   },
   {
    "q": "That remark was too shocking.",
    "type": "input",
    "answer": "That remark was too shocking",
    "source": "27.1",
    "instruction": "Underline the adverbs in each of the sentences below.",
    "explanation": "Respuesta del libro: That remark was too shocking"
   }
  ],
  "answerKeys": {
   "27.5": {
    "1": "N ADV V ADV ADJ My roommate usually sleeps very late",
    "2": "ADV N V ADJ N N Y esterday, the girl accompanied her older sister to the mall",
    "3": "V ADV ADJ N He walked slowly toward the foggy station. 107",
    "4": "ADJ N ADV V ADJ N The experienced senator quickly evaded their probing questions",
    "5": "ADV V ADJ N ADV N Later, we took a leisurely walk down by the beach."
   },
   "27.1": {
    "1": "She returned the book and quietly left",
    "2": "I’m leaving for Europe tomorrow",
    "3": "That horse is an unusually calm animal",
    "4": "The train came to a stop suddenly",
    "5": "That remark was too shocking"
   },
   "27.2": {
    "1": "happily adverb",
    "2": "ugly adjective",
    "3": "clearly adverb",
    "4": "gently adverb",
    "5": "manly adjective"
   },
   "27.3": {
    "1": "He was busily writing a letter when the doorbell rang",
    "2": "That is a very hilly road",
    "3": "They fell hopelessly in love at first sight",
    "4": "I never realized that you have such curly hair",
    "5": "The soprano gave a masterly performance"
   },
   "27.4": {
    "1": "Excitedly, the men dragged the heavy sack to the clearing",
    "2": "I’ve checked on the situation very thoroughly",
    "3": "Adam waited inside",
    "4": "The old fellow left town yesterday",
    "5": "Afterwards, he regretted his actions"
   }
  }
 },
 {
  "unit": 9,
  "title": "Noun phrases",
  "part": "Part II: Kinds of phrases",
  "startPage": 126,
  "pdfPages": {
   "theory": [
    126,
    130
   ],
   "answers": 132
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>La frase nominal (noun phrase) tiene un núcleo sustantivo (o pronombre) más determinantes, adjetivos y complementos.</p></div>\n<div class=\"theory-es-section\"><h4>1. Estructura básica</h4><p>Ej.: <em><strong>The tall student</strong> from Peru</em> → determinante + adjetivo + núcleo + frase preposicional. El núcleo es lo que la hace «nominal».</p></div>\n<div class=\"theory-es-section\"><h4>2. Funciones</h4><p>Una frase nominal puede ser sujeto, objeto directo, objeto indirecto o complemento de preposición: <em><strong>These flowers</strong> smell nice</em> / <em>I bought <strong>a book</strong></em>.</p></div>\n<div class=\"theory-es-section\"><h4>3. Pronombre como núcleo</h4><p>Un pronombre solo ya es una frase nominal completa: <em><strong>You</strong> answered</em>.</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> Subrayá primero el sustantivo o pronombre central; todo lo demás es «vestimenta» de esa frase.</div>",
  "lessons": [
   {
    "n": 28,
    "title": "The basic structure of noun phrases",
    "html": "<p>There are all kinds of noun phrases and we can discover them by seeing some of the things\nwe can substitute for the noun phrase,\nthe little boy\n.The underlined portions of the senten-\nces below are all noun phrases and any one of them can replace\nthe little boy\nin the sentence\nThe little boy laughed\n.\n1. Audiences laughed.\n2. Y ounger audiences laughed.\n3. The girl laughed.\n4. The little girl laughed.\n5. The cute little girl laughed.\n6. John laughed.\n7. They laughed.\nOf course, there are lots of things that cannot replace the little boy ,f o re x a m p l e :\n8. *My very quickly laughed.\n9. *Near his laughed.\n10. *Went away laughed.\nY ou're probably not surprised to learn that\nMy very quickly\n,\nNear his\n,a n d\nWe n t aw a y\nare not\nnoun phrases.\nSo what can be a noun phrase?\nIn sentences 1^6, the noun phrases all have something in common: each consists of at\nleast a noun. (See\nUnit 1\nto refresh your memory about nouns.)\nHere are the noun phrases again, with the nouns underlined:\naudiences\nyounger audiences\nthe girl\nthe little girl\nthe cute little girl\nJohn\nIn sentence 1, Audiences laughed ,a n di ns entence6 ,John laughed ,t h en o u np h r a s ec o n -\nsists of just a noun:\naudiences\nin sentence 1 and\nJohn\nin sentence 6.\nQuick tip 28.1\nA noun phrase can consist of a noun alone, for example, audiences, John .\nTest yourself 28.1\nUnderline the noun phrase in each of the sentences below. In this exercise, the noun phrase will\nalways consist of a noun alone. Some sentences may have more than one noun phrase.\nSample: Sugar is not very healthy.\n113</p>\n<p>Getting started (answers on p. 119)\n1. Pirates were looking for treasure.\n2. Furniture can be expensive.\n3. Boys often want to be policemen.\n4. People think money is useful.\n5. Jeremy was eating rice.\n More practice (answers on the website)\n6. Sometimes juries make mistakes.\n7. Jenny visited friends yesterday.\n8. Oil is thicker than water.\n9. Joel hates bananas.\n10. Writers often like to work alone.\nY ou can also see, in sentences 2^5, that a noun phrase can have other words in addition to\njust a noun. Let' s see what those other words can be:\nyounger audiences: adjective + noun\nthe girl: determiner + noun\nthe little girl: determiner + adjective + noun\nthe cute little girl: determiner + adjectives + noun\n(See\nUnits 3\nand 4 to remind yourself about determiners and adjectives.)\nQuick tip 28.2\nA noun phrase can consist of a determiner, one or more adjectives, and a noun. The\ndeterminer and adjective(s) are optional.\nTest yourself 28.2\nUnderline the noun phrases in each of the sentences below. In this exercise, the noun phrase will\nalways consist of a determiner + noun; the determiner will always be an article, that is,\nthe\n,\na\n,o r\nan\n. Some sentences may have more than one noun phrase.\nSample: Am a ns t o l ethe car.\nGetting started\n(answers on p. 119)\n1. The winner was overjoyed.\n2. The crowd dispersed peacefully.\n3. A minute can seem like an eternity.\n4. The dentist gave the patient a toothbrush.\n5. The couple forgot to tip the waiter.\nMore practice\n(answers on the website)\n6. A Mercedes costs more than a Chevy.\n7. The Andersons bought a house.\n8. The children are sleeping.\n9. The lake is near the village.\n10. The professor paid the student a compliment.\nHere are some more examples with didierent determiners and nouns. (Y ou may recall\nfrom\nUnit 3\nthat the determiner always comes before the noun.) The whole noun phrase is\nunderlined.\nUNIT 9: NOUN PHRASES\n114</p>\n<p>11. Am a nl a u g h e d .\n12. Her friend laughed.\n13. That lady laughed.\n14. Many people laughed.\nNotice that these noun phrases don't have to appear only at the beginning of the sentence:\n15. The criminal is am a n .\n16. I looked at her friend.\n17. Do you know that lady?\n18. The clown made many people laugh.\nTest yourself 28.3\nUnderline the noun phrases in each of the sentences below. In this exercise, the noun phrase will\nalways consist of a determiner (any kind) + noun. Some sentences may have more than one noun\nphrase.\nSample: My hat blew odi in the wind.\nGetting started\n(answers on p. 119)\n1. His doorman hailed a taxi.\n2. As the doctor toured the ward, a group of her\ninterns went along.\n3. Y our daughter looks great in this\npicture.\n4. Some people keep their jewelry in a safe\ndeposit box.\n5. Jack' s friend is an artist.\nMore practice\n(answers on the website)\n6. While driving in a snowstorm, Alex' s car\nveered odi the road.\n7. Several spectators wanted that ballplayer\nthrown out of the game.\n8. The train pulled into the station.\n9. Most people are proud of their country.\n10. Andrea' s grandmother used to bake a pie in\nher kitchen for her grandchildren.\nHere are examples of noun phrases consisting of a determiner plus an adjective plus a\nnoun (the whole noun phrase is underlined):\n19. The best fruit is grown on the west coast.\n20. Our new shoes got completely soaked.\n21. That old dog is my favorite one.\n22. Every new task is challenging.\nTest yourself 28.4\nUnderline the noun phrases in each of the sentencesbe …</p>\n<p>More practice (answers on the website)\n6. These old cookies are stale.\n7. A little attention often helps a\nbruised ego.\n8. Each passing moment is a terrible waste.\n9. Our new house sits on the outermost edge of\nthis secluded island.\n10. Many submitted manuscripts are\npiled up on the cluttered desk of the finicky\neditor.\nTest yourself 28.5\nFor each of the underlined noun phrases below, decide if it is: determiner + noun or determiner +\nadjective + noun.\nSample: He was not in a reasonable mood. determiner + adjective + noun\nGetting started\n(answers on p. 119)\n1. T h ep leasurei nh i sv o i c ew a sr e a l . .........................................................................................................\n2. That annoying customer still got a good deal. .........................................................................................................\n3. Count your blessings! .........................................................................................................\n4. Jonathan' s jacket is brand new. ..........................................................................................................\n5. He plays with his new gadget every day. ..........................................................................................................\nMore practice (answers on the website)\n6. His divorce received much publicity. ..........................................................................................................\n7. I want the latest model for my oflce. ..........................................................................................................\n8. Let' s hopethis terrible weather changes soon. ..........................................................................................................\n9. I don't care for her new attitude. ..........................................................................................................\n10. The motorcade passed by quickly. ..........................................................................................................\nH e r ea r es o m ee xamplesw h e r et h en o u np h r a s ec onsistso fad eterminer ,m o r et h a no n e\nadjective, and a noun (the whole noun phrase is underlined):\n23. The dull brown liquid spilled onto his priceless antique carpet.\n24. Elderly, infirm individuals really need that important health benefit.\n25. Aworn checkered apron hung by the sagging, unpainted kitchen door.\nTest yourself 28.6\nUnderline the noun phrases in each of the sentences below. In this exercise, the noun phrase will\nalways consist of determiner + adjective(s) + noun. Some sentences may have more than one noun\nphrase.\nSample: The pushy, aggressive salesman at the automobile dealership was not helpful.\nGetting started\n(answers on p. 119)\n1 . T h es m a l lw h i t ed o gr a na w a y .\n2. The close friends loved watching the old,\nclassic movies.\n3. Some Japanese cars are rated very highly.\n4. My lovely niece arrived in a brand new\nconvertible.\n5. Those pesky ffies ruined myAustralian\nvacation.\nUNIT 9: NOUN PHRASES\n116</p>"
   }
  ],
  "tips": [
   {
    "code": "28.1",
    "text": "A noun phrase can consist of a noun alone, for example, audiences, John ."
   },
   {
    "code": "28.2",
    "text": "A noun phrase can consist of a determiner, one or more adjectives, and a noun. The determiner and adjective(s) are optional."
   }
  ],
  "practice": [
   {
    "code": "28.1",
    "instruction": "Underline the noun phrase in each of the sentences below. In this exercise, the noun phrase will always consist of a noun alone. Some sentences may have more than one noun phrase.",
    "sample": "Sample: Sugar is not very healthy. 113",
    "items": [
     {
      "n": 1,
      "text": "Pirates were looking for treasure.",
      "answer": "Pirates were looking for treasure"
     },
     {
      "n": 2,
      "text": "Furniture can be expensive.",
      "answer": "Furniture can be expensive"
     },
     {
      "n": 3,
      "text": "Boys often want to be policemen.",
      "answer": "Boys often want to be policemen"
     },
     {
      "n": 4,
      "text": "People think money is useful.",
      "answer": "People think money is useful"
     },
     {
      "n": 5,
      "text": "Jeremy was eating rice.",
      "answer": "Jeremy was eating rice"
     }
    ],
    "answers": {
     "1": "Pirates were looking for treasure",
     "2": "Furniture can be expensive",
     "3": "Boys often want to be policemen",
     "4": "People think money is useful",
     "5": "Jeremy was eating rice"
    }
   },
   {
    "code": "28.2",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of a determiner + noun; the determiner will always be an article, that is, the , a ,o r an . Some sentences may have more than one noun phrase.",
    "sample": "Sample: Am a ns t o l ethe car.",
    "items": [
     {
      "n": 1,
      "text": "The winner was overjoyed.",
      "answer": "The winner was overjoyed"
     },
     {
      "n": 2,
      "text": "The crowd dispersed peacefully.",
      "answer": "The crowd dispersed peacefully"
     },
     {
      "n": 3,
      "text": "A minute can seem like an eternity.",
      "answer": "Am i n u t ec a ns e e ml i k ean eternity"
     },
     {
      "n": 4,
      "text": "The dentist gave the patient a toothbrush.",
      "answer": "The dentist gave the patient a toothbrush"
     },
     {
      "n": 5,
      "text": "The couple forgot to tip the waiter.",
      "answer": "The couple forgot to tip the waiter"
     }
    ],
    "answers": {
     "1": "The winner was overjoyed",
     "2": "The crowd dispersed peacefully",
     "3": "Am i n u t ec a ns e e ml i k ean eternity",
     "4": "The dentist gave the patient a toothbrush",
     "5": "The couple forgot to tip the waiter"
    }
   },
   {
    "code": "28.3",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of a determiner (any kind) + noun. Some sentences may have more than one noun phrase.",
    "sample": "Sample: My hat blew odi in the wind.",
    "items": [
     {
      "n": 1,
      "text": "His doorman hailed a taxi.",
      "answer": "His doorman hailed at a x i"
     },
     {
      "n": 2,
      "text": "As the doctor toured the ward, a group of her interns went along.",
      "answer": "As the doctor toured the ward, ag r o u po fher interns went along"
     },
     {
      "n": 3,
      "text": "Y our daughter looks great in this picture.",
      "answer": "Yo urdaughterlooksgreatinthis picture"
     },
     {
      "n": 4,
      "text": "Some people keep their jewelry in a safe deposit box.",
      "answer": "Some people keep their jewelry in a safe deposit box"
     },
     {
      "n": 5,
      "text": "Jack' s friend is an artist.",
      "answer": "Jack’s friend isan artist"
     }
    ],
    "answers": {
     "1": "His doorman hailed at a x i",
     "2": "As the doctor toured the ward, ag r o u po fher interns went along",
     "3": "Yo urdaughterlooksgreatinthis picture",
     "4": "Some people keep their jewelry in a safe deposit box",
     "5": "Jack’s friend isan artist"
    }
   },
   {
    "code": "28.4",
    "instruction": "Underline the noun phrases in each of the sentencesbelow. In this exercise, the noun phrase will always consist of determiner + adjective + noun. Some sentences may have more than one noun phrase.",
    "sample": "Sample: My young cousin got on that scary roller-coaster.",
    "items": [
     {
      "n": 1,
      "text": "That adorable baby was born in a rundown house in a small town.",
      "answer": "That adorable baby was born in a rundown house in as m a l lt o w n"
     },
     {
      "n": 2,
      "text": "The elderly woman wrote a short novel.",
      "answer": "The elderly woman wrote a short novel"
     },
     {
      "n": 3,
      "text": "His crazy adventure began with those strange letters.",
      "answer": "His crazy adventure began with those strange letters"
     },
     {
      "n": 4,
      "text": "Some Enchanted Evening is a beautiful song from a classic show.",
      "answer": "Some Enchanted Evening is a beautiful song from a classic show"
     },
     {
      "n": 5,
      "text": "Jackie' s famous father is a talented immigrant from a South American country.",
      "answer": "Jackie’ s famous father isa talented immigrant from aS o u t hA mericanc ountry"
     }
    ],
    "answers": {
     "1": "That adorable baby was born in a rundown house in as m a l lt o w n",
     "2": "The elderly woman wrote a short novel",
     "3": "His crazy adventure began with those strange letters",
     "4": "Some Enchanted Evening is a beautiful song from a classic show",
     "5": "Jackie’ s famous father isa talented immigrant from aS o u t hA mericanc ountry"
    }
   },
   {
    "code": "28.5",
    "instruction": "For each of the underlined noun phrases below, decide if it is: determiner + noun or determiner + adjective + noun.",
    "sample": "Sample: He was not in a reasonable mood. determiner + adjective + noun",
    "items": [
     {
      "n": 1,
      "text": "T h ep leasurei nh i sv o i c ew a sr e a l .",
      "answer": "T h ep leasurei nh i sv o i c ew a sr e a l . determiner + noun"
     },
     {
      "n": 2,
      "text": "That annoying customer still got a good deal.",
      "answer": "That annoying customer still got a good deal. determiner + adjective + noun"
     },
     {
      "n": 3,
      "text": "Count your blessings!",
      "answer": "Count your blessings! determiner + noun"
     },
     {
      "n": 4,
      "text": "Jonathan' s jacket is brand new.",
      "answer": "Jonathan’ s jacket is brand new. determiner + noun"
     },
     {
      "n": 5,
      "text": "He plays with his new gadget every day.",
      "answer": "He plays with his new gadget every day. determiner + adjective + noun"
     }
    ],
    "answers": {
     "1": "T h ep leasurei nh i sv o i c ew a sr e a l . determiner + noun",
     "2": "That annoying customer still got a good deal. determiner + adjective + noun",
     "3": "Count your blessings! determiner + noun",
     "4": "Jonathan’ s jacket is brand new. determiner + noun",
     "5": "He plays with his new gadget every day. determiner + adjective + noun"
    }
   },
   {
    "code": "28.6",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of determiner + adjective(s) + noun. Some sentences may have more than one noun phrase.",
    "sample": "Sample: The pushy, aggressive salesman at the automobile dealership was not helpful.",
    "items": [
     {
      "n": 2,
      "text": "The close friends loved watching the old, classic movies.",
      "answer": "The close friends loved watching the old, classic movies. 119"
     },
     {
      "n": 3,
      "text": "Some Japanese cars are rated very highly.",
      "answer": "Some Japanese cars are rated very highly"
     },
     {
      "n": 4,
      "text": "My lovely niece arrived in a brand new convertible.",
      "answer": "My lovely niece arrived in a brand new convertible"
     },
     {
      "n": 5,
      "text": "Those pesky ffies ruined myAustralian vacation.",
      "answer": "Those pesky £ies ruined myAustralian vacation"
     }
    ],
    "answers": {
     "1": "T h es m a l lw h i t ed o gr a na w a y",
     "2": "The close friends loved watching the old, classic movies. 119",
     "3": "Some Japanese cars are rated very highly",
     "4": "My lovely niece arrived in a brand new convertible",
     "5": "Those pesky £ies ruined myAustralian vacation"
    }
   }
  ],
  "exercises": [
   {
    "q": "Pirates were looking for treasure.",
    "type": "input",
    "answer": "Pirates were looking for treasure",
    "source": "28.1",
    "instruction": "Underline the noun phrase in each of the sentences below. In this exercise, the noun phrase will always consist of a noun alone. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: Pirates were looking for treasure"
   },
   {
    "q": "Furniture can be expensive.",
    "type": "input",
    "answer": "Furniture can be expensive",
    "source": "28.1",
    "instruction": "Underline the noun phrase in each of the sentences below. In this exercise, the noun phrase will always consist of a noun alone. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: Furniture can be expensive"
   },
   {
    "q": "Boys often want to be policemen.",
    "type": "input",
    "answer": "Boys often want to be policemen",
    "source": "28.1",
    "instruction": "Underline the noun phrase in each of the sentences below. In this exercise, the noun phrase will always consist of a noun alone. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: Boys often want to be policemen"
   },
   {
    "q": "People think money is useful.",
    "type": "input",
    "answer": "People think money is useful",
    "source": "28.1",
    "instruction": "Underline the noun phrase in each of the sentences below. In this exercise, the noun phrase will always consist of a noun alone. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: People think money is useful"
   },
   {
    "q": "Jeremy was eating rice.",
    "type": "input",
    "answer": "Jeremy was eating rice",
    "source": "28.1",
    "instruction": "Underline the noun phrase in each of the sentences below. In this exercise, the noun phrase will always consist of a noun alone. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: Jeremy was eating rice"
   },
   {
    "q": "The winner was overjoyed.",
    "type": "input",
    "answer": "The winner was overjoyed",
    "source": "28.2",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of a determiner + noun; the determiner will always be an article, that is, the , a ,o r an . Some sentences may have more than ",
    "explanation": "Respuesta del libro: The winner was overjoyed"
   },
   {
    "q": "The crowd dispersed peacefully.",
    "type": "input",
    "answer": "The crowd dispersed peacefully",
    "source": "28.2",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of a determiner + noun; the determiner will always be an article, that is, the , a ,o r an . Some sentences may have more than ",
    "explanation": "Respuesta del libro: The crowd dispersed peacefully"
   },
   {
    "q": "A minute can seem like an eternity.",
    "type": "input",
    "answer": "Am i n u t ec a ns e e ml i k ean eternity",
    "source": "28.2",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of a determiner + noun; the determiner will always be an article, that is, the , a ,o r an . Some sentences may have more than ",
    "explanation": "Respuesta del libro: Am i n u t ec a ns e e ml i k ean eternity"
   },
   {
    "q": "The dentist gave the patient a toothbrush.",
    "type": "input",
    "answer": "The dentist gave the patient a toothbrush",
    "source": "28.2",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of a determiner + noun; the determiner will always be an article, that is, the , a ,o r an . Some sentences may have more than ",
    "explanation": "Respuesta del libro: The dentist gave the patient a toothbrush"
   },
   {
    "q": "The couple forgot to tip the waiter.",
    "type": "input",
    "answer": "The couple forgot to tip the waiter",
    "source": "28.2",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of a determiner + noun; the determiner will always be an article, that is, the , a ,o r an . Some sentences may have more than ",
    "explanation": "Respuesta del libro: The couple forgot to tip the waiter"
   },
   {
    "q": "His doorman hailed a taxi.",
    "type": "input",
    "answer": "His doorman hailed at a x i",
    "source": "28.3",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of a determiner (any kind) + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: His doorman hailed at a x i"
   },
   {
    "q": "As the doctor toured the ward, a group of her interns went along.",
    "type": "input",
    "answer": "As the doctor toured the ward, ag r o u po fher interns went along",
    "source": "28.3",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of a determiner (any kind) + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: As the doctor toured the ward, ag r o u po fher interns went along"
   },
   {
    "q": "Y our daughter looks great in this picture.",
    "type": "input",
    "answer": "Yo urdaughterlooksgreatinthis picture",
    "source": "28.3",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of a determiner (any kind) + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: Yo urdaughterlooksgreatinthis picture"
   },
   {
    "q": "Some people keep their jewelry in a safe deposit box.",
    "type": "input",
    "answer": "Some people keep their jewelry in a safe deposit box",
    "source": "28.3",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of a determiner (any kind) + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: Some people keep their jewelry in a safe deposit box"
   },
   {
    "q": "Jack' s friend is an artist.",
    "type": "input",
    "answer": "Jack’s friend isan artist",
    "source": "28.3",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of a determiner (any kind) + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: Jack’s friend isan artist"
   },
   {
    "q": "That adorable baby was born in a rundown house in a small town.",
    "type": "input",
    "answer": "That adorable baby was born in a rundown house in as m a l lt o w n",
    "source": "28.4",
    "instruction": "Underline the noun phrases in each of the sentencesbelow. In this exercise, the noun phrase will always consist of determiner + adjective + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: That adorable baby was born in a rundown house in as m a l lt o w n"
   },
   {
    "q": "The elderly woman wrote a short novel.",
    "type": "input",
    "answer": "The elderly woman wrote a short novel",
    "source": "28.4",
    "instruction": "Underline the noun phrases in each of the sentencesbelow. In this exercise, the noun phrase will always consist of determiner + adjective + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: The elderly woman wrote a short novel"
   },
   {
    "q": "His crazy adventure began with those strange letters.",
    "type": "input",
    "answer": "His crazy adventure began with those strange letters",
    "source": "28.4",
    "instruction": "Underline the noun phrases in each of the sentencesbelow. In this exercise, the noun phrase will always consist of determiner + adjective + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: His crazy adventure began with those strange letters"
   },
   {
    "q": "Some Enchanted Evening is a beautiful song from a classic show.",
    "type": "input",
    "answer": "Some Enchanted Evening is a beautiful song from a classic show",
    "source": "28.4",
    "instruction": "Underline the noun phrases in each of the sentencesbelow. In this exercise, the noun phrase will always consist of determiner + adjective + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: Some Enchanted Evening is a beautiful song from a classic show"
   },
   {
    "q": "Jackie' s famous father is a talented immigrant from a South American country.",
    "type": "input",
    "answer": "Jackie’ s famous father isa talented immigrant from aS o u t hA mericanc ountry",
    "source": "28.4",
    "instruction": "Underline the noun phrases in each of the sentencesbelow. In this exercise, the noun phrase will always consist of determiner + adjective + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: Jackie’ s famous father isa talented immigrant from aS o u t hA mericanc ountry"
   },
   {
    "q": "T h ep leasurei nh i sv o i c ew a sr e a l .",
    "type": "input",
    "answer": "T h ep leasurei nh i sv o i c ew a sr e a l . determiner + noun",
    "source": "28.5",
    "instruction": "For each of the underlined noun phrases below, decide if it is: determiner + noun or determiner + adjective + noun.",
    "explanation": "Respuesta del libro: T h ep leasurei nh i sv o i c ew a sr e a l . determiner + noun"
   },
   {
    "q": "That annoying customer still got a good deal.",
    "type": "input",
    "answer": "That annoying customer still got a good deal. determiner + adjective + noun",
    "source": "28.5",
    "instruction": "For each of the underlined noun phrases below, decide if it is: determiner + noun or determiner + adjective + noun.",
    "explanation": "Respuesta del libro: That annoying customer still got a good deal. determiner + adjective + noun"
   },
   {
    "q": "Count your blessings!",
    "type": "input",
    "answer": "Count your blessings! determiner + noun",
    "source": "28.5",
    "instruction": "For each of the underlined noun phrases below, decide if it is: determiner + noun or determiner + adjective + noun.",
    "explanation": "Respuesta del libro: Count your blessings! determiner + noun"
   },
   {
    "q": "Jonathan' s jacket is brand new.",
    "type": "input",
    "answer": "Jonathan’ s jacket is brand new. determiner + noun",
    "source": "28.5",
    "instruction": "For each of the underlined noun phrases below, decide if it is: determiner + noun or determiner + adjective + noun.",
    "explanation": "Respuesta del libro: Jonathan’ s jacket is brand new. determiner + noun"
   },
   {
    "q": "He plays with his new gadget every day.",
    "type": "input",
    "answer": "He plays with his new gadget every day. determiner + adjective + noun",
    "source": "28.5",
    "instruction": "For each of the underlined noun phrases below, decide if it is: determiner + noun or determiner + adjective + noun.",
    "explanation": "Respuesta del libro: He plays with his new gadget every day. determiner + adjective + noun"
   },
   {
    "q": "The close friends loved watching the old, classic movies.",
    "type": "input",
    "answer": "The close friends loved watching the old, classic movies. 119",
    "source": "28.6",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of determiner + adjective(s) + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: The close friends loved watching the old, classic movies. 119"
   },
   {
    "q": "Some Japanese cars are rated very highly.",
    "type": "input",
    "answer": "Some Japanese cars are rated very highly",
    "source": "28.6",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of determiner + adjective(s) + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: Some Japanese cars are rated very highly"
   },
   {
    "q": "My lovely niece arrived in a brand new convertible.",
    "type": "input",
    "answer": "My lovely niece arrived in a brand new convertible",
    "source": "28.6",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of determiner + adjective(s) + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: My lovely niece arrived in a brand new convertible"
   },
   {
    "q": "Those pesky ffies ruined myAustralian vacation.",
    "type": "input",
    "answer": "Those pesky £ies ruined myAustralian vacation",
    "source": "28.6",
    "instruction": "Underline the noun phrases in each of the sentences below. In this exercise, the noun phrase will always consist of determiner + adjective(s) + noun. Some sentences may have more than one noun phrase.",
    "explanation": "Respuesta del libro: Those pesky £ies ruined myAustralian vacation"
   }
  ],
  "answerKeys": {
   "28.8": {
    "1": "The pleasure in your voice was real. determiner + noun",
    "2": "I still have that infamous necklace. determiner + adjective + noun",
    "3": "I forgot to mention it to you. pronoun",
    "4": "Mr. Bentley is a successful businessman. noun",
    "5": "Cobras are dangerous snakes. adjective + noun"
   },
   "28.9": {
    "1": "Joe traveled often",
    "2": "The blazing sun can cause damage to your skin",
    "3": "The unlucky scientist walked back",
    "4": "We turnedandle f t",
    "5": "Those calculating politicians responded evasively."
   },
   "28.1": {
    "1": "Pirates were looking for treasure",
    "2": "Furniture can be expensive",
    "3": "Boys often want to be policemen",
    "4": "People think money is useful",
    "5": "Jeremy was eating rice"
   },
   "28.2": {
    "1": "The winner was overjoyed",
    "2": "The crowd dispersed peacefully",
    "3": "Am i n u t ec a ns e e ml i k ean eternity",
    "4": "The dentist gave the patient a toothbrush",
    "5": "The couple forgot to tip the waiter"
   },
   "28.3": {
    "1": "His doorman hailed at a x i",
    "2": "As the doctor toured the ward, ag r o u po fher interns went along",
    "3": "Yo urdaughterlooksgreatinthis picture",
    "4": "Some people keep their jewelry in a safe deposit box",
    "5": "Jack’s friend isan artist"
   },
   "28.4": {
    "1": "That adorable baby was born in a rundown house in as m a l lt o w n",
    "2": "The elderly woman wrote a short novel",
    "3": "His crazy adventure began with those strange letters",
    "4": "Some Enchanted Evening is a beautiful song from a classic show",
    "5": "Jackie’ s famous father isa talented immigrant from aS o u t hA mericanc ountry"
   },
   "28.5": {
    "1": "T h ep leasurei nh i sv o i c ew a sr e a l . determiner + noun",
    "2": "That annoying customer still got a good deal. determiner + adjective + noun",
    "3": "Count your blessings! determiner + noun",
    "4": "Jonathan’ s jacket is brand new. determiner + noun",
    "5": "He plays with his new gadget every day. determiner + adjective + noun"
   },
   "28.6": {
    "1": "T h es m a l lw h i t ed o gr a na w a y",
    "2": "The close friends loved watching the old, classic movies. 119",
    "3": "Some Japanese cars are rated very highly",
    "4": "My lovely niece arrived in a brand new convertible",
    "5": "Those pesky £ies ruined myAustralian vacation"
   },
   "28.7": {
    "1": "He ran away",
    "2": "I love watching them",
    "3": "They were extremely sociable",
    "4": "We w a n t to i nv it eyou over",
    "5": "He did it and didn’t even tellus about it"
   },
   "29.1": {
    "1": "The fabric was between the boxes",
    "2": "She always eats her lunch with a methodical thoroughness. 3 . T h e r ew a sat e m p l en e a rt h eh o t e l",
    "4": "The gift was for a close friend",
    "5": "The congressman is speaking to the press",
    "7": "She was sitting by the open window",
    "8": "I never heard from him again",
    "9": "The little boy was hiding under the round table",
    "10": "She traveled without her husband. To enhance your understanding Let's compare two sentences with the word up :",
    "14": "I looked up your phone number",
    "15": "I walked up the steep hill. These sentences certainly look very similar. Each has the word up followed by a noun phrase. But in fact, the sentences are different. For one thing, in sentence 14, up can be moved to the other side of the noun phrase without changing its meaning: UNIT 10: PREPOSITIONAL PHRASES 122 Can a sentence contain more than one prepositional phrase? W e started our discussion of prepositional phrases with the following sentences, each of which had only one prepo- sitional phrase (underlined):",
    "24": "The toy is on the red table",
    "25": "W e live near him",
    "26": "The cute guy walked Mary to the corner",
    "27": "The Jones family traveled around Arizona. W e can expand these sentences, adding another propositional phrase (underlined) to each:",
    "28": "The toy is on the red table in the living room",
    "29": "W e live near him in Manhattan",
    "30": "The cute guy from Argentina walked Mary to the corner",
    "31": "The Jones family traveled around Arizona in a rented minivan. In theory, there’ s no limit to the number of prepositional phrases that a sentence can have.Take a look at one with quite a few prepositional phrases:",
    "32": "They landed the plane in a grassy field near the park by the river in San Francisco. In reality, however, each sentence we say has a finite length ^ we have to stop talking at some point!",
    "16": "I looked your phone number up. In sentence 15, up cannot be moved:",
    "17": "*I walked the steep hill up. Also, in sentence 14, look up is a unit; up feels closely connected to look . In fact, look up can be replaced by a single verb and still have more or less the same meaning, for example, I researched your phone number . In sentence 14, up is part of the verb and is called a verb particle. You may recall that we talked about these verb plus particle combinations in Lesson 11 , where we said they were called phrasal verbs. In sentence 15, up is not connected to the verb, so it is not a particle; rather, it is a preposition. Here are some more examples of sentences with verb particles. Notice that in each of these cases, the verb plus particle can be replaced by a single verb and the particle can be moved. 18a. Her husband carried out the garbage. (Her husband removed the garbage.) 18b. Her husband carried the garbage out. 19a. The criminal covered up the crime. (The criminal hid the crime.) 19b. The criminal covered the crime up. 20a. Don’t just brush off her objections. (Don’t just dismiss her objections.) 20b. Don’t just brush her objections off. In contrast, here are some more examples of sentences with prepositions. Notice that in each case, the preposition cannot be moved to the other side of its noun phrase. 21a. He looked out the door. 21b. *He looked the door out. 22a. The hiker slowly walked up the hill. 22a. *The hiker slowly walked the hill up. 23a. Take the pot off the stove. 23b. *Take the pot the stove off. As we discussed above, the preposition is tied to the noun phrase following it, forming a prepositional phrase. Lesson 29: The basic structure of prepositional phrases 123"
   }
  }
 },
 {
  "unit": 10,
  "title": "Prepositional phrases",
  "part": "Part II: Kinds of phrases",
  "startPage": 134,
  "pdfPages": {
   "theory": [
    134,
    136
   ],
   "answers": 138
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>La frase preposicional = preposición + frase nominal. Indica lugar, tiempo, dirección o relación.</p></div>\n<div class=\"theory-es-section\"><h4>1. Estructura</h4><p><em><strong>in the store</strong></em>, <em><strong>of a friend</strong></em>, <em><strong>with great care</strong></em>. Siempre hay un objeto tras la preposición.</p></div>\n<div class=\"theory-es-section\"><h4>2. Cómo se analiza</h4><p>En oraciones del libro: <em>The fabric was <strong>between the boxes</strong></em> — entre… es la frase preposicional. Ubicá el bloque completo, no solo la preposición.</p></div>\n<div class=\"theory-es-section\"><h4>3. Errores comunes</h4><p>No cierres la preposición sola (*<em>in the morning of</em>). En inglés no hay equivalente a «de las» suelto como en español a veces.</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> Buscá la preposición y extendé la marca hasta el final del sustantivo (y sus adjetivos).</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>3. Some Japanese cars are rated very highly.\n4. My lovely niece arrived in a brand new convertible.\n5. Those pesky ffies ruined myAustralian vacation.\nTest yourself 28.7\n1. He ran away.\n2. I love watching them.\n3. They were extremely sociable.\n4. We w a n t to i nv it eyou over.\n5. He did it and didn't even tellus about it.\nTest yourself 28.8\n1. The pleasure in your voice was real. determiner + noun\n2. I still have that infamous necklace. determiner + adjective + noun\n3. I forgot to mention it to you. pronoun\n4. Mr. Bentley is a successful businessman. noun\n5. Cobras are dangerous snakes. adjective + noun\nTest yourself 28.9\n1. Joe traveled often.\n2. The blazing sun can cause damage to your skin.\n3. The unlucky scientist walked back.\n4. We turnedandle f t .\n5. Those calculating politicians responded evasively.\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.\nUNIT 9: NOUN PHRASES\n120</p>"
   },
   {
    "n": 29,
    "title": "The basic structure of prepositional",
    "html": "<p>phrases\nWhat do you notice about the following sentences?\n1. The toy is on the red table.\n2. W e live near him.\n3 . T h ec u t eg u yw a l k e dM a r yto the corner.\n4. The Jones family traveled around Arizona.\nEach of these sentences contains a preposition, which is underlined. Here again are the\ncommon prepositions which we listed in\nLesson 17\n:\nabout beneath into throughout\nabove beside like till\nacross between near to\nafter beyond of toward(s)\nagainst by odi under\nalong despite on until\namong down onto up\naround during out upon\nat for over with\nbefore from since within\nbehind in through without\nbelow\nWhat follows a preposition? In sentences 1^4, the prepositions are followed by:\n5. the red table (determiner + adjective + noun)\n6. him (pronoun)\n7. the corner (determiner + noun)\n8. Arizona (proper noun)\nAs you may remember from\nLesson 28\n, each of these is a kind of noun phrase. In fact,\na preposition is always followed by a noun phrase, called the\nobject of the preposition\n,\nand the preposition and its noun phrase form a unit which is called a\nprepositional phrase\n.\nQuick tip 29.1\nA prepositional phrase consists of a preposition plus a noun phrase , for example in the\ncloset</p>\n<p>.\nW e don't have to list the didierent kinds of noun phrases in Quick tip 29.1 , because we've\nalready identified them in\nLesson 28\n; we can just refer to noun phrases in general. So it' s\nreally useful to have this concept of a noun phrase, and it' s a concept that you'll see come\nup again in other lessons.\n121</p>\n<p>Here are some more examples of sentences with prepositional phrases (underlined):\n9. Let's carry the sofa into the house.\n10. That makes sense to us.\n11. There was a small lamp on her dresser.\n12. Jeanie was living in NewY ork.\n13. The boss had no love for his employees.\nY ou can see that each prepositional phrase consists of a preposition and a noun phrase.\nTest yourself 29.1\nUnderline the prepositional phrases in the sentences below. Look for the preposition that begins\nthe prepositional phrase.\nS a m p l e :H ek n e wal o tabout that subject.\nGetting started\n(answers on p. 125)\n1. The fabric was between the boxes.\n2. She always eats her lunch with a methodical\nthoroughness.\n3 . T h e r ew a sat e m p l en e a rt h eh o t e l .\n4. The gift was for a close friend.\n5. The congressman is speaking to the press.\nMore practice\n(answers on the website)\n6 . M ys o nh a dl u n c ha tM cDonald ' s .\n7. She was sitting by the open window.\n8. I never heard from him again.\n9. The little boy was hiding under the round\ntable.\n10. She traveled without her husband.\nTest yourself 29.2\nHere are the same sentences as in Test yourself 29.1 . This time, underline the preposition with\na solid line and the noun phrase with a squiggly line within each of the prepositional phrases\nin the sentences below.\nS a m p l e :H ek n e wal o tabout that subject:\nGetting started\n(answers on p. 125)\n1. The fabric was between the boxes.\n2. She always eats her lunch with a methodical\nthoroughness.\n3 . T h e r ew a sat e m p l en e a rt h eh o t e l .\n4. The gift was for a close friend.\n5. The congressman is speaking to the press.\nMore practice\n(answers on the website)\n6 . M ys o nh a dl u n c ha tM cDonald ' s .\n7. She was sitting by the open window.\n8. I never heard from him again.\n9. The little boy was hiding under the round\ntable.\n10. She traveled without her husband.\nTo enhance your understanding\nLet's compare two sentences with the word up :\n14. I looked up your phone number.\n15. I walked up the steep hill.\nThese sentences certainly look very similar. Each has the word\nup\nfollowed by a noun\nphrase. But in fact, the sentences are different. For one thing, in sentence 14,\nup\ncan be\nmoved to the other side of the noun phrase without changing its meaning:\nUNIT 10: PREPOSITIONAL PHRASES\n122</p>"
   }
  ],
  "tips": [
   {
    "code": "29.1",
    "text": "A prepositional phrase consists of a preposition plus a noun phrase , for example in the closet . W e don't have to list the didierent kinds of noun phrases in"
   },
   {
    "code": "29.1",
    "text": ", because we've already identified them in Lesson 28 ; we can just refer to noun phrases in general. So it' s really useful to have this concept of a noun phrase, and it' s a concept that you'll see come up again in other lessons. 121 Here are some more examples of sentences with prepositional phrases (underlined): 9. Let's carry the sofa into the house. 10. That makes sense to us. 11. There was a small lamp on her dresser. 12. Jeanie was living in NewY ork. 13. The boss had no love for his employees. Y ou can see that each prepositional phrase consists of a preposition and a noun phrase."
   }
  ],
  "practice": [
   {
    "code": "28.7",
    "instruction": "1. He ran away. 2. I love watching them. 3. They were extremely sociable. 4. We w a n t to i nv it eyou over. 5. He did it and didn't even tellus about it.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "28.8",
    "instruction": "1. The pleasure in your voice was real. determiner + noun 2. I still have that infamous necklace. determiner + adjective + noun 3. I forgot to mention it to you. pronoun 4. Mr. Bentley is a successful businessman. noun 5. Cobras are dangerous snakes. adjective + noun",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "28.9",
    "instruction": "1. Joe traveled often. 2. The blazing sun can cause damage to your skin. 3. The unlucky scientist walked back. 4. We turnedandle f t . 5. Those calculating politicians responded evasively. FOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "29.1",
    "instruction": "Underline the prepositional phrases in the sentences below. Look for the preposition that begins the prepositional phrase. S a m p l e :H ek n e wal o tabout that subject.",
    "sample": "",
    "items": [
     {
      "n": 1,
      "text": "The fabric was between the boxes.",
      "answer": "The fabric was between the boxes"
     },
     {
      "n": 2,
      "text": "She always eats her lunch with a methodical thoroughness. 3 . T h e r ew a sat e m p l en e a rt h eh o t e l .",
      "answer": "She always eats her lunch with a methodical thoroughness"
     },
     {
      "n": 4,
      "text": "The gift was for a close friend.",
      "answer": "The gift was for a close friend"
     },
     {
      "n": 5,
      "text": "The congressman is speaking to the press.",
      "answer": "The congressman is speaking to the press"
     }
    ],
    "answers": {
     "1": "The fabric was between the boxes",
     "2": "She always eats her lunch with a methodical thoroughness",
     "3": "There was a temple near the hotel",
     "4": "The gift was for a close friend",
     "5": "The congressman is speaking to the press"
    }
   },
   {
    "code": "29.2",
    "instruction": "Here are the same sentences as in Test yourself 29.1 . This time, underline the preposition with a solid line and the noun phrase with a squiggly line within each of the prepositional phrases in the sentences below. S a m p l e :H ek n e wal o tabout that subject:",
    "sample": "",
    "items": [
     {
      "n": 1,
      "text": "The fabric was between the boxes.",
      "answer": "The fabric was between the boxes:"
     },
     {
      "n": 2,
      "text": "She always eats her lunch with a methodical thoroughness. 3 . T h e r ew a sat e m p l en e a rt h eh o t e l .",
      "answer": "She always eats her lunch with a methodical thoroughness:"
     },
     {
      "n": 4,
      "text": "The gift was for a close friend.",
      "answer": "The gift was for a close friend:"
     },
     {
      "n": 5,
      "text": "The congressman is speaking to the press.",
      "answer": "The congressman is speaking to the press:"
     }
    ],
    "answers": {
     "1": "The fabric was between the boxes:",
     "2": "She always eats her lunch with a methodical thoroughness:",
     "3": "There was a temple near the hotel:",
     "4": "The gift was for a close friend:",
     "5": "The congressman is speaking to the press:"
    }
   }
  ],
  "exercises": [
   {
    "q": "The fabric was between the boxes.",
    "type": "input",
    "answer": "The fabric was between the boxes",
    "source": "29.1",
    "instruction": "Underline the prepositional phrases in the sentences below. Look for the preposition that begins the prepositional phrase. S a m p l e :H ek n e wal o tabout that subject.",
    "explanation": "Respuesta del libro: The fabric was between the boxes"
   },
   {
    "q": "She always eats her lunch with a methodical thoroughness. 3 . T h e r ew a sat e m p l en e a rt h eh o t e l .",
    "type": "input",
    "answer": "She always eats her lunch with a methodical thoroughness",
    "source": "29.1",
    "instruction": "Underline the prepositional phrases in the sentences below. Look for the preposition that begins the prepositional phrase. S a m p l e :H ek n e wal o tabout that subject.",
    "explanation": "Respuesta del libro: She always eats her lunch with a methodical thoroughness"
   },
   {
    "q": "The gift was for a close friend.",
    "type": "input",
    "answer": "The gift was for a close friend",
    "source": "29.1",
    "instruction": "Underline the prepositional phrases in the sentences below. Look for the preposition that begins the prepositional phrase. S a m p l e :H ek n e wal o tabout that subject.",
    "explanation": "Respuesta del libro: The gift was for a close friend"
   },
   {
    "q": "The congressman is speaking to the press.",
    "type": "input",
    "answer": "The congressman is speaking to the press",
    "source": "29.1",
    "instruction": "Underline the prepositional phrases in the sentences below. Look for the preposition that begins the prepositional phrase. S a m p l e :H ek n e wal o tabout that subject.",
    "explanation": "Respuesta del libro: The congressman is speaking to the press"
   },
   {
    "q": "The fabric was between the boxes.",
    "type": "input",
    "answer": "The fabric was between the boxes:",
    "source": "29.2",
    "instruction": "Here are the same sentences as in Test yourself 29.1 . This time, underline the preposition with a solid line and the noun phrase with a squiggly line within each of the prepositional phrases in the sentences below. S a m p l e :H ek n e wa",
    "explanation": "Respuesta del libro: The fabric was between the boxes:"
   },
   {
    "q": "She always eats her lunch with a methodical thoroughness. 3 . T h e r ew a sat e m p l en e a rt h eh o t e l .",
    "type": "input",
    "answer": "She always eats her lunch with a methodical thoroughness:",
    "source": "29.2",
    "instruction": "Here are the same sentences as in Test yourself 29.1 . This time, underline the preposition with a solid line and the noun phrase with a squiggly line within each of the prepositional phrases in the sentences below. S a m p l e :H ek n e wa",
    "explanation": "Respuesta del libro: She always eats her lunch with a methodical thoroughness:"
   },
   {
    "q": "The gift was for a close friend.",
    "type": "input",
    "answer": "The gift was for a close friend:",
    "source": "29.2",
    "instruction": "Here are the same sentences as in Test yourself 29.1 . This time, underline the preposition with a solid line and the noun phrase with a squiggly line within each of the prepositional phrases in the sentences below. S a m p l e :H ek n e wa",
    "explanation": "Respuesta del libro: The gift was for a close friend:"
   },
   {
    "q": "The congressman is speaking to the press.",
    "type": "input",
    "answer": "The congressman is speaking to the press:",
    "source": "29.2",
    "instruction": "Here are the same sentences as in Test yourself 29.1 . This time, underline the preposition with a solid line and the noun phrase with a squiggly line within each of the prepositional phrases in the sentences below. S a m p l e :H ek n e wa",
    "explanation": "Respuesta del libro: The congressman is speaking to the press:"
   }
  ],
  "answerKeys": {
   "29.3": {
    "1": "Andy ran into the field across the road",
    "2": "That first winter had been spent in New Hampshire",
    "3": "She told the story o ft h en i g h ts h efi r s ta rrivedat the house",
    "4": "The lady in the red dress bought a bottle of perfume with her credit card",
    "5": "I met my long lost friend at the airport."
   },
   "29.1": {
    "1": "The fabric was between the boxes",
    "2": "She always eats her lunch with a methodical thoroughness",
    "3": "There was a temple near the hotel",
    "4": "The gift was for a close friend",
    "5": "The congressman is speaking to the press"
   },
   "29.2": {
    "1": "The fabric was between the boxes:",
    "2": "She always eats her lunch with a methodical thoroughness:",
    "3": "There was a temple near the hotel:",
    "4": "The gift was for a close friend:",
    "5": "The congressman is speaking to the press:"
   },
   "30.1": {
    "1": "Freddy disappeared",
    "2": "A young woman cried",
    "3": "The soldiers wait",
    "4": "I slept",
    "5": "The little girl smiled. 126",
    "6": "The music stopped",
    "7": "We ag ree",
    "8": "Last night the guests left",
    "9": "chased the ball (verb + determiner + noun) Yo umayrememberfromLesson 28 that determiner + noun is a kind of noun phrase. Thus, in this sentence, the verb phrase consists of a verb followed by one kind of noun phrase. Let's look at the verb phrases in sentences 3^5:",
    "10": "chased the red ball (verb + determiner + adjective + noun)",
    "11": "chased it (verb + pronoun)",
    "12": "chased Henry (verb + noun) You can see that in each case, the verb phrase consists of a verb followed by a noun phrase. Quick tip 30.2 A verb phrase can consist of a verb plus a noun phrase, for example chased the ball . Again, we don’t have to list the di¡erent kinds of noun phrases here, because we’ve already listed them in Lesson 28 ;w ec a nj u s tr e f e rt on o u np hrasesi ng eneral"
   },
   "30.2": {
    "1": "He created a monster",
    "2": "Frank broke the plate",
    "3": "Sherry and I left the house",
    "4": "The detective examined the old broken doorknob",
    "5": "We resent those comments",
    "6": "I read an interesting book",
    "7": "Their younger sister crossed the hall",
    "8": "The Australian swimming team defeated the French",
    "9": "The rich wife bought some insurance",
    "10": "Courtney ordered soup. In Lesson 9 , we talked about the fact that some verbs are action verbs, like run , write , and discover , while others are linking verbs, like be , feel ,a n d become . The verb phrases we’ve looked at so far have all contained action verbs.V erb phrases with linking verbs are di¡erent from verb phrases with action verbs. Let's compare two sentences:",
    "11": "John saw the teacher",
    "12": "John is the teacher. In each sentence, the verb phrase is underlined, and each verb phrase consists of a verb + noun phrase. ( Saw and is are the verbs and the teacher is the noun phrase.) But can you see how the verb phrases in sentences 11 and 12 di¡er? You’ve probably noticed that in sentence 11, the teacher is receiving the action, but in sentence 12, there is no action (after all, is is a linking verb, not an action verb). So while the structures of sentences 11 and 12 appear to be similar on the surface, the sentences are quite di¡erent in meaning. The following verb phrases with linking verbs are di¡erent in structure as well as in meaning from verb phrases with action verbs:",
    "13": "John is tall",
    "14": "My sister became anxious. As you (hopefully!) remember from Lesson 16 , tall and anxious are adjectives. So when the verb is a linking verb, it can be followed by an adjective alone. An action verb cannot be followed by just an adjective, as you can see:",
    "15": "*John saw tall",
    "16": "*John saw upset. Quick tip 30.3 A verb phrase can consist of a linking verb plus an adjective , for example is tall . An adjective which follows a linking verb and is not part of a noun phrase is tradition- ally called a predicate adjective ,a si nt h ee xampleJohn is tall (sentence 13). In contrast, an adjective which is part of a noun phrase is traditionally called an attributive adjec- tive ,a si nt h ee xampleJohn has a tall sister"
   },
   "30.4": {
    "1": "The argument was silly",
    "2": "The dress felt comfortable",
    "3": "Steven became sick",
    "4": "The point of this exercise seems obvious",
    "5": "The children got excited",
    "6": "You look happy",
    "7": "Her voice sounds raspy",
    "8": "She felt embarrassed",
    "9": "The new director proved di⁄cult",
    "10": "Your pie tastes delicious"
   },
   "30.6": {
    "1": "Brady was a radio engineer",
    "2": "The king sent a clear message",
    "3": "Those £owers look gorgeous",
    "4": "Most able-bodied adults work",
    "5": "I recognized them",
    "6": "W e adore your lovely little girl",
    "7": "She grew impatient",
    "8": "Your son grew",
    "9": "Chuck became an electrical engineer",
    "10": "The diners wanted more bread"
   },
   "30.7": {
    "1": "Brady was a radio engineer",
    "2": "The king sent a clear message. Lesson 30: The basic structure of verb phrases 129",
    "3": "Those £owers look gorgeous",
    "4": "Most able-bodied adults work",
    "5": "I recognized them",
    "6": "We adore your lovely little girl. 7 . S h eg r e wi mpatient",
    "8": "Your son grew",
    "9": "Chuck became an electrical engineer",
    "10": "The diners wanted more bread. In Lesson 30 , we talked about prepositional phrases. Here are some sentences with their verbs in bold and their prepositional phrases underlined:",
    "20": "The Bede family lives around the corner",
    "21": "Please ride to the stable",
    "22": "He headed toward the policeman. Together, the verb plus prepositional phrase form a verb phrase. To enhance your understanding You may remember, from Lesson 8 , that some verbs, for example smell , can be used as either action verbs or linking verbs. For example:",
    "17": "That dog smells badly. (Meaning, he does a bad job of smelling things.)",
    "18": "That dog smells bad. (Meaning, for example, he needs a bath.) In sentence 17, smell is an action verb; it refers to the dog doing the action of smelling. In sentence 18, smell is a linking verb; it helps to tell us something about the dog but he’s not actually doing anything – he’s being something, namely, smelly. When a verb is used as a linking verb, it can have an adjective, like bad , after it. When it’s used as an action verb, it can be followed by an adverb, like badly , but not by an adjective. In Standard American English, good is used only as an adjective. So in Standard American English, it’s not considered acceptable to say:",
    "19": "You did good. That’s because did is an action verb, and an action verb cannot be completed with just an adjective. So why do we often hear people saying sentences like You did good ? What’s happening is that people are starting to use good as an adverb, not just as an adjective. Maybe in the future this usage will become more widely accepted, but right now using good as an adverb is not considered Standard American English. (In other words, don’t say this at a job interview, although it’s ﬁne to say with friends.) Similarly, people sometimes say, I feel badly , instead of I feel bad , even though they are using feel here as a linking verb, not as an action verb. They know that usually an adverb, like badly , follows a verb, but adverbs only directly follow action verbs, not linking verbs. (When people incorrectly overapply a rule, it’s called hypercorrection .) We can thus explain the difference between I feel good (‘‘I’m OK’’) and I feel well (‘‘I have the ability to touch effectively’’): in the former sentence feel is a linking verb, in the latter it is an action verb. UNIT 11: VERB PHRASES 130 Quick tip 30.4 A verb phrase can consist of a verb plus a prepositional phrase ,f o re xampledrove to the mall"
   },
   "30.8": {
    "1": "The boat £oated in the water",
    "2": "Janice is from Kansas City",
    "3": "Mrs. Miller is at the beach",
    "4": "He looked for me",
    "5": "The sun appeared above the horizon",
    "6": "They live near each other",
    "7": "I read between the lines",
    "8": "He learned from his grandfather",
    "9": "She played with her children",
    "10": "Our plane £ew over the Atlantic Ocean"
   },
   "30.9": {
    "1": "Elinor rented a car. 2 . T h ec l o w n sn e v e rl a u g hw i t ht h ea udience",
    "3": "The road trip ended",
    "4": "The band played my favorite song",
    "5": "They left at noon",
    "6": "Brandy’ s three-month-old baby smiled",
    "7": "Our neighbors just returned from their country home",
    "8": "I found the missing piece",
    "9": "W e ran through the woods",
    "10": "On holidays, theW atsons entertain"
   },
   "30.10": {
    "1": "Elinor rented a car. 2 . T h ec l o w n sn e v e rl a u g hw i t ht h ea udience",
    "3": "The road trip ended",
    "4": "The band played my favorite song",
    "5": "They left at noon. Lesson 30: The basic structure of verb phrases 131"
   }
  }
 },
 {
  "unit": 11,
  "title": "Verb phrases",
  "part": "Part II: Kinds of phrases",
  "startPage": 139,
  "pdfPages": {
   "theory": [
    139,
    146
   ],
   "answers": 148
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>La frase verbal (verb phrase) es el núcleo verbal de la oración: auxiliares + verbo principal (con sus objetos y complementos).</p></div>\n<div class=\"theory-es-section\"><h4>1. Estructura</h4><p>Ej.: <em><strong>has been studying</strong></em> → perfect + progressive + base -ing. El verbo principal es el último elemento con significado léxico pleno.</p></div>\n<div class=\"theory-es-section\"><h4>2. Auxiliares y modal</h4><p><strong>have</strong> (perfect), <strong>be</strong> (progressive / passive), <strong>modals</strong> (can, should, will…). Orden fijo: modal → have → be → V-ing / participio.</p></div>\n<div class=\"theory-es-section\"><h4>3. Con objetos</h4><p>La frase verbal puede llevar objeto directo e indirecto: <em>She <strong>gave her friend a book</strong></em>.</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> En el análisis del libro, delimitá desde el primer auxiliar hasta el verbo principal (y su objeto inmediato si lo hay).</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>Answer keys: Test yourself, Getting started\nquestions – Unit 10\nTest yourself 29.1\n1. The fabric was between the boxes.\n2. She always eats her lunch with a methodical thoroughness.\n3. There was a temple near the hotel.\n4. The gift was for a close friend.\n5. The congressman is speaking to the press.\nTest yourself 29.2\n1. The fabric was between the boxes:\n2. She always eats her lunch with a methodical thoroughness:\n3. There was a temple near the hotel:\n4. The gift was for a close friend:\n5. The congressman is speaking to the press:\nTest yourself 29.3\n1. Andy ran into the field across the road.\n2. That first winter had been spent in New Hampshire.\n3. She told the story o ft h en i g h ts h efi r s ta r r i v e dat the house.\n4. The lady in the red dress bought a bottle of perfume with her credit card.\n5. I met my long lost friend at the airport.\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.\n125</p>"
   },
   {
    "n": 30,
    "title": "The basic structure of verb phrases",
    "html": "<p>Remember the sentence, The little boy laughed ?A sw et a l k e da b o u te a r l i e r ,The little boy\nis a noun phrase (see\nLesson 28\n)a n d\nlaughed\nis a verb phrase. There are didierent kinds\nof verb phrases, and we can begin to discove\nrt h e mb ys e e i n gw h a tw ec a ns ubstitutef o r\nthe verb phrase,\nlaughed</p>\n<p>, in this sentence. The underlined portions of the sentences\nbelow are all verb phrases, and any one of them can replace\nlaughed\nin the sentence,\nThe little boy laughed\n.\n1 . T h el i t t l eb o yleft.\n2 . T h el i t t l eb o ychased the ball.\n3 . T h el i t t l eb o ychased the red ball.\n4 . T h el i t t l eb o ychased it.\n5 . T h el i t t l eb o ychased Henry.\nOf course, there are lots of things that cannot replace\nlaughed\nin this sentence, for\nexample:\n6. *The little boy his extremely.\n7. *The little boy near from.\n8. *The little boy they.\nY ou're probably not surprised to learn that\nhis extremely\n,\nnear from\n,a n d\nthey\nare not verb\nphrases.\nHave you noticed anything that all the underlined verb phrases in sentences 1^5 have\nin common? Each verb phrase has a verb. In fact, in sentence 1, the verb phrase has noth-\ning in it but a verb,\nleft\n. A verb phrase may also have other words, as you can see in\nsentences 2^5, but the least that every verb phrase has to have is a verb. (See\nUnit 2\nto\nremind yourself about verbs.)\nQuick tip 30.1\nEvery verb phrase contains a verb, for example laughs, left .\nIn sentences 1^5, the verb is the first word in the verb phrase and is its most\nimportant part.\nTest yourself 30.1\nUnderline the verb phrase in each of the sentences below. In this exercise, the verb phrase will\nconsist of only a verb.\nSample: The family arrived.\nGetting started\n(answers on p. 135)\n1. Freddy disappeared.\n2. A young woman cried.\n3. The soldiers wait.\n4. I slept.\n5. The little girl smiled.\n126</p>\n<p>More practice (answers on the website)\n6. The music stopped.\n7. We ag ree.\n8. Last night the guests left.\n9. Time ffies.\n10. A problem arose.\nIf we look at sentences 2^5, we see that a verb phrase can have more in it than just a verb.\nLet' s start with sentence 2,\nThe little boy chased the ball .The verb phrase is:\n9. chased the ball (verb + determiner + noun)\nYo umayrememberfrom\nLesson 28\nthat determiner + noun is a kind of noun phrase.\nThus, in this sentence, the verb phrase consists of a verb followed by one kind of noun\nphrase.\nLet' s look at the verb phrases in sentences 3^5:\n10. chased the red ball (verb + determiner + adjective + noun)\n11. chased it (verb + pronoun)\n12. chased Henry (verb + noun)\nY ou can see that in each case, the verb phrase consists of a verb followed by a noun phrase.\nQuick tip 30.2\nA verb phrase can consist of a verb plus a noun phrase, for example chased the ball .\nAgain, we don't have to list the didierent kinds of noun phrases here, because we've\nalready listed them in\nLesson 28\n;w ec a nj u s tr e f e rt on o u np h r a s e si ng e n e r a l .\nTest yourself 30.2\nUnderline the verb phrase in each of the sentences below. It may help to first find the verb, which is\nthe first word of these verb phrases. In each sentence here, the verb phrase consists of a verb +\nnoun phrase.\nSample:W e welcomed them.\nGetting started\n(answers on p. 135)\n1. He created a monster.\n2. Frank broke the plate.\n3. Sherry and I left the house.\n4. The detective examined the old broken\ndoorknob.\n5. We resent those comments.\nMore practice\n(answers on the website)\n6. I read an interesting book.\n7. Their younger sister crossed the hall.\n8. The Australian swimming team defeated\nthe French.\n9. The rich wife bought some insurance.\n10. Courtney ordered soup.\nTest yourself 30.3\nHere are the same sentences as in Test yourself 30.2 .This time, in each sentence underline the verb\nwith a solid line and the noun phrase within each verb phrase with a squiggly line.\nSample:W e welcomed them:</p>\n<p>Getting started (answers on p. 135)\n1. He created a monster.\n2. Frank broke the plate.\n3. Sherry and I left the house.\n4. The detective examined the old broken\ndoorknob.\n5. We resent those comments.\n More practice (answers on the website)\n6. I read an interesting book.\n7. Their younger sister crossed the hall.\n8. The Australian swimming team defeated\nthe French.\n9. The rich wife bought some insurance.\n10. Courtney ordered soup.\nIn\nLesson 9\n, we talked about the fact that some verbs are action verbs, like\nrun\n,\nwrite\n,\nand\ndiscover\n, while others are linking verbs, like\nbe\n,\nfeel\n,a n d\nbecome\n. The verb phrases\nwe've looked at so far have all contained action verbs.V erb phrases with linking verbs are\ndidierent from verb phrases with action verbs. Let' s compare two sentences:\n11. John saw the teacher.\n12. John is the teacher.\nIn each sentence, the verb phrase is underlined, and each verb phrase consists of a\nverb + noun phrase. (\nSaw\nand\nis\nare the verbs and\nthe teacher\nis the noun phrase.) But can\nyou see how the verb phrases in sentences 11 and 12 didier? Y ou've probably noticed that\nin sentence 11,\nthe teacher\nis receiving the action, but in sentence 12, there is no action\n(after all,\nis\nis a linking verb, not an action verb). So while the structures of sentences 11\nand 12 appear to be similar on the surface, the sentences are quite didierent in meaning.\nThe following verb phrases with linking verbs are didierent in structure as well as in\nmeaning from verb phrases with action verbs:\n13. John is tall.\n14. My sister became anxious.\nAs you (hopefully!) remember from\nLesson 16\n,\ntall\nand\nanxious\nare adjectives. So when the\nverb is a linking verb, it can be followed by an adjective alone. An action verb cannot be\nfollowed by just an adjective, as you can see:\n15. *John saw tall.\n16. *John saw upset.\nQuick tip 30.3\nA verb phrase can consist of a linking verb plus an adjective , for example is tall .\nAn adjective which follows a linking verb and is not part of a noun phrase is tradition-\nally called a\npredicate adjective\n,a si nt h ee xample\nJohn is tall (sentence 13). In contrast,\nan adjective which is part of a noun phrase is traditionally called an\nattributive adjec-\ntive\n,a si nt h ee xample\nJohn has a tall sister .\nTest yourself 30.4\nUnderline the verb phrase in each of the sentences below. It may help to first find the verb, which\nis the first word of these verb phrases. In each sentence here, the verb phrase consists of linking\nverb + adjective.\nSample:W e are hungry.\nUNIT 11: VERB PHRASES\n128</p>\n<p>Getting started (answers on p. 135)\n1. The argument was silly.\n2. The dress felt comfortable.\n3. Steven became sick.\n4. The point of this exercise seems obvious.\n5. The children got excited.\n More practice (answers on the website)\n6. Y ou look happy.\n7. Her voice sounds raspy.\n8. She felt embarrassed.\n9. The new director proved diflcult.\n10. Y our pie tastes delicious.\nTest yourself 30.5\nHere are the same sentences as in Test yourself 30.4 . This time, within each verb phrase, underline\nthe verb with a solid line and the adjective with a squiggly line.\nSample:W e are hungry:\nGetting started\n(answers on p. 135)\n1. The argument was silly.\n2. The dress felt comfortable.\n3. Steven became sick.\n4. The point of this exercise seems obvious.\n5. The children got excited.\nMore practice\n(answers on the website)\n6. Y ou look happy.\n7. Her voice sounds raspy.\n8. She felt embarrassed.\n9. The new director proved diflcult.\n10. Y our pie tastes delicious.\nTest yourself 30.6\nUnderline the verb phrase in each of the sentences below. In some sentences, the verb will be an\naction verb alone or it will be followed by a noun phrase (for example,\nsaw the cat\n). In other\nsentences the verb will be a linking verb and may be followed by a noun phrase or by an adjective\nalone (for example,\nlooked hungry\n).\nSample: He prepared his speech.\nGetting started\n(answers on p. 135)\n1. Brady was a radio engineer.\n2. The king sent a clear message.\n3. Those ffowers look gorgeous.\n4. Most able-bodied adults work.\n5. I recognized them.\nMore practice\n(answers on the website)\n6. W e adore your lovely little girl.\n7. She grew impatient.\n8. Y our son grew.\n9. Chuck became an electrical engineer.\n10. The diners wanted more bread.\nTest yourself 30.7\nHere are the same sentences as in Te st yourself 30.6 . This time, indicate if the verb phrase you've\nidentified is: verb (alone), verb + noun phrase, or verb + adjective.\nSample: He prepared his speech. verb + noun phrase\nGetting started\n(answers on p. 136)\n1. Brady was a radio engineer. ......................................\n2. The king sent a clear message. ......................................</p>\n<p>3. Those ffowers look gorgeous. ......................................\n4. Most able-bodied adults work. ......................................\n5. I recognized them. ......................................\nMore practice (answers on the website)\n6. We adore your lovely little girl. ......................................\n7 . S h eg r e wi mpatient . ......................................\n8. Y our son grew. ......................................\n9. Chuck became an electrical engineer. ......................................\n10. The diners wanted more bread. ......................................\nIn Lesson 30 , we talked about prepositional phrases. Here are some sentences with their\nverbs in bold and their prepositional phrases underlined:\n20. The Bede family\nlives around the corner.\n21. Please\nride to the stable.\n22. He\nheaded toward the policeman.\nTogether, the verb plus prepositional phrase form a verb phrase.\nTo enhance your understanding\nYou may remember, from Lesson 8 , that some verbs, for example smell , can be used as\neither action verbs or linking verbs. For example:\n17. That dog smells badly. (Meaning, he does a bad job of smelling things.)\n18. That dog smells bad. (Meaning, for example, he needs a bath.)\nIn sentence 17,\nsmell\nis an action verb; it refers to the dog doing the action of smelling. In\nsentence 18,\nsmell\nis a linking verb; it helps to tell us something about the dog but he's not\nactually doing anything – he's being something, namely, smelly.\nWhen a verb is used as a linking verb, it can have an adjective, like\nbad</p>\n<p>, after it. When it's\nused as an action verb, it can be followed by an adverb, like\nbadly\n, but not by an adjective.\nIn Standard American English,\ngood\nis used only as an adjective. So in Standard American\nEnglish, it's not considered acceptable to say:\n19. You did good.\nThat's because\ndid\nis an action verb, and an action verb cannot be completed with just an\nadjective. So why do we often hear people saying sentences like\nYou did good</p>\n<p>? What's\nhappening is that people are starting to use\ngood\nas an adverb, not just as an adjective.\nMaybe in the future this usage will become more widely accepted, but right now using\ngood\nas an adverb is not considered Standard American English. (In other words, don't say\nthis at a job interview, although it's ﬁne to say with friends.)\nSimilarly, people sometimes say,\nI feel badly\n, instead of\nI feel bad</p>\n<p>, even though they are\nusing\nfeel\nhere as a linking verb, not as an action verb. They know that usually an adverb,\nlike\nbadly\n, follows a verb, but adverbs only directly follow action verbs, not linking verbs.\n(When people incorrectly overapply a rule, it's called\nhypercorrection\n.)\nWe can thus explain the difference between\nI feel good\n(''I'm OK'') and\nI feel well\n(''I have the ability to touch effectively''): in the former sentence\nfeel\nis a linking verb, in\nthe latter it is an action verb.\nUNIT 11: VERB PHRASES\n130</p>\n<p>Quick tip 30.4\nA verb phrase can consist of a verb plus a prepositional phrase ,f o re xampledrove to the mall .\nTest yourself 30.8\nUnderline the verb phrase in each of the sentences below. It may help to first find the verb, which is\nthe first word of these verb phrases. In each sentence here, the verb phrase consists of a verb +\nprepositional phrase.\nSample: He frequently came to my oflce.\nGetting started\n(answers on p. 136)\n1. The boat ffoated in the water.\n2. Janice is from Kansas City.\n3. Mrs. Miller is at the beach.\n4. He looked for me.\n5. The sun appeared above the horizon.\nMore practice\n(answers on the website)\n6. They live near each other.\n7. I read between the lines.\n8. He learned from his grandfather.\n9. She played with her children.\n10. Our plane ffew over the Atlantic Ocean.\nTest yourself 30.9\nUnderline the verb phrase in each of the sentences below.The verb phrase will either be: verb (alone),\nverb + noun phrase, or verb + prepositional phrase. Look for the verb to help you get started.\nSample: This is for the whole family.\nGetting started\n(answers on p. 136)\n1. Elinor rented a car.\n2 . T h ec l o w n sn e v e rl a u g hw i t ht h ea udience .\n3. The road trip ended.\n4. The band played my favorite song.\n5. They left at noon.\nMore practice\n(answers on the website)\n6. Brandy' s three-month-old baby smiled.\n7. Our neighbors just returned from their\ncountry home.\n8. I found the missing piece.\n9. W e ran through the woods.\n10. On holidays, theW atsons entertain.\nTest yourself 30.10\nHere are the same sentences as in Te st yours elf 30.9 . This time, indicate if the verb phrase you've\nidentified is: verb (alone), verb + noun phrase, or verb + prepositional phrase.\nSample: This is for the whole family. verb + prepositional phrase\nGetting started\n(answers on p. 136)\n1. Elinor rented a car. ...............................................................................................................................\n2 . T h ec l o w n sn e v e rl a u g hw i t ht h ea udience .......................................... …</p>\n<p>More practice (answers on the website)\n6. Brandy' s three-month-old baby smiled. ............................................................................................\n7. Our neighbors just returned from their country home. ............................................................................................\n8. I found the missing piece. ............................................................................................\n9. We ran through the woods. ............................................................................................\n10. On holidays,TheW atsons entertain. .............................................................................................\nTest yourself 30.11\nUnderline the verb phrase in each of the sentences below. The verb phrase will either be: verb +\nadjective or verb + prepositional phrase. Look for the verb to help you get started.\nSample:Y ou look pretty.\nGetting started\n(answers on p. 136)\n1. Her mother looked under the bed.\n2. Jan leaped for the shore.\n3. The morning seemed peaceful.\n4. The stock market fell hard.\n5. She arrived with an empty suitcase.\nMore practice\n(answers on the website)\n6. A fight arose among the players.\n7. The TV host appeared annoyed.\n8. The bull ran down the narrow street.\n9. It rolled under the bed.\n10. The show was disastrous.\nCan a verb phrase have a verb followed by both a noun phrase and a prepositional phrase?\n23. He walked Mary to the corner.\n24. The dog chased the man with the umbrella.\nIn these sentences, the verb phrase consists of a verb followed by a noun phrase and also a\nprepositional phrase.\nQuick tip 30.5\nA verb phrase can consist of a verb plus a noun phrase plus a prepositional phrase , for\nexample\ndrove her friend to the mall\n.\nC a nw es a yt h ef ollowing ?\n25. *He walked to the corner Mary.\n26. *The dog chased with the umbrella the man.\nThese sentences show us that when a verb is followed by a noun phrase and a preposi-\ntional phrase, the noun phrase always has to be before the prepositional phrase.\nTest yourself 30.12\nUnderline the verb phrase in each of the sentences below. In each sentence here, the verb phrase\nconsists of a verb + noun phrase + prepositional phrase. It may help to first find the verb, which is\nthe first word of these verb phrases.\nSample: I called my wife during intermission.\nUNIT 11: VERB PHRASES\n132</p>"
   }
  ],
  "tips": [
   {
    "code": "30.1",
    "text": "Every verb phrase contains a verb, for example laughs, left . In sentences 1^5, the verb is the first word in the verb phrase and is its most important part."
   },
   {
    "code": "30.2",
    "text": "A verb phrase can consist of a verb plus a noun phrase, for example chased the ball . Again, we don't have to list the didierent kinds of noun phrases here, because we've already listed them in Lesson 28 ;w ec a nj u s tr e f e rt on o u np h r a s e si ng e n e r a l ."
   },
   {
    "code": "30.3",
    "text": "A verb phrase can consist of a linking verb plus an adjective , for example is tall . An adjective which follows a linking verb and is not part of a noun phrase is tradition- ally called a predicate adjective ,a si nt h ee xample John is tall (sentence 13). In contrast, an adjective which is part of a noun phrase is traditionally called an attributive adjec- tive ,a si nt h ee xample John has a tall sister ."
   },
   {
    "code": "30.4",
    "text": "A verb phrase can consist of a verb plus a prepositional phrase ,f o re xampledrove to the mall ."
   },
   {
    "code": "30.5",
    "text": "A verb phrase can consist of a verb plus a noun phrase plus a prepositional phrase , for example drove her friend to the mall . C a nw es a yt h ef ollowing ? 25. *He walked to the corner Mary. 26. *The dog chased with the umbrella the man. These sentences show us that when a verb is followed by a noun phrase and a preposi- tional phrase, the noun phrase always has to be before the prepositional phrase."
   }
  ],
  "practice": [
   {
    "code": "29.1",
    "instruction": "1. The fabric was between the boxes. 2. She always eats her lunch with a methodical thoroughness. 3. There was a temple near the hotel. 4. The gift was for a close friend. 5. The congressman is speaking to the press.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "29.2",
    "instruction": "1. The fabric was between the boxes: 2. She always eats her lunch with a methodical thoroughness: 3. There was a temple near the hotel: 4. The gift was for a close friend: 5. The congressman is speaking to the press:",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "29.3",
    "instruction": "1. Andy ran into the field across the road. 2. That first winter had been spent in New Hampshire. 3. She told the story o ft h en i g h ts h efi r s ta r r i v e dat the house. 4. The lady in the red dress bought a bottle of perfume with her credit card. 5. I met my long lost friend at the airport. FOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE. 125",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "30.1",
    "instruction": "Underline the verb phrase in each of the sentences below. In this exercise, the verb phrase will consist of only a verb.",
    "sample": "Sample: The family arrived.",
    "items": [
     {
      "n": 1,
      "text": "Freddy disappeared.",
      "answer": "Freddy disappeared"
     },
     {
      "n": 2,
      "text": "A young woman cried.",
      "answer": "Ayoung woman cried"
     },
     {
      "n": 3,
      "text": "The soldiers wait.",
      "answer": "The soldiers wait"
     },
     {
      "n": 4,
      "text": "I slept.",
      "answer": "I slept"
     },
     {
      "n": 5,
      "text": "The little girl smiled. 126",
      "answer": "The little girl smiled"
     }
    ],
    "answers": {
     "1": "Freddy disappeared",
     "2": "Ayoung woman cried",
     "3": "The soldiers wait",
     "4": "I slept",
     "5": "The little girl smiled"
    }
   },
   {
    "code": "30.2",
    "instruction": "Underline the verb phrase in each of the sentences below. It may help to first find the verb, which is the first word of these verb phrases. In each sentence here, the verb phrase consists of a verb + noun phrase.",
    "sample": "Sample:W e welcomed them.",
    "items": [
     {
      "n": 1,
      "text": "He created a monster.",
      "answer": "He created a monster"
     },
     {
      "n": 2,
      "text": "Frank broke the plate.",
      "answer": "Frank broke the plate"
     },
     {
      "n": 3,
      "text": "Sherry and I left the house.",
      "answer": "Sherry and I left the house"
     },
     {
      "n": 4,
      "text": "The detective examined the old broken doorknob.",
      "answer": "The detective examined the old broken doorknob"
     },
     {
      "n": 5,
      "text": "We resent those comments.",
      "answer": "We resent those comments"
     }
    ],
    "answers": {
     "1": "He created a monster",
     "2": "Frank broke the plate",
     "3": "Sherry and I left the house",
     "4": "The detective examined the old broken doorknob",
     "5": "We resent those comments"
    }
   },
   {
    "code": "30.3",
    "instruction": "Here are the same sentences as in Test yourself 30.2 .This time, in each sentence underline the verb with a solid line and the noun phrase within each verb phrase with a squiggly line.",
    "sample": "Sample:W e welcomed them:",
    "items": [],
    "answers": {
     "1": "He created a monster:",
     "2": "Frank broke the plate:",
     "3": "Sherry and I left the house:",
     "4": "The detective examined the old broken doorknob:",
     "5": "We resent those comments:"
    }
   },
   {
    "code": "30.4",
    "instruction": "Underline the verb phrase in each of the sentences below. It may help to first find the verb, which is the first word of these verb phrases. In each sentence here, the verb phrase consists of linking verb + adjective.",
    "sample": "Sample:W e are hungry.",
    "items": [],
    "answers": {
     "1": "The argument was silly",
     "2": "The dress felt comfortable",
     "3": "Steven became sick",
     "4": "The point of this exercise seems obvious",
     "5": "The children got excited"
    }
   },
   {
    "code": "30.5",
    "instruction": "Here are the same sentences as in Test yourself 30.4 . This time, within each verb phrase, underline the verb with a solid line and the adjective with a squiggly line.",
    "sample": "Sample:W e are hungry:",
    "items": [
     {
      "n": 1,
      "text": "The argument was silly.",
      "answer": "The argument was silly:"
     },
     {
      "n": 2,
      "text": "The dress felt comfortable.",
      "answer": "The dress felt comfortable:"
     },
     {
      "n": 3,
      "text": "Steven became sick.",
      "answer": "Steven became sick:"
     },
     {
      "n": 4,
      "text": "The point of this exercise seems obvious.",
      "answer": "The point of this exercise seems obvious:"
     },
     {
      "n": 5,
      "text": "The children got excited.",
      "answer": "The children got excited:"
     }
    ],
    "answers": {
     "1": "The argument was silly:",
     "2": "The dress felt comfortable:",
     "3": "Steven became sick:",
     "4": "The point of this exercise seems obvious:",
     "5": "The children got excited:"
    }
   },
   {
    "code": "30.6",
    "instruction": "Underline the verb phrase in each of the sentences below. In some sentences, the verb will be an action verb alone or it will be followed by a noun phrase (for example, saw the cat ). In other sentences the verb will be a linking verb and may be followed by a noun phrase or by an adjective alone (for example, looked hungry ).",
    "sample": "Sample: He prepared his speech.",
    "items": [
     {
      "n": 1,
      "text": "Brady was a radio engineer.",
      "answer": "Brady was a radio engineer"
     },
     {
      "n": 2,
      "text": "The king sent a clear message.",
      "answer": "The king sent a clear message. 135"
     },
     {
      "n": 3,
      "text": "Those ffowers look gorgeous.",
      "answer": "Those £owers look gorgeous"
     },
     {
      "n": 4,
      "text": "Most able-bodied adults work.",
      "answer": "Most able-bodied adults work"
     },
     {
      "n": 5,
      "text": "I recognized them.",
      "answer": "I recognized them"
     }
    ],
    "answers": {
     "1": "Brady was a radio engineer",
     "2": "The king sent a clear message. 135",
     "3": "Those £owers look gorgeous",
     "4": "Most able-bodied adults work",
     "5": "I recognized them"
    }
   },
   {
    "code": "30.7",
    "instruction": "Here are the same sentences as in Te st yourself 30.6 . This time, indicate if the verb phrase you've identified is: verb (alone), verb + noun phrase, or verb + adjective.",
    "sample": "Sample: He prepared his speech. verb + noun phrase",
    "items": [
     {
      "n": 1,
      "text": "Brady was a radio engineer.",
      "answer": "Brady was a radio engineer. verb + noun phrase"
     },
     {
      "n": 2,
      "text": "The king sent a clear message.",
      "answer": "The king sent a clear message. verb + noun phrase"
     }
    ],
    "answers": {
     "1": "Brady was a radio engineer. verb + noun phrase",
     "2": "The king sent a clear message. verb + noun phrase",
     "3": "Those £owers look gorgeous. verb +adjective",
     "4": "Most able-bodied adults work. verb",
     "5": "I recognized them. verb + noun phrase"
    }
   },
   {
    "code": "30.8",
    "instruction": "Underline the verb phrase in each of the sentences below. It may help to first find the verb, which is the first word of these verb phrases. In each sentence here, the verb phrase consists of a verb + prepositional phrase.",
    "sample": "Sample: He frequently came to my oflce.",
    "items": [
     {
      "n": 1,
      "text": "The boat ffoated in the water.",
      "answer": "The boat £oated in the water"
     },
     {
      "n": 2,
      "text": "Janice is from Kansas City.",
      "answer": "Janice is from Kansas City"
     },
     {
      "n": 3,
      "text": "Mrs. Miller is at the beach.",
      "answer": "Mrs. Miller is at the beach"
     },
     {
      "n": 4,
      "text": "He looked for me.",
      "answer": "He looked for me"
     },
     {
      "n": 5,
      "text": "The sun appeared above the horizon.",
      "answer": "The sun appeared above the horizon"
     }
    ],
    "answers": {
     "1": "The boat £oated in the water",
     "2": "Janice is from Kansas City",
     "3": "Mrs. Miller is at the beach",
     "4": "He looked for me",
     "5": "The sun appeared above the horizon"
    }
   },
   {
    "code": "30.9",
    "instruction": "Underline the verb phrase in each of the sentences below.The verb phrase will either be: verb (alone), verb + noun phrase, or verb + prepositional phrase. Look for the verb to help you get started.",
    "sample": "Sample: This is for the whole family.",
    "items": [
     {
      "n": 1,
      "text": "Elinor rented a car. 2 . T h ec l o w n sn e v e rl a u g hw i t ht h ea udience .",
      "answer": "Elinor rented a car"
     },
     {
      "n": 3,
      "text": "The road trip ended.",
      "answer": "The road trip ended"
     },
     {
      "n": 4,
      "text": "The band played my favorite song.",
      "answer": "The band played my favorite song"
     },
     {
      "n": 5,
      "text": "They left at noon.",
      "answer": "They left at noon"
     }
    ],
    "answers": {
     "1": "Elinor rented a car",
     "2": "The clowns never l a u g hw i t ht h ea udience",
     "3": "The road trip ended",
     "4": "The band played my favorite song",
     "5": "They left at noon"
    }
   },
   {
    "code": "30.10",
    "instruction": "Here are the same sentences as in Te st yours elf 30.9 . This time, indicate if the verb phrase you've identified is: verb (alone), verb + noun phrase, or verb + prepositional phrase.",
    "sample": "Sample: This is for the whole family. verb + prepositional phrase",
    "items": [
     {
      "n": 1,
      "text": "Elinor rented a car.  2 . T h ec l o w n sn e v e rl a u g hw i t ht h ea udience",
      "answer": "Elinor rented a car. verb + noun phrase"
     },
     {
      "n": 3,
      "text": "The road trip ended.",
      "answer": "The road trip ended. verb"
     },
     {
      "n": 4,
      "text": "The band played my favorite song.",
      "answer": "The band played my favorite song. verb + noun phrase"
     },
     {
      "n": 5,
      "text": "They left at noon.",
      "answer": "They left at noon. verb + prepositional phrase"
     }
    ],
    "answers": {
     "1": "Elinor rented a car. verb + noun phrase",
     "2": "The clowns never l a u g hw i t ht h ea udience .verb + prepositional phrase",
     "3": "The road trip ended. verb",
     "4": "The band played my favorite song. verb + noun phrase",
     "5": "They left at noon. verb + prepositional phrase"
    }
   },
   {
    "code": "30.11",
    "instruction": "Underline the verb phrase in each of the sentences below. The verb phrase will either be: verb + adjective or verb + prepositional phrase. Look for the verb to help you get started.",
    "sample": "Sample:Y ou look pretty.",
    "items": [
     {
      "n": 1,
      "text": "Her mother looked under the bed.",
      "answer": "Her mother looked under the bed"
     },
     {
      "n": 2,
      "text": "Jan leaped for the shore.",
      "answer": "Jan leaped for the shore"
     },
     {
      "n": 3,
      "text": "The morning seemed peaceful.",
      "answer": "The morning seemed peaceful"
     },
     {
      "n": 4,
      "text": "The stock market fell hard.",
      "answer": "The stock market fell hard"
     },
     {
      "n": 5,
      "text": "She arrived with an empty suitcase.",
      "answer": "She arrived with an empty suitcase"
     }
    ],
    "answers": {
     "1": "Her mother looked under the bed",
     "2": "Jan leaped for the shore",
     "3": "The morning seemed peaceful",
     "4": "The stock market fell hard",
     "5": "She arrived with an empty suitcase"
    }
   },
   {
    "code": "30.12",
    "instruction": "Underline the verb phrase in each of the sentences below. In each sentence here, the verb phrase consists of a verb + noun phrase + prepositional phrase. It may help to first find the verb, which is the first word of these verb phrases.",
    "sample": "Sample: I called my wife during intermission.",
    "items": [],
    "answers": {
     "1": "Vivian added calcium to her diet",
     "2": "She knit that blanket from an unusual wool",
     "3": "Her housekeeper rinsed those clothes in warm water",
     "4": "I like my co¡ee without sugar",
     "5": "Jack and Martha bought a wedding gift at Macy’s. UNIT 11: VERB PHRASES 136"
    }
   }
  ],
  "exercises": [
   {
    "q": "Freddy disappeared.",
    "type": "input",
    "answer": "Freddy disappeared",
    "source": "30.1",
    "instruction": "Underline the verb phrase in each of the sentences below. In this exercise, the verb phrase will consist of only a verb.",
    "explanation": "Respuesta del libro: Freddy disappeared"
   },
   {
    "q": "A young woman cried.",
    "type": "input",
    "answer": "Ayoung woman cried",
    "source": "30.1",
    "instruction": "Underline the verb phrase in each of the sentences below. In this exercise, the verb phrase will consist of only a verb.",
    "explanation": "Respuesta del libro: Ayoung woman cried"
   },
   {
    "q": "The soldiers wait.",
    "type": "input",
    "answer": "The soldiers wait",
    "source": "30.1",
    "instruction": "Underline the verb phrase in each of the sentences below. In this exercise, the verb phrase will consist of only a verb.",
    "explanation": "Respuesta del libro: The soldiers wait"
   },
   {
    "q": "I slept.",
    "type": "input",
    "answer": "I slept",
    "source": "30.1",
    "instruction": "Underline the verb phrase in each of the sentences below. In this exercise, the verb phrase will consist of only a verb.",
    "explanation": "Respuesta del libro: I slept"
   },
   {
    "q": "The little girl smiled. 126",
    "type": "input",
    "answer": "The little girl smiled",
    "source": "30.1",
    "instruction": "Underline the verb phrase in each of the sentences below. In this exercise, the verb phrase will consist of only a verb.",
    "explanation": "Respuesta del libro: The little girl smiled"
   },
   {
    "q": "He created a monster.",
    "type": "input",
    "answer": "He created a monster",
    "source": "30.2",
    "instruction": "Underline the verb phrase in each of the sentences below. It may help to first find the verb, which is the first word of these verb phrases. In each sentence here, the verb phrase consists of a verb + noun phrase.",
    "explanation": "Respuesta del libro: He created a monster"
   },
   {
    "q": "Frank broke the plate.",
    "type": "input",
    "answer": "Frank broke the plate",
    "source": "30.2",
    "instruction": "Underline the verb phrase in each of the sentences below. It may help to first find the verb, which is the first word of these verb phrases. In each sentence here, the verb phrase consists of a verb + noun phrase.",
    "explanation": "Respuesta del libro: Frank broke the plate"
   },
   {
    "q": "Sherry and I left the house.",
    "type": "input",
    "answer": "Sherry and I left the house",
    "source": "30.2",
    "instruction": "Underline the verb phrase in each of the sentences below. It may help to first find the verb, which is the first word of these verb phrases. In each sentence here, the verb phrase consists of a verb + noun phrase.",
    "explanation": "Respuesta del libro: Sherry and I left the house"
   },
   {
    "q": "The detective examined the old broken doorknob.",
    "type": "input",
    "answer": "The detective examined the old broken doorknob",
    "source": "30.2",
    "instruction": "Underline the verb phrase in each of the sentences below. It may help to first find the verb, which is the first word of these verb phrases. In each sentence here, the verb phrase consists of a verb + noun phrase.",
    "explanation": "Respuesta del libro: The detective examined the old broken doorknob"
   },
   {
    "q": "We resent those comments.",
    "type": "input",
    "answer": "We resent those comments",
    "source": "30.2",
    "instruction": "Underline the verb phrase in each of the sentences below. It may help to first find the verb, which is the first word of these verb phrases. In each sentence here, the verb phrase consists of a verb + noun phrase.",
    "explanation": "Respuesta del libro: We resent those comments"
   },
   {
    "q": "The argument was silly.",
    "type": "input",
    "answer": "The argument was silly:",
    "source": "30.5",
    "instruction": "Here are the same sentences as in Test yourself 30.4 . This time, within each verb phrase, underline the verb with a solid line and the adjective with a squiggly line.",
    "explanation": "Respuesta del libro: The argument was silly:"
   },
   {
    "q": "The dress felt comfortable.",
    "type": "input",
    "answer": "The dress felt comfortable:",
    "source": "30.5",
    "instruction": "Here are the same sentences as in Test yourself 30.4 . This time, within each verb phrase, underline the verb with a solid line and the adjective with a squiggly line.",
    "explanation": "Respuesta del libro: The dress felt comfortable:"
   },
   {
    "q": "Steven became sick.",
    "type": "input",
    "answer": "Steven became sick:",
    "source": "30.5",
    "instruction": "Here are the same sentences as in Test yourself 30.4 . This time, within each verb phrase, underline the verb with a solid line and the adjective with a squiggly line.",
    "explanation": "Respuesta del libro: Steven became sick:"
   },
   {
    "q": "The point of this exercise seems obvious.",
    "type": "input",
    "answer": "The point of this exercise seems obvious:",
    "source": "30.5",
    "instruction": "Here are the same sentences as in Test yourself 30.4 . This time, within each verb phrase, underline the verb with a solid line and the adjective with a squiggly line.",
    "explanation": "Respuesta del libro: The point of this exercise seems obvious:"
   },
   {
    "q": "The children got excited.",
    "type": "input",
    "answer": "The children got excited:",
    "source": "30.5",
    "instruction": "Here are the same sentences as in Test yourself 30.4 . This time, within each verb phrase, underline the verb with a solid line and the adjective with a squiggly line.",
    "explanation": "Respuesta del libro: The children got excited:"
   },
   {
    "q": "Brady was a radio engineer.",
    "type": "choice",
    "options": [
     "action",
     "linking"
    ],
    "correct": 0,
    "source": "30.6",
    "instruction": "Underline the verb phrase in each of the sentences below. In some sentences, the verb will be an action verb alone or it will be followed by a noun phrase (for example, saw the cat ). In other sentences the verb will be a linking verb and m",
    "answer": "Brady was a radio engineer",
    "explanation": "Respuesta del libro: Brady was a radio engineer"
   },
   {
    "q": "The king sent a clear message.",
    "type": "choice",
    "options": [
     "action",
     "linking"
    ],
    "correct": 0,
    "source": "30.6",
    "instruction": "Underline the verb phrase in each of the sentences below. In some sentences, the verb will be an action verb alone or it will be followed by a noun phrase (for example, saw the cat ). In other sentences the verb will be a linking verb and m",
    "answer": "The king sent a clear message. 135",
    "explanation": "Respuesta del libro: The king sent a clear message. 135"
   },
   {
    "q": "Those ffowers look gorgeous.",
    "type": "choice",
    "options": [
     "action",
     "linking"
    ],
    "correct": 0,
    "source": "30.6",
    "instruction": "Underline the verb phrase in each of the sentences below. In some sentences, the verb will be an action verb alone or it will be followed by a noun phrase (for example, saw the cat ). In other sentences the verb will be a linking verb and m",
    "answer": "Those £owers look gorgeous",
    "explanation": "Respuesta del libro: Those £owers look gorgeous"
   },
   {
    "q": "Most able-bodied adults work.",
    "type": "choice",
    "options": [
     "action",
     "linking"
    ],
    "correct": 0,
    "source": "30.6",
    "instruction": "Underline the verb phrase in each of the sentences below. In some sentences, the verb will be an action verb alone or it will be followed by a noun phrase (for example, saw the cat ). In other sentences the verb will be a linking verb and m",
    "answer": "Most able-bodied adults work",
    "explanation": "Respuesta del libro: Most able-bodied adults work"
   },
   {
    "q": "I recognized them.",
    "type": "choice",
    "options": [
     "action",
     "linking"
    ],
    "correct": 0,
    "source": "30.6",
    "instruction": "Underline the verb phrase in each of the sentences below. In some sentences, the verb will be an action verb alone or it will be followed by a noun phrase (for example, saw the cat ). In other sentences the verb will be a linking verb and m",
    "answer": "I recognized them",
    "explanation": "Respuesta del libro: I recognized them"
   },
   {
    "q": "Brady was a radio engineer.",
    "type": "input",
    "answer": "Brady was a radio engineer. verb + noun phrase",
    "source": "30.7",
    "instruction": "Here are the same sentences as in Te st yourself 30.6 . This time, indicate if the verb phrase you've identified is: verb (alone), verb + noun phrase, or verb + adjective.",
    "explanation": "Respuesta del libro: Brady was a radio engineer. verb + noun phrase"
   },
   {
    "q": "The king sent a clear message.",
    "type": "input",
    "answer": "The king sent a clear message. verb + noun phrase",
    "source": "30.7",
    "instruction": "Here are the same sentences as in Te st yourself 30.6 . This time, indicate if the verb phrase you've identified is: verb (alone), verb + noun phrase, or verb + adjective.",
    "explanation": "Respuesta del libro: The king sent a clear message. verb + noun phrase"
   },
   {
    "q": "The boat ffoated in the water.",
    "type": "input",
    "answer": "The boat £oated in the water",
    "source": "30.8",
    "instruction": "Underline the verb phrase in each of the sentences below. It may help to first find the verb, which is the first word of these verb phrases. In each sentence here, the verb phrase consists of a verb + prepositional phrase.",
    "explanation": "Respuesta del libro: The boat £oated in the water"
   },
   {
    "q": "Janice is from Kansas City.",
    "type": "input",
    "answer": "Janice is from Kansas City",
    "source": "30.8",
    "instruction": "Underline the verb phrase in each of the sentences below. It may help to first find the verb, which is the first word of these verb phrases. In each sentence here, the verb phrase consists of a verb + prepositional phrase.",
    "explanation": "Respuesta del libro: Janice is from Kansas City"
   },
   {
    "q": "Mrs. Miller is at the beach.",
    "type": "input",
    "answer": "Mrs. Miller is at the beach",
    "source": "30.8",
    "instruction": "Underline the verb phrase in each of the sentences below. It may help to first find the verb, which is the first word of these verb phrases. In each sentence here, the verb phrase consists of a verb + prepositional phrase.",
    "explanation": "Respuesta del libro: Mrs. Miller is at the beach"
   },
   {
    "q": "He looked for me.",
    "type": "input",
    "answer": "He looked for me",
    "source": "30.8",
    "instruction": "Underline the verb phrase in each of the sentences below. It may help to first find the verb, which is the first word of these verb phrases. In each sentence here, the verb phrase consists of a verb + prepositional phrase.",
    "explanation": "Respuesta del libro: He looked for me"
   },
   {
    "q": "The sun appeared above the horizon.",
    "type": "input",
    "answer": "The sun appeared above the horizon",
    "source": "30.8",
    "instruction": "Underline the verb phrase in each of the sentences below. It may help to first find the verb, which is the first word of these verb phrases. In each sentence here, the verb phrase consists of a verb + prepositional phrase.",
    "explanation": "Respuesta del libro: The sun appeared above the horizon"
   },
   {
    "q": "Elinor rented a car. 2 . T h ec l o w n sn e v e rl a u g hw i t ht h ea udience .",
    "type": "input",
    "answer": "Elinor rented a car",
    "source": "30.9",
    "instruction": "Underline the verb phrase in each of the sentences below.The verb phrase will either be: verb (alone), verb + noun phrase, or verb + prepositional phrase. Look for the verb to help you get started.",
    "explanation": "Respuesta del libro: Elinor rented a car"
   },
   {
    "q": "The road trip ended.",
    "type": "input",
    "answer": "The road trip ended",
    "source": "30.9",
    "instruction": "Underline the verb phrase in each of the sentences below.The verb phrase will either be: verb (alone), verb + noun phrase, or verb + prepositional phrase. Look for the verb to help you get started.",
    "explanation": "Respuesta del libro: The road trip ended"
   },
   {
    "q": "The band played my favorite song.",
    "type": "input",
    "answer": "The band played my favorite song",
    "source": "30.9",
    "instruction": "Underline the verb phrase in each of the sentences below.The verb phrase will either be: verb (alone), verb + noun phrase, or verb + prepositional phrase. Look for the verb to help you get started.",
    "explanation": "Respuesta del libro: The band played my favorite song"
   },
   {
    "q": "They left at noon.",
    "type": "input",
    "answer": "They left at noon",
    "source": "30.9",
    "instruction": "Underline the verb phrase in each of the sentences below.The verb phrase will either be: verb (alone), verb + noun phrase, or verb + prepositional phrase. Look for the verb to help you get started.",
    "explanation": "Respuesta del libro: They left at noon"
   },
   {
    "q": "Elinor rented a car.  2 . T h ec l o w n sn e v e rl a u g hw i t ht h ea udience",
    "type": "input",
    "answer": "Elinor rented a car. verb + noun phrase",
    "source": "30.10",
    "instruction": "Here are the same sentences as in Te st yours elf 30.9 . This time, indicate if the verb phrase you've identified is: verb (alone), verb + noun phrase, or verb + prepositional phrase.",
    "explanation": "Respuesta del libro: Elinor rented a car. verb + noun phrase"
   },
   {
    "q": "The road trip ended.",
    "type": "input",
    "answer": "The road trip ended. verb",
    "source": "30.10",
    "instruction": "Here are the same sentences as in Te st yours elf 30.9 . This time, indicate if the verb phrase you've identified is: verb (alone), verb + noun phrase, or verb + prepositional phrase.",
    "explanation": "Respuesta del libro: The road trip ended. verb"
   },
   {
    "q": "The band played my favorite song.",
    "type": "input",
    "answer": "The band played my favorite song. verb + noun phrase",
    "source": "30.10",
    "instruction": "Here are the same sentences as in Te st yours elf 30.9 . This time, indicate if the verb phrase you've identified is: verb (alone), verb + noun phrase, or verb + prepositional phrase.",
    "explanation": "Respuesta del libro: The band played my favorite song. verb + noun phrase"
   },
   {
    "q": "They left at noon.",
    "type": "input",
    "answer": "They left at noon. verb + prepositional phrase",
    "source": "30.10",
    "instruction": "Here are the same sentences as in Te st yours elf 30.9 . This time, indicate if the verb phrase you've identified is: verb (alone), verb + noun phrase, or verb + prepositional phrase.",
    "explanation": "Respuesta del libro: They left at noon. verb + prepositional phrase"
   },
   {
    "q": "Her mother looked under the bed.",
    "type": "input",
    "answer": "Her mother looked under the bed",
    "source": "30.11",
    "instruction": "Underline the verb phrase in each of the sentences below. The verb phrase will either be: verb + adjective or verb + prepositional phrase. Look for the verb to help you get started.",
    "explanation": "Respuesta del libro: Her mother looked under the bed"
   },
   {
    "q": "Jan leaped for the shore.",
    "type": "input",
    "answer": "Jan leaped for the shore",
    "source": "30.11",
    "instruction": "Underline the verb phrase in each of the sentences below. The verb phrase will either be: verb + adjective or verb + prepositional phrase. Look for the verb to help you get started.",
    "explanation": "Respuesta del libro: Jan leaped for the shore"
   },
   {
    "q": "The morning seemed peaceful.",
    "type": "input",
    "answer": "The morning seemed peaceful",
    "source": "30.11",
    "instruction": "Underline the verb phrase in each of the sentences below. The verb phrase will either be: verb + adjective or verb + prepositional phrase. Look for the verb to help you get started.",
    "explanation": "Respuesta del libro: The morning seemed peaceful"
   },
   {
    "q": "The stock market fell hard.",
    "type": "input",
    "answer": "The stock market fell hard",
    "source": "30.11",
    "instruction": "Underline the verb phrase in each of the sentences below. The verb phrase will either be: verb + adjective or verb + prepositional phrase. Look for the verb to help you get started.",
    "explanation": "Respuesta del libro: The stock market fell hard"
   },
   {
    "q": "She arrived with an empty suitcase.",
    "type": "input",
    "answer": "She arrived with an empty suitcase",
    "source": "30.11",
    "instruction": "Underline the verb phrase in each of the sentences below. The verb phrase will either be: verb + adjective or verb + prepositional phrase. Look for the verb to help you get started.",
    "explanation": "Respuesta del libro: She arrived with an empty suitcase"
   }
  ],
  "answerKeys": {
   "30.1": {
    "1": "Freddy disappeared",
    "2": "Ayoung woman cried",
    "3": "The soldiers wait",
    "4": "I slept",
    "5": "The little girl smiled"
   },
   "30.2": {
    "1": "He created a monster",
    "2": "Frank broke the plate",
    "3": "Sherry and I left the house",
    "4": "The detective examined the old broken doorknob",
    "5": "We resent those comments"
   },
   "30.3": {
    "1": "He created a monster:",
    "2": "Frank broke the plate:",
    "3": "Sherry and I left the house:",
    "4": "The detective examined the old broken doorknob:",
    "5": "We resent those comments:"
   },
   "30.4": {
    "1": "The argument was silly",
    "2": "The dress felt comfortable",
    "3": "Steven became sick",
    "4": "The point of this exercise seems obvious",
    "5": "The children got excited"
   },
   "30.5": {
    "1": "The argument was silly:",
    "2": "The dress felt comfortable:",
    "3": "Steven became sick:",
    "4": "The point of this exercise seems obvious:",
    "5": "The children got excited:"
   },
   "30.6": {
    "1": "Brady was a radio engineer",
    "2": "The king sent a clear message. 135",
    "3": "Those £owers look gorgeous",
    "4": "Most able-bodied adults work",
    "5": "I recognized them"
   },
   "30.7": {
    "1": "Brady was a radio engineer. verb + noun phrase",
    "2": "The king sent a clear message. verb + noun phrase",
    "3": "Those £owers look gorgeous. verb +adjective",
    "4": "Most able-bodied adults work. verb",
    "5": "I recognized them. verb + noun phrase"
   },
   "30.8": {
    "1": "The boat £oated in the water",
    "2": "Janice is from Kansas City",
    "3": "Mrs. Miller is at the beach",
    "4": "He looked for me",
    "5": "The sun appeared above the horizon"
   },
   "30.9": {
    "1": "Elinor rented a car",
    "2": "The clowns never l a u g hw i t ht h ea udience",
    "3": "The road trip ended",
    "4": "The band played my favorite song",
    "5": "They left at noon"
   },
   "30.10": {
    "1": "Elinor rented a car. verb + noun phrase",
    "2": "The clowns never l a u g hw i t ht h ea udience .verb + prepositional phrase",
    "3": "The road trip ended. verb",
    "4": "The band played my favorite song. verb + noun phrase",
    "5": "They left at noon. verb + prepositional phrase"
   },
   "30.11": {
    "1": "Her mother looked under the bed",
    "2": "Jan leaped for the shore",
    "3": "The morning seemed peaceful",
    "4": "The stock market fell hard",
    "5": "She arrived with an empty suitcase"
   },
   "30.12": {
    "1": "Vivian added calcium to her diet",
    "2": "She knit that blanket from an unusual wool",
    "3": "Her housekeeper rinsed those clothes in warm water",
    "4": "I like my co¡ee without sugar",
    "5": "Jack and Martha bought a wedding gift at Macy’s. UNIT 11: VERB PHRASES 136"
   },
   "30.13": {
    "1": "Your sister is a talented pianist",
    "2": "Their doctor operates at that hospital",
    "3": "Robert threw himself into the battle",
    "4": "The o¡er sounded unrealistic",
    "5": "His mother went to the drugstore"
   },
   "30.14": {
    "1": "Your sister is a talented pianist. verb + noun phrase",
    "2": "Their doctor operates at that hospital. verb + prepositional phrase",
    "3": "Robert threw himself into the battle. verb + noun phrase + prepositional phrase",
    "4": "The o¡er sounded unrealistic. verb + adjective",
    "5": "His mother went to the drugstore. verb + prepositional phrase"
   },
   "31.1": {
    "1": "They were arguing loudly",
    "2": "The frog had jumped five feet",
    "3": "Youinvited everyone",
    "4": "I must buy some milk",
    "5": "Harry lives in Europe",
    "6": "Jogging should increase your stamina",
    "7": "I have worked all day",
    "8": "Sam will go fishing tomorrow",
    "9": "Judy left for Dallas at noon",
    "10": "Joey was chasing a rascal all day long"
   },
   "31.2": {
    "1": "Ellen can do the job",
    "2": "I will worry about that later",
    "3": "Youshould rest before the party",
    "4": "Dennis might change that carpeting. There are nine basic modals, listed below. (They were group (a) of Quick tip 31.1 .) Quick tip 32.1 One kind of helping verb is called a modal. The basic modals of English are: can could may might shall should will would must",
    "5": "The Giants won the Super Bowl",
    "6": "You should do that",
    "7": "She could move nearby",
    "8": "My friend wants a two-car garage",
    "9": "Jan must get that report done",
    "10": "The sun rose at 5 A.M. today. The helping verbs belong to di¡erent subgroups, as indicated in Quick tip 31.1 . W e’ll take a closer look at each of the three types of helping verbs in the next few lessons. 140 UNIT 12: AUXILIARY PHRASES Lesson 32: Modals One kind of helping verb is called a modal .Am o d a la d d si nformation ,s u c ha sp ossibility , necessity, or requests, to the verb that follows. The modals are underlined in the senten- ces below:"
   },
   "32.1": {
    "1": "They must delay the invasion",
    "2": "You will find courage in your heart",
    "3": "Mr. Knight might go with you",
    "4": "You should be proud of yourself",
    "5": "Tomorrow we may go to the movies",
    "6": "I could dance up a storm",
    "7": "Lauren can name that tune in 10 seconds",
    "8": "Ashley would win that race",
    "9": "He shall travel to the countryside this weekend",
    "10": "Jerry must renew his passport this month"
   },
   "32.2": {
    "1": "The curtains might hide the view",
    "2": "Paul could work on the problem",
    "3": "She can leave this afternoon",
    "4": "You must go to the emergency room immediately. 5 . T h ec hildrenw i l le n j o yt h e s eg i f t s . 141"
   }
  }
 },
 {
  "unit": 12,
  "title": "Auxiliary phrases",
  "part": "Part II: Kinds of phrases",
  "startPage": 151,
  "pdfPages": {
   "theory": [
    151,
    175
   ],
   "answers": 177
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Las auxiliares construyen tiempo, aspecto, modo y voz. Esta es la unidad más densa del libro: modals, perfect have, progressive be y combinaciones.</p></div>\n<div class=\"theory-es-section\"><h4>1. Modales</h4><p><em>can, could, may, might, must, should, will, would</em> + base. No llevan -s en tercera persona ni infinitivo tras ellos (*<em>can to go</em>).</p></div>\n<div class=\"theory-es-section\"><h4>2. Perfect (have)</h4><p><em>have/has + participio</em> → acción pasada con relevancia presente o referencia a otro momento: <em>My student has studied</em>.</p></div>\n<div class=\"theory-es-section\"><h4>3. Progressive (be)</h4><p><em>am/is/are/was/were + V-ing</em> → duración en curso: <em>We are eating dinner</em>.</p></div>\n<div class=\"theory-es-section\"><h4>4. Combinaciones</h4><p>Se apilan en orden: <em>will</em> → <em>have</em> → <em>been</em> → <em>V-ing</em> (<em>will have been working</em>). El libro también cubre sufijos (-s, -ed, -ing) y la noción de <strong>tense</strong> (pasado vs. no pasado en el verbo principal).</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> Desarmá la cadena de auxiliares de izquierda a derecha y etiquetá cada eslabón: modal / perfect / progressive / passive.</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>Test yourself 30.13\n1. Y our sister is a talented pianist.\n2. Their doctor operates at that hospital.\n3. Robert threw himself into the battle.\n4. The odier sounded unrealistic.\n5. His mother went to the drugstore.\nTest yourself 30.14\n1. Y our sister is a talented pianist. verb + noun phrase\n2. Their doctor operates at that hospital. verb + prepositional phrase\n3. Robert threw himself into the battle. verb + noun phrase + prepositional phrase\n4. The odier sounded unrealistic. verb + adjective\n5. His mother went to the drugstore. verb + prepositional phrase\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.\nAnswer keys: Unit 11\n137</p>\n<p>UNIT 12: AUXILIARY PHRASES\nSo far, each verb we've talked about occurs in a verb phrase. This type of verb is called\na\nmain verb\n. Other verbs, called\nhelping verbs\nor\nauxiliary verbs\n,a r ef o u n di n\naux-\niliary phrases\n. Auxiliary phrases are among the most satisfying to describe. That' s\nbecause the English auxiliary phrase has a regular pattern, which helps to make it\neasy to understand. So here' s some help with helping verbs.\n138</p>"
   },
   {
    "n": 31,
    "title": "The basic structure of auxiliary phrases",
    "html": "<p>What are some sentences with helping (auxiliary) verbs? Here are a few examples, with\nthe helping verb underlined:\n1. She should study.\n2. She has studied.\n3. She is studying.\nIn these sentences, the main verb is a form of\nstudy\n, and the helping verb is helping to give\nus additional information that we can't get from just the main verb. (See\nUnit 2\nto remind\nyourself about main verbs.)\nThere aren't that many helping verbs; the basic ones are listed in\nQuick tip\n31.1\n.\nQuick tip 31.1\nThe basic helping verbs of English are:\na. can may shall will must\ncould might should would\nb. have has had\nc. am are is\nwas were\nbe been being\nNow take another look at sentences 1^3, which have both a helping verb and a main\nverb. Which comes first? Y ou can see that the main verb always comes after the help-\ning verb.\nQuick tip 31.2\nIf a sentence has both a main verb and a helping verb, the main verb is always last.\nDoes every sentence of English have a helping verb? Here are examples of sentences\nthat do not have a helping verb. Each only has a main verb, which is underlined.\n4. She studies every day.\n5. She studied every day.\n6. He leaves at 9 in the morning.\n7. He left at 9 in the morning.\nTest yourself 31.1\nDecide whether or not each sentence has a helping verb. Look for the main verb, which is\nunderlined, and see if there' s a helping verb before it.\nHelping verb: NO Helping verb:YES\nSample: He talked about himself.\n ...................\n139</p>\n<p>Getting started (answers on p. 164)\n1. They were arguing loudly. ................... ...................\n2. The frog had jumped five feet. ................... ...................\n3. Y ouinvited everyone. ................... ...................\n4. I must buy some milk. ................... ...................\n5. Harry lives in Europe. ................... ...................\nMore practice (answers on the website)\n6. Jogging should increase your stamina. ................... ...................\n7. I have worked all day. ................... ...................\n8. Sam will go fishing tomorrow. ................... ...................\n9. Judy left for Dallas at noon. ................... ...................\n10. Joey was chasing a rascal all day long. ................... ...................\nTest yourself 31.2\nDecide whether or not each sentence has a helping verb. This time the main verbs are not\nunderlined.\nHelping verb: NO Helping verb:YES\nSample: Maggie was walking nearby. ...................\nGetting started (answers on p. 164)\n1. Y ou might write her a letter. ................... ...................\n2. Congress voted on the bill. ................... ...................\n3. Beth has survived that ordeal. ................... ...................\n4. I could be an actor. ................... ...................\n5. The Giants won the Super Bowl. ................... ...................\nMore practice (answers on the website)\n6. Y ou should do that. ................... ...................\n7. She could move nearby. ................... ...................\n8. My friend wants a two-car garage. ................... ...................\n9. Jan must get that report done. ................... ...................\n10. The sun rose at 5 A.M. today. ................... ...................\nThe helping verbs belong to didierent subgroups, as indicated in Quick tip 31.1 . W e'll take\na closer look at each of the three types of helping verbs in the next few lessons.\n140\nUNIT 12: AUXILIARY PHRASES</p>"
   },
   {
    "n": 32,
    "title": "Modals",
    "html": "<p>One kind of helping verb is called a modal .Am o d a la d d si nformation ,s u c ha sp ossibility ,\nnecessity, or requests, to the verb that follows. The modals are underlined in the senten-\nces below:\n1. Ellen can do the job.\n2. I will worry about that later.\n3. Y oushould rest before the party.\n4. Dennis might change that carpeting.\nThere are nine basic modals, listed below. (They were group (a) of\nQuick tip\n31.1\n.)\nQuick tip 32.1\nOne kind of helping verb is called a modal. The basic modals of English are:\ncan could\nmay might\nshall should\nwill would\nmust\nTest yourself 32.1\nUnderline the modal in each of the sentences below.\nSample:William should tell you the story.\nGetting started\n(answers on p. 164)\n1. They must delay the invasion.\n2. Y ou will find courage in your heart.\n3. Mr. Knight might go with you.\n4. Y ou should be proud of yourself.\n5. Tomorrow we may go to the movies.\nMore practice\n(answers on the website)\n6. I could dance up a storm.\n7. Lauren can name that tune in 10 seconds.\n8. Ashley would win that race.\n9. He shall travel to the countryside this weekend.\n10. Jerry must renew his passport this month.\nTest yourself 32.2\nUnderline the modal and put a squiggly line under the main verb in each of the sentences below.\nSample: She will be happy.\nGetting started\n(answers on p. 164)\n1. The curtains might hide the view.\n2. Paul could work on the problem.\n3. She can leave this afternoon.\n4. Y ou must go to the emergency room\nimmediately.\n5 . T h ec hildrenw i l le n j o yt h e s eg i f t s .\n141</p>\n<p>More practice (answers on the website)\n6. We should proceed with caution.\n7. You may be r ight.\n8. One would think so.\n9. Mrs. Randall will give you an answer\ntomorrow.\n10. His father can postpone his retirement until\nnext year.\nTo enhance your understanding\nHere are the modals again:\ncan could\nmay might\nshall should\nwill would\nmust\nHistorically, those modals on the left have been considered present tense forms while\nthose on the right have been considered past tense forms. (For more on tenses, see\nLesson 37</p>\n<p>.) Note that three of the past tense forms end in the consonant\nd</p>\n<p>; think of it as\na reminder of the past tense sufﬁx -\ned\n, as in the verb\nstayed\n.\nTo further enhance your understanding\nSome expressions are similar to modals but consist of more than one word. They are called\nphrasal modals\nor\nperiphrastic modals\n. Here are some examples, underlined in the\nfollowing sentences:\n5. I am able to go.\n6. I ought to go.\n7. I am going to go.\n8. I would like to go.\n9. I have to go.\n10. I need to go.\nNotice that many of the phrasal modals have the same meaning as one of the one-word\nmodals; for example:,\nam able to\n=\ncan\n,\nought to\n=\nshould\n,\nam going to\n=\nwill</p>\n<p>.\n11. I am able to go = I can go.\n12. I ought to go = I should go.\n13. I am going to go = I will go.\nNote also that phrasal verbs end in\nto\n, which is followed by the base form of the verb.\n142\nUNIT 12: AUXILIARY PHRASES</p>"
   },
   {
    "n": 33,
    "title": "Perfect have",
    "html": "<p>In each of the sentences below, the helping verb is a form of have ^e i t h e r have , has ,o r had ^\nand is underlined. (These were listed in group (b) of\nQuick tip\n31.1\n.)\n1. She had greeted me happily.\n2. They have eaten dinner early today.\n3. He has written many articles about the wealthy.\nSentences with the helping verb\nhave\nare said to be expressed in the\nperfect aspect\n,\nwhich adds information to the main verb about real-world time. For example, in sentence\n2, using\nhave\nindicates that the action began in the past and is complete.\nQuick tip 33.1\nOne kind of helping verb is the verb have . It has three forms: have , has , and had .\nTest yourself 33.1\nUnderline the have helping verb in each of the sentences below. It may be in any of the three forms of\nhave\n. In these sentences, it will always be directly before the main verb.\nSample: I have imagined this for years.\nGetting started\n(answers on p. 164)\n1 . T h eb r i d g eh a dc ollapsed .\n2. That cheerful woman has saved the day.\n3. My uncles have visited us every summer.\n4. Her neighbor has been an attorney for\ntwenty years.\n5. Suzie had traveled to Belgium twice\nbefore.\nMore practice\n(answers on the website)\n6. My friend Sal has bought two suits recently.\n7. Y our remarks have entertained me\nenormously.\n8. Our teacher had sent us an e-mail yesterday.\n9. That thought never has crossed my mind.\n10. Y ou and I have played chess numerous\ntimes.\nTest yourself 33.2\nUnderline the have helping verb and put a squiggly line under the main verb in each of the\nsentences below.\nSample: He had annoyed his boss.\nGetting started\n(answers on p. 165)\n1. Joan and Sam have worked for hours.\n2. Their mother has spoken of you often.\n3. The prime minister had written to him.\n4. Y our daughter has grown a lot taller.\n5. She has seen her friends twice since last\nSunday.\n143</p>\n<p>More practice (answers on the website)\n6. Our dogs have made a mess of the living room.\n7. Y ou had warned me not to heed his advice.\n8. The chef has prepared this dish perfectly.\n9. We have thought about your suggestion\nseriously.\n10. The actors had rehearsed for about an hour.\nThe verb\nhave\ni sn o tu s e do n l ya sah e l p i n gv e r bi nE n g l i s h .I tc a na l s ob et h em a i nv e r bi n\nas entence .H e r ea r es o m ee xamplesw i t h\nhave\nused as the main verb. Notice that when\nhave\nis being used as the main verb, it refers to the notion of possession or ownership.\n4. I have a comfortable bed.\n5. She has a beautiful home.\n6. That family had a lot of problems.\nQuick tip 33.2\nHave can be used as a helping verb or as a main verb. When have is used as the main verb,\nit refers to the idea of possession. When\nhave\nis used as the\nhelping verb\n, it is always\nfollowed by another verb.\nTest yourself 33.3\nDecide if the forms of have i nt h ef ollowings entencesa r eb e i n gu s e da sh e l p i n gv e r b so ra sm a i n\nverbs.\nHelping verb Main verb\nSample: Jack had a good time. ...................\nGetting started (answers on p. 165)\n1. Jack has experienced a good time. ................... ...................\n2. He has seen her often. ................... ...................\n3. Y ou have a lot of DVDs. ................... ...................\n4. She had tacos for dinner. ................... ...................\n5. Y our professor has the answer to your question. ................... ...................\nMore practice (answers on the website)\n6. Grandpa has slept on the couch often. ................... ...................\n7. Aisha had trouble with her car this morning. ................... ...................\n8. My aunt has a treadmill in her basement. ................... ...................\n9. Mrs. Stein had called the paramedics. ................... ...................\n10. They have donated that coat to charity. ................... ...................\n144\nUNIT 12: AUXILIARY PHRASES</p>\n<p>Y ou may have noticed that sometimes there are sentences with two occurrences of have .\nHere are some examples.\n7. Jack has had a bad time.\n8. The mayor had had a close election.\n9. W e have had a delicious dinner.\nHow can we account for this? The first occurrence of\nhave\nis a helping verb; the second\noccurrence of\nhave\nis the main verb (and refers to possession). That is, just as any other\nmain verb can use\nhave\nas a helping verb, the main verb\nhave\ncan also use\nhave\nas a helping\nverb.That results in two forms of\nhave\ni nt h es a m es entence .\n145</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 34,
    "title": "Progressive be",
    "html": "<p>In each of the sentences below, the helping verb is a form of the verb be and is underlined.\n1. She is leaving on the train.\n2. I was thinking about his behavior.\n3. They were managing the restaurant.\n(These were listed in group (c) of\nQuick tip\n31.1\n.) In addition to the forms\nis\n,\nwas\n,a n d\nwere\n,\nadditional forms of\nbe\nare\nam\n,\nare\n,\nbe\n,\nbeen\n,a n d\nbeing\n.\nSentences with the helping verb\nbe\na r es a i dt ob ee xpressedi nt h e\nprogressive\nor\ncon-\ntinuous aspect\n, which usually indicates that the action takes place over a period of time.\nQuick tip 34.1\nOne kind of helping verb is be . It has the following forms: am, is , are , was , were, be, been ,\nand\nbeing</p>\n<p>.\nTest yourself 34.1\nUnderline the form of the be helpingv e r bi ne a c ho ft h es entencesb e l o w .\nSample: He was exercising regularly.\nGetting started\n(answers on p. 165)\n1. The reporter was writing her story.\n2. He is controlling his temper.\n3. Y ou are learning about syntax.\n4. They were watching a movie last Sunday.\n5. I am doing a lot of things right now.\nMore practice\n(answers on the website)\n6. The politicians are campaigning in full force.\n7. The football teams were finishing the season.\n8. Catherine is learning to speak French.\n9 . T h o s ea c t o r sw e r er ehearsing .\n10. I was cleaning my closet yesterday.\nTest yourself 34.2\nUnderline the be helping verb and put a squiggly line under the main verb in each of the sentences\nbelow.\nSample: He is greeting his boss.\nGetting started\n(answers on p. 165)\n1. I was talking to Harry.\n2. Irving and Annie are studying Latin.\n3. He is testing her loyalty.\n4. I am taking a walk.\n5. Y ou were reading for hours.\nMore practice\n(answers on the website)\n6. The train is arriving.\n7. The wrestlers are getting ready to compete.\n8. The manager was closing the store.\n9. I am organizing a luncheon for him.\n10. The children were playing peacefully.\n146</p>\n<p>The verb be i sn o tu s e do n l ya sah e l p i n gv e r bi nE n g l i s h .I tc a na l s ob et h em a i nv e r bi na\nsentence, in which case it' s a linking verb. (This was discussed in\nLesson 9\n.) As a reminder,\nhere are some sentences with\nbe\nused as the main verb:\n4. I am happy\n5. She was an actress.\n6. Those Broadway shows are great.\nQuick tip 34.2\nBe and its forms can be used as a helping verb or as a main verb. When be is used as the\nhelping verb, it is always followed by another verb.\nTest yourself 34.3\nDecide if the forms of be in the following sentences are being used as helping verbs or as main\nverbs.\nHelping verb Main verb\nSample: Joan is a genius. ...................\nGetting started (answers on p. 165)\n1. Sam is looking at the mail. ................... ...................\n2. That concept was diflcult. ................... ...................\n3. Y ou are helping her a lot. ................... ...................\n4. I am a doctor. ................... ...................\n5. They were watching TV. ................... ...................\nMore practice (answers on the website)\n6. She was writing her term paper. ................... ...................\n7. Dav id i s a famous opera singer. ................... ...................\n8. Y ou are joking, right? ................... ...................\n9. His employees are happy about it. ................... ...................\n10. Jackie and Richard were friends. ................... ...................\nY ou may have noticed that sometimes there are sentences with two occurrences of be .\nHere are some examples:\n7. Andrew is being a nuisance.\n8. My friends were being courageous.\n9. They are being clowns.\nHow can we account for this? The first occurrence of\nbe\nis a helping verb; the second\noccurrence of\nbe\nis the main verb. That is, just as any other main verb can use\nbe\nas a help-\ning verb, the main verb\nbe\ncan also use\nbe\na sah e l p i n gv e r b . T h a tr e s u l t si nt w of o r m so f\nbe\ni nt h es a m es entence .\n147</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 35,
    "title": "Combining auxiliary verbs",
    "html": "<p>All the sentences with helping (auxiliary) verbs that we've looked at so far have had only\none helping verb. It' s possible, however, for a sentence to have more than one helping\nverb. Here are some examples of sentences with two helping verbs; the helping verbs are\nunderlined. (Remember that there are three kinds of helping verbs: (a) modals (e.g.\nshould\n,\ncan\n,\nmight\n), (b)\nhave\n,a n d( c )\nbe\n.S e e\nLessons 32\n^34.)\n1. She should have studied. (modal + have )\n2. She may be studying. ( modal + be )\n3. She has been studying. ( have + be )\nWhen a sentence has two helping verbs, which helping verb is first? If a sentence has\na modal, that will always be the first helping verb, as you can see in sentences 1 and 2. If\nas entenceh a sb o t h\nhave\nand\nbe\nas helping verbs,\nhave\nwill always be first, as you can see\nin sentence 3.\nCan you think of a sentence with three helping verbs? Sentences 4 and 5 have three help-\ning verbs (underlined):\n4. She should have been studying.\n5. Mary might have been looking at him.\nIf there are three helping verbs, they are always in the following order: modal +\nhave +\nbe\n, as you can see from sentences 4 and 5. And if there are only two helping verbs, they're\nstill in this relative order, with modal first, and\nhave\nbefore\nbe\n.\nQuick tip 35.1\nA sentence can have zero, one, or more than one helping verb. If there is more than\none, they will always be in the following relative order:\nmodal\n+</p>\n<p>have\n+</p>\n<p>be\n.\nTest yourself 35.1\nFor each sentence below, underline the main verb.Then decide if the sentence has zero, one, two, or\nthree helping verbs before the main verb.\nSample: They may rent a car at the terminal. 1\nGetting started\n(answers on p. 165)\n1 . S h ew a sf ocusingo nt h em i r r o r . ...................\n2. Andy should have been enjoying his new career. ...................\n3. Mrs. Packard's life changed at that point. ...................\n4. Y ou can have two scoops of ice cream. ...................\n5. I might have committed a serious error. ...................\n148</p>\n<p>More practice (answers on the website)\n6. Tamara has been working for 22 years. ...................\n7. He could have been telling the truth. ...................\n8. The birds were chirping early in the morning. ...................\n9. Gauguin painted inTahiti. ...................\n10. Tomorrow we will go to the movies. ...................\nTest yourself 35.2\nUnderline each helping verb in the sentences below. Each sentence will have at least one helping\nverb.\nSample: The children have been working hard.\nGetting started\n(answers on p. 165)\n1. Y ou should read this book.\n2. She had been greeting me happily.\n3. Janice might have gotten the ffu.\n4. My question was bothering him.\n5. The prime suspect might have been telling\nthe truth.\nMore practice\n(answers on the website)\n6. He could have been a hero.\n7. The journalists will be traveling throughout\nCanada.\n8. I have written many articles about the\nwealthy.\n9. This has been a diflcult time for me.\n10. The trial has been going on far too long.\nTest yourself 35.3\nUnderline each helping verb in the sentences below. A sentence will have anywhere from zero to\nthree helping verbs.\nSample: He and Bill shook hands. (No helping verb.)\nGetting started\n(answers on p. 166)\n1. I had been writing to him often.\n2. Their mother has spoken of you a lot.\n3. Sam will recognize it immediately.\n4. W e were good friends.\n5. Y ou should be studying right now.\nMore practice\n(answers on the website)\n6. He may have been working on the project.\n7. We had a sudden downpour.\n8. This storm will pass soon.\n9. The attorney may have overstated her case.\n1 0 . T h i sr elationshipi si mprovingr a p i d l y .\nTest yourself 35.4\nUnderline each helping verb in the sentences below and put a squiggly line under the main verb. A\nsentence will have anywhere from zero to three helping verbs.\nSample: Paul was offering me a drink.\n149</p>\n<p>Getting started (answers on p. 166)</p>\n<p>1. They can do the research.</p>\n<p>2. Suzanne might be leaving sooner.</p>\n<p>3. Papa has been teasing him.</p>\n<p>4. I might have been being too cautious.</p>\n<p>5. The plane was late.</p>\n<p>More practice (answers on the website)</p>\n<p>6. The student will have completed his</p>\n<p>assignment by tomorrow.</p>\n<p>7. Y ou are being silly.</p>\n<p>8. Everyone has had a great time at the party.</p>\n<p>9 . T h es h o ww a sag r e a ts u c c e s s .</p>\n<p>10. It must have been diflcult to do that.</p>"
   },
   {
    "n": 36,
    "title": "The sufﬁxes of auxiliary verbs",
    "html": "<p>E a c hh e l p i n gv e r bi sa ctuallyat w o - p a r tp a c k a g e .T h e r e ' st h eh e l p i n gv e r bi t s e l f ,a n dt h e n\nthere' s the ediect that the helping verb has on the verb that follows it.\nLook at the sentences below. In each of them, the helping verb is a form of progressive\nbe\n(underlined).What ediect does progressive\nbe\nhave on the verb that follows it?\n1. The children were working hard.\n2. I am considering a new job odier.\n3. Nothing was limiting his development.\n4. Many new advances are emerging.\n5. Sam is watching his favorite TVshow.\nY ou can see that the verb after the form of\nbe\nalways has\n-ing\nadded to its base. This\n-ing\nform of the verb is referred to as the\npresent participle\nin traditional grammar.\nQuick tip 36.1\nWhen the helping verb is progressive be , the next verb always has -ing added to its base\nform. Example: is sleeping . The - ing verb form is called the present participle .\nTest yourself 36.1\nEach of the following sentences has a form of the helping verb be . Underline the be verb and the -ing\nending of the following verb.\nSample: Maggie is sleep ing now.\nGetting started\n(answers on p. 166)\n1 . S h ei sl e a v i n go nt h et e no ' c l o c kt r a i n .\n2. The curtains were masking the view.\n3. I was wondering about his behavior.\n4. Paul is leaning on his wife' s chair.\n5. They are sounding rather defensive.\nMore practice\n(answers on the website)\n6. We were attending a graduation ceremony\nlast week.\n7. Jim' s parents were watching a movie.\n8. Y ou are trying too hard.\n9. I am dreaming of a gentle snowfall.\n10. The President was addressing the nation\nyesterday.\nIn each of the following sentences, the helping verb is a form of\nhave\n(underlined).What\nediect does\nhave\nhave on the verb that follows it? (This is a little trickier than the pattern\nwith\nbe\n.)\n6. She had greeted me happily.\n7. They have eaten dinner early today.\n8. That had interested the reporter.\n9. Sarah had managed to pry apart the shells.\n151</p>\n<p>10. Carla and Raphael have written many books together.\n11. He and Bill had shaken hands.\nThe verb following\nhave\nmost frequently has the suflx\n-en\nor\n-ed\nadded to it.The form of\nthe verb following the helping verb\nhave\nis traditionally called the\npast participle\n.\nQuick tip 36.2\nWhen have is the helping verb , the next verb typically has -ed or -en added to its base form .\nExamples: has eaten, have watched . The verb form following the helping verb have is\ncalled the\npast participle\n.\nTest yourself 36.2\nEach of the following sentences has a form of the helping verb have . Underline the have and the -ed\nor\n-en\nending of the following verb.\nSample:Y ou had manag ed the situation very well.\nGetting started\n(answers on p. 166)\n1. The women had spoken to each other recently.\n2. Unfortunately, the heroine had married the\nvillain.\n3. Andy and George have enjoyed themselves\nenormously.\n4. My student has written an interesting essay\non technology.\n5. The hockey game has ended in a tie.\nMore practice\n(answers on the website)\n6. The local theater has provided much\nentertainment over the years.\n7. I have seen you somewhere before.\n8. Her brother has broken the vase to pieces.\n9. They have lied too many times.\n10. Mona' s boyfriend has surprised her with a\nwedding proposal.\nThe -\ned\nand -\nen\nsuflxes are the most common endings for past participles. However, for\nhistorical reasons, there are actually several ways to form past participles. Note the fol-\nlowing patterns of some typical verbs:\nVerb base Perfect\nPast participle\nbe\nhave been\nbeen\nsee\nhave seen\nseen\ngive\nhave given given\narrange have arranged arranged\nwalk\nhave walked walked\nplay\nhave played played\nAnother way to form past participles is by changing a vowel of the verb base, sometimes\nalso adding the suflx -\nen\n.S o m ee xamplesa r e :\nVerb base Perfect\nPast participle\nbegin have begun begun\nsing\nhave sung sung\nspeak have spoken spoken\nweave have woven woven\n152\nUNIT 12: AUXILIARY PHRASES</p>\n<p>Sometimes no change at all is made to the verb:\nVerb base Perfect Past participle\nhit\nhave hit hit\ncome have come come\nThere is no magic or hard and fast rule to determine what the past participle of a partic-\nular verb is.W e simply have to memorize it when we learn English.\nIn each of the following sentences, the helping verb is a modal (underlined).What ediect\ndoes a modal have on the verb that follows it?\n12. The piano salesman should consider his actions.\n13. He will recognize it immediately.\n14. Sam could be a star quarterback.\n15. The major may speak to you later.\nQuick tip 36.3\nWhen the helping verb is a modal , the next verb is always in its base form . Example: can\nstudy.\nTest yourself 36.3\nEach of the following sentences has a modal helping verb. Underline the modal and put a squiggly\nline under the verb following it, which will be in its base form.\nSample: He should oppose their actions.\nGetting started\n(answers on p. 166)\n1. Richard will believe the truth.\n2. The waiter might bring it.\n3 . T h e ym a yb eh o m el a …</p>\n<p>W e can also see consistent patterns in the following two sentences:\n18. They\nshould have seen the doctor regularly.\n19. Y ou\nmight be observ ing the situation closely.\nIn sentence 18 the modal (in bold) causes the next verb,\nhave\n,t ob ei ni t sb a s ef o r m . T h e\nhave\nhelping verb then adiects the form of the next verb, the main verb\nsee\n,w h i c ha ppears\nin its past participle form,\nseen\n.S imilarly ,i ns entence1 9t h em o d a l ,\nmight\n,c a u s e st h e\nnext verb,\nbe\n,t ob ei ni t sb a s ef o r m . T h e nt h e\nbe\nadiects the form of the next verb, the main\nverb\nobserve</p>\n<p>, which appears in its present participle form,\nobserving\n.\nWhat happens if a sentence has all three kinds of helping verbs? The pattern still\nremainst h es a m e ,a sy o uc a ns e ei nt h en e x ts e to fe xamples :\n20. They\nshould have be en see ing the doctor regularly.\n21. Y ou\nmight have been observ ing the situation more closely.\nThe modal, which is the first helping verb (in bold), causes\nhave\nto be in its base form.The\nhave\nhelping verb (underlined) causes the next verb,\nbe\n, to appear in its past participle\nform, that is, with the\n-en\nsuflx (also underlined), and\nbe\n(with a squiggly line) causes the\nnext verb, the main verb, to be in its present participle form, that is, ending in\n-ing\n(also\nwith a squiggly line).\nSo the overall pattern is completely consistent, whether a sentence has one, two, or\nthree helping verbs.\nAs we've seen, when progressive\nbe\nis the helping verb, the next verb always has -\ning\nadded to it. But sometimes verbs ending in the -\ning\nsuflx have a didierent use, as we can\nsee in these next sentences:\n22. Skiing energizes me.\n23. I love cooking.\nIn these sentences, the -\ning\nword does not follow the helping verb\nbe\n.I n s t e a d ,\nthe -\ning\nending changes the verb into a noun. In fact, notice that the -\ning\nword\ncan be replaced with a typical noun i\nnt h e s es entences ,f o re x a m p l e :Sugar ener-\ngizes me\n,\nIl o v e Mary . A noun that consists of a verb and the suflx - ing is called a\ngerund\n.\nQuick tip 36.4\nA noun that consists of a verb and the sufﬁx - ing is called a gerund . Example: Entertain-ing\nis fun\n.\nHere are some more examples of sentences with gerunds:\n24. Reading is one of life's pleasures.\n25. Thinking can be hard work!\n26. The criminal admitted lying.\n27 . They stopped worrying about it.\nTest yourself 36.4\nDecide if each underlined word ending in - ing in the following sentences is being used as a verb,\npart of the progressive\nbe\n'' package,'' orasanoun , t h a t i s, asagerund . To h e l p yo udecide, s e e\nwhether or not the -\ning\nword follows the helping verb\nbe\n.\n154\nUNIT 12: AUXILIARY PHRASES</p>\n<p>Verb (progressive) Noun (gerund)\nSample: She likes walking the dog. ...................\nGetting started (answers on p. 166)\n1. They are constructing small homes in that part of town. ................... ...................\n2. He was looking for Jonas. ................... ...................\n3. The candidate thought about refusing. ................... ...................\n4. Giving to charity is an old American tradition. ................... ...................\n5. I should have thought of responding earlier. ................... ...................\nMore practice (answers on the website)\n6. Last night we were having lots of fun. ................... ...................\n7 . T h ee mployeew a sbeing honest with you. ................... ...................\n8. She enjoys listening to her iPod. ................... ...................\n9. Some doctors recommend taking vitamin pills. ................... ...................\n10. I am consideringy o u ro di e rs eriously . ................... ...................\nHere is a summary of the three helping verbs we've discussed in this lesson and the form of\nthe verb that follows each:\nHelping verb\nFollowing verb\nmodal\nbase form\nperfect\nhave\npast participle form (typically ending in -\ned\nor -\nen\n)\nprogressive\nbe\n: present participle form (always ending in -\ning\n)\nTwo additional helping verbs will be discussed in\nLessons 52\nand\n53\n.\n155</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 37,
    "title": "Tense",
    "html": "<p>The verb of a sentence gives information about tense . Speakers of English generally are\naware that, for example, the verb\nstudies\nis a present tense form while the verb\nstudied\nis a\npast tense form.\nTest yourself 37.1\nFor each verb below, decide if it is in its present tense or past tense form.\nPresent tense Past tense\nSample: was ...................\nGetting started (answers on p.167)\n1. sends ................... ...................\n2. felt ................... ...................\n3. perceived ................... ...................\n4. am ................... ...................\n5. has ................... ...................\nMore practice (answers on the website)\n6. wrote ................... ...................\n7. sat ................... ...................\n8. walk ................... ...................\n9. arose ................... ...................\n10. sing ................... ...................\nIt' s important to understand that grammatical tense and real world time are not neces-\nsarily the same.Take a look at the following sentences:\n1. She studied yesterday.\n2. She was studying yesterday.\nIn sentences 1and 2, the tense of the underlined verbs, as seen in their forms, is past; the\ntime that is being talked about is also past. So in these cases tense and time are the same.\nNow consider the following sentences:\n3. I am going to France next summer.\n4. She has bought the books for the course.\nIn sentences 3 and 4, the grammatical tense of the underlined verbs is present. (If these\nverbs were past tense forms, they would be\nwas\nand\nhad\n, respectively). However, the real-\nlife or actual time that sentence 3 is talking about is in the future; the actual time that sen-\ntence 4 is talking about is in the past. So in sentences 3 and 4 we can see that grammatical\ntense and real-life time are not always the same.\nFor the rest of this lesson, we'll be focusing on the tense (grammatical form) and not the\nreal-life time of English verbs.\nQuick tip 37.1\nTime refers to a point in real life at which something occurs. Tense refers to the grammatical\nform of a verb.\n156</p>\n<p>In a simple sentence, tense information is carried by only one verb. If a sentence has\nhelping verbs as well as a main verb, which verb shows tense? In each of the sentences\nbelow, the verb that carries the tense information is underlined.\n5. John studies.\n6. John studied.\n7. John has studied.\n8. John had studied.\n9. John is studying.\n10. John was studying.\n11. John has been studying.\n12. John had been studying.\nY o uc a ns e et h a ti ne a c hs entencei ti st h ev e r yfi r s tv e r bt h a tc a r r i e st h et e n s ei n f o r m a -\ntion, regardless of whether it' s a helping verb or the main verb.\nY ou will notice that we have not included in our list of sentences in 5 through 12 exam-\nples of sentences whose first verb is a modal. (Recall from\nLesson 34\nthat modals always\ncome first in sentences with more than one verb.) That is because in general, modals do\nnot carry clear tense information. Look at the following examples:\n13. I might do it right now / today.\n14. I might do it tomorrow.\n15. I might have done it yesterday.\nAs you can see, the form of the modal is the same (\nmight\n), regardless of whether it refers to\ntime in the present (sentence 13), time in the future (sentence 14), or time in the past (sen-\ntence 15). W e will consider modals to be tenseless.\nQuick tip 37.2\nTense information is always indicated by the ﬁrst verb in the sentence, excluding modals .\nTraditionally, sentences have been grouped into didierent types, according to the tense\nof the verb. Let' s compare the following two sentences:\n16. John studies every day.\n17. John studied every day.\nY ou can see that the only didierence between sentence 16 and sentence 17 is that in 16,\nstudy\nis in its present tense form and in 17\nstudy\nis in its past tense form. On this basis,\nsentence 16 has\npresent tense\n(or\nsimple present tense\n), while sentence 17 has\npast\ntense\n(or\nsimple past tense\n).\nHere are some more examples, with the verbs underlined:\n18. Ira sighed in relief. ( past)\n19. Alice sees her often. ( present)\n20. He laughed hysterically. ( past)\n21. I often forget the answer. ( present)\nQuick tip 37.3\nSentences with no helping verb are in either the present or past tense, depending on the\nform of the verb.\nAlmost all verbs, like the verbs in sentences 18 and 20, form their past tense by adding the\nsuflx\n-ed\n.T h e s ev erbsarecall e d\nregular verbs\n.S o m ev e r b s ,h o w e v e r ,d on o tf o l l o wt h i s\n157</p>\n<p>pattern. These verbs are called irregular verbs .S o m ee xampleso fi rregularv e r b sa r e :\nsee\n(past tense\nsaw\n),\nwrite\n(past tense\nwrote\n), and\nhit\n(past tense\nhit\n).\nTest yourself 37.2\nDecide if each sentence is in the present or past tense.Y ou'll need to find the verb to make this decision.\nSample: Her daughter giggled happily.\npast...........\nGetting started (answers on p.167)\n1. They deliver furniture onTuesdays. .........................................................................................\n2. The senator supports that bill. .........................................................................................\n3. I voted for him. .........................................................................................\n4. I ate a sandwich for lunch. ..........................................................................................\n5. The shortstop hit a home run. ..........................................................................................\nMore practice (answers on the website)\n6. Michigan State beat Ohio State. ..........................................................................................\n7. Our niece studies anthropology. ..........................................................................................\n8. The weather is humid today. ..........................................................................................\n9. The repairman arrived at noon. ..........................................................................................\n10. My daughter came for a visit. ..........................................................................................\nThe next two sentences have future tense (or simple future tense ): they have the\nmodal helping verb\nwill\n, followed by the base of the main verb.\n22. John will study tomorrow.\n23. Jessica will visit her soon.\nQuick tip 37.4\nSentences with will followed by the main verb are in the future tense .\nT h ef u t u r et e n s ec a na l s ob ee xpressedw i t ht h em o d a lh e l p i n gv e r b shall :e . g . John shall\nstudy tomorrow\n.\nShall\nhas restricted usage in American English: generally, it' s used only\nin formal speech styles. Consequently, we'll ignore\nshall\nin our discussion here.\nTest yourself 37.3\nDecide if each sentence below is in the present, past, or future tense.\nSample: Those Halloween decorations will look scary.\nfuture.................\nGetting started (answers on p.167)\n1. He sleeps late on weekends. .............................................................................\n2. Zach was proud of his son. .............................................................................\n3. Bethany will get married soon. .............................................................................\n158\nUNIT 12: AUXILIARY PHRASES</p>\n<p>4. The show began promptly at 8 P.M. .............................................................................\n5. My sister will run in the NewY ork City marathon. .............................................................................\nMore practice (answers on the website)\n6. The codiee tasted bitter. .............................................................................\n7. I study in England every summer. .............................................................................\n8. My younger brother beat me at chess. .............................................................................\n9. Stu gets up at 7 A.M.e v e r ym o r n i n g . ................................................................................\n10. W e will hold a family reunion in July. .............................................................................\nAs we saw above (in sentences 4, 11, and 12), sentences with the have helping verb also\nchange in form to indicate tense:\n24. I have bought the books.\n25. I had bought the books.\nThe didierence between the two sentences is that sentence 24 is in the present\nt e n s e ,w h i l es entence2 5i si nt h ep a s tt e n s e .N o t i c et h a ti ti so n l yt h ef o r mo f\nhave\nthat changes to indicate the tense information. The verb after\nhave\nis always in its\npast participle form, which does not change to indicate tense. Although sentences\nwith the\nhave\nhelping verb are in the perfect aspect, when we talk about a sentence\nwith both tense and aspect, we just use the term ' 'tense. ' ' So therefore sentence 24\nis in the\npresent perfect tense\nwhile sentence 25 is in the\npast perfect tense\n.\nQuick tip 37.5\nIf a sentence has a form of have as a helping verb , it will have the word perfect as part of\nthe name of its tense.\nQuick tip 37.6\nThe present tense forms of have are have and has . The past tense form of have is had .\nTest yourself 37.4\nDecide if each sentence is in the present perfect or past perfect tense. Use the form of have to help\nyou make your decision.\nSample: I had believed every word of that broadcast.\npast perfect..............................\nGetting started (answers on p.167)\n1. She  …</p>\n<p>More practice (answers on the website)\n6. They have purchased a new home. ....................................................................................................\n7. On our trip, we had converted $200 to euros. ....................................................................................................\n8. Andy has promised to tell the truth. ..........................................................................................................\n9. The detective had found an important witness. ....................................................................................................\n10. The Democrats have won the presidency. ....................................................................................................\nWhat do you think is the tense of the following sentences?\n26. John will have studied by then.\n27 . It will have been an easy test.\nSince these sentences have both\nwill\nand a form of\nhave\nas helping verbs, they are in the\nfuture perfect tense\n.\nQuick tip 37.7\nIf a sentence has will as a helping verb , it will have the word future as part of the name of its\ntense.\nTest yourself 37.5\nDecide if each sentence below is in the present perfect, past perfect, or future perfect tense. Look at\nthe form of\nhave\na n df o rt h ep resenceo ra b s e n c eo f\nwill\nto help you.\nSample: Our friends have dropped by.\npresent perfect......................................\nGetting started (answers on p.167)\n1. They have finished the assignment. .................................................................................................\n2. The alarm clock will have gone odi by then. .................................................................................................\n3. Linda had locked the door. .................................................................................................\n4. My friend John has been a great help to me. .................................................................................................\n5. By then, I will have finished studying. .................................................................................................\nMore practice (answers on the website)\n6. Frank had appeared in a movie once. .................................................................................................\n7. Y ou have encouraged me many times. .................................................................................................\n8. She has written a letter to her sister. .................................................................................................\n9. There had been a ffood of inquiries. .....................................................................................................\n10. Y ou will have left a great legacy to your children. ........................................................................................................\n160\nUNIT 12: AUXILIARY PHRASES</p>\n<p>L a s t ,w ec o m et os entencesw i t haf o r mo f be as a helping verb.These also change in form\nto indicate tense:\n28. I am buying the book.\n29. I was buying the book.\nThe didierence between the two sentences is that sentence 28 is in the present tense, while\nsentence 29 is in the past tense. Notice that the verb after\nbe\nis in its present participle form\n(that is, its -\ning\nform), which does not change to indicate tense. Remember that although\nsentences with the\nbe\nhelping verb are in the progressive aspect, when we talk about a sen-\ntence with both tense and aspect, we just use the term''tense. '' So therefore sentence 28 is in\nthe\npresent progressive tense\nw h i l es entence2 9i si nt h e\npast progressive tense\n.\nAs you might expect, the following sentences are in the\nfuture progressive tense\n:\n30. I will be leaving at three o' clock.\n31. Harry will be running the marathon.\nY ou can see that they have both\nwill\nand\nbe\nas helping verbs.\nQuick tip 37.8\nIf a sentence has a form of be as a helping verb , it will have the word progressive as part of\nthe name of its tense.\nQuick tip 37.9\nThe present tense forms of be are am , is , and are . The past tense forms of be are was and\nwere</p>\n<p>.\nTest yourself 37.6\nDecide if each sentence below is in the present progressive, past progressive, or future progressive\ntense. Look at the form of\nbe\na n df o rt h ep resenceo ra b s e n c eo f\nwill\nto help you.\nSample: He was racing down the steps of the library.\npast progressive..........................................\nGetting started (answers on p.167)\n1. She is packing her bags. ..............................................................................................\n2. Tom will be thinking about it all day. ..............................................................................................\n3. The computer was working on it. ..............................................................................................\n4. It will be snowing tomorrow. .................................................................... …</p>\n<p>Contenido en el PDF del libro.</p>"
   }
  ],
  "tips": [
   {
    "code": "31.1",
    "text": "The basic helping verbs of English are: a. can may shall will must could might should would b. have has had c. am are is was were be been being Now take another look at sentences 1^3, which have both a helping verb and a main verb. Which comes first? Y ou can see that the main verb always comes after the help- ing verb."
   },
   {
    "code": "31.2",
    "text": "If a sentence has both a main verb and a helping verb, the main verb is always last. Does every sentence of English have a helping verb? Here are examples of sentences that do not have a helping verb. Each only has a main verb, which is underlined. 4. She studies every day. 5. She studied every day. 6. He leaves at 9 in the morning. 7. He left at 9 in the morning."
   },
   {
    "code": "31.1",
    "text": ". W e'll take a closer look at each of the three types of helping verbs in the next few lessons. 140"
   },
   {
    "code": "32.1",
    "text": "One kind of helping verb is called a modal. The basic modals of English are: can could may might shall should will would must"
   },
   {
    "code": "31.1",
    "text": ".) 1. She had greeted me happily. 2. They have eaten dinner early today. 3. He has written many articles about the wealthy. Sentences with the helping verb have are said to be expressed in the perfect aspect , which adds information to the main verb about real-world time. For example, in sentence 2, using have indicates that the action began in the past and is complete."
   },
   {
    "code": "33.1",
    "text": "One kind of helping verb is the verb have . It has three forms: have , has , and had ."
   },
   {
    "code": "33.2",
    "text": "Have can be used as a helping verb or as a main verb. When have is used as the main verb, it refers to the idea of possession. When have is used as the helping verb , it is always followed by another verb."
   },
   {
    "code": "31.1",
    "text": ".) In addition to the forms is , was ,a n d were , additional forms of be are am , are , be , been ,a n d being . Sentences with the helping verb be a r es a i dt ob ee xpressedi nt h e progressive or con- tinuous aspect , which usually indicates that the action takes place over a period of time."
   },
   {
    "code": "34.1",
    "text": "One kind of helping verb is be . It has the following forms: am, is , are , was , were, be, been , and being ."
   },
   {
    "code": "34.2",
    "text": "Be and its forms can be used as a helping verb or as a main verb. When be is used as the helping verb, it is always followed by another verb."
   },
   {
    "code": "35.1",
    "text": "A sentence can have zero, one, or more than one helping verb. If there is more than one, they will always be in the following relative order: modal + have + be ."
   },
   {
    "code": "36.1",
    "text": "When the helping verb is progressive be , the next verb always has -ing added to its base form. Example: is sleeping . The - ing verb form is called the present participle ."
   },
   {
    "code": "36.2",
    "text": "When have is the helping verb , the next verb typically has -ed or -en added to its base form . Examples: has eaten, have watched . The verb form following the helping verb have is called the past participle ."
   },
   {
    "code": "36.3",
    "text": "When the helping verb is a modal , the next verb is always in its base form . Example: can study."
   },
   {
    "code": "36.4",
    "text": "A noun that consists of a verb and the sufﬁx - ing is called a gerund . Example: Entertain-ing is fun . Here are some more examples of sentences with gerunds: 24. Reading is one of life's pleasures. 25. Thinking can be hard work! 26. The criminal admitted lying. 27 . They stopped worrying about it."
   },
   {
    "code": "37.1",
    "text": "Time refers to a point in real life at which something occurs. Tense refers to the grammatical form of a verb. 156 In a simple sentence, tense information is carried by only one verb. If a sentence has helping verbs as well as a main verb, which verb shows tense? In each of the sentences below, the verb that carries the tense information is underlined. 5. John studies. 6. John studied. 7. John has studied. 8. John had studied. 9. John is studying. 10. John was studying. 11. John has been studying. 12. John had been studying. Y o uc a ns e et h a ti ne a c hs entencei ti st h ev e r yfi r s tv e r bt h a tc a r r i e st h et e n s ei n f o r…"
   },
   {
    "code": "37.2",
    "text": "Tense information is always indicated by the ﬁrst verb in the sentence, excluding modals . Traditionally, sentences have been grouped into didierent types, according to the tense of the verb. Let' s compare the following two sentences: 16. John studies every day. 17. John studied every day. Y ou can see that the only didierence between sentence 16 and sentence 17 is that in 16, study is in its present tense form and in 17 study is in its past tense form. On this basis, sentence 16 has present tense (or simple present tense ), while sentence 17 has past tense (or simple past tense ). Here are some more examples, with the verbs underlined: 18.…"
   },
   {
    "code": "37.3",
    "text": "Sentences with no helping verb are in either the present or past tense, depending on the form of the verb. Almost all verbs, like the verbs in sentences 18 and 20, form their past tense by adding the suflx -ed .T h e s ev erbsarecall e d regular verbs .S o m ev e r b s ,h o w e v e r ,d on o tf o l l o wt h i s 157"
   },
   {
    "code": "37.4",
    "text": "Sentences with will followed by the main verb are in the future tense . T h ef u t u r et e n s ec a na l s ob ee xpressedw i t ht h em o d a lh e l p i n gv e r b shall :e . g . John shall study tomorrow . Shall has restricted usage in American English: generally, it' s used only in formal speech styles. Consequently, we'll ignore shall in our discussion here."
   },
   {
    "code": "37.5",
    "text": "If a sentence has a form of have as a helping verb , it will have the word perfect as part of the name of its tense."
   },
   {
    "code": "37.6",
    "text": "The present tense forms of have are have and has . The past tense form of have is had ."
   },
   {
    "code": "37.7",
    "text": "If a sentence has will as a helping verb , it will have the word future as part of the name of its tense."
   },
   {
    "code": "37.8",
    "text": "If a sentence has a form of be as a helping verb , it will have the word progressive as part of the name of its tense."
   },
   {
    "code": "37.9",
    "text": "The present tense forms of be are am , is , and are . The past tense forms of be are was and were ."
   }
  ],
  "practice": [
   {
    "code": "30.13",
    "instruction": "1. Y our sister is a talented pianist. 2. Their doctor operates at that hospital. 3. Robert threw himself into the battle. 4. The odier sounded unrealistic. 5. His mother went to the drugstore.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "30.14",
    "instruction": "1. Y our sister is a talented pianist. verb + noun phrase 2. Their doctor operates at that hospital. verb + prepositional phrase 3. Robert threw himself into the battle. verb + noun phrase + prepositional phrase 4. The odier sounded unrealistic. verb + adjective 5. His mother went to the drugstore. verb + prepositional phrase FOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "31.1",
    "instruction": "Decide whether or not each sentence has a helping verb. Look for the main verb, which is underlined, and see if there' s a helping verb before it. Helping verb: NO Helping verb:YES",
    "sample": "Sample: He talked about himself. ................... 139",
    "items": [
     {
      "n": 1,
      "text": "They were arguing loudly.",
      "answer": "They were arguing loudly"
     },
     {
      "n": 2,
      "text": "The frog had jumped five feet.",
      "answer": "The frog had jumped five feet"
     },
     {
      "n": 3,
      "text": "Y ouinvited everyone.",
      "answer": "Youinvited everyone"
     },
     {
      "n": 4,
      "text": "I must buy some milk.",
      "answer": "I must buy some milk"
     },
     {
      "n": 5,
      "text": "Harry lives in Europe.",
      "answer": "Harry lives in Europe"
     }
    ],
    "answers": {
     "1": "They were arguing loudly",
     "2": "The frog had jumped five feet",
     "3": "Youinvited everyone",
     "4": "I must buy some milk",
     "5": "Harry lives in Europe"
    }
   },
   {
    "code": "31.2",
    "instruction": "Decide whether or not each sentence has a helping verb. This time the main verbs are not underlined. Helping verb: NO Helping verb:YES",
    "sample": "Sample: Maggie was walking nearby. ...................",
    "items": [
     {
      "n": 1,
      "text": "Y ou might write her a letter.",
      "answer": "You might write her a letter"
     },
     {
      "n": 2,
      "text": "Congress voted on the bill.",
      "answer": "Congress voted on the bill"
     },
     {
      "n": 3,
      "text": "Beth has survived that ordeal.",
      "answer": "Beth has survived that ordeal"
     },
     {
      "n": 4,
      "text": "I could be an actor.",
      "answer": "I could be an actor"
     },
     {
      "n": 5,
      "text": "The Giants won the Super Bowl.",
      "answer": "The Giants won the Super Bowl"
     }
    ],
    "answers": {
     "1": "You might write her a letter",
     "2": "Congress voted on the bill",
     "3": "Beth has survived that ordeal",
     "4": "I could be an actor",
     "5": "The Giants won the Super Bowl"
    }
   },
   {
    "code": "32.1",
    "instruction": "Underline the modal in each of the sentences below.",
    "sample": "Sample:William should tell you the story.",
    "items": [
     {
      "n": 1,
      "text": "They must delay the invasion.",
      "answer": "They must delay the invasion"
     },
     {
      "n": 2,
      "text": "Y ou will find courage in your heart.",
      "answer": "Youwill find courage in your heart"
     },
     {
      "n": 3,
      "text": "Mr. Knight might go with you.",
      "answer": "Mr. Knight might go with you"
     },
     {
      "n": 4,
      "text": "Y ou should be proud of yourself.",
      "answer": "Youshould be proud of yourself"
     },
     {
      "n": 5,
      "text": "Tomorrow we may go to the movies.",
      "answer": "Tomorrow we may go to the movies"
     }
    ],
    "answers": {
     "1": "They must delay the invasion",
     "2": "Youwill find courage in your heart",
     "3": "Mr. Knight might go with you",
     "4": "Youshould be proud of yourself",
     "5": "Tomorrow we may go to the movies"
    }
   },
   {
    "code": "32.2",
    "instruction": "Underline the modal and put a squiggly line under the main verb in each of the sentences below.",
    "sample": "Sample: She will be happy.",
    "items": [
     {
      "n": 1,
      "text": "The curtains might hide the view.",
      "answer": "The curtains might hide the view"
     },
     {
      "n": 2,
      "text": "Paul could work on the problem.",
      "answer": "Paul could work on the problem"
     },
     {
      "n": 3,
      "text": "She can leave this afternoon.",
      "answer": "She can leave this afternoon"
     },
     {
      "n": 4,
      "text": "Y ou must go to the emergency room immediately. 5 . T h ec hildrenw i l le n j o yt h e s eg i f t s . 141",
      "answer": "Youmust go to the emergency room immediately"
     }
    ],
    "answers": {
     "1": "The curtains might hide the view",
     "2": "Paul could work on the problem",
     "3": "She can leave this afternoon",
     "4": "Youmust go to the emergency room immediately",
     "5": "The children will enjoy these gifts"
    }
   },
   {
    "code": "33.1",
    "instruction": "Underline the have helping verb in each of the sentences below. It may be in any of the three forms of have . In these sentences, it will always be directly before the main verb.",
    "sample": "Sample: I have imagined this for years.",
    "items": [
     {
      "n": 2,
      "text": "That cheerful woman has saved the day.",
      "answer": "That cheerful woman has saved the day"
     },
     {
      "n": 3,
      "text": "My uncles have visited us every summer.",
      "answer": "My uncles have visited us every summer"
     },
     {
      "n": 4,
      "text": "Her neighbor has been an attorney for twenty years.",
      "answer": "Her neighbor h a sb e e na na ttorneyf o rt w e n t yy e a r s"
     },
     {
      "n": 5,
      "text": "Suzie had traveled to Belgium twice before.",
      "answer": "Suzie had traveled to Belgium twice before. 164"
     }
    ],
    "answers": {
     "1": "The bridge had collapsed",
     "2": "That cheerful woman has saved the day",
     "3": "My uncles have visited us every summer",
     "4": "Her neighbor h a sb e e na na ttorneyf o rt w e n t yy e a r s",
     "5": "Suzie had traveled to Belgium twice before. 164"
    }
   },
   {
    "code": "33.2",
    "instruction": "Underline the have helping verb and put a squiggly line under the main verb in each of the sentences below.",
    "sample": "Sample: He had annoyed his boss.",
    "items": [
     {
      "n": 1,
      "text": "Joan and Sam have worked for hours.",
      "answer": "Joan and Sam have worked for hours"
     },
     {
      "n": 2,
      "text": "Their mother has spoken of you often.",
      "answer": "Their mother has spoken of you often"
     },
     {
      "n": 3,
      "text": "The prime minister had written to him.",
      "answer": "The prime minister had written to him"
     },
     {
      "n": 4,
      "text": "Y our daughter has grown a lot taller.",
      "answer": "Your daughter has grown al o tt a l l e r"
     },
     {
      "n": 5,
      "text": "She has seen her friends twice since last Sunday. 143",
      "answer": "She has seen her friends twice since last Sunday"
     }
    ],
    "answers": {
     "1": "Joan and Sam have worked for hours",
     "2": "Their mother has spoken of you often",
     "3": "The prime minister had written to him",
     "4": "Your daughter has grown al o tt a l l e r",
     "5": "She has seen her friends twice since last Sunday"
    }
   },
   {
    "code": "33.3",
    "instruction": "Decide if the forms of have i nt h ef ollowings entencesa r eb e i n gu s e da sh e l p i n gv e r b so ra sm a i n verbs. Helping verb Main verb",
    "sample": "Sample: Jack had a good time. ...................",
    "items": [
     {
      "n": 1,
      "text": "Jack has experienced a good time.",
      "answer": "Jack has experienced a good time"
     },
     {
      "n": 2,
      "text": "He has seen her often.",
      "answer": "He has seen her often"
     },
     {
      "n": 3,
      "text": "Y ou have a lot of DVDs.",
      "answer": "You have a lot of DVDs"
     },
     {
      "n": 4,
      "text": "She had tacos for dinner.",
      "answer": "She had tacos for dinner"
     },
     {
      "n": 5,
      "text": "Y our professor has the answer to your question.",
      "answer": "Your professor has the answer to your question"
     }
    ],
    "answers": {
     "1": "Jack has experienced a good time",
     "2": "He has seen her often",
     "3": "You have a lot of DVDs",
     "4": "She had tacos for dinner",
     "5": "Your professor has the answer to your question"
    }
   },
   {
    "code": "34.1",
    "instruction": "Underline the form of the be helpingv e r bi ne a c ho ft h es entencesb e l o w .",
    "sample": "Sample: He was exercising regularly.",
    "items": [
     {
      "n": 1,
      "text": "The reporter was writing her story.",
      "answer": "The reporter was writing her story"
     },
     {
      "n": 2,
      "text": "He is controlling his temper.",
      "answer": "He is controlling his temper"
     },
     {
      "n": 3,
      "text": "Y ou are learning about syntax.",
      "answer": "Youare learning about syntax"
     },
     {
      "n": 4,
      "text": "They were watching a movie last Sunday.",
      "answer": "They were watching a movie last Sunday"
     },
     {
      "n": 5,
      "text": "I am doing a lot of things right now.",
      "answer": "I am doing a lot of things right now"
     }
    ],
    "answers": {
     "1": "The reporter was writing her story",
     "2": "He is controlling his temper",
     "3": "Youare learning about syntax",
     "4": "They were watching a movie last Sunday",
     "5": "I am doing a lot of things right now"
    }
   },
   {
    "code": "34.2",
    "instruction": "Underline the be helping verb and put a squiggly line under the main verb in each of the sentences below.",
    "sample": "Sample: He is greeting his boss.",
    "items": [
     {
      "n": 1,
      "text": "I was talking to Harry.",
      "answer": "I was talking to Harry"
     },
     {
      "n": 2,
      "text": "Irving and Annie are studying Latin.",
      "answer": "Irving and Annie are studying Latin"
     },
     {
      "n": 3,
      "text": "He is testing her loyalty.",
      "answer": "He is testing her loyalty"
     },
     {
      "n": 4,
      "text": "I am taking a walk.",
      "answer": "I am taking aw a l k"
     },
     {
      "n": 5,
      "text": "Y ou were reading for hours.",
      "answer": "Youwere reading for hours"
     }
    ],
    "answers": {
     "1": "I was talking to Harry",
     "2": "Irving and Annie are studying Latin",
     "3": "He is testing her loyalty",
     "4": "I am taking aw a l k",
     "5": "Youwere reading for hours"
    }
   },
   {
    "code": "34.3",
    "instruction": "Decide if the forms of be in the following sentences are being used as helping verbs or as main verbs. Helping verb Main verb",
    "sample": "Sample: Joan is a genius. ...................",
    "items": [
     {
      "n": 1,
      "text": "Sam is looking at the mail.",
      "answer": "Sam is looking at the mail"
     },
     {
      "n": 2,
      "text": "That concept was diflcult.",
      "answer": "That concept was di⁄cult"
     },
     {
      "n": 3,
      "text": "Y ou are helping her a lot.",
      "answer": "You are helping her a lot"
     },
     {
      "n": 4,
      "text": "I am a doctor.",
      "answer": "I am a doctor"
     },
     {
      "n": 5,
      "text": "They were watching TV.",
      "answer": "They were watching TV"
     }
    ],
    "answers": {
     "1": "Sam is looking at the mail",
     "2": "That concept was di⁄cult",
     "3": "You are helping her a lot",
     "4": "I am a doctor",
     "5": "They were watching TV"
    }
   },
   {
    "code": "35.1",
    "instruction": "For each sentence below, underline the main verb.Then decide if the sentence has zero, one, two, or three helping verbs before the main verb.",
    "sample": "Sample: They may rent a car at the terminal. 1",
    "items": [
     {
      "n": 2,
      "text": "Andy should have been enjoying his new career.",
      "answer": "Andy should have been enjoying his new career"
     },
     {
      "n": 3,
      "text": "Mrs. Packard's life changed at that point.",
      "answer": "Mrs. Packard’s life changed at that point"
     },
     {
      "n": 4,
      "text": "Y ou can have two scoops of ice cream.",
      "answer": "You can have two scoops of ice cream"
     },
     {
      "n": 5,
      "text": "I might have committed a serious error.  148",
      "answer": "I might have committed a serious error"
     }
    ],
    "answers": {
     "1": "She was focusing on the mirror",
     "2": "Andy should have been enjoying his new career",
     "3": "Mrs. Packard’s life changed at that point",
     "4": "You can have two scoops of ice cream",
     "5": "I might have committed a serious error"
    }
   },
   {
    "code": "35.2",
    "instruction": "Underline each helping verb in the sentences below. Each sentence will have at least one helping verb.",
    "sample": "Sample: The children have been working hard.",
    "items": [
     {
      "n": 1,
      "text": "Y ou should read this book.",
      "answer": "Youshould read this book"
     },
     {
      "n": 2,
      "text": "She had been greeting me happily.",
      "answer": "She had been greeting me happily. 165"
     },
     {
      "n": 3,
      "text": "Janice might have gotten the ffu.",
      "answer": ""
     },
     {
      "n": 4,
      "text": "My question was bothering him.",
      "answer": ""
     },
     {
      "n": 5,
      "text": "The prime suspect might have been telling the truth.",
      "answer": ""
     }
    ],
    "answers": {
     "1": "Youshould read this book",
     "2": "She had been greeting me happily. 165"
    }
   },
   {
    "code": "35.3",
    "instruction": "Underline each helping verb in the sentences below. A sentence will have anywhere from zero to three helping verbs.",
    "sample": "Sample: He and Bill shook hands. (No helping verb.)",
    "items": [
     {
      "n": 1,
      "text": "I had been writing to him often.",
      "answer": "I had been writing to him often"
     },
     {
      "n": 2,
      "text": "Their mother has spoken of you a lot.",
      "answer": "Their mother has spoken of you a lot"
     },
     {
      "n": 3,
      "text": "Sam will recognize it immediately.",
      "answer": "Sam will recognize it immediately"
     },
     {
      "n": 4,
      "text": "W e were good friends.",
      "answer": "W e were good friends. (No helping verb.)"
     },
     {
      "n": 5,
      "text": "Y ou should be studying right now.",
      "answer": "Youshould be studying right now"
     }
    ],
    "answers": {
     "1": "I had been writing to him often",
     "2": "Their mother has spoken of you a lot",
     "3": "Sam will recognize it immediately",
     "4": "W e were good friends. (No helping verb.)",
     "5": "Youshould be studying right now"
    }
   },
   {
    "code": "35.4",
    "instruction": "Underline each helping verb in the sentences below and put a squiggly line under the main verb. A sentence will have anywhere from zero to three helping verbs.",
    "sample": "Sample: Paul was offering me a drink. 149",
    "items": [],
    "answers": {
     "1": "They can do the research",
     "2": "Suzanne might be leaving sooner",
     "3": "Papa has been teasing him",
     "4": "I might have been being too cautious",
     "5": "The plane was late"
    }
   },
   {
    "code": "36.1",
    "instruction": "Each of the following sentences has a form of the helping verb be . Underline the be verb and the -ing ending of the following verb.",
    "sample": "Sample: Maggie is sleep ing now.",
    "items": [
     {
      "n": 2,
      "text": "The curtains were masking the view.",
      "answer": "The curtains were mask ing the view"
     },
     {
      "n": 3,
      "text": "I was wondering about his behavior.",
      "answer": "I was wonder ing about his behavior"
     },
     {
      "n": 4,
      "text": "Paul is leaning on his wife' s chair.",
      "answer": "Paul is lean ing on his wife’ s chair"
     },
     {
      "n": 5,
      "text": "They are sounding rather defensive.",
      "answer": "They are sound ing rather defensive"
     }
    ],
    "answers": {
     "1": "She is leaving on the ten o’ clock train",
     "2": "The curtains were mask ing the view",
     "3": "I was wonder ing about his behavior",
     "4": "Paul is lean ing on his wife’ s chair",
     "5": "They are sound ing rather defensive"
    }
   },
   {
    "code": "36.2",
    "instruction": "Each of the following sentences has a form of the helping verb have . Underline the have and the -ed or -en ending of the following verb.",
    "sample": "Sample:Y ou had manag ed the situation very well.",
    "items": [
     {
      "n": 1,
      "text": "The women had spoken to each other recently.",
      "answer": "The women had spok en to each other recently"
     },
     {
      "n": 2,
      "text": "Unfortunately, the heroine had married the villain.",
      "answer": "Unfortunately, the heroine had marri ed the villain"
     },
     {
      "n": 3,
      "text": "Andy and George have enjoyed themselves enormously.",
      "answer": "Andy and George have enjoy ed themselves enormously"
     },
     {
      "n": 4,
      "text": "My student has written an interesting essay on technology.",
      "answer": "My student has writt en an interesting essay on technology"
     },
     {
      "n": 5,
      "text": "The hockey game has ended in a tie.",
      "answer": "The hockey game has end ed in a tie"
     }
    ],
    "answers": {
     "1": "The women had spok en to each other recently",
     "2": "Unfortunately, the heroine had marri ed the villain",
     "3": "Andy and George have enjoy ed themselves enormously",
     "4": "My student has writt en an interesting essay on technology",
     "5": "The hockey game has end ed in a tie"
    }
   },
   {
    "code": "36.3",
    "instruction": "Each of the following sentences has a modal helping verb. Underline the modal and put a squiggly line under the verb following it, which will be in its base form.",
    "sample": "Sample: He should oppose their actions.",
    "items": [
     {
      "n": 1,
      "text": "Richard will believe the truth.",
      "answer": "Richard will believethe truth"
     },
     {
      "n": 2,
      "text": "The waiter might bring it. 3 . T h e ym a yb eh o m el a t e .",
      "answer": "The waiter might bring it"
     },
     {
      "n": 4,
      "text": "W e shall overcome this obstacle.",
      "answer": "W eshall overcome this obstacle"
     },
     {
      "n": 5,
      "text": "I would do it in an instant.",
      "answer": "I would do it in an instant"
     }
    ],
    "answers": {
     "1": "Richard will believethe truth",
     "2": "The waiter might bring it",
     "3": "They may be home late",
     "4": "W eshall overcome this obstacle",
     "5": "I would do it in an instant"
    }
   },
   {
    "code": "36.4",
    "instruction": "Decide if each underlined word ending in - ing in the following sentences is being used as a verb, part of the progressive be '' package,'' orasanoun , t h a t i s, asagerund . To h e l p yo udecide, s e e whether or not the - ing word follows the helping verb be . 154",
    "sample": "",
    "items": [],
    "answers": {
     "1": "They are constructing small homes in that part of town",
     "2": "He was looking for Jonas",
     "3": "The candidate thought about refusing",
     "4": "Giving to charity is an old American tradition",
     "5": "I should have thought of responding earlier. 166 UNIT 12: AUXILIARY PHRASES"
    }
   },
   {
    "code": "37.1",
    "instruction": "For each verb below, decide if it is in its present tense or past tense form. Present tense Past tense",
    "sample": "Sample: was ...................",
    "items": [
     {
      "n": 1,
      "text": "sends",
      "answer": "sends"
     },
     {
      "n": 2,
      "text": "felt",
      "answer": "felt"
     },
     {
      "n": 3,
      "text": "perceived",
      "answer": "perceived"
     },
     {
      "n": 4,
      "text": "am",
      "answer": "am"
     },
     {
      "n": 5,
      "text": "has",
      "answer": "has"
     }
    ],
    "answers": {
     "1": "sends",
     "2": "felt",
     "3": "perceived",
     "4": "am",
     "5": "has"
    }
   },
   {
    "code": "37.2",
    "instruction": "Decide if each sentence is in the present or past tense.Y ou'll need to find the verb to make this decision.",
    "sample": "Sample: Her daughter giggled happily. past...........",
    "items": [
     {
      "n": 1,
      "text": "They deliver furniture onTuesdays.",
      "answer": "They deliver furniture onTuesdays. present"
     },
     {
      "n": 2,
      "text": "The senator supports that bill.",
      "answer": "The senator supports that bill. present"
     },
     {
      "n": 3,
      "text": "I voted for him.",
      "answer": "I voted for him. past"
     },
     {
      "n": 4,
      "text": "I ate a sandwich for lunch.",
      "answer": "I ate a sandwich for lunch. past"
     },
     {
      "n": 5,
      "text": "The shortstop hit a home run.",
      "answer": "The shortstop hit a home run. past"
     }
    ],
    "answers": {
     "1": "They deliver furniture onTuesdays. present",
     "2": "The senator supports that bill. present",
     "3": "I voted for him. past",
     "4": "I ate a sandwich for lunch. past",
     "5": "The shortstop hit a home run. past"
    }
   },
   {
    "code": "37.3",
    "instruction": "Decide if each sentence below is in the present, past, or future tense.",
    "sample": "Sample: Those Halloween decorations will look scary. future.................",
    "items": [
     {
      "n": 1,
      "text": "He sleeps late on weekends.",
      "answer": "He sleeps late on weekends. present"
     },
     {
      "n": 2,
      "text": "Zach was proud of his son.",
      "answer": "Zach was proud of his son. past"
     },
     {
      "n": 3,
      "text": "Bethany will get married soon.  158",
      "answer": "Bethany will get married soon. future"
     }
    ],
    "answers": {
     "1": "He sleeps late on weekends. present",
     "2": "Zach was proud of his son. past",
     "3": "Bethany will get married soon. future",
     "4": "The show began promptly at 8 P.M. past",
     "5": "My sister will run in the NewY ork City marathon. future"
    }
   },
   {
    "code": "37.4",
    "instruction": "Decide if each sentence is in the present perfect or past perfect tense. Use the form of have to help you make your decision.",
    "sample": "Sample: I had believed every word of that broadcast. past perfect..............................",
    "items": [
     {
      "n": 1,
      "text": "She had wanted to do everything her way.",
      "answer": "She had wanted to do everything her way. past perfect"
     },
     {
      "n": 2,
      "text": "Martha has known about the surprise.",
      "answer": "Martha has known about the surprise. present perfect"
     },
     {
      "n": 3,
      "text": "Samantha had decided to do that.",
      "answer": "Samantha had decided to do that. past perfect"
     },
     {
      "n": 4,
      "text": "I have written to him about that issue.",
      "answer": "I have written to him about that issue. present perfect"
     },
     {
      "n": 5,
      "text": "Y ou have been a good friend.  159",
      "answer": "You have been a good friend. present perfect"
     }
    ],
    "answers": {
     "1": "She had wanted to do everything her way. past perfect",
     "2": "Martha has known about the surprise. present perfect",
     "3": "Samantha had decided to do that. past perfect",
     "4": "I have written to him about that issue. present perfect",
     "5": "You have been a good friend. present perfect"
    }
   },
   {
    "code": "37.5",
    "instruction": "Decide if each sentence below is in the present perfect, past perfect, or future perfect tense. Look at the form of have a n df o rt h ep resenceo ra b s e n c eo f will to help you.",
    "sample": "Sample: Our friends have dropped by. present perfect......................................",
    "items": [
     {
      "n": 1,
      "text": "They have finished the assignment.",
      "answer": "They have finished the assignment. present perfect"
     },
     {
      "n": 2,
      "text": "The alarm clock will have gone odi by then.",
      "answer": "The alarm clock will have gone o¡ by then. future perfect"
     },
     {
      "n": 3,
      "text": "Linda had locked the door.",
      "answer": "Linda had locked the door. past perfect"
     },
     {
      "n": 4,
      "text": "My friend John has been a great help to me.",
      "answer": "My friend John has been a great help to me. present perfect"
     },
     {
      "n": 5,
      "text": "By then, I will have finished studying.",
      "answer": "By then, I will have finished studying. future perfect"
     }
    ],
    "answers": {
     "1": "They have finished the assignment. present perfect",
     "2": "The alarm clock will have gone o¡ by then. future perfect",
     "3": "Linda had locked the door. past perfect",
     "4": "My friend John has been a great help to me. present perfect",
     "5": "By then, I will have finished studying. future perfect"
    }
   },
   {
    "code": "37.6",
    "instruction": "Decide if each sentence below is in the present progressive, past progressive, or future progressive tense. Look at the form of be a n df o rt h ep resenceo ra b s e n c eo f will to help you.",
    "sample": "Sample: He was racing down the steps of the library. past progressive..........................................",
    "items": [
     {
      "n": 1,
      "text": "She is packing her bags.",
      "answer": "She is packing her bags. present progressive"
     },
     {
      "n": 2,
      "text": "Tom will be thinking about it all day.",
      "answer": "Tom will be thinking about it all day. future progressive"
     },
     {
      "n": 3,
      "text": "The computer was working on it.",
      "answer": "The computer was working on it. past progressive"
     },
     {
      "n": 4,
      "text": "It will be snowing tomorrow.",
      "answer": "It will be snowing tomorrow. future progressive"
     },
     {
      "n": 5,
      "text": "I am getting tired.",
      "answer": "I am getting tired. present progressive 167"
     }
    ],
    "answers": {
     "1": "She is packing her bags. present progressive",
     "2": "Tom will be thinking about it all day. future progressive",
     "3": "The computer was working on it. past progressive",
     "4": "It will be snowing tomorrow. future progressive",
     "5": "I am getting tired. present progressive 167"
    }
   }
  ],
  "exercises": [
   {
    "q": "They were arguing loudly.",
    "type": "input",
    "answer": "They were arguing loudly",
    "source": "31.1",
    "instruction": "Decide whether or not each sentence has a helping verb. Look for the main verb, which is underlined, and see if there' s a helping verb before it. Helping verb: NO Helping verb:YES",
    "explanation": "Respuesta del libro: They were arguing loudly"
   },
   {
    "q": "The frog had jumped five feet.",
    "type": "input",
    "answer": "The frog had jumped five feet",
    "source": "31.1",
    "instruction": "Decide whether or not each sentence has a helping verb. Look for the main verb, which is underlined, and see if there' s a helping verb before it. Helping verb: NO Helping verb:YES",
    "explanation": "Respuesta del libro: The frog had jumped five feet"
   },
   {
    "q": "Y ouinvited everyone.",
    "type": "input",
    "answer": "Youinvited everyone",
    "source": "31.1",
    "instruction": "Decide whether or not each sentence has a helping verb. Look for the main verb, which is underlined, and see if there' s a helping verb before it. Helping verb: NO Helping verb:YES",
    "explanation": "Respuesta del libro: Youinvited everyone"
   },
   {
    "q": "I must buy some milk.",
    "type": "input",
    "answer": "I must buy some milk",
    "source": "31.1",
    "instruction": "Decide whether or not each sentence has a helping verb. Look for the main verb, which is underlined, and see if there' s a helping verb before it. Helping verb: NO Helping verb:YES",
    "explanation": "Respuesta del libro: I must buy some milk"
   },
   {
    "q": "Harry lives in Europe.",
    "type": "input",
    "answer": "Harry lives in Europe",
    "source": "31.1",
    "instruction": "Decide whether or not each sentence has a helping verb. Look for the main verb, which is underlined, and see if there' s a helping verb before it. Helping verb: NO Helping verb:YES",
    "explanation": "Respuesta del libro: Harry lives in Europe"
   },
   {
    "q": "Y ou might write her a letter.",
    "type": "input",
    "answer": "You might write her a letter",
    "source": "31.2",
    "instruction": "Decide whether or not each sentence has a helping verb. This time the main verbs are not underlined. Helping verb: NO Helping verb:YES",
    "explanation": "Respuesta del libro: You might write her a letter"
   },
   {
    "q": "Congress voted on the bill.",
    "type": "input",
    "answer": "Congress voted on the bill",
    "source": "31.2",
    "instruction": "Decide whether or not each sentence has a helping verb. This time the main verbs are not underlined. Helping verb: NO Helping verb:YES",
    "explanation": "Respuesta del libro: Congress voted on the bill"
   },
   {
    "q": "Beth has survived that ordeal.",
    "type": "input",
    "answer": "Beth has survived that ordeal",
    "source": "31.2",
    "instruction": "Decide whether or not each sentence has a helping verb. This time the main verbs are not underlined. Helping verb: NO Helping verb:YES",
    "explanation": "Respuesta del libro: Beth has survived that ordeal"
   },
   {
    "q": "I could be an actor.",
    "type": "input",
    "answer": "I could be an actor",
    "source": "31.2",
    "instruction": "Decide whether or not each sentence has a helping verb. This time the main verbs are not underlined. Helping verb: NO Helping verb:YES",
    "explanation": "Respuesta del libro: I could be an actor"
   },
   {
    "q": "The Giants won the Super Bowl.",
    "type": "input",
    "answer": "The Giants won the Super Bowl",
    "source": "31.2",
    "instruction": "Decide whether or not each sentence has a helping verb. This time the main verbs are not underlined. Helping verb: NO Helping verb:YES",
    "explanation": "Respuesta del libro: The Giants won the Super Bowl"
   },
   {
    "q": "They must delay the invasion.",
    "type": "input",
    "answer": "They must delay the invasion",
    "source": "32.1",
    "instruction": "Underline the modal in each of the sentences below.",
    "explanation": "Respuesta del libro: They must delay the invasion"
   },
   {
    "q": "Y ou will find courage in your heart.",
    "type": "input",
    "answer": "Youwill find courage in your heart",
    "source": "32.1",
    "instruction": "Underline the modal in each of the sentences below.",
    "explanation": "Respuesta del libro: Youwill find courage in your heart"
   },
   {
    "q": "Mr. Knight might go with you.",
    "type": "input",
    "answer": "Mr. Knight might go with you",
    "source": "32.1",
    "instruction": "Underline the modal in each of the sentences below.",
    "explanation": "Respuesta del libro: Mr. Knight might go with you"
   },
   {
    "q": "Y ou should be proud of yourself.",
    "type": "input",
    "answer": "Youshould be proud of yourself",
    "source": "32.1",
    "instruction": "Underline the modal in each of the sentences below.",
    "explanation": "Respuesta del libro: Youshould be proud of yourself"
   },
   {
    "q": "Tomorrow we may go to the movies.",
    "type": "input",
    "answer": "Tomorrow we may go to the movies",
    "source": "32.1",
    "instruction": "Underline the modal in each of the sentences below.",
    "explanation": "Respuesta del libro: Tomorrow we may go to the movies"
   },
   {
    "q": "The curtains might hide the view.",
    "type": "input",
    "answer": "The curtains might hide the view",
    "source": "32.2",
    "instruction": "Underline the modal and put a squiggly line under the main verb in each of the sentences below.",
    "explanation": "Respuesta del libro: The curtains might hide the view"
   },
   {
    "q": "Paul could work on the problem.",
    "type": "input",
    "answer": "Paul could work on the problem",
    "source": "32.2",
    "instruction": "Underline the modal and put a squiggly line under the main verb in each of the sentences below.",
    "explanation": "Respuesta del libro: Paul could work on the problem"
   },
   {
    "q": "She can leave this afternoon.",
    "type": "input",
    "answer": "She can leave this afternoon",
    "source": "32.2",
    "instruction": "Underline the modal and put a squiggly line under the main verb in each of the sentences below.",
    "explanation": "Respuesta del libro: She can leave this afternoon"
   },
   {
    "q": "Y ou must go to the emergency room immediately. 5 . T h ec hildrenw i l le n j o yt h e s eg i f t s . 141",
    "type": "input",
    "answer": "Youmust go to the emergency room immediately",
    "source": "32.2",
    "instruction": "Underline the modal and put a squiggly line under the main verb in each of the sentences below.",
    "explanation": "Respuesta del libro: Youmust go to the emergency room immediately"
   },
   {
    "q": "That cheerful woman has saved the day.",
    "type": "input",
    "answer": "That cheerful woman has saved the day",
    "source": "33.1",
    "instruction": "Underline the have helping verb in each of the sentences below. It may be in any of the three forms of have . In these sentences, it will always be directly before the main verb.",
    "explanation": "Respuesta del libro: That cheerful woman has saved the day"
   },
   {
    "q": "My uncles have visited us every summer.",
    "type": "input",
    "answer": "My uncles have visited us every summer",
    "source": "33.1",
    "instruction": "Underline the have helping verb in each of the sentences below. It may be in any of the three forms of have . In these sentences, it will always be directly before the main verb.",
    "explanation": "Respuesta del libro: My uncles have visited us every summer"
   },
   {
    "q": "Her neighbor has been an attorney for twenty years.",
    "type": "input",
    "answer": "Her neighbor h a sb e e na na ttorneyf o rt w e n t yy e a r s",
    "source": "33.1",
    "instruction": "Underline the have helping verb in each of the sentences below. It may be in any of the three forms of have . In these sentences, it will always be directly before the main verb.",
    "explanation": "Respuesta del libro: Her neighbor h a sb e e na na ttorneyf o rt w e n t yy e a r s"
   },
   {
    "q": "Suzie had traveled to Belgium twice before.",
    "type": "input",
    "answer": "Suzie had traveled to Belgium twice before. 164",
    "source": "33.1",
    "instruction": "Underline the have helping verb in each of the sentences below. It may be in any of the three forms of have . In these sentences, it will always be directly before the main verb.",
    "explanation": "Respuesta del libro: Suzie had traveled to Belgium twice before. 164"
   },
   {
    "q": "Joan and Sam have worked for hours.",
    "type": "input",
    "answer": "Joan and Sam have worked for hours",
    "source": "33.2",
    "instruction": "Underline the have helping verb and put a squiggly line under the main verb in each of the sentences below.",
    "explanation": "Respuesta del libro: Joan and Sam have worked for hours"
   },
   {
    "q": "Their mother has spoken of you often.",
    "type": "input",
    "answer": "Their mother has spoken of you often",
    "source": "33.2",
    "instruction": "Underline the have helping verb and put a squiggly line under the main verb in each of the sentences below.",
    "explanation": "Respuesta del libro: Their mother has spoken of you often"
   },
   {
    "q": "The prime minister had written to him.",
    "type": "input",
    "answer": "The prime minister had written to him",
    "source": "33.2",
    "instruction": "Underline the have helping verb and put a squiggly line under the main verb in each of the sentences below.",
    "explanation": "Respuesta del libro: The prime minister had written to him"
   },
   {
    "q": "Y our daughter has grown a lot taller.",
    "type": "input",
    "answer": "Your daughter has grown al o tt a l l e r",
    "source": "33.2",
    "instruction": "Underline the have helping verb and put a squiggly line under the main verb in each of the sentences below.",
    "explanation": "Respuesta del libro: Your daughter has grown al o tt a l l e r"
   },
   {
    "q": "She has seen her friends twice since last Sunday. 143",
    "type": "input",
    "answer": "She has seen her friends twice since last Sunday",
    "source": "33.2",
    "instruction": "Underline the have helping verb and put a squiggly line under the main verb in each of the sentences below.",
    "explanation": "Respuesta del libro: She has seen her friends twice since last Sunday"
   },
   {
    "q": "Jack has experienced a good time.",
    "type": "input",
    "answer": "Jack has experienced a good time",
    "source": "33.3",
    "instruction": "Decide if the forms of have i nt h ef ollowings entencesa r eb e i n gu s e da sh e l p i n gv e r b so ra sm a i n verbs. Helping verb Main verb",
    "explanation": "Respuesta del libro: Jack has experienced a good time"
   },
   {
    "q": "He has seen her often.",
    "type": "input",
    "answer": "He has seen her often",
    "source": "33.3",
    "instruction": "Decide if the forms of have i nt h ef ollowings entencesa r eb e i n gu s e da sh e l p i n gv e r b so ra sm a i n verbs. Helping verb Main verb",
    "explanation": "Respuesta del libro: He has seen her often"
   },
   {
    "q": "Y ou have a lot of DVDs.",
    "type": "input",
    "answer": "You have a lot of DVDs",
    "source": "33.3",
    "instruction": "Decide if the forms of have i nt h ef ollowings entencesa r eb e i n gu s e da sh e l p i n gv e r b so ra sm a i n verbs. Helping verb Main verb",
    "explanation": "Respuesta del libro: You have a lot of DVDs"
   },
   {
    "q": "She had tacos for dinner.",
    "type": "input",
    "answer": "She had tacos for dinner",
    "source": "33.3",
    "instruction": "Decide if the forms of have i nt h ef ollowings entencesa r eb e i n gu s e da sh e l p i n gv e r b so ra sm a i n verbs. Helping verb Main verb",
    "explanation": "Respuesta del libro: She had tacos for dinner"
   },
   {
    "q": "Y our professor has the answer to your question.",
    "type": "input",
    "answer": "Your professor has the answer to your question",
    "source": "33.3",
    "instruction": "Decide if the forms of have i nt h ef ollowings entencesa r eb e i n gu s e da sh e l p i n gv e r b so ra sm a i n verbs. Helping verb Main verb",
    "explanation": "Respuesta del libro: Your professor has the answer to your question"
   },
   {
    "q": "The reporter was writing her story.",
    "type": "input",
    "answer": "The reporter was writing her story",
    "source": "34.1",
    "instruction": "Underline the form of the be helpingv e r bi ne a c ho ft h es entencesb e l o w .",
    "explanation": "Respuesta del libro: The reporter was writing her story"
   },
   {
    "q": "He is controlling his temper.",
    "type": "input",
    "answer": "He is controlling his temper",
    "source": "34.1",
    "instruction": "Underline the form of the be helpingv e r bi ne a c ho ft h es entencesb e l o w .",
    "explanation": "Respuesta del libro: He is controlling his temper"
   },
   {
    "q": "Y ou are learning about syntax.",
    "type": "input",
    "answer": "Youare learning about syntax",
    "source": "34.1",
    "instruction": "Underline the form of the be helpingv e r bi ne a c ho ft h es entencesb e l o w .",
    "explanation": "Respuesta del libro: Youare learning about syntax"
   },
   {
    "q": "They were watching a movie last Sunday.",
    "type": "input",
    "answer": "They were watching a movie last Sunday",
    "source": "34.1",
    "instruction": "Underline the form of the be helpingv e r bi ne a c ho ft h es entencesb e l o w .",
    "explanation": "Respuesta del libro: They were watching a movie last Sunday"
   },
   {
    "q": "I am doing a lot of things right now.",
    "type": "input",
    "answer": "I am doing a lot of things right now",
    "source": "34.1",
    "instruction": "Underline the form of the be helpingv e r bi ne a c ho ft h es entencesb e l o w .",
    "explanation": "Respuesta del libro: I am doing a lot of things right now"
   },
   {
    "q": "I was talking to Harry.",
    "type": "input",
    "answer": "I was talking to Harry",
    "source": "34.2",
    "instruction": "Underline the be helping verb and put a squiggly line under the main verb in each of the sentences below.",
    "explanation": "Respuesta del libro: I was talking to Harry"
   },
   {
    "q": "Irving and Annie are studying Latin.",
    "type": "input",
    "answer": "Irving and Annie are studying Latin",
    "source": "34.2",
    "instruction": "Underline the be helping verb and put a squiggly line under the main verb in each of the sentences below.",
    "explanation": "Respuesta del libro: Irving and Annie are studying Latin"
   }
  ],
  "answerKeys": {
   "31.1": {
    "1": "They were arguing loudly",
    "2": "The frog had jumped five feet",
    "3": "Youinvited everyone",
    "4": "I must buy some milk",
    "5": "Harry lives in Europe"
   },
   "31.2": {
    "1": "You might write her a letter",
    "2": "Congress voted on the bill",
    "3": "Beth has survived that ordeal",
    "4": "I could be an actor",
    "5": "The Giants won the Super Bowl"
   },
   "32.1": {
    "1": "They must delay the invasion",
    "2": "Youwill find courage in your heart",
    "3": "Mr. Knight might go with you",
    "4": "Youshould be proud of yourself",
    "5": "Tomorrow we may go to the movies"
   },
   "32.2": {
    "1": "The curtains might hide the view",
    "2": "Paul could work on the problem",
    "3": "She can leave this afternoon",
    "4": "Youmust go to the emergency room immediately",
    "5": "The children will enjoy these gifts"
   },
   "33.1": {
    "1": "The bridge had collapsed",
    "2": "That cheerful woman has saved the day",
    "3": "My uncles have visited us every summer",
    "4": "Her neighbor h a sb e e na na ttorneyf o rt w e n t yy e a r s",
    "5": "Suzie had traveled to Belgium twice before. 164"
   },
   "33.2": {
    "1": "Joan and Sam have worked for hours",
    "2": "Their mother has spoken of you often",
    "3": "The prime minister had written to him",
    "4": "Your daughter has grown al o tt a l l e r",
    "5": "She has seen her friends twice since last Sunday"
   },
   "33.3": {
    "1": "Jack has experienced a good time",
    "2": "He has seen her often",
    "3": "You have a lot of DVDs",
    "4": "She had tacos for dinner",
    "5": "Your professor has the answer to your question"
   },
   "34.1": {
    "1": "The reporter was writing her story",
    "2": "He is controlling his temper",
    "3": "Youare learning about syntax",
    "4": "They were watching a movie last Sunday",
    "5": "I am doing a lot of things right now"
   },
   "34.2": {
    "1": "I was talking to Harry",
    "2": "Irving and Annie are studying Latin",
    "3": "He is testing her loyalty",
    "4": "I am taking aw a l k",
    "5": "Youwere reading for hours"
   },
   "34.3": {
    "1": "Sam is looking at the mail",
    "2": "That concept was di⁄cult",
    "3": "You are helping her a lot",
    "4": "I am a doctor",
    "5": "They were watching TV"
   },
   "35.1": {
    "1": "She was focusing on the mirror",
    "2": "Andy should have been enjoying his new career",
    "3": "Mrs. Packard’s life changed at that point",
    "4": "You can have two scoops of ice cream",
    "5": "I might have committed a serious error"
   },
   "35.2": {
    "1": "Youshould read this book",
    "2": "She had been greeting me happily. 165"
   },
   "35.3": {
    "1": "I had been writing to him often",
    "2": "Their mother has spoken of you a lot",
    "3": "Sam will recognize it immediately",
    "4": "W e were good friends. (No helping verb.)",
    "5": "Youshould be studying right now"
   },
   "35.4": {
    "1": "They can do the research",
    "2": "Suzanne might be leaving sooner",
    "3": "Papa has been teasing him",
    "4": "I might have been being too cautious",
    "5": "The plane was late"
   },
   "36.1": {
    "1": "She is leaving on the ten o’ clock train",
    "2": "The curtains were mask ing the view",
    "3": "I was wonder ing about his behavior",
    "4": "Paul is lean ing on his wife’ s chair",
    "5": "They are sound ing rather defensive"
   },
   "36.2": {
    "1": "The women had spok en to each other recently",
    "2": "Unfortunately, the heroine had marri ed the villain",
    "3": "Andy and George have enjoy ed themselves enormously",
    "4": "My student has writt en an interesting essay on technology",
    "5": "The hockey game has end ed in a tie"
   },
   "36.3": {
    "1": "Richard will believethe truth",
    "2": "The waiter might bring it",
    "3": "They may be home late",
    "4": "W eshall overcome this obstacle",
    "5": "I would do it in an instant"
   },
   "36.4": {
    "1": "They are constructing small homes in that part of town",
    "2": "He was looking for Jonas",
    "3": "The candidate thought about refusing",
    "4": "Giving to charity is an old American tradition",
    "5": "I should have thought of responding earlier. 166 UNIT 12: AUXILIARY PHRASES"
   },
   "37.1": {
    "1": "sends",
    "2": "felt",
    "3": "perceived",
    "4": "am",
    "5": "has"
   },
   "37.2": {
    "1": "They deliver furniture onTuesdays. present",
    "2": "The senator supports that bill. present",
    "3": "I voted for him. past",
    "4": "I ate a sandwich for lunch. past",
    "5": "The shortstop hit a home run. past"
   },
   "37.3": {
    "1": "He sleeps late on weekends. present",
    "2": "Zach was proud of his son. past",
    "3": "Bethany will get married soon. future",
    "4": "The show began promptly at 8 P.M. past",
    "5": "My sister will run in the NewY ork City marathon. future"
   },
   "37.4": {
    "1": "She had wanted to do everything her way. past perfect",
    "2": "Martha has known about the surprise. present perfect",
    "3": "Samantha had decided to do that. past perfect",
    "4": "I have written to him about that issue. present perfect",
    "5": "You have been a good friend. present perfect"
   },
   "37.5": {
    "1": "They have finished the assignment. present perfect",
    "2": "The alarm clock will have gone o¡ by then. future perfect",
    "3": "Linda had locked the door. past perfect",
    "4": "My friend John has been a great help to me. present perfect",
    "5": "By then, I will have finished studying. future perfect"
   },
   "37.6": {
    "1": "She is packing her bags. present progressive",
    "2": "Tom will be thinking about it all day. future progressive",
    "3": "The computer was working on it. past progressive",
    "4": "It will be snowing tomorrow. future progressive",
    "5": "I am getting tired. present progressive 167"
   },
   "37.7": {
    "1": "will consider future",
    "2": "experienced past",
    "3": "will have wanted future perfect",
    "4": "had been watching past perfect progressive",
    "5": "will be reading future progressive"
   },
   "37.8": {
    "1": "She was making some progress. past progressive",
    "2": "Marie shrugged her shoulders. past 3 . S h ew i l lb et a k i n gal o n gw a l k . future progressive",
    "4": "He has had two serious operations. present perfect",
    "5": "They had been getting numerous phone calls. past perfect progressive"
   },
   "38.1": {
    "1": "The servant accompanied His Lordship",
    "2": "Jean participated in the Tour de France",
    "3": "Such families have often preferred to travel in style",
    "4": "They could do nothing except run",
    "5": "Mr.Tower quietly explained all this to his son",
    "6": "The diners are arguing loudly",
    "7": "Your uncle invited me to accompany him on his business trip",
    "8": "John is tall",
    "9": "That church is impressive. 170",
    "10": "The TVrepairman has just arrived. The subject is underlined in the following sentences:"
   }
  }
 },
 {
  "unit": 13,
  "title": "Subjects and objects",
  "part": "Part II: Kinds of phrases",
  "startPage": 182,
  "pdfPages": {
   "theory": [
    182,
    200
   ],
   "answers": 202
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Sujetos y objetos: quién hace la acción, quién la recibe (directo e indirecto) y cómo se comportan los pronombres en esas funciones.</p></div>\n<div class=\"theory-es-section\"><h4>1. Sujetos</h4><p>Van antes del verbo (en oraciones enunciativas) y concuerdan en número: <em><strong>The tourists</strong> greeted the queen</em>. También hay sujeto implícito en imperativos: <em>(You) <strong>Turn right</strong></em>.</p></div>\n<div class=\"theory-es-section\"><h4>2. Objeto directo</h4><p>Responde a ¿qué? / ¿a quién?: <em>She read <strong>the play</strong></em>.</p></div>\n<div class=\"theory-es-section\"><h4>3. Objeto indirecto</h4><p>Responde a ¿para quién? / ¿a quién (beneficiario)?: <em>Give <strong>her</strong> the book</em> o <em>Give the book <strong>to her</strong></em>.</p></div>\n<div class=\"theory-es-section\"><h4>4. Pronombres en función</h4><p>Mismo par sujeto/objeto de la U7, ahora aplicado a roles sintácticos: <em>He</em> (sujeto) vs. <em>him</em> (objeto).</p></div>\n<div class=\"theory-es-section\"><h4>5. Imperativos</h4><p>El sujeto <em>you</em> se omite: <em>Watch out!</em> = <em>You watch out!</em>.</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> Preguntá al verbo: ¿quién? → sujeto; ¿qué/a quién? → OD; ¿para quién? → OI.</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>Test yourself 37.7\n1. will consider future\n2. experienced past\n3. will have wanted future perfect\n4. had been watching past perfect progressive\n5. will be reading future progressive\nTest yourself 37.8\n1. She was making some progress. past progressive\n2. Marie shrugged her shoulders. past\n3 . S h ew i l lb et a k i n gal o n gw a l k . future progressive\n4. He has had two serious operations. present perfect\n5. They had been getting numerous phone calls. past perfect progressive\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.\n168\nUNIT 12: AUXILIARY PHRASES</p>\n<p>UNIT 13: SUBJECTS AND OBJECTS\nSentences may contain several noun phrases.These noun phrases can have didierent jobs,\nor functions, within the sentence.Take a look at the following sentence:\nOn V alentine's Day,my brother bought ab o u q u e to fff o w e r sf o rhis wife.\nThe underlined noun phrases are doing didierent things:\nmy brother\nis doing the action,\na\nbouquet of ffowers\nis receiving the action, and\nhis wife\nis receiving the ffowers. In the les-\nsons of this unit, we discuss in detail these\ngrammatical functions\n(or\ngrammatical\nrelations\n).\n169</p>"
   },
   {
    "n": 38,
    "title": "Subjects",
    "html": "<p>We c a n ide nt i f y t he subject o fas entencew i t ha na c t i o nv e r b( s e e Lesson 9 )b ya nswering\nthe question: ' 'Who is doing the action?' ' For example, in the sentence\nConfucius spoke\nmany words of wisdom\n,t h ea c t i o ni s\nspeaking\n. W h oi s ,o rw a s ,d o i n gt h es peaking ?\nConfucius\n.\nConfucius\nis therefore the subject of the sentence.The subjects are underlined\nin the following examples:\n1. John baked a cake.\n2. Y o ua r eg o i n gt og r i na n db e a ri t .\n3. Just then, the children walked in.\n4. He delivered a small package.\n5. Mr. Bucknose, the carpenter, sleeps in the spare room.\n6. W earily, the group trudged onward.\n7. I usually take a nap in the afternoon.\nGenerally, the subject is at or near the beginning of the sentence. More specifically, the\nsubject is the first noun phrase (see\nLesson 28\n)i nt h es entence .\nQuick tip 38.1\nIf the main verb of the sentence is an action verb , the subject of the sentence is the doer of\nthe action and generally comes before the verb. It can be found by answering the question:\n''Who or what is doing the action?''\nTest yourself 38.1\nUnderlinet h es u b j e c ti ne a c ho ft h es entencesb e l o w .I nt h e s es entences ,i tw i l la l w a y sb et h ed o e ro f\nt h ea c t i o na n dw i l lb et h efi r s tn o u np h r a s ei nt h es entence .\nSample: Jeanette demanded an answer to her question.\nGetting started\n(answers on p. 189)\n1. The servant accompanied His Lordship.\n2. Jean participated in the Tour de France.\n3. Such families have often preferred to travel\nin style.\n4. They could do nothing except run.\n5. Mr.Tower quietly explained all this to his son.\nMore practice\n(answers on the website)\n6. The diners are arguing loudly.\n7. Y our uncle invited me to accompany him on\nhis business trip.\n8. TheY ankees won theW orld Series many times.\n9. Macy's is holding a huge sale next Sunday.\n10. The TVrepairman has just arrived.\nThe subject is underlined in the following sentences:\n8. John is tall.\n9. That church is impressive.\n170</p>\n<p>10. Both brothers became architects.\n11. Earlier, she had felt dizzy.\nIn these sentences, the subject is not performing an action ^ the verb is not an action verb.\nRather, the verb is a linking verb (see\nLesson 9\n).When the verb in the sentence is a linking\nverb, the subject can be found by asking the question: ' 'Who or what is this sentence about?' '\nIn these cases, the subject is found at or near the beginning of the sentence, before the verb.\nQuick tip 38.2\nIf the main verb of the sentence is a linking verb, the subject is who or what the sentence is\nabout; the subject is found before the verb.\nTest yourself 38.2\nUnderline the subject in each of the sentences below. In these sentences, it will always be who or\nwhat the sentence is about and will be the first noun phrase in the sentence.\nSample: The professor was imprisoned for his beliefs.\nGetting started\n(answers on p. 189)\n1. The Hotel Regina is an attractive\nplace.\n2. It became the best-known symbol of\nParis.\n3. The local merchants were on his side.\n4. Charles looked thoughtful.\n5. Christine seemed insecure.\nMore practice\n(answers on the website)\n6. She was determined to meet Dr. Richards\nagain.\n7. His older sister resembled her father,\nunfortunately.\n8. Her folks are good people.\n9. My son is destined for success as an attorney.\n10. Their apology seems genuine.\nTest yourself 38.3\nUnderline the subject in each of the sentences below. In these sentences, it will either be the doer of the\naction or who or what the sentence is about.The subject will be the first noun phrase in the sentence.\nSample: These proportions are inaccurate.\nGetting started\n(answers on p. 189)\n1. The editor looked for new ideas for the\nmagazine.\n2. Y ou can rely on the experts at that company.\n3. Maggie usually goes berry picking in the\nsummer.\n4. Roger is happy with his new computer.\n5. The workers went on strike for a couple of\nweeks.\nMore practice\n(answers on the website)\n6. Alana' s hair smells fresh.\n7. I got there on t ime.\n8. They postponed the ball game on account of\nbad weather.\n9. Bowling is a favorite pastime of mine.\n10. Some students missed the final exam.\nThe subject is not always right at the beginning of the sentence:\n12. In the afternoon, I usually take a nap.\n13. In truth, Don Diego had never really had a career.</p>\n<p>14. That day, his timing was perfect.\n15. When in the country, Jack was up before dawn.\nIn each of these sentences, the subject is preceded by an adverb (see\nLesson 27\n)o r\nadverbial clause\n, a group of words typically giving information about time, place,\nor manner.\nTest yourself 38.4\nUnderline the subject in each of the sentences below. The subject will not necessarily be the first\nnoun phrase in the sentence.\nSample: By late afternoon, he is usually exhausted.\nGetting started\n(answers on p. 189)\n1. After that, their neighbor came more often to\nhelp them.\n2. Fortunately, that university program is\naccredited.\n3. In the morning, I'm planting those ffowers.\n4. Eventually, Mr. Mulligan broke the\nsilence.\n5. While running for oflce, the candidate\ncampaigned vigorously.\nMore practice\n(answers on the website)\n6. Generally speaking, they don't know many\nforeign languages.\n7. Dr.Wright's chaudieur drove him to the\nclinic.\n8. For many reasons, Michael prefers to live in\nthe suburbs.\n9. This movie lasted a long time.\n10. Exciting times are much more memorable\nthan boring ones.\nUNIT 13: SUBJECTS AND OBJECTS\n172</p>"
   },
   {
    "n": 39,
    "title": "Direct objects",
    "html": "<p>As we saw in Lesson 38 , a noun phrase can function as the subject of a sentence. A noun\nphrase can also have other functions. For example, a noun phrase may be acted upon by\nthe subject and follow the verb. These noun phrases are called\ndirect objects\n.T h e di r e c t\nobjects in the sentences below are underlined:\n1. John baked ac a k e .\n2. Leah had visualized as i m p l er o o m .\n3. She is buying a small studio apartment.\n4. My niece rented am o v i el a s tn i g h t .\nHow can you tell which noun phrase in a sentence functions as the direct object? In gen-\neral, the direct object is the answer to the questions: ' 'Who or what is being acted upon?\nWho or what is receiving the action?' ' Thus, for example, in the sentence\nMy niece rented a\nmovie last night</p>\n<p>, the direct object is\nam o v i e\n,s i n c e\nam o v i e\nis what is being acted upon\n(being rented). Typically, direct objects occur immediately after the verb. (W e discuss a\ndidierent pattern in\nLesson 40\n.)\nQuick tip 39.1\nThe direct object of a sentence is receiving the action. It can usually be found by answering\nthe question: ''Who or what is being acted upon or receiving the action?'' The direct object\ntypically occurs immediately after the verb.\nTest yourself 39.1\nUnderline the direct object in each of the sentences below. Be sure to ask yourself who or what is\nbeing acted upon or receiving the action.\nSample: I saw a statue in the museum.\nGetting started\n(answers on p. 189)\n1. Y ou must include all relevant facts.\n2 . Bridgeti sa s k i n gn umerousq uestions .\n3. The Spanish ships needed fresh supplies.\n4. She will watch the baby.\n5. The townspeople have wanted tax relief for\nyears.\nMore practice\n(answers on the website)\n6 . M o s tp e o p l eg r e e t e du sw a r m l ya tt h e\nreception.\n7. I bought two bottles of Pepsi.\n8. Actors must memorize their lines.\n9. Last week, Jack renewed his passport.\n1 0 . W h e r ed i dy o ug e tt h a ts w e a t e r ?\nNot all sentences have direct objects. Here are examples of sentences with action verbs\nthat do not have direct objects.\n173</p>\n<p>5. My friend laughed loudly.\n6. Mr.Thomas slept well.\n7. Y ou're always worrying.\nY ou may remember, from\nLesson 10\n, that there are transitive and intransitive verbs.\nTransitive verbs, like\nbake\nor\nrent\n, act on something or someone and so they have direct\nobjects. Intransitive verbs, like\nlaugh\n,\nsleep\n,a n d\nworry\n, aren't acting upon something or\nsomeone and so don't have direct objects.\nWhat about these next sentences?\n8. My friend stopped at the grocery store.\n9. Mr.Thomas slept well during the night.\n10. Y ou're always worryingabout something.\nAs you can see, these sentences have prepositional phrases, which are underlined\n(\nLesson 29\n). A prepositional phrase is not a direct object. For example, at the grocery store\nin sentence 8 and\nduring the night\nin sentence 9 are not being acted upon.\nTo sum up, only transitive action verbs have direct objects, and prepositional phrases\nare not direct objects.\nTest yourself 39.2\nDecide whether or not each sentence below has a direct object.\nDirect object? Y es\nNo\nSample: Her best friend entered the room first.\n ...................\nGetting started (answers on p. 190)\n1. We'll discuss each argument. ................... ...................\n2. Carter worked for a lumber company. ................... ...................\n3. Those gamblers are losing their money. ................... ...................\n4. At 7 P.M. we left for the theater. ................... ...................\n5. The children are enjoying Disneyland. ................... ...................\nMore practice (answers on the website)\n6. I slept well last night. ................... ...................\n7. They watch football on Sunday nights. ................... ...................\n8. Jill and Sam have left with a friend. ................... ...................\n9. Can you pass the butter, please? ................... ...................\n10. She wants a big scoop of chocolate ice cream. ................... ...................\nWhat about this next sentence?\n11. She is a doctor.\nIs\nad o c t o r\nreceiving the action of\nis\n? Kind of a strange question, isn't it? That' s because\nis\nis not an action verb; it' s a linking verb (see\nLesson 9\n). Sentences with linking verbs don't\nhave direct objects, since there is no action happening in the sentence. In each sentence\nbelow, the linking verb is italicized.The underlined portion of each sentence is not a direct\nobject, since it' s not being acted upon. Instead, it' s called the\nverb complement\n.\nUNIT 13: SUBJECTS AND OBJECTS\n174</p>\n<p>12. My teacher resembles Tom Cruise.\n13. That dinner\nwas delicious.\n14. Her husband\nbecame al a w y e r .\nTest yourself 39.3\nDecide if the underlined phrase in each sentence below is a direct object or a verb complement.To\nmake this decision, you can: (1)ask yourself if something or someone is being acted upon, and/or\n(2)decide if the verb is an action or linking verb.\nSample: Bill became a member of the Pres …</p>\n<p>Getting started (answers on p. 190)\n1. The soldiers fired their weapons.\n2. Atalented designer made that hat.\n3. She had married her next-door\nneighbor.\n4. Maria was watching her favorite soap\nopera.\n5. These people really irritate me.\n More practice (answers on the website)\n6. Sonya has found the directions to the party.\n7. He added salt to his soup.\n8. The contestant had to make a diflcult\ndecision.\n9. Rhonda is expecting her third child.\n1 0 . L a s tw e e k ,M a r t i n ' sf r i e n d sb o u g h ta\npresent for his birthday.\nUNIT 13: SUBJECTS AND OBJECTS\n176</p>"
   },
   {
    "n": 40,
    "title": "Indirect objects",
    "html": "<p>Sometimes a noun phrase is the answer to the question: ' 'Who or what is receiving the\ndirect object?' ' This noun phrase is called the\nindirect object\n. The indirect objects are\nunderlined in the sentences below.\n1. Mary gave the information to Robert.\n2. She told the truth to her granddaughter.\n3. They bought a car for their teenage daughter.\n4. The accountant is giving a present to her husband.\nSo in sentence 4, for instance, the noun phrase\nap resent\nis the direct object and the noun\nphrase\nher husband\nis the indirect object, since\nher husband\nis receiving\nthe present\n,t h e\ndirect object.\nQuick tip 40.1\nThe indirect object of a sentence can be found by answering the question: ''Who or what is\nreceiving the direct object?''\nY ou can see that sentences that have indirect objects must also have direct objects, since\nindirect objects receive direct objects. The opposite is not true: sentences with direct\nobjects don't necessarily have indirect objects.\nAdirect object and an indirect object each follows the verb and is referred to by the term\nobject\n. The term object can also refer to objects of a preposition, that is, noun phrases\nthat follow prepositions. (See\nLesson 29\n.)\nTest yourself 40.1\nUnderline the indirect object in each of the sentences below.\nSample: Jane baked the cake for Grant.\nGetting started\n(answers on p. 190)\n1. Holly left the plate for Luke.\n2. She taught the principles to the class.\n3. Big Bird is telling the story to all the\nchildren.\n4. His father had bought the boat for Jonathan.\n5. Y ou will show the money to me.\nMore practice\n(answers on the website)\n6. Jamie' s friend sent a text message to her.\n7. They bid farewell to their house guests.\n8. The teenage idol is throwing a party for his\nfans.\n9. I want to wish good luck to you.\n10. My dad baked a pie for us.\nIndirect objects are introduced by the preposition\nto\nor\nfor\n. Some verbs, such as\ntell\nand\nshow\n,u s e\nto\nto introduce an indirect object, while some verbs, such as\nbuy\nand\nleave\n,u s e\nfor\n.\n177</p>\n<p>To and for do not function only to introduce indirect objects; often, to and for have other\nfunctions.Take a look at these next sentences and notice the didierences between them:\n5. Mary gave the baby to Robert.\n6. Mary carried the baby to the corner.\nIn both sentences,\nMary\nis the subject, the doer of the action, and\nthe baby\nis the direct\nobject, the receiver of the action. In sentence 5,\nRobert\nis receiving\nthe baby\n,t h ed i r e c t\nobject, so\nRobert\nis the indirect object. However, in sentence 6\nthe corner\nis not receiving\nthe baby\nand so it' s not the indirect object. (It' s the object of the preposition\nto\n;s e e\nLesson 29\n.)\nHere' s a similar pair of sentences:\n7. He got a gift for his wife.\n8. He got a gift for his birthday.\nIn both sentences,\nHe\nis the subject, the doer of the action, and\nag i f t\nis the direct\nobject, the receiver of the action. In sentence 7 ,\nhis wife\nis receiving\nag i f t\n,t h e\ndirect object, so\nhis wife\nis the indirect object. However, in sentence 8\nhis birthday\nis not receiving\nag i f t\n, so it' s not the indirect object. (It' s the object of the preposi-\ntion\nfor\n.)\nTest yourself 40.2\nFor each of the sentences below, indicate whether or not to and for are being used to introduce\nan indirect object. Ask yourself if the noun phrase following\nto\nor\nfor\nis receiving the direct\nobject.\nIntroducing an indirect object?\nYe s No\nSample: I inspected the car for dents. ...................\nGetting started (answers on p. 190)\n1. John worked that job for fifty years. ................... ...................\n2. The professor is showing the problem to the student. ................... ...................\n3. His wife and child brought fruit t oh i ma tt h eh ospital . ................... ...................\n4. Tom has left the company for another job. ................... ...................\n5. The visiting king thanked the president for his hospitality. ................... ...................\nMore practice (answers on the website)\n6. She sent the e-mail to her sister. ................... ...................\n7. We wi l l remember this general for his heroism. ................... ...................\n8. I have forwarded your message to your mother. ................... ...................\n9. He took his friend to the theater. ................... ...................\n10. The Black family took a ride to the countryside. ................... ...................\nHere are sentences 1^4 again, but this time with a' 'partner' 'sentence:\n9a. Mary gave the information to Robert.\n9b. Mary gave Robert the information.\nUNIT 13: SUBJECTS AND OBJECTS\n178</p>\n<p>10a. She told the truth to her granddaughter.\n10b. She told her granddaughter the truth.\n11a. They bought a car for their teenage daughter.\n11b. They bought their teenage daughter a car.\n12a. The accountant is giving a present to him.\n12b. The accountant is giving him a present.\nY ou can see that in the second sentence of each pair, the indirect object has\nmoved so that it comes befor …</p>\n<p>Getting started (answers on p. 191)\n1. The principal might show the film to her students.\n.............................................................................................................................................................................................................................................\n2. Mrs. Hausen sent the company her check.\n.............................................................................................................................................................................................................................................\n3. We bought the house for our parents.\n.............................................................................................................................................................................................................................................\n4. The referee threw me the ball.\n.............................................................................................................................................................................................................................................\n5. The artist is drawing a sketch for her patron.\n.............................................................................................................................................................................................................................................\nMore practice (answers on the website)\n6. I am saving this seat for my father.\n..........................................................................................................................................................................................................................................\n7. My col leag ue d id me a favor.\n...........................................................................................................................................................................................................................................\n8. Albert passed his friend a note.\n..........................................................................................................................................................................................................................................\n9. She will read her children a poem.\n..........................................................................................................................................................................................................................................\n10. The boss wished much success to his new employee.\n..........................................................................................................................................................................................................................................\nTest yourself 40.4\nEach sentence below contains an indirect object (not underlined). Change each sentence to the\nother pattern, by moving the indirect object and either deleting or adding\nto\nor\nfor\n.\nSample: Steve gave Mary a package. Steve gave a package to Mary.\nGetting started\n(answers on p. 191)\n1. He will send the poem to his fianc\n/C19\nee.\n.............................................................................................................................................................................................................................................\nUNIT 13: SUBJECTS AND OBJECTS\n180</p>\n<p>2. The professor is e-mailing the students his comments.\n..........................................................................................................................................................................................................................................\n3. That company built a ship for the navy.\n..........................................................................................................................................................................................................................................\n4 . S h ed r e wap i c t u r ef o rh e rs o n .\n..........................................................................................................................................................................................................................................\n5. Amanda' s friend was throwing a party for her.\n..........................................................................................................................................................................................................................................\nMore practice (answers on the website)\n6. I sang a lullaby to you.\n..........................................................................................................................................................................................................................................\n7. The company' s president had shipped the order to them.\n........ …</p>\n<p>Test yourself 40.6</p>\n<p>For each sentence below, underline the direct object and put a squiggly line under the indirect</p>\n<p>object, if there is one. Remember, the indirect object can occur either before or after the direct</p>\n<p>object.</p>\n<p>Sample: That man got his friend ac omputer .</p>\n<p>Getting started</p>\n<p>(answers on p. 191)</p>\n<p>1. The children gave the teacher an apple.</p>\n<p>2. I brought this for you.</p>\n<p>3. The two men clasped hands.</p>\n<p>4. This treaty will benefit all mankind.</p>\n<p>5 . S h ei st e l l i n gt h er eportert h et r u t h .</p>\n<p>More practice</p>\n<p>(answers on the website)</p>\n<p>6 . D o n ' tg i v em et h a t !</p>\n<p>7. W e have to return this to the store.</p>\n<p>8 . A tt h em e e t i n g ,h es h o w e du sh i st r u ec o l o r s .</p>\n<p>9. People have been telling this story for ages.</p>\n<p>10. I bid all of you good night.</p>"
   },
   {
    "n": 41,
    "title": "The functions of pronouns",
    "html": "<p>Now that we've talked about subjects and objects in some detail, it' s a good idea for us to\nreexamine subject and object pronouns, which we first discussed in\nLesson 21\n.\nTake a look at the noun phrase\nthe teacher\nin each of the sentences below.\n1. The teacher went home early today.\n(\nThe teacher\nis the subject.)\n2. The students liked the teacher very much.\n(\nThe teacher\nis the direct object.)\n3. The parents gave the questionnaire to the teacher.\n(\nThe teacher\nis the indirect object.)\nNotice that\nthe teacher\nhas the same form whether it' s functioning as the subject, the\ndirect object, or the indirect object in a sentence. This is true for all nouns in English:\nthey don't change form when they change function.\nIn contrast, there are subject pronouns and object pronouns (see\nLesson 21\n). Subject\npronouns are used when a pronoun is functioning as the subject of a sentence (see\nLesson\n38\n). The subject pronoun is underlined in the following sentences:\n4. I read the newspaper every day.\n5. She is happy.\n6. W e love potato chips.\nObject pronouns are used in all other contexts. The three major uses for object\npronouns are: direct object (\nLesson 39\n), indirect object (\nLesson 40\n), and object of a\npreposition (\nLesson 29\n). The object pronouns are underlined in the following sentences:\n7. My sister congratulated me on my birthday. (direct object)\n8. The director sent her a message. (indirect object)\n9. Mrs. Radisky spoke to us on the phone. (object of a preposition)\nQuick tip 41.1\nA subject pronoun is used when it is functioning as the subject of the sentence. An object\npronoun is used when it is functioning as: (a) the direct object of the sentence; (b) the\nindirect object of the sentence; (c) the\nobject of a preposition\n.\nTest yourself 41.1\nFor each underlined pronoun below, indicate whether it is a subject or object pronoun. For you and\nit\n, you will need to look at how the pronoun is being used in the sentence.\nSubject pronoun Object pronoun\nSample: If e e lg r e a t .\n ...................\nGetting started (answers on p. 191)\n1. She laughed at the movie. ................... ...................\n2. Don't bother me now. ................... ...................\n183</p>\n<p>3. I don't feel guilty. ................... ...................\n4. He has asked her to dance. ................... ...................\n5. Chris had been living near you. ................... ...................\nMore practice (answers on the website)\n6. It is not a very interesting movie. ................... ...................\n7. This does not concer n us. ................... ...................\n8. He disappointed his friends. ................... ...................\n9. The critics were raving about it. ................... ...................\n10. It doesn't matter to them at all. ................... ...................\nTest yourself 41.2\nEach of the sentences below contains an object pronoun, which is underlined. Indicate whether it' s\nbeing used as a direct object, an indirect object, or the object of a preposition.\nSample: Audra lives very far from him. object of a preposition\nGetting started\n(answers on p. 192)\n1. My dear friend sent me a postcard from Italy. ....................................................................................................\n2. Ateenager sat next to me in the theater. .....................................................................................................\n3. Irma has bought you the cookware. .....................................................................................................\n4. The dog approached them. .....................................................................................................\n5. That family is always blaming us for their problems. .....................................................................................................\nMore practice (answers on the website)\n6. They gave us their promise. .....................................................................................................\n7. He is renting an apartment close to me. .....................................................................................................\n8. I never saw it. .....................................................................................................\n9. He gave her an ultimatum. ....................................................................................................\n10. Brandon will even buy it from you. .....................................................................................................\nTo enhance your understanding\nIn the past, who and whom worked the same way as subject and object pronouns. In\nparticular,\nwho\nwas used when functioning as a subject and\nwhom\nwas used when\nfunctioning as an object:\n10. Who is running away? (subject: Who is doing the action.)\n11. Whom does Katie like? (direct object: Whom is receiving the action.)\nHowever, like all languages, English changes over time, and today, for all but the strictest\ntr …</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 42,
    "title": "Implied subjects: commands",
    "html": "<p>1. Open that book right now!</p>\n<p>2. Don't even think about crossing the street here!</p>\n<p>3. Please be careful.</p>\n<p>W e all recognize a command when we hear one.W e have seen that all sentences have</p>\n<p>a subject, but where is the subject of these commands? Speakers of English readily</p>\n<p>agree that these sentences do, in fact, have a subject. The subject, though not stated,</p>\n<p>is understood or implied to be</p>\n<p>you</p>\n<p>. Thus, when someone says ' 'W ash the dishes!' '</p>\n<p>you know they're talking to you. Commands are also called</p>\n<p>imperative sentences</p>\n<p>.</p>\n<p>In writing, command sentences often end with an exclamation point (!).</p>\n<p>Quick tip 42.1</p>\n<p>The subject of commands is an understood or implied you .</p>\n<p>Test yourself 42.1</p>\n<p>Indicate the subject of each sentence below. If it' s a command, specify you as the subject. (We won't</p>\n<p>be using exclamation points in this exercise.)</p>\n<p>Subject</p>\n<p>Sample: Eat a well-balanced diet. you</p>\n<p>Getting started</p>\n<p>(answers on p. 192)</p>\n<p>1. These illnesses are treatable. .............................................................................................................</p>\n<p>2 . T h ej u d g eh a dm a d eat erriblem i s t a k e . ..............................................................................................................</p>\n<p>3. Be supportive. .............................................................................................................</p>\n<p>4. Joan' s father is an architect. .............................................................................................................</p>\n<p>5. Stand up for your rights. .............................................................................................................</p>\n<p>More practice (answers on the website)</p>\n<p>6. Give me a break. .............................................................................................................</p>\n<p>7. I can't give it to you. .............................................................................................................</p>\n<p>8. Don't raise your voice to me. .............................................................................................................</p>\n<p>9. Help me out with this. .............................................................................................................</p>\n<p>10. She will be planting roses in that garden. ...............................................................................................................</p>"
   }
  ],
  "tips": [
   {
    "code": "38.1",
    "text": "If the main verb of the sentence is an action verb , the subject of the sentence is the doer of the action and generally comes before the verb. It can be found by answering the question: ''Who or what is doing the action?''"
   },
   {
    "code": "38.2",
    "text": "If the main verb of the sentence is a linking verb, the subject is who or what the sentence is about; the subject is found before the verb."
   },
   {
    "code": "39.1",
    "text": "The direct object of a sentence is receiving the action. It can usually be found by answering the question: ''Who or what is being acted upon or receiving the action?'' The direct object typically occurs immediately after the verb."
   },
   {
    "code": "40.1",
    "text": "The indirect object of a sentence can be found by answering the question: ''Who or what is receiving the direct object?'' Y ou can see that sentences that have indirect objects must also have direct objects, since indirect objects receive direct objects. The opposite is not true: sentences with direct objects don't necessarily have indirect objects. Adirect object and an indirect object each follows the verb and is referred to by the term object . The term object can also refer to objects of a preposition, that is, noun phrases that follow prepositions. (See Lesson 29 .)"
   },
   {
    "code": "40.2",
    "text": "An indirect object can occur: (a) after the direct object (which follows the verb), with to or for introducing it, or (b) before the direct object (and after the verb), without to or for . For example: Joan gave a present to Bill or Joan gave Bill a present .( Bill is the indirect object in both sentences.)"
   },
   {
    "code": "40.3",
    "text": "To help you decide if a sentence has an indirect object, see if the sentence can be changed from a pattern like The boys left a note for their teacher to a sentence with a pattern like The boys left their teacher a note , or vice versa. Note that when the direct object is a pronoun, the two patterns are not both possible, as you can see in these next sentence pairs: 13a. Her best friend bought it for her family. 13b. *Her best friend bought her family it. 14a. Lucy sold them to her neighbor. 14b. *Lucy sold her neighbor them. That is, when the direct object is a pronoun, it must come before the indirect object."
   },
   {
    "code": "40.4",
    "text": "If the direct object is a pronoun, it must come before the indirect object. Example: My sister sent it to her friend ,* My sister sent her friend it ."
   },
   {
    "code": "41.1",
    "text": "A subject pronoun is used when it is functioning as the subject of the sentence. An object pronoun is used when it is functioning as: (a) the direct object of the sentence; (b) the indirect object of the sentence; (c) the object of a preposition ."
   },
   {
    "code": "42.1",
    "text": "The subject of commands is an understood or implied you ."
   }
  ],
  "practice": [
   {
    "code": "37.7",
    "instruction": "1. will consider future 2. experienced past 3. will have wanted future perfect 4. had been watching past perfect progressive 5. will be reading future progressive",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "37.8",
    "instruction": "1. She was making some progress. past progressive 2. Marie shrugged her shoulders. past 3 . S h ew i l lb et a k i n gal o n gw a l k . future progressive 4. He has had two serious operations. present perfect 5. They had been getting numerous phone calls. past perfect progressive FOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE. 168",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "38.1",
    "instruction": "Underlinet h es u b j e c ti ne a c ho ft h es entencesb e l o w .I nt h e s es entences ,i tw i l la l w a y sb et h ed o e ro f t h ea c t i o na n dw i l lb et h efi r s tn o u np h r a s ei nt h es entence .",
    "sample": "Sample: Jeanette demanded an answer to her question.",
    "items": [
     {
      "n": 1,
      "text": "The servant accompanied His Lordship.",
      "answer": "The servant accompanied His Lordship"
     },
     {
      "n": 2,
      "text": "Jean participated in the Tour de France.",
      "answer": "Jean participated in the Tour de France"
     },
     {
      "n": 3,
      "text": "Such families have often preferred to travel in style.",
      "answer": "Such families have often preferred to travel in style"
     },
     {
      "n": 4,
      "text": "They could do nothing except run.",
      "answer": "They could do nothing except run"
     },
     {
      "n": 5,
      "text": "Mr.Tower quietly explained all this to his son.",
      "answer": "Mr.Tower quietly explained all this to his son"
     }
    ],
    "answers": {
     "1": "The servant accompanied His Lordship",
     "2": "Jean participated in the Tour de France",
     "3": "Such families have often preferred to travel in style",
     "4": "They could do nothing except run",
     "5": "Mr.Tower quietly explained all this to his son"
    }
   },
   {
    "code": "38.2",
    "instruction": "Underline the subject in each of the sentences below. In these sentences, it will always be who or what the sentence is about and will be the first noun phrase in the sentence.",
    "sample": "Sample: The professor was imprisoned for his beliefs.",
    "items": [
     {
      "n": 1,
      "text": "The Hotel Regina is an attractive place.",
      "answer": "The Hotel Regina is an attractive place"
     },
     {
      "n": 2,
      "text": "It became the best-known symbol of Paris.",
      "answer": "It became the best-known symbol of Paris"
     },
     {
      "n": 3,
      "text": "The local merchants were on his side.",
      "answer": "The local merchants were on his side"
     },
     {
      "n": 4,
      "text": "Charles looked thoughtful.",
      "answer": "Charles looked thoughtful"
     },
     {
      "n": 5,
      "text": "Christine seemed insecure.",
      "answer": "Christine seemed insecure"
     }
    ],
    "answers": {
     "1": "The Hotel Regina is an attractive place",
     "2": "It became the best-known symbol of Paris",
     "3": "The local merchants were on his side",
     "4": "Charles looked thoughtful",
     "5": "Christine seemed insecure"
    }
   },
   {
    "code": "38.3",
    "instruction": "Underline the subject in each of the sentences below. In these sentences, it will either be the doer of the action or who or what the sentence is about.The subject will be the first noun phrase in the sentence.",
    "sample": "Sample: These proportions are inaccurate.",
    "items": [
     {
      "n": 1,
      "text": "The editor looked for new ideas for the magazine.",
      "answer": "The editor looked for new ideas for the magazine"
     },
     {
      "n": 2,
      "text": "Y ou can rely on the experts at that company.",
      "answer": "You can rely on the experts at that company"
     },
     {
      "n": 3,
      "text": "Maggie usually goes berry picking in the summer.",
      "answer": "Maggie usually goes berry picking in the summer"
     },
     {
      "n": 4,
      "text": "Roger is happy with his new computer.",
      "answer": "Roger is happy with his new computer"
     },
     {
      "n": 5,
      "text": "The workers went on strike for a couple of weeks.",
      "answer": "The workers went on strike for a couple of weeks"
     }
    ],
    "answers": {
     "1": "The editor looked for new ideas for the magazine",
     "2": "You can rely on the experts at that company",
     "3": "Maggie usually goes berry picking in the summer",
     "4": "Roger is happy with his new computer",
     "5": "The workers went on strike for a couple of weeks"
    }
   },
   {
    "code": "38.4",
    "instruction": "Underline the subject in each of the sentences below. The subject will not necessarily be the first noun phrase in the sentence.",
    "sample": "Sample: By late afternoon, he is usually exhausted.",
    "items": [
     {
      "n": 1,
      "text": "After that, their neighbor came more often to help them.",
      "answer": "After that, their neighbor came more often to help them"
     },
     {
      "n": 2,
      "text": "Fortunately, that university program is accredited.",
      "answer": "Fortunately, that university program is accredited"
     },
     {
      "n": 3,
      "text": "In the morning, I'm planting those ffowers.",
      "answer": "In the morning, I’m planting those £owers"
     },
     {
      "n": 4,
      "text": "Eventually, Mr. Mulligan broke the silence.",
      "answer": "Eventually, Mr. Mulligan broke the silence"
     },
     {
      "n": 5,
      "text": "While running for oflce, the candidate campaigned vigorously.",
      "answer": "While running for office, the candidate campaigned vigorously"
     }
    ],
    "answers": {
     "1": "After that, their neighbor came more often to help them",
     "2": "Fortunately, that university program is accredited",
     "3": "In the morning, I’m planting those £owers",
     "4": "Eventually, Mr. Mulligan broke the silence",
     "5": "While running for office, the candidate campaigned vigorously"
    }
   },
   {
    "code": "39.1",
    "instruction": "Underline the direct object in each of the sentences below. Be sure to ask yourself who or what is being acted upon or receiving the action.",
    "sample": "Sample: I saw a statue in the museum.",
    "items": [
     {
      "n": 1,
      "text": "Y ou must include all relevant facts. 2 . Bridgeti sa s k i n gn umerousq uestions .",
      "answer": "You must include all relevant facts"
     },
     {
      "n": 3,
      "text": "The Spanish ships needed fresh supplies.",
      "answer": "The Spanish ships needed fresh supplies"
     },
     {
      "n": 4,
      "text": "She will watch the baby.",
      "answer": "She will watch the baby"
     },
     {
      "n": 5,
      "text": "The townspeople have wanted tax relief for years.",
      "answer": "The townspeople have wanted tax relief for years. 189"
     }
    ],
    "answers": {
     "1": "You must include all relevant facts",
     "2": "Bridget is asking numerous questions",
     "3": "The Spanish ships needed fresh supplies",
     "4": "She will watch the baby",
     "5": "The townspeople have wanted tax relief for years. 189"
    }
   },
   {
    "code": "39.2",
    "instruction": "Decide whether or not each sentence below has a direct object. Direct object? Y es No",
    "sample": "Sample: Her best friend entered the room first. ...................",
    "items": [
     {
      "n": 1,
      "text": "We'll discuss each argument.",
      "answer": "We’ll discuss each argument"
     },
     {
      "n": 2,
      "text": "Carter worked for a lumber company.",
      "answer": "Carter worked for a lumber company"
     },
     {
      "n": 3,
      "text": "Those gamblers are losing their money.",
      "answer": "Those gamblers are losing their money"
     },
     {
      "n": 4,
      "text": "At 7 P.M. we left for the theater.",
      "answer": "At 7 P.M. we left for the theater"
     },
     {
      "n": 5,
      "text": "The children are enjoying Disneyland.",
      "answer": "The children are enjoying Disneyland"
     }
    ],
    "answers": {
     "1": "We’ll discuss each argument",
     "2": "Carter worked for a lumber company",
     "3": "Those gamblers are losing their money",
     "4": "At 7 P.M. we left for the theater",
     "5": "The children are enjoying Disneyland"
    }
   },
   {
    "code": "39.3",
    "instruction": "Decide if the underlined phrase in each sentence below is a direct object or a verb complement.To make this decision, you can: (1)ask yourself if something or someone is being acted upon, and/or (2)decide if the verb is an action or linking verb.",
    "sample": "Sample: Bill became a member of the President' s cabinet. verb complement",
    "items": [
     {
      "n": 1,
      "text": "Gerald has taken that course.",
      "answer": "Gerald has taken that course. direct object"
     },
     {
      "n": 2,
      "text": "Rob used this technique in his restaurant.",
      "answer": "Rob used this technique in his restaurant. direct object"
     },
     {
      "n": 3,
      "text": "Adam might withdraw his resignation.",
      "answer": "Adam might withdraw his resignation. direct object"
     },
     {
      "n": 4,
      "text": "The mayor is sounding confident.",
      "answer": "The mayor is sounding confident. verb complement"
     },
     {
      "n": 5,
      "text": "We quickly got ready.",
      "answer": "We quickly got ready. verb complement"
     }
    ],
    "answers": {
     "1": "Gerald has taken that course. direct object",
     "2": "Rob used this technique in his restaurant. direct object",
     "3": "Adam might withdraw his resignation. direct object",
     "4": "The mayor is sounding confident. verb complement",
     "5": "We quickly got ready. verb complement"
    }
   },
   {
    "code": "39.4",
    "instruction": "Underline the direct objects in the sentences below. Not all sentences will have a direct object.",
    "sample": "Sample: I put the letter in his mailbox.",
    "items": [
     {
      "n": 1,
      "text": "Our discussion was highly entertaining.",
      "answer": "Our discussion was highly entertaining"
     },
     {
      "n": 2,
      "text": "He had a growing family.",
      "answer": "He had ag rowingf a m i l y"
     },
     {
      "n": 3,
      "text": "She quickly got indignant.",
      "answer": "She quickly got indignant"
     },
     {
      "n": 4,
      "text": "Y ou must be the new baby sitter.",
      "answer": "You must be the new baby sitter"
     },
     {
      "n": 5,
      "text": "The sheridi arrested a suspect in the fraud investigation.",
      "answer": "The sheri¡ arrested a suspect in the fraud investigation"
     }
    ],
    "answers": {
     "1": "Our discussion was highly entertaining",
     "2": "He had ag rowingf a m i l y",
     "3": "She quickly got indignant",
     "4": "You must be the new baby sitter",
     "5": "The sheri¡ arrested a suspect in the fraud investigation"
    }
   },
   {
    "code": "39.5",
    "instruction": "Underline the subjects and put a squiggly line u nder the direct objects in the sentences below.",
    "sample": "Sample: His company was losing millions.",
    "items": [],
    "answers": {
     "1": "The soldiers fired their weapons",
     "2": "Atal en t eddesi gn erma d ethat hat",
     "3": "She had married her next-door neighbor",
     "4": "Maria was watching her favorite soap opera",
     "5": "These people really irritate me"
    }
   },
   {
    "code": "40.1",
    "instruction": "Underline the indirect object in each of the sentences below.",
    "sample": "Sample: Jane baked the cake for Grant.",
    "items": [
     {
      "n": 1,
      "text": "Holly left the plate for Luke.",
      "answer": "Holly left the plate for Luke"
     },
     {
      "n": 2,
      "text": "She taught the principles to the class.",
      "answer": "She taught the principles to the class"
     },
     {
      "n": 3,
      "text": "Big Bird is telling the story to all the children.",
      "answer": "Big Bird is telling the story to all the children"
     },
     {
      "n": 4,
      "text": "His father had bought the boat for Jonathan.",
      "answer": "His father had bought the boat for Jonathan"
     },
     {
      "n": 5,
      "text": "Y ou will show the money to me.",
      "answer": "You will show the money to me"
     }
    ],
    "answers": {
     "1": "Holly left the plate for Luke",
     "2": "She taught the principles to the class",
     "3": "Big Bird is telling the story to all the children",
     "4": "His father had bought the boat for Jonathan",
     "5": "You will show the money to me"
    }
   },
   {
    "code": "40.2",
    "instruction": "For each of the sentences below, indicate whether or not to and for are being used to introduce an indirect object. Ask yourself if the noun phrase following to or for is receiving the direct object. Introducing an indirect object? Ye s No",
    "sample": "Sample: I inspected the car for dents. ...................",
    "items": [
     {
      "n": 1,
      "text": "John worked that job for fifty years.",
      "answer": "John worked that job for fifty years"
     },
     {
      "n": 2,
      "text": "The professor is showing the problem to the student.",
      "answer": "The professor is showing the problem to the student"
     },
     {
      "n": 3,
      "text": "His wife and child brought fruit t oh i ma tt h eh ospital .",
      "answer": "His wife and child brought fruit t oh i ma tt h eh ospital"
     },
     {
      "n": 4,
      "text": "Tom has left the company for another job.",
      "answer": "Tom’ s has left the companyfor another job"
     },
     {
      "n": 5,
      "text": "The visiting king thanked the president for his hospitality.",
      "answer": "The visiting king thanked the president for his hospitality. UNIT 13: SUBJECTS AND OBJECTS 190"
     }
    ],
    "answers": {
     "1": "John worked that job for fifty years",
     "2": "The professor is showing the problem to the student",
     "3": "His wife and child brought fruit t oh i ma tt h eh ospital",
     "4": "Tom’ s has left the companyfor another job",
     "5": "The visiting king thanked the president for his hospitality. UNIT 13: SUBJECTS AND OBJECTS 190"
    }
   },
   {
    "code": "40.3",
    "instruction": "Each sentence below contains an indirect object, which is underlined. Change each sentence to the other pattern, by moving the indirect object and either deleting or adding to or for .",
    "sample": "Sample: Sally made us breakfast. Sally made breakfast for us.",
    "items": [],
    "answers": {
     "1": "The principal might show the film to her students. The principal might show her students the film",
     "2": "Mrs. Hausen sent the company her check. Mrs. Hausen sent her check to the company",
     "3": "We bought the house for our parents. We b ou g ht ou rparent s t he hou s e",
     "4": "The referee threw me the ball. The referee threw the ball to me",
     "5": "The artist is drawing a sketch for her patron. The artist is drawing her patron a sketch"
    }
   },
   {
    "code": "40.4",
    "instruction": "Each sentence below contains an indirect object (not underlined). Change each sentence to the other pattern, by moving the indirect object and either deleting or adding to or for .",
    "sample": "Sample: Steve gave Mary a package. Steve gave a package to Mary.",
    "items": [
     {
      "n": 1,
      "text": "He will send the poem to his fianc /C19 ee.",
      "answer": "He will send the poem to his fianc /C19 ee. He will send his fiance /C19et h ep o e m"
     }
    ],
    "answers": {
     "1": "He will send the poem to his fianc /C19 ee. He will send his fiance /C19et h ep o e m",
     "2": "The professor is e-mailing the students his comments. The professor is e-mailing his comments to the students",
     "3": "That company built a ship for the navy. The company built the navy a ship",
     "4": "She drew a picture for her son. She drew her son a picture",
     "5": "Amanda’s friend was throwing a party for her. Amanda’ s friend was throwing her a party"
    }
   },
   {
    "code": "40.5",
    "instruction": "Underline the indirect object in each sentence below. It can occur either before or after the direct object.",
    "sample": "Sample: Jerry made me that bench.",
    "items": [
     {
      "n": 1,
      "text": "We found a dress for her.",
      "answer": "We found a dress for her"
     },
     {
      "n": 2,
      "text": "Mr. Duquesne has brought him the plans.",
      "answer": "Mr. Duquesne has brought him the plans"
     },
     {
      "n": 3,
      "text": "The old hunter told us the story.",
      "answer": "The old hunter told us the story"
     },
     {
      "n": 4,
      "text": "The instructor is ordering this book for the students in his class.",
      "answer": "The instructor is ordering this book for the students in his class"
     },
     {
      "n": 5,
      "text": "I never promised you a rose garden.",
      "answer": "I never promised you a rose garden"
     }
    ],
    "answers": {
     "1": "We found a dress for her",
     "2": "Mr. Duquesne has brought him the plans",
     "3": "The old hunter told us the story",
     "4": "The instructor is ordering this book for the students in his class",
     "5": "I never promised you a rose garden"
    }
   },
   {
    "code": "40.6",
    "instruction": "For each sentence below, underline the direct object and put a squiggly line under the indirect object, if there is one. Remember, the indirect object can occur either before or after the direct object.",
    "sample": "Sample: That man got his friend ac omputer .",
    "items": [
     {
      "n": 1,
      "text": "The children gave the teacher an apple.",
      "answer": "The children gave the teacher an apple"
     },
     {
      "n": 2,
      "text": "I brought this for you.",
      "answer": "I brought this for you"
     },
     {
      "n": 3,
      "text": "The two men clasped hands.",
      "answer": "The two men clasped hands"
     },
     {
      "n": 4,
      "text": "This treaty will benefit all mankind. 5 . S h ei st e l l i n gt h er eportert h et r u t h .",
      "answer": "This treaty will benefit all mankind"
     }
    ],
    "answers": {
     "1": "The children gave the teacher an apple",
     "2": "I brought this for you",
     "3": "The two men clasped hands",
     "4": "This treaty will benefit all mankind",
     "5": "She is telling the reporter the truth"
    }
   },
   {
    "code": "41.1",
    "instruction": "For each underlined pronoun below, indicate whether it is a subject or object pronoun. For you and it , you will need to look at how the pronoun is being used in the sentence. Subject pronoun Object pronoun",
    "sample": "Sample: If e e lg r e a t . ...................",
    "items": [
     {
      "n": 1,
      "text": "She laughed at the movie.",
      "answer": "She laughed at the movie"
     },
     {
      "n": 2,
      "text": "Don't bother me now.   183",
      "answer": "Don’t bother me now"
     },
     {
      "n": 3,
      "text": "I don't feel guilty.",
      "answer": "I don’t feel guilty"
     },
     {
      "n": 4,
      "text": "He has asked her to dance.",
      "answer": "He has asked her to dance"
     },
     {
      "n": 5,
      "text": "Chris had been living near you.",
      "answer": "Chris had been living near you"
     }
    ],
    "answers": {
     "1": "She laughed at the movie",
     "2": "Don’t bother me now",
     "3": "I don’t feel guilty",
     "4": "He has asked her to dance",
     "5": "Chris had been living near you"
    }
   },
   {
    "code": "41.2",
    "instruction": "Each of the sentences below contains an object pronoun, which is underlined. Indicate whether it' s being used as a direct object, an indirect object, or the object of a preposition.",
    "sample": "Sample: Audra lives very far from him. object of a preposition",
    "items": [
     {
      "n": 1,
      "text": "My dear friend sent me a postcard from Italy.",
      "answer": "My dear friend sent me a postcard from Italy. indirect object"
     },
     {
      "n": 2,
      "text": "Ateenager sat next to me in the theater.",
      "answer": "A teenager sat next to me in the theater. object of a preposition"
     },
     {
      "n": 3,
      "text": "Irma has bought you the cookware.",
      "answer": "Irma has bought you the cookware. indirect object"
     },
     {
      "n": 4,
      "text": "The dog approached them.",
      "answer": "The dog approached them. direct object"
     },
     {
      "n": 5,
      "text": "That family is always blaming us for their problems.",
      "answer": "That family is always blaming us for their problems. direct object"
     }
    ],
    "answers": {
     "1": "My dear friend sent me a postcard from Italy. indirect object",
     "2": "A teenager sat next to me in the theater. object of a preposition",
     "3": "Irma has bought you the cookware. indirect object",
     "4": "The dog approached them. direct object",
     "5": "That family is always blaming us for their problems. direct object"
    }
   },
   {
    "code": "42.1",
    "instruction": "Indicate the subject of each sentence below. If it' s a command, specify you as the subject. (We won't be using exclamation points in this exercise.) Subject",
    "sample": "Sample: Eat a well-balanced diet. you",
    "items": [
     {
      "n": 1,
      "text": "These illnesses are treatable.  2 . T h ej u d g eh a dm a d eat erriblem i s t a k e .",
      "answer": "These illnesses are treatable. these illnesses 2 . T h ej u d g eh a dm a d eat erriblem istake . the judge"
     },
     {
      "n": 3,
      "text": "Be supportive.",
      "answer": "Be supportive. you"
     },
     {
      "n": 4,
      "text": "Joan' s father is an architect.",
      "answer": "Joan’ s father is an architect Joan’ s father"
     },
     {
      "n": 5,
      "text": "Stand up for your rights.",
      "answer": "Stand up for your rights. you"
     }
    ],
    "answers": {
     "1": "These illnesses are treatable. these illnesses 2 . T h ej u d g eh a dm a d eat erriblem istake . the judge",
     "3": "Be supportive. you",
     "4": "Joan’ s father is an architect Joan’ s father",
     "5": "Stand up for your rights. you"
    }
   }
  ],
  "exercises": [
   {
    "q": "The servant accompanied His Lordship.",
    "type": "input",
    "answer": "The servant accompanied His Lordship",
    "source": "38.1",
    "instruction": "Underlinet h es u b j e c ti ne a c ho ft h es entencesb e l o w .I nt h e s es entences ,i tw i l la l w a y sb et h ed o e ro f t h ea c t i o na n dw i l lb et h efi r s tn o u np h r a s ei nt h es entence .",
    "explanation": "Respuesta del libro: The servant accompanied His Lordship"
   },
   {
    "q": "Jean participated in the Tour de France.",
    "type": "input",
    "answer": "Jean participated in the Tour de France",
    "source": "38.1",
    "instruction": "Underlinet h es u b j e c ti ne a c ho ft h es entencesb e l o w .I nt h e s es entences ,i tw i l la l w a y sb et h ed o e ro f t h ea c t i o na n dw i l lb et h efi r s tn o u np h r a s ei nt h es entence .",
    "explanation": "Respuesta del libro: Jean participated in the Tour de France"
   },
   {
    "q": "Such families have often preferred to travel in style.",
    "type": "input",
    "answer": "Such families have often preferred to travel in style",
    "source": "38.1",
    "instruction": "Underlinet h es u b j e c ti ne a c ho ft h es entencesb e l o w .I nt h e s es entences ,i tw i l la l w a y sb et h ed o e ro f t h ea c t i o na n dw i l lb et h efi r s tn o u np h r a s ei nt h es entence .",
    "explanation": "Respuesta del libro: Such families have often preferred to travel in style"
   },
   {
    "q": "They could do nothing except run.",
    "type": "input",
    "answer": "They could do nothing except run",
    "source": "38.1",
    "instruction": "Underlinet h es u b j e c ti ne a c ho ft h es entencesb e l o w .I nt h e s es entences ,i tw i l la l w a y sb et h ed o e ro f t h ea c t i o na n dw i l lb et h efi r s tn o u np h r a s ei nt h es entence .",
    "explanation": "Respuesta del libro: They could do nothing except run"
   },
   {
    "q": "Mr.Tower quietly explained all this to his son.",
    "type": "input",
    "answer": "Mr.Tower quietly explained all this to his son",
    "source": "38.1",
    "instruction": "Underlinet h es u b j e c ti ne a c ho ft h es entencesb e l o w .I nt h e s es entences ,i tw i l la l w a y sb et h ed o e ro f t h ea c t i o na n dw i l lb et h efi r s tn o u np h r a s ei nt h es entence .",
    "explanation": "Respuesta del libro: Mr.Tower quietly explained all this to his son"
   },
   {
    "q": "The Hotel Regina is an attractive place.",
    "type": "input",
    "answer": "The Hotel Regina is an attractive place",
    "source": "38.2",
    "instruction": "Underline the subject in each of the sentences below. In these sentences, it will always be who or what the sentence is about and will be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: The Hotel Regina is an attractive place"
   },
   {
    "q": "It became the best-known symbol of Paris.",
    "type": "input",
    "answer": "It became the best-known symbol of Paris",
    "source": "38.2",
    "instruction": "Underline the subject in each of the sentences below. In these sentences, it will always be who or what the sentence is about and will be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: It became the best-known symbol of Paris"
   },
   {
    "q": "The local merchants were on his side.",
    "type": "input",
    "answer": "The local merchants were on his side",
    "source": "38.2",
    "instruction": "Underline the subject in each of the sentences below. In these sentences, it will always be who or what the sentence is about and will be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: The local merchants were on his side"
   },
   {
    "q": "Charles looked thoughtful.",
    "type": "input",
    "answer": "Charles looked thoughtful",
    "source": "38.2",
    "instruction": "Underline the subject in each of the sentences below. In these sentences, it will always be who or what the sentence is about and will be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: Charles looked thoughtful"
   },
   {
    "q": "Christine seemed insecure.",
    "type": "input",
    "answer": "Christine seemed insecure",
    "source": "38.2",
    "instruction": "Underline the subject in each of the sentences below. In these sentences, it will always be who or what the sentence is about and will be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: Christine seemed insecure"
   },
   {
    "q": "The editor looked for new ideas for the magazine.",
    "type": "input",
    "answer": "The editor looked for new ideas for the magazine",
    "source": "38.3",
    "instruction": "Underline the subject in each of the sentences below. In these sentences, it will either be the doer of the action or who or what the sentence is about.The subject will be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: The editor looked for new ideas for the magazine"
   },
   {
    "q": "Y ou can rely on the experts at that company.",
    "type": "input",
    "answer": "You can rely on the experts at that company",
    "source": "38.3",
    "instruction": "Underline the subject in each of the sentences below. In these sentences, it will either be the doer of the action or who or what the sentence is about.The subject will be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: You can rely on the experts at that company"
   },
   {
    "q": "Maggie usually goes berry picking in the summer.",
    "type": "input",
    "answer": "Maggie usually goes berry picking in the summer",
    "source": "38.3",
    "instruction": "Underline the subject in each of the sentences below. In these sentences, it will either be the doer of the action or who or what the sentence is about.The subject will be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: Maggie usually goes berry picking in the summer"
   },
   {
    "q": "Roger is happy with his new computer.",
    "type": "input",
    "answer": "Roger is happy with his new computer",
    "source": "38.3",
    "instruction": "Underline the subject in each of the sentences below. In these sentences, it will either be the doer of the action or who or what the sentence is about.The subject will be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: Roger is happy with his new computer"
   },
   {
    "q": "The workers went on strike for a couple of weeks.",
    "type": "input",
    "answer": "The workers went on strike for a couple of weeks",
    "source": "38.3",
    "instruction": "Underline the subject in each of the sentences below. In these sentences, it will either be the doer of the action or who or what the sentence is about.The subject will be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: The workers went on strike for a couple of weeks"
   },
   {
    "q": "After that, their neighbor came more often to help them.",
    "type": "input",
    "answer": "After that, their neighbor came more often to help them",
    "source": "38.4",
    "instruction": "Underline the subject in each of the sentences below. The subject will not necessarily be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: After that, their neighbor came more often to help them"
   },
   {
    "q": "Fortunately, that university program is accredited.",
    "type": "input",
    "answer": "Fortunately, that university program is accredited",
    "source": "38.4",
    "instruction": "Underline the subject in each of the sentences below. The subject will not necessarily be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: Fortunately, that university program is accredited"
   },
   {
    "q": "In the morning, I'm planting those ffowers.",
    "type": "input",
    "answer": "In the morning, I’m planting those £owers",
    "source": "38.4",
    "instruction": "Underline the subject in each of the sentences below. The subject will not necessarily be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: In the morning, I’m planting those £owers"
   },
   {
    "q": "Eventually, Mr. Mulligan broke the silence.",
    "type": "input",
    "answer": "Eventually, Mr. Mulligan broke the silence",
    "source": "38.4",
    "instruction": "Underline the subject in each of the sentences below. The subject will not necessarily be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: Eventually, Mr. Mulligan broke the silence"
   },
   {
    "q": "While running for oflce, the candidate campaigned vigorously.",
    "type": "input",
    "answer": "While running for office, the candidate campaigned vigorously",
    "source": "38.4",
    "instruction": "Underline the subject in each of the sentences below. The subject will not necessarily be the first noun phrase in the sentence.",
    "explanation": "Respuesta del libro: While running for office, the candidate campaigned vigorously"
   },
   {
    "q": "Y ou must include all relevant facts. 2 . Bridgeti sa s k i n gn umerousq uestions .",
    "type": "input",
    "answer": "You must include all relevant facts",
    "source": "39.1",
    "instruction": "Underline the direct object in each of the sentences below. Be sure to ask yourself who or what is being acted upon or receiving the action.",
    "explanation": "Respuesta del libro: You must include all relevant facts"
   },
   {
    "q": "The Spanish ships needed fresh supplies.",
    "type": "input",
    "answer": "The Spanish ships needed fresh supplies",
    "source": "39.1",
    "instruction": "Underline the direct object in each of the sentences below. Be sure to ask yourself who or what is being acted upon or receiving the action.",
    "explanation": "Respuesta del libro: The Spanish ships needed fresh supplies"
   },
   {
    "q": "She will watch the baby.",
    "type": "input",
    "answer": "She will watch the baby",
    "source": "39.1",
    "instruction": "Underline the direct object in each of the sentences below. Be sure to ask yourself who or what is being acted upon or receiving the action.",
    "explanation": "Respuesta del libro: She will watch the baby"
   },
   {
    "q": "The townspeople have wanted tax relief for years.",
    "type": "input",
    "answer": "The townspeople have wanted tax relief for years. 189",
    "source": "39.1",
    "instruction": "Underline the direct object in each of the sentences below. Be sure to ask yourself who or what is being acted upon or receiving the action.",
    "explanation": "Respuesta del libro: The townspeople have wanted tax relief for years. 189"
   },
   {
    "q": "We'll discuss each argument.",
    "type": "input",
    "answer": "We’ll discuss each argument",
    "source": "39.2",
    "instruction": "Decide whether or not each sentence below has a direct object. Direct object? Y es No",
    "explanation": "Respuesta del libro: We’ll discuss each argument"
   },
   {
    "q": "Carter worked for a lumber company.",
    "type": "input",
    "answer": "Carter worked for a lumber company",
    "source": "39.2",
    "instruction": "Decide whether or not each sentence below has a direct object. Direct object? Y es No",
    "explanation": "Respuesta del libro: Carter worked for a lumber company"
   },
   {
    "q": "Those gamblers are losing their money.",
    "type": "input",
    "answer": "Those gamblers are losing their money",
    "source": "39.2",
    "instruction": "Decide whether or not each sentence below has a direct object. Direct object? Y es No",
    "explanation": "Respuesta del libro: Those gamblers are losing their money"
   },
   {
    "q": "At 7 P.M. we left for the theater.",
    "type": "input",
    "answer": "At 7 P.M. we left for the theater",
    "source": "39.2",
    "instruction": "Decide whether or not each sentence below has a direct object. Direct object? Y es No",
    "explanation": "Respuesta del libro: At 7 P.M. we left for the theater"
   },
   {
    "q": "The children are enjoying Disneyland.",
    "type": "input",
    "answer": "The children are enjoying Disneyland",
    "source": "39.2",
    "instruction": "Decide whether or not each sentence below has a direct object. Direct object? Y es No",
    "explanation": "Respuesta del libro: The children are enjoying Disneyland"
   },
   {
    "q": "Gerald has taken that course.",
    "type": "input",
    "answer": "Gerald has taken that course. direct object",
    "source": "39.3",
    "instruction": "Decide if the underlined phrase in each sentence below is a direct object or a verb complement.To make this decision, you can: (1)ask yourself if something or someone is being acted upon, and/or (2)decide if the verb is an action or linking",
    "explanation": "Respuesta del libro: Gerald has taken that course. direct object"
   },
   {
    "q": "Rob used this technique in his restaurant.",
    "type": "input",
    "answer": "Rob used this technique in his restaurant. direct object",
    "source": "39.3",
    "instruction": "Decide if the underlined phrase in each sentence below is a direct object or a verb complement.To make this decision, you can: (1)ask yourself if something or someone is being acted upon, and/or (2)decide if the verb is an action or linking",
    "explanation": "Respuesta del libro: Rob used this technique in his restaurant. direct object"
   },
   {
    "q": "Adam might withdraw his resignation.",
    "type": "input",
    "answer": "Adam might withdraw his resignation. direct object",
    "source": "39.3",
    "instruction": "Decide if the underlined phrase in each sentence below is a direct object or a verb complement.To make this decision, you can: (1)ask yourself if something or someone is being acted upon, and/or (2)decide if the verb is an action or linking",
    "explanation": "Respuesta del libro: Adam might withdraw his resignation. direct object"
   },
   {
    "q": "The mayor is sounding confident.",
    "type": "input",
    "answer": "The mayor is sounding confident. verb complement",
    "source": "39.3",
    "instruction": "Decide if the underlined phrase in each sentence below is a direct object or a verb complement.To make this decision, you can: (1)ask yourself if something or someone is being acted upon, and/or (2)decide if the verb is an action or linking",
    "explanation": "Respuesta del libro: The mayor is sounding confident. verb complement"
   },
   {
    "q": "We quickly got ready.",
    "type": "choice",
    "options": [
     "action",
     "linking"
    ],
    "correct": 0,
    "source": "39.3",
    "instruction": "Decide if the underlined phrase in each sentence below is a direct object or a verb complement.To make this decision, you can: (1)ask yourself if something or someone is being acted upon, and/or (2)decide if the verb is an action or linking",
    "answer": "We quickly got ready. verb complement",
    "explanation": "Respuesta del libro: We quickly got ready. verb complement"
   },
   {
    "q": "Our discussion was highly entertaining.",
    "type": "input",
    "answer": "Our discussion was highly entertaining",
    "source": "39.4",
    "instruction": "Underline the direct objects in the sentences below. Not all sentences will have a direct object.",
    "explanation": "Respuesta del libro: Our discussion was highly entertaining"
   },
   {
    "q": "He had a growing family.",
    "type": "input",
    "answer": "He had ag rowingf a m i l y",
    "source": "39.4",
    "instruction": "Underline the direct objects in the sentences below. Not all sentences will have a direct object.",
    "explanation": "Respuesta del libro: He had ag rowingf a m i l y"
   },
   {
    "q": "She quickly got indignant.",
    "type": "input",
    "answer": "She quickly got indignant",
    "source": "39.4",
    "instruction": "Underline the direct objects in the sentences below. Not all sentences will have a direct object.",
    "explanation": "Respuesta del libro: She quickly got indignant"
   },
   {
    "q": "Y ou must be the new baby sitter.",
    "type": "input",
    "answer": "You must be the new baby sitter",
    "source": "39.4",
    "instruction": "Underline the direct objects in the sentences below. Not all sentences will have a direct object.",
    "explanation": "Respuesta del libro: You must be the new baby sitter"
   },
   {
    "q": "The sheridi arrested a suspect in the fraud investigation.",
    "type": "input",
    "answer": "The sheri¡ arrested a suspect in the fraud investigation",
    "source": "39.4",
    "instruction": "Underline the direct objects in the sentences below. Not all sentences will have a direct object.",
    "explanation": "Respuesta del libro: The sheri¡ arrested a suspect in the fraud investigation"
   },
   {
    "q": "Holly left the plate for Luke.",
    "type": "input",
    "answer": "Holly left the plate for Luke",
    "source": "40.1",
    "instruction": "Underline the indirect object in each of the sentences below.",
    "explanation": "Respuesta del libro: Holly left the plate for Luke"
   }
  ],
  "answerKeys": {
   "38.1": {
    "1": "The servant accompanied His Lordship",
    "2": "Jean participated in the Tour de France",
    "3": "Such families have often preferred to travel in style",
    "4": "They could do nothing except run",
    "5": "Mr.Tower quietly explained all this to his son"
   },
   "38.2": {
    "1": "The Hotel Regina is an attractive place",
    "2": "It became the best-known symbol of Paris",
    "3": "The local merchants were on his side",
    "4": "Charles looked thoughtful",
    "5": "Christine seemed insecure"
   },
   "38.3": {
    "1": "The editor looked for new ideas for the magazine",
    "2": "You can rely on the experts at that company",
    "3": "Maggie usually goes berry picking in the summer",
    "4": "Roger is happy with his new computer",
    "5": "The workers went on strike for a couple of weeks"
   },
   "38.4": {
    "1": "After that, their neighbor came more often to help them",
    "2": "Fortunately, that university program is accredited",
    "3": "In the morning, I’m planting those £owers",
    "4": "Eventually, Mr. Mulligan broke the silence",
    "5": "While running for office, the candidate campaigned vigorously"
   },
   "39.1": {
    "1": "You must include all relevant facts",
    "2": "Bridget is asking numerous questions",
    "3": "The Spanish ships needed fresh supplies",
    "4": "She will watch the baby",
    "5": "The townspeople have wanted tax relief for years. 189"
   },
   "39.2": {
    "1": "We’ll discuss each argument",
    "2": "Carter worked for a lumber company",
    "3": "Those gamblers are losing their money",
    "4": "At 7 P.M. we left for the theater",
    "5": "The children are enjoying Disneyland"
   },
   "39.3": {
    "1": "Gerald has taken that course. direct object",
    "2": "Rob used this technique in his restaurant. direct object",
    "3": "Adam might withdraw his resignation. direct object",
    "4": "The mayor is sounding confident. verb complement",
    "5": "We quickly got ready. verb complement"
   },
   "39.4": {
    "1": "Our discussion was highly entertaining",
    "2": "He had ag rowingf a m i l y",
    "3": "She quickly got indignant",
    "4": "You must be the new baby sitter",
    "5": "The sheri¡ arrested a suspect in the fraud investigation"
   },
   "39.5": {
    "1": "The soldiers fired their weapons",
    "2": "Atal en t eddesi gn erma d ethat hat",
    "3": "She had married her next-door neighbor",
    "4": "Maria was watching her favorite soap opera",
    "5": "These people really irritate me"
   },
   "40.1": {
    "1": "Holly left the plate for Luke",
    "2": "She taught the principles to the class",
    "3": "Big Bird is telling the story to all the children",
    "4": "His father had bought the boat for Jonathan",
    "5": "You will show the money to me"
   },
   "40.2": {
    "1": "John worked that job for fifty years",
    "2": "The professor is showing the problem to the student",
    "3": "His wife and child brought fruit t oh i ma tt h eh ospital",
    "4": "Tom’ s has left the companyfor another job",
    "5": "The visiting king thanked the president for his hospitality. UNIT 13: SUBJECTS AND OBJECTS 190"
   },
   "40.3": {
    "1": "The principal might show the film to her students. The principal might show her students the film",
    "2": "Mrs. Hausen sent the company her check. Mrs. Hausen sent her check to the company",
    "3": "We bought the house for our parents. We b ou g ht ou rparent s t he hou s e",
    "4": "The referee threw me the ball. The referee threw the ball to me",
    "5": "The artist is drawing a sketch for her patron. The artist is drawing her patron a sketch"
   },
   "40.4": {
    "1": "He will send the poem to his fianc /C19 ee. He will send his fiance /C19et h ep o e m",
    "2": "The professor is e-mailing the students his comments. The professor is e-mailing his comments to the students",
    "3": "That company built a ship for the navy. The company built the navy a ship",
    "4": "She drew a picture for her son. She drew her son a picture",
    "5": "Amanda’s friend was throwing a party for her. Amanda’ s friend was throwing her a party"
   },
   "40.5": {
    "1": "We found a dress for her",
    "2": "Mr. Duquesne has brought him the plans",
    "3": "The old hunter told us the story",
    "4": "The instructor is ordering this book for the students in his class",
    "5": "I never promised you a rose garden"
   },
   "40.6": {
    "1": "The children gave the teacher an apple",
    "2": "I brought this for you",
    "3": "The two men clasped hands",
    "4": "This treaty will benefit all mankind",
    "5": "She is telling the reporter the truth"
   },
   "41.1": {
    "1": "She laughed at the movie",
    "2": "Don’t bother me now",
    "3": "I don’t feel guilty",
    "4": "He has asked her to dance",
    "5": "Chris had been living near you"
   },
   "41.2": {
    "1": "My dear friend sent me a postcard from Italy. indirect object",
    "2": "A teenager sat next to me in the theater. object of a preposition",
    "3": "Irma has bought you the cookware. indirect object",
    "4": "The dog approached them. direct object",
    "5": "That family is always blaming us for their problems. direct object"
   },
   "42.1": {
    "1": "These illnesses are treatable. these illnesses 2 . T h ej u d g eh a dm a d eat erriblem istake . the judge",
    "3": "Be supportive. you",
    "4": "Joan’ s father is an architect Joan’ s father",
    "5": "Stand up for your rights. you"
   },
   "42.2": {
    "1": "You can see marks in the dirt. you marks",
    "2": "That film sounds interesting. that film",
    "3": "The congregants built the temple. the congregants the temple",
    "4": "Give it to me! you it me",
    "5": "W e need this computer. we this computer"
   },
   "43.1": {
    "1": "Frank ran to the store and Frank purchased a few items. While it’ s a perfectly grammatical sentence, we often choose to make it less repetitious and say instead:",
    "2": "Frank ran to the store and purchased a few items. Since and , a coordinating conjunction, is joining two verb phrases here, ran to the store a n dp urchasedaf e wi t e m s is called a compound verb phrase . Quick tip 44.1 Two verb phrases joined by a coordinating conjunction is called a compound verb phrase . H e r ea r es o m em o r ee xamples ,w i t ht h ec ompoundv e r bp hrasesu nderlined",
    "3": "The general ran forward and led the troops",
    "4": "She remained calm and followed her instincts",
    "5": "His advisor presents him with good ideas but rarely helps him carry them out",
    "6": "Michael and I have been best friends for years",
    "7": "Delta Airlines and Air France have £ights to Paris from the U.S",
    "8": "The lead actress or director will likely win Oscars",
    "9": "Audi and BMWare owned by German companies",
    "10": "The president and his foreign visitor held a joint press conference. 194 Lesson 44: Compound verb phrases What do you notice about this next sentence?"
   },
   "44.1": {
    "2": "Adam wrote letters to the company and spoke to their representatives",
    "3": "He invented the product but lost money in the process",
    "4": "Stephen £ew to Europe and visited his childhood friend",
    "5": "I received your message yesterday but couldn’t respond to it immediately",
    "6": "On Saturday nights Samantha dresses up and meets with her friends",
    "7": "Once a month or so we stay home and order dinner in",
    "8": "Politicians do not always walk the walk and talk the talk",
    "9": "On hot summer days, the O’Briens drive to the beach and enjoy the sun",
    "10": "This couple fights but always makes up"
   }
  }
 },
 {
  "unit": 14,
  "title": "Compound phrases",
  "part": "Part II: Kinds of phrases",
  "startPage": 206,
  "pdfPages": {
   "theory": [
    206,
    208
   ],
   "answers": 210
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Las frases compuestas unen dos estructuras del mismo tipo: frases nominales compuestas y frases verbales compuestas.</p></div>\n<div class=\"theory-es-section\"><h4>1. Compuestos nominales</h4><p>Núcleos coordinados: <em><strong>bread and butter</strong></em>, listas con <em>and</em>. El determinante suele compartirse: <em>the cat <strong>and</strong> (the) dog</em>.</p></div>\n<div class=\"theory-es-section\"><h4>2. Compuestos verbales</h4><p>Dos verbos coordinados o con auxiliar compartido: <em>She <strong>sang and danced</strong></em>; <em>He <strong>has washed</strong> the dishes <strong>and dried</strong> them</em> (auxiliar compartido).</p></div>\n<div class=\"theory-es-section\"><h4>3. Límites</h4><p>No confundir con oraciones compuestas (U16): acá el nivel es de <em>frase</em>, no de oración completa.</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> Buscá la coordinación (and, or, but) y contá cuántos núcleos hay a cada lado.</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>Test yourself 41.2\n1. My dear friend sent me a postcard from Italy. indirect object\n2. A teenager sat next to me in the theater. object of a preposition\n3. Irma has bought you the cookware. indirect object\n4. The dog approached them. direct object\n5. That family is always blaming us for their problems. direct object\nTest yourself 42.1\nSubject\n1. These illnesses are treatable. these illnesses\n2 . T h ej u d g eh a dm a d eat erriblem i s t a k e . the judge\n3. Be supportive. you\n4. Joan' s father is an architect Joan' s father\n5. Stand up for your rights. you\nTest yourself 42.2\nSubject Direct object Indirect object\n1. Y ou can see marks in the dirt. you marks\n2. That film sounds interesting. that film\n3. The congregants built the temple. the congregants the temple\n4. Give it to me! you it me\n5. W e need this computer. we this computer\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE\n.\nUNIT 13: SUBJECTS AND OBJECTS\n192</p>\n<p>UNIT 14: COMPOUND PHRASES\nCoordinating conjunctions, such as and , or ,a n d but ,a r ev e r yp owerful .A sw ed iscussed\nin\nLesson 18\n, they can join any two units of the same type. Here are some examples with\nand\n, the most common coordinating conjunction:\n1. He gave tennis lessons to the girl and her brother. (two noun phrases joined)\n2. I cooked dinner and washed the laundry. (two verb phrases joined)\n3. Their beautiful and charming hostess soon put them at ease. (two adjectives\njoined)\n4. My mother listened to me seriously and patiently. (two adverbs joined)\n5. The monkey ran up the tree and around its trunk. (two prepositional phrases\njoined)\n6. Ir o d em yb i k e and Teresa walked. (two sentences joined)\nIn this unit, we'll take a closer look at joined noun phrases and joined verb phrases.\n193</p>"
   },
   {
    "n": 43,
    "title": "Compound noun phrases",
    "html": "<p>What do you notice about this next sentence?</p>\n<p>1. My friend worked at the diner and his cousin worked at the diner.</p>\n<p>While it' s a perfectly grammatical sentence, we often choose to make it less repetitious</p>\n<p>and say instead:</p>\n<p>2. My friend and his cousin worked at the diner.</p>\n<p>Since</p>\n<p>and</p>\n<p>, a coordinating conjunction, is joining two noun phrases here,</p>\n<p>my friend and</p>\n<p>his cousin</p>\n<p>is called a</p>\n<p>compound noun phrase</p>\n<p>.</p>\n<p>Quick tip 43.1</p>\n<p>Two noun phrases joined by a coordinating conjunction is called a compound noun phrase .</p>\n<p>H e r ea r es o m em o r ee xamples ,w i t ht h ec ompoundn o u np h r a s e su nderlined .</p>\n<p>3. She slipped the photograph and both letters into her pocket.</p>\n<p>4. The senator or his assistant will attend the event.</p>\n<p>5. I'll be traveling to Kansas and Missouri next week on business.</p>\n<p>Test yourself 43.1</p>\n<p>Underline the compound noun phrases in each of the sentences below.</p>\n<p>Sample: The public discovered that the company and its subsidiaries were cheating customers.</p>\n<p>Getting started</p>\n<p>(answers on p.197)</p>\n<p>1. They had walked for miles and</p>\n<p>miles.</p>\n<p>2. Henry felt guilt and shame for what he had</p>\n<p>done.</p>\n<p>3. V ermont has lots of old houses and rustic</p>\n<p>barns.</p>\n<p>4. The young bride is going shopping with her</p>\n<p>mother or mother-in-law.</p>\n<p>5. Paying for gas and electricity costs a lot more</p>\n<p>this year than last.</p>\n<p>More practice</p>\n<p>(answers on the website)</p>\n<p>6. Michael and I have been best friends for</p>\n<p>years.</p>\n<p>7. Delta Airlines and Air France have ffights to</p>\n<p>Paris from the U.S.</p>\n<p>8. The lead actress or director will likely win</p>\n<p>Oscars.</p>\n<p>9. Audi and BMWare owned by German</p>\n<p>companies.</p>\n<p>10. The president and his foreign visitor held a</p>\n<p>joint press conference.</p>"
   }
  ],
  "tips": [
   {
    "code": "43.1",
    "text": "Two noun phrases joined by a coordinating conjunction is called a compound noun phrase . H e r ea r es o m em o r ee xamples ,w i t ht h ec ompoundn o u np h r a s e su nderlined . 3. She slipped the photograph and both letters into her pocket. 4. The senator or his assistant will attend the event. 5. I'll be traveling to Kansas and Missouri next week on business."
   }
  ],
  "practice": [
   {
    "code": "41.2",
    "instruction": "1. My dear friend sent me a postcard from Italy. indirect object 2. A teenager sat next to me in the theater. object of a preposition 3. Irma has bought you the cookware. indirect object 4. The dog approached them. direct object 5. That family is always blaming us for their problems. direct object",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "42.1",
    "instruction": "Subject 1. These illnesses are treatable. these illnesses 2 . T h ej u d g eh a dm a d eat erriblem i s t a k e . the judge 3. Be supportive. you 4. Joan' s father is an architect Joan' s father 5. Stand up for your rights. you",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "42.2",
    "instruction": "Subject Direct object Indirect object 1. Y ou can see marks in the dirt. you marks 2. That film sounds interesting. that film 3. The congregants built the temple. the congregants the temple 4. Give it to me! you it me 5. W e need this computer. we this computer FOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE .",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "43.1",
    "instruction": "Underline the compound noun phrases in each of the sentences below.",
    "sample": "Sample: The public discovered that the company and its subsidiaries were cheating customers.",
    "items": [
     {
      "n": 1,
      "text": "They had walked for miles and miles.",
      "answer": "They had walked for miles and miles"
     },
     {
      "n": 2,
      "text": "Henry felt guilt and shame for what he had done.",
      "answer": "Henry felt guilt and shame for what he had done"
     },
     {
      "n": 3,
      "text": "V ermont has lots of old houses and rustic barns.",
      "answer": "V ermont has lots of old houses and rustic barns"
     },
     {
      "n": 4,
      "text": "The young bride is going shopping with her mother or mother-in-law.",
      "answer": "The young bride is going shopping with her mother or mother-in-law"
     },
     {
      "n": 5,
      "text": "Paying for gas and electricity costs a lot more this year than last.",
      "answer": "Paying for gas and electricity costs a lot more this year than last"
     }
    ],
    "answers": {
     "1": "They had walked for miles and miles",
     "2": "Henry felt guilt and shame for what he had done",
     "3": "V ermont has lots of old houses and rustic barns",
     "4": "The young bride is going shopping with her mother or mother-in-law",
     "5": "Paying for gas and electricity costs a lot more this year than last"
    }
   }
  ],
  "exercises": [
   {
    "q": "They had walked for miles and miles.",
    "type": "input",
    "answer": "They had walked for miles and miles",
    "source": "43.1",
    "instruction": "Underline the compound noun phrases in each of the sentences below.",
    "explanation": "Respuesta del libro: They had walked for miles and miles"
   },
   {
    "q": "Henry felt guilt and shame for what he had done.",
    "type": "input",
    "answer": "Henry felt guilt and shame for what he had done",
    "source": "43.1",
    "instruction": "Underline the compound noun phrases in each of the sentences below.",
    "explanation": "Respuesta del libro: Henry felt guilt and shame for what he had done"
   },
   {
    "q": "V ermont has lots of old houses and rustic barns.",
    "type": "input",
    "answer": "V ermont has lots of old houses and rustic barns",
    "source": "43.1",
    "instruction": "Underline the compound noun phrases in each of the sentences below.",
    "explanation": "Respuesta del libro: V ermont has lots of old houses and rustic barns"
   },
   {
    "q": "The young bride is going shopping with her mother or mother-in-law.",
    "type": "input",
    "answer": "The young bride is going shopping with her mother or mother-in-law",
    "source": "43.1",
    "instruction": "Underline the compound noun phrases in each of the sentences below.",
    "explanation": "Respuesta del libro: The young bride is going shopping with her mother or mother-in-law"
   },
   {
    "q": "Paying for gas and electricity costs a lot more this year than last.",
    "type": "input",
    "answer": "Paying for gas and electricity costs a lot more this year than last",
    "source": "43.1",
    "instruction": "Underline the compound noun phrases in each of the sentences below.",
    "explanation": "Respuesta del libro: Paying for gas and electricity costs a lot more this year than last"
   }
  ],
  "answerKeys": {
   "43.1": {
    "1": "They had walked for miles and miles",
    "2": "Henry felt guilt and shame for what he had done",
    "3": "V ermont has lots of old houses and rustic barns",
    "4": "The young bride is going shopping with her mother or mother-in-law",
    "5": "Paying for gas and electricity costs a lot more this year than last"
   },
   "44.1": {
    "1": "They often call each other and talk all afternoon",
    "2": "Adam wrote letters to the company and spoke to their representatives",
    "3": "He inventedt h ep roductb u tl o s tm o n e yi nt h ep rocess",
    "4": "Stephen £ew to Europe and visited his childhood friend",
    "5": "I received your message yesterday but couldn’t respond to it immediately"
   },
   "44.2": {
    "1": "The horse stepped back and rolled its eyes",
    "2": "Amanda is wearing long sleeves but carrying a parasol",
    "3": "When Kathy and her daughter travel to Boston, they always visit Harvard and MIT",
    "4": "On Sundays Mr. Adams and his neighbor play golf and have lunch in the clubhouse",
    "5": "He loves to cook and entertain.",
    "6": "Her horse was behaving calmly",
    "7": "Johnny had eaten a good breakfast",
    "8": "Those decisions can be diflcult"
   },
   "45.1": {
    "1": "I’m shocked!",
    "2": "Rose and Charles are getting married in that house",
    "3": "What a surprising announcement!",
    "4": "The weather was awful yesterday",
    "5": "W atch out for that car!",
    "6": "Didn’t we have fun together?",
    "7": "W hat a per for mance !",
    "8": "W ould you want to rent a movie tonight? 203"
   }
  }
 },
 {
  "unit": 15,
  "title": "The functions of sentences",
  "part": "Part III: Getting started with sentences",
  "startPage": 216,
  "pdfPages": {
   "theory": [
    216,
    217
   ],
   "answers": 219
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Las oraciones se clasifican por su función comunicativa: enunciativa, interrogativa, exclamativa e imperativa.</p></div>\n<div class=\"theory-es-section\"><h4>1. Declarativa</h4><p>Declara un hecho. <em>The sun rises every morning.</em></p></div>\n<div class=\"theory-es-section\"><h4>2. Interrogativa</h4><p>Pregunta. <strong>Yes/no:</strong> <em>Are you interested?</em> <strong>Wh-:</strong> <em>Which is yours?</em> También <strong>tag questions</strong>: <em>We have seen this, haven't we?</em></p></div>\n<div class=\"theory-es-section\"><h4>3. Exclamativa</h4><p>Expresa emoción fuerte. <em>I'm shocked!</em> / <em>What a surprising announcement!</em></p></div>\n<div class=\"theory-es-section\"><h4>4. Imperativa</h4><p>Orden, consejo o instrucción; sujeto omitido. <em>Watch out for that car!</em></p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> Mirá la puntuación y la intención: ¿., ?, ¡!/What…, o verbo al inicio sin sujeto?</div>",
  "lessons": [
   {
    "n": 45,
    "title": "Identifying sentences by function",
    "html": "<p>One way that a sentence can be described is according to the job that it's doing in a conver-</p>\n<p>sation. Compare these sentences:</p>\n<p>1. That clown was funny.</p>\n<p>2. Is she a physician?</p>\n<p>3. Please wash the dishes.</p>\n<p>4. What an exciting movie!</p>\n<p>Y ou know that sentence 1 is making a statement, sentence 2 is asking a question, sen-</p>\n<p>tence 3 is giving a command, and sentence 4 is expressing a strong emotion. These func-</p>\n<p>tions are summarized in</p>\n<p>Quick tip</p>\n<p>45.1</p>\n<p>.</p>\n<p>Quick tip 45.1</p>\n<p>Sentences that make a statement are called declaratives; sentences that ask a question are</p>\n<p>called interrogatives; sentences that give a command are called imperatives; sentences</p>\n<p>that express strong emotion are called</p>\n<p>exclamations</p>\n<p>.</p>\n<p>H e r ea r eaf e wm o r ee xamples :</p>\n<p>5. Edward' s parents live on a farm.</p>\n<p>(declarative)</p>\n<p>6. Have you accepted the fact that she'll never move? (interrogative)</p>\n<p>7. Don't believe a word she says!</p>\n<p>(imperative)</p>\n<p>8. That's silly!</p>\n<p>(exclamation)</p>\n<p>Test yourself 45.1</p>\n<p>Identify each of the sentences below as either declarative, interrogative, imperative, or</p>\n<p>exclamation.</p>\n<p>Sample: How old are you now? interrogative</p>\n<p>Getting started</p>\n<p>(answers on p. 206)</p>\n<p>1. I'm shocked! ................................................................................................................</p>\n<p>2. Rose and Charles are getting married in that house. ................................................................................................................</p>\n<p>3. What a surprising announcement! ................................................................................................................</p>\n<p>4. The weather was awful yesterday. ................................................................................................................</p>\n<p>5. W atch out for that car! ................................................................................................................</p>\n<p>More practice (answers on the website)</p>\n<p>6. Didn't we have fun together? ................................................................................................................</p>\n<p>7. W hat a per for mance ! ................................................................................................................</p>\n<p>8. W ould you want to rent a movie tonight? ................................................................................................................</p>"
   }
  ],
  "tips": [
   {
    "code": "45.1",
    "text": "Sentences that make a statement are called declaratives; sentences that ask a question are called interrogatives; sentences that give a command are called imperatives; sentences that express strong emotion are called exclamations . H e r ea r eaf e wm o r ee xamples : 5. Edward' s parents live on a farm. (declarative) 6. Have you accepted the fact that she'll never move? (interrogative) 7. Don't believe a word she says! (imperative) 8. That's silly! (exclamation)"
   }
  ],
  "practice": [
   {
    "code": "45.1",
    "instruction": "Identify each of the sentences below as either declarative, interrogative, imperative, or exclamation.",
    "sample": "Sample: How old are you now? interrogative",
    "items": [
     {
      "n": 1,
      "text": "I'm shocked!",
      "answer": "I’m shocked! exclamation"
     },
     {
      "n": 2,
      "text": "Rose and Charles are getting married in that house.",
      "answer": "Rose and Charles are getting married in that house. declarative"
     },
     {
      "n": 3,
      "text": "What a surprising announcement!",
      "answer": "What a surprising announcement! exclamation"
     },
     {
      "n": 4,
      "text": "The weather was awful yesterday.",
      "answer": "The weather was awful yesterday. declarative"
     },
     {
      "n": 5,
      "text": "W atch out for that car!",
      "answer": "W atch out for that car! imperative"
     }
    ],
    "answers": {
     "1": "I’m shocked! exclamation",
     "2": "Rose and Charles are getting married in that house. declarative",
     "3": "What a surprising announcement! exclamation",
     "4": "The weather was awful yesterday. declarative",
     "5": "W atch out for that car! imperative"
    }
   }
  ],
  "exercises": [
   {
    "q": "I'm shocked!",
    "type": "input",
    "answer": "I’m shocked! exclamation",
    "source": "45.1",
    "instruction": "Identify each of the sentences below as either declarative, interrogative, imperative, or exclamation.",
    "explanation": "Respuesta del libro: I’m shocked! exclamation"
   },
   {
    "q": "Rose and Charles are getting married in that house.",
    "type": "input",
    "answer": "Rose and Charles are getting married in that house. declarative",
    "source": "45.1",
    "instruction": "Identify each of the sentences below as either declarative, interrogative, imperative, or exclamation.",
    "explanation": "Respuesta del libro: Rose and Charles are getting married in that house. declarative"
   },
   {
    "q": "What a surprising announcement!",
    "type": "input",
    "answer": "What a surprising announcement! exclamation",
    "source": "45.1",
    "instruction": "Identify each of the sentences below as either declarative, interrogative, imperative, or exclamation.",
    "explanation": "Respuesta del libro: What a surprising announcement! exclamation"
   },
   {
    "q": "The weather was awful yesterday.",
    "type": "input",
    "answer": "The weather was awful yesterday. declarative",
    "source": "45.1",
    "instruction": "Identify each of the sentences below as either declarative, interrogative, imperative, or exclamation.",
    "explanation": "Respuesta del libro: The weather was awful yesterday. declarative"
   },
   {
    "q": "W atch out for that car!",
    "type": "input",
    "answer": "W atch out for that car! imperative",
    "source": "45.1",
    "instruction": "Identify each of the sentences below as either declarative, interrogative, imperative, or exclamation.",
    "explanation": "Respuesta del libro: W atch out for that car! imperative"
   }
  ],
  "answerKeys": {
   "45.2": {
    "1": "He’s not really crazy, is he? tag question",
    "2": "Which is yours? wh- question",
    "3": "Are you interested? yes/no question",
    "5": "We have seen this before, haven’t we? tag question"
   },
   "45.1": {
    "1": "I’m shocked! exclamation",
    "2": "Rose and Charles are getting married in that house. declarative",
    "3": "What a surprising announcement! exclamation",
    "4": "The weather was awful yesterday. declarative",
    "5": "W atch out for that car! imperative"
   },
   "46.1": {
    "2": "I stayed in bed that day",
    "3": "Nobody moved",
    "4": "My favorite hotel is on Park A venue",
    "5": "I overslept today",
    "6": "W e enjoy cruising on the Mississippi River",
    "7": "Our cousin lives about an hour from us",
    "8": "The young architect arrives in his office at 8:30 A.M. each weekday",
    "9": "Whales are mammals",
    "10": "Rain is good for the environment"
   },
   "46.2": {
    "1": "Jane put the glass vase on the table and her mother picked it up. This is an example of a compound sentence . It actually contains two sentences. The first is: Jane put the glass vase on the table . The second is: Her mother picked it up .S i n c ea sentence within a sentence is called a clause, we can also say that sentence 1 contains two clauses. Just as a simple sentence must contain at least a subject and a verb phrase, each of the sentences (clauses) within a compound sentence must contain its own subject and verb phrase. Recall from Lesson18 that conjunctions, like and , or ,a n d but , join things. In fact, the two sentences within sentence 1 are joined by the conjunction and . Recall also that there are two kinds of conjunctions, coordinating and subordinating.The sentences in a compound sentence are joined together by a coordinating conjunction. As we discussed in Lesson 18 , there are three common coordinating conjunctions; they are and , or ,a n d but .F o u r less common ones are for , so , yet ,a n d nor . (Remember F ANBOYS, which contains the first letter of each.) Quick tip 47.1 A sentence that is made up of two or more sentences ( clauses ) joined by a coordinating conjunction (most commonly and , or , and but ) is called a compound sentence",
    "2": "The department stores are having a sale this weekend",
    "3": "Expensive antique jewelry",
    "4": "Our home on the ranch",
    "5": "Fresh-cut £owers on the table",
    "6": "Sailing around the world",
    "7": "Sang my favor ite song",
    "8": "She is paying for her own tuition",
    "9": "Exercising can leave you exhausted",
    "10": "That magazine and those books look interesting",
    "11": "The officer and his men followed the rules",
    "12": "She and her husband greeted me at the door. UNIT 16: COMBINING SENTENCES 208 The underlined part of each sentence is a compound noun phrase (see Lesson 43 )a n di s considered to be one subject. So these sentences are all simple sentences. The same thing is true of compound verb phrases:",
    "13": "That magazine l o o k sa n ds e e m si nteresting",
    "14": "The officer followed the rules and saved the day",
    "15": "She met and greeted me at the door. The underlined parts of sentences 13^15 are compound verb phrases (see Lesson 44 )a n d each is considered to be one verb phrase. So, again, these sentences are all simple sentences. Lesson 46: Simple sentences 209 Lesson 47: Compound sentences As we mentioned in Lesson 46 , a sentence can contain more than one sentence within it, for example:"
   },
   "47.1": {
    "1": "Andre pulled the car into the street, and Beth began reading the directions",
    "2": "She enjoyed shopping for food, but she especially enjoyed cooking. 3 . Ic a nd ot h i sn o w ,o rIc a nd oi tl a t e r",
    "4": "Dan does not feel well, yet he wants to go in to work",
    "5": "We missed our £ight, so we have to wait around the airport for the next available one",
    "6": "He does not like to change his mind, nor is he willing to compromise",
    "7": "You deserve your good fortune, for you have ah e a r to fg o l d",
    "8": "The players are running onto the field, and then they are beginning to practice",
    "9": "Stephanie likes to go to concerts, but she will not see an opera",
    "10": "You can pay with cash, or you can take out a loan. 210"
   },
   "47.2": {
    "1": "He can’t blame her for the problem",
    "2": "Nora was Zach’ s stepmother but she treated him like her other children and he trusted her completely. Here, the three sentences that make up this sentence are: (1) Nora was Zach’s step- mother ;( 2 ) she treated him like her other children ;( 3 ) he trusted her completely .S ot h e sentence There was a glass vase on the table and Jane picked it up contains two sentences, or clauses. The sentence Nora was Zach’s stepmother but she treated him like her other children and he trusted her completely contains three sentences, or clauses. In fact, a compound sentence can contain any number of sentences, though we usually limit ourselves to just a few:",
    "3": "He turned his head away and he pretended to ignore her but he continued to listen to her and in fact he hung on her every word. (4 sentences or clauses) Keep in mind that you can’t tell if a sentence is simple or compound by how long it is; you n e e dt os e ei fi tc ontainso n eo rm o r et h a no n ec ompletes entencew i t h i ni t .F o re xample , the following sentence, although it is long, is just a simple sentence:",
    "4": "The tall man with the violin case quickly climbed the stairs to the abandoned warehouse near the railroad tracks. This is a simple sentence because it has just one subject, the tall man with the violin case , and one verb phrase ^ notice that there is just one verb, climbed .( T h es entencei sj u s t long because it contains a few preposition phrases.) And the following sentence, although it is short, is a compound sentence: John laughed and Mary cried . It’ s a compound sentence because it contains two sentences that can stand alone: John laughed ; Mary cried .E a c ho f these has its own subject and verb phrase. Lesson 47: Compound sentences 211",
    "5": "The coach wants to win, but he will be happy with a tie",
    "6": "It will be a sunny day",
    "7": "Jeremy likes his wife’s new dress",
    "8": "I will have a bowl of soup, but I don’t want salad",
    "9": "Sam called me at noon",
    "10": "He will be going to Penn State, or he’ll study at Temple University. A compound sentence can contain more than two sentences:"
   },
   "47.3": {
    "1": "Vicki was always looking at herself in the mirror, but MaryAnn was extremely self-confident, and she never gave herself a second glance",
    "2": "Her father was devoted to her",
    "3": "Our firm’ s CEO will be £ying to Chicago next week, but he’ll be returning the same day",
    "4": "The lady in the elegant blue dress entered the well-lit room with her perky little dog in her arms",
    "5": "The teacher graded the students’exams and their papers. W e’ve certainly got a coordinating conjunction, and ,i ns entence5 .H owever ,t h eq uestionis, what is the and joining? If we look at what’ s on each side of the and ,w efi n dt h ef o l l o - wing: The teacher graded the students’ exams , which is a sentence, and their papers ; their paper s is not a sentence by itself. In this case, the conjunction and is joining two noun phrases: the students’ exams and their papers . It’ s not joining two complete sentences, and so the sentence is not a compound sentence but is a simple sentence",
    "6": "We don’t have much time left in the zoo, but we should visit the bird cage, and we must see the monkeys, or we should at least feed the goats in the petting area, but I definitely want to take a look at the elephants",
    "7": "W e can catch a movie, or we can visit a museum, but we won’t be seeing a Broadway show",
    "8": "Many people walk in the woods in autumn",
    "9": "The economy is getting worse, and many people are worried about their jobs",
    "10": "My car is getting old, and it’ s pretty banged up, but I hope to get another year out of it. Keep in mind that a compound phrase ( Lessons 43 and 44) is not the same thing as a compound sentence. For example, the following sentence has a compound noun phrase (underlined):"
   }
  }
 },
 {
  "unit": 16,
  "title": "Combining sentences",
  "part": "Part III: Getting started with sentences",
  "startPage": 220,
  "pdfPages": {
   "theory": [
    220,
    242
   ],
   "answers": 244
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Cómo se combinan oraciones simples en compuestas, complejas, con cláusulas de relativo y compuesto-complejas.</p></div>\n<div class=\"theory-es-section\"><h4>1. Simple</h4><p>Una cláusula independiente: <em>The weather was awful yesterday.</em></p></div>\n<div class=\"theory-es-section\"><h4>2. Compound</h4><p>Dos independientes unidas por coordinante o punto y coma: <em>I called, <strong>but</strong> she was out</em>.</p></div>\n<div class=\"theory-es-section\"><h4>3. Complex</h4><p>Independiente + dependiente (subordinada): <em><strong>Although</strong> it rained, we left</em>.</p></div>\n<div class=\"theory-es-section\"><h4>4. Relative clauses</h4><p>Dependiente que modify a un sustantivo: <em>The students <strong>who studied hard</strong> did well</em>. Cuidado con restrictive vs. non-restrictive (comas).</p></div>\n<div class=\"theory-es-section\"><h4>5. Compound-complex</h4><p>Al menos dos independientes y al menos una dependiente: <em>I know that she left, <strong>but</strong> I don't know why</em>.</p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> Contá cláusulas: ¿1 simple? ¿2+ independientes? ¿hay dependiente? Eso fija compound / complex / compound-complex.</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>Answer keys: Test yourself, Getting started\nquestions – Unit 15\nTest yourself 45.1\n1. I'm shocked! exclamation\n2. Rose and Charles are getting married in that house. declarative\n3. What a surprising announcement! exclamation\n4. The weather was awful yesterday. declarative\n5. W atch out for that car! imperative\nTest yourself 45.2\n1. He's not really crazy, is he? tag question\n2. Which is yours? wh- question\n3. Are you interested? yes/no question\n4 . I st h ee videncea g a i n s th i mc ompelling ? yes/no question\n5. We have seen this before, haven't we? tag question\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.\n206</p>"
   },
   {
    "n": 46,
    "title": "Simple sentences",
    "html": "<p>Most of the sentences we've looked at so far in this book are simple sentences, which\nmeans that they are sentences that are made up of just one sentence. But sentences can be\nmade up of more than one sentence. Let' s start by looking at a few sentences and compa-\nring them.\n1 . T h el i t t l eb o yl a u g h e d .\n2. The little boy laughed and the little girl smiled.\n3. The little boy laughed and the little girl smiled and their dog ran around in\ncircles.\nY ou can see that sentence 2 consists of two sentences joined by\nand\nand that sen-\ntence 3 consists of three sentences joined by\nand\n. Each of the sentences that make\nup a larger sentence is called a\nclause\n. So sentence 1 contains one clause, sentence\n2 contains two clauses, and sentence 3 contains three clauses. Just as words combine\nto form phrases, phrases combine to form clauses, and clauses can combine to form\nsentences. A clause must contain at least a noun phrase functioning as the subject\nand a main verb.\nQuick tip 46.1\nA clause is a free-standing sentence or a sentence within a sentence; a clause or sentence\ncontains at least a subject and a\nmain verb\n.\nQuick tip 46.2\nA sentence can contain one or more clauses .\nHere are some more examples of sentences containing only one clause:\n4. That magazine looks interesting.\n5. The oflcer followed the rules.\n6. She greeted me at the door.\nNotice that each contains only one subject and one verb phrase.\nQuick tip 46.3\nA sentence that contains only one clause, that is, one subject and one verb phrase, is called\na\nsimple sentence\n.\nAre the following simple sentences?\n7. on the ffoor\n8. the extremely tall boy\n9. were reading newspapers on the train\n207</p>\n<p>None of these contains both a subject and a ver b phrase, and so these are not sentences at\nall; they're just phrases.Y ou may recognize sentence 7 as a preposition phrase, sentence 8\nas a noun phrase, and sentence 9 as a verb phrase. (See\nLessons 28\n,\n29\n,a n d3 0 . )\nTest yourself 46.1\nIn each simple sentence below, underline the subject and put a squiggly line beneath the verb\nphrase.\nSample: David listened to her response.\nGetting started\n(answers on p. 231)\n1 . T h ec ommitteep resentedi t si d e a s\nto Congress.\n2. I stayed in bed that day.\n3. Nobody moved.\n4. My favorite hotel is on Park A venue.\n5. I overslept today.\nMore practice\n(answers on the website)\n6. W e enjoy cruising on the Mississippi River.\n7. Our cousin lives about an hour from us.\n8. The young architect arrives in his oflce at\n8:30 A.M. each weekday.\n9. Whales are mammals.\n10. Rain is good for the environment.\nTest yourself 46.2\nDecide if each item below is a simple sentence or just a phrase.\nSample: walking nearby phrase\nGetting started\n(answers on p. 231)\n1. I have never eaten caviar. ..............................................................................\n2. The department stores are having a sale this weekend. ..............................................................................\n3. Expensive antique jewelry. ..............................................................................\n4. Our home on the ranch. ..............................................................................\n5. Fresh-cut ffowers on the table. ..............................................................................\nMore practice (answers on the website)\n6. Sailing around the world. ..............................................................................\n7. Sang my favor ite song. ..............................................................................\n8. She is paying for her own tuition. ..............................................................................\n9. Exercising can leave you exhausted. ..............................................................................\n10. The bus is approaching. ..............................................................................\nWhat about sentences like the following?\n10. That magazine and those books look interesting.\n11. The oflcer and his men followed the rules.\n12. She and her husband greeted me at the door.\nUNIT 16: COMBINING SENTENCES\n208</p>\n<p>The underlined part of each sentence is a compound noun phrase (see Lesson 43 )a n di s\nconsidered to be one subject. So these sentences are all simple sentences. The same thing\nis true of compound verb phrases:\n13. That magazine l o o k sa n ds e e m si nteresting .\n14. The oflcer followed the rules and saved the day.\n15. She met and greeted me at the door.\nThe underlined parts of sentences 13^15 are compound verb phrases (see\nLesson 44\n)a n d\neach is considered to be one verb phrase. So, again, these sentences are all simple\nsentences.</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 47,
    "title": "Compound sentences",
    "html": "<p>As we mentioned in Lesson 46 , a sentence can contain more than one sentence within it,\nfor example:\n1. Jane put the glass vase on the table and her mother picked it up.\nThis is an example of a\ncompound sentence\n. It actually contains two sentences. The\nfirst is:\nJane put the glass vase on the table\n. The second is:\nHer mother picked it up\n.S i n c ea\nsentence within a sentence is called a clause, we can also say that sentence 1 contains two\nclauses. Just as a simple sentence must contain at least a subject and a verb phrase, each\nof the sentences (clauses) within a compound sentence must contain its own subject and\nverb phrase.\nRecall from\nLesson18\nthat conjunctions, like\nand\n,\nor\n,a n d\nbut\n, join things. In fact, the two\nsentences within sentence 1 are joined by the conjunction\nand\n. Recall also that there are\ntwo kinds of conjunctions, coordinating and subordinating.The sentences in a compound\nsentence are joined together by a coordinating conjunction. As we discussed in\nLesson\n18\n, there are three common coordinating conjunctions; they are\nand\n,\nor\n,a n d\nbut\n.F o u r\nless common ones are\nfor\n,\nso\n,\nyet\n,a n d\nnor\n. (Remember F ANBOYS, which contains the first\nletter of each.)\nQuick tip 47.1\nA sentence that is made up of two or more sentences ( clauses ) joined by a coordinating\nconjunction (most commonly\nand</p>\n<p>,\nor\n, and\nbut\n) is called a\ncompound sentence\n.\nTest yourself 47.1\nEach of the sentences below is a compound sentence consisting of two sentences (clauses).\nUnderline each of the sentences which is in the compound sentence.\nSample: I felt restless after breakfast and Iw andereda r o u n dt h eh o u s e .\nGetting started\n(answers on p. 231)\n1. Andre pulled the car into the street,\nand Beth began reading the directions.\n2. She enjoyed shopping for food, but she\nespecially enjoyed cooking.\n3 . Ic a nd ot h i sn o w ,o rIc a nd oi tl a t e r .\n4. Dan does not feel well, yet he wants to\ngo in to work.\n5. We missed our ffight, so we have to\nwait around the airport for the next\navailable one.\nMore practice\n(answers on the website)\n6. He does not like to change his mind, nor is he\nwilling to compromise.\n7. Y ou deserve your good fortune, for you have\nah e a r to fg o l d .\n8. The players are running onto the field, and\nthen they are beginning to practice.\n9. Stephanie likes to go to concerts, but she\nwill not see an opera.\n10. Y ou can pay with cash, or you can take out a\nloan.\n210</p>\n<p>Test yourself 47.2\nDecide if each sentence below is a simple sentence or a compound sentence. Remember that a\nsimple sentence contains just one sentence (clause) while a compound sentence contains at least\ntwo sentences joined by a coordinating conjunction.\nSample:W allace stared at him in the grocery store. simple\nGetting started\n(answers on p. 231)\n1. He can't blame her for the problem. ...............................................................\n2. Beth left the library, and she headed straight home. ....................................................... ..........\n3. He was watching her, but she was pretending not to notice. ...............................................................\n4. W e like him a lot. ...............................................................\n5. The coach wants to win, but he will be happy with a tie. ...............................................................\nMore practice (answers on the website)\n6. It will be a sunny day. ................................................................\n7. Jeremy likes his wife's new dress. ................................................................\n8. I will have a bowl of soup, but I don't want salad. ...............................................................\n9. Sam called me at noon. ...............................................................\n10. He will be going to Penn State, or he'll study at Temple University. ...............................................................\nA compound sentence can contain more than two sentences:\n2. Nora was Zach' s stepmother but she treated him like her other children and he\ntrusted her completely.\nHere, the three sentences that make up this sentence are: (1) Nora was Zach's step-\nmother\n;( 2 )\nshe treated him like her other children\n;( 3 )\nhe trusted her completely\n.S ot h e\nsentence\nThere was a glass vase on the table and Jane picked it up\ncontains two sentences,\nor clauses. The sentence\nNora was Zach's stepmother but she treated him like her other\nchildren and he trusted her completely\ncontains three sentences, or clauses. In fact, a\ncompound sentence can contain any number of sentences, though we usually limit\nourselves to just a few:\n3. He turned his head away and he pretended to ignore her but he continued\nto listen to her and in fact he hung on her every word. (4 sentences or clauses)\nKeep in mind that you can't tell if a sentence is simple or compound by how long it is; you\nn e e dt os e ei fi tc ontainso n eo rm o r et h a no n ec ompletes entencew i t h i ni t .F o re x a m p l e  …</p>\n<p>Test yourself 47.3\nEach sentence below is either a simple or compound sentence. Identify the number of\nclauses in each sentence. If there is more than one clause in the sentence, underline each\nclause.\nSample: The bear watched his movements closely. 1\nGetting started\n(answers on p. 231)\n1. Vicki was always looking at herself in the mirror, but MaryAnn\nwas extremely self-confident, and she never gave herself a second glance. ...................\n2. Her father was devoted to her. ...................\n3. Our firm' s CEO will be ffying to Chicago next week, but he'll be returning\nthe same day. ...................\n4. The lady in the elegant blue dress entered the well-lit room with her perky little\ndog in her arms. ...................\n5. Our boat was hit with strong winds, and we had to return to our cabins. ...................\nMore practice (answers on the website)\n6. We don't have much time left in the zoo, but we should visit the bird cage, and\nwe must see the monkeys, or we should at least feed the goats in the petting area,\nbut I definitely want to take a look at the elephants. ...................\n7. W e can catch a movie, or we can visit a museum, but we won't be seeing a\nBroadway show. ...................\n8. Many people walk in the woods in autumn. ...................\n9. The economy is getting worse, and many people are worried about their jobs. ...................\n10. My car is getting old, and it' s pretty banged up, but I hope to get another\nyear out of it. ...................\nKeep in mind that a compound phrase ( Lessons 43 and 44) is not the same thing as a\ncompound sentence. For example, the following sentence has a compound noun phrase\n(underlined):\n5. The teacher graded the students'exams and their papers.\nW e've certainly got a coordinating conjunction,\nand\n,i ns entence5 .H o w e v e r ,t h eq uestion\nis, what is the\nand\njoining? If we look at what' s on each side of the\nand\n,w efi n dt h ef o l l o -\nwing:\nThe teacher graded the students' exams\n, which is a sentence, and\ntheir papers\n;\ntheir\npaper\ns is not a sentence by itself. In this case, the conjunction\nand\nis joining two noun\nphrases:\nthe students' exams\nand\ntheir papers\n. It' s not joining two complete sentences, and\nso the sentence is not a compound sentence but is a simple sentence.\nTest yourself 47.4\nDecide if each sentence below is a simple or compound sentence. Remember that a compound\nsentence contains a complete sentence on either side of the conjunction.\n212\nUNIT 16: COMBINING SENTENCES</p>\n<p>Sample: Kyle turned around and stared at the screen. simple\nGetting started\n(answers on p. 231)\n1. It was a scene of joy but one thing spoiled the moment. ...............................................\n2. The boxer fell to his knees but he managed to get back up. ...............................................\n3. The designer and his assistants quickly brought order to the chaos. ...............................................\n4. Matt was driving to NewY ork with his kids and his neighbor' s son. ...............................................\n5. I like to drink codiee or tea after dinner. ...............................................\nMore practice (answers on the website)\n6. The weather is already getting chilly, but I am not ready for winter just yet. .................................................\n7. His speech should be brief and to the point. ...............................................\n8. Y ou must get ready immediately or I'll leave without you. ...............................................\n9. The ffight attendant odiered me beef or chicken for the entr /C19 ee. ...............................................\n10. She likes classical music but rarely goes to concerts. ...............................................</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 48,
    "title": "Complex sentences",
    "html": "<p>In  t h e  l  a s t  l e  sson  ,  w e  t  al  k e  d  a bout  c  o m p  ou  n d  s  e  n t e  n c  e  s  s  u ch  a  s  :\n1. Beth said hello to her mother' s friend and then she walked outside.\nEach of the sentences (clauses) that is part of the compound sentence plays an equal role\nin the sentence; one clause is not superior to or more important than the other, in terms\nof the structure of the sentence.\nNow let' s look at some other sentences:\n2. Harry was only fifteen when his mother sent him away to school.\n3. Mr. Edwards looked her straight in the eye although he wasn't really\nsincere.\n4. I won't tell you the answer unless you agree to help.\nSentences 2^4 also each contain two sentences, or clauses, which are combined to\nmake a larger sentence. However, one of these sentences is more important than the\nother. The more important sentence is called the\nmain clause\n,o r\nindependent clause</p>\n<p>;\nthe less important sentence, the one that is a subpart of the main clause, is called the\ndependent clause or subordinate clause (see\nLesson 19\n). Each clause, whether it's a\nmain clause or subordinate clause, has its own subject and verb phrase. Sentences\nthat contain a main clause and at least one dependent clause are called\ncomplex\nsentences\n.\nThe main clause of each of the following sentences is in bold; the dependent clause is\nunderlined:\n5.\nHarry was only fifteen when his mother sent him away to school.\n6.\nMr. Edwards looked her straight in the eye although he wasn't really\nsincere.\n7.\nI won't tell you the answerunless you agree to help.\nQuick tip 48.1\nA complex sentence consists of at least two sentences (clauses): a main clause and a\ndependent clause. The dependent clause is a subpart of the main clause and adds\ninformation to it. Example, with the dependent clause underlined:\nSally visited her before\nshe moved .\nRecall that, in a compound sentence, the clauses are joined by a coordinating con-\njunction such as\nand\n,\nor\n,a n d\nbut\n. In a complex sentence, the dependent clause is joined\nto the rest of the sentence by a subordinating conjunction. (We introduced subordinat-\ning conjunctions in\nLesson 19\n; you may want to check back there to refresh your mem-\nory.) The common subordinating conjunctions of English are repeated here for\nreference.\n214</p>\n<p>after even though than whenever\nalthough how\nthat where\nas\nif\nthough wherever\nas if\nin order that till whether\nas though once\nunless while\nbecause rather than until which\nbefore since\nwhat who\neven if so (that) when why\nQuick tip 48.2\nA dependent clause is joined to another clause by a subordinating conjunction such as\nalthough\n,\nif\n,\nwhere\n.\nQuick tip 48.3\nThe easiest way to identify a dependent clause is to look for a subordinating conjunction\nand see if it's followed by a sentence. If it is, then the subordinating conjunction plus the\nsentence directly following it is a dependent clause.\nTest yourself 48.1\nFor each complex sentence below, underline the dependent clause. Remember to look for the\nsubordinating conjunction, which is the first word of the dependent clause.\nSample: Helen stared in dismay at the ffoor after she opened the dining room door.\nGetting started\n(answers on p. 232)\n1. His father is returning to London because\nthe furniture is arriving.\n2. Selma smiled at him although she had never\nfelt less like smiling.\n3. He felt a great adiection for his guardian until\nhe discovered the truth.\n4. I am going to solve this crossword puzzle\neven if it takes me all day.\n5. James accepted the job before he checked\nwith his wife.\nMore practice\n(answers on the website)\n6. Sammy passed the final exam even though\nhe had not studied hard.\n7. You are behaving as if you were the\nboss.\n8. I will not speak to you unless you tell me the\ntruth.\n9. New Orleans has not been the same since it\nwas devastated by a hurricane.\n10. Al tries to speak French when he is in\nMontreal.\nIn the complex sentences we've looked at so far, the dependent clause follows the main\nclause. But sometimes the dependent clause comes before the main clause. (Again, see\nLesson 19\n.) In these next examples of complex sentences, the dependent clauses are\nunderlined:</p>\n<p>8. After he uttered her name, an awful silence fell on the room.\n9. While we hurried to the restaurant, the rain continued to pour.\n10. Even though she was a diflcult woman, they had a good marriage.\nTest yourself 48.2\nFor each complex sentence below, underline the dependent clause. Remember to look for the\nsubordinating conjunction, which is the first word of the dependent clause. The dependent clause\nwill either be before or after the main clause.\nSample: I fy o uc ontinueo nt h i sh i g h w a y ,y o u ' l le n du pi nt h ew r o n gp l a c e .\nGetting started\n(answers on p. 232)\n1. When Elizabeth spoke, Ben listened attentively.\n2. Before you blame him, think about your own\nresponsibility.\n3. Y ou should pay for automobile insurance\neven if your car is old.\n4. Unless the train arrives soon, we'll miss our\nappointment.\n5. The district attorney won't rest till he finds\nthe perpetrator.\nMore practice\n(answers on the website)\n6. While you were away, important changes\ntook place.\n7. As you know, UCLAwon the Pac-10\nchampionship.\n8. If you really want it, I will loan you my\nlaptop.\n9. After he was released from the hospital, he\nh a dt or e s tf o raw e e k .\n10. She is going to succeed wherever she ends up.\nTest yourself 48.3\nFor each complex sentence below, underline the subject of the dependent clause (not of the main\nclause).\nSample: I had an interesting conversation with him while we were walking home.\nGetting started\n(answers on p. 232)\n1. Even though the village supported the\nemperor, it still paid numerous taxes.\n2. I like to sit on the balcony when the\nweather is nice.\n3. Georgedid itbecauseherecognizedthewoman.\n4. Once I have made up my mind, I usually do\nnot change it.\n5 . Someoner a n gt h ed oorbellw h i l ew ew e r e\nhaving lunch.\nMore practice\n(answers on the website)\n6. Zachary was behaving as though he knew\nthe answer.\n7. She was not sure whether she should travel\nto that country.\n8 . T h eb u sa r r i v e da tt h es t a t i o nb e f o r eIc o u l d\nfinish the newspaper.\n9. They started learning Chinese so that they\nc o u l du nderstandt h e i ri n - l a w sb e t t e r .\n10. After you left, I began washing the dishes.\nA complex sentence contains only one main clause, but it can contain more than one\ndependent clause. In the following examples, there is a main clause and two dependent\nclauses . T h em a i nc l a u s ei sa g a i ni nb o l d ;t h ed ependentc l a u s e sa r eu nderlined .N o t i c e\nthat we sometimes have ffexibility in terms of the placement of each of the clauses.\nUNIT 16: COMBINING SENTENCES\n216</p>\n<p>11a. Harry was only fifteen when his mother sent him away to school, although he\nlooked much older.\n11b. When his mother sent him away to school, Harry was only fifteen , although\nhe looked much older.\n11c. Although he looked much older when his mother sent him away to school,\nHarry was only fifteen</p>\n<p>.\n12a.\nI won't tell you the answer unless you agree to help, because this issue is\nconfidential.\n12b. Unless you agree to help, I won't tell you the answer , because this issue is\nconfidential.\n12c. Because this issue is confidential, unless you agree to help, I won't tell you the\nanswer\n.\nTest yourself 48.4\nFor each sentence below, decide if it is a simple sentence or a complex sentence. Some complex\nsentencesw i l lh a v em o r et h a no n ed ependentc l a u s e .\nS a m p l e :T h o s et w ob rothersa l w a y sd r e s sa l i k e . simple\nGetting started\n(answers on p. 232)\n1. The two horses thrived on the ranch because they received excellent care. ..................................\n2. Another little girl will be arriving at the school before noon today. ..................................\n3. The old housekeeper welcomed her warmly when her mother was present. ...................................\n4. The general returned home with his family. ....................................\n5. As we approached our destination, we became rather emotional. ....................................\nMore practice (answers on the website)\n6 . W h e nt h ea c t o re n t e r e dt h es t a g e ,t h ea udiencec l a p p e de nthusiastically .....................................\n7 . I fy o up r o m i s en o tt ot e l la n y o n e ,Iw i l ll e ty o ui no nas e c r e t ,\neven though I shouldn't. ....................................\n8. We are not going to the beach until it stops raining. ....................................\n9. Unless you stop complaining, we are turning right around. ....................................\n10. He likes foreign movies a lot. ....................................\nTest yourself 48.5\nFor each sentence below, indicate if it is a simple sentence, a compound sentence, or a complex\nsentence. Be sure to determine the kind of conjunction (coordinating or subordinating) in order to\nhelp you decide.\nS a m p l e :W ew e r ea l w a y sp o l i t et oo n ea n o t h e ra lthoughw ew e r en e v e rc l o s e .complex\nGetting started\n(answers on p. 232)\n1. She pursued her goals relentlessly but she didn' …</p>\n<p>4. Jason and Ilene had to renew their passports before they could\nleave the country. .............................................................................\n5. Baby boomers were born before this century. .............................................................................\nMore practice (answers on the website)\n6. He insisted, but I still did not believe him. .............................................................................\n7. Y ou can watchTV all night long, or you can study for your exam. .............................................................................\n8. While Mr. Kagan was at work, the air conditioning stopped\nworking at his house. .............................................................................\n9. I have known him since we moved to this town. .............................................................................\n1 0 . A s h l e ya n dB r i a nw a n t e dt os h o pa tt h a ts t o r e . .............................................................................\nComplex sentences can have didierent kinds of dependent clauses. The ones we've\ntalked about so far are called\nadverbial clauses\nbecause, like adverbs, they typically tell\nus more about a verb, adjective, or another adverb. For example, in the sentence,\nThings\nimproved after Mr . Eliot arrived , the underlined dependent clause is telling us something\nabout the time of the action.\nIn other complex sentences, dependent clauses can be used as noun phrases.Take a look\nat the following pair of sentences:\n13a. That statement is silly.\n13b. What Mark just said is silly.\nIn sentence 13a,\nthat statement\nis a noun phrase. In sentence 13b,\nwhat Mark just said\nis a\ndependent clause which is functioning as a noun phrase of the main sentence. When a\ndependent clause is functioning as a noun phrase, it' s called a\nnoun clause\n.H e r ea r e\nsome more sentence pairs in which the second sentence of the pair has a dependent clause\n(underlined) acting as a noun phrase.\n14a. I know the truth. simple sentence\n14b. I know that you're right. complex sentence\n15a. It remains unknown. simple sentence\n15b. Why they left town remains unknown. complex sentence\nNotice that noun clauses look just like other dependent clauses: they begin with a subor-\ndinating conjunction and contain both a subject and a verb phrase. However, when a\nsentence has a noun clause, the rest of the sentence cannot always stand alone; it needs\nt h en o u nc l a u s et ob ec omplete .F o re x a m p l e ,i ns entence1 5 b ,\nremains unknown\nis not a\ncomplete sentence.\nTest yourself 48.6\nUnderline the dependent clause in each of the complex sentences below. It will be either an\nadverbial clause or a noun clause.\nSample: Whatever you do is acceptable.\nUNIT 16: COMBINING SENTENCES\n218</p>\n<p>Getting started (answers on p. 232)\n1. I'll stay with Jeanette until Peter comes\nhome.\n2. That my candidate will win is\nobvious.\n3. Although Mrs. Craft was tired, she insisted\non making us dinner.\n4 . W ew e r eq u i t ec o n fi d e n tt h a tw eh a dm a d et h e\nright decision.\n5. They want to find out why the waitress was so\nrude to them.\n More practice (answers on the website)\n6. He did not know which highway led to the\nCanadian border.\n7. The assistant manager knew that she\nwas not going to be promoted this\ntime.\n8. Wherever we travel we like to visit\nmuseums.\n9. I can speak Italian better than you can speak\nFrench.\n1 0 . W ew e r et i r e do fw a i t i n g ,s ow el e f t .\nWe've been telling you to look for the subordinating conjunction to help you find the\ndependent clause. But what about these next sentences (with the dependent clauses\nunderlined)?\n16a. I know that you're right.\n16b. I know you're right.\n17a. Y ou believed that the defendant was innocent.\n17b. Y ou believed the defendant was innocent.\nAs you can see, we can delete the subordinating conjunction\nthat\nin a noun clause\nwhen the dependent clause follows the main clause. However, if the dependent\nclause comes before the main clause, the subordinating conjunction\nthat\ncannot be\ndeleted:\n18a. That her daughter is talented has been obvious for years.\n18b. * Her daughter is talented has been obvious for years.\n19a. That the defendant was innocent became clear during the trial.\n19b. * The defendant was innocent became clear during the trial.\nQuick tip 48.4\nIn a noun clause , the subordinating conjunction that can be deleted following a main\nclause. Example:\nI think (that) it's going to rain\n.\nSo when you don't see a subordinating conjunction in a sentence, but the sentence has\nmore than one subject and verb phrase, ask yourself if you can insert\nthat\nsomewhere. If\nso, then you'll know you have a dependent clause.\nTest yourself 48.7\nUnderline the dependent clauses in each of the sentences below. In some cases, the conjunction that\nwill have been deleted.\nSample: They knew she would escape.</p>\n<p>Getting started (answers on p. 232)\n1. They don't believe that her partner will keep\nhis word.\n2. Mrs.W ebb was sure her pie would win the\nbaking contest.\n3. That Andy is the best in the class doesn't\nsurprise me.\n4. We heard you were accepted to Georgetown\nLaw School.\n5. It is true that I am going to become a partner\nin this firm.\n More practice (answers on the website)\n6. This man does not think you are a good\nwriter.\n7 . J a c k i ea l w a y st h o u g h tt h a to n ed a ys h e\nwould be a leading actress.\n8. Y ou knew that I would be throwing a\nsurprise party for you.\n9. The landlord assumed that all his tenants\nwould be paying rent on time.\n10. The little girl pretended she was dancing\nwith Mickey Mouse.\nTest yourself 48.8\nDecide if each sentence is simple, compound, or complex. Keep in mind that sometimes the\nsubordinating conjunction\nthat\nmay have been deleted.\nSample: She told me I wasn't giving up yet. complex\nGetting started\n(answers on p. 233)\n1. My mother changed the subject, but it was too late. .......................................................\n2. He proposed to her when she graduated from college. .......................................................\n3. A man from the sawmill was overseeing the project. .......................................................\n4. I want a piece of apple pie. .......................................................\n5. I had been hoping you could come to the game. .......................................................\nMore practice (answers on the website)\n6. If you take the kids to the movies, I can get some rest. .......................................................\n7. The president said we should all conserve fuel. .......................................................\n8. Y ou can do the food shopping first, or you can do your other errands. .......................................................\n9. Justin generally eats his soup with bread and butter. .......................................................\n10. I know the woman in the blue dress. .......................................................\nThere's another very common type of subordinating clause, called a relative clause .\nHere are some examples:\n20. I'll tell my husband, who will be home soon.\n21. The person who knows her best is Richard.\n22. Miss Livingston had her money in the bank that failed.\nSince there' s quite a bit to say about relative clauses, we 've given them their own lesson,\nwhich is next.\nUNIT 16: COMBINING SENTENCES\n220</p>"
   },
   {
    "n": 49,
    "title": "Sentences with relative clauses",
    "html": "<p>A well-known children' s story starts with the line, This is the house that Jack built .I t\ncontinues,\nThis is the malt that lay in the house that Jack built.This is the rat that ate the malt that lay in the\nhouse that Jack built\n.The story continues until it ends with the following sentence:\nThis is the\nfarmer sowing his corn, that kept the cock that crowed in the morn, that waked the priest all shaven\nand shorn, that married the man all tattered and torn, that kissed the maiden all forlorn, that\nmilked the cow with the crumpled horn, that tossed the dog, that worried the cat, that killed the rat,\nthat ate the malt that lay in the house that Jack built\n.\n(www.amherst.edu/</p>\n<p>/C24\nrjyanco94/literature/mothergoose/rhymes/\nthisisthehousethatjackbuilt.html, retrieved November 9, 2008.)\nThis story gives us a good demonstration of complex sentences with relative clauses, which\nare a kind of dependent clause (see\nLesson 48\n). For example, in the sentence\nThis is the house\nthat Jack built\n, the main clause is\nThis is the house\n, and the dependent, relative clause is\nthat\nJack built\n.The relative clause acts as an adjective: it modifies the noun phrase\nthe house\n, tell-\ning us more about it.This is why relative clauses are also referred to as\nadjective clauses\n.\nQuick tip 49.1\nA relative clause ( adjective clause ) is a kind of dependent clause; it provides additional\ninformation about a noun phrase in the main clause. Example (\nrelative clause\nunderlined):\nI brought the cookies that are on the plate .\nI ne a c hs entenceb e l o w ,t h er elativec l a u s ei su nderlined ,a n dt h en o u np h r a s ew h i c h\nthe relative clause is modifying is in bold.The main clause can stand on its own as a sen-\nt e n c ew i t h o u tt h er elativec l a u s e ;t h er elativec l a u s ej u s tp rovidesa dditionali n f o r m a -\ntion about the noun phrase it' s modifying and cannot stand alone. Like other clauses, a\nrelative clause has its own subject and verb phrase.\n1 . S h et ransferredt h ep l a t et o\nthe tray that she just washed.\n2. Blanche thought about\nthe man who was living in Italy at the time.\n3. He called\nthe company that usually supplies the pipes.\nTest yourself 49.1\nUnderline the relative clause in each of the sentences below.\nSample: Mr.Sanders was wearing a suit that he bought in Italy.\nGetting started\n(answers on p. 233)\n1. He paid no attention to the newspaper which\nwas next to him.\n2 . T h ep o l i c ea rrestedt h em a nw h o mt h e yh a d\nbeen looking for.\n3. Mrs. Peterson was reaching for the phone\nthat was nearest her chair.\n4. He might recognize the woman who is\nhosting the show.\n5. Clidi bought a present that was just perfect\nfor his girlfriend.\n221</p>\n<p>More practice (answers on the website)\n6 . Ia mr e n t i n ga na partmentt h a th a st w o\nbedrooms.\n7. She met someone whose daughter\nhad graduated from Duke University.\n8. Are you going to eat the desert that I baked\nespecially for you?\n9. He came to the party with a friend whom\nIh a v e n ' ts e e ni na g e s .\n10. Y ou should pay for your vacation\nwith the money that I gave you.\nT h er elativec l a u s ed o e s n ' tn ecessarilyf o l l o wt h em a i ns entence( c l a u s e ) ;i tc a na l s ob e\nwithin the main sentence. In the following sentences, the relative clause is underlined\nand the main sentence (clause) is in bold. In sentences 4 and 5, the relative clause follows\nthe main clause; in sentences 6 and 7 , it' s inside the main clause.\n4.\nI've brought the horsewhich has been specially trained.\n5.\nWe tippedthewaiterwho had served us so well.\n6.\nThe man who was living in Italy at the time knew all the facts .\n7.\nThe company that usually supplies the pipes has gone out of business .\nA g a i n ,i ft h er elativec l a u s e( t h eu nderlinedp a r t )i sr e m o v e d ,t h em a i nc l a u s ec a ns till\nstando ni t so w na sas entence .\nTest yourself 49.2\nUnderlinet h er elativec l a u s ei ne a c ho ft h es entencesb e l o w . T h er elativec l a u s em a yb ea nywhere\nin the sentence.\nSample: A business that manufactures engines can be diflcult to run.\nGetting started\n(answers on p. 233)\n1 . S h eg a v eh i mas m i l et h a tl i tu ph e rf a c e .\n2. The professor who gives easy tests is on\nsabbatical this semester.\n3. The approaches which are most likely to\nsucceed are too complicated.\n4. The hotel which is near the shore doesn't\nopen until April.\n5. Are you satisfied with the computer that\nyour parents bought for you?\nMore practice\n(answers on the website)\n6. The players who just entered the stadium\nare wearing blue jerseys.\n7. Those strawberries that you brought are\nabsolutely delicious.\n8. I will vote for the candidate whose values\nare close to mine.\n9. The gymthat shebelongs tois only a mile away.\n10. He is still madly in love with the woman\nwhom he married 15 years ago.\nW e've seen (in\nLesson 48\n) that other dependent clauses are linked to the rest of the sen-\ntence by subordinating conjunctions. The same is true of relative clauses. Those subordi-\nn …</p>\n<p>Getting started (answers on p. 233)\n1. She turned on the broadcast which dealt with\nthe scandal that had recently been in the\nnews.\n2. Buck stood behind the counter which\ndominated his small restaurant.\n3. The photographer who took the picture\nwhich appeared in the paper that was most\nwidely read won a Pulitzer Prize.\n4. I can't find the message that you sent me.\n5. No one who breaks the law should get\naway with it.\n More practice (answers on the website)\n6. The cruise that we booked 6 months ago\nthrough the agent whom you recommended\nis leaving next week.\n7. The furnace that heats the house which we\npurchased with the cash that we won in the\nlottery that we played 5 years ago needs to\nbe replaced.\n8. Did you ever compute the number of days\nthat you have spent on the novel that you are\nwriting?\n9. Friends who keeps their word are the kinds\nof friends that I like.\n10. The parking garage which is on the top ffoor\nof the building that is on the corner of the\nintersection is almost always full.\nY ou may be wondering why relative pronouns are called pronouns.Y ou know that pro-\nnouns replace noun phrases in a sentence. As we discussed in\nLesson 26\n,a l lo ft h er elative\npronouns except\nwhose\nd ot h es a m et h i n g .\nQuick tip 49.3\nA relative pronoun connects the relative clause to the rest of the sentence. All of the\nrelative pronouns (except\nwhose</p>\n<p>) also replace a noun phrase in the\nrelative clause\n.\n(\nWhose\nreplaces a determiner.)\nLet' s review how Quick tip 49.3 works in the following sentence, whose relative clause is\nunderlined:\n12. Blanche thought about the man who was living in Italy.\nWhat noun phrase is the relative pronoun\nwho\nreplacing? The\nwho\nrefers to the noun\nphrase\nthe man\n.\nHere's another example:\n13. He called the company that usually supplied the pipes.\nIn this case, what does the relative pronoun\nthat\nreplace? It replaces the noun phrase\nthe\ncompany\n.\nTest yourself 49.5\nFor each sentence below, underline the relative clause and put a squiggly line under the main clause.\nSample: Natalie usually wears clothes that look ffattering on her.\nUNIT 16: COMBINING SENTENCES\n224</p>\n<p>Getting started (answers on p. 233)\n1. I am meeting Mr. Arnold at the museum that\nhe supports.\n2. The label which contains the warning is not\nvery clear.\n3. The robber opened the case which contained\nthe most cash.\n4. The policy that the president is\nimplementing should be successful.\n5. I contacted the young man whose wallet\nIf o u n do nt h es u b w a y .\n More practice (answers on the website)\n6. Shirley is not satisfied with the interest that\nshe is getting in her bank account.\n7. Economists who can predict the duration of\nrecessions are rare.\n8. Doctors who overcharge patients should be\nprosecuted.\n9. I was impressed with the author who gave a\nlecture at the library yesterday.\n10. The salesman who called was very\npersuasive.\nTest yourself 49.6\nUnderline the dependent clause in each of the sentences below. It will either be a relative clause, a\nnoun clause, or an adverbial clause.\nSample: The historian visited most of the sites that he wrote about.\nGetting started\n(answers on p. 234)\n1. The architect' s design includes a window\nthat faces the courtyard.\n2. She understood what you were trying to say.\n3. If you're hungry, this town has a fantastic\nGreek restaurant.\n4. It is obvious that we have to reevaluate our\nplan.\n5. The odier that I have given you is a\nfair one.\nMore practice\n(answers on the website)\n6. Her cousins need to know whether she'll be\ngoing to Boston this weekend.\n7. Even if you don't feel good, you should\ndefinitely attend the convention.\n8 . T h es trangerw h os a i dh e l l ot ou sw o r e\nelegant clothes.\n9. The salesman can't remember what he\npromised his customer.\n10. They watched TV when they got home.\nLet' s take a look at the following sentence:\n14. The man whom I interviewed was not very knowledgeable.\nAs we discussed above, the sentence contains a relative clause,\nwhom I interviewed\n,w h i c h\nbegins with the relative pronoun\nwhom\n.Will this sentence still be grammatical if the rela-\ntive pronoun,\nwhom\n,i sl e f to u t ?\n15. The man I interviewed was not very knowledgeable.\nIf you think this sentence sounds fine, you're absolutely right. Here are some more examples:\n16a. The permit that the builders applied for was denied.\n16b. The permit the builders applied for was denied.\n17a. The celebrity who Jack photographed left the theater early.\n17b. The celebrity Jack photographed left the theater early.\nY ou will notice that when the relative pronoun is omitted, as in sentences 15, 16b,\nand 17b, one noun phrase is directly followed by another noun phrase:\nthe man\n+\nI\nin</p>\n<p>sentence 15, the permit + the builders in sentence 16b, and the celebrity + Jack in sen-\ntence 17b. So if you see a sentence that has two noun phrases next to each other, check\nt os e ei ft h es entencew o u l ds t i l lb eg rammaticala n dm e a nt h es a m et h i n gi fy o up u ta\nrelative pronoun between the two noun phrases; this will help you identify relative\nclauses.\nQuick tip 49.4\nA relative pronoun may be omitted before a noun phrase. Example: The movie (that) I saw\nwas exciting\n.\nTest yourself 49.7\nUnderlinet h er elativec l a u s ei ne a c ho ft h es entencesb e l o w .I ns o m ec a s e s ,t h er elativep ronoun\nwill have been deleted.\nSample: The waiter set the table he had placed outside the restaurant.\nGetting started\n(answers on p. 234)\n1. The little square in the town we visited\ncontained benches.\n2 . O t h e rf a m o u sp e o p l ew i l lb ep erforminga t\nthe theater that my brother works at.\n3. The pilot who ffew the aircraft must have\nbeen well trained.\n4. My neighbor owns the horse which won this\nrace.\n5. The guest I invited is sleeping on\nthe sofa.\nMore practice\n(answers on the website)\n6. W e left a nice tip for the waiter who served\nour delicious dinner.\n7 . T h et e n n i sr a c k e tIb o u g h tf o ry o uw a sm a d e\nabroad.\n8. The author whose book I am reading will go\non a promotional tour.\n9. The thing I like best about Jill is her positive\nattitude.\n10. The woman who is running for mayor of this\ncity is well known.\nWhen we look at relative clauses more closely, we find that there are actually two types:\nrestrictive relative clauses\nand\nnonrestrictive relative clauses\n.C o m p a r et h ef o l l o w -\ning sentences; the relative clauses are underlined.\n18. Bridget likes doughnuts that have chocolate frosting.\n19. She likes Peter Bolton, w h oi sh e rs o n ' sp i a n ot e a c h e r .\nIn sentence 18, the relative clause\nthat have chocolate frosting\nis telling us exactly which\ndoughnuts Bridget really likes. The clause is telling us that Bridget doesn't necessarily\nlike all doughnuts; she specifically likes those that have chocolate frosting. This kind of\nrelative clause, which limits or restricts the noun phrase it' s modifying, is called a\nrestrictive relative clause\n.\nIn contrast, in sentence 19, the relative clause\nw h oi sh e rs o n ' sp i a n ot eacher\nis telling us\nsomething about Peter Bolton, but if we omit this relative clause, we still know who\nPeter is, although we don't know the extra information that he is her son' s piano teacher.\nThis type of relative clause is called a\nnonrestrictive relative clause\n.I t ' sa l w a y ss e p a r a -\nted from the main sentence by commas. (Y ou can think of it as being separated from the\nm a i nc l a u s eb yc o m m a sb e c a u s ei t ' sn o te ssential . )W h e nw es a yas entencew i t ha\nUNIT 16: COMBINING SENTENCES\n226</p>\n<p>nonrestrictive relative clause, we usually pause at the commas separating it from the\nmain sentence.\nHere are some more examples to help clarify the didierence between restrictive and\nnonrestrictive relative clauses:\n20. The employees who were upset came to the meeting.\n21. The employees, who were upset, came to the meeting.\nWhat' s the didierence in meaning between these two sentences? According to sentence 20,\nonly those employees who were upset came to the meeting. The other employees didn't\ncome to the meeting. That is, sentence 20 restricts the employees who came to the meeting\nto only those who were upset. Sentence 20 thus contains a restrictive relative clause.\nWhat we know from sentence 21 is that employees came to the meeting. In addition, we\nknow that those employees were upset. The clause provides additional information\nabout the employees but doesn't restrict, or limit, which employees came to the meeting.\nThere may be other employees who were also upset but who didn't come to the meeting.\nThis clause is a nonrestrictive relative clause.\nAgain, notice that in sentence 21 the relative clause is separated from the main clause\nby commas. Sentence 21is also said with pauses where the commas are.\nNote that one can always remove a relative clause, of either type, and still end up with a\ngrammatical sentence. However, if the restrictive relative clause is removed, some of the\ninformation needed to fully identify the noun phrase we're talking about is missing.\nQuick tip 49.5\nA restrictive relative clause limits the noun phrase which it is modifying; a nonrestrictive\nrelative clause does not. A nonrestrictive relative clause is separated from the main clause\nby pauses, and, when written, it is separated from the main clause by commas. Examples:\nThe dogs which were friendly were being trained as Seeing Eye dogs\n(restrictive).\nThe\ndogs, which were friendly, were being trained as Seeing Eye dogs\n(nonrestrictive).\nTest yourself 49.8\nDecide if each relative clause, underlined in the sentences below, is a restrictive or nonrestrictive\nrelative clause.\nSample: The laundry which had just been folded was on the count …</p>\n<p>9. The students who made the presentation did a great job. ............................................................................\n10. This road, which we have traveled many times, is treacherous. ............................................................................\nTest yourself 49.9\nUnderline the relative clause in each of the sentences below. Then decide if it is restrictive or\nnonrestrictive.\nSample: Rome, which is a lovely city, was her first destination. nonrestrictive\nGetting started\n(answers on p. 234)\n1. The Frenchman who is from L yons completed the project. ................................................\n2. The general, who knew nothing about the matter, nonetheless\nvoiced his opinion. ................................................\n3. A small disturbance, which was getting louder and louder,\nfinally attracted our attention. ................................................\n4. Jeremy, who was blushing profusely, asked Tatiana for some help. ................................................\n5. Jim wasn't the person she wanted to hire. ................................................\nMore practice (answers on the website)\n6. The young lady, whose hobby was stamp collecting, was charming. .......................... ........ ...........\n7. The man who is having a drink at the bar looks familiar. ................................................\n8. The taxi I called took me to the airport. ................................................\n9. Her report, which she prepared carefully, was well received. ................................................\n10. The children, who are playing with their new toys, are unusually quiet. ........................... ...................\nTo further enhance your understanding\nA relative clause can modify any noun phrase in a sentence, whether that noun phrase is\nfunctioning as a subject, direct object, indirect object, or object of a preposition. For\nexample, in sentence 25, the relative clause refers to the direct object of the main clause:\n25. My sister likes the house which has a large swimming pool.\nAnd in sentence 26, the relative clause refers to the indirect object of the main clause:\n26. My sister sold the house to a family that has three children.\nTo enhance your understanding\nProper names are not modiﬁed by restrictive relative clauses. Here is an example:\n22a. George, who is an architect, is a good friend of mine. (nonrestrictive)\n22b. *George who is an architect is a good friend of mine. (restrictive)\nSince the identity of a proper noun is already well deﬁned, it makes sense that restrictive\nrelative clauses do not modify proper nouns.\nNotice that if we want to be very speciﬁc about a proper name, to differentiate it from\nothers with the same name, then using a restrictive relative clause is entirely appropriate:\n23. The George who is an architect is a good friend of mine. (restrictive)\n24. The France that I am familiar with is a very lovely country. (restrictive)\nUNIT 16: COMBINING SENTENCES\n228</p>"
   }
  ],
  "tips": [
   {
    "code": "46.1",
    "text": "A clause is a free-standing sentence or a sentence within a sentence; a clause or sentence contains at least a subject and a main verb ."
   },
   {
    "code": "46.2",
    "text": "A sentence can contain one or more clauses . Here are some more examples of sentences containing only one clause: 4. That magazine looks interesting. 5. The oflcer followed the rules. 6. She greeted me at the door. Notice that each contains only one subject and one verb phrase."
   },
   {
    "code": "46.3",
    "text": "A sentence that contains only one clause, that is, one subject and one verb phrase, is called a simple sentence . Are the following simple sentences? 7. on the ffoor 8. the extremely tall boy 9. were reading newspapers on the train 207 None of these contains both a subject and a ver b phrase, and so these are not sentences at all; they're just phrases.Y ou may recognize sentence 7 as a preposition phrase, sentence 8 as a noun phrase, and sentence 9 as a verb phrase. (See Lessons 28 , 29 ,a n d3 0 . )"
   },
   {
    "code": "47.1",
    "text": "A sentence that is made up of two or more sentences ( clauses ) joined by a coordinating conjunction (most commonly and , or , and but ) is called a compound sentence ."
   },
   {
    "code": "48.1",
    "text": "A complex sentence consists of at least two sentences (clauses): a main clause and a dependent clause. The dependent clause is a subpart of the main clause and adds information to it. Example, with the dependent clause underlined: Sally visited her before she moved . Recall that, in a compound sentence, the clauses are joined by a coordinating con- junction such as and , or ,a n d but . In a complex sentence, the dependent clause is joined to the rest of the sentence by a subordinating conjunction. (We introduced subordinat- ing conjunctions in Lesson 19 ; you may want to check back there to refresh your mem- ory.) The common subordinating…"
   },
   {
    "code": "48.2",
    "text": "A dependent clause is joined to another clause by a subordinating conjunction such as although , if , where ."
   },
   {
    "code": "48.3",
    "text": "The easiest way to identify a dependent clause is to look for a subordinating conjunction and see if it's followed by a sentence. If it is, then the subordinating conjunction plus the sentence directly following it is a dependent clause."
   },
   {
    "code": "48.4",
    "text": "In a noun clause , the subordinating conjunction that can be deleted following a main clause. Example: I think (that) it's going to rain . So when you don't see a subordinating conjunction in a sentence, but the sentence has more than one subject and verb phrase, ask yourself if you can insert that somewhere. If so, then you'll know you have a dependent clause."
   },
   {
    "code": "49.1",
    "text": "A relative clause ( adjective clause ) is a kind of dependent clause; it provides additional information about a noun phrase in the main clause. Example ( relative clause underlined): I brought the cookies that are on the plate . I ne a c hs entenceb e l o w ,t h er elativec l a u s ei su nderlined ,a n dt h en o u np h r a s ew h i c h the relative clause is modifying is in bold.The main clause can stand on its own as a sen- t e n c ew i t h o u tt h er elativec l a u s e ;t h er elativec l a u s ej u s tp rovidesa dditionali n f o r m a - tion about the noun phrase it' s modifying and cannot stand alone. Like other clauses, a relative…"
   },
   {
    "code": "49.2",
    "text": "Relative clauses b e g i nw i t ho n eo ft h e relative pronouns : that , which , who , whom , whose ."
   },
   {
    "code": "49.3",
    "text": "A relative pronoun connects the relative clause to the rest of the sentence. All of the relative pronouns (except whose ) also replace a noun phrase in the relative clause . ( Whose replaces a determiner.) Let' s review how"
   },
   {
    "code": "49.3",
    "text": "works in the following sentence, whose relative clause is underlined: 12. Blanche thought about the man who was living in Italy. What noun phrase is the relative pronoun who replacing? The who refers to the noun phrase the man . Here's another example: 13. He called the company that usually supplied the pipes. In this case, what does the relative pronoun that replace? It replaces the noun phrase the company ."
   },
   {
    "code": "49.4",
    "text": "A relative pronoun may be omitted before a noun phrase. Example: The movie (that) I saw was exciting ."
   },
   {
    "code": "49.5",
    "text": "A restrictive relative clause limits the noun phrase which it is modifying; a nonrestrictive relative clause does not. A nonrestrictive relative clause is separated from the main clause by pauses, and, when written, it is separated from the main clause by commas. Examples: The dogs which were friendly were being trained as Seeing Eye dogs (restrictive). The dogs, which were friendly, were being trained as Seeing Eye dogs (nonrestrictive)."
   }
  ],
  "practice": [
   {
    "code": "45.1",
    "instruction": "1. I'm shocked! exclamation 2. Rose and Charles are getting married in that house. declarative 3. What a surprising announcement! exclamation 4. The weather was awful yesterday. declarative 5. W atch out for that car! imperative",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "45.2",
    "instruction": "1. He's not really crazy, is he? tag question 2. Which is yours? wh- question 3. Are you interested? yes/no question 4 . I st h ee videncea g a i n s th i mc ompelling ? yes/no question 5. We have seen this before, haven't we? tag question FOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE. 206",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "46.1",
    "instruction": "In each simple sentence below, underline the subject and put a squiggly line beneath the verb phrase.",
    "sample": "Sample: David listened to her response.",
    "items": [
     {
      "n": 2,
      "text": "I stayed in bed that day.",
      "answer": "I stayed in bed that day"
     },
     {
      "n": 3,
      "text": "Nobody moved.",
      "answer": "Nobody moved"
     },
     {
      "n": 4,
      "text": "My favorite hotel is on Park A venue.",
      "answer": "My favorite hotel is on Park Avenue"
     },
     {
      "n": 5,
      "text": "I overslept today.",
      "answer": "I overslept today"
     }
    ],
    "answers": {
     "1": "The committee presented its ideas to congress",
     "2": "I stayed in bed that day",
     "3": "Nobody moved",
     "4": "My favorite hotel is on Park Avenue",
     "5": "I overslept today"
    }
   },
   {
    "code": "46.2",
    "instruction": "Decide if each item below is a simple sentence or just a phrase.",
    "sample": "Sample: walking nearby phrase",
    "items": [
     {
      "n": 1,
      "text": "I have never eaten caviar.",
      "answer": "I have never eaten caviar. simple sentence"
     },
     {
      "n": 2,
      "text": "The department stores are having a sale this weekend.",
      "answer": "The department stores are having a sale this weekend. simple sentence"
     },
     {
      "n": 3,
      "text": "Expensive antique jewelry.",
      "answer": "Expensive antique jewelry. phrase"
     },
     {
      "n": 4,
      "text": "Our home on the ranch.",
      "answer": "Our home on the ranch. phrase"
     },
     {
      "n": 5,
      "text": "Fresh-cut ffowers on the table.",
      "answer": "Fresh-cut £owers on the table. phrase"
     }
    ],
    "answers": {
     "1": "I have never eaten caviar. simple sentence",
     "2": "The department stores are having a sale this weekend. simple sentence",
     "3": "Expensive antique jewelry. phrase",
     "4": "Our home on the ranch. phrase",
     "5": "Fresh-cut £owers on the table. phrase"
    }
   },
   {
    "code": "47.1",
    "instruction": "Each of the sentences below is a compound sentence consisting of two sentences (clauses). Underline each of the sentences which is in the compound sentence.",
    "sample": "Sample: I felt restless after breakfast and Iw andereda r o u n dt h eh o u s e .",
    "items": [
     {
      "n": 1,
      "text": "Andre pulled the car into the street, and Beth began reading the directions.",
      "answer": "Andre pulled the car into the street, and Beth began reading the directions"
     },
     {
      "n": 2,
      "text": "She enjoyed shopping for food, but she especially enjoyed cooking. 3 . Ic a nd ot h i sn o w ,o rIc a nd oi tl a t e r .",
      "answer": "She enjoyed shopping for food, but she especially enjoyed cooking"
     },
     {
      "n": 4,
      "text": "Dan does not feel well, yet he wants to go in to work.",
      "answer": "Dan does not feel well, yet he wants to go in to work"
     },
     {
      "n": 5,
      "text": "We missed our ffight, so we have to wait around the airport for the next available one.",
      "answer": "We missedour £ i g ht , s owe have to wait around the airport for the next available one"
     }
    ],
    "answers": {
     "1": "Andre pulled the car into the street, and Beth began reading the directions",
     "2": "She enjoyed shopping for food, but she especially enjoyed cooking",
     "3": "Ic a nd ot h i sn o w ,o rIc a nd oi tl a t e r",
     "4": "Dan does not feel well, yet he wants to go in to work",
     "5": "We missedour £ i g ht , s owe have to wait around the airport for the next available one"
    }
   },
   {
    "code": "47.2",
    "instruction": "Decide if each sentence below is a simple sentence or a compound sentence. Remember that a simple sentence contains just one sentence (clause) while a compound sentence contains at least two sentences joined by a coordinating conjunction.",
    "sample": "Sample:W allace stared at him in the grocery store. simple",
    "items": [
     {
      "n": 1,
      "text": "He can't blame her for the problem.",
      "answer": "He can’t blame her for the problem. simple"
     },
     {
      "n": 2,
      "text": "Beth left the library, and she headed straight home.",
      "answer": "Beth left the library, and she headed straight home. compound"
     },
     {
      "n": 3,
      "text": "He was watching her, but she was pretending not to notice.",
      "answer": "He was watching her, but she was pretending not to notice. compound"
     },
     {
      "n": 4,
      "text": "W e like him a lot.",
      "answer": "W e like him a lot. simple"
     },
     {
      "n": 5,
      "text": "The coach wants to win, but he will be happy with a tie.",
      "answer": "The coach wants to win, but he will be happy with a tie. compound"
     }
    ],
    "answers": {
     "1": "He can’t blame her for the problem. simple",
     "2": "Beth left the library, and she headed straight home. compound",
     "3": "He was watching her, but she was pretending not to notice. compound",
     "4": "W e like him a lot. simple",
     "5": "The coach wants to win, but he will be happy with a tie. compound"
    }
   },
   {
    "code": "47.3",
    "instruction": "Each sentence below is either a simple or compound sentence. Identify the number of clauses in each sentence. If there is more than one clause in the sentence, underline each clause.",
    "sample": "Sample: The bear watched his movements closely. 1",
    "items": [
     {
      "n": 1,
      "text": "Vicki was always looking at herself in the mirror, but MaryAnn was extremely self-confident, and she never gave herself a second glance.",
      "answer": "Vicki was always looking at herself in the mirror, but Mary Ann was extremely self-confident, and she never gave herself a second glance. 3"
     },
     {
      "n": 2,
      "text": "Her father was devoted to her.",
      "answer": "Her father was devoted to her. 1"
     },
     {
      "n": 3,
      "text": "Our firm' s CEO will be ffying to Chicago next week, but he'll be returning the same day.",
      "answer": "Our firm’ s CEO will be £ying to Chicago next week, but h e ’ l lb er eturningt h es a m ed a y .2"
     },
     {
      "n": 4,
      "text": "The lady in the elegant blue dress entered the well-lit room with her perky little dog in her arms.",
      "answer": "The lady in the elegant blue dress entered the well-lit room with her perky little dog in her arms. 1"
     },
     {
      "n": 5,
      "text": "Our boat was hit with strong winds, and we had to return to our cabins.",
      "answer": "Our boat was hit with strong winds, and we had to return to our cabins. 2"
     }
    ],
    "answers": {
     "1": "Vicki was always looking at herself in the mirror, but Mary Ann was extremely self-confident, and she never gave herself a second glance. 3",
     "2": "Her father was devoted to her. 1",
     "3": "Our firm’ s CEO will be £ying to Chicago next week, but h e ’ l lb er eturningt h es a m ed a y .2",
     "4": "The lady in the elegant blue dress entered the well-lit room with her perky little dog in her arms. 1",
     "5": "Our boat was hit with strong winds, and we had to return to our cabins. 2"
    }
   },
   {
    "code": "47.4",
    "instruction": "Decide if each sentence below is a simple or compound sentence. Remember that a compound sentence contains a complete sentence on either side of the conjunction. 212",
    "sample": "",
    "items": [],
    "answers": {
     "1": "It was a scene of joy but one thing spoiled the moment. compound",
     "2": "The boxer fell to his knees but he managed to get back up. compound 231",
     "3": "The designer and his assistants quickly brought order to the chaos. simple",
     "4": "Matt was driving to NewY ork with his kids and his neighbor’ s son. simple",
     "5": "I like to drink co¡ee or tea after dinner. simple"
    }
   },
   {
    "code": "48.1",
    "instruction": "For each complex sentence below, underline the dependent clause. Remember to look for the subordinating conjunction, which is the first word of the dependent clause.",
    "sample": "Sample: Helen stared in dismay at the ffoor after she opened the dining room door.",
    "items": [
     {
      "n": 1,
      "text": "His father is returning to London because the furniture is arriving.",
      "answer": "His father is returning to London because the furniture is arriving"
     },
     {
      "n": 2,
      "text": "Selma smiled at him although she had never felt less like smiling.",
      "answer": "Selma smiled at him although she had never felt less like smiling"
     },
     {
      "n": 3,
      "text": "He felt a great adiection for his guardian until he discovered the truth.",
      "answer": "He felt a great a¡ection for his guardian until he discovered the truth"
     },
     {
      "n": 4,
      "text": "I am going to solve this crossword puzzle even if it takes me all day.",
      "answer": "I am going to solve this crossword puzzle even if it takes me all day"
     },
     {
      "n": 5,
      "text": "James accepted the job before he checked with his wife.",
      "answer": "James accepted the job before he checked with his wife"
     }
    ],
    "answers": {
     "1": "His father is returning to London because the furniture is arriving",
     "2": "Selma smiled at him although she had never felt less like smiling",
     "3": "He felt a great a¡ection for his guardian until he discovered the truth",
     "4": "I am going to solve this crossword puzzle even if it takes me all day",
     "5": "James accepted the job before he checked with his wife"
    }
   },
   {
    "code": "48.2",
    "instruction": "For each complex sentence below, underline the dependent clause. Remember to look for the subordinating conjunction, which is the first word of the dependent clause. The dependent clause will either be before or after the main clause.",
    "sample": "Sample: I fy o uc ontinueo nt h i sh i g h w a y ,y o u ' l le n du pi nt h ew r o n gp l a c e .",
    "items": [
     {
      "n": 1,
      "text": "When Elizabeth spoke, Ben listened attentively.",
      "answer": "When Elizabeth spoke, Ben listened attentively"
     },
     {
      "n": 2,
      "text": "Before you blame him, think about your own responsibility.",
      "answer": "Before you blame him, think about your own responsibility"
     },
     {
      "n": 3,
      "text": "Y ou should pay for automobile insurance even if your car is old.",
      "answer": "You should pay for automobile insurance even if your car is old"
     },
     {
      "n": 4,
      "text": "Unless the train arrives soon, we'll miss our appointment.",
      "answer": "Unless the train arrives soon, we’ll miss our appointment"
     },
     {
      "n": 5,
      "text": "The district attorney won't rest till he finds the perpetrator.",
      "answer": "The district attorney won’t rest till he finds the perpetrator"
     }
    ],
    "answers": {
     "1": "When Elizabeth spoke, Ben listened attentively",
     "2": "Before you blame him, think about your own responsibility",
     "3": "You should pay for automobile insurance even if your car is old",
     "4": "Unless the train arrives soon, we’ll miss our appointment",
     "5": "The district attorney won’t rest till he finds the perpetrator"
    }
   },
   {
    "code": "48.3",
    "instruction": "For each complex sentence below, underline the subject of the dependent clause (not of the main clause).",
    "sample": "Sample: I had an interesting conversation with him while we were walking home.",
    "items": [
     {
      "n": 1,
      "text": "Even though the village supported the emperor, it still paid numerous taxes.",
      "answer": "Even though the village supported the emperor, it still paid numerous taxes"
     },
     {
      "n": 2,
      "text": "I like to sit on the balcony when the weather is nice.",
      "answer": "I like to sit on the balcony when the weather is nice"
     },
     {
      "n": 3,
      "text": "Georgedid itbecauseherecognizedthewoman.",
      "answer": "George did it because he recognized the woman"
     },
     {
      "n": 4,
      "text": "Once I have made up my mind, I usually do not change it. 5 . Someoner a n gt h ed oorbellw h i l ew ew e r e having lunch.",
      "answer": "Once I have made up my mind, I usually do not change it"
     }
    ],
    "answers": {
     "1": "Even though the village supported the emperor, it still paid numerous taxes",
     "2": "I like to sit on the balcony when the weather is nice",
     "3": "George did it because he recognized the woman",
     "4": "Once I have made up my mind, I usually do not change it",
     "5": "Someone rang the doorbell while we were having lunch"
    }
   },
   {
    "code": "48.4",
    "instruction": "For each sentence below, decide if it is a simple sentence or a complex sentence. Some complex sentencesw i l lh a v em o r et h a no n ed ependentc l a u s e . S a m p l e :T h o s et w ob rothersa l w a y sd r e s sa l i k e . simple",
    "sample": "",
    "items": [
     {
      "n": 1,
      "text": "The two horses thrived on the ranch because they received excellent care.",
      "answer": "The two horses thrived on the ranch because they received excellent care. complex 2 . Anotherl i t t l eg i r lw i l lb ea rrivinga tt h es c h o o lb e f o r en o o nt o d a y .simple"
     },
     {
      "n": 2,
      "text": "Another little girl will be arriving at the school before noon today.",
      "answer": ""
     },
     {
      "n": 3,
      "text": "The old housekeeper welcomed her warmly when her mother was present.",
      "answer": "The old housekeeper welcomed her warmly when her mother was present. complex"
     },
     {
      "n": 4,
      "text": "The general returned home with his family.",
      "answer": "The general returned home with his family. simple"
     },
     {
      "n": 5,
      "text": "As we approached our destination, we became rather emotional.",
      "answer": "As we approached our destination, we became rather emotional. complex"
     }
    ],
    "answers": {
     "1": "The two horses thrived on the ranch because they received excellent care. complex 2 . Anotherl i t t l eg i r lw i l lb ea rrivinga tt h es c h o o lb e f o r en o o nt o d a y .simple",
     "3": "The old housekeeper welcomed her warmly when her mother was present. complex",
     "4": "The general returned home with his family. simple",
     "5": "As we approached our destination, we became rather emotional. complex"
    }
   },
   {
    "code": "48.5",
    "instruction": "For each sentence below, indicate if it is a simple sentence, a compound sentence, or a complex sentence. Be sure to determine the kind of conjunction (coordinating or subordinating) in order to help you decide. S a m p l e :W ew e r ea l w a y sp o l i t et oo n ea n o t h e ra lthoughw ew e r en e v e rc l o s e .complex",
    "sample": "",
    "items": [
     {
      "n": 1,
      "text": "She pursued her goals relentlessly but she didn't always achieve them.",
      "answer": "She pursued her goals relentlessly but she didn’t always achieve them. compound"
     },
     {
      "n": 2,
      "text": "I have made numerous mistakes over the years.",
      "answer": "I have made numerous mistakes over the years. simple"
     },
     {
      "n": 3,
      "text": "I won't tell you unless you agree to help because I can't take the risk.",
      "answer": "I won’t tell you unless you agree to help because I can’t take the risk. complex"
     }
    ],
    "answers": {
     "1": "She pursued her goals relentlessly but she didn’t always achieve them. compound",
     "2": "I have made numerous mistakes over the years. simple",
     "3": "I won’t tell you unless you agree to help because I can’t take the risk. complex",
     "4": "Jason and Ilene had to renew their passports before they could leave the country. complex",
     "5": "Baby boomers were born before this century. simple"
    }
   },
   {
    "code": "48.6",
    "instruction": "Underline the dependent clause in each of the complex sentences below. It will be either an adverbial clause or a noun clause.",
    "sample": "Sample: Whatever you do is acceptable.",
    "items": [],
    "answers": {
     "1": "I’ll stay with Jeanette until Peter comes home",
     "2": "That my candidate will win is obvious",
     "3": "Although Mrs. Craft was tired, she insisted on making us dinner",
     "4": "W e were quite confident that we had made the right decision",
     "5": "They want to find out why the waitress was so rude to them"
    }
   },
   {
    "code": "48.7",
    "instruction": "Underline the dependent clauses in each of the sentences below. In some cases, the conjunction that will have been deleted.",
    "sample": "Sample: They knew she would escape.",
    "items": [],
    "answers": {
     "1": "They don’t believe that her partner will keep his word",
     "2": "Mrs.W ebb was sure her pie would win the baking contest. UNIT 16: COMBINING SENTENCES 232",
     "3": "That Andy is the best in the class doesn’t surprise me",
     "4": "W e heard you were accepted to Georgetown Law School",
     "5": "It is true that I am going to become a partner in this firm"
    }
   },
   {
    "code": "48.8",
    "instruction": "Decide if each sentence is simple, compound, or complex. Keep in mind that sometimes the subordinating conjunction that may have been deleted.",
    "sample": "Sample: She told me I wasn't giving up yet. complex",
    "items": [
     {
      "n": 1,
      "text": "My mother changed the subject, but it was too late.",
      "answer": "My mother changed the subject, but it was too late. compound"
     },
     {
      "n": 2,
      "text": "He proposed to her when she graduated from college.",
      "answer": "He proposed to her when she graduated from college. complex"
     },
     {
      "n": 3,
      "text": "A man from the sawmill was overseeing the project.",
      "answer": "A man from the sawmill was overseeing the project. simple"
     },
     {
      "n": 4,
      "text": "I want a piece of apple pie.",
      "answer": "I want a piece of apple pie. simple"
     },
     {
      "n": 5,
      "text": "I had been hoping you could come to the game.",
      "answer": "I had been hoping you could come to the game. complex"
     }
    ],
    "answers": {
     "1": "My mother changed the subject, but it was too late. compound",
     "2": "He proposed to her when she graduated from college. complex",
     "3": "A man from the sawmill was overseeing the project. simple",
     "4": "I want a piece of apple pie. simple",
     "5": "I had been hoping you could come to the game. complex"
    }
   },
   {
    "code": "49.1",
    "instruction": "Underline the relative clause in each of the sentences below.",
    "sample": "Sample: Mr.Sanders was wearing a suit that he bought in Italy.",
    "items": [
     {
      "n": 1,
      "text": "He paid no attention to the newspaper which was next to him. 2 . T h ep o l i c ea rrestedt h em a nw h o mt h e yh a d been looking for.",
      "answer": "He paid no attention to the newspaper which was next to him. 2 . T h ep o l i c ea rrestedt h em a nwhom they had been looking for"
     },
     {
      "n": 3,
      "text": "Mrs. Peterson was reaching for the phone that was nearest her chair.",
      "answer": "Mrs. Peterson was reaching for the phone that was nearest her chair"
     },
     {
      "n": 4,
      "text": "He might recognize the woman who is hosting the show.",
      "answer": "He might recognize the woman who is hosting the show"
     },
     {
      "n": 5,
      "text": "Clidi bought a present that was just perfect for his girlfriend. 221",
      "answer": "Cli¡ bought a present that was just perfect for his girlfriend"
     }
    ],
    "answers": {
     "1": "He paid no attention to the newspaper which was next to him. 2 . T h ep o l i c ea rrestedt h em a nwhom they had been looking for",
     "3": "Mrs. Peterson was reaching for the phone that was nearest her chair",
     "4": "He might recognize the woman who is hosting the show",
     "5": "Cli¡ bought a present that was just perfect for his girlfriend"
    }
   },
   {
    "code": "49.2",
    "instruction": "Underlinet h er elativec l a u s ei ne a c ho ft h es entencesb e l o w . T h er elativec l a u s em a yb ea nywhere in the sentence.",
    "sample": "Sample: A business that manufactures engines can be diflcult to run.",
    "items": [
     {
      "n": 2,
      "text": "The professor who gives easy tests is on sabbatical this semester.",
      "answer": "The professor who gives easy tests is on sabbatical this semester"
     },
     {
      "n": 3,
      "text": "The approaches which are most likely to succeed are too complicated.",
      "answer": "The approaches which are most likely to succeed are too complicated"
     },
     {
      "n": 4,
      "text": "The hotel which is near the shore doesn't open until April.",
      "answer": "The hotel which is near the shore doesn’t open until April"
     },
     {
      "n": 5,
      "text": "Are you satisfied with the computer that your parents bought for you?",
      "answer": "Are you satisfied with the computer that your parents bought for you?"
     }
    ],
    "answers": {
     "1": "She gave him a smile that lit up her face",
     "2": "The professor who gives easy tests is on sabbatical this semester",
     "3": "The approaches which are most likely to succeed are too complicated",
     "4": "The hotel which is near the shore doesn’t open until April",
     "5": "Are you satisfied with the computer that your parents bought for you?"
    }
   },
   {
    "code": "49.3",
    "instruction": "Each of the sentences below contains a relative clause. Underline the relative pronoun that begins t h er elativec l a u s e .",
    "sample": "Sample: The student whom I spoke to was confused.",
    "items": [
     {
      "n": 1,
      "text": "The hotel chain that Greg founded has since gone out of business.",
      "answer": "The hotel chain that Greg founded has since gone out of business"
     },
     {
      "n": 2,
      "text": "He phoned the woman who was writing the article.",
      "answer": "He phoned the woman who was writing the article"
     },
     {
      "n": 3,
      "text": "Jill resents the man whose father won the lottery.",
      "answer": "Jill resents the man whose father won the lottery"
     },
     {
      "n": 4,
      "text": "The highway which I take to work needs repair.",
      "answer": "The highway which I take to work needs repair"
     },
     {
      "n": 5,
      "text": "The TVshow that she likes best is on Sunday nights.",
      "answer": "The TVshow that she likes best is on Sunday nights"
     }
    ],
    "answers": {
     "1": "The hotel chain that Greg founded has since gone out of business",
     "2": "He phoned the woman who was writing the article",
     "3": "Jill resents the man whose father won the lottery",
     "4": "The highway which I take to work needs repair",
     "5": "The TVshow that she likes best is on Sunday nights"
    }
   },
   {
    "code": "49.4",
    "instruction": "Underline the relative clauses in each of the sentences below. A sentence may have more than one relative clause.",
    "sample": "Sample: The man whom he had rescued turned out to be the criminal w h o mt h ep o l i c ew e r e looking for.",
    "items": [],
    "answers": {
     "1": "She turned on the broadcast which dealt with the scandal that had recently been in the news",
     "2": "Buck stood behind the counter which dominated his small restaurant",
     "3": "The photographer who took the picture which appeared in the paper that was most widely read won a Pulitzer Prize",
     "4": "I can’t find the message that you sent me",
     "5": "No one who breaks the law should get away with it"
    }
   },
   {
    "code": "49.5",
    "instruction": "For each sentence below, underline the relative clause and put a squiggly line under the main clause.",
    "sample": "Sample: Natalie usually wears clothes that look ffattering on her.",
    "items": [],
    "answers": {
     "1": "I am meeting Mr. Arnold at the museum that he supports",
     "2": "The label which contains the warning is not very clear",
     "3": "The robber opened the case which contained the most cash",
     "4": "The policy that the president is implementing should be successful",
     "5": "I contacted the young man whose wallet I found on the subway"
    }
   },
   {
    "code": "49.6",
    "instruction": "Underline the dependent clause in each of the sentences below. It will either be a relative clause, a noun clause, or an adverbial clause.",
    "sample": "Sample: The historian visited most of the sites that he wrote about.",
    "items": [
     {
      "n": 1,
      "text": "The architect' s design includes a window that faces the courtyard.",
      "answer": "The architect’ s design includes a window that faces the courtyard"
     },
     {
      "n": 2,
      "text": "She understood what you were trying to say.",
      "answer": "She understood what you were trying to say"
     },
     {
      "n": 3,
      "text": "If you're hungry, this town has a fantastic Greek restaurant.",
      "answer": "If you’re hungry, this town has a fantastic Greek restaurant"
     },
     {
      "n": 4,
      "text": "It is obvious that we have to reevaluate our plan.",
      "answer": "It is obvious that we have to reevaluate our plan"
     },
     {
      "n": 5,
      "text": "The odier that I have given you is a fair one.",
      "answer": "The o¡er that I have given you is a fair one"
     }
    ],
    "answers": {
     "1": "The architect’ s design includes a window that faces the courtyard",
     "2": "She understood what you were trying to say",
     "3": "If you’re hungry, this town has a fantastic Greek restaurant",
     "4": "It is obvious that we have to reevaluate our plan",
     "5": "The o¡er that I have given you is a fair one"
    }
   },
   {
    "code": "49.7",
    "instruction": "Underlinet h er elativec l a u s ei ne a c ho ft h es entencesb e l o w .I ns o m ec a s e s ,t h er elativep ronoun will have been deleted.",
    "sample": "Sample: The waiter set the table he had placed outside the restaurant.",
    "items": [
     {
      "n": 1,
      "text": "The little square in the town we visited contained benches. 2 . O t h e rf a m o u sp e o p l ew i l lb ep erforminga t the theater that my brother works at.",
      "answer": "The little square in the town we visited contained benches. 2 . O t h e rf a m o u sp e o p l ew i l lb ep erforminga tt h et heaterthat my brother works at"
     },
     {
      "n": 3,
      "text": "The pilot who ffew the aircraft must have been well trained.",
      "answer": "The pilot w h o£ e wt h ea ircraftm u s th a v eb e e nw e l lt rained"
     },
     {
      "n": 4,
      "text": "My neighbor owns the horse which won this race.",
      "answer": "My neighbor owns the horse which won this race"
     },
     {
      "n": 5,
      "text": "The guest I invited is sleeping on the sofa.",
      "answer": "The guest I invited is sleeping on the sofa"
     }
    ],
    "answers": {
     "1": "The little square in the town we visited contained benches. 2 . O t h e rf a m o u sp e o p l ew i l lb ep erforminga tt h et heaterthat my brother works at",
     "3": "The pilot w h o£ e wt h ea ircraftm u s th a v eb e e nw e l lt rained",
     "4": "My neighbor owns the horse which won this race",
     "5": "The guest I invited is sleeping on the sofa"
    }
   },
   {
    "code": "49.8",
    "instruction": "Decide if each relative clause, underlined in the sentences below, is a restrictive or nonrestrictive relative clause.",
    "sample": "Sample: The laundry which had just been folded was on the counter. restrictive",
    "items": [
     {
      "n": 1,
      "text": "Mrs. Smith, who owns the house, was not interested in selling.",
      "answer": "Mrs. Smith, who owns the house, was not interested in selling. nonrestrictive"
     },
     {
      "n": 2,
      "text": "A huge truck, which someone had painted bright yellow, stood in the driveway.",
      "answer": "A huge truck, which someone had painted bright yellow, stood in the driveway. nonrestrictive"
     },
     {
      "n": 3,
      "text": "The children who had just come back from the class trip were restless.",
      "answer": "The children who had just come back from the class trip were restless. restrictive"
     },
     {
      "n": 4,
      "text": "The maid broke an antique lamp, which was very valuable.",
      "answer": "The maid broke an antique lamp, which was very valuable. nonrestrictive"
     },
     {
      "n": 5,
      "text": "The painting Ib r o u g h th o m ew i l lb ep e r f e c tf o rt h ed e n .",
      "answer": "The painting Ib roughth o m ew i l lb ep erfectf o rt h ed e n . restrictive"
     }
    ],
    "answers": {
     "1": "Mrs. Smith, who owns the house, was not interested in selling. nonrestrictive",
     "2": "A huge truck, which someone had painted bright yellow, stood in the driveway. nonrestrictive",
     "3": "The children who had just come back from the class trip were restless. restrictive",
     "4": "The maid broke an antique lamp, which was very valuable. nonrestrictive",
     "5": "The painting Ib roughth o m ew i l lb ep erfectf o rt h ed e n . restrictive"
    }
   },
   {
    "code": "49.9",
    "instruction": "Underline the relative clause in each of the sentences below. Then decide if it is restrictive or nonrestrictive.",
    "sample": "Sample: Rome, which is a lovely city, was her first destination. nonrestrictive",
    "items": [
     {
      "n": 1,
      "text": "The Frenchman who is from L yons completed the project.",
      "answer": "The Frenchman who is from Lyons completed the project. restrictive"
     },
     {
      "n": 2,
      "text": "The general, who knew nothing about the matter, nonetheless voiced his opinion.",
      "answer": "The general, who knew nothing about the matter, nonetheless voiced his opinion. nonrestrictive"
     },
     {
      "n": 3,
      "text": "A small disturbance, which was getting louder and louder, finally attracted our attention.",
      "answer": "A small disturbance, which was getting louder and louder, finally attracted our attention. nonrestrictive"
     },
     {
      "n": 4,
      "text": "Jeremy, who was blushing profusely, asked Tatiana for some help.",
      "answer": "Jeremy, who was blushing profusely, asked Tatiana for some help. nonrestrictive"
     },
     {
      "n": 5,
      "text": "Jim wasn't the person she wanted to hire.",
      "answer": "Jim wasn’t the person she wanted to hire. restrictive"
     }
    ],
    "answers": {
     "1": "The Frenchman who is from Lyons completed the project. restrictive",
     "2": "The general, who knew nothing about the matter, nonetheless voiced his opinion. nonrestrictive",
     "3": "A small disturbance, which was getting louder and louder, finally attracted our attention. nonrestrictive",
     "4": "Jeremy, who was blushing profusely, asked Tatiana for some help. nonrestrictive",
     "5": "Jim wasn’t the person she wanted to hire. restrictive"
    }
   }
  ],
  "exercises": [
   {
    "q": "I stayed in bed that day.",
    "type": "input",
    "answer": "I stayed in bed that day",
    "source": "46.1",
    "instruction": "In each simple sentence below, underline the subject and put a squiggly line beneath the verb phrase.",
    "explanation": "Respuesta del libro: I stayed in bed that day"
   },
   {
    "q": "Nobody moved.",
    "type": "input",
    "answer": "Nobody moved",
    "source": "46.1",
    "instruction": "In each simple sentence below, underline the subject and put a squiggly line beneath the verb phrase.",
    "explanation": "Respuesta del libro: Nobody moved"
   },
   {
    "q": "My favorite hotel is on Park A venue.",
    "type": "input",
    "answer": "My favorite hotel is on Park Avenue",
    "source": "46.1",
    "instruction": "In each simple sentence below, underline the subject and put a squiggly line beneath the verb phrase.",
    "explanation": "Respuesta del libro: My favorite hotel is on Park Avenue"
   },
   {
    "q": "I overslept today.",
    "type": "input",
    "answer": "I overslept today",
    "source": "46.1",
    "instruction": "In each simple sentence below, underline the subject and put a squiggly line beneath the verb phrase.",
    "explanation": "Respuesta del libro: I overslept today"
   },
   {
    "q": "I have never eaten caviar.",
    "type": "input",
    "answer": "I have never eaten caviar. simple sentence",
    "source": "46.2",
    "instruction": "Decide if each item below is a simple sentence or just a phrase.",
    "explanation": "Respuesta del libro: I have never eaten caviar. simple sentence"
   },
   {
    "q": "The department stores are having a sale this weekend.",
    "type": "input",
    "answer": "The department stores are having a sale this weekend. simple sentence",
    "source": "46.2",
    "instruction": "Decide if each item below is a simple sentence or just a phrase.",
    "explanation": "Respuesta del libro: The department stores are having a sale this weekend. simple sentence"
   },
   {
    "q": "Expensive antique jewelry.",
    "type": "input",
    "answer": "Expensive antique jewelry. phrase",
    "source": "46.2",
    "instruction": "Decide if each item below is a simple sentence or just a phrase.",
    "explanation": "Respuesta del libro: Expensive antique jewelry. phrase"
   },
   {
    "q": "Our home on the ranch.",
    "type": "input",
    "answer": "Our home on the ranch. phrase",
    "source": "46.2",
    "instruction": "Decide if each item below is a simple sentence or just a phrase.",
    "explanation": "Respuesta del libro: Our home on the ranch. phrase"
   },
   {
    "q": "Fresh-cut ffowers on the table.",
    "type": "input",
    "answer": "Fresh-cut £owers on the table. phrase",
    "source": "46.2",
    "instruction": "Decide if each item below is a simple sentence or just a phrase.",
    "explanation": "Respuesta del libro: Fresh-cut £owers on the table. phrase"
   },
   {
    "q": "Andre pulled the car into the street, and Beth began reading the directions.",
    "type": "input",
    "answer": "Andre pulled the car into the street, and Beth began reading the directions",
    "source": "47.1",
    "instruction": "Each of the sentences below is a compound sentence consisting of two sentences (clauses). Underline each of the sentences which is in the compound sentence.",
    "explanation": "Respuesta del libro: Andre pulled the car into the street, and Beth began reading the directions"
   },
   {
    "q": "She enjoyed shopping for food, but she especially enjoyed cooking. 3 . Ic a nd ot h i sn o w ,o rIc a nd oi tl a t e r .",
    "type": "input",
    "answer": "She enjoyed shopping for food, but she especially enjoyed cooking",
    "source": "47.1",
    "instruction": "Each of the sentences below is a compound sentence consisting of two sentences (clauses). Underline each of the sentences which is in the compound sentence.",
    "explanation": "Respuesta del libro: She enjoyed shopping for food, but she especially enjoyed cooking"
   },
   {
    "q": "Dan does not feel well, yet he wants to go in to work.",
    "type": "input",
    "answer": "Dan does not feel well, yet he wants to go in to work",
    "source": "47.1",
    "instruction": "Each of the sentences below is a compound sentence consisting of two sentences (clauses). Underline each of the sentences which is in the compound sentence.",
    "explanation": "Respuesta del libro: Dan does not feel well, yet he wants to go in to work"
   },
   {
    "q": "We missed our ffight, so we have to wait around the airport for the next available one.",
    "type": "input",
    "answer": "We missedour £ i g ht , s owe have to wait around the airport for the next available one",
    "source": "47.1",
    "instruction": "Each of the sentences below is a compound sentence consisting of two sentences (clauses). Underline each of the sentences which is in the compound sentence.",
    "explanation": "Respuesta del libro: We missedour £ i g ht , s owe have to wait around the airport for the next available one"
   },
   {
    "q": "He can't blame her for the problem.",
    "type": "input",
    "answer": "He can’t blame her for the problem. simple",
    "source": "47.2",
    "instruction": "Decide if each sentence below is a simple sentence or a compound sentence. Remember that a simple sentence contains just one sentence (clause) while a compound sentence contains at least two sentences joined by a coordinating conjunction.",
    "explanation": "Respuesta del libro: He can’t blame her for the problem. simple"
   },
   {
    "q": "Beth left the library, and she headed straight home.",
    "type": "input",
    "answer": "Beth left the library, and she headed straight home. compound",
    "source": "47.2",
    "instruction": "Decide if each sentence below is a simple sentence or a compound sentence. Remember that a simple sentence contains just one sentence (clause) while a compound sentence contains at least two sentences joined by a coordinating conjunction.",
    "explanation": "Respuesta del libro: Beth left the library, and she headed straight home. compound"
   },
   {
    "q": "He was watching her, but she was pretending not to notice.",
    "type": "input",
    "answer": "He was watching her, but she was pretending not to notice. compound",
    "source": "47.2",
    "instruction": "Decide if each sentence below is a simple sentence or a compound sentence. Remember that a simple sentence contains just one sentence (clause) while a compound sentence contains at least two sentences joined by a coordinating conjunction.",
    "explanation": "Respuesta del libro: He was watching her, but she was pretending not to notice. compound"
   },
   {
    "q": "W e like him a lot.",
    "type": "input",
    "answer": "W e like him a lot. simple",
    "source": "47.2",
    "instruction": "Decide if each sentence below is a simple sentence or a compound sentence. Remember that a simple sentence contains just one sentence (clause) while a compound sentence contains at least two sentences joined by a coordinating conjunction.",
    "explanation": "Respuesta del libro: W e like him a lot. simple"
   },
   {
    "q": "The coach wants to win, but he will be happy with a tie.",
    "type": "input",
    "answer": "The coach wants to win, but he will be happy with a tie. compound",
    "source": "47.2",
    "instruction": "Decide if each sentence below is a simple sentence or a compound sentence. Remember that a simple sentence contains just one sentence (clause) while a compound sentence contains at least two sentences joined by a coordinating conjunction.",
    "explanation": "Respuesta del libro: The coach wants to win, but he will be happy with a tie. compound"
   },
   {
    "q": "Vicki was always looking at herself in the mirror, but MaryAnn was extremely self-confident, and she never gave herself a second glance.",
    "type": "input",
    "answer": "Vicki was always looking at herself in the mirror, but Mary Ann was extremely self-confident, and she never gave herself a second glance. 3",
    "source": "47.3",
    "instruction": "Each sentence below is either a simple or compound sentence. Identify the number of clauses in each sentence. If there is more than one clause in the sentence, underline each clause.",
    "explanation": "Respuesta del libro: Vicki was always looking at herself in the mirror, but Mary Ann was extremely self-confident, and she never gave herself a second glance. 3"
   },
   {
    "q": "Her father was devoted to her.",
    "type": "input",
    "answer": "Her father was devoted to her. 1",
    "source": "47.3",
    "instruction": "Each sentence below is either a simple or compound sentence. Identify the number of clauses in each sentence. If there is more than one clause in the sentence, underline each clause.",
    "explanation": "Respuesta del libro: Her father was devoted to her. 1"
   },
   {
    "q": "Our firm' s CEO will be ffying to Chicago next week, but he'll be returning the same day.",
    "type": "input",
    "answer": "Our firm’ s CEO will be £ying to Chicago next week, but h e ’ l lb er eturningt h es a m ed a y .2",
    "source": "47.3",
    "instruction": "Each sentence below is either a simple or compound sentence. Identify the number of clauses in each sentence. If there is more than one clause in the sentence, underline each clause.",
    "explanation": "Respuesta del libro: Our firm’ s CEO will be £ying to Chicago next week, but h e ’ l lb er eturningt h es a m ed a y .2"
   },
   {
    "q": "The lady in the elegant blue dress entered the well-lit room with her perky little dog in her arms.",
    "type": "input",
    "answer": "The lady in the elegant blue dress entered the well-lit room with her perky little dog in her arms. 1",
    "source": "47.3",
    "instruction": "Each sentence below is either a simple or compound sentence. Identify the number of clauses in each sentence. If there is more than one clause in the sentence, underline each clause.",
    "explanation": "Respuesta del libro: The lady in the elegant blue dress entered the well-lit room with her perky little dog in her arms. 1"
   },
   {
    "q": "Our boat was hit with strong winds, and we had to return to our cabins.",
    "type": "input",
    "answer": "Our boat was hit with strong winds, and we had to return to our cabins. 2",
    "source": "47.3",
    "instruction": "Each sentence below is either a simple or compound sentence. Identify the number of clauses in each sentence. If there is more than one clause in the sentence, underline each clause.",
    "explanation": "Respuesta del libro: Our boat was hit with strong winds, and we had to return to our cabins. 2"
   },
   {
    "q": "His father is returning to London because the furniture is arriving.",
    "type": "input",
    "answer": "His father is returning to London because the furniture is arriving",
    "source": "48.1",
    "instruction": "For each complex sentence below, underline the dependent clause. Remember to look for the subordinating conjunction, which is the first word of the dependent clause.",
    "explanation": "Respuesta del libro: His father is returning to London because the furniture is arriving"
   },
   {
    "q": "Selma smiled at him although she had never felt less like smiling.",
    "type": "input",
    "answer": "Selma smiled at him although she had never felt less like smiling",
    "source": "48.1",
    "instruction": "For each complex sentence below, underline the dependent clause. Remember to look for the subordinating conjunction, which is the first word of the dependent clause.",
    "explanation": "Respuesta del libro: Selma smiled at him although she had never felt less like smiling"
   },
   {
    "q": "He felt a great adiection for his guardian until he discovered the truth.",
    "type": "input",
    "answer": "He felt a great a¡ection for his guardian until he discovered the truth",
    "source": "48.1",
    "instruction": "For each complex sentence below, underline the dependent clause. Remember to look for the subordinating conjunction, which is the first word of the dependent clause.",
    "explanation": "Respuesta del libro: He felt a great a¡ection for his guardian until he discovered the truth"
   },
   {
    "q": "I am going to solve this crossword puzzle even if it takes me all day.",
    "type": "input",
    "answer": "I am going to solve this crossword puzzle even if it takes me all day",
    "source": "48.1",
    "instruction": "For each complex sentence below, underline the dependent clause. Remember to look for the subordinating conjunction, which is the first word of the dependent clause.",
    "explanation": "Respuesta del libro: I am going to solve this crossword puzzle even if it takes me all day"
   },
   {
    "q": "James accepted the job before he checked with his wife.",
    "type": "input",
    "answer": "James accepted the job before he checked with his wife",
    "source": "48.1",
    "instruction": "For each complex sentence below, underline the dependent clause. Remember to look for the subordinating conjunction, which is the first word of the dependent clause.",
    "explanation": "Respuesta del libro: James accepted the job before he checked with his wife"
   },
   {
    "q": "When Elizabeth spoke, Ben listened attentively.",
    "type": "input",
    "answer": "When Elizabeth spoke, Ben listened attentively",
    "source": "48.2",
    "instruction": "For each complex sentence below, underline the dependent clause. Remember to look for the subordinating conjunction, which is the first word of the dependent clause. The dependent clause will either be before or after the main clause.",
    "explanation": "Respuesta del libro: When Elizabeth spoke, Ben listened attentively"
   },
   {
    "q": "Before you blame him, think about your own responsibility.",
    "type": "input",
    "answer": "Before you blame him, think about your own responsibility",
    "source": "48.2",
    "instruction": "For each complex sentence below, underline the dependent clause. Remember to look for the subordinating conjunction, which is the first word of the dependent clause. The dependent clause will either be before or after the main clause.",
    "explanation": "Respuesta del libro: Before you blame him, think about your own responsibility"
   },
   {
    "q": "Y ou should pay for automobile insurance even if your car is old.",
    "type": "input",
    "answer": "You should pay for automobile insurance even if your car is old",
    "source": "48.2",
    "instruction": "For each complex sentence below, underline the dependent clause. Remember to look for the subordinating conjunction, which is the first word of the dependent clause. The dependent clause will either be before or after the main clause.",
    "explanation": "Respuesta del libro: You should pay for automobile insurance even if your car is old"
   },
   {
    "q": "Unless the train arrives soon, we'll miss our appointment.",
    "type": "input",
    "answer": "Unless the train arrives soon, we’ll miss our appointment",
    "source": "48.2",
    "instruction": "For each complex sentence below, underline the dependent clause. Remember to look for the subordinating conjunction, which is the first word of the dependent clause. The dependent clause will either be before or after the main clause.",
    "explanation": "Respuesta del libro: Unless the train arrives soon, we’ll miss our appointment"
   },
   {
    "q": "The district attorney won't rest till he finds the perpetrator.",
    "type": "input",
    "answer": "The district attorney won’t rest till he finds the perpetrator",
    "source": "48.2",
    "instruction": "For each complex sentence below, underline the dependent clause. Remember to look for the subordinating conjunction, which is the first word of the dependent clause. The dependent clause will either be before or after the main clause.",
    "explanation": "Respuesta del libro: The district attorney won’t rest till he finds the perpetrator"
   },
   {
    "q": "Even though the village supported the emperor, it still paid numerous taxes.",
    "type": "input",
    "answer": "Even though the village supported the emperor, it still paid numerous taxes",
    "source": "48.3",
    "instruction": "For each complex sentence below, underline the subject of the dependent clause (not of the main clause).",
    "explanation": "Respuesta del libro: Even though the village supported the emperor, it still paid numerous taxes"
   },
   {
    "q": "I like to sit on the balcony when the weather is nice.",
    "type": "input",
    "answer": "I like to sit on the balcony when the weather is nice",
    "source": "48.3",
    "instruction": "For each complex sentence below, underline the subject of the dependent clause (not of the main clause).",
    "explanation": "Respuesta del libro: I like to sit on the balcony when the weather is nice"
   },
   {
    "q": "Georgedid itbecauseherecognizedthewoman.",
    "type": "input",
    "answer": "George did it because he recognized the woman",
    "source": "48.3",
    "instruction": "For each complex sentence below, underline the subject of the dependent clause (not of the main clause).",
    "explanation": "Respuesta del libro: George did it because he recognized the woman"
   },
   {
    "q": "Once I have made up my mind, I usually do not change it. 5 . Someoner a n gt h ed oorbellw h i l ew ew e r e having lunch.",
    "type": "input",
    "answer": "Once I have made up my mind, I usually do not change it",
    "source": "48.3",
    "instruction": "For each complex sentence below, underline the subject of the dependent clause (not of the main clause).",
    "explanation": "Respuesta del libro: Once I have made up my mind, I usually do not change it"
   },
   {
    "q": "The two horses thrived on the ranch because they received excellent care.",
    "type": "input",
    "answer": "The two horses thrived on the ranch because they received excellent care. complex 2 . Anotherl i t t l eg i r lw i l lb ea rrivinga tt h es c h o o lb e f o r en o o nt o d a y .simple",
    "source": "48.4",
    "instruction": "For each sentence below, decide if it is a simple sentence or a complex sentence. Some complex sentencesw i l lh a v em o r et h a no n ed ependentc l a u s e . S a m p l e :T h o s et w ob rothersa l w a y sd r e s sa l i k e . simple",
    "explanation": "Respuesta del libro: The two horses thrived on the ranch because they received excellent care. complex 2 . Anotherl i t t l eg i r lw i l lb ea rrivinga tt h es c h o o lb e f o r en o o nt o d a y .simple"
   },
   {
    "q": "Another little girl will be arriving at the school before noon today.",
    "type": "input",
    "answer": "",
    "source": "48.4",
    "instruction": "For each sentence below, decide if it is a simple sentence or a complex sentence. Some complex sentencesw i l lh a v em o r et h a no n ed ependentc l a u s e . S a m p l e :T h o s et w ob rothersa l w a y sd r e s sa l i k e . simple",
    "explanation": ""
   },
   {
    "q": "The old housekeeper welcomed her warmly when her mother was present.",
    "type": "input",
    "answer": "The old housekeeper welcomed her warmly when her mother was present. complex",
    "source": "48.4",
    "instruction": "For each sentence below, decide if it is a simple sentence or a complex sentence. Some complex sentencesw i l lh a v em o r et h a no n ed ependentc l a u s e . S a m p l e :T h o s et w ob rothersa l w a y sd r e s sa l i k e . simple",
    "explanation": "Respuesta del libro: The old housekeeper welcomed her warmly when her mother was present. complex"
   }
  ],
  "answerKeys": {
   "50.2": {
    "1": "If you travel to NewY ork, you should definitely visit Times Square. complex",
    "2": "He dried his face with a towel. simple",
    "3": "I like the view from my apartment, but it can get very noisy outside. compound",
    "4": "Once you arrive in Europe, you should call me. complex",
    "5": "It is obvious to me that you have to limit your spending, or you’ll have to look for a second job. compound-complex"
   },
   "46.1": {
    "1": "The committee presented its ideas to congress",
    "2": "I stayed in bed that day",
    "3": "Nobody moved",
    "4": "My favorite hotel is on Park Avenue",
    "5": "I overslept today"
   },
   "46.2": {
    "1": "I have never eaten caviar. simple sentence",
    "2": "The department stores are having a sale this weekend. simple sentence",
    "3": "Expensive antique jewelry. phrase",
    "4": "Our home on the ranch. phrase",
    "5": "Fresh-cut £owers on the table. phrase"
   },
   "47.1": {
    "1": "Andre pulled the car into the street, and Beth began reading the directions",
    "2": "She enjoyed shopping for food, but she especially enjoyed cooking",
    "3": "Ic a nd ot h i sn o w ,o rIc a nd oi tl a t e r",
    "4": "Dan does not feel well, yet he wants to go in to work",
    "5": "We missedour £ i g ht , s owe have to wait around the airport for the next available one"
   },
   "47.2": {
    "1": "He can’t blame her for the problem. simple",
    "2": "Beth left the library, and she headed straight home. compound",
    "3": "He was watching her, but she was pretending not to notice. compound",
    "4": "W e like him a lot. simple",
    "5": "The coach wants to win, but he will be happy with a tie. compound"
   },
   "47.3": {
    "1": "Vicki was always looking at herself in the mirror, but Mary Ann was extremely self-confident, and she never gave herself a second glance. 3",
    "2": "Her father was devoted to her. 1",
    "3": "Our firm’ s CEO will be £ying to Chicago next week, but h e ’ l lb er eturningt h es a m ed a y .2",
    "4": "The lady in the elegant blue dress entered the well-lit room with her perky little dog in her arms. 1",
    "5": "Our boat was hit with strong winds, and we had to return to our cabins. 2"
   },
   "47.4": {
    "1": "It was a scene of joy but one thing spoiled the moment. compound",
    "2": "The boxer fell to his knees but he managed to get back up. compound 231",
    "3": "The designer and his assistants quickly brought order to the chaos. simple",
    "4": "Matt was driving to NewY ork with his kids and his neighbor’ s son. simple",
    "5": "I like to drink co¡ee or tea after dinner. simple"
   },
   "48.1": {
    "1": "His father is returning to London because the furniture is arriving",
    "2": "Selma smiled at him although she had never felt less like smiling",
    "3": "He felt a great a¡ection for his guardian until he discovered the truth",
    "4": "I am going to solve this crossword puzzle even if it takes me all day",
    "5": "James accepted the job before he checked with his wife"
   },
   "48.2": {
    "1": "When Elizabeth spoke, Ben listened attentively",
    "2": "Before you blame him, think about your own responsibility",
    "3": "You should pay for automobile insurance even if your car is old",
    "4": "Unless the train arrives soon, we’ll miss our appointment",
    "5": "The district attorney won’t rest till he finds the perpetrator"
   },
   "48.3": {
    "1": "Even though the village supported the emperor, it still paid numerous taxes",
    "2": "I like to sit on the balcony when the weather is nice",
    "3": "George did it because he recognized the woman",
    "4": "Once I have made up my mind, I usually do not change it",
    "5": "Someone rang the doorbell while we were having lunch"
   },
   "48.4": {
    "1": "The two horses thrived on the ranch because they received excellent care. complex 2 . Anotherl i t t l eg i r lw i l lb ea rrivinga tt h es c h o o lb e f o r en o o nt o d a y .simple",
    "3": "The old housekeeper welcomed her warmly when her mother was present. complex",
    "4": "The general returned home with his family. simple",
    "5": "As we approached our destination, we became rather emotional. complex"
   },
   "48.5": {
    "1": "She pursued her goals relentlessly but she didn’t always achieve them. compound",
    "2": "I have made numerous mistakes over the years. simple",
    "3": "I won’t tell you unless you agree to help because I can’t take the risk. complex",
    "4": "Jason and Ilene had to renew their passports before they could leave the country. complex",
    "5": "Baby boomers were born before this century. simple"
   },
   "48.6": {
    "1": "I’ll stay with Jeanette until Peter comes home",
    "2": "That my candidate will win is obvious",
    "3": "Although Mrs. Craft was tired, she insisted on making us dinner",
    "4": "W e were quite confident that we had made the right decision",
    "5": "They want to find out why the waitress was so rude to them"
   },
   "48.7": {
    "1": "They don’t believe that her partner will keep his word",
    "2": "Mrs.W ebb was sure her pie would win the baking contest. UNIT 16: COMBINING SENTENCES 232",
    "3": "That Andy is the best in the class doesn’t surprise me",
    "4": "W e heard you were accepted to Georgetown Law School",
    "5": "It is true that I am going to become a partner in this firm"
   },
   "48.8": {
    "1": "My mother changed the subject, but it was too late. compound",
    "2": "He proposed to her when she graduated from college. complex",
    "3": "A man from the sawmill was overseeing the project. simple",
    "4": "I want a piece of apple pie. simple",
    "5": "I had been hoping you could come to the game. complex"
   },
   "49.1": {
    "1": "He paid no attention to the newspaper which was next to him. 2 . T h ep o l i c ea rrestedt h em a nwhom they had been looking for",
    "3": "Mrs. Peterson was reaching for the phone that was nearest her chair",
    "4": "He might recognize the woman who is hosting the show",
    "5": "Cli¡ bought a present that was just perfect for his girlfriend"
   },
   "49.2": {
    "1": "She gave him a smile that lit up her face",
    "2": "The professor who gives easy tests is on sabbatical this semester",
    "3": "The approaches which are most likely to succeed are too complicated",
    "4": "The hotel which is near the shore doesn’t open until April",
    "5": "Are you satisfied with the computer that your parents bought for you?"
   },
   "49.3": {
    "1": "The hotel chain that Greg founded has since gone out of business",
    "2": "He phoned the woman who was writing the article",
    "3": "Jill resents the man whose father won the lottery",
    "4": "The highway which I take to work needs repair",
    "5": "The TVshow that she likes best is on Sunday nights"
   },
   "49.4": {
    "1": "She turned on the broadcast which dealt with the scandal that had recently been in the news",
    "2": "Buck stood behind the counter which dominated his small restaurant",
    "3": "The photographer who took the picture which appeared in the paper that was most widely read won a Pulitzer Prize",
    "4": "I can’t find the message that you sent me",
    "5": "No one who breaks the law should get away with it"
   },
   "49.5": {
    "1": "I am meeting Mr. Arnold at the museum that he supports",
    "2": "The label which contains the warning is not very clear",
    "3": "The robber opened the case which contained the most cash",
    "4": "The policy that the president is implementing should be successful",
    "5": "I contacted the young man whose wallet I found on the subway"
   },
   "49.6": {
    "1": "The architect’ s design includes a window that faces the courtyard",
    "2": "She understood what you were trying to say",
    "3": "If you’re hungry, this town has a fantastic Greek restaurant",
    "4": "It is obvious that we have to reevaluate our plan",
    "5": "The o¡er that I have given you is a fair one"
   },
   "49.7": {
    "1": "The little square in the town we visited contained benches. 2 . O t h e rf a m o u sp e o p l ew i l lb ep erforminga tt h et heaterthat my brother works at",
    "3": "The pilot w h o£ e wt h ea ircraftm u s th a v eb e e nw e l lt rained",
    "4": "My neighbor owns the horse which won this race",
    "5": "The guest I invited is sleeping on the sofa"
   },
   "49.8": {
    "1": "Mrs. Smith, who owns the house, was not interested in selling. nonrestrictive",
    "2": "A huge truck, which someone had painted bright yellow, stood in the driveway. nonrestrictive",
    "3": "The children who had just come back from the class trip were restless. restrictive",
    "4": "The maid broke an antique lamp, which was very valuable. nonrestrictive",
    "5": "The painting Ib roughth o m ew i l lb ep erfectf o rt h ed e n . restrictive"
   },
   "49.9": {
    "1": "The Frenchman who is from Lyons completed the project. restrictive",
    "2": "The general, who knew nothing about the matter, nonetheless voiced his opinion. nonrestrictive",
    "3": "A small disturbance, which was getting louder and louder, finally attracted our attention. nonrestrictive",
    "4": "Jeremy, who was blushing profusely, asked Tatiana for some help. nonrestrictive",
    "5": "Jim wasn’t the person she wanted to hire. restrictive"
   },
   "50.1": {
    "1": "They are walking quickly down the hall which connects their lab to the main office. complex",
    "2": "The castle looked beautiful in the sunlight, and it dominated the countryside which was around it. compound-complex",
    "3": "The Mercer family has gone on the vacation which they’ve been planning for years. complex",
    "4": "He was angry at his friend, but he decided that he wasn’t going to tell him. compound-complex",
    "5": "W e don’t know whether we’ll succeed, but it’ s important that we try. compound-complex"
   },
   "51.1": {
    "1": "They brought their concerns to the clergyman",
    "2": "I have an idea you’ll like this movie",
    "3": "You should hand your ticket to the £ight attendant",
    "4": "By noon, Jackie had turned in her assignment",
    "5": "I ordered you your favorite book",
    "6": "She knows this will disappoint her mother",
    "7": "Please put your pens down!",
    "8": "He promised his friend a good time",
    "9": "The accountant figured that he would spend about three hours with his client",
    "10": "They gave money to their local chapter. So far, the related sentence pairs we’ve looked at have the same meaning. For example, She looked up the answer and She looked the answer up mean exactly the same thing. But sometimes sentences are related to each other in a consistent way, even though their meanings are not the same. For example, here’ s a statement: 10a. Amanda is working today. Can you turn it into a yes/no question ( Lesson 45 )? The related yes/no question is: 10b. Is Amanda working today? No native speaker of English would make the yes/no question something like, * Wo rk i n g Amanda today is . That’ s because there’ s a systematic relationship between statements and yes/no questions, even though they don’t have the same meaning. Try another one: 11a. That boy has eaten an enormous breakfast. The related yes/no question is: 11b. Has that boy eaten an enormous breakfast ? UNIT 17: RELATED SENTENCES 236 Here are some more examples: 12a. Hank was laughing. 12b. W as Hank laughing? 13a. That artist had chosen to represent animals in his drawings. 13b. Had that artist chosen to represent animals in his drawings? 14a. You can see the old hotel near the railroad station. 14b. Can you see the old hotel near the railroad station? Another example of related sentences can be seen when we look at statements and tag questions ( Lesson 45 ). For example, here’ s a statement: 15a. Molly should do that. Can you turn it into a tag question ( Lesson 45 )? The related tag question is: 15b. Molly should do that, shouldn’t she? No native speaker of English would respond with the tag question, * Mary should do that, can ’t they ? That’ s because, again, there’ s a systematic relationship between statements and tag questions, even though they don’t have the same meaning. Try another one: 16a. The students are waiting to have lunch. The related tag question is: 16b. The students are waiting to have lunch, aren’t they? Here are some more examples: 17a. He had mailed the letter yesterday. 17b. He had mailed the letter yesterday, hadn’t he? 18a. Mr. Peters was wearing a hat with a wide brim. 18b. Mr. Peters was wearing a hat with a wide brim, wasn’t he? 19a. Rebecca will wait for her. 19b. Rebecca will wait for her, won’t she? See Lesson 53 for further discussion of yes/no questions and tag questions. So far, we’ve been looking at sentence types that we’ve already come across in other les- sons. However, there are many more sentences in English that are related. In the next two lessons, we’ll take a closer look at two sets of related sentences that we have not dis- cussed before. Lesson 51: Looking at related sentences 237"
   }
  }
 },
 {
  "unit": 17,
  "title": "Related sentences",
  "part": "Part III: Getting started with sentences",
  "startPage": 248,
  "pdfPages": {
   "theory": [
    248,
    261
   ],
   "answers": 263
  },
  "theoryEsHtml": "<div class=\"theory-es-intro\"><p>Oraciones relacionadas: voz activa vs. pasiva, afirmativas vs. negativas, y cómo se transforman sin perder el significado central.</p></div>\n<div class=\"theory-es-section\"><h4>1. Activa vs. pasiva</h4><p><strong>Activa:</strong> <em>A better team beat us</em>. <strong>Pasiva:</strong> <em>We <strong>were beaten</strong> by a better team</em>. La pasiva usa <em>be + participio</em>; el sujeto recibe la acción.</p></div>\n<div class=\"theory-es-section\"><h4>2. Transformaciones</h4><p>Para pasar de activa a pasiva: el OD pasa a sujeto, el verbo a <em>be + V3</em>, el sujeto original puede ir con <em>by</em>.</p></div>\n<div class=\"theory-es-section\"><h4>3. Afirmativa vs. negativa</h4><p>Negación con <em>not</em> en el auxiliar: <em>She is not / She doesn't / She hasn't</em>. Sin auxiliar explícito se introduce <em>do/does/did</em>.</p></div>\n<div class=\"theory-es-section\"><h4>4. Formas de pregunta</h4><p>Invertí sujeto y auxiliar: <em>Is he…? Have we…? Did she…?</em> Con wh- al inicio: <em>Which is yours?</em></p></div>\n<div class=\"theory-es-tip\"><strong>Tip del libro:</strong> En la pasiva, localizá siempre <em>be</em> + participio pasado; en negativas, ubicá el auxiliar correcto antes de <em>not</em>.</div>",
  "lessons": [
   {
    "n": 0,
    "title": "Unit overview",
    "html": "<p>Test yourself 49.6\n1. The architect' s design includes a window that faces the courtyard.\n2. She understood what you were trying to say.\n3. If you're hungry, this town has a fantastic Greek restaurant.\n4. It is obvious that we have to reevaluate our plan.\n5. The odier that I have given you is a fair one.\nTest yourself 49.7\n1. The little square in the town we visited contained benches.\n2 . O t h e rf a m o u sp e o p l ew i l lb ep erforminga tt h et h e a t e rthat my brother works at.\n3. The pilot w h off e wt h ea ircraftm u s th a v eb e e nw e l lt r a i n e d .\n4. My neighbor owns the horse which won this race.\n5. The guest I invited is sleeping on the sofa.\nTest yourself 49.8\n1. Mrs. Smith, who owns the house, was not interested in selling. nonrestrictive\n2. A huge truck, which someone had painted bright yellow, stood in the driveway. nonrestrictive\n3. The children who had just come back from the class trip were restless. restrictive\n4. The maid broke an antique lamp, which was very valuable. nonrestrictive\n5. The painting Ib r o u g h th o m ew i l lb ep e r f e c tf o rt h ed e n . restrictive\nTest yourself 49.9\n1. The Frenchman who is from Lyons completed the project. restrictive\n2. The general, who knew nothing about the matter, nonetheless voiced his opinion. nonrestrictive\n3. A small disturbance, which was getting louder and louder, finally attracted our\nattention. nonrestrictive\n4. Jeremy, who was blushing profusely, asked Tatiana for some help. nonrestrictive\n5. Jim wasn't the person she wanted to hire. restrictive\nTest yourself 50.1\n1. They are walking quickly down the hall which connects their lab to the main oflce. complex\n2. The castle looked beautiful in the sunlight, and it dominated the countryside which was\naround it. compound-complex\n3. The Mercer family has gone on the vacation which they've been planning for years. complex\n4. He was angry at his friend, but he decided that he wasn't going to tell him. compound-complex\n5. W e don't know whether we'll succeed, but it' s important that we try. compound-complex\nTest yourself 50.2\n1. If you travel to NewY ork, you should definitely visit Times Square. complex\n2. He dried his face with a towel. simple\n3. I like the view from my apartment, but it can get very noisy outside. compound\n4. Once you arrive in Europe, you should call me. complex\n5. It is obvious to me that you have to limit your spending, or you'll have to look for a second\njob. compound-complex\n☞\nFOR A REVIEW EXERCISE OF THIS UNIT, SEE THE WEBSITE.\nUNIT 16: COMBINING SENTENCES\n234</p>"
   },
   {
    "n": 51,
    "title": "Looking at related sentences",
    "html": "<p>One interesting characteristic of language is that sentences can be related, in a consistent\nway, to other sentences.What do we mean by this? Let' s start by looking at some related\nsentences which we've seen before.\n1a. She looked up the answer.\n1b. She looked the answer up.\n2a. W e will just drop odi the files.\n2b. W e will just drop the files odi.\n3a. The professor pointed out the correct answer.\n3b. The professor pointed the correct answer out.\nY ou can see that one member of each pair is related to the other in a systematic way: the\nverb and its particle (both underlined) can either be next to each other or the particle can\nbe on the other side of the next noun phrase. (See\nLesson 11\n. )T h ei mportantp o i n th e r ei s\nthat we can't change the structure of a sentence in any random way. For example, we can't\nsay *\nShe up looked the answer\n.\nLet' s look at other examples of related sentences:\n4a. Mary gave the information to Robert.\n4b. Mary gave Robert the information.\n5a. She told the truth to her granddaughter.\n5b. She told her granddaughter the truth.\n6a. They bought a car for their teenage daughter.\n6b. They bought their teenage daughter a car.\nOnce again, you can see that these indirect object pairs are related to each other in a sys-\ntematic way. (See\nLesson 40\n.) And again, we can't just randomly change them; for example,\nwe can't say, *\nMary Robert the information gave\n.\nH e r e ' so n em o r ee x a m p l eo fr e l a t e ds entences :\n7a. I know that you're right.\n7b. I know you're right.\n8a. Y ou believed that the defendant was innocent.\n8b. Y ou believed the defendant was innocent.\n9a. The residents of the village feel that the new highway is important.\n9b. The residents of the village feel the new highway is important.\nHere, while the word\nthat\ncan be deleted (see\nLesson 48\n) , we can't delete just anything. For\nexample, we can't say *\nIt h a ty o u ' r er i g h t\n.\nTest yourself 51.1\nChange each sentence below into its related' 'partner, ' ' using the examples above as a guide.\nSample: His editor put down the manuscript. His editor put the manuscript down.\n235</p>\n<p>Getting started (answers on p. 250)\n1. They brought their concerns to the clergyman.\n............................................................................................................................................................................................................................................\n2. I have an idea you'll like this movie.\n............................................................................................................................................................................................................................................\n3. Y ou should hand your ticket to the ffight attendant.\n............................................................................................................................................................................................................................................\n4. By noon, Jackie had turned in her assignment.\n............................................................................................................................................................................................................................................\n5. I ordered you your favorite book.\n............................................................................................................................................................................................................................................\nMore practice (answers on the website)\n6. She knows this will disappoint her mother.\n...........................................................................................................................................................................................................................................\n7. Please put your pens down!\n..........................................................................................................................................................................................................................................\n8. He promised his friend a good time.\n..........................................................................................................................................................................................................................................\n9. The accountant figured that he would spend about three hours with his client.\n..........................................................................................................................................................................................................................................\n10. They gave money to their local chapter.\n................................................................................................................................................................................................................ …</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 52,
    "title": "Active and passive sentences",
    "html": "<p>So far in this book we've seen lots of sentences with the following pattern:\n1a. The witch kidnaped Esmeralda.\nIn this sentence,\nthe witch\nis the subject (the doer of the action);\nkidnaped\nis an action\nverb, and\nEsmeralda\nis the direct object (the receiver of the action). (See\nLessons 38\nand\n39.) This word order ^ subject first, then verb, then direct object ^ is typical of English sen-\ntences. Sentences like this, with the subject before its verb, are called\nactive sentences\n(or are said to be in the\nactive voice\n).\nQuick tip 52.1\nSentences with the subject before the verb are called active sentences . Example: Charley\nrepaired this computer\n.\nWhat do you notice about this next sentence?\n1b. Esmeralda was kidnaped by the witch.\nIt has basically the same meaning as sentence1a, but with a didierent structure.W e can see\nthat the noun phrase\nthe witch\nis still the subject; however, it no longer occurs before the\nverb. It occurs after the verb and following the word\nby\n. The direct object noun phrase,\nEsmeralda\n, is now before the verb. Sentences with this pattern are called\npassive senten-\nces\n(or are said to be in the\npassive voice\n).\nQuick tip 52.2\nSentences which do not have the subject before the verb are called passive sentences.\nExample:\nThis computer was repaired by Charley\n.\nHere are some more examples of active and passive sentence pairs:\n2a. My friend mentioned his excellent reputation. (active)\n2b. His excellent reputation was mentioned by my friend. (passive)\n3a. Nellie sent the Browns a present. (active)\n3b. The Browns were sent a present by Nellie. (passive)\n4a. The bird ate the worm. (active)\n4b. The worm was eaten by the bird. (passive)\nTest yourself 52.1\nDecide if each sentence is active or passive.To help you decide, see if the subject (doer of the action)\nis before or after the verb.\nSample: The story was told by a great writer. passive\nGetting started\n(answers on p. 250)\n1. The landscaper was hired by her neighbor. .................................................................................................\n2. Tim chose the pastries. .................................................................................................\n238</p>\n<p>3. Christine had driven about thirty or forty miles that day. ........................................................................................\n4. Little Suzie' s picture was taken by her grandmother. ........................................................................................\n5. We are cooking something for lunch. ........................................................................................\nMore practice (answers on the website)\n6. This investor made a lot of money. ........................................................................................\n7. He was appointed by the mayor. ........................................................................................\n8. The votes were counted by the election commission. ........................................................................................\n9. The soprano is singing a famous aria. ........................................................................................\n10. My credit card company has responded to my inquiry. ........................................................................................\nIn order for an active sentence to have a related passive sentence, it must have a direct\nobject. Unlike the sentences we have looked at so far in this lesson, the following senten-\nces do not have a direct object; therefore they don't have related passive sentences.\n5. The train arrived late.\n6. We are traveling to Mexico.\n7. Harry studied.\nActive and passive sentences are related to each other in a systematic way. Let' s look\nmore closely at this relationship by examining sentences 8a and 8b.\n8a. The policeman saw the criminals. (active)\n8b. The criminals were seen by the policeman. (passive)\nW e will see that there are five ways in which passive sentences like 8b didier from active\nsentences like 8a.W e'll now discuss each of the characteristics of passive sentences.\nFirst, as we mentioned in\nQuick tip\n52.2\n, the subject (doer of the action) follows the verb:\n8b. The criminals were seen by the policeman.\nSecond, the word\nby\nprecedes the subject:\n8b. The criminals were seen by the policeman.\nThird, the noun phrase that follows the verb in the active sentence occurs before the\nverb in the passive sentence:\n8b. The criminals were seen by the policeman.\nFourth, passive sentences have a form of\nbe\n(\nam\n,\nis\n,\nare\n,\nwas\n,\nwere\n,\nbe, being\n)b e f o r et h e\nverb:\n8b. The criminals were seen by the policeman.\nW e talked about auxiliary, or helping, verbs in\nLessons 31\n^36; the\npassive be is also a kind\nof helping verb.\nAnd fifth, the main verb following the passive\nbe\nis in a special form:\n8b. The criminals were seen by the policeman.\nY ou may recognize this special form of the verb as the past participle form of the verb, the\ns a m ef o r mo ft h e …</p>\n<p>Test yourself 52.2\nIn the passive sentences below, underline the passive be helping verb and put a squiggly line under\nthe past participle form of the verb that follows it.\nSample: Roller-coasters are designed by that company.\nGetting started\n(answers on p. 250)\n1. Amazing results are produced by that\napproach.\n2. Marjorie Kelly was given first prize by the\njudges.\n3. Those words were spoken byAbraham\nLincoln.\n4. This actor' s suit was designed byArmani.\n5 . O n eh u n d r e dn e wa irplanesw e r eo r d e r e db y\nSingapore Airlines.\nMore practice\n(answers on the website)\n6. The rebels were attacked by government\nsoldiers.\n7. Columbia Pictures was bought by Sony.\n8. A quick deal was struck by the negotiating\nteam.\n9. Gandhi is admired by people all over the\nworld.\n10.\nTheW all Street Journal\nis read by many\ncompany executives.\nTest yourself 52.3\nConvert each active sentence below to its related passive sentence.\nSample: The principal gave my class the award. My class was given the award by the principal.\nGetting started\n(answers on p. 250)\n1. The tenant filed the complaint.\n...........................................................................................................................................................................................................................................\n2. The advertising agency presents many ideas.\n...........................................................................................................................................................................................................................................\n3. The politicians analyze the questionnaires.\n...........................................................................................................................................................................................................................................\n4. Flood damaged their house.\n...........................................................................................................................................................................................................................................\n5. My colleagues complimented me.\n...........................................................................................................................................................................................................................................\nMore practice (answers on the website)\n6. This law firm hired Joan' s daughter.\n...........................................................................................................................................................................................................................................\n7. Char ity helps the needy.\n...........................................................................................................................................................................................................................................\n8. Some travelers buy ffight insurance.\n...........................................................................................................................................................................................................................................\nUNIT 17: RELATED SENTENCES\n240</p>\n<p>9. Hens produce eggs.\n...........................................................................................................................................................................................................................................\n10. My grandfather built that house.\n...........................................................................................................................................................................................................................................\nTest yourself 52.4\nConvert each passive sentence below to its related active sentence.\nSample: The message was read by the old man. The old man read the message.\nGetting started\n(answers on p. 250)\n1. Graham is touched by her remarks.\n...........................................................................................................................................................................................................................................\n2. The tower was built by a well-known architect.\n...........................................................................................................................................................................................................................................\n3. The silence is broken by the alarm bell.\n...........................................................................................................................................................................................................................................\n4. Mexico was conquered by Cortez.\n........................................................................ …</p>\n<p>Although both by s are prepositions, their functions are not the same. In sentence 9, by\nis in a passive sentence, letting us know that the doer of the action (in this case,\nDina</p>\n<p>)i s\nfollowing. But in sentence 10,\nthe seashore\nis not doing anything; rather,\nby\nis telling us\nabout location.\nTest yourself 52.5\nEach of the sentences below contains the word by . Decide if it is being used as a marker of the\npassive or to indicate location.\nSample: There were too many cars parked by the school. location\nGetting started\n(answers on p. 250)\n1. The trooper is pleased by the strategy. ......................................................................\n2. The building by the bank is new. ......................................................................\n3. He was confused by that new information. ......................................................................\n4. This afternoon we rested by the pond. ......................................................................\n5. The rally was attended by college students. ......................................................................\nMore practice (answers on the website)\n6. They don't want to buy the house by the highway. ......................................................................\n7. The lost puppy was found by its owner. ......................................................................\n8. The newlyweds were married by their hometown priest. ......................................................................\n9 . T h ec a s ei st r i e db yan e w l ye l e c t e dj u d g e . ......................................................................\n10. She was reading by the fireplace. ......................................................................\nAs we mentioned, passive be (in all its forms) is a kind of helping verb, occurring right\nbefore the main verb. In a sentence that has other helping verbs as well, the passive\nbe\nis\nalways the last one.Y ou can see that in the following sentences, where the form of the pas-\nsive\nbe\nis underlined and the other helping verbs are in bold:\n11. The letter\nwill be answered by McCarthy.\n12. The letter\nhas been answered by McCarthy.\n13. The letter\nis being answered by McCarthy.\n14. The letter\nshould have been answered by McCarthy.\nQuick tip 52.3\nThe passive be helping verb is always placed after all the other helping verbs , right before\nthe\nmain verb\n. Example:\nThe table has been set by the waitress .\nTest yourself 52.6\nUnderlinet h ef o r mo ft h ep assivebe helping verb in the passive sentences below. Remember that it\nwill always be the last helping verb in a passive sentence.\nUNIT 17: RELATED SENTENCES\n242</p>\n<p>Sample: They could have been seen by the reporters.\nGetting started\n(answers on p. 251)\n1. My oflce is being redecorated by two\nnewcomers to the field.\n2. The stop had been planned by the tour guide.\n3. Her house might have been damaged by the\nstorm.\n4. This book should be read by curious\nstudents.\n5. The long awaited picture will be unveiled by\nthe painter next Sunday.\nMore practice\n(answers on the website)\n6. The trash was being collected by the\nsanitation department.\n7. Y ou might be pleased by his generosity.\n8. The Finnish runner was being overtaken by\nthe runner from Kenya.\n9. That business should have been shut down\nby the authorities.\n10. Joseph' s car must be repaired by the\ndealership.\nTest yourself 52.7\nEach of the sentences below is an active sentence with one or more helping verbs. Convert each\nactive sentence below to its related passive sentence.\nSample: Matt should read this newspaper. This newspaper should be read by Matt.\nGetting started\n(answers on p. 251)\n1. The tenants have filed the complaint.\n............................................................................................................................................................................................................................................\n2. The advertising agency is presenting the ideas.\n............................................................................................................................................................................................................................................\n3. The politicians have analyzed the questionnaires.\n............................................................................................................................................................................................................................................\n4. The author should have given a more interesting speech.\n............................................................................................................................................................................................................................................\n5. I might have forgotten the whole thing.\n...................................................................................................................................... …</p>\n<p>9. Bad weather has delayed us.\n............................................................................................................................................................................................................................................\n10. Careless campers can start forest fires.\n............................................................................................................................................................................................................................................\nThe following sentences are also passive sentences, but they're didierent from the ones\nwe've talked about so far.\n15. The bank was robbed.\n16. A landscaper was hired at last.\nIn these passive sentences, the\nby\nand the subject are missing. That is, instead of saying\nThe bank was robbed by someone\n, we have the option of simply saying\nThe bank was\nrobbed\n, if we don't feel it' s necessary to say by whom.This kind of passive sentence, where\nthe subject noun phrase is missing, is called a\ntruncated passive\n. Here are some more\nexamples:\n17. My dinner was prepared quickly.\n18. That proposal has already been discussed.\nQuick tip 52.4\nA truncated passive is a passive sentence without the by and subject noun phrase . Example:\nThe proposal was discussed\n.\nTest yourself 52.8\nEach of the sentences below is a passive sentence. Decide if it is a full passive or a truncated passive.\nLook for the\nby\n+ noun phrase to help you decide.\nSample: The game was lost by the team. full passive\nGetting started\n(answers on p. 251)\n1. The stories of his wealth have been exaggerated by others. .............................................................................\n2. That bestseller was written by Tony Martin. .............................................................................\n3 . T h eb r i d g eh a sb e e nr epaired . .............................................................................\n4. The store is being watched. .............................................................................\n5. We should have been warned by the contractor. .............................................................................\nMore practice (answers on the website)\n6 . T h i sw a t c hw a sg i v e nt om eb ym yu n c l e . .............................................................................\n7. Another pyramid has been unearthed. .............................................................................\n8 . M ya r t i c l ew i l lb ep ublishedb yap restigiousj o u r n a l . .............................................................................\n9. I am being paged right now. .............................................................................\n10. Elephants have been hunted illegally for their ivory. .............................................................................\nUNIT 17: RELATED SENTENCES\n244</p>\n<p>Test yourself 52.9\nDecide if the following sentences are active or passive. Some of the passives are truncated.\nSample: The chef is making a sauce for the pasta. active\nGetting started\n(answers on p. 251)\n1. The celebrity was spotted at eight in the morning. ...........................................................\n2. Tom is carrying two large glasses. ...........................................................\n3. The old man might have been looking at his host suspiciously. ...........................................................\n4. The company was sold. ...........................................................\n5. The stop had been planned by the tour guide. ...........................................................\nMore practice (answers on the website)\n6. She was thoroughly surprised by him. ...........................................................\n7. I might have been exaggerating. ...........................................................\n8. The lasagna was cooked in the brand new oven. ...........................................................\n9. The ship is circling the island. ...........................................................\n10. Nice things were said about him. ...........................................................\nTo enhance your understanding\nLet's compare another active/passive pair of sentences:\n19a. Their aunt visits the children every Christmas.\n19b. The children are visited by their aunt every Christmas.\nIn sentence 19a, why is the verb\nvisits\nrather than\nvisit\n? Since\ntheir aunt\nis one person,\nwe say\nvisits . If there were more than one aunt, we'd say: Their aunt s visit the children\nevery Christmas\n. So in an active sentence, the ﬁrst noun phrase, the subject, controls the\nform of the verb.\nWhat happens when the direct object of the sentence,\nthe children\n, is before the verb, as\nin the passive sentence 19b? You can see that the ﬁrst noun phrase,\nthe children\n, is now\ncontrolling the form of the verb: we say,\nthe children are visited by their aunt every\nChristmas\n(because there is more than one child …</p>\n<p>Contenido en el PDF del libro.</p>"
   },
   {
    "n": 53,
    "title": "Positive and negative sentences",
    "html": "<p>T h ef ollowinga r ea l l positive sentences :\n1. I will think about it.\n2. Timothy has called her.\n3. The teacher was listening.\nCan you turn them into\nnegative sentences\n,u s i n gt h ew o r d\nnot\n?T h er e l a t e dn egative\nsentences are:\n4. I will not think about it.\n5. Timothy has not called her.\n6. The teacher was not listening.\n(Of course, native speakers often put\nnot\nin contractions, saying, for example,\nI won't think\nabout it\ninstead of\nI will not think about it\n; we will not be focusing on the contractions in\nour discussion here.)\nNo native speaker of English would make the negative sentence something like, *\nIw i l l\nthink about not it\n. That' s because there' s a systematic relationship between positive and\nnegative sentences, even though they don't have the same meaning.W e're not usually con-\nsciously thinking about how to make a sentence negative, but we know how to do it, and\nwe do it in a consistent way.\nCan you figure out exactly where you put\nnot\nin a sentence when you make it negative?\nH e r ea r es o m en egatives entences ,w i t h\nnot\nunderlined and the helping verb in bold. (See\nLesson 31\nfor a reminder about helping verbs.)\n7. I\nam not going there next week.\n8. That phone\nmight not work.\n9. She\nhas not written to me often.\nWhere does the\nnot\ngo? Y ou can see that it goes right after the helping verb.\nWhat if a sentence has more than one helping verb? Again, the\nnot\nin each sentence\nbelow is underlined; the helping verbs are in bold.\n10. That phone\nshould not have worked.\n11. She\nhas not been writing to me often.\n12. Those people\nshould not have been attending the conference.\nWhat pattern do you notice? Y ou can see that\nnot\nis always placed after the first helping\nverb.\nQuick tip 53.1\nA sentence is made negative by inserting not after the ﬁrst helping verb .\nTest yourself 53.1\nFor each of the sentences below, insert the word not to make the sentence negative.\nSample: I should turn around. I should not turn around.\n246</p>\n<p>Getting started (answers on p. 251)\n1. Nate has been busy lately.\n............................................................................................................................................................................................................................................\n2. Y ou might ask your father.\n............................................................................................................................................................................................................................................\n3. Interest rates are going up.\n............................................................................................................................................................................................................................................\n4. It could have been a hurricane.\n............................................................................................................................................................................................................................................\n5. I will be playing soccer tomorrow.\n............................................................................................................................................................................................................................................\nMore practice (answers on the website)\n6. George has had enough.\n...........................................................................................................................................................................................................................................\n7. She could have been saying that.\n...........................................................................................................................................................................................................................................\n8. He was being photographed.\n...........................................................................................................................................................................................................................................\n9. This company was sued for fraud.\n...........................................................................................................................................................................................................................................\n10. I can be persuaded to change my mind.\n...........................................................................................................................................................................................................................................\nNow make the following sentence negative:\n13. I went there last week.\nY ou probably ended up with the following:\n14. I did not go there last week.\nHow did\ndid\nend up here? Let' s look at some more examples to figure it out:\n15a. She writes to m …</p>\n<p>Contenido en el PDF del libro.</p>"
   }
  ],
  "tips": [
   {
    "code": "52.1",
    "text": "Sentences with the subject before the verb are called active sentences . Example: Charley repaired this computer . What do you notice about this next sentence? 1b. Esmeralda was kidnaped by the witch. It has basically the same meaning as sentence1a, but with a didierent structure.W e can see that the noun phrase the witch is still the subject; however, it no longer occurs before the verb. It occurs after the verb and following the word by . The direct object noun phrase, Esmeralda , is now before the verb. Sentences with this pattern are called passive senten- ces (or are said to be in the passive voice )."
   },
   {
    "code": "52.2",
    "text": "Sentences which do not have the subject before the verb are called passive sentences. Example: This computer was repaired by Charley . Here are some more examples of active and passive sentence pairs: 2a. My friend mentioned his excellent reputation. (active) 2b. His excellent reputation was mentioned by my friend. (passive) 3a. Nellie sent the Browns a present. (active) 3b. The Browns were sent a present by Nellie. (passive) 4a. The bird ate the worm. (active) 4b. The worm was eaten by the bird. (passive)"
   },
   {
    "code": "52.2",
    "text": ", the subject (doer of the action) follows the verb: 8b. The criminals were seen by the policeman. Second, the word by precedes the subject: 8b. The criminals were seen by the policeman. Third, the noun phrase that follows the verb in the active sentence occurs before the verb in the passive sentence: 8b. The criminals were seen by the policeman. Fourth, passive sentences have a form of be ( am , is , are , was , were , be, being )b e f o r et h e verb: 8b. The criminals were seen by the policeman. W e talked about auxiliary, or helping, verbs in Lessons 31 ^36; the passive be is also a kind of helping verb. And fifth, the main verb…"
   },
   {
    "code": "52.3",
    "text": "The passive be helping verb is always placed after all the other helping verbs , right before the main verb . Example: The table has been set by the waitress ."
   },
   {
    "code": "52.4",
    "text": "A truncated passive is a passive sentence without the by and subject noun phrase . Example: The proposal was discussed ."
   },
   {
    "code": "53.1",
    "text": "A sentence is made negative by inserting not after the ﬁrst helping verb ."
   }
  ],
  "practice": [
   {
    "code": "49.6",
    "instruction": "1. The architect' s design includes a window that faces the courtyard. 2. She understood what you were trying to say. 3. If you're hungry, this town has a fantastic Greek restaurant. 4. It is obvious that we have to reevaluate our plan. 5. The odier that I have given you is a fair one.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "49.7",
    "instruction": "1. The little square in the town we visited contained benches. 2 . O t h e rf a m o u sp e o p l ew i l lb ep erforminga tt h et h e a t e rthat my brother works at. 3. The pilot w h off e wt h ea ircraftm u s th a v eb e e nw e l lt r a i n e d . 4. My neighbor owns the horse which won this race. 5. The guest I invited is sleeping on the sofa.",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "49.8",
    "instruction": "1. Mrs. Smith, who owns the house, was not interested in selling. nonrestrictive 2. A huge truck, which someone had painted bright yellow, stood in the driveway. nonrestrictive 3. The children who had just come back from the class trip were restless. restrictive 4. The maid broke an antique lamp, which was very valuable. nonrestrictive 5. The painting Ib r o u g h th o m ew i l lb ep e r f e c tf ",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "49.9",
    "instruction": "1. The Frenchman who is from Lyons completed the project. restrictive 2. The general, who knew nothing about the matter, nonetheless voiced his opinion. nonrestrictive 3. A small disturbance, which was getting louder and louder, finally attracted our attention. nonrestrictive 4. Jeremy, who was blushing profusely, asked Tatiana for some help. nonrestrictive 5. Jim wasn't the person she wanted to h",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "50.1",
    "instruction": "1. They are walking quickly down the hall which connects their lab to the main oflce. complex 2. The castle looked beautiful in the sunlight, and it dominated the countryside which was around it. compound-complex 3. The Mercer family has gone on the vacation which they've been planning for years. complex 4. He was angry at his friend, but he decided that he wasn't going to tell him. compound-compl",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "50.2",
    "instruction": "1. If you travel to NewY ork, you should definitely visit Times Square. complex 2. He dried his face with a towel. simple 3. I like the view from my apartment, but it can get very noisy outside. compound 4. Once you arrive in Europe, you should call me. complex 5. It is obvious to me that you have to limit your spending, or you'll have to look for a second job. compound-complex FOR A REVIEW EXERCI",
    "sample": "",
    "items": [],
    "answers": {}
   },
   {
    "code": "51.1",
    "instruction": "Change each sentence below into its related' 'partner, ' ' using the examples above as a guide.",
    "sample": "Sample: His editor put down the manuscript. His editor put the manuscript down. 235",
    "items": [
     {
      "n": 1,
      "text": "They brought their concerns to the clergyman.",
      "answer": "They brought the clergyman their concerns"
     },
     {
      "n": 2,
      "text": "I have an idea you'll like this movie.",
      "answer": "I have an idea that you’ll like this movie"
     },
     {
      "n": 3,
      "text": "Y ou should hand your ticket to the ffight attendant.",
      "answer": "You should hand the £ight attendant your ticket"
     },
     {
      "n": 4,
      "text": "By noon, Jackie had turned in her assignment.",
      "answer": "By noon, Jackie had turned her assignment in"
     },
     {
      "n": 5,
      "text": "I ordered you your favorite book.",
      "answer": "I ordered your favorite book for you"
     }
    ],
    "answers": {
     "1": "They brought the clergyman their concerns",
     "2": "I have an idea that you’ll like this movie",
     "3": "You should hand the £ight attendant your ticket",
     "4": "By noon, Jackie had turned her assignment in",
     "5": "I ordered your favorite book for you"
    }
   },
   {
    "code": "52.1",
    "instruction": "Decide if each sentence is active or passive.To help you decide, see if the subject (doer of the action) is before or after the verb.",
    "sample": "Sample: The story was told by a great writer. passive",
    "items": [
     {
      "n": 1,
      "text": "The landscaper was hired by her neighbor.",
      "answer": "The landscaper was hired by her neighbor. passive"
     },
     {
      "n": 2,
      "text": "Tim chose the pastries.  238",
      "answer": "Tim chose the pastries. active"
     },
     {
      "n": 3,
      "text": "Christine had driven about thirty or forty miles that day.",
      "answer": "Christine had driven about thirty or forty miles that day. active"
     },
     {
      "n": 4,
      "text": "Little Suzie' s picture was taken by her grandmother.",
      "answer": "Little Suzie’ s picture was taken by her grandmother. passive"
     },
     {
      "n": 5,
      "text": "We are cooking something for lunch.",
      "answer": "We are cooking something for lunch. active"
     }
    ],
    "answers": {
     "1": "The landscaper was hired by her neighbor. passive",
     "2": "Tim chose the pastries. active",
     "3": "Christine had driven about thirty or forty miles that day. active",
     "4": "Little Suzie’ s picture was taken by her grandmother. passive",
     "5": "We are cooking something for lunch. active"
    }
   },
   {
    "code": "52.2",
    "instruction": "In the passive sentences below, underline the passive be helping verb and put a squiggly line under the past participle form of the verb that follows it.",
    "sample": "Sample: Roller-coasters are designed by that company.",
    "items": [
     {
      "n": 1,
      "text": "Amazing results are produced by that approach.",
      "answer": "Amazing results are produced by that approach"
     },
     {
      "n": 2,
      "text": "Marjorie Kelly was given first prize by the judges.",
      "answer": "Marjorie Kelly was given first prize by the judges"
     },
     {
      "n": 3,
      "text": "Those words were spoken byAbraham Lincoln.",
      "answer": "Those words were spoken byAbraham Lincoln"
     },
     {
      "n": 4,
      "text": "This actor' s suit was designed byArmani. 5 . O n eh u n d r e dn e wa irplanesw e r eo r d e r e db y Singapore Airlines.",
      "answer": "This actor’ s suit was designed byArmani. 5 . O n eh undredn e wa irplaneswere ordered by Singapore Airlines"
     }
    ],
    "answers": {
     "1": "Amazing results are produced by that approach",
     "2": "Marjorie Kelly was given first prize by the judges",
     "3": "Those words were spoken byAbraham Lincoln",
     "4": "This actor’ s suit was designed byArmani. 5 . O n eh undredn e wa irplaneswere ordered by Singapore Airlines"
    }
   },
   {
    "code": "52.3",
    "instruction": "Convert each active sentence below to its related passive sentence.",
    "sample": "Sample: The principal gave my class the award. My class was given the award by the principal.",
    "items": [
     {
      "n": 1,
      "text": "The tenant filed the complaint.",
      "answer": "The complaint was filed by the tenant"
     },
     {
      "n": 2,
      "text": "The advertising agency presents many ideas.",
      "answer": "Many ideas are presented by the advertising agency"
     },
     {
      "n": 3,
      "text": "The politicians analyze the questionnaires.",
      "answer": "The questionnaires are analyzed by the politicians"
     },
     {
      "n": 4,
      "text": "Flood damaged their house.",
      "answer": "Their house was damaged by £ood"
     },
     {
      "n": 5,
      "text": "My colleagues complimented me.",
      "answer": "I was complimented by my colleagues"
     }
    ],
    "answers": {
     "1": "The complaint was filed by the tenant",
     "2": "Many ideas are presented by the advertising agency",
     "3": "The questionnaires are analyzed by the politicians",
     "4": "Their house was damaged by £ood",
     "5": "I was complimented by my colleagues"
    }
   },
   {
    "code": "52.4",
    "instruction": "Convert each passive sentence below to its related active sentence.",
    "sample": "Sample: The message was read by the old man. The old man read the message.",
    "items": [
     {
      "n": 1,
      "text": "Graham is touched by her remarks.",
      "answer": "Her remarks touch Graham"
     },
     {
      "n": 2,
      "text": "The tower was built by a well-known architect.",
      "answer": "Awell-known architect built the tower. 3 . T h ea l a r mb e l lb r e a k st h es ilence"
     },
     {
      "n": 3,
      "text": "The silence is broken by the alarm bell.",
      "answer": ""
     },
     {
      "n": 4,
      "text": "Mexico was conquered by Cortez.",
      "answer": "Cortez conquered Mexico"
     },
     {
      "n": 5,
      "text": "Chinese is spoken by more than a billion people.",
      "answer": "More than a billion people speak Chinese"
     }
    ],
    "answers": {
     "1": "Her remarks touch Graham",
     "2": "Awell-known architect built the tower. 3 . T h ea l a r mb e l lb r e a k st h es ilence",
     "4": "Cortez conquered Mexico",
     "5": "More than a billion people speak Chinese"
    }
   },
   {
    "code": "52.5",
    "instruction": "Each of the sentences below contains the word by . Decide if it is being used as a marker of the passive or to indicate location.",
    "sample": "Sample: There were too many cars parked by the school. location",
    "items": [
     {
      "n": 1,
      "text": "The trooper is pleased by the strategy.",
      "answer": "The trooper is pleased by the strategy. passive"
     },
     {
      "n": 2,
      "text": "The building by the bank is new.",
      "answer": "The building by the bank is new. location 250"
     },
     {
      "n": 3,
      "text": "He was confused by that new information.",
      "answer": "He was confused by that new information. passive"
     },
     {
      "n": 4,
      "text": "This afternoon we rested by the pond.",
      "answer": "This afternoon we rested by the pond. location"
     },
     {
      "n": 5,
      "text": "The rally was attended by college students.",
      "answer": "The rally was attended by college students. passive"
     }
    ],
    "answers": {
     "1": "The trooper is pleased by the strategy. passive",
     "2": "The building by the bank is new. location 250",
     "3": "He was confused by that new information. passive",
     "4": "This afternoon we rested by the pond. location",
     "5": "The rally was attended by college students. passive"
    }
   },
   {
    "code": "52.6",
    "instruction": "Underlinet h ef o r mo ft h ep assivebe helping verb in the passive sentences below. Remember that it will always be the last helping verb in a passive sentence.",
    "sample": "",
    "items": [],
    "answers": {
     "1": "My office is being redecorated by two newcomers to the field",
     "2": "The stop had been planned by the tour guide",
     "3": "Her house might have been damaged by the storm",
     "4": "This book should be read by curious students",
     "5": "The long awaited picture will be unveiled by the painter next Sunday"
    }
   },
   {
    "code": "52.7",
    "instruction": "Each of the sentences below is an active sentence with one or more helping verbs. Convert each active sentence below to its related passive sentence.",
    "sample": "Sample: Matt should read this newspaper. This newspaper should be read by Matt.",
    "items": [
     {
      "n": 1,
      "text": "The tenants have filed the complaint.",
      "answer": "The complaint has been filed by the tenants"
     },
     {
      "n": 2,
      "text": "The advertising agency is presenting the ideas.",
      "answer": "The ideas are being presented by the advertising agency"
     },
     {
      "n": 3,
      "text": "The politicians have analyzed the questionnaires.",
      "answer": "The questionnaires have been analyzed by the politicians"
     },
     {
      "n": 4,
      "text": "The author should have given a more interesting speech.",
      "answer": "A more interesting speech should have been given by the author"
     },
     {
      "n": 5,
      "text": "I might have forgotten the whole thing.",
      "answer": "The whole thing might have been forgotten by me"
     }
    ],
    "answers": {
     "1": "The complaint has been filed by the tenants",
     "2": "The ideas are being presented by the advertising agency",
     "3": "The questionnaires have been analyzed by the politicians",
     "4": "A more interesting speech should have been given by the author",
     "5": "The whole thing might have been forgotten by me"
    }
   },
   {
    "code": "52.8",
    "instruction": "Each of the sentences below is a passive sentence. Decide if it is a full passive or a truncated passive. Look for the by + noun phrase to help you decide.",
    "sample": "Sample: The game was lost by the team. full passive",
    "items": [
     {
      "n": 1,
      "text": "The stories of his wealth have been exaggerated by others.",
      "answer": "The stories of his wealth have been exaggerated by others. full passive"
     },
     {
      "n": 2,
      "text": "That bestseller was written by Tony Martin.  3 . T h eb r i d g eh a sb e e nr epaired .",
      "answer": "That best-seller was written by Tony Martin. full passive 3 . T h eb r i d g eh a sb e e nr epaired . truncated passive"
     },
     {
      "n": 4,
      "text": "The store is being watched.",
      "answer": "The store is being watched. truncated passive"
     },
     {
      "n": 5,
      "text": "We should have been warned by the contractor.",
      "answer": "We should have been warned by the contractor. full passive"
     }
    ],
    "answers": {
     "1": "The stories of his wealth have been exaggerated by others. full passive",
     "2": "That best-seller was written by Tony Martin. full passive 3 . T h eb r i d g eh a sb e e nr epaired . truncated passive",
     "4": "The store is being watched. truncated passive",
     "5": "We should have been warned by the contractor. full passive"
    }
   },
   {
    "code": "52.9",
    "instruction": "Decide if the following sentences are active or passive. Some of the passives are truncated.",
    "sample": "Sample: The chef is making a sauce for the pasta. active",
    "items": [
     {
      "n": 1,
      "text": "The celebrity was spotted at eight in the morning.",
      "answer": "The celebrity was spotted at eight in the morning. passive"
     },
     {
      "n": 2,
      "text": "Tom is carrying two large glasses.",
      "answer": "Tom is carrying two large glasses. active"
     },
     {
      "n": 3,
      "text": "The old man might have been looking at his host suspiciously.",
      "answer": "The old man might have been looking at his host suspiciously. active"
     },
     {
      "n": 4,
      "text": "The company was sold.",
      "answer": "The company was sold. passive"
     },
     {
      "n": 5,
      "text": "The stop had been planned by the tour guide.",
      "answer": "The stop had been planned by the tour guide. passive"
     }
    ],
    "answers": {
     "1": "The celebrity was spotted at eight in the morning. passive",
     "2": "Tom is carrying two large glasses. active",
     "3": "The old man might have been looking at his host suspiciously. active",
     "4": "The company was sold. passive",
     "5": "The stop had been planned by the tour guide. passive"
    }
   },
   {
    "code": "53.1",
    "instruction": "For each of the sentences below, insert the word not to make the sentence negative.",
    "sample": "Sample: I should turn around. I should not turn around. 246",
    "items": [
     {
      "n": 1,
      "text": "Nate has been busy lately.",
      "answer": "Nate has not been busy lately"
     },
     {
      "n": 2,
      "text": "Y ou might ask your father.",
      "answer": "You might not ask your father"
     },
     {
      "n": 3,
      "text": "Interest rates are going up.",
      "answer": "Interest rates are not going up"
     },
     {
      "n": 4,
      "text": "It could have been a hurricane.",
      "answer": "It could not have been a hurricane"
     },
     {
      "n": 5,
      "text": "I will be playing soccer tomorrow.",
      "answer": "I will not be playing soccer tomorrow"
     }
    ],
    "answers": {
     "1": "Nate has not been busy lately",
     "2": "You might not ask your father",
     "3": "Interest rates are not going up",
     "4": "It could not have been a hurricane",
     "5": "I will not be playing soccer tomorrow"
    }
   }
  ],
  "exercises": [
   {
    "q": "They brought their concerns to the clergyman.",
    "type": "input",
    "answer": "They brought the clergyman their concerns",
    "source": "51.1",
    "instruction": "Change each sentence below into its related' 'partner, ' ' using the examples above as a guide.",
    "explanation": "Respuesta del libro: They brought the clergyman their concerns"
   },
   {
    "q": "I have an idea you'll like this movie.",
    "type": "input",
    "answer": "I have an idea that you’ll like this movie",
    "source": "51.1",
    "instruction": "Change each sentence below into its related' 'partner, ' ' using the examples above as a guide.",
    "explanation": "Respuesta del libro: I have an idea that you’ll like this movie"
   },
   {
    "q": "Y ou should hand your ticket to the ffight attendant.",
    "type": "input",
    "answer": "You should hand the £ight attendant your ticket",
    "source": "51.1",
    "instruction": "Change each sentence below into its related' 'partner, ' ' using the examples above as a guide.",
    "explanation": "Respuesta del libro: You should hand the £ight attendant your ticket"
   },
   {
    "q": "By noon, Jackie had turned in her assignment.",
    "type": "input",
    "answer": "By noon, Jackie had turned her assignment in",
    "source": "51.1",
    "instruction": "Change each sentence below into its related' 'partner, ' ' using the examples above as a guide.",
    "explanation": "Respuesta del libro: By noon, Jackie had turned her assignment in"
   },
   {
    "q": "I ordered you your favorite book.",
    "type": "input",
    "answer": "I ordered your favorite book for you",
    "source": "51.1",
    "instruction": "Change each sentence below into its related' 'partner, ' ' using the examples above as a guide.",
    "explanation": "Respuesta del libro: I ordered your favorite book for you"
   },
   {
    "q": "The landscaper was hired by her neighbor.",
    "type": "input",
    "answer": "The landscaper was hired by her neighbor. passive",
    "source": "52.1",
    "instruction": "Decide if each sentence is active or passive.To help you decide, see if the subject (doer of the action) is before or after the verb.",
    "explanation": "Respuesta del libro: The landscaper was hired by her neighbor. passive"
   },
   {
    "q": "Tim chose the pastries.  238",
    "type": "input",
    "answer": "Tim chose the pastries. active",
    "source": "52.1",
    "instruction": "Decide if each sentence is active or passive.To help you decide, see if the subject (doer of the action) is before or after the verb.",
    "explanation": "Respuesta del libro: Tim chose the pastries. active"
   },
   {
    "q": "Christine had driven about thirty or forty miles that day.",
    "type": "input",
    "answer": "Christine had driven about thirty or forty miles that day. active",
    "source": "52.1",
    "instruction": "Decide if each sentence is active or passive.To help you decide, see if the subject (doer of the action) is before or after the verb.",
    "explanation": "Respuesta del libro: Christine had driven about thirty or forty miles that day. active"
   },
   {
    "q": "Little Suzie' s picture was taken by her grandmother.",
    "type": "input",
    "answer": "Little Suzie’ s picture was taken by her grandmother. passive",
    "source": "52.1",
    "instruction": "Decide if each sentence is active or passive.To help you decide, see if the subject (doer of the action) is before or after the verb.",
    "explanation": "Respuesta del libro: Little Suzie’ s picture was taken by her grandmother. passive"
   },
   {
    "q": "We are cooking something for lunch.",
    "type": "input",
    "answer": "We are cooking something for lunch. active",
    "source": "52.1",
    "instruction": "Decide if each sentence is active or passive.To help you decide, see if the subject (doer of the action) is before or after the verb.",
    "explanation": "Respuesta del libro: We are cooking something for lunch. active"
   },
   {
    "q": "Amazing results are produced by that approach.",
    "type": "input",
    "answer": "Amazing results are produced by that approach",
    "source": "52.2",
    "instruction": "In the passive sentences below, underline the passive be helping verb and put a squiggly line under the past participle form of the verb that follows it.",
    "explanation": "Respuesta del libro: Amazing results are produced by that approach"
   },
   {
    "q": "Marjorie Kelly was given first prize by the judges.",
    "type": "input",
    "answer": "Marjorie Kelly was given first prize by the judges",
    "source": "52.2",
    "instruction": "In the passive sentences below, underline the passive be helping verb and put a squiggly line under the past participle form of the verb that follows it.",
    "explanation": "Respuesta del libro: Marjorie Kelly was given first prize by the judges"
   },
   {
    "q": "Those words were spoken byAbraham Lincoln.",
    "type": "input",
    "answer": "Those words were spoken byAbraham Lincoln",
    "source": "52.2",
    "instruction": "In the passive sentences below, underline the passive be helping verb and put a squiggly line under the past participle form of the verb that follows it.",
    "explanation": "Respuesta del libro: Those words were spoken byAbraham Lincoln"
   },
   {
    "q": "This actor' s suit was designed byArmani. 5 . O n eh u n d r e dn e wa irplanesw e r eo r d e r e db y Singapore Airlines.",
    "type": "input",
    "answer": "This actor’ s suit was designed byArmani. 5 . O n eh undredn e wa irplaneswere ordered by Singapore Airlines",
    "source": "52.2",
    "instruction": "In the passive sentences below, underline the passive be helping verb and put a squiggly line under the past participle form of the verb that follows it.",
    "explanation": "Respuesta del libro: This actor’ s suit was designed byArmani. 5 . O n eh undredn e wa irplaneswere ordered by Singapore Airlines"
   },
   {
    "q": "The tenant filed the complaint.",
    "type": "input",
    "answer": "The complaint was filed by the tenant",
    "source": "52.3",
    "instruction": "Convert each active sentence below to its related passive sentence.",
    "explanation": "Respuesta del libro: The complaint was filed by the tenant"
   },
   {
    "q": "The advertising agency presents many ideas.",
    "type": "input",
    "answer": "Many ideas are presented by the advertising agency",
    "source": "52.3",
    "instruction": "Convert each active sentence below to its related passive sentence.",
    "explanation": "Respuesta del libro: Many ideas are presented by the advertising agency"
   },
   {
    "q": "The politicians analyze the questionnaires.",
    "type": "input",
    "answer": "The questionnaires are analyzed by the politicians",
    "source": "52.3",
    "instruction": "Convert each active sentence below to its related passive sentence.",
    "explanation": "Respuesta del libro: The questionnaires are analyzed by the politicians"
   },
   {
    "q": "Flood damaged their house.",
    "type": "input",
    "answer": "Their house was damaged by £ood",
    "source": "52.3",
    "instruction": "Convert each active sentence below to its related passive sentence.",
    "explanation": "Respuesta del libro: Their house was damaged by £ood"
   },
   {
    "q": "My colleagues complimented me.",
    "type": "input",
    "answer": "I was complimented by my colleagues",
    "source": "52.3",
    "instruction": "Convert each active sentence below to its related passive sentence.",
    "explanation": "Respuesta del libro: I was complimented by my colleagues"
   },
   {
    "q": "Graham is touched by her remarks.",
    "type": "input",
    "answer": "Her remarks touch Graham",
    "source": "52.4",
    "instruction": "Convert each passive sentence below to its related active sentence.",
    "explanation": "Respuesta del libro: Her remarks touch Graham"
   },
   {
    "q": "The tower was built by a well-known architect.",
    "type": "input",
    "answer": "Awell-known architect built the tower. 3 . T h ea l a r mb e l lb r e a k st h es ilence",
    "source": "52.4",
    "instruction": "Convert each passive sentence below to its related active sentence.",
    "explanation": "Respuesta del libro: Awell-known architect built the tower. 3 . T h ea l a r mb e l lb r e a k st h es ilence"
   },
   {
    "q": "The silence is broken by the alarm bell.",
    "type": "input",
    "answer": "",
    "source": "52.4",
    "instruction": "Convert each passive sentence below to its related active sentence.",
    "explanation": ""
   },
   {
    "q": "Mexico was conquered by Cortez.",
    "type": "input",
    "answer": "Cortez conquered Mexico",
    "source": "52.4",
    "instruction": "Convert each passive sentence below to its related active sentence.",
    "explanation": "Respuesta del libro: Cortez conquered Mexico"
   },
   {
    "q": "Chinese is spoken by more than a billion people.",
    "type": "input",
    "answer": "More than a billion people speak Chinese",
    "source": "52.4",
    "instruction": "Convert each passive sentence below to its related active sentence.",
    "explanation": "Respuesta del libro: More than a billion people speak Chinese"
   },
   {
    "q": "The trooper is pleased by the strategy.",
    "type": "input",
    "answer": "The trooper is pleased by the strategy. passive",
    "source": "52.5",
    "instruction": "Each of the sentences below contains the word by . Decide if it is being used as a marker of the passive or to indicate location.",
    "explanation": "Respuesta del libro: The trooper is pleased by the strategy. passive"
   },
   {
    "q": "The building by the bank is new.",
    "type": "input",
    "answer": "The building by the bank is new. location 250",
    "source": "52.5",
    "instruction": "Each of the sentences below contains the word by . Decide if it is being used as a marker of the passive or to indicate location.",
    "explanation": "Respuesta del libro: The building by the bank is new. location 250"
   },
   {
    "q": "He was confused by that new information.",
    "type": "input",
    "answer": "He was confused by that new information. passive",
    "source": "52.5",
    "instruction": "Each of the sentences below contains the word by . Decide if it is being used as a marker of the passive or to indicate location.",
    "explanation": "Respuesta del libro: He was confused by that new information. passive"
   },
   {
    "q": "This afternoon we rested by the pond.",
    "type": "input",
    "answer": "This afternoon we rested by the pond. location",
    "source": "52.5",
    "instruction": "Each of the sentences below contains the word by . Decide if it is being used as a marker of the passive or to indicate location.",
    "explanation": "Respuesta del libro: This afternoon we rested by the pond. location"
   },
   {
    "q": "The rally was attended by college students.",
    "type": "input",
    "answer": "The rally was attended by college students. passive",
    "source": "52.5",
    "instruction": "Each of the sentences below contains the word by . Decide if it is being used as a marker of the passive or to indicate location.",
    "explanation": "Respuesta del libro: The rally was attended by college students. passive"
   },
   {
    "q": "The tenants have filed the complaint.",
    "type": "input",
    "answer": "The complaint has been filed by the tenants",
    "source": "52.7",
    "instruction": "Each of the sentences below is an active sentence with one or more helping verbs. Convert each active sentence below to its related passive sentence.",
    "explanation": "Respuesta del libro: The complaint has been filed by the tenants"
   },
   {
    "q": "The advertising agency is presenting the ideas.",
    "type": "input",
    "answer": "The ideas are being presented by the advertising agency",
    "source": "52.7",
    "instruction": "Each of the sentences below is an active sentence with one or more helping verbs. Convert each active sentence below to its related passive sentence.",
    "explanation": "Respuesta del libro: The ideas are being presented by the advertising agency"
   },
   {
    "q": "The politicians have analyzed the questionnaires.",
    "type": "input",
    "answer": "The questionnaires have been analyzed by the politicians",
    "source": "52.7",
    "instruction": "Each of the sentences below is an active sentence with one or more helping verbs. Convert each active sentence below to its related passive sentence.",
    "explanation": "Respuesta del libro: The questionnaires have been analyzed by the politicians"
   },
   {
    "q": "The author should have given a more interesting speech.",
    "type": "input",
    "answer": "A more interesting speech should have been given by the author",
    "source": "52.7",
    "instruction": "Each of the sentences below is an active sentence with one or more helping verbs. Convert each active sentence below to its related passive sentence.",
    "explanation": "Respuesta del libro: A more interesting speech should have been given by the author"
   },
   {
    "q": "I might have forgotten the whole thing.",
    "type": "input",
    "answer": "The whole thing might have been forgotten by me",
    "source": "52.7",
    "instruction": "Each of the sentences below is an active sentence with one or more helping verbs. Convert each active sentence below to its related passive sentence.",
    "explanation": "Respuesta del libro: The whole thing might have been forgotten by me"
   },
   {
    "q": "The stories of his wealth have been exaggerated by others.",
    "type": "input",
    "answer": "The stories of his wealth have been exaggerated by others. full passive",
    "source": "52.8",
    "instruction": "Each of the sentences below is a passive sentence. Decide if it is a full passive or a truncated passive. Look for the by + noun phrase to help you decide.",
    "explanation": "Respuesta del libro: The stories of his wealth have been exaggerated by others. full passive"
   },
   {
    "q": "That bestseller was written by Tony Martin.  3 . T h eb r i d g eh a sb e e nr epaired .",
    "type": "input",
    "answer": "That best-seller was written by Tony Martin. full passive 3 . T h eb r i d g eh a sb e e nr epaired . truncated passive",
    "source": "52.8",
    "instruction": "Each of the sentences below is a passive sentence. Decide if it is a full passive or a truncated passive. Look for the by + noun phrase to help you decide.",
    "explanation": "Respuesta del libro: That best-seller was written by Tony Martin. full passive 3 . T h eb r i d g eh a sb e e nr epaired . truncated passive"
   },
   {
    "q": "The store is being watched.",
    "type": "input",
    "answer": "The store is being watched. truncated passive",
    "source": "52.8",
    "instruction": "Each of the sentences below is a passive sentence. Decide if it is a full passive or a truncated passive. Look for the by + noun phrase to help you decide.",
    "explanation": "Respuesta del libro: The store is being watched. truncated passive"
   },
   {
    "q": "We should have been warned by the contractor.",
    "type": "input",
    "answer": "We should have been warned by the contractor. full passive",
    "source": "52.8",
    "instruction": "Each of the sentences below is a passive sentence. Decide if it is a full passive or a truncated passive. Look for the by + noun phrase to help you decide.",
    "explanation": "Respuesta del libro: We should have been warned by the contractor. full passive"
   },
   {
    "q": "The celebrity was spotted at eight in the morning.",
    "type": "input",
    "answer": "The celebrity was spotted at eight in the morning. passive",
    "source": "52.9",
    "instruction": "Decide if the following sentences are active or passive. Some of the passives are truncated.",
    "explanation": "Respuesta del libro: The celebrity was spotted at eight in the morning. passive"
   },
   {
    "q": "Tom is carrying two large glasses.",
    "type": "input",
    "answer": "Tom is carrying two large glasses. active",
    "source": "52.9",
    "instruction": "Decide if the following sentences are active or passive. Some of the passives are truncated.",
    "explanation": "Respuesta del libro: Tom is carrying two large glasses. active"
   }
  ],
  "answerKeys": {
   "51.1": {
    "1": "They brought the clergyman their concerns",
    "2": "I have an idea that you’ll like this movie",
    "3": "You should hand the £ight attendant your ticket",
    "4": "By noon, Jackie had turned her assignment in",
    "5": "I ordered your favorite book for you"
   },
   "52.1": {
    "1": "The landscaper was hired by her neighbor. passive",
    "2": "Tim chose the pastries. active",
    "3": "Christine had driven about thirty or forty miles that day. active",
    "4": "Little Suzie’ s picture was taken by her grandmother. passive",
    "5": "We are cooking something for lunch. active"
   },
   "52.2": {
    "1": "Amazing results are produced by that approach",
    "2": "Marjorie Kelly was given first prize by the judges",
    "3": "Those words were spoken byAbraham Lincoln",
    "4": "This actor’ s suit was designed byArmani. 5 . O n eh undredn e wa irplaneswere ordered by Singapore Airlines"
   },
   "52.3": {
    "1": "The complaint was filed by the tenant",
    "2": "Many ideas are presented by the advertising agency",
    "3": "The questionnaires are analyzed by the politicians",
    "4": "Their house was damaged by £ood",
    "5": "I was complimented by my colleagues"
   },
   "52.4": {
    "1": "Her remarks touch Graham",
    "2": "Awell-known architect built the tower. 3 . T h ea l a r mb e l lb r e a k st h es ilence",
    "4": "Cortez conquered Mexico",
    "5": "More than a billion people speak Chinese"
   },
   "52.5": {
    "1": "The trooper is pleased by the strategy. passive",
    "2": "The building by the bank is new. location 250",
    "3": "He was confused by that new information. passive",
    "4": "This afternoon we rested by the pond. location",
    "5": "The rally was attended by college students. passive"
   },
   "52.6": {
    "1": "My office is being redecorated by two newcomers to the field",
    "2": "The stop had been planned by the tour guide",
    "3": "Her house might have been damaged by the storm",
    "4": "This book should be read by curious students",
    "5": "The long awaited picture will be unveiled by the painter next Sunday"
   },
   "52.7": {
    "1": "The complaint has been filed by the tenants",
    "2": "The ideas are being presented by the advertising agency",
    "3": "The questionnaires have been analyzed by the politicians",
    "4": "A more interesting speech should have been given by the author",
    "5": "The whole thing might have been forgotten by me"
   },
   "52.8": {
    "1": "The stories of his wealth have been exaggerated by others. full passive",
    "2": "That best-seller was written by Tony Martin. full passive 3 . T h eb r i d g eh a sb e e nr epaired . truncated passive",
    "4": "The store is being watched. truncated passive",
    "5": "We should have been warned by the contractor. full passive"
   },
   "52.9": {
    "1": "The celebrity was spotted at eight in the morning. passive",
    "2": "Tom is carrying two large glasses. active",
    "3": "The old man might have been looking at his host suspiciously. active",
    "4": "The company was sold. passive",
    "5": "The stop had been planned by the tour guide. passive"
   },
   "53.1": {
    "1": "Nate has not been busy lately",
    "2": "You might not ask your father",
    "3": "Interest rates are not going up",
    "4": "It could not have been a hurricane",
    "5": "I will not be playing soccer tomorrow"
   },
   "53.2": {
    "1": "This path will not lead you to the stable",
    "2": "Frank had not been walking for hours",
    "3": "Mr. Clay did not return as soon as he could",
    "4": "The principal of this school is not thinking about retiring",
    "5": "They do not have a swimming pool."
   }
  }
 }
];
