module.exports = {
  // proxy API requests to Valet during development
  devServer: {
    proxy: 'http://laravel.test'
  },

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: '../../../public/assets/admin',

  publicPath: '/assets/admin/',

  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath: '../../../resources/views/admin.blade.php'
}