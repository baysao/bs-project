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
//var objectPath = require("object-path");
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
    var checkQueryStack = function (collection, query_stack, myobj, done) {
        //console.log('------------------------------start query_stack');
        //console.log(myobj);
        var qquery_all_promise =
        _.map(query_stack, function (qquery) {
            var qquery_defer = promise.defer();
            var op = qquery['op'];
            var field = qquery['field'];
            var query = qquery['query'];
            var rrquery = {};
            var query_limit = 10;
            switch (op) {
                case '$query':
                var query_args_arr = query.match(/\#([^\#]+)\#/gi);
                _.each(query_args_arr, function (query_arg) {
                    var real_field = replaceAll(query_arg, '#', '');
                    var objFound = lookupField(myobj);
                    var myvalue = objFound && objFound[real_field] ? objFound[real_field] + '' : '';
                    query = replaceAll(query, query_arg, myvalue);

                });
                rrquery = JSON.parse(query);
                break;
                case '$similar':
                var query_arr = jsonic(query);
                console.log(util.inspect(query_arr, false, null));
                var name_field = query_arr['select'];
                var similar_field = query_arr['similar'];
                var count_field = query_arr['count'];
                if (count_field)
                    query_limit = count_field;
                var objFound = lookupField(myobj);
                if (!objFound || !objFound[similar_field]) {
                    return;
                }
                var similar_words = objFound[similar_field].match(/("[^"]+"|[^"\s]+)/g);
                var similar_words_arr = _.chain(similar_words).first(5)
                .map(function (e) {
                    var o = {};
                    o[name_field] = {'$regex': e};
                    return o;
                }).value();
                rrquery = {$or: similar_words_arr};
                break;
                case '$eqcol':
                var query_arr = jsonic(query);
                console.log('eqcol');
                console.log(util.inspect(query_arr, false, null));
                var name_field = query_arr['select'];
                var match_operator = query_arr['match'];
                var in_collection = query_arr['in_collection'];
                var in_collection_field = query_arr['in_collection_field'];
                var count_field = query_arr['count'];
                if (count_field)
                    query_limit = count_field;
                console.log('query_limit');
                console.log(query_limit);
                var in_collection_instance = db.collection(in_collection);
                var filters = {};
                filters[in_collection_field] = 1;
                in_collection_instance.find({}, filters)
                .toArray(function (err, in_collection_items) {
                    if (err) {
                        qquery_defer.resolve({f: field, v: []});
                        return;
                    }
                    var in_collection_items_ids = _.pluck(in_collection_items, in_collection_field);
                    var ress = _.map(in_collection_items_ids, function (in_collection_items_id) {
                        var ddefer = promise.defer();
                        var options = {};
                        if (!match_operator)
                            options[name_field] = '' + in_collection_items_id;
                        else
                            options[name_field] = {$regex: '' + in_collection_items_id, $options: "si"};
                        console.log('options');
                        console.log(options);
                        collection.find(options)
                        .limit(query_limit)
                        .toArray(function (err, in_collection_items_subitems) {
                            console.log('in_collection_items_subitems');
                            console.log(in_collection_items_subitems);
                            if (err) ddefer.resolve([]);
                            else
                                ddefer.resolve(in_collection_items_subitems);
                        })
                        return ddefer.promise;
                    });
                    promise.all(ress).then(function (final_ress) {
                        qquery_defer.resolve({
                            f: field,
                            v: _.chain(final_ress)
                            .reduce(function(o, e){
                                if(e && _.isArray(e)) {
                                    o = _.union(o,e);
                                }
                                return o;
                            }, []).value()
                        })
                    })
                })
                return qquery_defer.promise;
                break;
            }
                //console.log('query final:');
                console.log(util.inspect(rrquery, false, null));
                collection.find(rrquery).limit(query_limit)
                .toArray(function (err, partialData) {
                    if (!myobj) myobj = {};

                    if (partialData.length < query_limit) {
                        var ids = _.chain(partialData).pluck('_id').map(function (i) {
                            return mongo.helper.toObjectID(i);
                        }).value();
                        collection.find({'_id': {$nin: ids}}, {sort: [['createdAt', 'desc']]})
                        .limit(query_limit - partialData.length)
                        .toArray(function (err, partialData1) {
                            if (partialData1 && !_.isEmpty(partialData1)) {
                                partialData = _.union(partialData, partialData1);
                            }
                            qquery_defer.resolve({f: field, v: partialData});
                        })

                    } else {
                        qquery_defer.resolve({f: field, v: partialData});
                    }

                })
                return qquery_defer.promise;
            });
