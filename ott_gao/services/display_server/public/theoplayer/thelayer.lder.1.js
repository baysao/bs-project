!function (e) {
    var t = function () {
        "use strict";
        var e = function (e) {
            return this._c = this._c || {}, void 0 === this._c[e] && (this._c[e] = []), this._c[e]
        };
        this.addEventListener = function (t, n) {
            var r = e.call(this, t), i = r.indexOf(n);
            -1 === i && r.push(n)
        }, this.removeEventListener = function (t, n) {
            var r = e.call(this, t), i = r.indexOf(n);
            n ? -1 !== i && r.splice(i, 1) : r.length = 0
        }, this._d = function () {
            delete this._c
        }, this.dispatchEvent = function (t, r) {
            var i, a;
            if (r)return n(this.dispatchEvent.bind(this, t));
            for ("string" == typeof t && (t = {type: t}), i = e.call(this, t.type).slice(), a = 0; a < i.length; a += 1)i[a].call(this, t);
            return !t.defaultPrevented
        }
    };
    t.prototype = {constructor: t};
    var n = function (e) {
        "use strict";
        return setTimeout(e, 0)
    };
    !function (e, t) {
        "use strict";
        var n = t.head, i = t.createElement.bind(t), a = e.theoplayer, o = a && a.configuration || {}, u = a && a.onReady || void 0, c = o && o.libraryLocation && o.libraryLocation + "theoplayer.js" || "//cdn.theoplayer.com/1.5.72/theoplayer/theoplayer.js", s = i("style"), l = i("script"), d = n.appendChild.bind(n), p = "theoplayer-loaded", f = [], h = function () {
            console.log("WARNING: THEOplayer is not initialised yet.")
        }, v = function () {
            e.removeEventListener(p, v), n.removeChild(s)
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
        s.innerHTML = "video { opacity : 0; }", d(s), e.addEventListener(p, v), e.theoplayer = a, a._h = f, a.configuration = o, a.onReady = u, l.async = !0, l.src = c, d(l)
    }(e, document);
    var r = function (e) {
        var n = function (e) {
            var t = this, n = ["canplay", "canplaythrough", "downloadInterrupted", "durationchange", "ended", "error", "emptied", "fullscreenchange", "initialized", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "seeked", "seeking", "stalled", "timeupdate", "volumechange", "waiting", "timedmetadata", "unsupportedPlatform"], r = function (e) {
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
                var n, r = ["played", "autoplay", "buffered", "currentFrame", "currentProgramDateTime", "currentSrc", "currentTime", "duration", "dvr", "element", "ended", "error", "frameAccurateSeekEnabled", "frameRate", "fullscreenEnabled", "height", "initialized", "live", "loop", "muted", "paused", "playbackRate", "poster", "seeking", "src", "textTracks", "videoWidth", "videoHeight", "volume", "warning", "width", "startTime", "endTime", "startFrame", "endFrame"], i = function (n) {
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