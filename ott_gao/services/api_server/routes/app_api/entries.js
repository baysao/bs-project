/**
 * Created by baysao on 15/01/2016.
 */
var _ = require('underscore');
var promise = require('bluebird');
var path = require('path');
var cache = require('../cache')();
var util = require('util');
var utils = require('../utils');
var entries_helper = require('../entries');
var api_cache = cache.get('api', {maxAge: 1000 * 60});

var not_supported = function (req, res) {
    res.end('api not supported');
}

module.exports = function (db, router) {
    var entries = db.collection('entries');
    router.route('/entries')
        // GET /collections/:collectionName
        .get(function (req, res, next) {
            var extractedOptions = utils.extractRequest(req);
            console.log(util.inspect(extractedOptions, false, null));
            var successHandler = function (results) {
                var deferArr = _.map(results, function (result) {
                    return result && entries_helper.buildResult(db, result, extractedOptions) || {};
                });
                promise.all(deferArr).then(function (resData) {
                    res.json(resData);
                })
            }
            var failedHandler = function (cache, cid, successHandler) {
                entries.find(extractedOptions.filters, extractedOptions.options)
                    .toArray(function (e, results) {
                        if (e) {
                            res.sendStatus(404);
                            return;
                        }
                        if (!results || _.isEmpty(results)) {
                            res.json([]);
                            return;
                        }
                        cache.set(cid, results);
                        successHandler(results);
                    });
            }
            utils.getCache(api_cache,
                _.extend({t: 'db:entries'}, extractedOptions.options, extractedOptions.filters),
                successHandler, failedHandler);
        }).post(not_supported).put(not_supported).delete(not_supported);


    router.route('/entries/:id')
        // GET /collections/:collectionName/:id
        .get(function (req, res, next) {
            if (!req.params.id) {
                res.sendStatus(404);
                return;
            }
            var extractedOptions = utils.extractRequest(req);
            console.log(util.inspect(extractedOptions, false, null));
            var successHandler = function (result) {
                entries_helper.buildResult(db, result, extractedOptions)
                    .then(function (resData) {
                        res.json(resData);
                    })
            }
            var failedHandler = function (cache, cid, successHandler) {
                entries.findById(req.params.id, function (e, result) {
                    if (e) {
                        res.sendStatus(404);
                        return;
                    }
                    if (_.isEmpty(result)) {
                        res.json({});
                        return;
                    }
                    cache.set(cid, result);
                    successHandler(result);
                });
            }
            utils.getCache(api_cache,
                {t: 'db:entries', id: req.params.id},
                successHandler, failedHandler);
        })
        .post(not_supported).put(not_supported).delete(not_supported)
}
