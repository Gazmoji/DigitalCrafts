const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const cors = require("cors");
app.use(cors());

app.engine("mustache", mustacheExpress());

app.set("views", "./views");

app.set("view engine", "mustache");

app.use(
  session({
    secret: "gazmoji",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded());

let users = [
  { username: "GeorgeAngelidis", password: "TopSecret" },
  { username: "AngelidisGeorge", password: "SecretTop" },
];

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let theUser = users.find((user) => {
    return user.username == username && user.password == password;
  });
  if (theUser) {
    if (req.session) {
      req.session.username = theUser.username;
      res.redirect("/add-trip");
    }
  } else {
    res.render("login", { message: "INVALID USERNAME OR PASSWORD!" });
  }
});

app.post("/register", (req, res) => {
  let newUsername = req.body.newUsername;
  let newPassword = req.body.newPassword;
  console.log(newUsername);
  console.log(newPassword);
  let existingUser = users.find((user) => {
    return user.username == newUsername;
  });

  if (existingUser) {
    res.render("register", { newMessage: "USERNAME ALREADY EXISTS" });
  } else {
    let newUser = { username: newUsername, password: newPassword };
    users.push(newUser);
    console.log(users);
    res.redirect("/login");
  }
});

let allTrips = [];

app.get("/add-trip", (req, res) => {
  res.render("add-trip");
});

app.post("/add-trip", (req, res) => {
  const tripLocation = req.body.tripLocation;
  const tripImage = req.body.tripImage;
  const tripDeparture = req.body.tripDeparture;
  const tripReturn = req.body.tripReturn;

  const tripInformation = {
    location: tripLocation,
    image: tripImage,
    departure: tripDeparture,
    return: tripReturn,
    tripid: allTrips.length + 1,
    username: req.session.username,
  };
  allTrips.push(tripInformation);
  res.redirect("/trip-list");
});

app.get("/trip-list", (req, res) => {
  res.render("trip-list", { allTrips: allTrips });
});

app.post("/delete-trip", (req, res) => {
  const tripid = req.body.tripid;
  allTrips = allTrips.filter((trip) => trip.tripid != tripid);
  res.redirect("/trip-list");
});

app.listen(8080, () => {
  console.log("Server is running...");
});
