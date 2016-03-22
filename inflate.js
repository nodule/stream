module.exports = {
  name: "inflate",
  ns: "stream",
  description: "Inflate pipe",
  phrases: {
    active: "Inflating..."
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
      }
    }
  },
  dependencies: {
    npm: {
      zlib: require('zlib')
    }
  },
  fn: function inflate(input, $, output, state, done, cb, on, zlib) {
    var r = function() {
      output.stream = $.create($.stream.pipe(zlib.createInflate()));
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}