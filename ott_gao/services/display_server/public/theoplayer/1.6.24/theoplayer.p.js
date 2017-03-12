//window.theoplayer = window.theoplayer || {};
//window.theoplayer.configuration = window.theoplayer.configuration || {};

//window.theoplayer.configuration.libraryLocation = window.theoplayer.configuration.libraryLocation || 'http://yourcdn.com/theoplayer/';
//window.theoplayer.configuration.styleSheetURI = window.theoplayer.configuration.styleSheetURI || 'http://yourcdn.com/theoplayer/style/theoplayer.css';

/*!
 THEOplayer

 Usage of this software is limited by the THEOplayer License
 The license is available at:
 http://www.theoplayer.com/license.html

 It is prohibited to reverse engineer, decompile, translate,
 disassemble, decipher, decrypt, or otherwise attempt to
 discover the source code of this software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.

 For more information, visit http://www.theoplayer.com or contact
 contact @ theoplayer . com

 THEOplayer is based on a patent pending technology developed by
 OpenTelly (http://www.opentelly.com).

 Version: 1.6.24
 Created: Thu Mar 31 2016 16:09:17 GMT+0200 (Romance Daylight Time)
 */

(function (self, window, document, navigator) {
    var _ = ["video", "objectFit", "ontouchstart", "", "application/vnd.apple.mpegURL", "video/mp4", 'audio/mp4; codecs="mp4a.40.34"', "audio/mpeg", 'video/mp4; codecs="avc1.4d401e"', "https://cdn.theoplayer.com/t", "https://cdn.theoplayer.com/latest/", "theoplayer.loader.js", "1ADD53F3", "format-mp3_", "format-mp4_", "format-m4s_", "format-mp4-initializer_", "format-m4s-and-initializer_", "PIW0031", "Hy", "message", "oy", "iC", "PIW0072", "PIW0082", "Gy", "PIW0078", "PIW0090", "za", "string", "0", "code", "info", "helpLink", "helpLinkText", "THEOplayer error: ", "LICENSE_INVALID", "The license for this player is invalid. Please contact THEOplayer using contact@theoplayer.com for additional information.", "https://www.theoplayer.com/", "theoplayer.com", "MANIFEST_NOT_FOUND", "Could not load the manifest file. Make sure the source is set correctly and that CORS support is enabled.", "https://www.theoplayer.com/documentation/cors.html", "SUBTITLE_NOT_FOUND", "Could not load the subtitle file. Make sure the source is set correctly and that CORS support is enabled.", "INVALID_HLS_MANIFEST", "The source of the player is an invalid HLS manifest.", "https://developer.apple.com/library/ios/technotes/tn2288/_index.html", "PLAYBACK_ISSUE", "There appears to be a playback issue.", "AUDIO_ISSUE", "There is an audio issue. Please contact THEOplayer using contact@theoplayer.com with the code below for additional information.", "BROWSER_SUPPORT_ISSUE", "Your browser doesn't support a feature. Try upgrading your browser or please contact THEOplayer using contact@theoplayer.com referring to the code below.", "INVALID_KEY", "There is an invalid key being decrypted. Please contact THEOplayer using contact@theoplayer.com with the code below for additional information.", "DECRYPTION_ERROR", "There is a decryption error. Please contact THEOplayer using contact@theoplayer.com with the code below for additional information.", "AD_BLOCK_DETECTED", "An ad blocker was detected. Please turn it off and refresh the page in order to watch this video.", "THEOPLAYER_NOT_INITIALIZED", "THEOplayer hasn't been initialized yet. Please check your configuration or wait.", "ERROR", "THEOplayer encountered an error. If this issue holds, please contact THEOplayer using contact@theoplayer.com.", "LCC1300", "play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,quality,mediaGroup,controller,controls,defaultMuted", "zj", "/", "+", "=", "undefined", "bb", "iV", "iLE", "iDV", "iIDV", "cCT", "cWL", "\\.", "*", "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", "^", "$", ".", "a", "AuUCP7lBxkCCLS1EP0Q=", "nvDKrEz0ia4GrEzK", "nvDKrEz0ia4GrEzGnp==", "nvDKrEz0ia4GrEzKnp==", "nvDKrEz0ia4GrEzXnp==", "qytW/NjOxXD+qyUFLRoVx0GWAgbRLR9VAa1Vqko=", "x0bVrNbTqg9HPuj1qkeVx09F", "blob:", "file:", "ms-appx:", "ms-appx-web:", "AuUCP7lBxkCCLJ==", "1ea107a1-9845-4c10-b167-eda33dd071aa", "746bfcb2-5db6-490d-9e6a-094d3da5c9b8", "iSDV", "nEpGtKQHnfQHno==", "AuUCP7lBxkCCLS1HrRIX", "sk", "Sb", "Rb", "Cb", "eb", "h.264", "mp3", "aac-lc", "he-aac", "numberOfKeyFrames", "unknown codec ", "URI", "length", "YOU CANNOT USE THIS ANY MOAR!!", "debug"], $ = ["setTimeout", "clearTimeout", "window", "Error", "Object", "Math", "parseInt", "parseFloat", "document", "clearInterval", "setInterval", "Uint8Array", "TypeError", "Worker", "navigator", "isNaN", "XMLHttpRequest", "SyntaxError", "WorkerGlobalScope", "createElement", "userAgent", "documentElement", "style", "match", "DocumentTouch", "msMaxTouchPoints", "chrome", "test", "vendor", "MediaSource", "WebKitMediaSource", "TextTrack", "fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled", "canPlayType", "isTypeSupported", "top", "self", "prototype", "apply", "slice", "call", "enumerable", "defineProperty", "frames", "length", "audio", "postMessage", "message", "name", "stack", "stringify", "addEventListener", "data", "indexOf", "push", "removeEventListener", "splice", "dispatchEvent", "bind", "type", "defaultPrevented", "URL", "createObjectURL", "webkitURL", "revokeObjectURL", "Blob", "BlobBuilder", "WebKitBlobBuilder", "MozBlobBuilder", "MSBlobBuilder", "append", "getBlob", "pow", "toString", "byte", "fromCharCode", "floor", "performance", "now", "constructor", "log", "theoplayer", "INVALID_LICENSE", "toLowerCase", "replace", "charAt", "toUpperCase", "join", "b", "parent", "location", "hostname", "pathname", "trim", "href", "protocol", "ancestorOrigins", "referrer", "configuration", "isEmbeddable", "concat", "Base64ArrayBuffer", "buffer", "round", "POSITIVE_INFINITY", "current", "max", "duration", "width", "height", "hasOwnProperty", "keys", "codec", "error", "console", "loggingEnabled", "arguments", "byteLength"];
    !function (e) {
        var t = e[$[0]], r = (e[$[1]], e[$[2]]), n = e[$[3]], i = e[$[4]], a = e[$[5]], o = (e[$[6]], e[$[7]]), u = e[$[8]], s = (e[$[9]], e[$[10]], e[$[11]]), c = (e[$[12]], e[$[13]], e[$[14]], e[$[15]], e[$[16]], e[$[17]], e[$[18]]), f = e, d = {
            ads: {},
            buffer: {},
            a: {},
            c: {},
            d: {},
            e: {},
            media: {},
            f: {},
            plugins: {},
            textTracks: {},
            g: {}
        }, l = function () {
            var e, t = f[$[8]] && u[$[19]](_[0]), n = navigator[$[20]], i = f[$[8]] && _[1] in u[$[21]][$[22]], a = !!n[$[23]](/windows phone (8|8\.1)/i), s = !!n[$[23]](/iPhone/i), c = !!(s || n[$[23]](/iPad/i) || n[$[23]](/iPod/i)) && !a, d = !!n[$[23]](/Android/i), l = a || c || d, p = !!(_[2] in f || f[$[24]] && document instanceof f[$[24]]) || !!navigator[$[25]], h = n[$[23]](/(mac\sos\sx)\s?([\w\s\.]+\w)*/i) || n[$[23]](/(macintosh|mac(?=_powerpc)\s)/i), U = !!n[$[23]](/Windows NT/i), m = !!f[$[26]] && /google/i[$[27]](navigator[$[28]]), g = !!n[$[23]](/Safari/i) && !n[$[23]](/Chrome/i) && !a, w = n[$[23]](/Firefox/i) && !n[$[23]](/Seamonkey/i), y = !!n[$[23]](/Edge\/\d+/i), v = !!n[$[23]](/Trident/i), E = !!n[$[23]](/Vivaldi/i), S = n[$[23]](/OPR\/(\d+\.\d+)/i) && o(n[$[23]](/OPR\/(\d+\.\d+)/i)[1]), R = h && S && 26 >= S, T = d || c || a, b = !!f[$[13]], I = !(!f[$[29]] && !f[$[30]]), B = !!f[$[31]], O = f[$[8]] && (u[$[32]] || u[$[33]] || u[$[34]] || u[$[35]]), L = n[$[23]](/Android ([0-9\.]+)/i), A = L ? o(L[1]) : 0, M = n[$[23]](/Windows NT ([0-9\.]+)/i), k = M ? o(M[1]) : 0, P = n[$[23]](/Firefox\/([0-9\.]+)/i), N = P ? o(P[1]) : 0, D = w && N >= 45, C = t && (_[3] !== t[$[36]](_[4]) || d && !w && A >= 4), F = t && _[3] !== t[$[36]](_[5]) && !R, x = I && !g && !v && !y && ((f[$[29]] || f[$[30]])[$[37]] ? (f[$[29]] || f[$[30]])[$[37]](_[6]) : t && _[3] !== t[$[36]](_[6])), W = I && !g && (x || ((f[$[29]] || f[$[30]])[$[37]] ? (f[$[29]] || f[$[30]])[$[37]](_[7]) : t && _[3] !== t[$[36]](_[7]))), H = I && !(E && h) && ((f[$[29]] || f[$[30]])[$[37]] ? (f[$[29]] || f[$[30]])[$[37]](_[8]) : F), z = g || v || y, j = !g, K = v && U && 6.1 >= k;
            try {
                e = r[$[38]] !== r[$[39]]
            } catch (V) {
                e = !0
            }
            return {
                h: 2,
                i: 2,
                j: 6,
                k: 16,
                l: 3,
                m: 1e4,
                n: .8,
                o: 60,
                q: 2,
                r: 8589934592,
                s: 9e4,
                t: _[9],
                u: _[10],
                v: _[11],
                w: 6e4,
                x: 10,
                y: 1e4,
                z: 1,
                A: _[12],
                B: e,
                C: i,
                D: .5,
                F: 22,
                G: a,
                H: c,
                I: h,
                J: l,
                K: p,
                L: m,
                M: g,
                N: w,
                O: y,
                P: T,
                Q: b,
                R: I,
                S: B,
                T: O,
                U: D,
                V: A,
                W: C,
                X: F,
                Y: W,
                Z: x,
                aa: H,
                ba: z,
                ca: K,
                da: j
            }
        }(), p = function () {
            var e = function () {
                this.ea = []
            };
            return e[$[40]].fa = function (e) {
                var t, r = this;
                return this.ea[e] ? (t = function (t) {
                    return r.ea[e][$[41]](this, t)
                }, t[$[40]] = r.ea[e][$[40]], new t(Array[$[40]][$[42]][$[43]](arguments, 1))) : null
            }, e[$[40]].ga = function (e, t) {
                this.ea[e] = t
            }, new e
        }(), h = function (e, t, r) {
            r[$[44]] = !0, i[$[45]](e, t, r)
        }, U = function (e, t, r) {
            i[$[45]](e, t, {ha: !1, enumerable: !0, value: r})
        };
        !function (e) {
            "use strict";
            var t = _[13], r = _[14], n = _[15], i = _[16], a = _[17], o = function (e) {
                var t, r, n;
                if (e && e[$[46]])for (n = e[$[46]], t = 0, r = n[$[47]]; r > t; t += 1)n[t] = E.jc(n[t])
            }, u = function (e) {
                return e[$[48]] && o(e[$[48]]), e[_[0]] && o(e[_[0]]), e
            }, s = function (t, r, n) {
                r = {}, n || (n = _[18]), e[$[49]]({
                    Cy: _[19],
                    Dy: t,
                    Fy: r[$[50]] || n,
                    BE: r[$[51]],
                    CE: r[$[52]],
                    DE: JSON[$[53]](r)
                })
            };
            e[$[54]](_[20], function (o) {
                var c, f, d, l = o[$[55]].ny, h = [], U = o[$[55]].ry, m = o[$[55]].ty, g = o[$[55]].xy, w = o[$[55]].vy, y = o[$[55]].qy, v = o[$[55]].py;
                if (!e.ua) {
                    if (_[21] === l) {
                        d = u(o[$[55]].sy), o[$[55]].sy = null;
                        try {
                            switch (y) {
                                case t:
                                    c = p.fa(_[22], U), R.EE(d, c);
                                    break;
                                case r:
                                    c = p.fa(_[22], U), S.FE(d, c);
                                    break;
                                case n:
                                    c = p.fa(_[22], U), S.GE(d, m, g, c);
                                    break;
                                case i:
                                    c = p.fa(_[22], U), S.HE(d, w, c);
                                    break;
                                case a:
                                    c = {
                                        Ay: p.fa(_[22], U), By: p.fa(_[22], U), ia: function (e) {
                                            return {Ay: c.Ay.ia(e), By: c.By.ia(e)}
                                        }
                                    }, S.HE(d, w, c.Ay), S.GE(d, m, g, c.By);
                                    break;
                                default:
                                    return s(v, {}, _[23])
                            }
                        } catch (E) {
                            return s(v, E, _[24])
                        }
                        try {
                            return f = c.ia(h), T({Cy: _[25], Dy: v, Ey: f}, h)
                        } catch (b) {
                            return s(v, b, _[26])
                        }
                    }
                    return s(v, {}, _[27])
                }
            }, !1), e[$[49]](_[28])
        }(e);
        var m = (function () {
            "use strict";
            var e = function () {
            }, t = function (e) {
                return this._c = this._c || {}, void 0 === this._c[e] && (this._c[e] = []), this._c[e]
            }, r = e[$[40]];
            return r[$[54]] = function (e, r) {
                var n = t[$[43]](this, e), i = n[$[56]](r);
                -1 === i && n[$[57]](r)
            }, r[$[58]] = function (e, r) {
                var n = t[$[43]](this, e), i = n[$[56]](r);
                r ? -1 !== i && n[$[59]](i, 1) : n[$[47]] = 0
            }, r._d = function () {
                this._c = null
            }, r[$[60]] = function (e, r) {
                var n, i;
                if (r)return m(this[$[60]][$[61]](this, e));
                for (_[29] == typeof e && (e = {type: e}), n = t[$[43]](this, e[$[62]])[$[42]](), i = 0; i < n[$[47]]; i += 1)n[i][$[43]](this, e);
                return !e[$[63]]
            }, e
        }(), function (e) {
            "use strict";
            return t(e, 0)
        });
        !function (e) {
            "use strict";
            d.g.Fe = function () {
                return e[$[64]] && e[$[64]][$[65]] || e[$[66]] && e[$[66]][$[65]] || e[$[65]]
            }, d.g[$[65]] = function (t) {
                return e[$[64]] && e[$[64]][$[65]] ? e[$[64]][$[65]](t) : e[$[66]] && e[$[66]][$[65]] ? e[$[66]][$[65]](t) : e[$[65]] ? e[$[65]](t) : null
            }, d.g[$[67]] = function (t) {
                return e[$[64]] && e[$[64]][$[67]] ? e[$[64]][$[67]](t) : e[$[66]] && e[$[66]][$[67]] ? e[$[66]][$[67]](t) : e[$[67]] ? e[$[67]](t) : void 0
            }, d.g.Ge = function () {
                return e[$[68]] && new e[$[68]] ? function (t, r) {
                    return new e[$[68]]([t], {type: r})
                } : function (t, r) {
                    var n, i = e[$[69]] || e[$[70]] || e[$[71]] || e[$[72]];
                    if (i)return n = new i, n[$[73]](t), n[$[74]](r)
                }
            }()
        }(e), function () {
            "use strict";
            var e = function (e) {
                var t = e / a[$[75]](2, 32);
                return [t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]
            }, t = function (e) {
                return [e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]
            }, r = function (e) {
                return [e >>> 8 & 255, 255 & e]
            }, n = function (e) {
                var t = e[$[76]](16);
                return t[$[47]] < 2 ? _[30] + t : t
            }, i = function (e, t, r) {
                if (r && t[$[77]] >= r)return void 0;
                var n = e.Aa ? e.Aa(t[$[77]]) : e[t[$[77]]];
                return t[$[77]] += 1, n
            }, o = function (e, t, r) {
                for (var n = 0; r > 0;)r -= 1, n = 256 * n + i(e, t);
                return n
            }, u = function (e, t) {
                return o(e, t, 2)
            }, s = function (e, t) {
                return o(e, t, 4)
            }, c = function (e, t) {
                var r = o(e, t, 4), n = o(e, t, 4);
                return 4294967296 * r + n
            }, f = function (e, t, r) {
                var n, a = i(e, t, r);
                return 0 === (128 & a) ? n = a : 192 === (224 & a) ? n = 64 * (31 & a) + (63 & i(e, t, r)) : 224 === (240 & a) ? n = 4096 * (15 & a) + 64 * (63 & i(e, t, r)) + (63 & i(e, t, r)) : 240 === (248 & a) && (n = 262144 * (7 & a) + 4096 * (63 & i(e, t, r)) + 64 * (63 & i(e, t, r)) + (63 & i(e, t, r))), n
            }, l = function (e, t, r) {
                var n = i(e, t, r);
                return n ? String[$[78]](n) : void 0
            }, p = function (e, t, r) {
                for (var n = _[3]; r > 0;)r -= 1, n += l(e, t);
                return n
            }, h = function (e, t, r) {
                for (var a = _[3]; r > 0;)r -= 1, a += n(i(e, t));
                return a
            }, U = function (e, t) {
                var r = [128, 64, 32, 16, 8, 4, 2, 1], n = a[$[79]](t.Ba / 8), i = e.Aa ? e.Aa(n) : e[n], o = 0 === (i & r[t.Ba % 8]) ? 0 : 1;
                return t.Ba += 1, o
            }, m = function (e, t, r) {
                for (var n = 0; r > 0;)r -= 1, n = 2 * n + U(e, t);
                return n
            }, g = function (e, t) {
                for (var r, n = 0; 0 === U(e, t) && 32 > n;)n += 1;
                return r = m(e, t, n) + a[$[75]](2, n) - 1
            }, w = function (e, t) {
                var r = g(e, t);
                return 1 & r ? a[$[79]]((r + 1) / 2) : -a[$[79]](r / 2)
            }, y = function (e, t) {
                return e[$[57]](t), e
            }, v = function (e, t, r, n) {
                var i = r || 0, a = n || t[$[47]], o = a - i, u = e[$[47]], s = u + o;
                for (e[$[47]] = s; a > i; i += 1, u += 1)e[u] = t[i];
                return e
            }, E = function (e, t, r) {
                return v(e, r(t))
            }, S = function (e, r) {
                return E(e, r, t)
            }, R = function (t, r) {
                return E(t, r, e)
            }, T = function (e, t) {
                return E(e, t, r)
            };
            d.g.Ca = U, d.g.Da = m, d.g.Ea = i, d.g.Fa = o, d.g.Ga = u, d.g.Ha = s, d.g.Ia = c, d.g.Ja = h, d.g.Ka = l, d.g.La = p, d.g.Ma = f, d.g.Na = g, d.g.Oa = w, d.g.Pa = e, d.g.Qa = t, d.g.Ra = r, d.g.Sa = y, d.g.Ta = v, d.g.Ua = T, d.g.Va = S, d.g.Wa = R
        }();
        var g = (function (e) {
            "use strict";
            return e[$[80]] && e[$[80]][$[81]] ? function () {
                return e[$[80]][$[81]]()
            } : function () {
                return Date[$[81]]()
            }
        }(e), function () {
            "use strict";
            var e = function (e, t) {
                U(this, _[31], e), U(this, _[32], t)
            }, t = e[$[40]];
            t[$[82]] = e, h(t, _[20], {
                get: function () {
                    return i[this[_[31]]] && i[this[_[31]]].Xa || void 0
                }
            }), h(t, _[33], {
                get: function () {
                    return i[this[_[31]]] && i[this[_[31]]].Ya || void 0
                }
            }), h(t, _[34], {
                get: function () {
                    return i[this[_[31]]] && i[this[_[31]]].Za || void 0
                }
            }), t[$[76]] = function () {
                return _[35] + this[_[20]]
            };
            var r, n = [{ab: _[36], Xa: _[37], Ya: _[38], Za: _[39]}, {ab: _[40], Xa: _[41], Ya: _[42]}, {
                ab: _[43],
                Xa: _[44],
                Ya: _[42]
            }, {ab: _[45], Xa: _[46], Ya: _[47]}, {ab: _[48], Xa: _[49]}, {ab: _[50], Xa: _[51]}, {
                ab: _[52],
                Xa: _[53]
            }, {ab: _[54], Xa: _[55]}, {ab: _[56], Xa: _[57]}, {ab: _[58], Xa: _[59]}, {
                ab: _[60],
                Xa: _[61]
            }, {ab: _[62], Xa: _[63]}], i = {};
            for (r = 0; r < n[$[47]]; r += 1)i[n[r].ab] = n[r];
            return e
        }()), w = function (e) {
            console[$[83]](new g(_[36], {code: _[64]})[_[20]]), e[$[84]][$[85]] = !0, e.ua = !0
        }, y = function () {
            "use strict";
            var e, t, r = _[3], n = _[65][$[86]]()[$[87]](/,/g, _[66]);
            for (e = 0; e < n[$[47]]; e += 1)t = n[$[88]](e), -1 === r[$[56]](t) && (r += t);
            for (r += _[67] + r[$[89]]() + _[68], e = 0; 64 >= e; e += 7) {
                for (t = e; t > 10;)t -= 10;
                r += t
            }
            return r += _[69], function (e) {
                var t, n, i, a, o, u, s, c, f, d = [];
                for (t = 0; t < e[$[47]]; t += 4)o = r[$[56]](e[$[88]](t)), u = r[$[56]](e[$[88]](t + 1)), s = r[$[56]](e[$[88]](t + 2)), c = r[$[56]](e[$[88]](t + 3)), f = o << 18 | u << 12 | s << 6 | c, n = f >>> 16 & 255, i = f >>> 8 & 255, a = 255 & f, d[t / 4] = String[$[78]](n, i, a), 64 === c && (d[t / 4] = String[$[78]](n, i)), 64 === s && (d[t / 4] = String[$[78]](n));
                return d[$[90]](_[3])
            }
        }(), v = function () {
            return !0
        };
        !function (t) {
            "use strict";
            {
                var n = (t[$[91]] || _[3], _[70] != typeof c && t instanceof WorkerGlobalScope), i = t[$[92]] && t[$[92]] !== t;
                t[$[92]] && t[$[38]] && t[$[92]] !== t[$[38]]
            }
            delete t[$[91]];
            var a = !1, o = t[$[93]][$[94]], u = t[$[93]][$[95]], s = !1, f = function (r) {
                var n = p.fa(_[71], e);
                if (n && n.cb(r), !s)switch (r) {
                    case _[72]:
                    case _[73]:
                        ;
                    case _[74]:
                    case _[75]:
                    case _[76]:
                    case _[77]:
                    default:
                        // w(t, r)
                }
            }, d = function (e, t) {
                if (t = y(t)[$[96]](), t === e)return !0;
                var r = /ip-range\((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(\*|25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(\*|25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(\*|25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\)/, n = t[$[23]](r), i = _[78], a = function (e) {
                    return _[79] === e ? _[80] : e
                };
                if (null !== n && 5 === n[$[47]]) {
                    var o = new RegExp(_[81] + n[1] + i + a(n[2]) + i + a(n[3]) + i + a(n[4]) + _[82]);
                    return null !== e[$[23]](o)
                }
                return t = _[83] + t, -1 !== e[$[56]](t, e[$[47]] - t[$[47]])
            }, l = function (e) {
                return e
            }, h = function (e) {
                var r = t[$[8]][$[19]](_[84]);
                return r[$[97]] = e, r[$[94]]
            }, U = l([_[85], _[86], _[87], _[88], _[89], _[90], _[91], _[91]]);
            !function (e) {
                var r, n, i = t[$[93]][$[98]];
                if (_[3] !== e) {
                    for (r = 0; r < U[$[47]]; r += 1)a = a || d(o, U[r]) || d(e, U[r]);
                    a || f(_[74])
                } else if (_[92] === i)a = !0; else if (_[93] === i || _[94] === i || _[95] === i) {
                    if (n = y(_[96]), _[97] === n)return a = !0, void 0;
                    if (_[98] === n)return a = !0, void 0;
                    a = !0, v = function (e) {
                        if (!e)return !0;
                        var t = !1, n = h(e);
                        for (r = 0; r < U[$[47]]; r += 1)t = t || d(n, U[r]);
                        return t || f(_[99]), t
                    }
                } else a = !1
            }(o), function () {
                var e = new Date, t = new Date(y(_[100]));
                (!+t || e > t) && (a = !1, f(_[73]))
            }(), function () {
                var e, a, o, u = t[$[93]] && t[$[93]][$[99]], s = t[$[8]] && t[$[8]][$[100]];
                if (!n && i && !(theoplayer && theoplayer[$[101]] && theoplayer[$[101]][$[102]])) {
                    if (u && u[$[47]] > 0) {
                        for (o = u[u[$[47]] - 1], e = h(o), a = 0; a < U[$[47]]; a += 1)if (d(e, U[a]))return
                    } else if (s && r[$[92]] === r[$[38]])for (e = h(s), a = 0; a < U[$[47]]; a += 1)if (d(e, U[a]))return;
                    f(_[75])
                }
            }(), function (e, r) {
                var i = y(_[101]), o = t[$[93]][$[98]];
                return _[3] === e ? (a = _[92] === o || _[93] === o || _[94] === o || _[95] === o ? !0 : !1, void 0) : (n && (a = a && (r === i || -1 !== r[$[56]](i, r[$[47]] - i[$[47]])), a || f(_[77])), void 0)
            }(o, u), a || f(_[72])
        }(e), function () {
            var e = function () {
            }, t = e[$[40]];
            t.Ua = function (e) {
                return this.Ta(d.g.Ra(e))
            }, t.Va = function (e) {
                return this.Ta(d.g.Qa(e))
            }, t.Wa = function (e) {
                return this.Ta(d.g.Pa(e))
            }, p.ga(_[102], e)
        }();
        var E = (function () {
            "use strict";
            var e = function (e) {
                return e.ia()
            }, t = function (e) {
                var t = p.fa(e.Nb);
                return t.jc(e), t
            };
            return {Sl: e, Tl: t}
        }(), function () {
            "use strict";
            var e = this, t = 0, r = [], n = {}, a = function (e) {
                r = r[$[103]](e.Rb), t += e.Sb
            }, o = function (e, n, i) {
                var a = i - n;
                a > 0 && (r[$[57]]({Tb: n, Ub: i, Vb: a, Wb: t, Xb: t + a, Yb: n - t, Zb: e}), t += a)
            }, u = function () {
                for (var e, n, i, a = new Array(t), o = r[$[47]], u = 0, s = 0; o > u; u += 1)for (e = r[u], n = e.Ub, i = e.Tb; n > i; i += 1, s += 1)a[s] = e.Zb[i];
                return a
            }, c = function (e) {
                for (var t, n = r[$[47]], i = 0; n > i; i += 1)if (t = r[i], t.Wb <= e && e < t.Xb)return t.Zb[e + t.Yb]
            }, f = function (e, t, n) {
                for (var i, a, o, u, s = _[3], c = r[$[47]], f = 0, l = d.g[$[104]].ac; c > f; f += 1)for (i = r[f], a = i.Ub, o = i.Tb; a > o; o += 1)switch (u = i.Zb[o], t) {
                    case 0:
                        s += l[u >> 2], n = (3 & u) << 4, t = 1;
                        break;
                    case 1:
                        s += l[n + (u >> 4)], n = (15 & u) << 2, t = 2;
                        break;
                    case 2:
                        s += l[n + (u >> 6)], s += l[63 & u], t = 0
                }
                return {data: e + s, bc: t, cc: n}
            }, l = function (e, t) {
                for (var n, i, a, o = r[$[47]], u = 0; o > u; u += 1)for (n = r[u], i = n.Ub, a = n.Tb; i > a; a += 1, t += 1)e[t] = n.Zb[a];
                return t
            }, p = function (e) {
                var r = new s(u());
                return e[$[57]](r[$[105]]), {dc: r, ec: t, fc: n}
            };
            e.gc = a, e.Aa = c, e.sb = o, e.hc = f, e.ic = l, e.ia = p, i[$[45]](e, _[103], {
                get: function () {
                    return t
                }, set: function (e) {
                    var n, i = r[$[47]] - 1, a = t - e;
                    if (!(e >= t)) {
                        if (0 === e)return r[$[47]] = 0, void 0;
                        for (t = e; i >= 0; i -= 1) {
                            if (n = r[i], a <= n.Vb)return n.Ub -= a, n.Vb -= a, n.Xb -= a, r[$[47]] !== i + 1 && (r[$[47]] = i + 1), void 0;
                            a -= n.Vb
                        }
                    }
                }
            }), i[$[45]](e, _[104], {
                get: function () {
                    return r
                }
            }), i[$[45]](e, _[105], {get: u}), i[$[45]](e, _[106], {
                get: function () {
                    return n
                }, set: function (e) {
                    n = e
                }
            })
        });
        E.jc = function (e) {
            var t = new E;
            return t.sb(e.dc, 0, e.ec), t.eb = e.fc, t
        };
        var S = function () {
            "use strict";
            var e = _[107], t = _[108], r = _[109], o = _[110], u = [0, 0, 0, 32, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 97, 118, 99, 49, 109, 112, 52, 49], s = [0, 0, 0, 28, 102, 116, 121, 112, 109, 112, 52, 50, 0, 0, 0, 0, 105, 115, 111, 109, 109, 112, 52, 50, 100, 97, 115, 104], c = [109, 100, 97, 116], f = [109, 111, 111, 118], p = [109, 118, 104, 100], h = [116, 114, 97, 107], U = [116, 107, 104, 100], m = [109, 118, 101, 120], g = [116, 114, 101, 120], w = 32, y = [101, 100, 116, 115], v = [101, 108, 115, 116], E = [109, 100, 105, 97], S = [109, 100, 104, 100], R = [99, 116, 116, 115], T = [0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0], b = [0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0], I = 45, B = [109, 105, 110, 102], O = [0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0], L = 16, A = [0, 0, 0, 20, 118, 109, 104, 100, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], M = 20, k = [0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1], P = 36, N = [115, 116, 98, 108], D = [115, 116, 115, 100], C = [97, 118, 99, 67], F = [101, 115, 100, 115], x = [115, 116, 115, 115], W = [115, 116, 116, 115], H = [115, 116, 115, 99], z = [115, 116, 115, 122], j = [115, 116, 99, 111], K = [112, 97, 115, 112], V = [97, 118, 99, 49], Y = [109, 112, 52, 97], G = [1, 0], q = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0], Q = 9e4, X = 1200, J = function (e, t) {
                var r, n = e.Eb || 0;
                return e.Gb ? e.Gb : (r = n > X ? n : 1 > n || e.Hc ? X : n * X, t ? a[$[106]](r) : r)
            }, Z = function (e) {
                var t, r = 0, n = function (e) {
                    var r = e[$[47]], n = 0;
                    for (t = 0; r > t; t += 1)n += e[t].Sb;
                    return n
                };
                return e[_[0]] && (r += n(e[_[0]][$[46]])), e[$[48]] && (r += n(e[$[48]][$[46]])), r
            }, et = function (e, t) {
                var r = {video: [], audio: []}, n = 8 + t, i = {
                    video: e[_[0]] && e[_[0]][$[46]] || [],
                    audio: e[$[48]] && e[$[48]][$[46]] || []
                }, a = {eb: {kb: Number[$[107]]}};
                for (i[_[0]].kB = 0, i[$[48]].kB = 0, i[_[0]][$[108]] = i[_[0]][0] || a, i[$[48]][$[108]] = i[$[48]][0] || a; i[_[0]].kB < i[_[0]][$[47]] || i[$[48]].kB < i[$[48]][$[47]];)i[_[0]][$[108]].eb.kb < i[$[48]][$[108]].eb.kb ? (d.g.Va(r[_[0]], n), n += i[_[0]][$[108]].Sb, i[_[0]].kB += 1, i[_[0]][$[108]] = i[_[0]][i[_[0]].kB] || a) : (d.g.Va(r[$[48]], n), n += i[$[48]][$[108]].Sb, i[$[48]].kB += 1, i[$[48]][$[108]] = i[$[48]][i[$[48]].kB] || a);
                return r
            }, tt = function (e, t, r) {
                var n, i = {eb: {kb: Number[$[107]]}}, a = 0, o = 0, u = t[_[0]] && t[_[0]][$[46]] || [], s = t[$[48]] && t[$[48]][$[46]] || [], f = u[$[47]], d = s[$[47]], l = u[a] || i, p = s[o] || i;
                for (e.Va(r), e.Ta(c); f > a || d > o;)l.eb.kb < p.eb.kb ? (n = l, a += 1, l = u[a] || i) : (n = p, o += 1, p = s[o] || i), e.hC(n)
            }, rt = function (e, t, r, n, i) {
                return r ? (i || 0) + a[$[79]](t * e || 0) : n ? a[$[106]](t * n || 0) : 0
            }, nt = function (e, t, r) {
                var n = a[$[109]](e[_[0]] && rt(e[_[0]][$[110]], Q, t, r, e[_[0]].ge), e[$[48]] && rt(e[$[48]][$[110]], Q, t, r, e[$[48]].ge));
                return n > a[$[75]](2, 32) - 1 ? 1 : 0
            }, it = function (e, t, r) {
                return 1 === nt(e, t, r) ? 120 : 108
            }, at = function (e, t, r, n) {
                var i, o = it(t, r, n), u = [0, 1, 0, 0], s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], c = 2;
                i = a[$[109]](t[_[0]] && rt(t[_[0]][$[110]], Q, r, n, t[_[0]].ge), t[$[48]] && rt(t[$[48]][$[110]], Q, r, n, t[$[48]].ge)), e.Va(o), e.Ta(p), 1 === nt(t, r, n) ? (e.Va(16777216), e.Wa(0), e.Wa(0), e.Va(Q), e.Wa(i)) : (e.Va(0), e.Va(0), e.Va(0), e.Va(Q), e.Va(i)), e.Ta(u), e.Ta(G), e.Ta(s), e.Ta(q), e.Va(0), e.Va(0), e.Va(0), e.Va(0), e.Va(0), e.Va(0), e.Va(c + 1)
            }, ot = function (e, t, r) {
                var n = rt(e[$[110]], Q, t, r, e.ge);
                return n > a[$[75]](2, 32) - 1 ? 1 : 0
            }, ut = function (e, t, r) {
                return 1 === ot(e, t, r) ? 104 : 92
            }, st = function (e, t, r, n, i, a) {
                var o = rt(t[$[110]], Q, n, a, t.ge), u = ut(t, n, a);
                e.Va(u), e.Ta(U), 1 === ot(t, n, a) ? (e.Va(16777231), e.Wa(0), e.Wa(0), e.Va(r), e.Va(0), e.Wa(o)) : (e.Va(15), e.Va(0), e.Va(0), e.Va(r), e.Va(0), e.Va(o)), e.Va(0), e.Va(0), e.Ua(0), e.Ua(i ? 0 : 1), e.Ta(i ? [0, 0] : G), e.Ta([0, 0]), e.Ta(q), i ? (e.Ua(t[$[111]] || 0), e.Ua(0), e.Ua(t[$[112]] || 0), e.Ua(0)) : (e.Va(0), e.Va(0))
            }, ct = function (e, t, r) {
                var n = J(e, !1), i = rt(e[$[110]], n, t, r);
                return i > a[$[75]](2, 32) - 1 ? 1 : 0
            }, ft = function (e, t, r) {
                return 1 === ct(e, t, r) ? 44 : 32
            }, _t = function (e, t, r, n) {
                var i = ft(t, r, n), o = J(t, !1), u = rt(t[$[110]], o, r, n);
                o = a[$[106]](o), e.Va(i), e.Ta(S), 1 === ct(t, r, n) ? (e.Va(16777216), e.Wa(0), e.Wa(0), e.Va(o), e.Wa(u)) : (e.Va(0), e.Va(0), e.Va(0), e.Va(o), e.Va(u)), e.Ta([85, 196]), e.Ta([0, 0])
            }, dt = function (e, t) {
                t ? e.Ta(T) : e.Ta(b)
            }, lt = function (e) {
                e.Ta(A)
            }, pt = function (e) {
                e.Ta(O)
            }, ht = function (e) {
                e.Ta(k)
            }, Ut = function (e) {
                var t, r;
                if (e[$[113]](_[111]))return e[_[111]];
                for (t = 0, r = 0; r < e[$[46]][$[47]]; r += 1)e[$[46]][r].eb.Dc && (t += 1);
                return e[_[111]] = t, t
            }, mt = function (e, t) {
                var r = e[_[0]] && 0 !== i[$[114]](e[_[0]])[$[47]], n = e[$[48]] && 0 !== i[$[114]](e[$[48]])[$[47]];
                return t ? 0 : 8 + (r ? w : 0) + (n ? w : 0)
            }, gt = function (e) {
                return e.hb ? e.hb[$[47]] + 12 : 0
            }, wt = function (e, t) {
                return t ? 110 + e.yc[$[47]] + gt(e) + (e.sc && e.tc ? 16 : 0) : 52 + gt(e)
            }, yt = function (e, t, r) {
                return r && t ? 16 + 4 * Ut(e) : 0
            }, vt = function (e, t, r) {
                return e.oe && t && r ? 16 + 8 * e[$[46]][$[47]] : 0
            }, Et = function (e, t) {
                return 20 + (t ? 4 * e[$[46]][$[47]] : 0)
            }, St = function (e, t) {
                return 16 + (t ? 4 * e[$[46]][$[47]] : 0)
            }, Rt = function (e, t, r) {
                return r ? 16 + (t ? 8 * e[$[46]][$[47]] : 0) : 16 + (t ? 8 : 0)
            }, Tt = function (e) {
                return 16 + (e ? 12 : 0)
            }, bt = function (e, t, r) {
                return 8 + wt(e, r) + yt(e, t, r) + vt(e, t, r) + Rt(e, t, r) + Tt(t) + Et(e, t) + St(e, t)
            }, It = function (e, t, r) {
                return 8 + (r ? M : L) + P + bt(e, t, r)
            }, Bt = function (e, t, r, n) {
                return 8 + ft(e, t, r) + I + It(e, t, n)
            }, Ot = function (e) {
                var t = a[$[79]](Q * e[$[110]] || 0), r = e.ge;
                return t > a[$[75]](2, 31) - 1 || r > a[$[75]](2, 31) - 1 ? 1 : 0
            }, Lt = function (e, t) {
                return t ? 1 === Ot(e) ? 24 + (0 !== e.ge ? 40 : 20) : 24 + (0 !== e.ge ? 24 : 12) : 0
            }, At = function (e, t, r, n) {
                return e && 0 !== i[$[114]](e)[$[47]] ? 8 + ut(e, t, r) + Bt(e, t, r, n) + Lt(e, t) : 0
            }, Mt = function (i) {
                if (i === e)return V;
                if (i === t)return Y;
                if (i === r || i === o)return Y;
                throw new n(_[112] + i)
            }, kt = function (e, t, r, n) {
                var i = wt(t, n), a = Mt(t[$[115]]), o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                e.Va(i), e.Ta(D), e.Va(0), e.Va(1), e.Va(i - 16), e.Ta(a), e.Va(0), e.Ua(0), e.Ua(1), a === V ? (e.Va(0), e.Va(0), e.Va(0), e.Va(0), e.Ua(t[$[111]] || 0), e.Ua(t[$[112]] || 0), e.Ua(72), e.Ua(0), e.Ua(72), e.Ua(0), e.Va(0), e.Ua(1), e.Ta(o), e.Ua(24), e.Ta([255, 255]), e.Va(8 + t.yc[$[47]]), e.Ta(C), e.Ta(t.yc)) : a === Y && (e.Va(0), e.Va(0), e.Ua(t.Lb), e.Ua(16), e.Ua(0), e.Ua(0), e.Ua(t.Gb), e.Ua(0)), t.sc && t.tc && (e.Va(16), e.Ta(K), e.Va(t.sc), e.Va(t.tc)), t.hb && (e.Va(gt(t)), e.Ta(F), e.Va(0), e.Ta(t.hb))
            }, Pt = function (e, t, r, n) {
                var i, a;
                if (n && r)for (i = yt(t, r, n), e.Va(i), e.Ta(x), e.Va(0), e.Va(Ut(t)), a = 0; a < t[$[46]][$[47]]; a += 1)t[$[46]][a].eb.Dc && e.Va(a + 1)
            }, Nt = function (e, t, r, n) {
                var i, o, u, s = J(t, !1), c = s / l.s;
                if (t.oe && r && n)for (i = vt(t, r, n), e.Va(i), e.Ta(R), e.Va(0), e.Va(t[$[46]][$[47]]), o = 0; o < t[$[46]][$[47]]; o += 1)u = t[$[46]][o].eb.pc, e.Va(1), e.Va(a[$[106]](u * c))
            }, Dt = function (e, t, r) {
                var n, i = Et(t, r);
                if (e.Va(i), e.Ta(z), e.Va(0), e.Va(0), e.Va(r ? t[$[46]][$[47]] : 0), r)for (n = 0; n < t[$[46]][$[47]]; n += 1)e.Va(t[$[46]][n].Sb)
            }, Ct = function (e, t, r) {
                var n = St(t, !!r);
                e.Va(n), e.Ta(j), e.Va(0), e.Va(r ? t[$[46]][$[47]] : 0), r && e.Ta(r)
            }, Ft = function (e, t, r) {
                e.Va(r ? 1 : 0), r && (e.Va(t[$[46]][$[47]]), e.Va(t.Hb))
            }, xt = function (e, t, r) {
                var n = J(t, !0), i = 0, o = r ? t[$[46]][$[47]] : 0;
                for (e.Va(o); o > i; i += 1)e.Va(1), e.Va(a[$[106]](t[$[46]][i].eb.Fc * n))
            }, Wt = function (e, t, r, n) {
                e.Va(Rt(t, r, n)), e.Ta(W), e.Va(0), n ? xt(e, t, r) : Ft(e, t, r)
            }, Ht = function (e, t) {
                e.Va(Tt(t)), e.Ta(H), e.Va(0), e.Va(t ? 1 : 0), t && (e.Va(1), e.Va(1), e.Va(1))
            }, zt = function (e, t, r, n, i) {
                var a = bt(t, !!n, i);
                e.Va(a), e.Ta(N), kt(e, t, r, i), Wt(e, t, !!n, i), Pt(e, t, !!n, i), Nt(e, t, !!n, i), Ht(e, !!n), Dt(e, t, !!n), Ct(e, t, n)
            }, jt = function (e, t, r, n, i) {
                var a = It(t, !!n, i);
                e.Va(a), e.Ta(B), i ? lt(e) : pt(e), ht(e), zt(e, t, r, n, i)
            }, Kt = function (e, t, r, n, i, a) {
                var o = Bt(t, !!n, a, i);
                e.Va(o), e.Ta(E), _t(e, t, !!n, a), dt(e, i), jt(e, t, r, n, i)
            }, Vt = function (e, t) {
                var r = Lt(t, !0), n = a[$[79]](Q * t[$[110]] || 0), i = Ot(t);
                e.Va(r), e.Ta(y), e.Va(r - 8), e.Ta(v), 1 === i ? e.Va(16777216) : e.Va(0), e.Va(0 !== t.ge ? 2 : 1), 0 !== t.ge && (1 === i ? (e.Wa(t.ge), e.Ta([255, 255, 255, 255, 255, 255, 255, 255])) : (e.Va(t.ge), e.Ta([255, 255, 255, 255])), e.Ua(1), e.Ua(0)), 1 === i ? (e.Wa(n), e.Wa(0)) : (e.Va(n), e.Va(0)), e.Ua(1), e.Ua(0)
            }, Yt = function (e, t) {
                e.Va(w), e.Ta(g), e.Va(0), e.Va(t), e.Va(1), e.Va(0), e.Va(0), e.Va(0)
            }, Gt = function (e, t) {
                e.Va(mt(t, !1)), e.Ta(m), t[_[0]] && 0 !== i[$[114]](t[_[0]])[$[47]] && Yt(e, 1), t[$[48]] && 0 !== i[$[114]](t[$[48]])[$[47]] && Yt(e, 2)
            }, qt = function (e, t, r, n, i, a) {
                var o = At(t, !!r, a, i);
                0 !== o && (e.Va(o), e.Ta(h), st(e, t, n, !!r, i, a), r && Vt(e, t), Kt(e, t, n, r, i, a))
            }, Qt = function (e, t, r) {
                var n = At(e[_[0]], t, r, !0), i = At(e[$[48]], t, r, !1);
                return 8 + it(e, t, r) + mt(e, t) + n + i
            }, Xt = function (e, t, r, n, i) {
                e.Va(r), e.Ta(f), at(e, t, !!n, i), n || Gt(e, t), qt(e, t[_[0]], n && n[_[0]], 1, !0, i), qt(e, t[$[48]], n && n[$[48]], 2, !1, i)
            }, Jt = function (e, t) {
                var r = Qt(e, !0), n = Z(e) + 8, i = u[$[47]] + r + n, a = u[$[47]] + r, o = et(e, a);
                return t.gC(i), t.Ta(u), Xt(t, e, r, o), tt(t, e, n), t
            }, Zt = function (e, t, r) {
                var n = Qt(e, !1, t), i = s[$[47]] + n;
                return r.gC(i), r.Ta(s), Xt(r, e, n, !1, t || 0), r
            }, $t = function () {
                var e = [0, 0, 0, 24, 115, 116, 121, 112, 109, 115, 100, 104, 0, 0, 0, 0, 109, 115, 100, 104, 109, 115, 105, 120], t = [115, 105, 100, 120], r = [109, 111, 111, 102], n = [109, 102, 104, 100], i = 16, o = [116, 114, 97, 102], u = [116, 102, 104, 100], s = 24, f = [116, 102, 100, 116], d = [116, 114, 117, 110], p = [115, 100, 116, 112], h = function (e, t) {
                    return t ? 20 + 16 * e[$[46]][$[47]] : 20 + 4 * e[$[46]][$[47]]
                }, U = function (e, t) {
                    return t ? 12 + e[$[46]][$[47]] : 0
                }, m = function (e, t) {
                    var r = J(e, !0), n = a[$[106]](t * r);
                    return n > a[$[75]](2, 32) - 1 ? 1 : 0
                }, g = function (e, t) {
                    return 1 === m(e, t) ? 20 : 16
                }, w = function (e, t, r) {
                    return e && e[$[46]] ? 8 + s + g(e, r) + h(e, t) + U(e, t) : 0
                }, y = function (e, t) {
                    return 8 + i + w(e[$[48]], !1, t) + w(e[_[0]], !0, t)
                }, v = function (e) {
                    var t, r = 0;
                    if (!e || !e[$[46]])return 0;
                    for (t = 0; t < e[$[46]][$[47]]; t += 1)r += e[$[46]][t].Sb;
                    return r
                }, E = function (e, t) {
                    var r = a[$[106]](t * Q);
                    return r > a[$[75]](2, 32) - 1 ? 1 : 0
                }, S = function (e, t) {
                    return 1 === E(e, t) ? 52 : 44
                }, R = function (e, r, n, i) {
                    var o = a[$[109]]((r[_[0]] && r[_[0]].ge || 0) + a[$[79]](Q * (r[_[0]] && r[_[0]][$[110]]) || 0), (r[$[48]] && r[$[48]].ge || 0) + a[$[79]](Q * (r[$[48]] && r[$[48]][$[110]]) || 0)), u = a[$[106]](i * Q);
                    e.Va(n), e.Ta(t), 1 === E(r, i) ? (e.Va(16777216), e.Va(1), e.Va(Q), e.Wa(u), e.Wa(0)) : (e.Va(0), e.Va(1), e.Va(Q), e.Va(u), e.Va(0)), e.Ua(0), e.Ua(1), e.Va(y(r, i) + v(r[_[0]]) + v(r[$[48]]) + 8), e.Va(o), e.Ta([144, 0, 0, 0])
                }, T = function (e, t) {
                    e.Va(i), e.Ta(n), e.Va(0), e.Va(t)
                }, b = function (e, t, r, n) {
                    var i = J(t, !0), o = n ? a[$[106]](i * (t.Fb || 0)) : t.Hb;
                    e.Va(s), e.Ta(u), e.Va(40), e.Va(r), e.Va(o), e.Ta(n ? [0, 1, 0, 0] : [2, 0, 0, 0])
                }, I = function (e, t, r) {
                    var n = J(t, !0), i = a[$[106]](r * n);
                    e.Va(g(t, r)), e.Ta(f), 1 === m(t, r) ? (e.Va(16777216), e.Wa(i)) : (e.Va(0), e.Va(i))
                }, B = function (e, t, r, n) {
                    var i, a = v(t[_[0]]), o = y(t, n) + 8 + a;
                    for (e.Va(h(r, !1)), e.Ta(d), e.Ta([0, 0, 2, 1]), e.Va(r[$[46]][$[47]]), e.Va(o), i = 0; i < r[$[46]][$[47]]; i += 1)e.Va(r[$[46]][i].Sb)
                }, O = function (e, t, r, n) {
                    var i, o, u = y(t, n) + 8, s = J(r, !1), c = s / l.s;
                    for (e.Va(h(r, !0)), e.Ta(d), e.Ta([0, 0, 15, 1]), e.Va(r[$[46]][$[47]]), e.Va(u), i = 0; i < r[$[46]][$[47]]; i += 1)o = r[$[46]][i].eb.pc, e.Va(a[$[106]](r[$[46]][i].eb.Fc * s)), e.Va(r[$[46]][i].Sb), e.Ta(r[$[46]][i].eb.Dc ? [2, 0, 0, 0] : [0, 1, 0, 0]), e.Va(a[$[106]](o * c))
                }, L = function (e, t, r, n, i) {
                    n ? O(e, t, r, i) : B(e, t, r, i)
                }, A = function (e, t, r, n) {
                    var i;
                    if (n)for (e.Va(U(r, n)), e.Ta(p), e.Ta([0, 0, 0, 0]), i = 0; i < r[$[46]][$[47]]; i += 1)r[$[46]][i].eb.Dc ? e.Sa(32) : e.Sa(16)
                }, M = function (e, t, r, n, i, a) {
                    r && (e.Va(w(r, i, a)), e.Ta(o), b(e, r, n, i), I(e, r, a), L(e, t, r, i, a), A(e, t, r, i))
                }, k = function (e, t, n, i, a) {
                    e.Va(n), e.Ta(r), T(e, i), M(e, t, t[_[0]], 1, !0, a), M(e, t, t[$[48]], 2, !1, a)
                }, P = function (e, t, r) {
                    var n = 0, i = t[_[0]] && t[_[0]][$[46]] || t[$[48]] && t[$[48]][$[46]] || [], a = i[$[47]], o = !!t[_[0]];
                    for (e.Va(r), e.Ta(c); a > n;)e.hC(i[n]), i[n] = null, n += 1, n === a && t[$[48]] && o && (o = !1, i = t[$[48]][$[46]], a = i[$[47]], n = 0)
                };
                return function (t, r, n, i) {
                    var a = S(t, n), o = y(t, n), u = Z(t) + 8, s = e[$[47]] + a + o + u;
                    return i.gC(s), i.Ta(e), R(i, t, a, n), k(i, t, o, r, n), P(i, t, u), i
                }
            }();
            return {FE: Jt, HE: Zt, GE: $t}
        }(), R = function () {
            var e = function (e) {
                var t = e[$[47]], r = 0;
                for (index = 0; t > index; index += 1)r += e[index].Sb;
                return r
            }, t = function (t) {
                var r = 0;
                return t[$[48]] && (r += e(t[$[48]][$[46]])), r
            };
            return {
                EE: function (e, r) {
                    r.gC(t(e));
                    for (var n = 0, i = e[$[48]] && e[$[48]][$[46]] || [], a = i[$[47]]; a > n;)r.hC(i[n]), n += 1
                }
            }
        }();
        !function () {
            var e = function (e) {
                this.xd = e
            }, t = e[$[40]] = p.fa(_[102]);
            t[$[82]] = e;
            var r = function (e, t, r) {
                var n = this.eC, i = this.Cb;
                for (t = t || 0, r = r || e[$[47]]; r > t; t += 1, n += 1)i[n] = e[t];
                this.eC = n
            };
            t.xd = null, t.Cb = null, t.eC = 0, t.fC = {}, t.gC = function (e) {
                this.Cb = new s(e), this.eC = 0
            }, t.Sa = function (e) {
                this.Cb && (this.Cb[this.eC] = e, this.eC += 1)
            }, t.Ta = function (e, t, n) {
                this.Cb && r[$[43]](this, e, t, n)
            }, t.hC = function (e) {
                this.eC = e.ic(this.Cb, this.eC)
            }, t.Eu = function (e) {
                delete this.fC[e], d.g[$[67]](e)
            }, t.ia = function (e) {
                return e[$[57]](this.Cb[$[105]]), {Cb: this.Cb, xd: this.xd, eC: this.eC, Nb: _[22]}
            }, t.jc = function (e) {
                this.Cb = e.Cb, this.xd = e.xd, this.eC = e.eC
            }, i[$[45]](t, _[113], {
                get: function () {
                    var e = d.g.Ge(this.Cb, this.xd), t = d.g[$[65]](e);
                    return this.fC[t] = e, t
                }
            }), i[$[45]](t, _[114], {
                get: function () {
                    return console[$[116]](_[115]), this.eC
                }
            }), p.ga(_[22], e)
        }();
        var T = (function (e) {
            "use strict";
            var t = _[70] != typeof c && e instanceof WorkerGlobalScope, r = function () {
            };
            if (t)return e[$[117]] && e[$[117]][$[83]] ? function () {
                e[$[84]] && e[$[84]][$[101]] && e[$[84]][$[101]][$[118]] && console[$[83]][$[41]](console[$[119]])
            } : e[$[49]] ? function () {
                if (e[$[84]] && e[$[84]][$[101]] && e[$[84]][$[101]][$[118]])try {
                    e[$[49]]({type: _[116], data: arguments})
                } catch (t) {
                    e[$[49]]({type: _[116], data: JSON[$[53]](arguments)})
                }
            } : r;
            if (e[$[84]] && e[$[84]][$[101]] && e[$[84]][$[101]][$[118]] && e[$[117]] && e[$[117]][$[83]])try {
                return e[$[117]][$[83]][$[61]](console)
            } catch (n) {
                return function () {
                    console[$[83]](JSON[$[53]](arguments))
                }
            }
            return r
        }(e), function (e) {
            "use strict";
            var t = void 0, r = function () {
                var t = new s(1);
                try {
                    return e[$[49]](t, [t[$[105]]]), 0 === t[$[120]]
                } catch (r) {
                    return !1
                }
            };
            return function (n, i) {
                return void 0 === t && (t = r()), i && t ? e[$[49]](n, i) : e[$[49]](n)
            }
        }(e))
    }(self);
}(self, self.window, self.document, self.navigator));