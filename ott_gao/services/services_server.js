var fs = require('fs');
var path = require('path');
var logger = require('./common/logger')("services");
var config = require("nconf");
config.file('./config.json');

var mongo = require('mongoskin');
var dbconfig = config.get("database");
var dburl = "mongodb://" + dbconfig.host + ':' + dbconfig.port + '/' + dbconfig.name;
var db = mongo.db(dburl);

var rabbitmq = config.get("queueServer").rabbitmq;
var rabbitUrl = 'amqp://' + rabbitmq.username + ':' + rabbitmq.password + '@' + rabbitmq.host + ':' + rabbitmq.port;
var queueContext = require('rabbit.js').createContext(rabbitUrl);
require('seneca')()
    .use('redis-transport')
    //.use('rabbitmq-transport', config.get("queueServer"))
    .use('jwt')
    //.use('mongo-store', config.get("database"))
    .use('./services_server/prep_media.js')
    .use('./services_server/media_hub.js')
    .use('./services_server/content_source.js')

    .ready(function () {
        logger.log('info', 'start services');
        this.queueContext = queueContext;
        this.Database = db;
        //this.listen({type: 'rabbitmq'});
        this.listen({type: 'redis'});
    })
