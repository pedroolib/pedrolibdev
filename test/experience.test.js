import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const page = await readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8');

test('lists the current VantTec role before the completed roles', () => {
  assert.ok(page.indexOf("name: 'VantTec'") < page.indexOf("name: 'Botbusters'"));
});

test('resume index keeps the resume PDF order and the anchors the PDF links to', () => {
  const slugs = [...page.matchAll(/\bslug: '([a-z-]+)'/g)].map((m) => m[1]);
  assert.deepEqual(slugs, ['vanttec', 'ucsd', 'innobotics', 'uribot', 'sentinelbox', 'smart-tractor']);
});
