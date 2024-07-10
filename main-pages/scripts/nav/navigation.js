
document.addEventListener("DOMContentLoaded", function() {
    const navigationContainer = document.getElementById("navigation-container");
    const navigationUrl = "../../../../main-pages/scripts/nav/navigation.html";
    
    fetch(navigationUrl)
        .then(response => response.text())
        .then(html => navigationContainer.innerHTML = html)
        .catch(error => console.error("Error loading navigation:", error));
});
