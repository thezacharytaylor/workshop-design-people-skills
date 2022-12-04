const video = document.querySelector('video');
const motionQuery = matchMedia('(prefers-reduced-motion)');
function handleReduceMotionChanged() {
  if (motionQuery.matches) {
    video.setAttribute('controls', '');
  } else {
    video.setAttribute('autoplay', '');
  }
}
motionQuery.addEventListener('change', handleReduceMotionChanged);
handleReduceMotionChanged();
