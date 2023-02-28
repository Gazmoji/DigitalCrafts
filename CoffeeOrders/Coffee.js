const ULlist = document.getElementById("ULlist");
const emailDisplay = document.getElementById("emailDisplay");
const emailTextBox = document.getElementById("emailTextBox");
const typeTextBox = document.getElementById("typeTextBox");
const sizeTextBox = document.getElementById("sizeTextBox");
const priceTextBox = document.getElementById("priceTextBox");
const addButton = document.getElementById("addButton");
const searchButton = document.getElementById("searchButton");
const deleteButton = document.getElementById("deleteButton");
const emailSearch = document.getElementById("search");
const deleteSearch = document.getElementById("delete");

function displayOrders() {
  const request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    const result = JSON.parse(this.responseText);
    const list = result.map(function (information) {
      return `<li>
      ${information.email}
      ${information.type}
      ${information.size}
      ${information.price}
      </li>`;
    });
    ULlist.innerHTML = list;
  });
  request.open("GET", "https://troubled-peaceful-hell.glitch.me/orders");
  request.send();
}

function createOrder() {
  const req = new XMLHttpRequest();
  req.open("POST", "https://troubled-peaceful-hell.glitch.me/orders");
  const body = {
    email: emailTextBox.value,
    type: typeTextBox.value,
    size: sizeTextBox.value,
    price: parseFloat(priceTextBox.value),
  };
  req.setRequestHeader("Content-Type", "application/json");
  req.send(JSON.stringify(body));
}

addButton.addEventListener("click", function () {
  createOrder();
});

function getByEmail() {
  const request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    const result = JSON.parse(this.response);
    const theOrder = `
    <h2>${result.email}</h2>
    <div>${result.type}</div>
    <div>${result.size}</div>
    <div>${result.price}</div>
    `;
    emailDisplay.innerHTML = theOrder;
  });
  let email = emailSearch.value;
  request.open(
    "GET",
    `https://troubled-peaceful-hell.glitch.me/orders/${email}`
  );
  request.send();
}

function deleteOrder() {
  const request = new XMLHttpRequest();
  request.addEventListener("load", function () {});
  let email = deleteSearch.value;
  request.open(
    "DELETE",
    `https://troubled-peaceful-hell.glitch.me/orders/${email}`
  );
  request.send();
}

displayOrders();

searchButton.addEventListener("click", function () {
  getByEmail();
});

deleteButton.addEventListener("click", function () {
  deleteOrder();
});
