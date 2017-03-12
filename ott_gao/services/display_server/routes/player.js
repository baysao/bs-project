/**
 * Created by baysao on 19/03/2016.
 */
var _ = require('underscore');
var util = require('util');
var async = require('async');
var qs = require('qs');
var fs = require('fs');
var path = require('path');
var jwt = require('jsonwebtoken');

var getFile = function (filePath, cb) {
    fs.exists(filePath, function (exists) {
        if (!exists) {
            console.log('path not exist:' + filePath)
            cb('');
            return;
        }
        fs.readFile(filePath, function (error, content) {
            if (error) {
                console.log('read file error:' + filePath);
                console.log(error);
                cb('');
            }
            else {
                cb(content);
            }
        });
    })
}
module.exports = function(app){
    "use strict";
    app.get('/player/:ver/:id/:ff/:extra?', function (req, res) {
        console.log('player');
        var ver = req.params.ver;
        var id = req.params.id;
        var ff = req.params.ff;
        var extra = req.params.extra;
        var headers = req.headers;
        var decoded_token = jwt.decode(id);
        if (decoded_token.http_referers) {
            var http_referers = decoded_token.http_referers.split(',');
            if (false && !headers['referer']) {
                res.end('');
                return;
            }
            var isFound = _.find(http_referers, function (hh) {
                var patt = new RegExp(hh);
                return patt.test(headers['referer']);
            })
            if (false && process.env['NODE_ENV'] == 'production' && !isFound) {
                res.end('');
                return;
            }
        }

        if (/\.woff$/.test(extra)) {
            res.setHeader('content-type', 'application/x-font-woff');
            getFile(path.join(__dirname, "../public/theoplayer/" + ff + '/' + extra), function (cont) {
                res.end(cont);
            });
        } else if (/\.ttf$/.test(extra)) {
            res.setHeader('content-type', 'application/x-font-ttf');
            getFile(path.join(__dirname, "../public/theoplayer/" + ff + '/' + extra), function (cont) {
                res.end(cont);
            });
        } else if (/\.css$/.test(ff)) {
            res.setHeader('content-type', 'text/css');
            getFile(path.join(__dirname, "../public/theoplayer/" + ff), function (cont) {
                res.end(cont);
            });
        } else if (/\.js$/.test(ff)) {
            res.setHeader('content-type', 'text/javascript');
            var templ = 'player';
            if(ver) {
                templ = templ + '_' + ver;
            }
            res.render(templ, {ff: ff});
        }
    })
}