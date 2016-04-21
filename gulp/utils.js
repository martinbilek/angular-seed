var path = require('path');

// Filters out non .js files. Prevents
// accidental inclusion of possible hidden files
exports.onlyScripts = function (name) {
    return /(\.js$)/i.test(path.extname(name));
};
