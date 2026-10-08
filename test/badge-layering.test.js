import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const styles = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8');

test('playground badges have an explicit layer above the video frame', () => {
  assert.match(
    styles,
    /\.about-next-btn,\s*\.repo-float\s*\{[^}]*z-index:\s*2;/s
  );
  assert.match(styles, /\.about-next-float,\s*\.repo-float\s*\{[^}]*z-index:\s*3;/s);
});
