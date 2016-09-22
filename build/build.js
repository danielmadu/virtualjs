var fs = require('fs')
var rollup = require('rollup')
var babel = require('rollup-plugin-babel')
var version = process.env.VERSION || require('../package.json').version

var main = fs
  .readFileSync('src/index.js', 'utf-8')
  .replace(/Vue\.version = '[\d\.]+'/, "Vue.version = '" + version + "'")
fs.writeFileSync('src/index.js', main)
