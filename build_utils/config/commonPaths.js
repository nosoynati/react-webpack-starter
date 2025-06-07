const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "../../");

module.exports = {
  projectRootPath: PROJECT_ROOT,
  entryPath: path.join(PROJECT_ROOT, "src", "main.js"),
  outputPath: path.join(PROJECT_ROOT, "build"),
  appEntryPath: path.join(PROJECT_ROOT, "src"),
  buildUtilsPath: path.join(PROJECT_ROOT, "build_utils"),
};