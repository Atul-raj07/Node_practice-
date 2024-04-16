// const { name } = require('ejs');
var express = require('express');
var app = express();
var data = require("./data")

app.set('view engine', 'ejs')


app.get("/",(req,res)=> {
    res.render("index")
})
app.get("/about/:id",(req,res)=> {
    var users = data.find(val => val.id === Number(req.params.id)  )
    if (!users) {
        res.send("nahi chala"); // Render an error page if the user is not found
    } else {
        res.render('about', { users });
    }
})

app.listen(3000,() => {
    console.log("listening on port")
})