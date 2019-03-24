module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: 'http://laravel.test/admin'
  },

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: '../../../public/assets/admin',

  // modify the location of the generated js/css/ims files.
  // make sure to do this only in production.
  publicPath: process.env.NODE_ENV === 'production'
    ? '/assets/admin/'
    : '/admin',

  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath: process.env.NODE_ENV === 'production'
    ? '../../../resources/views/admin.blade.php'
    : 'index.html'
}