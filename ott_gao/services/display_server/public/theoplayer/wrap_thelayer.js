/**
 * Created by baysao on 12/02/2016.
 */
var UglifyJS = require("uglify-js");
var jscrush = require("jscrush");
var _ = require('underscore');
var _s = require('underscore.string');
var fs = require('fs');

;(function () {

    var object = typeof exports != 'undefined' ? exports : this; // #8: web workers
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    function InvalidCharacterError(message) {
        this.message = message;
    }

    InvalidCharacterError.prototype = new Error;
    InvalidCharacterError.prototype.name = 'InvalidCharacterError';
    //console.log(object);
    // encoder
    // [https://gist.github.com/999166] by [https://github.com/nignag]
    object.btoa || (
        object.btoa = function (input) {
            var str = String(input);
            for (
                // initialize result and counter
                var block, charCode, idx = 0, map = chars, output = '';
                // if the next str index does not exist:
                //   change the mapping table to "="
                //   check if d has no fractional digits
                str.charAt(idx | 0) || (map = '=', idx % 1);
                // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
                output += map.charAt(63 & block >> 8 - idx % 1 * 8)
            ) {
                charCode = str.charCodeAt(idx += 3 / 4);
                if (charCode > 0xFF) {
                    throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                }
                block = block << 8 | charCode;
            }
            return output;
        });

    // decoder
    // [https://gist.github.com/1020396] by [https://github.com/atk]
    object.atob || (
        object.atob = function (input) {
            var str = String(input).replace(/=+$/, '');
            if (str.length % 4 == 1) {
                throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
            }
            for (
                // initialize result and counters
                var bc = 0, bs, buffer, idx = 0, output = '';
                // get next character
                buffer = str.charAt(idx++);
                // character found in table? initialize bit storage and add its ascii value;
                ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
                    // and if not first of each 4 characters,
                    // convert the first 8 bits to one ascii character
                bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
            ) {
                // try to find character in table (0-63, not found => -1)
                buffer = chars.indexOf(buffer);
            }
            return output;
        })
    var process_jscrush = function(v, f) {
        var ff = './' + v + '/o.theoplayer.' + f + 'js';
        var result = UglifyJS.minify(ff, {mangle:true, compress: {}});
        fs.writeFileSync('./' + v + '/theoplayer.' + f + 'js', jscrush(result.code));
    }
    var process = function(v, f){
        var ff = './' + v + '/o.theoplayer.' + f + 'js';
        console.log("process:" + ff);
        var result = UglifyJS.minify(ff, {mangle:true, compress: {sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true}});
        //var result = UglifyJS.minify(ff, {compress: {}});


        //var dd;
        var cc;
        cc = _s.replaceAll(result.code, "theoplayer.e.js", "gao1.js");
        cc = _s.replaceAll(cc, "theoplayer.js", "gao0.js");
        cc = _s.replaceAll(cc, "theoplayer.p.js", "gao2.js");
        cc = _s.replaceAll(cc, "theoplayer.d.js", "gao3.js");
        cc = _s.replaceAll(cc, "https://www.theoplayer.com", "http://gao.easyvideo.vn");
        cc = _s.replaceAll(cc, "http://www.theoplayer.com", "http://gao.easyvideo.vn");
        cc = _s.replaceAll(cc, "THEOplayer", "GAOplayer");
        cc = _s.replaceAll(cc, "THEOPLAYER", "GAOplayer");
        var aa = object.btoa(cc);
        var bb = fs.readFileSync('./wrap_theoplayer_decode_base64_jscrush.js',  'utf8');

        //switch(f){
        //    case 'p.':
        //    case 'd.':
        //    case 'e.':
        //    case '':
        //
        //        break;
        //    case 'loader.':
        //        cc = _s.replaceAll(result.code, "theoplayer.js", "gao.js");
        //        //bb = _s.replaceAll(bb, "theoplayer.js", "gao.js");
        //        break;
        //}
        //console.log('writeout:' + dd);
        fs.writeFileSync('./' + v + '/theoplayer.' + f + 'js', bb.replace(/CODE/, aa));
        //fs.writeFileSync('./' + v + '/theoplayer.' + f + 'js', cc);
    }
    var v = '1.6.14';
    process_jscrush(v, 'loader.');
    _.each(['loader.','', 'e.', 'p.', 'd.'], function(f){
        process(v,f);
    })

}());
