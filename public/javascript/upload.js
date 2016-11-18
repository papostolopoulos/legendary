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
