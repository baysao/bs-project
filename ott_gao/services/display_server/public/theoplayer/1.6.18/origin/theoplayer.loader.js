!function (e) {
    var t = function () {
        "use strict";
        var e = function () {
        }, t = function (e) {
            return this._c = this._c || {}, void 0 === this._c[e] && (this._c[e] = []), this._c[e]
        }, r = e.prototype;
        return r.addEventListener = function (e, n) {
            var r = t.call(this, e), i = r.indexOf(n);
            -1 === i && r.push(n)
        }, r.removeEventListener = function (e, n) {
            var r = t.call(this, e), i = r.indexOf(n);
            n ? -1 !== i && r.splice(i, 1) : r.length = 0
        }, r._d = function () {
            this._c = null
        }, r.dispatchEvent = function (e, r) {
            var i, a;
            if (r)return n(this.dispatchEvent.bind(this, e));
            for ("string" == typeof e && (e = {type: e}), i = t.call(this, e.type).slice(), a = 0; a < i.length; a += 1)i[a].call(this, e);
            return !e.defaultPrevented
        }, e
    }(), n = function (e) {
        "use strict";
        return setTimeout(e, 0)
    };
    !function (e, t) {
        "use strict";
        var n = t.head, i = t.createElement.bind(t), a = e.theoplayer, o = a && a.configuration || {}, u = a && a.onReady || void 0, l = o && o.libraryLocation && o.libraryLocation + "gao0.js", c = i("style"), s = i("script"), d = n.appendChild.bind(n), p = "theoplayer-loaded", f = [], h = function () {
            console.log("WARNING: THEOplayer is not initialised yet.")
        }, v = function () {
            e.removeEventListener(p, v), n.removeChild(c)
        }, y = function (e) {
            var t;
            for (t = 0; t < f.length; t += 1)if (f[t]._e.contains(e))return f[t];
            return !1
        }, a = function (e, t) {
            var n = y(e);
            return n ? n._f : (n = new r({
                exitFullscreen: h,
                load: h,
                play: h,
                pause: h,
                requestFullscreen: h
            }), n._e = e, n._g = t, f.push(n), e.id && (f[e.id] = n), n._f)
        };
        c.innerHTML = "video { opacity : 0; }", d(c), e.addEventListener(p, v), e.theoplayer = a, a._h = f, a.configuration = o, a.onReady = u, a.player = h, a.controller = h, a.destroy = h, s.async = !0, s.src = l, d(s)
    }(e, document);
    var r = function (e) {
        var n = function (e) {
            var t = this, n = ["canplay", "canplaythrough", "dimensionsChanged", "durationchange", "ended", "error", "emptied", "fullscreenchange", "initialized", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "seeked", "seeking", "stalled", "timeupdate", "volumechange", "waiting", "timedmetadata", "unsupportedPlatform", "online", "offline"], r = function (e) {
                t.dispatchEvent(e, !0)
            }, i = function (e) {
                var t;
                for (t = 0; t < n.length; t += 1)e.addEventListener(n[t], r)
            }, a = function (e) {
                var t;
                for (t = 0; t < n.length; t += 1)e.removeEventListener(n[t], r)
            };
            e.addEventListener && i(e), t._a = {
                _b: function (t) {
                    e.removeEventListener && a(e), e = t, e.addEventListener && i(e)
                }, _i: function () {
                    return e
                }
            }, t.exitFullscreen = function () {
                return e.exitFullscreen.apply(e, arguments)
            }, t.load = function () {
                return e.load.apply(e, arguments)
            }, t.play = function () {
                return e.play.apply(e, arguments)
            }, t.pause = function () {
                return e.pause.apply(e, arguments)
            }, t.requestFullscreen = function () {
                return e.requestFullscreen.apply(e, arguments)
            }, function () {
                var n, r = ["played", "aspectRatio", "autoplay", "buffered", "currentFrame", "currentProgramDateTime", "currentSrc", "currentTime", "duration", "dvr", "element", "ended", "error", "frameAccurateSeekEnabled", "frameRate", "fullscreenEnabled", "height", "initialized", "live", "loop", "muted", "paused", "playbackRate", "poster", "seeking", "src", "textTracks", "videoWidth", "videoHeight", "volume", "warning", "width", "startTime", "endTime", "startFrame", "endFrame", "online"], i = function (n) {
                    Object.defineProperty(t, n, {
                        get: function () {
                            return e[n]
                        }, set: function (t) {
                            return e[n] = t
                        }
                    })
                };
                for (n = 0; n < r.length; n += 1)i(r[n])
            }()
        };
        n.prototype = new t, n.prototype.constructor = n;
        var r = {}, i = new n(e), a = i._a;
        return r._f = i, r._a = a, delete i._a, r
    }
}(self);
