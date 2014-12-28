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
  fn: function sink(input, output, state, done, cb, on, pipette) {
    var r = function() {
      var sink = new pipette.Sink(input.stream);
      sink.on('data', function(data) {
        output({
          out: data.toString()
        });
      });

      sink.on('error', function(err) {
        output({
          error: err
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