!function (a) {
    a.googima = {}
}(jwplayer), function (a) {
    a.googima.ParameterParser = function () {
        function a(a) {
            var d = {};
            return d.admessagestatic = a.admessagestatic || "This is an Advertisement", d.usestaticmessage = b(a.usestaticmessage, !1), d.admessagedynamic = a.admessage || "This ad will end in xx seconds.", d.admessagedynamickey = a.admessagedynamickey || "xx", d.adcounterdynamic = a.adcounterdynamic || "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__. ", d.adcountercountkey = a.adcountercountkey || "__AD_POD_CURRENT__", d.adcountertotalkey = a.adcountertotalkey || "__AD_POD_LENGTH__", d.click_tracking = b(a.click_tracking, !0), d.scaled_ads = b(a.scaled_ads, !0), d.advideoheight = b(a.advideoheight, 0), d.advideowidth = b(a.advideowidth, 0), d.invertmutebutton = b(a.invertmutebutton, !1), d.allowadskip = b(a.allowadskip, !1), d.allowadskippastseconds = b(a.allowadskippastseconds, 0), d.allowplayercontrols = b(a.allowplayercontrols, !1), d.allowvolumeslider = b(a.allowvolumeslider, !1), d.companiondiv = a.companiondiv, d.overlayslotwidth = b(a.overlayslotwidth, 0), d.overlayslotheight = b(a.overlayslotheight, 0), c(d, {
                admessagestatic: "string",
                usestaticmessage: "boolean",
                admessagedynamic: "string",
                admessagedynamickey: "string",
                adcounterdynamic: "string",
                adcountercountkey: "string",
                adcountertotalkey: "string",
                click_tracking: "boolean",
                scaled_ads: "boolean",
                advideoheight: "number",
                advideowidth: "number",
                invertmutebutton: "boolean",
                allowadskip: "boolean",
                allowadskippastseconds: "number",
                allowplayercontrols: "boolean",
                allowvolumeslider: "boolean",
                companionDiv: "string",
                overlayslotwidth: "number",
                overlayslotheight: "number"
            }), d
        }

        function b(a, b) {
            if (void 0 !== a) {
                if ("true" === a)return !0;
                if ("false" === a)return !1;
                if (!isNaN(parseInt(a, 10)))return parseInt(a, 10)
            }
            return a || b
        }

        function c(a, b) {
            for (var c in b)if (c in a && typeof a[c] !== b[c])throw"invalid parameter: " + c + " should be a " + b[c]
        }

        return {parseParams: a}
    }
}(jwplayer), function (a) {
    var b = a.utils;
    a.googima.AdControls = function (a, c, d) {
        function e() {
            b.style(a, {
                overflow: "hidden",
                width: "100%",
                height: "100%",
                visibility: "hidden"
            }), h.id = d.id + "_ad", a.appendChild(h), b.style(h, {position: "absolute", width: "100%", height: "100%"})
        }

        function f(c, d) {
            b.style(a, {height: d + "px", top: "auto", width: "100%"})
        }

        function g() {
            b.style(a, {top: "0px", left: "0px", width: "100%", height: "100%"})
        }

        var h = document.createElement("div"), i = !1;
        this.resizeNonLinear = f, this.resizeLinear = g, this.getAdDiv = function () {
            return h
        }, this.adSetup = function () {
            i = !0, b.style(a, {visibility: "visible"}, !0)
        }, this.adTakeDown = function () {
            i && (i = !1, b.style(a, {visibility: "hidden"}))
        }, this.onAdClick = function () {
        }, e()
    }
}(jwplayer), function (a) {
    var b = a.jwplayer;
    b.googima.Tracker = function () {
        var c = a.location.href, d = c.match(new RegExp(/^https?:\/\/([^\/]*)/))[1], e = new b.utils.key(b.key).token();
        // var f = "//jwpltx.com/v1/adclient/ping.gif";
        var f = "ping.gif";
        // "file:" === a.location.protocol && (f = "https:" + f);
            this.track = function (a, b, c, g) {
            var h, i = f, j = "?", k = {
                d: d,
                c: "googima",
                m: "html5",
                a: e,
                s: "dart",
                n: Math.random().toFixed(16).substr(2, 16),
                co: a ? "yes" : "no",
                l: b ? "linear" : "nonlinear"
            };
            h = c ? "api" : 0 === g ? "pre" : -1 === g ? "post" : "mid", k.p = h;
            for (var l in k)i += j + l + "=" + encodeURIComponent(k[l]), j = "&";
            setTimeout(function () {
                var a = new Image;
                a.src = i
            }, 0)
        }
    }
}(window), function (a) {
    var b = a.jwplayer, c = b.utils;
    b.googima.TagReplace = function (d, e) {
        function f(f) {
            if (!f)return f;
            var i = d.getPlaylistItem(), j = c.bounds(d.container);
            f = f.replace("__random-number__", Math.random() * Math.pow(10, 18)).replace("__timestamp__", (new Date).getTime()).replace("__page-url__", encodeURIComponent(a.location.href)).replace("__referrer__", encodeURIComponent(document.referrer)).replace("__player-height__", j.height).replace("__player-width__", j.width).replace("__item-duration__", h(d.getDuration(), 3)).replace("__domain__", encodeURIComponent(g())), f = void 0 !== e.companiondiv ? f.replace("__companion-div__", e.companiondiv.id) : f.replace("__companion-div__", "");
            for (var k = f.match(new RegExp(/__item-[a-z 0-9 A-Z]*__/g)), l = 0; k && l < k.length; l++) {
                var m = k[l], n = m.substring(7, m.length - 2);
                if (i.hasOwnProperty(n) && b._.isString(i[n])) {
                    var o = i[n];
                    o.length > 1e3 && (o = o.substring(0, 1e3)), f = f.replace(m, encodeURIComponent(o))
                } else f = f.replace(m, "")
            }
            return f
        }

        function g() {
            var b = a.location.href.match(new RegExp(/^[^\/]*:\/\/\/?([^\/]*)/));
            return b && b.length > 1 ? b[1] : ""
        }

        function h(a, b) {
            var c = Math.pow(10, b);
            return Math.round(a * c) / c
        }

        return {doReplacement: f}
    }
}(window), function (a) {
    var b = a.jwplayer, c = b.utils, d = b._;
    b.googima.VMAPConverter = function (a) {
        function b(a) {
            if ("start" === a || "0%" === a)return "pre";
            if ("end" === a || "100%" === a)return "post";
            if ("pre" === a || "post" === a || d.indexOf(a, "%") > -1)return a;
            var b = c.seconds(a);
            return d.isNumber(b) ? b : !1
        }

        function e(a) {
            var b = parseInt(a), c = Math.floor(b) % 1e3, d = Math.floor(b / 1e3) % 60, e = Math.floor(b / 6e4) % 60, f = Math.floor(b / 36e5) % 24;
            return f = 10 > f ? "0" + f : f, e = 10 > e ? "0" + e : e, d = 10 > d ? "0" + d : d, c = ("000" + c).slice(-3), f + ":" + e + ":" + d + "." + c
        }

        function f(a) {
            return a = b(a), a || (a = "pre"), d.isNumber(a) && (a = e(1e3 * a)), a
        }

        function g(a) {
            var b = {};
            return c.foreach(a, function (a, c) {
                var d = {}, e = c;
                c.ad && (e = c.ad), d.offset = f(e.offset || e.position || c.offset || ""), d.tag = e.tag;
                var g = e.type || c.type;
                "nonlinear" !== g && (g = "linear"), d.type = g, b[a] = d
            }), b
        }

        this.getAdsResponse = function (b) {
            var d = '<vmap:AdBreak breakType="_type_" breakId="_adbreakname_" timeOffset="_offset_"><vmap:AdSource allowMultipleAds="true" followRedirects="true" id="_adbreakname_-ad-1"><vmap:AdTagURI><![CDATA[_url_]]></vmap:AdTagURI></vmap:AdSource></vmap:AdBreak>', e = [];
            return c.foreach(g(b), function (b, c) {
                e.push(d.replace(/_type_/g, c.type).replace(/_adbreakname_/g, b).replace(/_offset_/g, c.offset.replace("pre", "start").replace("post", "end")).replace(/_url_/g, a(c.tag)))
            }), '<vmap:VMAP xmlns:vmap="http://www.iab.net/videosuite/vmap" version="1.0">' + e.join("") + "</vmap:VMAP>"
        }, this.normalize = g, this.getOffset = f
    }
}(window), function (a) {
    function b() {
        var a = ["//", "imasdk.googleapis.com/js/sdkloader/ima3.js"];
        return "file:" === document.location.protocol && a.unshift("https:"), a.join("")
    }

    function c(a) {
        switch (a) {
            case"disabled":
                return google.ima.ImaSdkSettings.VpaidMode.DISABLED;
            case"enabled":
                return google.ima.ImaSdkSettings.VpaidMode.ENABLED;
            case"insecure":
            default:
                return google.ima.ImaSdkSettings.VpaidMode.INSECURE
        }
    }

    var d = "googima", e = a.utils, f = a.events, g = f.state, h = a._, i = new e.scriptloader(b()), j = function (b, j, k) {
        function l() {
            var a = b.getProvider();
            return 0 === (a.name || "").indexOf("flash")
        }

        function m() {
            var a = b.getContainer();
            return a.querySelector("object")
        }

        function n() {
            Ka || (Ja = null, Ka = !0, Pa = !1, Aa = {
                currentTime: 0,
                duration: 0
            }, b.off("time", E).off("resize", B).off("fullscreen", B), o() || (b.on("time", E, this).on("resize", B, this).on("fullscreen", B, this), Ha && !Pa && Ha.contentComplete(), t(u)))
        }

        function o() {
            return l() ? (m().off(null, null, this).on("googima:companions", ia, this).on("googima:event", r, this).on("googima:pause", p, this).on("googima:resume", q, this), !0) : !1
        }

        function p() {
            N(), clearTimeout(Fa)
        }

        function q() {
            y();
            var a = b.getState();
            "complete" !== a && "idle" !== a && b.attachMedia()
        }

        function r(a) {
            if (a.position && fa(a.position, a.duration, a.sequence, a.podcount), "adLinearChanged" === a.type) {
                var c = -1 === a.duration && "linear" === a.linear;
                e.toggleClass(b.getContainer(), "jw-flag-ads-vpaid", "application/x-shockwave-flash" === a.creativetype || c)
            }
            b.dispatchEvent(a.type, a)
        }

        function s(a, c) {
            b.dispatchEvent(a, c)
        }

        function t(a) {
            var b = window.google;
            return b && b.ima ? Sa ? void a() : (L(), void h.defer(a)) : (L(), void x(a))
        }

        function u() {
            Ja = R(ra, j)
        }

        function v() {
            ta = new google.ima.AdsRenderingSettings, ta.uiElements = null, ta.autoAlign = !0, ta.loadVideoTimeout = Ea, ta.useStyledNonLinearAds = !0;
            var d = b.getContainer().querySelector("video");
            ua = new google.ima.AdDisplayContainer(wa.getAdDiv(), d), ua.initialize(), Ha = new google.ima.AdsLoader(ua), Ha.getSettings().setPlayerType(pa), Ha.getSettings().setPlayerVersion(a.version);
            var e = c(j.vpaidmode);
            Ha.getSettings().setVpaidMode(e), Ha.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, ba, !1), Ha.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, F, !1)
        }

        function w() {
            Na = {}, Ka = !1, Ja = null, x(null), T()
        }

        function x(a) {
            Qa && i.removeEventListener(f.COMPLETE, Qa), a && i.addEventListener(f.COMPLETE, a), Qa = a
        }

        function y() {
            clearTimeout(Fa), e.removeClass(b.getContainer(), "jw-flag-ads-vpaid " + Ta);
            var a = b.getContainer().querySelector("video");
            if (Ra && (a && a.removeEventListener(Ca, Ra), Ra = null), Ba) {
                if (a) {
                    var c = a.src + "?";
                    a.src && (a.src = c)
                }
                Ba.destroy(), Ba = null, wa.adTakeDown()
            }
        }

        function z() {
            return l() ? void b.detachMedia() : (Pa = !0, Ia && Ia.getCuePoints().indexOf(-1) > -1 && L(), Aa.currentTime = Aa.duration, void(Ha && Ha.contentComplete()))
        }

        function A(a) {
            Ga = !!a.active, a.active && w()
        }

        function B() {
            l() || C(Ma, Ia)
        }

        function C(a, c) {
            if (c) {
                var d = a && !a.isLinear(), e = b.getSafeRegion(d);
                if (d) {
                    var f = a.getHeight();
                    f = b.getFullscreen() ? e.height / 2 : Math.max(100, f + 10), c.resize(e.width, f, aa()), wa.resizeNonLinear(e, f)
                } else c.resize(e.width, e.height, aa()), wa.resizeLinear()
            }
        }

        function D() {
            return b.getMute() ? 0 : b.getVolume() / 100
        }

        function E(a) {
            Aa.currentTime = a.position, a.duration >= a.position ? Aa.duration = a.duration : Aa.duration = Number.POSITIVE_INFINITY
        }

        function F(c) {
            clearTimeout(Fa), Ia = c.getAdsManager(Aa, ta), Ja = c.getUserRequestContext(), Ia.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, O), Ia.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, da), Ia.addEventListener(google.ima.AdEvent.Type.LOADED, I), Ia.addEventListener(google.ima.AdEvent.Type.LOG, J), Ia.addEventListener(google.ima.AdEvent.Type.STARTED, _), Ia.addEventListener(google.ima.AdEvent.Type.COMPLETE, P), Ia.addEventListener(google.ima.AdEvent.Type.CLICK, ga), Ia.addEventListener(google.ima.AdEvent.Type.PAUSED, ma), Ia.addEventListener(google.ima.AdEvent.Type.RESUMED, la), Ia.addEventListener(google.ima.AdEvent.Type.SKIPPED, Y), Ia.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, G), Ia.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, K), Ia.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, H);
            var d = b.getSafeRegion(!1);
            try {
                Ia.init(d.width, d.height, aa()), Ia.start()
            } catch (e) {
                var f = U(Ja);
                ca(e, f)
            }
            if (j.debug && "function" == typeof a.googima.onAdsManagerCreated)try {
                a.googima.onAdsManagerCreated.call(this, Ia)
            } catch (g) {
                console.error("googima.onAdsManagerCreated:", g.message)
            }
        }

        function G() {
            Oa = !0
        }

        function H(a) {
            var b = a.getError(), c = U(Ja);
            ca(b, c)
        }

        function I() {
            clearTimeout(Fa), Ia.setVolume(D())
        }

        function J(a) {
            var b = a.getAdData();
            if (b && b.adError) {
                var c = U(Ja);
                ca(b.adError, c)
            }
        }

        function K() {
            T()
        }

        function L() {
            if (clearTimeout(Fa), !Ba) {
                var a = b.getContainer().querySelector("video");
                a && e.isIOS() && (a.controls = !1);
                var c = a && e.isMobile() && !a.__jwMobileCanPlay && (b.isBeforePlay() || 0 === a.currentTime);
                c ? (Ra = M(), a.addEventListener(Ca, Ra)) : N()
            }
        }

        function M() {
            var a = function (b) {
                b.currentTarget.removeEventListener(Ca, a), b.currentTarget.__jwMobileCanPlay = !0, Ra = null, N()
            };
            return a
        }

        function N() {
            Ba || (clearTimeout(Fa), Fa = h.delay(y, Da), i.removeEventListener(f.ERROR, y), i.addEventListener(f.ERROR, y), e.addClass(b.getContainer(), Ta), Ba = b.createInstream().init(), Ba.setText("Loading"), Ba.applyProviderListeners(Za))
        }

        function O() {
            L()
        }

        function P(a) {
            var b = a.getAd(), c = X(b);
            S(), clearInterval(La), Oa || s(f.JWPLAYER_AD_COMPLETE, c)
        }

        function Q(a) {
            return a.tag || a.schedule || a.ad
        }

        function R(a, c) {
            Ha || v();
            var d = {requestType: a}, e = Q(c);
            if (!e)return y(), d;
            L();
            var f = new google.ima.AdsRequest, g = b.getSafeRegion(!1);
            f.linearAdSlotWidth = g.width, f.linearAdSlotHeight = g.height;
            var h = b.getSafeRegion(!0);
            return f.nonLinearAdSlotWidth = h.width, f.nonLinearAdSlotHeight = h.height, "string" == typeof e ? f.adTagUrl = d.adTagUrl = ya.doReplacement(e) : f.adsResponse = d.adsResponse = za.getAdsResponse(e), Ha.requestAds(f, d), d
        }

        function S() {
            Ma = null, wa.adTakeDown()
        }

        function T() {
            if (clearInterval(La), Ia && (Ia.stop(), Ia.destroy(), Ia = null), S(), y(), l()) {
                var a = m();
                a && a.__ready && a.triggerFlash("googima:destroy")
            }
        }

        function U(a) {
            return a ? a.adTagUrl || a.adsResponse || "" : (console.error("invalid request context", a), "")
        }

        function V(a) {
            if (a) {
                var b = a.getAdId(), c = a.getAdPodInfo();
                if (c && (b = "" + c.getTimeOffset()), b)return void 0 === Na[b] && (Na[b] = W(12)), Na[b]
            }
            return sa
        }

        function W(a) {
            return new Array(a + 1).join((Math.random().toString(36) + "00000000000000000").slice(2, 18)).slice(0, a)
        }

        function X(a) {
            var b = {
                id: V(a),
                client: d,
                tag: U(Ja),
                adtitle: a.getTitle(),
                adsystem: a.getAdSystem(),
                creativetype: a.getContentType(),
                linear: a.isLinear() ? "linear" : "nonlinear"
            }, c = a.getAdPodInfo();
            if (c) {
                var e = c.getTotalAds();
                e > 1 && (b.sequence = c.getAdPosition(), b.podcount = e);
                var f = c.getTimeOffset(), g = "mid";
                0 === f ? g = "pre" : -1 === f && (g = "post"), b.adposition = g
            }
            return b
        }

        function Y(a) {
            Oa = !0;
            var b = X(a.getAd());
            s(f.JWPLAYER_AD_SKIPPED, b)
        }

        function Z(a) {
            var b = X(a);
            s(f.JWPLAYER_AD_IMPRESSION, b)
        }

        function $(a, b, c, d) {
            if (a.isLinear()) {
                var e = X(a);
                e.oldstate = d, e.newstate = c, s(b, e), Za.trigger(f.JWPLAYER_PLAYER_STATE, {newstate: c, oldstate: d})
            }
        }

        function _(a) {
            var c = a.getAd(), d = a.target, h = c.isLinear() && -1 === c.getDuration();
            h && N(), e.toggleClass(b.getContainer(), "jw-flag-ads-vpaid", h), clearTimeout(Fa), Ma = c, Oa = !1, Z(c), $(c, f.JWPLAYER_AD_PLAY, g.PLAYING, g.BUFFERING);
            var i = c.isLinear();
            i || y(), wa.adSetup(i, b.getMute()), C(c, d);
            var j = ha(c);
            xa.track(j, i, Ja.requestType === qa, c.getAdPodInfo().getTimeOffset()), ea(c, d)
        }

        function aa() {
            return b.getFullscreen() ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL
        }

        function ba(a) {
            clearTimeout(Fa), Ia && (Ia.destroy(), Ia = null);
            var b = a.getError(), c = U(a.getUserRequestContext());
            ca(b, c)
        }

        function ca(a, b) {
            Fa = h.defer(y);
            var c = a.getMessage && a.getMessage() || a.message, e = a.getVastErrorCode && a.getVastErrorCode() || 900;
            s(f.JWPLAYER_AD_ERROR, {id: sa, client: d, message: "Ad Error: " + c, code: e, tag: b})
        }

        function da() {
            Ma && Ma.isLinear() && S(), y()
        }

        function ea(a, b) {
            clearInterval(La);
            var c = 250, d = a.getAdId(), e = a.getAdPodInfo(), g = -1, h = function () {
                if (!Ma || Ma.getAdId() !== d)return void clearInterval(La);
                var c = b.getRemainingTime();
                if (c && c > 0 && g !== c) {
                    g = c;
                    var h = a.getDuration(), i = h - c;
                    if (h > 0) {
                        var j = X(a);
                        j.position = i, j.duration = h, s(f.JWPLAYER_AD_TIME, j)
                    }
                    fa(i, h, e.getAdPosition(), e.getTotalAds())
                }
            };
            La = setInterval(h, c)
        }

        function fa(a, b, c, d) {
            if (Ba) {
                var e, f = Ua.replace(Wa, Math.round(b - a));
                d > 1 && (e = Va.replace(Xa, c), f = e.replace(Ya, d) + "  " + f), Ba.setText(f)
            }
        }

        function ga(a) {
            var b = a.target, c = X(a.getAd());
            s(f.JWPLAYER_AD_CLICK, c), b.pause(), wa.onAdClick()
        }

        function ha(a) {
            var b = new google.ima.CompanionAdSelectionSettings;
            b.sizeCriteria = google.ima.CompanionAdSelectionSettings.SizeCriteria.IGNORE;
            var c = va.companiondiv || {width: 300, height: 250}, d = ka(ja(a, c.width, c.height, b)), e = d.length;
            if (e) {
                var g = X(a);
                g.companions = d, s(f.JWPLAYER_AD_COMPANIONS, g)
            }
            if (va.companiondiv) {
                var h = ja(a, va.companiondiv.width, va.companiondiv.height);
                e = Math.max(e, h.length), ia(h)
            }
            return e > 0
        }

        function ia(a) {
            if (a && a.length) {
                var b = document.getElementById(va.companiondiv.id);
                if (b) {
                    var c = a[0];
                    c && (h.isFunction(c.getContent) ? b.innerHTML = c.getContent() : b.innerHTML = c.resource || c.content)
                }
            }
        }

        function ja(a, b, c, d) {
            try {
                return a.getCompanionAds(b, c, d)
            } catch (e) {
            }
            return []
        }

        function ka(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                b.push({
                    width: d.getWidth(),
                    height: d.getHeight(),
                    type: "html",
                    resource: d.getContent(),
                    click: null
                })
            }
            return b
        }

        function la(a) {
            $(a.getAd(), f.JWPLAYER_AD_PLAY, g.PLAYING, g.PAUSED)
        }

        function ma(a) {
            $(a.getAd(), f.JWPLAYER_AD_PAUSE, g.PAUSED, g.PLAYING)
        }

        function na(a) {
            if (l()) {
                a = h.isBoolean(a) ? a : !0;
                var b = m();
                return void b.triggerFlash("googima:pause", a)
            }
            Ia && (a ? Ia.pause() : Ia.resume())
        }

        function oa(b) {
            Ja = null, x(null), clearInterval(La), Ia && (Ia.stop(), Ia.destroy(), Ia = null), S(), Na = {}, Ka = !0;
            var c = {};
            if (a._.isArray(b) ? c.tag = b[0] : c.tag = b, o()) {
                var d = m();
                return void d.triggerFlash("googima:play", c)
            }
            t(function () {
                Ja = R(qa, c)
            })
        }

        var pa = "jwplayer", qa = "TYPE_API", ra = "TYPE_SCHEDULE", sa = "-1";
        b.pauseAd = na, b.playAd = oa, this.destroy = T, this.detachMedia = this.attachMedia = function () {
        }, this.mute = function (a) {
            Ia ? Ia.setVolume(a ? 0 : b.getVolume() / 100) : l() && m().triggerFlash("googima:mute", a)
        }, this.volume = function (a) {
            Ia ? Ia.setVolume(a / 100) : l() && m().triggerFlash("googima:volume", a)
        }, b.utils.extend(this, b.Events);
        var ta, ua, va = a.googima.ParameterParser().parseParams(j), wa = new a.googima.AdControls(k, va, b), xa = new a.googima.Tracker, ya = new a.googima.TagReplace(b, va), za = new a.googima.VMAPConverter(ya.doReplacement), Aa = {
            currentTime: 0,
            duration: 0
        }, Ba = null, Ca = "play", Da = 5e3, Ea = 8e3, Fa = -1, Ga = !1, Ha = null, Ia = null, Ja = null, Ka = !1, La = -1, Ma = null, Na = {}, Oa = !1, Pa = !0, Qa = null, Ra = null, Sa = !1, Ta = "jw-flag-ads-googleima", Ua = va.admessagedynamic || "", Va = va.adcounterdynamic || "", Wa = new RegExp(va.admessagedynamickey, "g"), Xa = new RegExp(va.adcountercountkey, "g"), Ya = new RegExp(va.adcountertotalkey, "g"), Za = this;
        b.once("ready", function () {
            Sa = e.isMobile(), Sa || h.defer(function () {
                Sa = !0
            }), b.on("playlistItem", w, this).on("playlistComplete", w, this).on("cast", A, this).on("beforePlay", n, this).on("beforeComplete", z, this)
        }, this)
    };
    !function (a) {
        if (!a || !a.ima) {
            var c = 5e3, d = h.delay(function () {
                i.sendEvent(f.ERROR, {message: "Loading Google IMA SDK Timed Out " + i.getStatus()})
            }, c);
            i.addEventListener(f.COMPLETE, function () {
                clearTimeout(d)
            }), i.addEventListener(f.ERROR, function (a) {
                e.log("Error Loading Google IMA SDK", b(), a)
            }), i.load()
        }
    }(window.google), a.plugins.registerPlugin(d, "7.1", j, "googima.swf")
}(window.jwplayer);