const taskNameTextBox = document.getElementById("taskNameTextBox");
const addTaskButton = document.getElementById("addTaskButton");
const pendingTaskUL = document.getElementById("pendingTaskUL");
const completedTaskUL = document.getElementById("completedTaskUL");

addTaskButton.addEventListener("click", function () {
  const taskName = taskNameTextBox.value;

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  li.innerHTML = taskName;
  pendingTaskUL.appendChild(checkbox);
  li.appendChild(checkbox);
  li.prepend(checkbox);
  pendingTaskUL.appendChild(li);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", function () {
    this.parentElement.parentElement.removeChild(this.parentElement);
  });

  li.appendChild(deleteButton);
  pendingTaskUL.appendChild(li);

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      completedTaskUL.appendChild(li);
    } else {
      pendingTaskUL.appendChild(li);
    }
  });
});
