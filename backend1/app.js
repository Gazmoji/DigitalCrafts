const express = require("express");

const app = express();

app.use(express.json());

const name = [];

app.get("/name", (req, res) => {
  let person = { firstName: "George", lastName: "Angelidis" };
  res.status(200).json(person);
});

app.get("/digital-crafts/cohort/:year", (req, res) => {
  const year = req.params.year;
  res.send(`I study at DigitalCrafts ${year} cohort.`);
});

app.post("/name", (req, res) => {
  const first = req.body.firstName;
  const last = req.body.lastName;
  const fullName = { firstName: first, lastName: last };
  name.push(fullName);
  res.status(200).json({ message: "Success!" });
});

app.listen(8080, () => {
  console.log("Server is running....");
});
