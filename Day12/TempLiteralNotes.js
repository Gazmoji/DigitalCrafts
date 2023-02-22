// Using Template Literal

for(let i = 0; i < movies.length; i++) {
    let movie = movies[i]
    const movieItem = `
    <li>
        <img src = "${movie.Poster}" />
        <h1>${movie.Title}</h1>
        <i>${movie.Year}</i>
    </li>`
    // concatenating
    // This will create a brand new string each time movieItem is concatenatied
    // thith moviesUL.innerHTML. This can be bad for performance for larger apps
    // moviesUL.innerHTML += movieItem

    //insertAdjacentHTML will not concatenate the strings
    //This allows for better performance for larger apps
    moviesUL.innerHTML += movieItem //moviesUL.insertAdjacentHTML('beforeend', movieItem)
}


// Template Literals with an array helper

const movieItems = movies.map(function(movie) {
    return ` <li>
    <img src = "${movie.Poster}" />
    <h1>${movie.Title}</h1>
    <i>${movie.Year}</i>
</li> `
})

moviesUL.innerHTML = movieItems.join('') //joins array based on what you specify