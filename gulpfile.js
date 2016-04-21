var gulp = require('gulp');
var fs = require('fs');
var utils = require('./gulp/utils');

fs.readdirSync('./gulp/tasks/')
    .filter(utils.onlyScripts)
    .forEach(function (task) {
        require('./gulp/tasks/' + task);
    });

gulp.task('build', [
    'clean',
    'compact:js',
    'less',
    'deps:js',
    'deps:fonts',
    'copy:src'
]);

gulp.task('default', ['build', 'connect', 'less:watch'], function() {
    gulp.watch(['src/**/*.js'], ['compact:js']);
    gulp.watch(['src/**/*.js', 'src/**/*.html'], ['copy:src']);
});
