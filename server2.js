//jshint essveersion:6

const express = require("express");

const app = express();

app.get("/", function (request, response) {
    response.send("<h1>Hello, World!</h1>");
});

app.listen(3000, function (){
    console.log("Server Started on Port 3000");
});