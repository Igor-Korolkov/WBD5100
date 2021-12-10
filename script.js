const signup = document.querySelector("#submit_sign_up")
const login = document.querySelector("#submit_log_in")
const signupEmail = document.querySelector("#sign_up")
const loginEmail = document.querySelector("#log_in")
const signGoogle = document.querySelector("#google_signIn")

const { createClient } = supabase;
supabase = createClient(
	"https://stiqeuwnsolenfkrnste.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDIxNzEwMCwiZXhwIjoxOTQ5NzkzMTAwfQ.OyDjyjl1xf9_Q8ao3AJTZTzQOlIXjj9Q9CCq4xDA020"
);

console.log(supabase);
const user = supabase.auth.user();
console.log(user);

//DATALIST
// fetch("http://localhost:3000/movie_lists/")
// .then ((response) => response.json())
// .then((response) => console.log(response))

// //SIGNUP
// signup.addEventListener("click", (e) => {

//   fetch("http://localhost:3000/signup", {
//     method: "POST",
//     headers: { "Content-Type": "application/json"},
//     body: JSON.stringify({
//       email:signupEmail.value
//     })
//   })
//   console.log(e)
//   console.log(signupEmail.value)
// })

// //LOGIN
// login.addEventListener("click", (e) => {
  
//   fetch("http://localhost:3000/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json"},
//     body: JSON.stringify({
//       email:signupEmail.value
//     })
//   })
//   console.log(e)
//   console.log(loginEmail.value)
// })

//signGOOGLE
signGoogle.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log(e)

  const { user, session, error } = await supabase.auth.signIn(
      {
          provider: "google",
      },
      {
          redirectTo: "http://localhost:3000/library/",
      }
  );
});