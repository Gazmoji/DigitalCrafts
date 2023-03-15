const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mustacheExpress = require("mustache-express");
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");
app.use(express.urlencoded());

app.use("/css/version-1", express.static("css"));

let movieList = [];

app.get("/add-movie", (req, res) => {
  res.render("add-movie");
});

app.post("/add-movie", (req, res) => {
  const movieTitle = req.body.movieTitle;
  const movieGenre = req.body.movieGenre;
  const moviePoster = req.body.moviePoster;

  const movieInfo = {
    title: movieTitle,
    genre: movieGenre,
    URL: moviePoster,
    movieID: movieList.length + 1,
  };
  movieList.push(movieInfo);

  res.redirect("/display-movies");
});

app.get("/display-movies", (req, res) => {
  res.render("display-movies", { allMovies: movieList });
});

app.post("/delete-movie", (req, res) => {
  const movieID = req.body.movieID;
  movieList = movieList.filter((movie) => movie.movieID != movieID);
  res.redirect("/display-movies");
});

app.post("/filter-movie", (req, res) => {
  const movieGenre = req.body.genre;
  if (movieGenre) {
    movieList = movieList.filter((movie) => movie.genre === movieGenre);
  }
  res.redirect("/display-movies");
});

app.listen(8080, () => {
  console.log("Server is Running...!");
});
