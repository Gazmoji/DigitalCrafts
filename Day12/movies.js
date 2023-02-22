const movieUL = document.getElementById("movieUL");

for (let i = 0; i < movies.length; i++) {
  //create an li elements
  const li = document.createElement("li");

  //1. create the element
  //2. assign the innerHTML
  //3. append it to the parent div
  const img = document.createElement("img");
  img.setAttribute("src", movies[i].Images[0]);
  img.setAttribute("width", "125px");

  const divTitle = document.createElement("div");
  divTitle.innerHTML = `Title: ${movies[i].Title}`;

  const iYear = document.createElement("i");
  iYear.innerHTML = `Year: ${movies[i].Year}`;

  //append it to the movieUL
  movieUL.appendChild(li);
  movieUL.appendChild(img);
  movieUL.appendChild(divTitle);
  movieUL.appendChild(iYear);
}



