// JavaScript to handle dropdown menu interaction
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the 'menu-toggle' element
    var menuToggle = document.querySelector('.menu-toggle');
    var navBar = document.querySelector('.navbar');

    // Add click event to the menu toggle to toggle the 'active' class on the navbar
    menuToggle.addEventListener('click', function () {
        navBar.classList.toggle('active');
    });

    // Get all elements with class 'menu-item' which contains a dropdown
    var menuItems = document.querySelectorAll('.menu-item');

    // Add click event to each menu item to toggle the display of the dropdown menu
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            var dropdown = menuItem.querySelector('.dropdown-menu');
            // Close any open dropdown menus if another menu item is clicked
            var openDropdowns = document.querySelectorAll('.dropdown-menu');
            openDropdowns.forEach(function (openDropdown) {
                if (openDropdown !== dropdown) {
                    openDropdown.style.display = 'none';
                }
            });
            // Toggle the current dropdown
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    });
});
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    });
});
