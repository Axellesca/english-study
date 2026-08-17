import os
import sys

files_to_check = [
    'A1/modulo2/index.html',
    'A1/modulo2/style.css',
    'A1/modulo2/app.js',
    'index.html',
    'A1/index.html'
]

print("=== 1. Checking files existence and size ===")
for f in files_to_check:
    if os.path.exists(f):
        print(f"[OK] {f} exists ({os.path.getsize(f)} bytes)")
    else:
        print(f"[FAIL] {f} NOT FOUND")

print("\n=== 2. Checking HTML structure and IDs in modulo2/index.html ===")
with open('A1/modulo2/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

required_ids = [
    'dashboard-page', 'lessons-page', 'grammar-page', 'vocabulary-page',
    'pronunciation-page', 'exercises-page', 'certificate-page',
    'overall-progress-text', 'overall-progress-fill', 'score-counter', 'accuracy-counter',
    'voice-accent-selector', 'voice-speed-slider', 'dashboard-percentage', 'circle-progress',
    'active-lesson-title', 'lesson-theory', 'lesson-vocab', 'lesson-exercises',
    'lesson-quiz-indicator', 'lesson-quiz-score', 'lesson-quiz-area', 'lesson-quiz-feedback',
    'btn-submit-lesson-quiz', 'btn-next-lesson-quiz', 'grammar-bank-theory-content',
    'grammar-bank-indicator', 'grammar-bank-score', 'grammar-bank-exercise-area',
    'grammar-bank-feedback', 'btn-submit-grammar-bank', 'btn-next-grammar-bank',
    'vocab-content-list', 'vocab-content-flashcards', 'vocab-content-game',
    'vcard-front-text', 'vcard-back-text', 'vcard-back-phonetic', 'vocab-card-counter',
    'vocab-flashcard-element', 'vocab-matching-grid-container', 'game-attempts-val', 'game-errors-val',
    'phonemes-module-grid', 'ex-category-title', 'exercises-score', 'exercises-dynamic-list',
    'cert-locked-panel', 'cert-unlocked-panel', 'cert-progress-fill-bar', 'cert-progress-status-val',
    'cert-name-input', 'cert-display-name', 'cert-issue-date'
]

missing_ids = []
for req_id in required_ids:
    if f'id="{req_id}"' not in html and f"id='{req_id}'" not in html:
        missing_ids.append(req_id)

if not missing_ids:
    print(f"[OK] All {len(required_ids)} crucial DOM elements / IDs are present in HTML!")
else:
    print(f"[FAIL] Missing IDs: {missing_ids}")

print("\n=== 3. Validating app.js database and syntax structure ===")
with open('A1/modulo2/app.js', 'r', encoding='utf-8') as f:
    js = f.read()

checks = {
    'AudioSynth Object': 'const AudioSynth' in js,
    'lessonsDatabase (4A, 4B, 4C, RC4)': 'const lessonsDatabase' in js and all(k in js for k in ['"4A":', '"4B":', '"4C":', '"RC4":']),
    'grammarBank4Database': 'const grammarBank4Database' in js,
    'vocabBank4Data': 'const vocabBank4Data' in js and all(k in js for k in ['family:', 'routine:', 'frequency:', 'prepositions:']),
    'app master object': 'const app =' in js,
    'localStorage handling': 'localStorage.getItem' in js and 'localStorage.setItem' in js,
    'DOMContentLoaded listener': 'DOMContentLoaded' in js
}

for name, passed in checks.items():
    print(f"{'[OK]' if passed else '[FAIL]'} {name}")
