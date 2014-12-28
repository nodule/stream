module.exports = {
  name: "stderr",
  ns: "stream",
  description: "Write for stderr",
  async: true,
  phrases: {
    active: "Writing to stderr"
  },
  expose: ["process"],
  ports: {
    input: {
      "in": {
        title: "Input",
        type: "any",
        fn: function __IN__(data, x, source, state, input, output, process) {
          var r = function() {
            process.stderr.write(data);
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