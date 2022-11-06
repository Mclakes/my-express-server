//jshint essveersion:6

const express = require("express");

const app = express();

// console.log(__dirname)

app.get("/", function (request, response) {
    console.log(request);
    // response.send("Hello World")
});

app.listen(3000, function (){
    console.log("Server Started on Port 3000");
});