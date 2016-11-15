"use strict"

var express = require("express")
var router = express.Router();

router.route('/').get(function(req,res){
	res.render('upload')
	// res.send("Upload an image");
});

module.exports = router;
