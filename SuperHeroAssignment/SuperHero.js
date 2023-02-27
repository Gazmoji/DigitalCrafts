const superheroUL = document.getElementById("superheroUL");
const info = document.getElementById("information");

function firstRequest() {
  let request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    console.log(this);
    let result = JSON.parse(this.responseText);
    const movies = result.Search;
    console.log(movies);
    const superHeroItems = movies.map(function (superhero) {
      return `<li>
    <div>
    <a onclick="secondRequest('${superhero.imdbID}')">
    </div>
    <div>${superhero.Title}</div>
    <img src = ${superhero.Poster} class = 'image'>
    </a>
    </li>`;
    });
    superheroUL.innerHTML += superHeroItems;
  });

  request.open(
    "GET",
    "http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa"
  );
  request.send();
}

firstRequest();

function secondRequest(imdbID) {
  let requestTwo = new XMLHttpRequest();
  requestTwo.addEventListener("load", function () {
    let theResult = JSON.parse(this.responseText);

    const specific = `<li>
      <img src = ${theResult.Poster} class = 'image1'>
        <div class ='bigImage' >${theResult.Title}</div>
        <div class = 'year'>${theResult.Year}</div>
        <div class = 'year'>${theResult.Type}</div>
        <div class = 'year'>${theResult.Rated}</div>
        <div class = 'year'>${theResult.Released}</div>
        </li>`;

    info.innerHTML = specific;
  });

  let theID = imdbID;
  requestTwo.open("GET", `http://www.omdbapi.com/?i=${theID}&apikey=564727fa`);
  requestTwo.send();
}
