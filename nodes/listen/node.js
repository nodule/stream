output = function(cb) {
  input.stream.on('data', function(data) {
    cb({ out: data });
  });

  input.stream.on('error', function(err) {
    cb({ error: err });
  });
};
