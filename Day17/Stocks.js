const ulList = document.getElementById("ULlist");

function loadInfo() {
  const request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    console.log(this);
    const result = JSON.parse(this.responseText);
    const list = result.map(function (information) {
      return `<li>
    ${information.symbol}
    ${information.title}
    ${information.price}
    ${information.quantity}
    </li>`;
    });
    ulList.innerHTML = list;
  });

  request.open("GET", "https://endurable-bead-polo.glitch.me/stocks");
  request.send();
}

loadInfo();

function postInfo() {
  const req = new XMLHttpRequest();
}
