module.exports = function (gulp, plugins, paths) {
  return function () {
    gulp.src(paths.src.img)
    .pipe(plugins.imagemin())
    .on('error', plugins.util.log)
    .pipe(gulp.dest(paths.build.img))
  };
};