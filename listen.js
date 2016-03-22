module.exports = {
  name: "listen",
  ns: "stream",
  description: "Listens for stream data.",
  phrases: {
    active: "Listening to stream"
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
      stream: {
        title: "Stream",
        type: "Stream"
      },
      error: {
        title: "Error",
        type: "object"
      },
      out: {
        title: "Buffer",
        type: "Buffer"
      }
    }
  },
  fn: function listen(input, $, output, state, done, cb, on) {
    var r = function() {
      output({
        stream: $.get('stream')
      });

      $.stream.on('data', function(val) {
        output({
          out: $.create(val)
        });
      });

      $.stream.on('error', function(err) {
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