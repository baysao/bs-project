jwplayer.vast = {}, function (a) {
    function b(b) {
        var c;
        return a.utils.foreach(b, function (a, b) {
            c = c || {}, "_adQueue" === a ? c[a] = b.slice() : c[a] = b
        }), c
    }

    function c(a, b) {
        return "%" === a.toString().slice(-1) ? b * parseFloat(a.slice(0, -1)) / 100 : parseFloat(a)
    }

    a.vast.schedule = function () {
        function d(a, b) {
            for (var d = h.length; d--;)if (a >= c(h[d]._offSet, b))return d;
            return -1
        }

        var e, f, g, h = [], i = [];
        this.setPreRoll = function (a) {
            e = a
        }, this.getPreRoll = function () {
            return b(e)
        }, this.getPostRoll = function () {
            return b(g)
        }, this.getNextMidRoll = function (a, c) {
            if (this.sort(c), h.length > i.length) {
                var e = d(a, c);
                if (e >= 0 && i.indexOf(e) < 0) {
                    var f = h[e];
                    return i.push(e), b(f)
                }
            }
        }, this.getMidRolls = function () {
            var c = [];
            return a.utils.foreach(h, function (a, d) {
                c.push(b(d))
            }), c
        }, this.reset = function () {
            i = []
        }, this.addMidRoll = function (a) {
            h.push(a)
        }, this.setPostRoll = function (a) {
            g = a
        }, this.sort = function (a) {
            (!a || 1 > a) && (a = 1), h.sort(function (b, d) {
                return c(b._offSet, a) - c(d._offSet, a)
            })
        }, this.setVMAP = function (a) {
            f = a
        }, this.isVMAP = function () {
            return !!f
        }, this.getVMAP = function () {
            return f
        }
    }
}(jwplayer), function (a) {
    function b(a) {
        return h.isString(a) ? [a] : h.isArray(a) ? a.slice(0) : a
    }

    function c(a) {
        if ("start" === a || "0%" === a)return "pre";
        if ("end" === a || "100%" === a)return "post";
        if ("pre" === a || "post" === a || h.indexOf(a, "%") > -1)return a;
        var b = g.seconds(a);
        return h.isNumber(b) ? b : !1
    }

    function d(a, d) {
        var e = d.schedule || d.adschedule;
        h.each(e, function (e) {
            e.ad && (g.extend(e, e.ad), delete e.ad);
            var f = c(e.offset), i = {_offSet: f, _type: e.type};
            f === !1 && g.log("Error: ad offset format not supported", f);
            var j = e.skipoffset || d.skipoffset;
            h.isUndefined(j) || (i.skipoffset = j);
            var k = e.adbreakid;
            k && (i.adbreakid = k);
            var l = e.adtagid;
            if (l && (i._adTagQueue = b(l)), e.tag)i._adQueue = b(e.tag), i._waterfallIndex = 0; else {
                if (!h.isString(e.vastxml))return void g.log("Error: no ad tag provided");
                i._adXML = e.vastxml
            }
            switch (f) {
                case"pre":
                    a.setPreRoll(i);
                    break;
                case"post":
                    a.setPostRoll(i);
                    break;
                default:
                    a.addMidRoll(i)
            }
        })
    }

    function e(c) {
        var e = new a.vast.schedule;
        if (c.tag)e.setPreRoll({
            _offSet: "pre",
            _adQueue: b(c.tag),
            _waterfallIndex: 0
        }); else if (h.isString(c.vastxml))e.setPreRoll({_offSet: "pre", _adXML: c.vastxml}); else {
            if (h.isString(c.schedule))return e.setVMAP(c.schedule), e;
            d(e, c)
        }
        return e.sort(), e
    }

    function f(a) {
        var b = {
            cuetext: a.cuetext || l,
            dynamicMessage: a.admessage || i,
            podMessage: a.podmessage || j,
            skipoffset: a.skipoffset || k,
            skipMessage: a.skipmessage || m,
            skipText: a.skiptext || n
        }, c = a.companiondiv;
        return c && (b.companion = {id: c.id, height: c.height, width: c.width}), b
    }

    var g = a.utils, h = a._, i = "This ad will end in xx seconds.", j = "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__. ", k = -1, l = "Advertisement", m = "Skip ad in xx", n = "Skip";
    a.vast.configparser = {getSchedule: e, getOptParams: f}
}(jwplayer), function (a) {
    function b(a, b, c) {
        var d = [];
        return a && (d = a.getElementsByTagName(b), c && d && 0 === d.length && (d = a.getElementsByTagName(c + ":" + b))), d
    }

    function c(a, b) {
        return a ? a.getAttribute(b) : null
    }

    function d(a) {
        if (a) {
            var b = a.textContent || a.text;
            if (b)return g.trim(b)
        }
        return ""
    }

    function e(a, b) {
        var e = c(b, "event");
        if ("progress" === e) {
            var g = c(b, "offset");
            e = e + "_" + g
        }
        var h = d(b);
        f(a, e, h)
    }

    function f(a, b, c) {
        a[b] || (a[b] = []), c && a[b].push(c)
    }

    var g = a.utils, h = "vmap";
    a.vast.vmapparser = function (a, f) {
        for (var i = b(a, "AdBreak", h), j = 0; j < i.length; j++) {
            var k = {}, l = {}, m = i[j], n = c(m, "timeOffset"), o = c(m, "breakType"), p = b(m, "AdTagURI", h)[0], q = b(m, "VASTData", h)[0] || b(m, "VASTAdData", h)[0], r = c(p, "templateType"), s = d(p), t = b(m, "TrackingEvents", h)[0], u = b(t, "Tracking", h);
            if (k._type = o, q)k._adXML = b(q, "VAST")[0]; else {
                if ("vast1" != r && "vast2" != r && "vast3" != r)continue;
                k._adQueue = [s], k._waterfallIndex = 0
            }
            if (u)for (var v = 0; v < u.length; v++)e(l, u[v]);
            switch (k._trackers = l, k._type = o, n) {
                case"start":
                    k._offSet = "pre", f.setPreRoll(k);
                    break;
                case"100%":
                case"end":
                    k._offSet = "post", f.setPostRoll(k);
                    break;
                default:
                    if (/^#/.test(n))break;
                    /^\d\d?(?:\.\d+)?%$/.test(n) ? k._offSet = n : k._offSet = g.seconds(n), f.addMidRoll(k)
            }
        }
        f.sort()
    }, a.vast.vparser = function (a) {
        function h(a) {
            var d, e, f, g = [];
            "VAST" === a.nodeName ? d = a : (d = b(a, "VAST")[0], d || (d = b(a, "VideoAdServingTemplate")[0])), d || k(101, "Invalid VAST response"), e = "VideoAdServingTemplate" === d.tagName ? 1 : parseFloat(c(d, "version") || 0), f = b(d, "Ad");
            for (var h = 0; h < f.length; h++) {
                var j = i(e, f[h]);
                j.vastversion = e, g.push(j)
            }
            r = g
        }

        function i(a, e, f) {
            f = f || {};
            var g, h = b(e, "InLine")[0], i = b(e, "Wrapper")[0], o = h ? h : i, p = o ? d(b(o, "AdTitle")[0]) : "";
            return f.sequence = c(e, "sequence"), f.adTitle = p, (!a || a > 3 || 1 > a) && k(102, "Vast version not supported"), o ? (a >= 2 ? (g = m(o), l(o, "Impression", g.trackers), l(o, "Error", g.trackers)) : g = n(o), i && (g.wrappedURI = d(b(i, "VASTAdTagURI")[0]) || d(b(i, "VASTAdTagURL")[0])), g = j(f, g)) : k(101, "Invalid VAST response"), g
        }

        function j(a, b) {
            var c = g.extend({}, a);
            return g.foreach(b, function (a, d) {
                g.exists(c[a]) ? "array" == g.typeOf(d) ? c[a] = c[a].concat(d) : "object" == g.typeOf(d) ? c[a] = g.extend(c[a], b[a]) : c[a] = d : c[a] = d
            }), c
        }

        function k(a, b) {
            throw s = {
                code: a, message: b, toString: function () {
                    return this.code + " " + this.message
                }
            }
        }

        function l(a, c, e) {
            var g, h = b(a, c);
            for (g = 0; g < h.length; g++)f(e, c.toLowerCase(), d(h[g]))
        }

        function m(a) {
            var g, h, i, j, k, l, m, n, r, s = b(b(a, "Creatives")[0], "Creative"), t = {}, u = {trackers: t};
            for (u.adsystem = d(b(a, "AdSystem")[0]), h = 0; h < s.length; h++) {
                if (g = s[h], j = b(g, "Linear")[0], k = b(g, "NonLinear")[0], l = b(b(g, "TrackingEvents")[0], "Tracking"), j || k)for (i = 0; i < l.length; i++)e(t, l[i]);
                if (m = d(b(g, "AdParameters")[0]), m && (u.adParams = m), j) {
                    n = b(j, "VideoClicks")[0], r = d(b(n, "ClickThrough")[0]);
                    for (var v = b(n, "ClickTracking"), w = c(j, "skipoffset"), x = 0; x < v.length; x++)f(t, "click", d(v[x]));
                    r && (u.clickthrough = r), w && (u.skipoffset = w), o(j, u)
                } else k ? (r = d(b(k, "NonLinearClickThrough")[0]), r && (u.clickthrough = r), p(g, u)) : q(g, u)
            }
            return u
        }

        function n(a) {
            var g, h, i, j, k, l, m, n, p, q, r, s, t = b(a, "Video")[0] || a, u = b(a, "NonLinear")[0], v = {}, w = {trackers: v};
            if (t) {
                for (g = b(b(a, "TrackingEvents")[0], "Tracking"), h = 0; h < g.length; h++)e(v, g[h]);
                for (j = b(b(a, "Impression")[0], "URL"), h = 0; h < j.length; h++)i = j[h], f(v, "impression", d(i));
                for (k = b(b(a, "Error")[0], "URL"), h = 0; h < k.length; h++)i = k[h], f(v, "error", d(i));
                n = b(t, "VideoClicks")[0], p = d(b(n, "ClickThrough")[0]);
                for (var x = b(b(n, "ClickTracking")[0], "URL"), y = 0; y < x.length; y++)f(v, "click", d(x[y]));
                if (p && (w.clickthrough = p), q && f(v, "click", q), o(t, w), r = b(t, "AdParameters")[0], r && (s = c(r, "apiFramework"), "vpaid" == s.toLowerCase())) {
                    for (var z = 0; z < w.media.length; z++)w.media[z].adType = s;
                    w.adParams = d(r)
                }
            }
            if (u) {
                var A = w.media || [], B = b(u, "URL")[0];
                A.push({type: c(u, "creativeType"), file: d(B), adType: c(u, "apiFramework")}), w.media = A
            }
            for (l = b(a, "CompanionAds")[0], l = b(l, "Companion"), w.companions || (w.companions = []), h = 0; h < l.length; h++)m = l[h], w.companions.push({
                width: parseInt(c(m, "width"), 10),
                height: parseInt(c(m, "height"), 10),
                type: c(m, "resourceType"),
                resource: d(b(m, "URL")[0]),
                trackers: [],
                clickthrough: ""
            });
            return w
        }

        function o(a, e) {
            for (var f = b(b(a, "MediaFiles")[0], "MediaFile"), g = e.media ? e.media : [], h = 0; h < f.length; h++) {
                var i = f[h], j = {
                    type: c(i, "type"),
                    file: d(i),
                    adType: c(i, "apiFramework") || "",
                    width: parseInt(c(i, "width")) || 0,
                    height: parseInt(c(i, "height")) || 0
                };
                j.file && g.push(j)
            }
            e.media = g
        }

        function p(a, e) {
            var f = [], g = b(a, "StaticResource")[0];
            g && (f.push({
                type: c(g, "creativeType"),
                file: d(g),
                adType: c(b(a, "NonLinear")[0], "apiFramework") || "static",
                minDuration: c(b(a, "NonLinear")[0], "minSuggestedDuration") || "00:00:00"
            }), e.media = f)
        }

        function q(a, e) {
            var g, h, i, j, k, l, m, n, o, p, q = b(b(a, "CompanionAds")[0], "Companion"), r = e.companions ? e.companions : [];
            for (h = 0; h < q.length; h++) {
                g = q[h], j = b(g, "StaticResource")[0], k = b(g, "IFrameResource")[0], l = b(g, "HTMLResource")[0];
                var s = {};
                if (j)m = c(j, "creativeType"), n = d(j); else if (k)m = "iframe", n = d(k); else {
                    if (!l)return;
                    m = "html", n = d(l)
                }
                var t = b(b(g, "TrackingEvents")[0], "Tracking");
                for (i = 0; i < t.length; i++)o = c(t[i], "event"), f(s, o, d(t[i]));
                p = d(b(g, "CompanionClickThrough")[0]), r.push({
                    width: parseInt(c(g, "width"), 10),
                    height: parseInt(c(g, "height"), 10),
                    type: m,
                    source: n,
                    trackers: s,
                    clickthrough: p
                })
            }
            e.companions = r
        }

        var r = [], s = null;
        a && h(a), this.parse = h, this.parsedAds = function () {
            return r
        }, this.error = function () {
            return s
        }
    }
}(window.jwplayer), function (a) {
    function b(a) {
        return c(a) ? a : f.parseXML(a)
    }

    function c(a) {
        return "object" == typeof Node ? a instanceof Node : a && "object" == typeof a && "number" == typeof a.nodeType && "string" == typeof a.nodeName
    }

    var d = a.jwplayer, e = d.events, f = d.utils, g = d._, h = d.vast;
    h.vloader = function (a, c) {
        function d() {
            var a = c.getContainer();
            return a.querySelector("object")
        }

        function i(a, b) {
            var d = c.id + ":vast:" + b.name + ":" + Math.random().toString(16).substr(2);
            return a.on(d, b, x), d
        }

        function j(a) {
            var b = function (b) {
                l(b, a)
            }, e = function (b, e) {
                if (c) {
                    var j = d();
                    return j && "Invalid XML" !== b && "Timeout" !== b && f.crossdomain(e) ? void j.triggerFlash("loadXml", e, i(j, g), i(j, h)) : void r(b, a)
                }
            }, g = function (b) {
                x.parseXmlString(b, a)
            }, h = function (b) {
                f.log(b), r(b, a)
            };
            return f.ajax(a, b, e, {
                withCredentials: !0,
                retryWithoutCredentials: !0,
                requireValidXML: !0,
                timeout: 5e3
            })
        }

        function k(a) {
            a && (a.onload = null, a.onreadystatechange = null, a.onerror = null, a.abort && a.abort())
        }

        function l(b, d) {
            v = v || new h.vparser;
            try {
                v.parse(b.responseXML)
            } catch (g) {
                return void t(g.message, g.code || 900, d)
            }
            var i = v.parsedAds();
            i && i.length ? (z = i, f.foreach(z, function (b, d) {
                if (d.wrappedURI) {
                    var f = new h.vloader(a, c);
                    f.on(e.COMPLETE, function () {
                        m(d, f.allAds())
                    }), f.on(e.ERROR, function (a) {
                        t(a.message, a.code, a.url)
                    }), f.load(d.wrappedURI)
                }
            }), p()) : t("Ad Tag Empty", 101, d)
        }

        function m(a, b) {
            var c = n(a, b), d = g.indexOf(z, a);
            Array.prototype.splice.apply(z, [d, 1].concat(c)), p()
        }

        function n(a, b) {
            var c = [];
            return f.foreach(b, function (b, d) {
                a.companions && (d.companions = (d.companions ? d.companions : []).concat(a.companions)), a.trackers && (d.trackers = o(d.trackers, a.trackers)), a.sequence && (d.sequence = a.sequence), c.push(d)
            }), c
        }

        function o(a, b) {
            return a = a || {}, f.foreach(b, function (b, c) {
                a[b] ? a[b] = a[b].concat(c) : a[b] = c
            }), a
        }

        function p() {
            var a = !1;
            f.foreach(z, function (b, c) {
                c.wrappedURI && (a = !0)
            }), a || q()
        }

        function q() {
            for (var a = z.slice(0), b = a.length, c = a.length; c--;) {
                var d = a[c];
                d.media && d.media.length || a.length--
            }
            var f = 0 === b, g = a.length !== b;
            return f || g ? void t("Ad Tag Empty", 101, y[y.length - 1]) : void u(e.COMPLETE, {vloader: x})
        }

        function r(a, b) {
            "Invalid XML" === a ? t(a, 100, b) : t("VAST could not be loaded", 301, b)
        }

        function s() {
            return y && y.length ? y[0] : ""
        }

        function t(a, b, c) {
            A || (A = !0, x.trigger(e.ERROR, {message: a, code: b, vloader: x, url: s() || c, wrappedUrl: c}))
        }

        function u(a, b) {
            return x.trigger(a, b)
        }

        var v, w, x = this, y = [], z = [], A = !1;
        f.extend(x, c.Events), x.load = function (a) {
            y.push(a), A = !1, w = j(a)
        }, x.destroy = function () {
            k(w), c = null
        }, x.scheduledAd = function () {
            return a
        }, x.allAds = function () {
            return z
        }, x.adPod = function () {
            var a = [];
            return f.foreach(z, function (b, c) {
                c.sequence && a.push(c)
            }), a.sort(function (a, b) {
                return a.sequence - b.sequence
            }), a
        }, x.adBuffet = function () {
            var a = [];
            return f.foreach(z, function (b, c) {
                c.sequence || a.push(c)
            }), a
        }, x.history = function () {
            return y
        }, x.parseXmlString = function (a, c) {
            l({responseXML: b(a)}, c)
        }
    }
}(window), function (a) {
    a.vast.companion = function (b) {
        function c(a) {
            if (a = a.creativeView) {
                for (var c = 0; c < a.length; c++) {
                    var d = new Image;
                    d.src = a[c]
                }
                k.isFunction(b) && b({type: "companion", data: {trackers: a}})
            }
        }

        function d(a, b, c) {
            var d = document.createElement("param");
            d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d)
        }

        function e(a) {
            if (i.removeCompanion(), "html" == a.type)return h.innerHTML = a.source, void c(a.trackers);
            if ("iframe" == a.type) {
                var b = document.createElement("iframe");
                return b.height = g.height, b.width = g.width, b.src = a.source, b.scrolling = "no", b.style.border = "none", b.marginWidth = 0, b.marginHeight = 0, c(a.trackers), h.innerHTML = "", void h.appendChild(b)
            }
            if ("application/x-shockwave-flash" == a.type) {
                if (j.isMSIE()) {
                    var e = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width="100%" height="100%"id="' + h.id + '" name="' + h.id + '" tabindex=0"">';
                    e += '<param name="movie" value="' + a.source + '">', e += '<param name="allowfullscreen" value="true">', e += '<param name="allowscriptaccess" value="always">', e += '<param name="scale" value="exactfit">', e += '<param name="seamlesstabbing" value="true">', e += '<param name="wmode" value= "opaque">', e += "</object>", h.innerHTML = e
                } else {
                    var f = document.createElement("object");
                    f.setAttribute("type", "application/x-shockwave-flash"), f.setAttribute("data", a.source), f.setAttribute("width", "100%"), f.setAttribute("height", "100%"), f.setAttribute("tabindex", 0), d(f, "allowfullscreen", "true"), d(f, "allowscriptaccess", "always"), d(f, "seamlesstabbing", "true"), d(f, "wmode", "opaque"), h.appendChild(f)
                }
                return void c(a.trackers)
            }
            var k = new Image;
            k.src = a.source, j.exists(a.clickthrough) && (k.onclick = function () {
                var b = window.open(a.clickthrough, "_blank");
                b.focus()
            }), h.innerHTML = "", h.appendChild(k), c(a.trackers)
        }

        function f(a) {
            return a.width == g.width && a.height == g.height
        }

        var g, h, i = this, j = a.utils, k = a._;
        i.addCompanion = function (a, b) {
            if (g = a, h = document.getElementById(g.id), !h)return !1;
            for (var c = 0; c < b.length; c++)if (f(b[c]))return e(b[c]), !0;
            return !1
        }, i.removeCompanion = function () {
            h.innerHTML = ""
        }
    }
}(window.jwplayer), function (a) {
    var b = a.utils, c = a._, d = "[ERRORCODE]";
    a.vast.tracker = function (a, e) {
        function f(b) {
            return a.hasOwnProperty(b) ? a[b] : []
        }

        function g(a, b) {
            var d, g, h, i = f(a), j = [];
            for (d = 0; d < i.length; d++)if (g = i[d]) {
                if (b)for (var k in b)if (b.hasOwnProperty(k)) {
                    var l = b[k];
                    g = g.replace(k, l)
                }
                h = new Image, h.src = g, j.push(g)
            }
            c.isFunction(e) && e({type: "ping", data: {pingType: a, urls: j}})
        }

        function h() {
            o.started = !0, g("start")
        }

        function i() {
            o.started = !0, g("breakStart")
        }

        function j(a, b) {
            if (!(1 >= b)) {
                for (var c = (4 * a + .05) / b | 0; c > n && 3 > n;)n++, 1 === n ? g("firstQuartile") : 2 === n ? g("midpoint") : 3 === n && g("thirdQuartile");
                k(a, b)
            }
        }

        function k(a, b) {
            for (var c = p.length; c--;) {
                var d = p[c];
                if (!d.tracked) {
                    var e = d.offset;
                    d.percentage && (e = b * e / 100), a >= e && (d.tracked = !0, g(d.key))
                }
            }
        }

        function l(a) {
            o.firedError = !0, a = a || 900;
            var b = {};
            b[d] = a, g("error", b)
        }

        function m(a) {
            return function () {
                g(a)
            }
        }

        var n = 0, o = this, p = [];
        for (var q in a)if (a.hasOwnProperty(q) && 0 === q.indexOf("progress")) {
            var r = "" + q.split("_")[1], s = {key: q, offset: r, tracked: !1, percentage: !1};
            /^\d+%$/.test(r) ? (s.percentage = !0, s.offset = parseFloat(r)) : s.offset = b.seconds(r), p.push(s)
        }
        o.started = !1, o.firedError = !1, o.hasComp = !1, o.addUrl = function (b, c) {
            a.hasOwnProperty(b) ? a[b].push(c) : (a[b] = [], a[b].push(c))
        }, o.creativeView = m("creativeView"), o.start = h, o.click = m("click"), o.skip = m("skip"), o.complete = m("complete"), o.pause = m("pause"), o.resume = m("resume"), o.mute = m("mute"), o.unmute = m("unmute"), o.fullscreen = m("fullscreen"), o.expand = m("expand"), o.collapse = m("collapse"), o.acceptInvitation = m("acceptInvitation"), o.close = m("close"), o.rewind = m("rewind"), o.impression = m("impression"), o.breakStart = i, o.breakEnd = m("breakEnd"), o.time = j, o.error = l
    }
}(window.jwplayer), function (a) {
    var b = a.utils, c = b.UI, d = a.events, e = d.JWPLAYER_MEDIA_TIME, f = {
        CLICK: "onClick",
        PLAY: "onPlay",
        PAUSE: "onPause",
        ERROR: "onError",
        COMPLETE: "onComplete"
    }, g = document.createElement("img"), h = document.createElement("img"), i = {
        cursor: "pointer",
        position: "absolute",
        margin: "auto",
        left: 0,
        right: 0,
        bottom: 0,
        display: "block"
    }, j = "opacity 0.2s", k = {"-webkit-transition": j, transition: j}, l = function (a, d, e, i) {
        function j() {
            clearTimeout(x), z.trigger(f.ERROR), v()
        }

        function k() {
            z.trigger(f.CLICK)
        }

        function l() {
            r(h)
        }

        function m() {
            r(h, .75)
        }

        function n() {
            r(g)
        }

        function o() {
            r(g, .5)
        }

        function p(a) {
            -1 === y && (a.preventDefault(), i.onmouseover = i.onmouseout = null, s([w, h, g]), i.appendChild(g), y = setTimeout(function () {
                t(w), t(h), r(g, .5), i.onmouseover = n, i.onmouseout = o, y = -1
            }, 250))
        }

        function q(a) {
            -1 === y && (a.preventDefault(), i.onmouseover = i.onmouseout = null, i.appendChild(w), i.appendChild(h), y = setTimeout(function () {
                r([w, h]), i.onmouseover = l, i.onmouseout = m, y = -1
            }, 50), s(g))
        }

        function r(a, c) {
            b.style(a, {opacity: c || 1})
        }

        function s(a) {
            b.style(a, {opacity: 0})
        }

        function t(a) {
            i.contains(a) && i.removeChild(a)
        }

        function u() {
            w.onload = w.onerror = null
        }

        function v() {
            u(), t(w)
        }

        var w, x = -1, y = -1, z = this;
        b.extend(this, a.Events), w = document.createElement("img"), w.className = "jw-banner", w.id = a.id + "_vast_static", s([h, g]), t(g), i.appendChild(w), i.appendChild(h), x = setTimeout(j, 5e3), w.onerror = j, w.onload = function () {
            return clearTimeout(x), 0 === w.naturalWidth ? j() : (u(), b.style(h, {
                top: -w.height - 8,
                bottom: w.height - 8,
                left: w.width
            }, !0), b.style(g, {top: -16}, !0), r([i, w]), r(h, .75), new c(w).on("click tap", k), b.isMobile() || (i.onmouseover = l, i.onmouseout = m), h.onclick = h.ontouchstart = p, g.onclick = g.ontouchstart = q, void z.trigger(f.PLAY))
        }, w.src = d, z.removeListeners = function () {
            clearTimeout(x), clearTimeout(y), i.onmouseover = i.onmouseout = h.onclick = g.onclick = null, z.off(), u()
        }, z.stop = function () {
            s([i, w, h, g]), setTimeout(v, 400), t(h), t(g)
        }
    };
    h.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAw0lEQVQ4y2NgwATcQJwGxGuB+BoQP4PSa6Hi3AwEQCAQX4BqxIUvQNVhBcUENKPjYmwueEYGDkYOg4tkGnIViPlAhiSiS+7du/eHs7PzG2QxFxeXNyBxLAaB9DOsQJcAaXj79u1fmEEwPojGYghIP8N5bE6Faayurv6Ix4BnUP0MD3H5GWTAfyAA0XjC5SFOl4C8guwS9DBCd8kKXAaghwkOg1ZSLXaokk5AIIhMQ0KonneQXURMLg4mVBzAypN1xJYnALKHAXPzEPJQAAAAAElFTkSuQmCC", g.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAiklEQVQ4y2NgwATcQJwGxGuB+BoQP4PSa6Hi3AwEQCAQX4BqxIUvQNVhBcUENKPjYmwueEYGDkYOg4tkGnIViPlAhiTiU/gfCAgYBNLPsIJCQ0D6Gc5TaAhIP8NDbBpxASyGPKSaSygNk5VUix2qpBMQCCLTkBCq5x1kFxGTi4MJFQew8mQdseUJAImp82D/nQbxAAAAAElFTkSuQmCC", a.vast.staticplayer = function (a, c) {
        function j(a) {
            v.trigger(e, a)
        }

        function m() {
            w = a.getPosition(), x > 0 && (0 === w ? v.on(e, n) : v.on(e, o)), r(f.PLAY)
        }

        function n(a) {
            w = a.position, v.off(e, n), v.on(e, o)
        }

        function o(a) {
            var b = a.position - w;
            b > x && (v.off(e, o), v.stop())
        }

        function p() {
            r(f.CLICK)
        }

        function q() {
            r(f.ERROR)
        }

        function r(a, b) {
            b = b || {}, b.tag = b.tag || u, v.trigger(a, b)
        }

        function s(a) {
            return function (b) {
                v.on(a, b)
            }
        }

        var t, u, v = this, w = 0, x = 0;
        b.extend(this, a.Events), v.type = "static", a.onTime(j), v.playAd = function (d, e, j, n, o) {
            x = b.seconds(n), u = o, t && (t.removeListeners(), t.stop()), c.style.opacity = 0, c.style.visibility = "visible";
            var r = b.isFF() ? {} : k;
            b.style(c, b.extend({
                top: "",
                position: "absolute",
                width: "100%"
            }, r)), b.style([h, g], b.extend({opacity: .75}, i, r)), t = new l(a, e, j, c), t.on(f.PLAY, m), t.on(f.CLICK, p), t.on(f.ERROR, q)
        }, v.removeEvents = function () {
            v.off()
        }, v.getState = function () {
            return d.state.PLAYING
        }, v.stop = function () {
            w && t && (w = 0, x = 0, v.off(e, n), v.off(e, o), t.removeListeners(), t.stop(), r(f.COMPLETE))
        }, v.pause = function () {
        }, v.onPlay = s(f.PLAY), v.onComplete = s(f.COMPLETE), v.onClick = s(f.CLICK), v.onError = s(f.ERROR)
    }
}(window.jwplayer), function (a) {
    var b = a.vast, c = a.events.state, d = a.utils, e = a._;
    b.vpaidplayer = function (a, b, f, g, h) {
        function i() {
            F(P, n), F(R, o), F(Q, p), F(T, s), F(U, t), F(_, w), F(aa, x), F(S, u), F(Z, v), F(V, y), F($, q), F(ba, r), F(ca, k), F(W, z), F(X, A), F(Y, B);
            var b = a.getSafeRegion(!1);
            D("initAd", b.width, b.height + b.y, j(), 0, h)
        }

        function j() {
            return a.getFullscreen() ? "fullscreen" : "normal"
        }

        function k() {
            l(O.ERROR)
        }

        function l(a, b) {
            N || (b = b || {}, b.linear = K.linear ? "linear" : "nonlinear", b.tag = g, I.trigger(a, b))
        }

        function m(a) {
            a && (e.isBoolean(a.linear) && (K.linear = a.linear), e.isBoolean(a.expanded) && (K.expanded = a.expanded), e.isNumber(a.remainingTime) && (K.remainingTime = a.remainingTime))
        }

        function n(b) {
            s(b), E("adVolume", a.getMute() ? 0 : a.getVolume() / 100), D("startAd")
        }

        function o(a) {
            m(a), a.linear && I.blocking && I.blocking.hide(), l(O.STARTED), l(O.PLAY, {
                oldstate: c.BUFFERING,
                newstate: c.PLAYING
            })
        }

        function p(a) {
            m(a), l(O.IMPRESSION)
        }

        function q(a) {
            m(a), l(O.CLICK)
        }

        function r(a) {
            m(a), l(O.SKIPPED)
        }

        function s(b) {
            m(b);
            var c, d, e;
            if (b.linear) {
                if (I.blocking)I.blocking.hide(); else {
                    J = !0, a.setControls(!1);
                    var f = a.getState();
                    f !== f.PLAYING && f !== f.BUFFERING || a.pause(!0)
                }
                e = a.getSafeRegion(!1), d = e.height + e.y, c = e.width
            } else I.blocking ? (I.blocking.destroy(), I.blocking = null) : J && (a.play(!0), a.setControls(!0)), e = a.getSafeRegion(!0), d = e.height + e.y, c = e.width;
            D("resizeAd", c, d, j())
        }

        function t(a) {
            m(a), l(O.EXPANDED_CHANGE, {expanded: K.expanded})
        }

        function u(b) {
            m(b), J && (a.play(!0), a.setControls(!0)), l(O.STOPPED)
        }

        function v() {
            l(O.COMPLETE)
        }

        function w(a) {
            m(a), L || (L = !0, l(O.PAUSE, {newstate: c.PAUSED, oldstate: c.PLAYING}))
        }

        function x(a) {
            m(a), L && (L = !1, l(O.PLAY, {newstate: c.PLAYING, oldstate: c.PAUSED}))
        }

        function y(a) {
            m(a), l(O.REMAINING_TIME, {remainingTime: a.remainingTime})
        }

        function z(a) {
            C(1, a)
        }

        function A(a) {
            C(2, a)
        }

        function B(a) {
            C(3, a)
        }

        function C(a, b) {
            m(b), l("quartile", {quartile: a, remainingTime: b.remainingTime})
        }

        function D() {
            var a = Array.prototype.slice.call(arguments);
            a.unshift("vast:callVpaid"), b.triggerFlash.apply(b, a)
        }

        function E(a, c) {
            b.triggerFlash("vast:setVpaidProperty", a, c)
        }

        function F(a, c) {
            b.triggerFlash("vast:addVpaidListener", a, G(c))
        }

        function G(c) {
            var d = a.id + ":vast:" + c.name + ":" + Math.random().toString(16).substr(2);
            return b.on(d, c, I), d
        }

        function H(a) {
            return function (b) {
                this.on(a, b)
            }
        }

        var I = e.extend(this, a.Events), J = !1, K = {
            linear: !1,
            expanded: !1,
            remainingTime: -1
        }, L = !1, M = -1, N = !1, O = {
            QUARTILE: "quartile",
            REMAINING_TIME: "remainingTimeChange",
            SKIPPED: "skipped",
            STARTED: "started",
            STOPPED: "stopped",
            CLICK: "click",
            PLAY: "play",
            IMPRESSION: "impression",
            PAUSE: "pause",
            ERROR: "error",
            COMPLETE: "complete",
            CLOSE: "close",
            EXPANDED_CHANGE: "expandedChange"
        }, P = "AdLoaded", Q = "AdImpression", R = "AdStarted", S = "AdStopped", T = "AdLinearChange", U = "AdExpandedChange", V = "AdRemainingTimeChange", W = "AdVideoFirstQuartile", X = "AdVideoMidpoint", Y = "AdVideoThirdQuartile", Z = "AdVideoComplete", $ = "AdClickThru", _ = "AdPaused", aa = "AdPlaying", ba = "AdSkipped", ca = "AdError";
        I.type = "vpaid", I.blocking = null, I.setVolume = function (a) {
            E("adVolume", a / 100)
        }, I.onQuartile = H(O.QUARTILE), I.onRemainingTimeChange = H(O.REMAINING_TIME), I.onSkipped = H(O.SKIPPED), I.onComplete = H(O.COMPLETE), I.onStopped = H(O.STOPPED), I.onClick = H(O.CLICK), I.onPlay = H(O.PLAY), I.onPause = H(O.PAUSE), I.onImpression = H(O.IMPRESSION), I.onError = H(O.ERROR), I.onStarted = H(O.STARTED), I.onClose = H(O.CLOSE), I.onExpandedChange = H(O.EXPANDED_CHANGE), I.play = function () {
            D("resumeAd")
        }, I.pause = function () {
            D("pauseAd")
        }, I.stop = function () {
            D("stopAd")
        }, I.resize = function () {
            var b = a.getSafeRegion(!K.linear);
            D("resizeAd", b.width, b.height + b.y, j())
        }, I.removeEvents = function () {
            I.off()
        }, I.destroy = function () {
            I.removeEvents(), b.off(null, null, I), I.blocking = null
        }, I.getState = function () {
            return K.linear ? L ? c.PAUSED : c.PLAYING : c.IDLE
        }, d.isChrome() && b.on("throttle", function (a) {
            clearTimeout(M), "resume" === a.state ? (N = !1, x(K), D("resumeAd")) : M = setTimeout(function () {
                D("pauseAd"), w(K), N = !0
            }, 250)
        }, this), b.triggerFlash("vast:loadVpaid", f, G(i), G(k))
    }
}(window.jwplayer), function (a) {
    var b = a.vast, c = a.events.state;
    b.vpaidplayerjs = function (a, b, d, e) {
        function f(a, b) {
            b = b || {}, b.tag || (b.tag = d), n.trigger(a, b)
        }

        function g(a, b) {
            f("quartile", {quartile: b, duration: a.getAdDuration()})
        }

        function h(a) {
            return function (b) {
                n.on(a, b)
            }
        }

        function i(b, c) {
            var d = document.createElement("iframe");
            d.src = "javascript:false", d.style.border = "0px", d.style.width = "100%", d.style.height = "100%", d.style.position = "relative", d.style.overflow = "hidden", d.scrolling = "no";
            var e = a.getContainer(), f = e.getElementsByClassName("jw-media")[0];
            f.appendChild(d), o.push(d);
            var g = d.contentWindow.document;
            return g.open().write("<body onload=\"var js = document.createElement('script');js.src = '" + b + "';js.addEventListener('load', function() { window.myCallback(); });document.body.appendChild(js);\">"), d.contentWindow.myCallback = c, g.close(), d
        }

        function j(b) {
            return {
                AdLoaded: function () {
                    b.startAd()
                }, AdStarted: function () {
                    b.getAdLinear() && n.blocking && n.blocking.hide(), f("started"), f("play", {
                        oldstate: c.BUFFERING,
                        newstate: c.PLAYING,
                        linear: b.getAdLinear() ? "linear" : "nonlinear"
                    })
                }, AdStopped: function () {
                    k(o), a.setControls(!0), f("stopped")
                }, AdPaused: function () {
                    q || (q = !0, f("pause", {newstate: c.PAUSED, oldstate: c.PLAYING}))
                }, AdPlaying: function () {
                    q && (q = !1, f("play", {
                        newstate: c.PLAYING,
                        oldstate: c.PAUSED,
                        linear: b.getAdLinear() ? "linear" : "nonlinear"
                    }))
                }, AdLinearChange: function () {
                    if (b.getAdLinear())if (n.blocking)n.blocking.hide(); else {
                        a.setControls(!1);
                        var c = a.getState();
                        c !== c.PLAYING && c !== c.BUFFERING || a.pause(!0)
                    } else n.blocking ? (n.blocking.destroy(), n.blocking = null) : (a.play(!0), a.setControls(!0))
                }, AdDurationChange: function () {
                    f("remainingTimeChange", {duration: b.getAdDuration(), remainingTime: b.getAdRemainingTime()})
                }, AdRemainingTimeChange: function () {
                    f("remainingTimeChange", {duration: b.getAdDuration(), remainingTime: b.getAdRemainingTime()})
                }, AdExpandedChange: function () {
                    f("expandedChange", {expanded: b.getAdExpanded()})
                }, AdSkipped: function () {
                    f("skipped")
                }, AdVideoFirstQuartile: function () {
                    g(b, 1)
                }, AdVideoMidpoint: function () {
                    g(b, 2)
                }, AdVideoThirdQuartile: function () {
                    g(b, 3)
                }, AdVideoComplete: function () {
                    f("complete")
                }, AdUserClose: function () {
                    f("close")
                }, AdImpression: function () {
                    f("impression", {linear: b.getAdLinear() ? "linear" : "nonlinear"})
                }, AdClickThru: function (a, b, c) {
                    c && window.open(a), f("click", {id: b})
                }, AdError: function (a, b) {
                    k(o), f("error", {message: a, code: b})
                }
            }
        }

        function k(a) {
            for (; a.length > 0;) {
                var b = a.pop();
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        var l = a._, m = a.Events, n = this, o = [], p = {linear: !1, expanded: !1, remainingTime: -1}, q = !1;
        this.type = "vpaid", this.blocking = null;
        var r = function () {
            var b = n.vpaidAd = s.contentWindow.getVPAIDAd(), c = b.handshakeVersion("2.0");
            if (parseFloat(c) < 1)throw"Invalid vpaid version in handshake";
            n.Listeners = j(b), l.each(n.Listeners, b.subscribe, b);
            var d = "normal", f = 1e3, g = {AdParameters: e}, h = a.getContainer(), i = h.getElementsByClassName("jw-media")[0], k = i.getElementsByTagName("video")[0], m = s.contentWindow.document.createElement("div");
            m.className = "jw-vpaid-wrapper", m.style.height = "100%", s.contentWindow.document.body.appendChild(m), k || (k = document.createElement("video"), i.insertBefore(k, s), o.push(k));
            var p = {videoSlot: k, slot: m};
            b.initAd(i.clientWidth, i.clientHeight, d, f, g, p)
        }, s = i(b, r);
        l.extend(this, m, {
            play: function () {
                n.vpaidAd.resumeAd()
            },
            pause: function () {
                n.vpaidAd.pauseAd()
            },
            stop: function () {
                if (n.vpaidAd)try {
                    n.vpaidAd.stopAd()
                } catch (a) {
                    console.log("Unhandled exception from VPAID2 Creative stopAd", a)
                }
            },
            setVolume: function (a) {
                n.vpaidAd.setAdVolume(a / 100)
            },
            resize: function () {
            },
            destroy: function () {
                if (k(o), n.removeEvents(), n.vpaidAd)try {
                    l.each(n.Listeners, n.vpaidAd.unsubscribe)
                } catch (a) {
                    console.log("Unhandled exception from VPAID2 Creative", a)
                }
                n.blocking = null
            },
            removeEvents: function () {
                n.off()
            },
            onTime: h("time"),
            onComplete: h("complete"),
            onClose: h("close"),
            onClick: h("click"),
            onPlay: h("play"),
            onPause: h("pause"),
            onError: h("error"),
            onImpression: h("impression"),
            onExpandedChange: h("expandedChange"),
            onSkipped: h("skipped"),
            onStopped: h("stopped"),
            onStarted: h("started"),
            onQuartile: h("quartile"),
            onRemainingTimeChange: h("remainingTimeChange"),
            getState: function () {
                return p.linear ? q ? c.PAUSED : c.PLAYING : c.IDLE
            }
        })
    }
}(window.jwplayer), function (a) {
    function b(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c], e = "iframe" === d.type || "html" === d.type ? d.type : "static", f = {
                width: d.width,
                height: d.height,
                type: e,
                resource: d.source,
                click: d.clickthrough
            };
            b.push(f)
        }
        return b
    }

    function c(a) {
        for (var b = [], c = 0; a && c < a.length; c++)a[c].type.indexOf("flash") < 0 && b.push(a[c]);
        return b
    }

    var d = a.jwplayer, e = d.vast, f = d.utils, g = d._, h = d.events, i = 15e3;
    d.vast.adplayer = function (j, k, l, m, n, o, p) {
        function q() {
            var a = k.getProvider();
            return 0 === a.name.indexOf("flash") ? "flash" : a.name
        }

        function r() {
            var a = k.getContainer();
            return a.querySelector("object")
        }

        function s(a) {
            return "application/javascript" === a.type || "application/x-javascript" === a.type
        }

        function t(a) {
            return s(a) ? "html5" : "flash"
        }

        function u() {
            if (ha.blocking) {
                var a = ha.blocking;
                ha.blocking = null, v(a)
            }
        }

        function v(a) {
            a && a !== ia && a.destroy()
        }

        function w() {
            k && (k.off(h.JWPLAYER_FULLSCREEN, H), k.off(h.JWPLAYER_MEDIA_VOLUME, I), k.off(h.JWPLAYER_MEDIA_MUTE, J)), ia && ia.off(), ha && (ha.removeEvents(), u()), l.stop(), l.removeEvents()
        }

        function x(a) {
            a.tracker = new e.tracker(a.trackers, p)
        }

        function y() {
            var a = na._adQueue || {}, b = {
                id: na._id,
                tag: na._currentTag,
                client: "vast",
                witem: na._waterfallIndex || 1,
                wcount: a.length || 1
            };
            return ka && ka.length && (b.sequence = sa + 1, b.podcount = ka.length), ja && (b.creativetype = ja), b
        }

        function z() {
            qa.tracker.linear = "nonlinear";
            var a = qa.media[0], b = qa.clickthrough || "", c = l;
            c.removeEvents();
            var d = r();
            c.onPlay(M), c.onPlay(N), c.onComplete(T), c.onClick(Z), c.onError(da), c.playAd(d, a.file, b, a.minDuration, na._currentTag)
        }

        function A(a) {
            la = setTimeout(function () {
                G("VPAID tag communication timeout")
            }, i), qa = qa || pa[0];
            for (var b, c = "flash" === q(), d = 0; d < qa.media.length; d++) {
                var f = qa.media[d];
                if (c) {
                    b = f;
                    break
                }
                if ("html5" === t(f)) {
                    b = f;
                    break
                }
            }
            if (!b)return G("No Compatible Creatives", 403), !1;
            if ("flash" === t(b)) {
                ja = "vpaid-swf";
                var g = r();
                ha = new e.vpaidplayer(k, g, b.file, na._currentTag, qa.adParams)
            } else ja = "vpaid-js", ha = new e.vpaidplayerjs(k, b.file, na._currentTag, qa.adParams);
            return ha.blocking = a, ha.onPlay(N), ha.onPause(P), ha.onQuartile(R), ha.onRemainingTimeChange(Q), ha.onClick($), ha.onError(ca), ha.onImpression(M), ha.onExpandedChange(ea), ha.onClose(V), ha.onSkipped(ba), ha.onStopped(X), ha.onComplete(U), ha.onStarted(W), !0
        }

        function B(a) {
            var b, c = null, d = [];
            if (qa && (c = D(qa)), pa)for (b = 0; b < pa.length; b++) {
                var e = D(pa[b]), f = d.length === b;
                e && f && d.push(e)
            }
            if (!d.length && !c)return G("No Compatible Creatives", 403), !1;
            var g, h;
            if (d.length)for (g = d, h = [], b = 0; b < g.length; b++)h.push(E(g[b].vastAd)); else g = c, h = E(qa);
            return ka = g, sa = 0, ia = a ? a : k.createInstream().init(), ia.on("play", N), ia.on("pause", P), ia.on("time", S), ia.on("playlistItem", K), ia.on("complete", U), ia.on("playlistComplete", X), ia.on("mute", Y), ia.on("instreamClick", _), ia.on("adSkipped", ba), ia.on("error", ca), ia.on("mediaError", ca), ia.loadItem(g, h), !0
        }

        function C(a) {
            var b, c = q();
            return b = "flash" === c ? g.where(d.api.availableProviders, {name: "flash"}) : g.filter(d.api.availableProviders, function (a) {
                return "flash" !== a.name
            }), g.filter(a, function (a) {
                return g.some(b, function (b) {
                    return b.supports(a)
                })
            })
        }

        function D(a) {
            a.tracker.linear = "linear";
            var b = {vastAd: a, sources: []};
            na.skipoffset && (b.skipoffset = na.skipoffset);
            for (var c = a.media, e = {}, f = 0; f < c.length; f++) {
                var g = c[f];
                b.sources.push({file: g.file, type: g.type}), e[g.file] = {width: g.width || 0, height: g.height || 0}
            }
            if (b = d.playlist.item(b), b.sources = C(b.sources), 0 === b.sources.length)return null;
            var h = k.getSafeRegion(!0), i = null, j = null;
            for (f = 0; f < b.sources.length; f++) {
                var l = b.sources[f], m = e[l.file];
                m.width <= h.width && (!i || m.width > e[i.file].width) && (i = l), m.width >= h.width && (!j || m.width < e[j.file].width) && (j = l)
            }
            return i ? i["default"] = !0 : j && (j["default"] = !0), b
        }

        function E(a) {
            var b = o.skipoffset >= 0 ? o.skipoffset : null;
            return {skipoffset: a.skipoffset || na.skipoffset || b, skipMessage: o.skipMessage, skipText: o.skipText}
        }

        function F(a) {
            if (ka) {
                var b;
                if (b = ka.length ? ka[a] : ka, b.vastAd)return b.vastAd
            } else if (!qa && pa)return pa[a];
            return qa
        }

        function G(a, b) {
            clearTimeout(la), b = b || 900;
            var c = F(sa), d = c.tracker;
            d.error(b);
            var e = y();
            e.code = b, e.message = a, ma.trigger(h.JWPLAYER_AD_ERROR, e)
        }

        function H(a) {
            var b = F(sa), c = b.tracker;
            a.fullscreen && c.started && c.fullscreen()
        }

        function I(a) {
            ha && ha.setVolume(a.volume)
        }

        function J(a) {
            ha && ha.setVolume(a.mute ? 0 : k.getVolume())
        }

        function K(a) {
            ia && (ia.on("time", L), sa = a.index)
        }

        function L(a) {
            if (0 !== a.position) {
                this.off("time", L);
                var b = F(sa), c = b.tracker;
                M({linear: c.linear})
            }
        }

        function M(a) {
            var b = F(sa), c = b.tracker, d = fa(b);
            c.addUrl("impression", d), c.impression(), g.isFunction(p) && p({type: "url", data: {url: d}});
            var e = y();
            e.adposition = na._position || "", e.adtitle = b.adTitle || "", e.adsystem = b.adsystem || "", e.vastversion = b.vastversion, a.linear && (e.linear = a.linear), ma.trigger(h.JWPLAYER_AD_IMPRESSION, e)
        }

        function N(a) {
            clearTimeout(la);
            var d, e = F(sa), g = e.tracker;
            if (g.started)a.oldstate === h.state.PAUSED && (g.resume(), O(a)); else {
                ha && (g.linear = a.linear);
                var i = f.extend({linear: g.linear}, y(), E(e));
                i.message = o.dynamicMessage || "", i.clickthrough = e.clickthrough, i.sequence && (i.podMessage = o.podMessage || ""), e.adTitle && (i.title = e.adTitle), e.companions && (i.companions = e.companions), k.dispatchEvent(h.JWPLAYER_AD_META, i), e.companions && (d = y(), d.companions = b(e.companions), k.dispatchEvent(h.JWPLAYER_AD_COMPANIONS, d));
                var j, l = m;
                j = f.flashVersion() > 9 ? e.companions : c(e.companions), o.companion && j && j.length && (g.hasComp = l.addCompanion(o.companion, j)), g.start(), g.creativeView(), O(a)
            }
        }

        function O(a) {
            if ("static" !== ga && ("vpaid" !== ga || "linear" === a.linear)) {
                var b = y();
                b.oldstate = a.oldstate, b.newstate = a.newstate, k.dispatchEvent(h.JWPLAYER_AD_PLAY, b)
            }
        }

        function P(a) {
            var b = F(sa), c = b.tracker;
            c.pause();
            var d = y();
            d.oldstate = a.oldstate, d.newstate = a.newstate, k.dispatchEvent(h.JWPLAYER_AD_PAUSE, d)
        }

        function Q(a) {
            ra = a.duration ? a.duration : Math.max(1, ra, a.remainingTime);
            var b = ra - a.remainingTime;
            S({position: b, duration: ra})
        }

        function R(a) {
            if (a.duration)ra = a.duration; else {
                var b = 4 * a.remainingTime / (4 - a.quartile);
                ra = Math.max(ra, 1, b)
            }
            S({position: ra * a.quartile * .25, duration: ra})
        }

        function S(a) {
            var b = F(sa), c = a.position, d = a.duration, e = o.dynamicMessage || "", f = o.podMessage || "", g = d - c, i = b.tracker;
            if (i && i.time(c, d), ia && e && g > 0) {
                if (e = e.replace(/xx/gi, "" + Math.ceil(g)), ka && ka.length) {
                    var j = sa + 1;
                    f = f.replace(/__AD_POD_CURRENT__/g, "" + j), f = f.replace(/__AD_POD_LENGTH__/g, "" + ka.length),
                        e = f + e
                }
                ia.setText(e)
            }
            var l = y();
            l.position = c, l.duration = d, k.dispatchEvent(h.JWPLAYER_AD_TIME, l)
        }

        function T() {
            U(), X()
        }

        function U() {
            var a = F(sa), b = a.tracker;
            b.firedError || (b.complete(), k.dispatchEvent(h.JWPLAYER_AD_COMPLETE, y()))
        }

        function V() {
            var a = F(sa), b = a.tracker;
            b.firedError || b.close()
        }

        function W() {
            k.dispatchEvent("adStarted", y())
        }

        function X() {
            w(), ma.trigger(h.JWPLAYER_AD_COMPLETE)
        }

        function Y(a) {
            var b = F(sa), c = b.tracker;
            c && (a.mute ? (c.mute(), ha && ha.setVolume(0)) : (c.unmute(), ha && ha.setVolume(k.getVolume() / 100)))
        }

        function Z() {
            var a = F(sa);
            k.pause(!0), aa(a)
        }

        function $() {
            var a = F(sa);
            aa(a)
        }

        function _() {
            var a = F(sa), b = ia.getState() === h.state.PAUSED;
            b || aa(a)
        }

        function aa(b) {
            b.tracker.click(), k.dispatchEvent(h.JWPLAYER_AD_CLICK, y());
            var c = a.jwcast && a.jwcast.player.id;
            c || b.clickthrough && a.open(b.clickthrough)
        }

        function ba() {
            var a = F(sa);
            a.tracker.skip(), k.dispatchEvent(h.JWPLAYER_AD_SKIPPED, y())
        }

        function ca(a) {
            var b = a.message || "Error Playing Ad Tag", c = a.code || 400;
            ha && g.isFunction(ha.off) && ha.off(), G(b, c)
        }

        function da() {
            var a = "Unable to fetch NonLinear resource", b = 502;
            G(a, b)
        }

        function ea(a) {
            var b = F(sa), c = b.tracker;
            a.expanded ? c.expand() : c.collapse()
        }

        function fa(a) {
            var b = q(), c = {
                d: n.domain,
                c: "vast",
                m: b,
                a: n.account,
                co: a.tracker.hasComp,
                p: na._position,
                ad: a.adsystem,
                type: a.tracker.linear,
                ph: n.hosting,
                ed: n.edition,
                n: Math.random().toFixed(16).substr(2, 16)
            }, d = n.trackingbase, e = "?";
            for (var f in c)d += e + f + "=" + encodeURIComponent(c[f]), e = "&";
            return d
        }

        var ga, ha, ia, ja, ka, la, ma = this, na = j.scheduledAd(), oa = j.adBuffet(), pa = j.adPod(), qa = oa.length ? oa[0] : null, ra = 0, sa = 0;
        f.extend(ma, k.Events), this.init = function (a) {
            if (ma.init = function () {
                    throw"vast.adplayer can only be initialized once"
                }, qa && x(qa), pa)for (var b = 0; b < pa.length; b++)x(pa[b]);
            var c = qa || pa[0], d = c.media[0];
            ga = ("" + d.adType).toLowerCase();
            var e;
            if ("vpaid" === ga) {
                if (e = A(a), !e)return !1
            } else if ("static" === ga)ja = "static", z(), v(a); else if (ja = "video", e = B(a), v(a), !e)return !1;
            return k.onFullscreen(H), k.onVolume(I), k.onMute(J), !0
        }, ma.getState = function () {
            return ia ? ia.getState() : ha ? ha.getState() : ""
        }, ma.clearNonlinear = function () {
            l.stop(), ha && (u(), ha && (ha.stop(), ha.destroy(), ha = null))
        }, ma.destroy = function () {
            ma.off(), w(), null !== ma && (ia && ia.destroy(), ha && (u(), ha && ha.destroy()), ma.clearNonlinear(), ma = j = k = ha = ia = n = na = oa = qa = pa = null)
        }, ma.pause = function () {
            ia ? ia.pause() : ha && ha.pause()
        }, ma.play = function () {
            ia ? ia.play() : ha && ha.play()
        }
    }
}(window), function (a) {
    function b(a, b) {
        var c = Math.pow(10, b);
        return Math.round(a * c) / c
    }

    function c(a) {
        return a._adQueue && a._waterfallIndex < a._adQueue.length
    }

    var d = a.vast, e = a.utils, f = a.events, g = a._, h = "-1";
    d.adcontroller = function (i, j, k) {
        function l(a) {
            if (a) {
                aa = !0;
                var b = function (b) {
                    aa = !1;
                    try {
                        d.vmapparser(b.responseXML, U)
                    } catch (c) {
                        return void R({id: h, message: "Error parsing VMAP", code: 1002, vmap: a})
                    }
                    if (_ && (T(U), ga)) {
                        var e = o({type: f.JWPLAYER_MEDIA_BEFOREPLAY});
                        e === !0 && P()
                    }
                }, c = function (b) {
                    aa = !1, e.log(b), R({
                        id: h,
                        message: "Error Loading VMAP Schedule",
                        code: "Timeout" === b ? 1007 : 1008,
                        vmap: a
                    })
                };
                e.ajax(a, b, c, {requireValidXML: !0, timeout: 5e3})
            }
        }

        function m(a) {
            ja = !!a.active
        }

        function n(a) {
            Z.trigger(f.state.PLAYING, a)
        }

        function o(a) {
            if (!ja) {
                var b = U.getPreRoll();
                return aa ? void w() : da || !b ? !0 : (W = r(b), void s(b, a))
            }
        }

        function p(a) {
            if (!ja) {
                var b = U.getNextMidRoll(a.position, a.duration);
                b && (W = r(b), t(b, a))
            }
        }

        function q(a) {
            if (!ja) {
                var b = U.getPostRoll();
                !ea && b && (W = r(b), u(b, a))
            }
        }

        function r(a) {
            return a._trackers ? new d.tracker(a._trackers, oa) : null
        }

        function s(a, b) {
            a._position = "pre", da = !0, a._id = A(12), v(a, b)
        }

        function t(a, b) {
            a._position = "mid", a._id = A(12), v(a, b)
        }

        function u(a, b) {
            a._position = "post", ea = !0, i.detachMedia(), a._id = A(12), v(a, b)
        }

        function v(a, b) {
            if (ca = a._position, clearTimeout(ma), ma = -1, "nonlinear" !== a._type && !ga) {
                var c = e.isMobile() && ("pre" === ca || i.isBeforePlay() || 0 === i.getPosition());
                c ? (b && b.type === f.JWPLAYER_MEDIA_BEFOREPLAY || i.getState() === f.state.IDLE) && (Z.off(f.state.PLAYING, w), Z.once(f.state.PLAYING, w)) : w()
            }
            a._adXML ? (a._currentTag = a._currentTag || "clientloadedtag_" + fa++, z(a)) : a._adQueue ? y(a) : (e.log("scheduled ad has no url or xml", a), P())
        }

        function w() {
            ga = i.createInstream().init(), Z.trigger("blockingStarted")
        }

        function x(a) {
            var b = i.getPlaylistItem(a.index);
            U = g.isObject(b) && b.adschedule ? d.configparser.getSchedule(b) : V;
            var c;
            for (c = ha.length; c--;) {
                var e = ha[c];
                ha.length--, e.destroy()
            }
            K(), O(), ea = !1, da = !1, T(U), U.reset()
        }

        function y(a) {
            ka = a;
            var b = a._waterfallIndex || 0, c = a._adQueue[b], d = F(c);
            a._waterfallIndex = b + 1, a._currentTag = d, g.isFunction(oa) && oa({
                type: "tagReplacement",
                data: {actualTag: d, originalTag: c}
            }), B(a, d), D(a).load(d)
        }

        function z(a) {
            a._currentTag = a._currentTag || a._adXML.toString(), B(a, a._currentTag), D(a).parseXmlString(a._adXML)
        }

        function A(a) {
            return new Array(a + 1).join((Math.random().toString(36) + "00000000000000000").slice(2, 18)).slice(0, a)
        }

        function B(a, b) {
            i.dispatchEvent("adRequest", C(a, b))
        }

        function C(a, b) {
            var c = a._adQueue || {}, d = {}, e = a.adbreakid, f = a._adTagQueue, h = a.skipoffset;
            if (e && (d.adbreakid = e), f) {
                var i = a._waterfallIndex - 1;
                i = 0 > i ? 0 : i, d.adtagid = f[i]
            }
            return g.isUndefined(h) || (d.skipoffset = h), g.extend(d, {
                id: a._id,
                tag: b || a._currentTag,
                client: "vast",
                adposition: a._position,
                offset: a._offSet,
                witem: a._waterfallIndex || 1,
                wcount: c.length || 1
            })
        }

        function D(a) {
            var b = new d.vloader(a, i);
            return b.on(f.COMPLETE, H), b.on(f.ERROR, Q), ha.push(b), b
        }

        function E(a) {
            for (var b = ha.length; b--;)ha[b] === a && (ha.splice(b, 1), a.destroy())
        }

        function F(a) {
            if (!a)return a;
            var c = i.getPlaylistItem(), d = window.location.href;
            a = G(a, "__random-number__", Math.random() * Math.pow(10, 18)), a = G(a, "__timestamp__", (new Date).getTime()), a = G(a, "__page-url__", encodeURIComponent(d)), a = G(a, "__referrer__", encodeURIComponent(document.referrer)), a = G(a, "__player-height__", i.getHeight()), a = G(a, "__player-width__", i.getWidth()), a = G(a, "__item-duration__", b(i.getDuration(), 3)), a = G(a, "__domain__", encodeURIComponent(S())), a = $.companion ? G(a, "__companion-div__", $.companion.id) : G(a, "__companion-div__", "");
            for (var e = a.match(new RegExp(/__item-[a-z 0-9 A-Z]*__/g)), f = 0; e && f < e.length; f++) {
                var h = e[f], j = h.substring(7, h.length - 2);
                if (c.hasOwnProperty(j) && g.isString(c[j])) {
                    var k = c[j];
                    k.length > 1e3 && (k = k.substring(0, 1e3)), a = G(a, h, encodeURIComponent(k))
                } else a = G(a, h, "")
            }
            return a
        }

        function G(a, b, c) {
            return a.replace(b, c)
        }

        function H(a) {
            var b = a.vloader.scheduledAd();
            null === ga && "nonlinear" !== b._type ? (Z.off("blockingStarted"), Z.once("blockingStarted", function () {
                I(a)
            })) : I(a)
        }

        function I(a) {
            var b = a.vloader;
            clearTimeout(ma), ma = -1, ka.isWaterfalling || O(), E(b);
            var c = new d.adplayer(b, i, X, Y, ba, $, oa);
            c.on(f.JWPLAYER_AD_ERROR, L), c.on(f.JWPLAYER_AD_IMPRESSION, M);
            var e = c.init(ga);
            return e ? (na = ga, ga = null, Z.off("blockingStarted"), Z.off(f.state.PLAYING, w), c.on(f.JWPLAYER_AD_COMPLETE, N), void ia.push(c)) : void c.destroy()
        }

        function J() {
            O(), ea = !1, da = !1
        }

        function K() {
            for (var a = ia.length; a--;) {
                var b = ia[a];
                ia.length--, b.destroy()
            }
        }

        function L(a) {
            if (la = !1, R(a), !la && c(ka)) {
                ga = ga || na;
                var b = g.extend({}, ka);
                return b._offset = 0, b.isWaterfalling = !0, void v(b)
            }
            K(), la = !1, ma = setTimeout(function () {
                ma = -1, 0 === ha.length && ("post" === ca && i.attachMedia(), P())
            }, 0)
        }

        function M(a) {
            ka = {}, W && !W.started && W.breakStart(), i.dispatchEvent(f.JWPLAYER_AD_IMPRESSION, a)
        }

        function N() {
            W && W.breakEnd(), 0 === ha.length && "post" === ca && i.attachMedia()
        }

        function O() {
            if (ia.length) {
                var a = ia[ia.length - 1];
                a.clearNonlinear()
            }
        }

        function P() {
            ga && (ga.destroy(), ga = null, Z.off("blockingStarted"), Z.off(f.state.PLAYING, w)), na = null
        }

        function Q(a) {
            var b = a.vloader, e = b.allAds();
            if (E(b), e && e.length) {
                var h = e[0];
                if (h) {
                    var i = h.trackers;
                    if (i && i.error) {
                        var j = new d.tracker(i, oa);
                        j.error(a.code)
                    }
                }
            }
            var k = C(b.scheduledAd(), a.url);
            if (k.message = a.message, k.code = a.code, a.wrappedUrl !== a.url && (k.wrappedTag = a.wrappedUrl), la = !1, R(k), !la && c(ka)) {
                var l = g.extend({}, ka);
                return l._offset = 0, l.isWaterfalling = !0, void v(l)
            }
            Z.off(f.state.PLAYING, w), K(), la = !1, -1 === ma && (ma = setTimeout(function () {
                ma = -1, 0 === ha.length && P()
            }, 0))
        }

        function R(a) {
            e.extend(a, {client: "vast"}), W && W.error(a.code), i.dispatchEvent(f.JWPLAYER_AD_ERROR, a)
        }

        function S() {
            var a = window.location.href;
            return a = a.match(new RegExp(/^[^\/]*:\/\/\/?([^\/]*)/)), a && a.length > 1 ? a[1] : ""
        }

        function T(a) {
            var b = a.getMidRolls(), c = [];
            b.length && (e.foreach(b, function (a, b) {
                "nonlinear" !== b._type && c.push({begin: b._offSet, text: $.cuetext})
            }), i.setCues(c))
        }

        var U, V, W, X, Y, Z = this, $ = {}, _ = !1, aa = !1, ba = {}, ca = "", da = !1, ea = !1, fa = 0, ga = null, ha = [], ia = [], ja = !1, ka = {}, la = !1, ma = -1, na = null, oa = null;
        e.extend(Z, i.Events), j.debug && j.trackFn && (oa = j.trackFn), V = U = d.configparser.getSchedule(j), U.isVMAP() && l(U.getVMAP()), i.onReady(function () {
            _ = !0, X = new d.staticplayer(i, k), Y = new d.companion(oa);
            var b = window.location.href, c = new e.key(i.getConfig().key), f = c.edition();
            // ba.trackingbase = (b.match(/^https/) ? "https://s" : "http://i") + ".n.jwpltx.com/v1/adclient/ping.gif";
            ba.trackingbase = "ping.gif";

                ba.account = c.token(), ba.domain = S(), ba.edition = g.indexOf(["pro", "premium", "ads", "invalid", "enterprise"], f) + 1, ba.hosting = a.defaults && a.defaults.ph ? a.defaults.ph : 0, $ = d.configparser.getOptParams(j), i.onBeforePlay(o), i.onCast(m), i.onPlay(n), i.onTime(p), i.onBeforeComplete(q), i.onPlaylistItem(x), i.onPlaylistComplete(x), i.onComplete(J)
        }), Z.destroy = function () {
            x({index: 0})
        }, i.pauseAd = function (a) {
            if (a = g.isBoolean(a) ? a : !0, ia.length) {
                var b = ia[ia.length - 1];
                a ? b.pause() : b.play()
            }
        }, i.playAd = function (a) {
            la = !0, O();
            var b;
            b = g.isArray(a) ? a.slice(0) : [a];
            var c = {_id: A(12), _adQueue: b, _waterfallIndex: 0, _offset: 0, _position: "api"};
            v(c)
        }
    }, a().registerPlugin("vast", "7.1", d.adcontroller, "vast.swf")
}(window.jwplayer);