/*!
 * EaselPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function k() {
        return "undefined" != typeof window
    }
    function l() {
        return h || k() && (h = window.gsap) && h.registerPlugin && h
    }
    function m() {
        return r || t && t.createjs || t || {}
    }
    function n(e) {
        return console.warn(e)
    }
    function o(e) {
        var t = e.getBounds && e.getBounds();
        t || (t = e.nominalBounds || {
            x: 0,
            y: 0,
            width: 100,
            height: 100
        },
        e.setBounds && e.setBounds(t.x, t.y, t.width, t.height)),
        e.cache && e.cache(t.x, t.y, t.width, t.height),
            n("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. " + e)
    }
    function p(e, t, r) {
        (b = b || m().ColorFilter) || n("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.");
        for (var i, l, s, u, a, f, c = e.filters || [], d = c.length; d--; )
            if (c[d]instanceof b) {
                l = c[d];
                break
            }
        if (l || (l = new b,
            c.push(l),
            e.filters = c),
            s = l.clone(),
        null != t.tint)
            i = h.utils.splitColor(t.tint),
                u = null != t.tintAmount ? +t.tintAmount : 1,
                s.redOffset = i[0] * u,
                s.greenOffset = i[1] * u,
                s.blueOffset = i[2] * u,
                s.redMultiplier = s.greenMultiplier = s.blueMultiplier = 1 - u;
        else
            for (a in t)
                "exposure" !== a && "brightness" !== a && (s[a] = +t[a]);
        for (null != t.exposure ? (s.redOffset = s.greenOffset = s.blueOffset = 255 * (t.exposure - 1),
            s.redMultiplier = s.greenMultiplier = s.blueMultiplier = 1) : null != t.brightness && (u = t.brightness - 1,
            s.redOffset = s.greenOffset = s.blueOffset = 0 < u ? 255 * u : 0,
            s.redMultiplier = s.greenMultiplier = s.blueMultiplier = 1 - Math.abs(u)),
                 d = 8; d--; )
            l[a = M[d]] !== s[a] && (f = r.add(l, a, l[a], s[a], 0, 0, 0, 0, 0, 1)) && (f.op = "easel_colorFilter");
        r._props.push("easel_colorFilter"),
        e.cacheID || o(e)
    }
    function u(e, t) {
        if (!(e instanceof Array && t instanceof Array))
            return t;
        var r, i, n = [], l = 0, o = 0;
        for (r = 0; r < 4; r++) {
            for (i = 0; i < 5; i++)
                o = 4 === i ? e[l + 4] : 0,
                    n[l + i] = e[l] * t[i] + e[l + 1] * t[i + 5] + e[l + 2] * t[i + 10] + e[l + 3] * t[i + 15] + o;
            l += 5
        }
        return n
    }
    function z(e, t, r) {
        (d = d || m().ColorMatrixFilter) || n("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.");
        for (var i, l, s, a, f = e.filters || [], c = f.length; -1 < --c; )
            if (f[c]instanceof d) {
                s = f[c];
                break
            }
        for (s || (s = new d(w.slice()),
            f.push(s),
            e.filters = f),
                 l = s.matrix,
                 i = w.slice(),
             null != t.colorize && (i = function _colorize(e, t, r) {
                 isNaN(r) && (r = 1);
                 var i = h.utils.splitColor(t)
                     , n = i[0] / 255
                     , l = i[1] / 255
                     , o = i[2] / 255
                     , s = 1 - r;
                 return u([s + r * n * x, r * n * y, r * n * _, 0, 0, r * l * x, s + r * l * y, r * l * _, 0, 0, r * o * x, r * o * y, s + r * o * _, 0, 0, 0, 0, 0, 1, 0], e)
             }(i, t.colorize, Number(t.colorizeAmount))),
             null != t.contrast && (i = function _setContrast(e, t) {
                 return isNaN(t) ? e : u([t += .01, 0, 0, 0, 128 * (1 - t), 0, t, 0, 0, 128 * (1 - t), 0, 0, t, 0, 128 * (1 - t), 0, 0, 0, 1, 0], e)
             }(i, Number(t.contrast))),
             null != t.hue && (i = function _setHue(e, t) {
                 if (isNaN(t))
                     return e;
                 t *= Math.PI / 180;
                 var r = Math.cos(t)
                     , i = Math.sin(t);
                 return u([x + r * (1 - x) + i * -x, y + r * -y + i * -y, _ + r * -_ + i * (1 - _), 0, 0, x + r * -x + .143 * i, y + r * (1 - y) + .14 * i, _ + r * -_ + -.283 * i, 0, 0, x + r * -x + i * -(1 - x), y + r * -y + i * y, _ + r * (1 - _) + i * _, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], e)
             }(i, Number(t.hue))),
             null != t.saturation && (i = function _setSaturation(e, t) {
                 if (isNaN(t))
                     return e;
                 var r = 1 - t
                     , i = r * x
                     , n = r * y
                     , l = r * _;
                 return u([i + t, n, l, 0, 0, i, n + t, l, 0, 0, i, n, l + t, 0, 0, 0, 0, 0, 1, 0], e)
             }(i, Number(t.saturation))),
                 c = i.length; -1 < --c; )
            i[c] !== l[c] && (a = r.add(l, c, l[c], i[c], 0, 0, 0, 0, 0, 1)) && (a.op = "easel_colorMatrixFilter");
        r._props.push("easel_colorMatrixFilter"),
        e.cacheID || o(),
            r._matrix = l
    }
    function A(e) {
        h = e || l(),
        k() && (t = window),
        h && (g = 1)
    }
    var h, g, t, r, b, d, M = "redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(","), w = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], x = .212671, y = .71516, _ = .072169, i = {
        version: "3.12.5",
        name: "easel",
        init: function init(e, t, r, i, l) {
            var o, s, u, a, f, c, d;
            for (o in g || (A(),
            h || n("Please gsap.registerPlugin(EaselPlugin)")),
                this.target = e,
                t)
                if (f = t[o],
                "colorFilter" === o || "tint" === o || "tintAmount" === o || "exposure" === o || "brightness" === o)
                    u || (p(e, t.colorFilter || t, this),
                        u = !0);
                else if ("saturation" === o || "contrast" === o || "hue" === o || "colorize" === o || "colorizeAmount" === o)
                    a || (z(e, t.colorMatrixFilter || t, this),
                        a = !0);
                else if ("frame" === o) {
                    if ("string" == typeof f && "=" !== f.charAt(1) && (c = e.labels))
                        for (d = 0; d < c.length; d++)
                            c[d].label === f && (f = c[d].position);
                    (s = this.add(e, "gotoAndStop", e.currentFrame, f, i, l, Math.round, 0, 0, 1)) && (s.op = o)
                } else
                    null != e[o] && this.add(e, o, "get", f)
        },
        render: function render(e, t) {
            for (var r = t._pt; r; )
                r.r(e, r.d),
                    r = r._next;
            t.target.cacheID && t.target.updateCache()
        },
        register: A,
        registerCreateJS: function(e) {
            r = e
        }
    };
    l() && h.registerPlugin(i),
        e.EaselPlugin = i,
        e.default = i;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
