module.exports = function (gulp, paths) {
  return function () {
    gulp.src(paths.src.resources)
    .pipe(gulp.dest(paths.build.resources))
  };
};