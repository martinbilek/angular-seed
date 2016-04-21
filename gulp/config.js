'use strict';

var CFG = {
    BUILD_DIR: './dist',
    SOURCES_DIR: './src',

    BUILD_DEPS: {
        JS: [
            'node_modules/angular/angular.js',
            'node_modules/@angular/router/angular1/angular_1_router.js'
        ],
        FONTS: [
            'node_modules/bootstrap/fonts/*'
        ]
    }
};

module.exports = CFG;
