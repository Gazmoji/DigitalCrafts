const toDoList = document.getElementById("toDoList");
const inputTitle = document.getElementById("inputTitle");
const inputPriority = document.getElementById("inputPriority");
const inputDate = document.getElementById("inputDate");
const enter = document.getElementById("enter");

function getList() {
  fetch("http://localhost:8080/toDos").then((response) =>
    response.json().then((information) => {
      const todos = information.map(function (list) {
        return `
            <h1>${list.title}</h1>
            <li>${list.priority}</li>
            <li>${list.date}</li>`;
      });
      console.log(todos);
      toDoList.innerHTML = todos.join("");
    })
  );
}

getList();

async function addItem(t, p, d) {
  const body = {
    title: t,
    priority: p,
    date: d,
  };

  const request = await fetch(`http://localhost:8080/toDos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

enter.addEventListener("click", function () {
  const todoTitle = inputTitle.value;
  const todoPriority = inputPriority.value;
  const todoDate = inputDate.value;
  addItem(todoTitle, todoPriority, todoDate);
});
