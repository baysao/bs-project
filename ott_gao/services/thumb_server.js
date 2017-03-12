var conf = require('nconf');
conf.file('./config.json');
var service_conf = conf.get('services').thumb_server;
//var cors = require('./api_server/middleware/cors');
//var jwt = require('./api_server/middleware/jwt');
//var collectionRoutes = require('./api_server/routes/collectionRoutes');
var thumbnailsRoute = require('./thumb_server/routes/thumbnails');
var thumbnailRawRoute = require('./thumb_server/routes/thumbnails_raw');
var app = require('express')();
app.use(require('body-parser').json())
    //.use(cors)
    //.use(jwt.checkToken)
    //.use('/api/v1', collectionRoutes)
    .listen(service_conf.port || 3000, service_conf.host || '127.0.0.1',
        function () {
            console.log('listen on ' + service_conf.host + ':' + service_conf.port);
        })
    app.get('/thumb/:timeq/entryId/:entryId/flavorId/:flavorId/rawId/:rawId', thumbnailsRoute)
    app.get('/thumb/:timeq/entryId/:entryId/rawId/:rawId', thumbnailRawRoute)


process.on('uncaughtException', function (err) {
    console.log(err);
});