const postsUL = document.getElementById("posts");

for (let i = 0; i < postsUL.length; i++) {
  const li = document.createElement("li");
  postsUL.appendChild(li);
  const titleDiv = document.createElement("div");
  li.appendChild(titleDiv);
  const bodyDiv = document.createElement("div");
  li.appendChild(bodyDiv);
  titleDiv.innerHTML = postsUL[i].title;
  bodyDiv.innerHTML = postsUL[i].body;
}
