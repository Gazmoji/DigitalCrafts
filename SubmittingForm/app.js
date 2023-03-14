const express = require("express");

const app = express();

const mustacheExpress = require("mustache-express");

app.engine("mustache", mustacheExpress());

app.set("views", "./views");

app.set("view engine", "mustache");

app.use(express.urlencoded());

let customer = [];

app.get("/add-customer", (req, res) => {
  res.render("add-customer");
});

app.post("/add-customer", (req, res) => {
  const customerName = req.body.customerName;
  const customerAge = req.body.customerAge;

  const customerList = { name: customerName, age: customerAge };
  customer.push(customerList);

  res.redirect("/confirmation");
});

app.get("/confirmation", (req, res) => {
  res.render("confirmation", { allNames: customer });
});

app.listen(8080, () => {
  console.log("Server is Running");
});
