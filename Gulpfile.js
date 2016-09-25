var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');
/**
* for unit tests
**/

var Server = require('karma').Server;

gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('./app/js/**/*.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build'))
});


gulp.task('sass', function () {
  gulp.src('./app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
  gulp.watch('./app/scss/**/*.scss', ['sass']);
  gulp.watch('./app/js/**/*.js', ['scripts']);
});

/**
*
* tests tasks
*
**/

gulp.task('test', function(done) {
  Server.start({
    configFile: __dirname + '/tests/karma.conf.js',
    singleRun: true
  }, function() {
        done();
  });
});
