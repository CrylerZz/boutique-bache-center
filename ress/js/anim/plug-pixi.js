/*!
 * PixiPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t, r) {
    "object" == typeof exports && "undefined" != typeof module ? r(exports) : "function" == typeof define && define.amd ? define(["exports"], r) : r((t = t || self).window = t.window || {})
}(this, function(r) {
    "use strict";
    function k() {
        return "undefined" != typeof window
    }
    function l() {
        return o || k() && (o = window.gsap) && o.registerPlugin && o
    }
    function m(t) {
        return "function" == typeof t
    }
    function n(t) {
        return console.warn(t)
    }
    function s(t) {
        return m(h[t]) ? h[t] : h.filters[t]
    }
    function t(t, r) {
        var i, o, e = [], n = 0, s = 0;
        for (i = 0; i < 4; i++) {
            for (o = 0; o < 5; o++)
                s = 4 === o ? t[n + 4] : 0,
                    e[n + o] = t[n] * r[o] + t[n + 1] * r[o + 5] + t[n + 2] * r[o + 10] + t[n + 3] * r[o + 15] + s;
            n += 5
        }
        return e
    }
    function u(r, i) {
        var o = 1 - i
            , e = o * b
            , n = o * I
            , s = o * M;
        return t([e + i, n, s, 0, 0, e, n + i, s, 0, 0, e, n, s + i, 0, 0, 0, 0, 0, 1, 0], r)
    }
    function v(r, i, o) {
        var e = a(i)
            , n = e[0] / 255
            , s = e[1] / 255
            , l = e[2] / 255
            , u = 1 - o;
        return t([u + o * n * b, o * n * I, o * n * M, 0, 0, o * s * b, u + o * s * I, o * s * M, 0, 0, o * l * b, o * l * I, u + o * l * M, 0, 0, 0, 0, 0, 1, 0], r)
    }
    function w(r, i) {
        i *= Math.PI / 180;
        var o = Math.cos(i)
            , e = Math.sin(i);
        return t([b + o * (1 - b) + e * -b, I + o * -I + e * -I, M + o * -M + e * (1 - M), 0, 0, b + o * -b + .143 * e, I + o * (1 - I) + .14 * e, M + o * -M + -.283 * e, 0, 0, b + o * -b + e * -(1 - b), I + o * -I + e * I, M + o * (1 - M) + e * M, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], r)
    }
    function x(r, i) {
        return t([i, 0, 0, 0, .5 * (1 - i), 0, i, 0, 0, .5 * (1 - i), 0, 0, i, 0, .5 * (1 - i), 0, 0, 0, 1, 0], r)
    }
    function y(t, r) {
        var i, o = s(r), e = t.filters || [], l = e.length;
        for (o || n(r + " not found. PixiPlugin.registerPIXI(PIXI)"); -1 < --l; )
            if (e[l]instanceof o)
                return e[l];
        return i = new o,
        "BlurFilter" === r && (i.blur = 0),
            e.push(i),
            t.filters = e,
            i
    }
    function z(t, r, i, o) {
        r.add(i, t, i[t], o[t]),
            r._props.push(t)
    }
    function A(t, r) {
        var i = new (s("ColorMatrixFilter"));
        return i.matrix = r,
            i.brightness(t, !0),
            i.matrix
    }
    function D(t, r, i) {
        var o, e, n, s = y(t, "ColorMatrixFilter"), l = t._gsColorMatrixFilter = t._gsColorMatrixFilter || function _copy(t) {
            var r, i = {};
            for (r in t)
                i[r] = t[r];
            return i
        }(_), a = r.combineCMF && !("colorMatrixFilter"in r && !r.colorMatrixFilter);
        n = s.matrix,
        r.resolution && (s.resolution = r.resolution),
            r.matrix && r.matrix.length === n.length ? (e = r.matrix,
            1 !== l.contrast && z("contrast", i, l, _),
            l.hue && z("hue", i, l, _),
            1 !== l.brightness && z("brightness", i, l, _),
            l.colorizeAmount && (z("colorize", i, l, _),
                z("colorizeAmount", i, l, _)),
            1 !== l.saturation && z("saturation", i, l, _)) : (e = g.slice(),
                null != r.contrast ? (e = x(e, +r.contrast),
                    z("contrast", i, l, r)) : 1 !== l.contrast && (a ? e = x(e, l.contrast) : z("contrast", i, l, _)),
                null != r.hue ? (e = w(e, +r.hue),
                    z("hue", i, l, r)) : l.hue && (a ? e = w(e, l.hue) : z("hue", i, l, _)),
                null != r.brightness ? (e = A(+r.brightness, e),
                    z("brightness", i, l, r)) : 1 !== l.brightness && (a ? e = A(l.brightness, e) : z("brightness", i, l, _)),
                null != r.colorize ? (r.colorizeAmount = "colorizeAmount"in r ? +r.colorizeAmount : 1,
                    e = v(e, r.colorize, r.colorizeAmount),
                    z("colorize", i, l, r),
                    z("colorizeAmount", i, l, r)) : l.colorizeAmount && (a ? e = v(e, l.colorize, l.colorizeAmount) : (z("colorize", i, l, _),
                    z("colorizeAmount", i, l, _))),
                null != r.saturation ? (e = u(e, +r.saturation),
                    z("saturation", i, l, r)) : 1 !== l.saturation && (a ? e = u(e, l.saturation) : z("saturation", i, l, _))),
            o = e.length;
        for (; -1 < --o; )
            e[o] !== n[o] && i.add(n, o, n[o], e[o], "colorMatrixFilter");
        i._props.push("colorMatrixFilter")
    }
    function E(t, r) {
        var i = r.t
            , o = r.p
            , e = r.color;
        (0,
            r.set)(i, o, e[0] << 16 | e[1] << 8 | e[2])
    }
    function F(t, r) {
        var i = r.g;
        i && (i.dirty++,
            i.clearDirty++)
    }
    function G(t, r) {
        r.t.visible = !!r.t.alpha
    }
    function H(t, r, i, o) {
        var e = t[r]
            , n = a(m(e) ? t[r.indexOf("set") || !m(t["get" + r.substr(3)]) ? r : "get" + r.substr(3)]() : e)
            , s = a(i);
        o._pt = new d(o._pt,t,r,0,0,E,{
            t: t,
            p: r,
            color: n,
            set: c(t, r)
        }),
            o.add(n, 0, n[0], s[0]),
            o.add(n, 1, n[1], s[1]),
            o.add(n, 2, n[2], s[2])
    }
    function N(t) {
        return "string" == typeof t
    }
    function O(t) {
        return N(t) && "=" === t.charAt(1) ? t.substr(0, 2) + parseFloat(t.substr(2)) * j : t * j
    }
    function P(t, r) {
        return r.set(r.t, r.p, 1 === t ? r.e : Math.round(1e5 * (r.s + r.c * t)) / 1e5, r)
    }
    function Q(t, r, i, o, e, n) {
        var s, l, u = 360 * (n ? j : 1), a = N(e), c = a && "=" === e.charAt(1) ? +(e.charAt(0) + "1") : 0, f = parseFloat(c ? e.substr(2) : e) * (n ? j : 1), h = c ? f * c : f - o, p = o + h;
        return a && ("short" === (s = e.split("_")[1]) && (h %= u) !== h % (u / 2) && (h += h < 0 ? u : -u),
            "cw" === s && h < 0 ? h = (h + 1e10 * u) % u - ~~(h / u) * u : "ccw" === s && 0 < h && (h = (h - 1e10 * u) % u - ~~(h / u) * u)),
            t._pt = l = new d(t._pt,r,i,o,h,P),
            l.e = p,
            l
    }
    function R() {
        i || (o = l(),
                h = i = h || k() && window.PIXI,
                p = h && h.VERSION && "4" === h.VERSION.charAt(0),
                a = function _splitColor(t) {
                    return o.utils.splitColor("0x" === (t + "").substr(0, 2) ? "#" + t.substr(2) : t)
                }
        )
    }
    var o, a, i, h, d, c, p, e, f, g = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], b = .212671, I = .71516, M = .072169, _ = {
        contrast: 1,
        saturation: 1,
        colorizeAmount: 0,
        colorize: "rgb(255,255,255)",
        hue: 0,
        brightness: 1
    }, C = {
        tint: 1,
        lineColor: 1,
        fillColor: 1
    }, X = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","), S = {
        x: "position",
        y: "position",
        tileX: "tilePosition",
        tileY: "tilePosition"
    }, Y = {
        colorMatrixFilter: 1,
        saturation: 1,
        contrast: 1,
        hue: 1,
        colorize: 1,
        colorizeAmount: 1,
        brightness: 1,
        combineCMF: 1
    }, j = Math.PI / 180;
    for (e = 0; e < X.length; e++)
        f = X[e],
            S[f + "X"] = f,
            S[f + "Y"] = f;
    var B = {
        version: "3.12.5",
        name: "pixi",
        register: function register(t, r, i) {
            o = t,
                d = i,
                c = r.getSetter,
                R()
        },
        headless: !0,
        registerPIXI: function registerPIXI(t) {
            h = t
        },
        init: function init(t, r) {
            if (h || R(),
                !h)
                return n("PIXI was not found. PixiPlugin.registerPIXI(PIXI);"),
                    !1;
            var i, o, e, s, l, u, a, c, f;
            for (u in r) {
                if (i = S[u],
                    e = r[u],
                    i)
                    o = ~u.charAt(u.length - 1).toLowerCase().indexOf("x") ? "x" : "y",
                        this.add(t[i], o, t[i][o], "skew" === i ? O(e) : e, 0, 0, 0, 0, 0, 1);
                else if ("scale" === u || "anchor" === u || "pivot" === u || "tileScale" === u)
                    this.add(t[u], "x", t[u].x, e),
                        this.add(t[u], "y", t[u].y, e);
                else if ("rotation" === u || "angle" === u)
                    Q(this, t, u, t[u], e, "rotation" === u);
                else if (Y[u])
                    s || (D(t, r.colorMatrixFilter || r, this),
                        s = !0);
                else if ("blur" === u || "blurX" === u || "blurY" === u || "blurPadding" === u) {
                    if (l = y(t, "BlurFilter"),
                        this.add(l, u, l[u], e),
                    0 !== r.blurPadding)
                        for (a = r.blurPadding || 2 * Math.max(l[u], e),
                                 c = t.filters.length; -1 < --c; )
                            t.filters[c].padding = Math.max(t.filters[c].padding, a)
                } else if (C[u])
                    if (("lineColor" === u || "fillColor" === u) && t instanceof h.Graphics)
                        for (f = (t.geometry || t).graphicsData,
                                 this._pt = new d(this._pt,t,u,0,0,F,{
                                     g: t.geometry || t
                                 }),
                                 c = f.length; -1 < --c; )
                            H(p ? f[c] : f[c][u.substr(0, 4) + "Style"], p ? u : "color", e, this);
                    else
                        H(t, u, e, this);
                else
                    "autoAlpha" === u ? (this._pt = new d(this._pt,t,"visible",0,0,G),
                        this.add(t, "alpha", t.alpha, e),
                        this._props.push("alpha", "visible")) : "resolution" !== u && this.add(t, u, "get", e);
                this._props.push(u)
            }
        }
    };
    l() && o.registerPlugin(B),
        r.PixiPlugin = B,
        r.default = B;
    if (typeof (window) === "undefined" || window !== r) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    } else {
        delete r.default
    }
});
