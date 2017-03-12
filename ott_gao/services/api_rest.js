// PUBLIC DOMAIN
//var fs = require('fs');
//var path = require('path');
//
//var config = require("nconf");
//config.file('./config.json');
//
//var dbconfig = config.get('database');
//var mongo = require('mongoskin');
//var dburl = "mongodb://" + dbconfig.host + ':' + dbconfig.port + '/' + dbconfig.name;
//console.log(dburl);
//var db_instance = mongo.db(dburl);
//console.log(db_instance);
//var rabbitmq = config.get("queueServer").rabbitmq;
//var rabbitUrl = 'amqp://' + rabbitmq.username + ':' + rabbitmq.password + '@' + rabbitmq.host + ':' + rabbitmq.port;
//var queueContext = require('rabbit.js').createContext(rabbitUrl);
//
//var seneca = require('seneca')({
//    errhandler: function (err) {
//    },
//    debug: {
//        undead: true
//    }
//})
//    .use('mongo-store',{
//        name:'gao',
//        host:'127.0.0.1',
//        port:27017
//    })
//    .use('jwt')
//    .use('./api_rest/auth.js')
//    .use('./api_rest/entries_v1.js', {db: db_instance})
//
//    .ready(function () {
//
//    })

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    ('OPTIONS' == req.method) ? res.send(200) : next();
};

// Configuration



var routePublic = require('./api_rest/routes/public');
var app = require('express')()
    .use(require('body-parser').json())
    //.use(seneca.export('web'))
    .use(allowCrossDomain)
    .use('/api/v1', routePublic)

    .listen(3000, function(){
        console.log('listen port 3000');
    })

