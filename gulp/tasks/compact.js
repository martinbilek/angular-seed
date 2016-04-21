var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');

var cfg = require('../config');

gulp.task('compact:js', function() {
    return gulp.src('src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest(cfg.BUILD_DIR))
        .pipe(connect.reload());
});
