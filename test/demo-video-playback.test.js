import assert from 'node:assert/strict';
import test from 'node:test';

import { syncDemoVideoPlayback } from '../src/scripts/demo-video-playback.js';

function makeVideo({ hidden = false } = {}) {
  const calls = [];
  return {
    calls,
    hasAttribute: (name) => name === 'hidden' && hidden,
    setHidden: (value) => {
      hidden = value;
    },
    pause: () => calls.push('pause'),
    play: () => {
      calls.push('play');
      return Promise.resolve();
    },
  };
}

function makeCard({ hovered = false, focused = false } = {}) {
  return {
    matches: (selector) =>
      (selector === ':hover' && hovered) || (selector === ':focus-within' && focused),
  };
}

test('plays a video when its slide returns while the card is still hovered', async () => {
  const video = makeVideo();
  const card = makeCard({ hovered: true });

  await syncDemoVideoPlayback(video, card);
  video.setHidden(true);
  await syncDemoVideoPlayback(video, card);
  video.setHidden(false);
  await syncDemoVideoPlayback(video, card);

  assert.deepEqual(video.calls, ['play', 'pause', 'play']);
});
