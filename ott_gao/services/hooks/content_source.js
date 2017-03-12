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
        console.log(data);
        logger.log('info', {role: 'content_source', cmd: 'content_raw_new', action:'receive'}, data);
        var content_raw = seneca.make$('content_raw');
        content_raw.native$(function (err, db) {
            if (err) return console.err(err);
            var coll = db.collection('content_raw');
            logger.log('info', {role: 'content_source', cmd: 'content_raw_new', action:'insert content raw'}, data);
            coll.insert(data, function (err, res) {
                //console.log('db insert');
                //console.log(err);
                //console.log(res);
                var raw_obj;
                if (_.isArray(res)) {
                    raw_obj = res[0];
                } else
                    raw_obj = res;
                //console.log(raw_obj);
                done(null, {status: "ok"});
                async.waterfall([
                    function (callback) {
                        var obj = _.pick(raw_obj, "name", "_id", "ownerId");
                        logger.log('info', {role: 'content_source', cmd: 'content_raw_new', action:'send  media_hub entities_new'}, obj);

                        seneca.act({
                            role: 'media_hub',
                            cmd: 'entries_new',
                            data: obj
                        }, function (err, entryObj) {
                            console.log('entryObj');
                            console.log(entryObj);
                            callback(null, entryObj);
                        })
                    }
                    ,
                    function (entryObj, callback) {
                        console.log('transcode entryObj');
                        console.log(entryObj);
                        //var obj  = _.pick(raw_obj,"_id");
                        //console.log('obj');

                        var obj = { entryId: entryObj.entryId, rawId: raw_obj._id};
                        console.log(obj);
                        logger.log('info', {role: 'prep_media', cmd: 'transcode', action:'send'}, obj);

                        seneca.act({
                            role: 'prep_media',
                            cmd: 'transcode',
                            data: obj
                        }, function () {
                            callback(null);
                        })
                    }
                ], function () {
                    console.log('content_raw_new done');
                    done(null, {status: "ok"});
                })
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