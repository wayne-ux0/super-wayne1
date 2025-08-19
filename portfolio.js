// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll animation effect
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('section, .project-card, .skill-bar');
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      el.classList.add('fade-in');
    }
  });
});

// Particle Background
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Create particles
function init() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    let size = Math.random() * 3;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let dx = (Math.random() - 0.5) * 1;
    let dy = (Math.random() - 0.5) * 1;
    particlesArray.push({x, y, dx, dy, size});
  }
}

// Animate particles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff0000";
  particlesArray.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    // bounce off edges
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
}

init();
animate();

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});
