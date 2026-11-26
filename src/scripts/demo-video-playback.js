// Plays a card video while it is shown (not a hidden slide) and on screen.
export function syncDemoVideoPlayback(video, onScreen) {
  if (onScreen && !video.hasAttribute('hidden')) return video.play().catch(() => {});

  video.pause();
  return Promise.resolve();
}
