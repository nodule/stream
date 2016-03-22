module.exports = {
  name: "deflate",
  ns: "stream",
  description: "Deflate pipe",
  phrases: {
    active: "Deflating..."
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
  fn: function deflate(input, $, output, state, done, cb, on, zlib) {
    var r = function() {
      output.stream = $.create($.stream.pipe(zlib.createDeflate()));
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}