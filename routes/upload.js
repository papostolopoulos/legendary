"use strict"

var express = require("express")
var router = express.Router();


//---------Not sure if this is needed
var multer = require('multer');
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/uploads');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
});
var upload = multer({ storage: storage });
//----------------------------------------


router.route('/').get(function(req,res){
	res.render('upload')
	// res.send("Upload an image");
});

router.post('/', upload.any(), function (req, res, next) {
	console.log(req.files);
	res.send(req.files);
});

module.exports = router;
