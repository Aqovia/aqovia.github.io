module.exports = function (gulp, paths) {
  return function () {
    gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.build.fonts))
  };
};