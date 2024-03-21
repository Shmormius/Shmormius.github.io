document.addEventListener("DOMContentLoaded", function() {
    fetch("games.json")
        .then(response => response.json())
        .then(data => {
            const gameJournal = document.getElementById("game-journal");

            data.forEach(game => {
                const gameDiv = document.createElement("div");
                gameDiv.classList.add("game");

                // Create HTML structure for each game entry
                gameDiv.innerHTML = `
                    <div class="left-game">
                        <img src="${game.cover}" class="game-cover" id = "${game.id}">
                        <div class="details">
                            <div class="title">
                                <p>${game.title}</p>
                            </div>
                            <div class="studio">
                                <p>Created by ${game.studio}</p>
                            </div>
                            <div class="star-rating">
                                ${getStarRating(game.rating)}
                            </div>
                            <div class="finished">
                                <p>Finished?: ${game.finished}</p>
                            </div>
                            <div class="genre">
                                <p>Genre: ${game.genre}</p>
                            </div>
                        </div>
                    </div>
                    <div class="right-game">
                        <p>${game.review}</p>
                    </div>
                `;

                // Append game div to the game journal container
                gameJournal.appendChild(gameDiv);
            });
        })
        .catch(error => console.error("Error fetching game data:", error));

    // Function to generate star rating HTML
    function getStarRating(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStar = 5 - (fullStars + halfStar);

        let starsHTML = '';
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fa-solid fa-star"></i>';
        }
        if (halfStar) {
            starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
        }
        for (let i = 0; i < emptyStar; i++) {
            starsHTML += '<i class="fa-regular fa-star"></i>';
        }
        return starsHTML;
    }
});
