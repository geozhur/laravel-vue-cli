module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: 'http://laravel.test'
  },

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: '../../../public/assets/app',

  // modify the location of the generated js/css/ims files.
  // make sure to do this only in production.
  publicPath: process.env.NODE_ENV === 'production'
    ? '/assets/app/'
    : '/',

  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath: process.env.NODE_ENV === 'production'
    ? '../../../resources/views/app.blade.php'
    : 'index.html'
}