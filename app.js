var express = require("express");
var app = express();

//Set up view engine
app.set("view engine", "ejs");

//HomePage route
app.get("/",function(req, res){
    res.render("landing");
});

// Route "/campgrounds"
app.get("/campgrounds",function(req, res){
    var campgrounds = [
        {name: "Tapila Grand", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f8c971a0eab7ba_340.jpg"},
        {name: "Youreka", image: "https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b014439df8c97ea0efb7_340.jpg"},
        {name: "Alpha's Creator", image: "https://media.wired.com/photos/599b4cfd4fa6fc733c11e30d/master/pass/iStock-820873602.jpg"},
    ];
    
    res.render("campgrounds", {campgrounds: campgrounds});
})

app.listen(4000, function(){
    console.log("YelpCamp server is running...");
});