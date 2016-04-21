var gulp = require('gulp');
var connect = require('gulp-connect');

var cfg = require('../config');

//copy html files
gulp.task('copy:src', function(){
    return gulp.src([
            cfg.SOURCES_DIR + '/index.html'
        ])
        .pipe(gulp.dest(cfg.BUILD_DIR))
        .pipe(connect.reload());
});

gulp.task('copy:watch', ['copy:src'], function () {
    gulp.watch([
            cfg.SOURCES_DIR + '/index.html'
        ], function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.start('copy:src');
        }
    );
});
