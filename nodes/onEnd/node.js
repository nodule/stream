output = function(cb) {
  input.stream.on('end', function(chunk) {
    cb({ buffer: chunk } );
  });
};