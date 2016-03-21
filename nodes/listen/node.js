output = function(cb) {

  cb( { stream: input.stream } );

  input.stream.on('data', function(val) {
    cb({ out: val });
  });

  input.stream.on('error', function(err) {
    cb({ error: err });
  });
};
