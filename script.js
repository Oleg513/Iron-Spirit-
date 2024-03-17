document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");

    // Показує або приховує кнопку "Повернутися до верху" при прокручуванні
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    // Прокручує сторінку до верху при кліці на кнопці "Повернутися до верху"
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
