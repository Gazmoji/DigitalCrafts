const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const pgp = require("pg-promise")();
const session = require("express-session");
const bcrypt = require("bcryptjs");

const connectionString =
  "postgres://wfnsjsmt:e9bTD2hnGbO53sdF5CbmT0fKJERRiGsf@ruby.db.elephantsql.com/wfnsjsmt";
app.engine("mustache", mustacheExpress());

app.use(
  session({
    secret: "gazmoji",
    resave: false,
    saveUninitialized: true,
  })
);

app.set("views", "./views");

app.set("view engine", "mustache");

app.use(express.urlencoded());

const db = pgp(connectionString);

app.get("/login", async (req, res) => {
  res.render("register-login");
});

app.get("/comments", async (req, res) => {
  res.render("comments");
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let user = await db.oneOrNone(
    "SELECT id, username, password from users where username = $1",
    [username]
  );
  if (user) {
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      if (req.session) {
        req.session.userid = user.id;
      }
      res.redirect("/");
    } else {
      res.render("register-login", {
        errorMessage: "Invalid Username or Password.",
      });
    }
  } else {
    res.render("register-login", {
      errorMessage: "Invalid Username or Password.",
    });
  }
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const message = req.body.message;

  let salt = await bcrypt.genSalt(10);
  let newPassword = await bcrypt.hash(password, salt);
  await db.none("INSERT INTO users(username, password) VALUES ($1, $2)", [
    username,
    newPassword,
  ]);

  res.redirect("/login");
});

app.get("/", async (req, res) => {
  const information = await db.any(
    "SELECT id, title, body, date_created, date_updated, is_published, comments FROM blogapp"
  );
  res.render("index", { information: information });
});

app.post("/blogs", async (req, res) => {
  const blogTitle = req.body.blogTitle;
  const blogBody = req.body.blogBody;
  const dateCreated = req.body.dateCreated;
  const dateUpdated = req.body.dateUpdated;
  const isPublished = req.body.isPublished;

  await db.none(
    "INSERT INTO blogapp(title, body, date_created, date_updated, is_published) VALUES ($1, $2, $3, $4, $5)",
    [blogTitle, blogBody, dateCreated, dateUpdated, isPublished]
  );
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const blogId = parseInt(req.body.blogId);
  await db.none("DELETE FROM blogapp WHERE id = $1", [blogId]);
  res.redirect("/");
});

app.post("/edit-post", async (req, res) => {
  await db.none("UPDATE blogapp SET title= $1, body = $2 WHERE id = $3", [
    req.body.blogTitle,
    req.body.blogBody,
    req.body.blogId,
  ]);

  res.redirect("/");
});

app.post("/comments", async (req, res) => {
  const blogComment = req.body.blogComment;
  await db.none("INSERT INTO blogapp(comments) VALUES ($1)", [blogComment]);
  res.render("comments", { comments: comments });
});

app.post("/delete-comment", async (req, res) => {
  const blogComment = req.body.blogComment;
  await db.none("DELETE FROM blogapp WHERE comments = $1", [blogComment]);
  res.redirect("/comments");
});

app.listen(8080, () => {
  console.log("Server is running...");
});
