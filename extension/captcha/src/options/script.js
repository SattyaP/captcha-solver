(() => {
    "use strict";
    var e, t = {
            6229: (e, t, n) => {
                n.d(t, {
                    $d: () => r,
                    FN: () => zt,
                    Fl: () => on,
                    HY: () => bt,
                    Ho: () => Kt,
                    JJ: () => E,
                    Jd: () => he,
                    Ko: () => Ie,
                    LL: () => Se,
                    P$: () => B,
                    Q2: () => Ce,
                    Q6: () => ee,
                    U2: () => N,
                    Uk: () => Wt,
                    Us: () => pt,
                    WI: () => Ve,
                    Wm: () => Et,
                    Y3: () => y,
                    Y8: () => Z,
                    YP: () => $,
                    ZK: () => l,
                    _: () => jt,
                    aZ: () => te,
                    bv: () => ue,
                    dG: () => Jt,
                    f3: () => K,
                    h: () => ln,
                    iD: () => It,
                    ic: () => fe,
                    j4: () => Vt,
                    kq: () => Mt,
                    lR: () => vt,
                    m0: () => W,
                    mx: () => Oe,
                    nK: () => Y,
                    qZ: () => Tt,
                    up: () => xe,
                    w5: () => O,
                    wF: () => pe,
                    wg: () => St,
                    wy: () => ke
                });
                var o = n(2343),
                    i = n(2502);

                function l(e, ...t) {}

                function s(e, t, n, o) {
                    let i;
                    try {
                        i = o ? e(...o) : e()
                    } catch (e) {
                        a(e, t, n)
                    }
                    return i
                }

                function r(e, t, n, o) {
                    if ((0, i.mf)(e)) {
                        const l = s(e, t, n, o);
                        return l && (0, i.tI)(l) && l.catch((e => {
                            a(e, t, n)
                        })), l
                    }
                    const l = [];
                    for (let i = 0; i < e.length; i++) l.push(r(e[i], t, n, o));
                    return l
                }

                function a(e, t, n, o = !0) {
                    if (t && t.vnode, t) {
                        let o = t.parent;
                        const i = t.proxy,
                            l = n;
                        for (; o;) {
                            const t = o.ec;
                            if (t)
                                for (let n = 0; n < t.length; n++)
                                    if (!1 === t[n](e, i, l)) return;
                            o = o.parent
                        }
                        const r = t.appContext.config.errorHandler;
                        if (r) return void s(r, null, 10, [e, i, l])
                    }! function (e, t, n, o = !0) {
                        console.error(e)
                    }(e, 0, 0, o)
                }
                let c = !1,
                    p = !1;
                const u = [];
                let d = 0;
                const f = [];
                let h = null,
                    m = 0;
                const g = Promise.resolve();
                let v = null;

                function y(e) {
                    const t = v || g;
                    return e ? t.then(this ? e.bind(this) : e) : t
                }

                function b(e) {
                    u.length && u.includes(e, c && e.allowRecurse ? d + 1 : d) || (null == e.id ? u.push(e) : u.splice(function (e) {
                        let t = d + 1,
                            n = u.length;
                        for (; t < n;) {
                            const o = t + n >>> 1;
                            x(u[o]) < e ? t = o + 1 : n = o
                        }
                        return t
                    }(e.id), 0, e), k())
                }

                function k() {
                    c || p || (p = !0, v = g.then(S))
                }

                function _(e, t = (c ? d + 1 : 0)) {
                    for (; t < u.length; t++) {
                        const e = u[t];
                        e && e.pre && (u.splice(t, 1), t--, e())
                    }
                }

                function w(e) {
                    if (f.length) {
                        const e = [...new Set(f)];
                        if (f.length = 0, h) return void h.push(...e);
                        for (h = e, h.sort(((e, t) => x(e) - x(t))), m = 0; m < h.length; m++) h[m]();
                        h = null, m = 0
                    }
                }
                const x = e => null == e.id ? 1 / 0 : e.id,
                    A = (e, t) => {
                        const n = x(e) - x(t);
                        if (0 === n) {
                            if (e.pre && !t.pre) return -1;
                            if (t.pre && !e.pre) return 1
                        }
                        return n
                    };

                function S(e) {
                    p = !1, c = !0, u.sort(A), i.dG;
                    try {
                        for (d = 0; d < u.length; d++) {
                            const e = u[d];
                            e && !1 !== e.active && s(e, null, 14)
                        }
                    } finally {
                        d = 0, u.length = 0, w(), c = !1, v = null, (u.length || f.length) && S(e)
                    }
                }

                function C(e, t, ...n) {
                    if (e.isUnmounted) return;
                    const o = e.vnode.props || i.kT;
                    let l = n;
                    const s = t.startsWith("update:"),
                        a = s && t.slice(7);
                    if (a && a in o) {
                        const e = `${"modelValue"===a?"model":a}Modifiers`,
                            {
                                number: t,
                                trim: s
                            } = o[e] || i.kT;
                        s && (l = n.map((e => (0, i.HD)(e) ? e.trim() : e))), t && (l = n.map(i.He))
                    }
                    let c, p = o[c = (0, i.hR)(t)] || o[c = (0, i.hR)((0, i._A)(t))];
                    !p && s && (p = o[c = (0, i.hR)((0, i.rs)(t))]), p && r(p, e, 6, l);
                    const u = o[c + "Once"];
                    if (u) {
                        if (e.emitted) {
                            if (e.emitted[c]) return
                        } else e.emitted = {};
                        e.emitted[c] = !0, r(u, e, 6, l)
                    }
                }

                function T(e, t, n = !1) {
                    const o = t.emitsCache,
                        l = o.get(e);
                    if (void 0 !== l) return l;
                    const s = e.emits;
                    let r = {},
                        a = !1;
                    if (!(0, i.mf)(e)) {
                        const o = e => {
                            const n = T(e, t, !0);
                            n && (a = !0, (0, i.l7)(r, n))
                        };
                        !n && t.mixins.length && t.mixins.forEach(o), e.extends && o(e.extends), e.mixins && e.mixins.forEach(o)
                    }
                    return s || a ? ((0, i.kJ)(s) ? s.forEach((e => r[e] = null)) : (0, i.l7)(r, s), (0, i.Kn)(e) && o.set(e, r), r) : ((0, i.Kn)(e) && o.set(e, null), null)
                }

                function U(e, t) {
                    return !(!e || !(0, i.F7)(t)) && (t = t.slice(2).replace(/Once$/, ""), (0, i.RI)(e, t[0].toLowerCase() + t.slice(1)) || (0, i.RI)(e, (0, i.rs)(t)) || (0, i.RI)(e, t))
                }
                new Set, new Map;
                let I = null,
                    V = null;

                function L(e) {
                    const t = I;
                    return I = e, V = e && e.type.__scopeId || null, t
                }

                function O(e, t = I, n) {
                    if (!t) return e;
                    if (e._n) return e;
                    const o = (...n) => {
                        o._d && Tt(-1);
                        const i = L(t);
                        let l;
                        try {
                            l = e(...n)
                        } finally {
                            L(i), o._d && Tt(1)
                        }
                        return l
                    };
                    return o._n = !0, o._c = !0, o._d = !0, o
                }

                function F(e) {
                    const {
                        type: t,
                        vnode: n,
                        proxy: o,
                        withProxy: l,
                        props: s,
                        propsOptions: [r],
                        slots: c,
                        attrs: p,
                        emit: u,
                        render: d,
                        renderCache: f,
                        data: h,
                        setupState: m,
                        ctx: g,
                        inheritAttrs: v
                    } = e;
                    let y, b;
                    const k = L(e);
                    try {
                        if (4 & n.shapeFlag) {
                            const e = l || o;
                            y = $t(d.call(e, e, f, s, m, h, g)), b = p
                        } else {
                            const e = t;
                            y = $t(e.length > 1 ? e(s, {
                                attrs: p,
                                slots: c,
                                emit: u
                            }) : e(s, null)), b = t.props ? p : D(p)
                        }
                    } catch (t) {
                        xt.length = 0, a(t, e, 1), y = Et(_t)
                    }
                    let _ = y;
                    if (b && !1 !== v) {
                        const e = Object.keys(b),
                            {
                                shapeFlag: t
                            } = _;
                        e.length && 7 & t && (r && e.some(i.tR) && (b = R(b, r)), _ = Kt(_, b))
                    }
                    return n.dirs && (_ = Kt(_), _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs), n.transition && (_.transition = n.transition), y = _, L(k), y
                }
                const D = e => {
                        let t;
                        for (const n in e)("class" === n || "style" === n || (0, i.F7)(n)) && ((t || (t = {}))[n] = e[n]);
                        return t
                    },
                    R = (e, t) => {
                        const n = {};
                        for (const o in e)(0, i.tR)(o) && o.slice(9) in t || (n[o] = e[o]);
                        return n
                    };

                function j(e, t, n) {
                    const o = Object.keys(t);
                    if (o.length !== Object.keys(e).length) return !0;
                    for (let i = 0; i < o.length; i++) {
                        const l = o[i];
                        if (t[l] !== e[l] && !U(n, l)) return !0
                    }
                    return !1
                }

                function E(e, t) {
                    if (Bt) {
                        let n = Bt.provides;
                        const o = Bt.parent && Bt.parent.provides;
                        o === n && (n = Bt.provides = Object.create(o)), n[e] = t
                    }
                }

                function K(e, t, n = !1) {
                    const o = Bt || I;
                    if (o) {
                        const l = null == o.parent ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
                        if (l && e in l) return l[e];
                        if (arguments.length > 1) return n && (0, i.mf)(t) ? t.call(o.proxy) : t
                    }
                }

                function W(e, t) {
                    return P(e, null, t)
                }
                const M = {};

                function $(e, t, n) {
                    return P(e, t, n)
                }

                function P(e, t, {
                    immediate: n,
                    deep: l,
                    flush: a,
                    onTrack: c,
                    onTrigger: p
                } = i.kT) {
                    const u = Bt;
                    let d, f, h = !1,
                        m = !1;
                    if ((0, o.dq)(e) ? (d = () => e.value, h = (0, o.yT)(e)) : (0, o.PG)(e) ? (d = () => e, l = !0) : (0, i.kJ)(e) ? (m = !0, h = e.some((e => (0, o.PG)(e) || (0, o.yT)(e))), d = () => e.map((e => (0, o.dq)(e) ? e.value : (0, o.PG)(e) ? G(e) : (0, i.mf)(e) ? s(e, u, 2) : void 0))) : d = (0, i.mf)(e) ? t ? () => s(e, u, 2) : () => {
                            if (!u || !u.isUnmounted) return f && f(), r(e, u, 3, [v])
                        } : i.dG, t && l) {
                        const e = d;
                        d = () => G(e())
                    }
                    let g, v = e => {
                        f = w.onStop = () => {
                            s(e, u, 4)
                        }
                    };
                    if (Yt) {
                        if (v = i.dG, t ? n && r(t, u, 3, [d(), m ? [] : void 0, v]) : d(), "sync" !== a) return i.dG; {
                            const e = rn();
                            g = e.__watcherHandles || (e.__watcherHandles = [])
                        }
                    }
                    let y = m ? new Array(e.length).fill(M) : M;
                    const k = () => {
                        if (w.active)
                            if (t) {
                                const e = w.run();
                                (l || h || (m ? e.some(((e, t) => (0, i.aU)(e, y[t]))) : (0, i.aU)(e, y))) && (f && f(), r(t, u, 3, [e, y === M ? void 0 : m && y[0] === M ? [] : y, v]), y = e)
                            } else w.run()
                    };
                    let _;
                    k.allowRecurse = !!t, "sync" === a ? _ = k : "post" === a ? _ = () => ct(k, u && u.suspense) : (k.pre = !0, u && (k.id = u.uid), _ = () => b(k));
                    const w = new o.qq(d, _);
                    t ? n ? k() : y = w.run() : "post" === a ? ct(w.run.bind(w), u && u.suspense) : w.run();
                    const x = () => {
                        w.stop(), u && u.scope && (0, i.Od)(u.scope.effects, w)
                    };
                    return g && g.push(x), x
                }

                function q(e, t, n) {
                    const o = this.proxy,
                        l = (0, i.HD)(e) ? e.includes(".") ? J(o, e) : () => o[e] : e.bind(o, o);
                    let s;
                    (0, i.mf)(t) ? s = t: (s = t.handler, n = t);
                    const r = Bt;
                    Nt(this);
                    const a = P(l, s.bind(o), n);
                    return r ? Nt(r) : Qt(), a
                }

                function J(e, t) {
                    const n = t.split(".");
                    return () => {
                        let t = e;
                        for (let e = 0; e < n.length && t; e++) t = t[n[e]];
                        return t
                    }
                }

                function G(e, t) {
                    if (!(0, i.Kn)(e) || e.__v_skip) return e;
                    if ((t = t || new Set).has(e)) return e;
                    if (t.add(e), (0, o.dq)(e)) G(e.value, t);
                    else if ((0, i.kJ)(e))
                        for (let n = 0; n < e.length; n++) G(e[n], t);
                    else if ((0, i.DM)(e) || (0, i._N)(e)) e.forEach((e => {
                        G(e, t)
                    }));
                    else if ((0, i.PO)(e))
                        for (const n in e) G(e[n], t);
                    return e
                }

                function Z() {
                    const e = {
                        isMounted: !1,
                        isLeaving: !1,
                        isUnmounting: !1,
                        leavingVNodes: new Map
                    };
                    return ue((() => {
                        e.isMounted = !0
                    })), he((() => {
                        e.isUnmounting = !0
                    })), e
                }
                const H = [Function, Array],
                    B = {
                        name: "BaseTransition",
                        props: {
                            mode: String,
                            appear: Boolean,
                            persisted: Boolean,
                            onBeforeEnter: H,
                            onEnter: H,
                            onAfterEnter: H,
                            onEnterCancelled: H,
                            onBeforeLeave: H,
                            onLeave: H,
                            onAfterLeave: H,
                            onLeaveCancelled: H,
                            onBeforeAppear: H,
                            onAppear: H,
                            onAfterAppear: H,
                            onAppearCancelled: H
                        },
                        setup(e, {
                            slots: t
                        }) {
                            const n = zt(),
                                i = Z();
                            let l;
                            return () => {
                                const s = t.default && ee(t.default(), !0);
                                if (!s || !s.length) return;
                                let r = s[0];
                                if (s.length > 1) {
                                    let e = !1;
                                    for (const t of s)
                                        if (t.type !== _t) {
                                            r = t, e = !0;
                                            break
                                        }
                                }
                                const a = (0, o.IU)(e),
                                    {
                                        mode: c
                                    } = a;
                                if (i.isLeaving) return Q(r);
                                const p = X(r);
                                if (!p) return Q(r);
                                const u = N(p, a, i, n);
                                Y(p, u);
                                const d = n.subTree,
                                    f = d && X(d);
                                let h = !1;
                                const {
                                    getTransitionKey: m
                                } = p.type;
                                if (m) {
                                    const e = m();
                                    void 0 === l ? l = e : e !== l && (l = e, h = !0)
                                }
                                if (f && f.type !== _t && (!Ot(p, f) || h)) {
                                    const e = N(f, a, i, n);
                                    if (Y(f, e), "out-in" === c) return i.isLeaving = !0, e.afterLeave = () => {
                                        i.isLeaving = !1, !1 !== n.update.active && n.update()
                                    }, Q(r);
                                    "in-out" === c && p.type !== _t && (e.delayLeave = (e, t, n) => {
                                        z(i, f)[String(f.key)] = f, e._leaveCb = () => {
                                            t(), e._leaveCb = void 0, delete u.delayedLeave
                                        }, u.delayedLeave = n
                                    })
                                }
                                return r
                            }
                        }
                    };

                function z(e, t) {
                    const {
                        leavingVNodes: n
                    } = e;
                    let o = n.get(t.type);
                    return o || (o = Object.create(null), n.set(t.type, o)), o
                }

                function N(e, t, n, o) {
                    const {
                        appear: l,
                        mode: s,
                        persisted: a = !1,
                        onBeforeEnter: c,
                        onEnter: p,
                        onAfterEnter: u,
                        onEnterCancelled: d,
                        onBeforeLeave: f,
                        onLeave: h,
                        onAfterLeave: m,
                        onLeaveCancelled: g,
                        onBeforeAppear: v,
                        onAppear: y,
                        onAfterAppear: b,
                        onAppearCancelled: k
                    } = t, _ = String(e.key), w = z(n, e), x = (e, t) => {
                        e && r(e, o, 9, t)
                    }, A = (e, t) => {
                        const n = t[1];
                        x(e, t), (0, i.kJ)(e) ? e.every((e => e.length <= 1)) && n() : e.length <= 1 && n()
                    }, S = {
                        mode: s,
                        persisted: a,
                        beforeEnter(t) {
                            let o = c;
                            if (!n.isMounted) {
                                if (!l) return;
                                o = v || c
                            }
                            t._leaveCb && t._leaveCb(!0);
                            const i = w[_];
                            i && Ot(e, i) && i.el._leaveCb && i.el._leaveCb(), x(o, [t])
                        },
                        enter(e) {
                            let t = p,
                                o = u,
                                i = d;
                            if (!n.isMounted) {
                                if (!l) return;
                                t = y || p, o = b || u, i = k || d
                            }
                            let s = !1;
                            const r = e._enterCb = t => {
                                s || (s = !0, x(t ? i : o, [e]), S.delayedLeave && S.delayedLeave(), e._enterCb = void 0)
                            };
                            t ? A(t, [e, r]) : r()
                        },
                        leave(t, o) {
                            const i = String(e.key);
                            if (t._enterCb && t._enterCb(!0), n.isUnmounting) return o();
                            x(f, [t]);
                            let l = !1;
                            const s = t._leaveCb = n => {
                                l || (l = !0, o(), x(n ? g : m, [t]), t._leaveCb = void 0, w[i] === e && delete w[i])
                            };
                            w[i] = e, h ? A(h, [t, s]) : s()
                        },
                        clone: e => N(e, t, n, o)
                    };
                    return S
                }

                function Q(e) {
                    if (oe(e)) return (e = Kt(e)).children = null, e
                }

                function X(e) {
                    return oe(e) ? e.children ? e.children[0] : void 0 : e
                }

                function Y(e, t) {
                    6 & e.shapeFlag && e.component ? Y(e.component.subTree, t) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
                }

                function ee(e, t = !1, n) {
                    let o = [],
                        i = 0;
                    for (let l = 0; l < e.length; l++) {
                        let s = e[l];
                        const r = null == n ? s.key : String(n) + String(null != s.key ? s.key : l);
                        s.type === bt ? (128 & s.patchFlag && i++, o = o.concat(ee(s.children, t, r))) : (t || s.type !== _t) && o.push(null != r ? Kt(s, {
                            key: r
                        }) : s)
                    }
                    if (i > 1)
                        for (let e = 0; e < o.length; e++) o[e].patchFlag = -2;
                    return o
                }

                function te(e) {
                    return (0, i.mf)(e) ? {
                        setup: e,
                        name: e.name
                    } : e
                }
                const ne = e => !!e.type.__asyncLoader,
                    oe = e => e.type.__isKeepAlive;

                function ie(e, t) {
                    se(e, "a", t)
                }

                function le(e, t) {
                    se(e, "da", t)
                }

                function se(e, t, n = Bt) {
                    const o = e.__wdc || (e.__wdc = () => {
                        let t = n;
                        for (; t;) {
                            if (t.isDeactivated) return;
                            t = t.parent
                        }
                        return e()
                    });
                    if (ae(t, o, n), n) {
                        let e = n.parent;
                        for (; e && e.parent;) oe(e.parent.vnode) && re(o, t, n, e), e = e.parent
                    }
                }

                function re(e, t, n, o) {
                    const l = ae(t, e, o, !0);
                    me((() => {
                        (0, i.Od)(o[t], l)
                    }), n)
                }

                function ae(e, t, n = Bt, i = !1) {
                    if (n) {
                        const l = n[e] || (n[e] = []),
                            s = t.__weh || (t.__weh = (...i) => {
                                if (n.isUnmounted) return;
                                (0, o.Jd)(), Nt(n);
                                const l = r(t, n, e, i);
                                return Qt(), (0, o.lk)(), l
                            });
                        return i ? l.unshift(s) : l.push(s), s
                    }
                }
                RegExp, RegExp;
                const ce = e => (t, n = Bt) => (!Yt || "sp" === e) && ae(e, ((...e) => t(...e)), n),
                    pe = ce("bm"),
                    ue = ce("m"),
                    de = ce("bu"),
                    fe = ce("u"),
                    he = ce("bum"),
                    me = ce("um"),
                    ge = ce("sp"),
                    ve = ce("rtg"),
                    ye = ce("rtc");

                function be(e, t = Bt) {
                    ae("ec", e, t)
                }

                function ke(e, t) {
                    const n = I;
                    if (null === n) return e;
                    const o = nn(n) || n.proxy,
                        l = e.dirs || (e.dirs = []);
                    for (let e = 0; e < t.length; e++) {
                        let [n, s, r, a = i.kT] = t[e];
                        n && ((0, i.mf)(n) && (n = {
                            mounted: n,
                            updated: n
                        }), n.deep && G(s), l.push({
                            dir: n,
                            instance: o,
                            value: s,
                            oldValue: void 0,
                            arg: r,
                            modifiers: a
                        }))
                    }
                    return e
                }

                function _e(e, t, n, i) {
                    const l = e.dirs,
                        s = t && t.dirs;
                    for (let a = 0; a < l.length; a++) {
                        const c = l[a];
                        s && (c.oldValue = s[a].value);
                        let p = c.dir[i];
                        p && ((0, o.Jd)(), r(p, n, 8, [e.el, c, e, t]), (0, o.lk)())
                    }
                }
                const we = "components";

                function xe(e, t) {
                    return Te(we, e, !0, t) || e
                }
                const Ae = Symbol();

                function Se(e) {
                    return (0, i.HD)(e) ? Te(we, e, !1) || e : e || Ae
                }

                function Ce(e) {
                    return Te("directives", e)
                }

                function Te(e, t, n = !0, o = !1) {
                    const l = I || Bt;
                    if (l) {
                        const n = l.type;
                        if (e === we) {
                            const e = function (e, t = !0) {
                                return (0, i.mf)(e) ? e.displayName || e.name : e.name || t && e.__name
                            }(n, !1);
                            if (e && (e === t || e === (0, i._A)(t) || e === (0, i.kC)((0, i._A)(t)))) return n
                        }
                        const s = Ue(l[e] || n[e], t) || Ue(l.appContext[e], t);
                        return !s && o ? n : s
                    }
                }

                function Ue(e, t) {
                    return e && (e[t] || e[(0, i._A)(t)] || e[(0, i.kC)((0, i._A)(t))])
                }

                function Ie(e, t, n, o) {
                    let l;
                    const s = n && n[o];
                    if ((0, i.kJ)(e) || (0, i.HD)(e)) {
                        l = new Array(e.length);
                        for (let n = 0, o = e.length; n < o; n++) l[n] = t(e[n], n, void 0, s && s[n])
                    } else if ("number" == typeof e) {
                        l = new Array(e);
                        for (let n = 0; n < e; n++) l[n] = t(n + 1, n, void 0, s && s[n])
                    } else if ((0, i.Kn)(e))
                        if (e[Symbol.iterator]) l = Array.from(e, ((e, n) => t(e, n, void 0, s && s[n])));
                        else {
                            const n = Object.keys(e);
                            l = new Array(n.length);
                            for (let o = 0, i = n.length; o < i; o++) {
                                const i = n[o];
                                l[o] = t(e[i], i, o, s && s[o])
                            }
                        }
                    else l = [];
                    return n && (n[o] = l), l
                }

                function Ve(e, t, n = {}, o, i) {
                    if (I.isCE || I.parent && ne(I.parent) && I.parent.isCE) return "default" !== t && (n.name = t), Et("slot", n, o && o());
                    let l = e[t];
                    l && l._c && (l._d = !1), St();
                    const s = l && Le(l(n)),
                        r = Vt(bt, {
                            key: n.key || s && s.key || `_${t}`
                        }, s || (o ? o() : []), s && 1 === e._ ? 64 : -2);
                    return !i && r.scopeId && (r.slotScopeIds = [r.scopeId + "-s"]), l && l._c && (l._d = !0), r
                }

                function Le(e) {
                    return e.some((e => !Lt(e) || e.type !== _t && !(e.type === bt && !Le(e.children)))) ? e : null
                }

                function Oe(e, t) {
                    const n = {};
                    for (const o in e) n[t && /[A-Z]/.test(o) ? `on:${o}` : (0, i.hR)(o)] = e[o];
                    return n
                }
                const Fe = e => e ? Xt(e) ? nn(e) || e.proxy : Fe(e.parent) : null,
                    De = (0, i.l7)(Object.create(null), {
                        $: e => e,
                        $el: e => e.vnode.el,
                        $data: e => e.data,
                        $props: e => e.props,
                        $attrs: e => e.attrs,
                        $slots: e => e.slots,
                        $refs: e => e.refs,
                        $parent: e => Fe(e.parent),
                        $root: e => Fe(e.root),
                        $emit: e => e.emit,
                        $options: e => Me(e),
                        $forceUpdate: e => e.f || (e.f = () => b(e.update)),
                        $nextTick: e => e.n || (e.n = y.bind(e.proxy)),
                        $watch: e => q.bind(e)
                    }),
                    Re = (e, t) => e !== i.kT && !e.__isScriptSetup && (0, i.RI)(e, t),
                    je = {
                        get({
                            _: e
                        }, t) {
                            const {
                                ctx: n,
                                setupState: l,
                                data: s,
                                props: r,
                                accessCache: a,
                                type: c,
                                appContext: p
                            } = e;
                            let u;
                            if ("$" !== t[0]) {
                                const o = a[t];
                                if (void 0 !== o) switch (o) {
                                    case 1:
                                        return l[t];
                                    case 2:
                                        return s[t];
                                    case 4:
                                        return n[t];
                                    case 3:
                                        return r[t]
                                } else {
                                    if (Re(l, t)) return a[t] = 1, l[t];
                                    if (s !== i.kT && (0, i.RI)(s, t)) return a[t] = 2, s[t];
                                    if ((u = e.propsOptions[0]) && (0, i.RI)(u, t)) return a[t] = 3, r[t];
                                    if (n !== i.kT && (0, i.RI)(n, t)) return a[t] = 4, n[t];
                                    Ee && (a[t] = 0)
                                }
                            }
                            const d = De[t];
                            let f, h;
                            return d ? ("$attrs" === t && (0, o.j)(e, "get", t), d(e)) : (f = c.__cssModules) && (f = f[t]) ? f : n !== i.kT && (0, i.RI)(n, t) ? (a[t] = 4, n[t]) : (h = p.config.globalProperties, (0, i.RI)(h, t) ? h[t] : void 0)
                        },
                        set({
                            _: e
                        }, t, n) {
                            const {
                                data: o,
                                setupState: l,
                                ctx: s
                            } = e;
                            return Re(l, t) ? (l[t] = n, !0) : o !== i.kT && (0, i.RI)(o, t) ? (o[t] = n, !0) : !((0, i.RI)(e.props, t) || "$" === t[0] && t.slice(1) in e || (s[t] = n, 0))
                        },
                        has({
                            _: {
                                data: e,
                                setupState: t,
                                accessCache: n,
                                ctx: o,
                                appContext: l,
                                propsOptions: s
                            }
                        }, r) {
                            let a;
                            return !!n[r] || e !== i.kT && (0, i.RI)(e, r) || Re(t, r) || (a = s[0]) && (0, i.RI)(a, r) || (0, i.RI)(o, r) || (0, i.RI)(De, r) || (0, i.RI)(l.config.globalProperties, r)
                        },
                        defineProperty(e, t, n) {
                            return null != n.get ? e._.accessCache[t] = 0 : (0, i.RI)(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
                        }
                    };
                let Ee = !0;

                function Ke(e, t, n) {
                    r((0, i.kJ)(e) ? e.map((e => e.bind(t.proxy))) : e.bind(t.proxy), t, n)
                }

                function We(e, t, n, o) {
                    const l = o.includes(".") ? J(n, o) : () => n[o];
                    if ((0, i.HD)(e)) {
                        const n = t[e];
                        (0, i.mf)(n) && $(l, n)
                    } else if ((0, i.mf)(e)) $(l, e.bind(n));
                    else if ((0, i.Kn)(e))
                        if ((0, i.kJ)(e)) e.forEach((e => We(e, t, n, o)));
                        else {
                            const o = (0, i.mf)(e.handler) ? e.handler.bind(n) : t[e.handler];
                            (0, i.mf)(o) && $(l, o, e)
                        }
                }

                function Me(e) {
                    const t = e.type,
                        {
                            mixins: n,
                            extends: o
                        } = t,
                        {
                            mixins: l,
                            optionsCache: s,
                            config: {
                                optionMergeStrategies: r
                            }
                        } = e.appContext,
                        a = s.get(t);
                    let c;
                    return a ? c = a : l.length || n || o ? (c = {}, l.length && l.forEach((e => $e(c, e, r, !0))), $e(c, t, r)) : c = t, (0, i.Kn)(t) && s.set(t, c), c
                }

                function $e(e, t, n, o = !1) {
                    const {
                        mixins: i,
                        extends: l
                    } = t;
                    l && $e(e, l, n, !0), i && i.forEach((t => $e(e, t, n, !0)));
                    for (const i in t)
                        if (o && "expose" === i);
                        else {
                            const o = Pe[i] || n && n[i];
                            e[i] = o ? o(e[i], t[i]) : t[i]
                        } return e
                }
                const Pe = {
                    data: qe,
                    props: Ze,
                    emits: Ze,
                    methods: Ze,
                    computed: Ze,
                    beforeCreate: Ge,
                    created: Ge,
                    beforeMount: Ge,
                    mounted: Ge,
                    beforeUpdate: Ge,
                    updated: Ge,
                    beforeDestroy: Ge,
                    beforeUnmount: Ge,
                    destroyed: Ge,
                    unmounted: Ge,
                    activated: Ge,
                    deactivated: Ge,
                    errorCaptured: Ge,
                    serverPrefetch: Ge,
                    components: Ze,
                    directives: Ze,
                    watch: function (e, t) {
                        if (!e) return t;
                        if (!t) return e;
                        const n = (0, i.l7)(Object.create(null), e);
                        for (const o in t) n[o] = Ge(e[o], t[o]);
                        return n
                    },
                    provide: qe,
                    inject: function (e, t) {
                        return Ze(Je(e), Je(t))
                    }
                };

                function qe(e, t) {
                    return t ? e ? function () {
                        return (0, i.l7)((0, i.mf)(e) ? e.call(this, this) : e, (0, i.mf)(t) ? t.call(this, this) : t)
                    } : t : e
                }

                function Je(e) {
                    if ((0, i.kJ)(e)) {
                        const t = {};
                        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
                        return t
                    }
                    return e
                }

                function Ge(e, t) {
                    return e ? [...new Set([].concat(e, t))] : t
                }

                function Ze(e, t) {
                    return e ? (0, i.l7)((0, i.l7)(Object.create(null), e), t) : t
                }

                function He(e, t, n, l) {
                    const [s, r] = e.propsOptions;
                    let a, c = !1;
                    if (t)
                        for (let o in t) {
                            if ((0, i.Gg)(o)) continue;
                            const p = t[o];
                            let u;
                            s && (0, i.RI)(s, u = (0, i._A)(o)) ? r && r.includes(u) ? (a || (a = {}))[u] = p : n[u] = p : U(e.emitsOptions, o) || o in l && p === l[o] || (l[o] = p, c = !0)
                        }
                    if (r) {
                        const t = (0, o.IU)(n),
                            l = a || i.kT;
                        for (let o = 0; o < r.length; o++) {
                            const a = r[o];
                            n[a] = Be(s, t, a, l[a], e, !(0, i.RI)(l, a))
                        }
                    }
                    return c
                }

                function Be(e, t, n, o, l, s) {
                    const r = e[n];
                    if (null != r) {
                        const e = (0, i.RI)(r, "default");
                        if (e && void 0 === o) {
                            const e = r.default;
                            if (r.type !== Function && (0, i.mf)(e)) {
                                const {
                                    propsDefaults: i
                                } = l;
                                n in i ? o = i[n] : (Nt(l), o = i[n] = e.call(null, t), Qt())
                            } else o = e
                        }
                        r[0] && (s && !e ? o = !1 : !r[1] || "" !== o && o !== (0, i.rs)(n) || (o = !0))
                    }
                    return o
                }

                function ze(e, t, n = !1) {
                    const o = t.propsCache,
                        l = o.get(e);
                    if (l) return l;
                    const s = e.props,
                        r = {},
                        a = [];
                    let c = !1;
                    if (!(0, i.mf)(e)) {
                        const o = e => {
                            c = !0;
                            const [n, o] = ze(e, t, !0);
                            (0, i.l7)(r, n), o && a.push(...o)
                        };
                        !n && t.mixins.length && t.mixins.forEach(o), e.extends && o(e.extends), e.mixins && e.mixins.forEach(o)
                    }
                    if (!s && !c) return (0, i.Kn)(e) && o.set(e, i.Z6), i.Z6;
                    if ((0, i.kJ)(s))
                        for (let e = 0; e < s.length; e++) {
                            const t = (0, i._A)(s[e]);
                            Ne(t) && (r[t] = i.kT)
                        } else if (s)
                            for (const e in s) {
                                const t = (0, i._A)(e);
                                if (Ne(t)) {
                                    const n = s[e],
                                        o = r[t] = (0, i.kJ)(n) || (0, i.mf)(n) ? {
                                            type: n
                                        } : Object.assign({}, n);
                                    if (o) {
                                        const e = Ye(Boolean, o.type),
                                            n = Ye(String, o.type);
                                        o[0] = e > -1, o[1] = n < 0 || e < n, (e > -1 || (0, i.RI)(o, "default")) && a.push(t)
                                    }
                                }
                            }
                    const p = [r, a];
                    return (0, i.Kn)(e) && o.set(e, p), p
                }

                function Ne(e) {
                    return "$" !== e[0]
                }

                function Qe(e) {
                    const t = e && e.toString().match(/^\s*function (\w+)/);
                    return t ? t[1] : null === e ? "null" : ""
                }

                function Xe(e, t) {
                    return Qe(e) === Qe(t)
                }

                function Ye(e, t) {
                    return (0, i.kJ)(t) ? t.findIndex((t => Xe(t, e))) : (0, i.mf)(t) && Xe(t, e) ? 0 : -1
                }
                const et = e => "_" === e[0] || "$stable" === e,
                    tt = e => (0, i.kJ)(e) ? e.map($t) : [$t(e)],
                    nt = (e, t, n) => {
                        if (t._n) return t;
                        const o = O(((...e) => tt(t(...e))), n);
                        return o._c = !1, o
                    },
                    ot = (e, t, n) => {
                        const o = e._ctx;
                        for (const n in e) {
                            if (et(n)) continue;
                            const l = e[n];
                            if ((0, i.mf)(l)) t[n] = nt(0, l, o);
                            else if (null != l) {
                                const e = tt(l);
                                t[n] = () => e
                            }
                        }
                    },
                    it = (e, t) => {
                        const n = tt(t);
                        e.slots.default = () => n
                    };

                function lt() {
                    return {
                        app: null,
                        config: {
                            isNativeTag: i.NO,
                            performance: !1,
                            globalProperties: {},
                            optionMergeStrategies: {},
                            errorHandler: void 0,
                            warnHandler: void 0,
                            compilerOptions: {}
                        },
                        mixins: [],
                        components: {},
                        directives: {},
                        provides: Object.create(null),
                        optionsCache: new WeakMap,
                        propsCache: new WeakMap,
                        emitsCache: new WeakMap
                    }
                }
                let st = 0;

                function rt(e, t) {
                    return function (n, o = null) {
                        (0, i.mf)(n) || (n = Object.assign({}, n)), null == o || (0, i.Kn)(o) || (o = null);
                        const l = lt(),
                            s = new Set;
                        let r = !1;
                        const a = l.app = {
                            _uid: st++,
                            _component: n,
                            _props: o,
                            _container: null,
                            _context: l,
                            _instance: null,
                            version: an,
                            get config() {
                                return l.config
                            },
                            set config(e) {},
                            use: (e, ...t) => (s.has(e) || (e && (0, i.mf)(e.install) ? (s.add(e), e.install(a, ...t)) : (0, i.mf)(e) && (s.add(e), e(a, ...t))), a),
                            mixin: e => (l.mixins.includes(e) || l.mixins.push(e), a),
                            component: (e, t) => t ? (l.components[e] = t, a) : l.components[e],
                            directive: (e, t) => t ? (l.directives[e] = t, a) : l.directives[e],
                            mount(i, s, c) {
                                if (!r) {
                                    const p = Et(n, o);
                                    return p.appContext = l, s && t ? t(p, i) : e(p, i, c), r = !0, a._container = i, i.__vue_app__ = a, nn(p.component) || p.component.proxy
                                }
                            },
                            unmount() {
                                r && (e(null, a._container), delete a._container.__vue_app__)
                            },
                            provide: (e, t) => (l.provides[e] = t, a)
                        };
                        return a
                    }
                }

                function at(e, t, n, l, r = !1) {
                    if ((0, i.kJ)(e)) return void e.forEach(((e, o) => at(e, t && ((0, i.kJ)(t) ? t[o] : t), n, l, r)));
                    if (ne(l) && !r) return;
                    const a = 4 & l.shapeFlag ? nn(l.component) || l.component.proxy : l.el,
                        c = r ? null : a,
                        {
                            i: p,
                            r: u
                        } = e,
                        d = t && t.r,
                        f = p.refs === i.kT ? p.refs = {} : p.refs,
                        h = p.setupState;
                    if (null != d && d !== u && ((0, i.HD)(d) ? (f[d] = null, (0, i.RI)(h, d) && (h[d] = null)) : (0, o.dq)(d) && (d.value = null)), (0, i.mf)(u)) s(u, p, 12, [c, f]);
                    else {
                        const t = (0, i.HD)(u),
                            l = (0, o.dq)(u);
                        if (t || l) {
                            const o = () => {
                                if (e.f) {
                                    const n = t ? (0, i.RI)(h, u) ? h[u] : f[u] : u.value;
                                    r ? (0, i.kJ)(n) && (0, i.Od)(n, a) : (0, i.kJ)(n) ? n.includes(a) || n.push(a) : t ? (f[u] = [a], (0, i.RI)(h, u) && (h[u] = f[u])) : (u.value = [a], e.k && (f[e.k] = u.value))
                                } else t ? (f[u] = c, (0, i.RI)(h, u) && (h[u] = c)) : l && (u.value = c, e.k && (f[e.k] = c))
                            };
                            c ? (o.id = -1, ct(o, n)) : o()
                        }
                    }
                }
                const ct = function (e, t) {
                    var n;
                    t && t.pendingBranch ? (0, i.kJ)(e) ? t.effects.push(...e) : t.effects.push(e) : (n = e, (0, i.kJ)(n) ? f.push(...n) : h && h.includes(n, n.allowRecurse ? m + 1 : m) || f.push(n), k())
                };

                function pt(e) {
                    return function (e, t) {
                        (0, i.E9)().__VUE__ = !0;
                        const {
                            insert: n,
                            remove: l,
                            patchProp: r,
                            createElement: c,
                            createText: p,
                            createComment: f,
                            setText: h,
                            setElementText: m,
                            parentNode: g,
                            nextSibling: v,
                            setScopeId: y = i.dG,
                            insertStaticContent: k
                        } = e, x = (e, t, n, o = null, i = null, l = null, s = !1, r = null, a = !!t.dynamicChildren) => {
                            if (e === t) return;
                            e && !Ot(e, t) && (o = te(e), N(e, i, l, !0), e = null), -2 === t.patchFlag && (a = !1, t.dynamicChildren = null);
                            const {
                                type: c,
                                ref: p,
                                shapeFlag: u
                            } = t;
                            switch (c) {
                                case kt:
                                    A(e, t, n, o);
                                    break;
                                case _t:
                                    S(e, t, n, o);
                                    break;
                                case wt:
                                    null == e && I(t, n, o, s);
                                    break;
                                case bt:
                                    M(e, t, n, o, i, l, s, r, a);
                                    break;
                                default:
                                    1 & u ? L(e, t, n, o, i, l, s, r, a) : 6 & u ? $(e, t, n, o, i, l, s, r, a) : (64 & u || 128 & u) && c.process(e, t, n, o, i, l, s, r, a, le)
                            }
                            null != p && i && at(p, e && e.ref, l, t || e, !t)
                        }, A = (e, t, o, i) => {
                            if (null == e) n(t.el = p(t.children), o, i);
                            else {
                                const n = t.el = e.el;
                                t.children !== e.children && h(n, t.children)
                            }
                        }, S = (e, t, o, i) => {
                            null == e ? n(t.el = f(t.children || ""), o, i) : t.el = e.el
                        }, I = (e, t, n, o) => {
                            [e.el, e.anchor] = k(e.children, t, n, o, e.el, e.anchor)
                        }, V = ({
                            el: e,
                            anchor: t
                        }) => {
                            let n;
                            for (; e && e !== t;) n = v(e), l(e), e = n;
                            l(t)
                        }, L = (e, t, n, o, i, l, s, r, a) => {
                            s = s || "svg" === t.type, null == e ? O(t, n, o, i, l, s, r, a) : E(e, t, i, l, s, r, a)
                        }, O = (e, t, o, l, s, a, p, u) => {
                            let d, f;
                            const {
                                type: h,
                                props: g,
                                shapeFlag: v,
                                transition: y,
                                dirs: b
                            } = e;
                            if (d = e.el = c(e.type, a, g && g.is, g), 8 & v ? m(d, e.children) : 16 & v && R(e.children, d, null, l, s, a && "foreignObject" !== h, p, u), b && _e(e, null, l, "created"), g) {
                                for (const t in g) "value" === t || (0, i.Gg)(t) || r(d, t, null, g[t], a, e.children, l, s, ee);
                                "value" in g && r(d, "value", null, g.value), (f = g.onVnodeBeforeMount) && Gt(f, l, e)
                            }
                            D(d, e, e.scopeId, p, l), b && _e(e, null, l, "beforeMount");
                            const k = (!s || s && !s.pendingBranch) && y && !y.persisted;
                            k && y.beforeEnter(d), n(d, t, o), ((f = g && g.onVnodeMounted) || k || b) && ct((() => {
                                f && Gt(f, l, e), k && y.enter(d), b && _e(e, null, l, "mounted")
                            }), s)
                        }, D = (e, t, n, o, i) => {
                            if (n && y(e, n), o)
                                for (let t = 0; t < o.length; t++) y(e, o[t]);
                            if (i && t === i.subTree) {
                                const t = i.vnode;
                                D(e, t, t.scopeId, t.slotScopeIds, i.parent)
                            }
                        }, R = (e, t, n, o, i, l, s, r, a = 0) => {
                            for (let c = a; c < e.length; c++) {
                                const a = e[c] = r ? Pt(e[c]) : $t(e[c]);
                                x(null, a, t, n, o, i, l, s, r)
                            }
                        }, E = (e, t, n, o, l, s, a) => {
                            const c = t.el = e.el;
                            let {
                                patchFlag: p,
                                dynamicChildren: u,
                                dirs: d
                            } = t;
                            p |= 16 & e.patchFlag;
                            const f = e.props || i.kT,
                                h = t.props || i.kT;
                            let g;
                            n && ut(n, !1), (g = h.onVnodeBeforeUpdate) && Gt(g, n, t, e), d && _e(t, e, n, "beforeUpdate"), n && ut(n, !0);
                            const v = l && "foreignObject" !== t.type;
                            if (u ? K(e.dynamicChildren, u, c, n, o, v, s) : a || Z(e, t, c, null, n, o, v, s, !1), p > 0) {
                                if (16 & p) W(c, t, f, h, n, o, l);
                                else if (2 & p && f.class !== h.class && r(c, "class", null, h.class, l), 4 & p && r(c, "style", f.style, h.style, l), 8 & p) {
                                    const i = t.dynamicProps;
                                    for (let t = 0; t < i.length; t++) {
                                        const s = i[t],
                                            a = f[s],
                                            p = h[s];
                                        p === a && "value" !== s || r(c, s, a, p, l, e.children, n, o, ee)
                                    }
                                }
                                1 & p && e.children !== t.children && m(c, t.children)
                            } else a || null != u || W(c, t, f, h, n, o, l);
                            ((g = h.onVnodeUpdated) || d) && ct((() => {
                                g && Gt(g, n, t, e), d && _e(t, e, n, "updated")
                            }), o)
                        }, K = (e, t, n, o, i, l, s) => {
                            for (let r = 0; r < t.length; r++) {
                                const a = e[r],
                                    c = t[r],
                                    p = a.el && (a.type === bt || !Ot(a, c) || 70 & a.shapeFlag) ? g(a.el) : n;
                                x(a, c, p, null, o, i, l, s, !0)
                            }
                        }, W = (e, t, n, o, l, s, a) => {
                            if (n !== o) {
                                if (n !== i.kT)
                                    for (const c in n)(0, i.Gg)(c) || c in o || r(e, c, n[c], null, a, t.children, l, s, ee);
                                for (const c in o) {
                                    if ((0, i.Gg)(c)) continue;
                                    const p = o[c],
                                        u = n[c];
                                    p !== u && "value" !== c && r(e, c, u, p, a, t.children, l, s, ee)
                                }
                                "value" in o && r(e, "value", n.value, o.value)
                            }
                        }, M = (e, t, o, i, l, s, r, a, c) => {
                            const u = t.el = e ? e.el : p(""),
                                d = t.anchor = e ? e.anchor : p("");
                            let {
                                patchFlag: f,
                                dynamicChildren: h,
                                slotScopeIds: m
                            } = t;
                            m && (a = a ? a.concat(m) : m), null == e ? (n(u, o, i), n(d, o, i), R(t.children, o, d, l, s, r, a, c)) : f > 0 && 64 & f && h && e.dynamicChildren ? (K(e.dynamicChildren, h, o, l, s, r, a), (null != t.key || l && t === l.subTree) && dt(e, t, !0)) : Z(e, t, o, d, l, s, r, a, c)
                        }, $ = (e, t, n, o, i, l, s, r, a) => {
                            t.slotScopeIds = r, null == e ? 512 & t.shapeFlag ? i.ctx.activate(t, n, o, s, a) : P(t, n, o, i, l, s, a) : q(e, t, a)
                        }, P = (e, t, n, l, r, c, p) => {
                            const u = e.component = function (e, t, n) {
                                const l = e.type,
                                    s = (t ? t.appContext : e.appContext) || Zt,
                                    r = {
                                        uid: Ht++,
                                        vnode: e,
                                        type: l,
                                        parent: t,
                                        appContext: s,
                                        root: null,
                                        next: null,
                                        subTree: null,
                                        effect: null,
                                        update: null,
                                        scope: new o.Bj(!0),
                                        render: null,
                                        proxy: null,
                                        exposed: null,
                                        exposeProxy: null,
                                        withProxy: null,
                                        provides: t ? t.provides : Object.create(s.provides),
                                        accessCache: null,
                                        renderCache: [],
                                        components: null,
                                        directives: null,
                                        propsOptions: ze(l, s),
                                        emitsOptions: T(l, s),
                                        emit: null,
                                        emitted: null,
                                        propsDefaults: i.kT,
                                        inheritAttrs: l.inheritAttrs,
                                        ctx: i.kT,
                                        data: i.kT,
                                        props: i.kT,
                                        attrs: i.kT,
                                        slots: i.kT,
                                        refs: i.kT,
                                        setupState: i.kT,
                                        setupContext: null,
                                        suspense: n,
                                        suspenseId: n ? n.pendingId : 0,
                                        asyncDep: null,
                                        asyncResolved: !1,
                                        isMounted: !1,
                                        isUnmounted: !1,
                                        isDeactivated: !1,
                                        bc: null,
                                        c: null,
                                        bm: null,
                                        m: null,
                                        bu: null,
                                        u: null,
                                        um: null,
                                        bum: null,
                                        da: null,
                                        a: null,
                                        rtg: null,
                                        rtc: null,
                                        ec: null,
                                        sp: null
                                    };
                                return r.ctx = {
                                    _: r
                                }, r.root = t ? t.root : r, r.emit = C.bind(null, r), e.ce && e.ce(r), r
                            }(e, l, r);
                            if (oe(e) && (u.ctx.renderer = le), function (e, t = !1) {
                                    Yt = t;
                                    const {
                                        props: n,
                                        children: l
                                    } = e.vnode, r = Xt(e);
                                    ! function (e, t, n, l = !1) {
                                        const s = {},
                                            r = {};
                                        (0, i.Nj)(r, Ft, 1), e.propsDefaults = Object.create(null), He(e, t, s, r);
                                        for (const t in e.propsOptions[0]) t in s || (s[t] = void 0);
                                        n ? e.props = l ? s : (0, o.Um)(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r
                                    }(e, n, r, t), ((e, t) => {
                                        if (32 & e.vnode.shapeFlag) {
                                            const n = t._;
                                            n ? (e.slots = (0, o.IU)(t), (0, i.Nj)(t, "_", n)) : ot(t, e.slots = {})
                                        } else e.slots = {}, t && it(e, t);
                                        (0, i.Nj)(e.slots, Ft, 1)
                                    })(e, l);
                                    const c = r ? function (e, t) {
                                        const n = e.type;
                                        e.accessCache = Object.create(null), e.proxy = (0, o.Xl)(new Proxy(e.ctx, je));
                                        const {
                                            setup: l
                                        } = n;
                                        if (l) {
                                            const n = e.setupContext = l.length > 1 ? function (e) {
                                                const t = t => {
                                                    e.exposed = t || {}
                                                };
                                                let n;
                                                return {
                                                    get attrs() {
                                                        return n || (n = function (e) {
                                                            return new Proxy(e.attrs, {
                                                                get: (t, n) => ((0, o.j)(e, "get", "$attrs"), t[n])
                                                            })
                                                        }(e))
                                                    },
                                                    slots: e.slots,
                                                    emit: e.emit,
                                                    expose: t
                                                }
                                            }(e) : null;
                                            Nt(e), (0, o.Jd)();
                                            const r = s(l, e, 0, [e.props, n]);
                                            if ((0, o.lk)(), Qt(), (0, i.tI)(r)) {
                                                if (r.then(Qt, Qt), t) return r.then((n => {
                                                    en(e, n, t)
                                                })).catch((t => {
                                                    a(t, e, 0)
                                                }));
                                                e.asyncDep = r
                                            } else en(e, r, t)
                                        } else tn(e, t)
                                    }(e, t) : void 0;
                                    Yt = !1
                                }(u), u.asyncDep) {
                                if (r && r.registerDep(u, J), !e.el) {
                                    const e = u.subTree = Et(_t);
                                    S(null, e, t, n)
                                }
                            } else J(u, e, t, n, r, c, p)
                        }, q = (e, t, n) => {
                            const o = t.component = e.component;
                            if (function (e, t, n) {
                                    const {
                                        props: o,
                                        children: i,
                                        component: l
                                    } = e, {
                                        props: s,
                                        children: r,
                                        patchFlag: a
                                    } = t, c = l.emitsOptions;
                                    if (t.dirs || t.transition) return !0;
                                    if (!(n && a >= 0)) return !(!i && !r || r && r.$stable) || o !== s && (o ? !s || j(o, s, c) : !!s);
                                    if (1024 & a) return !0;
                                    if (16 & a) return o ? j(o, s, c) : !!s;
                                    if (8 & a) {
                                        const e = t.dynamicProps;
                                        for (let t = 0; t < e.length; t++) {
                                            const n = e[t];
                                            if (s[n] !== o[n] && !U(c, n)) return !0
                                        }
                                    }
                                    return !1
                                }(e, t, n)) {
                                if (o.asyncDep && !o.asyncResolved) return void G(o, t, n);
                                o.next = t,
                                    function (e) {
                                        const t = u.indexOf(e);
                                        t > d && u.splice(t, 1)
                                    }(o.update), o.update()
                            } else t.el = e.el, o.vnode = t
                        }, J = (e, t, n, l, s, r, a) => {
                            const c = e.effect = new o.qq((() => {
                                    if (e.isMounted) {
                                        let t, {
                                                next: n,
                                                bu: o,
                                                u: l,
                                                parent: c,
                                                vnode: p
                                            } = e,
                                            u = n;
                                        ut(e, !1), n ? (n.el = p.el, G(e, n, a)) : n = p, o && (0, i.ir)(o), (t = n.props && n.props.onVnodeBeforeUpdate) && Gt(t, c, n, p), ut(e, !0);
                                        const d = F(e),
                                            f = e.subTree;
                                        e.subTree = d, x(f, d, g(f.el), te(f), e, s, r), n.el = d.el, null === u && function ({
                                            vnode: e,
                                            parent: t
                                        }, n) {
                                            for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent
                                        }(e, d.el), l && ct(l, s), (t = n.props && n.props.onVnodeUpdated) && ct((() => Gt(t, c, n, p)), s)
                                    } else {
                                        let o;
                                        const {
                                            el: a,
                                            props: c
                                        } = t, {
                                            bm: p,
                                            m: u,
                                            parent: d
                                        } = e, f = ne(t);
                                        if (ut(e, !1), p && (0, i.ir)(p), !f && (o = c && c.onVnodeBeforeMount) && Gt(o, d, t), ut(e, !0), a && re) {
                                            const n = () => {
                                                e.subTree = F(e), re(a, e.subTree, e, s, null)
                                            };
                                            f ? t.type.__asyncLoader().then((() => !e.isUnmounted && n())) : n()
                                        } else {
                                            const o = e.subTree = F(e);
                                            x(null, o, n, l, e, s, r), t.el = o.el
                                        }
                                        if (u && ct(u, s), !f && (o = c && c.onVnodeMounted)) {
                                            const e = t;
                                            ct((() => Gt(o, d, e)), s)
                                        }(256 & t.shapeFlag || d && ne(d.vnode) && 256 & d.vnode.shapeFlag) && e.a && ct(e.a, s), e.isMounted = !0, t = n = l = null
                                    }
                                }), (() => b(p)), e.scope),
                                p = e.update = () => c.run();
                            p.id = e.uid, ut(e, !0), p()
                        }, G = (e, t, n) => {
                            t.component = e;
                            const l = e.vnode.props;
                            e.vnode = t, e.next = null,
                                function (e, t, n, l) {
                                    const {
                                        props: s,
                                        attrs: r,
                                        vnode: {
                                            patchFlag: a
                                        }
                                    } = e, c = (0, o.IU)(s), [p] = e.propsOptions;
                                    let u = !1;
                                    if (!(l || a > 0) || 16 & a) {
                                        let o;
                                        He(e, t, s, r) && (u = !0);
                                        for (const l in c) t && ((0, i.RI)(t, l) || (o = (0, i.rs)(l)) !== l && (0, i.RI)(t, o)) || (p ? !n || void 0 === n[l] && void 0 === n[o] || (s[l] = Be(p, c, l, void 0, e, !0)) : delete s[l]);
                                        if (r !== c)
                                            for (const e in r) t && (0, i.RI)(t, e) || (delete r[e], u = !0)
                                    } else if (8 & a) {
                                        const n = e.vnode.dynamicProps;
                                        for (let o = 0; o < n.length; o++) {
                                            let l = n[o];
                                            if (U(e.emitsOptions, l)) continue;
                                            const a = t[l];
                                            if (p)
                                                if ((0, i.RI)(r, l)) a !== r[l] && (r[l] = a, u = !0);
                                                else {
                                                    const t = (0, i._A)(l);
                                                    s[t] = Be(p, c, t, a, e, !1)
                                                }
                                            else a !== r[l] && (r[l] = a, u = !0)
                                        }
                                    }
                                    u && (0, o.X$)(e, "set", "$attrs")
                                }(e, t.props, l, n), ((e, t, n) => {
                                    const {
                                        vnode: o,
                                        slots: l
                                    } = e;
                                    let s = !0,
                                        r = i.kT;
                                    if (32 & o.shapeFlag) {
                                        const e = t._;
                                        e ? n && 1 === e ? s = !1 : ((0, i.l7)(l, t), n || 1 !== e || delete l._) : (s = !t.$stable, ot(t, l)), r = t
                                    } else t && (it(e, t), r = {
                                        default: 1
                                    });
                                    if (s)
                                        for (const e in l) et(e) || e in r || delete l[e]
                                })(e, t.children, n), (0, o.Jd)(), _(), (0, o.lk)()
                        }, Z = (e, t, n, o, i, l, s, r, a = !1) => {
                            const c = e && e.children,
                                p = e ? e.shapeFlag : 0,
                                u = t.children,
                                {
                                    patchFlag: d,
                                    shapeFlag: f
                                } = t;
                            if (d > 0) {
                                if (128 & d) return void B(c, u, n, o, i, l, s, r, a);
                                if (256 & d) return void H(c, u, n, o, i, l, s, r, a)
                            }
                            8 & f ? (16 & p && ee(c, i, l), u !== c && m(n, u)) : 16 & p ? 16 & f ? B(c, u, n, o, i, l, s, r, a) : ee(c, i, l, !0) : (8 & p && m(n, ""), 16 & f && R(u, n, o, i, l, s, r, a))
                        }, H = (e, t, n, o, l, s, r, a, c) => {
                            e = e || i.Z6, t = t || i.Z6;
                            const p = e.length,
                                u = t.length,
                                d = Math.min(p, u);
                            let f;
                            for (f = 0; f < d; f++) {
                                const o = t[f] = c ? Pt(t[f]) : $t(t[f]);
                                x(e[f], o, n, null, l, s, r, a, c)
                            }
                            p > u ? ee(e, l, s, !0, !1, d) : R(t, n, o, l, s, r, a, c, d)
                        }, B = (e, t, n, o, l, s, r, a, c) => {
                            let p = 0;
                            const u = t.length;
                            let d = e.length - 1,
                                f = u - 1;
                            for (; p <= d && p <= f;) {
                                const o = e[p],
                                    i = t[p] = c ? Pt(t[p]) : $t(t[p]);
                                if (!Ot(o, i)) break;
                                x(o, i, n, null, l, s, r, a, c), p++
                            }
                            for (; p <= d && p <= f;) {
                                const o = e[d],
                                    i = t[f] = c ? Pt(t[f]) : $t(t[f]);
                                if (!Ot(o, i)) break;
                                x(o, i, n, null, l, s, r, a, c), d--, f--
                            }
                            if (p > d) {
                                if (p <= f) {
                                    const e = f + 1,
                                        i = e < u ? t[e].el : o;
                                    for (; p <= f;) x(null, t[p] = c ? Pt(t[p]) : $t(t[p]), n, i, l, s, r, a, c), p++
                                }
                            } else if (p > f)
                                for (; p <= d;) N(e[p], l, s, !0), p++;
                            else {
                                const h = p,
                                    m = p,
                                    g = new Map;
                                for (p = m; p <= f; p++) {
                                    const e = t[p] = c ? Pt(t[p]) : $t(t[p]);
                                    null != e.key && g.set(e.key, p)
                                }
                                let v, y = 0;
                                const b = f - m + 1;
                                let k = !1,
                                    _ = 0;
                                const w = new Array(b);
                                for (p = 0; p < b; p++) w[p] = 0;
                                for (p = h; p <= d; p++) {
                                    const o = e[p];
                                    if (y >= b) {
                                        N(o, l, s, !0);
                                        continue
                                    }
                                    let i;
                                    if (null != o.key) i = g.get(o.key);
                                    else
                                        for (v = m; v <= f; v++)
                                            if (0 === w[v - m] && Ot(o, t[v])) {
                                                i = v;
                                                break
                                            } void 0 === i ? N(o, l, s, !0) : (w[i - m] = p + 1, i >= _ ? _ = i : k = !0, x(o, t[i], n, null, l, s, r, a, c), y++)
                                }
                                const A = k ? function (e) {
                                    const t = e.slice(),
                                        n = [0];
                                    let o, i, l, s, r;
                                    const a = e.length;
                                    for (o = 0; o < a; o++) {
                                        const a = e[o];
                                        if (0 !== a) {
                                            if (i = n[n.length - 1], e[i] < a) {
                                                t[o] = i, n.push(o);
                                                continue
                                            }
                                            for (l = 0, s = n.length - 1; l < s;) r = l + s >> 1, e[n[r]] < a ? l = r + 1 : s = r;
                                            a < e[n[l]] && (l > 0 && (t[o] = n[l - 1]), n[l] = o)
                                        }
                                    }
                                    for (l = n.length, s = n[l - 1]; l-- > 0;) n[l] = s, s = t[s];
                                    return n
                                }(w) : i.Z6;
                                for (v = A.length - 1, p = b - 1; p >= 0; p--) {
                                    const e = m + p,
                                        i = t[e],
                                        d = e + 1 < u ? t[e + 1].el : o;
                                    0 === w[p] ? x(null, i, n, d, l, s, r, a, c) : k && (v < 0 || p !== A[v] ? z(i, n, d, 2) : v--)
                                }
                            }
                        }, z = (e, t, o, i, l = null) => {
                            const {
                                el: s,
                                type: r,
                                transition: a,
                                children: c,
                                shapeFlag: p
                            } = e;
                            if (6 & p) z(e.component.subTree, t, o, i);
                            else if (128 & p) e.suspense.move(t, o, i);
                            else if (64 & p) r.move(e, t, o, le);
                            else if (r !== bt)
                                if (r !== wt)
                                    if (2 !== i && 1 & p && a)
                                        if (0 === i) a.beforeEnter(s), n(s, t, o), ct((() => a.enter(s)), l);
                                        else {
                                            const {
                                                leave: e,
                                                delayLeave: i,
                                                afterLeave: l
                                            } = a, r = () => n(s, t, o), c = () => {
                                                e(s, (() => {
                                                    r(), l && l()
                                                }))
                                            };
                                            i ? i(s, r, c) : c()
                                        }
                            else n(s, t, o);
                            else(({
                                el: e,
                                anchor: t
                            }, o, i) => {
                                let l;
                                for (; e && e !== t;) l = v(e), n(e, o, i), e = l;
                                n(t, o, i)
                            })(e, t, o);
                            else {
                                n(s, t, o);
                                for (let e = 0; e < c.length; e++) z(c[e], t, o, i);
                                n(e.anchor, t, o)
                            }
                        }, N = (e, t, n, o = !1, i = !1) => {
                            const {
                                type: l,
                                props: s,
                                ref: r,
                                children: a,
                                dynamicChildren: c,
                                shapeFlag: p,
                                patchFlag: u,
                                dirs: d
                            } = e;
                            if (null != r && at(r, null, n, e, !0), 256 & p) return void t.ctx.deactivate(e);
                            const f = 1 & p && d,
                                h = !ne(e);
                            let m;
                            if (h && (m = s && s.onVnodeBeforeUnmount) && Gt(m, t, e), 6 & p) Y(e.component, n, o);
                            else {
                                if (128 & p) return void e.suspense.unmount(n, o);
                                f && _e(e, null, t, "beforeUnmount"), 64 & p ? e.type.remove(e, t, n, i, le, o) : c && (l !== bt || u > 0 && 64 & u) ? ee(c, t, n, !1, !0) : (l === bt && 384 & u || !i && 16 & p) && ee(a, t, n), o && Q(e)
                            }(h && (m = s && s.onVnodeUnmounted) || f) && ct((() => {
                                m && Gt(m, t, e), f && _e(e, null, t, "unmounted")
                            }), n)
                        }, Q = e => {
                            const {
                                type: t,
                                el: n,
                                anchor: o,
                                transition: i
                            } = e;
                            if (t === bt) return void X(n, o);
                            if (t === wt) return void V(e);
                            const s = () => {
                                l(n), i && !i.persisted && i.afterLeave && i.afterLeave()
                            };
                            if (1 & e.shapeFlag && i && !i.persisted) {
                                const {
                                    leave: t,
                                    delayLeave: o
                                } = i, l = () => t(n, s);
                                o ? o(e.el, s, l) : l()
                            } else s()
                        }, X = (e, t) => {
                            let n;
                            for (; e !== t;) n = v(e), l(e), e = n;
                            l(t)
                        }, Y = (e, t, n) => {
                            const {
                                bum: o,
                                scope: l,
                                update: s,
                                subTree: r,
                                um: a
                            } = e;
                            o && (0, i.ir)(o), l.stop(), s && (s.active = !1, N(r, e, t, n)), a && ct(a, t), ct((() => {
                                e.isUnmounted = !0
                            }), t), t && t.pendingBranch && !t.isUnmounted && e.asyncDep && !e.asyncResolved && e.suspenseId === t.pendingId && (t.deps--, 0 === t.deps && t.resolve())
                        }, ee = (e, t, n, o = !1, i = !1, l = 0) => {
                            for (let s = l; s < e.length; s++) N(e[s], t, n, o, i)
                        }, te = e => 6 & e.shapeFlag ? te(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : v(e.anchor || e.el), ie = (e, t, n) => {
                            null == e ? t._vnode && N(t._vnode, null, null, !0) : x(t._vnode || null, e, t, null, null, null, n), _(), w(), t._vnode = e
                        }, le = {
                            p: x,
                            um: N,
                            m: z,
                            r: Q,
                            mt: P,
                            mc: R,
                            pc: Z,
                            pbc: K,
                            n: te,
                            o: e
                        };
                        let se, re;
                        return t && ([se, re] = t(le)), {
                            render: ie,
                            hydrate: se,
                            createApp: rt(ie, se)
                        }
                    }(e)
                }

                function ut({
                    effect: e,
                    update: t
                }, n) {
                    e.allowRecurse = t.allowRecurse = n
                }

                function dt(e, t, n = !1) {
                    const o = e.children,
                        l = t.children;
                    if ((0, i.kJ)(o) && (0, i.kJ)(l))
                        for (let e = 0; e < o.length; e++) {
                            const t = o[e];
                            let i = l[e];
                            1 & i.shapeFlag && !i.dynamicChildren && ((i.patchFlag <= 0 || 32 === i.patchFlag) && (i = l[e] = Pt(l[e]), i.el = t.el), n || dt(t, i)), i.type === kt && (i.el = t.el)
                        }
                }
                const ft = e => e && (e.disabled || "" === e.disabled),
                    ht = e => "undefined" != typeof SVGElement && e instanceof SVGElement,
                    mt = (e, t) => {
                        const n = e && e.to;
                        if ((0, i.HD)(n)) {
                            if (t) {
                                return t(n)
                            }
                            return null
                        }
                        return n
                    };

                function gt(e, t, n, {
                    o: {
                        insert: o
                    },
                    m: i
                }, l = 2) {
                    0 === l && o(e.targetAnchor, t, n);
                    const {
                        el: s,
                        anchor: r,
                        shapeFlag: a,
                        children: c,
                        props: p
                    } = e, u = 2 === l;
                    if (u && o(s, t, n), (!u || ft(p)) && 16 & a)
                        for (let e = 0; e < c.length; e++) i(c[e], t, n, 2);
                    u && o(r, t, n)
                }
                const vt = {
                    __isTeleport: !0,
                    process(e, t, n, o, i, l, s, r, a, c) {
                        const {
                            mc: p,
                            pc: u,
                            pbc: d,
                            o: {
                                insert: f,
                                querySelector: h,
                                createText: m,
                                createComment: g
                            }
                        } = c, v = ft(t.props);
                        let {
                            shapeFlag: y,
                            children: b,
                            dynamicChildren: k
                        } = t;
                        if (null == e) {
                            const e = t.el = m(""),
                                c = t.anchor = m("");
                            f(e, n, o), f(c, n, o);
                            const u = t.target = mt(t.props, h),
                                d = t.targetAnchor = m("");
                            u && (f(d, u), s = s || ht(u));
                            const g = (e, t) => {
                                16 & y && p(b, e, t, i, l, s, r, a)
                            };
                            v ? g(n, c) : u && g(u, d)
                        } else {
                            t.el = e.el;
                            const o = t.anchor = e.anchor,
                                p = t.target = e.target,
                                f = t.targetAnchor = e.targetAnchor,
                                m = ft(e.props),
                                g = m ? n : p,
                                y = m ? o : f;
                            if (s = s || ht(p), k ? (d(e.dynamicChildren, k, g, i, l, s, r), dt(e, t, !0)) : a || u(e, t, g, y, i, l, s, r, !1), v) m || gt(t, n, o, c, 1);
                            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                                const e = t.target = mt(t.props, h);
                                e && gt(t, e, null, c, 0)
                            } else m && gt(t, p, f, c, 1)
                        }
                        yt(t)
                    },
                    remove(e, t, n, o, {
                        um: i,
                        o: {
                            remove: l
                        }
                    }, s) {
                        const {
                            shapeFlag: r,
                            children: a,
                            anchor: c,
                            targetAnchor: p,
                            target: u,
                            props: d
                        } = e;
                        if (u && l(p), (s || !ft(d)) && (l(c), 16 & r))
                            for (let e = 0; e < a.length; e++) {
                                const o = a[e];
                                i(o, t, n, !0, !!o.dynamicChildren)
                            }
                    },
                    move: gt,
                    hydrate: function (e, t, n, o, i, l, {
                        o: {
                            nextSibling: s,
                            parentNode: r,
                            querySelector: a
                        }
                    }, c) {
                        const p = t.target = mt(t.props, a);
                        if (p) {
                            const a = p._lpa || p.firstChild;
                            if (16 & t.shapeFlag)
                                if (ft(t.props)) t.anchor = c(s(e), t, r(e), n, o, i, l), t.targetAnchor = a;
                                else {
                                    t.anchor = s(e);
                                    let r = a;
                                    for (; r;)
                                        if (r = s(r), r && 8 === r.nodeType && "teleport anchor" === r.data) {
                                            t.targetAnchor = r, p._lpa = t.targetAnchor && s(t.targetAnchor);
                                            break
                                        } c(a, t, p, n, o, i, l)
                                } yt(t)
                        }
                        return t.anchor && s(t.anchor)
                    }
                };

                function yt(e) {
                    const t = e.ctx;
                    if (t && t.ut) {
                        let n = e.children[0].el;
                        for (; n !== e.targetAnchor;) 1 === n.nodeType && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
                        t.ut()
                    }
                }
                const bt = Symbol(void 0),
                    kt = Symbol(void 0),
                    _t = Symbol(void 0),
                    wt = Symbol(void 0),
                    xt = [];
                let At = null;

                function St(e = !1) {
                    xt.push(At = e ? null : [])
                }
                let Ct = 1;

                function Tt(e) {
                    Ct += e
                }

                function Ut(e) {
                    return e.dynamicChildren = Ct > 0 ? At || i.Z6 : null, xt.pop(), At = xt[xt.length - 1] || null, Ct > 0 && At && At.push(e), e
                }

                function It(e, t, n, o, i, l) {
                    return Ut(jt(e, t, n, o, i, l, !0))
                }

                function Vt(e, t, n, o, i) {
                    return Ut(Et(e, t, n, o, i, !0))
                }

                function Lt(e) {
                    return !!e && !0 === e.__v_isVNode
                }

                function Ot(e, t) {
                    return e.type === t.type && e.key === t.key
                }
                const Ft = "__vInternal",
                    Dt = ({
                        key: e
                    }) => null != e ? e : null,
                    Rt = ({
                        ref: e,
                        ref_key: t,
                        ref_for: n
                    }) => null != e ? (0, i.HD)(e) || (0, o.dq)(e) || (0, i.mf)(e) ? {
                        i: I,
                        r: e,
                        k: t,
                        f: !!n
                    } : e : null;

                function jt(e, t = null, n = null, o = 0, l = null, s = (e === bt ? 0 : 1), r = !1, a = !1) {
                    const c = {
                        __v_isVNode: !0,
                        __v_skip: !0,
                        type: e,
                        props: t,
                        key: t && Dt(t),
                        ref: t && Rt(t),
                        scopeId: V,
                        slotScopeIds: null,
                        children: n,
                        component: null,
                        suspense: null,
                        ssContent: null,
                        ssFallback: null,
                        dirs: null,
                        transition: null,
                        el: null,
                        anchor: null,
                        target: null,
                        targetAnchor: null,
                        staticCount: 0,
                        shapeFlag: s,
                        patchFlag: o,
                        dynamicProps: l,
                        dynamicChildren: null,
                        appContext: null,
                        ctx: I
                    };
                    return a ? (qt(c, n), 128 & s && e.normalize(c)) : n && (c.shapeFlag |= (0, i.HD)(n) ? 8 : 16), Ct > 0 && !r && At && (c.patchFlag > 0 || 6 & s) && 32 !== c.patchFlag && At.push(c), c
                }
                const Et = function (e, t = null, n = null, l = 0, s = null, r = !1) {
                    if (e && e !== Ae || (e = _t), Lt(e)) {
                        const o = Kt(e, t, !0);
                        return n && qt(o, n), Ct > 0 && !r && At && (6 & o.shapeFlag ? At[At.indexOf(e)] = o : At.push(o)), o.patchFlag |= -2, o
                    }
                    if (a = e, (0, i.mf)(a) && "__vccOpts" in a && (e = e.__vccOpts), t) {
                        t = function (e) {
                            return e ? (0, o.X3)(e) || Ft in e ? (0, i.l7)({}, e) : e : null
                        }(t);
                        let {
                            class: e,
                            style: n
                        } = t;
                        e && !(0, i.HD)(e) && (t.class = (0, i.C_)(e)), (0, i.Kn)(n) && ((0, o.X3)(n) && !(0, i.kJ)(n) && (n = (0, i.l7)({}, n)), t.style = (0, i.j5)(n))
                    }
                    var a;
                    return jt(e, t, n, l, s, (0, i.HD)(e) ? 1 : (e => e.__isSuspense)(e) ? 128 : (e => e.__isTeleport)(e) ? 64 : (0, i.Kn)(e) ? 4 : (0, i.mf)(e) ? 2 : 0, r, !0)
                };

                function Kt(e, t, n = !1) {
                    const {
                        props: o,
                        ref: l,
                        patchFlag: s,
                        children: r
                    } = e, a = t ? Jt(o || {}, t) : o;
                    return {
                        __v_isVNode: !0,
                        __v_skip: !0,
                        type: e.type,
                        props: a,
                        key: a && Dt(a),
                        ref: t && t.ref ? n && l ? (0, i.kJ)(l) ? l.concat(Rt(t)) : [l, Rt(t)] : Rt(t) : l,
                        scopeId: e.scopeId,
                        slotScopeIds: e.slotScopeIds,
                        children: r,
                        target: e.target,
                        targetAnchor: e.targetAnchor,
                        staticCount: e.staticCount,
                        shapeFlag: e.shapeFlag,
                        patchFlag: t && e.type !== bt ? -1 === s ? 16 : 16 | s : s,
                        dynamicProps: e.dynamicProps,
                        dynamicChildren: e.dynamicChildren,
                        appContext: e.appContext,
                        dirs: e.dirs,
                        transition: e.transition,
                        component: e.component,
                        suspense: e.suspense,
                        ssContent: e.ssContent && Kt(e.ssContent),
                        ssFallback: e.ssFallback && Kt(e.ssFallback),
                        el: e.el,
                        anchor: e.anchor,
                        ctx: e.ctx
                    }
                }

                function Wt(e = " ", t = 0) {
                    return Et(kt, null, e, t)
                }

                function Mt(e = "", t = !1) {
                    return t ? (St(), Vt(_t, null, e)) : Et(_t, null, e)
                }

                function $t(e) {
                    return null == e || "boolean" == typeof e ? Et(_t) : (0, i.kJ)(e) ? Et(bt, null, e.slice()) : "object" == typeof e ? Pt(e) : Et(kt, null, String(e))
                }

                function Pt(e) {
                    return null === e.el && -1 !== e.patchFlag || e.memo ? e : Kt(e)
                }

                function qt(e, t) {
                    let n = 0;
                    const {
                        shapeFlag: o
                    } = e;
                    if (null == t) t = null;
                    else if ((0, i.kJ)(t)) n = 16;
                    else if ("object" == typeof t) {
                        if (65 & o) {
                            const n = t.default;
                            return void(n && (n._c && (n._d = !1), qt(e, n()), n._c && (n._d = !0)))
                        } {
                            n = 32;
                            const o = t._;
                            o || Ft in t ? 3 === o && I && (1 === I.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = I
                        }
                    } else(0, i.mf)(t) ? (t = {
                        default: t,
                        _ctx: I
                    }, n = 32) : (t = String(t), 64 & o ? (n = 16, t = [Wt(t)]) : n = 8);
                    e.children = t, e.shapeFlag |= n
                }

                function Jt(...e) {
                    const t = {};
                    for (let n = 0; n < e.length; n++) {
                        const o = e[n];
                        for (const e in o)
                            if ("class" === e) t.class !== o.class && (t.class = (0, i.C_)([t.class, o.class]));
                            else if ("style" === e) t.style = (0, i.j5)([t.style, o.style]);
                        else if ((0, i.F7)(e)) {
                            const n = t[e],
                                l = o[e];
                            !l || n === l || (0, i.kJ)(n) && n.includes(l) || (t[e] = n ? [].concat(n, l) : l)
                        } else "" !== e && (t[e] = o[e])
                    }
                    return t
                }

                function Gt(e, t, n, o = null) {
                    r(e, t, 7, [n, o])
                }
                const Zt = lt();
                let Ht = 0;
                let Bt = null;
                const zt = () => Bt || I,
                    Nt = e => {
                        Bt = e, e.scope.on()
                    },
                    Qt = () => {
                        Bt && Bt.scope.off(), Bt = null
                    };

                function Xt(e) {
                    return 4 & e.vnode.shapeFlag
                }
                let Yt = !1;

                function en(e, t, n) {
                    (0, i.mf)(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t: (0, i.Kn)(t) && (e.setupState = (0, o.WL)(t)), tn(e, n)
                }

                function tn(e, t, n) {
                    const l = e.type;
                    e.render || (e.render = l.render || i.dG), Nt(e), (0, o.Jd)(),
                        function (e) {
                            const t = Me(e),
                                n = e.proxy,
                                l = e.ctx;
                            Ee = !1, t.beforeCreate && Ke(t.beforeCreate, e, "bc");
                            const {
                                data: s,
                                computed: r,
                                methods: a,
                                watch: c,
                                provide: p,
                                inject: u,
                                created: d,
                                beforeMount: f,
                                mounted: h,
                                beforeUpdate: m,
                                updated: g,
                                activated: v,
                                deactivated: y,
                                beforeDestroy: b,
                                beforeUnmount: k,
                                destroyed: _,
                                unmounted: w,
                                render: x,
                                renderTracked: A,
                                renderTriggered: S,
                                errorCaptured: C,
                                serverPrefetch: T,
                                expose: U,
                                inheritAttrs: I,
                                components: V,
                                directives: L,
                                filters: O
                            } = t;
                            if (u && function (e, t, n = i.dG, l = !1) {
                                    (0, i.kJ)(e) && (e = Je(e));
                                    for (const n in e) {
                                        const s = e[n];
                                        let r;
                                        r = (0, i.Kn)(s) ? "default" in s ? K(s.from || n, s.default, !0) : K(s.from || n) : K(s), (0, o.dq)(r) && l ? Object.defineProperty(t, n, {
                                            enumerable: !0,
                                            configurable: !0,
                                            get: () => r.value,
                                            set: e => r.value = e
                                        }) : t[n] = r
                                    }
                                }(u, l, null, e.appContext.config.unwrapInjectedRef), a)
                                for (const e in a) {
                                    const t = a[e];
                                    (0, i.mf)(t) && (l[e] = t.bind(n))
                                }
                            if (s) {
                                const t = s.call(n, n);
                                (0, i.Kn)(t) && (e.data = (0, o.qj)(t))
                            }
                            if (Ee = !0, r)
                                for (const e in r) {
                                    const t = r[e],
                                        o = (0, i.mf)(t) ? t.bind(n, n) : (0, i.mf)(t.get) ? t.get.bind(n, n) : i.dG,
                                        s = !(0, i.mf)(t) && (0, i.mf)(t.set) ? t.set.bind(n) : i.dG,
                                        a = on({
                                            get: o,
                                            set: s
                                        });
                                    Object.defineProperty(l, e, {
                                        enumerable: !0,
                                        configurable: !0,
                                        get: () => a.value,
                                        set: e => a.value = e
                                    })
                                }
                            if (c)
                                for (const e in c) We(c[e], l, n, e);
                            if (p) {
                                const e = (0, i.mf)(p) ? p.call(n) : p;
                                Reflect.ownKeys(e).forEach((t => {
                                    E(t, e[t])
                                }))
                            }

                            function F(e, t) {
                                (0, i.kJ)(t) ? t.forEach((t => e(t.bind(n)))): t && e(t.bind(n))
                            }
                            if (d && Ke(d, e, "c"), F(pe, f), F(ue, h), F(de, m), F(fe, g), F(ie, v), F(le, y), F(be, C), F(ye, A), F(ve, S), F(he, k), F(me, w), F(ge, T), (0, i.kJ)(U))
                                if (U.length) {
                                    const t = e.exposed || (e.exposed = {});
                                    U.forEach((e => {
                                        Object.defineProperty(t, e, {
                                            get: () => n[e],
                                            set: t => n[e] = t
                                        })
                                    }))
                                } else e.exposed || (e.exposed = {});
                            x && e.render === i.dG && (e.render = x), null != I && (e.inheritAttrs = I), V && (e.components = V), L && (e.directives = L)
                        }(e), (0, o.lk)(), Qt()
                }

                function nn(e) {
                    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy((0, o.WL)((0, o.Xl)(e.exposed)), {
                        get: (t, n) => n in t ? t[n] : n in De ? De[n](e) : void 0,
                        has: (e, t) => t in e || t in De
                    }))
                }
                const on = (e, t) => (0, o.Fl)(e, t, Yt);

                function ln(e, t, n) {
                    const o = arguments.length;
                    return 2 === o ? (0, i.Kn)(t) && !(0, i.kJ)(t) ? Lt(t) ? Et(e, null, [t]) : Et(e, t) : Et(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : 3 === o && Lt(n) && (n = [n]), Et(e, t, n))
                }
                const sn = Symbol(""),
                    rn = () => K(sn),
                    an = "3.2.45"
            },
            3914: (e, t, n) => {
                var o = n(341),
                    i = (n(4573), n(8487), n(1068)),
                    l = n(2667),
                    s = n(5221),
                    r = n(3145);

                function a(e, {
                    scope: t = ""
                } = {}) {
                    const n = {};
                    for (const [o, i] of Object.entries(e)) n[o] = [], i.forEach((function (e) {
                        const i = {
                            value: e,
                            title: (0, l.Q)(`${t?t+"_":""}${e}`)
                        };
                        n[o].push(i)
                    }));
                    return n
                }
                var c = n(9369),
                    p = n(6229),
                    u = n(2502),
                    d = n(9032);
                const f = {
                        class: "section"
                    },
                    h = {
                        class: "option-wrap"
                    },
                    m = {
                        class: "option select"
                    },
                    g = {
                        key: 0,
                        class: "option text-field"
                    },
                    v = {
                        key: 1,
                        class: "service-guide",
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://github.com/dessant/buster/wiki/Configuring-Google-Cloud-Speech-to-Text"
                    },
                    y = {
                        key: 2,
                        class: "option text-field"
                    },
                    b = {
                        key: 3,
                        class: "option text-field"
                    },
                    k = {
                        key: 4,
                        class: "service-guide",
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://github.com/dessant/buster/wiki/Configuring-IBM-Watson-Speech-to-Text"
                    },
                    _ = {
                        key: 5,
                        class: "option select"
                    },
                    w = {
                        key: 6,
                        class: "option text-field"
                    },
                    x = {
                        key: 7,
                        class: "service-guide",
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://github.com/dessant/buster/wiki/Configuring-Microsoft-Azure-Speech-to-Text"
                    },
                    A = {
                        key: 9,
                        class: "wit-add-api"
                    },
                    S = {
                        key: 10,
                        class: "service-guide",
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://github.com/dessant/buster/wiki/Configuring-Wit.ai"
                    },
                    C = {
                        class: "section section-client"
                    },
                    T = {
                        class: "option-wrap"
                    },
                    U = {
                        key: 0,
                        class: "option"
                    },
                    I = {
                        key: 1,
                        class: "option"
                    },
                    V = {
                        key: 2,
                        class: "option"
                    },
                    L = {
                        key: 3,
                        class: "client-download"
                    },
                    O = ["innerHTML"],
                    F = {
                        key: 0,
                        class: "download-error"
                    },
                    D = ["href"],
                    R = {
                        class: "section"
                    },
                    j = {
                        class: "option-wrap"
                    },
                    E = {
                        class: "option select"
                    },
                    K = {
                        class: "option"
                    },
                    W = {
                        key: 0,
                        class: "option"
                    },
                    M = {
                        key: 1,
                        class: "option"
                    },
                    $ = {
                        key: 2,
                        class: "option button"
                    };
                var P = n(2343),
                    q = n(6621),
                    J = n(1310),
                    G = (n(3758), n(6115)),
                    Z = n(8549),
                    H = n(7893);
                const B = ["speechService", "googleSpeechApiKey", "ibmSpeechApiUrl", "ibmSpeechApiKey", "microsoftSpeechApiLoc", "microsoftSpeechApiKey", "witSpeechApiKeys", "loadEnglishChallenge", "tryEnglishSpeechModel", "simulateUserInput", "autoUpdateClientApp", "navigateWithKeyboard", "appTheme", "showContribPage"],
                    z = ["windows/amd64", "windows/386", "linux/amd64", "macos/amd64"],
                    N = {
                        ar: "arabic",
                        af: "",
                        am: "",
                        hy: "",
                        az: "",
                        eu: "",
                        bn: "bengali",
                        bg: "",
                        ca: "",
                        "zh-HK": "",
                        "zh-CN": "chinese",
                        "zh-TW": "chinese",
                        hr: "",
                        cs: "",
                        da: "",
                        nl: "dutch",
                        "en-GB": "english",
                        en: "english",
                        et: "",
                        fil: "",
                        fi: "finnish",
                        fr: "french",
                        "fr-CA": "french",
                        gl: "",
                        ka: "",
                        de: "german",
                        "de-AT": "german",
                        "de-CH": "german",
                        el: "",
                        gu: "",
                        iw: "",
                        hi: "hindi",
                        hu: "",
                        is: "",
                        id: "indonesian",
                        it: "italian",
                        ja: "japanese",
                        kn: "kannada",
                        ko: "korean",
                        lo: "",
                        lv: "",
                        lt: "",
                        ms: "malay",
                        ml: "malayalam",
                        mr: "marathi",
                        mn: "",
                        no: "",
                        fa: "",
                        pl: "polish",
                        pt: "portuguese",
                        "pt-BR": "portuguese",
                        "pt-PT": "portuguese",
                        ro: "",
                        ru: "russian",
                        sr: "",
                        si: "sinhala",
                        sk: "",
                        sl: "",
                        es: "spanish",
                        "es-419": "spanish",
                        sw: "",
                        sv: "swedish",
                        ta: "tamil",
                        te: "",
                        th: "thai",
                        tr: "turkish",
                        uk: "",
                        ur: "urdu",
                        vi: "vietnamese",
                        zu: ""
                    },
                    Q = ["southafricanorth", "eastasia", "southeastasia", "australiaeast", "centralindia", "japaneast", "japanwest", "koreacentral", "canadacentral", "northeurope", "westeurope", "francecentral", "germanywestcentral", "norwayeast", "switzerlandnorth", "switzerlandwest", "uksouth", "uaenorth", "brazilsouth", "centralus", "eastus", "eastus2", "northcentralus", "southcentralus", "westcentralus", "westus", "westus2", "westus3"];
                var X = n(3145);
                const Y = {
                        components: {
                            [q.Z.name]: q.Z,
                            [J.Z.name]: J.Z,
                            [G.Z.name]: G.Z,
                            [Z.Z.name]: Z.Z,
                            [H.Z.name]: H.Z
                        },
                        data: function () {
                            return {
                                dataLoaded: !1,
                                listItems: {
                                    ...a({
                                        speechService: ["witSpeechApiDemo", "googleSpeechApi", "witSpeechApi", "ibmSpeechApi", "microsoftSpeechApi"]
                                    }, {
                                        scope: "optionValue_speechService"
                                    }),
                                    ...a({
                                        microsoftSpeechApiLoc: Q
                                    }, {
                                        scope: "optionValue_microsoftSpeechApiLoc"
                                    }),
                                    ...a({
                                        witSpeechApiLang: [...new Set(Object.values(N).filter(Boolean))].sort()
                                    }, {
                                        scope: "optionValue_witSpeechApiLang"
                                    }),
                                    ...a({
                                        appTheme: ["auto", "light", "dark"]
                                    }, {
                                        scope: "optionValue_appTheme"
                                    })
                                },
                                enableContributions: s.pL,
                                witSpeechApiLang: N.en,
                                witSpeechApis: "YXXP7NHK3HBMWCGU22RJOED3L2XPX3X6",
                                clientAppVerified: !1,
                                clientAppInstalled: !1,
                                clientAppDownloadUrl: "",
                                installGuideUrl: "",
                                options: {
                                    speechService: "",
                                    googleSpeechApiKey: "",
                                    ibmSpeechApiUrl: "",
                                    ibmSpeechApiKey: "",
                                    microsoftSpeechApiLoc: "",
                                    microsoftSpeechApiKey: "",
                                    witSpeechApiKeys: "YXXP7NHK3HBMWCGU22RJOED3L2XPX3X6",
                                    loadEnglishChallenge: !0,
                                    tryEnglishSpeechModel: !0,
                                    simulateUserInput: !1,
                                    autoUpdateClientApp: !1,
                                    navigateWithKeyboard: !1,
                                    appTheme: "",
                                    showContribPage: !1
                                }
                            }
                        },
                        methods: {
                            getText: l.Q,
                            verifyClientApp: async function () {
                                try {
                                    await async function ({
                                        start: e = !0,
                                        stop: t = !0,
                                        checkResponse: n = !0
                                    } = {}) {
                                        e && await r.runtime.sendMessage({
                                            id: "startClientApp"
                                        });
                                        const o = await r.runtime.sendMessage({
                                            id: "messageClientApp",
                                            message: {
                                                command: "ping"
                                            }
                                        });
                                        if (t && await r.runtime.sendMessage({
                                                id: "stopClientApp"
                                            }), n && (!o.success || "pong" !== o.data)) throw new Error(`Client app response: ${o.data}`);
                                        return o
                                    }(), this.clientAppInstalled = !0
                                } catch (e) {
                                    if (!this.installGuideUrl) {
                                        this.installGuideUrl = "https://github.com/dessant/buster/wiki/Installing-the-client-app";
                                        const {
                                            os: e,
                                            arch: t
                                        } = this.$env;
                                        z.includes(`${e}/${t}`) && (this.installGuideUrl += `#${e}`, this.clientAppDownloadUrl = `https://github.com/dessant/buster-client/releases/download/v${s.Ow}/buster-client-setup-v${s.Ow}-${e}-${t}`, "windows" === e && (this.clientAppDownloadUrl += ".exe"))
                                    }
                                    this.clientAppInstalled = !1
                                }
                                this.clientAppVerified = !0
                            },
                            setWitSpeechApiLangOptions: function () {
                                this.listItems.witSpeechApiLang = this.listItems.witSpeechApiLang.filter((e => !this.witSpeechApis.includes(e.value)))
                            },
                            addWitSpeechApi: function () {
                                this.witSpeechApis.push(this.witSpeechApiLang), this.witSpeechApiLang = null, this.setWitSpeechApiLangOptions()
                            },
                            saveWitSpeechApiKey: function (e, t) {
                                const n = this.options.witSpeechApiKeys;
                                e ? this.options.witSpeechApiKeys = Object.assign({}, n, {
                                    [t]: e
                                }) : n[t] && (delete n[t], this.options.witSpeechApiKeys = Object.assign({}, n))
                            },
                            showContribute: async function () {
                                await async function ({
                                    action: e = "",
                                    activeTab: t = null,
                                    setOpenerTab: n = !0,
                                    updateStats: o = !0
                                } = {}) {
                                    o && await i.ZP.set({
                                        contribPageLastOpen: (0, l.Og)()
                                    }), t || (t = await (0, l.fr)());
                                    let s = r.runtime.getURL("/src/contribute/index.html");
                                    e && (s = `${s}?action=${e}`);
                                    const a = {
                                        url: s,
                                        index: t.index + 1,
                                        active: !0
                                    };
                                    return n && t.id !== r.tabs.TAB_ID_NONE && "android" !== (await (0, l.Xf)()).os && (a.openerTabId = t.id), r.tabs.create(a)
                                }()
                            }
                        },
                        created: async function () {
                            const e = await i.ZP.get(B);
                            for (const t of Object.keys(this.options)) this.options[t] = e[t], this.$watch(`options.${t}`, (async function (e) {
                                await i.ZP.set({
                                    [t]: (0, P.IU)(e)
                                }), await X.runtime.sendMessage({
                                    id: "optionChange"
                                })
                            }), {
                                deep: !0
                            });
                            this.witSpeechApis = Object.keys(e.witSpeechApiKeys), this.setWitSpeechApiLangOptions(), document.title = (0, l.Q)("pageTitle", [(0, l.Q)("pageTitle_options"), (0, l.Q)("extensionName")]), this.verifyClientApp(), this.dataLoaded = !0
                        }
                    },
                    ee = (0, n(6021).Z)(Y, [
                        ["render", function (e, t, n, o, i, l) {
                            const s = (0, p.up)("vn-select"),
                                r = (0, p.up)("vn-text-field"),
                                a = (0, p.up)("vn-button"),
                                c = (0, p.up)("vn-switch"),
                                P = (0, p.up)("vn-icon");
                            return e.dataLoaded ? ((0, p.wg)(), (0, p.j4)(d.q, {
                                key: 0,
                                id: "app"
                            }, {
                                default: (0, p.w5)((() => [(0, p._)("div", f, [t[0] || ((0, p.qZ)(-1), t[0] = (0, p._)("div", {
                                    class: "section-title"
                                }, [(0, p.Uk)((0, u.zw)(l.getText("optionSectionTitle_services")), 1)]), (0, p.qZ)(1), t[0]), (0, p.Uk)(), (0, p._)("div", h, [(0, p._)("div", m, [(0, p.Wm)(s, {
                                    label: l.getText("optionTitle_speechService"),
                                    items: e.listItems.speechService,
                                    modelValue: e.options.speechService,
                                    "onUpdate:modelValue": t[1] || (t[1] = t => e.options.speechService = t)
                                }, null, 8, ["label", "items", "modelValue"])]), (0, p.Uk)(), "googleSpeechApi" === e.options.speechService ? ((0, p.wg)(), (0, p.iD)("div", g, [(0, p.Wm)(r, {
                                    label: l.getText("inputLabel_apiKey"),
                                    modelValue: e.options.googleSpeechApiKey,
                                    "onUpdate:modelValue": t[2] || (t[2] = t => e.options.googleSpeechApiKey = t),
                                    modelModifiers: {
                                        trim: !0
                                    }
                                }, null, 8, ["label", "modelValue"])])) : (0, p.kq)("", !0), (0, p.Uk)(), "googleSpeechApi" === e.options.speechService ? ((0, p.wg)(), (0, p.iD)("a", v, (0, u.zw)(l.getText("linkText_apiGuide")), 1)) : (0, p.kq)("", !0), (0, p.Uk)(), "ibmSpeechApi" === e.options.speechService ? ((0, p.wg)(), (0, p.iD)("div", y, [(0, p.Wm)(r, {
                                    modelValue: e.options.ibmSpeechApiUrl,
                                    "onUpdate:modelValue": t[3] || (t[3] = t => e.options.ibmSpeechApiUrl = t),
                                    modelModifiers: {
                                        trim: !0
                                    },
                                    label: l.getText("inputLabel_apiUrl")
                                }, null, 8, ["modelValue", "label"])])) : (0, p.kq)("", !0), (0, p.Uk)(), "ibmSpeechApi" === e.options.speechService ? ((0, p.wg)(), (0, p.iD)("div", b, [(0, p.Wm)(r, {
                                    modelValue: e.options.ibmSpeechApiKey,
                                    "onUpdate:modelValue": t[4] || (t[4] = t => e.options.ibmSpeechApiKey = t),
                                    modelModifiers: {
                                        trim: !0
                                    },
                                    label: l.getText("inputLabel_apiKey")
                                }, null, 8, ["modelValue", "label"])])) : (0, p.kq)("", !0), (0, p.Uk)(), "ibmSpeechApi" === e.options.speechService ? ((0, p.wg)(), (0, p.iD)("a", k, (0, u.zw)(l.getText("linkText_apiGuide")), 1)) : (0, p.kq)("", !0), (0, p.Uk)(), "microsoftSpeechApi" === e.options.speechService ? ((0, p.wg)(), (0, p.iD)("div", _, [(0, p.Wm)(s, {
                                    label: l.getText("optionTitle_microsoftSpeechApiLoc"),
                                    items: e.listItems.microsoftSpeechApiLoc,
                                    modelValue: e.options.microsoftSpeechApiLoc,
                                    "onUpdate:modelValue": t[5] || (t[5] = t => e.options.microsoftSpeechApiLoc = t)
                                }, null, 8, ["label", "items", "modelValue"])])) : (0, p.kq)("", !0), (0, p.Uk)(), "microsoftSpeechApi" === e.options.speechService ? ((0, p.wg)(), (0, p.iD)("div", w, [(0, p.Wm)(r, {
                                    modelValue: e.options.microsoftSpeechApiKey,
                                    "onUpdate:modelValue": t[6] || (t[6] = t => e.options.microsoftSpeechApiKey = t),
                                    modelModifiers: {
                                        trim: !0
                                    },
                                    label: l.getText("inputLabel_apiKey")
                                }, null, 8, ["modelValue", "label"])])) : (0, p.kq)("", !0), (0, p.Uk)(), "microsoftSpeechApi" === e.options.speechService ? ((0, p.wg)(), (0, p.iD)("a", x, (0, u.zw)(l.getText("linkText_apiGuide")), 1)) : (0, p.kq)("", !0), (0, p.Uk)(), "witSpeechApi" === e.options.speechService ? ((0, p.wg)(!0), (0, p.iD)(p.HY, {
                                    key: 8
                                }, (0, p.Ko)(e.witSpeechApis, (t => ((0, p.wg)(), (0, p.j4)(r, {
                                    class: "text-field",
                                    key: t.id,
                                    "model-value": e.options.witSpeechApiKeys[t] || "",
                                    label: l.getText("inputLabel_apiKeyType", [l.getText(`optionValue_witSpeechApiLang_${t}`)]),
                                    "onUpdate:modelValue": e => l.saveWitSpeechApiKey(e.trim(), t)
                                }, null, 8, ["model-value", "label", "onUpdate:modelValue"])))), 128)) : (0, p.kq)("", !0), (0, p.Uk)(), "witSpeechApi" === e.options.speechService ? ((0, p.wg)(), (0, p.iD)("div", A, [(0, p.Wm)(s, {
                                    label: l.getText("optionTitle_witSpeechApiLang"),
                                    items: e.listItems.witSpeechApiLang,
                                    modelValue: e.witSpeechApiLang,
                                    "onUpdate:modelValue": t[7] || (t[7] = t => e.witSpeechApiLang = t)
                                }, null, 8, ["label", "items", "modelValue"]), (0, p.Uk)(), (0, p.Wm)(a, {
                                    disabled: !e.witSpeechApiLang,
                                    onClick: l.addWitSpeechApi
                                }, {
                                    default: (0, p.w5)((() => [(0, p.Uk)((0, u.zw)(l.getText("buttonLabel_addApi")), 1)])),
                                    _: 1
                                }, 8, ["disabled", "onClick"])])) : (0, p.kq)("", !0), (0, p.Uk)(), "witSpeechApi" === e.options.speechService ? ((0, p.wg)(), (0, p.iD)("a", S, (0, u.zw)(l.getText("linkText_apiGuide")), 1)) : (0, p.kq)("", !0)])]), (0, p.Uk)(), (0, p._)("div", C, [t[8] || ((0, p.qZ)(-1), t[8] = (0, p._)("div", {
                                    class: "section-title"
                                }, [(0, p.Uk)((0, u.zw)(l.getText("optionSectionTitle_client")), 1)]), (0, p.qZ)(1), t[8]), (0, p.Uk)(), t[9] || ((0, p.qZ)(-1), t[9] = (0, p._)("div", {
                                    class: "section-desc"
                                }, [(0, p.Uk)((0, u.zw)(l.getText("optionSectionDescription_client")), 1)]), (0, p.qZ)(1), t[9]), (0, p.Uk)(), (0, p._)("div", T, [e.clientAppInstalled || e.clientAppVerified && e.options.simulateUserInput ? ((0, p.wg)(), (0, p.iD)("div", U, [(0, p.Wm)(c, {
                                    label: l.getText("optionTitle_simulateUserInput"),
                                    modelValue: e.options.simulateUserInput,
                                    "onUpdate:modelValue": t[10] || (t[10] = t => e.options.simulateUserInput = t)
                                }, null, 8, ["label", "modelValue"])])) : (0, p.kq)("", !0), (0, p.Uk)(), e.clientAppVerified && e.options.simulateUserInput ? ((0, p.wg)(), (0, p.iD)("div", I, [(0, p.Wm)(c, {
                                    label: l.getText("optionTitle_navigateWithKeyboard"),
                                    modelValue: e.options.navigateWithKeyboard,
                                    "onUpdate:modelValue": t[11] || (t[11] = t => e.options.navigateWithKeyboard = t)
                                }, null, 8, ["label", "modelValue"])])) : (0, p.kq)("", !0), (0, p.Uk)(), e.clientAppInstalled ? ((0, p.wg)(), (0, p.iD)("div", V, [(0, p.Wm)(c, {
                                    label: l.getText("optionTitle_autoUpdateClientApp"),
                                    modelValue: e.options.autoUpdateClientApp,
                                    "onUpdate:modelValue": t[12] || (t[12] = t => e.options.autoUpdateClientApp = t)
                                }, null, 8, ["label", "modelValue"])])) : (0, p.kq)("", !0), (0, p.Uk)(), e.clientAppVerified && !e.clientAppInstalled ? ((0, p.wg)(), (0, p.iD)("div", L, [(0, p._)("div", {
                                    class: "download-desc",
                                    innerHTML: l.getText("pageContent_optionClientAppDownloadDesc", [`<a target='_blank' rel='noreferrer' href='${e.installGuideUrl}'>${l.getText("linkText_installGuide")}</a>`])
                                }, null, 8, O), (0, p.Uk)(), e.clientAppDownloadUrl ? (0, p.kq)("", !0) : ((0, p.wg)(), (0, p.iD)("div", F, (0, u.zw)(l.getText("pageContent_optionClientAppOSError")), 1)), (0, p.Uk)(), (0, p.Wm)(a, {
                                    class: "download-button",
                                    disabled: !e.clientAppDownloadUrl,
                                    onClick: t[13] || (t[13] = t => e.$refs.dlLink.click()),
                                    variant: "elevated"
                                }, {
                                    default: (0, p.w5)((() => [(0, p.Uk)((0, u.zw)(l.getText("buttonLabel_downloadApp")), 1)])),
                                    _: 1
                                }, 8, ["disabled"]), (0, p.Uk)(), (0, p._)("a", {
                                    ref: "dlLink",
                                    class: "download-link",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: e.clientAppDownloadUrl
                                }, null, 8, D)])) : (0, p.kq)("", !0)])]), (0, p.Uk)(), (0, p._)("div", R, [t[14] || ((0, p.qZ)(-1), t[14] = (0, p._)("div", {
                                    class: "section-title"
                                }, [(0, p.Uk)((0, u.zw)(l.getText("optionSectionTitle_misc")), 1)]), (0, p.qZ)(1), t[14]), (0, p.Uk)(), (0, p._)("div", j, [(0, p._)("div", E, [(0, p.Wm)(s, {
                                    label: l.getText("optionTitle_appTheme"),
                                    items: e.listItems.appTheme,
                                    modelValue: e.options.appTheme,
                                    "onUpdate:modelValue": t[15] || (t[15] = t => e.options.appTheme = t)
                                }, null, 8, ["label", "items", "modelValue"])]), (0, p.Uk)(), (0, p._)("div", K, [(0, p.Wm)(c, {
                                    label: l.getText("optionTitle_loadEnglishChallenge"),
                                    modelValue: e.options.loadEnglishChallenge,
                                    "onUpdate:modelValue": t[16] || (t[16] = t => e.options.loadEnglishChallenge = t)
                                }, null, 8, ["label", "modelValue"])]), (0, p.Uk)(), e.options.loadEnglishChallenge ? (0, p.kq)("", !0) : ((0, p.wg)(), (0, p.iD)("div", W, [(0, p.Wm)(c, {
                                    label: l.getText("optionTitle_tryEnglishSpeechModel"),
                                    modelValue: e.options.tryEnglishSpeechModel,
                                    "onUpdate:modelValue": t[17] || (t[17] = t => e.options.tryEnglishSpeechModel = t)
                                }, null, 8, ["label", "modelValue"])])), (0, p.Uk)(), e.enableContributions ? ((0, p.wg)(), (0, p.iD)("div", M, [(0, p.Wm)(c, {
                                    label: l.getText("optionTitle_showContribPage"),
                                    modelValue: e.options.showContribPage,
                                    "onUpdate:modelValue": t[18] || (t[18] = t => e.options.showContribPage = t)
                                }, null, 8, ["label", "modelValue"])])) : (0, p.kq)("", !0), (0, p.Uk)(), e.enableContributions ? ((0, p.wg)(), (0, p.iD)("div", $, [(0, p.Wm)(a, {
                                    class: "contribute-button vn-icon--start",
                                    onClick: l.showContribute
                                }, {
                                    default: (0, p.w5)((() => [(0, p.Wm)(P, {
                                        src: "/src/contribute/assets/heart.svg"
                                    }), (0, p.Uk)(" " + (0, u.zw)(l.getText("buttonLabel_contribute")), 1)])),
                                    _: 1
                                }, 8, ["onClick"])])) : (0, p.kq)("", !0)])])])),
                                _: 1
                            })) : (0, p.kq)("", !0)
                        }]
                    ]);
                !async function () {
                    await async function (e) {
                        await Promise.allSettled(["400 14px Roboto", "500 14px Roboto"].map((e => document.fonts.load(e))))
                    }();
                    const e = (0, o.ri)(ee);
                    await async function (e) {
                        const t = await (0, l.Xf)();
                        document.documentElement.classList.add(t.targetEnv, t.os), e && (e.config.globalProperties.$env = t)
                    }(e), await (0, c.y)(e), e.mount("body")
                }()
            },
            2667: (e, t, n) => {
                n.d(t, {
                    Og: () => c,
                    Q: () => l,
                    Xf: () => s,
                    fr: () => r,
                    yt: () => a
                }), n(8487), n(6205), n(7391), n(9494), n(2241), n(4314);
                var o = n(5221),
                    i = n(3145);

                function l(e, t) {
                    return i.i18n.getMessage(e, t)
                }
                async function s({
                    fallback: e = !0
                } = {}) {
                    let t, n;
                    if ("samsung" === o.W9) t = "android", n = "";
                    else try {
                        ({
                            os: t,
                            arch: n
                        } = await i.runtime.getPlatformInfo())
                    } catch (o) {
                        if (!e) throw o;
                        ({
                            os: t,
                            arch: n
                        } = await i.runtime.sendMessage({
                            id: "getPlatform"
                        }))
                    }
                    "win" === t ? t = "windows" : "mac" === t && (t = "macos"), "MacIntel" !== navigator.platform || "ios" !== t && void 0 === navigator.standalone || (t = "ipados"), "x86-32" === n ? n = "386" : "x86-64" === n ? n = "amd64" : n.startsWith("arm") && (n = "arm"), "arm" === n && "macos" === t && (n = "amd64");
                    const l = "windows" === t,
                        s = "macos" === t,
                        r = "linux" === t,
                        a = "android" === t,
                        c = "ios" === t,
                        p = "ipados" === t,
                        u = ["android", "ios", "ipados"].includes(t),
                        d = "chrome" === o.W9,
                        f = "edge" === o.W9,
                        h = "firefox" === o.W9,
                        m = ["chrome", "opera"].includes(o.W9) && / opr\//i.test(navigator.userAgent),
                        g = "safari" === o.W9,
                        v = "samsung" === o.W9;
                    return {
                        os: t,
                        arch: n,
                        targetEnv: o.W9,
                        isWindows: l,
                        isMacos: s,
                        isLinux: r,
                        isAndroid: a,
                        isIos: c,
                        isIpados: p,
                        isMobile: u,
                        isChrome: d,
                        isEdge: f,
                        isFirefox: h,
                        isOpera: m,
                        isSafari: g,
                        isSamsung: v
                    }
                }
                async function r() {
                    const [e] = await i.tabs.query({
                        lastFocusedWindow: !0,
                        active: !0
                    });
                    return e
                }

                function a() {
                    return window.matchMedia("(prefers-color-scheme: dark)")
                }

                function c(e) {
                    return e || (e = Date.now()), e - e % 864e5
                }
            }
        },
        n = {};

    function o(e) {
        var i = n[e];
        if (void 0 !== i) return i.exports;
        var l = n[e] = {
            exports: {}
        };
        return t[e].call(l.exports, l, l.exports, o), l.exports
    }
    o.m = t, e = [], o.O = (t, n, i, l) => {
        if (!n) {
            var s = 1 / 0;
            for (p = 0; p < e.length; p++) {
                for (var [n, i, l] = e[p], r = !0, a = 0; a < n.length; a++)(!1 & l || s >= l) && Object.keys(o.O).every((e => o.O[e](n[a]))) ? n.splice(a--, 1) : (r = !1, l < s && (s = l));
                if (r) {
                    e.splice(p--, 1);
                    var c = i();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        l = l || 0;
        for (var p = e.length; p > 0 && e[p - 1][2] > l; p--) e[p] = e[p - 1];
        e[p] = [n, i, l]
    }, o.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, {
            a: t
        }), t
    }, o.d = (e, t) => {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, o.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.j = 798, (() => {
        var e = {
            798: 0
        };
        o.O.j = t => 0 === e[t];
        var t = (t, n) => {
                var i, l, [s, r, a] = n,
                    c = 0;
                if (s.some((t => 0 !== e[t]))) {
                    for (i in r) o.o(r, i) && (o.m[i] = r[i]);
                    if (a) var p = a(o)
                }
                for (t && t(n); c < s.length; c++) l = s[c], o.o(e, l) && e[l] && e[l][0](), e[l] = 0;
                return o.O(p)
            },
            n = globalThis.webpackChunkbuster = globalThis.webpackChunkbuster || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var i = o.O(void 0, [787], (() => o(3914)));
    i = o.O(i)
})();