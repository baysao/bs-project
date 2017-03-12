/**
 * Created by baysao on 17/01/2016.
 */
var _ = require('underscore');
var util = require('util');
var async = require('async');
var fileType = require('file-type');
//var _s = require('underscore.string');
var nconf = require('nconf');
var conf = nconf.file('../config.json');
var conf_hosts = conf.get('hosts');
//var stream_prefix = conf_hosts.stream_prefix;
var qs = require('qs');
//var promise = require('bluebird');
var fs = require('fs');
var path = require('path');
var db = require('./helpers').db;
var entries_helper = require('../api_server/routes/entries');
var utils = require('../api_server/routes/utils');
var cache = require('../api_server/routes/cache')();
var entries_col = db.collection('entries');
var actions_col = db.collection('actions');
var adverts_col = db.collection('adverts');
var request = require('request');
//var flavors = db.collection('flavors_default');
//var request = require('request');
//var objectPath = require("object-path");
var api_cache = cache.get('api', {maxAge: 1000 * 10});
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
//var transporter = nodemailer.createTransport('SMTP', {

var route_player = require('./routes/player');

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
        user: "noreply.gaovideo@gmail.com",
        pass: "One free account gets you into everything Google."
    }
}));
var jwt = require('jsonwebtoken');
var not_supported = function (req, res, next) {
    res.end('api not supported');
}
build_json_load = function (url, opath) {
    var tmp = _.template("getJSON('<%= url %>').then(function (data) { var url = objectPath.get(data, '<%= opath %>'); if (url) { theoplayer.player(0).src = url; } }, function (status) { });");
    return tmp({url: url, opath: opath});
}

function addslashes(str) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}
var analyze_actions = function (res, entry, cid, successHandler) {
    //console.log(entry);
    if (!entry) {
        res.end('');
        return;
    }
    entry['ads'] = {vast: [], banners: []};
    var banners_ads = [];
    var vast_ads = [];
    var preroll_action = [];
    var midroll_action = [];
    var postroll_action = [];
    var list_action = [];
    async.forEachOf(entry, function (v, k, callback) {
        async.parallel([
            function (cb) {
                //console.log('1');
                var mm = k.match(/advert_id_(.*)/);
                if (mm && mm[1]) {
                    var aid = mm[1];
                    adverts_col.findById(v, function (err, item) {
                        if (err && !item) return;
                        console.log('item');
                        var newitem = _.pick(item, 'url', 'offset', 'skip', 'addCompanionRequest',
                            'imageURL', 'clickURL', 'opacity', 'startTime', 'endTime', 'maxHeight', 'closable');
                        console.log(newitem);

                        var args = ['type', 'skip', 'startTime', 'endTime', 'maxHeight', 'addCompanionRequest'];
                        _.each(args, function (arg) {
                            var ee = entry['advert_' + arg + '_' + aid];
                            if (ee && arg == 'type' && ee == 'preroll') newitem.offset = 'pre';
                            if (ee && arg == 'type' && ee == 'postroll') newitem.offset = 'post';
                            if (ee && arg == 'type' && ee == 'midroll') newitem.offset = entry['advert_offset_' + aid];
                            if (ee && newitem[arg]) {
                                newitem[arg] = ee;
                            }
                            if ((arg == 'startTime' || arg == 'endTime') && newitem[arg])
                                newitem[arg] = parseInt(newitem[arg]);
                        })
                        console.log(newitem);
                        if (entry['advert_type_' + aid])
                            vast_ads.push(newitem);
                        else
                            banners_ads.push(newitem);
                        cb(null);
                    })
                } else {

                    cb(null);
                }
            },
            function (cb) {
                //console.log('2');
                var mm = k.match(/action_id_(.*)/);
                if (mm && mm[1]) {
                    var aid = mm[1];
                    actions_col.findById(v, function (err, item) {
                        if (err && !item) return;
                        var type = entry['action_type_' + aid];
                        switch (type) {
                            case 'midroll':
                                midroll_action.push({
                                    playerAppInternalId: v + '_' + entry['action_order_' + aid],
                                    startTime: entry['action_time_' + aid] || 0
                                })
                                break;
                            case 'postroll':
                                postroll_action.push({
                                    playerAppInternalId: v + '_' + entry['action_order_' + aid]
                                });
                                break;
                            case 'preroll':
                                preroll_action.push({
                                    playerAppInternalId: v + '_' + entry['action_order_' + aid]
                                })
                                break;
                        }
                        var appo = _.omit(item, '_id', 'ownerId', 'categories');
                        appo['id'] = v + '_' + entry['action_order_' + aid] + '_' + _.random(0, 100);
                        appo['order'] = parseInt(entry['action_order_' + aid]);
                        item['internalId'] = v + '_' + entry['action_order_' + aid];
                        if (type == 'midroll') appo['mid_roll_app.startTime'] = (entry['action_time_' + aid] && parseInt(entry['action_startTime_' + aid])) || 0;
                        if (item.showInMenu == '1') {
                            appo['showInMenu'] = true;
                        } else appo['showInMenu'] = false;
                        list_action.push(appo);
                        cb(null);
                    })
                } else {
                    cb(null);
                }

            }
        ], function () {

            entry['ads']['vast'] = vast_ads;
            entry['ads']['banners'] = banners_ads;
            entry['preRollApps'] = addslashes(JSON.stringify(preroll_action));
            entry['midRollApps'] = addslashes(JSON.stringify(midroll_action));
            entry['postRollApps'] = addslashes(JSON.stringify(postroll_action));
            entry['applications'] = list_action;
            //console.log('3');
            callback(null);
        })

    }, function () {
        //console.log('4');
        if (entry) {
            //console.log(util.inspect(entry, false, null));
            api_cache.set(cid, entry);
            successHandler(entry);
        } else {
            res.end('');
        }

    })
    //console.log('5');
}
function gen_frame(req, res) {
    var extractedOptions = utils.extractRequest(req);
    var sid = req.params.id;
    if (!sid || sid == 'undefined') {
        res.end('');
        return;
    }
    var successHandler = function (entry) {
        entries_helper.buildResult(db, entry, extractedOptions).then(function (entryInfo) {
            if (!entryInfo) {
                res.end('');
                return;
            }
            var opts = {player_type: '', after_player_loaded: ''};
            //var source_orig_url;

            switch (entryInfo.source_type) {
                case 'youtube':
                    //if (!source_orig_url)
                    //    source_orig_url = entryInfo.source_vod_url;
                    opts.player_type = 'videojs';
                case 'vod_ext':
                case 'vod_int':
                    //if (!source_orig_url)
                    if (!entryInfo.url)
                        entryInfo.url = entryInfo.source_vod_url;
                    if (entryInfo.url && /\.m3u8/.test(entryInfo.url)) {
                        if (!opts.player_type) opts.player_type = 'theoplayer';
                    } else opts.player_type = 'videojs';

                    break;
                case 'live_ext':
                    //if (!source_orig_url)
                    if (!entryInfo.url)
                        entryInfo.url = entryInfo.source_live_url;
                    break;
                default:
                //source_orig_url = entryInfo.url;

            }
            if (entryInfo.url) {
                var source_live_url_arr = entryInfo.url.split('|');
                if (source_live_url_arr.length == 3) {
                    var source_url = source_live_url_arr.pop();
                    var source_format = source_live_url_arr[0].toLowerCase() || 'json';
                    var source_object_path = source_live_url_arr[1].toLowerCase() || 'url';
                    switch (source_format) {
                        case 'json':
                            opts.lazyload_videourl = build_json_load(source_url, source_object_path);
                            opts.url = 'http://dp.gao.easyvideo.vn/empty.m3u8';
                            opts.player_type = 'theoplayer';
                            break;
                        default:
                        //    opts.url = source_orig_url;
                    }
                }
            } else
                entryInfo.url = 'http://dp.gao.easyvideo.vn/empty.m3u8';

            //if (opts.url && /\.m3u8/.test(opts.url)) {
            //    if (!opts.player_type) opts.player_type = 'theoplayer';
            //}
            if (!opts.player_type) opts.player_type = 'theoplayer';
            opts.vbxversion = '191';
            opts.seckey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoid2ViX2RwLmdhbyIsInR5cGUiOiJ3ZWIiLCJpc19lbmFibGVkIjoiMSIsImlwX3JhbmdlcyI6IiIsImh0dHBfcmVmZXJlcnMiOiJkcC5nYW8uZWFzeXZpZGVvLnZuIiwiZXhwaXJlZCI6IiIsImtleSI6IlJuR2JRNW5sL3pHTFdJMUNURm5Ka1VDTGJwTVRoUFUxM0owME5RbmsvQkJWVFA3N08vZkZLV3BTalJ6NWdPd3VtVk9ZaW44cnlaZkFhQTJhQXlJSVlRPT0iLCJ1c2VySWQiOiJFcWNmaXN2YWViNkFOY0VFWCIsImNyZWF0ZWRBdCI6MTQ1NDU2Mjc1OX0.Qoyf0WVXjHQpFslcR0mqHO-PkiYRTMtWD4aJDAF2QFw';
            var finalOpts = _.extend(entryInfo, opts);
            finalOpts.current_url = !/^http/.test(req.url) ? 'http://dp.gao.easyvideo.vn' + req.url : req.url;
            finalOpts.current_secure_url = !/^http/.test(req.url) ? 'https://dp.gao.easyvideo.vn' + req.url : req.url;
            finalOpts.description = finalOpts.description && finalOpts.description.replace(/\s+/, ' ') || '';
            console.log('finalOpts');
            console.log(util.inspect(finalOpts, false, null));
            if (process.env['NODE_ENV'] == 'production')
                //res.renderMin('frame', finalOpts);
                res.render('frame', finalOpts);
            else
                res.render('frame', finalOpts);
        })
    }
    var failedHandler = function (api_cache, cid, successHandler) {
        entries_col.findOne({sid: sid}, function (err, entry) {
            if (err) {
                //res.sendStatus(404);
                res.end('');
                return;
            }

            analyze_actions(res, entry, cid, successHandler);

        })
    }
    utils.getCache(api_cache,
        {t: 'db:entries', id: '' + sid},
        successHandler, failedHandler);

}

