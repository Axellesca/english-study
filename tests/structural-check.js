/**
 * Structural check: every data-lesson key in each module's HTML must exist
 * in that module's LESSONS object.
 * Run: node tests/structural-check.js
 * Exit 0 = pass, 1 = fail.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const MODULES = ['modulo2', 'modulo3'];

function fail(msg) {
  console.error('FAIL:', msg);
  process.exit(1);
}

let failed = false;
let totalLessons = 0;
let totalCards = 0;

for (const mod of MODULES) {
  const htmlPath = path.join(root, 'A1', mod, 'index.html');
  const dataPath = path.join(root, 'A1', mod, 'data.js');

  if (!fs.existsSync(htmlPath)) fail('Missing index.html: ' + htmlPath);
  if (!fs.existsSync(dataPath)) fail('Missing data.js: ' + dataPath);

  const html = fs.readFileSync(htmlPath, 'utf8');
  const dataSrc = fs.readFileSync(dataPath, 'utf8');

  // Extract keys from LESSONS object literal via regex (data.js is plain JS, no imports)
  const lessonsMatch = dataSrc.match(/const\s+LESSONS\s*=\s*\{/);
  if (!lessonsMatch) fail('Could not find "const LESSONS = {" in ' + dataPath);

  // Collect top-level lesson keys: "4A":, "7B":, etc.
  const keyRegex = /^\s{2}"([A-Z0-9]+)":\s*\{/gm;
  const lessonKeys = new Set();
  let m;
  while ((m = keyRegex.exec(dataSrc)) !== null) {
    lessonKeys.add(m[1]);
  }
  if (lessonKeys.size === 0) fail('No lesson keys found in ' + dataPath);

  // Collect data-lesson attributes from HTML
  const cardRegex = /data-lesson="([^"]+)"/g;
  const htmlKeys = new Set();
  let c;
  while ((c = cardRegex.exec(html)) !== null) {
    htmlKeys.add(c[1]);
  }
  if (htmlKeys.size === 0) fail('No data-lesson attributes found in ' + htmlPath);

  // Every HTML key must exist in LESSONS
  const missing = [];
  for (const k of htmlKeys) {
    if (!lessonKeys.has(k)) missing.push(k);
  }
  if (missing.length > 0) {
    failed = true;
    console.error('FAIL: data-lesson keys missing from LESSONS in ' + mod + ': ' + missing.join(', '));
  }

  totalLessons += lessonKeys.size;
  totalCards += htmlKeys.size;

  console.log('PASS: ' + mod + ' structural check OK');
  console.log('  LESSONS keys (' + lessonKeys.size + '):', [...lessonKeys].sort().join(', '));
  console.log('  HTML data-lesson (' + htmlKeys.size + '):', [...htmlKeys].sort().join(', '));
}

if (failed) process.exit(1);
console.log('PASS: structural check OK for ' + MODULES.length + ' modules (' + totalLessons + ' lessons, ' + totalCards + ' cards)');
process.exit(0);
