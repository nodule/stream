module.exports = {
  name: "onData",
  ns: "stream",
  description: "On Data",
  phrases: {
    active: "Doing on data..."
  },
  expose: ["chi"],
  ports: {
    input: {
      stream: {
        title: "Stream",
        type: "Stream",
        required: true
      }
    },
    output: {
      out: {
        title: "Output",
        type: "any"
      }
    }
  },
  fn: function onData(input, output, state, done, cb, on, chi) {
    var r = function() {
      // just an anonymous group now
      // can just be collect with >=
      // TODO: sometimes the grouping behavior is wanted
      // sometimes not, we do not want to group an
      // ongoing stream..
      var g = chi.group();

      input.stream.on('data', function(chunk) {

        output({
          out: chunk
        }, g.item());

      });

      input.stream.on('end', function(chunk) {

        if (chunk) { // not sure if needed
          output({
            out: chunk
          }, g.item());
        }

        g.done();
        done(); // triggers complete.
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}