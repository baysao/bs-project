/**
 * Created by baysao on 17/01/2016.
 */
var _ = require('underscore');
//var _s = require('underscore.string');
//var nconf = require('nconf');
//var conf = nconf.file('./config.json');
//var conf_hosts = conf.get('hosts');
//var stream_prefix = conf_hosts.stream_prefix;

//var promise = require('bluebird');
var fs = require('fs');
var path = require('path');
var db = require('./helpers').db;
var entries_helper = require('../api_server/routes/entries');
var utils = require('../api_server/routes/utils');
var cache = require('../api_server/routes/cache')();
var entries = db.collection('entries');

//var flavors = db.collection('flavors_default');
//var request = require('request');
//var objectPath = require("object-path");
var api_cache = cache.get('api', {maxAge: 1000 * 60});


var jwt = require('jsonwebtoken');


var not_supported = function (req, res, next) {
    res.end('api not supported');
}
build_json_load = function (url, opath) {
    var tmp = _.template("getJSON('<%= url %>').then(function (data) { var url = objectPath.get(data, '<%= opath %>'); if (url) { theoplayer.player(0).src = url; } }, function (status) { });");
    return tmp({url: url, opath: opath});
}
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
var request = require('request');
var path = require('path');

module.exports = function (app) {

    app.get('/app/:ver/:appid', function (req, res) {
        res.setHeader('content-type', 'text/html; charset=utf-8');
        var ver = req.params.ver;
        var appid = req.params.appid;
        res.render('app/' + ver + '/' + appid, {});
    })
    app.get('/p/*', function (req, res) {
        var hd = "*";
        var referer = req.headers['referer'];
        console.log(referer);
        if(referer) {
            hd = _.first(referer.split('/'),3).join('/');
        }
        res.header('Access-Control-Allow-Origin', hd);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization, X-Mindflash-SessionID');
        //console.log(req.url);
        //console.log(req.params[0]);
        //console.log(path.dirname(req.params[0]));
        var uu = req.url.replace("/p/", "");
        console.log(uu);
        request(uu, function (error, response, body) {
            if (error) {
                return console.log('Error:', error);
            }

            if (!error && response.statusCode == 200) {
                var exp = /[^\s"]+\.(m3u8|ts|bin)[^\s"]+/g;
                body =
                    body.replace(exp, function (match) {
                    console.log('m');
                    console.log(match);
                    var ret = '';
                    var u_m3u8 = 'http://dp.gao.easyvideo.vn/p/';
                    var u_oth = 'http://sp.gao.easyvideo.vn/';
                    if (!/^http/.test(match)) {
                        if (/\.m3u8/.test(match))
                            ret = u_m3u8 +  path.dirname(req.params[0]) + '/';
                        else
                            ret = u_oth + path.dirname(req.params[0]) + '/';
                    } else {
                        if (/\.m3u8/.test(match))
                            ret = u_m3u8;
                        else
                            ret = u_oth;
                        //ret = u_oth;
                    }
                    return ret + match;
                });
                res.setHeader('content-type', response.headers['content-type']);
                res.end(body); // Show the HTML for the Modulus homepage.
            } else {
                res.end('');
            }
        });
    })
    app.get('/player/v1/:id/:ff/:extra?', function (req, res) {

        var id = req.params.id
        var ff = req.params.ff
        var extra = req.params.extra;
        console.log(req.params.id);
        console.log('ff');
        console.log(req.params.ff);
        console.log('extra');
        console.log(req.params.extra);
        var headers = req.headers;
        console.log(headers);
        var decoded_token = jwt.decode(id);
        console.log(decoded_token);
        if (decoded_token.http_referers) {
            var http_referers = decoded_token.http_referers.split(',');
            if (!headers['referer']) {
                res.end('');
                return;
            }
            console.log(headers['referer']);
            var isFound = _.find(http_referers, function (hh) {
                var patt = new RegExp(hh);
                return patt.test(headers['referer']);
            })
            if (false && !isFound) {
                res.end('');
                return;
            }
        }

        if (/\.woff$/.test(extra)) {
            res.setHeader('content-type', 'application/x-font-woff');
            getFile(path.join(__dirname, "/public/theoplayer/" + ff + '/' + extra), function (cont) {
                res.end(cont);
            });
        } else if (/\.ttf$/.test(extra)) {
            res.setHeader('content-type', 'application/x-font-ttf');
            getFile(path.join(__dirname, "/public/theoplayer/" + ff + '/' + extra), function (cont) {
                res.end(cont);
            });
        } else if (/\.css$/.test(ff)) {
            console.log(path.join(__dirname, "/public/theoplayer/" + ff));
            res.setHeader('content-type', 'text/css');
            getFile(path.join(__dirname, "/public/theoplayer/" + ff), function (cont) {
                res.end(cont);
            });
        } else if (/\.js$/.test(ff)) {
            res.setHeader('content-type', 'text/javascript');
            res.render('player', {ff: ff, id: id});
        }
    })
    app.get('/embed/:id', function (req, res) {
        var extractedOptions = utils.extractRequest(req);
        //var query = req.query;
        //var height = query.height || '360';
        //var width = query.width || '640';
        //
        //if (query.size) {
        //    var sizeArr = query.size.split('x');
        //    if (sizeArr.length >= 2) {
        //        width = sizeArr[0] || width;
        //        height = sizeArr[1] || height;
        //    }
        //}
        var sid = req.params.id;
        if (!sid) {
            res.sendStatus(404);
            return;
        }
        var successHandler = function (entry) {
            entries_helper.buildResult(db, entry, extractedOptions).then(function (entryInfo) {
                console.log('entryInfo');
                console.log(entryInfo);
                if (!entryInfo) {
                    res.sendStatus(404);
                    return;
                }
                var opts = {after_player_loaded: "", vbixver: '174'};
                var source_orig_url;
                switch (entryInfo.source_type) {
                    case 'youtube':
                        if (!source_orig_url)
                            source_orig_url = entryInfo.source_vod_url;
                    case 'vod_ext':
                        if (!source_orig_url)
                            source_orig_url = entryInfo.source_vod_url;
                    case 'live_ext':
                        if (!source_orig_url)
                            source_orig_url = entryInfo.source_live_url;
                        if (source_orig_url) {
                            var source_live_url_arr = source_orig_url.split('|');
                            console.log(source_live_url_arr);
                            var source_url = source_live_url_arr.pop();
                            var source_format;
                            var source_object_path;

                            console.log(source_live_url_arr);
                            if (source_live_url_arr.length > 0) {
                                source_format = source_live_url_arr[0].toLowerCase() || 'json';
                                source_object_path = source_live_url_arr[1].toLowerCase() || 'url';
                            }
                        }
                        console.log('source_format:' + source_format);
                        switch (source_format) {
                            case 'json':
                                opts.lazyload_videourl = build_json_load(source_url, source_object_path);
                                opts.player_type = 'theoplayer';
                                break;
                            default:
                                opts.url = source_orig_url;
                        }
                }
                opts.vbxversion = '186';
                opts.seckey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoid2ViX2RwLmdhbyIsInR5cGUiOiJ3ZWIiLCJpc19lbmFibGVkIjoiMSIsImlwX3JhbmdlcyI6IiIsImh0dHBfcmVmZXJlcnMiOiJkcC5nYW8uZWFzeXZpZGVvLnZuIiwiZXhwaXJlZCI6IiIsImtleSI6IlJuR2JRNW5sL3pHTFdJMUNURm5Ka1VDTGJwTVRoUFUxM0owME5RbmsvQkJWVFA3N08vZkZLV3BTalJ6NWdPd3VtVk9ZaW44cnlaZkFhQTJhQXlJSVlRPT0iLCJ1c2VySWQiOiJFcWNmaXN2YWViNkFOY0VFWCIsImNyZWF0ZWRBdCI6MTQ1NDU2Mjc1OX0.Qoyf0WVXjHQpFslcR0mqHO-PkiYRTMtWD4aJDAF2QFw';
                var finalOpts = _.extend(entryInfo, opts);
                console.log(finalOpts);
                if (finalOpts.player_type == 'theoplayer' || /\.m3u8$/.test(finalOpts.url)) {
                    res.render('render_theoplayer', finalOpts);
                } else
                    res.render('render_videojs', finalOpts);
            })
        }
        var failedHandler = function (api_cache, cid, successHandler) {
            entries.findOne({sid: sid}, function (err, entry) {
                if (err) {
                    res.sendStatus(404);
                    return;
                }
                if (entry) {
                    api_cache.set(cid, entry);
                    successHandler(entry);
                } else {
                    res.sendStatus(404);
                }

            })
        }
        utils.getCache(api_cache,
            {t: 'db:entries', id: '' + sid},
            successHandler, failedHandler);

        console.log(sid);


    }).post(not_supported).put(not_supported).delete(not_supported);

    app.get('/', function (req, res) {
        res.send('api not supported');
    });
}
