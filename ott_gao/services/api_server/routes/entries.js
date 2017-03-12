var _ = require('underscore');
var nconf = require('nconf');
var conf = nconf.file('./config.json');
var conf_hosts = conf.get('hosts');
var stream_prefix = conf_hosts.stream_prefix;

var promise = require('bluebird');
var path = require('path');
var cache = require('./cache')();

var util = require('util');
var async = require('async');
var utils = require('./utils');
var api_cache = cache.get('api', {maxAge: 1000 * 60 * 60 * 24});

var matchFlavor = function (width, height, flavors) {
    var final = flavors[0];
    var w = final.width, h = final.height;
    for (var i = 1; i < flavors.length; i++) {
        var flavor = flavors[i];
        if (flavor.format != 'mp4') continue;
        var fw = flavor.width;
        var fh = flavor.height;
        var dw = Math.abs(width - fw);
        var dh = Math.abs(height - fh);
        if (dw < w || dh < h) {
            w = dw;
            h = dh;
            final = flavor;
        }
    }
    return final;
}

var findBestFlavor = function (db, result, extractedOptions) {
    console.log('findBestFlavor');
    var flavors = db.collection('flavors_default');
    var width = extractedOptions.width;
    var height = extractedOptions.height;
    var deferResult = promise.defer();
    var encoded_list = {};
    if (typeof result.file_encoded == 'string') {
        encoded_list = JSON.parse(result.file_encoded);
    } else {
        encoded_list = result.file_encoded;
    }
    console.log(encoded_list);
    var all_flavors = _.map(encoded_list, function (encode_src, encode_id) {
        var defer = promise.defer();
        flavors.findById(encode_id, {width: 1, height: 1, format: 1}, function (e1, flavor) {
            defer.resolve(flavor);
        })
        return defer.promise;
    })
    promise.all(all_flavors).then(function (flavors) {
        var bestEncoded;
        if (width || height) {
            var matchedFlavor = matchFlavor(width, height, flavors);
            bestEncoded = encoded_list[matchedFlavor._id];
        } else {
            var matchedFlavor = _.findWhere(flavors, {format: 'mp4'});
            bestEncoded = encoded_list[matchedFlavor._id];
        }
        console.log('bestEncoded');
        console.log(util.inspect(bestEncoded, false, null));
        deferResult.resolve(bestEncoded);
    })
    return deferResult.promise;
}
var buildTags = function (db, tags, done) {
    var entries_tags = db.collection("entries_tags");
    var tags_arr = tags.split(',');
    var all1 = _.chain(tags_arr).map(function (cat) {
        var defer = promise.defer();
        entries_tags.findById(cat, {"name": 1}, function (err, catres) {
            if (err) catres = {};
            defer.resolve(catres);
        })
        return defer.promise;
    }).value();
    promise.all(all1).then(function (allcat) {
        done({tags: allcat});
    })
}
var buildCategories = function (db, categories, done) {
    var entries_categories = db.collection("entries_categories");
    var categories_arr = categories.split(',');
    var all1 = _.chain(categories_arr).map(function (cat) {
        var defer = promise.defer();
        entries_categories.findById(cat, {"name": 1}, function (err, catres) {
            if (err) catres = {};
            defer.resolve(catres);
        })
        return defer.promise;
    }).value();
    promise.all(all1).then(function (allcat) {
        done({categories: allcat});
    })
}
var buildUrlVideo = function (db, result, extractedOptions, done) {
    console.log('buildUrlVideo');
    var entries = db.collection('entries');
    var width = extractedOptions.width || 720;
    var height = extractedOptions.height || 576;
    var api_type = extractedOptions.api_type;
    var timeSeek = '5';
    if (result.file_encoded) {
        findBestFlavor(db, result, extractedOptions).then(function (bestEncoded) {
            // var sizeopt = '?width=' + width + '&height=' + height;
            var sizeopt = "";
            if (api_type == 'app') {
                returnObj = {
                    thumbnail: result.thumbnail && (/^http/.test(result.thumbnail) ? result.thumbnail + sizeopt: conf_hosts.static + result.thumbnail + sizeopt)
                    || conf_hosts.static + stream_prefix.thumb + '_' + width + 'x' + height + '/' + timeSeek + '/' + path.dirname(bestEncoded.src) + '/' + path.basename(bestEncoded.src, path.extname(bestEncoded.src)) + '.png',
                    url: conf_hosts.stream + stream_prefix.hls + '/' + bestEncoded.src + '/index.m3u8',
                    url_backup: conf_hosts.stream + stream_prefix.raw + '/' + bestEncoded.src,
                    url_embed: conf_hosts.display + '/embed/' + result.sid
                }
            } else if (api_type == 'web') {
                returnObj = {
                    thumbnail: result.thumbnail && (/^http/.test(result.thumbnail) ? result.thumbnail + sizeopt : conf_hosts.static + result.thumbnail + sizeopt)
                    || conf_hosts.static + stream_prefix.thumb + '_' + width + 'x' + height + '/' + timeSeek + '/' + path.dirname(bestEncoded.src) + '/' + path.basename(bestEncoded.src, path.extname(bestEncoded.src)) + '.png',
                    url_embed: conf_hosts.display + '/embed/' + result.sid
                };
            }
            console.log(util.inspect(returnObj, false, null));
            done(returnObj);
        })
    } else {
        //if (api_type == 'web') {
            returnObj = {
                url_embed: conf_hosts.display + '/embed/' + result.sid
            }
        //}
        //else {
        //    returnObj = {};
        //}
        done(returnObj);
    }
}
var buildResult = function (db, result, extractedOptions) {
    var entries = db.collection('entries');
    var api_type = extractedOptions.api_type;
    var deferResult = promise.defer();
    var successHandler = function (returnObj) {
        deferResult.resolve(returnObj);
    }
    var failedHandler = function (cache, cid, successHandler) {
        async.parallel([
                function (cb) {
                    if (result.tags && result.tags.trim())
                        buildTags(db, result.tags, function (resData) {
                            cb(null, resData);
                        })
                    else
                        cb(null, {});
                },
                function (cb) {
                    if (result.categories && result.categories.trim())
                        buildCategories(db, result.categories, function (resData) {
                            cb(null, resData);
                        })
                    else
                        cb(null, {});
                },
                function (cb) {
                    buildUrlVideo(db, result, extractedOptions, function (resData) {
                        cb(null, resData);
                    })
                }
            ],
            function (err, resAllData) {
                console.log('resAllData');
                var returnObjInit = _.omit(result, 'file_encoded', 'raw_id', 'ownerId');
                console.log(resAllData);
                var returnObj = _.reduce(resAllData, function (o, v) {
                    return _.extend(o, v);
                }, returnObjInit);
                //cache.set(cid, returnObj);
                successHandler(returnObj);
            })
    }

    utils.getCache(api_cache,
        {t: 'src:entries', id: '' + result._id, at: api_type},
        successHandler, failedHandler);
    return deferResult.promise;
}

module.exports = {
    buildResult: buildResult
}
