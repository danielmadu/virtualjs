var fs = require('fs')
var rollup = require('rollup')
var babel = require('rollup-plugin-babel')
var replace = require('rollup-plugin-replace')
var version = process.env.VERSION || require('../package.json').version

var main = fs
  .readFileSync('src/index.js', 'utf-8')
  .replace(/Virtual\.version = '[\d\.]+'/, "Virtual.version = '" + version + "'")
fs.writeFileSync('src/index.js', main)

var banner =
  '/*!\n' +
  ' * Virtual.js v' + version + '\n' +
  ' * (c) ' + new Date().getFullYear() + ' DanielMadu\n' +
  ' * Released under the MIT License.\n' +
  ' */'

// CommonJs Build
rollup.rollup({
  entry: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
})
.then(function (bundle) {
  return write('dist/virtual.common.js', bundle.generate({
    format: 'cjs',
    banner: banner
  }).code)
})
// Standalone Dev Build
.then(function () {
  return rollup.rollup({
    entry: 'src/index.js',
    plugins: [
      replace({
        'process.env.NODE_ENV': "'development'"
      }),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  })
  .then(function (bundle) {
    // bundle.write({
    //   dest: 'dist/virtual.js',
    //   format: 'umd',
    //   moduleName: 'Virtual'
    // })
    return write('dist/virtual.js', bundle.generate({
      format: 'umd',
      banner: banner,
      moduleName: 'Virtual'
    }).code)
  })
})
.catch(logError)

function write (dest, code) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(dest, code, function (err) {
      if (err) return reject(err)
      console.log(blue(dest) + ' ' + getSize(code))
      resolve()
    })
  })
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function logError (e) {
  console.log(e)
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
