let images,
    loadedImage = 0;

const preload = () => {
  images = [
    './assets/background.png',
    './assets/logo.png',
    './assets/headline1.png',
    './assets/headline2.png',
    './assets/female.png',
    './assets/button.png',
    './assets/subheadline.png',
    './assets/replay.png'
  ];

  images.forEach((src, i) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      loadedImage++;
      if (loadedImage === images.length) init();
    };
  });
};

const animateElement = (selector, options = {}) => {
  const el = document.querySelector(selector);
  new mojs.Html({
    el,
    ...options,
  }).play();
};

const init = () => {
  document.getElementById('main').style.visibility = 'visible';

  animateElement('.logo', {
    duration: 600,
    delay: 1500,
    opacity: { 0: 1 },
    scale: { 0.5: 1 },
    easing: 'elastic.out',
  });

  animateElement('.headline1', {
    duration: 600,
    delay: 500,
    x: { '-100': 0 },
    opacity: { 0: 1 },
    easing: 'sin.out',
  });

  animateElement('.headline2', {
    duration: 600,
    delay: 1000,
    x: { '-100': 0 },
    opacity: { 0: 1 },
    easing: 'sin.out',
  });

  animateElement('.subheadline', {
    duration: 600,
    delay: 1200,
    x: { '-100': 0 },
    opacity: { 0: 1 },
    easing: 'sin.out',
  });

  animateElement('.female', {
    duration: 700,
    delay: 200,
    scale: { 0.5: 1 },
    opacity: { 0: 1 },
    easing: 'back.out',
  });

  animateElement('.button', {
    duration: 600,
    delay: 2000,
    scale: { 0.5: 1 },
    opacity: { 0: 1 },
    easing: 'elastic.out',
  });

  animateElement('.replay', {
    duration: 600,
    delay: 2500,
    scale: { 0.5: 1 },
    opacity: { 0: 1 },
    easing: 'elastic.out',
  });
};

window.restartAnimation = () => {
  document.querySelectorAll('.banner img').forEach(img => {
    if (!img.classList.contains('background')) {
      img.style.opacity = '0';
      img.style.transform = 'scale(0.8) translateX(-50px)';
    }
  });
  setTimeout(init, 100);
};

document.addEventListener('DOMContentLoaded', preload);
