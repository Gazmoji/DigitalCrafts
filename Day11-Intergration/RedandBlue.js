let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");
let randomImage = document.getElementById("randomImage");
let changer = document.getElementById("changer");

redButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});
blueButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

changer.addEventListener("click", function () {
  randomImage.src =
    "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg";
});
