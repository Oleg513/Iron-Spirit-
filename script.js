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
if (typeof AOS !== 'undefined') {
  AOS.init();
}

// Перевіряємо, чи існують елементи перед додаванням обробників подій
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const backdrop = document.querySelector('.backdrop');

if (menuToggle && navbar && backdrop) {
  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('show');
    backdrop.style.display = navbar.classList.contains('show') ? 'block' : 'none';
  });

  backdrop.addEventListener('click', function() {
    navbar.classList.remove('show');
    backdrop.style.display = 'none';
  });
}
