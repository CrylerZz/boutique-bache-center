/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(a) {
    "use strict";
    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
                r.configurable = !0,
            "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
        }
    }
    function r() {
        return Me || "undefined" != typeof window && (Me = window.gsap) && Me.registerPlugin && Me
    }
    var Me, Pe, Ae, De, Ee, Oe, Ye, ze, Xe, t, qe, Te, ke, o = 1, Ce = [];
    a._scrollers = [],
        a._proxies = [];
    function x(e, t) {
        return ~a._proxies.indexOf(e) && a._proxies[a._proxies.indexOf(e) + 1][t]
    }
    function y(e) {
        return !!~t.indexOf(e)
    }
    function z(e, t, n, r, o) {
        return e.addEventListener(t, n, {
            passive: !1 !== r,
            capture: !!o
        })
    }
    function A(e, t, n, r) {
        return e.removeEventListener(t, n, !!r)
    }
    function D() {
        return qe && qe.isPressed || a._scrollers.cache++
    }
    function E(n, r) {
        function qa(e) {
            if (e || 0 === e) {
                o && (Ae.history.scrollRestoration = "manual");
                var t = qe && qe.isPressed;
                e = qa.v = Math.round(e) || (qe && qe.iOS ? 1 : 0),
                    n(e),
                    qa.cacheID = a._scrollers.cache,
                t && i("ss", e)
            } else
                (r || a._scrollers.cache !== qa.cacheID || i("ref")) && (qa.cacheID = a._scrollers.cache,
                    qa.v = n());
            return qa.v + qa.offset
        }
        return qa.offset = 0,
        n && qa
    }
    function H(e, t) {
        return (t && t._ctx && t._ctx.selector || Me.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== Me.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }
    function I(t, e) {
        var n = e.s
            , r = e.sc;
        y(t) && (t = De.scrollingElement || Ee);
        var o = a._scrollers.indexOf(t)
            , i = r === Le.sc ? 1 : 2;
        ~o || (o = a._scrollers.push(t) - 1),
        a._scrollers[o + i] || z(t, "scroll", D);
        var s = a._scrollers[o + i]
            , c = s || (a._scrollers[o + i] = E(x(t, n), !0) || (y(t) ? r : E(function(e) {
            return arguments.length ? t[n] = e : t[n]
        })));
        return c.target = t,
        s || (c.smooth = "smooth" === Me.getProperty(t, "scrollBehavior")),
            c
    }
    function J(e, t, o) {
        function Pa(e, t) {
            var n = Se();
            t || r < n - c ? (s = i,
                i = e,
                a = c,
                c = n) : o ? i += e : i = s + (e - s) / (n - a) * (c - a)
        }
        var i = e
            , s = e
            , c = Se()
            , a = c
            , r = t || 50
            , l = Math.max(500, 3 * r);
        return {
            update: Pa,
            reset: function reset() {
                s = i = o ? 0 : i,
                    a = c = 0
            },
            getVelocity: function getVelocity(e) {
                var t = a
                    , n = s
                    , r = Se();
                return !e && 0 !== e || e === i || Pa(e),
                    c === a || l < r - a ? 0 : (i + (o ? n : -n)) / ((o ? r : c) - t) * 1e3
            }
        }
    }
    function K(e, t) {
        return t && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
    }
    function L(e) {
        var t = Math.max.apply(Math, e)
            , n = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(n) ? t : n
    }
    function M() {
        (Xe = Me.core.globals().ScrollTrigger) && Xe.core && function _integrate() {
            var e = Xe.core
                , n = e.bridge || {}
                , t = e._scrollers
                , r = e._proxies;
            t.push.apply(t, a._scrollers),
                r.push.apply(r, a._proxies),
                a._scrollers = t,
                a._proxies = r,
                i = function _bridge(e, t) {
                    return n[e](t)
                }
        }()
    }
    function N(e) {
        return Me = e || r(),
        !Pe && Me && "undefined" != typeof document && document.body && (Ae = window,
            Ee = (De = document).documentElement,
            Oe = De.body,
            t = [Ae, De, Ee, Oe],
            Me.utils.clamp,
            ke = Me.core.context || function() {}
            ,
            ze = "onpointerenter"in Oe ? "pointer" : "mouse",
            Ye = c.isTouch = Ae.matchMedia && Ae.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Ae || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0,
            Te = c.eventTypes = ("ontouchstart"in Ee ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Ee ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
            setTimeout(function() {
                return o = 0
            }, 500),
            M(),
            Pe = 1),
            Pe
    }
    var Se = Date.now
        , i = function _bridge(e, t) {
        return t
    }
        , n = "scrollLeft"
        , s = "scrollTop"
        , He = {
        s: n,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: E(function(e) {
            return arguments.length ? Ae.scrollTo(e, Le.sc()) : Ae.pageXOffset || De[n] || Ee[n] || Oe[n] || 0
        })
    }
        , Le = {
        s: s,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: He,
        sc: E(function(e) {
            return arguments.length ? Ae.scrollTo(He.sc(), e) : Ae.pageYOffset || De[s] || Ee[s] || Oe[s] || 0
        })
    };
    He.op = Le,
        a._scrollers.cache = 0;
    var c = (Observer.prototype.init = function init(e) {
        Pe || N(Me) || console.warn("Please gsap.registerPlugin(Observer)"),
        Xe || M();
        var o = e.tolerance
            , s = e.dragMinimum
            , t = e.type
            , i = e.target
            , n = e.lineHeight
            , r = e.debounce
            , c = e.preventDefault
            , a = e.onStop
            , l = e.onStopDelay
            , u = e.ignore
            , f = e.wheelSpeed
            , d = e.event
            , g = e.onDragStart
            , p = e.onDragEnd
            , v = e.onDrag
            , h = e.onPress
            , _ = e.onRelease
            , x = e.onRight
            , m = e.onLeft
            , b = e.onUp
            , w = e.onDown
            , P = e.onChangeX
            , E = e.onChangeY
            , O = e.onChange
            , Y = e.onToggleX
            , X = e.onToggleY
            , q = e.onHover
            , T = e.onHoverEnd
            , k = e.onMove
            , C = e.ignoreCheck
            , S = e.isNormalizer
            , F = e.onGestureStart
            , B = e.onGestureEnd
            , G = e.onWheel
            , V = e.onEnable
            , R = e.onDisable
            , j = e.onClick
            , W = e.scrollSpeed
            , U = e.capture
            , Q = e.allowClicks
            , Z = e.lockAxis
            , $ = e.onLockAxis;
        function pc() {
            return me = Se()
        }
        function qc(e, t) {
            return (ce.event = e) && u && ~u.indexOf(e.target) || t && ve && "touch" !== e.pointerType || C && C(e, t)
        }
        function sc() {
            var e = ce.deltaX = L(_e)
                , t = ce.deltaY = L(xe)
                , n = Math.abs(e) >= o
                , r = Math.abs(t) >= o;
            O && (n || r) && O(ce, e, t, _e, xe),
            n && (x && 0 < ce.deltaX && x(ce),
            m && ce.deltaX < 0 && m(ce),
            P && P(ce),
            Y && ce.deltaX < 0 != ae < 0 && Y(ce),
                ae = ce.deltaX,
                _e[0] = _e[1] = _e[2] = 0),
            r && (w && 0 < ce.deltaY && w(ce),
            b && ce.deltaY < 0 && b(ce),
            E && E(ce),
            X && ce.deltaY < 0 != le < 0 && X(ce),
                le = ce.deltaY,
                xe[0] = xe[1] = xe[2] = 0),
            (re || ne) && (k && k(ce),
            ne && (v(ce),
                ne = !1),
                re = !1),
            ie && !(ie = !1) && $ && $(ce),
            oe && (G(ce),
                oe = !1),
                ee = 0
        }
        function tc(e, t, n) {
            _e[n] += e,
                xe[n] += t,
                ce._vx.update(e),
                ce._vy.update(t),
                r ? ee = ee || requestAnimationFrame(sc) : sc()
        }
        function uc(e, t) {
            Z && !se && (ce.axis = se = Math.abs(e) > Math.abs(t) ? "x" : "y",
                ie = !0),
            "y" !== se && (_e[2] += e,
                ce._vx.update(e, !0)),
            "x" !== se && (xe[2] += t,
                ce._vy.update(t, !0)),
                r ? ee = ee || requestAnimationFrame(sc) : sc()
        }
        function vc(e) {
            if (!qc(e, 1)) {
                var t = (e = K(e, c)).clientX
                    , n = e.clientY
                    , r = t - ce.x
                    , o = n - ce.y
                    , i = ce.isDragging;
                ce.x = t,
                    ce.y = n,
                (i || Math.abs(ce.startX - t) >= s || Math.abs(ce.startY - n) >= s) && (v && (ne = !0),
                i || (ce.isDragging = !0),
                    uc(r, o),
                i || g && g(ce))
            }
        }
        function yc(e) {
            return e.touches && 1 < e.touches.length && (ce.isGesturing = !0) && F(e, ce.isDragging)
        }
        function zc() {
            return (ce.isGesturing = !1) || B(ce)
        }
        function Ac(e) {
            if (!qc(e)) {
                var t = fe()
                    , n = de();
                tc((t - ge) * W, (n - pe) * W, 1),
                    ge = t,
                    pe = n,
                a && te.restart(!0)
            }
        }
        function Bc(e) {
            if (!qc(e)) {
                e = K(e, c),
                G && (oe = !0);
                var t = (1 === e.deltaMode ? n : 2 === e.deltaMode ? Ae.innerHeight : 1) * f;
                tc(e.deltaX * t, e.deltaY * t, 0),
                a && !S && te.restart(!0)
            }
        }
        function Cc(e) {
            if (!qc(e)) {
                var t = e.clientX
                    , n = e.clientY
                    , r = t - ce.x
                    , o = n - ce.y;
                ce.x = t,
                    ce.y = n,
                    re = !0,
                a && te.restart(!0),
                (r || o) && uc(r, o)
            }
        }
        function Dc(e) {
            ce.event = e,
                q(ce)
        }
        function Ec(e) {
            ce.event = e,
                T(ce)
        }
        function Fc(e) {
            return qc(e) || K(e, c) && j(ce)
        }
        this.target = i = H(i) || Ee,
            this.vars = e,
            u = u && Me.utils.toArray(u),
            o = o || 1e-9,
            s = s || 0,
            f = f || 1,
            W = W || 1,
            t = t || "wheel,touch,pointer",
            r = !1 !== r,
            n = n || parseFloat(Ae.getComputedStyle(Oe).lineHeight) || 22;
        var ee, te, ne, re, oe, ie, se, ce = this, ae = 0, le = 0, ue = e.passive || !c, fe = I(i, He), de = I(i, Le), ge = fe(), pe = de(), ve = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === Te[0], he = y(i), ye = i.ownerDocument || De, _e = [0, 0, 0], xe = [0, 0, 0], me = 0, be = ce.onPress = function(e) {
                qc(e, 1) || e && e.button || (ce.axis = se = null,
                    te.pause(),
                    ce.isPressed = !0,
                    e = K(e),
                    ae = le = 0,
                    ce.startX = ce.x = e.clientX,
                    ce.startY = ce.y = e.clientY,
                    ce._vx.reset(),
                    ce._vy.reset(),
                    z(S ? i : ye, Te[1], vc, ue, !0),
                    ce.deltaX = ce.deltaY = 0,
                h && h(ce))
            }
            , we = ce.onRelease = function(t) {
                if (!qc(t, 1)) {
                    A(S ? i : ye, Te[1], vc, !0);
                    var e = !isNaN(ce.y - ce.startY)
                        , n = ce.isDragging
                        , r = n && (3 < Math.abs(ce.x - ce.startX) || 3 < Math.abs(ce.y - ce.startY))
                        , o = K(t);
                    !r && e && (ce._vx.reset(),
                        ce._vy.reset(),
                    c && Q && Me.delayedCall(.08, function() {
                        if (300 < Se() - me && !t.defaultPrevented)
                            if (t.target.click)
                                t.target.click();
                            else if (ye.createEvent) {
                                var e = ye.createEvent("MouseEvents");
                                e.initMouseEvent("click", !0, !0, Ae, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null),
                                    t.target.dispatchEvent(e)
                            }
                    })),
                        ce.isDragging = ce.isGesturing = ce.isPressed = !1,
                    a && n && !S && te.restart(!0),
                    p && n && p(ce),
                    _ && _(ce, r)
                }
            }
        ;
        te = ce._dc = Me.delayedCall(l || .25, function onStopFunc() {
            ce._vx.reset(),
                ce._vy.reset(),
                te.pause(),
            a && a(ce)
        }).pause(),
            ce.deltaX = ce.deltaY = 0,
            ce._vx = J(0, 50, !0),
            ce._vy = J(0, 50, !0),
            ce.scrollX = fe,
            ce.scrollY = de,
            ce.isDragging = ce.isGesturing = ce.isPressed = !1,
            ke(this),
            ce.enable = function(e) {
                return ce.isEnabled || (z(he ? ye : i, "scroll", D),
                0 <= t.indexOf("scroll") && z(he ? ye : i, "scroll", Ac, ue, U),
                0 <= t.indexOf("wheel") && z(i, "wheel", Bc, ue, U),
                (0 <= t.indexOf("touch") && Ye || 0 <= t.indexOf("pointer")) && (z(i, Te[0], be, ue, U),
                    z(ye, Te[2], we),
                    z(ye, Te[3], we),
                Q && z(i, "click", pc, !0, !0),
                j && z(i, "click", Fc),
                F && z(ye, "gesturestart", yc),
                B && z(ye, "gestureend", zc),
                q && z(i, ze + "enter", Dc),
                T && z(i, ze + "leave", Ec),
                k && z(i, ze + "move", Cc)),
                    ce.isEnabled = !0,
                e && e.type && be(e),
                V && V(ce)),
                    ce
            }
            ,
            ce.disable = function() {
                ce.isEnabled && (Ce.filter(function(e) {
                    return e !== ce && y(e.target)
                }).length || A(he ? ye : i, "scroll", D),
                ce.isPressed && (ce._vx.reset(),
                    ce._vy.reset(),
                    A(S ? i : ye, Te[1], vc, !0)),
                    A(he ? ye : i, "scroll", Ac, U),
                    A(i, "wheel", Bc, U),
                    A(i, Te[0], be, U),
                    A(ye, Te[2], we),
                    A(ye, Te[3], we),
                    A(i, "click", pc, !0),
                    A(i, "click", Fc),
                    A(ye, "gesturestart", yc),
                    A(ye, "gestureend", zc),
                    A(i, ze + "enter", Dc),
                    A(i, ze + "leave", Ec),
                    A(i, ze + "move", Cc),
                    ce.isEnabled = ce.isPressed = ce.isDragging = !1,
                R && R(ce))
            }
            ,
            ce.kill = ce.revert = function() {
                ce.disable();
                var e = Ce.indexOf(ce);
                0 <= e && Ce.splice(e, 1),
                qe === ce && (qe = 0)
            }
            ,
            Ce.push(ce),
        S && y(i) && (qe = ce),
            ce.enable(d)
    }
        ,
        function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t),
            n && _defineProperties(e, n),
                e
        }(Observer, [{
            key: "velocityX",
            get: function get() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function get() {
                return this._vy.getVelocity()
            }
        }]),
        Observer);
    function Observer(e) {
        this.init(e)
    }
    c.version = "3.12.5",
        c.create = function(e) {
            return new c(e)
        }
        ,
        c.register = N,
        c.getAll = function() {
            return Ce.slice()
        }
        ,
        c.getById = function(t) {
            return Ce.filter(function(e) {
                return e.vars.id === t
            })[0]
        }
        ,
    r() && Me.registerPlugin(c),
        a.Observer = c,
        a._getProxyProp = x,
        a._getScrollFunc = I,
        a._getTarget = H,
        a._getVelocityProp = J,
        a._horizontal = He,
        a._isViewport = y,
        a._vertical = Le,
        a.default = c;
    if (typeof (window) === "undefined" || window !== a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    } else {
        delete a.default
    }
});