promise.all(qquery_all_promise).then(done);
}
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
var processStack = function (stack_op, stack, mark) {
    var op = stack_op.pop();
    while (op != mark) {
        var val1 = stack.pop();
        var val2 = stack.pop();
        var newVal = {};
        if (op == '$and' || op == '$or') {
            if (val1 && val2)
                newVal[op] = [val1, val2];
            else {
                if (val1)
                    newVal = val1;
                if (val2)
                    newVal = val2;
            }
        }
        if (newVal)
            stack.push(newVal);
        op = stack_op.pop();
        while (typeof mark == 'undefined' && op == '$begin') {
            op = stack_op.pop();
        }
    }
}
var processFilter = function (query, filters, v, id, extractedOptions) {
    var returnObj = {};
    var defer = promise.defer();
    var query_stack = [];

    filters.findById(id, function (err, resFilterData) {
        if (!resFilterData.collection) {
            defer.resolve({});
            return;
        }
        var collection = db.collection(resFilterData.collection);
        var finalFilters = {};
        var finalOptions = {};
        var stack = [];
        var stack_op = [];

        _.each(resFilterData, function (vv, kk) {
            if (/^dfn_op_begin_/.test(kk)) {
                stack_op.push('$begin');
            } else if (/^dfn_op_end_/.test(kk)) {
                processStack(stack_op, stack, '$begin');
            } else if (/^dfn_op_or_/.test(kk)) {
                stack_op.push('$or');
            } else if (/^dfn_op_and_/.test(kk)) {
                stack_op.push('$and');
            } else if (/^dfn_ffield_/.test(kk)) {
                var ffarr = kk.match(/^dfn_ffield_(.*)/);
                var ffid = ffarr[1];
                var ffield = resFilterData['dfn_ffield_' + ffid];
                var fcond = resFilterData['dfn_fcond_' + ffid];
                var fvalue = resFilterData['dfn_fvalue_' + ffid];


                if (/^params:/.test(fvalue)) {
                    var ffield_arr = fvalue.match(/^params:(.*)/);
                    var param_name_full = ffield_arr[1];
                    if (!param_name_full) {
                        return;
                    }
                    var param_name_arr = param_name_full.split('||');
                    var param_name = param_name_arr[0] && param_name_arr[0].trim();
                    var param_value_default = param_name_arr[1] && param_name_arr[1].trim();
                    fvalue = query[param_name] && query[param_name].trim();
                    if (param_value_default && typeof fvalue == 'undefined')
                        fvalue = param_value_default;
                }

                if (ffield == '_id') {
                    fvalue = mongo.helper.toObjectID(fvalue);
                }
                if (!fvalue)
                    fvalue = "";
                switch (fcond) {
                    case '$sort':
                    var partial = {};
                    if (fvalue == '-1' || fvalue == 'desc') {
                        partial = [ffield, 'desc'];
                    } else {
                        partial = [ffield, 'asc'];
                    }
                    stack.push({sort: [partial]});
                    break;
                    case '$range':
                    var partial = {};
                    var ffvalueArr = fvalue.split(',');
                    partial = {skip: parseInt(ffvalueArr[0]), limit: parseInt(ffvalueArr[1])};
                    stack.push(partial);
                    break;
                    case '$eq':
                    finalFilters[ffield] = fvalue;
                    break;
                    case '$contain':
                    finalFilters[ffield] = {$regex: fvalue, $options: 'i'};
                    break;
                    case '$query':
                    case '$similar':
                    case '$eqcol':
                    console.log('op ne');
                    console.log(fcond);
                    var query_obj = {};
                    query_obj['op'] = fcond;
                    query_obj['field'] = ffield;
                    query_obj['query'] = fvalue;
                    query_stack.push(query_obj);
                    break;
                }
            }
        });

        processStack(stack_op, stack);
        if (!_.isEmpty(stack)) {
            finalOptions = stack.pop();
        }

        finalFilters = _.extend(extractedOptions.filters, finalFilters);
        finalOptions = _.extend(extractedOptions.options, finalOptions);
        console.log(util.inspect(finalFilters, false, null));
        console.log(util.inspect(finalOptions, false, null));
        collection.find(finalFilters, finalOptions).toArray(function (err, filtersData) {

            if (err) {
                returnObj[v] = {};
            } else {

                if (resFilterData.collection == 'entries') {
                    var all_entries = _.map(filtersData, function (result) {
                        return entries_helper.buildResult(db, result, extractedOptions);
                    })
                    promise.all(all_entries).then(function (entries) {
                         if((v == 'latest' || v == 'most_viewed' ) && _.isArray(entries)) {
                            entries = _.map(entries, function(ee){
                                if(ee.tags) ee.tags = "";
                                return ee;
                            })
                        }
                        var myobj = returnObj[v] = {main: entries};
                        checkQueryStack(collection, query_stack, returnObj[v],
                            function (extResults) {
                                console.log('extResults');
                                console.log(extResults);

                                var all_entries1 = _.map(extResults, function (extResult) {
                                    var extDefers = promise.defer();
                                    var result_field = extResult && extResult.f;
                                    var result_values = extResult && extResult.v;
                                    var all_entries2 = _.map(result_values, function (result) {
                                        return entries_helper.buildResult(db, result, extractedOptions);
                                    })
                                    promise.all(all_entries2).then(function (entries) {

                                        if(_.isArray(entries)) {
                                            entries = _.map(entries, function(ee){
                                                if(ee.tags) ee.tags = "";
                                                return ee;
                                            })
                                        }
                                        myobj[result_field] = entries;
                                        console.log('myobj');
                                        console.log(myobj);
                                        extDefers.resolve();

                                    })
                                    return extDefers.promise;
                                })
                                promise.all(all_entries1).then(function () {
                                    defer.resolve(returnObj);
                                });

                            });
                    })
                } else {

                    var myobj = returnObj[v] = {main: filtersData};
                    checkQueryStack(collection, query_stack, returnObj[v],
                        function (extResult) {
                            var result_field = extResult && extResult.f;
                            var result_values = extResult && extResult.v;

                                        if(_.isArray(result_values)) {
                                            result_values = _.map(result_values, function(ee){
                                                if(ee.tags) ee.tags = "";
                                                return ee;
                                            })
                                        }
                            myobj[result_field] = result_values;
                            defer.resolve(returnObj);
                        });
                }
            }

        })
    });

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
        var allResult = _.reduce(result, function (o, v, k) {
            if (/^dfn_fname_/.test(k)) {
                var karr = k.match(/^dfn_fname_(.*)$/);
                var id = karr[1];
                o.push(processFilter(query, filters, v, result['dfn_ffilter_' + id], extractedOptions));
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
            cache.set(cid, result);
            successHandler(result);
        });
    }
    utils.getCache(api_cache,
        {col: '' + collectionName, id: '' + id},
        successHandler, failedHandler);
})
.post(not_supported).put(not_supported).delete(not_supported)

}
