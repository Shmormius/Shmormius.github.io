document.addEventListener("DOMContentLoaded", function() {
    fetch("tvshows.json")
        .then(response => response.json())
        .then(data => {
            const bookJournal = document.getElementById("tv-journal");

            data.forEach(tv => {
                const tvDiv = document.createElement("div");
                tvDiv.classList.add("tv");

                // Create HTML structure for each tv entry
                tvDiv.innerHTML = `
                    <div class="left-tv">
                        <img src="${tv.cover}" class="tv-cover" id = "${tv.id}">
                        <div class="details">
                            <div class="title">
                                <p>${tv.title}</p>
                            </div>
                            <div class="director">
                                <p>Directed by ${tv.creator}</p>
                            </div>
                            <div class="star-rating">
                                ${getStarRating(tv.rating)}
                            </div>
                            <div class="duration">
                                <p>Duration: ${tv.duration}</p>
                            </div>
                            <div class="genre">
                                <p>Genre: ${tv.genre}</p>
                            </div>
                            <div class="Date-watched">
                                <p>Finished: ${tv.dateWatched}</p>
                            </div>
                        </div>
                    </div>
                    <div class="right-tv">
                        <p>${tv.review}</p>
                        ${tv.amendment ? `<p>${tv.amendment}</p>` : ''}
                    </div>
                `;

                // Append tv div to the tv journal container
                bookJournal.appendChild(tvDiv);
            });
        })
        .catch(error => console.error("Error fetching tv data:", error));

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
