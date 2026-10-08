export function syncDemoVideoPlayback(video, card) {
  const isVisible = !video.hasAttribute('hidden');
  const isEngaged = card.matches(':hover') || card.matches(':focus-within');

  if (isVisible && isEngaged) return video.play().catch(() => {});

  video.pause();
  return Promise.resolve();
}
