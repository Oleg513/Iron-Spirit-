// JavaScript to handle dropdown menu interaction
document.addEventListener('DOMContentLoaded', (event) => {
    // Get all elements with class 'menu-item' which contains a dropdown
    var menuItems = document.querySelectorAll('.menu-item');

    // Add click event to each menu item to toggle the display of the dropdown menu
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            var dropdown = menuItem.querySelector('.dropdown-menu');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    });
});
