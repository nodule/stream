module.exports = {
  name: "stdout",
  ns: "stream",
  description: "Write for stdin",
  async: true,
  phrases: {
    active: "Writing to stdout..."
  },
  expose: ["process"],
  ports: {
    input: {
      "in": {
        title: "Input",
        type: "any",
        fn: function __IN__(data, x, source, state, input, output, process) {
          var r = function() {
            process.stdout.write(data);
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {}
  },
  state: {}
}