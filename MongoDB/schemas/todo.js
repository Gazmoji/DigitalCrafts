const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  taskName: String,
  taskPriority: String,
  completedDate: Date,
});

const Todo = mongoose.model("Todo", toDoSchema);
module.exports = Todo;
