var gulp = require('gulp');
var connect = require('gulp-connect');

var cfg = require('../config');

//live reload server
gulp.task('connect', function() {
    connect.server({
        root: cfg.BUILD_DIR,
        livereload: true,
        fallback: 'dist/index.html'
    });
});
