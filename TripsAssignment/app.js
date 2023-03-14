const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");

app.engine("mustache", mustacheExpress());

app.set("views", "./views");

app.set("view engine", "mustache");

app.use(express.urlencoded());

let tripList = [];

app.get("/add-trip", (req, res) => {
  res.render("add-trip");
});

app.post("/add-trip", (req, res) => {
  const tripName = req.body.tripName;
  const tripDate = req.body.tripDate;
  const tripImage = req.body.tripImage;

  const tripInfo = { name: tripName, date: tripDate, image: tripImage };
  tripList.push(tripInfo);

  res.redirect("/trip-list");
});

app.get("/trip-list", (req, res) => {
  res.render("trip-list", { allTrips: tripList });
});

app.listen(8080, () => {
  console.log("Server is Running...!");
});
