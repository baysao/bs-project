// PUBLIC DOMAIN
"use strict";
var async = require('async');
var logger = require('../common/logger')("queue");
var _ = require('underscore');
module.exports = function (options) {
    var seneca = this;
    seneca.add({role: 'content_source', cmd: 'content_raw_new'}, function (args, done) {
        done(null, {status: "ok"});
        var data = args.data;
        logger.log('info', {role: 'content_source', cmd: 'content_raw_new', action: 'receive'}, data);
        var content_raw = seneca.make$('content_raw');
        var db = seneca.Database;
        var coll = db.collection('content_raw');
        logger.log('info', {role: 'content_source', cmd: 'content_raw_new', action: 'insert content raw'}, data);
        data.createdAt = new Date();
        data.lastUpdated = new Date();
        coll.insert(data, function (err, res) {
            var raw_obj = res.ops[0];
            done(null, {status: "ok"});
            async.waterfall([
                function (callback) {
                    var obj = _.pick(raw_obj,"_id", "ownerId");
                    obj.name = raw_obj.orig_name || raw_obj.name;
                    logger.log('info', {
                        role: 'content_source',
                        cmd: 'content_raw_new',
                        action: 'send  media_hub entities_new'
                    }, obj);

                    seneca.act({
                        role: 'media_hub',
                        cmd: 'entries_new',
                        data: obj
                    }, function (err, entryObj) {
                        callback(null, entryObj);
                    })
                }
                ,
                function (entryObj, callback) {
                    var obj = {entryId: entryObj.entryId, rawId: raw_obj._id};
                    logger.log('info', {role: 'prep_media', cmd: 'transcode', action: 'send'}, obj);

                    seneca.act({
                        role: 'prep_media',
                        cmd: 'transcode',
                        data: obj
                    }, function () {
                        callback(null);
                    })
                }
            ], function () {
                done(null, {status: "ok"});
            })
        })
    })

    seneca.add({role: 'content_source', cmd: 'after_upload'}, function (args, done) {
        seneca.act({role: 'content_source', cmd: 'content_raw_new', data: args.data},
            function (err, res) {
                if (err) return console.error(err);
                done(null, {status: 'ok'});
            })
    })
    var plugin = 'content_source';

    return {name: plugin};
}