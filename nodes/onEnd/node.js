output = function(cb) {
  $.stream.on('end', function(chunk) {

    cb({ out: chunk } );

    done();

  });
};
