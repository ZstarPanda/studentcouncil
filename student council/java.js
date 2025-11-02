// =======================
// Culture Day JS Effects
// =======================

// Title glow animation
const title = document.getElementById('title');
const colors = ['#ff6b6b', '#ffd93d', '#6bcbee', '#9b59b6', '#4caf50', '#f39c12'];

function changeTitleGlow() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  title.style.textShadow = `0 0 20px ${randomColor}, 0 0 40px ${randomColor}`;
}
setInterval(changeTitleGlow, 1000);


// =======================
// Country Card Zoom + Center
// =======================
const cards = document.querySelectorAll('.country-card');
let activeCard = null;

cards.forEach(card => {
  // Hover effect
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'all 0.3s ease';
    card.style.zIndex = '5';
  });

  card.addEventListener('mouseleave', () => {
    if (card !== activeCard) {
      card.style.transform = 'scale(1)';
      card.style.zIndex = '1';
    }
  });

  // Click to center and enlarge
  card.addEventListener('click', (e) => {
    e.stopPropagation();

    // Reset previous active card
    if (activeCard && activeCard !== card) {
      activeCard.classList.remove('active');
      activeCard.style.transform = 'scale(1)';
      activeCard.style.zIndex = '1';
    }

    // Toggle active state
    if (card === activeCard) {
      card.classList.remove('active');
      card.style.transform = 'scale(1)';
      activeCard = null;
      document.body.classList.remove('blur-background');
    } else {
      card.classList.add('active');
      card.style.transform = 'scale(1.5)';
      card.style.zIndex = '100';
      activeCard = card;
      document.body.classList.add('blur-background');
    }
  });
});

// Click outside to close
document.addEventListener('click', () => {
  if (activeCard) {
    activeCard.classList.remove('active');
    activeCard.style.transform = 'scale(1)';
    activeCard.style.zIndex = '1';
    activeCard = null;
    document.body.classList.remove('blur-background');
  }
});


// =======================
// Floating Background Dots
// =======================
const particleCount = 25;
const body = document.body;

for (let i = 0; i < particleCount; i++) {
  const dot = document.createElement('div');
  dot.classList.add('particle');
  dot.style.left = Math.random() * 100 + 'vw';
  dot.style.top = Math.random() * 100 + 'vh';
  dot.style.animationDuration = (5 + Math.random() * 6) + 's';
  dot.style.background = colors[Math.floor(Math.random() * colors.length)];
  dot.style.opacity = Math.random();
  body.appendChild(dot);
}
