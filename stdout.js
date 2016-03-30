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
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            process.stdout.write($.in);
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