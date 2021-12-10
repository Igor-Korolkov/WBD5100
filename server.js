//EXPRESS AND CORS
import express from "express";
import cors from "cors";
import { createClient } from '@supabase/supabase-js'

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

//SUPABASE
const URL = "https://stiqeuwnsolenfkrnste.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDIxNzEwMCwiZXhwIjoxOTQ5NzkzMTAwfQ.OyDjyjl1xf9_Q8ao3AJTZTzQOlIXjj9Q9CCq4xDA020";

const supabase = createClient(URL, KEY);

//LIBRARY DATA
app.get("/movie_library/", async (req, res) => {
    const {data, error } = await supabase.from('movie_library').select('*')
    // console.log(data)
    res.send(data); 
})
app.delete("/delete", async (req, res) => {
    let {data, error} = await supabase.from('movie_library').delete().match(req.body)
    console.log(req.body)
    console.log(data)
    console.log(error)
})
app.post("/insert", async (req, res) => {
    let {data, error} = await supabase.from('movie_library').insert(req.body)
    console.log(req.body)
    console.log(data)
    console.log(error)
})

//LISTS DATA
app.get("/movie_lists/", async (req, res) => {
    const {data, error } = await supabase.from('movie_lists').select('*')
    // console.log(data)
    res.send(data); 
})

// //MOVIE TITLES
// app.get("/movie_titles/", async (req, res) => {
//     const {data, error } = await supabase.from('movie_library').select('*')
//res.send(data); 
// })

//SIGNUP
// app.post("/signup/", async (req ,res) => {
//     const { user, session, error } = await supabase.auth.signUp(req.body)
//     console.log(user)
//     console.log(req.body)
// })

//LOGIN
// app.post("/login/", async (req ,res) => {
//     console.log(req.body)
// })

app.listen(port, () => {
    console.log(`${port} OK`);
})


