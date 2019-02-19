var del = require('del');

module.exports = function (paths) {
  return function () {
  	var cleanList = paths.build.baseDir == "./" ? [paths.build.baseDir + '*.html', paths.build.styles, paths.build.js, paths.build.img, paths.build.resources] : paths.build.baseDir;
    del.sync(cleanList, {force: true})
  };
};