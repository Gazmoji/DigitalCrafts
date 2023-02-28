const button = document.getElementById("button");
const catfact = document.getElementById("catfact");

button.addEventListener("click", function () {
  getCatInfo();
});

function getCatInfo() {
  const request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    console.log(this);
    const result = JSON.parse(this.responseText);
    const list = `<li>
    ${result.data}
    </li>`;
    catfact.innerHTML = list;
  });
  request.open("GET", "https://meowfacts.herokuapp.com/");
  request.send();
}
