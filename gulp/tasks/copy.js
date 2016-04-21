var gulp = require('gulp');
var connect = require('gulp-connect');

var cfg = require('../config');

//copy html/css/js files
gulp.task('copy:src', function(){
    return gulp.src([
        'src/**/*.js',
        'src/index.html',
        'src/**/*.html'
    ])
    .pipe(gulp.dest(cfg.BUILD_DIR))
    .pipe(connect.reload());
});

//copy dependencies to dist folder
gulp.task('copy:deps', function(){
    return gulp.src([
        'node_modules/angular/angular.js',
        'node_modules/@angular/router/angular1/angular_1_router.js',
        // 'node_modules/systemjs/dist/system.src.js',
    ]).pipe(gulp.dest(cfg.BUILD_DIR + '/vendor'));
});

//copy fonts to dist folder
gulp.task('copy:fonts', function(){
    return gulp.src([
        'node_modules/bootstrap/fonts/*'
    ]).pipe(gulp.dest(cfg.BUILD_DIR + '/fonts'));
});
