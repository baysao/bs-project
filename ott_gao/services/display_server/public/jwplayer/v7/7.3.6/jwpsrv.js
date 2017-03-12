!function (a) {
    function b(d) {
        if (c[d])return c[d].exports;
        var e = c[d] = {exports: {}, id: d, loaded: !1};
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }

    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}([function (a, b, c) {
    a.exports = c(1)
}, function (a, b, c) {
    function d() {
        var a, b;
        if (navigator.plugins && "object" == typeof navigator.plugins["Shockwave Flash"]) {
            if (b = navigator.plugins["Shockwave Flash"].description)return b
        } else if ("undefined" != typeof window.ActiveXObject)try {
            if (a = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"), a && (b = a.GetVariable("$version")))return b
        } catch (c) {
        }
        return ""
    }

    var e = c(2), f = c(5), g = c(3), h = c(4), i = c(6), j = c(7), k = function (a, b) {
        function c() {
            var a = p().preload;
            return ib[a] || 0
        }

        function d() {
            return gb[Cb] || 0
        }

        function k() {
            var b = g._.some(p().tracks, function (a) {
                var b = a.type;
                return "thumbnails" !== b && "chapters" !== b
            });
            if (b)return 1;
            var c = a.getCaptionsList();
            return c.length > 1 ? 2 : 0
        }

        function m() {
            var a = p(), b = a.sources[0], c = b.type;
            if (!c) {
                var d = b.file;
                c = g.extension(d)
            }
            return c
        }

        function n() {
            var a = p(), b = a.tracks;
            return g._.some(b, function (a) {
                return "thumbnails" === a.kind
            })
        }

        function o() {
            return hb[Ab] || 0
        }

        function p(b) {
            try {
                return a.getPlaylistItem(b)
            } catch (c) {
            }
            return b = b || fb, this.getConfig().playlist[b] || null
        }

        function q() {
            return !!a.getConfig().autostart
        }

        function r() {
            return a.getAdBlock ? a.getAdBlock() : -1
        }

        function s(b) {
            return ab || bb.calculate(), [Ua(U, tb, 21), Ua(V, q(), 11), Ua(W, db, 21), Ua(ma, eb, 28), Ua(na, Ya, 28), Ua(fa, !0, 10), Ua(_, ab.bucket, 21), Ua(ba, ab.width, 21), Ua(ca, ab.height, 21), Ua(Oa, a.getVolume(), 20), Ua(Ma, a.getMute(), 28), Ua(Na, xb.getViewablePercentage(ab), 30), Ua(La, xb.getPosition(), 31), Ua(ga, Za || G(b), 101), Ua(Y, F(b), 20), Ua(ia, r(), 100)]
        }

        function t(a) {
            return [Ua(X, E(a), 100)].concat(s(a))
        }

        function u(a, b) {
            return [Ua(ea, b, 23)].concat(t(a))
        }

        function v(a) {
            Ab = a.playReason || "", I()
        }

        function w(b) {
            a.off("beforePlay", v), Za = G(b.item), Za && a.once("beforePlay", v), x(), Ya = K(12), fb = b.index, Lb = Mb = !1, Cb = null
        }

        function x() {
            yb = {}, zb = !1, Bb = 0
        }

        function y(b) {
            return function (c) {
                if (!Kb) {
                    var d = yb[b];
                    if (b === Fb) {
                        c = c.metadata || c;
                        var e = c.segment;
                        e && (Lb = !0, Mb = e.encryption);
                        var f = c.drm;
                        if (f && (Cb = f), d && (c.width = c.width || d.width, c.height = c.height || d.height, c.duration = c.duration || d.duration), (100 === c.duration || 0 === c.duration) && 0 === c.width && 0 === c.height)return
                    }
                    if (yb[b] = c, b === Eb && (d || (Ib = 0), Jb = a.getPosition()), yb[Eb] && yb[Fb] && yb[Gb] && yb[Hb]) {
                        var g = z();
                        "flash_adaptive" === g ? !zb && Lb && (zb = !0, Lb = !1, L(g)) : zb || (zb = !0, L(g))
                    }
                }
            }
        }

        function z() {
            if (g._.isFunction(a.getProvider)) {
                var b = a.getProvider();
                return b ? b.name : ""
            }
            return ""
        }

        function A() {
            var b = a.getDuration();
            if (0 >= b) {
                var c = yb[Fb];
                c && (b = c.duration)
            }
            return 0 | b
        }

        function B(a) {
            return a = 0 | a, 0 >= a || a === 1 / 0 ? 0 : 30 > a ? 1 : 60 > a ? 4 : 180 > a ? 8 : 300 > a ? 16 : 32
        }

        function C(a) {
            return a = 0 | a, 0 >= a || a === 1 / 0 ? 0 : 15 > a ? 1 : 300 >= a ? 2 : 1200 >= a ? 3 : 4
        }

        function D() {
            Jb = a.getPosition(), Bb = 0
        }

        function E(a) {
            var b;
            if (!a)return null;
            var c = a.sources;
            if (c) {
                for (var d = [], e = c.length; e--;)c[e].file && d.push(c[e].file);
                d.sort(), b = d[0]
            } else b = a.file;
            return g.getAbsolutePath(b)
        }

        function F(a) {
            return a ? a.title : null
        }

        function G(a) {
            var b = a || p();
            if (!b)return null;
            var c = /^[a-zA-Z0-9]{8}$/, d = b.mediaid;
            return c.test(d) ? d : (d = g.getMediaId(b.file), c.test(d) ? d : null)
        }

        function H(b) {
            if (!b)return null;
            var c = 1, d = 2, e = 3, f = 4, h = 5, i = 6, j = 0, k = yb[Gb];
            if (k && k.levels && k.levels.length) {
                var l = k.levels[0];
                if (l && "auto" === ("" + l.label).toLowerCase())return h
            }
            var m, n = b.sources;
            if (m = n[0].type, g.hasClass(a.getContainer(), "jw-flag-audio-player"))return i;
            var o = yb[Fb] || {}, p = 0 | o.width, q = 0 | o.height;
            return 0 === p && 0 === q ? "rtmp" === m ? i : j : 320 >= p ? c : 640 >= p ? d : 1280 >= p ? e : f
        }

        function I() {
            var a = z();
            Db.track($a, T, [Ua(la, a, 21), Ua(va, o(), 22)].concat(t(p())))
        }

        function J(b, d) {
            b = b || p();
            var e = !a.getControls(), f = -1;
            d && d.setupTime && (f = d.setupTime), bb.calculate(), Db.track($a, Q, [Ua(ha, l(), 22), Ua(ja, f, 24), Ua(oa, jb, 22), Ua(Ja, nb, 22), Ua(pa, lb, 22), Ua(qa, ob, 23), Ua(ra, pb, 23), Ua(sa, mb, 22), Ua(Ba, c(), 22), Ua(Ka, Xa.pad, 22), Ua(ta, qb, 23), Ua(ua, rb, 23), Ua(Ga, sb, 21), Ua(Ha, kb, 22), Ua(Ia, e, 24)].concat(t(b)))
        }

        function K(a) {
            return new Array(a + 1).join((Math.random().toString(36) + "00000000000000000").slice(2, 18)).slice(0, a)
        }

        function L(b) {
            var c = A(), e = p(), f = -1;
            "function" == typeof a.qoe && (f = a.qoe().firstFrame);
            var g = m(), h = n(), i = k(), j = d() || Mb;
            bb.calculate(), Db.track($a, R, [Ua(aa, H(e), 21), Ua(da, C(c), 22), Ua(wa, c, 22), Ua(xa, g, 22), Ua(Fa, a.getPlaylist().length, 22), Ua(ya, h, 23), Ua(za, i, 23), Ua(Aa, j, 23), Ua(ka, f, 23), Ua(la, b, 24), Ua(va, o(), 25)].concat(u(e, B(c))).concat(N()))
        }

        function M(b, c, d) {
            if (Za) {
                var e = c + .5 | 0;
                e > 0 && (bb.calculate(), Db.track($a, S, [Ua(Z, e, 21), Ua($, 0 | b, 22), Ua(Ca, g.getActiveTab(), 31), Ua(Da, g.getDocumentFocus(), 31), Ua(Ea, g.getTabFocus(a.getContainer()), 31)].concat(u(p(), d)).concat(O())))
            }
        }

        function N() {
            return _a ? [Ua(Pa, Ta.cx, 30), Ua(Qa, Ta.o, 30)] : []
        }

        function O() {
            return _a ? [Ua(Qa, Ta.o, 30), Ua(Ra, Ta.cs, 30), Ua(Sa, Ta.pip, 30)] : []
        }

        function P(a) {
            Kb = !!a.active
        }

        g._ || a._.extend(g, a.utils, {_: a._});
        var Q = "e", R = "s", S = "t", T = "pa", U = "ed", V = "d", W = "ph", X = "mu", Y = "t", Z = "ti", $ = "pw", _ = "ps", aa = "vs", ba = "wd", ca = "pl", da = "l", ea = "q", fa = "m", ga = "id", ha = "fv", ia = "eb", ja = "st", ka = "ff", la = "pp", ma = "emi", na = "pli", oa = "vp", pa = "po", qa = "s", ra = "r", sa = "sn", ta = "cb", ua = "ga", va = "pr", wa = "vd", xa = "mk", ya = "tt", za = "cct", Aa = "drm", Ba = "pd", Ca = "at", Da = "df", Ea = "tf", Fa = "plc", Ga = "pid", Ha = "dd", Ia = "cp", Ja = "ab", Ka = "pad", La = "ap", Ma = "mt", Na = "vi", Oa = "vl", Pa = "cx", Qa = "o", Ra = "cs", Sa = "pip", Ta = {
            cx: 0,
            o: 0,
            cs: 0,
            pip: 0
        }, Ua = function (a, b, c) {
            return new h(a, b, c)
        }, Va = 128, Wa = b.debug === !0, Xa = a.getConfig();
        b.version = g.simpleSemver(a.version);
        var Ya, Za, $a, _a = parseInt(b.sdkplatform, 10), ab = null, bb = this, cb = g._.isObject(window.jwplayer) ? window.jwplayer.defaults || {} : {}, db = Xa[W] || cb[W] || 0, eb = K(12), fb = 0, gb = {
            aes: 1,
            widevine: 2,
            playready: 3
        }, hb = {
            interaction: 1,
            "related-interaction": 1,
            autostart: 2,
            repeat: 3,
            external: 4,
            "related-auto": 5,
            playlist: 6
        }, ib = {
            none: 1,
            metadata: 2,
            auto: 3
        }, jb = Xa.visualplaylist !== !1, kb = Xa.displaydescription !== !1, lb = !!Xa.image, mb = Xa.skin, nb = !!Xa.advertising, ob = !!Xa.sharing, pb = !!Xa.related, qb = !!Xa.cast, rb = !!Xa.ga, sb = Xa.pid, tb = 0, ub = Xa.key;
        if (ub) {
            var vb = new g.key(ub), wb = vb.edition();
            "invalid" !== wb && ($a = vb.token()), "enterprise" === wb ? tb = 6 : "trial" === wb ? tb = 7 : "invalid" === wb ? tb = 4 : "ads" === wb ? tb = 3 : "premium" === wb ? tb = 2 : "pro" === wb && (tb = 1)
        }
        $a || ($a = "_"), bb.getCommonAdTrackingParameters = function () {
            return s(p(), !1)
        }, bb.calculate = function () {
            ab = function () {
                var b = 1, c = 2, d = 3, e = 4, f = 5, h = 0, i = a.getConfig(), j = a.getWidth(), k = a.getHeight(), l = /\d+%/.test(j);
                if (l) {
                    var m = g.bounds(a.getContainer());
                    j = Math.ceil(m.width), k = Math.ceil(m.height)
                }
                return j = 0 | j, /\d+%/.test(i.width || j) && i.aspectratio ? {
                    bucket: e,
                    width: j,
                    height: k
                } : g.hasClass(a.getContainer(), "jw-flag-audio-player") ? {
                    bucket: f,
                    width: j,
                    height: k
                } : 0 === j ? {bucket: h, width: j, height: k} : 320 >= j ? {
                    bucket: b,
                    width: j,
                    height: k
                } : 640 >= j ? {bucket: c, width: j, height: k} : {bucket: d, width: j, height: k}
            }()
        }, bb.getPlayerSize = function () {
            return ab
        };
        var xb = new f(a, 2e3);
        i(bb, b, $a, Wa, a, xb), j(bb, a, b, $a, Wa, xb);
        var yb, zb, Ab, Bb, Cb, Db = new e(b, Wa, "jwplayer6", xb), Eb = "play", Fb = "meta", Gb = "levels", Hb = "firstFrame", Ib = 0, Jb = null, Kb = !1, Lb = !1, Mb = !1;
        a.on("mobile-sdk-lt", function (a) {
            g._.extend(Ta, a)
        }), a.onReady(function (a) {
            J(p(), a)
        }), a.onPlay(y(Eb)), a.on("firstFrame", y(Hb)), a.onMeta(y(Fb)), a.onQualityLevels(y(Gb)), a.onCast(P), a.onTime(function (b) {
            if (!Kb) {
                var c = b.position, d = b.duration;
                if (c) {
                    if (c > 1) {
                        if (!yb[Fb]) {
                            var e = {duration: d}, f = a.getContainer(), g = f.getElementsByTagName("video"), h = g.length ? g[0] : null;
                            h && (e.width = h.videoWidth, e.height = h.videoHeight), y(Fb)(e)
                        }
                        yb[Gb] || y(Gb)({})
                    }
                    var i = B(d), j = d / i, k = c / j + 1 | 0;
                    0 === Bb && (Bb = k), null === Jb && (Jb = c);
                    var l = c - Jb;
                    if (Jb = c, l = Math.min(Math.max(0, l), 4), Ib += l, k === Bb + 1) {
                        var m = Va * Bb / i;
                        if (Bb = 0, k > i)return;
                        M(m, Ib, i), Ib = 0
                    }
                }
            }
        }), a.onComplete(function () {
            if (!Kb) {
                var a = A();
                if (!(0 >= a || a === 1 / 0)) {
                    var b = B(a);
                    M(Va, Ib, b), Ib = 0
                }
            }
        }), a.onSeek(D), a.onIdle(x), a.onPlaylistItem(w), x()
    }, l = function () {
        var a = d().replace("Shockwave Flash", "").replace(/ /g, "");
        return function () {
            return a
        }
    }();
    window.jwplayer && jwplayer() && jwplayer().registerPlugin("jwpsrv", "6.0", k)
}, function (a, b, c) {
    var d = c(3), e = c(4), f = function (a, b, c, e) {
        d._.isFunction(a.onping) && (this.onping = a.onping);
        var f = parseInt(a.sdkplatform, 10), g = 1 === f || 2 === f, h = "complete" === document.readyState, i = {
            trackerVersion: "2.3.3",
            // serverURL: "jwpltx.com",
            serverURL: "",
            // serverPath: "v1/" + c + "/ping.gif?",
            serverPath: "ping.gif?",
            playerVersion: a.version,
            config: a,
            SDKPlatform: a.sdkplatform || "0",
            isMobileSDK: g,
            iFrame: void 0,
            pageURL: void 0,
            pageTitle: void 0,
            pageLoaded: h,
            queue: [],
            debug: b,
            positionUtils: e
        };
        if (!g) {
            if (i.iFrame = window.top !== window.self, i.iFrame) {
                i.pageURL = document.referrer;
                try {
                    i.pageURL = i.pageURL || window.top.location.href, i.pageTitle = window.top.document.title
                } catch (j) {
                }
            }
            i.pageURL = i.pageURL || window.location.href, i.pageTitle = i.pageTitle || document.title
        }
        var k = d._.extend(this, i);
        if (!h) {
            var l = function () {
                for (k.pageLoaded = !0; k.queue.length;)k.ping(k.queue.shift())
            };
            window.addEventListener ? window.addEventListener("load", l) : window.attachEvent("onload", l)
        }
    };
    f.prototype.track = function (a, b, c) {
        this.ping(this.buildTrackingURL(a, b, c))
    };
    var g = "tv", h = "n", i = "aid", j = "e", k = "i", l = "ifd", m = "pv", n = "pu", o = "pt", p = "sdk", q = "sv", r = "bi", s = "an", t = "did", u = "dm", v = "sc", w = "ts", x = "ha", y = function (a, b, c) {
        return new e(a, b, c)
    }, z = function (a) {
        var b, c, d = 0;
        if (a = decodeURIComponent(a), !a.length)return d;
        for (b = 0; b < a.length; b++)c = a.charCodeAt(b), d = (d << 5) - d + c, d &= d;
        return d
    };
    f.prototype.buildTrackingURL = function (a, b, c) {
        var d = [y(g, this.trackerVersion, 0), y(h, Math.random().toFixed(16).substr(2, 16), 2), y(i, a, 4), y(j, b, 5), y(k, this.iFrame, 6), y(l, this.positionUtils.getIFrameDepth(), 6), y(m, this.playerVersion, 7), y(n, this.pageURL, 101), y(o, this.pageTitle, 103), y(p, this.SDKPlatform, 25)].concat(c);
        this.isMobileSDK && d.push(y(t, this.config.mobiledeviceid || "", 26), y(q, this.config.iossdkversion || "", 27), y(u, this.config.mobiledevicemodel || "", 28), y(r, this.config.bundleid || "", 29), y(s, this.config.applicationname || "", 30), y(v, this.config.systemcaptions || "", 31), y(w, this.config.texttospeech || "", 32), y(x, this.config.hardwareacceleration || "", 33)), d.sort(function (a, b) {
            return a.priority - b.priority
        });
        for (var e = [], f = 0; f < d.length; f++)e.push(d[f].getKey() + "=" + encodeURIComponent(d[f].getValue()));
        // var A = e.join("&"), B = "h=" + z(A) + "&" + A, C = ["//", this.serverURL, "/", this.serverPath, B];
        var A = e.join("&"), B = "h=" + z(A) + "&" + A, C = [this.serverPath, B];
        return "file:" === window.location.protocol && C.unshift("https:"), C.join("")
    }, f.prototype.ping = function (a) {
        if (!this.pageLoaded)return void this.queue.push(a);
        var b = new Image;
        if (b.src = a, this.debug && this.onping)try {
            this.onping.call(this, a)
        } catch (c) {
            console.error("jwpsrv.onping:", c.message)
        }
    }, a.exports = f
}, function (a, b) {
    var c = {};
    c.getAdClientValue = function (a) {
        if (a) {
            if (/vast/.test(a))return 0;
            if (/googima/.test(a))return 1
        }
        return -1
    }, c.getMediaId = function (a) {
        var b = /.*\/(?:manifests|videos)\/([a-zA-Z0-9]{8})[\.-].*/, c = b.exec(a);
        return c && 2 === c.length ? c[1] : null
    }, c.getActiveTab = function (a, b) {
        for (var c = 0; c < b.length && (c && (a = b[c] + "Hidden"), !(a in document)); c++);
        return a ? function () {
            return !document[a]
        } : function () {
            return null
        }
    }("", ["hidden", "webkit", "moz", "ms", "o"]), c.getDocumentFocus = function () {
        return document.hasFocus && "function" == typeof document.hasFocus && document.hasFocus()
    }, c.getTabFocus = function (a) {
        for (var b = document.activeElement; b;) {
            if (b === a)return !0;
            b = b.parentNode
        }
        return !1
    }, c.isAbsolutePath = function (a) {
        return a.match(/^[a-zA-Z]+:\/\//)
    }, c.simpleSemver = function (a) {
        return a.split("+")[0]
    }, c.hasClass = function (a, b) {
        var c = " " + b + " ";
        return 1 === a.nodeType && (" " + a.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(c) >= 0
    }, a.exports = c
}, function (a, b) {
    var c = function (a, b, c) {
        b === !0 || b === !1 ? b = b ? 1 : 0 : null !== b && void 0 !== b || (b = ""), this.key = a, this.value = b, this.priority = c
    };
    c.prototype.getKey = function () {
        return this.key
    }, c.prototype.getValue = function () {
        return this.value
    }, a.exports = c
}, function (a, b) {
    function c(a, b) {
        var c = a.top + a.height < b.top || a.top > b.top + b.height || a.left + a.width < b.left || a.left > b.left + b.width, d = {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        };
        return c === !1 && (d = {
            top: Math.max(a.top, b.top),
            left: Math.max(a.left, b.left),
            width: Math.min(Math.abs(a.left - (b.left + b.width)), Math.abs(b.left - (a.left + a.width)), a.width, b.width),
            height: Math.min(Math.abs(a.top - (b.top + b.height)), Math.abs(b.top - (a.top + a.height)), a.height, b.height)
        }), d
    }

    function d(a, b) {
        for (var d, e = a, f = b; null !== e.parentElement && "undefined" != typeof e.parentElement.tagName;)d = i(e.parentElement), f = c(f, d), e = e.parentElement;
        var g = i(e.ownerDocument.body).width, h = i(e.ownerDocument.body).height;
        return f = c(f, {top: 0, left: 0, width: g, height: h})
    }

    function e(a, b) {
        for (var c = a, d = b; null !== c && "undefined" != typeof c.tagName;)null !== c.offsetParent && c.offsetParent === c.parentElement.offsetParent ? (d.top += c.offsetTop - c.parentElement.offsetTop, d.left += c.offsetLeft - c.parentElement.offsetLeft) : (d.top += c.offsetTop, d.left += c.offsetLeft), null !== c.parentElement && "BODY" !== c.parentElement.tagName && (d.top -= "undefined" != typeof c.parentElement.scrollTop ? c.parentElement.scrollTop : 0, d.left -= "undefined" != typeof c.parentElement.scrollLeft ? c.parentElement.scrollLeft : 0), c = c.parentElement;
        return d
    }

    function f(a, b) {
        for (var c = {top: 0, left: 0}, d = a.getContainer(); null !== d;) {
            if (c = e(d, c), b || j(d) === window.top)return c;
            d = j(d).frameElement
        }
        return c
    }

    function g(a) {
        for (var b = a.getContainer(), c = i(b); null !== b;) {
            if (c = d(b, c), j(b) === window.top)return c;
            try {
                b = j(b).frameElement, c.top += b.offsetTop, c.left += b.offsetLeft
            } catch (e) {
                b = null
            }
        }
        return c
    }

    function h(a, b) {
        for (var c = a.getContainer(), f = i(c), g = {top: 0, left: 0}; null !== c;) {
            f = d(c, f), g = e(c, g);
            var h = j(c);
            if (h === window.top) {
                h.parent.postMessage(JSON.stringify({
                    type: "jwpsrv_position_response",
                    playerId: a.id,
                    rect: {top: f.top, left: f.left, width: f.width, height: f.height},
                    iframeDepth: 0,
                    coords: g,
                    responseChain: b
                }), "*"), c = null;
                break
            }
            try {
                c = h.frameElement
            } catch (k) {
                c = null
            }
            null === c ? parent.postMessage(JSON.stringify({
                type: "jwpsrv_position",
                playerId: a.id,
                rect: {top: f.top, left: f.left, width: f.width, height: f.height},
                iframeDepth: 0,
                coords: g,
                responseChain: b
            }), "*") : (f.top += c.offsetTop, f.left += c.offsetLeft)
        }
    }

    function i(a) {
        if (!a.getBoundingClientRect)throw new Error("Cannot get bounds: " + a);
        var b = a.getBoundingClientRect(), c = {left: b.left, top: b.top, width: b.width, height: b.height};
        return "width" in b || (c.width = b.right - b.left), "height" in b || (c.height = b.bottom - b.top), c
    }

    function j(a) {
        var b = a.ownerDocument;
        return b.defaultView || b.parentWindow
    }

    var k = function (a, b) {
        function c() {
            var b = a.getContainer();
            return b ? a.getState() === e && !b.parentNode : !0
        }

        this.playerAPI = a, this.lastViewRect = void 0, this.lastViewPos = void 0, this.iframeDepth = 0;
        var d, e = "idle", f = window.location;
        try {
            d = !(window.top.location.protocol === f.protocol && window.top.location.host === f.host && window.top.location.port === f.port)
        } catch (g) {
            d = !0
        }
        if (this.isPolling = d, d) {
            var i = this, j = "" + Math.floor(1e11 * Math.random()), k = function (a) {
                var b;
                try {
                    b = JSON.parse(a.data)
                } catch (c) {
                }
                b && b.type && "jwpsrv_position_response" === b.type && i.playerAPI.id === b.playerId && (i.lastViewRect = b.rect, i.lastViewPos = b.coords, i.iframeDepth = b.iframeDepth)
            };
            window.addEventListener ? window.addEventListener("message", k) : window.attachEvent("onmessage", k), h(a, j);
            var l = setInterval(function () {
                c() ? clearInterval(l) : i.isPolling && h(a, j)
            }, b)
        }
    };
    k.prototype.getPosition = function () {
        if (this.playerAPI.getFullscreen())return "0,0";
        if (this.isPolling)return this.lastViewPos ? this.lastViewPos.left + "," + this.lastViewPos.top : null;
        var a = f(this.playerAPI, this.isPolling);
        return a.left + "," + a.top
    }, k.prototype.getViewablePercentage = function (a) {
        if (this.playerAPI.getFullscreen())return 1;
        if (this.isPolling)return this.lastViewRect ? Math.round(1e3 * (this.lastViewRect.width * this.lastViewRect.height / (a.width * a.height))) / 1e3 : null;
        var b = g(this.playerAPI);
        return Math.round(1e3 * (b.width * b.height / (a.width * a.height))) / 1e3
    }, k.prototype.getIFrameDepth = function () {
        if (this.isPolling === !0)return this.iframeDepth ? this.iframeDepth : null;
        for (var a = j(this.playerAPI.getContainer()), b = 0; a !== window.top;)a = j(a.frameElement), b++;
        return b
    }, a.exports = k
}, function (a, b, c) {
    function d(a, b, c) {
        return new f(a, b, c)
    }

    var e = c(2), f = c(4), g = c(3);
    a.exports = function (a, b, c, f, h, i) {
        function j(a, b) {
            s.track(c, a, b)
        }

        function k(a) {
            if (-1 === u && a && (u = g.getAdClientValue(a.client)), a.hasOwnProperty("adposition"))switch (a.adposition) {
                case"pre":
                    r.adposition = 0;
                    break;
                case"mid":
                    r.adposition = 1;
                    break;
                case"post":
                    r.adposition = 2;
                    break;
                case"api":
                    r.adposition = 3
            }
            if (a.hasOwnProperty("tag") && (r.tagdomain = m(g.getAbsolutePath(a.tag))), a.hasOwnProperty("adbreakid") && (r.adbreakid = a.adbreakid), a.hasOwnProperty("adtagid") && (r.adtagid = a.adtagid), a.hasOwnProperty("offset") && (r.offset = a.offset), a.hasOwnProperty("linear") && (r.adLinear = "linear" === a.linear), a.hasOwnProperty("witem") && (r.witem = a.witem), a.hasOwnProperty("wcount") && (r.wcount = a.wcount), a.hasOwnProperty("creativetype"))switch (a.creativetype) {
                case"static":
                    r.adCreativeType = 0;
                    break;
                case"video":
                    r.adCreativeType = 1;
                    break;
                case"vpaid":
                case"vpaid-swf":
                    r.adCreativeType = 2;
                    break;
                case"vpaid-js":
                    r.adCreativeType = 3
            }
            a.hasOwnProperty("skipoffset") && (r.skipoffset = a.skipoffset), r.adSystem = a.adsystem || r.adSystem, r.vastVersion = a.vastversion || r.vastVersion, r.podIndex = a.sequence || r.podIndex, r.podCount = a.podcount || r.podCount
        }

        function l(a, b) {
            if (!(b > 4)) {
                if (t.adscheduleid && b > r.previousQuartile) {
                    k(a);
                    var c = [d(K, r.duration, 1), d(T, b, 1)].concat(p());
                    j(z, c)
                }
                r.previousQuartile = b
            }
        }

        function m(a) {
            if (a) {
                var b = a.match(new RegExp(/^[^\/]*:\/\/\/?([^\/]*)/));
                if (b && b.length > 1)return b[1]
            }
            return ""
        }

        function n() {
            return [d(C, r.adId, 1), d(E, u, 19), d(D, h.getMute(), 28), d(Q, r.tagdomain, 29), d(G, r.adposition, 31), d(U, r.witem, 32), d(V, r.wcount, 32)].concat(a.getCommonAdTrackingParameters())
        }

        function o() {
            return [d(W, t.adscheduleid, 20), d(X, r.adbreakid, 21), d(Y, r.adtagid, 21), d(Z, r.skipoffset, 22), d($, r.offset, 23)]
        }

        function p() {
            return a.calculate(), [d(O, r.podCount, 22), d(P, r.podIndex, 23), d(I, r.adCreativeType, 24), d(F, r.adLinear, 25), d(H, r.vastVersion, 26), d(J, r.adSystem, 27), d(M, g.getActiveTab(), 31), d(N, g.getDocumentFocus(), 31), d(L, g.getTabFocus(h.getContainer()), 31)].concat(n())
        }

        var q = {
            numCompanions: -1,
            podCount: 0,
            podIndex: 0,
            adLinear: -1,
            vastVersion: -1,
            adSystem: "",
            adCreativeType: -1,
            adposition: -1,
            tagdomain: "",
            position: "",
            previousQuartile: 0,
            duration: "",
            witem: 1,
            wcount: 1
        }, r = null, s = new e(b, f, "clienta", i), t = (h.getConfig() || {}).advertising || {}, u = g.getAdClientValue(t.client), v = "i", w = "as", x = "c", y = "s", z = "v", A = "ae", B = "ar", C = "adi", D = "mt", E = "c", F = "al", G = "p", H = "vv", I = "ct", J = "ad", K = "du", L = "tf", M = "at", N = "df", O = "pc", P = "pi", Q = "vu", R = "ec", S = "tw", T = "qt", U = "awi", V = "awc", W = "ask", X = "abk", Y = "atk", Z = "sko", $ = "abo";
        h.on("adRequest adMeta adImpression adComplete adSkipped adError adTime", function (a) {
            r && r.adId === a.id && -1 !== a.id || (r = g._.extend({adId: a.id}, q))
        }).on("adRequest adMeta adImpression adComplete adSkipped adError", k).on("adRequest", function () {
            j(B, n().concat(o()))
        }).on("adImpression", function () {
            j(v, [d(Z, r.skipoffset, 1)].concat(p()).concat(o()))
        }).on("adStarted", function () {
            j(w, p().concat(o()))
        }).on("adComplete", function (a) {
            l(a, 4)
        }).on("adSkipped", function () {
            var a = [d(S, r.position, 1), d(T, r.previousQuartile, 1), d(K, r.duration, 1)].concat(o()).concat(p());
            j(y, a)
        }).on("adError", function (a) {
            if (t.adscheduleid) {
                var b = 1;
                "object" == typeof a && a && void 0 !== a.code && (b = a.code);
                var c = [d(R, b, 1)].concat(n().concat(o()));
                j(A, c)
            }
        }).on("adClick", function () {
            var a = [d(S, r.position, 1), d(K, r.duration, 1), d(T, r.previousQuartile, 1)].concat(p().concat(o()));
            j(x, a)
        }).on("adTime", function (a) {
            if (r.position = a.position, r.duration = r.duration || a.duration, r.duration) {
                var b = Math.floor((4 * r.position + .05) / r.duration);
                l(a, b)
            }
        })
    }
}, function (a, b, c) {
    function d(a, b, c, d) {
        function k(a) {
            return function (e) {
                a(e, b, c, d)
            }
        }

        if (a.getPlugin) {
            var l = a.getPlugin("related");
            l && (l.on("setup", k(f)), l.on("playlist", k(j)), l.on("open", k(g)), l.on("close", k(h)), l.on("play", k(i)))
        } else a.on(s, k(e)), a.on(q, k(e)), a.on(p, k(e)), a.on(r, k(e))
    }

    function e(a, b, c, d) {
        var e = [];
        b.calculate(), n.foreach(a, function (b) {
            "type" !== b && e.push(G(b, a[b].value, a[b].priority))
        }), d.track(c, a.type, e.concat(b.getCommonAdTrackingParameters()))
    }

    function f(a, b, c, d) {
        k(s, a, [], b, c, d)
    }

    function g(a, b, c, d) {
        k(q, a, [], b, c, d)
    }

    function h(a, b, c, d) {
        "play" !== a.method && k(r, a, [], b, c, d)
    }

    function i(a, b, c, d) {
        var e = [];
        if (n._.has(a, "item")) {
            var f;
            f = "play" === a.onclick ? a.item.mediaid : a.item.link, e.push(G(C, f, 5))
        }
        n._.has(a, "autoplaytimer") && e.push(G(E, a.autoplaytimer, 5)), k(p, a, e, b, c, d)
    }

    function j(a, b, c, d) {
        null !== a.playlist && k(t, a, [], b, c, d)
    }

    function k(a, b, c, d, e, f) {
        c = l(c, b, d), f.track(e, a, c.concat(d.getCommonAdTrackingParameters()))
    }

    function l(a, b, c) {
        if (c.calculate(), n._.has(b, "relatedFile") && a.push(G(B, b.relatedFile, 21)), n._.has(b, "onclick") && a.push(G(u, "play" === b.onclick ? 1 : 0, 21)), n._.has(b, "relatedCount") && a.push(G(A, b.relatedCount, 5)), n._.has(b, "method")) {
            var d = F[b.method] || 0;
            a.push(G(z, d, 5))
        }
        return n._.has(b, "method_group_id") && a.push(G(v, b.method_group_id, 5)), n._.has(b, "method_group_code") && a.push(G(w, b.method_group_code, 5)), n._.has(b, "selected_method_group_code") && a.push(G(x, b.selected_method_group_code, 5)), n._.has(b, "rec_id") && a.push(G(y, b.rec_id, 6)), n._.has(b, "position") && a.push(G(D, b.position + 1, 6)), a
    }

    var m = c(2), n = c(3), o = c(4), p = "c", q = "sh", r = "l", s = "em", t = "bs", u = "os", v = "mgi", w = "mgc", x = "smgc", y = "ri", z = "rm", A = "ns", B = "rf", C = "rn", D = "oc", E = "rat", F = {
        play: 1,
        api: 2,
        interaction: 3,
        complete: 4,
        auto: 5,
        manual: 6,
        link: 7
    };
    a.exports = function (a, b, c, e, f, g) {
        function h() {
            d(b, a, e, i)
        }

        var i = new m(c, f, "aanbevolen", g);
        b.onReady(h)
    };
    var G = function (a, b, c) {
        return new o(a, b, c)
    }
}]);