
document.addEventListener("DOMContentLoaded", function() {
    const navigationContainer = document.getElementById("navigation-container");
    const navigationUrl = "../../nav/navigation.html";
    
    fetch(navigationUrl)
        .then(response => response.text())
        .then(html => navigationContainer.innerHTML = html)
        .catch(error => console.error("Error loading navigation:", error));
});
