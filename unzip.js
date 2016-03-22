module.exports = {
  name: "unzip",
  ns: "stream",
  description: "Unzip pipe",
  phrases: {
    active: "Unzipping..."
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
  fn: function unzip(input, $, output, state, done, cb, on, zlib) {
    var r = function() {
      output.stream = $.create($.stream.pipe(zlib.createUnzip()))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}