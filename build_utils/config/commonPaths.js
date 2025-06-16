const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "../../");

const PATHS = {
  root: PROJECT_ROOT,
  src: path.join(PROJECT_ROOT, "src"),
  build: path.join(PROJECT_ROOT, "build"),
  public: path.join(PROJECT_ROOT, "public"),
  entryPath: path.join(PROJECT_ROOT, "src/main.js"),
  nodeModules: path.resolve(PROJECT_ROOT,"node_modules"),
  buildUtilsPath: path.join(PROJECT_ROOT, "build_utils"),
  outputPath: path.resolve(PROJECT_ROOT,"build"),
};
module.exports = PATHS