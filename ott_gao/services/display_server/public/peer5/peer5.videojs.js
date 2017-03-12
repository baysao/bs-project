!function () {
    function m() {
        return function () {
        }
    }

    function n(t) {
        return function () {
            return this[t]
        }
    }

    function p(t) {
        return function () {
            return t
        }
    }

    function t(e, i, s) {
        if ("string" == typeof e) {
            if (0 === e.indexOf("#") && (e = e.slice(1)), t.Ca[e])return i && t.log.warn('Player "' + e + '" is already initialised. Options will not be applied.'), s && t.Ca[e].I(s), t.Ca[e];
            e = t.m(e)
        }
        if (!e || !e.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return e.player || new t.Player(e, i, s)
    }

    function v(e, i, s, n) {
        t.tc.forEach(s, function (t) {
            e(i, t, n)
        })
    }

    function F(e, i) {
        var s, n;
        s = Array.prototype.slice.call(i), n = m(), n = window.console || {
                log: n,
                warn: n,
                error: n
            }, e ? s.unshift(e.toUpperCase() + ":") : e = "log", t.log.history.push(s), s.unshift("VIDEOJS:"), n[e].apply ? n[e].apply(n, s) : n[e](s.join(" "))
    }

    function G(t) {
        t.r("vjs-lock-showing")
    }

    function ca(e, i, s, n) {
        return s !== b ? ((s === j || t.he(s)) && (s = 0), e.c.style[i] = -1 !== ("" + s).indexOf("%") || -1 !== ("" + s).indexOf("px") ? s : "auto" === s ? "" : s + "px", n || e.o("resize"), e) : e.c ? (s = e.c.style[i], n = s.indexOf("px"), -1 !== n ? parseInt(s.slice(0, n), 10) : parseInt(e.c["offset" + t.va(i)], 10)) : 0
    }

    function da(e) {
        var i, s, n, r, o, a, c, u;
        i = 0, s = j, e.b("touchstart", function (e) {
            1 === e.touches.length && (s = t.i.copy(e.touches[0]), i = (new Date).getTime(), r = f)
        }), e.b("touchmove", function (t) {
            1 < t.touches.length ? r = l : s && (a = t.touches[0].pageX - s.pageX, c = t.touches[0].pageY - s.pageY, u = Math.sqrt(a * a + c * c), u > 10 && (r = l))
        }), o = function () {
            r = l
        }, e.b("touchleave", o), e.b("touchcancel", o), e.b("touchend", function (t) {
            s = j, r === f && (n = (new Date).getTime() - i, 200 > n && (t.preventDefault(), this.o("tap")))
        })
    }

    function ea(e, i) {
        var s, n, r, o;
        return s = e.c, n = t.Vd(s), o = r = s.offsetWidth, s = e.handle, e.options().vertical ? (o = n.top, n = i.changedTouches ? i.changedTouches[0].pageY : i.pageY, s && (s = s.m().offsetHeight, o += s / 2, r -= s), Math.max(0, Math.min(1, (o - n + r) / r))) : (r = n.left, n = i.changedTouches ? i.changedTouches[0].pageX : i.pageX, s && (s = s.m().offsetWidth, r += s / 2, o -= s), Math.max(0, Math.min(1, (n - r) / o)))
    }

    function fa(e, i) {
        e.aa(i), i.b("click", t.bind(e, function () {
            G(this)
        }))
    }

    function ga(t) {
        t.Ja = f, t.za.p("vjs-lock-showing"), t.c.setAttribute("aria-pressed", f), t.H && 0 < t.H.length && t.H[0].m().focus()
    }

    function H(t) {
        t.Ja = l, G(t.za), t.c.setAttribute("aria-pressed", l)
    }

    function ia(e) {
        var i, s, n = {sources: [], tracks: []};
        if (i = t.Oa(e), s = i["data-setup"], s !== j && t.i.D(i, t.JSON.parse(s || "{}")), t.i.D(n, i), e.hasChildNodes()) {
            var r, o;
            for (e = e.childNodes, r = 0, o = e.length; o > r; r++)i = e[r], s = i.nodeName.toLowerCase(), "source" === s ? n.sources.push(t.Oa(i)) : "track" === s && n.tracks.push(t.Oa(i))
        }
        return n
    }

    function ka(e, i, s) {
        e.h && (e.ya = l, e.h.dispose(), e.h = l), "Html5" !== i && e.L && (t.f.Kb(e.L), e.L = j), e.Ta = i, e.ya = l;
        var n = t.i.D({source: s, parentEl: e.c}, e.q[i.toLowerCase()]);
        s && (e.Cc = s.type, s.src == e.K.src && 0 < e.K.currentTime && (n.startTime = e.K.currentTime), e.K.src = s.src), e.h = new window.videojs[i](e, n), e.h.I(function () {
            this.d.Va()
        })
    }

    function la(t, e) {
        e !== b && t.Jc !== e && ((t.Jc = e) ? (t.p("vjs-has-started"), t.o("firstplay")) : t.r("vjs-has-started"))
    }

    function N(e, i, s) {
        if (e.h && !e.h.ya)e.h.I(function () {
            this[i](s)
        }); else try {
            e.h[i](s)
        } catch (n) {
            throw t.log(n), n
        }
    }

    function M(e, i) {
        if (e.h && e.h.ya)try {
            return e.h[i]()
        } catch (s) {
            throw e.h[i] === b ? t.log("Video.js: " + i + " method not defined for " + e.Ta + " playback technology.", s) : "TypeError" == s.name ? (t.log("Video.js: " + i + " unavailable on " + e.Ta + " playback technology element.", s), e.h.ya = l) : t.log(s), s
        }
    }

    function ma(t, e) {
        var i = t.selectSource(e);
        i ? i.h === t.Ta ? t.src(i.source) : ka(t, i.h, i.source) : (t.setTimeout(function () {
            this.error({code: 4, message: this.v(this.options().notSupportedMessage)})
        }, 0), t.Va())
    }

    function ja(t, e) {
        return e !== b ? (t.Lc = !!e, t) : t.Lc
    }

    function na(t) {
        return t.k().h && t.k().h.featuresPlaybackRate && t.k().options().playbackRates && 0 < t.k().options().playbackRates.length
    }

    function oa(t, e) {
        var i = /^blob\:/i;
        return e && t && i.test(t) ? e : t
    }

    function ta() {
        var t = T[U], e = t.charAt(0).toUpperCase() + t.slice(1);
        ua["set" + e] = function (e) {
            return this.c.vjs_setProperty(t, e)
        }
    }

    function va(t) {
        ua[t] = function () {
            return this.c.vjs_getProperty(t)
        }
    }

    function P(e, i) {
        var s = e.Ua.length;
        "" + s in e || Object.defineProperty(e, s, {
            get: function () {
                return this.Ua[s]
            }
        }), i.addEventListener("modechange", t.bind(e, function () {
            this.o("change")
        })), e.Ua.push(i), e.o({type: "addtrack", S: i})
    }

    function Q(t, e) {
        for (var i, s = 0, n = t.length; n > s; s++)if (i = t[s], i === e) {
            t.Ua.splice(s, 1);
            break
        }
        t.o({type: "removetrack", S: e})
    }

    function W(t, e) {
        return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
    }

    function X(t) {
        var e;
        return t.He ? e = t.He[0] : t.options && (e = t.options[t.options.selectedIndex]), e.value
    }

    function Y(t, e) {
        var i, s;
        if (e) {
            for (i = 0; i < t.options.length && (s = t.options[i], !(s.value === e)); i++);
            t.selectedIndex = i
        }
    }

    function $(t, e) {
        var i = t.split("."), s = Ba;
        !(i[0] in s) && s.execScript && s.execScript("var " + i[0]);
        for (var n; i.length && (n = i.shift());)i.length || e === b ? s = s[n] ? s[n] : s[n] = {} : s[n] = e
    }

    var b = void 0, f = !0, j = null, l = !1, s;
    document.createElement("video"), document.createElement("audio"), document.createElement("track");
    var videojs = window.videojs = t;
    t.fc = "4.12", t.sd = "https:" == document.location.protocol ? "https://" : "http://", t.VERSION = "4.12.12", t.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        playbackRates: [],
        inactivityTimeout: 2e3,
        children: {
            mediaLoader: {},
            posterImage: {},
            loadingSpinner: {},
            textTrackDisplay: {},
            bigPlayButton: {},
            controlBar: {},
            errorDisplay: {},
            textTrackSettings: {}
        },
        language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.Ff || navigator.language || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this video."
    }, "GENERATED_CDN_VSN" !== t.fc && (videojs.options.flash.swf = t.sd + "vjs.zencdn.net/" + t.fc + "/video-js.swf"), t.Gd = function (e, i) {
        return t.options.languages[e] = t.options.languages[e] !== b ? t.Z.Aa(t.options.languages[e], i) : i, t.options.languages
    }, t.Ca = {}, "function" == typeof define && define.amd ? define("videojs", [], function () {
        return videojs
    }) : "object" == typeof exports && "object" == typeof module && (module.exports = videojs), t.Ga = t.CoreObject = m(), t.Ga.extend = function (e) {
        var i, s;
        e = e || {}, i = e.init || e.l || this.prototype.init || this.prototype.l || m(), s = function () {
            i.apply(this, arguments)
        }, s.prototype = t.i.create(this.prototype), s.prototype.constructor = s, s.extend = t.Ga.extend, s.create = t.Ga.create;
        for (var n in e)e.hasOwnProperty(n) && (s.prototype[n] = e[n]);
        return s
    }, t.Ga.create = function () {
        var e = t.i.create(this.prototype);
        return this.apply(e, arguments), e
    }, t.b = function (e, i, s) {
        if (t.i.isArray(i))return v(t.b, e, i, s);
        var n = t.getData(e);
        n.G || (n.G = {}), n.G[i] || (n.G[i] = []), s.s || (s.s = t.s++), n.G[i].push(s), n.ba || (n.disabled = l, n.ba = function (i) {
            if (!n.disabled) {
                i = t.Nb(i);
                var s = n.G[i.type];
                if (s)for (var s = s.slice(0), r = 0, o = s.length; o > r && !i.Nc(); r++)s[r].call(e, i)
            }
        }), 1 == n.G[i].length && (e.addEventListener ? e.addEventListener(i, n.ba, l) : e.attachEvent && e.attachEvent("on" + i, n.ba))
    }, t.n = function (e, i, s) {
        if (t.Ic(e)) {
            var n = t.getData(e);
            if (n.G) {
                if (t.i.isArray(i))return v(t.n, e, i, s);
                if (i) {
                    var r = n.G[i];
                    if (r) {
                        if (s) {
                            if (s.s)for (n = 0; n < r.length; n++)r[n].s === s.s && r.splice(n--, 1)
                        } else n.G[i] = [];
                        t.xc(e, i)
                    }
                } else for (r in n.G)i = r, n.G[i] = [], t.xc(e, i)
            }
        }
    }, t.xc = function (e, i) {
        var s = t.getData(e);
        0 === s.G[i].length && (delete s.G[i], e.removeEventListener ? e.removeEventListener(i, s.ba, l) : e.detachEvent && e.detachEvent("on" + i, s.ba)), t.hb(s.G) && (delete s.G, delete s.ba, delete s.disabled), t.hb(s) && t.Zc(e)
    }, t.Nb = function (t) {
        function e() {
            return f
        }

        function i() {
            return l
        }

        if (!t || !t.Sb) {
            var s = t || window.event;
            t = {};
            for (var n in s)"layerX" !== n && "layerY" !== n && "keyLocation" !== n && ("returnValue" == n && s.preventDefault || (t[n] = s[n]));
            if (t.target || (t.target = t.srcElement || document), t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement, t.preventDefault = function () {
                    s.preventDefault && s.preventDefault(), t.returnValue = l, t.fe = e, t.defaultPrevented = f
                }, t.fe = i, t.defaultPrevented = l, t.stopPropagation = function () {
                    s.stopPropagation && s.stopPropagation(), t.cancelBubble = f, t.Sb = e
                }, t.Sb = i, t.stopImmediatePropagation = function () {
                    s.stopImmediatePropagation && s.stopImmediatePropagation(), t.Nc = e, t.stopPropagation()
                }, t.Nc = i, t.clientX != j) {
                n = document.documentElement;
                var r = document.body;
                t.pageX = t.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = t.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)
            }
            t.which = t.charCode || t.keyCode, t.button != j && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
        }
        return t
    }, t.o = function (e, i) {
        var s = t.Ic(e) ? t.getData(e) : {}, n = e.parentNode || e.ownerDocument;
        return "string" == typeof i && (i = {
            type: i,
            target: e
        }), i = t.Nb(i), s.ba && s.ba.call(e, i), n && !i.Sb() && i.bubbles !== l ? t.o(n, i) : n || i.defaultPrevented || (s = t.getData(i.target), !i.target[i.type]) || (s.disabled = f, "function" == typeof i.target[i.type] && i.target[i.type](), s.disabled = l), !i.defaultPrevented
    }, t.N = function (e, i, s) {
        function n() {
            t.n(e, i, n), s.apply(this, arguments)
        }

        return t.i.isArray(i) ? v(t.N, e, i, s) : (n.s = s.s = s.s || t.s++, void t.b(e, i, n))
    };
    var w = Object.prototype.hasOwnProperty;
    t.e = function (e, i) {
        var s;
        return i = i || {}, s = document.createElement(e || "div"), t.i.ca(i, function (t, e) {
            -1 !== t.indexOf("aria-") || "role" == t ? s.setAttribute(t, e) : s[t] = e
        }), s
    }, t.va = function (t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }, t.i = {}, t.i.create = Object.create || function (t) {
            function e() {
            }

            return e.prototype = t, new e
        }, t.i.ca = function (t, e, i) {
        for (var s in t)w.call(t, s) && e.call(i || this, s, t[s])
    }, t.i.D = function (t, e) {
        if (!e)return t;
        for (var i in e)w.call(e, i) && (t[i] = e[i]);
        return t
    }, t.i.Od = function (e, i) {
        var s, n, r;
        e = t.i.copy(e);
        for (s in i)w.call(i, s) && (n = e[s], r = i[s], e[s] = t.i.ib(n) && t.i.ib(r) ? t.i.Od(n, r) : i[s]);
        return e
    }, t.i.copy = function (e) {
        return t.i.D({}, e)
    }, t.i.ib = function (t) {
        return !!t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
    }, t.i.isArray = Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, t.he = function (t) {
        return t !== t
    }, t.bind = function (e, i, s) {
        function n() {
            return i.apply(e, arguments)
        }

        return i.s || (i.s = t.s++), n.s = s ? s + "_" + i.s : i.s, n
    }, t.ua = {}, t.s = 1, t.expando = "vdata" + (new Date).getTime(), t.getData = function (e) {
        var i = e[t.expando];
        return i || (i = e[t.expando] = t.s++), t.ua[i] || (t.ua[i] = {}), t.ua[i]
    }, t.Ic = function (e) {
        return e = e[t.expando], !(!e || t.hb(t.ua[e]))
    }, t.Zc = function (e) {
        var i = e[t.expando];
        if (i) {
            delete t.ua[i];
            try {
                delete e[t.expando]
            } catch (s) {
                e.removeAttribute ? e.removeAttribute(t.expando) : e[t.expando] = j
            }
        }
    }, t.hb = function (t) {
        for (var e in t)if (t[e] !== j)return l;
        return f
    }, t.Pa = function (t, e) {
        return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
    }, t.p = function (e, i) {
        t.Pa(e, i) || (e.className = "" === e.className ? i : e.className + " " + i)
    }, t.r = function (e, i) {
        var s, n;
        if (t.Pa(e, i)) {
            for (s = e.className.split(" "), n = s.length - 1; n >= 0; n--)s[n] === i && s.splice(n, 1);
            e.className = s.join(" ")
        }
    }, t.A = t.e("video");
    var x = document.createElement("track");
    x.Tb = "captions", x.ed = "en", x.label = "English", t.A.appendChild(x), t.P = navigator.userAgent, t.zd = /iPhone/i.test(t.P), t.yd = /iPad/i.test(t.P), t.Ad = /iPod/i.test(t.P), t.xd = t.zd || t.yd || t.Ad;
    var aa = t, y, z = t.P.match(/OS (\d+)_/i);
    y = z && z[1] ? z[1] : b, aa.gf = y, t.wd = /Android/i.test(t.P);
    var ba = t, B, C = t.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i), D, E;
    C ? (D = C[1] && parseFloat(C[1]), E = C[2] && parseFloat(C[2]), B = D && E ? parseFloat(C[1] + "." + C[2]) : D ? D : j) : B = j, ba.ec = B, t.Bd = t.wd && /webkit/i.test(t.P) && 2.3 > t.ec, t.gc = /Firefox/i.test(t.P), t.hf = /Chrome/i.test(t.P), t.pa = /MSIE\s8\.0/.test(t.P), t.Db = !!("ontouchstart" in window || window.ud && document instanceof window.ud), t.td = "backgroundSize" in t.A.style, t.ad = function (e, i) {
        t.i.ca(i, function (t, i) {
            i === j || "undefined" == typeof i || i === l ? e.removeAttribute(t) : e.setAttribute(t, i === f ? "" : i)
        })
    }, t.Oa = function (t) {
        var e, i, s, n;
        if (e = {}, t && t.attributes && 0 < t.attributes.length) {
            i = t.attributes;
            for (var r = i.length - 1; r >= 0; r--)s = i[r].name, n = i[r].value, ("boolean" == typeof t[s] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + s + ",")) && (n = n !== j ? f : l), e[s] = n
        }
        return e
    }, t.sf = function (t, e) {
        var i = "";
        return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(t, "").getPropertyValue(e) : t.currentStyle && (i = t["client" + e.substr(0, 1).toUpperCase() + e.substr(1)] + "px"), i
    }, t.Rb = function (t, e) {
        e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    }, t.bb = {}, t.m = function (t) {
        return 0 === t.indexOf("#") && (t = t.slice(1)), document.getElementById(t)
    }, t.Na = function (t, e) {
        e = e || t;
        var i = Math.floor(t % 60), s = Math.floor(t / 60 % 60), n = Math.floor(t / 3600), r = Math.floor(e / 60 % 60), o = Math.floor(e / 3600);
        return (isNaN(t) || 1 / 0 === t) && (n = s = i = "-"), n = n > 0 || o > 0 ? n + ":" : "", n + (((n || r >= 10) && 10 > s ? "0" + s : s) + ":") + (10 > i ? "0" + i : i)
    }, t.Id = function () {
        document.body.focus(), document.onselectstart = p(l)
    }, t.Ye = function () {
        document.onselectstart = p(f)
    }, t.trim = function (t) {
        return (t + "").replace(/^\s+|\s+$/g, "")
    }, t.round = function (t, e) {
        return e || (e = 0), Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
    }, t.xa = function (t, e) {
        return t === b && e === b ? {
            length: 0, start: function () {
                throw Error("This TimeRanges object is empty")
            }, end: function () {
                throw Error("This TimeRanges object is empty")
            }
        } : {
            length: 1, start: function () {
                return t
            }, end: function () {
                return e
            }
        }
    }, t.Je = function (e) {
        try {
            var i = window.localStorage || l;
            i && (i.volume = e)
        } catch (s) {
            22 == s.code || 1014 == s.code ? t.log("LocalStorage Full (VideoJS)", s) : 18 == s.code ? t.log("LocalStorage not allowed (VideoJS)", s) : t.log("LocalStorage Error (VideoJS)", s)
        }
    }, t.Xd = function (e) {
        return e.match(/^https?:\/\//) || (e = t.e("div", {innerHTML: '<a href="' + e + '">x</a>'}).firstChild.href), e
    }, t.Be = function (e) {
        var i, s, n, r;
        r = "protocol hostname port pathname search hash host".split(" "), s = t.e("a", {href: e}), (n = "" === s.host && "file:" !== s.protocol) && (i = t.e("div"), i.innerHTML = '<a href="' + e + '"></a>', s = i.firstChild, i.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(i)), e = {};
        for (var o = 0; o < r.length; o++)e[r[o]] = s[r[o]];
        return "http:" === e.protocol && (e.host = e.host.replace(/:80$/, "")), "https:" === e.protocol && (e.host = e.host.replace(/:443$/, "")), n && document.body.removeChild(i), e
    }, t.log = function () {
        F(j, arguments)
    }, t.log.history = [], t.log.error = function () {
        F("error", arguments)
    }, t.log.warn = function () {
        F("warn", arguments)
    }, t.Vd = function (e) {
        var i, s;
        return e.getBoundingClientRect && e.parentNode && (i = e.getBoundingClientRect()), i ? (e = document.documentElement, s = document.body, {
            left: t.round(i.left + (window.pageXOffset || s.scrollLeft) - (e.clientLeft || s.clientLeft || 0)),
            top: t.round(i.top + (window.pageYOffset || s.scrollTop) - (e.clientTop || s.clientTop || 0))
        }) : {left: 0, top: 0}
    }, t.tc = {}, t.tc.forEach = function (e, i, s) {
        if (t.i.isArray(e) && i instanceof Function)for (var n = 0, r = e.length; r > n; ++n)i.call(s || t, e[n], n, e);
        return e
    }, t.cf = function (e, i) {
        var s, n, r, o, a, l, c;
        "string" == typeof e && (e = {uri: e}), videojs.Z.Aa({
            method: "GET",
            timeout: 45e3
        }, e), i = i || m(), l = function () {
            window.clearTimeout(a), i(j, n, n.response || n.responseText)
        }, c = function (t) {
            window.clearTimeout(a), t && "string" != typeof t || (t = Error(t)), i(t, n)
        }, s = window.XMLHttpRequest, "undefined" == typeof s && (s = function () {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (t) {
            }
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (e) {
            }
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch (i) {
            }
            throw Error("This browser does not support XMLHttpRequest.")
        }), n = new s, n.uri = e.uri, s = t.Be(e.uri), r = window.location, s.protocol + s.host === r.protocol + r.host || !window.XDomainRequest || "withCredentials" in n ? (o = "file:" == s.protocol || "file:" == r.protocol, n.onreadystatechange = function () {
            if (4 === n.readyState) {
                if (n.Ve)return c("timeout");
                200 === n.status || o && 0 === n.status ? l() : c()
            }
        }, e.timeout && (a = window.setTimeout(function () {
            4 !== n.readyState && (n.Ve = f, n.abort())
        }, e.timeout))) : (n = new window.XDomainRequest, n.onload = l, n.onerror = c, n.onprogress = m(), n.ontimeout = m());
        try {
            n.open(e.method || "GET", e.uri, f)
        } catch (u) {
            return void c(u)
        }
        e.withCredentials && (n.withCredentials = f), e.responseType && (n.responseType = e.responseType);
        try {
            n.send()
        } catch (h) {
            c(h)
        }
    }, t.Z = {}, t.Z.Aa = function (e, i) {
        var s, n, r;
        e = t.i.copy(e);
        for (s in i)i.hasOwnProperty(s) && (n = e[s], r = i[s], e[s] = t.i.ib(n) && t.i.ib(r) ? t.Z.Aa(n, r) : i[s]);
        return e
    }, t.z = m(), s = t.z.prototype, s.ab = {}, s.b = function (e, i) {
        var s = this.addEventListener;
        this.addEventListener = Function.prototype, t.b(this, e, i), this.addEventListener = s
    }, s.addEventListener = t.z.prototype.b, s.n = function (e, i) {
        t.n(this, e, i)
    }, s.removeEventListener = t.z.prototype.n, s.N = function (e, i) {
        t.N(this, e, i)
    }, s.o = function (e) {
        var i = e.type || e;
        "string" == typeof e && (e = {type: i}), e = t.Nb(e), this.ab[i] && this["on" + i] && this["on" + i](e), t.o(this, e)
    }, s.dispatchEvent = t.z.prototype.o, t.a = t.Ga.extend({
        l: function (e, i, s) {
            if (this.d = e, this.q = t.i.copy(this.q), i = this.options(i), this.Qa = i.id || i.el && i.el.id, this.Qa || (this.Qa = (e.id && e.id() || "no_player") + "_component_" + t.s++), this.qe = i.name || j, this.c = i.el || this.e(), this.R = [], this.cb = {}, this.eb = {}, this.Kc(), this.I(s), i.$c !== l) {
                var n, r;
                this.k().reportUserActivity && (n = t.bind(this.k(), this.k().reportUserActivity), this.b("touchstart", function () {
                    n(), this.clearInterval(r), r = this.setInterval(n, 250)
                }), e = function () {
                    n(), this.clearInterval(r)
                }, this.b("touchmove", n), this.b("touchend", e), this.b("touchcancel", e))
            }
        }
    }), s = t.a.prototype, s.dispose = function () {
        if (this.o({
                type: "dispose",
                bubbles: l
            }), this.R)for (var e = this.R.length - 1; e >= 0; e--)this.R[e].dispose && this.R[e].dispose();
        this.eb = this.cb = this.R = j, this.n(), this.c.parentNode && this.c.parentNode.removeChild(this.c), t.Zc(this.c), this.c = j
    }, s.d = f, s.k = n("d"), s.options = function (e) {
        return e === b ? this.q : this.q = t.Z.Aa(this.q, e)
    }, s.e = function (e, i) {
        return t.e(e, i)
    }, s.v = function (t) {
        var e = this.d.language(), i = this.d.languages();
        return i && i[e] && i[e][t] ? i[e][t] : t
    }, s.m = n("c"), s.wa = function () {
        return this.B || this.c
    }, s.id = n("Qa"), s.name = n("qe"), s.children = n("R"), s.Yd = function (t) {
        return this.cb[t]
    }, s.da = function (t) {
        return this.eb[t]
    }, s.aa = function (e, i) {
        var s, n;
        return "string" == typeof e ? (n = e, i = i || {}, s = i.componentClass || t.va(n), i.name = n, s = new window.videojs[s](this.d || this, i)) : s = e, this.R.push(s), "function" == typeof s.id && (this.cb[s.id()] = s), (n = n || s.name && s.name()) && (this.eb[n] = s), "function" == typeof s.el && s.el() && this.wa().appendChild(s.el()), s
    }, s.removeChild = function (t) {
        if ("string" == typeof t && (t = this.da(t)), t && this.R) {
            for (var e = l, i = this.R.length - 1; i >= 0; i--)if (this.R[i] === t) {
                e = f, this.R.splice(i, 1);
                break
            }
            e && (this.cb[t.id()] = j, this.eb[t.name()] = j, (e = t.m()) && e.parentNode === this.wa() && this.wa().removeChild(t.m()))
        }
    }, s.Kc = function () {
        var e, i, s, n, r, o;
        if (e = this, i = e.options(), s = i.children)if (o = function (t, s) {
                i[t] !== b && (s = i[t]), s !== l && (e[t] = e.aa(t, s))
            }, t.i.isArray(s))for (var a = 0; a < s.length; a++)n = s[a], "string" == typeof n ? (r = n, n = {}) : r = n.name, o(r, n); else t.i.ca(s, o)
    }, s.U = p(""), s.b = function (e, i, s) {
        var n, r, o;
        return "string" == typeof e || t.i.isArray(e) ? t.b(this.c, e, t.bind(this, i)) : (n = t.bind(this, s), o = this, r = function () {
            o.n(e, i, n)
        }, r.s = n.s, this.b("dispose", r), s = function () {
            o.n("dispose", r)
        }, s.s = n.s, e.nodeName ? (t.b(e, i, n), t.b(e, "dispose", s)) : "function" == typeof e.b && (e.b(i, n), e.b("dispose", s))), this
    }, s.n = function (e, i, s) {
        return !e || "string" == typeof e || t.i.isArray(e) ? t.n(this.c, e, i) : (s = t.bind(this, s), this.n("dispose", s), e.nodeName ? (t.n(e, i, s), t.n(e, "dispose", s)) : (e.n(i, s), e.n("dispose", s))), this
    }, s.N = function (e, i, s) {
        var n, r, o;
        return "string" == typeof e || t.i.isArray(e) ? t.N(this.c, e, t.bind(this, i)) : (n = t.bind(this, s), r = this, o = function () {
            r.n(e, i, o), n.apply(this, arguments)
        }, o.s = n.s, this.b(e, i, o)), this
    }, s.o = function (e) {
        return t.o(this.c, e), this
    }, s.I = function (t) {
        return t && (this.ya ? t.call(this) : (this.mb === b && (this.mb = []), this.mb.push(t))), this
    }, s.Va = function () {
        this.ya = f;
        var t = this.mb;
        if (this.mb = [], t && 0 < t.length) {
            for (var e = 0, i = t.length; i > e; e++)t[e].call(this);
            this.o("ready")
        }
    }, s.Pa = function (e) {
        return t.Pa(this.c, e)
    }, s.p = function (e) {
        return t.p(this.c, e), this
    }, s.r = function (e) {
        return t.r(this.c, e), this
    }, s.show = function () {
        return this.r("vjs-hidden"), this
    }, s.X = function () {
        return this.p("vjs-hidden"), this
    }, s.width = function (t, e) {
        return ca(this, "width", t, e)
    }, s.height = function (t, e) {
        return ca(this, "height", t, e)
    }, s.Qd = function (t, e) {
        return this.width(t, f).height(e)
    }, s.setTimeout = function (e, i) {
        function s() {
            this.clearTimeout(n)
        }

        e = t.bind(this, e);
        var n = setTimeout(e, i);
        return s.s = "vjs-timeout-" + n, this.b("dispose", s), n
    }, s.clearTimeout = function (t) {
        function e() {
        }

        return clearTimeout(t), e.s = "vjs-timeout-" + t, this.n("dispose", e), t
    }, s.setInterval = function (e, i) {
        function s() {
            this.clearInterval(n)
        }

        e = t.bind(this, e);
        var n = setInterval(e, i);
        return s.s = "vjs-interval-" + n, this.b("dispose", s), n
    }, s.clearInterval = function (t) {
        function e() {
        }

        return clearInterval(t), e.s = "vjs-interval-" + t, this.n("dispose", e), t
    }, t.w = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i), da(this), this.b("tap", this.u), this.b("click", this.u), this.b("focus", this.kb), this.b("blur", this.jb)
        }
    }), s = t.w.prototype, s.e = function (e, i) {
        var s;
        return i = t.i.D({
            className: this.U(),
            role: "button",
            "aria-live": "polite",
            tabIndex: 0
        }, i), s = t.a.prototype.e.call(this, e, i), i.innerHTML || (this.B = t.e("div", {className: "vjs-control-content"}), this.Ib = t.e("span", {
            className: "vjs-control-text",
            innerHTML: this.v(this.ta) || "Need Text"
        }), this.B.appendChild(this.Ib), s.appendChild(this.B)), s
    }, s.U = function () {
        return "vjs-control " + t.a.prototype.U.call(this)
    }, s.u = m(), s.kb = function () {
        t.b(document, "keydown", t.bind(this, this.ka))
    }, s.ka = function (t) {
        (32 == t.which || 13 == t.which) && (t.preventDefault(), this.u())
    }, s.jb = function () {
        t.n(document, "keydown", t.bind(this, this.ka))
    }, t.T = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i), this.Hd = this.da(this.q.barName), this.handle = this.da(this.q.handleName), this.b("mousedown", this.lb), this.b("touchstart", this.lb), this.b("focus", this.kb), this.b("blur", this.jb), this.b("click", this.u), this.b(e, "controlsvisible", this.update), this.b(e, this.Uc, this.update)
        }
    }), s = t.T.prototype, s.e = function (e, i) {
        return i = i || {}, i.className += " vjs-slider", i = t.i.D({
            role: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        }, i), t.a.prototype.e.call(this, e, i)
    }, s.lb = function (e) {
        e.preventDefault(), t.Id(), this.p("vjs-sliding"), this.b(document, "mousemove", this.la), this.b(document, "mouseup", this.Ba), this.b(document, "touchmove", this.la), this.b(document, "touchend", this.Ba), this.la(e)
    }, s.la = m(), s.Ba = function () {
        t.Ye(), this.r("vjs-sliding"), this.n(document, "mousemove", this.la), this.n(document, "mouseup", this.Ba), this.n(document, "touchmove", this.la), this.n(document, "touchend", this.Ba), this.update()
    }, s.update = function () {
        if (this.c) {
            var e, i = this.Qb(), s = this.handle, n = this.Hd;
            if (("number" != typeof i || i !== i || 0 > i || 1 / 0 === i) && (i = 0), e = i, s) {
                e = this.c.offsetWidth;
                var r = s.m().offsetWidth;
                e = r ? r / e : 0, i *= 1 - e, e = i + e / 2, s.m().style.left = t.round(100 * i, 2) + "%"
            }
            n && (n.m().style.width = t.round(100 * e, 2) + "%")
        }
    }, s.kb = function () {
        this.b(document, "keydown", this.ka)
    }, s.ka = function (t) {
        37 == t.which || 40 == t.which ? (t.preventDefault(), this.fd()) : (38 == t.which || 39 == t.which) && (t.preventDefault(), this.gd())
    }, s.jb = function () {
        this.n(document, "keydown", this.ka)
    }, s.u = function (t) {
        t.stopImmediatePropagation(), t.preventDefault()
    }, t.ga = t.a.extend(), t.ga.prototype.defaultValue = 0,t.ga.prototype.e = function (e, i) {
        return i = i || {}, i.className += " vjs-slider-handle", i = t.i.D({innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"}, i), t.a.prototype.e.call(this, "div", i)
    },t.qa = t.a.extend(),t.qa.prototype.e = function () {
        var e = this.options().zc || "ul";
        return this.B = t.e(e, {className: "vjs-menu-content"}), e = t.a.prototype.e.call(this, "div", {
            append: this.B,
            className: "vjs-menu"
        }), e.appendChild(this.B), t.b(e, "click", function (t) {
            t.preventDefault(), t.stopImmediatePropagation()
        }), e
    },t.M = t.w.extend({
        l: function (e, i) {
            t.w.call(this, e, i), this.selected(i.selected)
        }
    }),t.M.prototype.e = function (e, i) {
        return t.w.prototype.e.call(this, "li", t.i.D({className: "vjs-menu-item", innerHTML: this.v(this.q.label)}, i))
    },t.M.prototype.u = function () {
        this.selected(f)
    },t.M.prototype.selected = function (t) {
        t ? (this.p("vjs-selected"), this.c.setAttribute("aria-selected", f)) : (this.r("vjs-selected"), this.c.setAttribute("aria-selected", l))
    },t.O = t.w.extend({
        l: function (e, i) {
            t.w.call(this, e, i), this.update(), this.b("keydown", this.ka), this.c.setAttribute("aria-haspopup", f), this.c.setAttribute("role", "button")
        }
    }),s = t.O.prototype,s.update = function () {
        var t = this.La();
        this.za && this.removeChild(this.za), this.za = t, this.aa(t), this.H && 0 === this.H.length ? this.X() : this.H && 1 < this.H.length && this.show()
    },s.Ja = l,s.La = function () {
        var e = new t.qa(this.d);
        if (this.options().title && e.wa().appendChild(t.e("li", {
                className: "vjs-menu-title",
                innerHTML: t.va(this.options().title),
                Te: -1
            })), this.H = this.createItems())for (var i = 0; i < this.H.length; i++)fa(e, this.H[i]);
        return e
    },s.Ka = m(),s.U = function () {
        return this.className + " vjs-menu-button " + t.w.prototype.U.call(this)
    },s.kb = m(),s.jb = m(),s.u = function () {
        this.N("mouseout", t.bind(this, function () {
            G(this.za), this.c.blur()
        })), this.Ja ? H(this) : ga(this)
    },s.ka = function (t) {
        32 == t.which || 13 == t.which ? (this.Ja ? H(this) : ga(this), t.preventDefault()) : 27 == t.which && (this.Ja && H(this), t.preventDefault())
    },t.J = function (e) {
        "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : "object" == typeof e && t.i.D(this, e), this.message || (this.message = t.J.Pd[this.code] || "")
    },t.J.prototype.code = 0,t.J.prototype.message = "",t.J.prototype.status = j,t.J.gb = "MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" "),t.J.Pd = {
        1: "You aborted the video playback",
        2: "A network error caused the video download to fail part-way.",
        3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
        4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
        5: "The video is encrypted and we do not have the keys to decrypt it."
    };
    for (var I = 0; I < t.J.gb.length; I++)t.J[t.J.gb[I]] = I, t.J.prototype[t.J.gb[I]] = I;
    var J, ha, K, L;
    for (J = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], ha = J[0], L = 0; L < J.length; L++)if (J[L][1] in document) {
        K = J[L];
        break
    }
    if (K)for (t.bb.Pb = {}, L = 0; L < K.length; L++)t.bb.Pb[ha[L]] = K[L];
    t.Player = t.a.extend({
        l: function (e, i, s) {
            this.L = e, e.id = e.id || "vjs_video_" + t.s++, this.Ue = e && t.Oa(e), i = t.i.D(ia(e), i), this.Pc = i.language || t.options.language, this.ke = i.languages || t.options.languages, this.K = {}, this.Vc = i.poster || "", this.Jb = !!i.controls, e.controls = l, i.$c = l, ja(this, "audio" === this.L.nodeName.toLowerCase()), t.a.call(this, this, i, s), this.controls() ? this.p("vjs-controls-enabled") : this.p("vjs-controls-disabled"), ja(this) && this.p("vjs-audio"), t.Ca[this.Qa] = this, i.plugins && t.i.ca(i.plugins, function (t, e) {
                this[t](e)
            }, this);
            var n, r, o, a, c;
            n = t.bind(this, this.reportUserActivity), this.b("mousedown", function () {
                n(), this.clearInterval(r), r = this.setInterval(n, 250)
            }), this.b("mousemove", function (t) {
                (t.screenX != a || t.screenY != c) && (a = t.screenX, c = t.screenY, n())
            }), this.b("mouseup", function () {
                n(), this.clearInterval(r)
            }), this.b("keydown", n), this.b("keyup", n), this.setInterval(function () {
                if (this.Fa) {
                    this.Fa = l, this.userActive(f), this.clearTimeout(o);
                    var t = this.options().inactivityTimeout;
                    t > 0 && (o = this.setTimeout(function () {
                        this.Fa || this.userActive(l)
                    }, t))
                }
            }, 250)
        }
    }), s = t.Player.prototype, s.language = function (t) {
        return t === b ? this.Pc : (this.Pc = t, this)
    }, s.languages = n("ke"), s.q = t.options, s.dispose = function () {
        this.o("dispose"), this.n("dispose"), t.Ca[this.Qa] = j, this.L && this.L.player && (this.L.player = j), this.c && this.c.player && (this.c.player = j), this.h && this.h.dispose(), t.a.prototype.dispose.call(this)
    }, s.e = function () {
        var e, i = this.c = t.a.prototype.e.call(this, "div"), s = this.L;
        return s.removeAttribute("width"), s.removeAttribute("height"), e = t.Oa(s), t.i.ca(e, function (t) {
            "class" == t ? i.className = e[t] : i.setAttribute(t, e[t])
        }), s.id += "_html5_api", s.className = "vjs-tech", s.player = i.player = this, this.p("vjs-paused"), this.width(this.q.width, f), this.height(this.q.height, f), s.de = s.networkState, s.parentNode && s.parentNode.insertBefore(i, s), t.Rb(s, i), this.c = i, this.b("loadstart", this.ue), this.b("waiting", this.Ae), this.b(["canplay", "canplaythrough", "playing", "ended"], this.ze), this.b("seeking", this.xe), this.b("seeked", this.we), this.b("ended", this.re), this.b("play", this.Xb), this.b("firstplay", this.se), this.b("pause", this.Wb), this.b("progress", this.ve), this.b("durationchange", this.Sc), this.b("fullscreenchange", this.te), i
    }, s.ue = function () {
        this.r("vjs-ended"), this.error(j), this.paused() ? la(this, l) : this.o("firstplay")
    }, s.Jc = l, s.Xb = function () {
        this.r("vjs-ended"), this.r("vjs-paused"), this.p("vjs-playing"), la(this, f)
    }, s.Ae = function () {
        this.p("vjs-waiting")
    }, s.ze = function () {
        this.r("vjs-waiting")
    }, s.xe = function () {
        this.p("vjs-seeking")
    }, s.we = function () {
        this.r("vjs-seeking")
    }, s.se = function () {
        this.q.starttime && this.currentTime(this.q.starttime), this.p("vjs-has-started")
    }, s.Wb = function () {
        this.r("vjs-playing"), this.p("vjs-paused")
    }, s.ve = function () {
        1 == this.bufferedPercent() && this.o("loadedalldata")
    }, s.re = function () {
        this.p("vjs-ended"), this.q.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause()
    }, s.Sc = function () {
        var t = M(this, "duration");
        t && (0 > t && (t = 1 / 0), this.duration(t), 1 / 0 === t ? this.p("vjs-live") : this.r("vjs-live"))
    }, s.te = function () {
        this.isFullscreen() ? this.p("vjs-fullscreen") : this.r("vjs-fullscreen")
    }, s.play = function () {
        return N(this, "play"), this
    }, s.pause = function () {
        return N(this, "pause"), this
    }, s.paused = function () {
        return M(this, "paused") === l ? l : f
    }, s.currentTime = function (t) {
        return t !== b ? (N(this, "setCurrentTime", t), this) : this.K.currentTime = M(this, "currentTime") || 0
    }, s.duration = function (t) {
        return t !== b ? (this.K.duration = parseFloat(t), this) : (this.K.duration === b && this.Sc(), this.K.duration || 0)
    }, s.remainingTime = function () {
        return this.duration() - this.currentTime()
    }, s.buffered = function () {
        var e = M(this, "buffered");
        return e && e.length || (e = t.xa(0, 0)), e
    }, s.bufferedPercent = function () {
        var t, e, i = this.duration(), s = this.buffered(), n = 0;
        if (!i)return 0;
        for (var r = 0; r < s.length; r++)t = s.start(r), e = s.end(r), e > i && (e = i), n += e - t;
        return n / i
    }, s.volume = function (e) {
        return e !== b ? (e = Math.max(0, Math.min(1, parseFloat(e))), this.K.volume = e, N(this, "setVolume", e), t.Je(e), this) : (e = parseFloat(M(this, "volume")), isNaN(e) ? 1 : e)
    }, s.muted = function (t) {
        return t !== b ? (N(this, "setMuted", t), this) : M(this, "muted") || l
    }, s.Sa = function () {
        return M(this, "supportsFullScreen") || l
    }, s.Mc = l, s.isFullscreen = function (t) {
        return t !== b ? (this.Mc = !!t, this) : this.Mc
    }, s.isFullScreen = function (e) {
        return t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'), this.isFullscreen(e)
    }, s.requestFullscreen = function () {
        var e = t.bb.Pb;
        return this.isFullscreen(f), e ? (t.b(document, e.fullscreenchange, t.bind(this, function (i) {
            this.isFullscreen(document[e.fullscreenElement]), this.isFullscreen() === l && t.n(document, e.fullscreenchange, arguments.callee), this.o("fullscreenchange")
        })), this.c[e.requestFullscreen]()) : this.h.Sa() ? N(this, "enterFullScreen") : (this.Fc(), this.o("fullscreenchange")), this
    }, s.requestFullScreen = function () {
        return t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'), this.requestFullscreen()
    }, s.exitFullscreen = function () {
        var e = t.bb.Pb;
        return this.isFullscreen(l), e ? document[e.exitFullscreen]() : this.h.Sa() ? N(this, "exitFullScreen") : (this.Lb(), this.o("fullscreenchange")), this
    }, s.cancelFullScreen = function () {
        return t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"), this.exitFullscreen()
    }, s.Fc = function () {
        this.ge = f, this.Rd = document.documentElement.style.overflow, t.b(document, "keydown", t.bind(this, this.Gc)), document.documentElement.style.overflow = "hidden", t.p(document.body, "vjs-full-window"), this.o("enterFullWindow")
    }, s.Gc = function (t) {
        27 === t.keyCode && (this.isFullscreen() === f ? this.exitFullscreen() : this.Lb())
    }, s.Lb = function () {
        this.ge = l, t.n(document, "keydown", this.Gc), document.documentElement.style.overflow = this.Rd, t.r(document.body, "vjs-full-window"), this.o("exitFullWindow")
    }, s.selectSource = function (e) {
        for (var i = 0, s = this.q.techOrder; i < s.length; i++) {
            var n = t.va(s[i]), r = window.videojs[n];
            if (r) {
                if (r.isSupported())for (var o = 0, a = e; o < a.length; o++) {
                    var c = a[o];
                    if (r.canPlaySource(c))return {source: c, h: n}
                }
            } else t.log.error('The "' + n + '" tech is undefined. Skipped browser support check for that tech.')
        }
        return l
    }, s.src = function (e) {
        return e === b ? M(this, "src") : (t.i.isArray(e) ? ma(this, e) : "string" == typeof e ? this.src({src: e}) : e instanceof Object && (e.type && !window.videojs[this.Ta].canPlaySource(e) ? ma(this, [e]) : (this.K.src = e.src, this.Cc = e.type || "", this.I(function () {
            window.videojs[this.Ta].prototype.hasOwnProperty("setSource") ? N(this, "setSource", e) : N(this, "src", e.src), "auto" == this.q.preload && this.load(), this.q.autoplay && this.play()
        }))), this)
    }, s.load = function () {
        return N(this, "load"), this
    }, s.currentSrc = function () {
        return M(this, "currentSrc") || this.K.src || ""
    }, s.Nd = function () {
        return this.Cc || ""
    }, s.Ra = function (t) {
        return t !== b ? (N(this, "setPreload", t), this.q.preload = t, this) : M(this, "preload")
    }, s.autoplay = function (t) {
        return t !== b ? (N(this, "setAutoplay", t), this.q.autoplay = t, this) : M(this, "autoplay")
    }, s.loop = function (t) {
        return t !== b ? (N(this, "setLoop", t), this.q.loop = t, this) : M(this, "loop")
    }, s.poster = function (t) {
        return t === b ? this.Vc : (t || (t = ""), this.Vc = t, N(this, "setPoster", t), this.o("posterchange"), this)
    }, s.controls = function (t) {
        return t !== b ? (t = !!t, this.Jb !== t && ((this.Jb = t) ? (this.r("vjs-controls-disabled"), this.p("vjs-controls-enabled"), this.o("controlsenabled")) : (this.r("vjs-controls-enabled"), this.p("vjs-controls-disabled"), this.o("controlsdisabled"))), this) : this.Jb
    }, t.Player.prototype.bc, s = t.Player.prototype, s.usingNativeControls = function (t) {
        return t !== b ? (t = !!t, this.bc !== t && ((this.bc = t) ? (this.p("vjs-using-native-controls"), this.o("usingnativecontrols")) : (this.r("vjs-using-native-controls"), this.o("usingcustomcontrols"))), this) : this.bc
    }, s.ja = j, s.error = function (e) {
        return e === b ? this.ja : e === j ? (this.ja = e, this.r("vjs-error"), this) : (this.ja = e instanceof t.J ? e : new t.J(e), this.o("error"), this.p("vjs-error"), t.log.error("(CODE:" + this.ja.code + " " + t.J.gb[this.ja.code] + ")", this.ja.message, this.ja), this)
    }, s.ended = function () {
        return M(this, "ended")
    }, s.seeking = function () {
        return M(this, "seeking")
    }, s.seekable = function () {
        return M(this, "seekable")
    }, s.Fa = f, s.reportUserActivity = function () {
        this.Fa = f
    }, s.ac = f, s.userActive = function (t) {
        return t !== b ? (t = !!t, t !== this.ac && ((this.ac = t) ? (this.Fa = f, this.r("vjs-user-inactive"), this.p("vjs-user-active"), this.o("useractive")) : (this.Fa = l, this.h && this.h.N("mousemove", function (t) {
            t.stopPropagation(), t.preventDefault()
        }), this.r("vjs-user-active"), this.p("vjs-user-inactive"), this.o("userinactive"))), this) : this.ac
    }, s.playbackRate = function (t) {
        return t !== b ? (N(this, "setPlaybackRate", t), this) : this.h && this.h.featuresPlaybackRate ? M(this, "playbackRate") : 1
    }, s.Lc = l, s.networkState = function () {
        return M(this, "networkState")
    }, s.readyState = function () {
        return M(this, "readyState")
    }, s.textTracks = function () {
        return this.h && this.h.textTracks()
    }, s.Y = function () {
        return this.h && this.h.remoteTextTracks()
    }, s.addTextTrack = function (t, e, i) {
        return this.h && this.h.addTextTrack(t, e, i)
    }, s.ha = function (t) {
        return this.h && this.h.addRemoteTextTrack(t)
    }, s.Da = function (t) {
        this.h && this.h.removeRemoteTextTrack(t)
    }, t.tb = t.a.extend(), t.tb.prototype.q = {
        tf: "play",
        children: {
            playToggle: {},
            currentTimeDisplay: {},
            timeDivider: {},
            durationDisplay: {},
            remainingTimeDisplay: {},
            liveDisplay: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeControl: {},
            muteToggle: {},
            playbackRateMenuButton: {},
            subtitlesButton: {},
            captionsButton: {},
            chaptersButton: {}
        }
    }, t.tb.prototype.e = function () {
        return t.e("div", {className: "vjs-control-bar"})
    }, t.hc = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i)
        }
    }), t.hc.prototype.e = function () {
        var e = t.a.prototype.e.call(this, "div", {className: "vjs-live-controls vjs-control"});
        return this.B = t.e("div", {
            className: "vjs-live-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Stream Type") + "</span>" + this.v("LIVE"),
            "aria-live": "off"
        }), e.appendChild(this.B), e
    }, t.kc = t.w.extend({
        l: function (e, i) {
            t.w.call(this, e, i), this.b(e, "play", this.Xb), this.b(e, "pause", this.Wb)
        }
    }), s = t.kc.prototype, s.ta = "Play", s.U = function () {
        return "vjs-play-control " + t.w.prototype.U.call(this)
    }, s.u = function () {
        this.d.paused() ? this.d.play() : this.d.pause()
    }, s.Xb = function () {
        this.r("vjs-paused"), this.p("vjs-playing"), this.c.children[0].children[0].innerHTML = this.v("Pause")
    }, s.Wb = function () {
        this.r("vjs-playing"), this.p("vjs-paused"), this.c.children[0].children[0].innerHTML = this.v("Play")
    }, t.ub = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i), this.b(e, "timeupdate", this.fa)
        }
    }), t.ub.prototype.e = function () {
        var e = t.a.prototype.e.call(this, "div", {className: "vjs-current-time vjs-time-controls vjs-control"});
        return this.B = t.e("div", {
            className: "vjs-current-time-display",
            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
            "aria-live": "off"
        }), e.appendChild(this.B), e
    }, t.ub.prototype.fa = function () {
        var e = this.d.nb ? this.d.K.currentTime : this.d.currentTime();
        this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Current Time") + "</span> " + t.Na(e, this.d.duration())
    }, t.vb = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i), this.b(e, "timeupdate", this.fa), this.b(e, "loadedmetadata", this.fa)
        }
    }), t.vb.prototype.e = function () {
        var e = t.a.prototype.e.call(this, "div", {className: "vjs-duration vjs-time-controls vjs-control"});
        return this.B = t.e("div", {
            className: "vjs-duration-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> 0:00",
            "aria-live": "off"
        }), e.appendChild(this.B), e
    }, t.vb.prototype.fa = function () {
        var e = this.d.duration();
        e && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> " + t.Na(e))
    }, t.qc = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i)
        }
    }), t.qc.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        })
    }, t.Cb = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i), this.b(e, "timeupdate", this.fa)
        }
    }), t.Cb.prototype.e = function () {
        var e = t.a.prototype.e.call(this, "div", {className: "vjs-remaining-time vjs-time-controls vjs-control"});
        return this.B = t.e("div", {
            className: "vjs-remaining-time-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -0:00",
            "aria-live": "off"
        }), e.appendChild(this.B), e
    }, t.Cb.prototype.fa = function () {
        this.d.duration() && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -" + t.Na(this.d.remainingTime()))
    }, t.Ya = t.w.extend({
        l: function (e, i) {
            t.w.call(this, e, i)
        }
    }), t.Ya.prototype.ta = "Fullscreen", t.Ya.prototype.U = function () {
        return "vjs-fullscreen-control " + t.w.prototype.U.call(this)
    }, t.Ya.prototype.u = function () {
        this.d.isFullscreen() ? (this.d.exitFullscreen(), this.Ib.innerHTML = this.v("Fullscreen")) : (this.d.requestFullscreen(), this.Ib.innerHTML = this.v("Non-Fullscreen"))
    }, t.Bb = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i)
        }
    }), t.Bb.prototype.q = {children: {seekBar: {}}},t.Bb.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {className: "vjs-progress-control vjs-control"})
    },t.nc = t.T.extend({
        l: function (e, i) {
            t.T.call(this, e, i), this.b(e, "timeupdate", this.Ea), e.I(t.bind(this, this.Ea))
        }
    }),s = t.nc.prototype,s.q = {
        children: {loadProgressBar: {}, playProgressBar: {}, seekHandle: {}},
        barName: "playProgressBar",
        handleName: "seekHandle"
    },s.Uc = "timeupdate",s.e = function () {
        return t.T.prototype.e.call(this, "div", {className: "vjs-progress-holder", "aria-label": "video progress bar"})
    },s.Ea = function () {
        var e = this.d.nb ? this.d.K.currentTime : this.d.currentTime();
        this.c.setAttribute("aria-valuenow", t.round(100 * this.Qb(), 2)), this.c.setAttribute("aria-valuetext", t.Na(e, this.d.duration()))
    },s.Qb = function () {
        return this.d.currentTime() / this.d.duration()
    },s.lb = function (e) {
        t.T.prototype.lb.call(this, e), this.d.nb = f, this.d.p("vjs-scrubbing"), this.af = !this.d.paused(), this.d.pause()
    },s.la = function (t) {
        t = ea(this, t) * this.d.duration(), t == this.d.duration() && (t -= .1), this.d.currentTime(t)
    },s.Ba = function (e) {
        t.T.prototype.Ba.call(this, e), this.d.nb = l, this.d.r("vjs-scrubbing"), this.af && this.d.play()
    },s.gd = function () {
        this.d.currentTime(this.d.currentTime() + 5)
    },s.fd = function () {
        this.d.currentTime(this.d.currentTime() - 5)
    },t.yb = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i), this.b(e, "progress", this.update)
        }
    }),t.yb.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text"><span>' + this.v("Loaded") + "</span>: 0%</span>"
        })
    },t.yb.prototype.update = function () {
        var e, i, s, n, r = this.d.buffered();
        e = this.d.duration();
        var o, a = this.d;
        for (o = a.buffered(), a = a.duration(), o = o.end(o.length - 1), o > a && (o = a), a = this.c.children, this.c.style.width = 100 * (o / e || 0) + "%", e = 0; e < r.length; e++)i = r.start(e), s = r.end(e), (n = a[e]) || (n = this.c.appendChild(t.e())), n.style.left = 100 * (i / o || 0) + "%", n.style.width = 100 * ((s - i) / o || 0) + "%";
        for (e = a.length; e > r.length; e--)this.c.removeChild(a[e - 1])
    },t.jc = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i)
        }
    }),t.jc.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-play-progress",
            innerHTML: '<span class="vjs-control-text"><span>' + this.v("Progress") + "</span>: 0%</span>"
        })
    },t.Za = t.ga.extend({
        l: function (e, i) {
            t.ga.call(this, e, i), this.b(e, "timeupdate", this.fa)
        }
    }),t.Za.prototype.defaultValue = "00:00",t.Za.prototype.e = function () {
        return t.ga.prototype.e.call(this, "div", {className: "vjs-seek-handle", "aria-live": "off"})
    },t.Za.prototype.fa = function () {
        var e = this.d.nb ? this.d.K.currentTime : this.d.currentTime();
        this.c.innerHTML = '<span class="vjs-control-text">' + t.Na(e, this.d.duration()) + "</span>"
    },t.Fb = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i), e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"), this.b(e, "loadstart", function () {
                e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
            })
        }
    }),t.Fb.prototype.q = {children: {volumeBar: {}}},t.Fb.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {className: "vjs-volume-control vjs-control"})
    },t.Eb = t.T.extend({
        l: function (e, i) {
            t.T.call(this, e, i), this.b(e, "volumechange", this.Ea), e.I(t.bind(this, this.Ea))
        }
    }),s = t.Eb.prototype,s.Ea = function () {
        this.c.setAttribute("aria-valuenow", t.round(100 * this.d.volume(), 2)), this.c.setAttribute("aria-valuetext", t.round(100 * this.d.volume(), 2) + "%")
    },s.q = {
        children: {volumeLevel: {}, volumeHandle: {}},
        barName: "volumeLevel",
        handleName: "volumeHandle"
    },s.Uc = "volumechange",s.e = function () {
        return t.T.prototype.e.call(this, "div", {className: "vjs-volume-bar", "aria-label": "volume level"})
    },s.la = function (t) {
        this.d.muted() && this.d.muted(l), this.d.volume(ea(this, t))
    },s.Qb = function () {
        return this.d.muted() ? 0 : this.d.volume()
    },s.gd = function () {
        this.d.volume(this.d.volume() + .1)
    },s.fd = function () {
        this.d.volume(this.d.volume() - .1)
    },t.rc = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i)
        }
    }),t.rc.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    },t.Gb = t.ga.extend(),t.Gb.prototype.defaultValue = "00:00",t.Gb.prototype.e = function () {
        return t.ga.prototype.e.call(this, "div", {className: "vjs-volume-handle"})
    },t.ra = t.w.extend({
        l: function (e, i) {
            t.w.call(this, e, i), this.b(e, "volumechange", this.update), e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"), this.b(e, "loadstart", function () {
                e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
            })
        }
    }),t.ra.prototype.e = function () {
        return t.w.prototype.e.call(this, "div", {
            className: "vjs-mute-control vjs-control",
            innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
        })
    },t.ra.prototype.u = function () {
        this.d.muted(this.d.muted() ? l : f)
    },t.ra.prototype.update = function () {
        var e = this.d.volume(), i = 3;
        for (0 === e || this.d.muted() ? i = 0 : .33 > e ? i = 1 : .67 > e && (i = 2), this.d.muted() ? this.c.children[0].children[0].innerHTML != this.v("Unmute") && (this.c.children[0].children[0].innerHTML = this.v("Unmute")) : this.c.children[0].children[0].innerHTML != this.v("Mute") && (this.c.children[0].children[0].innerHTML = this.v("Mute")), e = 0; 4 > e; e++)t.r(this.c, "vjs-vol-" + e);
        t.p(this.c, "vjs-vol-" + i)
    },t.Ha = t.O.extend({
        l: function (e, i) {
            t.O.call(this, e, i), this.b(e, "volumechange", this.bf), e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"), this.b(e, "loadstart", function () {
                e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
            }), this.p("vjs-menu-button")
        }
    }),t.Ha.prototype.La = function () {
        var e = new t.qa(this.d, {zc: "div"}), i = new t.Eb(this.d, this.q.volumeBar);
        return i.b("focus", function () {
            e.p("vjs-lock-showing")
        }), i.b("blur", function () {
            G(e)
        }), e.aa(i), e
    },t.Ha.prototype.u = function () {
        t.ra.prototype.u.call(this), t.O.prototype.u.call(this)
    },t.Ha.prototype.e = function () {
        return t.w.prototype.e.call(this, "div", {
            className: "vjs-volume-menu-button vjs-menu-button vjs-control",
            innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
        })
    },t.Ha.prototype.bf = t.ra.prototype.update,t.lc = t.O.extend({
        l: function (e, i) {
            t.O.call(this, e, i), this.pd(), this.od(), this.b(e, "loadstart", this.pd), this.b(e, "ratechange", this.od)
        }
    }),s = t.lc.prototype,s.ta = "Playback Rate",s.className = "vjs-playback-rate",s.e = function () {
        var e = t.O.prototype.e.call(this);
        return this.Oc = t.e("div", {className: "vjs-playback-rate-value", innerHTML: 1}), e.appendChild(this.Oc), e
    },s.La = function () {
        var e = new t.qa(this.k()), i = this.k().options().playbackRates;
        if (i)for (var s = i.length - 1; s >= 0; s--)e.aa(new t.Ab(this.k(), {rate: i[s] + "x"}));
        return e
    },s.Ea = function () {
        this.m().setAttribute("aria-valuenow", this.k().playbackRate())
    },s.u = function () {
        for (var t = this.k().playbackRate(), e = this.k().options().playbackRates, i = e[0], s = 0; s < e.length; s++)if (e[s] > t) {
            i = e[s];
            break
        }
        this.k().playbackRate(i)
    },s.pd = function () {
        na(this) ? this.r("vjs-hidden") : this.p("vjs-hidden")
    },s.od = function () {
        na(this) && (this.Oc.innerHTML = this.k().playbackRate() + "x")
    },t.Ab = t.M.extend({
        zc: "button", l: function (e, i) {
            var s = this.label = i.rate, n = this.Wc = parseFloat(s, 10);
            i.label = s, i.selected = 1 === n, t.M.call(this, e, i), this.b(e, "ratechange", this.update)
        }
    }),t.Ab.prototype.u = function () {
        t.M.prototype.u.call(this), this.k().playbackRate(this.Wc)
    },t.Ab.prototype.update = function () {
        this.selected(this.k().playbackRate() == this.Wc)
    },t.mc = t.w.extend({
        l: function (e, i) {
            t.w.call(this, e, i), this.update(), e.b("posterchange", t.bind(this, this.update))
        }
    }),s = t.mc.prototype,s.dispose = function () {
        this.k().n("posterchange", this.update), t.w.prototype.dispose.call(this)
    },s.e = function () {
        var e = t.e("div", {className: "vjs-poster", tabIndex: -1});
        return t.td || (this.Mb = t.e("img"), e.appendChild(this.Mb)), e
    },s.update = function () {
        var t = this.k().poster();
        this.na(t), t ? this.show() : this.X()
    },s.na = function (t) {
        var e;
        this.Mb ? this.Mb.src = t : (e = "", t && (e = 'url("' + t + '")'), this.c.style.backgroundImage = e)
    },s.u = function () {
        this.d.play()
    },t.ic = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i)
        }
    }),t.ic.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {className: "vjs-loading-spinner"})
    },t.rb = t.w.extend(),t.rb.prototype.e = function () {
        return t.w.prototype.e.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: '<span aria-hidden="true"></span>',
            "aria-label": "play video"
        })
    },t.rb.prototype.u = function () {
        this.d.play()
    },t.wb = t.a.extend({
        l: function (e, i) {
            t.a.call(this, e, i), this.update(), this.b(e, "error", this.update)
        }
    }),t.wb.prototype.e = function () {
        var e = t.a.prototype.e.call(this, "div", {className: "vjs-error-display"});
        return this.B = t.e("div"), e.appendChild(this.B), e
    },t.wb.prototype.update = function () {
        this.k().error() && (this.B.innerHTML = this.v(this.k().error().message))
    };
    var O;
    t.j = t.a.extend({
        l: function (e, i, s) {
            i = i || {}, i.$c = l, t.a.call(this, e, i, s), this.featuresProgressEvents || this.oe(), this.featuresTimeupdateEvents || this.pe(), this.ce(), this.featuresNativeTextTracks || this.Sd(), this.ee()
        }
    }), s = t.j.prototype, s.ce = function () {
        var t, e;
        t = this.k(), e = function () {
            t.controls() && !t.usingNativeControls() && this.Fd()
        }, this.I(e), this.b(t, "controlsenabled", e), this.b(t, "controlsdisabled", this.Ee), this.I(function () {
            this.networkState && 0 < this.networkState() && this.k().o("loadstart")
        })
    }, s.Fd = function () {
        var t;
        this.b("mousedown", this.u), this.b("touchstart", function () {
            t = this.d.userActive()
        }), this.b("touchmove", function () {
            t && this.k().reportUserActivity()
        }), this.b("touchend", function (t) {
            t.preventDefault()
        }), da(this), this.b("tap", this.ye)
    }, s.Ee = function () {
        this.n("tap"), this.n("touchstart"), this.n("touchmove"), this.n("touchleave"), this.n("touchcancel"), this.n("touchend"), this.n("click"), this.n("mousedown")
    }, s.u = function (t) {
        0 === t.button && this.k().controls() && (this.k().paused() ? this.k().play() : this.k().pause())
    }, s.ye = function () {
        this.k().userActive(!this.k().userActive())
    }, s.oe = function () {
        this.Qc = f, this.Xe()
    }, s.ne = function () {
        this.Qc = l, this.hd()
    }, s.Xe = function () {
        this.De = this.setInterval(function () {
            var t = this.k().bufferedPercent();
            this.Jd != t && this.k().o("progress"), this.Jd = t, 1 === t && this.hd()
        }, 500)
    }, s.hd = function () {
        this.clearInterval(this.De)
    }, s.pe = function () {
        var t = this.d;
        this.Vb = f, this.b(t, "play", this.md), this.b(t, "pause", this.qb), this.N("timeupdate", function () {
            this.featuresTimeupdateEvents = f, this.Rc()
        })
    }, s.Rc = function () {
        var t = this.d;
        this.Vb = l, this.qb(), this.n(t, "play", this.md), this.n(t, "pause", this.qb)
    }, s.md = function () {
        this.Bc && this.qb(), this.Bc = this.setInterval(function () {
            this.k().o("timeupdate")
        }, 250)
    }, s.qb = function () {
        this.clearInterval(this.Bc), this.k().o("timeupdate")
    }, s.dispose = function () {
        this.Qc && this.ne(), this.Vb && this.Rc(), t.a.prototype.dispose.call(this)
    }, s.Zb = function () {
        this.Vb && this.k().o("timeupdate")
    }, s.ee = function () {
        function e() {
            var t = s.da("textTrackDisplay");
            t && t.C()
        }

        var i, s = this.d;
        (i = this.textTracks()) && (i.addEventListener("removetrack", e), i.addEventListener("addtrack", e), this.b("dispose", t.bind(this, function () {
            i.removeEventListener("removetrack", e), i.removeEventListener("addtrack", e)
        })))
    }, s.Sd = function () {
        var e, i, s, n = this.d;
        window.WebVTT || (s = document.createElement("script"), s.src = n.options()["vtt.js"] || "../node_modules/vtt.js/dist/vtt.js", n.m().appendChild(s), window.WebVTT = f), (i = this.textTracks()) && (e = function () {
            var e, i, s;
            for (s = n.da("textTrackDisplay"), s.C(), e = 0; e < this.length; e++)i = this[e], i.removeEventListener("cuechange", t.bind(s, s.C)), "showing" === i.mode && i.addEventListener("cuechange", t.bind(s, s.C))
        }, i.addEventListener("change", e), this.b("dispose", t.bind(this, function () {
            i.removeEventListener("change", e)
        })))
    }, s.textTracks = function () {
        return this.d.ld = this.d.ld || new t.F, this.d.ld
    }, s.Y = function () {
        return this.d.Xc = this.d.Xc || new t.F, this.d.Xc
    }, O = function (e, i, s, n, r) {
        var o = e.textTracks();
        return r = r || {}, r.kind = i, s && (r.label = s), n && (r.language = n), r.player = e.d, e = new t.t(r), P(o, e), e
    }, t.j.prototype.addTextTrack = function (t, e, i) {
        if (!t)throw Error("TextTrack kind is required but was not provided");
        return O(this, t, e, i)
    }, t.j.prototype.ha = function (t) {
        return t = O(this, t.kind, t.label, t.language, t), P(this.Y(), t), {S: t}
    }, t.j.prototype.Da = function (t) {
        Q(this.textTracks(), t), Q(this.Y(), t)
    }, t.j.prototype.bd = m(), t.j.prototype.featuresVolumeControl = f, t.j.prototype.featuresFullscreenResize = l, t.j.prototype.featuresPlaybackRate = l, t.j.prototype.featuresProgressEvents = l, t.j.prototype.featuresTimeupdateEvents = l, t.j.prototype.featuresNativeTextTracks = l, t.j.dc = function (e) {
        e.registerSourceHandler = function (t, i) {
            var s = e.cd;
            s || (s = e.cd = []), i === b && (i = s.length), s.splice(i, 0, t)
        }, e.ob = function (t) {
            for (var i, s = e.cd || [], n = 0; n < s.length; n++)if (i = s[n].canHandleSource(t))return s[n];
            return j
        }, e.wc = function (t) {
            var i = e.ob(t);
            return i ? i.canHandleSource(t) : ""
        }, e.prototype.ma = function (i) {
            var s = e.ob(i);
            return s || (e.nativeSourceHandler ? s = e.nativeSourceHandler : t.log.error("No source hander found for the current source.")), this.ia(), this.n("dispose", this.ia), this.fb = i, this.$b = s.handleSource(i, this), this.b("dispose", this.ia), this
        }, e.prototype.ia = function () {
            this.$b && this.$b.dispose && this.$b.dispose()
        }
    }, t.media = {}, t.f = t.j.extend({
        l: function (e, i, s) {
            var n, r, o;
            for ((i.nativeCaptions === l || i.nativeTextTracks === l) && (this.featuresNativeTextTracks = l), t.j.call(this, e, i, s), s = t.f.xb.length - 1; s >= 0; s--)this.b(t.f.xb[s], this.Td);
            if ((i = i.source) && (this.c.currentSrc !== i.src || e.L && 3 === e.L.de) && this.ma(i), this.c.hasChildNodes()) {
                for (s = this.c.childNodes, n = s.length, i = []; n--;)r = s[n], o = r.nodeName.toLowerCase(), "track" === o && (this.featuresNativeTextTracks ? P(this.Y(), r.track) : i.push(r));
                for (s = 0; s < i.length; s++)this.c.removeChild(i[s])
            }
            if (this.featuresNativeTextTracks && this.b("loadstart", t.bind(this, this.be)), t.Db && e.options().nativeControlsForTouch === f) {
                var a, c, u, h;
                a = this, c = this.k(), i = c.controls(), a.c.controls = !!i, u = function () {
                    a.c.controls = f
                }, h = function () {
                    a.c.controls = l
                }, c.b("controlsenabled", u), c.b("controlsdisabled", h), i = function () {
                    c.n("controlsenabled", u), c.n("controlsdisabled", h)
                }, a.b("dispose", i), c.b("usingcustomcontrols", i), c.usingNativeControls(f)
            }
            e.I(function () {
                this.src() && this.L && this.q.autoplay && this.paused() && (delete this.L.poster, this.play())
            }), this.Va()
        }
    }), s = t.f.prototype, s.dispose = function () {
        t.f.Kb(this.c), t.j.prototype.dispose.call(this)
    }, s.e = function () {
        var e, i, s, n = this.d, r = n.L;
        if (!r || this.movingMediaElementInDOM === l) {
            if (r ? (s = r.cloneNode(l), t.f.Kb(r), r = s, n.L = j) : (r = t.e("video"), s = videojs.Z.Aa({}, n.Ue), (!t.Db || n.options().nativeControlsForTouch !== f) && delete s.controls, t.ad(r, t.i.D(s, {
                    id: n.id() + "_html5_api",
                    "class": "vjs-tech"
                }))), r.player = n, n.q.nd)for (s = 0; s < n.q.nd.length; s++)e = n.q.nd[s], i = document.createElement("track"), i.Tb = e.Tb, i.label = e.label, i.ed = e.ed, i.src = e.src, "default" in e && i.setAttribute("default", "default"), r.appendChild(i);
            t.Rb(r, n.m())
        }
        for (e = ["autoplay", "preload", "loop", "muted"], s = e.length - 1; s >= 0; s--) {
            i = e[s];
            var o = {};
            "undefined" != typeof n.q[i] && (o[i] = n.q[i]), t.ad(r, o)
        }
        return r
    }, s.be = function () {
        for (var t, e = this.c.querySelectorAll("track"), i = e.length, s = {
            captions: 1,
            subtitles: 1
        }; i--;)(t = e[i].S) && t.kind in s && !e[i]["default"] && (t.mode = "disabled")
    }, s.Td = function (t) {
        "error" == t.type && this.error() ? this.k().error(this.error().code) : (t.bubbles = l, this.k().o(t))
    }, s.play = function () {
        this.c.play()
    }, s.pause = function () {
        this.c.pause()
    }, s.paused = function () {
        return this.c.paused
    }, s.currentTime = function () {
        return this.c.currentTime
    }, s.Zb = function (e) {
        try {
            this.c.currentTime = e
        } catch (i) {
            t.log(i, "Video is not ready. (Video.js)")
        }
    }, s.duration = function () {
        return this.c.duration || 0
    }, s.buffered = function () {
        return this.c.buffered
    }, s.volume = function () {
        return this.c.volume
    }, s.Pe = function (t) {
        this.c.volume = t
    }, s.muted = function () {
        return this.c.muted
    }, s.Le = function (t) {
        this.c.muted = t
    }, s.width = function () {
        return this.c.offsetWidth
    }, s.height = function () {
        return this.c.offsetHeight
    }, s.Sa = function () {
        return "function" != typeof this.c.webkitEnterFullScreen || !/Android/.test(t.P) && /Chrome|Mac OS X 10.5/.test(t.P) ? l : f
    }, s.Ec = function () {
        var t = this.c;
        "webkitDisplayingFullscreen" in t && this.N("webkitbeginfullscreen", function () {
            this.d.isFullscreen(f), this.N("webkitendfullscreen", function () {
                this.d.isFullscreen(l), this.d.o("fullscreenchange")
            }), this.d.o("fullscreenchange")
        }), t.paused && t.networkState <= t.ff ? (this.c.play(), this.setTimeout(function () {
            t.pause(), t.webkitEnterFullScreen()
        }, 0)) : t.webkitEnterFullScreen()
    }, s.Ud = function () {
        this.c.webkitExitFullScreen()
    }, s.src = function (t) {
        var e = this.c.src;
        return t === b ? oa(e, this.dd) : void this.na(t)
    }, s.na = function (t) {
        this.c.src = t
    }, s.load = function () {
        this.c.load()
    }, s.currentSrc = function () {
        var t = this.c.currentSrc;
        return this.fb ? oa(t, this.fb.src) : t
    }, s.poster = function () {
        return this.c.poster
    }, s.bd = function (t) {
        this.c.poster = t
    }, s.Ra = function () {
        return this.c.Ra
    }, s.Ne = function (t) {
        this.c.Ra = t
    }, s.autoplay = function () {
        return this.c.autoplay
    }, s.Ie = function (t) {
        this.c.autoplay = t
    }, s.controls = function () {
        return this.c.controls
    }, s.loop = function () {
        return this.c.loop
    }, s.Ke = function (t) {
        this.c.loop = t
    }, s.error = function () {
        return this.c.error
    }, s.seeking = function () {
        return this.c.seeking
    }, s.seekable = function () {
        return this.c.seekable
    }, s.ended = function () {
        return this.c.ended
    }, s.playbackRate = function () {
        return this.c.playbackRate
    }, s.Me = function (t) {
        this.c.playbackRate = t
    }, s.networkState = function () {
        return this.c.networkState
    }, s.readyState = function () {
        return this.c.readyState
    }, s.textTracks = function () {
        return this.featuresNativeTextTracks ? this.c.textTracks : t.j.prototype.textTracks.call(this)
    }, s.addTextTrack = function (e, i, s) {
        return this.featuresNativeTextTracks ? this.c.addTextTrack(e, i, s) : t.j.prototype.addTextTrack.call(this, e, i, s)
    }, s.ha = function (e) {
        if (!this.featuresNativeTextTracks)return t.j.prototype.ha.call(this, e);
        var i = document.createElement("track");
        return e = e || {}, e.kind && (i.kind = e.kind), e.label && (i.label = e.label), (e.language || e.srclang) && (i.srclang = e.language || e.srclang), e["default"] && (i["default"] = e["default"]), e.id && (i.id = e.id), e.src && (i.src = e.src), this.m().appendChild(i), i.track.mode = "metadata" === i.S.kind ? "hidden" : "disabled", i.onload = function () {
            var t = i.track;
            2 <= i.readyState && ("metadata" === t.kind && "hidden" !== t.mode ? t.mode = "hidden" : "metadata" !== t.kind && "disabled" !== t.mode && (t.mode = "disabled"), i.onload = j)
        }, P(this.Y(), i.S), i
    }, s.Da = function (e) {
        if (!this.featuresNativeTextTracks)return t.j.prototype.Da.call(this, e);
        var i, s;
        for (Q(this.Y(), e), i = this.m().querySelectorAll("track"), s = 0; s < i.length; s++)if (i[s] === e || i[s].track === e) {
            i[s].parentNode.removeChild(i[s]);
            break
        }
    }, t.f.isSupported = function () {
        try {
            t.A.volume = .5
        } catch (e) {
            return l
        }
        return !!t.A.canPlayType
    }, t.j.dc(t.f);
    var pa = t.f.prototype.ma, qa = t.f.prototype.ia;
    t.f.prototype.ma = function (t) {
        var e = pa.call(this, t);
        return this.dd = t.src, e
    }, t.f.prototype.ia = function () {
        return this.dd = b, qa.call(this)
    }, t.f.nativeSourceHandler = {}, t.f.nativeSourceHandler.canHandleSource = function (e) {
        function i(e) {
            try {
                return t.A.canPlayType(e)
            } catch (i) {
                return ""
            }
        }

        return e.type ? i(e.type) : e.src ? (e = (e = e.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i)) && e[1], i("video/" + e)) : ""
    }, t.f.nativeSourceHandler.handleSource = function (t, e) {
        e.na(t.src)
    }, t.f.nativeSourceHandler.dispose = m(), t.f.registerSourceHandler(t.f.nativeSourceHandler), t.f.Ld = function () {
        var e = t.A.volume;
        return t.A.volume = e / 2 + .1, e !== t.A.volume
    }, t.f.Kd = function () {
        var e = t.A.playbackRate;
        return t.A.playbackRate = e / 2 + .1, e !== t.A.playbackRate
    }, t.f.Se = function () {
        var e;
        return (e = !!t.A.textTracks) && 0 < t.A.textTracks.length && (e = "number" != typeof t.A.textTracks[0].mode), e && t.gc && (e = l), e
    }, t.f.prototype.featuresVolumeControl = t.f.Ld(), t.f.prototype.featuresPlaybackRate = t.f.Kd(), t.f.prototype.movingMediaElementInDOM = !t.xd, t.f.prototype.featuresFullscreenResize = f, t.f.prototype.featuresProgressEvents = f, t.f.prototype.featuresNativeTextTracks = t.f.Se();
    var S, ra = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, sa = /^video\/mp4/i;
    t.f.Tc = function () {
        4 <= t.ec && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function (t) {
            return t && ra.test(t) ? "maybe" : S.call(this, t)
        }), t.Bd && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function (t) {
            return t && sa.test(t) ? "maybe" : S.call(this, t)
        })
    }, t.f.Ze = function () {
        var e = t.A.constructor.prototype.canPlayType;
        return t.A.constructor.prototype.canPlayType = S, S = j, e
    }, t.f.Tc(), t.f.xb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" "), t.f.Kb = function (t) {
        if (t) {
            for (t.player = j, t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();)t.removeChild(t.firstChild);
            if (t.removeAttribute("src"), "function" == typeof t.load)try {
                t.load()
            } catch (e) {
            }
        }
    }, t.g = t.j.extend({
        l: function (e, i, s) {
            t.j.call(this, e, i, s);
            var n = i.source;
            s = e.id() + "_flash_api";
            var r = e.q, r = t.i.D({
                readyFunction: "videojs.Flash.onReady",
                eventProxyFunction: "videojs.Flash.onEvent",
                errorEventProxyFunction: "videojs.Flash.onError",
                autoplay: r.autoplay,
                preload: r.Ra,
                loop: r.loop,
                muted: r.muted
            }, i.flashVars), o = t.i.D({wmode: "opaque", bgcolor: "#000000"}, i.params);
            s = t.i.D({id: s, name: s, "class": "vjs-tech"}, i.attributes), n && this.I(function () {
                this.ma(n)
            }), t.Rb(this.c, i.parentEl), i.startTime && this.I(function () {
                this.load(), this.play(), this.currentTime(i.startTime)
            }), t.gc && this.I(function () {
                this.b("mousemove", function () {
                    this.k().o({type: "mousemove", bubbles: l})
                })
            }), e.b("stageclick", e.reportUserActivity), this.c = t.g.Dc(i.swf, this.c, r, o, s)
        }
    }), s = t.g.prototype, s.dispose = function () {
        t.j.prototype.dispose.call(this)
    }, s.play = function () {
        this.c.vjs_play()
    }, s.pause = function () {
        this.c.vjs_pause()
    }, s.src = function (t) {
        return t === b ? this.currentSrc() : this.na(t)
    }, s.na = function (e) {
        if (e = t.Xd(e), this.c.vjs_src(e), this.d.autoplay()) {
            var i = this;
            this.setTimeout(function () {
                i.play()
            }, 0)
        }
    }, t.g.prototype.setCurrentTime = function (e) {
        this.le = e, this.c.vjs_setProperty("currentTime", e), t.j.prototype.Zb.call(this)
    }, t.g.prototype.currentTime = function () {
        return this.seeking() ? this.le || 0 : this.c.vjs_getProperty("currentTime")
    }, t.g.prototype.currentSrc = function () {
        return this.fb ? this.fb.src : this.c.vjs_getProperty("currentSrc")
    }, t.g.prototype.load = function () {
        this.c.vjs_load()
    }, t.g.prototype.poster = function () {
        this.c.vjs_getProperty("poster")
    }, t.g.prototype.setPoster = m(), s = t.g.prototype, s.seekable = function () {
        return 0 === this.duration() ? t.xa() : t.xa(0, this.duration())
    }, s.buffered = function () {
        return this.c.vjs_getProperty ? t.xa(0, this.c.vjs_getProperty("buffered")) : t.xa()
    }, s.duration = function () {
        return this.c.vjs_getProperty ? this.c.vjs_getProperty("duration") : 0
    }, s.Sa = p(l), s.Ec = p(l);
    var ua = t.g.prototype, T = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "), wa = "error networkState readyState seeking initialTime startOffsetTime paused played ended videoTracks audioTracks videoWidth videoHeight".split(" "), U;
    for (U = 0; U < T.length; U++)va(T[U]), ta();
    for (U = 0; U < wa.length; U++)va(wa[U]);
    t.g.isSupported = function () {
        return 10 <= t.g.version()[0]
    }, t.j.dc(t.g), t.g.nativeSourceHandler = {}, t.g.nativeSourceHandler.canHandleSource = function (e) {
        return e.type && e.type.replace(/;.*/, "").toLowerCase() in t.g.Wd ? "maybe" : ""
    }, t.g.nativeSourceHandler.handleSource = function (t, e) {
        e.na(t.src)
    }, t.g.nativeSourceHandler.dispose = m(), t.g.registerSourceHandler(t.g.nativeSourceHandler), t.g.Wd = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    }, t.g.onReady = function (e) {
        var i;
        (i = (e = t.m(e)) && e.parentNode && e.parentNode.player) && (e.player = i, t.g.checkReady(i.h))
    }, t.g.checkReady = function (e) {
        e.m() && (e.m().vjs_getProperty ? e.Va() : this.setTimeout(function () {
            t.g.checkReady(e)
        }, 50))
    }, t.g.onEvent = function (e, i) {
        t.m(e).player.o(i)
    }, t.g.onError = function (e, i) {
        var s = t.m(e).player, n = "FLASH: " + i;
        "srcnotfound" == i ? s.error({code: 4, message: n}) : s.error(n)
    }, t.g.version = function () {
        var t = "0,0,0";
        try {
            t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (e) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch (i) {
            }
        }
        return t.split(",")
    }, t.g.Dc = function (e, i, s, n, r) {
        e = t.g.$d(e, s, n, r), e = t.e("div", {innerHTML: e}).childNodes[0], s = i.parentNode, i.parentNode.replaceChild(e, i), e[t.expando] = i[t.expando];
        var o = s.childNodes[0];
        return setTimeout(function () {
            o.style.display = "block"
        }, 1e3), e
    }, t.g.$d = function (e, i, s, n) {
        var r = "", o = "", a = "";
        return i && t.i.ca(i, function (t, e) {
            r += t + "=" + e + "&amp;"
        }), s = t.i.D({
            movie: e,
            flashvars: r,
            allowScriptAccess: "always",
            allowNetworking: "all"
        }, s), t.i.ca(s, function (t, e) {
            o += '<param name="' + t + '" value="' + e + '" />'
        }), n = t.i.D({data: e, width: "100%", height: "100%"}, n), t.i.ca(n, function (t, e) {
            a += t + '="' + e + '" '
        }), '<object type="application/x-shockwave-flash" ' + a + ">" + o + "</object>"
    }, t.g.Re = {"rtmp/mp4": "MP4", "rtmp/flv": "FLV"}, t.g.Ef = function (t, e) {
        return t + "&" + e
    }, t.g.Qe = function (t) {
        var e = {yc: "", jd: ""};
        if (!t)return e;
        var i, s = t.indexOf("&");
        return -1 !== s ? i = s + 1 : (s = i = t.lastIndexOf("/") + 1, 0 === s && (s = i = t.length)), e.yc = t.substring(0, s), e.jd = t.substring(i, t.length), e
    }, t.g.je = function (e) {
        return e in t.g.Re
    }, t.g.Dd = /^rtmp[set]?:\/\//i, t.g.ie = function (e) {
        return t.g.Dd.test(e)
    }, t.g.Yb = {}, t.g.Yb.canHandleSource = function (e) {
        return t.g.je(e.type) || t.g.ie(e.src) ? "maybe" : ""
    }, t.g.Yb.handleSource = function (e, i) {
        var s = t.g.Qe(e.src);
        i.setRtmpConnection(s.yc), i.setRtmpStream(s.jd)
    }, t.g.registerSourceHandler(t.g.Yb), t.Cd = t.a.extend({
        l: function (e, i, s) {
            if (t.a.call(this, e, i, s), e.q.sources && 0 !== e.q.sources.length)e.src(e.q.sources); else for (i = 0, s = e.q.techOrder; i < s.length; i++) {
                var n = t.va(s[i]), r = window.videojs[n];
                if (r && r.isSupported()) {
                    ka(e, n);
                    break
                }
            }
        }
    }), t.oc = {disabled: "disabled", hidden: "hidden", showing: "showing"}, t.Ed = {
        subtitles: "subtitles",
        captions: "captions", descriptions: "descriptions", chapters: "chapters", metadata: "metadata"
    }, t.t = function (e) {
        var i, s, n, r, o, a, c, u, h, p, d;
        if (e = e || {}, !e.player)throw Error("A player was not provided.");
        if (i = this, t.pa)for (d in i = document.createElement("custom"), t.t.prototype)i[d] = t.t.prototype[d];
        return i.d = e.player, n = t.oc[e.mode] || "disabled", r = t.Ed[e.kind] || "subtitles", o = e.label || "", a = e.language || e.srclang || "", s = e.id || "vjs_text_track_" + t.s++, ("metadata" === r || "chapters" === r) && (n = "hidden"), i.W = [], i.Ia = [], c = new t.V(i.W), u = new t.V(i.Ia), p = l, h = t.bind(i, function () {
            this.activeCues, p && (this.trigger("cuechange"), p = l)
        }), "disabled" !== n && i.d.b("timeupdate", h), Object.defineProperty(i, "kind", {
            get: function () {
                return r
            }, set: Function.prototype
        }), Object.defineProperty(i, "label", {
            get: function () {
                return o
            }, set: Function.prototype
        }), Object.defineProperty(i, "language", {
            get: function () {
                return a
            }, set: Function.prototype
        }), Object.defineProperty(i, "id", {
            get: function () {
                return s
            }, set: Function.prototype
        }), Object.defineProperty(i, "mode", {
            get: function () {
                return n
            }, set: function (e) {
                t.oc[e] && (n = e, "showing" === n && this.d.b("timeupdate", h), this.o("modechange"))
            }
        }), Object.defineProperty(i, "cues", {
            get: function () {
                return this.Ub ? c : j
            }, set: Function.prototype
        }), Object.defineProperty(i, "activeCues", {
            get: function () {
                var t, e, i, s, n;
                if (!this.Ub)return j;
                if (0 === this.cues.length)return u;
                for (s = this.d.currentTime(), t = 0, e = this.cues.length, i = []; e > t; t++)n = this.cues[t], n.startTime <= s && n.endTime >= s ? i.push(n) : n.startTime === n.endTime && n.startTime <= s && n.startTime + .5 >= s && i.push(n);
                if (p = l, i.length !== this.Ia.length)p = f; else for (t = 0; t < i.length; t++)-1 === xa.call(this.Ia, i[t]) && (p = f);
                return this.Ia = i, u.pb(this.Ia), u
            }, set: Function.prototype
        }), e.src ? ya(e.src, i) : i.Ub = f, t.pa ? i : void 0
    }, t.t.prototype = t.i.create(t.z.prototype), t.t.prototype.constructor = t.t, t.t.prototype.ab = {cuechange: "cuechange"}, t.t.prototype.sc = function (t) {
        var e = this.d.textTracks(), i = 0;
        if (e)for (; i < e.length; i++)e[i] !== this && e[i].Yc(t);
        this.W.push(t), this.cues.pb(this.W)
    }, t.t.prototype.Yc = function (t) {
        for (var e, i = 0, s = this.W.length, n = l; s > i; i++)e = this.W[i], e === t && (this.W.splice(i, 1), n = f);
        n && this.Ac.pb(this.W)
    };
    var ya, V, xa;
    ya = function (e, i) {
        t.cf(e, t.bind(this, function (e, s, n) {
            return e ? t.log.error(e) : (i.Ub = f, void V(n, i))
        }))
    }, V = function (e, i) {
        if ("function" != typeof window.WebVTT)window.setTimeout(function () {
            V(e, i)
        }, 25); else {
            var s = new window.WebVTT.Parser(window, window.vttjs, window.WebVTT.StringDecoder());
            s.oncue = function (t) {
                i.sc(t)
            }, s.onparsingerror = function (e) {
                t.log.error(e)
            }, s.parse(e), s.flush()
        }
    }, xa = function (t, e) {
        var i;
        if (this == j)throw new TypeError('"this" is null or not defined');
        var s = Object(this), n = s.length >>> 0;
        if (0 === n)return -1;
        if (i = +e || 0, 1 / 0 === Math.abs(i) && (i = 0), i >= n)return -1;
        for (i = Math.max(i >= 0 ? i : n - Math.abs(i), 0); n > i;) {
            if (i in s && s[i] === t)return i;
            i++
        }
        return -1
    }, t.F = function (e) {
        var i, s = this, n = 0;
        if (t.pa)for (i in s = document.createElement("custom"), t.F.prototype)s[i] = t.F.prototype[i];
        for (e = e || [], s.Ua = [], Object.defineProperty(s, "length", {
            get: function () {
                return this.Ua.length
            }
        }); n < e.length; n++)P(s, e[n]);
        return t.pa ? s : void 0
    }, t.F.prototype = t.i.create(t.z.prototype), t.F.prototype.constructor = t.F, t.F.prototype.ab = {
        change: "change",
        addtrack: "addtrack",
        removetrack: "removetrack"
    };
    for (var za in t.F.prototype.ab)t.F.prototype["on" + za] = j;
    t.F.prototype.ae = function (t) {
        for (var e, i = 0, s = this.length, n = j; s > i; i++)if (e = this[i], e.id === t) {
            n = e;
            break
        }
        return n
    }, t.V = function (e) {
        var i, s = this;
        if (t.pa)for (i in s = document.createElement("custom"), t.V.prototype)s[i] = t.V.prototype[i];
        return t.V.prototype.pb.call(s, e), Object.defineProperty(s, "length", {get: n("me")}), t.pa ? s : void 0
    }, t.V.prototype.pb = function (t) {
        var e = this.length || 0, i = 0, s = t.length;
        if (this.W = t, this.me = t.length, t = function (t) {
                "" + t in this || Object.defineProperty(this, "" + t, {
                    get: function () {
                        return this.W[t]
                    }
                })
            }, s > e)for (i = e; s > i; i++)t.call(this, i)
    }, t.V.prototype.Zd = function (t) {
        for (var e, i = 0, s = this.length, n = j; s > i; i++)if (e = this[i], e.id === t) {
            n = e;
            break
        }
        return n
    }, t.sa = t.a.extend({
        l: function (e, i, s) {
            t.a.call(this, e, i, s), e.b("loadstart", t.bind(this, this.We)), e.I(t.bind(this, function () {
                if (e.h && e.h.featuresNativeTextTracks)this.X(); else {
                    var i, s, n;
                    for (e.b("fullscreenchange", t.bind(this, this.C)), s = e.q.tracks || [], i = 0; i < s.length; i++)n = s[i], this.d.ha(n)
                }
            }))
        }
    }), t.sa.prototype.We = function () {
        this.d.h && this.d.h.featuresNativeTextTracks ? this.X() : this.show()
    }, t.sa.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {className: "vjs-text-track-display"})
    }, t.sa.prototype.Md = function () {
        "function" == typeof window.WebVTT && window.WebVTT.processCues(window, [], this.c)
    };
    var Aa = {
        uf: "monospace",
        Af: "sans-serif",
        Cf: "serif",
        vf: '"Andale Mono", "Lucida Console", monospace',
        wf: '"Courier New", monospace',
        yf: "sans-serif",
        zf: "serif",
        lf: '"Comic Sans MS", Impact, fantasy',
        Bf: '"Monotype Corsiva", cursive',
        Df: '"Andale Mono", "Lucida Console", monospace, sans-serif'
    };
    if (t.sa.prototype.C = function () {
            var t, e = this.d.textTracks(), i = 0;
            if (this.Md(), e)for (; i < e.length; i++)t = e[i], "showing" === t.mode && this.$e(t)
        }, t.sa.prototype.$e = function (t) {
            if ("function" == typeof window.WebVTT && t.activeCues) {
                for (var e, i = 0, s = this.d.textTrackSettings.Hc(), n = []; i < t.activeCues.length; i++)n.push(t.activeCues[i]);
                for (window.WebVTT.processCues(window, t.activeCues, this.c), i = n.length; i--;) {
                    if (t = n[i].mf, s.color && (t.firstChild.style.color = s.color), s.kd)try {
                        t.firstChild.style.color = W(s.color || "#fff", s.kd)
                    } catch (r) {
                    }
                    if (s.backgroundColor && (t.firstChild.style.backgroundColor = s.backgroundColor), s.vc)try {
                        t.firstChild.style.backgroundColor = W(s.backgroundColor || "#000", s.vc)
                    } catch (o) {
                    }
                    if (s.cc)if (s.rd)try {
                        t.style.backgroundColor = W(s.cc, s.rd)
                    } catch (a) {
                    } else t.style.backgroundColor = s.cc;
                    s.Ma && ("dropshadow" === s.Ma ? t.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === s.Ma ? t.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === s.Ma ? t.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === s.Ma && (t.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), s.Ob && 1 !== s.Ob && (e = window.xf(t.style.fontSize), t.style.fontSize = e * s.Ob + "px", t.style.height = "auto", t.style.top = "auto", t.style.bottom = "2px"), s.fontFamily && "default" !== s.fontFamily && ("small-caps" === s.fontFamily ? t.firstChild.style.fontVariant = "small-caps" : t.firstChild.style.fontFamily = Aa[s.fontFamily])
                }
            }
        }, t.$ = t.M.extend({
            l: function (e, i) {
                var s, n, r = this.S = i.track, o = e.textTracks();
                o && (s = t.bind(this, function () {
                    var e, i, s, n = "showing" === this.S.mode;
                    if (this instanceof t.zb)for (n = f, i = 0, s = o.length; s > i; i++)if (e = o[i], e.kind === this.S.kind && "showing" === e.mode) {
                        n = l;
                        break
                    }
                    this.selected(n)
                }), o.addEventListener("change", s), e.b("dispose", function () {
                    o.removeEventListener("change", s)
                })), i.label = r.label || r.language || "Unknown", i.selected = r["default"] || "showing" === r.mode, t.M.call(this, e, i), o && o.onchange === b && this.b(["tap", "click"], function () {
                    if ("object" != typeof window.vd)try {
                        n = new window.vd("change")
                    } catch (t) {
                    }
                    n || (n = document.createEvent("Event"), n.initEvent("change", f, f)), o.dispatchEvent(n)
                })
            }
        }), t.$.prototype.u = function () {
            var e, i = this.S.kind, s = this.d.textTracks(), n = 0;
            if (t.M.prototype.u.call(this), s)for (; n < s.length; n++)e = s[n], e.kind === i && (e.mode = e === this.S ? "showing" : "disabled")
        }, t.zb = t.$.extend({
            l: function (e, i) {
                i.track = {
                    kind: i.kind,
                    player: e,
                    label: i.kind + " off",
                    "default": l,
                    mode: "disabled"
                }, t.$.call(this, e, i), this.selected(f)
            }
        }), t.sb = t.$.extend({
            l: function (e, i) {
                i.track = {
                    kind: i.kind,
                    player: e,
                    label: i.kind + " settings",
                    "default": l,
                    mode: "disabled"
                }, t.$.call(this, e, i), this.p("vjs-texttrack-settings")
            }
        }), t.sb.prototype.u = function () {
            this.k().da("textTrackSettings").show()
        }, t.Q = t.O.extend({
            l: function (e, i) {
                var s, n;
                t.O.call(this, e, i), s = this.d.textTracks(), 1 >= this.H.length && this.X(), s && (n = t.bind(this, this.update), s.addEventListener("removetrack", n), s.addEventListener("addtrack", n), this.d.b("dispose", function () {
                    s.removeEventListener("removetrack", n), s.removeEventListener("addtrack", n)
                }))
            }
        }), t.Q.prototype.Ka = function () {
            var e, i, s = [];
            if (this instanceof t.oa && (!this.k().h || !this.k().h.featuresNativeTextTracks) && s.push(new t.sb(this.d, {kind: this.ea})), s.push(new t.zb(this.d, {kind: this.ea})), i = this.d.textTracks(), !i)return s;
            for (var n = 0; n < i.length; n++)e = i[n], e.kind === this.ea && s.push(new t.$(this.d, {track: e}));
            return s
        }, t.oa = t.Q.extend({
            l: function (e, i, s) {
                t.Q.call(this, e, i, s), this.c.setAttribute("aria-label", "Captions Menu")
            }
        }), t.oa.prototype.ea = "captions", t.oa.prototype.ta = "Captions", t.oa.prototype.className = "vjs-captions-button", t.oa.prototype.update = function () {
            var e = 2;
            t.Q.prototype.update.call(this), this.k().h && this.k().h.featuresNativeTextTracks && (e = 1), this.H && this.H.length > e ? this.show() : this.X()
        }, t.$a = t.Q.extend({
            l: function (e, i, s) {
                t.Q.call(this, e, i, s), this.c.setAttribute("aria-label", "Subtitles Menu")
            }
        }), t.$a.prototype.ea = "subtitles", t.$a.prototype.ta = "Subtitles", t.$a.prototype.className = "vjs-subtitles-button", t.Wa = t.Q.extend({
            l: function (e, i, s) {
                t.Q.call(this, e, i, s), this.c.setAttribute("aria-label", "Chapters Menu")
            }
        }), s = t.Wa.prototype, s.ea = "chapters", s.ta = "Chapters", s.className = "vjs-chapters-button", s.Ka = function () {
            var e, i, s = [];
            if (i = this.d.textTracks(), !i)return s;
            for (var n = 0; n < i.length; n++)e = i[n], e.kind === this.ea && s.push(new t.$(this.d, {track: e}));
            return s
        }, s.La = function () {
            for (var e, i, s = this.d.textTracks() || [], n = 0, r = s.length, o = this.H = []; r > n; n++)if (e = s[n], e.kind == this.ea) {
                if (e.Ac) {
                    i = e;
                    break
                }
                e.mode = "hidden", window.setTimeout(t.bind(this, function () {
                    this.La()
                }), 100)
            }
            if (s = this.za, s === b && (s = new t.qa(this.d), s.wa().appendChild(t.e("li", {
                    className: "vjs-menu-title",
                    innerHTML: t.va(this.ea),
                    Te: -1
                }))), i) {
                e = i.cues;
                for (var a, n = 0, r = e.length; r > n; n++)a = e[n], a = new t.Xa(this.d, {
                    track: i,
                    cue: a
                }), o.push(a), s.aa(a);
                this.aa(s)
            }
            return 0 < this.H.length && this.show(), s
        }, t.Xa = t.M.extend({
            l: function (e, i) {
                var s = this.S = i.track, n = this.cue = i.cue, r = e.currentTime();
                i.label = n.text, i.selected = n.startTime <= r && r < n.endTime, t.M.call(this, e, i), s.addEventListener("cuechange", t.bind(this, this.update))
            }
        }), t.Xa.prototype.u = function () {
            t.M.prototype.u.call(this), this.d.currentTime(this.cue.startTime), this.update(this.cue.startTime)
        }, t.Xa.prototype.update = function () {
            var t = this.cue, e = this.d.currentTime();
            this.selected(t.startTime <= e && e < t.endTime)
        }, t.pc = t.a.extend({
            l: function (e, i) {
                t.a.call(this, e, i), this.X(), t.b(this.m().querySelector(".vjs-done-button"), "click", t.bind(this, function () {
                    this.Ge(), this.X()
                })), t.b(this.m().querySelector(".vjs-default-button"), "click", t.bind(this, function () {
                    this.m().querySelector(".vjs-fg-color > select").selectedIndex = 0, this.m().querySelector(".vjs-bg-color > select").selectedIndex = 0, this.m().querySelector(".window-color > select").selectedIndex = 0, this.m().querySelector(".vjs-text-opacity > select").selectedIndex = 0, this.m().querySelector(".vjs-bg-opacity > select").selectedIndex = 0, this.m().querySelector(".vjs-window-opacity > select").selectedIndex = 0, this.m().querySelector(".vjs-edge-style select").selectedIndex = 0, this.m().querySelector(".vjs-font-family select").selectedIndex = 0, this.m().querySelector(".vjs-font-percent select").selectedIndex = 2, this.C()
                })), t.b(this.m().querySelector(".vjs-fg-color > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-bg-color > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".window-color > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-text-opacity > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-bg-opacity > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-window-opacity > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-font-percent select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-edge-style select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-font-family select"), "change", t.bind(this, this.C)), e.options().persistTextTrackSettings && this.Fe()
            }
        }), s = t.pc.prototype, s.e = function () {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-caption-settings vjs-modal-overlay",
                innerHTML: '<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'
            })
        }, s.Hc = function () {
            var t, e, i, s, n, r, o, a, l, c;
            t = this.m(), n = X(t.querySelector(".vjs-edge-style select")), r = X(t.querySelector(".vjs-font-family select")), o = X(t.querySelector(".vjs-fg-color > select")), i = X(t.querySelector(".vjs-text-opacity > select")), a = X(t.querySelector(".vjs-bg-color > select")), e = X(t.querySelector(".vjs-bg-opacity > select")), l = X(t.querySelector(".window-color > select")), s = X(t.querySelector(".vjs-window-opacity > select")), t = window.parseFloat(X(t.querySelector(".vjs-font-percent > select"))), e = {
                backgroundOpacity: e,
                textOpacity: i,
                windowOpacity: s,
                edgeStyle: n,
                fontFamily: r,
                color: o,
                backgroundColor: a,
                windowColor: l,
                fontPercent: t
            };
            for (c in e)("" === e[c] || "none" === e[c] || "fontPercent" === c && 1 === e[c]) && delete e[c];
            return e
        }, s.Oe = function (t) {
            var e = this.m();
            Y(e.querySelector(".vjs-edge-style select"), t.Ma), Y(e.querySelector(".vjs-font-family select"), t.fontFamily), Y(e.querySelector(".vjs-fg-color > select"), t.color), Y(e.querySelector(".vjs-text-opacity > select"), t.kd), Y(e.querySelector(".vjs-bg-color > select"), t.backgroundColor), Y(e.querySelector(".vjs-bg-opacity > select"), t.vc), Y(e.querySelector(".window-color > select"), t.cc), Y(e.querySelector(".vjs-window-opacity > select"), t.rd), (t = t.Ob) && (t = t.toFixed(2)), Y(e.querySelector(".vjs-font-percent > select"), t)
        }, s.Fe = function () {
            var t;
            try {
                t = JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))
            } catch (e) {
            }
            t && this.Oe(t)
        }, s.Ge = function () {
            var e;
            if (this.d.options().persistTextTrackSettings) {
                e = this.Hc();
                try {
                    t.hb(e) ? window.localStorage.removeItem("vjs-text-track-settings") : window.localStorage.setItem("vjs-text-track-settings", JSON.stringify(e))
                } catch (i) {
                }
            }
        }, s.C = function () {
            var t = this.d.da("textTrackDisplay");
            t && t.C()
        }, "undefined" != typeof window.JSON && "function" == typeof window.JSON.parse)t.JSON = window.JSON; else {
        t.JSON = {};
        var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        t.JSON.parse = function (a, c) {
            function d(t, e) {
                var i, s, n = t[e];
                if (n && "object" == typeof n)for (i in n)Object.prototype.hasOwnProperty.call(n, i) && (s = d(n, i), s !== b ? n[i] = s : delete n[i]);
                return c.call(t, e, n)
            }

            var e;
            if (a = String(a), Z.lastIndex = 0, Z.test(a) && (a = a.replace(Z, function (t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return e = eval("(" + a + ")"), "function" == typeof c ? d({"": e}, "") : e;
            throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
        }
    }
    t.uc = function () {
        var e, i, s, n;
        e = document.getElementsByTagName("video"), i = document.getElementsByTagName("audio");
        var r = [];
        if (e && 0 < e.length)for (s = 0, n = e.length; n > s; s++)r.push(e[s]);
        if (i && 0 < i.length)for (s = 0, n = i.length; n > s; s++)r.push(i[s]);
        if (r && 0 < r.length)for (s = 0, n = r.length; n > s; s++) {
            if (!(i = r[s]) || !i.getAttribute) {
                t.Hb();
                break
            }
            i.player === b && (e = i.getAttribute("data-setup"), e !== j && videojs(i))
        } else t.qd || t.Hb()
    }, t.Hb = function () {
        setTimeout(t.uc, 1)
    }, "complete" === document.readyState ? t.qd = f : t.N(window, "load", function () {
        t.qd = f
    }), t.Hb(), t.Ce = function (e, i) {
        t.Player.prototype[e] = i
    };
    var Ba = this;
    $("videojs", t), $("_V_", t), $("videojs.options", t.options), $("videojs.players", t.Ca), $("videojs.TOUCH_ENABLED", t.Db), $("videojs.cache", t.ua), $("videojs.Component", t.a), t.a.prototype.player = t.a.prototype.k, t.a.prototype.options = t.a.prototype.options, t.a.prototype.init = t.a.prototype.l, t.a.prototype.dispose = t.a.prototype.dispose, t.a.prototype.createEl = t.a.prototype.e, t.a.prototype.contentEl = t.a.prototype.wa, t.a.prototype.el = t.a.prototype.m, t.a.prototype.addChild = t.a.prototype.aa, t.a.prototype.getChild = t.a.prototype.da, t.a.prototype.getChildById = t.a.prototype.Yd, t.a.prototype.children = t.a.prototype.children, t.a.prototype.initChildren = t.a.prototype.Kc, t.a.prototype.removeChild = t.a.prototype.removeChild, t.a.prototype.on = t.a.prototype.b, t.a.prototype.off = t.a.prototype.n, t.a.prototype.one = t.a.prototype.N, t.a.prototype.trigger = t.a.prototype.o, t.a.prototype.triggerReady = t.a.prototype.Va, t.a.prototype.show = t.a.prototype.show, t.a.prototype.hide = t.a.prototype.X, t.a.prototype.width = t.a.prototype.width, t.a.prototype.height = t.a.prototype.height, t.a.prototype.dimensions = t.a.prototype.Qd, t.a.prototype.ready = t.a.prototype.I, t.a.prototype.addClass = t.a.prototype.p, t.a.prototype.removeClass = t.a.prototype.r, t.a.prototype.hasClass = t.a.prototype.Pa, t.a.prototype.buildCSSClass = t.a.prototype.U, t.a.prototype.localize = t.a.prototype.v, t.a.prototype.setInterval = t.a.prototype.setInterval, t.a.prototype.setTimeout = t.a.prototype.setTimeout, $("videojs.EventEmitter", t.z), t.z.prototype.on = t.z.prototype.b, t.z.prototype.addEventListener = t.z.prototype.addEventListener, t.z.prototype.off = t.z.prototype.n, t.z.prototype.removeEventListener = t.z.prototype.removeEventListener, t.z.prototype.one = t.z.prototype.N, t.z.prototype.trigger = t.z.prototype.o, t.z.prototype.dispatchEvent = t.z.prototype.dispatchEvent, t.Player.prototype.ended = t.Player.prototype.ended, t.Player.prototype.enterFullWindow = t.Player.prototype.Fc, t.Player.prototype.exitFullWindow = t.Player.prototype.Lb, t.Player.prototype.preload = t.Player.prototype.Ra, t.Player.prototype.remainingTime = t.Player.prototype.remainingTime, t.Player.prototype.supportsFullScreen = t.Player.prototype.Sa, t.Player.prototype.currentType = t.Player.prototype.Nd, t.Player.prototype.requestFullScreen = t.Player.prototype.requestFullScreen, t.Player.prototype.requestFullscreen = t.Player.prototype.requestFullscreen, t.Player.prototype.cancelFullScreen = t.Player.prototype.cancelFullScreen, t.Player.prototype.exitFullscreen = t.Player.prototype.exitFullscreen, t.Player.prototype.isFullScreen = t.Player.prototype.isFullScreen, t.Player.prototype.isFullscreen = t.Player.prototype.isFullscreen, t.Player.prototype.textTracks = t.Player.prototype.textTracks, t.Player.prototype.remoteTextTracks = t.Player.prototype.Y, t.Player.prototype.addTextTrack = t.Player.prototype.addTextTrack, t.Player.prototype.addRemoteTextTrack = t.Player.prototype.ha, t.Player.prototype.removeRemoteTextTrack = t.Player.prototype.Da, t.Player.prototype.seekable = t.Player.prototype.seekable, $("videojs.MediaLoader", t.Cd), $("videojs.TextTrackDisplay", t.sa), $("videojs.ControlBar", t.tb), $("videojs.Button", t.w), $("videojs.PlayToggle", t.kc), $("videojs.FullscreenToggle", t.Ya), $("videojs.BigPlayButton", t.rb), $("videojs.LoadingSpinner", t.ic), $("videojs.CurrentTimeDisplay", t.ub), $("videojs.DurationDisplay", t.vb), $("videojs.TimeDivider", t.qc), $("videojs.RemainingTimeDisplay", t.Cb), $("videojs.LiveDisplay", t.hc), $("videojs.ErrorDisplay", t.wb), $("videojs.Slider", t.T), $("videojs.ProgressControl", t.Bb), $("videojs.SeekBar", t.nc), $("videojs.LoadProgressBar", t.yb), $("videojs.PlayProgressBar", t.jc), $("videojs.SeekHandle", t.Za), $("videojs.VolumeControl", t.Fb), $("videojs.VolumeBar", t.Eb), $("videojs.VolumeLevel", t.rc), $("videojs.VolumeMenuButton", t.Ha), $("videojs.VolumeHandle", t.Gb), $("videojs.MuteToggle", t.ra), $("videojs.PosterImage", t.mc), $("videojs.Menu", t.qa), $("videojs.MenuItem", t.M), $("videojs.MenuButton", t.O), $("videojs.PlaybackRateMenuButton", t.lc), $("videojs.ChaptersTrackMenuItem", t.Xa), $("videojs.TextTrackButton", t.Q), $("videojs.TextTrackMenuItem", t.$), $("videojs.OffTextTrackMenuItem", t.zb), $("videojs.CaptionSettingsMenuItem", t.sb),t.O.prototype.createItems = t.O.prototype.Ka,t.Q.prototype.createItems = t.Q.prototype.Ka,t.Wa.prototype.createItems = t.Wa.prototype.Ka,$("videojs.SubtitlesButton", t.$a),$("videojs.CaptionsButton", t.oa),$("videojs.ChaptersButton", t.Wa),$("videojs.MediaTechController", t.j),t.j.withSourceHandlers = t.j.dc,t.j.prototype.featuresVolumeControl = t.j.prototype.rf,t.j.prototype.featuresFullscreenResize = t.j.prototype.nf,t.j.prototype.featuresPlaybackRate = t.j.prototype.of,t.j.prototype.featuresProgressEvents = t.j.prototype.pf,t.j.prototype.featuresTimeupdateEvents = t.j.prototype.qf,t.j.prototype.setPoster = t.j.prototype.bd,t.j.prototype.textTracks = t.j.prototype.textTracks,t.j.prototype.remoteTextTracks = t.j.prototype.Y,t.j.prototype.addTextTrack = t.j.prototype.addTextTrack,t.j.prototype.addRemoteTextTrack = t.j.prototype.ha,t.j.prototype.removeRemoteTextTrack = t.j.prototype.Da,$("videojs.Html5", t.f),t.f.Events = t.f.xb,t.f.isSupported = t.f.isSupported,t.f.canPlaySource = t.f.wc,t.f.patchCanPlayType = t.f.Tc,t.f.unpatchCanPlayType = t.f.Ze,t.f.prototype.setCurrentTime = t.f.prototype.Zb,t.f.prototype.setVolume = t.f.prototype.Pe,t.f.prototype.setMuted = t.f.prototype.Le,t.f.prototype.setPreload = t.f.prototype.Ne,t.f.prototype.setAutoplay = t.f.prototype.Ie,t.f.prototype.setLoop = t.f.prototype.Ke,t.f.prototype.enterFullScreen = t.f.prototype.Ec,t.f.prototype.exitFullScreen = t.f.prototype.Ud,t.f.prototype.playbackRate = t.f.prototype.playbackRate,t.f.prototype.setPlaybackRate = t.f.prototype.Me,t.f.selectSourceHandler = t.f.ob,t.f.prototype.setSource = t.f.prototype.ma,t.f.prototype.disposeSourceHandler = t.f.prototype.ia,t.f.prototype.textTracks = t.f.prototype.textTracks,t.f.prototype.remoteTextTracks = t.f.prototype.Y,t.f.prototype.addTextTrack = t.f.prototype.addTextTrack,t.f.prototype.addRemoteTextTrack = t.f.prototype.ha,t.f.prototype.removeRemoteTextTrack = t.f.prototype.Da,$("videojs.Flash", t.g),t.g.isSupported = t.g.isSupported,t.g.canPlaySource = t.g.wc,t.g.onReady = t.g.onReady,t.g.embed = t.g.Dc,t.g.version = t.g.version,t.g.prototype.setSource = t.g.prototype.ma,t.g.selectSourceHandler = t.g.ob,t.g.prototype.setSource = t.g.prototype.ma,t.g.prototype.disposeSourceHandler = t.g.prototype.ia,$("videojs.TextTrack", t.t),$("videojs.TextTrackList", t.F),$("videojs.TextTrackCueList", t.V),$("videojs.TextTrackSettings", t.pc),t.t.prototype.id = t.t.prototype.id,t.t.prototype.label = t.t.prototype.label,t.t.prototype.kind = t.t.prototype.Tb,t.t.prototype.mode = t.t.prototype.mode,t.t.prototype.cues = t.t.prototype.Ac,t.t.prototype.activeCues = t.t.prototype.kf,t.t.prototype.addCue = t.t.prototype.sc,t.t.prototype.removeCue = t.t.prototype.Yc,t.F.prototype.getTrackById = t.F.prototype.ae,t.V.prototype.getCueById = t.F.prototype.Zd,$("videojs.CaptionsTrack", t.df),$("videojs.SubtitlesTrack", t.jf),$("videojs.ChaptersTrack", t.ef),$("videojs.autoSetup", t.uc),$("videojs.plugin", t.Ce),$("videojs.createTimeRange", t.xa),$("videojs.util", t.Z),t.Z.mergeOptions = t.Z.Aa,t.addLanguage = t.Gd
}(),
    !function (t) {
        var e = t.vttjs = {}, i = e.VTTCue, s = e.VTTRegion, n = t.VTTCue, r = t.VTTRegion;
        e.shim = function () {
            e.VTTCue = i, e.VTTRegion = s
        }, e.restore = function () {
            e.VTTCue = n, e.VTTRegion = r
        }
    }(this),
    function (t, e) {
        function i(t) {
            if ("string" != typeof t)return !1;
            var e = a[t.toLowerCase()];
            return e ? t.toLowerCase() : !1
        }

        function s(t) {
            if ("string" != typeof t)return !1;
            var e = l[t.toLowerCase()];
            return e ? t.toLowerCase() : !1
        }

        function n(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var s in i)t[s] = i[s]
            }
            return t
        }

        function r(t, e, r) {
            var a = this, l = /MSIE\s8\.0/.test(navigator.userAgent), c = {};
            l ? a = document.createElement("custom") : c.enumerable = !0, a.hasBeenReset = !1;
            var u = "", h = !1, p = t, d = e, f = r, y = null, g = "", v = !0, m = "auto", b = "start", w = 50, T = "middle", S = 50, j = "middle";
            return Object.defineProperty(a, "id", n({}, c, {
                get: function () {
                    return u
                }, set: function (t) {
                    u = "" + t
                }
            })), Object.defineProperty(a, "pauseOnExit", n({}, c, {
                get: function () {
                    return h
                }, set: function (t) {
                    h = !!t
                }
            })), Object.defineProperty(a, "startTime", n({}, c, {
                get: function () {
                    return p
                }, set: function (t) {
                    if ("number" != typeof t)throw new TypeError("Start time must be set to a number.");
                    p = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "endTime", n({}, c, {
                get: function () {
                    return d
                }, set: function (t) {
                    if ("number" != typeof t)throw new TypeError("End time must be set to a number.");
                    d = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "text", n({}, c, {
                get: function () {
                    return f
                }, set: function (t) {
                    f = "" + t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "region", n({}, c, {
                get: function () {
                    return y
                }, set: function (t) {
                    y = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "vertical", n({}, c, {
                get: function () {
                    return g
                }, set: function (t) {
                    var e = i(t);
                    if (e === !1)throw new SyntaxError("An invalid or illegal string was specified.");
                    g = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "snapToLines", n({}, c, {
                get: function () {
                    return v
                }, set: function (t) {
                    v = !!t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "line", n({}, c, {
                get: function () {
                    return m
                }, set: function (t) {
                    if ("number" != typeof t && t !== o)throw new SyntaxError("An invalid number or illegal string was specified.");
                    m = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "lineAlign", n({}, c, {
                get: function () {
                    return b
                }, set: function (t) {
                    var e = s(t);
                    if (!e)throw new SyntaxError("An invalid or illegal string was specified.");
                    b = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "position", n({}, c, {
                get: function () {
                    return w
                }, set: function (t) {
                    if (0 > t || t > 100)throw new Error("Position must be between 0 and 100.");
                    w = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "positionAlign", n({}, c, {
                get: function () {
                    return T
                }, set: function (t) {
                    var e = s(t);
                    if (!e)throw new SyntaxError("An invalid or illegal string was specified.");
                    T = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "size", n({}, c, {
                get: function () {
                    return S
                }, set: function (t) {
                    if (0 > t || t > 100)throw new Error("Size must be between 0 and 100.");
                    S = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "align", n({}, c, {
                get: function () {
                    return j
                }, set: function (t) {
                    var e = s(t);
                    if (!e)throw new SyntaxError("An invalid or illegal string was specified.");
                    j = e, this.hasBeenReset = !0
                }
            })), a.displayState = void 0, l ? a : void 0
        }

        var o = "auto", a = {"": !0, lr: !0, rl: !0}, l = {start: !0, middle: !0, end: !0, left: !0, right: !0};
        r.prototype.getCueAsHTML = function () {
            return WebVTT.convertCueToDOMTree(window, this.text)
        }, t.VTTCue = t.VTTCue || r, e.VTTCue = r
    }(this, this.vttjs || {}),
    function (t, e) {
        function i(t) {
            if ("string" != typeof t)return !1;
            var e = r[t.toLowerCase()];
            return e ? t.toLowerCase() : !1
        }

        function s(t) {
            return "number" == typeof t && t >= 0 && 100 >= t
        }

        function n() {
            var t = 100, e = 3, n = 0, r = 100, o = 0, a = 100, l = "";
            Object.defineProperties(this, {
                width: {
                    enumerable: !0, get: function () {
                        return t
                    }, set: function (e) {
                        if (!s(e))throw new Error("Width must be between 0 and 100.");
                        t = e
                    }
                }, lines: {
                    enumerable: !0, get: function () {
                        return e
                    }, set: function (t) {
                        if ("number" != typeof t)throw new TypeError("Lines must be set to a number.");
                        e = t
                    }
                }, regionAnchorY: {
                    enumerable: !0, get: function () {
                        return r
                    }, set: function (t) {
                        if (!s(t))throw new Error("RegionAnchorX must be between 0 and 100.");
                        r = t
                    }
                }, regionAnchorX: {
                    enumerable: !0, get: function () {
                        return n
                    }, set: function (t) {
                        if (!s(t))throw new Error("RegionAnchorY must be between 0 and 100.");
                        n = t
                    }
                }, viewportAnchorY: {
                    enumerable: !0, get: function () {
                        return a
                    }, set: function (t) {
                        if (!s(t))throw new Error("ViewportAnchorY must be between 0 and 100.");
                        a = t
                    }
                }, viewportAnchorX: {
                    enumerable: !0, get: function () {
                        return o
                    }, set: function (t) {
                        if (!s(t))throw new Error("ViewportAnchorX must be between 0 and 100.");
                        o = t
                    }
                }, scroll: {
                    enumerable: !0, get: function () {
                        return l
                    }, set: function (t) {
                        var e = i(t);
                        if (e === !1)throw new SyntaxError("An invalid or illegal string was specified.");
                        l = e
                    }
                }
            })
        }

        var r = {"": !0, up: !0};
        t.VTTRegion = t.VTTRegion || n, e.VTTRegion = n
    }(this, this.vttjs || {}),
    function (t) {
        function e(t, e) {
            this.name = "ParsingError", this.code = t.code, this.message = e || t.message
        }

        function i(t) {
            function e(t, e, i, s) {
                return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + (0 | s) / 1e3
            }

            var i = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
            return i ? i[3] ? e(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? e(i[1], i[2], 0, i[4]) : e(0, i[1], i[2], i[4]) : null
        }

        function s() {
            this.values = f(null)
        }

        function n(t, e, i, s) {
            var n = s ? t.split(s) : [t];
            for (var r in n)if ("string" == typeof n[r]) {
                var o = n[r].split(i);
                if (2 === o.length) {
                    var a = o[0], l = o[1];
                    e(a, l)
                }
            }
        }

        function r(t, r, o) {
            function a() {
                var s = i(t);
                if (null === s)throw new e(e.Errors.BadTimeStamp, "Malformed timestamp: " + u);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""), s
            }

            function l(t, e) {
                var i = new s;
                n(t, function (t, e) {
                    switch (t) {
                        case"region":
                            for (var s = o.length - 1; s >= 0; s--)if (o[s].id === e) {
                                i.set(t, o[s].region);
                                break
                            }
                            break;
                        case"vertical":
                            i.alt(t, e, ["rl", "lr"]);
                            break;
                        case"line":
                            var n = e.split(","), r = n[0];
                            i.integer(t, r), i.percent(t, r) ? i.set("snapToLines", !1) : null, i.alt(t, r, ["auto"]), 2 === n.length && i.alt("lineAlign", n[1], ["start", "middle", "end"]);
                            break;
                        case"position":
                            n = e.split(","), i.percent(t, n[0]), 2 === n.length && i.alt("positionAlign", n[1], ["start", "middle", "end"]);
                            break;
                        case"size":
                            i.percent(t, e);
                            break;
                        case"align":
                            i.alt(t, e, ["start", "middle", "end", "left", "right"])
                    }
                }, /:/, /\s/), e.region = i.get("region", null), e.vertical = i.get("vertical", ""), e.line = i.get("line", "auto"), e.lineAlign = i.get("lineAlign", "start"), e.snapToLines = i.get("snapToLines", !0), e.size = i.get("size", 100), e.align = i.get("align", "middle"), e.position = i.get("position", {
                    start: 0,
                    left: 0,
                    middle: 50,
                    end: 100,
                    right: 100
                }, e.align), e.positionAlign = i.get("positionAlign", {
                    start: "start",
                    left: "start",
                    middle: "middle",
                    end: "end",
                    right: "end"
                }, e.align)
            }

            function c() {
                t = t.replace(/^\s+/, "")
            }

            var u = t;
            if (c(), r.startTime = a(), c(), "-->" !== t.substr(0, 3))throw new e(e.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + u);
            t = t.substr(3), c(), r.endTime = a(), c(), l(t, r)
        }

        function o(t, e) {
            function s() {
                function t(t) {
                    return e = e.substr(t.length), t
                }

                if (!e)return null;
                var i = e.match(/^([^<]*)(<[^>]+>?)?/);
                return t(i[1] ? i[1] : i[2])
            }

            function n(t) {
                return y[t]
            }

            function r(t) {
                for (; f = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)t = t.replace(f[0], n);
                return t
            }

            function o(t, e) {
                return !m[e.localName] || m[e.localName] === t.localName
            }

            function a(e, i) {
                var s = g[e];
                if (!s)return null;
                var n = t.document.createElement(s);
                n.localName = s;
                var r = v[e];
                return r && i && (n[r] = i.trim()), n
            }

            for (var l, c = t.document.createElement("div"), u = c, h = []; null !== (l = s());)if ("<" !== l[0])u.appendChild(t.document.createTextNode(r(l))); else {
                if ("/" === l[1]) {
                    h.length && h[h.length - 1] === l.substr(2).replace(">", "") && (h.pop(), u = u.parentNode);
                    continue
                }
                var p, d = i(l.substr(1, l.length - 2));
                if (d) {
                    p = t.document.createProcessingInstruction("timestamp", d), u.appendChild(p);
                    continue
                }
                var f = l.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!f)continue;
                if (p = a(f[1], f[3]), !p)continue;
                if (!o(u, p))continue;
                f[2] && (p.className = f[2].substr(1).replace(".", " ")), h.push(f[1]), u.appendChild(p), u = p
            }
            return c
        }

        function a(t) {
            function e(t, e) {
                for (var i = e.childNodes.length - 1; i >= 0; i--)t.push(e.childNodes[i])
            }

            function i(t) {
                if (!t || !t.length)return null;
                var s = t.pop(), n = s.textContent || s.innerText;
                if (n) {
                    var r = n.match(/^.*(\n|\r)/);
                    return r ? (t.length = 0, r[0]) : n
                }
                return "ruby" === s.tagName ? i(t) : s.childNodes ? (e(t, s), i(t)) : void 0
            }

            var s, n = [], r = "";
            if (!t || !t.childNodes)return "ltr";
            for (e(n, t); r = i(n);)for (var o = 0; o < r.length; o++) {
                s = r.charCodeAt(o);
                for (var a = 0; a < b.length; a++)if (b[a] === s)return "rtl"
            }
            return "ltr"
        }

        function l(t) {
            if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100))return t.line;
            if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement)return -1;
            for (var e = t.track, i = e.textTrackList, s = 0, n = 0; n < i.length && i[n] !== e; n++)"showing" === i[n].mode && s++;
            return -1 * ++s
        }

        function c() {
        }

        function u(t, e, i) {
            var s = /MSIE\s8\.0/.test(navigator.userAgent), n = "rgba(255, 255, 255, 1)", r = "rgba(0, 0, 0, 0.8)";
            s && (n = "rgb(255, 255, 255)", r = "rgb(0, 0, 0)"), c.call(this), this.cue = e, this.cueDiv = o(t, e.text);
            var l = {
                color: n,
                backgroundColor: r,
                position: "relative",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "inline"
            };
            s || (l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl", l.unicodeBidi = "plaintext"), this.applyStyles(l, this.cueDiv), this.div = t.document.createElement("div"), l = {
                textAlign: "middle" === e.align ? "center" : e.align,
                font: i.font,
                whiteSpace: "pre-line",
                position: "absolute"
            }, s || (l.direction = a(this.cueDiv), l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(l), this.div.appendChild(this.cueDiv);
            var u = 0;
            switch (e.positionAlign) {
                case"start":
                    u = e.position;
                    break;
                case"middle":
                    u = e.position - e.size / 2;
                    break;
                case"end":
                    u = e.position - e.size
            }
            this.applyStyles("" === e.vertical ? {
                left: this.formatStyle(u, "%"),
                width: this.formatStyle(e.size, "%")
            } : {top: this.formatStyle(u, "%"), height: this.formatStyle(e.size, "%")}), this.move = function (t) {
                this.applyStyles({
                    top: this.formatStyle(t.top, "px"),
                    bottom: this.formatStyle(t.bottom, "px"),
                    left: this.formatStyle(t.left, "px"),
                    right: this.formatStyle(t.right, "px"),
                    height: this.formatStyle(t.height, "px"),
                    width: this.formatStyle(t.width, "px")
                })
            }
        }

        function h(t) {
            var e, i, s, n, r = /MSIE\s8\.0/.test(navigator.userAgent);
            if (t.div) {
                i = t.div.offsetHeight, s = t.div.offsetWidth, n = t.div.offsetTop;
                var o = (o = t.div.childNodes) && (o = o[0]) && o.getClientRects && o.getClientRects();
                t = t.div.getBoundingClientRect(), e = o ? Math.max(o[0] && o[0].height || 0, t.height / o.length) : 0
            }
            this.left = t.left, this.right = t.right, this.top = t.top || n, this.height = t.height || i, this.bottom = t.bottom || n + (t.height || i), this.width = t.width || s, this.lineHeight = void 0 !== e ? e : t.lineHeight, r && !this.lineHeight && (this.lineHeight = 13)
        }

        function p(t, e, i, s) {
            function n(t, e) {
                for (var n, r = new h(t), o = 1, a = 0; a < e.length; a++) {
                    for (; t.overlapsOppositeAxis(i, e[a]) || t.within(i) && t.overlapsAny(s);)t.move(e[a]);
                    if (t.within(i))return t;
                    var l = t.intersectPercentage(i);
                    o > l && (n = new h(t), o = l), t = new h(r)
                }
                return n || r
            }

            var r = new h(e), o = e.cue, a = l(o), c = [];
            if (o.snapToLines) {
                var u;
                switch (o.vertical) {
                    case"":
                        c = ["+y", "-y"], u = "height";
                        break;
                    case"rl":
                        c = ["+x", "-x"], u = "width";
                        break;
                    case"lr":
                        c = ["-x", "+x"], u = "width"
                }
                var p = r.lineHeight, d = p * Math.round(a), f = i[u] + p, y = c[0];
                Math.abs(d) > f && (d = 0 > d ? -1 : 1, d *= Math.ceil(f / p) * p), 0 > a && (d += "" === o.vertical ? i.height : i.width, c = c.reverse()), r.move(y, d)
            } else {
                var g = r.lineHeight / i.height * 100;
                switch (o.lineAlign) {
                    case"middle":
                        a -= g / 2;
                        break;
                    case"end":
                        a -= g
                }
                switch (o.vertical) {
                    case"":
                        e.applyStyles({top: e.formatStyle(a, "%")});
                        break;
                    case"rl":
                        e.applyStyles({left: e.formatStyle(a, "%")});
                        break;
                    case"lr":
                        e.applyStyles({right: e.formatStyle(a, "%")})
                }
                c = ["+y", "-x", "+x", "-y"], r = new h(e)
            }
            var v = n(r, c);
            e.move(v.toCSSCompatValues(i))
        }

        function d() {
        }

        var f = Object.create || function () {
                function t() {
                }

                return function (e) {
                    if (1 !== arguments.length)throw new Error("Object.create shim only accepts one parameter.");
                    return t.prototype = e, new t
                }
            }();
        e.prototype = f(Error.prototype), e.prototype.constructor = e, e.Errors = {
            BadSignature: {
                code: 0,
                message: "Malformed WebVTT signature."
            }, BadTimeStamp: {code: 1, message: "Malformed time stamp."}
        }, s.prototype = {
            set: function (t, e) {
                this.get(t) || "" === e || (this.values[t] = e)
            }, get: function (t, e, i) {
                return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
            }, has: function (t) {
                return t in this.values
            }, alt: function (t, e, i) {
                for (var s = 0; s < i.length; ++s)if (e === i[s]) {
                    this.set(t, e);
                    break
                }
            }, integer: function (t, e) {
                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
            }, percent: function (t, e) {
                var i;
                return (i = e.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (e = parseFloat(e), e >= 0 && 100 >= e) ? (this.set(t, e), !0) : !1
            }
        };
        var y = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&lrm;": "‎", "&rlm;": "‏", "&nbsp;": " "}, g = {
            c: "span",
            i: "i",
            b: "b",
            u: "u",
            ruby: "ruby",
            rt: "rt",
            v: "span",
            lang: "span"
        }, v = {
            v: "title",
            lang: "lang"
        }, m = {rt: "ruby"}, b = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
        c.prototype.applyStyles = function (t, e) {
            e = e || this.div;
            for (var i in t)t.hasOwnProperty(i) && (e.style[i] = t[i])
        }, c.prototype.formatStyle = function (t, e) {
            return 0 === t ? 0 : t + e
        }, u.prototype = f(c.prototype), u.prototype.constructor = u, h.prototype.move = function (t, e) {
            switch (e = void 0 !== e ? e : this.lineHeight, t) {
                case"+x":
                    this.left += e, this.right += e;
                    break;
                case"-x":
                    this.left -= e, this.right -= e;
                    break;
                case"+y":
                    this.top += e, this.bottom += e;
                    break;
                case"-y":
                    this.top -= e, this.bottom -= e
            }
        }, h.prototype.overlaps = function (t) {
            return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
        }, h.prototype.overlapsAny = function (t) {
            for (var e = 0; e < t.length; e++)if (this.overlaps(t[e]))return !0;
            return !1
        }, h.prototype.within = function (t) {
            return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
        }, h.prototype.overlapsOppositeAxis = function (t, e) {
            switch (e) {
                case"+x":
                    return this.left < t.left;
                case"-x":
                    return this.right > t.right;
                case"+y":
                    return this.top < t.top;
                case"-y":
                    return this.bottom > t.bottom
            }
        }, h.prototype.intersectPercentage = function (t) {
            var e = Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)), i = Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)), s = e * i;
            return s / (this.height * this.width)
        }, h.prototype.toCSSCompatValues = function (t) {
            return {
                top: this.top - t.top,
                bottom: t.bottom - this.bottom,
                left: this.left - t.left,
                right: t.right - this.right,
                height: this.height,
                width: this.width
            }
        }, h.getSimpleBoxPosition = function (t) {
            var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0, i = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0, s = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
            t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t;
            var n = {
                left: t.left,
                right: t.right,
                top: t.top || s,
                height: t.height || e,
                bottom: t.bottom || s + (t.height || e),
                width: t.width || i
            };
            return n
        }, d.StringDecoder = function () {
            return {
                decode: function (t) {
                    if (!t)return "";
                    if ("string" != typeof t)throw new Error("Error - expected string data.");
                    return decodeURIComponent(encodeURIComponent(t))
                }
            }
        }, d.convertCueToDOMTree = function (t, e) {
            return t && e ? o(t, e) : null
        };
        var w = .05, T = "sans-serif", S = "1.5%";
        d.processCues = function (t, e, i) {
            function s(t) {
                for (var e = 0; e < t.length; e++)if (t[e].hasBeenReset || !t[e].displayState)return !0;
                return !1
            }

            if (!t || !e || !i)return null;
            for (; i.firstChild;)i.removeChild(i.firstChild);
            var n = t.document.createElement("div");
            if (n.style.position = "absolute", n.style.left = "0", n.style.right = "0", n.style.top = "0", n.style.bottom = "0", n.style.margin = S, i.appendChild(n), s(e)) {
                var r = [], o = h.getSimpleBoxPosition(n), a = Math.round(o.height * w * 100) / 100, l = {font: a + "px " + T};
                !function () {
                    for (var i, s, a = 0; a < e.length; a++)s = e[a], i = new u(t, s, l), n.appendChild(i.div), p(t, i, o, r), s.displayState = i.div, r.push(h.getSimpleBoxPosition(i))
                }()
            } else for (var c = 0; c < e.length; c++)n.appendChild(e[c].displayState)
        }, d.Parser = function (t, e, i) {
            i || (i = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = []
        }, d.Parser.prototype = {
            reportOrThrowError: function (t) {
                if (!(t instanceof e))throw t;
                this.onparsingerror && this.onparsingerror(t)
            }, parse: function (t) {
                function i() {
                    for (var t = l.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e];)++e;
                    var i = t.substr(0, e);
                    return "\r" === t[e] && ++e, "\n" === t[e] && ++e, l.buffer = t.substr(e), i
                }

                function o(t) {
                    var e = new s;
                    if (n(t, function (t, i) {
                            switch (t) {
                                case"id":
                                    e.set(t, i);
                                    break;
                                case"width":
                                    e.percent(t, i);
                                    break;
                                case"lines":
                                    e.integer(t, i);
                                    break;
                                case"regionanchor":
                                case"viewportanchor":
                                    var n = i.split(",");
                                    if (2 !== n.length)break;
                                    var r = new s;
                                    if (r.percent("x", n[0]), r.percent("y", n[1]), !r.has("x") || !r.has("y"))break;
                                    e.set(t + "X", r.get("x")), e.set(t + "Y", r.get("y"));
                                    break;
                                case"scroll":
                                    e.alt(t, i, ["up"])
                            }
                        }, /=/, /\s/), e.has("id")) {
                        var i = new (l.vttjs.VTTRegion || l.window.VTTRegion);
                        i.width = e.get("width", 100), i.lines = e.get("lines", 3), i.regionAnchorX = e.get("regionanchorX", 0), i.regionAnchorY = e.get("regionanchorY", 100), i.viewportAnchorX = e.get("viewportanchorX", 0), i.viewportAnchorY = e.get("viewportanchorY", 100), i.scroll = e.get("scroll", ""), l.onregion && l.onregion(i), l.regionList.push({
                            id: e.get("id"),
                            region: i
                        })
                    }
                }

                function a(t) {
                    n(t, function (t, e) {
                        switch (t) {
                            case"Region":
                                o(e)
                        }
                    }, /:/)
                }

                var l = this;
                t && (l.buffer += l.decoder.decode(t, {stream: !0}));
                try {
                    var c;
                    if ("INITIAL" === l.state) {
                        if (!/\r\n|\n/.test(l.buffer))return this;
                        c = i();
                        var u = c.match(/^WEBVTT([ \t].*)?$/);
                        if (!u || !u[0])throw new e(e.Errors.BadSignature);
                        l.state = "HEADER"
                    }
                    for (var h = !1; l.buffer;) {
                        if (!/\r\n|\n/.test(l.buffer))return this;
                        switch (h ? h = !1 : c = i(), l.state) {
                            case"HEADER":
                                /:/.test(c) ? a(c) : c || (l.state = "ID");
                                continue;
                            case"NOTE":
                                c || (l.state = "ID");
                                continue;
                            case"ID":
                                if (/^NOTE($|[ \t])/.test(c)) {
                                    l.state = "NOTE";
                                    break
                                }
                                if (!c)continue;
                                if (l.cue = new (l.vttjs.VTTCue || l.window.VTTCue)(0, 0, ""), l.state = "CUE", -1 === c.indexOf("-->")) {
                                    l.cue.id = c;
                                    continue
                                }
                            case"CUE":
                                try {
                                    r(c, l.cue, l.regionList)
                                } catch (p) {
                                    l.reportOrThrowError(p), l.cue = null, l.state = "BADCUE";
                                    continue
                                }
                                l.state = "CUETEXT";
                                continue;
                            case"CUETEXT":
                                var d = -1 !== c.indexOf("-->");
                                if (!c || d && (h = !0)) {
                                    l.oncue && l.oncue(l.cue), l.cue = null, l.state = "ID";
                                    continue
                                }
                                l.cue.text && (l.cue.text += "\n"), l.cue.text += c;
                                continue;
                            case"BADCUE":
                                c || (l.state = "ID");
                                continue
                        }
                    }
                } catch (p) {
                    l.reportOrThrowError(p), "CUETEXT" === l.state && l.cue && l.oncue && l.oncue(l.cue), l.cue = null, l.state = "INITIAL" === l.state ? "BADWEBVTT" : "BADCUE"
                }
                return this
            }, flush: function () {
                var t = this;
                try {
                    if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state)throw new e(e.Errors.BadSignature)
                } catch (i) {
                    t.reportOrThrowError(i)
                }
                return t.onflush && t.onflush(), this
            }
        }, t.WebVTT = d
    }(this, this.vttjs || {}),
    function (t) {
        var e, i = 0, s = t.MediaSource || t.WebKitMediaSource || {}, n = t.URL || {}, r = /video\/flv(;\s*codecs=["']vp6,aac["'])?$/, o = "blob:vjs-media-source/";
        e = function () {
        }, e.prototype.init = function () {
            this.listeners = []
        }, e.prototype.addEventListener = function (t, e) {
            this.listeners[t] || (this.listeners[t] = []), this.listeners[t].unshift(e)
        }, e.prototype.removeEventListener = function (t, e) {
            for (var i = this.listeners[t], s = i.length; s--;)if (i[s] === e)return i.splice(s, 1)
        }, e.prototype.trigger = function (t) {
            for (var e = this.listeners[t.type] || [], i = e.length; i--;)e[i](t)
        }, videojs.MediaSource = function () {
            var t = this;
            videojs.MediaSource.prototype.init.call(this), this.sourceBuffers = [], this.readyState = "closed", this.listeners = {
                sourceopen: [function (e) {
                    t.swfObj = document.getElementById(e.swfId), t.readyState = "open", t.swfObj && t.swfObj.vjs_load()
                }], webkitsourceopen: [function (e) {
                    t.trigger({type: "sourceopen"})
                }]
            }
        }, videojs.MediaSource.prototype = new e, videojs.MediaSource.BYTES_PER_SECOND_GOAL = 4194304, videojs.MediaSource.TICKS_PER_SECOND = 60, videojs.MediaSource.prototype.addSourceBuffer = function (t) {
            var e;
            if (r.test(t))e = new videojs.SourceBuffer(this); else {
                if (!this.nativeSource)throw new Error("NotSupportedError (Video.js)");
                e = this.nativeSource.addSourceBuffer.apply(this.nativeSource, arguments)
            }
            return this.sourceBuffers.push(e), e
        }, videojs.MediaSource.prototype.endOfStream = function () {
            this.readyState = "ended"
        }, videojs.mediaSources = {}, videojs.MediaSource.open = function (t, e) {
            var i = videojs.mediaSources[t];
            if (!i)throw new Error("Media Source not found (Video.js)");
            i.trigger({type: "sourceopen", swfId: e})
        }, videojs.SourceBuffer = function (e) {
            var i = this, s = [], n = 0, r = function (e) {
                t.setTimeout(e, Math.ceil(1e3 / videojs.MediaSource.TICKS_PER_SECOND))
            }, o = function () {
                var e, a, l, c, u, h = "";
                if (s.length) {
                    for (u = document.hidden ? videojs.MediaSource.BYTES_PER_SECOND_GOAL : Math.ceil(videojs.MediaSource.BYTES_PER_SECOND_GOAL / videojs.MediaSource.TICKS_PER_SECOND), c = new Uint8Array(Math.min(u, n)), a = c.byteLength; a;)e = s[0].subarray(0, a), c.set(e, c.byteLength - a), e.byteLength < s[0].byteLength ? s[0] = s[0].subarray(a) : s.shift(), a -= e.byteLength;
                    for (n -= c.byteLength, a = 0, l = c.byteLength; l > a; a++)h += String.fromCharCode(c[a]);
                    b64str = t.btoa(h), i.source.swfObj.CallFunction('<invoke name="vjs_appendBuffer"returntype="javascript"><arguments><string>' + b64str + "</string></arguments></invoke>"), 0 !== n ? r(o) : (i.updating = !1, i.trigger({type: "updateend"}), "ended" === i.source.readyState && i.source.swfObj.vjs_endOfStream())
                }
            };
            videojs.SourceBuffer.prototype.init.call(this), this.source = e, this.updating = !1, this.appendBuffer = function (t) {
                var e;
                if (this.updating)throw e = new Error("SourceBuffer.append() cannot be called while an update is in progress"), e.name = "InvalidStateError", e.code = 11, e;
                0 === s.length && r(o), this.updating = !0, this.source.readyState = "open", this.trigger({type: "update"}), s.push(t), n += t.byteLength
            }, this.abort = function () {
                s = [], n = 0, this.source.swfObj.vjs_abort(), this.updating && (this.updating = !1, this.trigger({type: "updateend"}))
            }
        }, videojs.SourceBuffer.prototype = new e, videojs.URL = {
            createObjectURL: function (t) {
                var e = o + i;
                return i++, videojs.mediaSources[e] = t, e
            }
        }, videojs.plugin("mediaSource", function (t) {
            var e = this;
            e.on("loadstart", function () {
                var t, i = e.currentSrc(), r = function (e) {
                    t.trigger(e)
                };
                "Html5" === e.techName && 0 === i.indexOf(o) && (t = videojs.mediaSources[i], t.nativeUrl || (t.nativeSource = new s, t.nativeSource.addEventListener("sourceopen", r, !1), t.nativeSource.addEventListener("webkitsourceopen", r, !1), t.nativeUrl = n.createObjectURL(t.nativeSource)), e.src(t.nativeUrl))
            })
        })
    }(this),
    function (t, e, i, s) {
        "use strict";
        var n, r, o, a = 1.1, l = 500;
        r = function (t) {
            return t.retries && t.retries >= 2
        },
            e.Hls = e.Flash.extend({
                init: function (i, s, n) {
                    var r = s.source, o = i.options();
                    i.hls = this, delete s.source, s.swf = o.flash.swf, e.Flash.call(this, i, s, n), s.source = r, this.bytesReceived = 0, this.hasPlayed_ = !1, this.on(i, "loadstart", function () {
                        this.hasPlayed_ = !1, this.one(this.mediaSource, "sourceopen", this.setupFirstPlay)
                    }),
                        this.on(i, ["play", "loadedmetadata"], this.setupFirstPlay),
                        this.currentTime = e.Hls.prototype.currentTime,
                        this.setCurrentTime = e.Hls.prototype.setCurrentTime,
                        this.segmentBuffer_ = [],
                        this.startCheckingBuffer_(),
                        e.Hls.prototype.src.call(this, s.source && s.source.src),
                    t.peer5 && this.src_ && console.log(this.src_) && peer5.prefetch(this.src_)
                }
            }),
            e.options.techOrder.unshift("hls"),
            e.Hls.GOAL_BUFFER_LENGTH = t.peer5 ? peer5.getConfig("MEDIA_MAXBUFFER") || 30 : 30,
            e.Hls.prototype.src = function (t) {
                var i, r, o, a = this, l = this.player(), c = l.options().hls || {};
                t && (this.src_ && this.resetSrc_(), this.src_ = t, i = new e.MediaSource, o = {
                    src: e.URL.createObjectURL(i),
                    type: "video/flv"
                }, this.mediaSource = i,
                    this.segmentBuffer_ = [], this.segmentParser_ = new e.Hls.SegmentParser,
                    this.setupMetadataCueTranslation_(),
                    this.mediaSource.addEventListener("sourceopen",
                        e.bind(this, this.handleSourceOpen)),
                this.playlists && this.playlists.dispose(),
                    this.mediaIndex = 0,
                    this.playlists = new e.Hls.PlaylistLoader(this.src_, c.withCredentials),
                    this.playlists.on("loadedmetadata",
                        e.bind(this, function () {
                            var t, i, n, o, a, c, u;
                            r = this.playlists.media(), this.bandwidth === s && this.setBandwidth({bandwidth: 5 * this.playlists.bandwidth}),
                                t = this.selectPlaylist(),
                                n = r.attributes && r.attributes.BANDWIDTH || 0,
                                o = t.attributes && t.attributes.BANDWIDTH || 0,
                                a = r.segments && r.segments[this.mediaIndex].duration || r.targetDuration, c = a * o / this.bandwidth, c || (c = 1 / 0), u = 10, o > n && u >= c ? (this.playlists.media(t), i = e.bind(this, function () {
                                this.setupFirstPlay(),
                                    this.fillBuffer(),
                                    l.trigger("loadedmetadata"),
                                    this.playlists.off("loadedplaylist", i)
                            }),
                                this.playlists.on("loadedplaylist", i)) : (this.setupFirstPlay(), this.fillBuffer(), l.trigger("loadedmetadata"))
                        })),
                    this.playlists.on("error", e.bind(this, function () {
                        l.error(this.playlists.error)
                    })),
                    this.playlists.on("loadedplaylist", e.bind(this, function () {
                        var t = this.playlists.media();
                        t && (this.updateDuration(this.playlists.media()), this.mediaIndex = e.Hls.translateMediaIndex(this.mediaIndex, r, t), r = t, this.fetchKeys_())
                    })),
                    this.playlists.on("mediachange", e.bind(this, function () {
                        n && this.cancelKeyXhr(), l.trigger("mediachange")
                    })),
                    this.player().ready(function () {
                        a.el() && a.el().vjs_src(o.src)
                    }))
            },
            e.Hls.getMediaIndexForLive_ = function (t) {
                if (!t.segments)return 0;
                for (var e = t.segments.length, i = 0, s = 3 * (t.targetDuration || 10); s > i && e > 0;)i += t.segments[e - 1].duration, e--;
                return e
            },
            e.Hls.prototype.handleSourceOpen = function () {
                var t = this.player(),
                    e = this.mediaSource.addSourceBuffer('video/flv; codecs="vp6,aac"');
                this.sourceBuffer = e,
                t.options().autoplay && t.play(),
                    e.appendBuffer(this.segmentParser_.getFlvHeader())
            },
            e.Hls.prototype.setupMetadataCueTranslation_ = function () {
                var t, i = this, s = i.segmentParser_.metadataStream;
                i.player().addTextTrack && (s.on("data", function (n) {
                    var r, o;
                    if (!t)for (t = i.player().addTextTrack("metadata", "Timed Metadata"), t.inBandMetadataTrackDispatchType = e.Hls.SegmentParser.STREAM_TYPES.metadata.toString(16).toUpperCase(), r = 0; r < s.descriptor.length; r++)o = ("00" + s.descriptor[r].toString(16).toUpperCase()).slice(-2), t.inBandMetadataTrackDispatchType += o;
                    i.segmentBuffer_[0].pendingMetadata.push({textTrack: t, metadata: n})
                }), i.on(i.player(), "seeking", function () {
                    var s, n, r;
                    if (t)for (s = i.playlists.media(), n = i.playlists.expiredPreDiscontinuity_ + i.playlists.expiredPostDiscontinuity_, n += e.Hls.Playlist.duration(s, s.mediaSequence, s.mediaSequence + i.mediaIndex), r = t.cues.length; r--;)t.cues[r].startTime >= n && t.removeCue(t.cues[r])
                }))
            }, e.Hls.prototype.addCuesForMetadata_ = function (i) {
            var s, n, r, o, a, l, c, u, h;
            for (c = this.playlists.expiredPreDiscontinuity_, c += this.playlists.expiredPostDiscontinuity_, c += e.Hls.Playlist.duration(i.playlist, i.playlist.mediaSequence, i.playlist.mediaSequence + i.mediaIndex), l = i.playlist.segments[i.mediaIndex], a = Math.min(isFinite(l.minVideoPts) ? l.minVideoPts : 1 / 0, isFinite(l.minAudioPts) ? l.minAudioPts : 1 / 0); i.pendingMetadata.length;) {
                for (o = i.pendingMetadata[0].metadata, u = i.pendingMetadata[0].textTrack, s = 0; s < o.frames.length; s++)r = o.frames[s], h = c + .001 * (o.pts - a), n = new t.VTTCue(h, h, r.value || r.url || ""), n.frame = r, n.pts_ = o.pts, u.addCue(n);
                i.pendingMetadata.shift()
            }
        },
            e.Hls.prototype.setupFirstPlay = function () {
                var e, i;
                if (i = this.playlists.media(), !this.hasPlayed_ && this.sourceBuffer && i && this.paused() === !1 && (this.hasPlayed_ = !0, this.duration() === 1 / 0))
                    if (t.peer5) {
                        var s = peer5.getConfig("MEDIA_LIVE_START_POS");
                        this.setCurrentTime(s)
                    }
                    else e = this.seekable(),
                    e.length && this.setCurrentTime(e.end(0))
            }, e.Hls.prototype.play = function () {
            return this.ended() && (this.mediaIndex = 0), this.hasPlayed_ ? (this.duration() === 1 / 0 && this.currentTime() < this.seekable().start(0) && this.setCurrentTime(this.seekable().start(0)), void e.Flash.prototype.play.apply(this, arguments)) : (e.Flash.prototype.play.apply(this, arguments), this.setupFirstPlay())
        }, e.Hls.prototype.currentTime = function () {
            return this.lastSeekedTime_ ? this.lastSeekedTime_ : this.el() && this.el().vjs_getProperty ? this.el().vjs_getProperty("currentTime") : 0
        }, e.Hls.prototype.setCurrentTime = function (t) {
            return this.playlists && this.playlists.media() && this.playlists.media().segments ? (t < this.seekable().start(0) ? t = this.seekable().start(0) : t > this.seekable().end(0) && (t = this.seekable().end(0)), this.lastSeekedTime_ = t, this.mediaIndex = this.playlists.getMediaIndexForTime_(t), this.sourceBuffer && this.sourceBuffer.abort(), this.cancelSegmentXhr(), n && (n.aborted = !0, this.cancelKeyXhr()), this.segmentBuffer_ = [], void this.fillBuffer(1e3 * t)) : 0
        }, e.Hls.prototype.duration = function () {
            var t = this.playlists;
            return t ? e.Hls.Playlist.duration(t.media()) : 0
        }, e.Hls.prototype.seekable = function () {
            var t, i, s;
            return this.playlists && (s = this.playlists.media()) ? (t = e.Hls.Playlist.seekable(s), t.length ? (i = this.playlists.expiredPostDiscontinuity_ - this.playlists.expiredPreDiscontinuity_, e.createTimeRange(i, i + (t.end(0) - t.start(0)))) : t) : e.createTimeRange()
        }, e.Hls.prototype.updateDuration = function (t) {
            var i = this.player(), s = i.duration(), n = e.Hls.Playlist.duration(t);
            s !== n && i.trigger("durationchange")
        }, e.Hls.prototype.resetSrc_ = function () {
            this.cancelSegmentXhr(), this.cancelKeyXhr(), this.sourceBuffer && this.sourceBuffer.abort();
        }, e.Hls.prototype.cancelKeyXhr = function () {
            n && (n.onreadystatechange = null, n.abort(), n = null)
        }, e.Hls.prototype.cancelSegmentXhr = function () {
            this.segmentXhr_ && (this.segmentXhr_.onreadystatechange = null, this.segmentXhr_.abort(), this.segmentXhr_ = null)
        }, e.Hls.prototype.dispose = function () {
            this.stopCheckingBuffer_(), this.playlists && this.playlists.dispose(), this.resetSrc_(), e.Flash.prototype.dispose.call(this)
        }, e.Hls.prototype.selectPlaylist = function () {
            var t, i, s, n, r, o, l, c, u = this.player(), h = this.playlists.master.playlists.slice(), p = [], d = h.length;
            for (h.sort(e.Hls.comparePlaylistBandwidth); d--;)i = h[d], i.attributes && i.attributes.BANDWIDTH && (t = i.attributes.BANDWIDTH * a, t < u.hls.bandwidth && (p.push(i), n || (n = i)));
            for (d = p.length, p.sort(e.Hls.comparePlaylistResolution), i = null, l = parseInt(getComputedStyle(u.el()).width, 10), c = parseInt(getComputedStyle(u.el()).height, 10); d--;)if (s = i, i = p[d], i.attributes && i.attributes.RESOLUTION && i.attributes.RESOLUTION.width && i.attributes.RESOLUTION.height) {
                if (i.attributes.RESOLUTION.width === l && i.attributes.RESOLUTION.height === c) {
                    r = null, o = i;
                    break
                }
                if (i.attributes.RESOLUTION.width < l && i.attributes.RESOLUTION.height < c) {
                    s && s.attributes && s.attributes.RESOLUTION && s.attributes.RESOLUTION.width && s.attributes.RESOLUTION.height && (r = s), o = i;
                    break
                }
            }
            return r || o || n || h[0]
        }, e.Hls.prototype.checkBuffer_ = function () {
            this.checkBufferTimeout_ && (t.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null), this.fillBuffer(), this.drainBuffer(), this.checkBufferTimeout_ = t.setTimeout(e.bind(this, this.checkBuffer_), l)
        }, e.Hls.prototype.startCheckingBuffer_ = function () {
            this.player().on("waiting", e.bind(this, this.drainBuffer)), this.checkBuffer_()
        }, e.Hls.prototype.stopCheckingBuffer_ = function () {
            t.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null, this.player().off("waiting", this.drainBuffer)
        }, e.Hls.prototype.fillBuffer = function (t) {
            var i, n, r = this.player(), o = r.buffered(), a = 0;
            (r.hasClass("vjs-has-started") || "none" !== r.options().preload) && r.currentSrc() && this.playlists && (this.segmentXhr_ || "HAVE_NOTHING" !== this.playlists.state && this.playlists.media() && this.playlists.media().segments && (this.playlists.media().endList || r.hasClass("vjs-has-started") || t !== s) && "SWITCHING_MEDIA" !== this.playlists.state && (i = this.playlists.media().segments[this.mediaIndex], i && (o && (a = r.buffered().end(0) - r.currentTime()), "number" != typeof t && a >= e.Hls.GOAL_BUFFER_LENGTH || (n = this.playlistUriToUrl(i.uri), this.loadSegment(n, t)))))
        }, e.Hls.prototype.playlistUriToUrl = function (t) {
            var e;
            return e = this.playlists.media().uri === this.src_ ? o(this.src_, t) : o(o(this.src_, this.playlists.media().uri || ""), t)
        }, e.Hls.prototype.setBandwidth = function (t) {
            var e = this;
            e.segmentXhrTime = t.roundTripTime, e.bandwidth = t.bandwidth, e.bytesReceived += t.bytesReceived || 0, e.trigger("bandwidthupdate")
        }, e.Hls.prototype.loadSegment = function (t, i) {
            var s = this, n = this.player(), r = n.options().hls || {};
            this.segmentXhr_ = e.Hls.xhr({
                url: t,
                responseType: "arraybuffer",
                withCredentials: r.withCredentials
            }, function (t, e) {
                var r;
                return s.segmentXhr_ = null, t ? "timeout" === t ? (s.bandwidth = 1, s.playlists.media(s.selectPlaylist())) : (s.error = {
                    status: this.status,
                    message: "HLS segment request error at URL: " + e,
                    code: this.status >= 500 ? 4 : 2
                }, void s.mediaIndex++) : void(this.response && (s.setBandwidth(this), r = {
                    mediaIndex: s.mediaIndex,
                    playlist: s.playlists.media(),
                    offset: i,
                    bytes: null,
                    encryptedBytes: null,
                    decrypter: null,
                    pendingMetadata: []
                }, r.playlist.segments[r.mediaIndex].key ? r.encryptedBytes = new Uint8Array(this.response) : r.bytes = new Uint8Array(this.response), s.segmentBuffer_.push(r), n.trigger("progress"), s.drainBuffer(), s.mediaIndex++, s.playlists.media(s.selectPlaylist())))
            })
        }, e.Hls.prototype.drainBuffer = function (t) {
            var i, s, n, o, a, l, c, u, h, p, d = 0, f = 0, y = this.segmentBuffer_;
            if (y.length && this.sourceBuffer && !this.sourceBuffer.updating) {
                if (i = y[0], s = i.mediaIndex, n = i.playlist, o = i.offset, l = i.bytes, c = n.segments[s], c.key && !l)return r(c.key) ? y.shift() : c.key.bytes ? i.decrypter ? void 0 : (h = c.key.iv || new Uint32Array([0, 0, 0, s + n.mediaSequence]), u = new e.Hls.Decrypter(i.encryptedBytes, c.key.bytes, h, function (t, e) {
                    i.bytes = e
                }), void(i.decrypter = u)) : this.fetchKeys_();
                for (t = t || {}, this.segmentParser_.parseSegmentBinaryData(l), this.segmentParser_.flushTags(), a = [], this.segmentParser_.tagsAvailable() && (this.segmentParser_.stats.h264Tags() && (c.minVideoPts = this.segmentParser_.stats.minVideoPts(), c.maxVideoPts = this.segmentParser_.stats.maxVideoPts()), this.segmentParser_.stats.aacTags() && (c.minAudioPts = this.segmentParser_.stats.minAudioPts(), c.maxAudioPts = this.segmentParser_.stats.maxAudioPts())); this.segmentParser_.tagsAvailable();)a.push(this.segmentParser_.getNextTag());
                if (this.addCuesForMetadata_(i), this.updateDuration(this.playlists.media()), "number" == typeof o) {
                    if (a.length) {
                        for (f = this.playlists.expiredPostDiscontinuity_ + this.playlists.expiredPreDiscontinuity_, f += e.Hls.Playlist.duration(n, n.mediaSequence, n.mediaSequence + s), f = o - 1e3 * f, p = f + a[0].pts; a[d + 1] && a[d].pts < p;)d++;
                        this.el().vjs_setProperty("currentTime", .001 * (a[d].pts - p + o)), a = a.slice(d)
                    }
                    this.lastSeekedTime_ = null
                }
                c.discontinuity && a.length && this.el().vjs_discontinuity(), function () {
                    var t, e, i = 0;
                    for (d = 0; d < a.length; d++)i += a[d].bytes.byteLength;
                    for (e = new Uint8Array(i), d = 0, t = 0; d < a.length; d++)e.set(a[d].bytes, t), t += a[d].bytes.byteLength;
                    this.sourceBuffer.appendBuffer(e)
                }.call(this), y.shift(), this.duration() !== 1 / 0 && s + 1 === n.segments.length && this.mediaSource.endOfStream()
            }
        }, e.Hls.prototype.fetchKeys_ = function () {
            var t, i, s, o, a, l, c, u;
            if (!n && this.segmentBuffer_.length)for (s = this, o = this.player(), a = o.options().hls || {}, u = function (t) {
                return function (e) {
                    return n = null, e || !this.response || 16 !== this.response.byteLength ? (t.retries = t.retries || 0, t.retries++, void(this.aborted || s.fetchKeys_())) : (c = new DataView(this.response), t.bytes = new Uint32Array([c.getUint32(0), c.getUint32(4), c.getUint32(8), c.getUint32(12)]), void s.checkBuffer_())
                }
            }, t = 0; t < s.segmentBuffer_.length; t++)if (l = s.segmentBuffer_[t].playlist.segments[s.segmentBuffer_[t].mediaIndex], i = l.key, i && !i.bytes && !r(i)) {
                n = e.Hls.xhr({
                    url: this.playlistUriToUrl(i.uri),
                    responseType: "arraybuffer",
                    withCredentials: a.withCredentials
                }, u(i));
                break
            }
        }, e.Hls.supportsNativeHls = function () {
            var t, s, n = i.createElement("video");
            return e.Html5.isSupported() ? (t = n.canPlayType("application/x-mpegURL"), s = n.canPlayType("application/vnd.apple.mpegURL"), /probably|maybe/.test(t) || /probably|maybe/.test(s)) : !1
        }(), e.Hls.isSupported = function () {
            return !e.Hls.supportsNativeHls && e.Flash.isSupported() && e.MediaSource && t.Uint8Array
        }, e.Hls.canPlaySource = function (t) {
            var e = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
            return e.test(t.type)
        }, e.Hls.getPlaylistDuration = function (t, i, s) {
            return e.log.warn("videojs.Hls.getPlaylistDuration is deprecated. Use videojs.Hls.Playlist.duration instead"), e.Hls.Playlist.duration(t, i, s)
        }, e.Hls.getPlaylistTotalDuration = function (t) {
            return e.log.warn("videojs.Hls.getPlaylistTotalDuration is deprecated. Use videojs.Hls.Playlist.duration instead"), e.Hls.Playlist.duration(t)
        }, e.Hls.translateMediaIndex = function (t, i, s) {
            var n;
            return 0 === t ? 0 : s && s.segments ? (n = t + (i.mediaSequence - s.mediaSequence), n > s.segments.length || 0 > n ? e.Hls.getMediaIndexForLive_(s) + 1 : n) : 0
        }, e.Hls.getMediaIndexByTime = function () {
            return e.log.warn("getMediaIndexByTime is deprecated. Use PlaylistLoader.getMediaIndexForTime_ instead."), 0
        }, e.Hls.comparePlaylistBandwidth = function (e, i) {
            var s, n;
            return e.attributes && e.attributes.BANDWIDTH && (s = e.attributes.BANDWIDTH), s = s || t.Number.MAX_VALUE, i.attributes && i.attributes.BANDWIDTH && (n = i.attributes.BANDWIDTH), n = n || t.Number.MAX_VALUE, s - n
        }, e.Hls.comparePlaylistResolution = function (e, i) {
            var s, n;
            return e.attributes && e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (s = e.attributes.RESOLUTION.width), s = s || t.Number.MAX_VALUE, i.attributes && i.attributes.RESOLUTION && i.attributes.RESOLUTION.width && (n = i.attributes.RESOLUTION.width), n = n || t.Number.MAX_VALUE, s === n && e.attributes.BANDWIDTH && i.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - i.attributes.BANDWIDTH : s - n
        }, o = e.Hls.resolveUrl = function (t, e) {
            var s, n, r = i.querySelector("base"), o = i.querySelector("head"), a = i.createElement("a"), l = r;
            return r ? s = r.href : l = o.appendChild(i.createElement("base")), l.href = t, a.href = e, n = a.href, r ? r.href = s : o.removeChild(l), n
        }
    }(window, window.videojs, document), function (t, e) {
    var i = function () {
        this.init = function () {
            var t = {};
            this.on = function (e, i) {
                t[e] || (t[e] = []), t[e].push(i)
            }, this.off = function (e, i) {
                var s;
                return t[e] ? (s = t[e].indexOf(i), t[e].splice(s, 1), s > -1) : !1
            }, this.trigger = function (e) {
                var i, s, n, r;
                if (i = t[e])for (r = Array.prototype.slice.call(arguments, 1), n = i.length, s = 0; n > s; ++s)i[s].apply(this, r)
            }, this.dispose = function () {
                t = {}
            }
        }
    };
    i.prototype.pipe = function (t) {
        this.on("data", function (e) {
            t.push(e)
        })
    }, t.Hls.Stream = i
}(window.videojs), function (t) {
    t.videojs = t.videojs || {}, t.videojs.Hls = t.videojs.Hls || {};
    var e = t.videojs.Hls;
    e.FlvTag = function (t, i) {
        var s, n = 0, r = function (t, e) {
            var i, s = t.position + e;
            s < t.bytes.byteLength || (i = new Uint8Array(2 * s), i.set(t.bytes.subarray(0, t.position), 0), t.bytes = i, t.view = new DataView(t.bytes.buffer))
        }, o = e.FlvTag.widthBytes || new Uint8Array("width".length), a = e.FlvTag.heightBytes || new Uint8Array("height".length), l = e.FlvTag.videocodecidBytes || new Uint8Array("videocodecid".length);
        if (!e.FlvTag.widthBytes) {
            for (s = 0; s < "width".length; s++)o[s] = "width".charCodeAt(s);
            for (s = 0; s < "height".length; s++)a[s] = "height".charCodeAt(s);
            for (s = 0; s < "videocodecid".length; s++)l[s] = "videocodecid".charCodeAt(s);
            e.FlvTag.widthBytes = o, e.FlvTag.heightBytes = a, e.FlvTag.videocodecidBytes = l
        }
        switch (this.keyFrame = !1, t) {
            case e.FlvTag.VIDEO_TAG:
                this.length = 16;
                break;
            case e.FlvTag.AUDIO_TAG:
                this.length = 13, this.keyFrame = !0;
                break;
            case e.FlvTag.METADATA_TAG:
                this.length = 29, this.keyFrame = !0;
                break;
            default:
                throw"Error Unknown TagType"
        }
        this.bytes = new Uint8Array(16384), this.view = new DataView(this.bytes.buffer), this.bytes[0] = t, this.position = this.length, this.keyFrame = i, this.pts = 0, this.dts = 0, this.writeBytes = function (t, e, i) {
            var s, n = e || 0;
            i = i || t.byteLength, s = n + i, r(this, i), this.bytes.set(t.subarray(n, s), this.position), this.position += i, this.length = Math.max(this.length, this.position)
        }, this.writeByte = function (t) {
            r(this, 1), this.bytes[this.position] = t, this.position++, this.length = Math.max(this.length, this.position)
        }, this.writeShort = function (t) {
            r(this, 2), this.view.setUint16(this.position, t), this.position += 2, this.length = Math.max(this.length, this.position)
        }, this.negIndex = function (t) {
            return this.bytes[this.length - t]
        }, this.nalUnitSize = function () {
            return 0 === n ? 0 : this.length - (n + 4)
        }, this.startNalUnit = function () {
            if (n > 0)throw new Error("Attempted to create new NAL wihout closing the old one");
            n = this.length, this.length += 4, this.position = this.length
        }, this.endNalUnit = function (t) {
            var e, i;
            this.length === n + 4 ? this.length -= 4 : n > 0 && (e = n + 4, i = this.length - e, this.position = n, this.view.setUint32(this.position, i), this.position = this.length, t && t.push(this.bytes.subarray(e, e + i))), n = 0
        }, this.writeMetaDataDouble = function (t, e) {
            var i;
            if (r(this, 2 + t.length + 9), this.view.setUint16(this.position, t.length), this.position += 2, "width" === t)this.bytes.set(o, this.position), this.position += 5; else if ("height" === t)this.bytes.set(a, this.position), this.position += 6; else if ("videocodecid" === t)this.bytes.set(l, this.position), this.position += 12; else for (i = 0; i < t.length; i++)this.bytes[this.position] = t.charCodeAt(i), this.position++;
            this.position++, this.view.setFloat64(this.position, e), this.position += 8, this.length = Math.max(this.length, this.position), ++n
        }, this.writeMetaDataBoolean = function (t, e) {
            var i;
            for (r(this, 2), this.view.setUint16(this.position, t.length), this.position += 2, i = 0; i < t.length; i++)console.assert(t.charCodeAt(i) < 255), r(this, 1), this.bytes[this.position] = t.charCodeAt(i), this.position++;
            r(this, 2), this.view.setUint8(this.position, 1), this.position++, this.view.setUint8(this.position, e ? 1 : 0), this.position++, this.length = Math.max(this.length, this.position), ++n
        }, this.finalize = function () {
            var t, s;
            switch (this.bytes[0]) {
                case e.FlvTag.VIDEO_TAG:
                    this.bytes[11] = 7 | (this.keyFrame || i ? 16 : 32), this.bytes[12] = i ? 0 : 1, t = this.pts - this.dts, this.bytes[13] = (16711680 & t) >>> 16, this.bytes[14] = (65280 & t) >>> 8, this.bytes[15] = (255 & t) >>> 0;
                    break;
                case e.FlvTag.AUDIO_TAG:
                    this.bytes[11] = 175, this.bytes[12] = i ? 0 : 1;
                    break;
                case e.FlvTag.METADATA_TAG:
                    this.position = 11, this.view.setUint8(this.position, 2), this.position++, this.view.setUint16(this.position, 10), this.position += 2, this.bytes.set([111, 110, 77, 101, 116, 97, 68, 97, 116, 97], this.position), this.position += 10, this.bytes[this.position] = 8, this.position++, this.view.setUint32(this.position, n), this.position = this.length, this.bytes.set([0, 0, 9], this.position), this.position += 3, this.length = this.position
            }
            return s = this.length - 11, this.bytes[1] = (16711680 & s) >>> 16, this.bytes[2] = (65280 & s) >>> 8, this.bytes[3] = (255 & s) >>> 0, this.bytes[4] = (16711680 & this.dts) >>> 16, this.bytes[5] = (65280 & this.dts) >>> 8, this.bytes[6] = (255 & this.dts) >>> 0, this.bytes[7] = (4278190080 & this.dts) >>> 24, this.bytes[8] = 0, this.bytes[9] = 0, this.bytes[10] = 0, r(this, 4), this.view.setUint32(this.length, this.length), this.length += 4, this.position += 4, this.bytes = this.bytes.subarray(0, this.length), this.frameTime = e.FlvTag.frameTime(this.bytes), console.assert(this.bytes.byteLength === this.length), this
        }
    }, e.FlvTag.AUDIO_TAG = 8, e.FlvTag.VIDEO_TAG = 9, e.FlvTag.METADATA_TAG = 18, e.FlvTag.isAudioFrame = function (t) {
        return e.FlvTag.AUDIO_TAG === t[0]
    }, e.FlvTag.isVideoFrame = function (t) {
        return e.FlvTag.VIDEO_TAG === t[0]
    }, e.FlvTag.isMetaData = function (t) {
        return e.FlvTag.METADATA_TAG === t[0]
    }, e.FlvTag.isKeyFrame = function (t) {
        return e.FlvTag.isVideoFrame(t) ? 23 === t[11] : e.FlvTag.isAudioFrame(t) ? !0 : e.FlvTag.isMetaData(t) ? !0 : !1
    }, e.FlvTag.frameTime = function (t) {
        var e = t[4] << 16;
        return e |= t[5] << 8, e |= t[6] << 0, e |= t[7] << 24
    }
}(this), function (t) {
    t.videojs.Hls.ExpGolomb = function (t) {
        var e = t.byteLength, i = 0, s = 0;
        this.length = function () {
            return 8 * e
        }, this.bitsAvailable = function () {
            return 8 * e + s
        }, this.loadWord = function () {
            var n = t.byteLength - e, r = new Uint8Array(4), o = Math.min(4, e);
            if (0 === o)throw new Error("no bytes available");
            r.set(t.subarray(n, n + o)), i = new DataView(r.buffer).getUint32(0), s = 8 * o, e -= o
        }, this.skipBits = function (t) {
            var n;
            s > t ? (i <<= t, s -= t) : (t -= s, n = t / 8, t -= 8 * n, e -= n, this.loadWord(), i <<= t, s -= t)
        }, this.readBits = function (t) {
            var n = Math.min(s, t), r = i >>> 32 - n;
            return console.assert(32 > t, "Cannot read more than 32 bits at a time"), s -= n, s > 0 ? i <<= n : e > 0 && this.loadWord(), n = t - n, n > 0 ? r << n | this.readBits(n) : r
        }, this.skipLeadingZeros = function () {
            var t;
            for (t = 0; s > t; ++t)if (0 !== (i & 2147483648 >>> t))return i <<= t, s -= t, t;
            return this.loadWord(), t + this.skipLeadingZeros()
        }, this.skipUnsignedExpGolomb = function () {
            this.skipBits(1 + this.skipLeadingZeros())
        }, this.skipExpGolomb = function () {
            this.skipBits(1 + this.skipLeadingZeros())
        }, this.readUnsignedExpGolomb = function () {
            var t = this.skipLeadingZeros();
            return this.readBits(t + 1) - 1
        }, this.readExpGolomb = function () {
            var t = this.readUnsignedExpGolomb();
            return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
        }, this.readBoolean = function () {
            return 1 === this.readBits(1)
        }, this.readUnsignedByte = function () {
            return this.readBits(8)
        }, this.loadWord()
    }
}(this), function () {
    var t, e = window.videojs.Hls.ExpGolomb, i = window.videojs.Hls.FlvTag;
    window.videojs.Hls.H264ExtraData = t = function () {
        this.sps = [], this.pps = []
    }, t.prototype.extraDataExists = function () {
        return this.sps.length > 0
    }, t.prototype.scaling_list = function (t, e) {
        var i, s, n = 8, r = 8;
        for (i = 0; t > i; ++i)0 !== r && (s = e.readExpGolomb(), r = (n + s + 256) % 256), n = 0 === r ? n : r
    }, t.prototype.getSps0Rbsp = function () {
        for (var t = this.sps[0], e = 1, i = 1, s = 0, n = t.byteLength - 2, r = new Uint8Array(t.byteLength); n > e;)0 === t[e] && 0 === t[e + 1] && 3 === t[e + 2] && (r.set(t.subarray(i, e + 1), s), s += e + 1 - i, i = e + 3), e++;
        return r.set(t.subarray(i), s), r.subarray(0, s + (t.byteLength - i))
    }, t.prototype.metaDataTag = function (t) {
        var s, n, r, o, a, l, c, u, h, p, d, f, y, g = new i(i.METADATA_TAG), v = 0, m = 0, b = 0, w = 0;
        if (g.dts = t, g.pts = t, s = new e(this.getSps0Rbsp()), n = s.readUnsignedByte(), s.skipBits(16), s.skipUnsignedExpGolomb(), (100 === n || 110 === n || 122 === n || 244 === n || 44 === n || 83 === n || 86 === n || 118 === n || 128 === n) && (r = s.readUnsignedExpGolomb(), 3 === r && s.skipBits(1), s.skipUnsignedExpGolomb(), s.skipUnsignedExpGolomb(), s.skipBits(1), s.readBoolean()))for (o = 3 !== r ? 8 : 12, a = 0; o > a; ++a)s.readBoolean() && (6 > a ? this.scaling_list(16, s) : this.scaling_list(64, s));
        if (s.skipUnsignedExpGolomb(), l = s.readUnsignedExpGolomb(), 0 === l)s.readUnsignedExpGolomb(); else if (1 === l)for (s.skipBits(1), s.skipExpGolomb(), s.skipExpGolomb(), c = s.readUnsignedExpGolomb(), a = 0; c > a; ++a)s.skipExpGolomb();
        return s.skipUnsignedExpGolomb(), s.skipBits(1), u = s.readUnsignedExpGolomb(), h = s.readUnsignedExpGolomb(), p = s.readBits(1), 0 === p && s.skipBits(1), s.skipBits(1), d = s.readBoolean(), d && (v = s.readUnsignedExpGolomb(), m = s.readUnsignedExpGolomb(), b = s.readUnsignedExpGolomb(), w = s.readUnsignedExpGolomb()), f = 16 * (u + 1) - 2 * v - 2 * m, y = (2 - p) * (h + 1) * 16 - 2 * b - 2 * w, g.writeMetaDataDouble("videocodecid", 7), g.writeMetaDataDouble("width", f), g.writeMetaDataDouble("height", y), g
    }, t.prototype.extraDataTag = function (t) {
        var e, s = new i(i.VIDEO_TAG, !0);
        for (s.dts = t, s.pts = t, s.writeByte(1), s.writeByte(this.sps[0][1]), s.writeByte(this.sps[0][2]), s.writeByte(this.sps[0][3]), s.writeByte(255), s.writeByte(225), s.writeShort(this.sps[0].length), s.writeBytes(this.sps[0]), s.writeByte(this.pps.length), e = 0; e < this.pps.length; ++e)s.writeShort(this.pps[e].length), s.writeBytes(this.pps[e]);
        return s
    }
}(), function (t) {
    var e, i, s = t.videojs.Hls.FlvTag, n = t.videojs.Hls.H264ExtraData;
    t.videojs.Hls.NALUnitType = i = {
        unspecified: 0,
        slice_layer_without_partitioning_rbsp_non_idr: 1,
        slice_data_partition_a_layer_rbsp: 2,
        slice_data_partition_b_layer_rbsp: 3,
        slice_data_partition_c_layer_rbsp: 4,
        slice_layer_without_partitioning_rbsp_idr: 5,
        sei_rbsp: 6,
        seq_parameter_set_rbsp: 7,
        pic_parameter_set_rbsp: 8,
        access_unit_delimiter_rbsp: 9,
        end_of_seq_rbsp: 10,
        end_of_stream_rbsp: 11
    }, t.videojs.Hls.H264Stream = e = function () {
        this._next_pts = 0, this._next_dts = 0, this._h264Frame = null, this._oldExtraData = new n, this._newExtraData = new n, this._nalUnitType = -1, this._state = 0, this.tags = []
    }, e.prototype.setTimeStampOffset = function () {
    }, e.prototype.setNextTimeStamp = function (t, e, i) {
        this._next_pts = t, this._next_dts = e, i && this.finishFrame()
    }, e.prototype.finishFrame = function () {
        this._h264Frame && (this._newExtraData.extraDataExists() && (this._oldExtraData = this._newExtraData, this._newExtraData = new n), this._oldExtraData.extraDataExists() && (this._h264Frame.keyFrame || 0 === this.tags.length) && (this.tags.push(this._oldExtraData.metaDataTag(this._h264Frame.pts)), this.tags.push(this._oldExtraData.extraDataTag(this._h264Frame.pts))), this._h264Frame.endNalUnit(), this.tags.push(this._h264Frame)), this._h264Frame = null, this._nalUnitType = -1, this._state = 0
    }, e.prototype.writeBytes = function (t, e, n) {
        var r, o, a, l;
        if (e = e || 0, n = n || 0, !(0 >= n))switch (this._state) {
            default:
            case 0:
                this._state = 1;
            case 1:
                if (t[e] <= 1 && (r = this._h264Frame ? this._h264Frame.nalUnitSize() : 0, r >= 1 && 0 === this._h264Frame.negIndex(1))) {
                    if (1 === t[e] && r >= 2 && 0 === this._h264Frame.negIndex(2))return r >= 3 && 0 === this._h264Frame.negIndex(3) ? this._h264Frame.length -= 3 : this._h264Frame.length -= 2, this._state = 3, this.writeBytes(t, e + 1, n - 1);
                    if (n > 1 && 0 === t[e] && 1 === t[e + 1])return r >= 2 && 0 === this._h264Frame.negIndex(2) ? this._h264Frame.length -= 2 : this._h264Frame.length -= 1, this._state = 3, this.writeBytes(t, e + 2, n - 2);
                    if (n > 2 && 0 === t[e] && 0 === t[e + 1] && 1 === t[e + 2])return this._state = 3, this.writeBytes(t, e + 3, n - 3)
                }
                this._state = 2;
            case 2:
                for (o = e, a = o + n, l = a - 3; l > e;)if (t[e + 2] > 1)e += 3; else if (0 !== t[e + 1])e += 2; else if (0 !== t[e])e += 1; else {
                    if (1 === t[e + 2])return e > o && this._h264Frame.writeBytes(t, o, e - o), this._state = 3, e += 3, this.writeBytes(t, e, a - e);
                    if (a - e >= 4 && 0 === t[e + 2] && 1 === t[e + 3])return e > o && this._h264Frame.writeBytes(t, o, e - o), this._state = 3, e += 4, this.writeBytes(t, e, a - e);
                    e += 3
                }
                return this._state = 1, void(this._h264Frame && this._h264Frame.writeBytes(t, o, n));
            case 3:
                if (this._h264Frame)switch (this._nalUnitType) {
                    case i.seq_parameter_set_rbsp:
                        this._h264Frame.endNalUnit(this._newExtraData.sps);
                        break;
                    case i.pic_parameter_set_rbsp:
                        this._h264Frame.endNalUnit(this._newExtraData.pps);
                        break;
                    case i.slice_layer_without_partitioning_rbsp_idr:
                        this._h264Frame.endNalUnit();
                        break;
                    default:
                        this._h264Frame.endNalUnit()
                }
                return this._nalUnitType = 31 & t[e], this._h264Frame && (this._nalUnitType === i.access_unit_delimiter_rbsp ? this.finishFrame() : this._nalUnitType === i.slice_layer_without_partitioning_rbsp_idr && (this._h264Frame.keyFrame = !0)), this._h264Frame || (this._h264Frame = new s(s.VIDEO_TAG), this._h264Frame.pts = this._next_pts, this._h264Frame.dts = this._next_dts), this._h264Frame.startNalUnit(), this._state = 2, this.writeBytes(t, e, n)
        }
    }
}(this), function (t) {
    var e = t.videojs.Hls.FlvTag, i = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3];
    t.videojs.Hls.AacStream = function () {
        var t, s, n, r, o, a, l, c, u, h, p, d, f;
        this.tags = [], this.setTimeStampOffset = function (t) {
            r = t - 1e3
        }, this.setNextTimeStamp = function (e, i, r) {
            t = e, n = i, r && (s = 0)
        }, this.writeBytes = function (y, g, v) {
            var m, b, w;
            for (g = g || 0, v = v || 0, v = v > n ? n : v, n -= v, m = g + v; m > g;)switch (s) {
                default:
                    s = 0;
                    break;
                case 0:
                    if (g >= m)return;
                    if (255 !== y[g])return console.assert(!1, "Error no ATDS header found"), g += 1, void(s = 0);
                    g += 1, s = 1;
                    break;
                case 1:
                    if (g >= m)return;
                    if (240 !== (240 & y[g]))return console.assert(!1, "Error no ATDS header found"), g += 1, void(s = 0);
                    o = !!(1 & y[g]), g += 1, s = 2;
                    break;
                case 2:
                    if (g >= m)return;
                    a = ((192 & y[g]) >>> 6) + 1, l = (60 & y[g]) >>> 2, c = (1 & y[g]) << 2, g += 1, s = 3;
                    break;
                case 3:
                    if (g >= m)return;
                    c |= (192 & y[g]) >>> 6, u = (3 & y[g]) << 11, g += 1, s = 4;
                    break;
                case 4:
                    if (g >= m)return;
                    u |= y[g] << 3, g += 1, s = 5;
                    break;
                case 5:
                    if (g >= m)return;
                    u |= (224 & y[g]) >>> 5, u -= o ? 7 : 9, g += 1, s = 6;
                    break;
                case 6:
                    if (g >= m)return;
                    h = 1024 * ((3 & y[g]) + 1), p = 1e3 * h / i[l], b = a << 11 | l << 7 | c << 3, (b !== f || t - r >= 1e3) && (d = new e(e.METADATA_TAG), d.pts = t, d.dts = t, d.writeMetaDataDouble("audiocodecid", 10), d.writeMetaDataBoolean("stereo", 2 === c), d.writeMetaDataDouble("audiosamplerate", i[l]), d.writeMetaDataDouble("audiosamplesize", 16), this.tags.push(d), f = b, d = new e(e.AUDIO_TAG, !0), d.pts = t, d.dts = d.pts, d.view.setUint16(d.position, b), d.position += 2, d.length = Math.max(d.length, d.position), this.tags.push(d), r = t), g += 1, s = 7;
                    break;
                case 7:
                    if (!o) {
                        if (2 > m - g)return;
                        g += 2
                    }
                    d = new e(e.AUDIO_TAG), d.pts = t, d.dts = t, s = 8;
                    break;
                case 8:
                    for (; u;) {
                        if (g >= m)return;
                        w = u > m - g ? m - g : u, d.writeBytes(y, g, w), g += w, u -= w
                    }
                    this.tags.push(d), s = 0, t += p
            }
        }
    }
}(this), function (t, e, i) {
    "use strict";
    var s, n = function (t, e, i) {
        var s, n = "";
        for (s = e; i > s; s++)n += "%" + ("00" + t[s].toString(16)).slice(-2);
        return n
    }, r = function (e, i, s) {
        return t.decodeURIComponent(n(e, i, s))
    }, o = function (e, i, s) {
        return t.unescape(n(e, i, s))
    }, a = {
        TXXX: function (t) {
            var e;
            if (3 === t.data[0])for (e = 1; e < t.data.length; e++)if (0 === t.data[e]) {
                t.description = r(t.data, 1, e), t.value = r(t.data, e + 1, t.data.length - 1);
                break
            }
        }, WXXX: function (t) {
            var e;
            if (3 === t.data[0])for (e = 1; e < t.data.length; e++)if (0 === t.data[e]) {
                t.description = r(t.data, 1, e), t.url = r(t.data, e + 1, t.data.length);
                break
            }
        }, PRIV: function (t) {
            var e;
            for (e = 0; e < t.data.length; e++)if (0 === t.data[e]) {
                t.owner = o(t.data, 0, e);
                break
            }
            t.privateData = t.data.subarray(e + 1)
        }
    };
    s = function (t) {
        var i, n = {debug: !(!t || !t.debug), descriptor: t && t.descriptor}, r = 0, o = [], l = 0;
        if (s.prototype.init.call(this), this.dispatchType = e.Hls.SegmentParser.STREAM_TYPES.metadata.toString(16), n.descriptor)for (i = 0; i < n.descriptor.length; i++)this.dispatchType += ("00" + n.descriptor[i].toString(16)).slice(-2);
        this.push = function (t) {
            var i, s, c, u, h;
            if (0 === o.length && (t.data.length < 10 || t.data[0] !== "I".charCodeAt(0) || t.data[1] !== "D".charCodeAt(0) || t.data[2] !== "3".charCodeAt(0)))return void(n.debug && e.log("Skipping unrecognized metadata packet"));
            if (o.push(t), l += t.data.byteLength, 1 === o.length && (r = t.data[6] << 21 | t.data[7] << 14 | t.data[8] << 7 | t.data[9], r += 10), !(r > l)) {
                for (i = {
                    data: new Uint8Array(r),
                    frames: [],
                    pts: o[0].pts,
                    dts: o[0].dts
                }, h = 0; r > h;)i.data.set(o[0].data, h), h += o[0].data.byteLength, l -= o[0].data.byteLength, o.shift();
                s = 10, 64 & i.data[5] && (s += 4, s += i.data[10] << 24 | i.data[11] << 16 | i.data[12] << 8 | i.data[13], r -= i.data[16] << 24 | i.data[17] << 16 | i.data[18] << 8 | i.data[19]);
                do {
                    if (c = i.data[s + 4] << 24 | i.data[s + 5] << 16 | i.data[s + 6] << 8 | i.data[s + 7], 1 > c)return e.log("Malformed ID3 frame encountered. Skipping metadata parsing.");
                    u = {
                        id: String.fromCharCode(i.data[s], i.data[s + 1], i.data[s + 2], i.data[s + 3]),
                        data: i.data.subarray(s + 10, s + c + 10)
                    }, a[u.id] && a[u.id](u), i.frames.push(u), s += 10, s += c
                } while (r > s);
                this.trigger("data", i)
            }
        }
    }, s.prototype = new e.Hls.Stream, e.Hls.MetadataStream = s
}(window, window.videojs), function (t) {
    var e, i, s = t.videojs, n = s.Hls.FlvTag, r = s.Hls.H264Stream, o = s.Hls.AacStream, a = s.Hls.MetadataStream;
    s.Hls.SegmentParser = function () {
        var t, l = this, c = new Uint8Array(e), u = 0, h = new r, p = new o;
        l.stream = {programMapTable: {}}, l.metadataStream = new a, l.getFlvHeader = function (t, e, i) {
            var s, r, o, a = new Uint8Array(9), l = new DataView(a.buffer);
            return t = t || 0, e = void 0 === e ? !0 : e, i = void 0 === i ? !0 : i, l.setUint8(0, 70), l.setUint8(1, 76), l.setUint8(2, 86), l.setUint8(3, 1), l.setUint8(4, (e ? 4 : 0) | (i ? 1 : 0)), l.setUint32(5, a.byteLength), 0 >= t ? (r = new Uint8Array(a.byteLength + 4), r.set(a), r.set([0, 0, 0, 0], a.byteLength), r) : (s = new n(n.METADATA_TAG), s.pts = s.dts = 0, s.writeMetaDataDouble("duration", t), o = s.finalize().length, r = new Uint8Array(a.byteLength + o), r.set(a), r.set(l.byteLength, o), r)
        }, l.flushTags = function () {
            h.finishFrame()
        }, l.tagsAvailable = function () {
            return h.tags.length + p.tags.length
        }, l.getNextTag = function () {
            var t;
            return t = h.tags.length ? p.tags.length && p.tags[0].dts < h.tags[0].dts ? p.tags.shift() : h.tags.shift() : p.tags.shift(), t.finalize()
        }, l.parseSegmentBinaryData = function (i) {
            var n, r = 0;
            if (u > 0) {
                if (i.byteLength + u < e)return s.log("data.length + streamBuffer.length < MP2T_PACKET_LENGTH ??"), void c.readBytes(i, i.length, c.length);
                n = i.subarray(0, e - u), c.set(n, u), t(c), c = new Uint8Array(e), u = 0
            }
            for (; ;) {
                for (; r < i.byteLength && 71 !== i[r];)r++;
                if (i.byteLength - r < e)return void(i.byteLength - r > 0 && (c.set(i.subarray(r), u), u += i.byteLength - r));
                t(i.subarray(r, r + e)) ? r += e : (s.log("error parsing m2ts packet, attempting to re-align"), r++)
            }
        }, t = function (t) {
            var n, r, o, a, c, u, d, f, y, g, v, m, b, w, T, S, j, k, x = 0, E = x + e, _ = !!(64 & t[x + 1]), A = (31 & t[x + 1]) << 8 | t[x + 2], P = (48 & t[x + 3]) >>> 4;
            if (x += 4, P > 1 && (x += t[x] + 1), 0 === A) {
                if (_ && (x += 1 + t[x]), n = t[x], 0 !== n && s.log("the table_id of the PAT should be 0x00 but was" + n.toString(16)), r = !!(1 & t[x + 5]))for (o = (15 & t[x + 1]) << 8 | t[x + 2], x += 8, u = x + (o - 5 - 4); u > x; x += 4)if (a = t[x] << 8 | t[x + 1], c = (31 & t[x + 2]) << 8 | t[x + 3], 0 === a)l.stream.networkPid = c; else if (void 0 === l.stream.pmtPid)l.stream.pmtPid = c; else if (l.stream.pmtPid !== c)throw new Error("TS has more that 1 program")
            } else if (A === l.stream.programMapTable[i.h264] || A === l.stream.programMapTable[i.adts] || A === l.stream.programMapTable[i.metadata]) {
                if (_) {
                    if (0 !== t[x + 0] || 0 !== t[x + 1] || 1 !== t[x + 2])throw new Error("PES did not begin with start code");
                    d = t[x + 4] << 8 | t[x + 5], f = 0 !== (4 & t[x + 6]), y = t[x + 7], g = t[x + 8], x += 9, 192 & y && (v = (14 & t[x + 0]) << 28 | (255 & t[x + 1]) << 21 | (254 & t[x + 2]) << 13 | (255 & t[x + 3]) << 6 | (254 & t[x + 4]) >>> 2, v /= 45, m = v, 64 & y && (m = (14 & t[x + 5]) << 28 | (255 & t[x + 6]) << 21 | (254 & t[x + 7]) << 13 | (255 & t[x + 8]) << 6 | (254 & t[x + 9]) >>> 2, m /= 45)), x += g, A === l.stream.programMapTable[i.h264] ? h.setNextTimeStamp(v, m, f) : A === l.stream.programMapTable[i.adts] && p.setNextTimeStamp(v, d, f)
                }
                A === l.stream.programMapTable[i.adts] ? p.writeBytes(t, x, E - x) : A === l.stream.programMapTable[i.h264] ? h.writeBytes(t, x, E - x) : A === l.stream.programMapTable[i.metadata] && l.metadataStream.push({
                    pts: v,
                    dts: m,
                    data: t.subarray(x)
                })
            } else if (l.stream.pmtPid === A) {
                if (_ && (x += 1 + t[x]), 2 !== t[x] && s.log("The table_id of a PMT should be 0x02 but was " + t[x].toString(16)), b = !!(1 & t[x + 5]))for (l.stream.programMapTable = {}, T = (15 & t[x + 1]) << 8 | t[x + 2], w = (15 & t[x + 10]) << 8 | t[x + 11], T -= w, T -= 13, l.stream.programMapTable.pcrPid = (31 & t[x + 8]) << 8 | t[x + 9], x += 12 + w; T > 0;) {
                    if (S = t[x + 0], j = (31 & t[x + 1]) << 8 | t[x + 2], S === i.h264 && l.stream.programMapTable[S] && l.stream.programMapTable[S] !== j)throw new Error("Program has more than 1 video stream");
                    if (S === i.adts && l.stream.programMapTable[S] && l.stream.programMapTable[S] !== j)throw new Error("Program has more than 1 audio Stream");
                    l.stream.programMapTable[S] = j, k = (15 & t[x + 3]) << 8 | t[x + 4], S === i.metadata && (l.metadataStream.descriptor = new Uint8Array(t.subarray(x + 5, x + 5 + k))), x += 5 + k, T -= 5 + k
                }
            } else l.stream.networkPid === A || 17 === A || 8191 === A || l.stream.programMapTable.pcrPid || s.log("Unknown PID parsing TS packet: " + A);
            return !0
        }, l.getTags = function () {
            return h.tags
        }, l.stats = {
            h264Tags: function () {
                return h.tags.length
            }, minVideoPts: function () {
                return h.tags[0].pts
            }, maxVideoPts: function () {
                return h.tags[h.tags.length - 1].pts
            }, aacTags: function () {
                return p.tags.length
            }, minAudioPts: function () {
                return p.tags[0].pts
            }, maxAudioPts: function () {
                return p.tags[p.tags.length - 1].pts
            }
        }
    }, s.Hls.SegmentParser.MP2T_PACKET_LENGTH = e = 188, s.Hls.SegmentParser.STREAM_TYPES = i = {
        h264: 27,
        adts: 15,
        metadata: 21
    }
}(window), function (t, e, i, s, n) {
    var r, o, a, l = function () {
    }, c = function () {
        var t = "[^=]*", e = '"[^"]*"|[^,]*', i = "(?:" + t + ")=(?:" + e + ")";
        return new RegExp("(?:^|,)(" + i + ")")
    }(), u = function (t) {
        for (var e, i = t.split(c), s = i.length, n = {}; s--;)"" !== i[s] && (e = /([^=]*)=(.*)/.exec(i[s]).slice(1), e[0] = e[0].replace(/^\s+|\s+$/g, ""), e[1] = e[1].replace(/^\s+|\s+$/g, ""), e[1] = e[1].replace(/^['"](.*)['"]$/g, "$1"), n[e[0]] = e[1]);
        return n
    }, h = t.Hls.Stream;
    r = function () {
        var t = "";
        r.prototype.init.call(this), this.push = function (e) {
            var i;
            for (t += e, i = t.indexOf("\n"); i > -1; i = t.indexOf("\n"))this.trigger("data", t.substring(0, i)), t = t.substring(i + 1)
        }
    }, r.prototype = new h, o = function () {
        o.prototype.init.call(this)
    }, o.prototype = new h, o.prototype.push = function (t) {
        var i, s;
        return t = t.replace(/^\s+|\s+$/g, ""), 0 !== t.length ? "#" !== t[0] ? void this.trigger("data", {
            type: "uri",
            uri: t
        }) : 0 !== t.indexOf("#EXT") ? void this.trigger("data", {
            type: "comment",
            text: t.slice(1)
        }) : (t = t.replace("\r", ""), (i = /^#EXTM3U/.exec(t)) ? void this.trigger("data", {
            type: "tag",
            tagType: "m3u"
        }) : (i = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t)) ? (s = {
            type: "tag",
            tagType: "inf"
        }, i[1] && (s.duration = parseFloat(i[1])), i[2] && (s.title = i[2]), void this.trigger("data", s)) : (i = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t)) ? (s = {
            type: "tag",
            tagType: "targetduration"
        }, i[1] && (s.duration = e(i[1], 10)), void this.trigger("data", s)) : (i = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t)) ? (s = {
            type: "tag",
            tagType: "totalduration"
        }, i[1] && (s.duration = e(i[1], 10)), void this.trigger("data", s)) : (i = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(t)) ? (s = {
            type: "tag",
            tagType: "version"
        }, i[1] && (s.version = e(i[1], 10)), void this.trigger("data", s)) : (i = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) ? (s = {
            type: "tag",
            tagType: "media-sequence"
        }, i[1] && (s.number = e(i[1], 10)), void this.trigger("data", s)) : (i = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) ? (s = {
            type: "tag",
            tagType: "discontinuity-sequence"
        }, i[1] && (s.number = e(i[1], 10)), void this.trigger("data", s)) : (i = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t)) ? (s = {
            type: "tag",
            tagType: "playlist-type"
        }, i[1] && (s.playlistType = i[1]), void this.trigger("data", s)) : (i = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t)) ? (s = {
            type: "tag",
            tagType: "byterange"
        }, i[1] && (s.length = e(i[1], 10)), i[2] && (s.offset = e(i[2], 10)), void this.trigger("data", s)) : (i = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t)) ? (s = {
            type: "tag",
            tagType: "allow-cache"
        }, i[1] && (s.allowed = !/NO/.test(i[1])), void this.trigger("data", s)) : (i = /^#EXT-X-STREAM-INF:?(.*)$/.exec(t)) ? (s = {
            type: "tag",
            tagType: "stream-inf"
        }, i[1] && (s.attributes = u(i[1]), s.attributes.RESOLUTION && !function () {
            var t = s.attributes.RESOLUTION.split("x"), i = {};
            t[0] && (i.width = e(t[0], 10)), t[1] && (i.height = e(t[1], 10)), s.attributes.RESOLUTION = i
        }(), s.attributes.BANDWIDTH && (s.attributes.BANDWIDTH = e(s.attributes.BANDWIDTH, 10)), s.attributes["PROGRAM-ID"] && (s.attributes["PROGRAM-ID"] = e(s.attributes["PROGRAM-ID"], 10))), void this.trigger("data", s)) : (i = /^#EXT-X-ENDLIST/.exec(t)) ? void this.trigger("data", {
            type: "tag",
            tagType: "endlist"
        }) : (i = /^#EXT-X-DISCONTINUITY/.exec(t)) ? void this.trigger("data", {
            type: "tag",
            tagType: "discontinuity"
        }) : (i = /^#EXT-X-KEY:?(.*)$/.exec(t)) ? (s = {
            type: "tag",
            tagType: "key"
        }, i[1] && (s.attributes = u(i[1]), s.attributes.IV && ("0x" === s.attributes.IV.substring(0, 2) && (s.attributes.IV = s.attributes.IV.substring(2)), s.attributes.IV = s.attributes.IV.match(/.{8}/g), s.attributes.IV[0] = e(s.attributes.IV[0], 16), s.attributes.IV[1] = e(s.attributes.IV[1], 16), s.attributes.IV[2] = e(s.attributes.IV[2], 16), s.attributes.IV[3] = e(s.attributes.IV[3], 16), s.attributes.IV = new Uint32Array(s.attributes.IV))), void this.trigger("data", s)) : void this.trigger("data", {
            type: "tag",
            data: t.slice(4, t.length)
        })) : void 0
    }, a = function () {
        var t, e = this, c = [], u = {};
        a.prototype.init.call(this), this.lineStream = new r, this.parseStream = new o, this.lineStream.pipe(this.parseStream), this.manifest = {
            allowCache: !0,
            discontinuityStarts: []
        }, this.parseStream.on("data", function (r) {
            ({
                tag: function () {
                    (({
                        "allow-cache": function () {
                            this.manifest.allowCache = r.allowed, "allowed" in r || (this.trigger("info", {
                                message: "defaulting allowCache to YES"
                            }), this.manifest.allowCache = !0)
                        }, byterange: function () {
                            var t = {};
                            "length" in r && (u.byterange = t, t.length = r.length, "offset" in r || (this.trigger("info", {message: "defaulting offset to zero"}), r.offset = 0)), "offset" in r && (u.byterange = t, t.offset = r.offset)
                        }, endlist: function () {
                            this.manifest.endList = !0
                        }, inf: function () {
                            "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {message: "defaulting media sequence to zero"})), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {message: "defaulting discontinuity sequence to zero"})), r.duration >= 0 && (u.duration = r.duration), this.manifest.segments = c
                        }, key: function () {
                            return r.attributes ? "NONE" === r.attributes.METHOD ? void(t = null) : r.attributes.URI ? (r.attributes.METHOD || this.trigger("warn", {message: "defaulting key method to AES-128"}), t = {
                                method: r.attributes.METHOD || "AES-128",
                                uri: r.attributes.URI
                            }, void(r.attributes.IV !== n && (t.iv = r.attributes.IV))) : void this.trigger("warn", {message: "ignoring key declaration without URI"}) : void this.trigger("warn", {message: "ignoring key declaration without attribute list"})
                        }, "media-sequence": function () {
                            return i(r.number) ? void(this.manifest.mediaSequence = r.number) : void this.trigger("warn", {message: "ignoring invalid media sequence: " + r.number})
                        }, "discontinuity-sequence": function () {
                            return i(r.number) ? void(this.manifest.discontinuitySequence = r.number) : void this.trigger("warn", {message: "ignoring invalid discontinuity sequence: " + r.number})
                        }, "playlist-type": function () {
                            return /VOD|EVENT/.test(r.playlistType) ? void(this.manifest.playlistType = r.playlistType) : void this.trigger("warn", {message: "ignoring unknown playlist type: " + r.playlist})
                        }, "stream-inf": function () {
                            return this.manifest.playlists = c, r.attributes ? (u.attributes || (u.attributes = {}), void(u.attributes = s(u.attributes, r.attributes))) : void this.trigger("warn", {message: "ignoring empty stream-inf attributes"})
                        }, discontinuity: function () {
                            u.discontinuity = !0, this.manifest.discontinuityStarts.push(c.length)
                        }, targetduration: function () {
                            return !i(r.duration) || r.duration < 0 ? void this.trigger("warn", {message: "ignoring invalid target duration: " + r.duration}) : void(this.manifest.targetDuration = r.duration)
                        }, totalduration: function () {
                            return !i(r.duration) || r.duration < 0 ? void this.trigger("warn", {message: "ignoring invalid total duration: " + r.duration}) : void(this.manifest.totalDuration = r.duration)
                        }
                    })[r.tagType] || l).call(e)
                }, uri: function () {
                    u.uri = r.uri, c.push(u), !this.manifest.targetDuration || "duration" in u || (this.trigger("warn", {message: "defaulting segment duration to the target duration"}), u.duration = this.manifest.targetDuration), t && (u.key = t), u = {}
                }, comment: function () {
                }
            })[r.type].call(e)
        })
    }, a.prototype = new h, a.prototype.push = function (t) {
        this.lineStream.push(t)
    }, a.prototype.end = function () {
        this.lineStream.push("\n")
    }, window.videojs.m3u8 = {LineStream: r, ParseStream: o, Parser: a}
}(window.videojs, window.parseInt, window.isFinite, window.videojs.util.mergeOptions), function (t, e) {
    "use strict";
    var i, s, n, r, o, a, l, c, u = 10;
    o = function (t, e) {
        return t = isFinite(t) ? t : 1 / 0, e = isFinite(e) ? e : 1 / 0, Math.min(t, e)
    }, a = function (t, e) {
        return t = isFinite(t) ? t : -(1 / 0), e = isFinite(e) ? e : -(1 / 0), Math.max(t, e)
    }, s = function (t, e) {
        return t - e
    }, i = function (t, e, i, n) {
        var r, o = [], a = (t.discontinuityStarts || []).concat(i), c = 0;
        if (e >= i)return 0;
        for (a.sort(s), r = 0; r < a.length; r++)if (a[r] > e) {
            o.push({start: e, end: a[r]}), r++;
            break
        }
        for (; r < a.length; r++) {
            if (a[r] >= i) {
                o.push({start: a[r - 1], end: i});
                break
            }
            o.push({start: o[o.length - 1].end, end: a[r]})
        }
        for (r = 0; r < o.length; r++)c += l(t, o[r], r === o.length - 1 && n);
        return c
    }, l = function (t, e, i) {
        var s, n, r, l = 0, c = t.targetDuration || u;
        for (n = e.start; n < e.end && (s = t.segments[n], void 0 === s.minVideoPts && void 0 === s.minAudioPts); n++)l += s.duration || c;
        if (i && (s = t.segments[e.end], s && (void 0 !== s.minVideoPts || void 0 !== s.minAudioPts)))return l += .001 * (o(s.minVideoPts, s.minAudioPts) - o(t.segments[n].minVideoPts, t.segments[n].minAudioPts));
        for (r = e.end - 1; r >= n && (s = t.segments[r], void 0 === s.maxVideoPts && void 0 === s.maxAudioPts); r--)l += s.duration || c;
        return r >= n && (l += .001 * (a(t.segments[r].maxVideoPts, t.segments[r].maxAudioPts) - o(t.segments[n].minVideoPts, t.segments[n].minAudioPts))), l
    }, r = function (t, e, s, n) {
        var r, o, l = 0;
        return void 0 === e && (e = t.mediaSequence || 0), void 0 === s && (s = e + (t.segments || []).length), r = t.targetDuration || u, o = a(t.mediaSequence - e, 0), l += o * r, l += i(t, e + o - t.mediaSequence, s - t.mediaSequence, n)
    }, n = function (e, i, s, n) {
        if (!e)return 0;
        if (void 0 === n && (n = !0), void 0 === i && void 0 === s) {
            if (e.totalDuration)return e.totalDuration;
            if (!e.endList)return t.Infinity
        }
        return r(e, i, s, n)
    }, c = function (t) {
        var i, s, a, l, c, h, p;
        if (!t.segments)return e.createTimeRange();
        if (t.endList)return e.createTimeRange(0, n(t));
        if (i = 0, s = r(t, t.mediaSequence, t.mediaSequence + t.segments.length), l = t.targetDuration || u, !t.endList)for (a = 3 * l, p = t.segments.length - 1; p >= 0 && a > 0; p--)c = t.segments[p], h = o(n(t, t.mediaSequence + p, t.mediaSequence + p + 1), a), a -= h, s -= h;
        return e.createTimeRange(i, s)
    }, e.Hls.Playlist = {duration: n, seekable: c}
}(window, window.videojs),
    function (t) {
        t.Hls.xhr = function (e, i) {
            var s, n, r = {method: "GET", timeout: 45e3};
            return "function" != typeof i && (i = function () {
            }),
            "object" == typeof e && (r = t.util.mergeOptions(r, e), e = r.url),
                s = "undefined" != typeof peer5 ? new peer5.Request : new XMLHttpRequest,
                s.open(r.method, e), console.log(e),s.url = e, s.requestTime = (new Date).getTime(), r.responseType && (s.responseType = r.responseType), r.withCredentials && (s.withCredentials = !0), r.timeout && (n = window.setTimeout(function () {
                4 !== s.readyState && (s.timedout = !0, s.abort())
            }, r.timeout)), s.onreadystatechange = function () {
                return 4 === this.readyState ? (window.clearTimeout(n), s.timedout ? i.call(this, "timeout", e) : this.status >= 400 || 0 === this.status ? i.call(this, !0, e) : (this.response && (this.responseTime = (new Date).getTime(), this.roundTripTime = this.responseTime - this.requestTime, this.bytesReceived = this.response.byteLength || this.response.length, this.bandwidth = Math.floor(this.bytesReceived / this.roundTripTime * 8 * 1e3)), i.call(this, !1, e))) : void 0
            }, s.send(null), s
        }
    }(window.videojs),
    function (t, e) {
        "use strict";
        var i = e.Hls.resolveUrl, s = e.Hls.xhr, n = e.Hls.Playlist, r = e.util.mergeOptions, o = function (t, e) {
            var i, s, n = !1, o = r(t, {});
            for (i = t.playlists.length; i--;)if (s = o.playlists[i], s.uri === e.uri) {
                if (s.segments && e.segments && s.segments.length === e.segments.length && s.mediaSequence === e.mediaSequence)continue;
                o.playlists[i] = r(s, e), o.playlists[e.uri] = o.playlists[i], s.segments && (o.playlists[i].segments = a(s.segments, e.segments, e.mediaSequence - s.mediaSequence)), n = !0
            }
            return n ? o : null
        }, a = function (t, e, i) {
            var s, n, o = e.slice();
            for (i = i || 0, s = Math.min(t.length, e.length + i), n = i; s > n; n++)o[n - i] = r(t[n], o[n - i]);
            return o
        }, l = function (n, r) {
            var a, c, u, h, p = this;
            if (l.prototype.init.call(this), !n)throw new Error("A non-empty playlist URL is required");
            h = function (i, s, n) {
                var r, a, l;
                return p.setBandwidth(u || s), u = null, i ? (p.error = {
                    status: s.status,
                    message: "HLS playlist request error at URL: " + n,
                    responseText: s.responseText,
                    code: s.status >= 500 ? 4 : 2
                }, p.trigger("error")) : (p.state = "HAVE_METADATA", r = new e.m3u8.Parser, r.push(s.responseText), r.end(), r.manifest.uri = n, l = o(p.master, r.manifest), a = 1e3 * (r.manifest.targetDuration || 10), l ? (p.master = l, p.updateMediaPlaylist_(r.manifest)) : a /= 2, p.media().endList || (t.clearTimeout(c), c = t.setTimeout(function () {
                    p.trigger("mediaupdatetimeout")
                }, a)), void p.trigger("loadedplaylist"))
            }, p.state = "HAVE_NOTHING", p.expiredPostDiscontinuity_ = 0, p.expiredPreDiscontinuity_ = 0, a = this.dispose, p.dispose = function () {
                u && (u.onreadystatechange = null, u.abort(), u = null), t.clearTimeout(c), a.call(this)
            }, p.media = function (t) {
                var e = !1;
                if (!t)return p.media_;
                if ("HAVE_NOTHING" === p.state || "HAVE_MASTER" === p.state)throw new Error("Cannot switch media playlist from " + p.state);
                if ("string" == typeof t) {
                    if (!p.master.playlists[t])throw new Error("Unknown playlist URI: " + t);
                    t = p.master.playlists[t]
                }
                if (e = t.uri !== p.media_.uri, p.master.playlists[t.uri].endList)return u && (u.onreadystatechange = null, u.abort(), u = null), p.state = "HAVE_METADATA", p.media_ = t, void(e && p.trigger("mediachange"));
                if (e) {
                    if (p.state = "SWITCHING_MEDIA", u) {
                        if (i(p.master.uri, t.uri) === u.url)return;
                        u.onreadystatechange = null, u.abort(), u = null
                    }
                    u = s({url: i(p.master.uri, t.uri), withCredentials: r}, function (e) {
                        h(e, this, t.uri), p.trigger("mediachange")
                    })
                }
            }, p.setBandwidth = function (t) {
                p.bandwidth = t.bandwidth
            }, p.on("mediaupdatetimeout", function () {
                "HAVE_METADATA" === p.state && (p.state = "HAVE_CURRENT_METADATA", u = s({
                    url: i(p.master.uri, p.media().uri),
                    withCredentials: r
                }, function (t) {
                    h(t, this, p.media().uri)
                }))
            }), s({url: n, withCredentials: r}, function (o) {
                var a, l;
                if (o)return p.error = {
                    status: this.status,
                    message: "HLS playlist request error at URL: " + n,
                    responseText: this.responseText,
                    code: 2
                }, p.trigger("error");
                if (a = new e.m3u8.Parser, a.push(this.responseText), a.end(), p.state = "HAVE_MASTER", a.manifest.uri = n, a.manifest.playlists) {
                    for (p.master = a.manifest, l = p.master.playlists.length; l--;)p.master.playlists[p.master.playlists[l].uri] = p.master.playlists[l];
                    return u = s({url: i(n, a.manifest.playlists[0].uri), withCredentials: r}, function (t) {
                        h(t, this, a.manifest.playlists[0].uri), t || p.trigger("loadedmetadata")
                    }), p.trigger("loadedplaylist")
                }
                return p.master = {
                    uri: t.location.href,
                    playlists: [{uri: n}]
                }, p.master.playlists[n] = p.master.playlists[0], h(null, this, n), p.trigger("loadedmetadata")
            })
        };
        l.prototype = new e.Hls.Stream, l.prototype.updateMediaPlaylist_ = function (t) {
            var e, i, s;
            if (this.media_) {
                if (i = t.mediaSequence - this.media_.mediaSequence, e = this.media_.mediaSequence, this.media_.discontinuitySequence !== t.discontinuitySequence)for (s = i; s--;)if (this.media_.segments[s].discontinuity) {
                    e = s + this.media_.mediaSequence, this.expiredPreDiscontinuity_ += this.expiredPostDiscontinuity_, this.expiredPostDiscontinuity_ = 0;
                    break
                }
                this.expiredPreDiscontinuity_ += n.duration(this.media_, this.media_.mediaSequence, e), this.expiredPostDiscontinuity_ += n.duration(this.media_, e, t.mediaSequence)
            }
            this.media_ = this.master.playlists[t.uri]
        }, l.prototype.getMediaIndexForTime_ = function (t) {
            var e;
            if (!this.media_)return 0;
            if (t -= this.expiredPreDiscontinuity_ + this.expiredPostDiscontinuity_, 0 > t)return 0;
            for (e = 0; e < this.media_.segments.length; e++)if (t -= n.duration(this.media_, this.media_.mediaSequence + e, this.media_.mediaSequence + e + 1, !1), 0 >= t)return e;
            return this.media_.segments.length - 1
        }, e.Hls.PlaylistLoader = l
    }(window, window.videojs), function t(e, i, s) {
    function n(o, a) {
        if (!i[o]) {
            if (!e[o]) {
                var l = "function" == typeof require && require;
                if (!a && l)return l(o, !0);
                if (r)return r(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var c = i[o] = {exports: {}};
            e[o][0].call(c.exports, function (t) {
                var i = e[o][1][t];
                return n(i ? i : t)
            }, c, c.exports, t, e, i, s)
        }
        return i[o].exports
    }

    for (var r = "function" == typeof require && require, o = 0; o < s.length; o++)n(s[o]);
    return n
}({
    1: [function (t, e, i) {
        (function (e) {
            e.window.pkcs7 = {unpad: t("./unpad")}
        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"./unpad": 2}], 2: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            return t.subarray(0, t.byteLength - t[t.byteLength - 1])
        }
    }, {}]
}, {}, [1]),
    function (t, e, i) {
        "use strict";
        var s, n, r, o, a;
        a = function (t) {
            return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
        }, s = function (t) {
            this._precompute();
            var e, i, s, n, r, o = this._tables[0][4], a = this._tables[1], l = t.length, c = 1;
            if (4 !== l && 6 !== l && 8 !== l)throw new Error("Invalid aes key size");
            for (n = t.slice(0), r = [], this._key = [n, r], e = l; 4 * l + 28 > e; e++)s = n[e - 1], (e % l === 0 || 8 === l && e % l === 4) && (s = o[s >>> 24] << 24 ^ o[s >> 16 & 255] << 16 ^ o[s >> 8 & 255] << 8 ^ o[255 & s], e % l === 0 && (s = s << 8 ^ s >>> 24 ^ c << 24, c = c << 1 ^ 283 * (c >> 7))), n[e] = n[e - l] ^ s;
            for (i = 0; e; i++, e--)s = n[3 & i ? e : e - 4], 4 >= e || 4 > i ? r[i] = s : r[i] = a[0][o[s >>> 24]] ^ a[1][o[s >> 16 & 255]] ^ a[2][o[s >> 8 & 255]] ^ a[3][o[255 & s]]
        }, s.prototype = {
            _tables: [[[], [], [], [], []], [[], [], [], [], []]], _precompute: function () {
                var t, e, i, s, n, r, o, a, l, c = this._tables[0], u = this._tables[1], h = c[4], p = u[4], d = [], f = [];
                for (t = 0; 256 > t; t++)f[(d[t] = t << 1 ^ 283 * (t >> 7)) ^ t] = t;
                for (e = i = 0; !h[e]; e ^= s || 1, i = f[i] || 1)for (o = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4, o = o >> 8 ^ 255 & o ^ 99, h[e] = o, p[o] = e, r = d[n = d[s = d[e]]], l = 16843009 * r ^ 65537 * n ^ 257 * s ^ 16843008 * e, a = 257 * d[o] ^ 16843008 * o, t = 0; 4 > t; t++)c[t][e] = a = a << 24 ^ a >>> 8, u[t][o] = l = l << 24 ^ l >>> 8;
                for (t = 0; 5 > t; t++)c[t] = c[t].slice(0), u[t] = u[t].slice(0)
            }, decrypt: function (t, e, i, s, n, r) {
                var o, a, l, c, u = this._key[1], h = t ^ u[0], p = s ^ u[1], d = i ^ u[2], f = e ^ u[3], y = u.length / 4 - 2, g = 4, v = this._tables[1], m = v[0], b = v[1], w = v[2], T = v[3], S = v[4];
                for (c = 0; y > c; c++)o = m[h >>> 24] ^ b[p >> 16 & 255] ^ w[d >> 8 & 255] ^ T[255 & f] ^ u[g], a = m[p >>> 24] ^ b[d >> 16 & 255] ^ w[f >> 8 & 255] ^ T[255 & h] ^ u[g + 1], l = m[d >>> 24] ^ b[f >> 16 & 255] ^ w[h >> 8 & 255] ^ T[255 & p] ^ u[g + 2], f = m[f >>> 24] ^ b[h >> 16 & 255] ^ w[p >> 8 & 255] ^ T[255 & d] ^ u[g + 3], g += 4, h = o, p = a, d = l;
                for (c = 0; 4 > c; c++)n[(3 & -c) + r] = S[h >>> 24] << 24 ^ S[p >> 16 & 255] << 16 ^ S[d >> 8 & 255] << 8 ^ S[255 & f] ^ u[g++], o = h, h = p, p = d, d = f, f = o
            }
        }, o = function (t, e, i) {
            var n, r, o, l, c, u, h, p, d, f = new Int32Array(t.buffer, t.byteOffset, t.byteLength >> 2), y = new s(Array.prototype.slice.call(e)), g = new Uint8Array(t.byteLength), v = new Int32Array(g.buffer);
            for (n = i[0], r = i[1], o = i[2], l = i[3], d = 0; d < f.length; d += 4)c = a(f[d]), u = a(f[d + 1]), h = a(f[d + 2]), p = a(f[d + 3]), y.decrypt(c, u, h, p, v, d), v[d] = a(v[d] ^ n), v[d + 1] = a(v[d + 1] ^ r), v[d + 2] = a(v[d + 2] ^ o), v[d + 3] = a(v[d + 3] ^ l), n = c, r = u, o = h, l = p;
            return g
        }, n = function () {
            this.jobs = [], this.delay = 1, this.timeout_ = null
        }, n.prototype = new e.Hls.Stream, n.prototype.processJob_ = function () {
            this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(e.bind(this, this.processJob_), this.delay) : this.timeout_ = null
        }, n.prototype.push = function (t) {
            this.jobs.push(t), this.timeout_ || (this.timeout_ = setTimeout(e.bind(this, this.processJob_), this.delay))
        }, r = function (t, e, s, o) {
            var l = r.STEP, c = new Int32Array(t.buffer), u = new Uint8Array(t.byteLength), h = 0;
            for (this.asyncStream_ = new n, this.asyncStream_.push(this.decryptChunk_(c.subarray(h, h + l), e, s, u, h)), h = l; h < c.length; h += l)s = new Uint32Array([a(c[h - 4]), a(c[h - 3]), a(c[h - 2]), a(c[h - 1])]), this.asyncStream_.push(this.decryptChunk_(c.subarray(h, h + l), e, s, u));
            this.asyncStream_.push(function () {
                o(null, i(u))
            })
        }, r.prototype = new e.Hls.Stream, r.prototype.decryptChunk_ = function (t, e, i, s) {
            return function () {
                var n = o(t, e, i);
                s.set(n, t.byteOffset)
            }
        }, r.STEP = 32e3, e.Hls.decrypt = o, e.Hls.Decrypter = r, e.Hls.AsyncStream = n
    }(window, window.videojs, window.pkcs7.unpad);

videojs.options.flash.swf = "videojs/assets/video-js.swf";
window.peer5 || (window.peer5 = Object.create(null)), peer5.players || (peer5.players = Object.create(null)),
    function (t) {
        function e() {
            function t(t, e) {
                void 0 === s[t] && (s[t] = peer5.players.State(t, e))
            }

            function e(t, e) {
                var n = s[t], r = n.getEvents(e);
                i("player", r)
            }

            function i(t, e) {
                peer5 && peer5.trigger && e.forEach(function (e) {
                    peer5.trigger(t, e)
                })
            }

            var s = Object.create(null);
            return {updateAction: e, initPlayer: t}
        }

        t.EventsDispatcher = e()
    }(peer5.players),
    function (t) {
        function e(t, e) {
            function i(t) {
                return {
                    action: t.action,
                    label: t.label,
                    value: t.value || 0,
                    timeSinceLoaded: t.timeSinceLoaded || 0,
                    duration: t.duration || 0,
                    id: u,
                    vendor: h
                }
            }

            function s() {
                if (p)return [];
                if (d)return [];
                var t = [];
                p = Date.now();
                var e = Date.now() - g, s = i({
                    action: "rebuffer.start",
                    label: "playback",
                    value: e,
                    timeSinceLoaded: e
                });
                if (t.push(s), f) {
                    f = !1;
                    var n = i({action: "hadRebuffer", label: "playback", value: e, timeSinceLoaded: e});
                    t.push(n)
                }
                return t
            }

            function n() {
                d = Date.now();
                var t = Date.now() - g, e = i({action: "seek.start", label: "seek", value: t, timeSinceLoaded: t});
                return [e]
            }

            function r() {
                var t = Date.now();
                if (!y) {
                    var e = [];
                    y = t;
                    var s = i({action: "load.start", label: "load", value: 1});
                    if (e.push(s), m && (m = !1, v)) {
                        var n = t - v, r = i({
                            action: "durationReadyToLoad",
                            label: "durationReadyToLoad",
                            value: n,
                            duration: n
                        });
                        e.push(r)
                    }
                    return e
                }
                return []
            }

            function o() {
                var t = Date.now();
                if (y) {
                    var e = t - y;
                    y = null;
                    var s = i({action: "load.end", label: "load", value: e, duration: e});
                    return g = t, [s]
                }
                return []
            }

            function a() {
                var t = Date.now();
                if (p) {
                    var e = t - p;
                    p = null;
                    var s = t - g, n = i({
                        action: "rebuffer.end",
                        label: "playback",
                        value: e,
                        timeSinceLoaded: s,
                        duration: e
                    });
                    return [n]
                }
                if (d) {
                    var e = t - d;
                    d = null;
                    var s = t - g, r = i({
                        action: "seek.end",
                        label: "seek",
                        value: e,
                        timeSinceLoaded: s,
                        duration: e
                    });
                    return [r]
                }
                return []
            }

            function l() {
                v = Date.now(), m = !0;
                var t = i({action: "ready", label: "ready"});
                return [t]
            }

            function c(t) {
                var e = [];
                switch (t) {
                    case"ready":
                        e = l();
                        break;
                    case"buffer":
                        e = s();
                        break;
                    case"seek":
                        e = n();
                        break;
                    case"loadStart":
                        e = r();
                        break;
                    case"loadEnd":
                        e = o();
                        break;
                    case"resume":
                        e = a();
                        break;
                    default:
                        console.error("unrecognized action:" + t)
                }
                return e
            }

            var u = t, h = e, p = null, d = null, f = !0, y = null, g = null, v = null, m = !0;
            return {getEvents: c}
        }

        t.State = e
    }(peer5.players),
    function () {
        document.addEventListener("DOMContentLoaded", function () {
            if (!videojs)return !1;
            var t = videojs.players;
            Object.keys(t).forEach(function (t) {
                var e = videojs(t), i = null, s = null, n = !1;
                peer5.players.EventsDispatcher.initPlayer(t, "videojs"), e.on("ready", function () {
                    peer5.players.EventsDispatcher.updateAction(t, "ready")
                }), e.on("loadeddata", function () {
                    "loading" === i && peer5.players.EventsDispatcher.updateAction(t, "loadEnd"), s = Date.now(), i = "playing"
                }), e.on("firstplay", function () {
                    "playing" !== i && (("seek" === i || "buffer" === i) && peer5.players.EventsDispatcher.updateAction(t, "resume"), peer5.players.EventsDispatcher.updateAction(t, "loadStart"), i = "loading")
                }), e.on("waiting", function () {
                    "loading" !== i && "seek" !== i && (peer5.players.EventsDispatcher.updateAction(t, "buffer"), i = "buffer")
                }), e.on("seeking", function () {
                    !s || Date.now() - s < 200 || "loading" !== i && (peer5.players.EventsDispatcher.updateAction(t, "seek"), i = "seek")
                }), e.on("playing", function () {
                    if ("seek" === i || "buffer" === i) {
                        if ("seek" === i && !n)return void(n = !0);
                        peer5.players.EventsDispatcher.updateAction(t, "resume"), i = "playing", n = !1
                    }
                })
            })
        })
    }();