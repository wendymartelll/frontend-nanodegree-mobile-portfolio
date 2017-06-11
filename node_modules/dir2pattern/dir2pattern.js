/*
 * dir2pattern
 * https://github.com/poppinlp/node-dir-to-pattern
 *
 * Copyright (c) 2014 "PoppinLp" Liang Peng
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path'),
    fs = require('fs');

module.exports = function (str) {
    if (fs.existsSync(str) && fs.statSync(str).isDirectory()) {
        return path.normalize(str + path.sep + '**' + path.sep + '*.*');
    }
    return str;
};
