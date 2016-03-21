output = function(cb) {
  // just an anonymous group now
  // can just be collect with >=
  // TODO: sometimes the grouping behavior is wanted
  // sometimes not, we do not want to group an
  // ongoing stream..
  var g = chi.group();

  $.stream.on('data', function(chunk) {

    cb({
      out: chunk
    }, g.item());

  });

  $.stream.on('end', function(chunk) {

    if(chunk) {// not sure if needed
      cb({ out: chunk }, g.item());
    }

    g.done();
    done(); // triggers complete.
  });
};
