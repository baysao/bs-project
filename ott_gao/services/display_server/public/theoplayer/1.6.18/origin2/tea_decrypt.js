    var Tea = {};
    Tea.decrypt = function (ciphertext, password) {
        ciphertext = String(ciphertext);
        password = String(password);

        if (ciphertext.length == 0) return ('');

        //  v is n-word data vector; converted to array of longs from base64 string
        var v = Tea.strToLongs(Tea.base64Decode(ciphertext));
        //  k is 4-word key; simply convert first 16 chars of password as key
        var k = Tea.strToLongs(Tea.utf8Encode(password).slice(0, 16));
        var n = v.length;

        v = Tea.decode(v, k);

        var plaintext = Tea.longsToStr(v);

        // strip trailing null chars resulting from filling 4-char blocks:
        plaintext = plaintext.replace(/\0+$/, '');

        return Tea.utf8Decode(plaintext);
    };

    Tea.decode = function (v, k) {
        var n = v.length;

        var z = v[n - 1], y = v[0], delta = 0x9E3779B9;
        var mx, e, q = Math.floor(6 + 52 / n), sum = q * delta;

        while (sum != 0) {
            e = sum >>> 2 & 3;
            for (var p = n - 1; p >= 0; p--) {
                z = v[p > 0 ? p - 1 : n - 1];
                mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
                y = v[p] -= mx;
            }
            sum -= delta;
        }

        return v;
    };


    Tea.strToLongs = function (s) {
        // note chars must be within ISO-8859-1 (Unicode code-point <= U+00FF) to fit 4/long
        var l = new Array(Math.ceil(s.length / 4));
        for (var i = 0; i < l.length; i++) {
            // note little-endian encoding - endianness is irrelevant as long as it matches longsToStr()
            l[i] = s.charCodeAt(i * 4) + (s.charCodeAt(i * 4 + 1) << 8) +
                (s.charCodeAt(i * 4 + 2) << 16) + (s.charCodeAt(i * 4 + 3) << 24);
        }
        return l; // note running off the end of the string generates nulls since bitwise operators
    };            // treat NaN as 0


    Tea.longsToStr = function (l) {
        var a = new Array(l.length);
        for (var i = 0; i < l.length; i++) {
            a[i] = String.fromCharCode(l[i] & 0xFF, l[i] >>> 8 & 0xFF, l[i] >>> 16 & 0xFF, l[i] >>> 24 & 0xFF);
        }
        return a.join('');  // use Array.join() for better performance than repeated string appends
    };
    Tea.utf8Encode = function (s) {
        //return unescape( encodeURIComponent( this ) );
        return unescape(encodeURIComponent(s));
    };

    Tea.utf8Decode = function (s) {
        try {
            return decodeURIComponent(escape(s));
        } catch (e) {
            console.log('aa');
            return s; // invalid UTF-8? return as-is
        }
    }

    Tea.base64Decode = function (s) {
        if (typeof atob != 'undefined') return atob(s); // browser
        if (typeof Buffer != 'undefined') return new Buffer(s, 'base64').toString('utf8'); // Node.js
        throw new Error('No Base64 Decode');
    };

    var ss = require('fs').readFileSync('theoplayer.aa.js.enc.js');
var ss1 = Tea.decrypt(ss, 'f0Qp0LuJww');
    //console.log(ss1);