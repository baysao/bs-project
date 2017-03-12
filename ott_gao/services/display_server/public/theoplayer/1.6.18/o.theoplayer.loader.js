!function (l) {
    var m = function () {
        var a = function () {
        }, d = function (b) {
            return this._c = this._c || {}, void 0 === this._c[b] && (this._c[b] = []), this._c[b]
        }, f = a.prototype;
        return f.addEventListener = function (b,
                                              e) {
            var c = d.call(this, b);
            -1 === c.indexOf(e) && c.push(e)
        }, f.removeEventListener = function (b, e) {
            var c = d.call(this, b), a = c.indexOf(e);
            e ? -1 !== a && c.splice(a, 1) : c.length = 0
        }, f._d = function () {
            this._c = null
        }, f.dispatchEvent = function (b, e) {
            var c, a;
            if (e)return c = this.dispatchEvent.bind(this, b), setTimeout(c, 0);
            "string" == typeof b && (b = {type: b});
            c = d.call(this, b.type).slice();
            for (a = 0; a < c.length; a += 1)c[a].call(this, b);
            return !b.defaultPrevented
        }, a
    }();
    !function (a, d) {
        var f = d.head, b = d.createElement.bind(d), e = a.theoplayer, c = e &&
            e.configuration || {}, r = e && e.onReady || void 0, t = c && c.libraryLocation && c.libraryLocation + "gao0.js", n = b("style"), b = b("script"), p = f.appendChild.bind(f), g = [], k = function () {
            console.log("WARNING: THEOplayer is not initialised yet.")
        }, q = function () {
            a.removeEventListener("theoplayer-loaded", q);
            f.removeChild(n)
        }, e = function (b, e) {
            var a;
            a:{
                for (a = 0; a < g.length; a += 1)if (g[a]._e.contains(b)) {
                    a = g[a];
                    break a
                }
                a = !1
            }
            return a ? a._f : (a = new h({
                exitFullscreen: k,
                load: k,
                play: k,
                pause: k,
                requestFullscreen: k
            }), a._e = b, a._g = e, g.push(a),
            b.id && (g[b.id] = a), a._f)
        };
        n.innerHTML = "video { opacity : 0; }";
        p(n);
        a.addEventListener("theoplayer-loaded", q);
        a.theoplayer = e;
        e._h = g;
        e.configuration = c;
        e.onReady = r;
        e.player = k;
        e.controller = k;
        e.destroy = k;
        b.async = !0;
        b.src = t;
        p(b)
    }(l, document);
    var h = function (a) {
        var d = function (b) {
            var a = this, c = "canplay canplaythrough dimensionsChanged durationchange ended error emptied fullscreenchange initialized loadeddata loadedmetadata loadstart pause play playing progress seeked seeking stalled timeupdate volumechange waiting timedmetadata unsupportedPlatform online offline".split(" "),
                d = function (b) {
                    a.dispatchEvent(b, !0)
                }, f = function (a) {
                    var b;
                    for (b = 0; b < c.length; b += 1)a.addEventListener(c[b], d)
                };
            b.addEventListener && f(b);
            a._a = {
                _b: function (a) {
                    if (b.removeEventListener) {
                        var e = b, g;
                        for (g = 0; g < c.length; g += 1)e.removeEventListener(c[g], d)
                    }
                    b = a;
                    b.addEventListener && f(b)
                }, _i: function () {
                    return b
                }
            };
            a.exitFullscreen = function () {
                return b.exitFullscreen.apply(b, arguments)
            };
            a.load = function () {
                return b.load.apply(b, arguments)
            };
            a.play = function () {
                return b.play.apply(b, arguments)
            };
            a.pause = function () {
                return b.pause.apply(b,
                    arguments)
            };
            a.requestFullscreen = function () {
                return b.requestFullscreen.apply(b, arguments)
            };
            (function () {
                var c, d = "played aspectRatio autoplay buffered currentFrame currentProgramDateTime currentSrc currentTime duration dvr element ended error frameAccurateSeekEnabled frameRate fullscreenEnabled height initialized live loop muted paused playbackRate poster seeking src textTracks videoWidth videoHeight volume warning width startTime endTime startFrame endFrame online".split(" "), f = function (c) {
                    Object.defineProperty(a,
                        c, {
                            get: function () {
                                return b[c]
                            }, set: function (a) {
                                return b[c] = a
                            }
                        })
                };
                for (c = 0; c < d.length; c += 1)f(d[c])
            })()
        };
        d.prototype = new m;
        d.prototype.constructor = d;
        var f = {};
        a = new d(a);
        d = a._a;
        return f._f = a, f._a = d, delete a._a, f
    }
}(self)