/**
 * Created by baysao on 24/01/2016.
 */
var object_hash = require('object-hash');

var checkPayload = function (req, res, app_type, next) {
    console.log(req.jwt_payload);
    if (!req.jwt_payload) {
        res.sendStatus(401);
    } else if (!req.jwt_payload.type || req.jwt_payload.type != app_type) {
        res.sendStatus(401);
    } else
        next();
}


var extractRequest = function (req) {
    var filters = {};
    //var options = {sort: [['_id', -1]]};
    var options = {};

    var query = req.query || {};
    var height = '360';
    var width = '640';

    if (query.size) {
        var sizeArr = query.size.split('x');
        if(sizeArr[0]) width = sizeArr[0];
        if(sizeArr[1]) height = sizeArr[1];
    }
    if(query.height) height = query.height;
    if(query.width) width = query.width

    var jwt_payload = req.jwt_payload;

    if (jwt_payload) {
        filters.ownerId = jwt_payload.userId || jwt_payload.ownerId;
    }
    if (query.tag) {
        filters.tags = {$regex: query.tag, $options: "si"};
    }
    if (query.category) {
        filters.categories = {$regex: query.category, $options: "si"};
    }
    options.limit = parseInt(query.limit) || 10;
    options.skip = query.limit * parseInt(query.skip) || 0;
    if(options.skip < 0) options.skip = 0;
    return {
        api_type: jwt_payload && jwt_payload.type || 'app',
        width: width,
        height: height,
        filters: filters,
        options: options
    }
}
var getCache = function (cache, obj, success, fail) {
    var cid = object_hash(obj);
    if (cache.has(cid)) {
        console.log('hit cache cacheid:' + cid);
        var results = cache.get(cid);
        success(results);
    } else {
        fail(cache, cid, success);
    }
}

module.exports = {
    extractRequest:extractRequest,
    getCache: getCache,
    checkAppPayload: function (req, res, next) {
        checkPayload(req, res, 'app', next);
    },
    checkWebPayload: function (req, res, next) {
        checkPayload(req, res, 'web', next);
    }
}