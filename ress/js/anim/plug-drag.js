/*!
 * Draggable 3.12.5
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
    function _assertThisInitialized(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function w(e, t) {
        if (e.parentNode && (h || T(e))) {
            var n = P(e)
                , o = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml"
                , r = n ? t ? "rect" : "g" : "div"
                , i = 2 !== t ? 0 : 100
                , a = 3 === t ? 100 : 0
                , l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;"
                , s = h.createElementNS ? h.createElementNS(o.replace(/^https/, "http"), r) : h.createElement(r);
            return t && (n ? (g = g || w(e),
                s.setAttribute("width", .01),
                s.setAttribute("height", .01),
                s.setAttribute("transform", "translate(" + i + "," + a + ")"),
                g.appendChild(s)) : (f || ((f = w(e)).style.cssText = l),
                s.style.cssText = l + "width:0.1px;height:0.1px;top:" + a + "px;left:" + i + "px",
                f.appendChild(s))),
                s
        }
        throw "Need document and parent."
    }
    function A(e, t, n, o, r, i, a) {
        return e.a = t,
            e.b = n,
            e.c = o,
            e.d = r,
            e.e = i,
            e.f = a,
            e
    }
    var h, u, i, a, f, g, x, m, y, t, v = "transform", b = v + "Origin", T = function _setDoc(e) {
        var t = e.ownerDocument || e;
        !(v in e.style) && "msTransform"in e.style && (b = (v = "msTransform") + "Origin");
        for (; t.parentNode && (t = t.parentNode); )
            ;
        if (u = window,
            x = new ge,
            t) {
            i = (h = t).documentElement,
                a = t.body,
                (m = h.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
            var n = t.createElement("div")
                , o = t.createElement("div")
                , r = t && (t.body || t.firstElementChild);
            r && r.appendChild && (r.appendChild(n),
                n.appendChild(o),
                n.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"),
                y = o.offsetParent !== n,
                r.removeChild(n))
        }
        return t
    }, D = function _forceNonZeroScale(e) {
        for (var t, n; e && e !== a; )
            (n = e._gsap) && n.uncache && n.get(e, "x"),
            n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4,
                n.renderTransform(1, n),
                t ? t.push(n) : t = [n]),
                e = e.parentNode;
        return t
    }, M = [], E = [], L = function _getDocScrollTop() {
        return u.pageYOffset || h.scrollTop || i.scrollTop || a.scrollTop || 0
    }, S = function _getDocScrollLeft() {
        return u.pageXOffset || h.scrollLeft || i.scrollLeft || a.scrollLeft || 0
    }, P = function _svgOwner(e) {
        return e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null)
    }, C = function _isFixed(e) {
        return "fixed" === u.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0)
    }, N = function _placeSiblings(e, t) {
        var n, o, r, i, a, l, s = P(e), c = e === s, d = s ? M : E, p = e.parentNode;
        if (e === u)
            return e;
        if (d.length || d.push(w(e, 1), w(e, 2), w(e, 3)),
            n = s ? g : f,
            s)
            c ? (i = -(r = function _getCTM(e) {
                var t, n = e.getCTM();
                return n || (t = e.style[v],
                    e.style[v] = "none",
                    e.appendChild(m),
                    n = m.getCTM(),
                    e.removeChild(m),
                    t ? e.style[v] = t : e.style.removeProperty(v.replace(/([A-Z])/g, "-$1").toLowerCase())),
                n || x.clone()
            }(e)).e / r.a,
                a = -r.f / r.d,
                o = x) : e.getBBox ? (r = e.getBBox(),
                i = (o = (o = e.transform ? e.transform.baseVal : {}).numberOfItems ? 1 < o.numberOfItems ? function _consolidate(e) {
                    for (var t = new ge, n = 0; n < e.numberOfItems; n++)
                        t.multiply(e.getItem(n).matrix);
                    return t
                }(o) : o.getItem(0).matrix : x).a * r.x + o.c * r.y,
                a = o.b * r.x + o.d * r.y) : (o = new ge,
                i = a = 0),
            t && "g" === e.tagName.toLowerCase() && (i = a = 0),
                (c ? s : p).appendChild(n),
                n.setAttribute("transform", "matrix(" + o.a + "," + o.b + "," + o.c + "," + o.d + "," + (o.e + i) + "," + (o.f + a) + ")");
        else {
            if (i = a = 0,
                y)
                for (o = e.offsetParent,
                         r = e; (r = r && r.parentNode) && r !== o && r.parentNode; )
                    4 < (u.getComputedStyle(r)[v] + "").length && (i = r.offsetLeft,
                        a = r.offsetTop,
                        r = 0);
            if ("absolute" !== (l = u.getComputedStyle(e)).position && "fixed" !== l.position)
                for (o = e.offsetParent; p && p !== o; )
                    i += p.scrollLeft || 0,
                        a += p.scrollTop || 0,
                        p = p.parentNode;
            (r = n.style).top = e.offsetTop - a + "px",
                r.left = e.offsetLeft - i + "px",
                r[v] = l[v],
                r[b] = l[b],
                r.position = "fixed" === l.position ? "fixed" : "absolute",
                e.parentNode.appendChild(n)
        }
        return n
    }, ge = ((t = Matrix2D.prototype).inverse = function inverse() {
        var e = this.a
            , t = this.b
            , n = this.c
            , o = this.d
            , r = this.e
            , i = this.f
            , a = e * o - t * n || 1e-10;
        return A(this, o / a, -t / a, -n / a, e / a, (n * i - o * r) / a, -(e * i - t * r) / a)
    }
        ,
        t.multiply = function multiply(e) {
            var t = this.a
                , n = this.b
                , o = this.c
                , r = this.d
                , i = this.e
                , a = this.f
                , l = e.a
                , s = e.c
                , c = e.b
                , d = e.d
                , p = e.e
                , u = e.f;
            return A(this, l * t + c * o, l * n + c * r, s * t + d * o, s * n + d * r, i + p * t + u * o, a + p * n + u * r)
        }
        ,
        t.clone = function clone() {
            return new Matrix2D(this.a,this.b,this.c,this.d,this.e,this.f)
        }
        ,
        t.equals = function equals(e) {
            var t = this.a
                , n = this.b
                , o = this.c
                , r = this.d
                , i = this.e
                , a = this.f;
            return t === e.a && n === e.b && o === e.c && r === e.d && i === e.e && a === e.f
        }
        ,
        t.apply = function apply(e, t) {
            void 0 === t && (t = {});
            var n = e.x
                , o = e.y
                , r = this.a
                , i = this.b
                , a = this.c
                , l = this.d
                , s = this.e
                , c = this.f;
            return t.x = n * r + o * a + s || 0,
                t.y = n * i + o * l + c || 0,
                t
        }
        ,
        Matrix2D);
    function Matrix2D(e, t, n, o, r, i) {
        void 0 === e && (e = 1),
        void 0 === t && (t = 0),
        void 0 === n && (n = 0),
        void 0 === o && (o = 1),
        void 0 === r && (r = 0),
        void 0 === i && (i = 0),
            A(this, e, t, n, o, r, i)
    }
    function getGlobalMatrix(e, t, n, o) {
        if (!e || !e.parentNode || (h || T(e)).documentElement === e)
            return new ge;
        var r = D(e)
            , i = P(e) ? M : E
            , a = N(e, n)
            , l = i[0].getBoundingClientRect()
            , s = i[1].getBoundingClientRect()
            , c = i[2].getBoundingClientRect()
            , d = a.parentNode
            , p = !o && C(e)
            , u = new ge((s.left - l.left) / 100,(s.top - l.top) / 100,(c.left - l.left) / 100,(c.top - l.top) / 100,l.left + (p ? 0 : S()),l.top + (p ? 0 : L()));
        if (d.removeChild(a),
            r)
            for (l = r.length; l--; )
                (s = r[l]).scaleX = s.scaleY = 0,
                    s.renderTransform(1, s);
        return t ? u.inverse() : u
    }
    function X() {
        return "undefined" != typeof window
    }
    function Y() {
        return xe || X() && (xe = window.gsap) && xe.registerPlugin && xe
    }
    function Z(e) {
        return "function" == typeof e
    }
    function $(e) {
        return "object" == typeof e
    }
    function _(e) {
        return void 0 === e
    }
    function aa() {
        return !1
    }
    function da(e) {
        return Math.round(1e4 * e) / 1e4
    }
    function fa(e, t) {
        var n = ye.createElementNS ? ye.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : ye.createElement(e);
        return n.style ? n : ye.createElement(e)
    }
    function ra(e, t) {
        var n, o = {};
        for (n in e)
            o[n] = t ? e[n] * t : e[n];
        return o
    }
    function ta(e, t) {
        for (var n, o = e.length; o--; )
            t ? e[o].style.touchAction = t : e[o].style.removeProperty("touch-action"),
            (n = e[o].children) && n.length && ta(n, t)
    }
    function ua() {
        return Oe.forEach(function(e) {
            return e()
        })
    }
    function wa() {
        return !Oe.length && xe.ticker.remove(ua)
    }
    function xa(e) {
        for (var t = Oe.length; t--; )
            Oe[t] === e && Oe.splice(t, 1);
        xe.to(wa, {
            overwrite: !0,
            delay: 15,
            duration: 0,
            onComplete: wa,
            data: "_draggable"
        })
    }
    function za(e, t, n, o) {
        if (e.addEventListener) {
            var r = Me[t];
            o = o || (d ? {
                passive: !1
            } : null),
                e.addEventListener(r || t, n, o),
            r && t !== r && e.addEventListener(t, n, o)
        }
    }
    function Aa(e, t, n, o) {
        if (e.removeEventListener) {
            var r = Me[t];
            e.removeEventListener(r || t, n, o),
            r && t !== r && e.removeEventListener(t, n, o)
        }
    }
    function Ba(e) {
        e.preventDefault && e.preventDefault(),
        e.preventManipulation && e.preventManipulation()
    }
    function Da(e) {
        Ee = e.touches && Ae < e.touches.length,
            Aa(e.target, "touchend", Da)
    }
    function Ea(e) {
        Ee = e.touches && Ae < e.touches.length,
            za(e.target, "touchend", Da)
    }
    function Fa(e) {
        return me.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
    }
    function Ga(e) {
        return me.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
    }
    function Ha(e, t) {
        za(e, "scroll", t),
        Qe(e.parentNode) || Ha(e.parentNode, t)
    }
    function Ia(e, t) {
        Aa(e, "scroll", t),
        Qe(e.parentNode) || Ia(e.parentNode, t)
    }
    function Ka(e, t) {
        var n = "x" === t ? "Width" : "Height"
            , o = "scroll" + n
            , r = "client" + n;
        return Math.max(0, Qe(e) ? Math.max(ve[o], l[o]) - (me["inner" + n] || ve[r] || l[r]) : e[o] - e[r])
    }
    function La(e, t) {
        var n = Ka(e, "x")
            , o = Ka(e, "y");
        Qe(e) ? e = We : La(e.parentNode, t),
            e._gsMaxScrollX = n,
            e._gsMaxScrollY = o,
        t || (e._gsScrollX = e.scrollLeft || 0,
            e._gsScrollY = e.scrollTop || 0)
    }
    function Ma(e, t, n) {
        var o = e.style;
        o && (_(o[t]) && (t = c(t, e) || t),
            null == n ? o.removeProperty && o.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : o[t] = n)
    }
    function Na(e) {
        return me.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
    }
    function Pa(e) {
        if (e === me)
            return p.left = p.top = 0,
                p.width = p.right = ve.clientWidth || e.innerWidth || l.clientWidth || 0,
                p.height = p.bottom = (e.innerHeight || 0) - 20 < ve.clientHeight ? ve.clientHeight : e.innerHeight || l.clientHeight || 0,
                p;
        var t = e.ownerDocument || ye
            , n = _(e.pageX) ? e.nodeType || _(e.left) || _(e.top) ? Te(e)[0].getBoundingClientRect() : e : {
            left: e.pageX - Ga(t),
            top: e.pageY - Fa(t),
            right: e.pageX - Ga(t) + 1,
            bottom: e.pageY - Fa(t) + 1
        };
        return _(n.right) && !_(n.width) ? (n.right = n.left + n.width,
            n.bottom = n.top + n.height) : _(n.width) && (n = {
            width: n.right - n.left,
            height: n.bottom - n.top,
            right: n.right,
            left: n.left,
            bottom: n.bottom,
            top: n.top
        }),
            n
    }
    function Qa(e, t, n) {
        var o, r = e.vars, i = r[n], a = e._listeners[t];
        return Z(i) && (o = i.apply(r.callbackScope || e, r[n + "Params"] || [e.pointerEvent])),
        a && !1 === e.dispatchEvent(t) && (o = !1),
            o
    }
    function Ra(e, t) {
        var n, o, r, i = Te(e)[0];
        return i.nodeType || i === me ? O(i, t) : _(e.left) ? {
            left: o = e.min || e.minX || e.minRotation || 0,
            top: n = e.min || e.minY || 0,
            width: (e.max || e.maxX || e.maxRotation || 0) - o,
            height: (e.max || e.maxY || 0) - n
        } : (r = {
            x: 0,
            y: 0
        },
            {
                left: e.left - r.x,
                top: e.top - r.y,
                width: e.width,
                height: e.height
            })
    }
    function Ua(r, i, e, t, a, n) {
        var o, l, s, c = {};
        if (i)
            if (1 !== a && i instanceof Array) {
                if (c.end = o = [],
                    s = i.length,
                    $(i[0]))
                    for (l = 0; l < s; l++)
                        o[l] = ra(i[l], a);
                else
                    for (l = 0; l < s; l++)
                        o[l] = i[l] * a;
                e += 1.1,
                    t -= 1.1
            } else
                Z(i) ? c.end = function(e) {
                        var t, n, o = i.call(r, e);
                        if (1 !== a)
                            if ($(o)) {
                                for (n in t = {},
                                    o)
                                    t[n] = o[n] * a;
                                o = t
                            } else
                                o *= a;
                        return o
                    }
                    : c.end = i;
        return !e && 0 !== e || (c.max = e),
        !t && 0 !== t || (c.min = t),
        n && (c.velocity = 0),
            c
    }
    function Va(e) {
        var t;
        return !(!e || !e.getAttribute || e === l) && (!("true" !== (t = e.getAttribute("data-clickable")) && ("false" === t || !o.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || Va(e.parentNode))
    }
    function Wa(e, t) {
        for (var n, o = e.length; o--; )
            (n = e[o]).ondragstart = n.onselectstart = t ? null : aa,
                xe.set(n, {
                    lazy: !0,
                    userSelect: t ? "text" : "none"
                })
    }
    function $a(i, r) {
        i = xe.utils.toArray(i)[0],
            r = r || {};
        var a, l, s, e, c, d, p = document.createElement("div"), u = p.style, t = i.firstChild, h = 0, f = 0, g = i.scrollTop, x = i.scrollLeft, m = i.scrollWidth, y = i.scrollHeight, v = 0, w = 0, b = 0;
        k && !1 !== r.force3D ? (c = "translate3d(",
            d = "px,0px)") : B && (c = "translate(",
            d = "px)"),
            this.scrollTop = function(e, t) {
                if (!arguments.length)
                    return -this.top();
                this.top(-e, t)
            }
            ,
            this.scrollLeft = function(e, t) {
                if (!arguments.length)
                    return -this.left();
                this.left(-e, t)
            }
            ,
            this.left = function(e, t) {
                if (!arguments.length)
                    return -(i.scrollLeft + f);
                var n = i.scrollLeft - x
                    , o = f;
                if ((2 < n || n < -2) && !t)
                    return x = i.scrollLeft,
                        xe.killTweensOf(this, {
                            left: 1,
                            scrollLeft: 1
                        }),
                        this.left(-x),
                        void (r.onKill && r.onKill());
                (e = -e) < 0 ? (f = e - .5 | 0,
                    e = 0) : w < e ? (f = e - w | 0,
                    e = w) : f = 0,
                (f || o) && (this._skip || (u[B] = c + -f + "px," + -h + d),
                0 <= f + v && (u.paddingRight = f + v + "px")),
                    i.scrollLeft = 0 | e,
                    x = i.scrollLeft
            }
            ,
            this.top = function(e, t) {
                if (!arguments.length)
                    return -(i.scrollTop + h);
                var n = i.scrollTop - g
                    , o = h;
                if ((2 < n || n < -2) && !t)
                    return g = i.scrollTop,
                        xe.killTweensOf(this, {
                            top: 1,
                            scrollTop: 1
                        }),
                        this.top(-g),
                        void (r.onKill && r.onKill());
                (e = -e) < 0 ? (h = e - .5 | 0,
                    e = 0) : b < e ? (h = e - b | 0,
                    e = b) : h = 0,
                (h || o) && (this._skip || (u[B] = c + -f + "px," + -h + d)),
                    i.scrollTop = 0 | e,
                    g = i.scrollTop
            }
            ,
            this.maxScrollTop = function() {
                return b
            }
            ,
            this.maxScrollLeft = function() {
                return w
            }
            ,
            this.disable = function() {
                for (t = p.firstChild; t; )
                    e = t.nextSibling,
                        i.appendChild(t),
                        t = e;
                i === p.parentNode && i.removeChild(p)
            }
            ,
            this.enable = function() {
                if ((t = i.firstChild) !== p) {
                    for (; t; )
                        e = t.nextSibling,
                            p.appendChild(t),
                            t = e;
                    i.appendChild(p),
                        this.calibrate()
                }
            }
            ,
            this.calibrate = function(e) {
                var t, n, o, r = i.clientWidth === a;
                g = i.scrollTop,
                    x = i.scrollLeft,
                r && i.clientHeight === l && p.offsetHeight === s && m === i.scrollWidth && y === i.scrollHeight && !e || ((h || f) && (n = this.left(),
                    o = this.top(),
                    this.left(-i.scrollLeft),
                    this.top(-i.scrollTop)),
                    t = Na(i),
                r && !e || (u.display = "block",
                    u.width = "auto",
                    u.paddingRight = "0px",
                (v = Math.max(0, i.scrollWidth - i.clientWidth)) && (v += parseFloat(t.paddingLeft) + (R ? parseFloat(t.paddingRight) : 0))),
                    u.display = "inline-block",
                    u.position = "relative",
                    u.overflow = "visible",
                    u.verticalAlign = "top",
                    u.boxSizing = "content-box",
                    u.width = "100%",
                    u.paddingRight = v + "px",
                R && (u.paddingBottom = t.paddingBottom),
                    a = i.clientWidth,
                    l = i.clientHeight,
                    m = i.scrollWidth,
                    y = i.scrollHeight,
                    w = i.scrollWidth - a,
                    b = i.scrollHeight - l,
                    s = p.offsetHeight,
                    u.display = "block",
                (n || o) && (this.left(n),
                    this.top(o)))
            }
            ,
            this.content = p,
            this.element = i,
            this._skip = !1,
            this.enable()
    }
    function _a(e) {
        if (X() && document.body) {
            var t = window && window.navigator;
            me = window,
                ye = document,
                ve = ye.documentElement,
                l = ye.body,
                s = fa("div"),
                Pe = !!window.PointerEvent,
                (we = fa("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",
                Se = "grab" === we.style.cursor ? "grab" : "move",
                _e = t && -1 !== t.userAgent.toLowerCase().indexOf("android"),
                De = "ontouchstart"in ve && "orientation"in me || t && (0 < t.MaxTouchPoints || 0 < t.msMaxTouchPoints),
                o = fa("div"),
                r = fa("div"),
                i = r.style,
                a = l,
                i.display = "inline-block",
                i.position = "relative",
                o.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",
                o.appendChild(r),
                a.appendChild(o),
                n = r.offsetHeight + 18 > o.scrollHeight,
                a.removeChild(o),
                R = n,
                Me = function(e) {
                    for (var t = e.split(","), n = (("onpointerdown"in s ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown"in s ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(",")), o = {}, r = 4; -1 < --r; )
                        o[t[r]] = n[r],
                            o[n[r]] = t[r];
                    try {
                        ve.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function get() {
                                d = 1
                            }
                        }))
                    } catch (e) {}
                    return o
                }("touchstart,touchmove,touchend,touchcancel"),
                za(ye, "touchcancel", aa),
                za(me, "touchmove", aa),
            l && l.addEventListener("touchstart", aa),
                za(ye, "contextmenu", function() {
                    for (var e in ze)
                        ze[e].isPressed && ze[e].endDrag()
                }),
                xe = be = Y()
        }
        var n, o, r, i, a;
        xe ? (Le = xe.plugins.inertia,
            Xe = xe.core.context || function() {}
            ,
            c = xe.utils.checkPrefix,
            B = c(B),
            Ce = c(Ce),
            Te = xe.utils.toArray,
            Ye = xe.core.getStyleSaver,
            k = !!c("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
    }
    var xe, me, ye, ve, l, s, we, be, c, Te, d, De, Me, Ee, _e, Le, Se, Pe, Xe, Ye, k, R, n, Ae = 0, B = "transform", Ce = "transformOrigin", Ne = Array.isArray, ke = 180 / Math.PI, Re = 1e20, r = new ge, Be = Date.now || function() {
        return (new Date).getTime()
    }
        , Oe = [], ze = {}, Ie = 0, o = /^(?:a|input|textarea|button|select)$/i, Fe = 0, He = {}, We = {}, Qe = function _isRoot(e) {
        return !(e && e !== ve && 9 !== e.nodeType && e !== ye.body && e !== me && e.nodeType && e.parentNode)
    }, p = {}, Ge = {}, O = function _getElementBounds(e, t) {
        t = Te(t)[0];
        var n, o, r, i, a, l, s, c, d, p, u, h, f, g = e.getBBox && e.ownerSVGElement, x = e.ownerDocument || ye;
        if (e === me)
            r = Fa(x),
                o = (n = Ga(x)) + (x.documentElement.clientWidth || e.innerWidth || x.body.clientWidth || 0),
                i = r + ((e.innerHeight || 0) - 20 < x.documentElement.clientHeight ? x.documentElement.clientHeight : e.innerHeight || x.body.clientHeight || 0);
        else {
            if (t === me || _(t))
                return e.getBoundingClientRect();
            n = r = 0,
                g ? (u = (p = e.getBBox()).width,
                    h = p.height) : (e.viewBox && (p = e.viewBox.baseVal) && (n = p.x || 0,
                    r = p.y || 0,
                    u = p.width,
                    h = p.height),
                u || (p = "border-box" === (f = Na(e)).boxSizing,
                    u = (parseFloat(f.width) || e.clientWidth || 0) + (p ? 0 : parseFloat(f.borderLeftWidth) + parseFloat(f.borderRightWidth)),
                    h = (parseFloat(f.height) || e.clientHeight || 0) + (p ? 0 : parseFloat(f.borderTopWidth) + parseFloat(f.borderBottomWidth)))),
                o = u,
                i = h
        }
        return e === t ? {
            left: n,
            top: r,
            width: o - n,
            height: i - r
        } : (l = (a = getGlobalMatrix(t, !0).multiply(getGlobalMatrix(e))).apply({
            x: n,
            y: r
        }),
            s = a.apply({
                x: o,
                y: r
            }),
            c = a.apply({
                x: o,
                y: i
            }),
            d = a.apply({
                x: n,
                y: i
            }),
            {
                left: n = Math.min(l.x, s.x, c.x, d.x),
                top: r = Math.min(l.y, s.y, c.y, d.y),
                width: Math.max(l.x, s.x, c.x, d.x) - n,
                height: Math.max(l.y, s.y, c.y, d.y) - r
            })
    }, z = ((n = EventDispatcher.prototype).addEventListener = function addEventListener(e, t) {
        var n = this._listeners[e] || (this._listeners[e] = []);
        ~n.indexOf(t) || n.push(t)
    }
        ,
        n.removeEventListener = function removeEventListener(e, t) {
            var n = this._listeners[e]
                , o = n && n.indexOf(t);
            0 <= o && n.splice(o, 1)
        }
        ,
        n.dispatchEvent = function dispatchEvent(t) {
            var n, o = this;
            return (this._listeners[t] || []).forEach(function(e) {
                return !1 === e.call(o, {
                    type: t,
                    target: o.target
                }) && (n = !1)
            }),
                n
        }
        ,
        EventDispatcher);
    function EventDispatcher(e) {
        this._listeners = {},
            this.target = e || this
    }
    var Ke, I = (function _inheritsLoose(e, t) {
        e.prototype = Object.create(t.prototype),
            (e.prototype.constructor = e).__proto__ = t
    }(Draggable, Ke = z),
        Draggable.register = function register(e) {
            xe = e,
                _a()
        }
        ,
        Draggable.create = function create(e, t) {
            return be || _a(!0),
                Te(e).map(function(e) {
                    return new Draggable(e,t)
                })
        }
        ,
        Draggable.get = function get(e) {
            return ze[(Te(e)[0] || {})._gsDragID]
        }
        ,
        Draggable.timeSinceDrag = function timeSinceDrag() {
            return (Be() - Fe) / 1e3
        }
        ,
        Draggable.hitTest = function hitTest(e, t, n) {
            if (e === t)
                return !1;
            var o, r, i, a = Pa(e), l = Pa(t), s = a.top, c = a.left, d = a.right, p = a.bottom, u = a.width, h = a.height, f = l.left > d || l.right < c || l.top > p || l.bottom < s;
            return f || !n ? !f : (i = -1 !== (n + "").indexOf("%"),
                n = parseFloat(n) || 0,
                (o = {
                    left: Math.max(c, l.left),
                    top: Math.max(s, l.top)
                }).width = Math.min(d, l.right) - o.left,
                o.height = Math.min(p, l.bottom) - o.top,
            !(o.width < 0 || o.height < 0) && (i ? u * h * (n *= .01) <= (r = o.width * o.height) || r >= l.width * l.height * n : o.width > n && o.height > n))
        }
        ,
        Draggable);
    function Draggable(h, p) {
        var e;
        e = Ke.call(this) || this,
        be || _a(1),
            h = Te(h)[0],
            e.styles = Ye && Ye(h, "transform,left,top"),
            Le = Le || xe.plugins.inertia,
            e.vars = p = ra(p || {}),
            e.target = h,
            e.x = e.y = e.rotation = 0,
            e.dragResistance = parseFloat(p.dragResistance) || 0,
            e.edgeResistance = isNaN(p.edgeResistance) ? 1 : parseFloat(p.edgeResistance) || 0,
            e.lockAxis = p.lockAxis,
            e.autoScroll = p.autoScroll || 0,
            e.lockedAxis = null,
            e.allowEventDefault = !!p.allowEventDefault,
            xe.getProperty(h, "x");
        function Rg(e, t) {
            return parseFloat(se.get(h, e, t))
        }
        function yh(e) {
            return Ba(e),
            e.stopImmediatePropagation && e.stopImmediatePropagation(),
                !1
        }
        function zh(e) {
            if (q.autoScroll && q.isDragging && (te || Y)) {
                var t, n, o, r, i, a, l, s, c = h, d = 15 * q.autoScroll;
                for (te = !1,
                         We.scrollTop = null != me.pageYOffset ? me.pageYOffset : null != de.documentElement.scrollTop ? de.documentElement.scrollTop : de.body.scrollTop,
                         We.scrollLeft = null != me.pageXOffset ? me.pageXOffset : null != de.documentElement.scrollLeft ? de.documentElement.scrollLeft : de.body.scrollLeft,
                         r = q.pointerX - We.scrollLeft,
                         i = q.pointerY - We.scrollTop; c && !n; )
                    t = (n = Qe(c.parentNode)) ? We : c.parentNode,
                        o = n ? {
                            bottom: Math.max(ve.clientHeight, me.innerHeight || 0),
                            right: Math.max(ve.clientWidth, me.innerWidth || 0),
                            left: 0,
                            top: 0
                        } : t.getBoundingClientRect(),
                        a = l = 0,
                    U && ((s = t._gsMaxScrollY - t.scrollTop) < 0 ? l = s : i > o.bottom - re && s ? (te = !0,
                        l = Math.min(s, d * (1 - Math.max(0, o.bottom - i) / re) | 0)) : i < o.top + ne && t.scrollTop && (te = !0,
                        l = -Math.min(t.scrollTop, d * (1 - Math.max(0, i - o.top) / ne) | 0)),
                    l && (t.scrollTop += l)),
                    V && ((s = t._gsMaxScrollX - t.scrollLeft) < 0 ? a = s : r > o.right - oe && s ? (te = !0,
                        a = Math.min(s, d * (1 - Math.max(0, o.right - r) / oe) | 0)) : r < o.left + ie && t.scrollLeft && (te = !0,
                        a = -Math.min(t.scrollLeft, d * (1 - Math.max(0, r - o.left) / ie) | 0)),
                    a && (t.scrollLeft += a)),
                    n && (a || l) && (me.scrollTo(t.scrollLeft, t.scrollTop),
                        he(q.pointerX + a, q.pointerY + l)),
                        c = t
            }
            if (Y) {
                var p = q.x
                    , u = q.y;
                Q ? (q.deltaX = p - parseFloat(se.rotation),
                    q.rotation = p,
                    se.rotation = p + "deg",
                    se.renderTransform(1, se)) : f ? (U && (q.deltaY = u - f.top(),
                    f.top(u)),
                V && (q.deltaX = p - f.left(),
                    f.left(p))) : W ? (U && (q.deltaY = u - parseFloat(se.y),
                    se.y = u + "px"),
                V && (q.deltaX = p - parseFloat(se.x),
                    se.x = p + "px"),
                    se.renderTransform(1, se)) : (U && (q.deltaY = u - parseFloat(h.style.top || 0),
                    h.style.top = u + "px"),
                V && (q.deltaX = p - parseFloat(h.style.left || 0),
                    h.style.left = p + "px")),
                !g || e || z || (!(z = !0) === Qa(q, "drag", "onDrag") && (V && (q.x -= q.deltaX),
                U && (q.y -= q.deltaY),
                    zh(!0)),
                    z = !1)
            }
            Y = !1
        }
        function Ah(e, t) {
            var n, o, r = q.x, i = q.y;
            h._gsap || (se = xe.core.getCache(h)),
            se.uncache && xe.getProperty(h, "x"),
                W ? (q.x = parseFloat(se.x),
                    q.y = parseFloat(se.y)) : Q ? q.x = q.rotation = parseFloat(se.rotation) : f ? (q.y = f.top(),
                    q.x = f.left()) : (q.y = parseFloat(h.style.top || (o = Na(h)) && o.top) || 0,
                    q.x = parseFloat(h.style.left || (o || {}).left) || 0),
            (A || C || N) && !t && (q.isDragging || q.isThrowing) && (N && (He.x = q.x,
                He.y = q.y,
            (n = N(He)).x !== q.x && (q.x = n.x,
                Y = !0),
            n.y !== q.y && (q.y = n.y,
                Y = !0)),
            A && (n = A(q.x)) !== q.x && (q.x = n,
            Q && (q.rotation = n),
                Y = !0),
            C && ((n = C(q.y)) !== q.y && (q.y = n),
                Y = !0)),
            Y && zh(!0),
            e || (q.deltaX = q.x - r,
                q.deltaY = q.y - i,
                Qa(q, "throwupdate", "onThrowUpdate"))
        }
        function Bh(a, l, s, n) {
            return null == l && (l = -Re),
            null == s && (s = Re),
                Z(a) ? function(e) {
                        var t = q.isPressed ? 1 - q.edgeResistance : 1;
                        return a.call(q, (s < e ? s + (e - s) * t : e < l ? l + (e - l) * t : e) * n) * n
                    }
                    : Ne(a) ? function(e) {
                            for (var t, n, o = a.length, r = 0, i = Re; -1 < --o; )
                                (n = (t = a[o]) - e) < 0 && (n = -n),
                                n < i && l <= t && t <= s && (r = o,
                                    i = n);
                            return a[r]
                        }
                        : isNaN(a) ? function(e) {
                                return e
                            }
                            : function() {
                                return a * n
                            }
        }
        function Dh() {
            var e, t, n, o;
            M = !1,
                f ? (f.calibrate(),
                    q.minX = L = -f.maxScrollLeft(),
                    q.minY = P = -f.maxScrollTop(),
                    q.maxX = E = q.maxY = S = 0,
                    M = !0) : p.bounds && (e = Ra(p.bounds, h.parentNode),
                    Q ? (q.minX = L = e.left,
                        q.maxX = E = e.left + e.width,
                        q.minY = P = q.maxY = S = 0) : _(p.bounds.maxX) && _(p.bounds.maxY) ? (t = Ra(h, h.parentNode),
                        q.minX = L = Math.round(Rg(G, "px") + e.left - t.left),
                        q.minY = P = Math.round(Rg(K, "px") + e.top - t.top),
                        q.maxX = E = Math.round(L + (e.width - t.width)),
                        q.maxY = S = Math.round(P + (e.height - t.height))) : (e = p.bounds,
                        q.minX = L = e.minX,
                        q.minY = P = e.minY,
                        q.maxX = E = e.maxX,
                        q.maxY = S = e.maxY),
                E < L && (q.minX = E,
                    q.maxX = E = L,
                    L = q.minX),
                S < P && (q.minY = S,
                    q.maxY = S = P,
                    P = q.minY),
                Q && (q.minRotation = L,
                    q.maxRotation = E),
                    M = !0),
            p.liveSnap && (n = !0 === p.liveSnap ? p.snap || {} : p.liveSnap,
                o = Ne(n) || Z(n),
                Q ? (A = Bh(o ? n : n.rotation, L, E, 1),
                    C = null) : n.points ? N = function buildPointSnapFunc(s, l, c, d, p, u, h) {
                    return u = u && u < Re ? u * u : Re,
                        Z(s) ? function(e) {
                                var t, n, o, r = q.isPressed ? 1 - q.edgeResistance : 1, i = e.x, a = e.y;
                                return e.x = i = c < i ? c + (i - c) * r : i < l ? l + (i - l) * r : i,
                                    e.y = a = p < a ? p + (a - p) * r : a < d ? d + (a - d) * r : a,
                                (t = s.call(q, e)) !== e && (e.x = t.x,
                                    e.y = t.y),
                                1 !== h && (e.x *= h,
                                    e.y *= h),
                                u < Re && (n = e.x - i,
                                    o = e.y - a,
                                u < n * n + o * o && (e.x = i,
                                    e.y = a)),
                                    e
                            }
                            : Ne(s) ? function(e) {
                                    for (var t, n, o, r, i = s.length, a = 0, l = Re; -1 < --i; )
                                        (r = (t = (o = s[i]).x - e.x) * t + (n = o.y - e.y) * n) < l && (a = i,
                                            l = r);
                                    return l <= u ? s[a] : e
                                }
                                : function(e) {
                                    return e
                                }
                }(o ? n : n.points, L, E, P, S, n.radius, f ? -1 : 1) : (V && (A = Bh(o ? n : n.x || n.left || n.scrollLeft, L, E, f ? -1 : 1)),
                U && (C = Bh(o ? n : n.y || n.top || n.scrollTop, P, S, f ? -1 : 1))))
        }
        function Eh() {
            q.isThrowing = !1,
                Qa(q, "throwcomplete", "onThrowComplete")
        }
        function Fh() {
            q.isThrowing = !1
        }
        function Gh(e, t) {
            var n, o, r, i;
            e && Le ? (!0 === e && (n = p.snap || p.liveSnap || {},
                o = Ne(n) || Z(n),
                e = {
                    resistance: (p.throwResistance || p.resistance || 1e3) / (Q ? 10 : 1)
                },
                Q ? e.rotation = Ua(q, o ? n : n.rotation, E, L, 1, t) : (V && (e[G] = Ua(q, o ? n : n.points || n.x || n.left, E, L, f ? -1 : 1, t || "x" === q.lockedAxis)),
                U && (e[K] = Ua(q, o ? n : n.points || n.y || n.top, S, P, f ? -1 : 1, t || "y" === q.lockedAxis)),
                (n.points || Ne(n) && $(n[0])) && (e.linkedProps = G + "," + K,
                    e.radius = n.radius))),
                q.isThrowing = !0,
                i = isNaN(p.overshootTolerance) ? 1 === p.edgeResistance ? 0 : 1 - q.edgeResistance + .2 : p.overshootTolerance,
            e.duration || (e.duration = {
                max: Math.max(p.minDuration || 0, "maxDuration"in p ? p.maxDuration : 2),
                min: isNaN(p.minDuration) ? 0 === i || $(e) && 1e3 < e.resistance ? 0 : .5 : p.minDuration,
                overshoot: i
            }),
                q.tween = r = xe.to(f || h, {
                    inertia: e,
                    data: "_draggable",
                    inherit: !1,
                    onComplete: Eh,
                    onInterrupt: Fh,
                    onUpdate: p.fastMode ? Qa : Ah,
                    onUpdateParams: p.fastMode ? [q, "onthrowupdate", "onThrowUpdate"] : n && n.radius ? [!1, !0] : []
                }),
            p.fastMode || (f && (f._skip = !0),
                r.render(1e9, !0, !0),
                Ah(!0, !0),
                q.endX = q.x,
                q.endY = q.y,
            Q && (q.endRotation = q.x),
                r.play(0),
                Ah(!0, !0),
            f && (f._skip = !1))) : M && q.applyBounds()
        }
        function Hh(e) {
            var t, n = k;
            k = getGlobalMatrix(h.parentNode, !0),
            e && q.isPressed && !k.equals(n || new ge) && (t = n.inverse().apply({
                x: w,
                y: b
            }),
                k.apply(t, t),
                w = t.x,
                b = t.y),
            k.equals(r) && (k = null)
        }
        function Ih() {
            var e, t, n, o = 1 - q.edgeResistance, r = ce ? Ga(de) : 0, i = ce ? Fa(de) : 0;
            W && (se.x = Rg(G, "px") + "px",
                se.y = Rg(K, "px") + "px",
                se.renderTransform()),
                Hh(!1),
                Ge.x = q.pointerX - r,
                Ge.y = q.pointerY - i,
            k && k.apply(Ge, Ge),
                w = Ge.x,
                b = Ge.y,
            Y && (he(q.pointerX, q.pointerY),
                zh(!0)),
                d = getGlobalMatrix(h),
                f ? (Dh(),
                    D = f.top(),
                    T = f.left()) : (pe() ? (Ah(!0, !0),
                    Dh()) : q.applyBounds(),
                    Q ? (e = h.ownerSVGElement ? [se.xOrigin - h.getBBox().x, se.yOrigin - h.getBBox().y] : (Na(h)[Ce] || "0 0").split(" "),
                        X = q.rotationOrigin = getGlobalMatrix(h).apply({
                            x: parseFloat(e[0]) || 0,
                            y: parseFloat(e[1]) || 0
                        }),
                        Ah(!0, !0),
                        t = q.pointerX - X.x - r,
                        n = X.y - q.pointerY + i,
                        T = q.x,
                        D = q.y = Math.atan2(n, t) * ke) : (D = Rg(K, "px"),
                        T = Rg(G, "px"))),
            M && o && (E < T ? T = E + (T - E) / o : T < L && (T = L - (L - T) / o),
            Q || (S < D ? D = S + (D - S) / o : D < P && (D = P - (P - D) / o))),
                q.startX = T = da(T),
                q.startY = D = da(D)
        }
        function Kh() {
            !we.parentNode || pe() || q.isDragging || we.parentNode.removeChild(we)
        }
        function Lh(e, t) {
            var n;
            if (!u || q.isPressed || !e || !("mousedown" !== e.type && "pointerdown" !== e.type || t) && Be() - le < 30 && Me[q.pointerEvent.type])
                F && e && u && Ba(e);
            else {
                if (R = pe(),
                    H = !1,
                    q.pointerEvent = e,
                    Me[e.type] ? (v = ~e.type.indexOf("touch") ? e.currentTarget || e.target : de,
                        za(v, "touchend", fe),
                        za(v, "touchmove", ue),
                        za(v, "touchcancel", fe),
                        za(de, "touchstart", Ea)) : (v = null,
                        za(de, "mousemove", ue)),
                    O = null,
                Pe && v || (za(de, "mouseup", fe),
                e && e.target && za(e.target, "mouseup", fe)),
                    y = ae.call(q, e.target) && !1 === p.dragClickables && !t)
                    return za(e.target, "change", fe),
                        Qa(q, "pressInit", "onPressInit"),
                        Qa(q, "press", "onPress"),
                        Wa(J, !0),
                        void (F = !1);
                if (B = !(!v || V == U || !1 === q.vars.allowNativeTouchScrolling || q.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which)) && (V ? "y" : "x"),
                (F = !B && !q.allowEventDefault) && (Ba(e),
                    za(me, "touchforcechange", Ba)),
                    e.changedTouches ? (e = x = e.changedTouches[0],
                        m = e.identifier) : e.pointerId ? m = e.pointerId : x = m = null,
                    Ae++,
                    function _addToRenderQueue(e) {
                        Oe.push(e),
                        1 === Oe.length && xe.ticker.add(ua)
                    }(zh),
                    b = q.pointerY = e.pageY,
                    w = q.pointerX = e.pageX,
                    Qa(q, "pressInit", "onPressInit"),
                (B || q.autoScroll) && La(h.parentNode),
                !h.parentNode || !q.autoScroll || f || Q || !h.parentNode._gsMaxScrollX || we.parentNode || h.getBBox || (we.style.width = h.parentNode.scrollWidth + "px",
                    h.parentNode.appendChild(we)),
                    Ih(),
                q.tween && q.tween.kill(),
                    q.isThrowing = !1,
                    xe.killTweensOf(f || h, o, !0),
                f && xe.killTweensOf(h, {
                    scrollTo: 1
                }, !0),
                    q.tween = q.lockedAxis = null,
                !p.zIndexBoost && (Q || f || !1 === p.zIndexBoost) || (h.style.zIndex = Draggable.zIndex++),
                    q.isPressed = !0,
                    g = !(!p.onDrag && !q._listeners.drag),
                    s = !(!p.onMove && !q._listeners.move),
                !1 !== p.cursor || p.activeCursor)
                    for (n = J.length; -1 < --n; )
                        xe.set(J[n], {
                            cursor: p.activeCursor || p.cursor || ("grab" === Se ? "grabbing" : Se)
                        });
                Qa(q, "press", "onPress")
            }
        }
        function Ph(e) {
            if (e && q.isDragging && !f) {
                var t = e.target || h.parentNode
                    , n = t.scrollLeft - t._gsScrollX
                    , o = t.scrollTop - t._gsScrollY;
                (n || o) && (k ? (w -= n * k.a + o * k.c,
                    b -= o * k.d + n * k.b) : (w -= n,
                    b -= o),
                    t._gsScrollX += n,
                    t._gsScrollY += o,
                    he(q.pointerX, q.pointerY))
            }
        }
        function Qh(e) {
            var t = Be()
                , n = t - le < 100
                , o = t - ee < 50
                , r = n && I === le
                , i = q.pointerEvent && q.pointerEvent.defaultPrevented
                , a = n && c === le
                , l = e.isTrusted || null == e.isTrusted && n && r;
            if ((r || o && !1 !== q.vars.suppressClickOnDrag) && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            n && (!q.pointerEvent || !q.pointerEvent.defaultPrevented) && (!r || l && !a))
                return l && r && (c = le),
                    void (I = le);
            (q.isPressed || o || n) && (l && e.detail && n && !i || Ba(e)),
            n || o || H || (e && e.target && (q.pointerEvent = e),
                Qa(q, "click", "onClick"))
        }
        function Rh(e) {
            return k ? {
                x: e.x * k.a + e.y * k.c + k.e,
                y: e.x * k.b + e.y * k.d + k.f
            } : {
                x: e.x,
                y: e.y
            }
        }
        var u, f, w, b, T, D, M, g, s, E, L, S, P, x, m, X, Y, t, A, C, N, y, v, k, R, B, O, z, I, c, F, d, H, n = (p.type || "x,y").toLowerCase(), W = ~n.indexOf("x") || ~n.indexOf("y"), Q = -1 !== n.indexOf("rotation"), G = Q ? "rotation" : W ? "x" : "left", K = W ? "y" : "top", V = !(!~n.indexOf("x") && !~n.indexOf("left") && "scroll" !== n), U = !(!~n.indexOf("y") && !~n.indexOf("top") && "scroll" !== n), j = p.minimumMovement || 2, q = _assertThisInitialized(e), J = Te(p.trigger || p.handle || h), o = {}, ee = 0, te = !1, ne = p.autoScrollMarginTop || 40, oe = p.autoScrollMarginRight || 40, re = p.autoScrollMarginBottom || 40, ie = p.autoScrollMarginLeft || 40, ae = p.clickableTest || Va, le = 0, se = h._gsap || xe.core.getCache(h), ce = function _isFixed(e) {
            return "fixed" === Na(e).position || ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0)
        }(h), de = h.ownerDocument || ye, pe = function isTweening() {
            return q.tween && q.tween.isActive()
        }, ue = function onMove(e) {
            var t, n, o, r, i, a, l = e;
            if (u && !Ee && q.isPressed && e) {
                if (t = (q.pointerEvent = e).changedTouches) {
                    if ((e = t[0]) !== x && e.identifier !== m) {
                        for (r = t.length; -1 < --r && (e = t[r]).identifier !== m && e.target !== h; )
                            ;
                        if (r < 0)
                            return
                    }
                } else if (e.pointerId && m && e.pointerId !== m)
                    return;
                v && B && !O && (Ge.x = e.pageX - (ce ? Ga(de) : 0),
                    Ge.y = e.pageY - (ce ? Fa(de) : 0),
                k && k.apply(Ge, Ge),
                    n = Ge.x,
                    o = Ge.y,
                ((i = Math.abs(n - w)) !== (a = Math.abs(o - b)) && (j < i || j < a) || _e && B === O) && (O = a < i && V ? "x" : "y",
                B && O !== B && za(me, "touchforcechange", Ba),
                !1 !== q.vars.lockAxisOnTouchScroll && V && U && (q.lockedAxis = "x" === O ? "y" : "x",
                Z(q.vars.onLockAxis) && q.vars.onLockAxis.call(q, l)),
                _e && B === O)) ? fe(l) : (F = q.allowEventDefault || B && (!O || B === O) || !1 === l.cancelable ? F && !1 : (Ba(l),
                    !0),
                q.autoScroll && (te = !0),
                    he(e.pageX, e.pageY, s))
            } else
                F && e && u && Ba(e)
        }, he = function setPointerPosition(e, t, n) {
            var o, r, i, a, l, s, c = 1 - q.dragResistance, d = 1 - q.edgeResistance, p = q.pointerX, u = q.pointerY, h = D, f = q.x, g = q.y, x = q.endX, m = q.endY, y = q.endRotation, v = Y;
            q.pointerX = e,
                q.pointerY = t,
            ce && (e -= Ga(de),
                t -= Fa(de)),
                Q ? (a = Math.atan2(X.y - t, e - X.x) * ke,
                    180 < (l = q.y - a) ? (D -= 360,
                        q.y = a) : l < -180 && (D += 360,
                        q.y = a),
                    i = q.x !== T || Math.abs(D - a) > j ? (q.y = a,
                    T + (D - a) * c) : T) : (k && (s = e * k.a + t * k.c + k.e,
                    t = e * k.b + t * k.d + k.f,
                    e = s),
                (r = t - b) < j && -j < r && (r = 0),
                (o = e - w) < j && -j < o && (o = 0),
                (q.lockAxis || q.lockedAxis) && (o || r) && ((s = q.lockedAxis) || (q.lockedAxis = s = V && Math.abs(o) > Math.abs(r) ? "y" : U ? "x" : null,
                s && Z(q.vars.onLockAxis) && q.vars.onLockAxis.call(q, q.pointerEvent)),
                    "y" === s ? r = 0 : "x" === s && (o = 0)),
                    i = da(T + o * c),
                    a = da(D + r * c)),
            (A || C || N) && (q.x !== i || q.y !== a && !Q) && (N && (He.x = i,
                He.y = a,
                s = N(He),
                i = da(s.x),
                a = da(s.y)),
            A && (i = da(A(i))),
            C && (a = da(C(a)))),
            M && (E < i ? i = E + Math.round((i - E) * d) : i < L && (i = L + Math.round((i - L) * d)),
            Q || (S < a ? a = Math.round(S + (a - S) * d) : a < P && (a = Math.round(P + (a - P) * d)))),
            q.x === i && (q.y === a || Q) || (Q ? (q.endRotation = q.x = q.endX = i,
                Y = !0) : (U && (q.y = q.endY = a,
                Y = !0),
            V && (q.x = q.endX = i,
                Y = !0)),
                n && !1 === Qa(q, "move", "onMove") ? (q.pointerX = p,
                    q.pointerY = u,
                    D = h,
                    q.x = f,
                    q.y = g,
                    q.endX = x,
                    q.endY = m,
                    q.endRotation = y,
                    Y = v) : !q.isDragging && q.isPressed && (q.isDragging = H = !0,
                    Qa(q, "dragstart", "onDragStart")))
        }, fe = function onRelease(e, t) {
            if (u && q.isPressed && (!e || null == m || t || !(e.pointerId && e.pointerId !== m && e.target !== h || e.changedTouches && !function _hasTouchID(e, t) {
                for (var n = e.length; n--; )
                    if (e[n].identifier === t)
                        return !0
            }(e.changedTouches, m)))) {
                q.isPressed = !1;
                var n, o, r, i, a, l = e, s = q.isDragging, c = q.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which), d = xe.delayedCall(.001, Kh);
                if (v ? (Aa(v, "touchend", onRelease),
                    Aa(v, "touchmove", ue),
                    Aa(v, "touchcancel", onRelease),
                    Aa(de, "touchstart", Ea)) : Aa(de, "mousemove", ue),
                    Aa(me, "touchforcechange", Ba),
                Pe && v || (Aa(de, "mouseup", onRelease),
                e && e.target && Aa(e.target, "mouseup", onRelease)),
                    Y = !1,
                s && (ee = Fe = Be(),
                    q.isDragging = !1),
                    xa(zh),
                y && !c)
                    return e && (Aa(e.target, "change", onRelease),
                        q.pointerEvent = l),
                        Wa(J, !1),
                        Qa(q, "release", "onRelease"),
                        Qa(q, "click", "onClick"),
                        void (y = !1);
                for (o = J.length; -1 < --o; )
                    Ma(J[o], "cursor", p.cursor || (!1 !== p.cursor ? Se : null));
                if (Ae--,
                    e) {
                    if ((n = e.changedTouches) && (e = n[0]) !== x && e.identifier !== m) {
                        for (o = n.length; -1 < --o && (e = n[o]).identifier !== m && e.target !== h; )
                            ;
                        if (o < 0 && !t)
                            return
                    }
                    q.pointerEvent = l,
                        q.pointerX = e.pageX,
                        q.pointerY = e.pageY
                }
                return c && l ? (Ba(l),
                    F = !0,
                    Qa(q, "release", "onRelease")) : l && !s ? (F = !1,
                R && (p.snap || p.bounds) && Gh(p.inertia || p.throwProps),
                    Qa(q, "release", "onRelease"),
                _e && "touchmove" === l.type || -1 !== l.type.indexOf("cancel") || (Qa(q, "click", "onClick"),
                Be() - le < 300 && Qa(q, "doubleclick", "onDoubleClick"),
                    i = l.target || h,
                    le = Be(),
                    a = function syntheticClick() {
                        le === I || !q.enabled() || q.isPressed || l.defaultPrevented || (i.click ? i.click() : de.createEvent && ((r = de.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, me, 1, q.pointerEvent.screenX, q.pointerEvent.screenY, q.pointerX, q.pointerY, !1, !1, !1, !1, 0, null),
                            i.dispatchEvent(r)))
                    }
                    ,
                _e || l.defaultPrevented || xe.delayedCall(.05, a))) : (Gh(p.inertia || p.throwProps),
                    q.allowEventDefault || !l || !1 === p.dragClickables && ae.call(q, l.target) || !s || B && (!O || B !== O) || !1 === l.cancelable ? F = !1 : (F = !0,
                        Ba(l)),
                    Qa(q, "release", "onRelease")),
                pe() && d.duration(q.tween.duration()),
                s && Qa(q, "dragend", "onDragEnd"),
                    !0
            }
            F && e && u && Ba(e)
        };
        return (t = Draggable.get(h)) && t.kill(),
            e.startDrag = function(e, t) {
                var n, o, r, i;
                Lh(e || q.pointerEvent, !0),
                t && !q.hitTest(e || q.pointerEvent) && (n = Pa(e || q.pointerEvent),
                    o = Pa(h),
                    r = Rh({
                        x: n.left + n.width / 2,
                        y: n.top + n.height / 2
                    }),
                    i = Rh({
                        x: o.left + o.width / 2,
                        y: o.top + o.height / 2
                    }),
                    w -= r.x - i.x,
                    b -= r.y - i.y),
                q.isDragging || (q.isDragging = H = !0,
                    Qa(q, "dragstart", "onDragStart"))
            }
            ,
            e.drag = ue,
            e.endDrag = function(e) {
                return fe(e || q.pointerEvent, !0)
            }
            ,
            e.timeSinceDrag = function() {
                return q.isDragging ? 0 : (Be() - ee) / 1e3
            }
            ,
            e.timeSinceClick = function() {
                return (Be() - le) / 1e3
            }
            ,
            e.hitTest = function(e, t) {
                return Draggable.hitTest(q.target, e, t)
            }
            ,
            e.getDirection = function(e, t) {
                var n, o, r, i, a, l, s = "velocity" === e && Le ? e : $(e) && !Q ? "element" : "start";
                return "element" === s && (a = Pa(q.target),
                    l = Pa(e)),
                    n = "start" === s ? q.x - T : "velocity" === s ? Le.getVelocity(h, G) : a.left + a.width / 2 - (l.left + l.width / 2),
                    Q ? n < 0 ? "counter-clockwise" : "clockwise" : (t = t || 2,
                        o = "start" === s ? q.y - D : "velocity" === s ? Le.getVelocity(h, K) : a.top + a.height / 2 - (l.top + l.height / 2),
                        i = (r = Math.abs(n / o)) < 1 / t ? "" : n < 0 ? "left" : "right",
                    r < t && ("" !== i && (i += "-"),
                        i += o < 0 ? "up" : "down"),
                        i)
            }
            ,
            e.applyBounds = function(e, t) {
                var n, o, r, i, a, l;
                if (e && p.bounds !== e)
                    return p.bounds = e,
                        q.update(!0, t);
                if (Ah(!0),
                    Dh(),
                M && !pe()) {
                    if (n = q.x,
                        o = q.y,
                        E < n ? n = E : n < L && (n = L),
                        S < o ? o = S : o < P && (o = P),
                    (q.x !== n || q.y !== o) && (r = !0,
                        q.x = q.endX = n,
                        Q ? q.endRotation = n : q.y = q.endY = o,
                        zh(Y = !0),
                    q.autoScroll && !q.isDragging))
                        for (La(h.parentNode),
                                 i = h,
                                 We.scrollTop = null != me.pageYOffset ? me.pageYOffset : null != de.documentElement.scrollTop ? de.documentElement.scrollTop : de.body.scrollTop,
                                 We.scrollLeft = null != me.pageXOffset ? me.pageXOffset : null != de.documentElement.scrollLeft ? de.documentElement.scrollLeft : de.body.scrollLeft; i && !l; )
                            a = (l = Qe(i.parentNode)) ? We : i.parentNode,
                            U && a.scrollTop > a._gsMaxScrollY && (a.scrollTop = a._gsMaxScrollY),
                            V && a.scrollLeft > a._gsMaxScrollX && (a.scrollLeft = a._gsMaxScrollX),
                                i = a;
                    q.isThrowing && (r || q.endX > E || q.endX < L || q.endY > S || q.endY < P) && Gh(p.inertia || p.throwProps, r)
                }
                return q
            }
            ,
            e.update = function(e, t, n) {
                if (t && q.isPressed) {
                    var o = getGlobalMatrix(h)
                        , r = d.apply({
                        x: q.x - T,
                        y: q.y - D
                    })
                        , i = getGlobalMatrix(h.parentNode, !0);
                    i.apply({
                        x: o.e - r.x,
                        y: o.f - r.y
                    }, r),
                        q.x -= r.x - i.e,
                        q.y -= r.y - i.f,
                        zh(!0),
                        Ih()
                }
                var a = q.x
                    , l = q.y;
                return Hh(!t),
                    e ? q.applyBounds() : (Y && n && zh(!0),
                        Ah(!0)),
                t && (he(q.pointerX, q.pointerY),
                Y && zh(!0)),
                q.isPressed && !t && (V && .01 < Math.abs(a - q.x) || U && .01 < Math.abs(l - q.y) && !Q) && Ih(),
                q.autoScroll && (La(h.parentNode, q.isDragging),
                    te = q.isDragging,
                    zh(!0),
                    Ia(h, Ph),
                    Ha(h, Ph)),
                    q
            }
            ,
            e.enable = function(e) {
                var t, n, o, r = {
                    lazy: !0
                };
                if (!1 !== p.cursor && (r.cursor = p.cursor || Se),
                xe.utils.checkPrefix("touchCallout") && (r.touchCallout = "none"),
                "soft" !== e) {
                    for (ta(J, V == U ? "none" : p.allowNativeTouchScrolling && h.scrollHeight === h.clientHeight == (h.scrollWidth === h.clientHeight) || p.allowEventDefault ? "manipulation" : V ? "pan-y" : "pan-x"),
                             n = J.length; -1 < --n; )
                        o = J[n],
                        Pe || za(o, "mousedown", Lh),
                            za(o, "touchstart", Lh),
                            za(o, "click", Qh, !0),
                            xe.set(o, r),
                        o.getBBox && o.ownerSVGElement && V != U && xe.set(o.ownerSVGElement, {
                            touchAction: p.allowNativeTouchScrolling || p.allowEventDefault ? "manipulation" : V ? "pan-y" : "pan-x"
                        }),
                        p.allowContextMenu || za(o, "contextmenu", yh);
                    Wa(J, !1)
                }
                return Ha(h, Ph),
                    u = !0,
                Le && "soft" !== e && Le.track(f || h, W ? "x,y" : Q ? "rotation" : "top,left"),
                    h._gsDragID = t = "d" + Ie++,
                    ze[t] = q,
                f && (f.enable(),
                    f.element._gsDragID = t),
                (p.bounds || Q) && Ih(),
                p.bounds && q.applyBounds(),
                    q
            }
            ,
            e.disable = function(e) {
                for (var t, n = q.isDragging, o = J.length; -1 < --o; )
                    Ma(J[o], "cursor", null);
                if ("soft" !== e) {
                    for (ta(J, null),
                             o = J.length; -1 < --o; )
                        t = J[o],
                            Ma(t, "touchCallout", null),
                            Aa(t, "mousedown", Lh),
                            Aa(t, "touchstart", Lh),
                            Aa(t, "click", Qh, !0),
                            Aa(t, "contextmenu", yh);
                    Wa(J, !0),
                    v && (Aa(v, "touchcancel", fe),
                        Aa(v, "touchend", fe),
                        Aa(v, "touchmove", ue)),
                        Aa(de, "mouseup", fe),
                        Aa(de, "mousemove", ue)
                }
                return Ia(h, Ph),
                    u = !1,
                Le && "soft" !== e && (Le.untrack(f || h, W ? "x,y" : Q ? "rotation" : "top,left"),
                q.tween && q.tween.kill()),
                f && f.disable(),
                    xa(zh),
                    q.isDragging = q.isPressed = y = !1,
                n && Qa(q, "dragend", "onDragEnd"),
                    q
            }
            ,
            e.enabled = function(e, t) {
                return arguments.length ? e ? q.enable(t) : q.disable(t) : u
            }
            ,
            e.kill = function() {
                return q.isThrowing = !1,
                q.tween && q.tween.kill(),
                    q.disable(),
                    xe.set(J, {
                        clearProps: "userSelect"
                    }),
                    delete ze[h._gsDragID],
                    q
            }
            ,
            e.revert = function() {
                this.kill(),
                this.styles && this.styles.revert()
            }
            ,
        ~n.indexOf("scroll") && (f = e.scrollProxy = new $a(h,function _extend(e, t) {
            for (var n in t)
                n in e || (e[n] = t[n]);
            return e
        }({
            onKill: function onKill() {
                q.isPressed && fe(null)
            }
        }, p)),
            h.style.overflowY = U && !De ? "auto" : "hidden",
            h.style.overflowX = V && !De ? "auto" : "hidden",
            h = f.content),
            Q ? o.rotation = 1 : (V && (o[G] = 1),
            U && (o[K] = 1)),
            se.force3D = !("force3D"in p) || p.force3D,
            Xe(_assertThisInitialized(e)),
            e.enable(),
            e
    }
    !function _setDefaults(e, t) {
        for (var n in t)
            n in e || (e[n] = t[n])
    }(I.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: !1,
        isPressed: !1
    }),
        I.zIndex = 1e3,
        I.version = "3.12.5",
    Y() && xe.registerPlugin(I),
        e.Draggable = I,
        e.default = I;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
