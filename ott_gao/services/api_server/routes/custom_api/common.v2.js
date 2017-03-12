var _ = require('underscore');
var promise = require('bluebird');
var util = require('util');
var mongo = require('mongoskin');

var nconf = require('nconf');
var conf = nconf.file('./config.json');
//var conf_hosts = conf.get('hosts');
//var stream_prefix = conf_hosts.stream_prefix;
var request = require('request');
var path = require('path');
var entries_helper = require('../entries');
var utils = require('../utils');
var objectPath = require("object-path");
var jsonic = require('jsonic');

var cache = require('../cache')();
var util = require('util');
var api_cache = cache.get('api', {maxAge: 1000 * 60 * 60});


var not_supported = function (req, res, next) {
    res.end('api not supported');
}
var lookupField = function (myobj) {
    var objFound;
    if (myobj && myobj['main']) {
        objFound = myobj['main'];
    }
    if (_.isArray(myobj)) {
        objFound = myobj[0];
    }
    while (_.isArray(objFound)) {
        objFound = objFound[0];
    }
    return objFound;
}
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
module.exports = function (db, router) {
    var allowCollection = ['dev_apis'];
    router.param('collectionName', function (req, res, next, collectionName) {
        if (_.indexOf(allowCollection, collectionName) == -1) {
            res.sendStatus(401);
            return;
        }
        req.collectionName = collectionName;
        req.collection = db.collection(collectionName);
        req.collection_filters = db.collection('dev_filters');
        next();
    });
    var processQuery = function (query) {
        var defer = promise.defer();
        var qmat = query.match(/([^(]+)\((.*)\)(\s*:\s*([^\s]+))?/);
        if (qmat.length < 1) {
            defer.resolve([]);
            return;
        }
        var col = qmat[1] && qmat[1].trim();
        var fie = qmat[4] && qmat[4].trim();
        var filtall = qmat[2] && qmat[2].trim();
        var sel = jsonic('[' + filtall + ']');
        var fil = sel[0] || {};
        var opt = sel[1] || {};
        var ret;
        if (fie) {
            ret = {};
            ret[fie] = [];
        }
        else
            ret = [];

        db.collection(col)
            .find(fil, opt)
            .toArray(function (err, result) {
                if (err) {
                    defer.resolve(ret);
                    return;
                }
                if (fie) {
                    ret[fie] = result;
                } else {
                    ret = result;
                }
                defer.resolve(ret);
            });
        return defer.promise;
    }
    var processSubQuery = function (item, query) {
        var defer = promise.defer();
        var query1 = query.replace(/\$\$\.(\w+)/g, function (match, contents, offset, s) {
            var item_val = objectPath.get(item, contents);
            return item_val;
        })
        processQuery(query1).then(function (rr) {
            defer.resolve(rr);
        })
        return defer.promise;
    }
    var processSubQueries = function (items, queries) {
        var defer = promise.defer();
        if (_.isEmpty(queries)) {
            defer.resolve(items);
        } else if (_.isEmpty(items)) {
            var query = _.first(queries);
            processQuery(query).then(function(result){
                processSubQueries(result, _.rest(queries)).then(function (rr) {
                    defer.resolve(rr);
                })
            })
        } else {
            var query = queries[0];
            promise.all(_.map(items, function (item) {
                return processSubQuery(item, query);
            })).then(function (allp) {
                processSubQueries(allp, _.rest(queries)).then(function (rr) {
                    defer.resolve(rr);
                })
            })
        }
        return defer.promise;
    }
    var processQueries = function (queries) {
        var query_arr = queries.split('|');
        var defer = promise.defer();
        processSubQueries([], query_arr).then(function (allp) {
            defer.resolve(allp);
        })
        return defer.promise;
    }
    var processFilter1 = function (name, id) {
        var defer = promise.defer();
        var filters = db.collection('dev_filters');
        var ret = {};
        ret[name] = [];
        filters.findById(id, function (err, resFilterData) {
            if (err) {
                defer.resolve(ret);
                return;
            }
            console.log(resFilterData);
            var cond, value, field;
            _.find(Object.keys(resFilterData), function (kk) {
                var ffarr = kk.match(/^dfn_([^\_]+)_(.*)/);
                if (!ffarr || ffarr.length < 1) return false;
                var ffid = ffarr[2];
                cond = resFilterData['dfn_fcond_' + ffid];
                value = resFilterData['dfn_fvalue_' + ffid];
                return true;
            })
            if (cond == '$superquery') {
                processQueries(value).then(function (allp) {
                    ret[name] = allp;
                    defer.resolve(ret);
                })
            } else
                defer.resolve(ret);
        })
        return defer.promise;
    }

    router.route('/:collectionName/:id')
        .get(function (req, res, next) {
            var id = req.params.id
            if (!id) {
                res.sendStatus(404);
                return;
            }
            var extractedOptions = utils.extractRequest(req);
            var collection = req.collection;
            var filters = req.collection_filters;
            var query = req.query;
            var collectionName = req.collectionName;

            var successHandler = function (result) {
                console.log('result');
                console.log(result);
                var allResult = _.reduce(result, function (o, v, k) {
                    if (/^dfn_fname_/.test(k)) {
                        var karr = k.match(/^dfn_fname_(.*)$/);
                        var id = karr[1];
                        console.log(id);
                        console.log(k);
                        console.log(v);
                        o.push(processFilter1(result['dfn_fname_' + id], result['dfn_ffilter_' + id]));
                        //o.push(processFilter(query, filters, v, result['dfn_ffilter_' + id], extractedOptions));
                    }
                    return o;
                }, []);
                promise.all(allResult).then(function (allres) {
                    var newRes = _.reduce(allres, function (o, v) {
                        return _.extend(o, v);
                    }, {});
                    if (!newRes) newRes = {};
                    res.send(newRes);
                })
            }
            var failedHandler = function (cache, cid, successHandler) {
                collection.findById(id, function (e, result) {
                    if (e) {
                        res.sendStatus(404);
                        return;
                    }
                    //cache.set(cid, result);
                    successHandler(result);
                });
            }
            utils.getCache(api_cache,
                {col: '' + collectionName, id: '' + id},
                successHandler, failedHandler);
        })
        .post(not_supported).put(not_supported).delete(not_supported)

}