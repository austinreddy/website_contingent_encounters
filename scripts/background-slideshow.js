(function () {
  const photos = [
    'img/glass.jpg',
    'img/portrait.jpg',
    'img/slideshow/img_7.jpg',
    'img/slideshow/img_8.jpg',
    'img/slideshow/img_9.jpg',
    'img/slideshow/img_10.jpg',
    'img/slideshow/img_11.jpg',
    'img/slideshow/img_12.jpg',
    'img/slideshow/img_13.jpg',
    'img/slideshow/img_14.jpg',
    'img/slideshow/img_15.jpg',
    'img/slideshow/img_16.jpg',
    'img/slideshow/img_17.jpg',
    'img/slideshow/img_18.jpg',
    'img/slideshow/img_19.jpg',
    'img/slideshow/img_20.jpg',
    'img/slideshow/img_21.jpg',
    'img/slideshow/img_22.jpg',
    'img/slideshow/img_23.jpg'
  ];

  const layers = Array.from(document.querySelectorAll('.bg'));
  const slideDuration = 6000;
  let photoIndex = 0;
  let activeLayerIndex = 0;

  if (layers.length !== 2 || photos.length < 2) {
    return;
  }

  function preloadPhoto(path) {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = resolve;
      image.src = path;
    });
  }

  async function showNextPhoto() {
    photoIndex = (photoIndex + 1) % photos.length;
    const nextLayerIndex = activeLayerIndex === 0 ? 1 : 0;
    const nextPhoto = photos[photoIndex];

    await preloadPhoto(nextPhoto);
    layers[nextLayerIndex].style.backgroundImage = `url("${nextPhoto}")`;
    layers[nextLayerIndex].classList.add('is-active');
    layers[activeLayerIndex].classList.remove('is-active');
    activeLayerIndex = nextLayerIndex;

    window.setTimeout(showNextPhoto, slideDuration);
  }

  window.setTimeout(showNextPhoto, slideDuration);
})();
