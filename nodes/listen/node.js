output = function(cb) {

  cb( { stream: $.stream } );

  $.stream.on('data', function(val) {
    cb({ out: val });
  });

  $.stream.on('error', function(err) {
    cb({ error: err });
  });
};
