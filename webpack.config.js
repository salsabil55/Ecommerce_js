const path = require("path");

module.exports = {
  entry: "./index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
};
