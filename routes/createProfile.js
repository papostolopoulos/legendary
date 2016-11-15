"use strict"
var express = require("express")
var router = express.Router();

router.route('/createProfile').get(function(req,res){
	res.send("CREATE PROFILE")
});

module.exports = router;
