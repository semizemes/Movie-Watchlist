const movieForm = document.getElementById("movie-form");
let movieIdArr = [];
let moviesHtmlArr = [];
let myWatchlistArray = [];

movieForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let movie = Object.fromEntries(new FormData(e.target)).movie;

  const res = await fetch(
    `https://omdbapi.com/?s=${movie}&plot=short&apikey=9835bb97`
  );
  const data = await res.json();
  movieIdArr = data.Search.map((i) => i.imdbID);

  renderSearchedMovies();

  document.getElementById("movie").value = "";
});

async function renderSearchedMovies() {
  moviesHtmlArr = await movieIdArr.map(async (movieId) => {
    const res = await fetch(
      `https://www.omdbapi.com/?i=${movieId}&apikey=9835bb97`
    );
    const data = await res.json();
    console.log(data);
    return `
            <div class="searched-movie">
                <img src="${data.Poster}" alt='"${data.Title}" poster image' />

                <div class="movie-data">
                <div class="info-block">
                    <div class="movie-header">
                    <h2>${data.Title}</h2>
                    <i class="fa-solid fa-star"></i>
                    <p>${data.imdbRating}</p>
                    </div>
                </div>
                <div class="movie-main">
                    <p>${data.Runtime}</p>
                    <p>${data.Genre}</p>
                    <div data-movie-id="${data.imdbID}" class="watchlist" role="button">
                      <i class="fa-solid fa-circle-plus"></i>
                      <p>Watchlist</p>
                    </div>
                </div>
                <div class="plot">${data.Plot}</div>
                </div>
            </div>
        `;
  });
  const arr = await Promise.all(moviesHtmlArr);

  document.getElementById("content").innerHTML = arr.join(" ");
}

document.addEventListener("click", (e) => {
  if (e.target.parentElement.dataset.movieId) {
    console.log(e.target.parentElement.dataset.movieId);
    myWatchlistArray.push(e.target.parentElement.dataset.movieId);
    const jsonMyWatchlist = JSON.stringify(myWatchlistArray);
    localStorage.setItem("movieArray", jsonMyWatchlist);
  }

  if (e.target.id == "myHeader") {
    const storedJSONArray = localStorage.getItem("movieArray");
    const localMyWatchlistArray = JSON.parse(storedJSONArray || "[]");
    
  }
});
