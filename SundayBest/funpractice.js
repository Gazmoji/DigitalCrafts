const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const cors = require("cors");
const models = require("./models");
require("dotenv").config();
app.use(cors());

app.engine("mustache", mustacheExpress());

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.set("views", "./views");

app.set("view engine", "mustache");

app.use(express.urlencoded());

app.get("/welcome", async (req, res) => {
  const information = await models.Testpage.findAll({});
  res.render("homepage", { information: information });
});

app.post("/welcome", (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log("Server is running...");
});
