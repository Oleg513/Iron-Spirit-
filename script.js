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

// Додайте ваші нові функції тут

// Меню Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', function() {
  navbar.classList.toggle('show');
});

// Закриття меню при кліку на посилання
const menuLinks = document.querySelectorAll('.navbar a');

menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    navbar.classList.remove('show');
  });
});

// Плавна прокрутка до розділів при кліку на посилання у меню
menuLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
