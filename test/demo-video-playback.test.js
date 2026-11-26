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

test('plays a video when its slide returns while it is still on screen', async () => {
  const video = makeVideo();

  await syncDemoVideoPlayback(video, true);
  video.setHidden(true);
  await syncDemoVideoPlayback(video, true);
  video.setHidden(false);
  await syncDemoVideoPlayback(video, true);

  assert.deepEqual(video.calls, ['play', 'pause', 'play']);
});

test('pauses a video that scrolls off screen', async () => {
  const video = makeVideo();

  await syncDemoVideoPlayback(video, true);
  await syncDemoVideoPlayback(video, false);

  assert.deepEqual(video.calls, ['play', 'pause']);
});
