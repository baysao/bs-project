/**
 * Created by baysao on 11/01/2016.
 */
var _ = require("underscore");
var config = require("nconf");
config.file('./config.json');


//var rabbitmq = config.get("queueServer").rabbitmq;
//var rabbitUrl = 'amqp://' + rabbitmq.username + ':' + rabbitmq.password + '@' + rabbitmq.host + ':' + rabbitmq.port;
//console.log(rabbitUrl);
//var queueContext = require('rabbit.js').createContext(rabbitUrl);


var database = config.get('database');
var dburl = 'mongodb://' + database.host + ':' + database.port + '/' + database.name;
console.log(dburl);


var mongo = require("mongoskin");
var db = mongo.db(dburl);
var coll = db.collection('flavors_default');

var presets = require('../kaltura_preset')();
console.log(presets);
_.each(presets, function(pre){
    coll.insert(pre);
})
//
//queueContext.on('ready', function(){
//    var pushSocket = queueContext.socket('PUSH');
//    pushSocket.connect('TRANSCODE', function() {
//        pushSocket.write('task', 'utf8');
//    })
//})
