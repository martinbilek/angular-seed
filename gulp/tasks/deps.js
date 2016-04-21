var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');

var cfg = require('../config');

//copy html files
gulp.task('copy:src', function(){
    return gulp.src([
            cfg.SOURCES_DIR + '/index.html',
            cfg.SOURCES_DIR + '/**/*.html'
        ])
        .pipe(gulp.dest(cfg.BUILD_DIR))
        .pipe(connect.reload());
});

gulp.task('deps:js', function(){
    return gulp.src(cfg.BUILD_DEPS.JS)
        .pipe(concat('dependencies.js'))
        .pipe(gulp.dest(cfg.BUILD_DIR + '/vendor'));
});

gulp.task('deps:fonts', function(){
    return gulp.src(cfg.BUILD_DEPS.FONTS)
        .pipe(gulp.dest(cfg.BUILD_DIR + '/fonts'));
});
