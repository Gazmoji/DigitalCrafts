let todo = [];

while (true) {
  let input = prompt(
    "What would you like to do? Press 1 to add a Task and rate how important it is. Press 2 to remove a task. Press 3 to see your results. Press q to cancel."
  );

  if (input == "1") {
    let tasks = prompt("Enter your first task.");
    let taskImportance = prompt("How important is this task?");
    let taskGroup = {
      entry1: tasks,
      entry2: taskImportance,
      entry3: todo.length + 1,
    };
    todo.push(taskGroup);
  } else if (input == "2") {
    let taskRemove = prompt(
      "Please enter the number of what task you want removed."
    );
    for (let i = 0; i < todo.length; i++) {
      if (taskRemove == todo.length[i].entry3 + 1) {
        todo.splice(i, 1);
      }
    }
  } else if (input == "3") {
    console.log(todo);
  } else if (input == "q") {
    break;
  }
}
