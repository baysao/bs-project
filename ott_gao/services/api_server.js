var conf = require('nconf');
conf.file('./config.json');

var service_conf = conf.get('services').api_server;
//var cors = require('./api_server/middleware/cors');
var jwt = require('./api_server/middleware/jwt');
var app_api_router = require('./api_server/routes/app_api');
var web_api_router = require('./api_server/routes/web_api');
var custom_api_router = require('./api_server/routes/custom_api');
var custom_api_router_v2 = require('./api_server/routes/custom_api.v2');


var app = require('express')();
app.use(require('body-parser').json())
    //.use(cors)
    .use(jwt.checkToken)
    .use('/api/v1', app_api_router)
    .use('/api/embed/v1', web_api_router)
    .use('/api/custom/v1', custom_api_router)
    .use('/api/custom/v2', custom_api_router_v2)
    .listen(service_conf.port || 3000, service_conf.host || '127.0.0.1',
        function () {
            console.log('listen on ' + service_conf.host + ':' + service_conf.port);
        });
process.on('uncaughtException', function (err) {
    console.log(err);
});