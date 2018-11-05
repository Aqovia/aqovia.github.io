module.exports = function (gulp, paths) {
  return function () {
    gulp.src(paths.src.libs + '/**/*')
    .pipe(gulp.dest(paths.build.js))
  };
};