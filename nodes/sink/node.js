output = function(cb) {

  var sink = new Sink(input.stream);
  sink.on('data', function(data) {
    cb({ out: data });
  });

  sink.on('error', function(err) {
    cb({ error: err });
  });
};
