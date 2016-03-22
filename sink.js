module.exports = {
  name: "sink",
  ns: "stream",
  description: "Accepts a stream and converts it back into a string.",
  phrases: {
    active: "Sinking in"
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
      error: {
        title: "Error",
        type: "object"
      },
      out: {
        title: "String",
        type: "string"
      }
    }
  },
  dependencies: {
    npm: {
      pipette: require('pipette')
    }
  },
  fn: function sink(input, $, output, state, done, cb, on, pipette) {
    var r = function() {
      var sink = new pipette.Sink($.stream);
      sink.on('data', function(val) {
        output({
          out: $.create(val.toString())
        });
      });

      sink.on('error', function(err) {
        output({
          error: $.create(err)
        });
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