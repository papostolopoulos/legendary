var express = require("express")
var router = express.Router();

router.route('/').get(function(req,res){
	res.send("You have no friends. (lol)")
});

module.exports = router;