const theLayout = document.getElementById("layout");
const sourcesSelect = document.getElementById("sourcesSelect");
const dropDown = document.getElementById("sourcesSelect");

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

function filterSources() {
  if (this.value == "All Sources") {
    return generateInfo(articles);
  }
  const filteredArticles = articles.filter((article) => {
    return article.source.name === this.value;
  });
  generateInfo(filteredArticles);
}
generateInfo(articles);

dropDown.addEventListener("change", filterSources);
