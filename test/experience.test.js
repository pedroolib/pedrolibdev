import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const page = await readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8');

test('lists SMALC as a 2026 robotics education volunteer experience', () => {
  assert.match(
    page,
    /\{ year: '26', name: 'SMALC', tags: 'Robotics Education Volunteer', id: null \}/
  );
});

test('lists the current VantTec role before the completed SMALC role', () => {
  assert.ok(page.indexOf("name: 'Vanttec'") < page.indexOf("name: 'SMALC'"));
});
