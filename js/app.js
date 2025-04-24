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
    delay: 7000,
    opacity: { 0: 1 },
    scale: { 0.2: 1 },
    easing: 'elastic.out',
  });

  animateElement('.female', {
    duration: 700,
    delay: 200,
    scale: { 0.5: 1 },
    opacity: { 0: 1 },
    easing: 'back.out',
  });

  animateElement('.headline1', {
    duration: 600,
    delay: 3100,
    x: { '-100%': 0 },
    scale: { 0.5: 1 },
    opacity: { 0: 1 },
    easing: 'sin.out',
  });

  animateElement('.headline2', {
    duration: 600,
    delay: 4000,
    x: { '-100%': 0 },
    scale: { 0.2: 1 },
    opacity: { 0: 1 },
    easing: 'sin.out',
  });

  animateElement('.subheadline', {
    duration: 600,
    delay: 4500,
    x: { '-100': 0 },
    opacity: { 0: 1 },
    easing: 'sin.out',
  });

  

  animateElement('.button', {
    duration: 600,
    delay: 6000,
    scale: { 0.2: 1 },
    opacity: { 0: 1 },
    easing: 'elastic.out',
  });

  animateElement('.replay', {
    duration: 600,
    delay: 5500,
    scale: { 0.2: 1 },
    opacity: { 0: 1 },
    easing: 'sin.out',
  });
};

window.restartAnimation = () => {
  document.querySelectorAll('.banner img').forEach(img => {
    if (!img.classList.contains('background')) {
      img.style.opacity = '0';
      img.style.transform = 'scale(0.2) translateX(-50px)';
    }
  });
  setTimeout(init, 100);
};

function hideElements() {
    animateElement('.female', {
      duration: 500,
      delay: 1800,
      opacity: { 1: 0 },
      scale: { 1: 0.5 },
      easing: 'sin.in',
    });
  
    animateElement('.headline1', {
      duration: 500,
      delay: 1800,
      opacity: { 1: 0 },
      scale: { 1: 0.5 },
      x: { 0: '-100' },
      easing: 'sin.in',
    });
  }
  
  setTimeout(hideElements, 1500);
document.addEventListener('DOMContentLoaded', preload);
