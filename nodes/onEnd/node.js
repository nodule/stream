output = function(cb) {
  $.stream.on('end', function(chunk) {
    cb({ out: $.create(chunk) } );
    done();
  });
};
