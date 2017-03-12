/** Intellisense placeholder */

/**
* @fileoverview The Mraid plugin
*
*/
function loadScript(src, opt_callback) {
    if (opt_callback) {
        $.ajax({
            url: src,
            dataType: "script",
            success: opt_callback
        });
        //TODO: check if we can depend of jquery.  if not, change this out to using an XMLHttpRequest object in async mode.
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

defaultConfig = {
    "DEBUG": false,
    "MINIFIED": true,
    "LOCAL": false,
    "LAYOUT": '',
    "HOST": "http://www.viewbix.com/",
    "CONFIGURATIONS": {}
}

getConfig = function (config) {
    if (VBX_MRAID.debug) {
        defaultConfig.DEBUG = VBX_MRAID.debug;
    }
    if (VBX_MRAID.minified) {
        defaultConfig.MINIFIED = VBX_MRAID.minified;
    }
    if (VBX_MRAID.local) {
        defaultConfig.LOCAL = VBX_MRAID.local;
    }
    if (VBX_MRAID.host) {
        defaultConfig.HOST = VBX_MRAID.host;
    }
    if (VBX_MRAID.layout) {
        defaultConfig.LAYOUT = VBX_MRAID.layout;
    }
    if (VBX_MRAID.configurations) {
        defaultConfig.CONFIGURATIONS = VBX_MRAID.configurations;
    }
    return (defaultConfig[config]);
}

setup = function (mraid) {
    if (!VBX_MRAID.debug) {
        VBX_MRAID.debug = false;
    }
    if (!VBX_MRAID.local) {
        VBX_MRAID.local = false;
    }
    if (!VBX_MRAID.minified) {
        VBX_MRAID.minified = true;
    }
    if (!VBX_MRAID.host) {
        VBX_MRAID.host = 'http://www.viewbix.com/';
    }
    if (!VBX_MRAID.configurations) {
        VBX_MRAID.configurations = {};
    }

    var DEBUG = this.getConfig('DEBUG') || false;
    var LOCAL = this.getConfig('LOCAL') || false;
    var PLUGIN_HOST = this.getConfig('HOST') || '';
    if (DEBUG) {
        var LIBRARIES_BASE_PATH = PLUGIN_HOST + 'libraries/';
        CLOSURE_BASE_PATH = LIBRARIES_BASE_PATH + 'closure/goog/';
        CLOSURE_NO_DEPS = true;
        CLOSURE_IMPORT_SCRIPT = loadScript;

        loadScript(CLOSURE_BASE_PATH + 'base.js');
        loadScript(LIBRARIES_BASE_PATH + 'deps.js');
        goog.require('VBX.MraidApi');

        new VBX.MraidApi(mraid);

    } else {
        var MINIFIED = (this.getConfig('MINIFIED') === true);
        var PLUGIN_NAME = 'vbxmraidapi' + (MINIFIED ? '.min' : '') + '.js';

        loadScript('//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js');
        loadScript(PLUGIN_HOST + 'workspace/layouts/' + PLUGIN_NAME, function () {
            new VBX.MraidApi(mraid);
        });
    }
}

setup(mraid);




