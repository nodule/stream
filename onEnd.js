module.exports = {
  name: "onEnd",
  ns: "stream",
  description: "On End",
  phrases: {
    active: "Stream is ending..."
  },
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
  fn: function onEnd(input, $, output, state, done, cb, on) {
    var r = function() {
      $.stream.on('end', function(chunk) {
        output({
          out: $.create(chunk)
        });
        done();
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