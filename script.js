document.addEventListener('DOMContentLoaded', function () {
    // Плавна прокрутка для меню навігації
    const navbarLinks = document.querySelectorAll('.navbar a[href^="#"]');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Динамічне завантаження контенту для турнірів (приклад)
    // Тут можна додати асинхронний запит до API або сервера для отримання інформації про турніри
    // Приклад коду нижче не виконуватиметься, оскільки він вимагає реального API
    /*
    fetch('шлях/до/вашого/api/tournaments')
        .then(response => response.json())
        .then(data => {
            // Обробка отриманих даних
            console.log(data);
        })
        .catch(error => console.error('Помилка при завантаженні турнірів:', error));
    */

    // Інші функції для інтерактивності сайту
    // Можливість додавати слухачі подій для обробки форми реєстрації, FAQ та інше
});
