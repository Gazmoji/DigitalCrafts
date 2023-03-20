const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const pgp = require("pg-promise")();
const session = require("express-session");

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

app.post("/login", async (req, res) => {
  req.session.username = req.body.username;
  res.redirect("/");
});

app.post("/register", async (req, res) => {
  await db.none("INSERT INTO users(username, password) VALUES ($1, $2)", [
    req.body.username,
    req.body.password,
  ]);
  res.redirect("/login");
});

app.get("/", async (req, res) => {
  const information = await db.any(
    "SELECT id, title, body, date_created, date_updated, is_published FROM blogapp"
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

app.listen(8080, () => {
  console.log("Server is running...");
});
