const apiKey = 'your_omdb_api_key'; // Buraya kendi OMDB API anahtarınızı koyun

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultsDiv = document.getElementById('results');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (!query) {
        resultsDiv.innerHTML = "<p>Lütfen film adı giriniz.</p>";
        return;
    }

    resultsDiv.innerHTML = "<p>Yükleniyor...</p>";

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayMovies(data.Search);
            } else {
                resultsDiv.innerHTML = `<p>${data.Error}</p>`;
            }
        })
        .catch(() => {
            resultsDiv.innerHTML = "<p>Bir hata oluştu. Lütfen tekrar deneyiniz.</p>";
        });
});

function displayMovies(movies) {
    resultsDiv.innerHTML = '';
    movies.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
      <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/70x100?text=No+Image'}" alt="${movie.Title}" />
      <div class="movie-details">
        <h3 class="movie-title">${movie.Title}</h3>
        <p class="movie-year">${movie.Year}</p>
      </div>
    `;

        resultsDiv.appendChild(movieEl);
    });
}