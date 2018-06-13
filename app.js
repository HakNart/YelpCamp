var express = require("express");
var app = express();

//HomePage route
app.get("/",function(req, res){
    res.send("Landing page.");
});

app.listen(4000, function(){
    console.log("YelpCamp server is running...");
});