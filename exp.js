// const { name } = require('ejs');
var express = require('express');
var app = express();
var data = require("./data")

app.set("view engine","ejs")

app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.get("/",(req,res)=> {
    res.render("index")
})
app.get("/signup",(req,res)=> {
    res.render("signup")
})
app.post("/create",(req,res)=> {
    res.send(req.body)
})

app.listen(3100,() => {
    console.log("listening on port 3100")
})