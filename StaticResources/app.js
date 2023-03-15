const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");

app.engine("mustache", mustacheExpress());

app.set("views", "./views");

app.set("view engine", "mustache");
app.use(express.urlencoded());

app.use("/css/version-1", express.static("css"));
app.use("/js/third-party-libs", express.static("libraries"));

app.get("/test", (req, res) => {
  const information = {
    name: "George",
    street: "100 Who Cares",
    city: "Tampa",
  };
  res.render("index", information);
});

app.listen(8080, () => {
  console.log("Server is Running");
});
