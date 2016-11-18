"use strict"
var express = require("express")
var router = express.Router();
var ExifImage = require('exif').ExifImage;
var incomingData = require('../putDataInTable');

//---------MULTER-----------
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
//------------------------------------------------

router.route('/').get(function(req,res){
    res.render('upload');
});

router.post('/', upload.any(), function (req, res, next) {

  var imageExifData = [];
    var filePaths = [];
    var numberHandled = 0;

    for (let i = 0; i < req.files.length; i++) {
      let filePath = req.files[i].path;

      try {
  			new ExifImage({ image : filePath }, function (error, exifData) {
          numberHandled++;
  				if (error) {
  					console.log('Error: ' + error.message);
  				}
  				else {
            var imagePrimaryData = {};
            imagePrimaryData.originalName = req.files[i].originalname;
            imagePrimaryData.encoding = req.files[i].encoding;
            imagePrimaryData.mimetype = req.files[i].mimetype;
            imagePrimaryData.destination = req.files[i].destination;
            imagePrimaryData.filename = req.files[i].filename;
            imagePrimaryData.path = req.files[i].path;
            imagePrimaryData.size = req.files[i].size;

            imageExifData.push({
              "primaryData": imagePrimaryData,
              "exifData": exifData
            });
            // imageExifData.push([imagePrimaryData, exifData]);
            console.log(imageExifData[0].exifData.gps);
            console.log(typeof imageExifData[0].exifData.gps.GPSLatitude);

  					// console.log('this is the metaData', exifData); // Do something with your data!
  				}

          if (numberHandled === req.files.length) {
						res.render('uploaded')
            // res.send(imageExifData);
            incomingData(imageExifData);
            console.log('all files handled');
          }
  			});
  		} catch (error) {
  			console.log('Error: ' + error.message);
  		}//End of the try
    }//End of the for loop

    console.log('loop finished');

});

module.exports = router;
