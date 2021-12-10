const movieList = document.querySelector("#movies_list")
const addButton = document.querySelector("#form-submit")
const deleteMovie = document.querySelector(".list-section")

const imdbInput = document.querySelector("#form-imdb_id")
// console.log(imdbInput)
const titleInput = document.querySelector("#form-title")
// console.log(titleInput)
const yearInput = document.querySelector("#form-year")
// console.log(yearInput)
const genreInput = document.querySelector("#form-genre")
// console.log(genreInput)
const directorInput = document.querySelector("#form-director")
// console.log(directorInput)

document.addEventListener('DOMContentLoaded', () => {
  console.log('document is loaded')
  fetch("http://localhost:3000/movie_library")
  .then ((response) => response.json())
  .then((response) => {
    console.log(response)  
    response.map((item) => {
    movieList.innerHTML +=
    `<div id=${item.title}>
    <h5 class="item_header">${item.title}</h5>
    <a href="https://www.imdb.com/title/${item.imdb}" class="item_imdb">${item.imdb}</a>
    <p class="item_year">${item.year}</p>
    <p class="item_genre">${item.genre}</p>
    <p class="item_director">${item.director}</p>
    <button type="button" id="delete-movie">Delete</button>
    </div>`
  })

  addButton.addEventListener("click", (e) => {
    console.log(e)
    // console.log(titleInput.value);
    // console.log(imdbInput.value);
    // console.log(yearInput.value);
    // console.log(genreInput.value);
    // console.log(directorInput.value);
  
  fetch("http://localhost:3000/insert", {
    method:"POST",
    headers: {"content-Type" : "application/json"},
    body: JSON.stringify(
      {
        title: titleInput.value,
        imdb: imdbInput.value,
        year:  yearInput.value,
        genre: genreInput.value,
        director: directorInput.value
    }
    )
  })
  })

deleteMovie.addEventListener("click", (e) => {
  // console.log(e.path[1].children[0].innerText)
  // console.log(e.path[1].children[1].innerText)
  // console.log(e.path[1].children[2].innerText)
  // console.log(e.path[1].children[3].innerText)
  // console.log(e.path[1].children[4].innerText)
fetch("http://localhost:3000/delete", {
  method:"DELETE",
  headers: {"content-Type" : "application/json"},
  body: JSON.stringify(
    {
      title: e.path[1].children[0].innerText,
      imdb: e.path[1].children[1].innerText,
      year: e.path[1].children[2].innerText,
      genre: e.path[1].children[3].innerText,
      director: e.path[1].children[4].innerText
  }
  )
})
})

})
})


