document.addEventListener("DOMContentLoaded", function() {
    fetch("movies.json")
        .then(response => response.json())
        .then(data => {
            const bookJournal = document.getElementById("movie-journal");

            data.forEach(movie => {
                const movieDiv = document.createElement("div");
                movieDiv.classList.add("movie");

                // Create HTML structure for each movie entry
                movieDiv.innerHTML = `
                    <div class="left-movie">
                        <img src="${movie.cover}" class="movie-cover" id = "${movie.id}">
                        <div class="details">
                            <div class="title">
                                <p>${movie.title}</p>
                            </div>
                            <div class="director">
                                <p>by ${movie.director}</p>
                            </div>
                            <div class="star-rating">
                                ${getStarRating(movie.rating)}
                            </div>
                            <div class="duration">
                                <p>Pages: ${movie.duration}</p>
                            </div>
                            <div class="genre">
                                <p>Genre: ${movie.genre}</p>
                            </div>
                            <div class="Date-read">
                                <p>Read: ${movie.dateWatched}</p>
                            </div>
                        </div>
                    </div>
                    <div class="right-movie">
                        <p>${movie.review}</p>
                    </div>
                `;

                // Append movie div to the movie journal container
                bookJournal.appendChild(movieDiv);
            });
        })
        .catch(error => console.error("Error fetching movie data:", error));

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
