const allButton = document.getElementById("all");
const startersButton = document.getElementById("starters");
const entreesButton = document.getElementById("entrees");
const dessertsButton = document.getElementById("desserts");
const fullMenu = document.getElementById("fullList");

allButton.addEventListener("click", function () {
  const menu = dishes.map(function (dishes) {
    return `<li>
      <div>${dishes.title}</div>
      <div>${dishes.description}</div>
      <div>${dishes.price}</div>
      <img src = '${dishes.imageURL}' class = 'size'/>
      </li>`;
  });
  fullMenu.innerHTML = menu.join("");
});

const menu = dishes.map(function (dishes) {
  return `<li>
    <div>${dishes.title}</div>
    <div>${dishes.description}</div>
    <div>${dishes.price}</div>
    <img src = '${dishes.imageURL}' class = 'size'/>
    </li>`;
});
fullMenu.innerHTML = menu.join("");

const starterarray = dishes.filter(function (dish) {
  return dish.course == "Starters";
});

startersButton.addEventListener("click", function () {
  const starters = starterarray.map(function (starters) {
    return ` <li>
    <img src = '${starters.imageURL}' class = 'size' />
    <div>${starters.title}</div>
    <div>${starters.description}</div>
    <div>${starters.price}</div>
    </li>`;
  });
  fullMenu.innerHTML = starters.join(" ");
});

const entreesarray = dishes.filter(function (dish1) {
  return dish1.course == "Entrees";
});

entreesButton.addEventListener("click", function () {
  const entrees = entreesarray.map(function (entrees) {
    return ` <li>
      <img src = '${entrees.imageURL}' class = 'size' />
      <div>${entrees.title}</div>
      <div>${entrees.description}</div>
      <div>${entrees.price}</div>
      </li>`;
  });
  fullMenu.innerHTML = entrees.join(" ");
});

const dessertsarray = dishes.filter(function (dish2) {
  return dish2.course == "Desserts";
});

dessertsButton.addEventListener("click", function () {
  const desserts = dessertsarray.map(function (desserts) {
    return ` <li>
        <img src = '${desserts.imageURL}' class = 'size' />
        <div>${desserts.title}</div>
        <div>${desserts.description}</div>
        <div>${desserts.price}</div>
        </li>`;
  });
  fullMenu.innerHTML = desserts.join("");
});
