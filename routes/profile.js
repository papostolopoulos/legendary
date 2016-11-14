"use strict"

var express = require("express")
var router = express.Router();

router.route('/test')
	.get(function(req, res){
	res.send("My profile goes here. \n\n This will include First Name, Last Name, Date of birth, interests, and Profile Picture")
});

module.exports = router;
