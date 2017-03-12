/**
 * Created by baysao on 15/01/2016.
 */
var helpers = require('../helpers');
var db = helpers.db;
var path = require('path');
var fs = require('fs');
var _ = require('underscore');
var ffmpeg = require('fluent-ffmpeg');
var conf = helpers.conf;
var mkdirp = require('mkdirp');
var transcoded_dir = conf.get("transcoded_dir");
var media_dir = conf.get("media_dir");
var thumbnail_dir = conf.get("thumbnail_dir");
var coll = db.collection('entries');
var coll_raws = db.collection('content_raw');

var child_process = require("child_process");

function returnScreenshot(res, screenshot) {
    var stat = fs.statSync(screenshot);
    var img = fs.readFileSync(screenshot);
    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': stat.size
    });
    res.end(img, 'binary');
}
module.exports = function (req, res, next) {
    console.log('vao day');
    var query = req.query;
    console.log(query);
    var width = query.width;
    var height = query.height;

    var params = req.params;
    console.log(params);
    //var rawId = params.rawId;
    var entryId = params.entryId;
    //var flavorId = params.flavorId;
    //
    var rawIdA = params.rawId.split('_'),
        rawId = rawIdA[0].split('.')[0];


    var timeq = params.timeq;
    var timeqq = ('000000' + timeq).substring(timeq.length);
    console.log(timeqq);
    var timeArr = timeqq.match(/(\d\d)(\d\d)(\d\d)/);
    var time = timeArr[1] + ':' + timeArr[2] + ':' + timeArr[3];
    var duration = parseInt(timeArr[3]) + parseInt(timeArr[2]) * 60 + parseInt(timeArr[1]) * 60 * 60;
    console.log(timeArr);
    coll.findById(entryId, function (err, entry) {
        if (err) {
            res.sendStatus(404);
            return;
        }
        if (!entry) {
            res.sendStatus(404);
            return;
        }

        if (entry.raw_id && entry.raw_id == rawId) {
            coll_raws.findById(rawId, function (err, rawEntry) {
                if (err) {
                    res.sendStatus(404);
                    return;
                }
                if (!rawEntry) {
                    res.sendStatus(404);
                    return;
                }
                var src = rawEntry.path;
                if (!src) {
                    res.sendStatus(404);
                    return;
                }

                var dirpath = path.dirname(path.join(thumbnail_dir + '', timeq + '', src + ''));
                mkdirp.sync(dirpath);
                var screenshot = path.join(dirpath, rawId + '.png');
                console.log(screenshot);
                var fullsrc = path.join(media_dir, src);
                console.log(fullsrc);
                fs.exists(screenshot, function (exists) {
                    if (exists) {
                        returnScreenshot(res, screenshot);
                        return;
                    } else {

                        fs.exists(fullsrc, function (exists) {
                            if (!exists) {
                                res.sendStatus(404);
                                return;
                            }
                            ffmpeg.ffprobe(fullsrc, function (err, mediainfo) {
                                //console.log(mediainfo);
                                var videoinfo = _.findWhere(mediainfo.streams, {"codec_type": "video"});
                                width = videoinfo.width;
                                height = videoinfo.height;
                                console.log('w:' + width);
                                console.log('h:' + height);
                                var vduration = videoinfo.duration;
                                console.log(duration);
                                console.log(vduration);
                                if (duration > vduration) {
                                    console.log('time to big');
                                    vduration = Math.round(vduration);
                                    var hh = Math.round(vduration / 3600);
                                    var mm = Math.round((vduration - hh * 3600) / 60);
                                    var ss = vduration - hh * 3600 - mm * 60;
                                    time = hh + ':' + mm + ':' + ss;
                                    console.log('new time:' + time);
                                }
                                ffmpeg(fullsrc)
                                    .on('start', function (commandLine) {
                                        console.log('cmd: ' + commandLine);
                                    })
                                    .screenshots(
                                        {
                                            count: 1,
                                            timemarks: [time],
                                            folder: dirpath,
                                            filename: rawId + '.png',
                                            size: width + 'x' + height
                                        })
                                    .on('end', function () {
                                        console.log('save');
                                        fs.exists(screenshot, function (exists) {
                                            if (!exists)
                                                res.sendStatus(404);
                                            else {
                                                returnScreenshot(res, screenshot);
                                            }
                                        })
                                    })
                                    .on('error', function (err) {
                                        console.log(err);
                                    })
                            })
                        })
                    }
                })

            })
        }
    })
}