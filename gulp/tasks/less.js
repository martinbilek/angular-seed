var gulp = require('gulp');
var less = require('gulp-less');
var utils = require('gulp-util');
var connect = require('gulp-connect');
var concat = require('gulp-concat');

var cfg = require('../config');

gulp.task('less', function(){
    return gulp.src([
            'src/**/*.less'
        ])
        .pipe(less({paths: 'node_modules'}).on('error', utils.log))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(cfg.BUILD_DIR))
        .pipe(connect.reload());
});

gulp.task('less:watch', ['less'], function () {
    gulp.watch([
            'src/**/*.less'
        ], function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.start('less');
        }
    );
});
