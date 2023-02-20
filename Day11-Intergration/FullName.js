let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

let submit = document.getElementById("Submit");
let fullName = document.getElementById("fullName");

submit.addEventListener("click", function () {
  fullName.innerHTML = `${firstName.value}, ${lastName.value}`;
});
