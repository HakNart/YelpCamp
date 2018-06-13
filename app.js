var express = require("express");
var app = express();

//Set up view engine
app.set("view engine", "ejs");

//HomePage route
app.get("/",function(req, res){
    res.render("landing");
});

app.listen(4000, function(){
    console.log("YelpCamp server is running...");
});