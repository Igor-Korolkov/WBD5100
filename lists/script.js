// //SUPABASE
// const { createClient } = supabase;
// supabase = createClient(
// 	"https://stiqeuwnsolenfkrnste.supabase.co",
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDIxNzEwMCwiZXhwIjoxOTQ5NzkzMTAwfQ.OyDjyjl1xf9_Q8ao3AJTZTzQOlIXjj9Q9CCq4xDA020"
// );

// console.log(supabase);
// const user = supabase.auth.user();

const movieList = document.querySelector("#list-item")

fetch("http://localhost:3000/movie_lists")
.then ((response) => response.json())
.then((response) => {
  console.log(response)
  
  for (let i = 0; i < response.length; i++) {
    console.log(response.length)
    const movieTitleList =  () => {
      for (let i = 0; i < response.length; i++) {
     console.log(response[i].title) 
      }
    }
    movieList.innerHTML +=
    `<h5 class="item_header">${response[i].id}. ${response[i].title}</h5>
    <p class="item_author">Crated by: ${response[i].author}</p>
    <p class="item_description">${response[i].description}</p>
    <p class="item_movies">${response[i].movies}</p>`
}
  // response.map((item) => {
  //   movieList.innerHTML +=
  //   `<h5 class="item_header">${item.id}. ${item.title}</h5>
  //   <p class="item_author">Crated by: ${item.author}</p>
  //   <p class="item_description">${item.description}</p>
  //   <p class="item_movies">${item[i].movies}</p>`
  // })
})

const movieItems = document.querySelectorAll(".item_movies");

console.log(movieItems);
console.log(Array.from(movieItems));

for (var i = 0, element; element = movieItems[i]; i++) {
  console.log(element);
}
