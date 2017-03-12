/**
 * Created by baysao on 11/01/2016.
 */
var fs = require('fs');
var async = require('async');

var ffmpeg = require('fluent-ffmpeg');
var mongo = require("mongoskin");

var config = require("nconf");
config.file('./config.json');


var mkdirp = require("mkdirp");
var path = require("path");
var logger_transcode = require('../common/logger')("transcode");
var logger_transcode_failed = require('../common/logger')("transcode_failed");
var _ = require('underscore');

var rabbitmq = config.get("queueServer").rabbitmq;
var database = config.get('database');
var dburl = 'mongodb://' + database.host + ':' + database.port + '/' + database.name;
console.log(dburl);
var db = mongo.db(dburl);
db.bind("entries");
var rabbitUrl = 'amqp://' + rabbitmq.username + ':' + rabbitmq.password + '@' + rabbitmq.host + ':' + rabbitmq.port;
console.log(rabbitUrl);
var queueContext = require('rabbit.js').createContext(rabbitUrl);

var media_dir = config.get("media_dir");
var transcoded_dir = config.get("transcoded_dir");
mkdirp.sync(transcoded_dir);
var processed = false;
queueContext.on('ready', function () {
    var pushSocket = queueContext.socket('WORKER', {prefetch: 1});

    pushSocket.connect('TRANSCODE_ACTION', function () {
        pushSocket.on('data', function (msg) {
            processed = true;
            var data = JSON.parse(msg);
            console.log(data);
            logger_transcode.log('info', data);
            var content_raw = db.collection('content_raw');
            content_raw.findById(data.rawId, function (err, file_raw) {
                //console.log(file_raw);
                var file_raw_path = path.join(media_dir, file_raw.path);
                var file_raw_dirname = path.dirname(file_raw.path);
                //var file_raw_basename = path.basename(file_raw.path, path.extname(file_raw.path));

                var file_transcode_dir = path.join(
                    //transcoded_dir,
                    'entryId', data.entryId + '',
                    //'rawId', data.rawId + '',
                    'flavorId', data.flavorId + '',
                    'rawId'
                    //, file_raw_dirname
                );
                mkdirp.sync(path.join(transcoded_dir, file_transcode_dir));
                var flavors_default = db.collection('flavors_default');
                flavors_default.findById(data.flavorId, function (err, flavor) {
                    var file_transcoded_path = path.join(file_transcode_dir, data.rawId + '.' + flavor.format);
                    var file_transcoded_thumb_path = path.join(file_transcode_dir, data.rawId + '_%000i.png');
                    console.log(flavor);
                    //console.log(file_raw_path);
                    //console.log(flavor.videoCodec);

                    async.waterfall([
                        function init(callback) {
                            if (/^h264/.test(flavor.videoCodec)) {
                                flavor.videoCodec = 'libx264';
                            }

                            if (flavor.frameRate == 0) flavor.frameRate = '30';
                            if (flavor.width == 0) flavor.width = '?';
                            if (flavor.height == 0) flavor.width = '?';
                            var optionsArr = [];
                            if(flavor.conversionEnginesExtraParams) {
                                var paramsArr = flavor.conversionEnginesExtraParams.split('|');
                                if(paramsArr.length > 0) {
                                    var options = flavor.conversionEnginesExtraParams.split('|')[0];
                                    optionsArr = options.split(' -');
                                }
                            }
                            flavor.outputOptions = _.chain(optionsArr).compact().map(function (op) {
                                if (op) {
                                    op = '-' + op;
                                }
                                return op;
                            }).value();
                            callback(null);
                        },
                        function (callback) {
                            ffmpeg.ffprobe(file_raw_path, function (err, mediainfo) {
                                //console.log(mediainfo);
                                var videoinfo = _.findWhere(mediainfo.streams, {"codec_type": "video"});
                                var audioinfo = _.findWhere(mediainfo.streams, {"codec_type": "audio"});
                                if (audioinfo.bit_rate && flavor.audioBitrate > audioinfo.bit_rate)
                                    flavor.audioBitrate = audioinfo.bit_rate;
                                if (audioinfo.channels && flavor.audioChannels > audioinfo.channels)
                                    flavor.audioChannels = audioinfo.channels;

                                if (videoinfo.bit_rate && flavor.videoBitrate > videoinfo.bit_rate)
                                    flavor.videoBitrate = videoinfo.bit_rate;

                                if (videoinfo.width && flavor.width > videoinfo.width)
                                    flavor.width = videoinfo.width;
                                if (videoinfo.height && flavor.height > videoinfo.height)
                                    flavor.height = videoinfo.height;
                                callback(null);
                            })
                        }
                    ], function () {
                        ffmpeg(file_raw_path)
                            .videoBitrate(flavor.videoBitrate)
                            .videoCodec(flavor.videoCodec)
                            .size(flavor.width + 'x' + flavor.height)
                            .fps(flavor.frameRate)
                            .audioBitrate(flavor.audioBitrate)
                            .audioCodec(flavor.audioCodec)
                            .audioFrequency(flavor.audioSampleRate)
                            .audioChannels(flavor.audioChannels)
                            .format(flavor.format)
                            .addOption('-movflags', 'faststart')
                            .on('start', function (commandLine) {
                                console.log('Spawned Ffmpeg with command: ' + commandLine);
                                logger_transcode.log('info', 'transcode:success', commandLine);
                            })
                            //.screenshots({
                            //    count: 4,
                            //    folder: path.join(transcoded_dir, file_transcode_dir),
                            //    filename: data.rawId + '_%000i.png'
                            //})
                            .on('end', function () {
                                if (!fs.existsSync(path.join(transcoded_dir, file_transcoded_path))) {
                                    logger_transcode_failed.log('info', 'file not exists', 'transcode:faild', data, {
                                        in: file_raw_path,
                                        out: file_transcoded_path
                                    });
                                    if (processed) {
                                        pushSocket.ack();
                                        processed = false;
                                    }
                                    return;
                                }
                                console.log('transcode finish');
                                logger_transcode.log('info', 'transcode:success', data, {
                                    in: file_raw_path,
                                    out: file_transcoded_path
                                });
                                console.log('entryId:' + data.entryId);
                                db.entries.findById(data.entryId, {file_encoded: 1}, function (err, record) {
                                    console.log('find entries with id ' + data.entryId);
                                    console.log(err);
                                    console.log(record);
                                    if (!record) return;
                                    if (!record.file_encoded) record.file_encoded = {};
                                    var file_encoded = record.file_encoded;
                                    file_encoded[data.flavorId] = {
                                        src: file_transcoded_path,
                                        lastUpdated: new Date()
                                    }
                                    console.log(file_encoded);
                                    db.entries.updateById(data.entryId, {
                                        $set: {file_encoded: file_encoded}
                                    }, function (err, res) {
                                        console.log('update entries');
                                        console.log(res);
                                        if (processed) {
                                            pushSocket.ack();
                                            processed = false;
                                        }
                                    })
                                })

                            })
                            .on('error', function (err) {
                                logger_transcode.log('info', 'transcode:failed', data, {in: file_raw_path});
                                logger_transcode_failed.log('info', 'transcode:failed', data, {
                                    flavor: flavor,
                                    in: file_raw_path,
                                    out: file_transcoded_path,
                                    err: err
                                });
                                if (processed) {
                                    pushSocket.ack();
                                    processed = false;
                                }
                            })
                            .save(path.join(transcoded_dir, file_transcoded_path));
                    })


                })
            })

        })
    })

})
