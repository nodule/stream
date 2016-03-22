module.exports = {
  name: "base64Decode",
  ns: "stream",
  description: "Base64 decode stream",
  phrases: {
    active: "Decoding base64..."
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
      "base64-stream": require('base64-stream')
    }
  },
  fn: function base64Decode(input, $, output, state, done, cb, on, base64_stream) {
    var r = function() {
      output.stream = $.create($.stream.pipe(base64_stream.encode()));
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}