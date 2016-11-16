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
    console.log(e);
    e.stopPropagation();
    e.preventDefault();
    $(this).removeClass('dropzoneDrop');

    var files = e.originalEvent.dataTransfer.files;
    console.log(Array.isArray(files));
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      console.log(file);
      console.log("---------------");
      var b64 = btoa(file);
      for (key in file) {
        console.log(key + ": " + file[key]);
        console.log(b64);

      }
      // upload(file);
    }
  });

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
};
