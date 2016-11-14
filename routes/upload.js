var express = require("express")
var router = express.Router();

router.route('/upload').get(function(req,res){
	res.send("Upload an image")
});

module.exports = router;