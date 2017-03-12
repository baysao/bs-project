// PUBLIC DOMAIN
"use strict";
var logger = require('../common/logger')("queue");
var _ = require('underscore');
module.exports = function (options) {
    var seneca = this;
    seneca.add({role: 'prep_media', cmd: 'transcode'}, function (args, done) {
        var data = args.data;
        logger.log('info', {role: 'prep_media', cmd: 'transcode', action:'receive'}, data);
        done(null, {status: "ok"});
        var queueContext = seneca.queueContext;
        var trancodeQueue = queueContext.socket('PUSH');
        trancodeQueue.connect('TRANSCODE', function(){
            logger.log('info', {queue: 'TRANSCODE', action:'send'}, data);
            trancodeQueue.write(JSON.stringify(data));
        })
    });

    var plugin = 'prep_media';

    return {name: plugin};
}