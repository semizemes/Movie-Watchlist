const movie = document.getElementById("movie")


fetch("https://omdbapi.com/?s=batman&apikey=9835bb97")
.then(res => res.json())
.then(data => console.log(data))

document.getElementById("btn").addEventListener("click", (e) => {
    console.log(movie.value);
})