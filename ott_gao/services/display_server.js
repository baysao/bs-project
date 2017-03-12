/**
 * Created by baysao on 16/01/2016.
 */
//require("dot").process({
//    global: "_page.render"
//    , destination: __dirname + "/display_server/views/"
//    , path: (__dirname + "/display_server/templates")
//});
var conf = require('nconf');
conf.file('./config.json');
var service_conf = conf.get('services').display_server;

var express = require('express')
    , http = require('http')
    , path = require('path')
    , app = express()
    , minifyHTML = require('express-minify-html')
    , bodyParser = require('body-parser');
    //, render = require('./display_server/render');

var engine = require('express-dot-engine');
app.engine('dot', engine.__express);
app.set('views', path.join(__dirname, './display_server/views'));
app.set('view engine', 'dot');
process.env['NODE_ENV'] == 'production' && app.set('view cache', true) || app.set('view cache', false);
app.use(minifyHTML({
    override:      false,
    displayErrors: process.env.NODE_ENV === 'development',
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}));
var db = require('./display_server/helpers').db;
var entries = db.collection('entries');

app.use(express.static(path.join(__dirname, 'display_server', 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

require('./display_server/routes')(app);

//app.use(function(err, req, res, next) {
//    console.error(err.stack);
//    res.status(500).send('Something broke!');
//});
app.listen(service_conf.port || 3000, service_conf.host || '127.0.0.1',
    function () {
        console.log('listen on ' + service_conf.host + ':' + service_conf.port);
    });
//var httpServer = http.createServer(app);
//httpServer.listen(4000, function() {
//    console.log('Listening on port %d', httpServer.address().port);
//});
process.on('uncaughtException', function (err) {
    console.log(err);
});