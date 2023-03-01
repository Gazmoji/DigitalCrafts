const coffeeList = document.getElementById("coffeeList");
const emailTextBox = document.getElementById("emailTextBox");
const typeTextBox = document.getElementById("typeTextBox");
const size = document.getElementById("size");
const priceTextBox = document.getElementById("priceTextBox");
const addButton = document.getElementById("addButton");

function showOrders() {
  fetch("https://troubled-peaceful-hell.glitch.me/orders")
    .then((response) => response.json())
    .then((coffee) => {
      const theCoffee = coffee.map(function (orders) {
        return `<li>
        ${orders.email}
        ${orders.type}
        ${orders.size}
        ${orders.price}
        </li>`;
      });
      coffeeList.innerHTML = theCoffee;
    });
}
showOrders();

function addOrder() {
  const body = {
    email: emailTextBox.value,
    size: size.value,
    type: typeTextBox.value,
    price: priceTextBox.value,
  };

  fetch("https://troubled-peaceful-hell.glitch.me/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

addButton.addEventListener("click", function () {
  addOrder();
});
