const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

let submit = document.getElementById("Submit");
let fullName = document.getElementById("fullName");

submit.addEventListener("click", function () {
  fullName.innerHTML = `${firstName.value}, ${lastName.value}`;
});
