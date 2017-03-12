/**
 * Created by baysao on 04/01/2016.
 */

var middleware_authen = function (req, res, next) {
    console.log('middleware_authen');
    var tokenArr;
    var token;
    var userId;

    if (req.authToken)
        tokenArr = req.authToken.split('.');
    
    if (tokenArr.length == 2) {
        userId = tokenArr[0];
        token = tokenArr[1];
    }
    var user = Meteor.users.findOne({
        '_id': userId,
        'services.resume.loginTokens.hashedToken': token
    });
    console.log('user');console.log(user);
    if (!user) {
        res.setHeader("Content-type", "application/json");
        res.end(JSON.stringify({
            status: 'error',
            message: 'No permission'
        }));
        return;
    } else {
        console.log('userId:' + userId);
        req.userId = userId;
    }
    next(req, res);
}

var dbUrl = typeof process.env.MONGO_URL != 'undefined' ? process.env.MONGO_URL : "mongodb://localhost:27017/gao";
webixConnector.db(dbUrl);
var Mongo = webixConnector.Mongo;
//var mappedWebixFields = webixMongo.map({title: "db_title", bitrate1: "bitrate"});

var util = Npm.require('util');
var apiHandler = function (collectionName, permission, callback) {

    return webixConnector.crud(collectionName, function (state, resolve) {
        var req = state.request;
        var res = state.response;
        var db = state.db;

        var coll;

        if (db)
            coll = db.collection(collectionName);

        var obj_id = state.id;
        var action = state.action;
        console.log('action:' + action);
        console.log('id:' + obj_id);
        console.log('data:');
        console.log(util.inspect(state.data, false, null));
        var done = function () {
            var userId = req.userId;
            if (obj_id) {

                var filter = {_id: Mongo.helper.toObjectID(obj_id)};
                if (permission.owner) {
                    filter.ownerId = userId;
                }
                coll.findOne(filter,
                    function (err, item) {
                        if (err) {
                            resolve(err);
                        } else {
                            if (!item) {
                                resolve({status: 'error', message: 'No permission'});
                                return;
                            }
                            switch (action) {
                                case 'update':
                                case 'delete':
                                    resolve(null, true);
                                    break;
                                case 'replace':
                                    var data = state.data;
                                    console.log('db replace');
                                    console.log(obj_id);
                                    console.log(data);
                                    coll.updateById(obj_id, data, function (err, res) {
                                        if(err) {console.log(err); return;}
                                        console.log('res');console.log(res);
                                        resolve(null, {id: obj_id});
                                    })
                                    break;
                                default:
                                    item.id = item._id;
                                    delete item._id;
                                    resolve(null, item);
                            }
                        }
                    }
                )
            } else {
                if (action === 'insert') {
                    resolve(null, true);
                } else if (action === 'read') {
                    var filter = {};
                    if (permission.owner) {
                        filter.ownerId = userId;
                    }
                    console.log('filter'); console.log(filter);
                    coll.find(filter).sort({_id: -1}).toArray(function (err, items) {
                        if (err) {
                            resolve(err);
                        } else {
                            if (!items) items = [];
                            console.log('items');
                            console.log(items);
                            resolve(null, _.map(items, function (item) {
                                item.id = item._id;
                                delete item._id;
                                return item;
                            }));
                        }
                    })
                }
            }
        }
        middleware_authen(req, res, function () {
            if (callback && typeof callback === 'function')
                callback(state, resolve, done);
            else
                done();

        })
    })
}

var apis = [
    {name: "accounts", permission: {owner: true},
        callback: function (state, resolve, done) {
            var action = state.action;
            var req = state.request;
            switch (action) {
                case 'delete':
                    var data = state.data;
                    Meteor.users.remove({'emails.address': data.email});
                    done();
                    break;
                case 'insert':
                    var data = state.data;
                    data.userId = req.userId;
                    if (data.email && data.password) {
                        Accounts.createUser({
                            email: data.email,
                            password: data.password
                        });
                    }
                    done();
                    break;
                default:
                    done();
            }
        }},
    {name: "players", permission: {owner: true}},
    {name: "actions", permission: {owner: true}},
    {name: "adverts", permission: {owner: true}},
    {name: "entries", permission: {owner: true}},
    {name: "dev_forms", permission: {owner: true}},
    {name: "dev_filters", permission: {owner: true}},
    {name: "dev_apis", permission: {owner: true}},
    {name: "entries_categories", permission: {owner: true}},
    {name: "entries_tags", permission: {owner: true}},
    {name: "entries_flavors", permission: {owner: true},
        callback: function (state, resolve, done) {
            console.log('callback');
            var data = state.data;
            console.log(data);
            done();
        }
    },
    {name: "flavors_default", permission: {owner: false}},
    {
        name: "credentials_apis", permission: {owner: false},
        callback: function (state, resolve, done) {
            //console.log('callback');
            var action = state.action;
            switch (action) {
                case 'gen_key':
                    //var payload = state.data;
                    QueueSeneca.act({
                            role: 'jwt', cmd: 'generateKey'
                        },
                        function (err, res) {
                            if (err) return console.err(err);

                            var response = state.response;
                            response.setHeader("Content-type", "application/json");
                            response.end(JSON.stringify(res));
                            resolve(null, false);
                        })

                    break;
                case 'gen_token':
                    var data = state.data;
                    //console.log(data);
                    var payload = _.omit(data, "webix_operation", "token");
                    payload.createdAt = Math.round(new Date().getTime() / 1000);
                    console.log(data.key);
                    console.log(payload);
                    QueueSeneca.act({
                            role: 'jwt', cmd: 'sign', key: data.key, payload: payload
                        },
                        function (err, res) {
                            if (err) return console.err(err);

                            var response = state.response;
                            response.setHeader("Content-type", "application/json");
                            response.end(JSON.stringify(res));
                            resolve(null, false);
                        })

                    break;
                default:
                    done();
            }

        }
    }
]

var apis_length = apis.length;
for (var i = 0; i < apis_length; i++) {
    var api = apis[i];
    webixConnector.addRoute('/api/' + api.name, apiHandler(api.name, api.permission, api.callback));
}