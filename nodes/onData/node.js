output = function(cb) {
  input.stream.on('data', function(chunk) {
    cb({ out: chunk } );
  });
};
