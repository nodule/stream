output = function(cb) {

  cb( { stream: input.stream } );

  input.stream.on('data', function(data) {
    cb({ out: data });
  });

  input.stream.on('error', function(err) {
    cb({ error: err });
  });
};
