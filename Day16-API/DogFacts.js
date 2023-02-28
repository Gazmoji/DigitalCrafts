const dogUL = document.getElementById("dogUL");

let request = new XMLHttpRequest();

request.addEventListener("load", function () {
  console.log(this);
  const result = JSON.parse(this.responseText);

  const dogItems = result.map(function (dogs) {
    return `<li>${dogs.fact}</li>`;
  });
  dogUL.innerHTML = dogItems.join("");
});

request.open("GET", "https://island-bramble.glitch.me/dog-facts");
request.send();
