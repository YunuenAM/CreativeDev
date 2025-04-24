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
    './assets/replay.png',
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
  return new mojs.Html({
    el,
    ...options,
  }).play();
};

const init = () => {
  document.getElementById('main').style.visibility = 'visible';

  animateElement('.female', {
    duration: 700,
    delay: 200,
    scale: { 0.5: 1 },
    opacity: { 0: 1 },
    easing: 'back.out',
  });

  animateElement('.headline1', {
    duration: 600,
    delay: 200,
    x: { '-100%': 0 },
    scale: { 0.5: 1 },
    opacity: { 0: 1 },
    easing: 'sin.out',
  });

  setTimeout(() => {
    animateElement('.female', {
      duration: 500,
      opacity: { 1: 0 },
      scale: { 1: 0.5 },
      easing: 'sin.in',
    });

    animateElement('.headline1', {
      duration: 500,
      opacity: { 1: 0 },
      scale: { 1: 0.5 },
      x: { 0: '-100' },
      easing: 'sin.in',
    });

    // Tercera fase: Aparecen headline2, logo y subheadline en secuencia
    setTimeout(() => {
      animateElement('.headline2', {
        duration: 600,
        x: { '-100%': 0 },
        scale: { 0.2: 1 },
        opacity: { 0: 1 },
        easing: 'sin.out',
      });

      setTimeout(() => {
        animateElement('.logo', {
          duration: 600,
          opacity: { 0: 1 },
          scale: { 0.2: 1 },
          easing: 'elastic.out',
        });

        setTimeout(() => {
          animateElement('.subheadline', {
            duration: 600,
            x: { '-100': 0 },
            opacity: { 0: 1 },
            easing: 'sin.out',
          });

          // Cuarta fase: Aparecen button y replay
          setTimeout(() => {
            animateElement('.button', {
              duration: 600,
              scale: { 0.2: 1 },
              opacity: { 0: 1 },
              easing: 'elastic.out',
            });

            animateElement('.replay', {
              duration: 600,
              scale: { 0.4: 1 },
              opacity: { 0: 1 },
              easing: 'sin.out',
            });
          }, 1000);
        }, 800);
      }, 800);
    }, 500);
  }, 3000);
};

window.restartAnimation = () => {
  document.querySelectorAll('.banner img').forEach(img => {
    if (!img.classList.contains('background')) {
      img.style.opacity = '0';
      img.style.transform = 'scale(0.8) translateX(-50px)';
    }
  });

  loadedImage = 0;
  
  preload();
};

document.addEventListener('DOMContentLoaded', () => {
  preload();

  document.querySelector('.replay').addEventListener('click', () => {
    window.restartAnimation();
  });
});