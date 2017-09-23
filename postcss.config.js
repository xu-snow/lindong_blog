
//? 可以用.postcssrc.js代替?
module.exports = {
  plugins: [
    require('autoprefixer')({ browsers: ['last 3 versions'] })
  ]
}