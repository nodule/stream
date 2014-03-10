output = function(cb) {
  // just an anonymous group now
  // can just be collect with >=
  var g = chi.group();
  input.stream.on('data', function(chunk) {
    cb({
      out: chunk
    }, g.item());
  });

  input.stream.on('end', function(chunk) {
    if(chunk) {// not sure if needed
      cb({ out: chunk }, g.item());
    }
    g.done();
    done(); // triggers complete.
  }
};
