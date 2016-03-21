output = function(cb) {
  var sink = new pipette.Sink($.stream);
  sink.on('data', function(val) {
    cb({ out: $.create(val.toString()) });
  });

  sink.on('error', function(err) {
    cb({ error: $.create(err) });
  });
};
