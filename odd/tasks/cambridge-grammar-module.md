# ODD Feature: Cambridge Grammar Module

## Objective
Create a dedicated interactive module for `book/Cambridge_English_Grammar.pdf` (English Grammar: Understanding the Basics, Altenberg & Vago, Cambridge), linked from the portal index below Books & Readers, with theory, exercises, practice and quick tips extracted from the book.

## Why
User added the Cambridge grammar PDF and wants a standalone study module (not just a book modal) with practice built from the book content.

## Scope
- New folder `Cambridge_Grammar/` with index.html, data.js, app.js, style.css (pattern: A1/modulo2).
- Portal `index.html`: new section + module card under Books & Readers linking to the module (plus PDF card in books grid optional).
- Content extracted from PDF: per unit — theory, Test yourself (converted to interactive exercises), Getting started practice, Quick tips, answers.
- Spanish UI, English technical artifacts; cream/teal visual identity.

## Constraints
- Do NOT rename JS-critical classes/IDs (`.nav-item`, `data-target`, `.page-section`, `.tab-btn[data-tab]`, etc.).
- Pure static (no build). data.js loads before app.js.
- Work unit commit at end (Conventional Commits, no AI attribution).

## Checklist
- [x] T1: Extract outline + full PDF text (286 pages, 133 outline nodes)
- [x] T2: Build structured content JSON (units → theory/exercises/practice/tips/answers) — 17 units, 720 raw exercises → 40/unit cap in data.js
- [x] T3: Write ODD feature doc (this file) + Engram mirror
- [x] T4: Implement Cambridge_Grammar/ (index, data, app, style)
- [x] T5: Add portal section under Books & Readers (book card + Grammar Workshop module card)
- [x] T6: Structural check + browser smoke
- [x] T7: Work-unit commit
- [x] T8: Enrich exercise answer keys (parse answer-key pages fully; map more Getting started / Test yourself items)
- [x] T9: Polish theory in Spanish (unit-level Spanish explanations alongside English examples)

## Acceptance criteria
- Module loads at `http://127.0.0.1/ingles/Cambridge_Grammar/` with 0 console errors. ✅
- Each unit has theory + interactive exercises with check/explanation + practice + tips. ✅ (exercises with keys; practice reveal-answer; tips tab)
- Portal card navigates to the module. ✅ `#card-cambridge-grammar`
- `node tests/structural-check.js` still PASS. ✅
- T8: Higher % of practice items and exercises have usable answer keys. ✅ 99% practice (726/735), 99% exercises (733/742); U5 repaired from 0 to 15/15 practice + 29 exercises.
- T9: Theory tab shows clear Spanish explanations for each unit. ✅ theoryEsHtml on all 17 units, rendered first under "Resumen en español".

## Route
Direct inline (subagentes no disponibles en este runtime).

## Progress
- 2026-09-23: T1 done — extract_cambridge.py wrote full text + outline JSON.
- 2026-09-23: T2–T6 done — gen_datajs.py → Cambridge_Grammar/data.js (596 KB, 17 units); module scaffold; portal cards; smoke PASS.
- 2026-09-23: T7 done — commit `4c5a147` pushed to origin/main after user auth.
- 2026-09-24: T8–T9 done — theory_es.py (Spanish summaries 17 units); repair_units.py fixed U5; answer-key clean + OCR fixes; regen data.js (952 KB); renderTheory shows theoryEs first; smoke PASS 0 errors.

## Delivery forecast
T8+T9 regenerate data.js + possibly small app.js for Spanish theory block — one work-unit commit.

## Checks
- `node --check Cambridge_Grammar/data.js` / `app.js`
- `node tests/structural-check.js`
- HTTP 200 + browser smoke
- Answer-key coverage metric (before/after %)

## Commits
| Commit | Message |
|--------|---------|
| 4c5a147 | feat(cambridge-grammar): add interactive module from Cambridge grammar book |
| (pending) | feat(cambridge-grammar): add Spanish theory and enrich answer keys |
