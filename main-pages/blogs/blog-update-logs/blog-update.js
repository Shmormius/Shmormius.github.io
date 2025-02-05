document.addEventListener("DOMContentLoaded", function () {
    fetch("blog-update.json")
        .then(response => response.json())
        .then(data => {
            const updateContainer = document.getElementById("update-container");

            data.forEach(update => {
                const updateDiv = document.createElement("div");
                updateDiv.classList.add("update");

                const dateHeading = document.createElement("h2");
                dateHeading.textContent = update.date;
                updateDiv.appendChild(dateHeading);

                update.updates.forEach(entry => {
                    const textParagraph = document.createElement("p");
                    textParagraph.textContent = entry.text;
                    updateDiv.appendChild(textParagraph);

                    if (entry.image) {
                        const imageElement = document.createElement("img");
                        imageElement.src = entry.image;
                        imageElement.alt = "Update image";
                        updateDiv.appendChild(imageElement);
                    }
                    if (entry.image2) {
                        const imageElement = document.createElement("img");
                        imageElement.src = entry.image2;
                        imageElement.alt = "Update image";
                        updateDiv.appendChild(imageElement);
                    }
                });

                updateContainer.appendChild(updateDiv);
            });
        })
        .catch(error => console.error("Error fetching update data:", error));
});