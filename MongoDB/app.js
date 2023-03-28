const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const mongoose = require("mongoose");
const Todo = require("./schemas/todo");

app.use(express.urlencoded());

app.engine("mustache", mustacheExpress());

app.set("views", "./views");

app.set("view engine", "mustache");

mongoose
  .connect(
    "mongodb+srv://georgeangelidis07:1gxUYLhJYhftXK5L@cluster0.ur9sqsq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDb is connected.");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", async (req, res) => {
  const todos = await Todo.find({});
  res.render("index", { todos: todos });
});

app.post("/add-item", async (req, res) => {
  const taskName = req.body.taskName;
  const taskPriority = req.body.taskPriority;
  const completedDate = req.body.completedDate;
  const taskId = req.body._id;

  const toDo = new Todo({
    taskName: taskName,
    taskPriority: taskPriority,
    completedDate: completedDate,
  });
  const savedToDo = await toDo.save();
  res.redirect("/");
});

app.post("/delete-item", async (req, res) => {
  const taskId = req.body._id;
  await Todo.findByIdAndDelete(taskId);
  res.redirect("/");
});

app.post("/update-item", async (req, res) => {
  const taskName = req.body.taskName;
  const taskPriority = req.body.taskPriority;
  const completedDate = req.body.completedDate;
  const taskId = req.body._id;

  const taskUpdate = {
    taskName: taskName,
    taskPriority: taskPriority,
    completedDate: completedDate,
    taskId: taskId,
  };
  const updatedTask = await Todo.findByIdAndUpdate(taskId, taskUpdate);
  res.redirect("/");
});

app.listen(8080, () => {
  console.log("Server is running...");
});
