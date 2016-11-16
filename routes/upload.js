"use strict"

var express = require("express")
var router = express.Router();


//---------Not sure if this is needed
var multer = require('multer');
var upload = multer({ dest: 'public/uploads/'})
//----------------------------------------


router.route('/').get(function(req,res){
	res.render('upload')
	// res.send("Upload an image");
});

module.exports = router;
