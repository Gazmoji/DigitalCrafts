let todo = [];

while (true) {
  let choice = prompt(
    "Enter 1 to add a new task. Enter 2 to delete a task. Enter 3 to view all tasks. Press q to quit."
  );

  if (choice == "q") {
    break;
  } else if (choice == "1") {
    let taskName = prompt("Enter your new task.");
    let taskPriority = prompt("How important is your task?");
    let task = { name: taskName, priority: taskPriority, id: todo.length + 1 };
    todo.push(task);
  } else if (choice == "2") {
    let taskDelete = prompt(
      "Enter what task to delete. We will splice it based on the number it is on the list."
    );
    for (let i = 0; i < todo.length; i++) {
      if (taskDelete == todo[i].id) {
        todo.splice(i, 1);
      }
    }
  } else if (choice == "3") {
    console.log(todo);
  }
}
