'use strict';

var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		plugins = require('gulp-load-plugins')({
  		pattern: ['gulp-*', 'gulp.*'],
  		replaceString: /\bgulp[\-.]/,
  		lazy: true
  	});

var paths = {
	src: {
		baseDir: './_src',
		html: './_src/html',
		js: './_src/js/*.js',
		img: './_src/img/**/*.{png,jpg,jpeg,gif,svg}',
		resources: './_src/resources/**/*',
		styles: './_src/less/**/*.less',
		libs: './_src/lib',
		fonts: './_src/fonts/**/*'
	},
	build: {
		baseDir: './_dist',
		js: './_dist/js',
		img: './_dist/img',
		resources: './_dist/resources',
		styles: './_dist/css',
		fonts: './_dist/css/fonts'
	}
}

var defaultTasks = ['styles', 'js', 'copyLib', 'copyResources', 'images', 'nunjucks'];




gulp.task('clean', require('./gulpfile-tasks/clean')(paths));

gulp.task('styles', require('./gulpfile-tasks/styles')(gulp, browserSync, plugins, paths));

gulp.task('js', require('./gulpfile-tasks/scripts')(gulp, browserSync, paths));

gulp.task('copyLib', require('./gulpfile-tasks/libraries')(gulp, paths));

gulp.task('copyResources', require('./gulpfile-tasks/resources')(gulp, paths));

gulp.task('images', require('./gulpfile-tasks/images')(gulp, plugins, paths));

gulp.task('fonts', require('./gulpfile-tasks/fonts')(gulp, paths));


// for now, have to use the nunjucks task in gulpfile as externalising it throws an error with gulp-data
// gulp.task('nunjucks', require('./gulpfile-tasks/html')(gulp, plugins, paths));

// Nunjucks
gulp.task('nunjucks', ['copyData'], function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src(paths.src.html + '/pages/**/*.html')
  // Adding data to Nunjucks
	.pipe(plugins.data(function() {
	  return require(paths.src.html + '/data/data.json')
	}))
	.on('error', plugins.util.log)
  // Renders template with nunjucks
  .pipe(plugins.nunjucksRender({
      path: [paths.src.html + '/templates']
    }))
  .on('error', plugins.util.log)
  // output files in app folder
  .pipe(gulp.dest(paths.build.baseDir))
  .pipe(browserSync.stream())
});


gulp.task('copyData', function() {
	return gulp.src(paths.src.html + '/data/data.json')
	.pipe(gulp.dest(paths.build.baseDir + '/data'))
});



// Default task
// gulp.task('default', ['clean'], function() {
//     gulp.start(defaultTasks);
// });
gulp.task('default', function() {
    gulp.start(defaultTasks);
});



gulp.task('serve', ['default'], function() {
  browserSync.init({
    server: {
    	baseDir: paths.build.baseDir
    },
    files: [
	    {
	    	match: [paths.src.baseDir + '/html/**/*.html'],
	    	fn: function (event, file) {
	          gulp.start(['nunjucks'])
	      }
	    },
	    {
	    	match: [paths.src.styles],
	    	fn: function (event, file) {
	          gulp.start(['styles'])
	      }
	    },
	    {
	    	match: [paths.src.js],
	    	fn: function (event, file) {
	          gulp.start(['js'])
	      }
	    },
	    {
	    	match: [paths.src.img],
	    	fn: function (event, file) {
	          gulp.start(['images'])
	      }
	    }
    ]
  });
});