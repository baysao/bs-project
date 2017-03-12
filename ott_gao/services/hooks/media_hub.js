// PUBLIC DOMAIN
"use strict";
//var async = require('async');
var _ = require('underscore');
var logger = require('../common/logger')("queue");
module.exports = function(options) {
    var seneca = this;
    seneca.add({role: 'media_hub', cmd: 'entries_new'}, function (args, done) {
        var entries = seneca.make$('entries');
        var data = args.data;
        console.log(data);
        logger.log('info', {role: 'media_hub', cmd: 'entries_new', action:'receive'}, data);
        entries.native$(function (err, db) {
            var coll = db.collection('entries');
            var obj = _.omit(data, "_id");
            obj.raw_id = data._id;
            //console.log(obj);
            logger.log('info', {role: 'media_hub', cmd: 'entries_new', action:'update entries', data: obj});
            coll.insert(obj, function (err, res) {
              if(err) return console.err(err);
                console.log('entries_new: after insert');
                console.log(res);
                var entry = res[0];
                done(null, {entryId: entry._id});
            })
        })
    })

    var plugin = 'media_hub';

    return {name: plugin};
}