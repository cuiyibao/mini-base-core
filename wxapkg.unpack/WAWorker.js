var __wxLibrary = { fileName: 'WAWorker.js', envType: 'Worker', contextType: 'others', execStart: Date.now() };
(function(global) {;
    var __libVersionInfo__ = { "updateTime": "2020.9.28 19:58:13", "version": "2.13.1", "features": { "pruneWxConfigByPage": true, "injectGameContextPlugin": true, "lazyCodeLoading2": true, "injectAppSeparatedPlugin": true, "nativeTrans": true } };;
    var __Function__ = global.Function;
    var Function = __Function__;
    ! function(r, o, ze) {
        "use strict";

        function a(e) { if (i[e]) return i[e].exports; var t = i[e] = { i: e, l: !1, exports: {} }; return n[e].call(t.exports, t, t.exports, a), t.l = !0, t.exports }
        var n, i;
        i = {}, a.m = n = [function(e, t, n) {
            var v = n(3),
                g = n(30),
                b = n(14),
                y = n(11),
                m = n(16),
                w = "prototype",
                _ = function(e, t, n) {
                    var r, o, a, i, c = e & _.F,
                        u = e & _.G,
                        s = e & _.S,
                        l = e & _.P,
                        f = e & _.B,
                        d = u ? v : s ? v[t] || (v[t] = {}) : (v[t] || {})[w],
                        p = u ? g : g[t] || (g[t] = {}),
                        h = p[w] || (p[w] = {});
                    for (r in u && (n = t), n) a = ((o = !c && d && d[r] !== ze) ? d : n)[r], i = f && o ? m(a, v) : l && "function" == typeof a ? m(Function.call, a) : a, d && y(d, r, a, e & _.U), p[r] != a && b(p, r, i), l && h[r] != a && (h[r] = a)
                };
            v.core = g, _.F = 1, _.G = 2, _.S = 4, _.P = 8, _.B = 16, _.W = 32, _.U = 64, _.R = 128, e.exports = _
        }, function(e, t) { e.exports = function(e) { try { return !!e() } catch (e) { return !0 } } }, function(e, t) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } }, function(e, t) { var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof o && (o = n) }, function(e, t, n) {
            var r = n(2);
            e.exports = function(e) { if (!r(e)) throw TypeError(e + " is not an object!"); return e }
        }, function(e, t, n) {
            var r = n(57)("wks"),
                o = n(31),
                a = n(3).Symbol,
                i = "function" == typeof a;
            (e.exports = function(e) { return r[e] || (r[e] = i && a[e] || (i ? a : o)("Symbol." + e)) }).store = r
        }, function(e, t, n) {
            var r = n(4),
                o = n(79),
                a = n(24),
                i = Object.defineProperty;
            t.f = n(7) ? Object.defineProperty : function(e, t, n) {
                if (r(e), t = a(t, !0), r(n), o) try { return i(e, t, n) } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        }, function(e, t, n) { e.exports = !n(1)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(e, t, n) {
            var r = n(21),
                o = Math.min;
            e.exports = function(e) { return 0 < e ? o(r(e), 9007199254740991) : 0 }
        }, function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) { return n.call(e, t) }
        }, function(e, t, n) {
            function r(e, t, n, r) {
                var o = String(i(e)),
                    a = "<" + t;
                return "" !== n && (a += " " + n + '="' + String(r).replace(c, "&quot;") + '"'), a + ">" + o + "</" + t + ">"
            }
            var o = n(0),
                a = n(1),
                i = n(26),
                c = /"/g;
            e.exports = function(t, e) {
                var n = {};
                n[t] = e(r), o(o.P + o.F * a(function() { var e = "" [t]('"'); return e !== e.toLowerCase() || 3 < e.split('"').length }), "String", n)
            }
        }, function(e, t, n) {
            var a = n(3),
                i = n(14),
                c = n(9),
                u = n(31)("src"),
                r = "toString",
                o = Function[r],
                s = ("" + o).split(r);
            n(30).inspectSource = function(e) { return o.call(e) }, (e.exports = function(e, t, n, r) {
                var o = "function" == typeof n;
                o && (c(n, "name") || i(n, "name", t)), e[t] !== n && (o && (c(n, u) || i(n, u, e[t] ? "" + e[t] : s.join(String(t)))), e === a ? e[t] = n : r ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
            })(Function.prototype, r, function() { return "function" == typeof this && this[u] || o.call(this) })
        }, function(e, t, n) {
            var r = n(42),
                o = n(26);
            e.exports = function(e) { return r(o(e)) }
        }, function(e, t, n) {
            var r = n(26);
            e.exports = function(e) { return Object(r(e)) }
        }, function(e, t, n) {
            var r = n(6),
                o = n(25);
            e.exports = n(7) ? function(e, t, n) { return r.f(e, t, o(1, n)) } : function(e, t, n) { return e[t] = n, e }
        }, function(e, t, n) {
            var r = n(1);
            e.exports = function(e, t) { return !!e && r(function() { t ? e.call(null, function() {}, 1) : e.call(null) }) }
        }, function(e, t, n) {
            var a = n(17);
            e.exports = function(r, o, e) {
                if (a(r), o === ze) return r;
                switch (e) {
                    case 1:
                        return function(e) { return r.call(o, e) };
                    case 2:
                        return function(e, t) { return r.call(o, e, t) };
                    case 3:
                        return function(e, t, n) { return r.call(o, e, t, n) }
                }
                return function() { return r.apply(o, arguments) }
            }
        }, function(e, t) { e.exports = function(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e } }, function(e, t, n) {
            var o = n(0),
                a = n(30),
                i = n(1);
            e.exports = function(e, t) {
                var n = (a.Object || {})[e] || Object[e],
                    r = {};
                r[e] = t(n), o(o.S + o.F * i(function() { n(1) }), "Object", r)
            }
        }, function(e, t, n) {
            var m = n(16),
                w = n(42),
                _ = n(13),
                k = n(8),
                r = n(202);
            e.exports = function(f, e) {
                var d = 1 == f,
                    p = 2 == f,
                    h = 3 == f,
                    v = 4 == f,
                    g = 6 == f,
                    b = 5 == f || g,
                    y = e || r;
                return function(e, t, n) {
                    for (var r, o, a = _(e), i = w(a), c = m(t, n, 3), u = k(i.length), s = 0, l = d ? y(e, u) : p ? y(e, 0) : ze; s < u; s++)
                        if ((b || s in i) && (o = c(r = i[s], s, a), f))
                            if (d) l[s] = o;
                            else if (o) switch (f) {
                            case 3:
                                return !0;
                            case 5:
                                return r;
                            case 6:
                                return s;
                            case 2:
                                l.push(r)
                        } else if (v) return !1;
                    return g ? -1 : h || v ? v : l
                }
            }
        }, function(e, t) {
            var n = {}.toString;
            e.exports = function(e) { return n.call(e).slice(8, -1) }
        }, function(e, t) {
            var n = Math.ceil,
                r = Math.floor;
            e.exports = function(e) { return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e) }
        }, function(e, t, n) {
            var r = n(47),
                o = n(25),
                a = n(12),
                i = n(24),
                c = n(9),
                u = n(79),
                s = Object.getOwnPropertyDescriptor;
            t.f = n(7) ? s : function(e, t) {
                if (e = a(e), t = i(t, !0), u) try { return s(e, t) } catch (e) {}
                if (c(e, t)) return o(!r.f.call(e, t), e[t])
            }
        }, function(e, t, n) {
            var b, y, m, w, _, r, h, k, o, S, a, i, I, O, c, u, s, A, C, v, g, j, P, M, T, l, f, d, p, x, E, D, R, B, F, L, N, W, V, U, G, q, H, K, z, J, Q, X, Y, Z, $, ee, te, ne, re, oe, ae, ie, ce, ue, se, le, fe, de, pe, he, ve, ge, be, ye, me, we, _e, ke, Se, Ie, Oe, Ae, Ce, je, Pe, Me, Te, xe, Ee, De, Re, Be, Fe, Le, Ne, We, Ve, Ue, Ge, qe, He, Ke;
            n(7) ? (b = n(37), y = n(3), m = n(1), w = n(0), _ = n(52), r = n(76), h = n(16), k = n(40), o = n(25), S = n(14), a = n(39), i = n(21), I = n(8), O = n(101), c = n(33), u = n(24), s = n(9), A = n(44), C = n(2), v = n(13), g = n(60), j = n(27), P = n(28), M = n(34).f, T = n(61), l = n(31), f = n(5), d = n(19), p = n(55), x = n(77), E = n(97), D = n(35), R = n(49), B = n(38), F = n(74), L = n(96), N = n(6), W = n(22), V = N.f, U = W.f, G = y.RangeError, q = y.TypeError, H = y.Uint8Array, z = "Shared" + (K = "ArrayBuffer"), J = "BYTES_PER_ELEMENT", Q = "prototype", X = Array[Q], Y = r.ArrayBuffer, Z = r.DataView, $ = d(0), ee = d(2), te = d(3), ne = d(4), re = d(5), oe = d(6), ae = p(!0), ie = p(!1), ce = E.values, ue = E.keys, se = E.entries, le = X.lastIndexOf, fe = X.reduce, de = X.reduceRight, pe = X.join, he = X.sort, ve = X.slice, ge = X.toString, be = X.toLocaleString, ye = f("iterator"), me = f("toStringTag"), we = l("typed_constructor"), _e = l("def_constructor"), ke = _.CONSTR, Se = _.TYPED, Ie = _.VIEW, Oe = "Wrong length!", Ae = d(1, function(e, t) { return Te(x(e, e[_e]), t) }), Ce = m(function() { return 1 === new H(new Uint16Array([1]).buffer)[0] }), je = !!H && !!H[Q].set && m(function() { new H(1).set({}) }), Pe = function(e, t) { var n = i(e); if (n < 0 || n % t) throw G("Wrong offset!"); return n }, Me = function(e) { if (C(e) && Se in e) return e; throw q(e + " is not a typed array!") }, Te = function(e, t) { if (!(C(e) && we in e)) throw q("It is not a typed array constructor!"); return new e(t) }, xe = function(e, t) { return Ee(x(e, e[_e]), t) }, Ee = function(e, t) { for (var n = 0, r = t.length, o = Te(e, r); n < r;) o[n] = t[n++]; return o }, De = function(e, t, n) { V(e, t, { get: function() { return this._d[n] } }) }, Re = function(e, t, n) {
                var r, o, a, i, c, u, s = v(e),
                    l = arguments.length,
                    f = 1 < l ? t : ze,
                    d = f !== ze,
                    p = T(s);
                if (p != ze && !g(p)) {
                    for (u = p.call(s), a = [], r = 0; !(c = u.next()).done; r++) a.push(c.value);
                    s = a
                }
                for (d && 2 < l && (f = h(f, n, 2)), r = 0, o = I(s.length), i = Te(this, o); r < o; r++) i[r] = d ? f(s[r], r) : s[r];
                return i
            }, Be = function() { for (var e = 0, t = arguments.length, n = Te(this, t); e < t;) n[e] = arguments[e++]; return n }, Fe = !!H && m(function() { be.call(new H(1)) }), Le = function() { return be.apply(Fe ? ve.call(Me(this)) : Me(this), arguments) }, Ne = {
                copyWithin: function(e, t, n) { return L.call(Me(this), e, t, 2 < arguments.length ? n : ze) },
                every: function(e, t) { return ne(Me(this), e, 1 < arguments.length ? t : ze) },
                fill: function(e) { return F.apply(Me(this), arguments) },
                filter: function(e, t) { return xe(this, ee(Me(this), e, 1 < arguments.length ? t : ze)) },
                find: function(e, t) { return re(Me(this), e, 1 < arguments.length ? t : ze) },
                findIndex: function(e, t) { return oe(Me(this), e, 1 < arguments.length ? t : ze) },
                forEach: function(e, t) { $(Me(this), e, 1 < arguments.length ? t : ze) },
                indexOf: function(e, t) { return ie(Me(this), e, 1 < arguments.length ? t : ze) },
                includes: function(e, t) { return ae(Me(this), e, 1 < arguments.length ? t : ze) },
                join: function(e) { return pe.apply(Me(this), arguments) },
                lastIndexOf: function(e) { return le.apply(Me(this), arguments) },
                map: function(e, t) { return Ae(Me(this), e, 1 < arguments.length ? t : ze) },
                reduce: function(e) { return fe.apply(Me(this), arguments) },
                reduceRight: function(e) { return de.apply(Me(this), arguments) },
                reverse: function() { for (var e, t = this, n = Me(t).length, r = Math.floor(n / 2), o = 0; o < r;) e = t[o], t[o++] = t[--n], t[n] = e; return t },
                some: function(e, t) { return te(Me(this), e, 1 < arguments.length ? t : ze) },
                sort: function(e) { return he.call(Me(this), e) },
                subarray: function(e, t) {
                    var n = Me(this),
                        r = n.length,
                        o = c(e, r);
                    return new(x(n, n[_e]))(n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, I((t === ze ? r : c(t, r)) - o))
                }
            }, We = function(e, t) { return xe(this, ve.call(Me(this), e, t)) }, Ve = function(e, t) {
                Me(this);
                var n = Pe(t, 1),
                    r = this.length,
                    o = v(e),
                    a = I(o.length),
                    i = 0;
                if (r < a + n) throw G(Oe);
                for (; i < a;) this[n + i] = o[i++]
            }, Ue = { entries: function() { return se.call(Me(this)) }, keys: function() { return ue.call(Me(this)) }, values: function() { return ce.call(Me(this)) } }, Ge = function(e, t) { return C(e) && e[Se] && "symbol" != typeof t && t in e && String(+t) == String(t) }, qe = function(e, t) { return Ge(e, t = u(t, !0)) ? o(2, e[t]) : U(e, t) }, He = function(e, t, n) { return !(Ge(e, t = u(t, !0)) && C(n) && s(n, "value")) || s(n, "get") || s(n, "set") || n.configurable || s(n, "writable") && !n.writable || s(n, "enumerable") && !n.enumerable ? V(e, t, n) : (e[t] = n.value, e) }, ke || (W.f = qe, N.f = He), w(w.S + w.F * !ke, "Object", { getOwnPropertyDescriptor: qe, defineProperty: He }), m(function() { ge.call({}) }) && (ge = be = function() { return pe.call(this) }), Ke = a({}, Ne), a(Ke, Ue), S(Ke, ye, Ue.values), a(Ke, { slice: We, set: Ve, constructor: function() {}, toString: ge, toLocaleString: Le }), De(Ke, "buffer", "b"), De(Ke, "byteOffset", "o"), De(Ke, "byteLength", "l"), De(Ke, "length", "e"), V(Ke, me, { get: function() { return this[Se] } }), e.exports = function(e, f, t, a) {
                function d(e, o) { V(e, o, { get: function() { return e = o, (t = this._d).v[n](e * f + t.o, Ce); var e, t }, set: function(e) { return t = o, n = e, r = this._d, a && (n = (n = Math.round(n)) < 0 ? 0 : 255 < n ? 255 : 255 & n), void r.v[i](t * f + r.o, n, Ce); var t, n, r }, enumerable: !0 }) }
                var p = e + ((a = !!a) ? "Clamped" : "") + "Array",
                    n = "get" + e,
                    i = "set" + e,
                    h = y[p],
                    c = h || {},
                    r = h && P(h),
                    o = !h || !_.ABV,
                    u = {},
                    s = h && h[Q];
                o ? (h = t(function(e, t, n, r) {
                    k(e, h, p, "_d");
                    var o, a, i, c, u = 0,
                        s = 0;
                    if (C(t)) {
                        if (!(t instanceof Y || (c = A(t)) == K || c == z)) return Se in t ? Ee(h, t) : Re.call(h, t);
                        o = t, s = Pe(n, f);
                        var l = t.byteLength;
                        if (r === ze) { if (l % f) throw G(Oe); if ((a = l - s) < 0) throw G(Oe) } else if (l < (a = I(r) * f) + s) throw G(Oe);
                        i = a / f
                    } else i = O(t), o = new Y(a = i * f);
                    for (S(e, "_d", { b: o, o: s, l: a, e: i, v: new Z(o) }); u < i;) d(e, u++)
                }), s = h[Q] = j(Ke), S(s, "constructor", h)) : m(function() { h(1) }) && m(function() { new h(-1) }) && R(function(e) { new h, new h(null), new h(1.5), new h(e) }, !0) || (h = t(function(e, t, n, r) { var o; return k(e, h, p), C(t) ? t instanceof Y || (o = A(t)) == K || o == z ? r !== ze ? new c(t, Pe(n, f), r) : n !== ze ? new c(t, Pe(n, f)) : new c(t) : Se in t ? Ee(h, t) : Re.call(h, t) : new c(O(t)) }), $(r !== Function.prototype ? M(c).concat(M(r)) : M(c), function(e) { e in h || S(h, e, c[e]) }), h[Q] = s, b || (s.constructor = h));
                var l = s[ye],
                    v = !!l && ("values" == l.name || l.name == ze),
                    g = Ue.values;
                S(h, we, !0), S(s, Se, p), S(s, Ie, !0), S(s, _e, h), (a ? new h(1)[me] == p : me in s) || V(s, me, { get: function() { return p } }), u[p] = h, w(w.G + w.W + w.F * (h != c), u), w(w.S, p, { BYTES_PER_ELEMENT: f }), w(w.S + w.F * m(function() { c.of.call(h, 1) }), p, { from: Re, of: Be }), J in s || S(s, J, f), w(w.P, p, Ne), B(p), w(w.P + w.F * je, p, { set: Ve }), w(w.P + w.F * !v, p, Ue), b || s.toString == ge || (s.toString = ge), w(w.P + w.F * m(function() { new h(1).slice() }), p, { slice: We }), w(w.P + w.F * (m(function() { return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString() }) || !m(function() { s.toLocaleString.call([1, 2]) })), p, { toLocaleString: Le }), D[p] = v ? l : g, b || v || S(s, ye, g)
            }) : e.exports = function() {}
        }, function(e, t, n) {
            var o = n(2);
            e.exports = function(e, t) { if (!o(e)) return e; var n, r; if (t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r; if ("function" == typeof(n = e.valueOf) && !o(r = n.call(e))) return r; if (!t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r; throw TypeError("Can't convert object to primitive value") }
        }, function(e, t) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function(e, t) { e.exports = function(e) { if (e == ze) throw TypeError("Can't call method on  " + e); return e } }, function(e, t, r) {
            function o() {}
            var a = r(4),
                i = r(81),
                c = r(58),
                u = r(56)("IE_PROTO"),
                s = "prototype",
                l = function() {
                    var e, t = r(53)("iframe"),
                        n = c.length;
                    for (t.style.display = "none", r(59).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; n--;) delete l[s][c[n]];
                    return l()
                };
            e.exports = Object.create || function(e, t) { var n; return null !== e ? (o[s] = a(e), n = new o, o[s] = null, n[u] = e) : n = l(), t === ze ? n : i(n, t) }
        }, function(e, t, n) {
            var r = n(9),
                o = n(13),
                a = n(56)("IE_PROTO"),
                i = Object.prototype;
            e.exports = Object.getPrototypeOf || function(e) { return e = o(e), r(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? i : null }
        }, function(e, t, n) {
            function r(e) { c(e, o, { value: { i: "O" + ++u, w: {} } }) }
            var o = n(31)("meta"),
                a = n(2),
                i = n(9),
                c = n(6).f,
                u = 0,
                s = Object.isExtensible || function() { return !0 },
                l = !n(1)(function() { return s(Object.preventExtensions({})) }),
                f = e.exports = {
                    KEY: o,
                    NEED: !1,
                    fastKey: function(e, t) {
                        if (!a(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!i(e, o)) {
                            if (!s(e)) return "F";
                            if (!t) return "E";
                            r(e)
                        }
                        return e[o].i
                    },
                    getWeak: function(e, t) {
                        if (!i(e, o)) {
                            if (!s(e)) return !0;
                            if (!t) return !1;
                            r(e)
                        }
                        return e[o].w
                    },
                    onFreeze: function(e) { return l && f.NEED && s(e) && !i(e, o) && r(e), e }
                }
        }, function(e, t) { var n = e.exports = { version: "2.5.1" }; "number" == typeof r && (r = n) }, function(e, t) {
            var n = 0,
                r = Math.random();
            e.exports = function(e) { return "Symbol(".concat(e === ze ? "" : e, ")_", (++n + r).toString(36)) }
        }, function(e, t, n) {
            var r = n(80),
                o = n(58);
            e.exports = Object.keys || function(e) { return r(e, o) }
        }, function(e, t, n) {
            var r = n(21),
                o = Math.max,
                a = Math.min;
            e.exports = function(e, t) { return (e = r(e)) < 0 ? o(e + t, 0) : a(e, t) }
        }, function(e, t, n) {
            var r = n(80),
                o = n(58).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) { return r(e, o) }
        }, function(e, t) { e.exports = {} }, function(e, t, n) {
            var r = n(6).f,
                o = n(9),
                a = n(5)("toStringTag");
            e.exports = function(e, t, n) { e && !o(e = n ? e : e.prototype, a) && r(e, a, { configurable: !0, value: t }) }
        }, function(e, t) { e.exports = !1 }, function(e, t, n) {
            var r = n(3),
                o = n(6),
                a = n(7),
                i = n(5)("species");
            e.exports = function(e) {
                var t = r[e];
                a && t && !t[i] && o.f(t, i, { configurable: !0, get: function() { return this } })
            }
        }, function(e, t, n) {
            var o = n(11);
            e.exports = function(e, t, n) { for (var r in t) o(e, r, t[r], n); return e }
        }, function(e, t) { e.exports = function(e, t, n, r) { if (!(e instanceof t) || r !== ze && r in e) throw TypeError(n + ": incorrect invocation!"); return e } }, function(e, t, n) {
            var r = n(2);
            e.exports = function(e, t) { if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!"); return e }
        }, function(e, t, n) {
            var r = n(20);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == r(e) ? e.split("") : Object(e) }
        }, function(e, t, n) {
            var d = n(16),
                p = n(82),
                h = n(60),
                v = n(4),
                g = n(8),
                b = n(61),
                y = {},
                m = {};
            (t = e.exports = function(e, t, n, r, o) {
                var a, i, c, u, s = o ? function() { return e } : b(e),
                    l = d(n, r, t ? 2 : 1),
                    f = 0;
                if ("function" != typeof s) throw TypeError(e + " is not iterable!");
                if (h(s)) {
                    for (a = g(e.length); f < a; f++)
                        if ((u = t ? l(v(i = e[f])[0], i[1]) : l(e[f])) === y || u === m) return u
                } else
                    for (c = s.call(e); !(i = c.next()).done;)
                        if ((u = p(c, l, i.value, t)) === y || u === m) return u
            }).BREAK = y, t.RETURN = m
        }, function(e, t, n) {
            var o = n(20),
                a = n(5)("toStringTag"),
                i = "Arguments" == o(function() { return arguments }());
            e.exports = function(e) { var t, n, r; return e === ze ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) { try { return e[t] } catch (e) {} }(t = Object(e), a)) ? n : i ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r }
        }, function(e, t, n) {
            var r = n(5)("unscopables"),
                o = Array.prototype;
            o[r] == ze && n(14)(o, r, {}), e.exports = function(e) { o[r][e] = !0 }
        }, function(e, t) { t.f = Object.getOwnPropertySymbols }, function(e, t) { t.f = {}.propertyIsEnumerable }, function(e, t, n) {
            function r(e, t, n) {
                var r = {},
                    o = c(function() { return !!u[e]() || "​" != "​" [e]() }),
                    a = r[e] = o ? t(f) : u[e];
                n && (r[n] = a), i(i.P + i.F * o, "String", r)
            }
            var i = n(0),
                o = n(26),
                c = n(1),
                u = n(66),
                a = "[" + u + "]",
                s = RegExp("^" + a + a + "*"),
                l = RegExp(a + a + "*$"),
                f = r.trim = function(e, t) { return e = String(o(e)), 1 & t && (e = e.replace(s, "")), 2 & t && (e = e.replace(l, "")), e };
            e.exports = r
        }, function(e, t, n) {
            var a = n(5)("iterator"),
                i = !1;
            try {
                var r = [7][a]();
                r.return = function() { i = !0 }, Array.from(r, function() { throw 2 })
            } catch (e) {}
            e.exports = function(e, t) {
                if (!t && !i) return !1;
                var n = !1;
                try {
                    var r = [7],
                        o = r[a]();
                    o.next = function() { return { done: n = !0 } }, r[a] = function() { return o }, e(r)
                } catch (e) {}
                return n
            }
        }, function(e, t, n) {
            var c = n(14),
                u = n(11),
                s = n(1),
                l = n(26),
                f = n(5);
            e.exports = function(t, e, n) {
                var r = f(t),
                    o = n(l, r, "" [t]),
                    a = o[0],
                    i = o[1];
                s(function() { var e = {}; return e[r] = function() { return 7 }, 7 != "" [t](e) }) && (u(String.prototype, t, a), c(RegExp.prototype, r, 2 == e ? function(e, t) { return i.call(e, this, t) } : function(e) { return i.call(e, this) }))
            }
        }, function(e, t, n) {
            var b = n(3),
                y = n(0),
                m = n(11),
                w = n(39),
                _ = n(29),
                k = n(43),
                S = n(40),
                I = n(2),
                O = n(1),
                A = n(49),
                C = n(36),
                j = n(67);
            e.exports = function(r, e, t, n, o, a) {
                function i(e) {
                    var n = v[e];
                    m(v, e, "delete" == e ? function(e) { return !(a && !I(e)) && n.call(this, 0 === e ? 0 : e) } : "has" == e ? function(e) { return !(a && !I(e)) && n.call(this, 0 === e ? 0 : e) } : "get" == e ? function(e) { return a && !I(e) ? ze : n.call(this, 0 === e ? 0 : e) } : "add" == e ? function(e) { return n.call(this, 0 === e ? 0 : e), this } : function(e, t) { return n.call(this, 0 === e ? 0 : e, t), this })
                }
                var c, u, s, l, f, d = b[r],
                    p = d,
                    h = o ? "set" : "add",
                    v = p && p.prototype,
                    g = {};
                return "function" == typeof p && (a || v.forEach && !O(function() {
                    (new p).entries().next()
                })) ? (u = (c = new p)[h](a ? {} : -0, 1) != c, s = O(function() { c.has(1) }), l = A(function(e) { new p(e) }), f = !a && O(function() { for (var e = new p, t = 5; t--;) e[h](t, t); return !e.has(-0) }), l || (((p = e(function(e, t) { S(e, p, r); var n = j(new d, e, p); return t != ze && k(t, o, n[h], n), n })).prototype = v).constructor = p), (s || f) && (i("delete"), i("has"), o && i("get")), (f || u) && i(h), a && v.clear && delete v.clear) : (p = n.getConstructor(e, r, o, h), w(p.prototype, t), _.NEED = !0), C(p, r), g[r] = p, y(y.G + y.W + y.F * (p != d), g), a || n.setStrong(p, r, o), p
            }
        }, function(e, t, n) {
            for (var r, o = n(3), a = n(14), i = n(31), c = i("typed_array"), u = i("view"), s = !(!o.ArrayBuffer || !o.DataView), l = s, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(r = o[d[f++]]) ? (a(r.prototype, c, !0), a(r.prototype, u, !0)) : l = !1;
            e.exports = { ABV: s, CONSTR: l, TYPED: c, VIEW: u }
        }, function(e, t, n) {
            var r = n(2),
                o = n(3).document,
                a = r(o) && r(o.createElement);
            e.exports = function(e) { return a ? o.createElement(e) : {} }
        }, function(e, t, n) {
            var d = n(32),
                p = n(46),
                h = n(47),
                v = n(13),
                g = n(42),
                o = Object.assign;
            e.exports = !o || n(1)(function() {
                var e = {},
                    t = {},
                    n = Symbol(),
                    r = "abcdefghijklmnopqrst";
                return e[n] = 7, r.split("").forEach(function(e) { t[e] = e }), 7 != o({}, e)[n] || Object.keys(o({}, t)).join("") != r
            }) ? function(e, t) {
                for (var n = v(e), r = arguments.length, o = 1, a = p.f, i = h.f; o < r;)
                    for (var c, u = g(arguments[o++]), s = a ? d(u).concat(a(u)) : d(u), l = s.length, f = 0; f < l;) i.call(u, c = s[f++]) && (n[c] = u[c]);
                return n
            } : o
        }, function(e, t, n) {
            var u = n(12),
                s = n(8),
                l = n(33);
            e.exports = function(c) {
                return function(e, t, n) {
                    var r, o = u(e),
                        a = s(o.length),
                        i = l(n, a);
                    if (c && t != t) {
                        for (; i < a;)
                            if ((r = o[i++]) != r) return !0
                    } else
                        for (; i < a; i++)
                            if ((c || i in o) && o[i] === t) return c || i || 0; return !c && -1
                }
            }
        }, function(e, t, n) {
            var r = n(57)("keys"),
                o = n(31);
            e.exports = function(e) { return r[e] || (r[e] = o(e)) }
        }, function(e, t, n) {
            var r = n(3),
                o = "__core-js_shared__",
                a = r[o] || (r[o] = {});
            e.exports = function(e) { return a[e] || (a[e] = {}) }
        }, function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(e, t, n) {
            var r = n(3).document;
            e.exports = r && r.documentElement
        }, function(e, t, n) {
            var r = n(35),
                o = n(5)("iterator"),
                a = Array.prototype;
            e.exports = function(e) { return e !== ze && (r.Array === e || a[o] === e) }
        }, function(e, t, n) {
            var r = n(44),
                o = n(5)("iterator"),
                a = n(35);
            e.exports = n(30).getIteratorMethod = function(e) { if (e != ze) return e[o] || e["@@iterator"] || a[r(e)] }
        }, function(e, t, n) {
            var r = n(27),
                o = n(25),
                a = n(36),
                i = {};
            n(14)(i, n(5)("iterator"), function() { return this }), e.exports = function(e, t, n) { e.prototype = r(i, { next: o(1, n) }), a(e, t + " Iterator") }
        }, function(e, t) { e.exports = function(e, t) { return { value: t, done: !!e } } }, function(e, t, n) {
            var r = n(20);
            e.exports = Array.isArray || function(e) { return "Array" == r(e) }
        }, function(e, t, o) {
            function a(e, t) { if (r(e), !n(t) && null !== t) throw TypeError(t + ": can't set as prototype!") }
            var n = o(2),
                r = o(4);
            e.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, n, r) {
                    try {
                        (r = o(16)(Function.call, o(22).f(Object.prototype, "__proto__").set, 2))(e, []), n = !(e instanceof Array)
                    } catch (e) { n = !0 }
                    return function(e, t) { return a(e, t), n ? e.__proto__ = t : r(e, t), e }
                }({}, !1) : ze),
                check: a
            }
        }, function(e, t) { e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff" }, function(e, t, n) {
            var a = n(2),
                i = n(65).set;
            e.exports = function(e, t, n) { var r, o = t.constructor; return o !== n && "function" == typeof o && (r = o.prototype) !== n.prototype && a(r) && i && i(e, r), e }
        }, function(e, t) { e.exports = Math.sign || function(e) { return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1 } }, function(e, t) {
            var n = Math.expm1;
            e.exports = !n || 22025.465794806718 < n(10) || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(e) { return 0 == (e = +e) ? e : -1e-6 < e && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1 } : n
        }, function(e, t, n) {
            function m() { return this }
            var w = n(37),
                _ = n(0),
                k = n(11),
                S = n(14),
                I = n(9),
                O = n(35),
                A = n(62),
                C = n(36),
                j = n(28),
                P = n(5)("iterator"),
                M = !([].keys && "next" in [].keys()),
                T = "values";
            e.exports = function(e, t, n, r, o, a, i) {
                A(n, t, r);

                function c(e) {
                    if (!M && e in h) return h[e];
                    switch (e) {
                        case "keys":
                        case T:
                            return function() { return new n(this, e) }
                    }
                    return function() { return new n(this, e) }
                }
                var u, s, l, f = t + " Iterator",
                    d = o == T,
                    p = !1,
                    h = e.prototype,
                    v = h[P] || h["@@iterator"] || o && h[o],
                    g = v || c(o),
                    b = o ? d ? c("entries") : g : ze,
                    y = "Array" == t && h.entries || v;
                if (y && (l = j(y.call(new e))) !== Object.prototype && l.next && (C(l, f, !0), w || I(l, P) || S(l, P, m)), d && v && v.name !== T && (p = !0, g = function() { return v.call(this) }), w && !i || !M && !p && h[P] || S(h, P, g), O[t] = g, O[f] = m, o)
                    if (u = { values: d ? g : c(T), keys: a ? g : c("keys"), entries: b }, i)
                        for (s in u) s in h || k(h, s, u[s]);
                    else _(_.P + _.F * (M || p), t, u);
                return u
            }
        }, function(e, t, n) {
            var r = n(72),
                o = n(26);
            e.exports = function(e, t, n) { if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!"); return String(o(e)) }
        }, function(e, t, n) {
            var r = n(2),
                o = n(20),
                a = n(5)("match");
            e.exports = function(e) { var t; return r(e) && ((t = e[a]) !== ze ? !!t : "RegExp" == o(e)) }
        }, function(e, t, n) {
            var r = n(5)("match");
            e.exports = function(t) { var n = /./; try { "/./" [t](n) } catch (e) { try { return n[r] = !1, !"/./" [t](n) } catch (e) {} } return !0 }
        }, function(e, t, n) {
            var s = n(13),
                l = n(33),
                f = n(8);
            e.exports = function(e, t, n) { for (var r = s(this), o = f(r.length), a = arguments.length, i = l(1 < a ? t : ze, o), c = 2 < a ? n : ze, u = c === ze ? o : l(c, o); i < u;) r[i++] = e; return r }
        }, function(e, t, n) {
            var r = n(4);
            e.exports = function() {
                var e = r(this),
                    t = "";
                return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
            }
        }, function(e, t, n) {
            var r = n(3),
                o = n(7),
                a = n(37),
                i = n(52),
                c = n(14),
                u = n(39),
                s = n(1),
                l = n(40),
                f = n(21),
                d = n(8),
                p = n(101),
                h = n(34).f,
                v = n(6).f,
                g = n(74),
                b = n(36),
                y = "ArrayBuffer",
                m = "DataView",
                w = "prototype",
                _ = "Wrong index!",
                k = r[y],
                S = r[m],
                I = r.Math,
                O = r.RangeError,
                A = r.Infinity,
                C = k,
                j = I.abs,
                P = I.pow,
                M = I.floor,
                T = I.log,
                x = I.LN2,
                E = "byteLength",
                D = "byteOffset",
                R = o ? "_b" : "buffer",
                B = o ? "_l" : E,
                F = o ? "_o" : D;

            function L(e, t, n) {
                var r, o, a, i = Array(n),
                    c = 8 * n - t - 1,
                    u = (1 << c) - 1,
                    s = u >> 1,
                    l = 23 === t ? P(2, -24) - P(2, -77) : 0,
                    f = 0,
                    d = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for ((e = j(e)) != e || e === A ? (o = e != e ? 1 : 0, r = u) : (r = M(T(e) / x), e * (a = P(2, -r)) < 1 && (r--, a *= 2), 2 <= (e += 1 <= r + s ? l / a : l * P(2, 1 - s)) * a && (r++, a /= 2), u <= r + s ? (o = 0, r = u) : 1 <= r + s ? (o = (e * a - 1) * P(2, t), r += s) : (o = e * P(2, s - 1) * P(2, t), r = 0)); 8 <= t; i[f++] = 255 & o, o /= 256, t -= 8);
                for (r = r << t | o, c += t; 0 < c; i[f++] = 255 & r, r /= 256, c -= 8);
                return i[--f] |= 128 * d, i
            }

            function N(e, t, n) {
                var r, o = 8 * n - t - 1,
                    a = (1 << o) - 1,
                    i = a >> 1,
                    c = o - 7,
                    u = n - 1,
                    s = e[u--],
                    l = 127 & s;
                for (s >>= 7; 0 < c; l = 256 * l + e[u], u--, c -= 8);
                for (r = l & (1 << -c) - 1, l >>= -c, c += t; 0 < c; r = 256 * r + e[u], u--, c -= 8);
                if (0 === l) l = 1 - i;
                else {
                    if (l === a) return r ? NaN : s ? -A : A;
                    r += P(2, t), l -= i
                }
                return (s ? -1 : 1) * r * P(2, l - t)
            }

            function W(e) { return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0] }

            function V(e) { return [255 & e] }

            function U(e) { return [255 & e, e >> 8 & 255] }

            function G(e) { return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255] }

            function q(e) { return L(e, 52, 8) }

            function H(e) { return L(e, 23, 4) }

            function K(e, t, n) { v(e[w], t, { get: function() { return this[n] } }) }

            function z(e, t, n, r) {
                var o = p(+n);
                if (o + t > e[B]) throw O(_);
                var a = e[R]._b,
                    i = o + e[F],
                    c = a.slice(i, i + t);
                return r ? c : c.reverse()
            }

            function J(e, t, n, r, o, a) { var i = p(+n); if (i + t > e[B]) throw O(_); for (var c = e[R]._b, u = i + e[F], s = r(+o), l = 0; l < t; l++) c[u + l] = s[a ? l : t - l - 1] }
            if (i.ABV) {
                if (!s(function() { k(1) }) || !s(function() { new k(-1) }) || s(function() { return new k, new k(1.5), new k(NaN), k.name != y })) {
                    for (var Q, X = (k = function(e) { return l(this, k), new C(p(e)) })[w] = C[w], Y = h(C), Z = 0; Y.length > Z;)(Q = Y[Z++]) in k || c(k, Q, C[Q]);
                    a || (X.constructor = k)
                }
                var $ = new S(new k(2)),
                    ee = S[w].setInt8;
                $.setInt8(0, 2147483648), $.setInt8(1, 2147483649), !$.getInt8(0) && $.getInt8(1) || u(S[w], { setInt8: function(e, t) { ee.call(this, e, t << 24 >> 24) }, setUint8: function(e, t) { ee.call(this, e, t << 24 >> 24) } }, !0)
            } else k = function(e) {
                l(this, k, y);
                var t = p(e);
                this._b = g.call(Array(t), 0), this[B] = t
            }, S = function(e, t, n) {
                l(this, S, m), l(e, k, m);
                var r = e[B],
                    o = f(t);
                if (o < 0 || r < o) throw O("Wrong offset!");
                if (r < o + (n = n === ze ? r - o : d(n))) throw O("Wrong length!");
                this[R] = e, this[F] = o, this[B] = n
            }, o && (K(k, E, "_l"), K(S, "buffer", "_b"), K(S, E, "_l"), K(S, D, "_o")), u(S[w], { getInt8: function(e) { return z(this, 1, e)[0] << 24 >> 24 }, getUint8: function(e) { return z(this, 1, e)[0] }, getInt16: function(e, t) { var n = z(this, 2, e, t); return (n[1] << 8 | n[0]) << 16 >> 16 }, getUint16: function(e, t) { var n = z(this, 2, e, t); return n[1] << 8 | n[0] }, getInt32: function(e, t) { return W(z(this, 4, e, t)) }, getUint32: function(e, t) { return W(z(this, 4, e, t)) >>> 0 }, getFloat32: function(e, t) { return N(z(this, 4, e, t), 23, 4) }, getFloat64: function(e, t) { return N(z(this, 8, e, t), 52, 8) }, setInt8: function(e, t) { J(this, 1, e, V, t) }, setUint8: function(e, t) { J(this, 1, e, V, t) }, setInt16: function(e, t, n) { J(this, 2, e, U, t, n) }, setUint16: function(e, t, n) { J(this, 2, e, U, t, n) }, setInt32: function(e, t, n) { J(this, 4, e, G, t, n) }, setUint32: function(e, t, n) { J(this, 4, e, G, t, n) }, setFloat32: function(e, t, n) { J(this, 4, e, H, t, n) }, setFloat64: function(e, t, n) { J(this, 8, e, q, t, n) } });
            b(k, y), b(S, m), c(S[w], i.VIEW, !0), t[y] = k, t[m] = S
        }, function(e, t, n) {
            var o = n(4),
                a = n(17),
                i = n(5)("species");
            e.exports = function(e, t) { var n, r = o(e).constructor; return r === ze || (n = o(r)[i]) == ze ? t : a(n) }
        }, function(o, e, t) {
            (function(e) {
                var t = !0;
                try {
                    new Proxy({}, {});
                    t = !1
                } catch (e) {}
                var n, r = !1;
                e.__wxConfig && "string" == typeof e.__wxConfig.platform ? "ios" === e.__wxConfig.platform.toLowerCase() && (r = !0) : "undefined" == typeof navigator || "string" != typeof navigator.userAgent || (0 <= (n = navigator.userAgent.toLowerCase()).indexOf("iphone") || 0 <= n.indexOf("ipad")) && (r = !0), o.exports = { needCoreJS: t, isIOS: r }
            }).call(e, t(106))
        }, function(e, t, n) { e.exports = !n(7) && !n(1)(function() { return 7 != Object.defineProperty(n(53)("div"), "a", { get: function() { return 7 } }).a }) }, function(e, t, n) {
            var i = n(9),
                c = n(12),
                u = n(55)(!1),
                s = n(56)("IE_PROTO");
            e.exports = function(e, t) {
                var n, r = c(e),
                    o = 0,
                    a = [];
                for (n in r) n != s && i(r, n) && a.push(n);
                for (; t.length > o;) i(r, n = t[o++]) && (~u(a, n) || a.push(n));
                return a
            }
        }, function(e, t, n) {
            var i = n(6),
                c = n(4),
                u = n(32);
            e.exports = n(7) ? Object.defineProperties : function(e, t) { c(e); for (var n, r = u(t), o = r.length, a = 0; a < o;) i.f(e, n = r[a++], t[n]); return e }
        }, function(e, t, n) {
            var a = n(4);
            e.exports = function(t, e, n, r) { try { return r ? e(a(n)[0], n[1]) : e(n) } catch (e) { var o = t.return; throw o !== ze && a(o.call(t)), e } }
        }, function(e, t, n) { t.f = n(5) }, function(e, t, n) {
            var r = n(12),
                o = n(34).f,
                a = {}.toString,
                i = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function(e) { return i && "[object Window]" == a.call(e) ? function(e) { try { return o(e) } catch (e) { return i.slice() } }(e) : o(r(e)) }
        }, function(e, t, n) {
            var a = n(17),
                i = n(2),
                c = n(86),
                u = [].slice,
                s = {};
            e.exports = Function.bind || function(t) {
                var n = a(this),
                    r = u.call(arguments, 1),
                    o = function() {
                        var e = r.concat(u.call(arguments));
                        return this instanceof o ? function(e, t, n) {
                            if (!(t in s)) {
                                for (var r = [], o = 0; o < t; o++) r[o] = "a[" + o + "]";
                                s[t] = Function("F,a", "return new F(" + r.join(",") + ")")
                            }
                            return s[t](e, n)
                        }(n, e.length, e) : c(n, e, t)
                    };
                return i(n.prototype) && (o.prototype = n.prototype), o
            }
        }, function(e, t) {
            e.exports = function(e, t, n) {
                var r = n === ze;
                switch (t.length) {
                    case 0:
                        return r ? e() : e.call(n);
                    case 1:
                        return r ? e(t[0]) : e.call(n, t[0]);
                    case 2:
                        return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                    case 3:
                        return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                    case 4:
                        return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
                }
                return e.apply(n, t)
            }
        }, function(e, t, n) {
            var r = n(3).parseInt,
                o = n(48).trim,
                a = n(66),
                i = /^[-+]?0[xX]/;
            e.exports = 8 !== r(a + "08") || 22 !== r(a + "0x16") ? function(e, t) { var n = o(String(e), 3); return r(n, t >>> 0 || (i.test(n) ? 16 : 10)) } : r
        }, function(e, t, n) {
            var r = n(3).parseFloat,
                o = n(48).trim;
            e.exports = 1 / r(n(66) + "-0") != -1 / 0 ? function(e) {
                var t = o(String(e), 3),
                    n = r(t);
                return 0 === n && "-" == t.charAt(0) ? -0 : n
            } : r
        }, function(e, t, n) {
            var r = n(20);
            e.exports = function(e, t) { if ("number" != typeof e && "Number" != r(e)) throw TypeError(t); return +e }
        }, function(e, t, n) {
            var o = n(21),
                a = n(26);
            e.exports = function(e) {
                var t = String(a(this)),
                    n = "",
                    r = o(e);
                if (r < 0 || r == 1 / 0) throw RangeError("Count can't be negative");
                for (; 0 < r;
                    (r >>>= 1) && (t += t)) 1 & r && (n += t);
                return n
            }
        }, function(e, t, n) {
            var r = n(2),
                o = Math.floor;
            e.exports = function(e) { return !r(e) && isFinite(e) && o(e) === e }
        }, function(e, t) { e.exports = Math.log1p || function(e) { return -1e-8 < (e = +e) && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e) } }, function(e, t, n) {
            var u = n(21),
                s = n(26);
            e.exports = function(c) {
                return function(e, t) {
                    var n, r, o = String(s(e)),
                        a = u(t),
                        i = o.length;
                    return a < 0 || i <= a ? c ? "" : ze : (n = o.charCodeAt(a)) < 55296 || 56319 < n || a + 1 === i || (r = o.charCodeAt(a + 1)) < 56320 || 57343 < r ? c ? o.charAt(a) : n : c ? o.slice(a, a + 2) : r - 56320 + (n - 55296 << 10) + 65536
                }
            }
        }, function(e, t, n) {
            var r = n(6),
                o = n(25);
            e.exports = function(e, t, n) { t in e ? r.f(e, t, o(0, n)) : e[t] = n }
        }, function(e, t, n) {
            var l = n(17),
                f = n(13),
                d = n(42),
                p = n(8);
            e.exports = function(e, t, n, r, o) {
                l(t);
                var a = f(e),
                    i = d(a),
                    c = p(a.length),
                    u = o ? c - 1 : 0,
                    s = o ? -1 : 1;
                if (n < 2)
                    for (;;) { if (u in i) { r = i[u], u += s; break } if (u += s, o ? u < 0 : c <= u) throw TypeError("Reduce of empty array with no initial value") }
                for (; o ? 0 <= u : u < c; u += s) u in i && (r = t(r, i[u], u, a));
                return r
            }
        }, function(e, t, n) {
            var l = n(13),
                f = n(33),
                d = n(8);
            e.exports = [].copyWithin || function(e, t, n) {
                var r = l(this),
                    o = d(r.length),
                    a = f(e, o),
                    i = f(t, o),
                    c = 2 < arguments.length ? n : ze,
                    u = Math.min((c === ze ? o : f(c, o)) - i, o - a),
                    s = 1;
                for (i < a && a < i + u && (s = -1, i += u - 1, a += u - 1); 0 < u--;) i in r ? r[a] = r[i] : delete r[a], a += s, i += s;
                return r
            }
        }, function(e, t, n) {
            var r = n(45),
                o = n(63),
                a = n(35),
                i = n(12);
            e.exports = n(70)(Array, "Array", function(e, t) { this._t = i(e), this._i = 0, this._k = t }, function() {
                var e = this._t,
                    t = this._k,
                    n = this._i++;
                return !e || n >= e.length ? (this._t = ze, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
            }, "values"), a.Arguments = a.Array, r("keys"), r("values"), r("entries")
        }, function(e, t, n) { n(7) && "g" != /./g.flags && n(6).f(RegExp.prototype, "flags", { configurable: !0, get: n(75) }) }, function(e, t, n) {
            function i(e, t) {
                var n, r = h(t);
                if ("F" !== r) return e._i[r];
                for (n = e._f; n; n = n.n)
                    if (n.k == t) return n
            }
            var c = n(6).f,
                u = n(27),
                s = n(39),
                l = n(16),
                f = n(40),
                d = n(43),
                r = n(70),
                o = n(63),
                a = n(38),
                p = n(7),
                h = n(29).fastKey,
                v = n(41),
                g = p ? "_s" : "size";
            e.exports = {
                getConstructor: function(e, a, n, r) {
                    var o = e(function(e, t) { f(e, o, a, "_i"), e._t = a, e._i = u(null), e._f = ze, e._l = ze, e[g] = 0, t != ze && d(t, n, e[r], e) });
                    return s(o.prototype, {
                        clear: function() {
                            for (var e = v(this, a), t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = ze), delete t[n.i];
                            e._f = e._l = ze, e[g] = 0
                        },
                        delete: function(e) {
                            var t, n, r = v(this, a),
                                o = i(r, e);
                            return o && (t = o.n, n = o.p, delete r._i[o.i], o.r = !0, n && (n.n = t), t && (t.p = n), r._f == o && (r._f = t), r._l == o && (r._l = n), r[g]--), !!o
                        },
                        forEach: function(e, t) {
                            v(this, a);
                            for (var n, r = l(e, 1 < arguments.length ? t : ze, 3); n = n ? n.n : this._f;)
                                for (r(n.v, n.k, this); n && n.r;) n = n.p
                        },
                        has: function(e) { return !!i(v(this, a), e) }
                    }), p && c(o.prototype, "size", { get: function() { return v(this, a)[g] } }), o
                },
                def: function(e, t, n) { var r, o, a = i(e, t); return a ? a.v = n : (e._l = a = { i: o = h(t, !0), k: t, v: n, p: r = e._l, n: ze, r: !1 }, e._f || (e._f = a), r && (r.n = a), e[g]++, "F" !== o && (e._i[o] = a)), e },
                getEntry: i,
                setStrong: function(e, n, t) { r(e, n, function(e, t) { this._t = v(e, n), this._k = t, this._l = ze }, function() { for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p; return e._t && (e._l = n = n ? n.n : e._t._f) ? o(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (e._t = ze, o(1)) }, t ? "entries" : "values", !t, !0), a(n) }
            }
        }, function(e, t, n) {
            function i(e) { return e._l || (e._l = new b) }

            function r(e, t) { return h(e.a, function(e) { return e[0] === t }) }
            var c = n(39),
                u = n(29).getWeak,
                o = n(4),
                s = n(2),
                l = n(40),
                f = n(43),
                a = n(19),
                d = n(9),
                p = n(41),
                h = a(5),
                v = a(6),
                g = 0,
                b = function() { this.a = [] };
            b.prototype = {
                get: function(e) { var t = r(this, e); if (t) return t[1] },
                has: function(e) { return !!r(this, e) },
                set: function(e, t) {
                    var n = r(this, e);
                    n ? n[1] = t : this.a.push([e, t])
                },
                delete: function(t) { var e = v(this.a, function(e) { return e[0] === t }); return ~e && this.a.splice(e, 1), !!~e }
            }, e.exports = { getConstructor: function(e, n, r, o) { var a = e(function(e, t) { l(e, a, n, "_i"), e._t = n, e._i = g++, t != (e._l = ze) && f(t, r, e[o], e) }); return c(a.prototype, { delete: function(e) { if (!s(e)) return !1; var t = u(e); return !0 === t ? i(p(this, n)).delete(e) : t && d(t, this._i) && delete t[this._i] }, has: function(e) { if (!s(e)) return !1; var t = u(e); return !0 === t ? i(p(this, n)).has(e) : t && d(t, this._i) } }), a }, def: function(e, t, n) { var r = u(o(t), !0); return !0 === r ? i(e).set(t, n) : r[e._i] = n, e }, ufstore: i }
        }, function(e, t, n) {
            var r = n(21),
                o = n(8);
            e.exports = function(e) {
                if (e === ze) return 0;
                var t = r(e),
                    n = o(t);
                if (t !== n) throw RangeError("Wrong length!");
                return n
            }
        }, function(e, t, n) {
            function r() {
                var e, t = +this;
                m.hasOwnProperty(t) && (e = m[t], delete m[t], e())
            }

            function o(e) { r.call(e.data) }
            var a, i, c, u = n(16),
                s = n(86),
                l = n(59),
                f = n(53),
                d = n(3),
                p = d.process,
                h = d.setImmediate,
                v = d.clearImmediate,
                g = d.MessageChannel,
                b = d.Dispatch,
                y = 0,
                m = {},
                w = "onreadystatechange";
            h && v || (h = function(e) { for (var t = [], n = 1; n < arguments.length;) t.push(arguments[n++]); return m[++y] = function() { s("function" == typeof e ? e : Function(e), t) }, a(y), y }, v = function(e) { delete m[e] }, "process" == n(20)(p) ? a = function(e) { p.nextTick(u(r, e, 1)) } : b && b.now ? a = function(e) { b.now(u(r, e, 1)) } : g ? (c = (i = new g).port2, i.port1.onmessage = o, a = u(c.postMessage, c, 1)) : d.addEventListener && "function" == typeof postMessage && !d.importScripts ? (a = function(e) { d.postMessage(e + "", "*") }, d.addEventListener("message", o, !1)) : a = w in f("script") ? function(e) { l.appendChild(f("script"))[w] = function() { l.removeChild(this), r.call(e) } } : function(e) { setTimeout(u(r, e, 1), 0) }), e.exports = { set: h, clear: v }
        }, function(e, t, n) {
            var o = n(17);

            function r(e) {
                var n, r;
                this.promise = new e(function(e, t) {
                    if (n !== ze || r !== ze) throw TypeError("Bad Promise constructor");
                    n = e, r = t
                }), this.resolve = o(n), this.reject = o(r)
            }
            e.exports.f = function(e) { return new r(e) }
        }, function(e, t, n) { e.exports = n(105) }, function(e, t, n) {
            var r = n(78),
                o = r.needCoreJS || r.isIOS;
            o && "undefined" != typeof Promise && (Promise = ze), n(3), r.needCoreJS && (n(107), n(110), n(113), n(114), n(115), n(116), n(117), n(118), n(119), n(120), n(121), n(122), n(123), n(124), n(125), n(126), n(127), n(129), n(130), n(131), n(132), n(133), n(134), n(135), n(136), n(137), n(138), n(139), n(140), n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(166), n(167), n(168), n(169), n(170), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(192), n(193), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(97), n(217), n(218), n(98), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(250), n(251), n(252)), o && n(253)
        }, function(e, t) {
            var n = function() { return this }();
            try { n = n || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (n = window) }
            e.exports = n
        }, function(e, t, n) {
            function r(s) {
                var l = 1 == s,
                    f = 4 == s;
                return function(e, t, n) {
                    var r, o, a, i = d(t, n, 3),
                        c = w(e),
                        u = l || 7 == s || 2 == s ? new("function" == typeof this ? this : O) : ze;
                    for (r in c)
                        if (k(c, r) && (a = i(o = c[r], r, e), s))
                            if (l) u[r] = a;
                            else if (a) switch (s) {
                            case 2:
                                u[r] = o;
                                break;
                            case 3:
                                return !0;
                            case 5:
                                return o;
                            case 6:
                                return r;
                            case 7:
                                u[a[0]] = a[1]
                        } else if (f) return !1;
                    return 3 == s || f ? f : u
                }
            }

            function o(t) { return function(e) { return new I(e, t) } }
            var d = n(16),
                a = n(0),
                i = n(25),
                c = n(54),
                u = n(27),
                s = n(28),
                l = n(32),
                f = n(6),
                p = n(108),
                h = n(17),
                v = n(43),
                g = n(109),
                b = n(62),
                y = n(63),
                m = n(2),
                w = n(12),
                _ = n(7),
                k = n(9),
                S = r(6),
                I = function(e, t) { this._t = w(e), this._a = l(e), this._i = 0, this._k = t };

            function O(e) { var n = u(null); return e != ze && (g(e) ? v(e, !0, function(e, t) { n[e] = t }) : c(n, e)), n }
            b(I, "Dict", function() {
                var e, t = this,
                    n = t._t,
                    r = t._a,
                    o = t._k;
                do { if (t._i >= r.length) return t._t = ze, y(1) } while (!k(n, e = r[t._i++]));
                return y(0, "keys" == o ? e : "values" == o ? n[e] : [e, n[e]])
            }), O.prototype = null, a(a.G + a.F, { Dict: O }), a(a.S, "Dict", {
                keys: o("keys"),
                values: o("values"),
                entries: o("entries"),
                forEach: r(0),
                map: r(1),
                filter: r(2),
                some: r(3),
                every: r(4),
                find: r(5),
                findKey: S,
                mapPairs: r(7),
                reduce: function(e, t, n) {
                    h(t);
                    var r, o, a = w(e),
                        i = l(a),
                        c = i.length,
                        u = 0;
                    if (arguments.length < 3) {
                        if (!c) throw TypeError("Reduce of empty object with no initial value");
                        r = a[i[u++]]
                    } else r = Object(n);
                    for (; u < c;) k(a, o = i[u++]) && (r = t(r, a[o], o, e));
                    return r
                },
                keyOf: p,
                includes: function(e, t) { return (t == t ? p(e, t) : S(e, function(e) { return e != e })) !== ze },
                has: k,
                get: function(e, t) { if (k(e, t)) return e[t] },
                set: function(e, t, n) { return _ && t in Object ? f.f(e, t, i(0, n)) : e[t] = n, e },
                isDict: function(e) { return m(e) && s(e) === O.prototype }
            })
        }, function(e, t, n) {
            var c = n(32),
                u = n(12);
            e.exports = function(e, t) {
                for (var n, r = u(e), o = c(r), a = o.length, i = 0; i < a;)
                    if (r[n = o[i++]] === t) return n
            }
        }, function(e, t, n) {
            var r = n(44),
                o = n(5)("iterator"),
                a = n(35);
            e.exports = n(30).isIterable = function(e) { var t = Object(e); return t[o] !== ze || "@@iterator" in t || a.hasOwnProperty(r(t)) }
        }, function(e, t, n) {
            function r(e) { var t = q[e] = j(B[N]); return t._k = e, t }

            function o(e, t) { I(e); for (var n, r = k(t = O(t)), o = 0, a = r.length; o < a;) Z(e, n = r[o++], t[n]); return e }

            function a(e) { var t = U.call(this, e = A(e, !0)); return !(this === K && l(q, e) && !l(H, e)) && (!(t || !l(this, e) || !l(q, e) || l(this, W) && this[W][e]) || t) }

            function i(e, t) { if (e = O(e), t = A(t, !0), e !== K || !l(q, t) || l(H, t)) { var n = E(e, t); return !n || !l(q, t) || l(e, W) && e[W][t] || (n.enumerable = !0), n } }

            function c(e) { for (var t, n = R(O(e)), r = [], o = 0; n.length > o;) l(q, t = n[o++]) || t == W || t == h || r.push(t); return r }

            function u(e) { for (var t, n = e === K, r = R(n ? H : O(e)), o = [], a = 0; r.length > a;) !l(q, t = r[a++]) || n && !l(K, t) || o.push(q[t]); return o }
            var s = n(3),
                l = n(9),
                f = n(7),
                d = n(0),
                p = n(11),
                h = n(29).KEY,
                v = n(1),
                g = n(57),
                b = n(36),
                y = n(31),
                m = n(5),
                w = n(83),
                _ = n(111),
                k = n(112),
                S = n(64),
                I = n(4),
                O = n(12),
                A = n(24),
                C = n(25),
                j = n(27),
                P = n(84),
                M = n(22),
                T = n(6),
                x = n(32),
                E = M.f,
                D = T.f,
                R = P.f,
                B = s.Symbol,
                F = s.JSON,
                L = F && F.stringify,
                N = "prototype",
                W = m("_hidden"),
                V = m("toPrimitive"),
                U = {}.propertyIsEnumerable,
                G = g("symbol-registry"),
                q = g("symbols"),
                H = g("op-symbols"),
                K = Object[N],
                z = "function" == typeof B,
                J = s.QObject,
                Q = !J || !J[N] || !J[N].findChild,
                X = f && v(function() { return 7 != j(D({}, "a", { get: function() { return D(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) {
                    var r = E(K, t);
                    r && delete K[t], D(e, t, n), r && e !== K && D(K, t, r)
                } : D,
                Y = z && "symbol" == typeof B.iterator ? function(e) { return "symbol" == typeof e } : function(e) { return e instanceof B },
                Z = function(e, t, n) { return e === K && Z(H, t, n), I(e), t = A(t, !0), I(n), l(q, t) ? (n.enumerable ? (l(e, W) && e[W][t] && (e[W][t] = !1), n = j(n, { enumerable: C(0, !1) })) : (l(e, W) || D(e, W, C(1, {})), e[W][t] = !0), X(e, t, n)) : D(e, t, n) };
            z || (p((B = function(e) {
                if (this instanceof B) throw TypeError("Symbol is not a constructor!");
                var t = y(0 < arguments.length ? e : ze),
                    n = function(e) { this === K && n.call(H, e), l(this, W) && l(this[W], t) && (this[W][t] = !1), X(this, t, C(1, e)) };
                return f && Q && X(K, t, { configurable: !0, set: n }), r(t)
            })[N], "toString", function() { return this._k }), M.f = i, T.f = Z, n(34).f = P.f = c, n(47).f = a, n(46).f = u, f && !n(37) && p(K, "propertyIsEnumerable", a, !0), w.f = function(e) { return r(m(e)) }), d(d.G + d.W + d.F * !z, { Symbol: B });
            for (var $ = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; $.length > ee;) m($[ee++]);
            for (var te = x(m.store), ne = 0; te.length > ne;) _(te[ne++]);
            d(d.S + d.F * !z, "Symbol", {
                for: function(e) { return l(G, e += "") ? G[e] : G[e] = B(e) },
                keyFor: function(e) {
                    if (!Y(e)) throw TypeError(e + " is not a symbol!");
                    for (var t in G)
                        if (G[t] === e) return t
                },
                useSetter: function() { Q = !0 },
                useSimple: function() { Q = !1 }
            }), d(d.S + d.F * !z, "Object", { create: function(e, t) { return t === ze ? j(e) : o(j(e), t) }, defineProperty: Z, defineProperties: o, getOwnPropertyDescriptor: i, getOwnPropertyNames: c, getOwnPropertySymbols: u }), F && d(d.S + d.F * (!z || v(function() { var e = B(); return "[null]" != L([e]) || "{}" != L({ a: e }) || "{}" != L(Object(e)) })), "JSON", { stringify: function(e) { if (e !== ze && !Y(e)) { for (var t, n, r = [e], o = 1; o < arguments.length;) r.push(arguments[o++]); return "function" == typeof(t = r[1]) && (n = t), !n && S(t) || (t = function(e, t) { if (n && (t = n.call(this, e, t)), !Y(t)) return t }), r[1] = t, L.apply(F, r) } } }), B[N][V] || n(14)(B[N], V, B[N].valueOf), b(B, "Symbol"), b(Math, "Math", !0), b(s.JSON, "JSON", !0)
        }, function(e, t, n) {
            var r = n(3),
                o = n(30),
                a = n(37),
                i = n(83),
                c = n(6).f;
            e.exports = function(e) { var t = o.Symbol || (o.Symbol = !a && r.Symbol || {}); "_" == e.charAt(0) || e in t || c(t, e, { value: i.f(e) }) }
        }, function(e, t, n) {
            var c = n(32),
                u = n(46),
                s = n(47);
            e.exports = function(e) {
                var t = c(e),
                    n = u.f;
                if (n)
                    for (var r, o = n(e), a = s.f, i = 0; o.length > i;) a.call(e, r = o[i++]) && t.push(r);
                return t
            }
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Object", { create: n(27) })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S + r.F * !n(7), "Object", { defineProperty: n(6).f })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S + r.F * !n(7), "Object", { defineProperties: n(81) })
        }, function(e, t, n) {
            var r = n(12),
                o = n(22).f;
            n(18)("getOwnPropertyDescriptor", function() { return function(e, t) { return o(r(e), t) } })
        }, function(e, t, n) {
            var r = n(13),
                o = n(28);
            n(18)("getPrototypeOf", function() { return function(e) { return o(r(e)) } })
        }, function(e, t, n) {
            var r = n(13),
                o = n(32);
            n(18)("keys", function() { return function(e) { return o(r(e)) } })
        }, function(e, t, n) { n(18)("getOwnPropertyNames", function() { return n(84).f }) }, function(e, t, n) {
            var r = n(2),
                o = n(29).onFreeze;
            n(18)("freeze", function(t) { return function(e) { return t && r(e) ? t(o(e)) : e } })
        }, function(e, t, n) {
            var r = n(2),
                o = n(29).onFreeze;
            n(18)("seal", function(t) { return function(e) { return t && r(e) ? t(o(e)) : e } })
        }, function(e, t, n) {
            var r = n(2),
                o = n(29).onFreeze;
            n(18)("preventExtensions", function(t) { return function(e) { return t && r(e) ? t(o(e)) : e } })
        }, function(e, t, n) {
            var r = n(2);
            n(18)("isFrozen", function(t) { return function(e) { return !r(e) || !!t && t(e) } })
        }, function(e, t, n) {
            var r = n(2);
            n(18)("isSealed", function(t) { return function(e) { return !r(e) || !!t && t(e) } })
        }, function(e, t, n) {
            var r = n(2);
            n(18)("isExtensible", function(t) { return function(e) { return !!r(e) && (!t || t(e)) } })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S + r.F, "Object", { assign: n(54) })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Object", { is: n(128) })
        }, function(e, t) { e.exports = Object.is || function(e, t) { return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t } }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Object", { setPrototypeOf: n(65).set })
        }, function(e, t, n) {
            var r = n(44),
                o = {};
            o[n(5)("toStringTag")] = "z", o + "" != "[object z]" && n(11)(Object.prototype, "toString", function() { return "[object " + r(this) + "]" }, !0)
        }, function(e, t, n) {
            var r = n(0);
            r(r.P, "Function", { bind: n(85) })
        }, function(e, t, n) {
            var r = n(6).f,
                o = Function.prototype,
                a = /^\s*function ([^ (]*)/;
            "name" in o || n(7) && r(o, "name", { configurable: !0, get: function() { try { return ("" + this).match(a)[1] } catch (e) { return "" } } })
        }, function(e, t, n) {
            var r = n(2),
                o = n(28),
                a = n(5)("hasInstance"),
                i = Function.prototype;
            a in i || n(6).f(i, a, {
                value: function(e) {
                    if ("function" != typeof this || !r(e)) return !1;
                    if (!r(this.prototype)) return e instanceof this;
                    for (; e = o(e);)
                        if (this.prototype === e) return !0;
                    return !1
                }
            })
        }, function(e, t, n) {
            var r = n(0),
                o = n(87);
            r(r.G + r.F * (parseInt != o), { parseInt: o })
        }, function(e, t, n) {
            var r = n(0),
                o = n(88);
            r(r.G + r.F * (parseFloat != o), { parseFloat: o })
        }, function(e, t, n) {
            function r(e) {
                var t = l(e, !1);
                if ("string" == typeof t && 2 < t.length) {
                    var n, r, o, a = (t = m ? t.trim() : p(t, 3)).charCodeAt(0);
                    if (43 === a || 45 === a) { if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN } else if (48 === a) {
                        switch (t.charCodeAt(1)) {
                            case 66:
                            case 98:
                                r = 2, o = 49;
                                break;
                            case 79:
                            case 111:
                                r = 8, o = 55;
                                break;
                            default:
                                return +t
                        }
                        for (var i, c = t.slice(2), u = 0, s = c.length; u < s; u++)
                            if ((i = c.charCodeAt(u)) < 48 || o < i) return NaN;
                        return parseInt(c, r)
                    }
                }
                return +t
            }
            var o = n(3),
                a = n(9),
                i = n(20),
                c = n(67),
                l = n(24),
                u = n(1),
                s = n(34).f,
                f = n(22).f,
                d = n(6).f,
                p = n(48).trim,
                h = "Number",
                v = o[h],
                g = v,
                b = v.prototype,
                y = i(n(27)(b)) == h,
                m = "trim" in String.prototype;
            if (!v(" 0o1") || !v("0b1") || v("+0x1")) {
                v = function(e) {
                    var t = arguments.length < 1 ? 0 : e,
                        n = this;
                    return n instanceof v && (y ? u(function() { b.valueOf.call(n) }) : i(n) != h) ? c(new g(r(t)), n, v) : r(t)
                };
                for (var w, _ = n(7) ? s(g) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), k = 0; _.length > k; k++) a(g, w = _[k]) && !a(v, w) && d(v, w, f(g, w));
                (v.prototype = b).constructor = v, n(11)(o, h, v)
            }
        }, function(e, t, n) {
            function s(e, t) { for (var n = -1, r = t; ++n < 6;) r += e * i[n], i[n] = r % 1e7, r = a(r / 1e7) }

            function l(e) { for (var t = 6, n = 0; 0 <= --t;) n += i[t], i[t] = a(n / e), n = n % e * 1e7 }

            function f() { for (var e, t = 6, n = ""; 0 <= --t;) { "" === n && 0 !== t && 0 === i[t] || (e = String(i[t]), n = "" === n ? e : n + h.call("0", 7 - e.length) + e) } return n }
            var r = n(0),
                d = n(21),
                p = n(89),
                h = n(90),
                o = 1..toFixed,
                a = Math.floor,
                i = [0, 0, 0, 0, 0, 0],
                v = "Number.toFixed: incorrect invocation!",
                g = function(e, t, n) { return 0 === t ? n : t % 2 == 1 ? g(e, t - 1, n * e) : g(e * e, t / 2, n) };
            r(r.P + r.F * (!!o && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(1)(function() { o.call({}) })), "Number", {
                toFixed: function(e) {
                    var t, n, r, o, a = p(this, v),
                        i = d(e),
                        c = "",
                        u = "0";
                    if (i < 0 || 20 < i) throw RangeError(v);
                    if (a != a) return "NaN";
                    if (a <= -1e21 || 1e21 <= a) return String(a);
                    if (a < 0 && (c = "-", a = -a), 1e-21 < a)
                        if (n = (t = function(e) { for (var t = 0, n = e; 4096 <= n;) t += 12, n /= 4096; for (; 2 <= n;) t += 1, n /= 2; return t }(a * g(2, 69, 1)) - 69) < 0 ? a * g(2, -t, 1) : a / g(2, t, 1), n *= 4503599627370496, 0 < (t = 52 - t)) {
                            for (s(0, n), r = i; 7 <= r;) s(1e7, 0), r -= 7;
                            for (s(g(10, r, 1), 0), r = t - 1; 23 <= r;) l(1 << 23), r -= 23;
                            l(1 << r), s(1, 1), l(2), u = f()
                        } else s(0, n), s(1 << -t, 0), u = f() + h.call("0", i);
                    return u = 0 < i ? c + ((o = u.length) <= i ? "0." + h.call("0", i - o) + u : u.slice(0, o - i) + "." + u.slice(o - i)) : c + u
                }
            })
        }, function(e, t, n) {
            var r = n(0),
                o = n(1),
                a = n(89),
                i = 1..toPrecision;
            r(r.P + r.F * (o(function() { return "1" !== i.call(1, ze) }) || !o(function() { i.call({}) })), "Number", { toPrecision: function(e) { var t = a(this, "Number#toPrecision: incorrect invocation!"); return e === ze ? i.call(t) : i.call(t, e) } })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Number", { EPSILON: Math.pow(2, -52) })
        }, function(e, t, n) {
            var r = n(0),
                o = n(3).isFinite;
            r(r.S, "Number", { isFinite: function(e) { return "number" == typeof e && o(e) } })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Number", { isInteger: n(91) })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Number", { isNaN: function(e) { return e != e } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(91),
                a = Math.abs;
            r(r.S, "Number", { isSafeInteger: function(e) { return o(e) && a(e) <= 9007199254740991 } })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 })
        }, function(e, t, n) {
            var r = n(0),
                o = n(88);
            r(r.S + r.F * (Number.parseFloat != o), "Number", { parseFloat: o })
        }, function(e, t, n) {
            var r = n(0),
                o = n(87);
            r(r.S + r.F * (Number.parseInt != o), "Number", { parseInt: o })
        }, function(e, t, n) {
            var r = n(0),
                o = n(92),
                a = Math.sqrt,
                i = Math.acosh;
            r(r.S + r.F * !(i && 710 == Math.floor(i(Number.MAX_VALUE)) && i(1 / 0) == 1 / 0), "Math", { acosh: function(e) { return (e = +e) < 1 ? NaN : 94906265.62425156 < e ? Math.log(e) + Math.LN2 : o(e - 1 + a(e - 1) * a(e + 1)) } })
        }, function(e, t, n) {
            var r = n(0),
                o = Math.asinh;
            r(r.S + r.F * !(o && 0 < 1 / o(0)), "Math", { asinh: function e(t) { return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t } })
        }, function(e, t, n) {
            var r = n(0),
                o = Math.atanh;
            r(r.S + r.F * !(o && 1 / o(-0) < 0), "Math", { atanh: function(e) { return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2 } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(68);
            r(r.S, "Math", { cbrt: function(e) { return o(e = +e) * Math.pow(Math.abs(e), 1 / 3) } })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Math", { clz32: function(e) { return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32 } })
        }, function(e, t, n) {
            var r = n(0),
                o = Math.exp;
            r(r.S, "Math", { cosh: function(e) { return (o(e = +e) + o(-e)) / 2 } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(69);
            r(r.S + r.F * (o != Math.expm1), "Math", { expm1: o })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Math", { fround: n(156) })
        }, function(e, t, n) {
            var a = n(68),
                r = Math.pow,
                i = r(2, -52),
                c = r(2, -23),
                u = r(2, 127) * (2 - c),
                s = r(2, -126);
            e.exports = Math.fround || function(e) {
                var t, n, r = Math.abs(e),
                    o = a(e);
                return r < s ? o * (r / s / c + 1 / i - 1 / i) * s * c : u < (n = (t = (1 + c / i) * r) - (t - r)) || n != n ? o * (1 / 0) : o * n
            }
        }, function(e, t, n) {
            var r = n(0),
                u = Math.abs;
            r(r.S, "Math", { hypot: function(e, t) { for (var n, r, o = 0, a = 0, i = arguments.length, c = 0; a < i;) c < (n = u(arguments[a++])) ? (o = o * (r = c / n) * r + 1, c = n) : o += 0 < n ? (r = n / c) * r : n; return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(o) } })
        }, function(e, t, n) {
            var r = n(0),
                o = Math.imul;
            r(r.S + r.F * n(1)(function() { return -5 != o(4294967295, 5) || 2 != o.length }), "Math", {
                imul: function(e, t) {
                    var n = 65535,
                        r = +e,
                        o = +t,
                        a = n & r,
                        i = n & o;
                    return 0 | a * i + ((n & r >>> 16) * i + a * (n & o >>> 16) << 16 >>> 0)
                }
            })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Math", { log10: function(e) { return Math.log(e) * Math.LOG10E } })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Math", { log1p: n(92) })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Math", { log2: function(e) { return Math.log(e) / Math.LN2 } })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Math", { sign: n(68) })
        }, function(e, t, n) {
            var r = n(0),
                o = n(69),
                a = Math.exp;
            r(r.S + r.F * n(1)(function() { return -2e-17 != !Math.sinh(-2e-17) }), "Math", { sinh: function(e) { return Math.abs(e = +e) < 1 ? (o(e) - o(-e)) / 2 : (a(e - 1) - a(-e - 1)) * (Math.E / 2) } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(69),
                a = Math.exp;
            r(r.S, "Math", {
                tanh: function(e) {
                    var t = o(e = +e),
                        n = o(-e);
                    return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (a(e) + a(-e))
                }
            })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Math", { trunc: function(e) { return (0 < e ? Math.floor : Math.ceil)(e) } })
        }, function(e, t, n) {
            var r = n(0),
                a = n(33),
                i = String.fromCharCode,
                o = String.fromCodePoint;
            r(r.S + r.F * (!!o && 1 != o.length), "String", {
                fromCodePoint: function(e) {
                    for (var t, n = [], r = arguments.length, o = 0; o < r;) {
                        if (t = +arguments[o++], a(t, 1114111) !== t) throw RangeError(t + " is not a valid code point");
                        n.push(t < 65536 ? i(t) : i(55296 + ((t -= 65536) >> 10), t % 1024 + 56320))
                    }
                    return n.join("")
                }
            })
        }, function(e, t, n) {
            var r = n(0),
                i = n(12),
                c = n(8);
            r(r.S, "String", { raw: function(e) { for (var t = i(e.raw), n = c(t.length), r = arguments.length, o = [], a = 0; a < n;) o.push(String(t[a++])), a < r && o.push(String(arguments[a])); return o.join("") } })
        }, function(e, t, n) { n(48)("trim", function(e) { return function() { return e(this, 3) } }) }, function(e, t, n) {
            var r = n(93)(!0);
            n(70)(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() {
                var e, t = this._t,
                    n = this._i;
                return n >= t.length ? { value: ze, done: !0 } : (e = r(t, n), this._i += e.length, { value: e, done: !1 })
            })
        }, function(e, t, n) {
            var r = n(0),
                o = n(93)(!1);
            r(r.P, "String", { codePointAt: function(e) { return o(this, e) } })
        }, function(e, t, n) {
            var r = n(0),
                c = n(8),
                u = n(71),
                s = "endsWith",
                l = "" [s];
            r(r.P + r.F * n(73)(s), "String", {
                endsWith: function(e, t) {
                    var n = u(this, e, s),
                        r = 1 < arguments.length ? t : ze,
                        o = c(n.length),
                        a = r === ze ? o : Math.min(c(r), o),
                        i = String(e);
                    return l ? l.call(n, i, a) : n.slice(a - i.length, a) === i
                }
            })
        }, function(e, t, n) {
            var r = n(0),
                o = n(71),
                a = "includes";
            r(r.P + r.F * n(73)(a), "String", { includes: function(e, t) { return !!~o(this, e, a).indexOf(e, 1 < arguments.length ? t : ze) } })
        }, function(e, t, n) {
            var r = n(0);
            r(r.P, "String", { repeat: n(90) })
        }, function(e, t, n) {
            var r = n(0),
                a = n(8),
                i = n(71),
                c = "startsWith",
                u = "" [c];
            r(r.P + r.F * n(73)(c), "String", {
                startsWith: function(e, t) {
                    var n = i(this, e, c),
                        r = a(Math.min(1 < arguments.length ? t : ze, n.length)),
                        o = String(e);
                    return u ? u.call(n, o, r) : n.slice(r, r + o.length) === o
                }
            })
        }, function(e, t, n) { n(10)("anchor", function(t) { return function(e) { return t(this, "a", "name", e) } }) }, function(e, t, n) { n(10)("big", function(e) { return function() { return e(this, "big", "", "") } }) }, function(e, t, n) { n(10)("blink", function(e) { return function() { return e(this, "blink", "", "") } }) }, function(e, t, n) { n(10)("bold", function(e) { return function() { return e(this, "b", "", "") } }) }, function(e, t, n) { n(10)("fixed", function(e) { return function() { return e(this, "tt", "", "") } }) }, function(e, t, n) { n(10)("fontcolor", function(t) { return function(e) { return t(this, "font", "color", e) } }) }, function(e, t, n) { n(10)("fontsize", function(t) { return function(e) { return t(this, "font", "size", e) } }) }, function(e, t, n) { n(10)("italics", function(e) { return function() { return e(this, "i", "", "") } }) }, function(e, t, n) { n(10)("link", function(t) { return function(e) { return t(this, "a", "href", e) } }) }, function(e, t, n) { n(10)("small", function(e) { return function() { return e(this, "small", "", "") } }) }, function(e, t, n) { n(10)("strike", function(e) { return function() { return e(this, "strike", "", "") } }) }, function(e, t, n) { n(10)("sub", function(e) { return function() { return e(this, "sub", "", "") } }) }, function(e, t, n) { n(10)("sup", function(e) { return function() { return e(this, "sup", "", "") } }) }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Date", { now: function() { return (new Date).getTime() } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(13),
                a = n(24);
            r(r.P + r.F * n(1)(function() { return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({ toISOString: function() { return 1 } }) }), "Date", {
                toJSON: function() {
                    var e = o(this),
                        t = a(e);
                    return "number" != typeof t || isFinite(t) ? e.toISOString() : null
                }
            })
        }, function(e, t, n) {
            var r = n(0),
                o = n(191);
            r(r.P + r.F * (Date.prototype.toISOString !== o), "Date", { toISOString: o })
        }, function(e, t, n) {
            function o(e) { return 9 < e ? e : "0" + e }
            var r = n(1),
                a = Date.prototype.getTime,
                i = Date.prototype.toISOString;
            e.exports = r(function() { return "0385-07-25T07:06:39.999Z" != i.call(new Date(-5e13 - 1)) }) || !r(function() { i.call(new Date(NaN)) }) ? function() {
                if (!isFinite(a.call(this))) throw RangeError("Invalid time value");
                var e = this,
                    t = e.getUTCFullYear(),
                    n = e.getUTCMilliseconds(),
                    r = t < 0 ? "-" : 9999 < t ? "+" : "";
                return r + ("00000" + Math.abs(t)).slice(r ? -6 : -4) + "-" + o(e.getUTCMonth() + 1) + "-" + o(e.getUTCDate()) + "T" + o(e.getUTCHours()) + ":" + o(e.getUTCMinutes()) + ":" + o(e.getUTCSeconds()) + "." + (99 < n ? n : "0" + o(n)) + "Z"
            } : i
        }, function(e, t, n) {
            var r = Date.prototype,
                o = "Invalid Date",
                a = "toString",
                i = r[a],
                c = r.getTime;
            new Date(NaN) + "" != o && n(11)(r, a, function() { var e = c.call(this); return e == e ? i.call(this) : o })
        }, function(e, t, n) {
            var r = n(5)("toPrimitive"),
                o = Date.prototype;
            r in o || n(14)(o, r, n(194))
        }, function(e, t, n) {
            var r = n(4),
                o = n(24);
            e.exports = function(e) { if ("string" !== e && "number" !== e && "default" !== e) throw TypeError("Incorrect hint"); return o(r(this), "number" != e) }
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Array", { isArray: n(64) })
        }, function(e, t, n) {
            var h = n(16),
                r = n(0),
                v = n(13),
                g = n(82),
                b = n(60),
                y = n(8),
                m = n(94),
                w = n(61);
            r(r.S + r.F * !n(49)(function(e) { Array.from(e) }), "Array", {
                from: function(e, t, n) {
                    var r, o, a, i, c = v(e),
                        u = "function" == typeof this ? this : Array,
                        s = arguments.length,
                        l = 1 < s ? t : ze,
                        f = l !== ze,
                        d = 0,
                        p = w(c);
                    if (f && (l = h(l, 2 < s ? n : ze, 2)), p == ze || u == Array && b(p))
                        for (o = new u(r = y(c.length)); d < r; d++) m(o, d, f ? l(c[d], d) : c[d]);
                    else
                        for (i = p.call(c), o = new u; !(a = i.next()).done; d++) m(o, d, f ? g(i, l, [a.value, d], !0) : a.value);
                    return o.length = d, o
                }
            })
        }, function(e, t, n) {
            var r = n(0),
                o = n(94);
            r(r.S + r.F * n(1)(function() {
                function e() {}
                return !(Array.of.call(e) instanceof e)
            }), "Array", { of: function() { for (var e = 0, t = arguments.length, n = new("function" == typeof this ? this : Array)(t); e < t;) o(n, e, arguments[e++]); return n.length = t, n } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(12),
                a = [].join;
            r(r.P + r.F * (n(42) != Object || !n(15)(a)), "Array", { join: function(e) { return a.call(o(this), e === ze ? "," : e) } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(59),
                s = n(20),
                l = n(33),
                f = n(8),
                d = [].slice;
            r(r.P + r.F * n(1)(function() { o && d.call(o) }), "Array", {
                slice: function(e, t) {
                    var n = f(this.length),
                        r = s(this);
                    if (t = t === ze ? n : t, "Array" == r) return d.call(this, e, t);
                    for (var o = l(e, n), a = l(t, n), i = f(a - o), c = Array(i), u = 0; u < i; u++) c[u] = "String" == r ? this.charAt(o + u) : this[o + u];
                    return c
                }
            })
        }, function(e, t, n) {
            var r = n(0),
                o = n(17),
                a = n(13),
                i = n(1),
                c = [].sort,
                u = [1, 2, 3];
            r(r.P + r.F * (i(function() { u.sort(ze) }) || !i(function() { u.sort(null) }) || !n(15)(c)), "Array", { sort: function(e) { return e === ze ? c.call(a(this)) : c.call(a(this), o(e)) } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(19)(0),
                a = n(15)([].forEach, !0);
            r(r.P + r.F * !a, "Array", { forEach: function(e, t) { return o(this, e, t) } })
        }, function(e, t, n) {
            var r = n(203);
            e.exports = function(e, t) { return new(r(e))(t) }
        }, function(e, t, n) {
            var r = n(2),
                o = n(64),
                a = n(5)("species");
            e.exports = function(e) { var t; return o(e) && ("function" != typeof(t = e.constructor) || t !== Array && !o(t.prototype) || (t = ze), r(t) && null === (t = t[a]) && (t = ze)), t === ze ? Array : t }
        }, function(e, t, n) {
            var r = n(0),
                o = n(19)(1);
            r(r.P + r.F * !n(15)([].map, !0), "Array", { map: function(e, t) { return o(this, e, t) } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(19)(2);
            r(r.P + r.F * !n(15)([].filter, !0), "Array", { filter: function(e, t) { return o(this, e, t) } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(19)(3);
            r(r.P + r.F * !n(15)([].some, !0), "Array", { some: function(e, t) { return o(this, e, t) } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(19)(4);
            r(r.P + r.F * !n(15)([].every, !0), "Array", { every: function(e, t) { return o(this, e, t) } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(95);
            r(r.P + r.F * !n(15)([].reduce, !0), "Array", { reduce: function(e, t) { return o(this, e, arguments.length, t, !1) } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(95);
            r(r.P + r.F * !n(15)([].reduceRight, !0), "Array", { reduceRight: function(e, t) { return o(this, e, arguments.length, t, !0) } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(55)(!1),
                a = [].indexOf,
                i = !!a && 1 / [1].indexOf(1, -0) < 0;
            r(r.P + r.F * (i || !n(15)(a)), "Array", { indexOf: function(e, t) { return i ? a.apply(this, arguments) || 0 : o(this, e, t) } })
        }, function(e, t, n) {
            var r = n(0),
                a = n(12),
                i = n(21),
                c = n(8),
                u = [].lastIndexOf,
                s = !!u && 1 / [1].lastIndexOf(1, -0) < 0;
            r(r.P + r.F * (s || !n(15)(u)), "Array", {
                lastIndexOf: function(e, t) {
                    if (s) return u.apply(this, arguments) || 0;
                    var n = a(this),
                        r = c(n.length),
                        o = r - 1;
                    for (1 < arguments.length && (o = Math.min(o, i(t))), o < 0 && (o = r + o); 0 <= o; o--)
                        if (o in n && n[o] === e) return o || 0;
                    return -1
                }
            })
        }, function(e, t, n) {
            var r = n(0);
            r(r.P, "Array", { copyWithin: n(96) }), n(45)("copyWithin")
        }, function(e, t, n) {
            var r = n(0);
            r(r.P, "Array", { fill: n(74) }), n(45)("fill")
        }, function(e, t, n) {
            var r = n(0),
                o = n(19)(5),
                a = "find",
                i = !0;
            a in [] && Array(1)[a](function() { i = !1 }), r(r.P + r.F * i, "Array", { find: function(e, t) { return o(this, e, 1 < arguments.length ? t : ze) } }), n(45)(a)
        }, function(e, t, n) {
            var r = n(0),
                o = n(19)(6),
                a = "findIndex",
                i = !0;
            a in [] && Array(1)[a](function() { i = !1 }), r(r.P + r.F * i, "Array", { findIndex: function(e, t) { return o(this, e, 1 < arguments.length ? t : ze) } }), n(45)(a)
        }, function(e, t, n) { n(38)("Array") }, function(e, t, n) {
            var r = n(3),
                a = n(67),
                o = n(6).f,
                i = n(34).f,
                c = n(72),
                u = n(75),
                s = r.RegExp,
                l = s,
                f = s.prototype,
                d = /a/g,
                p = /a/g,
                h = new s(d) !== d;
            if (n(7) && (!h || n(1)(function() { return p[n(5)("match")] = !1, s(d) != d || s(p) == p || "/a/i" != s(d, "i") }))) {
                s = function(e, t) {
                    var n = this instanceof s,
                        r = c(e),
                        o = t === ze;
                    return !n && r && e.constructor === s && o ? e : a(h ? new l(r && !o ? e.source : e, t) : l((r = e instanceof s) ? e.source : e, r && o ? u.call(e) : t), n ? this : f, s)
                };
                for (var v = i(l), g = 0; v.length > g;) ! function(t) { t in s || o(s, t, { configurable: !0, get: function() { return l[t] }, set: function(e) { l[t] = e } }) }(v[g++]);
                (f.constructor = s).prototype = f, n(11)(r, "RegExp", s)
            }
            n(38)("RegExp")
        }, function(e, t, n) {
            n(98);

            function r(e) { n(11)(RegExp.prototype, c, e, !0) }
            var o = n(4),
                a = n(75),
                i = n(7),
                c = "toString",
                u = /./ [c];
            n(1)(function() { return "/a/b" != u.call({ source: "a", flags: "b" }) }) ? r(function() { var e = o(this); return "/".concat(e.source, "/", "flags" in e ? e.flags : !i && e instanceof RegExp ? a.call(e) : ze) }) : u.name != c && r(function() { return u.call(this) })
        }, function(e, t, n) {
            n(50)("match", 1, function(r, o, e) {
                return [function(e) {
                    var t = r(this),
                        n = e == ze ? ze : e[o];
                    return n !== ze ? n.call(e, t) : new RegExp(e)[o](String(t))
                }, e]
            })
        }, function(e, t, n) {
            n(50)("replace", 2, function(o, a, i) {
                return [function(e, t) {
                    var n = o(this),
                        r = e == ze ? ze : e[a];
                    return r !== ze ? r.call(e, n, t) : i.call(String(n), e, t)
                }, i]
            })
        }, function(e, t, n) {
            n(50)("search", 1, function(r, o, e) {
                return [function(e) {
                    var t = r(this),
                        n = e == ze ? ze : e[o];
                    return n !== ze ? n.call(e, t) : new RegExp(e)[o](String(t))
                }, e]
            })
        }, function(e, t, n) {
            n(50)("split", 2, function(o, a, i) {
                var p, h = n(72),
                    v = i,
                    g = [].push,
                    e = "split",
                    b = "length",
                    y = "lastIndex";
                return "c" == "abbc" [e](/(b)*/)[1] || 4 != "test" [e](/(?:)/, -1)[b] || 2 != "ab" [e](/(?:ab)*/)[b] || 4 != "." [e](/(.?)(.?)/)[b] || 1 < "." [e](/()()/)[b] || "" [e](/.?/)[b] ? (p = /()??/.exec("")[1] === ze, i = function(e, t) {
                    var n = String(this);
                    if (e === ze && 0 === t) return [];
                    if (!h(e)) return v.call(n, e, t);
                    var r, o, a, i, c, u = [],
                        s = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                        l = 0,
                        f = t === ze ? 4294967295 : t >>> 0,
                        d = new RegExp(e.source, s + "g");
                    for (p || (r = new RegExp("^" + d.source + "$(?!\\s)", s));
                        (o = d.exec(n)) && !(l < (a = o.index + o[0][b]) && (u.push(n.slice(l, o.index)), !p && 1 < o[b] && o[0].replace(r, function() { for (c = 1; c < arguments[b] - 2; c++) arguments[c] === ze && (o[c] = ze) }), 1 < o[b] && o.index < n[b] && g.apply(u, o.slice(1)), i = o[0][b], l = a, u[b] >= f));) d[y] === o.index && d[y]++;
                    return l === n[b] ? !i && d.test("") || u.push("") : u.push(n.slice(l)), u[b] > f ? u.slice(0, f) : u
                }) : "0" [e](ze, 0)[b] && (i = function(e, t) { return e === ze && 0 === t ? [] : v.call(this, e, t) }), [function(e, t) {
                    var n = o(this),
                        r = e == ze ? ze : e[a];
                    return r !== ze ? r.call(e, n, t) : i.call(String(n), e, t)
                }, i]
            })
        }, function(e, t, n) {
            var r = n(99),
                o = n(41);
            e.exports = n(51)("Map", function(t) { return function(e) { return t(this, 0 < arguments.length ? e : ze) } }, { get: function(e) { var t = r.getEntry(o(this, "Map"), e); return t && t.v }, set: function(e, t) { return r.def(o(this, "Map"), 0 === e ? 0 : e, t) } }, r, !0)
        }, function(e, t, n) {
            var r = n(99),
                o = n(41);
            e.exports = n(51)("Set", function(t) { return function(e) { return t(this, 0 < arguments.length ? e : ze) } }, { add: function(e) { return r.def(o(this, "Set"), e = 0 === e ? 0 : e, e) } }, r)
        }, function(e, t, n) {
            var a, r, o, i, c = n(19)(0),
                u = n(11),
                s = n(29),
                l = n(54),
                f = n(100),
                d = n(2),
                p = n(1),
                h = n(41),
                v = "WeakMap",
                g = s.getWeak,
                b = Object.isExtensible,
                y = f.ufstore,
                m = {};
            n(3)[v] !== ze || (r = function(t) { return function(e) { return t(this, 0 < arguments.length ? e : ze) } }, o = { get: function(e) { if (d(e)) { var t = g(e); return !0 === t ? y(h(this, v)).get(e) : t ? t[this._i] : ze } }, set: function(e, t) { return f.def(h(this, v), e, t) } }, i = e.exports = n(51)(v, r, o, f, !0, !0), p(function() { return 7 != (new i).set((Object.freeze || Object)(m), 7).get(m) }) && (l((a = f.getConstructor(r, v)).prototype, o), s.NEED = !0, c(["delete", "has", "get", "set"], function(r) {
                var e = i.prototype,
                    o = e[r];
                u(e, r, function(e, t) {
                    if (!d(e) || b(e)) return o.call(this, e, t);
                    this._f || (this._f = new a);
                    var n = this._f[r](e, t);
                    return "set" == r ? this : n
                })
            })))
        }, function(e, t, n) {
            var r = n(100),
                o = n(41),
                a = "WeakSet";
            n(51)(a, function(t) { return function(e) { return t(this, 0 < arguments.length ? e : ze) } }, { add: function(e) { return r.def(o(this, a), e, !0) } }, r, !1, !0)
        }, function(e, t, n) {
            var r = n(0),
                o = n(52),
                a = n(76),
                s = n(4),
                l = n(33),
                f = n(8),
                i = n(2),
                c = n(3).ArrayBuffer,
                d = n(77),
                p = a.ArrayBuffer,
                h = a.DataView,
                u = o.ABV && c.isView,
                v = p.prototype.slice,
                g = o.VIEW,
                b = "ArrayBuffer";
            r(r.G + r.W + r.F * (c !== p), { ArrayBuffer: p }), r(r.S + r.F * !o.CONSTR, b, { isView: function(e) { return u && u(e) || i(e) && g in e } }), r(r.P + r.U + r.F * n(1)(function() { return !new p(2).slice(1, ze).byteLength }), b, { slice: function(e, t) { if (v !== ze && t === ze) return v.call(s(this), e); for (var n = s(this).byteLength, r = l(e, n), o = l(t === ze ? n : t, n), a = new(d(this, p))(f(o - r)), i = new h(this), c = new h(a), u = 0; r < o;) c.setUint8(u++, i.getUint8(r++)); return a } }), n(38)(b)
        }, function(e, t, n) {
            var r = n(0);
            r(r.G + r.W + r.F * !n(52).ABV, { DataView: n(76).DataView })
        }, function(e, t, n) { n(23)("Int8", 1, function(r) { return function(e, t, n) { return r(this, e, t, n) } }) }, function(e, t, n) { n(23)("Uint8", 1, function(r) { return function(e, t, n) { return r(this, e, t, n) } }) }, function(e, t, n) { n(23)("Uint8", 1, function(r) { return function(e, t, n) { return r(this, e, t, n) } }, !0) }, function(e, t, n) { n(23)("Int16", 2, function(r) { return function(e, t, n) { return r(this, e, t, n) } }) }, function(e, t, n) { n(23)("Uint16", 2, function(r) { return function(e, t, n) { return r(this, e, t, n) } }) }, function(e, t, n) { n(23)("Int32", 4, function(r) { return function(e, t, n) { return r(this, e, t, n) } }) }, function(e, t, n) { n(23)("Uint32", 4, function(r) { return function(e, t, n) { return r(this, e, t, n) } }) }, function(e, t, n) { n(23)("Float32", 4, function(r) { return function(e, t, n) { return r(this, e, t, n) } }) }, function(e, t, n) { n(23)("Float64", 8, function(r) { return function(e, t, n) { return r(this, e, t, n) } }) }, function(e, t, n) {
            var r = n(0),
                a = n(17),
                i = n(4),
                c = (n(3).Reflect || {}).apply,
                u = Function.apply;
            r(r.S + r.F * !n(1)(function() { c(function() {}) }), "Reflect", {
                apply: function(e, t, n) {
                    var r = a(e),
                        o = i(n);
                    return c ? c(r, t, o) : u.call(r, t, o)
                }
            })
        }, function(e, t, n) {
            var r = n(0),
                u = n(27),
                s = n(17),
                l = n(4),
                f = n(2),
                o = n(1),
                d = n(85),
                p = (n(3).Reflect || {}).construct,
                h = o(function() {
                    function e() {}
                    return !(p(function() {}, [], e) instanceof e)
                }),
                v = !o(function() { p(function() {}) });
            r(r.S + r.F * (h || v), "Reflect", {
                construct: function(e, t, n) {
                    s(e), l(t);
                    var r = arguments.length < 3 ? e : s(n);
                    if (v && !h) return p(e, t, r);
                    if (e == r) {
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3])
                        }
                        var o = [null];
                        return o.push.apply(o, t), new(d.apply(e, o))
                    }
                    var a = r.prototype,
                        i = u(f(a) ? a : Object.prototype),
                        c = Function.apply.call(e, i, t);
                    return f(c) ? c : i
                }
            })
        }, function(e, t, n) {
            var r = n(6),
                o = n(0),
                a = n(4),
                i = n(24);
            o(o.S + o.F * n(1)(function() { Reflect.defineProperty(r.f({}, 1, { value: 1 }), 1, { value: 2 }) }), "Reflect", { defineProperty: function(e, t, n) { a(e), t = i(t, !0), a(n); try { return r.f(e, t, n), !0 } catch (e) { return !1 } } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(22).f,
                a = n(4);
            r(r.S, "Reflect", { deleteProperty: function(e, t) { var n = o(a(e), t); return !(n && !n.configurable) && delete e[t] } })
        }, function(e, t, n) {
            function r(e) { this._t = a(e), this._i = 0; var t, n = this._k = []; for (t in e) n.push(t) }
            var o = n(0),
                a = n(4);
            n(62)(r, "Object", function() {
                var e, t = this._k;
                do { if (this._i >= t.length) return { value: ze, done: !0 } } while (!((e = t[this._i++]) in this._t));
                return { value: e, done: !1 }
            }), o(o.S, "Reflect", { enumerate: function(e) { return new r(e) } })
        }, function(e, t, n) {
            var i = n(22),
                c = n(28),
                u = n(9),
                r = n(0),
                s = n(2),
                l = n(4);
            r(r.S, "Reflect", { get: function e(t, n) { var r, o, a = arguments.length < 3 ? t : arguments[2]; return l(t) === a ? t[n] : (r = i.f(t, n)) ? u(r, "value") ? r.value : r.get !== ze ? r.get.call(a) : ze : s(o = c(t)) ? e(o, n, a) : void 0 } })
        }, function(e, t, n) {
            var r = n(22),
                o = n(0),
                a = n(4);
            o(o.S, "Reflect", { getOwnPropertyDescriptor: function(e, t) { return r.f(a(e), t) } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(28),
                a = n(4);
            r(r.S, "Reflect", { getPrototypeOf: function(e) { return o(a(e)) } })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Reflect", { has: function(e, t) { return t in e } })
        }, function(e, t, n) {
            var r = n(0),
                o = n(4),
                a = Object.isExtensible;
            r(r.S, "Reflect", { isExtensible: function(e) { return o(e), !a || a(e) } })
        }, function(e, t, n) {
            var r = n(0);
            r(r.S, "Reflect", { ownKeys: n(249) })
        }, function(e, t, n) {
            var r = n(34),
                o = n(46),
                a = n(4),
                i = n(3).Reflect;
            e.exports = i && i.ownKeys || function(e) {
                var t = r.f(a(e)),
                    n = o.f;
                return n ? t.concat(n(e)) : t
            }
        }, function(e, t, n) {
            var r = n(0),
                o = n(4),
                a = Object.preventExtensions;
            r(r.S, "Reflect", { preventExtensions: function(e) { o(e); try { return a && a(e), !0 } catch (e) { return !1 } } })
        }, function(e, t, n) {
            var u = n(6),
                s = n(22),
                l = n(28),
                f = n(9),
                r = n(0),
                d = n(25),
                p = n(4),
                h = n(2);
            r(r.S, "Reflect", {
                set: function e(t, n, r) {
                    var o, a, i = arguments.length < 4 ? t : arguments[3],
                        c = s.f(p(t), n);
                    if (!c) {
                        if (h(a = l(t))) return e(a, n, r, i);
                        c = d(0)
                    }
                    return f(c, "value") ? !(!1 === c.writable || !h(i) || ((o = s.f(i, n) || d(0)).value = r, u.f(i, n, o), 0)) : c.set !== ze && (c.set.call(i, r), !0)
                }
            })
        }, function(e, t, n) {
            var r = n(0),
                o = n(65);
            o && r(r.S, "Reflect", { setPrototypeOf: function(e, t) { o.check(e, t); try { return o.set(e, t), !0 } catch (e) { return !1 } } })
        }, function(e, t, n) {
            function r() {}
            var o, a, i, c, u = n(78),
                s = n(37),
                l = n(3),
                f = n(16),
                d = n(44),
                p = n(0),
                h = n(2),
                v = n(17),
                g = n(40),
                b = n(43),
                y = n(77),
                m = n(102).set,
                w = n(254)(),
                _ = n(103),
                k = n(255),
                S = n(256),
                I = "Promise",
                O = l.TypeError,
                A = l.process,
                C = l[I],
                j = "process" == d(A),
                P = a = _.f,
                M = !! function() {
                    try {
                        var e = C.resolve(1),
                            t = (e.constructor = {})[n(5)("species")] = function(e) { e(r, r) };
                        return (j || "function" == typeof PromiseRejectionEvent) && e.then(r) instanceof t
                    } catch (e) {}
                }();
            u.isIOS && (M = !1);

            function T(e) { var t; return !(!h(e) || "function" != typeof(t = e.then)) && t }

            function x(s, t) {
                var n;
                s._n || (s._n = !0, n = s._c, w(function() {
                    for (var c = s._v, u = 1 == s._s, e = 0; n.length > e;) ! function(e) {
                        var t, n, r = u ? e.ok : e.fail,
                            o = e.resolve,
                            a = e.reject,
                            i = e.domain;
                        try { r ? (u || (2 == s._h && B(s), s._h = 1), !0 === r ? t = c : (i && i.enter(), t = r(c), i && i.exit()), t === e.promise ? a(O("Promise-chain cycle")) : (n = T(t)) ? n.call(t, o, a) : o(t)) : a(c) } catch (e) { a(e) }
                    }(n[e++]);
                    s._c = [], s._n = !1, t && !s._h && D(s)
                }))
            }

            function E(e) {
                var t = this;
                t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), x(t, !0))
            }
            var D = function(a) {
                    m.call(l, function() {
                        var e, t, n, r = a._v,
                            o = R(a);
                        if (o && (e = k(function() { j ? A.emit("unhandledRejection", r, a) : (t = l.onunhandledrejection) ? t({ promise: a, reason: r }) : (n = l.console) && n.error && n.error("Unhandled promise rejection", r) }), a._h = j || R(a) ? 2 : 1), a._a = ze, o && e.e) throw e.v
                    })
                },
                R = function(e) {
                    if (1 == e._h) return !1;
                    for (var t, n = e._a || e._c, r = 0; n.length > r;)
                        if ((t = n[r++]).fail || !R(t.promise)) return !1;
                    return !0
                },
                B = function(t) {
                    m.call(l, function() {
                        var e;
                        j ? A.emit("rejectionHandled", t) : (e = l.onrejectionhandled) && e({ promise: t, reason: t._v })
                    })
                },
                F = function(e) {
                    var n, r = this;
                    if (!r._d) {
                        r._d = !0, r = r._w || r;
                        try {
                            if (r === e) throw O("Promise can't be resolved itself");
                            (n = T(e)) ? w(function() { var t = { _w: r, _d: !1 }; try { n.call(e, f(F, t, 1), f(E, t, 1)) } catch (e) { E.call(t, e) } }): (r._v = e, r._s = 1, x(r, !1))
                        } catch (e) { E.call({ _w: r, _d: !1 }, e) }
                    }
                };
            M || (C = function(e) { g(this, C, I, "_h"), v(e), o.call(this); try { e(f(F, this, 1), f(E, this, 1)) } catch (e) { E.call(this, e) } }, (o = function() { this._c = [], this._a = ze, this._s = 0, this._d = !1, this._v = ze, this._h = 0, this._n = !1 }).prototype = n(39)(C.prototype, { then: function(e, t) { var n = P(y(this, C)); return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = j ? A.domain : ze, this._c.push(n), this._a && this._a.push(n), this._s && x(this, !1), n.promise }, catch: function(e) { return this.then(ze, e) } }), i = function() {
                var e = new o;
                this.promise = e, this.resolve = f(F, e, 1), this.reject = f(E, e, 1)
            }, _.f = P = function(e) { return e === C || e === c ? new i : a(e) }), p(p.G + p.W + p.F * !M, { Promise: C }), n(36)(C, I), n(38)(I), c = n(30)[I], p(p.S + p.F * !M, I, { reject: function(e) { var t = P(this); return (0, t.reject)(e), t.promise } }), p(p.S + p.F * (s || !M), I, { resolve: function(e) { return S(s && this === c ? C : this, e) } }), p(p.S + p.F * !(M && n(49)(function(e) { C.all(e).catch(r) })), I, {
                all: function(e) {
                    var i = this,
                        t = P(i),
                        c = t.resolve,
                        u = t.reject,
                        n = k(function() {
                            var r = [],
                                o = 0,
                                a = 1;
                            b(e, !1, function(e) {
                                var t = o++,
                                    n = !1;
                                r.push(ze), a++, i.resolve(e).then(function(e) { n || (n = !0, r[t] = e, --a || c(r)) }, u)
                            }), --a || c(r)
                        });
                    return n.e && u(n.v), t.promise
                },
                race: function(e) {
                    var t = this,
                        n = P(t),
                        r = n.reject,
                        o = k(function() { b(e, !1, function(e) { t.resolve(e).then(n.resolve, r) }) });
                    return o.e && r(o.v), n.promise
                }
            })
        }, function(e, t, n) {
            var c = n(3),
                u = n(102).set,
                s = c.MutationObserver || c.WebKitMutationObserver,
                l = c.process,
                f = c.Promise,
                d = "process" == n(20)(l);
            e.exports = function() {
                function e() {
                    var e, t;
                    for (d && (e = l.domain) && e.exit(); n;) { t = n.fn, n = n.next; try { t() } catch (e) { throw n ? i() : r = ze, e } }
                    r = ze, e && e.enter()
                }
                var n, r, t, o, a, i;
                return i = d ? function() { l.nextTick(e) } : s ? (t = !0, o = document.createTextNode(""), new s(e).observe(o, { characterData: !0 }), function() { o.data = t = !t }) : f && f.resolve ? (a = f.resolve(), function() { a.then(e) }) : function() { u.call(c, e) },
                    function(e) {
                        var t = { fn: e, next: ze };
                        r && (r.next = t), n || (n = t, i()), r = t
                    }
            }
        }, function(e, t) { e.exports = function(e) { try { return { e: !1, v: e() } } catch (e) { return { e: !0, v: e } } } }, function(e, t, n) {
            var r = n(4),
                o = n(2),
                a = n(103);
            e.exports = function(e, t) { if (r(e), o(t) && t.constructor === e) return t; var n = a.f(e); return (0, n.resolve)(t), n.promise }
        }], a.c = i, a.d = function(e, t, n) { a.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n }) }, a.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return a.d(t, "a", t), t }, a.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, a.p = "", a(a.s = 104), "undefined" != typeof module && module.exports ? module.exports = r : "function" == typeof define && define.amd ? define(function() { return r }) : o.core = r
    }(1, 1);
    var __wxTest__ = !1,
        wxRunOnDebug = function(e) { e() },
        __wxConfig, Foundation = function(n) {
            var r = {};

            function o(e) { if (r[e]) return r[e].exports; var t = r[e] = { i: e, l: !1, exports: {} }; return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports }
            return o.m = n, o.c = r, o.d = function(e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, o.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, o.t = function(t, e) {
                if (1 & e && (t = o(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var r in t) o.d(n, r, function(e) { return t[e] }.bind(null, r));
                return n
            }, o.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return o.d(t, "a", t), t }, o.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = "", o(o.s = 5)
        }([function(e, t, n) {
            "use strict";

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            n.r(t), n.d(t, "EventEmitter", function() { return r });
            var r = function() {
                function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.listeners = {} }
                var t, n, r;
                return t = e, (n = [{ key: "emit", value: function(e, t) { if (this.listeners[e] && 0 < this.listeners[e].length) { var n = !1; return this.listeners[e].forEach(function(e) { 0 !== e.count && e.cb(t), 0 < e.count && e.count--, 0 === e.count && (n = !0) }), n && (this.listeners[e] = this.listeners[e].filter(function(e) { return 0 !== e.count })), !0 } return !1 } }, { key: "many", value: function(e, t, n) { if (!t) return this; var r = { count: n, cb: t }; return this.listeners[e] ? this.listeners[e].push(r) : this.listeners[e] = [r], this } }, { key: "on", value: function(e, t) { this.many(e, t, -1) } }, { key: "once", value: function(e, t) { this.many(e, t, 1) } }, { key: "off", value: function(e, t) { for (var n = 0; n < this.listeners[e].length; n++) { var r = this.listeners[e][n]; if (r.cb === t) return void(r.count = 0) } } }]) && o(t.prototype, n), r && o(t, r), e
            }()
        }, function(e, t) {
            var n = function() { return this }();
            try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
            e.exports = n
        }, function(e, t, n) {
            "use strict";

            function r(e) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, _, t) {
            "use strict";
            t.r(_),
                function(e) {
                    var t, n, r = e.__wxLibrary,
                        o = e.__wxConfig,
                        a = r.envType,
                        i = r.contextType,
                        c = "Service" === a,
                        u = "WebView" === a,
                        s = "Worker" === a,
                        l = "Widget" === a,
                        f = u || c && 0 === i.indexOf("App:"),
                        d = c && 0 === i.indexOf("Game:"),
                        p = s && "function" == typeof e.workerInvokeJsApi,
                        h = !!o.isIsolateContext,
                        v = c && (h && 0 <= i.indexOf("Uncertain") || 0 <= i.indexOf("MainContext")),
                        g = c && 0 <= i.indexOf("SubContext"),
                        b = v || g,
                        y = u || v,
                        m = (!(n = o.platform) && u && (0 <= (t = window.navigator.userAgent.toLowerCase()).indexOf("devtools") ? n = "devtools" : 0 <= t.indexOf("miniprogramenv/windows") ? n = "windows" : 0 <= t.indexOf("miniprogramenv/mac") ? n = "mac" : 0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") ? n = "ios" : 0 <= t.indexOf("android") && (n = "android")), (n || "unknown").toLowerCase()),
                        w = "undefined" == typeof __libVersionInfo__ || "develop" === __libVersionInfo__.version ? "9.9.9" : __libVersionInfo__.version;
                    _.default = { platform: m, SDKVersion: w, isIsolateContext: b, isGame: d, isApp: f, isMainContext: v, isSubContext: g, isSafeEnv: y, isService: c, isWebView: u, isWorker: s, isWidget: l, isSupportWorkerAPI: p, typeStr: a }
                }.call(this, t(1))
        }, function(e, t, n) {
            "use strict";

            function a(e, t) { return (a = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

            function r(e, t, n) {
                return (r = function() { if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) { if ("function" == typeof Proxy) return 1; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1 } catch (e) { return } } }() ? Reflect.construct : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var o = new(Function.bind.apply(e, r));
                    return n && a(o, n.prototype), o
                }).apply(null, arguments)
            }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, p, h) {
            "use strict";
            h.r(p),
                function(e) {
                    var t = h(4),
                        n = h(2),
                        r = h(0),
                        o = h(3),
                        a = new r.EventEmitter,
                        i = {},
                        c = "configReady",
                        u = "libraryReady";

                    function s(e, t) { e in i ? t(i[e]) : d.once("lifeCycle:" + e, t) }

                    function l(e, t) { return !(e in i) && (i[e] = t, d.emit("lifeCycle:" + e, t)) }
                    var f = e,
                        d = { EventEmitter: r.EventEmitter, on: a.on.bind(a), emit: a.emit.bind(a), once: a.once.bind(a), onConfigReady: s.bind(null, c), emitConfigReady: l.bind(null, c), get isConfigReady() { return c in i }, onLibraryReady: s.bind(null, u), emitLibraryReady: l.bind(null, u), get isLibraryReady() { return u in i }, onBridgeReady: function(e) { void 0 !== WeixinJSBridge ? e() : "object" === ("undefined" == typeof document ? "undefined" : Object(n.default)(document)) && document.addEventListener("WeixinJSBridgeReady", e, !1) }, env: o.default, global: f };
                    "undefined" != typeof __Function__ && (Function = function() { return "return this" === arguments[arguments.length - 1] ? function() { return f } : Object(t.default)(__Function__, Array.prototype.slice.call(arguments)) }, Function.prototype = __Function__.prototype), e.__wxLibrary.onEnd = function() { d.emitLibraryReady({}) }, p.default = d
                }.call(this, h(1))
        }]).default,
        nativeTrans = function(e) {
            var t = "webViewCreated",
                n = "nativeTransFail",
                r = "nativeTransReady";
            console;
            if ("object" != typeof e.ntrans) return { enabled: e.__nativeTransEnabled__ = !1, EVT_WV_CREATED: t, EVT_NTRANS_FAIL: n };
            e.__nativeTransEnabled__ = !0;
            var a = e.ntrans,
                o = a.id,
                i = o === a.serviceId,
                c = {};

            function u(e) { i ? e(a.serviceId) : Foundation.onConfigReady(function() { e(a.serviceId) }) }

            function s(e, t) { var n = c[e] = c[e] || { connectedTime: 0, dataQueue: [], initTime: Date.now() }; return "number" == typeof t && (n.id = t), c[e] }

            function l(e, t) { return { event: e, param: t, id: o, sendTime: Date.now() } }
            return u(function() { delete e.ntrans }), {
                enabled: !0,
                publishToTargetWithQueue: function(e, t, n) {
                    var r = s(e),
                        o = l(t, n);
                    r.connectedTime ? a.postMessage(r.id, o) : 3e5 < Date.now() - r.initTime ? r.dataQueue = [] : r.dataQueue.push(o)
                },
                packMessage: l,
                broadcastMessage: function(e, t) { a.broadcastMessage(e, t) },
                onMessage: function(t, e) { e !== o && (a.setMessageListener(), o = e), a.setMessageListener(e, function(e) { "function" == typeof t && t(e.event, e.param, e.id, e.sendTime) }) },
                registerTarget: function(e, t) {
                    var n = s(e, t);
                    n.connectedTime = Date.now(), a.postMessage(n.id, l(r)), n.dataQueue.forEach(function(e) { e.sendTime = Date.now(), a.postMessage(n.id, e) }), n.dataQueue = []
                },
                onceServiceConfirmed: u,
                revertTargets: function() {
                    for (var t in c) c[t].dataQueue.forEach(function(e) { WeixinJSBridge.publish(e.event, e.param, [t]) }), c[t].dataQueue = [];
                    c = {}
                },
                isService: i,
                get id() { return o },
                SERVICE_TAG: "AppService",
                EVT_NTRANS_READY: r,
                EVT_WV_CREATED: t,
                EVT_NTRANS_FAIL: n,
                version: a.version,
                addGroup: a.addGroup.bind(a)
            }
        }(this),
        WeixinJSBridge = function(e) {
            "function" == typeof logxx && logxx("jsbridge start");
            var t, n = "undefined" != typeof __devtoolssubcontext && __devtoolssubcontext;
            if (e.navigator && e.navigator.userAgent && ((-1 < (t = e.navigator.userAgent).indexOf("appservice") || -1 < t.indexOf("wechatdevtools")) && (n = !0)), n && !Foundation.env.isWorker || e.useGlobalJSBridge) { var r = e.WeixinJSBridge; return delete e.WeixinJSBridge, r }
            var o = e.__wxConfig || {},
                l = o.isWK,
                f = {},
                d = 0,
                a = {},
                i = "custom_event_",
                c = {},
                p = e.webkit,
                h = e.WeixinJSCore;
            "object" == typeof h && "function" != typeof h.publishHandler && (h.publishHandler = function() {}), Foundation.env.isWorker && Foundation.env.isSupportWorkerAPI && (h = { invokeHandler: e.workerInvokeJsApi }, d = 1 << 25), delete e.webkit, e.WeixinJSCore = { invokeHandler: function() {}, publishHandler: function() {}, setTimerHandler: function() {}, clearTimerHandler: function() {} };

            function v(t, e) {
                if (void 0 !== t && "function" == typeof f[e] && "" !== t && null !== t) {
                    try { t = w(t), t = WeixinNativeBuffer.unpack(t) } catch (e) { t = {} }
                    var n = f[e];
                    delete f[e], "function" == typeof n && n(t)
                }
            }

            function u(e, t, n) {
                t = WeixinNativeBuffer.pack(t);
                var r, o, a, i, c, u = _(t || {}),
                    s = ++d;
                f[s] = n, r = e, o = u, a = s, h ? (c = h.invokeHandler(r, o, a), v(c, a)) : (i = { event: r, paramsString: o, callbackId: a }, l ? (c = prompt("webgame_invoke", _(i)), v(c, a)) : p.messageHandlers.invokeHandler.postMessage(i))
            }

            function s(e, t) {
                t = WeixinNativeBuffer.unpack(t);
                var n = f[e];
                delete f[e], "function" == typeof n && n(t)
            }

            function g(e, t) { a[e] = t }

            function b(e, t, n) {
                var r, o, a;
                r = i + e, o = t, a = n, h ? h.publishHandler(r, _(o), _(a)) : p.messageHandlers.publishHandler.postMessage({ event: r, paramsString: _(o), webviewIds: _(a) })
            }

            function y(e, t) { c[i + e] = t }

            function m(e, t, n, r) {
                var o;
                t = WeixinNativeBuffer.unpack(t), "function" == typeof(o = -1 != e.indexOf(i) ? c[e] : a[e]) && o(t, n, r)
            }
            var w = JSON.parse,
                _ = JSON.stringify;
            return e.WeixinJSBridge = {get invokeCallbackHandler() { return s }, get subscribeHandler() { return m } }, o && o.clientDebug && (e.WeixinJSBridge = { on: g, publish: b, invoke: u, subscribe: y, get invokeCallbackHandler() { return s }, get subscribeHandler() { return m } }), { on: g, publish: b, invoke: u, subscribe: y, loadJsFiles: function(e, t) { u("loadJsFiles", { paths: e }, t) }, get invokeCallbackHandler() { return s }, get subscribeHandler() { return m } }
        }(this);
    Foundation.onBridgeReady(function() {
            var o, a = String.prototype.replace,
                i = WeixinJSBridge.publish,
                c = [];
            WeixinJSBridge.publish = function(e, t, n) {
                var r;
                Foundation.isConfigReady || nativeTrans.enabled ? (n = function(e) { if (Array.isArray(e)) { var t = e.filter(function(e) { return null != e }); if (0 === e.length || 0 !== t.length) return t } }(n || [])) && (r = e || "", e = a.call(r, /["']/g, ""), o && o(e, t, n) || i.call(WeixinJSBridge, e, t, n)) : c.push([e, t, n])
            }, Foundation.onConfigReady(function() { c.forEach(function(e) { WeixinJSBridge.publish.apply(WeixinJSBridge, e) }), c = [] }), WeixinJSBridge.setCustomPublishHandler = function(e) { o = e }
        }),
        function(a) {
            var t = JSON.parse,
                n = JSON.stringify,
                o = Object.defineProperty,
                r = Foundation.env.isSubContext,
                i = Foundation.env.isSafeEnv,
                c = {},
                e = ["env", "appLaunchInfo", "ext", "wxAppInfo", "debug", "entryPagePath", "envVersion", "tabBar", "pages", "page", "accountInfo", "global", "platform", "system", "appType", "networkTimeout", "navigateToMiniProgramAppIdList", "plugins", "extAppid", "host", "prerender"];

            function u(e, t, n, r) {
                o(e, n, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        if (n in t) return t[n];
                        try {
                            (new Error).stack, "object" == typeof Reporter && "function" == typeof Reporter.reportKeyValue && Reporter.reportKeyValue({ key: "DeprecatedAPI", value: "__wxConfig." + n, force: !0 })
                        } catch (e) {}
                        try { return "function" != typeof r ? r : r() } catch (e) { return }
                    },
                    set: function(e) { t[n] = e }
                })
            }

            function s(e) { return t(n(e)) }
            var l = !0 === (__wxConfig = void 0 !== a.__wxConfig ? i ? Object.assign({}, a.__wxConfig) : s(a.__wxConfig) : {}).preload,
                f = !1,
                d = [],
                p = [],
                h = Foundation.env.typeStr;
            Foundation.env.isSubContext && (h = "SubContext");

            function v(e, t) {
                try {
                    Date.now();
                    e(t);
                    Date.now()
                } catch (e) { e.message, e.stack, "object" == typeof Reporter && "function" == typeof Reporter.errorReport && Reporter.errorReport({ key: "appServiceSDKScriptError", error: e, extend: "at wxConfig.onReady callback" }) }
            }

            function g(e) { p.push(e) }

            function b(e) { f ? void 0 !== __wxConfig && v(e, __wxConfig) : "function" == typeof e && d.push(e) }

            function y(e) { e.tabBar && e.tabBar.list && e.tabBar.list.forEach(function(e) { delete e.iconData, delete e.selectedIconData }), delete e.permission; var t = e.subPackages || e.subpackages; return t && 0 < t.length && (t.forEach(function(e) { delete e.pages }), e.subPackages = e.subpackages = t), f && (__libVersionInfo__.features && __libVersionInfo__.features.pruneWxConfigByPage && (r || (__wxConfig._preloadRule = __wxConfig.preloadRule || {}, __wxConfig._page = __wxConfig.page || {}, delete __wxConfig.preloadRule, delete __wxConfig.page), __wxConfig.updatePage = function(e, t) { __wxConfig.page = __wxConfig.page || {}, __wxConfig.page[e] = __wxConfig.page[e + ".html"] = t, c[e + ".html"] = s(t) }, __wxConfig.updatePreloadRule = function(e, t) { __wxConfig.preloadRule = __wxConfig.preloadRule || {}, __wxConfig.preloadRule[e] = t }), a.__wxConfig.page = a.__wxConfig.page || {}, __wxConfig.page = __wxConfig.page || {}), e }

            function m(e) { return e.onReady = b, e.beforeReady = g, r || (e.preload = l), e.isReady = f, e.isSubContext = r, e.envTag = h, e.isSafeContext = i, e.sdkVersion = e.SDKVersion = Foundation.env.SDKVersion, e.twoPhaseInject = !0, e.platform = Foundation.env.platform, e.brand || "ios" !== e.platform || (e.brand = "iPhone"), "number" == typeof e.pixelRatio ? e.devicePixelRatio = e.pixelRatio : "number" == typeof e.devicePixelRatio && (e.pixelRatio = e.devicePixelRatio), e }

            function w() {
                void 0 === a.__wxConfig || f || (f = !0, Object.assign(__wxConfig, i ? a.__wxConfig : s(a.__wxConfig)), __wxConfig = m(__wxConfig), __wxConfig = y(__wxConfig), function(e) {
                    if (!p.length) return e();
                    var t = !1;
                    setTimeout(function() { t || (console.warn("beforeReady timeout"), t = !0, e()) }, 3e3), Promise.all(p).catch(function(e) { console.warn("beforeReady error", e) }).then(function() { t || (t = !0, e()) }), p = []
                }(function() {
                    __wxConfig.onReadyStart = Date.now(), d.forEach(function(e) { v(e, __wxConfig) }), __wxConfig.onReadyEnd = Date.now(), d = [],
                        function() {
                            if (!i) {
                                var n = a.__wxConfig,
                                    r = {},
                                    o = {};
                                c = n.page || {}, __libVersionInfo__.features && __libVersionInfo__.features.pruneWxConfigByPage && (c = {});
                                try {
                                    u(o, r, "deprecated", !0), e.forEach(function(e) {
                                        if (e in n) {
                                            var t = n[e];
                                            switch (e) {
                                                case "page":
                                                    u(o, r, e, c);
                                                    break;
                                                case "env":
                                                    u(o, r, e, function() { return console.warn("DeprecationWarning: __wxConfig.env is deprecated, please use wx.env instead."), { USER_DATA_PATH: t.USER_DATA_PATH } });
                                                    break;
                                                case "accountInfo":
                                                    u(o, r, e, { appId: t.appId, icon: t.icon, nickname: t.nickname });
                                                    break;
                                                case "appLaunchInfo":
                                                    u(o, r, e, function() { return console.warn("DeprecationWarning: __wxConfig.appLaunchInfo is deprecated, please use wx.getLaunchOptionsSync() instead."), wx && "function" == typeof wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : {} });
                                                    break;
                                                case "wxAppInfo":
                                                    u(o, r, e, { maxRequestConcurrent: t.maxRequestConcurrent, maxUploadConcurrent: t.maxUploadConcurrent, maxDownloadConcurrent: t.maxDownloadConcurrent, maxWorkerConcurrent: t.maxWorkerConcurrent, maxWebsocketConnect: t.maxWebsocketConnect });
                                                    break;
                                                default:
                                                    u(o, r, e, t)
                                            }
                                        }
                                    }), a.__wxConfig = o
                                } catch (e) { a.__wxConfig = n }
                            }
                        }()
                }))
            }

            function _() { Foundation.emitConfigReady(__wxConfig) }
            __wxConfig = m(__wxConfig), __wxConfig = y(__wxConfig), Foundation.onConfigReady(function() { w() }), r ? __wxConfig.__readyHandler = _ : l ? Foundation.onBridgeReady(function() { WeixinJSBridge.on("onWxConfigReady", _) }) : Foundation.onLibraryReady(_)
        }(this),
        function(e) {
            function o(e) { Foundation.emit("unhandledRejection", e) || console.error("Uncaught (in promise)", e.reason) }
            var n, r, a = (n = [], r = [], { set: function(e, t) { n.push(e), r.push(t) }, get: function(e) { var t = n.indexOf(e); if (-1 !== t) return r[t] }, delete: function(e) { var t = n.indexOf(e); - 1 !== t && (n.splice(t, 1), r.splice(t, 1)) } });
            "object" == typeof e && "function" == typeof e.addEventListener ? (e.addEventListener("unhandledrejection", function(e) { o({ reason: e.reason, promise: e.promise }), e.preventDefault() }), e.addEventListener("error", function(e) {
                var t;
                t = e.error || e.message, Foundation.emit("error", t) || console.error("Uncaught", t), e.preventDefault()
            })) : void 0 === e.onunhandledrejection && Object.defineProperty(e, "onunhandledrejection", {
                value: function(e) {
                    var t, n, r;
                    e = e || {}, "android" === __wxConfig.platform ? (t = { type: e.type, reason: e.reason, promise: e.promise }, (r = a.get(t.promise)) ? r.event = t : (n = { event: t }, setTimeout(function() { 0 === n.event.type && o(n.event), a.delete(n.event.promise) }, 0), a.set(t.promise, n))) : o({ reason: e.reason, promise: e.promise })
                }
            })
        }(this);
    var wxConsole = ["log", "info", "warn", "error", "debug", "time", "timeEnd", "group", "groupEnd"].reduce(function(e, t) { return e[t] = function() {}, e }, {}),
        wxPerfConsole = ["log", "info", "warn", "error", "time", "timeEnd", "trace", "profile", "profileSync"].reduce(function(e, t) { return e[t] = function() {}, e }, {}),
        wxNativeConsole = function(n) {
            var r = {};

            function o(e) { if (r[e]) return r[e].exports; var t = r[e] = { i: e, l: !1, exports: {} }; return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports }
            return o.m = n, o.c = r, o.d = function(e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, o.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, o.t = function(t, e) {
                if (1 & e && (t = o(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var r in t) o.d(n, r, function(e) { return t[e] }.bind(null, r));
                return n
            }, o.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return o.d(t, "a", t), t }, o.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = "", o(o.s = 0)
        }([function(e, t, n) {
            "use strict";

            function f(e) { return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function r(t, e) { var n, r = Object.keys(t); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, n)), r }

            function a(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(a), !0).forEach(function(e) {
                        var t, n, r;
                        t = o, r = a[n = e], n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach(function(e) { Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e)) })
                }
                return o
            }
            n.r(t);
            var i = Foundation.onConfigReady,
                o = Foundation.env,
                c = ["log", "info", "warn", "error", "debug", "createLogger"].reduce(function(e, t) { return e[t] = function() {}, e }, {});

            function u(e, t) { this.num = e, this.type = t }

            function d(e, t) { return { debug: e(s.DEBUG, t), log: e(s.LOG, t), info: e(s.INFO, t), warn: e(s.WARN, t), error: e(s.ERROR, t) } }
            var s = { ALL: new u(Number.MIN_VALUE, "ALL"), DEBUG: new u(5e3, "DEBUG"), LOG: new u(1e4, "LOG"), INFO: new u(2e4, "INFO"), WARN: new u(3e4, "WARN"), ERROR: new u(4e4, "ERROR"), OFF: new u(Number.MAX_VALUE, "OFF") },
                p = s.INFO;
            (function() { p = s.ALL })();
            var l;

            function h(r, o) {
                return function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    l.push({ level: r, logs: t, category: o })
                }
            }
            c = o.isWorker || o.isWidget ? Object.assign({ createLogger: function() { return wxConsole } }, wxConsole) : o.isSubContext && o.isIsolateContext ? (l = [], i(function t() {
                setTimeout(function() {
                    var e = wxNativeConsole.__isFromMainContext ? wxNativeConsole.__mergeSubContextLogs : null;
                    e ? (e(l), l = []) : t()
                }, 1e3)
            }), a(a({}, d(h)), {}, { createLogger: function(e) { return d(h, "string" == typeof e ? e : "default") }, __isFromMainContext: !1 })) : function() {
                function n(e) {
                    var t = ("0" + (e.getMonth() + 1)).slice(-2),
                        n = ("0" + e.getDate()).slice(-2),
                        r = ("0" + e.getHours()).slice(-2),
                        o = ("0" + e.getMinutes()).slice(-2),
                        a = ("0" + e.getSeconds()).slice(-2),
                        i = ("00" + e.getMilliseconds()).slice(-3),
                        c = e.getFullYear() + "-" + t + "-" + n,
                        u = r + ":" + o + ":" + a + "." + i;
                    return "ios" !== s ? c + " " + (e.getTimezoneOffset() / 60 * -1).toFixed(1).replace(/^(\d)/, "+$1") + " " + u : c + " " + u + "000" + (e.getTimezoneOffset() / 6e3 * -1).toFixed(4).replace(/^0\./, "+").replace(/-0\./, "-")
                }

                function o(i, c) {
                    var u = i.type;
                    return function() {
                        for (var e, t, n, r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        c && Array.prototype.unshift.call(o, "[" + c + "]"), (e = wxConsole[u.toLowerCase()]).call.apply(e, [wxConsole].concat(o)), i.num >= p.num && (t = new Date, n = Array.prototype.slice.call(o).map(function(e) {
                            switch (f(e)) {
                                case "bigint":
                                case "boolean":
                                case "function":
                                case "number":
                                    return e.toString();
                                case "string":
                                    return e;
                                case "symbol":
                                    return e.toString();
                                case "undefined":
                                    return "undefined";
                                case "object":
                                    var t;
                                    try { t = JSON.stringify(e) } catch (e) { t = "[对象含有循环引用]" }
                                    return t;
                                default:
                                    return
                            }
                        }).join(" "), l && 1024 < l.length && l.shift(), l.push({ date: t, type: u, content: n }))
                    }
                }
                var s = __wxConfig.platform,
                    l = [];
                i(function() {
                    setTimeout(function e() {
                        var t;
                        setTimeout(e, 3e3), 0 !== l.length && (t = l, "ios" === s ? WeixinJSBridge.invoke("systemLog", { dataArray: t.map(function(e) { return { message: "\n" + n(e.date) + " [" + e.type[0].toUpperCase() + "][wxapplib]] " + e.content } }) }) : "android" === s && WeixinJSBridge.invoke("systemLog", { message: ["\n"].concat(t.map(function(e) { return "[" + e.type[0].toUpperCase() + "][" + n(e.date) + "][wxapplib]] " + e.content })).join("\n") }), l = [])
                    }, 3e3)
                });
                return a(a({}, d(o)), {}, {
                    createLogger: function(e) { return d(o, "string" == typeof e ? e : "default") },
                    __mergeSubContextLogs: function(e) {
                        Array.isArray(e) && e.forEach(function(e) {
                            var t = e.level,
                                n = e.logs,
                                r = e.category;
                            o(t, r)(n)
                        })
                    },
                    __isFromMainContext: !0
                })
            }();
            t.default = c
        }]).default,
        NativeBuffer = function(e) {
            var r = e.WeixinNativeBuffer,
                o = e.getNativeBufferId,
                a = e.setNativeBuffer,
                n = e.getNativeBuffer,
                t = __wxConfig || {},
                i = !1;
            "android" === t.platform || "windows" === t.platform ? i = "function" == typeof o && "function" == typeof a && "function" == typeof n && t.nativeBufferEnabled : "ios" !== t.platform && "mac" !== t.platform || (i = null != r);

            function c(e) {
                var t = {};
                return i ? t.id = function(e) {
                    var t = e.__proto__;
                    e.__proto__ = ArrayBuffer.prototype;
                    var n = -1;
                    return r ? n = r.new(e) : "function" == typeof o && "function" == typeof a && (n = o(), a(n, e)), e.__proto__ = t, n
                }(e) : t.base64 = d(e), t
            }

            function u(e) { var t; if (null != e) return i && void 0 !== e.id ? (t = e.id, r ? r.get(t) : "function" == typeof n ? n(t) : void 0) : void 0 !== e.base64 ? p(e.base64) : void 0 }
            var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                l = l || function(e) {
                    for (var t, n, r = String(e), o = "", a = 0, i = s; r.charAt(0 | a) || (i = "=", a % 1); o += i.charAt(63 & t >> 8 - a % 1 * 8)) {
                        if (255 < (n = r.charCodeAt(a += .75))) throw new Error('"btoa" failed');
                        t = t << 8 | n
                    }
                    return o
                },
                f = f || function(e) {
                    var t = String(e).replace(/=+$/, ""),
                        n = "";
                    if (t.length % 4 == 1) throw new Error('"atob" failed');
                    for (var r, o, a = 0, i = 0; o = t.charAt(i++); ~o && (r = a % 4 ? 64 * r + o : o, a++ % 4) && (n += String.fromCharCode(255 & r >> (-2 * a & 6)))) o = s.indexOf(o);
                    return n
                },
                d = function(e) { for (var t = "", n = new Uint8Array(e), r = n.byteLength, o = 0; o < r; o++) t += String.fromCharCode(n[o]); return l(t) },
                p = function(e) { for (var t = f(e), n = t.length, r = new Uint8Array(n), o = 0; o < n; o++) r[o] = t.charCodeAt(o); return r.buffer },
                h = function(e) { return Object.prototype.toString.call(e).split(" ")[1].split("]")[0] };
            return delete e.WeixinNativeBuffer, delete e.getNativeBufferId, delete e.setNativeBuffer, delete e.getNativeBuffer, {
                new: c,
                get: u,
                useCompatibleMode: function(e) { r && r.useCompatibleMode(e) },
                pack: function(e) {
                    if (null == e) return e;
                    var t = [];
                    for (var n in e) {
                        var r = e[n];
                        void 0 !== r && "ArrayBuffer" === h(r) && void 0 !== r.byteLength && ((o = c(r)).key = n, t.push(o))
                    }
                    if (0 < t.length) {
                        for (var o, a = 0; a < t.length; a++) { delete e[(o = t[a]).key] }
                        e.__nativeBuffers__ = t
                    }
                    return e
                },
                unpack: function(e) {
                    if (null == e || null == e.__nativeBuffers__) return e;
                    var t = e.__nativeBuffers__;
                    delete e.__nativeBuffers__;
                    for (var n = 0; n < t.length; n++) {
                        var r, o = t[n];
                        null != o && (void 0 !== (r = u(o)) && "ArrayBuffer" === h(r) && (e[o.key] = r))
                    }
                    return e
                }
            }
        }(this),
        WeixinNativeBuffer = NativeBuffer,
        NativeBuffer = null,
        WeixinWorker = function(e) {
            var t, o = ["request", "createSocketTask", "operateSocketTask", "onSocketTaskStateChange", "createRequestTask", "createRequestTaskAsync", "operateRequestTask", "onRequestTaskStateChange", "createDownloadTask", "createDownloadTaskAsync", "operateDownloadTask", "onDownloadTaskStateChange", "createUploadTask", "createUploadTaskAsync", "operateUploadTask", "onUploadTaskStateChange", "getNetworkType", "createAudioInstance", "createAudioInstanceAsync", "operateAudio", "destroyAudioInstance", "getAudioState", "setAudioState", "onAudioStateChange", "uploadFile", "downloadFile", "saveFile", "getFileInfo", "getSavedFileInfo", "getSavedFileList", "removeSavedFile", "readFile", "writeFile", "mkdir", "readdir", "rmdir", "access", "unlink", "stat", "copyFile", "rename", "fs_appendFile", "fs_appendFileSync", "fs_copyFile", "fs_copyFileSync", "fs_rename", "fs_renameSync", "getABTestConfig", "reportKeyValue", "reportIDKey"],
                n = !1;
            e.navigator && e.navigator.userAgent && ((-1 < (t = e.navigator.userAgent).indexOf("appservice") || -1 < t.indexOf("wechatdevtools")) && (n = !0));

            function r(t) { t = WeixinNativeBuffer.unpack(t), f.forEach(function(e) { "function" == typeof e && e(t) }) }

            function a(t, n) { n = WeixinNativeBuffer.unpack(n), l.forEach(function(e) { "function" == typeof e && e(t, n) }) }

            function i(t, n) { d.forEach(function(e) { "function" == typeof e && e(t, n) }) }

            function c(t) { p.forEach(function(e) { "function" == typeof e && e(t) }) }
            var u = e.WeAppWorker,
                s = e.WeixinWorker || {},
                l = [],
                f = [],
                d = [],
                p = [],
                h = [];
            Foundation.on("error", c), Foundation.on("unhandledRejection", function(t) { h.forEach(function(e) { "function" == typeof e && e(t) }) });
            var v = {get appServiceMsgHandler() { return r }, get workerMsgHandler() { return a }, get workerCreatedHandler() { return i }, get errorHandler() { return c }, get __workerId__() { return s.__workerId__ } },
                g = {
                    create: function(e, t) {
                        var n = !(!(t = t || {}).useExperimentalWorker || !u),
                            r = n ? (s = u, JSON.stringify(t)) : { APIList: o };
                        if ("function" == typeof s.create) return { workerId: s.create.call(s, e, r), useWKWorker: n }
                    },
                    terminate: function() { if ("function" == typeof s.terminate) return s.terminate.apply(s, arguments) },
                    postMsgToAppService: function(e, t) { try {!1 !== t && (e = WeixinNativeBuffer.pack(e), e = JSON.stringify(e)), s.postMsgToAppService(e) } catch (e) { console.error(e) } },
                    postMsgToWorker: function(e, t, n) { try {!1 !== n && (t = WeixinNativeBuffer.pack(t), t = JSON.stringify(t)), s.postMsgToWorker(e, t) } catch (e) { console.error(e) } },
                    onWorkerMsg: function(e) { l.push(e) },
                    onWorkerCreated: function(e) { d.push(e) },
                    onAppServiceMsg: function(e) { f.push(e) },
                    onError: function(e) { p.push(e) },
                    onUnhandledRejection: function(e) { h.push(e) }
                };
            return n && (g.appServiceMsgHandler = v.appServiceMsgHandler, g.workerMsgHandler = v.workerMsgHandler, g.errorHandler = v.errorHandler, g.__workerId__ = v.__workerId__), e.WeixinWorker = v, e.WeAppWorker = v, g
        }(this),
        Protect = function(n) {
            var r = {};

            function o(e) { if (r[e]) return r[e].exports; var t = r[e] = { i: e, l: !1, exports: {} }; return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports }
            return o.m = n, o.c = r, o.d = function(e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, o.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, o.t = function(t, e) {
                if (1 & e && (t = o(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var r in t) o.d(n, r, function(e) { return t[e] }.bind(null, r));
                return n
            }, o.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return o.d(t, "a", t), t }, o.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = "", o(o.s = 6)
        }([function(e, t, n) {
            function r(e) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, o, a) {
            a.r(o),
                function(c) {
                    a.d(o, "hijack", function() { return r }), a.d(o, "hijackWasm", function() { return t }), a.d(o, "originFunction", function() { return e });
                    var u = a(0),
                        n = a(4),
                        e = Function;

                    function t() {
                        "undefined" != typeof WebAssembly && ["compile", "compileStreaming", "instantiate", "instantiateStreaming", "validate", "Module"].forEach(function(t) {
                            var e;
                            void 0 !== WebAssembly[t] && (e = WebAssembly[t], Object.defineProperty(WebAssembly, t, { get: function() { return Object(n.reportDeprecatedAPI)("globalWa"), e }, set: function(e) { Object.defineProperty(WebAssembly, t, { value: e, writable: !0, configurable: !0, enumerable: !0 }) }, configurable: !0, enumerable: !0 }))
                        })
                    }

                    function r() {
                        var e, t, n = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                            r = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                        void 0 !== c.Function && (e = function() { if (0 < arguments.length && "return this" === arguments[arguments.length - 1]) return function() { return r ? t : {} } }, t = {}, e.prototype = c.Function.prototype, c.Function.prototype.constructor = e, c.Function = e);
                        var a, o, i = function() { return this }();
                        "undefined" != typeof eval && (eval = void 0), "undefined" != typeof setTimeout && n && (a = setTimeout, setTimeout = function(e, t) {
                            var n = 1 < arguments.length && void 0 !== t ? t : 0;
                            if ("function" != typeof e) throw new TypeError("setTimeout expects a function as first argument but got " + Object(u.default)(e) + ".");
                            var r = __errorTracer__.surroundThirdByTryCatch(e, "at setTimeout callback function"),
                                o = [].slice.call(arguments, 2);
                            return a(function() { r.apply(i, o) }, n)
                        }, o = setInterval, setInterval = function(e, t) {
                            if ("function" != typeof e) throw new TypeError("setInterval expects a function as first argument but got " + Object(u.default)(e) + ".");
                            var n = __errorTracer__.surroundThirdByTryCatch(e, "at setInterval callback function"),
                                r = [].slice.call(arguments, 2);
                            return o(function() { n.apply(i, r) }, t)
                        })
                    }
                }.call(this, a(3))
        }, function(e, n, r) {
            r.r(n),
                function(e) {
                    r.d(n, "doNotWriteObj", function() { return t });
                    var f = r(0),
                        d = e.Object.setPrototypeOf,
                        t = function t(n, r, o, a) {
                            if (n && r && -1 === r.indexOf("constructor")) {
                                var i;
                                try { i = n[r] } catch (e) { return }
                                if (i) {
                                    var e = Object.getOwnPropertyDescriptor(n, r);
                                    if (a || e || "__proto__" === r) {
                                        e = e || { enumerable: !!a, configurable: !0 };
                                        var c = Object(f.default)(i);
                                        if (i && ("function" === c || "object" === c) && (e.configurable && Object.defineProperty(n, r, {
                                                get: function() { return i },
                                                set: function(e) {
                                                    if (this !== n) return t(this, r, o, !0), void(this[r] = e);
                                                    if (i !== e)
                                                        if (a) try { i = e, "__proto__" === r && d(this, e) } catch (e) {} else console.error("[non-writable] modification of global variable '" + o + "' is not allowed when using plugins at app.json."), "object" === (void 0 === Reporter ? "undefined" : Object(f.default)(Reporter)) && (Reporter.reportKeyValue({ key: "GlobalReadOnly", value: o }), Reporter.reportIDKey({ key: "global_objs_readonly" }))
                                                },
                                                enumerable: e.enumerable,
                                                configurable: !!a && e.configurable
                                            }), !a && "__proto__" !== r)) {
                                            var u = Object.getOwnPropertyNames(i);
                                            "object" === Object(f.default)(i) && t(i, "__proto__", o + ".__proto__", !1);
                                            for (var s = 0; s < u.length; ++s) {
                                                var l = u[s];
                                                t(i, l, o + "." + l, !1)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                }.call(this, r(3))
        }, function(e, t) {
            var n = function() { return this }();
            try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
            e.exports = n
        }, function(e, t, n) { n.r(t), n.d(t, "reportDeprecatedAPI", function() { return r }); var r = function(e) { Reporter.reportKeyValue({ key: "DeprecatedAPI", value: e }) } }, function(e, t) { if ("undefined" == typeof navigator) { try { new Function("const GeneratorFunction = Object.getPrototypeOf(function *() {}).constructor; const f = new GeneratorFunction('', 'console.log(0)'); f().__proto__.__proto__.next = () => {};")() } catch (e) {} try { new Function("const AsyncFunctionProto = Object.getPrototypeOf(async function() {}); Object.defineProperty(AsyncFunctionProto, 'constructor', { value: function(){} });")() } catch (e) {} try { new Function("const AsyncGeneratorFunctionProto = Object.getPrototypeOf(async function *() {}); Object.defineProperty(AsyncGeneratorFunctionProto, 'constructor', { value: function(){} });")() } catch (e) {} } }, function(e, t, n) {
            n.r(t), n.d(t, "overwriteSetPrototypeOf", function() { return c }), n.d(t, "doNotWriteGlobalObjs", function() { return u }), n.d(t, "doNotWriteObj", function() { return s }), n.d(t, "globalEsObjs", function() { return r }), n.d(t, "hijack", function() { return l.hijack }), n.d(t, "hijackWasm", function() { return l.hijackWasm });
            var r = ["Array", "ArrayBuffer", "AsyncFunction", "Atomics", "Boolean", "DataView", "Date", "EvalError", "Float32Array", "Float64Array", "Function", "Generator", "GeneratorFunction", "Infinity", "Int16Array", "Int32Array", "Int8Array", "InternalError", "Intl", "Intl.Collator", "Intl.DateTimeFormat", "Intl.NumberFormat", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object", "Promise", "Proxy", "RangeError", "ReferenceError", "Reflect", "RegExp", "Set", "SharedArrayBuffer", "String", "Symbol", "SyntaxError", "TypeError", "TypedArray", "URIError", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "WeakMap", "WeakSet", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "null", "parseFloat", "parseInt", "undefined", "unescape", "uneval"];
            "NodeJS" !== __wxConfig.JSEngineName && r.push("Error");
            var o = function() { return this }(),
                a = n(2),
                i = r.concat(["getApp", "getCurrentPages", "define", "require", "Reporter", "Protect", "requirePlugin", "definePlugin"]),
                c = function() { Object.defineProperty(o.Object, "setPrototypeOf", { value: function(e, t) { return e.__proto__ = t, e }, configurable: !0 }) },
                u = function() {
                    try {
                        new Date;
                        for (var e = 0; e < i.length; ++e) {
                            var t = i[e];
                            o[t] && (new Date, Object(a.doNotWriteObj)(o, t, t, !1), new Date)
                        }
                        new Date
                    } catch (e) {}
                },
                s = function(e, t, n) { return Object(a.doNotWriteObj)(e, t, n, !1) },
                l = (n(5), n(1))
        }]),
        Safeway = function(n) {
            var r = {};

            function o(e) { if (r[e]) return r[e].exports; var t = r[e] = { i: e, l: !1, exports: {} }; return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports }
            return o.m = n, o.c = r, o.d = function(e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, o.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, o.t = function(t, e) {
                if (1 & e && (t = o(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var r in t) o.d(n, r, function(e) { return t[e] }.bind(null, r));
                return n
            }, o.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return o.d(t, "a", t), t }, o.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = "", o(o.s = 8)
        }([function(e, t, n) {
            function r(e) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e) { e.exports = JSON.parse('{"invokes":{"createRequestTask":["__skipDomainCheck__","url"]}}') }, function(e, t, n) {
            n.r(t),
                function(Ue) {
                    n.d(t, "createSafeSha1", function() { return e });
                    var c = n(0);

                    function e() {
                        var r, o, n, a, Ne = Function.prototype.call.bind(String.prototype.charAt),
                            We = Function.prototype.call.bind(String.prototype.indexOf),
                            Ve = (r = Function.prototype.call.bind(String.fromCharCode), o = String, function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return r.apply(void 0, [o].concat(t)) });
                        return a = {}, i.m = n = [function(e, t, n) {
                            "use strict";
                            n.r(t), n.d(t, "memory", function() { return d }), n.d(t, "sha1", function() { return h }), n.d(t, "setSalt", function() { return v }), n.d(t, "main", function() { return g }), n.d(t, "__wbindgen_malloc", function() { return m }), n.d(t, "__wbindgen_realloc", function() { return w }), n.d(t, "__wbindgen_free", function() { return _ }), n.d(t, "__wbindgen_start", function() { return k });
                            var r = new ArrayBuffer(8),
                                o = new Int32Array(r);
                            new Float32Array(r), new Float64Array(r);
                            var a, i = new ArrayBuffer(1114112),
                                c = (a = new Uint8Array(i), function(e, t) {
                                    var n, r;
                                    if (void 0 === Ue)
                                        for (n = function(e) { for (var t, n, r, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = "", i = 0; i < e.length;) t = We(o, Ne(e, i++)) << 18 | We(o, Ne(e, i++)) << 12 | (n = We(o, Ne(e, i++))) << 6 | (r = We(o, Ne(e, i++))), a += 64 === n ? Ve(t >> 16 & 255) : 64 === r ? Ve(t >> 16 & 255, t >> 8 & 255) : Ve(t >> 16 & 255, t >> 8 & 255, 255 & t); return a }(t), r = 0; r < n.length; r++) a[e + r] = n.charCodeAt(r);
                                    else
                                        for (n = Ue.from(t, "base64"), r = 0; r < n.length; r++) a[e + r] = n[r]
                                });
                            c(1048576, "VHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR5c3JjL2xpYmFsbG9jL3Jhd192ZWMucnMAAAAQACQAAAAkABAAFwAAAF0CAAAJAAAAaW50ZXJuYWwgZXJyb3I6IGVudGVyZWQgdW5yZWFjaGFibGUgY29kZVQAEAAoAAAAJAAQABcAAAAKAgAAJwAAADAAAAAxAAAAMgAAADMAAAA0AAAANQAAADYAAAA3AAAAOAAAADkAAABhAAAAYgAAAGMAAABkAAAAZQAAAGYAAABzcmMvbGliY29yZS9zbGljZS9tb2QucnNhc3NlcnRpb24gZmFpbGVkOiBgKGxlZnQgPT0gcmlnaHQpYAogIGxlZnQ6IGBgLAogcmlnaHQ6IGBgOiDsABAALQAAABkBEAAMAAAAJQEQAAMAAABkZXN0aW5hdGlvbiBhbmQgc291cmNlIHNsaWNlcyBoYXZlIGRpZmZlcmVudCBsZW5ndGhzQAEQADQAAADUABAAGAAAAFoIAAAJAAAAY2Fubm90IGFjY2VzcyBhIFRMUyB2YWx1ZSBkdXJpbmcgb3IgYWZ0ZXIgaXQgaXMgZGVzdHJveWVkYWxyZWFkeSBib3Jyb3dlZGFscmVhZHkgbXV0YWJseSBib3Jyb3dlZAAAAAUAAAAAAAAAAQAAAAYAAAAHAAAAAAAAAAEAAAAIAAAACQAAAAAAAAABAAAACgAAACACEAAAAAAAIAIQAAAAAAAMAAAAMAAAADEAAAAyAAAAMwAAADQAAAA1AAAANgAAADcAAAA4AAAAOQAAAGEAAABiAAAAYwAAAGQAAABlAAAAZgAAAA0AAAAIAAAABAAAAA4AAAAPAAAAEAAAAAgAAAAEAAAAEQAAABIAAAAAAAAAAQAAABMAAABydXN0LWNyeXB0by9zcmMvY3J5cHRvdXRpbC5ycwAAAKgCEAAdAAAALAAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBkc3QubGVuKCkgPT0gNKgCEAAdAAAAQQAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBkc3QubGVuKCkgKiA0ID09IGlucHV0LmxlbigpAACoAhAAHQAAAFIAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogZHN0LmxlbigpID49IHNyYy5sZW4oKagCEAAdAAAAowAAAAkAAABOdW1lcmljIG92ZXJmbG93IG9jY3VyZWQuAAAAAAAAAHJ1c3QtY3J5cHRvL3NyYy9jcnlwdG91dGlsLnJzAAAAoAMQAB0AAABNAQAACQAAAKgCEAAdAAAAMQEAAAEAAABhc3NlcnRpb24gZmFpbGVkOiBpZHggPj0gc2VsZi5idWZmZXJfaWR4YXNzZXJ0aW9uIGZhaWxlZDogc2VsZi5idWZmZXJfaWR4ID09IDY0cnVzdC1jcnlwdG8vc3JjL3NoYTEucnMAAC8EEAAXAAAAhAAAAA4AAAB1bmtub3duIGljb3Nhcm91bmQgaW5kZXhAAAAAYXNzZXJ0aW9uIGZhaWxlZDogYChsZWZ0ID09IHJpZ2h0KWAKICBsZWZ0OiBgYCwKIHJpZ2h0OiBgYAAAdAQQAC0AAAChBBAADAAAAK0EEAABAAAALwQQABcAAABdAQAABQAAAC8EEAAXAAAAZAEAAAUAAABhc3NlcnRpb24gZmFpbGVkOiAoIXN0LmNvbXB1dGVkKRUAAAAXAAAABAAAAAQAAAAYAAAAGQAAABoAAAAbAAAAAAAAAAEAAAAcAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZXNyYy9saWJjb3JlL29wdGlvbi5yczQFEAArAAAAXwUQABUAAAB6AQAAFQAAAEFjY2Vzc0Vycm9yAB0AAAAQAAAABAAAAB4AAAAfAAAAIAAAAAwAAAAEAAAAIQAAACIAAAAEAAAABAAAACMAAAAkAAAAJQ=="), c(1050080, "L3J1c3RjLzQ1NjBlYTc4OGNiNzYwZjBhMzQxMjcxNTZjNzhlMjU1Mjk0OWY3MzQvc3JjL2xpYmNvcmUvZm10L21vZC5ycwAA4AUQAEYAAABjAQAAEwAAACYAAAAAAAAAAQAAACcAAABzcmMvbGliYWxsb2MvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93XwYQABEAAABIBhAAFwAAAAkDAAAFAAAAYSBmb3JtYXR0aW5nIHRyYWl0IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yQm9ycm93RXJyb3JCb3Jyb3dNdXRFcnJvciwAAAAAAAAAAQAAAC0AAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAA5AYQACAAAAAEBxAAEgAAAGNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWVzcmMvbGliY29yZS9vcHRpb24ucnMoBxAAKwAAAFMHEAAVAAAAegEAABUAAAC7BhAAAAAAAFMHEAAVAAAApgQAAAUAAAA6IAAAuwYQAAAAAACYBxAAAgAAAHNyYy9saWJjb3JlL3Jlc3VsdC5ycwAAAKwHEAAVAAAAjQQAAAUAAABzcmMvbGliY29yZS9zbGljZS9tb2QucnNpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGgg7AcQAAYAAADyBxAAIgAAANQHEAAYAAAAGQoAAAUAAABzbGljZSBpbmRleCBzdGFydHMgYXQgIGJ1dCBlbmRzIGF0IAA0CBAAFgAAAEoIEAANAAAA1AcQABgAAAAfCgAABQAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTl9IH0="), c(1050960, "c3JjL2xpYmNvcmUvZm10L21vZC5ycwAAUAkQABYAAABWBAAAKAAAAFAJEAAWAAAAYgQAABEAAABFcnJvcg==");
                            var u, s, l, T, F, L, p, b, y, N, W, x, E, f = (u = { Math: Math, Int8Array: Int8Array, Uint8Array: Uint8Array, Int16Array: Int16Array, Uint16Array: Uint16Array, Int32Array: Int32Array, Uint32Array: Uint32Array, Float32Array: Float32Array, Float64Array: Float64Array, NaN: NaN, Infinity: 1 / 0 }, s = { abort: function() { throw new Error("abort") } }, l = i, T = new u.Int8Array(l), new u.Int16Array(l), F = new u.Int32Array(l), L = new u.Uint8Array(l), new u.Uint16Array(l), p = new u.Uint32Array(l), new u.Float32Array(l), new u.Float64Array(l), b = u.Math.imul, u.Math.fround, u.Math.abs, y = u.Math.clz32, u.Math.min, u.Math.max, u.Math.floor, u.Math.ceil, u.Math.sqrt, N = s.abort, u.NaN, u.Infinity, W = 1048576, x = 0, E = [null, function(e, t) {
                                    return t |= 0, e = F[(e |= 0) >> 2], (16 & L[0 | t]) >>> 4 ? 0 | function(e, t) {
                                        var n, r = 0,
                                            o = 0;
                                        for (W = n = W - 128 | 0, r = F[e >> 2], e = 0; o = 15 & r, T[127 + (e + n | 0) | 0] = o >>> 0 < 10 ? 48 | o : o + 87 | 0, e = e + -1 | 0, r >>>= 4;);
                                        return 129 <= (r = e + 128 | 0) >>> 0 && (Q(r, 128), N()), e = A(t, 1050744, 2, 128 + (e + n | 0) | 0, 0 - e | 0), W = 128 + n | 0, e
                                    }(e, t) : (32 & L[0 | t]) >>> 5 ? 0 | function(e, t) {
                                        var n, r = 0,
                                            o = 0;
                                        for (W = n = W - 128 | 0, r = F[e >> 2], e = 0; o = 15 & r, T[127 + (e + n | 0) | 0] = o >>> 0 < 10 ? 48 | o : o + 55 | 0, e = e + -1 | 0, r >>>= 4;);
                                        return 129 <= (r = e + 128 | 0) >>> 0 && (Q(r, 128), N()), e = A(t, 1050744, 2, 128 + (e + n | 0) | 0, 0 - e | 0), W = 128 + n | 0, e
                                    }(e, t) : 0 | je(e, t)
                                }, function(e, t) {
                                    e |= 0;
                                    var n, r, o = 0,
                                        a = 0,
                                        i = 0;
                                    return W = n = W - 32 | 0, r = F[28 + (t |= 0) >> 2], t = F[t + 24 >> 2], i = F[4 + (a = e + 16 | 0) >> 2], F[(o = 24 + n | 0) >> 2] = F[a >> 2], F[o + 4 >> 2] = i, i = F[4 + (a = e + 8 | 0) >> 2], F[(o = 16 + n | 0) >> 2] = F[a >> 2], F[o + 4 >> 2] = i, o = F[e + 4 >> 2], F[8 + n >> 2] = F[e >> 2], F[12 + n >> 2] = o, e = D(t, r, 8 + n | 0), W = 32 + n | 0, 0 | e
                                }, function(e, t) { return t |= 0, 0 | Me(F[(e |= 0) >> 2], F[e + 4 >> 2], t) }, function(e, t) { var n; return t |= 0, W = n = W - 16 | 0, _e(8 + n | 0, F[(e |= 0) >> 2]), e = Me(F[8 + n >> 2], F[12 + n >> 2], t), W = 16 + n | 0, 0 | e }, Ee, function(e, t) { return e |= 0, W = e = W - 16 | 0, i = e + 8 | 0, c = t |= 0, u = 0 | E[F[F[28 + c >> 2] + 12 >> 2]](F[24 + c >> 2], 1049996, 11), T[5 + i | 0] = 0, T[4 + i | 0] = u, F[i >> 2] = c, r = L[(n = e + 8 | 0) + 4 | (a = o = r = 0)], L[n + 5 | 0] && (o = 255 & r, a = n, r = 1, o || (r = F[n >> 2], o = F[F[r + 28 >> 2] + 12 >> 2], n = F[r + 24 >> 2], r = 4 & L[0 | r] ? 0 | E[o](n, 1050946, 1) : 0 | E[o](n, 1050947, 2)), T[a + 4 | 0] = r), W = e + 16 | 0, 0 | (t = 0 != (255 & r)); var n, r, o, a, i, c, u }, Ee, function(e, t) { return 0 | E[F[F[28 + (t |= 0) >> 2] + 12 >> 2]](F[t + 24 >> 2], 1050299, 11) }, Ee, function(e, t) { return 0 | E[F[F[28 + (t |= 0) >> 2] + 12 >> 2]](F[t + 24 >> 2], 1050310, 14) }, ie, function() { return 0 | (F[262757] || (W = e = W - 32 | (o = r = n = 0), ie(e), o = F[262759], F[(n = 24 + e | 0) >> 2] = F[262758], F[n + 4 >> 2] = o, o = F[262756], n = F[262757], r = F[4 + e >> 2], F[262756] = F[e >> 2], F[262757] = r, t = F[4 + (r = 8 + e | 0) >> 2], F[262758] = F[r >> 2], F[262759] = t, F[16 + e >> 2] = o, F[20 + e >> 2] = n, F[20 + e >> 2] && be(16 + e | 4), W = 32 + e | 0), 1051024); var e, t, n, r, o }, Ee, function(e, t) {
                                    e |= 0;
                                    var n = 0,
                                        r = 0,
                                        o = 0,
                                        n = F[(t |= 0) >> 2];
                                    F[t >> 2] = 0;
                                    e: {
                                        if (r = e, n) {
                                            if (o = F[t + 4 >> 2], !(t = Ie(8, 4))) break e;
                                            F[t + 4 >> 2] = o, F[t >> 2] = n, n = 1049224
                                        } else t = 1,
                                        n = 1049240;
                                        return F[r + 4 >> 2] = n,
                                        void(F[e >> 2] = t)
                                    }
                                    Pe(8, 4), N()
                                }, function(e, t) {
                                    var n;
                                    e |= 0, n = F[(t |= 0) >> 2], F[e + 4 >> 2] = n ? 1049224 : 1049240, F[e >> 2] = n ? t : 1
                                }, Ee, function(e) { return x = 286299353, 1890621284 }, Ee, function(e) { return x = 1757840133, -801715452 }, ye, function() { return 0 | (F[262762] || (W = e = W - 48 | (o = r = n = 0), ye(e), F[40 + e >> 2] = F[262766], n = F[262765], F[(r = 32 + e | 0) >> 2] = F[262764], F[r + 4 >> 2] = n, n = F[262762], r = F[262763], o = F[4 + e >> 2], F[262762] = F[e >> 2], F[262763] = o, t = F[4 + (o = 8 + e | 0) >> 2], F[262764] = F[o >> 2], F[262765] = t, F[262766] = F[16 + e >> 2], F[24 + e >> 2] = n, F[28 + e >> 2] = r, n && F[4 + (n = 24 + e | 0) >> 2] && O(F[n >> 2]), W = 48 + e | 0), 1051048); var e, t, n, r, o }, function(e, t) {}, Ee, de, function(e, t) {
                                    t |= 0;
                                    var n, r = 0;
                                    W = n = W - 16 | 0, r = e = F[(e |= 0) >> 2];
                                    e: {
                                        t: {
                                            n: {
                                                if (128 <= t >>> 0) {
                                                    if (t >>> (F[12 + n >> 2] = 0) < 2048) break n;
                                                    if (t >>> 0 < 65536) { T[14 + n | 0] = 63 & t | 128, T[13 + n | 0] = t >>> 6 & 63 | 128, T[12 + n | 0] = t >>> 12 & 15 | 224, t = 3; break t }
                                                    T[15 + n | 0] = 63 & t | 128, T[12 + n | 0] = t >>> 18 | 240, T[14 + n | 0] = t >>> 6 & 63 | 128, T[13 + n | 0] = t >>> 12 & 63 | 128, t = 4;
                                                    break t
                                                }(0 | (r = F[e + 8 >> 2])) == F[e + 4 >> 2] && (q(e, 1), r = F[e + 8 >> 2]),
                                                T[r + F[e >> 2] | 0] = t,
                                                F[e + 8 >> 2] = F[e + 8 >> 2] + 1;
                                                break e
                                            }
                                            T[13 + n | 0] = 63 & t | 128,
                                            T[12 + n | 0] = t >>> 6 & 31 | 192,
                                            t = 2
                                        }
                                        q(r, t),
                                        r = F[e + 8 >> 2],
                                        F[e + 8 >> 2] = r + t,
                                        se(r + F[e >> 2] | 0, 12 + n | 0, t)
                                    }
                                    return W = 16 + n | 0, 0
                                }, function(e, t) {
                                    e |= 0, t |= 0;
                                    var n, r = 0,
                                        o = 0;
                                    return W = n = W - 32 | 0, F[4 + n >> 2] = F[e >> 2], o = F[4 + (r = t + 16 | 0) >> 2], F[(e = 24 + n | 0) >> 2] = F[r >> 2], F[e + 4 >> 2] = o, o = F[4 + (r = t + 8 | 0) >> 2], F[(e = 16 + n | 0) >> 2] = F[r >> 2], F[e + 4 >> 2] = o, e = F[t + 4 >> 2], F[8 + n >> 2] = F[t >> 2], F[12 + n >> 2] = e, e = D(4 + n | 0, 1049868, 8 + n | 0), W = 32 + n | 0, 0 | e
                                }, Ee, xe, function(e) { var t;!(t = F[4 + (e |= 0) >> 2]) | !F[e + 8 >> 2] || O(t) }, function(e, t) {
                                    e |= 0;
                                    var n, r = 0,
                                        o = 0,
                                        a = 0,
                                        i = 0;
                                    W = n = W + -64 | 0, (r = F[4 + (t |= 0) >> 2]) || (r = F[t >> 2], F[32 + n >> 2] = 0, F[24 + n >> 2] = 1, F[28 + n >> 2] = 0, F[36 + n >> 2] = 24 + n, a = F[4 + (o = r + 16 | 0) >> 2], F[(i = 56 + n | 0) >> 2] = F[o >> 2], F[i + 4 >> 2] = a, a = F[4 + (o = r + 8 | 0) >> 2], F[(i = 48 + n | 0) >> 2] = F[o >> 2], F[i + 4 >> 2] = a, o = F[r + 4 >> 2], F[40 + n >> 2] = F[r >> 2], F[44 + n >> 2] = o, D(36 + n | 0, 1049868, 40 + n | 0), F[(o = 16 + n | 0) >> 2] = F[32 + n >> 2], r = F[28 + n >> 2], F[8 + n >> 2] = F[24 + n >> 2], F[12 + n >> 2] = r, !(r = F[t + 4 >> 2]) | !F[t + 8 >> 2] || O(r), a = F[12 + n >> 2], F[(r = t + 4 | 0) >> 2] = F[8 + n >> 2], F[r + 4 >> 2] = a, F[r + 8 >> 2] = F[o >> 2], r = F[r >> 2]), F[t + 4 >> 2] = 1, o = F[t + 12 >> 2], a = F[(t = t + 8 | 0) >> 2], F[t >> 2] = 0, F[t + 4 >> 2] = 0, (t = Ie(12, 4)) || (Pe(12, 4), N()), F[t + 8 >> 2] = o, F[t + 4 >> 2] = a, F[t >> 2] = r, F[e + 4 >> 2] = 1050028, F[e >> 2] = t, W = n + 64 | 0
                                }, function(e, t) {
                                    e |= 0;
                                    var n, r, o = 0,
                                        a = 0,
                                        i = 0,
                                        c = 0;
                                    W = n = W + -64 | 0, r = 4 + (t |= 0) | 0, F[t + 4 >> 2] || (a = F[t >> 2], F[32 + n >> 2] = 0, F[24 + n >> 2] = 1, F[28 + n >> 2] = 0, F[36 + n >> 2] = 24 + n, c = F[4 + (o = a + 16 | 0) >> 2], F[(i = 56 + n | 0) >> 2] = F[o >> 2], F[i + 4 >> 2] = c, c = F[4 + (o = a + 8 | 0) >> 2], F[(i = 48 + n | 0) >> 2] = F[o >> 2], F[i + 4 >> 2] = c, o = F[a + 4 >> 2], F[40 + n >> 2] = F[a >> 2], F[44 + n >> 2] = o, D(36 + n | 0, 1049868, 40 + n | 0), F[(a = 16 + n | 0) >> 2] = F[32 + n >> 2], o = F[28 + n >> 2], F[8 + n >> 2] = F[24 + n >> 2], F[12 + n >> 2] = o, !(o = F[t + 4 >> 2]) | !F[t + 8 >> 2] || O(o), t = F[12 + n >> 2], F[r >> 2] = F[8 + n >> 2], F[4 + r >> 2] = t, F[8 + r >> 2] = F[a >> 2]), F[e + 4 >> 2] = 1050028, F[e >> 2] = r, W = n + 64 | 0
                                }, be, function(e) { return x = -679582923, 428379921 }, Ee, de, function(e, t) {
                                    return t |= 0,
                                        function(e, t) {
                                            var n, r = 0;
                                            W = n = W - 16 | 0, r = e;
                                            e: {
                                                t: {
                                                    n: {
                                                        if (128 <= t >>> 0) {
                                                            if (t >>> (F[12 + n >> 2] = 0) < 2048) break n;
                                                            if (t >>> 0 < 65536) { T[14 + n | 0] = 63 & t | 128, T[13 + n | 0] = t >>> 6 & 63 | 128, T[12 + n | 0] = t >>> 12 & 15 | 224, t = 3; break t }
                                                            T[15 + n | 0] = 63 & t | 128, T[12 + n | 0] = t >>> 18 | 240, T[14 + n | 0] = t >>> 6 & 63 | 128, T[13 + n | 0] = t >>> 12 & 63 | 128, t = 4;
                                                            break t
                                                        }(0 | (r = F[e + 8 >> 2])) == F[e + 4 >> 2] && (q(e, 1), r = F[e + 8 >> 2]),
                                                        T[r + F[e >> 2] | 0] = t,
                                                        F[e + 8 >> 2] = F[e + 8 >> 2] + 1;
                                                        break e
                                                    }
                                                    T[13 + n | 0] = 63 & t | 128,
                                                    T[12 + n | 0] = t >>> 6 & 31 | 192,
                                                    t = 2
                                                }
                                                q(r, t),
                                                r = F[e + 8 >> 2],
                                                F[e + 8 >> 2] = r + t,
                                                se(r + F[e >> 2] | 0, 12 + n | 0, t)
                                            }
                                            W = 16 + n | 0
                                        }(F[(e |= 0) >> 2], t), 0
                                }, function(e, t) {
                                    e |= 0, t |= 0;
                                    var n, r = 0,
                                        o = 0;
                                    return W = n = W - 32 | 0, F[4 + n >> 2] = F[e >> 2], o = F[4 + (r = t + 16 | 0) >> 2], F[(e = 24 + n | 0) >> 2] = F[r >> 2], F[e + 4 >> 2] = o, o = F[4 + (r = t + 8 | 0) >> 2], F[(e = 16 + n | 0) >> 2] = F[r >> 2], F[e + 4 >> 2] = o, e = F[t + 4 >> 2], F[8 + n >> 2] = F[t >> 2], F[12 + n >> 2] = e, e = D(4 + n | 0, 1050044, 8 + n | 0), W = 32 + n | 0, 0 | e
                                }, Ee, function(e, t) { return 0 | E[F[F[28 + (t |= 0) >> 2] + 12 >> 2]](F[t + 24 >> 2], 1051016, 5) }, je, je, function(e, t) { return 0 | I(t |= 0, F[(e |= 0) >> 2], F[e + 4 >> 2]) }, function(e, t) { return t |= 0, 0 | E[F[F[4 + (e |= 0) >> 2] + 12 >> 2]](F[e >> 2], t) }, Ee, xe], {
                                    memory: Object.create(Object.prototype, { grow: { value: Le }, buffer: { get: function() { return l } } }),
                                    sha1: function(e, t, n) {
                                        var r, o, a, i, c, u, s, l;
                                        e |= 0, W = r = W - 80 | 0, ue(24 + r | 0, t |= 0, n |= 0), o = 32 + r | 0, a = t = F[24 + r >> 2], i = n = F[28 + r >> 2], W = c = W - 16 | 0, F[12 + c >> 2] = i, F[8 + c >> 2] = a, u = o, W = l = W - 32 | 0, B(8 + l | 0, s = 8 + c | 0), F[8 + l >> 2] || (H(1048972, 57, 24 + l | 0, 1049072), N()), s = F[12 + l >> 2], F[u >> 2] = F[8 + l >> 2], F[4 + u >> 2] = s, F[8 + u >> 2] = F[16 + l >> 2], W = 32 + l | 0, W = 16 + c | 0, n && O(t), F[(t = 56 + r | 0) >> 2] = F[40 + r >> 2], n = F[36 + r >> 2], F[48 + r >> 2] = F[32 + r >> 2], F[52 + r >> 2] = n, _e(16 + r | 0, 48 + r | 0), F[72 + r >> 2] = F[t >> 2], t = F[52 + r >> 2], F[64 + r >> 2] = F[48 + r >> 2], F[68 + r >> 2] = t, le(8 + r | 0, 64 + r | 0), t = F[12 + r >> 2], F[e >> 2] = F[8 + r >> 2], F[e + 4 >> 2] = t, W = 80 + r | 0
                                    },
                                    setSalt: function(e, t) {
                                        var n, r, o, a, i, c, u, s, l, f, d, p;
                                        W = n = W - 48 | 0, ue(8 + n | 0, e |= 0, t |= 0), e = F[12 + n >> 2], me(16 + n | 0, F[8 + n >> 2], e, e), F[40 + n >> 2] = F[24 + n >> 2], e = F[20 + n >> 2], F[32 + n >> 2] = F[16 + n >> 2], F[36 + n >> 2] = e, r = 32 + n | 0, W = o = W - 16 | 0, F[8 + o >> 2] = F[8 + r >> 2], a = F[4 + r >> 2], F[o >> 2] = F[r >> 2], F[4 + o >> 2] = a, i = o, W = c = W - 32 | 0, F[16 + c >> 2] = F[8 + i >> 2], u = F[4 + i >> 2], F[8 + c >> 2] = F[i >> 2], F[12 + c >> 2] = u, s = 8 + c | 0, W = f = W - 32 | (p = d = 0), s = (l = 0 | E[F[262284]]()) ? (F[(d = 16 + f | 0) >> 2] = F[s + 8 >> 2], p = F[s + 4 >> 2], F[8 + f >> 2] = F[s >> 2], F[12 + f >> 2] = p, F[l >> 2] && (H(1049029, 16, 24 + f | 0, 1049104), N()), F[l >> 2] = -1, be(4 + l | 0), F[12 + l >> 2] = F[d >> 2], s = F[12 + f >> 2], F[4 + l >> 2] = F[8 + f >> 2], F[8 + l >> 2] = s, F[l >> 2] = F[l >> 2] + 1, 0) : (be(s), 1), W = 32 + f | 0, s && (H(1048972, 57, 24 + c | 0, 1049072), N()), W = 32 + c | 0, W = 16 + o | 0, W = 48 + n | 0
                                    },
                                    main: De,
                                    __wbindgen_malloc: function(e) {
                                        if (!(4294967292 < (e |= 0) >>> 0)) { if (!e) return 4; if (e = Ie(e, (e >>> 0 < 4294967293) << 2)) return 0 | e }
                                        N()
                                    },
                                    __wbindgen_realloc: function(e, t, n) {
                                        if (e |= 0, n |= 0, !(4294967292 < (t |= 0) >>> 0) && (e = we(e, t, 4, n))) return 0 | e;
                                        N()
                                    },
                                    __wbindgen_free: function(e, t) { e |= 0, (t |= 0) && O(e) },
                                    __wbindgen_start: De
                                }),
                                d = f.memory,
                                h = f.sha1,
                                v = f.setSalt,
                                g = f.main,
                                m = f.__wbindgen_malloc,
                                w = f.__wbindgen_realloc,
                                _ = f.__wbindgen_free,
                                k = f.__wbindgen_start;

                            function S(e) {
                                var t = 0,
                                    n = 0,
                                    r = 0,
                                    o = 0,
                                    a = 0,
                                    i = 0,
                                    c = 0,
                                    u = 0,
                                    s = 0,
                                    l = 0,
                                    f = 0,
                                    d = 0;
                                e: {
                                    t: {
                                        n: {
                                            if (245 <= e >>> 0) {
                                                if (4294901709 <= e >>> 0) break t;
                                                if (o = -8 & (e = e + 11 | 0), !(u = F[262772])) break n;
                                                a = 0 - o | 0, c = 0, (e >>>= 8) && (c = 31, 16777215 < o >>> 0 || (c = 62 + ((o >>> (6 - (e = y(e)) & 31) & 1) - (e << 1) | 0) | 0));
                                                r: { o: { if (e = F[1051356 + (c << 2) >> 2]) { for (r = o << (31 == (0 | c) ? 0 : 25 - (c >>> 1) & 31);;) { if (!((n = -8 & F[e + 4 >> 2]) >>> 0 < o >>> 0 || (n = n - o | 0) >>> 0 >= a >>> 0 || (i = e, a = n))) { a = 0; break o } if (n = F[e + 20 >> 2], e = F[16 + ((r >>> 29 & 4) + e | 0) >> 2], t = n && (0 | n) != (0 | e) ? n : t, r <<= 1, !e) break } if (t) { e = t; break o } if (i) break r } if (!(e = u & ((i = 0) - (e = 2 << (31 & c)) | e))) break n; if (!(e = F[1051356 + (Be(e & 0 - e) << 2) >> 2])) break n } for (; i = (t = (n = (t = -8 & F[e + 4 >> 2]) - o | 0) >>> 0 < a >>> 0 & o >>> 0 <= t >>> 0) ? e : i, a = t ? n : a, e = (t = F[e + 16 >> 2]) || F[e + 20 >> 2];); if (!i) break n }
                                                if (a >>> 0 >= (e = F[262871]) - o >>> 0 && o >>> 0 <= e >>> 0) break n;
                                                M(i);
                                                r: if (16 <= a >>> 0) {
                                                    if (F[i + 4 >> 2] = 3 | o, F[4 + (r = o + i | 0) >> 2] = 1 | a, 256 <= (F[a + r >> 2] = a) >>> 0) { P(r, a); break r }
                                                    n = 1051092 + ((e = a >>> 3) << 3) | 0, t = F[262771], e = 1 << (31 & e), c = F[n + 8 >> 2], t & e || (F[262771] = e | t, c = n), e = c, F[n + 8 >> 2] = r, F[e + 12 >> 2] = r, F[r + 12 >> 2] = n, F[r + 8 >> 2] = e
                                                } else e = o + a | 0, F[i + 4 >> 2] = 3 | e, F[4 + (e = e + i | 0) >> 2] = 1 | F[e + 4 >> 2];
                                                return i + 8 | 0
                                            }
                                            r: {
                                                o: {
                                                    if (!(3 & (n = (r = F[262771]) >>> (t = 31 & (e = (o = e >>> 0 < 11 ? 16 : e + 11 & -8) >>> 3))))) {
                                                        if (o >>> 0 <= p[262871]) break n;
                                                        if (n) break o;
                                                        if (!(e = F[262772])) break n;
                                                        for (t = F[1051356 + (Be(e & 0 - e) << 2) >> 2], a = (-8 & F[t + 4 >> 2]) - o | 0, r = t;;) {
                                                            if (!(e = F[t + 16 >> 2]) && !(e = F[t + 20 >> 2])) break r;
                                                            a = (n = (t = (-8 & F[e + 4 >> 2]) - o | 0) >>> 0 < a >>> 0) ? t : a, r = n ? e : r, t = e
                                                        }
                                                    }
                                                    a = (i = F[16 + (e = 1051084 + ((n = e + (1 & (-1 ^ n)) | 0) << 3) | 0) >> 2]) + 8 | 0,
                                                    (0 | (t = F[i + 8 >> 2])) == (0 | (e = e + 8 | 0)) ? (d = Fe(-2, n) & r, F[(f = 1051084) >> 2] = d) : (F[t + 12 >> 2] = e, F[e + 8 >> 2] = t),
                                                    e = n << 3,
                                                    F[i + 4 >> 2] = 3 | e,
                                                    F[4 + (e = e + i | 0) >> 2] = 1 | F[e + 4 >> 2];
                                                    break t
                                                }
                                                return i = Be(0 - (e = (0 - (e = 2 << t) | e) & n << t) & e),
                                                u = F[16 + (e = 1051084 + (i << 3) | 0) >> 2],
                                                (0 | (t = F[u + 8 >> 2])) == (0 | (e = e + 8 | 0)) ? (d = Fe(-2, i) & r, F[(f = 1051084) >> 2] = d) : (F[t + 12 >> 2] = e, F[e + 8 >> 2] = t),
                                                F[u + 4 >> 2] = 3 | o,
                                                i = (e = i << 3) - o | 0,
                                                F[4 + (n = o + u | 0) >> 2] = 1 | i,
                                                F[e + u >> 2] = i,
                                                (e = F[262871]) && (a = F[262873], r = 1051092 + ((e >>>= 3) << 3) | 0, t = F[262771], e = 1 << (31 & e), c = F[r + 8 >> 2], t & e || (F[262771] = e | t, c = r), e = c, F[r + 8 >> 2] = a, F[e + 12 >> 2] = a, F[a + 12 >> 2] = r, F[a + 8 >> 2] = e),
                                                F[262873] = n,
                                                F[262871] = i,
                                                u + 8 | 0
                                            }
                                            return M(r),
                                            16 <= a >>> 0 ? (F[r + 4 >> 2] = 3 | o, F[4 + (n = o + r | 0) >> 2] = 1 | a, F[n + a >> 2] = a, (e = F[262871]) && (u = F[262873], i = 1051092 + ((e >>>= 3) << 3) | 0, t = F[262771], e = 1 << (31 & e), c = F[i + 8 >> 2], t & e || (F[262771] = e | t, c = i), e = c, F[i + 8 >> 2] = u, F[e + 12 >> 2] = u, F[u + 12 >> 2] = i, F[u + 8 >> 2] = e), F[262873] = n, F[262871] = a) : (e = o + a | 0, F[r + 4 >> 2] = 3 | e, F[4 + (e = e + r | 0) >> 2] = 1 | F[e + 4 >> 2]),
                                            r + 8 | 0
                                        }
                                        n: {
                                            r: { o: { a: { if ((n = F[262871]) >>> 0 < o >>> 0) { if ((e = F[262872]) >>> 0 > o >>> 0) break e; if (-1 == ((a = 0) | (e = Le((t = o + 65583 | 0) >>> 16)))) break t; if (!(s = e << 16)) break t; if (t = (u = -65536 & t) + F[262875] | 0, F[262875] = t, e = F[262876], F[262876] = t >>> 0 < e >>> 0 ? e : t, !(l = F[262874])) break a; for (e = 1051508;;) { if ((0 | s) == ((n = F[e >> 2]) + (t = F[e + 4 >> 2]) | 0)) break o; if (!(e = F[e + 8 >> 2])) break } break r } return i = F[262873], (t = n - o | 0) >>> 0 <= 15 ? (F[262873] = 0, F[262871] = 0, F[i + 4 >> 2] = 3 | n, o = 4 + (e = n + i | 0) | 0, a = 1 | F[e + 4 >> 2]) : (F[262871] = t, e = o + i | 0, F[262873] = e, F[e + 4 >> 2] = 1 | t, F[n + i >> 2] = t, a = 3 | o, o = i + 4 | 0), F[o >> 2] = a, i + 8 | 0 } for ((e = F[262882]) >>> 0 <= s >>> 0 && e || (F[262882] = s), F[262883] = 4095, F[262877] = s, e = 0, F[262880] = 0, F[262878] = u; t = 8 + (n = e + 1051084 | 0) | 0, F[n + 16 >> 2] = t, F[n + 20 >> 2] = t, 256 != (0 | (e = e + 8 | 0)););F[262874] = s, e = u + -40 | 0, F[262872] = e, F[s + 4 >> 2] = 1 | e, F[4 + (e + s | 0) >> 2] = 40, F[262881] = 2097152; break n } if (!(F[e + 12 >> 2] | s >>> 0 <= l >>> 0 | l >>> 0 < n >>> 0)) { F[e + 4 >> 2] = t + u, n = (i = F[262874]) + 15 & -8, F[262874] = n + -8, e = 8 + ((t = u + F[262872] | 0) + (i - n | 0) | 0) | 0, F[262872] = e, F[n + -4 >> 2] = 1 | e, F[4 + (t + i | 0) >> 2] = 40, F[262881] = 2097152; break n } }
                                            e = F[262882],
                                            F[262882] = e >>> 0 < s >>> 0 ? e : s,
                                            r = u + s | 0,
                                            e = 1051508;r: {
                                                for (;
                                                    (0 | r) != F[e >> 2];)
                                                    if (!(e = F[e + 8 >> 2])) break r;if (!F[e + 12 >> 2]) {
                                                    F[e >> 2] = s, F[e + 4 >> 2] = u + F[e + 4 >> 2], F[s + 4 >> 2] = 3 | o, a = o + s | 0, o = (r - s | 0) - o | 0;
                                                    o: {
                                                        a: {
                                                            if ((0 | r) != F[262874]) {
                                                                if (F[262873] == (0 | r)) break a;
                                                                if (1 == (3 & (i = F[r + 4 >> 2])) && (256 <= (n = -8 & i) >>> 0 ? M(r) : (0 | (t = F[r + 12 >> 2])) == (0 | (e = F[r + 8 >> 2])) ? (f = 1051084, d = F[262771] & Fe(-2, i >>> 3), F[f >> 2] = d) : (F[e + 12 >> 2] = t, F[t + 8 >> 2] = e), o = n + o | 0, r = n + r | 0), F[r + 4 >> 2] = -2 & F[r + 4 >> 2], F[a + 4 >> 2] = 1 | o, 256 <= (F[o + a >> 2] = o) >>> 0) { P(a, o); break o }
                                                                n = 1051092 + ((e = o >>> 3) << 3) | 0, t = F[262771], e = 1 << (31 & e), r = F[n + 8 >> 2], t & e || (F[262771] = e | t, r = n), e = r, F[n + 8 >> 2] = a, F[e + 12 >> 2] = a, F[a + 12 >> 2] = n, F[a + 8 >> 2] = e;
                                                                break o
                                                            }
                                                            F[262874] = a,
                                                            e = F[262872] + o | 0,
                                                            F[262872] = e,
                                                            F[a + 4 >> 2] = 1 | e;
                                                            break o
                                                        }
                                                        F[262873] = a,
                                                        e = F[262871] + o | 0,
                                                        F[262871] = e,
                                                        F[a + 4 >> 2] = 1 | e,
                                                        F[e + a >> 2] = e
                                                    }
                                                    return s + 8 | 0
                                                }
                                            }
                                            for (e = 1051508; !((t = F[e >> 2]) >>> 0 <= l >>> 0 && (r = t + F[e + 4 >> 2] | 0) >>> 0 > l >>> 0);) e = F[e + 8 >> 2];
                                            for (F[262874] = s, e = u + -40 | 0, F[262872] = e, F[s + 4 >> 2] = 1 | e, F[4 + (e + s | 0) >> 2] = 40, F[262881] = 2097152, F[(c = (e = (r + -32 & -8) - 8 | 0) >>> 0 < l + 16 >>> 0 ? l : e) + 4 >> 2] = 27, i = F[262877], n = F[262878], t = F[262880], F[(e = c + 16 | 0) >> 2] = F[262879], F[e + 4 >> 2] = t, F[c + 8 >> 2] = i, F[c + 12 >> 2] = n, F[262880] = 0, F[262878] = u, F[262877] = s, F[262879] = c + 8, e = c + 28 | 0; F[e >> 2] = 7, r >>> 0 > (e = e + 4 | 0) >>> 0;);
                                            (0 | c) != (0 | l) && (F[c + 4 >> 2] = -2 & F[c + 4 >> 2], e = c - l | 0, F[l + 4 >> 2] = 1 | e, 256 <= (F[c >> 2] = e) >>> 0 ? P(l, e) : (n = 1051092 + ((e >>>= 3) << 3) | 0, t = F[262771], e = 1 << (31 & e), r = F[n + 8 >> 2], t & e || (F[262771] = e | t, r = n), e = r, F[n + 8 >> 2] = l, F[e + 12 >> 2] = l, F[l + 12 >> 2] = n, F[l + 8 >> 2] = e))
                                        }
                                        if (!((e = F[262872]) >>> 0 <= o >>> 0)) break e
                                    }
                                    return a
                                }
                                return t = e - o | 0, F[262872] = t, e = (n = F[262874]) + o | 0, F[262874] = e, F[e + 4 >> 2] = 1 | t, F[n + 4 >> 2] = 3 | o, n + 8 | 0
                            }

                            function D(e, t, n) {
                                var r, o = 0,
                                    a = 0,
                                    i = 0,
                                    c = 0,
                                    u = 0,
                                    s = 0,
                                    l = 0;
                                W = r = W + -64 | 0, F[36 + r >> 2] = t, o = F[n + 20 >> 2], F[52 + r >> 2] = o, T[56 + r | 0] = 3, a = F[n + 16 >> 2], F[44 + r >> 2] = a + (o << 3), F[8 + r >> 2] = 0, F[12 + r >> 2] = 32, F[32 + r >> 2] = e, F[24 + r >> 2] = 0, F[16 + r >> 2] = 0, F[48 + r >> 2] = a, F[40 + r >> 2] = a;
                                e: {
                                    t: {
                                        n: {
                                            r: {
                                                if (!(i = F[n + 8 >> 2])) { if (u = F[n >> 2], !(i = o >>> 0 > (s = F[n + 4 >> 2]) >>> 0 ? s : o)) break r; if (o = 1, E[F[t + 12 >> 2]](e, F[u >> 2], F[u + 4 >> 2])) break e; for (n = u + 12 | 0, c = 1;;) { if (E[F[a + 4 >> 2]](F[a >> 2], 8 + r | 0)) break e; if (i >>> 0 <= c >>> 0) break r; if (e = n + -4 | 0, t = F[n >> 2], n = n + 8 | 0, a = a + 8 | 0, c = c + 1 | 0, E[F[F[36 + r >> 2] + 12 >> 2]](F[32 + r >> 2], F[e >> 2], t)) break } break e }
                                                if (u = F[n >> 2], s = F[n + 4 >> 2], l = (n = F[n + 12 >> 2]) >>> 0 > s >>> 0 ? s : n) {
                                                    if (o = 1, E[F[t + 12 >> 2]](e, F[u >> 2], F[u + 4 >> 2])) break e;
                                                    for (n = u + 12 | 0, a = i + 16 | 0, c = 1;;) {
                                                        F[12 + r >> 2] = F[a + -8 >> 2], T[56 + r | 0] = L[a + 16 | 0], F[8 + r >> 2] = F[a + -4 >> 2], o = t = 0;
                                                        o: {
                                                            a: switch (F[a + 8 >> 2] - 1 | 0) {
                                                                default: e = F[a + 12 >> 2],
                                                                o = 1;
                                                                break o;
                                                                case 0:
                                                                        if ((i = F[a + 12 >> 2]) >>> 0 < (o = F[52 + r >> 2]) >>> 0) {
                                                                        if (o = 0, i = F[48 + r >> 2] + (i << 3) | 0, 41 != F[i + 4 >> 2]) break o;
                                                                        e = F[F[i >> 2] >> 2], o = 1;
                                                                        break o
                                                                    }z(1051e3, i, o),
                                                                    N();
                                                                case 1:
                                                                        break a;
                                                                case 2:
                                                                        break o
                                                            }(0 | (i = F[40 + r >> 2])) != F[44 + r >> 2] && (F[40 + r >> 2] = i + 8, 41 == F[i + 4 >> 2] && (e = F[F[i >> 2] >> 2], o = 1))
                                                        }
                                                        F[20 + r >> 2] = e, F[16 + r >> 2] = o;
                                                        o: {
                                                            a: {
                                                                i: {
                                                                    c: {
                                                                        u: {
                                                                            s: switch (F[a >> 2] - 1 | 0) {
                                                                                case 1:
                                                                                    if ((0 | (e = F[40 + r >> 2])) != F[44 + r >> 2]) break u;
                                                                                    break o;
                                                                                case 2:
                                                                                    break o;
                                                                                case 0:
                                                                                    break s;
                                                                                default:
                                                                                    break i
                                                                            }
                                                                            if ((e = F[a + 4 >> 2]) >>> 0 >= (o = F[52 + r >> 2]) >>> 0) break c;
                                                                            if (e = F[48 + r >> 2] + (e << 3) | 0, 41 != F[e + 4 >> 2]) break o;o = F[F[e >> 2] >> 2];
                                                                            break a
                                                                        }
                                                                        if (F[40 + r >> 2] = e + 8, 41 != F[e + 4 >> 2]) break o;o = F[F[e >> 2] >> 2];
                                                                        break a
                                                                    }
                                                                    z(1051e3, e, o),
                                                                    N()
                                                                }
                                                                o = F[a + 4 >> 2]
                                                            }
                                                            t = 1
                                                        }
                                                        if (F[28 + r >> 2] = o, F[24 + r >> 2] = t, 1 == F[a + -16 >> 2]) {
                                                            if ((e = F[a + -12 >> 2]) >>> 0 >= (t = F[52 + r >> 2]) >>> 0) break t;
                                                            o = F[48 + r >> 2] + (e << 3) | 0
                                                        } else {
                                                            if ((0 | (o = F[40 + r >> 2])) == F[44 + r >> 2]) break n;
                                                            F[40 + r >> 2] = o + 8
                                                        }
                                                        if (E[F[o + 4 >> 2]](F[o >> 2], 8 + r | 0)) { o = 1; break e }
                                                        if (l >>> 0 <= c >>> 0) break r;
                                                        if (e = n + -4 | 0, t = F[n >> 2], n = n + 8 | 0, a = a + 36 | 0, c = c + (o = 1) | 0, E[F[F[36 + r >> 2] + 12 >> 2]](F[32 + r >> 2], F[e >> 2], t)) break
                                                    }
                                                    break e
                                                }
                                            }
                                            if (c >>> 0 < s >>> 0 && (o = 1, e = (c << 3) + u | 0, E[F[F[36 + r >> 2] + 12 >> 2]](F[32 + r >> 2], F[e >> 2], F[e + 4 >> 2]))) break e;o = 0;
                                            break e
                                        }
                                        Z(1050472),
                                        N()
                                    }
                                    z(1050984, e, t),
                                    N()
                                }
                                return W = r + 64 | 0, o
                            }

                            function I(e, t, n) {
                                var r = 0,
                                    o = 0,
                                    a = 0,
                                    i = 0,
                                    c = 0,
                                    u = 0,
                                    s = 0,
                                    l = 0,
                                    f = 0,
                                    d = 0,
                                    p = 0,
                                    h = 0,
                                    r = F[e + 16 >> 2];
                                e: {
                                    t: {
                                        n: {
                                            r: {
                                                if (1 != (0 | (d = F[e + 8 >> 2]))) {
                                                    if (r) break r;
                                                    r = 0 | E[F[F[e + 28 >> 2] + 12 >> 2]](F[e + 24 >> 2], t, n);
                                                    break t
                                                }
                                                if (!r) break n
                                            }
                                            r: if (n) {
                                                for (c = t + n | 0, l = F[e + 20 >> 2] + 1 | 0, p = r = t;;) {
                                                    a = r + 1 | 0;
                                                    o: {
                                                        a: {
                                                            if ((0 | (o = T[0 | r])) <= -1) { if (r = (0 | a) != (0 | c) ? (s = 63 & L[r + 1 | 0], a = r + 2 | 0) : (s = 0, c), u = (f = 31 & o) << 6 | s, (h = 255 & o) >>> 0 <= 223) break a; if (o = (0 | r) != (0 | c) ? (u = 63 & L[0 | r], a = r + 1 | 0) : (u = 0, c), u = (s = s << 6 | u) | f << 12, h >>> 0 < 240) break a; if (1114112 != (0 | (o = (o = (0 | o) != (0 | c) ? (r = o + 1 | 0, 63 & L[0 | o]) : (r = a, 0)) | f << 18 & 1835008 | s << 6))) break o; break r }
                                                            u = 255 & o
                                                        }
                                                        o = u,
                                                        r = a
                                                    }
                                                    if (l = l + -1 | 0) { if (i = (i - p | 0) + r | 0, (0 | (p = r)) != (0 | c)) continue; break r }
                                                    break
                                                }
                                                1114112 != (0 | o) && (!(!(o = i) | (0 | (a = n)) == (0 | i)) && T[t + i | (r = 0)] < -64 | n >>> 0 <= i >>> 0 || (r = t), n = r ? o : a, t = r || t)
                                            } else n = 0;if (!d) break e
                                        }
                                        if (a = 0, n)
                                            for (o = n, r = t; a = (128 == (192 & L[0 | r])) + a | 0, r = r + 1 | 0, o = o + -1 | 0;);
                                        if (n - a >>> 0 >= (c = F[e + 12 >> 2]) >>> 0) break e;
                                        if (a = i = 0, n)
                                            for (o = n, r = t; a = (128 == (192 & L[0 | r])) + a | 0, r = r + 1 | 0, o = o + -1 | 0;);o = c + (a - n | 0) | 0;n: {
                                            r: {
                                                o: switch ((3 == (0 | (r = L[e + 48 | 0])) ? 0 : r) - 1 | 0) {
                                                    case 1:
                                                        break r;
                                                    case 0:
                                                    case 2:
                                                        break o;
                                                    default:
                                                        break n
                                                }
                                                i = o,
                                                o = 0;
                                                break n
                                            }
                                            i = o >>> 1,
                                            o = o + 1 >>> 1
                                        }
                                        r = i + 1 | 0;n: { for (;;) { if (!(r = r + -1 | 0)) break n; if (E[F[F[e + 28 >> 2] + 16 >> 2]](F[e + 24 >> 2], F[e + 4 >> 2])) break } return 1 }
                                        if (a = F[e + 4 >> 2], r = 1, !E[F[F[e + 28 >> 2] + 12 >> 2]](F[e + 24 >> 2], t, n)) { for (r = o + 1 | 0, t = F[e + 28 >> 2], e = F[e + 24 >> 2];;) { if (!(r = r + -1 | 0)) return 0; if (E[F[t + 16 >> 2]](e, a)) break } return 1 }
                                    }
                                    return r
                                }
                                return 0 | E[F[F[e + 28 >> 2] + 12 >> 2]](F[e + 24 >> 2], t, n)
                            }

                            function O(e) {
                                var t = 0,
                                    n = 0,
                                    r = 0,
                                    o = 0,
                                    a = 0,
                                    i = 0,
                                    c = 0,
                                    n = (t = e + -8 | 0) + (e = -8 & (o = F[e + -4 >> 2])) | 0;
                                e: {
                                    t: {
                                        n: {
                                            r: if (!(1 & o)) {
                                                if (!(3 & o)) break n;
                                                if (e = (o = F[t >> 2]) + e | 0, (0 | (t = t - o | 0)) == F[262873]) { if (3 != (3 & F[n + 4 >> 2])) break r; return F[262871] = e, F[n + 4 >> 2] = -2 & F[n + 4 >> 2], F[t + 4 >> 2] = 1 | e, F[e + t >> 2] = e, 0 }
                                                256 <= o >>> 0 ? M(t) : (0 | (r = F[t + 8 >> 2])) == (0 | (a = F[t + 12 >> 2])) ? (i = 1051084, c = F[262771] & Fe(-2, o >>> 3), F[i >> 2] = c) : (F[r + 12 >> 2] = a, F[a + 8 >> 2] = r)
                                            }if (2 & (o = F[n + 4 >> 2])) F[n + 4 >> 2] = -2 & o,
                                            F[t + 4 >> 2] = 1 | e,
                                            F[e + t >> 2] = e;
                                            else {
                                                r: {
                                                    if (F[262874] != (0 | n)) { if ((0 | n) != F[262873]) break r; return F[262873] = t, e = F[262871] + e | 0, F[262871] = e, F[t + 4 >> 2] = 1 | e, F[e + t >> 2] = e, 0 }
                                                    if (F[262874] = t, e = F[262872] + e | 0, F[262872] = e, F[t + 4 >> 2] = 1 | e, (0 | t) == F[262873] && (F[262871] = 0, F[262873] = 0), (n = F[262881]) >>> 0 >= e >>> 0) break n;
                                                    if (!(e = F[262874])) break n;o: if (!((o = F[262872]) >>> 0 < 41))
                                                            for (t = 1051508;;) { if ((r = F[t >> 2]) + F[t + 4 >> 2] >>> 0 > e >>> 0 && r >>> 0 <= e >>> 0) break o; if (!(t = F[t + 8 >> 2])) break }
                                                    if (r = 4095, e = F[262879]) {
                                                        for (t = 0; t = t + 1 | 0, e = F[e + 8 >> 2];);
                                                        r = 4095 < t >>> 0 ? t : 4095
                                                    }
                                                    if (F[262883] = r, o >>> 0 <= n >>> 0) break n;
                                                    return F[262881] = -1,
                                                    0
                                                }
                                                if (e = (r = -8 & o) + e | 0, 256 <= r >>> 0 ? M(n) : (0 | (r = F[n + 12 >> 2])) == (0 | (n = F[n + 8 >> 2])) ? (i = 1051084, c = F[262771] & Fe(-2, o >>> 3), F[i >> 2] = c) : (F[n + 12 >> 2] = r, F[r + 8 >> 2] = n), F[t + 4 >> 2] = 1 | e, F[e + t >> 2] = e, F[262873] == (0 | t)) { F[262871] = e; break n }
                                            }
                                            if (e >>> 0 < 256) break t;
                                            if (P(t, e), e = F[262883] + -1 | 0, !(F[262883] = e)) { if (e = F[262879]) break e; return F[262883] = 4095, 0 }
                                        }
                                        return
                                    }
                                    return e = 1051092 + ((n = e >>> 3) << 3) | 0,
                                    o = F[262771],
                                    n = 1 << (31 & n),
                                    r = F[e + 8 >> 2],
                                    o & n || (F[262771] = n | o, r = e),
                                    n = r,
                                    F[e + 8 >> 2] = t,
                                    F[n + 12 >> 2] = t,
                                    F[t + 12 >> 2] = e,
                                    F[t + 8 >> 2] = n,
                                    0
                                }
                                for (t = 0; t = t + 1 | 0, e = F[e + 8 >> 2];);
                                F[262883] = 4095 < t >>> 0 ? t : 4095
                            }

                            function A(e, t, n, r, o) {
                                var a, i = 0,
                                    c = 0,
                                    u = 0,
                                    s = 0,
                                    l = (i = 1 & (a = F[e >> 2])) ? 43 : 1114112,
                                    s = o + i | 0;
                                if (4 & a) {
                                    if (n)
                                        for (u = n, i = t; c = (128 == (192 & L[0 | i])) + c | 0, i = i + 1 | 0, u = u + -1 | 0;);
                                    s = (n + s | 0) - c | 0
                                } else t = 0;
                                e: {
                                    t: {
                                        if (1 != F[e + 8 >> 2]) { if (ee(e, l, t, n)) break t; break e }
                                        if ((i = F[e + 12 >> 2]) >>> 0 <= s >>> 0) { if (ee(e, l, t, n)) break t; break e }
                                        n: {
                                            if (!(8 & a)) {
                                                c = i - s | 0;
                                                r: {
                                                    o: {
                                                        a: switch ((3 == ((i = 0) | (u = L[e + 48 | 0])) ? 1 : u) - 1 | 0) {
                                                            case 1:
                                                                break o;
                                                            case 0:
                                                            case 2:
                                                                break a;
                                                            default:
                                                                break r
                                                        }
                                                        i = c,
                                                        c = 0;
                                                        break r
                                                    }
                                                    i = c >>> 1,
                                                    c = c + 1 >>> 1
                                                }
                                                for (i = i + 1 | 0;;) { if (!(i = i + -1 | 0)) break n; if (E[F[F[e + 28 >> 2] + 16 >> 2]](F[e + 24 >> 2], F[e + 4 >> 2])) break }
                                                return 1
                                            }
                                            if (T[e + 48 | 0] = 1, F[e + 4 >> 2] = 48, ee(e, l, t, n)) break t;c = i - s | 0;r: {
                                                o: {
                                                    a: switch ((3 == ((i = 0) | (t = L[e + 48 | 0])) ? 1 : t) - 1 | 0) {
                                                        case 1:
                                                            break o;
                                                        case 0:
                                                        case 2:
                                                            break a;
                                                        default:
                                                            break r
                                                    }
                                                    i = c,
                                                    c = 0;
                                                    break r
                                                }
                                                i = c >>> 1,
                                                c = c + 1 >>> 1
                                            }
                                            i = i + 1 | 0;r: { for (;;) { if (!(i = i + -1 | 0)) break r; if (E[F[F[e + 28 >> 2] + 16 >> 2]](F[e + 24 >> 2], F[e + 4 >> 2])) break } return 1 }
                                            if (t = F[e + 4 >> 2], E[F[F[e + 28 >> 2] + 12 >> 2]](F[e + 24 >> 2], r, o)) break t;
                                            for (c = c + 1 | 0, n = F[e + 28 >> 2], e = F[e + 24 >> 2];;) { if (!(c = c + -1 | 0)) return 0; if (E[F[n + 16 >> 2]](e, t)) break }
                                            break t
                                        }
                                        if (i = F[e + 4 >> 2], !ee(e, l, t, n) && !E[F[F[e + 28 >> 2] + 12 >> 2]](F[e + 24 >> 2], r, o))
                                            for (c = c + 1 | 0, t = F[e + 28 >> 2], e = F[e + 24 >> 2];;) { if (!(c = c + -1 | 0)) return 0; if (E[F[t + 16 >> 2]](e, i)) break }
                                    }
                                    return 1
                                }
                                return 0 | E[F[F[e + 28 >> 2] + 12 >> 2]](F[e + 24 >> 2], r, o)
                            }

                            function V(e, t, n, r) {
                                var o, a = 0,
                                    i = 0,
                                    c = 0,
                                    u = 0,
                                    s = 0,
                                    l = 0;
                                W = o = W - 32 | 0;
                                e: {
                                    t: {
                                        n: {
                                            r: {
                                                o: {
                                                    if ((r &= 255) >>> 0 <= 3) switch (r - 1 | 0) {
                                                        case 2:
                                                            break t;
                                                        case 1:
                                                            break n;
                                                        case 0:
                                                            break r;
                                                        default:
                                                            break o
                                                    }
                                                    he(1049688, 24, 1049672),
                                                    N()
                                                }
                                                c = Fe(a = F[t >> 2], 5),
                                                i = F[t + 12 >> 2],
                                                r = F[t + 8 >> 2],
                                                t = F[t + 4 >> 2],
                                                u = Fe(c = 1518500249 + ((c + F[n >> 2] | 0) + ((i ^ r) & t ^ i) | 0) | 0, 30),
                                                F[e + 12 >> 2] = u,
                                                i = 1518500249 + (((i + (r ^ a & ((t = Fe(t, 30)) ^ r)) | 0) + F[n + 4 >> 2] | 0) + Fe(c, 5) | 0) | 0,
                                                l = Fe(i, 30),
                                                F[(s = e) + 8 >> 2] = l,
                                                a = 1518500249 + (((r + F[n + 8 >> 2] | 0) + (t ^ c & ((r = Fe(a, 30)) ^ t)) | 0) + Fe(i, 5) | 0) | 0,
                                                F[e + 4 >> 2] = a,
                                                s = e,
                                                l = 1518500249 + (((t + F[n + 12 >> 2] | 0) + (r ^ i & (r ^ u)) | 0) + Fe(a, 5) | 0) | 0,
                                                F[s >> 2] = l;
                                                break e
                                            }
                                            i = F[4 + (a = t + 8 | 0) >> 2],
                                            F[(r = 8 + o | 0) >> 2] = F[a >> 2],
                                            F[r + 4 >> 2] = i,
                                            r = F[t + 4 >> 2],
                                            F[o >> 2] = F[t >> 2],
                                            F[4 + o >> 2] = r,
                                            F[28 + o >> 2] = F[n + 12 >> 2] + 1859775393,
                                            F[24 + o >> 2] = F[n + 8 >> 2] + 1859775393,
                                            F[20 + o >> 2] = F[n + 4 >> 2] + 1859775393,
                                            F[16 + o >> 2] = F[n >> 2] + 1859775393,
                                            G(e, o, 16 + o | 0);
                                            break e
                                        }
                                        c = Fe(a = F[t >> 2], 5),
                                        i = F[t + 12 >> 2],
                                        r = F[t + 8 >> 2],
                                        t = F[t + 4 >> 2],
                                        u = Fe(c = ((c + F[n >> 2] | 0) + ((i ^ r) & t ^ r & i) | 0) - 1894007588 | 0, 30),
                                        F[e + 12 >> 2] = u,
                                        i = (((i + (a & ((t = Fe(t, 30)) ^ r) ^ t & r) | 0) + F[n + 4 >> 2] | 0) + Fe(c, 5) | 0) - 1894007588 | 0,
                                        l = Fe(i, 30),
                                        F[(s = e) + 8 >> 2] = l,
                                        a = (((r + F[n + 8 >> 2] | 0) + (c & ((r = Fe(a, 30)) ^ t) ^ t & r) | 0) + Fe(i, 5) | 0) - 1894007588 | 0,
                                        F[e + 4 >> 2] = a,
                                        s = e,
                                        l = (((t + F[n + 12 >> 2] | 0) + (i & (r ^ u) ^ r & u) | 0) + Fe(a, 5) | 0) - 1894007588 | 0,
                                        F[s >> 2] = l;
                                        break e
                                    }
                                    i = F[4 + (a = t + 8 | 0) >> 2],
                                    F[(r = 8 + o | 0) >> 2] = F[a >> 2],
                                    F[r + 4 >> 2] = i,
                                    r = F[t + 4 >> 2],
                                    F[o >> 2] = F[t >> 2],
                                    F[4 + o >> 2] = r,
                                    F[28 + o >> 2] = F[n + 12 >> 2] + -899497514,
                                    F[24 + o >> 2] = F[n + 8 >> 2] + -899497514,
                                    F[20 + o >> 2] = F[n + 4 >> 2] + -899497514,
                                    F[16 + o >> 2] = F[n >> 2] + -899497514,
                                    G(e, o, 16 + o | 0)
                                }
                                W = 32 + o | 0
                            }

                            function C(e, t) {
                                var n = 0,
                                    r = 0,
                                    o = 0,
                                    a = 0,
                                    i = 0,
                                    c = 0,
                                    n = e + t | 0;
                                e: {
                                    t: {
                                        n: if (!(1 & (r = F[e + 4 >> 2]))) {
                                            if (!(3 & r)) break t;
                                            if (t = (r = F[e >> 2]) + t | 0, (0 | (e = e - r | 0)) == F[262873]) { if (3 != (3 & F[n + 4 >> 2])) break n; return F[262871] = t, F[n + 4 >> 2] = -2 & F[n + 4 >> 2], F[e + 4 >> 2] = 1 | t, F[n >> 2] = t, 0 }
                                            256 <= r >>> 0 ? M(e) : (0 | (o = F[e + 8 >> 2])) == (0 | (a = F[e + 12 >> 2])) ? (i = 1051084, c = F[262771] & Fe(-2, r >>> 3), F[i >> 2] = c) : (F[o + 12 >> 2] = a, F[a + 8 >> 2] = o)
                                        }if (2 & (r = F[n + 4 >> 2])) { F[n + 4 >> 2] = -2 & r, F[e + 4 >> 2] = 1 | t, F[e + t >> 2] = t; break e }
                                        n: { if (F[262874] != (0 | n)) { if ((0 | n) != F[262873]) break n; return F[262873] = e, t = F[262871] + t | 0, F[262871] = t, F[e + 4 >> 2] = 1 | t, F[e + t >> 2] = t, 0 } if (F[262874] = e, t = F[262872] + t | 0, F[262872] = t, F[e + 4 >> 2] = 1 | t, F[262873] != (0 | e)) break t; return F[262871] = 0, F[262873] = 0 }
                                        if (t = (o = -8 & r) + t | 0, 256 <= o >>> 0 ? M(n) : (0 | (o = F[n + 12 >> 2])) == (0 | (n = F[n + 8 >> 2])) ? (i = 1051084, c = F[262771] & Fe(-2, r >>> 3), F[i >> 2] = c) : (F[n + 12 >> 2] = o, F[o + 8 >> 2] = n), F[e + 4 >> 2] = 1 | t, F[e + t >> 2] = t, F[262873] != (0 | e)) break e;F[262871] = t
                                    }
                                    return
                                }
                                256 <= t >>> 0 ? P(e, t) : (t = 1051092 + ((n = t >>> 3) << 3) | 0, r = F[262771], n = 1 << (31 & n), o = F[t + 8 >> 2], r & n || (F[262771] = n | r, o = t), n = o, F[t + 8 >> 2] = e, F[n + 12 >> 2] = e, F[e + 12 >> 2] = t, F[e + 8 >> 2] = n)
                            }

                            function j(e, t) {
                                var n = 0,
                                    r = 0,
                                    o = 0,
                                    a = 0,
                                    i = 0;
                                return -65587 - (e = 16 < e >>> 0 ? e : 16) >>> 0 <= t >>> 0 || (n = S(12 + ((o = t >>> 0 < 11 ? 16 : t + 11 & -8) + e | 0) | 0)) && (t = n + -8 | 0, (r = e + -1 | 0) & n ? (r = (-8 & (i = F[(a = n + -4 | 0) >> 2])) - (n = (e = 16 < (n = (n + r & 0 - e) - 8 | 0) - t >>> 0 ? n : e + n | 0) - t | 0) | 0, 3 & i ? (F[e + 4 >> 2] = r | 1 & F[e + 4 >> 2] | 2, F[4 + (r = e + r | 0) >> 2] = 1 | F[r + 4 >> 2], F[a >> 2] = n | 1 & F[a >> 2] | 2, F[e + 4 >> 2] = 1 | F[e + 4 >> 2], C(t, n)) : (t = F[t >> 2], F[e + 4 >> 2] = r, F[e >> 2] = t + n)) : e = t, 3 & (t = F[e + 4 >> 2]) && ((n = -8 & t) >>> 0 <= o + 16 >>> 0 || (F[e + 4 >> 2] = o | 1 & t | 2, t = e + o | 0, o = n - o | 0, F[t + 4 >> 2] = 3 | o, F[4 + (n = e + n | 0) >> 2] = 1 | F[n + 4 >> 2], C(t, o))), r = e + 8 | 0), r
                            }

                            function P(e, t) {
                                var n = 0,
                                    r = 0,
                                    o = 0,
                                    a = 0;
                                F[e + 16 >> 2] = 0, r = F[(a = e) + 20 >> 2] = 0, (n = t >>> 8) && (r = 31, 16777215 < t >>> 0 || (r = 62 + ((t >>> (6 - (n = y(n)) & 31) & 1) - (n << 1) | 0) | 0)), o = r, a = 1051356 + ((F[a + 28 >> 2] = o) << 2) | 0;
                                e: {
                                    t: {
                                        n: {
                                            r: {
                                                if ((r = 1 << (31 & o)) & (n = F[262772])) {
                                                    if (n = F[a >> 2], (-8 & F[n + 4 >> 2]) != (0 | t)) break r;
                                                    r = n;
                                                    break n
                                                }
                                                F[262772] = n | r,
                                                F[a >> 2] = e,
                                                F[e + 24 >> 2] = a;
                                                break e
                                            }
                                            for (o = t << (31 == (0 | o) ? 0 : 25 - (o >>> 1) & 31);;) { if (!(r = F[(a = 16 + ((o >>> 29 & 4) + n | 0) | 0) >> 2])) break t; if (o <<= 1, (-8 & F[(n = r) + 4 >> 2]) == (0 | t)) break }
                                        }
                                        return t = F[r + 8 >> 2],
                                        F[t + 12 >> 2] = e,
                                        F[r + 8 >> 2] = e,
                                        F[e + 24 >> 2] = 0,
                                        F[e + 12 >> 2] = r,
                                        F[e + 8 >> 2] = t,
                                        0
                                    }
                                    F[a >> 2] = e,
                                    F[e + 24 >> 2] = n
                                }
                                F[e + 12 >> 2] = e, F[e + 8 >> 2] = e
                            }

                            function M(e) {
                                var t = 0,
                                    n = 0,
                                    r = 0,
                                    o = 0,
                                    a = 0,
                                    i = 0,
                                    c = F[e + 24 >> 2];
                                e: {
                                    t: {
                                        if ((0 | e) == (0 | (t = F[e + 12 >> 2]))) {
                                            if (r = F[(t = e + 20 | 0) >> 2], n = F[(r ? 20 : 16) + e >> 2]) break t;
                                            t = 0;
                                            break e
                                        }
                                        n = F[e + 8 >> 2],
                                        F[n + 12 >> 2] = t,
                                        F[t + 8 >> 2] = n;
                                        break e
                                    }
                                    for (r = r ? t : e + 16 | 0; o = r, (n = F[(r = (t = n) + 20 | 0) >> 2]) || (r = t + 16 | 0, n = F[t + 16 >> 2]), n;);F[o >> 2] = 0
                                }
                                e: if (c) {
                                    n = 1051356 + (F[e + 28 >> 2] << 2) | 0;
                                    t: { if ((0 | e) == F[n >> 2]) { if (F[n >> 2] = t) break t; return a = 1051088, i = F[262772] & Fe(-2, F[e + 28 >> 2]), F[a >> 2] = i, 0 } if (!(F[(F[c + 16 >> 2] == (0 | e) ? 16 : 20) + c >> 2] = t)) break e }
                                    F[t + 24 >> 2] = c, (n = F[e + 16 >> 2]) && (F[t + 16 >> 2] = n, F[n + 24 >> 2] = t), (e = F[e + 20 >> 2]) && (F[t + 20 >> 2] = e, F[e + 24 >> 2] = t)
                                }
                            }

                            function R(e, t, n, r) {
                                var o, a, i = 0,
                                    c = 0,
                                    u = 0;
                                W = o = W + -64 | 0, c = 1, i = F[r + 12 >> 2], u = F[r + 8 >> 2], a = F[r + 4 >> 2], r = F[r >> 2];
                                e: {
                                    t: { if (1 == F[262884]) { if (c = F[262885] + 1 | 0, 2 < (F[262885] = c) >>> 0) break t } else F[262884] = 1, F[262885] = 1; if (ge(48 + o | 0, r, a, u, i), i = F[4 + (r = 56 + o | 0) >> 2], F[(u = 36 + o | 0) >> 2] = F[r >> 2], F[u + 4 >> 2] = i, F[24 + o >> 2] = n, F[20 + o >> 2] = 1049892, F[16 + o >> 2] = 1, n = F[52 + o >> 2], F[28 + o >> 2] = F[48 + o >> 2], F[32 + o >> 2] = n, !((0 | (n = F[262768])) <= -1) && (n = n + 1 | 0, F[262768] = n, (r = F[262770]) && (n = F[262769], E[F[t + 16 >> 2]](8 + o | 0, e), i = F[12 + o >> 2], F[16 + o >> 2] = F[8 + o >> 2], F[20 + o >> 2] = i, E[F[r + 12 >> 2]](n, 16 + o | 0), n = F[262768]), F[262768] = n + -1, c >>> 0 <= 1)) break e }
                                    N()
                                }
                                W = n = W - 16 | 0, F[n + 12 >> 2] = t, F[n + 8 >> 2] = e, N()
                            }

                            function B(e, t) {
                                var n, r, o, a, i, c, u, s, l, f, d, p, h, v, g, b, y, m, w, _, k, S, I, O, A, C, j, P, M = 0;
                                W = n = W - 176 | 0, (r = 0 | E[F[262284]]()) ? (F[8 + (j = 8 + n | 0) >> 2] = 1732584193, F[12 + j >> 2] = -271733879, F[j >> 2] = 0, F[4 + j >> 2] = 0, F[24 + j >> 2] = -1009589776, F[(P = 16 + j | 0) >> 2] = -1732584194, F[4 + P >> 2] = 271733878, pe(28 + j | 0, 69), (0 | (M = F[r >> 2] + 1 | 0)) <= 0 && (H(1049045, 24, 128 + n | 0, 1049088), N()), F[r >> 2] = M, F[164 + n >> 2] = 3, F[148 + n >> 2] = 2, F[132 + n >> 2] = 2, F[136 + n >> 2] = 0, F[128 + n >> 2] = 1049120, F[172 + n >> 2] = r, F[168 + n >> 2] = 4 + r, F[160 + n >> 2] = t, F[156 + n >> 2] = 4, F[144 + n >> 2] = 152 + n, F[152 + n >> 2] = 168 + n, function(e, t) {
                                    var n, r, o = 0,
                                        a = 0,
                                        i = 0,
                                        c = 0;
                                    if (W = n = W - 48 | 0, c = F[t >> 2], a = (r = F[t + 4 >> 2]) << 3)
                                        for (o = c + 4 | 0; i = F[o >> 2] + i | 0, o = o + 8 | 0, a = a + -8 | 0;);
                                    e: {
                                        t: {
                                            n: { r: { if (F[t + 20 >> 2]) { if (r || (z(1050152, 0, 0), N()), !F[c + 4 >> 2] && i >>> 0 <= 15 || !((o = i + i | 0) >>> 0 >= i >>> 0)) { a = 1, i = 8 + n | (o = 0); break r } } else o = i; if ((0 | o) <= -1) break n; if (i = 8 + n | 0, o) { if (!(a = Ie(o, 1))) break t } else a = 1, o = 0 } if (F[16 + n >> 2] = 0, F[12 + n >> 2] = o, F[8 + n >> 2] = a, F[20 + n >> 2] = 8 + n, a = F[4 + (o = t + 16 | 0) >> 2], F[(c = 40 + n | 0) >> 2] = F[o >> 2], F[c + 4 >> 2] = a, a = F[4 + (o = t + 8 | 0) >> 2], F[(c = 32 + n | 0) >> 2] = F[o >> 2], F[c + 4 >> 2] = a, o = F[t + 4 >> 2], F[24 + n >> 2] = F[t >> 2], F[28 + n >> 2] = o, D(20 + n | 0, 1050044, 24 + n | 0)) break e; return t = F[i + 4 >> 2], F[e >> 2] = F[i >> 2], F[4 + e >> 2] = t, F[8 + e >> 2] = F[i + 8 >> 2], W = 48 + n | 0 }
                                            Te(),
                                            N()
                                        }
                                        Pe(o, 1),
                                        N()
                                    }
                                    H(1050248, 51, 24 + n | 0, 1050168), N()
                                }(112 + n | 0, 128 + n | 0), _e(n, 112 + n | 0), k = 8 + n | 0, S = F[n >> 2], I = F[4 + n >> 2], W = O = W - 16 | 0, L[96 + k | 0] && (he(1049832, 32, 1049816), N()), C = function(e, t, n) {
                                    var r, o = 0,
                                        a = 1 + (o = (n >>> 29) + t | 0) | 0,
                                        i = o;
                                    if (!((0 | (n = (o = (n <<= 3) + e | 0) >>> 0 < n >>> 0 ? a : i)) == (0 | t) & o >>> 0 < e >>> 0 | n >>> 0 < t >>> 0)) return x = n, o;
                                    W = r = W - 48 | 0, F[12 + r >> 2] = 25, F[8 + r >> 2] = 1049472, F[36 + r >> 2] = 1, F[20 + r >> 2] = 1, F[24 + r >> 2] = 0, F[16 + r >> 2] = 1050496, F[44 + r >> 2] = 42, F[32 + r >> 2] = 40 + r, F[40 + r >> 2] = 8 + r, ae(16 + r | 0, 1050504), N(), N()
                                }(F[(A = k) >> 2], F[4 + k >> 2], I), F[A >> 2] = C, F[4 + k >> 2] = x, F[12 + O >> 2] = 8 + k, function(e, t, n, r) {
                                    var o, a = 0,
                                        i = 0,
                                        c = 0;
                                    W = o = W + -64 | 0, F[60 + o >> 2] = r;
                                    e: {
                                        if (r = F[e >> 2]) {
                                            if ((a = 64 - r | 0) >>> 0 > n >>> 0) { oe(32 + o | 0, 4 + e | 0, 64, r, n + r | 0), ve(t, n, F[32 + o >> 2], F[36 + o >> 2]); break e }
                                            fe(48 + o | 0, t, n, a), r = F[52 + o >> 2], i = F[48 + o >> 2], oe(40 + o | 0, c = 4 + e | 0, 64, F[e >> 2], 64), ve(i, r, F[40 + o >> 2], F[44 + o >> 2]), Ae(60 + o | (F[e >> 2] = 0), c, 64)
                                        }
                                        for (r = n - a | 0; !(r >>> 0 <= 63);) ce(8 + o | 0, i = a, a = a - -64 | 0, t, n),
                                        Ae(60 + o | 0, F[8 + o >> 2], F[12 + o >> 2]),
                                        r = r + -64 | 0;ce(24 + o | 0, a, n, t, n),
                                        t = F[28 + o >> 2],
                                        n = F[24 + o >> 2],
                                        oe(16 + o | 0, 4 + e | 0, 64, 0, r),
                                        ve(n, t, F[16 + o >> 2], F[20 + o >> 2]),
                                        n = r
                                    }
                                    F[e >> 2] = F[e >> 2] + n, W = o + 64 | 0
                                }(28 + k | 0, S, I, 12 + O | 0), W = 16 + O | 0, be(112 + n | 0), t = F[172 + n >> 2], F[t >> 2] = F[t >> 2] + -1, o = e, a = 8 + n | 0, W = i = W - 48 | (_ = 0), h = 16 + i | 0, v = 20, W = g = W - 16 | 0, F[8 + g >> 2] = 0, F[g >> 2] = 1, F[4 + g >> 2] = 0, w = 0, Ce(b = g, y = v), m = F[b >> 2], y && (pe(m + (w = F[8 + b >> 2]) | 0, y), F[8 + b >> 2] = y + w), F[8 + h >> 2] = F[8 + g >> 2], v = F[4 + g >> 2], F[h >> 2] = F[g >> 2], F[4 + h >> 2] = v, W = 16 + g | 0, _e(8 + i | 0, 16 + i | 0), u = a, s = F[8 + i >> 2], l = F[12 + i >> 2], W = f = W - 80 | (p = d = 0), L[u + 96 | 0] || (F[76 + f >> 2] = u + 8, function(e, t) {
                                    var n;
                                    if (W = n = W - 16 | 0, ne(8 + n | 0, e, 1), F[12 + n >> 2]) return T[F[8 + n >> 2]] = 128, 64 - F[e >> 2] >>> 0 < 8 && (X(e, 64), $(n, e), U(F[t >> 2], F[n >> 2], F[4 + n >> 2])), X(e, 56), W = 16 + n | 0;
                                    z(1049536, 0, 0), N()
                                }(d = u + 28 | 0, 76 + f | 0), ne(f + 64 | 0, d, 4), te(F[64 + f >> 2], F[68 + f >> 2], F[u + 4 >> 2]), ne(56 + f | 0, d, 4), te(F[56 + f >> 2], F[60 + f >> 2], F[u >> 2]), p = F[76 + f >> 2], $(48 + f | 0, d), U(p, F[48 + f >> 2], F[52 + f >> 2]), T[u + 96 | 0] = 1), oe(40 + f | 0, s, l, 0, 4), te(F[40 + f >> 2], F[44 + f >> 2], F[u + 8 >> 2]), oe(32 + f | 0, s, l, 4, 8), te(F[32 + f >> 2], F[36 + f >> 2], F[u + 12 >> 2]), oe(24 + f | 0, s, l, 8, 12), te(F[24 + f >> 2], F[28 + f >> 2], F[u + 16 >> 2]), oe(16 + f | 0, s, l, 12, 16), te(F[16 + f >> 2], F[20 + f >> 2], F[u + 20 >> 2]), oe(8 + f | 0, s, l, 16, 20), te(F[8 + f >> 2], F[12 + f >> 2], F[u + 24 >> 2]), W = 80 + f | 0, F[(a = 40 + i | 0) >> 2] = F[24 + i >> 2], _ = F[20 + i >> 2], F[32 + i >> 2] = F[16 + i >> 2], F[36 + i >> 2] = _, _ = F[36 + i >> 2], c = F[a >> 2], a = F[32 + i >> 2], F[44 + i >> 2] = c + a, F[40 + i >> 2] = a, F[36 + i >> 2] = _, F[32 + i >> 2] = a, function(e, t) {
                                    var n, r, o, a, i, c, u, s, l, f, d = 0,
                                        p = 0,
                                        h = 0;
                                    W = n = W + -64 | 0, p = F[4 + (d = t + 8 | 0) >> 2], h = 8 + n | 0, d = F[d >> 2], F[h >> 2] = d, F[h + 4 >> 2] = p, p = F[t + 4 >> 2], F[n >> 2] = F[t >> 2], F[4 + n >> 2] = p;
                                    e: {
                                        t: { if (F[12 + n >> 2] != (0 | d)) { if (F[8 + n >> 2] = d + 1, s = 16 + n | 0, l = L[0 | d], W = f = W - 16 | 0, F[12 + f >> 2] = F[1048724 + ((15 & l) << 2) >> 2], F[8 + f >> 2] = F[1048724 + ((240 & l) >>> 2) >> 2], re(s, 8 + f | 0, 16 + f | 0), W = 16 + f | 0, F[16 + n >> 2]) break t } else F[16 + n >> 2] = 0; if (F[e + 8 >> 2] = 0, F[e >> 2] = 1, F[e + 4 >> 2] = 0, Y(n), !F[16 + n >> 2]) break e;be(16 + n | 0); break e }
                                        F[(t = 40 + n | 0) >> 2] = F[24 + n >> 2],
                                        d = F[20 + n >> 2],
                                        F[32 + n >> 2] = F[16 + n >> 2],
                                        F[36 + n >> 2] = d,
                                        p = F[4 + (d = 8 + n | 0) >> 2],
                                        F[(h = 56 + n | 0) >> 2] = F[d >> 2],
                                        F[h + 4 >> 2] = p,
                                        d = F[4 + n >> 2],
                                        F[48 + n >> 2] = F[n >> 2],
                                        F[52 + n >> 2] = d,
                                        r = 32 + n | 0,
                                        W = a = W - 16 | (u = 0),
                                        c = F[4 + (i = 8 + (o = 48 + n | 0) | 0) >> 2],
                                        F[(u = 8 + a | 0) >> 2] = F[i >> 2],
                                        F[u + 4 >> 2] = c,
                                        u = F[4 + o >> 2],
                                        F[a >> 2] = F[o >> 2],
                                        F[4 + a >> 2] = u,
                                        function(e, t) {
                                            var n, r, o, a = 0;
                                            for (W = n = W + -64 | 0, o = F[4 + (a = e + 8 | 0) >> 2], F[(r = 24 + n | 0) >> 2] = F[a >> 2], F[4 + r >> 2] = o, a = F[e + 4 >> 2], F[16 + n >> 2] = F[e >> 2], F[20 + n >> 2] = a, e = 56 + n | 0;
                                                (0 | (a = F[24 + n >> 2])) != F[28 + n >> 2];) F[24 + n >> 2] = a + 1, a = L[0 | a], F[52 + n >> 2] = F[1049140 + ((15 & a) << 2) >> 2], F[48 + n >> 2] = F[1049140 + (a >>> 2 & 60) >> 2], re(32 + n | 0, 48 + n | 0, e), F[e >> 2] = F[40 + n >> 2], a = F[36 + n >> 2], F[48 + n >> 2] = F[32 + n >> 2], F[52 + n >> 2] = a, _e(8 + n | 0, 48 + n | 0), Se(t, F[8 + n >> 2], F[12 + n >> 2]), be(48 + n | 0);
                                            Y(16 + n | 0), W = n + 64 | 0
                                        }(a, r),
                                        W = 16 + a | 0,
                                        F[e + 8 >> 2] = F[t >> 2],
                                        t = F[36 + n >> 2],
                                        F[e >> 2] = F[32 + n >> 2],
                                        F[e + 4 >> 2] = t
                                    }
                                    W = n + 64 | 0
                                }(o, 32 + i | 0), W = 48 + i | 0) : F[e >> 2] = 0, W = 176 + n | 0
                            }

                            function U(e, t, n) {
                                var r, o, a, i, c, u, s, l, f, d, p, h, v, g, b, y, m, w, _, k, S, I, O, A, C, j, P, M, T, x, E, D, R, B;
                                if (W = r = W - 96 | 0, 64 == (0 | (F[4 + r >> 2] = n))) return pe(32 + r | 0, 64),
                                    function(e, t) { for (var n = 0, r = 0, r = 16; r;) n = L[0 | t] | L[t + 1 | 0] << 8 | L[t + 2 | 0] << 16 | L[t + 3 | 0] << 24, F[e >> 2] = n << 24 | n << 8 & 16711680 | n >>> 8 & 65280 | n >>> 24, r = r + -1 | 0, t = t + 4 | 0, e = e + 4 | 0 }(32 + r | 0, t), o = e, W = i = W + -64 | (T = M = P = j = C = A = O = I = S = k = _ = w = m = y = b = g = v = h = p = d = f = l = s = u = c = 0), v = F[(a = 32 + r | 0) >> 2], f = F[a + 4 >> 2], d = F[a + 8 >> 2], p = F[a + 12 >> 2], m = F[o >> 2], g = F[o + 8 >> 2], h = F[o + 4 >> 2], F[44 + i >> 2] = F[o + 12 >> 2], F[36 + i >> 2] = h, F[40 + i >> 2] = g, F[32 + i >> 2] = m, F[60 + i >> 2] = p, F[56 + i >> 2] = d, F[52 + i >> 2] = f, F[48 + i >> 2] = v + F[o + 16 >> 2], V(i, 32 + i | 0, 48 + i | 0, 0), w = F[a + 16 >> 2], b = F[a + 20 >> 2], O = F[a + 24 >> 2], _ = F[a + 28 >> 2], s = F[4 + (h = 8 + i | 0) >> 2], F[(u = g = 40 + i | 0) >> 2] = F[h >> 2], F[u + 4 >> 2] = s, u = F[4 + i >> 2], F[32 + i >> 2] = F[i >> 2], F[36 + i >> 2] = u, F[60 + i >> 2] = _, F[56 + i >> 2] = O, F[52 + i >> 2] = b, T = Fe(m, 30) + w | 0, F[(M = i) + 48 >> 2] = T, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 0), l = F[16 + i >> 2], m = F[20 + i >> 2], u = F[24 + i >> 2], s = F[a + 32 >> 2], k = F[a + 36 >> 2], S = F[a + 40 >> 2], I = F[a + 44 >> 2], F[44 + i >> 2] = F[28 + i >> 2], F[36 + i >> 2] = m, F[40 + i >> 2] = u, F[32 + i >> 2] = l, F[60 + i >> 2] = I, F[56 + i >> 2] = S, F[52 + i >> 2] = k, T = Fe(F[(M = i) >> 2], 30) + s | 0, F[M + 48 >> 2] = T, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 0), y = F[4 + (u = m = 24 + i | 0) >> 2], A = F[u >> 2], F[h >> 2] = A, F[h + 4 >> 2] = y, c = F[20 + i >> 2], C = F[16 + i >> 2], F[i >> 2] = C, F[4 + i >> 2] = c, j = F[a + 48 >> 2], u = F[a + 52 >> 2], P = F[a + 56 >> 2], a = F[a + 60 >> 2], F[g >> 2] = A, F[g + 4 >> 2] = y, F[32 + i >> 2] = C, F[36 + i >> 2] = c, F[60 + i >> 2] = a, F[56 + i >> 2] = P, F[52 + i >> 2] = u, T = Fe(l, 30) + j | 0, F[(M = i) + 48 >> 2] = T, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 0), y = F[16 + i >> 2], l = F[20 + i >> 2], c = F[24 + i >> 2], F[44 + i >> 2] = F[28 + i >> 2], F[36 + i >> 2] = l, F[40 + i >> 2] = c, F[32 + i >> 2] = y, c = Fe(F[i >> 2], 30), v = Fe(u ^ s ^ v ^ d, 1), F[48 + i >> 2] = c + v, l = Fe(v ^ I ^ p ^ b, 1), F[60 + i >> 2] = l, d = Fe(a ^ S ^ d ^ w, 1), F[56 + i >> 2] = d, p = Fe(P ^ k ^ f ^ p, 1), F[52 + i >> 2] = p, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 0), f = F[m + 4 >> 2], A = F[m >> 2], F[h >> 2] = A, F[h + 4 >> 2] = f, c = F[20 + i >> 2], C = F[16 + i >> 2], F[i >> 2] = C, F[4 + i >> 2] = c, F[g >> 2] = A, F[g + 4 >> 2] = f, F[32 + i >> 2] = C, F[36 + i >> 2] = c, c = Fe(y, 30), w = Fe(p ^ j ^ w ^ O, 1), F[48 + i >> 2] = c + w, O = Fe(l ^ P ^ s ^ O, 1), F[56 + i >> 2] = O, f = Fe(w ^ a ^ _ ^ k, 1), F[60 + i >> 2] = f, b = Fe(d ^ u ^ b ^ _, 1), F[52 + i >> 2] = b, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 1), y = F[16 + i >> 2], _ = F[20 + i >> 2], c = F[24 + i >> 2], F[44 + i >> 2] = F[28 + i >> 2], F[36 + i >> 2] = _, F[40 + i >> 2] = c, F[32 + i >> 2] = y, c = Fe(F[i >> 2], 30), s = Fe(b ^ v ^ s ^ S, 1), F[48 + i >> 2] = c + s, S = Fe(f ^ d ^ S ^ j, 1), F[56 + i >> 2] = S, _ = Fe(s ^ l ^ u ^ I, 1), F[60 + i >> 2] = _, k = Fe(O ^ p ^ I ^ k, 1), F[52 + i >> 2] = k, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 1), I = F[m + 4 >> 2], A = F[m >> 2], F[h >> 2] = A, F[h + 4 >> 2] = I, c = F[20 + i >> 2], C = F[16 + i >> 2], F[i >> 2] = C, F[4 + i >> 2] = c, F[g >> 2] = A, F[g + 4 >> 2] = I, F[32 + i >> 2] = C, F[36 + i >> 2] = c, c = Fe(y, 30), I = Fe(k ^ w ^ P ^ j, 1), F[48 + i >> 2] = c + I, P = Fe(_ ^ O ^ v ^ P, 1), F[56 + i >> 2] = P, j = Fe(I ^ f ^ a ^ p, 1), F[60 + i >> 2] = j, a = Fe(S ^ b ^ a ^ u, 1), F[52 + i >> 2] = a, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 1), y = F[16 + i >> 2], u = F[20 + i >> 2], c = F[24 + i >> 2], F[44 + i >> 2] = F[28 + i >> 2], F[36 + i >> 2] = u, F[40 + i >> 2] = c, F[32 + i >> 2] = y, c = Fe(F[i >> 2], 30), u = Fe(a ^ s ^ v ^ d, 1), F[48 + i >> 2] = c + u, v = Fe(u ^ _ ^ l ^ b, 1), F[60 + i >> 2] = v, d = Fe(j ^ S ^ d ^ w, 1), F[56 + i >> 2] = d, l = Fe(P ^ k ^ l ^ p, 1), F[52 + i >> 2] = l, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 1), p = F[m + 4 >> 2], A = F[m >> 2], F[h >> 2] = A, F[h + 4 >> 2] = p, c = F[20 + i >> 2], C = F[16 + i >> 2], F[i >> 2] = C, F[4 + i >> 2] = c, F[g >> 2] = A, F[g + 4 >> 2] = p, F[32 + i >> 2] = C, F[36 + i >> 2] = c, c = Fe(y, 30), p = Fe(l ^ I ^ w ^ O, 1), F[48 + i >> 2] = c + p, w = Fe(v ^ P ^ s ^ O, 1), F[56 + i >> 2] = w, O = Fe(p ^ j ^ f ^ k, 1), F[60 + i >> 2] = O, f = Fe(d ^ a ^ f ^ b, 1), F[52 + i >> 2] = f, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 1), y = F[16 + i >> 2], b = F[20 + i >> 2], c = F[24 + i >> 2], F[44 + i >> 2] = F[28 + i >> 2], F[36 + i >> 2] = b, F[40 + i >> 2] = c, F[32 + i >> 2] = y, c = Fe(F[i >> 2], 30), s = Fe(f ^ u ^ s ^ S, 1), F[48 + i >> 2] = c + s, S = Fe(O ^ d ^ I ^ S, 1), F[56 + i >> 2] = S, b = Fe(s ^ v ^ a ^ _, 1), F[60 + i >> 2] = b, k = Fe(w ^ l ^ _ ^ k, 1), F[52 + i >> 2] = k, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 2), _ = F[m + 4 >> 2], A = F[m >> 2], F[h >> 2] = A, F[h + 4 >> 2] = _, c = F[20 + i >> 2], C = F[16 + i >> 2], F[i >> 2] = C, F[4 + i >> 2] = c, F[g >> 2] = A, F[g + 4 >> 2] = _, F[32 + i >> 2] = C, F[36 + i >> 2] = c, c = Fe(y, 30), I = Fe(k ^ p ^ P ^ I, 1), F[48 + i >> 2] = c + I, P = Fe(b ^ w ^ u ^ P, 1), F[56 + i >> 2] = P, _ = Fe(I ^ O ^ l ^ j, 1), F[60 + i >> 2] = _, a = Fe(S ^ f ^ a ^ j, 1), F[52 + i >> 2] = a, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 2), y = F[16 + i >> 2], j = F[20 + i >> 2], c = F[24 + i >> 2], F[44 + i >> 2] = F[28 + i >> 2], F[36 + i >> 2] = j, F[40 + i >> 2] = c, F[32 + i >> 2] = y, c = Fe(F[i >> 2], 30), u = Fe(a ^ s ^ u ^ d, 1), F[48 + i >> 2] = c + u, j = Fe(u ^ b ^ f ^ v, 1), F[60 + i >> 2] = j, d = Fe(_ ^ S ^ p ^ d, 1), F[56 + i >> 2] = d, v = Fe(P ^ k ^ l ^ v, 1), F[52 + i >> 2] = v, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 2), l = F[m + 4 >> 2], A = F[m >> 2], F[h >> 2] = A, F[h + 4 >> 2] = l, c = F[20 + i >> 2], C = F[16 + i >> 2], F[i >> 2] = C, F[4 + i >> 2] = c, F[g >> 2] = A, F[g + 4 >> 2] = l, F[32 + i >> 2] = C, F[36 + i >> 2] = c, c = Fe(y, 30), l = Fe(v ^ I ^ p ^ w, 1), F[48 + i >> 2] = c + l, p = Fe(j ^ P ^ s ^ w, 1), F[56 + i >> 2] = p, w = Fe(l ^ _ ^ O ^ k, 1), F[60 + i >> 2] = w, O = Fe(d ^ a ^ f ^ O, 1), F[52 + i >> 2] = O, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 2), y = F[16 + i >> 2], f = F[20 + i >> 2], c = F[24 + i >> 2], F[44 + i >> 2] = F[28 + i >> 2], F[36 + i >> 2] = f, F[40 + i >> 2] = c, F[32 + i >> 2] = y, c = Fe(F[i >> 2], 30), s = Fe(O ^ u ^ s ^ S, 1), F[48 + i >> 2] = c + s, S = Fe(w ^ d ^ I ^ S, 1), F[56 + i >> 2] = S, f = Fe(s ^ j ^ a ^ b, 1), F[60 + i >> 2] = f, k = Fe(p ^ v ^ b ^ k, 1), F[52 + i >> 2] = k, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 2), b = F[m + 4 >> 2], A = F[m >> 2], F[h >> 2] = A, F[h + 4 >> 2] = b, c = F[20 + i >> 2], C = F[16 + i >> 2], F[i >> 2] = C, F[4 + i >> 2] = c, F[g >> 2] = A, F[g + 4 >> 2] = b, F[32 + i >> 2] = C, F[36 + i >> 2] = c, c = Fe(y, 30), I = Fe(k ^ l ^ P ^ I, 1), F[48 + i >> 2] = c + I, P = Fe(f ^ p ^ u ^ P, 1), F[56 + i >> 2] = P, b = Fe(I ^ w ^ v ^ _, 1), F[60 + i >> 2] = b, a = Fe(S ^ O ^ a ^ _, 1), F[52 + i >> 2] = a, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 3), _ = F[16 + i >> 2], y = F[20 + i >> 2], c = F[24 + i >> 2], F[44 + i >> 2] = F[28 + i >> 2], F[36 + i >> 2] = y, F[40 + i >> 2] = c, F[32 + i >> 2] = _, c = Fe(F[i >> 2], 30), u = Fe(a ^ s ^ u ^ d, 1), F[48 + i >> 2] = c + u, y = Fe(u ^ f ^ O ^ j, 1), F[60 + i >> 2] = y, d = Fe(b ^ S ^ l ^ d, 1), F[56 + i >> 2] = d, j = Fe(P ^ k ^ v ^ j, 1), F[52 + i >> 2] = j, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 3), v = F[m + 4 >> 2], A = F[m >> 2], F[h >> 2] = A, F[h + 4 >> 2] = v, c = F[20 + i >> 2], C = F[16 + i >> 2], F[i >> 2] = C, F[4 + i >> 2] = c, F[g >> 2] = A, F[g + 4 >> 2] = v, F[32 + i >> 2] = C, F[36 + i >> 2] = c, c = Fe(_, 30), v = Fe(j ^ I ^ l ^ p, 1), F[48 + i >> 2] = c + v, l = Fe(y ^ P ^ s ^ p, 1), F[56 + i >> 2] = l, p = Fe(v ^ b ^ w ^ k, 1), F[60 + i >> 2] = p, w = Fe(d ^ a ^ w ^ O, 1), F[52 + i >> 2] = w, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 3), O = F[16 + i >> 2], _ = F[20 + i >> 2], c = F[24 + i >> 2], F[44 + i >> 2] = F[28 + i >> 2], F[36 + i >> 2] = _, F[40 + i >> 2] = c, F[32 + i >> 2] = O, c = Fe(F[i >> 2], 30), s = Fe(w ^ u ^ s ^ S, 1), F[48 + i >> 2] = c + s, S = Fe(p ^ d ^ I ^ S, 1), F[56 + i >> 2] = S, d = Fe(s ^ y ^ a ^ f, 1), F[60 + i >> 2] = d, k = Fe(l ^ j ^ f ^ k, 1), F[52 + i >> 2] = k, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 3), s = F[m + 4 >> 2], m = F[m >> 2], F[h >> 2] = m, F[h + 4 >> 2] = s, h = F[20 + i >> 2], f = F[16 + i >> 2], F[i >> 2] = f, F[4 + i >> 2] = h, F[g >> 2] = m, F[g + 4 >> 2] = s, F[32 + i >> 2] = f, F[36 + i >> 2] = h, g = Fe(k ^ v ^ P ^ I, 1), T = Fe(g ^ p ^ b ^ j, 1), F[(M = i) + 60 >> 2] = T, T = Fe(d ^ l ^ u ^ P, 1), F[(M = i) + 56 >> 2] = T, T = Fe(S ^ w ^ a ^ b, 1), F[(M = i) + 52 >> 2] = T, T = Fe(O, 30) + g | 0, F[(M = i) + 48 >> 2] = T, V(16 + i | 0, 32 + i | 0, 48 + i | 0, 3), a = F[28 + i >> 2], g = F[24 + i >> 2], h = F[20 + i >> 2], F[o >> 2] = F[o >> 2] + F[16 + i >> 2], F[o + 4 >> 2] = h + F[o + 4 >> 2], F[o + 8 >> 2] = g + F[o + 8 >> 2], F[o + 12 >> 2] = a + F[o + 12 >> 2], T = F[(M = o) + 16 >> 2] + Fe(F[i >> 2], 30) | 0, F[M + 16 >> 2] = T, W = i + 64 | 0, W = 96 + r | 0, 0;
                                F[20 + r >> 2] = 1, F[52 + r >> 2] = 2, F[36 + r >> 2] = 3, F[40 + r >> 2] = 0, F[32 + r >> 2] = 1049776, F[12 + r >> 2] = 1, F[24 + r >> 2] = 4 + r, F[28 + r >> 2] = 1049712, F[48 + r >> 2] = 8 + r, F[16 + r >> 2] = 28 + r, F[8 + r >> 2] = 24 + r, x = 32 + r | 0, W = E = W - 48 | 0, ge(32 + E | 0, F[262450], F[262451], F[262452], F[262453]), B = F[4 + (D = 40 + E | 0) >> 2], F[(R = 20 + E | 0) >> 2] = F[D >> 2], F[4 + R >> 2] = B, F[8 + E >> 2] = x, F[4 + E >> 2] = 1049892, F[E >> 2] = 1, x = F[36 + E >> 2], F[12 + E >> 2] = F[32 + E >> 2], F[16 + E >> 2] = x, K(E), N(), N()
                            }

                            function G(e, t, n) {
                                var r = 0,
                                    o = 0,
                                    a = 0,
                                    i = 0,
                                    c = 0,
                                    u = (((o = F[t + 12 >> 2]) ^ (r = F[t + 8 >> 2]) ^ (a = F[t + 4 >> 2])) + Fe(t = F[t >> 2], 5) | 0) + F[n >> 2] | 0,
                                    s = Fe(u, 30);
                                F[e + 12 >> 2] = s, o = ((o + (r ^ (a = Fe(a, 30)) ^ t) | 0) + F[n + 4 >> 2] | 0) + Fe(u, 5) | 0, c = Fe(o, 30), F[(i = e) + 8 >> 2] = c, r = ((r = r + F[n + 8 >> 2] | 0) + ((t = Fe(t, 30)) ^ a ^ u) | 0) + Fe(o, 5) | 0, F[e + 4 >> 2] = r, i = e, c = ((a + F[n + 12 >> 2] | 0) + (o ^ t ^ s) | 0) + Fe(r, 5) | 0, F[i >> 2] = c
                            }

                            function q(e, t) {
                                var n = 0,
                                    r = 0;
                                e: {
                                    t: {
                                        if ((n = F[e + 4 >> 2]) - (r = F[e + 8 >> 2]) >>> 0 < t >>> 0) {
                                            if ((t = t + r | 0) >>> 0 < r >>> 0) break e;
                                            if ((0 | (t = (r = n << 1) >>> 0 > t >>> 0 ? r : t)) < 0) break e;
                                            if (!(n = n ? we(F[e >> 2], n, 1, t) : Ie(t, 1))) break t;
                                            F[e + 4 >> 2] = t, F[e >> 2] = n
                                        }
                                        return
                                    }
                                    Pe(t, 1),
                                    N()
                                }
                                Te(), N()
                            }

                            function H(e, t, n, r) {
                                var o;
                                W = o = W + -64 | 0, F[12 + o >> 2] = t, F[8 + o >> 2] = e, F[20 + o >> 2] = r, F[16 + o >> 2] = n, F[44 + o >> 2] = 2, F[60 + o >> 2] = 43, F[28 + o >> 2] = 2, F[32 + o >> 2] = 0, F[24 + o >> 2] = 1050524, F[52 + o >> 2] = 42, F[40 + o >> 2] = 48 + o, F[56 + o >> 2] = 16 + o, F[48 + o >> 2] = 8 + o, ae(24 + o | 0, 1050564), N()
                            }

                            function K(e) {
                                var t, n, r, o, a = 0,
                                    i = 0;
                                W = t = W - 48 | 0, n = ke(e + 12 | 0), r = ke(F[e + 8 >> 2]), i = F[n + 4 >> 2], F[(a = 8 + t | 0) >> 2] = F[n >> 2], F[a + 4 >> 2] = i, i = F[12 + t >> 2], a = F[8 + t >> 2], o = F[n + 8 >> 2], F[28 + t >> 2] = F[n + 12 >> 2], F[24 + t >> 2] = o, F[16 + t >> 2] = a, F[20 + t >> 2] = i, F[36 + t >> 2] = 0, F[32 + t >> 2] = r, R(32 + t | 0, 1050008, F[e + 8 >> 2], 16 + t | 0), N()
                            }

                            function z(e, t, n) {
                                var r;
                                W = r = W - 48 | 0, F[4 + r >> 2] = n, F[r >> 2] = t, F[28 + r >> 2] = 2, F[44 + r >> 2] = 40, F[12 + r >> 2] = 2, F[16 + r >> 2] = 0, F[8 + r >> 2] = 1050392, F[36 + r >> 2] = 40, F[24 + r >> 2] = 32 + r, F[40 + r >> 2] = r, F[32 + r >> 2] = 4 + r, ae(8 + r | 0, e), N()
                            }

                            function J(e, t) {
                                var n;
                                W = n = W - 48 | 0, F[4 + n >> 2] = t, F[n >> 2] = e, F[28 + n >> 2] = 2, F[44 + n >> 2] = 40, F[12 + n >> 2] = 2, F[16 + n >> 2] = 0, F[8 + n >> 2] = 1050644, F[36 + n >> 2] = 40, F[24 + n >> 2] = 32 + n, F[40 + n >> 2] = 4 + n, ae(8 + (F[32 + n >> 2] = n) | 0, 1050660), N()
                            }

                            function Q(e, t) {
                                var n;
                                W = n = W - 48 | 0, F[4 + n >> 2] = t, F[n >> 2] = e, F[28 + n >> 2] = 2, F[44 + n >> 2] = 40, F[12 + n >> 2] = 2, F[16 + n >> 2] = 0, F[8 + n >> 2] = 1050712, F[36 + n >> 2] = 40, F[24 + n >> 2] = 32 + n, F[40 + n >> 2] = 4 + n, ae(8 + (F[32 + n >> 2] = n) | 0, 1050728), N()
                            }

                            function X(e, t) {
                                var n, r;
                                if (W = n = W - 16 | 0, (r = F[e >> 2]) >>> 0 <= t >>> 0) return oe(8 + n | 0, e + 4 | 0, 64, r, t), pe(F[8 + n >> 2], F[12 + n >> 2]), F[e >> 2] = t, W = 16 + n | 0, 0;
                                he(1049568, 40, 1049552), N()
                            }

                            function Y(e) {
                                var t, n, r, o, a;
                                for (W = t = W - 32 | 0, F[24 + t >> 2] = e; n = 16 + t | 0, a = o = void 0, a = o = 0, r = F[(r = 24 + t | 0) >> 2], ((a = 0) | (o = F[r + 8 >> 2])) != F[r + 12 >> 2] && (F[r + 8 >> 2] = o + 1, r = L[0 | o], a = 1), o = a, T[n + 1 | 0] = r, T[0 | n] = o, 1 & T[16 + t | 0];);
                                Oe(8 + t | 0, F[e >> 2], F[e + 4 >> 2]), e = F[12 + t >> 2], F[24 + t >> 2] = F[8 + t >> 2], F[28 + t >> 2] = e, be(24 + t | 0), W = 32 + t | 0
                            }

                            function Z(e) {
                                var t, n, r, o, a, i;
                                W = t = W - 48 | 0, n = F[e + 8 >> 2], r = F[e + 12 >> 2], o = F[e + 16 >> 2], a = F[e + 20 >> 2], i = F[e >> 2], e = F[e + 4 >> 2], F[16 + t >> 2] = 4, F[20 + t >> 2] = 0, F[4 + t >> 2] = 1, F[8 + t >> 2] = 0, F[24 + t >> 2] = i, F[28 + t >> 2] = e, F[t >> 2] = 24 + t, F[40 + t >> 2] = o, F[44 + t >> 2] = a, F[32 + t >> 2] = n, F[36 + t >> 2] = r, ae(t, 32 + t | 0), N()
                            }

                            function $(e, t) {
                                var n;
                                if (W = n = W - 16 | 0, 64 == F[t >> 2]) return fe(8 + n | (F[t >> 2] = 0), t + 4 | 0, 64, 64), t = F[12 + n >> 2], F[e >> 2] = F[8 + n >> 2], F[e + 4 >> 2] = t, W = 16 + n | 0, 0;
                                he(1049608, 39, 1049552), N()
                            }

                            function ee(e, t, n, r) {
                                var o = 0;
                                if (1114112 == (0 | t) || (o = 1, !E[F[F[e + 28 >> 2] + 16 >> 2]](F[e + 24 >> 2], t))) {
                                    if (!n) return;
                                    o = 0 | E[F[F[e + 28 >> 2] + 12 >> 2]](F[e + 24 >> 2], n, r)
                                }
                                return o
                            }

                            function te(e, t, n) {
                                if (4 == (0 | t)) return t = n << 8 & 16711680 | n << 24 | n >>> 8 & 65280 | n >>> 24, T[0 | e] = t, T[e + 1 | 0] = t >>> 8, T[e + 2 | 0] = t >>> 16, T[e + 3 | 0] = t >>> 24, 0;
                                he(1049304, 32, 1049288), N()
                            }

                            function ne(e, t, n) {
                                var r, o = 0;
                                W = r = W - 16 | 0, o = (o = n) + (n = F[t >> 2]) | 0, oe(8 + r | 0, t + 4 | 0, 64, n, F[t >> 2] = o), t = F[12 + r >> 2], F[e >> 2] = F[8 + r >> 2], F[e + 4 >> 2] = t, W = 16 + r | 0
                            }

                            function re(e, t, n) {
                                var r;
                                W = r = W - 16 | 0, F[8 + r >> 2] = 0, F[r >> 2] = 1, F[4 + r >> 2] = 0, Ce(r, n - t >>> 2),
                                    function(e, t, n) {
                                        var r, o = 0;
                                        for (W = r = W - 16 | 0;
                                            (0 | e) != (0 | t);) o = e + 4 | 0, e = (128 <= (e = F[e >> 2]) >>> 0 ? Se(n, 12 + r | (F[12 + r >> 2] = 0), e = e >>> 0 <= 2047 ? (T[13 + r | 0] = 63 & e | 128, T[12 + r | 0] = e >>> 6 & 31 | 192, 2) : e >>> 0 <= 65535 ? (T[14 + r | 0] = 63 & e | 128, T[13 + r | 0] = e >>> 6 & 63 | 128, T[12 + r | 0] = e >>> 12 & 15 | 224, 3) : (T[15 + r | 0] = 63 & e | 128, T[12 + r | 0] = e >>> 18 | 240, T[14 + r | 0] = e >>> 6 & 63 | 128, T[13 + r | 0] = e >>> 12 & 63 | 128, 4)) : (F[8 + n >> 2] == F[4 + n >> 2] && Ce(n, 1), T[F[n >> 2] + F[8 + n >> 2] | 0] = e, F[8 + n >> 2] = F[8 + n >> 2] + 1), o);
                                        W = 16 + r | 0
                                    }(t, n, r), F[e + 8 >> 2] = F[8 + r >> 2], t = F[4 + r >> 2], F[e >> 2] = F[r >> 2], F[e + 4 >> 2] = t, W = 16 + r | 0
                            }

                            function oe(e, t, n, r, o) {
                                e: {
                                    if (r >>> 0 <= o >>> 0) { if (n >>> 0 < o >>> 0) break e; return F[e + 4 >> 2] = o - r, F[e >> 2] = t + r, 0 }
                                    Q(r, o),
                                    N()
                                }
                                J(o, n),
                                N()
                            }

                            function ae(e, t) {
                                var n, r, o, a, i;
                                W = n = W - 32 | 0, o = F[t >> 2], a = F[t + 4 >> 2], i = F[t + 12 >> 2], F[(r = 20 + n | 0) >> 2] = F[t + 8 >> 2], F[4 + r >> 2] = i, F[12 + n >> 2] = o, F[16 + n >> 2] = a, F[8 + n >> 2] = e, F[4 + n >> 2] = 1050324, F[n >> 2] = 1, K(n), N()
                            }

                            function ie(e) {
                                var t, n, r, o, a;
                                e |= 0, W = t = W - 16 | 0, r = t, W = o = W - 32 | (a = 0), F[4 + (a = 8 + o | 0) >> 2] = 0, F[a >> 2] = 1, F[24 + o >> 2] = 0, a = F[12 + o >> 2], F[16 + o >> 2] = F[8 + o >> 2], F[20 + o >> 2] = a, Se(16 + o | 0, 1049136, 0), F[8 + r >> 2] = F[24 + o >> 2], a = F[20 + o >> 2], F[r >> 2] = F[16 + o >> 2], F[4 + r >> 2] = a, W = 32 + o | 0, F[e >> 2] = 0, n = F[4 + t >> 2], F[e + 4 >> 2] = F[t >> 2], F[e + 8 >> 2] = n, F[e + 12 >> 2] = F[8 + t >> 2], W = 16 + t | 0
                            }

                            function ce(e, t, n, r, o) {
                                e: {
                                    if (t >>> 0 <= n >>> 0) {
                                        if (n >>> 0 <= o >>> 0) break e;
                                        J(n, o), N()
                                    }
                                    Q(t, n),
                                    N()
                                }
                                F[e + 4 >> 2] = n - t,
                                F[e >> 2] = t + r
                            }

                            function ue(e, t, n) {
                                var r;
                                W = r = W - 32 | 0, me(16 + r | 0, t, n, n), le(8 + r | 0, 16 + r | 0), t = F[12 + r >> 2], F[e >> 2] = F[8 + r >> 2], F[e + 4 >> 2] = t, W = 32 + r | 0
                            }

                            function se(e, t, n) {
                                var r = 0;
                                if (n)
                                    for (r = e; T[0 | r] = L[0 | t], r = r + 1 | 0, t = t + 1 | 0, n = n + -1 | 0;);
                                return e
                            }

                            function le(e, t) {
                                var n, r, o, a, i, c;
                                W = n = W - 16 | 0, (0 | (r = F[t + 8 >> 2])) != F[t + 4 >> 2] && function(e, t) {
                                    var n = 0;
                                    e: {
                                        t: {
                                            n: {
                                                if ((n = F[e + 4 >> 2]) >>> 0 >= t >>> 0) {
                                                    if (t) {
                                                        if ((0 | t) == (0 | n)) break e;
                                                        if (n = we(F[e >> 2], n, 1, t)) break n;
                                                        Pe(t, 1), N()
                                                    }
                                                    be(e), F[e >> 2] = 1, t = 0;
                                                    break t
                                                }
                                                Z(1048636),
                                                N()
                                            }
                                            F[e >> 2] = n
                                        }
                                        F[e + 4 >> 2] = t
                                    }
                                }(t, r), o = 8 + n | 0, a = F[t >> 2], i = F[t + 4 >> 2], W = c = W - 16 | 0, F[12 + c >> 2] = i, F[8 + c >> 2] = a, F[o >> 2] = F[8 + c >> 2], F[4 + o >> 2] = F[12 + c >> 2], W = 16 + c | 0, t = F[12 + n >> 2], F[e >> 2] = F[8 + n >> 2], F[e + 4 >> 2] = t, W = 16 + n | 0
                            }

                            function fe(e, t, n, r) {
                                var o;
                                W = o = W - 16 | 0, ce(8 + o | 0, 0, r, t, n), t = F[12 + o >> 2], F[e >> 2] = F[8 + o >> 2], F[e + 4 >> 2] = t, W = 16 + o | 0
                            }

                            function de(e, t, n) { var r; return t |= 0, n |= 0, q(e = F[(e |= 0) >> 2], n), r = F[e + 8 >> 2], F[e + 8 >> 2] = r + n, se(F[e >> 2] + r | 0, t, n), 0 }

                            function pe(e, t) {
                                if (t)
                                    for (; e = e + 1 | (T[0 | e] = 0), t = t + -1 | 0;);
                            }

                            function he(e, t, n) {
                                var r;
                                W = r = W - 16 | 0, F[12 + r >> 2] = t, F[8 + r >> 2] = e, R(8 + r | 0, 1049204, 0, n), N()
                            }

                            function ve(e, t, n, r) { t >>> 0 <= r >>> 0 ? se(n, e, t) : (he(1049416, 40, 1049400), N()) }

                            function ge(e, t, n, r, o) { F[e + 12 >> 2] = o, F[e + 8 >> 2] = r, F[e + 4 >> 2] = n, F[e >> 2] = t }

                            function be(e) { F[e + 4 >> 2] && O(F[e >> 2]) }

                            function ye(e) { F[4 + (e |= 0) >> 2] = 0, F[e + 8 >> 2] = 0, F[e >> 2] = 4, F[(e = e + 12 | 0) >> 2] = 0, F[e + 4 >> 2] = 0 }

                            function me(e, t, n, r) { F[e + 8 >> 2] = n, F[e + 4 >> 2] = r, F[e >> 2] = t }

                            function we(e, t, n, r) {
                                return function(e, t, n, r) {
                                    e: {
                                        if (8 < n >>> 0) { if (n = 8 < n >>> 0 ? j(n, r) : S(r)) break e; return 0 }
                                        return function(e, t) {
                                            var n = 0,
                                                r = 0,
                                                o = 0,
                                                a = 0,
                                                i = 0,
                                                c = 0,
                                                u = 0,
                                                s = 0,
                                                l = 0,
                                                f = 0;
                                            t: if (!(4294901708 < t >>> 0)) {
                                                n = t >>> 0 < 11 ? 16 : t + 11 & -8, r = -8 & (c = F[(i = e + -4 | 0) >> 2]);
                                                n: {
                                                    r: {
                                                        o: {
                                                            a: { i: { c: { if (3 & c) { if (a = r + (u = e + -8 | 0) | 0, n >>> 0 <= r >>> 0) break c; if ((0 | a) == F[262874]) break i; if ((0 | a) == F[262873]) break a; if (2 & (c = F[a + 4 >> 2])) break n; if ((r = r + (s = -8 & c) | 0) >>> 0 >= n >>> 0) break o; break n } if (n >>> 0 < 256 | r >>> 0 < (4 | n) >>> 0 | 131073 <= r - n >>> 0) break n; break r } if ((t = r - n | 0) >>> 0 < 16) break r;F[i >> 2] = n | 1 & c | 2, F[4 + (o = n + u | 0) >> 2] = 3 | t, F[a + 4 >> 2] = 1 | F[a + 4 >> 2], C(o, t); break r } if ((r = r + F[262872] | 0) >>> 0 <= n >>> 0) break n;F[i >> 2] = n | 1 & c | 2, o = r - n | 0, F[4 + (t = n + u | 0) >> 2] = 1 | o, F[262872] = o, F[262874] = t; break r }
                                                            if ((r = r + F[262871] | 0) >>> 0 < n >>> 0) break n;
                                                            (t = r - n | 0) >>> 0 <= 15 ? (F[i >> 2] = r | 1 & c | 2, F[4 + (t = r + u | 0) >> 2] = 1 | F[t + 4 >> 2], t = 0) : (F[i >> 2] = n | 1 & c | 2, F[4 + (o = n + u | 0) >> 2] = 1 | t, F[(n = r + u | 0) >> 2] = t, F[n + 4 >> 2] = -2 & F[n + 4 >> 2]),
                                                            F[262873] = o,
                                                            F[262871] = t;
                                                            break r
                                                        }
                                                        t = r - n | 0,
                                                        256 <= s >>> 0 ? M(a) : (0 | (o = F[a + 12 >> 2])) == (0 | (a = F[a + 8 >> 2])) ? (l = 1051084, f = F[262771] & Fe(-2, c >>> 3), F[l >> 2] = f) : (F[a + 12 >> 2] = o, F[o + 8 >> 2] = a),
                                                        16 <= t >>> 0 ? (F[i >> 2] = n | 1 & F[i >> 2] | 2, F[4 + (o = n + u | 0) >> 2] = 3 | t, F[4 + (n = r + u | 0) >> 2] = 1 | F[n + 4 >> 2], C(o, t)) : (F[i >> 2] = r | 1 & F[i >> 2] | 2, F[4 + (t = r + u | 0) >> 2] = 1 | F[t + 4 >> 2])
                                                    }
                                                    o = e;
                                                    break t
                                                }
                                                if (n = S(t)) return t = se(n, e, (o = (-8 & (o = F[i >> 2])) - (3 & o ? 4 : 8) | 0) >>> 0 > t >>> 0 ? t : o), O(e), t
                                            }
                                            return o
                                        }(e, r)
                                    }
                                    return t = se(n, e, r >>> 0 < t >>> 0 ? r : t),
                                    O(e),
                                    t
                                }(e, t, n, r)
                            }

                            function _e(e, t) { F[e + 4 >> 2] = F[t + 8 >> 2], F[e >> 2] = F[t >> 2] }

                            function ke(e) { return e || (Z(1049972), N()), e }

                            function Se(e, t, n) {
                                var r, o, a, i, c, u, s, l, f, d;
                                W = i = W - 16 | 0, Ce(r = e, a = (a = (o = t) + n | 0) - o | 0), c = F[r + 8 >> 2], F[r + 8 >> 2] = a + c, _e(8 + i | 0, r), u = F[8 + i >> 2] + c | 0, s = F[12 + i >> 2] - c | 0, l = o, f = a, W = d = W - 112 | 0, (0 | (F[24 + d >> 2] = s)) == (0 | (F[28 + d >> 2] = f)) ? (se(u, l, s), W = 112 + d | 0) : (F[80 + d >> 2] = 24 + d, F[84 + d >> 2] = 28 + d, F[104 + d >> 2] = 4, F[108 + d >> 2] = 0, F[92 + d >> 2] = 1, F[96 + d >> 2] = 0, F[88 + d >> 2] = 1048948, Oe(16 + d | 0, 80 + d | 0, 1), u = F[20 + d >> 2], s = F[16 + d >> 2], Oe(8 + d | 0, 84 + d | 0, 1), F[76 + d >> 2] = 2, F[52 + d >> 2] = 3, F[56 + d >> 2] = s, F[60 + d >> 2] = u, F[36 + d >> 2] = 3, F[40 + d >> 2] = 0, F[32 + d >> 2] = 1048872, u = F[12 + d >> 2], F[64 + d >> 2] = F[8 + d >> 2], F[68 + d >> 2] = u, F[72 + d >> 2] = 88 + d, F[48 + d >> 2] = 56 + d, ae(32 + d | 0, 1048956), N()), W = 16 + i | 0
                            }

                            function Ie(e, t) { return 8 < t >>> 0 ? j(t, e) : S(e) }

                            function Oe(e, t, n) { F[e + 4 >> 2] = n, F[e >> 2] = t }

                            function Ae(e, t, n) { U(F[F[e >> 2] >> 2], t, n) }

                            function Ce(h, v) {
                                ! function(e) {
                                    var t, n, r, o, a, i, c, u, s, l, f, d, p;
                                    W = t = W - 16 | 0, n = t, o = e, a = v, W = i = W - 48 | (p = 0), F[(r = h) + 4 >> 2] - o >>> 0 >= a >>> 0 || (u = r, W = f = W - 16 | 0, d = c = 32 + i | 0, u = (l = (s = o) + (l = a) | 0) >>> 0 < s >>> 0 ? (Oe(8 + f | 0, l, 0), s = F[8 + f >> 2], F[8 + c >> 2] = F[12 + f >> 2], 1) : (s = l >>> 0 < (u = F[u + 4 >> 2] << 1) >>> 0 ? u : l, 0), F[d >> 2] = u, F[4 + c >> 2] = s, W = 16 + f | 0, p = 1, o = F[36 + i >> 2], 1 != F[32 + i >> 2] ? (0 | o) <= -1 ? (Oe(8 + i | 0, i, 0), r = F[12 + i >> 2], F[n + 4 >> 2] = F[8 + i >> 2], F[n + 8 >> 2] = r) : (a = 16 + i | 0, p = F[r + 4 >> 2], F[a >> 2] = p, F[a + 4 >> 2] = 0 != (0 | p), (a = (a = F[20 + i >> 2]) ? we(F[r >> 2], F[16 + i >> 2], a, o) : Ie(o, 1)) || (Pe(o, 1), N()), F[r + 4 >> 2] = o, F[r >> 2] = a, p = 0) : (Oe(i, o, F[40 + i >> 2]), r = F[4 + i >> 2], F[n + 4 >> 2] = F[i >> 2], F[n + 8 >> 2] = r)), F[n >> 2] = p, W = 48 + i | 0;
                                    e: {
                                        if (1 == F[t >> 2]) {
                                            if (!F[8 + t >> 2]) break e;
                                            Z(1048700), N()
                                        }
                                        return W = 16 + t | 0
                                    }
                                    Te(), N()
                                }(F[h + 8 >> 2])
                            }

                            function je(e, t) {
                                return t |= 0, 0 | function(e, t) {
                                    var n, r, o, a, i, c, u = 0,
                                        s = 0,
                                        l = 0,
                                        f = 0,
                                        d = 0,
                                        p = 0,
                                        h = 0,
                                        v = 0,
                                        g = 0;
                                    if (W = n = W - 48 | 0, s = 39, e >>> 0 < 1e4) u = e;
                                    else
                                        for (; u = function(e, t) {
                                                var n = 0,
                                                    r = 0,
                                                    o = 0,
                                                    a = 0,
                                                    i = 0,
                                                    c = 0,
                                                    u = 0;
                                                if (!t) return Re((t = e) - b(e = (e >>> 0) / 1e4 | 0, 1e4) | 0, 0), x = 0, e;
                                                if (o = 0 - (i = 51 - y(t) | 0) | 0, n = 31 & (r = 63 & i), a = 32 <= r >>> 0 ? (r = 0, t >>> n) : (r = t >>> n, ((1 << n) - 1 & t) << 32 - n | e >>> n), n = 31 & (o &= 63), 32 <= o >>> 0 ? (t = e << n, e = 0) : (t = (1 << n) - 1 & e >>> 32 - n | t << n, e <<= n), i)
                                                    for (; o = r << 1 | a >>> 31, a = (r = a << 1 | t >>> 31) - (n = 1e4 & (c = (a = 0 - (o + (9999 < r >>> 0) | 0) | 0) >> 31)) | 0, r = o - (r >>> 0 < n >>> 0) | 0, t = t << 1 | e >>> 31, e = u | e << 1, u = c &= 1, i = i + -1 | 0;);
                                                return Re(a, r), x = t << 1 | e >>> 31, c | e << 1
                                            }(e, f), g = l = x, h = (d = (9 + n | 0) + s | 0) - 4 | 0, l = e - (o = l, c = i = a = void 0, i = 0, a = b(i = (r = u) >>> 16, c = 0), r = 65535 & (c = (c = b(i, 1e4)) + ((i = b(65535 & r, 1e4)) >>> 16) | 0), x = ((a + b(o, 1e4) | 0) + (c >>> 16) | 0) + (r >>> 16) | 0, 65535 & i | r << 16) | 0, p = L[0 | (p = 1050746 + ((v = ((65535 & l) >>> 0) / 100 | 0) << 1) | 0)] | L[p + 1 | 0] << 8, T[0 | h] = p, T[h + 1 | 0] = p >>> 8, d = d + -2 | 0, l = 1050746 + ((l - b(v, 100) & 65535) << 1) | 0, l = L[0 | l] | L[l + 1 | 0] << 8, T[0 | d] = l, T[d + 1 | 0] = l >>> 8, s = s + -4 | 0, l = !f & 99999999 < e >>> 0 | 0 < f >>> 0, e = u, f = g, l;);
                                    return 99 < (0 | u) && (f = (s = s + -2 | 0) + (9 + n | 0) | 0, e = 1050746 + (((e = u) - b(u = ((65535 & e) >>> 0) / 100 | 0, 100) & 65535) << 1) | 0, e = L[0 | e] | L[e + 1 | 0] << 8, T[0 | f] = e, T[f + 1 | 0] = e >>> 8), 10 <= (0 | u) ? (e = (s = s + -2 | 0) + (9 + n | 0) | 0, u = L[0 | (u = 1050746 + (u << 1) | 0)] | L[u + 1 | 0] << 8, T[0 | e] = u, T[e + 1 | 0] = u >>> 8) : T[(s = s + -1 | 0) + (9 + n | 0) | 0] = u + 48, e = A(t, 1050299, 0, (9 + n | 0) + s | 0, 39 - s | 0), W = 48 + n | 0, e
                                }(F[(e |= 0) >> 2], t)
                            }

                            function Pe(e, t) {
                                var n = e;
                                e = F[262767], E[e || 22](n, t), N()
                            }

                            function Me(e, t, n) { return I(n, e, t) }

                            function Te() { Z(1050224), N() }

                            function xe(e) { return x = 1468863706, -1546811115 }

                            function Ee(e) {}

                            function De() {}

                            function Re(e, t) {
                                var n = 0 | e,
                                    r = 0 | t;
                                o[0] = n, o[1] = r
                            }

                            function Be(e) { return e ? 31 - y(e + -1 ^ e) | 0 : 32 }

                            function Fe(e, t) { var n = 0; return (-1 >>> (n = 31 & t) & e) << n | ((n = e) & -1 << (e = 0 - t & 31)) >>> e }

                            function Le(e) {
                                e |= 0;
                                var t, n, r = 0 | l.byteLength / 65536,
                                    o = r + e | 0;
                                return r < o && o < 65536 && (t = new ArrayBuffer(b(o, 65536)), (n = new u.Int8Array(t)).set(T), T = n, T = new u.Int8Array(t), new u.Int16Array(t), F = new u.Int32Array(t), L = new u.Uint8Array(t), new u.Uint16Array(t), p = new u.Uint32Array(t), new u.Float32Array(t), new u.Float64Array(t), l = t), r
                            }
                        }, function(e, t, n) {
                            "use strict";

                            function r() {}

                            function o() {}
                            n.r(t), r.prototype.encode = function(e) {
                                for (var t = [], n = e.length, r = 0; r < n;) {
                                    var o = e.codePointAt(r),
                                        a = 0,
                                        i = 0;
                                    for (o <= 127 ? i = a = 0 : o <= 2047 ? (a = 6, i = 192) : o <= 65535 ? (a = 12, i = 224) : o <= 2097151 && (a = 18, i = 240), t.push(i | o >> a), a -= 6; 0 <= a;) t.push(128 | o >> a & 63), a -= 6;
                                    r += 65536 <= o ? 2 : 1
                                }
                                return t
                            }, o.prototype.decode = function(e) {
                                if (void 0 === e) return "";
                                for (var t = "", n = 0; n < e.length;) {
                                    var r = e[n],
                                        o = 0,
                                        a = 0;
                                    if (r <= 127 ? (o = 0, a = 255 & r) : r <= 223 ? (o = 1, a = 31 & r) : r <= 239 ? (o = 2, a = 15 & r) : r <= 244 && (o = 3, a = 7 & r), 0 < e.length - n - o)
                                        for (var i = 0; i < o;) a = a << 6 | 63 & (r = e[n + i + 1]), i += 1;
                                    else a = 65533, o = e.length - n;
                                    t += String.fromCodePoint(a), n += o + 1
                                }
                                return t
                            }, n.d(t, "sha1", function() { return p }), n.d(t, "setSalt", function() { return h }), n.d(t, "main", function() { return v }), n.d(t, "memory", function() { return b });
                            var c = 0,
                                a = new r,
                                u = "function" == typeof a.encodeInto ? function(e, t) { return a.encodeInto(e, t) } : function(e, t) { var n = a.encode(e); return t.set(n), { read: e.length, written: n.length } },
                                i = null;

                            function s() { return null !== i && i.buffer === g.memory.buffer || (i = new Uint8Array(g.memory.buffer)), i }

                            function l(e) {
                                for (var t, n = e.length, r = g.__wbindgen_malloc(n), o = s(), a = 0; a < n; a++) {
                                    var i = e.charCodeAt(a);
                                    if (127 < i) break;
                                    o[r + a] = i
                                }
                                return a !== n && (0 !== a && (e = e.slice(a)), r = g.__wbindgen_realloc(r, n, n = a + 3 * e.length), t = s().subarray(r + a, r + n), a += u(e, t).written), c = a, r
                            }
                            var f = null,
                                d = new o;

                            function p(e) {
                                g.sha1(8, l(e), c);
                                var t, n, r = (null !== f && f.buffer === g.memory.buffer || (f = new Int32Array(g.memory.buffer)), f),
                                    o = (t = r[2], n = r[3], d.decode(s().subarray(t, t + n)).slice());
                                return g.__wbindgen_free(r[2], +r[3]), o
                            }

                            function h(e) { g.setSalt(l(e), c) }

                            function v() { g.main() }
                            d.decode();
                            var g = n(0),
                                b = g.memory;
                            g.__wbindgen_start()
                        }], i.c = a, i.d = function(e, t, n) { i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, i.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.t = function(t, e) {
                            if (1 & e && (t = i(t)), 8 & e) return t;
                            if (4 & e && "object" == Object(c.default)(t) && t && t.__esModule) return t;
                            var n = Object.create(null);
                            if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                                for (var r in t) i.d(n, r, function(e) { return t[e] }.bind(null, r));
                            return n
                        }, i.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return i.d(t, "a", t), t }, i.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, i.p = "", i(i.s = 1);

                        function i(e) { if (a[e]) return a[e].exports; var t = a[e] = { i: e, l: !1, exports: {} }; return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports }
                    }
                }.call(this, n(3).Buffer)
        }, function(e, x, E) {
            (function(e) {
                var c = E(5),
                    a = E(6),
                    i = E(7);

                function n() { return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

                function u(e, t) { if (n() < t) throw new RangeError("Invalid typed array length"); return f.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = f.prototype : (null === e && (e = new f(t)), e.length = t), e }

                function f(e, t, n) { if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f)) return new f(e, t, n); if ("number" != typeof e) return r(this, e, t, n); if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string"); return o(this, e) }

                function r(e, t, n, r) {
                    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
                        if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                        if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                        t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                        f.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = f.prototype : e = l(e, t);
                        return e
                    }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
                        "string" == typeof n && "" !== n || (n = "utf8");
                        if (!f.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                        var r = 0 | p(t, n),
                            o = (e = u(e, r)).write(t, n);
                        o !== r && (e = e.slice(0, o));
                        return e
                    }(e, t, n) : function(e, t) { if (f.isBuffer(t)) { var n = 0 | d(t.length); return 0 === (e = u(e, n)).length ? e : (t.copy(e, 0, 0, n), e) } if (t) { if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function(e) { return e != e }(t.length) ? u(e, 0) : l(e, t); if ("Buffer" === t.type && i(t.data)) return l(e, t.data) } throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }(e, t)
                }

                function s(e) { if ("number" != typeof e) throw new TypeError('"size" argument must be a number'); if (e < 0) throw new RangeError('"size" argument must not be negative') }

                function o(e, t) {
                    if (s(t), e = u(e, t < 0 ? 0 : 0 | d(t)), !f.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; n < t; ++n) e[n] = 0;
                    return e
                }

                function l(e, t) {
                    var n = t.length < 0 ? 0 : 0 | d(t.length);
                    e = u(e, n);
                    for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
                    return e
                }

                function d(e) { if (e >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes"); return 0 | e }

                function p(e, t) {
                    if (f.isBuffer(e)) return e.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                    "string" != typeof e && (e = "" + e);
                    var n = e.length;
                    if (0 === n) return 0;
                    for (var r = !1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return P(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return M(e).length;
                        default:
                            if (r) return P(e).length;
                            t = ("" + t).toLowerCase(), r = !0
                    }
                }

                function t(e, t, n) {
                    var r, o, a, i = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (t >>>= 0)) return "";
                    for (e = e || "utf8";;) switch (e) {
                        case "hex":
                            return function(e, t, n) {
                                var r = e.length;
                                (!t || t < 0) && (t = 0);
                                (!n || n < 0 || r < n) && (n = r);
                                for (var o = "", a = t; a < n; ++a) o += function(e) { return e < 16 ? "0" + e.toString(16) : e.toString(16) }(e[a]);
                                return o
                            }(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return m(this, t, n);
                        case "ascii":
                            return function(e, t, n) {
                                var r = "";
                                n = Math.min(e.length, n);
                                for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
                                return r
                            }(this, t, n);
                        case "latin1":
                        case "binary":
                            return function(e, t, n) {
                                var r = "";
                                n = Math.min(e.length, n);
                                for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
                                return r
                            }(this, t, n);
                        case "base64":
                            return r = this, a = n, 0 === (o = t) && a === r.length ? c.fromByteArray(r) : c.fromByteArray(r.slice(o, a));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return function(e, t, n) { for (var r = e.slice(t, n), o = "", a = 0; a < r.length; a += 2) o += String.fromCharCode(r[a] + 256 * r[a + 1]); return o }(this, t, n);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), i = !0
                    }
                }

                function h(e, t, n) {
                    var r = e[t];
                    e[t] = e[n], e[n] = r
                }

                function v(e, t, n, r, o) {
                    if (0 === e.length) return -1;
                    if ("string" == typeof n ? (r = n, n = 0) : 2147483647 < n ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                        if (o) return -1;
                        n = e.length - 1
                    } else if (n < 0) {
                        if (!o) return -1;
                        n = 0
                    }
                    if ("string" == typeof t && (t = f.from(t, r)), f.isBuffer(t)) return 0 === t.length ? -1 : g(e, t, n, r, o);
                    if ("number" == typeof t) return t &= 255, f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : g(e, [t], n, r, o);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function g(e, t, n, r, o) {
                    var a = 1,
                        i = e.length,
                        c = t.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        i /= a = 2, c /= 2, n /= 2
                    }

                    function u(e, t) { return 1 === a ? e[t] : e.readUInt16BE(t * a) }
                    if (o)
                        for (var s = -1, l = n; l < i; l++)
                            if (u(e, l) === u(t, -1 === s ? 0 : l - s)) { if (-1 === s && (s = l), l - s + 1 === c) return s * a } else -1 !== s && (l -= l - s), s = -1;
                    else
                        for (i < n + c && (n = i - c), l = n; 0 <= l; l--) {
                            for (var f = !0, d = 0; d < c; d++)
                                if (u(e, l + d) !== u(t, d)) { f = !1; break }
                            if (f) return l
                        }
                    return -1
                }

                function b(e, t, n, r) { return T(function(e) { for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n)); return t }(t), e, n, r) }

                function y(e, t, n, r) { return T(function(e, t) { for (var n, r, o, a = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) n = e.charCodeAt(i), r = n >> 8, o = n % 256, a.push(o), a.push(r); return a }(t, e.length - n), e, n, r) }

                function m(e, t, n) {
                    n = Math.min(e.length, n);
                    for (var r = [], o = t; o < n;) {
                        var a, i, c, u, s = e[o],
                            l = null,
                            f = 239 < s ? 4 : 223 < s ? 3 : 191 < s ? 2 : 1;
                        if (o + f <= n) switch (f) {
                            case 1:
                                s < 128 && (l = s);
                                break;
                            case 2:
                                128 == (192 & (a = e[o + 1])) && 127 < (u = (31 & s) << 6 | 63 & a) && (l = u);
                                break;
                            case 3:
                                a = e[o + 1], i = e[o + 2], 128 == (192 & a) && 128 == (192 & i) && 2047 < (u = (15 & s) << 12 | (63 & a) << 6 | 63 & i) && (u < 55296 || 57343 < u) && (l = u);
                                break;
                            case 4:
                                a = e[o + 1], i = e[o + 2], c = e[o + 3], 128 == (192 & a) && 128 == (192 & i) && 128 == (192 & c) && 65535 < (u = (15 & s) << 18 | (63 & a) << 12 | (63 & i) << 6 | 63 & c) && u < 1114112 && (l = u)
                        }
                        null === l ? (l = 65533, f = 1) : 65535 < l && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), o += f
                    }
                    return function(e) {
                        var t = e.length;
                        if (t <= w) return String.fromCharCode.apply(String, e);
                        var n = "",
                            r = 0;
                        for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += w));
                        return n
                    }(r)
                }
                x.Buffer = f, x.SlowBuffer = function(e) {+e != e && (e = 0); return f.alloc(+e) }, x.INSPECT_MAX_BYTES = 50, f.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() { try { var e = new Uint8Array(1); return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength } catch (e) { return !1 } }(), x.kMaxLength = n(), f.poolSize = 8192, f._augment = function(e) { return e.__proto__ = f.prototype, e }, f.from = function(e, t, n) { return r(null, e, t, n) }, f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, { value: null, configurable: !0 })), f.alloc = function(e, t, n) { return r = null, a = t, i = n, s(o = e), o <= 0 || void 0 === a ? u(r, o) : "string" == typeof i ? u(r, o).fill(a, i) : u(r, o).fill(a); var r, o, a, i }, f.allocUnsafe = function(e) { return o(null, e) }, f.allocUnsafeSlow = function(e) { return o(null, e) }, f.isBuffer = function(e) { return !(null == e || !e._isBuffer) }, f.compare = function(e, t) {
                    if (!f.isBuffer(e) || !f.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                    if (e === t) return 0;
                    for (var n = e.length, r = t.length, o = 0, a = Math.min(n, r); o < a; ++o)
                        if (e[o] !== t[o]) { n = e[o], r = t[o]; break }
                    return n < r ? -1 : r < n ? 1 : 0
                }, f.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, f.concat = function(e, t) {
                    if (!i(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return f.alloc(0);
                    if (void 0 === t)
                        for (o = t = 0; o < e.length; ++o) t += e[o].length;
                    for (var n = f.allocUnsafe(t), r = 0, o = 0; o < e.length; ++o) {
                        var a = e[o];
                        if (!f.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                        a.copy(n, r), r += a.length
                    }
                    return n
                }, f.byteLength = p, f.prototype._isBuffer = !0, f.prototype.swap16 = function() { var e = this.length; if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2) h(this, t, t + 1); return this }, f.prototype.swap32 = function() { var e = this.length; if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4) h(this, t, t + 3), h(this, t + 1, t + 2); return this }, f.prototype.swap64 = function() { var e = this.length; if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8) h(this, t, t + 7), h(this, t + 1, t + 6), h(this, t + 2, t + 5), h(this, t + 3, t + 4); return this }, f.prototype.toString = function() { var e = 0 | this.length; return 0 == e ? "" : 0 === arguments.length ? m(this, 0, e) : t.apply(this, arguments) }, f.prototype.equals = function(e) { if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer"); return this === e || 0 === f.compare(this, e) }, f.prototype.inspect = function() {
                    var e = "",
                        t = x.INSPECT_MAX_BYTES;
                    return 0 < this.length && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
                }, f.prototype.compare = function(e, t, n, r, o) {
                    if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                    if (o <= r && n <= t) return 0;
                    if (o <= r) return -1;
                    if (n <= t) return 1;
                    if (this === e) return 0;
                    for (var a = (o >>>= 0) - (r >>>= 0), i = (n >>>= 0) - (t >>>= 0), c = Math.min(a, i), u = this.slice(r, o), s = e.slice(t, n), l = 0; l < c; ++l)
                        if (u[l] !== s[l]) { a = u[l], i = s[l]; break }
                    return a < i ? -1 : i < a ? 1 : 0
                }, f.prototype.includes = function(e, t, n) { return -1 !== this.indexOf(e, t, n) }, f.prototype.indexOf = function(e, t, n) { return v(this, e, t, n, !0) }, f.prototype.lastIndexOf = function(e, t, n) { return v(this, e, t, n, !1) }, f.prototype.write = function(e, t, n, r) {
                    if (void 0 === t) r = "utf8", n = this.length, t = 0;
                    else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                    }
                    var o = this.length - t;
                    if ((void 0 === n || o < n) && (n = o), 0 < e.length && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r = r || "utf8";
                    for (var a, i, c, u, s, l, f = !1;;) switch (r) {
                        case "hex":
                            return function(e, t, n, r) {
                                n = Number(n) || 0;
                                var o = e.length - n;
                                (!r || o < (r = Number(r))) && (r = o);
                                var a = t.length;
                                if (a % 2 != 0) throw new TypeError("Invalid hex string");
                                a / 2 < r && (r = a / 2);
                                for (var i = 0; i < r; ++i) {
                                    var c = parseInt(t.substr(2 * i, 2), 16);
                                    if (isNaN(c)) return i;
                                    e[n + i] = c
                                }
                                return i
                            }(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return s = t, l = n, T(P(e, (u = this).length - s), u, s, l);
                        case "ascii":
                            return b(this, e, t, n);
                        case "latin1":
                        case "binary":
                            return b(this, e, t, n);
                        case "base64":
                            return a = this, i = t, c = n, T(M(e), a, i, c);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return y(this, e, t, n);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), f = !0
                    }
                }, f.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
                var w = 4096;

                function _(e, t, n) { if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint"); if (n < e + t) throw new RangeError("Trying to access beyond buffer length") }

                function k(e, t, n, r, o, a) { if (!f.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (o < t || t < a) throw new RangeError('"value" argument is out of bounds'); if (n + r > e.length) throw new RangeError("Index out of range") }

                function S(e, t, n, r) { t < 0 && (t = 65535 + t + 1); for (var o = 0, a = Math.min(e.length - n, 2); o < a; ++o) e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o) }

                function I(e, t, n, r) { t < 0 && (t = 4294967295 + t + 1); for (var o = 0, a = Math.min(e.length - n, 4); o < a; ++o) e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255 }

                function O(e, t, n, r) { if (n + r > e.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

                function A(e, t, n, r, o) { return o || O(e, 0, n, 4), a.write(e, t, n, r, 23, 4), n + 4 }

                function C(e, t, n, r, o) { return o || O(e, 0, n, 8), a.write(e, t, n, r, 52, 8), n + 8 }
                f.prototype.slice = function(e, t) {
                    var n = this.length;
                    if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n), t < e && (t = e), f.TYPED_ARRAY_SUPPORT)(o = this.subarray(e, t)).__proto__ = f.prototype;
                    else
                        for (var r = t - e, o = new f(r, void 0), a = 0; a < r; ++a) o[a] = this[a + e];
                    return o
                }, f.prototype.readUIntLE = function(e, t, n) { e |= 0, t |= 0, n || _(e, t, this.length); for (var r = this[e], o = 1, a = 0; ++a < t && (o *= 256);) r += this[e + a] * o; return r }, f.prototype.readUIntBE = function(e, t, n) { e |= 0, t |= 0, n || _(e, t, this.length); for (var r = this[e + --t], o = 1; 0 < t && (o *= 256);) r += this[e + --t] * o; return r }, f.prototype.readUInt8 = function(e, t) { return t || _(e, 1, this.length), this[e] }, f.prototype.readUInt16LE = function(e, t) { return t || _(e, 2, this.length), this[e] | this[e + 1] << 8 }, f.prototype.readUInt16BE = function(e, t) { return t || _(e, 2, this.length), this[e] << 8 | this[e + 1] }, f.prototype.readUInt32LE = function(e, t) { return t || _(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, f.prototype.readUInt32BE = function(e, t) { return t || _(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, f.prototype.readIntLE = function(e, t, n) { e |= 0, t |= 0, n || _(e, t, this.length); for (var r = this[e], o = 1, a = 0; ++a < t && (o *= 256);) r += this[e + a] * o; return (o *= 128) <= r && (r -= Math.pow(2, 8 * t)), r }, f.prototype.readIntBE = function(e, t, n) { e |= 0, t |= 0, n || _(e, t, this.length); for (var r = t, o = 1, a = this[e + --r]; 0 < r && (o *= 256);) a += this[e + --r] * o; return (o *= 128) <= a && (a -= Math.pow(2, 8 * t)), a }, f.prototype.readInt8 = function(e, t) { return t || _(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e] }, f.prototype.readInt16LE = function(e, t) { t || _(e, 2, this.length); var n = this[e] | this[e + 1] << 8; return 32768 & n ? 4294901760 | n : n }, f.prototype.readInt16BE = function(e, t) { t || _(e, 2, this.length); var n = this[e + 1] | this[e] << 8; return 32768 & n ? 4294901760 | n : n }, f.prototype.readInt32LE = function(e, t) { return t || _(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, f.prototype.readInt32BE = function(e, t) { return t || _(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, f.prototype.readFloatLE = function(e, t) { return t || _(e, 4, this.length), a.read(this, e, !0, 23, 4) }, f.prototype.readFloatBE = function(e, t) { return t || _(e, 4, this.length), a.read(this, e, !1, 23, 4) }, f.prototype.readDoubleLE = function(e, t) { return t || _(e, 8, this.length), a.read(this, e, !0, 52, 8) }, f.prototype.readDoubleBE = function(e, t) { return t || _(e, 8, this.length), a.read(this, e, !1, 52, 8) }, f.prototype.writeUIntLE = function(e, t, n, r) {
                    e = +e, t |= 0, n |= 0, r || k(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = 1,
                        a = 0;
                    for (this[t] = 255 & e; ++a < n && (o *= 256);) this[t + a] = e / o & 255;
                    return t + n
                }, f.prototype.writeUIntBE = function(e, t, n, r) {
                    e = +e, t |= 0, n |= 0, r || k(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = n - 1,
                        a = 1;
                    for (this[t + o] = 255 & e; 0 <= --o && (a *= 256);) this[t + o] = e / a & 255;
                    return t + n
                }, f.prototype.writeUInt8 = function(e, t, n) { return e = +e, t |= 0, n || k(this, e, t, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1 }, f.prototype.writeUInt16LE = function(e, t, n) { return e = +e, t |= 0, n || k(this, e, t, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : S(this, e, t, !0), t + 2 }, f.prototype.writeUInt16BE = function(e, t, n) { return e = +e, t |= 0, n || k(this, e, t, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : S(this, e, t, !1), t + 2 }, f.prototype.writeUInt32LE = function(e, t, n) { return e = +e, t |= 0, n || k(this, e, t, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : I(this, e, t, !0), t + 4 }, f.prototype.writeUInt32BE = function(e, t, n) { return e = +e, t |= 0, n || k(this, e, t, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : I(this, e, t, !1), t + 4 }, f.prototype.writeIntLE = function(e, t, n, r) {
                    var o;
                    e = +e, t |= 0, r || k(this, e, t, n, (o = Math.pow(2, 8 * n - 1)) - 1, -o);
                    var a = 0,
                        i = 1,
                        c = 0;
                    for (this[t] = 255 & e; ++a < n && (i *= 256);) e < 0 && 0 === c && 0 !== this[t + a - 1] && (c = 1), this[t + a] = (e / i >> 0) - c & 255;
                    return t + n
                }, f.prototype.writeIntBE = function(e, t, n, r) {
                    var o;
                    e = +e, t |= 0, r || k(this, e, t, n, (o = Math.pow(2, 8 * n - 1)) - 1, -o);
                    var a = n - 1,
                        i = 1,
                        c = 0;
                    for (this[t + a] = 255 & e; 0 <= --a && (i *= 256);) e < 0 && 0 === c && 0 !== this[t + a + 1] && (c = 1), this[t + a] = (e / i >> 0) - c & 255;
                    return t + n
                }, f.prototype.writeInt8 = function(e, t, n) { return e = +e, t |= 0, n || k(this, e, t, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1 }, f.prototype.writeInt16LE = function(e, t, n) { return e = +e, t |= 0, n || k(this, e, t, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : S(this, e, t, !0), t + 2 }, f.prototype.writeInt16BE = function(e, t, n) { return e = +e, t |= 0, n || k(this, e, t, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : S(this, e, t, !1), t + 2 }, f.prototype.writeInt32LE = function(e, t, n) { return e = +e, t |= 0, n || k(this, e, t, 4, 2147483647, -2147483648), f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : I(this, e, t, !0), t + 4 }, f.prototype.writeInt32BE = function(e, t, n) { return e = +e, t |= 0, n || k(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : I(this, e, t, !1), t + 4 }, f.prototype.writeFloatLE = function(e, t, n) { return A(this, e, t, !0, n) }, f.prototype.writeFloatBE = function(e, t, n) { return A(this, e, t, !1, n) }, f.prototype.writeDoubleLE = function(e, t, n) { return C(this, e, t, !0, n) }, f.prototype.writeDoubleBE = function(e, t, n) { return C(this, e, t, !1, n) }, f.prototype.copy = function(e, t, n, r) {
                    if (n = n || 0, r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t = t || 0, 0 < r && r < n && (r = n), r === n) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                    var o, a = r - n;
                    if (this === e && n < t && t < r)
                        for (o = a - 1; 0 <= o; --o) e[o + t] = this[o + n];
                    else if (a < 1e3 || !f.TYPED_ARRAY_SUPPORT)
                        for (o = 0; o < a; ++o) e[o + t] = this[o + n];
                    else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
                    return a
                }, f.prototype.fill = function(e, t, n, r) {
                    if ("string" == typeof e) { var o; if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 !== e.length || (o = e.charCodeAt(0)) < 256 && (e = o), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string"); if ("string" == typeof r && !f.isEncoding(r)) throw new TypeError("Unknown encoding: " + r) } else "number" == typeof e && (e &= 255);
                    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                    if (n <= t) return this;
                    if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, "number" == typeof(e = e || 0))
                        for (c = t; c < n; ++c) this[c] = e;
                    else
                        for (var a = f.isBuffer(e) ? e : P(new f(e, r).toString()), i = a.length, c = 0; c < n - t; ++c) this[c + t] = a[c % i];
                    return this
                };
                var j = /[^+\/0-9A-Za-z-_]/g;

                function P(e, t) {
                    var n;
                    t = t || 1 / 0;
                    for (var r = e.length, o = null, a = [], i = 0; i < r; ++i) {
                        if (55295 < (n = e.charCodeAt(i)) && n < 57344) {
                            if (!o) {
                                if (56319 < n) {-1 < (t -= 3) && a.push(239, 191, 189); continue }
                                if (i + 1 === r) {-1 < (t -= 3) && a.push(239, 191, 189); continue }
                                o = n;
                                continue
                            }
                            if (n < 56320) {-1 < (t -= 3) && a.push(239, 191, 189), o = n; continue }
                            n = 65536 + (o - 55296 << 10 | n - 56320)
                        } else o && -1 < (t -= 3) && a.push(239, 191, 189);
                        if (o = null, n < 128) {
                            if (--t < 0) break;
                            a.push(n)
                        } else if (n < 2048) {
                            if ((t -= 2) < 0) break;
                            a.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((t -= 3) < 0) break;
                            a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return a
                }

                function M(e) { return c.toByteArray(function(e) { var t; if ((e = ((t = e).trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")).replace(j, "")).length < 2) return ""; for (; e.length % 4 != 0;) e += "="; return e }(e)) }

                function T(e, t, n, r) { for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o]; return o }
            }).call(this, E(4))
        }, function(e, t) {
            var n = function() { return this }();
            try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
            e.exports = n
        }, function(e, t, n) {
            t.byteLength = function(e) {
                var t = f(e),
                    n = t[0],
                    r = t[1];
                return 3 * (n + r) / 4 - r
            }, t.toByteArray = function(e) {
                var t, n, r = f(e),
                    o = r[0],
                    a = r[1],
                    i = new l(function(e, t) { return 3 * (e + t) / 4 - t }(o, a)),
                    c = 0,
                    u = 0 < a ? o - 4 : o;
                for (n = 0; n < u; n += 4) t = s[e.charCodeAt(n)] << 18 | s[e.charCodeAt(n + 1)] << 12 | s[e.charCodeAt(n + 2)] << 6 | s[e.charCodeAt(n + 3)], i[c++] = t >> 16 & 255, i[c++] = t >> 8 & 255, i[c++] = 255 & t;
                2 === a && (t = s[e.charCodeAt(n)] << 2 | s[e.charCodeAt(n + 1)] >> 4, i[c++] = 255 & t);
                1 === a && (t = s[e.charCodeAt(n)] << 10 | s[e.charCodeAt(n + 1)] << 4 | s[e.charCodeAt(n + 2)] >> 2, i[c++] = t >> 8 & 255, i[c++] = 255 & t);
                return i
            }, t.fromByteArray = function(e) {
                for (var t, n = e.length, r = n % 3, o = [], a = 0, i = n - r; a < i; a += 16383) o.push(function(e, t, n) { for (var r, o = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), o.push(function(e) { return c[e >> 18 & 63] + c[e >> 12 & 63] + c[e >> 6 & 63] + c[63 & e] }(r)); return o.join("") }(e, a, i < a + 16383 ? i : a + 16383));
                1 == r ? (t = e[n - 1], o.push(c[t >> 2] + c[t << 4 & 63] + "==")) : 2 == r && (t = (e[n - 2] << 8) + e[n - 1], o.push(c[t >> 10] + c[t >> 4 & 63] + c[t << 2 & 63] + "="));
                return o.join("")
            };
            for (var c = [], s = [], l = "undefined" != typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = r.length; o < a; ++o) c[o] = r[o], s[r.charCodeAt(o)] = o;

            function f(e) { var t = e.length; if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4"); var n = e.indexOf("="); return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4] }
            s["-".charCodeAt(0)] = 62, s["_".charCodeAt(0)] = 63
        }, function(e, t) {
            t.read = function(e, t, n, r, o) {
                var a, i, c = 8 * o - r - 1,
                    u = (1 << c) - 1,
                    s = u >> 1,
                    l = -7,
                    f = n ? o - 1 : 0,
                    d = n ? -1 : 1,
                    p = e[t + f];
                for (f += d, a = p & (1 << -l) - 1, p >>= -l, l += c; 0 < l; a = 256 * a + e[t + f], f += d, l -= 8);
                for (i = a & (1 << -l) - 1, a >>= -l, l += r; 0 < l; i = 256 * i + e[t + f], f += d, l -= 8);
                if (0 === a) a = 1 - s;
                else {
                    if (a === u) return i ? NaN : 1 / 0 * (p ? -1 : 1);
                    i += Math.pow(2, r), a -= s
                }
                return (p ? -1 : 1) * i * Math.pow(2, a - r)
            }, t.write = function(e, t, n, r, o, a) {
                var i, c, u, s = 8 * a - o - 1,
                    l = (1 << s) - 1,
                    f = l >> 1,
                    d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = r ? 0 : a - 1,
                    h = r ? 1 : -1,
                    v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (c = isNaN(t) ? 1 : 0, i = l) : (i = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -i)) < 1 && (i--, u *= 2), 2 <= (t += 1 <= i + f ? d / u : d * Math.pow(2, 1 - f)) * u && (i++, u /= 2), l <= i + f ? (c = 0, i = l) : 1 <= i + f ? (c = (t * u - 1) * Math.pow(2, o), i += f) : (c = t * Math.pow(2, f - 1) * Math.pow(2, o), i = 0)); 8 <= o; e[n + p] = 255 & c, p += h, c /= 256, o -= 8);
                for (i = i << o | c, s += o; 0 < s; e[n + p] = 255 & i, p += h, i /= 256, s -= 8);
                e[n + p - h] |= 128 * v
            }
        }, function(e, t) {
            var n = {}.toString;
            e.exports = Array.isArray || function(e) { return "[object Array]" == n.call(e) }
        }, function(e, t, n) {
            n.r(t);
            var w = n(0),
                o = null,
                c = function() { return null !== o },
                r = [],
                a = function(e) { c() ? e() : r.push(e) };
            WeixinJSBridge.subscribe("batchGetPluginPermissionBytes", function(e) { o = e.data.pluginPermissionBytes, r.forEach(function(e) { return e() }), r = [] });
            var i = function(e) { return e.split("/", 1)[0] },
                u = function(e, t) { e = i(e); var n = o && o[e] && o[e][t]; return null == n ? n = [0, 0, 0] : "object" !== Object(w.default)(n) && (n = [n, n, n]), n };

            function s(e, t, n, r) { n = parseInt(n, 10), f(e, t, function(e) { r(e[0] === n) }) }

            function l(e, t, n, r) { n = parseInt(n, 10), f(e, t, function(e) { r(e[0] !== n) }) }

            function f(t, n, r) {
                a(function() {
                    t = i(t);
                    var e = o && o[t] && o[t][n];
                    null == e ? e = [0, 0, 0] : "object" !== Object(w.default)(e) && (e = [e, e, e]), r(e)
                })
            }

            function d(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function p(e) {
                for (var t = e.apiName, n = e.args, r = e.argsList, o = e.seq, a = t, i = 0; i < r.length; i++) a += "|" + function e(t) {
                    if ("string" == typeof t) return t;
                    if ("number" == typeof t) {
                        var n = _(t, 10),
                            r = b(n, ".");
                        return 0 < r && (n = y(n, 0, r + 5)), n
                    }
                    if ("boolean" == typeof t) return !0 === t ? "true" : "false";
                    if (I(t)) { for (var o = "", a = 0; a < t.length; a++) o += e(t[a]) + ";"; return "[" + o + "]" }
                    if ("object" !== Object(w.default)(t)) return "";
                    var i = "",
                        c = S(t);
                    m(c);
                    for (var u = 0; u < c.length; ++u) i += c[u] + ":" + e(t[c[u]]) + ";";
                    return "{" + i + "}"
                }(n[r[i]]);
                return a += o
            }
            var h, v = n(2),
                g = Function.prototype.call,
                b = g.bind(String.prototype.indexOf),
                y = g.bind(String.prototype.slice),
                m = g.bind(Array.prototype.sort),
                _ = g.bind(Number.prototype.toString),
                k = g.bind(Object.prototype.toString),
                S = Object.keys,
                I = Array.isArray || function(e) { return "[object Array]" === k(e) },
                O = n(1);

            function A(t, e) { var n, r = Object.keys(t); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, n)), r }

            function C(e) { return O.invokes[e] }
            var j, P, M, T, x, E, D = Object(v.createSafeSha1)(),
                R = (P = (j = { bits: 256 }).bits, M = j.PRNG, T = void 0 === M ? Math.random : M, x = Math.floor(P / 16), E = Array(x).fill(null).map(function() { return "0123456789abcdef" [Math.floor(16 * T())] }).join(""), D.setSalt(E), D.setSalt = function() {}, function() { return E }),
                B = 0,
                F = function(e, t) {
                    var n = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? A(Object(n), !0).forEach(function(e) { d(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
                        }
                        return t
                    }({}, t);
                    if (void 0 !== n.apiSignature) return n;
                    if (void 0 === C(e)) return n;
                    var r = p({ apiName: e, args: n, argsList: O.invokes[e], seq: B });
                    return n.apiSignature = D.sha1(r), n.apiSigningSeq = B, n.apiSignature, B += 1, n
                },
                L = 0,
                N = 1,
                W = 2,
                V = 3,
                U = (d(h = {}, N, "sign error"), d(h, W, "sign seq error"), d(h, V, "sign missing"), h),
                G = new Set,
                q = function(e, t) {
                    if (void 0 === C(e)) return L;
                    if (null === t.apiSigningSeq || void 0 === t.apiSigningSeq || null === t.apiSignature || void 0 === t.apiSignature) return H(V, e, t, "not checked");
                    if (t.apiSigningSeq = parseInt(t.apiSigningSeq, 10), G.has(t.apiSigningSeq)) return H(W, e, t, "not checked");
                    G.add(t.apiSigningSeq);
                    var n = p({ apiName: e, args: t, argsList: O.invokes[e], seq: t.apiSigningSeq }),
                        r = D.sha1(n);
                    return r !== t.apiSignature ? H(N, e, t, r) : L
                };

            function H(e, t, n, r) {
                var o = "api sign failed: " + U[e] + "; apiName: " + t + "; args: " + JSON.stringify(n) + "; signature: " + r + ", R: " + R() + ";",
                    a = new Error(o);
                return "object" === (void 0 === Reporter ? "undefined" : Object(w.default)(Reporter)) && "function" == typeof Reporter.errorReport && Reporter.errorReport({ key: "appServiceSDKScriptError", error: a, extend: "at checking API Signature" }), e
            }

            function K() { return { invoke: function(t, e, n) { if (q(t, e), void 0 === e.pluginId) return WeixinJSBridge.invoke(t, e, n); if (c()) { var r = function(e, t) { if (delete t.permissionBytes, void 0 === t.pluginId) return t; var n = u(t.pluginId, e); return t.permissionBytes = n, t.privateData = JSON.stringify({ pluginId: t.pluginId }), t }(t, e); return WeixinJSBridge.invoke(t, r, n) } return o = e, delete(a = function(e) { WeixinJSBridge.invoke(t, e, n) }).permissionBytes, void 0 === a.pluginId && i(a), void f(a.pluginId, o, function(e) { a.permissionBytes = e, a.privateData = JSON.stringify({ pluginId: a.pluginId }), i(a) }); var o, a, i }, on: function(e, t) { return WeixinJSBridge.on(e, t) }, publish: function(e, t, n) { return WeixinJSBridge.publish(e, t, n) }, subscribe: function(e, t) { return WeixinJSBridge.subscribe(e, t) } } }

            function z(e) { Q.push(e), J || (this.bridge.on("onSubPackageReady", function(t) { Q.forEach(function(e) { "function" == typeof e && e(void 0, t) }) }), J = !0) }
            var J = !1,
                Q = [];
            var X = function(e, t) {
                var n = 1 < arguments.length && void 0 !== t ? t : {},
                    r = n.stringify,
                    o = void 0 === r ? JSON.stringify : r,
                    a = n.parse,
                    i = void 0 === a ? JSON.parse : a,
                    c = n.arrayBufferProto,
                    u = void 0 === c ? ArrayBuffer.prototype : c;
                if (!e) return e;
                var s = Object(w.default)(e);
                if ("function" === s) throw new Error("[Safeway] not allow to pass function.");
                if ("object" !== s) return e.valueOf();
                for (var l, f, d = Object.keys(e), p = {}, h = 0; h < d.length; h++) {
                    var v = d[h],
                        g = e[v];
                    void 0 !== g && "ArrayBuffer" === (l = g, Object.prototype.toString.call(l).split(" ")[1].split("]")[0]) && void 0 !== g.byteLength && (Object.setPrototypeOf(g, u), p[v] = g)
                }
                try { f = i(o(e)) } catch (e) { throw new Error("[Safeway] data clone error " + e.toString()) }
                for (var b = Object.keys(p), y = 0; y < b.length; y++) {
                    var m = b[y];
                    f[m] = p[m]
                }
                return f
            };

            function Y(n, r) {
                return function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = X(t < 0 || arguments.length <= t ? void 0 : arguments[t], { parse: n.contextGlobal.jsonParse, stringify: n.contextGlobal.jsonStringify, arrayBufferProto: n.contextGlobal.arrayBufferProto });
                    r.apply(this, e)
                }
            }

            function Z(i, c) {
                var e = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).cloneArgs,
                    u = void 0 === e || e;
                return function() { for (var e = [], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; for (var o = 0; o < n.length; o++) "function" == typeof n[o] ? e[o] = new Y(i, n[o]) : e[o] = u ? X(n[o], { parse: JSON.parse, stringify: JSON.stringify, arrayBufferProto: ArrayBuffer.prototype }) : n[o]; var a = c.apply(this, e); return X(a, { parse: i.contextGlobal.jsonParse, stringify: i.contextGlobal.jsonStringify, arrayBufferProto: i.contextGlobal.arrayBufferProto }) }
            }

            function $(e, t, n, r) {
                for (var o = !(3 < arguments.length && void 0 !== r) || r, a = Object.keys(e), i = 0; i < a.length; i++) {
                    var c = a[i],
                        u = e[c];
                    if ("function" != typeof u) throw new Error("Export value of Safeway must be a function, key " + c + " func " + Object(w.default)(u));
                    n && "undefined" != typeof __subContextEngine__ && __subContextEngine__.isIsolateContext() ? t[c] = new Z(n, u, { cloneArgs: o }) : t[c] = u
                }
            }

            function ee(e) {
                var t = K(),
                    n = { create: function(e, t) { return WeixinWorker.create(e, t) }, onWorkerMsg: function(e) { return WeixinWorker.onWorkerMsg(e) }, postMsgToWorker: function(e, t, n) { return WeixinWorker.postMsgToWorker(e, t, n) }, terminate: function(e) { return WeixinWorker.terminate(e) } },
                    r = { makeApiSign: F },
                    o = { ifIs: s, ifIsNot: l };
                $(t, t, e, { cloneArgs: !1 }), $(n, n, e), $(r, r, e), $(o, o, e), this.bridge = t, this.worker = n, this.apiSign = r, this.pluginPermissionBytes = o, $({ onSubpackageReady: z }, this, e)
            }
            t.default = function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), ee.call(this, t) }
        }]).default,
        __safeway__ = new Safeway,
        __errorTracer__ = function(n) {
            var r = {};

            function o(e) { if (r[e]) return r[e].exports; var t = r[e] = { i: e, l: !1, exports: {} }; return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports }
            return o.m = n, o.c = r, o.d = function(e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, o.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, o.t = function(t, e) {
                if (1 & e && (t = o(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var r in t) o.d(n, r, function(e) { return t[e] }.bind(null, r));
                return n
            }, o.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return o.d(t, "a", t), t }, o.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = "", o(o.s = 0)
        }([function(e, t, n) {
            n.r(t), n.d(t, "callSystemFunction", function() { return c }), n.d(t, "wrapSystemFunction", function() { return p }), n.d(t, "callMiniProgramOrPluginFunction", function() { return h }), n.d(t, "callThirdPartyFunction", function() { return r }), n.d(t, "wrapMiniProgramOrPluginFunction", function() { return v }), n.d(t, "wrapThirdPartyFunction", function() { return o }), n.d(t, "surroundThirdByTryCatch", function() { return i });
            var a = /[ (@]*https?:\/\/([^/]*)\/+(.*?):(\d+):(\d+)/,
                l = [];

            function u(e) {
                if (e && !e.__wxOriginalStack__) {
                    var t = e.stack;
                    if (void 0 !== t) {
                        for (var n = t, r = l.length - 1, o = 0; 0 <= o && 0 <= r;) {
                            var a, i = n.length,
                                c = 0;
                            for (var u in f) { f[u] && ((a = n.indexOf(f[u], o)) < 0 || i <= a || (i = a, c = f[u].length)) }
                            if (i >= n.length) break;
                            var s = "at <" + l[r--].description + ">",
                                n = n.slice(0, i) + s + n.slice(i + c),
                                o = i + s.length
                        }
                        return Object.defineProperties(e, { __wxOriginalStack__: { value: t, writable: !0, configurable: !0 }, stack: { value: n, writable: !0, enumerable: !0, configurable: !0 } }), 1
                    }
                }
            }
            var f = { wrapSystemFunction: null, wrapMiniProgramOrPluginFunction: null };

            function s(e) {
                var t = ((new Error).stack || "").match(/.+/gm),
                    r = "",
                    o = 0;
                t && t.forEach(function(e) {
                    if (a.test(e) && 2 === (o += 1)) {
                        var t = e.match(/^(\s*)at /),
                            n = t ? t[1].length : 0;
                        return r = e.slice(n), !1
                    }
                    return !0
                }), f[e] = r
            }

            function d() { for (var e = "", t = l.length - 1; 0 <= t; t--) l[t].pluginAppId && (e = l[t].pluginAppId); return e }

            function c(t, e, n, r, o) {
                var a, i, c = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                null === f.wrapSystemFunction && p(f.wrapSystemFunction = "", "", s)("wrapSystemFunction"), l.push({ description: e });
                try { a = n.apply(r, o) } catch (e) { if (u(e)) { if ("AppServiceSdkKnownError" === e.type) throw l.pop(), e; "ThirdScriptError" === e.type ? (i = d(), Reporter.thirdErrorReport({ error: e, source: i, triggerErrorCallback: !c })) : Reporter.errorReport({ key: t, error: e, triggerErrorCallback: !c }) } if (c) throw l.pop(), e }
                return l.pop(), a
            }

            function p(r, o, a) { var i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3]; return function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return c(r, o, a, this, t, i) } }

            function h(t, e, n, r, o) {
                var a, i = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                null === f.wrapMiniProgramOrPluginFunction && v(f.wrapMiniProgramOrPluginFunction = "", "", s)("wrapMiniProgramOrPluginFunction"), l.push({ description: e, pluginAppId: t });
                try { a = n.apply(r, o) } catch (e) { if (u(e) && Reporter.thirdErrorReport({ error: e, source: t || "", triggerErrorCallback: !i }), i) throw l.pop(), e }
                return l.pop(), a
            }

            function r(e, t, n, r) { var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]; return h(d(), e, t, n, r, o) }

            function v(r, o, a) { var i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3]; return function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return h(r, o, a, this, t, i) } }

            function o(r, o) { var a = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]; return function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return h(d(), r, o, this, t, a) } }

            function i(e, t) {
                var n = (t || "").match(/^\s*(?:at )?([\s\S]*)$/),
                    r = n ? n[1] : "",
                    o = e || function() {};
                return function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return h(d(), r, o, o, t, !1) }
            }
        }]),
        Reporter = function(n) {
            var r = {};

            function o(e) { if (r[e]) return r[e].exports; var t = r[e] = { i: e, l: !1, exports: {} }; return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports }
            return o.m = n, o.c = r, o.d = function(e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, o.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, o.t = function(t, e) {
                if (1 & e && (t = o(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var r in t) o.d(n, r, function(e) { return t[e] }.bind(null, r));
                return n
            }, o.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return o.d(t, "a", t), t }, o.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = "", o(o.s = 2)
        }([function(e, R, B) {
            B.r(R),
                function(t) {
                    B.d(R, "getDataType", function() { return c }), B.d(R, "safeInstanceOf", function() { return e }), B.d(R, "isString", function() { return r }), B.d(R, "isNumber", function() { return o }), B.d(R, "isBoolean", function() { return a }), B.d(R, "isUndefined", function() { return i }), B.d(R, "isNull", function() { return u }), B.d(R, "isNaN", function() { return s }), B.d(R, "isFinite", function() { return l }), B.d(R, "isInfinity", function() { return f }), B.d(R, "isInteger", function() { return d }), B.d(R, "isObject", function() { return p }), B.d(R, "isNonNullObject", function() { return h }), B.d(R, "isJustObject", function() { return v }), B.d(R, "isArray", function() { return g }), B.d(R, "isFunction", function() { return b }), B.d(R, "isDate", function() { return y }), B.d(R, "isRegExp", function() { return m }), B.d(R, "isError", function() { return w }), B.d(R, "isSymbol", function() { return _ }), B.d(R, "isMap", function() { return k }), B.d(R, "isWeakMap", function() { return S }), B.d(R, "isSet", function() { return I }), B.d(R, "isWeakSet", function() { return O }), B.d(R, "isPromise", function() { return A }), B.d(R, "isEmptyObject", function() { return C }), B.d(R, "isArrayBuffer", function() { return j }), B.d(R, "isDataView", function() { return P }), B.d(R, "isTypedArray", function() { return M }), B.d(R, "isVirtualNode", function() { return T }), B.d(R, "isVirtualText", function() { return x }), B.d(R, "paramCheck", function() { return E }), B.d(R, "safelyToString", function() { return D });
                    var n = Object.prototype.toString;

                    function c(e) { return n.call(e).slice(8, -1) }

                    function e(e, t) { return null != e && (e instanceof t || null != e.constructor && e.constructor.name === t.name) }
                    var r = function(e) { return "String" === c(e) },
                        o = function(e) { return "Number" === c(e) },
                        a = function(e) { return !0 === e || !1 === e || "Boolean" === c(e) },
                        i = function(e) { return void 0 === e },
                        u = function(e) { return null === e },
                        s = Number.isNaN || function(e) { return e != e },
                        l = Number.isFinite || function(e) { return o(e) && t.isFinite(e) },
                        f = function(e) { return o(e) && Math.abs(e) === 1 / 0 },
                        d = function(e) { return l(e) && Math.floor(e) === e },
                        p = function(e) { return "Object" === c(e) },
                        h = function(e) { return p(e) && !u(e) },
                        v = function(e) { return "Object" === c(e) },
                        g = Array.isArray || function(e) { return "Array" === c(e) },
                        b = function(e) { return "function" == typeof e },
                        y = function(e) { return "Date" === c(e) },
                        m = function(e) { return "RegExp" === c(e) },
                        w = function(e) { return "Error" === c(e) },
                        _ = function(e) { return "Symbol" === c(e) },
                        k = function(e) { return "Map" === c(e) },
                        S = function(e) { return "WeakMap" === c(e) },
                        I = function(e) { return "Set" === c(e) },
                        O = function(e) { return "WeakSet" === c(e) },
                        A = function(e) { return "Promise" === c(e) },
                        C = function(e) { for (var t in e) return !1; return !0 },
                        j = function(e) { return "ArrayBuffer" === c(e) },
                        P = function(e) { return "DataView" === c(e) },
                        M = function(e) { return ArrayBuffer.isView(e) && !P(e) },
                        T = function(e) { return e && "WxVirtualNode" === e.type },
                        x = function(e) { return e && "WxVirtualText" === e.type };

                    function E(t, n) {
                        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "parameter",
                            e = c(n),
                            o = c(t);
                        if (o !== e) return r + " should be " + e + " instead of " + o + ";";
                        var a = "";
                        switch (e) {
                            case "Object":
                                Object.keys(n).forEach(function(e) { a += E(t[e], n[e], r + "." + e) });
                                break;
                            case "Array":
                                if (t.length < n.length) return r + " should have at least " + n.length + " item;";
                                for (var i = 0; i < n.length; ++i) a += E(t[i], n[i], r + "[" + i + "]")
                        }
                        return a
                    }

                    function D(e) { try { return JSON.stringify(e) } catch (e) { return e.message, "" } }
                }.call(this, B(1))
        }, function(e, t) {
            var n = function() { return this }();
            try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
            e.exports = n
        }, function(e, t, n) {
            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e) { return function(e) { if (Array.isArray(e)) return r(e) }(e) || function(e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) }(e) || function(e, t) { if (e) { if ("string" == typeof e) return r(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0 } }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function k(e) { return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var a;
            n.r(t);
            var S = { APP: 0, WIDGET: 1, GAME: 2, GAME_SUBCONTEXT: 3 },
                i = { login: 1, login_cancel: 2, login_fail: 3, request_fail: 4, connectSocket_fail: 5, closeSocket_fail: 6, sendSocketMessage_fail: 7, uploadFile_fail: 8, downloadFile_fail: 9, redirectTo_fail: 10, navigateTo_fail: 11, navigateBack_fail: 12, appServiceSDKScriptError: 13, webviewSDKScriptError: 14, jsEnginScriptError: 15, thirdScriptError: 16, webviewScriptError: 17, exparserScriptError: 18, widgetEnginScriptError: 113, widgetThirdScriptError: 114, gameSDKScriptError: 135, gameSubContextSDKScriptError: 136, gameThirdScriptError: 137, gameSubContextThirdScriptError: 138, startRecord: 19, startRecord_fail: 20, getLocation: 21, getLocation_fail: 22, chooseLocation: 23, chooseLocation_fail: 24, openAddress: 25, openAddress_fail: 26, openLocation: 27, openLocation_fail: 28, makePhoneCall: 29, makePhoneCall_fail: 30, operateWXData: 31, operateWXData_fail: 32, checkLogin: 33, checkLogin_fail: 34, refreshSession: 35, refreshSession_fail: 36, chooseVideo: 37, chooseVideo_fail: 38, chooseImage: 39, chooseImage_fail: 40, verifyPaymentPassword: 41, verifyPaymentPassword_fail: 42, requestPayment: 43, requestPayment_fail: 44, bindPaymentCard: 45, bindPaymentCard_fail: 46, requestPaymentToBank: 47, requestPaymentToBank_fail: 48, openDocument: 49, openDocument_fail: 50, chooseContact: 51, chooseContact_fail: 52, operateMusicPlayer: 53, operateMusicPlayer_fail: 54, getMusicPlayerState_fail: 55, playVoice_fail: 56, setNavigationBarTitle_fail: 57, switchTab_fail: 58, getImageInfo_fail: 59, enableCompass_fail: 60, enableAccelerometer_fail: 61, getStorage_fail: 62, setStorage_fail: 63, clearStorage_fail: 64, removeStorage_fail: 65, getStorageInfo_fail: 66, getStorageSync_fail: 67, setStorageSync_fail: 68, addCard_fail: 69, openCard_fail: 70, openSetting_fail: 71, reLaunch_fail: 72, getClipboardData_fail: 73, setClipboardData_fail: 74, showShareMenu_fail: 75, hideShareMenu_fail: 76, showToast_fail: 77, hideToast_fail: 78, openBluetoothAdapter_fail: 79, closeBluetoothAdapter_fail: 80, getBluetoothAdapterState_fail: 81, startBluetoothDevicesDiscovery_fail: 82, stopBluetoothDevicesDiscovery_fail: 83, getBluetoothDevices_fail: 84, getConnectedBluetoothDevices_fail: 85, createBLEConnection_fail: 86, closeBLEConnection_fail: 87, getBLEDeviceServices_fail: 88, getBLEDeviceCharacteristics_fail: 89, notifyBLECharacteristicValueChanged_fail: 90, readBLECharacteristicValue_fail: 91, checkIsSupportFacialRecognition_fail: 92, startFacialRecognitionVerify_fail: 93, startFacialRecognitionVerifyAndUploadVideo_fail: 94, startBeaconDiscovery_fail: 95, stopBeaconDiscovery_fail: 96, getBeacons_fail: 97, getSetting_fail: 98, setScreenBrightness_fail: 99, getScreenBrightness_fail: 100, vibrateShort_fail: 101, vibrateLong_fail: 102, shareAppMessage: 103, shareAppMessage_fail: 104, shareAppMessage_cancel: 105, shareAppMessageDirectly: 106, shareAppMessageDirectly_fail: 107, shareAppMessageDirectly_cancel: 108, sendBizRedPacket_fail: 109, addPhoneContact_fail: 110, saveImageToPhotosAlbum_fail: 111, saveVideoToPhotosAlbum_fail: 112, setTopBarText_fail: 115, setNavigationBarRightButton_fail: 116, setEnableDebug_fail: 117, captureScreen_fail: 118, setKeepScreenOn_fail: 119, createRequestTask: 120, createRequestTask_fail: 121, createDownloadTask: 122, createDownloadTask_fail: 123, createUploadTask: 124, createUploadTask_fail: 125, checkIsSupportSoterAuthentication_fail: 126, startSoterAuthentication_fail: 127, navigateToMiniProgram_fail: 128, navigateBackMiniProgram_fail: 129, openDeliveryList_fail: 130, setNavigationBarColor_fail: 131, setStatusBarStyle_fail: 132, getFileInfo_fail: 133, global_objs_readonly: 134, writeBLECharacteristicValue_fail: 206, adData_error: 140, adExposureReport_fail: 141, adClickReport_fail: 142, adNavigateToMiniProgram_fail: 143, adOpenUrl_fail: 144, initGameIsolatedContext: 145, initGameIsolatedContext_fail: 146, initGameOpenDataContext: 147, initGameOpenDataContext_fail: 148, initAppIsolatedContext: 149, initAppIsolatedContext_fail: 150, adFollowReport_fail: 151, adAddContact_fail: 152, adDownloadAppInternal_fail: 153, adGetInstallState_fail: 154, adQueryDownloadTask_fail: 155, adAddDownloadTaskStraight_fail: 156, adPauseDownloadTask_fail: 157, adResumeDownloadTask_fail: 158, adInstallDownloadTask_fail: 159, pluginDisplayInPage: 160, functionalPageSuccess: 161, functionalPageFail: 162, functionalPageReject: 163, insertInputToWebLayer_fail: 166, insertVideoToWebLayer_fail: 167, insertInputToWebLayer_succ: 168, insertVideoToWebLayer_succ: 169, insertMapToWebLayer_fail: 171, insertMapToWebLayer_succ: 172, insertLiveToWebLayer_fail: 178, insertLiveToWebLayer_succ: 179, insertCanvas2dToWebLayer_fail: 180, insertCanvas2dToWebLayer_succ: 181, insertWebGLToWebLayer_fail: 187, insertWebGLToWebLayer_succ: 186, insertVideo2ToWebLayer_fail: 182, insertVideo2ToWebLayer_succ: 183, insertCameraToWebLayer_fail: 184, insertCameraToWebLayer_succ: 185, insertTextareaToWebLayer_fail: 189, insertTextareaToWebLayer_succ: 188, audioInstancesCountReach1024: 170, bindUDP: 173, sendUDPMessage: 174, receiveUDPMessage: 175, UDPError: 176, sendUDPMessageToInvalidAddress: 177, clientRestoreWebview_fail: 200, clientLibVersionNotMatch: 205, oaAddContact_fail: 201, oaReportBehavior_fail: 202, oaGetContactData_fail: 203, demoEnterHomePage: 210, demoConfigRepeat: 211, getUserInteractiveStorage: 212, modifyFriendInteractiveStorage: 213, modifyFriendInteractiveStorageShowModal: 214, modifyFriendInteractiveStorageConfirm: 215, modifyFriendInteractiveStorageCancel: 216, disableLivePlayer: 220, disableLivePusher: 221, disableVideo: 222, asyncApiCost: 226, asyncApiCount: 227, requestSubscribeMessageWithNative: 230, requestSubscribeMessageWithNativeSuccess: 231, requestSubscribeMessageWithNativeFail: 232, tradeServiceGetPermissionBytesSuccess: 235, tradeServiceGetPermissionBytesFail: 236, tradeServiceCanUse: 237, tradeServiceCanNotUse: 238, tradeServiceTapCard: 239, midasLaunchFeatureFail: 240, createNormalWorker: 241, createWKWorker: 242, loadGameIndependentSubPackageFail: 243 },
                c = { Speed: 13544, Error: 13582, Slow: 13968, Clipboard: 14367, NetworkAPI: 14480, Display: 15496, WebviewRecycle: 15352, WebviewRestore: 15353, PluginDisplay: 15364, functionalPageOperation: 15804, RecycledAPI: 15649, GameReportKV: 15677, RecycleView: 15864, GameADFunnelModel: 15859, CustomComponent: 15948, VideoAction: 16137, SameLayerRender: 16360, MediaCompStatus: 16435, NavigateToMiniProgramAlert: 16432, LaunchDetailSpeed: 16514, CloudReport: 16588, DeprecatedAPI: 16624, Share: 16717, APIUse: 17619, SetDataPerf: 17176, UserLog: 17809, GameInteractiveData: 17836, GameRecorder: 17833, UserLogFail: 17975, WeAppInvoke: 18042, RenderCache: 18052, RenderStages: 18321, ShareCardClick: 18352, PerfReport: 18748, GameServerInvite: 18768, NpmExtendedLib: 18874, FirstInteraction: 19136, GameComponent: 19283, GameWhatsNew: 19335, TradeService: 19286, LazyCodeLoading: 20030, MidasFriendPayment: 20285 },
                l = { webview2AppService: 1, appService2Webview: 2, funcReady: 3, firstGetData: 4, firstRenderTime: 5, reRenderTime: 6, forceUpdateRenderTime: 7, appRoute2newPage: 8, newPage2pageReady: 9, thirdScriptRunTime: 10, pageframe: 11, WAWebview: 12, WAWidget: 13, widgetCanvasReady: 14, widgetFirstDataPush: 15 },
                u = { apiCallback: 1, pageInvoke: 2, widgetInvoke: 3 },
                I = { appServiceSDKScriptError: 1, webviewSDKScriptError: 2, jsEnginScriptError: 3, thirdScriptError: 4, webviewScriptError: 5, exparserScriptError: 6, widgetEnginScriptError: 7, widgetThirdScriptError: 8, gameSDKScriptError: 10, gameSubContextSDKScriptError: 12, gameThirdScriptError: 13, gameSubContextThirdScriptError: 14 },
                f = (o(a = {}, S.APP, "thirdScriptError"), o(a, S.WIDGET, "widgetThirdScriptError"), o(a, S.GAME, "gameThirdScriptError"), o(a, S.GAME_SUBCONTEXT, "gameSubContextThirdScriptError"), a),
                s = __wxConfig,
                d = (s.platform, s.platform, s.platform, "ios" === s.platform);
            s.platform, s.platform, s.vendor;
            s.host;
            var O = n(0),
                p = [],
                h = [],
                v = [],
                g = 0,
                b = 0,
                y = 0,
                m = 0,
                w = 0,
                A = {},
                C = {},
                j = {};

            function P(e) { void 0 !== WeixinJSBridge ? e() : "undefined" != typeof document && document.addEventListener("WeixinJSBridgeReady", e, !1) }

            function M() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                P(function() { WeixinJSBridge.invoke.apply(WeixinJSBridge, t) })
            }

            function T() {!p || p.length <= 0 || (M("reportKeyValue", { dataArray: p.slice(0, 500) }), p = p.slice(500)) }

            function x() {!h || h.length <= 0 || (M("reportIDKey", { dataArray: h.slice(0, 500) }), h = h.slice(500)) }

            function E() {!v || v.length <= 0 || (M("systemLog", { dataArray: v }), v = []) }
            var D = function() {},
                R = function() {},
                B = function() {},
                F = function() {},
                L = "",
                N = {},
                W = -1,
                V = 0,
                U = S.APP;
            "function" == typeof s.onReady && s.onReady(function() { void 0 !== s.appType && (W = s.appType), "object" === k(s.appLaunchInfo) && (V = s.appLaunchInfo.scene) });
            var G = {
                    surroundThirdByTryCatch: __errorTracer__.surroundThirdByTryCatch,
                    slowReport: function(e) {
                        var t, n = e.key,
                            r = e.cost,
                            o = e.extend,
                            a = e.force,
                            i = u[n],
                            c = Date.now();
                        i && (!a && c - w < 500 || 50 < Object.keys(j).length || (j[o] || (j[o] = 0), j[o]++, 3 < j[o] || (w = c, t = r + "," + encodeURIComponent(o) + "," + i + "," + G.getAppType(), G.reportKeyValue({ key: "Slow", value: t }))))
                    },
                    speedReport: function(e) {
                        var t, n = e.key,
                            r = e.data,
                            o = e.timeMark,
                            a = e.force,
                            i = l[n],
                            c = Date.now(),
                            u = 0,
                            s = o.nativeTime;
                        i && (!a && c - (A[i] || 0) < 500 || o.startTime && o.endTime && (1 !== i && 2 !== i || s) && (r && (u = JSON.stringify(r).length), A[i] = c, t = i + "," + o.startTime + "," + s + "," + s + "," + o.endTime + "," + u + "," + G.getAppType(), G.reportKeyValue({ key: "Speed", value: t })))
                    },
                    reportQualityData: function(e, t, n, r) { M("reportKeyValue", { version: 2, dataArray: [{ key: c[e], value: [n - t, V, t, n].concat(_(3 < arguments.length && void 0 !== r ? r : [])).join(",") }] }) },
                    reportKeyValue: function(e) {
                        var t = e.key,
                            n = e.value,
                            r = e.immediately,
                            o = void 0 !== r && r;
                        if (c[t]) {
                            for (o ? p.unshift({ key: c[t], value: n }) : p.push({ key: c[t], value: n }); 5e3 < p.length;) p.pop();
                            (5e3 < Date.now() - g || o) && (g = Date.now(), T())
                        }
                    },
                    reportIDKey: function(e) {
                        var t = e.id,
                            n = e.key,
                            r = e.value,
                            o = void 0 === r ? 1 : r;
                        if (i[n]) {
                            for (h.push({ id: t || (d ? "356" : "358"), key: i[n], value: o }); 5e3 < h.length;) h.pop();
                            5e3 < Date.now() - b && (b = Date.now(), x())
                        }
                    },
                    reportIDKeyDirectly: function(e) {
                        var t = e.id,
                            n = e.key,
                            r = e.immediately,
                            o = void 0 !== r && r;
                        if (n && "356" !== t && "358" !== t) {
                            for (h.push({ id: t, key: n, value: 1 }); 5e3 < h.length;) h.pop();
                            (5e3 < Date.now() - b || o) && (b = Date.now(), x())
                        }
                    },
                    thirdErrorReport: function(e) {
                        var t = e.key,
                            n = void 0 === t ? U : t,
                            r = e.error,
                            o = e.triggerErrorCallback,
                            a = void 0 === o || o,
                            i = e.isUnhandledRejection,
                            c = void 0 !== i && i,
                            u = e.promise,
                            s = e.source,
                            l = void 0 === s ? "" : s;
                        G.errorReport({ key: f[n], error: r, triggerErrorCallback: a, isThirdScriptError: !0, isUnhandledRejection: c, promise: u, source: l })
                    },
                    errorReport: function(e) {
                        var t, n, r, o, a, i, c, u, s, l = e.key,
                            f = e.error,
                            d = e.isThirdScriptError,
                            p = void 0 !== d && d,
                            h = e.triggerErrorCallback,
                            v = void 0 === h || h,
                            g = e.isUnhandledRejection,
                            b = void 0 !== g && g,
                            y = e.promise,
                            m = e.source,
                            w = void 0 === m ? "" : m;
                        I[l] && null != f && ("function" == typeof __wxSourceMapRetrace__ && (f = __wxSourceMapRetrace__(f)), n = "object" === k(f) && (f.message || f.stack) ? (t = f.message, f.stack) : (t = Object(O.safelyToString)(f), Object(O.getDataType)(f)), o = (p ? "MiniProgramError" : "SystemError (" + l + ")") + "\n" + (r = t) + "\n" + n, b ? console.error("(in promise) " + o) : console.error(o), 0 <= o.indexOf("subContext.js") || ("undefined" != typeof window && void 0 !== window.__webviewId__ ? function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            P(function() { WeixinJSBridge.publish.apply(WeixinJSBridge, t) })
                        }("WEBVIEW_ERROR_MSG", { data: { msg: o }, options: { timestamp: Date.now() } }) : v && (G.triggerErrorMessage(o, b, f, y), p && G.triggerThirdErrorMessage(o, b, f, y)), 50 < Object.keys(C).length || b && !Object(O.isError)(f) || (i = a = "", U !== S.APP && U !== S.GAME || (a = L, c = N, u = "", Object.keys(c).forEach(function(e, t) { 0 !== t && (u += "&"); try { u += encodeURIComponent(e) + "=" + encodeURIComponent(c[e]) } catch (e) {} }), i = u), s = [I[l], f.name].concat(_([r, n, "undefined" != typeof __libVersionInfo__ && __libVersionInfo__.version || "", G.getAppType(), a, i, "undefined" != typeof __libVersionInfo__ && __libVersionInfo__.updateTime || "", "", b ? 1 : 0, w].map(function(t) { var n; try { n = encodeURIComponent(t) } catch (e) { n = t } return n }))).join(","), C[s] || (C[s] = 0), C[s]++, p && 3 < C[s] || 3 < C[s] || (G.reportIDKey({ key: l }), G.reportKeyValue({ key: "Error", value: s }), x(), T(), E()))))
                    },
                    log: function(e, t) { e && "string" == typeof e && (!t && Date.now() - y < 50 || (y = Date.now(), v.push(e + ""), 50 <= v.length && E())) },
                    submit: function() { Date.now() - m < 50 || (m = Date.now(), x(), T(), E()) },
                    registerErrorListener: function(e) { "function" == typeof e && (D = e) },
                    registerThirdErrorListener: function(e) { "function" == typeof e && (R = e) },
                    registerUnhandledRejectionListener: function(e) { "function" == typeof e && (B = e) },
                    registerThirdUnhandledRejectionListener: function(e) { "function" == typeof e && (F = e) },
                    triggerErrorMessage: function(e, t, n, r) {
                        var o = 1 < arguments.length && void 0 !== t && t,
                            a = 2 < arguments.length ? n : void 0,
                            i = 3 < arguments.length ? r : void 0;
                        setTimeout(function() { try { o ? B(a, i) : D(e) } catch (e) { console.error(e.message, "at onError callback function") } }, 0)
                    },
                    triggerThirdErrorMessage: function(e, t, n, r) {
                        var o = 1 < arguments.length && void 0 !== t && t,
                            a = 2 < arguments.length ? n : void 0,
                            i = 3 < arguments.length ? r : void 0;
                        setTimeout(function() { try { o ? F(a, i) : R(e) } catch (e) { console.error(e.message, "at onError callback function") } }, 0)
                    },
                    setAsWidget: function() { U = S.WIDGET },
                    setAsGame: function() { U = S.GAME },
                    setAsGameSubContext: function() { U = S.GAME_SUBCONTEXT },
                    getAppType: function() { return -1 === W ? 0 : W + 1e3 }
                },
                q = {};

            function H(e) {
                Object.defineProperty(q, e, {
                    get: function() {
                        return r = G[e],
                            function() { try { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return r.apply(r, t) } catch (e) { return void console.error("reporter error:" + e.message, e.stack) } };
                        var r
                    },
                    configurable: !0,
                    enumerable: !0
                })
            }
            Object.keys(G).forEach(function(e) { H(e) }), Object.defineProperty(q, "__route__", { set: function(e) { L = e } }), Object.defineProperty(q, "__method__", { set: function() {} }), Object.defineProperty(q, "__query__", { set: function(e) { N = e } }), q.RunType = S, "undefined" != typeof window && (window.onbeforeunload = function() { G.submit() });
            t.default = q
        }]).default,
        worker = function(n) {
            var r = {};

            function o(e) { if (r[e]) return r[e].exports; var t = r[e] = { i: e, l: !1, exports: {} }; return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports }
            return o.m = n, o.c = r, o.d = function(e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, o.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, o.t = function(t, e) {
                if (1 & e && (t = o(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var r in t) o.d(n, r, function(e) { return t[e] }.bind(null, r));
                return n
            }, o.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return o.d(t, "a", t), t }, o.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = "", o(o.s = 83)
        }([function(e, t, n) {
            n.r(t), n.d(t, "publish", function() { return r.publish }), n.d(t, "subscribe", function() { return o.subscribe }), n.d(t, "getSurroundedCallbacks", function() { return a.getSurroundedCallbacks }), n.d(t, "callbackInvoke", function() { return a.callbackInvoke }), n.d(t, "invokeMethod", function() { return a.invokeMethod }), n.d(t, "invokeMethodWithPlugin", function() { return a.invokeMethodWithPlugin }), n.d(t, "_invokeMethod", function() { return a._invokeMethod }), n.d(t, "onMethod", function() { return i.onMethod }), n.d(t, "beforeInvoke", function() { return c }), n.d(t, "beforeInvokeFail", function() { return u }), n.d(t, "beforeInvokeCallback", function() { return s }), n.d(t, "invoke", function() { return l.invoke }), n.d(t, "on", function() { return f.on });
            var r = n(56),
                o = n(58),
                a = n(52),
                i = n(61),
                h = n(8),
                v = n(6);

            function c(e, t, n) { var r = Object(v.paramCheck)(t, n); return !r || (u(e, t, "parameter error: " + r), !1) }

            function u(e) { s({ name: e, args: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, errMsg: 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "", errCode: 3 < arguments.length ? arguments[3] : void 0, success: !1 }) }

            function s(e) {
                var t = e.name,
                    n = e.args,
                    r = void 0 === n ? {} : n,
                    o = e.success,
                    a = void 0 === o || o,
                    i = e.errMsg,
                    c = void 0 === i ? "" : i,
                    u = e.errCode,
                    s = e.res,
                    l = void 0 === s ? {} : s,
                    r = r || {},
                    f = a ? t + ":ok" : t + ":fail " + c,
                    d = __errorTracer__.surroundThirdByTryCatch((a ? r.success : r.fail) || h.noop, "at api " + t + " " + (a ? "success" : "fail") + " callback function"),
                    p = __errorTracer__.surroundThirdByTryCatch(r.complete || h.noop, "at api " + t + " complete callback function");
                l.errMsg = f, Object(v.isNumber)(u) && (l.errCode = u), d(l), p(l)
            }
            var l = n(60),
                f = n(62);
            n(57), n(59)
        }, function(e, t, n) {
            n.r(t);
            t.default = __wxConfig
        }, function(e, t, n) {
            n.r(t), n.d(t, "PLATFORM", function() { return o }), n.d(t, "IS_DEVTOOLS", function() { return a }), n.d(t, "IS_ANDROID", function() { return i }), n.d(t, "IS_IOS", function() { return c }), n.d(t, "IS_WINDOWS", function() { return u }), n.d(t, "IS_MAC", function() { return s }), n.d(t, "IS_PC", function() { return l }), n.d(t, "IS_MINA", function() { return f }), n.d(t, "debugEnabled", function() { return d }), n.d(t, "HOST", function() { return p }), n.d(t, "IS_HOST_SDK", function() { return h }), n.d(t, "IS_HOST_WMPF", function() { return v }), n.d(t, "IS_HOST_WECHAT", function() { return g });
            var r = n(1),
                o = r.default.platform,
                a = "devtools" === r.default.platform,
                i = "android" === r.default.platform,
                c = "ios" === r.default.platform,
                u = "windows" === r.default.platform,
                s = "mac" === r.default.platform,
                l = u || s,
                f = "mina" === r.default.vendor;

            function d() { if (r.default && "debug" in r.default && void 0 !== r.default.debug) return !!r.default.debug }
            var p = r.default.host || {},
                h = "SDK" === p.env,
                v = "WMPF" === p.env,
                g = "WeChat" === p.env
        }, function(e, t, n) {
            n.r(t);
            var r = n(26);
            t.default = { lastRoute: "", lastOpenType: "", query: {}, runningStatus: "active", navigatorLock: !1, openUrlLock: !1, possessingBackgroundAudioPlayer: !1, webviewEventCallback: null, hanged: !1, appStatus: r.AppStatus.FORE_GROUND, navigationBarTitleMap: {} }
        }, function(e, t, n) {
            n.r(t), n.d(t, "surroundByTryCatchFactory", function() { return b }), n.d(t, "paramCheck", function() { return r.paramCheck }), n.d(t, "getDataType", function() { return r.getDataType }), n.d(t, "isObject", function() { return r.isObject }), n.d(t, "getRealRoute", function() { return y }), n.d(t, "convertProtocolPath", function() { return m }), n.d(t, "getRealRouteWithProtocol", function() { return w }), n.d(t, "routesHaveSameDomain", function() { return k }), n.d(t, "urlEncodeFormData", function() { return S }), n.d(t, "getQueryString", function() { return I }), n.d(t, "addQueryStringToUrl", function() { return O }), n.d(t, "validateUrl", function() { return A }), n.d(t, "assign", function() { return C }), n.d(t, "encodeUrlQuery", function() { return j }), n.d(t, "transWxmlToHtml", function() { return P }), n.d(t, "removeHtmlSuffixFromUrl", function() { return M }), n.d(t, "AppServiceSdkKnownError", function() { return T }), n.d(t, "ThirdScriptError", function() { return x }), n.d(t, "extend", function() { return E }), n.d(t, "arrayBufferToBase64", function() { return F }), n.d(t, "base64ToArrayBuffer", function() { return L }), n.d(t, "blobToArrayBuffer", function() { return N }), n.d(t, "convertObjectValueToString", function() { return W }), n.d(t, "guid", function() { return V }), n.d(t, "checkClientVersion", function() { return G }), n.d(t, "renameProperty", function() { return q }), n.d(t, "compareVersion", function() { return H }), n.d(t, "successCallback", function() { return K }), n.d(t, "successWithMessage", function() { return z }), n.d(t, "failWithMessage", function() { return J });
            var o = n(5),
                a = n(15),
                i = n(19),
                c = n(9),
                u = n(50);
            var s = n(35);

            function l(e) {
                var r = "function" == typeof Map ? new Map : void 0;
                return (l = function(e) {
                    if (null === e || (t = e, -1 === Function.toString.call(t).indexOf("[native code]"))) return e;
                    var t;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== r) {
                        if (r.has(e)) return r.get(e);
                        r.set(e, n)
                    }

                    function n() { return Object(s.default)(e, arguments, Object(c.default)(this).constructor) }
                    return n.prototype = Object.create(e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), Object(u.default)(n, e)
                })(e)
            }
            var f = n(18),
                d = n(1),
                r = n(6),
                p = n(2),
                h = n(31);

            function v(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(c.default)(r); return t = o ? (e = Object(c.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(i.default)(this, t) } }
            var g = /^[-+a-zA-Z0-9]+:\/\//;

            function b(e, t) { return __errorTracer__.wrapSystemFunction("appServiceSDKScriptError", t, e) }

            function y(e, t) {
                if ((!(2 < arguments.length && void 0 !== arguments[2]) || arguments[2]) && (t = P(t)), 0 === t.indexOf("/")) return t.substr(1);
                if (0 === t.indexOf("./")) return y(e, t.substr(2), !1);
                for (var n = t.split("/"), r = 0, o = n.length; r < o && ".." === n[r]; r++);
                n.splice(0, r);
                var a = 0 < e.length ? e.split("/") : [];
                return a.splice(a.length - r - 1, r + 1), a.concat(n).join("/")
            }

            function m(e) {
                var t = e.match(g);
                if (!t) return e;
                var n = t[0];
                if ("plugin://" === n) {
                    var r, o, a = n.length,
                        i = e.indexOf("/", a);
                    0 <= i && (r = e.slice(a, i), o = d.default.plugins && d.default.plugins[r] ? d.default.plugins[r].provider : r, e = e.slice(0, a) + o + e.slice(i));
                    var c = e.indexOf("?");
                    c < 0 && (c = e.length);
                    var u = e.slice(0, c),
                        s = exparser.Component._list[u];
                    if (!s) throw new T('Page "' + u + '" is not found');
                    e = s.is + e.slice(c)
                } else if ("plugin-private://" === n) {
                    var l = e.indexOf("?");
                    l < 0 && (l = e.length);
                    var f = e.slice(0, l);
                    e = "/" + __appServiceEngine__.convertComponentAliasToRoute(f) + e.slice(l)
                } else {
                    if ("wx://" !== n) throw new T('Unknown URL protocol "' + n + '"');
                    e = "/__wx__/" + e.slice(5)
                }
                return e
            }

            function w(e, t) { for (var n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2]; g.test(t);) t = m(t); return y(e, t, n) }

            function _(e) {
                var t, n, r, o, a, i, c = e.match(g),
                    u = "";
                return c && ("plugin://" === (t = c[0]) ? (n = t.length, 0 <= (r = e.indexOf("/", n)) && (o = e.slice(n, r), u = d.default.plugins && d.default.plugins[o] ? d.default.plugins[o].provider : o)) : "plugin-private://" === t ? (a = t.length, 0 <= (i = e.indexOf("/", a)) && (u = e.slice(a, i))) : "wx://" === t && (u = "//")), u
            }

            function k(e, t) { var n = _(t); return !n || _(__virtualDOM__.convertRouteToComponentAlias(e)) === n }

            function S(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                if ("object" !== Object(f.default)(t)) return t;
                var n = [];
                for (var r in t)
                    if (Object(h.hasOwnProperty)(t, r))
                        if (e) try { n.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r])) } catch (e) { n.push(r + "=" + t[r]) } else n.push(r + "=" + t[r]);
                return n.join("&")
            }

            function I(e) {
                var t = {};
                if (-1 < e.indexOf("?")) {
                    var n = e.indexOf("?") + 1,
                        r = e.substring(n); - 1 < r.indexOf("#") && (r = r.substring(0, r.indexOf("#")));
                    for (var o = r.split("&"), a = 0; a < o.length; a++) {
                        var i = o[a].split("=");
                        t[i[0]] = i[1]
                    }
                }
                return t
            }

            function O(e, n) { if ("string" == typeof e && "object" === Object(f.default)(n) && null !== n && 0 < Object.keys(n).length) { var t = e.split("?"); return t[0] + "?" + S(C((t[1] || "").split("&").reduce(function(e, t) { var n, r, o; return "string" == typeof t && 0 < t.length && (r = (n = t.split("="))[0], o = n[1], e[r] = o), e }, {}), Object.keys(n).reduce(function(e, t) { return "object" === Object(f.default)(n[t]) ? e[encodeURIComponent(t)] = encodeURIComponent(JSON.stringify(n[t])) : e[encodeURIComponent(t)] = encodeURIComponent(n[t]), e }, {}))) } return e }

            function A(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "http"; return "http" === t ? /^(http|https):\/\/.*/i.test(e) : "websocket" === t ? /^(ws|wss):\/\/.*/i.test(e) : void 0 }

            function C() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return t.reduce(function(e, t) { for (var n in t) e[n] = t[n]; return e }, {}) }

            function j(e) {
                if ("string" != typeof e) return e;
                var t = e.split("?"),
                    n = t[0],
                    r = (t[1] || "").split("&").reduce(function(e, t) { var n, r, o; return "string" == typeof t && 0 < t.length && (r = (n = t.split("="))[0], o = n[1], e[r] = o), e }, {}),
                    o = [];
                for (var a in r) Object(h.hasOwnProperty)(r, a) && o.push(a + "=" + encodeURIComponent(r[a]));
                return 0 < o.length ? n + "?" + o.join("&") : e
            }

            function P(e) {
                if ("string" != typeof e) return e;
                var t = e.split("?")[0],
                    n = e.split("?")[1];
                return t += ".html", void 0 !== n ? t + "?" + n : t
            }

            function M(e) { return "string" == typeof e ? -1 !== e.indexOf("?") ? e.replace(/\.html\?/, "?") : e.replace(/\.html$/, "") : e }
            var T = function(e) {
                    Object(a.default)(r, e);
                    var n = v(r);

                    function r(e) { var t; return Object(o.default)(this, r), (t = n.call(this, "APP-SERVICE-SDK:" + e)).type = "AppServiceSdkKnownError", t }
                    return r
                }(l(Error)),
                x = function(e) {
                    Object(a.default)(r, e);
                    var n = v(r);

                    function r(e) { var t; return Object(o.default)(this, r), (t = n.call(this, "" + e)).type = "ThirdScriptError", t }
                    return r
                }(l(Error));

            function E(e, t) { for (var n in t) e[n] = t[n]; return e }
            var D = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                R = R || function(e) {
                    for (var t, n, r = String(e), o = "", a = 0, i = D; r.charAt(0 | a) || (i = "=", a % 1); o += i.charAt(63 & t >> 8 - a % 1 * 8)) {
                        if (255 < (n = r.charCodeAt(a += .75))) throw new Error('"btoa" failed');
                        t = t << 8 | n
                    }
                    return o
                },
                B = B || function(e) {
                    var t = String(e).replace(/=+$/, ""),
                        n = "";
                    if (t.length % 4 == 1) throw new Error('"atob" failed');
                    for (var r, o, a = 0, i = 0; o = t.charAt(i++); ~o && (r = a % 4 ? 64 * r + o : o, a++ % 4) && (n += String.fromCharCode(255 & r >> (-2 * a & 6)))) o = D.indexOf(o);
                    return n
                };

            function F(e) { for (var t = "", n = new Uint8Array(e), r = n.byteLength, o = 0; o < r; o++) t += String.fromCharCode(n[o]); return R(t) }

            function L(e) { for (var t = B(e), n = t.length, r = new Uint8Array(n), o = 0; o < n; o++) r[o] = t.charCodeAt(o); return r.buffer }

            function N(e, t) {
                var n = new FileReader;
                n.onload = function() { t(this.result) }, n.readAsArrayBuffer(e)
            }

            function W(n) { return Object.keys(n).reduce(function(e, t) { return "string" == typeof n[t] ? e[t] = n[t] : "number" == typeof n[t] ? e[t] = n[t] + "" : e[t] = Object.prototype.toString.apply(n[t]), e }, {}) }

            function V() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) { var t = 16 * Math.random() | 0; return ("x" === e ? t : 3 & t | 8).toString(16) }) }
            var U = d.default.clientVersion || 1;

            function G(e, t) {
                switch (p.PLATFORM) {
                    case "devtools":
                        return !0;
                    case "ios":
                        return e < U;
                    case "android":
                        return t < U;
                    default:
                        return !1
                }
            }

            function q(e, t, n) {!1 !== Object(r.isObject)(e) && t !== n && Object(h.hasOwnProperty)(e, t) && (e[n] = e[t], delete e[t]) }

            function H(e, t) {
                e = e.split("."), t = t.split(".");
                for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");
                for (; t.length < n;) t.push("0");
                for (var r = 0; r < n; r++) {
                    var o = parseInt(e[r], 10),
                        a = parseInt(t[r], 10);
                    if (a < o) return 1;
                    if (o < a) return -1
                }
                return 0
            }

            function K() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length ? arguments[1] : void 0;
                "function" == typeof e.success && e.success(t), "function" == typeof e.complete && e.complete(t)
            }

            function z() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length ? arguments[1] : void 0,
                    n = t ? { errMsg: t } : void 0;
                "function" == typeof e.success && e.success(n), "function" == typeof e.complete && e.complete(n)
            }

            function J() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length ? arguments[1] : void 0,
                    n = t ? { errMsg: t } : void 0;
                "function" == typeof e.fail && e.fail(n), "function" == typeof e.complete && e.complete(n)
            }
        }, function(e, t, n) {
            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, R, B) {
            B.r(R),
                function(t) {
                    B.d(R, "getDataType", function() { return c }), B.d(R, "safeInstanceOf", function() { return e }), B.d(R, "isString", function() { return r }), B.d(R, "isNumber", function() { return o }), B.d(R, "isBoolean", function() { return a }), B.d(R, "isUndefined", function() { return i }), B.d(R, "isNull", function() { return u }), B.d(R, "isNaN", function() { return s }), B.d(R, "isFinite", function() { return l }), B.d(R, "isInfinity", function() { return f }), B.d(R, "isInteger", function() { return d }), B.d(R, "isObject", function() { return p }), B.d(R, "isNonNullObject", function() { return h }), B.d(R, "isJustObject", function() { return v }), B.d(R, "isArray", function() { return g }), B.d(R, "isFunction", function() { return b }), B.d(R, "isDate", function() { return y }), B.d(R, "isRegExp", function() { return m }), B.d(R, "isError", function() { return w }), B.d(R, "isSymbol", function() { return _ }), B.d(R, "isMap", function() { return k }), B.d(R, "isWeakMap", function() { return S }), B.d(R, "isSet", function() { return I }), B.d(R, "isWeakSet", function() { return O }), B.d(R, "isPromise", function() { return A }), B.d(R, "isEmptyObject", function() { return C }), B.d(R, "isArrayBuffer", function() { return j }), B.d(R, "isDataView", function() { return P }), B.d(R, "isTypedArray", function() { return M }), B.d(R, "isVirtualNode", function() { return T }), B.d(R, "isVirtualText", function() { return x }), B.d(R, "paramCheck", function() { return E }), B.d(R, "safelyToString", function() { return D });
                    var n = Object.prototype.toString;

                    function c(e) { return n.call(e).slice(8, -1) }

                    function e(e, t) { return null != e && (e instanceof t || null != e.constructor && e.constructor.name === t.name) }
                    var r = function(e) { return "String" === c(e) },
                        o = function(e) { return "Number" === c(e) },
                        a = function(e) { return !0 === e || !1 === e || "Boolean" === c(e) },
                        i = function(e) { return void 0 === e },
                        u = function(e) { return null === e },
                        s = Number.isNaN || function(e) { return e != e },
                        l = Number.isFinite || function(e) { return o(e) && t.isFinite(e) },
                        f = function(e) { return o(e) && Math.abs(e) === 1 / 0 },
                        d = function(e) { return l(e) && Math.floor(e) === e },
                        p = function(e) { return "Object" === c(e) },
                        h = function(e) { return p(e) && !u(e) },
                        v = function(e) { return "Object" === c(e) },
                        g = Array.isArray || function(e) { return "Array" === c(e) },
                        b = function(e) { return "function" == typeof e },
                        y = function(e) { return "Date" === c(e) },
                        m = function(e) { return "RegExp" === c(e) },
                        w = function(e) { return "Error" === c(e) },
                        _ = function(e) { return "Symbol" === c(e) },
                        k = function(e) { return "Map" === c(e) },
                        S = function(e) { return "WeakMap" === c(e) },
                        I = function(e) { return "Set" === c(e) },
                        O = function(e) { return "WeakSet" === c(e) },
                        A = function(e) { return "Promise" === c(e) },
                        C = function(e) { for (var t in e) return !1; return !0 },
                        j = function(e) { return "ArrayBuffer" === c(e) },
                        P = function(e) { return "DataView" === c(e) },
                        M = function(e) { return ArrayBuffer.isView(e) && !P(e) },
                        T = function(e) { return e && "WxVirtualNode" === e.type },
                        x = function(e) { return e && "WxVirtualText" === e.type };

                    function E(t, n) {
                        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "parameter",
                            e = c(n),
                            o = c(t);
                        if (o !== e) return r + " should be " + e + " instead of " + o + ";";
                        var a = "";
                        switch (e) {
                            case "Object":
                                Object.keys(n).forEach(function(e) { a += E(t[e], n[e], r + "." + e) });
                                break;
                            case "Array":
                                if (t.length < n.length) return r + " should have at least " + n.length + " item;";
                                for (var i = 0; i < n.length; ++i) a += E(t[i], n[i], r + "[" + i + "]")
                        }
                        return a
                    }

                    function D(e) { try { return JSON.stringify(e) } catch (e) { return e.message, "" } }
                }.call(this, B(33))
        }, function(e, t, n) {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function o(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }
            n.r(t), n.d(t, "default", function() { return o })
        }, function(e, t, n) {
            n.r(t), n.d(t, "guid", function() { return o }), n.d(t, "surroundByTryCatchFactory", function() { return a }), n.d(t, "noop", function() { return i }), n.d(t, "anyTypeToString", function() { return c }), n.d(t, "stringToAnyType", function() { return u }), n.d(t, "surroundByPromiseFactory", function() { return s }), n.d(t, "promised", function() { return l });
            var r = n(6);

            function o() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) { var t = 16 * Math.random() | 0; return ("x" === e ? t : 3 & t | 8).toString(16) }) }

            function a(e, t) { return function() { try { return e.apply(void 0, arguments) } catch (e) { if ("[object Error]" === Object.prototype.toString.apply(e)) { if ("AppServiceSdkKnownError" === e.type) throw e; "ThirdScriptError" === e.type ? Reporter.thirdErrorReport({ error: e, extend: t }) : Reporter.errorReport({ key: "appServiceSDKScriptError", error: e, extend: t }) } } } }

            function i() {}
            var c = a(function(e) { var t = Object(r.getDataType)(e); if ("Array" === t || "Object" === t) try { e = JSON.stringify(e) } catch (e) { throw e.type = "AppServiceSdkKnownError", e } else e = "String" === t || "Number" === t || "Boolean" === t ? e.toString() : "Date" === t ? e.getTime().toString() : "Undefined" === t ? "undefined" : "Null" === t ? "null" : ""; return { data: e, dataType: t } }, "anyTypeToString");
            var u = a(function(e, t) { return "String" === t ? e : e = "Array" === t || "Object" === t ? JSON.parse(e) : "Number" === t ? parseFloat(e) : "Boolean" === t ? "true" === e : "Date" === t ? new Date(parseInt(e, 10)) : "Undefined" === t ? void 0 : "Null" === t ? null : "" }, "stringToAnyType");

            function s(u) {
                return function() {
                    for (var r = this, o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length, a = new Array(1 < e ? e - 1 : 0), t = 1; t < e; t++) a[t - 1] = arguments[t];
                    var n = (o = o || {}).success,
                        i = o.fail,
                        c = o.complete;
                    return n || i || c ? u.apply(this, [o].concat(a)) : new Promise(function(e, t) {
                        var n = Object.assign({ success: e, fail: t }, o);
                        u.apply(r, [n].concat(a))
                    })
                }
            }

            function l(e, t, n) { var r = s(n.value); return n.value = function() { return r.apply(this, arguments) }, n }
        }, function(e, t, n) {
            function r(e) { return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, t, n) {
            n.r(t), n.d(t, "ImageData", function() { return o }), n.d(t, "concatId", function() { return a }), n.d(t, "subscribeOnce", function() { return u }), n.d(t, "uint8ClampedArrayToBase64", function() { return s }), n.d(t, "base64ToUint8ClampedArray", function() { return l }), n.d(t, "getImageRealPath", function() { return f }), n.d(t, "getImageRealPathForDevtools", function() { return d }), n.d(t, "wrapImageObject", function() { return p }), n.d(t, "normalizeTouch", function() { return h }), n.d(t, "injectExtraTouchInfo", function() { return v }), n.d(t, "pipe", function() { return g });
            var r = n(0),
                i = n(4),
                c = n(3),
                o = void 0 !== o ? o : function(e, t, n) { "[object Uint8ClampedArray]" === Object.prototype.toString.call(e) ? (Object.defineProperty(this, "data", { value: e, enumerable: !0 }), Object.defineProperty(this, "width", { value: t, enumerable: !0 }), Object.defineProperty(this, "height", { value: n, enumerable: !0 }), this.constructor.prototype.constructor = function() {}, this.__proto__ && "undefined" != typeof Symbol && (this.__proto__[Symbol.toStringTag] = "ImageData")) : console.error("parameter 1 is not of type 'Uint8ClampedArray'") };

            function a(e, t) {
                var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "",
                    r = "canvas_" + e + "_" + t + "_" + (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "") + "_";
                return n && n !== __virtualDOM__.getRootNodeId(e) && (r += n), r
            }

            function u(e) {
                var i = [],
                    n = 1;
                return Object(r.subscribe)(e, function(e) {
                        for (var t = -1, n = 0; n < i.length; n++) {
                            var r = i[n],
                                o = r[0],
                                a = r[1];
                            if (o.cid === e.cid && o.canvasId === e.canvasId) { t = n, a(e); break }
                        }
                        0 <= t && i.splice(t, 1)
                    }),
                    function(e, t) { e.cid = n++, i.push([e, t]) }
            }

            function s(e) { for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e[n]); return (window.__global || window).btoa(t) }

            function l(e) { for (var t = window.atob(e), n = t.length, r = new Uint8ClampedArray(n), o = 0; o < n; o++) r[o] = t.charCodeAt(o); return r }

            function f(e, t, n, r) { return /^(http|https):\/\//.test(e) || /^\s*data:image\//.test(e) || "" === e || /wxfile:\/\//.test(e) || (e = n || t ? (n = n.split("/")[0], a = (o = __virtualDOM__.getNodeById(t, r)) && o.is || "", n ? 0 === e.indexOf("/") ? __virtualDOM__.getPluginRoutePrefix(n) + Object(i.getRealRoute)(a, e, !1).replace(/\.html$/, "") : Object(i.getRealRoute)(__virtualDOM__.convertComponentAliasToRoute(a), e, !1).replace(/\.html$/, "") : Object(i.getRealRoute)(a, e, !1).replace(/\.html$/, "")) : Object(i.getRealRoute)(c.default.lastRoute, e, !1).replace(/.html$/, "")), e; var o, a }

            function d(e, t, n, r) { return /^(http|https):\/\//.test(e) || /^\s*data:image\//.test(e) || "" === e ? e : "/__pageframe__/" + f(e, t, n, r) }

            function p(e, n) {
                var r = e.setSrc.bind(e),
                    t = e.getSrc.bind(e),
                    o = e.getReferrerPolicy ? e.getReferrerPolicy.bind(e) : function() {},
                    a = e.setReferrerPolicy ? e.setReferrerPolicy.bind(e) : function() {};
                return delete e.getSrc, delete e.setSrc, delete e.getReferrerPolicy, delete e.setReferrerPolicy, Object.defineProperty(e, "src", {
                    enumerable: !0,
                    set: function(e) {
                        var t = f(e, n.nodeId, n.pluginId, n.webviewId);
                        r(t)
                    },
                    get: function() { return t() }
                }), Object.defineProperty(e, "referrerPolicy", { enumerable: !0, set: function(e) { a(e) }, get: function() { return o() } }), e
            }

            function h(e) { return e && 0 < e.length && e.forEach(function(e) { e.x = e.clientX || e.pageX, e.y = e.clientY || e.pageY, delete e.target }), e }

            function v(e) { return e && 0 < e.length && e.forEach(function(e) { e.clientX = e.x, e.clientY = e.y, e.pageX = e.x, e.pageY = e.y }), e }

            function g() { for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++) i[t] = arguments[t]; return function() { for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; for (var o = 0; o < i.length; ++o) { var a = i[o]; "function" == typeof a && (e = 0 === o ? a.apply(null, n) : a.call(null, e)) } return e } }
        }, function(e, t, n) {
            function r(n, r, e, t, o) { var a = {}; return Object.keys(t).forEach(function(e) { a[e] = t[e] }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = e.slice().reverse().reduce(function(e, t) { return t(n, r, e) || e }, a), o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(n, r, a), a = null), a }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, t, n) {
            n.r(t), n.d(t, "surroundByTryCatchFactory", function() { return f }), n.d(t, "surroundWXByTryCatch", function() { return d }), n.d(t, "timeout", function() { return p }), n.d(t, "deepFreeze", function() { return h }), n.d(t, "EventEmitter", function() { return v }), n.d(t, "getDataLength", function() { return g }), n.d(t, "checkAPIAvailable", function() { return b }), n.d(t, "isGame", function() { return y }), n.d(t, "isApp", function() { return m }), n.d(t, "promisify", function() { return w }), n.d(t, "transformToCamelCaseVar", function() { return _ }), n.d(t, "transformToUnderScoreCaseVar", function() { return k }), n.d(t, "capitalizeFirstLetter", function() { return S }), n.d(t, "skipURLCheck", function() { return I }), n.d(t, "versionCompare", function() { return O }), n.d(t, "executeOnlyOnce", function() { return A }), n.d(t, "filterObject", function() { return C }), n.d(t, "hideInnerRequest", function() { return j }), n.d(t, "isSinglePageMode", function() { return P }), n.d(t, "isIn3rdApp", function() { return M }), n.d(t, "isIsolateContext", function() { return T }), n.d(t, "compareClientVersion", function() { return x });
            var r = n(5),
                o = n(7),
                a = n(18),
                i = n(14),
                c = n(1),
                u = n(21),
                s = n(2),
                l = n(6);

            function f(e, t, n) { return function() { try { return e.apply(e, arguments) } catch (e) { if ("[object Error]" === Object.prototype.toString.apply(e)) { if ("AppServiceSdkKnownError" === e.type) throw e; "ThirdScriptError" === e.type ? Reporter.thirdErrorReport({ error: e, extend: t }) : Reporter.errorReport({ key: n, error: e, extend: t }) } } } }
            var d = function(e, t) { var n = {}; for (var r in e) ! function(e, t, n, r) { Object.defineProperty(e, n, { get: function() { var e = this; return "function" == typeof t[n] ? f(function() { return Object(u.checkWxInterfaceSupported)(n), Object(u.wrappedByCheckPermissionInTap)(n, t[n]).apply(e, arguments) }, "wx." + n, r) : t[n] }, enumerable: !0, configurable: !0 }) }(n, e, r, t); return n },
                p = function(e, n) {
                    var r, o, t, a = n.timeout;
                    "number" == typeof a ? (r = !1, o = setTimeout(function() {
                        var e = { errMsg: "request timeout" };
                        r = !0, "function" == typeof n.fail && n.fail(e), "function" == typeof n.complete && n.complete(e)
                    }, a), t = ["success", "fail", "complete"].reduce(function(e, t) { return e[t] = function(e) { r || (clearTimeout(o), "function" == typeof n[t] && n[t](e)) }, e }, {}), e(Object.assign({}, n, t))) : e(n)
                };

            function h(n) { return Object.freeze(n), Object.getOwnPropertyNames(n).forEach(function(e) { var t; try { t = n[e] } catch (e) {} "object" !== Object(a.default)(t) && "function" != typeof t || Object.isFrozen(t) || h(t) }), n }
            var v = function() {
                function t() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : { maxListeners: 2e3 };
                    Object(r.default)(this, t), this.emitter = new i.default(e), this.callbackMap = "undefined" != typeof WeakMap ? new WeakMap : {}, this.originalCallbackMap = new WeakMap
                }
                return Object(o.default)(t, [{ key: "emit", value: function(e, t) { this.emitter.emit(e, t) } }, {
                    key: "on",
                    value: function(e, t) {
                        var n;
                        t && "function" == typeof t && (n = __errorTracer__.surroundThirdByTryCatch(t, "at " + e + " callback function"), this.callbackMap.set(t, n), this.originalCallbackMap.set(n, t), this.emitter.on(e, n))
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        var n, r = this;
                        t && "function" == typeof t ? (n = this.callbackMap.get(t), this.emitter.off(e, n), this.callbackMap.delete(t), this.originalCallbackMap.delete(n)) : (this.emitter.listeners(e).forEach(function(e) {
                            var t = r.originalCallbackMap.get(e);
                            r.callbackMap.delete(t), r.originalCallbackMap.delete(e)
                        }), this.emitter.removeAllListeners(e))
                    }
                }, { key: "listeners", value: function(e) { return this.emitter.listeners(e) } }]), t
            }();

            function g(e) { return "string" == typeof e ? e.length : "object" === Object(a.default)(e) && null !== e && "number" == typeof e.byteLength ? e.byteLength : 0 }

            function b(e) { var t, n = "unknown"; return c.default.appContactInfo && c.default.appContactInfo.operationInfo && c.default.appContactInfo.operationInfo.jsonInfo && c.default.appContactInfo.operationInfo.jsonInfo.apiAvailable && ("number" == typeof(t = c.default.appContactInfo.operationInfo.jsonInfo.apiAvailable)[e] && (n = 1 === t[e])), n }

            function y() { return 4 === c.default.appType }

            function m() { return 0 === c.default.appType }

            function w(r) { return function() { var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; return new Promise(function(e, t) { r(Object.assign(n, { success: e, fail: t })) }) } }

            function _(e) { return e.replace(/_+(\w)/g, function() { return arguments[2] ? arguments[1].toUpperCase() : arguments[0] }) }

            function k(e) { return e.split(/(?=[A-Z])/).join("_").toLowerCase() }

            function S(e) { return e.charAt(0).toUpperCase() + e.slice(1) }

            function I() { return s.IS_DEVTOOLS ? !c.default.urlCheck : !0 === c.default.debug }

            function O(e, t) {
                var n, r = 1,
                    o = -1,
                    a = 0,
                    i = String(e).split(".").map(function(e) { return parseInt(e, 10) }),
                    c = String(t).split(".").map(function(e) { return parseInt(e, 10) }),
                    u = Math.max(i.length, c.length);
                if (null != e && null != t) { if (0 === e.length && 0 === t.length) return a; if (0 === e.length) return o; if (0 === t.length) return r; for (var s = 0; s < u && (n = function(e, t) { "number" != typeof e && (e = 0); "number" != typeof t && (t = 0); return t < e ? r : e < t ? o : a }(i[s], c[s])) === a; s++); return n }
                console.error("versionCompare()参数格式错误")
            }

            function A(e) { var t = !1; return function() { if (!t) return t = !0, e.apply(void 0, arguments) } }

            function C(n, e) { return e.reduce(function(e, t) { return Object(l.isUndefined)(n[t]) || (e[t] = n[t]), e }, {}) }

            function j(e) { return s.IS_DEVTOOLS && "string" == typeof e && /^https?:\/\//.test(e) && (r = 0 < (n = (t = e.split("?"))[1] || "").length ? "&" : "", e = t[0] + "?" + n + r + "devtools_ignore=true"), e; var t, n, r }

            function P() { return c.default.appLaunchInfo && "singlePage" === c.default.appLaunchInfo.mode }

            function M() { var e = c.default.host; return e && "WeChat" !== e.env && "WMPF" !== e.env }
            var T = function() { return c.default.isIsolateContext };

            function x(e, t) {
                function n(e) { if ("string" != typeof e) return "number" == typeof e ? 268435455 & e : e; for (var t = e.split(".").map(function(e) { return parseInt(e, 10) }); t.length < 4;) t.push(0); return function(e) { for (var t = e.length, n = 0, r = 0; r < t; ++r) n = n << 8 | e[r]; return n }(t.slice(0, 4)) }
                return e = n(e), (t = n(t)) < e ? 1 : e < t ? -1 : 0
            }
        }, function(e, t, n) {
            n.r(t);
            var r = "undefined" != typeof NativeGlobal ? NativeGlobal : {};
            t.default = r
        }, function(e, t, n) {
            n.r(t), n.d(t, "EventEmitter2", function() { return a });
            var u = n(18),
                s = Array.isArray ? Array.isArray : function(e) { return "[object Array]" === Object.prototype.toString.call(e) },
                r = 20;

            function l() { this._events = {}, this._conf && o.call(this, this._conf) }

            function o(e) { e ? ((this._conf = e).delimiter && (this.delimiter = e.delimiter), this._maxListeners = void 0 !== e.maxListeners ? e.maxListeners : r, e.newListener && (this._newListener = e.newListener), e.removeListener && (this._removeListener = e.removeListener)) : this._maxListeners = r }

            function a(e) { this._events = {}, this._newListener = !1, this._removeListener = !1, o.call(this, e) }
            a.prototype.delimiter = ".", a.prototype.setMaxListeners = function(e) { void 0 !== e && (this._maxListeners = e, this._conf || (this._conf = {}), this._conf.maxListeners = e) }, a.prototype.event = "", a.prototype.once = function(e, t) { return this._once(e, t, !1) }, a.prototype.prependOnceListener = function(e, t) { return this._once(e, t, !0) }, a.prototype._once = function(e, t, n) { return this._many(e, 1, t, n), this }, a.prototype.many = function(e, t, n) { return this._many(e, t, n, !1) }, a.prototype.prependMany = function(e, t, n) { return this._many(e, t, n, !0) }, a.prototype._many = function(e, t, n, r) {
                var o = this;
                if ("function" != typeof n) throw new Error("many only accepts instances of Function");

                function a() { return 0 == --t && o.off(e, a), n.apply(this, arguments) }
                return a._origin = n, this._on(e, a, r), o
            }, a.prototype.emit = function() {
                this._events || l.call(this);
                var e = arguments[0];
                if ("newListener" === e && !this._newListener && !this._events.newListener) return !1;
                var t, n, r, o, a, i = arguments.length;
                if (this._all && this._all.length) {
                    if (a = this._all.slice(), 3 < i)
                        for (t = new Array(i), o = 0; o < i; o++) t[o] = arguments[o];
                    for (r = 0, n = a.length; r < n; r++) switch (this.event = e, i) {
                        case 1:
                            a[r].call(this, e);
                            break;
                        case 2:
                            a[r].call(this, e, arguments[1]);
                            break;
                        case 3:
                            a[r].call(this, e, arguments[1], arguments[2]);
                            break;
                        default:
                            a[r].apply(this, t)
                    }
                }
                if ("function" == typeof(a = this._events[e])) {
                    switch (this.event = e, i) {
                        case 1:
                            a.call(this);
                            break;
                        case 2:
                            a.call(this, arguments[1]);
                            break;
                        case 3:
                            a.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            for (t = new Array(i - 1), o = 1; o < i; o++) t[o - 1] = arguments[o];
                            a.apply(this, t)
                    }
                    return !0
                }
                if ((a = a && a.slice()) && a.length) {
                    if (3 < i)
                        for (t = new Array(i - 1), o = 1; o < i; o++) t[o - 1] = arguments[o];
                    for (r = 0, n = a.length; r < n; r++) switch (this.event = e, i) {
                        case 1:
                            a[r].call(this);
                            break;
                        case 2:
                            a[r].call(this, arguments[1]);
                            break;
                        case 3:
                            a[r].call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            a[r].apply(this, t)
                    }
                    return !0
                }
                if (!this._all && "error" === e) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
                return !!this._all
            }, a.prototype.emitAsync = function() {
                this._events || l.call(this);
                var e = arguments[0];
                if ("newListener" === e && !this._newListener && !this._events.newListener) return Promise.resolve([!1]);
                var t, n, r, o, a, i = [],
                    c = arguments.length;
                if (this._all) {
                    if (3 < c)
                        for (t = new Array(c), o = 1; o < c; o++) t[o] = arguments[o];
                    for (r = 0, n = this._all.length; r < n; r++) switch (this.event = e, c) {
                        case 1:
                            i.push(this._all[r].call(this, e));
                            break;
                        case 2:
                            i.push(this._all[r].call(this, e, arguments[1]));
                            break;
                        case 3:
                            i.push(this._all[r].call(this, e, arguments[1], arguments[2]));
                            break;
                        default:
                            i.push(this._all[r].apply(this, t))
                    }
                }
                if ("function" == typeof(a = this._events[e])) switch (this.event = e, c) {
                    case 1:
                        i.push(a.call(this));
                        break;
                    case 2:
                        i.push(a.call(this, arguments[1]));
                        break;
                    case 3:
                        i.push(a.call(this, arguments[1], arguments[2]));
                        break;
                    default:
                        for (t = new Array(c - 1), o = 1; o < c; o++) t[o - 1] = arguments[o];
                        i.push(a.apply(this, t))
                } else if (a && a.length) {
                    if (a = a.slice(), 3 < c)
                        for (t = new Array(c - 1), o = 1; o < c; o++) t[o - 1] = arguments[o];
                    for (r = 0, n = a.length; r < n; r++) switch (this.event = e, c) {
                        case 1:
                            i.push(a[r].call(this));
                            break;
                        case 2:
                            i.push(a[r].call(this, arguments[1]));
                            break;
                        case 3:
                            i.push(a[r].call(this, arguments[1], arguments[2]));
                            break;
                        default:
                            i.push(a[r].apply(this, t))
                    }
                } else if (!this._all && "error" === e) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
                return Promise.all(i)
            }, a.prototype.on = function(e, t) { return this._on(e, t, !1) }, a.prototype.prependListener = function(e, t) { return this._on(e, t, !0) }, a.prototype.onAny = function(e) { return this._onAny(e, !1) }, a.prototype.prependAny = function(e) { return this._onAny(e, !0) }, a.prototype.addListener = a.prototype.on, a.prototype._onAny = function(e, t) { if ("function" != typeof e) throw new Error("onAny only accepts instances of Function"); return this._all || (this._all = []), t ? this._all.unshift(e) : this._all.push(e), this }, a.prototype._on = function(e, t, n) { if ("function" == typeof e) return this._onAny(e, t), this; if ("function" != typeof t) throw new Error("on only accepts instances of Function"); return this._events || l.call(this), this._newListener && this.emit("newListener", e, t), this._events[e] ? ("function" == typeof this._events[e] && (this._events[e] = [this._events[e]]), n ? this._events[e].unshift(t) : this._events[e].push(t), !this._events[e].warned && 0 < this._maxListeners && this._events[e].length > this._maxListeners && (this._events[e].warned = !0, function(e, t) { console.warn("[Event] " + e + " listeners of event " + t + " have been added, possibly causing memory leak.") }.call(this, this._events[e].length, e))) : this._events[e] = t, this }, a.prototype.off = function(e, t) {
                if ("function" != typeof t) throw new Error("removeListener only takes instances of Function");
                var n = [];
                if (!this._events[e]) return this;
                o = this._events[e], n.push({ _listeners: o });
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]._listeners;
                    if (s(o)) {
                        for (var a = -1, i = 0, c = o.length; i < c; i++)
                            if (o[i] === t || o[i].listener && o[i].listener === t || o[i]._origin && o[i]._origin === t) { a = i; break }
                        if (a < 0) continue;
                        return this._events[e].splice(a, 1), 0 === o.length && delete this._events[e], this._removeListener && this.emit("removeListener", e, t), this
                    }(o === t || o.listener && o.listener === t || o._origin && o._origin === t) && (delete this._events[e], this._removeListener && this.emit("removeListener", e, t))
                }
                return function e(t) {
                    if (void 0 !== t) {
                        var n = Object.keys(t);
                        for (var r in n) {
                            var o = n[r],
                                a = t[o];
                            a instanceof Function || "object" !== Object(u.default)(a) || null === a || (0 < Object.keys(a).length && e(t[o]), 0 === Object.keys(a).length && delete t[o])
                        }
                    }
                }(this.listenerTree), this
            }, a.prototype.offAny = function(e) {
                var t, n = 0,
                    r = 0;
                if (e && this._all && 0 < this._all.length) {
                    for (n = 0, r = (t = this._all).length; n < r; n++)
                        if (e === t[n]) return t.splice(n, 1), this._removeListener && this.emit("removeListenerAny", e), this
                } else {
                    if (t = this._all, this._removeListener)
                        for (n = 0, r = t.length; n < r; n++) this.emit("removeListenerAny", t[n]);
                    this._all = []
                }
                return this
            }, a.prototype.removeListener = a.prototype.off, a.prototype.removeAllListeners = function(e) { return void 0 === e ? this._events && l.call(this) : this._events && (this._events[e] = null), this }, a.prototype.listeners = function(e) { return this._events || l.call(this), this._events[e] || (this._events[e] = []), s(this._events[e]) || (this._events[e] = [this._events[e]]), this._events[e] }, a.prototype.eventNames = function() { return Object.keys(this._events) }, a.prototype.listenerCount = function(e) { return this.listeners(e).length }, a.prototype.listenersAny = function() { return this._all ? this._all : [] }, t.default = a
        }, function(e, t, n) {
            n.r(t), n.d(t, "default", function() { return o });
            var r = n(50);

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Object(r.default)(e, t)
            }
        }, function(e, t, n) {
            n.r(t), n.d(t, "getEventManager", function() { return o });
            var i = n(18),
                r = n(14),
                c = new r.default({ maxListeners: 20, newListener: !1 }),
                u = new r.default({ maxListeners: 20, newListener: !1 });
            var s = {};

            function o(o) {
                var a;
                return o = o[0].toUpperCase() + o.slice(1), s[o] || (a = new WeakMap, s[o] = {
                    getGlobalListeners: function() { return c.listeners(o) },
                    getInternalListeners: function() { return u.listeners(o) },
                    emit: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        u.emit.apply(u, [o].concat(t)), c.emit.apply(c, [o].concat(t))
                    },
                    emitGlobal: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        c.emit.apply(c, [o].concat(t))
                    },
                    emitInternal: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        u.emit.apply(u, [o].concat(t))
                    },
                    internalOnMethod: function(e, t) { var n = 1 < arguments.length && void 0 !== t ? t : {}; "function" == typeof e && (n.prepend ? n.once ? u.prependOnceListener(o, e) : u.prependListener(o, e) : n.once ? u.once(o, e) : u.on(o, e)) },
                    internalOffMethod: function(e) { "function" == typeof e && u.off(o, e) },
                    onMethod: function(e) {
                        var t, n, r = (t = o, "function" != typeof(n = e) ? (console.error("on" + t + " should accept a function instead of " + Object(i.default)(n)), null) : __errorTracer__.surroundThirdByTryCatch(n, "at api on" + t + " callback function"));
                        r && (a.set(e, r), c.on(o, r))
                    },
                    offMethod: function(e) {
                        var t, n, r;
                        t = o, (n = e) && "function" != typeof n ? console.error("off" + t + " should accept a function instead of " + Object(i.default)(n)) : e ? a.has(e) && (r = a.get(e), a.delete(e), c.off(o, r)) : (a = new WeakMap, c.removeAllListeners(o))
                    }
                }), s[o]
            }
        }, function(e, t, n) {
            n.r(t), n.d(t, "onNativeEvent", function() { return i }), n.d(t, "offNativeEvent", function() { return c });
            var r = n(61),
                o = n(16),
                a = {},
                i = function(e, t) {
                    var n = Object(o.getEventManager)("WeixinJSBridge-" + e);
                    a[e] || (Object(r.onMethod)(e, function() { n.emit.apply(n, arguments) }), a[e] = !0), n.internalOnMethod(t)
                },
                c = function(e, t) { Object(o.getEventManager)("WeixinJSBridge-" + e).internalOffMethod(t) }
        }, function(e, t, n) {
            function r(e) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, t, n) {
            n.r(t), n.d(t, "default", function() { return a });
            var r = n(18),
                o = n(41);

            function a(e, t) { return !t || "object" !== Object(r.default)(t) && "function" != typeof t ? Object(o.default)(e) : t }
        }, function(e, t, n) {
            function r(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, t, n) {
            n.r(t), n.d(t, "publish", function() { return b.publish }), n.d(t, "subscribe", function() { return b.subscribe }), n.d(t, "getSurroundedCallbacks", function() { return b.getSurroundedCallbacks }), n.d(t, "callbackInvoke", function() { return b.callbackInvoke }), n.d(t, "invokeMethod", function() { return b.invokeMethod }), n.d(t, "invokeMethodWithPlugin", function() { return b.invokeMethodWithPlugin }), n.d(t, "_invokeMethod", function() { return b._invokeMethod }), n.d(t, "onMethod", function() { return b.onMethod }), n.d(t, "beforeInvoke", function() { return b.beforeInvoke }), n.d(t, "beforeInvokeFail", function() { return b.beforeInvokeFail }), n.d(t, "beforeInvokeCallback", function() { return b.beforeInvokeCallback }), n.d(t, "invoke", function() { return b.invoke }), n.d(t, "on", function() { return b.on }), n.d(t, "operateWXDataFactory", function() { return a.default }), n.d(t, "noop", function() { return i }), n.d(t, "checkUrlInConfig", function() { return c }), n.d(t, "setWxInterfaceDisabled", function() { return s }), n.d(t, "checkWxInterfacePermission", function() { return l }), n.d(t, "checkWxInterfaceSupported", function() { return y }), n.d(t, "setWxInterfaceIsInvokeInTap", function() { return w }), n.d(t, "unsetWxInterfaceIsInvokeInTap", function() { return _ }), n.d(t, "wrappedByCheckPermissionInTap", function() { return I });
            var f = n(18),
                o = n(4),
                d = n(2),
                p = n(70),
                r = { sample: { invokeWebviewMethod: null, drawCanvas: null, createContext: null, createCanvasContext: null, canvasToTempFilePath: null, canvasGetImageData: null, canvasPutImageData: null, getShareInfo: null, pageScrollTo: null, chooseInvoiceTitle: null, ShareInfoStorage: null, arrayBufferToBase64: null, base64ToArrayBuffer: null, openSetting: null, getExtConfig: null, chooseMedia: null, chooseWeChatContact: null, uploadEncryptedFileToCDN: null, onUploadEncryptedFileToCDNProgress: null, getExtConfigSync: null, showShareMenu: null, hideShareMenu: null, updateShareMenu: null, openUrl: null, setNavigationBarColor: null, setNavigationBarAlpha: null, _getRealRoute: null, vibrateShort: null, vibrateLong: null, getSetting: null, checkIsSupportFacialRecognition: null, startFacialRecognitionVerify: null, startFacialRecognitionVerifyAndUploadVideo: null, sendBizRedPacket: null, sendGoldenRedPacket: null, openGoldenRedPacketDetail: null, showRedPackage: null, addPhoneContact: null, setScreenBrightness: null, getScreenBrightness: null, getWeRunData: null, uploadWeRunData: null, canIUse: null, setPageStyle: null, triggerGettingWidgetData: null, navigateToMiniProgram: null, navigateToDevMiniProgram: null, navigateBackMiniProgram: null, exitMiniProgram: null, setNavigationBarRightButton: null, onTapNavigationBarRightButton: null, setTopBarText: null, setTabBarBadge: null, removeTabBarBadge: null, showTabBarRedDot: null, hideTabBarRedDot: null, showTabBar: null, hideTabBar: null, setTabBarStyle: null, setTabBarItem: null, setEnableDebug: null, captureScreen: null, onUserCaptureScreen: null, setKeepScreenOn: null, checkIsSupportSoterAuthentication: null, startSoterAuthentication: null, checkIsSoterEnrolledInDevice: null, openDeliveryList: null, reportIDKey: null, reportKeyValue: null, setNavigationBarTitle: null, showNavigationBarLoading: null, hideNavigationBarLoading: null, startPullDownRefresh: null, stopPullDownRefresh: null, operateWXData: null, getOpenDeviceId: null, makeBluetoothPair: null, openBluetoothAdapter: null, closeBluetoothAdapter: null, getBluetoothAdapterState: null, startBluetoothDevicesDiscovery: null, stopBluetoothDevicesDiscovery: null, getBluetoothDevices: null, getConnectedBluetoothDevices: null, createBLEConnection: null, setBLEMTU: null, closeBLEConnection: null, getBLEDeviceServices: null, getBLEDeviceCharacteristics: null, notifyBLECharacteristicValueChanged: null, notifyBLECharacteristicValueChange: null, readBLECharacteristicValue: null, writeBLECharacteristicValue: null, onBluetoothDeviceFound: null, onBLEConnectionStateChanged: null, onBLEConnectionStateChange: null, onBLECharacteristicValueChange: null, onBluetoothAdapterStateChange: null, offBluetoothAdapterStateChange: null, offBluetoothDeviceFound: null, offBLEConnectionStateChanged: null, offBLEConnectionStateChange: null, offBLECharacteristicValueChange: null, createBLEPeripheralServer: null, onBLEPeripheralConnectionStateChanged: null, offBLEPeripheralConnectionStateChanged: null, startBeaconDiscovery: null, stopBeaconDiscovery: null, getBeacons: null, onBeaconUpdate: null, onBeaconServiceChange: null, startWifi: null, stopWifi: null, getWifiList: null, getConnectedWifi: null, connectWifi: null, presetWifiList: null, setWifiList: null, onGetWifiList: null, onWifiConnected: null, offGetWifiList: null, offWifiConnected: null, onEvaluateWifi: null, getHCEState: null, startHCE: null, stopHCE: null, sendHCEMessage: null, onHCEMessage: null, startLocalServiceDiscovery: null, stopLocalServiceDiscovery: null, onLocalServiceFound: null, offLocalServiceFound: null, onLocalServiceLost: null, offLocalServiceLost: null, onLocalServiceDiscoveryStop: null, offLocalServiceDiscoveryStop: null, onLocalServiceResolveFail: null, offLocalServiceResolveFail: null, redirectTo: null, reLaunch: null, navigateTo: null, switchTab: null, navigateBack: null, _triggerBeforeUnloadPage: null, _triggerBeforeShareAppMessage: null, navigateBackApplication: null, navigateBackNative: null, launchApplication: null, getStorage: null, getStorageSync: null, setStorage: null, setStorageSync: null, removeStorage: null, removeStorageSync: null, clearStorage: null, clearStorageSync: null, getStorageInfo: null, getStorageInfoSync: null, getBackgroundFetchData: null, onBackgroundFetchData: null, request: null, connectSocket: null, closeSocket: null, sendSocketMessage: null, onSocketOpen: null, onSocketClose: null, onSocketMessage: null, onSocketError: null, uploadFile: null, downloadFile: null, addNativeDownloadTask: null, chooseImage: null, previewImage: null, previewMedia: null, getImageInfo: null, saveImageToPhotosAlbum: null, startRecord: null, stopRecord: null, playVoice: null, pauseVoice: null, stopVoice: null, onVoicePlayEnd: null, chooseVideo: null, saveVideoToPhotosAlbum: null, getVideoInfo: null, compressVideo: null, getLocation: null, openLocation: null, chooseLocation: null, onLocationChange: null, offLocationChange: null, startLocationUpdateBackground: null, startLocationUpdate: null, stopLocationUpdate: null, getNetworkType: null, onNetworkStatusChange: null, getSystemInfo: null, getSystemInfoSync: null, getBatteryInfo: null, getBatteryInfoSync: null, startAccelerometer: null, stopAccelerometer: null, onAccelerometerChange: null, startCompass: null, stopCompass: null, onCompassChange: null, reportAction: null, getBackgroundAudioManager: null, getRecorderManager: null, getBackgroundAudioPlayerState: null, playBackgroundAudio: null, pauseBackgroundAudio: null, seekBackgroundAudio: null, stopBackgroundAudio: null, onBackgroundAudioPlay: null, onBackgroundAudioPause: null, onBackgroundAudioStop: null, join1v1Chat: null, setEnable1v1Chat: null, joinVoIPChat: null, exitVoIPChat: null, updateVoIPChatMuteConfig: null, onVoIPChatMembersChanged: null, onVoIPChatSpeakersChanged: null, onVoIPChatInterrupted: null, offVoIPChatMembersChanged: null, offVoIPChatSpeakersChanged: null, offVoIPChatInterrupted: null, onVoIPVideoMembersChanged: null, offVoIPVideoMembersChanged: null, subscribeVoIPVideoMembers: null, login: null, checkSession: null, authorize: null, getUserInfo: null, requestFacetoFacePayment: null, requestPayment: null, requestJointPayment: null, getWCPayOverseaPrepayRequest: null, requestH5Transaction: null, openWCPayOverseaPaymentReceive: null, handleWCPayOverseaWalletBuffer: null, requestVerifyUserIdentity: null, verifyPaymentPassword: null, bindPaymentCard: null, requestPaymentToBank: null, requestVirtualPayment: null, openOfflinePayView: null, openWCPayCardList: null, requestMallPayment: null, addCard: null, openCard: null, scanCode: null, openQRCode: null, scanItem: null, chooseAddress: null, saveFile: null, openDocument: null, getSavedFileList: null, getSavedFileInfo: null, getFileInfo: null, removeSavedFile: null, getFileSystemManager: null, chooseContact: null, removeUserCloudStorage: null, setUserCloudStorage: null, makePhoneCall: null, makeVoIPCall: null, onAppRoute: null, onAppRouteDone: null, onAppEnterBackground: null, onAppEnterForeground: null, onAppUnhang: null, onPageReload: null, onPageNotFound: null, offPageNotFound: null, onThemeChange: null, offThemeChange: null, onAppShow: null, offAppShow: null, onAppHide: null, offAppHide: null, onError: null, offError: null, onUnhandledRejection: null, offUnhandledRejection: null, getLaunchOptionsSync: null, getEnterOptionsSync: null, createAnimation: null, createInnerAudioContext: null, createAudioContext: null, createVideoContext: null, createMapContext: null, createCameraContext: null, createLivePlayerContext: null, createLivePusherContext: null, onWebviewEvent: null, onNativeEvent: null, hideKeyboard: null, onKeyboardHeightChange: null, offKeyboardHeightChange: null, getPublicLibVersion: null, showModal: null, showToast: null, hideToast: null, showLoading: null, hideLoading: null, showActionSheet: null, reportAnalytics: null, getClipboardData: null, setClipboardData: null, createSelectorQuery: null, createIntersectionObserver: null, updatePerfData: null, traceEvent: null, onMemoryWarning: null, offMemoryWarning: null, getUpdateManager: null, createWorker: null, voiceSplitJoint: null, uploadSilkVoice: null, downloadSilkVoice: null, getResPath: null, setResPath: null, env: null, appStatus: null, hanged: null, getLogManager: null, getRealtimeLogManager: null, onWindowResize: null, offWindowResize: null, setPageOrientation: null, loadFontFace: null, setInnerAudioOption: null, addWeRunData: null, setBackgroundColor: null, setBackgroundTextStyle: null, getMenuButtonBoundingClientRect: null, calRqt: null, getAvailableAudioSources: null, reportMonitor: null, faceVerifyForPay: null, chooseInvoice: null, startDeviceMotionListening: null, stopDeviceMotionListening: null, onDeviceMotionChange: null, startGyroscope: null, stopGyroscope: null, onGyroscopeChange: null, secureTunnel: null, startCustomFacialRecognitionVerify: null, startCustomFacialRecognitionVerifyAndUploadVideo: null, getAccountInfoSync: null, setCookies: null, getCookies: null, nextTick: null, chooseMultiMedia: null, chooseMessageFile: null, getLabInfo: null, setLabInfo: null, compressImage: null, shareAppMessageForFakeNative: null, downloadApp: null, installDownloadApp: null, getAppInstallState: null, queryDownloadAppTask: null, cancelDownloadAppTask: null, resumeDownloadAppTask: null, pauseDownloadAppTask: null, onDownloadAppStateChange: null, downloadAppForIOS: null, offGyroscopeChange: null, offDeviceMotionChange: null, offCompassChange: null, offAccelerometerChange: null, offUserCaptureScreen: null, offNetworkStatusChange: null, offHCEMessage: null, offBeaconUpdate: null, offBeaconServiceChange: null, requestSubscribeMessage: null, hideHomeButton: null, getBLEDeviceRSSI: null, checkIsOpenAccessibility: null, updateWeChatApp: null }, ui: { invokeWebviewMethod: 0, drawCanvas: 20, createContext: 20, createCanvasContext: 20, canvasToTempFilePath: 20, canvasGetImageData: 20, canvasPutImageData: 20, getShareInfo: 30, pageScrollTo: 30, chooseInvoiceTitle: 10, ShareInfoStorage: 10, arrayBufferToBase64: 10, base64ToArrayBuffer: 10, openSetting: 20, openSettingForPlugin: 30, getExtConfig: 0, chooseMedia: 20, chooseWeChatContact: 20, uploadEncryptedFileToCDN: 10, onUploadEncryptedFileToCDNProgress: 10, getExtConfigSync: 0, showShareMenu: 30, hideShareMenu: 30, updateShareMenu: 30, openUrl: 20, setNavigationBarColor: 30, setNavigationBarAlpha: 30, hideHomeButton: 30, _getRealRoute: 20, vibrateShort: 10, vibrateLong: 10, getSetting: 10, checkIsSupportFacialRecognition: 10, startFacialRecognitionVerify: 20, startFacialRecognitionVerifyAndUploadVideo: 20, sendBizRedPacket: 10, sendGoldenRedPacket: 10, openGoldenRedPacketDetail: 10, showRedPackage: 10, addPhoneContact: 10, setScreenBrightness: 20, getScreenBrightness: 20, getWeRunData: 10, uploadWeRunData: 10, addWeRunData: 10, canIUse: 0, setPageStyle: 30, triggerGettingWidgetData: 10, navigateToMiniProgram: 30, navigateToDevMiniProgram: 30, navigateBackMiniProgram: 30, exitMiniProgram: 30, setNavigationBarRightButton: 20, onTapNavigationBarRightButton: 20, setTopBarText: 30, setTabBarBadge: 30, removeTabBarBadge: 30, showTabBarRedDot: 30, hideTabBarRedDot: 30, showTabBar: 30, hideTabBar: 30, setTabBarStyle: 30, setTabBarItem: 30, setEnableDebug: 30, captureScreen: 30, onUserCaptureScreen: 30, offUserCaptureScreen: 30, setKeepScreenOn: 10, checkIsSupportSoterAuthentication: 10, startSoterAuthentication: 10, checkIsSoterEnrolledInDevice: 10, openDeliveryList: 20, reportIDKey: 0, reportKeyValue: 0, setNavigationBarTitle: 30, showNavigationBarLoading: 30, hideNavigationBarLoading: 30, startPullDownRefresh: 30, stopPullDownRefresh: 30, operateWXData: 10, getOpenDeviceId: 10, makeBluetoothPair: 10, openBluetoothAdapter: 10, closeBluetoothAdapter: 10, getBluetoothAdapterState: 10, startBluetoothDevicesDiscovery: 10, stopBluetoothDevicesDiscovery: 10, getBluetoothDevices: 10, getConnectedBluetoothDevices: 10, createBLEConnection: 10, setBLEMTU: 10, closeBLEConnection: 10, getBLEDeviceServices: 10, getBLEDeviceRSSI: 10, getBLEDeviceCharacteristics: 10, notifyBLECharacteristicValueChanged: 10, notifyBLECharacteristicValueChange: 10, readBLECharacteristicValue: 10, writeBLECharacteristicValue: 10, onBluetoothAdapterStateChange: 10, onBluetoothDeviceFound: 10, onBLEConnectionStateChanged: 10, onBLEConnectionStateChange: 10, onBLECharacteristicValueChange: 10, offBluetoothAdapterStateChange: 10, offBluetoothDeviceFound: 10, offBLEConnectionStateChanged: 10, offBLEConnectionStateChange: 10, offBLECharacteristicValueChange: 10, createBLEPeripheralServer: 10, onBLEPeripheralConnectionStateChanged: 10, offBLEPeripheralConnectionStateChanged: 10, startBeaconDiscovery: 10, stopBeaconDiscovery: 10, getBeacons: 10, onBeaconUpdate: 10, offBeaconUpdate: 10, onBeaconServiceChange: 10, offBeaconServiceChange: 10, startWifi: 10, stopWifi: 10, getWifiList: 10, getConnectedWifi: 10, connectWifi: 10, presetWifiList: 10, setWifiList: 10, onGetWifiList: 10, onWifiConnected: 10, offGetWifiList: 10, offWifiConnected: 10, onEvaluateWifi: 10, getHCEState: 10, startHCE: 10, stopHCE: 10, sendHCEMessage: 10, onHCEMessage: 10, offHCEMessage: 10, startLocalServiceDiscovery: 10, stopLocalServiceDiscovery: 10, onLocalServiceFound: 10, offLocalServiceFound: 10, onLocalServiceLost: 10, offLocalServiceLost: 10, onLocalServiceDiscoveryStop: 10, offLocalServiceDiscoveryStop: 10, onLocalServiceResolveFail: 10, offLocalServiceResolveFail: 10, redirectTo: 30, reLaunch: 30, navigateTo: 30, switchTab: 30, navigateBack: 30, _triggerBeforeUnloadPage: 30, _triggerBeforeShareAppMessage: 30, navigateBackApplication: 30, navigateBackNative: 0, launchApplication: 30, getStorage: 10, getStorageSync: 10, setStorage: 10, setStorageSync: 10, removeStorage: 10, removeStorageSync: 10, clearStorage: 10, clearStorageSync: 10, getStorageInfo: 10, getStorageInfoSync: 10, getBackgroundFetchData: 10, onBackgroundFetchData: 10, request: 10, connectSocket: 10, closeSocket: 10, sendSocketMessage: 10, onSocketOpen: 10, onSocketClose: 10, onSocketMessage: 10, onSocketError: 10, uploadFile: 10, downloadFile: 10, addNativeDownloadTask: 10, chooseImage: 20, previewImage: 20, previewMedia: 20, getImageInfo: 10, saveImageToPhotosAlbum: 10, startRecord: 20, stopRecord: 20, playVoice: 20, pauseVoice: 20, stopVoice: 20, onVoicePlayEnd: 20, chooseVideo: 20, saveVideoToPhotosAlbum: 10, getVideoInfo: 10, compressVideo: 10, getLocation: 20, openLocation: 20, chooseLocation: 20, onLocationChange: 20, offLocationChange: 20, startLocationUpdateBackground: 20, startLocationUpdate: 20, stopLocationUpdate: 20, getNetworkType: 0, onAppRoute: 30, onAppRouteDone: 30, onAppEnterBackground: 30, onAppEnterForeground: 30, onAppUnhang: 30, onPageReload: 30, onPageNotFound: 30, offPageNotFound: 30, onThemeChange: 10, offThemeChange: 10, onAppShow: 30, offAppShow: 30, onAppHide: 30, offAppHide: 30, onError: 30, offError: 30, onUnhandledRejection: 10, offUnhandledRejection: 10, getLaunchOptionsSync: 0, getEnterOptionsSync: 0, createAnimation: 0, createInnerAudioContext: 20, createAudioContext: 20, createVideoContext: 20, createMapContext: 20, createCameraContext: 20, createLivePlayerContext: 20, createLivePusherContext: 20, onWebviewEvent: 20, onNativeEvent: 20, hideKeyboard: 20, onKeyboardHeightChange: 20, offKeyboardHeightChange: 20, getPublicLibVersion: 0, showModal: 20, showToast: 20, hideToast: 20, showLoading: 20, hideLoading: 20, showActionSheet: 20, reportAnalytics: 10, getClipboardData: 20, setClipboardData: 20, createSelectorQuery: 0, createIntersectionObserver: 0, updatePerfData: 10, traceEvent: 10, onMemoryWarning: 10, offMemoryWarning: 10, getUpdateManager: 10, createWorker: 10, voiceSplitJoint: 10, uploadSilkVoice: 10, downloadSilkVoice: 10, getResPath: 0, setResPath: 0, env: 0, appStatus: 0, hanged: 0, getLogManager: 0, getRealtimeLogManager: 0, onWindowResize: 20, offWindowResize: 20, setPageOrientation: 30, loadFontFace: 20, setInnerAudioOption: 0, setBackgroundColor: 30, setBackgroundTextStyle: 30, getMenuButtonBoundingClientRect: 20, calRqt: 10, onNetworkStatusChange: 10, offNetworkStatusChange: 10, getSystemInfo: 10, getSystemInfoSync: 10, getBatteryInfo: 10, getBatteryInfoSync: 10, startAccelerometer: 10, stopAccelerometer: 10, onAccelerometerChange: 10, offAccelerometerChange: 10, startCompass: 10, stopCompass: 10, onCompassChange: 10, offCompassChange: 10, reportAction: 10, getBackgroundAudioManager: 10, getRecorderManager: 10, getBackgroundAudioPlayerState: 10, playBackgroundAudio: 10, pauseBackgroundAudio: 10, seekBackgroundAudio: 10, stopBackgroundAudio: 10, onBackgroundAudioPlay: 10, onBackgroundAudioPause: 10, onBackgroundAudioStop: 10, join1v1Chat: 10, setEnable1v1Chat: 10, joinVoIPChat: 10, exitVoIPChat: 10, updateVoIPChatMuteConfig: 10, onVoIPChatMembersChanged: 10, onVoIPChatSpeakersChanged: 10, onVoIPChatInterrupted: 10, offVoIPChatMembersChanged: 10, offVoIPChatSpeakersChanged: 10, offVoIPChatInterrupted: 10, onVoIPVideoMembersChanged: 10, offVoIPVideoMembersChanged: 10, subscribeVoIPVideoMembers: 10, login: 10, checkSession: 10, authorize: 20, getUserInfo: 20, requestFacetoFacePayment: 20, requestPayment: 20, verifyPaymentPassword: 20, bindPaymentCard: 20, requestPaymentToBank: 20, requestJointPayment: 20, getWCPayOverseaPrepayRequest: 20, requestH5Transaction: 20, openWCPayOverseaPaymentReceive: 20, handleWCPayOverseaWalletBuffer: 20, requestVerifyUserIdentity: 20, requestVirtualPayment: 20, openOfflinePayView: 20, openWCPayCardList: 20, requestMallPayment: 20, addCard: 20, openCard: 20, scanCode: 20, openQRCode: 20, scanItem: 20, chooseAddress: 20, saveFile: 10, openDocument: 20, getSavedFileList: 10, getSavedFileInfo: 10, getFileInfo: 10, removeSavedFile: 10, getFileSystemManager: 10, chooseContact: 20, removeUserCloudStorage: 10, setUserCloudStorage: 10, makePhoneCall: 20, makeVoIPCall: 20, getAvailableAudioSources: 10, reportMonitor: 10, faceVerifyForPay: 30, chooseInvoice: 20, startDeviceMotionListening: 10, stopDeviceMotionListening: 10, onDeviceMotionChange: 10, offDeviceMotionChange: 10, startGyroscope: 10, stopGyroscope: 10, onGyroscopeChange: 10, offGyroscopeChange: 10, secureTunnel: 10, startCustomFacialRecognitionVerify: 10, startCustomFacialRecognitionVerifyAndUploadVideo: 10, getAccountInfoSync: 0, setCookies: 10, getCookies: 10, nextTick: 0, chooseMultiMedia: 20, chooseMessageFile: 20, getLabInfo: 10, setLabInfo: 10, compressImage: 0, enterContact: 20, shareAppMessageForFakeNative: 20, checkIsOpenAccessibility: 10, updateWeChatApp: 10 }, log: { invokeWebviewMethod: 0, drawCanvas: 0, createContext: 0, createCanvasContext: 2, canvasToTempFilePath: 2, canvasGetImageData: 2, canvasPutImageData: 2, getShareInfo: 1, pageScrollTo: 1, chooseInvoiceTitle: 1, ShareInfoStorage: 0, arrayBufferToBase64: 0, base64ToArrayBuffer: 0, openSetting: 1, requestSubscribeMessage: 1, getExtConfig: 1, chooseMedia: 0, chooseWeChatContact: 0, uploadEncryptedFileToCDN: 0, onUploadEncryptedFileToCDNProgress: 0, getExtConfigSync: 2, showShareMenu: 1, hideShareMenu: 1, updateShareMenu: 1, openUrl: 0, setNavigationBarColor: 1, setNavigationBarAlpha: 0, hideHomeButton: 1, _getRealRoute: 0, vibrateShort: 1, vibrateLong: 1, getSetting: 1, checkIsSupportFacialRecognition: 0, startFacialRecognitionVerify: 0, startFacialRecognitionVerifyAndUploadVideo: 0, sendBizRedPacket: 0, sendGoldenRedPacket: 0, openGoldenRedPacketDetail: 0, showRedPackage: 1, addPhoneContact: 1, setScreenBrightness: 1, getScreenBrightness: 1, getWeRunData: 1, canIUse: 1, setPageStyle: 0, triggerGettingWidgetData: 0, navigateToMiniProgram: 1, navigateToDevMiniProgram: 0, navigateBackMiniProgram: 1, exitMiniProgram: 1, setNavigationBarRightButton: 0, onTapNavigationBarRightButton: 0, setTopBarText: 1, setTabBarBadge: 1, removeTabBarBadge: 1, showTabBarRedDot: 1, hideTabBarRedDot: 1, showTabBar: 1, hideTabBar: 1, setTabBarStyle: 1, setTabBarItem: 1, setEnableDebug: 1, captureScreen: 0, onUserCaptureScreen: 3, setKeepScreenOn: 1, checkIsSupportSoterAuthentication: 1, startSoterAuthentication: 1, checkIsSoterEnrolledInDevice: 1, openDeliveryList: 0, reportIDKey: 0, reportKeyValue: 0, setNavigationBarTitle: 1, showNavigationBarLoading: 1, hideNavigationBarLoading: 1, startPullDownRefresh: 1, stopPullDownRefresh: 1, operateWXData: 0, getOpenDeviceId: 0, makeBluetoothPair: 1, openBluetoothAdapter: 1, closeBluetoothAdapter: 1, getBluetoothAdapterState: 1, startBluetoothDevicesDiscovery: 1, stopBluetoothDevicesDiscovery: 1, getBluetoothDevices: 1, getConnectedBluetoothDevices: 1, createBLEConnection: 1, setBLEMTU: 1, closeBLEConnection: 1, getBLEDeviceServices: 1, getBLEDeviceRSSI: 1, getBLEDeviceCharacteristics: 1, notifyBLECharacteristicValueChanged: 1, notifyBLECharacteristicValueChange: 1, readBLECharacteristicValue: 1, writeBLECharacteristicValue: 1, onBluetoothAdapterStateChange: 3, onBluetoothDeviceFound: 3, onBLEConnectionStateChanged: 3, onBLEConnectionStateChange: 3, onBLECharacteristicValueChange: 3, offBluetoothAdapterStateChange: 3, offBluetoothDeviceFound: 3, offBLEConnectionStateChanged: 3, offBLEConnectionStateChange: 3, offBLECharacteristicValueChange: 3, createBLEPeripheralServer: 2, onBLEPeripheralConnectionStateChanged: 3, offBLEPeripheralConnectionStateChanged: 3, startBeaconDiscovery: 1, stopBeaconDiscovery: 1, getBeacons: 1, onBeaconUpdate: 1, onBeaconServiceChange: 1, startWifi: 1, stopWifi: 1, getWifiList: 1, getConnectedWifi: 1, connectWifi: 1, presetWifiList: 1, setWifiList: 1, onGetWifiList: 3, onWifiConnected: 3, offGetWifiList: 3, offWifiConnected: 3, onEvaluateWifi: 3, getHCEState: 1, startHCE: 1, stopHCE: 1, sendHCEMessage: 1, onHCEMessage: 3, startLocalServiceDiscovery: 1, stopLocalServiceDiscovery: 1, onLocalServiceFound: 3, offLocalServiceFound: 3, onLocalServiceLost: 3, offLocalServiceLost: 3, onLocalServiceDiscoveryStop: 3, offLocalServiceDiscoveryStop: 3, onLocalServiceResolveFail: 3, offLocalServiceResolveFail: 3, redirectTo: 1, reLaunch: 1, navigateTo: 1, switchTab: 1, navigateBack: 1, _triggerBeforeUnloadPage: 0, _triggerBeforeShareAppMessage: 0, navigateBackApplication: 0, navigateBackNative: 0, launchApplication: 0, getStorage: 1, getStorageSync: 2, setStorage: 1, setStorageSync: 2, removeStorage: 1, removeStorageSync: 2, clearStorage: 1, clearStorageSync: 2, getStorageInfo: 1, getStorageInfoSync: 2, getBackgroundFetchData: 1, onBackgroundFetchData: 3, request: 1, connectSocket: 1, closeSocket: 1, sendSocketMessage: 1, onSocketOpen: 3, onSocketClose: 3, onSocketMessage: 3, onSocketError: 3, uploadFile: 1, downloadFile: 1, addNativeDownloadTask: 0, chooseImage: 1, previewImage: 1, previewMedia: 1, getImageInfo: 1, saveImageToPhotosAlbum: 1, startRecord: 1, stopRecord: 1, playVoice: 1, pauseVoice: 1, stopVoice: 1, onVoicePlayEnd: 1, chooseVideo: 1, saveVideoToPhotosAlbum: 1, getVideoInfo: 1, compressVideo: 1, getLocation: 1, openLocation: 1, chooseLocation: 1, onLocationChange: 0, offLocationChange: 0, startLocationUpdateBackground: 0, startLocationUpdate: 0, stopLocationUpdate: 0, getNetworkType: 1, onNetworkStatusChange: 3, getSystemInfo: 1, getSystemInfoSync: 2, getBatteryInfo: 1, getBatteryInfoSync: 2, startAccelerometer: 1, stopAccelerometer: 1, onAccelerometerChange: 3, startCompass: 1, stopCompass: 1, onCompassChange: 3, reportAction: 0, getBackgroundAudioManager: 2, getRecorderManager: 2, getBackgroundAudioPlayerState: 1, playBackgroundAudio: 1, pauseBackgroundAudio: 1, seekBackgroundAudio: 1, stopBackgroundAudio: 1, onBackgroundAudioPlay: 3, onBackgroundAudioPause: 3, onBackgroundAudioStop: 3, join1v1Chat: 1, setEnable1v1Chat: 1, joinVoIPChat: 1, exitVoIPChat: 1, updateVoIPChatMuteConfig: 1, onVoIPChatMembersChanged: 3, onVoIPChatSpeakersChanged: 3, onVoIPChatInterrupted: 3, offVoIPChatMembersChanged: 3, offVoIPChatSpeakersChanged: 3, offVoIPChatInterrupted: 3, onVoIPVideoMembersChanged: 3, offVoIPVideoMembersChanged: 3, subscribeVoIPVideoMembers: 1, login: 1, checkSession: 1, authorize: 1, getUserInfo: 1, requestPayment: 1, requestFacetoFacePayment: 1, requestJointPayment: 0, getWCPayOverseaPrepayRequest: 0, requestH5Transaction: 0, openWCPayOverseaPaymentReceive: 0, handleWCPayOverseaWalletBuffer: 0, requestVerifyUserIdentity: 0, verifyPaymentPassword: 0, bindPaymentCard: 0, requestPaymentToBank: 0, requestVirtualPayment: 0, openOfflinePayView: 0, openWCPayCardList: 0, requestMallPayment: 0, addCard: 1, openCard: 1, scanCode: 1, openQRCode: 1, scanItem: 1, chooseAddress: 1, saveFile: 1, openDocument: 1, getSavedFileList: 1, getSavedFileInfo: 1, getFileInfo: 1, removeSavedFile: 1, getFileSystemManager: 0, chooseContact: 0, removeUserCloudStorage: 0, setUserCloudStorage: 0, makePhoneCall: 1, makeVoIPCall: 0, onAppRoute: 0, onAppRouteDone: 0, onAppEnterBackground: 0, onAppEnterForeground: 0, onAppUnhang: 0, onPageReload: 0, onPageNotFound: 0, onThemeChange: 1, offThemeChange: 1, createAnimation: 2, createInnerAudioContext: 2, createAudioContext: 0, createVideoContext: 2, createMapContext: 2, createCameraContext: 2, createLivePlayerContext: 2, createLivePusherContext: 2, onWebviewEvent: 0, onNativeEvent: 0, hideKeyboard: 0, onKeyboardHeightChange: 0, offKeyboardHeightChange: 0, getPublicLibVersion: 0, showModal: 1, showToast: 1, hideToast: 1, showLoading: 1, hideLoading: 1, showActionSheet: 1, reportAnalytics: 0, getClipboardData: 1, setClipboardData: 1, createSelectorQuery: 1, createIntersectionObserver: 1, updatePerfData: 0, traceEvent: 0, onMemoryWarning: 0, offMemoryWarning: 0, getUpdateManager: 2, createWorker: 2, voiceSplitJoint: 0, uploadSilkVoice: 0, downloadSilkVoice: 0, getResPath: 0, setResPath: 0, env: 0, appStatus: 0, hanged: 0, getLogManager: 0, getRealtimeLogManager: 0, onWindowResize: 3, offWindowResize: 3, setPageOrientation: 1, loadFontFace: 1, uploadWeRunData: 0, addWeRunData: 0, setBackgroundColor: 1, setBackgroundTextStyle: 1, getMenuButtonBoundingClientRect: 1, onAppShow: 3, offAppShow: 3, onAppHide: 3, offAppHide: 3, onError: 3, offError: 3, onUnhandledRejection: 3, offUnhandledRejection: 3, getLaunchOptionsSync: 2, getEnterOptionsSync: 2, calRqt: 0, offPageNotFound: 0, getAvailableAudioSources: 1, reportMonitor: 1, faceVerifyForPay: 1, chooseInvoice: 1, startDeviceMotionLisstening: 1, stopDeviceMotionListening: 1, onDeviceMotionChange: 3, startGyroscope: 1, stopGyroscope: 1, onGyroscopeChange: 3, setInnerAudioOption: 1, secureTunnel: 1, startCustomFacialRecognitionVerify: 1, startCustomFacialRecognitionVerifyAndUploadVideo: 1, getAccountInfoSync: 0, setCookies: 1, getCookies: 1, nextTick: 0, chooseMultiMedia: 1, chooseMessageFile: 1, getLabInfo: 1, setLabInfo: 1, compressImage: 1, enterContact: 1, shareAppMessageForFakeNative: 0, downloadApp: 0, installDownloadApp: 0, getAppInstallState: 0, queryDownloadAppTask: 0, cancelDownloadAppTask: 0, resumeDownloadAppTask: 0, pauseDownloadAppTask: 0, onDownloadAppStateChange: 3, downloadAppForIOS: 0, offGyroscopeChange: 3, offDeviceMotionChange: 3, offCompassChange: 3, offAccelerometerChange: 3, offUserCaptureScreen: 3, offNetworkStatusChange: 3, offHCEMessage: 3, offBeaconUpdate: 3, offBeaconServiceChange: 3, checkIsOpenAccessibility: 1, updateWeChatApp: 1 }, tap: { invokeWebviewMethod: 0, drawCanvas: 0, createContext: 0, createCanvasContext: 0, canvasToTempFilePath: 0, canvasGetImageData: 0, canvasPutImageData: 0, getShareInfo: 0, pageScrollTo: 0, chooseInvoiceTitle: 0, ShareInfoStorage: 0, arrayBufferToBase64: 0, base64ToArrayBuffer: 0, openSetting: 10, openSettingForPlugin: 10, getExtConfig: 0, chooseMedia: 0, chooseWeChatContact: 0, uploadEncryptedFileToCDN: 0, onUploadEncryptedFileToCDNProgress: 0, getExtConfigSync: 0, showShareMenu: 0, hideShareMenu: 0, updateShareMenu: 0, openUrl: 0, setNavigationBarColor: 0, setNavigationBarAlpha: 0, _getRealRoute: 0, vibrateShort: 0, vibrateLong: 0, getSetting: 20, checkIsSupportFacialRecognition: 0, startFacialRecognitionVerify: 0, startFacialRecognitionVerifyAndUploadVideo: 0, sendBizRedPacket: 0, sendGoldenRedPacket: 0, openGoldenRedPacketDetail: 0, showRedPackage: 0, addPhoneContact: 0, setScreenBrightness: 0, getScreenBrightness: 0, getWeRunData: 0, uploadWeRunData: 0, canIUse: 0, setPageStyle: 0, triggerGettingWidgetData: 0, navigateToMiniProgram: 0, navigateToDevMiniProgram: 0, navigateBackMiniProgram: 0, navigateBackNative: 0, exitMiniProgram: 0, setNavigationBarRightButton: 0, onTapNavigationBarRightButton: 0, setTopBarText: 0, setTabBarBadge: 0, removeTabBarBadge: 0, showTabBarRedDot: 0, hideTabBarRedDot: 0, showTabBar: 0, hideTabBar: 0, setTabBarStyle: 0, setTabBarItem: 0, setEnableDebug: 0, captureScreen: 0, onUserCaptureScreen: 0, setKeepScreenOn: 0, checkIsSupportSoterAuthentication: 0, startSoterAuthentication: 0, checkIsSoterEnrolledInDevice: 0, openDeliveryList: 0, reportIDKey: 0, reportKeyValue: 0, setNavigationBarTitle: 0, showNavigationBarLoading: 0, hideNavigationBarLoading: 0, startPullDownRefresh: 0, stopPullDownRefresh: 0, operateWXData: 0, getOpenDeviceId: 0, makeBluetoothPair: 0, openBluetoothAdapter: 0, closeBluetoothAdapter: 0, getBluetoothAdapterState: 0, startBluetoothDevicesDiscovery: 0, stopBluetoothDevicesDiscovery: 0, getBluetoothDevices: 0, getConnectedBluetoothDevices: 0, createBLEConnection: 0, setBLEMTU: 0, closeBLEConnection: 0, getBLEDeviceServices: 0, getBLEDeviceRSSI: 0, getBLEDeviceCharacteristics: 0, notifyBLECharacteristicValueChanged: 0, notifyBLECharacteristicValueChange: 0, readBLECharacteristicValue: 0, writeBLECharacteristicValue: 0, onBluetoothAdapterStateChange: 0, onBluetoothDeviceFound: 0, onBLEConnectionStateChanged: 0, onBLEConnectionStateChange: 0, onBLECharacteristicValueChange: 0, offBluetoothAdapterStateChange: 0, offBluetoothDeviceFound: 0, offBLEConnectionStateChanged: 0, offBLEConnectionStateChange: 0, offBLECharacteristicValueChange: 0, createBLEPeripheralServer: 0, onBLEPeripheralConnectionStateChanged: 0, offBLEPeripheralConnectionStateChanged: 0, onLocalServiceFound: 0, offLocalServiceFound: 0, onLocalServiceLost: 0, offLocalServiceLost: 0, onLocalServiceDiscoveryStop: 0, offLocalServiceDiscoveryStop: 0, onLocalServiceResolveFail: 0, offLocalServiceResolveFail: 0, startBeaconDiscovery: 0, stopBeaconDiscovery: 0, getBeacons: 0, onBeaconUpdate: 0, onBeaconServiceChange: 0, startWifi: 0, stopWifi: 0, getWifiList: 0, getConnectedWifi: 0, connectWifi: 0, presetWifiList: 0, setWifiList: 0, onGetWifiList: 0, onWifiConnected: 0, offGetWifiList: 0, offWifiConnected: 0, onEvaluateWifi: 0, getHCEState: 0, startHCE: 0, stopHCE: 0, sendHCEMessage: 0, onHCEMessage: 0, redirectTo: 0, reLaunch: 0, navigateTo: 0, switchTab: 0, navigateBack: 0, _triggerBeforeUnloadPage: 0, _triggerBeforeShareAppMessage: 0, navigateBackApplication: 0, launchApplication: 0, getStorage: 0, getStorageSync: 0, setStorage: 0, setStorageSync: 0, removeStorage: 0, removeStorageSync: 0, clearStorage: 0, clearStorageSync: 0, getStorageInfo: 0, getStorageInfoSync: 0, request: 20, connectSocket: 0, closeSocket: 0, sendSocketMessage: 0, onSocketOpen: 0, onSocketClose: 0, onSocketMessage: 0, onSocketError: 0, uploadFile: 0, downloadFile: 0, addNativeDownloadTask: 0, chooseImage: 0, previewImage: 0, previewMedia: 0, getImageInfo: 0, saveImageToPhotosAlbum: 0, startRecord: 0, stopRecord: 0, playVoice: 0, pauseVoice: 0, stopVoice: 0, onVoicePlayEnd: 0, chooseVideo: 0, saveVideoToPhotosAlbum: 0, getVideoInfo: 0, compressVideo: 0, getLocation: 0, openLocation: 0, chooseLocation: 0, onLocationChange: 0, offLocationChange: 0, startLocationUpdateBackground: 0, startLocationUpdate: 0, stopLocationUpdate: 0, getNetworkType: 0, onNetworkStatusChange: 0, getSystemInfo: 0, getSystemInfoSync: 0, getBatteryInfo: 0, getBatteryInfoSync: 0, startAccelerometer: 0, stopAccelerometer: 0, onAccelerometerChange: 0, startCompass: 0, stopCompass: 0, onCompassChange: 0, reportAction: 0, getBackgroundAudioManager: 0, getRecorderManager: 0, getBackgroundAudioPlayerState: 0, playBackgroundAudio: 0, pauseBackgroundAudio: 0, seekBackgroundAudio: 0, stopBackgroundAudio: 0, onBackgroundAudioPlay: 0, onBackgroundAudioPause: 0, onBackgroundAudioStop: 0, login: 0, checkSession: 0, authorize: 0, getUserInfo: 0, requestFacetoFacePayment: 0, requestPayment: 30, verifyPaymentPassword: 0, bindPaymentCard: 0, requestPaymentToBank: 0, requestJointPayment: 0, getWCPayOverseaPrepayRequest: 0, requestH5Transaction: 0, openWCPayOverseaPaymentReceive: 0, handleWCPayOverseaWalletBuffer: 0, requestVerifyUserIdentity: 0, requestVirtualPayment: 0, openOfflinePayView: 0, openWCPayCardList: 0, requestMallPayment: 0, addCard: 0, openCard: 0, scanCode: 0, openQRCode: 0, scanItem: 0, chooseAddress: 0, saveFile: 0, openDocument: 0, getSavedFileList: 0, getSavedFileInfo: 0, getFileInfo: 0, removeSavedFile: 0, getFileSystemManager: 0, chooseContact: 0, removeUserCloudStorage: 0, setUserCloudStorage: 0, makePhoneCall: 0, makeVoIPCall: 0, onAppRoute: 0, onAppRouteDone: 0, onAppEnterBackground: 0, onAppEnterForeground: 0, onAppUnhang: 0, onPageReload: 0, onPageNotFound: 0, offPageNotFound: 0, onThemeChange: 0, offThemeChange: 0, onAppShow: 0, offAppShow: 0, onAppHide: 0, offAppHide: 0, onError: 0, offError: 0, onUnhandledRejection: 0, offUnhandledRejection: 0, getLaunchOptionsSync: 0, getEnterOptionsSync: 0, createAnimation: 0, createInnerAudioContext: 0, createAudioContext: 0, createVideoContext: 0, createMapContext: 0, createCameraContext: 0, createLivePlayerContext: 0, createLivePusherContext: 0, onWebviewEvent: 0, onNativeEvent: 0, hideKeyboard: 0, onKeyboardHeightChange: 0, offKeyboardHeightChange: 0, getPublicLibVersion: 0, showModal: 30, showToast: 0, hideToast: 0, showLoading: 0, hideLoading: 0, showActionSheet: 30, reportAnalytics: 0, getClipboardData: 0, setClipboardData: 0, createSelectorQuery: 0, createIntersectionObserver: 0, updatePerfData: 0, traceEvent: 0, onMemoryWarning: 0, offMemoryWarning: 0, getUpdateManager: 0, createWorker: 0, voiceSplitJoint: 0, uploadSilkVoice: 0, downloadSilkVoice: 0, getResPath: 0, setResPath: 0, env: 0, appStatus: 0, hanged: 0, getLogManager: 0, getRealtimeLogManager: 0, onWindowResize: 0, offWindowResize: 0, setPageOrientation: 0, loadFontFace: 0, setInnerAudioOption: 0, addWeRunData: 0, setBackgroundColor: 0, setBackgroundTextStyle: 0, getMenuButtonBoundingClientRect: 0, calRqt: 0, getAvailableAudioSources: 0, reportMonitor: 0, faceVerifyForPay: 0, chooseInvoice: 0, startDeviceMotionListening: 0, stopDeviceMotionListening: 0, onDeviceMotionChange: 0, startGyroscope: 0, stopGyroscope: 0, onGyroscopeChange: 0, secureTunnel: 0, startCustomFacialRecognitionVerify: 0, startCustomFacialRecognitionVerifyAndUploadVideo: 0, getAccountInfo: 0, nextTick: 0, setCookies: 0, getCookies: 0, getAccountInfoSync: 0, chooseMultiMedia: 0, join1v1Chat: 0, setEnable1v1Chat: 0, joinVoIPChat: 0, exitVoIPChat: 0, updateVoIPChatMuteConfig: 0, onVoIPChatMembersChanged: 0, onVoIPChatSpeakersChanged: 0, onVoIPChatInterrupted: 0, offVoIPChatMembersChanged: 0, offVoIPChatSpeakersChanged: 0, offVoIPChatInterrupted: 0, onVoIPVideoMembersChanged: 0, offVoIPVideoMembersChanged: 0, subscribeVoIPVideoMembers: 0, getBackgroundFetchData: 0, onBackgroundFetchData: 0, chooseMessageFile: 0, getLabInfo: 0, setLabInfo: 0, compressImage: 0, startLocalServiceDiscovery: 0, stopLocalServiceDiscovery: 0, enterContact: 0, shareAppMessageForFakeNative: 0, downloadApp: 0, installDownloadApp: 0, getAppInstallState: 0, queryDownloadAppTask: 0, cancelDownloadAppTask: 0, resumeDownloadAppTask: 0, pauseDownloadAppTask: 0, onDownloadAppStateChange: 0, downloadAppForIOS: 0, offGyroscopeChange: 0, offDeviceMotionChange: 0, offCompassChange: 0, offAccelerometerChange: 0, offUserCaptureScreen: 0, offNetworkStatusChange: 0, offHCEMessage: 0, offBeaconUpdate: 0, offBeaconServiceChange: 0, requestSubscribeMessage: 40, hideHomeButton: 0, checkIsOpenAccessibility: 0, updateWeChatApp: 0 }, singlePage: { invokeWebviewMethod: 0, drawCanvas: 10, createContext: 10, createCanvasContext: 10, canvasToTempFilePath: 10, canvasGetImageData: 10, canvasPutImageData: 10, getShareInfo: 0, pageScrollTo: 10, chooseInvoiceTitle: 1, ShareInfoStorage: 0, arrayBufferToBase64: 0, base64ToArrayBuffer: 0, openSetting: 1, openSettingForPlugin: 1, getExtConfig: 10, chooseMedia: 1, chooseWeChatContact: 1, uploadEncryptedFileToCDN: 0, onUploadEncryptedFileToCDNProgress: 0, getExtConfigSync: 10, showShareMenu: 0, hideShareMenu: 0, updateShareMenu: 0, openUrl: 0, setNavigationBarColor: 0, setNavigationBarAlpha: 0, hideHomeButton: 0, _getRealRoute: 0, vibrateShort: 10, vibrateLong: 10, getSetting: 0, checkIsSupportFacialRecognition: 0, startFacialRecognitionVerify: 0, startFacialRecognitionVerifyAndUploadVideo: 0, sendBizRedPacket: 0, sendGoldenRedPacket: 0, openGoldenRedPacketDetail: 0, showRedPackage: 0, addPhoneContact: 1, setScreenBrightness: 10, getScreenBrightness: 10, getWeRunData: 0, uploadWeRunData: 0, addWeRunData: 0, canIUse: 10, setPageStyle: 0, triggerGettingWidgetData: 0, navigateToMiniProgram: 1, navigateToDevMiniProgram: 0, navigateBackMiniProgram: 1, exitMiniProgram: 1, setNavigationBarRightButton: 0, onTapNavigationBarRightButton: 0, setTopBarText: 0, setTabBarBadge: 0, removeTabBarBadge: 0, showTabBarRedDot: 0, hideTabBarRedDot: 0, showTabBar: 0, hideTabBar: 0, setTabBarStyle: 0, setTabBarItem: 0, setEnableDebug: 10, captureScreen: 0, onUserCaptureScreen: 10, offUserCaptureScreen: 10, setKeepScreenOn: 10, checkIsSupportSoterAuthentication: 0, startSoterAuthentication: 1, checkIsSoterEnrolledInDevice: 0, openDeliveryList: 0, reportIDKey: 0, reportKeyValue: 0, setNavigationBarTitle: 0, showNavigationBarLoading: 0, hideNavigationBarLoading: 0, startPullDownRefresh: 10, stopPullDownRefresh: 10, operateWXData: 10, getOpenDeviceId: 0, openBluetoothAdapter: 0, closeBluetoothAdapter: 0, getBluetoothAdapterState: 0, startBluetoothDevicesDiscovery: 0, stopBluetoothDevicesDiscovery: 0, getBluetoothDevices: 0, getConnectedBluetoothDevices: 0, createBLEConnection: 0, setBLEMTU: 0, closeBLEConnection: 0, getBLEDeviceServices: 0, getBLEDeviceCharacteristics: 0, notifyBLECharacteristicValueChanged: 0, notifyBLECharacteristicValueChange: 0, readBLECharacteristicValue: 0, writeBLECharacteristicValue: 0, onBluetoothAdapterStateChange: 0, onBluetoothDeviceFound: 0, onBLEConnectionStateChanged: 0, onBLEConnectionStateChange: 0, onBLECharacteristicValueChange: 0, offBluetoothAdapterStateChange: 0, offBluetoothDeviceFound: 0, offBLEConnectionStateChanged: 0, offBLEConnectionStateChange: 0, offBLECharacteristicValueChange: 0, createBLEPeripheralServer: 0, onBLEPeripheralConnectionStateChanged: 0, offBLEPeripheralConnectionStateChanged: 0, startBeaconDiscovery: 0, stopBeaconDiscovery: 0, getBeacons: 0, onBeaconUpdate: 0, offBeaconUpdate: 0, onBeaconServiceChange: 0, offBeaconServiceChange: 0, startWifi: 0, stopWifi: 0, getWifiList: 0, getConnectedWifi: 0, connectWifi: 0, presetWifiList: 0, setWifiList: 0, onGetWifiList: 0, onWifiConnected: 0, offGetWifiList: 0, offWifiConnected: 0, onEvaluateWifi: 0, getHCEState: 0, startHCE: 0, stopHCE: 0, sendHCEMessage: 0, onHCEMessage: 0, offHCEMessage: 0, startLocalServiceDiscovery: 0, stopLocalServiceDiscovery: 0, onLocalServiceFound: 0, offLocalServiceFound: 0, onLocalServiceLost: 0, offLocalServiceLost: 0, onLocalServiceDiscoveryStop: 0, offLocalServiceDiscoveryStop: 0, onLocalServiceResolveFail: 0, offLocalServiceResolveFail: 0, redirectTo: 1, reLaunch: 1, navigateTo: 1, switchTab: 1, navigateBack: 1, _triggerBeforeUnloadPage: 0, _triggerBeforeShareAppMessage: 0, navigateBackApplication: 1, navigateBackNative: 1, launchApplication: 1, getStorage: 10, getStorageSync: 10, setStorage: 10, setStorageSync: 10, removeStorage: 10, removeStorageSync: 10, clearStorage: 10, clearStorageSync: 10, getStorageInfo: 10, getStorageInfoSync: 10, getBackgroundFetchData: 0, onBackgroundFetchData: 0, request: 10, connectSocket: 10, closeSocket: 10, sendSocketMessage: 10, onSocketOpen: 10, onSocketClose: 10, onSocketMessage: 10, onSocketError: 10, uploadFile: 10, downloadFile: 10, addNativeDownloadTask: 0, chooseImage: 1, previewImage: 10, getImageInfo: 10, saveImageToPhotosAlbum: 1, startRecord: 0, stopRecord: 0, playVoice: 0, pauseVoice: 0, stopVoice: 0, onVoicePlayEnd: 0, chooseVideo: 1, saveVideoToPhotosAlbum: 1, getVideoInfo: 0, compressVideo: 0, getLocation: 10, openLocation: 1, chooseLocation: 1, enableLocationUpdateBackground: 0, enableLocationUpdate: 0, disableLocationUpdate: 0, onLocationChange: 0, offLocationChange: 0, startLocationUpdateBackground: 0, startLocationUpdate: 0, stopLocationUpdate: 0, getNetworkType: 10, onAppRoute: 0, onAppRouteDone: 0, onAppEnterBackground: 0, onAppEnterForeground: 0, onAppUnhang: 0, onPageReload: 0, onPageNotFound: 10, offPageNotFound: 10, onAudioInterruptionBegin: 10, offAudioInterruptionBegin: 10, onAudioInterruptionEnd: 10, offAudioInterruptionEnd: 10, onThemeChange: 10, offThemeChange: 10, onAppShow: 10, offAppShow: 10, onAppHide: 10, offAppHide: 10, onError: 10, offError: 10, onUnhandledRejection: 10, offUnhandledRejection: 10, getLaunchOptionsSync: 10, getEnterOptionsSync: 10, createAnimation: 10, createInnerAudioContext: 10, createAudioContext: 0, createVideoContext: 10, createMapContext: 10, createCameraContext: 0, createLivePlayerContext: 10, createLivePusherContext: 0, onWebviewEvent: 10, onNativeEvent: 10, hideKeyboard: 0, onKeyboardHeightChange: 10, offKeyboardHeightChange: 10, getPublicLibVersion: 0, showModal: 10, showToast: 10, hideToast: 10, showLoading: 10, hideLoading: 10, showActionSheet: 10, reportAnalytics: 10, getClipboardData: 0, setClipboardData: 0, createSelectorQuery: 10, createIntersectionObserver: 10, updatePerfData: 0, traceEvent: 0, onMemoryWarning: 10, offMemoryWarning: 10, getUpdateManager: 0, createWorker: 10, voiceSplitJoint: 0, uploadSilkVoice: 0, downloadSilkVoice: 0, getResPath: 0, setResPath: 0, env: 10, appStatus: 0, hanged: 0, getLogManager: 10, getRealtimeLogManager: 10, onWindowResize: 10, offWindowResize: 10, loadFontFace: 10, setInnerAudioOption: 10, setBackgroundColor: 10, setBackgroundTextStyle: 10, getMenuButtonBoundingClientRect: 10, calRqt: 0, onNetworkStatusChange: 10, offNetworkStatusChange: 10, getSystemInfo: 10, getSystemInfoSync: 10, getBatteryInfo: 10, getBatteryInfoSync: 10, startAccelerometer: 10, stopAccelerometer: 10, onAccelerometerChange: 10, offAccelerometerChange: 10, startCompass: 10, stopCompass: 10, onCompassChange: 10, offCompassChange: 10, reportAction: 0, getBackgroundAudioManager: 10, getRecorderManager: 10, getBackgroundAudioPlayerState: 10, playBackgroundAudio: 0, pauseBackgroundAudio: 0, seekBackgroundAudio: 0, stopBackgroundAudio: 0, onBackgroundAudioPlay: 0, onBackgroundAudioPause: 0, onBackgroundAudioStop: 0, joinVoIPChat: 0, exitVoIPChat: 0, updateVoIPChatMuteConfig: 0, onVoIPChatMembersChanged: 0, onVoIPChatSpeakersChanged: 0, onVoIPChatInterrupted: 0, offVoIPChatMembersChanged: 0, offVoIPChatSpeakersChanged: 0, offVoIPChatInterrupted: 0, login: 0, checkSession: 0, authorize: 1, getUserInfo: 1, requestPayment: 0, verifyPaymentPassword: 0, bindPaymentCard: 0, requestPaymentToBank: 0, requestJointPayment: 0, getWCPayOverseaPrepayRequest: 0, requestH5Transaction: 0, openWCPayOverseaPaymentReceive: 0, handleWCPayOverseaWalletBuffer: 0, requestVerifyUserIdentity: 0, requestVirtualPayment: 0, openOfflinePayView: 0, openWCPayCardList: 0, requestMallPayment: 0, requestMidasPayment: 0, addCard: 1, openCard: 1, scanCode: 1, openQRCode: 0, scanItem: 1, chooseAddress: 1, saveFile: 10, openDocument: 1, getSavedFileList: 10, getSavedFileInfo: 10, getFileInfo: 10, removeSavedFile: 10, getFileSystemManager: 10, chooseContact: 0, removeUserCloudStorage: 0, setUserCloudStorage: 0, makePhoneCall: 1, makeVoIPCall: 0, getAvailableAudioSources: 10, reportMonitor: 10, getAccountInfoSync: 10, faceVerifyForPay: 0, chooseInvoice: 1, startDeviceMotionListening: 10, stopDeviceMotionListening: 10, onDeviceMotionChange: 10, offDeviceMotionChange: 10, startGyroscope: 10, stopGyroscope: 10, onGyroscopeChange: 10, offGyroscopeChange: 10, secureTunnel: 0, startCustomFacialRecognitionVerify: 0, startCustomFacialRecognitionVerifyAndUploadVideo: 0, loadSubpackage: 0, getABTestConfig: 0, openChattingUI: 0, delRemindMsg: 0, searchContacts: 0, invoke: 0, on: 0, chooseMessageFile: 1, nextTick: 10, setCookies: 0, getCookies: 0, compressImage: 0, chooseMultiMedia: 0, getLabInfo: 0, setLabInfo: 0, enterContact: 0, shareAppMessageForFakeNative: 0, downloadApp: 0, installDownloadApp: 0, getAppInstallState: 0, queryDownloadAppTask: 0, cancelDownloadAppTask: 0, resumeDownloadAppTask: 0, pauseDownloadAppTask: 0, onDownloadAppStateChange: 0, downloadAppForIOS: 0, getDownloadWidgetTaskInfos: 0, jumpDownloaderWidget: 0, createOffscreenCanvas: 10, getSelectedTextRange: 10, version: 10, cloud: 10, createInterstitialAd: 0, createRewardedVideoAd: 0, error: 10, serviceMarket: 10, getNativeUserInfo: 10, getPerformance: 10, reportPerformance: 10, createUDPSocket: 0, createBufferURL: 10, revokeBufferURL: 10 }, thirdApp: { invokeWebviewMethod: 10, drawCanvas: 10, createContext: 10, createCanvasContext: 10, canvasToTempFilePath: 10, canvasGetImageData: 10, canvasPutImageData: 10, getShareInfo: 10, pageScrollTo: 10, chooseInvoiceTitle: 10, ShareInfoStorage: 10, arrayBufferToBase64: 10, base64ToArrayBuffer: 10, openSetting: 10, openSettingForPlugin: 10, getExtConfig: 10, chooseMedia: 10, chooseWeChatContact: 1, uploadEncryptedFileToCDN: 0, onUploadEncryptedFileToCDNProgress: 0, getExtConfigSync: 10, showShareMenu: 10, hideShareMenu: 10, updateShareMenu: 10, openUrl: 0, setNavigationBarColor: 10, setNavigationBarAlpha: 10, hideHomeButton: 10, _getRealRoute: 10, vibrateShort: 10, vibrateLong: 10, getSetting: 10, checkIsSupportFacialRecognition: 0, startFacialRecognitionVerify: 0, startFacialRecognitionVerifyAndUploadVideo: 0, sendBizRedPacket: 0, sendGoldenRedPacket: 0, openGoldenRedPacketDetail: 0, showRedPackage: 0, addPhoneContact: 10, setScreenBrightness: 10, getScreenBrightness: 10, getWeRunData: 10, uploadWeRunData: 10, addWeRunData: 10, canIUse: 10, setPageStyle: 10, triggerGettingWidgetData: 0, navigateToMiniProgram: 10, navigateToDevMiniProgram: 10, navigateBackMiniProgram: 10, exitMiniProgram: 10, setNavigationBarRightButton: 0, onTapNavigationBarRightButton: 0, setTopBarText: 0, setTabBarBadge: 10, removeTabBarBadge: 10, showTabBarRedDot: 10, hideTabBarRedDot: 10, showTabBar: 10, hideTabBar: 10, setTabBarStyle: 10, setTabBarItem: 10, setEnableDebug: 10, captureScreen: 0, onUserCaptureScreen: 10, offUserCaptureScreen: 10, setKeepScreenOn: 10, checkIsSupportSoterAuthentication: 1, startSoterAuthentication: 1, checkIsSoterEnrolledInDevice: 1, openDeliveryList: 0, reportIDKey: 10, reportKeyValue: 10, setNavigationBarTitle: 10, showNavigationBarLoading: 10, hideNavigationBarLoading: 10, startPullDownRefresh: 10, stopPullDownRefresh: 10, operateWXData: 10, getOpenDeviceId: 0, openBluetoothAdapter: 10, closeBluetoothAdapter: 10, getBluetoothAdapterState: 10, startBluetoothDevicesDiscovery: 10, stopBluetoothDevicesDiscovery: 10, getBluetoothDevices: 10, getConnectedBluetoothDevices: 10, createBLEConnection: 10, setBLEMTU: 10, closeBLEConnection: 10, getBLEDeviceServices: 10, getBLEDeviceCharacteristics: 10, notifyBLECharacteristicValueChanged: 10, notifyBLECharacteristicValueChange: 10, readBLECharacteristicValue: 10, writeBLECharacteristicValue: 10, onBluetoothAdapterStateChange: 10, onBluetoothDeviceFound: 10, onBLEConnectionStateChanged: 10, onBLEConnectionStateChange: 10, onBLECharacteristicValueChange: 10, offBluetoothAdapterStateChange: 10, offBluetoothDeviceFound: 10, offBLEConnectionStateChanged: 10, offBLEConnectionStateChange: 10, offBLECharacteristicValueChange: 10, createBLEPeripheralServer: 10, onBLEPeripheralConnectionStateChanged: 10, offBLEPeripheralConnectionStateChanged: 10, startBeaconDiscovery: 10, stopBeaconDiscovery: 10, getBeacons: 10, onBeaconUpdate: 10, offBeaconUpdate: 10, onBeaconServiceChange: 10, offBeaconServiceChange: 10, startWifi: 10, stopWifi: 10, getWifiList: 10, getConnectedWifi: 10, connectWifi: 10, presetWifiList: 10, setWifiList: 10, onGetWifiList: 10, onWifiConnected: 10, offGetWifiList: 10, offWifiConnected: 10, onEvaluateWifi: 10, getHCEState: 10, startHCE: 10, stopHCE: 10, sendHCEMessage: 10, onHCEMessage: 10, offHCEMessage: 10, startLocalServiceDiscovery: 10, stopLocalServiceDiscovery: 10, onLocalServiceFound: 10, offLocalServiceFound: 10, onLocalServiceLost: 10, offLocalServiceLost: 10, onLocalServiceDiscoveryStop: 10, offLocalServiceDiscoveryStop: 10, onLocalServiceResolveFail: 10, offLocalServiceResolveFail: 10, redirectTo: 10, reLaunch: 10, navigateTo: 10, switchTab: 10, navigateBack: 10, _triggerBeforeUnloadPage: 0, _triggerBeforeShareAppMessage: 0, navigateBackApplication: 1, navigateBackNative: 1, launchApplication: 1, getStorage: 10, getStorageSync: 10, setStorage: 10, setStorageSync: 10, removeStorage: 10, removeStorageSync: 10, clearStorage: 10, clearStorageSync: 10, getStorageInfo: 10, getStorageInfoSync: 10, getBackgroundFetchData: 10, onBackgroundFetchData: 10, request: 10, connectSocket: 10, closeSocket: 10, sendSocketMessage: 10, onSocketOpen: 10, onSocketClose: 10, onSocketMessage: 10, onSocketError: 10, uploadFile: 10, downloadFile: 10, addNativeDownloadTask: 0, chooseImage: 10, previewImage: 10, getImageInfo: 10, saveImageToPhotosAlbum: 10, startRecord: 10, stopRecord: 10, playVoice: 10, pauseVoice: 10, stopVoice: 10, onVoicePlayEnd: 10, chooseVideo: 10, saveVideoToPhotosAlbum: 10, getVideoInfo: 10, compressVideo: 10, getLocation: 10, openLocation: 10, chooseLocation: 10, enableLocationUpdateBackground: 10, enableLocationUpdate: 10, disableLocationUpdate: 10, onLocationChange: 10, offLocationChange: 10, startLocationUpdateBackground: 10, startLocationUpdate: 10, stopLocationUpdate: 10, getNetworkType: 10, onAppRoute: 10, onAppRouteDone: 10, onAppEnterBackground: 10, onAppEnterForeground: 10, onAppUnhang: 10, onPageReload: 10, onPageNotFound: 10, offPageNotFound: 10, onAudioInterruptionBegin: 10, offAudioInterruptionBegin: 10, onAudioInterruptionEnd: 10, offAudioInterruptionEnd: 10, onThemeChange: 10, offThemeChange: 10, onAppShow: 10, offAppShow: 10, onAppHide: 10, offAppHide: 10, onError: 10, offError: 10, onUnhandledRejection: 10, offUnhandledRejection: 10, getLaunchOptionsSync: 10, getEnterOptionsSync: 10, createAnimation: 10, createInnerAudioContext: 10, createAudioContext: 10, createVideoContext: 10, createMapContext: 10, createCameraContext: 10, createLivePlayerContext: 10, createLivePusherContext: 10, onWebviewEvent: 10, onNativeEvent: 10, hideKeyboard: 10, onKeyboardHeightChange: 10, offKeyboardHeightChange: 10, getPublicLibVersion: 10, showModal: 10, showToast: 10, hideToast: 10, showLoading: 10, hideLoading: 10, showActionSheet: 10, reportAnalytics: 10, getClipboardData: 10, setClipboardData: 10, createSelectorQuery: 10, createIntersectionObserver: 10, updatePerfData: 10, traceEvent: 10, onMemoryWarning: 10, offMemoryWarning: 10, getUpdateManager: 10, createWorker: 10, voiceSplitJoint: 0, uploadSilkVoice: 0, downloadSilkVoice: 0, getResPath: 0, setResPath: 0, env: 10, appStatus: 10, hanged: 10, getLogManager: 10, getRealtimeLogManager: 10, onWindowResize: 10, offWindowResize: 10, loadFontFace: 10, setInnerAudioOption: 10, setBackgroundColor: 10, setBackgroundTextStyle: 10, getMenuButtonBoundingClientRect: 10, calRqt: 0, onNetworkStatusChange: 10, offNetworkStatusChange: 10, getSystemInfo: 10, getSystemInfoSync: 10, getBatteryInfo: 10, getBatteryInfoSync: 10, startAccelerometer: 10, stopAccelerometer: 10, onAccelerometerChange: 10, offAccelerometerChange: 10, startCompass: 10, stopCompass: 10, onCompassChange: 10, offCompassChange: 10, reportAction: 10, getBackgroundAudioManager: 10, getRecorderManager: 10, getBackgroundAudioPlayerState: 10, playBackgroundAudio: 10, pauseBackgroundAudio: 10, seekBackgroundAudio: 10, stopBackgroundAudio: 10, onBackgroundAudioPlay: 10, onBackgroundAudioPause: 10, onBackgroundAudioStop: 10, joinVoIPChat: 1, exitVoIPChat: 1, updateVoIPChatMuteConfig: 1, onVoIPChatMembersChanged: 0, onVoIPChatSpeakersChanged: 0, onVoIPChatInterrupted: 0, offVoIPChatMembersChanged: 0, offVoIPChatSpeakersChanged: 0, offVoIPChatInterrupted: 0, login: 10, checkSession: 10, authorize: 10, getUserInfo: 10, requestPayment: 10, verifyPaymentPassword: 0, bindPaymentCard: 0, requestPaymentToBank: 0, requestJointPayment: 0, getWCPayOverseaPrepayRequest: 0, requestH5Transaction: 0, openWCPayOverseaPaymentReceive: 0, handleWCPayOverseaWalletBuffer: 0, requestVerifyUserIdentity: 0, requestVirtualPayment: 0, openOfflinePayView: 0, openWCPayCardList: 0, requestMallPayment: 0, addCard: 10, openCard: 10, scanCode: 10, openQRCode: 0, chooseAddress: 10, saveFile: 10, openDocument: 10, getSavedFileList: 10, getSavedFileInfo: 10, getFileInfo: 10, removeSavedFile: 10, getFileSystemManager: 10, chooseContact: 0, removeUserCloudStorage: 0, setUserCloudStorage: 0, makePhoneCall: 10, makeVoIPCall: 0, getAvailableAudioSources: 10, reportMonitor: 10, getAccountInfoSync: 10, faceVerifyForPay: 0, chooseInvoice: 10, startDeviceMotionListening: 10, stopDeviceMotionListening: 10, onDeviceMotionChange: 10, offDeviceMotionChange: 10, startGyroscope: 10, stopGyroscope: 10, onGyroscopeChange: 10, offGyroscopeChange: 10, secureTunnel: 0, startCustomFacialRecognitionVerify: 0, startCustomFacialRecognitionVerifyAndUploadVideo: 0, loadSubpackage: 10, getABTestConfig: 10, openChattingUI: 0, delRemindMsg: 0, searchContacts: 0, invoke: 0, on: 0, chooseMessageFile: 1, nextTick: 10, setCookies: 0, getCookies: 0, compressImage: 10, chooseMultiMedia: 10, getLabInfo: 0, setLabInfo: 0, enterContact: 10, shareAppMessageForFakeNative: 0, downloadApp: 0, installDownloadApp: 0, getAppInstallState: 0, queryDownloadAppTask: 0, cancelDownloadAppTask: 0, resumeDownloadAppTask: 0, pauseDownloadAppTask: 0, onDownloadAppStateChange: 0, downloadAppForIOS: 0, getDownloadWidgetTaskInfos: 0, jumpDownloaderWidget: 0, createOffscreenCanvas: 10, getSelectedTextRange: 10, version: 10, cloud: 10, createInterstitialAd: 10, createRewardedVideoAd: 10, error: 10, serviceMarket: 10, openBusinessView: 10, requestMidasPayment: 10, modifyFriendInteractiveStorage: 0, getUserInteractiveStorage: 0, getUserCloudStorage: 0, getPotentialFriendList: 0, getGroupInfo: 0, getGroupCloudStorage: 0, getFriendCloudStorage: 0, createGridAd: 10, createBannerAd: 10 } },
                h = function(e, t) { return r[t][e] },
                v = n(1),
                g = n(12),
                b = n(0),
                a = n(27);

            function i() {}

            function c(e, t, n) { var r = t.replace(/\.html\?.*|\.html$/, ""); return !!__appServiceEngine__.hasPageRoute(r) || (Object(b.beforeInvokeFail)(e, n, 'page "' + Object(o.removeHtmlSuffixFromUrl)(t) + '" is not found'), !1) }
            var u = !1;

            function s(e) { u = !!e.state, e.success && e.success({ state: u }) }

            function l(e, t) {
                y(e);
                var n = h(e, "ui");
                if (0 < n && u) return !1;
                if (20 <= n)
                    if ("undefined" == typeof __appServiceEngine__) { if (t) return !1 } else { var r = __appServiceEngine__.getCurrentRoute() || ""; if (/^\/?__wx__\//.test(r)) return !1; var o = r.match(/(?:^|\/)__plugin__\/(.*?)\//); if ((o ? o[1] : "") !== t && 30 <= n) return !1 }
                var a = h(e, "singlePage");
                return !((!a || 1 === a) && Object(g.isSinglePageMode)()) || (1 === a && S() && Object(b.invokeMethod)("showToast", { icon: "", title: "请前往小程序使用完整服务", duration: 2500 }), !1)
            }

            function y(e) { var t = h(e, "thirdApp"); return 0 !== t && 1 !== t || !Object(g.isIn3rdApp)() || 1 === t && S() && Object(b.invokeMethod)("showToast", { icon: "", title: "暂不支持当前功能", duration: 2500 }), !0 }
            var m = !1;

            function w(e) { m = "tap" === e }

            function _() { setTimeout(function() { m = !1 }, 0) }

            function k(r) {
                var o = this;
                return function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if (4 === v.default.appType) return w("tap"), r.apply(o, t), void _();
                    __virtualDOM__.wrapTapMark(function() { r.apply(o, t) })
                }
            }

            function S() { return 4 === v.default.appType ? m : m || __virtualDOM__.checkTapMark() }

            function I(s, l) {
                return function(e) {
                    var t = this,
                        n = h(s, "tap"),
                        r = S(),
                        o = e;
                    if (10 !== n || r || (Object(p.reportRecycledAPI)({ name: s, scene: 0, strategy: 1 }), !d.IS_DEVTOOLS && Object(g.checkAPIAvailable)(s))) {
                        if ((20 === n && r || 30 === n) && ("function" == typeof e ? o = k.call(this, e) : "object" === Object(f.default)(e) && (o = Object.assign({}, e), ["success", "fail", "complete"].forEach(function(e) { "function" == typeof o[e] && (o[e] = k.call(t, o[e])) }))), 40 !== n || 4 === v.default.appType || r) { for (var a = arguments.length, i = new Array(1 < a ? a - 1 : 0), c = 1; c < a; c++) i[c - 1] = arguments[c]; var u = l.apply(this, [o].concat(i)); return 4 === v.default.appType && [10, 30, 40].includes(n) && _(), u }
                        e && (e.fail || e.complete) && setTimeout(function() { Object(b.beforeInvokeFail)(s, e, "can only be invoked by user TAP gesture.") }, 0)
                    } else e && (e.fail || e.complete) && setTimeout(function() { Object(b.beforeInvokeFail)(s, e, "can only be invoked by user TAP gesture.") }, 0)
                }
            }
        }, function(e, t, n) {
            n.r(t), n.d(t, "skiaCanvasMappings", function() { return w }), n.d(t, "canvasMap", function() { return _ }), n.d(t, "skiaCanvasInfo", function() { return k }), n.d(t, "canvasRefMapById", function() { return S }), n.d(t, "skiaCanvasInsert", function() { return O }), n.d(t, "skiaCanvasRemove", function() { return A }), n.d(t, "getSkiaCanvasById", function() { return C }), n.d(t, "CanvasFontManager", function() { return j }), n.d(t, "SkiaCanvas", function() { return P });
            var a = n(41),
                i = n(15),
                c = n(19),
                u = n(9),
                r = n(24),
                s = n(5),
                l = n(7),
                o = n(16),
                f = n(10),
                d = n(74),
                p = n(23),
                h = n(63);

            function v(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(u.default)(r); return t = o ? (e = Object(u.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(c.default)(this, t) } }

            function g(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) { if (!e) return; if ("string" == typeof e) return b(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t) }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);

                        function r() {}
                        var o = 0;
                        return { s: r, n: function() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] } }, e: function(e) { throw e }, f: r }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, i = !0,
                    c = !1;
                return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return i = e.done, e }, e: function(e) { c = !0, a = e }, f: function() { try { i || null == n.return || n.return() } finally { if (c) throw a } } }
            }

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var y = {},
                m = {},
                w = {},
                _ = new WeakMap,
                k = {},
                S = {},
                I = Object(o.getEventManager)("skiaCanvasLoadFontFace");

            function O(e, t) {
                var n = Object(f.concatId)(t, e.canvasNumber);
                w[n] = { top: e.position.top, left: e.position.left, width: e.position.width, height: e.position.height, canvasNumber: e.canvasNumber, nodeId: e.nodeId, pluginId: e.pluginId, webviewId: t }, k[e.canvasNumber] = { lastTouches: [], data: e.data, compPath: e.compPath };
                var r = y[n];
                "function" == typeof r && (r.call(), delete y[n]), Object(p.onBeforeUnloadPage)(t, function() { A(e, t) })
            }

            function A(e, t) {
                var n = Object(f.concatId)(t, e.canvasNumber);
                delete y[n], delete w[n], delete S[n], delete k[e.canvasNumber];
                var r = m[t];
                if (r) {
                    var o, a = g(r);
                    try {
                        for (a.s(); !(o = a.n()).done;) {
                            var i = o.value;
                            i && "function" == typeof i && i.apply()
                        }
                    } catch (e) { a.e(e) } finally { a.f() }
                    delete m[t]
                }
            }

            function C(e, t) {
                var n = Object(f.concatId)(e, t),
                    r = S[n];
                return r || null
            }
            var j = function() {
                function e() { Object(s.default)(this, e), this._fontAssets = [], this.loadFontFace(h.nativeFontAssets), this.subscribeFontLoadEvent() }
                return Object(l.default)(e, [{
                    key: "loadFontFace",
                    value: function(e) {
                        var t;
                        (t = this._fontAssets).push.apply(t, Object(r.default)(e))
                    }
                }, {
                    key: "subscribeFontLoadEvent",
                    value: function() {
                        var o = this;
                        I.internalOnMethod(function() {
                            var e, t = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).nativeFontAssets,
                                n = [],
                                r = g(t);
                            try {
                                for (r.s(); !(e = r.n()).done;) ! function() {
                                    var t = e.value;
                                    o._fontAssets.find(function(e) { return e.src === t.src || e.originalSrc === t.originalSrc }) || n.push(t)
                                }()
                            } catch (e) { r.e(e) } finally { r.f() }
                            0 < n.length && o.loadFontFace(n)
                        })
                    }
                }], [{ key: "initialize", value: function(e) { this.fontManagerInstance || (this.fontManagerInstance = new e) } }]), e
            }();
            j.fontManagerInstance = null;
            var P = function(e) {
                Object(i.default)(o, e);
                var r = v(o);

                function o(e, t) { var n; return Object(s.default)(this, o), (n = r.call(this))._webviewId = e, n._canvasId = Object(f.concatId)(e, t), S[n._canvasId] = Object(a.default)(n), n }
                return Object(l.default)(o, [{
                    key: "_init",
                    value: function() {
                        var e, t = w[this._canvasId];
                        this.id = t.canvasNumber, this._top = t.top, this._left = t.left, this._width = t.width, this._height = t.height, this.id ? ((e = this._initCanvasInstance()).width = 300, e.height = 150, _.set(this, e)) : console.error("Canvas node cannot be found")
                    }
                }, {
                    key: "_onReady",
                    value: function(e) {
                        function t() { _.get(n) || n._init(), r() }
                        var n = this,
                            r = 0 < arguments.length && void 0 !== e ? e : function() {};
                        w[this._canvasId] ? t() : y[this._canvasId] = t
                    }
                }, { key: "getContext", value: function(e, t) { if ("2d" === e) { var n = _.get(this); if (!n) return void console.error("Canvas getContext failed due to missing canvas instance"); if (this._ctx) return this._ctx; var r = n.getContext("2d", t); return Object.defineProperty(this, "_ctx", { enumerable: !1, configurable: !1, writable: !1, value: r }), r } "webgl" === e ? console.error("Canvas: current node only supports 2d context") : console.error("Invalid context type [" + e + "] for Canvas#getContext") } }, { key: "createImageData", value: function() {} }, { key: "createPath2D", value: function() {} }, {
                    key: "requestAnimationFrame",
                    value: function(e) {
                        var t = this,
                            n = this._webviewId;
                        m[n] || (m[n] = []), m[n].push(function() { t.cancelAnimationFrame(e) })
                    }
                }, { key: "cancelAnimationFrame", value: function() {} }, { key: "toDataURL", value: function(e, t) { var n = _.get(this); return n ? n.toDataURL(e, t) : "" } }, {
                    key: "width",
                    get: function() { var e = _.get(this); return e && e.width },
                    set: function(e) {
                        var t = _.get(this);
                        t && (t.width = e)
                    }
                }, {
                    key: "height",
                    get: function() { var e = _.get(this); return e && e.height },
                    set: function(e) {
                        var t = _.get(this);
                        t && (t.height = e)
                    }
                }]), o
            }(d.CanvasInterface)
        }, function(e, t, n) {
            n.r(t), n.d(t, "onPageReload", function() { return c }), n.d(t, "triggerBeforeUnloadPage", function() { return u }), n.d(t, "onBeforeUnloadPage", function() { return s }), n.d(t, "triggerBeforeShareAppMessage", function() { return l }), n.d(t, "onBeforeShareAppMessage", function() { return f });
            var r = n(14),
                o = n(0),
                a = n(4),
                i = new r.default;
            Object(o.onMethod)("onPageReload", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                e.webviewId = t, i.emit("onPageReload", e)
            });
            var c = function(t) { i.on("onPageReload", function(e) { e.path && (e.path = Object(a.removeHtmlSuffixFromUrl)(e.path)), "function" == typeof t && t(e) }) },
                u = function(e) { i.emit("onBeforeUnloadPage_" + e, e), i.removeAllListeners("onBeforeShareAppMessage_" + e) },
                s = function(e, t) { i.once("onBeforeUnloadPage_" + e, function(e) { "function" == typeof t && t(e) }) },
                l = function(e) { i.emit("onBeforeShareAppMessage_" + e, e) },
                f = function(e, t) { i.on("onBeforeShareAppMessage_" + e, function(e) { "function" == typeof t && t(e) }) }
        }, function(e, t, n) {
            n.r(t), n.d(t, "default", function() { return i });
            var r = n(53);
            var o = n(67),
                a = n(49);

            function i(e) { return function(e) { if (Array.isArray(e)) return Object(r.default)(e) }(e) || Object(o.default)(e) || Object(a.default)(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }
        }, function(e, t, n) {
            n.r(t), n.d(t, "checkPermission", function() { return r }), n.d(t, "checkPermissionSync", function() { return u }), n.d(t, "checkPluginPermissionSync", function() { return l });
            var o = n(18),
                a = n(0),
                i = n(6),
                c = {},
                r = function(r) {
                    if (!Object(i.isUndefined)(c[r])) return Promise.resolve(c[r]);
                    var e = [r];
                    return new Promise(function(n, t) {
                        Object(a.invokeMethod)("getPermissionBytes", {
                            indexes: e,
                            success: function(e) {
                                var t;
                                e.permissionBytes && (t = 1 === e.permissionBytes[0], c[r] = t, n(t))
                            },
                            fail: function(e) { t(e.errMsg) }
                        })
                    })
                },
                u = function(t) {
                    if (!Object(i.isUndefined)(c[t])) return c[t];
                    var e = [t],
                        n = !1;
                    return Object(a.invokeMethod)("getPermissionBytes", { indexes: e, success: function(e) { e.permissionBytes && (n = 1 === e.permissionBytes[0], c[t] = n) } }), n
                },
                s = {},
                l = function(t, n) {
                    if ("object" !== Object(o.default)(s[t]) && (s[t] = {}), !Object(i.isUndefined)(s[t][n])) return s[t][n];
                    var e = [n],
                        r = !1;
                    return Object(a.invokeMethod)("getPluginPermissionBytes", { pluginList: [{ indexes: e, pluginId: t }], success: function(e) { if (e.pluginPermissionMap) try { r = 1 === e.pluginPermissionMap[t][0], s[t][n] = r } catch (e) {} } }), r
                };
            Object(a.onMethod)("onPluginPermissionUpdate", function(e) {}), Object(a.onMethod)("onPermissionUpdate", function(e) {})
        }, function(e, t, n) {
            n.r(t), n.d(t, "LOG_LIMIT", function() { return r }), n.d(t, "AppStatus", function() { return o }), n.d(t, "BackgroudAPIBlackList", function() { return a }), n.d(t, "NotActiveAPIBlackList", function() { return i });
            var r = 1024,
                o = { FORE_GROUND: 0, BACK_GROUND: 1, LOCK: 2 },
                a = [],
                i = []
        }, function(e, t, n) {
            n.r(t), n.d(t, "default", function() { return r });
            var c = n(0),
                u = n(2);

            function r(t, n) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
                    a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : function() {},
                    i = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : function() {};
                return function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    r = a(e), Object(c.invokeMethod)("operateWXData", Object.assign({}, e, { data: Object.assign({ api_name: n }, o, r ? { data: r } : void 0), requestInQueue: !e.hasOwnProperty("requestInQueue") || Boolean(e.requestInQueue) }), {
                        beforeAll: function(e) { e.errMsg = e.errMsg.replace("operateWXData", t) },
                        beforeSuccess: function(e) {
                            var t;
                            u.IS_ANDROID && "string" == typeof e.data && (e.data = JSON.parse(e.data)), e.data.data && (e.rawData = e.data.data, t = JSON.parse(e.data.data), e = Object.assign(e, t)), e.data.signature && (e.signature = e.data.signature), e.data.encryptedData && (e.encryptedData = e.data.encryptedData, e.iv = e.data.iv, e.data.cloud_id && (e.cloudID = e.data.cloud_id)), delete e.data, e = i(e)
                        }
                    })
                }
            }
        }, function(e, t, n) {
            n.r(t), n.d(t, "error", function() { return o }), n.d(t, "isSystemError", function() { return a }), n.d(t, "isSDKError", function() { return i }), n.d(t, "isThirdError", function() { return c });
            var r = { 0: "OK", "10 01 2": "Global_APINoPermission", "10 02 2": "Global_APINoAuthorization", "10 03 1": "Global_FileStorageNotEnough", "13 01 3": "Render_CanvasIllegalInvocation", "13 02 3": "Render_FontFileInvalid", "13 03 3": "Render_ImageLoadFailed", "14 01 2": "Network_RequestTimeout", "15 01 3": "Storage_NotFound", "16 01 3": "File_NotExist", "22 00 2": "GameRecorder_UnknownError", "22 01 2": "GameRecorder_InternalFailed", "22 02 2": "GameRecorder_NotSupported", "22 10 3": "GameRecorder_StartDurationInvalid", "22 11 3": "GameRecorder_StartBitRateInvalid", "22 12 3": "GameRecorder_StartFPSInvalid", "22 13 3": "GameRecorder_StartGOPInvalid", "22 14 3": "GameRecorder_StartWhileAlreadyStartRecording", "22 15 3": "GameRecorder_StartWhilePaused", "22 20 3": "GameRecorder_PauseWhileNotStartRecording", "22 21 3": "GameRecorder_PauseWhileAlreadyPaused", "22 30 3": "GameRecorder_ResumeWhileNotStartRecording", "22 31 3": "GameRecorder_ResumeWhileRecording", "22 40 3": "GameRecorder_AbortWhileNotStartRecording", "22 50 3": "GameRecorder_StopWhileNotStartRecording", "22 60 3": "GameRecorder_NoVideo", "22 61 3": "GameRecorder_BGMNotFound", "22 62 3": "GameRecorder_TimeRangeInvalid", "22 63 3": "GameRecorder_EditDurationOutOfLimit", "22 64 3": "GameRecorder_TimeRangeTooShort", "23 00 2": "MediaRecorder_UnknownError", "23 01 2": "MediaRecorder_InternalFailed", "23 02 2": "MediaRecorder_NotSupported", "23 10 3": "MediaRecorder_StartDurationInvalid", "23 11 3": "MediaRecorder_StartBitRateInvalid", "23 12 3": "MediaRecorder_StartFPSInvalid", "23 13 3": "MediaRecorder_StartGOPInvalid", "23 14 3": "MediaRecorder_StartWhileAlreadyStartRecording", "23 15 3": "MediaRecorder_StartWhilePaused", "23 20 3": "MediaRecorder_PauseWhileNotStartRecording", "23 21 3": "MediaRecorder_PauseWhileAlreadyPaused", "23 30 3": "MediaRecorder_ResumeWhileNotStartRecording", "23 31 3": "MediaRecorder_ResumeWhileRecording", "23 40 3": "MediaRecorder_AbortWhileNotStartRecording", "23 50 3": "MediaRecorder_StopWhileNotStartRecording", "23 60 3": "MediaRecorder_NoVideo", "23 61 3": "MediaRecorder_BGMNotFound", "23 62 3": "MediaRecorder_TimeRangeInvalid", "23 63 3": "MediaRecorder_EditDurationOutOfLimit", "23 64 3": "MediaRecorder_TimeRangeTooShort" },
                o = Object.keys(r).reduce(function(e, t) { var n = parseInt(t.replace(/\s/g, ""), 10); return e[r[t]] = n, e }, {}),
                a = function(e) { return e.toString().endsWith(1) },
                i = function(e) { return e.toString().endsWith(2) },
                c = function(e) { return e.toString().endsWith(3) }
        }, function(e, t, n) {
            n.r(t), n.d(t, "operateWXData", function() { return o }), n.d(t, "_operateWXData", function() { return a }), n.d(t, "constructOperateWXData", function() { return r }), n.d(t, "_pluginOperateWXData", function() { return i });
            var u = n(0),
                s = n(2),
                r = function(e, t, n, r) {
                    var o = !(0 < arguments.length && void 0 !== e) || e,
                        a = 1 < arguments.length ? t : void 0,
                        i = 2 < arguments.length && void 0 !== n && n,
                        c = 3 < arguments.length && void 0 !== r && r;
                    return function() {
                        var e, t, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        Object(u.beforeInvoke)("operateWXData", n, { apiName: "" }) && (e = { api_name: n.apiName, data: n.reqData || {}, operate_directly: o }, i && (e.plugin_appid = n.pluginId), t = { data: e, isImportant: !0 === c, requestInQueue: !n.hasOwnProperty("requestInQueue") || Boolean(n.requestInQueue) }, Object(u.invokeMethod)("operateWXData", Object.assign({}, t, n), { beforeAll: function(e) { void 0 !== a && (e.errMsg = e.errMsg.replace("operateWXData", a)) }, beforeSuccess: function(e) { s.IS_ANDROID && "string" == typeof e.data && (e.data = JSON.parse(e.data)), void 0 !== e.data.data && (e.rawData = e.data.data), e.data.encryptedData && (e.encryptedData = e.data.encryptedData, e.iv = e.data.iv, e.data.cloud_id && (e.cloudID = e.data.cloud_id)), e.respData = e.data, delete e.data } }))
                    }
                },
                o = r(!0),
                a = r(!1),
                i = r(!0, void 0, !0)
        }, function(e, t, n) {
            n.r(t), n.d(t, "default", function() { return i });
            var r = n(64);
            var o = n(49),
                a = n(65);

            function i(e, t) {
                return Object(r.default)(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            r = !0,
                            o = !1,
                            a = void 0;
                        try { for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try { r || null == c.return || c.return() } finally { if (o) throw a } }
                        return n
                    }
                }(e, t) || Object(o.default)(e, t) || Object(a.default)()
            }
        }, function(e, t, n) {
            function r(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }
            n.r(t), n.d(t, "hasOwnProperty", function() { return r })
        }, function(e, t, n) {
            n.r(t), n.d(t, "NetworkTask", function() { return E }), n.d(t, "registerTaskType", function() { return N });
            var p = n(30),
                h = n(18),
                r = n(20),
                s = n(5),
                o = n(7),
                c = n(21),
                y = n(40),
                a = n(43),
                v = n(12),
                u = n(6),
                i = n(44),
                l = (n(45), i.default.app),
                f = (l.saveFile, l.saveFileSync, l.getSavedFileList, l.getSavedFileInfo, l.removeSavedFile, l.getFileInfo, l.readFile, l.readFileSync, l.writeFile, l.writeFileSync, l.mkdir, l.mkdirSync, l.rmdir, l.rmdirSync, l.readdir, l.readdirSync, l.access, l.accessSync, l.unlink, l.unlinkSync, l.stat);
            l.statSync, l.unzip, l.copyFile, l.copyFileSync, l.rename, l.renameSync, l.appendFile, l.appendFileSync;
            var d = n(2),
                g = n(71),
                b = n(1),
                m = Object(v.promisify)(f),
                w = 0,
                _ = new WeakMap,
                k = new WeakMap,
                S = new WeakMap,
                I = new WeakMap,
                O = new WeakMap,
                A = new WeakMap,
                C = new WeakMap,
                j = new WeakMap,
                P = new WeakMap,
                M = {},
                T = new a.Emitter("Network", !0),
                x = wxNativeConsole.createLogger("NetworkTask"),
                E = function() {
                    function u(e, t) {
                        var n = this,
                            r = t.taskType,
                            o = t.beforeSend,
                            a = t.beforeSuccess;
                        Object(s.default)(this, u);
                        var i = w++;
                        x.debug("[" + r + "][" + i + "]constructor", e), _.set(this, i), S.set(this, "waiting"), I.set(this, e), O.set(this, r), C.set(this, o), j.set(this, a);
                        var c = !1;
                        d.IS_ANDROID && 654315008 <= b.default.clientVersion && ("Download" !== r && "Request" !== r || Object.keys(b.default.plugins || {}).forEach(function(e) {
                            var t = b.default.plugins[e];
                            t && "wx20afc706a711eefc" === t.provider && (c = !0)
                        })), P.set(this, c), this.promise = new g.WxPromise(function(e, t) { n.resolve = e, n.reject = t }), ! function() { var e = O.get(this); return M[e].currentTaskCount >= M[e].maxTaskCount }.call(this) ? R.call(this) : M[r].taskQueue.push({ id: i, item: this })
                    }
                    return Object(o.default)(u, [{
                        key: "abort",
                        value: function() {
                            var e, t = this;
                            x.info("[" + O.get(this) + "][" + _.get(this) + "]abort()"), "waiting" === S.get(this) ? (x.info("[" + O.get(this) + "][" + _.get(this) + "] waiting=true"), -1 < (e = M[O.get(this)].taskQueue.findIndex(function(e) { return e.id === _.get(t) })) && (M[O.get(this)].taskQueue.splice(e, 1), Object(c.beforeInvokeFail)(M[O.get(this)].functionName, I.get(this), "abort")), S.set(this, "done")) : this.promise.then(function() {
                                var e;
                                Object(c.invokeMethod)("operate" + O.get(t) + "Task", (e = {}, Object(r.default)(e, O.get(t).toLowerCase() + "TaskId", k.get(t)), Object(r.default)(e, "operationType", "abort"), e))
                            })
                        }
                    }, {
                        key: "onProgressUpdate",
                        value: function(e) {
                            var t = this;
                            P.get(this) ? this.promise.then(function() { T.on("" + O.get(t) + k.get(t) + "progressUpdate", e) }) : T.on("" + O.get(this) + k.get(this) + "progressUpdate", e)
                        }
                    }, { key: "offProgressUpdate", value: function(e) { T.off("" + O.get(this) + k.get(this) + "progressUpdate", e) } }, {
                        key: "onHeadersReceived",
                        value: function(e) {
                            var t = this;
                            P.get(this) ? this.promise.then(function() { T.on("" + O.get(t) + k.get(t) + "headersReceived", e) }) : T.on("" + O.get(this) + k.get(this) + "headersReceived", e)
                        }
                    }, { key: "offHeadersReceived", value: function(e) { T.off("" + O.get(this) + k.get(this) + "headersReceived", e) } }]), u
                }();

            function D(e, t, n) { Object(c.beforeInvokeCallback)({ name: M[e].functionName, args: { success: t.success, fail: t.fail, complete: t.complete }, success: !1, errMsg: n }) }

            function R() {
                var e = this,
                    t = I.get(this),
                    n = O.get(this),
                    r = P.get(this);
                S.set(this, "sending"), A.set(this, Date.now());
                var o = function() {
                    var n, r = this,
                        o = O.get(this),
                        a = I.get(this);
                    M[o].currentTaskCount++;
                    var e = {
                            data: a.data,
                            url: a.url,
                            header: a.header,
                            method: a.method,
                            timeout: Object(u.isNumber)(a.timeout) ? a.timeout : 0,
                            enableHttp2: !!Object(u.isBoolean)(a.enableHttp2) && a.enableHttp2,
                            enableQuic: !!Object(u.isBoolean)(a.enableQuic) && a.enableQuic,
                            enableCache: !!Object(u.isBoolean)(a.enableCache) && a.enableCache,
                            enableProfile: !Object(u.isBoolean)(a.enableProfile) || a.enableProfile,
                            __skipDomainCheck__: a.__skipDomainCheck__,
                            success: function(e) {
                                var t = e[o.toLowerCase() + "TaskId"];
                                k.set(r, t), (M[o].taskIdMap[t] = r).resolve(), x.info("[" + o + "][createTask][Success] taskId=" + t)
                            },
                            fail: function(e) {
                                M[o].currentTaskCount--;
                                var t = e[o.toLowerCase() + "TaskId"];
                                n = e.errMsg, F.call(r, { taskType: o, options: a, errMsg: n, success: !1 }), r.reject(n), x.error("[" + o + "][createTask][Fail] taskId=" + t)
                            },
                            complete: function() { S.set(r, "done") }
                        },
                        t = P.get(this),
                        i = "create" + o + "Task" + (t ? "Async" : "");
                    return Object(c.invokeMethod)(i, C.get(this)(e)), n
                }.call(this);
                r ? this.promise.then(function() { B.call(e) }).catch(function(e) { D(n, t, e) }) : o ? D(n, t, o) : B.call(this)
            }

            function B() {
                var t = this,
                    e = k.get(this),
                    n = I.get(this),
                    r = O.get(this),
                    o = M[r].functionName;
                T.on("" + r + e + "success", function(e) { j.get(t).call(t, e), Object(c.beforeInvokeCallback)({ name: o, args: { success: n.success, fail: n.fail, complete: n.complete }, res: e }) }), T.on("" + r + e + "fail", function(e) { Object(c.beforeInvokeCallback)({ name: o, args: { success: n.success, fail: n.fail, complete: n.complete }, success: !1, errMsg: e.errMsg }) })
            }

            function F(e) {
                var t = e.taskType,
                    n = e.options,
                    r = e.errMsg,
                    o = e.success,
                    a = void 0 === o || o,
                    i = e.dataLength,
                    c = void 0 === i ? 0 : i,
                    u = e.statusCode,
                    s = void 0 === u ? "" : u,
                    l = e.responseDataLength,
                    f = void 0 === l ? 0 : l,
                    d = e.profile,
                    p = void 0 === d ? {} : d,
                    h = n.url,
                    v = a ? 1 : 2,
                    g = Date.now() - A.get(this),
                    b = n.__skipDomainCheck__;
                6e4 <= g && x.error("reportTask costTime too long: " + g + "ms, taskId=" + k.get(this)), Object(y.reportNetworkAPI)(M[t].functionName, h, v, g, r, s, b, c, f, p)
            }

            function L(o, a) {
                var e, t = a.toLowerCase() + "TaskId",
                    n = o[t],
                    i = o.state,
                    r = o.header;
                if (delete o.state, delete o[t], o.cookies = r && (e = r["Set-Cookie"] || r["set-cookie"]) ? Array.isArray(e) ? e : e.split(",").reduce(function(e, t) { return /^\s*\S+=/.test(t) ? e.push(t) : e.length && (e[e.length - 1] += t), e }, []).map(function(e) { return e.trim() }) : [], T.emit("" + a + n + i, o), "success" === i || "fail" === i) {
                    x.info("[onNetworkTaskStateChange][" + a + "] taskId=" + n + ", state=" + i);
                    var c = M[a].taskIdMap[n],
                        u = I.get(c);
                    if (!c) return;
                    --M[a].currentTaskCount, 0 < M[a].taskQueue.length && R.call(M[a].taskQueue.shift().item);
                    var s, l = Promise.resolve(Object(v.getDataLength)(u.data));
                    "Upload" === a && (s = 0, "object" === Object(h.default)(u.formData) && null !== u.formData && (s = JSON.stringify(u.formData).length), l = m({ path: u.filePath }).then(function(e) { return s + e.stats.size }).catch(function() { return s }));
                    var f, d = Promise.resolve(Object(v.getDataLength)(o.data));
                    "Download" === a && (d = "number" == typeof(f = o.dataLength) ? Promise.resolve(f) : m({ path: o.filePath || o.tempFilePath || "" }).then(function(e) { return e.stats.size }).catch(function() { return 0 })), Promise.all([l, d]).then(function(e) {
                            var t = Object(p.default)(e, 2),
                                n = t[0],
                                r = t[1];
                            F.call(c, { taskType: a, options: u, errMsg: o.errMsg, statusCode: o.statusCode, success: "success" === i, dataLength: n, responseDataLength: r, profile: o.profile })
                        }),
                        function() {
                            var e = O.get(this),
                                t = k.get(this);
                            delete M[e].taskIdMap[t], T.removeAllListeners("" + e + t + "success"), T.removeAllListeners("" + e + t + "fail"), T.removeAllListeners("" + e + t + "complete")
                        }.call(c)
                }
            }

            function N(t, e) {
                var n = this,
                    r = M[t] ? M[t] : { currentTaskCount: 0, maxTaskCount: 10, taskQueue: [], functionName: "", taskIdMap: {} };
                Object(c.onMethod)("on" + t + "TaskStateChange", function(e) { L.call(n, e, t) }), M[t] = Object.assign(r, e)
            }
        }, function(e, t) {
            var n = function() { return this }();
            try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
            e.exports = n
        }, function(e, t, n) {
            n.r(t), n.d(t, "createVideoContext", function() { return U }), n.d(t, "createSQVideoContext", function() { return G }), n.d(t, "VideoContext", function() { return B }), n.d(t, "getVideoElementByContext", function() { return V }), n.d(t, "playerInfo", function() { return T }), n.d(t, "pipInfo", function() { return S });
            var c = n(15),
                a = n(19),
                i = n(9),
                r = n(20),
                u = n(7),
                s = n(5),
                o = n(14),
                l = n(0),
                f = n(4),
                d = n(26),
                p = n(23),
                h = n(3),
                v = n(1),
                g = n(2);

            function b(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(i.default)(r); return t = o ? (e = Object(i.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(a.default)(this, t) } }

            function y(t, e) { var n, r = Object.keys(t); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, n)), r }

            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(n), !0).forEach(function(e) { Object(r.default)(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
                }
                return t
            }
            var w = g.IS_DEVTOOLS || g.IS_WINDOWS || g.IS_MAC,
                _ = {},
                k = {},
                S = {},
                I = new o.EventEmitter2,
                O = {},
                A = new WeakMap,
                C = {},
                j = {},
                P = ["play", "pause", "stop", "seek", "sendDanmu", "playbackRate", "requestFullScreen", "exitFullScreen", "showStatusBar", "hideStatusBar", "exitPictureInPicture", "requestBackgroundPlayback", "exitBackgroundPlayback", "hidePoster"],
                M = {},
                T = {},
                x = v.default.useXWebVideo,
                E = !0,
                D = Object.keys;

            function R(e) {
                O[e] || (O[e] = !0, Object(p.onBeforeUnloadPage)(e, function(t) {
                    delete O[t], D(_).concat(D(k)).forEach(function(e) { new RegExp("^" + t).test(e) && delete _[e] }), D(C).forEach(function(e) {
                        (new RegExp("^api_" + t).test(e) || new RegExp("^SQ_" + t).test(e)) && delete C[e]
                    })
                }))
            }
            Object(l.subscribe)("updateVideoPictureInPicture", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length ? arguments[1] : void 0;
                S.webviewId = t, S.playerId = e.playerId
            }), Object(l.subscribe)("videoAdPlay", function(e, t) {
                var n = e.videoPlayerId,
                    r = e.type;
                j[t + "_" + n] = r
            }), Object(l.subscribe)("videoPlayerInsert", function(e, t) {
                var n = e.domId,
                    r = e.videoPlayerId,
                    o = e.pluginId,
                    a = e.nodeId,
                    i = e.nodeInfo,
                    c = e.data,
                    u = t + "_" + o + "_" + n + "_";
                a && a !== __virtualDOM__.getRootNodeId(t) && (u += a),
                    function(e, t, n) {
                        if (!g.IS_DEVTOOLS) return;
                        var r = document.createElement("video");
                        e.elem = r, k[n + "_" + t] = e, r.controls = !1, r.preload = "auto", r.muted = !0, r.autoplay = e.autoplay, r.style.width = e.width + "px", r.style.height = e.height + "px"
                    }(i, _[u] = r, t), I.emit("videoPlayerInsert"), R(t), T[t + "_" + r] = c || {}
            }), Object(l.subscribe)("xWebVideoInserted", function(e, t) {
                var n = e.domId,
                    r = e.viewId,
                    o = e.pluginId,
                    a = e.nodeId,
                    i = e.data,
                    c = t + "_" + o + "_" + n + "_";
                a && a !== __virtualDOM__.getRootNodeId(t) && (c += a), _[c] = r, T[t + "_" + r] = i || {}, I.emit("videoPlayerInsert"), R(t)
            }), Object(l.subscribe)("videoPlayerUpdated", function(e, t) {
                var n = e.action,
                    r = e.value;
                W({ _videoId: e.videoPlayerId, _webviewId: t }, n, r)
            }), Object(l.subscribe)("videoPlayerRemoved", function(e, t) {
                var n = e.domId,
                    r = e.videoPlayerId,
                    o = e.pluginId,
                    a = e.nodeId,
                    i = t + "_" + o + "_" + n + "_";
                a && a !== __virtualDOM__.getRootNodeId(t) && (i += a), delete _[i], delete k[t + "_" + r];
                var c = "api_" + t + "_" + o + "_" + n + "_";
                a && a !== __virtualDOM__.getRootNodeId(t) && (c += a);
                var u = "SQ_" + t + "_" + r;
                delete C[c], delete C[u], delete T[t + "_" + r]
            }), Object(l.subscribe)("xWebVideoRemoved", function(e, t) {
                var n = e.domId,
                    r = e.pluginId,
                    o = e.nodeId,
                    a = t + "_" + r + "_" + n + "_";
                o && o !== __virtualDOM__.getRootNodeId(t) && (a += o);
                var i = _[a];
                delete _[a], delete T[t + "_" + i]
            }), Object(l.subscribe)("xWebVideoSupported", function(e) {
                var t = e.isXWebSupported;
                x = x && t
            }), Object(l.subscribe)("insertVideoToWebLayerStateChanged", function(e, t) {
                var n = e.viewId,
                    r = e.inserted;
                M[t + "_" + n] = r
            }), v.default.onReady(function() { v.default.global && v.default.global.window && "seperated" === v.default.global.window.renderingMode && (x = E = !1) });
            var B = function e() { Object(s.default)(this, e) },
                F = function() {
                    function o(e, t) {
                        var n = this;
                        Object(s.default)(this, o);
                        var r = this.exportContext = new B;
                        P.forEach(function(e) { r[e] = n[e].bind(n) }), r._videoId = e, r._webviewId = t
                    }
                    return Object(u.default)(o, [{
                        key: "play",
                        value: function() {
                            var e = this._getAppStatus();
                            e === d.AppStatus.BACK_GROUND || e === d.AppStatus.LOCK || this._invokeMethod("play")
                        }
                    }, { key: "pause", value: function() { this._invokeMethod("pause") } }, { key: "stop", value: function() { this._invokeMethod("stop") } }, {
                        key: "seek",
                        value: function(e, t) {
                            var n = 1 < arguments.length && void 0 !== t ? t : "accurate";
                            if ("accurate" !== n && "inaccurate" !== n) throw new f.ThirdScriptError("Parameter 2 must either be `accurate` or be `inaccurate`");
                            this._invokeMethod("seek", [e, n])
                        }
                    }, {
                        key: "sendDanmu",
                        value: function(e) {
                            var t = e.text,
                                n = e.color;
                            this._invokeMethod("sendDanmu", [t, n])
                        }
                    }, { key: "playbackRate", value: function(e) { .5 !== (e = parseFloat(e.toFixed(2))) && .8 !== e && 1 !== e && 1.25 !== e && 1.5 !== e && 2 !== e || this._invokeMethod("playbackRate", [e]) } }, { key: "requestFullScreen", value: function(e) { var t = (0 < arguments.length && void 0 !== e ? e : {}).direction; - 1 < [0, 90, -90].indexOf(t) ? this._invokeMethod("requestFullScreen", [t]) : this._invokeMethod("requestFullScreen"), A.set(this, !0) } }, { key: "exitFullScreen", value: function() { this._invokeMethod("exitFullScreen"), this.showStatusBar(), A.set(this, !1) } }, {
                        key: "showStatusBar",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            Object(l.invokeMethod)("showStatusBar", t)
                        }
                    }, {
                        key: "hideStatusBar",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            if (g.IS_ANDROID) { var n = "hideStatusBar:ok"; return "function" == typeof t.success && t.success({ errMsg: n }), void("function" == typeof t.complete && t.complete({ errMsg: n })) }
                            if (!A.get(this)) { var r = "hideStatusBar:fail cannot be invoked but in fullscreen."; return "function" == typeof t.fail && t.fail({ errMsg: r }), void("function" == typeof t.complete && t.complete({ errMsg: r })) }
                            Object(l.invokeMethod)("hideStatusBar", t)
                        }
                    }, {
                        key: "exitPictureInPicture",
                        value: function(e) {
                            var t, n = 0 < arguments.length && void 0 !== e ? e : {};
                            S && (t = S.playerId, g.IS_IOS ? Object(l.invokeMethod)("operateVideoPlayer", m(m({}, n), {}, { videoPlayerId: t, type: "exitPictureInPicture" }), { beforeAll: function(e) { e.errMsg = e.errMsg.replace("operateVideoPlayer", "exitPictureInPicture") } }) : g.IS_ANDROID && Object(l.invokeMethod)("operateXWebVideo", m(m({}, n), {}, { viewId: t, type: "exitPictureInPicture" }), { beforeAll: function(e) { e.errMsg = e.errMsg.replace("operateXWebVideo", "exitPictureInPicture") } }))
                        }
                    }, { key: "requestBackgroundPlayback", value: function() { this._invokeMethod("requestBackgroundPlayback", []) } }, { key: "exitBackgroundPlayback", value: function() { this._invokeMethod("exitBackgroundPlayback", []) } }, { key: "hidePoster", value: function() { this._invokeMethod("hidePoster") } }, {
                        key: "_invokeMethodWithId",
                        value: function(n, r, o) {
                            var e = this;
                            "number" == typeof n ? function() {
                                if ("begin" !== j[this.webviewId + "_" + n])
                                    if (E && (g.IS_ANDROID && x || g.IS_IOS && M[this.webviewId + "_" + n]) && -1 < ["requestFullScreen", "exitFullScreen", "sendDanmu", "seek", "stop", "play"].indexOf(r)) Object(l.publish)("video_" + this.webviewId + "_" + n + "_actionChanged", { method: r, data: o }, [this.webviewId]);
                                    else {
                                        var e = this._getAppStatus();
                                        if (!w && e === d.AppStatus.BACK_GROUND && "stop" === r) { var t = "operateVideoPlayerBackground"; return g.IS_ANDROID && x && (t = "operateXWebVideoBackground"), void Object(l.invokeMethod)(t, { viewId: n, videoPlayerId: n, type: r }) }
                                        w ? (this._sendAction(n, { method: r, data: o }), -1 < ["play", "pause", "stop", "seek", "playbackRate"].indexOf(r) && W(this.exportContext, r, o && o[0])) : g.IS_ANDROID && x ? Object(l.invokeMethod)("operateXWebVideo", { viewId: n, type: r, data: o }) : Object(l.invokeMethod)("operateVideoPlayer", { data: o, videoPlayerId: n, type: r })
                                    }
                                else console.error(r + ":fail cannot operate video while ad playing.")
                            }.apply(this) : I.once("videoPlayerInsert", function() { e._invokeMethod(r, o) })
                        }
                    }, { key: "_sendActionWithEvnetName", value: function(e, t) { Object(l.publish)(e, t, [this.webviewId]) } }, { key: "_getAppStatus", value: function() { return h.default.appStatus } }, { key: "_getHanged", value: function() { return h.default.hanged } }]), o
                }(),
                L = function(e) {
                    Object(c.default)(i, e);
                    var a = b(i);

                    function i(e, t, n, r) { var o; if (Object(s.default)(this, i), o = a.call(this), "string" != typeof e) throw new f.ThirdScriptError("Parameter 1 should be a string"); return o.domId = e, o.webviewId = t, o.pluginId = r, o.nodeId = n, o }
                    return Object(u.default)(i, [{
                        key: "_invokeMethod",
                        value: function(e, t) {
                            var n = this.webviewId + "_" + this.pluginId + "_" + this.domId + "_" + this.nodeId,
                                r = _[n];
                            this._invokeMethodWithId(r, e, t)
                        }
                    }, { key: "_sendAction", value: function(e, t) { this._sendActionWithEvnetName("video_" + this.webviewId + "_" + e + "_actionChanged", t) } }]), i
                }(F),
                N = function(e) {
                    Object(c.default)(o, e);
                    var r = b(o);

                    function o(e, t) { var n; return Object(s.default)(this, o), (n = r.call(this, e, t)).videoPlayerId = e, n.webviewId = t, n }
                    return Object(u.default)(o, [{
                        key: "_invokeMethod",
                        value: function(e, t) {
                            var n = this.videoPlayerId;
                            this._invokeMethodWithId(n, e, t)
                        }
                    }, { key: "_sendAction", value: function(e, t) { this._sendActionWithEvnetName("video_" + this.webviewId + "_" + e + "_actionChanged", t) } }]), o
                }(F);

            function W(e, t, n) {
                if (g.IS_DEVTOOLS && void 0 !== e._webviewId) {
                    var r = k[e._webviewId + "_" + e._videoId].elem;
                    switch (t) {
                        case "setSrc":
                            r.src = n;
                            break;
                        case "play":
                            r.play();
                            break;
                        case "pause":
                        case "stop":
                            r.pause();
                            break;
                        case "seek":
                            0 === r.readyState || 1 === r.readyState ? r.oncanplay = function() { r.currentTime = n, r.oncanplay = null } : r.currentTime = n;
                            break;
                        case "playbackRate":
                            r.playbackRate = n
                    }
                }
            }

            function V(e) { return k[e._webviewId + "_" + e._videoId].elem }

            function U(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                    r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "",
                    o = "api_" + t + "_" + r + "_" + e + "_";
                if (n && n !== __virtualDOM__.getRootNodeId(t) && (o += n), C[o]) return C[o].exportContext;
                var a = new L(e, t, n, r);
                return (C[o] = a).exportContext
            }

            function G(e, t) { var n = "SQ_" + t + "_" + e; if (C[n]) return C[n].exportContext; var r = new N(e, t); return (C[n] = r).exportContext }
        }, function(e, t, n) {
            n.r(t), n.d(t, "default", function() { return r });
            var a = n(50);

            function r(e, t, n) {
                return (r = function() { if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) { if ("function" == typeof Proxy) return 1; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1 } catch (e) { return } } }() ? Reflect.construct : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var o = new(Function.bind.apply(e, r));
                    return n && Object(a.default)(o, n.prototype), o
                }).apply(null, arguments)
            }
        }, function(e, t, n) {
            n.r(t), n.d(t, "default", function() { return r });
            var a = n(9);

            function r(e, t, n) { return (r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) { var r = function(e, t) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Object(a.default)(e));); return e }(e, t); if (r) { var o = Object.getOwnPropertyDescriptor(r, t); return o.get ? o.get.call(n) : o.value } })(e, t, n || e) }
        }, function(e, t, n) {
            n.r(t), n.d(t, "getNetworkType", function() { return u }), n.d(t, "onNetworkStatusChange", function() { return s }), n.d(t, "offNetworkStatusChange", function() { return l }), n.d(t, "_getCurrentNetworkType", function() { return f });
            var r = n(0),
                o = n(16),
                a = n(1),
                i = "",
                c = Object(o.getEventManager)("networkstatusChange"),
                u = function(e) { Object(r.invokeMethod)("getNetworkType", e) },
                s = c.onMethod,
                l = c.offMethod,
                f = function() { return i };
            Object(r.onMethod)("onNetworkStatusChange", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                i = e.networkType, c.emit(e), Object(r.publish)("onNetworkStatusChange", e)
            }), a.default.onReady(function() { u({ success: function(e) { i = e.networkType } }) })
        }, function(e, t, n) {
            n.r(t), n.d(t, "GlobalEmitter", function() { return a }), n.d(t, "FakeTempFilePathMap", function() { return i });
            var r = n(14),
                o = n(8),
                a = new r.default,
                i = { map: {}, set: function(e) { var t = Object(o.guid)(); return this.map[t] = e, t }, get: function(e) { var t = this; return e ? this.map[e] : Object.keys(this.map).map(function(e) { return t.map[e] }) } }
        }, function(e, i, v) {
            v.r(i),
                function(s) {
                    v.d(i, "skiaCanvasInsert", function() { return n }), v.d(i, "skiaCanvasRemove", function() { return o }), v.d(i, "getOrCreateCanvas", function() { return p }), v.d(i, "SkiaCanvas", function() { return a });
                    var S = v(76),
                        I = v(24),
                        r = v(5),
                        e = v(7),
                        t = v(0),
                        l = v(10),
                        f = v(4),
                        d = v(2),
                        u = {},
                        c = {};

                    function n(e, t) {
                        var n = e.canvasId,
                            r = e.viewId,
                            o = e.canvasNumber,
                            a = e.pluginId,
                            i = e.position,
                            c = e.nodeId,
                            u = Object(l.concatId)(t, n, a, c),
                            s = p(u);
                        s.context && (s = h(u)), s.context || s.init(o, i.width, i.height, r, t)
                    }

                    function o(e) {
                        var t = e.canvasId,
                            n = e.pluginId,
                            r = e.nodeId,
                            o = e.viewId,
                            a = e.webviewId,
                            i = Object(l.concatId)(a, t, n, r);
                        delete u[i], delete c[o]
                    }

                    function p(e) { return u[e] ? u[e] : h(e) }

                    function h(e) { var t = new a(e); return u[e] = t }
                    d.IS_ANDROID && Object(t.onMethod)("onXWebCanvasSurfaceChange", function() {
                        var e = c[(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).viewId];
                        e && "function" == typeof e.swapSurface && e.swapSurface()
                    }), Object(t.subscribe)("skiaCanvasSizeChanged", function(e, t) {
                        var n = e.canvasId,
                            r = e.pluginId,
                            o = e.nodeId,
                            a = e.position,
                            i = Object(l.concatId)(t, n, r, o),
                            c = u[i];
                        0 === a.width && 0 === a.height || !c || c.width === a.width && c.height === a.height || (c.width = a.width, c.height = a.height, c.canvas && c.context && (c.canvas.width = a.width, c.canvas.height = a.height, c.needsReplay() && c.replayActions()))
                    });
                    var a = function() {
                        function n(e) {
                            var t = this;
                            Object(r.default)(this, n), this.id = e, this.width = 0, this.height = 0, this.context = null, this._actionsDefer = [], this._actionsWaiting = !1, this._images = [], this._actionsQueue = [], this._contextPromise = new Promise(function(e) { t._resolveContext = e })
                        }
                        return Object(e.default)(n, [{ key: "init", value: function(e, t, n, r) { this.width = t, this.height = n, d.IS_IOS && (this.canvas = new s.Canvas(e), this.context = this.canvas.getContext("2d")), d.IS_ANDROID && (this.canvasView = HTMLCanvasView.createView(r), c[r] = this.canvasView, this.canvas = HTMLCanvasElement.createElement(this.canvasView), this.context = this.canvas.getContext("2d")), this._resolveContext && this._resolveContext(this.context) } }, {
                            key: "preloadImage",
                            value: function(e) {
                                var o = this;
                                e.forEach(function(e) {
                                    var t = "",
                                        n = e.method,
                                        r = e.data;
                                    "drawImage" === n ? t = r[0] : "setFillStyle" === n && "pattern" === r[0] && (t = r[1]), t && !o._images[t] && (d.IS_IOS ? (o._images[t] = new s.Image, o._images[t].onload = function() { o._images[t].ready = !0 }) : d.IS_ANDROID && (o._images[t] = new SkiaImage, o._images[t].onload = function() { o._images[t].ready = !0 }), o._images[t].setSrc(t))
                                })
                            }
                        }, {
                            key: "checkImageLoaded",
                            value: function(e, t, n) {
                                var r = this,
                                    o = this._images[e];
                                return o.ready ? (n(o), !0) : (this._actionsDefer.unshift([t, !0]), this._actionsWaiting = !0, !(o.onload = function() {
                                    o.ready = !0, n(o), r._actionsWaiting = !1;
                                    var e = r._actionsDefer.slice(0);
                                    r._actionsDefer = [];
                                    for (var t = e.shift(); t;) r.draw(t[0], t[1], t[2], r._webviewId, r._nodeId, r._pluginId), t = e.shift()
                                }))
                            }
                        }, {
                            key: "draw",
                            value: function(e, t, n, r, o, a) {
                                var i = this;
                                this._webviewId = r, this._nodeId = o, this._pluginId = a, this.context ? this._draw(e, t, n, r, o, a) : this._contextPromise.then(function() { return i._draw(e, t, n, r, o, a), null }).catch(function() {})
                            }
                        }, {
                            key: "_draw",
                            value: function(w, e, t, n, r, o) {
                                var _ = this,
                                    k = this.context;
                                if (w)
                                    if (e || this._flushQueue(), this._enqueue({ actions: w, reserve: e }), this._actionsWaiting) this._actionsDefer.push([w, e, t]);
                                    else {
                                        e || (k.fillStyle = "#000000", k.strokeStyle = "#000000", k.shadowColor = "#000000", k.shadowBlur = 0, k.shadowOffsetX = 0, k.shadowOffsetY = 0, k.setTransform(1, 0, 0, 1, 0, 0), k.clearRect(0, 0, this.width, this.height)), this.preloadImage(w, n, r, o), k.save();
                                        for (var a = 0; a < w.length; a++) {
                                            if ("break" === function(e) {
                                                    var t, n, r, o, a = w[e],
                                                        i = a.method,
                                                        c = a.data;
                                                    if (/^set/.test(i) && "setTransform" !== i) {
                                                        var u, s = i[3].toLowerCase() + i.slice(4),
                                                            l = void 0;
                                                        if ("fillStyle" === s || "strokeStyle" === s) {
                                                            if ("normal" === c[0]) l = c[1];
                                                            else if ("linear" === c[0]) l = k.createLinearGradient.apply(k, Object(I.default)(c[1])), c[2].forEach(function(e) {
                                                                var t = e[0],
                                                                    n = e[1];
                                                                l.addColorStop(t, n)
                                                            });
                                                            else if ("radial" === c[0]) {
                                                                var f = c[1][0],
                                                                    d = c[1][1],
                                                                    p = [f, d, 0, f, d, c[1][2]],
                                                                    l = k.createRadialGradient.apply(k, p);
                                                                c[2].forEach(function(e) {
                                                                    var t = e[0],
                                                                        n = e[1];
                                                                    l.addColorStop(t, n)
                                                                })
                                                            } else if ("pattern" === c[0]) { return _.checkImageLoaded(c[1], w.slice(e + 1), function(e) { e && (k[s] = k.createPattern(e, c[2])) }) ? "continue" : "break" }
                                                            k[s] = l
                                                        } else { "globalAlpha" === s ? k[s] = c[0] / 255 : "shadow" === s ? (u = ["shadowOffsetX", "shadowOffsetY", "shadowBlur", "shadowColor"], c.forEach(function(e, t) { k[u[t]] = e })) : "fontSize" === s ? k.font = k.font.replace(/\d+\.?\d*px/, c[0] + "px") : "lineDash" === s ? (k.setLineDash(c[0]), k.lineDashOffset = c[1] || 0) : ("textBaseline" === s && "normal" === c[0] && (c[0] = "alphabetic"), k[s] = c[0]) }
                                                    } else if ("fillPath" === i || "strokePath" === i) i = i.replace(/Path/, ""), k.beginPath(), c.forEach(function(e) { k[e.method].apply(k, Object(I.default)(e.data)) }), k[i]();
                                                    else if ("fillText" === i) {
                                                        var h = Object(S.default)(c),
                                                            v = h[0],
                                                            g = h.slice(1);
                                                        g && g.map && (g = g.map(function(e) { return "string" == typeof e ? parseFloat(e) : e })), k.fillText.apply(k, [v].concat(Object(I.default)(g)))
                                                    } else if ("drawImage" === i) {
                                                        var b = Object(S.default)(c),
                                                            y = b[0],
                                                            m = b.slice(1);
                                                        if (_._images = _._images || {}, m && m.map && (m = m.map(function(e) { return "string" == typeof e ? parseFloat(e) : e })), !_.checkImageLoaded(y, w.slice(e + 1), function(e) { e && k.drawImage.apply(k, [e].concat(Object(I.default)(m.slice(4, 8)), Object(I.default)(m.slice(0, 4)))) })) return "break"
                                                    } else { "clip" === i ? (c.forEach(function(e) { k[e.method].apply(k, Object(I.default)(e.data)) }), k.clip()) : "arcTo" === i || "rotate" === i ? ((t = c) && c.map && (t = c.map(function(e) { return "string" == typeof e ? parseFloat(e) : e })), k[i].apply(k, Object(I.default)(t))) : "strokeText" === i ? (r = (n = Object(S.default)(c))[0], (o = n.slice(1)) && o.map && (o = o.map(function(e) { return "string" == typeof e ? parseFloat(e) : e })), k[i].apply(k, [r].concat(Object(I.default)(o)))) : k[i].apply(k, Object(I.default)(c)) }
                                                }(a)) break
                                        }
                                        k.restore(), d.IS_ANDROID && this.canvasView.present(), this._actionsWaiting || "function" == typeof t && t()
                                    }
                            }
                        }, {
                            key: "getImageData",
                            value: function(e) {
                                var t = this,
                                    n = 0 < arguments.length && void 0 !== e ? e : {};
                                this.context ? this._getImageData(n) : this._contextPromise.then(function() { return t._getImageData(n), null }).catch(function() {})
                            }
                        }, {
                            key: "_getImageData",
                            value: function(e) {
                                var t, n = 0 < arguments.length && void 0 !== e ? e : {};
                                try {
                                    var r = n || {},
                                        o = r.x,
                                        a = r.y,
                                        i = r.width,
                                        c = r.height,
                                        u = this.context.getImageData(o, a, i, c)
                                } catch (e) { return void Object(f.failWithMessage)(n, e) }
                                u ? (t = { width: u.width, height: u.height, data: u.data }, Object(f.successCallback)(n, t)) : Object(f.failWithMessage)("canvasGetImageData:fail")
                            }
                        }, {
                            key: "putImageData",
                            value: function(e) {
                                var t = this,
                                    n = 0 < arguments.length && void 0 !== e ? e : {};
                                this.context ? this._putImageData(n) : this._contextPromise.then(function() { return t._putImageData(n), null }).catch(function() {})
                            }
                        }, {
                            key: "_putImageData",
                            value: function(e) {
                                var t = 0 < arguments.length && void 0 !== e ? e : {};
                                try {
                                    var n, r = t || {},
                                        o = r.x,
                                        a = r.y,
                                        i = r.width,
                                        c = r.height,
                                        u = r.data;
                                    d.IS_IOS ? n = new s.ImageData(u, i, c) : d.IS_ANDROID && (n = new SkiaImageData(u, i, c)), d.IS_ANDROID && this.canvasView.prepareDraw(), this.context.putImageData(n, o, a), d.IS_ANDROID && this.canvasView.present()
                                } catch (e) { return void Object(f.failWithMessage)(t, e) }
                                Object(f.successWithMessage)(t, "canvasPutImageData:ok")
                            }
                        }, {
                            key: "replayActions",
                            value: function() {
                                function t() {}
                                var n = this;
                                this._actionsQueue.forEach(function(e) { n.draw(e.actions, e.reserve, t, n._webviewId, n._nodeId, n._pluginId) })
                            }
                        }, { key: "needsReplay", value: function() { return 0 < this._actionsQueue.length } }, { key: "_flushQueue", value: function() { this._actionsQueue = [] } }, { key: "_enqueue", value: function(e) { this._actionsQueue.push(e) } }]), n
                    }()
                }.call(this, v(33))
        }, function(e, t, n) {
            n.r(t), n.d(t, "reportNetworkAPI", function() { return o });

            function v() {
                var e = JSON.stringify({ business: "mmbizwxaservicequality", dataArray: _, appType: Reporter.getAppType() }, null, 2);
                Object(r.invokeMethod)("reportRealtimeAction", { actionData: e }), _ = []
            }

            function g(r) {
                var o = "";
                return Object.keys(r).forEach(function(e, t) {
                    try {
                        var n = encodeURIComponent(e) + "=" + encodeURIComponent(r[e]);
                        0 !== t && (o += "&"), o += n
                    } catch (e) {}
                }), o
            }
            var b = n(37),
                r = n(0),
                y = n(12),
                m = {},
                w = 0,
                _ = [],
                o = function(e, t, n, r, o, a, i, c, u, s) {
                    var l = 7 < arguments.length && void 0 !== c ? c : 0,
                        f = 8 < arguments.length && void 0 !== u ? u : 0,
                        d = 9 < arguments.length && void 0 !== s ? s : {},
                        p = "";
                    Object(y.isGame)() && (p = g(m));
                    var h = [e, t, n, r, o, Reporter.getAppType(), a, l, Object(b._getCurrentNetworkType)(), "", p, f, g(d)].map(encodeURIComponent).join(",");
                    Reporter.reportKeyValue({ key: "NetworkAPI", value: h }), Reporter.reportIDKey({ key: e + "_" + (1 === n ? "ok" : "fail") }), _.push([e, t, n, a || "", r, o, Object(b._getCurrentNetworkType)(), i ? "1" : "0", Reporter.getAppType(), l].map(function(t) { var n; try { n = encodeURIComponent(t) } catch (e) { n = t } return n }).join(",")), 6e4 <= Date.now() - w && (w = Date.now(), setTimeout(v, 6e4))
                }
        }, function(e, t, n) {
            function r(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, t, n) {
            n.r(t), n.d(t, "_getABTestConfig", function() { return a }), n.d(t, "getABTestConfig", function() { return i });
            var r = n(1),
                o = n(0),
                a = function(e) { var t = 0 < arguments.length && void 0 !== e ? e : {}; return Object(o.invokeMethod)("getABTestConfig", t) },
                i = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    7 === r.default.appType ? Object(o.invokeMethod)("getABTestConfig", t) : Object(o.beforeInvokeFail)("getABTestConfig", t, "permission denied", 1)
                }
        }, function(e, t, n) {
            n.r(t), n.d(t, "Emitter", function() { return i });
            var r = n(5),
                o = n(7),
                a = n(6),
                i = function() {
                    function n() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                            t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                        Object(r.default)(this, n), this.type = "", this.surround = !1, this.eventMap = new Map, this.callbackMap = new WeakMap, this.originalCallbackMap = new WeakMap, this.type = e, this.surround = t
                    }
                    return Object(o.default)(n, [{
                        key: "on",
                        value: function(e, t) {
                            var n, r, o;
                            Object(a.isFunction)(t) ? (n = t, this.surround && (r = t, o = "at " + this.type + e + " callback function", n = void 0 !== __errorTracer__ ? __errorTracer__.surroundThirdByTryCatch(r, o) : "undefined" != typeof __subContextEngine__ ? __subContextEngine__.surroundThirdByTryCatch(r, o) : function() { try { return r.apply(void 0, arguments) } catch (e) { return void console.error("thirdScriptError\n" + e.message + ";" + o + "\n", e) } }, this.callbackMap.set(t, n), this.originalCallbackMap.set(n, t)), this.eventMap.has(e) ? this.eventMap.get(e).add(n) : this.eventMap.set(e, new Set([n]))) : console.error("emitter.on fail: callback must be a function")
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            var n, r = this,
                                o = this.eventMap.get(e);
                            o && ("function" != typeof t ? (o.forEach(function(e) {
                                var t = r.originalCallbackMap.get(e);
                                r.callbackMap.delete(t), r.originalCallbackMap.delete(e)
                            }), o.clear()) : this.surround ? (n = this.callbackMap.get(t), o.delete(n), this.callbackMap.delete(t), this.originalCallbackMap.delete(n)) : o.delete(t))
                        }
                    }, {
                        key: "emit",
                        value: function(e) {
                            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                            this.eventMap.has(e) && new Set(this.eventMap.get(e)).forEach(function(e) { return e.apply(void 0, n) })
                        }
                    }, { key: "removeAllListeners", value: function(e) { this.off(e) } }]), n
                }()
        }, function(e, t, n) {
            n.r(t), n.d(t, "_fs", function() { return P }), n.d(t, "getOpenDataDir", function() { return D });
            var r = n(24),
                o = n(45),
                c = n(0),
                i = n(6),
                a = n(13),
                u = n(2),
                s = n(1),
                l = n(42),
                f = n(69),
                d = n(4),
                p = a.default.fs,
                h = !1;
            p && p.FileReader && s.default.onReady(function() { Object(l._getABTestConfig)({ experimentId: u.IS_IOS ? "clicfg_appbrand_ios_native_readfile" : "clicfg_appbrand_native_readfile", experimentType: "Expt", success: function(e) { e && 1 === Number(e.testConfig) && (Object(f.setApiVersion)(/readFile(?:Sync)?$/, 1), h = !0) } }) });
            var v, g = ["ascii", "base64", "binary", "hex", "ucs2", "ucs-2", "utf16le", "utf-16le", "utf8", "utf-8", "latin1"],
                b = n(38),
                y = u.IS_DEVTOOLS ? "http://" : "wxfile://",
                m = [],
                w = !1;
            u.IS_IOS ? v = new RegExp("^" + y + "tmp_") : u.IS_ANDROID && (v = new RegExp("^tmp_")), s.default.onReady(function() {
                u.IS_ANDROID || u.IS_IOS ? Object(c.invokeMethod)("readdir", {
                    dirPath: y,
                    success: function(e) {
                        var t = e.files || [];
                        m = t.filter(function(e) { return v.test(e) }), w = !0
                    }
                }) : w = !0
            });

            function _(e, t) { var n; /^wxfile:\/\/(tmp\/?)?$/.test(t) && (n = b.FakeTempFilePathMap.get(), e.files = e.files.filter(function(e) { return new RegExp("^" + t).test(e) || (e = "" + t + e), -1 === n.indexOf(e) }).filter(function(e) { return w ? -1 === m.indexOf(e) : !v.test(e) })) }

            function k(t, e) {
                var n, r, o = !0;
                ["mode", "size", "lastAccessedTime", "lastModifiedTime"].forEach(function(e) { o = o && void 0 !== t[e] }), o ? (t.stats = new O(t), delete t.mode, delete t.size, delete t.lastAccessedTime, delete t.lastModifiedTime) : t.stats && 1 === Object.keys(t.stats).length && t.stats[""] ? t.stats = new O(t.stats[""]) : (n = [], r = t.stats, u.IS_ANDROID && (r = t, n.push({ path: "/", stats: A(e) })), Object.keys(r).forEach(function(e) { var t; "errMsg" !== e && (t = r[e], "" === e && (e = "/"), n.push({ path: e, stats: new O(t) }), delete r[e]) }), t.stats = n)
            }
            var S = n(5),
                I = n(7),
                O = function() {
                    function a(e) {
                        var t = e.mode,
                            n = e.size,
                            r = e.lastAccessedTime,
                            o = e.lastModifiedTime;
                        Object(S.default)(this, a), this.mode = t, this.size = n, this.lastAccessedTime = r, this.lastModifiedTime = o
                    }
                    return Object(I.default)(a, [{ key: "_checkModeProperty", value: function(e) { return (61440 & this.mode) === e } }, { key: "isDirectory", value: function() { return this._checkModeProperty(16384) } }, { key: "isFile", value: function() { return this._checkModeProperty(32768) } }]), a
                }(),
                A = function(t, e) { var n, r, o = 1 < arguments.length && void 0 !== e && e; if (!t || "string" != typeof t) throw new Error("path must be a string"); if (Object(c.invokeMethod)("statSync", { path: t, recursive: o, success: function(e) { k(e, t), n = e.stats }, fail: function(e) { r = e.errMsg } }), r) throw new Error(r); return n },
                C = ["ascii", "base64", "binary", "hex", "ucs2", "ucs-2", "utf16le", "utf-16le", "utf8", "utf-8", "latin1"],
                j = n(12),
                P = {
                    saveFile: o.saveFile,
                    saveFileSync: o.saveFileSync,
                    getSavedFileList: o.getSavedFileList,
                    getSavedFileInfo: o.getSavedFileInfo,
                    removeSavedFile: o.removeSavedFile,
                    getFileInfo: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        if (Object(c.beforeInvoke)("getFileInfo", t, { filePath: "" })) {
                            if (void 0 !== t.digestAlgorithm) { var n = Object(i.paramCheck)(t, { digestAlgorithm: "" }); if (n) return void Object(c.beforeInvokeFail)("getFileInfo", t, "parameter error: " + n); if (-1 === ["md5", "sha1"].indexOf(t.digestAlgorithm)) return void Object(c.beforeInvokeFail)("getFileInfo", t, 'parameter error: invalid digestAlgorithm "' + t.digestAlgorithm + '"') }
                            Object(c.invokeMethod)("getFileInfo", t, {})
                        }
                    },
                    readFile: function(e) {
                        var t, n = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(c.beforeInvoke)("readFile", n, { filePath: "" }) && (Object(i.isUndefined)(n.encoding) || Object(i.isString)(n.encoding) ? Object(i.isUndefined)(n.position) || Object(i.isNumber)(n.position) ? Object(i.isUndefined)(n.length) || Object(i.isNumber)(n.length) ? h ? ((t = new p.FileReader).onerror = function(e) { return Object(c.beforeInvokeFail)("readFile", n, e) }, t.onread = function(e) { return Object(c.beforeInvokeCallback)({ name: "readFile", args: n, res: { data: e } }) }, t.read(n.filePath, n.encoding)) : Object(c.invokeMethod)("readFile", n) : Object(c.beforeInvokeFail)("readFile", n, "invalid length: " + n.length) : Object(c.beforeInvokeFail)("readFile", n, "invalid position: " + n.position) : Object(c.beforeInvokeFail)("readFile", n, "invalid encoding: " + n.encoding))
                    },
                    readFileSync: function(e, t, n, r) {
                        if (!e || !Object(i.isString)(e)) throw new d.ThirdScriptError("invalid filePath: " + e);
                        if (!Object(i.isUndefined)(t) && !Object(i.isString)(t)) throw new d.ThirdScriptError("invalid encoding: " + t);
                        if (!Object(i.isUndefined)(n) && !Object(i.isNumber)(n)) throw new d.ThirdScriptError("invalid position: " + n);
                        if (!Object(i.isUndefined)(r) && !Object(i.isNumber)(r)) throw new d.ThirdScriptError("invalid length: " + r);
                        if (h) try { return p.readFileSync(e, t) } catch (a) { throw new Error(a) }
                        var o, a;
                        if (Object(c.invokeMethod)("readFileSync", { filePath: e, encoding: t, position: n, length: r, success: function(e) { o = e.data }, fail: function(e) { a = e.errMsg } }), a) throw new Error(a);
                        return o
                    },
                    writeFile: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(c.beforeInvoke)("writeFile", t, { filePath: "" }) && (t.encoding && -1 === g.indexOf(t.encoding) ? Object(c.beforeInvokeFail)("writeFile", t, 'invalid encoding "' + t.encoding + '"') : Object(c.invokeMethod)("writeFile", t, {}))
                    },
                    writeFileSync: function(e, t, n) { if (!e || "string" != typeof e) throw new Error("path must be a string"); if (n && -1 === g.indexOf(n)) throw new Error('invalid encoding "' + n + '"'); var r; if (Object(c.invokeMethod)("writeFileSync", { filePath: e, data: t, encoding: n, fail: function(e) { r = e.errMsg } }), r) throw new Error(r) },
                    mkdir: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(c.beforeInvoke)("mkdir", t, { dirPath: "" }) && Object(c.invokeMethod)("mkdir", t)
                    },
                    mkdirSync: function(e, t) { var n, r = 1 < arguments.length && void 0 !== t && t; if (!e || "string" != typeof e) throw new TypeError("dirPath must be a string"); if (Object(c.invokeMethod)("mkdirSync", { dirPath: e, recursive: r, fail: function(e) { n = e.errMsg } }), n) throw new Error(n) },
                    rmdir: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(c.beforeInvoke)("rmdir", t, { dirPath: "" }) && Object(c.invokeMethod)("rmdir", t)
                    },
                    rmdirSync: function(e, t) { var n, r = 1 < arguments.length && void 0 !== t && t; if (!e || "string" != typeof e) throw new Error("dirPath must be a string"); if (Object(c.invokeMethod)("rmdirSync", { dirPath: e, recursive: r, fail: function(e) { n = e.errMsg } }), n) throw new Error(n) },
                    readdir: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(c.beforeInvoke)("readdir", t, { dirPath: "" }) && Object(c.invokeMethod)("readdir", t, { beforeSuccess: function(e) { _(e, t.dirPath) } })
                    },
                    readdirSync: function(t) { if (!t || "string" != typeof t) throw new TypeError("dirPath must be a string"); var n, r; if (Object(c.invokeMethod)("readdirSync", { dirPath: t, success: function(e) { n = e.files }, fail: function(e) { r = e.errMsg } }, { beforeSuccess: function(e) { _(e, t) } }), r) throw new Error(r); return n },
                    access: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(c.beforeInvoke)("access", t, { path: "" }) && Object(c.invokeMethod)("access", t)
                    },
                    accessSync: function(e) { if (!e || "string" != typeof e) throw new TypeError("path must be a string"); var t; if (Object(c.invokeMethod)("accessSync", { path: e, fail: function(e) { t = e.errMsg } }), t) throw new Error(t) },
                    unlink: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(c.beforeInvoke)("unlink", t, { filePath: "" }) && Object(c.invokeMethod)("unlink", t)
                    },
                    unlinkSync: function(e) { if (!e || "string" != typeof e) throw new Error("filePath must be a string"); var t; if (Object(c.invokeMethod)("unlinkSync", { filePath: e, fail: function(e) { t = e.errMsg } }), t) throw new Error(t) },
                    stat: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(c.beforeInvoke)("stat", t, { path: "" }) && Object(c.invokeMethod)("stat", t, { beforeSuccess: function(e) { k(e, t.path) } })
                    },
                    statSync: A,
                    unzip: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(c.beforeInvoke)("unzip", t, { zipFilePath: "" }) && Object(c.invokeMethod)("unzip", Object.assign({}, t, { targetDirectory: t.targetPath }))
                    },
                    copyFile: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(c.beforeInvoke)("copyFile", t, { srcPath: "", destPath: "" }) && Object(c.invokeMethod)("fs_copyFile", t, { beforeAll: function(e) { e.errMsg = e.errMsg.replace(/^fs_/, "") } })
                    },
                    copyFileSync: function(e, t) { if (!e || "string" != typeof e) throw new Error("srcPath must be a string"); if (!t || "string" != typeof t) throw new Error("destPath must be a string"); var n; if (Object(c.invokeMethod)("fs_copyFileSync", { srcPath: e, destPath: t, fail: function(e) { n = e.errMsg.replace(/^fs_/, "") } }), n) throw new Error(n) },
                    rename: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(c.beforeInvoke)("rename", t, { oldPath: "", newPath: "" }) && Object(c.invokeMethod)("fs_rename", t, { beforeAll: function(e) { e.errMsg = e.errMsg.replace(/^fs_/, "") } })
                    },
                    renameSync: function(e, t) { if (!e || "string" != typeof e) throw new Error("oldPath must be a string"); if (!t || "string" != typeof t) throw new Error("newPath must be a string"); var n; if (Object(c.invokeMethod)("fs_renameSync", { oldPath: e, newPath: t, fail: function(e) { n = e.errMsg.replace(/^fs_/, "") } }), n) throw new Error(n) },
                    appendFile: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(c.beforeInvoke)("appendFile", t, { filePath: "" }) && (t.encoding && -1 === C.indexOf(t.encoding) ? Object(c.beforeInvokeFail)("appendFile", t, 'invalid encoding "' + t.encoding + '"') : Object(c.invokeMethod)("fs_appendFile", t, {}))
                    },
                    appendFileSync: function(e, t, n) { if (!e || "string" != typeof e) throw new Error("path must be a string"); if (n && -1 === C.indexOf(n)) throw new Error('invalid encoding "' + n + '"'); var r; if (Object(c.invokeMethod)("fs_appendFileSync", { filePath: e, data: t, encoding: n, fail: function(e) { r = e.errMsg } }), r) throw new Error(r) }
                },
                M = "",
                T = "";
            s.default.onReady(function() { try { M = s.default.env.USER_DATA_PATH, T = s.default.env.OPEN_DATA_PATH, delete s.default.env.OPEN_DATA_PATH } catch (e) {} });

            function x(i) {
                var e = {};
                return Object.keys(P).forEach(function(a) {
                    var n = P[a];
                    e[a] = function() {
                        for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
                        if (!E[a]) return n.apply(void 0, Object(r.default)(o));
                        if (E[a].every(function(e) { var t, n, r = a.endsWith("Sync") ? o : o[0]; return t = r[e], n = i, "string" != typeof t || !t.startsWith("wxfile://ad") && (!Object(j.isSinglePageMode)() || !t.startsWith("wxfile://usr") && !t.startsWith("http://usr")) && !t.startsWith("opendata" === n ? M : T) })) return n.apply(void 0, Object(r.default)(o));
                        if (a.endsWith("Sync")) throw new Error(a + ":fail permission denied");
                        o = o[0] || {}, Object(c.beforeInvokeFail)(a, o, "permission denied")
                    }
                }), e
            }
            var E = { saveFile: ["filePath"], saveFileSync: [1], readFile: ["filePath"], readFileSync: [0], writeFile: ["filePath"], writeFileSync: [0], mkdir: ["dirPath"], mkdirSync: [0], rmdir: ["dirPath"], rmdirSync: [0], readdir: ["dirPath"], readdirSync: [0], access: ["path"], accessSync: [0], unlink: ["filePath"], unlinkSync: [0], stat: ["path"], statSync: [0], unzip: ["zipFilePath", "targetPath"], copyFile: ["srcPath", "destPath"], copyFileSync: [0, 1], rename: ["oldPath", "newPath"], renameSync: [0, 1], appendFile: ["filePath"], appendFileSync: [0] };
            t.default = { app: x("app"), game: x("game"), opendata: x("opendata") };

            function D() { return T }
        }, function(e, t, n) {
            n.r(t), n.d(t, "saveFile", function() { return r }), n.d(t, "saveFileSync", function() { return a }), n.d(t, "getSavedFileList", function() { return c }), n.d(t, "getSavedFileInfo", function() { return u }), n.d(t, "removeSavedFile", function() { return s }), n.d(t, "openDocument", function() { return i });
            var o = n(0),
                r = function(e) { Object(o.beforeInvoke)("saveFile", e, { tempFilePath: "" }) && Object(o.invokeMethod)("saveFile", e) },
                a = function(e, t) { if (!e || "string" != typeof e) throw new Error("tempFilePath must be a string"); if (void 0 !== t && "string" != typeof t) throw new Error("filePath must be a string"); var n, r; if (Object(o.invokeMethod)("saveFileSync", { tempFilePath: e, filePath: t, success: function(e) { r = e.savedFilePath }, fail: function(e) { n = e.errMsg } }), n) throw new Error(n); return r },
                i = function(e) { Object(o.beforeInvoke)("openDocument", e, { filePath: "" }) && (e.showMenu = e.showMenu || !1, Object(o.invokeMethod)("openDocument", e)) },
                c = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    Object(o.invokeMethod)("getSavedFileList", t)
                },
                u = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    Object(o.beforeInvoke)("getSavedFileInfo", t, { filePath: "" }) && Object(o.invokeMethod)("getSavedFileInfo", t)
                },
                s = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    Object(o.beforeInvoke)("removeSavedFile", t, { filePath: "" }) && Object(o.invokeMethod)("removeSavedFile", t)
                }
        }, function(e, o, a) {
            a.r(o),
                function(e) {
                    a.d(o, "SkiaImageProxy", function() { return d }), a.d(o, "decorateContextForImageProxy", function() { return t });
                    var n = a(5),
                        r = a(7),
                        l = a(34),
                        f = a(2),
                        d = function() {
                            function t(e) { Object(n.default)(this, t), Object.defineProperty(this, "_ptr", { value: e, writable: !1, configurable: !1, enumerable: !1 }) }
                            return Object(r.default)(t, [{
                                key: "src",
                                set: function(e) {
                                    var t = this;
                                    /^(http|https):\/\//.test(e) && (e = encodeURI(e));

                                    function n(e) { return function() { setTimeout(function() { e() }, 0) } }
                                    this._ptr.onload = n(function() { "function" == typeof t.__onload && t.__onload.apply(t) }), this._ptr.onerror = n(function() { "function" == typeof t.__onerror && t.__onerror.apply(t) }), this._ptr.src = e
                                },
                                get: function() { return this._ptr.src }
                            }, { key: "referrerPolicy", set: function(e) { "string" == typeof e && (this._ptr.referrerPolicy = e) }, get: function() { return this._ptr.referrerPolicy } }, { key: "onload", set: function(e) { Object.defineProperty(this, "__onload", { value: e, writable: !1, configurable: !1, enumerable: !1 }) }, get: function() { return this._ptr.onload } }, { key: "onerror", set: function(e) { Object.defineProperty(this, "__onerror", { value: e, writable: !1, configurable: !1, enumerable: !1 }) }, get: function() { return this.__onload } }, { key: "complete", get: function() { return this._ptr.complete } }, { key: "width", get: function() { return this._ptr.width } }, { key: "height", get: function() { return this._ptr.height } }]), t
                        }(),
                        p = new WeakMap,
                        h = e.SkiaCanvasExternalTexture;

                    function t(e, u) {
                        if (!e) return e;
                        var s = e.drawImage.bind(e),
                            n = e.createPattern.bind(e);
                        return e.drawImage = function(e) {
                            for (var t, n, r = arguments.length, o = new Array(1 < r ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
                            if (e instanceof d) return s.apply(void 0, [e._ptr].concat(o));
                            if (e instanceof l.VideoContext) {
                                var i = e;
                                if ("number" != typeof i._videoId) throw new Error("Failed to execute 'drawImage' on 'CanvasRenderingContext2D': The provided video context is invalid, make sure that comes from 'createSelectQuery.context'.");
                                var c = p.get(i) || {};
                                c[u] ? e = c[u] : (t = i, n = u, e = f.IS_DEVTOOLS ? Object(l.getVideoElementByContext)(t) : new h(n, t._videoId, "video"), c[u] = e, p.set(i, c))
                            }
                            return s.apply(void 0, [e].concat(o))
                        }, e.createPattern = function(e, t) { return n(e instanceof d ? e._ptr : e, t) }, e
                    }
                    delete e.SkiaCanvasExternalTexture
                }.call(this, a(33))
        }, function(e, t, n) {
            n.r(t), n.d(t, "downloadFile", function() { return R }), n.d(t, "_downloadFileSkipCheckDomain", function() { return D });
            var a = n(0),
                r = n(35),
                o = n(13),
                i = n(2),
                c = n(1),
                u = n(42),
                s = n(5),
                l = n(15),
                f = n(19),
                d = n(9),
                p = n(32);

            function h(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(d.default)(r); return t = o ? (e = Object(d.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(f.default)(this, t) } }
            Object(p.registerTaskType)("Download", { maxTaskCount: 10, functionName: "downloadFile" }), c.default.onReady(function() { try { "number" == typeof c.default.wxAppInfo.maxDownloadConcurrent && Object(p.registerTaskType)("Download", { maxTaskCount: c.default.wxAppInfo.maxDownloadConcurrent }) } catch (e) {} });
            var v = function(e) {
                    Object(l.default)(r, e);
                    var n = h(r);

                    function r(t) { return Object(s.default)(this, r), n.call(this, t, { taskType: "Download", beforeSend: function(e) { return e.filePath = t.filePath, e }, beforeSuccess: function(e) { return delete e.timeInterval, e } }) }
                    return r
                }(p.NetworkTask),
                g = n(7),
                b = n(14),
                y = n(12),
                m = n(72),
                w = o.default.Download,
                _ = new WeakMap,
                k = new WeakMap,
                S = new WeakMap,
                I = [],
                O = 0,
                A = 10;

            function C(e) {
                var t = 0 < arguments.length && void 0 !== e && e;
                for (t && (_.delete(t), k.delete(t), S.delete(t), O--); 0 < I.length && O < A;) {
                    var n = I.shift(),
                        r = _.get(n),
                        o = k.get(n);
                    r && o && (r.start(o), O++)
                }
                return !0
            }
            c.default.onReady(function() { c.default.wxAppInfo && c.default.wxAppInfo.maxDownloadConcurrent && (A = c.default.wxAppInfo.maxDownloadConcurrent) });
            var j = function() {
                    function o(t) {
                        var n = this;
                        Object(s.default)(this, o);
                        var e = new w,
                            r = new b.default;
                        _.set(this, e), S.set(this, r), k.set(this, Object(y.filterObject)(t, ["url", "header", "filePath", "enableProfile"])), e.onfail = function(e) { return C(n) && Object(a.beforeInvokeFail)("downloadFile", t, e) }, e.onsuccess = function(e) { return C(n) && Object(a.beforeInvokeCallback)({ name: "downloadFile", args: t, res: e }) }, e.onheader = function(e) { return r.emit("header", { header: e }) }, e.onprogress = function(e, t, n) { return r.emit("progress", { progress: e, totalBytesWritten: t, totalBytesExpectedToWrite: n }) }, Object(m.checkNetworkAPIURL)({ api: "downloadFile", url: t.url }).then(function(e) { t.__skipDomainCheck__ || e.isInDomainList || e.isInLAN && !e.isLocalHost ? (I.push(n), C()) : Object(a.beforeInvokeFail)("downloadFile", t, "invalid url") }).catch(function() { Object(a.beforeInvokeFail)("downloadFile", t, "url validate error") })
                    }
                    return Object(g.default)(o, [{ key: "abort", value: function() { _.get(this).abort() } }, { key: "onHeadersReceived", value: function(e) { S.get(this).on("header", e) } }, { key: "onProgressUpdate", value: function(e) { S.get(this).on("progress", e) } }, { key: "offHeadersReceived", value: function(e) { S.get(this).off("header", e) } }, { key: "offProgressUpdate", value: function(e) { S.get(this).off("progress", e) } }]), o
                }(),
                P = !0;

            function M() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return P ? Object(r.default)(v, t) : Object(r.default)(j, t) }
            o.default.Download && c.default.onReady(function() { Object(u._getABTestConfig)({ experimentId: i.IS_IOS ? "clicfg_appbrand_ios_native_download" : "clicfg_appbrand_native_download", experimentType: "Expt", success: function(e) { e && 1 === Number(e.testConfig) && (P = !1) } }) });

            function T(e) {
                var n = 0 < arguments.length && void 0 !== e ? e : {},
                    n = Object.assign({ __skipDomainCheck__: !1 }, n);
                return function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; if (Object(a.beforeInvoke)("downloadFile", t, { url: "" })) { t.__skipDomainCheck__ = n.__skipDomainCheck__; try { return new M(t) } catch (e) { return void Object(a.beforeInvokeFail)("downloadFile", t, e.message) } } }
            }
            var x = n(44),
                E = T(),
                D = T({ __skipDomainCheck__: !0 }),
                R = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    if ("string" != typeof t.filePath || !t.filePath.startsWith(Object(x.getOpenDataDir)())) return E(t);
                    Object(a.beforeInvokeFail)("downloadFile", t, "permission denied")
                }
        }, function(e, n, r) {
            r.r(n),
                function(e) {
                    function t() { return e.WeixinCanvas }
                    r.d(n, "getWeixinCanvas", function() { return t })
                }.call(this, r(33))
        }, function(e, t, n) {
            n.r(t), n.d(t, "default", function() { return o });
            var r = n(53);

            function o(e, t) { if (e) { if ("string" == typeof e) return Object(r.default)(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Object(r.default)(e, t) : void 0 } }
        }, function(e, t, n) {
            function r(e, t) { return (r = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, t, n) {
            n.r(t), n.d(t, "OffscreenCanvas", function() { return O }), n.d(t, "createOffscreenCanvas", function() { return r }), n.d(t, "createOffscreenCanvas4Plugin", function() { return o });
            var p = n(15),
                a = n(19),
                i = n(9),
                h = n(5),
                v = n(7),
                g = n(13),
                b = n(48),
                y = n(0),
                m = n(2),
                w = n(3),
                _ = n(10);

            function k(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(i.default)(r); return t = o ? (e = Object(i.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(a.default)(this, t) } }
            var S = 1,
                I = 1,
                O = function() {
                    function e() { Object(h.default)(this, e) }
                    return Object(v.default)(e, [{ key: "getContext", value: function() {} }, { key: "createImage", value: function() {} }, { key: "width", get: function() {}, set: function() {} }, { key: "height", get: function() {}, set: function() {} }]), e
                }();

            function A(e, n, r) {
                var o = e.setSrc.bind(e),
                    t = e.getSrc.bind(e);
                return delete e.getSrc, delete e.setSrc, Object.defineProperty(e, "src", {
                    enumerable: !0,
                    set: function(e) {
                        var t = Object(_.getImageRealPath)(e, n, r, w.default.currentWebviewId);
                        o(t)
                    },
                    get: function() { return t() }
                }), e
            }

            function r() { var e = 2 < arguments.length ? arguments[2] : void 0; return c(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : S, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : I, e && e.__wxExparserNodeId__ ? e.__wxExparserNodeId__ : "") }

            function o(e, t, n, r) { return c(e, t, n, r) }

            function c(e, t, n, r) {
                var o, a, i, c, u, s = 0 < arguments.length && void 0 !== e ? e : S,
                    l = 1 < arguments.length && void 0 !== t ? t : I,
                    f = 2 < arguments.length && void 0 !== n ? n : "",
                    d = 3 < arguments.length && void 0 !== r ? r : "";
                return m.IS_IOS ? function(e, t, r, o) {
                    var a = -1 * (w.default.currentWebviewId || C());
                    Object(y.invokeMethod)("insertWebGLCanvas", { position: { top: -100, left: -100, width: 1, height: 1 }, canvasId: a, keepAlive: !0, fail: function() {} });
                    var i = Object(b.getWeixinCanvas)(),
                        c = i.createOffscreenCanvas(a, e, t);
                    return new(function(e) {
                        Object(p.default)(n, e);
                        var t = k(n);

                        function n() { return Object(h.default)(this, n), t.apply(this, arguments) }
                        return Object(v.default)(n, [{ key: "getContext", value: function(e) { if ("webgl" === e) { for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; return c.getContext.apply(c, [e].concat(n)) } } }, { key: "createImage", value: function() { return A(i.createImage(a), r, o) } }, { key: "width", get: function() { return c.width }, set: function(e) { c.width = e } }, { key: "height", get: function() { return c.height }, set: function(e) { c.height = e } }, { key: "id", get: function() { return 1e6 * a - c.__id } }]), n
                    }(O))
                }(s, l, f, d) : m.IS_ANDROID ? (o = s, a = l, i = f, c = d, u = new g.default.OffscreenCanvas(o, a), new(function(e) {
                    Object(p.default)(n, e);
                    var t = k(n);

                    function n() { return Object(h.default)(this, n), t.apply(this, arguments) }
                    return Object(v.default)(n, [{ key: "getContext", value: function(e) { if ("webgl" === e) { for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; return u.getContext.apply(u, [e].concat(n)) } } }, { key: "createImage", value: function() { return A(new g.default.Image, i, c) } }, { key: "width", get: function() { return u.width }, set: function(e) { u.width = e } }, { key: "height", get: function() { return u.height }, set: function(e) { u.height = e } }, { key: "id", get: function() { return u.__id } }]), n
                }(O))) : m.IS_DEVTOOLS ? function(e, t, r, o) {
                    if (!document.createElement) return void console.warn("createOffscreenCanvas: 开发者工具暂不支持创建离屏 Canvas");
                    var a = document.createElement("canvas");
                    return a.width = e, a.height = t, new(function(e) {
                        Object(p.default)(n, e);
                        var t = k(n);

                        function n() { return Object(h.default)(this, n), t.apply(this, arguments) }
                        return Object(v.default)(n, [{ key: "getContext", value: function(e) { if ("webgl" === e) { for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; return a.getContext.apply(a, [e].concat(n)) } } }, {
                            key: "createImage",
                            value: function() {
                                if ("function" == typeof window.__global.createCustomImage) return window.__global.createCustomImage(function(e) { return Object(_.getImageRealPathForDevtools)(e, r, o, w.default.currentWebviewId) }, function(e) { return e.replace(/^\/__pageframe__\//, "") });
                                console.warn("开发工具暂不支持 createImage")
                            }
                        }, { key: "width", get: function() { return a.width }, set: function(e) { a.width = e } }, { key: "height", get: function() { return a.height }, set: function(e) { a.height = e } }]), n
                    }(O))
                }(s, l, f, d) : void 0
            }
            var u = {},
                C = function() { for (;;) { var e = Math.floor(32767 * Math.random()); if (!u[e]) return u[e] = !0, e } }
        }, function(e, t, n) {
            n.r(t), n.d(t, "getSurroundedCallbacks", function() { return M }), n.d(t, "callbackInvoke", function() { return T }), n.d(t, "invokeMethod", function() { return E }), n.d(t, "invokeMethodWithPlugin", function() { return D }), n.d(t, "_invokeMethod", function() { return B });

            function o(n, r) { return Object.keys(r).map(function(t) { return Object.keys(r[t]).map(function(e) { return { func: t, result: n, errMsg: e, count: r[t][e] } }) }) }

            function i() {
                var e = o(1, c),
                    t = o(2, u),
                    n = o(3, s),
                    r = [].concat(e, t, n);
                0 !== r.length && Object(f.invokeMethod)("reportRealtimeAction", { actionData: JSON.stringify({ business: "mmbizwxajsapi", dataType: 1, dataArray: r, appType: Reporter.getAppType() }) }), c = {}, u = {}, s = {}
            }
            var d = n(60),
                f = n(0),
                c = {},
                u = {},
                s = {},
                l = 0,
                w = function(e, t, n, r, o) {
                    var a = t ? c : n ? u : s;
                    a[e] = a[e] || {}, a[e][o] = (a[e][o] || 0) + 1, 6e4 <= Date.now() - l && (l = Date.now(), setTimeout(i, 6e4))
                },
                p = n(8),
                h = n(24),
                v = n(1),
                _ = n(6),
                g = n(3),
                b = n(29),
                r = n(2),
                y = { OK: 0, BLOCK: 1, BLOCK_WITH_TOAST: 2 },
                m = { OK: 1, BLOCK: 2, NO_BLOCK: 3 },
                k = { NAVIGATE_TO: 1, SWITCH_TAB: 2, REDIRECT_TO: 3, API: 4, RE_LAUNCH: 5 },
                S = "该功能暂时无法使用",
                I = wxNativeConsole.createLogger("BanForPage"),
                O = !1,
                A = new Set(["shareAppMessage", "shareAppMessageDirectly", "requestPayment", "setClipboardData", "getClipboardData", "getLocation", "getPhoneNumber", "navigateToMiniProgram", "navigateBackMiniProgram"]),
                C = [];

            function j(e, t, n) { I.log("[checkAPIAvailableForPage] APIName=" + e + ", path=" + t + ", title=" + n); var r = function(e, t) { for (var n = -1, r = 0; r < C.length; r++) { var o = C[r]; if ((!Object(_.isString)(o.path_rule) || !o.path_rule || new RegExp(o.path_rule).test(e)) && (!Object(_.isString)(o.title_rule) || !o.title_rule || new RegExp(o.title_rule).test(t))) { n = r; break } } return I.log("[getBanRuleIndexForPage] banRuleIndex=" + n), n }(t, n); if (-1 === r) return P(e, m.OK, k.API, e), !0; var o, a, i, c, u, s, l = C[r]; return I.log("[checkAPIAvailableForPage], found rule:", l), a = e, (s = (o = l).ban_jsapi_list.find(function(e) { return e.jsapi_name === a })) ? (I.log("[checkAPIAvailableForPageByRule], found APIItem:", s), s.state === y.OK ? c = !1 : s.state === y.BLOCK ? c = !0 : s.state === y.BLOCK_WITH_TOAST && (c = !0, 1 === o.is_valid && (i = s.toast_wording || S, Object(f._invokeMethod)("showToast", { title: i, icon: "none" }))), u = c ? o.is_valid ? m.BLOCK : m.NO_BLOCK : m.OK, P(a, u, k.API, a), 1 !== o.is_valid || !c) : (I.log("[checkAPIAvailableForPageByRule], no APIItem found"), !0) }

            function P(e, t, n, r, o) {
                var a, i, c, u = 3 < arguments.length && void 0 !== r ? r : "",
                    s = 4 < arguments.length && void 0 !== o ? o : "";
                I.log("[reportAPIBanForPage] APIName=" + e + ", blockType=" + t + ", checkScene=" + n + ", extraInfo=" + u + ", needReport=" + O), O && (a = v.default.appLaunchInfo, i = Object.keys(g.default.query).map(function(e) { return e + "=" + g.default.query[e] }).join("&"), c = { session_id: a.sessionid || a.sessionId, cur_path: g.default.lastRoute + (i ? "?" + i : ""), title: g.default.navigationBarTitleMap[g.default.lastRoute], check_scene: n, block_status: t, extra_info: u, launch_scene: a.scene, launch_path: a.path, target_path: s }, I.log("[reportAPIBanForPage], reqData:", c), Object(b._operateWXData)({ reqData: c, apiName: "webapi_reportnvgcheckinfo", complete: function(e) { I.log("[reportAPIBanForPage], res.errMsg=" + e.errMsg) } }))
            }

            function M(n, r) { return Object.keys(n).reduce(function(e, t) { return "function" == typeof n[t] && (e[t] = __errorTracer__.surroundThirdByTryCatch(n[t], "at api " + r + " " + t + " callback function"), delete n[t]), e }, {}) }

            function T(e, t, n, r) {
                e.errMsg = e.errMsg || t + ":ok";
                var o, a, i, c, u, s, l, f, d, p, h, v, g = 0 === e.errMsg.indexOf(t + ":ok"),
                    b = new RegExp(t + ":(fail |fail:)?cancel").test(e.errMsg),
                    y = 0 === e.errMsg.indexOf(t + ":fail");

                function m() { "function" == typeof p.success && p.success(h), "function" == typeof v.afterSuccess && v.afterSuccess(h) }
                "function" == typeof r.beforeAll && r.beforeAll(e), g ? (p = n, h = e, "function" == typeof(v = r).beforeSuccess ? 2 === v.beforeSuccess._argumentsLength ? v.beforeSuccess(h, m) : (v.beforeSuccess(h), m()) : m()) : b ? (u = e, s = t, l = n, f = r, d = new RegExp(s + ":(fail |fail:)?cancel"), u.errMsg = u.errMsg.replace(d, s + ":fail cancel"), "function" == typeof l.fail && l.fail(u), "function" == typeof f.beforeCancel && f.beforeCancel(u), "function" == typeof l.cancel && l.cancel(u), "function" == typeof f.afterCancel && f.afterCancel(u)) : y && (a = t, i = e, c = n, "function" == typeof(o = r).beforeFail && o.beforeFail(i), "function" == typeof c.fail && c.fail(i), "function" == typeof o.afterFail && o.afterFail(i), Object(_.isFunction)(o.checkNeedReportFail) && !1 === o.checkNeedReportFail(i) || Reporter.reportIDKey({ key: a + "_fail" })), "function" == typeof n.complete && n.complete(e), "function" == typeof r.afterAll && r.afterAll(e), w(t, g, y, b, e.errMsg)
            }

            function a(f) {
                return function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                        r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "/";
                    Object(_.isObject)(e) || (e = {});
                    var o, a, i, c, u, s, l = M(e, t),
                        e = Object.assign({}, e);
                    o = n, a = t, n = Object.keys(o).reduce(function(e, t) { return "function" == typeof o[t] && (e[t] = Object(p.surroundByTryCatchFactory)(o[t], "at api " + a + " " + t + " callback function"), e[t]._argumentsLength = o[t].length), e }, {}), Reporter.reportIDKey({ key: t }), f || 0 !== v.default.appType || !A.has(t) || (i = t, c = Object.keys(g.default.query).reduce(function(e, t) { return [].concat(Object(h.default)(e), [t + "=" + g.default.query[t]]) }, []).join("&"), u = g.default.lastRoute + (c ? "?" + c : ""), s = g.default.navigationBarTitleMap[g.default.lastRoute] || "", I.log("[checkAPIAvailableForCurrentPage] APIName=" + i + ", path=" + u + ", title=" + s), j(i, u, s)) ? (delete e.pluginId, delete e.permissionBytes, "/" !== r && (e.pluginId = r), Object(d.invoke)(t, e, function(e) { T(e, t, l, n) })) : T({ errMsg: t + ":fail API has been banned" }, t, l, n)
                }
            }
            v.default.onReady(function() {
                if (!r.IS_DEVTOOLS) try {
                    var e = v.default.appContactInfo.operationInfo.jsonInfo.navigate_ban_info,
                        t = e.do_report,
                        n = e.navigate_ban_rule_list;
                    C = n, O = 1 === t, A = new Set(n.reduce(function(e, t) { return [].concat(Object(h.default)(e), Object(h.default)(t.ban_jsapi_list)) }, A)), I.log("[BanForPage][init] needReport=" + O), I.log("[BanForPage][init] ruleList:", C), I.log("[BanForPage][init] banAPISet:", A)
                } catch (e) { I.error("[BanForPage][init] fail, errMsg=" + e.message) }
            });
            var x = a(!1),
                E = function(e, t, n) { x(e, t, n) },
                D = function(r) { return r ? function(e, t, n) { x(e, t, n, r) } : E },
                R = a(!0),
                B = function(e, t, n) { R(e, t, n) }
        }, function(e, t, n) {
            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, v, g) {
            g.r(v),
                function(e) {
                    g.d(v, "wxSAB", function() { return h }), g.d(v, "createSharedArrayBuffer", function() { return r }), g.d(v, "getSharedArrayBuffer", function() { return a }), g.d(v, "SharedArrayBuffer", function() { return n }), g.d(v, "unpackSharedArrayBuffer", function() { return o });
                    var i = g(5),
                        t = g(7),
                        c = g(6),
                        u = g(4),
                        s = "function" == typeof wxNativeConsole ? wxNativeConsole.createLogger("SharedArrayBuffer") : wxConsole,
                        l = { UNLOCKED: 0, LOCKING: 1, LOCKED: 2 },
                        f = new WeakMap,
                        d = new Map,
                        p = ArrayBuffer,
                        h = "undefined" == typeof WeixinSharedBuffer ? {} : WeixinSharedBuffer;
                    "undefined" == typeof WeixinSharedBuffer && ("undefined" != typeof __global ? p = __global.SharedArrayBuffer : e.SharedArrayBuffer && (p = e.SharedArrayBuffer));
                    var n = function() {
                            function a(e, t) {
                                if (Object(i.default)(this, a), s.log("constructor length=" + e + ", sabId=" + t), !Object(c.isNumber)(e) || e < 0) throw new u.ThirdScriptError("Invalid array buffer length " + e);
                                if (Object(c.isNumber)(t)) {
                                    var n;
                                    s.info("get buffer with sabId: " + t);
                                    try { n = h.get(t) } catch (e) { throw s.error("WeixinSharedBuffer.get" + t + " fail: " + e.message), new Error("WeixinSharedBuffer.get" + t + " fail: " + e.message) }
                                    Object.defineProperty(this, "buffer", { value: n, writable: !1, enumerable: !0 }), Object.defineProperty(this, "_sabId", { value: t, enumerable: !0, writable: !1 })
                                } else {
                                    s.info("new ArrayBuffer with length: " + e), Object.defineProperty(this, "buffer", { value: new p(e), writable: !1, enumerable: !0 });
                                    var r = h.new(this.buffer);
                                    s.info("sabId: " + r), Object.defineProperty(this, "_sabId", { value: r, enumerable: !0, writable: !1 })
                                }
                                var o = { writeStatus: l.UNLOCKED, readStatus: l.UNLOCKED, writeLockCallbacks: [], readLockCallbacks: [], writeLockId: void 0, readLockId: void 0, destroyed: !1 };
                                f.set(this, o), d.set(this._sabId, this), s.log("[" + this._sabId + "] created:", this.buffer)
                            }
                            return Object(t.default)(a, [{
                                key: "destroy",
                                value: function() {
                                    s.warn("[" + this._sabId + "][destroy()]");
                                    var e = f.get(this);
                                    e.writeLockCallbacks = [], e.readLockCallbacks = [], d.delete(this._sabId), f.get(this).destroyed = !0, this.unlock(), h.destroy(this._sabId)
                                }
                            }, {
                                key: "lock",
                                value: function(e, t) {
                                    var n = f.get(this),
                                        r = n.destroyed,
                                        o = n.writeStatus,
                                        a = (n.readStatus, n.writeLockCallbacks),
                                        i = n.readLockCallbacks;
                                    if (r) throw new u.ThirdScriptError("SharedArrayBuffer has been destroyed");
                                    if (!Object(c.isFunction)(e)) throw new u.ThirdScriptError("callback must be a function");
                                    o !== l.LOCKED ? (a.push(e), o === l.LOCKING || (n.writeStatus = l.LOCKING, n.writeLockId = h.Lock(this._sabId, function() { a.forEach(function(e) { return e() }), i.forEach(function(e) { return e() }), n.writeStatus = l.LOCKED, n.writeLockCallbacks = [], n.readLockCallbacks = [] }))) : e()
                                }
                            }, {
                                key: "unlock",
                                value: function() {
                                    var e = f.get(this),
                                        t = e.writeLockId,
                                        n = e.readLockId,
                                        r = e.writeStatus,
                                        o = e.readStatus;
                                    e.destroyed ? console.warn("unlock: SharedArrayBuffer has been destroyed") : (r !== l.LOCKING && r !== l.LOCKED || (h.Unlock(this._sabId, t), e.writeStatus = l.UNLOCKED, e.writeLockId = void 0, e.writeLockCallbacks = []), o !== l.LOCKING && o !== l.LOCKED || (h.Unlock(this._sabId, n), e.readStatus = l.UNLOCKED, e.readLockId = void 0, e.readLockCallbacks = []))
                                }
                            }]), a
                        }(),
                        r = function(e) { return new n(e) },
                        a = function(e) { return s.info("[getSharedArrayBuffer] sabId=" + e), d.has(e) ? (s.info("[getSharedArrayBuffer] return existed object"), d.get(e)) : (s.info("[getSharedArrayBuffer] return new object"), new n(0, e)) },
                        o = function r(o) { return s.log("[unpackSharedArrayBuffer]", o), Object(c.isObject)(o) ? (s.log("[unpackSharedArrayBuffer] isObject"), Object(c.isNumber)(o._sabId) ? (s.info("[unpackSharedArrayBuffer] sabId is number"), a(o._sabId)) : Object.keys(o).reduce(function(e, t) { var n = o[t]; return e[t] = r(n), e }, {})) : Object(c.isArray)(o) ? o.map(r) : o }
                }.call(this, g(33))
        }, function(e, n, t) {
            t.r(n),
                function(e) {
                    var t = e.WeixinArrayBuffer;
                    delete e.WeixinArrayBuffer, n.default = t
                }.call(this, t(33))
        }, function(e, t, n) {
            n.r(t), n.d(t, "publish", function() { return r });
            var o = n(57);

            function r(e, t, n) {
                var r = { data: t, options: { timestamp: Date.now() } };
                Object(o.publish)(e, r, n)
            }
        }, function(e, t, n) {
            function r(e, t, n) { __safeway__.bridge.publish(e, t, n) }
            n.r(t), n.d(t, "publish", function() { return r })
        }, function(e, t, n) {
            n.r(t), n.d(t, "subscribe", function() { return o });
            var r = n(59);

            function o(e, u) {
                Object(r.subscribe)(e, function(e, t, n) {
                    var r = e.data,
                        o = e.options,
                        a = 2 < arguments.length && void 0 !== n ? n : {},
                        i = o && o.timestamp || 0,
                        c = Date.now();
                    Reporter.speedReport({ key: "webview2AppService", data: r || {}, timeMark: { startTime: i, endTime: c, nativeTime: a.nativeTime || 0 } }), "function" == typeof u && u(r, t)
                })
            }
        }, function(e, t, n) {
            function r(e, t) { __safeway__.bridge.subscribe(e, t) }
            n.r(t), n.d(t, "subscribe", function() { return r })
        }, function(e, t, n) {
            n.r(t), n.d(t, "invoke", function() { return o });
            var r = n(68);

            function o(e, t, n) { "navigateToMiniProgram" !== e && "openUrl" !== e && "private_openUrl" !== e || (t.adUxInfo = t.adUxInfo || Object(r.getAdUxInfo)()), __safeway__.bridge.invoke(e, t, n) }
        }, function(e, t, n) {
            n.r(t), n.d(t, "onMethod", function() { return a });
            var r = n(62),
                o = n(8);

            function a(e, t) { Object(r.on)(e, Object(o.surroundByTryCatchFactory)(t, "at api " + e + " callback function")) }
        }, function(e, t, n) {
            function r(e, t) { __safeway__.bridge.on(e, t) }
            n.r(t), n.d(t, "on", function() { return r })
        }, function(e, t, n) {
            n.r(t), n.d(t, "nativeFontAssets", function() { return y }), n.d(t, "loadFontFace", function() { return _ }), n.d(t, "fontFaceRecords", function() { return d });
            var r = n(20),
                o = n(16),
                a = n(38),
                i = n(0),
                c = n(3),
                u = n(73),
                s = n(47);

            function l(t, e) { var n, r = Object.keys(t); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, n)), r }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(n), !0).forEach(function(e) { Object(r.default)(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
                }
                return t
            }
            var d = [],
                p = new Map,
                h = 0,
                v = /url\((.*)\)/i,
                g = /([^.]*)(\..*)?/i;
            Object(i.subscribe)("loadedFontFace", function(e) {
                var t, n, r, o, a, i, c = e.callbackId,
                    u = e.errMsg,
                    s = void 0 === u ? "" : u;
                p.has(c) && (t = p.get(c), p.delete(c), n = t.success, r = t.fail, o = t.complete, i = { status: (a = 0 === s.indexOf("loadFontFace:ok")) ? "loaded" : "error", errMsg: s }, a ? "function" == typeof n && n(i) : "function" == typeof r && r(i), "function" == typeof o && o(i))
            });

            function b(e) {
                var r = 0 < arguments.length && void 0 !== e ? e : {};
                return new Promise(function(t, n) {
                    ! function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        h++;
                        var n, r = t.success,
                            o = t.fail,
                            a = t.complete;
                        delete t.success, delete t.fail, delete t.complete, t.callbackId = h, p.set(h, { success: r, fail: o, complete: a }), t.global || !1 ? (n = encodeURIComponent(JSON.stringify(t)), d.indexOf(n) < 0 && d.push(n), Object(i.publish)("loadFontFace", t)) : Object(i.publish)("loadFontFace", t, [c.default.currentWebviewId])
                    }(f(f({}, r), {}, { success: function(e) { t(e) }, fail: function(e) { n(e) } }))
                })
            }
            var y = [],
                m = Object(o.getEventManager)("skiaCanvasLoadFontFace");

            function w(e) {
                var o = 0 < arguments.length && void 0 !== e ? e : {},
                    t = "",
                    n = o.source.match(v);
                return 2 <= n.length && (t = (t = n[1]).substring(1, t.length - 1)), new Promise(function(r, e) {
                    Object(s._downloadFileSkipCheckDomain)({
                        url: t,
                        timeout: 2e4,
                        success: function(e) {
                            var t;
                            t = { originalSrc: o.source, src: e.tempFilePath, family: o.family, style: o.desc && o.desc.style, weight: o.desc && o.desc.weight, variant: o.desc && o.desc.variant }, y.push(t), m.emit({ nativeFontAssets: y });
                            var n = (e.tempFilePath || "").replace(g, function() { return arguments.length <= 1 ? void 0 : arguments[1] });
                            a.FakeTempFilePathMap.set(n), r()
                        },
                        fail: function() { e() }
                    })
                })
            }
            var _ = function(e) {
                var t, n, r, o, a = 0 < arguments.length && void 0 !== e ? e : {};
                Object(i.beforeInvoke)("loadFontFace", a, { family: "", source: "" }) && ((t = "") === a.family && (t = "parameter error: family can not be empty string"), "" === a.source && (t = "parameter error: source can not be empty string"), t ? Object(i.beforeInvokeFail)("loadFontFace", a, t) : (v.test(a.source) || (a.source = 'url("' + a.source + '")'), a.scopes || (a.scopes = ["webview"]), Object(u.reportApiUse)({ name: "loadFontFace", data: { family: a.family, source: encodeURIComponent(a.source), global: Boolean(a.global), scopes: a.scopes } }), n = [], 0 <= a.scopes.indexOf("webview") && (r = b(a), n.push(r)), 0 <= a.scopes.indexOf("native") && (o = w(a), n.push(o)), Promise.all(n).then(function() { Object(i.beforeInvokeCallback)({ name: "loadFontFace", args: a, success: !0, errMsg: "", res: { status: "loaded" } }) }).catch(function() { Object(i.beforeInvokeCallback)({ name: "loadFontFace", args: a, success: !1, errMsg: "", res: { status: "error" } }) })))
            }
        }, function(e, t, n) {
            function r(e) { if (Array.isArray(e)) return e }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, t, n) {
            function r() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, t, n) {
            n.r(t);
            var r = new(n(14).default);
            t.default = { GlobalEmitter: r }
        }, function(e, t, n) {
            function r(e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) }
            n.r(t), n.d(t, "default", function() { return r })
        }, function(e, t, n) {
            n.r(t), n.d(t, "getAdUxInfo", function() { return s });

            function r(e) { var t = 0 < arguments.length && void 0 !== e ? e : {}; try { u = t.transitExtraData.adUxInfo } catch (e) { u = "" } }
            var o = n(17),
                a = n(1),
                i = n(56),
                c = n(58),
                u = "";
            void 0 !== __safeway__ && (a.default.onReady(function() { r(a.default.appLaunchInfo) }), Object(o.onNativeEvent)("onAppEnterForeground", function(e) { r(e) }), Object(o.onNativeEvent)("onAppEnterBackground", function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; "back" !== e.mode && "close" !== e.mode || (u = "") }), Object(c.subscribe)("getAdUxInfo", function(e, t) { Object(i.publish)("adUxInfoGot", { adUxInfo: u, callbackId: e.callbackId }, [t]) }));
            var s = function() { return u }
        }, function(e, t, n) {
            n.r(t), n.d(t, "apiReport", function() { return a }), n.d(t, "setApiVersion", function() { return i });
            var f = n(1),
                r = n(17),
                b = n(37),
                y = n(6);

            function c(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) { if (!e) return; if ("string" == typeof e) return u(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t) }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);

                        function r() {}
                        var o = 0;
                        return { s: r, n: function() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] } }, e: function(e) { throw e }, f: r }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, i = !0,
                    c = !1;
                return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return i = e.done, e }, e: function(e) { c = !0, a = e }, f: function() { try { i || null == n.return || n.return() } finally { if (c) throw a } } }
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var d = 0,
                p = "",
                h = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.version : "unknown",
                v = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.updateTime : "unknown";
            Object(y.isString)(h) && (h = h.replace(" ", "")), Object(y.isString)(v) && (v = v.replace(" ", "-")), f.default.onReady(function() { d = f.default.appLaunchInfo.scene, p = f.default.appLaunchInfo.sessionid || f.default.appLaunchInfo.sessionId, Object(r.onNativeEvent)("onAppEnterForeground", function(e) { e && e.scene && (d = e.scene), e && (e.sessionid || e.sessionId) && (p = e.sessionid || e.sessionId) }) });
            var o = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "toLocaleString", "getBox2D", "createSharedArrayBuffer", "nv_constructor", "nv_toString"],
                m = new WeakSet,
                g = [];

            function w() { return 1e4 * Date.now() + Math.round(9999 * Math.random()) }

            function s(e, t) { return !(!t || "_" === t[0] || o.includes(t) || !Object(y.isFunction)(e[t])) }

            function _(e) {
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                Object(y.isFunction)(e) && e.apply(void 0, n)
            }

            function k(t, e) {
                var n = !(1 < arguments.length && void 0 !== e) || e,
                    r = Object(y.getDataType)(t);
                switch (r) {
                    case "Number":
                    case "Boolean":
                        return t;
                    case "String":
                        return S(512)(t).replace(/\|/g, "||").replace(/,/g, "|.");
                    case "Error":
                        return "[Error:" + k(t.message) + "|" + k(t.stack) + "]";
                    case "Object":
                        return n ? Object.keys(t).map(function(e) { return k(e) + "=" + k(t[e], !1) }).sort(function(e, t) { return e.length - t.length }).join("&") || "{}" : "[" + r + "]";
                    default:
                        return "[" + r + "]"
                }
            }

            function S(t) { return function(e) { return Object(y.isString)(e) && e.length > t ? e.substr(0, t) : e } }

            function I(r, e, t, n, o, a, i, c, u) {
                var s = 0;
                g.forEach(function(e) {
                    var t = e.match,
                        n = e.version;
                    "string" == typeof t ? r === t && (s = n) : t instanceof RegExp && t.test(r) && (s = n)
                }), "connectWifi" === r && (t = "");
                var l = [r, e, k(t), n, o, Date.now() - o, a, i, k(c), f.default.appType + 1e3, d, h, v, s, u, function() { if ("undefined" == typeof __appServiceEngine__) return ""; var e = __appServiceEngine__.getCurrentPagesByDomain(""); return e && e.length ? e[e.length - 1].route : "" }(), p].map(S(1024)).join(",");
                1 === i && (Reporter.reportIDKey({ key: "asyncApiCount" }), Reporter.reportIDKey({ key: "asyncApiCost", value: Date.now() - o })), Reporter.reportKeyValue({ key: "WeAppInvoke", value: l })
            }
            var l = Map,
                O = Math.random;

            function A(d, p, h, v, g) {
                if (Object(y.isObject)(p)) {
                    var e, t = new l,
                        n = c(Object.getOwnPropertyNames(p));
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var r = e.value;
                            Object.getOwnPropertyDescriptor(p, r).get || s(p, r) && t.set(r, p[r])
                        }
                    } catch (e) { n.e(e) } finally { n.f() }
                    var o, a = c(Object.getOwnPropertyNames(Object.getPrototypeOf(p)));
                    try {
                        for (a.s(); !(o = a.n()).done;) {
                            var i = o.value;
                            Object.getOwnPropertyDescriptor(p.__proto__, i).get || s(p, i) && t.set(i, Object.getPrototypeOf(p)[i])
                        }
                    } catch (e) { a.e(e) } finally { a.f() }
                    t.forEach(function(l, f) {
                        p[f] = function(t) {
                            for (var n = "" + d + f, e = arguments.length, r = new Array(1 < e ? e - 1 : 0), o = 1; o < e; o++) r[o - 1] = arguments[o];
                            if (O() > v) { var a = l.call.apply(l, [p, t].concat(r)); return h && Object(y.isObject)(a) && !m.has(a) && (A(n + ".", a, !1, v, g), m.add(a)), a }
                            var i = Object(b._getCurrentNetworkType)(),
                                c = Date.now(),
                                u = w();
                            try { var s = l.call.apply(l, [p, Object(y.isObject)(t) && ("success" in t || "fail" in t || "complete" in t) ? Object.assign({}, t, { success: function(e) { I(n, u, t, 1, c, i, 1, e, g), _(t.success, e) }, fail: function(e) { I(n, u, t, 0, c, i, 1, e, g), _(t.fail, e) } }) : t].concat(r)); return I(n, u, t, null === s ? 0 : 1, c, i, 0, s, g), h && Object(y.isObject)(s) && !m.has(s) && (A(n + ".", s, !1, v, g), m.add(s)), s } catch (e) { throw I(n, u, t, 0, c, i, 0, e, g), e }
                        }
                    })
                }
            }
            var C = !1;

            function a(e) {
                var t, n, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                A("", e, !0, .05, r), A("cloud.", e.cloud, !0, .05, r), (t = e).createCanvas && (n = t.createCanvas, t.createCanvas = function() {
                    var a, i = n.call(t);
                    return i && i.getContext && (a = i.getContext, i.getContext = function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var r, o = a.call.apply(a, [i].concat(t));
                        return o && o.compressedTexImage2D && (r = o.compressedTexImage2D, o.compressedTexImage2D = function() {
                            C || (C = !0, I("WebGLRenderingContext.compressedTexImage2D", w(), {}, 1, Date.now(), Object(b._getCurrentNetworkType)(), 0, void 0));
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            r.call.apply(r, [o].concat(t))
                        }), o
                    }), i
                })
            }

            function i(e, t) { g.push({ match: e, version: t }) }
        }, function(e, t, n) {
            n.r(t), n.d(t, "reportRecycledAPI", function() { return r });
            var u = n(3),
                r = function(e) {
                    var t, n = e.name,
                        r = e.scene,
                        o = e.strategy,
                        a = e.timeDiffToLastTap,
                        i = void 0 === a ? 0 : a;
                    "undefined" != typeof __appServiceEngine__ && (t = __appServiceEngine__.getCurrentPagesByDomain("").find(function(e) { return e.__wxWebviewId__ === u.default.currentWebviewId }) || {});
                    var c = [n, r, Reporter.getAppType(), t ? t.route : "", o || 0, i].map(encodeURIComponent).join(",");
                    Reporter.reportKeyValue({ key: "RecycledAPI", value: c })
                }
        }, function(e, t, n) {
            n.r(t), n.d(t, "WxPromise", function() { return a });
            var r = n(5),
                o = n(7),
                a = function() {
                    function n(e) { var t = this; if (Object(r.default)(this, n), this._status = "pending", this._return = void 0, this._processors = [], "function" != typeof e) throw new TypeError("Promise resolver is not a function"); try { e(function(e) { "pending" === t._status && (t._status = "then", t._return = e, t._consume()) }, function(e) { "pending" === t._status && (t._status = "catch", t._return = e, t._consume()) }) } catch (e) { this._status = "catch", this._return = e, this._consume() } }
                    return Object(o.default)(n, [{
                        key: "_consume",
                        value: function() {
                            if ("pending" !== this._status) {
                                for (var e;
                                    (e = this._processors.shift()) && e.type !== this._status;);
                                if (e) try { this._return = e.func(this._return), this._status = "then" } catch (e) { this._return = e, this._status = "catch" } finally { this._consume() }
                            }
                        }
                    }, { key: "then", value: function(e) { return this._processors.push({ func: e, type: "then" }), this._consume(), this } }, { key: "catch", value: function(e) { return this._processors.push({ func: e, type: "catch" }), this._consume(), this } }], [{ key: "resolve", value: function(t) { return new n(function(e) { return e(t) }) } }, { key: "reject", value: function(e) { return new n(function() { throw e }) } }]), n
                }()
        }, function(e, t, n) {
            n.r(t), n.d(t, "checkNetworkAPIURL", function() { return r });
            var o = n(0),
                a = n(12),
                r = function(e) {
                    var n = e.api,
                        r = e.url;
                    return Object(a.skipURLCheck)() ? Promise.resolve({ isInDomainList: !0, isLocalHost: !1, isInLAN: !1 }) : new Promise(function(e, t) { Object(o.invokeMethod)("checkNetworkAPIURL", { api: n, url: r, success: e, fail: t }) })
                }
        }, function(e, t, n) {
            n.r(t), n.d(t, "reportApiUse", function() { return a }), n.d(t, "WHITELIST", function() { return o });
            var r = n(1),
                s = n(37),
                l = 0,
                f = {};
            r.default.onReady(function() { l = r.default.appType, f = r.default.appLaunchInfo });

            function d(n, e) { var r = []; return e.forEach(function(e) { var t = n[e]; "boolean" == typeof t && (t = t ? 1 : 0), r.push(e + ":" + t) }), r.join("|") }
            var o = ["getAccountInfoSync", "getLaunchOptionsSync", "arrayBufferToBase64", "base64ToArrayBuffer", "getExtConfig", "getExtConfigSync", "canIUse", "setPageStyle", "onError", "offError"],
                a = function(e) {
                    var t = e.name,
                        n = e.data,
                        r = "undefined" != typeof __appServiceEngine__ ? __appServiceEngine__.getCurrentPagesByDomain("") : [],
                        o = 0 < r.length && r[r.length - 1].__route__ || "",
                        a = Object(s._getCurrentNetworkType)(),
                        i = wx && wx.version && wx.version.version || "",
                        c = "";
                    switch (t) {
                        case "loadFontFace":
                            c = d(n, ["family", "source", "global", "scopes"]);
                            break;
                        case "requestSubscribeMessage":
                            c = d(n, ["templateCount", "templateType", "operationType"])
                    }
                    var u = [Math.round(Date.now() / 1e3), f.scene, f.sessionid || f.sessionId, o, a, i, t, c, l, 1, ""].join(",");
                    Reporter.reportKeyValue({ key: "APIUse", value: u, immediately: !0 })
                }
        }, function(e, t, n) {
            n.r(t), n.d(t, "CanvasInterface", function() { return a });
            var r = n(5),
                o = n(7),
                a = function() {
                    function e() { Object(r.default)(this, e) }
                    return Object(o.default)(e, [{ key: "_init", value: function() {} }, { key: "_onReady", value: function() {} }, { key: "_initCanvasInstance", value: function() {} }, { key: "getContext", value: function() {} }, { key: "createImage", value: function() {} }, { key: "requestAnimationFrame", value: function() {} }, { key: "cancelAnimationFrame", value: function() {} }, { key: "width", get: function() {}, set: function() {} }, { key: "height", get: function() {}, set: function() {} }]), e
                }()
        }, function(e, t, n) {
            n.r(t), n.d(t, "temporarilyPatchContext", function() { return r });
            var a = n(18);

            function r(e) {
                if (!e) return e;
                var t = e.fill.bind(e),
                    o = e.putImageData.bind(e);
                return e.fill = function(e) { return e ? t(e, e) : t() }, e.putImageData = function(e) { if (0 === e || "object" !== Object(a.default)(e)) return null; for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; return o.apply(void 0, [e].concat(n)) }, e
            }
        }, function(e, t, n) {
            n.r(t), n.d(t, "default", function() { return c });
            var r = n(64),
                o = n(67),
                a = n(49),
                i = n(65);

            function c(e) { return Object(r.default)(e) || Object(o.default)(e) || Object(a.default)(e) || Object(i.default)() }
        }, function(e, t, n) {
            n.r(t), n.d(t, "_postMessage", function() { return r }), n.d(t, "postMessage", function() { return o });
            var r = function(e) { WeixinWorker.postMsgToAppService(e) },
                o = function(e) { r(e) }
        }, function(e, t, n) {
            var E = n(87),
                D = n(89);

            function C() { this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null }
            t.parse = a, t.resolve = function(e, t) { return a(e, !1, !0).resolve(t) }, t.resolveObject = function(e, t) { return e ? a(e, !1, !0).resolveObject(t) : t }, t.format = function(e) { D.isString(e) && (e = a(e)); return e instanceof C ? e.format() : C.prototype.format.call(e) }, t.Url = C;
            var R = /^([a-z0-9.+-]+:)/i,
                r = /:[0-9]*$/,
                B = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                o = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                F = ["'"].concat(o),
                L = ["%", "/", "?", ";", "#"].concat(F),
                N = ["/", "?", "#"],
                W = /^[+a-z0-9A-Z_-]{0,63}$/,
                V = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                U = { javascript: !0, "javascript:": !0 },
                G = { javascript: !0, "javascript:": !0 },
                q = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
                H = n(90);

            function a(e, t, n) { if (e && D.isObject(e) && e instanceof C) return e; var r = new C; return r.parse(e, t, n), r }
            C.prototype.parse = function(e, t, n) {
                if (!D.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
                var r = e.indexOf("?"),
                    o = -1 !== r && r < e.indexOf("#") ? "?" : "#",
                    a = e.split(o);
                a[0] = a[0].replace(/\\/g, "/");
                var i = (i = e = a.join(o)).trim();
                if (!n && 1 === e.split("#").length) { var c = B.exec(i); if (c) return this.path = i, this.href = i, this.pathname = c[1], c[2] ? (this.search = c[2], this.query = t ? H.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this }
                var u, s, l = R.exec(i);
                if (l && (u = (l = l[0]).toLowerCase(), this.protocol = u, i = i.substr(l.length)), (n || l || i.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(s = "//" === i.substr(0, 2)) || l && G[l] || (i = i.substr(2), this.slashes = !0)), !G[l] && (s || l && !q[l])) {
                    for (var f, d, p = -1, h = 0; h < N.length; h++) {-1 !== (v = i.indexOf(N[h])) && (-1 === p || v < p) && (p = v) } - 1 !== (d = -1 === p ? i.lastIndexOf("@") : i.lastIndexOf("@", p)) && (f = i.slice(0, d), i = i.slice(d + 1), this.auth = decodeURIComponent(f)), p = -1;
                    for (var v, h = 0; h < L.length; h++) {-1 !== (v = i.indexOf(L[h])) && (-1 === p || v < p) && (p = v) } - 1 === p && (p = i.length), this.host = i.slice(0, p), i = i.slice(p), this.parseHost(), this.hostname = this.hostname || "";
                    var g = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!g)
                        for (var b = this.hostname.split(/\./), h = 0, y = b.length; h < y; h++) {
                            var m = b[h];
                            if (m && !m.match(W)) {
                                for (var w = "", _ = 0, k = m.length; _ < k; _++) 127 < m.charCodeAt(_) ? w += "x" : w += m[_];
                                if (!w.match(W)) {
                                    var S = b.slice(0, h),
                                        I = b.slice(h + 1),
                                        O = m.match(V);
                                    O && (S.push(O[1]), I.unshift(O[2])), I.length && (i = "/" + I.join(".") + i), this.hostname = S.join(".");
                                    break
                                }
                            }
                        }
                    255 < this.hostname.length ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), g || (this.hostname = E.toASCII(this.hostname));
                    var A = this.port ? ":" + this.port : "",
                        C = this.hostname || "";
                    this.host = C + A, this.href += this.host, g && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== i[0] && (i = "/" + i))
                }
                if (!U[u])
                    for (h = 0, y = F.length; h < y; h++) { var j, P = F[h]; - 1 !== i.indexOf(P) && ((j = encodeURIComponent(P)) === P && (j = escape(P)), i = i.split(P).join(j)) }
                var M = i.indexOf("#"); - 1 !== M && (this.hash = i.substr(M), i = i.slice(0, M));
                var T, x = i.indexOf("?");
                return -1 !== x ? (this.search = i.substr(x), this.query = i.substr(x + 1), t && (this.query = H.parse(this.query)), i = i.slice(0, x)) : t && (this.search = "", this.query = {}), i && (this.pathname = i), q[u] && this.hostname && !this.pathname && (this.pathname = "/"), (this.pathname || this.search) && (A = this.pathname || "", T = this.search || "", this.path = A + T), this.href = this.format(), this
            }, C.prototype.format = function() {
                var e = this.auth || "";
                e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                var t = this.protocol || "",
                    n = this.pathname || "",
                    r = this.hash || "",
                    o = !1,
                    a = "";
                this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && D.isObject(this.query) && Object.keys(this.query).length && (a = H.stringify(this.query));
                var i = this.search || a && "?" + a || "";
                return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || q[t]) && !1 !== o ? (o = "//" + (o || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : o = o || "", r && "#" !== r.charAt(0) && (r = "#" + r), i && "?" !== i.charAt(0) && (i = "?" + i), t + o + (n = n.replace(/[?#]/g, function(e) { return encodeURIComponent(e) })) + (i = i.replace("#", "%23")) + r
            }, C.prototype.resolve = function(e) { return this.resolveObject(a(e, !1, !0)).format() }, C.prototype.resolveObject = function(e) {
                var t;
                D.isString(e) && ((t = new C).parse(e, !1, !0), e = t);
                for (var n, r, o = new C, a = Object.keys(this), i = 0; i < a.length; i++) {
                    var c = a[i];
                    o[c] = this[c]
                }
                if (o.hash = e.hash, "" === e.href) return o.href = o.format(), o;
                if (e.slashes && !e.protocol) { for (var u = Object.keys(e), s = 0; s < u.length; s++) { var l = u[s]; "protocol" !== l && (o[l] = e[l]) } return q[o.protocol] && o.hostname && !o.pathname && (o.path = o.pathname = "/"), o.href = o.format(), o }
                if (e.protocol && e.protocol !== o.protocol) {
                    if (!q[e.protocol]) {
                        for (var f = Object.keys(e), d = 0; d < f.length; d++) {
                            var p = f[d];
                            o[p] = e[p]
                        }
                        return o.href = o.format(), o
                    }
                    if (o.protocol = e.protocol, e.host || G[e.protocol]) o.pathname = e.pathname;
                    else {
                        for (var h = (e.pathname || "").split("/"); h.length && !(e.host = h.shift()););
                        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== h[0] && h.unshift(""), h.length < 2 && h.unshift(""), o.pathname = h.join("/")
                    }
                    return o.search = e.search, o.query = e.query, o.host = e.host || "", o.auth = e.auth, o.hostname = e.hostname || e.host, o.port = e.port, (o.pathname || o.search) && (n = o.pathname || "", r = o.search || "", o.path = n + r), o.slashes = o.slashes || e.slashes, o.href = o.format(), o
                }
                var v = o.pathname && "/" === o.pathname.charAt(0),
                    g = e.host || e.pathname && "/" === e.pathname.charAt(0),
                    b = g || v || o.host && e.pathname,
                    y = b,
                    m = o.pathname && o.pathname.split("/") || [],
                    h = e.pathname && e.pathname.split("/") || [],
                    w = o.protocol && !q[o.protocol];
                if (w && (o.hostname = "", o.port = null, o.host && ("" === m[0] ? m[0] = o.host : m.unshift(o.host)), o.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === h[0] ? h[0] = e.host : h.unshift(e.host)), e.host = null), b = b && ("" === h[0] || "" === m[0])), g) o.host = e.host || "" === e.host ? e.host : o.host, o.hostname = e.hostname || "" === e.hostname ? e.hostname : o.hostname, o.search = e.search, o.query = e.query, m = h;
                else if (h.length)(m = m || []).pop(), m = m.concat(h), o.search = e.search, o.query = e.query;
                else if (!D.isNullOrUndefined(e.search)) { return w && (o.hostname = o.host = m.shift(), (O = !!(o.host && 0 < o.host.indexOf("@")) && o.host.split("@")) && (o.auth = O.shift(), o.host = o.hostname = O.shift())), o.search = e.search, o.query = e.query, D.isNull(o.pathname) && D.isNull(o.search) || (o.path = (o.pathname ? o.pathname : "") + (o.search ? o.search : "")), o.href = o.format(), o }
                if (!m.length) return o.pathname = null, o.search ? o.path = "/" + o.search : o.path = null, o.href = o.format(), o;
                for (var _ = m.slice(-1)[0], k = (o.host || e.host || 1 < m.length) && ("." === _ || ".." === _) || "" === _, S = 0, I = m.length; 0 <= I; I--) "." === (_ = m[I]) ? m.splice(I, 1) : ".." === _ ? (m.splice(I, 1), S++) : S && (m.splice(I, 1), S--);
                if (!b && !y)
                    for (; S--;) m.unshift("..");
                !b || "" === m[0] || m[0] && "/" === m[0].charAt(0) || m.unshift(""), k && "/" !== m.join("/").substr(-1) && m.push("");
                var O, A = "" === m[0] || m[0] && "/" === m[0].charAt(0);
                return w && (o.hostname = o.host = !A && m.length ? m.shift() : "", (O = !!(o.host && 0 < o.host.indexOf("@")) && o.host.split("@")) && (o.auth = O.shift(), o.host = o.hostname = O.shift())), (b = b || o.host && m.length) && !A && m.unshift(""), m.length ? o.pathname = m.join("/") : (o.pathname = null, o.path = null), D.isNull(o.pathname) && D.isNull(o.search) || (o.path = (o.pathname ? o.pathname : "") + (o.search ? o.search : "")), o.auth = e.auth || o.auth, o.slashes = o.slashes || e.slashes, o.href = o.format(), o
            }, C.prototype.parseHost = function() {
                var e = this.host,
                    t = r.exec(e);
                t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
            }
        }, function(e, s, g) {
            g.r(s),
                function(l) {
                    g.d(s, "createVideoDecoder", function() { return i });
                    var f = g(30),
                        r = g(5),
                        e = g(7),
                        t = g(14),
                        u = g(0),
                        c = g(55),
                        d = g(2),
                        p = new t.default,
                        o = new WeakMap;
                    Object(u.onMethod)("onCanvasPlayerStateChange", function(e) { var t = e.state; "playEnd" === t ? p.emit(e.containerId + ":ended", {}) : "buffSize" === t ? p.emit(e.containerId + ":bufferchange", { size: e.buffSize }) : "error" === t && p.emit(e.containerId + ":error", { message: e.errMsg, code: e.errCode }) });
                    var a = !1;

                    function h(t) {
                        var e = this,
                            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        o.get(this).then(function() { Object(u.invokeMethod)("operateCanvasPlayer", Object.assign(n, { containerId: e.id || 0, operationType: t }), { beforeAll: function(e) { e && e.errMsg && (e.errMsg = e.errMsg.replace(/operateCanvasPlayer/g, t)) }, beforeSuccess: function() {} }) })
                    }

                    function v() { var n, r; return [new Promise(function(e, t) { n = e, r = t }), n, r] }
                    var n = function() {
                        function t() {
                            var n = this;
                            if (Object(r.default)(this, t), d.IS_ANDROID) return this._createPromise = new Promise(function(t) { l.NativeGlobal.MediaToolKit.playerCreate({}, function(e) { 0 === e.errCode && (n.id = e.containerId, t()) }) }), void(d.IS_ANDROID && (a || (a = !0, l.NativeGlobal.MediaToolKit.addEventListener("onPlayerBuffSize", function(e) { p.emit(e.containerId + ":bufferchange", { size: e.buffSize }) }), l.NativeGlobal.MediaToolKit.addEventListener("onPlayerPlayEnd", function(e) { p.emit(e.containerId + ":ended", {}) }))));
                            var e = new Promise(function(t) { Object(u.invokeMethod)("operateCanvasPlayer", { operationType: "create", success: function(e) { n.id = e.containerId, t() }, fail: function(e) { throw new Error(e.errMsg && e.errMsg.replace(/operateCanvasPlayer/g, "VideoDecoder")) } }) });
                            o.set(this, e)
                        }
                        return Object(e.default)(t, [{
                            key: "start",
                            value: function(e) {
                                var n = this,
                                    r = 0 < arguments.length && void 0 !== e ? e : {},
                                    t = v(),
                                    o = Object(f.default)(t, 3),
                                    a = o[0],
                                    i = o[1],
                                    c = o[2];
                                return d.IS_ANDROID ? this._createPromise.then(function() {
                                    function t(e) {
                                        l.NativeGlobal.MediaToolKit.playerStart({ containerId: n.id, filePath: e, mode: void 0 !== r.mode ? r.mode : 1, videoFormat: r.videoFormat || 55, startStamp: r.startTime, abortAudio: r.abortAudio, abortVideo: r.abortVideo }, function(e) {
                                            var t;
                                            0 === e.errCode ? (t = Object.assign({}, e.video), n.width = t.width || 0, n.height = t.height || 0, n.buffer = new ArrayBuffer(n.width * n.height * 4), t.video = e.video, t.audio = e.audio, p.emit(n.id + ":start", t), i(t)) : c(e)
                                        })
                                    }
                                    r.source && /^(http|https):\/\/.*/i.test(r.source) ? t(r.source) : Object(u.invokeMethod)("private_fileSystemConvert", {
                                        operationType: "getAbsolutePath",
                                        localId: r.source,
                                        success: function(e) { t(e.filePath) },
                                        fail: function(e) {
                                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                                            t.errMsg = t.errMsg && t.errMsg.replace(/private_fileSystemConvert/g, "start"), c(t)
                                        }
                                    })
                                }) : h.call(this, "start", {
                                    source: r.source,
                                    mode: void 0 !== r.mode ? r.mode : 1,
                                    videoFormat: r.videoFormat || 55,
                                    startStamp: r.startTime,
                                    abortAudio: r.abortAudio,
                                    abortVideo: r.abortVideo,
                                    success: function(e) {
                                        var t = Object.assign({}, e.video);
                                        n.buffId = e.buffId, n.width = t.width || 0, n.height = t.height || 0, t.video = e.video, t.audio = e.audio, p.emit(n.id + ":start", t), i(t)
                                    },
                                    fail: function(e) { c(e) }
                                }), a
                            }
                        }, {
                            key: "seek",
                            value: function(t, e) {
                                var n = this,
                                    r = 1 < arguments.length && void 0 !== e ? e : "inaccurate",
                                    o = v(),
                                    a = Object(f.default)(o, 3),
                                    i = a[0],
                                    c = a[1],
                                    u = a[2],
                                    s = "accurate" === r;
                                return d.IS_ANDROID ? this._createPromise.then(function() { l.NativeGlobal.MediaToolKit.playerSeek({ containerId: n.id, seekStamp: t, seekByStamp: s }, function(e) { 0 === e.errCode ? (p.emit(n.id + ":seek", { position: t }), c(t)) : u(e) }) }) : h.call(this, "seek", { seekStamp: t, seekByStamp: s, success: function() { p.emit(n.id + ":seek", { position: t }), c(t) }, fail: function(e) { u(e) } }), i
                            }
                        }, {
                            key: "stop",
                            value: function() {
                                var t = this,
                                    e = v(),
                                    n = Object(f.default)(e, 3),
                                    r = n[0],
                                    o = n[1],
                                    a = n[2];
                                return d.IS_ANDROID ? this._createPromise.then(function() { l.NativeGlobal.MediaToolKit.playerStop({ containerId: t.id }, function(e) { 0 === e.errCode ? (p.emit(t.id + ":stop", {}), o()) : a(e) }) }) : h.call(this, "stop", { success: function() { p.emit(t.id + ":stop", {}), o() }, fail: function(e) { a(e) } }), r
                            }
                        }, {
                            key: "remove",
                            value: function() {
                                var e = this,
                                    t = v(),
                                    n = Object(f.default)(t, 3),
                                    r = n[0],
                                    o = n[1],
                                    a = n[2];
                                return d.IS_ANDROID ? this._createPromise.then(function() { l.NativeGlobal.MediaToolKit.playerRemove({ containerId: e.id }, function(e) { 0 === e.errCode ? o() : a(e) }) }) : h.call(this, "remove", { success: function(e) { o(e) }, fail: function(e) { a(e) } }), r
                            }
                        }, { key: "getFrameData", value: function() { var t, n, r, o, a, i = this; return d.IS_ANDROID ? l.NativeGlobal.MediaToolKit.playerGetFrame({ containerId: this.id, buffer: this.buffer }, function(e) { e.got && (t = i.buffer), n = e.pts, r = e.pk_pts, o = e.dts, a = e.pk_dts }) : Object(u.invokeMethod)("operateCanvasPlayer", { operationType: "getFrame", containerId: this.id, success: function(e) { e.got && (t = c.default.get(i.buffId)) && (t.__proto__ = ArrayBuffer.prototype), n = e.pts, r = e.pk_pts, o = e.dts, a = e.pk_dts }, fail: function(e) { throw new Error(e.errMsg && e.errMsg.replace(/operateCanvasPlayer/g, "getFrameData")) } }), t ? { width: this.width, height: this.height, data: t, pts: n, pkPts: r, dts: o, pkDts: a } : null } }, {
                            key: "on",
                            value: function(e, t) {
                                var n = this;
                                d.IS_ANDROID ? this._createPromise.then(function() { n.id && p.on(n.id + ":" + e, t) }) : this.id ? p.on(this.id + ":" + e, t) : o.get(this).then(function() { p.on(n.id + ":" + e, t) })
                            }
                        }, {
                            key: "off",
                            value: function(e, t) {
                                var n = this;
                                d.IS_ANDROID ? this._createPromise.then(function() { n.id && p.off(n.id + ":" + e, t) }) : this.id ? p.off(this.id + ":" + e, t) : o.get(this).then(function() { p.off(n.id + ":" + e, t) })
                            }
                        }, { key: "videoDecoderId", get: function() { return this.id } }]), t
                    }();

                    function i() { return new n }
                }.call(this, g(33))
        }, function(e, m, w) {
            w.r(m),
                function(a) {
                    w.d(m, "createMediaRecorder", function() { return n });
                    var i = w(5),
                        e = w(7),
                        t = w(14),
                        u = w(0),
                        c = w(28),
                        s = w(1),
                        l = w(51),
                        f = w(2),
                        d = new t.default,
                        r = Object.assign,
                        p = new WeakMap,
                        h = new WeakMap,
                        v = new WeakMap;

                    function g(e, t) {
                        var n = this,
                            r = v.get(this);
                        r ? r.then(function() { b.call(n, e, t) }) : b.call(this, e, t)
                    }

                    function b(i) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            c = p.get(this),
                            t = c.id,
                            n = 0;
                        return c instanceof l.OffscreenCanvas && (t = parseInt(c.id / 1e6, 10), n = -c.id % 1e6), new Promise(function(a) { Object(u.invokeMethod)("operateMediaRecorder", r(e, { canvasId: t, offScreenCanvasId: n, operationType: i, success: function(e) { var t, n, r, o; "stop" === i ? (t = e.tempFilePath, n = e.tempThumbPath, r = e.fileSize, o = e.duration, d.emit(c.id + ":stop", { duration: o, tempFilePath: t, tempThumbPath: n, fileSize: r })) : d.emit(c.id + ":" + i), a() }, fail: function(e) { throw new Error(e.errMsg.replace(/operateMediaRecorder/g, i)) } })) })
                    }
                    Object(u.onMethod)("onMediaRecorderStateChange", function(e) {
                        var t, n, r, o = e.state;
                        delete e.state, "timeUpdate" === o ? (d.emit(e.canvasId + ":timeupdate", { currentTime: e.currentTime }), d.emit(e.canvasId + ":timeUpdate", { currentTime: e.currentTime })) : "error" === o && (n = e.errCode, t = (r = { 101: { code: c.error.MediaRecorder_StartDurationInvalid, message: "MediaRecorder.start:fail duration invalid" }, 103: { code: c.error.MediaRecorder_StartWhileAlreadyStartRecording, message: "MediaRecorder.start:fail start while already start recording" }, 104: { code: c.error.MediaRecorder_StartWhilePaused, message: "MediaRecorder.start:fail start while paused" }, 106: { code: c.error.MediaRecorder_StartBitRateInvalid, message: "MediaRecorder.start:fail bitrate invalid" }, 107: { code: c.error.MediaRecorder_StartFPSInvalid, message: "MediaRecorder.start:fail fps invalid" }, 108: { code: c.error.MediaRecorder_StartGOPInvalid, message: "MediaRecorder.start:fail gop invalid" }, 201: { code: c.error.MediaRecorder_PauseWhileNotStartRecording, message: "MediaRecorder.pause:fail pause while not start recording" }, 202: { code: c.error.MediaRecorder_PauseWhileAlreadyPaused, message: "MediaRecorder.pause:fail pause while already paused" }, 301: { code: c.error.MediaRecorder_ResumeWhileNotStartRecording, message: "MediaRecorder.resume:fail resume while not start recording" }, 302: { code: c.error.MediaRecorder_ResumeWhileRecording, message: "MediaRecorder.resume:fail resume while recording" }, 401: { code: c.error.MediaRecorder_AbortWhileNotStartRecording, message: "MediaRecorder.abort:fail abort while not start recording" }, 501: { code: c.error.MediaRecorder_StopWhileNotStartRecording, message: "MediaRecorder.stop:fail stop while not start recording" }, 503: { code: c.error.Global_FileStorageNotEnough, message: "MediaRecorder.stop:fail file storage not enough" } })[n] ? r[n] : [102, 110, 111, 502, 710, 810].includes(n) ? { code: c.error.MediaRecorder_InternalFailed, message: "MediaRecorder:fail internal failed" } : { code: c.error.MediaRecorder_UnknownError, message: "MediaRecorder:fail unknown error" }, d.emit(e.canvasId + ":error", { error: t }))
                    });
                    var y = !1;
                    var o = function() {
                        function o(e) {
                            var n = this,
                                t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            if (Object(i.default)(this, o), p.set(this, e), "number" == typeof t.duration ? this.duration = Math.min(7200, Math.max(5, t.duration)) : this.duration = 7200, "number" == typeof t.videoBitsPerSecond ? this.videoBitsPerSecond = Math.min(3e3, Math.max(600, t.videoBitsPerSecond)) : this.videoBitsPerSecond = 1e3, this.fps = t.fps || 24, this.gop = t.gop || 12, this.timeUpdateInterval = t.timeUpdateInterval || this.gop, this.audioPlayerId = t.audioPlayerId, f.IS_ANDROID) return this._createPromise = new Promise(function(t) { a.NativeGlobal.MediaToolKit.recorderCreate({}, function(e) { 0 === e.errCode && (n._containerId = e.containerId, t()) }) }), void(f.IS_ANDROID && (y || (y = !0, a.NativeGlobal.MediaToolKit.addEventListener("onRecorderTimeUpdate", function(e) { d.emit(e.containerId + ":timeupdate", { currentTime: e.stamp }) }))));
                            var r = b.call(this, "create", {});
                            v.set(this, r)
                        }
                        return Object(e.default)(o, [{
                            key: "pause",
                            value: function() {
                                var n = this;
                                f.IS_ANDROID ? this._createPromise.then(function() {
                                    a.NativeGlobal.MediaToolKit.recorderUpdate({ containerId: n._containerId, pause: !0 }, function(e) {
                                        var t = p.get(n);
                                        d.emit(t.id + ":pause", e)
                                    })
                                }) : g.call(this, "pause")
                            }
                        }, {
                            key: "resume",
                            value: function() {
                                var n = this;
                                f.IS_ANDROID ? this._createPromise.then(function() {
                                    a.NativeGlobal.MediaToolKit.recorderUpdate({ containerId: n._containerId, pause: !1 }, function(e) {
                                        var t = p.get(n);
                                        d.emit(t.id + ":resume", e)
                                    })
                                }) : g.call(this, "resume")
                            }
                        }, {
                            key: "start",
                            value: function() {
                                var n = this,
                                    r = p.get(this),
                                    o = { width: r.width, height: r.height, fps: this.fps, bitrate: this.videoBitsPerSecond, gop: this.gop, duration: this.duration, timeUpdateInterval: this.timeUpdateInterval, audioPlayerId: this.audioPlayerId, cumulativeStamp: !0 };
                                f.IS_IOS && s.default.clientVersion < 385879296 ? o.duration = Math.floor(this.duration) : o.duration = Math.floor(1e3 * this.duration), f.IS_ANDROID ? this._createPromise.then(function() {
                                    Object(u.invokeMethod)("private_fileSystemConvert", {
                                        operationType: "getWxFilePath",
                                        fileName: "" + Date.now(),
                                        mimeType: "mp4",
                                        autoDeleteIfExists: !0,
                                        success: function(e) {
                                            n.tempFilePath = e.localId, n._absoluteFilePath = e.filePath;
                                            var t = r.id;
                                            r instanceof l.OffscreenCanvas && (t = r.id), o.containerId = n._containerId, o.canvasId = t, o.notifyVideoKeyFrame = !0, o.filePath = e.filePath, a.NativeGlobal.MediaToolKit.recorderStart(o, function(e) { d.emit(r.id + ":start", e) })
                                        },
                                        fail: function() {}
                                    })
                                }) : g.call(this, "start", o)
                            }
                        }, {
                            key: "stop",
                            value: function() {
                                var n = this;
                                f.IS_ANDROID ? this._createPromise.then(function() {
                                    a.NativeGlobal.MediaToolKit.recorderStop({ containerId: n._containerId }, function() {
                                        a.NativeGlobal.MediaToolKit.analysis({ filePath: n._absoluteFilePath }, function(e) {
                                            var t = p.get(n);
                                            d.emit(t.id + ":stop", { duration: e.duration, tempFilePath: n.tempFilePath, fileSize: e.size })
                                        })
                                    })
                                }) : g.call(this, "stop")
                            }
                        }, {
                            key: "requestFrame",
                            value: function(e) {
                                var n = this,
                                    r = 0 < arguments.length && void 0 !== e ? e : function() {},
                                    t = p.get(this);
                                f.IS_ANDROID ? this._createPromise.then(function() {
                                    a.NativeGlobal.MediaToolKit.recorderCapture({ containerId: n._containerId }, function(e) {
                                        var t = 1e3 / n.fps;
                                        if (e.got) r();
                                        else {
                                            if (0 < e.videoFrameMaxCnt && e.videoFrameCnt > e.videoFrameMaxCnt) return void setTimeout(function() { n.requestFrame(r) }, t);
                                            setTimeout(function() { n.requestFrame(r) }, t)
                                        }
                                    })
                                }) : t instanceof l.OffscreenCanvas ? setTimeout(function() { r(), a.WeixinCanvas.recordFrame(parseInt(t.id / 1e6, 10), -t.id % 1e6) }) : t.requestAnimationFrame(r)
                            }
                        }, { key: "on", value: function(e, t) { var n, r = this;!f.IS_ANDROID || "timeupdate" !== e && "timeUpdate" !== e ? (n = p.get(this), d.on(n.id + ":" + e, t)) : this._createPromise.then(function() { d.on(r._containerId + ":timeupdate", t) }) } }, { key: "off", value: function(e, t) { var n;!f.IS_ANDROID || "timeupdate" !== e && "timeUpdate" !== e ? (n = p.get(this), d.off(n.id + ":" + e, t)) : a.NativeGlobal.MediaToolKit.removeEventListener("onRecorderTimeUpdate", t) } }, {
                            key: "destroy",
                            value: function() {
                                var e = this,
                                    t = p.get(this);
                                if (["start", "stop", "pause", "resume", "abort", "timeupdate", "error"].forEach(function(e) { d.removeAllListeners(t.id + ":" + e) }), f.IS_ANDROID) return this._createPromise.then(function() { a.NativeGlobal.MediaToolKit.recorderRemove({ containerId: e._containerId }, function() {}) }), void h.set(t, null);
                                g.call(this, "remove"), h.set(t, null)
                            }
                        }]), o
                    }();

                    function n(e, t) { if (h.get(e)) throw new Error("Already created by the same canvas node."); var n = new o(e, t); return h.set(e, n), n }
                }.call(this, w(33))
        }, function(e, y, m) {
            m.r(y),
                function(o) {
                    m.d(y, "SkiaCanvasIOS", function() { return t });
                    var r = m(35),
                        a = m(5),
                        i = m(7),
                        c = m(36),
                        u = m(15),
                        s = m(19),
                        l = m(9),
                        n = m(0),
                        f = m(10),
                        e = m(2),
                        d = m(22),
                        p = m(46),
                        h = m(75),
                        v = m(48);

                    function g(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(l.default)(r); return t = o ? (e = Object(l.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(s.default)(this, t) } }
                    e.IS_IOS && (Object(n.subscribe)("skiaCanvasInsert", function(e, t) { Object(d.skiaCanvasInsert)(e, t) }), Object(n.subscribe)("skiaCanvasRemove", function(e, t) { Object(d.skiaCanvasRemove)(e, t), Object(n.publish)("skiaCanvasRemoved_" + e.canvasNumber) }), Object(n.subscribe)("skiaCanvasSizeChangedBinding", function(e, t) {
                        var n = Object(f.concatId)(t, e.canvasNumber),
                            r = d.canvasRefMapById[n];
                        r && (r._top = e.position.top, r._left = e.position.left, r._width = e.position.width, r._height = e.position.height)
                    }));
                    var b = function(e) {
                            Object(u.default)(r, e);
                            var t = g(r);

                            function r() { return Object(a.default)(this, r), t.apply(this, arguments) }
                            return Object(i.default)(r, [{
                                key: "loadFontFace",
                                value: function(e) {
                                    var t = 0 < arguments.length && void 0 !== e ? e : [];
                                    Object(c.default)(Object(l.default)(r.prototype), "loadFontFace", this).call(this, t);
                                    var n = o.skiacanvasLoadNewFont;
                                    "function" == typeof n && n(t.map(function(e) { return e.src = e.src || "", e.family = e.family || "", e.style = e.style || "", e.weight = e.weight || "", e.variant = e.variant || "", e }))
                                }
                            }]), r
                        }(d.CanvasFontManager),
                        t = function(e) {
                            Object(u.default)(n, e);
                            var t = g(n);

                            function n() { return Object(a.default)(this, n), t.apply(this, arguments) }
                            return Object(i.default)(n, [{ key: "_initCanvasInstance", value: function() { return d.CanvasFontManager.initialize(b), new o.Canvas(this.id) } }, { key: "getContext", value: function(e, t) { return Object(f.pipe)(p.decorateContextForImageProxy, h.temporarilyPatchContext)(Object(c.default)(Object(l.default)(n.prototype), "getContext", this).call(this, e, t), this.id) } }, {
                                key: "createImage",
                                value: function() {
                                    var e = new o.Image,
                                        t = Object(f.wrapImageObject)(e, d.skiaCanvasMappings[this._canvasId]);
                                    return new p.SkiaImageProxy(t)
                                }
                            }, { key: "createImageData", value: function(e, t, n) { return e ? (t = parseFloat(t), n = parseFloat(n), new o.ImageData(e, t, n)) : null } }, { key: "createPath2D", value: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return 0 === t.length ? new Path2D : 1 === t.length ? Object(r.default)(Path2D, t) : null } }, { key: "requestAnimationFrame", value: function(e) { var t = Object(v.getWeixinCanvas)().requestAnimationFrame(e); return Object(c.default)(Object(l.default)(n.prototype), "requestAnimationFrame", this).call(this, t), t } }, { key: "cancelAnimationFrame", value: function(e) { return Object(v.getWeixinCanvas)().cancelAnimationFrame(e) } }]), n
                        }(d.SkiaCanvas)
                }.call(this, m(33))
        }, function(e, O, A) {
            A.r(O),
                function(o) {
                    A.d(O, "SkiaCanvasAndroid", function() { return t });
                    var a = A(35),
                        i = A(36),
                        c = A(15),
                        u = A(19),
                        s = A(9),
                        l = A(5),
                        f = A(7),
                        r = A(1),
                        d = A(13),
                        n = A(0),
                        e = A(2),
                        p = A(10),
                        h = A(22),
                        v = A(46),
                        g = A(75),
                        b = A(23);

                    function y(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(s.default)(r); return t = o ? (e = Object(s.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(u.default)(this, t) } }
                    var m = {};

                    function w(e, t) {
                        var n = Object(p.concatId)(t, e.canvasNumber),
                            r = m[n];
                        delete m[n], r && r.dispose()
                    }
                    e.IS_ANDROID && (Object(n.subscribe)("skiaCanvasInsert", function(e, t) { Object(h.skiaCanvasInsert)(e, t), Object(b.onBeforeUnloadPage)(t, function() { w(e, t) }) }), Object(n.subscribe)("skiaCanvasRemove", function(e, t) { Object(h.skiaCanvasRemove)(e, t), w(e, t), Object(n.publish)("skiaCanvasRemoved_" + e.canvasNumber) }), Object(n.subscribe)("skiaCanvasSizeChangedBinding", function(e, t) {
                        var n = Object(p.concatId)(t, e.canvasNumber),
                            r = h.canvasRefMapById[n];
                        r && (r._top = e.position.top, r._left = e.position.left, r._width = e.position.width, r._height = e.position.height)
                    }), Object(n.onMethod)("onXWebCanvasSurfaceChange", function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                            t = 1 < arguments.length ? arguments[1] : void 0,
                            n = Object(p.concatId)(t, e.viewId),
                            r = h.canvasRefMapById[n];
                        r && "function" == typeof r._swap && r._swap()
                    }));
                    var _ = function() {
                            function e() { Object(l.default)(this, e) }
                            return Object(f.default)(e, [{ key: "sync", value: function(e) { this.t = setInterval(function() { e() }, 1e3 / 60) } }, { key: "dispose", value: function() { clearInterval(this.t) } }]), e
                        }(),
                        k = { offset: Date.now(), now: function() { return Date.now() - this.offset } },
                        S = function() {
                            function n(e) {
                                var t = this;
                                Object(l.default)(this, n), this.id = 0, this.canvasView = e, this.callbacks = new Map, this.vSync = new _, this.vSync.sync(function() {
                                    var e = new Map(t.callbacks);
                                    t.callbacks.clear(), e.forEach(function(e) { "function" == typeof e && e.apply(null, [k.now()]) }), t.canvasView.present()
                                })
                            }
                            return Object(f.default)(n, [{ key: "requestAnimationFrame", value: function(e) { var t = this.id++; return this.callbacks.set(t, e), t } }, { key: "cancelAnimationFrame", value: function(e) { this.callbacks.delete(e) } }, { key: "dispose", value: function() { this.vSync.dispose(), this.callbacks.clear() } }]), n
                        }(),
                        I = function(e) {
                            Object(c.default)(r, e);
                            var t = y(r);

                            function r() { return Object(l.default)(this, r), t.apply(this, arguments) }
                            return Object(f.default)(r, [{
                                key: "loadFontFace",
                                value: function(e) {
                                    var t = 0 < arguments.length && void 0 !== e ? e : [];
                                    Object(i.default)(Object(s.default)(r.prototype), "loadFontFace", this).call(this, t);
                                    var n = d.default.SkiaCanvasLoadNewFont || o.SkiaCanvasLoadNewFont;
                                    "function" == typeof n && n(t.map(function(e) { return e.src = e.src || "", e.family = e.family || "", e.style = e.style || "", e.weight = e.weight || "", e.variant = e.variant || "", e }))
                                }
                            }]), r
                        }(h.CanvasFontManager),
                        t = function(e) {
                            Object(c.default)(n, e);
                            var t = y(n);

                            function n() { return Object(l.default)(this, n), t.apply(this, arguments) }
                            return Object(f.default)(n, [{
                                key: "_initCanvasInstance",
                                value: function() {
                                    h.CanvasFontManager.initialize(I);
                                    var e = (d.default.HTMLCanvasView || o.HTMLCanvasView).createView(this.id),
                                        t = (d.default.HTMLCanvasElement || o.HTMLCanvasElement).createElement(e);
                                    return this._scheduler = new S(e), m[this._canvasId] = this._scheduler, this._swap = function() { e.swapSurface() }, t
                                }
                            }, { key: "getContext", value: function(e, t) { return Object(p.pipe)(v.decorateContextForImageProxy, g.temporarilyPatchContext)(Object(i.default)(Object(s.default)(n.prototype), "getContext", this).call(this, e, t), this.id) } }, {
                                key: "createImage",
                                value: function() {
                                    var e = new(d.default.SkiaImages || SkiaImage),
                                        t = Object(p.wrapImageObject)(e, h.skiaCanvasMappings[this._canvasId]);
                                    return new v.SkiaImageProxy(t)
                                }
                            }, { key: "createImageData", value: function(e, t, n) { return e ? (t = parseFloat(t), n = parseFloat(n), new(d.default.SkiaImageData || o.SkiaImageData)(e, t, n)) : null } }, { key: "createPath2D", value: function() { for (var e = d.default.SkiaPath2D || o.SkiaPath2D, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return 0 === n.length ? new e : 1 === n.length ? Object(a.default)(e, n) : null } }, { key: "requestAnimationFrame", value: function(e) { return r.default.useSkiaCanvasRaf ? (d.default.SkiaCanvasRequestAnimationFrame || o.SkiaCanvasRequestAnimationFrame)(e) : this._scheduler.requestAnimationFrame(e) } }, { key: "cancelAnimationFrame", value: function(e) { r.default.useSkiaCanvasRaf ? (d.default.SkiaCanvasCancelAnimationFrame || o.SkiaCanvasCancelAnimationFrame)(e) : this._scheduler.cancelAnimationFrame(e) } }]), n
                        }(h.SkiaCanvas)
                }.call(this, A(33))
        }, function(e, t, n) {
            n(95), n(96);
            var r, o, a, i, c, u, s, l, f, d, p, h = n(84).onMessage,
                v = n(77).postMessage,
                g = n(54).createSharedArrayBuffer;
            !0 === Foundation.env.isSupportWorkerAPI && (r = n(85).getFileSystemManager, o = n(86).getFileSystemManager, i = (a = n(94)).request, c = a.downloadFile, u = a.uploadFile, s = a.socket, l = n(12).isGame, f = n(1).default, d = n(93).createInnerAudioContext, p = s.connectSocket, t.connectSocket = p, t.request = i, t.downloadFile = c, t.uploadFile = u, t.createInnerAudioContext = d, f.onReady(function() { l() ? t.getFileSystemManager = r : t.getFileSystemManager = o })), Protect.hijack(), t.onMessage = h, t.postMessage = v, t.createSharedArrayBuffer = g
        }, function(e, t, n) {
            n.r(t), n.d(t, "onMessage", function() { return a });
            var r = n(66).default.GlobalEmitter,
                o = [],
                a = function(e) { o.push(e) };
            r.on("appServiceMessage", function(t) { o.forEach(function(e) { "function" == typeof e && e(t) }) })
        }, function(e, t, n) {
            n.r(t), n.d(t, "getFileSystemManager", function() { return o });
            var r = n(44),
                o = function() { return r.default.game }
        }, function(e, t, n) {
            n.r(t), n.d(t, "getFileSystemManager", function() { return o });
            var r = n(44),
                o = function() { return r.default.app }
        }, function(e, g, T) {
            (function(p, h) {
                var v;
                ! function() {
                    g && g.nodeType, p && p.nodeType;
                    var e = "object" == typeof h && h;
                    e.global !== e && e.window !== e && e.self;
                    var t, b = 2147483647,
                        y = 36,
                        m = 1,
                        w = 26,
                        o = 38,
                        a = 700,
                        _ = 72,
                        k = 128,
                        S = "-",
                        n = /^xn--/,
                        r = /[^\x20-\x7E]/,
                        i = /[\x2E\u3002\uFF0E\uFF61]/g,
                        c = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
                        u = y - m,
                        I = Math.floor,
                        O = String.fromCharCode;

                    function A(e) { throw new RangeError(c[e]) }

                    function s(e, t) { for (var n = e.length, r = []; n--;) r[n] = t(e[n]); return r }

                    function l(e, t) {
                        var n = e.split("@"),
                            r = "";
                        return 1 < n.length && (r = n[0] + "@", e = n[1]), r + s((e = e.replace(i, ".")).split("."), t).join(".")
                    }

                    function C(e) { for (var t, n, r = [], o = 0, a = e.length; o < a;) 55296 <= (t = e.charCodeAt(o++)) && t <= 56319 && o < a ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t); return r }

                    function j(e) { return s(e, function(e) { var t = ""; return 65535 < e && (t += O((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += O(e) }).join("") }

                    function P(e, t) { return e + 22 + 75 * (e < 26) - ((0 != t) << 5) }

                    function M(e, t, n) { var r = 0; for (e = n ? I(e / a) : e >> 1, e += I(e / t); u * w >> 1 < e; r += y) e = I(e / u); return I(r + (u + 1) * e / (e + o)) }

                    function f(e) {
                        var t, n, r, o, a, i, c, u, s, l, f = [],
                            d = e.length,
                            p = 0,
                            h = k,
                            v = _,
                            g = e.lastIndexOf(S);
                        for (g < 0 && (g = 0), n = 0; n < g; ++n) 128 <= e.charCodeAt(n) && A("not-basic"), f.push(e.charCodeAt(n));
                        for (r = 0 < g ? g + 1 : 0; r < d;) {
                            for (o = p, a = 1, i = y; d <= r && A("invalid-input"), l = e.charCodeAt(r++), (y <= (c = l - 48 < 10 ? l - 22 : l - 65 < 26 ? l - 65 : l - 97 < 26 ? l - 97 : y) || c > I((b - p) / a)) && A("overflow"), p += c * a, !(c < (u = i <= v ? m : v + w <= i ? w : i - v)); i += y) a > I(b / (s = y - u)) && A("overflow"), a *= s;
                            v = M(p - o, t = f.length + 1, 0 == o), I(p / t) > b - h && A("overflow"), h += I(p / t), p %= t, f.splice(p++, 0, h)
                        }
                        return j(f)
                    }

                    function d(e) {
                        for (var t, n, r, o, a, i, c, u, s, l, f, d = [], p = (e = C(e)).length, h = k, v = _, g = t = 0; g < p; ++g)(u = e[g]) < 128 && d.push(O(u));
                        for (n = r = d.length, r && d.push(S); n < p;) {
                            for (o = b, g = 0; g < p; ++g) h <= (u = e[g]) && u < o && (o = u);
                            for (o - h > I((b - t) / (s = n + 1)) && A("overflow"), t += (o - h) * s, h = o, g = 0; g < p; ++g)
                                if ((u = e[g]) < h && ++t > b && A("overflow"), u == h) {
                                    for (a = t, i = y; !(a < (c = i <= v ? m : v + w <= i ? w : i - v)); i += y) f = a - c, l = y - c, d.push(O(P(c + f % l, 0))), a = I(f / l);
                                    d.push(O(P(a, 0))), v = M(t, s, n == r), t = 0, ++n
                                }++t, ++h
                        }
                        return d.join("")
                    }
                    t = { version: "1.4.1", ucs2: { decode: C, encode: j }, decode: f, encode: d, toASCII: function(e) { return l(e, function(e) { return r.test(e) ? "xn--" + d(e) : e }) }, toUnicode: function(e) { return l(e, function(e) { return n.test(e) ? f(e.slice(4).toLowerCase()) : e }) } }, void 0 === (v = function() { return t }.call(g, T, g, p)) || (p.exports = v)
                }()
            }).call(this, T(88)(e), T(33))
        }, function(e, t) { e.exports = function(e) { return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), e.webpackPolyfill = 1), e } }, function(e, t, n) { e.exports = { isString: function(e) { return "string" == typeof e }, isObject: function(e) { return "object" == typeof e && null !== e }, isNull: function(e) { return null === e }, isNullOrUndefined: function(e) { return null == e } } }, function(e, t, n) { t.decode = t.parse = n(91), t.encode = t.stringify = n(92) }, function(e, t, n) {
            e.exports = function(e, t, n, r) {
                t = t || "&", n = n || "=";
                var o = {};
                if ("string" != typeof e || 0 === e.length) return o;
                var a = /\+/g;
                e = e.split(t);
                var i = 1e3;
                r && "number" == typeof r.maxKeys && (i = r.maxKeys);
                var c = e.length;
                0 < i && i < c && (c = i);
                for (var u, s, l = 0; l < c; ++l) {
                    var f, d = e[l].replace(a, "%20"),
                        p = d.indexOf(n),
                        h = 0 <= p ? (f = d.substr(0, p), d.substr(p + 1)) : (f = d, ""),
                        v = decodeURIComponent(f),
                        g = decodeURIComponent(h);
                    u = o, s = v, Object.prototype.hasOwnProperty.call(u, s) ? b(o[v]) ? o[v].push(g) : o[v] = [o[v], g] : o[v] = g
                }
                return o
            };
            var b = Array.isArray || function(e) { return "[object Array]" === Object.prototype.toString.call(e) }
        }, function(e, t, n) {
            function a(e) {
                switch (typeof e) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return ""
                }
            }
            e.exports = function(n, r, o, e) { return r = r || "&", o = o || "=", null === n && (n = void 0), "object" == typeof n ? c(u(n), function(e) { var t = encodeURIComponent(a(e)) + o; return i(n[e]) ? c(n[e], function(e) { return t + encodeURIComponent(a(e)) }).join(r) : t + encodeURIComponent(a(n[e])) }).join(r) : e ? encodeURIComponent(a(e)) + o + encodeURIComponent(a(n)) : "" };
            var i = Array.isArray || function(e) { return "[object Array]" === Object.prototype.toString.call(e) };

            function c(e, t) { if (e.map) return e.map(t); for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r)); return n }
            var u = Object.keys || function(e) { var t = []; for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n); return t }
        }, function(e, t, n) {
            n.r(t), n.d(t, "createVideoContext", function() { return dr.createVideoContext }), n.d(t, "createSQVideoContext", function() { return dr.createSQVideoContext }), n.d(t, "createCameraContext", function() { return xr }), n.d(t, "createMapContext", function() { return Z }), n.d(t, "createSQMapContext", function() { return $ }), n.d(t, "createInnerAudioContext", function() { return xa }), n.d(t, "createLivePlayerContext", function() { return eo }), n.d(t, "createSQLivePlayerContext", function() { return to }), n.d(t, "createLivePusherContext", function() { return _o }), n.d(t, "createAudioContext", function() { return Do }), n.d(t, "createSQEditorContext", function() { return Ga });
            var y = n(3),
                l = n(4),
                m = n(0),
                a = null;
            Object(m.subscribe)("onInputComponentData", function(e) { a = e, o.forEach(function(e) { r(e, e.webviewId) }), o = [] });
            var r = function(e, t) {
                var n = 1 < arguments.length && void 0 !== t ? t : 0,
                    r = a.data;
                if (r && "function" == typeof y.default.webviewEventCallback) { var o = JSON.parse(r); if (o.bindkeyboardheightchange) try { y.default.webviewEventCallback({ data: { type: "keyboardheightchange", target: o.target, currentTarget: o.target, timeStamp: Date.now(), touches: [], detail: { duration: e.duration || 0, height: e.height || 0 } }, eventName: o.bindkeyboardheightchange, webviewId: n || y.default.currentWebviewId, nodeId: o.nodeId }) } catch (e) { throw new l.AppServiceSdkKnownError("bind key input error") } }
            };
            Object(m.subscribe)("removeInputComponent", function(e) { a && a.inputId === e.inputId && (a = null) });
            var o = [];
            Object(m.onMethod)("onKeyboardHeightChange", function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                a ? r(e, t) : o.push({ inputId: e.inputId, height: e.height, duration: e.duration, webviewId: t })
            }), Object(m.onMethod)("onKeyboardValueChange", function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = e.value,
                    r = e.cursor;
                if (Object(m.publish)("setKeyboardValue", { value: n, cursor: r, inputId: e.inputId }, [t]), e.data) {
                    var o, a, i = JSON.parse(e.data);
                    if (i.modelValueName && __virtualDOM__.setModelValueData(e.value, i.modelValueName, t, i.nodeId), "function" == typeof y.default.webviewEventCallback && i.bindinput) {
                        try { o = y.default.webviewEventCallback({ data: { type: "input", target: i.target, currentTarget: i.target, timeStamp: Date.now(), touches: [], detail: { value: e.value, cursor: e.cursor, keyCode: e.keyCode } }, eventName: i.bindinput, webviewId: t, nodeId: i.nodeId }) } catch (e) { throw new l.AppServiceSdkKnownError("bind key input error") }
                        i.setKeyboardValue && (null == o || !1 === o || ("Object" === Object(l.getDataType)(o) ? (a = { inputId: e.inputId }, n !== o.value && (a.value = o.value + ""), Number.isNaN(parseInt(o.cursor, 10)) || (a.cursor = parseInt(o.cursor, 10), void 0 === a.value && (a.value = n), a.cursor > a.value.length && (a.cursor = -1)), Object(m.invokeMethod)("setKeyboardValue", a)) : n !== o && Object(m.invokeMethod)("setKeyboardValue", { value: o + "", cursor: -1, inputId: e.inputId })))
                    }
                }
            });

            function c(e, t) { var n = !(1 < arguments.length && void 0 !== t) || t; return Object(l.getRealRoute)(y.default.lastRoute, e, n) }
            var i, u, s = n(14),
                h = n(17),
                f = n(15),
                d = n(19),
                p = n(9),
                v = n(20),
                g = n(24),
                b = n(7),
                w = n(11),
                _ = n(5),
                k = n(8),
                S = n(23),
                I = n(2),
                O = n(27),
                A = (i = "getCloudFileUrl", u = "qbase_commapi", Object(O.default)(i, u, {}, {}, function(e) { var t = e.data; return { qbase_api_name: "tcbapi_component_gettempfileurl", qbase_req: JSON.stringify({ fileid_list: t.fileid_list.slice(), type: t.type }), cli_req_id: +new Date + "_" + Math.random() } }, function(e) { return e }));

            function C(e, t, n) { P({ fileIds: e, type: t, success: n }) }
            var j = new Map,
                P = function(e) {
                    var a, t, n = e.fileIds,
                        i = e.type,
                        r = e.success,
                        c = new Map,
                        o = [],
                        u = !1;
                    n.forEach(function(e) {
                        var t = j.get(e);
                        if (t) {
                            if (Date.now() < t.expireTime) return void(c.has(e) || (c.set(e, t.data), u = u || !0));
                            j.delete(e)
                        }
                        /^(cloud):\/\//.test(e) && o.push(e)
                    }), 0 !== o.length ? (a = 0, t = function(e, t) { for (var n = [], r = Math.ceil(e.length / t), o = 0; o < r; o++) n.push(e.slice(o * t, (o + 1) * t)); return n }(n, 50), Promise.all(t.map(function(o) {
                        return new Promise(function(r) {
                            A({
                                data: { fileid_list: o, type: i },
                                requestInQueue: !1,
                                success: function(e) {
                                    var t, n = JSON.parse(e.rawData);
                                    n.baseresponse && 0 === n.baseresponse.errcode ? n.download_list.forEach(function(e) { c.set(e.fileid, e), !j.has(e.fileid) && e.max_age && j.set(e.fileid, { data: e, expireTime: Date.now() + 1e3 * e.max_age }) }) : n.baseresponse ? o.forEach(function(e) { c.set(e, { download_url: e, service_errcode: n.baseresponse.errcode, errmsg: "system error baseresponse.errcode " + n.baseresponse.errcode }), j.has(e) && j.delete(e) }) : o.forEach(function(e) { c.set(e, { download_url: e, service_errcode: -1, errmsg: "system error baseresponse empty" }), j.has(e) && j.delete(e) }), n.baseresponse && n.baseresponse.stat && n.baseresponse.stat.qbase_cost_time && (t = n.baseresponse.stat.qbase_cost_time, a < t && (a = t)), r()
                                },
                                fail: function() { r() },
                                complete: function() {}
                            })
                        })
                    })).then(function() { M(n, c, a, r) }).catch(function(t) { "function" == typeof r && r({ data: n.map(function(e) { return { url: e, service_errcode: -1, errmsg: t + "" } }) }) })) : u ? M(n, c, 0, r) : "function" == typeof r && r({ data: n.map(function(e) { return { url: e } }) })
                };

            function M(e, n, t, r) {
                var o = [];
                e.forEach(function(e) { var t; /^(cloud):\/\//.test(e) ? (t = n.get(e)) ? 0 === t.service_errcode ? o.push({ url: t.download_url }) : o.push({ url: e, code: t.service_errcode, msg: t.errmsg }) : o.push({ url: e, code: -1, msg: "NO_RESULT" }) : o.push({ url: e }) }), "function" == typeof r && r({ data: o, cost: t })
            }
            var T, x = n(6);

            function E(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(p.default)(r); return t = o ? (e = Object(p.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(d.default)(this, t) } }

            function D(t, e) { var n, r = Object.keys(t); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, n)), r }

            function R(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? D(Object(n), !0).forEach(function(e) { Object(v.default)(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
                }
                return t
            }
            var B = {},
                F = {},
                L = new s.EventEmitter2,
                N = {},
                W = {},
                V = {},
                U = ["getCenterLocation", "getRegion", "getScale", "includePoints", "moveToLocation", "translateMarker", "setIndoorFloor", "getIndoorFloor", "setIndoorMaskColor", "getRotate", "getSkew", "eraseLines", "setCenterOffset", "addCustomLayer", "removeCustomLayer", "moveAlong", "initMarkerCluster", "addMarkers", "removeMarkers", "on", "off", "once"];
            var G = 0;
            Object(m.subscribe)("mapInsert", function(e, t) {
                var n, r = e.nodeId,
                    o = e.domId,
                    a = e.mapId,
                    i = t + "_" + e.pluginId + "_" + o + "_";
                r && r !== __virtualDOM__.getRootNodeId(t) && (i += r), B[i] = a, F[t + "_" + a] = e, L.emit("mapInsert"), N[n = t] || (N[n] = !0, Object(S.onBeforeUnloadPage)(n, function(t) { delete N[t], Object.keys(B).forEach(function(e) { new RegExp("^" + t).test(e) && (delete F[t + "_" + B[e]], delete B[e]) }), Object.keys(W).forEach(function(e) { new RegExp("^api_" + t).test(e) && (delete F[t + "_" + B[e.substr(4)]], delete W[e]) }), Object.keys(W).forEach(function(e) { new RegExp("^SQ_" + t).test(e) && (delete F[e.substr(3)], delete W[e]) }) }))
            }), Object(m.subscribe)("mapRemove", function(e, t) {
                var n = e.domId,
                    r = e.mapId,
                    o = e.pluginId,
                    a = e.nodeId,
                    i = t + "_" + o + "_" + n + "_";
                a && a !== __virtualDOM__.getRootNodeId(t) && (i += a), delete B[i], delete F[t + "_" + r];
                var c = "api_" + t + "_" + o + "_" + n + "_";
                a && a !== __virtualDOM__.getRootNodeId(t) && (c += a);
                var u = "SQ_" + t + "_" + r;
                delete W[c], delete W[u]
            });
            var q = function e() { Object(_.default)(this, e) };
            Object(m.subscribe)("operateMapCallback", function(e) {
                var t = e.callbackId;
                t && "function" == typeof V[t] && (V[t](e), delete V[t])
            });
            var H, K, z, J, Q = (T = function() {
                    function e() {
                        var t = this;
                        Object(_.default)(this, e);
                        var n = this.exportContext = new q;
                        U.forEach(function(e) { return n[e] = t[e].bind(t) }), this._lastMarkerPos = {}, this._lastMarkerDeg = {}, this._translating = {}, this._delayTranslate = {}, this._isGetMarkerPos = {}
                    }
                    return Object(b.default)(e, [{ key: "on", value: function(e, t) { this._listenerHandler("on", e, t) } }, { key: "off", value: function(e, t) { this._listenerHandler("off", e, t) } }, { key: "once", value: function(e, t) { this._listenerHandler("once", e, t) } }, {
                        key: "_invoke",
                        value: function(e, t) {
                            var n;
                            I.IS_PC || I.IS_DEVTOOLS || I.IS_HOST_SDK || I.IS_HOST_WMPF || 0 <= ["includeMapPoints", "getMapMarker"].indexOf(e) ? (t.method = e, n = "callback" + this.webviewId + "_" + t.mapId + "_" + G++, V[n] = function(e) { delete e.callbackId, delete e.mapId, delete e.method, e.errMsg && (-1 < e.errMsg.indexOf(":ok") ? "function" == typeof t.success && t.success(e) : -1 < e.errMsg.indexOf(":fail") && "function" == typeof t.fail && t.fail(e)), "function" == typeof t.complete && t.complete(e) }, t.callbackId = n, Object(m.publish)("operateMap", t, [this.webviewId])) : Object(m.invokeMethod)(e, t)
                        }
                    }, {
                        key: "getCenterLocation",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("getMapCenterLocation", t)
                        }
                    }, {
                        key: "getScale",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("getMapScale", t, { beforeSuccess: function(e) { e.scale = +Number.parseFloat(e.scale).toFixed(2) } })
                        }
                    }, {
                        key: "getRegion",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("getMapRegion", t)
                        }
                    }, {
                        key: "moveToLocation",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("moveToMapLocation", t)
                        }
                    }, {
                        key: "moveAlong",
                        value: function(e) {
                            var t, n = 0 < arguments.length && void 0 !== e ? e : {};
                            Object(m.beforeInvoke)("moveAlong", n, { duration: 0, markerId: 0, path: [] }) && (t = { autoRotate: !0 }, Object.assign(t, n), this._invokeMethod("moveMapMarkerAlong", t))
                        }
                    }, {
                        key: "addMarkers",
                        value: function(e) {
                            var n, r, o, a = this,
                                i = 0 < arguments.length && void 0 !== e ? e : {};
                            Object(m.beforeInvoke)("addMarkers", i, { markers: [] }) && (n = i.markers.map(function() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                x.isNumber(e.id) || console.warn("marker id must be a number");
                                var t = Object.assign({}, e);
                                t.anchor = x.isObject(t.anchor) ? t.anchor : { x: .5, y: 1 }, t.alpha = x.isNumber(t.alpha) ? t.alpha : 1, t.rotate = x.isNumber(t.rotate) ? t.rotate : 0;
                                var n = t.iconPath;
                                return x.isString(n) && !/^(wxfile|https?)/.test(n) && (t.iconPath = c(n, !1)), x.isObject(t.label) && (t.label = Object.assign({ content: "", color: "#000000", fontSize: 12, borderRadius: 0, borderWidth: 0, borderColor: "#000000", bgColor: "#00000000", padding: 0, anchorX: 0, anchorY: 0, textAlign: "right" }, t.label)), x.isObject(t.callout) ? (t.callout = Object.assign({ content: "", color: "#000000", fontSize: 12, display: "BYCLICK", borderRadius: 0, borderWidth: 0, borderColor: "#00000000", bgColor: "#ffffff", padding: 0, anchorX: 0, anchorY: 0, textAlign: "center" }, t.callout), t.callout.display = "ALWAYS" === t.callout.display ? 1 : 0) : x.isString(t.title) && (t.callout = { content: t.title, bgColor: "#FFFFFF", padding: 10, display: 0, textAlign: "center" }), delete t.title, t.data = JSON.stringify({ markerId: t.id }), t
                            }), r = {}, n.forEach(function(e, t) {
                                var n = e.iconPath;
                                x.isString(n) && /^cloud:/.test(n) && (r[n] || (r[n] = []), r[n].push(t))
                            }), o = Object.keys(r), C(o, "image", function(e) {
                                Object(g.default)(e.data.map(function(e) { return e.url })).forEach(function(t, e) { r[o[e]].forEach(function(e) { n[e].iconPath = t }) });
                                var t = Object.assign({ clear: !1 }, i, { markers: n });
                                a._invokeMethod("addMapMarkers", t)
                            }))
                        }
                    }, {
                        key: "removeMarkers",
                        value: function(e) {
                            var t, n = 0 < arguments.length && void 0 !== e ? e : {};
                            Object(m.beforeInvoke)("removeMarkers", n, { markerIds: [] }) && (t = Object.assign({}, { markers: n.markerIds }, n), this._invokeMethod("removeMapMarkers", t))
                        }
                    }, {
                        key: "initMarkerCluster",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {},
                                n = Object.assign({ enableDefaultStyle: !0, zoomOnClick: !0, gridSize: 60 }, t);
                            this._invokeMethod("initMapMarkerCluster", n)
                        }
                    }, {
                        key: "translateMarker",
                        value: function(e) {
                            var n = this,
                                r = 0 < arguments.length && void 0 !== e ? e : {},
                                o = r.markerId;
                            if (void 0 !== o)
                                if (r.destination)
                                    if (this._translating[o]) this._delayTranslate[o] ? this._delayTranslate[o].push(r) : this._delayTranslate[o] = [r];
                                    else {
                                        if (!this._isGetMarkerPos[o]) return this._translating[o] = !0, this._invokeMethod("getMapMarker", {
                                            markerId: o,
                                            success: function(e) { n._lastMarkerPos[o] = e.pos },
                                            complete: function() {
                                                n._isGetMarkerPos[o] = !0, n._translating[o] = !1;
                                                var e = n._delayTranslate[o];
                                                e && e.length && n.translateMarker(e.shift())
                                            }
                                        }), void(this._delayTranslate[o] ? this._delayTranslate[o].push(r) : this._delayTranslate[o] = [r]);
                                        0 === r.duration && (r.duration = 1);
                                        var t, a, i, c, u, s, l = {
                                                markerId: o,
                                                keyFrames: [],
                                                success: function(e) { "function" == typeof r.success && r.success.call(n, e), "function" == typeof r.animationEnd && r.animationEnd.call(n) },
                                                fail: function(e) { n._delayTranslate[o] = [], "function" == typeof r.fail && r.fail.call(n, e) },
                                                complete: function(e) {
                                                    "function" == typeof r.complete && r.complete.call(n, e), n._translating[o] = !1;
                                                    var t = n._delayTranslate[o];
                                                    t && t.length && n.translateMarker(t.shift())
                                                }
                                            },
                                            f = 0,
                                            d = this._lastMarkerPos[o],
                                            p = r.destination,
                                            h = !(d && d.latitude === p.latitude && d.longitude === p.longitude);
                                        r.autoRotate || "number" != typeof r.rotate ? (d && (c = (a = p.latitude - d.latitude) / (i = p.longitude - d.longitude) || 0, u = Math.abs((i < 0 ? 180 : 0) - Math.abs(180 * Math.atan(c) / Math.PI)) * (0 < a ? -1 : 1)), "number" == typeof this._lastMarkerDeg[o] && (t = u - this._lastMarkerDeg[o], 180 < Math.abs(t) && (t = 0 < t ? t - 360 : t + 360), 3 < Math.abs(t) && r.autoRotate && h && (f = t)), (3 < Math.abs(t) && r.autoRotate || void 0 === this._lastMarkerDeg[o]) && (this._lastMarkerDeg[o] = u)) : (s = r.rotate - (this._lastMarkerDeg[o] || 0), 3 < Math.abs(s) && (180 < Math.abs(s) && (s = 0 < s ? s - 360 : s + 360), f = s, this._lastMarkerDeg[o] = r.rotate));
                                        var v = "number" == typeof r.duration ? r.duration : 1e3;
                                        r.moveWithRotate ? l.keyFrames.push(R({ rotate: f, duration: v }, r.destination)) : (h && l.keyFrames.push(R({ duration: v }, r.destination)), 0 !== f && l.keyFrames.unshift({ rotate: f, duration: Math.abs(f) < 10 ? 100 : 500 })), 0 < l.keyFrames.length ? (this._translating[o] = !0, this._invokeMethod("translateMapMarker", l)) : setTimeout(function() { l.success(), l.complete() }), this._lastMarkerPos[o] = r.destination
                                    }
                            else console.warn("MapContext.translateMarker: require destination");
                            else console.warn("MapContext.translateMarker: require markerId")
                        }
                    }, {
                        key: "includePoints",
                        value: function(e) {
                            var t, n = 0 < arguments.length && void 0 !== e ? e : {};
                            n.points && n.points instanceof Array && (n.points.forEach(function(e) { e.latitude = Number(e.latitude), e.longitude = Number(e.longitude) }), t = n.padding, n.padding = [0, 0, 0, 0], t && (n.padding[0] = Number(t[0]) || 0, n.padding[1] = Number(t[1]) || 0, n.padding[2] = Number(t[2]) || 0, n.padding[3] = Number(t[3]) || 0), this._invokeMethod("includeMapPoints", n))
                        }
                    }, {
                        key: "setIndoorFloor",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            t.buildingId ? t.floorName ? this._invokeMethod("setMapIndoorFloor", t) : console.warn("MapContext.setIndoorFloor: require floorName") : console.warn("MapContext.setIndoorFloor: require buildingId")
                        }
                    }, {
                        key: "getIndoorFloor",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("getMapIndoorFloor", t)
                        }
                    }, {
                        key: "getRotate",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("getMapRotate", t)
                        }
                    }, {
                        key: "getSkew",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("getMapSkew", t)
                        }
                    }, {
                        key: "setIndoorMaskColor",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("setMapIndoorMaskColor", t)
                        }
                    }, {
                        key: "eraseLines",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            t.lines && t.lines instanceof Array ? this._invokeMethod("eraseMapLines", t) : console.warn("MapContext.eraseLines: require lines")
                        }
                    }, {
                        key: "setCenterOffset",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {},
                                n = Object.assign({ offset: [.5, .5], animated: !1 }, t);
                            this._invokeMethod("setMapCenterOffset", n)
                        }
                    }, {
                        key: "addCustomLayer",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            Object(m.beforeInvoke)("addCustomLayer", t, { layerId: "" }) && this._invokeMethod("addMapCustomLayer", t)
                        }
                    }, {
                        key: "removeCustomLayer",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            Object(m.beforeInvoke)("removeCustomLayer", t, { layerId: "" }) && this._invokeMethod("removeMapCustomLayer", t)
                        }
                    }]), e
                }(), Object(w.default)(T.prototype, "getCenterLocation", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "getCenterLocation"), T.prototype), Object(w.default)(T.prototype, "getScale", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "getScale"), T.prototype), Object(w.default)(T.prototype, "getRegion", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "getRegion"), T.prototype), Object(w.default)(T.prototype, "moveToLocation", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "moveToLocation"), T.prototype), Object(w.default)(T.prototype, "moveAlong", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "moveAlong"), T.prototype), Object(w.default)(T.prototype, "addMarkers", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "addMarkers"), T.prototype), Object(w.default)(T.prototype, "removeMarkers", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "removeMarkers"), T.prototype), Object(w.default)(T.prototype, "initMarkerCluster", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "initMarkerCluster"), T.prototype), Object(w.default)(T.prototype, "translateMarker", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "translateMarker"), T.prototype), Object(w.default)(T.prototype, "includePoints", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "includePoints"), T.prototype), Object(w.default)(T.prototype, "setIndoorFloor", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "setIndoorFloor"), T.prototype), Object(w.default)(T.prototype, "getIndoorFloor", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "getIndoorFloor"), T.prototype), Object(w.default)(T.prototype, "getRotate", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "getRotate"), T.prototype), Object(w.default)(T.prototype, "getSkew", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "getSkew"), T.prototype), Object(w.default)(T.prototype, "setIndoorMaskColor", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "setIndoorMaskColor"), T.prototype), Object(w.default)(T.prototype, "eraseLines", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "eraseLines"), T.prototype), Object(w.default)(T.prototype, "setCenterOffset", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "setCenterOffset"), T.prototype), Object(w.default)(T.prototype, "addCustomLayer", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "addCustomLayer"), T.prototype), Object(w.default)(T.prototype, "removeCustomLayer", [k.promised], Object.getOwnPropertyDescriptor(T.prototype, "removeCustomLayer"), T.prototype), T),
                X = function(e) {
                    Object(f.default)(i, e);
                    var a = E(i);

                    function i(e, t, n, r) { var o; if (Object(_.default)(this, i), o = a.call(this), "string" != typeof e) throw new l.ThirdScriptError("Parameter 1 should be a string"); return o.domId = e, o.pluginId = r, o.webviewId = t, o.nodeId = n, o }
                    return Object(b.default)(i, [{
                        key: "_invokeMethod",
                        value: function(e, t, n) {
                            var r = this,
                                o = 2 < arguments.length && void 0 !== n ? n : {},
                                a = this.webviewId + "_" + this.pluginId + "_" + this.domId + "_" + this.nodeId;
                            "number" == typeof B[a] || B[a] ? (t.mapId = B[a], this._invoke(e, t, o)) : L.on("mapInsert", function() { t.mapId = B[a], r._invoke(e, t, o) })
                        }
                    }, {
                        key: "_listenerHandler",
                        value: function(e, t, n) {
                            var r, o, a;
                            ["on", "off", "once"].includes(e) && (r = this.webviewId + "_" + this.pluginId + "_" + this.domId + "_" + this.nodeId, o = this.webviewId, "number" == typeof B[r] || B[r] ? (a = B[r], Jt[e](t + "_" + o + "_" + a, n)) : L.on("mapInsert", function() { a = B[r], Jt[e](t + "_" + o + "_" + a, n) }))
                        }
                    }]), i
                }(Q),
                Y = function(e) {
                    Object(f.default)(o, e);
                    var r = E(o);

                    function o(e, t) { var n; return Object(_.default)(this, o), (n = r.call(this)).mapId = e, n.webviewId = t, n }
                    return Object(b.default)(o, [{
                        key: "_invokeMethod",
                        value: function(e, t, n) {
                            var r = 2 < arguments.length && void 0 !== n ? n : {};
                            t.mapId = this.mapId, this._invoke(e, t, r)
                        }
                    }, {
                        key: "_listenerHandler",
                        value: function(e, t, n) {
                            var r, o;
                            ["on", "off", "once"].includes(e) && (r = this.webviewId, o = this.mapId, Jt[e](t + "_" + r + "_" + o, n))
                        }
                    }]), o
                }(Q),
                Z = function(e, t, n, r) {
                    var o = 2 < arguments.length && void 0 !== n ? n : "",
                        a = 3 < arguments.length && void 0 !== r ? r : "",
                        i = "api_" + t + "_" + a + "_" + e + "_";
                    if (o && o !== __virtualDOM__.getRootNodeId(t) && (i += o), W[i]) return W[i].exportContext;
                    var c = new X(e, t, o, a);
                    return (W[i] = c).exportContext
                },
                $ = function(e, t) { var n = "SQ_" + t + "_" + e; if (W[n]) return W[n].exportContext; var r = new Y(e, t); return (W[n] = r).exportContext },
                ee = n(21),
                te = {},
                ne = { lastShareTicket: null, get: function(e) { return te[e] }, set: function(e, t) { var n = Object(l.guid)(); return te[n] = { shareKey: e, shareName: t }, n } },
                re = new s.default,
                oe = { appLaunchInfo: null, appLaunchShareInfo: null, sceneHistory: [], appId: "", ShareInfoStorage: ne, emitter: re },
                ae = n(1),
                ie = (H = !1, (I.IS_IOS || I.IS_ANDROID && 637865520 <= ae.default.clientVersion) && (H = !0), function() { return H }),
                ce = (K = !1, I.IS_IOS && 385877248 <= ae.default.clientVersion && (K = !0), z = !1, I.IS_IOS && 385878314 <= ae.default.clientVersion && (z = !0), n(18)),
                ue = n(25),
                se = 803;

            function le(e, t) {
                var n, r = 0 < arguments.length && void 0 !== e ? e : {},
                    o = 1 < arguments.length ? t : void 0;
                return r.scene = r.scene ? parseInt(r.scene, 10) : r.scene, r.query = (o ? r.query : y.default.query) || {}, r.path = o ? Object(l.removeHtmlSuffixFromUrl)(r.path) : Object(l.removeHtmlSuffixFromUrl)(y.default.lastRoute), r.referrerInfo = r.referrerInfo || {}, (r.isLaunch = o) || (1044 === r.scene ? y.default.lastShareInfo = { shareInfo: r.shareInfo, path: r.path, query: r.query } : y.default.lastShareInfo = void 0), oe.sceneHistory.push(r.scene), !r.referrerInfo.appId || 1036 !== r.scene && 1069 !== r.scene || (oe.appId = r.referrerInfo.appId), "object" === Object(ce.default)(r.shareInfo) && null !== r.shareInfo && ((n = r.shareInfo).shareKey && n.shareName && (Object(m.invokeMethod)("showUpdatableMessageSubscribeButton", { shareKey: n.shareKey }), r.shareTicket = oe.ShareInfoStorage.set(n.shareKey, n.shareName), oe.ShareInfoStorage.lastShareTicket = r.shareTicket), delete r.shareInfo), r
            }

            function fe(e, t) {
                var n = 0 < arguments.length && void 0 !== e ? e : {},
                    r = 1 < arguments.length ? t : void 0;
                0 === (n = Object.assign({}, n)).scene ? n.scene = J : J = n.scene;
                var o = n.scene;
                1103 === o ? o = 1001 : 1104 === o ? o = 1089 : 1131 === o || 1158 !== o && 1159 !== o && 1160 !== o || Object(ue.checkPermissionSync)(se) || (o = 1008), -1 < [1106, 1005, 1006, 1027, 1042].indexOf(o) && (n.referrerInfo.appId = null);
                var a = n.referrerInfo.appId ? { appId: n.referrerInfo.appId, extraData: n.referrerInfo.extraData } : {};
                n.referrerInfo.privateExtraData && n.referrerInfo.privateExtraData.__pluginAppId && (n.referrerInfo.appId && (a.pluginAppId = n.referrerInfo.privateExtraData.__pluginAppId), delete n.referrerInfo.privateExtraData.__pluginAppId, 0 === Object.keys(n.referrerInfo.privateExtraData).length && delete n.referrerInfo.privateExtraData);
                var i = { path: n.path, query: n.query, scene: o, shareTicket: n.shareTicket, referrerInfo: a };
                n.chatroomUsername && 1156 === o && (i.chatroomUsername = n.chatroomUsername);
                var c = n.nativeExtraData || {};
                return c.location && (i.locationInfo = c.location), 7 !== ae.default.appType && 10 !== ae.default.appType || (n.nativeExtraData && (i.nativeExtraData = n.nativeExtraData), i.sessionId = n.sessionid || n.sessionId, i.isLaunch = n.isLaunch, n.isLaunch && (i.prerender = !!ae.default.prerender), i.clickTimestamp = n.clickTimestamp, i.preloadType = r), n.mode && (i.mode = n.mode), i
            }

            function de(e, t) { var n, r, o = 1 < arguments.length && void 0 !== t ? t : "/"; if ((n = e.path || "", null !== (r = n.match(/__plugin__\/(wx[0-9a-f]{16})\//)) && r[1] || "/") === o) return e; var a = { path: e.path, query: {}, scene: e.scene, shareTicket: e.shareTicket, referrerInfo: {} }; return e.mode && (a.mode = e.mode), 10 === ae.default.appType && (e.nativeExtraData && (a.nativeExtraData = e.nativeExtraData), a.sessionId = e.sessionId, a.isLaunch = e.isLaunch, e.isLaunch && (a.prerender = e.prerender), a.clickTimestamp = e.clickTimestamp, a.preloadType = e.preloadType), a }
            n(78), new s.default;
            var pe = {};

            function he(e) { 0 }

            function ve(e) { pe = e }
            Object(m.subscribe)("getEnterAppInfo", function(e, t) {
                var n = e.callbackId;
                Object(m.publish)("appEnterInfoGot", { res: pe, callbackId: n }, [t])
            });
            var ge = n(16),
                be = n(12);
            ae.default.onReady(function() { y.default.scene = ae.default.appLaunchInfo.scene });
            var ye = Object(ge.getEventManager)("AppEnterForeground"),
                me = ye.internalOnMethod;

            function we(e) {
                var t;
                Object(be.isGame)() || (ve(e = le(e, !1)), t = fe(e), e.__public = de(t, "/"), he(t), ye.emit(e), y.default.scene = e.scene)
            }
            Object(h.onNativeEvent)("onAppEnterForeground", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.debugLaunchInfo || {};
                Object.assign(e, t), delete e.debugLaunchInfo, !ie() || 1 !== e.reLaunch && !0 !== e.reLaunch ? we(e) : oe.emitter.once("onAppRoute", function() { we(e) }), Object(m.publish)("onAppEnterForeground", e)
            });

            function _e(e) {
                var t = ("0" + (e.getMonth() + 1)).slice(-2),
                    n = ("0" + e.getDate()).slice(-2),
                    r = ("0" + e.getHours()).slice(-2),
                    o = ("0" + e.getMinutes()).slice(-2),
                    a = ("0" + e.getSeconds()).slice(-2),
                    i = ("00" + e.getMilliseconds()).slice(-3),
                    c = e.getFullYear() + "-" + t + "-" + n,
                    u = r + ":" + o + ":" + a + "." + i;
                return "ios" !== Ie ? c + " " + (e.getTimezoneOffset() / 60 * -1).toFixed(1).replace(/^(\d)/, "+$1") + " " + u : c + " " + u + "000" + (e.getTimezoneOffset() / 6e3 * -1).toFixed(4).replace(/^0\./, "+").replace(/-0\./, "-")
            }

            function ke(o) {
                return function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r = t.map(function(e) {
                        switch (e) {
                            case null:
                                return "null";
                            case void 0:
                                return "undefined";
                            default:
                                return e.toString()
                        }
                    }).join(" ");
                    Oe.push({ date: new Date, type: o, content: r })
                }
            }
            var Se = n(52),
                Ie = __wxConfig.platform,
                Oe = [];
            __wxConfig.onReady(function() {
                setTimeout(function e() {
                    var t;
                    setTimeout(e, 2e3), 0 !== Oe.length && (t = Oe.slice(), "ios" === Ie && "function" == typeof systemLog ? systemLog({ dataArray: t.map(function(e) { return "\n" + _e(e.date) + " [" + e.type[0].toUpperCase() + "][weapplib] " + e.content }) }) : "ios" === Ie ? Object(m.invokeMethod)("systemLog", { dataArray: t.map(function(e) { return { message: "\n" + _e(e.date) + " [" + e.type[0].toUpperCase() + "][weapplib] " + e.content } }) }) : "android" === Ie && Object(m.invokeMethod)("systemLog", { message: ["\n"].concat(t.map(function(e) { return "[" + e.type[0].toUpperCase() + "][" + _e(e.date) + "][weapplib] " + e.content })).join("\n") }), Oe = [])
                }, 2e3)
            });

            function Ae(t, e) {
                var n = 1 < arguments.length && void 0 !== e ? e : 0;
                if (["dismissPip", "navigateBack"].includes(t.openType)) return !1;
                if (void 0 !== Ce && "rewriteRoute" === t.openType && (["openType", "wxMaterial", "location", "prerender"].forEach(function(e) { t[e] = Ce[e] }), Ce = void 0), !t.notFound) return !1;
                if (/^[-_+a-z]+:\/\//i.test(t.rawPath)) {
                    je.info("onAppRoute.rawPath(" + t.rawPath + ") has protocol, try rewriting");
                    try {
                        var r = function(e, t) {
                            var n = t.needHtmlSuffix,
                                r = e.replace(/\.html(\?|$)/i, function(e) { return e.slice(5) }),
                                o = Object(l.convertProtocolPath)(r);
                            if (!n) return o;
                            var a = o.indexOf("?");
                            return a < 0 && (a = o.length), o.slice(0, a) + ".html" + o.slice(a)
                        }(t.rawPath, { needHtmlSuffix: !0 });
                        return Ce = t, je.info('rewriteRoute from "' + t.rawPath + '" to "' + r + '"'), Object(Se.invokeMethod)("rewriteRoute", { url: r }), !0
                    } catch (e) { return "AppServiceSdkKnownError" === e.type && console.error(e.message), Object(Se.invokeMethod)("pageNotFoundCallback", { hasHandler: !1, webviewId: n }), !1 }
                }
                return Te(t, n), !1
            }
            var Ce, je = { log: ke("log"), debug: ke("debug"), info: ke("info"), warn: ke("warn"), error: ke("error") },
                Pe = Object(ge.getEventManager)("AppRouteNotFound"),
                Me = Pe.onMethod,
                Te = (Pe.offMethod, Pe.emit),
                xe = Object(ge.getEventManager)("AppRoute"),
                Ee = xe.internalOnMethod,
                De = xe.internalOffMethod;
            Object(h.onNativeEvent)("onAppRoute", function(e) {
                var t, n, r, o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                if (je.log("received onAppRoute, res=", e), !Ae(e, o)) {
                    if (e.path = Object(l.removeHtmlSuffixFromUrl)(e.path), e.webviewId = void 0 !== e.webviewId ? e.webviewId : o, "dismissPip" !== e.openType && (y.default.lastRoute = e.path || "", y.default.lastRawQuery = JSON.parse(JSON.stringify(e.query))), y.default.lastOpenType = e.openType, "appLaunch" !== e.openType && "autoReLaunch" !== e.openType)
                        for (var a in e.query) try { e.query[a] = decodeURIComponent(e.query[a]) } catch (e) {}
                    "dismissPip" !== e.openType && (y.default.query = e.query, y.default.currentWebviewId = e.webviewId), "undefined" != typeof __libVersionInfo__ && __libVersionInfo__.features && __libVersionInfo__.features.pruneWxConfigByPage && (t = e.preloadRule || ae.default._preloadRule && ae.default._preloadRule[e.path], n = e.page || ae.default._page && ae.default._page[e.path + ".html"], t && (ae.default.updatePreloadRule(e.path, t), e.preloadRule, ae.default.preloadRule), n && (r = ae.default.global && ae.default.global.window || {}, n.window = Object.assign({}, r, n.window), ae.default.updatePage(e.path, n), e.page, ae.default.page)), Object(m.publish)("onAppRoute", e, []), ie() && oe.emitter.emit("onAppRoute"), xe.emit(e)
                }
            }), Object(m.onMethod)("onCopyUrl", function(e) {
                if (e.webviewId !== y.default.currentWebviewId) return e.webviewId, void y.default.currentWebviewId;
                var t = y.default.lastRoute,
                    n = JSON.parse(JSON.stringify(y.default.lastRawQuery)),
                    r = y.default.lastOpenType;
                if ("appLaunch" !== r && "autoReLaunch" !== r) try { for (var o in n) n[o] = decodeURIComponent(n[o]) } catch (e) {}
                var a = Object.entries(n).map(function(e) { return e.join("=") }).join("&"),
                    i = a ? t + ".html?" + a : t + ".html";
                Object(m.invokeMethod)("returnCopyUrl", { url: i, webviewId: e.webviewId })
            });
            var Re = [];
            Object(m.subscribe)("callbackWebviewMethod", function(e) {
                var t = e.res,
                    n = e.callbackId,
                    r = Re[n];
                delete Re[n], r && r(t)
            });
            var Be, Fe;
            Object(m.subscribe)("getLaunchAppInfo", function(e, t) {
                var n = e.callbackId;
                Object(m.publish)("appLaunchInfoGot", { res: { sceneHistory: oe.sceneHistory, appId: oe.appId }, callbackId: n }, [t])
            }), ae.default.onReady(function() {
                var e;
                Object(be.isGame)() || (e = ae.default.appLaunchInfo || {}, Object.assign(e, ae.default.debugLaunchInfo || {}), oe.appLaunchInfo = e, oe.appLaunchShareInfo = e.shareInfo, ve(e), Fe = le(e, !0), Be = fe(Fe, ae.default.preloadType), Fe.__public = de(Be, "/"), he(Be))
            });
            var Le, Ne = Object(ge.getEventManager)("AppShow"),
                We = (Ne.onMethod, Ne.offMethod, Ne.internalOnMethod);
            me(function(e) { Ne.emitInternal(e) }), Ee(function e(t) { var n; "appLaunch" === t.openType && (n = function() { if (!Fe) throw new Error("getLaunchOptionsSync:fail get launch options"); return Fe || {} }(), Ne.emitInternal(n), De(e)) });
            var Ve = 502,
                Ue = 503,
                Ge = (Le = {}, Object(v.default)(Le, Ve, null), Object(v.default)(Le, Ue, null), { scene: -1, sceneNote: "", sessionId: "" });
            We(function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                Ge.scene = e.scene, Ge.sceneNote = e.scene_note, Ge.sessionId = e.sessionid
            });
            var qe = Object(ge.getEventManager)("AppEnterBackground"),
                He = qe.internalOnMethod;
            Object(h.onNativeEvent)("onAppEnterBackground", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                qe.emit(e), Object(m.publish)("onAppEnterBackground", e)
            });
            n(70);

            function Ke() {
                var t = {};
                return function(e) {
                    ae.default.isReady || (new Error).stack;
                    var t = I.PLATFORM;
                    Object(m.invokeMethod)("getSystemInfo", e, { beforeSuccess: function(e) { I.IS_IOS && (e.brand = "iPhone"), I.IS_DEVTOOLS && "devtools" !== e.brand && (t = "iPhone" === e.brand ? "ios" : "android"), e.platform = t, e.SDKVersion = Je, ae.default.devicePixelRatio && (e.devicePixelRatio = ae.default.devicePixelRatio), ae.default.theme && (e.theme = ae.default.theme), ae.default.host && (e.host = ae.default.host), I.IS_ANDROID && /^\d+\.\d+$/.test(e.version) && (e.version += ".0"), delete(Qe = Object.assign({}, e)).errMsg, Object(be.isSinglePageMode)() && 4 !== ae.default.appType && (e.safeArea = Object.assign({}, e.safeArea), e.safeArea.top = 0, e.safeArea.bottom = e.screenHeight, e.safeArea.height = e.safeArea.bottom - e.safeArea.top) } })
                }({ success: function(e) { delete e.errMsg, t = e, Qe = Object.assign({}, t) } }), t
            }
            var ze = n(41),
                Je = "undefined" == typeof __libVersionInfo__ || "develop" === __libVersionInfo__.version ? "9.9.9" : __libVersionInfo__.version,
                Qe = null,
                Xe = function() { return Qe || Ke() },
                Ye = null,
                Ze = ["brand", "model", "pixelRatio", "language", "version", "system", "platform", "SDKVersion"];
            ae.default.onReady(function() {
                Ye = {};
                for (var e, t = 0; t < Ze.length; t++) {
                    if (!(Ze[t] in ae.default)) { Ye = Xe(); break }
                    Ye[Ze[t]] = ae.default[Ze[t]]
                }
                ae.default.screenHeight && ae.default.screenWidth ? (ae.default.screenWidth, ae.default.screenHeight) : (e = Xe(), e.screenWidth, e.screenHeight)
            });
            var $e = new s.default({ maxListeners: 2e5 }),
                et = "portrait";
            ae.default.onReady(function() { et = ae.default.deviceOrientation || et, (ae.default.isReady ? Object.assign({}, Ye) : ((new Error).stack, {})).model });

            function tt(e, t) { return -1 !== ["click", "touchstart", "touchmove", "touchend", "touchcancel", "ready", "prop-change"].indexOf(e) ? "element-" + t + "-" + e : -1 !== ["layout"].indexOf(e) ? e : void 0 }

            function nt(e) {
                var t = JSON.parse(e.data).id;
                $e.emit(tt("click", t))
            }
            Object(h.onNativeEvent)("onTextViewClick", nt), Object(h.onNativeEvent)("onImageViewClick", nt), ["onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"].forEach(function(e) {
                var n = e.replace(/^on/, "").toLowerCase();
                Object(h.onNativeEvent)(e, function(e) {
                    try {
                        var t = JSON.parse(e.data).id;
                        $e.emit(tt(n, t), e.touch || e.touches)
                    } catch (e) {}
                })
            });
            new Map;
            var rt = Object(ge.getEventManager)("XWebTextareaSupportedEvent"),
                ot = !1;
            Object(m.subscribe)("xWebTextareaSupported", function(e) {
                var t = e.canInsert2XWeb;
                ot = t, rt.emit({ canInsert2XWeb: t })
            }), (I.IS_DEVTOOLS || I.IS_MINA || I.IS_WINDOWS || I.IS_MAC || I.IS_ANDROID) && Object(m.subscribe)("SPECIAL_PAGE_EVENT", function(e) {
                var t, n, r, o = e.data,
                    a = e.eventName,
                    i = e.ext,
                    c = e.nodeId,
                    u = e.instanceId,
                    s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                I.IS_ANDROID && !ot || (o && "input" === o.type && i && i.modelValueName && __virtualDOM__.setModelValueData(o.detail.value, i.modelValueName, s, c), o && "input" === o.type && "function" == typeof y.default.webviewEventCallback && (t = y.default.webviewEventCallback({ data: o, eventName: a, webviewId: s, nodeId: c }), n = o.detail.value, i && i.setKeyboardValue && (void 0 === t || ("Object" === Object(l.getDataType)(t) ? (r = {}, u && (r.instanceId = u), n !== t.value && (r.value = t.value + ""), Number.isNaN(parseInt(t.cursor, 10)) || (r.cursor = parseInt(t.cursor, 10)), Object(m.publish)("setKeyboardValue", r, [s])) : n !== t && Object(m.publish)("setKeyboardValue", { value: t + "", cursor: -1, instanceId: u }, [s])))))
            });
            var at = Object(ge.getEventManager)("DomReady"),
                it = at.internalOnMethod,
                ct = {},
                ut = {};
            Ee(function(e) { ut[e.webviewId] = [] }), it(function(n) {
                setTimeout(function() {
                    var e = n.webviewId,
                        t = ut[e] || [];
                    ct[e] = !0, 0 < t.length && (0, t.forEach(function(e) {
                        var t = e.res,
                            n = e.args,
                            r = /hideLoading/.test(t.errMsg) ? { beforeAll: function(e) { e.errMsg = e.errMsg.replace("hideToast", "hideLoading") } } : {};
                        Object(m.invokeMethod)("hideToast", n, r)
                    })), delete ut[e]
                }, 100)
            });
            var st = n(29);
            n(68);
            var lt = "authPrivateMessage";
            Object(st.constructOperateWXData)(!1, lt);
            var ft = Object(ge.getEventManager)("AppRouteDone"),
                dt = ft.internalOnMethod;
            ft.internalOffMethod;
            Object(h.onNativeEvent)("onAppRouteDone", function(e) {
                var t, n, r, o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    a = "";
                y.default.navigatorLock = !1, e.path && (a = e.path, e.path = e.path.substring(0, e.path.length - 5)), e.webviewId = void 0 !== e.webviewId ? e.webviewId : o, "dismissPip" !== y.default.lastOpenType && (y.default.lastRoute = e.path || ""), ft.emit(e), Object(m.publish)("onAppRouteDone", {}, [o]), e.path, t = e.path, n = a, 0 === ae.default.appType && t && n && !y.default.navigationBarTitleMap[t] && (r = "", ae.default.page[n] && ae.default.page[n].window && Object(x.isString)(ae.default.page[n].window.navigationBarTitleText) ? r = ae.default.page[n].window.navigationBarTitleText : ae.default.global && ae.default.global.window && Object(x.isString)(ae.default.global.window.navigationBarTitleText) && (r = ae.default.global.window.navigationBarTitleText), y.default.navigationBarTitleMap[t] = r)
            });
            var pt = !1,
                ht = null,
                vt = null;
            Ee(function() { pt = !0 }), dt(function() { pt = !1, ht && (gt(ht), ht = null), vt && (bt(vt), vt = null) });
            var gt = function(e) { Object(m.beforeInvoke)("addCard", e, { cardList: [] }) && (pt ? ht = e : Object(m.invokeMethod)("addCard", e)) },
                bt = function(e) { Object(m.beforeInvoke)("openCard", e, { cardList: [] }) && (pt ? vt = e : Object(m.invokeMethod)("openCard", e)) };
            ae.default.onReady(function() { 0 });

            function yt(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {},
                    n = t.innerContext,
                    r = void 0 === n ? {} : n,
                    o = t.args,
                    a = void 0 === o ? {} : o;
                Object(m.beforeInvoke)("authorize", a, { scope: "" }) && ("scope.userInfo" !== a.scope || Object(be.checkAPIAvailable)("getUserInfo") || Object(be.checkAPIAvailable)("authorize") ? Object(m.invokeMethod)("authorize", Object(l.assign)(a, { scope: [a.scope], requestInQueue: !r.hasOwnProperty("requestInQueue") || Boolean(r.requestInQueue) }), { beforeAll: function(e) { delete e.body, void 0 !== e.err_code && (e.errCode = e.err_code, delete e.err_code) } }) : Object(m.beforeInvokeFail)("authorize", a, "scope unauthorized"))
            }! function(e, t, n, r) {
                var o = !(0 < arguments.length && void 0 !== e) || e,
                    a = 1 < arguments.length ? t : void 0,
                    i = 2 < arguments.length && void 0 !== n && n,
                    c = 3 < arguments.length && void 0 !== r && r
            }(!1, void 0, !0);
            var mt = { SYS_MSG_TYPE_INTERACTIVE: 1, SYS_MSG_TYPE_RANK: 2 },
                wt = function(e) { var t = {}; for (var n in e) t[e[n]] = n; return t }(mt);
            var _t = wxNativeConsole.createLogger("getSetting");
            Object(O.default)("getSetting", "webapi_getuserallappauth", {}, {}, function(e) { var t = Object.assign({ with_sub_msg: "boolean" == typeof e.withSubscriptions && e.withSubscriptions }, e); return delete t.withSubscriptions, t }, function(e) { var t, n; return _t.info("webapi_getuserallappauth res", e), e.auth_item ? e.authSetting = e.auth_item.reduce(function(e, t) { return e[t.scope] = 1 === t.state, e }, {}) : e.authSetting = {}, void 0 !== e.sub_msg_switch && (t = { mainSwitch: 1 === e.sub_msg_switch }, e.sub_msg_list && (_t.info("sub_msg_list", e.sub_msg_list), n = e.sub_msg_list.reduce(function(e, t) { var n, r = t.template_id; return 0 < t.sys_msg_type && (n = t.sys_msg_type, r = wt[n]), t.ban_flag ? e[r] = "ban" : e[r] = t.setting_status ? "accept" : "reject", e }, {}), _t.info("itemSettings", n), t.itemSettings = n, Object.assign(t, n)), e.subscriptionsSetting = t), delete e.rawData, delete e.signature, delete e.auth_item, delete e.sub_msg_list, delete e.sub_msg_switch, e }), Object(O.default)("getOpenDeviceId", "webapi_getdeviceinfo"), Object(O.default)("getUserGameLabel", "webapi_getgameplayerlabel", {}, {}, function() {}, function(e) { return delete e.rawData, e }), Object(O.default)("reportUserBehaviorBranchAnalytics", "webapi_reportbranchanalytics", {}, {}, function(e) { return { itemList: [{ branchId: e.branchId, branchDim: e.branchDim, eventType: e.eventType }] } });
            Object(O.default)("checkIsUserAdvisedToRest ", "webapi_getplaytimelimit", {}, {}, function(e) { var t = e.todayPlayedTime; return { today_played_seconds: void 0 === t ? 0 : t } }, function(e) { e.result = !e.is_healthy, delete e.is_healthy }), parseInt(Date.now() / 1e3, 10), Object(O.default)("getWxSecData", "getWxSecData", {}, {}, function() { return 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {} }, function(e) { return e }), n(73);
            var kt = Object(ge.getEventManager)("AppHide"),
                St = (kt.onMethod, kt.offMethod, kt.internalOnMethod);
            He(function(e) { kt.emitInternal(e) });
            var It = Object(ge.getEventManager)("AppUnhang"),
                Ot = (It.internalOnMethod, It.onMethod);
            Object(m.onMethod)("onAppUnhang", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                It.emit(e)
            });
            var At = n(26);
            y.default.appStatus = At.AppStatus.FORE_GROUND, y.default.hanged = !1, We(function(e) { Date.now() }), St(function(e) { Date.now() }), me(function() { y.default.appStatus = At.AppStatus.FORE_GROUND }), He(function(e) { "hide" === e.mode ? y.default.appStatus = At.AppStatus.LOCK : y.default.appStatus = At.AppStatus.BACK_GROUND, "close" === e.mode ? y.default.hanged = !1 : "hang" === e.mode && (y.default.hanged = !0) }), Ot(function() { y.default.hanged = !1 });
            var Ct = Object(ge.getEventManager)("AppRunningStatusChange");
            Ct.internalOnMethod;
            Object(m.onMethod)("onAppRunningStatusChange", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                y.default.runningStatus = e.status, Ct.emit(e)
            });
            var jt = Object(ge.getEventManager)("AppService-Error"),
                Pt = Object(ge.getEventManager)("AppService-UnhandledRejection");
            jt.onMethod, jt.offMethod, Pt.onMethod, Pt.offMethod;
            Reporter.registerThirdErrorListener(function(e) { jt.emit(e) }), Reporter.registerThirdUnhandledRejectionListener(function(e, t) { Pt.emit({ reason: e, promise: t }) });

            function Mt(e) { e.deviceOrientation && (Ft = e.deviceOrientation), Lt = e.size.windowWidth, Nt = e.size.windowHeight }
            var Tt = [],
                xt = null,
                Et = null,
                Dt = !1,
                Rt = [],
                Bt = !1,
                Ft = "",
                Lt = 0,
                Nt = 0;
            Object(m.onMethod)("onViewDidResize", function(e) {
                ! function(e) {
                    var t = !1,
                        n = !0;
                    (xt = e).deviceOrientation !== Ft && (t = !0), e.size.windowWidth !== Lt && (t = !0), e.size.windowHeight !== Nt && (t = !0), Mt(e), e.pageOrientation && (e.pageOrientation.setPageOrientation && (Bt = !0), "auto" === e.pageOrientation.originalPageOrientation || Bt || (n = t = !1)), t && (Dt = !0);
                    var r = e.changedWebviewIds;
                    n && r && r.forEach(function(e) { Rt.indexOf(e) < 0 && Rt.push(e) }), Et = Et || setTimeout(function() {
                        Et = null;
                        var e = Dt;
                        Dt = !1;
                        var t = Rt;
                        Rt = [];
                        var n = { deviceOrientation: xt.deviceOrientation, size: xt.size };
                        e && Tt.forEach(function(e) { __errorTracer__.surroundThirdByTryCatch(e, "at onWindowResize callback function")(n) }), t.forEach(function(e) {
                            var t = __appServiceEngine__.getPageByWebviewId(e);
                            t && __errorTracer__.surroundThirdByTryCatch(function() { t.__callPageLifeTime__("onResize", n) }, "at Resize callback function")()
                        })
                    }, 16)
                }(e)
            });
            var Wt = Object(ge.getEventManager)("AppRouteResized");
            Wt.internalOnMethod, Wt.internalOffMethod;
            Object(m.onMethod)("onAppRouteResized", function(e) { "object" === Object(ce.default)(e) && null !== e && Mt(e), Wt.emit({}) });
            var Vt = Object(ge.getEventManager)("PageNotFound");
            Vt.onMethod, Vt.offMethod;
            var Ut = { page: void 0, time: Date.now(), count: 0 };
            Object(m.onMethod)("onPageNotFound", function() { je.info("Ignored onPageNotFound.") }), Me(function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                je.info("Page not found, webviewId=" + t), y.default.lastRoute = "", e && "string" == typeof e.path && e.path.endsWith(".html") && (e.path = Object(l.removeHtmlSuffixFromUrl)(e.path)), e && "string" == typeof e.query && (e.query = function(e) { for (var t = {}, n = e.split("&"), r = 0; r < n.length; r++) { var o = n[r].split("="); if (1 < o.length) try { t[o[0]] = decodeURIComponent(o[1]) } catch (e) {} } return t }(e.query)), Ut.page && Ut.page === e.path ? Ut.count++ : Ut = { page: e.path, time: Date.now(), count: 1 };
                var n = !0;
                Date.now() - Ut.time <= 3e3 && 3 < Ut.count ? (n = !1, console.error('onPageNotFound error: page "' + e.path + '" is not found.')) : Vt.emit(e);
                var r = 0 < Vt.getGlobalListeners().length && n;
                r || Reporter.thirdErrorReport({ error: new Error('onPageNotFound error: page "' + e.path + '" is not found.'), extend: " at onPageNotFound" }), Object(m.invokeMethod)("pageNotFoundCallback", { hasHandler: r, webviewId: t })
            });
            var Gt = Object(ge.getEventManager)("ThemeChange");
            Gt.onMethod, Gt.internalOnMethod, Gt.offMethod;
            Object(m.onMethod)("onThemeChange", function(e) { void 0 !== ae.default.theme && (ae.default.theme = e.theme, Gt.emit({ theme: e.theme })) });
            Object(st.constructOperateWXData)(!1, "requestSubscribeMessage");
            Ee(function() { 0 }), He(function() { 0 });
            var qt = "";
            ae.default.onReady(function() { qt = ae.default.appLaunchInfo.chatroomUsername, wxNativeConsole.info("chatroomUsername", qt) }), Object(h.onNativeEvent)("onAppEnterForeground", function() { qt = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).chatroomUsername, wxNativeConsole.info("onAppEnterForeground chatroomUsername", qt) });
            var Ht, Kt = "getGroupEnterInfo";
            Object(st.constructOperateWXData)(!1, Kt), Ht = [], ae.default.onReady(function() { Array.isArray(ae.default.navigateToMiniProgramAppIdList) && (Ht = ae.default.navigateToMiniProgramAppIdList, Object(ue.checkPermission)(720).then(function(e) { e || Ht.splice(5) })) });
            Object(ee.subscribe)("tapAnyWhere", function(e) { e.timeStamp, 0 }), He(function() { 0 });
            var zt = function() { Date.now(), 0 },
                Jt = new s.default({ maxListeners: 2e5 }),
                Qt = { onMapMarkerClusterCreate: "markerClusterCreate", onMapMarkerClusterClick: "markerClusterClick" };
            Object.keys(Qt).forEach(function(o) {
                Object(h.onNativeEvent)(o, function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = e.mapId,
                        r = Qt[o];
                    delete e.mapId, Jt.emit(r + "_" + t + "_" + n, e)
                })
            }), Object(m.onMethod)("onMapMarkerClick", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                zt();
                var n, r = F[t + "_" + e.mapId];
                r && r.bindmarkertap && "function" == typeof y.default.webviewEventCallback && (n = JSON.parse(e.data), y.default.webviewEventCallback({ data: { type: "markertap", target: r.target, currentTarget: r.target, timeStamp: Date.now(), touches: [], detail: { markerId: n.markerId }, markerId: n.markerId, _userTap: !0 }, eventName: r.bindmarkertap, webviewId: t, nodeId: r.nodeId }))
            }), Object(m.onMethod)("onMapCalloutClick", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                zt();
                var n, r = F[t + "_" + e.mapId];
                r && r.bindcallouttap && "function" == typeof y.default.webviewEventCallback && (n = JSON.parse(e.data), y.default.webviewEventCallback({ data: { type: "callouttap", target: r.target, currentTarget: r.target, timeStamp: Date.now(), touches: [], detail: { markerId: n.markerId }, markerId: n.markerId, _userTap: !0 }, eventName: r.bindcallouttap, webviewId: t, nodeId: r.nodeId }))
            }), Object(m.onMethod)("onMapLabelClick", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                zt();
                var n, r = F[t + "_" + e.mapId];
                r && r.bindlabeltap && "function" == typeof y.default.webviewEventCallback && (n = JSON.parse(e.data), y.default.webviewEventCallback({ data: { type: "labeltap", target: r.target, currentTarget: r.target, timeStamp: Date.now(), touches: [], detail: { markerId: n.markerId }, markerId: n.markerId, _userTap: !0 }, eventName: r.bindlabeltap, webviewId: t, nodeId: r.nodeId }))
            }), Object(m.onMethod)("onMapControlClick", function() {
                var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                zt(), !t.data || "function" != typeof y.default.webviewEventCallback || (e = JSON.parse(t.data)).bindcontroltap && y.default.webviewEventCallback({ data: { type: "controltap", target: e.target, currentTarget: e.target, timeStamp: Date.now(), touches: [], detail: { controlId: e.controlId }, controlId: e.controlId, _userTap: !0 }, eventName: e.bindcontroltap, webviewId: n, nodeId: e.nodeId })
            }), Object(m.subscribe)("onMapControlTap", function(e, t) {
                var n, r = e.data;
                zt(), !r || "function" != typeof y.default.webviewEventCallback || (n = JSON.parse(r)).bindcontroltap && y.default.webviewEventCallback({ data: { type: "controltap", target: n.target, currentTarget: n.target, timeStamp: Date.now(), touches: [], detail: { controlId: n.controlId }, controlId: n.controlId, _userTap: !0 }, eventName: n.bindcontroltap, webviewId: t, nodeId: n.nodeId })
            }), Object(m.onMethod)("onMapRegionChange", function() {
                var e, t, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    o = F[r + "_" + n.mapId];
                o && o.bindregionchange && "function" == typeof y.default.webviewEventCallback && (e = { type: n.type, rotate: n.rotate, skew: n.skew, gesture: n.gesture, scale: +Number.parseFloat(n.scale).toFixed(2), centerLocation: n.centerLocation, region: n.region }, t = { target: o.target, currentTarget: o.target, timeStamp: Date.now(), touches: [], detail: { type: n.type }, type: n.type, causedBy: n.causedBy }, "end" === n.type && (t.detail = e), y.default.webviewEventCallback({ data: t, eventName: o.bindregionchange, webviewId: r, nodeId: o.nodeId }))
            }), Object(m.onMethod)("onMapClick", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                zt();
                var n = F[t + "_" + e.mapId];
                n && n.bindtap && "function" == typeof y.default.webviewEventCallback && y.default.webviewEventCallback({ data: { type: "tap", target: n.target, currentTarget: n.target, timeStamp: Date.now(), touches: [], detail: { longitude: e.longitude, latitude: e.latitude }, _userTap: !0 }, eventName: n.bindtap, webviewId: t, nodeId: n.nodeId })
            }), Object(m.onMethod)("onMapPoiClick", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                zt();
                var n, r = F[t + "_" + e.mapId];
                r && r.bindpoitap && "function" == typeof y.default.webviewEventCallback && (n = { name: e.name, longitude: e.longitude, latitude: e.latitude }, e.buildingId && (n.buildingId = e.buildingId), e.floorName && (n.floorName = e.floorName), y.default.webviewEventCallback({ data: { type: "poitap", target: r.target, currentTarget: r.target, timeStamp: Date.now(), touches: [], detail: n, _userTap: !0 }, eventName: r.bindpoitap, webviewId: t, nodeId: r.nodeId }))
            }), Object(m.onMethod)("onMapIndoorChange", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = F[t + "_" + e.mapId];
                n && n.bindindoorchange && "function" == typeof y.default.webviewEventCallback && y.default.webviewEventCallback({ data: { target: n.target, currentTarget: n.target, timeStamp: Date.now(), touches: [], detail: {}, info: { buildingId: e.buildingId, buildingName: e.buildingName, floorIndex: e.floorIndex, floorList: e.floorList } }, eventName: n.bindindoorchange, webviewId: t, nodeId: n.nodeId })
            }), Object(m.onMethod)("onMapAnchorPointClick", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                zt();
                var n = F[t + "_" + e.mapId];
                n && n.bindanchorpointtap && "function" == typeof y.default.webviewEventCallback && y.default.webviewEventCallback({ data: { type: "anchorpointtap", target: n.target, currentTarget: n.target, timeStamp: Date.now(), touches: [], detail: { longitude: e.longitude, latitude: e.latitude }, _userTap: !0 }, eventName: n.bindanchorpointtap, webviewId: t, nodeId: n.nodeId })
            });

            function Xt(e, t, n) {
                var r = [],
                    o = [];
                if ("onTouchStart" === t) {
                    for (var a in e) r.push(e[a]);
                    var i = { x: n.touch.x, y: n.touch.y, identifier: n.touch.id };
                    o.push(i), r.push(i)
                } else if ("onTouchMove" === t)
                    for (var c in e) {
                        var u = e[c],
                            s = !1;
                        for (var l in n.touches) { var f = { x: n.touches[l].x, y: n.touches[l].y, identifier: n.touches[l].id }; if (f.identifier === u.identifier && (u.x !== f.x || u.y !== f.y)) { r.push(f), o.push(f), s = !0; break } }
                        s || r.push(u)
                    } else if ("onTouchEnd" === t) {
                        var d = { x: n.touch.x, y: n.touch.y, identifier: n.touch.id };
                        for (var p in e) {
                            var h = e[p];
                            h.identifier === d.identifier ? o.push(d) : r.push(h)
                        }
                    } else if ("onTouchCancel" === t)
                    for (var v in n.touches) {
                        var g = { x: n.touches[v].x, y: n.touches[v].y, identifier: n.touches[v].id };
                        o.push(g)
                    } else if ("onLongPress" === t) {
                        var b = { x: n.touch.x, y: n.touch.y, identifier: n.touch.id };
                        for (var y in e) e[y].identifier === b.identifier ? r.push(b) : r.push(e[y]);
                        o.push(b)
                    }
                return { touches: r, changedTouches: o }
            }
            var Yt, Zt = { onTouchStart: "touchstart", onTouchMove: "touchmove", onTouchEnd: "touchend", onTouchCancel: "touchcancel", onLongPress: "longtap" },
                $t = n(31),
                en = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgrey: "#a9a9a9", darkgreen: "#006400", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#adff2f", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgrey: "#d3d3d3", lightgreen: "#90ee90", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32", transparent: "#00000000" },
                tn = n(10),
                nn = {},
                rn = {};

            function on(e) { return "number" == typeof e }

            function an(e) {
                var t = null;
                if (null != (t = /^#([0-9|A-F|a-f]{6})$/.exec(e))) return [parseInt(t[1].slice(0, 2), 16), parseInt(t[1].slice(2, 4), 16), parseInt(t[1].slice(4), 16), 255];
                if (null != (t = /^#([0-9|A-F|a-f]{3})$/.exec(e))) {
                    var n = t[1].slice(0, 1),
                        r = t[1].slice(1, 2),
                        o = t[1].slice(2, 3);
                    return [n = parseInt(n + n, 16), r = parseInt(r + r, 16), o = parseInt(o + o, 16), 255]
                }
                if (null != (t = /^rgb\((.+)\)$/.exec(e))) return t[1].split(",").map(function(e) { return Math.min(255, parseInt(e.trim(), 10)) }).concat(255);
                if (null != (t = /^rgba\((.+)\)$/.exec(e))) return t[1].split(",").map(function(e, t) { return 3 === t ? Math.floor(255 * parseFloat(e.trim())) : Math.min(255, parseInt(e.trim(), 10)) });
                var a = e.toLowerCase();
                if (Object($t.hasOwnProperty)(en, a)) {
                    t = /^#([0-9|A-F|a-f]{6,8})$/.exec(en[a]);
                    var i = parseInt(t[1].slice(0, 2), 16),
                        c = parseInt(t[1].slice(2, 4), 16),
                        u = parseInt(t[1].slice(4, 6), 16),
                        s = parseInt(t[1].slice(6, 8), 16);
                    return [i, c, u, s = 0 <= s ? s : 255]
                }
                return console.group("非法颜色: " + e), console.error("不支持颜色：" + e), console.groupEnd(), [0, 0, 0, 255]
            }

            function cn(e) { if (Array.isArray(e)) { var t = []; return e.forEach(function(e) { t.push(cn(e)) }), t } if ("object" !== Object(ce.default)(e)) return e; var n = {}; for (var r in e) n[r] = cn(e[r]); return n }

            function un(e, t) { var n, r, o; return "devtools" === Yt || "windows" === Yt || /wxfile:\/\//.test(t) || (t = e.pluginId || e.nodeId ? (n = e.pluginId.split("/")[0], o = (r = __virtualDOM__.getNodeById(e.nodeId, e.webviewId)) && r.is || "", n ? 0 === t.indexOf("/") ? __virtualDOM__.getPluginRoutePrefix(n) + Object(l.getRealRoute)(o, t, !1).replace(/\.html$/, "") : Object(l.getRealRoute)(__virtualDOM__.convertComponentAliasToRoute(o), t, !1).replace(/\.html$/, "") : Object(l.getRealRoute)(o, t, !1).replace(/\.html$/, "")) : Object(l.getRealRoute)(y.default.lastRoute, t, !1).replace(/.html$/, "")), t }

            function sn(e) { Object(_.default)(this, sn), this.width = e }

            function ln(e, t) { Object(_.default)(this, ln), this.image = e, this.repetition = t }
            var fn = function() {
                    function n(e, t) { Object(_.default)(this, n), this.type = e, this.data = t, this.colorStop = [] }
                    return Object(b.default)(n, [{ key: "addColorStop", value: function(e, t) { bn ? this.colorStop.push([e, t]) : this.colorStop.push([e, an(t)]) } }]), n
                }(),
                dn = function() {
                    function a(e, t, n, r) {
                        var o;
                        Object(_.default)(this, a), this.actions = [], this.path = [], this.subpath = [], this.webviewId = e, this.canvasId = t, this.pluginId = r, this.useHardwareAccelerate = !0, this.nodeId = n, this._id = Object(tn.concatId)(e, t, r, n), this.drawingState = nn[this._id] = nn[this._id] || [], this.state = rn[this._id] = rn[this._id] || { lineDash: [0, 0], shadowOffsetX: 0, shadowOffsetY: 0, shadowBlur: 0, shadowColor: bn ? "#000000" : "ios" === Yt ? [] : [0, 0, 0, 0], font: "10px sans-serif", fontSize: 10, fontWeight: "normal", fontStyle: "normal", fontFamily: "sans-serif" }, "devtools" !== (Yt = Yt || I.PLATFORM) && "windows" !== Yt || (o = document.createElement("canvas"), this._context = o.getContext("2d"))
                    }
                    return Object(b.default)(a, [{ key: "getActions", value: function() { var e = cn(this.actions); return this.actions = [], this.path = [], this.subpath = [], e } }, { key: "clearActions", value: function() { this.actions = [], this.path = [], this.subpath = [] } }, {
                        key: "draw",
                        value: function(e, t) {
                            var n = 0 < arguments.length && void 0 !== e && e,
                                r = 1 < arguments.length ? t : void 0,
                                o = this.canvasId,
                                a = cn(this.actions),
                                i = this.useHardwareAccelerate;
                            this.actions = [], this.path = [], this.useHardwareAccelerate = !0, this.isWidgetCanvas ? Pn({ isWidgetCanvas: !0, actions: a, reserve: n }) : Pn({ canvasId: o, actions: a, reserve: n, useHardwareAccelerate: i, complete: r }, this.webviewId, this.pluginId, this.nodeId)
                        }
                    }, { key: "createLinearGradient", value: function(e, t, n, r) { return new fn("linear", [e, t, n, r]) } }, { key: "createCircularGradient", value: function(e, t, n) { return new fn("radial", [e, t, n]) } }, {
                        key: "createPattern",
                        value: function(e, t) {
                            if (void 0 !== t) {
                                if (-1 !== ["repeat", "repeat-x", "repeat-y", "no-repeat"].indexOf(t)) return e = un(this, e), new ln(e, t);
                                console.error("Failed to execute 'createPattern' on 'CanvasContext': The provided type ('" + t + "') is not one of 'repeat', 'no-repeat', 'repeat-x', or 'repeat-y'.")
                            } else console.error("Failed to execute 'createPattern' on 'CanvasContext': 2 arguments required, but only 1 present.")
                        }
                    }, { key: "measureText", value: function(e) { var t; return "devtools" === Yt || "windows" === Yt ? (this._context.font = this.state.font, t = this._context.measureText(e)) : Object(m.invokeMethod)("measureText", { text: e, fontSize: this.state.fontSize, fontFamily: this.state.fontFamily, fontWeight: this.state.fontWeight, fontStyle: this.state.fontStyle, complete: function(e) { t = { width: e.width || 0 } } }), new sn(t.width || 0) } }, { key: "save", value: function() { this.actions.push({ method: "save", data: [] }), this.drawingState.push(this.state) } }, { key: "restore", value: function() { this.actions.push({ method: "restore", data: [] }), this.state = rn[this._id] = this.drawingState.pop() || { lineDash: [0, 0], shadowOffsetX: 0, shadowOffsetY: 0, shadowBlur: 0, shadowColor: bn ? "#000000" : "ios" === Yt ? [] : [0, 0, 0, 0], font: "10px sans-serif", fontSize: 10, fontWeight: "normal", fontStyle: "normal", fontFamily: "sans-serif" } } }, { key: "getLineDash", value: function() { return this.state.lineDash } }, { key: "beginPath", value: function() { this.path = [], this.subpath = [], (I.IS_DEVTOOLS || bn) && this.path.push({ method: "beginPath", data: [] }) } }, {
                        key: "moveTo",
                        value: function(e, t) {
                            this.path.push({ method: "moveTo", data: [e, t] }), this.subpath = [
                                [e, t]
                            ]
                        }
                    }, { key: "closePath", value: function() { this.path.push({ method: "closePath", data: [] }), this.subpath.length && (this.subpath = [this.subpath.shift()]) } }, { key: "lineTo", value: function(e, t) { 0 === this.path.length && 0 === this.subpath.length ? this.path.push({ method: "moveTo", data: [].slice.apply(arguments) }) : this.path.push({ method: "lineTo", data: [].slice.apply(arguments) }), this.subpath.push([e, t]) } }, { key: "quadraticCurveTo", value: function(e, t, n, r) { this.path.push({ method: "quadraticCurveTo", data: [e, t, n, r] }), this.subpath.push([n, r]) } }, { key: "bezierCurveTo", value: function(e, t, n, r, o, a) { this.path.push({ method: "bezierCurveTo", data: [e, t, n, r, o, a] }), this.subpath.push([o, a]) } }, {
                        key: "arc",
                        value: function(e, t, n, r, o, a) {
                            var i = 5 < arguments.length && void 0 !== a && a;
                            if ("android" !== Yt || bn) return this.path.push({ method: "arc", data: [e, t, n, r, o, i] }), void this.subpath.push([e, t]);
                            var c, u, s = e + Math.cos(r) * n,
                                l = t + Math.sin(r) * n;
                            this.subpath.push([s, l]), i && r - o >= 2 * Math.PI || !i && o - r >= 2 * Math.PI ? this.subpath.push([s, l]) : (c = e + Math.cos(o) * n, u = t + Math.sin(o) * n, this.subpath.push([c, u])), this.path.push({ method: "arc", data: [e, t, n, r, o, i] })
                        }
                    }, {
                        key: "rect",
                        value: function(e, t, n, r) {
                            this.path.push({ method: "rect", data: [e, t, n, r] }), this.subpath = [
                                [e, t]
                            ], "android" !== Yt || bn || this.path.push({ method: "closePath", data: [] })
                        }
                    }, {
                        key: "arcTo",
                        value: function(e, t, n, r, o, a) {
                            if (("android" !== Yt || bn) && !a) return this.path.push({ method: "arcTo", data: [e, t, n, r, o] }), void this.subpath.push([n, r]);
                            var i = this.subpath[this.subpath.length - 1],
                                c = i[0],
                                u = i[1];
                            if (c === e && u === t || e === n && t === r || 0 === o) return this.actions.push({ method: "lineTo", data: [e, t] }), void this.subpath.push([e, t]);
                            if (c === e && c === n || u === t && u === r) return this.actions.push({ method: "lineTo", data: [e, t] }), void this.subpath.push([e, t]);

                            function s(e) { return Math.pow(e, 2) }
                            var l, f, d, p, h, v, g, b, y = Math.sqrt,
                                m = Math.acos,
                                w = Math.sin,
                                _ = Math.tan,
                                k = Math.atan,
                                S = Math.PI,
                                I = c - e,
                                O = u - t,
                                A = n - e,
                                C = r - t,
                                j = m((I * A + O * C) / (y(s(I) + s(O)) * y(s(A) + s(C)))) / 2,
                                P = Math.round(o / w(j) * 1e6) / 1e6,
                                M = Math.round(o / _(j) * 1e6) / 1e6;
                            p = c - e == 0 ? (d = e, 0 < u - t ? t + M : t - M) : u - t == 0 ? (d = 0 < c - e ? e + M : e - M, t) : (f = u - (l = (u - t) / (c - e)) * c, l * (d = (y(s(I) + s(O)) * M + I * e + O * t - f * O) / (I + l * O)) + f), b = n - e == 0 ? (g = e, 0 < r - t ? t + M : t - M) : r - t == 0 ? (g = 0 < n - e ? e + M : e - M, t) : (v = r - (h = (r - t) / (n - e)) * n, h * (g = (y(s(A) + s(A)) * M + A * e + C * t - v * C) / (A + h * C)) + v);
                            var T, x, E, D, R = (d + g) / 2 - e,
                                B = (p + b) / 2 - t;
                            D = 0 == B ? (E = e, 0 < B ? t + P : t - P) : (x = t - (T = B / R) * e, T * (E = (y(s(R) + s(B)) * P + e * R + t * B - x * B) / (R + T * B)) + x), E = Math.round(1e6 * E) / 1e6;
                            var F = p - (D = Math.round(1e6 * D) / 1e6),
                                L = d - E,
                                N = S - 2 * j,
                                W = k(F / L);
                            0 == F && L < 0 && (W = Math.PI);
                            var V = (d - E) * (b - D) - (p - D) * (g - E);
                            this.path.push({ method: "arc", data: [E, D, o, W, 0 < V ? W + N : W - N, V < 0] }), this.subpath.push([g, b])
                        }
                    }, { key: "clip", value: function() { this.actions.push({ method: "clip", data: cn(this.path) }) } }, { key: "lineDashOffset", set: function(e) { var t; "devtools" !== Yt && "windows" !== Yt ? (t = this.state.lineDash || [0, 0], this.actions.push({ method: "setLineDash", data: [t, e] })) : this.actions.push({ method: "setLineDashOffset", data: [e] }) } }, { key: "globalCompositeOperation", set: function(e) { this.actions.push({ method: "setGlobalCompositeOperation", data: [e] }) } }, { key: "shadowBlur", set: function(e) { "devtools" !== Yt && "windows" !== Yt ? (this.actions.push({ method: "setShadow", data: [this.state.shadowOffsetX, this.state.shadowOffsetY, e, this.state.shadowColor] }), this.state.shadowBlur = e) : this.actions.push({ method: "setShadowBlur", data: [e] }) } }, { key: "shadowColor", set: function(e) { var t; "devtools" !== Yt && "windows" !== Yt ? (t = bn ? e : "ios" === Yt && 0 === this.state.shadowBlur ? [] : an(e), this.actions.push({ method: "setShadow", data: [this.state.shadowOffsetX, this.state.shadowOffsetY, this.state.shadowBlur, t] }), this.state.shadowColor = t) : this.actions.push({ method: "setShadowColor", data: [e] }) } }, { key: "shadowOffsetX", set: function(e) { "devtools" !== Yt && "windows" !== Yt ? (this.actions.push({ method: "setShadow", data: [e, this.state.shadowOffsetY, this.state.shadowBlur, this.state.shadowColor] }), this.state.shadowOffsetX = e) : this.actions.push({ method: "setShadowOffsetX", data: [e] }) } }, { key: "shadowOffsetY", set: function(e) { "devtools" !== Yt && "windows" !== Yt ? (this.actions.push({ method: "setShadow", data: [this.state.shadowOffsetX, e, this.state.shadowBlur, this.state.shadowColor] }), this.state.shadowOffsetY = e) : this.actions.push({ method: "setShadowOffsetY", data: [e] }) } }, {
                        key: "font",
                        set: function(e) {
                            var n = this,
                                t = (this.state.font = e).match(/^(([\w\-]+\s)*)(\d+r?px)(\/(\d+\.?\d*(r?px)?))?\s+(.*)/);
                            if (t) {
                                var r = t[1].trim().split(/\s/),
                                    o = parseFloat(t[3]),
                                    a = t[7],
                                    i = [],
                                    c = "",
                                    u = this;
                                if (r.forEach(function(e, t) {-1 < ["italic", "oblique", "normal"].indexOf(e) ? (i.push({ method: "setFontStyle", data: [e] }), n.state.fontStyle = e) : -1 < ["bold", "normal"].indexOf(e) ? (i.push({ method: "setFontWeight", data: [e] }), n.state.fontWeight = e) : 0 === t ? (i.push({ method: "setFontStyle", data: ["normal"] }), u.state.fontStyle = "normal") : 1 === t && s() }), 1 === r.length && s(), c = i.map(function(e) { return e.data[0] }).join(" "), this.state.fontSize = o, this.state.fontFamily = a, "devtools" === Yt || "windows" === Yt) return c = c + " " + o + "px " + a, void this.actions.push({ method: "setFont", data: [c] });
                                this.actions.push.apply(this.actions, i), this.actions.push({ method: "setFontSize", data: [o] }, { method: "setFontFamily", data: [a] })
                            } else console.warn("Failed to set 'font' on 'CanvasContext': invalid format.");

                            function s() { i.push({ method: "setFontWeight", data: ["normal"] }), u.state.fontWeight = "normal" }
                        },
                        get: function() { return this.state.font }
                    }, { key: "fillStyle", set: function(e) { pn(this, "setFillStyle", e) } }, { key: "strokeStyle", set: function(e) { pn(this, "setStrokeStyle", e) } }, { key: "globalAlpha", set: function(e) { e = Math.floor(255 * parseFloat(e)), this.actions.push({ method: "setGlobalAlpha", data: [e] }) } }, { key: "textAlign", set: function(e) { this.actions.push({ method: "setTextAlign", data: [e] }) } }, { key: "lineCap", set: function(e) { this.actions.push({ method: "setLineCap", data: [e] }) } }, { key: "lineJoin", set: function(e) { this.actions.push({ method: "setLineJoin", data: [e] }) } }, { key: "lineWidth", set: function(e) { this.actions.push({ method: "setLineWidth", data: [e] }) } }, { key: "miterLimit", set: function(e) { this.actions.push({ method: "setMiterLimit", data: [e] }) } }, { key: "textBaseline", set: function(e) { this.actions.push({ method: "setTextBaseline", data: [e] }) } }]), a
                }();

            function pn(e, t, n) { "string" == typeof n ? bn ? e.actions.push({ method: t, data: ["normal", n] }) : e.actions.push({ method: t, data: ["normal", an(n)] }) : "object" === Object(ce.default)(n) && n instanceof fn ? e.actions.push({ method: t, data: [n.type, n.data, n.colorStop] }) : n instanceof ln && e.actions.push({ method: t, data: ["pattern", n.image, n.repetition] }) }[].concat(["scale", "rotate", "translate", "setTransform", "transform"], ["drawImage", "fillText", "fill", "stroke", "fillRect", "strokeRect", "clearRect", "strokeText"]).forEach(function(l) {
                dn.prototype[l] = "fill" === l || "stroke" === l ? function() { this.actions.push({ method: l + "Path", data: cn(this.path) }) } : "fillRect" === l ? function(e, t, n, r) { this.actions.push({ method: "fillPath", data: [{ method: "rect", data: [e, t, n, r] }] }) } : "strokeRect" === l ? function(e, t, n, r) { this.actions.push({ method: "strokePath", data: [{ method: "rect", data: [e, t, n, r] }] }) } : "fillText" === l || "strokeText" === l ? function(e, t, n, r) { var o = [e.toString(), t, n]; "number" == typeof r && o.push(r), this.actions.push({ method: l, data: o }) } : "drawImage" === l ? function(e, t, n, r, o, a, i, c, u) {
                    var s;
                    e = un(this, e), void 0 === u && (a = t, i = n, c = r, u = o, o = r = n = t = void 0), s = on(t) && on(n) && on(r) && on(o) ? [e, a, i, c, u, t, n, r, o] : on(c) && on(u) ? [e, a, i, c, u] : [e, a, i], this.actions.push({ method: l, data: s })
                } : "clearRect" === l ? function() { this.useHardwareAccelerate = !1, this.actions.push({ method: l, data: [].slice.apply(arguments) }) } : function() { this.actions.push({ method: l, data: [].slice.apply(arguments) }) }
            }), ["setFillStyle", "setTextAlign", "setStrokeStyle", "setGlobalAlpha", "setShadow", "setFontSize", "setLineCap", "setLineJoin", "setLineWidth", "setMiterLimit", "setTextBaseline", "setLineDash"].forEach(function(t) {
                "setFillStyle" === t || "setStrokeStyle" === t ? dn.prototype[t] = function() { pn(this, t, arguments[0]) } : "setGlobalAlpha" === t ? dn.prototype[t] = function() {
                    var e = [].slice.apply(arguments, [0, 1]);
                    e[0] = Math.floor(255 * parseFloat(e[0])), this.actions.push({ method: t, data: e })
                } : "setShadow" === t ? dn.prototype[t] = function() {
                    var e = [].slice.apply(arguments, [0, 4]);
                    bn || (e[3] = "ios" === Yt && 0 === e[2] ? [] : an(e[3])), this.actions.push({ method: t, data: e }), this.state.shadowBlur = e[2], this.state.shadowColor = e[3], this.state.shadowOffsetX = e[0], this.state.shadowOffsetY = e[1]
                } : "setLineDash" === t ? dn.prototype[t] = function() {
                    var e = [].slice.apply(arguments, [0, 2]);
                    e[0] = e[0] && e[0].length ? e[0] : [0, 0], e[1] = e[1] || 0, this.actions.push({ method: t, data: e }), this.state.lineDash = e[0]
                } : "setFontSize" === t ? dn.prototype.setFontSize = function(e) { this.state.font = this.state.font.replace(/\d+\.?\d*px/, e + "px"), this.state.fontSize = e, this.actions.push({ method: "setFontSize", data: [e] }) } : dn.prototype[t] = function() { this.actions.push({ method: t, data: [].slice.apply(arguments, [0, 1]) }) }
            });
            var hn = n(39),
                vn = I.IS_ANDROID && ae.default.useXWebCanvas,
                gn = I.IS_IOS && ae.default.useSkiaCanvas,
                bn = vn || gn,
                yn = {},
                mn = {},
                wn = {},
                _n = {},
                kn = 0,
                Sn = 0,
                In = 4500,
                On = Date.now,
                An = (Object(tn.subscribeOnce)("onCanvasMethodCallback"), Object(tn.subscribeOnce)("onDrawCanvas"));

            function Cn(e) {
                var t = e.canvasId,
                    n = e.pluginId,
                    r = e.nodeId,
                    o = e.viewId,
                    a = e.webviewId,
                    i = Object(tn.concatId)(a, t, n, r);
                wn[i] && delete wn[i], bn && Object(hn.skiaCanvasRemove)({ webviewId: a, canvasId: t, pluginId: n, nodeId: r, viewId: o })
            }

            function jn(e, t, n, r, o, a, i) {
                var c, u = 2 < arguments.length && void 0 !== n && n,
                    s = 3 < arguments.length ? r : void 0,
                    l = 4 < arguments.length ? o : void 0,
                    f = 5 < arguments.length ? a : void 0,
                    d = 6 < arguments.length ? i : void 0;
                I.IS_DEVTOOLS || I.IS_WINDOWS || I.IS_MAC ? (An(c = { actions: t, reserve: u, canvasId: e }, function(e) { "function" == typeof d && d({ errMsg: e.errMsg }) }), Object(m.publish)("canvasActionsChanged", c)) : Object(m.invokeMethod)("drawCanvas", { canvasId: e, reserve: u, useHardwareAccelerate: s, actions: t, success: l, fail: f, complete: d })
            }

            function Pn(e, t, n, r) {
                var o, a = e.isWidgetCanvas,
                    i = e.canvasId,
                    c = e.actions,
                    u = e.reserve,
                    s = e.useHardwareAccelerate,
                    l = e.success,
                    f = e.fail,
                    d = e.complete,
                    p = 1 < arguments.length && void 0 !== t ? t : y.default.currentWebviewId,
                    h = 2 < arguments.length && void 0 !== n ? n : "",
                    v = 3 < arguments.length && void 0 !== r ? r : "",
                    g = On();
                if (Array.isArray(c)) {
                    if (a) { if (g - kn < In) { var b = { errMsg: "drawCanvas:fail 调用 draw 过于频繁。" }; return 500 < (Sn += 1) && (Sn = 0, console.warn(b.errMsg)), void("function" == typeof f && f(b)) } return kn = g, void Object(m.invokeMethod)("drawCanvas", { canvasId: void 0, reserve: u, actions: c, success: l, fail: f, complete: d }) }
                    i && (o = Object(tn.concatId)(p, i, h, v), bn ? Object(hn.getOrCreateCanvas)(o).draw(c, u, d, p, v, h) : "number" == typeof wn[o] ? jn(wn[o], c, u, s, l, f, d) : (_n[o] = _n[o] || [], _n[o] = _n[o].concat({ actions: c, reserve: u, useHardwareAccelerate: s, success: l, fail: f, complete: d })))
                }
            }
            "undefined" != typeof __widgetConfig__ && (In = "number" == typeof __widgetConfig__.drawMinInterval ? __widgetConfig__.drawMinInterval : 25), Object(m.subscribe)("canvasInsert", function(e, t) {
                var n = e.canvasId,
                    r = e.viewId,
                    o = e.canvasNumber,
                    a = e.pluginId,
                    i = e.data,
                    c = e.position,
                    u = e.nodeId,
                    s = e.compPath;
                bn && Object(hn.skiaCanvasInsert)({ canvasId: n, viewId: r, canvasNumber: o, pluginId: a, position: c, nodeId: u }, t);
                var l = Object(tn.concatId)(t, n, a, u);
                yn[o] = { lastTouches: [], data: i, compPath: s }, wn[l] = o, mn[o] = c, Array.isArray(_n[l]) && (_n[l].forEach(function(e) { jn(o, e.actions, e.reserve, e.useHardwareAccelerate, e.success, e.fail, e.complete) }), delete _n[l]), Object(S.onBeforeUnloadPage)(t, function() { Cn({ canvasId: n, pluginId: a, nodeId: u, viewId: r, webviewId: t }) })
            }), Object(m.subscribe)("canvasUpdate", function(e) {
                var t = e.canvasNumber,
                    n = e.position;
                Object($t.hasOwnProperty)(mn, t) && (mn[t] = n)
            }), Object(m.subscribe)("canvasRemove", function(e, t) { Cn({ canvasId: e.canvasId, pluginId: e.pluginId, nodeId: e.nodeId, viewId: e.viewId, webviewId: t }) });
            n(51);
            var Mn = n(74);

            function Tn(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(p.default)(r); return t = o ? (e = Object(p.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(d.default)(this, t) } }
            var xn = {},
                En = {},
                Dn = {},
                Rn = new WeakMap,
                Bn = {};

            function Fn(e, t) {
                var n = Object(tn.concatId)(t, e.canvasNumber);
                Dn[n] = { top: e.top, left: e.left, width: e.width, height: e.height, canvasNumber: e.canvasNumber, nodeId: e.nodeId, pluginId: e.pluginId, webviewId: t }, En[n] = Object.assign({}, e.data, { webviewId: t });
                var r = xn[n];
                "function" == typeof r && (r.call(), delete xn[n]), Object(S.onBeforeUnloadPage)(t, function() { Ln(e, t) })
            }

            function Ln(e, t) {
                var n = Object(tn.concatId)(t, e.canvasNumber);
                delete Dn[n], delete En[n], delete xn[n], delete Bn[n]
            }
            Mn.CanvasInterface;
            var Nn = n(48);
            var Wn = null,
                Vn = !1,
                Un = {},
                Gn = ["touchstart", "touchmove", "touchend", "touchcancel"];
            I.IS_IOS && (Object(m.subscribe)("webGLInserted", function(e, t) {
                var r;
                Wn = Wn || Object(Nn.getWeixinCanvas)(), Vn || (Vn = !0, r = Wn, Gn.forEach(function(n) {
                    r["on" + n] = function(e) {
                        var t = Un[e.canvasId];
                        t ? t.handlers["bind" + n] && y.default.webviewEventCallback({ data: { type: n, target: t.target, currentTarget: t.target, timeStamp: e.timeStamp, touches: Object(tn.normalizeTouch)(e.touches), changedTouches: Object(tn.normalizeTouch)(e.changedTouches) }, eventName: t.handlers["bind" + n], webviewId: t.webviewId, nodeId: t.nodeId }) : console.error("event can not be dispatched due to missing node info")
                    }
                })), Un[e.canvasNumber] = Object.assign({}, e.data, { webviewId: t }), Fn(e, t)
            }), Object(m.subscribe)("webGLRemoved", function(e, t) { delete Un[e.canvasNumber], Ln(e, t) }));
            var qn = n(36),
                Hn = n(13);
            var Kn = ["touchstart", "touchmove", "touchend", "touchcancel"],
                zn = !1;
            I.IS_ANDROID && (Object(m.subscribe)("webGLInserted", function() {
                var e;
                zn || (zn = !0, e = Hn.default.EventHandler, Kn.forEach(function(r) {
                    e["on" + r] = function(e) {
                        var t = e.currentTarget,
                            n = En[t._canvasId];
                        n ? n.handlers["bind" + r] && y.default.webviewEventCallback({ data: { type: r, target: n.target, currentTarget: n.target, timeStamp: e.timeStamp, touches: Object(tn.normalizeTouch)(e.touches), changedTouches: Object(tn.normalizeTouch)(e.changedTouches) }, eventName: n.handlers["bind" + r], webviewId: n.webviewId, nodeId: n.nodeId }) : console.error("event can not be dispatched due to missing node info")
                    }
                })), Fn.apply(void 0, arguments)
            }), Object(m.subscribe)("webGLRemoved", Ln));
            var Jn = n(30);

            function Qn(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) { if (!e) return; if ("string" == typeof e) return Xn(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xn(e, t) }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);

                        function r() {}
                        var o = 0;
                        return { s: r, n: function() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] } }, e: function(e) { throw e }, f: r }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, i = !0,
                    c = !1;
                return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return i = e.done, e }, e: function(e) { c = !0, a = e }, f: function() { try { i || null == n.return || n.return() } finally { if (c) throw a } } }
            }

            function Xn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Yn = {},
                Zn = {},
                $n = {},
                er = y.default.currentWebviewId;
            I.IS_DEVTOOLS && (Object(m.subscribe)("webGLInserted", Fn), Object(m.subscribe)("webGLUpdated", function(e, t) {
                var n = Object(tn.concatId)(t, e.canvasNumber),
                    r = Yn[n];
                if (!r) return;
                r.style.top = e.box.top + "px", r.style.left = e.box.left + "px", r.style.width = e.box.width + "px", r.style.height = e.box.height + "px"
            }), Object(m.subscribe)("webGLRemoved", function(e, t) {
                var n = Object(tn.concatId)(t, e.canvasNumber);
                Ln(e, t), delete Yn[n]
            }), Object(m.subscribe)("webGLPageScroll", function(e, t) { "function" == typeof window.scrollTo && (document.body.scrollWidth === e.width && document.body.scrollHeight === e.height || (document.body.style.width = e.width + "px", document.body.style.height = e.height + "px"), window.scrollTo(e.scrollLeft, e.scrollTop), $n[t] = { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }) }), Ee(function(o) {
                Object(S.onBeforeUnloadPage)(o.webviewId, function() {
                    var e = Zn[o.webviewId];
                    if (e) {
                        var t, n = Qn(e);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                document.body.removeChild(r)
                            }
                        } catch (e) { n.e(e) } finally { n.f() }
                        delete $n[o.webviewId], delete Zn[o.webviewId]
                    }
                });
                var e = o.webviewId;
                if (e !== er)
                    for (var t = 0, n = Object.entries(Zn); t < n.length; t++) {
                        var r = Object(Jn.default)(n[t], 2),
                            a = r[0],
                            i = r[1];
                        if (String(a) === String(e)) {
                            var c, u = Qn(i);
                            try { for (u.s(); !(c = u.n()).done;) { c.value.style.visibility = "visible" } } catch (e) { u.e(e) } finally { u.f() }
                            var s = $n[a];
                            s ? window.scrollTo(s.scrollLeft, s.scrollTop) : window.scrollTo(0, 0)
                        } else { var l, f = Qn(i); try { for (f.s(); !(l = f.n()).done;) { l.value.style.visibility = "hidden" } } catch (e) { f.e(e) } finally { f.f() } }
                    }
                er = e
            }));
            var tr = n(22),
                nr = (n(81), n(82), n(35)),
                rr = n(46);

            function or(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(p.default)(r); return t = o ? (e = Object(p.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(d.default)(this, t) } }

            function ar(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) { if (!e) return; if ("string" == typeof e) return ir(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ir(e, t) }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);

                        function r() {}
                        var o = 0;
                        return { s: r, n: function() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] } }, e: function(e) { throw e }, f: r }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, i = !0,
                    c = !1;
                return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return i = e.done, e }, e: function(e) { c = !0, a = e }, f: function() { try { i || null == n.return || n.return() } finally { if (c) throw a } } }
            }

            function ir(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var cr = {},
                ur = {},
                sr = {},
                lr = y.default.currentWebviewId;
            I.IS_DEVTOOLS && (Object(m.subscribe)("skiaCanvasInsert", function(e, t) { Object(tr.skiaCanvasInsert)(e, t) }), Object(m.subscribe)("skiaCanvasRemove", function(e, t) {
                Object(tr.skiaCanvasRemove)(e, t);
                var n = Object(tn.concatId)(t, e.canvasNumber);
                delete cr[n]
            }), Object(m.subscribe)("skiaCanvasUpdated", function(t, e) {
                var n = Object(tn.concatId)(e, t.canvasNumber),
                    r = cr[n];
                if (!r || "function" == typeof r) { return void new Promise(function(e) { cr[n] = e }).then(function(e) { e.style.top = t.box.top + "px", e.style.left = t.box.left + "px", e.style.width = t.box.width + "px", e.style.height = t.box.height + "px" }) }
                r.style.top = t.box.top + "px", r.style.left = t.box.left + "px", r.style.width = t.box.width + "px", r.style.height = t.box.height + "px"
            }), Object(m.subscribe)("skiaPageScroll", function(e, t) { "function" == typeof window.scrollTo && (document.body.scrollWidth === e.width && document.body.scrollHeight === e.height || (document.body.style.width = e.width + "px", document.body.style.height = e.height + "px"), window.scrollTo(e.scrollLeft, e.scrollTop), sr[t] = { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }) }), Ee(function(o) {
                Object(S.onBeforeUnloadPage)(o.webviewId, function() {
                    var e = ur[o.webviewId];
                    if (e) {
                        var t, n = ar(e);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                document.body.removeChild(r)
                            }
                        } catch (e) { n.e(e) } finally { n.f() }
                        delete sr[o.webviewId], delete ur[o.webviewId]
                    }
                });
                var e = o.webviewId;
                if (e !== lr)
                    for (var t = 0, n = Object.entries(ur); t < n.length; t++) {
                        var r = Object(Jn.default)(n[t], 2),
                            a = r[0],
                            i = r[1];
                        if (String(a) === String(e)) {
                            var c, u = ar(i);
                            try { for (u.s(); !(c = u.n()).done;) { c.value.style.visibility = "visible" } } catch (e) { u.e(e) } finally { u.f() }
                            var s = sr[a];
                            s ? window.scrollTo(s.scrollLeft, s.scrollTop) : window.scrollTo(0, 0)
                        } else { var l, f = ar(i); try { for (f.s(); !(l = f.n()).done;) { l.value.style.visibility = "hidden" } } catch (e) { f.e(e) } finally { f.f() } }
                    }
                lr = e
            }));
            tr.SkiaCanvas;

            function fr(e, t, n, r) { var o, a, i, c, u, s, l; "onLongPress" !== e && (a = r, i = t.canvasNumber, c = Object(tn.concatId)(a, i), o = En[c], s = (u = Xt(o.lastTouches, e, n)).touches, l = u.changedTouches, o.lastTouches = s, o[e] && "function" == typeof y.default.webviewEventCallback && y.default.webviewEventCallback({ data: { type: Zt[e], timeStamp: new Date - o.startTime, target: o.target, touches: Object(tn.injectExtraTouchInfo)(s), changedTouches: Object(tn.injectExtraTouchInfo)(l) }, eventName: o[e], webviewId: r, nodeId: o.nodeId })) }
            ae.default.onReady(function() {
                ["onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel", "onLongPress"].forEach(function(l) {
                    Object(h.onNativeEvent)(l, function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = JSON.parse(e.data || "{}"),
                            r = n.canvasNumber,
                            o = n.skia,
                            a = n.type;
                        if ("TextView" !== a && "ImageView" !== a)
                            if ("android-webgl" !== a) {
                                if (o) { if (!Object($t.hasOwnProperty)(tr.skiaCanvasInfo, r)) return } else if (!Object($t.hasOwnProperty)(yn, r)) return;
                                var i = o ? tr.skiaCanvasInfo[r].data : yn[r].data,
                                    c = Xt(i.lastTouches, l, e),
                                    u = c.touches,
                                    s = c.changedTouches;
                                i.lastTouches = u, i[l] && "function" == typeof y.default.webviewEventCallback && ("onTouchMove" === l && 0 === s.length || y.default.webviewEventCallback({ data: { type: Zt[l], timeStamp: new Date - i.startTime, target: i.target, touches: u, changedTouches: s }, eventName: i[l], webviewId: t, nodeId: n.nodeId }))
                            } else fr(l, n, e, t)
                    })
                })
            });
            var dr = n(34),
                pr = ["onVideoPlay", "onVideoPause", "onVideoTimeUpdate", "onVideoClickFullScreenBtn", "onVideoClickDanmuBtn", "onVideoFullScreenChange", "onVideoWaiting", "onVideoError", "onVideoLoadedMetaData", "onVideoProgress", "onVideoBackgroundPlaybackChange"];
            ae.default.onReady(function() {
                I.IS_ANDROID && ae.default.useXWebVideo && (pr = pr.map(function(e) { return e.replace("on", "onXWeb") }).concat(pr)), pr.forEach(function(f) {
                    Object(h.onNativeEvent)(f, function() {
                        var e, t, n, r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                            o = 1 < arguments.length ? arguments[1] : void 0,
                            a = "bind" + f.replace("XWeb", "").substring(7).toLowerCase(),
                            i = JSON.parse(r.data),
                            c = i.handlers,
                            u = i.event,
                            s = i.createdTimestamp,
                            l = i.nodeId;
                        c && (e = JSON.parse(r.data), r.videoPlayerId = r.videoPlayerId || e && e.videoPlayerId || "-1000", c[a] && "function" == typeof y.default.webviewEventCallback && (t = { type: a.substring(4), target: u.target, currentTarget: u.currentTarget, timeStamp: (r.timeStamp || Date.now()) - s, detail: {} }, "bindtimeupdate" === a && (t.detail = { currentTime: r.position, duration: r.duration }), "bindfullscreenchange" === a && (n = 0 === (n = r.direction) || 180 === n || "vertical" === n ? "vertical" : "horizontal", t.detail = { fullScreen: r.fullScreen, fullscreen: r.fullScreen, direction: n }), "binderror" === a ? t.detail = { errMsg: r.errMsg } : "bindprogress" === a ? t.detail = { buffered: r.buffered } : "bindloadedmetadata" === a ? t.detail = { duration: r.duration, width: r.width, height: r.height } : "bindbackgroundplaybackchange" === a && (t.detail = { playInBackground: r.playInBackground }), y.default.webviewEventCallback({ data: t, eventName: c[a], webviewId: o, nodeId: l })))
                    })
                })
            }), Object(m.onMethod)("onEnterVideoPictureInPicture", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = dr.pipInfo.webviewId,
                    n = dr.playerInfo[t + "_" + e.videoPlayerId];
                n && n.handlers.bindenterpictureinpicture && "function" == typeof y.default.webviewEventCallback && y.default.webviewEventCallback({ data: { type: "enterpictureinpicture", target: n.event.target, currentTarget: n.event.target, timeStamp: Date.now() - n.createdTimeStamp, touches: [], detail: {} }, eventName: n.handlers.bindenterpictureinpicture, webviewId: t, nodeId: n.nodeId })
            }), Object(m.onMethod)("onLeaveVideoPictureInPicture", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = dr.pipInfo.webviewId,
                    n = dr.playerInfo[t + "_" + e.videoPlayerId];
                n && n.handlers.bindleavepictureinpicture && "function" == typeof y.default.webviewEventCallback && y.default.webviewEventCallback({ data: { type: "leavepictureinpicture", target: n.event.target, currentTarget: n.event.target, timeStamp: Date.now() - n.createdTimeStamp, touches: [], detail: {} }, eventName: n.handlers.bindleavepictureinpicture, webviewId: t, nodeId: n.nodeId })
            });
            var hr = !1,
                vr = {};
            Object(m.subscribe)("enableCoverViewScrollEventTransfer", function(e) {
                var t = e.nodeId;
                vr[t] = !0
            }), Object(m.subscribe)("disableCoverViewScrollEventTransfer", function(e) {
                var t = e.nodeId;
                vr[t] = !1
            }), Object(m.onMethod)("onScrollViewScroll", function() {
                var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                hr || (setTimeout(function() { hr = !1 }, 500), Object(m.invokeMethod)("hideKeyboard", {}), hr = !0), t.data && "function" == typeof y.default.webviewEventCallback && ((e = JSON.parse(t.data)).bindscroll && y.default.webviewEventCallback({ data: { type: "scroll", target: e.target, currentTarget: e.target, detail: { scrollHeight: t.scrollHeight, scrollWidth: t.scrollWidth, scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }, timeStamp: Date.now() - e.timeStamp }, eventName: e.bindscroll, webviewId: n, nodeId: e.nodeId }), vr[e.nodeId] && Object(m.publish)("coverViewScrollEvent", { nodeId: e.nodeId, scrollHeight: t.scrollHeight, scrollWidth: t.scrollWidth, scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }))
            });
            var gr, br = n(55),
                yr = {},
                mr = {},
                wr = {},
                _r = [],
                kr = {},
                Sr = new s.EventEmitter2,
                Ir = new WeakMap;
            var Or, Ar, Cr, jr = (Or = "onOperateCameraCallback", Ar = [], Cr = 1, Object(m.subscribe)(Or, function(r) {
                    Ar.forEach(function(e) {
                        var t = e[0],
                            n = e[1];
                        t.cid === r.cid && t.cameraId === r.cameraId && n(r)
                    }), Ar = []
                }), function(e, t) { e.cid = Cr++, Ar.push([e, t]) }),
                Pr = {};

            function Mr(e, t) {
                var n = e.cameraId,
                    r = e.pluginId;
                delete yr[t + "_" + r], delete mr[t + "_" + n], delete wr[t + "_" + n], delete Pr[t], Sr.emit("cameraRemoved")
            }
            Object(h.onNativeEvent)("onCameraInitDone", function() { Pr[y.default.currentWebviewId] = !0, Sr.emit("cameraInitialized") }), Object(m.subscribe)("cameraInserted", function(e, t) {
                var n = e.cameraId,
                    r = e.pluginId,
                    o = e.bindings;
                yr[t + "_" + r] = n, mr[t + "_" + n] = o, Sr.emit("cameraInsert"), Object(S.onBeforeUnloadPage)(t, function() { Mr({ cameraId: n, pluginId: r }, t) })
            }), Object(m.subscribe)("cameraUpdated", function(e, t) {
                var n = e.cameraId,
                    r = e.hidden;
                wr[t + "_" + n] = r
            }), Object(m.subscribe)("cameraRemoved", function(e, t) { Mr({ cameraId: e.cameraId, pluginId: e.pluginId }, t) }), dt(function() { var n; "undefined" != typeof __appServiceEngine__ && "function" === __appServiceEngine__.getCurrentPagesByDomain && (n = __appServiceEngine__.getCurrentPagesByDomain("").map(function(e) { return e.__wxWebviewId__ }), Object.keys(yr).forEach(function(e) { var t = e.split("_").shift(); - 1 === n.indexOf(Number(t)) && (delete mr[t + "_" + yr[e]], delete wr[t + "_" + yr[e]], delete yr[e], kr[t] && (kr[t].forEach(function(e) { clearTimeout(e) }), delete kr[t])) })) }), Object(m.onMethod)("onCameraVideoTaken", function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                _r.forEach(function(e) { e(t, n) })
            });
            var Tr = (gr = function() {
                function n(e, t) { Object(_.default)(this, n), this.webviewId = e, this.pluginId = t }
                return Object(b.default)(n, [{
                    key: "onCameraFrame",
                    value: function(a) {
                        if (I.IS_DEVTOOLS) return f = a, d = this.webviewId, p = this.pluginId, {
                            start: function(e) {
                                var t = this,
                                    n = 0 < arguments.length && void 0 !== e ? e : {},
                                    r = 480,
                                    o = 640,
                                    a = d + "_" + p;
                                if ("number" == typeof yr[a] || yr[a]) {
                                    var i = (mr[d + "_" + yr[a]] || {}).frameSize;
                                    if ("small" === i ? (r = 288, o = 352) : "medium" === i ? (r = 480, o = 640) : "large" === i && (r = 720, o = 1280), !f || "function" != typeof f) return "function" == typeof n.fail && n.fail({ errMsg: "callback is not a function" }), void("function" == typeof n.complete && n.complete({ errMsg: "callback is not a function" }));
                                    Sr.once("cameraRemoved", function() { t.stop() });
                                    var c = window.createObjectURL || window.URL && window.URL.createObjectURL || window.webkitURL.createObjectURL,
                                        u = document.createElement("video"),
                                        s = document.createElement("canvas"),
                                        l = s.getContext("2d");
                                    s.width = r, s.height = o, u.style.width = r + "px", u.style.height = o + "px", navigator.getUserMedia({ video: { width: r, height: o }, audio: !1 }, function(e) { "srcObject" in u ? u.srcObject = e : u.src = c(e), u.play(), t._videoTrack = e.getTracks()[0], t._raf = window.requestAnimationFrame(function e() { l.drawImage(u, 0, 0), f({ width: r, height: o, data: l.getImageData(0, 0, r, o).data.buffer }), t._raf = window.requestAnimationFrame(e) }), "function" == typeof n.success && n.success(), "function" == typeof n.complete && n.complete() }, function() { "function" == typeof n.fail && n.fail({ errMsg: "camera is not found" }), "function" == typeof n.complete && n.complete({ errMsg: "camera is not found" }) })
                                } else Sr.once("cameraInsert", function() { t.start(n) })
                            },
                            stop: function(e) {
                                var t = 0 < arguments.length && void 0 !== e ? e : {};
                                window.cancelAnimationFrame(this._raf), this._videoTrack && this._videoTrack.stop(), "function" == typeof t.success && t.success(), "function" == typeof t.complete && t.complete()
                            }
                        };
                        var f, d, p, t = this.webviewId,
                            n = this._invokeMethod.bind(this),
                            i = this;
                        return {
                            start: Object(k.surroundByPromiseFactory)(function() {
                                var r = this,
                                    o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                if (this._frameListenerStarted = !0, !a || "function" != typeof a) return "function" == typeof o.fail && o.fail({ errMsg: "callback is not a function" }), void("function" == typeof o.complete && o.complete({ errMsg: "callback is not a function" }));

                                function e() {
                                    I.IS_IOS && (r._handler = function() {
                                        var e;
                                        r._frameListenerStarted && i._imageData && (e = { width: i._imageData.width, height: i._imageData.height, data: i._imageData.data }, a(e))
                                    }, Object(h.onNativeEvent)("onCameraFrame", r._handler)), n("listenFrameChange", {
                                        success: function(e) {
                                            if (!r._frameListenerStarted) return "function" == typeof o.fail && o.fail({ errMsg: "listener has been stopped" }), void("function" == typeof o.complete && o.complete({ errMsg: "listener has been stopped" }));
                                            if (!br.default) return "function" == typeof o.fail && o.fail({ errMsg: "onCameraFrame is not supported on your device" }), void("function" == typeof o.complete && o.complete({ errMsg: "onCameraFrame is not supported on your device" }));
                                            var t = br.default.get(e.bufferId);
                                            if (!t) return "function" == typeof o.fail && o.fail({ errMsg: "onCameraFrame fails to allocate ArrayBuffer" }), void("function" == typeof o.complete && o.complete({ errMsg: "onCameraFrame fails to allocate ArrayBuffer" }));
                                            t.__proto__ = ArrayBuffer.prototype;
                                            var n = { width: e.width, height: e.height, data: t };
                                            I.IS_IOS ? i._imageData = { width: e.width, height: e.height, data: t } : (r._handler = function() { r._frameListenerStarted && a(n) }, Object(h.onNativeEvent)("onCameraFrame", r._handler)), Sr.once("cameraRemoved", function() { r.stop() }), "function" == typeof o.success && o.success(), "function" == typeof o.complete && o.complete()
                                        },
                                        fail: function() { r._frameListenerStarted = !1, "function" == typeof o.fail && o.fail(), "function" == typeof o.complete && o.complete(), I.IS_IOS && Object(h.offNativeEvent)("onCameraFrame", r._handler) }
                                    })
                                }!I.IS_ANDROID || Pr[t] ? e() : Sr.once("cameraInitialized", function() { e() })
                            }),
                            stop: Object(k.surroundByPromiseFactory)(function() {
                                var e = this,
                                    t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                this._frameListenerStarted = !1, n("closeFrameChange", { success: function() { Object(h.offNativeEvent)("onCameraFrame", e._handler), "function" == typeof t.success && t.success() }, fail: function() { "function" == typeof t.fail && t.fail() }, complete: function() { "function" == typeof t.complete && t.complete() } })
                            })
                        }
                    }
                }, {
                    key: "_invoke",
                    value: function(o, a) {
                        a.type = o, I.IS_DEVTOOLS || I.IS_WINDOWS ? (jr(a, function(e) {
                            var r = e.imageData,
                                t = e.videoData;

                            function n(t, n) { Object(m.invokeMethod)("base64ToTempFilePath", Object.assign({ fileType: "jpg", base64Data: r }, t), { beforeAll: function(e) { "takePhoto" === t.type ? e.tempImagePath = e.tempFilePath : e.tempFilePath && (e.tempThumbPath = e.tempFilePath), n && (e.tempVideoPath = n), e.errMsg = e.errMsg.replace("base64ToTempFilePath", o), delete e.tempFilePath } }) }
                            t ? Object(m.invokeMethod)("base64ToTempFilePath", { fileType: "webm", base64Data: t, complete: function(e) { n(a, e.tempFilePath) } }) : "startRecord" === o ? ("function" == typeof a.success && a.success({ errMsg: "startRecord:ok" }), "function" == typeof a.complete && a.complete({ errMsg: "startRecord:ok" })) : n(a)
                        }), Object(m.publish)("operateCamera", a, [this.webviewId])) : Object(m.invokeMethod)("operateCamera", a)
                    }
                }, {
                    key: "_invokeMethod",
                    value: function(e, t) {
                        var n = this,
                            r = this.webviewId + "_" + this.pluginId;
                        if ("number" == typeof yr[r] || yr[r]) {
                            var o = mr[this.webviewId + "_" + yr[r]];
                            if (o.isCancelAuth) return "function" == typeof t.fail && t.fail({ errMsg: "user cancel auth" }), void("function" == typeof t.complete && t.complete({ errMsg: "user cancel auth" }));
                            if ("scanCode" === o.mode && ("takePhoto" === e || "startRecord" === e)) return "function" == typeof t.fail && t.fail({ errMsg: "Not allow to invoke takePhoto in 'scanCode' mode." }), void("function" == typeof t.complete && t.complete({ errMsg: "Not allow to invoke takePhoto in 'scanCode' mode." }));
                            t.cameraId = yr[r], this._invoke(e, t)
                        } else Sr.once("cameraInsert", function() { n._invokeMethod(e, t) })
                    }
                }, {
                    key: "takePhoto",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {},
                            n = this.webviewId + "_" + this.pluginId;
                        if (wr[this.webviewId + "_" + yr[n]]) return "function" == typeof t.fail && t.fail({ errMsg: "Not allow to invoke takePhoto if camera is hidden." }), void("function" == typeof t.complete && t.complete({ errMsg: "Not allow to invoke takePhoto if camera is hidden." }));
                        this._invokeMethod("takePhoto", t)
                    }
                }, {
                    key: "setZoom",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(m.beforeInvoke)("CameraContext.setZoom", t, { zoom: 1 }) && (t.zoom < 1 && (t.zoom = 1), this._invokeMethod("setZoom", t))
                    }
                }, {
                    key: "startRecord",
                    value: function(e) {
                        var t = this,
                            n = 0 < arguments.length && void 0 !== e ? e : {};
                        ! function(e) { yt({ args: 0 < arguments.length && void 0 !== e ? e : {} }) }({ scope: "scope.record", success: function() { Ir.set(t, !0), t._startRecord(n) }, fail: function() { "function" == typeof n.fail && n.fail({ errMsg: "Failed to invoke 'startRecord' on 'CameraContext': not allowed to use microphone." }), "function" == typeof n.complete && n.complete({ errMsg: "Failed to invoke 'startRecord' on 'CameraContext': not allowed to use microphone." }) } })
                    }
                }, {
                    key: "_startRecord",
                    value: function(e) {
                        var o = this,
                            t = 0 < arguments.length && void 0 !== e ? e : {};
                        if (Ir.get(this)) {
                            var n = this.webviewId + "_" + this.pluginId;
                            if (wr[this.webviewId + "_" + yr[n]]) return "function" == typeof t.fail && t.fail({ errMsg: "Not allow to invoke takePhoto if camera is hidden." }), void("function" == typeof t.complete && t.complete({ errMsg: "Not allow to invoke takePhoto if camera is hidden." }));
                            var r, a, i, c = t.timeoutCallback,
                                u = t.fail;
                            t.fail = function(e) { o._isRecording = !1, clearTimeout(a), "function" == typeof u && u(e) }, this._invokeMethod("startRecord", t), this._isRecording || (this._isRecording = !0, r = "number" == typeof t.timeout ? Math.max(0, t.timeout) : 30, a = this._timer = setTimeout(function() { o._isRecording && (o.stopRecord({ complete: c || function() {} }), o._isRecording = !1) }, 1e3 * r), 0 === r ? clearTimeout(a) : kr[this.webviewId] ? kr[this.webviewId].push(a) : kr[this.webviewId] = [a], i = this._videoTaken = function(e, t) {
                                var n, r = t + "_" + o.pluginId;
                                e.cameraId === yr[r] && (-1 < (n = _r.indexOf(i)) && _r.splice(n, 1), o._isRecording && (delete e.cameraId, "function" == typeof c && c(e), o._isRecording = !1, clearTimeout(a)))
                            }, _r.push(i))
                        }
                    }
                }, {
                    key: "stopRecord",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {},
                            n = _r.indexOf(this._videoTaken); - 1 < n && (_r.splice(n, 1), this._videoTaken = null), this._invokeMethod("stopRecord", t), this._isRecording = !1, clearTimeout(this._timer)
                    }
                }]), n
            }(), Object(w.default)(gr.prototype, "takePhoto", [k.promised], Object.getOwnPropertyDescriptor(gr.prototype, "takePhoto"), gr.prototype), Object(w.default)(gr.prototype, "setZoom", [k.promised], Object.getOwnPropertyDescriptor(gr.prototype, "setZoom"), gr.prototype), Object(w.default)(gr.prototype, "startRecord", [k.promised], Object.getOwnPropertyDescriptor(gr.prototype, "startRecord"), gr.prototype), Object(w.default)(gr.prototype, "stopRecord", [k.promised], Object.getOwnPropertyDescriptor(gr.prototype, "stopRecord"), gr.prototype), gr);

            function xr(e, t, n) { return new Tr(t, 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "") }
            Object(h.onNativeEvent)("onCameraNeedAuthCancel", function() {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = mr[e + "_" + (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).cameraId];
                t && t.binderror && "function" == typeof y.default.webviewEventCallback && y.default.webviewEventCallback({ data: { type: "error", target: t.target, currentTarget: t.target, timeStamp: Date.now() - t.createdTimeStamp, detail: { msg: "user cancel auth" } }, eventName: t.binderror, webviewId: e, nodeId: t.nodeId }), t && (t.isCancelAuth = !0)
            }), Object(h.onNativeEvent)("onCameraStop", function() {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = mr[e + "_" + (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).cameraId];
                t && t.bindstop && "function" == typeof y.default.webviewEventCallback && y.default.webviewEventCallback({ data: { type: "stop", target: t.target, currentTarget: t.target, timeStamp: Date.now() - t.createdTimeStamp, detail: {} }, eventName: t.bindstop, webviewId: e, nodeId: t.nodeId })
            }), Object(h.onNativeEvent)("onCameraInitDone", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = mr[t + "_" + e.cameraId];
                n && n.bindinitdone && "function" == typeof y.default.webviewEventCallback && y.default.webviewEventCallback({ data: { type: "initdone", target: n.target, currentTarget: n.target, timeStamp: Date.now() - n.createdTimeStamp, detail: { maxZoom: e.maxZoom } }, eventName: n.bindinitdone, webviewId: t, nodeId: n.nodeId })
            }), Object(h.onNativeEvent)("onCameraScanCode", function() {
                var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    r = mr[n + "_" + t.cameraId];
                r && r.bindscancode && "function" == typeof y.default.webviewEventCallback && (e = { data: { type: "scancode", target: r.target, currentTarget: r.target, timeStamp: Date.now() - r.createdTimeStamp, detail: { type: t.type, result: t.result, rawData: t.rawData, charSet: t.charSet, scanArea: t.scanArea } }, eventName: r.bindscancode, webviewId: n, nodeId: r.nodeId }, "barcode" === t.type && (delete e.data.detail.rawData, delete e.data.detail.charSet), y.default.webviewEventCallback(e))
            });
            var Er, Dr = function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {};
                Object(m.beforeInvoke)("setKeepScreenOn", t, { keepScreenOn: !0 }) && Object(m.invokeMethod)("setKeepScreenOn", t, {})
            };

            function Rr(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(p.default)(r); return t = o ? (e = Object(p.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(d.default)(this, t) } }

            function Br(t, e) { var n, r = Object.keys(t); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, n)), r }

            function Fr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Br(Object(n), !0).forEach(function(e) { Object(v.default)(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Br(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
                }
                return t
            }
            var Lr = I.IS_DEVTOOLS,
                Nr = {},
                Wr = {},
                Vr = {},
                Ur = new s.EventEmitter2,
                Gr = {},
                qr = new WeakMap,
                Hr = {},
                Kr = ["play", "stop", "mute", "pause", "resume", "requestFullScreen", "exitFullScreen", "snapshot", "exitPictureInPicture", "requestBackgroundPlayback", "exitBackgroundPlayback"],
                zr = Object.assign,
                Jr = {};

            function Qr(e) { Gr[e] || (Gr[e] = !0, Object(S.onBeforeUnloadPage)(e, function(t) { delete Gr[t], Object.keys(Nr).forEach(function(e) { new RegExp("^" + t).test(e) && (delete Wr[t + "_" + Nr[e]], delete Nr[e]) }), Object.keys(Hr).forEach(function(e) { new RegExp("^api_" + t).test(e) ? (delete Wr[t + "_" + Nr[e.substr(4)]], delete Hr[e]) : new RegExp("^SQ_" + t).test(e) && (delete Wr[e.substr(3)], delete Hr[e]) }), delete ao[t], Dr({ keepScreenOn: !1 }) })) }
            Object(m.subscribe)("xWebLivePlayerSupported", function(e, t) {
                var n = e.insert2XWebEnabled,
                    r = e.viewId;
                Jr[t + "_" + r] = n, oo(Jr)
            }), Object(m.subscribe)("updateLivePlayerPictureInPicture", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length ? arguments[1] : void 0;
                Vr.webviewId = t, Vr.playerId = e.playerId
            }), ["xWebLivePlayerInsert", "livePlayerInsert"].forEach(function(e) {
                Object(m.subscribe)(e, function(e, t) {
                    var n = e.viewId,
                        r = e.domId,
                        o = e.playerId,
                        a = e.pluginId,
                        i = e.data,
                        c = e.nodeId,
                        u = Jr[t + "_" + n] ? n : o,
                        s = t + "_" + a + "_" + r + "_";
                    c && c !== __virtualDOM__.getRootNodeId(t) && (s += c), Nr[s] = u, Wr[t + "_" + u] = i || {}, Ur.emit("livePlayerInsert"), Qr(t),
                        function(e) {
                            var t = ao[e];
                            if (ao[e] = [], !t) return;
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                uo(r[0], r[1], r[2])
                            }
                        }(t)
                })
            }), ["xWebLivePlayerRemoved", "livePlayerRemoved"].forEach(function(e) {
                Object(m.subscribe)(e, function(e, t) {
                    var n = e.viewId,
                        r = e.domId,
                        o = e.playerId,
                        a = e.pluginId,
                        i = e.nodeId,
                        c = Jr[t + "_" + n] ? n : o,
                        u = t + "_" + a + "_" + r + "_";
                    i && i !== __virtualDOM__.getRootNodeId(t) && (u += i), delete Nr[u], delete Wr[t + "_" + c];
                    var s = "api_" + t + "_" + a + "_" + r + "_";
                    i && i !== __virtualDOM__.getRootNodeId(t) && (s += i);
                    var l = "SQ_" + t + "_" + c;
                    delete Hr[s], delete Hr[l], Dr({ keepScreenOn: !1 })
                })
            });
            var Xr = function e() { Object(_.default)(this, e) },
                Yr = (Er = function() {
                    function e() {
                        var t = this;
                        Object(_.default)(this, e);
                        var n = this.exportContext = new Xr;
                        Kr.forEach(function(e) { return n[e] = t[e].bind(t) })
                    }
                    return Object(b.default)(e, [{
                        key: "play",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {},
                                n = this._getAppStatus();
                            n === At.AppStatus.BACK_GROUND || n === At.AppStatus.LOCK || (this._invokeMethod("play", [], t), Dr({ keepScreenOn: !0 }))
                        }
                    }, {
                        key: "stop",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("stop", [], t), Dr({ keepScreenOn: !1 })
                        }
                    }, {
                        key: "mute",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("mute", [], t)
                        }
                    }, {
                        key: "pause",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("pause", [], t), Dr({ keepScreenOn: !1 })
                        }
                    }, {
                        key: "resume",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("resume", [], t), Dr({ keepScreenOn: !0 })
                        }
                    }, {
                        key: "requestFullScreen",
                        value: function(e) {
                            var t, n = 0 < arguments.length && void 0 !== e ? e : {},
                                r = this._getPlayerId(),
                                o = this._getWebviewId();
                            Jr[o + "_" + r] ? this._invokeWebviewMethod("xWebLivePlayerRequestFullScreen", { direction: n.direction }, n) : (t = n.direction, -1 < [0, 90, -90].indexOf(t) ? this._invokeMethod("requestFullScreen", [t], n) : this._invokeMethod("requestFullScreen", [], n), qr.set(this, !0))
                        }
                    }, {
                        key: "exitFullScreen",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {},
                                n = this._getPlayerId(),
                                r = this._getWebviewId();
                            Jr[r + "_" + n] ? this._invokeWebviewMethod("xWebLivePlayerExitFullScreen", [], t) : (this._invokeMethod("exitFullScreen", [], t), this.showStatusBar(), qr.set(this, !1))
                        }
                    }, {
                        key: "exitPictureInPicture",
                        value: function(e) {
                            var t, n = 0 < arguments.length && void 0 !== e ? e : {};
                            Vr && (t = Object(m.invokeMethodWithPlugin)(this.pluginId), I.IS_IOS ? t("operateLivePlayer", Fr(Fr({}, n), {}, { type: "exitPictureInPicture", livePlayerId: Vr.playerId }), { beforeAll: function(e) { e.errMsg = e.errMsg.replace("operateLivePlayer", "exitPictureInPicture") } }) : I.IS_ANDROID && t("operateXWebLivePlayer", Fr(Fr({}, n), {}, { type: "exitPictureInPicture", viewId: Vr.playerId }), { beforeAll: function(e) { e.errMsg = e.errMsg.replace("operateXWebLivePlayer", "exitPictureInPicture") } }))
                        }
                    }, {
                        key: "showStatusBar",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            Object(m.invokeMethod)("showStatusBar", t)
                        }
                    }, {
                        key: "hideStatusBar",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            if (!qr.get(this)) { var n = "hideStatusBar:fail cannot be invoked but in fullscreen."; return "function" == typeof t.fail && t.fail({ errMsg: n }), void("function" == typeof t.complete && t.complete({ errMsg: n })) }
                            Object(m.invokeMethod)("hideStatusBar", t)
                        }
                    }, {
                        key: "snapshot",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            if (Lr) return console.warn("开发者工具暂不支持 LivePlayerContext.snapshot 接口，请到客户端调试。"), void("function" != typeof t.fail && "function" != typeof t.complete || (t.fail || t.complete)({ errMsg: "operateLivePlayer:fail not support in devtools" }));
                            this._invokeMethod("snapshot", [], zr({ quality: "raw" }, t))
                        }
                    }, {
                        key: "requestBackgroundPlayback",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("requestBackgroundPlayback", [], t)
                        }
                    }, {
                        key: "exitBackgroundPlayback",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this._invokeMethod("exitBackgroundPlayback", [], t)
                        }
                    }, {
                        key: "_invokeMethodWithId",
                        value: function(n, r, o, a) {
                            var e = this,
                                t = this._getPlayerId(),
                                i = this._getWebviewId(),
                                c = Jr[i + "_" + t],
                                u = c ? "operateXWebLivePlayer" : "operateLivePlayer";
                            "number" == typeof n ? (Lr && (a.type = r, a.playerId = n, Object(m.publish)("operateLivePlayer", a, [this.webviewId])), function() {
                                var e = c ? { viewId: n } : { livePlayerId: n },
                                    t = Object(m.invokeMethodWithPlugin)(this.pluginId);
                                this._getAppStatus() === At.AppStatus.BACK_GROUND && "stop" === r && (u += "Background"), t(u, zr({}, a, Fr({ data: o, type: r }, e)))
                            }.apply(this)) : Ur.once("livePlayerInsert", function() { e._invokeMethod(r, o, a) })
                        }
                    }, { key: "_getAppStatus", value: function() { return y.default.appStatus } }, { key: "_getHanged", value: function() { return y.default.hanged } }, { key: "_getPlayerId", value: function() {} }, { key: "_getWebviewId", value: function() {} }]), e
                }(), Object(w.default)(Er.prototype, "play", [k.promised], Object.getOwnPropertyDescriptor(Er.prototype, "play"), Er.prototype), Object(w.default)(Er.prototype, "stop", [k.promised], Object.getOwnPropertyDescriptor(Er.prototype, "stop"), Er.prototype), Object(w.default)(Er.prototype, "mute", [k.promised], Object.getOwnPropertyDescriptor(Er.prototype, "mute"), Er.prototype), Object(w.default)(Er.prototype, "pause", [k.promised], Object.getOwnPropertyDescriptor(Er.prototype, "pause"), Er.prototype), Object(w.default)(Er.prototype, "resume", [k.promised], Object.getOwnPropertyDescriptor(Er.prototype, "resume"), Er.prototype), Object(w.default)(Er.prototype, "requestFullScreen", [k.promised], Object.getOwnPropertyDescriptor(Er.prototype, "requestFullScreen"), Er.prototype), Object(w.default)(Er.prototype, "exitFullScreen", [k.promised], Object.getOwnPropertyDescriptor(Er.prototype, "exitFullScreen"), Er.prototype), Object(w.default)(Er.prototype, "exitPictureInPicture", [k.promised], Object.getOwnPropertyDescriptor(Er.prototype, "exitPictureInPicture"), Er.prototype), Object(w.default)(Er.prototype, "snapshot", [k.promised], Object.getOwnPropertyDescriptor(Er.prototype, "snapshot"), Er.prototype), Object(w.default)(Er.prototype, "requestBackgroundPlayback", [k.promised], Object.getOwnPropertyDescriptor(Er.prototype, "requestBackgroundPlayback"), Er.prototype), Object(w.default)(Er.prototype, "exitBackgroundPlayback", [k.promised], Object.getOwnPropertyDescriptor(Er.prototype, "exitBackgroundPlayback"), Er.prototype), Er),
                Zr = function(e) {
                    Object(f.default)(i, e);
                    var a = Rr(i);

                    function i(e, t, n, r) { var o; if (Object(_.default)(this, i), o = a.call(this), "string" != typeof e) throw new l.ThirdScriptError("Parameter 1 should be a string"); return o.domId = e, o.webviewId = t, o.nodeId = n, o.pluginId = r, o }
                    return Object(b.default)(i, [{
                        key: "_invokeMethod",
                        value: function(e, t, n) {
                            var r = this.webviewId + "_" + this.pluginId + "_" + this.domId + "_" + this.nodeId,
                                o = Nr[r];
                            this._invokeMethodWithId(o, e, t, n)
                        }
                    }, { key: "_getPlayerId", value: function() { var e = this.webviewId + "_" + this.pluginId + "_" + this.domId + "_" + this.nodeId; return Nr[e] } }, { key: "_getWebviewId", value: function() { return this.webviewId } }, {
                        key: "_invokeWebviewMethod",
                        value: function(e, t, n) {
                            var r = this.webviewId + "_" + this.pluginId + "_" + this.domId + "_" + this.nodeId,
                                o = Nr[r];
                            "function" == typeof n.success && setTimeout(function() { n.success({ errMsg: "operateLivePlayer:ok" }) }, 0), "function" == typeof n.complete && setTimeout(function() { n.complete({ errMsg: "operateLivePlayer:ok" }) }, 0), Object(m.publish)(e, Fr({ viewId: o }, t), [this.webviewId])
                        }
                    }]), i
                }(Yr),
                $r = function(e) {
                    Object(f.default)(a, e);
                    var o = Rr(a);

                    function a(e, t, n) { var r; return Object(_.default)(this, a), (r = o.call(this)).playerId = e, r.webviewId = t, r.pluginId = n, r }
                    return Object(b.default)(a, [{
                        key: "_invokeMethod",
                        value: function(e, t, n) {
                            var r = this.playerId;
                            this._invokeMethodWithId(r, e, t, n)
                        }
                    }, { key: "_getPlayerId", value: function() { return this.playerId } }, { key: "_getWebviewId", value: function() { return this.webviewId } }, { key: "_invokeWebviewMethod", value: function(e, t, n) { "function" == typeof n.success && setTimeout(function() { n.success({ errMsg: "operateLivePlayer:ok" }) }, 0), "function" == typeof n.complete && setTimeout(function() { n.complete({ errMsg: "operateLivePlayer:ok" }) }, 0), Object(m.publish)(e, Fr({ viewId: this.playerId }, t), [this.webviewId]) } }]), a
                }(Yr);

            function eo(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                    r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "",
                    o = "api_" + t + "_" + r + "_" + e + "_";
                if (n && n !== __virtualDOM__.getRootNodeId(t) && (o += n), Hr[o]) return Hr[o].exportContext;
                var a = new Zr(e, t, n, r);
                return (Hr[o] = a).exportContext
            }

            function to(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                    r = "SQ_" + t + "_" + e;
                if (Hr[r]) return Hr[r].exportContext;
                var o = new $r(e, t, n);
                return (Hr[r] = o).exportContext
            }

            function no(t, e) { var n, r = Object.keys(t); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, n)), r }
            var ro = {},
                oo = function(e) { ro = e },
                ao = {},
                io = { onLivePlayerEvent: "bindstatechange", onLivePlayerNetStatus: "bindnetstatus", onLivePlayerAudioVolume: "bindaudiovolumenotify", onLivePlayerBackgroundPlaybackChange: "bindbackgroundplaybackchange" },
                co = { onXWebLivePlayerEvent: "bindstatechange", onXWebLivePlayerNetStatus: "bindnetstatus", onXWebLivePlayerAudioVolume: "bindaudiovolumenotify", onXWebLivePlayerBackgroundPlaybackChange: "bindbackgroundplaybackchange" };

            function uo(e, t, n) {
                if (t) {
                    2004 === t.errCode && Dr({ keepScreenOn: !0 });
                    var r, o = ro[n + "_" + t.viewId],
                        a = o ? t.viewId : t.livePlayerId,
                        i = Wr[n + "_" + a],
                        c = o ? co[e] : io[e],
                        u = {};
                    switch (e) {
                        case "onLivePlayerEvent":
                        case "onXWebLivePlayerEvent":
                            u.code = t.errCode, u.message = t.errMsg, Object(m.publish)("onLivePlayerStateChange" + t.livePlayerId, { code: t.errCode }, [n]);
                            break;
                        case "onLivePlayerNetStatus":
                        case "onXWebLivePlayerNetStatus":
                            t.info = t.info || {}, u.info = { videoBitrate: t.info.VIDEO_BITRATE, audioBitrate: t.info.AUDIO_BITRATE, videoFPS: t.info.VIDEO_FPS, videoGOP: t.info.VIDEO_GOP, netSpeed: t.info.NET_SPEED, netQualityLevel: t.info.NET_QUALITY_LEVEL, netJitter: t.info.NET_JITTER, videoWidth: t.info.VIDEO_WIDTH, videoHeight: t.info.VIDEO_HEIGHT }, Object(m.publish)("onLivePlayerNetStatusChange" + t.livePlayerId, { info: u.info }, [n]);
                            break;
                        case "onLivePlayerAudioVolume":
                        case "onXWebLivePlayerAudioVolume":
                            u.volume = t.volume;
                            break;
                        case "onLivePlayerBackgroundPlaybackChange":
                        case "onXWebLivePlayerBackgroundPlaybackChange":
                            u.playInBackground = t.playInBackground
                    }
                    if (!i) return ao[n] = ao[n] || [], void ao[n].push([e, t, n]);
                    !o || "onXWebLivePlayerEvent" !== e && "onXWebLivePlayerNetStatus" !== e || (r = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? no(Object(n), !0).forEach(function(e) { Object(v.default)(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : no(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
                        }
                        return t
                    }({}, t.info), "onXWebLivePlayerEvent" === e && (r = { code: t.errCode, message: t.errMsg }), Object(m.publish)("xWebLivePlayerStateChange", { type: e, detail: { info: r }, viewId: t.viewId }, [n])), i.handlers[c] && "function" == typeof y.default.webviewEventCallback && (o && "onXWebLivePlayerEvent" === e && t && -9999999 === t.errCode || y.default.webviewEventCallback({ data: { type: c.replace("bind", ""), target: i.target, currentTarget: i.target, timeStamp: Date.now() - i.createdTimeStamp, touches: [], detail: u }, eventName: i.handlers[c], webviewId: n, nodeId: i.nodeId }))
                }
            }
            var so;
            ["onLivePlayerEvent", "onLivePlayerNetStatus", "onLivePlayerAudioVolume", "onLivePlayerBackgroundPlaybackChange"].concat(["onXWebLivePlayerEvent", "onXWebLivePlayerNetStatus", "onXWebLivePlayerAudioVolume", "onXWebLivePlayerBackgroundPlaybackChange"]).forEach(function(e) { Object(h.onNativeEvent)(e, function() { uo(e, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, 1 < arguments.length ? arguments[1] : void 0) }) }), Object(m.subscribe)("xWebLivePlayerFullScreenEvent", function(e, t) {
                var n = e.viewId,
                    r = e.data,
                    o = Wr[t + "_" + n];
                o && o.handlers.bindfullscreenchange && "function" == typeof y.default.webviewEventCallback && y.default.webviewEventCallback({ data: { type: "fullscreenchange", target: o.target, currentTarget: o.target, timeStamp: Date.now() - o.createdTimeStamp, touches: [], detail: { fullScreen: r.fullScreen, direction: 0 === r.direction || 180 === r.direction || "vertical" === r.direction ? "vertical" : "horizontal" } }, eventName: o.handlers.bindfullscreenchange, webviewId: t, nodeId: o.nodeId })
            }), Object(h.onNativeEvent)("onLivePlayerFullScreenChange", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length ? arguments[1] : void 0;
                Object(m.publish)("videoFullScreenChange", e, [t]), Object(m.publish)("videoFullScreenChange" + e.livePlayerId, { fullScreen: e.fullScreen }, [t]);
                var n = Wr[t + "_" + e.livePlayerId];
                n && n.handlers.bindfullscreenchange && "function" == typeof y.default.webviewEventCallback && y.default.webviewEventCallback({ data: { type: "fullscreenchange", target: n.target, currentTarget: n.target, timeStamp: Date.now() - n.createdTimeStamp, touches: [], detail: { fullScreen: e.fullScreen, direction: 0 === e.direction || 180 === e.direction || "vertical" === e.direction ? "vertical" : "horizontal" } }, eventName: n.handlers.bindfullscreenchange, webviewId: t, nodeId: n.nodeId })
            }), Object(h.onNativeEvent)("onEnterLivePlayerPictureInPicture", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = Vr.webviewId,
                    n = Wr[t + "_" + e.livePlayerId];
                n && n.handlers.bindenterpictureinpicture && "function" == typeof y.default.webviewEventCallback && y.default.webviewEventCallback({ data: { type: "enterpictureinpicture", target: n.target, currentTarget: n.target, timeStamp: Date.now() - n.createdTimeStamp, touches: [], detail: {} }, eventName: n.handlers.bindenterpictureinpicture, webviewId: t, nodeId: n.nodeId })
            }), Object(h.onNativeEvent)("onLeaveLivePlayerPictureInPicture", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = Vr.webviewId,
                    n = Wr[t + "_" + e.livePlayerId];
                n && n.handlers.bindleavepictureinpicture && "function" == typeof y.default.webviewEventCallback && y.default.webviewEventCallback({ data: { type: "leavepictureinpicture", target: n.target, currentTarget: n.target, timeStamp: Date.now() - n.createdTimeStamp, touches: [], detail: {} }, eventName: n.handlers.bindleavepictureinpicture, webviewId: t, nodeId: n.nodeId })
            });
            var lo = ae.default.useXWebLive,
                fo = I.IS_ANDROID && lo;
            Object(m.subscribe)("xWebLivePusherSupported", function(e) {
                var t = e.enforcedXWebLive,
                    n = e.canInsert2XWeb;
                fo = t || n, Oo({ enforcedXWebLive: t, canInsert2XWeb: n })
            });
            var po = {},
                ho = {},
                vo = new s.EventEmitter2,
                go = {},
                bo = Object.assign;

            function yo(e) { go[e] || (go[e] = !0, Object(S.onBeforeUnloadPage)(e, function(t) { delete go[t], Object.keys(po).forEach(function(e) { new RegExp("^" + t).test(e) && (delete ho[t + "_" + po[e]], delete po[e]) }), delete jo[t] })) }

            function mo(e, t) {
                var n, r, o, a = this,
                    i = this.webviewId + "_" + this.pluginId;
                "number" == typeof po[i] ? (fo ? t.viewId = po[i] : t.livePusherId = po[i], t.type = e, n = e, r = t, o = this.pluginId, I.IS_DEVTOOLS ? console.warn("开发者工具暂不支持调用 LivePusherContext." + n + " 方法") : Object(m.invokeMethodWithPlugin)(o)(fo ? "operateXWebLivePusher" : "operateLivePusher", r)) : vo.once("livePusherInserted", function() { mo.call(a, e, t) })
            }["xWebLivePusherInserted", "livePusherInserted"].forEach(function(e) {
                Object(m.subscribe)(e, function(e, t) {
                    var n = e.viewId,
                        r = e.pusherId,
                        o = e.pluginId,
                        a = e.data,
                        i = fo ? n : r;
                    po[t + "_" + o] = i, ho[t + "_" + i] = a, vo.emit("livePusherInserted"), yo(t),
                        function(e) {
                            var t = jo[e];
                            if (jo[e] = [], !t) return;
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                Po(r[0], r[1], r[2])
                            }
                        }(t)
                })
            }), ["xWebLivePusherRemoved", "livePusherRemoved"].forEach(function(e) {
                Object(m.subscribe)(e, function(e, t) {
                    var n = e.viewId,
                        r = e.pusherId,
                        o = e.pluginId,
                        a = fo ? n : r;
                    delete po[t + "_" + o], delete ho[t + "_" + a]
                })
            });
            var wo = (so = function() {
                function n(e, t) { Object(_.default)(this, n), this.webviewId = e, this.pluginId = t }
                return Object(b.default)(n, [{
                    key: "start",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        mo.call(this, "start", t)
                    }
                }, {
                    key: "stop",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        mo.call(this, "stop", t)
                    }
                }, {
                    key: "pause",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        mo.call(this, "pause", t)
                    }
                }, {
                    key: "resume",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        mo.call(this, "resume", t)
                    }
                }, {
                    key: "switchCamera",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        mo.call(this, "switchCamera", t)
                    }
                }, {
                    key: "snapshot",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        mo.call(this, "snapshot", bo({ quality: "raw" }, t))
                    }
                }, {
                    key: "toggleTorch",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        mo.call(this, "toggleTorch", t)
                    }
                }, {
                    key: "playBGM",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(m.beforeInvoke)("LivePusherContext.playBGM", t, { url: "" }) && mo.call(this, "playBGM", t)
                    }
                }, {
                    key: "stopBGM",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        mo.call(this, "stopBGM", t)
                    }
                }, {
                    key: "pauseBGM",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        mo.call(this, "pauseBGM", t)
                    }
                }, {
                    key: "resumeBGM",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        mo.call(this, "resumeBGM", t)
                    }
                }, {
                    key: "setBGMVolume",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(m.beforeInvoke)("LivePusherContext.setBGMVolume", t, { volume: 0 }) && mo.call(this, "setBGMVolume", t)
                    }
                }, {
                    key: "setMICVolume",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        Object(m.beforeInvoke)("LivePusherContext.setMICVolume", t, { volume: 0 }) && mo.call(this, "setMICVolume", t)
                    }
                }, {
                    key: "startPreview",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        mo.call(this, "startPreview", t)
                    }
                }, {
                    key: "stopPreview",
                    value: function(e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                        mo.call(this, "stopPreview", t)
                    }
                }]), n
            }(), Object(w.default)(so.prototype, "start", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "start"), so.prototype), Object(w.default)(so.prototype, "stop", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "stop"), so.prototype), Object(w.default)(so.prototype, "pause", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "pause"), so.prototype), Object(w.default)(so.prototype, "resume", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "resume"), so.prototype), Object(w.default)(so.prototype, "switchCamera", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "switchCamera"), so.prototype), Object(w.default)(so.prototype, "snapshot", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "snapshot"), so.prototype), Object(w.default)(so.prototype, "toggleTorch", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "toggleTorch"), so.prototype), Object(w.default)(so.prototype, "playBGM", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "playBGM"), so.prototype), Object(w.default)(so.prototype, "stopBGM", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "stopBGM"), so.prototype), Object(w.default)(so.prototype, "pauseBGM", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "pauseBGM"), so.prototype), Object(w.default)(so.prototype, "resumeBGM", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "resumeBGM"), so.prototype), Object(w.default)(so.prototype, "setBGMVolume", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "setBGMVolume"), so.prototype), Object(w.default)(so.prototype, "setMICVolume", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "setMICVolume"), so.prototype), Object(w.default)(so.prototype, "startPreview", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "startPreview"), so.prototype), Object(w.default)(so.prototype, "stopPreview", [k.promised], Object.getOwnPropertyDescriptor(so.prototype, "stopPreview"), so.prototype), so);

            function _o(e, t, n) { return new wo(t, 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "") }

            function ko(t, e) { var n, r = Object.keys(t); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, n)), r }
            var So = ae.default.useXWebLive,
                Io = I.IS_ANDROID && So,
                Oo = function(e) {
                    var t = e.enforcedXWebLive,
                        n = e.canInsert2XWeb;
                    Io = t || n
                },
                Ao = { onLivePusherEvent: "bindstatechange", onLivePusherNetStatus: "bindnetstatus", onLivePusherBGMStart: "bindbgmstart", onLivePusherBGMProgress: "bindbgmprogress", onLivePusherBGMComplete: "bindbgmcomplete", onLivePusherError: "binderror", onLivePusherAudioVolume: "bindaudiovolumenotify" },
                Co = { onXWebLivePusherEvent: "bindstatechange", onXWebLivePusherNetStatus: "bindnetstatus", onXWebLivePusherBGMStart: "bindbgmstart", onXWebLivePusherBGMProgress: "bindbgmprogress", onXWebLivePusherBGMComplete: "bindbgmcomplete", onXWebLivePusherError: "binderror", onXWebLivePusherAudioVolume: "bindaudiovolumenotify" },
                jo = {};

            function Po(e, t, n) {
                var r, o = Io ? t.viewId : t.livePusherId,
                    a = ho[n + "_" + o],
                    i = Io ? Co[e] : Ao[e],
                    c = {};
                switch (e) {
                    case "onLivePusherEvent":
                    case "onXWebLivePusherEvent":
                        c.code = t.errCode, c.message = t.errMsg, Object(m.publish)("onLivePusherStateChange" + t.livePusherId, { code: t.errCode }, [n]);
                        break;
                    case "onLivePusherNetStatus":
                    case "onXWebLivePusherNetStatus":
                        t.info = t.info || {}, c.info = { videoBitrate: t.info.VIDEO_BITRATE, audioBitrate: t.info.AUDIO_BITRATE, videoFPS: t.info.VIDEO_FPS, videoGOP: t.info.VIDEO_GOP, netSpeed: t.info.NET_SPEED, netQualityLevel: t.info.NET_QUALITY_LEVEL, videoWidth: t.info.VIDEO_WIDTH, videoHeight: t.info.VIDEO_HEIGHT }, Object(m.publish)("onLivePusherNetStatusChagne" + t.livePusherId, { info: c.info }, [n]);
                        break;
                    case "onLivePusherBGMProgress":
                    case "onXWebLivePusherBGMProgress":
                        c.progress = t.progress, c.duration = t.duration;
                        break;
                    case "onLivePusherBGMComplete":
                    case "onXWebLivePusherBGMComplete":
                        c.errCode = t.errCode;
                        break;
                    case "onLivePusherError":
                    case "onXWebLivePusherError":
                        c.errCode = t.errCode, c.errMsg = t.errMsg, c.data = t.data, Object(m.publish)("onLivePusherError" + t.livePusherId, { errcode: t.errcode }, [n]);
                        break;
                    case "onLivePusherAudioVolume":
                    case "onXWebLivePusherAudioVolume":
                        c.volume = t.volume
                }
                if (!a) return jo[n] = jo[n] || [], void jo[n].push([e, t, n]);
                !Io || "onXWebLivePusherEvent" !== e && "onXWebLivePusherNetStatus" !== e || (r = function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ko(Object(n), !0).forEach(function(e) { Object(v.default)(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ko(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
                    }
                    return t
                }({}, t.info), "onXWebLivePusherEvent" === e && (r = { code: t.errCode, message: t.errMsg }), Object(m.publish)("xWebLivePusherStateChange", { type: e, detail: { info: r }, viewId: t.viewId }, [n])), a.handlers[i] && "function" == typeof y.default.webviewEventCallback && (Io && "onXWebLivePusherEvent" === e && t && -9999999 === t.errCode || y.default.webviewEventCallback({ data: { type: i.replace("bind", ""), target: a.target, currentTarget: a.target, timeStamp: Date.now() - a.createdTimeStamp, touches: [], detail: c }, eventName: a.handlers[i], webviewId: n, nodeId: a.nodeId }))
            }["onLivePusherEvent", "onLivePusherNetStatus", "onLivePusherBGMStart", "onLivePusherBGMProgress", "onLivePusherBGMComplete", "onLivePusherError", "onLivePusherAudioVolume"].concat(["onXWebLivePusherEvent", "onXWebLivePusherNetStatus", "onXWebLivePusherBGMStart", "onXWebLivePusherBGMProgress", "onXWebLivePusherBGMComplete", "onXWebLivePusherError", "onXWebLivePusherAudioVolume"]).forEach(function(e) { Object(h.onNativeEvent)(e, function() { Po(e, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0) }) });
            var Mo = {},
                To = new s.EventEmitter2,
                xo = {};
            Object(m.subscribe)("audioInsert", function(e, t) {
                var n, r = e.audioId,
                    o = e.pluginId,
                    a = e.nodeId,
                    i = t + "_" + o + "_" + r + "_";
                a && a !== __virtualDOM__.getRootNodeId(t) && (i += a), Mo[i] = !0, To.emit("audioInsert_" + i), xo[n = t] || (xo[n] = !0, Object(S.onBeforeUnloadPage)(n, function(t) { delete xo[t], Object.keys(Mo).forEach(function(e) { new RegExp("^" + t).test(e) && delete Mo[e] }) }))
            }), Object(m.subscribe)("audioRemove", function(e, t) {
                var n = e.audioId,
                    r = e.pluginId,
                    o = e.nodeId,
                    a = t + "_" + r + "_" + n + "_";
                o && o !== __virtualDOM__.getRootNodeId(t) && (a += o), delete Mo[a]
            });
            var Eo = function() {
                function o(e, t, n, r) {
                    if (Object(_.default)(this, o), "string" != typeof e) throw new l.ThirdScriptError("Parameter 1 should be a string");
                    this.audioId = e, this.webviewId = t, this.pluginId = r, this.nodeId = n
                }
                return Object(b.default)(o, [{ key: "setSrc", value: function(e) { this._sendAction({ method: "setSrc", data: e }) } }, { key: "play", value: function() { this._getAppStatus() === At.AppStatus.BACK_GROUND || this._sendAction({ method: "play" }) } }, { key: "pause", value: function() { this._sendAction({ method: "pause" }) } }, { key: "seek", value: function(e) { this._sendAction({ method: "setCurrentTime", data: e }) } }, {
                    key: "_ready",
                    value: function(e) {
                        var t = this.webviewId + "_" + this.pluginId + "_" + this.audioId + "_" + this.nodeId;
                        Mo[t] ? e() : To.on("audioInsert_" + t, function() { e() })
                    }
                }, {
                    key: "_sendAction",
                    value: function(e) {
                        var t = this;
                        this._ready(function() { Object(m.publish)("audio_" + t.pluginId + "_" + t.audioId + "_" + t.nodeId + "_actionChanged", e, [t.webviewId]) })
                    }
                }]), o
            }();

            function Do(e, t) { var n = new Eo(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "", 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : ""); return n._getAppStatus = function() { return y.default.appStatus }, n._getHanged = function() { return y.default.hanged }, He.call(this, function() { n.pause() }), n }
            n(47), n(38);
            n(63);
            var Ro = new s.default;
            Object(m.onMethod)("onRecorderStateChange", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.state;
                delete e.state, Ro.emit("onRecorderStateChange_" + t, e)
            });
            var Bo, Fo = new(n(43).Emitter)("BackgroundAudioManager", !0),
                Lo = wxNativeConsole.createLogger("BackgroundAudioManager"),
                No = { src: "", currentTime: 0, duration: 0, paused: !0, buffered: 0, title: "", coverImgUrl: "", description: "", startTime: 0, playbackRate: 1, referrerPolicy: "" };
            Object(m.onMethod)("onBackgroundAudioNext", function() { Fo.emit("Next") }), Object(m.onMethod)("onBackgroundAudioPrev", function() { Fo.emit("Prev") }), Object(m.onMethod)("onBackgroundAudioStateChange", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.state;
                delete e.state, "play" === t ? (No.paused = !1, y.default.possessingBackgroundAudioPlayer = !0) : "preempted" === t || "occupied" === t ? (y.default.possessingBackgroundAudioPlayer = !1, Fo.emit("Stop", e)) : "pause" !== t && "stop" !== t || (No.paused = !0), Fo.emit("" + t[0].toUpperCase() + t.substr(1), e)
            });
            var Wo = {
                play: function() { setTimeout(function() { Vo({ operationType: "play" }) }, 0) },
                pause: function() { setTimeout(function() { Vo({ operationType: "pause" }) }, 0) },
                seek: function(e) {
                    if ("number" != typeof e) throw new Error("BackgroundAudioManager.seek(currentTime): unexpected type " + Object(ce.default)(e));
                    setTimeout(function() { Vo({ currentTime: e, operationType: "seek" }) }, 0)
                },
                stop: function() { setTimeout(function() { Vo({ operationType: "stop" }) }, 0) },
                onTimeUpdate: function(e) {
                    var t = this;
                    void 0 === Bo && (Bo = setInterval(function() {
                        var e = No.currentTime;
                        Uo("currentTime", function() { "active" === y.default.runningStatus && !1 !== y.default.possessingBackgroundAudioPlayer && t.currentTime !== e && Fo.emit("Timeupdate") })
                    }, 250)), Fo.off("Timeupdate"), Fo.on("Timeupdate", e)
                }
            };

            function Vo(e) { Object(m.invokeMethod)("operateBackgroundAudio", e) }["src", "title", "epname", "singer", "startTime", "coverImgUrl", "currentTime", "duration", "paused", "buffered", "webUrl", "protocol", "playbackRate", "referrerPolicy"].forEach(function(n) { Object.defineProperty(Wo, n, { get: function() { return "src" === n && Wo.srcCloudId ? Wo.srcCloudId : "coverImgUrl" === n && Wo.coverCloudId ? Wo.coverCloudId : Uo(n) }, set: function(t) {-1 < ["src", "title", "epname", "singer", "coverImgUrl", "startTime", "webUrl", "protocol", "playbackRate", "referrerPolicy"].indexOf(n) && ("src" === n ? C([t], "audio", function(e) { /^(cloud):\/\//.test(t) ? Wo.srcCloudId = t : Wo.srcCloudId = "", qo(n, e.data[0].url) }) : "coverImgUrl" === n ? C([t], "image", function(e) { /^(cloud):\/\//.test(t) ? Wo.coverCloudId = t : Wo.coverCloudId = "", qo(n, e.data[0].url) }) : qo(n, t)) } }) });

            function Uo(t, n) {
                if (!1 !== y.default.possessingBackgroundAudioPlayer) {
                    var r = No[t];
                    return Object(m.invokeMethod)("getBackgroundAudioState", {
                        success: function(e) { void 0 === e.paused || !0 === e.paused ? e.paused = !0 : e.paused = !1, No = Object.assign(No, e), r = No[t], "function" == typeof n && n(r) },
                        fail: function(e) {
                            var t = e.errMsg;
                            Lo.error("getBackgroundAudioState fail: " + t)
                        }
                    }), r
                }
            }["Canplay", "Waiting", "Error", "Play", "Pause", "Seeking", "Seeked", "Ended", "Stop", "Next", "Prev"].forEach(function(t) { Wo["on" + t] = function(e) { Fo.off(t), Fo.on(t, e) } });
            var Go = {};

            function qo(e, t) {
                if ("src" === e && !t) throw new Error("invalid BackgroundAudioManager.src: " + t);
                if ("active" !== y.default.runningStatus && !1 === y.default.possessingBackgroundAudioPlayer) throw new l.AppServiceSdkKnownError("Can not set BackgroundAudioManager." + e + ", background audio is preempted.");
                Go[e] = t, 1 === Object.keys(Go).length && setTimeout(function() {
                    Object.assign(No, Go), Go = (No.src && No.title && (Lo.log("setBackgroundAudioState, stateInstance:", No), Object(m.invokeMethod)("setBackgroundAudioState", Object.assign({}, No, {
                        fail: function(e) {
                            var t = e.errMsg;
                            Lo.error(t), Fo.emit("Error", { errMsg: t.replace(/^setBackgroundAudioState: fail /, "") })
                        }
                    }))), {})
                }, 0)
            }
            var Ho = new s.default;
            Object(m.onMethod)("onMusicPlay", function() { y.default.possessingBackgroundAudioPlayer = !0, Ho.emit("onBackgroundAudioPlay") });
            wxNativeConsole.createLogger("MediaAudioPlayerJsApi"), new WeakMap;
            wxNativeConsole.createLogger("MediaAudioPlayerBinding"), new WeakMap;
            var Ko = null,
                zo = !1;
            Ee(function() { zo = !0 }), dt(function() { zo = !1, Ko && (Jo(Ko), Ko = null) });
            var Jo = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    t.type || (t.type = "all"), void 0 === t.count && (t.count = 100), Object(ee.beforeInvoke)("chooseMessageFile", t, { type: "", count: 0 }) && (t.count <= 0 ? Object(ee.beforeInvokeFail)("chooseMessageFile", t, "param count should be larger than 0.") : void 0 === t.extension || "[object Array]" === Object.prototype.toString.call(t.extension) ? !t.extension || t.extension.length ? (100 < t.count && (t.count = 100), zo ? Ko = t : Object(ee.invokeMethod)("chooseMessageFile", t)) : Object(ee.beforeInvokeFail)("chooseMessageFile", t, "param extension should not be empty.") : Object(ee.beforeInvokeFail)("chooseMessageFile", t, "param extension should be Array."))
                },
                Qo = Object(ge.getEventManager)("AudioInterruptionBegin"),
                Xo = (Qo.onMethod, Qo.offMethod, Qo.internalOnMethod, Qo.internalOffMethod, Object(ge.getEventManager)("AudioInterruptionEnd")),
                Yo = (Xo.onMethod, Xo.offMethod, Xo.internalOnMethod, Xo.internalOffMethod, !1);
            Object(m.onMethod)("onAudioInterruptionBegin", function(e) { wxNativeConsole.info("onAudioInterruptionBegin"), !!0 === Yo && Qo.emit(e) }), Object(m.onMethod)("onAudioInterruptionEnd", function(e) { wxNativeConsole.info("onAudioInterruptionEnd"), !1 === Yo && Xo.emit(e) });

            function Zo() { return Yo }
            Object.assign, new WeakMap, new WeakMap;
            n(79), n(80), Object.assign;
            var $o = n(37),
                ea = n(71),
                ta = new WeakMap,
                na = new WeakMap,
                ra = new WeakMap,
                oa = new WeakMap,
                aa = new WeakMap,
                ia = new WeakMap,
                ca = new WeakMap,
                ua = new Map,
                sa = new Map;
            Hn.default.EventHandler && (Hn.default.EventHandler.onbindingobjectdestruct = function(e) {
                var t = sa[e];
                t && Object(m.invokeMethod)("getAudioState", { audioId: t, success: function(e) {!0 === e.paused ? (ua.delete(t), Object(m.invokeMethod)("destroyAudioInstance", { audioId: t })) : ua.get(t) && !1 === ua.get(t).loop && va.once(t + "_onAudioStateChange_ended", function() { ua.delete(t), Object(m.invokeMethod)("destroyAudioInstance", { audioId: t }) }) } })
            });

            function la(e, t) {
                var n = this;
                ca.get(this).then(function() { da.call(n, e, t) })
            }

            function fa(e) {
                var t = this;
                ca.get(this).then(function() {
                    setTimeout(function() {
                        (function(e) {
                            var t = ta.get(this);
                            Object(m.invokeMethod)("operateAudio", Object.assign({
                                timestamp: Date.now(),
                                audioId: t,
                                fail: function(e) {
                                    var t = e.errMsg;
                                    ma("error", { errMsg: t, errCode: -1 })
                                }
                            }, e))
                        }).call(t, e)
                    }, 0)
                })
            }
            var da = function(t, n) {
                    var r = this;
                    na.set(this, Object.assign(na.get(this), Object(v.default)({}, t, n))), "src" === t && na.set(this, Object.assign(na.get(this), { paused: !0 })), oa.get(this) && (setTimeout(function() {
                        var e = Object.assign({}, na.get(r), aa.get(r), { timestamp: Date.now(), audioId: ta.get(r), success: function() { na.set(r, Object.assign(na.get(r), Object(v.default)({}, t, n))) }, fail: function() { pa.call(r) } });
                        Zo() && (e.autoplay = !1), Object(m.invokeMethod)("setAudioState", e), oa.set(r, !0)
                    }, 0), oa.set(this, !1)), aa.set(this, Object.assign(aa.get(this), Object(v.default)({}, t, n)))
                },
                pa = function(t, n) {
                    var r = this,
                        o = na.get(this)[t];
                    return Object(m.invokeMethod)("getAudioState", { audioId: ta.get(this), success: function(e) { delete e.errMsg, na.set(r, Object.assign(na.get(r), e)), o = e[t], "function" == typeof n && n(o) } }), o
                },
                ha = function() {};
            ae.default.onReady(function() {
                ha = function(e, t, n) {
                    var r = 0 < arguments.length && void 0 !== e ? e : "",
                        o = 1 < arguments.length && void 0 !== t ? t : 0,
                        a = 2 < arguments.length && void 0 !== n ? n : "",
                        i = "";
                    "undefined" != typeof wx && wx.version && wx.version.version && (i = wx.version.version);
                    var c = ae.default.appLaunchInfo,
                        u = "",
                        u = Object.keys(c.query || {}).map(function(e) { return e + "=" + c.query[e] }).join("&");
                    u = encodeURIComponent(u);
                    var s = [Math.round(Date.now() / 1e3), c.scene, "", c.sessionid || c.sessionId, c.path, u, Object($o._getCurrentNetworkType)(), i, 5, o, a, encodeURIComponent(r.substring(0, 1024)).substring(0, 1024), ae.default.appType + 1e3].join(",");
                    Reporter.reportKeyValue({ key: "MediaCompStatus", value: s })
                }
            });
            var va = new s.default;
            Object(m.onMethod)("onAudioStateChange", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                e.state = e.state.toLowerCase();
                var r = e.state,
                    t = e.audioId;
                delete e.audioId, delete e.state;
                var n = "play" !== r,
                    o = ua.get(t);
                o && (o.paused = n), Object(m.invokeMethod)("getAudioState", {
                    audioId: t,
                    success: function(e) {
                        var t = parseInt(e.currentTime / 1e3, 10),
                            n = parseInt(e.duration / 1e3, 10);
                        switch (r) {
                            case "canplay":
                                ha(e.src, 121, [e.autoplay ? 2 : 1, n].join(";"));
                                break;
                            case "waiting":
                                ha(e.src, 122, [t, n, e.buffered].join(";"));
                                break;
                            case "ended":
                                ha(e.src, 123, e.duration);
                                break;
                            case "error":
                                ha(e.src, 124, e.errCode);
                                break;
                            case "seeking":
                                ha(e.src, 125, [t, n, e.buffered].join(";"))
                        }
                    }
                }), va.emit(t + "_onAudioStateChange_" + r, e)
            });

            function ga(t, n) {
                function e(e) { __errorTracer__.surroundThirdByTryCatch(n, "at audioContext.on" + t + " callback function")(e) }
                var r = ta.get(this) + "_onAudioStateChange_" + t;
                ia.set(n, e), va.on(r, e)
            }
            var ba = function(e, t) {
                    var n = this;
                    ca.get(this).then(function() { ga.call(n, e, t) })
                },
                ya = function(e, t) {
                    var n = this;
                    ca.get(this).then(function() {
                        (function(e, t) {
                            var n, r = ta.get(this) + "_onAudioStateChange_" + e;
                            Object(x.isFunction)(t) ? (n = ia.get(t), Object(x.isFunction)(n) && va.off(r, n)) : va.removeAllListeners(r)
                        }).call(n, e, t)
                    })
                },
                ma = function(e, t) { va.emit(ta.get(this) + "_onAudioStateChange_" + e, t) },
                wa = 0,
                _a = !1,
                ka = function() {
                    function t(e) {
                        var r, n, o = this;
                        Object(_.default)(this, t), na.set(this, {}), aa.set(this, {}), ra.set(this, void 0), oa.set(this, !0), ca.set(this, new ea.WxPromise(function(e, t) { r = e, n = t })), Object(m.invokeMethod)(I.IS_ANDROID && Object(be.isGame)() && 654315008 <= ae.default.clientVersion && e ? "createAudioInstanceAsync" : "createAudioInstance", {
                            timestamp: Date.now(),
                            success: function(e) {
                                var t, n = { src: "", startTime: 0, paused: !0, currentTime: 0, duration: 0, obeyMuteSwitch: !0, volume: 1, autoplay: !1, loop: !1, buffered: 0, referrerPolicy: "" };
                                ua.set(e.audioId, n), ta.set(o, e.audioId), na.set(o, n), Hn.default.BindingObject && (t = new Hn.default.BindingObject, o.__bindingObject = t, sa[t.__id] = e.audioId), wa += 1, 1024 <= ++wa && !_a && I.IS_IOS && (_a = !0, Reporter.reportIDKey({ id: 356, key: "audioInstancesCountReach1024" })), setTimeout(r, 0)
                            },
                            fail: function(e) { n(e.errMsg) }
                        }), ["Play", "Pause", "Stop", "Canplay", "Error", "Ended", "Waiting", "Seeking", "Seeked"].forEach(function(t) { o["on" + t] = function(e) { ba.call(o, t.toLowerCase(), e) }, o["off" + t] = function(e) { ya.call(o, t.toLowerCase(), e) } })
                    }
                    return Object(b.default)(t, [{ key: "play", value: function() {!1 === Zo() && fa.call(this, { operationType: "play" }) } }, { key: "pause", value: function() { fa.call(this, { operationType: "pause" }) } }, { key: "stop", value: function() { fa.call(this, { operationType: "stop" }) } }, { key: "seek", value: function(e) { "number" != typeof e || e < 0 ? ma("error", { errMsg: "Failed to seek, the currentTime " + e + " is invalid." }) : fa.call(this, { operationType: "seek", currentTime: 1e3 * e }) } }, {
                        key: "destroy",
                        value: function() {
                            var e = this;
                            ca.get(this).then(function() {
                                var n = ta.get(e);
                                ua.has(n) && (["play", "pause", "stop", "canplay", "error", "ended", "waiting", "seeking", "seeked"].forEach(function(e) {
                                    var t = n + "_onAudioStateChange_" + e;
                                    va.removeAllListeners(t)
                                }), ua.delete(n), --wa, Object(m.invokeMethod)("destroyAudioInstance", { audioId: n }))
                            })
                        }
                    }, {
                        key: "onTimeUpdate",
                        value: function(t) {
                            var r = this;
                            ca.get(this).then(function() {
                                var n = ta.get(r) + "_onAudioStateChange_timeupdate";
                                void 0 === ra.get(r) && ra.set(r, setInterval(function() { var t; "active" === y.default.runningStatus && !0 !== na.get(r).paused && 1 !== na.get(r).paused && (t = na.get(r).currentTime, pa.call(r, "currentTime", function(e) { e !== t && va.emit(n) })) }, 250)), va.removeAllListeners(n);

                                function e(e) { __errorTracer__.surroundThirdByTryCatch(t, "at audioContext.onTimeUpdate callback function")(e) }
                                ia.set(t, e), va.on(n, e)
                            })
                        }
                    }, {
                        key: "offTimeUpdate",
                        value: function(e) {
                            var t = this;
                            ca.get(this).then(function() { ya.call(t, "timeupdate", e) })
                        }
                    }, { key: "src", get: function() { return this.cloudId ? this.cloudId : pa.call(this, "src") }, set: function(t) { var n = this; "string" == typeof t && 0 !== t.length ? C([t], "audio", function(e) { /^(cloud):\/\//.test(t) ? n.cloudId = t : n.cloudId = "", t = e.data[0].url, la.call(n, "src", t) }) : ma.call(this, "error", { errMsg: "Failed to set src, the src " + t + " is invalid." }) } }, { key: "startTime", get: function() { return pa.call(this, "startTime") / 1e3 }, set: function(e) { "number" == typeof e ? la.call(this, "startTime", 1e3 * e) : ma("error", { errMsg: "Failed to set startTime, the startTime " + e + " is invalid." }) } }, { key: "autoplay", set: function(e) { "boolean" == typeof e && la.call(this, "autoplay", e) }, get: function() { return pa.call(this, "autoplay") } }, { key: "loop", set: function(e) { "boolean" == typeof e && la.call(this, "loop", e) }, get: function() { return pa.call(this, "loop") } }, { key: "obeyMuteSwitch", set: function(e) { "boolean" == typeof e && la.call(this, "obeyMuteSwitch", e) }, get: function() { return pa.call(this, "obeyMuteSwitch") } }, { key: "volume", set: function(e) { "number" != typeof e || e < 0 || 1 < e || la.call(this, "volume", e) }, get: function() { return pa.call(this, "volume") } }, { key: "playbackRate", set: function(e) { "number" != typeof e || e < 0 || la.call(this, "playbackRate", e) }, get: function() { return pa.call(this, "playbackRate") } }, { key: "referrerPolicy", set: function(e) { "string" == typeof e && la.call(this, "referrerPolicy", e) }, get: function() { return pa.call(this, "referrerPolicy") } }, { key: "paused", get: function() { return pa.call(this, "paused") } }, { key: "duration", get: function() { return pa.call(this, "duration") / 1e3 } }, { key: "currentTime", get: function() { return pa.call(this, "currentTime") / 1e3 } }, { key: "buffered", get: function() { return pa.call(this, "buffered") / 1e3 } }], [{ key: "pauseAllAudio", value: function() { ua.forEach(function(e, t) { Object(m.invokeMethod)("operateAudio", { timestamp: Date.now(), audioId: t, operationType: "pause" }) }) } }]), t
                }(),
                Sa = ["src", "startTime", "autoplay", "loop", "obeyMuteSwitch", "volume", "playbackRate", "duration", "currentTime", "paused", "buffered", "referrerPolicy"],
                Ia = ["startTime", "duration", "currentTime"],
                Oa = ["Canplay", "Ended", "Error", "Pause", "Play", "Seeked", "Seeking", "Stop", "TimeUpdate", "Waiting"],
                Aa = new Set,
                Ca = new WeakMap,
                ja = new WeakMap,
                Pa = new WeakMap,
                Ma = function() {
                    function t() {
                        var e = this;
                        Object(_.default)(this, t);
                        var r = new Hn.default.Audio,
                            o = new s.default;
                        Ca.set(this, r), Aa.add(this), Sa.forEach(function(t) { return Object.defineProperty(e, t, { get: function() { return Ia.includes(t) ? r[t] / 1e3 : r[t] }, set: function(e) { Ia.includes(t) ? r[t] = 1e3 * e : r[t] = e } }) }), Oa.forEach(function(n) {
                            e["on" + n] = function(e) {
                                var t = __errorTracer__.surroundThirdByTryCatch(e, "at audioContext.on" + n + " callback function");
                                ja.set(e, t), Pa.set(t, e), o.on(n, t)
                            }, e["off" + n] = function(e) {
                                var t;
                                Object(x.isFunction)(e) ? (t = ja.get(e), Object(x.isFunction)(t) && (o.off(n, t), ja.delete(e), Pa.delete(t))) : (o.listeners(n).forEach(function(e) {
                                    var t = Pa.get(e);
                                    ja.delete(t), Pa.delete(e)
                                }), o.removeAllListeners(n))
                            }, r["on" + n.toLowerCase()] = function(e, t) { e ? o.emit(n, { errCode: e, errMsg: t }) : o.emit(n) }
                        })
                    }
                    return Object(b.default)(t, [{ key: "play", value: function() { Ca.get(this).play() } }, { key: "stop", value: function() { Ca.get(this).stop() } }, { key: "pause", value: function() { Ca.get(this).pause() } }, { key: "seek", value: function(e) { Ca.get(this).seek(1e3 * e) } }, {
                        key: "destroy",
                        value: function() {
                            var e = Ca.get(this);
                            e.destroy && e.destroy(), Aa.delete(this), Ca.delete(this)
                        }
                    }], [{
                        key: "pauseAllAudio",
                        value: function() {
                            Aa.forEach(function(e) {
                                var t = Ca.get(e);
                                t && t.pause()
                            })
                        }
                    }]), t
                }(),
                Ta = I.IS_PC && Hn.default.Audio ? Ma : ka,
                xa = function(e) { return new Ta(!(0 < arguments.length && void 0 !== e) || e) };

            function Ea(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(p.default)(r); return t = o ? (e = Object(p.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(d.default)(this, t) } }

            function Da(t, e) { var n, r = Object.keys(t); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, n)), r }

            function Ra(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Da(Object(n), !0).forEach(function(e) { Object(v.default)(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Da(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
                }
                return t
            }
            var Ba = {},
                Fa = {},
                La = {},
                Na = {},
                Wa = 1;
            Object(m.subscribe)("editorInsert", function(e, t) {
                var n, r = e.domId,
                    o = e.editorId,
                    a = e.pluginId,
                    i = e.nodeId,
                    c = t + "_" + a + "_" + r + "_";
                i && i !== __virtualDOM__.getRootNodeId(t) && (c += i), Ba[c] = o, La[n = t] || (La[n] = !0, Object(S.onBeforeUnloadPage)(n, function(t) { delete La[t], Object.keys(Ba).forEach(function(e) { new RegExp("^" + t).test(e) && delete Ba[e] }), Object.keys(Fa).forEach(function(e) { new RegExp("^api_" + t).test(e) && delete Fa[e] }), Object.keys(Fa).forEach(function(e) { new RegExp("^SQ_" + t).test(e) && delete Fa[e] }) }))
            }), Object(m.subscribe)("editorRemoved", function(e, t) {
                var n = e.domId,
                    r = e.editorId,
                    o = e.pluginId,
                    a = e.nodeId,
                    i = t + "_" + o + "_" + n + "_";
                a && a !== __virtualDOM__.getRootNodeId(t) && (i += a), delete Ba[i];
                var c = "SQ_" + t + "_" + r;
                delete Fa["api_" + t + "_" + o + "_" + n + "_" + a], delete Fa[c]
            }), Object(m.subscribe)("doEditorActionCallback", function(e) {
                var t, n = e.callbackId;
                n && void 0 !== Na[n] && (delete e.callbackId, t = Na[n], e.errMsg && (-1 < e.errMsg.indexOf("ok") ? "function" == typeof t.success && t.success(e) : -1 < e.errMsg.indexOf("fail") && "function" == typeof t.fail && t.fail(e)), "function" == typeof t.complete && t.complete(e), delete Na[n])
            });
            var Va = function() {
                function e() { Object(_.default)(this, e) }
                return Object(b.default)(e, [{
                    key: "format",
                    value: function(e, t) {
                        var n = 1 < arguments.length && void 0 !== t && t;
                        this._execCommand("format", { name: e, value: n, needCallBack: !1 })
                    }
                }, { key: "scrollIntoView", value: function() { this._execCommand("scrollIntoView", { needCallBack: !1 }) } }, {
                    key: "_execCommandWithId",
                    value: function(e, t, n) {
                        var r, o;
                        n.needCallBack && (r = {}, Object.keys(n).forEach(function(e) { "function" == typeof n[e] && (r[e] = n[e], delete n[e]) }), o = "callback" + this.webviewId + "_" + e + "_" + Wa++, Na[o] = r, n.callbackId = o), delete n.needCallBack, this.action = { method: t, args: n }, Object(m.publish)("editor_" + this.webviewId + "_" + e + "_actionChanged", this.action, [this.webviewId])
                    }
                }]), e
            }();
            ["insertDivider", "insertImage", "insertText", "setContents", "getContents", "clear", "removeFormat", "undo", "redo", "blur", "getSelectionText"].forEach(function(t) { Va.prototype[t] = Object(k.surroundByPromiseFactory)(function(e) { this._execCommand(t, Ra(Ra({}, e), {}, { needCallBack: !0 })) }) });
            var Ua = function(e) {
                Object(f.default)(o, e);
                var r = Ea(o);

                function o(e, t) { var n; return Object(_.default)(this, o), (n = r.call(this)).editorId = e, n.webviewId = t, n }
                return Object(b.default)(o, [{ key: "_execCommand", value: function(e, t) { this._execCommandWithId(this.editorId, e, t) } }]), o
            }(Va);

            function Ga(e, t) { var n = "SQ_" + t + "_" + e; if (Fa[n]) return Fa[n]; var r = new Ua(e, t); return Fa[n] = r }
        }, function(e, t, n) {
            n.r(t), n.d(t, "request", function() { return C }), n.d(t, "_requestSkipCheckDomain", function() { return j }), n.d(t, "downloadFile", function() { return P.downloadFile }), n.d(t, "_downloadFileSkipCheckDomain", function() { return P._downloadFileSkipCheckDomain }), n.d(t, "uploadFile", function() { return D }), n.d(t, "_uploadFileSkipCheckDomain", function() { return R }), n.d(t, "socket", function() { return be }), n.d(t, "_socketSkipCheckDomainFactory", function() { return ye }), n.d(t, "CDN", function() { return r }), n.d(t, "addNativeDownloadTask", function() { return me }), n.d(t, "downloadApp", function() { return Ce }), n.d(t, "installDownloadApp", function() { return Te }), n.d(t, "getAppInstallState", function() { return je }), n.d(t, "queryDownloadAppTask", function() { return Pe }), n.d(t, "cancelDownloadAppTask", function() { return Me }), n.d(t, "resumeDownloadAppTask", function() { return Ee }), n.d(t, "pauseDownloadAppTask", function() { return xe }), n.d(t, "onDownloadAppStateChange", function() { return De }), n.d(t, "downloadAppForIOS", function() { return Re }), n.d(t, "calRqt", function() { return Be }), n.d(t, "secureTunnel", function() { return Fe });
            var r = {};
            n.r(r), n.d(r, "uploadEncryptedFileToCDN", function() { return o }), n.d(r, "onUploadEncryptedFileToCDNProgress", function() { return a }), n.d(r, "uploadToCommonCDN", function() { return c }), n.d(r, "private_uploadToCommonCDN", function() { return u });
            var l = n(0),
                o = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    Object(l.invokeMethod)("uploadEncryptedFileToCDN", t, {})
                },
                a = function(e) { Object(l.onMethod)("onUploadEncryptedFileToCDNProgress", e) },
                i = n(25),
                c = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    Object(l.invokeMethod)("uploadToCommonCDN", t, {})
                },
                u = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    Object(i.checkPermission)(878).then(function(e) { return e || Promise.reject() }).then(function() { return Object(l.invokeMethod)("uploadToCommonCDN", t, {}) }).catch(function() { var e = "uploadToCommonCDN:fail no permission"; "function" == typeof t.fail && t.fail({ errMsg: e }), "function" == typeof t.complete && t.complete({ errMsg: e }) })
                },
                s = n(1),
                f = n(42),
                d = n(12),
                p = n(2),
                h = n(69),
                v = [{ APINames: [/^connectSocket/], ios: { app: "clicfg_wegame_ios_use_wcwss", game: "clicfg_wegame_ios_use_wcwss" }, android: { app: "clicfg_appbrand_socket_wcwss", game: "clicfg_appbrand_game_socket_wcwss" }, version: 1 }, { APINames: [/^request/, /^downloadFile/], ios: { app: "clicfg_wegame_ios_use_cronet_request", game: "clicfg_wegame_ios_use_cronet_request" }, android: { app: "clicfg_appbrand_request_cdn", game: "clicfg_appbrand_game_request_cdn" }, version: 1 }, { APINames: [/^downloadFile/], ios: { app: "clicfg_appbrand_ios_native_download", game: "clicfg_appbrand_ios_native_download" }, android: { app: "", game: "" }, version: 2 }, { APINames: [/^connectSocket/], ios: { app: "clicfg_appbrand_ios_native_socket_wcwss", game: "clicfg_appbrand_ios_native_socket_wcwss" }, android: { app: "clicfg_appbrand_native_socket_wcwss", game: "clicfg_appbrand_native_socket_wcwss" }, version: 2 }];
            s.default.onReady(function() {
                var c;
                (Object(d.isGame)() || Object(d.isApp)()) && (c = Object(d.isGame)() ? "game" : "app", v.forEach(function(e) {
                    var t, n, r, o = e.APINames,
                        a = e.version,
                        i = e[p.PLATFORM];
                    i && i[c] && (t = i[c], n = o, r = a, JSON.stringify(n), Object(f._getABTestConfig)({
                        experimentId: t,
                        experimentType: "Expt",
                        success: function(e) {
                            var t = e.testConfig;
                            JSON.stringify(n), 1 === Number(t) && n.forEach(function(e) { Object(h.setApiVersion)(e, r) })
                        }
                    }))
                }))
            });
            var g = n(18),
                b = n(4),
                y = n(5),
                m = n(15),
                w = n(19),
                _ = n(9),
                k = n(32);

            function S(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(_.default)(r); return t = o ? (e = Object(_.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(w.default)(this, t) } }
            Object(k.registerTaskType)("Request", { maxTaskCount: 10, functionName: "request" }), s.default.onReady(function() { try { "number" == typeof s.default.wxAppInfo.maxRequestConcurrent && Object(k.registerTaskType)("Request", { maxTaskCount: s.default.wxAppInfo.maxRequestConcurrent }) } catch (e) {} });

            function I(e) {
                var i = 0 < arguments.length && void 0 !== e ? e : {},
                    i = Object.assign({ __skipDomainCheck__: !1 }, i);
                return function() {
                    var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    if (Object(l.beforeInvoke)("request", n, { url: "" }))
                        if (!1 !== Object(b.validateUrl)(n.url)) {
                            try { JSON.stringify(n.data) } catch (e) { return void Object(l.beforeInvokeFail)("request", n, "fail to stringify data") }
                            if ("function" != typeof n.data) {
                                var e = Object(b.getDataType)(n.header);
                                n.header = n.header || {}, n.header = Object(b.convertObjectValueToString)(n.header), "Undefined" !== e && "Object" !== e && (console.warn("wx.request: header must be an object"), n.header = {}), n.header = Object.keys(n.header).reduce(function(e, t) { return "content-type" === t.toLowerCase() ? e[t.toLowerCase()] = n.header[t] : e[t] = n.header[t], e }, {});
                                var t = "text";
                                n.responseType && (t = n.responseType.toLowerCase());
                                var r, o = n.header || {},
                                    a = "GET";
                                "string" == typeof n.method && (a = n.method.toUpperCase()), n.dataType = n.dataType || "json", o["content-type"] = o["content-type"] || "application/json", r = void 0 === n.data ? "" : "string" != typeof n.data && "ArrayBuffer" !== Object(b.getDataType)(n.data) ? -1 < o["content-type"].indexOf("application/x-www-form-urlencoded") ? Object(b.urlEncodeFormData)(n.data, !0) : -1 < o["content-type"].indexOf("application/json") || "object" === Object(g.default)(n.data) ? JSON.stringify(n.data) : r.toString() : n.data, "GET" === a && (n.url = Object(b.addQueryStringToUrl)(n.url, n.data));
                                try { return new O(Object.assign({}, n, { header: o, method: a, responseType: t, data: r }, A("createRequestTask", { url: n.url, __skipDomainCheck__: i.__skipDomainCheck__ }))) } catch (e) { return void Object(l.beforeInvokeFail)("request", n, e.message) }
                            } else Object(l.beforeInvokeFail)("request", n, "data should not be Function")
                        } else Object(l.beforeInvokeFail)("request", n, 'invalid url "' + n.url + '"')
                }
            }
            var O = function(e) {
                    Object(m.default)(n, e);
                    var t = S(n);

                    function n(o) { return Object(y.default)(this, n), t.call(this, o, { taskType: "Request", beforeSend: function(e) { return e.responseType = o.responseType, e.apiSigningSeq = o.apiSigningSeq, e.apiSignature = o.apiSignature, e }, beforeSuccess: function(e) { var t, n, r; return "string" == typeof(t = e).data && 65279 === t.data.charCodeAt(0) && (t.data = t.data.substr(1)), (n = e).statusCode = parseInt(n.statusCode, 10), r = e, "object" === Object(g.default)(r.header) && (r.header = Object.keys(r.header).reduce(function(e, t) { return Array.isArray(r.header[t]) ? e[t] = r.header[t].join(",") : "string" == typeof r.header[t] && (e[t] = r.header[t]), e }, {})), "json" === o.dataType && function(e) { try { e.data = JSON.parse(e.data) } catch (e) {} }(e), e } }) }
                    return n
                }(k.NetworkTask),
                A = __safeway__.apiSign.makeApiSign,
                C = I(),
                j = I({ __skipDomainCheck__: !0 }),
                P = n(47);

            function M(r) { var o = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t, n = Object(_.default)(r); return t = o ? (e = Object(_.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), Object(w.default)(this, t) } }
            Object(k.registerTaskType)("Upload", { maxTaskCount: 10, functionName: "uploadFile" }), s.default.onReady(function() { try { "number" == typeof s.default.wxAppInfo.maxUploadConcurrent && Object(k.registerTaskType)("Upload", { maxTaskCount: s.default.wxAppInfo.maxUploadConcurrent }) } catch (e) {} });

            function T(e) {
                var r = 0 < arguments.length && void 0 !== e ? e : {},
                    r = Object.assign({ __skipDomainCheck__: !1 }, r);
                return function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    if (Object(l.beforeInvoke)("uploadFile", t, { url: "", filePath: "", name: "" })) {
                        "object" !== Object(g.default)(t.header) && void 0 !== t.header && (console.warn("uploadFile: header must be an object"), delete t.header), "object" !== Object(g.default)(t.formData) && void 0 !== t.formData && (console.warn("uploadFile: formData must be an object"), delete t.formData);
                        var e = {},
                            n = {};
                        t.header && (e = Object(b.convertObjectValueToString)(t.header)), t.formData && (n = Object(b.convertObjectValueToString)(t.formData));
                        try { return new E(Object.assign({}, t, { header: e, formData: n, __skipDomainCheck__: r.__skipDomainCheck__ })) } catch (e) { return void Object(l.beforeInvokeFail)("uploadFile", t, e.message) }
                    }
                }
            }
            var x, E = function(e) {
                    Object(m.default)(r, e);
                    var n = M(r);

                    function r(t) { return Object(y.default)(this, r), n.call(this, t, { taskType: "Upload", beforeSend: function(e) { return e.filePath = t.filePath, e.name = t.name, e.formData = t.formData, e }, beforeSuccess: function(e) { return e } }) }
                    return r
                }(k.NetworkTask),
                D = T(),
                R = T({ __skipDomainCheck__: !0 }),
                B = n(7),
                F = n(11),
                L = n(43),
                N = n(40),
                W = n(6),
                V = n(8),
                U = 0,
                G = new WeakMap,
                q = new WeakMap,
                H = new WeakMap,
                K = new WeakMap,
                z = {},
                J = new L.Emitter;
            Object(l.onMethod)("onSocketTaskStateChange", function() {
                var e, t, n, r, o, a, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    c = i.state,
                    u = i.socketTaskId,
                    s = z[u];
                s && (e = G.get(s), delete i.state, delete i.socketTaskId, s && ("open" === c ? (s.readyState = s.OPEN, t = H.get(s).url, n = Date.now() - K.get(s), r = i.statusCode, o = H.get(s).__skipDomainCheck__, a = i.profile, Object(N.reportNetworkAPI)("connectSocket", t, 1, n, "", r, o, 0, 0, a)) : "close" !== c && "error" !== c || (s.readyState = s.CLOSED), J.emit("" + e + c, i), J.emit("onSocket" + (c[0].toUpperCase() + c.substr(1)), i, s), "close" === c && (delete z[u], J.removeAllListeners(e + "open"), J.removeAllListeners(e + "close"), J.removeAllListeners(e + "error"), J.removeAllListeners(e + "message"))))
            });

            function Q(e, t) { J.on("" + G.get(this) + e, __errorTracer__.surroundThirdByTryCatch(t, "at socketTask.on" + e + " callback function")) }
            var X = (x = function() {
                    function n(e, o) {
                        var a = this;
                        Object(y.default)(this, n), this.CONNECTING = 0, this.OPEN = 1, this.CLOSING = 2, this.CLOSED = 3, this.readyState = this.CONNECTING;
                        var i, t = U++;
                        G.set(this, t), H.set(this, o), Object.defineProperty(this, "__socketInstance__", { value: e, writable: !1, configurable: !1, enumerable: !1 }), ["success", "fail", "complete"].forEach(function(e) { "function" == typeof o[e] && (o[e] = __errorTracer__.surroundThirdByTryCatch(o[e], "at api connectSocket " + e + " callback function")) }), K.set(this, Date.now()), Object(W.isNumber)(o.timeout) || (o.timeout = 0), Object(l.invokeMethod)("createSocketTask", o, {
                            beforeAll: function(e) { e.errMsg = e.errMsg.replace("createSocketTask", "connectSocket") },
                            beforeSuccess: function(e) { q.set(a, e.socketTaskId), z[e.socketTaskId] = a },
                            beforeFail: function(e) {
                                var t = o.url,
                                    n = Date.now() - K.get(a),
                                    r = o.__skipDomainCheck__;
                                i = e.errMsg, Object(N.reportNetworkAPI)("connectSocket", t, 2, n, i, "", r, 0)
                            }
                        }), i && (this.readyState = this.CLOSED, setTimeout(function() { J.emit(t + "error", { errMsg: i }) }, 0))
                    }
                    return Object(B.default)(n, [{
                        key: "send",
                        value: function(c) {
                            var u, s = this;
                            this.readyState === this.OPEN ? (u = Date.now(), Object(l.invokeMethod)("operateSocketTask", Object.assign({}, c, { operationType: "send", socketTaskId: q.get(this) }), {
                                beforeAll: function(e) {
                                    var t, n, r, o, a, i;
                                    e.errMsg = e.errMsg.replace("operateSocketTask", "sendSocketMessage"), .99 < Math.random() && (t = H.get(s).url, n = -1 < e.errMsg.indexOf("ok") ? 1 : 2, r = Date.now() - u, o = e.errMsg, a = H.get(s).__skipDomainCheck__, i = Object(d.getDataLength)(c.data), Object(N.reportNetworkAPI)("sendSocketMessage", t, n, r, o, "", a, i))
                                }
                            })) : Object(l.beforeInvokeFail)("SocketTask.send", c, "SocketTask.readyState is not OPEN")
                        }
                    }, {
                        key: "close",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            Object(l.invokeMethod)("operateSocketTask", Object.assign({ code: 1e3 }, t, { operationType: "close", socketTaskId: q.get(this) }), { beforeAll: function(e) { e.errMsg = e.errMsg.replace("operateSocketTask", "closeSocket") } })
                        }
                    }, { key: "onOpen", value: function(e) { Q.call(this, "open", e) } }, { key: "onClose", value: function(e) { Q.call(this, "close", e) } }, { key: "onMessage", value: function(e) { Q.call(this, "message", e) } }, { key: "onError", value: function(e) { Q.call(this, "error", e) } }]), n
                }(), Object(F.default)(x.prototype, "send", [V.promised], Object.getOwnPropertyDescriptor(x.prototype, "send"), x.prototype), Object(F.default)(x.prototype, "close", [V.promised], Object.getOwnPropertyDescriptor(x.prototype, "close"), x.prototype), x),
                Y = n(13),
                Z = n(72),
                $ = 5;
            s.default.onReady(function() { s.default.wxAppInfo && s.default.wxAppInfo.maxWebsocketConnect && ($ = s.default.wxAppInfo.maxWebsocketConnect) });
            var ee = Y.default.WSS,
                te = new WeakMap,
                ne = new WeakMap,
                re = new WeakMap,
                oe = {},
                ae = new L.Emitter,
                ie = 0,
                ce = 0;

            function ue(e, t, n) {
                t.errMsg = t.errMsg || "ok";
                var r = "ok" === t.errMsg;
                Object(l.beforeInvokeCallback)({ name: e, args: n, success: r, errMsg: t.errMsg })
            }
            var se = function() {
                    function c(e, n) {
                        var r = this;
                        Object(y.default)(this, c), this.CONNECTING = 0, this.OPEN = 1, this.CLOSING = 2, this.CLOSED = 3, this.readyState = this.CONNECTING, Object.defineProperty(this, "__socketInstance__", { value: e, writable: !1, configurable: !1, enumerable: !1 });
                        var o = ie++,
                            t = new ee;
                        te.set(this, n), ne.set(this, t), re.set(this, o);
                        var a = Date.now();
                        t.onopen = function(e, t) { r.readyState !== r.CLOSED && (ce++, r.readyState = r.OPEN, ae.emit(o + "open", { header: e, profile: t }), ae.emit("onSocketOpen", { header: e, profile: t }, r), Object(N.reportNetworkAPI)("connectSocket", n.url, 1, Date.now() - a, "", "", n.__skipDomainCheck__, 0, 0, t)) }, t.onclose = function(e, t) { ce--, r.readyState = r.CLOSED, ae.emit(o + "close", { code: e, reason: t }), ae.emit("onSocketClose", { code: e, reason: t }, r) }, t.onmessage = function(e) { r.readyState !== r.CLOSED && (Object(W.isArrayBuffer)(e) && (e.__proto__ = ArrayBuffer.prototype), ae.emit(o + "message", { data: e }), ae.emit("onSocketMessage", { data: e }, r)) }, t.onerror = function(e, t) { ce--, r.readyState = r.CLOSED, setTimeout(function() { ae.emit(o + "error", { errCode: e, errMsg: t }), ae.emit("onSocketError", { errCode: e, errMsg: t }, r) }, 0) };
                        var i;
                        i = { errMsg: "" }, $ <= ce ? (r.readyState = r.CLOSED, i.errMsg = "fail reach max websocket connect count " + $) : (i.errMsg = t.connect(Object(d.filterObject)(n, ["url", "header", "timeout", "protocols", "tcpNoDelay", "perMessageDeflate", "enableProfile"])), "string" == typeof i.errMsg && "" !== i.errMsg || (i.errMsg = "ok")), i.errMsg, "ok" === i.errMsg && (oe[o] = r), ue("connectSocket", i, n), Object(Z.checkNetworkAPIURL)({ api: "websocket", url: n.url }).then(function(e) { if (n.url, !(n.__skipDomainCheck__ || e.isInDomainList || e.isInLAN && !e.isLocalHost)) throw new Error("fail:url not in domain list") }).catch(function(e) {
                            r.readyState = r.CLOSED;
                            var t = e.message || e.errMsg;
                            ae.emit(o + "error", { errMsg: t }), ae.emit("onSocketError", { errMsg: t }, r)
                        })
                    }
                    return Object(B.default)(c, [{
                        key: "send",
                        value: function(e) {
                            var t, n, r, o, a = 0 < arguments.length && void 0 !== e ? e : {},
                                i = { errMsg: ne.get(this).send(a.data) };
                            ue("sendSocketMessage", i, a), Math.random() < .01 && (t = te.get(this).url, n = -1 === i ? 2 : 1, r = te.get(this).__skipDomainCheck__, o = Object(d.getDataLength)(a.data), Object(N.reportNetworkAPI)("sendSocketMessage", t, n, 0, "", "", r, o))
                        }
                    }, {
                        key: "close",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            this.readyState, ue("closeSocket", { errMsg: ne.get(this).close(Object(W.isNumber)(t.code) ? t.code : 1e3, t.reason) }, t)
                        }
                    }, { key: "onOpen", value: function(e) { ae.on(re.get(this) + "open", __errorTracer__.surroundThirdByTryCatch(e, "at socketTask.onOpen callback function")) } }, { key: "onClose", value: function(e) { ae.on(re.get(this) + "close", __errorTracer__.surroundThirdByTryCatch(e, "at socketTask.onClose callback function")) } }, { key: "onMessage", value: function(e) { ae.on(re.get(this) + "message", __errorTracer__.surroundThirdByTryCatch(e, "at socketTask.onMessage callback function")) } }, { key: "onError", value: function(e) { ae.on(re.get(this) + "error", __errorTracer__.surroundThirdByTryCatch(e, "at socketTask.onError callback function")) } }]), c
                }(),
                le = X,
                fe = z;
            Y.default.WSS && s.default.onReady(function() { Object(f._getABTestConfig)({ experimentId: p.IS_IOS ? "clicfg_appbrand_ios_native_socket_wcwss" : "clicfg_appbrand_native_socket_wcwss", experimentType: "Expt", success: function(e) { e && 1 === Number(e.testConfig) && (le = se, fe = oe) } }) });
            var de = new WeakMap,
                pe = {};

            function he(t, n) {
                return pe[n] || (pe[n] = new WeakMap, J.on("onSocket" + n, ve(n)), ae.on("onSocket" + n, ve(n))),
                    function(e) { Object(l.beforeInvoke)("onSocket" + n, e, V.noop) && pe[n].set(t, e) }
            }

            function ve(a) {
                return function(e, t) {
                    var n = t.__socketInstance__,
                        r = pe[a].get(n),
                        o = de.get(n);
                    r && t === o && __errorTracer__.surroundThirdByTryCatch(r, "at onSocket" + a + " callback function")(e)
                }
            }

            function ge(e) {
                var o = 0 < arguments.length && void 0 !== e ? e : {},
                    o = Object.assign({ __skipDomainCheck__: !1 }, o),
                    a = {};
                return {
                    connectSocket: function(t) {
                        if (Object(l.beforeInvoke)("connectSocket", t, { url: "" }))
                            if (!1 !== Object(b.validateUrl)(t.url, "websocket")) {
                                "object" !== Object(g.default)(t.header) && void 0 !== t.header && delete t.header;
                                var e = {};
                                t.header && (e = Object(b.convertObjectValueToString)(t.header)), t.__skipDomainCheck__ = o.__skipDomainCheck__;
                                try {
                                    var n = de.get(a),
                                        r = new le(a, Object.assign({}, t, { header: e }));
                                    return n && n.readyState !== n.CLOSED ? n.readyState : de.set(a, r), r
                                } catch (e) { return e.message, void Object(l.beforeInvokeFail)("connectSocket", t, e.message) }
                            } else Object(l.beforeInvokeFail)("request", t, 'invalid url "' + t.url + '"')
                    },
                    closeSocket: function(e) {
                        var t = de.get(a);
                        for (var n in t && t.readyState !== t.CLOSED ? (t.readyState = t.CLOSED, t.close(e)) : Object(l.beforeInvokeFail)("closeSocket", e, "WebSocket is not connected"), fe) {
                            var r = fe[n];
                            r.__socketInstance__ === a && (r.readyState = r.CLOSED, r !== t && r.close())
                        }
                    },
                    sendSocketMessage: function(e) {
                        var t = de.get(a);
                        t && t.readyState === t.OPEN ? t.send(e) : Object(l.beforeInvokeFail)("sendSocketMessage", e, "WebSocket is not connected")
                    },
                    onSocketOpen: he(a, "Open"),
                    onSocketClose: he(a, "Close"),
                    onSocketMessage: he(a, "Message"),
                    onSocketError: he(a, "Error")
                }
            }
            var be = ge(),
                ye = function() { return ge({ __skipDomainCheck__: !0 }) },
                me = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    p.IS_IOS ? Object(l.beforeInvokeFail)("addNativeDownloadTask", t, "iOS not supported") : Object(l.invokeMethod)("addNativeDownloadTask", t, {})
                },
                we = n(24),
                _e = n(14),
                ke = new WeakMap,
                Se = new WeakMap,
                Ie = new _e.default;

            function Oe(e) {
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                if ("ready" !== ke.get(this)) { var o = Se.get(this) || []; return o.push([e, n]), void Se.set(this, o) }
                switch (e) {
                    case "cancel":
                        Object(l.invokeMethod)("cancelDownloadTaskForNative", { downloadIdArray: [this.taskId] });
                        break;
                    case "onProgressUpdate":
                        Ie.on(this.taskId + ":progressUpdate", function(e) { "function" == typeof n[0] && __errorTracer__.surroundThirdByTryCatch(n[0], "at DownloadAppTask.onProgressUpdate callback function")(e) });
                        break;
                    case "onCreated":
                        Ie.on(this.taskId + ":created", function(e) { "function" == typeof n[0] && __errorTracer__.surroundThirdByTryCatch(n[0], "at DownloadAppTask.onCreated callback function")(e) });
                        break;
                    default:
                        Object(l.invokeMethod)(e + "DownloadTaskForNative", { downloadId: this.taskId })
                }
            }
            Object(l.onMethod)("onDownloadAppStateChangeForNative", function(e) {
                var t = e.state,
                    n = e.downloadId;
                switch (delete e.state, delete e.downloadId, delete e.appId, t) {
                    case "download_succ":
                        Ie.emit(n + ":progressUpdate", e), Ie.emit(n + ":success", e);
                        break;
                    case "download_failed":
                        Ie.emit(n + ":fail", e);
                        break;
                    case "download_progress_changed":
                        Ie.emit(n + ":progressUpdate", e)
                }
                "download_succ" !== t && "download_failed" !== t || (Ie.removeAllListeners(n + ":success"), Ie.removeAllListeners(n + ":fail"), Ie.removeAllListeners(n + ":progressUpdate"))
            });
            var Ae = function() {
                    function e(t) {
                        Object(y.default)(this, e), this.taskId = null, ["success", "fail", "complete"].forEach(function(e) { "function" == typeof t[e] && (t[e] = __errorTracer__.surroundThirdByTryCatch(t[e], "at api downloadApp " + e + " callback function")) }),
                            function(e) {
                                var n = this,
                                    r = e.success,
                                    o = e.fail,
                                    a = e.complete;
                                Object(l.invokeMethod)("addDownloadTaskForNative", Object.assign(e, {
                                    success: function(e) {
                                        delete e.errMsg, n.taskId = e.downloadId, Ie.on(n.taskId + ":success", function(e) { e.errMsg = "downloadApp:ok", "function" == typeof r && r(e), "function" == typeof a && a(e) }), Ie.on(n.taskId + ":fail", function(e) { e.errMsg = "downloadFile:fail " + e.errMsg, "function" == typeof o && o(e), "function" == typeof a && a(e) });
                                        var t = Se.get(n) || [];
                                        ke.set(n, "ready"), t.forEach(function(e) { Oe.call.apply(Oe, [n, e[0]].concat(Object(we.default)(e[1]))) }), Ie.emit(n.taskId + ":created", e)
                                    },
                                    fail: function(e) { "function" == typeof o && o(e), "function" == typeof a && a(e) },
                                    complete: function() { Se.set(n, []) }
                                }), { beforeAll: function(e) { e.errMsg = e.errMsg.replace("addDownloadTaskForNative", "downloadApp") } })
                            }.call(this, t)
                    }
                    return Object(B.default)(e, [{ key: "pause", value: function() { Oe.call(this, "pause") } }, { key: "resume", value: function() { Oe.call(this, "resume") } }, { key: "cancel", value: function() { Oe.call(this, "cancel") } }, { key: "install", value: function() { Oe.call(this, "install") } }, { key: "onCreated", value: function(e) { Oe.call(this, "onCreated", e) } }, { key: "onProgressUpdate", value: function(e) { Oe.call(this, "onProgressUpdate", e) } }]), e
                }(),
                Ce = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    if (p.IS_IOS) Object(l.beforeInvokeFail)("downloadApp", t, "iOS not supported");
                    else {
                        if (!Object(l.beforeInvoke)("downloadApp", t, { taskName: "", taskUrl: "", fileMd5: "" })) return null;
                        t.fileType = t.fileType || 1;
                        try { return new Ae(t) } catch (e) { return Object(l.beforeInvokeFail)("downloadApp", t, e.message), null }
                    }
                },
                je = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    p.IS_IOS ? Object(l.beforeInvokeFail)("getAppInstallState", t, "iOS not supported") : t.packageName || t.packageNameArray ? Object(l.invokeMethod)("getInstallStateForNative", t, { beforeAll: function(e) { e.errMsg = e.errMsg.replace("getInstallStateForNative", "getAppInstallState") } }) : Object(l.beforeInvokeFail)("getAppInstallState", t, "parameter error: require packageName or packageNameArray")
                },
                Pe = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    p.IS_IOS ? Object(l.beforeInvokeFail)("queryDownloadAppTask", t, "iOS not supported") : t.downloadId || t.downloadIdArray || t.appIdArray ? Object(l.invokeMethod)("queryDownloadTaskForNative", t, { beforeAll: function(e) { e.errMsg = e.errMsg.replace("queryDownloadTaskForNative", "queryDownloadAppTask"), "download_succ" === e.state && (e.progress = 100), (e.result || []).forEach(function(e) { "download_succ" === e.state && (e.progress = 100) }) } }) : Object(l.beforeInvokeFail)("queryDownloadAppTask", t, "parameter error: require downloadId or downloadIdArray or appIdArray")
                },
                Me = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    p.IS_IOS ? Object(l.beforeInvokeFail)("cancelDownloadAppTask", t, "iOS not supported") : Object(l.beforeInvoke)("cancelDownloadAppTask", t, { downloadIdArray: [] }) && Object(l.invokeMethod)("cancelDownloadTaskForNative", t, { beforeAll: function(e) { e.errMsg = e.errMsg.replace("cancelDownloadTaskForNative", "cancelDownloadAppTask") } })
                },
                Te = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    p.IS_IOS ? Object(l.beforeInvokeFail)("installDownloadApp", t, "iOS not supported") : Object(l.beforeInvoke)("installDownloadApp", t, { downloadId: "" }) && Object(l.invokeMethod)("installDownloadTaskForNative", t, { beforeAll: function(e) { e.errMsg = e.errMsg.replace("installDownloadTaskForNative", "installDownloadApp") } })
                },
                xe = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    p.IS_IOS ? Object(l.beforeInvokeFail)("pauseDownloadAppTask", t, "iOS not supported") : Object(l.beforeInvoke)("pauseDownloadAppTask", t, { downloadId: "" }) && Object(l.invokeMethod)("pauseDownloadTaskForNative", t, { beforeAll: function(e) { e.errMsg = e.errMsg.replace("pauseDownloadTaskForNative", "pauseDownloadAppTask") } })
                },
                Ee = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    p.IS_IOS ? Object(l.beforeInvokeFail)("resumeDownloadAppTask", t, "iOS not supported") : Object(l.beforeInvoke)("resumeDownloadAppTask", t, { downloadId: "" }) && Object(l.invokeMethod)("resumeDownloadTaskForNative", t, { beforeAll: function(e) { e.errMsg = e.errMsg.replace("resumeDownloadTaskForNative", "resumeDownloadAppTask") } })
                },
                De = function(t) {
                    Object(l.onMethod)("onDownloadAppStateChangeForNative", function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        __errorTracer__.surroundThirdByTryCatch(t, "at onDownloadAppStateChange callback function")(e)
                    })
                },
                Re = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    if (!p.IS_ANDROID) return Object(l.beforeInvoke)("downloadAppForIOS", t, { appUrl: "" }) && Object(l.invokeMethod)("downloadAppInternalForNative", t, { beforeAll: function(e) { e.errMsg = e.errMsg.replace("downloadAppInternalForNative", "downloadAppForIOS") } }), null;
                    Object(l.beforeInvokeFail)("downloadAppForIOS", t, "android not supported")
                },
                Be = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    Object(l.beforeInvoke)("calRqt", t, { rqt: "" }) && Object(l.invokeMethod)("calRqt", t)
                },
                Fe = function(e) { Object(l.invokeMethod)("secureTunnel", e) }
        }, function(e, t, n) {
            n.r(t);
            var r = n(77),
                s = n(30),
                l = n(6);
            var o = { String: 0, NaN: "<NaN>", Infinity: function(e) { return 0 < e ? "<Infinity>" : "<-Infinity>" }, Number: 0, Boolean: 0, Null: 0, Undefined: "<Undefined>", Function: function(e) { return "" === e.name ? "<Function>" : "<Function: " + e.name + ">" }, Date: function(e) { return "<Date: " + e.toJSON() + ">" }, RegExp: function(e) { return "<RegExp: " + e.toString() + ">" }, Error: function(e) { return "<" + e.name + ": " + e.message + ">" }, Symbol: function(e) { return "<Symbol: " + e.toString() + ">" }, Promise: "<Promise>", Map: function(e) { return "<Map: size=" + e.size + ">" }, WeakMap: "<WeakMap>", Set: function(e) { return "<Set: size=" + e.size + ">" }, WeakSet: "<WeakSet>", ArrayBuffer: function(e) { return "<ArrayBuffer: byteLength=" + e.byteLength + ">" }, DataView: function(e) { return "<DataView: byteLength=" + e.byteLength + ", byteOffset=" + e.byteOffset + ">" }, TypedArray: function(e) { return "<" + (e.constructor && e.constructor.name ? e.constructor.name : "TypedArray") + ": byteLength=" + e.byteLength + ", length=" + e.length + ">" } };

            function f(e) { var t = function(e) { var t = Object(l.getDataType)(e); if ("Number" === t) { if (Object(l.isNaN)(e)) return "NaN"; if (Object(l.isInfinity)(e)) return "Infinity" } else if ("Object" === t) { if (Object(l.isNull)(e)) return "Null" } else if (t.endsWith("Array") && "Array" !== t && Object(l.isTypedArray)(e)) return "TypedArray"; return t }(e); return t in o ? o[t] ? Object(l.isFunction)(o[t]) ? [o[t](e), !0] : [o[t], !0] : [e, !0] : [null, !1] }

            function a(e) {
                var c = new WeakMap,
                    u = 0;
                return function n(t, r) {
                    var o, e = f(t),
                        a = Object(s.default)(e, 2),
                        i = a[0];
                    return a[1] ? i : 3e3 < u ? "<Hidden>" : c.has(t) ? "<Circular: " + c.get(t) + ">" : (c.set(t, r), u++, Object(l.isArray)(t) ? t.map(function(e, t) { return n(e, r + "[" + t + "]") }) : (o = {}, Object.keys(t).forEach(function(e) { o[e] = n(t[e], r + "." + e) }), o))
                }(e, "@")
            }

            function i(e) { try { return (e = Array.prototype.slice.call(e)).map(a) } catch (e) { return void console.warn("[console] This object can not be logged") } }
            var c = "log",
                u = "info",
                d = "warn",
                p = "error",
                h = "debug",
                v = "time",
                g = "timeEnd";
            var b = n(1),
                y = function() {},
                y = function(e, t) {
                    var n = function(e, t, n) { if (!(2 < arguments.length && void 0 !== n) || n || e === d || e === p) { var r = i(t); if (void 0 !== r) return { level: e, logs: r, __log__: !0 } } }(e, t, "devtools" === b.default.platform || b.default.debug);
                    n && Object(r._postMessage)(n)
                };
            console = { log: function() { y(c, arguments) }, info: function() { y(u, arguments) }, warn: function() { y(d, arguments) }, error: function() { y(p, arguments) }, debug: function() { y(h, arguments) }, time: function() { y(v, arguments) }, timeEnd: function() { y(g, arguments) }, group: function() {}, groupEnd: function() {} }
        }, function(e, t, n) {
            n.r(t);

            function r(e) { e && (void 0 === o && (o = u.require), e.startsWith("/") && (e = e.substring(1)), o(e)) }
            var o, a, i, c = n(66),
                u = function() { return this }(),
                s = n(54),
                l = c.default.GlobalEmitter,
                f = 0,
                d = {},
                p = {};
            s.wxSAB.new || (i = a = 0, Object.assign(s.wxSAB, { new: function(e) { var t = ++a + f; return d[t] = e, WeixinWorker.postMsgToAppService({ __cmd__: "setSharedBuffer", __buffer__: e, __id__: t }, !1), t }, get: function(e) { return d[e] }, destroy: function(e) { delete d[e] }, Lock: function(e, t) { var n = ++i + f; return p[n] = t, WeixinWorker.postMsgToAppService({ __cmd__: "lockSharedBuffer", __sid__: e, __lid__: n }), n }, Unlock: function(e, t) { WeixinWorker.postMsgToAppService({ __cmd__: "unlockSharedBuffer", __sid__: e, __lid__: t }) } })), WeixinWorker.onAppServiceMsg(function(e) { e = WeixinNativeBuffer.unpack(e), (e = Object(s.unpackSharedArrayBuffer)(e)) && e.__cmd__ ? "requireScript" === e.__cmd__ ? (f = Number("." + e.__id__), r(e.__script__)) : "setSharedBuffer" === e.__cmd__ ? d[e.__id__] = e.__buffer__ : "lockSharedBuffer" === e.__cmd__ && "function" == typeof p[e.__lid__] && (p[e.__lid__](), delete p[e.__lid__]) : l.emit("appServiceMessage", e) }), WeixinWorker.onError(function(e) { "function" == typeof __wxSourceMapRetrace__ && (e = __wxSourceMapRetrace__(e)), console.error("thirdScriptError", "\n", "worker uncaught third Error", "\n", e.message, "\n", e.stack) }), WeixinWorker.onUnhandledRejection(function(e) { "function" == typeof __wxSourceMapRetrace__ && (e.reason = __wxSourceMapRetrace__(e.reason)), console.error("thirdScriptError", "\n", "worker uncaught third Error (in promise)", "\n", e.reason.message, "\n", e.reason.stack) })
        }]);
    ! function(l) {
        var f = {},
            d = {};
        define = function(e, t) { f[e] = { status: 1, factory: t } };

        function u(e) {
            if (e && __wxConfig.subPackages)
                for (var t = 0, n = __wxConfig.subPackages.length; t < n; t++)
                    if (0 === e.indexOf(__wxConfig.subPackages[t].root)) return __wxConfig.subPackages[t]
        }

        function s(e) {
            for (var t = [], n = e.split("/"), r = 0, o = n.length; r < o; ++r) {
                var a = n[r];
                if ("" != a && "." != a)
                    if (".." == a) {
                        if (0 == t.length) { t = null; break }
                        t.pop()
                    } else r + 1 < o && ".." == n[r + 1] ? r++ : t.push(a)
            }
            return t
        }

        function p(e) { var t = s(e + "/index.js").join("/"); return f[t] ? t : (t = s(e).join("/"), /\.js$/.test(t) || (t += ".js"), f[t] ? t : "") }

        function h(i) {
            var e, c = (e = i.match(/(.*)\/([^/]+)?$/)) && e[1] ? e[1] : "./";
            return function(e) {
                if ("string" != typeof e) throw new Error("require args must be a string");
                var t = s(c + "/" + e);
                if ("/__wx__/private-api" === e && (t = s(e)), !t) throw new Error("can not find module : " + e);
                try {
                    function n(e) { return "functional-pages" === s(e)[0] }
                    var r = function(e, t, n) {
                        var r = e;
                        if (/\.js$/.test(r) || (r += ".js"), "string" == typeof r && f[r]) return r;
                        var o = s(t);
                        if (!o) throw new Error("can not find module : " + n);
                        for (var a = e.substring(o.join("/").length); o.length;) {
                            var i, c = o.join("/") + "/miniprogram_npm" + a;
                            if (i = p(c)) break;
                            o.pop()
                        }
                        return i || (a = "/" === a[0] ? a : "/" + a, i = p(c = "miniprogram_npm" + a)), i || e
                    }(r = t.join("/"), c, e);
                    if (n(r) !== n(i) && Reporter.thirdErrorReport({ error: new Error('should not require across "functional-pages" folder'), extend: 'at require("' + e + '") in ' + i }), "devtools" === __wxConfig.platform && __wxConfig.subPackages) {
                        var o = u(r),
                            a = u(i);
                        if (o && o !== a) throw new Error("should not require " + e + " in " + i + " because they are in diffrent subPackages")
                    }
                    return require(r)
                } catch (e) { throw e }
            }
        }
        require = function(e, t) {
            if (void 0 === t && (t = !0), "string" != typeof e) throw new Error("require args must be a string");
            var n, r, o, a, i = f[e];
            if (i || (n = -1 === e.indexOf("/") ? e + "/index.js" : e, /\.js$/.test(n = "miniprogram_npm/" + n) || (n += ".js"), i = f[n]), e.endsWith(".js") || (e += ".js"), i || (r = "/" + e.substr(0, e.length - 3) + ".appservice.js", o = { __wxRoute: l.__wxRoute, __wxAppCurrentFile__: l.__wxAppCurrentFile__, __wxRouteBegin: l.__wxRouteBegin }, __subContextEngine__.loadJsFiles([r]), a = o, l.__wxRoute = a.__wxRoute, l.__wxAppCurrentFile__ = a.__wxAppCurrentFile__, l.__wxRouteBegin = a.__wxRouteBegin, i = f[e]), !i) throw new Error('module "' + e + '" is not defined');
            var c = { exports: {} },
                u = i.factory;
            if (!t || d[e]) return delete i.exports, i.status = 1, d[e] = !0, u && u(h(e), c, c.exports), c.exports;
            if (1 === i.status) {
                i.exports = c.exports, i.status = 2;
                var s = void 0;
                try { u && (s = u(h(e), c, c.exports)) } catch (e) { throw i.status = 1, e }
                i.exports = void 0 !== c.exports ? c.exports : s
            }
            return i.exports
        }, requireOnce = function(e) { return require(e, !1) }, l.__modules__ = f
    }(this);
    var requireMiniProgramFile = require,
        defineMiniProgramFile = define;;
    global.worker = worker;
})(this);
typeof __wxLibrary.onEnd === 'function' && __wxLibrary.onEnd();
__wxLibrary = undefined;