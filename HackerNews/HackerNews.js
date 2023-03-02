const hackerList = document.getElementById("hackerList");
const hackerID = document.getElementById("hackerID");
const searchButton = document.getElementById("searchButton");

function show() {
  fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    .then((response) => response.json())
    .then((array) => {
      array.map((id) => showList(id));
    });
}

function showList(hackerID) {
  let id = hackerID;
  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then((response) => response.json())
    .then((information) => {
      const listInformation = `<li>
          ${information.title}
          <a href='${information.url}'>Article Link</a>
          ${information.by}
          ${information.time}</li>`;

      hackerList.innerHTML += listInformation;
    });
}

function searchList() {
  let id = parseInt(hackerID.value);
  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then((response) => response.json())
    .then((information) => {
      console.log(information);
      const listInformation = `<li>
        ${information.title}
        <a href='${information.url}'>Article Link</a>
        ${information.by}
        ${information.time}</li>`;

      hackerList.innerHTML = listInformation;
    });
}
show();

searchButton.addEventListener("click", function () {
  searchList();
});
