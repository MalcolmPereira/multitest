const path = require('path');

module.exports = {
  mode: 'production',
  entry: './dist/src/index.js',
  target: 'node',
  externals: [
        "node_modules"
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'multi-test-api.js'
  }
};
