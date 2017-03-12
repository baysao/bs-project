/**
 * Created by baysao on 12/02/2016.
 */
var UglifyJS = require("uglify-js");
var jscrush = require("jscrush");
var _ = require('underscore');
var _s = require('underscore.string');
var fs = require('fs');
var crunchme = require('crunchme');
var pako = fs.readFileSync('./pako_inflate.jscrush.min.js', 'utf8');
var pack_base64 = fs.readFileSync('./atob.jscrush.min.js', 'utf8');
var minit = function (s) {
    var result = UglifyJS.minify(s, {
        mangle: true, compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true
        }, fromString: true
    });
    return jscrush(result.code);
    //return result.code;
}
var crunit = function (ff, f, inc) {
    var s = fs.readFileSync(ff, 'utf8');
    var result = UglifyJS.minify(s, {
        mangle: true, compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true
        }, fromString: true
    });
    var ss = crunchme(result.code, ['deflate']);
    if (ff) {
        //if (inc) {
            var pako = fs.readFileSync('./pako_inflate.jscrush.min.js', 'utf8');
            var pack_base64 = fs.readFileSync('./atob.jscrush.min.js', 'utf8');
            fs.writeFileSync(f, '(function(){' + pako + ';' + pack_base64 + ';' + ss + ';})();');
        //} else
        //    fs.writeFileSync(f, ss);
        return;
    } else
        return ss;
}

//crunit('./o.piwik.js', '/home/baysao/Project/test/chintracker.js');
//crunit('./o.gaotracker.js', './gaotracker.js');



//crunit('../public/workspace/layouts/o.vbxvpaidapi.js', '../public/workspace/layouts/vbxvpaidapi.min.js');
//crunit('../public/videojs/o.vjs.youtube.js', '../public/videojs/vjs.youtube.js');
//crunit('../videojs/o.vjs.novideo.js', '../videojs/vjs.novideo.js');
//crunit('../public/videojs/o.video.js', '../public/videojs/video.js');

//crunit('../public/scripts/gaocore.js', '../public/scripts/gaocore.min.js');
//crunit('../public/videojs/o.videojs.js', '../public/videojs/videojs.min.js');

//process.exit(0);

var vbxver = 191;
//crunit('../public/layouts/html5/' + vbxver + '/o.vbxlayout.js', '../public/layouts/html5/' + vbxver + '/vbxlayout.js');
//crunit('../public/layouts/html5/' + vbxver + '/o.vbxvpaidad.js', '../public/layouts/html5/' + vbxver + '/vbxvpaidad.js');
//crunit('../public/app/' + vbxver + '/o.vbxapp.js', '../public/app/' + vbxver + '/vbxapp.js', true);
//process.exit(0);


//var pako = minit(fs.readFileSync('./pako_inflate.min.js', 'utf8'));
//var pako = fs.readFileSync('./pako_inflate.jscrush.min.js', 'utf8');
//var pack_base64 = minit(fs.readFileSync('./atob.min.js', 'utf8'));
//var pack_base64 = fs.readFileSync('./atob.jscrush.min.js', 'utf8');
//var loadscript = fs.readFileSync('./loadscript.js', 'utf8');
//fs.writeFileSync('./pako_inflate.jscrush.js', pako);
//fs.writeFileSync('./atob.jscrush.js', pack_base64);

//fs.writeFileSync('../layouts/html5/175/vbxlayout.js', pako + '\n' + pack_base64 + '\n' + vbxlayout);
var processfile = function (v, f) {
    var ff = '../public/theoplayer/' + v + '/o.theoplayer.' + f + 'js';
    console.log("process:" + ff);
    var result = UglifyJS.minify(ff, {
        mangle: true, compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true
        }
    });
    //var dd;
    if (f == 'loader.') {
        cc = _s.replaceAll(result.code, "theoplayer.js", "gao.js");
        //var cc1 = minit(cc, 'utf8');
        var aa = crunchme(cc, ['deflate']);
        //var aa1 = loadscript.replace('CODE', aa);

        //fs.writeFileSync('../public/theoplayer/' + v + '/theoplayer.' + f + 'js', aa);
        var aa1 = '(function(){' + pako + ';' + pack_base64 + ';' + aa + '})();';
        fs.writeFileSync('../public/theoplayer/' + v + '/theoplayer.' + f + 'js', aa1);
    } else {
        var cc;
        cc = _s.replaceAll(result.code, "theoplayer.e.js", "gao1.js");
        cc = _s.replaceAll(cc, "theoplayer.js", "gao0.js");
        cc = _s.replaceAll(cc, "theoplayer.p.js", "gao2.js");
        cc = _s.replaceAll(cc, "theoplayer.d.js", "gao3.js");
        cc = _s.replaceAll(cc, "https://www.theoplayer.com", "http://gao.easyvideo.vn");
        cc = _s.replaceAll(cc, "http://www.theoplayer.com", "http://gao.easyvideo.vn");
        cc = _s.replaceAll(cc, "THEOplayer", "GAOplayer");
        cc = _s.replaceAll(cc, "THEOPLAYER", "GAOplayer");
        var aa = crunchme(cc, ['deflate']);
        //fs.writeFileSync('../public/theoplayer/' + v + '/theoplayer.' + f + 'js', aa);
        var aa1 = '(function(){' + pako + ';' + pack_base64 + ';' + aa + '})();';
        fs.writeFileSync('../public/theoplayer/' + v + '/theoplayer.' + f + 'js', aa1);
    }
}
var v = '1.6.18';
_.each([
    'loader.',
    '',
    'e.', 'p.'
], function (f) {
    processfile(v, f);
})
