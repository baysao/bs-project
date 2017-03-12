/**
 * Created by baysao on 15/01/2016.
 */
var _ = require('underscore');
var nconf = require('nconf');
var conf = nconf.file('./config.json');
var conf_hosts = conf.get('hosts');
var stream_prefix = conf_hosts.stream_prefix;

var promise = require('bluebird');
var path = require('path');


var not_supported = function (req, res, next) {
    res.end('api not supported');
}
var matchFlavor = function (width, height, flavors) {
    //var width = size[0];
    //var height = size[1];
    var final = flavors[0];
    var w = final.width, h = final.height;
    for (var i = 1; i < flavors.length; i++) {
        var flavor = flavors[i];
        if (flavor.format != 'mp4') continue;
        var fw = flavor.width;
        var fh = flavor.height;
        var dw = Math.abs(width - fw);
        var dh = Math.abs(height - fh);
        console.log(dw + '-' + dh);
        if (dw < w || dh < h) {
            w = dw;
            h = dh;
            final = flavor;
        }
    }
    return final;
}
var checkPayload = function (req, res, app_type) {
    if (req.jwt_payload) {
        if (req.jwt_payload.type != app_type)
            res.sendStatus(401);
    } else
        res.sendStatus(401);
    return req.jwt_payload;
}
module.exports = function (db, router) {

    var entries = db.collection('entries');
    var flavors = db.collection('flavors_default');
    var buildResult = function (width, height, result) {
        var deferResult = promise.defer();
        var timeSeek = '5';
        if (result.file_encoded) {
            var encoded_list = {};
            if (typeof result.file_encoded == 'string') {
                encoded_list = JSON.parse(result.file_encoded);
            } else {
                encoded_list = result.file_encoded;
            }
            console.log(encoded_list);
            //
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
                var returnObj = _.extend(_.omit(result, 'file_encoded', 'raw_id', 'ownerId'), {
                    thumbnail: conf_hosts.static + stream_prefix.thumb + '_' + width + 'x' + height + '/' + timeSeek + '/' + path.dirname(bestEncoded.src) + '/' + path.basename(bestEncoded.src, path.extname(bestEncoded.src)) + '.png',
                    url_embed: conf_hosts.display + '/embed/' + result.sid + '?width=' + width + '&height=' + height
                });
                deferResult.resolve(returnObj);
            })
        }
        else deferResult.reject();
        return deferResult.promise;
    }
    router.route('/entries')
        // GET /collections/:collectionName
        .get(function (req, res, next) {
            var query = req.query;
            var height = query.height || '360';
            var width = query.width || '640';

            if (query.size) {
                var sizeArr = query.size.split('x');
                width = sizeArr[0] || width;
                height = sizeArr[1] || height;
            }
            var jwt_payload = req.jwt_payload;
            if(!checkPayload(req,res, 'web')) return;
            var filters = {};
            if (jwt_payload.userId)
                filters.ownerId = jwt_payload.userId;
            if (jwt_payload.ownerId)
                filters.ownerId = jwt_payload.ownerId;

            console.log(jwt_payload);
            if (query.tag) {
                filters.tags = {$regex: query.tag, $options: "si"};
            }
            if (query.category) {
                filters.categories = {$regex: query.category, $options: "si"};
            }
            var options = {sort: [['_id', -1]]};
            if (query.skip) {
                options.skip = {skip: query.skip};
            }
            if (query.limit) {
                options.limit = {limit: query.limit};
            }
            console.log(options);
            console.log(filters);
            entries.find(filters, options).toArray(function (e, results) {
                if (e) {
                    return next(e);
                }
                var all_entries = _.map(results, function (result) {
                    return buildResult(width, height, result);
                })
                promise.all(all_entries).then(function (entries) {
                    console.log(entries);
                    res.send(entries);
                })
            });
        }).post(not_supported).put(not_supported).delete(not_supported);


    router.route('/entries/:id')
        // GET /collections/:collectionName/:id
        .get(function (req, res, next) {
            var query = req.query;
            var height = query.height || '360';
            var width = query.width || '640';

            if (query.size) {
                var sizeArr = query.size.split('x');
                width = sizeArr[0] || width;
                height = sizeArr[1] || height;
            }
            var jwt_payload = req.jwt_payload;
            if(!checkPayload(req, res, 'web')) return;
            var options = {};
            if (jwt_payload.userId)
                options.ownerId = jwt_payload.userId;
            if (jwt_payload.ownerId)
                options.ownerId = jwt_payload.ownerId;
            console.log(jwt_payload);
            entries.findById(req.params.id, function (e, result) {
                if (e) {
                    return next(e);
                }
                console.log(result);
                if (result.ownerId != options.ownerId) {
                    res.sendStatus(404);
                    return;
                }
                buildResult(width, height, result).then(function (resObj) {
                    res.send(resObj);
                })

            });
        })
        .post(not_supported).put(not_supported).delete(not_supported)
}
