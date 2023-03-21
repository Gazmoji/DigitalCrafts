const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const pgp = require("pg-promise")();
app.engine("mustache", mustacheExpress());



app.set("views", "./views");

app.set("view engine", "mustache");

app.use(express.urlencoded());

const db = pgp(connectionString);

app.get("/", (req, res) => {
  const movies = db.any("SELECT id, name, year FROM movies");
  console.log(movies);
  res.render("index", { movies: movies });
});

app.get("/friend-movies", (req, res) => {
  const friendMovies = db.any("SELECT id, friend, movie FROM movies");
  console.log(friendMovies);
  res.render("index", { friendMovies: friendMovies });
});

app.post("/post-friend-movies", (req, res) => {
  const friendName = req.body.friendName;
  const friendMovieName = req.body.friendMovieName;

  db.none("INSERT INTO friendmovies(friend, movie) VALUES ($1, $2)", [
    friendName,
    friendMovieName,
  ]);

  res.redirect("/friend-movies");
});

app.post("/post-movie", (req, res) => {
  const movieName = req.body.movieName;
  const movieYear = parseInt(req.body.movieYear);

  db.none("INSERT INTO movies(name, year) VALUES ($1, $2)", [
    movieName,
    movieYear,
  ]);
  res.redirect("/");
});

app.post("/delete-movie", (res, req) => {
  const movieId = parseInt(req.body.movieId);
  db.none("DELETE FROM movies WHERE id = $1", [movieId]);
  res.redirect("/");
});

app.listen(8080, () => {
  console.log("Server is running...");
});
