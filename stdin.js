module.exports = {
  name: "stdin",
  ns: "stream",
  description: "Read for stdin",
  phrases: {
    active: "Reading stdin..."
  },
  expose: ["process"],
  ports: {
    input: {
      encoding: {
        title: "Encoding",
        type: "string",
        "default": "utf-8"
      }
    },
    output: {
      stream: {
        title: "Stream",
        type: "Stream"
      }
    }
  },
  fn: function stdin(input, $, output, state, done, cb, on, process) {
    var r = function() {
      // test
      process.stdin.resume();
      process.stdin.setEncoding($.encoding);
      output.stream = $.create(process.stdin);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}