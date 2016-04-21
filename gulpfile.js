var gulp = require('gulp');
var fs = require('fs');
var utils = require('./gulp/utils');

fs.readdirSync('./gulp/tasks/')
    .filter(utils.onlyScripts)
    .forEach(function (task) {
        require('./gulp/tasks/' + task);
    });

gulp.task('build', ['pre-clean', 'less', 'copy:deps', 'copy:src', 'copy:fonts']);
// gulp.task('build', ['pre-clean', 'compile:app', 'less', 'copy:deps', 'copy:src', 'copy:fonts']);

gulp.task('default', ['build', 'connect', 'less:watch'], function() {
    // gulp.watch(['src/**/*.ts'], ['compile:app']);
    gulp.watch(['src/**/*.js', 'src/**/*.html'], ['copy:src']);
});
