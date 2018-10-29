var del = require('del');

module.exports = function (paths) {
  return function () {
    del.sync(paths.build.baseDir, {force: true})
  };
};