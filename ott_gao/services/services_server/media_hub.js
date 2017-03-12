// PUBLIC DOMAIN
"use strict";
//var async = require('async');
var _ = require('underscore');
var shortid = require('shortid');
var logger = require('../common/logger')("queue");
module.exports = function (options) {
    var seneca = this;
    seneca.add({role: 'media_hub', cmd: 'entries_new'}, function (args, done) {
        var entries = seneca.make$('entries');
        var data = args.data;
        logger.log('info', {role: 'media_hub', cmd: 'entries_new', action: 'receive'}, data);
        var db = seneca.Database;
        var coll = db.collection('entries');
        var obj = _.omit(data, "_id");
        obj.raw_id = data._id;
        obj.sid = shortid.generate();
        obj.createdAt = new Date();
        obj.source_type = 'vod_int';
        obj.lastUpdated = new Date();
        logger.log('info', {role: 'media_hub', cmd: 'entries_new', action: 'update entries', data: obj});
        coll.insert(obj, function (err, res) {
            if (err) return console.err(err);
            var entryId = res.insertedIds[0];
            done(null, {entryId: entryId});
        })
    })

    var plugin = 'media_hub';

    return {name: plugin};
}