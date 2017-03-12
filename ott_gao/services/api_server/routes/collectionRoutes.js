var helpers = require('../helpers');
var db = helpers.db;
var router = helpers.router;
var _ = require('underscore');

require('./entries')(db, router);

var allowCollection = ['entries_categories', 'entries_tags'];
router.param('collectionName', function (req, res, next, collectionName) {
    if(_.indexOf(allowCollection, collectionName) == -1) {
        res.sendStatus(401);
        return;
    }
    req.collection = db.collection(collectionName);
    next();
});


router.route('/:collectionName')

    // GET /collections/:collectionName
    .get(function (req, res, next) {
        //req.collection.find({}, {limit: 10, sort: [['_id', -1]]}).toArray(function (e, results) {
        req.collection.find({}, {sort: [['_id', -1]]}).toArray(function (e, results) {
            if (e) {
                return next(e);
            }
            res.send(results);
        });
    })


    // POST /collections/:collectionName
    .post(function (req, res, next) {
        req.collection.insert(req.body, {}, function (e, results) {
            if (e) {
                return next(e);
            }
            res.send(results.ops[0]);
        });
    });

router.route('/:collectionName/:id')

    // GET /collections/:collectionName/:id
    .get(function (req, res, next) {
        req.collection.findById(req.params.id, function (e, result) {
            if (e) {
                return next(e);
            }
            res.send(result);
        });
    })

    // PUT /collections/:collectionName/:id
    .put(function (req, res, next) {
        delete req.body._id; //<-- backbone sends the _id in the payload, but mongo doesn't wan it in the $set (--@masondesu)
        req.collection.updateById(req.params.id, {$set: req.body}, function (e, result) {
            if (e) {
                return next(e);
            }
            req.collection.findById(req.params.id, function (e, result) {
                if (e) {
                    return next(e);
                }
                res.send(result);
            });
        });
    })

    // DELETE /collections/:collectionName
    .delete(function (req, res, next) {
        req.collection.removeById(req.params.id, function (e, result) {
            if (e) {
                return next(e);
            }
            res.send((result === 1) ? {msg: 'success'} : {msg: 'error'});
        });
    });

module.exports = router;
