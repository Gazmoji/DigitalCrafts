const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const cors = require("cors");
app.use(cors());

const path = require("path");

app.engine("mustache", mustacheExpress());

app.set("views", "./views");

app.set("view engine", "mustache");

app.use(express.urlencoded());

app.use(express.static("public"));

app.use(customHeader);

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  next();
});

const middleware = (req, res, next) => {
  next();
};

const customHeader = (req, res, next) => {
  req.headers.custom = "Custom Header!";
  console.log(req.headers.custom);
  console.log(req.headers);
  next();
};

app.get("/", middleware, (req, res) => {
  res.send("hello world");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/your-info", (req, res) => {
  const myinfo = {
    name: "George Angelidis",
    email: "george@gmail.com",
    phone: "666-666-6666",
  };
  res.json(myinfo);
});

app.get("/random/:information", (req, res) => {
  const information = req.params.information;
  res.send(`This is where you will see ${information}`);
});

app.get("/post-log", (req, res) => {
  res.render("index");
});

app.post("/post-log", (req, res) => {
  const stats = req.body.stats;
  const additional = req.body.additional;
  const data = { statistics: stats, additionalInfo: additional };
  console.log(JSON.stringify(data));
  res.status(200).json({ message: "Success!" });
});

app.get("/place", (req, res) => {
  res.redirect("/your-info");
});

app.get("/download", (req, res) => {
  const file = path.join(__dirname, "file.txt");
  res.download(file);
});

app.use((req, res, next) => {
  res.status(404).send("cannot find");
});

app.listen(8080, () => {
  console.log("Server is running...");
});
