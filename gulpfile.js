var fs = require('fs');
console.log('------ base-app ------');
console.log('./gulpfile.js: ', fs.existsSync('./gulpfile.js'));
console.log('__dirname: ', __dirname);
console.log('process.cwd(): ', process.cwd());

var gulp = require('gulp');
	sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');

// Trying to find index.html in sibling directory
gulp.task('express', function() {
    var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 4002}));
    var path = require('path');
    __parentDirArray = __dirname.split(path.sep);
    // __parentDirArray.pop();
    __parentDirArray.push('app');
  app.use(express.static( __parentDirArray.join('/') ));
  app.listen(4000);
});


var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(4002);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('sass', function() {
    return sass('app/sass', { style: 'expanded' })
        .pipe(gulp.dest('app/css'))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
	    .pipe(gulp.dest('app/css'))
	    .pipe(rename({suffix: 'min'}))
	    .pipe(minifycss())
	    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function() {
  gulp.watch('app/sass/*.scss', ['sass']);
  gulp.watch('app/*.html', notifyLiveReload);
  gulp.watch('app/css/*.css', notifyLiveReload);
  gulp.watch('app/js/*.js', notifyLiveReload);
});


gulp.task('default', ['sass', 'express', 'livereload', 'watch'], function() {

});
