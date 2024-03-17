// Parallax effect for hero section
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  const scrollPosition = window.pageYOffset;
  hero.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
});

// Interactive buttons hover effect
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseover', function() {
    button.classList.add('hover');
  });
  button.addEventListener('mouseout', function() {
    button.classList.remove('hover');
  });
});

// Initialize AOS library for scroll animations
AOS.init();
