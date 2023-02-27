const image = document.getElementById("dogimage");

const button = document.getElementById("button");

button.addEventListener("click", function () {
  getDogInfo();
});

function getDogInfo() {
  const request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    const result = JSON.parse(this.responseText);
    image.setAttribute("src", `${result.message}`);
  });
  request.open("GET", "https://dog.ceo/api/breeds/image/random");
  request.send();
}

function displayDogInfo(dogInfo) {
  dogImage.setAttribute("src", dogInfo.message);
}
