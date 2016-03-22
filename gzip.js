module.exports = {
  name: "gzip",
  ns: "stream",
  description: "Gzip pipe",
  phrases: {
    active: "Gzipping..."
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
  fn: function gzip(input, $, output, state, done, cb, on, zlib) {
    var r = function() {
      output.stream = $.create($.stream.pipe(zlib.createGzip()));
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}