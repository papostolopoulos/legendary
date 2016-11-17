window.onload = function () {
  console.log('inside');
  var dropzone = $('.dropzone');

  dropzone.on('dragover', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).addClass('dropzoneDrop');
  });

  dropzone.on('dragleave', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).removeClass('dropzoneDrop');
  });

  dropzone.on('drop', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).removeClass('dropzoneDrop');

    var files = e.originalEvent.dataTransfer.files;
    console.log(files);
    for (var i = 0; i < files.length; i++) {
      console.log('------------FILE-----------------');
      var file = files[i];
      console.log(file);
      console.log("---------------");

      for (key in file) {
        console.log(key + ": " + file[key]);

      }
      console.log(e.originalEvent.dataTransfer.getData(file.type));
      var fileReader = new FileReader();

      fileReader.onload = function (event) {
        var url = event.target.result;
        console.log("*************************");
        console.log(event.target === this);
        var image = document.createElement('img');
        document.body.appendChild(image);
        image.src = url;
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        // console.log(url);
      }
      fileReader.readAsDataURL(file);


    }
  });

};

//=========NOT NEEDED AT THE MOMENT=================

// toDataUrl('http://ghk.h-cdn.co/assets/cm/15/12/55091a87c39e4-0713-breville-blender-xln.jpg', function(base64Img) {
//   console.log(base64Img);
// });

// function toDataUrl(src, callback, outputFormat) {
//   var img = new Image();
//   img.crossOrigin = 'Anonymous';
//   img.onload = function() {
//     var canvas = document.createElement('CANVAS');
//     var ctx = canvas.getContext('2d');
//     var dataURL;
//     canvas.height = this.height;
//     canvas.width = this.width;
//     ctx.drawImage(this, 0, 0);
//     dataURL = canvas.toDataURL(outputFormat);
//     callback(dataURL);
//   };
//   img.src = src;
//   if (img.complete || img.complete === undefined) {
//     img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
//     img.src = src;
//   }
// }

// function upload(file){
//   xhr = new XMLHttpRequest();
//   //initiate request
//   xhr.open('post', 'file to send', true);
//
//   xhr.setRequestHeader('Content-Type', 'multipart/form-data');
//   xhr.setRequestHeader('X-File-Name', file.fileName)
//   console.log(file.name);
//
//   //send file
//   xhr.send(file);
// }
