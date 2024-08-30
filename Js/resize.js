function adjustLayout() {
    const contentContainer = document.querySelector('.content-container');
    const windowHeight = window.innerHeight;

    // Passe die Höhe des contentContainer an
    contentContainer.style.height = `${windowHeight - 150}px`; // Anpassung je nach Header- und Buttonleiste-Höhe
}

// Führe die Anpassung sofort nach dem Laden der Seite durch
adjustLayout();

// Führe die Anpassung bei jeder Änderung der Fenstergröße durch
window.addEventListener('resize', adjustLayout);
