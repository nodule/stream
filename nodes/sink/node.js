output = function(cb) {

  var sink = new pipette.Sink(input.stream);
  sink.on('data', function(data) {
    cb({ out: data });
  });

  sink.on('error', function(err) {
    cb({ error: err });
  });
};
