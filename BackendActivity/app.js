const express = require("express");

const app = express();
const mustacheExperss = require("mustache-express");

app.engine("mustache", mustacheExperss());

app.set("views", "/.views");

app.set("view engine", "mustache");

app.get("/customers", (req, res) => {
  let customer = { name: "George" };
  res.render("index", customer);
});

app.listen(8080, () => {
  console.log("Server is running");
});
