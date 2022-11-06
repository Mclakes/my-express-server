//jshint essveersion:6

const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("conctact me at: lekanhayo@gmail.com")
});

app.get("/about", function(req, res) {
    res.send("My name is Olalekan Bankole, A student of metallurgical and materials Engineering, Faculty of engineering, university of lagos, Nigeria, Thank you.")
});

app.get("/hobbies", function(req, res){
    res.send("i love you baby")
});

app.listen(3000, function (){
    console.log("Server Started on Port 3000");
});