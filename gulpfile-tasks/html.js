// unable to use the task in an external file as gulp-data throws an error when that's the case

module.exports = function (gulp, plugins, paths) {
  return function () {
    // Gets .html and .nunjucks files in pages
    gulp.src(paths.src.baseDir + '/html/pages/**/*.html')
    // Adding data to Nunjucks
    .pipe(plugins.data(function() {
      return require(paths.src.baseDir + '/html/data/data.json')
    }))
    .on('error', plugins.util.log)
    // Renders template with nunjucks
    .pipe(plugins.nunjucksRender({
        path: [paths.src.baseDir + '/html/templates']
      }))
    .on('error', plugins.util.log)
    // output files in app folder
    .pipe(gulp.dest(paths.build.baseDir))
  };
};