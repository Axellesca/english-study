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

## Acceptance criteria
- Module loads at `http://127.0.0.1/ingles/Cambridge_Grammar/` with 0 console errors. ✅
- Each unit has theory + interactive exercises with check/explanation + practice + tips. ✅ (exercises with keys; practice reveal-answer; tips tab)
- Portal card navigates to the module. ✅ `#card-cambridge-grammar`
- `node tests/structural-check.js` still PASS. ✅

## Route
Direct inline (subagentes no disponibles en este runtime).

## Progress
- 2026-09-23: T1 done — extract_cambridge.py wrote full text + outline JSON.
- 2026-09-23: T2–T6 done — gen_datajs.py → Cambridge_Grammar/data.js (596 KB, 17 units); module scaffold; portal cards; smoke PASS (unitCount 17, theory 5, practice 14, exercises 40, tips 7, portalCard 1, errors []).

## Delivery forecast
~4 files module + portal edit — single work-unit commit under ~400 line authoring heuristic for source (data.js is generated).

## Checks
- `node --check Cambridge_Grammar/data.js` / `app.js` PASS
- `node tests/structural-check.js` PASS (8 keys)
- HTTP 200: portal, module, data.js, app.js, style.css, PDF
- browser-automation smoke: 0 console errors, 0 failed requests
