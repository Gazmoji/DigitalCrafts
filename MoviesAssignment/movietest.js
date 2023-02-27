let details = document.getElementById("details");
let button = document.getElementById("button");
let title = document.getElementById("Title");
let year = document.getElementById("Year");
let link = document.getElementById("Link");

button.addEventListener("click", function () {
  const titleValue = title.value;
  const yearValue = year.value;
  const linkValue = link.value;
  const newMovie = {};
  newMovie.Title = titleValue;
  newMovie.Year = yearValue;
  newMovie.Poster = linkValue;
  movies.Search.push(newMovie);
  Display();
});

let allMovies = movies.Search;
console.log(allMovies);

function Display() {
  const theMovies = allMovies.map(function (movies) {
    return `<li>
      <div>${movies.Title}</div>
      <div>${movies.Year}</div>
      <img src = '${movies.Poster}' class = 'size'/>
      <button id= 'deleteButton' onclick='deleteMovie("${movies.Title}")' value = ${movies.Title}>Delete</button>
      </li>`;
  });

  details.innerHTML = theMovies.join("");
}

function deleteMovie(title) {
  const movieList = allMovies.filter((movie) => {
    return movie.Title !== title;
  });
  allMovies = movieList;
  Display();
}
Display();
