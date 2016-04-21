var path = require('path');

var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var html2js = require('gulp-html2js');

var cfg = require('../config');

gulp.task('compact:js', function() {
    return gulp.src(cfg.SOURCES_DIR + '/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest(cfg.BUILD_DIR))
        .pipe(connect.reload());
});

gulp.task('compact:html', function() {
    return gulp.src([
            cfg.SOURCES_DIR + '/**/*.html',
            '!' + cfg.SOURCES_DIR + '/index.html'
        ])
        .pipe(html2js({
            outputModuleName: 'app.templates',
            useStrict: true,
            base: 'src'
        }))
        .pipe(concat('app.templates.js'))
        .pipe(gulp.dest(cfg.BUILD_DIR))
        .pipe(connect.reload());
});

gulp.task('compact:watch', ['compact:html', 'compact:js'], function () {
    gulp.watch([
            cfg.SOURCES_DIR + '/**/*.js',
            cfg.SOURCES_DIR + '/**/*.html',
            '!' + cfg.SOURCES_DIR + '/index.html'
        ], function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');

            var filetype = path.extname(event.path).substring(1);
            if (filetype == 'html') {
                gulp.start('compact:html');
            } else if (filetype == 'js') {
                gulp.start('compact:js');
            } else {
                throw new Error('Unknown filetype "' + filetype + '" (' + event.path + ')');
            }
        }
    );
});