function embed(req, res) {
    var extractedOptions = utils.extractRequest(req);
    var sid = req.params.id;
    if (!sid || sid == 'undefined') {
        res.end('');
        return;
    }
    var successHandler = function (entry) {
        entries_helper.buildResult(db, entry, extractedOptions).then(function (entryInfo) {
            if (!entryInfo) {
                res.end('');
                return;
            }
            var opts = {player_type: '', after_player_loaded: ''};
            //var source_orig_url;

            switch (entryInfo.source_type) {
                case 'youtube':
                    //if (!source_orig_url)
                    //    source_orig_url = entryInfo.source_vod_url;
                    opts.player_type = 'videojs';
                case 'vod_ext':
                case 'vod_int':
                    //if (!source_orig_url)
                    if (!entryInfo.url)
                        entryInfo.url = entryInfo.source_vod_url;
                    if (entryInfo.url && /\.m3u8/.test(entryInfo.url)) {
                        if (!opts.player_type) opts.player_type = 'theoplayer';
                    } else opts.player_type = 'videojs';

                    break;
                case 'live_ext':
                    //if (!source_orig_url)
                    if (!entryInfo.url)
                        entryInfo.url = entryInfo.source_live_url;
                    break;
                default:
                //source_orig_url = entryInfo.url;

            }
            if (entryInfo.url) {
                var source_live_url_arr = entryInfo.url.split('|');
                if (source_live_url_arr.length == 3) {
                    var source_url = source_live_url_arr.pop();
                    var source_format = source_live_url_arr[0].toLowerCase() || 'json';
                    var source_object_path = source_live_url_arr[1].toLowerCase() || 'url';
                    switch (source_format) {
                        case 'json':
                            opts.lazyload_videourl = build_json_load(source_url, source_object_path);
                            opts.url = 'http://dp.gao.easyvideo.vn/empty.m3u8';
                            opts.player_type = 'theoplayer';
                            break;
                        default:
                        //    opts.url = source_orig_url;
                    }
                }
            } else
                entryInfo.url = 'http://dp.gao.easyvideo.vn/empty.m3u8';

            //if (opts.url && /\.m3u8/.test(opts.url)) {
            //    if (!opts.player_type) opts.player_type = 'theoplayer';
            //}
            if (!opts.player_type) opts.player_type = 'theoplayer';
            opts.vbxversion = '191';
            opts.seckey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoid2ViX2RwLmdhbyIsInR5cGUiOiJ3ZWIiLCJpc19lbmFibGVkIjoiMSIsImlwX3JhbmdlcyI6IiIsImh0dHBfcmVmZXJlcnMiOiJkcC5nYW8uZWFzeXZpZGVvLnZuIiwiZXhwaXJlZCI6IiIsImtleSI6IlJuR2JRNW5sL3pHTFdJMUNURm5Ka1VDTGJwTVRoUFUxM0owME5RbmsvQkJWVFA3N08vZkZLV3BTalJ6NWdPd3VtVk9ZaW44cnlaZkFhQTJhQXlJSVlRPT0iLCJ1c2VySWQiOiJFcWNmaXN2YWViNkFOY0VFWCIsImNyZWF0ZWRBdCI6MTQ1NDU2Mjc1OX0.Qoyf0WVXjHQpFslcR0mqHO-PkiYRTMtWD4aJDAF2QFw';
            var finalOpts = _.extend(entryInfo, opts);
            finalOpts.current_url = !/^http/.test(req.url) ? 'http://dp.gao.easyvideo.vn' + req.url : req.url;
            finalOpts.current_secure_url = !/^http/.test(req.url) ? 'https://dp.gao.easyvideo.vn' + req.url : req.url;
            finalOpts.description = finalOpts.description && finalOpts.description.replace(/\s+/, ' ') || '';
            console.log('finalOpts');
            console.log(util.inspect(finalOpts, false, null));
            if (process.env['NODE_ENV'] == 'production')
                res.renderMin('embed', finalOpts);
            else
                res.render('embed', finalOpts);
        })
    }
    var failedHandler = function (api_cache, cid, successHandler) {
        entries_col.findOne({sid: sid}, function (err, entry) {
            if (err) {
                //res.sendStatus(404);
                res.end('');
                return;
            }

            analyze_actions(res, entry, cid, successHandler);

        })
    }
    utils.getCache(api_cache,
        {t: 'db:entries', id: '' + sid},
        successHandler, failedHandler);

}

