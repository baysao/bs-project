var logger = require('./common/logger')("services");
var config = require("nconf");
config.file('./config.json');
var mongo = require('mongoskin');
var db = mongo.db(config.get('mongo'));

var rabbitmq = config.get("queueServer").rabbitmq;
var rabbitUrl = 'amqp://' + rabbitmq.username + ':' + rabbitmq.password + '@' + rabbitmq.host + ':' + rabbitmq.port;
var queueContext = require('rabbit.js').createContext(rabbitUrl);
require('seneca')()
    .use('rabbitmq-transport', config.get("queueServer"))
    .use('mongo-store', config.get("database"))
    .use('./hooks/prep_media.js')
    .use('./hooks/media_hub.js')
    .use('./hooks/content_source.js')
    .ready(function () {
        console.log('ready');
        logger.log('info', 'start services');
        this.queueContext = queueContext;
        this.Database = db;
        this.listen({type: 'rabbitmq'});
    })
