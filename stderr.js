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
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            process.stderr.write($.in);
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