module.exports = function (app) {
    route_player(app);

    //var expressWs = require('express-ws')(app);
    //app.ws('/wsapp', function (ws, req) {
    //    ws.on('message', function (msg) {
    //        console.log(msg);
    //    });
        //console.log('socket', req.testing);
    //});
    app.get('/ac34cb6a1749d39db77a6a39fd39c6010f81975b', function (req, res) {
        "use strict";
        cache.reset();
        res.end();
    })
    app.head('/h/:u', function (req, res) {
        "use strict";
        var url = decodeURI(req.params.u);
        console.log(url);
        var headers =  {
            'Access-Control-Allow-Headers':  '*',
            'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
            'Access-Control-Allow-Origin': req.headers['Referer'] || '*',
            'Access-Control-Expose-Headers': 'Server,range,Content-Length,Content-Range,Date',
            'X-Cache': 'HIT',
            'X-Peer5-Proxy': 'HIT'
        };
        console.log('prepare headers');
        console.log(headers);
        if (url == 'health') {
            res.writeHead(200, headers);
            res.end();
            return;
        }
        request
            .head(url, function (error, response, body) {
                console.log('head:' + url);
                if(error) throw new Error(error);
                //res.writeHead(200, headers);
                res.writeHead(200, _.extend(response['headers'], headers));
                res.end();
            })
    })
    app.get('/v/:ss/:id', function (req, res) {
        var sid = req.params.id;
        if (!sid || sid == 'undefined') {
            res.end('');
            return;
        }
        entries_col.findOne({sid: sid}, function (err, entry) {
            if (err) {
                res.end('');
                return;
            }
            entry.current_url = !/^http/.test(req.url) ? 'http://dp.gao.easyvideo.vn' + req.url : req.url;
            entry.current_secure_url = !/^http/.test(req.url) ? 'https://dp.gao.easyvideo.vn' + req.url : req.url;
            //entry.current_secure_url = req.url.replace('http://', 'https://');
            if (process.env['NODE_ENV'] == 'production')
                res.renderMin('landing', entry);
            else
                res.render('landing', entry);
            //entry.description = entry.description && entry.description.replace(/\s+/, ' ') || '';
        })
    })
    app.post('/api/form/submit/:id', function (req, res) {
        "use strict";
        var data = req.body;
        var id = req.params.id;
        id = id.split('_')[0];
        console.log('data');
        console.log(data);
        if(!data)  return res.json({"success": false, "message": "no data"});
        console.log(id);
        if (!id) {
            res.json({"success": false, "message": "Id not defined"});
            return;
        }
        actions_col.findById(id, function (err, action) {
            if (err) {
                res.json({"success": false, "message": "DB error"});
                return;
            }
            //console.log(action);
            // setup e-mail data with unicode symbols
            var isCheckbox = data && data.Checkbox && data.Checkbox.length > 0 ? 'YES' : 'NO';
            data.Name = data && data.Name ? data.Name.join(','): '';
            data.Comments = data && data.Comments ? data.Comments.join(',') : '';
            data.Email = data && data.Email ? data.Email.join(',') : '';
            data.PlayerName = data && data.PlayerName ? data.PlayerName.join(',') : '';
            data.PlayerReferrer = data && data.PlayerReferrer ? data.PlayerReferrer.join(',') : '';
            data.Checkbox = data && data.Checkbox ? data.Checkbox.join(',') : '';
            var mailOptions = {
                from: action.from,
                to: action.emails,
                subject: 'GAO Video Player Form Submitted', // Subject line
                text: 'Your video player has a new form submission:\n' +
                'Name:' + data.Name + '\n' +
                'Email:' + data.Email + '\n' +
                'Comments:' + data.Comments + '\n' +
                'Player:' + data.PlayerName + '\n' +
                'PlayerReferrer:' + data.PlayerReferrer + '\n' +
                data.Checkbox + ':' + isCheckbox,

                html: 'Your video player has a new form submission:<br/>' +
                'Name:' + data.Name + '<br/>' +
                'Email:' + data.Email + '<br/>' +
                'Comments:' + data.Comments + '<br/>' +
                'Player:' + data.PlayerName + '<br/>' +
                'PlayerReferrer:' + data.PlayerReferrer + '<br/>' +
                data.Checkbox + ':' + isCheckbox,
            };
            console.log('mailOptions:');
            console.log(mailOptions);
            //// send mail with defined transport object
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    //console.log(error);
                    res.json({"success": false, "message": "Cannot send email"});
                } else {
                    console.log('Message sent: ' + info.response);
                    res.json({"success": true, "message": "Success"});
                }
            });
        })
    })
    app.get('/stream', function (req, res) {
        "use strict";
        var query = req.query;
        var url = query.url;
        if (url) {
            url = decodeURIComponent(url);
            var ufull = path.join(__dirname, "/public/" + url);
            //console.log(ufull);
            getFile(path.join(__dirname, "/public/" + url), function (cont) {
                var ft = fileType(cont);
                if (ft && ft.mime)
                    res.setHeader('content-type', ft.mime);
                else
                    res.setHeader('content-type', 'application/octet-stream');
                res.end(cont);
            });
        } else {
            res.end('');
        }
    })
    app.get('/api/Bundle/:id', function (req, res) {
        "use strict";
        res.json({
            "render": {
                "affiliateData": {
                    "ac": null,
                    "aid": null,
                    "regex": []
                    //"regex": ["greensmoke\\.co.+?\\\/aff\\\/(?P<ac>\\d+)\\\/ad\\\/(?P<aid>\\d+)", "tplclick\\?lid=\\d+&pubid=(?P<ac>.+)", "bin\/.+?\\?id=(?P<ac>[^&]+)&offerid=(?P<aid>[^&]+)|bin\/.+?\\?id=(?P<ac>.+?)&", "&pubid=(?P<ac>[^&]*)", "&aid=(?P<aid>[\\d\\.]+)&pid=(?P<ac>\\d+)&", "\/click-(?P<ac>\\d+)-(?P<aid>[\\d\\.]+)", "shareasale\\.com[^?]*\\?(?P<query>.*)", "\/t\/\\d+-\\d+-(?P<ac>\\d+)-\\d+", "linkconnector\\.com[^?]*\\?(?P<query>.*)", "(?:\/BI\/(?P<ac>\\d+)\/KBID\/(?P<aid>\\d+))|(?:BI=(?P<ac>\\d+).+?KBID=(?P<aid>\\d+))"]
                },
                "categories": {
                    "supportsCategories": true,
                    "url": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/getcategories\/86bdea8024974afb9017e9da70859c01{parentCategory}?&onlyVideo={onlyVideo}"
                },
                "content": {
                    "platformUrl": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/getplatformcontent\/{widgetId}\/{platform}\/{videoIDs}?",
                    "playlistUrl": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/getplaylist\/{widgetId}\/{playlistId}?",
                    "productUrl": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/getproduct\/{productId}?",
                    "quizUrl": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/getquiz\/{quizId}?",
                    "timelineUrl": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/gettimeline\/{timelineId}?",
                    "url": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/getcontent\/86bdea8024974afb9017e9da70859c01?type=xml",
                    "widgetUrl": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/getcontent\/{widgetId}?"
                },
                "deleted": false,
                "environment": {"embedUrl": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/getembedcode\/{widgetId}?&fv={flashVars}"},
                "initialState": {
                    "autoPlay": "False",
                    "muted": "False",
                    "newWidgetId": "86bdea80-2497-4afb-9017-e9da70859c01"
                },
                "layout": {
                    "adServer": "False",
                    "configurations": [{
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "showQualityButton",
                        "type": "boolean",
                        "value": "false"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "fbConversionPixel",
                        "type": "string",
                        "value": ""
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "bottomLogoUrl",
                        "type": "string",
                        "value": ""
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "defaultTwitterMessage",
                        "type": "string",
                        "value": "Check out this video for {title}: {link}"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "titleTextFormatColor",
                        "type": "number",
                        "value": "0xFFFFFF"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "facebookSharePageUrl",
                        "type": "string",
                        "value": ""
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "preRollApps",
                        "type": "string",
                        "value": "[]"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "useYouTubeHighQuality",
                        "type": "boolean",
                        "value": "false"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "playVideoInApps",
                        "type": "boolean",
                        "value": "false"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "showTwitterButton",
                        "type": "boolean",
                        "value": "true"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "customCss",
                        "type": "string",
                        "value": ""
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "videoEmailUrl",
                        "type": "string",
                        "value": ""
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "bannerApps",
                        "type": "string",
                        "value": ""
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "tinyUrl",
                        "type": "string",
                        //"value": "http:\/\/tinyurl.com\/hytmbhk"
                        "value": ""
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "showShareButton",
                        "type": "boolean",
                        "value": "true"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "bottomLogoLink",
                        "type": "string",
                        "value": "http:\/\/www.nguyenkim.com\/su-kien-khuyen-mai.html"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "videoThumbnailUrl",
                        "type": "string",
                        "value": "\/\/assets.viewbix.com\/4dc78442-b3ce-446a-aaf7-92c3c452b4b2.jpg"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "captions",
                        "type": "string",
                        "value": ""
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "showFacebookButton",
                        "type": "boolean",
                        "value": "true"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "keepControlsVisible",
                        "type": "boolean",
                        "value": "true"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "ctaButtonBackgroundColor",
                        "type": "number",
                        "value": "16763904"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "customLogoUrl",
                        "type": "string",
                        "value": "\/\/assets.viewbix.com\/b487cac8-87b9-43fc-8182-15ff03e9e54b.png"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "ctaApps",
                        "type": "string",
                        "value": ""
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "customLogoLink",
                        "type": "string",
                        "value": "http:\/\/www.nguyenkim.com\/"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "showHideUi",
                        "type": "string",
                        "value": ""
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "ctaLink",
                        "type": "string",
                        "value": "http:\/\/www.nguyenkim.com\/dien-thoai-samsung-galaxy-s6-edge-sm-g925-den.html"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "title",
                        "type": "string",
                        "value": "Samsung Galaxy S6 edge+ : Official Introduction"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "ctaText",
                        "type": "string",
                        "value": "Mua Ngay"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "videoLink",
                        "type": "string",
                        "value": "https:\/\/www.thegioididong.com\/dtdd\/samsung-galaxy-s6-edge"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "videoUrl",
                        "type": "string",
                        "value": "http:\/\/demo.easyvideo.vn\/samsung_s6e.mp4"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "midRollApps",
                        "type": "string",
                        "value": "[{\"startTime\":\"30\",\"playerAppInternalId\":\"eb1b93e9-1563-46cb-8704-727c8820fd39\"}]"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "ctaButtonButtonTextFormatColor",
                        "type": "number",
                        "value": "0x000000"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "postRollApps",
                        "type": "string",
                        "value": "[{\"playerAppInternalId\":\"3656706f-09a0-4738-8a60-ea86295bbc60\"}]"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "standardTextFormatFont",
                        "type": "string",
                        "value": "Verdana"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "scaleLogoToTitleBar",
                        "type": "boolean",
                        "value": "true"
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "openvvTrackScriptUrl",
                        "type": "string",
                        "value": ""
                    }, {
                        "fromMetadata": "true",
                        "instancePath": null,
                        "name": "applications",
                        "type": "xml",
                        "value": "<applications><com.qoof.sdk.components.rss.RSSItem><id>5b27945605bd40cd9963758c5aad8989<\/id><playerName>Samsung Galaxy S6 edge+ : Official Introduction<\/playerName><internalId>dfc72dfb-6f3d-4945-b7ef-e54a82d856be<\/internalId><mid_roll_app.startTime>29<\/mid_roll_app.startTime><thumbnailWidth>190<\/thumbnailWidth><feedXmlString>&lt;feed&gt;&lt;entry&gt;&lt;id&gt;&lt;\/id&gt;&lt;title&gt;ĐIỆN THOẠI SAMSUNG GALAXY S6 EDGE 32GB&lt;\/title&gt;&lt;content&gt;Màn hình:\u0009Super AMOLED, 5.1&amp;quot;, Quad HD\u000aHệ điều hành:\u0009Android 5.0 (Lollipop)\u000aCamera sau:\u000916 MP\u000aCamera trước:\u00095 MP\u000aCPU:\u0009Exynos 7420 8 nhân 64-bit, 4 nhân 1.5 GHz Cortex-A53 &amp;amp; 4 nhân 2.1 GHz Cortex-A57\u000aRAM:\u00093 GB\u000aBộ nhớ trong:\u000932 GB\u000aHỗ trợ thẻ nhớ:\u0009Không, Không\u000aThẻ SIM:\u00091 Sim, Nano SIM\u000aKết nối:\u0009WiFi, 3G, 4G LTE Cat 6\u000aDung lượng pin:\u00092600 mAh\u000aThiết kế:\u0009Pin liền\u000aChức năng đặc biệt:\u0009Mở khóa bằng vân tay, Sạc pin không dây, Sạc pin nhanh&lt;\/content&gt;&lt;thumbnailUrl&gt;&lt;\/thumbnailUrl&gt;&lt;link&gt;&lt;\/link&gt;&lt;contentSnippet&gt;Màn hình:\u0009Super AMOLED, 5.1&amp;quot;, Quad HD\u000aHệ điều hành:\u0009Android 5.0 (Lollipop)\u000aCamera sau:\u000916 MP\u000aCamera trước:\u00095 MP\u000aCPU:\u0009Exynos 7420 8 nhân 64-bit, 4 nhân 1.5 GHz Cortex-A53 &amp;amp; 4 nhân 2.1 GHz Cortex-A57\u000aRAM:\u00093 GB\u000aBộ nhớ trong:\u000932 GB\u000aHỗ trợ thẻ nhớ:\u0009Không, Không\u000aThẻ SIM:\u00091 Sim, Nano SIM\u000aKết nối:\u0009WiFi, 3G, 4G LTE Cat 6\u000aDung lượng pin:\u00092600 mAh\u000aThiết kế:\u0009Pin liền\u000aChức năng đặc biệt:\u0009Mở khóa bằng vân tay, Sạc pin không dây, Sạc pin nhanh&lt;\/contentSnippet&gt;&lt;publishedDate&gt;&lt;\/publishedDate&gt;&lt;index&gt;&lt;\/index&gt;&lt;\/entry&gt;&lt;\/feed&gt;<\/feedXmlString><showInMenu>true<\/showInMenu><icon>\/storage\/content\/icon\/16\/details.png<\/icon><label>Thông tin sản phẩm<\/label><\/com.qoof.sdk.components.rss.RSSItem><com.qoof.sdk.components.link.CustomEmbed><id>9cbcb03e3fa94d389ca48a4984714ea9<\/id><playerName>Samsung Galaxy S6 edge+ : Official Introduction<\/playerName><internalId>eb1b93e9-1563-46cb-8704-727c8820fd39<\/internalId><showInMenu>true<\/showInMenu><icon>\/storage\/content\/icon\/16\/shopcart.png<\/icon><text1>http:\/\/www.nguyenkim.com\/dien-thoai-samsung-galaxy-s6-edge-sm-g925-den.html<\/text1><mid_roll_app.startTime>30<\/mid_roll_app.startTime><label>Mua ngay<\/label><\/com.qoof.sdk.components.link.CustomEmbed><com.qoof.sdk.components.qr.QRCode><id>5508742da8b84dd28721aa97b0d22bcb<\/id><playerName>Samsung Galaxy S6 edge+ : Official Introduction<\/playerName><internalId>3656706f-09a0-4738-8a60-ea86295bbc60<\/internalId><icon>\/storage\/content\/icon\/16\/qr.png<\/icon><showInMenu>true<\/showInMenu><instructions>Scan barcode và nhắn tin về tổng đài 999 để nhận để nhận mã giảm giá VIP<\/instructions><message>NGUYENKIM_S6_DIS30PER<\/message><label>Đăng ký - Giảm ngay 1 triệu<\/label><mid_roll_app.startTime>30<\/mid_roll_app.startTime><\/com.qoof.sdk.components.qr.QRCode><com.qoof.sdk.components.contact.Skype><id>7f44155eba7d4777bc87f3b7ac155791<\/id><playerName>Samsung Galaxy S6 edge+ : Official Introduction<\/playerName><internalId>7360f22f-1793-4ce4-aea8-4da82b65c364<\/internalId><showInMenu>true<\/showInMenu><address>duyliem2012<\/address><icon>\/storage\/content\/icon\/16\/skype.png<\/icon><label>Hỗ trợ tư vấn<\/label><instructions>Hãy liên hệ chúng tôi để được tư vấn tốt nhất<\/instructions><\/com.qoof.sdk.components.contact.Skype><com.qoof.sdk.components.map.GoogleMap><id>2ee839af3090428a9594dfa3a214c2f7<\/id><playerName>Samsung Galaxy S6 edge+ : Official Introduction<\/playerName><internalId>2f834144-1334-440c-97ca-a9b1d96b06f6<\/internalId><address>63 Trần Hưng Đạo, P. Cầu Ông Lãnh, Q.1, TP Hồ Chí Minh<\/address><label>Cửa hàng trưng bày<\/label><zoom>19<\/zoom><showInMenu>true<\/showInMenu><icon>\/storage\/content\/icon\/16\/google_map.png<\/icon><title>Trải nghiệm sản phẩm tại TTMS Nguyễn Kim<\/title><\/com.qoof.sdk.components.map.GoogleMap><com.qoof.sdk.components.forms.MailForm><id>bf5ff2c0905d45d0851f096ccbd62227<\/id><playerName>Samsung Galaxy S6 edge+ : Official Introduction<\/playerName><internalId>8f6f61d1-a0f1-443f-a3e7-5720be87bd20<\/internalId><includeComments>true<\/includeComments><from>campaign_s6e@nguyenkim.com<\/from><emails>baysao@gmail.com<\/emails><commentsLabel>Thông tin góp ý<\/commentsLabel><checkboxLabel>Gửi phản hồi cho tôi<\/checkboxLabel><submitText>Gửi<\/submitText><includeCheckbox>true<\/includeCheckbox><success>Cám ơn bạn đã gửi thông tin<\/success><icon>\/storage\/content\/icon\/16\/mail.png<\/icon><label>Góp ý sản phẩm<\/label><showInMenu>true<\/showInMenu><instructions>Vui lòng điền thông tin và nhấn nút \"Gửi\"<\/instructions><\/com.qoof.sdk.components.forms.MailForm><com.qoof.sdk.components.rss.SocialShare><id>2fe5fc56c2174ba084fbabc4bcaa8a0d<\/id><playerName>Samsung Galaxy S6 edge+ : Official Introduction<\/playerName><internalId>d2d97a4a-d9dd-4f41-8e26-27d5818d59e3<\/internalId><instructions>Visit our pages: http:\/\/www.nguyenkim.com<\/instructions><label>Social Media<\/label><feedXmlString>&lt;feed&gt;&lt;entry&gt;&lt;id&gt;&lt;\/id&gt;&lt;title&gt;&lt;\/title&gt;&lt;content&gt;Like us on Facebook&lt;\/content&gt;&lt;thumbnailUrl&gt;\/\/assets.viewbix.com\/1de6383d6bc72baaad6b4eb974e6ef1d.png&lt;\/thumbnailUrl&gt;&lt;link&gt;https:\/\/www.facebook.com\/Online.NguyenKim&lt;\/link&gt;&lt;contentSnippet&gt;Like us on Facebook&lt;\/contentSnippet&gt;&lt;publishedDate&gt;&lt;\/publishedDate&gt;&lt;index&gt;0&lt;\/index&gt;&lt;\/entry&gt;&lt;entry&gt;&lt;id&gt;&lt;\/id&gt;&lt;title&gt;&lt;\/title&gt;&lt;content&gt;Follow us on Twitter&lt;\/content&gt;&lt;thumbnailUrl&gt;\/\/assets.viewbix.com\/2e196eb56ed1490704f340102675d173.png&lt;\/thumbnailUrl&gt;&lt;link&gt;&lt;\/link&gt;&lt;contentSnippet&gt;Follow us on Twitter&lt;\/contentSnippet&gt;&lt;publishedDate&gt;&lt;\/publishedDate&gt;&lt;index&gt;10&lt;\/index&gt;&lt;\/entry&gt;&lt;entry&gt;&lt;id&gt;&lt;\/id&gt;&lt;title&gt;&lt;\/title&gt;&lt;content&gt;Find us on Google+&lt;\/content&gt;&lt;thumbnailUrl&gt;\/\/assets.viewbix.com\/6b07a43d78830335538c9bcbda148686.png&lt;\/thumbnailUrl&gt;&lt;link&gt;https:\/\/plus.google.com\/+nguyenkim\/posts&lt;\/link&gt;&lt;contentSnippet&gt;Find us on Google+&lt;\/contentSnippet&gt;&lt;publishedDate&gt;&lt;\/publishedDate&gt;&lt;index&gt;20&lt;\/index&gt;&lt;\/entry&gt;&lt;entry&gt;&lt;id&gt;&lt;\/id&gt;&lt;title&gt;&lt;\/title&gt;&lt;content&gt;Subscribe to our YouTube&lt;\/content&gt;&lt;thumbnailUrl&gt;\/\/assets.viewbix.com\/62a53f54d2cfa317bb6fea3a289bc24d.png&lt;\/thumbnailUrl&gt;&lt;link&gt;http:\/\/www.youtube.com\/nguyenkimtv&lt;\/link&gt;&lt;contentSnippet&gt;Subscribe to our YouTube&lt;\/contentSnippet&gt;&lt;publishedDate&gt;&lt;\/publishedDate&gt;&lt;index&gt;30&lt;\/index&gt;&lt;\/entry&gt;&lt;entry&gt;&lt;id&gt;&lt;\/id&gt;&lt;title&gt;&lt;\/title&gt;&lt;content&gt;Follow us on Pinterest&lt;\/content&gt;&lt;thumbnailUrl&gt;\/\/assets.viewbix.com\/1abd078a32bc5583cb7b872659427bbb.png&lt;\/thumbnailUrl&gt;&lt;link&gt;&lt;\/link&gt;&lt;contentSnippet&gt;Follow us on Pinterest&lt;\/contentSnippet&gt;&lt;publishedDate&gt;&lt;\/publishedDate&gt;&lt;index&gt;50&lt;\/index&gt;&lt;\/entry&gt;&lt;entry&gt;&lt;id&gt;&lt;\/id&gt;&lt;title&gt;&lt;\/title&gt;&lt;content&gt;Connect on LinkedIn&lt;\/content&gt;&lt;thumbnailUrl&gt;\/\/assets.viewbix.com\/69895bbd05e17b5bd653b4722db92b6e.png&lt;\/thumbnailUrl&gt;&lt;link&gt;&lt;\/link&gt;&lt;contentSnippet&gt;Connect on LinkedIn&lt;\/contentSnippet&gt;&lt;publishedDate&gt;&lt;\/publishedDate&gt;&lt;index&gt;40&lt;\/index&gt;&lt;\/entry&gt;&lt;entry&gt;&lt;id&gt;&lt;\/id&gt;&lt;title&gt;&lt;\/title&gt;&lt;content&gt;Stumble Upon Us&lt;\/content&gt;&lt;thumbnailUrl&gt;\/\/assets.viewbix.com\/37680cb565f4fd922ddceaa8d69f051b.png&lt;\/thumbnailUrl&gt;&lt;link&gt;&lt;\/link&gt;&lt;contentSnippet&gt;Stumble Upon Us&lt;\/contentSnippet&gt;&lt;publishedDate&gt;&lt;\/publishedDate&gt;&lt;index&gt;5&lt;\/index&gt;&lt;\/entry&gt;&lt;entry&gt;&lt;id&gt;&lt;\/id&gt;&lt;title&gt;&lt;\/title&gt;&lt;content&gt;Visit us on Tumblr&lt;\/content&gt;&lt;thumbnailUrl&gt;\/\/assets.viewbix.com\/4180b4a15bd023c35810868f0d10ba0a.png&lt;\/thumbnailUrl&gt;&lt;link&gt;&lt;\/link&gt;&lt;contentSnippet&gt;Visit us on Tumblr&lt;\/contentSnippet&gt;&lt;publishedDate&gt;&lt;\/publishedDate&gt;&lt;index&gt;60&lt;\/index&gt;&lt;\/entry&gt;&lt;entry&gt;&lt;id&gt;&lt;\/id&gt;&lt;title&gt;&lt;\/title&gt;&lt;content&gt;Follow us on Instagram&lt;\/content&gt;&lt;thumbnailUrl&gt;\/\/assets.viewbix.com\/4018ecdc6da2cab9b6baae80569209a9.png&lt;\/thumbnailUrl&gt;&lt;link&gt;&lt;\/link&gt;&lt;contentSnippet&gt;Follow us on Instagram&lt;\/contentSnippet&gt;&lt;publishedDate&gt;&lt;\/publishedDate&gt;&lt;index&gt;45&lt;\/index&gt;&lt;\/entry&gt;&lt;\/feed&gt;<\/feedXmlString><icon>\/storage\/content\/icon\/16\/socialshare.png<\/icon><thumbnailWidth>32<\/thumbnailWidth><showInMenu>true<\/showInMenu><\/com.qoof.sdk.components.rss.SocialShare><\/applications>"
                    }],
                    "modules": null,
                    "name": "jolt",
                    "previewUrl": "",
                    "url": "https:\/\/origin-www.viewbix.com\/layouts\/jolt.swf?id=86bdea80-2497-4afb-9017-e9da70859c01"
                },
                "localization": {"resourcesUrl": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/getresource\/en-us\/86bdea8024974afb9017e9da70859c01"},
                "locked": false,
                "logger": {"url": "https:\/\/origin-origin-www.viewbix.com\/WidgetService.svc\/log"},
                "mailer": {
                    "contactUrl": "https:\/\/origin-origin-www.viewbix.com\/WidgetService.svc\/contact",
                    "url": "https:\/\/origin-origin-www.viewbix.com\/WidgetService.svc\/sendemail"
                },
                "search": {
                    "advancedSearchDefinitionUrl": null,
                    "onlyVideo": false,
                    "searchTemplateUrl": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/getsearchtemplate\/86bdea8024974afb9017e9da70859c01?",
                    "searchTokenProvider": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/getsearchtokenurl\/86bdea8024974afb9017e9da70859c01?",
                    "storesUrl": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/getstores\/86bdea8024974afb9017e9da70859c01?address={address}&radius={radius}&pid={pid}&",
                    "url": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/search\/86bdea8024974afb9017e9da70859c01?page={page}&pageSize={pageSize}&cat={categoryId}&terms={searchTerms}&onlyVideo={onlyVideo}&"
                },
                "skin": {
                    "borderThickness": "3",
                    "fontSwfUrl": null,
                    "imageSwfUrl": null,
                    "styles": null,
                    "url": "https:\/\/origin-www.viewbix.com\/com\/qoof\/widget\/skins\/ApricotSkin.swf?id=https:\/\/origin-www.viewbix.com"
                },
                "tracker": {
                    "backupUrl": "https:\/\/origin-www.viewbix.com\/WidgetService.svc\/track",
                    "customTrackers": [],
                    "distribution_network_id": "00000000-0000-0000-0000-000000000000",
                    "events": "",
                    "httpGetCookieUrl": "https:\/\/origin-origin-www.viewbix.com\/WidgetService.svc\/getcookie?a=e966381d-ffe4-4feb-87cb-89eaef899cb8&s={sessionId}&t={trackingId}",
                    "httpGetUrl": "https:\/\/origin-track.viewbix.com\/widgetservice.svc\/tracklog",
                    "level": "",
                    "url": "https:\/\/origin-origin-www.viewbix.com\/WidgetService.svc\/track"
                },
                "variations": {"variationCount": 1, "variationWeights": null}
            },
            "content": {
                "description": "",
                "id": "86bdea8024974afb9017e9da70859c01",
                "modules": null,
                "name": "",
                "playlistItems": [{
                    "depth": "0",
                    "description": null,
                    "id": "00000000-0000-0000-0000-000000000000",
                    "name": "",
                    "products": [{
                        "accountLogoUrl": null,
                        "accountName": null,
                        "availabilityDate": null,
                        "callToActionText": "Mua Ngay",
                        "callToActionUrl": "http:\/\/www.nguyenkim.com\/dien-thoai-samsung-galaxy-s6-edge-sm-g925-den.html",
                        "comments": null,
                        "contacts": null,
                        "description": "",
                        "documents": null,
                        "expirationDate": null,
                        "id": "00000000-0000-0000-0000-000000000000",
                        "images": null,
                        "isSearchResult": "true",
                        "livePersonChatUrl": null,
                        "lowestPrice": null,
                        "marketing_items": null,
                        "metadata_items": [],
                        "modules": null,
                        "numLeft": null,
                        "price": null,
                        "prices": null,
                        "retailPrice": null,
                        "salePrice": null,
                        "thumbnailUrl": "",
                        "thumbnailUrlPreferProductImage": null,
                        "title": "Samsung Galaxy S6 edge+ : Official Introduction",
                        "videos": null
                    }],
                    "video": {
                        "description": "",
                        "id": "00000000-0000-0000-0000-000000000000",
                        "name": "",
                        "thumbnailUrl": "\/\/assets.viewbix.com\/4dc78442-b3ce-446a-aaf7-92c3c452b4b2.jpg",
                        "url": "http:\/\/demo.easyvideo.vn\/samsung_s6e.mp4"
                    }
                }],
                "playlist_configuration": null
            },
            "memberId": "ffb8a5fd-6ea7-4ce6-bcc1-9c2b2254898d"
        });
    })
    app.get('/api/vast/:id', function (req, res) {
        var params = req.params
        var query = req.query;
        var opt = params;
        opt = _.extend(opt, query);
        var q1 = qs.stringify(query);
        q1 = q1.replace('&', '&amp;');
        var opt1 = _.extend(opt, {q: qs.stringify(opt), q1: q1});
        res.setHeader('content-type', 'application/xml; charset=utf-8');
        //console.log(opt1);
        res.render('app/vast', opt1);
    })
    app.get('/app/:ver/:actid', function (req, res) {
        res.setHeader('content-type', 'text/html; charset=utf-8');
        var ver = req.params.ver;
        var actid = req.params.actid;
        var rr = actid.split('_');
        if (rr.length != 3) {
            res.end('');
            return;
        }
        var appid = rr[0];
        if (appid && appid.length != 24) {
            res.end('');
            return;
        }
        var actionkey = 'action:' + appid;
        if (api_cache.has(actionkey)) {
            var item = api_cache.get(actionkey);
            res.render('app/' + item.type, {getAppConfigs: item});
        } else {
            actions_col.findById(appid, function (err, item) {
                if (err) {
                    res.end('');
                    return;
                }
                item.id = item._id + '_' + rr[2];
                item.internalId = item._id + '_' + rr[1];
                api_cache.set(actionkey, item);
                if (process.env['NODE_ENV'] == 'production')
                    res.renderMin('app/' + item.type, {getAppConfigs: item})
                else
                    res.render('app/' + item.type, {getAppConfigs: item});
            })
        }
    })
    app.get('/p/*', function (req, res) {
        var uu = req.url.replace("/p/", "");
        request(uu, function (error, response, body) {
            if (error) {
                return console.log('Error:', error);
            }

            if (!error && response.statusCode == 200) {
                var exp = /[^\s"]+\.(m3u8|ts|bin)[^\s"]+/g;
                body =
                    body.replace(exp, function (match) {
                        var ret = '';
                        var u_m3u8 = 'http://dp.gao.easyvideo.vn/p/';
                        var u_oth = 'http://sp.gao.easyvideo.vn/';
                        if (!/^http/.test(match)) {
                            if (/\.m3u8/.test(match))
                                ret = u_m3u8 + path.dirname(req.params[0]) + '/';
                            else
                                ret = u_oth + path.dirname(req.params[0]) + '/';
                        } else {
                            if (/\.m3u8/.test(match))
                                ret = u_m3u8;
                            else
                                ret = u_oth;
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

    app.get('/embed/:id', embed).post(not_supported).put(not_supported).delete(not_supported);
    app.get('/frame/:id', gen_frame).post(not_supported).put(not_supported).delete(not_supported);

    app.get('/', function (req, res) {
        res.send('api not supported');
    });
}
