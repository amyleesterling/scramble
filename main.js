// Get the quote element
const quoteEl = document.getElementById('cosmic-quote');
const originalText = quoteEl.textContent;
const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';

// Function to get a random character
function getRandomChar() {
    return characters[Math.floor(Math.random() * characters.length)];
}

// Function to scramble text
function scrambleText() {
    let scrambled = '';
    for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] === ' ') {
            scrambled += ' ';
        } else {
            scrambled += getRandomChar();
        }
    }
    quoteEl.textContent = scrambled;
}

// Function to gradually reveal the original text
function revealText() {
    let currentText = quoteEl.textContent;
    let revealed = '';
    let isComplete = true;

    for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] === currentText[i]) {
            revealed += originalText[i];
        } else {
            isComplete = false;
            if (Math.random() < 0.1) { // 10% chance to reveal each character
                revealed += originalText[i];
            } else {
                revealed += getRandomChar();
            }
        }
    }

    quoteEl.textContent = revealed;

    if (!isComplete) {
        requestAnimationFrame(revealText);
    } else {
        // Add glow effect when complete
        quoteEl.style.textShadow = '0 0 10px #00ffe0, 0 0 20px #00ffe0';
    }
}

// Start the animation
scrambleText();
setTimeout(revealText, 1000); // Start revealing after 1 second

