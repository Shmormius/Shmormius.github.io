document.addEventListener("DOMContentLoaded", function() {
    fetch("anime.json")
        .then(response => response.json())
        .then(data => {
            const animeRanking = document.getElementById("anime-ranking");
            let i = 0;

            data.forEach(anime => {
                const animeDiv = document.createElement("div");

                let duration = anime.duration;
                if(anime.id == "movie"){
                    duration = "Movie"
                }
                else{
                    duration = "Episodes: " + duration;
                }

                animeDiv.classList.add("anime");

                animeDiv.innerHTML = `
                    <div class="left-anime">
                        <p>${i += 1}</p>
                        <img src="${anime.cover}" class="anime-cover" id="${anime.id}">
                    </div>
                    <div class="right-anime">
                        <div class="details">
                            <div class="title">
                                <p>${anime.title}</p>
                            </div>
                            <div class="star-rating">
                                ${getStarRating(anime.rating)}
                            </div>
                            <div class="duration">
                                <p>${duration}</p>
                            </div>
                        </div>
                    </div>
                `;

                // Append anime div to the anime ranking container
                animeRanking.appendChild(animeDiv);
            });
        })
        .catch(error => console.error("Error fetching anime data:", error));

    // Function to generate star rating HTML
    function getStarRating(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStar = 10 - (fullStars + halfStar);

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
