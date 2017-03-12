/** Intellisense placeholder */

/**
* @fileoverview The Vpaid plugin
*
*/
function loadScript(src, opt_callback) {
    if (opt_callback) {
        $.ajax({
            url: src,
            dataType: "script",
            success: opt_callback,
        });
    } else {
        //only use this in dev/debug mode
        var xhr = new XMLHttpRequest();
        xhr.open('GET', src, false);
        xhr.send('');
        var se = document.createElement('script');
        se.type = "text/javascript";
        se.text = xhr.responseText;
        document.getElementsByTagName('head')[0].appendChild(se);
    }
}

function QueryStringToJSON() {
    var search = location.search;
    if (search == '') {
        var script = document.scripts[document.scripts.length - 1];
        search = "?" + script.src.replace('?', '%3f');
    }
    var url = search.substr(1, search.indexOf('%3f') - 1);
    var params = search.substr(search.indexOf('%3f') + 3);
    var protocol = url.substr(0, url.indexOf('://'));
    var host = url.substr(url.indexOf('://') + 3, url.indexOf('/plugins') - protocol.length - 2);
    var pairs = params.slice().split('&');

    var result = {};
    pairs.forEach(function (pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    result.host = host;
    result.protocol = protocol;
    result.url = url;

    return JSON.parse(JSON.stringify(result));
}

var queryParams = QueryStringToJSON();



setup = function () {
    var playerId = this.queryParams['id'];
    var layoutName = this.queryParams['layout'];
    var adtype = this.queryParams['adtype'] || 'linear';
    var DEBUG = (this.queryParams['debug'] === 'true') || false;
    var local = (this.queryParams['local'] === 'true') || false;
    var PLUGIN_HOST = (this.queryParams['protocol'] || 'http') + '://' + (this.queryParams['host'] || '');
    if (DEBUG) {
        var LIBRARIES_BASE_PATH = PLUGIN_HOST + 'libraries/';
        CLOSURE_BASE_PATH = LIBRARIES_BASE_PATH + 'closure/goog/';
        CLOSURE_NO_DEPS = true;
        CLOSURE_IMPORT_SCRIPT = loadScript;
        loadScript(CLOSURE_BASE_PATH + 'base.js');
        loadScript(LIBRARIES_BASE_PATH + 'deps.js');
        goog.require('VBX.VpaidApi');

        return new VBX.VpaidApi(playerId, layoutName, PLUGIN_HOST, adtype, DEBUG, local);

    } else {
        var MINIFIED = (this.queryParams['minified'] != 'false');
        var PLUGIN_NAME = 'vbxvpaidapi' + (MINIFIED ? '.min' : '') + '.js';

        loadScript('//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js');
        loadScript(PLUGIN_HOST + 'workspace/layouts/' + PLUGIN_NAME);
        return new VBX.VpaidApi(playerId, layoutName, PLUGIN_HOST, adtype, DEBUG, local);
    }
}

getVPAIDAd = function () {
    //console.log("getVPAIDAd");
    return setup();
}





