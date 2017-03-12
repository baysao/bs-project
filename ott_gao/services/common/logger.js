/**
 * Created by baysao on 10/01/2016.
 */
var winston = require('winston');
var path = require('path');
var config = require("nconf");
config.file('./config.json');

var logdir = config.get("log_dir");
var mkdirp = require('mkdirp');
mkdirp.sync(logdir);
var loggerCache = {};
module.exports = function (filename) {
    if (!loggerCache[filename])
        loggerCache[filename] = new (winston.Logger)({
            transports: [
                new (winston.transports.File)({filename: path.join(logdir, filename + '.log')})
            ]
        })
    return loggerCache[filename];
};