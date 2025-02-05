document.addEventListener("DOMContentLoaded", function () {
    const navigationContainer = document.getElementById("navigation-container");
    const navigationUrl = "../../../../main-pages/scripts/nav/navigation.html";

    // Load the navigation bar
    fetch(navigationUrl)
        .then(response => response.text())
        .then(html => {
            navigationContainer.innerHTML = html;

            // Now that the navigation bar is loaded, set up the hamburger menu toggle
            const hamburgerMenu = document.getElementById('hamburger-menu');
            const navBar = document.querySelector('nav'); // Use querySelector to find the <nav> element

            if (hamburgerMenu && navBar) {
                hamburgerMenu.addEventListener('click', function () {
                    navBar.classList.toggle('active');
                });
            } else {
                console.error("Hamburger menu or navigation bar not found.");
            }
        })
        .catch(error => console.error("Error loading navigation:", error));
});