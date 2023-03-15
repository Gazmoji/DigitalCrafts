const express = require("express");

const app = express();
const mustacheExperss = require("mustache-express");

app.engine("mustache", mustacheExperss());

app.set("views", "/.views");

app.set("view engine", "mustache");

app.use(express.urlencoded());

app.get("/movies/:genre/:year", (req, res) => {
  req.params.genre;
  req.params.year;
  res.render("movie-details", {
    movieGenre: req.params.genre,
    movieYear: req.params.year,
  });
});

app.listen(8080, () => {
  console.log("Server is running");
});
