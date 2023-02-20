let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");

redButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});
blueButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});
