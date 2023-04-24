const express = require("express");
const app = express();
const cors = require("cors");
const models = require("./models");

app.use(cors());

app.use(express.json());

app.get("/mainpage", async (req, res) => {
  const Pokemon = await models.Pokemon.findAll({});
  res.json(Pokemon);
});

app.post("/mainpage", async (req, res) => {
  const Pokemon = {
    name: req.body.name,
    type: req.body.type,
    imageurl: req.body.imageurl,
  };
  const newPokemon = await models.Pokemon.build(Pokemon);
  await newPokemon.save();
  res.json(newPokemon);
});

app.listen(8080, () => {
  console.log("Server is running...");
});
