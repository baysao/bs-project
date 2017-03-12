/**
 * Created by baysao on 11/01/2016.
 */
var _ = require("underscore");
var mongo = require("mongoskin");
var config = require("nconf");
config.file('./config.json');
var rabbitmq = config.get("queueServer").rabbitmq;
var database = config.get('database');
var dburl = 'mongodb://' + database.host + ':' + database.port + '/' + database.name;
var db = mongo.db(dburl);
console.log(dburl);
var rabbitUrl = 'amqp://' + rabbitmq.username + ':' + rabbitmq.password + '@' + rabbitmq.host + ':' + rabbitmq.port;
var queueContext = require('rabbit.js').createContext(rabbitUrl);
console.log(rabbitUrl);
queueContext.on('ready', function(){
    var pushSocket = queueContext.socket('WORKER',  {prefetch: 1});
    var transcodeByFlavorSocket = queueContext.socket('PUSH');
    pushSocket.connect('TRANSCODE', function(){
        transcodeByFlavorSocket.connect('TRANSCODE_ACTION', function(){
            pushSocket.on('data', function(msg){
                var file_raw = JSON.parse(msg);
                console.log(file_raw);
                var rawId = file_raw.rawId;
                var content_raw = db.collection('content_raw');
                content_raw.findById(rawId, function(err, file_raw_res){
                    console.log(file_raw_res);
                    var file_flavor = file_raw_res.flavor;
                    var entries_flavors = db.collection('entries_flavors');
                    entries_flavors.findById(file_flavor, function(err, item){
                       var flavors = item.ids;
                        _.each(JSON.parse(flavors), function(flavor){
                            var flavorId = flavor;
                            var obj = {rawId: rawId, entryId: file_raw.entryId, flavorId: flavorId};
                            console.log(obj);
                            transcodeByFlavorSocket.write(JSON.stringify(obj));
                        })
                        pushSocket.ack();
                    })
                })
            })
        })

    })

})
