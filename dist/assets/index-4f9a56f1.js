var Dv = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports);
var Yk = Dv((ze, Ue) => {
    function Iv(e, t) {
        for (var n = 0; n < t.length; n++) {
            const r = t[n];
            if (typeof r != "string" && !Array.isArray(r)) {
                for (const i in r) if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {enumerable: !0, get: () => r[i]})
                }
            }
        }
        return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}))
    }

    (function () {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
        new MutationObserver(i => {
            for (const o of i) if (o.type === "childList") for (const l of o.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
        }).observe(document, {childList: !0, subtree: !0});

        function n(i) {
            const o = {};
            return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
        }

        function r(i) {
            if (i.ep) return;
            i.ep = !0;
            const o = n(i);
            fetch(i.href, o)
        }
    })();

    function Mv(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    var k = {}, zv = {
        get exports() {
            return k
        }, set exports(e) {
            k = e
        }
    }, wl = {}, E = {}, Uv = {
        get exports() {
            return E
        }, set exports(e) {
            E = e
        }
    }, z = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var zi = Symbol.for("react.element"), Bv = Symbol.for("react.portal"), Vv = Symbol.for("react.fragment"),
        Hv = Symbol.for("react.strict_mode"), Wv = Symbol.for("react.profiler"), Kv = Symbol.for("react.provider"),
        Qv = Symbol.for("react.context"), Gv = Symbol.for("react.forward_ref"), qv = Symbol.for("react.suspense"),
        Yv = Symbol.for("react.memo"), Xv = Symbol.for("react.lazy"), mf = Symbol.iterator;

    function Jv(e) {
        return e === null || typeof e != "object" ? null : (e = mf && e[mf] || e["@@iterator"], typeof e == "function" ? e : null)
    }

    var Mp = {
        isMounted: function () {
            return !1
        }, enqueueForceUpdate: function () {
        }, enqueueReplaceState: function () {
        }, enqueueSetState: function () {
        }
    }, zp = Object.assign, Up = {};

    function Lr(e, t, n) {
        this.props = e, this.context = t, this.refs = Up, this.updater = n || Mp
    }

    Lr.prototype.isReactComponent = {};
    Lr.prototype.setState = function (e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
    };
    Lr.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    };

    function Bp() {
    }

    Bp.prototype = Lr.prototype;

    function ba(e, t, n) {
        this.props = e, this.context = t, this.refs = Up, this.updater = n || Mp
    }

    var La = ba.prototype = new Bp;
    La.constructor = ba;
    zp(La, Lr.prototype);
    La.isPureReactComponent = !0;
    var yf = Array.isArray, Vp = Object.prototype.hasOwnProperty, Da = {current: null},
        Hp = {key: !0, ref: !0, __self: !0, __source: !0};

    function Wp(e, t, n) {
        var r, i = {}, o = null, l = null;
        if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) Vp.call(t, r) && !Hp.hasOwnProperty(r) && (i[r] = t[r]);
        var u = arguments.length - 2;
        if (u === 1) i.children = n; else if (1 < u) {
            for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
            i.children = s
        }
        if (e && e.defaultProps) for (r in u = e.defaultProps, u) i[r] === void 0 && (i[r] = u[r]);
        return {$$typeof: zi, type: e, key: o, ref: l, props: i, _owner: Da.current}
    }

    function Zv(e, t) {
        return {$$typeof: zi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
    }

    function Ia(e) {
        return typeof e == "object" && e !== null && e.$$typeof === zi
    }

    function e0(e) {
        var t = {"=": "=0", ":": "=2"};
        return "$" + e.replace(/[=:]/g, function (n) {
            return t[n]
        })
    }

    var vf = /\/+/g;

    function xu(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? e0("" + e.key) : t.toString(36)
    }

    function vo(e, t, n, r, i) {
        var o = typeof e;
        (o === "undefined" || o === "boolean") && (e = null);
        var l = !1;
        if (e === null) l = !0; else switch (o) {
            case"string":
            case"number":
                l = !0;
                break;
            case"object":
                switch (e.$$typeof) {
                    case zi:
                    case Bv:
                        l = !0
                }
        }
        if (l) return l = e, i = i(l), e = r === "" ? "." + xu(l, 0) : r, yf(i) ? (n = "", e != null && (n = e.replace(vf, "$&/") + "/"), vo(i, t, n, "", function (a) {
            return a
        })) : i != null && (Ia(i) && (i = Zv(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(vf, "$&/") + "/") + e)), t.push(i)), 1;
        if (l = 0, r = r === "" ? "." : r + ":", yf(e)) for (var u = 0; u < e.length; u++) {
            o = e[u];
            var s = r + xu(o, u);
            l += vo(o, t, n, s, i)
        } else if (s = Jv(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done;) o = o.value, s = r + xu(o, u++), l += vo(o, t, n, s, i); else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return l
    }

    function Xi(e, t, n) {
        if (e == null) return e;
        var r = [], i = 0;
        return vo(e, r, "", "", function (o) {
            return t.call(n, o, i++)
        }), r
    }

    function t0(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(), t.then(function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
            }, function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
            }), e._status === -1 && (e._status = 0, e._result = t)
        }
        if (e._status === 1) return e._result.default;
        throw e._result
    }

    var Pe = {current: null}, go = {transition: null},
        n0 = {ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: go, ReactCurrentOwner: Da};
    z.Children = {
        map: Xi, forEach: function (e, t, n) {
            Xi(e, function () {
                t.apply(this, arguments)
            }, n)
        }, count: function (e) {
            var t = 0;
            return Xi(e, function () {
                t++
            }), t
        }, toArray: function (e) {
            return Xi(e, function (t) {
                return t
            }) || []
        }, only: function (e) {
            if (!Ia(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
        }
    };
    z.Component = Lr;
    z.Fragment = Vv;
    z.Profiler = Wv;
    z.PureComponent = ba;
    z.StrictMode = Hv;
    z.Suspense = qv;
    z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n0;
    z.cloneElement = function (e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = zp({}, e.props), i = e.key, o = e.ref, l = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (o = t.ref, l = Da.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
            for (s in t) Vp.call(t, s) && !Hp.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
        }
        var s = arguments.length - 2;
        if (s === 1) r.children = n; else if (1 < s) {
            u = Array(s);
            for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
            r.children = u
        }
        return {$$typeof: zi, type: e.type, key: i, ref: o, props: r, _owner: l}
    };
    z.createContext = function (e) {
        return e = {
            $$typeof: Qv,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {$$typeof: Kv, _context: e}, e.Consumer = e
    };
    z.createElement = Wp;
    z.createFactory = function (e) {
        var t = Wp.bind(null, e);
        return t.type = e, t
    };
    z.createRef = function () {
        return {current: null}
    };
    z.forwardRef = function (e) {
        return {$$typeof: Gv, render: e}
    };
    z.isValidElement = Ia;
    z.lazy = function (e) {
        return {$$typeof: Xv, _payload: {_status: -1, _result: e}, _init: t0}
    };
    z.memo = function (e, t) {
        return {$$typeof: Yv, type: e, compare: t === void 0 ? null : t}
    };
    z.startTransition = function (e) {
        var t = go.transition;
        go.transition = {};
        try {
            e()
        } finally {
            go.transition = t
        }
    };
    z.unstable_act = function () {
        throw Error("act(...) is not supported in production builds of React.")
    };
    z.useCallback = function (e, t) {
        return Pe.current.useCallback(e, t)
    };
    z.useContext = function (e) {
        return Pe.current.useContext(e)
    };
    z.useDebugValue = function () {
    };
    z.useDeferredValue = function (e) {
        return Pe.current.useDeferredValue(e)
    };
    z.useEffect = function (e, t) {
        return Pe.current.useEffect(e, t)
    };
    z.useId = function () {
        return Pe.current.useId()
    };
    z.useImperativeHandle = function (e, t, n) {
        return Pe.current.useImperativeHandle(e, t, n)
    };
    z.useInsertionEffect = function (e, t) {
        return Pe.current.useInsertionEffect(e, t)
    };
    z.useLayoutEffect = function (e, t) {
        return Pe.current.useLayoutEffect(e, t)
    };
    z.useMemo = function (e, t) {
        return Pe.current.useMemo(e, t)
    };
    z.useReducer = function (e, t, n) {
        return Pe.current.useReducer(e, t, n)
    };
    z.useRef = function (e) {
        return Pe.current.useRef(e)
    };
    z.useState = function (e) {
        return Pe.current.useState(e)
    };
    z.useSyncExternalStore = function (e, t, n) {
        return Pe.current.useSyncExternalStore(e, t, n)
    };
    z.useTransition = function () {
        return Pe.current.useTransition()
    };
    z.version = "18.2.0";
    (function (e) {
        e.exports = z
    })(Uv);
    const Ma = Mv(E), hs = Iv({__proto__: null, default: Ma}, [E]);
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var r0 = E, i0 = Symbol.for("react.element"), o0 = Symbol.for("react.fragment"),
        l0 = Object.prototype.hasOwnProperty,
        u0 = r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s0 = {key: !0, ref: !0, __self: !0, __source: !0};

    function Kp(e, t, n) {
        var r, i = {}, o = null, l = null;
        n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
        for (r in t) l0.call(t, r) && !s0.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
        return {$$typeof: i0, type: e, key: o, ref: l, props: i, _owner: u0.current}
    }

    wl.Fragment = o0;
    wl.jsx = Kp;
    wl.jsxs = Kp;
    (function (e) {
        e.exports = wl
    })(zv);
    var ms = {}, Lo = {}, a0 = {
        get exports() {
            return Lo
        }, set exports(e) {
            Lo = e
        }
    }, We = {}, ys = {}, c0 = {
        get exports() {
            return ys
        }, set exports(e) {
            ys = e
        }
    }, Qp = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */(function (e) {
        function t(j, L) {
            var D = j.length;
            j.push(L);
            e:for (; 0 < D;) {
                var Z = D - 1 >>> 1, le = j[Z];
                if (0 < i(le, L)) j[Z] = L, j[D] = le, D = Z; else break e
            }
        }

        function n(j) {
            return j.length === 0 ? null : j[0]
        }

        function r(j) {
            if (j.length === 0) return null;
            var L = j[0], D = j.pop();
            if (D !== L) {
                j[0] = D;
                e:for (var Z = 0, le = j.length, it = le >>> 1; Z < it;) {
                    var mt = 2 * (Z + 1) - 1, Sn = j[mt], yt = mt + 1, En = j[yt];
                    if (0 > i(Sn, D)) yt < le && 0 > i(En, Sn) ? (j[Z] = En, j[yt] = D, Z = yt) : (j[Z] = Sn, j[mt] = D, Z = mt); else if (yt < le && 0 > i(En, D)) j[Z] = En, j[yt] = D, Z = yt; else break e
                }
            }
            return L
        }

        function i(j, L) {
            var D = j.sortIndex - L.sortIndex;
            return D !== 0 ? D : j.id - L.id
        }

        if (typeof performance == "object" && typeof performance.now == "function") {
            var o = performance;
            e.unstable_now = function () {
                return o.now()
            }
        } else {
            var l = Date, u = l.now();
            e.unstable_now = function () {
                return l.now() - u
            }
        }
        var s = [], a = [], c = 1, d = null, f = 3, v = !1, m = !1, y = !1,
            x = typeof setTimeout == "function" ? setTimeout : null,
            h = typeof clearTimeout == "function" ? clearTimeout : null,
            p = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function g(j) {
            for (var L = n(a); L !== null;) {
                if (L.callback === null) r(a); else if (L.startTime <= j) r(a), L.sortIndex = L.expirationTime, t(s, L); else break;
                L = n(a)
            }
        }

        function w(j) {
            if (y = !1, g(j), !m) if (n(s) !== null) m = !0, Zn(C); else {
                var L = n(a);
                L !== null && er(w, L.startTime - j)
            }
        }

        function C(j, L) {
            m = !1, y && (y = !1, h(N), N = -1), v = !0;
            var D = f;
            try {
                for (g(L), d = n(s); d !== null && (!(d.expirationTime > L) || j && !M());) {
                    var Z = d.callback;
                    if (typeof Z == "function") {
                        d.callback = null, f = d.priorityLevel;
                        var le = Z(d.expirationTime <= L);
                        L = e.unstable_now(), typeof le == "function" ? d.callback = le : d === n(s) && r(s), g(L)
                    } else r(s);
                    d = n(s)
                }
                if (d !== null) var it = !0; else {
                    var mt = n(a);
                    mt !== null && er(w, mt.startTime - L), it = !1
                }
                return it
            } finally {
                d = null, f = D, v = !1
            }
        }

        var T = !1, P = null, N = -1, U = 5, $ = -1;

        function M() {
            return !(e.unstable_now() - $ < U)
        }

        function je() {
            if (P !== null) {
                var j = e.unstable_now();
                $ = j;
                var L = !0;
                try {
                    L = P(!0, j)
                } finally {
                    L ? rt() : (T = !1, P = null)
                }
            } else T = !1
        }

        var rt;
        if (typeof p == "function") rt = function () {
            p(je)
        }; else if (typeof MessageChannel < "u") {
            var Yi = new MessageChannel, vu = Yi.port2;
            Yi.port1.onmessage = je, rt = function () {
                vu.postMessage(null)
            }
        } else rt = function () {
            x(je, 0)
        };

        function Zn(j) {
            P = j, T || (T = !0, rt())
        }

        function er(j, L) {
            N = x(function () {
                j(e.unstable_now())
            }, L)
        }

        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (j) {
            j.callback = null
        }, e.unstable_continueExecution = function () {
            m || v || (m = !0, Zn(C))
        }, e.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < j ? Math.floor(1e3 / j) : 5
        }, e.unstable_getCurrentPriorityLevel = function () {
            return f
        }, e.unstable_getFirstCallbackNode = function () {
            return n(s)
        }, e.unstable_next = function (j) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var L = 3;
                    break;
                default:
                    L = f
            }
            var D = f;
            f = L;
            try {
                return j()
            } finally {
                f = D
            }
        }, e.unstable_pauseExecution = function () {
        }, e.unstable_requestPaint = function () {
        }, e.unstable_runWithPriority = function (j, L) {
            switch (j) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    j = 3
            }
            var D = f;
            f = j;
            try {
                return L()
            } finally {
                f = D
            }
        }, e.unstable_scheduleCallback = function (j, L, D) {
            var Z = e.unstable_now();
            switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? Z + D : Z) : D = Z, j) {
                case 1:
                    var le = -1;
                    break;
                case 2:
                    le = 250;
                    break;
                case 5:
                    le = 1073741823;
                    break;
                case 4:
                    le = 1e4;
                    break;
                default:
                    le = 5e3
            }
            return le = D + le, j = {
                id: c++,
                callback: L,
                priorityLevel: j,
                startTime: D,
                expirationTime: le,
                sortIndex: -1
            }, D > Z ? (j.sortIndex = D, t(a, j), n(s) === null && j === n(a) && (y ? (h(N), N = -1) : y = !0, er(w, D - Z))) : (j.sortIndex = le, t(s, j), m || v || (m = !0, Zn(C))), j
        }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function (j) {
            var L = f;
            return function () {
                var D = f;
                f = L;
                try {
                    return j.apply(this, arguments)
                } finally {
                    f = D
                }
            }
        }
    })(Qp);
    (function (e) {
        e.exports = Qp
    })(c0);
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var Gp = E, Ve = ys;

    function O(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    var qp = new Set, mi = {};

    function Wn(e, t) {
        kr(e, t), kr(e + "Capture", t)
    }

    function kr(e, t) {
        for (mi[e] = t, e = 0; e < t.length; e++) qp.add(t[e])
    }

    var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        vs = Object.prototype.hasOwnProperty,
        f0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        gf = {}, wf = {};

    function d0(e) {
        return vs.call(wf, e) ? !0 : vs.call(gf, e) ? !1 : f0.test(e) ? wf[e] = !0 : (gf[e] = !0, !1)
    }

    function p0(e, t, n, r) {
        if (n !== null && n.type === 0) return !1;
        switch (typeof t) {
            case"function":
            case"symbol":
                return !0;
            case"boolean":
                return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }

    function h0(e, t, n, r) {
        if (t === null || typeof t > "u" || p0(e, t, n, r)) return !0;
        if (r) return !1;
        if (n !== null) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function $e(e, t, n, r, i, o, l) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l
    }

    var Se = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
        Se[e] = new $e(e, 0, !1, e, null, !1, !1)
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
        var t = e[0];
        Se[t] = new $e(t, 1, !1, e[1], null, !1, !1)
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
        Se[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1)
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
        Se[e] = new $e(e, 2, !1, e, null, !1, !1)
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
        Se[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1)
    });
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        Se[e] = new $e(e, 3, !0, e, null, !1, !1)
    });
    ["capture", "download"].forEach(function (e) {
        Se[e] = new $e(e, 4, !1, e, null, !1, !1)
    });
    ["cols", "rows", "size", "span"].forEach(function (e) {
        Se[e] = new $e(e, 6, !1, e, null, !1, !1)
    });
    ["rowSpan", "start"].forEach(function (e) {
        Se[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var za = /[\-:]([a-z])/g;

    function Ua(e) {
        return e[1].toUpperCase()
    }

    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
        var t = e.replace(za, Ua);
        Se[t] = new $e(t, 1, !1, e, null, !1, !1)
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
        var t = e.replace(za, Ua);
        Se[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(za, Ua);
        Se[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    });
    ["tabIndex", "crossOrigin"].forEach(function (e) {
        Se[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1)
    });
    Se.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    ["src", "href", "action", "formAction"].forEach(function (e) {
        Se[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function Ba(e, t, n, r) {
        var i = Se.hasOwnProperty(t) ? Se[t] : null;
        (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (h0(t, n, i, r) && (n = null), r || i === null ? d0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }

    var Mt = Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ji = Symbol.for("react.element"),
        rr = Symbol.for("react.portal"), ir = Symbol.for("react.fragment"), Va = Symbol.for("react.strict_mode"),
        gs = Symbol.for("react.profiler"), Yp = Symbol.for("react.provider"), Xp = Symbol.for("react.context"),
        Ha = Symbol.for("react.forward_ref"), ws = Symbol.for("react.suspense"), Ss = Symbol.for("react.suspense_list"),
        Wa = Symbol.for("react.memo"), Wt = Symbol.for("react.lazy"), Jp = Symbol.for("react.offscreen"),
        Sf = Symbol.iterator;

    function Vr(e) {
        return e === null || typeof e != "object" ? null : (e = Sf && e[Sf] || e["@@iterator"], typeof e == "function" ? e : null)
    }

    var oe = Object.assign, _u;

    function Zr(e) {
        if (_u === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            _u = t && t[1] || ""
        }
        return `
` + _u + e
    }

    var Cu = !1;

    function Ou(e, t) {
        if (!e || Cu) return "";
        Cu = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t) if (t = function () {
                throw Error()
            }, Object.defineProperty(t.prototype, "props", {
                set: function () {
                    throw Error()
                }
            }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (a) {
                    r = a
                }
                e.call(t.prototype)
            } else {
                try {
                    throw Error()
                } catch (a) {
                    r = a
                }
                e()
            }
        } catch (a) {
            if (a && r && typeof a.stack == "string") {
                for (var i = a.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, u = o.length - 1; 1 <= l && 0 <= u && i[l] !== o[u];) u--;
                for (; 1 <= l && 0 <= u; l--, u--) if (i[l] !== o[u]) {
                    if (l !== 1 || u !== 1) do if (l--, u--, 0 > u || i[l] !== o[u]) {
                        var s = `
` + i[l].replace(" at new ", " at ");
                        return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                    } while (1 <= l && 0 <= u);
                    break
                }
            }
        } finally {
            Cu = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? Zr(e) : ""
    }

    function m0(e) {
        switch (e.tag) {
            case 5:
                return Zr(e.type);
            case 16:
                return Zr("Lazy");
            case 13:
                return Zr("Suspense");
            case 19:
                return Zr("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = Ou(e.type, !1), e;
            case 11:
                return e = Ou(e.type.render, !1), e;
            case 1:
                return e = Ou(e.type, !0), e;
            default:
                return ""
        }
    }

    function Es(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case ir:
                return "Fragment";
            case rr:
                return "Portal";
            case gs:
                return "Profiler";
            case Va:
                return "StrictMode";
            case ws:
                return "Suspense";
            case Ss:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case Xp:
                return (e.displayName || "Context") + ".Consumer";
            case Yp:
                return (e._context.displayName || "Context") + ".Provider";
            case Ha:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Wa:
                return t = e.displayName || null, t !== null ? t : Es(e.type) || "Memo";
            case Wt:
                t = e._payload, e = e._init;
                try {
                    return Es(e(t))
                } catch {
                }
        }
        return null
    }

    function y0(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return Es(t);
            case 8:
                return t === Va ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t
        }
        return null
    }

    function cn(e) {
        switch (typeof e) {
            case"boolean":
            case"number":
            case"string":
            case"undefined":
                return e;
            case"object":
                return e;
            default:
                return ""
        }
    }

    function Zp(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function v0(e) {
        var t = Zp(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var i = n.get, o = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0, get: function () {
                    return i.call(this)
                }, set: function (l) {
                    r = "" + l, o.call(this, l)
                }
            }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
                getValue: function () {
                    return r
                }, setValue: function (l) {
                    r = "" + l
                }, stopTracking: function () {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Zi(e) {
        e._valueTracker || (e._valueTracker = v0(e))
    }

    function eh(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Zp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
    }

    function Do(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }

    function xs(e, t) {
        var n = t.checked;
        return oe({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        })
    }

    function Ef(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = cn(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }

    function th(e, t) {
        t = t.checked, t != null && Ba(e, "checked", t, !1)
    }

    function _s(e, t) {
        th(e, t);
        var n = cn(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? Cs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Cs(e, t.type, cn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }

    function xf(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
    }

    function Cs(e, t, n) {
        (t !== "number" || Do(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }

    var ei = Array.isArray;

    function vr(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + cn(n), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === n) {
                    e[i].selected = !0, r && (e[i].defaultSelected = !0);
                    return
                }
                t !== null || e[i].disabled || (t = e[i])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Os(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
        return oe({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
    }

    function _f(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(O(92));
                if (ei(n)) {
                    if (1 < n.length) throw Error(O(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""), n = t
        }
        e._wrapperState = {initialValue: cn(n)}
    }

    function nh(e, t) {
        var n = cn(t.value), r = cn(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
    }

    function Cf(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }

    function rh(e) {
        switch (e) {
            case"svg":
                return "http://www.w3.org/2000/svg";
            case"math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function ks(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? rh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }

    var eo, ih = function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
                return e(t, n, r, i)
            })
        } : e
    }(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else {
            for (eo = eo || document.createElement("div"), eo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = eo.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    });

    function yi(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }

    var oi = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }, g0 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(oi).forEach(function (e) {
        g0.forEach(function (t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), oi[t] = oi[e]
        })
    });

    function oh(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || oi.hasOwnProperty(e) && oi[e] ? ("" + t).trim() : t + "px"
    }

    function lh(e, t) {
        e = e.style;
        for (var n in t) if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, i = oh(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
    }

    var w0 = oe({menuitem: !0}, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Ts(e, t) {
        if (t) {
            if (w0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(O(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61))
            }
            if (t.style != null && typeof t.style != "object") throw Error(O(62))
        }
    }

    function Ps(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case"annotation-xml":
            case"color-profile":
            case"font-face":
            case"font-face-src":
            case"font-face-uri":
            case"font-face-format":
            case"font-face-name":
            case"missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    var $s = null;

    function Ka(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }

    var js = null, gr = null, wr = null;

    function Of(e) {
        if (e = Vi(e)) {
            if (typeof js != "function") throw Error(O(280));
            var t = e.stateNode;
            t && (t = Cl(t), js(e.stateNode, e.type, t))
        }
    }

    function uh(e) {
        gr ? wr ? wr.push(e) : wr = [e] : gr = e
    }

    function sh() {
        if (gr) {
            var e = gr, t = wr;
            if (wr = gr = null, Of(e), t) for (e = 0; e < t.length; e++) Of(t[e])
        }
    }

    function ah(e, t) {
        return e(t)
    }

    function ch() {
    }

    var ku = !1;

    function fh(e, t, n) {
        if (ku) return e(t, n);
        ku = !0;
        try {
            return ah(e, t, n)
        } finally {
            ku = !1, (gr !== null || wr !== null) && (ch(), sh())
        }
    }

    function vi(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Cl(n);
        if (r === null) return null;
        n = r[t];
        e:switch (t) {
            case"onClick":
            case"onClickCapture":
            case"onDoubleClick":
            case"onDoubleClickCapture":
            case"onMouseDown":
            case"onMouseDownCapture":
            case"onMouseMove":
            case"onMouseMoveCapture":
            case"onMouseUp":
            case"onMouseUpCapture":
            case"onMouseEnter":
                (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(O(231, t, typeof n));
        return n
    }

    var Rs = !1;
    if (Ft) try {
        var Hr = {};
        Object.defineProperty(Hr, "passive", {
            get: function () {
                Rs = !0
            }
        }), window.addEventListener("test", Hr, Hr), window.removeEventListener("test", Hr, Hr)
    } catch {
        Rs = !1
    }

    function S0(e, t, n, r, i, o, l, u, s) {
        var a = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, a)
        } catch (c) {
            this.onError(c)
        }
    }

    var li = !1, Io = null, Mo = !1, Ns = null, E0 = {
        onError: function (e) {
            li = !0, Io = e
        }
    };

    function x0(e, t, n, r, i, o, l, u, s) {
        li = !1, Io = null, S0.apply(E0, arguments)
    }

    function _0(e, t, n, r, i, o, l, u, s) {
        if (x0.apply(this, arguments), li) {
            if (li) {
                var a = Io;
                li = !1, Io = null
            } else throw Error(O(198));
            Mo || (Mo = !0, Ns = a)
        }
    }

    function Kn(e) {
        var t = e, n = e;
        if (e.alternate) for (; t.return;) t = t.return; else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function dh(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function kf(e) {
        if (Kn(e) !== e) throw Error(O(188))
    }

    function C0(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Kn(e), t === null) throw Error(O(188));
            return t !== e ? null : e
        }
        for (var n = e, r = t; ;) {
            var i = n.return;
            if (i === null) break;
            var o = i.alternate;
            if (o === null) {
                if (r = i.return, r !== null) {
                    n = r;
                    continue
                }
                break
            }
            if (i.child === o.child) {
                for (o = i.child; o;) {
                    if (o === n) return kf(i), e;
                    if (o === r) return kf(i), t;
                    o = o.sibling
                }
                throw Error(O(188))
            }
            if (n.return !== r.return) n = i, r = o; else {
                for (var l = !1, u = i.child; u;) {
                    if (u === n) {
                        l = !0, n = i, r = o;
                        break
                    }
                    if (u === r) {
                        l = !0, r = i, n = o;
                        break
                    }
                    u = u.sibling
                }
                if (!l) {
                    for (u = o.child; u;) {
                        if (u === n) {
                            l = !0, n = o, r = i;
                            break
                        }
                        if (u === r) {
                            l = !0, r = o, n = i;
                            break
                        }
                        u = u.sibling
                    }
                    if (!l) throw Error(O(189))
                }
            }
            if (n.alternate !== r) throw Error(O(190))
        }
        if (n.tag !== 3) throw Error(O(188));
        return n.stateNode.current === n ? e : t
    }

    function ph(e) {
        return e = C0(e), e !== null ? hh(e) : null
    }

    function hh(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var t = hh(e);
            if (t !== null) return t;
            e = e.sibling
        }
        return null
    }

    var mh = Ve.unstable_scheduleCallback, Tf = Ve.unstable_cancelCallback, O0 = Ve.unstable_shouldYield,
        k0 = Ve.unstable_requestPaint, se = Ve.unstable_now, T0 = Ve.unstable_getCurrentPriorityLevel,
        Qa = Ve.unstable_ImmediatePriority, yh = Ve.unstable_UserBlockingPriority, zo = Ve.unstable_NormalPriority,
        P0 = Ve.unstable_LowPriority, vh = Ve.unstable_IdlePriority, Sl = null, xt = null;

    function $0(e) {
        if (xt && typeof xt.onCommitFiberRoot == "function") try {
            xt.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128)
        } catch {
        }
    }

    var ft = Math.clz32 ? Math.clz32 : N0, j0 = Math.log, R0 = Math.LN2;

    function N0(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (j0(e) / R0 | 0) | 0
    }

    var to = 64, no = 4194304;

    function ti(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }

    function Uo(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
        if (l !== 0) {
            var u = l & ~i;
            u !== 0 ? r = ti(u) : (o &= l, o !== 0 && (r = ti(o)))
        } else l = n & ~i, l !== 0 ? r = ti(l) : o !== 0 && (r = ti(o));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - ft(t), i = 1 << n, r |= e[n], t &= ~i;
        return r
    }

    function A0(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function F0(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
            var l = 31 - ft(o), u = 1 << l, s = i[l];
            s === -1 ? (!(u & n) || u & r) && (i[l] = A0(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u
        }
    }

    function As(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function gh() {
        var e = to;
        return to <<= 1, !(to & 4194240) && (to = 64), e
    }

    function Tu(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function Ui(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ft(t), e[t] = n
    }

    function b0(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n;) {
            var i = 31 - ft(n), o = 1 << i;
            t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
        }
    }

    function Ga(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var r = 31 - ft(n), i = 1 << r;
            i & t | e[r] & t && (e[r] |= t), n &= ~i
        }
    }

    var W = 0;

    function wh(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
    }

    var Sh, qa, Eh, xh, _h, Fs = !1, ro = [], Zt = null, en = null, tn = null, gi = new Map, wi = new Map, Qt = [],
        L0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function Pf(e, t) {
        switch (e) {
            case"focusin":
            case"focusout":
                Zt = null;
                break;
            case"dragenter":
            case"dragleave":
                en = null;
                break;
            case"mouseover":
            case"mouseout":
                tn = null;
                break;
            case"pointerover":
            case"pointerout":
                gi.delete(t.pointerId);
                break;
            case"gotpointercapture":
            case"lostpointercapture":
                wi.delete(t.pointerId)
        }
    }

    function Wr(e, t, n, r, i, o) {
        return e === null || e.nativeEvent !== o ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: o,
            targetContainers: [i]
        }, t !== null && (t = Vi(t), t !== null && qa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
    }

    function D0(e, t, n, r, i) {
        switch (t) {
            case"focusin":
                return Zt = Wr(Zt, e, t, n, r, i), !0;
            case"dragenter":
                return en = Wr(en, e, t, n, r, i), !0;
            case"mouseover":
                return tn = Wr(tn, e, t, n, r, i), !0;
            case"pointerover":
                var o = i.pointerId;
                return gi.set(o, Wr(gi.get(o) || null, e, t, n, r, i)), !0;
            case"gotpointercapture":
                return o = i.pointerId, wi.set(o, Wr(wi.get(o) || null, e, t, n, r, i)), !0
        }
        return !1
    }

    function Ch(e) {
        var t = jn(e.target);
        if (t !== null) {
            var n = Kn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = dh(n), t !== null) {
                        e.blockedOn = t, _h(e.priority, function () {
                            Eh(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function wo(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = bs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                $s = r, n.target.dispatchEvent(r), $s = null
            } else return t = Vi(n), t !== null && qa(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function $f(e, t, n) {
        wo(e) && n.delete(t)
    }

    function I0() {
        Fs = !1, Zt !== null && wo(Zt) && (Zt = null), en !== null && wo(en) && (en = null), tn !== null && wo(tn) && (tn = null), gi.forEach($f), wi.forEach($f)
    }

    function Kr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Fs || (Fs = !0, Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, I0)))
    }

    function Si(e) {
        function t(i) {
            return Kr(i, e)
        }

        if (0 < ro.length) {
            Kr(ro[0], e);
            for (var n = 1; n < ro.length; n++) {
                var r = ro[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (Zt !== null && Kr(Zt, e), en !== null && Kr(en, e), tn !== null && Kr(tn, e), gi.forEach(t), wi.forEach(t), n = 0; n < Qt.length; n++) r = Qt[n], r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < Qt.length && (n = Qt[0], n.blockedOn === null);) Ch(n), n.blockedOn === null && Qt.shift()
    }

    var Sr = Mt.ReactCurrentBatchConfig, Bo = !0;

    function M0(e, t, n, r) {
        var i = W, o = Sr.transition;
        Sr.transition = null;
        try {
            W = 1, Ya(e, t, n, r)
        } finally {
            W = i, Sr.transition = o
        }
    }

    function z0(e, t, n, r) {
        var i = W, o = Sr.transition;
        Sr.transition = null;
        try {
            W = 4, Ya(e, t, n, r)
        } finally {
            W = i, Sr.transition = o
        }
    }

    function Ya(e, t, n, r) {
        if (Bo) {
            var i = bs(e, t, n, r);
            if (i === null) Du(e, t, r, Vo, n), Pf(e, r); else if (D0(i, e, t, n, r)) r.stopPropagation(); else if (Pf(e, r), t & 4 && -1 < L0.indexOf(e)) {
                for (; i !== null;) {
                    var o = Vi(i);
                    if (o !== null && Sh(o), o = bs(e, t, n, r), o === null && Du(e, t, r, Vo, n), o === i) break;
                    i = o
                }
                i !== null && r.stopPropagation()
            } else Du(e, t, r, null, n)
        }
    }

    var Vo = null;

    function bs(e, t, n, r) {
        if (Vo = null, e = Ka(r), e = jn(e), e !== null) if (t = Kn(e), t === null) e = null; else if (n = t.tag, n === 13) {
            if (e = dh(t), e !== null) return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
        return Vo = e, null
    }

    function Oh(e) {
        switch (e) {
            case"cancel":
            case"click":
            case"close":
            case"contextmenu":
            case"copy":
            case"cut":
            case"auxclick":
            case"dblclick":
            case"dragend":
            case"dragstart":
            case"drop":
            case"focusin":
            case"focusout":
            case"input":
            case"invalid":
            case"keydown":
            case"keypress":
            case"keyup":
            case"mousedown":
            case"mouseup":
            case"paste":
            case"pause":
            case"play":
            case"pointercancel":
            case"pointerdown":
            case"pointerup":
            case"ratechange":
            case"reset":
            case"resize":
            case"seeked":
            case"submit":
            case"touchcancel":
            case"touchend":
            case"touchstart":
            case"volumechange":
            case"change":
            case"selectionchange":
            case"textInput":
            case"compositionstart":
            case"compositionend":
            case"compositionupdate":
            case"beforeblur":
            case"afterblur":
            case"beforeinput":
            case"blur":
            case"fullscreenchange":
            case"focus":
            case"hashchange":
            case"popstate":
            case"select":
            case"selectstart":
                return 1;
            case"drag":
            case"dragenter":
            case"dragexit":
            case"dragleave":
            case"dragover":
            case"mousemove":
            case"mouseout":
            case"mouseover":
            case"pointermove":
            case"pointerout":
            case"pointerover":
            case"scroll":
            case"toggle":
            case"touchmove":
            case"wheel":
            case"mouseenter":
            case"mouseleave":
            case"pointerenter":
            case"pointerleave":
                return 4;
            case"message":
                switch (T0()) {
                    case Qa:
                        return 1;
                    case yh:
                        return 4;
                    case zo:
                    case P0:
                        return 16;
                    case vh:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }

    var Yt = null, Xa = null, So = null;

    function kh() {
        if (So) return So;
        var e, t = Xa, n = t.length, r, i = "value" in Yt ? Yt.value : Yt.textContent, o = i.length;
        for (e = 0; e < n && t[e] === i[e]; e++) ;
        var l = n - e;
        for (r = 1; r <= l && t[n - r] === i[o - r]; r++) ;
        return So = i.slice(e, 1 < r ? 1 - r : void 0)
    }

    function Eo(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function io() {
        return !0
    }

    function jf() {
        return !1
    }

    function Ke(e) {
        function t(n, r, i, o, l) {
            this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
            for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
            return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? io : jf, this.isPropagationStopped = jf, this
        }

        return oe(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = io)
            }, stopPropagation: function () {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = io)
            }, persist: function () {
            }, isPersistent: io
        }), t
    }

    var Dr = {
            eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
                return e.timeStamp || Date.now()
            }, defaultPrevented: 0, isTrusted: 0
        }, Ja = Ke(Dr), Bi = oe({}, Dr, {view: 0, detail: 0}), U0 = Ke(Bi), Pu, $u, Qr, El = oe({}, Bi, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Za,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function (e) {
                return "movementX" in e ? e.movementX : (e !== Qr && (Qr && e.type === "mousemove" ? (Pu = e.screenX - Qr.screenX, $u = e.screenY - Qr.screenY) : $u = Pu = 0, Qr = e), Pu)
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : $u
            }
        }), Rf = Ke(El), B0 = oe({}, El, {dataTransfer: 0}), V0 = Ke(B0), H0 = oe({}, Bi, {relatedTarget: 0}), ju = Ke(H0),
        W0 = oe({}, Dr, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), K0 = Ke(W0), Q0 = oe({}, Dr, {
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }), G0 = Ke(Q0), q0 = oe({}, Dr, {data: 0}), Nf = Ke(q0), Y0 = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, X0 = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, J0 = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

    function Z0(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = J0[e]) ? !!t[e] : !1
    }

    function Za() {
        return Z0
    }

    var eg = oe({}, Bi, {
            key: function (e) {
                if (e.key) {
                    var t = Y0[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Eo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? X0[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Za,
            charCode: function (e) {
                return e.type === "keypress" ? Eo(e) : 0
            },
            keyCode: function (e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function (e) {
                return e.type === "keypress" ? Eo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }), tg = Ke(eg), ng = oe({}, El, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }), Af = Ke(ng), rg = oe({}, Bi, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Za
        }), ig = Ke(rg), og = oe({}, Dr, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), lg = Ke(og),
        ug = oe({}, El, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            }, deltaY: function (e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            }, deltaZ: 0, deltaMode: 0
        }), sg = Ke(ug), ag = [9, 13, 27, 32], ec = Ft && "CompositionEvent" in window, ui = null;
    Ft && "documentMode" in document && (ui = document.documentMode);
    var cg = Ft && "TextEvent" in window && !ui, Th = Ft && (!ec || ui && 8 < ui && 11 >= ui),
        Ff = String.fromCharCode(32), bf = !1;

    function Ph(e, t) {
        switch (e) {
            case"keyup":
                return ag.indexOf(t.keyCode) !== -1;
            case"keydown":
                return t.keyCode !== 229;
            case"keypress":
            case"mousedown":
            case"focusout":
                return !0;
            default:
                return !1
        }
    }

    function $h(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }

    var or = !1;

    function fg(e, t) {
        switch (e) {
            case"compositionend":
                return $h(t);
            case"keypress":
                return t.which !== 32 ? null : (bf = !0, Ff);
            case"textInput":
                return e = t.data, e === Ff && bf ? null : e;
            default:
                return null
        }
    }

    function dg(e, t) {
        if (or) return e === "compositionend" || !ec && Ph(e, t) ? (e = kh(), So = Xa = Yt = null, or = !1, e) : null;
        switch (e) {
            case"paste":
                return null;
            case"keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case"compositionend":
                return Th && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }

    var pg = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Lf(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!pg[e.type] : t === "textarea"
    }

    function jh(e, t, n, r) {
        uh(r), t = Ho(t, "onChange"), 0 < t.length && (n = new Ja("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }))
    }

    var si = null, Ei = null;

    function hg(e) {
        Uh(e, 0)
    }

    function xl(e) {
        var t = sr(e);
        if (eh(t)) return e
    }

    function mg(e, t) {
        if (e === "change") return t
    }

    var Rh = !1;
    if (Ft) {
        var Ru;
        if (Ft) {
            var Nu = "oninput" in document;
            if (!Nu) {
                var Df = document.createElement("div");
                Df.setAttribute("oninput", "return;"), Nu = typeof Df.oninput == "function"
            }
            Ru = Nu
        } else Ru = !1;
        Rh = Ru && (!document.documentMode || 9 < document.documentMode)
    }

    function If() {
        si && (si.detachEvent("onpropertychange", Nh), Ei = si = null)
    }

    function Nh(e) {
        if (e.propertyName === "value" && xl(Ei)) {
            var t = [];
            jh(t, Ei, e, Ka(e)), fh(hg, t)
        }
    }

    function yg(e, t, n) {
        e === "focusin" ? (If(), si = t, Ei = n, si.attachEvent("onpropertychange", Nh)) : e === "focusout" && If()
    }

    function vg(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return xl(Ei)
    }

    function gg(e, t) {
        if (e === "click") return xl(t)
    }

    function wg(e, t) {
        if (e === "input" || e === "change") return xl(t)
    }

    function Sg(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }

    var pt = typeof Object.is == "function" ? Object.is : Sg;

    function xi(e, t) {
        if (pt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!vs.call(t, i) || !pt(e[i], t[i])) return !1
        }
        return !0
    }

    function Mf(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function zf(e, t) {
        var n = Mf(e);
        e = 0;
        for (var r; n;) {
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length, e <= t && r >= t) return {node: n, offset: t - e};
                e = r
            }
            e:{
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Mf(n)
        }
    }

    function Ah(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ah(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Fh() {
        for (var e = window, t = Do(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) e = t.contentWindow; else break;
            t = Do(e.document)
        }
        return t
    }

    function tc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function Eg(e) {
        var t = Fh(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && Ah(n.ownerDocument.documentElement, n)) {
            if (r !== null && tc(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var i = n.textContent.length, o = Math.min(r.start, i);
                    r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = zf(n, o);
                    var l = zf(n, r);
                    i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)))
                }
            }
            for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }

    var xg = Ft && "documentMode" in document && 11 >= document.documentMode, lr = null, Ls = null, ai = null, Ds = !1;

    function Uf(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Ds || lr == null || lr !== Do(r) || (r = lr, "selectionStart" in r && tc(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), ai && xi(ai, r) || (ai = r, r = Ho(Ls, "onSelect"), 0 < r.length && (t = new Ja("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = lr)))
    }

    function oo(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }

    var ur = {
        animationend: oo("Animation", "AnimationEnd"),
        animationiteration: oo("Animation", "AnimationIteration"),
        animationstart: oo("Animation", "AnimationStart"),
        transitionend: oo("Transition", "TransitionEnd")
    }, Au = {}, bh = {};
    Ft && (bh = document.createElement("div").style, "AnimationEvent" in window || (delete ur.animationend.animation, delete ur.animationiteration.animation, delete ur.animationstart.animation), "TransitionEvent" in window || delete ur.transitionend.transition);

    function _l(e) {
        if (Au[e]) return Au[e];
        if (!ur[e]) return e;
        var t = ur[e], n;
        for (n in t) if (t.hasOwnProperty(n) && n in bh) return Au[e] = t[n];
        return e
    }

    var Lh = _l("animationend"), Dh = _l("animationiteration"), Ih = _l("animationstart"), Mh = _l("transitionend"),
        zh = new Map,
        Bf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function yn(e, t) {
        zh.set(e, t), Wn(t, [e])
    }

    for (var Fu = 0; Fu < Bf.length; Fu++) {
        var bu = Bf[Fu], _g = bu.toLowerCase(), Cg = bu[0].toUpperCase() + bu.slice(1);
        yn(_g, "on" + Cg)
    }
    yn(Lh, "onAnimationEnd");
    yn(Dh, "onAnimationIteration");
    yn(Ih, "onAnimationStart");
    yn("dblclick", "onDoubleClick");
    yn("focusin", "onFocus");
    yn("focusout", "onBlur");
    yn(Mh, "onTransitionEnd");
    kr("onMouseEnter", ["mouseout", "mouseover"]);
    kr("onMouseLeave", ["mouseout", "mouseover"]);
    kr("onPointerEnter", ["pointerout", "pointerover"]);
    kr("onPointerLeave", ["pointerout", "pointerover"]);
    Wn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Wn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    Wn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Wn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    Wn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Og = new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));

    function Vf(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, _0(r, t, void 0, e), e.currentTarget = null
    }

    function Uh(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n], i = r.event;
            r = r.listeners;
            e:{
                var o = void 0;
                if (t) for (var l = r.length - 1; 0 <= l; l--) {
                    var u = r[l], s = u.instance, a = u.currentTarget;
                    if (u = u.listener, s !== o && i.isPropagationStopped()) break e;
                    Vf(i, u, a), o = s
                } else for (l = 0; l < r.length; l++) {
                    if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && i.isPropagationStopped()) break e;
                    Vf(i, u, a), o = s
                }
            }
        }
        if (Mo) throw e = Ns, Mo = !1, Ns = null, e
    }

    function Y(e, t) {
        var n = t[Bs];
        n === void 0 && (n = t[Bs] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Bh(t, e, 2, !1), n.add(r))
    }

    function Lu(e, t, n) {
        var r = 0;
        t && (r |= 4), Bh(n, e, r, t)
    }

    var lo = "_reactListening" + Math.random().toString(36).slice(2);

    function _i(e) {
        if (!e[lo]) {
            e[lo] = !0, qp.forEach(function (n) {
                n !== "selectionchange" && (Og.has(n) || Lu(n, !1, e), Lu(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[lo] || (t[lo] = !0, Lu("selectionchange", !1, t))
        }
    }

    function Bh(e, t, n, r) {
        switch (Oh(t)) {
            case 1:
                var i = M0;
                break;
            case 4:
                i = z0;
                break;
            default:
                i = Ya
        }
        n = i.bind(null, t, n, e), i = void 0, !Rs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {passive: i}) : e.addEventListener(t, n, !1)
    }

    function Du(e, t, n, r, i) {
        var o = r;
        if (!(t & 1) && !(t & 2) && r !== null) e:for (; ;) {
            if (r === null) return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var u = r.stateNode.containerInfo;
                if (u === i || u.nodeType === 8 && u.parentNode === i) break;
                if (l === 4) for (l = r.return; l !== null;) {
                    var s = l.tag;
                    if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo, s === i || s.nodeType === 8 && s.parentNode === i)) return;
                    l = l.return
                }
                for (; u !== null;) {
                    if (l = jn(u), l === null) return;
                    if (s = l.tag, s === 5 || s === 6) {
                        r = o = l;
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
        fh(function () {
            var a = o, c = Ka(n), d = [];
            e:{
                var f = zh.get(e);
                if (f !== void 0) {
                    var v = Ja, m = e;
                    switch (e) {
                        case"keypress":
                            if (Eo(n) === 0) break e;
                        case"keydown":
                        case"keyup":
                            v = tg;
                            break;
                        case"focusin":
                            m = "focus", v = ju;
                            break;
                        case"focusout":
                            m = "blur", v = ju;
                            break;
                        case"beforeblur":
                        case"afterblur":
                            v = ju;
                            break;
                        case"click":
                            if (n.button === 2) break e;
                        case"auxclick":
                        case"dblclick":
                        case"mousedown":
                        case"mousemove":
                        case"mouseup":
                        case"mouseout":
                        case"mouseover":
                        case"contextmenu":
                            v = Rf;
                            break;
                        case"drag":
                        case"dragend":
                        case"dragenter":
                        case"dragexit":
                        case"dragleave":
                        case"dragover":
                        case"dragstart":
                        case"drop":
                            v = V0;
                            break;
                        case"touchcancel":
                        case"touchend":
                        case"touchmove":
                        case"touchstart":
                            v = ig;
                            break;
                        case Lh:
                        case Dh:
                        case Ih:
                            v = K0;
                            break;
                        case Mh:
                            v = lg;
                            break;
                        case"scroll":
                            v = U0;
                            break;
                        case"wheel":
                            v = sg;
                            break;
                        case"copy":
                        case"cut":
                        case"paste":
                            v = G0;
                            break;
                        case"gotpointercapture":
                        case"lostpointercapture":
                        case"pointercancel":
                        case"pointerdown":
                        case"pointermove":
                        case"pointerout":
                        case"pointerover":
                        case"pointerup":
                            v = Af
                    }
                    var y = (t & 4) !== 0, x = !y && e === "scroll", h = y ? f !== null ? f + "Capture" : null : f;
                    y = [];
                    for (var p = a, g; p !== null;) {
                        g = p;
                        var w = g.stateNode;
                        if (g.tag === 5 && w !== null && (g = w, h !== null && (w = vi(p, h), w != null && y.push(Ci(p, w, g)))), x) break;
                        p = p.return
                    }
                    0 < y.length && (f = new v(f, m, null, n, c), d.push({event: f, listeners: y}))
                }
            }
            if (!(t & 7)) {
                e:{
                    if (f = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", f && n !== $s && (m = n.relatedTarget || n.fromElement) && (jn(m) || m[bt])) break e;
                    if ((v || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, v ? (m = n.relatedTarget || n.toElement, v = a, m = m ? jn(m) : null, m !== null && (x = Kn(m), m !== x || m.tag !== 5 && m.tag !== 6) && (m = null)) : (v = null, m = a), v !== m)) {
                        if (y = Rf, w = "onMouseLeave", h = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (y = Af, w = "onPointerLeave", h = "onPointerEnter", p = "pointer"), x = v == null ? f : sr(v), g = m == null ? f : sr(m), f = new y(w, p + "leave", v, n, c), f.target = x, f.relatedTarget = g, w = null, jn(c) === a && (y = new y(h, p + "enter", m, n, c), y.target = g, y.relatedTarget = x, w = y), x = w, v && m) t:{
                            for (y = v, h = m, p = 0, g = y; g; g = tr(g)) p++;
                            for (g = 0, w = h; w; w = tr(w)) g++;
                            for (; 0 < p - g;) y = tr(y), p--;
                            for (; 0 < g - p;) h = tr(h), g--;
                            for (; p--;) {
                                if (y === h || h !== null && y === h.alternate) break t;
                                y = tr(y), h = tr(h)
                            }
                            y = null
                        } else y = null;
                        v !== null && Hf(d, f, v, y, !1), m !== null && x !== null && Hf(d, x, m, y, !0)
                    }
                }
                e:{
                    if (f = a ? sr(a) : window, v = f.nodeName && f.nodeName.toLowerCase(), v === "select" || v === "input" && f.type === "file") var C = mg; else if (Lf(f)) if (Rh) C = wg; else {
                        C = vg;
                        var T = yg
                    } else (v = f.nodeName) && v.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = gg);
                    if (C && (C = C(e, a))) {
                        jh(d, C, n, c);
                        break e
                    }
                    T && T(e, f, a), e === "focusout" && (T = f._wrapperState) && T.controlled && f.type === "number" && Cs(f, "number", f.value)
                }
                switch (T = a ? sr(a) : window, e) {
                    case"focusin":
                        (Lf(T) || T.contentEditable === "true") && (lr = T, Ls = a, ai = null);
                        break;
                    case"focusout":
                        ai = Ls = lr = null;
                        break;
                    case"mousedown":
                        Ds = !0;
                        break;
                    case"contextmenu":
                    case"mouseup":
                    case"dragend":
                        Ds = !1, Uf(d, n, c);
                        break;
                    case"selectionchange":
                        if (xg) break;
                    case"keydown":
                    case"keyup":
                        Uf(d, n, c)
                }
                var P;
                if (ec) e:{
                    switch (e) {
                        case"compositionstart":
                            var N = "onCompositionStart";
                            break e;
                        case"compositionend":
                            N = "onCompositionEnd";
                            break e;
                        case"compositionupdate":
                            N = "onCompositionUpdate";
                            break e
                    }
                    N = void 0
                } else or ? Ph(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
                N && (Th && n.locale !== "ko" && (or || N !== "onCompositionStart" ? N === "onCompositionEnd" && or && (P = kh()) : (Yt = c, Xa = "value" in Yt ? Yt.value : Yt.textContent, or = !0)), T = Ho(a, N), 0 < T.length && (N = new Nf(N, e, null, n, c), d.push({
                    event: N,
                    listeners: T
                }), P ? N.data = P : (P = $h(n), P !== null && (N.data = P)))), (P = cg ? fg(e, n) : dg(e, n)) && (a = Ho(a, "onBeforeInput"), 0 < a.length && (c = new Nf("onBeforeInput", "beforeinput", null, n, c), d.push({
                    event: c,
                    listeners: a
                }), c.data = P))
            }
            Uh(d, t)
        })
    }

    function Ci(e, t, n) {
        return {instance: e, listener: t, currentTarget: n}
    }

    function Ho(e, t) {
        for (var n = t + "Capture", r = []; e !== null;) {
            var i = e, o = i.stateNode;
            i.tag === 5 && o !== null && (i = o, o = vi(e, n), o != null && r.unshift(Ci(e, o, i)), o = vi(e, t), o != null && r.push(Ci(e, o, i))), e = e.return
        }
        return r
    }

    function tr(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function Hf(e, t, n, r, i) {
        for (var o = t._reactName, l = []; n !== null && n !== r;) {
            var u = n, s = u.alternate, a = u.stateNode;
            if (s !== null && s === r) break;
            u.tag === 5 && a !== null && (u = a, i ? (s = vi(n, o), s != null && l.unshift(Ci(n, s, u))) : i || (s = vi(n, o), s != null && l.push(Ci(n, s, u)))), n = n.return
        }
        l.length !== 0 && e.push({event: t, listeners: l})
    }

    var kg = /\r\n?/g, Tg = /\u0000|\uFFFD/g;

    function Wf(e) {
        return (typeof e == "string" ? e : "" + e).replace(kg, `
`).replace(Tg, "")
    }

    function uo(e, t, n) {
        if (t = Wf(t), Wf(e) !== t && n) throw Error(O(425))
    }

    function Wo() {
    }

    var Is = null, Ms = null;

    function zs(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }

    var Us = typeof setTimeout == "function" ? setTimeout : void 0,
        Pg = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Kf = typeof Promise == "function" ? Promise : void 0,
        $g = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kf < "u" ? function (e) {
            return Kf.resolve(null).then(e).catch(jg)
        } : Us;

    function jg(e) {
        setTimeout(function () {
            throw e
        })
    }

    function Iu(e, t) {
        var n = t, r = 0;
        do {
            var i = n.nextSibling;
            if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), Si(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = i
        } while (n);
        Si(t)
    }

    function nn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    function Qf(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--
                } else n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }

    var Ir = Math.random().toString(36).slice(2), wt = "__reactFiber$" + Ir, Oi = "__reactProps$" + Ir,
        bt = "__reactContainer$" + Ir, Bs = "__reactEvents$" + Ir, Rg = "__reactListeners$" + Ir,
        Ng = "__reactHandles$" + Ir;

    function jn(e) {
        var t = e[wt];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[bt] || n[wt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Qf(e); e !== null;) {
                    if (n = e[wt]) return n;
                    e = Qf(e)
                }
                return t
            }
            e = n, n = e.parentNode
        }
        return null
    }

    function Vi(e) {
        return e = e[wt] || e[bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function sr(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(O(33))
    }

    function Cl(e) {
        return e[Oi] || null
    }

    var Vs = [], ar = -1;

    function vn(e) {
        return {current: e}
    }

    function J(e) {
        0 > ar || (e.current = Vs[ar], Vs[ar] = null, ar--)
    }

    function q(e, t) {
        ar++, Vs[ar] = e.current, e.current = t
    }

    var fn = {}, Oe = vn(fn), Ae = vn(!1), In = fn;

    function Tr(e, t) {
        var n = e.type.contextTypes;
        if (!n) return fn;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var i = {}, o;
        for (o in n) i[o] = t[o];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
    }

    function Fe(e) {
        return e = e.childContextTypes, e != null
    }

    function Ko() {
        J(Ae), J(Oe)
    }

    function Gf(e, t, n) {
        if (Oe.current !== fn) throw Error(O(168));
        q(Oe, t), q(Ae, n)
    }

    function Vh(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for (var i in r) if (!(i in t)) throw Error(O(108, y0(e) || "Unknown", i));
        return oe({}, n, r)
    }

    function Qo(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || fn, In = Oe.current, q(Oe, e), q(Ae, Ae.current), !0
    }

    function qf(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(O(169));
        n ? (e = Vh(e, t, In), r.__reactInternalMemoizedMergedChildContext = e, J(Ae), J(Oe), q(Oe, e)) : J(Ae), q(Ae, n)
    }

    var $t = null, Ol = !1, Mu = !1;

    function Hh(e) {
        $t === null ? $t = [e] : $t.push(e)
    }

    function Ag(e) {
        Ol = !0, Hh(e)
    }

    function gn() {
        if (!Mu && $t !== null) {
            Mu = !0;
            var e = 0, t = W;
            try {
                var n = $t;
                for (W = 1; e < n.length; e++) {
                    var r = n[e];
                    do r = r(!0); while (r !== null)
                }
                $t = null, Ol = !1
            } catch (i) {
                throw $t !== null && ($t = $t.slice(e + 1)), mh(Qa, gn), i
            } finally {
                W = t, Mu = !1
            }
        }
        return null
    }

    var cr = [], fr = 0, Go = null, qo = 0, Ye = [], Xe = 0, Mn = null, jt = 1, Rt = "";

    function On(e, t) {
        cr[fr++] = qo, cr[fr++] = Go, Go = e, qo = t
    }

    function Wh(e, t, n) {
        Ye[Xe++] = jt, Ye[Xe++] = Rt, Ye[Xe++] = Mn, Mn = e;
        var r = jt;
        e = Rt;
        var i = 32 - ft(r) - 1;
        r &= ~(1 << i), n += 1;
        var o = 32 - ft(t) + i;
        if (30 < o) {
            var l = i - i % 5;
            o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, jt = 1 << 32 - ft(t) + i | n << i | r, Rt = o + e
        } else jt = 1 << o | n << i | r, Rt = e
    }

    function nc(e) {
        e.return !== null && (On(e, 1), Wh(e, 1, 0))
    }

    function rc(e) {
        for (; e === Go;) Go = cr[--fr], cr[fr] = null, qo = cr[--fr], cr[fr] = null;
        for (; e === Mn;) Mn = Ye[--Xe], Ye[Xe] = null, Rt = Ye[--Xe], Ye[Xe] = null, jt = Ye[--Xe], Ye[Xe] = null
    }

    var Be = null, Me = null, ne = !1, at = null;

    function Kh(e, t) {
        var n = Je(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
    }

    function Yf(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Be = e, Me = nn(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Be = e, Me = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mn !== null ? {
                    id: jt,
                    overflow: Rt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = Je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Be = e, Me = null, !0) : !1;
            default:
                return !1
        }
    }

    function Hs(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function Ws(e) {
        if (ne) {
            var t = Me;
            if (t) {
                var n = t;
                if (!Yf(e, t)) {
                    if (Hs(e)) throw Error(O(418));
                    t = nn(n.nextSibling);
                    var r = Be;
                    t && Yf(e, t) ? Kh(r, n) : (e.flags = e.flags & -4097 | 2, ne = !1, Be = e)
                }
            } else {
                if (Hs(e)) throw Error(O(418));
                e.flags = e.flags & -4097 | 2, ne = !1, Be = e
            }
        }
    }

    function Xf(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        Be = e
    }

    function so(e) {
        if (e !== Be) return !1;
        if (!ne) return Xf(e), ne = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zs(e.type, e.memoizedProps)), t && (t = Me)) {
            if (Hs(e)) throw Qh(), Error(O(418));
            for (; t;) Kh(e, t), t = nn(t.nextSibling)
        }
        if (Xf(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(O(317));
            e:{
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                Me = nn(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                Me = null
            }
        } else Me = Be ? nn(e.stateNode.nextSibling) : null;
        return !0
    }

    function Qh() {
        for (var e = Me; e;) e = nn(e.nextSibling)
    }

    function Pr() {
        Me = Be = null, ne = !1
    }

    function ic(e) {
        at === null ? at = [e] : at.push(e)
    }

    var Fg = Mt.ReactCurrentBatchConfig;

    function ut(e, t) {
        if (e && e.defaultProps) {
            t = oe({}, t), e = e.defaultProps;
            for (var n in e) t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }

    var Yo = vn(null), Xo = null, dr = null, oc = null;

    function lc() {
        oc = dr = Xo = null
    }

    function uc(e) {
        var t = Yo.current;
        J(Yo), e._currentValue = t
    }

    function Ks(e, t, n) {
        for (; e !== null;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function Er(e, t) {
        Xo = e, oc = dr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0), e.firstContext = null)
    }

    function et(e) {
        var t = e._currentValue;
        if (oc !== e) if (e = {context: e, memoizedValue: t, next: null}, dr === null) {
            if (Xo === null) throw Error(O(308));
            dr = e, Xo.dependencies = {lanes: 0, firstContext: e}
        } else dr = dr.next = e;
        return t
    }

    var Rn = null;

    function sc(e) {
        Rn === null ? Rn = [e] : Rn.push(e)
    }

    function Gh(e, t, n, r) {
        var i = t.interleaved;
        return i === null ? (n.next = n, sc(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Lt(e, r)
    }

    function Lt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }

    var Kt = !1;

    function ac(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {pending: null, interleaved: null, lanes: 0},
            effects: null
        }
    }

    function qh(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function Nt(e, t) {
        return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
    }

    function rn(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, V & 2) {
            var i = r.pending;
            return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Lt(e, n)
        }
        return i = r.interleaved, i === null ? (t.next = t, sc(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Lt(e, n)
    }

    function xo(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Ga(e, n)
        }
    }

    function Jf(e, t) {
        var n = e.updateQueue, r = e.alternate;
        if (r !== null && (r = r.updateQueue, n === r)) {
            var i = null, o = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var l = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    o === null ? i = o = l : o = o.next = l, n = n.next
                } while (n !== null);
                o === null ? i = o = t : o = o.next = t
            } else i = o = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }

    function Jo(e, t, n, r) {
        var i = e.updateQueue;
        Kt = !1;
        var o = i.firstBaseUpdate, l = i.lastBaseUpdate, u = i.shared.pending;
        if (u !== null) {
            i.shared.pending = null;
            var s = u, a = s.next;
            s.next = null, l === null ? o = a : l.next = a, l = s;
            var c = e.alternate;
            c !== null && (c = c.updateQueue, u = c.lastBaseUpdate, u !== l && (u === null ? c.firstBaseUpdate = a : u.next = a, c.lastBaseUpdate = s))
        }
        if (o !== null) {
            var d = i.baseState;
            l = 0, c = a = s = null, u = o;
            do {
                var f = u.lane, v = u.eventTime;
                if ((r & f) === f) {
                    c !== null && (c = c.next = {
                        eventTime: v,
                        lane: 0,
                        tag: u.tag,
                        payload: u.payload,
                        callback: u.callback,
                        next: null
                    });
                    e:{
                        var m = e, y = u;
                        switch (f = t, v = n, y.tag) {
                            case 1:
                                if (m = y.payload, typeof m == "function") {
                                    d = m.call(v, d, f);
                                    break e
                                }
                                d = m;
                                break e;
                            case 3:
                                m.flags = m.flags & -65537 | 128;
                            case 0:
                                if (m = y.payload, f = typeof m == "function" ? m.call(v, d, f) : m, f == null) break e;
                                d = oe({}, d, f);
                                break e;
                            case 2:
                                Kt = !0
                        }
                    }
                    u.callback !== null && u.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [u] : f.push(u))
                } else v = {
                    eventTime: v,
                    lane: f,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                }, c === null ? (a = c = v, s = d) : c = c.next = v, l |= f;
                if (u = u.next, u === null) {
                    if (u = i.shared.pending, u === null) break;
                    f = u, u = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null
                }
            } while (1);
            if (c === null && (s = d), i.baseState = s, i.firstBaseUpdate = a, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
                i = t;
                do l |= i.lane, i = i.next; while (i !== t)
            } else o === null && (i.shared.lanes = 0);
            Un |= l, e.lanes = l, e.memoizedState = d
        }
    }

    function Zf(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
            var r = e[t], i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(O(191, i));
                i.call(r)
            }
        }
    }

    var Yh = new Gp.Component().refs;

    function Qs(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }

    var kl = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? Kn(e) === e : !1
        }, enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Te(), i = ln(e), o = Nt(r, i);
            o.payload = t, n != null && (o.callback = n), t = rn(e, o, i), t !== null && (dt(t, e, i, r), xo(t, e, i))
        }, enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Te(), i = ln(e), o = Nt(r, i);
            o.tag = 1, o.payload = t, n != null && (o.callback = n), t = rn(e, o, i), t !== null && (dt(t, e, i, r), xo(t, e, i))
        }, enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Te(), r = ln(e), i = Nt(n, r);
            i.tag = 2, t != null && (i.callback = t), t = rn(e, i, r), t !== null && (dt(t, e, r, n), xo(t, e, r))
        }
    };

    function ed(e, t, n, r, i, o, l) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !xi(n, r) || !xi(i, o) : !0
    }

    function Xh(e, t, n) {
        var r = !1, i = fn, o = t.contextType;
        return typeof o == "object" && o !== null ? o = et(o) : (i = Fe(t) ? In : Oe.current, r = t.contextTypes, o = (r = r != null) ? Tr(e, i) : fn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = kl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
    }

    function td(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && kl.enqueueReplaceState(t, t.state, null)
    }

    function Gs(e, t, n, r) {
        var i = e.stateNode;
        i.props = n, i.state = e.memoizedState, i.refs = Yh, ac(e);
        var o = t.contextType;
        typeof o == "object" && o !== null ? i.context = et(o) : (o = Fe(t) ? In : Oe.current, i.context = Tr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Qs(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && kl.enqueueReplaceState(i, i.state, null), Jo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function Gr(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(O(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(O(147, e));
                var i = r, o = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (l) {
                    var u = i.refs;
                    u === Yh && (u = i.refs = {}), l === null ? delete u[o] : u[o] = l
                }, t._stringRef = o, t)
            }
            if (typeof e != "string") throw Error(O(284));
            if (!n._owner) throw Error(O(290, e))
        }
        return e
    }

    function ao(e, t) {
        throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function nd(e) {
        var t = e._init;
        return t(e._payload)
    }

    function Jh(e) {
        function t(h, p) {
            if (e) {
                var g = h.deletions;
                g === null ? (h.deletions = [p], h.flags |= 16) : g.push(p)
            }
        }

        function n(h, p) {
            if (!e) return null;
            for (; p !== null;) t(h, p), p = p.sibling;
            return null
        }

        function r(h, p) {
            for (h = new Map; p !== null;) p.key !== null ? h.set(p.key, p) : h.set(p.index, p), p = p.sibling;
            return h
        }

        function i(h, p) {
            return h = un(h, p), h.index = 0, h.sibling = null, h
        }

        function o(h, p, g) {
            return h.index = g, e ? (g = h.alternate, g !== null ? (g = g.index, g < p ? (h.flags |= 2, p) : g) : (h.flags |= 2, p)) : (h.flags |= 1048576, p)
        }

        function l(h) {
            return e && h.alternate === null && (h.flags |= 2), h
        }

        function u(h, p, g, w) {
            return p === null || p.tag !== 6 ? (p = Ku(g, h.mode, w), p.return = h, p) : (p = i(p, g), p.return = h, p)
        }

        function s(h, p, g, w) {
            var C = g.type;
            return C === ir ? c(h, p, g.props.children, w, g.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Wt && nd(C) === p.type) ? (w = i(p, g.props), w.ref = Gr(h, p, g), w.return = h, w) : (w = Po(g.type, g.key, g.props, null, h.mode, w), w.ref = Gr(h, p, g), w.return = h, w)
        }

        function a(h, p, g, w) {
            return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = Qu(g, h.mode, w), p.return = h, p) : (p = i(p, g.children || []), p.return = h, p)
        }

        function c(h, p, g, w, C) {
            return p === null || p.tag !== 7 ? (p = Fn(g, h.mode, w, C), p.return = h, p) : (p = i(p, g), p.return = h, p)
        }

        function d(h, p, g) {
            if (typeof p == "string" && p !== "" || typeof p == "number") return p = Ku("" + p, h.mode, g), p.return = h, p;
            if (typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                    case Ji:
                        return g = Po(p.type, p.key, p.props, null, h.mode, g), g.ref = Gr(h, null, p), g.return = h, g;
                    case rr:
                        return p = Qu(p, h.mode, g), p.return = h, p;
                    case Wt:
                        var w = p._init;
                        return d(h, w(p._payload), g)
                }
                if (ei(p) || Vr(p)) return p = Fn(p, h.mode, g, null), p.return = h, p;
                ao(h, p)
            }
            return null
        }

        function f(h, p, g, w) {
            var C = p !== null ? p.key : null;
            if (typeof g == "string" && g !== "" || typeof g == "number") return C !== null ? null : u(h, p, "" + g, w);
            if (typeof g == "object" && g !== null) {
                switch (g.$$typeof) {
                    case Ji:
                        return g.key === C ? s(h, p, g, w) : null;
                    case rr:
                        return g.key === C ? a(h, p, g, w) : null;
                    case Wt:
                        return C = g._init, f(h, p, C(g._payload), w)
                }
                if (ei(g) || Vr(g)) return C !== null ? null : c(h, p, g, w, null);
                ao(h, g)
            }
            return null
        }

        function v(h, p, g, w, C) {
            if (typeof w == "string" && w !== "" || typeof w == "number") return h = h.get(g) || null, u(p, h, "" + w, C);
            if (typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                    case Ji:
                        return h = h.get(w.key === null ? g : w.key) || null, s(p, h, w, C);
                    case rr:
                        return h = h.get(w.key === null ? g : w.key) || null, a(p, h, w, C);
                    case Wt:
                        var T = w._init;
                        return v(h, p, g, T(w._payload), C)
                }
                if (ei(w) || Vr(w)) return h = h.get(g) || null, c(p, h, w, C, null);
                ao(p, w)
            }
            return null
        }

        function m(h, p, g, w) {
            for (var C = null, T = null, P = p, N = p = 0, U = null; P !== null && N < g.length; N++) {
                P.index > N ? (U = P, P = null) : U = P.sibling;
                var $ = f(h, P, g[N], w);
                if ($ === null) {
                    P === null && (P = U);
                    break
                }
                e && P && $.alternate === null && t(h, P), p = o($, p, N), T === null ? C = $ : T.sibling = $, T = $, P = U
            }
            if (N === g.length) return n(h, P), ne && On(h, N), C;
            if (P === null) {
                for (; N < g.length; N++) P = d(h, g[N], w), P !== null && (p = o(P, p, N), T === null ? C = P : T.sibling = P, T = P);
                return ne && On(h, N), C
            }
            for (P = r(h, P); N < g.length; N++) U = v(P, h, N, g[N], w), U !== null && (e && U.alternate !== null && P.delete(U.key === null ? N : U.key), p = o(U, p, N), T === null ? C = U : T.sibling = U, T = U);
            return e && P.forEach(function (M) {
                return t(h, M)
            }), ne && On(h, N), C
        }

        function y(h, p, g, w) {
            var C = Vr(g);
            if (typeof C != "function") throw Error(O(150));
            if (g = C.call(g), g == null) throw Error(O(151));
            for (var T = C = null, P = p, N = p = 0, U = null, $ = g.next(); P !== null && !$.done; N++, $ = g.next()) {
                P.index > N ? (U = P, P = null) : U = P.sibling;
                var M = f(h, P, $.value, w);
                if (M === null) {
                    P === null && (P = U);
                    break
                }
                e && P && M.alternate === null && t(h, P), p = o(M, p, N), T === null ? C = M : T.sibling = M, T = M, P = U
            }
            if ($.done) return n(h, P), ne && On(h, N), C;
            if (P === null) {
                for (; !$.done; N++, $ = g.next()) $ = d(h, $.value, w), $ !== null && (p = o($, p, N), T === null ? C = $ : T.sibling = $, T = $);
                return ne && On(h, N), C
            }
            for (P = r(h, P); !$.done; N++, $ = g.next()) $ = v(P, h, N, $.value, w), $ !== null && (e && $.alternate !== null && P.delete($.key === null ? N : $.key), p = o($, p, N), T === null ? C = $ : T.sibling = $, T = $);
            return e && P.forEach(function (je) {
                return t(h, je)
            }), ne && On(h, N), C
        }

        function x(h, p, g, w) {
            if (typeof g == "object" && g !== null && g.type === ir && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
                switch (g.$$typeof) {
                    case Ji:
                        e:{
                            for (var C = g.key, T = p; T !== null;) {
                                if (T.key === C) {
                                    if (C = g.type, C === ir) {
                                        if (T.tag === 7) {
                                            n(h, T.sibling), p = i(T, g.props.children), p.return = h, h = p;
                                            break e
                                        }
                                    } else if (T.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Wt && nd(C) === T.type) {
                                        n(h, T.sibling), p = i(T, g.props), p.ref = Gr(h, T, g), p.return = h, h = p;
                                        break e
                                    }
                                    n(h, T);
                                    break
                                } else t(h, T);
                                T = T.sibling
                            }
                            g.type === ir ? (p = Fn(g.props.children, h.mode, w, g.key), p.return = h, h = p) : (w = Po(g.type, g.key, g.props, null, h.mode, w), w.ref = Gr(h, p, g), w.return = h, h = w)
                        }
                        return l(h);
                    case rr:
                        e:{
                            for (T = g.key; p !== null;) {
                                if (p.key === T) if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                    n(h, p.sibling), p = i(p, g.children || []), p.return = h, h = p;
                                    break e
                                } else {
                                    n(h, p);
                                    break
                                } else t(h, p);
                                p = p.sibling
                            }
                            p = Qu(g, h.mode, w), p.return = h, h = p
                        }
                        return l(h);
                    case Wt:
                        return T = g._init, x(h, p, T(g._payload), w)
                }
                if (ei(g)) return m(h, p, g, w);
                if (Vr(g)) return y(h, p, g, w);
                ao(h, g)
            }
            return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (n(h, p.sibling), p = i(p, g), p.return = h, h = p) : (n(h, p), p = Ku(g, h.mode, w), p.return = h, h = p), l(h)) : n(h, p)
        }

        return x
    }

    var $r = Jh(!0), Zh = Jh(!1), Hi = {}, _t = vn(Hi), ki = vn(Hi), Ti = vn(Hi);

    function Nn(e) {
        if (e === Hi) throw Error(O(174));
        return e
    }

    function cc(e, t) {
        switch (q(Ti, t), q(ki, e), q(_t, Hi), e = t.nodeType, e) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ks(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ks(t, e)
        }
        J(_t), q(_t, t)
    }

    function jr() {
        J(_t), J(ki), J(Ti)
    }

    function em(e) {
        Nn(Ti.current);
        var t = Nn(_t.current), n = ks(t, e.type);
        t !== n && (q(ki, e), q(_t, n))
    }

    function fc(e) {
        ki.current === e && (J(_t), J(ki))
    }

    var re = vn(0);

    function Zo(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    var zu = [];

    function dc() {
        for (var e = 0; e < zu.length; e++) zu[e]._workInProgressVersionPrimary = null;
        zu.length = 0
    }

    var _o = Mt.ReactCurrentDispatcher, Uu = Mt.ReactCurrentBatchConfig, zn = 0, ie = null, ce = null, he = null,
        el = !1, ci = !1, Pi = 0, bg = 0;

    function Ee() {
        throw Error(O(321))
    }

    function pc(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!pt(e[n], t[n])) return !1;
        return !0
    }

    function hc(e, t, n, r, i, o) {
        if (zn = o, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _o.current = e === null || e.memoizedState === null ? Mg : zg, e = n(r, i), ci) {
            o = 0;
            do {
                if (ci = !1, Pi = 0, 25 <= o) throw Error(O(301));
                o += 1, he = ce = null, t.updateQueue = null, _o.current = Ug, e = n(r, i)
            } while (ci)
        }
        if (_o.current = tl, t = ce !== null && ce.next !== null, zn = 0, he = ce = ie = null, el = !1, t) throw Error(O(300));
        return e
    }

    function mc() {
        var e = Pi !== 0;
        return Pi = 0, e
    }

    function gt() {
        var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
        return he === null ? ie.memoizedState = he = e : he = he.next = e, he
    }

    function tt() {
        if (ce === null) {
            var e = ie.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = ce.next;
        var t = he === null ? ie.memoizedState : he.next;
        if (t !== null) he = t, ce = e; else {
            if (e === null) throw Error(O(310));
            ce = e, e = {
                memoizedState: ce.memoizedState,
                baseState: ce.baseState,
                baseQueue: ce.baseQueue,
                queue: ce.queue,
                next: null
            }, he === null ? ie.memoizedState = he = e : he = he.next = e
        }
        return he
    }

    function $i(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function Bu(e) {
        var t = tt(), n = t.queue;
        if (n === null) throw Error(O(311));
        n.lastRenderedReducer = e;
        var r = ce, i = r.baseQueue, o = n.pending;
        if (o !== null) {
            if (i !== null) {
                var l = i.next;
                i.next = o.next, o.next = l
            }
            r.baseQueue = i = o, n.pending = null
        }
        if (i !== null) {
            o = i.next, r = r.baseState;
            var u = l = null, s = null, a = o;
            do {
                var c = a.lane;
                if ((zn & c) === c) s !== null && (s = s.next = {
                    lane: 0,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                }), r = a.hasEagerState ? a.eagerState : e(r, a.action); else {
                    var d = {
                        lane: c,
                        action: a.action,
                        hasEagerState: a.hasEagerState,
                        eagerState: a.eagerState,
                        next: null
                    };
                    s === null ? (u = s = d, l = r) : s = s.next = d, ie.lanes |= c, Un |= c
                }
                a = a.next
            } while (a !== null && a !== o);
            s === null ? l = r : s.next = u, pt(r, t.memoizedState) || (Ne = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r
        }
        if (e = n.interleaved, e !== null) {
            i = e;
            do o = i.lane, ie.lanes |= o, Un |= o, i = i.next; while (i !== e)
        } else i === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }

    function Vu(e) {
        var t = tt(), n = t.queue;
        if (n === null) throw Error(O(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, i = n.pending, o = t.memoizedState;
        if (i !== null) {
            n.pending = null;
            var l = i = i.next;
            do o = e(o, l.action), l = l.next; while (l !== i);
            pt(o, t.memoizedState) || (Ne = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
        }
        return [o, r]
    }

    function tm() {
    }

    function nm(e, t) {
        var n = ie, r = tt(), i = t(), o = !pt(r.memoizedState, i);
        if (o && (r.memoizedState = i, Ne = !0), r = r.queue, yc(om.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || he !== null && he.memoizedState.tag & 1) {
            if (n.flags |= 2048, ji(9, im.bind(null, n, r, i, t), void 0, null), me === null) throw Error(O(349));
            zn & 30 || rm(n, t, i)
        }
        return i
    }

    function rm(e, t, n) {
        e.flags |= 16384, e = {getSnapshot: t, value: n}, t = ie.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function im(e, t, n, r) {
        t.value = n, t.getSnapshot = r, lm(t) && um(e)
    }

    function om(e, t, n) {
        return n(function () {
            lm(t) && um(e)
        })
    }

    function lm(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !pt(e, n)
        } catch {
            return !0
        }
    }

    function um(e) {
        var t = Lt(e, 1);
        t !== null && dt(t, e, 1, -1)
    }

    function rd(e) {
        var t = gt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: $i,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Ig.bind(null, ie, e), [t.memoizedState, e]
    }

    function ji(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = ie.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
    }

    function sm() {
        return tt().memoizedState
    }

    function Co(e, t, n, r) {
        var i = gt();
        ie.flags |= e, i.memoizedState = ji(1 | t, n, void 0, r === void 0 ? null : r)
    }

    function Tl(e, t, n, r) {
        var i = tt();
        r = r === void 0 ? null : r;
        var o = void 0;
        if (ce !== null) {
            var l = ce.memoizedState;
            if (o = l.destroy, r !== null && pc(r, l.deps)) {
                i.memoizedState = ji(t, n, o, r);
                return
            }
        }
        ie.flags |= e, i.memoizedState = ji(1 | t, n, o, r)
    }

    function id(e, t) {
        return Co(8390656, 8, e, t)
    }

    function yc(e, t) {
        return Tl(2048, 8, e, t)
    }

    function am(e, t) {
        return Tl(4, 2, e, t)
    }

    function cm(e, t) {
        return Tl(4, 4, e, t)
    }

    function fm(e, t) {
        if (typeof t == "function") return e = e(), t(e), function () {
            t(null)
        };
        if (t != null) return e = e(), t.current = e, function () {
            t.current = null
        }
    }

    function dm(e, t, n) {
        return n = n != null ? n.concat([e]) : null, Tl(4, 4, fm.bind(null, t, e), n)
    }

    function vc() {
    }

    function pm(e, t) {
        var n = tt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && pc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function hm(e, t) {
        var n = tt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && pc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
    }

    function mm(e, t, n) {
        return zn & 21 ? (pt(n, t) || (n = gh(), ie.lanes |= n, Un |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ne = !0), e.memoizedState = n)
    }

    function Lg(e, t) {
        var n = W;
        W = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Uu.transition;
        Uu.transition = {};
        try {
            e(!1), t()
        } finally {
            W = n, Uu.transition = r
        }
    }

    function ym() {
        return tt().memoizedState
    }

    function Dg(e, t, n) {
        var r = ln(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, vm(e)) gm(t, n); else if (n = Gh(e, t, n, r), n !== null) {
            var i = Te();
            dt(n, e, r, i), wm(n, t, r)
        }
    }

    function Ig(e, t, n) {
        var r = ln(e), i = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
        if (vm(e)) gm(t, i); else {
            var o = e.alternate;
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
                var l = t.lastRenderedState, u = o(l, n);
                if (i.hasEagerState = !0, i.eagerState = u, pt(u, l)) {
                    var s = t.interleaved;
                    s === null ? (i.next = i, sc(t)) : (i.next = s.next, s.next = i), t.interleaved = i;
                    return
                }
            } catch {
            } finally {
            }
            n = Gh(e, t, i, r), n !== null && (i = Te(), dt(n, e, r, i), wm(n, t, r))
        }
    }

    function vm(e) {
        var t = e.alternate;
        return e === ie || t !== null && t === ie
    }

    function gm(e, t) {
        ci = el = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function wm(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Ga(e, n)
        }
    }

    var tl = {
        readContext: et,
        useCallback: Ee,
        useContext: Ee,
        useEffect: Ee,
        useImperativeHandle: Ee,
        useInsertionEffect: Ee,
        useLayoutEffect: Ee,
        useMemo: Ee,
        useReducer: Ee,
        useRef: Ee,
        useState: Ee,
        useDebugValue: Ee,
        useDeferredValue: Ee,
        useTransition: Ee,
        useMutableSource: Ee,
        useSyncExternalStore: Ee,
        useId: Ee,
        unstable_isNewReconciler: !1
    }, Mg = {
        readContext: et, useCallback: function (e, t) {
            return gt().memoizedState = [e, t === void 0 ? null : t], e
        }, useContext: et, useEffect: id, useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null, Co(4194308, 4, fm.bind(null, t, e), n)
        }, useLayoutEffect: function (e, t) {
            return Co(4194308, 4, e, t)
        }, useInsertionEffect: function (e, t) {
            return Co(4, 2, e, t)
        }, useMemo: function (e, t) {
            var n = gt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        }, useReducer: function (e, t, n) {
            var r = gt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Dg.bind(null, ie, e), [r.memoizedState, e]
        }, useRef: function (e) {
            var t = gt();
            return e = {current: e}, t.memoizedState = e
        }, useState: rd, useDebugValue: vc, useDeferredValue: function (e) {
            return gt().memoizedState = e
        }, useTransition: function () {
            var e = rd(!1), t = e[0];
            return e = Lg.bind(null, e[1]), gt().memoizedState = e, [t, e]
        }, useMutableSource: function () {
        }, useSyncExternalStore: function (e, t, n) {
            var r = ie, i = gt();
            if (ne) {
                if (n === void 0) throw Error(O(407));
                n = n()
            } else {
                if (n = t(), me === null) throw Error(O(349));
                zn & 30 || rm(r, t, n)
            }
            i.memoizedState = n;
            var o = {value: n, getSnapshot: t};
            return i.queue = o, id(om.bind(null, r, o, e), [e]), r.flags |= 2048, ji(9, im.bind(null, r, o, n, t), void 0, null), n
        }, useId: function () {
            var e = gt(), t = me.identifierPrefix;
            if (ne) {
                var n = Rt, r = jt;
                n = (r & ~(1 << 32 - ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Pi++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = bg++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        }, unstable_isNewReconciler: !1
    }, zg = {
        readContext: et,
        useCallback: pm,
        useContext: et,
        useEffect: yc,
        useImperativeHandle: dm,
        useInsertionEffect: am,
        useLayoutEffect: cm,
        useMemo: hm,
        useReducer: Bu,
        useRef: sm,
        useState: function () {
            return Bu($i)
        },
        useDebugValue: vc,
        useDeferredValue: function (e) {
            var t = tt();
            return mm(t, ce.memoizedState, e)
        },
        useTransition: function () {
            var e = Bu($i)[0], t = tt().memoizedState;
            return [e, t]
        },
        useMutableSource: tm,
        useSyncExternalStore: nm,
        useId: ym,
        unstable_isNewReconciler: !1
    }, Ug = {
        readContext: et,
        useCallback: pm,
        useContext: et,
        useEffect: yc,
        useImperativeHandle: dm,
        useInsertionEffect: am,
        useLayoutEffect: cm,
        useMemo: hm,
        useReducer: Vu,
        useRef: sm,
        useState: function () {
            return Vu($i)
        },
        useDebugValue: vc,
        useDeferredValue: function (e) {
            var t = tt();
            return ce === null ? t.memoizedState = e : mm(t, ce.memoizedState, e)
        },
        useTransition: function () {
            var e = Vu($i)[0], t = tt().memoizedState;
            return [e, t]
        },
        useMutableSource: tm,
        useSyncExternalStore: nm,
        useId: ym,
        unstable_isNewReconciler: !1
    };

    function Rr(e, t) {
        try {
            var n = "", r = t;
            do n += m0(r), r = r.return; while (r);
            var i = n
        } catch (o) {
            i = `
Error generating stack: ` + o.message + `
` + o.stack
        }
        return {value: e, source: t, stack: i, digest: null}
    }

    function Hu(e, t, n) {
        return {value: e, source: null, stack: n ?? null, digest: t ?? null}
    }

    function qs(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function () {
                throw n
            })
        }
    }

    var Bg = typeof WeakMap == "function" ? WeakMap : Map;

    function Sm(e, t, n) {
        n = Nt(-1, n), n.tag = 3, n.payload = {element: null};
        var r = t.value;
        return n.callback = function () {
            rl || (rl = !0, oa = r), qs(e, t)
        }, n
    }

    function Em(e, t, n) {
        n = Nt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var i = t.value;
            n.payload = function () {
                return r(i)
            }, n.callback = function () {
                qs(e, t)
            }
        }
        var o = e.stateNode;
        return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
            qs(e, t), typeof r != "function" && (on === null ? on = new Set([this]) : on.add(this));
            var l = t.stack;
            this.componentDidCatch(t.value, {componentStack: l !== null ? l : ""})
        }), n
    }

    function od(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Bg;
            var i = new Set;
            r.set(t, i)
        } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
        i.has(n) || (i.add(n), e = n1.bind(null, e, t, n), t.then(e, e))
    }

    function ld(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function ud(e, t, n, r, i) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, rn(n, t, 1))), n.lanes |= 1), e)
    }

    var Vg = Mt.ReactCurrentOwner, Ne = !1;

    function ke(e, t, n, r) {
        t.child = e === null ? Zh(t, null, n, r) : $r(t, e.child, n, r)
    }

    function sd(e, t, n, r, i) {
        n = n.render;
        var o = t.ref;
        return Er(t, i), r = hc(e, t, n, r, o, i), n = mc(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Dt(e, t, i)) : (ne && n && nc(t), t.flags |= 1, ke(e, t, r, i), t.child)
    }

    function ad(e, t, n, r, i) {
        if (e === null) {
            var o = n.type;
            return typeof o == "function" && !Oc(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, xm(e, t, o, r, i)) : (e = Po(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (o = e.child, !(e.lanes & i)) {
            var l = o.memoizedProps;
            if (n = n.compare, n = n !== null ? n : xi, n(l, r) && e.ref === t.ref) return Dt(e, t, i)
        }
        return t.flags |= 1, e = un(o, r), e.ref = t.ref, e.return = t, t.child = e
    }

    function xm(e, t, n, r, i) {
        if (e !== null) {
            var o = e.memoizedProps;
            if (xi(o, r) && e.ref === t.ref) if (Ne = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Ne = !0); else return t.lanes = e.lanes, Dt(e, t, i)
        }
        return Ys(e, t, n, r, i)
    }

    function _m(e, t, n) {
        var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, q(hr, De), De |= n; else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, q(hr, De), De |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, q(hr, De), De |= r
        } else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, q(hr, De), De |= r;
        return ke(e, t, i, n), t.child
    }

    function Cm(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
    }

    function Ys(e, t, n, r, i) {
        var o = Fe(n) ? In : Oe.current;
        return o = Tr(t, o), Er(t, i), n = hc(e, t, n, r, o, i), r = mc(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Dt(e, t, i)) : (ne && r && nc(t), t.flags |= 1, ke(e, t, n, i), t.child)
    }

    function cd(e, t, n, r, i) {
        if (Fe(n)) {
            var o = !0;
            Qo(t)
        } else o = !1;
        if (Er(t, i), t.stateNode === null) Oo(e, t), Xh(t, n, r), Gs(t, n, r, i), r = !0; else if (e === null) {
            var l = t.stateNode, u = t.memoizedProps;
            l.props = u;
            var s = l.context, a = n.contextType;
            typeof a == "object" && a !== null ? a = et(a) : (a = Fe(n) ? In : Oe.current, a = Tr(t, a));
            var c = n.getDerivedStateFromProps,
                d = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
            d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && td(t, l, r, a), Kt = !1;
            var f = t.memoizedState;
            l.state = f, Jo(t, r, l, i), s = t.memoizedState, u !== r || f !== s || Ae.current || Kt ? (typeof c == "function" && (Qs(t, n, c, r), s = t.memoizedState), (u = Kt || ed(t, n, u, r, f, s, a)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
        } else {
            l = t.stateNode, qh(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : ut(t.type, u), l.props = a, d = t.pendingProps, f = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = et(s) : (s = Fe(n) ? In : Oe.current, s = Tr(t, s));
            var v = n.getDerivedStateFromProps;
            (c = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== d || f !== s) && td(t, l, r, s), Kt = !1, f = t.memoizedState, l.state = f, Jo(t, r, l, i);
            var m = t.memoizedState;
            u !== d || f !== m || Ae.current || Kt ? (typeof v == "function" && (Qs(t, n, v, r), m = t.memoizedState), (a = Kt || ed(t, n, a, r, f, m, s) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, m, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, m, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), l.props = r, l.state = m, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return Xs(e, t, n, r, o, i)
    }

    function Xs(e, t, n, r, i, o) {
        Cm(e, t);
        var l = (t.flags & 128) !== 0;
        if (!r && !l) return i && qf(t, n, !1), Dt(e, t, o);
        r = t.stateNode, Vg.current = t;
        var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && l ? (t.child = $r(t, e.child, null, o), t.child = $r(t, null, u, o)) : ke(e, t, u, o), t.memoizedState = r.state, i && qf(t, n, !0), t.child
    }

    function Om(e) {
        var t = e.stateNode;
        t.pendingContext ? Gf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gf(e, t.context, !1), cc(e, t.containerInfo)
    }

    function fd(e, t, n, r, i) {
        return Pr(), ic(i), t.flags |= 256, ke(e, t, n, r), t.child
    }

    var Js = {dehydrated: null, treeContext: null, retryLane: 0};

    function Zs(e) {
        return {baseLanes: e, cachePool: null, transitions: null}
    }

    function km(e, t, n) {
        var r = t.pendingProps, i = re.current, o = !1, l = (t.flags & 128) !== 0, u;
        if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), q(re, i & 1), e === null) return Ws(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = {
            mode: "hidden",
            children: l
        }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = jl(l, r, 0, null), e = Fn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Zs(n), t.memoizedState = Js, e) : gc(t, l));
        if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return Hg(e, t, l, r, u, i, n);
        if (o) {
            o = r.fallback, l = t.mode, i = e.child, u = i.sibling;
            var s = {mode: "hidden", children: r.children};
            return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = un(i, s), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? o = un(u, o) : (o = Fn(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? Zs(n) : {
                baseLanes: l.baseLanes | n,
                cachePool: null,
                transitions: l.transitions
            }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Js, r
        }
        return o = e.child, e = o.sibling, r = un(o, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
    }

    function gc(e, t) {
        return t = jl({mode: "visible", children: t}, e.mode, 0, null), t.return = e, e.child = t
    }

    function co(e, t, n, r) {
        return r !== null && ic(r), $r(t, e.child, null, n), e = gc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function Hg(e, t, n, r, i, o, l) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = Hu(Error(O(422))), co(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = jl({
            mode: "visible",
            children: r.children
        }, i, 0, null), o = Fn(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && $r(t, e.child, null, l), t.child.memoizedState = Zs(l), t.memoizedState = Js, o);
        if (!(t.mode & 1)) return co(e, t, l, null);
        if (i.data === "$!") {
            if (r = i.nextSibling && i.nextSibling.dataset, r) var u = r.dgst;
            return r = u, o = Error(O(419)), r = Hu(o, r, void 0), co(e, t, l, r)
        }
        if (u = (l & e.childLanes) !== 0, Ne || u) {
            if (r = me, r !== null) {
                switch (l & -l) {
                    case 4:
                        i = 2;
                        break;
                    case 16:
                        i = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        i = 32;
                        break;
                    case 536870912:
                        i = 268435456;
                        break;
                    default:
                        i = 0
                }
                i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Lt(e, i), dt(r, e, i, -1))
            }
            return Cc(), r = Hu(Error(O(421))), co(e, t, l, r)
        }
        return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = r1.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Me = nn(i.nextSibling), Be = t, ne = !0, at = null, e !== null && (Ye[Xe++] = jt, Ye[Xe++] = Rt, Ye[Xe++] = Mn, jt = e.id, Rt = e.overflow, Mn = t), t = gc(t, r.children), t.flags |= 4096, t)
    }

    function dd(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Ks(e.return, t, n)
    }

    function Wu(e, t, n, r, i) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
    }

    function Tm(e, t, n) {
        var r = t.pendingProps, i = r.revealOrder, o = r.tail;
        if (ke(e, t, r.children, n), r = re.current, r & 2) r = r & 1 | 2, t.flags |= 128; else {
            if (e !== null && e.flags & 128) e:for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && dd(e, n, t); else if (e.tag === 19) dd(e, n, t); else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        if (q(re, r), !(t.mode & 1)) t.memoizedState = null; else switch (i) {
            case"forwards":
                for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Zo(e) === null && (i = n), n = n.sibling;
                n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Wu(t, !1, i, n, o);
                break;
            case"backwards":
                for (n = null, i = t.child, t.child = null; i !== null;) {
                    if (e = i.alternate, e !== null && Zo(e) === null) {
                        t.child = i;
                        break
                    }
                    e = i.sibling, i.sibling = n, n = i, i = e
                }
                Wu(t, !0, n, null, o);
                break;
            case"together":
                Wu(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function Oo(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
    }

    function Dt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), Un |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(O(153));
        if (t.child !== null) {
            for (e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = un(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function Wg(e, t, n) {
        switch (t.tag) {
            case 3:
                Om(t), Pr();
                break;
            case 5:
                em(t);
                break;
            case 1:
                Fe(t.type) && Qo(t);
                break;
            case 4:
                cc(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, i = t.memoizedProps.value;
                q(Yo, r._currentValue), r._currentValue = i;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (q(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? km(e, t, n) : (q(re, re.current & 1), e = Dt(e, t, n), e !== null ? e.sibling : null);
                q(re, re.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return Tm(e, t, n);
                    t.flags |= 128
                }
                if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), q(re, re.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, _m(e, t, n)
        }
        return Dt(e, t, n)
    }

    var Pm, ea, $m, jm;
    Pm = function (e, t) {
        for (var n = t.child; n !== null;) {
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    };
    ea = function () {
    };
    $m = function (e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
            e = t.stateNode, Nn(_t.current);
            var o = null;
            switch (n) {
                case"input":
                    i = xs(e, i), r = xs(e, r), o = [];
                    break;
                case"select":
                    i = oe({}, i, {value: void 0}), r = oe({}, r, {value: void 0}), o = [];
                    break;
                case"textarea":
                    i = Os(e, i), r = Os(e, r), o = [];
                    break;
                default:
                    typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wo)
            }
            Ts(n, r);
            var l;
            n = null;
            for (a in i) if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null) if (a === "style") {
                var u = i[a];
                for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "")
            } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (mi.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
            for (a in r) {
                var s = r[a];
                if (u = i != null ? i[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
                    for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                    for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l])
                } else n || (o || (o = []), o.push(a, n)), n = s; else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (mi.hasOwnProperty(a) ? (s != null && a === "onScroll" && Y("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s))
            }
            n && (o = o || []).push("style", n);
            var a = o;
            (t.updateQueue = a) && (t.flags |= 4)
        }
    };
    jm = function (e, t, n, r) {
        n !== r && (t.flags |= 4)
    };

    function qr(e, t) {
        if (!ne) switch (e.tailMode) {
            case"hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case"collapsed":
                n = e.tail;
                for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function xe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling; else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
    }

    function Kg(e, t, n) {
        var r = t.pendingProps;
        switch (rc(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return xe(t), null;
            case 1:
                return Fe(t.type) && Ko(), xe(t), null;
            case 3:
                return r = t.stateNode, jr(), J(Ae), J(Oe), dc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (so(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, at !== null && (sa(at), at = null))), ea(e, t), xe(t), null;
            case 5:
                fc(t);
                var i = Nn(Ti.current);
                if (n = t.type, e !== null && t.stateNode != null) $m(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(O(166));
                        return xe(t), null
                    }
                    if (e = Nn(_t.current), so(t)) {
                        r = t.stateNode, n = t.type;
                        var o = t.memoizedProps;
                        switch (r[wt] = t, r[Oi] = o, e = (t.mode & 1) !== 0, n) {
                            case"dialog":
                                Y("cancel", r), Y("close", r);
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                Y("load", r);
                                break;
                            case"video":
                            case"audio":
                                for (i = 0; i < ni.length; i++) Y(ni[i], r);
                                break;
                            case"source":
                                Y("error", r);
                                break;
                            case"img":
                            case"image":
                            case"link":
                                Y("error", r), Y("load", r);
                                break;
                            case"details":
                                Y("toggle", r);
                                break;
                            case"input":
                                Ef(r, o), Y("invalid", r);
                                break;
                            case"select":
                                r._wrapperState = {wasMultiple: !!o.multiple}, Y("invalid", r);
                                break;
                            case"textarea":
                                _f(r, o), Y("invalid", r)
                        }
                        Ts(n, o), i = null;
                        for (var l in o) if (o.hasOwnProperty(l)) {
                            var u = o[l];
                            l === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && uo(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && uo(r.textContent, u, e), i = ["children", "" + u]) : mi.hasOwnProperty(l) && u != null && l === "onScroll" && Y("scroll", r)
                        }
                        switch (n) {
                            case"input":
                                Zi(r), xf(r, o, !0);
                                break;
                            case"textarea":
                                Zi(r), Cf(r);
                                break;
                            case"select":
                            case"option":
                                break;
                            default:
                                typeof o.onClick == "function" && (r.onclick = Wo)
                        }
                        r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                    } else {
                        l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = rh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {is: r.is}) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[wt] = t, e[Oi] = r, Pm(e, t, !1, !1), t.stateNode = e;
                        e:{
                            switch (l = Ps(n, r), n) {
                                case"dialog":
                                    Y("cancel", e), Y("close", e), i = r;
                                    break;
                                case"iframe":
                                case"object":
                                case"embed":
                                    Y("load", e), i = r;
                                    break;
                                case"video":
                                case"audio":
                                    for (i = 0; i < ni.length; i++) Y(ni[i], e);
                                    i = r;
                                    break;
                                case"source":
                                    Y("error", e), i = r;
                                    break;
                                case"img":
                                case"image":
                                case"link":
                                    Y("error", e), Y("load", e), i = r;
                                    break;
                                case"details":
                                    Y("toggle", e), i = r;
                                    break;
                                case"input":
                                    Ef(e, r), i = xs(e, r), Y("invalid", e);
                                    break;
                                case"option":
                                    i = r;
                                    break;
                                case"select":
                                    e._wrapperState = {wasMultiple: !!r.multiple}, i = oe({}, r, {value: void 0}), Y("invalid", e);
                                    break;
                                case"textarea":
                                    _f(e, r), i = Os(e, r), Y("invalid", e);
                                    break;
                                default:
                                    i = r
                            }
                            Ts(n, i), u = i;
                            for (o in u) if (u.hasOwnProperty(o)) {
                                var s = u[o];
                                o === "style" ? lh(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ih(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && yi(e, s) : typeof s == "number" && yi(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (mi.hasOwnProperty(o) ? s != null && o === "onScroll" && Y("scroll", e) : s != null && Ba(e, o, s, l))
                            }
                            switch (n) {
                                case"input":
                                    Zi(e), xf(e, r, !1);
                                    break;
                                case"textarea":
                                    Zi(e), Cf(e);
                                    break;
                                case"option":
                                    r.value != null && e.setAttribute("value", "" + cn(r.value));
                                    break;
                                case"select":
                                    e.multiple = !!r.multiple, o = r.value, o != null ? vr(e, !!r.multiple, o, !1) : r.defaultValue != null && vr(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof i.onClick == "function" && (e.onclick = Wo)
                            }
                            switch (n) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case"img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1
                            }
                        }
                        r && (t.flags |= 4)
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                }
                return xe(t), null;
            case 6:
                if (e && t.stateNode != null) jm(e, t, e.memoizedProps, r); else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
                    if (n = Nn(Ti.current), Nn(_t.current), so(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[wt] = t, (o = r.nodeValue !== n) && (e = Be, e !== null)) switch (e.tag) {
                            case 3:
                                uo(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && uo(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                        o && (t.flags |= 4)
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wt] = t, t.stateNode = r
                }
                return xe(t), null;
            case 13:
                if (J(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (ne && Me !== null && t.mode & 1 && !(t.flags & 128)) Qh(), Pr(), t.flags |= 98560, o = !1; else if (o = so(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!o) throw Error(O(318));
                            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(O(317));
                            o[wt] = t
                        } else Pr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        xe(t), o = !1
                    } else at !== null && (sa(at), at = null), o = !0;
                    if (!o) return t.flags & 65536 ? t : null
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? fe === 0 && (fe = 3) : Cc())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
            case 4:
                return jr(), ea(e, t), e === null && _i(t.stateNode.containerInfo), xe(t), null;
            case 10:
                return uc(t.type._context), xe(t), null;
            case 17:
                return Fe(t.type) && Ko(), xe(t), null;
            case 19:
                if (J(re), o = t.memoizedState, o === null) return xe(t), null;
                if (r = (t.flags & 128) !== 0, l = o.rendering, l === null) if (r) qr(o, !1); else {
                    if (fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
                        if (l = Zo(e), l !== null) {
                            for (t.flags |= 128, qr(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return q(re, re.current & 1 | 2), t.child
                        }
                        e = e.sibling
                    }
                    o.tail !== null && se() > Nr && (t.flags |= 128, r = !0, qr(o, !1), t.lanes = 4194304)
                } else {
                    if (!r) if (e = Zo(l), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), qr(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !ne) return xe(t), null
                    } else 2 * se() - o.renderingStartTime > Nr && n !== 1073741824 && (t.flags |= 128, r = !0, qr(o, !1), t.lanes = 4194304);
                    o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l)
                }
                return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = se(), t.sibling = null, n = re.current, q(re, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
            case 22:
            case 23:
                return _c(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? De & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(O(156, t.tag))
    }

    function Qg(e, t) {
        switch (rc(t), t.tag) {
            case 1:
                return Fe(t.type) && Ko(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return jr(), J(Ae), J(Oe), dc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return fc(t), null;
            case 13:
                if (J(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(O(340));
                    Pr()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return J(re), null;
            case 4:
                return jr(), null;
            case 10:
                return uc(t.type._context), null;
            case 22:
            case 23:
                return _c(), null;
            case 24:
                return null;
            default:
                return null
        }
    }

    var fo = !1, Ce = !1, Gg = typeof WeakSet == "function" ? WeakSet : Set, R = null;

    function pr(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ue(e, t, r)
        } else n.current = null
    }

    function ta(e, t, n) {
        try {
            n()
        } catch (r) {
            ue(e, t, r)
        }
    }

    var pd = !1;

    function qg(e, t) {
        if (Is = Bo, e = Fh(), tc(e)) {
            if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset, o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0, u = -1, s = -1, a = 0, c = 0, d = e, f = null;
                    t:for (; ;) {
                        for (var v; d !== n || i !== 0 && d.nodeType !== 3 || (u = l + i), d !== o || r !== 0 && d.nodeType !== 3 || (s = l + r), d.nodeType === 3 && (l += d.nodeValue.length), (v = d.firstChild) !== null;) f = d, d = v;
                        for (; ;) {
                            if (d === e) break t;
                            if (f === n && ++a === i && (u = l), f === o && ++c === r && (s = l), (v = d.nextSibling) !== null) break;
                            d = f, f = d.parentNode
                        }
                        d = v
                    }
                    n = u === -1 || s === -1 ? null : {start: u, end: s}
                } else n = null
            }
            n = n || {start: 0, end: 0}
        } else n = null;
        for (Ms = {
            focusedElem: e,
            selectionRange: n
        }, Bo = !1, R = t; R !== null;) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e; else for (; R !== null;) {
            t = R;
            try {
                var m = t.alternate;
                if (t.flags & 1024) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (m !== null) {
                            var y = m.memoizedProps, x = m.memoizedState, h = t.stateNode,
                                p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ut(t.type, y), x);
                            h.__reactInternalSnapshotBeforeUpdate = p
                        }
                        break;
                    case 3:
                        var g = t.stateNode.containerInfo;
                        g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                        break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        throw Error(O(163))
                }
            } catch (w) {
                ue(t, t.return, w)
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, R = e;
                break
            }
            R = t.return
        }
        return m = pd, pd = !1, m
    }

    function fi(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var i = r = r.next;
            do {
                if ((i.tag & e) === e) {
                    var o = i.destroy;
                    i.destroy = void 0, o !== void 0 && ta(t, n, o)
                }
                i = i.next
            } while (i !== r)
        }
    }

    function Pl(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }

    function na(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = n;
                    break;
                default:
                    e = n
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }

    function Rm(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Rm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wt], delete t[Oi], delete t[Bs], delete t[Rg], delete t[Ng])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function Nm(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function hd(e) {
        e:for (; ;) {
            for (; e.sibling === null;) {
                if (e.return === null || Nm(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function ra(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wo)); else if (r !== 4 && (e = e.child, e !== null)) for (ra(e, t, n), e = e.sibling; e !== null;) ra(e, t, n), e = e.sibling
    }

    function ia(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (r !== 4 && (e = e.child, e !== null)) for (ia(e, t, n), e = e.sibling; e !== null;) ia(e, t, n), e = e.sibling
    }

    var ge = null, st = !1;

    function Bt(e, t, n) {
        for (n = n.child; n !== null;) Am(e, t, n), n = n.sibling
    }

    function Am(e, t, n) {
        if (xt && typeof xt.onCommitFiberUnmount == "function") try {
            xt.onCommitFiberUnmount(Sl, n)
        } catch {
        }
        switch (n.tag) {
            case 5:
                Ce || pr(n, t);
            case 6:
                var r = ge, i = st;
                ge = null, Bt(e, t, n), ge = r, st = i, ge !== null && (st ? (e = ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ge.removeChild(n.stateNode));
                break;
            case 18:
                ge !== null && (st ? (e = ge, n = n.stateNode, e.nodeType === 8 ? Iu(e.parentNode, n) : e.nodeType === 1 && Iu(e, n), Si(e)) : Iu(ge, n.stateNode));
                break;
            case 4:
                r = ge, i = st, ge = n.stateNode.containerInfo, st = !0, Bt(e, t, n), ge = r, st = i;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    i = r = r.next;
                    do {
                        var o = i, l = o.destroy;
                        o = o.tag, l !== void 0 && (o & 2 || o & 4) && ta(n, t, l), i = i.next
                    } while (i !== r)
                }
                Bt(e, t, n);
                break;
            case 1:
                if (!Ce && (pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                } catch (u) {
                    ue(n, t, u)
                }
                Bt(e, t, n);
                break;
            case 21:
                Bt(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (Ce = (r = Ce) || n.memoizedState !== null, Bt(e, t, n), Ce = r) : Bt(e, t, n);
                break;
            default:
                Bt(e, t, n)
        }
    }

    function md(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Gg), t.forEach(function (r) {
                var i = i1.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i))
            })
        }
    }

    function ot(e, t) {
        var n = t.deletions;
        if (n !== null) for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e, l = t, u = l;
                e:for (; u !== null;) {
                    switch (u.tag) {
                        case 5:
                            ge = u.stateNode, st = !1;
                            break e;
                        case 3:
                            ge = u.stateNode.containerInfo, st = !0;
                            break e;
                        case 4:
                            ge = u.stateNode.containerInfo, st = !0;
                            break e
                    }
                    u = u.return
                }
                if (ge === null) throw Error(O(160));
                Am(o, l, i), ge = null, st = !1;
                var s = i.alternate;
                s !== null && (s.return = null), i.return = null
            } catch (a) {
                ue(i, t, a)
            }
        }
        if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Fm(t, e), t = t.sibling
    }

    function Fm(e, t) {
        var n = e.alternate, r = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (ot(t, e), vt(e), r & 4) {
                    try {
                        fi(3, e, e.return), Pl(3, e)
                    } catch (y) {
                        ue(e, e.return, y)
                    }
                    try {
                        fi(5, e, e.return)
                    } catch (y) {
                        ue(e, e.return, y)
                    }
                }
                break;
            case 1:
                ot(t, e), vt(e), r & 512 && n !== null && pr(n, n.return);
                break;
            case 5:
                if (ot(t, e), vt(e), r & 512 && n !== null && pr(n, n.return), e.flags & 32) {
                    var i = e.stateNode;
                    try {
                        yi(i, "")
                    } catch (y) {
                        ue(e, e.return, y)
                    }
                }
                if (r & 4 && (i = e.stateNode, i != null)) {
                    var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
                    if (e.updateQueue = null, s !== null) try {
                        u === "input" && o.type === "radio" && o.name != null && th(i, o), Ps(u, l);
                        var a = Ps(u, o);
                        for (l = 0; l < s.length; l += 2) {
                            var c = s[l], d = s[l + 1];
                            c === "style" ? lh(i, d) : c === "dangerouslySetInnerHTML" ? ih(i, d) : c === "children" ? yi(i, d) : Ba(i, c, d, a)
                        }
                        switch (u) {
                            case"input":
                                _s(i, o);
                                break;
                            case"textarea":
                                nh(i, o);
                                break;
                            case"select":
                                var f = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var v = o.value;
                                v != null ? vr(i, !!o.multiple, v, !1) : f !== !!o.multiple && (o.defaultValue != null ? vr(i, !!o.multiple, o.defaultValue, !0) : vr(i, !!o.multiple, o.multiple ? [] : "", !1))
                        }
                        i[Oi] = o
                    } catch (y) {
                        ue(e, e.return, y)
                    }
                }
                break;
            case 6:
                if (ot(t, e), vt(e), r & 4) {
                    if (e.stateNode === null) throw Error(O(162));
                    i = e.stateNode, o = e.memoizedProps;
                    try {
                        i.nodeValue = o
                    } catch (y) {
                        ue(e, e.return, y)
                    }
                }
                break;
            case 3:
                if (ot(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Si(t.containerInfo)
                } catch (y) {
                    ue(e, e.return, y)
                }
                break;
            case 4:
                ot(t, e), vt(e);
                break;
            case 13:
                ot(t, e), vt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Ec = se())), r & 4 && md(e);
                break;
            case 22:
                if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ce = (a = Ce) || c, ot(t, e), Ce = a) : ot(t, e), vt(e), r & 8192) {
                    if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !c && e.mode & 1) for (R = e, c = e.child; c !== null;) {
                        for (d = R = c; R !== null;) {
                            switch (f = R, v = f.child, f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    fi(4, f, f.return);
                                    break;
                                case 1:
                                    pr(f, f.return);
                                    var m = f.stateNode;
                                    if (typeof m.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                        } catch (y) {
                                            ue(r, n, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    pr(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        vd(d);
                                        continue
                                    }
                            }
                            v !== null ? (v.return = f, R = v) : vd(d)
                        }
                        c = c.sibling
                    }
                    e:for (c = null, d = e; ;) {
                        if (d.tag === 5) {
                            if (c === null) {
                                c = d;
                                try {
                                    i = d.stateNode, a ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = d.stateNode, s = d.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = oh("display", l))
                                } catch (y) {
                                    ue(e, e.return, y)
                                }
                            }
                        } else if (d.tag === 6) {
                            if (c === null) try {
                                d.stateNode.nodeValue = a ? "" : d.memoizedProps
                            } catch (y) {
                                ue(e, e.return, y)
                            }
                        } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                            d.child.return = d, d = d.child;
                            continue
                        }
                        if (d === e) break e;
                        for (; d.sibling === null;) {
                            if (d.return === null || d.return === e) break e;
                            c === d && (c = null), d = d.return
                        }
                        c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                    }
                }
                break;
            case 19:
                ot(t, e), vt(e), r & 4 && md(e);
                break;
            case 21:
                break;
            default:
                ot(t, e), vt(e)
        }
    }

    function vt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e:{
                    for (var n = e.return; n !== null;) {
                        if (Nm(n)) {
                            var r = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(O(160))
                }
                switch (r.tag) {
                    case 5:
                        var i = r.stateNode;
                        r.flags & 32 && (yi(i, ""), r.flags &= -33);
                        var o = hd(e);
                        ia(e, o, i);
                        break;
                    case 3:
                    case 4:
                        var l = r.stateNode.containerInfo, u = hd(e);
                        ra(e, u, l);
                        break;
                    default:
                        throw Error(O(161))
                }
            } catch (s) {
                ue(e, e.return, s)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function Yg(e, t, n) {
        R = e, bm(e)
    }

    function bm(e, t, n) {
        for (var r = (e.mode & 1) !== 0; R !== null;) {
            var i = R, o = i.child;
            if (i.tag === 22 && r) {
                var l = i.memoizedState !== null || fo;
                if (!l) {
                    var u = i.alternate, s = u !== null && u.memoizedState !== null || Ce;
                    u = fo;
                    var a = Ce;
                    if (fo = l, (Ce = s) && !a) for (R = i; R !== null;) l = R, s = l.child, l.tag === 22 && l.memoizedState !== null ? gd(i) : s !== null ? (s.return = l, R = s) : gd(i);
                    for (; o !== null;) R = o, bm(o), o = o.sibling;
                    R = i, fo = u, Ce = a
                }
                yd(e)
            } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, R = o) : yd(e)
        }
    }

    function yd(e) {
        for (; R !== null;) {
            var t = R;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ce || Pl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Ce) if (n === null) r.componentDidMount(); else {
                                var i = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                            var o = t.updateQueue;
                            o !== null && Zf(t, o, r);
                            break;
                        case 3:
                            var l = t.updateQueue;
                            if (l !== null) {
                                if (n = null, t.child !== null) switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                }
                                Zf(t, l, n)
                            }
                            break;
                        case 5:
                            var u = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = u;
                                var s = t.memoizedProps;
                                switch (t.type) {
                                    case"button":
                                    case"input":
                                    case"select":
                                    case"textarea":
                                        s.autoFocus && n.focus();
                                        break;
                                    case"img":
                                        s.src && (n.src = s.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var a = t.alternate;
                                if (a !== null) {
                                    var c = a.memoizedState;
                                    if (c !== null) {
                                        var d = c.dehydrated;
                                        d !== null && Si(d)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(O(163))
                    }
                    Ce || t.flags & 512 && na(t)
                } catch (f) {
                    ue(t, t.return, f)
                }
            }
            if (t === e) {
                R = null;
                break
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, R = n;
                break
            }
            R = t.return
        }
    }

    function vd(e) {
        for (; R !== null;) {
            var t = R;
            if (t === e) {
                R = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, R = n;
                break
            }
            R = t.return
        }
    }

    function gd(e) {
        for (; R !== null;) {
            var t = R;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Pl(4, t)
                        } catch (s) {
                            ue(t, n, s)
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var i = t.return;
                            try {
                                r.componentDidMount()
                            } catch (s) {
                                ue(t, i, s)
                            }
                        }
                        var o = t.return;
                        try {
                            na(t)
                        } catch (s) {
                            ue(t, o, s)
                        }
                        break;
                    case 5:
                        var l = t.return;
                        try {
                            na(t)
                        } catch (s) {
                            ue(t, l, s)
                        }
                }
            } catch (s) {
                ue(t, t.return, s)
            }
            if (t === e) {
                R = null;
                break
            }
            var u = t.sibling;
            if (u !== null) {
                u.return = t.return, R = u;
                break
            }
            R = t.return
        }
    }

    var Xg = Math.ceil, nl = Mt.ReactCurrentDispatcher, wc = Mt.ReactCurrentOwner, Ze = Mt.ReactCurrentBatchConfig,
        V = 0, me = null, ae = null, we = 0, De = 0, hr = vn(0), fe = 0, Ri = null, Un = 0, $l = 0, Sc = 0, di = null,
        Re = null, Ec = 0, Nr = 1 / 0, Tt = null, rl = !1, oa = null, on = null, po = !1, Xt = null, il = 0, pi = 0,
        la = null, ko = -1, To = 0;

    function Te() {
        return V & 6 ? se() : ko !== -1 ? ko : ko = se()
    }

    function ln(e) {
        return e.mode & 1 ? V & 2 && we !== 0 ? we & -we : Fg.transition !== null ? (To === 0 && (To = gh()), To) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Oh(e.type)), e) : 1
    }

    function dt(e, t, n, r) {
        if (50 < pi) throw pi = 0, la = null, Error(O(185));
        Ui(e, n, r), (!(V & 2) || e !== me) && (e === me && (!(V & 2) && ($l |= n), fe === 4 && Gt(e, we)), be(e, r), n === 1 && V === 0 && !(t.mode & 1) && (Nr = se() + 500, Ol && gn()))
    }

    function be(e, t) {
        var n = e.callbackNode;
        F0(e, t);
        var r = Uo(e, e === me ? we : 0);
        if (r === 0) n !== null && Tf(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Tf(n), t === 1) e.tag === 0 ? Ag(wd.bind(null, e)) : Hh(wd.bind(null, e)), $g(function () {
                !(V & 6) && gn()
            }), n = null; else {
                switch (wh(r)) {
                    case 1:
                        n = Qa;
                        break;
                    case 4:
                        n = yh;
                        break;
                    case 16:
                        n = zo;
                        break;
                    case 536870912:
                        n = vh;
                        break;
                    default:
                        n = zo
                }
                n = Vm(n, Lm.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = n
        }
    }

    function Lm(e, t) {
        if (ko = -1, To = 0, V & 6) throw Error(O(327));
        var n = e.callbackNode;
        if (xr() && e.callbackNode !== n) return null;
        var r = Uo(e, e === me ? we : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = ol(e, r); else {
            t = r;
            var i = V;
            V |= 2;
            var o = Im();
            (me !== e || we !== t) && (Tt = null, Nr = se() + 500, An(e, t));
            do try {
                e1();
                break
            } catch (u) {
                Dm(e, u)
            } while (1);
            lc(), nl.current = o, V = i, ae !== null ? t = 0 : (me = null, we = 0, t = fe)
        }
        if (t !== 0) {
            if (t === 2 && (i = As(e), i !== 0 && (r = i, t = ua(e, i))), t === 1) throw n = Ri, An(e, 0), Gt(e, r), be(e, se()), n;
            if (t === 6) Gt(e, r); else {
                if (i = e.current.alternate, !(r & 30) && !Jg(i) && (t = ol(e, r), t === 2 && (o = As(e), o !== 0 && (r = o, t = ua(e, o))), t === 1)) throw n = Ri, An(e, 0), Gt(e, r), be(e, se()), n;
                switch (e.finishedWork = i, e.finishedLanes = r, t) {
                    case 0:
                    case 1:
                        throw Error(O(345));
                    case 2:
                        kn(e, Re, Tt);
                        break;
                    case 3:
                        if (Gt(e, r), (r & 130023424) === r && (t = Ec + 500 - se(), 10 < t)) {
                            if (Uo(e, 0) !== 0) break;
                            if (i = e.suspendedLanes, (i & r) !== r) {
                                Te(), e.pingedLanes |= e.suspendedLanes & i;
                                break
                            }
                            e.timeoutHandle = Us(kn.bind(null, e, Re, Tt), t);
                            break
                        }
                        kn(e, Re, Tt);
                        break;
                    case 4:
                        if (Gt(e, r), (r & 4194240) === r) break;
                        for (t = e.eventTimes, i = -1; 0 < r;) {
                            var l = 31 - ft(r);
                            o = 1 << l, l = t[l], l > i && (i = l), r &= ~o
                        }
                        if (r = i, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Xg(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = Us(kn.bind(null, e, Re, Tt), r);
                            break
                        }
                        kn(e, Re, Tt);
                        break;
                    case 5:
                        kn(e, Re, Tt);
                        break;
                    default:
                        throw Error(O(329))
                }
            }
        }
        return be(e, se()), e.callbackNode === n ? Lm.bind(null, e) : null
    }

    function ua(e, t) {
        var n = di;
        return e.current.memoizedState.isDehydrated && (An(e, t).flags |= 256), e = ol(e, t), e !== 2 && (t = Re, Re = n, t !== null && sa(t)), e
    }

    function sa(e) {
        Re === null ? Re = e : Re.push.apply(Re, e)
    }

    function Jg(e) {
        for (var t = e; ;) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
                    var i = n[r], o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!pt(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
            }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n; else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Gt(e, t) {
        for (t &= ~Sc, t &= ~$l, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - ft(t), r = 1 << n;
            e[n] = -1, t &= ~r
        }
    }

    function wd(e) {
        if (V & 6) throw Error(O(327));
        xr();
        var t = Uo(e, 0);
        if (!(t & 1)) return be(e, se()), null;
        var n = ol(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = As(e);
            r !== 0 && (t = r, n = ua(e, r))
        }
        if (n === 1) throw n = Ri, An(e, 0), Gt(e, t), be(e, se()), n;
        if (n === 6) throw Error(O(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, kn(e, Re, Tt), be(e, se()), null
    }

    function xc(e, t) {
        var n = V;
        V |= 1;
        try {
            return e(t)
        } finally {
            V = n, V === 0 && (Nr = se() + 500, Ol && gn())
        }
    }

    function Bn(e) {
        Xt !== null && Xt.tag === 0 && !(V & 6) && xr();
        var t = V;
        V |= 1;
        var n = Ze.transition, r = W;
        try {
            if (Ze.transition = null, W = 1, e) return e()
        } finally {
            W = r, Ze.transition = n, V = t, !(V & 6) && gn()
        }
    }

    function _c() {
        De = hr.current, J(hr)
    }

    function An(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Pg(n)), ae !== null) for (n = ae.return; n !== null;) {
            var r = n;
            switch (rc(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Ko();
                    break;
                case 3:
                    jr(), J(Ae), J(Oe), dc();
                    break;
                case 5:
                    fc(r);
                    break;
                case 4:
                    jr();
                    break;
                case 13:
                    J(re);
                    break;
                case 19:
                    J(re);
                    break;
                case 10:
                    uc(r.type._context);
                    break;
                case 22:
                case 23:
                    _c()
            }
            n = n.return
        }
        if (me = e, ae = e = un(e.current, null), we = De = t, fe = 0, Ri = null, Sc = $l = Un = 0, Re = di = null, Rn !== null) {
            for (t = 0; t < Rn.length; t++) if (n = Rn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next, o = n.pending;
                if (o !== null) {
                    var l = o.next;
                    o.next = i, r.next = l
                }
                n.pending = r
            }
            Rn = null
        }
        return e
    }

    function Dm(e, t) {
        do {
            var n = ae;
            try {
                if (lc(), _o.current = tl, el) {
                    for (var r = ie.memoizedState; r !== null;) {
                        var i = r.queue;
                        i !== null && (i.pending = null), r = r.next
                    }
                    el = !1
                }
                if (zn = 0, he = ce = ie = null, ci = !1, Pi = 0, wc.current = null, n === null || n.return === null) {
                    fe = 1, Ri = t, ae = null;
                    break
                }
                e:{
                    var o = e, l = n.return, u = n, s = t;
                    if (t = we, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                        var a = s, c = u, d = c.tag;
                        if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                            var f = c.alternate;
                            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                        }
                        var v = ld(l);
                        if (v !== null) {
                            v.flags &= -257, ud(v, l, u, o, t), v.mode & 1 && od(o, a, t), t = v, s = a;
                            var m = t.updateQueue;
                            if (m === null) {
                                var y = new Set;
                                y.add(s), t.updateQueue = y
                            } else m.add(s);
                            break e
                        } else {
                            if (!(t & 1)) {
                                od(o, a, t), Cc();
                                break e
                            }
                            s = Error(O(426))
                        }
                    } else if (ne && u.mode & 1) {
                        var x = ld(l);
                        if (x !== null) {
                            !(x.flags & 65536) && (x.flags |= 256), ud(x, l, u, o, t), ic(Rr(s, u));
                            break e
                        }
                    }
                    o = s = Rr(s, u), fe !== 4 && (fe = 2), di === null ? di = [o] : di.push(o), o = l;
                    do {
                        switch (o.tag) {
                            case 3:
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var h = Sm(o, s, t);
                                Jf(o, h);
                                break e;
                            case 1:
                                u = s;
                                var p = o.type, g = o.stateNode;
                                if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (on === null || !on.has(g)))) {
                                    o.flags |= 65536, t &= -t, o.lanes |= t;
                                    var w = Em(o, u, t);
                                    Jf(o, w);
                                    break e
                                }
                        }
                        o = o.return
                    } while (o !== null)
                }
                zm(n)
            } catch (C) {
                t = C, ae === n && n !== null && (ae = n = n.return);
                continue
            }
            break
        } while (1)
    }

    function Im() {
        var e = nl.current;
        return nl.current = tl, e === null ? tl : e
    }

    function Cc() {
        (fe === 0 || fe === 3 || fe === 2) && (fe = 4), me === null || !(Un & 268435455) && !($l & 268435455) || Gt(me, we)
    }

    function ol(e, t) {
        var n = V;
        V |= 2;
        var r = Im();
        (me !== e || we !== t) && (Tt = null, An(e, t));
        do try {
            Zg();
            break
        } catch (i) {
            Dm(e, i)
        } while (1);
        if (lc(), V = n, nl.current = r, ae !== null) throw Error(O(261));
        return me = null, we = 0, fe
    }

    function Zg() {
        for (; ae !== null;) Mm(ae)
    }

    function e1() {
        for (; ae !== null && !O0();) Mm(ae)
    }

    function Mm(e) {
        var t = Bm(e.alternate, e, De);
        e.memoizedProps = e.pendingProps, t === null ? zm(e) : ae = t, wc.current = null
    }

    function zm(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = Qg(n, t), n !== null) {
                    n.flags &= 32767, ae = n;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null; else {
                    fe = 6, ae = null;
                    return
                }
            } else if (n = Kg(n, t, De), n !== null) {
                ae = n;
                return
            }
            if (t = t.sibling, t !== null) {
                ae = t;
                return
            }
            ae = t = e
        } while (t !== null);
        fe === 0 && (fe = 5)
    }

    function kn(e, t, n) {
        var r = W, i = Ze.transition;
        try {
            Ze.transition = null, W = 1, t1(e, t, n, r)
        } finally {
            Ze.transition = i, W = r
        }
        return null
    }

    function t1(e, t, n, r) {
        do xr(); while (Xt !== null);
        if (V & 6) throw Error(O(327));
        n = e.finishedWork;
        var i = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(O(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var o = n.lanes | n.childLanes;
        if (b0(e, o), e === me && (ae = me = null, we = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || po || (po = !0, Vm(zo, function () {
            return xr(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
            o = Ze.transition, Ze.transition = null;
            var l = W;
            W = 1;
            var u = V;
            V |= 4, wc.current = null, qg(e, n), Fm(n, e), Eg(Ms), Bo = !!Is, Ms = Is = null, e.current = n, Yg(n), k0(), V = u, W = l, Ze.transition = o
        } else e.current = n;
        if (po && (po = !1, Xt = e, il = i), o = e.pendingLanes, o === 0 && (on = null), $0(n.stateNode), be(e, se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
        if (rl) throw rl = !1, e = oa, oa = null, e;
        return il & 1 && e.tag !== 0 && xr(), o = e.pendingLanes, o & 1 ? e === la ? pi++ : (pi = 0, la = e) : pi = 0, gn(), null
    }

    function xr() {
        if (Xt !== null) {
            var e = wh(il), t = Ze.transition, n = W;
            try {
                if (Ze.transition = null, W = 16 > e ? 16 : e, Xt === null) var r = !1; else {
                    if (e = Xt, Xt = null, il = 0, V & 6) throw Error(O(331));
                    var i = V;
                    for (V |= 4, R = e.current; R !== null;) {
                        var o = R, l = o.child;
                        if (R.flags & 16) {
                            var u = o.deletions;
                            if (u !== null) {
                                for (var s = 0; s < u.length; s++) {
                                    var a = u[s];
                                    for (R = a; R !== null;) {
                                        var c = R;
                                        switch (c.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                fi(8, c, o)
                                        }
                                        var d = c.child;
                                        if (d !== null) d.return = c, R = d; else for (; R !== null;) {
                                            c = R;
                                            var f = c.sibling, v = c.return;
                                            if (Rm(c), c === a) {
                                                R = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = v, R = f;
                                                break
                                            }
                                            R = v
                                        }
                                    }
                                }
                                var m = o.alternate;
                                if (m !== null) {
                                    var y = m.child;
                                    if (y !== null) {
                                        m.child = null;
                                        do {
                                            var x = y.sibling;
                                            y.sibling = null, y = x
                                        } while (y !== null)
                                    }
                                }
                                R = o
                            }
                        }
                        if (o.subtreeFlags & 2064 && l !== null) l.return = o, R = l; else e:for (; R !== null;) {
                            if (o = R, o.flags & 2048) switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    fi(9, o, o.return)
                            }
                            var h = o.sibling;
                            if (h !== null) {
                                h.return = o.return, R = h;
                                break e
                            }
                            R = o.return
                        }
                    }
                    var p = e.current;
                    for (R = p; R !== null;) {
                        l = R;
                        var g = l.child;
                        if (l.subtreeFlags & 2064 && g !== null) g.return = l, R = g; else e:for (l = p; R !== null;) {
                            if (u = R, u.flags & 2048) try {
                                switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Pl(9, u)
                                }
                            } catch (C) {
                                ue(u, u.return, C)
                            }
                            if (u === l) {
                                R = null;
                                break e
                            }
                            var w = u.sibling;
                            if (w !== null) {
                                w.return = u.return, R = w;
                                break e
                            }
                            R = u.return
                        }
                    }
                    if (V = i, gn(), xt && typeof xt.onPostCommitFiberRoot == "function") try {
                        xt.onPostCommitFiberRoot(Sl, e)
                    } catch {
                    }
                    r = !0
                }
                return r
            } finally {
                W = n, Ze.transition = t
            }
        }
        return !1
    }

    function Sd(e, t, n) {
        t = Rr(n, t), t = Sm(e, t, 1), e = rn(e, t, 1), t = Te(), e !== null && (Ui(e, 1, t), be(e, t))
    }

    function ue(e, t, n) {
        if (e.tag === 3) Sd(e, e, n); else for (; t !== null;) {
            if (t.tag === 3) {
                Sd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
                    e = Rr(n, e), e = Em(t, e, 1), t = rn(t, e, 1), e = Te(), t !== null && (Ui(t, 1, e), be(t, e));
                    break
                }
            }
            t = t.return
        }
    }

    function n1(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Te(), e.pingedLanes |= e.suspendedLanes & n, me === e && (we & n) === n && (fe === 4 || fe === 3 && (we & 130023424) === we && 500 > se() - Ec ? An(e, 0) : Sc |= n), be(e, t)
    }

    function Um(e, t) {
        t === 0 && (e.mode & 1 ? (t = no, no <<= 1, !(no & 130023424) && (no = 4194304)) : t = 1);
        var n = Te();
        e = Lt(e, t), e !== null && (Ui(e, t, n), be(e, n))
    }

    function r1(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), Um(e, n)
    }

    function i1(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var r = e.stateNode, i = e.memoizedState;
                i !== null && (n = i.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(O(314))
        }
        r !== null && r.delete(t), Um(e, n)
    }

    var Bm;
    Bm = function (e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || Ae.current) Ne = !0; else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ne = !1, Wg(e, t, n);
            Ne = !!(e.flags & 131072)
        } else Ne = !1, ne && t.flags & 1048576 && Wh(t, qo, t.index);
        switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                Oo(e, t), e = t.pendingProps;
                var i = Tr(t, Oe.current);
                Er(t, n), i = hc(null, t, r, e, i, n);
                var o = mc();
                return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Fe(r) ? (o = !0, Qo(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, ac(t), i.updater = kl, t.stateNode = i, i._reactInternals = t, Gs(t, r, e, n), t = Xs(null, t, r, !0, o, n)) : (t.tag = 0, ne && o && nc(t), ke(null, t, i, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e:{
                    switch (Oo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = l1(r), e = ut(r, e), i) {
                        case 0:
                            t = Ys(null, t, r, e, n);
                            break e;
                        case 1:
                            t = cd(null, t, r, e, n);
                            break e;
                        case 11:
                            t = sd(null, t, r, e, n);
                            break e;
                        case 14:
                            t = ad(null, t, r, ut(r.type, e), n);
                            break e
                    }
                    throw Error(O(306, r, ""))
                }
                return t;
            case 0:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ut(r, i), Ys(e, t, r, i, n);
            case 1:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ut(r, i), cd(e, t, r, i, n);
            case 3:
                e:{
                    if (Om(t), e === null) throw Error(O(387));
                    r = t.pendingProps, o = t.memoizedState, i = o.element, qh(e, t), Jo(t, r, null, n);
                    var l = t.memoizedState;
                    if (r = l.element, o.isDehydrated) if (o = {
                        element: r,
                        isDehydrated: !1,
                        cache: l.cache,
                        pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                        transitions: l.transitions
                    }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        i = Rr(Error(O(423)), t), t = fd(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                        i = Rr(Error(O(424)), t), t = fd(e, t, r, n, i);
                        break e
                    } else for (Me = nn(t.stateNode.containerInfo.firstChild), Be = t, ne = !0, at = null, n = Zh(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling; else {
                        if (Pr(), r === i) {
                            t = Dt(e, t, n);
                            break e
                        }
                        ke(e, t, r, n)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return em(t), e === null && Ws(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, zs(r, i) ? l = null : o !== null && zs(r, o) && (t.flags |= 32), Cm(e, t), ke(e, t, l, n), t.child;
            case 6:
                return e === null && Ws(t), null;
            case 13:
                return km(e, t, n);
            case 4:
                return cc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $r(t, null, r, n) : ke(e, t, r, n), t.child;
            case 11:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ut(r, i), sd(e, t, r, i, n);
            case 7:
                return ke(e, t, t.pendingProps, n), t.child;
            case 8:
                return ke(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return ke(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e:{
                    if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, q(Yo, r._currentValue), r._currentValue = l, o !== null) if (pt(o.value, l)) {
                        if (o.children === i.children && !Ae.current) {
                            t = Dt(e, t, n);
                            break e
                        }
                    } else for (o = t.child, o !== null && (o.return = t); o !== null;) {
                        var u = o.dependencies;
                        if (u !== null) {
                            l = o.child;
                            for (var s = u.firstContext; s !== null;) {
                                if (s.context === r) {
                                    if (o.tag === 1) {
                                        s = Nt(-1, n & -n), s.tag = 2;
                                        var a = o.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var c = a.pending;
                                            c === null ? s.next = s : (s.next = c.next, c.next = s), a.pending = s
                                        }
                                    }
                                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Ks(o.return, n, t), u.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (o.tag === 10) l = o.type === t.type ? null : o.child; else if (o.tag === 18) {
                            if (l = o.return, l === null) throw Error(O(341));
                            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Ks(l, n, t), l = o.sibling
                        } else l = o.child;
                        if (l !== null) l.return = o; else for (l = o; l !== null;) {
                            if (l === t) {
                                l = null;
                                break
                            }
                            if (o = l.sibling, o !== null) {
                                o.return = l.return, l = o;
                                break
                            }
                            l = l.return
                        }
                        o = l
                    }
                    ke(e, t, i.children, n), t = t.child
                }
                return t;
            case 9:
                return i = t.type, r = t.pendingProps.children, Er(t, n), i = et(i), r = r(i), t.flags |= 1, ke(e, t, r, n), t.child;
            case 14:
                return r = t.type, i = ut(r, t.pendingProps), i = ut(r.type, i), ad(e, t, r, i, n);
            case 15:
                return xm(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ut(r, i), Oo(e, t), t.tag = 1, Fe(r) ? (e = !0, Qo(t)) : e = !1, Er(t, n), Xh(t, r, i), Gs(t, r, i, n), Xs(null, t, r, !0, e, n);
            case 19:
                return Tm(e, t, n);
            case 22:
                return _m(e, t, n)
        }
        throw Error(O(156, t.tag))
    };

    function Vm(e, t) {
        return mh(e, t)
    }

    function o1(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Je(e, t, n, r) {
        return new o1(e, t, n, r)
    }

    function Oc(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function l1(e) {
        if (typeof e == "function") return Oc(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Ha) return 11;
            if (e === Wa) return 14
        }
        return 2
    }

    function un(e, t) {
        var n = e.alternate;
        return n === null ? (n = Je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function Po(e, t, n, r, i, o) {
        var l = 2;
        if (r = e, typeof e == "function") Oc(e) && (l = 1); else if (typeof e == "string") l = 5; else e:switch (e) {
            case ir:
                return Fn(n.children, i, o, t);
            case Va:
                l = 8, i |= 8;
                break;
            case gs:
                return e = Je(12, n, t, i | 2), e.elementType = gs, e.lanes = o, e;
            case ws:
                return e = Je(13, n, t, i), e.elementType = ws, e.lanes = o, e;
            case Ss:
                return e = Je(19, n, t, i), e.elementType = Ss, e.lanes = o, e;
            case Jp:
                return jl(n, i, o, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case Yp:
                        l = 10;
                        break e;
                    case Xp:
                        l = 9;
                        break e;
                    case Ha:
                        l = 11;
                        break e;
                    case Wa:
                        l = 14;
                        break e;
                    case Wt:
                        l = 16, r = null;
                        break e
                }
                throw Error(O(130, e == null ? e : typeof e, ""))
        }
        return t = Je(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
    }

    function Fn(e, t, n, r) {
        return e = Je(7, e, r, t), e.lanes = n, e
    }

    function jl(e, t, n, r) {
        return e = Je(22, e, r, t), e.elementType = Jp, e.lanes = n, e.stateNode = {isHidden: !1}, e
    }

    function Ku(e, t, n) {
        return e = Je(6, e, null, t), e.lanes = n, e
    }

    function Qu(e, t, n) {
        return t = Je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function u1(e, t, n, r, i) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Tu(0), this.expirationTimes = Tu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Tu(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
    }

    function kc(e, t, n, r, i, o, l, u, s) {
        return e = new u1(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Je(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, ac(o), e
    }

    function s1(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {$$typeof: rr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n}
    }

    function Hm(e) {
        if (!e) return fn;
        e = e._reactInternals;
        e:{
            if (Kn(e) !== e || e.tag !== 1) throw Error(O(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (Fe(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(O(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (Fe(n)) return Vh(e, n, t)
        }
        return t
    }

    function Wm(e, t, n, r, i, o, l, u, s) {
        return e = kc(n, r, !0, e, i, o, l, u, s), e.context = Hm(null), n = e.current, r = Te(), i = ln(n), o = Nt(r, i), o.callback = t ?? null, rn(n, o, i), e.current.lanes = i, Ui(e, i, r), be(e, r), e
    }

    function Rl(e, t, n, r) {
        var i = t.current, o = Te(), l = ln(i);
        return n = Hm(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(o, l), t.payload = {element: e}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = rn(i, t, l), e !== null && (dt(e, i, l, o), xo(e, i, l)), l
    }

    function ll(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }

    function Ed(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function Tc(e, t) {
        Ed(e, t), (e = e.alternate) && Ed(e, t)
    }

    function a1() {
        return null
    }

    var Km = typeof reportError == "function" ? reportError : function (e) {
        console.error(e)
    };

    function Pc(e) {
        this._internalRoot = e
    }

    Nl.prototype.render = Pc.prototype.render = function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(O(409));
        Rl(e, t, null, null)
    };
    Nl.prototype.unmount = Pc.prototype.unmount = function () {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Bn(function () {
                Rl(null, e, null, null)
            }), t[bt] = null
        }
    };

    function Nl(e) {
        this._internalRoot = e
    }

    Nl.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = xh();
            e = {blockedOn: null, target: e, priority: t};
            for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++) ;
            Qt.splice(n, 0, e), n === 0 && Ch(e)
        }
    };

    function $c(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function Al(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function xd() {
    }

    function c1(e, t, n, r, i) {
        if (i) {
            if (typeof r == "function") {
                var o = r;
                r = function () {
                    var a = ll(l);
                    o.call(a)
                }
            }
            var l = Wm(t, r, e, 0, null, !1, !1, "", xd);
            return e._reactRootContainer = l, e[bt] = l.current, _i(e.nodeType === 8 ? e.parentNode : e), Bn(), l
        }
        for (; i = e.lastChild;) e.removeChild(i);
        if (typeof r == "function") {
            var u = r;
            r = function () {
                var a = ll(s);
                u.call(a)
            }
        }
        var s = kc(e, 0, !1, null, null, !1, !1, "", xd);
        return e._reactRootContainer = s, e[bt] = s.current, _i(e.nodeType === 8 ? e.parentNode : e), Bn(function () {
            Rl(t, s, n, r)
        }), s
    }

    function Fl(e, t, n, r, i) {
        var o = n._reactRootContainer;
        if (o) {
            var l = o;
            if (typeof i == "function") {
                var u = i;
                i = function () {
                    var s = ll(l);
                    u.call(s)
                }
            }
            Rl(t, l, e, i)
        } else l = c1(n, t, e, i, r);
        return ll(l)
    }

    Sh = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = ti(t.pendingLanes);
                    n !== 0 && (Ga(t, n | 1), be(t, se()), !(V & 6) && (Nr = se() + 500, gn()))
                }
                break;
            case 13:
                Bn(function () {
                    var r = Lt(e, 1);
                    if (r !== null) {
                        var i = Te();
                        dt(r, e, 1, i)
                    }
                }), Tc(e, 1)
        }
    };
    qa = function (e) {
        if (e.tag === 13) {
            var t = Lt(e, 134217728);
            if (t !== null) {
                var n = Te();
                dt(t, e, 134217728, n)
            }
            Tc(e, 134217728)
        }
    };
    Eh = function (e) {
        if (e.tag === 13) {
            var t = ln(e), n = Lt(e, t);
            if (n !== null) {
                var r = Te();
                dt(n, e, t, r)
            }
            Tc(e, t)
        }
    };
    xh = function () {
        return W
    };
    _h = function (e, t) {
        var n = W;
        try {
            return W = e, t()
        } finally {
            W = n
        }
    };
    js = function (e, t, n) {
        switch (t) {
            case"input":
                if (_s(e, n), t = n.name, n.type === "radio" && t != null) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = Cl(r);
                            if (!i) throw Error(O(90));
                            eh(r), _s(r, i)
                        }
                    }
                }
                break;
            case"textarea":
                nh(e, n);
                break;
            case"select":
                t = n.value, t != null && vr(e, !!n.multiple, t, !1)
        }
    };
    ah = xc;
    ch = Bn;
    var f1 = {usingClientEntryPoint: !1, Events: [Vi, sr, Cl, uh, sh, xc]},
        Yr = {findFiberByHostInstance: jn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"}, d1 = {
            bundleType: Yr.bundleType,
            version: Yr.version,
            rendererPackageName: Yr.rendererPackageName,
            rendererConfig: Yr.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: Mt.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return e = ph(e), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: Yr.findFiberByHostInstance || a1,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ho.isDisabled && ho.supportsFiber) try {
            Sl = ho.inject(d1), xt = ho
        } catch {
        }
    }
    We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f1;
    We.createPortal = function (e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!$c(t)) throw Error(O(200));
        return s1(e, t, null, n)
    };
    We.createRoot = function (e, t) {
        if (!$c(e)) throw Error(O(299));
        var n = !1, r = "", i = Km;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = kc(e, 1, !1, null, null, n, !1, r, i), e[bt] = t.current, _i(e.nodeType === 8 ? e.parentNode : e), new Pc(t)
    };
    We.findDOMNode = function (e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
        return e = ph(t), e = e === null ? null : e.stateNode, e
    };
    We.flushSync = function (e) {
        return Bn(e)
    };
    We.hydrate = function (e, t, n) {
        if (!Al(t)) throw Error(O(200));
        return Fl(null, e, t, !0, n)
    };
    We.hydrateRoot = function (e, t, n) {
        if (!$c(e)) throw Error(O(405));
        var r = n != null && n.hydratedSources || null, i = !1, o = "", l = Km;
        if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Wm(t, null, e, 1, n ?? null, i, !1, o, l), e[bt] = t.current, _i(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
        return new Nl(t)
    };
    We.render = function (e, t, n) {
        if (!Al(t)) throw Error(O(200));
        return Fl(null, e, t, !1, n)
    };
    We.unmountComponentAtNode = function (e) {
        if (!Al(e)) throw Error(O(40));
        return e._reactRootContainer ? (Bn(function () {
            Fl(null, null, e, !1, function () {
                e._reactRootContainer = null, e[bt] = null
            })
        }), !0) : !1
    };
    We.unstable_batchedUpdates = xc;
    We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Al(n)) throw Error(O(200));
        if (e == null || e._reactInternals === void 0) throw Error(O(38));
        return Fl(e, t, n, !1, r)
    };
    We.version = "18.2.0-next-9e3b772b8-20220608";
    (function (e) {
        function t() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (n) {
                console.error(n)
            }
        }

        t(), e.exports = We
    })(a0);
    var _d = Lo;
    ms.createRoot = _d.createRoot, ms.hydrateRoot = _d.hydrateRoot;
    const p1 = "/Product-Store-application/assets/LOGO-2-a979c5ec.png", h1 = () => k.jsx("div", {
        className: "wrapperHeader",
        children: k.jsx("span", {children: k.jsx("img", {src: p1, alt: "name shop"})})
    }), m1 = ({setValueSearch: e, valueSearch: t}) => {
        const n = r => {
            e(r.target.value)
        };
        return k.jsx("div", {
            className: "wrapperSearch",
            children: k.jsx("input", {type: "text", placeholder: "Enter name or category", value: t, onChange: n})
        })
    };
    var aa = {}, y1 = {
        get exports() {
            return aa
        }, set exports(e) {
            aa = e
        }
    }, Qm = {};
    /**
     * @license React
     * use-sync-external-store-shim.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var Ar = E;

    function v1(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }

    var g1 = typeof Object.is == "function" ? Object.is : v1, w1 = Ar.useState, S1 = Ar.useEffect,
        E1 = Ar.useLayoutEffect, x1 = Ar.useDebugValue;

    function _1(e, t) {
        var n = t(), r = w1({inst: {value: n, getSnapshot: t}}), i = r[0].inst, o = r[1];
        return E1(function () {
            i.value = n, i.getSnapshot = t, Gu(i) && o({inst: i})
        }, [e, n, t]), S1(function () {
            return Gu(i) && o({inst: i}), e(function () {
                Gu(i) && o({inst: i})
            })
        }, [e]), x1(n), n
    }

    function Gu(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !g1(e, n)
        } catch {
            return !0
        }
    }

    function C1(e, t) {
        return t()
    }

    var O1 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? C1 : _1;
    Qm.useSyncExternalStore = Ar.useSyncExternalStore !== void 0 ? Ar.useSyncExternalStore : O1;
    (function (e) {
        e.exports = Qm
    })(y1);
    var ca = {}, k1 = {
        get exports() {
            return ca
        }, set exports(e) {
            ca = e
        }
    }, Gm = {};
    /**
     * @license React
     * use-sync-external-store-shim/with-selector.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var bl = E, T1 = aa;

    function P1(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }

    var $1 = typeof Object.is == "function" ? Object.is : P1, j1 = T1.useSyncExternalStore, R1 = bl.useRef,
        N1 = bl.useEffect, A1 = bl.useMemo, F1 = bl.useDebugValue;
    Gm.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
        var o = R1(null);
        if (o.current === null) {
            var l = {hasValue: !1, value: null};
            o.current = l
        } else l = o.current;
        o = A1(function () {
            function s(v) {
                if (!a) {
                    if (a = !0, c = v, v = r(v), i !== void 0 && l.hasValue) {
                        var m = l.value;
                        if (i(m, v)) return d = m
                    }
                    return d = v
                }
                if (m = d, $1(c, v)) return m;
                var y = r(v);
                return i !== void 0 && i(m, y) ? m : (c = v, d = y)
            }

            var a = !1, c, d, f = n === void 0 ? null : n;
            return [function () {
                return s(t())
            }, f === null ? void 0 : function () {
                return s(f())
            }]
        }, [t, n, r, i]);
        var u = j1(e, o[0], o[1]);
        return N1(function () {
            l.hasValue = !0, l.value = u
        }, [u]), F1(u), u
    };
    (function (e) {
        e.exports = Gm
    })(k1);

    function b1(e) {
        e()
    }

    let qm = b1;
    const L1 = e => qm = e, D1 = () => qm, dn = E.createContext(null);

    function Ym() {
        return E.useContext(dn)
    }

    const I1 = () => {
        throw new Error("uSES not initialized!")
    };
    let Xm = I1;
    const M1 = e => {
        Xm = e
    }, z1 = (e, t) => e === t;

    function U1(e = dn) {
        const t = e === dn ? Ym : () => E.useContext(e);
        return function (r, i = z1) {
            const {store: o, subscription: l, getServerState: u} = t(),
                s = Xm(l.addNestedSub, o.getState, u || o.getState, r, i);
            return E.useDebugValue(s), s
        }
    }

    const B1 = U1();
    var fa = {}, V1 = {
        get exports() {
            return fa
        }, set exports(e) {
            fa = e
        }
    }, K = {};
    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var ve = typeof Symbol == "function" && Symbol.for, jc = ve ? Symbol.for("react.element") : 60103,
        Rc = ve ? Symbol.for("react.portal") : 60106, Ll = ve ? Symbol.for("react.fragment") : 60107,
        Dl = ve ? Symbol.for("react.strict_mode") : 60108, Il = ve ? Symbol.for("react.profiler") : 60114,
        Ml = ve ? Symbol.for("react.provider") : 60109, zl = ve ? Symbol.for("react.context") : 60110,
        Nc = ve ? Symbol.for("react.async_mode") : 60111, Ul = ve ? Symbol.for("react.concurrent_mode") : 60111,
        Bl = ve ? Symbol.for("react.forward_ref") : 60112, Vl = ve ? Symbol.for("react.suspense") : 60113,
        H1 = ve ? Symbol.for("react.suspense_list") : 60120, Hl = ve ? Symbol.for("react.memo") : 60115,
        Wl = ve ? Symbol.for("react.lazy") : 60116, W1 = ve ? Symbol.for("react.block") : 60121,
        K1 = ve ? Symbol.for("react.fundamental") : 60117, Q1 = ve ? Symbol.for("react.responder") : 60118,
        G1 = ve ? Symbol.for("react.scope") : 60119;

    function Qe(e) {
        if (typeof e == "object" && e !== null) {
            var t = e.$$typeof;
            switch (t) {
                case jc:
                    switch (e = e.type, e) {
                        case Nc:
                        case Ul:
                        case Ll:
                        case Il:
                        case Dl:
                        case Vl:
                            return e;
                        default:
                            switch (e = e && e.$$typeof, e) {
                                case zl:
                                case Bl:
                                case Wl:
                                case Hl:
                                case Ml:
                                    return e;
                                default:
                                    return t
                            }
                    }
                case Rc:
                    return t
            }
        }
    }

    function Jm(e) {
        return Qe(e) === Ul
    }

    K.AsyncMode = Nc;
    K.ConcurrentMode = Ul;
    K.ContextConsumer = zl;
    K.ContextProvider = Ml;
    K.Element = jc;
    K.ForwardRef = Bl;
    K.Fragment = Ll;
    K.Lazy = Wl;
    K.Memo = Hl;
    K.Portal = Rc;
    K.Profiler = Il;
    K.StrictMode = Dl;
    K.Suspense = Vl;
    K.isAsyncMode = function (e) {
        return Jm(e) || Qe(e) === Nc
    };
    K.isConcurrentMode = Jm;
    K.isContextConsumer = function (e) {
        return Qe(e) === zl
    };
    K.isContextProvider = function (e) {
        return Qe(e) === Ml
    };
    K.isElement = function (e) {
        return typeof e == "object" && e !== null && e.$$typeof === jc
    };
    K.isForwardRef = function (e) {
        return Qe(e) === Bl
    };
    K.isFragment = function (e) {
        return Qe(e) === Ll
    };
    K.isLazy = function (e) {
        return Qe(e) === Wl
    };
    K.isMemo = function (e) {
        return Qe(e) === Hl
    };
    K.isPortal = function (e) {
        return Qe(e) === Rc
    };
    K.isProfiler = function (e) {
        return Qe(e) === Il
    };
    K.isStrictMode = function (e) {
        return Qe(e) === Dl
    };
    K.isSuspense = function (e) {
        return Qe(e) === Vl
    };
    K.isValidElementType = function (e) {
        return typeof e == "string" || typeof e == "function" || e === Ll || e === Ul || e === Il || e === Dl || e === Vl || e === H1 || typeof e == "object" && e !== null && (e.$$typeof === Wl || e.$$typeof === Hl || e.$$typeof === Ml || e.$$typeof === zl || e.$$typeof === Bl || e.$$typeof === K1 || e.$$typeof === Q1 || e.$$typeof === G1 || e.$$typeof === W1)
    };
    K.typeOf = Qe;
    (function (e) {
        e.exports = K
    })(V1);
    var Zm = fa, q1 = {$$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0},
        Y1 = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0}, ey = {};
    ey[Zm.ForwardRef] = q1;
    ey[Zm.Memo] = Y1;
    var Cd = {}, X1 = {
        get exports() {
            return Cd
        }, set exports(e) {
            Cd = e
        }
    }, Q = {};
    /**
     * @license React
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var Ac = Symbol.for("react.element"), Fc = Symbol.for("react.portal"), Kl = Symbol.for("react.fragment"),
        Ql = Symbol.for("react.strict_mode"), Gl = Symbol.for("react.profiler"), ql = Symbol.for("react.provider"),
        Yl = Symbol.for("react.context"), J1 = Symbol.for("react.server_context"), Xl = Symbol.for("react.forward_ref"),
        Jl = Symbol.for("react.suspense"), Zl = Symbol.for("react.suspense_list"), eu = Symbol.for("react.memo"),
        tu = Symbol.for("react.lazy"), Z1 = Symbol.for("react.offscreen"), ty;
    ty = Symbol.for("react.module.reference");

    function nt(e) {
        if (typeof e == "object" && e !== null) {
            var t = e.$$typeof;
            switch (t) {
                case Ac:
                    switch (e = e.type, e) {
                        case Kl:
                        case Gl:
                        case Ql:
                        case Jl:
                        case Zl:
                            return e;
                        default:
                            switch (e = e && e.$$typeof, e) {
                                case J1:
                                case Yl:
                                case Xl:
                                case tu:
                                case eu:
                                case ql:
                                    return e;
                                default:
                                    return t
                            }
                    }
                case Fc:
                    return t
            }
        }
    }

    Q.ContextConsumer = Yl;
    Q.ContextProvider = ql;
    Q.Element = Ac;
    Q.ForwardRef = Xl;
    Q.Fragment = Kl;
    Q.Lazy = tu;
    Q.Memo = eu;
    Q.Portal = Fc;
    Q.Profiler = Gl;
    Q.StrictMode = Ql;
    Q.Suspense = Jl;
    Q.SuspenseList = Zl;
    Q.isAsyncMode = function () {
        return !1
    };
    Q.isConcurrentMode = function () {
        return !1
    };
    Q.isContextConsumer = function (e) {
        return nt(e) === Yl
    };
    Q.isContextProvider = function (e) {
        return nt(e) === ql
    };
    Q.isElement = function (e) {
        return typeof e == "object" && e !== null && e.$$typeof === Ac
    };
    Q.isForwardRef = function (e) {
        return nt(e) === Xl
    };
    Q.isFragment = function (e) {
        return nt(e) === Kl
    };
    Q.isLazy = function (e) {
        return nt(e) === tu
    };
    Q.isMemo = function (e) {
        return nt(e) === eu
    };
    Q.isPortal = function (e) {
        return nt(e) === Fc
    };
    Q.isProfiler = function (e) {
        return nt(e) === Gl
    };
    Q.isStrictMode = function (e) {
        return nt(e) === Ql
    };
    Q.isSuspense = function (e) {
        return nt(e) === Jl
    };
    Q.isSuspenseList = function (e) {
        return nt(e) === Zl
    };
    Q.isValidElementType = function (e) {
        return typeof e == "string" || typeof e == "function" || e === Kl || e === Gl || e === Ql || e === Jl || e === Zl || e === Z1 || typeof e == "object" && e !== null && (e.$$typeof === tu || e.$$typeof === eu || e.$$typeof === ql || e.$$typeof === Yl || e.$$typeof === Xl || e.$$typeof === ty || e.getModuleId !== void 0)
    };
    Q.typeOf = nt;
    (function (e) {
        e.exports = Q
    })(X1);

    function ew() {
        const e = D1();
        let t = null, n = null;
        return {
            clear() {
                t = null, n = null
            }, notify() {
                e(() => {
                    let r = t;
                    for (; r;) r.callback(), r = r.next
                })
            }, get() {
                let r = [], i = t;
                for (; i;) r.push(i), i = i.next;
                return r
            }, subscribe(r) {
                let i = !0, o = n = {callback: r, next: null, prev: n};
                return o.prev ? o.prev.next = o : t = o, function () {
                    !i || t === null || (i = !1, o.next ? o.next.prev = o.prev : n = o.prev, o.prev ? o.prev.next = o.next : t = o.next)
                }
            }
        }
    }

    const Od = {
        notify() {
        }, get: () => []
    };

    function tw(e, t) {
        let n, r = Od;

        function i(d) {
            return s(), r.subscribe(d)
        }

        function o() {
            r.notify()
        }

        function l() {
            c.onStateChange && c.onStateChange()
        }

        function u() {
            return !!n
        }

        function s() {
            n || (n = t ? t.addNestedSub(l) : e.subscribe(l), r = ew())
        }

        function a() {
            n && (n(), n = void 0, r.clear(), r = Od)
        }

        const c = {
            addNestedSub: i,
            notifyNestedSubs: o,
            handleChangeWrapper: l,
            isSubscribed: u,
            trySubscribe: s,
            tryUnsubscribe: a,
            getListeners: () => r
        };
        return c
    }

    const nw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
        rw = nw ? E.useLayoutEffect : E.useEffect;

    function iw({store: e, context: t, children: n, serverState: r}) {
        const i = E.useMemo(() => {
            const u = tw(e);
            return {store: e, subscription: u, getServerState: r ? () => r : void 0}
        }, [e, r]), o = E.useMemo(() => e.getState(), [e]);
        rw(() => {
            const {subscription: u} = i;
            return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), o !== e.getState() && u.notifyNestedSubs(), () => {
                u.tryUnsubscribe(), u.onStateChange = void 0
            }
        }, [i, o]);
        const l = t || dn;
        return Ma.createElement(l.Provider, {value: i}, n)
    }

    function ny(e = dn) {
        const t = e === dn ? Ym : () => E.useContext(e);
        return function () {
            const {store: r} = t();
            return r
        }
    }

    const ow = ny();

    function lw(e = dn) {
        const t = e === dn ? ow : ny(e);
        return function () {
            return t().dispatch
        }
    }

    const uw = lw();
    M1(ca.useSyncExternalStoreWithSelector);
    L1(Lo.unstable_batchedUpdates);
    const nu = () => uw(), sw = B1;

    function ct(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function (i) {
            return "'" + i + "'"
        }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
    }

    function pn(e) {
        return !!e && !!e[te]
    }

    function It(e) {
        var t;
        return !!e && (function (n) {
            if (!n || typeof n != "object") return !1;
            var r = Object.getPrototypeOf(n);
            if (r === null) return !0;
            var i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
            return i === Object || typeof i == "function" && Function.toString.call(i) === vw
        }(e) || Array.isArray(e) || !!e[Nd] || !!(!((t = e.constructor) === null || t === void 0) && t[Nd]) || bc(e) || Lc(e))
    }

    function Vn(e, t, n) {
        n === void 0 && (n = !1), Mr(e) === 0 ? (n ? Object.keys : Cr)(e).forEach(function (r) {
            n && typeof r == "symbol" || t(r, e[r], e)
        }) : e.forEach(function (r, i) {
            return t(i, r, e)
        })
    }

    function Mr(e) {
        var t = e[te];
        return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : bc(e) ? 2 : Lc(e) ? 3 : 0
    }

    function _r(e, t) {
        return Mr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
    }

    function aw(e, t) {
        return Mr(e) === 2 ? e.get(t) : e[t]
    }

    function ry(e, t, n) {
        var r = Mr(e);
        r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n
    }

    function iy(e, t) {
        return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
    }

    function bc(e) {
        return mw && e instanceof Map
    }

    function Lc(e) {
        return yw && e instanceof Set
    }

    function Tn(e) {
        return e.o || e.t
    }

    function Dc(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = ly(e);
        delete t[te];
        for (var n = Cr(t), r = 0; r < n.length; r++) {
            var i = n[r], o = t[i];
            o.writable === !1 && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[i] = {
                configurable: !0,
                writable: !0,
                enumerable: o.enumerable,
                value: e[i]
            })
        }
        return Object.create(Object.getPrototypeOf(e), t)
    }

    function Ic(e, t) {
        return t === void 0 && (t = !1), Mc(e) || pn(e) || !It(e) || (Mr(e) > 1 && (e.set = e.add = e.clear = e.delete = cw), Object.freeze(e), t && Vn(e, function (n, r) {
            return Ic(r, !0)
        }, !0)), e
    }

    function cw() {
        ct(2)
    }

    function Mc(e) {
        return e == null || typeof e != "object" || Object.isFrozen(e)
    }

    function Ct(e) {
        var t = ma[e];
        return t || ct(18, e), t
    }

    function fw(e, t) {
        ma[e] || (ma[e] = t)
    }

    function da() {
        return Ni
    }

    function qu(e, t) {
        t && (Ct("Patches"), e.u = [], e.s = [], e.v = t)
    }

    function ul(e) {
        pa(e), e.p.forEach(dw), e.p = null
    }

    function pa(e) {
        e === Ni && (Ni = e.l)
    }

    function kd(e) {
        return Ni = {p: [], l: Ni, h: e, m: !0, _: 0}
    }

    function dw(e) {
        var t = e[te];
        t.i === 0 || t.i === 1 ? t.j() : t.g = !0
    }

    function Yu(e, t) {
        t._ = t.p.length;
        var n = t.p[0], r = e !== void 0 && e !== n;
        return t.h.O || Ct("ES5").S(t, e, r), r ? (n[te].P && (ul(t), ct(4)), It(e) && (e = sl(t, e), t.l || al(t, e)), t.u && Ct("Patches").M(n[te].t, e, t.u, t.s)) : e = sl(t, n, []), ul(t), t.u && t.v(t.u, t.s), e !== oy ? e : void 0
    }

    function sl(e, t, n) {
        if (Mc(t)) return t;
        var r = t[te];
        if (!r) return Vn(t, function (u, s) {
            return Td(e, r, t, u, s, n)
        }, !0), t;
        if (r.A !== e) return t;
        if (!r.P) return al(e, r.t, !0), r.t;
        if (!r.I) {
            r.I = !0, r.A._--;
            var i = r.i === 4 || r.i === 5 ? r.o = Dc(r.k) : r.o, o = i, l = !1;
            r.i === 3 && (o = new Set(i), i.clear(), l = !0), Vn(o, function (u, s) {
                return Td(e, r, i, u, s, n, l)
            }), al(e, i, !1), n && e.u && Ct("Patches").N(r, n, e.u, e.s)
        }
        return r.o
    }

    function Td(e, t, n, r, i, o, l) {
        if (pn(i)) {
            var u = sl(e, i, o && t && t.i !== 3 && !_r(t.R, r) ? o.concat(r) : void 0);
            if (ry(n, r, u), !pn(u)) return;
            e.m = !1
        } else l && n.add(i);
        if (It(i) && !Mc(i)) {
            if (!e.h.D && e._ < 1) return;
            sl(e, i), t && t.A.l || al(e, i)
        }
    }

    function al(e, t, n) {
        n === void 0 && (n = !1), !e.l && e.h.D && e.m && Ic(t, n)
    }

    function Xu(e, t) {
        var n = e[te];
        return (n ? Tn(n) : e)[t]
    }

    function Pd(e, t) {
        if (t in e) for (var n = Object.getPrototypeOf(e); n;) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n)
        }
    }

    function qt(e) {
        e.P || (e.P = !0, e.l && qt(e.l))
    }

    function Ju(e) {
        e.o || (e.o = Dc(e.t))
    }

    function ha(e, t, n) {
        var r = bc(t) ? Ct("MapSet").F(t, n) : Lc(t) ? Ct("MapSet").T(t, n) : e.O ? function (i, o) {
            var l = Array.isArray(i), u = {
                i: l ? 1 : 0,
                A: o ? o.A : da(),
                P: !1,
                I: !1,
                R: {},
                l: o,
                t: i,
                k: null,
                o: null,
                j: null,
                C: !1
            }, s = u, a = Ai;
            l && (s = [u], a = ri);
            var c = Proxy.revocable(s, a), d = c.revoke, f = c.proxy;
            return u.k = f, u.j = d, f
        }(t, n) : Ct("ES5").J(t, n);
        return (n ? n.A : da()).p.push(r), r
    }

    function pw(e) {
        return pn(e) || ct(22, e), function t(n) {
            if (!It(n)) return n;
            var r, i = n[te], o = Mr(n);
            if (i) {
                if (!i.P && (i.i < 4 || !Ct("ES5").K(i))) return i.t;
                i.I = !0, r = $d(n, o), i.I = !1
            } else r = $d(n, o);
            return Vn(r, function (l, u) {
                i && aw(i.t, l) === u || ry(r, l, t(u))
            }), o === 3 ? new Set(r) : r
        }(e)
    }

    function $d(e, t) {
        switch (t) {
            case 2:
                return new Map(e);
            case 3:
                return Array.from(e)
        }
        return Dc(e)
    }

    function hw() {
        function e(o, l) {
            var u = i[o];
            return u ? u.enumerable = l : i[o] = u = {
                configurable: !0, enumerable: l, get: function () {
                    var s = this[te];
                    return Ai.get(s, o)
                }, set: function (s) {
                    var a = this[te];
                    Ai.set(a, o, s)
                }
            }, u
        }

        function t(o) {
            for (var l = o.length - 1; l >= 0; l--) {
                var u = o[l][te];
                if (!u.P) switch (u.i) {
                    case 5:
                        r(u) && qt(u);
                        break;
                    case 4:
                        n(u) && qt(u)
                }
            }
        }

        function n(o) {
            for (var l = o.t, u = o.k, s = Cr(u), a = s.length - 1; a >= 0; a--) {
                var c = s[a];
                if (c !== te) {
                    var d = l[c];
                    if (d === void 0 && !_r(l, c)) return !0;
                    var f = u[c], v = f && f[te];
                    if (v ? v.t !== d : !iy(f, d)) return !0
                }
            }
            var m = !!l[te];
            return s.length !== Cr(l).length + (m ? 0 : 1)
        }

        function r(o) {
            var l = o.k;
            if (l.length !== o.t.length) return !0;
            var u = Object.getOwnPropertyDescriptor(l, l.length - 1);
            if (u && !u.get) return !0;
            for (var s = 0; s < l.length; s++) if (!l.hasOwnProperty(s)) return !0;
            return !1
        }

        var i = {};
        fw("ES5", {
            J: function (o, l) {
                var u = Array.isArray(o), s = function (c, d) {
                        if (c) {
                            for (var f = Array(d.length), v = 0; v < d.length; v++) Object.defineProperty(f, "" + v, e(v, !0));
                            return f
                        }
                        var m = ly(d);
                        delete m[te];
                        for (var y = Cr(m), x = 0; x < y.length; x++) {
                            var h = y[x];
                            m[h] = e(h, c || !!m[h].enumerable)
                        }
                        return Object.create(Object.getPrototypeOf(d), m)
                    }(u, o),
                    a = {i: u ? 5 : 4, A: l ? l.A : da(), P: !1, I: !1, R: {}, l, t: o, k: s, o: null, g: !1, C: !1};
                return Object.defineProperty(s, te, {value: a, writable: !0}), s
            }, S: function (o, l, u) {
                u ? pn(l) && l[te].A === o && t(o.p) : (o.u && function s(a) {
                    if (a && typeof a == "object") {
                        var c = a[te];
                        if (c) {
                            var d = c.t, f = c.k, v = c.R, m = c.i;
                            if (m === 4) Vn(f, function (g) {
                                g !== te && (d[g] !== void 0 || _r(d, g) ? v[g] || s(f[g]) : (v[g] = !0, qt(c)))
                            }), Vn(d, function (g) {
                                f[g] !== void 0 || _r(f, g) || (v[g] = !1, qt(c))
                            }); else if (m === 5) {
                                if (r(c) && (qt(c), v.length = !0), f.length < d.length) for (var y = f.length; y < d.length; y++) v[y] = !1; else for (var x = d.length; x < f.length; x++) v[x] = !0;
                                for (var h = Math.min(f.length, d.length), p = 0; p < h; p++) f.hasOwnProperty(p) || (v[p] = !0), v[p] === void 0 && s(f[p])
                            }
                        }
                    }
                }(o.p[0]), t(o.p))
            }, K: function (o) {
                return o.i === 4 ? n(o) : r(o)
            }
        })
    }

    var jd, Ni, zc = typeof Symbol < "u" && typeof Symbol("x") == "symbol", mw = typeof Map < "u",
        yw = typeof Set < "u", Rd = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
        oy = zc ? Symbol.for("immer-nothing") : ((jd = {})["immer-nothing"] = !0, jd),
        Nd = zc ? Symbol.for("immer-draftable") : "__$immer_draftable",
        te = zc ? Symbol.for("immer-state") : "__$immer_state", vw = "" + Object.prototype.constructor,
        Cr = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function (e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : Object.getOwnPropertyNames, ly = Object.getOwnPropertyDescriptors || function (e) {
            var t = {};
            return Cr(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n)
            }), t
        }, ma = {}, Ai = {
            get: function (e, t) {
                if (t === te) return e;
                var n = Tn(e);
                if (!_r(n, t)) return function (i, o, l) {
                    var u, s = Pd(o, l);
                    return s ? "value" in s ? s.value : (u = s.get) === null || u === void 0 ? void 0 : u.call(i.k) : void 0
                }(e, n, t);
                var r = n[t];
                return e.I || !It(r) ? r : r === Xu(e.t, t) ? (Ju(e), e.o[t] = ha(e.A.h, r, e)) : r
            }, has: function (e, t) {
                return t in Tn(e)
            }, ownKeys: function (e) {
                return Reflect.ownKeys(Tn(e))
            }, set: function (e, t, n) {
                var r = Pd(Tn(e), t);
                if (r != null && r.set) return r.set.call(e.k, n), !0;
                if (!e.P) {
                    var i = Xu(Tn(e), t), o = i == null ? void 0 : i[te];
                    if (o && o.t === n) return e.o[t] = n, e.R[t] = !1, !0;
                    if (iy(n, i) && (n !== void 0 || _r(e.t, t))) return !0;
                    Ju(e), qt(e)
                }
                return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0
            }, deleteProperty: function (e, t) {
                return Xu(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, Ju(e), qt(e)) : delete e.R[t], e.o && delete e.o[t], !0
            }, getOwnPropertyDescriptor: function (e, t) {
                var n = Tn(e), r = Reflect.getOwnPropertyDescriptor(n, t);
                return r && {writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: r.enumerable, value: n[t]}
            }, defineProperty: function () {
                ct(11)
            }, getPrototypeOf: function (e) {
                return Object.getPrototypeOf(e.t)
            }, setPrototypeOf: function () {
                ct(12)
            }
        }, ri = {};
    Vn(Ai, function (e, t) {
        ri[e] = function () {
            return arguments[0] = arguments[0][0], t.apply(this, arguments)
        }
    }), ri.deleteProperty = function (e, t) {
        return ri.set.call(this, e, t, void 0)
    }, ri.set = function (e, t, n) {
        return Ai.set.call(this, e[0], t, n, e[0])
    };
    var gw = function () {
        function e(n) {
            var r = this;
            this.O = Rd, this.D = !0, this.produce = function (i, o, l) {
                if (typeof i == "function" && typeof o != "function") {
                    var u = o;
                    o = i;
                    var s = r;
                    return function (y) {
                        var x = this;
                        y === void 0 && (y = u);
                        for (var h = arguments.length, p = Array(h > 1 ? h - 1 : 0), g = 1; g < h; g++) p[g - 1] = arguments[g];
                        return s.produce(y, function (w) {
                            var C;
                            return (C = o).call.apply(C, [x, w].concat(p))
                        })
                    }
                }
                var a;
                if (typeof o != "function" && ct(6), l !== void 0 && typeof l != "function" && ct(7), It(i)) {
                    var c = kd(r), d = ha(r, i, void 0), f = !0;
                    try {
                        a = o(d), f = !1
                    } finally {
                        f ? ul(c) : pa(c)
                    }
                    return typeof Promise < "u" && a instanceof Promise ? a.then(function (y) {
                        return qu(c, l), Yu(y, c)
                    }, function (y) {
                        throw ul(c), y
                    }) : (qu(c, l), Yu(a, c))
                }
                if (!i || typeof i != "object") {
                    if ((a = o(i)) === void 0 && (a = i), a === oy && (a = void 0), r.D && Ic(a, !0), l) {
                        var v = [], m = [];
                        Ct("Patches").M(i, a, v, m), l(v, m)
                    }
                    return a
                }
                ct(21, i)
            }, this.produceWithPatches = function (i, o) {
                if (typeof i == "function") return function (a) {
                    for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++) d[f - 1] = arguments[f];
                    return r.produceWithPatches(a, function (v) {
                        return i.apply(void 0, [v].concat(d))
                    })
                };
                var l, u, s = r.produce(i, o, function (a, c) {
                    l = a, u = c
                });
                return typeof Promise < "u" && s instanceof Promise ? s.then(function (a) {
                    return [a, l, u]
                }) : [s, l, u]
            }, typeof (n == null ? void 0 : n.useProxies) == "boolean" && this.setUseProxies(n.useProxies), typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze)
        }

        var t = e.prototype;
        return t.createDraft = function (n) {
            It(n) || ct(8), pn(n) && (n = pw(n));
            var r = kd(this), i = ha(this, n, void 0);
            return i[te].C = !0, pa(r), i
        }, t.finishDraft = function (n, r) {
            var i = n && n[te], o = i.A;
            return qu(o, r), Yu(void 0, o)
        }, t.setAutoFreeze = function (n) {
            this.D = n
        }, t.setUseProxies = function (n) {
            n && !Rd && ct(20), this.O = n
        }, t.applyPatches = function (n, r) {
            var i;
            for (i = r.length - 1; i >= 0; i--) {
                var o = r[i];
                if (o.path.length === 0 && o.op === "replace") {
                    n = o.value;
                    break
                }
            }
            i > -1 && (r = r.slice(i + 1));
            var l = Ct("Patches").$;
            return pn(n) ? l(n, r) : this.produce(n, function (u) {
                return l(u, r)
            })
        }, e
    }(), He = new gw, uy = He.produce;
    He.produceWithPatches.bind(He);
    He.setAutoFreeze.bind(He);
    He.setUseProxies.bind(He);
    He.applyPatches.bind(He);
    He.createDraft.bind(He);
    He.finishDraft.bind(He);

    function Fi(e) {
        return Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
            return typeof t
        } : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, Fi(e)
    }

    function ww(e, t) {
        if (Fi(e) !== "object" || e === null) return e;
        var n = e[Symbol.toPrimitive];
        if (n !== void 0) {
            var r = n.call(e, t || "default");
            if (Fi(r) !== "object") return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (t === "string" ? String : Number)(e)
    }

    function Sw(e) {
        var t = ww(e, "string");
        return Fi(t) === "symbol" ? t : String(t)
    }

    function Ew(e, t, n) {
        return t = Sw(t), t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Ad(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function Fd(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? arguments[t] : {};
            t % 2 ? Ad(Object(n), !0).forEach(function (r) {
                Ew(e, r, n[r])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ad(Object(n)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
            })
        }
        return e
    }

    function _e(e) {
        return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
    }

    var bd = function () {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    }(), Zu = function () {
        return Math.random().toString(36).substring(7).split("").join(".")
    }, cl = {
        INIT: "@@redux/INIT" + Zu(), REPLACE: "@@redux/REPLACE" + Zu(), PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + Zu()
        }
    };

    function xw(e) {
        if (typeof e != "object" || e === null) return !1;
        for (var t = e; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t
    }

    function sy(e, t, n) {
        var r;
        if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw new Error(_e(0));
        if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
            if (typeof n != "function") throw new Error(_e(1));
            return n(sy)(e, t)
        }
        if (typeof e != "function") throw new Error(_e(2));
        var i = e, o = t, l = [], u = l, s = !1;

        function a() {
            u === l && (u = l.slice())
        }

        function c() {
            if (s) throw new Error(_e(3));
            return o
        }

        function d(y) {
            if (typeof y != "function") throw new Error(_e(4));
            if (s) throw new Error(_e(5));
            var x = !0;
            return a(), u.push(y), function () {
                if (x) {
                    if (s) throw new Error(_e(6));
                    x = !1, a();
                    var p = u.indexOf(y);
                    u.splice(p, 1), l = null
                }
            }
        }

        function f(y) {
            if (!xw(y)) throw new Error(_e(7));
            if (typeof y.type > "u") throw new Error(_e(8));
            if (s) throw new Error(_e(9));
            try {
                s = !0, o = i(o, y)
            } finally {
                s = !1
            }
            for (var x = l = u, h = 0; h < x.length; h++) {
                var p = x[h];
                p()
            }
            return y
        }

        function v(y) {
            if (typeof y != "function") throw new Error(_e(10));
            i = y, f({type: cl.REPLACE})
        }

        function m() {
            var y, x = d;
            return y = {
                subscribe: function (p) {
                    if (typeof p != "object" || p === null) throw new Error(_e(11));

                    function g() {
                        p.next && p.next(c())
                    }

                    g();
                    var w = x(g);
                    return {unsubscribe: w}
                }
            }, y[bd] = function () {
                return this
            }, y
        }

        return f({type: cl.INIT}), r = {dispatch: f, subscribe: d, getState: c, replaceReducer: v}, r[bd] = m, r
    }

    function _w(e) {
        Object.keys(e).forEach(function (t) {
            var n = e[t], r = n(void 0, {type: cl.INIT});
            if (typeof r > "u") throw new Error(_e(12));
            if (typeof n(void 0, {type: cl.PROBE_UNKNOWN_ACTION()}) > "u") throw new Error(_e(13))
        })
    }

    function Cw(e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
            var i = t[r];
            typeof e[i] == "function" && (n[i] = e[i])
        }
        var o = Object.keys(n), l;
        try {
            _w(n)
        } catch (u) {
            l = u
        }
        return function (s, a) {
            if (s === void 0 && (s = {}), l) throw l;
            for (var c = !1, d = {}, f = 0; f < o.length; f++) {
                var v = o[f], m = n[v], y = s[v], x = m(y, a);
                if (typeof x > "u") throw a && a.type, new Error(_e(14));
                d[v] = x, c = c || x !== y
            }
            return c = c || o.length !== Object.keys(s).length, c ? d : s
        }
    }

    function fl() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.length === 0 ? function (r) {
            return r
        } : t.length === 1 ? t[0] : t.reduce(function (r, i) {
            return function () {
                return r(i.apply(void 0, arguments))
            }
        })
    }

    function Ow() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function (r) {
            return function () {
                var i = r.apply(void 0, arguments), o = function () {
                    throw new Error(_e(15))
                }, l = {
                    getState: i.getState, dispatch: function () {
                        return o.apply(void 0, arguments)
                    }
                }, u = t.map(function (s) {
                    return s(l)
                });
                return o = fl.apply(void 0, u)(i.dispatch), Fd(Fd({}, i), {}, {dispatch: o})
            }
        }
    }

    function ay(e) {
        var t = function (r) {
            var i = r.dispatch, o = r.getState;
            return function (l) {
                return function (u) {
                    return typeof u == "function" ? u(i, o, e) : l(u)
                }
            }
        };
        return t
    }

    var cy = ay();
    cy.withExtraArgument = ay;
    const Ld = cy;
    var kw = globalThis && globalThis.__extends || function () {
            var e = function (t, n) {
                return e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (r, i) {
                    r.__proto__ = i
                } || function (r, i) {
                    for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
                }, e(t, n)
            };
            return function (t, n) {
                if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);

                function r() {
                    this.constructor = t
                }

                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(), Tw = globalThis && globalThis.__generator || function (e, t) {
            var n = {
                label: 0, sent: function () {
                    if (o[0] & 1) throw o[1];
                    return o[1]
                }, trys: [], ops: []
            }, r, i, o, l;
            return l = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, typeof Symbol == "function" && (l[Symbol.iterator] = function () {
                return this
            }), l;

            function u(a) {
                return function (c) {
                    return s([a, c])
                }
            }

            function s(a) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; n;) try {
                    if (r = 1, i && (o = a[0] & 2 ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, a[1])).done) return o;
                    switch (i = 0, o && (a = [a[0] & 2, o.value]), a[0]) {
                        case 0:
                        case 1:
                            o = a;
                            break;
                        case 4:
                            return n.label++, {value: a[1], done: !1};
                        case 5:
                            n.label++, i = a[1], a = [0];
                            continue;
                        case 7:
                            a = n.ops.pop(), n.trys.pop();
                            continue;
                        default:
                            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                                n = 0;
                                continue
                            }
                            if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
                                n.label = a[1];
                                break
                            }
                            if (a[0] === 6 && n.label < o[1]) {
                                n.label = o[1], o = a;
                                break
                            }
                            if (o && n.label < o[2]) {
                                n.label = o[2], n.ops.push(a);
                                break
                            }
                            o[2] && n.ops.pop(), n.trys.pop();
                            continue
                    }
                    a = t.call(e, n)
                } catch (c) {
                    a = [6, c], i = 0
                } finally {
                    r = o = 0
                }
                if (a[0] & 5) throw a[1];
                return {value: a[0] ? a[1] : void 0, done: !0}
            }
        }, dl = globalThis && globalThis.__spreadArray || function (e, t) {
            for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
            return e
        }, Pw = Object.defineProperty, $w = Object.defineProperties, jw = Object.getOwnPropertyDescriptors,
        Dd = Object.getOwnPropertySymbols, Rw = Object.prototype.hasOwnProperty,
        Nw = Object.prototype.propertyIsEnumerable, Id = function (e, t, n) {
            return t in e ? Pw(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n
        }, sn = function (e, t) {
            for (var n in t || (t = {})) Rw.call(t, n) && Id(e, n, t[n]);
            if (Dd) for (var r = 0, i = Dd(t); r < i.length; r++) {
                var n = i[r];
                Nw.call(t, n) && Id(e, n, t[n])
            }
            return e
        }, es = function (e, t) {
            return $w(e, jw(t))
        }, Aw = function (e, t, n) {
            return new Promise(function (r, i) {
                var o = function (s) {
                    try {
                        u(n.next(s))
                    } catch (a) {
                        i(a)
                    }
                }, l = function (s) {
                    try {
                        u(n.throw(s))
                    } catch (a) {
                        i(a)
                    }
                }, u = function (s) {
                    return s.done ? r(s.value) : Promise.resolve(s.value).then(o, l)
                };
                u((n = n.apply(e, t)).next())
            })
        },
        Fw = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
            if (arguments.length !== 0) return typeof arguments[0] == "object" ? fl : fl.apply(null, arguments)
        };

    function bw(e) {
        if (typeof e != "object" || e === null) return !1;
        var t = Object.getPrototypeOf(e);
        if (t === null) return !0;
        for (var n = t; Object.getPrototypeOf(n) !== null;) n = Object.getPrototypeOf(n);
        return t === n
    }

    var Lw = function (e) {
        kw(t, e);

        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            var i = e.apply(this, n) || this;
            return Object.setPrototypeOf(i, t.prototype), i
        }

        return Object.defineProperty(t, Symbol.species, {
            get: function () {
                return t
            }, enumerable: !1, configurable: !0
        }), t.prototype.concat = function () {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return e.prototype.concat.apply(this, n)
        }, t.prototype.prepend = function () {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return n.length === 1 && Array.isArray(n[0]) ? new (t.bind.apply(t, dl([void 0], n[0].concat(this)))) : new (t.bind.apply(t, dl([void 0], n.concat(this))))
        }, t
    }(Array);

    function ya(e) {
        return It(e) ? uy(e, function () {
        }) : e
    }

    function Dw(e) {
        return typeof e == "boolean"
    }

    function Iw() {
        return function (t) {
            return Mw(t)
        }
    }

    function Mw(e) {
        e === void 0 && (e = {});
        var t = e.thunk, n = t === void 0 ? !0 : t;
        e.immutableCheck, e.serializableCheck;
        var r = new Lw;
        return n && (Dw(n) ? r.push(Ld) : r.push(Ld.withExtraArgument(n.extraArgument))), r
    }

    var zw = !0;

    function Uw(e) {
        var t = Iw(), n = e || {}, r = n.reducer, i = r === void 0 ? void 0 : r, o = n.middleware,
            l = o === void 0 ? t() : o, u = n.devTools, s = u === void 0 ? !0 : u, a = n.preloadedState,
            c = a === void 0 ? void 0 : a, d = n.enhancers, f = d === void 0 ? void 0 : d, v;
        if (typeof i == "function") v = i; else if (bw(i)) v = Cw(i); else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
        var m = l;
        typeof m == "function" && (m = m(t));
        var y = Ow.apply(void 0, m), x = fl;
        s && (x = Fw(sn({trace: !zw}, typeof s == "object" && s)));
        var h = [y];
        Array.isArray(f) ? h = dl([y], f) : typeof f == "function" && (h = f(h));
        var p = x.apply(void 0, h);
        return sy(v, c, p)
    }

    function an(e, t) {
        function n() {
            for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
            if (t) {
                var o = t.apply(void 0, r);
                if (!o) throw new Error("prepareAction did not return an object");
                return sn(sn({
                    type: e,
                    payload: o.payload
                }, "meta" in o && {meta: o.meta}), "error" in o && {error: o.error})
            }
            return {type: e, payload: r[0]}
        }

        return n.toString = function () {
            return "" + e
        }, n.type = e, n.match = function (r) {
            return r.type === e
        }, n
    }

    function fy(e) {
        var t = {}, n = [], r, i = {
            addCase: function (o, l) {
                var u = typeof o == "string" ? o : o.type;
                if (u in t) throw new Error("addCase cannot be called with two reducers for the same action type");
                return t[u] = l, i
            }, addMatcher: function (o, l) {
                return n.push({matcher: o, reducer: l}), i
            }, addDefaultCase: function (o) {
                return r = o, i
            }
        };
        return e(i), [t, n, r]
    }

    function Bw(e) {
        return typeof e == "function"
    }

    function Vw(e, t, n, r) {
        n === void 0 && (n = []);
        var i = typeof t == "function" ? fy(t) : [t, n, r], o = i[0], l = i[1], u = i[2], s;
        if (Bw(e)) s = function () {
            return ya(e())
        }; else {
            var a = ya(e);
            s = function () {
                return a
            }
        }

        function c(d, f) {
            d === void 0 && (d = s());
            var v = dl([o[f.type]], l.filter(function (m) {
                var y = m.matcher;
                return y(f)
            }).map(function (m) {
                var y = m.reducer;
                return y
            }));
            return v.filter(function (m) {
                return !!m
            }).length === 0 && (v = [u]), v.reduce(function (m, y) {
                if (y) if (pn(m)) {
                    var x = m, h = y(x, f);
                    return h === void 0 ? m : h
                } else {
                    if (It(m)) return uy(m, function (p) {
                        return y(p, f)
                    });
                    var h = y(m, f);
                    if (h === void 0) {
                        if (m === null) return m;
                        throw Error("A case reducer on a non-draftable value must not return undefined")
                    }
                    return h
                }
                return m
            }, d)
        }

        return c.getInitialState = s, c
    }

    function Hw(e, t) {
        return e + "/" + t
    }

    function Ww(e) {
        var t = e.name;
        if (!t) throw new Error("`name` is a required option for createSlice");
        typeof process < "u";
        var n = typeof e.initialState == "function" ? e.initialState : ya(e.initialState), r = e.reducers || {},
            i = Object.keys(r), o = {}, l = {}, u = {};
        i.forEach(function (c) {
            var d = r[c], f = Hw(t, c), v, m;
            "reducer" in d ? (v = d.reducer, m = d.prepare) : v = d, o[c] = v, l[f] = v, u[c] = m ? an(f, m) : an(f)
        });

        function s() {
            var c = typeof e.extraReducers == "function" ? fy(e.extraReducers) : [e.extraReducers], d = c[0],
                f = d === void 0 ? {} : d, v = c[1], m = v === void 0 ? [] : v, y = c[2], x = y === void 0 ? void 0 : y,
                h = sn(sn({}, f), l);
            return Vw(n, function (p) {
                for (var g in h) p.addCase(g, h[g]);
                for (var w = 0, C = m; w < C.length; w++) {
                    var T = C[w];
                    p.addMatcher(T.matcher, T.reducer)
                }
                x && p.addDefaultCase(x)
            })
        }

        var a;
        return {
            name: t, reducer: function (c, d) {
                return a || (a = s()), a(c, d)
            }, actions: u, caseReducers: o, getInitialState: function () {
                return a || (a = s()), a.getInitialState()
            }
        }
    }

    var Kw = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Qw = function (e) {
        e === void 0 && (e = 21);
        for (var t = "", n = e; n--;) t += Kw[Math.random() * 64 | 0];
        return t
    }, Gw = ["name", "message", "stack", "code"], ts = function () {
        function e(t, n) {
            this.payload = t, this.meta = n
        }

        return e
    }(), Md = function () {
        function e(t, n) {
            this.payload = t, this.meta = n
        }

        return e
    }(), qw = function (e) {
        if (typeof e == "object" && e !== null) {
            for (var t = {}, n = 0, r = Gw; n < r.length; n++) {
                var i = r[n];
                typeof e[i] == "string" && (t[i] = e[i])
            }
            return t
        }
        return {message: String(e)}
    };
    (function () {
        function e(t, n, r) {
            var i = an(t + "/fulfilled", function (a, c, d, f) {
                return {payload: a, meta: es(sn({}, f || {}), {arg: d, requestId: c, requestStatus: "fulfilled"})}
            }), o = an(t + "/pending", function (a, c, d) {
                return {payload: void 0, meta: es(sn({}, d || {}), {arg: c, requestId: a, requestStatus: "pending"})}
            }), l = an(t + "/rejected", function (a, c, d, f, v) {
                return {
                    payload: f,
                    error: (r && r.serializeError || qw)(a || "Rejected"),
                    meta: es(sn({}, v || {}), {
                        arg: d,
                        requestId: c,
                        rejectedWithValue: !!f,
                        requestStatus: "rejected",
                        aborted: (a == null ? void 0 : a.name) === "AbortError",
                        condition: (a == null ? void 0 : a.name) === "ConditionError"
                    })
                }
            }), u = typeof AbortController < "u" ? AbortController : function () {
                function a() {
                    this.signal = {
                        aborted: !1, addEventListener: function () {
                        }, dispatchEvent: function () {
                            return !1
                        }, onabort: function () {
                        }, removeEventListener: function () {
                        }, reason: void 0, throwIfAborted: function () {
                        }
                    }
                }

                return a.prototype.abort = function () {
                }, a
            }();

            function s(a) {
                return function (c, d, f) {
                    var v = r != null && r.idGenerator ? r.idGenerator(a) : Qw(), m = new u, y;

                    function x(p) {
                        y = p, m.abort()
                    }

                    var h = function () {
                        return Aw(this, null, function () {
                            var p, g, w, C, T, P, N;
                            return Tw(this, function (U) {
                                switch (U.label) {
                                    case 0:
                                        return U.trys.push([0, 4, , 5]), C = (p = r == null ? void 0 : r.condition) == null ? void 0 : p.call(r, a, {
                                            getState: d,
                                            extra: f
                                        }), Xw(C) ? [4, C] : [3, 2];
                                    case 1:
                                        C = U.sent(), U.label = 2;
                                    case 2:
                                        if (C === !1 || m.signal.aborted) throw{
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                        return T = new Promise(function ($, M) {
                                            return m.signal.addEventListener("abort", function () {
                                                return M({name: "AbortError", message: y || "Aborted"})
                                            })
                                        }), c(o(v, a, (g = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : g.call(r, {
                                            requestId: v,
                                            arg: a
                                        }, {
                                            getState: d,
                                            extra: f
                                        }))), [4, Promise.race([T, Promise.resolve(n(a, {
                                            dispatch: c,
                                            getState: d,
                                            extra: f,
                                            requestId: v,
                                            signal: m.signal,
                                            abort: x,
                                            rejectWithValue: function ($, M) {
                                                return new ts($, M)
                                            },
                                            fulfillWithValue: function ($, M) {
                                                return new Md($, M)
                                            }
                                        })).then(function ($) {
                                            if ($ instanceof ts) throw $;
                                            return $ instanceof Md ? i($.payload, v, a, $.meta) : i($, v, a)
                                        })])];
                                    case 3:
                                        return w = U.sent(), [3, 5];
                                    case 4:
                                        return P = U.sent(), w = P instanceof ts ? l(null, v, a, P.payload, P.meta) : l(P, v, a), [3, 5];
                                    case 5:
                                        return N = r && !r.dispatchConditionRejection && l.match(w) && w.meta.condition, N || c(w), [2, w]
                                }
                            })
                        })
                    }();
                    return Object.assign(h, {
                        abort: x, requestId: v, arg: a, unwrap: function () {
                            return h.then(Yw)
                        }
                    })
                }
            }

            return Object.assign(s, {pending: o, rejected: l, fulfilled: i, typePrefix: t})
        }

        return e.withTypes = function () {
            return e
        }, e
    })();

    function Yw(e) {
        if (e.meta && e.meta.rejectedWithValue) throw e.payload;
        if (e.error) throw e.error;
        return e.payload
    }

    function Xw(e) {
        return e !== null && typeof e == "object" && typeof e.then == "function"
    }

    var Uc = "listenerMiddleware";
    an(Uc + "/add");
    an(Uc + "/removeAll");
    an(Uc + "/remove");
    var zd;
    typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
    hw();
    const Jw = {products: []}, dy = Ww({
            name: "products", initialState: Jw, reducers: {
                setProducts(e, t) {
                    e.products = t.payload
                }, addNewProduct(e, t) {
                    e.products.unshift(t.payload)
                }, deleteProduct(e, t) {
                    e.products = e.products.filter(n => n.id !== t.payload)
                }, sortBy(e, t) {
                    switch (t.payload.sortBy) {
                        case"id":
                            t.payload.isReverse ? e.products = e.products.sort((n, r) => n.id - r.id) : e.products = e.products.sort((n, r) => r.id - n.id);
                            break;
                        case"title":
                            t.payload.isReverse ? e.products = e.products.sort((n, r) => r.title.toLowerCase().localeCompare(n.title.toLowerCase())) : e.products = e.products.sort((n, r) => n.title.toLowerCase().localeCompare(r.title.toLowerCase()));
                            break;
                        case"description":
                            t.payload.isReverse ? e.products = e.products.sort((n, r) => r.description.toLowerCase().localeCompare(n.description.toLowerCase())) : e.products = e.products.sort((n, r) => n.description.toLowerCase().localeCompare(r.description.toLowerCase()));
                            break;
                        case"price":
                            t.payload.isReverse ? e.products = e.products.sort((n, r) => r.price - n.price) : e.products = e.products.sort((n, r) => n.price - r.price);
                            break;
                        case"rating":
                            t.payload.isReverse ? e.products = e.products.sort((n, r) => r.rating - n.rating) : e.products = e.products.sort((n, r) => n.rating - r.rating);
                            break;
                        case"stock":
                            t.payload.isReverse ? e.products = e.products.sort((n, r) => r.stock - n.stock) : e.products = e.products.sort((n, r) => n.stock - r.stock);
                            break;
                        case"category":
                            t.payload.isReverse ? e.products = e.products.sort((n, r) => r.category.toLowerCase().localeCompare(n.category.toLowerCase())) : e.products = e.products.sort((n, r) => n.category.toLowerCase().localeCompare(r.category.toLowerCase()));
                            break
                    }
                }
            }
        }), {setProducts: Zw, addNewProduct: eS, deleteProduct: tS, sortBy: nS} = dy.actions, rS = dy.reducer, iS = e => {
            const {id: t, title: n, description: r, price: i, images: o, rating: l, stock: u, category: s} = e, a = nu();
            return k.jsxs("div", {
                className: "wrapperProductItem",
                children: [k.jsx("p", {className: "id", children: t}), k.jsx("p", {
                    className: "title",
                    children: n
                }), k.jsx("p", {className: "description", children: r}), k.jsx("p", {children: i}), k.jsx("img", {
                    src: o[0],
                    alt: n
                }), k.jsx("p", {children: l}), k.jsx("p", {children: u}), k.jsx("p", {children: s}), k.jsx("button", {
                    onClick: () => a(tS(t)),
                    children: "×"
                })]
            })
        }, oS = e => {
            const t = sw(r => r.productsReducer.products);
            return {
                findProduct: E.useCallback(() => t.filter(({
                                                               title: r,
                                                               category: i
                                                           }) => r.toLowerCase().includes(e.toLowerCase()) || i.toLowerCase().includes(e.toLowerCase())), [t, e])
            }
        }, xn = "/Product-Store-application/assets/sort-4076183d.svg",
        lS = ({valueSearch: e, isReverse: t, setIsReverse: n}) => {
            const {findProduct: r} = oS(e), i = nu(), o = l => {
                i(nS({sortBy: l, isReverse: !t})), n(!t)
            };
            return k.jsxs("div", {
                className: "wrapperGoods",
                children: [k.jsxs("div", {
                    className: "headerProducts",
                    children: [k.jsxs("h2", {
                        onClick: () => o("id"),
                        children: ["ID ", k.jsx("img", {src: xn, alt: ""})]
                    }), k.jsxs("h2", {
                        onClick: () => o("title"),
                        children: ["Title ", k.jsx("img", {src: xn, alt: ""})]
                    }), k.jsxs("h2", {
                        className: "description",
                        onClick: () => o("description"),
                        children: ["Description ", k.jsx("img", {src: xn, alt: ""})]
                    }), k.jsxs("h2", {
                        onClick: () => o("price"),
                        children: ["Price ", k.jsx("img", {src: xn, alt: ""})]
                    }), k.jsx("h2", {children: "Image"}), k.jsxs("h2", {
                        onClick: () => o("rating"),
                        children: ["Rating ", k.jsx("img", {src: xn, alt: ""})]
                    }), k.jsxs("h2", {
                        onClick: () => o("stock"),
                        children: ["Stock ", k.jsx("img", {src: xn, alt: ""})]
                    }), k.jsxs("h2", {
                        onClick: () => o("category"),
                        children: ["Category ", k.jsx("img", {src: xn, alt: ""})]
                    })]
                }), k.jsx("div", {
                    className: "productItems",
                    children: r().map(l => E.createElement(iS, {...l, key: l.id}))
                })]
            })
        };

    /**
     * @remix-run/router v1.4.0
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */function bi() {
        return bi = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, bi.apply(this, arguments)
    }

    var Jt;
    (function (e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
    })(Jt || (Jt = {}));
    const Ud = "popstate";

    function uS(e) {
        e === void 0 && (e = {});

        function t(r, i) {
            let {pathname: o, search: l, hash: u} = r.location;
            return va("", {
                pathname: o,
                search: l,
                hash: u
            }, i.state && i.state.usr || null, i.state && i.state.key || "default")
        }

        function n(r, i) {
            return typeof i == "string" ? i : py(i)
        }

        return aS(t, n, null, e)
    }

    function ye(e, t) {
        if (e === !1 || e === null || typeof e > "u") throw new Error(t)
    }

    function Bc(e, t) {
        if (!e) {
            typeof console < "u" && console.warn(t);
            try {
                throw new Error(t)
            } catch {
            }
        }
    }

    function sS() {
        return Math.random().toString(36).substr(2, 8)
    }

    function Bd(e, t) {
        return {usr: e.state, key: e.key, idx: t}
    }

    function va(e, t, n, r) {
        return n === void 0 && (n = null), bi({
            pathname: typeof e == "string" ? e : e.pathname,
            search: "",
            hash: ""
        }, typeof t == "string" ? zr(t) : t, {state: n, key: t && t.key || r || sS()})
    }

    function py(e) {
        let {pathname: t = "/", search: n = "", hash: r = ""} = e;
        return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
    }

    function zr(e) {
        let t = {};
        if (e) {
            let n = e.indexOf("#");
            n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
            let r = e.indexOf("?");
            r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
        }
        return t
    }

    function aS(e, t, n, r) {
        r === void 0 && (r = {});
        let {window: i = document.defaultView, v5Compat: o = !1} = r, l = i.history, u = Jt.Pop, s = null, a = c();
        a == null && (a = 0, l.replaceState(bi({}, l.state, {idx: a}), ""));

        function c() {
            return (l.state || {idx: null}).idx
        }

        function d() {
            u = Jt.Pop;
            let x = c(), h = x == null ? null : x - a;
            a = x, s && s({action: u, location: y.location, delta: h})
        }

        function f(x, h) {
            u = Jt.Push;
            let p = va(y.location, x, h);
            n && n(p, x), a = c() + 1;
            let g = Bd(p, a), w = y.createHref(p);
            try {
                l.pushState(g, "", w)
            } catch {
                i.location.assign(w)
            }
            o && s && s({action: u, location: y.location, delta: 1})
        }

        function v(x, h) {
            u = Jt.Replace;
            let p = va(y.location, x, h);
            n && n(p, x), a = c();
            let g = Bd(p, a), w = y.createHref(p);
            l.replaceState(g, "", w), o && s && s({action: u, location: y.location, delta: 0})
        }

        function m(x) {
            let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
                p = typeof x == "string" ? x : py(x);
            return ye(h, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, h)
        }

        let y = {
            get action() {
                return u
            }, get location() {
                return e(i, l)
            }, listen(x) {
                if (s) throw new Error("A history only accepts one active listener");
                return i.addEventListener(Ud, d), s = x, () => {
                    i.removeEventListener(Ud, d), s = null
                }
            }, createHref(x) {
                return t(i, x)
            }, createURL: m, encodeLocation(x) {
                let h = m(x);
                return {pathname: h.pathname, search: h.search, hash: h.hash}
            }, push: f, replace: v, go(x) {
                return l.go(x)
            }
        };
        return y
    }

    var Vd;
    (function (e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
    })(Vd || (Vd = {}));

    function cS(e, t, n) {
        n === void 0 && (n = "/");
        let r = typeof t == "string" ? zr(t) : t, i = yy(r.pathname || "/", n);
        if (i == null) return null;
        let o = hy(e);
        fS(o);
        let l = null;
        for (let u = 0; l == null && u < o.length; ++u) l = SS(o[u], _S(i));
        return l
    }

    function hy(e, t, n, r) {
        t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
        let i = (o, l, u) => {
            let s = {
                relativePath: u === void 0 ? o.path || "" : u,
                caseSensitive: o.caseSensitive === !0,
                childrenIndex: l,
                route: o
            };
            s.relativePath.startsWith("/") && (ye(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), s.relativePath = s.relativePath.slice(r.length));
            let a = bn([r, s.relativePath]), c = n.concat(s);
            o.children && o.children.length > 0 && (ye(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + a + '".')), hy(o.children, t, c, a)), !(o.path == null && !o.index) && t.push({
                path: a,
                score: gS(a, o.index),
                routesMeta: c
            })
        };
        return e.forEach((o, l) => {
            var u;
            if (o.path === "" || !((u = o.path) != null && u.includes("?"))) i(o, l); else for (let s of my(o.path)) i(o, l, s)
        }), t
    }

    function my(e) {
        let t = e.split("/");
        if (t.length === 0) return [];
        let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
        if (r.length === 0) return i ? [o, ""] : [o];
        let l = my(r.join("/")), u = [];
        return u.push(...l.map(s => s === "" ? o : [o, s].join("/"))), i && u.push(...l), u.map(s => e.startsWith("/") && s === "" ? "/" : s)
    }

    function fS(e) {
        e.sort((t, n) => t.score !== n.score ? n.score - t.score : wS(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
    }

    const dS = /^:\w+$/, pS = 3, hS = 2, mS = 1, yS = 10, vS = -2, Hd = e => e === "*";

    function gS(e, t) {
        let n = e.split("/"), r = n.length;
        return n.some(Hd) && (r += vS), t && (r += hS), n.filter(i => !Hd(i)).reduce((i, o) => i + (dS.test(o) ? pS : o === "" ? mS : yS), r)
    }

    function wS(e, t) {
        return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
    }

    function SS(e, t) {
        let {routesMeta: n} = e, r = {}, i = "/", o = [];
        for (let l = 0; l < n.length; ++l) {
            let u = n[l], s = l === n.length - 1, a = i === "/" ? t : t.slice(i.length) || "/",
                c = ES({path: u.relativePath, caseSensitive: u.caseSensitive, end: s}, a);
            if (!c) return null;
            Object.assign(r, c.params);
            let d = u.route;
            o.push({
                params: r,
                pathname: bn([i, c.pathname]),
                pathnameBase: $S(bn([i, c.pathnameBase])),
                route: d
            }), c.pathnameBase !== "/" && (i = bn([i, c.pathnameBase]))
        }
        return o
    }

    function ES(e, t) {
        typeof e == "string" && (e = {path: e, caseSensitive: !1, end: !0});
        let [n, r] = xS(e.path, e.caseSensitive, e.end), i = t.match(n);
        if (!i) return null;
        let o = i[0], l = o.replace(/(.)\/+$/, "$1"), u = i.slice(1);
        return {
            params: r.reduce((a, c, d) => {
                if (c === "*") {
                    let f = u[d] || "";
                    l = o.slice(0, o.length - f.length).replace(/(.)\/+$/, "$1")
                }
                return a[c] = CS(u[d] || "", c), a
            }, {}), pathname: o, pathnameBase: l, pattern: e
        }
    }

    function xS(e, t, n) {
        t === void 0 && (t = !1), n === void 0 && (n = !0), Bc(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
        let r = [],
            i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (l, u) => (r.push(u), "/([^\\/]+)"));
        return e.endsWith("*") ? (r.push("*"), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
    }

    function _S(e) {
        try {
            return decodeURI(e)
        } catch (t) {
            return Bc(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
        }
    }

    function CS(e, t) {
        try {
            return decodeURIComponent(e)
        } catch (n) {
            return Bc(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
        }
    }

    function yy(e, t) {
        if (t === "/") return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
        return r && r !== "/" ? null : e.slice(n) || "/"
    }

    function OS(e, t) {
        t === void 0 && (t = "/");
        let {pathname: n, search: r = "", hash: i = ""} = typeof e == "string" ? zr(e) : e;
        return {pathname: n ? n.startsWith("/") ? n : kS(n, t) : t, search: jS(r), hash: RS(i)}
    }

    function kS(e, t) {
        let n = t.replace(/\/+$/, "").split("/");
        return e.split("/").forEach(i => {
            i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
        }), n.length > 1 ? n.join("/") : "/"
    }

    function ns(e, t, n, r) {
        return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
    }

    function TS(e) {
        return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
    }

    function PS(e, t, n, r) {
        r === void 0 && (r = !1);
        let i;
        typeof e == "string" ? i = zr(e) : (i = bi({}, e), ye(!i.pathname || !i.pathname.includes("?"), ns("?", "pathname", "search", i)), ye(!i.pathname || !i.pathname.includes("#"), ns("#", "pathname", "hash", i)), ye(!i.search || !i.search.includes("#"), ns("#", "search", "hash", i)));
        let o = e === "" || i.pathname === "", l = o ? "/" : i.pathname, u;
        if (r || l == null) u = n; else {
            let d = t.length - 1;
            if (l.startsWith("..")) {
                let f = l.split("/");
                for (; f[0] === "..";) f.shift(), d -= 1;
                i.pathname = f.join("/")
            }
            u = d >= 0 ? t[d] : "/"
        }
        let s = OS(i, u), a = l && l !== "/" && l.endsWith("/"), c = (o || l === ".") && n.endsWith("/");
        return !s.pathname.endsWith("/") && (a || c) && (s.pathname += "/"), s
    }

    const bn = e => e.join("/").replace(/\/\/+/g, "/"), $S = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        jS = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
        RS = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

    function NS(e) {
        return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
    }

    /**
     * React Router v6.9.0
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */function AS(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }

    const FS = typeof Object.is == "function" ? Object.is : AS, {
        useState: bS,
        useEffect: LS,
        useLayoutEffect: DS,
        useDebugValue: IS
    } = hs;

    function MS(e, t, n) {
        const r = t(), [{inst: i}, o] = bS({inst: {value: r, getSnapshot: t}});
        return DS(() => {
            i.value = r, i.getSnapshot = t, rs(i) && o({inst: i})
        }, [e, r, t]), LS(() => (rs(i) && o({inst: i}), e(() => {
            rs(i) && o({inst: i})
        })), [e]), IS(r), r
    }

    function rs(e) {
        const t = e.getSnapshot, n = e.value;
        try {
            const r = t();
            return !FS(n, r)
        } catch {
            return !0
        }
    }

    function zS(e, t, n) {
        return t()
    }

    const US = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
        BS = !US, VS = BS ? zS : MS;
    "useSyncExternalStore" in hs && (e => e.useSyncExternalStore)(hs);
    const vy = E.createContext(null), gy = E.createContext(null), Vc = E.createContext(null),
        ru = E.createContext(null), Wi = E.createContext({outlet: null, matches: []}), wy = E.createContext(null);

    function ga() {
        return ga = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, ga.apply(this, arguments)
    }

    function iu() {
        return E.useContext(ru) != null
    }

    function Sy() {
        return iu() || ye(!1), E.useContext(ru).location
    }

    function Ey() {
        iu() || ye(!1);
        let {basename: e, navigator: t} = E.useContext(Vc), {matches: n} = E.useContext(Wi), {pathname: r} = Sy(),
            i = JSON.stringify(TS(n).map(u => u.pathnameBase)), o = E.useRef(!1);
        return E.useEffect(() => {
            o.current = !0
        }), E.useCallback(function (u, s) {
            if (s === void 0 && (s = {}), !o.current) return;
            if (typeof u == "number") {
                t.go(u);
                return
            }
            let a = PS(u, JSON.parse(i), r, s.relative === "path");
            e !== "/" && (a.pathname = a.pathname === "/" ? e : bn([e, a.pathname])), (s.replace ? t.replace : t.push)(a, s.state, s)
        }, [e, t, i, r])
    }

    function HS(e, t) {
        iu() || ye(!1);
        let {navigator: n} = E.useContext(Vc), r = E.useContext(gy), {matches: i} = E.useContext(Wi),
            o = i[i.length - 1], l = o ? o.params : {};
        o && o.pathname;
        let u = o ? o.pathnameBase : "/";
        o && o.route;
        let s = Sy(), a;
        if (t) {
            var c;
            let y = typeof t == "string" ? zr(t) : t;
            u === "/" || (c = y.pathname) != null && c.startsWith(u) || ye(!1), a = y
        } else a = s;
        let d = a.pathname || "/", f = u === "/" ? d : d.slice(u.length) || "/", v = cS(e, {pathname: f}),
            m = GS(v && v.map(y => Object.assign({}, y, {
                params: Object.assign({}, l, y.params),
                pathname: bn([u, n.encodeLocation ? n.encodeLocation(y.pathname).pathname : y.pathname]),
                pathnameBase: y.pathnameBase === "/" ? u : bn([u, n.encodeLocation ? n.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
            })), i, r || void 0);
        return t && m ? E.createElement(ru.Provider, {
            value: {
                location: ga({
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default"
                }, a), navigationType: Jt.Pop
            }
        }, m) : m
    }

    function WS() {
        let e = JS(), t = NS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
            n = e instanceof Error ? e.stack : null, i = {padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)"},
            o = null;
        return E.createElement(E.Fragment, null, E.createElement("h2", null, "Unexpected Application Error!"), E.createElement("h3", {style: {fontStyle: "italic"}}, t), n ? E.createElement("pre", {style: i}, n) : null, o)
    }

    class KS extends E.Component {
        constructor(t) {
            super(t), this.state = {location: t.location, error: t.error}
        }

        static getDerivedStateFromError(t) {
            return {error: t}
        }

        static getDerivedStateFromProps(t, n) {
            return n.location !== t.location ? {error: t.error, location: t.location} : {
                error: t.error || n.error,
                location: n.location
            }
        }

        componentDidCatch(t, n) {
            console.error("React Router caught the following error during render", t, n)
        }

        render() {
            return this.state.error ? E.createElement(Wi.Provider, {value: this.props.routeContext}, E.createElement(wy.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    }

    function QS(e) {
        let {routeContext: t, match: n, children: r} = e, i = E.useContext(vy);
        return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), E.createElement(Wi.Provider, {value: t}, r)
    }

    function GS(e, t, n) {
        if (t === void 0 && (t = []), e == null) if (n != null && n.errors) e = n.matches; else return null;
        let r = e, i = n == null ? void 0 : n.errors;
        if (i != null) {
            let o = r.findIndex(l => l.route.id && (i == null ? void 0 : i[l.route.id]));
            o >= 0 || ye(!1), r = r.slice(0, Math.min(r.length, o + 1))
        }
        return r.reduceRight((o, l, u) => {
            let s = l.route.id ? i == null ? void 0 : i[l.route.id] : null, a = null;
            n && (l.route.ErrorBoundary ? a = E.createElement(l.route.ErrorBoundary, null) : l.route.errorElement ? a = l.route.errorElement : a = E.createElement(WS, null));
            let c = t.concat(r.slice(0, u + 1)), d = () => {
                let f = o;
                return s ? f = a : l.route.Component ? f = E.createElement(l.route.Component, null) : l.route.element && (f = l.route.element), E.createElement(QS, {
                    match: l,
                    routeContext: {outlet: o, matches: c},
                    children: f
                })
            };
            return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0) ? E.createElement(KS, {
                location: n.location,
                component: a,
                error: s,
                children: d(),
                routeContext: {outlet: null, matches: c}
            }) : d()
        }, null)
    }

    var Wd;
    (function (e) {
        e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator"
    })(Wd || (Wd = {}));
    var pl;
    (function (e) {
        e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator"
    })(pl || (pl = {}));

    function qS(e) {
        let t = E.useContext(gy);
        return t || ye(!1), t
    }

    function YS(e) {
        let t = E.useContext(Wi);
        return t || ye(!1), t
    }

    function XS(e) {
        let t = YS(), n = t.matches[t.matches.length - 1];
        return n.route.id || ye(!1), n.route.id
    }

    function JS() {
        var e;
        let t = E.useContext(wy), n = qS(pl.UseRouteError), r = XS(pl.UseRouteError);
        return t || ((e = n.errors) == null ? void 0 : e[r])
    }

    function wa(e) {
        ye(!1)
    }

    function ZS(e) {
        let {
            basename: t = "/",
            children: n = null,
            location: r,
            navigationType: i = Jt.Pop,
            navigator: o,
            static: l = !1
        } = e;
        iu() && ye(!1);
        let u = t.replace(/^\/*/, "/"), s = E.useMemo(() => ({basename: u, navigator: o, static: l}), [u, o, l]);
        typeof r == "string" && (r = zr(r));
        let {pathname: a = "/", search: c = "", hash: d = "", state: f = null, key: v = "default"} = r,
            m = E.useMemo(() => {
                let y = yy(a, u);
                return y == null ? null : {
                    location: {pathname: y, search: c, hash: d, state: f, key: v},
                    navigationType: i
                }
            }, [u, a, c, d, f, v, i]);
        return m == null ? null : E.createElement(Vc.Provider, {value: s}, E.createElement(ru.Provider, {
            children: n,
            value: m
        }))
    }

    function eE(e) {
        let {children: t, location: n} = e, r = E.useContext(vy), i = r && !t ? r.router.routes : Sa(t);
        return HS(i, n)
    }

    var Kd;
    (function (e) {
        e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
    })(Kd || (Kd = {}));
    new Promise(() => {
    });

    function Sa(e, t) {
        t === void 0 && (t = []);
        let n = [];
        return E.Children.forEach(e, (r, i) => {
            if (!E.isValidElement(r)) return;
            if (r.type === E.Fragment) {
                n.push.apply(n, Sa(r.props.children, t));
                return
            }
            r.type !== wa && ye(!1), !r.props.index || !r.props.children || ye(!1);
            let o = [...t, i], l = {
                id: r.props.id || o.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy
            };
            r.props.children && (l.children = Sa(r.props.children, o)), n.push(l)
        }), n
    }

    /**
     * React Router DOM v6.9.0
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */function tE(e) {
        let {basename: t, children: n, window: r} = e, i = E.useRef();
        i.current == null && (i.current = uS({window: r, v5Compat: !0}));
        let o = i.current, [l, u] = E.useState({action: o.action, location: o.location});
        return E.useLayoutEffect(() => o.listen(u), [o]), E.createElement(ZS, {
            basename: t,
            children: n,
            location: l.location,
            navigationType: l.action,
            navigator: o
        })
    }

    var Qd;
    (function (e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
    })(Qd || (Qd = {}));
    var Gd;
    (function (e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
    })(Gd || (Gd = {}));
    const nE = () => {
        const [e, t] = E.useState(""), [n, r] = E.useState(!1), i = Ey(), o = E.useCallback(() => {
            i("/createNewProduct/")
        }, []);
        return k.jsxs("div", {
            className: "ShopWrapper",
            children: [k.jsxs("div", {
                className: "headerShopWrapper",
                children: [k.jsx(h1, {}), k.jsx(m1, {setValueSearch: t, valueSearch: e})]
            }), k.jsx(lS, {
                valueSearch: e,
                isReverse: n,
                setIsReverse: r
            }), k.jsx("button", {className: "createNewProductBtn", onClick: o, children: "Add product"})]
        })
    };
    var qd = Array.isArray, Yd = Object.keys, rE = Object.prototype.hasOwnProperty, iE = typeof Element < "u";

    function Ea(e, t) {
        if (e === t) return !0;
        if (e && t && typeof e == "object" && typeof t == "object") {
            var n = qd(e), r = qd(t), i, o, l;
            if (n && r) {
                if (o = e.length, o != t.length) return !1;
                for (i = o; i-- !== 0;) if (!Ea(e[i], t[i])) return !1;
                return !0
            }
            if (n != r) return !1;
            var u = e instanceof Date, s = t instanceof Date;
            if (u != s) return !1;
            if (u && s) return e.getTime() == t.getTime();
            var a = e instanceof RegExp, c = t instanceof RegExp;
            if (a != c) return !1;
            if (a && c) return e.toString() == t.toString();
            var d = Yd(e);
            if (o = d.length, o !== Yd(t).length) return !1;
            for (i = o; i-- !== 0;) if (!rE.call(t, d[i])) return !1;
            if (iE && e instanceof Element && t instanceof Element) return e === t;
            for (i = o; i-- !== 0;) if (l = d[i], !(l === "_owner" && e.$$typeof) && !Ea(e[l], t[l])) return !1;
            return !0
        }
        return e !== e && t !== t
    }

    var Pn = function (t, n) {
        try {
            return Ea(t, n)
        } catch (r) {
            if (r.message && r.message.match(/stack|recursion/i) || r.number === -2146828260) return console.warn("Warning: react-fast-compare does not handle circular references.", r.name, r.message), !1;
            throw r
        }
    }, oE = function (t) {
        return lE(t) && !uE(t)
    };

    function lE(e) {
        return !!e && typeof e == "object"
    }

    function uE(e) {
        var t = Object.prototype.toString.call(e);
        return t === "[object RegExp]" || t === "[object Date]" || cE(e)
    }

    var sE = typeof Symbol == "function" && Symbol.for, aE = sE ? Symbol.for("react.element") : 60103;

    function cE(e) {
        return e.$$typeof === aE
    }

    function fE(e) {
        return Array.isArray(e) ? [] : {}
    }

    function hl(e, t) {
        return t.clone !== !1 && t.isMergeableObject(e) ? Li(fE(e), e, t) : e
    }

    function dE(e, t, n) {
        return e.concat(t).map(function (r) {
            return hl(r, n)
        })
    }

    function pE(e, t, n) {
        var r = {};
        return n.isMergeableObject(e) && Object.keys(e).forEach(function (i) {
            r[i] = hl(e[i], n)
        }), Object.keys(t).forEach(function (i) {
            !n.isMergeableObject(t[i]) || !e[i] ? r[i] = hl(t[i], n) : r[i] = Li(e[i], t[i], n)
        }), r
    }

    function Li(e, t, n) {
        n = n || {}, n.arrayMerge = n.arrayMerge || dE, n.isMergeableObject = n.isMergeableObject || oE;
        var r = Array.isArray(t), i = Array.isArray(e), o = r === i;
        return o ? r ? n.arrayMerge(e, t, n) : pE(e, t, n) : hl(t, n)
    }

    Li.all = function (t, n) {
        if (!Array.isArray(t)) throw new Error("first argument should be an array");
        return t.reduce(function (r, i) {
            return Li(r, i, n)
        }, {})
    };
    var xa = Li, hE = typeof global == "object" && global && global.Object === Object && global;
    const xy = hE;
    var mE = typeof self == "object" && self && self.Object === Object && self,
        yE = xy || mE || Function("return this")();
    const Ot = yE;
    var vE = Ot.Symbol;
    const hn = vE;
    var _y = Object.prototype, gE = _y.hasOwnProperty, wE = _y.toString, Xr = hn ? hn.toStringTag : void 0;

    function SE(e) {
        var t = gE.call(e, Xr), n = e[Xr];
        try {
            e[Xr] = void 0;
            var r = !0
        } catch {
        }
        var i = wE.call(e);
        return r && (t ? e[Xr] = n : delete e[Xr]), i
    }

    var EE = Object.prototype, xE = EE.toString;

    function _E(e) {
        return xE.call(e)
    }

    var CE = "[object Null]", OE = "[object Undefined]", Xd = hn ? hn.toStringTag : void 0;

    function Qn(e) {
        return e == null ? e === void 0 ? OE : CE : Xd && Xd in Object(e) ? SE(e) : _E(e)
    }

    function Cy(e, t) {
        return function (n) {
            return e(t(n))
        }
    }

    var kE = Cy(Object.getPrototypeOf, Object);
    const Hc = kE;

    function Gn(e) {
        return e != null && typeof e == "object"
    }

    var TE = "[object Object]", PE = Function.prototype, $E = Object.prototype, Oy = PE.toString,
        jE = $E.hasOwnProperty, RE = Oy.call(Object);

    function Jd(e) {
        if (!Gn(e) || Qn(e) != TE) return !1;
        var t = Hc(e);
        if (t === null) return !0;
        var n = jE.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && Oy.call(n) == RE
    }

    function NE() {
        this.__data__ = [], this.size = 0
    }

    function ky(e, t) {
        return e === t || e !== e && t !== t
    }

    function ou(e, t) {
        for (var n = e.length; n--;) if (ky(e[n][0], t)) return n;
        return -1
    }

    var AE = Array.prototype, FE = AE.splice;

    function bE(e) {
        var t = this.__data__, n = ou(t, e);
        if (n < 0) return !1;
        var r = t.length - 1;
        return n == r ? t.pop() : FE.call(t, n, 1), --this.size, !0
    }

    function LE(e) {
        var t = this.__data__, n = ou(t, e);
        return n < 0 ? void 0 : t[n][1]
    }

    function DE(e) {
        return ou(this.__data__, e) > -1
    }

    function IE(e, t) {
        var n = this.__data__, r = ou(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
    }

    function zt(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    zt.prototype.clear = NE;
    zt.prototype.delete = bE;
    zt.prototype.get = LE;
    zt.prototype.has = DE;
    zt.prototype.set = IE;

    function ME() {
        this.__data__ = new zt, this.size = 0
    }

    function zE(e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n
    }

    function UE(e) {
        return this.__data__.get(e)
    }

    function BE(e) {
        return this.__data__.has(e)
    }

    function Ki(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }

    var VE = "[object AsyncFunction]", HE = "[object Function]", WE = "[object GeneratorFunction]",
        KE = "[object Proxy]";

    function Ty(e) {
        if (!Ki(e)) return !1;
        var t = Qn(e);
        return t == HE || t == WE || t == VE || t == KE
    }

    var QE = Ot["__core-js_shared__"];
    const is = QE;
    var Zd = function () {
        var e = /[^.]+$/.exec(is && is.keys && is.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }();

    function GE(e) {
        return !!Zd && Zd in e
    }

    var qE = Function.prototype, YE = qE.toString;

    function qn(e) {
        if (e != null) {
            try {
                return YE.call(e)
            } catch {
            }
            try {
                return e + ""
            } catch {
            }
        }
        return ""
    }

    var XE = /[\\^$.*+?()[\]{}|]/g, JE = /^\[object .+?Constructor\]$/, ZE = Function.prototype, ex = Object.prototype,
        tx = ZE.toString, nx = ex.hasOwnProperty,
        rx = RegExp("^" + tx.call(nx).replace(XE, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function ix(e) {
        if (!Ki(e) || GE(e)) return !1;
        var t = Ty(e) ? rx : JE;
        return t.test(qn(e))
    }

    function ox(e, t) {
        return e == null ? void 0 : e[t]
    }

    function Yn(e, t) {
        var n = ox(e, t);
        return ix(n) ? n : void 0
    }

    var lx = Yn(Ot, "Map");
    const Di = lx;
    var ux = Yn(Object, "create");
    const Ii = ux;

    function sx() {
        this.__data__ = Ii ? Ii(null) : {}, this.size = 0
    }

    function ax(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }

    var cx = "__lodash_hash_undefined__", fx = Object.prototype, dx = fx.hasOwnProperty;

    function px(e) {
        var t = this.__data__;
        if (Ii) {
            var n = t[e];
            return n === cx ? void 0 : n
        }
        return dx.call(t, e) ? t[e] : void 0
    }

    var hx = Object.prototype, mx = hx.hasOwnProperty;

    function yx(e) {
        var t = this.__data__;
        return Ii ? t[e] !== void 0 : mx.call(t, e)
    }

    var vx = "__lodash_hash_undefined__";

    function gx(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = Ii && t === void 0 ? vx : t, this
    }

    function Hn(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    Hn.prototype.clear = sx;
    Hn.prototype.delete = ax;
    Hn.prototype.get = px;
    Hn.prototype.has = yx;
    Hn.prototype.set = gx;

    function wx() {
        this.size = 0, this.__data__ = {hash: new Hn, map: new (Di || zt), string: new Hn}
    }

    function Sx(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }

    function lu(e, t) {
        var n = e.__data__;
        return Sx(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
    }

    function Ex(e) {
        var t = lu(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }

    function xx(e) {
        return lu(this, e).get(e)
    }

    function _x(e) {
        return lu(this, e).has(e)
    }

    function Cx(e, t) {
        var n = lu(this, e), r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
    }

    function wn(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    wn.prototype.clear = wx;
    wn.prototype.delete = Ex;
    wn.prototype.get = xx;
    wn.prototype.has = _x;
    wn.prototype.set = Cx;
    var Ox = 200;

    function kx(e, t) {
        var n = this.__data__;
        if (n instanceof zt) {
            var r = n.__data__;
            if (!Di || r.length < Ox - 1) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new wn(r)
        }
        return n.set(e, t), this.size = n.size, this
    }

    function Ur(e) {
        var t = this.__data__ = new zt(e);
        this.size = t.size
    }

    Ur.prototype.clear = ME;
    Ur.prototype.delete = zE;
    Ur.prototype.get = UE;
    Ur.prototype.has = BE;
    Ur.prototype.set = kx;

    function Tx(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;) ;
        return e
    }

    var Px = function () {
        try {
            var e = Yn(Object, "defineProperty");
            return e({}, "", {}), e
        } catch {
        }
    }();
    const ep = Px;

    function Py(e, t, n) {
        t == "__proto__" && ep ? ep(e, t, {configurable: !0, enumerable: !0, value: n, writable: !0}) : e[t] = n
    }

    var $x = Object.prototype, jx = $x.hasOwnProperty;

    function $y(e, t, n) {
        var r = e[t];
        (!(jx.call(e, t) && ky(r, n)) || n === void 0 && !(t in e)) && Py(e, t, n)
    }

    function uu(e, t, n, r) {
        var i = !n;
        n || (n = {});
        for (var o = -1, l = t.length; ++o < l;) {
            var u = t[o], s = r ? r(n[u], e[u], u, n, e) : void 0;
            s === void 0 && (s = e[u]), i ? Py(n, u, s) : $y(n, u, s)
        }
        return n
    }

    function Rx(e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r
    }

    var Nx = "[object Arguments]";

    function tp(e) {
        return Gn(e) && Qn(e) == Nx
    }

    var jy = Object.prototype, Ax = jy.hasOwnProperty, Fx = jy.propertyIsEnumerable, bx = tp(function () {
        return arguments
    }()) ? tp : function (e) {
        return Gn(e) && Ax.call(e, "callee") && !Fx.call(e, "callee")
    };
    const Lx = bx;
    var Dx = Array.isArray;
    const Qi = Dx;

    function Ix() {
        return !1
    }

    var Ry = typeof ze == "object" && ze && !ze.nodeType && ze,
        np = Ry && typeof Ue == "object" && Ue && !Ue.nodeType && Ue, Mx = np && np.exports === Ry,
        rp = Mx ? Ot.Buffer : void 0, zx = rp ? rp.isBuffer : void 0, Ux = zx || Ix;
    const Ny = Ux;
    var Bx = 9007199254740991, Vx = /^(?:0|[1-9]\d*)$/;

    function Hx(e, t) {
        var n = typeof e;
        return t = t ?? Bx, !!t && (n == "number" || n != "symbol" && Vx.test(e)) && e > -1 && e % 1 == 0 && e < t
    }

    var Wx = 9007199254740991;

    function Ay(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Wx
    }

    var Kx = "[object Arguments]", Qx = "[object Array]", Gx = "[object Boolean]", qx = "[object Date]",
        Yx = "[object Error]", Xx = "[object Function]", Jx = "[object Map]", Zx = "[object Number]",
        e_ = "[object Object]", t_ = "[object RegExp]", n_ = "[object Set]", r_ = "[object String]",
        i_ = "[object WeakMap]", o_ = "[object ArrayBuffer]", l_ = "[object DataView]", u_ = "[object Float32Array]",
        s_ = "[object Float64Array]", a_ = "[object Int8Array]", c_ = "[object Int16Array]", f_ = "[object Int32Array]",
        d_ = "[object Uint8Array]", p_ = "[object Uint8ClampedArray]", h_ = "[object Uint16Array]",
        m_ = "[object Uint32Array]", X = {};
    X[u_] = X[s_] = X[a_] = X[c_] = X[f_] = X[d_] = X[p_] = X[h_] = X[m_] = !0;
    X[Kx] = X[Qx] = X[o_] = X[Gx] = X[l_] = X[qx] = X[Yx] = X[Xx] = X[Jx] = X[Zx] = X[e_] = X[t_] = X[n_] = X[r_] = X[i_] = !1;

    function y_(e) {
        return Gn(e) && Ay(e.length) && !!X[Qn(e)]
    }

    function Wc(e) {
        return function (t) {
            return e(t)
        }
    }

    var Fy = typeof ze == "object" && ze && !ze.nodeType && ze,
        hi = Fy && typeof Ue == "object" && Ue && !Ue.nodeType && Ue, v_ = hi && hi.exports === Fy,
        os = v_ && xy.process, g_ = function () {
            try {
                var e = hi && hi.require && hi.require("util").types;
                return e || os && os.binding && os.binding("util")
            } catch {
            }
        }();
    const Fr = g_;
    var ip = Fr && Fr.isTypedArray, w_ = ip ? Wc(ip) : y_;
    const S_ = w_;
    var E_ = Object.prototype, x_ = E_.hasOwnProperty;

    function by(e, t) {
        var n = Qi(e), r = !n && Lx(e), i = !n && !r && Ny(e), o = !n && !r && !i && S_(e), l = n || r || i || o,
            u = l ? Rx(e.length, String) : [], s = u.length;
        for (var a in e) (t || x_.call(e, a)) && !(l && (a == "length" || i && (a == "offset" || a == "parent") || o && (a == "buffer" || a == "byteLength" || a == "byteOffset") || Hx(a, s))) && u.push(a);
        return u
    }

    var __ = Object.prototype;

    function Kc(e) {
        var t = e && e.constructor, n = typeof t == "function" && t.prototype || __;
        return e === n
    }

    var C_ = Cy(Object.keys, Object);
    const O_ = C_;
    var k_ = Object.prototype, T_ = k_.hasOwnProperty;

    function P_(e) {
        if (!Kc(e)) return O_(e);
        var t = [];
        for (var n in Object(e)) T_.call(e, n) && n != "constructor" && t.push(n);
        return t
    }

    function Ly(e) {
        return e != null && Ay(e.length) && !Ty(e)
    }

    function Qc(e) {
        return Ly(e) ? by(e) : P_(e)
    }

    function $_(e, t) {
        return e && uu(t, Qc(t), e)
    }

    function j_(e) {
        var t = [];
        if (e != null) for (var n in Object(e)) t.push(n);
        return t
    }

    var R_ = Object.prototype, N_ = R_.hasOwnProperty;

    function A_(e) {
        if (!Ki(e)) return j_(e);
        var t = Kc(e), n = [];
        for (var r in e) r == "constructor" && (t || !N_.call(e, r)) || n.push(r);
        return n
    }

    function Gc(e) {
        return Ly(e) ? by(e, !0) : A_(e)
    }

    function F_(e, t) {
        return e && uu(t, Gc(t), e)
    }

    var Dy = typeof ze == "object" && ze && !ze.nodeType && ze,
        op = Dy && typeof Ue == "object" && Ue && !Ue.nodeType && Ue, b_ = op && op.exports === Dy,
        lp = b_ ? Ot.Buffer : void 0, up = lp ? lp.allocUnsafe : void 0;

    function L_(e, t) {
        if (t) return e.slice();
        var n = e.length, r = up ? up(n) : new e.constructor(n);
        return e.copy(r), r
    }

    function Iy(e, t) {
        var n = -1, r = e.length;
        for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
        return t
    }

    function D_(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r;) {
            var l = e[n];
            t(l, n, e) && (o[i++] = l)
        }
        return o
    }

    function My() {
        return []
    }

    var I_ = Object.prototype, M_ = I_.propertyIsEnumerable, sp = Object.getOwnPropertySymbols, z_ = sp ? function (e) {
        return e == null ? [] : (e = Object(e), D_(sp(e), function (t) {
            return M_.call(e, t)
        }))
    } : My;
    const qc = z_;

    function U_(e, t) {
        return uu(e, qc(e), t)
    }

    function zy(e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
        return e
    }

    var B_ = Object.getOwnPropertySymbols, V_ = B_ ? function (e) {
        for (var t = []; e;) zy(t, qc(e)), e = Hc(e);
        return t
    } : My;
    const Uy = V_;

    function H_(e, t) {
        return uu(e, Uy(e), t)
    }

    function By(e, t, n) {
        var r = t(e);
        return Qi(e) ? r : zy(r, n(e))
    }

    function W_(e) {
        return By(e, Qc, qc)
    }

    function K_(e) {
        return By(e, Gc, Uy)
    }

    var Q_ = Yn(Ot, "DataView");
    const _a = Q_;
    var G_ = Yn(Ot, "Promise");
    const Ca = G_;
    var q_ = Yn(Ot, "Set");
    const Oa = q_;
    var Y_ = Yn(Ot, "WeakMap");
    const ka = Y_;
    var ap = "[object Map]", X_ = "[object Object]", cp = "[object Promise]", fp = "[object Set]",
        dp = "[object WeakMap]", pp = "[object DataView]", J_ = qn(_a), Z_ = qn(Di), e2 = qn(Ca), t2 = qn(Oa),
        n2 = qn(ka), $n = Qn;
    (_a && $n(new _a(new ArrayBuffer(1))) != pp || Di && $n(new Di) != ap || Ca && $n(Ca.resolve()) != cp || Oa && $n(new Oa) != fp || ka && $n(new ka) != dp) && ($n = function (e) {
        var t = Qn(e), n = t == X_ ? e.constructor : void 0, r = n ? qn(n) : "";
        if (r) switch (r) {
            case J_:
                return pp;
            case Z_:
                return ap;
            case e2:
                return cp;
            case t2:
                return fp;
            case n2:
                return dp
        }
        return t
    });
    const Yc = $n;
    var r2 = Object.prototype, i2 = r2.hasOwnProperty;

    function o2(e) {
        var t = e.length, n = new e.constructor(t);
        return t && typeof e[0] == "string" && i2.call(e, "index") && (n.index = e.index, n.input = e.input), n
    }

    var l2 = Ot.Uint8Array;
    const hp = l2;

    function Xc(e) {
        var t = new e.constructor(e.byteLength);
        return new hp(t).set(new hp(e)), t
    }

    function u2(e, t) {
        var n = t ? Xc(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength)
    }

    var s2 = /\w*$/;

    function a2(e) {
        var t = new e.constructor(e.source, s2.exec(e));
        return t.lastIndex = e.lastIndex, t
    }

    var mp = hn ? hn.prototype : void 0, yp = mp ? mp.valueOf : void 0;

    function c2(e) {
        return yp ? Object(yp.call(e)) : {}
    }

    function f2(e, t) {
        var n = t ? Xc(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
    }

    var d2 = "[object Boolean]", p2 = "[object Date]", h2 = "[object Map]", m2 = "[object Number]",
        y2 = "[object RegExp]", v2 = "[object Set]", g2 = "[object String]", w2 = "[object Symbol]",
        S2 = "[object ArrayBuffer]", E2 = "[object DataView]", x2 = "[object Float32Array]",
        _2 = "[object Float64Array]", C2 = "[object Int8Array]", O2 = "[object Int16Array]", k2 = "[object Int32Array]",
        T2 = "[object Uint8Array]", P2 = "[object Uint8ClampedArray]", $2 = "[object Uint16Array]",
        j2 = "[object Uint32Array]";

    function R2(e, t, n) {
        var r = e.constructor;
        switch (t) {
            case S2:
                return Xc(e);
            case d2:
            case p2:
                return new r(+e);
            case E2:
                return u2(e, n);
            case x2:
            case _2:
            case C2:
            case O2:
            case k2:
            case T2:
            case P2:
            case $2:
            case j2:
                return f2(e, n);
            case h2:
                return new r;
            case m2:
            case g2:
                return new r(e);
            case y2:
                return a2(e);
            case v2:
                return new r;
            case w2:
                return c2(e)
        }
    }

    var vp = Object.create, N2 = function () {
        function e() {
        }

        return function (t) {
            if (!Ki(t)) return {};
            if (vp) return vp(t);
            e.prototype = t;
            var n = new e;
            return e.prototype = void 0, n
        }
    }();
    const A2 = N2;

    function F2(e) {
        return typeof e.constructor == "function" && !Kc(e) ? A2(Hc(e)) : {}
    }

    var b2 = "[object Map]";

    function L2(e) {
        return Gn(e) && Yc(e) == b2
    }

    var gp = Fr && Fr.isMap, D2 = gp ? Wc(gp) : L2;
    const I2 = D2;
    var M2 = "[object Set]";

    function z2(e) {
        return Gn(e) && Yc(e) == M2
    }

    var wp = Fr && Fr.isSet, U2 = wp ? Wc(wp) : z2;
    const B2 = U2;
    var V2 = 1, H2 = 2, W2 = 4, Vy = "[object Arguments]", K2 = "[object Array]", Q2 = "[object Boolean]",
        G2 = "[object Date]", q2 = "[object Error]", Hy = "[object Function]", Y2 = "[object GeneratorFunction]",
        X2 = "[object Map]", J2 = "[object Number]", Wy = "[object Object]", Z2 = "[object RegExp]",
        eC = "[object Set]", tC = "[object String]", nC = "[object Symbol]", rC = "[object WeakMap]",
        iC = "[object ArrayBuffer]", oC = "[object DataView]", lC = "[object Float32Array]",
        uC = "[object Float64Array]", sC = "[object Int8Array]", aC = "[object Int16Array]", cC = "[object Int32Array]",
        fC = "[object Uint8Array]", dC = "[object Uint8ClampedArray]", pC = "[object Uint16Array]",
        hC = "[object Uint32Array]", G = {};
    G[Vy] = G[K2] = G[iC] = G[oC] = G[Q2] = G[G2] = G[lC] = G[uC] = G[sC] = G[aC] = G[cC] = G[X2] = G[J2] = G[Wy] = G[Z2] = G[eC] = G[tC] = G[nC] = G[fC] = G[dC] = G[pC] = G[hC] = !0;
    G[q2] = G[Hy] = G[rC] = !1;

    function $o(e, t, n, r, i, o) {
        var l, u = t & V2, s = t & H2, a = t & W2;
        if (n && (l = i ? n(e, r, i, o) : n(e)), l !== void 0) return l;
        if (!Ki(e)) return e;
        var c = Qi(e);
        if (c) {
            if (l = o2(e), !u) return Iy(e, l)
        } else {
            var d = Yc(e), f = d == Hy || d == Y2;
            if (Ny(e)) return L_(e, u);
            if (d == Wy || d == Vy || f && !i) {
                if (l = s || f ? {} : F2(e), !u) return s ? H_(e, F_(l, e)) : U_(e, $_(l, e))
            } else {
                if (!G[d]) return i ? e : {};
                l = R2(e, d, u)
            }
        }
        o || (o = new Ur);
        var v = o.get(e);
        if (v) return v;
        o.set(e, l), B2(e) ? e.forEach(function (x) {
            l.add($o(x, t, n, x, e, o))
        }) : I2(e) && e.forEach(function (x, h) {
            l.set(h, $o(x, t, n, h, e, o))
        });
        var m = a ? s ? K_ : W_ : s ? Gc : Qc, y = c ? void 0 : m(e);
        return Tx(y || e, function (x, h) {
            y && (h = x, x = e[h]), $y(l, h, $o(x, t, n, h, e, o))
        }), l
    }

    var mC = 4;

    function Sp(e) {
        return $o(e, mC)
    }

    function Ky(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
        return i
    }

    var yC = "[object Symbol]";

    function Jc(e) {
        return typeof e == "symbol" || Gn(e) && Qn(e) == yC
    }

    var vC = "Expected a function";

    function Zc(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(vC);
        var n = function () {
            var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
            if (o.has(i)) return o.get(i);
            var l = e.apply(this, r);
            return n.cache = o.set(i, l) || o, l
        };
        return n.cache = new (Zc.Cache || wn), n
    }

    Zc.Cache = wn;
    var gC = 500;

    function wC(e) {
        var t = Zc(e, function (r) {
            return n.size === gC && n.clear(), r
        }), n = t.cache;
        return t
    }

    var SC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        EC = /\\(\\)?/g, xC = wC(function (e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(SC, function (n, r, i, o) {
                t.push(i ? o.replace(EC, "$1") : r || n)
            }), t
        });
    const _C = xC;
    var CC = 1 / 0;

    function OC(e) {
        if (typeof e == "string" || Jc(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -CC ? "-0" : t
    }

    var kC = 1 / 0, Ep = hn ? hn.prototype : void 0, xp = Ep ? Ep.toString : void 0;

    function Qy(e) {
        if (typeof e == "string") return e;
        if (Qi(e)) return Ky(e, Qy) + "";
        if (Jc(e)) return xp ? xp.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -kC ? "-0" : t
    }

    function TC(e) {
        return e == null ? "" : Qy(e)
    }

    function Gy(e) {
        return Qi(e) ? Ky(e, OC) : Jc(e) ? [e] : Iy(_C(TC(e)))
    }

    var PC = !0;

    function $C(e, t) {
        if (!PC) {
            if (e) return;
            var n = "Warning: " + t;
            typeof console < "u" && console.warn(n);
            try {
                throw Error(n)
            } catch {
            }
        }
    }

    function ee() {
        return ee = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, ee.apply(this, arguments)
    }

    function mr(e, t) {
        if (e == null) return {};
        var n = {}, r = Object.keys(e), i, o;
        for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
        return n
    }

    var Le = function (t) {
        return typeof t == "function"
    }, su = function (t) {
        return t !== null && typeof t == "object"
    }, jC = function (t) {
        return String(Math.floor(Number(t))) === t
    }, ls = function (t) {
        return Object.prototype.toString.call(t) === "[object String]"
    }, RC = function (t) {
        return E.Children.count(t) === 0
    }, us = function (t) {
        return su(t) && Le(t.then)
    };

    function qe(e, t, n, r) {
        r === void 0 && (r = 0);
        for (var i = Gy(t); e && r < i.length;) e = e[i[r++]];
        return e === void 0 ? n : e
    }

    function Ln(e, t, n) {
        for (var r = Sp(e), i = r, o = 0, l = Gy(t); o < l.length - 1; o++) {
            var u = l[o], s = qe(e, l.slice(0, o + 1));
            if (s && (su(s) || Array.isArray(s))) i = i[u] = Sp(s); else {
                var a = l[o + 1];
                i = i[u] = jC(a) && Number(a) >= 0 ? [] : {}
            }
        }
        return (o === 0 ? e : i)[l[o]] === n ? e : (n === void 0 ? delete i[l[o]] : i[l[o]] = n, o === 0 && n === void 0 && delete r[l[o]], r)
    }

    function qy(e, t, n, r) {
        n === void 0 && (n = new WeakMap), r === void 0 && (r = {});
        for (var i = 0, o = Object.keys(e); i < o.length; i++) {
            var l = o[i], u = e[l];
            su(u) ? n.get(u) || (n.set(u, !0), r[l] = Array.isArray(u) ? [] : {}, qy(u, t, n, r[l])) : r[l] = t
        }
        return r
    }

    var au = E.createContext(void 0);
    au.displayName = "FormikContext";
    var NC = au.Provider;
    au.Consumer;

    function Yy() {
        var e = E.useContext(au);
        return e || $C(!1), e
    }

    function AC(e, t) {
        switch (t.type) {
            case"SET_VALUES":
                return ee({}, e, {values: t.payload});
            case"SET_TOUCHED":
                return ee({}, e, {touched: t.payload});
            case"SET_ERRORS":
                return Pn(e.errors, t.payload) ? e : ee({}, e, {errors: t.payload});
            case"SET_STATUS":
                return ee({}, e, {status: t.payload});
            case"SET_ISSUBMITTING":
                return ee({}, e, {isSubmitting: t.payload});
            case"SET_ISVALIDATING":
                return ee({}, e, {isValidating: t.payload});
            case"SET_FIELD_VALUE":
                return ee({}, e, {values: Ln(e.values, t.payload.field, t.payload.value)});
            case"SET_FIELD_TOUCHED":
                return ee({}, e, {touched: Ln(e.touched, t.payload.field, t.payload.value)});
            case"SET_FIELD_ERROR":
                return ee({}, e, {errors: Ln(e.errors, t.payload.field, t.payload.value)});
            case"RESET_FORM":
                return ee({}, e, t.payload);
            case"SET_FORMIK_STATE":
                return t.payload(e);
            case"SUBMIT_ATTEMPT":
                return ee({}, e, {touched: qy(e.values, !0), isSubmitting: !0, submitCount: e.submitCount + 1});
            case"SUBMIT_FAILURE":
                return ee({}, e, {isSubmitting: !1});
            case"SUBMIT_SUCCESS":
                return ee({}, e, {isSubmitting: !1});
            default:
                return e
        }
    }

    var _n = {}, mo = {};

    function FC(e) {
        var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r,
            o = e.validateOnMount, l = o === void 0 ? !1 : o, u = e.isInitialValid, s = e.enableReinitialize,
            a = s === void 0 ? !1 : s, c = e.onSubmit,
            d = mr(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]),
            f = ee({validateOnChange: n, validateOnBlur: i, validateOnMount: l, onSubmit: c}, d),
            v = E.useRef(f.initialValues), m = E.useRef(f.initialErrors || _n), y = E.useRef(f.initialTouched || mo),
            x = E.useRef(f.initialStatus), h = E.useRef(!1), p = E.useRef({});
        E.useEffect(function () {
            return h.current = !0, function () {
                h.current = !1
            }
        }, []);
        var g = E.useReducer(AC, {
            values: f.initialValues,
            errors: f.initialErrors || _n,
            touched: f.initialTouched || mo,
            status: f.initialStatus,
            isSubmitting: !1,
            isValidating: !1,
            submitCount: 0
        }), w = g[0], C = g[1], T = E.useCallback(function (S, A) {
            return new Promise(function (F, b) {
                var I = f.validate(S, A);
                I == null ? F(_n) : us(I) ? I.then(function (H) {
                    F(H || _n)
                }, function (H) {
                    b(H)
                }) : F(I)
            })
        }, [f.validate]), P = E.useCallback(function (S, A) {
            var F = f.validationSchema, b = Le(F) ? F(A) : F, I = A && b.validateAt ? b.validateAt(A, S) : DC(S, b);
            return new Promise(function (H, pe) {
                I.then(function () {
                    H(_n)
                }, function (kt) {
                    kt.name === "ValidationError" ? H(LC(kt)) : pe(kt)
                })
            })
        }, [f.validationSchema]), N = E.useCallback(function (S, A) {
            return new Promise(function (F) {
                return F(p.current[S].validate(A))
            })
        }, []), U = E.useCallback(function (S) {
            var A = Object.keys(p.current).filter(function (b) {
                return Le(p.current[b].validate)
            }), F = A.length > 0 ? A.map(function (b) {
                return N(b, qe(S, b))
            }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
            return Promise.all(F).then(function (b) {
                return b.reduce(function (I, H, pe) {
                    return H === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || H && (I = Ln(I, A[pe], H)), I
                }, {})
            })
        }, [N]), $ = E.useCallback(function (S) {
            return Promise.all([U(S), f.validationSchema ? P(S) : {}, f.validate ? T(S) : {}]).then(function (A) {
                var F = A[0], b = A[1], I = A[2], H = xa.all([F, b, I], {arrayMerge: IC});
                return H
            })
        }, [f.validate, f.validationSchema, U, T, P]), M = Ge(function (S) {
            return S === void 0 && (S = w.values), C({type: "SET_ISVALIDATING", payload: !0}), $(S).then(function (A) {
                return h.current && (C({type: "SET_ISVALIDATING", payload: !1}), C({type: "SET_ERRORS", payload: A})), A
            })
        });
        E.useEffect(function () {
            l && h.current === !0 && Pn(v.current, f.initialValues) && M(v.current)
        }, [l, M]);
        var je = E.useCallback(function (S) {
            var A = S && S.values ? S.values : v.current,
                F = S && S.errors ? S.errors : m.current ? m.current : f.initialErrors || {},
                b = S && S.touched ? S.touched : y.current ? y.current : f.initialTouched || {},
                I = S && S.status ? S.status : x.current ? x.current : f.initialStatus;
            v.current = A, m.current = F, y.current = b, x.current = I;
            var H = function () {
                C({
                    type: "RESET_FORM",
                    payload: {
                        isSubmitting: !!S && !!S.isSubmitting,
                        errors: F,
                        touched: b,
                        status: I,
                        values: A,
                        isValidating: !!S && !!S.isValidating,
                        submitCount: S && S.submitCount && typeof S.submitCount == "number" ? S.submitCount : 0
                    }
                })
            };
            if (f.onReset) {
                var pe = f.onReset(w.values, pf);
                us(pe) ? pe.then(H) : H()
            } else H()
        }, [f.initialErrors, f.initialStatus, f.initialTouched]);
        E.useEffect(function () {
            h.current === !0 && !Pn(v.current, f.initialValues) && (a && (v.current = f.initialValues, je()), l && M(v.current))
        }, [a, f.initialValues, je, l, M]), E.useEffect(function () {
            a && h.current === !0 && !Pn(m.current, f.initialErrors) && (m.current = f.initialErrors || _n, C({
                type: "SET_ERRORS",
                payload: f.initialErrors || _n
            }))
        }, [a, f.initialErrors]), E.useEffect(function () {
            a && h.current === !0 && !Pn(y.current, f.initialTouched) && (y.current = f.initialTouched || mo, C({
                type: "SET_TOUCHED",
                payload: f.initialTouched || mo
            }))
        }, [a, f.initialTouched]), E.useEffect(function () {
            a && h.current === !0 && !Pn(x.current, f.initialStatus) && (x.current = f.initialStatus, C({
                type: "SET_STATUS",
                payload: f.initialStatus
            }))
        }, [a, f.initialStatus, f.initialTouched]);
        var rt = Ge(function (S) {
            if (p.current[S] && Le(p.current[S].validate)) {
                var A = qe(w.values, S), F = p.current[S].validate(A);
                return us(F) ? (C({type: "SET_ISVALIDATING", payload: !0}), F.then(function (b) {
                    return b
                }).then(function (b) {
                    C({type: "SET_FIELD_ERROR", payload: {field: S, value: b}}), C({
                        type: "SET_ISVALIDATING",
                        payload: !1
                    })
                })) : (C({type: "SET_FIELD_ERROR", payload: {field: S, value: F}}), Promise.resolve(F))
            } else if (f.validationSchema) return C({
                type: "SET_ISVALIDATING",
                payload: !0
            }), P(w.values, S).then(function (b) {
                return b
            }).then(function (b) {
                C({type: "SET_FIELD_ERROR", payload: {field: S, value: b[S]}}), C({
                    type: "SET_ISVALIDATING",
                    payload: !1
                })
            });
            return Promise.resolve()
        }), Yi = E.useCallback(function (S, A) {
            var F = A.validate;
            p.current[S] = {validate: F}
        }, []), vu = E.useCallback(function (S) {
            delete p.current[S]
        }, []), Zn = Ge(function (S, A) {
            C({type: "SET_TOUCHED", payload: S});
            var F = A === void 0 ? i : A;
            return F ? M(w.values) : Promise.resolve()
        }), er = E.useCallback(function (S) {
            C({type: "SET_ERRORS", payload: S})
        }, []), j = Ge(function (S, A) {
            var F = Le(S) ? S(w.values) : S;
            C({type: "SET_VALUES", payload: F});
            var b = A === void 0 ? n : A;
            return b ? M(F) : Promise.resolve()
        }), L = E.useCallback(function (S, A) {
            C({type: "SET_FIELD_ERROR", payload: {field: S, value: A}})
        }, []), D = Ge(function (S, A, F) {
            C({type: "SET_FIELD_VALUE", payload: {field: S, value: A}});
            var b = F === void 0 ? n : F;
            return b ? M(Ln(w.values, S, A)) : Promise.resolve()
        }), Z = E.useCallback(function (S, A) {
            var F = A, b = S, I;
            if (!ls(S)) {
                S.persist && S.persist();
                var H = S.target ? S.target : S.currentTarget, pe = H.type, kt = H.name, Su = H.id, Eu = H.value,
                    bv = H.checked, Xk = H.outerHTML, hf = H.options, Lv = H.multiple;
                F = A || kt || Su, b = /number|range/.test(pe) ? (I = parseFloat(Eu), isNaN(I) ? "" : I) : /checkbox/.test(pe) ? zC(qe(w.values, F), bv, Eu) : hf && Lv ? MC(hf) : Eu
            }
            F && D(F, b)
        }, [D, w.values]), le = Ge(function (S) {
            if (ls(S)) return function (A) {
                return Z(A, S)
            };
            Z(S)
        }), it = Ge(function (S, A, F) {
            A === void 0 && (A = !0), C({type: "SET_FIELD_TOUCHED", payload: {field: S, value: A}});
            var b = F === void 0 ? i : F;
            return b ? M(w.values) : Promise.resolve()
        }), mt = E.useCallback(function (S, A) {
            S.persist && S.persist();
            var F = S.target, b = F.name, I = F.id, H = F.outerHTML, pe = A || b || I;
            it(pe, !0)
        }, [it]), Sn = Ge(function (S) {
            if (ls(S)) return function (A) {
                return mt(A, S)
            };
            mt(S)
        }), yt = E.useCallback(function (S) {
            Le(S) ? C({type: "SET_FORMIK_STATE", payload: S}) : C({
                type: "SET_FORMIK_STATE", payload: function () {
                    return S
                }
            })
        }, []), En = E.useCallback(function (S) {
            C({type: "SET_STATUS", payload: S})
        }, []), df = E.useCallback(function (S) {
            C({type: "SET_ISSUBMITTING", payload: S})
        }, []), gu = Ge(function () {
            return C({type: "SUBMIT_ATTEMPT"}), M().then(function (S) {
                var A = S instanceof Error, F = !A && Object.keys(S).length === 0;
                if (F) {
                    var b;
                    try {
                        if (b = Pv(), b === void 0) return
                    } catch (I) {
                        throw I
                    }
                    return Promise.resolve(b).then(function (I) {
                        return h.current && C({type: "SUBMIT_SUCCESS"}), I
                    }).catch(function (I) {
                        if (h.current) throw C({type: "SUBMIT_FAILURE"}), I
                    })
                } else if (h.current && (C({type: "SUBMIT_FAILURE"}), A)) throw S
            })
        }), Tv = Ge(function (S) {
            S && S.preventDefault && Le(S.preventDefault) && S.preventDefault(), S && S.stopPropagation && Le(S.stopPropagation) && S.stopPropagation(), gu().catch(function (A) {
                console.warn("Warning: An unhandled error was caught from submitForm()", A)
            })
        }), pf = {
            resetForm: je,
            validateForm: M,
            validateField: rt,
            setErrors: er,
            setFieldError: L,
            setFieldTouched: it,
            setFieldValue: D,
            setStatus: En,
            setSubmitting: df,
            setTouched: Zn,
            setValues: j,
            setFormikState: yt,
            submitForm: gu
        }, Pv = Ge(function () {
            return c(w.values, pf)
        }), $v = Ge(function (S) {
            S && S.preventDefault && Le(S.preventDefault) && S.preventDefault(), S && S.stopPropagation && Le(S.stopPropagation) && S.stopPropagation(), je()
        }), jv = E.useCallback(function (S) {
            return {
                value: qe(w.values, S),
                error: qe(w.errors, S),
                touched: !!qe(w.touched, S),
                initialValue: qe(v.current, S),
                initialTouched: !!qe(y.current, S),
                initialError: qe(m.current, S)
            }
        }, [w.errors, w.touched, w.values]), Rv = E.useCallback(function (S) {
            return {
                setValue: function (F, b) {
                    return D(S, F, b)
                }, setTouched: function (F, b) {
                    return it(S, F, b)
                }, setError: function (F) {
                    return L(S, F)
                }
            }
        }, [D, it, L]), Nv = E.useCallback(function (S) {
            var A = su(S), F = A ? S.name : S, b = qe(w.values, F), I = {name: F, value: b, onChange: le, onBlur: Sn};
            if (A) {
                var H = S.type, pe = S.value, kt = S.as, Su = S.multiple;
                H === "checkbox" ? pe === void 0 ? I.checked = !!b : (I.checked = !!(Array.isArray(b) && ~b.indexOf(pe)), I.value = pe) : H === "radio" ? (I.checked = b === pe, I.value = pe) : kt === "select" && Su && (I.value = I.value || [], I.multiple = !0)
            }
            return I
        }, [Sn, le, w.values]), wu = E.useMemo(function () {
            return !Pn(v.current, w.values)
        }, [v.current, w.values]), Av = E.useMemo(function () {
            return typeof u < "u" ? wu ? w.errors && Object.keys(w.errors).length === 0 : u !== !1 && Le(u) ? u(f) : u : w.errors && Object.keys(w.errors).length === 0
        }, [u, wu, w.errors, f]), Fv = ee({}, w, {
            initialValues: v.current,
            initialErrors: m.current,
            initialTouched: y.current,
            initialStatus: x.current,
            handleBlur: Sn,
            handleChange: le,
            handleReset: $v,
            handleSubmit: Tv,
            resetForm: je,
            setErrors: er,
            setFormikState: yt,
            setFieldTouched: it,
            setFieldValue: D,
            setFieldError: L,
            setStatus: En,
            setSubmitting: df,
            setTouched: Zn,
            setValues: j,
            submitForm: gu,
            validateForm: M,
            validateField: rt,
            isValid: Av,
            dirty: wu,
            unregisterField: vu,
            registerField: Yi,
            getFieldProps: Nv,
            getFieldMeta: jv,
            getFieldHelpers: Rv,
            validateOnBlur: i,
            validateOnChange: n,
            validateOnMount: l
        });
        return Fv
    }

    function bC(e) {
        var t = FC(e), n = e.component, r = e.children, i = e.render, o = e.innerRef;
        return E.useImperativeHandle(o, function () {
            return t
        }), E.createElement(NC, {value: t}, n ? E.createElement(n, t) : i ? i(t) : r ? Le(r) ? r(t) : RC(r) ? null : E.Children.only(r) : null)
    }

    function LC(e) {
        var t = {};
        if (e.inner) {
            if (e.inner.length === 0) return Ln(t, e.path, e.message);
            for (var i = e.inner, n = Array.isArray(i), r = 0, i = n ? i : i[Symbol.iterator](); ;) {
                var o;
                if (n) {
                    if (r >= i.length) break;
                    o = i[r++]
                } else {
                    if (r = i.next(), r.done) break;
                    o = r.value
                }
                var l = o;
                qe(t, l.path) || (t = Ln(t, l.path, l.message))
            }
        }
        return t
    }

    function DC(e, t, n, r) {
        n === void 0 && (n = !1), r === void 0 && (r = {});
        var i = Ta(e);
        return t[n ? "validateSync" : "validate"](i, {abortEarly: !1, context: r})
    }

    function Ta(e) {
        var t = Array.isArray(e) ? [] : {};
        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = String(n);
            Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function (i) {
                return Array.isArray(i) === !0 || Jd(i) ? Ta(i) : i !== "" ? i : void 0
            }) : Jd(e[r]) ? t[r] = Ta(e[r]) : t[r] = e[r] !== "" ? e[r] : void 0
        }
        return t
    }

    function IC(e, t, n) {
        var r = e.slice();
        return t.forEach(function (o, l) {
            if (typeof r[l] > "u") {
                var u = n.clone !== !1, s = u && n.isMergeableObject(o);
                r[l] = s ? xa(Array.isArray(o) ? [] : {}, o, n) : o
            } else n.isMergeableObject(o) ? r[l] = xa(e[l], o, n) : e.indexOf(o) === -1 && r.push(o)
        }), r
    }

    function MC(e) {
        return Array.from(e).filter(function (t) {
            return t.selected
        }).map(function (t) {
            return t.value
        })
    }

    function zC(e, t, n) {
        if (typeof e == "boolean") return !!t;
        var r = [], i = !1, o = -1;
        if (Array.isArray(e)) r = e, o = e.indexOf(n), i = o >= 0; else if (!n || n == "true" || n == "false") return !!t;
        return t && n && !i ? r.concat(n) : i ? r.slice(0, o).concat(r.slice(o + 1)) : r
    }

    var UC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? E.useLayoutEffect : E.useEffect;

    function Ge(e) {
        var t = E.useRef(e);
        return UC(function () {
            t.current = e
        }), E.useCallback(function () {
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return t.current.apply(void 0, r)
        }, [])
    }

    function Cn(e) {
        var t = e.validate, n = e.name, r = e.render, i = e.children, o = e.as, l = e.component,
            u = mr(e, ["validate", "name", "render", "children", "as", "component"]), s = Yy(),
            a = mr(s, ["validate", "validationSchema"]), c = a.registerField, d = a.unregisterField;
        E.useEffect(function () {
            return c(n, {validate: t}), function () {
                d(n)
            }
        }, [c, d, n, t]);
        var f = a.getFieldProps(ee({name: n}, u)), v = a.getFieldMeta(n), m = {field: f, form: a};
        if (r) return r(ee({}, m, {meta: v}));
        if (Le(i)) return i(ee({}, m, {meta: v}));
        if (l) {
            if (typeof l == "string") {
                var y = u.innerRef, x = mr(u, ["innerRef"]);
                return E.createElement(l, ee({ref: y}, f, x), i)
            }
            return E.createElement(l, ee({field: f, form: a}, u), i)
        }
        var h = o || "input";
        if (typeof h == "string") {
            var p = u.innerRef, g = mr(u, ["innerRef"]);
            return E.createElement(h, ee({ref: p}, f, g), i)
        }
        return E.createElement(h, ee({}, f, u), i)
    }

    var Xy = E.forwardRef(function (e, t) {
        var n = e.action, r = mr(e, ["action"]), i = n ?? "#", o = Yy(), l = o.handleReset, u = o.handleSubmit;
        return E.createElement("form", Object.assign({onSubmit: u, ref: t, onReset: l, action: i}, r))
    });
    Xy.displayName = "Form";

    function Xn(e) {
        this._maxSize = e, this.clear()
    }

    Xn.prototype.clear = function () {
        this._size = 0, this._values = Object.create(null)
    };
    Xn.prototype.get = function (e) {
        return this._values[e]
    };
    Xn.prototype.set = function (e, t) {
        return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t
    };
    var BC = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Jy = /^\d+$/, VC = /^\d/, HC = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
        WC = /^\s*(['"]?)(.*?)(\1)\s*$/, ef = 512, _p = new Xn(ef), Cp = new Xn(ef), Op = new Xn(ef), Dn = {
            Cache: Xn, split: Pa, normalizePath: ss, setter: function (e) {
                var t = ss(e);
                return Cp.get(e) || Cp.set(e, function (r, i) {
                    for (var o = 0, l = t.length, u = r; o < l - 1;) {
                        var s = t[o];
                        if (s === "__proto__" || s === "constructor" || s === "prototype") return r;
                        u = u[t[o++]]
                    }
                    u[t[o]] = i
                })
            }, getter: function (e, t) {
                var n = ss(e);
                return Op.get(e) || Op.set(e, function (i) {
                    for (var o = 0, l = n.length; o < l;) if (i != null || !t) i = i[n[o++]]; else return;
                    return i
                })
            }, join: function (e) {
                return e.reduce(function (t, n) {
                    return t + (tf(n) || Jy.test(n) ? "[" + n + "]" : (t ? "." : "") + n)
                }, "")
            }, forEach: function (e, t, n) {
                KC(Array.isArray(e) ? e : Pa(e), t, n)
            }
        };

    function ss(e) {
        return _p.get(e) || _p.set(e, Pa(e).map(function (t) {
            return t.replace(WC, "$2")
        }))
    }

    function Pa(e) {
        return e.match(BC) || [""]
    }

    function KC(e, t, n) {
        var r = e.length, i, o, l, u;
        for (o = 0; o < r; o++) i = e[o], i && (qC(i) && (i = '"' + i + '"'), u = tf(i), l = !u && /^\d+$/.test(i), t.call(n, i, u, l, o, e))
    }

    function tf(e) {
        return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1
    }

    function QC(e) {
        return e.match(VC) && !e.match(Jy)
    }

    function GC(e) {
        return HC.test(e)
    }

    function qC(e) {
        return !tf(e) && (QC(e) || GC(e))
    }

    const YC = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
        cu = e => e.match(YC) || [], fu = e => e[0].toUpperCase() + e.slice(1),
        nf = (e, t) => cu(e).join(t).toLowerCase(),
        Zy = e => cu(e).reduce((t, n) => `${t}${t ? n[0].toUpperCase() + n.slice(1).toLowerCase() : n.toLowerCase()}`, ""),
        XC = e => fu(Zy(e)), JC = e => nf(e, "_"), ZC = e => nf(e, "-"), eO = e => fu(nf(e, " ")),
        tO = e => cu(e).map(fu).join(" ");
    var as = {
        words: cu,
        upperFirst: fu,
        camelCase: Zy,
        pascalCase: XC,
        snakeCase: JC,
        kebabCase: ZC,
        sentenceCase: eO,
        titleCase: tO
    }, ml = {}, nO = {
        get exports() {
            return ml
        }, set exports(e) {
            ml = e
        }
    };
    nO.exports = function (e) {
        return ev(rO(e), e)
    };
    ml.array = ev;

    function ev(e, t) {
        var n = e.length, r = new Array(n), i = {}, o = n, l = iO(t), u = oO(e);
        for (t.forEach(function (a) {
            if (!u.has(a[0]) || !u.has(a[1])) throw new Error("Unknown node. There is an unknown node in the supplied edges.")
        }); o--;) i[o] || s(e[o], o, new Set);
        return r;

        function s(a, c, d) {
            if (d.has(a)) {
                var f;
                try {
                    f = ", node was:" + JSON.stringify(a)
                } catch {
                    f = ""
                }
                throw new Error("Cyclic dependency" + f)
            }
            if (!u.has(a)) throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(a));
            if (!i[c]) {
                i[c] = !0;
                var v = l.get(a) || new Set;
                if (v = Array.from(v), c = v.length) {
                    d.add(a);
                    do {
                        var m = v[--c];
                        s(m, u.get(m), d)
                    } while (c);
                    d.delete(a)
                }
                r[--n] = a
            }
        }
    }

    function rO(e) {
        for (var t = new Set, n = 0, r = e.length; n < r; n++) {
            var i = e[n];
            t.add(i[0]), t.add(i[1])
        }
        return Array.from(t)
    }

    function iO(e) {
        for (var t = new Map, n = 0, r = e.length; n < r; n++) {
            var i = e[n];
            t.has(i[0]) || t.set(i[0], new Set), t.has(i[1]) || t.set(i[1], new Set), t.get(i[0]).add(i[1])
        }
        return t
    }

    function oO(e) {
        for (var t = new Map, n = 0, r = e.length; n < r; n++) t.set(e[n], n);
        return t
    }

    const lO = Object.prototype.toString, uO = Error.prototype.toString, sO = RegExp.prototype.toString,
        aO = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", cO = /^Symbol\((.*)\)(.*)$/;

    function fO(e) {
        return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e
    }

    function kp(e, t = !1) {
        if (e == null || e === !0 || e === !1) return "" + e;
        const n = typeof e;
        if (n === "number") return fO(e);
        if (n === "string") return t ? `"${e}"` : e;
        if (n === "function") return "[Function " + (e.name || "anonymous") + "]";
        if (n === "symbol") return aO.call(e).replace(cO, "Symbol($1)");
        const r = lO.call(e).slice(8, -1);
        return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + uO.call(e) + "]" : r === "RegExp" ? sO.call(e) : null
    }

    function Or(e, t) {
        let n = kp(e, t);
        return n !== null ? n : JSON.stringify(e, function (r, i) {
            let o = kp(this[r], t);
            return o !== null ? o : i
        }, 2)
    }

    function tv(e) {
        return e == null ? [] : [].concat(e)
    }

    let dO = /\$\{\s*(\w+)\s*\}/g;

    class Ie extends Error {
        static formatError(t, n) {
            const r = n.label || n.path || "this";
            return r !== n.path && (n = Object.assign({}, n, {path: r})), typeof t == "string" ? t.replace(dO, (i, o) => Or(n[o])) : typeof t == "function" ? t(n) : t
        }

        static isError(t) {
            return t && t.name === "ValidationError"
        }

        constructor(t, n, r, i) {
            super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = n, this.path = r, this.type = i, this.errors = [], this.inner = [], tv(t).forEach(o => {
                Ie.isError(o) ? (this.errors.push(...o.errors), this.inner = this.inner.concat(o.inner.length ? o.inner : o)) : this.errors.push(o)
            }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, Ie)
        }
    }

    let Pt = {
            default: "${path} is invalid",
            required: "${path} is a required field",
            defined: "${path} must be defined",
            notNull: "${path} cannot be null",
            oneOf: "${path} must be one of the following values: ${values}",
            notOneOf: "${path} must not be one of the following values: ${values}",
            notType: ({path: e, type: t, value: n, originalValue: r}) => {
                const i = r != null && r !== n ? ` (cast from the value \`${Or(r, !0)}\`).` : ".";
                return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${Or(n, !0)}\`` + i : `${e} must match the configured type. The validated value was: \`${Or(n, !0)}\`` + i
            }
        }, lt = {
            length: "${path} must be exactly ${length} characters",
            min: "${path} must be at least ${min} characters",
            max: "${path} must be at most ${max} characters",
            matches: '${path} must match the following: "${regex}"',
            email: "${path} must be a valid email",
            url: "${path} must be a valid URL",
            uuid: "${path} must be a valid UUID",
            trim: "${path} must be a trimmed string",
            lowercase: "${path} must be a lowercase string",
            uppercase: "${path} must be a upper case string"
        }, Ht = {
            min: "${path} must be greater than or equal to ${min}",
            max: "${path} must be less than or equal to ${max}",
            lessThan: "${path} must be less than ${less}",
            moreThan: "${path} must be greater than ${more}",
            positive: "${path} must be a positive number",
            negative: "${path} must be a negative number",
            integer: "${path} must be an integer"
        }, $a = {min: "${path} field must be later than ${min}", max: "${path} field must be at earlier than ${max}"},
        pO = {isValue: "${path} field must be ${value}"},
        ja = {noUnknown: "${path} field has unspecified keys: ${unknown}"}, hO = {
            min: "${path} field must have at least ${min} items",
            max: "${path} field must have less than or equal to ${max} items",
            length: "${path} must have ${length} items"
        };
    Object.assign(Object.create(null), {
        mixed: Pt,
        string: lt,
        number: Ht,
        date: $a,
        object: ja,
        array: hO,
        boolean: pO
    });
    const rf = e => e && e.__isYupSchema__;

    class yl {
        static fromOptions(t, n) {
            if (!n.then && !n.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
            let {is: r, then: i, otherwise: o} = n, l = typeof r == "function" ? r : (...u) => u.every(s => s === r);
            return new yl(t, (u, s) => {
                var a;
                let c = l(...u) ? i : o;
                return (a = c == null ? void 0 : c(s)) != null ? a : s
            })
        }

        constructor(t, n) {
            this.fn = void 0, this.refs = t, this.refs = t, this.fn = n
        }

        resolve(t, n) {
            let r = this.refs.map(o => o.getValue(n == null ? void 0 : n.value, n == null ? void 0 : n.parent, n == null ? void 0 : n.context)),
                i = this.fn(r, t, n);
            if (i === void 0 || i === t) return t;
            if (!rf(i)) throw new TypeError("conditions must return a schema object");
            return i.resolve(n)
        }
    }

    const yo = {context: "$", value: "."};

    class Jn {
        constructor(t, n = {}) {
            if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
            if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
            this.isContext = this.key[0] === yo.context, this.isValue = this.key[0] === yo.value, this.isSibling = !this.isContext && !this.isValue;
            let r = this.isContext ? yo.context : this.isValue ? yo.value : "";
            this.path = this.key.slice(r.length), this.getter = this.path && Dn.getter(this.path, !0), this.map = n.map
        }

        getValue(t, n, r) {
            let i = this.isContext ? r : this.isValue ? t : n;
            return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i
        }

        cast(t, n) {
            return this.getValue(t, n == null ? void 0 : n.parent, n == null ? void 0 : n.context)
        }

        resolve() {
            return this
        }

        describe() {
            return {type: "ref", key: this.key}
        }

        toString() {
            return `Ref(${this.key})`
        }

        static isRef(t) {
            return t && t.__isYupRef
        }
    }

    Jn.prototype.__isYupRef = !0;
    const St = e => e == null;

    function nr(e) {
        function t({value: n, path: r = "", options: i, originalValue: o, schema: l}, u, s) {
            const {name: a, test: c, params: d, message: f, skipAbsent: v} = e;
            let {parent: m, context: y, abortEarly: x = l.spec.abortEarly} = i;

            function h($) {
                return Jn.isRef($) ? $.getValue(n, m, y) : $
            }

            function p($ = {}) {
                const M = Object.assign({
                    value: n,
                    originalValue: o,
                    label: l.spec.label,
                    path: $.path || r,
                    spec: l.spec
                }, d, $.params);
                for (const rt of Object.keys(M)) M[rt] = h(M[rt]);
                const je = new Ie(Ie.formatError($.message || f, M), n, M.path, $.type || a);
                return je.params = M, je
            }

            const g = x ? u : s;
            let w = {
                path: r,
                parent: m,
                type: a,
                from: i.from,
                createError: p,
                resolve: h,
                options: i,
                originalValue: o,
                schema: l
            };
            const C = $ => {
                Ie.isError($) ? g($) : $ ? s(null) : g(p())
            }, T = $ => {
                Ie.isError($) ? g($) : u($)
            }, P = v && St(n);
            if (!i.sync) {
                try {
                    Promise.resolve(P ? !0 : c.call(w, n, w)).then(C, T)
                } catch ($) {
                    T($)
                }
                return
            }
            let N;
            try {
                var U;
                if (N = P ? !0 : c.call(w, n, w), typeof ((U = N) == null ? void 0 : U.then) == "function") throw new Error(`Validation test of type: "${w.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)
            } catch ($) {
                T($);
                return
            }
            C(N)
        }

        return t.OPTIONS = e, t
    }

    function mO(e, t, n, r = n) {
        let i, o, l;
        return t ? (Dn.forEach(t, (u, s, a) => {
            let c = s ? u.slice(1, u.length - 1) : u;
            e = e.resolve({context: r, parent: i, value: n});
            let d = e.type === "tuple", f = a ? parseInt(c, 10) : 0;
            if (e.innerType || d) {
                if (d && !a) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${l}" must contain an index to the tuple element, e.g. "${l}[0]"`);
                if (n && f >= n.length) throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${t}. because there is no value at that index. `);
                i = n, n = n && n[f], e = d ? e.spec.types[f] : e.innerType
            }
            if (!a) {
                if (!e.fields || !e.fields[c]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${l} which is a type: "${e.type}")`);
                i = n, n = n && n[c], e = e.fields[c]
            }
            o = c, l = s ? "[" + u + "]" : "." + u
        }), {schema: e, parent: i, parentPath: o}) : {parent: i, parentPath: t, schema: e}
    }

    class vl extends Set {
        describe() {
            const t = [];
            for (const n of this.values()) t.push(Jn.isRef(n) ? n.describe() : n);
            return t
        }

        resolveAll(t) {
            let n = [];
            for (const r of this.values()) n.push(t(r));
            return n
        }

        clone() {
            return new vl(this.values())
        }

        merge(t, n) {
            const r = this.clone();
            return t.forEach(i => r.add(i)), n.forEach(i => r.delete(i)), r
        }
    }

    function yr(e, t = new Map) {
        if (rf(e) || !e || typeof e != "object") return e;
        if (t.has(e)) return t.get(e);
        let n;
        if (e instanceof Date) n = new Date(e.getTime()), t.set(e, n); else if (e instanceof RegExp) n = new RegExp(e), t.set(e, n); else if (Array.isArray(e)) {
            n = new Array(e.length), t.set(e, n);
            for (let r = 0; r < e.length; r++) n[r] = yr(e[r], t)
        } else if (e instanceof Map) {
            n = new Map, t.set(e, n);
            for (const [r, i] of e.entries()) n.set(r, yr(i, t))
        } else if (e instanceof Set) {
            n = new Set, t.set(e, n);
            for (const r of e) n.add(yr(r, t))
        } else if (e instanceof Object) {
            n = {}, t.set(e, n);
            for (const [r, i] of Object.entries(e)) n[r] = yr(i, t)
        } else throw Error(`Unable to clone ${e}`);
        return n
    }

    class ht {
        constructor(t) {
            this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new vl, this._blacklist = new vl, this.exclusiveTests = Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
                this.typeError(Pt.notType)
            }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
                strip: !1,
                strict: !1,
                abortEarly: !0,
                recursive: !0,
                nullable: !1,
                optional: !0,
                coerce: !0
            }, t == null ? void 0 : t.spec), this.withMutation(n => {
                n.nonNullable()
            })
        }

        get _type() {
            return this.type
        }

        clone(t) {
            if (this._mutate) return t && Object.assign(this.spec, t), this;
            const n = Object.create(Object.getPrototypeOf(this));
            return n.type = this.type, n._typeCheck = this._typeCheck, n._whitelist = this._whitelist.clone(), n._blacklist = this._blacklist.clone(), n.internalTests = Object.assign({}, this.internalTests), n.exclusiveTests = Object.assign({}, this.exclusiveTests), n.deps = [...this.deps], n.conditions = [...this.conditions], n.tests = [...this.tests], n.transforms = [...this.transforms], n.spec = yr(Object.assign({}, this.spec, t)), n
        }

        label(t) {
            let n = this.clone();
            return n.spec.label = t, n
        }

        meta(...t) {
            if (t.length === 0) return this.spec.meta;
            let n = this.clone();
            return n.spec.meta = Object.assign(n.spec.meta || {}, t[0]), n
        }

        withMutation(t) {
            let n = this._mutate;
            this._mutate = !0;
            let r = t(this);
            return this._mutate = n, r
        }

        concat(t) {
            if (!t || t === this) return this;
            if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
            let n = this, r = t.clone();
            const i = Object.assign({}, n.spec, r.spec);
            return r.spec = i, r.internalTests = Object.assign({}, n.internalTests, r.internalTests), r._whitelist = n._whitelist.merge(t._whitelist, t._blacklist), r._blacklist = n._blacklist.merge(t._blacklist, t._whitelist), r.tests = n.tests, r.exclusiveTests = n.exclusiveTests, r.withMutation(o => {
                t.tests.forEach(l => {
                    o.test(l.OPTIONS)
                })
            }), r.transforms = [...n.transforms, ...r.transforms], r
        }

        isType(t) {
            return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t)
        }

        resolve(t) {
            let n = this;
            if (n.conditions.length) {
                let r = n.conditions;
                n = n.clone(), n.conditions = [], n = r.reduce((i, o) => o.resolve(i, t), n), n = n.resolve(t)
            }
            return n
        }

        resolveOptions(t) {
            var n, r, i;
            return Object.assign({}, t, {
                from: t.from || [],
                strict: (n = t.strict) != null ? n : this.spec.strict,
                abortEarly: (r = t.abortEarly) != null ? r : this.spec.abortEarly,
                recursive: (i = t.recursive) != null ? i : this.spec.recursive
            })
        }

        cast(t, n = {}) {
            let r = this.resolve(Object.assign({value: t}, n)), i = n.assert === "ignore-optionality",
                o = r._cast(t, n);
            if (n.assert !== !1 && !r.isType(o)) {
                if (i && St(o)) return o;
                let l = Or(t), u = Or(o);
                throw new TypeError(`The value of ${n.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${l} 
` + (u !== l ? `result of cast: ${u}` : ""))
            }
            return o
        }

        _cast(t, n) {
            let r = t === void 0 ? t : this.transforms.reduce((i, o) => o.call(this, i, t, this), t);
            return r === void 0 && (r = this.getDefault()), r
        }

        _validate(t, n = {}, r, i) {
            let {path: o, originalValue: l = t, strict: u = this.spec.strict} = n, s = t;
            u || (s = this._cast(s, Object.assign({assert: !1}, n)));
            let a = [];
            for (let c of Object.values(this.internalTests)) c && a.push(c);
            this.runTests({path: o, value: s, originalValue: l, options: n, tests: a}, r, c => {
                if (c.length) return i(c, s);
                this.runTests({path: o, value: s, originalValue: l, options: n, tests: this.tests}, r, i)
            })
        }

        runTests(t, n, r) {
            let i = !1, {tests: o, value: l, originalValue: u, path: s, options: a} = t, c = y => {
                i || (i = !0, n(y, l))
            }, d = y => {
                i || (i = !0, r(y, l))
            }, f = o.length, v = [];
            if (!f) return d([]);
            let m = {value: l, originalValue: u, path: s, options: a, schema: this};
            for (let y = 0; y < o.length; y++) {
                const x = o[y];
                x(m, c, function (p) {
                    p && (v = v.concat(p)), --f <= 0 && d(v)
                })
            }
        }

        asNestedTest({key: t, index: n, parent: r, parentPath: i, originalParent: o, options: l}) {
            const u = t ?? n;
            if (u == null) throw TypeError("Must include `key` or `index` for nested validations");
            const s = typeof u == "number";
            let a = r[u];
            const c = Object.assign({}, l, {
                strict: !0,
                parent: r,
                value: a,
                originalValue: o[u],
                key: void 0,
                [s ? "index" : "key"]: u,
                path: s || u.includes(".") ? `${i || ""}[${a ? u : `"${u}"`}]` : (i ? `${i}.` : "") + t
            });
            return (d, f, v) => this.resolve(c)._validate(a, c, f, v)
        }

        validate(t, n) {
            let r = this.resolve(Object.assign({}, n, {value: t}));
            return new Promise((i, o) => r._validate(t, n, (l, u) => {
                Ie.isError(l) && (l.value = u), o(l)
            }, (l, u) => {
                l.length ? o(new Ie(l, u)) : i(u)
            }))
        }

        validateSync(t, n) {
            let r = this.resolve(Object.assign({}, n, {value: t})), i;
            return r._validate(t, Object.assign({}, n, {sync: !0}), (o, l) => {
                throw Ie.isError(o) && (o.value = l), o
            }, (o, l) => {
                if (o.length) throw new Ie(o, t);
                i = l
            }), i
        }

        isValid(t, n) {
            return this.validate(t, n).then(() => !0, r => {
                if (Ie.isError(r)) return !1;
                throw r
            })
        }

        isValidSync(t, n) {
            try {
                return this.validateSync(t, n), !0
            } catch (r) {
                if (Ie.isError(r)) return !1;
                throw r
            }
        }

        _getDefault() {
            let t = this.spec.default;
            return t == null ? t : typeof t == "function" ? t.call(this) : yr(t)
        }

        getDefault(t) {
            return this.resolve(t || {})._getDefault()
        }

        default(t) {
            return arguments.length === 0 ? this._getDefault() : this.clone({default: t})
        }

        strict(t = !0) {
            return this.clone({strict: t})
        }

        nullability(t, n) {
            const r = this.clone({nullable: t});
            return r.internalTests.nullable = nr({
                message: n, name: "nullable", test(i) {
                    return i === null ? this.schema.spec.nullable : !0
                }
            }), r
        }

        optionality(t, n) {
            const r = this.clone({optional: t});
            return r.internalTests.optionality = nr({
                message: n, name: "optionality", test(i) {
                    return i === void 0 ? this.schema.spec.optional : !0
                }
            }), r
        }

        optional() {
            return this.optionality(!0)
        }

        defined(t = Pt.defined) {
            return this.optionality(!1, t)
        }

        nullable() {
            return this.nullability(!0)
        }

        nonNullable(t = Pt.notNull) {
            return this.nullability(!1, t)
        }

        required(t = Pt.required) {
            return this.clone().withMutation(n => n.nonNullable(t).defined(t))
        }

        notRequired() {
            return this.clone().withMutation(t => t.nullable().optional())
        }

        transform(t) {
            let n = this.clone();
            return n.transforms.push(t), n
        }

        test(...t) {
            let n;
            if (t.length === 1 ? typeof t[0] == "function" ? n = {test: t[0]} : n = t[0] : t.length === 2 ? n = {
                name: t[0],
                test: t[1]
            } : n = {
                name: t[0],
                message: t[1],
                test: t[2]
            }, n.message === void 0 && (n.message = Pt.default), typeof n.test != "function") throw new TypeError("`test` is a required parameters");
            let r = this.clone(), i = nr(n), o = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
            if (n.exclusive && !n.name) throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
            return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter(l => !(l.OPTIONS.name === n.name && (o || l.OPTIONS.test === i.OPTIONS.test))), r.tests.push(i), r
        }

        when(t, n) {
            !Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
            let r = this.clone(), i = tv(t).map(o => new Jn(o));
            return i.forEach(o => {
                o.isSibling && r.deps.push(o.key)
            }), r.conditions.push(typeof n == "function" ? new yl(i, n) : yl.fromOptions(i, n)), r
        }

        typeError(t) {
            let n = this.clone();
            return n.internalTests.typeError = nr({
                message: t, name: "typeError", test(r) {
                    return !St(r) && !this.schema._typeCheck(r) ? this.createError({params: {type: this.schema.type}}) : !0
                }
            }), n
        }

        oneOf(t, n = Pt.oneOf) {
            let r = this.clone();
            return t.forEach(i => {
                r._whitelist.add(i), r._blacklist.delete(i)
            }), r.internalTests.whiteList = nr({
                message: n, name: "oneOf", skipAbsent: !0, test(i) {
                    let o = this.schema._whitelist, l = o.resolveAll(this.resolve);
                    return l.includes(i) ? !0 : this.createError({
                        params: {
                            values: Array.from(o).join(", "),
                            resolved: l
                        }
                    })
                }
            }), r
        }

        notOneOf(t, n = Pt.notOneOf) {
            let r = this.clone();
            return t.forEach(i => {
                r._blacklist.add(i), r._whitelist.delete(i)
            }), r.internalTests.blacklist = nr({
                message: n, name: "notOneOf", test(i) {
                    let o = this.schema._blacklist, l = o.resolveAll(this.resolve);
                    return l.includes(i) ? this.createError({
                        params: {
                            values: Array.from(o).join(", "),
                            resolved: l
                        }
                    }) : !0
                }
            }), r
        }

        strip(t = !0) {
            let n = this.clone();
            return n.spec.strip = t, n
        }

        describe(t) {
            const n = (t ? this.resolve(t) : this).clone(), {label: r, meta: i, optional: o, nullable: l} = n.spec;
            return {
                meta: i,
                label: r,
                optional: o,
                nullable: l,
                default: n.getDefault(t),
                type: n.type,
                oneOf: n._whitelist.describe(),
                notOneOf: n._blacklist.describe(),
                tests: n.tests.map(s => ({
                    name: s.OPTIONS.name,
                    params: s.OPTIONS.params
                })).filter((s, a, c) => c.findIndex(d => d.name === s.name) === a)
            }
        }
    }

    ht.prototype.__isYupSchema__ = !0;
    for (const e of ["validate", "validateSync"]) ht.prototype[`${e}At`] = function (t, n, r = {}) {
        const {parent: i, parentPath: o, schema: l} = mO(this, t, n, r.context);
        return l[e](i && i[o], Object.assign({}, r, {parent: i, path: t}))
    };
    for (const e of ["equals", "is"]) ht.prototype[e] = ht.prototype.oneOf;
    for (const e of ["not", "nope"]) ht.prototype[e] = ht.prototype.notOneOf;
    let yO = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        vO = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        gO = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        wO = e => St(e) || e === e.trim(), SO = {}.toString();

    function ii() {
        return new nv
    }

    class nv extends ht {
        constructor() {
            super({
                type: "string", check(t) {
                    return t instanceof String && (t = t.valueOf()), typeof t == "string"
                }
            }), this.withMutation(() => {
                this.transform((t, n, r) => {
                    if (!r.spec.coerce || r.isType(t) || Array.isArray(t)) return t;
                    const i = t != null && t.toString ? t.toString() : t;
                    return i === SO ? t : i
                })
            })
        }

        required(t) {
            return super.required(t).withMutation(n => n.test({
                message: t || Pt.required,
                name: "required",
                skipAbsent: !0,
                test: r => !!r.length
            }))
        }

        notRequired() {
            return super.notRequired().withMutation(t => (t.tests = t.tests.filter(n => n.OPTIONS.name !== "required"), t))
        }

        length(t, n = lt.length) {
            return this.test({
                message: n, name: "length", exclusive: !0, params: {length: t}, skipAbsent: !0, test(r) {
                    return r.length === this.resolve(t)
                }
            })
        }

        min(t, n = lt.min) {
            return this.test({
                message: n, name: "min", exclusive: !0, params: {min: t}, skipAbsent: !0, test(r) {
                    return r.length >= this.resolve(t)
                }
            })
        }

        max(t, n = lt.max) {
            return this.test({
                name: "max", exclusive: !0, message: n, params: {max: t}, skipAbsent: !0, test(r) {
                    return r.length <= this.resolve(t)
                }
            })
        }

        matches(t, n) {
            let r = !1, i, o;
            return n && (typeof n == "object" ? {
                excludeEmptyString: r = !1,
                message: i,
                name: o
            } = n : i = n), this.test({
                name: o || "matches",
                message: i || lt.matches,
                params: {regex: t},
                skipAbsent: !0,
                test: l => l === "" && r || l.search(t) !== -1
            })
        }

        email(t = lt.email) {
            return this.matches(yO, {name: "email", message: t, excludeEmptyString: !0})
        }

        url(t = lt.url) {
            return this.matches(vO, {name: "url", message: t, excludeEmptyString: !0})
        }

        uuid(t = lt.uuid) {
            return this.matches(gO, {name: "uuid", message: t, excludeEmptyString: !1})
        }

        ensure() {
            return this.default("").transform(t => t === null ? "" : t)
        }

        trim(t = lt.trim) {
            return this.transform(n => n != null ? n.trim() : n).test({message: t, name: "trim", test: wO})
        }

        lowercase(t = lt.lowercase) {
            return this.transform(n => St(n) ? n : n.toLowerCase()).test({
                message: t,
                name: "string_case",
                exclusive: !0,
                skipAbsent: !0,
                test: n => St(n) || n === n.toLowerCase()
            })
        }

        uppercase(t = lt.uppercase) {
            return this.transform(n => St(n) ? n : n.toUpperCase()).test({
                message: t,
                name: "string_case",
                exclusive: !0,
                skipAbsent: !0,
                test: n => St(n) || n === n.toUpperCase()
            })
        }
    }

    ii.prototype = nv.prototype;
    let EO = e => e != +e;

    function jo() {
        return new rv
    }

    class rv extends ht {
        constructor() {
            super({
                type: "number", check(t) {
                    return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !EO(t)
                }
            }), this.withMutation(() => {
                this.transform((t, n, r) => {
                    if (!r.spec.coerce) return t;
                    let i = t;
                    if (typeof i == "string") {
                        if (i = i.replace(/\s/g, ""), i === "") return NaN;
                        i = +i
                    }
                    return r.isType(i) ? i : parseFloat(i)
                })
            })
        }

        min(t, n = Ht.min) {
            return this.test({
                message: n, name: "min", exclusive: !0, params: {min: t}, skipAbsent: !0, test(r) {
                    return r >= this.resolve(t)
                }
            })
        }

        max(t, n = Ht.max) {
            return this.test({
                message: n, name: "max", exclusive: !0, params: {max: t}, skipAbsent: !0, test(r) {
                    return r <= this.resolve(t)
                }
            })
        }

        lessThan(t, n = Ht.lessThan) {
            return this.test({
                message: n, name: "max", exclusive: !0, params: {less: t}, skipAbsent: !0, test(r) {
                    return r < this.resolve(t)
                }
            })
        }

        moreThan(t, n = Ht.moreThan) {
            return this.test({
                message: n, name: "min", exclusive: !0, params: {more: t}, skipAbsent: !0, test(r) {
                    return r > this.resolve(t)
                }
            })
        }

        positive(t = Ht.positive) {
            return this.moreThan(0, t)
        }

        negative(t = Ht.negative) {
            return this.lessThan(0, t)
        }

        integer(t = Ht.integer) {
            return this.test({name: "integer", message: t, skipAbsent: !0, test: n => Number.isInteger(n)})
        }

        truncate() {
            return this.transform(t => St(t) ? t : t | 0)
        }

        round(t) {
            var n;
            let r = ["ceil", "floor", "round", "trunc"];
            if (t = ((n = t) == null ? void 0 : n.toLowerCase()) || "round", t === "trunc") return this.truncate();
            if (r.indexOf(t.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + r.join(", "));
            return this.transform(i => St(i) ? i : Math[t](i))
        }
    }

    jo.prototype = rv.prototype;
    var xO = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;

    function _O(e) {
        var t = [1, 4, 5, 6, 7, 10, 11], n = 0, r, i;
        if (i = xO.exec(e)) {
            for (var o = 0, l; l = t[o]; ++o) i[l] = +i[l] || 0;
            i[2] = (+i[2] || 1) - 1, i[3] = +i[3] || 1, i[7] = i[7] ? String(i[7]).substr(0, 3) : 0, (i[8] === void 0 || i[8] === "") && (i[9] === void 0 || i[9] === "") ? r = +new Date(i[1], i[2], i[3], i[4], i[5], i[6], i[7]) : (i[8] !== "Z" && i[9] !== void 0 && (n = i[10] * 60 + i[11], i[9] === "+" && (n = 0 - n)), r = Date.UTC(i[1], i[2], i[3], i[4], i[5] + n, i[6], i[7]))
        } else r = Date.parse ? Date.parse(e) : NaN;
        return r
    }

    let CO = new Date(""), OO = e => Object.prototype.toString.call(e) === "[object Date]";

    class du extends ht {
        constructor() {
            super({
                type: "date", check(t) {
                    return OO(t) && !isNaN(t.getTime())
                }
            }), this.withMutation(() => {
                this.transform((t, n, r) => !r.spec.coerce || r.isType(t) ? t : (t = _O(t), isNaN(t) ? du.INVALID_DATE : new Date(t)))
            })
        }

        prepareParam(t, n) {
            let r;
            if (Jn.isRef(t)) r = t; else {
                let i = this.cast(t);
                if (!this._typeCheck(i)) throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);
                r = i
            }
            return r
        }

        min(t, n = $a.min) {
            let r = this.prepareParam(t, "min");
            return this.test({
                message: n, name: "min", exclusive: !0, params: {min: t}, skipAbsent: !0, test(i) {
                    return i >= this.resolve(r)
                }
            })
        }

        max(t, n = $a.max) {
            let r = this.prepareParam(t, "max");
            return this.test({
                message: n, name: "max", exclusive: !0, params: {max: t}, skipAbsent: !0, test(i) {
                    return i <= this.resolve(r)
                }
            })
        }
    }

    du.INVALID_DATE = CO;
    du.prototype;

    function kO(e, t = []) {
        let n = [], r = new Set, i = new Set(t.map(([l, u]) => `${l}-${u}`));

        function o(l, u) {
            let s = Dn.split(l)[0];
            r.add(s), i.has(`${u}-${s}`) || n.push([u, s])
        }

        for (const l of Object.keys(e)) {
            let u = e[l];
            r.add(l), Jn.isRef(u) && u.isSibling ? o(u.path, l) : rf(u) && "deps" in u && u.deps.forEach(s => o(s, l))
        }
        return ml.array(Array.from(r), n).reverse()
    }

    function Tp(e, t) {
        let n = 1 / 0;
        return e.some((r, i) => {
            var o;
            if ((o = t.path) != null && o.includes(r)) return n = i, !0
        }), n
    }

    function iv(e) {
        return (t, n) => Tp(e, t) - Tp(e, n)
    }

    const TO = (e, t, n) => {
        if (typeof e != "string") return e;
        let r = e;
        try {
            r = JSON.parse(e)
        } catch {
        }
        return n.isType(r) ? r : e
    };

    function Ro(e) {
        if ("fields" in e) {
            const t = {};
            for (const [n, r] of Object.entries(e.fields)) t[n] = Ro(r);
            return e.setFields(t)
        }
        if (e.type === "array") {
            const t = e.optional();
            return t.innerType && (t.innerType = Ro(t.innerType)), t
        }
        return e.type === "tuple" ? e.optional().clone({types: e.spec.types.map(Ro)}) : "optional" in e ? e.optional() : e
    }

    const PO = (e, t) => {
        const n = [...Dn.normalizePath(t)];
        if (n.length === 1) return n[0] in e;
        let r = n.pop(), i = Dn.getter(Dn.join(n), !0)(e);
        return !!(i && r in i)
    };
    let Pp = e => Object.prototype.toString.call(e) === "[object Object]";

    function $O(e, t) {
        let n = Object.keys(e.fields);
        return Object.keys(t).filter(r => n.indexOf(r) === -1)
    }

    const jO = iv([]);

    function ov(e) {
        return new lv(e)
    }

    class lv extends ht {
        constructor(t) {
            super({
                type: "object", check(n) {
                    return Pp(n) || typeof n == "function"
                }
            }), this.fields = Object.create(null), this._sortErrors = jO, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
                t && this.shape(t)
            })
        }

        _cast(t, n = {}) {
            var r;
            let i = super._cast(t, n);
            if (i === void 0) return this.getDefault();
            if (!this._typeCheck(i)) return i;
            let o = this.fields, l = (r = n.stripUnknown) != null ? r : this.spec.noUnknown,
                u = [].concat(this._nodes, Object.keys(i).filter(d => !this._nodes.includes(d))), s = {},
                a = Object.assign({}, n, {parent: s, __validating: n.__validating || !1}), c = !1;
            for (const d of u) {
                let f = o[d], v = d in i;
                if (f) {
                    let m, y = i[d];
                    a.path = (n.path ? `${n.path}.` : "") + d, f = f.resolve({value: y, context: n.context, parent: s});
                    let x = f instanceof ht ? f.spec : void 0, h = x == null ? void 0 : x.strict;
                    if (x != null && x.strip) {
                        c = c || d in i;
                        continue
                    }
                    m = !n.__validating || !h ? f.cast(i[d], a) : i[d], m !== void 0 && (s[d] = m)
                } else v && !l && (s[d] = i[d]);
                (v !== d in s || s[d] !== i[d]) && (c = !0)
            }
            return c ? s : i
        }

        _validate(t, n = {}, r, i) {
            let {from: o = [], originalValue: l = t, recursive: u = this.spec.recursive} = n;
            n.from = [{
                schema: this,
                value: l
            }, ...o], n.__validating = !0, n.originalValue = l, super._validate(t, n, r, (s, a) => {
                if (!u || !Pp(a)) {
                    i(s, a);
                    return
                }
                l = l || a;
                let c = [];
                for (let d of this._nodes) {
                    let f = this.fields[d];
                    !f || Jn.isRef(f) || c.push(f.asNestedTest({
                        options: n,
                        key: d,
                        parent: a,
                        parentPath: n.path,
                        originalParent: l
                    }))
                }
                this.runTests({tests: c, value: a, originalValue: l, options: n}, r, d => {
                    i(d.sort(this._sortErrors).concat(s), a)
                })
            })
        }

        clone(t) {
            const n = super.clone(t);
            return n.fields = Object.assign({}, this.fields), n._nodes = this._nodes, n._excludedEdges = this._excludedEdges, n._sortErrors = this._sortErrors, n
        }

        concat(t) {
            let n = super.concat(t), r = n.fields;
            for (let [i, o] of Object.entries(this.fields)) {
                const l = r[i];
                r[i] = l === void 0 ? o : l
            }
            return n.withMutation(i => i.setFields(r, this._excludedEdges))
        }

        _getDefault() {
            if ("default" in this.spec) return super._getDefault();
            if (!this._nodes.length) return;
            let t = {};
            return this._nodes.forEach(n => {
                const r = this.fields[n];
                t[n] = r && "getDefault" in r ? r.getDefault() : void 0
            }), t
        }

        setFields(t, n) {
            let r = this.clone();
            return r.fields = t, r._nodes = kO(t, n), r._sortErrors = iv(Object.keys(t)), n && (r._excludedEdges = n), r
        }

        shape(t, n = []) {
            return this.clone().withMutation(r => {
                let i = r._excludedEdges;
                return n.length && (Array.isArray(n[0]) || (n = [n]), i = [...r._excludedEdges, ...n]), r.setFields(Object.assign(r.fields, t), i)
            })
        }

        partial() {
            const t = {};
            for (const [n, r] of Object.entries(this.fields)) t[n] = "optional" in r && r.optional instanceof Function ? r.optional() : r;
            return this.setFields(t)
        }

        deepPartial() {
            return Ro(this)
        }

        pick(t) {
            const n = {};
            for (const r of t) this.fields[r] && (n[r] = this.fields[r]);
            return this.setFields(n)
        }

        omit(t) {
            const n = Object.assign({}, this.fields);
            for (const r of t) delete n[r];
            return this.setFields(n)
        }

        from(t, n, r) {
            let i = Dn.getter(t, !0);
            return this.transform(o => {
                if (!o) return o;
                let l = o;
                return PO(o, t) && (l = Object.assign({}, o), r || delete l[t], l[n] = i(o)), l
            })
        }

        json() {
            return this.transform(TO)
        }

        noUnknown(t = !0, n = ja.noUnknown) {
            typeof t != "boolean" && (n = t, t = !0);
            let r = this.test({
                name: "noUnknown", exclusive: !0, message: n, test(i) {
                    if (i == null) return !0;
                    const o = $O(this.schema, i);
                    return !t || o.length === 0 || this.createError({params: {unknown: o.join(", ")}})
                }
            });
            return r.spec.noUnknown = t, r
        }

        unknown(t = !0, n = ja.noUnknown) {
            return this.noUnknown(!t, n)
        }

        transformKeys(t) {
            return this.transform(n => {
                if (!n) return n;
                const r = {};
                for (const i of Object.keys(n)) r[t(i)] = n[i];
                return r
            })
        }

        camelCase() {
            return this.transformKeys(as.camelCase)
        }

        snakeCase() {
            return this.transformKeys(as.snakeCase)
        }

        constantCase() {
            return this.transformKeys(t => as.snakeCase(t).toUpperCase())
        }

        describe(t) {
            let n = super.describe(t);
            n.fields = {};
            for (const [i, o] of Object.entries(this.fields)) {
                var r;
                let l = t;
                (r = l) != null && r.value && (l = Object.assign({}, l, {
                    parent: l.value,
                    value: l.value[i]
                })), n.fields[i] = o.describe(l)
            }
            return n
        }
    }

    ov.prototype = lv.prototype;
    const RO = () => {
        const e = ov().shape({
            name: ii().typeError("please enter string").required("required field"),
            description: ii().typeError("please enter string").required("required field"),
            price: jo().typeError("please enter number").required("required field"),
            rating: jo().typeError("please enter number").required("required field"),
            stock: jo().typeError("please enter number").required("required field"),
            brand: ii().typeError("please enter string").required("required field"),
            category: ii().typeError("please enter string").required("required field")
        }), t = Ey(), n = nu(), r = E.useCallback(() => {
            t("/")
        }, []), i = o => {
            n(eS({
                id: Math.floor(Math.random() * (1e3 - 31) + 31),
                title: o.name,
                description: o.description,
                price: o.price,
                images: ["https://www.theseasonedhome.com/content/images/thumbs/default-image_450.png"],
                rating: o.rating,
                stock: o.stock,
                brand: o.brand,
                category: o.category
            })), r()
        };
        return k.jsxs("div", {
            className: "wrapperCreateForm",
            children: [k.jsx("div", {
                className: "wrapperBtnBack",
                children: k.jsx("button", {
                    className: "buttonBack",
                    type: "button",
                    onClick: r,
                    children: "← Home page"
                })
            }), k.jsxs("div", {
                className: "contentForm", children: [k.jsx("h2", {children: "Create new product"}), k.jsx(bC, {
                    initialValues: {
                        name: "",
                        description: "",
                        price: "",
                        rating: "",
                        stock: "",
                        brand: "",
                        category: ""
                    },
                    validateOnBlur: !0,
                    onSubmit: i,
                    validationSchema: e,
                    children: ({
                                   values: o,
                                   errors: l,
                                   touched: u,
                                   handleChange: s,
                                   handleBlur: a,
                                   isValid: c,
                                   dirty: d,
                                   handleSubmit: f
                               }) => k.jsxs(k.Fragment, {
                        children: [k.jsxs(Xy, {
                            className: "form",
                            children: [k.jsxs("label", {
                                children: ["Name:", k.jsx(Cn, {
                                    name: "name",
                                    placeholder: "Name",
                                    onChange: s,
                                    onBlur: a,
                                    value: o.name
                                }), u.name && l.name && k.jsx("p", {className: "error", children: l.name})]
                            }), k.jsxs("label", {
                                children: ["Description:", k.jsx(Cn, {
                                    name: "description",
                                    type: "text",
                                    placeholder: "Description",
                                    onChange: s,
                                    onBlur: a,
                                    value: o.description
                                }), u.description && l.description && k.jsx("p", {
                                    className: "error",
                                    children: l.description
                                })]
                            }), k.jsxs("label", {
                                children: ["Price:", k.jsx(Cn, {
                                    name: "price",
                                    type: "text",
                                    placeholder: "Price",
                                    onChange: s,
                                    onBlur: a,
                                    value: o.price
                                }), u.price && l.price && k.jsx("p", {className: "error", children: l.price})]
                            }), k.jsxs("label", {
                                children: ["Rating", k.jsx(Cn, {
                                    name: "rating",
                                    type: "text",
                                    placeholder: "Rating",
                                    onChange: s,
                                    onBlur: a,
                                    value: o.rating
                                }), u.rating && l.rating && k.jsx("p", {className: "error", children: l.rating})]
                            }), k.jsxs("label", {
                                children: ["Stock:", k.jsx(Cn, {
                                    name: "stock",
                                    type: "text",
                                    placeholder: "Stock",
                                    onChange: s,
                                    onBlur: a,
                                    value: o.stock
                                }), u.stock && l.stock && k.jsx("p", {className: "error", children: l.stock})]
                            }), k.jsxs("label", {
                                children: ["Brand:", k.jsx(Cn, {
                                    name: "brand",
                                    type: "text",
                                    placeholder: "Brand",
                                    onChange: s,
                                    onBlur: a,
                                    value: o.brand
                                }), u.brand && l.brand && k.jsx("p", {className: "error", children: l.brand})]
                            }), k.jsxs("label", {
                                children: ["Category:", k.jsx(Cn, {
                                    name: "category",
                                    type: "text",
                                    placeholder: "Category",
                                    onChange: s,
                                    onBlur: a,
                                    value: o.category
                                }), u.category && l.category && k.jsx("p", {className: "error", children: l.category})]
                            })]
                        }), k.jsx("button", {
                            onClick: () => f(),
                            disabled: !c && !d,
                            className: "btnCreateProduct",
                            type: "submit",
                            children: "Create"
                        })]
                    })
                })]
            })]
        })
    };

    function uv(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    const {toString: sv} = Object.prototype, {getPrototypeOf: of} = Object, lf = (e => t => {
            const n = sv.call(t);
            return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
        })(Object.create(null)), Ut = e => (e = e.toLowerCase(), t => lf(t) === e),
        pu = e => t => typeof t === e, {isArray: Br} = Array, Mi = pu("undefined");

    function NO(e) {
        return e !== null && !Mi(e) && e.constructor !== null && !Mi(e.constructor) && mn(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    }

    const av = Ut("ArrayBuffer");

    function AO(e) {
        let t;
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && av(e.buffer), t
    }

    const FO = pu("string"), mn = pu("function"), cv = pu("number"), uf = e => e !== null && typeof e == "object",
        bO = e => e === !0 || e === !1, No = e => {
            if (lf(e) !== "object") return !1;
            const t = of(e);
            return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
        }, LO = Ut("Date"), DO = Ut("File"), IO = Ut("Blob"), MO = Ut("FileList"), zO = e => uf(e) && mn(e.pipe),
        UO = e => {
            const t = "[object FormData]";
            return e && (typeof FormData == "function" && e instanceof FormData || sv.call(e) === t || mn(e.toString) && e.toString() === t)
        }, BO = Ut("URLSearchParams"),
        VO = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

    function Gi(e, t, {allOwnKeys: n = !1} = {}) {
        if (e === null || typeof e > "u") return;
        let r, i;
        if (typeof e != "object" && (e = [e]), Br(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e); else {
            const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), l = o.length;
            let u;
            for (r = 0; r < l; r++) u = o[r], t.call(null, e[u], u, e)
        }
    }

    function fv(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r = n.length, i;
        for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
        return null
    }

    const dv = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
        pv = e => !Mi(e) && e !== dv;

    function Ra() {
        const {caseless: e} = pv(this) && this || {}, t = {}, n = (r, i) => {
            const o = e && fv(t, i) || i;
            No(t[o]) && No(r) ? t[o] = Ra(t[o], r) : No(r) ? t[o] = Ra({}, r) : Br(r) ? t[o] = r.slice() : t[o] = r
        };
        for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && Gi(arguments[r], n);
        return t
    }

    const HO = (e, t, n, {allOwnKeys: r} = {}) => (Gi(t, (i, o) => {
            n && mn(i) ? e[o] = uv(i, n) : e[o] = i
        }, {allOwnKeys: r}), e), WO = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), KO = (e, t, n, r) => {
            e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {value: t.prototype}), n && Object.assign(e.prototype, n)
        }, QO = (e, t, n, r) => {
            let i, o, l;
            const u = {};
            if (t = t || {}, e == null) return t;
            do {
                for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0;) l = i[o], (!r || r(l, e, t)) && !u[l] && (t[l] = e[l], u[l] = !0);
                e = n !== !1 && of(e)
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t
        }, GO = (e, t, n) => {
            e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
            const r = e.indexOf(t, n);
            return r !== -1 && r === n
        }, qO = e => {
            if (!e) return null;
            if (Br(e)) return e;
            let t = e.length;
            if (!cv(t)) return null;
            const n = new Array(t);
            for (; t-- > 0;) n[t] = e[t];
            return n
        }, YO = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && of(Uint8Array)), XO = (e, t) => {
            const r = (e && e[Symbol.iterator]).call(e);
            let i;
            for (; (i = r.next()) && !i.done;) {
                const o = i.value;
                t.call(e, o[0], o[1])
            }
        }, JO = (e, t) => {
            let n;
            const r = [];
            for (; (n = e.exec(t)) !== null;) r.push(n);
            return r
        }, ZO = Ut("HTMLFormElement"), ek = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
            return r.toUpperCase() + i
        }), $p = (({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype), tk = Ut("RegExp"), hv = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e), r = {};
            Gi(n, (i, o) => {
                t(i, o, e) !== !1 && (r[o] = i)
            }), Object.defineProperties(e, r)
        }, nk = e => {
            hv(e, (t, n) => {
                if (mn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
                const r = e[n];
                if (mn(r)) {
                    if (t.enumerable = !1, "writable" in t) {
                        t.writable = !1;
                        return
                    }
                    t.set || (t.set = () => {
                        throw Error("Can not rewrite read-only method '" + n + "'")
                    })
                }
            })
        }, rk = (e, t) => {
            const n = {}, r = i => {
                i.forEach(o => {
                    n[o] = !0
                })
            };
            return Br(e) ? r(e) : r(String(e).split(t)), n
        }, ik = () => {
        }, ok = (e, t) => (e = +e, Number.isFinite(e) ? e : t), cs = "abcdefghijklmnopqrstuvwxyz", jp = "0123456789",
        mv = {DIGIT: jp, ALPHA: cs, ALPHA_DIGIT: cs + cs.toUpperCase() + jp}, lk = (e = 16, t = mv.ALPHA_DIGIT) => {
            let n = "";
            const {length: r} = t;
            for (; e--;) n += t[Math.random() * r | 0];
            return n
        };

    function uk(e) {
        return !!(e && mn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
    }

    const sk = e => {
        const t = new Array(10), n = (r, i) => {
            if (uf(r)) {
                if (t.indexOf(r) >= 0) return;
                if (!("toJSON" in r)) {
                    t[i] = r;
                    const o = Br(r) ? [] : {};
                    return Gi(r, (l, u) => {
                        const s = n(l, i + 1);
                        !Mi(s) && (o[u] = s)
                    }), t[i] = void 0, o
                }
            }
            return r
        };
        return n(e, 0)
    }, _ = {
        isArray: Br,
        isArrayBuffer: av,
        isBuffer: NO,
        isFormData: UO,
        isArrayBufferView: AO,
        isString: FO,
        isNumber: cv,
        isBoolean: bO,
        isObject: uf,
        isPlainObject: No,
        isUndefined: Mi,
        isDate: LO,
        isFile: DO,
        isBlob: IO,
        isRegExp: tk,
        isFunction: mn,
        isStream: zO,
        isURLSearchParams: BO,
        isTypedArray: YO,
        isFileList: MO,
        forEach: Gi,
        merge: Ra,
        extend: HO,
        trim: VO,
        stripBOM: WO,
        inherits: KO,
        toFlatObject: QO,
        kindOf: lf,
        kindOfTest: Ut,
        endsWith: GO,
        toArray: qO,
        forEachEntry: XO,
        matchAll: JO,
        isHTMLForm: ZO,
        hasOwnProperty: $p,
        hasOwnProp: $p,
        reduceDescriptors: hv,
        freezeMethods: nk,
        toObjectSet: rk,
        toCamelCase: ek,
        noop: ik,
        toFiniteNumber: ok,
        findKey: fv,
        global: dv,
        isContextDefined: pv,
        ALPHABET: mv,
        generateString: lk,
        isSpecCompliantForm: uk,
        toJSONObject: sk
    };

    function B(e, t, n, r, i) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i)
    }

    _.inherits(B, Error, {
        toJSON: function () {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: _.toJSONObject(this.config),
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null
            }
        }
    });
    const yv = B.prototype, vv = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
        vv[e] = {value: e}
    });
    Object.defineProperties(B, vv);
    Object.defineProperty(yv, "isAxiosError", {value: !0});
    B.from = (e, t, n, r, i, o) => {
        const l = Object.create(yv);
        return _.toFlatObject(e, l, function (s) {
            return s !== Error.prototype
        }, u => u !== "isAxiosError"), B.call(l, e.message, t, n, r, i), l.cause = e, l.name = e.name, o && Object.assign(l, o), l
    };
    const ak = null;

    function Na(e) {
        return _.isPlainObject(e) || _.isArray(e)
    }

    function gv(e) {
        return _.endsWith(e, "[]") ? e.slice(0, -2) : e
    }

    function Rp(e, t, n) {
        return e ? e.concat(t).map(function (i, o) {
            return i = gv(i), !n && o ? "[" + i + "]" : i
        }).join(n ? "." : "") : t
    }

    function ck(e) {
        return _.isArray(e) && !e.some(Na)
    }

    const fk = _.toFlatObject(_, {}, null, function (t) {
        return /^is[A-Z]/.test(t)
    });

    function hu(e, t, n) {
        if (!_.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData, n = _.toFlatObject(n, {metaTokens: !0, dots: !1, indexes: !1}, !1, function (y, x) {
            return !_.isUndefined(x[y])
        });
        const r = n.metaTokens, i = n.visitor || c, o = n.dots, l = n.indexes,
            s = (n.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(t);
        if (!_.isFunction(i)) throw new TypeError("visitor must be a function");

        function a(m) {
            if (m === null) return "";
            if (_.isDate(m)) return m.toISOString();
            if (!s && _.isBlob(m)) throw new B("Blob is not supported. Use a Buffer instead.");
            return _.isArrayBuffer(m) || _.isTypedArray(m) ? s && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m
        }

        function c(m, y, x) {
            let h = m;
            if (m && !x && typeof m == "object") {
                if (_.endsWith(y, "{}")) y = r ? y : y.slice(0, -2), m = JSON.stringify(m); else if (_.isArray(m) && ck(m) || (_.isFileList(m) || _.endsWith(y, "[]")) && (h = _.toArray(m))) return y = gv(y), h.forEach(function (g, w) {
                    !(_.isUndefined(g) || g === null) && t.append(l === !0 ? Rp([y], w, o) : l === null ? y : y + "[]", a(g))
                }), !1
            }
            return Na(m) ? !0 : (t.append(Rp(x, y, o), a(m)), !1)
        }

        const d = [], f = Object.assign(fk, {defaultVisitor: c, convertValue: a, isVisitable: Na});

        function v(m, y) {
            if (!_.isUndefined(m)) {
                if (d.indexOf(m) !== -1) throw Error("Circular reference detected in " + y.join("."));
                d.push(m), _.forEach(m, function (h, p) {
                    (!(_.isUndefined(h) || h === null) && i.call(t, h, _.isString(p) ? p.trim() : p, y, f)) === !0 && v(h, y ? y.concat(p) : [p])
                }), d.pop()
            }
        }

        if (!_.isObject(e)) throw new TypeError("data must be an object");
        return v(e), t
    }

    function Np(e) {
        const t = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0"};
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
            return t[r]
        })
    }

    function sf(e, t) {
        this._pairs = [], e && hu(e, this, t)
    }

    const wv = sf.prototype;
    wv.append = function (t, n) {
        this._pairs.push([t, n])
    };
    wv.toString = function (t) {
        const n = t ? function (r) {
            return t.call(this, r, Np)
        } : Np;
        return this._pairs.map(function (i) {
            return n(i[0]) + "=" + n(i[1])
        }, "").join("&")
    };

    function dk(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    function Sv(e, t, n) {
        if (!t) return e;
        const r = n && n.encode || dk, i = n && n.serialize;
        let o;
        if (i ? o = i(t, n) : o = _.isURLSearchParams(t) ? t.toString() : new sf(t, n).toString(r), o) {
            const l = e.indexOf("#");
            l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + o
        }
        return e
    }

    class pk {
        constructor() {
            this.handlers = []
        }

        use(t, n, r) {
            return this.handlers.push({
                fulfilled: t,
                rejected: n,
                synchronous: r ? r.synchronous : !1,
                runWhen: r ? r.runWhen : null
            }), this.handlers.length - 1
        }

        eject(t) {
            this.handlers[t] && (this.handlers[t] = null)
        }

        clear() {
            this.handlers && (this.handlers = [])
        }

        forEach(t) {
            _.forEach(this.handlers, function (r) {
                r !== null && t(r)
            })
        }
    }

    const Ap = pk, Ev = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1},
        hk = typeof URLSearchParams < "u" ? URLSearchParams : sf, mk = typeof FormData < "u" ? FormData : null,
        yk = typeof Blob < "u" ? Blob : null, vk = (() => {
            let e;
            return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
        })(),
        gk = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
        Et = {
            isBrowser: !0,
            classes: {URLSearchParams: hk, FormData: mk, Blob: yk},
            isStandardBrowserEnv: vk,
            isStandardBrowserWebWorkerEnv: gk,
            protocols: ["http", "https", "file", "blob", "url", "data"]
        };

    function wk(e, t) {
        return hu(e, new Et.classes.URLSearchParams, Object.assign({
            visitor: function (n, r, i, o) {
                return Et.isNode && _.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
            }
        }, t))
    }

    function Sk(e) {
        return _.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
    }

    function Ek(e) {
        const t = {}, n = Object.keys(e);
        let r;
        const i = n.length;
        let o;
        for (r = 0; r < i; r++) o = n[r], t[o] = e[o];
        return t
    }

    function xv(e) {
        function t(n, r, i, o) {
            let l = n[o++];
            const u = Number.isFinite(+l), s = o >= n.length;
            return l = !l && _.isArray(i) ? i.length : l, s ? (_.hasOwnProp(i, l) ? i[l] = [i[l], r] : i[l] = r, !u) : ((!i[l] || !_.isObject(i[l])) && (i[l] = []), t(n, r, i[l], o) && _.isArray(i[l]) && (i[l] = Ek(i[l])), !u)
        }

        if (_.isFormData(e) && _.isFunction(e.entries)) {
            const n = {};
            return _.forEachEntry(e, (r, i) => {
                t(Sk(r), i, n, 0)
            }), n
        }
        return null
    }

    const xk = {"Content-Type": void 0};

    function _k(e, t, n) {
        if (_.isString(e)) try {
            return (t || JSON.parse)(e), _.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError") throw r
        }
        return (n || JSON.stringify)(e)
    }

    const mu = {
        transitional: Ev,
        adapter: ["xhr", "http"],
        transformRequest: [function (t, n) {
            const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = _.isObject(t);
            if (o && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t)) return i && i ? JSON.stringify(xv(t)) : t;
            if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t)) return t;
            if (_.isArrayBufferView(t)) return t.buffer;
            if (_.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
            let u;
            if (o) {
                if (r.indexOf("application/x-www-form-urlencoded") > -1) return wk(t, this.formSerializer).toString();
                if ((u = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                    const s = this.env && this.env.FormData;
                    return hu(u ? {"files[]": t} : t, s && new s, this.formSerializer)
                }
            }
            return o || i ? (n.setContentType("application/json", !1), _k(t)) : t
        }],
        transformResponse: [function (t) {
            const n = this.transitional || mu.transitional, r = n && n.forcedJSONParsing,
                i = this.responseType === "json";
            if (t && _.isString(t) && (r && !this.responseType || i)) {
                const l = !(n && n.silentJSONParsing) && i;
                try {
                    return JSON.parse(t)
                } catch (u) {
                    if (l) throw u.name === "SyntaxError" ? B.from(u, B.ERR_BAD_RESPONSE, this, null, this.response) : u
                }
            }
            return t
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {FormData: Et.classes.FormData, Blob: Et.classes.Blob},
        validateStatus: function (t) {
            return t >= 200 && t < 300
        },
        headers: {common: {Accept: "application/json, text/plain, */*"}}
    };
    _.forEach(["delete", "get", "head"], function (t) {
        mu.headers[t] = {}
    });
    _.forEach(["post", "put", "patch"], function (t) {
        mu.headers[t] = _.merge(xk)
    });
    const af = mu,
        Ck = _.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
        Ok = e => {
            const t = {};
            let n, r, i;
            return e && e.split(`
`).forEach(function (l) {
                i = l.indexOf(":"), n = l.substring(0, i).trim().toLowerCase(), r = l.substring(i + 1).trim(), !(!n || t[n] && Ck[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
            }), t
        }, Fp = Symbol("internals");

    function Jr(e) {
        return e && String(e).trim().toLowerCase()
    }

    function Ao(e) {
        return e === !1 || e == null ? e : _.isArray(e) ? e.map(Ao) : String(e)
    }

    function kk(e) {
        const t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let r;
        for (; r = n.exec(e);) t[r[1]] = r[2];
        return t
    }

    function Tk(e) {
        return /^[-_a-zA-Z]+$/.test(e.trim())
    }

    function fs(e, t, n, r, i) {
        if (_.isFunction(r)) return r.call(this, t, n);
        if (i && (t = n), !!_.isString(t)) {
            if (_.isString(r)) return t.indexOf(r) !== -1;
            if (_.isRegExp(r)) return r.test(t)
        }
    }

    function Pk(e) {
        return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
    }

    function $k(e, t) {
        const n = _.toCamelCase(" " + t);
        ["get", "set", "has"].forEach(r => {
            Object.defineProperty(e, r + n, {
                value: function (i, o, l) {
                    return this[r].call(this, t, i, o, l)
                }, configurable: !0
            })
        })
    }

    class yu {
        constructor(t) {
            t && this.set(t)
        }

        set(t, n, r) {
            const i = this;

            function o(u, s, a) {
                const c = Jr(s);
                if (!c) throw new Error("header name must be a non-empty string");
                const d = _.findKey(i, c);
                (!d || i[d] === void 0 || a === !0 || a === void 0 && i[d] !== !1) && (i[d || s] = Ao(u))
            }

            const l = (u, s) => _.forEach(u, (a, c) => o(a, c, s));
            return _.isPlainObject(t) || t instanceof this.constructor ? l(t, n) : _.isString(t) && (t = t.trim()) && !Tk(t) ? l(Ok(t), n) : t != null && o(n, t, r), this
        }

        get(t, n) {
            if (t = Jr(t), t) {
                const r = _.findKey(this, t);
                if (r) {
                    const i = this[r];
                    if (!n) return i;
                    if (n === !0) return kk(i);
                    if (_.isFunction(n)) return n.call(this, i, r);
                    if (_.isRegExp(n)) return n.exec(i);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }

        has(t, n) {
            if (t = Jr(t), t) {
                const r = _.findKey(this, t);
                return !!(r && this[r] !== void 0 && (!n || fs(this, this[r], r, n)))
            }
            return !1
        }

        delete(t, n) {
            const r = this;
            let i = !1;

            function o(l) {
                if (l = Jr(l), l) {
                    const u = _.findKey(r, l);
                    u && (!n || fs(r, r[u], u, n)) && (delete r[u], i = !0)
                }
            }

            return _.isArray(t) ? t.forEach(o) : o(t), i
        }

        clear(t) {
            const n = Object.keys(this);
            let r = n.length, i = !1;
            for (; r--;) {
                const o = n[r];
                (!t || fs(this, this[o], o, t, !0)) && (delete this[o], i = !0)
            }
            return i
        }

        normalize(t) {
            const n = this, r = {};
            return _.forEach(this, (i, o) => {
                const l = _.findKey(r, o);
                if (l) {
                    n[l] = Ao(i), delete n[o];
                    return
                }
                const u = t ? Pk(o) : String(o).trim();
                u !== o && delete n[o], n[u] = Ao(i), r[u] = !0
            }), this
        }

        concat(...t) {
            return this.constructor.concat(this, ...t)
        }

        toJSON(t) {
            const n = Object.create(null);
            return _.forEach(this, (r, i) => {
                r != null && r !== !1 && (n[i] = t && _.isArray(r) ? r.join(", ") : r)
            }), n
        }

        [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }

        toString() {
            return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
        }

        get [Symbol.toStringTag]() {
            return "AxiosHeaders"
        }

        static from(t) {
            return t instanceof this ? t : new this(t)
        }

        static concat(t, ...n) {
            const r = new this(t);
            return n.forEach(i => r.set(i)), r
        }

        static accessor(t) {
            const r = (this[Fp] = this[Fp] = {accessors: {}}).accessors, i = this.prototype;

            function o(l) {
                const u = Jr(l);
                r[u] || ($k(i, l), r[u] = !0)
            }

            return _.isArray(t) ? t.forEach(o) : o(t), this
        }
    }

    yu.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
    _.freezeMethods(yu.prototype);
    _.freezeMethods(yu);
    const At = yu;

    function ds(e, t) {
        const n = this || af, r = t || n, i = At.from(r.headers);
        let o = r.data;
        return _.forEach(e, function (u) {
            o = u.call(n, o, i.normalize(), t ? t.status : void 0)
        }), i.normalize(), o
    }

    function _v(e) {
        return !!(e && e.__CANCEL__)
    }

    function qi(e, t, n) {
        B.call(this, e ?? "canceled", B.ERR_CANCELED, t, n), this.name = "CanceledError"
    }

    _.inherits(qi, B, {__CANCEL__: !0});

    function jk(e, t, n) {
        const r = n.config.validateStatus;
        !n.status || !r || r(n.status) ? e(n) : t(new B("Request failed with status code " + n.status, [B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
    }

    const Rk = Et.isStandardBrowserEnv ? function () {
        return {
            write: function (n, r, i, o, l, u) {
                const s = [];
                s.push(n + "=" + encodeURIComponent(r)), _.isNumber(i) && s.push("expires=" + new Date(i).toGMTString()), _.isString(o) && s.push("path=" + o), _.isString(l) && s.push("domain=" + l), u === !0 && s.push("secure"), document.cookie = s.join("; ")
            }, read: function (n) {
                const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
                return r ? decodeURIComponent(r[3]) : null
            }, remove: function (n) {
                this.write(n, "", Date.now() - 864e5)
            }
        }
    }() : function () {
        return {
            write: function () {
            }, read: function () {
                return null
            }, remove: function () {
            }
        }
    }();

    function Nk(e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    }

    function Ak(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }

    function Cv(e, t) {
        return e && !Nk(t) ? Ak(e, t) : t
    }

    const Fk = Et.isStandardBrowserEnv ? function () {
        const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
        let r;

        function i(o) {
            let l = o;
            return t && (n.setAttribute("href", l), l = n.href), n.setAttribute("href", l), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
            }
        }

        return r = i(window.location.href), function (l) {
            const u = _.isString(l) ? i(l) : l;
            return u.protocol === r.protocol && u.host === r.host
        }
    }() : function () {
        return function () {
            return !0
        }
    }();

    function bk(e) {
        const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return t && t[1] || ""
    }

    function Lk(e, t) {
        e = e || 10;
        const n = new Array(e), r = new Array(e);
        let i = 0, o = 0, l;
        return t = t !== void 0 ? t : 1e3, function (s) {
            const a = Date.now(), c = r[o];
            l || (l = a), n[i] = s, r[i] = a;
            let d = o, f = 0;
            for (; d !== i;) f += n[d++], d = d % e;
            if (i = (i + 1) % e, i === o && (o = (o + 1) % e), a - l < t) return;
            const v = c && a - c;
            return v ? Math.round(f * 1e3 / v) : void 0
        }
    }

    function bp(e, t) {
        let n = 0;
        const r = Lk(50, 250);
        return i => {
            const o = i.loaded, l = i.lengthComputable ? i.total : void 0, u = o - n, s = r(u), a = o <= l;
            n = o;
            const c = {
                loaded: o,
                total: l,
                progress: l ? o / l : void 0,
                bytes: u,
                rate: s || void 0,
                estimated: s && l && a ? (l - o) / s : void 0,
                event: i
            };
            c[t ? "download" : "upload"] = !0, e(c)
        }
    }

    const Dk = typeof XMLHttpRequest < "u", Ik = Dk && function (e) {
        return new Promise(function (n, r) {
            let i = e.data;
            const o = At.from(e.headers).normalize(), l = e.responseType;
            let u;

            function s() {
                e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u)
            }

            _.isFormData(i) && (Et.isStandardBrowserEnv || Et.isStandardBrowserWebWorkerEnv) && o.setContentType(!1);
            let a = new XMLHttpRequest;
            if (e.auth) {
                const v = e.auth.username || "",
                    m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                o.set("Authorization", "Basic " + btoa(v + ":" + m))
            }
            const c = Cv(e.baseURL, e.url);
            a.open(e.method.toUpperCase(), Sv(c, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;

            function d() {
                if (!a) return;
                const v = At.from("getAllResponseHeaders" in a && a.getAllResponseHeaders()), y = {
                    data: !l || l === "text" || l === "json" ? a.responseText : a.response,
                    status: a.status,
                    statusText: a.statusText,
                    headers: v,
                    config: e,
                    request: a
                };
                jk(function (h) {
                    n(h), s()
                }, function (h) {
                    r(h), s()
                }, y), a = null
            }

            if ("onloadend" in a ? a.onloadend = d : a.onreadystatechange = function () {
                !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(d)
            }, a.onabort = function () {
                a && (r(new B("Request aborted", B.ECONNABORTED, e, a)), a = null)
            }, a.onerror = function () {
                r(new B("Network Error", B.ERR_NETWORK, e, a)), a = null
            }, a.ontimeout = function () {
                let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                const y = e.transitional || Ev;
                e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new B(m, y.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED, e, a)), a = null
            }, Et.isStandardBrowserEnv) {
                const v = (e.withCredentials || Fk(c)) && e.xsrfCookieName && Rk.read(e.xsrfCookieName);
                v && o.set(e.xsrfHeaderName, v)
            }
            i === void 0 && o.setContentType(null), "setRequestHeader" in a && _.forEach(o.toJSON(), function (m, y) {
                a.setRequestHeader(y, m)
            }), _.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), l && l !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", bp(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", bp(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = v => {
                a && (r(!v || v.type ? new qi(null, e, a) : v), a.abort(), a = null)
            }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
            const f = bk(c);
            if (f && Et.protocols.indexOf(f) === -1) {
                r(new B("Unsupported protocol " + f + ":", B.ERR_BAD_REQUEST, e));
                return
            }
            a.send(i || null)
        })
    }, Fo = {http: ak, xhr: Ik};
    _.forEach(Fo, (e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {value: t})
            } catch {
            }
            Object.defineProperty(e, "adapterName", {value: t})
        }
    });
    const Mk = {
        getAdapter: e => {
            e = _.isArray(e) ? e : [e];
            const {length: t} = e;
            let n, r;
            for (let i = 0; i < t && (n = e[i], !(r = _.isString(n) ? Fo[n.toLowerCase()] : n)); i++) ;
            if (!r) throw r === !1 ? new B(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(_.hasOwnProp(Fo, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
            if (!_.isFunction(r)) throw new TypeError("adapter is not a function");
            return r
        }, adapters: Fo
    };

    function ps(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new qi(null, e)
    }

    function Lp(e) {
        return ps(e), e.headers = At.from(e.headers), e.data = ds.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Mk.getAdapter(e.adapter || af.adapter)(e).then(function (r) {
            return ps(e), r.data = ds.call(e, e.transformResponse, r), r.headers = At.from(r.headers), r
        }, function (r) {
            return _v(r) || (ps(e), r && r.response && (r.response.data = ds.call(e, e.transformResponse, r.response), r.response.headers = At.from(r.response.headers))), Promise.reject(r)
        })
    }

    const Dp = e => e instanceof At ? e.toJSON() : e;

    function br(e, t) {
        t = t || {};
        const n = {};

        function r(a, c, d) {
            return _.isPlainObject(a) && _.isPlainObject(c) ? _.merge.call({caseless: d}, a, c) : _.isPlainObject(c) ? _.merge({}, c) : _.isArray(c) ? c.slice() : c
        }

        function i(a, c, d) {
            if (_.isUndefined(c)) {
                if (!_.isUndefined(a)) return r(void 0, a, d)
            } else return r(a, c, d)
        }

        function o(a, c) {
            if (!_.isUndefined(c)) return r(void 0, c)
        }

        function l(a, c) {
            if (_.isUndefined(c)) {
                if (!_.isUndefined(a)) return r(void 0, a)
            } else return r(void 0, c)
        }

        function u(a, c, d) {
            if (d in t) return r(a, c);
            if (d in e) return r(void 0, a)
        }

        const s = {
            url: o,
            method: o,
            data: o,
            baseURL: l,
            transformRequest: l,
            transformResponse: l,
            paramsSerializer: l,
            timeout: l,
            timeoutMessage: l,
            withCredentials: l,
            adapter: l,
            responseType: l,
            xsrfCookieName: l,
            xsrfHeaderName: l,
            onUploadProgress: l,
            onDownloadProgress: l,
            decompress: l,
            maxContentLength: l,
            maxBodyLength: l,
            beforeRedirect: l,
            transport: l,
            httpAgent: l,
            httpsAgent: l,
            cancelToken: l,
            socketPath: l,
            responseEncoding: l,
            validateStatus: u,
            headers: (a, c) => i(Dp(a), Dp(c), !0)
        };
        return _.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
            const d = s[c] || i, f = d(e[c], t[c], c);
            _.isUndefined(f) && d !== u || (n[c] = f)
        }), n
    }

    const Ov = "1.3.4", cf = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
        cf[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
        }
    });
    const Ip = {};
    cf.transitional = function (t, n, r) {
        function i(o, l) {
            return "[Axios v" + Ov + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "")
        }

        return (o, l, u) => {
            if (t === !1) throw new B(i(l, " has been removed" + (n ? " in " + n : "")), B.ERR_DEPRECATED);
            return n && !Ip[l] && (Ip[l] = !0, console.warn(i(l, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, l, u) : !0
        }
    };

    function zk(e, t, n) {
        if (typeof e != "object") throw new B("options must be an object", B.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let i = r.length;
        for (; i-- > 0;) {
            const o = r[i], l = t[o];
            if (l) {
                const u = e[o], s = u === void 0 || l(u, o, e);
                if (s !== !0) throw new B("option " + o + " must be " + s, B.ERR_BAD_OPTION_VALUE);
                continue
            }
            if (n !== !0) throw new B("Unknown option " + o, B.ERR_BAD_OPTION)
        }
    }

    const Aa = {assertOptions: zk, validators: cf}, Vt = Aa.validators;

    class gl {
        constructor(t) {
            this.defaults = t, this.interceptors = {request: new Ap, response: new Ap}
        }

        request(t, n) {
            typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = br(this.defaults, n);
            const {transitional: r, paramsSerializer: i, headers: o} = n;
            r !== void 0 && Aa.assertOptions(r, {
                silentJSONParsing: Vt.transitional(Vt.boolean),
                forcedJSONParsing: Vt.transitional(Vt.boolean),
                clarifyTimeoutError: Vt.transitional(Vt.boolean)
            }, !1), i !== void 0 && Aa.assertOptions(i, {
                encode: Vt.function,
                serialize: Vt.function
            }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
            let l;
            l = o && _.merge(o.common, o[n.method]), l && _.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m => {
                delete o[m]
            }), n.headers = At.concat(l, o);
            const u = [];
            let s = !0;
            this.interceptors.request.forEach(function (y) {
                typeof y.runWhen == "function" && y.runWhen(n) === !1 || (s = s && y.synchronous, u.unshift(y.fulfilled, y.rejected))
            });
            const a = [];
            this.interceptors.response.forEach(function (y) {
                a.push(y.fulfilled, y.rejected)
            });
            let c, d = 0, f;
            if (!s) {
                const m = [Lp.bind(this), void 0];
                for (m.unshift.apply(m, u), m.push.apply(m, a), f = m.length, c = Promise.resolve(n); d < f;) c = c.then(m[d++], m[d++]);
                return c
            }
            f = u.length;
            let v = n;
            for (d = 0; d < f;) {
                const m = u[d++], y = u[d++];
                try {
                    v = m(v)
                } catch (x) {
                    y.call(this, x);
                    break
                }
            }
            try {
                c = Lp.call(this, v)
            } catch (m) {
                return Promise.reject(m)
            }
            for (d = 0, f = a.length; d < f;) c = c.then(a[d++], a[d++]);
            return c
        }

        getUri(t) {
            t = br(this.defaults, t);
            const n = Cv(t.baseURL, t.url);
            return Sv(n, t.params, t.paramsSerializer)
        }
    }

    _.forEach(["delete", "get", "head", "options"], function (t) {
        gl.prototype[t] = function (n, r) {
            return this.request(br(r || {}, {method: t, url: n, data: (r || {}).data}))
        }
    });
    _.forEach(["post", "put", "patch"], function (t) {
        function n(r) {
            return function (o, l, u) {
                return this.request(br(u || {}, {
                    method: t,
                    headers: r ? {"Content-Type": "multipart/form-data"} : {},
                    url: o,
                    data: l
                }))
            }
        }

        gl.prototype[t] = n(), gl.prototype[t + "Form"] = n(!0)
    });
    const bo = gl;

    class ff {
        constructor(t) {
            if (typeof t != "function") throw new TypeError("executor must be a function.");
            let n;
            this.promise = new Promise(function (o) {
                n = o
            });
            const r = this;
            this.promise.then(i => {
                if (!r._listeners) return;
                let o = r._listeners.length;
                for (; o-- > 0;) r._listeners[o](i);
                r._listeners = null
            }), this.promise.then = i => {
                let o;
                const l = new Promise(u => {
                    r.subscribe(u), o = u
                }).then(i);
                return l.cancel = function () {
                    r.unsubscribe(o)
                }, l
            }, t(function (o, l, u) {
                r.reason || (r.reason = new qi(o, l, u), n(r.reason))
            })
        }

        throwIfRequested() {
            if (this.reason) throw this.reason
        }

        subscribe(t) {
            if (this.reason) {
                t(this.reason);
                return
            }
            this._listeners ? this._listeners.push(t) : this._listeners = [t]
        }

        unsubscribe(t) {
            if (!this._listeners) return;
            const n = this._listeners.indexOf(t);
            n !== -1 && this._listeners.splice(n, 1)
        }

        static source() {
            let t;
            return {
                token: new ff(function (i) {
                    t = i
                }), cancel: t
            }
        }
    }

    const Uk = ff;

    function Bk(e) {
        return function (n) {
            return e.apply(null, n)
        }
    }

    function Vk(e) {
        return _.isObject(e) && e.isAxiosError === !0
    }

    const Fa = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(Fa).forEach(([e, t]) => {
        Fa[t] = e
    });
    const Hk = Fa;

    function kv(e) {
        const t = new bo(e), n = uv(bo.prototype.request, t);
        return _.extend(n, bo.prototype, t, {allOwnKeys: !0}), _.extend(n, t, null, {allOwnKeys: !0}), n.create = function (i) {
            return kv(br(e, i))
        }, n
    }

    const de = kv(af);
    de.Axios = bo;
    de.CanceledError = qi;
    de.CancelToken = Uk;
    de.isCancel = _v;
    de.VERSION = Ov;
    de.toFormData = hu;
    de.AxiosError = B;
    de.Cancel = de.CanceledError;
    de.all = function (t) {
        return Promise.all(t)
    };
    de.spread = Bk;
    de.isAxiosError = Vk;
    de.mergeConfig = br;
    de.AxiosHeaders = At;
    de.formToJSON = e => xv(_.isHTMLForm(e) ? new FormData(e) : e);
    de.HttpStatusCode = Hk;
    de.default = de;
    const Wk = de, Kk = "https://dummyjson.com/products", Qk = () => {
        const e = nu();
        return {
            getProductsData: E.useCallback(() => {
                Wk.get(Kk).then(n => {
                    e(Zw(n.data.products))
                })
            }, [])
        }
    }, Gk = () => {
        const {getProductsData: e} = Qk();
        return E.useEffect(() => e(), []), k.jsx(tE, {
            basename: "/Product-Store-application/",
            children: k.jsxs(eE, {
                children: [k.jsx(wa, {
                    path: "/",
                    element: k.jsx(nE, {})
                }), k.jsx(wa, {path: "/createNewProduct", element: k.jsx(RO, {})})]
            })
        })
    }, qk = Uw({reducer: {productsReducer: rS}});
    ms.createRoot(document.getElementById("root")).render(k.jsx(Ma.StrictMode, {
        children: k.jsx(iw, {
            store: qk,
            children: k.jsx(Gk, {})
        })
    }))
});
export default Yk();
