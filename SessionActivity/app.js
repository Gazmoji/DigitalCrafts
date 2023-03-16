const express = require("express");

const app = express();
const mustacheExperss = require("mustache-express");

const session = require("express-session");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.engine("mustache", mustacheExperss());

app.set("views", "/.views");

app.set("view engine", "mustache");

app.use(express.urlencoded());

let users = [{ username: "GeorgeAngelidis", password: "topsecret" }];

app.get("/register", (req, res) => {
  res.render("register", { username: req.session.username });
});

app.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let theUser = users.find((user) => {
    return user.username == username && user.password == password;
  });
  if (theUser) {
    if (req.session) {
      req.session.username = theUser.username;

      res.redirect("/confirm");
    }
  } else {
    res.render("login", { message: "Invalid Username or Password!" });
  }
});

app.get("/confirm", (req, res) => {
  res.render(confirm);
});

app.listen(8080, () => {
  console.log("Server is running...");
});
