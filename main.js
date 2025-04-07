import scrambleLib from 'scramble_type';

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
    duration: 4000, // nice slow cosmic scramble
  },
  reveal: {
    direction: 'forward',
    pauseTime: 200,
  },
  onComplete: () => {
    // Ensure proper wrapping after animation completes
    handleResize();
  }
});

