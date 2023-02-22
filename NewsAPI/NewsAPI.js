const theLayout = document.getElementById("layout");
const sourcesSelect = document.getElementById("sourcesSelect");

const articles = news.articles;

const information = articles.map(function (articles) {
  return `<li>
    <p>${articles.author}</p>
    <h1>${articles.title}</h1>
    <p>${articles.description}</p>
    <p>${articles.url}</p>
    <img src=${articles.urlToImage} class= "articleImage">
    <img src=${articles.publishedAt} class= "articleImage">
    </li>`;
});
theLayout.innerHTML = information.join("");

const displaySources = sources.sources;

const theSources = displaySources.map((source) => {
  return `
  <option>${source.name}</option>`;
});

sourcesSelect.innerHTML = theSources;

//
const newsJS = articles.map((article) => article.source.name);

sourcesSelect.addEventListener("change", function () {
  const filterInformation = articles.filter(function (articles) {
    if (articles == newsJS) {
      return filterInformation;
    } else {
      return console.log("No News Found");
    }
  });
});
//
