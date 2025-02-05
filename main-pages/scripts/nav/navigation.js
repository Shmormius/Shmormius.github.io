document.addEventListener("DOMContentLoaded", function () {
    const navigationContainer = document.getElementById("navigation-container");
    const navigationUrl = "../../../../main-pages/scripts/nav/navigation.html";

    fetch(navigationUrl)
        .then(response => response.text())
        .then(html => {
            navigationContainer.innerHTML = html;

            const hamburgerMenu = document.getElementById('hamburger-menu');
            const navBar = document.querySelector('nav'); 

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