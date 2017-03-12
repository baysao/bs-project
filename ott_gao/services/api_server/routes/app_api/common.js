var _ = require('underscore');
//var promise = require('bluebird');
var path = require('path');
var cache = require('../cache')();
var util = require('util');
var utils = require('../utils');
var api_cache = cache.get('api', {maxAge: 1000 * 60});

var not_supported = function (req, res, next) {
    res.end('api not supported');
}
module.exports = function (db, router) {
    var allowCollection = ['entries_categories', 'entries_tags'];
    router.param('collectionName', function (req, res, next, collectionName) {
        if (_.indexOf(allowCollection, collectionName) == -1) {
            res.sendStatus(401);
            return;
        }
        req.collection = db.collection(collectionName);
        req.collectionName = collectionName;
        next();
    });


    router.route('/:collectionName')

        // GET /collections/:collectionName
        .get(function (req, res, next) {
            var collectionName = req.collectionName;
            var successHandler = function (result) {
                res.json(result);
            }
            var failedHandler = function (cache, cid, successHandler) {
                req.collection.find({}, {sort: [['_id', -1]]}).toArray(function (e, result) {
                    if (e) {
                        res.sendStatus(404);
                        return;
                    }
                    cache.set(cid, result);
                    successHandler(result);
                });
            }
            utils.getCache(api_cache,
                {t: 'db:' + collectionName},
                successHandler, failedHandler);
        })
        .post(not_supported).put(not_supported).delete(not_supported)

    //// POST /collections/:collectionName
    //.post(function (req, res, next) {
    //    req.collection.insert(req.body, {}, function (e, results) {
    //        if (e) {
    //            return next(e);
    //        }
    //        res.send(results.ops[0]);
    //    });
    //});

    router.route('/:collectionName/:id')

        // GET /collections/:collectionName/:id
        .get(function (req, res, next) {
            if(!req.params.id) {
                res.sendStatus(404);
                return;
            }
            var collectionName = req.collectionName;
            var successHandler = function (result) {
                res.json(result);
            }
            var failedHandler = function (cache, cid, successHandler) {
                req.collection.findById(req.params.id, function (e, result) {
                    if (e) {
                        res.sendStatus(404);
                        return;
                    }
                    cache.set(cid, result);
                    successHandler(result);
                });
            }
            utils.getCache(api_cache,
                {t: 'db:' + collectionName, id: '' + req.params.id},
                successHandler, failedHandler);

            //
            //
            //req.collection.findById(req.params.id, function (e, result) {
            //    if (e) {
            //        return next(e);
            //    }
            //    res.send(result);
            //});
        })
        .post(not_supported).put(not_supported).delete(not_supported)
    //// PUT /collections/:collectionName/:id
    //.put(function (req, res, next) {
    //    delete req.body._id; //<-- backbone sends the _id in the payload, but mongo doesn't wan it in the $set (--@masondesu)
    //    req.collection.updateById(req.params.id, {$set: req.body}, function (e, result) {
    //        if (e) {
    //            return next(e);
    //        }
    //        req.collection.findById(req.params.id, function (e, result) {
    //            if (e) {
    //                return next(e);
    //            }
    //            res.send(result);
    //        });
    //    });
    //})
    //
    //// DELETE /collections/:collectionName
    //.delete(function (req, res, next) {
    //    req.collection.removeById(req.params.id, function (e, result) {
    //        if (e) {
    //            return next(e);
    //        }
    //        res.send((result === 1) ? {msg: 'success'} : {msg: 'error'});
    //    });
    //});
}