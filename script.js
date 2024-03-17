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

// Змінна для елемента затемнення
const backdrop = document.querySelector('.backdrop');

menuToggle.addEventListener('click', function() {
  navbar.classList.toggle('show');
  // Переключення відображення елемента затемнення
  backdrop.style.display = navbar.classList.contains('show') ? 'block' : 'none';
});

// Додавання обробника кліків на елемент затемнення для закриття меню
backdrop.addEventListener('click', function() {
  navbar.classList.remove('show');
  backdrop.style.display = 'none';
});
