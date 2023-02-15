let nodeResolve = require("rollup-plugin-node-resolve");
const common = require("./rollup");
const commonjs = require("rollup-plugin-commonjs");

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/index.aio.js",
    format: "umd",
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    name: common.name,
    banner: common.banner,
  },
  plugins: [
    nodeResolve({
      main: true,
      extensions: [".js"],
    }),
    commonjs({ include: "node_modules/**" }),
    common.getCompiler(),
  ],
};
