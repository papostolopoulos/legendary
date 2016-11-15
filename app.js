var express = require("express");
var app = express();
var routes = require("./routes/index");
const PORT = 1337;

app.use('/profile', routes.profile);
app.use('/createProfile', routes.createProfile);
app.use('/friends',routes.friends);
app.use('/upload', routes.upload);

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("index");
})



app.listen("1337", function(){
	console.log("Listening on port 1337")
})