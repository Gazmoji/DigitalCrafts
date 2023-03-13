const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const toDo = [];

app.get("/toDos", (req, res) => {
  res.status(200).json(toDo);
});

app.post("/toDos", (req, res) => {
  const title = req.body.title;
  const priority = req.body.priority;
  const date = req.body.date;
  const todoItem = { title: title, priority: priority, date: date };
  toDo.push(todoItem);
  res.status(200).json({ message: "Added to List!" });
});

app.listen(8080, () => {
  console.log("Server is running...");
});
