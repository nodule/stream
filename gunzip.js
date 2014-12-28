module.exports = {
  name: "gunzip",
  ns: "stream",
  description: "Gunzip pipe",
  phrases: {
    active: "Gunzipping..."
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
  fn: function gunzip(input, output, state, done, cb, on, zlib) {
    var r = function() {
      output.stream = input.stream.pipe(zlib.createGunzip());
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}