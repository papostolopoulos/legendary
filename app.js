var express = require("express")
var app = express()
var routes = require("./routes/index")
var cookieParser = require('cookie-parser')
var cookieSession = ('cookie-session')
var bodyParser = require('body-parser')
const PORT = 1337;

<<<<<<< HEAD
app.use('/profile', routes.profile);
app.use('/createProfile', routes.createProfile);
=======
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cookieParser());
app.use('/createProfile', routes.createProfile);
app.use('/profile', routes.profile);
>>>>>>> 887dbfdad99165b20978f563673c97b8999d986e
app.use('/friends',routes.friends);
app.use('/upload', routes.upload);


app.get("/", function(req, res){
	console.log('Cookies: ', req.cookies);
	res.render("index");
})

app.listen("1337", function(){
	console.log(`Server is listening on port ${PORT}`)
})
