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
    }(peer5.players);
    !function () {
        document.addEventListener("DOMContentLoaded", function () {
            if (!videojs)return !1;
            var t = videojs.players;
            Object.keys(t).forEach(function (t) {
                console.log(t);
                var e = videojs(t), i = null, s = null, n = !1;
                peer5.players.EventsDispatcher.initPlayer(t, "videojs"),

                    e.on("ready", function () {
                        console.log('ready');
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