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
        var n = t.head,
            i = e.theoplayer, a = i && i.configuration || {}, o = i && i.onReady || void 0,
            u = a && a.libraryLocation && a.libraryLocation + "theoplayer.js" || "//cdn.theoplayer.com/1.6.18/theoplayer/theoplayer.js",
            l = t.createElement("style"),
            c = t.createElement("script"),
            s = n.appendChild.bind(n),
            d = "theoplayer-loaded", p = [],
            f = function () {
                console.log("WARNING: THEOplayer is not initialised yet.")
            }, h = function () {
                e.removeEventListener(d, h), n.removeChild(l)
            }, v = function (e) {
                var t;
                for (t = 0; t < p.length; t += 1)if (p[t]._e.contains(e))return p[t];
                return !1
            }, i = function (e, t) {
                var n = v(e);
                return n ? n._f : (n = new r({
                    exitFullscreen: f,
                    load: f,
                    play: f,
                    pause: f,
                    requestFullscreen: f
                }), n._e = e, n._g = t, p.push(n), e.id && (p[e.id] = n), n._f)
            };
        l.innerHTML = "video { opacity : 0; }", s(l), e.addEventListener(d, h), e.theoplayer = i, i._h = p, i.configuration = a, i.onReady = o, i.player = f, i.controller = f, i.destroy = f, c.async = !0, c.src = u, s(c)
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