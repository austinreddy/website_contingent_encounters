(function () {
  const TOTAL_IMAGES = 24;
  const FILE_PREFIX = 'img/img_';
  const FILE_EXTENSION = '.jp2';
  const SLOT_SECONDS = 6;
  const FADE_FRACTION = 0.15;

  const container = document.getElementById('slideshow');
  const totalDuration = TOTAL_IMAGES * SLOT_SECONDS;
  const slotPercent = 100 / TOTAL_IMAGES;
  const fadePercent = slotPercent * FADE_FRACTION;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideFade {
      0% { opacity: 0; }
      ${fadePercent.toFixed(4)}% { opacity: 1; }
      ${(slotPercent - fadePercent).toFixed(4)}% { opacity: 1; }
      ${slotPercent.toFixed(4)}% { opacity: 0; }
      100% { opacity: 0; }
    }
    #gallery  .slide {
      animation: slideFade ${totalDuration}s linear infinite;
    }
  `;
  document.head.appendChild(style);

  for (let i = 0; i < TOTAL_IMAGES; i++) {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.backgroundImage = `url("${FILE_PREFIX}${i + 1}${FILE_EXTENSION}")`;
    slide.style.animationDelay = `-${i * SLOT_SECONDS}s`;
    container.appendChild(slide);
  }
})();
