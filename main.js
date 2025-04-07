import scrambleLib from './node_modules/scramble_type/index.js';

const scramble = new scrambleLib();
const quoteEl = document.getElementById('cosmic-quote');

// Function to handle window resize
function handleResize() {
  // Force reflow to ensure proper text wrapping
  quoteEl.style.display = 'none';
  quoteEl.offsetHeight; // Trigger reflow
  quoteEl.style.display = 'block';
}

// Add resize event listener
window.addEventListener('resize', handleResize);

scramble.animateText(quoteEl, {
  step: {
    duration: 3000, // slightly faster cosmic scramble
    characters: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()',
    randomize: true,
  },
  reveal: {
    direction: 'forward',
    pauseTime: 100,
    revealSpeed: 50,
  },
  onComplete: () => {
    // Ensure proper wrapping after animation completes
    handleResize();
    // Add a subtle glow effect after animation
    quoteEl.style.textShadow = '0 0 10px #00ffe0, 0 0 20px #00ffe0';
  }
});

