document.addEventListener("DOMContentLoaded", function() {
    fetch('/HTML/menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;

            // Stelle sicher, dass das Element existiert, bevor der Event Listener hinzugefügt wird
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) {
                menuToggle.addEventListener('click', toggleMenu);
            } else {
                console.error('Menu toggle element not found!');
            }
        })
        .catch(error => console.error('Error loading menu:', error));
});

function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    } else {
        console.error('Dropdown menu element not found!');
    }
}
